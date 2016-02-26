// ================================================================================================
// Mathigon.io
// (c) 2016, Mathigon
// ================================================================================================


import { $, $N, $body } from 'elements';
import Browser from 'browser';

Browser.ready(function() {

    let $content = $('#body');
    let $sidebar = $('.sidebar');
    let $sidebarWrap = $('.sidebar-wrap');
    let $sidebarTopicWrap;
    let $sidebarActive;
    let $sidebarActiveBox;

    let positions = [];
    let bodyTop;

    Browser.resize(function() {
        bodyTop = $content.offsetTop - 50;
        positions = [];
    });

    $('#api').findAll('h1, h3').forEach(function($el) {
        let $sidebarEl;
        let $topicWrap;
        let top;

        if ($el.is('h1')) {
            $sidebarEl = $N('div', { class: 'sidebar-h2', html: $el.text }, $sidebarWrap);
            $sidebarTopicWrap = $topicWrap = $N('div', { style: 'display: none' }, $sidebarWrap);
        } else {
            $sidebarEl = $N('div', { class: 'sidebar-h3', html: $el.text }, $sidebarTopicWrap);
            $topicWrap = $sidebarTopicWrap;
        }

        Browser.resize(function() {
            top = $el.offsetTop;
            positions.push([top, $sidebarEl, $topicWrap]);
        });

        $sidebarEl.on('click', function() { $body.scrollTo(top - 75, 1000); });
    });

    function getActive(s) {
        for (let p of positions) if (p[0] > s) return p;
    }

    $body.on('scroll', function({ top }) {
        console.log('scroll', top, bodyTop);
        $sidebar.setClass('fixed', top > bodyTop);
        let active = getActive(top);

        if (active[1] !== $sidebarActive) {
            if ($sidebarActive) $sidebarActive.removeClass('active');
            $sidebarActive = active[1];
            $sidebarActive.addClass('active');
        }

        if (active[2] !== $sidebarActiveBox) {
            if ($sidebarActiveBox) $sidebarActiveBox.hide();
            $sidebarActiveBox = active[2];
            if ($sidebarActiveBox) $sidebarActiveBox.show();
        }
    });

    Browser.resize();
});
