// =============================================================================
// Mathigon.io Scripts
// (c) Mathigon
// =============================================================================


import {$, $N, $body, $html, Browser, replaceSvgImports, ElementView} from '@mathigon/boost';
import '../../mathigon.org/src/shared/components/popup/popup';


$html.addClass((Browser.isMobile ? 'is' : 'not') + '-mobile');
replaceSvgImports();

Browser.ready(() => {
  const $content = $('.api-body');
  if (!$content) return;

  const $sidebar = $('.sidebar-body');
  const positions: [number, ElementView, ElementView][] = [];

  let $currentSection: ElementView;
  $content.$$('h2, h3').forEach(($el, i) => {
    const name = $el.$('a')!.id;
    let $link: ElementView;
    let $section: ElementView;

    if ($el.is('h2')) {
      $link = $N('a', {href: '#' + name, html: $el.text}, $sidebar);
      $currentSection = $section = $N('div', {class: 'hidden'}, $sidebar);
    } else {
      $link = $N('a', {
        href: '#' + name, html: name.replace('+', '#').replace('module_', '')
      }, $currentSection);
      $section = $currentSection;
    }

    Browser.onResize(() => positions[i] = [$el.positionTop, $link, $section]);
  });


  function getActive(s: number) {
    for (let p of positions) if (p[0] > s) return p;
  }

  let $activeLink: ElementView;
  let $activeSection: ElementView;
  $body.on('scroll', function ({top}) {
    let active = getActive(top)!;

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
