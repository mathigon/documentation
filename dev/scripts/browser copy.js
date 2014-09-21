// ================================================================================================
//                                  MATHIGON UTILITIES LIBRARY
// ================================================================================================
//
// Copyright (c) Mathigon / Philipp Legner, 2014
// Contains utility functions for DOM selection and manipulation, animations and AJAX.
//
// ================================================================================================


/* jshint curly:false */
/* jshint eqnull:true */
/* global window, document, navigator, $, $C, $T, $N, $$N, $$ */

var M = M || {};



// ================================================================================================
// BROWSER FUNCTIONS
// ================================================================================================

M.browser = {
    width:    window.innerWidth,
    height:   window.innerHeight,

    isMobile: (typeof window.orientation !== 'undefined'),
    isRetina: ((window.devicePixelRatio || 1) > 1),
    isTouch:  ('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch),
    imgExt:   ((window.devicePixelRatio || 1) > 1.25) ? '@2x' : '',

    speechRecognition: ('webkitSpeechRecognition' in window)
};

M.redraw = function() {
    document.body.offsetHeight;
};

M.now = Date.now || function getTime () { return new Date().getTime(); };

M.onload = function(fn) {
    window.onload = fn;
};

M.toCamelCase = function(str) {
    return str.toLowerCase().replace(/^-/,'').replace(/-(.)/g, function(match, g) {
        return g.toUpperCase();
    });
};

M.is3DTransform = (function(){
    var style = document.createElement('div').style;
    return ('webkitPerspective' in style || 'MozPerspective' in style ||
        'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
})();

M.animationFrame = (function() {
    var rAF = window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame    ||
        window.mozRequestAnimationFrame        ||
        window.msRequestAnimationFrame        ||
        function (callback) { window.setTimeout(callback, 1000 / 60); };
    return function(fn) { rAF(fn); };
})();



// ================================================================================================
// BROWSER CSS
// ================================================================================================

M.cssTimeToNumber = function(cssTime) {
    var regex = /^([\-\+]?[0-9]+(\.[0-9]+)?)(m?s)$/;
    var matches = regex.exec(cssTime.trim());
    if (matches === null) return null;
    return (+matches[1]) * (matches[3] === 's' ? 1000 : 1);
};


M.addCSSRule = function(selector, rules) {
    var css = document.styleSheets[document.styleSheets.length-1];
    var index = css.rules.length-1;
    if(css.insertRule) {
        css.insertRule(selector + '{' + rules + '}', index);
    } else {
        css.addRule(selector, rules, index);
    }
};

(function(){
    var cache = {};
    var style = document.body.style;
    var prefixes = {'webkit': 'webkit', 'moz': 'Moz', 'ms': 'ms'};

    var findCssPrefix = function(name) {
        var rule = M.toCamelCase(name);
        if (style[rule] != null) return name;
        rule = rule.toTitleCase();
        for (var v in prefixes) {
            if (style[prefixes[v] + rule] != null) return '-' + v + '-' + name;
        }
        return name;
    };

    M.prefix = function(name) {
        if (cache[name]) return cache[name];
        var rule = findCssPrefix(name);
        cache[name] = rule;
        return rule;
    };
})();



// ================================================================================================
// BROWSER HISTORY
// ================================================================================================

(function() {
    var hasHistory = !!window.history;
    var id = 0;

    var origin = window.location.origin + window.location.port;
    var path = window.location.pathname.replace(origin, '');
    var hash = window.location.hash.replace(/^#/, '');

    M.History = new M.Class.extend({

        back: function() {
            if(hasHistory) window.history.back();
        },

        forward : function() {
            if (hasHistory) window.history.forward();
        },

        go: function(n) {
            if (hasHistory) window.history.go(n);
        },

        push: function(url, state) {
            ++id;
            if (!state) state = { url: url };
            if (hasHistory) window.history.pushState({id: id, state: state }, '', url);
        },

        replace: function(url, state) {
            if (!state) state = { url: url };
            if (hasHistory) window.history.replaceState(state, '', url);
        }

    });

    Object.defineProperty(M.History, 'hash', {
        enumerable: true,
        configurable : true,
        get: function() {
            return hash;
        },
        set: function(newHash) {
            ++id;
            hash = newHash;
            if (hasHistory) {
                window.history.pushState({id: id, state: {}}, '', path + '#' + hash);
            } else {
                window.location.hash = '#' + hash;
            }
        }
    });

    var popped = ('state' in window.history);
    var initialURL = location.href;

    window.addEventListener('popstate', function(e){
        var validPop = popped || location.href === initialURL;
        popped = true;
        if (!validPop) return;

        path = window.location.pathname;
        hash = window.location.hash.replace(/^#/, '');

        if (!e.state) return;
        var newId = e.state.id;
        M.History.trigger('change', e.state.state);
        if (newId < id) M.History.trigger('back', e.state.state);
        if (newId > id) M.History.trigger('forward', e.state.state);
        id = newId;
    });

})();



// ================================================================================================
// COOKIES
// ================================================================================================

M.Cookie = {

    get: function get(name) {
        return M.Cookie.has(name) ? M.Cookie.list()[name] : null;
    },

    has: function has(name) {
        return new RegExp('(?:;\\s*|^)' + encodeURIComponent(name) + '=').test(document.cookie);
    },

    list: function list() {
        var pairs = document.cookie.split(';'), pair, result = {};
        for (var i = 0, n = pairs.length; i < n; ++i) {
            pair = pairs[i].split('=');
            pair[0] = pair[0].replace(/^\s+|\s+$/, '');
            result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return result;
    },

    remove: function remove(name, options) {
        var opt2 = {};
        for (var key in (options || {})) opt2[key] = options[key];
        opt2.expires = new Date(0);
        opt2.maxAge = -1;
        return M.Cookie.set(name, null, opt2);
    },

    // Possible optional options:
    // path     Specify path within the current domain, for example '/'
    // domain   Specify the (sub)domain the cookie pertains to. Can range from the root domain
    //          ('mathigon.org') up to the current subdomain ('test.world.mathigon.org').
    // maxAge   Specify, in seconds, the lifespan of the cookie.
    // expires  Set cookie expiry using an absolute GMT date/time string with an RFC2822 format
    //          (e.g. 'Tue, 02 Feb 2010 22:04:47 GMT')or a JS Date object.
    // secure   Specify whether the cookie should only be passed through HTTPS connections.
    set: function set(name, value, options) {
        options = options || {};
        var cookie = [encodeURIComponent(name) + '=' + encodeURIComponent(value)];
        if (options.path)    cookie.push('path=' + options.path);
        if (options.domain)  cookie.push('domain=' + options.domain);
        if (options.maxAge)  cookie.push('max-age=' + parseFloat(options.maxAge));
        if (options.expires) cookie.push('expires=' + (M.isDate(options.expires) ? options.expires.toUTCString() : options.expires));
        if (options.secure)  cookie.push('secure');
        document.cookie = cookie.join(';');
    }

};



// ================================================================================================
// LOCAL STORAGE
// ================================================================================================

M.storage = {};

M.storage.set = function(key, value) {

    var keys = (key||'').split('.');
    var storage = JSON.parse(window.localStorage.getItem('M') || '{}');
    var path = storage;

    for (var i=0; i<keys.length-1; ++i) {
        if (path[keys[i]] == null) path[keys[i]] = {};
        path = path[keys[i]];
    }

    path[keys.last()] = value;

    window.localStorage.setItem('M', JSON.stringify(storage));
};

M.storage.get = function(key) {

    var keys = (key||'').split('.');
    var storage = JSON.parse(window.localStorage.getItem('M') || '{}');
    var path = storage;

    for (var i=0; i<keys.length-1; ++i) {
        if (path[keys[i]] == null) return null;
        path = path[keys[i]];
    }

    return key ? path[keys.last()] : path;
};

M.storage.clear = function(key) {
    if (key) {
        M.storage.set(key, null);
    } else {
        window.localStorage.setItem('M', '');
    }
};



// ================================================================================================
// AJAX FUNCTIONS
// ================================================================================================

M.toQueryString = function(data) {
    var pairs = [];

    M.each(data, function(value, key) {
        key = encodeURIComponent(key);
        if (value == null) { pairs.push(key); return; }
        value = M.isArray(value) ? value.join(',') : '' + value;
        value = value.replace(/(\r)?\n/g, '\r\n');
        value = encodeURIComponent(value);
        value = value.replace(/%20/g, '+');

        pairs.push(key + '=' + value);
    });

    return pairs.join('&');
};

M.fromQueryString = function(string) {
    string = string.replace(/^[?,&]/,'');
    var pairs = decodeURIComponent(string).split('&');
    var result = {};
    pairs.each(function(pair) {
        var x = pair.split('=');
        result[x[0]] = x[1];
    });
    return result;
};

// -------------------------------------------------------------------------------------------------

M.ajax = function(url, options) {

    if (!options) options = {};
    var xhr = new XMLHttpRequest();

    var respond = function(xx) {
        var status = xhr.status;

        if (!status && xhr.responseText || status >= 200 && status < 300 || status === 304) {
            if (!options.success) return;

            if (options.dataType === 'html') {
                var doc = document.implementation.createHTMLDocument('');
                doc.open();
                doc.write(xhr.responseText);
                doc.close();
                /* NOTE Scripts in Ajax DOM
                $T('script', doc).each(function(script){
                    var s = $N('script', { html: script.html() });
                    document.body.appendChild(s.$el);
                });
                */
                options.success(doc);
            } else if (options.dataType === 'json') {
                options.success(JSON.parse(xhr.responseText));
            } else {
                options.success(xhr.responseText);
            }

        } else {
            if (options.error) options.error(xhr);
        }
    };

    if (xhr.onload) {
        xhr.onload = xhr.onerror = respond;
    } else {
        xhr.onreadystatechange = function() { if (xhr.readyState === 4) respond(); };
    }

    // Default URL
    if (!options.url) options.url = window.location.toString();

    // GET Data
    if (options.method === 'GET' || options.method === 'HEAD') {
        url += (url.indexOf('?') >= 0 ? '&' : '?');
        if (options.data) url += M.toQueryString(options.data) + '&';
        if (options.cache === false) url += '_nocache=' + Date.now();
    }

    // Open XHR Request
    if (options.async == null) options.async = 'true';
    xhr.open(options.method ? options.method.toUpperCase() : 'GET',
             url, options.async, options.user, options.password);

    // Additional headers
    if (options.headers && xhr.setRequestHeader)
        M.each(options.headers, function(header, value) { xhr.setRequestHeader(header, value); });

    // Check for crossDomain
    if (options.crossDomain == null) options.crossDomain =
        /^([\w-]+:)?\/\/([^\/]+)/.test(options.url) && RegExp.$2 !== window.location.host;
    if (options.crossDomain) xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // POST Data
    var postData = null;
    if (options.processData == null) options.processData = true;
    if (options.contentType == null) options.contentType = 'application/x-www-form-urlencoded';

    if (options.data && (options.method === 'POST' || options.method === 'PUT')) {
        var postDataInstances = [ArrayBuffer, Blob, Document, FormData];
        if (!options.processData || postDataInstances.indexOf(options.data.constructor) >= 0) {
            postData = options.data;
        } else {
            // NOTE Check Ajax Post Data
            var boundary = '---------------------------' + Date.now().toString(16);
            if (options.contentType === 'multipart\/form-data') {
                xhr.setRequestHeader('Content-Type', 'multipart\/form-data; boundary=' + boundary);
            } else {
                xhr.setRequestHeader('Content-Type', options.contentType);
            }
            postData = '';
            var _data = M.toQueryString(options.data);
            if (options.contentType === 'multipart\/form-data') {
                boundary = '---------------------------' + Date.now().toString(16);
                _data = _data.split('&');
                var _newData = [];
                for (var i = 0; i < _data.length; i++) {
                    _newData.push('Content-Disposition: form-data; name="' + _data[i].split('=')[0] + '"\r\n\r\n' + _data[i].split('=')[1] + '\r\n');
                }
                postData = '--' + boundary + '\r\n' + _newData.join('--' + boundary + '\r\n') + '--' + boundary + '--\r\n';
            } else {
                postData = options.contentType === 'application/x-www-form-urlencoded' ? _data : _data.replace(/&/g, '\r\n');
            }
        }
    }

    // Send XHR Request
    xhr.send(postData);
};


// -------------------------------------------------------------------------------------------------
// REQUEST WRAPPERS

M.get = function (url, data, success) {
    return M.ajax(url, {
        method: 'GET',
        dataType: 'html',
        data: typeof data === 'function' ? null : data,
        success: typeof data === 'function' ? data : success
    });
};

M.post = function (url, data, success) {
    return M.ajax(url, {
        method: 'POST',
        dataType: 'html',
        data: typeof data === 'function' ? null : data,
        success: typeof data === 'function' ? data : success
    });
};

M.getJSON = function (url, data, success) {
    return M.ajax(url, {
        method: 'GET',
        dataType: 'json',
        data: typeof data === 'function' ? null : data,
        success: typeof data === 'function' ? data : success
    });
};

M.getScript = function(src, success, error) {
    var script = document.createElement('script');
    script.type = 'text/javascript';

    if (error) script.onerror = error;
    if (success) script.onload = success;

    document.head.appendChild(script);
    script.src = src;
};



// =================================================================================================
// DOM ELEMENT CREATION, SELECTION AND MANIPULATION
// =================================================================================================

// Creates a M.$ elements based in an id selector or a DOM node
function $(selector) {
    if (typeof selector === 'string') {
        var $el = document.getElementById(selector);
        if ($el) return new M.$($el);
    } else if (selector instanceof Node || selector === window) {
        return new M.$(selector);
    }
}

// Creates an array of M.$ elements based on a class name
function $C(selector, context) {
    context = context ? context.$el : document;
    var $els = context.getElementsByClassName(selector);
    return M.each($els, function($el) { return new M.$($el); });
}

// Creates an array of M.$ elements based on a tag name
function $T(selector, context) {
    context = context ? (context.$el || context) : document;
    var $els = context.getElementsByTagName(selector);
    window.X = $els;
    var t = M.each($els, function($el) { return new M.$($el); });
    window.Y = t;
    return t;
}

// Creates an array of M.$ elements based on a query selector
function $$(selector, context) {
    context = context ? context.$el : document;
    var $els = context.querySelectorAll(selector);
    return M.each($els, function($el) { return new M.$($el); });
}

// Creates a new DOM node and M.$ element
function $N(tag, attributes, parent) {
    var t = document.createElement(tag);

    for (var a in attributes) {
        if (a === 'id') {
            t.id = attributes.id;
        } else if (a === 'class') {
            t.className = attributes.class;
        } else if (a === 'html') {
            t.innerHTML = attributes.html;
        } else {
            t.setAttribute(a, attributes[a]);
        }
    }

    var $el = new M.$(t);
    if (parent) parent.append($el);
    return $el;
}

// Converts an arbitrary html string into an array of M.$ elements
function $$N(html) {
    var tempDiv = $N('div', { html: html });
    return tempDiv.children();
}

M.$ = function ($el) {
    this.data = {};
    this.$el = $el;
};


// -------------------------------------------------------------------------------------------------
// BASIC FUNCTIONALITY

M.$.prototype.addClass = function(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; ++i) {
        this.$el.classList.add(classes[i]);
    }
};

M.$.prototype.removeClass = function(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; ++i) {
        this.$el.classList.remove(classes[i]);
    }
};

M.$.prototype.hasClass = function(className) {
    return (' ' + this.$el.className + ' ').indexOf(' ' + className + ' ') >= 0;
};

M.$.prototype.toggleClass = function(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; ++i) {
        this.$el.classList.toggle(classes[i]);
    }
};

M.$.prototype.setClass = function(className, condition) {
    if (condition) {
        this.addClass(className);
    } else {
        this.removeClass(className);
    }
};

M.$.prototype.attr = function(attr, value) {
    if (value == null) {
        return this.$el.getAttribute(attr);
    } else if (value === '') {
        this.$el.removeAttribute(attr);
    } else {
        this.$el.setAttribute(attr, value);
    }
};

M.$.prototype.data = function(key, value) {
    if (value == null) {
        var dataAttr = this.$el.getAttribute('data-' + key);
        return dataAttr ? dataAttr : (this.data ? this.data[key] : undefined);
    } else {
        this.data[key] = value;
    }
};

M.$.prototype.value = function(value) {
    if (value == null) {
        return this.$el.value;
    } else {
        this.$el.value = value;
    }
};

M.$.prototype.html = function(html) {
    if (html == null) {
        return this.$el.innerHTML;
    } else {
        this.$el.innerHTML = html;
    }
};

M.$.prototype.text = function(text) {
    if (text == null) {
        return this.$el.textContent.trim();
    } else {
        this.$el.textContent = text;
    }
};


// -------------------------------------------------------------------------------------------------
// DIMENSIONS

M.$.prototype.width = function(type) {
    if (this.$el === window) {
        return window.innerWidth;
    } else if (type === 'padding') {
        return this.$el.clientWidth;
    } else if (type === 'scroll') {
        return this.$el.scrollWidth;
    }  else if (type === 'border') {
        return this.$el.offsetWidth;
    } else if (type === 'margin') {
        return this.$el.offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
    } else {
        return this.$el.clientWidth - parseFloat(this.css('padding-left')) - parseFloat(this.css('padding-right'));
    }
};

M.$.prototype.height = function(type) {
    if (this.$el === window) {
        return window.innerHeight;
    } else if (type === 'padding') {
        return this.$el.clientHeight;
    } else if (type === 'scroll') {
        return this.$el.scrollHeight;
    }  else if (type === 'border') {
        return this.$el.offsetHeight;
    } else if (type === 'margin') {
        return this.$el.offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
    } else {
        return this.$el.clientHeight - parseFloat(this.css('padding-bottom')) - parseFloat(this.css('padding-top'));
    }
};

M.$.prototype.offset = function($parent) {

    if ($parent === 'parent') $parent = this.parent();
    if ($parent === 'body') $parent = M.$body;

    // Get offset from immediate parent
    if ($parent && $parent.$el === this.$el.offsetParent) {
        var top = this.$el.offsetTop + $parent.$el.clientTop;
        var left = this.$el.offsetLeft + $parent.$el.clientLeft;
        var bottom = top +  this.$el.offsetHeight;
        var right = left + this.$el.offsetWidth;
        return { top: top, left: left, bottom: bottom, right: right };

    // Get offset based on any other element including $(document.body)
    } else if ($parent) {
        var parentBox = $parent.$el.getBoundingClientRect();
        var box = this.$el.getBoundingClientRect();
        return { top:    box.top    - parentBox.top, left:  box.left  - parentBox.left,
                 bottom: box.bottom - parentBox.top, right: box.right - parentBox.left };

    // Get offset based on viewport
    } else {
        var box = this.$el.getBoundingClientRect();
        return { top: box.top, left: box.left, bottom: box.bottom, right: box.right };
    }
};


// -------------------------------------------------------------------------------------------------
// STYLES

M.$.prototype.css = function(props, value) {
    if (arguments.length === 1) {
        if (typeof props === 'string') {
            return window.getComputedStyle(this.$el, null).getPropertyValue(props);
        } else {
            for (var prop in props) if (M.has(props, prop)) this.$el.style[prop] = props[prop];
        }
    } else if (arguments.length === 2 && typeof props === 'string') {
        this.$el.style[M.toCamelCase(props)] = value;
    }
};

M.$.prototype.transition = function(property, duration, curve) {
    if (typeof duration !== 'string') duration = duration + 'ms';
    this.$el.style[M.prefix('transition')] = property + ' ' + duration + (curve ? ' ' + curve : '');
};

M.$.prototype.transform = function(transform) {
    this.$el.style[M.prefix('transform')] = transform;
};

M.$.prototype.transformX = function(x) {
    x = Math.round(x);
    this.$el.style[M.prefix('transform')] = M.is3DTransform ?
        'translate3d('+x+'px,0,0)' : 'translate('+x+'px,0)';
};

M.$.prototype.transformY = function(y) {
    y = Math.round(y);
    this.$el.style[M.prefix('transform')] = M.is3DTransform ?
        'translate3d(0px,'+y+'px,0px)' : 'translate(0px,'+y+'px)';
};

M.$.prototype.hide = function() {
    this.css('display', 'none');
    this.css('visibility', 'hidden');
};

M.$.prototype.show = function() {
    this.css('display', 'block');
    this.css('visibility', 'visible');
};


// -------------------------------------------------------------------------------------------------
// DOM MANIPULATION

M.$.prototype.is = function(selector) {
    var compareWith = document.querySelectorAll(selector);
    for (var i = 0, l = compareWith.length; i < l; ++i)
        if (compareWith[i] === this.$el) return true;
    return false;
};

M.$.prototype.index = function() {
    var i = 0;
    var child = this.$el;
    while ((child = child.previousSibling) !== null) i++;
    return i;
};

M.$.prototype.append = function(newChild) {
    var _this = this;
    if (typeof newChild === 'string') {
        var newChildren = $$N(newChild);
        newChildren.each(function(child) {
            _this.$el.appendChild(child.$el);
        });
    } else {
        this.$el.appendChild(newChild.$el);
    }
};

M.$.prototype.prepend = function(newChild) {
    if (typeof newChild === 'string') {
        var newChildren = $$N(newChild);
        for (var j = newChildren.length - 1; j >= 0; j--) {
            this.$el.insertBefore(newChildren[j], this.$el.childNodes[0]);
        }
    } else {
        this.$el.insertBefore(newChild.$el, this.$el.childNodes[0]);
    }
};

M.$.prototype.insertBefore = function(newChild) {
    var parent = this.parent();
    var _this = this;

    if (typeof newChild === 'string') {
        var newChildren = $$N(newChild);
        for (var j = newChildren.length - 1; j >= 0; j--) {
            parent.$el.insertBefore(newChildren[j].$el, _this.$el);
        }
    } else {
        parent.$el.insertBefore(newChild.$el, _this.$el);
    }
};

M.$.prototype.insertAfter = function(newChild) {
    var _this = this;
    var parent = _this.$el.parentNode;

    if (typeof newChild === 'string') {
        var newChildren = $$N(newChild);
        newChildren.each(function(child) {
            //parent.$el.insertAfter(child, _this.$el);
        });
    } else {
        var next = _this.$el.nextSibling;
        if (next) {
            parent.insertBefore(newChild.$el, next);
        } else {
            parent.appendChild(newChild.$el);
        }
    }
};

M.$.prototype.wrap = function(wrapper) {
    if (typeof wrapper === 'string') wrapper = $(document.createElement(wrapper));
    this.insertBefore(wrapper);
    this.remove();
    wrapper.append(this);
};

M.$.prototype.moveTo = function(newParent, before) {
    this.remove();
    if (before) {
        newParent.prepend(this);
    } else {
        newParent.append(this);
    }
};

M.$.prototype.next = function () {
    var next = this.$el.nextElementSibling;
    return next ? $(next) : false;
};

M.$.prototype.prev = function () {
    var prev = this.$el.previousElementSibling;
    return prev ? $(prev) : false;
};

M.$.prototype.find = function(selector) {
    return $$(selector, this);
};

M.$.prototype.parent = function() {
    var parent = this.$el.parentNode;
    return parent ? $(parent) : false;
};

M.$.prototype.parents = function(selector) {
    var parents = [];
    var parent = this.parent();
    while (parent) {
        if (!selector || parent.is(selector)) parents.push(parent);
        parent = parent.parent();
    }
    return parents;
};

M.$.prototype.children = function(selector) {
    var childNodes = this.$el.children;

    if (!childNodes) {
        childNodes = [];
        var nodes = this.$el.childNodes;
        M.each(nodes, function(n) {
            if (!n.data || n.data.trim()) childNodes.push(n);
        });
    }

    if (typeof selector === 'number') {
        return $(childNodes[selector]);
    } else {
        var children = [];
        for (var i = 0, l = childNodes.length; i < l; ++i)
            if (!selector || $(childNodes[i]).is(selector))
                children.push($(childNodes[i]));
        return children;
    }
};

M.$.prototype.remove = function () {
    if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
};

M.$.prototype.delete = function () {
    this.remove();
    this.$el = null;
};

M.$.prototype.clear = function () {
    var _this = this;
    this.children().each(function($el) {
        _this.$el.removeChild($el.$el);
    });
};

M.$.prototype.replace = function(newEl) {
    this.insertAfter(newEl);
    this.remove();
};



// =================================================================================================
// ANIMATIONS
// =================================================================================================

M.$.prototype.getTransitions = function() {
    var s = window.getComputedStyle(this.$el);
    var delay    = s.getPropertyValue('transition-delay').split(',');
    var duration = s.getPropertyValue('transition-duration').split(',');
    var property = s.getPropertyValue('transition-property').split(',');
    var timing   = s.getPropertyValue('transition-timing-function').match(/[^\(\),]+(\([^\(\)]*\))?[^\(\),]*/g);

    var result = [];
    for (var i=0; i<property.length; ++i) {
        result.push({
            css:      property[i].trim(),
            delay:    M.cssTimeToNumber(delay[i]),
            duration: M.cssTimeToNumber(duration[i]),
            timing:   timing[i]
        });
    }

    return result;
};

M.$.prototype.setTransitions = function(transitions) {
    var css = [];

    M.each(transitions, function(options) {
        css.push([
            options.css,
            (options.duration || 1000) + 'ms',
            options.timing || 'linear',
            (options.delay || 0) + 'ms'
        ].join(' '));
    });

    this.css('transition', css.join(', '));
};

M.$.prototype.animate = function(props, callback) {
    var _this = this;
    if (!M.isArray(props)) props = [props];

    // Set start property values of elements
    var s = window.getComputedStyle(this.$el);
    M.each(props, function(options) {
        if (options.css === 'height') this.css('height', parseFloat(s.getPropertyValue('height')));
        if (options.css === 'width')  this.css('width',  parseFloat(s.getPropertyValue('width')));
        if (options.from != null) _this.css(options.css, options.from);
    });

    // Set transition values of elements
    var oldTransition = s.getPropertyValue(M.prefix('transition'));
    this.setTransitions(M.merge(this.getTransitions(), props));
    M.redraw();

    // Set end property values of elements
    M.each(props, function(options) {
        _this.css(options.css, options.to);
    });

    // Remove new transition values
    this.transitionEnd(function() {
        _this.css(M.prefix('transition'), oldTransition);
        M.redraw();
        if (callback) callback();
    });
};

M.animate = function(callback, duration) {
    var startTime = +new Date;
    var time = 0;
    getFrame();

    function getFrame() {
        if (time <= duration) M.animationFrame(getFrame);
        time = +new Date - startTime;
        callback(time / duration);
    };
};

// -------------------------------------------------------------------------------------------------

M.$.prototype.getStrokeLength = function() {
    if (this.$el.getTotalLength) {
        return this.$el.getTotalLength();
    } else {
        var dim = this.$el.getBoundingClientRect();
        return FM.vector.length([dim.height, dim.width]);
    }
};

M.$.prototype.enter = function(effect, time, delay) {
    this.css('visibility', 'visible');
    if (!time) return;
    if (!effect) effect = 'fade';

    if (effect === 'fade') {
        this.animate({ css: 'opacity', from: 0, to: 1, duration: time });

    } else if (effect === 'pop') {
        this.css('opacity', '1');
        this.animate({
            css: M.prefix('transform'),
            from: 'scale(0)', to: 'scale(1)', delay: delay,
            duration: time, timing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        });

    } else if (effect === 'draw') {
        var l = this.getStrokeLength();
        this.css('stroke-dasharray', l + ' ' + l);
        this.animate({ css: 'stroke-dashoffset', from: l, to: 0, delay: delay, duration: time });
    }
};

M.$.prototype.exit = function(effect, time, delay) {
    var _this = this;
    if (!time) { this.css('visibility', 'hidden'); return; }
    if (!effect) effect = 'fade';

    if (effect === 'fade') {
        this.animate({ css: 'opacity', from: 1, to: 0, duration: time },
                     function() { _this.css('visibility', 'hidden'); });
    } else if (effect === 'draw') {
        var l = this.getStrokeLength();
        this.css('stroke-dasharray', l + ' ' + l);
        this.animate({ css: 'stroke-dashoffset', from: 0, to: l, delay: delay, duration: time });
    }
};

// -------------------------------------------------------------------------------------------------

// Requires css transition: height, no padding or margin
M.$.prototype.slideUp = function(callback) {
    var _this = this;
    this.$el.sliding = 'up';
    this.$el.style.height = this.height() + 'px';
    M.redraw();
    this.$el.style.height = '0px';

    this.transitionEnd(function(){
        if (_this.$el.sliding === 'up' && callback) callback();
    });
};

// Requires css transition: height, no padding or margin, single wrapper child
M.$.prototype.slideDown = function(callback) {
    var _this = this;
    this.$el.sliding = 'down';
    this.$el.style.height = this.children(0).height('margin') + 'px';

    this.transitionEnd(function(){
        if (_this.$el.sliding === 'down') {
            _this.$el.style.height = 'auto';
            if (callback) callback();
        }
    });
};

// Requires css transition: opacity
M.$.prototype.fadeIn = function() {
    var _this = this;
    _this.$el.style.display = 'block';
    M.redraw();
    this.$el.style.opacity = '1';
};

// Requires css transition: opacity
M.$.prototype.fadeOut = function() {
    var _this = this;
    this.$el.style.opacity = '0';
    this.transitionEnd(function(){
        _this.$el.style.display = 'none';
    });
};

(function() {
    var effects = ['pulse', 'pop', 'jumpY', 'jumpX', 'flash'];

    effects.each(function(name){
        M.$.prototype[name] = function() {
            var _this = this;
            _this.animationEnd(function(){
                _this.removeClass('effects-'+name);
            });
            _this.addClass('effects-'+name);
        };
    });
})();



// =================================================================================================
// EVENTS
// =================================================================================================

M.events = {};

M.events.isSupported = function(event) {
    event = 'on' + event;
    var $el = $N('div');
    var isSupported = (event in $el.$el);
    if (!isSupported) {
        $el.attr(event, 'return;');
        isSupported = (typeof $el.$el[event] === 'function');
    }
    $el.delete();
    return isSupported;
};

M.$.prototype.on = function(events, callback) {
    events = events.split(' ');
    for (var i = 0; i < events.length; ++i)
        this.$el.addEventListener(events[i], callback, false);
};

M.$.prototype.off = function(events, callback) {
    events = events.split(' ');
    for (var i = 0; i < events.length; ++i)
        this.$el.removeEventListener(events[i], callback, false);
};

M.$.prototype.one = function(events, fn) {
    var _this = this;
    function callback() {
        _this.off(events, callback);
        fn(arguments);
    }
    this.on(events, callback);
};

M.$.prototype.trigger = function(eventName, eventData) {
    var evt;
    try {
        evt = new CustomEvent(eventName, {detail: eventData, bubbles: true, cancelable: true});
    } catch (e) {
        evt = document.createEvent('Event');
        evt.initEvent(eventName, true, true);
        evt.detail = eventData;
    }
    this.$el.dispatchEvent(evt);
};

M.events.pointerOffset = function(event, parent) {
    if (event.offsetX) {
        return [event.offsetX, event.offsetY];
    } else {
        parent = parent ? parent.$el : event.target;
        var parentXY = parent.getBoundingClientRect();
        var eventX = event.touches ? event.touches[0].clientX : event.clientX;
        var eventY = event.touches ? event.touches[0].clientY : event.clientY;
        return [eventX-parentXY.left, eventY-parentXY.top];
    }
};

M.events.pointerPosition = function(e) {
    return {
        x: e.touches ? e.touches[0].clientX : e.clientX,
        y: e.touches ? e.touches[0].clientY : e.clientY
    };
};

M.events.getWheelDelta = function (e) {
    var delta = 0;
    if (e.wheelDelta) delta = e.wheelDelta / 120;
    if (e.detail) delta = -e.detail / 3;
    return delta;
};

M.events.stop = function (e) {
    e.preventDefault();
    e.stopPropagation();
};


// -------------------------------------------------------------------------------------------------
// POINTER EVENTS

M.$.prototype.pointerStart = function(fn) {
    this.on('mousedown touchstart', fn);
};

M.$.prototype.pointerMove = function(fn) {
    this.on('mousemove touchmove', fn);
};

M.$.prototype.pointerEnd = function(fn) {
    this.on('mouseup touchend mousecancel touchcancel', fn);
};

(function() {

    var checkInside = function($el, event) {
        var c = M.events.pointerPosition(event);
        return ($el.$el === document.elementFromPoint(c.x, c.y));
    };

    // TODO Make pointer more efficient more efficient using *enter and *leave

    M.$.prototype.pointerEnter = function(fn, $parent) {
        var _this = this;
        var isInside = null;

        $parent.pointerEnd(function(e) { isInside = null; });

        $parent.pointerMove(function(e) {
            var wasInside = isInside;
            isInside = checkInside(_this, e);
            if (wasInside != null && isInside && !wasInside) fn(e);
        });
    };

    M.$.prototype.pointerLeave = function(fn, $parent) {
        var _this = this;
        var isInside = null;

        $parent.pointerMove(function(e) {
            var wasInside = isInside;
            isInside = checkInside(_this, e);
            if (!isInside && wasInside) fn(e);
        });
    };

    M.$.prototype.pointerMoveOver = function(fn, $parent) {
        var _this = this;
        $parent.on('touchmove mousemove', function(e) {
            if (checkInside(_this, e)) fn(e);
        });
    };

})();

// -------------------------------------------------------------------------------------------------
// SPECIAL EVENTS

M.$.prototype.transitionEnd = function(callback) {
    var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
    this.one(events.join(' '), callback);
};

M.$.prototype.animationEnd = function(callback) {
    var events = ['webkitAnimationEnd', 'OAnimationEnd', 'MSAnimationEnd', 'animationend'].join(' ');
    var _this = this;

    function fireCallBack(e) {
        callback.call(_this, e);
        _this.off(events, fireCallBack);
    }

    this.on(events, fireCallBack);
};

M.$.prototype.change = function(callback) {
    this.on('propertychange keyup input paste', callback);
};

M.$.prototype.click = function(callback) {

    var waitForEvent = false;
    var startX, startY;
    var _this = this;
    var preventMouse = false;

    /* NOTE PreventDefault for Click Events
    this.on('click', function(e){
        e.preventDefault();
    });*/

    this.on('mousedown', function(e){
        if (preventMouse) return;
        waitForEvent = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    this.on('mouseup', function(e){
        if (preventMouse) {
            preventMouse = false;
            return;
        }
        if (waitForEvent) {
            var endX = e.clientX;
            var endY = e.clientY;
            if (Math.abs(endX - startX) < 2 && Math.abs(endY - startY) < 2) {
                callback.call(_this, e);
            }
        }
        waitForEvent = false;
    });

    this.on('touchstart', function(e){
        preventMouse = true;
        if (e.touches.length === 1) {
            waitForEvent = true;
            startX = e.changedTouches[0].clientX;
            startY = e.changedTouches[0].clientY;
        }
    });

    this.on('touchend', function(e){
        if (waitForEvent && e.changedTouches.length === 1) {
            var endX = e.changedTouches[0].clientX;
            var endY = e.changedTouches[0].clientY;
            if (Math.abs(endX - startX) < 5 && Math.abs(endY - startY) < 5) {
                callback.call(_this, e);
            }
        }
        waitForEvent = false;
    });

    this.on('touchcancel', function(){
        waitForEvent = false;
    });
};

M.$.prototype.scroll = function(fns) {
    var _this = this;

    var scrollTimeout = null;
    var scrolling = false;
    var initialScroll = 0;

    function start() {
        initialScroll = _this.$el.scrollTop;
        if (fns.start) fns.start();
        scrolling = true;
    }

    function move() {
        if (!scrolling) start();
        if (fns.move) fns.move();

        if (scrollTimeout) window.clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(end, 100);
    }

    function end() {
        if (fns.end) fns.end();
        scrolling = false;
    }

    // --------------------------------------------------------------------
    // Add Event Listeners

    var $el = this.$el;

    function touchEnd() {
        window.removeEventListener('touchmove', move);
        window.removeEventListener('touchend', touchEnd);
    }

    this.on('wheel mousewheel DOMMouseScroll', move);

    this.on('touchstart', function(){
        // This ensures that overflow bounces happen within container
        var top = $el.scrollTop;
        if(top <= 0) $el.scrollTop = 1;
        if(top + $el.offsetHeight >= $el.scrollHeight) $el.scrollTop = $el.scrollHeight - $el.offsetHeight - 1;

        start();
        window.addEventListener('touchmove', move);
        window.addEventListener('touchend', touchEnd);
    });
};

/*
M.$.prototype.scroll = function(fns) {
    var _this = this;

    var posn = 0;
    var scrolling = false;
    var scrollEndTimeout = null;
    var blocked = false;

    function start() {
        if (scrolling) return;
        scrolling = true;
        if (fns.start) fns.start();
        move();
    }

    function move() {
        if (!scrolling) return;
        requestAnimationFrame(move);
        var oldPosn = posn;
        posn = _this.$el.scrollTop;
        if (fns.move) fns.move(posn);
        if (!FM.equals(oldPosn, posn, 1)) {
            clearTimeout(scrollEndTimeout);
        } else {
            scrollEndTimeout = setTimeout(function() { end(); }, 100);
        }
    }

    function end() {
        if (blocked || !scrolling) return;
        scrolling = false;
        if (fns.end) fns.end();
    }

    // --------------------------------------------------------------------
    // Add Event Listeners

    var $el = this.$el;

    this.on('wheel mousewheel DOMMouseScroll', start);

    this.on('touchstart', function(){
        // This ensures that overflow bounces happen within container
        var top = $el.scrollTop;
        if(top <= 0) $el.scrollTop = 1;
        if(top + $el.offsetHeight >= $el.scrollHeight) $el.scrollTop = $el.scrollHeight - $el.offsetHeight - 1;

        blocked = true;
        start();
    });

    this.on('touchend', function(){
        blocked = false;
    });
};
*/

(function () {
    var shortcuts = ('blur focus keyup keydown keypress submit').split(' ');

    shortcuts.each( function(event) {
        M.$.prototype[event] = function(callback) {
            if (callback == null) {
                this.trigger(event);
            } else {
                this.on(event, callback);
            }
        };
    });
})();



// -------------------------------------------------------------------------------------------------
// KEYBOARD EVENTS

M.activeInput = function() {
    return document.activeElement === document.body ? undefined : document.activeElement;
};

// Executes fn if any one of [keys] is pressed
M.keyboardEvent = function(keys, fn) {
    if (!(keys instanceof Array)) keys = [keys];
    document.addEventListener('keydown', function(e){
        var k = e.keyCode || e.which;
        for (var i=0; i<keys.length; ++i) {
            if (k === keys[i] && !M.activeInput()) {
                e.preventDefault();
                fn(e);
            }
        }
    });
};

// Executes fn1 if key1 is pressed, and fn2 if key2 is aready pressed
M.keyboardMultiEvent = function(key1, key2, fn1, fn2) {
    var key2down = false;

    document.addEventListener('keydown', function(e){
        var k = e.keyCode || e.which;

        if (k === key2) {
            key2down = true;
        } else if (key2down && k === key1 && !M.activeInput()) {
            e.preventDefault();
            fn2(e);
        } else if (k === key1 && !M.activeInput()) {
            e.preventDefault();
            fn1(e);
        }
    });

    document.addEventListener('keyup', function(e){
        var k = e.keyCode || e.which;
        if (k === key2) key2down = false;
    });
};



// =================================================================================================
// SCROLLING
// =================================================================================================


(function() {
    function easeIn(type, t, s) {
        switch (type) {

            case 'quad':   return t * t;
            case 'cubic':  return t * t * t;
            case 'quart':  return t * t * t * t;
            case 'quint':  return t * t * t * t * t;
            case 'circ':   return 1 - Math.sqrt(1 - t * t);
            case 'sine':   return 1 - Math.cos(t * Math.PI / 2);
            case 'exp':    return (t <= 0) ? 0 : Math.pow(2, 10 * (t - 1));

            case 'back':
                if (s == null) s = 1.70158;
                return t * t * ((s + 1) * t - s);

            case 'elastic':
                if (s == null) s = 0.3;
                return - Math.pow(2, 10 * (t - 1)) * Math.sin(((t - 1) * 2 / s - 0.5) * Math.PI );

            case 'bounce':
                     if (t < 1/11) return 1/64 - 7.5625 * (.5/11 - t) * (.5/11 - t);  // 121/16 = 7.5625
                else if (t < 3/11) return 1/16 - 7.5625 * ( 2/11 - t) * ( 2/11 - t);
                else if (t < 7/11) return 1/4  - 7.5625 * ( 5/11 - t) * ( 5/11 - t);
                else               return 1    - 7.5625 * (    1 - t) * (    1 - t);

            default:
                return t;
        }
    }

    M.easing = function(type, t, s) {

        if (t==0) return 0;
        if (t==1) return 1;

        type = type.split('-');

        if (type[1] == 'in') {
            return easeIn(type[0], t, s);

        } else if (type[1] == 'out') {
            return 1 - easeIn(type[0], 1 - t, s)

        } else {
            if (t <= 0.5) return     easeIn(type[0], 2 * t,     s) / 2;
                          return 1 - easeIn(type[0], 2 * (1-t), s) / 2;
        }
    };
})();

M.$.prototype.scrollTo = function(pos, time, easing, callback) {
    var _this = this;

    if (pos < 0) pos = 0;
    if (!easing) easing = 'cubic';
    var cancel = false;
    this.scroll({ scroll: function() { cancel = true; } });
    this.on('touchstart', function() { cancel = true; });

    var t = 0;
    var startPosition = this.$el.scrollTop;
    var distance = pos-startPosition;
    var startTime = +new Date;

    function setScroll() {
        t = +new Date - startTime;
        var x = startPosition + distance * M.easing(easing, t / time);
        _this.$el.scrollTop = x
        if (callback) callback(x);
    }

    function animate() {
        if (!cancel && t<time) M.animationFrame(animate)
        setScroll();
    }

    animate();
};



// =================================================================================================
// SPECIAL ELEMENTS
// =================================================================================================

M.$body = $(document.body);
M.$html = $(document.getElementsByTagName('html')[0]);
M.$window = $(window);

M.$html.addClass( M.browser.isTouch ? 'touch' : 'no-touch' );
M.$html.addClass( M.browser.isMobile ? 'mobile' : 'no-mobile' );

(function(){
    // Multiple queues, to allow ordering of resize events
    var events = [[], [], []];

    var trigger = function() {
        var size = [window.innerWidth, window.innerHeight];
        events.each(function(queue) {
            queue.each(function(fn) {
                fn(size);
            });
        })
    };

    M.resize = function(fn, queue) {
        if (fn) {
            events[queue||0].push(fn);
        } else {
            trigger();
        };
    };

    M.offResize = function(fn) {
        var index = events.indexOf(fn);
        if (index >= 0) events.splice(index, 1);
    };

    var timeout = null;
    M.$window.on('resize', function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            trigger();
        }, 100);
    });

})();



// =================================================================================================
// SLIDER GALLERIES
// =================================================================================================

M.Gallery = function($panel, options) {
    if (!options) options = {};

    var $wrapper = $N('div', { class: 'gallery-wrapper' });
    var $box = $N('div', { class: 'gallery-box' });
    $panel.wrap($wrapper);
    $wrapper.wrap($box);
    var $slides = $panel.children();

    var slidesCount = $slides.length;
    var staticSlideWidth = $panel.attr('data-slide-width') || null;

    var width, slidesPerPage, slideWidth;
    var activeIndex = 0;
    var transformX = 0;

    //$N('div', { class: 'gallery-shadow-left' }, $box);
    //$N('div', { class: 'gallery-shadow-right' }, $box);

    var $next = $N('div', { class: 'gallery-next' }, $box);
    var $back = $N('div', { class: 'gallery-back' }, $box);
    $N('div', { class: 'icon' }, $next);
    $N('div', { class: 'icon' }, $back);

    var $dotsBox = $N('div', { class: 'gallery-dots' }, $box);
    var $dots = [];

    $slides.each(function($s) {
        $s.addClass('gallery-slide');
        $dots.push($N('div', { class: 'gallery-dot' }, $dotsBox));
    });

    // RESIZE EVENTS -------------------------------------------------------------------------------

    var setPosition = function(offset) {
        transformX = offset;
        $panel.transformX(offset);
        /*if (options.opacity) $slides.each(function($s, i) {
            var x = ((i+1)*slideWidth + offset) / slideWidth;
            $s.css('opacity', M.easing('quad', 0.4 + 0.6 * x.bound(0,1) ));
        });*/
    };

    var makeActive = function(newIndex) {
        activeIndex = newIndex;
        $dots.each(function($d, i) {
            $d.setClass('on', i >= newIndex && i < newIndex + slidesPerPage);
        });
        if (options.callback) options.callback(newIndex);
        $next.setClass('disabled', newIndex === slidesCount - slidesPerPage);
        $back.setClass('disabled', newIndex === 0);
    };

    var resize = function() {
        width = $wrapper.width('border');
        slidesPerPage = staticSlideWidth ? Math.ceil(width/staticSlideWidth) : 1;
        slideWidth = width / slidesPerPage;

        $slides.each(function($slide) { $slide.css('width', slideWidth+'px'); });
        $panel.css('width', slidesCount*slideWidth+'px');
        setPosition(-activeIndex * slideWidth);
        makeActive(activeIndex);
    };

    // AUTOMATIC SCROLLING -------------------------------------------------------------------------

    var animTiming = 'quad';
    var animDuration = 500;
    var animT, animStart, animDistance, animStartTime;
    var animCancel = false;

    var animSetPosition = function() {
        animT = +new Date - animStartTime;
        setPosition(animStart + animDistance * M.easing(animTiming, animT / animDuration));
    };

    var animRender = function() {
        if (!animCancel && animT < animDuration) M.animationFrame(animRender);
        animSetPosition();
    };

    var startAnimationTo = function(newIndex) {
        animCancel = false;
        animT = 0;
        animStart = transformX;
        animDistance = -newIndex * slideWidth - transformX;
        animStartTime = +new Date;
        makeActive(newIndex);
        animRender();
    };

    var next = function() {
        animTiming = 'quad';
        if (activeIndex < slidesCount - slidesPerPage) {
            $next.pulse();
            startAnimationTo(activeIndex+1);
        }
    };

    var back = function() {
        animTiming = 'quad';
        if (activeIndex > 0) {
            $back.pulse();
            startAnimationTo(activeIndex-1);
        }
    };

    $next.click(next);
    $back.click(back);

    // TOUCH AND MOUSE EVENTS ----------------------------------------------------------------------

    var motionStartPosn = null;
    var pointerStart = null;
    var previousMotionX = null;
    var lastMotionX = null;

    var motionStart = function(e) {
        M.$body.on('mousemove touchmove', motionMove);
        M.$body.on('mouseup mouseleave touchend touchcancel', motionEnd);
        animCancel = true;
        motionStartPosn = transformX;
        pointerStart = event.touches ? event.touches[0].clientX : event.clientX;
        lastMotionX = previousMotionX = pointerStart;
    };

    var motionMove = function(e) {
        e.preventDefault();

        var x = event.touches ? event.touches[0].clientX : event.clientX;
        previousMotionX = lastMotionX;
        lastMotionX = x;
        var newPosition = motionStartPosn - pointerStart + x;
        var maxScroll = -(slidesCount - slidesPerPage) * slideWidth;

        // Add resistance at ends of slider
        if (newPosition > 0) {
            setPosition(newPosition/4);
        } else if (newPosition < maxScroll) {
            setPosition(maxScroll + (newPosition - maxScroll)/4);
        } else {
            setPosition(newPosition);
        }
    };

    var motionEnd = function(e) {
        M.$body.off('mousemove touchmove', motionMove);
        M.$body.off('mouseup mouseleave touchend touchcancel', motionEnd);

        x = event.touches ? event.touches[0].clientX : event.clientX;
        var lastDiff = lastMotionX - previousMotionX;
        var shift = lastDiff > 12 ? 1 : lastDiff < -12 ? -1 : 0;

        animTiming = 'quad-out';
        startAnimationTo(Math.round(-transformX/slideWidth-shift).bound(0, slidesCount - slidesPerPage));
    };

    $wrapper.on('mousedown touchstart', motionStart);

    // ---------------------------------------------------------------------------------------------

    resize();
    M.resize(resize);

    return {
        next: next,
        back: back
    };
};

// =================================================================================================

M.Draggable = M.Class.extend({

    init: function($el, $parent, direction, margin) {

        var _this = this;
        var moveX = (direction !== 'y')
        var moveY = (direction !== 'x')

        var position = [0, 0];
        var dragStart = [null, null];
        var width, height;

        var getPosn = function(e) {
            return [ event.touches ? e.touches[0].clientX : e.clientX,
                     event.touches ? e.touches[0].clientY : e.clientY ];
        };

        var draw = function(x, y) {
            if (moveX) $el.css('left', Math.round(x) + 'px');
            if (moveY) $el.css('top', Math.round(y) + 'px');
            _this.trigger('change', { x: x, y: y, width: width, height: height });
        };

        this.set = function(x, y) {
            draw(x, y);
            position = [x, y];
        };

        this.get = function() {
            return { x: position[0], y: position[1], width: width, height: height };
        };

        var motionStart = function(e) {
            M.$body.on('mousemove touchmove', motionMove);
            M.$body.on('mouseup mouseleave touchend touchcancel', motionEnd);
            dragStart = getPosn(e);
            _this.trigger('start');
        };

        var motionMove = function(e) {
            e.preventDefault();
            var newPosition = getPosn(e);
            var x = (position[0] + newPosition[0] - dragStart[0]).bound(0, width);
            var y = (position[1] + newPosition[1] - dragStart[1]).bound(0, height);
            draw(x, y)
        };

        var motionEnd = function(e) {
            M.$body.off('mousemove touchmove', motionMove);
            M.$body.off('mouseup mouseleave touchend touchcancel', motionEnd);
            var newPosition = getPosn(e);
            if (newPosition[0] == dragStart[0] && newPosition[1] == dragStart[1]) {
                _this.trigger('click');
            } else {
                var x = (position[0] + newPosition[0] - dragStart[0]).bound(0, width);
                var y = (position[1] + newPosition[1] - dragStart[1]).bound(0, height);
                position = [x, y];
                _this.trigger('end');
            }
        };

        $el.on('mousedown touchstart', motionStart);

        var resize = function() {
            var oldWidth = width;
            var oldHeight = height;
            width = $parent.width('border') - margin * 2;
            height = $parent.height('border') - margin * 2;
            _this.set(width/(oldWidth||width)*position[0], height/(oldHeight||height)*position[1]);
        };

        resize();
        M.resize(resize);
    }
});

// =================================================================================================

M.Slider = M.Class.extend({

    init: function($track, steps) {

        var _this = this;

        $track.addClass('slider-track');
        var $knob = $N('div', { class: 'slider-knob' }, $track);
        $N('div', { class: 'icon' }, $knob);

        var slider = new M.Draggable($knob, $track, 'x', 4);
        var active;

        slider.on('start', function() {
            cancelPlay = true;
        });

        slider.on('change', function(e) {
            var n = Math.floor(e.x / e.width * steps);
            if (n !== active) {
                _this.trigger('move', n);
            }
            active = n;
        });

        var cancelPlay = false;
        slider.on('click', function(){ _this.play(); });

        var animRender = function() {
            var dim = slider.get();
            if (!cancelPlay && dim.x < dim.width) M.animationFrame(animRender);
            slider.set( dim.x + 2 );
        };

        this.play = function() {
            cancelPlay = false;
            $knob.pulse();
            animRender();
        };

        slider.set(0,0);
    }

});

// =================================================================================================

M.ImageSequence = M.Class.extend({

    init: function($el) {

        var _this = this;
        var $wrap = $N('div');
        $el.wrap($wrap);

        var url = $el.attr('data-src');
        var pages = Number($el.attr('data-pages')) - 1;

        var $track = $N('div', {}, $wrap);
        var slider = new M.Slider($track, pages)

        var images = [];
        for (var i=1; i<pages; ++i) {
            images[i] = new Image();
            images[i].src = url.replace('#', i);
        }

        slider.on('move', function(n) {
            $el.attr('src', url.replace('#', n));
            //if (n === pages-1) _this.trigger('last', {});
            //if (n === 0) _this.trigger('first', {});
        });
        slider.trigger('move', 0);
    }

});



// =================================================================================================
// SVG FUNCTIONS
// =================================================================================================

M.svg = {};

M.svg.el = function(type, attributes, parent) {
    var _this = this;
    var svgns = "http://www.w3.org/2000/svg";
    this.$el = document.createElementNS(svgns, type);
    this.data = {};
    M.each(attributes, function(val, key){ _this.$el.setAttribute(key, val); });
    if (parent) parent.append(this);
};

M.inherit(M.svg.el, M.$);

M.svg.el.prototype.setPoints = function(p) {
    this.attr('d', p.length ? 'M' + p.each(function(x){ return x.join(','); }).join('L') : '' );
    this.points = p;
};

M.svg.el.prototype.addPoint = function(p) {
    this.attr('d', this.attr('d') + ' L '+p.join(',') );
    this.points.push(p);
};

M.svg.el.prototype.getPoints = function() {
    var points = this.$el.attr('d').replace('M','').split('L');
    return points.each(function(x){ return x.split(',').toNumbers(); });
};



// =================================================================================================
// COLOUR FUNCTIONS
// =================================================================================================

M.colour = {
    red:    '#D90000',
    orange: '#F15A24',
    yellow: '#edd200',
    lime:   '#b2d300',
    green:  '#00B200',
    cyan:   '#29ABE2',
    blue:   '#006DD9',
    violet: '#662D91',
    purple: '#9d0069',
    pink:   '#ED1E79'
};

M.colour.parse = function(c) {
    if (c[0] === '#') {
        return [ parseInt(c.substr(1,2),16), parseInt(c.substr(3,2),16), parseInt(c.substr(5,2),16) ];
    } else if (c.indexOf('rgb') >= 0) {
        return c.replace('rgb(','').replace('rgba(','').replace(')','').split(',')
                .each(function(x){ return +x; });
    }
    return null;
};

(function() {

    var pad2 = function(str) {
        return str.length === 1 ? '0' + str : str;
    };

    var makeHex = function(colour) {
        var c = M.colour.parse(colour);
        return '#' + c.each(function(x) { return pad2(Math.round(x).toString(16)); }).join('');
    };

    var makeRgb = function(c) {
        var alpha = (c[3] || (c[3] === 0));
        return 'rgb' + (alpha ? 'a(' : '(') + c.slice(0,3).each(function(x) { return Math.round(x); }).join(',') + (alpha ? ',' + c[3] : '') + ')';
    };

    M.colour.toRgb = function(c) {
        return makeRgb(M.colour.parse(c));
    };

    M.colour.toHex = function(c) {
        return makeHex(M.colour.parse(c));
    };

    M.colour.interpolate = function(c1, c2, p) {
        p = p.bound(0,1);

        c1 = M.colour.parse(c1);
        c2 = M.colour.parse(c2);
        var alpha = (c1[3] != null || c2[3] != null);
        if (c1[3] == null) c1[3] = 1;
        if (c2[3] == null) c2[3] = 1;

        return makeRgb([
            p*c1[0]+(1-p)*c2[0],
            p*c1[1]+(1-p)*c2[1],
            p*c1[2]+(1-p)*c2[2],
            alpha ? p*c1[3]+(1-p)*c2[3] : null
        ]);
    }

})();

// Gets the colour of a multi-step gradient at a given percentage p
M.colour.getColourAt = function(gradient, p) {
    p = p.bound(0, 0.999);
    var r = Math.floor(p * (gradient.length - 1));
    var q = p * (gradient.length - 1) - r;
    return M.colour.interpolate(gradient[r+1], gradient[r], q);
};

(function(){
    // Colour Schemes from http://www.sron.nl/~pault/colourschemes.pdf

    var rainbow = ['#D92120', '#E6642C', '#E68E34', '#D9AD3C', '#B5BD4C', '#7FB972', '#63AD99', '#55A1B1',
                   '#488BC2', '#4065B1', '#413B93', '#781C81'];
    M.colour.rainbow = function(steps) {
        var scale = (0.4 + 0.15 * steps).bound(0,1);
        return FM.tabulate(function(x){ return M.colour.getColourAt(rainbow, scale*x/(steps-1)); }, steps);
    };

    var temperature = ['#3D52A1', '#3A89C9', '#77B7E5', '#B4DDF7', '#E6F5FE', '#FFFAD2', '#FFE3AA', '#F9BD7E',
                       '#ED875E', '#D24D3E', '#AE1C3E'];
    M.colour.temperature = function(steps) {
        var scale = (0.1 * steps).bound(0,1);
        return FM.tabulate(function(x){
            return M.colour.getColourAt(temperature, (1-scale)/2 + scale*x/(steps-1) ); }, steps);
    };

    var solar = ['#FFFFE5', '#FFF7BC', '#FEE391', '#FEC44F', '#FB9A29', '#EC7014', '#CC4C02', '#993404',
                 '#662506'];
    M.colour.solar = function(steps) {
        return FM.tabulate(function(x){ return M.colour.getColourAt(solar, x/(steps-1)); }, steps);
    };

})();



// ================================================================================================
// AUDIO PLAYER
// ================================================================================================

M.Audio = {
    files: {},
    playing: null,
    load: function(src, id) {
        M.Audio.files[id] = new Audio(src);
        M.Audio.files[id].load();
        M.Audio.files[id].addEventListener('timeupdate', function() {
            if (M.Audio.playing) M.Audio.playing.update();
        });
        return M.Audio.files[id];
    }
};

M.Audio.chunk = M.Class.extend({

    init: function(file, times) {
        if (typeof times == 'string') times = times.split('|').toNumbers();
        this.times = times;
        this.currentTime = times[0];
        this.duration = times[1] - times[0];
        this.player = M.Audio.files[file] || M.Audio.load(file, Math.floor(Math.random()*10000));
        this.ended = false;
    },

    play: function() {
        var _this = this;

        if (this.player.readyState < 2) {
            $(this.player).one('canplay seeked', function() { _this.play(); });
            return;
        }

        if (M.Audio.playing) M.Audio.playing.pause();
        M.Audio.playing = this;

        this.ended = false;
        this.player.currentTime = this.currentTime;
        this.player.play();
        this.trigger('play', { p: (this.currentTime - this.times[0]) / this.duration, t: this.currentTime });
    },

    pause: function() {
        if (M.Audio.playing === this) this.player.pause();
        this.trigger('pause');
    },

    setTime: function(time) {
        if (this.player.readyState) this.player.currentTime = time;
        this.trigger('timeupdate', { p: (time - this.times[0]) / this.duration, t: time });
    },

    reset: function() {
        if (M.Audio.playing === this) this.player.pause();
        if (this.player.readyState) this.currentTime = this.times[0];
        this.ended = true;
        this.trigger('reset');
    },

    update: function() {
        if (this.ended) return;

        if (M.Audio.playing === this)
            this.currentTime = this.player.currentTime;

        if (this.currentTime >= this.times[1]) {
            this.ended = true;
            this.pause();
            this.trigger('end');
            return;
        }

        this.trigger('timeupdate', { p: (this.currentTime - this.times[0]) / this.duration, t: this.currentTime });
    }

});



// =================================================================================================
// SPEECH RECOGNITION
// =================================================================================================

M.speechRecognition = function() {

    if (!M.browser.speechRecognition) {
        return {
            start: function() { rec.start(); },
            stop: function() { rec.stop(); },
            addCommand: function(){},
            removeCommand: function(){},
            available: false
        };
    }

    var rec = new window.webkitSpeechRecognition();
    rec.continuous = true;
    rec.language = 'en-US';
    //rec.interimResults = true;

    var commands = {};

    var processCommand = function(name) {
        name = name.toLowerCase().trim();
        if (commands[name]) commands[name]();
    };

    rec.onresult = function(event) {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            console.debug('Voice Input: ', event.results[i][0].transcript);
            processCommand(event.results[i][0].transcript);
        }
    };

    //rec.onstart = function() { ... }
    //rec.onerror = function(event) { ... }
    //rec.onend = function() { ... }

    var addCommand = function(name, fn) {
        if (!(name instanceof Array)) name = [name];
        for (var i=0; i<name.length; ++i) commands[name[i].toLowerCase()] = fn;
    };

    var removeCommand = function(name) {
        if (!(name instanceof Array)) name = [name];
        for (var i=0; i<name.length; ++i) commands[name[i].toLowerCase()] = undefined;
    };

    return {
        start: function() { rec.start(); },
        stop: function() { rec.stop(); },
        addCommand: addCommand,
        removeCommand: removeCommand,
        available: true
    };
};



// =================================================================================================
// ELEMENT TEMPLATES
// =================================================================================================

M.piechart = function(percentage, radius, colour) {
    var str;

    if (percentage >= 1) {

        str = [
            '<svg width="',2*radius,'" height="',2*radius,'">',
            '<path fill="',colour,'" stroke="none" d="M',
            radius,',0C',radius*0.5,',0,0,',radius*0.5,',0,',radius,'s',
            radius*0.5,',',radius,',',radius,',',radius,'s',
            radius,'-',radius*0.5,',',radius,'-',radius,'S',radius*1.5,',0,',radius,',0',
            'z M',radius*44.6/50,',',radius*76.1/50,'L',radius*19.2/50,',',radius*48.8/50,
            'l',radius*4/50,'-',radius*4.2/50,'l',radius*19.8/50,',',radius*11.9/50,'l',radius*34.2/50,'-',radius*32.6/50,
            'l',radius*3.5/50,',',radius*3.5/50,'L',radius*44.6/50,',',radius*76.1/50,'z"/>',
            '</svg>'
        ].join('');

    } else {

        var x = radius + radius * Math.sin(percentage * 2 * Math.PI);
        var y = radius - radius * Math.cos(percentage * 2 * Math.PI);

        str = [
            '<svg width="',2*radius,'" height="',2*radius,'">',
            '<circle cx="',radius,'" cy="',radius,'" r="',radius-0.5,'" stroke="',colour,'" stroke-width="1" fill="transparent"/>',
            '<path d="M ',radius,' ',radius,' L ',radius,' 0 A ',radius,' ',radius,' 0 '+
                (percentage>0.5?'1':'0')+' 1 '+x+' '+y+' Z" fill="',colour,'"/>',
            '</svg>'
        ].join('');

    }

    return str;
};

// -------------------------------------------------------------------------------------------------

M.draw = function($svg, options) {

    var _this = this;

    $svg.addClass('m-draw-pointer');
    _this.options = options;
    _this.drawing = false;
    _this.paths = [];
    _this.p = null;
    var activePath = null;

    _this.start = function(p) {
        if (_this.p && FM.geo.distance(_this.p, p) < 20) {
            activePath.addPoint(p);

        } else {
            if (options.onStart) options.onStart(p);
            activePath = new M.svg.el('path', {
                'class': 'm-draw-path',
                'd': 'M '+p.join(',')
            }, options.paths || $svg);
            activePath.points = [p];
            _this.paths.push(activePath);
        }

        _this.drawing = true;
        _this.p = p;
    };

    _this.addPoint = function(p) {
        if (FM.geo.manhatten(_this.p, p) > 4) {
            activePath.addPoint(p);
            _this.p = p;
            if (options.onIntersect) _this.checkForIntersects();
        }
    };

    if (!options.noStart) {
        $svg.on('mousedown touchstart', function(e) {

            e.preventDefault();
            e.stopPropagation();

            var p = M.events.pointerOffset(event, $svg);
            _this.start(p);
        });
    }

    $svg.on('mousemove touchmove', function(e) {
        if (!_this.drawing) return;

        e.preventDefault();
        e.stopPropagation();

        var p = M.events.pointerOffset(event, $svg);
        _this.addPoint(p);
    });

    $svg.on('mouseup touchend mouseleave touchleave', function() {
        _this.drawing = false;
    });
};

M.draw.prototype.checkForIntersects = function() {

    if (this.paths.length <= 1) return;
    var path = this.paths.last();
    var a1 = path.points[path.points.length-2];
    var a2 = path.points[path.points.length-1];

    for (var i=0; i<this.paths.length-1; ++i) {
        var l = this.paths[i].points.length;
        for (var j=1; j<l-2; ++j) {
            var t = FM.geo.intersect(a1, a2, this.paths[i].points[j], this.paths[i].points[j+1]);
            if (t) {
                this.options.onIntersect(t, path, this.paths[i]);
                return;
            }
        }
    }
};

M.draw.prototype.stop = function() {
    this.drawing = false;
    this.p = null;
};

M.draw.prototype.clear = function() {
    this.paths.each(function(path) { path.remove(); });
    this.paths = [];
};

