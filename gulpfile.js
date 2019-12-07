// =============================================================================
// Open Source Documentation Gulpfile
// (c) Mathigon
// =============================================================================


const fs = require('fs');
const gulp = require('gulp');
const gulpRollup = require('gulp-better-rollup');
const gulpRename = require('gulp-rename');
const gulpLess = require('gulp-less');
const gulpPostcss = require('gulp-postcss');
const gulpPug = require('gulp-pug');
const gulpDeploy = require('gulp-gh-pages');

const resolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript');
const autoprefixer = require('autoprefixer');
const tsconfig = require('./tsconfig.json');
const terser = require('terser');
const cssnano = require('cssnano');
const through2 = require('through2');
const Handlebars = require('handlebars');


// -----------------------------------------------------------------------------
// Gulp Tasks

function editFile(callback) {
  return through2.obj((file, _, cb) => {
    const code = callback(file.contents.toString());
    file.contents = Buffer.from(code);
    cb(null, file);
  });
}

function styles() {
  return gulp.src('src/**/*.less')
      .pipe(gulpLess())
      .pipe(gulpPostcss([autoprefixer(), cssnano()]))
      .pipe(gulpRename({extname: '.css'}))
      .pipe(editFile((src) => '/* (c) Mathigon */\n' + src))
      .pipe(gulp.dest('build'));
}

const TSConfig = Object.assign({}, tsconfig.compilerOptions,
    {include: ['../*.ts', '../**/*.ts']});

function scripts() {
  return gulp.src(['src/**/*.ts'])
      .pipe(gulpRollup({
        plugins: [resolve(), typescript(TSConfig)],
        onwarn: (e) => {
          if (e.code !== 'CIRCULAR_DEPENDENCY') console.warn(e.message);
        }
      }, {format: 'iife', name: 'App'}))
      .pipe(gulpRename({extname: '.js'}))
      .pipe(editFile((src) => src.replace(/\/\*![\s\S]*?\*\//g, '')))
      .pipe(editFile((src) => terser.minify(src, {}).code))
      .pipe(editFile((src) => '/* (c) Mathigon */\n' + src))
      .pipe(gulp.dest('build'));
}

function assets() {
  return gulp.src(['src/**/*.{gif,png,svg,jpg,ico,json}', 'src/CNAME'])
      .pipe(gulp.dest('build'));
}


// -----------------------------------------------------------------------------
// Templates

const path = 'node_modules/typedoc-default-themes/bin/default/partials';
const partialFiles = fs.readdirSync(path);

const partials = {};
for (const p of partialFiles) {
  const template = fs.readFileSync(`${__dirname}/${path}/${p}`, 'utf8');
  partials[p.replace('.hbs', '')] = Handlebars.compile(template);
}
Handlebars.registerPartial(partials);

Handlebars.registerHelper({
  'compact': require('typedoc/dist/lib/output/helpers/compact.js').compact,
  'ifCond': require('typedoc/dist/lib/output/helpers/if-cond.js').ifCond,
  'ifSignature': require('typedoc/dist/lib/output/helpers/if-signature.js').ifSignature,
  'wbr': require('typedoc/dist/lib/output/helpers/wbr.js').wbr
});

const parseTemplate = (file, data) => partials[file](data);
const toTitleCase = (str) => str.split('-').map(x => x.replace(x[0], x[0].toUpperCase())).join(' ');

function templates() {
  const core = require('./docs/core.json');
  const fermat = require('./docs/fermat.json');
  const boost = require('./docs/boost.json');
  const hilbert = require('./docs/hilbert.json');
  return gulp.src(['src/**/*.pug', '!src/**/_*.pug'])
      .pipe(gulpPug({data: {core, fermat, boost, hilbert, parseTemplate,
          toTitleCase}}))
      .pipe(gulpRename({extname: '.html'}))
      .pipe(gulp.dest('build'));
}

// -----------------------------------------------------------------------------

exports.watch = () => {
  gulp.watch('src/**/*.less', styles);
  gulp.watch('src/**/*.ts', scripts);
  gulp.watch(['src/**/*.pug', 'docs/*.json', 'pages/*.md'], templates);
};

exports.default = gulp.parallel(styles, scripts, assets, templates);

exports.deploy = () => {
  return gulp.src('build/**/*')
      .pipe(gulpDeploy({
        remoteUrl: 'git@github.com:Mathigon/mathigon.github.io.git',
        branch: 'master',
      }));
};
