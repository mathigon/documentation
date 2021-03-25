// =============================================================================
// Typescript Documentation Generator
// (c) Mathigon
// =============================================================================


const glob = require('glob');
const path = require('path');
const fs = require('fs').promises;
const util = require('util');
const {toTitleCase} = require('@mathigon/core');
const exec = util.promisify(require('child_process').exec);


// TODO Copy static markdown files from boost.js, polypad and studio repos
// TODO Styling improvements
// TODO Different colours for each repository (CSS variables?)


function ref(name) {
  // TODO Add hyperlinks: `[${name}](/module/file#${name.toLowerCase()})`
  return name;
}

function signature(s) {
  const parameters = s.parameters?.map(p => `${p.name}: ${type(p.type)}`).join(', ') || '';
  return `(${parameters}): ${type(s.type)}`;
}

function type(t) {
  if (!t) return 'any';

  if (t.type === 'reference') {
    let n = ref(t.name);
    if (t.typeArguments) n += `&lt;${t.typeArguments.map(x => type(x)).join(', ')}&gt;`;
    return n;
  }

  if (t.type === 'predicate') {
    return `${t.asserts ? 'asserts ' : ''}${t.name}${t.targetType ? ' is ' + type(t.targetType) : ''}`
  }

  if (t.type === 'intrinsic') return t.name;
  if (t.type === 'rest') return `...${type(t.elementType)}`
  if (t.type === 'literal') return t.value;
  if (t.type === 'array') return `Array&lt;${type(t.elementType)}&gt;`;
  if (t.type === 'union') return t.types.map(x => type(x)).join('|');
  if (t.type === 'tuple') return `[${t.elements.map(x => type(x)).join(', ')}]`;

  if (t.type === 'reflection' && t.declaration?.children) {
    const children = t.declaration?.children.map(c => {
      if (c.getSignature && c.setSignature) return `${c.name}: ${type(c.type)}`;
      if (c.getSignature) return `get ${c.name}: ${type(c.type)}`;
      if (c.setSignature) return `set ${c.name}: ${type(c.type)}`;
      return `${c.name}${c.flags.isOptional ? '?' : ''}: ${type(c.type)}`;
    });
    return `{${children.join(', ')}}`;
  }

  if (t.type === 'reflection' && t.declaration?.signatures?.length) {
    return signature(t.declaration.signatures[0]);
  }

  if (t.type === 'reflection') return '{}';

  console.error('Missing type implementation for', t.type);
  return ''
}


function generateDocs(data, depth, base) {
  if (data.inheritedFrom || data.flas?.isPrivate) return '';
  const result = ['<div class="docs-item" markdown="1">'];

  if (data.sources?.length) {
    const s = data.sources[0];
    result.push(`<div><a class="source" target="_blank" href="${base}${s.fileName}#L${s.line}">${s.fileName}#L${s.line}</a></div>`);
  }

  let title = `${'#'.repeat(depth)}`;
  if (data.flags?.isReadonly) title += ' <span class="pill">readonly</span>';
  if (data.flags?.isStatic) title += ' <span class="pill">static</span>';
  if (['Interface', 'Class', 'Type alias', 'Accessor', 'Method', 'Property'].includes(data.kindString)) title += ` <span class="pill">${data.kindString}</span>`;

  const dot = ['Accessor', 'Method', 'Property'].includes(data.kindString)
  title += (dot ? ' .' : ' ') + data.name

  const q = data.flags?.isOptional ? '?' : '';  // TODO check this!
  if (data.getSignature?.length) {
    const s = data.getSignature[0];
    if (s.type?.name) title += ` <span class="signature">${q}: ${type(s.type)}</span>`;
  } else if (data.signatures?.length) {
    title += ` <span class="signature">${signature(data.signatures[0])}</span>`;
  } else if (data.type?.name) {
    title += ` <span class="signature">${q}: ${type(data.type)}</span>`;
  }
  result.push(title);

  if (data.comment) result.push(data.comment.shortText);

  if (data.implementedTypes?.length) {
    result.push(`Implements ${data.implementedTypes.map(t => type(t)).join(', ')}`);
  }
  if (data.extendedTypes?.length) {
    result.push(`Extends ${data.extendedTypes.map(t => type(t)).join(', ')}`);
  }

  if (data.defaultValue) result.push(`Default value: \`${data.defaultValue}\``);

  for (const s of data.signatures || []) {
    if (s.comment) result.push(s.comment.shortText);  // TODO Check this

    if (s.parameters) {
      let parameters = `| Name | Type | Default | Description |\n| --- | --- | --- | --- |\n`;
      for (const p of s.parameters) parameters += `| \`${p.name}\` | ${type(p.type)} | ${p.defaultValue || ''} |  |\n`;
      result.push(parameters);
    }
  }

  // TODO Group children by type
  for (const c of data.children || []) result.push(generateDocs(c, depth + 1, base));

  result.push('</div>');
  return result.filter(t => t).join('\n\n');
}

// -----------------------------------------------------------------------------

const REPOS = {
  'core.js': {base: 'src', out: 'core'},
  'fermat.js': {base: 'src', out: 'fermat'},
  'euclid.js': {base: 'src', out: 'euclid'},
  'hilbert.js': {base: 'src', out: 'hilbert'},
  'boost.js': {base: 'src', out: 'boost'},
  // 'studio': {base: 'frontend/components'}
};

(async () => {
  for (const [repo, options] of Object.entries(REPOS)) {
    const dir = path.join(__dirname, '../', repo);
    const files = glob.sync(`${options.base}/**/*.ts`, {cwd: dir});

    for (const [i, f] of files.entries()) {
      await exec(`npx typedoc ${dir}/${f} --tsconfig ${dir}/tsconfig.json --json .tmp.json`);
      const json = JSON.parse(await fs.readFile('./.tmp.json', 'utf8'));

      const git = `https://github.com/mathigon/${repo}/tree/master/${options.base}/`;
      const markdown = json.children.map(c => generateDocs(c, 2, git)).join('\n\n');

      const id = path.basename(f, '.ts');
      const title = toTitleCase(id.replace(/-/g, ' '));

      const header = `---
layout: page
nav_order: ${i + 1}
parent: ${toTitleCase(repo)}
---

# ${title}\n\n`

      await fs.mkdir(`${options.out}`, {recursive: true});
      await fs.writeFile(`${options.out}/${id}.md`, header + markdown);
      console.log(`Generated ${id}.md`);
    }
  }

  await fs.unlink('.tmp.json');
})();
