// =============================================================================
// Create Documentation Markdown
// (c) Mathigon
// =============================================================================


const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');

function generateDocs(module){
  const folder = path.join(process.cwd(), `../${module}.js/src`);
  const files = fs.readdirSync(folder);

  const markdown = files.map(f => {
    let id = f.slice(0, f.length - 3);
    let title = id.replace(/(^|-)(.)/g, (a, b, c) => ' ' + c.toUpperCase()).trim();

    const md = jsdoc2md.renderSync({
      files: folder + '/' + f,
      separators: true,
      partial: ['templates/header.hbs'],
      'heading-depth': 3,
      'global-index-format': 'none',
      'module-index-format': 'none'
    }).replace(/⇒/g, ':').replace(/\*\*Kind\*\*/g, 'Kind');
    return `## <a id="${id}"></a> ${title}\n\n${md}\n`;
  });

  const output = path.join(process.cwd(), `docs/${module}.md`);
  fs.writeFileSync(output, markdown.join(''));
}

for (const m of ['core', 'fermat', 'hilbert', 'boost']) generateDocs(m);
