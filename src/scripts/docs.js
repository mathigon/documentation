// ================================================================================================
// MATHIGON.IO DOCUMENTATION LIBRARY
// Copyright (c) 2015, Mathigon / Philipp Legner
// ================================================================================================


M.onload(function() {

    var $sidebar = $C('sidebar-wrap');
    var $sidebarTopicWrap;
    var $body = $I('body');

    var bodyTop = $body.$el.offsetTop - 50;
    var posn = {};

    M.resize(function() {
        bodyTop = $body.$el.offsetTop - 50;
        posn = {};
    });

    $I('api').find('h2, h3').each(function($el) {

        var $sidebarEl;
        var $topicWrap

        if ($el.is('h2')) {
            $sidebarEl = $N('div', { class: 'sidebar-h2', html: $el.html() }, $sidebar);
            $sidebarTopicWrap = $topicWrap = $N('div', { style: 'display: none' }, $sidebar);
        } else {
            $sidebarEl = $N('div', { class: 'sidebar-h3', html: $el.html() }, $sidebarTopicWrap);
            $topicWrap = $sidebarTopicWrap
        }

        var top = $el.$el.offsetTop;
        posn[top] = [$sidebarEl, $topicWrap];

        M.resize(function() {
            top = $el.$el.offsetTop;
            posn[top] = [$sidebarEl, $topicWrap];
        });

        $sidebarEl.click(function() { M.$body.scrollTo(top - 75, 1000); });
    });

    var $sidebar = $C('sidebar');
    var $sidebarActive;
    var $sidebarActiveBox;

    var getActive = function(s) {
        for (var i in posn) if (i > s) return posn[i];
    }

    M.$body.scroll(function() {
        var scroll = M.$body.scrollTop();

        $sidebar.setClass('fixed', scroll > bodyTop);

        var active = getActive(scroll);

        if (active[0] !== $sidebarActive) {
            if ($sidebarActive) $sidebarActive.removeClass('active');
            $sidebarActive = active[0];
            $sidebarActive.addClass('active');
        }

        if (active[1] !== $sidebarActiveBox) {
            if ($sidebarActiveBox) $sidebarActiveBox.hide();
            $sidebarActiveBox = active[1];
            if ($sidebarActiveBox) $sidebarActiveBox.show();
        }

    });

    M.$body.trigger('scroll');

});
