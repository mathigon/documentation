// =============================================================================
// Mathigon.io Scripts
// (c) Mathigon
// =============================================================================



import { $, $N, $body, $html, Browser } from '@mathigon/boost';

$html.addClass((Browser.isMobile ? 'is' : 'not') + '-mobile');
Browser.replaceSvgImports();

Browser.ready(function() {
  const $content = $('.api-body');
  if (!$content) return;

  const $sidebar = $('.sidebar-body');
  const positions = [];

  let $currentSection;
  $content.$$('h2, h3, h4').forEach(($el, i) => {
    const name = $el.$('a').id;
    let $link, $section;

    if ($el.is('h2')) {
      $link = $N('a', {href: '#' + name, html: $el.text}, $sidebar);
      $currentSection = $section = $N('div', {class: 'hidden'}, $sidebar);
    } else {
      $link = $N('a', {href: '#' + name, html: name.replace('+', '#').replace('module_', '')}, $currentSection);
      $section = $currentSection;
    }

    Browser.resize(() => positions[i] = [$el.positionTop, $link, $section]);
  });


  function getActive(s) {
    for (let p of positions) if (p[0] > s) return p;
  }

  let $activeLink;
  let $activeSection;
  $body.on('scroll', function({ top }) {
    let active = getActive(top);

    if (active[1] !== $activeLink) {
      if ($activeLink) $activeLink.removeClass('active');
      $activeLink = active[1];
      $activeLink.addClass('active');
    }

    if (active[2] !== $activeSection) {
      if ($activeSection) $activeSection.addClass('hidden');
      $activeSection = active[2];
      if ($activeSection) $activeSection.removeClass('hidden');
    }
  });
});
