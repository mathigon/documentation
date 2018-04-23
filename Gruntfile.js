// =============================================================================
// Grunt Configuration
// (c) Mathigon
// =============================================================================


const grunt = require('grunt');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rollup = require('rollup');
const rollupResolve = require('rollup-plugin-node-resolve');
const babel = require('@babel/core');
const babelOld = require('babel-core');

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

const browsers = ['> 1%', 'not ie <= 11', 'not ios < 10'];


// =============================================================================
// Custom Rollup Plugins
// TODO This is a duplicate of the mathigon.org Gruntfile.

const babelOptions = {
  presets: [['@babel/preset-env', {
    targets: {browsers},
    modules: false,
    useBuiltIns: false,
    loose: true
  }]]
};

grunt.registerMultiTask('babel', '', function() {
  this.files.forEach(function(el) {
    let result = babel.transformFileSync(el.src[0], babelOptions);
    result = babelOld.transform(result.code, {presets: [['minify']]});
    grunt.file.write(el.dest, '/* (c) Mathigon */\n' + result.code + '\n');
  });
});

grunt.registerMultiTask('rollup', '', function() {
  const done = this.async();
  const options = this.options({name: 'app'});

  function onwarn(error) {
    if (error.code !== 'CIRCULAR_DEPENDENCY') grunt.log.error(error.message);
  }

  const promises = this.files.map(f => {
    return rollup.rollup({input: f.src[0], plugins: [rollupResolve()], onwarn})
        .then(bundle => bundle.generate({format: 'iife', name: options.name}))
        .then(result => grunt.file.write(f.dest, result.code));
  });

  Promise.all(promises)
      .then(() => done())
      .catch(error => grunt.fail.warn(error));
});


// =============================================================================


grunt.initConfig({

  less: {
    options: {optimisation: 1},
    app: {files: {'build/styles.css': 'src/styles.less'}}
  },

  postcss: {
    options: {processors: [autoprefixer({browsers}), cssnano()]},
    app: {files: [{src: 'build/styles.css'}]}
  },

  rollup: {
    app: {files: {'build/scripts.js': 'src/scripts.js'}}
  },

  babel: {
    app: {files: [{'build/scripts.js': 'build/scripts.js'}]}
  },

  pug: {
    app: {
      files: [{
        expand: true,
        cwd: 'src',
        src: ['*.pug', '!_template.pug'],
        dest: 'build',
        ext: '.html'
      }]
    }
  },

  copy: {
    app: {
      files: [{
        expand: true,
        cwd: 'src',
        src: ['vendor/**', 'images/**', 'favicon.ico', 'CNAME'],
        dest: 'build'
      }]
    }
  },

  watch: {
    css: {
      files: 'src/styles.less',
      tasks: ['less', 'postcss']
    },
    js: {
      files: 'src/*.js',
      tasks: ['rollup', 'babel']
    },
    pug: {
      files: ['src/*.pug', '../docs/*.md'],
      tasks: ['pug']
    }
  },

  concurrent: {
    options: {limit: 3, logConcurrentOutput: true},
    app: {tasks: ['watch:css', 'watch:js', 'watch:pug']}
  },

  buildcontrol: {
    app: {
      options: {
        dir: 'build',
        branch: 'master',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%',
        remote: 'git@github.com:Mathigon/mathigon.github.io.git'
      }
    }
  }
});

grunt.registerTask('default', ['less', 'postcss', 'rollup', 'babel', 'pug', 'copy']);
