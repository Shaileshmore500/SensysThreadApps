////////PLUGINS/////////////////
/////-------EASING--------//////
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(e, a, c, b, d) { return jQuery.easing[jQuery.easing.def](e, a, c, b, d) }, easeInQuad: function(e, a, c, b, d) { return b * (a /= d) * a + c }, easeOutQuad: function(e, a, c, b, d) { return -b * (a /= d) * (a - 2) + c }, easeInOutQuad: function(e, a, c, b, d) { if ((a /= d / 2) < 1) return b / 2 * a * a + c; return -b / 2 * (--a * (a - 2) - 1) + c }, easeInCubic: function(e, a, c, b, d) { return b * (a /= d) * a * a + c }, easeOutCubic: function(e, a, c, b, d) { return b * ((a = a / d - 1) * a * a + 1) + c }, easeInOutCubic: function(e, a, c, b, d) {
    if ((a /= d / 2) < 1) return b /
2 * a * a * a + c; return b / 2 * ((a -= 2) * a * a + 2) + c
}, easeInQuart: function(e, a, c, b, d) { return b * (a /= d) * a * a * a + c }, easeOutQuart: function(e, a, c, b, d) { return -b * ((a = a / d - 1) * a * a * a - 1) + c }, easeInOutQuart: function(e, a, c, b, d) { if ((a /= d / 2) < 1) return b / 2 * a * a * a * a + c; return -b / 2 * ((a -= 2) * a * a * a - 2) + c }, easeInQuint: function(e, a, c, b, d) { return b * (a /= d) * a * a * a * a + c }, easeOutQuint: function(e, a, c, b, d) { return b * ((a = a / d - 1) * a * a * a * a + 1) + c }, easeInOutQuint: function(e, a, c, b, d) { if ((a /= d / 2) < 1) return b / 2 * a * a * a * a * a + c; return b / 2 * ((a -= 2) * a * a * a * a + 2) + c }, easeInSine: function(e,
a, c, b, d) { return -b * Math.cos(a / d * (Math.PI / 2)) + b + c }, easeOutSine: function(e, a, c, b, d) { return b * Math.sin(a / d * (Math.PI / 2)) + c }, easeInOutSine: function(e, a, c, b, d) { return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c }, easeInExpo: function(e, a, c, b, d) { return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c }, easeOutExpo: function(e, a, c, b, d) { return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c }, easeInOutExpo: function(e, a, c, b, d) { if (a == 0) return c; if (a == d) return c + b; if ((a /= d / 2) < 1) return b / 2 * Math.pow(2, 10 * (a - 1)) + c; return b / 2 * (-Math.pow(2, -10 * --a) + 2) + c },
    easeInCirc: function(e, a, c, b, d) { return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c }, easeOutCirc: function(e, a, c, b, d) { return b * Math.sqrt(1 - (a = a / d - 1) * a) + c }, easeInOutCirc: function(e, a, c, b, d) { if ((a /= d / 2) < 1) return -b / 2 * (Math.sqrt(1 - a * a) - 1) + c; return b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c }, easeInElastic: function(e, a, c, b, d) { e = 1.70158; var f = 0, g = b; if (a == 0) return c; if ((a /= d) == 1) return c + b; f || (f = d * 0.3); if (g < Math.abs(b)) { g = b; e = f / 4 } else e = f / (2 * Math.PI) * Math.asin(b / g); return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + c }, easeOutElastic: function(e,
a, c, b, d) { e = 1.70158; var f = 0, g = b; if (a == 0) return c; if ((a /= d) == 1) return c + b; f || (f = d * 0.3); if (g < Math.abs(b)) { g = b; e = f / 4 } else e = f / (2 * Math.PI) * Math.asin(b / g); return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c }, easeInOutElastic: function(e, a, c, b, d) {
    e = 1.70158; var f = 0, g = b; if (a == 0) return c; if ((a /= d / 2) == 2) return c + b; f || (f = d * 0.3 * 1.5); if (g < Math.abs(b)) { g = b; e = f / 4 } else e = f / (2 * Math.PI) * Math.asin(b / g); if (a < 1) return -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c; return g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a *
d - e) * 2 * Math.PI / f) * 0.5 + b + c
}, easeInBack: function(e, a, c, b, d, f) { if (f == undefined) f = 1.70158; return b * (a /= d) * a * ((f + 1) * a - f) + c }, easeOutBack: function(e, a, c, b, d, f) { if (f == undefined) f = 1.70158; return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c }, easeInOutBack: function(e, a, c, b, d, f) { if (f == undefined) f = 1.70158; if ((a /= d / 2) < 1) return b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c; return b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c }, easeInBounce: function(e, a, c, b, d) { return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c }, easeOutBounce: function(e, a, c, b, d) {
    return (a /=
d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
}, easeInOutBounce: function(e, a, c, b, d) { if (a < d / 2) return jQuery.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c; return jQuery.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c }
});


/////-------COOKIES & QS--------//////
function _hasLocalStorage() {
    try {
        var uid = new Date;
        window.localStorage.setItem(uid, uid);
        var fail = window.localStorage.getItem(uid) != uid;
        window.localStorage.removeItem(uid);
        return (window.localStorage && !fail);
    } catch (e) { }
    return false;
}

$.DB = function(key, value) {
    if (value === undefined) {
        var val = window.localStorage.getItem(key);
        return val && JSON.parse(val);
    }
    else if (value === null) {
        return window.localStorage.removeItem(key);
    }
    else
        return window.localStorage.setItem(key, JSON.stringify(value));
}

function delayClick(e, fn, d) {
    var src = e.currentTarget ? e.currentTarget : e.srcElement;
    if (src.clickSet)
        return;
    src.clickSet = true;
    window.setTimeout(function () { src.clickSet = false; fn(src,e); }, d ? d : 360);
}

$.DataBase = function(key, value, options) {
    if (_hasLocalStorage()) {
        if (value === null || value === undefined) {
            return window.localStorage.getItem(key);
        }
        else
            return window.localStorage.setItem(key, value);
    }

    if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
        options = $.extend({}, options);
        if (value === null || value === undefined) {
            options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        value = String(value);
        return (document.cookie = [
        encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
    ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

    var pairs = document.cookie.split('; ');
    for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
        if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
    }
    return null;
};

$.QS = function(qkey, defaultVal) {
    if (defaultVal == null) {
        defaultVal = "";
    }
    qkey = qkey.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + qkey + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null) {
        return defaultVal;
    }
    else {
        return decodeURIComponent(qs[1]);
    }
};

/////-------Debounced & Throttled Events-------//////
/////https://github.com/louisremi/jquery-smartresize/
////$(window).bind("debouncedresize", function() {});
////$(window).bind("throttledresize", function() {});
//// increase the threshold to 250ms
////$.event.special.debouncedresize.threshold = 250;
//// decrease the firing rate to a maximum of 30fps
////$.event.special.throttledresize.threshold = 1;
//// 2 <=> 20fps, 3 <=> 15fps, ...
(function(a) { var c = a.event, b, d; b = c.special.debouncedresize = { setup: function() { a(this).on("resize", b.handler) }, teardown: function() { a(this).off("resize", b.handler) }, handler: function(a, f) { var g = this, j = arguments, h = function() { a.type = "debouncedresize"; c.dispatch.apply(g, j) }; d && clearTimeout(d); f ? h() : d = setTimeout(h, b.threshold) }, threshold: 150} })(jQuery);
(function(a) { var c = a.event, b, d = { _: 0 }, e = 0, f, g; b = c.special.throttledresize = { setup: function() { a(this).on("resize", b.handler) }, teardown: function() { a(this).off("resize", b.handler) }, handler: function(j, h) { var k = this, l = arguments; f = !0; g || (setInterval(function() { e++; if (e > b.threshold && f || h) j.type = "throttledresize", c.dispatch.apply(k, l), f = !1, e = 0; 9 < e && (a(d).stop(), g = !1, e = 0) }, 30), g = !0) }, threshold: 0} })(jQuery);

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function (b, c) { var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}), a; $.throttle = a = function (e, f, j, i) { var h, d = 0; if (typeof f !== "boolean") { i = j; j = f; f = c } function g() { var o = this, m = +new Date() - d, n = arguments; function l() { d = +new Date(); j.apply(o, n) } function k() { h = c } if (i && !h) { l() } h && clearTimeout(h); if (i === c && m > e) { l() } else { if (f !== true) { h = setTimeout(i ? k : l, i === c ? e - m : e) } } } if ($.guid) { g.guid = j.guid = j.guid || $.guid++ } return g }; $.debounce = function (d, e, f) { return f === c ? a(d, e, false) : a(d, f, e !== false) } })(this);


/////-------Image Load Event--------//////
//https://github.com/desandro/imagesloaded
(function(c, n) {
    var k = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="; c.fn.imagesLoaded = function(l) {
        function m() { var b = c(h), a = c(g); d && (g.length ? d.reject(e, b, a) : d.resolve(e)); c.isFunction(l) && l.call(f, e, b, a) } function i(b, a) { b.src === k || -1 !== c.inArray(b, j) || (j.push(b), a ? g.push(b) : h.push(b), c.data(b, "imagesLoaded", { isBroken: a, src: b.src }), o && d.notifyWith(c(b), [a, e, c(h), c(g)]), e.length === j.length && (setTimeout(m), e.unbind(".imagesLoaded"))) } var f = this, d = c.isFunction(c.Deferred) ? c.Deferred() :
0, o = c.isFunction(d.notify), e = f.find("img").add(f.filter("img")), j = [], h = [], g = []; e.length ? e.bind("load.imagesLoaded error.imagesLoaded", function(b) { i(b.target, "error" === b.type) }).each(function(b, a) { var e = a.src, d = c.data(a, "imagesLoaded"); if (d && d.src === e) i(a, d.isBroken); else if (a.complete && a.naturalWidth !== n) i(a, 0 === a.naturalWidth || 0 === a.naturalHeight); else if (a.readyState || a.complete) a.src = k, a.src = e }) : m(); return d ? d.promise(f) : f
    }
})(jQuery);

(function ($) {
    var check = false, isRelative = true;

    $.elementFromPoint = function (x, y) {
        if (!document.elementFromPoint) return null;

        if (!check) {
            var sl;
            var doc;
            if ((sl = $(document).scrollTop()) >0)
            {
                doc = document.elementFromPoint(0, sl + $(window).height() -1);
                if ( doc != null ) { if ( doc.tagName.toUpperCase() == "HTML" ) doc = null; }
                isRelative = ( doc == null );
            }
            else if((sl = $(document).scrollLeft()) >0)
            {
                doc = document.elementFromPoint(sl + $(window).width() -1, 0);
                if ( doc != null ) { if ( doc.tagName.toUpperCase() == "HTML" ) doc = null; }
                isRelative = ( doc == null );
            }
            check = (sl > 0);
        }        
        if (!isRelative) {
            x += $(document).scrollLeft();
            y += $(document).scrollTop();
        }

        return document.elementFromPoint(x, y);
    }

})(jQuery);



/////////////////////////////////////////////////ARRAY UTILITIES//////////////////////////////////////////////////////////
//https://github.com/KristianAbrahamsen/jquery.arrayUtilities
(function (e) { var t = {}; var n = function (e) { for (var t = 0; t < e.length; t++) { if (!(e[t] instanceof Array)) { throw new Error("Every argument must be an array!") } } }; t.distinct = function (t) { if (arguments.length != 1) throw new Error("There must be exactly 1 array argument!"); n(arguments); var r = []; for (var i = 0; i < t.length; i++) { var s = t[i]; if (e.inArray(s, r) === -1) { r.push(s) } } return r }; t.union = function () { if (arguments.length < 2) throw new Error("There must be minimum 2 array arguments!"); n(arguments); var t = this.distinct(arguments[0]); for (var r = 1; r < arguments.length; r++) { var i = arguments[r]; for (var s = 0; s < i.length; s++) { var o = i[s]; if (e.inArray(o, t) === -1) { t.push(o) } } } return t }; t.intersect = function () { if (arguments.length < 2) throw new Error("There must be minimum 2 array arguments!"); n(arguments); var t = []; var r = this.distinct(arguments[0]); if (r.length === 0) return []; for (var i = 0; i < r.length; i++) { var s = r[i]; var o = true; for (var u = 1; u < arguments.length; u++) { var a = arguments[u]; if (a.length == 0) return []; if (e.inArray(s, a) === -1) { o = false; break } } if (o) { t.push(s) } } return t }; t.except = function () { if (arguments.length < 2) throw new Error("There must be minimum 2 array arguments!"); n(arguments); var t = []; var r = this.distinct(arguments[0]); var i = []; for (var s = 1; s < arguments.length; s++) { var o = arguments[s]; i = i.concat(o) } for (var s = 0; s < r.length; s++) { var u = r[s]; if (e.inArray(u, i) === -1) { t.push(u) } } return t }; e.arrayUtilities = t; e.distinct = t.distinct; e.union = t.union; e.intersect = t.intersect; e.except = t.except })(jQuery);

/////////////////////////////////////////////////IFRAME AUTO HEIGHT//////////////////////////////////////////////////////////
//http://github.com/house9/jquery-iframe-auto-height 
!function (e) { e.fn.iframeAutoHeight = function (t) { function i(e) { h.debug && h.debug === !0 && window.console && console.log(e) } function n(t, n) { i("Diagnostics from '" + n + "'"); try { i("  " + e(t, window.top.document).contents().find("body")[0].scrollHeight + " for ...find('body')[0].scrollHeight"), i("  " + e(t.contentWindow.document).height() + " for ...contentWindow.document).height()"), i("  " + e(t.contentWindow.document.body).height() + " for ...contentWindow.document.body).height()") } catch (r) { i("  unable to check in this state") } i("End diagnostics -> results vary by browser and when diagnostics are requested") } var r; if (e.browser === r) { var o = []; return o.push("WARNING: you appear to be using a newer version of jquery which does not support the $.browser variable."), o.push("The jQuery iframe auto height plugin relies heavly on the $.browser features."), o.push("Install jquery-browser: https://raw.github.com/house9/jquery-iframe-auto-height/master/release/jquery.browser.js"), alert(o.join("\n")), e } var h = e.extend({ heightOffset: 0, minHeight: 0, maxHeight: 0, callback: function () { }, animate: !1, debug: !1, diagnostics: !1, resetToMinHeight: !1, triggerFunctions: [], heightCalculationOverrides: [] }, t); return i(h), this.each(function () { function t(e) { var t = null; return jQuery.each(o, function (i, n) { return e[n] ? (t = s[n], !1) : void 0 }), null === t && (t = s["default"]), t } function r(r) { h.diagnostics && n(r, "resizeHeight"), h.resetToMinHeight && h.resetToMinHeight === !0 && (r.style.height = h.minHeight + "px"); var o = e(r, window.top.document).contents().find("body"), s = t(e.browser), a = s(r, o, h, e.browser); i(a), a < h.minHeight && (i("new height is less than minHeight"), a = h.minHeight), h.maxHeight > 0 && a > h.maxHeight && (i("new height is greater than maxHeight"), a = h.maxHeight), a += h.heightOffset, i("New Height: " + a), h.animate ? e(r).animate({ height: a + "px" }, { duration: 500 }) : r.style.height = a + "px", h.callback.apply(e(r), [{ newFrameHeight: a }]) } var o = ["webkit", "mozilla", "msie", "opera"], s = {}; s["default"] = function (e, t, i) { return t[0].scrollHeight + i.heightOffset }, jQuery.each(o, function (e, t) { s[t] = s["default"] }), jQuery.each(h.heightCalculationOverrides, function (e, t) { s[t.browser] = t.calculation }); var a = 0, c = this.contentDocument || this.contentWindow.document; if (i(this), h.diagnostics && n(this, "each iframe"), h.triggerFunctions.length > 0) { i(h.triggerFunctions.length + " trigger Functions"); for (var u = 0; u < h.triggerFunctions.length; u++) h.triggerFunctions[u](r, this) } if (e.browser.webkit || e.browser.opera || e.browser.chrome) { i("browser is webkit or opera"), e(this).load(function () { var e = 0, t = this, n = function () { r(t) }; 0 === a ? e = 500 : t.style.height = h.minHeight + "px", i("load delay: " + e), setTimeout(n, e), a++ }); var g = e(this).attr("src"); e(this).attr("src", ""), e(this).attr("src", g) } else "complete" === c.readyState ? r(this) : e(this).load(function () { r(this) }) }) } }(jQuery);;

/////////////////////////////////////////////////HOOKS//////////////////////////////////////////////////////////
(function ($) {
    var userAgent = navigator.userAgent.toLowerCase();

    $.browserProps = {
        version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
        safari: /webkit/.test(userAgent),
        chrome: /webkit/.test(userAgent),
        opera: /opera/.test(userAgent),
        msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
        mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
    };

})(jQuery);

//$.cssHooks.backgroundColor = {
//    get: function (elem) {
//        if (elem.currentStyle)
//            var bg = elem.currentStyle["backgroundColor"];
//        else if (window.getComputedStyle)
//            var bg = document.defaultView.getComputedStyle(elem,
//                null).getPropertyValue("background-color");
//        if (bg.search("rgb") == -1)
//            return bg;
//        else {
//            var rx = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
//            if (!rx)
//                rx = bg.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/);
//            function hex(x) {
//                return ("0" + parseInt(x).toString(16)).slice(-2);
//            }
//            return rx ? (rx.length > 4 && rx[4] / 1 == 0 ? "" : "#" + hex(rx[1]) + hex(rx[2]) + hex(rx[3])) : "#ffffff";
//        }
//    }
//};

/////////////////////////////////////////////////HELPERS////////////////////////////////////////////////////////







$.fn.outerHTML = function() {
    var elem = this[0];
    var tmp, div;

    return !elem ? null
      : typeof (tmp = elem.outerHTML) === 'string' ? tmp
      : (div = div || $('<div/>')).html(this.eq(0).clone()).html();
};

$.fn.exists = function() {
    return this.length > 0;
}

$.fn.getStyle = function (skey) {
    var regex = new RegExp(";[ ]?" + skey + "[:]([\s]*[^;']*)");
    var s = regex.exec(";" + $(this).attr("style") + ";");
    if (s == null || s.length < 2) {
        return "";
    }
    else {
        s[1] = s[1].Trim();        
        return (s[1].indexOf("rgb") == 0 ? rgb2hex(s[1]) : s[1]);
        
    }
};


jQuery.fn.dock = function (pos, refElem, isChild, _offX, _offY) {
    var offL = 0, offT = 0, offX = _offX, offY = _offY;
    if (refElem == null || refElem == window)
        refElem = $(window);
    var offW = refElem.width(), offH = refElem.height();
    offX = ($.isEmpty(offX) ? 0 : offX);
    offY = ($.isEmpty(offY) ? 0 : offY);
    if (!isChild) {
        offL = (refElem[0] == window ? 0 : refElem.offset().left); offT = (refElem[0] == window ? 0 : refElem.offset().top);
        offW = (refElem[0] == window ? refElem.width() : refElem.outerWidth()); offH = (refElem[0] == window ? refElem.height() : refElem.outerHeight());
    }
    offL += offX; offT += offY;
    if (pos == "TL") {
        this.setPosition(offL + "px", offT + "px");
    }
    if (pos == "TM") {
        this.setPosition((offL + parseInt((offW - this.outerWidth()) / 2) + (refElem[0] == window ? 0 : refElem.scrollLeft())) + "px", offT + "px");
    }
    else if (pos == "TR") {
        this.setPosition((offL + offW - this.outerWidth()) + "px", offT + "px");
    }
    else if (pos == "C") {
        this.setPosition((offL + parseInt((offW - this.outerWidth()) / 2) + (refElem[0] == window ? 0 : refElem.scrollLeft())) + "px", (offT + parseInt((offH - this.outerHeight()) / 2) + (refElem[0] == window ? (this.css("position").toLowerCase()=="fixed"? 0:$(document).scrollTop()) : refElem.scrollTop())) + "px");
    }
    else if (pos == "BL") {
        this.setPosition(offL + "px", (offT + offH - this.outerHeight()) + "px");
    }
    else if (pos == "BR") {
        this.setPosition((offL + offW - this.outerWidth()) + "px", (offT + offH - this.outerHeight()) + "px");
    }
    return this;
}

jQuery.fn.overlay = function(params, refElem, isBelow) {
    if (typeof params != "string")
        return;
    if (typeof refElem == "undefined")
        refElem = (document.documentElement);
    if (params.contains("Dim")) {
        this.setSize(refElem.outerHeight() + "px", refElem.outerWidth() + "px");
    }
    if (params.contains("Pos")) {
        this.setPosition(refElem.offset().left + "px", refElem.offset().top + "px");
    }
    if (!$.isEmpty(isBelow)) {
        if (isBelow)
            this.zIndex(refElem.zIndex() - 1)
    }
    if (params.contains("Orig")) {
        var orig = params.toUpperCase();
        orig = params.substring(params.indexOf("ORIG:") + 6).trim();
        orig = (orig.contains(",") ? orig.substring(0, orig.indexOf(",")) : orig).trim();
        if (orig == "")
            orig = "TL";
        this.dock(orig, refElem, false);
    }
    return this;
}


jQuery.fn.ShowModal = function (z, o, r) {
    var zi = 3500;
    var opt = {display:"block",position:"auto", minTop: 20, maxTop: null, minLeft: null, maxLeft: null, showClose: false, autoClose: false, onClose: null, zindex: typeof z == "number" ? z : zi, opacity: (o ? o : 0.4), refElem: (r ? r : window) };
    if (typeof z == "object")
        opt = $.extend(opt, z);
    var modal = $("<div id='" + this.attr("id") + "_ModalBackground' class='jqModalBG' style='position:fixed;background-color:black;top:0px;left:0px;bottom:0;right:0'></div>")
    $("body").append(modal);

    zi = opt.zindex
    $("body>.jqModalBG").each(function () { if (zi <= $(this).zIndex() + 1) zi = $(this).zIndex() + 6; });
   
    
    modal.css("opacity", opt.opacity).zIndex(zi - 1).show();
    this.css("position", ($.defaultVal(this.css("position"),"").toLowerCase() == "fixed" ? "fixed" : "absolute")).zIndex(zi);
    this.addClass("jqModalPopup");
    this.css("display", opt.display);
    if (opt.position != "manual") {
        this.dock("C", opt.refElem, true);
        //this.show().position({ my: "center center", at: "center center", of: window });
        if (this.offset().top < opt.minTop)
            this.css("top", opt.minTop);
        if (opt.maxTop && this.offset().top > opt.maxTop)
            this.css("top", opt.maxTop);
        if (opt.minLeft && this.offset().left < opt.minLeft)
            this.css("left", opt.minLeft);
        if (opt.maxLeft && this.offset().left > opt.maxLeft)
            this.css("left", opt.maxLeft);
        if (opt.maxTop > 0 && $(document).scrollTop() > 0)
            this.css("top", (opt.maxTop + $(document).scrollTop()) + "px");
    }

    var div = $(this);
    if (opt.autoClose)
        modal.on("click", function () { var ret = true; if (typeof opt.onClose == "function") ret = opt.onClose(); if (ret === false) return; div.HideModal(); div.children(".pClose").remove();});
    
    if (opt.showClose) {
        var cl = $("<a class='pClose' href='javascript:void(0)' style=''></a>");
        cl.on("click", function () { var ret = true; if (typeof opt.onClose == "function") ret = opt.onClose(); if (ret === false) return; div.HideModal(); cl.remove();});
        div.append(cl);
    }
    return this;
}


jQuery.fn.HideModal = function() {
    var modal = $("#" + this.attr("id") + "_ModalBackground").remove();
    this.hide();
    return this;
}

jQuery.fn.ShowPopup = function (opt) {
  
    opt = $.extend({}, {
        url: "about:blank", reuse: false, title: "", modalDialog: true,
        maxTop: 0, minTop: 0, height: 150, width: 150, minHeight: 0, minWidth: 0, maxHeight: 0, maxWidth: 0, onClose: null, zIndex: 3500, opacity: 0.4, dock: "center center",
        popupClass: "", showClose: true, autoClose: true, anim: true, refWin: window, enableDrag: false, enableResize: false, keepHidden: false, style: "", NoUi:false
    }, opt);
    if(!$.isEmpty(opt.dock))
        opt.dock = opt.dock.toLowerCase();

    if (opt.height && opt.height.toString().indexOf("%") > 0) {
        opt.height = (window.innerHeight - 65) * parseInt(opt.height) / 100;
        opt.height = (opt.minHeight > 0 && opt.height < opt.minHeight) ? opt.minHeight : opt.height;
        opt.height = (opt.maxHeight > 0 && opt.height > opt.maxHeight) ? opt.maxHeight : opt.height;
    }
    if (opt.width && opt.width.toString().indexOf("%") > 0) {
        opt.width = (window.innerWidth - 50) * parseInt(opt.width) / 100;
        opt.width = (opt.minWidth > 0 && opt.width < opt.minWidth) ? opt.minWidth : opt.width;
        opt.width = (opt.maxWidth > 0 && opt.width > opt.maxWidth) ? opt.maxWidth : opt.width;
    }

    var refWin = opt.refWin ? opt.refWin : window;
    if (!refWin.__PopupArray)
        refWin.__PopupArray = [];
    var cl = "";
    var p = null, pf = null, exists = false;
    if (opt.reuse) {
        var rec = $(refWin.__PopupArray).filter(function () { return this.Url.toLowerCase() == opt.url.toLowerCase(); });
        rec = rec.length > 0 ? rec[0] : null;
        if (rec) {
            p = refWin.$("#" + rec.Id);
            p = p.exists() ? p : null;
            pf = refWin.$("#" + rec.Id + "_ModalBackground");
            pf = pf.exists() ? pf : null;
            exists = p != null;
        }
    }
    if (!p) {
        p = $("<div  class='Popup " + opt.popupClass + "' style='top:0px;left:0px;height:30px;width:30px" + ($.isEmpty(opt.title) ? "" : ";padding-top:28px") + ";"+opt.style+"'>" + ($.isEmpty(opt.title) ? "" : "<span class='pTitle'>" + opt.title + "</span>") + "<iframe frameborder=0  allowTransparency='allowTransparency' style='height:100%;width:100%'/></div>")
        p.attr("id", refWin.$.NewID("Popup"));
        p.data("PopupData", opt);
        p.css("position", "absolute").zIndex(opt.zIndex);
        if (opt.showClose) {
            cl = $("<a class='pClose' href='javascript:void(0)' style=''></a>");
            cl.on("click", function () {
                var ret = true; if (typeof opt.onClose == "function") ret = opt.onClose($(this).parent()); if (ret === false) return; if (opt.reuse) {
                    if ($(this).parent().prev().hasClass("_lyr")) $(this).parent().prev().hide(); $(this).parent().hide();
                }
                else {
                    if ($(this).parent().prev().hasClass("_lyr")) $(this).parent().prev().remove(); $(this).parent().remove();
                }
            });
            p.append(cl);
        }
        if (opt.modalDialog) {
            var bg = $("<div id='" + p.attr("id") + "_ModalBackground' class='" + ($.isEmpty(opt.popupClass) ? "" : opt.popupClass + "_BG") + " _lyr' style='position:fixed;background-color:black;top:0px;left:0px;bottom:0;right:0'></div>");
            this.append(bg);
            if (opt.autoClose)
                bg.on("click", function (e) {
                    e.stopPropagation();
                    var ret = true; if (typeof opt.onClose == "function") ret = opt.onClose($(this).next()); if (ret === false) return;
                    if (opt.reuse) {
                        $(this).next().hide(); $(this).hide();
                    }
                    else {
                        $(this).next().remove(); $(this).remove();
                    }
                });
            else {
                bg.on("click", function (e) {
                    e.stopPropagation();
                });
            }
            bg.css("opacity", opt.opacity).zIndex(opt.zIndex - 1);
            bg.setDisplay(!opt.keepHidden);
        }
        
        p.css("position", "absolute").zIndex(opt.zIndex);
        this.append(p);
        refWin.__PopupArray.push({ Id: p.attr("id"), Url: opt.url });
        
        p.setDisplay(!opt.keepHidden);
    }
    else {
        p.css("width", "30px").css("height", "30px").css("left", "0").css("top", "0")
    }
    if (pf)
        pf.show();

   
    if (!opt.keepHidden) {
        if (opt.dock == "center center") {
            p.show().position({ my: "center center", at: "center center", of: window });
            if (opt.NoUi)
                p.css({ left: window.innerWidth / 2 - p.outerWidth() / 2, top: window.innerHeight / 2 - p.outerHeight() / 2 })
            var pos = p.position();
            var t = pos.top + 15 - opt.height / 2; (t = t < 100 ? 100 : t); (t = t > opt.maxTop && opt.maxTop > 0 ? opt.maxTop : t);
            if (opt.maxTop > 0 && $(document).scrollTop() > 0)
                t += $(document).scrollTop();
            if (opt.anim)
                p.animate({ height: opt.height, width: opt.width, left: pos.left + 15 - opt.width / 2, top: t }, 350, function () { $(this).css("overflow", ""); if (!exists) ($(this).find("iframe").attr("src", opt.url)); });
            else {
                p.css({ top: t, left: pos.left + 15 - opt.width / 2, height: opt.height, width: opt.width });
                if (!exists)
                    p.find("iframe").attr("src", opt.url);
            }
        }
        else {
            p.css({ height: opt.height, width: opt.width });
            p.show().position({ my: opt.dock, of: refWin, at: opt.dock });
           
            if (opt.dock.indexOf("right") > -1) {
                p.css("left", "initial");
                p.css("right", opt.showClose ? "24px" : "2px");
            }
            if (opt.dock.indexOf("bottom") > -1) {
                p.css("top", "initial");
                p.css("bottom", "2px");
            }
            var pos = p.position();
            if (opt.minTop > 0 && pos.top < opt.minTop)
                p.css("top", opt.minTop);
            
            if (opt.anim) {
                var tp = p.position().top;
                if (opt.dock.indexOf("top") > -1) {
                    p.css("top", "-=" + p.outerHeight());
                    p.animate({ top: tp }, 350, function () { if (!exists) ($(this).find("iframe").attr("src", opt.url)); })
                }
                else {
                    p.css("bottom", "-=" + p.outerHeight());
                    p.animate({ bottom: 2}, 350, function () { if (!exists) ($(this).find("iframe").attr("src", opt.url)); })
                }
            }
            else {
                if (!exists)
                    p.find("iframe").attr("src", opt.url);
            }
        }
    }
    else {
        p.css({ height: opt.height, width: opt.width, left: 0, top: 0 }).hide();
        if (!exists) (p.find("iframe").attr("src", opt.url));
    }

    if (!exists) {
        if (opt.enableDrag || opt.enableResize) {
            p.append("<div class='ui-draglayer'></div>")
        }
        if (opt.enableDrag)
            p.draggable();
        if (opt.enableResize)
            p.resizable({
                minHeight: 50,
                minWidth: 100
            });
    }
    return p;
}
jQuery.fn.RemovePopup = function () {
    var opt = this.data("PopupData");
    var ret = true;
    if (opt && typeof opt.onClose == "function")
        ret = opt.onClose();
    if (ret === false)
        return;
    var modal = $("#" + this.attr("id") + "_ModalBackground");
    if (opt && opt.reuse) {
        modal.hide(); this.hide();
    }
    else {
        modal.remove(); this.remove();
    }
}

jQuery.fn.selectedItem = function() {
    return this.find("option:selected");
}

jQuery.fn.setPosition = function(x, y) {
    return this.css({ "top": parseInt(y), "left": parseInt(x) });
}

jQuery.fn.setSize = function(h, w) {
    h = (h.toString().indexOf(".") && !h.toString().indexOf("%") ? parseInt(h) : h);
    w = (w.toString().indexOf(".") && !w.toString().indexOf("%") ? parseInt(w) : w);
    return this.css({ "height": h, "width": w });
}

jQuery.fn.toggleScroll = function(b) {
    var p = this;
    if (p[0] === document) {
        $(document.documentElement).css("overflow-y", b ? "auto" : "hidden").css("overflow-x", "hidden");
        p = $(document.body);
    }
    p.css("overflow-y", b ? "auto" : "hidden").css("overflow-x", "hidden");
    return this;
}



jQuery.fn.node = function(index) {
    if (typeof index != "undefined")
        return this.children(":nth-child(" + (index / 1 + 1) + ")");
    else
        return this.children();
}
jQuery.fn.node.size = function() {
    return this.children().size();
}

jQuery.fn.rows = function (index) {
    var tbl = this.prop("tagName") == "TBODY" ? this : this.children("tbody");
    if (tbl.length <= 0)
        tbl = this;
    if (typeof index != "undefined")
        return $(tbl[0].rows[index]);
    else
        return this.children();
}
jQuery.fn.cells = function(index) {
    if (typeof index != "undefined")
        return $(this[0].cells[index]);
    else
        return this.children();
}

jQuery.fn.setClass = function(css) {
    return this.attr("class", css);
}

jQuery.fn.isVisible = function() {
    if (this.css("visibility") == "hidden")
        return false;
    else
        return this.is(":visible");
}
jQuery.fn.isDisplayNone = function () {
    return !this[0] || this[0].style.display == "none";
}
jQuery.fn.isDisabled = function() {
    return this.prop("disabled");
}
jQuery.fn.setVisible = function(bool) {
    return (bool ? this.css("visibility", "visible") : this.css("visibility", "hidden"));
}
jQuery.fn.setDisplay = function (bool, renderMode) {
    if(renderMode && !$.isEmpty(renderMode))
        return (bool ? this.show(): this.hide());
    else
        return (bool ? this.show().css("display", renderMode) : this.hide());
}

jQuery.fn.checked = function(bool) {
    if ($.isEmpty(bool))
        return (this.length > 0 ? this.prop("checked") : false);
    else {              
        this.prop("checked", bool);
        if (this.parent().hasClass("toggleChk"))
            this.CheckBoxX("update");
        return this;
    }
}

var cssAppended = false;
jQuery.fn.setEnable = function(bool, disableCss) {
    if (typeof disableCss == "boolean") {
        if (!$.browserProps.msie) {
            if (!cssAppended) {
                cssAppended = true;
                $("<style type='text/css'> .disabled{ color:gray !important;} </style>").appendTo("head");
            }
            disableCss = "disabled";
        }
        else
            disableCss = "";
    }
    if ($(this).parent().hasClass("entity-check")) {
        $(this).parent().removeClass("disabled").addClass(bool ? "" : "disabled");
    }
    if (!$.isEmpty(disableCss))
        (bool ? this.removeClass(disableCss).find("span,input,label,textarea,th,select,a").removeClass(disableCss).removeAttr("disabled") : this.addClass(disableCss).find("span,input,label,textarea,th,select,a").addClass(disableCss).attr("disabled", "disabled"));
    if (this.prop("tagName") == "A") {
        this.removeAttr("disabled");
        if (!bool)
            this.attr("disabled", "disabled");
    }
    return this.prop("disabled", !bool);
}

jQuery.fn.disableOverlay = function (bool) {
    if (bool) {
        this.children(".disabledOverlay").remove();
        this.append('<div id="__' + this.NewID().attr("id") + '_ovr" class="disabledOverlay" style="background-color: #C2C2C2;cursor: not-allowed;position: absolute;top:0;left:0;right: 0;bottom:0;z-index:2;opacity:0.35;filter: alpha(opacity = 35)"></div>');
        if (this.css("position").toUpperCase() == "STATIC" || this.css("position").toUpperCase() == "")
            this.css("position", "relative");
    }
    else
        $('#__' + this.NewID().attr("id") + '_ovr').remove();
    return this;
}
if (typeof jQuery.fn.zIndex != "function") {

    jQuery.fn.zIndex = function (ind) {
        if (typeof ind != "undefined")
            return this.css("z-index", ind);
        else
            return parseInt(this.css("z-index"));
    }
}
jQuery.fn.ID = function(id) {
    if (typeof id != "undefined")
        return this.attr("id", id);
    else
        return this.attr("id");
}
jQuery.defaultEvent = function() {
    var e = new Object();
    e.preventDefault = function() { };
    e.pageX = 200;
    e.pageY = 200;
    return e;
}

jQuery.isEmpty = function(val) {
    if (typeof val == "undefined" || val == null || val == "undefined" || $.trim(val.toString()) == "")
        return true;
    else
        return false;
}

jQuery.CharWidth = function (font, size) {
    var span = $("<span style='font-family:" + font + ";font-size:" + size + ";visibility:hidden;margin:0;padding:0'>C</span>");//taking avg char C
    $(document.body).append(span);
    var w = span.width();
    span.remove();
    return w;
}

jQuery.fn.cleanWhitespace = function () {
    textNodes = this.contents().filter(
        function () { return (this.nodeType == 3 && !/\S/.test(this.nodeValue)); })
        .remove();
    return this;
}


jQuery.Event.prototype.noBubble = function() { this.preventDefault(); this.stopPropagation(); }


$.fn.insertAtCaret = function(myValue) {
    return this.each(function() {
        //IE support
        if (document.selection) {
            this.focus();
            sel = document.selection.createRange();
            sel.text = myValue;
            this.focus();
        }
        //MOZILLA/NETSCAPE support
        else if (this.selectionStart || this.selectionStart == '0') {
            var startPos = this.selectionStart;
            var endPos = this.selectionEnd;
            var scrollTop = this.scrollTop;
            this.value = this.value.substring(0, startPos)
                                      + myValue
                              + this.value.substring(endPos, this.value.length);
            this.focus();
            this.selectionStart = startPos + myValue.length;
            this.selectionEnd = startPos + myValue.length;
            this.scrollTop = scrollTop;
        } else {
            this.value += myValue;
            this.focus();
        }
    });

};

$.fn.getOffset = function (b) {
    b = (typeof b == "undefined" ? false : b == true);
    var isHidden = !this.isVisible();
    if (isHidden)
        this.show();
    var pos = this.offset();
    if (!pos)
        return null;
    var w = 0, h = 0;
    if (this[0] == document.body || this[0] == document.documentElement) {
        w = $(document).width();
        h = $(document).height();
    } else {
        w = this.outerWidth(b);
        var h = this.outerHeight(b);
    }
    pos.right = pos.left + w;
    pos.bottom = pos.top + h;
    if (isHidden)
        this.hide();
    return pos;
}

$.fn.getPosition = function (b) {
    b = (typeof b == "undefined" ? true : b == true);
    var pos = this.position();
    pos = pos ? pos : { left: 0, top: 0 };
    var w = 0, h = 0;
    if (this[0] == document.body || this[0] == document.documentElement) {
        w = $(document).width();
        h = $(document).height();
    } else {
        w = this.outerWidth(b);
        var h = this.outerHeight(b);
    }
    pos.right = pos.left + w;
    pos.bottom = pos.top + h;
    pos.scrollTop = pos.top + (this.offsetParent().exists() ? $.defaultVal(this.offsetParent().scrollTop(), 0) : 0);
    pos.scrollLeft = pos.left + (this.offsetParent().exists() ? $.defaultVal(this.offsetParent().scrollLeft(), 0) : 0);
    return pos;
}

$.fn.replace = function(o) { return this.after(o).remove(); };

$.fn.toggleSize = function(args) {
    if (!this.data("tglHt")) {
        this.data("tglHt", this.height());
        this.data("tglWd", this.width());
    }
    animArg = {};
    if (args.height)
        animArg.height = (this.data("tglOn") == "1" ? this.data("tglHt") : args.height) + "px";
    if (args.width)
        animArg.width = (this.data("tglOn") == "1" ? this.data("tglWd") : args.width) + "px";
    this.data("tglOn", this.data("tglOn") == "1" ? "0" : "1")
    this.animate(animArg, 250)
}


$.fn.animateBG = function (opts, abort, recur) {
    if (abort === true) {
        $(this).removeData("AnimatingBG");
        $(this).data("abortBG", true);
        $(this).stop(true);
        return;
    }
    if ($(this).data("AnimatingBG") && !recur)
        return;
    else {
        $(this).data("AnimatingBG", true);
    }
    var intvl = 180000;
    var opt = {};
    if (opts) {
        if (typeof opts.x != "undefined")
            opt.backgroundPositionX = $.defaultVal(opts.x, "-=1000px");
        if (typeof opts.y != "undefined")
            opt.backgroundPositionY = $.defaultVal(opts.y, "-=1000px");
        if (opts.timer > 0)
            intvl = opts.timer;
    }
    else
        opt = { backgroundPositionY: '-=1000px', backgroundPositionX: '-=1000px' }
    
    $(this).animate(opt, intvl, 'linear', function () {
        if ($(this).data("abortBG")) {
            $(this).stop(true, true);
            $(this).removeData("AnimatingBG");
            $(this).removeData("abortBG");
        }
        else
            $(this).animateBG(opts, null, true);
    });
}


jQuery.defaultVal = function (val, def) {
    if (typeof val == "undefined" || val == null || val == "undefined" || $.trim(val.toString()) == "")
        return def;
    else
        return val;
}

var __IdCtr = {};
$.fn.NewID = function (prefix) {
    if (!$.isEmpty(this.attr("id")))
        return this;
    this.attr("id", $.NewID(prefix));
    return this;
}
$.NewID = function (prefix) {   
    prefix = $.defaultVal(prefix, "ui_id_");
    prefix = prefix.replace(/[^a-zA-Z0-9-_]+/ig, '');
    __IdCtr[prefix] = $.defaultVal(__IdCtr[prefix], 1);
    while ($("#" + prefix + __IdCtr[prefix]).exists())
        __IdCtr[prefix] = __IdCtr[prefix] + 1;

    var id = prefix + __IdCtr[prefix];
    __IdCtr[prefix] = __IdCtr[prefix] + 1;
    return id;
}
$.fn.isBlank = function() {
    if (!this.is(":visible"))
        this.setVisible(false).show().data("blankCheck", true);
    var e = true;
    this.children().each(function() { if ($(this).is(":visible")) { e = false; return false; } });
    if (this.data("blankCheck")) this.removeData("blankCheck").setVisible(true);
    return e;
}


jQuery.encodeXml = function (s, isAttribute) {
    if (typeof s == "undefined" || $.isEmpty(s))
        return "";
    if (isAttribute)
        return (s
            .toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;')
        );
    else return (s
        .toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    );
}

//data-layout="{'dock':'Right','offLeft':10,'offRight':10,'offTop':10,'offBottom':10,'width':'20','minWidth':'130','maxWidth':'50'}" 
$.fn.drawLayout = function(opt) {
    if (!this.exists())
        return;
    var ctr = this;

    opt = $.extend({}, { hideIfEmpty: true, autoResize: false }, opt);

    if (opt.autoResize && !ctr.data("layoutEventSet")) {
        ctr.data("layoutEventSet", true);
        $(window).bind("throttledresize", function() { ctr.drawLayout(opt); });
    }


    ctr.css({ position: (ctr.css("position").toLowerCase() == "absolute" ? "absolute" : "relative"), visibility: "visible" });
    var avlT = 0, avlB = 0, avlL = 0, avlR = 0;
    var fillDiv = null, fillDivOpt = null;
    var docks = $(this).children("@[data-layout]");
    var defaults = { dock: "", hideIfEmpty: opt.hideIfEmpty, width: 0, minWidth: 0, maxWidth: 0, height: 0, minHeight: 0, maxHeight: 0, offTop: 0, offBottom: 0, offLeft: 0, offRight: 0 };
    docks.each(function() {
        var d = $(this);
        var s = eval("(" + $(this).attr("data-layout") + ")");
        s = $.extend({}, defaults, s);
        if (!d.isVisible() && !d.data("forceHide"))
            return true;
        if (s.hideIfEmpty) {
            if (d.isBlank())
                d.hide().data("forceHide", true);
            else if (d.data("forceHide") && !d.isVisible())
                d.show().removeData("forceHide");
        }
        if (!d.isVisible())
            return true;

        //s.offTop = 0; s.offBottom = 0; s.offLeft = 0, s.offRight = 0;

        if (s.width > 0) {
            var w = parseInt(ctr.innerWidth() * s.width / 100); w = (w < s.minWidth && s.minWidth > 0 ? s.minWidth : w); w = (w > s.maxWidth && s.maxWidth > 0 ? s.maxWidth : w);
            d.css("width", w);
        }
        if (s.height > 0) {
            var h = parseInt(ctr.innerHeight() * s.height / 100); h = (h < s.minHeight && s.minHeight > 0 ? s.minHeight : h); h = (h > s.maxHeight && s.maxHeight > 0 ? s.maxHeight : h);
            d.css("height", h);
        }
        if (s.dock.toLowerCase() == "top") {
            d.css({ position: "absolute", top: avlT + s.offTop, left: avlL + s.offLeft, right: avlR + s.offRight });
            avlT += d.outerHeight(true) + s.offTop + s.offBottom;
        }
        else if (s.dock.toLowerCase() == "bottom") {
            d.css({ position: "absolute", bottom: avlB + s.offBottom, left: avlL + s.offLeft, right: avlR + s.offRight });
            avlB += d.outerHeight(true) + s.offTop + s.offBottom;
        }
        else if (s.dock.toLowerCase() == "left") {
            d.css({ position: "absolute", top: avlT + s.offTop, left: avlL + s.offLeft, bottom: avlB + s.offBottom });
            avlL += d.outerWidth(true) + s.offLeft + s.offRight;
        }
        else if (s.dock.toLowerCase() == "right") {
            d.css({ position: "absolute", top: avlT + s.offTop, right: avlR + s.offRight, bottom: avlB + s.offBottom });
            avlR += d.outerWidth(true) + s.offLeft + s.offRight;
        }
        else if (s.dock.toLowerCase() == "fill") {
            fillDiv = d;
            fillDivOpt = s;
        }

    })

    if (fillDiv && fillDiv.isVisible()) {
        fillDiv.css({ position: "absolute", top: avlT + fillDivOpt.offTop, right: avlR + fillDivOpt.offRight, bottom: avlB + fillDivOpt.offBottom, left: avlL + fillDivOpt.offLeft });
        //fillDiv.css({ position: "absolute", top: avlT, width: ctr.outerWidth() - avlR - avlL-2, height: ctr.outerHeight() - avlB - avlT-2, left: avlL });
    }

}



$.fn.slide = function (opt) {
    var pnl = this;
    if (opt === "refresh") {
        if (pnl.data("sliderOptions"))
            _updateSiderButtons(pnl, pnl.data("sliderOptions"));
        return;
    }
    var def = { direction: "Horizontal", step: 20,disableScroll:false,scrollCancelSelector:"",disableButton:false,slideSelector:"", slideFrom: null, slideTo: null, movLeft: null, movRight: null, movTop: null, movBottom: null, onUpdate: null };
    opt = $.extend({}, def, opt); 
    if (!pnl.exists() || !pnl.isVisible()) {
        if (opt.movLeft)opt.movLeft.hide();
        if (opt.movRight) opt.movRight.hide();
        if (opt.movTop) opt.movTop.hide();
        if (opt.movBottom) opt.movBottom.hide();
    }
    if (opt.movLeft && $.isEmpty(opt.movLeft.attr("title"))) opt.movLeft.attr("title", $.defaultVal(opt.movLeft.attr("title"), "use mouse scroll to move"));
    if (opt.movRight && $.isEmpty(opt.movRight.attr("title"))) opt.movRight.attr("title", $.defaultVal(opt.movRight.attr("title"), "use mouse scroll to move"));
    if (opt.movTop && $.isEmpty(opt.movTop.attr("title"))) opt.movTop.attr("title", $.defaultVal(opt.movTop.attr("title"), "use mouse scroll to move"));
    if (opt.movBottom && $.isEmpty(opt.movBottom.attr("title"))) opt.movBottom.attr("title", $.defaultVal(opt.movBottom.attr("title"), "use mouse scroll to move"));
    pnl.data("sliderOptions", opt);
   
    if (opt.direction == "Vertical") {
        if (opt.movBottom && opt.movTop)
            _updateSiderButtons(pnl, opt);
        if (!opt.disableScroll) {
            this.off("mousewheel DOMMouseScroll MozMousePixelScroll").
            on("mousewheel DOMMouseScroll MozMousePixelScroll",
            function (event, delta) {
                if (opt.scrollCancelSelector && $(event.srcElement).closest(opt.scrollCancelSelector).length > 0)
                    return;
                event.stopPropagation();
                event.preventDefault();
                event.returnValue = false;
                if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0)
                    pnl.scrollTop(pnl.scrollTop() - 20);
                else pnl.scrollTop(pnl.scrollTop() + 20); _updateSiderButtons(pnl, opt);
            })
        }
        if (opt.movBottom) opt.movBottom.off("click").on("click", function () {
            pnl.stop().animate({ scrollTop: "+=" + opt.step }, 300, function () { _updateSiderButtons(pnl, opt); });
        });
        if (opt.movTop) opt.movTop.off("click").on("click", function () {
            pnl.stop().animate({ scrollTop: "-=" + opt.step }, 300, function () { _updateSiderButtons(pnl, opt); });
        });
    }
    else {
        if (opt.movRight && opt.movLeft)
            _updateSiderButtons(pnl, opt);
        if (!opt.disableScroll) {
            this.off("mousewheel DOMMouseScroll MozMousePixelScroll").
                on("mousewheel DOMMouseScroll MozMousePixelScroll",
                function (event, delta) {
                    if (opt.scrollCancelSelector && $(event.srcElement).closest(opt.scrollCancelSelector).length > 0)
                        return;
                    event.stopPropagation();
                    event.preventDefault();
                    event.returnValue = false;
                    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0)
                        pnl.scrollLeft(pnl.scrollLeft() - 20);
                    else pnl.scrollLeft(pnl.scrollLeft() + 20); _updateSiderButtons(pnl, opt);
                });
        }
        if (opt.movRight) opt.movRight.off("click").on("click", function () {
            pnl.stop().animate({ scrollLeft: "+=" + opt.step }, 300, function () { _updateSiderButtons(pnl, opt); });
        });
        if (opt.movLeft) opt.movLeft.off("click").on("click", function () {
            pnl.stop().animate({ scrollLeft: "-=" + opt.step }, 300, function () { _updateSiderButtons(pnl, opt); });
        });
    }
}
function _updateSiderButtons(pnl, opt) {
    if (opt.direction == "Vertical") {
        if (!opt.movBottom && !opt.movTop)
            return;
        if (pnl[0].scrollHeight <= pnl[0].clientHeight) {
            opt.movTop.hide(); opt.movBottom.hide();
            return;
        }
        if (typeof opt.onUpdate == "function")
            opt.onUpdate(pnl, opt.movTop, opt.movBottom);
        var slideFrom = opt.slideFrom ? opt.slideFrom : ($.isEmpty(opt.slideSelector) ? pnl.children(":first-child") : pnl.children(opt.slideSelector).first())
            , slideTo = opt.slideTo ? opt.slideTo : ($.isEmpty(opt.slideSelector) ? pnl.children(":last-child") : pnl.children(opt.slideSelector).last());

        var pl = parseInt(pnl.css("padding-top")); pl = isNaN(pl) ? 0 : pl;
        var pr = parseInt(pnl.css("padding-bottom")); pr = isNaN(pl) ? 0 : pr;
        var offsetFirst = slideFrom.getOffset(); var offsetLast = slideTo.getOffset();
        if (!offsetFirst)
            opt.movTop.hide();
        if (!offsetLast)
            opt.movBottom.hide();
        if (!offsetFirst || !offsetLast)
            return;
        var l = (offsetFirst.top - pnl.getOffset().top); var r = (offsetLast.bottom - (pnl.getOffset().bottom - pr));
        if (l < 0 && opt.movTop) { opt.movTop.show().removeClass("disable"); }
        else if (opt.movTop) { if (opt.disableButton) opt.movTop.addClass("disable"); else opt.movTop.hide(); }
        if (r > 0 && opt.movBottom) { opt.movBottom.show().removeClass("disable"); }
        else if (opt.movBottom) { if (opt.disableButton) opt.movBottom.addClass("disable"); else opt.movBottom.hide(); }
    }
    else {
        if (!opt.movRight && !opt.movLeft)
            return;
        if (pnl[0].scrollWidth <= pnl[0].clientWidth) {
            opt.movRight.hide(); opt.movLeft.hide();
            return;
        }
        if (typeof opt.onUpdate == "function")
            opt.onUpdate(pnl, opt.movLeft, opt.movRight);
        var slideFrom = opt.slideFrom ? opt.slideFrom : ($.isEmpty(opt.slideSelector) ? pnl.children(":first-child") : pnl.children(opt.slideSelector).first())
           , slideTo = opt.slideTo ? opt.slideTo : ($.isEmpty(opt.slideSelector) ? pnl.children(":last-child") : pnl.children(opt.slideSelector).last());

        var pl = parseInt(pnl.css("padding-left")); pl = isNaN(pl) ? 0 : pl;
        var pr = parseInt(pnl.css("padding-right")); pr = isNaN(pl) ? 0 : pr;
        var offsetFirst = slideFrom.getOffset(); var offsetLast = slideTo.getOffset();
        if (!offsetFirst)
            opt.movLeft.hide();
        if (!offsetLast)
            opt.movRight.hide();
        if (!offsetFirst || !offsetLast)
            return;
        var l = (offsetFirst.left - pnl.getOffset().left); var r = (offsetLast.right - (pnl.getOffset().right - pr));
        if (l < 0 && opt.movLeft) { opt.movLeft.show().removeClass("disable"); }
        else if (opt.movLeft) { if (opt.disableButton) opt.movLeft.addClass("disable"); else opt.movLeft.hide(); }
        if (r > 0 && opt.movRight) { opt.movRight.show().removeClass("disable"); }
        else if (opt.movRight) { if (opt.disableButton) opt.movRight.addClass("disable"); else opt.movRight.hide(); }
    }
}



$.fn.Tile = function (opt) {
    if (!this.is(":visible"))
        return this;
    opt = $.extend({ Anim: false }, opt);
    opt.Anim = this.isVisible() && opt.Anim;
    this.css("position", (this.css("position").toLowerCase() == "absolute" ? "absolute" : "relative"));
    this.children().css("position", "absolute").removeData("tiled");
    var coords = [["top", "right"], ["bottom", "left"], ["bottom", "right"]];
    function __getNewPos(el) {
        var maxT = __maxB(el);
        var arr = el.parent().children();       
        var inc = 0;
        var l = 0, t = 0, prevT = 0;
        var posArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr.eq(i)[0] == el[0])
                continue;
            if (!arr.eq(i).data("tiled"))
                continue;
            var p = arr.eq(i).getPosition(true);
            for (var x = 0; x < coords.length; x++) {
                var minL = p[coords[x][1]]; var minT = p[coords[x][0]];
                if (!__elOverlaps(el, minT, minL))
                    posArr.push({ top: minT, left: minL });
            }
        }
        
        if (posArr.length <= 1)
            return $.defaultVal(posArr[0], { left: 0, top: maxT });
        var minPos =0,minLen=9999999999;
        for (var i = 0; i < posArr.length; i++) {
            var c = posArr[i];
            if (minLen > (Math.pow(c.top, 2) + Math.pow(c.top, 2))) {
                minLen = Math.pow(c.top, 2) + Math.pow(c.top, 2);
                minPos = i;
            }
        }
        
        return posArr[minPos];
    }
    
    function __maxB(el) {
        var b = 0;
        var arr = el.parent().children();       
        for (var i = 0; i < arr.length; i++) {
            if (arr.eq(i)[0] == el[0])
                continue;
            if (!arr.eq(i).data("tiled"))
                continue;
            var p = arr.eq(i).getPosition(true);
            if (parseInt(p.bottom) > b)
                b = parseInt(p.bottom);
        }
        return b;
    }
    function __elOverlaps(el, minT, minL) {
        if (minL >= parseInt(el.parent().innerWidth()) || minL + el.outerWidth(true) > parseInt(el.parent().innerWidth()))
            return true;
        
        var arr = el.parent().children();        
        for (var x = 0; x < arr.length; x++) {
            if (arr.eq(x)[0] == el[0])
                continue;
            if (!arr.eq(x).data("tiled"))
                continue;
            var p = arr.eq(x).getPosition(true);
            if (parseInt(p.bottom) > parseInt(minT) && parseInt(p.top) <= parseInt(minT) &&
                (
                (parseInt(p.right) > parseInt(minL) && parseInt(p.left) <= parseInt(minL)) ||
                (parseInt(p.right) >= parseInt(minL + el.outerWidth(true)) && parseInt(p.left) < parseInt(minL + el.outerWidth(true))) ||
                (parseInt(p.right) < parseInt(minL + el.outerWidth(true)) && parseInt(p.left) >= parseInt(minL))
                ) 
                ) {
                return true;
            }
        }
        return false;
    }
    if (opt.Anim)
        this.setVisible(false);
    var ePos = [];
    this.children(":visible").each(function () {        
        var prv = $(this).prev();
        var el = $(this);
        var pos = __getNewPos(el);
        el.css({ left: pos.left, top: pos.top });
        el.data("tiled", true);
        ePos.push({ left: pos.left, top: pos.top });
    });
    if (opt.Anim) {
        this.children(":visible").each(function () { $(this).css({ top: $(this).outerHeight(true) * -1, left: $(this).outerWidth(true) * -1 }); });
        this.children(":visible").each(function (i) {
            $(this).animate(ePos[i], 550, "easeOutQuad");
        })
        this.setVisible(true);
    }
    return this;
}



jQuery.fn.highlight = function (pat) {
    function innerHighlight(node, pat) {
        var skip = 0;
        if (node.nodeType == 3) {
            var pos = node.data.toUpperCase().indexOf(pat);
            pos -= (node.data.substr(0, pos).toUpperCase().length - node.data.substr(0, pos).length);
            if (pos >= 0) {
                var spannode = document.createElement('span');
                spannode.className = 'highlight';
                var middlebit = node.splitText(pos);
                var endbit = middlebit.splitText(pat.length);
                var middleclone = middlebit.cloneNode(true);
                spannode.appendChild(middleclone);
                middlebit.parentNode.replaceChild(spannode, middlebit);
                skip = 1;
            }
        }
        else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
            for (var i = 0; i < node.childNodes.length; ++i) {
                i += innerHighlight(node.childNodes[i], pat);
            }
        }
        return skip;
    }
    return this.length && pat && pat.length ? this.each(function () {
        innerHighlight(this, pat.toUpperCase());
    }) : this;
};

jQuery.fn.removeHighlight = function () {
    return this.find("span.highlight").each(function () {
        this.parentNode.firstChild.nodeName;
        with (this.parentNode) {
            replaceChild(this.firstChild, this);
            normalize();
        }
    }).end();
};

jQuery.fn.hasScrollBar = function () {
    return this.get(0).scrollHeight > this.height();
}

dragMoment = function () {
    var howMuch = 180;  // change this for greater or lesser momentum
    var minDrift = 2; //  minimum drift after a drag move

    var containerPadding = [10, 10, 10, 10];  // top, right, bottom, left
    //  how near an edge can we get before the spring-back motion happens?
    //  positive numbers give a "padding" to the container (or window),
    //  negative numbers allow the dragged div to slide some distance outside

    var easeType = 'easeOutQuad';

    //  The standard ease types are 'linear' and 'swing'
    //  jQuery UI includes the following:  'easeInQuad',  
    //  'easeOutQuad',  'easeInOutQuad',  'easeInCubic',  
    //  'easeOutCubic',  'easeInOutCubic',  'easeInQuart',
    //  'easeOutQuart',  'easeInOutQuart', 'easeInQuint',
    //  'easeOutQuint',  'easeInOutQuint',  'easeInSine',  
    //  'easeOutSine',  'easeInOutSine',  'easeInExpo',  
    //  'easeOutExpo',  'easeInOutExpo',  'easeInCirc',  
    //  'easeOutCirc',  'easeInOutCirc',  'easeInElastic',
    //  'easeOutElastic',  'easeInOutElastic',  'easeInBack',
    //  'easeOutBack',  'easeInOutBack',  'easeInBounce',
    //  'easeOutBounce',  'easeInOutBounce'
    //  Also see this page for a great display of the easing types.
    //  http://jqueryui.com/demos/effect/#easing

    //  No user options below this point.

    var dXa = [0];
    var dYa = [0];
    var dTa = [0];

    return {
        cPadding: containerPadding,  // top, right, bottom, left
        bounds: {},
        uid: 'dragMoID_',
        uindex: 1,

        setBounds: function (elemID, containment, bbWidth, bbHeight) {
            dragMoment.bounds[elemID] = [];
            if (!containment) {  // make the window the container, calibrate the boundaries
                var dokWidth = $(window).width();
                var dokHeight = $(window).height();
                dragMoment.bounds[elemID][0] = dragMoment.cPadding[0];
                dragMoment.bounds[elemID][1] = parseInt($(window).width() - (dragMoment.cPadding[1] + bbWidth));
                dragMoment.bounds[elemID][2] = parseInt($(window).height() - (dragMoment.cPadding[2] + bbHeight));
                dragMoment.bounds[elemID][3] = dragMoment.cPadding[3];
            } else {  // container was set, so calibrate the boundaries
                var cOffset = $(containment).offset();
                console.log('cOffset');
                console.log(cOffset);
                var cWidth = $(containment).outerWidth();
                var cHeight = $(containment).outerHeight();
                var bTop = parseInt(cOffset.top + dragMoment.cPadding[0]);
                var bRight = parseInt((cOffset.left + cWidth) - (dragMoment.cPadding[1] + bbWidth));
                var bBottom = parseInt((cOffset.top + cHeight) - (dragMoment.cPadding[2] + bbHeight));
                var bLeft = parseInt(cOffset.left + dragMoment.cPadding[3]);
                dragMoment.bounds[elemID] = [bTop, bRight, bBottom, bLeft];
                // turn off containment, it's now handled by the dragMomentum.
                $('#' + elemID).draggable("option", 'containment', '');
            }
        },

        start: function (elemId, Xa, Ya, Ta) {
            dXa[elemId] = Xa;
            dYa[elemId] = Ya;
            dTa[elemId] = Ta;
            $('#' + elemId).data('moveCheck', 1);
        }, // END dragMoment.start()

        stop: function (elemId, Xb, Yb, Tb) {
            //  record X and Y position, and the time when user stopped dragging.        

            var Xa = dXa[elemId];
            var Ya = dYa[elemId];
            var Ta = dTa[elemId];
            var Xc = 0;
            var Yc = 0;
            var boundaryTop = dragMoment.bounds[elemId][0];
            var boundaryRight = dragMoment.bounds[elemId][1];
            var boundaryBottom = dragMoment.bounds[elemId][2];
            var boundaryLeft = dragMoment.bounds[elemId][3];

            var dDist = Math.sqrt(Math.pow(Xa - Xb, 2) + Math.pow(Ya - Yb, 2));
            var dTime = Tb - Ta;
            var dSpeed = dDist / dTime;
            dSpeed = Math.round(dSpeed * 100) / 100;

            var distX = Math.abs(Xa - Xb);
            var distY = Math.abs(Ya - Yb);

            var dVelX = (minDrift + (Math.round(distX * dSpeed * howMuch / (distX + distY))));
            var dVelY = (minDrift + (Math.round(distY * dSpeed * howMuch / (distX + distY))));

            var position = $('#' + elemId).position();
            var locX = position.left;
            var locY = position.top;

            if (Xa > Xb) {  // we are moving left
                Xc = locX - dVelX;
            } else {  //  we are moving right
                Xc = locX + dVelX;
            }

            if (Ya > Yb) {  // we are moving up
                Yc = (locY - dVelY);
            } else {  // we are moving down
                Yc = (locY + dVelY);
            }
            // Boundary Check            
            if (Xc < boundaryLeft) { Xc = boundaryLeft }
            if (Xc > boundaryRight) { Xc = boundaryRight }
            if (Yc < boundaryTop) { Yc = boundaryTop }
            if (Yc > boundaryBottom) { Yc = boundaryBottom }

            var newLocX = Xc + 'px';
            var newLocY = Yc + 'px';

            $('#' + elemId).animate({ left: newLocX, top: newLocY, useTranslate3d: true }, 500, easeType);

        } // END  dragMoment.stop()
    };  // END returned (public) functions
}();  // END dragMoment

jQuery.fn.dragMomentum = function () {
    $(this).each(function () {
        $(this).css('position', 'absolute');
        if (!$(this).attr('id')) {
            // make sure the element has an ID, assign if necessary
            $(this).attr('id', (dragMoment.uid + dragMoment.uindex));
            dragMoment.uindex++;
        }
        var containment = $(this).draggable("option", 'containment');
        var bbWidth = $(this).outerWidth();
        var bbHeight = $(this).outerHeight();
        dragMoment.setBounds(this.id, containment, bbWidth, bbHeight);

        var startOptions = function (e, ui) { dragMoment.start(this.id, e.clientX, e.clientY, e.timeStamp); };
        var stopOptions = function (e, ui) { dragMoment.stop(this.id, e.clientX, e.clientY, e.timeStamp); };
        $(this).draggable("option", 'start', startOptions);
        $(this).draggable("option", 'stop', stopOptions);
    });
    return $(this);
}
//h data-splitter-sizing="fill|fix|grow"  | v data-splitter-sizing="fill|fix|"
$.fn.SplitContainer = function (opt) {    
    var pane = this;
    var g = pane.data("SplitterWidth") ? pane.data("SplitterWidth") : (opt && opt.SplitterWidth ? opt.SplitterWidth : 5);
    var vp = pane.children(".VerticalPane");
    var hp = pane.children(".HorizontalPane");
    if (vp.length == 0 && hp.length == 0)
        return;
    var sctop =[];
    pane.cleanWhitespace();   
    vp.each(function () { sctop.push($(this).scrollTop()); $(this).css("height", ""); });
    pane.children(".VerticalResize").css("height", "");
    var mode = typeof opt == "string" ? opt : "init";
    if (mode == "redraw" || mode == "resize")
        pane.children(".ResizeHandle").remove();
    if (mode == "init" || mode == "redraw") {
        vp.each(function () { $(this).data("splitterType", "vertical"); if (!$(this).next().hasClass("VerticalResize")) $(this).after("<div class='VerticalResize ResizeHandle'><a title='Click to expand/collapse'></a></div>"); $(this).next().setDisplay($(this).isVisible()); });
        hp.each(function () { $(this).data("splitterType", "horizontal"); if (!$(this).next().hasClass("HorizontalResize")) $(this).after("<div class='HorizontalResize ResizeHandle'><a title='Click to expand/collapse'></a></div>"); $(this).next().setDisplay($(this).isVisible()); })

        pane.children().each(function () {
            if (!$(this).data("splitterType"))
                return true;
            $(this).css("overflow", "");
            if ($(this).data("splitterType") == "vertical") {
                if ($(this).data("splitterWidth") / 1 > 0)
                    $(this).css({ width: $(this).data("splitterWidth") });
                if ($(this).data("splitterSizing") == "fill")
                    $(this).css({ width: "" });
                if ($(this).data("splitterSizing") == "fill" || $(this).data("splitterSizing") == "fix")
                    $(this).css("overflow", (pane.data("splitterSizing") == "grow" ? "" : "auto"));
            }
            if ($(this).data("splitterType") == "horizontal") {
                if ($(this).data("splitterWidth") / 1 > 0)
                    $(this).css({ height: $(this).data("splitterWidth") });
                if ($(this).data("splitterSizing") == "fill" || $(this).data("splitterSizing") == "grow")
                    $(this).css({ height: "" });
                if ($(this).data("splitterSizing") == "fill" || $(this).data("splitterSizing") == "fix")
                    $(this).css("overflow", (pane.data("splitterSizing") == "grow" ? "" : "auto"));
            }
            if ($(this).data("splitterType") == "vertical" && $(this).next().next().data("splitterType") == "horizontal")
                $(this).next().setDisplay($(this).next().next().isVisible()).removeClass("VerticalResize").addClass("HorizontalResize _after");
            if ($(this).data("splitterSizing") == "fill")
                $(this).next().setDisplay($(this).next().next().isVisible()).addClass("_after");

        });

        pane.children(".ResizeHandle").each(function () {
            if ($(this).is(":last-child"))
                $(this).hide();
            var refElem = $(this).hasClass("_after") ? $(this).next() : $(this).prev();
            $(this).removeClass("noResize");
            if (refElem.data("splitterResize") != "1")
                $(this).addClass("noResize");

            $(this).on("click", "a", function () {
                var res = $(this).parent();
                var refElem = res.hasClass("_after") ? res.next() : res.prev();
                if (res.hasClass("HorizontalResize")) {
                    if (refElem.height() == 0) {
                        refElem.height(refElem.data("actSpHeight"));
                        refElem.css({ "overflow": refElem.data("actSpOvr"), "min-height": 50 });
                    }
                    else {
                        refElem.data("actSpHeight",refElem.height());
                        refElem.data("actSpOvr", refElem.css("overflow"));
                        refElem.height(0);
                        refElem.css({ "overflow": "hidden", "min-height": 0 });
                    }
                }
                else {
                    if (refElem.width() == 0) {
                        refElem.width(refElem.data("actSpHeight"));
                        refElem.css({ "overflow": refElem.data("actSpOvr"), "min-width": 50 });
                    }
                    else {
                        refElem.data("actSpHeight", refElem.width());
                        refElem.data("actSpOvr", refElem.css("overflow"));
                        refElem.width(0);
                        refElem.css({ "overflow": "hidden", "min-width": 0 });
                    }
                }
                res.closest(".ContentPane").SplitContainer("refresh");
                var fn = res.closest(".ContentPane").data("OnPaneResize");
                if (typeof fn == "function")
                    fn(res);
            })
            $(this).draggable({
                axis: $(this).hasClass("HorizontalResize") ? "y" : "x", start: function (e, ui) {
                    var refElem = ui.helper.hasClass("_after") ? ui.helper.next() : ui.helper.prev();;
                    if (refElem.data("splitterResize") != "1")
                        return false;
                },
                start: function () {
                    var layer = $("#splitResizeDragLayer");
                    if (layer.length == 0) {
                        layer = $("<div id='splitResizeDragLayer' style='position:fixed;top:0;left:0;right:0;bottom:0;background-color:transparent;z-index:10000000'></div>");
                        $(document.documentElement).append(layer);
                    }
                    layer.show();
                },
                stop: function (e, ui) {
                    $("#splitResizeDragLayer").hide();
                    var refElem = ui.helper.hasClass("_after") ? ui.helper.next() : ui.helper.prev();
                    if (ui.helper.hasClass("VerticalResize")) {
                        refElem.css({ "overflow": "auto", "width": "+=" + ((ui.position.left - ui.originalPosition.left) * (ui.helper.hasClass("_after") ? -1 : 1)) });
                        refElem.data("splitterWidth", refElem.width());
                    }
                    else if (ui.helper.hasClass("HorizontalResize")) {
                        refElem.css({ "overflow": "auto", "height": "+=" + ((ui.position.top - ui.originalPosition.top) * (ui.helper.hasClass("_after") ? -1 : 1)) });
                        refElem.data("splitterWidth", refElem.height());
                    }
                    refElem.data("splitterSizing", "fix");                    
                    ui.helper.css({ left: "", top: "" });
                    ui.helper.closest(".ContentPane").SplitContainer("refresh");
                    var fn = ui.helper.closest(".ContentPane").data("OnPaneResize");
                    if (typeof fn == "function")
                        fn(ui.helper);
                }
            });
        });
    }
    
    var xHt = 0;
    var remWd = 0;
    var remHt = 0;
    var hfillDiv=[];
    if (vp.length == 0) {
        hp.each(function () { if ($(this).isVisible()) remHt += $(this).outerHeight() + ($(this).next().isVisible() ? g : 0); });
        hfillDiv = hp.filter(function () { return $(this).data("splitterSizing") == "fill"; });
        if (hfillDiv.length >= 1 && hfillDiv.isVisible()) {
            remHt -= (hfillDiv.outerHeight()+g);
            hfillDiv.height(pane.innerHeight() - remHt - g);
        }
    }

    hp.each(function () { xHt += $(this).outerHeight() + ($(this).next().isVisible() ? g : 0) + ($(this).prev().hasClass("_after") && $(this).prev().isVisible() ? g : 0); });

    var setHt = false;
    if (hp.length == 0) {
        vp.each(function () { if ($(this).data("splitterResize") == "1") { setHt = true; return false;} })
    }
    if (setHt) {
        vp.height(pane.innerHeight() - xHt);
        vp.next(".VerticalResize").height(vp.height());
    }
    vp.each(function () { if ($(this).isVisible()) remWd += $(this).outerWidth() + ($(this).next().isVisible() ? g : 0); });
    var vfillDiv = vp.filter(function () { return $(this).data("splitterSizing") == "fill"; });
    if (vfillDiv.length >= 1 && vfillDiv.isVisible()) {
        remWd -= (vfillDiv.outerWidth()+g);
        vfillDiv.width(pane.innerWidth() - remWd - g);
    }

    pane.css("overflow", "");
    //if (vp.length == 0 && hp.length == 0)
    //    pane.css("overflow", "hidden");
    //if (vfillDiv.length >= 1)
    //    pane.css("overflow", "hidden");
    //if (hfillDiv.length >= 1)
    //    pane.css("overflow", "hidden");

    if (mode == "init") {
        $(window).on("resize", $.debounce(250, function () {
            pane.SplitContainer("refresh");
            var fn = pane.data("OnPaneResize");
            if (typeof fn == "function")
                fn(pane);
        }));
        if (opt && typeof opt.OnResize == "function")
            pane.data("OnPaneResize", opt.OnResize);
    }

    vp.each(function () { $(this).SplitContainer(opt); });
    hp.each(function () { $(this).SplitContainer(opt); });
    vp.each(function (i) { $(this).scrollTop(sctop[i]); });
}

$(function () {
    if ($.QS("transbg") == "1")
        $(document.documentElement).css("background", "transparent");
    if (typeof Sys !="undefined")
        Sys.WebForms.PageRequestManager.getInstance().add_pageLoaded(function () {
            $(".cmdBtn").each(function () { if ($(this).children().length == 0) $(this).html("<span><label></label></span>" + $(this).text()); });
        });
    else
        $(".cmdBtn").each(function () { if ($(this).children().length == 0) $(this).html("<span><label></label></span>" + $(this).text()); });


});


/*
 * JavaScript Templates
 * https://github.com/blueimp/JavaScript-Templates
   check tmpl.png for docs
 */
; (function ($) {
    'use strict'
    var tmpl = function (str, data, context) {
        var f = !/[^\w\-.:]/.test(str)
          ? (tmpl.cache[str] = tmpl.cache[str] || tmpl(tmpl.load(str)))
          : new Function( // eslint-disable-line no-new-func
            tmpl.arg + ',$c,tmpl',
            'var _e=tmpl.encode' +
                tmpl.helper +
                ",_s='" +
                str.replace(tmpl.regexp, tmpl.func) +
                "';return _s;"
          )
        return data
          ? f(data, context, tmpl)
          : function (data, context) {
              return f(data, context, tmpl)
          }
    }
    tmpl.cache = {}
    tmpl.load = function (id) {
        return document.getElementById(id).innerHTML
    }
    tmpl.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g
    tmpl.func = function (s, p1, p2, p3, p4, p5) {
        if (p1) {
            // whitespace, quote and backspace in HTML context
            return (
              {
                  '\n': '\\n',
                  '\r': '\\r',
                  '\t': '\\t',
                  ' ': ' '
              }[p1] || '\\' + p1
            )
        }
        if (p2) {
            // interpolation: {%=prop%}, or unescaped: {%#prop%}
            if (p2 === '=') {
                return "'+_e(" + p3 + ")+'"
            }
            return "'+(tmpl.default(" + p3 + "))+'"
        }
        if (p4) {
            // evaluation start tag: {%
            return "';"
        }
        if (p5) {
            // evaluation end tag: %}
            return "_s+='"
        }
    }
    tmpl.encReg = /[<>&"'\x00]/g // eslint-disable-line no-control-regex
    tmpl.encMap = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;'
    }
    tmpl.encode = function (s) {
        return (s == null ? '' : '' + s).replace(tmpl.encReg, function (c) {
            return tmpl.encMap[c] || ''
        })
    }
    tmpl.default = function (d) { return d==null ? "" : d; }
    tmpl.arg = '$d'
    tmpl.helper =
      ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);}" +
      ',include=function(s,d){_s+=tmpl(s,d);}'
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return tmpl
        })
    } else if (typeof module === 'object' && module.exports) {
        module.exports = tmpl
    } else {
        $.tmpl = tmpl
    }
})(this)



/*!
 * cleave.js - 1.5.3
 * https://github.com/nosir/cleave.js
 * Apache License Version 2.0
 *
 * Copyright (C) 2012-2019 Max Huang https://github.com/nosir/
 */
!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Cleave = t() : e.Cleave = t() }(this, function () { return function (e) { function t(i) { if (r[i]) return r[i].exports; var n = r[i] = { exports: {}, id: i, loaded: !1 }; return e[i].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports } var r = {}; return t.m = e, t.c = r, t.p = "", t(0) }([function (e, t, r) { (function (t) { "use strict"; var i = function (e, t) { var r = this, n = !1; if ("string" == typeof e ? (r.element = document.querySelector(e), n = document.querySelectorAll(e).length > 1) : "undefined" != typeof e.length && e.length > 0 ? (r.element = e[0], n = e.length > 1) : r.element = e, !r.element) throw new Error("[cleave.js] Please check the element"); if (n) try { console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.") } catch (a) { } t.initValue = r.element.value, r.properties = i.DefaultProperties.assign({}, t), r.init() }; i.prototype = { init: function () { var e = this, t = e.properties; return t.numeral || t.phone || t.creditCard || t.time || t.date || 0 !== t.blocksLength || t.prefix ? (t.maxLength = i.Util.getMaxLength(t.blocks), e.isAndroid = i.Util.isAndroid(), e.lastInputValue = "", e.onChangeListener = e.onChange.bind(e), e.onKeyDownListener = e.onKeyDown.bind(e), e.onFocusListener = e.onFocus.bind(e), e.onCutListener = e.onCut.bind(e), e.onCopyListener = e.onCopy.bind(e), e.element.addEventListener("input", e.onChangeListener), e.element.addEventListener("keydown", e.onKeyDownListener), e.element.addEventListener("focus", e.onFocusListener), e.element.addEventListener("cut", e.onCutListener), e.element.addEventListener("copy", e.onCopyListener), e.initPhoneFormatter(), e.initDateFormatter(), e.initTimeFormatter(), e.initNumeralFormatter(), void ((t.initValue || t.prefix && !t.noImmediatePrefix) && e.onInput(t.initValue))) : void e.onInput(t.initValue) }, initNumeralFormatter: function () { var e = this, t = e.properties; t.numeral && (t.numeralFormatter = new i.NumeralFormatter(t.numeralDecimalMark, t.numeralIntegerScale, t.numeralDecimalScale, t.numeralThousandsGroupStyle, t.numeralPositiveOnly, t.stripLeadingZeroes, t.prefix, t.signBeforePrefix, t.delimiter)) }, initTimeFormatter: function () { var e = this, t = e.properties; t.time && (t.timeFormatter = new i.TimeFormatter(t.timePattern, t.timeFormat), t.blocks = t.timeFormatter.getBlocks(), t.blocksLength = t.blocks.length, t.maxLength = i.Util.getMaxLength(t.blocks)) }, initDateFormatter: function () { var e = this, t = e.properties; t.date && (t.dateFormatter = new i.DateFormatter(t.datePattern, t.dateMin, t.dateMax), t.blocks = t.dateFormatter.getBlocks(), t.blocksLength = t.blocks.length, t.maxLength = i.Util.getMaxLength(t.blocks)) }, initPhoneFormatter: function () { var e = this, t = e.properties; if (t.phone) try { t.phoneFormatter = new i.PhoneFormatter(new t.root.Cleave.AsYouTypeFormatter(t.phoneRegionCode), t.delimiter) } catch (r) { throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib") } }, onKeyDown: function (e) { var t = this, r = t.properties, n = e.which || e.keyCode, a = i.Util, o = t.element.value; t.hasBackspaceSupport = t.hasBackspaceSupport || 8 === n, !t.hasBackspaceSupport && a.isAndroidBackspaceKeydown(t.lastInputValue, o) && (n = 8), t.lastInputValue = o; var l = a.getPostDelimiter(o, r.delimiter, r.delimiters); 8 === n && l ? r.postDelimiterBackspace = l : r.postDelimiterBackspace = !1 }, onChange: function () { this.onInput(this.element.value) }, onFocus: function () { var e = this, t = e.properties; i.Util.fixPrefixCursor(e.element, t.prefix, t.delimiter, t.delimiters) }, onCut: function (e) { i.Util.checkFullSelection(this.element.value) && (this.copyClipboardData(e), this.onInput("")) }, onCopy: function (e) { i.Util.checkFullSelection(this.element.value) && this.copyClipboardData(e) }, copyClipboardData: function (e) { var t = this, r = t.properties, n = i.Util, a = t.element.value, o = ""; o = r.copyDelimiter ? a : n.stripDelimiters(a, r.delimiter, r.delimiters); try { e.clipboardData ? e.clipboardData.setData("Text", o) : window.clipboardData.setData("Text", o), e.preventDefault() } catch (l) { } }, onInput: function (e) { var t = this, r = t.properties, n = i.Util, a = n.getPostDelimiter(e, r.delimiter, r.delimiters); return r.numeral || !r.postDelimiterBackspace || a || (e = n.headStr(e, e.length - r.postDelimiterBackspace.length)), r.phone ? (!r.prefix || r.noImmediatePrefix && !e.length ? r.result = r.phoneFormatter.format(e) : r.result = r.prefix + r.phoneFormatter.format(e).slice(r.prefix.length), void t.updateValueState()) : r.numeral ? (r.prefix && r.noImmediatePrefix && 0 === e.length ? r.result = "" : r.result = r.numeralFormatter.format(e), void t.updateValueState()) : (r.date && (e = r.dateFormatter.getValidatedDate(e)), r.time && (e = r.timeFormatter.getValidatedTime(e)), e = n.stripDelimiters(e, r.delimiter, r.delimiters), e = n.getPrefixStrippedValue(e, r.prefix, r.prefixLength, r.result, r.delimiter, r.delimiters, r.noImmediatePrefix), e = r.numericOnly ? n.strip(e, /[^\d]/g) : e, e = r.uppercase ? e.toUpperCase() : e, e = r.lowercase ? e.toLowerCase() : e, !r.prefix || r.noImmediatePrefix && !e.length || (e = r.prefix + e, 0 !== r.blocksLength) ? (r.creditCard && t.updateCreditCardPropsByValue(e), e = n.headStr(e, r.maxLength), r.result = n.getFormattedValue(e, r.blocks, r.blocksLength, r.delimiter, r.delimiters, r.delimiterLazyShow), void t.updateValueState()) : (r.result = e, void t.updateValueState())) }, updateCreditCardPropsByValue: function (e) { var t, r = this, n = r.properties, a = i.Util; a.headStr(n.result, 4) !== a.headStr(e, 4) && (t = i.CreditCardDetector.getInfo(e, n.creditCardStrictMode), n.blocks = t.blocks, n.blocksLength = n.blocks.length, n.maxLength = a.getMaxLength(n.blocks), n.creditCardType !== t.type && (n.creditCardType = t.type, n.onCreditCardTypeChanged.call(r, n.creditCardType))) }, updateValueState: function () { var e = this, t = i.Util, r = e.properties; if (e.element) { var n = e.element.selectionEnd, a = e.element.value, o = r.result; if (n = t.getNextCursorPosition(n, a, o, r.delimiter, r.delimiters), e.isAndroid) return void window.setTimeout(function () { e.element.value = o, t.setSelection(e.element, n, r.document, !1), e.callOnValueChanged() }, 1); e.element.value = o, t.setSelection(e.element, n, r.document, !1), e.callOnValueChanged() } }, callOnValueChanged: function () { var e = this, t = e.properties; t.onValueChanged.call(e, { target: { value: t.result, rawValue: e.getRawValue() } }) }, setPhoneRegionCode: function (e) { var t = this, r = t.properties; r.phoneRegionCode = e, t.initPhoneFormatter(), t.onChange() }, setRawValue: function (e) { var t = this, r = t.properties; e = void 0 !== e && null !== e ? e.toString() : "", r.numeral && (e = e.replace(".", r.numeralDecimalMark)), r.postDelimiterBackspace = !1, t.element.value = e, t.onInput(e) }, getRawValue: function () { var e = this, t = e.properties, r = i.Util, n = e.element.value; return t.rawValueTrimPrefix && (n = r.getPrefixStrippedValue(n, t.prefix, t.prefixLength, t.result, t.delimiter, t.delimiters)), n = t.numeral ? t.numeralFormatter.getRawValue(n) : r.stripDelimiters(n, t.delimiter, t.delimiters) }, getISOFormatDate: function () { var e = this, t = e.properties; return t.date ? t.dateFormatter.getISOFormatDate() : "" }, getISOFormatTime: function () { var e = this, t = e.properties; return t.time ? t.timeFormatter.getISOFormatTime() : "" }, getFormattedValue: function () { return this.element.value }, destroy: function () { var e = this; e.element.removeEventListener("input", e.onChangeListener), e.element.removeEventListener("keydown", e.onKeyDownListener), e.element.removeEventListener("focus", e.onFocusListener), e.element.removeEventListener("cut", e.onCutListener), e.element.removeEventListener("copy", e.onCopyListener) }, toString: function () { return "[Cleave Object]" } }, i.NumeralFormatter = r(1), i.DateFormatter = r(2), i.TimeFormatter = r(3), i.PhoneFormatter = r(4), i.CreditCardDetector = r(5), i.Util = r(6), i.DefaultProperties = r(7), ("object" == typeof t && t ? t : window).Cleave = i, e.exports = i }).call(t, function () { return this }()) }, function (e, t) { "use strict"; var r = function (e, t, i, n, a, o, l, s, c) { var u = this; u.numeralDecimalMark = e || ".", u.numeralIntegerScale = t > 0 ? t : 0, u.numeralDecimalScale = i >= 0 ? i : 2, u.numeralThousandsGroupStyle = n || r.groupStyle.thousand, u.numeralPositiveOnly = !!a, u.stripLeadingZeroes = o !== !1, u.prefix = l || "" === l ? l : "", u.signBeforePrefix = !!s, u.delimiter = c || "" === c ? c : ",", u.delimiterRE = c ? new RegExp("\\" + c, "g") : "" }; r.groupStyle = { thousand: "thousand", lakh: "lakh", wan: "wan", none: "none" }, r.prototype = { getRawValue: function (e) { return e.replace(this.delimiterRE, "").replace(this.numeralDecimalMark, ".") }, format: function (e) { var t, i, n, a, o = this, l = ""; switch (e = e.replace(/[A-Za-z]/g, "").replace(o.numeralDecimalMark, "M").replace(/[^\dM-]/g, "").replace(/^\-/, "N").replace(/\-/g, "").replace("N", o.numeralPositiveOnly ? "" : "-").replace("M", o.numeralDecimalMark), o.stripLeadingZeroes && (e = e.replace(/^(-)?0+(?=\d)/, "$1")), i = "-" === e.slice(0, 1) ? "-" : "", n = "undefined" != typeof o.prefix ? o.signBeforePrefix ? i + o.prefix : o.prefix + i : i, a = e, e.indexOf(o.numeralDecimalMark) >= 0 && (t = e.split(o.numeralDecimalMark), a = t[0], l = o.numeralDecimalMark + t[1].slice(0, o.numeralDecimalScale)), "-" === i && (a = a.slice(1)), o.numeralIntegerScale > 0 && (a = a.slice(0, o.numeralIntegerScale)), o.numeralThousandsGroupStyle) { case r.groupStyle.lakh: a = a.replace(/(\d)(?=(\d\d)+\d$)/g, "$1" + o.delimiter); break; case r.groupStyle.wan: a = a.replace(/(\d)(?=(\d{4})+$)/g, "$1" + o.delimiter); break; case r.groupStyle.thousand: a = a.replace(/(\d)(?=(\d{3})+$)/g, "$1" + o.delimiter) } return n + a.toString() + (o.numeralDecimalScale > 0 ? l.toString() : "") } }, e.exports = r }, function (e, t) { "use strict"; var r = function (e, t, r) { var i = this; i.date = [], i.blocks = [], i.datePattern = e, i.dateMin = t.split("-").reverse().map(function (e) { return parseInt(e, 10) }), 2 === i.dateMin.length && i.dateMin.unshift(0), i.dateMax = r.split("-").reverse().map(function (e) { return parseInt(e, 10) }), 2 === i.dateMax.length && i.dateMax.unshift(0), i.initBlocks() }; r.prototype = { initBlocks: function () { var e = this; e.datePattern.forEach(function (t) { "Y" === t ? e.blocks.push(4) : e.blocks.push(2) }) }, getISOFormatDate: function () { var e = this, t = e.date; return t[2] ? t[2] + "-" + e.addLeadingZero(t[1]) + "-" + e.addLeadingZero(t[0]) : "" }, getBlocks: function () { return this.blocks }, getValidatedDate: function (e) { var t = this, r = ""; return e = e.replace(/[^\d]/g, ""), t.blocks.forEach(function (i, n) { if (e.length > 0) { var a = e.slice(0, i), o = a.slice(0, 1), l = e.slice(i); switch (t.datePattern[n]) { case "d": "00" === a ? a = "01" : parseInt(o, 10) > 3 ? a = "0" + o : parseInt(a, 10) > 31 && (a = "31"); break; case "m": "00" === a ? a = "01" : parseInt(o, 10) > 1 ? a = "0" + o : parseInt(a, 10) > 12 && (a = "12") } r += a, e = l } }), this.getFixedDateString(r) }, getFixedDateString: function (e) { var t, r, i, n = this, a = n.datePattern, o = [], l = 0, s = 0, c = 0, u = 0, d = 0, m = 0, p = !1; 4 === e.length && "y" !== a[0].toLowerCase() && "y" !== a[1].toLowerCase() && (u = "d" === a[0] ? 0 : 2, d = 2 - u, t = parseInt(e.slice(u, u + 2), 10), r = parseInt(e.slice(d, d + 2), 10), o = this.getFixedDate(t, r, 0)), 8 === e.length && (a.forEach(function (e, t) { switch (e) { case "d": l = t; break; case "m": s = t; break; default: c = t } }), m = 2 * c, u = l <= c ? 2 * l : 2 * l + 2, d = s <= c ? 2 * s : 2 * s + 2, t = parseInt(e.slice(u, u + 2), 10), r = parseInt(e.slice(d, d + 2), 10), i = parseInt(e.slice(m, m + 4), 10), p = 4 === e.slice(m, m + 4).length, o = this.getFixedDate(t, r, i)), 4 !== e.length || "y" !== a[0] && "y" !== a[1] || (d = "m" === a[0] ? 0 : 2, m = 2 - d, r = parseInt(e.slice(d, d + 2), 10), i = parseInt(e.slice(m, m + 2), 10), p = 2 === e.slice(m, m + 2).length, o = [0, r, i]), 6 !== e.length || "Y" !== a[0] && "Y" !== a[1] || (d = "m" === a[0] ? 0 : 4, m = 2 - .5 * d, r = parseInt(e.slice(d, d + 2), 10), i = parseInt(e.slice(m, m + 4), 10), p = 4 === e.slice(m, m + 4).length, o = [0, r, i]), o = n.getRangeFixedDate(o), n.date = o; var h = 0 === o.length ? e : a.reduce(function (e, t) { switch (t) { case "d": return e + (0 === o[0] ? "" : n.addLeadingZero(o[0])); case "m": return e + (0 === o[1] ? "" : n.addLeadingZero(o[1])); case "y": return e + (p ? n.addLeadingZeroForYear(o[2], !1) : ""); case "Y": return e + (p ? n.addLeadingZeroForYear(o[2], !0) : "") } }, ""); return h }, getRangeFixedDate: function (e) { var t = this, r = t.datePattern, i = t.dateMin || [], n = t.dateMax || []; return !e.length || i.length < 3 && n.length < 3 ? e : r.find(function (e) { return "y" === e.toLowerCase() }) && 0 === e[2] ? e : n.length && (n[2] < e[2] || n[2] === e[2] && (n[1] < e[1] || n[1] === e[1] && n[0] < e[0])) ? n : i.length && (i[2] > e[2] || i[2] === e[2] && (i[1] > e[1] || i[1] === e[1] && i[0] > e[0])) ? i : e }, getFixedDate: function (e, t, r) { return e = Math.min(e, 31), t = Math.min(t, 12), r = parseInt(r || 0, 10), (t < 7 && t % 2 === 0 || t > 8 && t % 2 === 1) && (e = Math.min(e, 2 === t ? this.isLeapYear(r) ? 29 : 28 : 30)), [e, t, r] }, isLeapYear: function (e) { return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 }, addLeadingZero: function (e) { return (e < 10 ? "0" : "") + e }, addLeadingZeroForYear: function (e, t) { return t ? (e < 10 ? "000" : e < 100 ? "00" : e < 1e3 ? "0" : "") + e : (e < 10 ? "0" : "") + e } }, e.exports = r }, function (e, t) { "use strict"; var r = function (e, t) { var r = this; r.time = [], r.blocks = [], r.timePattern = e, r.timeFormat = t, r.initBlocks() }; r.prototype = { initBlocks: function () { var e = this; e.timePattern.forEach(function () { e.blocks.push(2) }) }, getISOFormatTime: function () { var e = this, t = e.time; return t[2] ? e.addLeadingZero(t[0]) + ":" + e.addLeadingZero(t[1]) + ":" + e.addLeadingZero(t[2]) : "" }, getBlocks: function () { return this.blocks }, getTimeFormatOptions: function () { var e = this; return "12" === String(e.timeFormat) ? { maxHourFirstDigit: 1, maxHours: 12, maxMinutesFirstDigit: 5, maxMinutes: 60 } : { maxHourFirstDigit: 2, maxHours: 23, maxMinutesFirstDigit: 5, maxMinutes: 60 } }, getValidatedTime: function (e) { var t = this, r = ""; e = e.replace(/[^\d]/g, ""); var i = t.getTimeFormatOptions(); return t.blocks.forEach(function (n, a) { if (e.length > 0) { var o = e.slice(0, n), l = o.slice(0, 1), s = e.slice(n); switch (t.timePattern[a]) { case "h": parseInt(l, 10) > i.maxHourFirstDigit ? o = "0" + l : parseInt(o, 10) > i.maxHours && (o = i.maxHours + ""); break; case "m": case "s": parseInt(l, 10) > i.maxMinutesFirstDigit ? o = "0" + l : parseInt(o, 10) > i.maxMinutes && (o = i.maxMinutes + "") } r += o, e = s } }), this.getFixedTimeString(r) }, getFixedTimeString: function (e) { var t, r, i, n = this, a = n.timePattern, o = [], l = 0, s = 0, c = 0, u = 0, d = 0, m = 0; return 6 === e.length && (a.forEach(function (e, t) { switch (e) { case "s": l = 2 * t; break; case "m": s = 2 * t; break; case "h": c = 2 * t } }), m = c, d = s, u = l, t = parseInt(e.slice(u, u + 2), 10), r = parseInt(e.slice(d, d + 2), 10), i = parseInt(e.slice(m, m + 2), 10), o = this.getFixedTime(i, r, t)), 4 === e.length && n.timePattern.indexOf("s") < 0 && (a.forEach(function (e, t) { switch (e) { case "m": s = 2 * t; break; case "h": c = 2 * t } }), m = c, d = s, t = 0, r = parseInt(e.slice(d, d + 2), 10), i = parseInt(e.slice(m, m + 2), 10), o = this.getFixedTime(i, r, t)), n.time = o, 0 === o.length ? e : a.reduce(function (e, t) { switch (t) { case "s": return e + n.addLeadingZero(o[2]); case "m": return e + n.addLeadingZero(o[1]); case "h": return e + n.addLeadingZero(o[0]) } }, "") }, getFixedTime: function (e, t, r) { return r = Math.min(parseInt(r || 0, 10), 60), t = Math.min(t, 60), e = Math.min(e, 60), [e, t, r] }, addLeadingZero: function (e) { return (e < 10 ? "0" : "") + e } }, e.exports = r }, function (e, t) { "use strict"; var r = function (e, t) { var r = this; r.delimiter = t || "" === t ? t : " ", r.delimiterRE = t ? new RegExp("\\" + t, "g") : "", r.formatter = e }; r.prototype = { setFormatter: function (e) { this.formatter = e }, format: function (e) { var t = this; t.formatter.clear(), e = e.replace(/[^\d+]/g, ""), e = e.replace(/^\+/, "B").replace(/\+/g, "").replace("B", "+"), e = e.replace(t.delimiterRE, ""); for (var r, i = "", n = !1, a = 0, o = e.length; a < o; a++) r = t.formatter.inputDigit(e.charAt(a)), /[\s()-]/g.test(r) ? (i = r, n = !0) : n || (i = r); return i = i.replace(/[()]/g, ""), i = i.replace(/[\s-]/g, t.delimiter) } }, e.exports = r }, function (e, t) { "use strict"; var r = { blocks: { uatp: [4, 5, 6], amex: [4, 6, 5], diners: [4, 6, 4], discover: [4, 4, 4, 4], mastercard: [4, 4, 4, 4], dankort: [4, 4, 4, 4], instapayment: [4, 4, 4, 4], jcb15: [4, 6, 5], jcb: [4, 4, 4, 4], maestro: [4, 4, 4, 4], visa: [4, 4, 4, 4], mir: [4, 4, 4, 4], unionPay: [4, 4, 4, 4], general: [4, 4, 4, 4] }, re: { uatp: /^(?!1800)1\d{0,14}/, amex: /^3[47]\d{0,13}/, discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/, diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/, mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/, dankort: /^(5019|4175|4571)\d{0,12}/, instapayment: /^63[7-9]\d{0,13}/, jcb15: /^(?:2131|1800)\d{0,11}/, jcb: /^(?:35\d{0,2})\d{0,12}/, maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/, mir: /^220[0-4]\d{0,12}/, visa: /^4\d{0,15}/, unionPay: /^62\d{0,14}/ }, getStrictBlocks: function (e) { var t = e.reduce(function (e, t) { return e + t }, 0); return e.concat(19 - t) }, getInfo: function (e, t) { var i = r.blocks, n = r.re; t = !!t; for (var a in n) if (n[a].test(e)) { var o = i[a]; return { type: a, blocks: t ? this.getStrictBlocks(o) : o } } return { type: "unknown", blocks: t ? this.getStrictBlocks(i.general) : i.general } } }; e.exports = r }, function (e, t) { "use strict"; var r = { noop: function () { }, strip: function (e, t) { return e.replace(t, "") }, getPostDelimiter: function (e, t, r) { if (0 === r.length) return e.slice(-t.length) === t ? t : ""; var i = ""; return r.forEach(function (t) { e.slice(-t.length) === t && (i = t) }), i }, getDelimiterREByDelimiter: function (e) { return new RegExp(e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g") }, getNextCursorPosition: function (e, t, r, i, n) { return t.length === e ? r.length : e + this.getPositionOffset(e, t, r, i, n) }, getPositionOffset: function (e, t, r, i, n) { var a, o, l; return a = this.stripDelimiters(t.slice(0, e), i, n), o = this.stripDelimiters(r.slice(0, e), i, n), l = a.length - o.length, 0 !== l ? l / Math.abs(l) : 0 }, stripDelimiters: function (e, t, r) { var i = this; if (0 === r.length) { var n = t ? i.getDelimiterREByDelimiter(t) : ""; return e.replace(n, "") } return r.forEach(function (t) { t.split("").forEach(function (t) { e = e.replace(i.getDelimiterREByDelimiter(t), "") }) }), e }, headStr: function (e, t) { return e.slice(0, t) }, getMaxLength: function (e) { return e.reduce(function (e, t) { return e + t }, 0) }, getPrefixStrippedValue: function (e, t, r, i, n, a, o) { if (0 === r) return e; if (i.slice(0, r) !== t) return o && !i && e ? e : ""; var l = this.stripDelimiters(i, n, a); return e.slice(0, r) !== t ? l.slice(r) : e.slice(r) }, getFirstDiffIndex: function (e, t) { for (var r = 0; e.charAt(r) === t.charAt(r) ;) if ("" === e.charAt(r++)) return -1; return r }, getFormattedValue: function (e, t, r, i, n, a) { var o, l = "", s = n.length > 0; return 0 === r ? e : (t.forEach(function (t, c) { if (e.length > 0) { var u = e.slice(0, t), d = e.slice(t); o = s ? n[a ? c - 1 : c] || o : i, a ? (c > 0 && (l += o), l += u) : (l += u, u.length === t && c < r - 1 && (l += o)), e = d } }), l) }, fixPrefixCursor: function (e, t, r, i) { if (e) { var n = e.value, a = r || i[0] || " "; if (e.setSelectionRange && t && !(t.length + a.length < n.length)) { var o = 2 * n.length; setTimeout(function () { e.setSelectionRange(o, o) }, 1) } } }, checkFullSelection: function (e) { try { var t = window.getSelection() || document.getSelection() || {}; return t.toString().length === e.length } catch (r) { } return !1 }, setSelection: function (e, t, r) { if (e === this.getActiveElement(r) && !(e && e.value.length <= t)) if (e.createTextRange) { var i = e.createTextRange(); i.move("character", t), i.select() } else try { e.setSelectionRange(t, t) } catch (n) { console.warn("The input element type does not support selection") } }, getActiveElement: function (e) { var t = e.activeElement; return t && t.shadowRoot ? this.getActiveElement(t.shadowRoot) : t }, isAndroid: function () { return navigator && /android/i.test(navigator.userAgent) }, isAndroidBackspaceKeydown: function (e, t) { return !!(this.isAndroid() && e && t) && t === e.slice(0, -1) } }; e.exports = r }, function (e, t) { (function (t) { "use strict"; var r = { assign: function (e, r) { return e = e || {}, r = r || {}, e.creditCard = !!r.creditCard, e.creditCardStrictMode = !!r.creditCardStrictMode, e.creditCardType = "", e.onCreditCardTypeChanged = r.onCreditCardTypeChanged || function () { }, e.phone = !!r.phone, e.phoneRegionCode = r.phoneRegionCode || "AU", e.phoneFormatter = {}, e.time = !!r.time, e.timePattern = r.timePattern || ["h", "m", "s"], e.timeFormat = r.timeFormat || "24", e.timeFormatter = {}, e.date = !!r.date, e.datePattern = r.datePattern || ["d", "m", "Y"], e.dateMin = r.dateMin || "", e.dateMax = r.dateMax || "", e.dateFormatter = {}, e.numeral = !!r.numeral, e.numeralIntegerScale = r.numeralIntegerScale > 0 ? r.numeralIntegerScale : 0, e.numeralDecimalScale = r.numeralDecimalScale >= 0 ? r.numeralDecimalScale : 2, e.numeralDecimalMark = r.numeralDecimalMark || ".", e.numeralThousandsGroupStyle = r.numeralThousandsGroupStyle || "thousand", e.numeralPositiveOnly = !!r.numeralPositiveOnly, e.stripLeadingZeroes = r.stripLeadingZeroes !== !1, e.signBeforePrefix = !!r.signBeforePrefix, e.numericOnly = e.creditCard || e.date || !!r.numericOnly, e.uppercase = !!r.uppercase, e.lowercase = !!r.lowercase, e.prefix = e.creditCard || e.date ? "" : r.prefix || "", e.noImmediatePrefix = !!r.noImmediatePrefix, e.prefixLength = e.prefix.length, e.rawValueTrimPrefix = !!r.rawValueTrimPrefix, e.copyDelimiter = !!r.copyDelimiter, e.initValue = void 0 !== r.initValue && null !== r.initValue ? r.initValue.toString() : "", e.delimiter = r.delimiter || "" === r.delimiter ? r.delimiter : r.date ? "/" : r.time ? ":" : r.numeral ? "," : (r.phone, " "), e.delimiterLength = e.delimiter.length, e.delimiterLazyShow = !!r.delimiterLazyShow, e.delimiters = r.delimiters || [], e.blocks = r.blocks || [], e.blocksLength = e.blocks.length, e.root = "object" == typeof t && t ? t : window, e.document = r.document || e.root.document, e.maxLength = 0, e.backspace = !1, e.result = "", e.onValueChanged = r.onValueChanged || function () { }, e } }; e.exports = r }).call(t, function () { return this }()) }]) });