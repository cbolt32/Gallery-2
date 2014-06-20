/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
(function (window, undefined) {
    function isArraylike(e) {
        var t = e.length, n = jQuery.type(e);
        return jQuery.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }

    function createOptions(e) {
        var t = optionsCache[e] = {};
        jQuery.each(e.match(core_rnotwhite) || [], function (e, n) {
            t[n] = !0
        });
        return t
    }

    function Data() {
        Object.defineProperty(this.cache = {}, 0, {get: function () {
            return{}
        }});
        this.expando = jQuery.expando + Math.random()
    }

    function dataAttr(e, t, n) {
        var r;
        if (n === undefined && e.nodeType === 1) {
            r = "data-" + t.replace(rmultiDash, "-$1").toLowerCase();
            n = e.getAttribute(r);
            if (typeof n == "string") {
                try {
                    n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : rbrace.test(n) ? JSON.parse(n) : n
                } catch (i) {
                }
                data_user.set(e, t, n)
            } else n = undefined
        }
        return n
    }

    function returnTrue() {
        return!0
    }

    function returnFalse() {
        return!1
    }

    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (e) {
        }
    }

    function sibling(e, t) {
        while ((e = e[t]) && e.nodeType !== 1);
        return e
    }

    function winnow(e, t, n) {
        if (jQuery.isFunction(t))return jQuery.grep(e, function (e, r) {
            return!!t.call(e, r, e) !== n
        });
        if (t.nodeType)return jQuery.grep(e, function (e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (isSimple.test(t))return jQuery.filter(t, e, n);
            t = jQuery.filter(t, e)
        }
        return jQuery.grep(e, function (e) {
            return core_indexOf.call(t, e) >= 0 !== n
        })
    }

    function manipulationTarget(e, t) {
        return jQuery.nodeName(e, "table") && jQuery.nodeName(t.nodeType === 1 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function disableScript(e) {
        e.type = (e.getAttribute("type") !== null) + "/" + e.type;
        return e
    }

    function restoreScript(e) {
        var t = rscriptTypeMasked.exec(e.type);
        t ? e.type = t[1] : e.removeAttribute("type");
        return e
    }

    function setGlobalEval(e, t) {
        var n = e.length, r = 0;
        for (; r < n; r++)data_priv.set(e[r], "globalEval", !t || data_priv.get(t[r], "globalEval"))
    }

    function cloneCopyEvent(e, t) {
        var n, r, i, s, o, u, a, f;
        if (t.nodeType !== 1)return;
        if (data_priv.hasData(e)) {
            s = data_priv.access(e);
            o = data_priv.set(t, s);
            f = s.events;
            if (f) {
                delete o.handle;
                o.events = {};
                for (i in f)for (n = 0, r = f[i].length; n < r; n++)jQuery.event.add(t, i, f[i][n])
            }
        }
        if (data_user.hasData(e)) {
            u = data_user.access(e);
            a = jQuery.extend({}, u);
            data_user.set(t, a)
        }
    }

    function getAll(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && jQuery.nodeName(e, t) ? jQuery.merge([e], n) : n
    }

    function fixInput(e, t) {
        var n = t.nodeName.toLowerCase();
        if (n === "input" && manipulation_rcheckableType.test(e.type))t.checked = e.checked; else if (n === "input" || n === "textarea")t.defaultValue = e.defaultValue
    }

    function vendorPropName(e, t) {
        if (t in e)return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = cssPrefixes.length;
        while (i--) {
            t = cssPrefixes[i] + n;
            if (t in e)return t
        }
        return r
    }

    function isHidden(e, t) {
        e = t || e;
        return jQuery.css(e, "display") === "none" || !jQuery.contains(e.ownerDocument, e)
    }

    function getStyles(e) {
        return window.getComputedStyle(e, null)
    }

    function showHide(e, t) {
        var n, r, i, s = [], o = 0, u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style)continue;
            s[o] = data_priv.get(r, "olddisplay");
            n = r.style.display;
            if (t) {
                !s[o] && n === "none" && (r.style.display = "");
                r.style.display === "" && isHidden(r) && (s[o] = data_priv.access(r, "olddisplay", css_defaultDisplay(r.nodeName)))
            } else if (!s[o]) {
                i = isHidden(r);
                (n && n !== "none" || !i) && data_priv.set(r, "olddisplay", i ? n : jQuery.css(r, "display"))
            }
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style)continue;
            if (!t || r.style.display === "none" || r.style.display === "")r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function setPositiveNumber(e, t, n) {
        var r = rnumsplit.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function augmentWidthOrHeight(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0;
        for (; s < 4; s += 2) {
            n === "margin" && (o += jQuery.css(e, n + cssExpand[s], !0, i));
            if (r) {
                n === "content" && (o -= jQuery.css(e, "padding" + cssExpand[s], !0, i));
                n !== "margin" && (o -= jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i))
            } else {
                o += jQuery.css(e, "padding" + cssExpand[s], !0, i);
                n !== "padding" && (o += jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i))
            }
        }
        return o
    }

    function getWidthOrHeight(e, t, n) {
        var r = !0, i = t === "width" ? e.offsetWidth : e.offsetHeight, s = getStyles(e), o = jQuery.support.boxSizing && jQuery.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = curCSS(e, t, s);
            if (i < 0 || i == null)i = e.style[t];
            if (rnumnonpx.test(i))return i;
            r = o && (jQuery.support.boxSizingReliable || i === e.style[t]);
            i = parseFloat(i) || 0
        }
        return i + augmentWidthOrHeight(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function css_defaultDisplay(e) {
        var t = document, n = elemdisplay[e];
        if (!n) {
            n = actualDisplay(e, t);
            if (n === "none" || !n) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement);
                t = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                t.write("<!doctype html><html><body>");
                t.close();
                n = actualDisplay(e, t);
                iframe.detach()
            }
            elemdisplay[e] = n
        }
        return n
    }

    function actualDisplay(e, t) {
        var n = jQuery(t.createElement(e)).appendTo(t.body), r = jQuery.css(n[0], "display");
        n.remove();
        return r
    }

    function buildParams(e, t, n, r) {
        var i;
        if (jQuery.isArray(t))jQuery.each(t, function (t, i) {
            n || rbracket.test(e) ? r(e, i) : buildParams(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        }); else if (!n && jQuery.type(t) === "object")for (i in t)buildParams(e + "[" + i + "]", t[i], n, r); else r(e, t)
    }

    function addToPrefiltersOrTransports(e) {
        return function (t, n) {
            if (typeof t != "string") {
                n = t;
                t = "*"
            }
            var r, i = 0, s = t.toLowerCase().match(core_rnotwhite) || [];
            if (jQuery.isFunction(n))while (r = s[i++])if (r[0] === "+") {
                r = r.slice(1) || "*";
                (e[r] = e[r] || []).unshift(n)
            } else(e[r] = e[r] || []).push(n)
        }
    }

    function inspectPrefiltersOrTransports(e, t, n, r) {
        function i(u) {
            var a;
            s[u] = !0;
            jQuery.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !o && !s[f]) {
                    t.dataTypes.unshift(f);
                    i(f);
                    return!1
                }
                if (o)return!(a = f)
            });
            return a
        }

        var s = {}, o = e === transports;
        return i(t.dataTypes[0]) || !s["*"] && i("*")
    }

    function ajaxExtend(e, t) {
        var n, r, i = jQuery.ajaxSettings.flatOptions || {};
        for (n in t)t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        r && jQuery.extend(!0, e, r);
        return e
    }

    function ajaxHandleResponses(e, t, n) {
        var r, i, s, o, u = e.contents, a = e.dataTypes;
        while (a[0] === "*") {
            a.shift();
            r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"))
        }
        if (r)for (i in u)if (u[i] && u[i].test(r)) {
            a.unshift(i);
            break
        }
        if (a[0]in n)s = a[0]; else {
            for (i in n) {
                if (!a[0] || e.converters[i + " " + a[0]]) {
                    s = i;
                    break
                }
                o || (o = i)
            }
            s = s || o
        }
        if (s) {
            s !== a[0] && a.unshift(s);
            return n[s]
        }
    }

    function ajaxConvert(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1])for (o in e.converters)f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t);
            !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType));
            a = s;
            s = l.shift();
            if (s)if (s === "*")s = a; else if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o)for (i in f) {
                    u = i.split(" ");
                    if (u[1] === s) {
                        o = f[a + " " + u[0]] || f["* " + u[0]];
                        if (o) {
                            if (o === !0)o = f[i]; else if (f[i] !== !0) {
                                s = u[0];
                                l.unshift(u[1])
                            }
                            break
                        }
                    }
                }
                if (o !== !0)if (o && e["throws"])t = o(t); else try {
                    t = o(t)
                } catch (c) {
                    return{state: "parsererror", error: o ? c : "No conversion from " + a + " to " + s}
                }
            }
        }
        return{state: "success", data: t}
    }

    function createFxNow() {
        setTimeout(function () {
            fxNow = undefined
        });
        return fxNow = jQuery.now()
    }

    function createTween(e, t, n) {
        var r, i = (tweeners[t] || []).concat(tweeners["*"]), s = 0, o = i.length;
        for (; s < o; s++)if (r = i[s].call(n, t, e))return r
    }

    function Animation(e, t, n) {
        var r, i, s = 0, o = animationPrefilters.length, u = jQuery.Deferred().always(function () {
            delete a.elem
        }), a = function () {
            if (i)return!1;
            var t = fxNow || createFxNow(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
            for (; o < a; o++)f.tweens[o].run(s);
            u.notifyWith(e, [f, s, n]);
            if (s < 1 && a)return n;
            u.resolveWith(e, [f]);
            return!1
        }, f = u.promise({elem: e, props: jQuery.extend({}, t), opts: jQuery.extend(!0, {specialEasing: {}}, n), originalProperties: t, originalOptions: n, startTime: fxNow || createFxNow(), duration: n.duration, tweens: [], createTween: function (t, n) {
            var r = jQuery.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
            f.tweens.push(r);
            return r
        }, stop: function (t) {
            var n = 0, r = t ? f.tweens.length : 0;
            if (i)return this;
            i = !0;
            for (; n < r; n++)f.tweens[n].run(1);
            t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]);
            return this
        }}), l = f.props;
        propFilter(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = animationPrefilters[s].call(f, e, l, f.opts);
            if (r)return r
        }
        jQuery.map(l, createTween, f);
        jQuery.isFunction(f.opts.start) && f.opts.start.call(e, f);
        jQuery.fx.timer(jQuery.extend(a, {elem: e, anim: f, queue: f.opts.queue}));
        return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function propFilter(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = jQuery.camelCase(n);
            i = t[r];
            s = e[n];
            if (jQuery.isArray(s)) {
                i = s[1];
                s = e[n] = s[0]
            }
            if (n !== r) {
                e[r] = s;
                delete e[n]
            }
            o = jQuery.cssHooks[r];
            if (o && "expand"in o) {
                s = o.expand(s);
                delete e[r];
                for (n in s)if (!(n in e)) {
                    e[n] = s[n];
                    t[n] = i
                }
            } else t[r] = i
        }
    }

    function defaultPrefilter(e, t, n) {
        var r, i, s, o, u, a, f = this, l = {}, c = e.style, h = e.nodeType && isHidden(e), p = data_priv.get(e, "fxshow");
        if (!n.queue) {
            u = jQuery._queueHooks(e, "fx");
            if (u.unqueued == null) {
                u.unqueued = 0;
                a = u.empty.fire;
                u.empty.fire = function () {
                    u.unqueued || a()
                }
            }
            u.unqueued++;
            f.always(function () {
                f.always(function () {
                    u.unqueued--;
                    jQuery.queue(e, "fx").length || u.empty.fire()
                })
            })
        }
        if (e.nodeType === 1 && ("height"in t || "width"in t)) {
            n.overflow = [c.overflow, c.overflowX, c.overflowY];
            jQuery.css(e, "display") === "inline" && jQuery.css(e, "float") === "none" && (c.display = "inline-block")
        }
        if (n.overflow) {
            c.overflow = "hidden";
            f.always(function () {
                c.overflow = n.overflow[0];
                c.overflowX = n.overflow[1];
                c.overflowY = n.overflow[2]
            })
        }
        for (r in t) {
            i = t[r];
            if (rfxtypes.exec(i)) {
                delete t[r];
                s = s || i === "toggle";
                if (i === (h ? "hide" : "show")) {
                    if (i !== "show" || !p || p[r] === undefined)continue;
                    h = !0
                }
                l[r] = p && p[r] || jQuery.style(e, r)
            }
        }
        if (!jQuery.isEmptyObject(l)) {
            p ? "hidden"in p && (h = p.hidden) : p = data_priv.access(e, "fxshow", {});
            s && (p.hidden = !h);
            h ? jQuery(e).show() : f.done(function () {
                jQuery(e).hide()
            });
            f.done(function () {
                var t;
                data_priv.remove(e, "fxshow");
                for (t in l)jQuery.style(e, t, l[t])
            });
            for (r in l) {
                o = createTween(h ? p[r] : 0, r, f);
                if (!(r in p)) {
                    p[r] = o.start;
                    if (h) {
                        o.end = o.start;
                        o.start = r === "width" || r === "height" ? 1 : 0
                    }
                }
            }
        }
    }

    function Tween(e, t, n, r, i) {
        return new Tween.prototype.init(e, t, n, r, i)
    }

    function genFx(e, t) {
        var n, r = {height: e}, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) {
            n = cssExpand[i];
            r["margin" + n] = r["padding" + n] = e
        }
        t && (r.opacity = r.width = e);
        return r
    }

    function getWindow(e) {
        return jQuery.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
    }

    var rootjQuery, readyList, core_strundefined = typeof undefined, location = window.location, document = window.document, docElem = document.documentElement, _jQuery = window.jQuery, _$ = window.$, class2type = {}, core_deletedIds = [], core_version = "2.0.3", core_concat = core_deletedIds.concat, core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_indexOf = core_deletedIds.indexOf, core_toString = class2type.toString, core_hasOwn = class2type.hasOwnProperty, core_trim = core_version.trim, jQuery = function (e, t) {
        return new jQuery.fn.init(e, t, rootjQuery)
    }, core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, core_rnotwhite = /\S+/g, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function (e, t) {
        return t.toUpperCase()
    }, completed = function () {
        document.removeEventListener("DOMContentLoaded", completed, !1);
        window.removeEventListener("load", completed, !1);
        jQuery.ready()
    };
    jQuery.fn = jQuery.prototype = {jquery: core_version, constructor: jQuery, init: function (e, t, n) {
        var r, i;
        if (!e)return this;
        if (typeof e == "string") {
            e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? r = [null, e, null] : r = rquickExpr.exec(e);
            if (r && (r[1] || !t)) {
                if (r[1]) {
                    t = t instanceof jQuery ? t[0] : t;
                    jQuery.merge(this, jQuery.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : document, !0));
                    if (rsingleTag.test(r[1]) && jQuery.isPlainObject(t))for (r in t)jQuery.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                i = document.getElementById(r[2]);
                if (i && i.parentNode) {
                    this.length = 1;
                    this[0] = i
                }
                this.context = document;
                this.selector = e;
                return this
            }
            return!t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
        }
        if (e.nodeType) {
            this.context = this[0] = e;
            this.length = 1;
            return this
        }
        if (jQuery.isFunction(e))return n.ready(e);
        if (e.selector !== undefined) {
            this.selector = e.selector;
            this.context = e.context
        }
        return jQuery.makeArray(e, this)
    }, selector: "", length: 0, toArray: function () {
        return core_slice.call(this)
    }, get: function (e) {
        return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
    }, pushStack: function (e) {
        var t = jQuery.merge(this.constructor(), e);
        t.prevObject = this;
        t.context = this.context;
        return t
    }, each: function (e, t) {
        return jQuery.each(this, e, t)
    }, ready: function (e) {
        jQuery.ready.promise().done(e);
        return this
    }, slice: function () {
        return this.pushStack(core_slice.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (e) {
        var t = this.length, n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    }, map: function (e) {
        return this.pushStack(jQuery.map(this, function (t, n) {
            return e.call(t, n, t)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: core_push, sort: [].sort, splice: [].splice};
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function () {
        var e, t, n, r, i, s, o = arguments[0] || {}, u = 1, a = arguments.length, f = !1;
        if (typeof o == "boolean") {
            f = o;
            o = arguments[1] || {};
            u = 2
        }
        typeof o != "object" && !jQuery.isFunction(o) && (o = {});
        if (a === u) {
            o = this;
            --u
        }
        for (; u < a; u++)if ((e = arguments[u]) != null)for (t in e) {
            n = o[t];
            r = e[t];
            if (o === r)continue;
            if (f && r && (jQuery.isPlainObject(r) || (i = jQuery.isArray(r)))) {
                if (i) {
                    i = !1;
                    s = n && jQuery.isArray(n) ? n : []
                } else s = n && jQuery.isPlainObject(n) ? n : {};
                o[t] = jQuery.extend(f, s, r)
            } else r !== undefined && (o[t] = r)
        }
        return o
    };
    jQuery.extend({expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""), noConflict: function (e) {
        window.$ === jQuery && (window.$ = _$);
        e && window.jQuery === jQuery && (window.jQuery = _jQuery);
        return jQuery
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? jQuery.readyWait++ : jQuery.ready(!0)
    }, ready: function (e) {
        if (e === !0 ? --jQuery.readyWait : jQuery.isReady)return;
        jQuery.isReady = !0;
        if (e !== !0 && --jQuery.readyWait > 0)return;
        readyList.resolveWith(document, [jQuery]);
        jQuery.fn.trigger && jQuery(document).trigger("ready").off("ready")
    }, isFunction: function (e) {
        return jQuery.type(e) === "function"
    }, isArray: Array.isArray, isWindow: function (e) {
        return e != null && e === e.window
    }, isNumeric: function (e) {
        return!isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
        return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? class2type[core_toString.call(e)] || "object" : typeof e
    }, isPlainObject: function (e) {
        if (jQuery.type(e) !== "object" || e.nodeType || jQuery.isWindow(e))return!1;
        try {
            if (e.constructor && !core_hasOwn.call(e.constructor.prototype, "isPrototypeOf"))return!1
        } catch (t) {
            return!1
        }
        return!0
    }, isEmptyObject: function (e) {
        var t;
        for (t in e)return!1;
        return!0
    }, error: function (e) {
        throw new Error(e)
    }, parseHTML: function (e, t, n) {
        if (!e || typeof e != "string")return null;
        if (typeof t == "boolean") {
            n = t;
            t = !1
        }
        t = t || document;
        var r = rsingleTag.exec(e), i = !n && [];
        if (r)return[t.createElement(r[1])];
        r = jQuery.buildFragment([e], t, i);
        i && jQuery(i).remove();
        return jQuery.merge([], r.childNodes)
    }, parseJSON: JSON.parse, parseXML: function (e) {
        var t, n;
        if (!e || typeof e != "string")return null;
        try {
            n = new DOMParser;
            t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = undefined
        }
        (!t || t.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + e);
        return t
    }, noop: function () {
    }, globalEval: function (code) {
        var script, indirect = eval;
        code = jQuery.trim(code);
        if (code)if (code.indexOf("use strict") === 1) {
            script = document.createElement("script");
            script.text = code;
            document.head.appendChild(script).parentNode.removeChild(script)
        } else indirect(code)
    }, camelCase: function (e) {
        return e.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
    }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, n) {
        var r, i = 0, s = e.length, o = isArraylike(e);
        if (n)if (o)for (; i < s; i++) {
            r = t.apply(e[i], n);
            if (r === !1)break
        } else for (i in e) {
            r = t.apply(e[i], n);
            if (r === !1)break
        } else if (o)for (; i < s; i++) {
            r = t.call(e[i], i, e[i]);
            if (r === !1)break
        } else for (i in e) {
            r = t.call(e[i], i, e[i]);
            if (r === !1)break
        }
        return e
    }, trim: function (e) {
        return e == null ? "" : core_trim.call(e)
    }, makeArray: function (e, t) {
        var n = t || [];
        e != null && (isArraylike(Object(e)) ? jQuery.merge(n, typeof e == "string" ? [e] : e) : core_push.call(n, e));
        return n
    }, inArray: function (e, t, n) {
        return t == null ? -1 : core_indexOf.call(t, e, n)
    }, merge: function (e, t) {
        var n = t.length, r = e.length, i = 0;
        if (typeof n == "number")for (; i < n; i++)e[r++] = t[i]; else while (t[i] !== undefined)e[r++] = t[i++];
        e.length = r;
        return e
    }, grep: function (e, t, n) {
        var r, i = [], s = 0, o = e.length;
        n = !!n;
        for (; s < o; s++) {
            r = !!t(e[s], s);
            n !== r && i.push(e[s])
        }
        return i
    }, map: function (e, t, n) {
        var r, i = 0, s = e.length, o = isArraylike(e), u = [];
        if (o)for (; i < s; i++) {
            r = t(e[i], i, n);
            r != null && (u[u.length] = r)
        } else for (i in e) {
            r = t(e[i], i, n);
            r != null && (u[u.length] = r)
        }
        return core_concat.apply([], u)
    }, guid: 1, proxy: function (e, t) {
        var n, r, i;
        if (typeof t == "string") {
            n = e[t];
            t = e;
            e = n
        }
        if (!jQuery.isFunction(e))return undefined;
        r = core_slice.call(arguments, 2);
        i = function () {
            return e.apply(t || this, r.concat(core_slice.call(arguments)))
        };
        i.guid = e.guid = e.guid || jQuery.guid++;
        return i
    }, access: function (e, t, n, r, i, s, o) {
        var u = 0, a = e.length, f = n == null;
        if (jQuery.type(n) === "object") {
            i = !0;
            for (u in n)jQuery.access(e, t, u, n[u], !0, s, o)
        } else if (r !== undefined) {
            i = !0;
            jQuery.isFunction(r) || (o = !0);
            if (f)if (o) {
                t.call(e, r);
                t = null
            } else {
                f = t;
                t = function (e, t, n) {
                    return f.call(jQuery(e), n)
                }
            }
            if (t)for (; u < a; u++)t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
        }
        return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
    }, now: Date.now, swap: function (e, t, n, r) {
        var i, s, o = {};
        for (s in t) {
            o[s] = e.style[s];
            e.style[s] = t[s]
        }
        i = n.apply(e, r || []);
        for (s in t)e.style[s] = o[s];
        return i
    }});
    jQuery.ready.promise = function (e) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete")setTimeout(jQuery.ready); else {
                document.addEventListener("DOMContentLoaded", completed, !1);
                window.addEventListener("load", completed, !1)
            }
        }
        return readyList.promise(e)
    };
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        class2type["[object " + t + "]"] = t.toLowerCase()
    });
    rootjQuery = jQuery(document);
    (function (e, t) {
        function n(e, t, n, r) {
            var i, s, o, u, a, f, l, c, d, v;
            (t ? t.ownerDocument || t : q) !== _ && M(t);
            t = t || _;
            n = n || [];
            if (!e || typeof e != "string")return n;
            if ((u = t.nodeType) !== 1 && u !== 9)return[];
            if (P && !r) {
                if (i = yt.exec(e))if (o = i[1]) {
                    if (u === 9) {
                        s = t.getElementById(o);
                        if (!s || !s.parentNode)return n;
                        if (s.id === o) {
                            n.push(s);
                            return n
                        }
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && F(t, s) && s.id === o) {
                        n.push(s);
                        return n
                    }
                } else {
                    if (i[2]) {
                        et.apply(n, t.getElementsByTagName(e));
                        return n
                    }
                    if ((o = i[3]) && x.getElementsByClassName && t.getElementsByClassName) {
                        et.apply(n, t.getElementsByClassName(o));
                        return n
                    }
                }
                if (x.qsa && (!H || !H.test(e))) {
                    c = l = I;
                    d = t;
                    v = u === 9 && e;
                    if (u === 1 && t.nodeName.toLowerCase() !== "object") {
                        f = h(e);
                        (l = t.getAttribute("id")) ? c = l.replace(Et, "\\$&") : t.setAttribute("id", c);
                        c = "[id='" + c + "'] ";
                        a = f.length;
                        while (a--)f[a] = c + p(f[a]);
                        d = ht.test(e) && t.parentNode || t;
                        v = f.join(",")
                    }
                    if (v)try {
                        et.apply(n, d.querySelectorAll(v));
                        return n
                    } catch (m) {
                    } finally {
                        l || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(ft, "$1"), t, n, r)
        }

        function r() {
            function e(n, r) {
                t.push(n += " ") > N.cacheLength && delete e[t.shift()];
                return e[n] = r
            }

            var t = [];
            return e
        }

        function i(e) {
            e[I] = !0;
            return e
        }

        function s(e) {
            var t = _.createElement("div");
            try {
                return!!e(t)
            } catch (n) {
                return!1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function o(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--)N.attrHandle[n[r]] = t
        }

        function u(e, t) {
            var n = t && e, r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || K) - (~e.sourceIndex || K);
            if (r)return r;
            if (n)while (n = n.nextSibling)if (n === t)return-1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function f(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return(n === "input" || n === "button") && t.type === e
            }
        }

        function l(e) {
            return i(function (t) {
                t = +t;
                return i(function (n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c() {
        }

        function h(e, t) {
            var r, i, s, o, u, a, f, l = W[e + " "];
            if (l)return t ? 0 : l.slice(0);
            u = e;
            a = [];
            f = N.preFilter;
            while (u) {
                if (!r || (i = lt.exec(u))) {
                    i && (u = u.slice(i[0].length) || u);
                    a.push(s = [])
                }
                r = !1;
                if (i = ct.exec(u)) {
                    r = i.shift();
                    s.push({value: r, type: i[0].replace(ft, " ")});
                    u = u.slice(r.length)
                }
                for (o in N.filter)if ((i = mt[o].exec(u)) && (!f[o] || (i = f[o](i)))) {
                    r = i.shift();
                    s.push({value: r, type: o, matches: i});
                    u = u.slice(r.length)
                }
                if (!r)break
            }
            return t ? u.length : u ? n.error(e) : W(e, a).slice(0)
        }

        function p(e) {
            var t = 0, n = e.length, r = "";
            for (; t < n; t++)r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir, i = n && r === "parentNode", s = U++;
            return t.first ? function (t, n, s) {
                while (t = t[r])if (t.nodeType === 1 || i)return e(t, n, s)
            } : function (t, n, o) {
                var u, a, f, l = R + " " + s;
                if (o) {
                    while (t = t[r])if (t.nodeType === 1 || i)if (e(t, n, o))return!0
                } else while (t = t[r])if (t.nodeType === 1 || i) {
                    f = t[I] || (t[I] = {});
                    if ((a = f[r]) && a[0] === l) {
                        if ((u = a[1]) === !0 || u === T)return u === !0
                    } else {
                        a = f[r] = [l];
                        a[1] = e(t, n, o) || T;
                        if (a[1] === !0)return!0
                    }
                }
            }
        }

        function v(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return!1;
                return!0
            } : e[0]
        }

        function m(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)if (s = e[u])if (!n || n(s, r, i)) {
                o.push(s);
                f && t.push(u)
            }
            return o
        }

        function g(e, t, n, r, s, o) {
            r && !r[I] && (r = g(r));
            s && !s[I] && (s = g(s, o));
            return i(function (i, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = i || w(t || "*", u.nodeType ? [u] : u, []), g = e && (i || !t) ? m(v, h, e, u, a) : v, y = n ? s || (i ? e : d || r) ? [] : o : g;
                n && n(g, y, u, a);
                if (r) {
                    f = m(y, p);
                    r(f, [], u, a);
                    l = f.length;
                    while (l--)if (c = f[l])y[p[l]] = !(g[p[l]] = c)
                }
                if (i) {
                    if (s || e) {
                        if (s) {
                            f = [];
                            l = y.length;
                            while (l--)(c = y[l]) && f.push(g[l] = c);
                            s(null, y = [], f, a)
                        }
                        l = y.length;
                        while (l--)(c = y[l]) && (f = s ? nt.call(i, c) : h[l]) > -1 && (i[f] = !(o[f] = c))
                    }
                } else {
                    y = m(y === o ? y.splice(d, y.length) : y);
                    s ? s(null, o, y, a) : et.apply(o, y)
                }
            })
        }

        function y(e) {
            var t, n, r, i = e.length, s = N.relative[e[0].type], o = s || N.relative[" "], u = s ? 1 : 0, a = d(function (e) {
                return e === t
            }, o, !0), f = d(function (e) {
                return nt.call(t, e) > -1
            }, o, !0), l = [function (e, n, r) {
                return!s && (r || n !== A) || ((t = n).nodeType ? a(e, n, r) : f(e, n, r))
            }];
            for (; u < i; u++)if (n = N.relative[e[u].type])l = [d(v(l), n)]; else {
                n = N.filter[e[u].type].apply(null, e[u].matches);
                if (n[I]) {
                    r = ++u;
                    for (; r < i; r++)if (N.relative[e[r].type])break;
                    return g(u > 1 && v(l), u > 1 && p(e.slice(0, u - 1).concat({value: e[u - 2].type === " " ? "*" : ""})).replace(ft, "$1"), n, u < r && y(e.slice(u, r)), r < i && y(e = e.slice(r)), r < i && p(e))
                }
                l.push(n)
            }
            return v(l)
        }

        function b(e, t) {
            var r = 0, s = t.length > 0, o = e.length > 0, u = function (i, u, a, f, l) {
                var c, h, p, d = [], v = 0, g = "0", y = i && [], b = l != null, w = A, E = i || o && N.find.TAG("*", l && u.parentNode || u), S = R += w == null ? 1 : Math.random() || .1;
                if (b) {
                    A = u !== _ && u;
                    T = r
                }
                for (; (c = E[g]) != null; g++) {
                    if (o && c) {
                        h = 0;
                        while (p = e[h++])if (p(c, u, a)) {
                            f.push(c);
                            break
                        }
                        if (b) {
                            R = S;
                            T = ++r
                        }
                    }
                    if (s) {
                        (c = !p && c) && v--;
                        i && y.push(c)
                    }
                }
                v += g;
                if (s && g !== v) {
                    h = 0;
                    while (p = t[h++])p(y, d, u, a);
                    if (i) {
                        if (v > 0)while (g--)!y[g] && !d[g] && (d[g] = Y.call(f));
                        d = m(d)
                    }
                    et.apply(f, d);
                    b && !i && d.length > 0 && v + t.length > 1 && n.uniqueSort(f)
                }
                if (b) {
                    R = S;
                    A = w
                }
                return y
            };
            return s ? i(u) : u
        }

        function w(e, t, r) {
            var i = 0, s = t.length;
            for (; i < s; i++)n(e, t[i], r);
            return r
        }

        function E(e, t, n, r) {
            var i, s, o, u, a, f = h(e);
            if (!r && f.length === 1) {
                s = f[0] = f[0].slice(0);
                if (s.length > 2 && (o = s[0]).type === "ID" && x.getById && t.nodeType === 9 && P && N.relative[s[1].type]) {
                    t = (N.find.ID(o.matches[0].replace(St, xt), t) || [])[0];
                    if (!t)return n;
                    e = e.slice(s.shift().value.length)
                }
                i = mt.needsContext.test(e) ? 0 : s.length;
                while (i--) {
                    o = s[i];
                    if (N.relative[u = o.type])break;
                    if (a = N.find[u])if (r = a(o.matches[0].replace(St, xt), ht.test(s[0].type) && t.parentNode || t)) {
                        s.splice(i, 1);
                        e = r.length && p(s);
                        if (!e) {
                            et.apply(n, r);
                            return n
                        }
                        break
                    }
                }
            }
            L(e, f)(r, t, !P, n, ht.test(e));
            return n
        }

        var S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I = "sizzle" + -(new Date), q = e.document, R = 0, U = 0, z = r(), W = r(), X = r(), V = !1, $ = function (e, t) {
            if (e === t) {
                V = !0;
                return 0
            }
            return 0
        }, J = typeof t, K = 1 << 31, Q = {}.hasOwnProperty, G = [], Y = G.pop, Z = G.push, et = G.push, tt = G.slice, nt = G.indexOf || function (e) {
            var t = 0, n = this.length;
            for (; t < n; t++)if (this[t] === e)return t;
            return-1
        }, rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = st.replace("w", "w#"), ut = "\\[" + it + "*(" + st + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + it + "*\\]", at = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ut.replace(3, 8) + ")*)|.*)\\)|)", ft = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"), lt = new RegExp("^" + it + "*," + it + "*"), ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), ht = new RegExp(it + "*[+~]"), pt = new RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"), dt = new RegExp(at), vt = new RegExp("^" + ot + "$"), mt = {ID: new RegExp("^#(" + st + ")"), CLASS: new RegExp("^\\.(" + st + ")"), TAG: new RegExp("^(" + st.replace("w", "w*") + ")"), ATTR: new RegExp("^" + ut), PSEUDO: new RegExp("^" + at), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"), bool: new RegExp("^(?:" + rt + ")$", "i"), needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")}, gt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /^(?:input|select|textarea|button)$/i, wt = /^h\d$/i, Et = /'|\\/g, St = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), xt = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
        };
        try {
            et.apply(G = tt.call(q.childNodes), q.childNodes);
            G[q.childNodes.length].nodeType
        } catch (Tt) {
            et = {apply: G.length ? function (e, t) {
                Z.apply(e, tt.call(t))
            } : function (e, t) {
                var n = e.length, r = 0;
                while (e[n++] = t[r++]);
                e.length = n - 1
            }}
        }
        k = n.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        x = n.support = {};
        M = n.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : q, n = t.defaultView;
            if (t === _ || t.nodeType !== 9 || !t.documentElement)return _;
            _ = t;
            D = t.documentElement;
            P = !k(t);
            n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                M()
            });
            x.attributes = s(function (e) {
                e.className = "i";
                return!e.getAttribute("className")
            });
            x.getElementsByTagName = s(function (e) {
                e.appendChild(t.createComment(""));
                return!e.getElementsByTagName("*").length
            });
            x.getElementsByClassName = s(function (e) {
                e.innerHTML = "<div class='a'></div><div class='a i'></div>";
                e.firstChild.className = "i";
                return e.getElementsByClassName("i").length === 2
            });
            x.getById = s(function (e) {
                D.appendChild(e).id = I;
                return!t.getElementsByName || !t.getElementsByName(I).length
            });
            if (x.getById) {
                N.find.ID = function (e, t) {
                    if (typeof t.getElementById !== J && P) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                };
                N.filter.ID = function (e) {
                    var t = e.replace(St, xt);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }
            } else {
                delete N.find.ID;
                N.filter.ID = function (e) {
                    var t = e.replace(St, xt);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
            }
            N.find.TAG = x.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== J)return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++])n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            };
            N.find.CLASS = x.getElementsByClassName && function (e, t) {
                if (typeof t.getElementsByClassName !== J && P)return t.getElementsByClassName(e)
            };
            B = [];
            H = [];
            if (x.qsa = gt.test(t.querySelectorAll)) {
                s(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>";
                    e.querySelectorAll("[selected]").length || H.push("\\[" + it + "*(?:value|" + rt + ")");
                    e.querySelectorAll(":checked").length || H.push(":checked")
                });
                s(function (e) {
                    var n = t.createElement("input");
                    n.setAttribute("type", "hidden");
                    e.appendChild(n).setAttribute("t", "");
                    e.querySelectorAll("[t^='']").length && H.push("[*^$]=" + it + "*(?:''|\"\")");
                    e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled");
                    e.querySelectorAll("*,:x");
                    H.push(",.*:")
                })
            }
            (x.matchesSelector = gt.test(j = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && s(function (e) {
                x.disconnectedMatch = j.call(e, "div");
                j.call(e, "[s!='']:x");
                B.push("!=", at)
            });
            H = H.length && new RegExp(H.join("|"));
            B = B.length && new RegExp(B.join("|"));
            F = gt.test(D.contains) || D.compareDocumentPosition ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return!0;
                return!1
            };
            $ = D.compareDocumentPosition ? function (e, n) {
                if (e === n) {
                    V = !0;
                    return 0
                }
                var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                return r ? r & 1 || !x.sortDetached && n.compareDocumentPosition(e) === r ? e === t || F(q, e) ? -1 : n === t || F(q, n) ? 1 : O ? nt.call(O, e) - nt.call(O, n) : 0 : r & 4 ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, n) {
                var r, i = 0, s = e.parentNode, o = n.parentNode, a = [e], f = [n];
                if (e === n) {
                    V = !0;
                    return 0
                }
                if (!s || !o)return e === t ? -1 : n === t ? 1 : s ? -1 : o ? 1 : O ? nt.call(O, e) - nt.call(O, n) : 0;
                if (s === o)return u(e, n);
                r = e;
                while (r = r.parentNode)a.unshift(r);
                r = n;
                while (r = r.parentNode)f.unshift(r);
                while (a[i] === f[i])i++;
                return i ? u(a[i], f[i]) : a[i] === q ? -1 : f[i] === q ? 1 : 0
            };
            return t
        };
        n.matches = function (e, t) {
            return n(e, null, null, t)
        };
        n.matchesSelector = function (e, t) {
            (e.ownerDocument || e) !== _ && M(e);
            t = t.replace(pt, "='$1']");
            if (x.matchesSelector && P && (!B || !B.test(t)) && (!H || !H.test(t)))try {
                var r = j.call(e, t);
                if (r || x.disconnectedMatch || e.document && e.document.nodeType !== 11)return r
            } catch (i) {
            }
            return n(t, _, null, [e]).length > 0
        };
        n.contains = function (e, t) {
            (e.ownerDocument || e) !== _ && M(e);
            return F(e, t)
        };
        n.attr = function (e, n) {
            (e.ownerDocument || e) !== _ && M(e);
            var r = N.attrHandle[n.toLowerCase()], i = r && Q.call(N.attrHandle, n.toLowerCase()) ? r(e, n, !P) : t;
            return i === t ? x.attributes || !P ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
        };
        n.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        n.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            V = !x.detectDuplicates;
            O = !x.sortStable && e.slice(0);
            e.sort($);
            if (V) {
                while (t = e[i++])t === e[i] && (r = n.push(i));
                while (r--)e.splice(n[r], 1)
            }
            return e
        };
        C = n.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (!i)for (; t = e[r]; r++)n += C(t); else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string")return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
            } else if (i === 3 || i === 4)return e.nodeValue;
            return n
        };
        N = n.selectors = {cacheLength: 50, createPseudo: i, match: mt, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {
            e[1] = e[1].replace(St, xt);
            e[3] = (e[4] || e[5] || "").replace(St, xt);
            e[2] === "~=" && (e[3] = " " + e[3] + " ");
            return e.slice(0, 4)
        }, CHILD: function (e) {
            e[1] = e[1].toLowerCase();
            if (e[1].slice(0, 3) === "nth") {
                e[3] || n.error(e[0]);
                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                e[5] = +(e[7] + e[8] || e[3] === "odd")
            } else e[3] && n.error(e[0]);
            return e
        }, PSEUDO: function (e) {
            var n, r = !e[5] && e[2];
            if (mt.CHILD.test(e[0]))return null;
            if (e[3] && e[4] !== t)e[2] = e[4]; else if (r && dt.test(r) && (n = h(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length)) {
                e[0] = e[0].slice(0, n);
                e[2] = r.slice(0, n)
            }
            return e.slice(0, 3)
        }}, filter: {TAG: function (e) {
            var t = e.replace(St, xt).toLowerCase();
            return e === "*" ? function () {
                return!0
            } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
            }
        }, CLASS: function (e) {
            var t = z[e + " "];
            return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && z(e, function (e) {
                return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
            })
        }, ATTR: function (e, t, r) {
            return function (i) {
                var s = n.attr(i, e);
                if (s == null)return t === "!=";
                if (!t)return!0;
                s += "";
                return t === "=" ? s === r : t === "!=" ? s !== r : t === "^=" ? r && s.indexOf(r) === 0 : t === "*=" ? r && s.indexOf(r) > -1 : t === "$=" ? r && s.slice(-r.length) === r : t === "~=" ? (" " + s + " ").indexOf(r) > -1 : t === "|=" ? s === r || s.slice(0, r.length + 1) === r + "-" : !1
            }
        }, CHILD: function (e, t, n, r, i) {
            var s = e.slice(0, 3) !== "nth", o = e.slice(-4) !== "last", u = t === "of-type";
            return r === 1 && i === 0 ? function (e) {
                return!!e.parentNode
            } : function (t, n, a) {
                var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y = !a && !u;
                if (m) {
                    if (s) {
                        while (v) {
                            c = t;
                            while (c = c[v])if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)return!1;
                            d = v = e === "only" && !d && "nextSibling"
                        }
                        return!0
                    }
                    d = [o ? m.firstChild : m.lastChild];
                    if (o && y) {
                        l = m[I] || (m[I] = {});
                        f = l[e] || [];
                        p = f[0] === R && f[1];
                        h = f[0] === R && f[2];
                        c = p && m.childNodes[p];
                        while (c = ++p && c && c[v] || (h = p = 0) || d.pop())if (c.nodeType === 1 && ++h && c === t) {
                            l[e] = [R, p, h];
                            break
                        }
                    } else if (y && (f = (t[I] || (t[I] = {}))[e]) && f[0] === R)h = f[1]; else while (c = ++p && c && c[v] || (h = p = 0) || d.pop())if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                        y && ((c[I] || (c[I] = {}))[e] = [R, h]);
                        if (c === t)break
                    }
                    h -= i;
                    return h === r || h % r === 0 && h / r >= 0
                }
            }
        }, PSEUDO: function (e, t) {
            var r, s = N.pseudos[e] || N.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " +
                e);
            if (s[I])return s(t);
            if (s.length > 1) {
                r = [e, e, "", t];
                return N.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                    var r, i = s(e, t), o = i.length;
                    while (o--) {
                        r = nt.call(e, i[o]);
                        e[r] = !(n[r] = i[o])
                    }
                }) : function (e) {
                    return s(e, 0, r)
                }
            }
            return s
        }}, pseudos: {not: i(function (e) {
            var t = [], n = [], r = L(e.replace(ft, "$1"));
            return r[I] ? i(function (e, t, n, i) {
                var s, o = r(e, null, i, []), u = e.length;
                while (u--)if (s = o[u])e[u] = !(t[u] = s)
            }) : function (e, i, s) {
                t[0] = e;
                r(t, null, s, n);
                return!n.pop()
            }
        }), has: i(function (e) {
            return function (t) {
                return n(e, t).length > 0
            }
        }), contains: i(function (e) {
            return function (t) {
                return(t.textContent || t.innerText || C(t)).indexOf(e) > -1
            }
        }), lang: i(function (e) {
            vt.test(e || "") || n.error("unsupported lang: " + e);
            e = e.replace(St, xt).toLowerCase();
            return function (t) {
                var n;
                do if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                    n = n.toLowerCase();
                    return n === e || n.indexOf(e + "-") === 0
                } while ((t = t.parentNode) && t.nodeType === 1);
                return!1
            }
        }), target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
        }, root: function (e) {
            return e === D
        }, focus: function (e) {
            return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
            return e.disabled === !1
        }, disabled: function (e) {
            return e.disabled === !0
        }, checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return t === "input" && !!e.checked || t === "option" && !!e.selected
        }, selected: function (e) {
            e.parentNode && e.parentNode.selectedIndex;
            return e.selected === !0
        }, empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4)return!1;
            return!0
        }, parent: function (e) {
            return!N.pseudos.empty(e)
        }, header: function (e) {
            return wt.test(e.nodeName)
        }, input: function (e) {
            return bt.test(e.nodeName)
        }, button: function (e) {
            var t = e.nodeName.toLowerCase();
            return t === "input" && e.type === "button" || t === "button"
        }, text: function (e) {
            var t;
            return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
        }, first: l(function () {
            return[0]
        }), last: l(function (e, t) {
            return[t - 1]
        }), eq: l(function (e, t, n) {
            return[n < 0 ? n + t : n]
        }), even: l(function (e, t) {
            var n = 0;
            for (; n < t; n += 2)e.push(n);
            return e
        }), odd: l(function (e, t) {
            var n = 1;
            for (; n < t; n += 2)e.push(n);
            return e
        }), lt: l(function (e, t, n) {
            var r = n < 0 ? n + t : n;
            for (; --r >= 0;)e.push(r);
            return e
        }), gt: l(function (e, t, n) {
            var r = n < 0 ? n + t : n;
            for (; ++r < t;)e.push(r);
            return e
        })}};
        N.pseudos.nth = N.pseudos.eq;
        for (S in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})N.pseudos[S] = a(S);
        for (S in{submit: !0, reset: !0})N.pseudos[S] = f(S);
        c.prototype = N.filters = N.pseudos;
        N.setFilters = new c;
        L = n.compile = function (e, t) {
            var n, r = [], i = [], s = X[e + " "];
            if (!s) {
                t || (t = h(e));
                n = t.length;
                while (n--) {
                    s = y(t[n]);
                    s[I] ? r.push(s) : i.push(s)
                }
                s = X(e, b(i, r))
            }
            return s
        };
        x.sortStable = I.split("").sort($).join("") === I;
        x.detectDuplicates = V;
        M();
        x.sortDetached = s(function (e) {
            return e.compareDocumentPosition(_.createElement("div")) & 1
        });
        s(function (e) {
            e.innerHTML = "<a href='#'></a>";
            return e.firstChild.getAttribute("href") === "#"
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n)return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        });
        (!x.attributes || !s(function (e) {
            e.innerHTML = "<input/>";
            e.firstChild.setAttribute("value", "");
            return e.firstChild.getAttribute("value") === ""
        })) && o("value", function (e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input")return e.defaultValue
        });
        s(function (e) {
            return e.getAttribute("disabled") == null
        }) || o(rt, function (e, t, n) {
            var r;
            if (!n)return(r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        });
        jQuery.find = n;
        jQuery.expr = n.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = n.uniqueSort;
        jQuery.text = n.getText;
        jQuery.isXMLDoc = n.isXML;
        jQuery.contains = n.contains
    })(window);
    var optionsCache = {};
    jQuery.Callbacks = function (e) {
        e = typeof e == "string" ? optionsCache[e] || createOptions(e) : jQuery.extend({}, e);
        var t, n, r, i, s, o, u = [], a = !e.once && [], f = function (c) {
            t = e.memory && c;
            n = !0;
            o = i || 0;
            i = 0;
            s = u.length;
            r = !0;
            for (; u && o < s; o++)if (u[o].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            r = !1;
            u && (a ? a.length && f(a.shift()) : t ? u = [] : l.disable())
        }, l = {add: function () {
            if (u) {
                var n = u.length;
                (function o(t) {
                    jQuery.each(t, function (t, n) {
                        var r = jQuery.type(n);
                        r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && o(n)
                    })
                })(arguments);
                if (r)s = u.length; else if (t) {
                    i = n;
                    f(t)
                }
            }
            return this
        }, remove: function () {
            u && jQuery.each(arguments, function (e, t) {
                var n;
                while ((n = jQuery.inArray(t, u, n)) > -1) {
                    u.splice(n, 1);
                    if (r) {
                        n <= s && s--;
                        n <= o && o--
                    }
                }
            });
            return this
        }, has: function (e) {
            return e ? jQuery.inArray(e, u) > -1 : !!u && !!u.length
        }, empty: function () {
            u = [];
            s = 0;
            return this
        }, disable: function () {
            u = a = t = undefined;
            return this
        }, disabled: function () {
            return!u
        }, lock: function () {
            a = undefined;
            t || l.disable();
            return this
        }, locked: function () {
            return!a
        }, fireWith: function (e, t) {
            if (u && (!n || a)) {
                t = t || [];
                t = [e, t.slice ? t.slice() : t];
                r ? a.push(t) : f(t)
            }
            return this
        }, fire: function () {
            l.fireWith(this, arguments);
            return this
        }, fired: function () {
            return!!n
        }};
        return l
    };
    jQuery.extend({Deferred: function (e) {
        var t = [
            ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
            ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
            ["notify", "progress", jQuery.Callbacks("memory")]
        ], n = "pending", r = {state: function () {
            return n
        }, always: function () {
            i.done(arguments).fail(arguments);
            return this
        }, then: function () {
            var e = arguments;
            return jQuery.Deferred(function (n) {
                jQuery.each(t, function (t, s) {
                    var o = s[0], u = jQuery.isFunction(e[t]) && e[t];
                    i[s[1]](function () {
                        var e = u && u.apply(this, arguments);
                        e && jQuery.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                    })
                });
                e = null
            }).promise()
        }, promise: function (e) {
            return e != null ? jQuery.extend(e, r) : r
        }}, i = {};
        r.pipe = r.then;
        jQuery.each(t, function (e, s) {
            var o = s[2], u = s[3];
            r[s[1]] = o.add;
            u && o.add(function () {
                n = u
            }, t[e ^ 1][2].disable, t[2][2].lock);
            i[s[0]] = function () {
                i[s[0] + "With"](this === i ? r : this, arguments);
                return this
            };
            i[s[0] + "With"] = o.fireWith
        });
        r.promise(i);
        e && e.call(i, i);
        return i
    }, when: function (e) {
        var t = 0, n = core_slice.call(arguments), r = n.length, i = r !== 1 || e && jQuery.isFunction(e.promise) ? r : 0, s = i === 1 ? e : jQuery.Deferred(), o = function (e, t, n) {
            return function (r) {
                t[e] = this;
                n[e] = arguments.length > 1 ? core_slice.call(arguments) : r;
                n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
            }
        }, u, a, f;
        if (r > 1) {
            u = new Array(r);
            a = new Array(r);
            f = new Array(r);
            for (; t < r; t++)n[t] && jQuery.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
        }
        i || s.resolveWith(f, n);
        return s.promise()
    }});
    jQuery.support = function (e) {
        var t = document.createElement("input"), n = document.createDocumentFragment(), r = document.createElement("div"), i = document.createElement("select"), s = i.appendChild(document.createElement("option"));
        if (!t.type)return e;
        t.type = "checkbox";
        e.checkOn = t.value !== "";
        e.optSelected = s.selected;
        e.reliableMarginRight = !0;
        e.boxSizingReliable = !0;
        e.pixelPosition = !1;
        t.checked = !0;
        e.noCloneChecked = t.cloneNode(!0).checked;
        i.disabled = !0;
        e.optDisabled = !s.disabled;
        t = document.createElement("input");
        t.value = "t";
        t.type = "radio";
        e.radioValue = t.value === "t";
        t.setAttribute("checked", "t");
        t.setAttribute("name", "t");
        n.appendChild(t);
        e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        e.focusinBubbles = "onfocusin"in window;
        r.style.backgroundClip = "content-box";
        r.cloneNode(!0).style.backgroundClip = "";
        e.clearCloneStyle = r.style.backgroundClip === "content-box";
        jQuery(function () {
            var t, n, i = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", s = document.getElementsByTagName("body")[0];
            if (!s)return;
            t = document.createElement("div");
            t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            s.appendChild(t).appendChild(r);
            r.innerHTML = "";
            r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";
            jQuery.swap(s, s.style.zoom != null ? {zoom: 1} : {}, function () {
                e.boxSizing = r.offsetWidth === 4
            });
            if (window.getComputedStyle) {
                e.pixelPosition = (window.getComputedStyle(r, null) || {}).top !== "1%";
                e.boxSizingReliable = (window.getComputedStyle(r, null) || {width: "4px"}).width === "4px";
                n = r.appendChild(document.createElement("div"));
                n.style.cssText = r.style.cssText = i;
                n.style.marginRight = n.style.width = "0";
                r.style.width = "1px";
                e.reliableMarginRight = !parseFloat((window.getComputedStyle(n, null) || {}).marginRight)
            }
            s.removeChild(t)
        });
        return e
    }({});
    var data_user, data_priv, rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rmultiDash = /([A-Z])/g;
    Data.uid = 1;
    Data.accepts = function (e) {
        return e.nodeType ? e.nodeType === 1 || e.nodeType === 9 : !0
    };
    Data.prototype = {key: function (e) {
        if (!Data.accepts(e))return 0;
        var t = {}, n = e[this.expando];
        if (!n) {
            n = Data.uid++;
            try {
                t[this.expando] = {value: n};
                Object.defineProperties(e, t)
            } catch (r) {
                t[this.expando] = n;
                jQuery.extend(e, t)
            }
        }
        this.cache[n] || (this.cache[n] = {});
        return n
    }, set: function (e, t, n) {
        var r, i = this.key(e), s = this.cache[i];
        if (typeof t == "string")s[t] = n; else if (jQuery.isEmptyObject(s))jQuery.extend(this.cache[i], t); else for (r in t)s[r] = t[r];
        return s
    }, get: function (e, t) {
        var n = this.cache[this.key(e)];
        return t === undefined ? n : n[t]
    }, access: function (e, t, n) {
        var r;
        if (t === undefined || t && typeof t == "string" && n === undefined) {
            r = this.get(e, t);
            return r !== undefined ? r : this.get(e, jQuery.camelCase(t))
        }
        this.set(e, t, n);
        return n !== undefined ? n : t
    }, remove: function (e, t) {
        var n, r, i, s = this.key(e), o = this.cache[s];
        if (t === undefined)this.cache[s] = {}; else {
            if (jQuery.isArray(t))r = t.concat(t.map(jQuery.camelCase)); else {
                i = jQuery.camelCase(t);
                if (t in o)r = [t, i]; else {
                    r = i;
                    r = r in o ? [r] : r.match(core_rnotwhite) || []
                }
            }
            n = r.length;
            while (n--)delete o[r[n]]
        }
    }, hasData: function (e) {
        return!jQuery.isEmptyObject(this.cache[e[this.expando]] || {})
    }, discard: function (e) {
        e[this.expando] && delete this.cache[e[this.expando]]
    }};
    data_user = new Data;
    data_priv = new Data;
    jQuery.extend({acceptData: Data.accepts, hasData: function (e) {
        return data_user.hasData(e) || data_priv.hasData(e)
    }, data: function (e, t, n) {
        return data_user.access(e, t, n)
    }, removeData: function (e, t) {
        data_user.remove(e, t)
    }, _data: function (e, t, n) {
        return data_priv.access(e, t, n)
    }, _removeData: function (e, t) {
        data_priv.remove(e, t)
    }});
    jQuery.fn.extend({data: function (e, t) {
        var n, r, i = this[0], s = 0, o = null;
        if (e === undefined) {
            if (this.length) {
                o = data_user.get(i);
                if (i.nodeType === 1 && !data_priv.get(i, "hasDataAttrs")) {
                    n = i.attributes;
                    for (; s < n.length; s++) {
                        r = n[s].name;
                        if (r.indexOf("data-") === 0) {
                            r = jQuery.camelCase(r.slice(5));
                            dataAttr(i, r, o[r])
                        }
                    }
                    data_priv.set(i, "hasDataAttrs", !0)
                }
            }
            return o
        }
        return typeof e == "object" ? this.each(function () {
            data_user.set(this, e)
        }) : jQuery.access(this, function (t) {
            var n, r = jQuery.camelCase(e);
            if (i && t === undefined) {
                n = data_user.get(i, e);
                if (n !== undefined)return n;
                n = data_user.get(i, r);
                if (n !== undefined)return n;
                n = dataAttr(i, r, undefined);
                if (n !== undefined)return n;
                return
            }
            this.each(function () {
                var n = data_user.get(this, r);
                data_user.set(this, r, t);
                e.indexOf("-") !== -1 && n !== undefined && data_user.set(this, e, t)
            })
        }, null, t, arguments.length > 1, null, !0)
    }, removeData: function (e) {
        return this.each(function () {
            data_user.remove(this, e)
        })
    }});
    jQuery.extend({queue: function (e, t, n) {
        var r;
        if (e) {
            t = (t || "fx") + "queue";
            r = data_priv.get(e, t);
            n && (!r || jQuery.isArray(n) ? r = data_priv.access(e, t, jQuery.makeArray(n)) : r.push(n));
            return r || []
        }
    }, dequeue: function (e, t) {
        t = t || "fx";
        var n = jQuery.queue(e, t), r = n.length, i = n.shift(), s = jQuery._queueHooks(e, t), o = function () {
            jQuery.dequeue(e, t)
        };
        if (i === "inprogress") {
            i = n.shift();
            r--
        }
        if (i) {
            t === "fx" && n.unshift("inprogress");
            delete s.stop;
            i.call(e, o, s)
        }
        !r && s && s.empty.fire()
    }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return data_priv.get(e, n) || data_priv.access(e, n, {empty: jQuery.Callbacks("once memory").add(function () {
            data_priv.remove(e, [t + "queue", n])
        })})
    }});
    jQuery.fn.extend({queue: function (e, t) {
        var n = 2;
        if (typeof e != "string") {
            t = e;
            e = "fx";
            n--
        }
        return arguments.length < n ? jQuery.queue(this[0], e) : t === undefined ? this : this.each(function () {
            var n = jQuery.queue(this, e, t);
            jQuery._queueHooks(this, e);
            e === "fx" && n[0] !== "inprogress" && jQuery.dequeue(this, e)
        })
    }, dequeue: function (e) {
        return this.each(function () {
            jQuery.dequeue(this, e)
        })
    }, delay: function (e, t) {
        e = jQuery.fx ? jQuery.fx.speeds[e] || e : e;
        t = t || "fx";
        return this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
    }, promise: function (e, t) {
        var n, r = 1, i = jQuery.Deferred(), s = this, o = this.length, u = function () {
            --r || i.resolveWith(s, [s])
        };
        if (typeof e != "string") {
            t = e;
            e = undefined
        }
        e = e || "fx";
        while (o--) {
            n = data_priv.get(s[o], e + "queueHooks");
            if (n && n.empty) {
                r++;
                n.empty.add(u)
            }
        }
        u();
        return i.promise(t)
    }});
    var nodeHook, boolHook, rclass = /[\t\r\n\f]/g, rreturn = /\r/g, rfocusable = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({attr: function (e, t) {
        return jQuery.access(this, jQuery.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
        return this.each(function () {
            jQuery.removeAttr(this, e)
        })
    }, prop: function (e, t) {
        return jQuery.access(this, jQuery.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
        return this.each(function () {
            delete this[jQuery.propFix[e] || e]
        })
    }, addClass: function (e) {
        var t, n, r, i, s, o = 0, u = this.length, a = typeof e == "string" && e;
        if (jQuery.isFunction(e))return this.each(function (t) {
            jQuery(this).addClass(e.call(this, t, this.className))
        });
        if (a) {
            t = (e || "").match(core_rnotwhite) || [];
            for (; o < u; o++) {
                n = this[o];
                r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : " ");
                if (r) {
                    s = 0;
                    while (i = t[s++])r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                    n.className = jQuery.trim(r)
                }
            }
        }
        return this
    }, removeClass: function (e) {
        var t, n, r, i, s, o = 0, u = this.length, a = arguments.length === 0 || typeof e == "string" && e;
        if (jQuery.isFunction(e))return this.each(function (t) {
            jQuery(this).removeClass(e.call(this, t, this.className))
        });
        if (a) {
            t = (e || "").match(core_rnotwhite) || [];
            for (; o < u; o++) {
                n = this[o];
                r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : "");
                if (r) {
                    s = 0;
                    while (i = t[s++])while (r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
                    n.className = e ? jQuery.trim(r) : ""
                }
            }
        }
        return this
    }, toggleClass: function (e, t) {
        var n = typeof e;
        return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : jQuery.isFunction(e) ? this.each(function (n) {
            jQuery(this).toggleClass(e.call(this, n, this.className, t), t)
        }) : this.each(function () {
            if (n === "string") {
                var t, r = 0, i = jQuery(this), s = e.match(core_rnotwhite) || [];
                while (t = s[r++])i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
            } else if (n === core_strundefined || n === "boolean") {
                this.className && data_priv.set(this, "__className__", this.className);
                this.className = this.className || e === !1 ? "" : data_priv.get(this, "__className__") || ""
            }
        })
    }, hasClass: function (e) {
        var t = " " + e + " ", n = 0, r = this.length;
        for (; n < r; n++)if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(rclass, " ").indexOf(t) >= 0)return!0;
        return!1
    }, val: function (e) {
        var t, n, r, i = this[0];
        if (!arguments.length) {
            if (i) {
                t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()];
                if (t && "get"in t && (n = t.get(i, "value")) !== undefined)return n;
                n = i.value;
                return typeof n == "string" ? n.replace(rreturn, "") : n == null ? "" : n
            }
            return
        }
        r = jQuery.isFunction(e);
        return this.each(function (n) {
            var i;
            if (this.nodeType !== 1)return;
            r ? i = e.call(this, n, jQuery(this).val()) : i = e;
            i == null ? i = "" : typeof i == "number" ? i += "" : jQuery.isArray(i) && (i = jQuery.map(i, function (e) {
                return e == null ? "" : e + ""
            }));
            t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
            if (!t || !("set"in t) || t.set(this, i, "value") === undefined)this.value = i
        })
    }});
    jQuery.extend({valHooks: {option: {get: function (e) {
        var t = e.attributes.value;
        return!t || t.specified ? e.value : e.text
    }}, select: {get: function (e) {
        var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
        for (; a < u; a++) {
            n = r[a];
            if ((n.selected || a === i) && (jQuery.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !jQuery.nodeName(n.parentNode, "optgroup"))) {
                t = jQuery(n).val();
                if (s)return t;
                o.push(t)
            }
        }
        return o
    }, set: function (e, t) {
        var n, r, i = e.options, s = jQuery.makeArray(t), o = i.length;
        while (o--) {
            r = i[o];
            if (r.selected = jQuery.inArray(jQuery(r).val(), s) >= 0)n = !0
        }
        n || (e.selectedIndex = -1);
        return s
    }}}, attr: function (e, t, n) {
        var r, i, s = e.nodeType;
        if (!e || s === 3 || s === 8 || s === 2)return;
        if (typeof e.getAttribute === core_strundefined)return jQuery.prop(e, t, n);
        if (s !== 1 || !jQuery.isXMLDoc(e)) {
            t = t.toLowerCase();
            r = jQuery.attrHooks[t] || (jQuery.expr.match.bool.test(t) ? boolHook : nodeHook)
        }
        if (n === undefined) {
            if (r && "get"in r && (i = r.get(e, t)) !== null)return i;
            i = jQuery.find.attr(e, t);
            return i == null ? undefined : i
        }
        if (n !== null) {
            if (r && "set"in r && (i = r.set(e, n, t)) !== undefined)return i;
            e.setAttribute(t, n + "");
            return n
        }
        jQuery.removeAttr(e, t)
    }, removeAttr: function (e, t) {
        var n, r, i = 0, s = t && t.match(core_rnotwhite);
        if (s && e.nodeType === 1)while (n = s[i++]) {
            r = jQuery.propFix[n] || n;
            jQuery.expr.match.bool.test(n) && (e[r] = !1);
            e.removeAttribute(n)
        }
    }, attrHooks: {type: {set: function (e, t) {
        if (!jQuery.support.radioValue && t === "radio" && jQuery.nodeName(e, "input")) {
            var n = e.value;
            e.setAttribute("type", t);
            n && (e.value = n);
            return t
        }
    }}}, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
        var r, i, s, o = e.nodeType;
        if (!e || o === 3 || o === 8 || o === 2)return;
        s = o !== 1 || !jQuery.isXMLDoc(e);
        if (s) {
            t = jQuery.propFix[t] || t;
            i = jQuery.propHooks[t]
        }
        return n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && (r = i.get(e, t)) !== null ? r : e[t]
    }, propHooks: {tabIndex: {get: function (e) {
        return e.hasAttribute("tabindex") || rfocusable.test(e.nodeName) || e.href ? e.tabIndex : -1
    }}}});
    boolHook = {set: function (e, t, n) {
        t === !1 ? jQuery.removeAttr(e, n) : e.setAttribute(n, n);
        return n
    }};
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = jQuery.expr.attrHandle[t] || jQuery.find.attr;
        jQuery.expr.attrHandle[t] = function (e, t, r) {
            var i = jQuery.expr.attrHandle[t], s = r ? undefined : (jQuery.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
            jQuery.expr.attrHandle[t] = i;
            return s
        }
    });
    jQuery.support.optSelected || (jQuery.propHooks.selected = {get: function (e) {
        var t = e.parentNode;
        t && t.parentNode && t.parentNode.selectedIndex;
        return null
    }});
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        jQuery.propFix[this.toLowerCase()] = this
    });
    jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = {set: function (e, t) {
            if (jQuery.isArray(t))return e.checked = jQuery.inArray(jQuery(e).val(), t) >= 0
        }};
        jQuery.support.checkOn || (jQuery.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    jQuery.event = {global: {}, add: function (e, t, n, r, i) {
        var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.get(e);
        if (!m)return;
        if (n.handler) {
            s = n;
            n = s.handler;
            i = s.selector
        }
        n.guid || (n.guid = jQuery.guid++);
        (a = m.events) || (a = m.events = {});
        if (!(o = m.handle)) {
            o = m.handle = function (e) {
                return typeof jQuery === core_strundefined || !!e && jQuery.event.triggered === e.type ? undefined : jQuery.event.dispatch.apply(o.elem, arguments)
            };
            o.elem = e
        }
        t = (t || "").match(core_rnotwhite) || [""];
        f = t.length;
        while (f--) {
            u = rtypenamespace.exec(t[f]) || [];
            p = v = u[1];
            d = (u[2] || "").split(".").sort();
            if (!p)continue;
            c = jQuery.event.special[p] || {};
            p = (i ? c.delegateType : c.bindType) || p;
            c = jQuery.event.special[p] || {};
            l = jQuery.extend({type: p, origType: v, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && jQuery.expr.match.needsContext.test(i), namespace: d.join(".")}, s);
            if (!(h = a[p])) {
                h = a[p] = [];
                h.delegateCount = 0;
                (!c.setup || c.setup.call(e, r, d, o) === !1) && e.addEventListener && e.addEventListener(p, o, !1)
            }
            if (c.add) {
                c.add.call(e, l);
                l.handler.guid || (l.handler.guid = n.guid)
            }
            i ? h.splice(h.delegateCount++, 0, l) : h.push(l);
            jQuery.event.global[p] = !0
        }
        e = null
    }, remove: function (e, t, n, r, i) {
        var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.hasData(e) && data_priv.get(e);
        if (!m || !(a = m.events))return;
        t = (t || "").match(core_rnotwhite) || [""];
        f = t.length;
        while (f--) {
            u = rtypenamespace.exec(t[f]) || [];
            p = v = u[1];
            d = (u[2] || "").split(".").sort();
            if (!p) {
                for (p in a)jQuery.event.remove(e, p + t[f], n, r, !0);
                continue
            }
            c = jQuery.event.special[p] || {};
            p = (r ? c.delegateType : c.bindType) || p;
            h = a[p] || [];
            u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)");
            o = s = h.length;
            while (s--) {
                l = h[s];
                if ((i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector)) {
                    h.splice(s, 1);
                    l.selector && h.delegateCount--;
                    c.remove && c.remove.call(e, l)
                }
            }
            if (o && !h.length) {
                (!c.teardown || c.teardown.call(e, d, m.handle) === !1) && jQuery.removeEvent(e, p, m.handle);
                delete a[p]
            }
        }
        if (jQuery.isEmptyObject(a)) {
            delete m.handle;
            data_priv.remove(e, "events")
        }
    }, trigger: function (e, t, n, r) {
        var i, s, o, u, a, f, l, c = [n || document], h = core_hasOwn.call(e, "type") ? e.type : e, p = core_hasOwn.call(e, "namespace") ? e.namespace.split(".") : [];
        s = o = n = n || document;
        if (n.nodeType === 3 || n.nodeType === 8)return;
        if (rfocusMorph.test(h + jQuery.event.triggered))return;
        if (h.indexOf(".") >= 0) {
            p = h.split(".");
            h = p.shift();
            p.sort()
        }
        a = h.indexOf(":") < 0 && "on" + h;
        e = e[jQuery.expando] ? e : new jQuery.Event(h, typeof e == "object" && e);
        e.isTrigger = r ? 2 : 3;
        e.namespace = p.join(".");
        e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        e.result = undefined;
        e.target || (e.target = n);
        t = t == null ? [e] : jQuery.makeArray(t, [e]);
        l = jQuery.event.special[h] || {};
        if (!r && l.trigger && l.trigger.apply(n, t) === !1)return;
        if (!r && !l.noBubble && !jQuery.isWindow(n)) {
            u = l.delegateType || h;
            rfocusMorph.test(u + h) || (s = s.parentNode);
            for (; s; s = s.parentNode) {
                c.push(s);
                o = s
            }
            o === (n.ownerDocument || document) && c.push(o.defaultView || o.parentWindow || window)
        }
        i = 0;
        while ((s = c[i++]) && !e.isPropagationStopped()) {
            e.type = i > 1 ? u : l.bindType || h;
            f = (data_priv.get(s, "events") || {})[e.type] && data_priv.get(s, "handle");
            f && f.apply(s, t);
            f = a && s[a];
            f && jQuery.acceptData(s) && f.apply && f.apply(s, t) === !1 && e.preventDefault()
        }
        e.type = h;
        if (!r && !e.isDefaultPrevented() && (!l._default || l._default.apply(c.pop(), t) === !1) && jQuery.acceptData(n) && a && jQuery.isFunction(n[h]) && !jQuery.isWindow(n)) {
            o = n[a];
            o && (n[a] = null);
            jQuery.event.triggered = h;
            n[h]();
            jQuery.event.triggered = undefined;
            o && (n[a] = o)
        }
        return e.result
    }, dispatch: function (e) {
        e = jQuery.event.fix(e);
        var t, n, r, i, s, o = [], u = core_slice.call(arguments), a = (data_priv.get(this, "events") || {})[e.type] || [], f = jQuery.event.special[e.type] || {};
        u[0] = e;
        e.delegateTarget = this;
        if (f.preDispatch && f.preDispatch.call(this, e) === !1)return;
        o = jQuery.event.handlers.call(this, e, a);
        t = 0;
        while ((i = o[t++]) && !e.isPropagationStopped()) {
            e.currentTarget = i.elem;
            n = 0;
            while ((s = i.handlers[n++]) && !e.isImmediatePropagationStopped())if (!e.namespace_re || e.namespace_re.test(s.namespace)) {
                e.handleObj = s;
                e.data = s.data;
                r = ((jQuery.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, u);
                if (r !== undefined && (e.result = r) === !1) {
                    e.preventDefault();
                    e.stopPropagation()
                }
            }
        }
        f.postDispatch && f.postDispatch.call(this, e);
        return e.result
    }, handlers: function (e, t) {
        var n, r, i, s, o = [], u = t.delegateCount, a = e.target;
        if (u && a.nodeType && (!e.button || e.type !== "click"))for (; a !== this; a = a.parentNode || this)if (a.disabled !== !0 || e.type !== "click") {
            r = [];
            for (n = 0; n < u; n++) {
                s = t[n];
                i = s.selector + " ";
                r[i] === undefined && (r[i] = s.needsContext ? jQuery(i, this).index(a) >= 0 : jQuery.find(i, this, null, [a]).length);
                r[i] && r.push(s)
            }
            r.length && o.push({elem: a, handlers: r})
        }
        u < t.length && o.push({elem: this, handlers: t.slice(u)});
        return o
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode);
        return e
    }}, mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, t) {
        var n, r, i, s = t.button;
        if (e.pageX == null && t.clientX != null) {
            n = e.target.ownerDocument || document;
            r = n.documentElement;
            i = n.body;
            e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0);
            e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)
        }
        !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0);
        return e
    }}, fix: function (e) {
        if (e[jQuery.expando])return e;
        var t, n, r, i = e.type, s = e, o = this.fixHooks[i];
        o || (this.fixHooks[i] = o = rmouseEvent.test(i) ? this.mouseHooks : rkeyEvent.test(i) ? this.keyHooks : {});
        r = o.props ? this.props.concat(o.props) : this.props;
        e = new jQuery.Event(s);
        t = r.length;
        while (t--) {
            n = r[t];
            e[n] = s[n]
        }
        e.target || (e.target = document);
        e.target.nodeType === 3 && (e.target = e.target.parentNode);
        return o.filter ? o.filter(e, s) : e
    }, special: {load: {noBubble: !0}, focus: {trigger: function () {
        if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return!1
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        if (this === safeActiveElement() && this.blur) {
            this.blur();
            return!1
        }
    }, delegateType: "focusout"}, click: {trigger: function () {
        if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
            this.click();
            return!1
        }
    }, _default: function (e) {
        return jQuery.nodeName(e.target, "a")
    }}, beforeunload: {postDispatch: function (e) {
        e.result !== undefined && (e.originalEvent.returnValue = e.result)
    }}}, simulate: function (e, t, n, r) {
        var i = jQuery.extend(new jQuery.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
        r ? jQuery.event.trigger(i, null, t) : jQuery.event.dispatch.call(t, i);
        i.isDefaultPrevented() && n.preventDefault()
    }};
    jQuery.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    };
    jQuery.Event = function (e, t) {
        if (!(this instanceof jQuery.Event))return new jQuery.Event(e, t);
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? returnTrue : returnFalse
        } else this.type = e;
        t && jQuery.extend(this, t);
        this.timeStamp = e && e.timeStamp || jQuery.now();
        this[jQuery.expando] = !0
    };
    jQuery.Event.prototype = {isDefaultPrevented: returnFalse, isPropagationStopped: returnFalse, isImmediatePropagationStopped: returnFalse, preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = returnTrue;
        e && e.preventDefault && e.preventDefault()
    }, stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = returnTrue;
        e && e.stopPropagation && e.stopPropagation()
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = returnTrue;
        this.stopPropagation()
    }};
    jQuery.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        jQuery.event.special[e] = {delegateType: t, bindType: t, handle: function (e) {
            var n, r = this, i = e.relatedTarget, s = e.handleObj;
            if (!i || i !== r && !jQuery.contains(r, i)) {
                e.type = s.origType;
                n = s.handler.apply(this, arguments);
                e.type = t
            }
            return n
        }}
    });
    jQuery.support.focusinBubbles || jQuery.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            jQuery.event.simulate(t, e.target, jQuery.event.fix(e), !0)
        };
        jQuery.event.special[t] = {setup: function () {
            n++ === 0 && document.addEventListener(e, r, !0)
        }, teardown: function () {
            --n === 0 && document.removeEventListener(e, r, !0)
        }}
    });
    jQuery.fn.extend({on: function (e, t, n, r, i) {
        var s, o;
        if (typeof e == "object") {
            if (typeof t != "string") {
                n = n || t;
                t = undefined
            }
            for (o in e)this.on(o, t, n, e[o], i);
            return this
        }
        if (n == null && r == null) {
            r = t;
            n = t = undefined
        } else if (r == null)if (typeof t == "string") {
            r = n;
            n = undefined
        } else {
            r = n;
            n = t;
            t = undefined
        }
        if (r === !1)r = returnFalse; else if (!r)return this;
        if (i === 1) {
            s = r;
            r = function (e) {
                jQuery().off(e);
                return s.apply(this, arguments)
            };
            r.guid = s.guid || (s.guid = jQuery.guid++)
        }
        return this.each(function () {
            jQuery.event.add(this, e, r, n, t)
        })
    }, one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1)
    }, off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) {
            r = e.handleObj;
            jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
            return this
        }
        if (typeof e == "object") {
            for (i in e)this.off(i, t, e[i]);
            return this
        }
        if (t === !1 || typeof t == "function") {
            n = t;
            t = undefined
        }
        n === !1 && (n = returnFalse);
        return this.each(function () {
            jQuery.event.remove(this, e, n, t)
        })
    }, trigger: function (e, t) {
        return this.each(function () {
            jQuery.event.trigger(e, t, this)
        })
    }, triggerHandler: function (e, t) {
        var n = this[0];
        if (n)return jQuery.event.trigger(e, t, n, !0)
    }});
    var isSimple = /^.[^:#\[\.,]*$/, rparentsprev = /^(?:parents|prev(?:Until|All))/, rneedsContext = jQuery.expr.match.needsContext, guaranteedUnique = {children: !0, contents: !0, next: !0, prev: !0};
    jQuery.fn.extend({find: function (e) {
        var t, n = [], r = this, i = r.length;
        if (typeof e != "string")return this.pushStack(jQuery(e).filter(function () {
            for (t = 0; t < i; t++)if (jQuery.contains(r[t], this))return!0
        }));
        for (t = 0; t < i; t++)jQuery.find(e, r[t], n);
        n = this.pushStack(i > 1 ? jQuery.unique(n) : n);
        n.selector = this.selector ? this.selector + " " + e : e;
        return n
    }, has: function (e) {
        var t = jQuery(e, this), n = t.length;
        return this.filter(function () {
            var e = 0;
            for (; e < n; e++)if (jQuery.contains(this, t[e]))return!0
        })
    }, not: function (e) {
        return this.pushStack(winnow(this, e || [], !0))
    }, filter: function (e) {
        return this.pushStack(winnow(this, e || [], !1))
    }, is: function (e) {
        return!!winnow(this, typeof e == "string" && rneedsContext.test(e) ? jQuery(e) : e || [], !1).length
    }, closest: function (e, t) {
        var n, r = 0, i = this.length, s = [], o = rneedsContext.test(e) || typeof e != "string" ? jQuery(e, t || this.context) : 0;
        for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && jQuery.find.matchesSelector(n, e))) {
            n = s.push(n);
            break
        }
        return this.pushStack(s.length > 1 ? jQuery.unique(s) : s)
    }, index: function (e) {
        return e ? typeof e == "string" ? core_indexOf.call(jQuery(e), this[0]) : core_indexOf.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
        var n = typeof e == "string" ? jQuery(e, t) : jQuery.makeArray(e && e.nodeType ? [e] : e), r = jQuery.merge(this.get(), n);
        return this.pushStack(jQuery.unique(r))
    }, addBack: function (e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }});
    jQuery.each({parent: function (e) {
        var t = e.parentNode;
        return t && t.nodeType !== 11 ? t : null
    }, parents: function (e) {
        return jQuery.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
        return jQuery.dir(e, "parentNode", n)
    }, next: function (e) {
        return sibling(e, "nextSibling")
    }, prev: function (e) {
        return sibling(e, "previousSibling")
    }, nextAll: function (e) {
        return jQuery.dir(e, "nextSibling")
    }, prevAll: function (e) {
        return jQuery.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
        return jQuery.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
        return jQuery.dir(e, "previousSibling", n)
    }, siblings: function (e) {
        return jQuery.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
        return jQuery.sibling(e.firstChild)
    }, contents: function (e) {
        return e.contentDocument || jQuery.merge([], e.childNodes)
    }}, function (e, t) {
        jQuery.fn[e] = function (n, r) {
            var i = jQuery.map(this, t, n);
            e.slice(-5) !== "Until" && (r = n);
            r && typeof r == "string" && (i = jQuery.filter(r, i));
            if (this.length > 1) {
                guaranteedUnique[e] || jQuery.unique(i);
                rparentsprev.test(e) && i.reverse()
            }
            return this.pushStack(i)
        }
    });
    jQuery.extend({filter: function (e, t, n) {
        var r = t[0];
        n && (e = ":not(" + e + ")");
        return t.length === 1 && r.nodeType === 1 ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, function (e) {
            return e.nodeType === 1
        }))
    }, dir: function (e, t, n) {
        var r = [], i = n !== undefined;
        while ((e = e[t]) && e.nodeType !== 9)if (e.nodeType === 1) {
            if (i && jQuery(e).is(n))break;
            r.push(e)
        }
        return r
    }, sibling: function (e, t) {
        var n = [];
        for (; e; e = e.nextSibling)e.nodeType === 1 && e !== t && n.push(e);
        return n
    }});
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, manipulation_rcheckableType = /^(?:checkbox|radio)$/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    jQuery.fn.extend({text: function (e) {
        return jQuery.access(this, function (e) {
            return e === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(e))
        }, null, e, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var t = manipulationTarget(this, e);
                t.appendChild(e)
            }
        })
    }, prepend: function () {
        return this.domManip(arguments, function (e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var t = manipulationTarget(this, e);
                t.insertBefore(e, t.firstChild)
            }
        })
    }, before: function () {
        return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    }, remove: function (e, t) {
        var n, r = e ? jQuery.filter(e, this) : this, i = 0;
        for (; (n = r[i]) != null; i++) {
            !t && n.nodeType === 1 && jQuery.cleanData(getAll(n));
            if (n.parentNode) {
                t && jQuery.contains(n.ownerDocument, n) && setGlobalEval(getAll(n, "script"));
                n.parentNode.removeChild(n)
            }
        }
        return this
    }, empty: function () {
        var e, t = 0;
        for (; (e = this[t]) != null; t++)if (e.nodeType === 1) {
            jQuery.cleanData(getAll(e, !1));
            e.textContent = ""
        }
        return this
    }, clone: function (e, t) {
        e = e == null ? !1 : e;
        t = t == null ? e : t;
        return this.map(function () {
            return jQuery.clone(this, e, t)
        })
    }, html: function (e) {
        return jQuery.access(this, function (e) {
            var t = this[0] || {}, n = 0, r = this.length;
            if (e === undefined && t.nodeType === 1)return t.innerHTML;
            if (typeof e == "string" && !rnoInnerhtml.test(e) && !wrapMap[(rtagName.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = e.replace(rxhtmlTag, "<$1></$2>");
                try {
                    for (; n < r; n++) {
                        t = this[n] || {};
                        if (t.nodeType === 1) {
                            jQuery.cleanData(getAll(t, !1));
                            t.innerHTML = e
                        }
                    }
                    t = 0
                } catch (i) {
                }
            }
            t && this.empty().append(e)
        }, null, e, arguments.length)
    }, replaceWith: function () {
        var e = jQuery.map(this, function (e) {
            return[e.nextSibling, e.parentNode]
        }), t = 0;
        this.domManip(arguments, function (n) {
            var r = e[t++], i = e[t++];
            if (i) {
                r && r.parentNode !== i && (r = this.nextSibling);
                jQuery(this).remove();
                i.insertBefore(n, r)
            }
        }, !0);
        return t ? this : this.remove()
    }, detach: function (e) {
        return this.remove(e, !0)
    }, domManip: function (e, t, n) {
        e = core_concat.apply([], e);
        var r, i, s, o, u, a, f = 0, l = this.length, c = this, h = l - 1, p = e[0], d = jQuery.isFunction(p);
        if (d || !(l <= 1 || typeof p != "string" || jQuery.support.checkClone || !rchecked.test(p)))return this.each(function (r) {
            var i = c.eq(r);
            d && (e[0] = p.call(this, r, i.html()));
            i.domManip(e, t, n)
        });
        if (l) {
            r = jQuery.buildFragment(e, this[0].ownerDocument, !1, !n && this);
            i = r.firstChild;
            r.childNodes.length === 1 && (r = i);
            if (i) {
                s = jQuery.map(getAll(r, "script"), disableScript);
                o = s.length;
                for (; f < l; f++) {
                    u = r;
                    if (f !== h) {
                        u = jQuery.clone(u, !0, !0);
                        o && jQuery.merge(s, getAll(u, "script"))
                    }
                    t.call(this[f], u, f)
                }
                if (o) {
                    a = s[s.length - 1].ownerDocument;
                    jQuery.map(s, restoreScript);
                    for (f = 0; f < o; f++) {
                        u = s[f];
                        rscriptType.test(u.type || "") && !data_priv.access(u, "globalEval") && jQuery.contains(a, u) && (u.src ? jQuery._evalUrl(u.src) : jQuery.globalEval(u.textContent.replace(rcleanScript, "")))
                    }
                }
            }
        }
        return this
    }});
    jQuery.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        jQuery.fn[e] = function (e) {
            var n, r = [], i = jQuery(e), s = i.length - 1, o = 0;
            for (; o <= s; o++) {
                n = o === s ? this : this.clone(!0);
                jQuery(i[o])[t](n);
                core_push.apply(r, n.get())
            }
            return this.pushStack(r)
        }
    });
    jQuery.extend({clone: function (e, t, n) {
        var r, i, s, o, u = e.cloneNode(!0), a = jQuery.contains(e.ownerDocument, e);
        if (!jQuery.support.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !jQuery.isXMLDoc(e)) {
            o = getAll(u);
            s = getAll(e);
            for (r = 0, i = s.length; r < i; r++)fixInput(s[r], o[r])
        }
        if (t)if (n) {
            s = s || getAll(e);
            o = o || getAll(u);
            for (r = 0, i = s.length; r < i; r++)cloneCopyEvent(s[r], o[r])
        } else cloneCopyEvent(e, u);
        o = getAll(u, "script");
        o.length > 0 && setGlobalEval(o, !a && getAll(e, "script"));
        return u
    }, buildFragment: function (e, t, n, r) {
        var i, s, o, u, a, f, l = 0, c = e.length, h = t.createDocumentFragment(), p = [];
        for (; l < c; l++) {
            i = e[l];
            if (i || i === 0)if (jQuery.type(i) === "object")jQuery.merge(p, i.nodeType ? [i] : i); else if (!rhtml.test(i))p.push(t.createTextNode(i)); else {
                s = s || h.appendChild(t.createElement("div"));
                o = (rtagName.exec(i) || ["", ""])[1].toLowerCase();
                u = wrapMap[o] || wrapMap._default;
                s.innerHTML = u[1] + i.replace(rxhtmlTag, "<$1></$2>") + u[2];
                f = u[0];
                while (f--)s = s.lastChild;
                jQuery.merge(p, s.childNodes);
                s = h.firstChild;
                s.textContent = ""
            }
        }
        h.textContent = "";
        l = 0;
        while (i = p[l++]) {
            if (r && jQuery.inArray(i, r) !== -1)continue;
            a = jQuery.contains(i.ownerDocument, i);
            s = getAll(h.appendChild(i), "script");
            a && setGlobalEval(s);
            if (n) {
                f = 0;
                while (i = s[f++])rscriptType.test(i.type || "") && n.push(i)
            }
        }
        return h
    }, cleanData: function (e) {
        var t, n, r, i, s, o, u = jQuery.event.special, a = 0;
        for (; (n = e[a]) !== undefined; a++) {
            if (Data.accepts(n)) {
                s = n[data_priv.expando];
                if (s && (t = data_priv.cache[s])) {
                    r = Object.keys(t.events || {});
                    if (r.length)for (o = 0; (i = r[o]) !== undefined; o++)u[i] ? jQuery.event.remove(n, i) : jQuery.removeEvent(n, i, t.handle);
                    data_priv.cache[s] && delete data_priv.cache[s]
                }
            }
            delete data_user.cache[n[data_user.expando]]
        }
    }, _evalUrl: function (e) {
        return jQuery.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }});
    jQuery.fn.extend({wrapAll: function (e) {
        var t;
        if (jQuery.isFunction(e))return this.each(function (t) {
            jQuery(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
            t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]);
            t.map(function () {
                var e = this;
                while (e.firstElementChild)e = e.firstElementChild;
                return e
            }).append(this)
        }
        return this
    }, wrapInner: function (e) {
        return jQuery.isFunction(e) ? this.each(function (t) {
            jQuery(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
            var t = jQuery(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
    }, wrap: function (e) {
        var t = jQuery.isFunction(e);
        return this.each(function (n) {
            jQuery(this).wrapAll(t ? e.call(this, n) : e)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
        }).end()
    }});
    var curCSS, iframe, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rmargin = /^margin/, rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"), elemdisplay = {BODY: "block"}, cssShow = {position: "absolute", visibility: "hidden", display: "block"}, cssNormalTransform = {letterSpacing: 0, fontWeight: 400}, cssExpand = ["Top", "Right", "Bottom", "Left"], cssPrefixes = ["Webkit", "O", "Moz", "ms"];
    jQuery.fn.extend({css: function (e, t) {
        return jQuery.access(this, function (e, t, n) {
            var r, i, s = {}, o = 0;
            if (jQuery.isArray(t)) {
                r = getStyles(e);
                i = t.length;
                for (; o < i; o++)s[t[o]] = jQuery.css(e, t[o], !1, r);
                return s
            }
            return n !== undefined ? jQuery.style(e, t, n) : jQuery.css(e, t)
        }, e, t, arguments.length > 1)
    }, show: function () {
        return showHide(this, !0)
    }, hide: function () {
        return showHide(this)
    }, toggle: function (e) {
        return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function () {
            isHidden(this) ? jQuery(this).show() : jQuery(this).hide()
        })
    }});
    jQuery.extend({cssHooks: {opacity: {get: function (e, t) {
        if (t) {
            var n = curCSS(e, "opacity");
            return n === "" ? "1" : n
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function (e, t, n, r) {
        if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)return;
        var i, s, o, u = jQuery.camelCase(t), a = e.style;
        t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(a, u));
        o = jQuery.cssHooks[t] || jQuery.cssHooks[u];
        if (n === undefined)return o && "get"in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
        s = typeof n;
        if (s === "string" && (i = rrelNum.exec(n))) {
            n = (i[1] + 1) * i[2] + parseFloat(jQuery.css(e, t));
            s = "number"
        }
        if (n == null || s === "number" && isNaN(n))return;
        s === "number" && !jQuery.cssNumber[u] && (n += "px");
        !jQuery.support.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
        if (!o || !("set"in o) || (n = o.set(e, n, r)) !== undefined)a[t] = n
    }, css: function (e, t, n, r) {
        var i, s, o, u = jQuery.camelCase(t);
        t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(e.style, u));
        o = jQuery.cssHooks[t] || jQuery.cssHooks[u];
        o && "get"in o && (i = o.get(e, !0, n));
        i === undefined && (i = curCSS(e, t, r));
        i === "normal" && t in cssNormalTransform && (i = cssNormalTransform[t]);
        if (n === "" || n) {
            s = parseFloat(i);
            return n === !0 || jQuery.isNumeric(s) ? s || 0 : i
        }
        return i
    }});
    curCSS = function (e, t, n) {
        var r, i, s, o = n || getStyles(e), u = o ? o.getPropertyValue(t) || o[t] : undefined, a = e.style;
        if (o) {
            u === "" && !jQuery.contains(e.ownerDocument, e) && (u = jQuery.style(e, t));
            if (rnumnonpx.test(u) && rmargin.test(t)) {
                r = a.width;
                i = a.minWidth;
                s = a.maxWidth;
                a.minWidth = a.maxWidth = a.width = u;
                u = o.width;
                a.width = r;
                a.minWidth = i;
                a.maxWidth = s
            }
        }
        return u
    };
    jQuery.each(["height", "width"], function (e, t) {
        jQuery.cssHooks[t] = {get: function (e, n, r) {
            if (n)return e.offsetWidth === 0 && rdisplayswap.test(jQuery.css(e, "display")) ? jQuery.swap(e, cssShow, function () {
                return getWidthOrHeight(e, t, r)
            }) : getWidthOrHeight(e, t, r)
        }, set: function (e, n, r) {
            var i = r && getStyles(e);
            return setPositiveNumber(e, n, r ? augmentWidthOrHeight(e, t, r, jQuery.support.boxSizing && jQuery.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
        }}
    });
    jQuery(function () {
        jQuery.support.reliableMarginRight || (jQuery.cssHooks.marginRight = {get: function (e, t) {
            if (t)return jQuery.swap(e, {display: "inline-block"}, curCSS, [e, "marginRight"])
        }});
        !jQuery.support.pixelPosition && jQuery.fn.position && jQuery.each(["top", "left"], function (e, t) {
            jQuery.cssHooks[t] = {get: function (e, n) {
                if (n) {
                    n = curCSS(e, t);
                    return rnumnonpx.test(n) ? jQuery(e).position()[t] + "px" : n
                }
            }}
        })
    });
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        };
        jQuery.expr.filters.visible = function (e) {
            return!jQuery.expr.filters.hidden(e)
        }
    }
    jQuery.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        jQuery.cssHooks[e + t] = {expand: function (n) {
            var r = 0, i = {}, s = typeof n == "string" ? n.split(" ") : [n];
            for (; r < 4; r++)i[e + cssExpand[r] + t] = s[r] || s[r - 2] || s[0];
            return i
        }};
        rmargin.test(e) || (jQuery.cssHooks[e + t].set = setPositiveNumber)
    });
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.fn.extend({serialize: function () {
        return jQuery.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var e = jQuery.prop(this, "elements");
            return e ? jQuery.makeArray(e) : this
        }).filter(function () {
            var e = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(e) && (this.checked || !manipulation_rcheckableType.test(e))
        }).map(function (e, t) {
            var n = jQuery(this).val();
            return n == null ? null : jQuery.isArray(n) ? jQuery.map(n, function (e) {
                return{name: t.name, value: e.replace(rCRLF, "\r\n")}
            }) : {name: t.name, value: n.replace(rCRLF, "\r\n")}
        }).get()
    }});
    jQuery.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = jQuery.isFunction(t) ? t() : t == null ? "" : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        t === undefined && (t = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional);
        if (jQuery.isArray(e) || e.jquery && !jQuery.isPlainObject(e))jQuery.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)buildParams(n, e[n], t, i);
        return r.join("&").replace(r20, "+")
    };
    jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        jQuery.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    jQuery.fn.extend({hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }, bind: function (e, t, n) {
        return this.on(e, null, t, n)
    }, unbind: function (e, t) {
        return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
    }});
    var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(), ajax_rquery = /\?/, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _load = jQuery.fn.load, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href
    } catch (e) {
        ajaxLocation = document.createElement("a");
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    jQuery.fn.load = function (e, t, n) {
        if (typeof e != "string" && _load)return _load.apply(this, arguments);
        var r, i, s, o = this, u = e.indexOf(" ");
        if (u >= 0) {
            r = e.slice(u);
            e = e.slice(0, u)
        }
        if (jQuery.isFunction(t)) {
            n = t;
            t = undefined
        } else t && typeof t == "object" && (i = "POST");
        o.length > 0 && jQuery.ajax({url: e, type: i, dataType: "html", data: t}).done(function (e) {
            s = arguments;
            o.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            o.each(n, s || [e.responseText, t, e])
        });
        return this
    };
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        jQuery.fn[t] = function (e) {
            return this.on(t, e)
        }
    });
    jQuery.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: ajaxLocation, type: "GET", isLocal: rlocalProtocol.test(ajaxLocParts[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": allTypes, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (e, t) {
        return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
    }, ajaxPrefilter: addToPrefiltersOrTransports(prefilters), ajaxTransport: addToPrefiltersOrTransports(transports), ajax: function (e, t) {
        function n(e, t, n, o) {
            var a, l, g, y, w, S = t;
            if (b === 2)return;
            b = 2;
            u && clearTimeout(u);
            r = undefined;
            s = o || "";
            E.readyState = e > 0 ? 4 : 0;
            a = e >= 200 && e < 300 || e === 304;
            n && (y = ajaxHandleResponses(c, E, n));
            y = ajaxConvert(c, y, E, a);
            if (a) {
                if (c.ifModified) {
                    w = E.getResponseHeader("Last-Modified");
                    w && (jQuery.lastModified[i] = w);
                    w = E.getResponseHeader("etag");
                    w && (jQuery.etag[i] = w)
                }
                if (e === 204 || c.type === "HEAD")S = "nocontent"; else if (e === 304)S = "notmodified"; else {
                    S = y.state;
                    l = y.data;
                    g = y.error;
                    a = !g
                }
            } else {
                g = S;
                if (e || !S) {
                    S = "error";
                    e < 0 && (e = 0)
                }
            }
            E.status = e;
            E.statusText = (t || S) + "";
            a ? d.resolveWith(h, [l, S, E]) : d.rejectWith(h, [E, S, g]);
            E.statusCode(m);
            m = undefined;
            f && p.trigger(a ? "ajaxSuccess" : "ajaxError", [E, c, a ? l : g]);
            v.fireWith(h, [E, S]);
            if (f) {
                p.trigger("ajaxComplete", [E, c]);
                --jQuery.active || jQuery.event.trigger("ajaxStop")
            }
        }

        if (typeof e == "object") {
            t = e;
            e = undefined
        }
        t = t || {};
        var r, i, s, o, u, a, f, l, c = jQuery.ajaxSetup({}, t), h = c.context || c, p = c.context && (h.nodeType || h.jquery) ? jQuery(h) : jQuery.event, d = jQuery.Deferred(), v = jQuery.Callbacks("once memory"), m = c.statusCode || {}, g = {}, y = {}, b = 0, w = "canceled", E = {readyState: 0, getResponseHeader: function (e) {
            var t;
            if (b === 2) {
                if (!o) {
                    o = {};
                    while (t = rheaders.exec(s))o[t[1].toLowerCase()] = t[2]
                }
                t = o[e.toLowerCase()]
            }
            return t == null ? null : t
        }, getAllResponseHeaders: function () {
            return b === 2 ? s : null
        }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            if (!b) {
                e = y[n] = y[n] || e;
                g[e] = t
            }
            return this
        }, overrideMimeType: function (e) {
            b || (c.mimeType = e);
            return this
        }, statusCode: function (e) {
            var t;
            if (e)if (b < 2)for (t in e)m[t] = [m[t], e[t]]; else E.always(e[E.status]);
            return this
        }, abort: function (e) {
            var t = e || w;
            r && r.abort(t);
            n(0, t);
            return this
        }};
        d.promise(E).complete = v.add;
        E.success = E.done;
        E.error = E.fail;
        c.url = ((e || c.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
        c.type = t.method || t.type || c.method || c.type;
        c.dataTypes = jQuery.trim(c.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];
        if (c.crossDomain == null) {
            a = rurl.exec(c.url.toLowerCase());
            c.crossDomain = !(!a || a[1] === ajaxLocParts[1] && a[2] === ajaxLocParts[2] && (a[3] || (a[1] === "http:" ? "80" : "443")) === (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))
        }
        c.data && c.processData && typeof c.data != "string" && (c.data = jQuery.param(c.data, c.traditional));
        inspectPrefiltersOrTransports(prefilters, c, t, E);
        if (b === 2)return E;
        f = c.global;
        f && jQuery.active++ === 0 && jQuery.event.trigger("ajaxStart");
        c.type = c.type.toUpperCase();
        c.hasContent = !rnoContent.test(c.type);
        i = c.url;
        if (!c.hasContent) {
            if (c.data) {
                i = c.url += (ajax_rquery.test(i) ? "&" : "?") + c.data;
                delete c.data
            }
            c.cache === !1 && (c.url = rts.test(i) ? i.replace(rts, "$1_=" + ajax_nonce++) : i + (ajax_rquery.test(i) ? "&" : "?") + "_=" + ajax_nonce++)
        }
        if (c.ifModified) {
            jQuery.lastModified[i] && E.setRequestHeader("If-Modified-Since", jQuery.lastModified[i]);
            jQuery.etag[i] && E.setRequestHeader("If-None-Match", jQuery.etag[i])
        }
        (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", c.contentType);
        E.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : c.accepts["*"]);
        for (l in c.headers)E.setRequestHeader(l, c.headers[l]);
        if (!c.beforeSend || c.beforeSend.call(h, E, c) !== !1 && b !== 2) {
            w = "abort";
            for (l in{success: 1, error: 1, complete: 1})E[l](c[l]);
            r = inspectPrefiltersOrTransports(transports, c, t, E);
            if (!r)n(-1, "No Transport"); else {
                E.readyState = 1;
                f && p.trigger("ajaxSend", [E, c]);
                c.async && c.timeout > 0 && (u = setTimeout(function () {
                    E.abort("timeout")
                }, c.timeout));
                try {
                    b = 1;
                    r.send(g, n)
                } catch (S) {
                    if (!(b < 2))throw S;
                    n(-1, S)
                }
            }
            return E
        }
        return E.abort()
    }, getJSON: function (e, t, n) {
        return jQuery.get(e, t, n, "json")
    }, getScript: function (e, t) {
        return jQuery.get(e, undefined, t, "script")
    }});
    jQuery.each(["get", "post"], function (e, t) {
        jQuery[t] = function (e, n, r, i) {
            if (jQuery.isFunction(n)) {
                i = i || r;
                r = n;
                n = undefined
            }
            return jQuery.ajax({url: e, type: t, dataType: i, data: n, success: r})
        }
    });
    jQuery.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (e) {
        jQuery.globalEval(e);
        return e
    }}});
    jQuery.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1);
        e.crossDomain && (e.type = "GET")
    });
    jQuery.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return{send: function (r, i) {
                t = jQuery("<script>").prop({async: !0, charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                    t.remove();
                    n = null;
                    e && i(e.type === "error" ? 404 : 200, e.type)
                });
                document.head.appendChild(t[0])
            }, abort: function () {
                n && n()
            }}
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var e = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
        this[e] = !0;
        return e
    }});
    jQuery.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, s, o = e.jsonp !== !1 && (rjsonp.test(e.url) ? "url" : typeof e.data == "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(e.data) && "data");
        if (o || e.dataTypes[0] === "jsonp") {
            r = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
            o ? e[o] = e[o].replace(rjsonp, "$1" + r) : e.jsonp !== !1 && (e.url += (ajax_rquery.test(e.url) ? "&" : "?") + e.jsonp + "=" + r);
            e.converters["script json"] = function () {
                s || jQuery.error(r + " was not called");
                return s[0]
            };
            e.dataTypes[0] = "json";
            i = window[r];
            window[r] = function () {
                s = arguments
            };
            n.always(function () {
                window[r] = i;
                if (e[r]) {
                    e.jsonpCallback = t.jsonpCallback;
                    oldCallbacks.push(r)
                }
                s && jQuery.isFunction(i) && i(s[0]);
                s = i = undefined
            });
            return"script"
        }
    });
    jQuery.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var xhrSupported = jQuery.ajaxSettings.xhr(), xhrSuccessStatus = {0: 200, 1223: 204}, xhrId = 0, xhrCallbacks = {};
    window.ActiveXObject && jQuery(window).on("unload", function () {
        for (var e in xhrCallbacks)xhrCallbacks[e]();
        xhrCallbacks = undefined
    });
    jQuery.support.cors = !!xhrSupported && "withCredentials"in xhrSupported;
    jQuery.support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function (e) {
        var t;
        if (jQuery.support.cors || xhrSupported && !e.crossDomain)return{send: function (n, r) {
            var i, s, o = e.xhr();
            o.open(e.type, e.url, e.async, e.username, e.password);
            if (e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
            e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType);
            !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
            for (i in n)o.setRequestHeader(i, n[i]);
            t = function (e) {
                return function () {
                    if (t) {
                        delete xhrCallbacks[s];
                        t = o.onload = o.onerror = null;
                        e === "abort" ? o.abort() : e === "error" ? r(o.status || 404, o.statusText) : r(xhrSuccessStatus[o.status] || o.status, o.statusText, typeof o.responseText == "string" ? {text: o.responseText} : undefined, o.getAllResponseHeaders())
                    }
                }
            };
            o.onload = t();
            o.onerror = t("error");
            t = xhrCallbacks[s = xhrId++] = t("abort");
            o.send(e.hasContent && e.data || null)
        }, abort: function () {
            t && t()
        }}
    });
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [defaultPrefilter], tweeners = {"*": [function (e, t) {
        var n = this.createTween(e, t), r = n.cur(), i = rfxnum.exec(t), s = i && i[3] || (jQuery.cssNumber[e] ? "" : "px"), o = (jQuery.cssNumber[e] || s !== "px" && +r) && rfxnum.exec(jQuery.css(n.elem, e)), u = 1, a = 20;
        if (o && o[3] !== s) {
            s = s || o[3];
            i = i || [];
            o = +r || 1;
            do {
                u = u || ".5";
                o /= u;
                jQuery.style(n.elem, e, o + s)
            } while (u !== (u = n.cur() / r) && u !== 1 && --a)
        }
        if (i) {
            o = n.start = +o || +r || 0;
            n.unit = s;
            n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]
        }
        return n
    }]};
    jQuery.Animation = jQuery.extend(Animation, {tweener: function (e, t) {
        if (jQuery.isFunction(e)) {
            t = e;
            e = ["*"]
        } else e = e.split(" ");
        var n, r = 0, i = e.length;
        for (; r < i; r++) {
            n = e[r];
            tweeners[n] = tweeners[n] || [];
            tweeners[n].unshift(t)
        }
    }, prefilter: function (e, t) {
        t ? animationPrefilters.unshift(e) : animationPrefilters.push(e)
    }});
    jQuery.Tween = Tween;
    Tween.prototype = {constructor: Tween, init: function (e, t, n, r, i, s) {
        this.elem = e;
        this.prop = n;
        this.easing = i || "swing";
        this.options = t;
        this.start = this.now = this.cur();
        this.end = r;
        this.unit = s || (jQuery.cssNumber[n] ? "" : "px")
    }, cur: function () {
        var e = Tween.propHooks[this.prop];
        return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
    }, run: function (e) {
        var t, n = Tween.propHooks[this.prop];
        this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e;
        this.now = (this.end - this.start) * t + this.start;
        this.options.step && this.options.step.call(this.elem, this.now, this);
        n && n.set ? n.set(this) : Tween.propHooks._default.set(this);
        return this
    }};
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {_default: {get: function (e) {
        var t;
        if (e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null) {
            t = jQuery.css(e.elem, e.prop, "");
            return!t || t === "auto" ? 0 : t
        }
        return e.elem[e.prop]
    }, set: function (e) {
        jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : e.elem.style && (e.elem.style[jQuery.cssProps[e.prop]] != null || jQuery.cssHooks[e.prop]) ? jQuery.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }}};
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }};
    jQuery.each(["toggle", "show", "hide"], function (e, t) {
        var n = jQuery.fn[t];
        jQuery.fn[t] = function (e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, i)
        }
    });
    jQuery.fn.extend({fadeTo: function (e, t, n, r) {
        return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (e, t, n, r) {
        var i = jQuery.isEmptyObject(e), s = jQuery.speed(t, n, r), o = function () {
            var t = Animation(this, jQuery.extend({}, e), s);
            (i || data_priv.get(this, "finish")) && t.stop(!0)
        };
        o.finish = o;
        return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
    }, stop: function (e, t, n) {
        var r = function (e) {
            var t = e.stop;
            delete e.stop;
            t(n)
        };
        if (typeof e != "string") {
            n = t;
            t = e;
            e = undefined
        }
        t && e !== !1 && this.queue(e || "fx", []);
        return this.each(function () {
            var t = !0, i = e != null && e + "queueHooks", s = jQuery.timers, o = data_priv.get(this);
            if (i)o[i] && o[i].stop && r(o[i]); else for (i in o)o[i] && o[i].stop && rrun.test(i) && r(o[i]);
            for (i = s.length; i--;)if (s[i].elem === this && (e == null || s[i].queue === e)) {
                s[i].anim.stop(n);
                t = !1;
                s.splice(i, 1)
            }
            (t || !n) && jQuery.dequeue(this, e)
        })
    }, finish: function (e) {
        e !== !1 && (e = e || "fx");
        return this.each(function () {
            var t, n = data_priv.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = jQuery.timers, o = r ? r.length : 0;
            n.finish = !0;
            jQuery.queue(this, e, []);
            i && i.stop && i.stop.call(this, !0);
            for (t = s.length; t--;)if (s[t].elem === this && s[t].queue === e) {
                s[t].anim.stop(!0);
                s.splice(t, 1)
            }
            for (t = 0; t < o; t++)r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
        })
    }});
    jQuery.each({slideDown: genFx("show"), slideUp: genFx("hide"), slideToggle: genFx("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
        jQuery.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    });
    jQuery.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? jQuery.extend({}, e) : {complete: n || !n && t || jQuery.isFunction(e) && e, duration: e, easing: n && t || t && !jQuery.isFunction(t) && t};
        r.duration = jQuery.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in jQuery.fx.speeds ? jQuery.fx.speeds[r.duration] : jQuery.fx.speeds._default;
        if (r.queue == null || r.queue === !0)r.queue = "fx";
        r.old = r.complete;
        r.complete = function () {
            jQuery.isFunction(r.old) && r.old.call(this);
            r.queue && jQuery.dequeue(this, r.queue)
        };
        return r
    };
    jQuery.easing = {linear: function (e) {
        return e
    }, swing: function (e) {
        return.5 - Math.cos(e * Math.PI) / 2
    }};
    jQuery.timers = [];
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.tick = function () {
        var e, t = jQuery.timers, n = 0;
        fxNow = jQuery.now();
        for (; n < t.length; n++) {
            e = t[n];
            !e() && t[n] === e && t.splice(n--, 1)
        }
        t.length || jQuery.fx.stop();
        fxNow = undefined
    };
    jQuery.fx.timer = function (e) {
        e() && jQuery.timers.push(e) && jQuery.fx.start()
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function () {
        timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
    };
    jQuery.fx.stop = function () {
        clearInterval(timerId);
        timerId = null
    };
    jQuery.fx.speeds = {slow: 600, fast: 200, _default: 400};
    jQuery.fx.step = {};
    jQuery.expr && jQuery.expr.filters && (jQuery.expr.filters.animated = function (e) {
        return jQuery.grep(jQuery.timers,function (t) {
            return e === t.elem
        }).length
    });
    jQuery.fn.offset = function (e) {
        if (arguments.length)return e === undefined ? this : this.each(function (t) {
            jQuery.offset.setOffset(this, e, t)
        });
        var t, n, r = this[0], i = {top: 0, left: 0}, s = r && r.ownerDocument;
        if (!s)return;
        t = s.documentElement;
        if (!jQuery.contains(t, r))return i;
        typeof r.getBoundingClientRect !== core_strundefined && (i = r.getBoundingClientRect());
        n = getWindow(s);
        return{top: i.top + n.pageYOffset - t.clientTop, left: i.left + n.pageXOffset - t.clientLeft}
    };
    jQuery.offset = {setOffset: function (e, t, n) {
        var r, i, s, o, u, a, f, l = jQuery.css(e, "position"), c = jQuery(e), h = {};
        l === "static" && (e.style.position = "relative");
        u = c.offset();
        s = jQuery.css(e, "top");
        a = jQuery.css(e, "left");
        f = (l === "absolute" || l === "fixed") && (s + a).indexOf("auto") > -1;
        if (f) {
            r = c.position();
            o = r.top;
            i = r.left
        } else {
            o = parseFloat(s) || 0;
            i = parseFloat(a) || 0
        }
        jQuery.isFunction(t) && (t = t.call(e, n, u));
        t.top != null && (h.top = t.top - u.top + o);
        t.left != null && (h.left = t.left - u.left + i);
        "using"in t ? t.using.call(e, h) : c.css(h)
    }};
    jQuery.fn.extend({position: function () {
        if (!this[0])return;
        var e, t, n = this[0], r = {top: 0, left: 0};
        if (jQuery.css(n, "position") === "fixed")t = n.getBoundingClientRect(); else {
            e = this.offsetParent();
            t = this.offset();
            jQuery.nodeName(e[0], "html") || (r = e.offset());
            r.top += jQuery.css(e[0], "borderTopWidth", !0);
            r.left += jQuery.css(e[0], "borderLeftWidth", !0)
        }
        return{top: t.top - r.top - jQuery.css(n, "marginTop", !0), left: t.left - r.left - jQuery.css(n, "marginLeft", !0)}
    }, offsetParent: function () {
        return this.map(function () {
            var e = this.offsetParent || docElem;
            while (e && !jQuery.nodeName(e, "html") && jQuery.css(e, "position") === "static")e = e.offsetParent;
            return e || docElem
        })
    }});
    jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        jQuery.fn[e] = function (r) {
            return jQuery.access(this, function (e, r, i) {
                var s = getWindow(e);
                if (i === undefined)return s ? s[t] : e[r];
                s ? s.scrollTo(n ? window.pageXOffset : i, n ? i : window.pageYOffset) : e[r] = i
            }, e, r, arguments.length, null)
        }
    });
    jQuery.each({Height: "height", Width: "width"}, function (e, t) {
        jQuery.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            jQuery.fn[r] = function (r, i) {
                var s = arguments.length && (n || typeof r != "boolean"), o = n || (r === !0 || i === !0 ? "margin" : "border");
                return jQuery.access(this, function (t, n, r) {
                    var i;
                    if (jQuery.isWindow(t))return t.document.documentElement["client" + e];
                    if (t.nodeType === 9) {
                        i = t.documentElement;
                        return Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])
                    }
                    return r === undefined ? jQuery.css(t, n, o) : jQuery.style(t, n, r, o)
                }, t, s ? r : undefined, s, null)
            }
        })
    });
    jQuery.fn.size = function () {
        return this.length
    };
    jQuery.fn.andSelf = jQuery.fn.addBack;
    typeof module == "object" && module && typeof module.exports == "object" ? module.exports = jQuery : typeof define == "function" && define.amd && define("jquery", [], function () {
        return jQuery
    });
    typeof window == "object" && typeof window.document == "object" && (window.jQuery = window.$ = jQuery)
})(window);
+function (e) {
    "use strict";
    var t = function (n, r) {
        this.options = e.extend({}, t.DEFAULTS, r);
        this.$window = e(window).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this));
        this.$element = e(n);
        this.affixed = this.unpin = null;
        this.checkPosition()
    };
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {offset: 0};
    t.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function () {
        if (!this.$element.is(":visible"))return;
        var n = e(document).height(), r = this.$window.scrollTop(), i = this.$element.offset(), s = this.options.offset, o = s.top, u = s.bottom;
        typeof s != "object" && (u = o = s);
        typeof o == "function" && (o = s.top());
        typeof u == "function" && (u = s.bottom());
        var a = this.unpin != null && r + this.unpin <= i.top ? !1 : u != null && i.top + this.$element.height() >= n - u ? "bottom" : o != null && r <= o ? "top" : !1;
        if (this.affixed === a)return;
        this.unpin && this.$element.css("top", "");
        this.affixed = a;
        this.unpin = a == "bottom" ? i.top - r : null;
        this.$element.removeClass(t.RESET).addClass("affix" + (a ? "-" + a : ""));
        a == "bottom" && this.$element.offset({top: document.body.offsetHeight - u - this.$element.height()})
    };
    var n = e.fn.affix;
    e.fn.affix = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.affix"), s = typeof n == "object" && n;
            i || r.data("bs.affix", i = new t(this, s));
            typeof n == "string" && i[n]()
        })
    };
    e.fn.affix.Constructor = t;
    e.fn.affix.noConflict = function () {
        e.fn.affix = n;
        return this
    };
    e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var t = e(this), n = t.data();
            n.offset = n.offset || {};
            n.offsetBottom && (n.offset.bottom = n.offsetBottom);
            n.offsetTop && (n.offset.top = n.offsetTop);
            t.affix(n)
        })
    })
}(jQuery);
+function (e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap"), t = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"};
        for (var n in t)if (e.style[n] !== undefined)return{end: t[n]}
    }

    e.fn.emulateTransitionEnd = function (t) {
        var n = !1, r = this;
        e(this).one(e.support.transition.end, function () {
            n = !0
        });
        var i = function () {
            n || e(r).trigger(e.support.transition.end)
        };
        setTimeout(i, t);
        return this
    };
    e(function () {
        e.support.transition = t()
    })
}(jQuery);
+function (e) {
    "use strict";
    var t = function (e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
        this.init("tooltip", e, t)
    };
    t.DEFAULTS = {animation: !0, placement: "top", selector: !1, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1};
    t.prototype.init = function (t, n, r) {
        this.enabled = !0;
        this.type = t;
        this.$element = e(n);
        this.options = this.getOptions(r);
        var i = this.options.trigger.split(" ");
        for (var s = i.length; s--;) {
            var o = i[s];
            if (o == "click")this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)); else if (o != "manual") {
                var u = o == "hover" ? "mouseenter" : "focus", a = o == "hover" ? "mouseleave" : "blur";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this));
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle()
    };
    t.prototype.getDefaults = function () {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function (t) {
        t = e.extend({}, this.getDefaults(), this.$element.data(), t);
        t.delay && typeof t.delay == "number" && (t.delay = {show: t.delay, hide: t.delay});
        return t
    };
    t.prototype.getDelegateOptions = function () {
        var t = {}, n = this.getDefaults();
        this._options && e.each(this._options, function (e, r) {
            n[e] != r && (t[e] = r)
        });
        return t
    };
    t.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        clearTimeout(n.timeout);
        n.hoverState = "in";
        if (!n.options.delay || !n.options.delay.show)return n.show();
        n.timeout = setTimeout(function () {
            n.hoverState == "in" && n.show()
        }, n.options.delay.show)
    };
    t.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        clearTimeout(n.timeout);
        n.hoverState = "out";
        if (!n.options.delay || !n.options.delay.hide)return n.hide();
        n.timeout = setTimeout(function () {
            n.hoverState == "out" && n.hide()
        }, n.options.delay.hide)
    };
    t.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            if (t.isDefaultPrevented())return;
            var n = this.tip();
            this.setContent();
            this.options.animation && n.addClass("fade");
            var r = typeof this.options.placement == "function" ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, s = i.test(r);
            s && (r = r.replace(i, "") || "top");
            n.detach().css({top: 0, left: 0, display: "block"}).addClass(r);
            this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var o = this.getPosition(), u = n[0].offsetWidth, a = n[0].offsetHeight;
            if (s) {
                var f = this.$element.parent(), l = r, c = document.documentElement.scrollTop || document.body.scrollTop, h = this.options.container == "body" ? window.innerWidth : f.outerWidth(), p = this.options.container == "body" ? window.innerHeight : f.outerHeight(), d = this.options.container == "body" ? 0 : f.offset().left;
                r = r == "bottom" && o.top + o.height + a - c > p ? "top" : r == "top" && o.top - c - a < 0 ? "bottom" : r == "right" && o.right + u > h ? "left" : r == "left" && o.left - u < d ? "right" : r;
                n.removeClass(l).addClass(r)
            }
            var v = this.getCalculatedOffset(r, o, u, a);
            this.applyPlacement(v, r);
            this.$element.trigger("shown.bs." + this.type)
        }
    };
    t.prototype.applyPlacement = function (e, t) {
        var n, r = this.tip(), i = r[0].offsetWidth, s = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10), u = parseInt(r.css("margin-left"
        ), 10);
        isNaN(o) && (o = 0);
        isNaN(u) && (u = 0);
        e.top = e.top + o;
        e.left = e.left + u;
        r.offset(e).addClass("in");
        var a = r[0].offsetWidth, f = r[0].offsetHeight;
        if (t == "top" && f != s) {
            n = !0;
            e.top = e.top + s - f
        }
        if (/bottom|top/.test(t)) {
            var l = 0;
            if (e.left < 0) {
                l = e.left * -2;
                e.left = 0;
                r.offset(e);
                a = r[0].offsetWidth;
                f = r[0].offsetHeight
            }
            this.replaceArrow(l - i + a, a, "left")
        } else this.replaceArrow(f - s, f, "top");
        n && r.offset(e)
    };
    t.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    };
    t.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        e.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function () {
        function t() {
            n.hoverState != "in" && r.detach()
        }

        var n = this, r = this.tip(), i = e.Event("hide.bs." + this.type);
        this.$element.trigger(i);
        if (i.isDefaultPrevented())return;
        r.removeClass("in");
        e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, t).emulateTransitionEnd(150) : t();
        this.$element.trigger("hidden.bs." + this.type);
        return this
    };
    t.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function () {
        return this.getTitle()
    };
    t.prototype.getPosition = function () {
        var t = this.$element[0];
        return e.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {width: t.offsetWidth, height: t.offsetHeight}, this.$element.offset())
    };
    t.prototype.getCalculatedOffset = function (e, t, n, r) {
        return e == "bottom" ? {top: t.top + t.height, left: t.left + t.width / 2 - n / 2} : e == "top" ? {top: t.top - r, left: t.left + t.width / 2 - n / 2} : e == "left" ? {top: t.top + t.height / 2 - r / 2, left: t.left - n} : {top: t.top + t.height / 2 - r / 2, left: t.left + t.width}
    };
    t.prototype.getTitle = function () {
        var e, t = this.$element, n = this.options;
        e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title);
        return e
    };
    t.prototype.tip = function () {
        return this.$tip = this.$tip || e(this.options.template)
    };
    t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.validate = function () {
        if (!this.$element[0].parentNode) {
            this.hide();
            this.$element = null;
            this.options = null
        }
    };
    t.prototype.enable = function () {
        this.enabled = !0
    };
    t.prototype.disable = function () {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function (t) {
        var n = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    };
    t.prototype.destroy = function () {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.tooltip"), s = typeof n == "object" && n;
            i || r.data("bs.tooltip", i = new t(this, s));
            typeof n == "string" && i[n]()
        })
    };
    e.fn.tooltip.Constructor = t;
    e.fn.tooltip.noConflict = function () {
        e.fn.tooltip = n;
        return this
    }
}(jQuery);
+function (e) {
    "use strict";
    var t = '[data-dismiss="alert"]', n = function (n) {
        e(n).on("click", t, this.close)
    };
    n.prototype.close = function (t) {
        function n() {
            s.trigger("closed.bs.alert").remove()
        }

        var r = e(this), i = r.attr("data-target");
        if (!i) {
            i = r.attr("href");
            i = i && i.replace(/.*(?=#[^\s]*$)/, "")
        }
        var s = e(i);
        t && t.preventDefault();
        s.length || (s = r.hasClass("alert") ? r : r.parent());
        s.trigger(t = e.Event("close.bs.alert"));
        if (t.isDefaultPrevented())return;
        s.removeClass("in");
        e.support.transition && s.hasClass("fade") ? s.one(e.support.transition.end, n).emulateTransitionEnd(150) : n()
    };
    var r = e.fn.alert;
    e.fn.alert = function (t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.alert");
            i || r.data("bs.alert", i = new n(this));
            typeof t == "string" && i[t].call(r)
        })
    };
    e.fn.alert.Constructor = n;
    e.fn.alert.noConflict = function () {
        e.fn.alert = r;
        return this
    };
    e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery);
+function (e) {
    "use strict";
    var t = function (n, r) {
        this.$element = e(n);
        this.options = e.extend({}, t.DEFAULTS, r)
    };
    t.DEFAULTS = {loadingText: "loading..."};
    t.prototype.setState = function (e) {
        var t = "disabled", n = this.$element, r = n.is("input") ? "val" : "html", i = n.data();
        e += "Text";
        i.resetText || n.data("resetText", n[r]());
        n[r](i[e] || this.options[e]);
        setTimeout(function () {
            e == "loadingText" ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    };
    t.prototype.toggle = function () {
        var e = this.$element.closest('[data-toggle="buttons"]'), t = !0;
        if (e.length) {
            var n = this.$element.find("input");
            n.prop("type") === "radio" && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active"));
            t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.button"), s = typeof n == "object" && n;
            i || r.data("bs.button", i = new t(this, s));
            n == "toggle" ? i.toggle() : n && i.setState(n)
        })
    };
    e.fn.button.Constructor = t;
    e.fn.button.noConflict = function () {
        e.fn.button = n;
        return this
    };
    e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn"));
        n.button("toggle");
        t.preventDefault()
    })
}(jQuery);
+function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = n;
        this.paused = this.sliding = this.interval = this.$active = this.$items = null;
        this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0};
    t.prototype.cycle = function (t) {
        t || (this.paused = !1);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval));
        return this
    };
    t.prototype.getActiveIndex = function () {
        this.$active = this.$element.find(".item.active");
        this.$items = this.$active.parent().children();
        return this.$items.index(this.$active)
    };
    t.prototype.to = function (t) {
        var n = this, r = this.getActiveIndex();
        if (t > this.$items.length - 1 || t < 0)return;
        return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            n.to(t)
        }) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(this.$items[t]))
    };
    t.prototype.pause = function (t) {
        t || (this.paused = !0);
        if (this.$element.find(".next, .prev").length && e.support.transition.end) {
            this.$element.trigger(e.support.transition.end);
            this.cycle(!0)
        }
        this.interval = clearInterval(this.interval);
        return this
    };
    t.prototype.next = function () {
        if (this.sliding)return;
        return this.slide("next")
    };
    t.prototype.prev = function () {
        if (this.sliding)return;
        return this.slide("prev")
    };
    t.prototype.slide = function (t, n) {
        var r = this.$element.find(".item.active"), i = n || r[t](), s = this.interval, o = t == "next" ? "left" : "right", u = t == "next" ? "first" : "last", a = this;
        if (!i.length) {
            if (!this.options.wrap)return;
            i = this.$element.find(".item")[u]()
        }
        this.sliding = !0;
        s && this.pause();
        var f = e.Event("slide.bs.carousel", {relatedTarget: i[0], direction: o});
        if (i.hasClass("active"))return;
        if (this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            this.$element.one("slid.bs.carousel", function () {
                var t = e(a.$indicators.children()[a.getActiveIndex()]);
                t && t.addClass("active")
            })
        }
        if (e.support.transition && this.$element.hasClass("slide")) {
            this.$element.trigger(f);
            if (f.isDefaultPrevented())return;
            i.addClass(t);
            i[0].offsetWidth;
            r.addClass(o);
            i.addClass(o);
            r.one(e.support.transition.end,function () {
                i.removeClass([t, o].join(" ")).addClass("active");
                r.removeClass(["active", o].join(" "));
                a.sliding = !1;
                setTimeout(function () {
                    a.$element.trigger("slid.bs.carousel")
                }, 0)
            }).emulateTransitionEnd(600)
        } else {
            this.$element.trigger(f);
            if (f.isDefaultPrevented())return;
            r.removeClass("active");
            i.addClass("active");
            this.sliding = !1;
            this.$element.trigger("slid.bs.carousel")
        }
        s && this.cycle();
        return this
    };
    var n = e.fn.carousel;
    e.fn.carousel = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.carousel"), s = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object" && n), o = typeof n == "string" ? n : s.slide;
            i || r.data("bs.carousel", i = new t(this, s));
            typeof n == "number" ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle()
        })
    };
    e.fn.carousel.Constructor = t;
    e.fn.carousel.noConflict = function () {
        e.fn.carousel = n;
        return this
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (t) {
        var n = e(this), r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")), s = e.extend({}, i.data(), n.data()), o = n.attr("data-slide-to");
        o && (s.interval = !1);
        i.carousel(s);
        (o = n.attr("data-slide-to")) && i.data("bs.carousel").to(o);
        t.preventDefault()
    });
    e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
            var t = e(this);
            t.carousel(t.data())
        })
    })
}(jQuery);
+function (e) {
    "use strict";
    var t = function (n, r) {
        this.$element = e(n);
        this.options = e.extend({}, t.DEFAULTS, r);
        this.transitioning = null;
        this.options.parent && (this.$parent = e(this.options.parent));
        this.options.toggle && this.toggle()
    };
    t.DEFAULTS = {toggle: !0};
    t.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    };
    t.prototype.show = function () {
        if (this.transitioning || this.$element.hasClass("in"))return;
        var t = e.Event("show.bs.collapse");
        this.$element.trigger(t);
        if (t.isDefaultPrevented())return;
        var n = this.$parent && this.$parent.find("> .panel > .in");
        if (n && n.length) {
            var r = n.data("bs.collapse");
            if (r && r.transitioning)return;
            n.collapse("hide");
            r || n.data("bs.collapse", null)
        }
        var i = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[i](0);
        this.transitioning = 1;
        var s = function () {
            this.$element.removeClass("collapsing").addClass("in")[i]("auto");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse")
        };
        if (!e.support.transition)return s.call(this);
        var o = e.camelCase(["scroll", i].join("-"));
        this.$element.one(e.support.transition.end, e.proxy(s, this)).emulateTransitionEnd(350)[i](this.$element[0][o])
    };
    t.prototype.hide = function () {
        if (this.transitioning || !this.$element.hasClass("in"))return;
        var t = e.Event("hide.bs.collapse");
        this.$element.trigger(t);
        if (t.isDefaultPrevented())return;
        var n = this.dimension();
        this.$element[n](this.$element[n]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
        this.transitioning = 1;
        var r = function () {
            this.transitioning = 0;
            this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
        };
        if (!e.support.transition)return r.call(this);
        this.$element[n](0).one(e.support.transition.end, e.proxy(r, this)).emulateTransitionEnd(350)
    };
    t.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = e.fn.collapse;
    e.fn.collapse = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.collapse"), s = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object" && n);
            i || r.data("bs.collapse", i = new t(this, s));
            typeof n == "string" && i[n]()
        })
    };
    e.fn.collapse.Constructor = t;
    e.fn.collapse.noConflict = function () {
        e.fn.collapse = n;
        return this
    };
    e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (t) {
        var n = e(this), r, i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""), s = e(i), o = s.data("bs.collapse"), u = o ? "toggle" : n.data(), a = n.attr("data-parent"), f = a && e(a);
        if (!o || !o.transitioning) {
            f && f.find('[data-toggle=collapse][data-parent="' + a + '"]').not(n).addClass("collapsed");
            n[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")
        }
        s.collapse(u)
    })
}(jQuery);
+function (e) {
    "use strict";
    function t() {
        e(r).remove();
        e(i).each(function (t) {
            var r = n(e(this));
            if (!r.hasClass("open"))return;
            r.trigger(t = e.Event("hide.bs.dropdown"));
            if (t.isDefaultPrevented())return;
            r.removeClass("open").trigger("hidden.bs.dropdown")
        })
    }

    function n(t) {
        var n = t.attr("data-target");
        if (!n) {
            n = t.attr("href");
            n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")
        }
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }

    var r = ".dropdown-backdrop", i = "[data-toggle=dropdown]", s = function (t) {
        var n = e(t).on("click.bs.dropdown", this.toggle)
    };
    s.prototype.toggle = function (r) {
        var i = e(this);
        if (i.is(".disabled, :disabled"))return;
        var s = n(i), o = s.hasClass("open");
        t();
        if (!o) {
            "ontouchstart"in document.documentElement && !s.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
            s.trigger(r = e.Event("show.bs.dropdown"));
            if (r.isDefaultPrevented())return;
            s.toggleClass("open").trigger("shown.bs.dropdown");
            i.focus()
        }
        return!1
    };
    s.prototype.keydown = function (t) {
        if (!/(38|40|27)/.test(t.keyCode))return;
        var r = e(this);
        t.preventDefault();
        t.stopPropagation();
        if (r.is(".disabled, :disabled"))return;
        var s = n(r), o = s.hasClass("open");
        if (!o || o && t.keyCode == 27) {
            t.which == 27 && s.find(i).focus();
            return r.click()
        }
        var u = e("[role=menu] li:not(.divider):visible a", s);
        if (!u.length)return;
        var a = u.index(u.filter(":focus"));
        t.keyCode == 38 && a > 0 && a--;
        t.keyCode == 40 && a < u.length - 1 && a++;
        ~a || (a = 0);
        u.eq(a).focus()
    };
    var o = e.fn.dropdown;
    e.fn.dropdown = function (t) {
        return this.each(function () {
            var n = e(this), r = n.data("dropdown");
            r || n.data("dropdown", r = new s(this));
            typeof t == "string" && r[t].call(n)
        })
    };
    e.fn.dropdown.Constructor = s;
    e.fn.dropdown.noConflict = function () {
        e.fn.dropdown = o;
        return this
    };
    e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form",function (e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, s.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ", [role=menu]", s.prototype.keydown)
}(jQuery);
+function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = n;
        this.$element = e(t);
        this.$backdrop = this.isShown = null;
        this.options.remote && this.$element.load(this.options.remote)
    };
    t.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0};
    t.prototype.toggle = function (e) {
        return this[this.isShown ? "hide" : "show"](e)
    };
    t.prototype.show = function (t) {
        var n = this, r = e.Event("show.bs.modal", {relatedTarget: t});
        this.$element.trigger(r);
        if (this.isShown || r.isDefaultPrevented())return;
        this.isShown = !0;
        this.escape();
        this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this));
        this.backdrop(function () {
            var r = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body);
            n.$element.show();
            r && n.$element[0].offsetWidth;
            n.$element.addClass("in").attr("aria-hidden", !1);
            n.enforceFocus();
            var i = e.Event("shown.bs.modal", {relatedTarget: t});
            r ? n.$element.find(".modal-dialog").one(e.support.transition.end,function () {
                n.$element.focus().trigger(i)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(i)
        })
    };
    t.prototype.hide = function (t) {
        t && t.preventDefault();
        t = e.Event("hide.bs.modal");
        this.$element.trigger(t);
        if (!this.isShown || t.isDefaultPrevented())return;
        this.isShown = !1;
        this.escape();
        e(document).off("focusin.bs.modal");
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal");
        e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
    };
    t.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
            this.$element[0] !== e.target && !this.$element.has(e.target).length && this.$element.focus()
        }, this))
    };
    t.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function (e) {
            e.which == 27 && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    };
    t.prototype.hideModal = function () {
        var e = this;
        this.$element.hide();
        this.backdrop(function () {
            e.removeBackdrop();
            e.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function (t) {
        var n = this, r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = e.support.transition && r;
            this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body);
            this.$element.on("click.dismiss.modal", e.proxy(function (e) {
                if (e.target !== e.currentTarget)return;
                this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)
            }, this));
            i && this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            if (!t)return;
            i ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else t && t()
    };
    var n = e.fn.modal;
    e.fn.modal = function (n, r) {
        return this.each(function () {
            var i = e(this), s = i.data("bs.modal"), o = e.extend({}, t.DEFAULTS, i.data(), typeof n == "object" && n);
            s || i.data("bs.modal", s = new t(this, o));
            typeof n == "string" ? s[n](r) : o.show && s.show(r)
        })
    };
    e.fn.modal.Constructor = t;
    e.fn.modal.noConflict = function () {
        e.fn.modal = n;
        return this
    };
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n = e(this), r = n.attr("href"), i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), s = i.data("modal") ? "toggle" : e.extend({remote: !/#/.test(r) && r}, i.data(), n.data());
        t.preventDefault();
        i.modal(s, this).one("hide", function () {
            n.is(":visible") && n.focus()
        })
    });
    e(document).on("show.bs.modal", ".modal",function () {
        e(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function () {
        e(document.body).removeClass("modal-open")
    })
}(jQuery);
+function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {placement: "right", trigger: "click", content: "", template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function () {
        return t.DEFAULTS
    };
    t.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t);
        e.find(".popover-content")[this.options.html ? "html" : "text"](n);
        e.removeClass("fade top bottom left right in");
        e.find(".popover-title").html() || e.find(".popover-title").hide()
    };
    t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function () {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || (typeof t.content == "function" ? t.content.call(e[0]) : t.content)
    };
    t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    t.prototype.tip = function () {
        this.$tip || (this.$tip = e(this.options.template));
        return this.$tip
    };
    var n = e.fn.popover;
    e.fn.popover = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.popover"), s = typeof n == "object" && n;
            i || r.data("bs.popover", i = new t(this, s));
            typeof n == "string" && i[n]()
        })
    };
    e.fn.popover.Constructor = t;
    e.fn.popover.noConflict = function () {
        e.fn.popover = n;
        return this
    }
}(jQuery);
+function (e) {
    "use strict";
    function t(n, r) {
        var i, s = e.proxy(this.process, this);
        this.$element = e(n).is("body") ? e(window) : e(n);
        this.$body = e("body");
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", s);
        this.options = e.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || (i = e(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
        this.offsets = e([]);
        this.targets = e([]);
        this.activeTarget = null;
        this.refresh();
        this.process()
    }

    t.DEFAULTS = {offset: 10};
    t.prototype.refresh = function () {
        var t = this.$element[0] == window ? "offset" : "position";
        this.offsets = e([]);
        this.targets = e([]);
        var n = this, r = this.$body.find(this.selector).map(function () {
            var r = e(this), i = r.data("target") || r.attr("href"), s = /^#\w/.test(i) && e(i);
            return s && s.length && [
                [s[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]
            ] || null
        }).sort(function (e, t) {
            return e[0] - t[0]
        }).each(function () {
            n.offsets.push(this[0]);
            n.targets.push(this[1])
        })
    };
    t.prototype.process = function () {
        var e = this.$scrollElement.scrollTop() + this.options.offset, t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, n = t - this.$scrollElement.height(), r = this.offsets, i = this.targets, s = this.activeTarget, o;
        if (e >= n)return s != (o = i.last()[0]) && this.activate(o);
        for (o = r.length; o--;)s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o])
    };
    t.prototype.activate = function (t) {
        this.activeTarget = t;
        e(this.selector).parents(".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active"));
        r.trigger("activate.bs.scrollspy")
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.scrollspy"), s = typeof n == "object" && n;
            i || r.data("bs.scrollspy", i = new t(this, s));
            typeof n == "string" && i[n]()
        })
    };
    e.fn.scrollspy.Constructor = t;
    e.fn.scrollspy.noConflict = function () {
        e.fn.scrollspy = n;
        return this
    };
    e(window).on("load", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(jQuery);
+function (e) {
    "use strict";
    var t = function (t) {
        this.element = e(t)
    };
    t.prototype.show = function () {
        var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), r = t.data("target");
        if (!r) {
            r = t.attr("href");
            r = r && r.replace(/.*(?=#[^\s]*$)/, "")
        }
        if (t.parent("li").hasClass("active"))return;
        var i = n.find(".active:last a")[0], s = e.Event("show.bs.tab", {relatedTarget: i});
        t.trigger(s);
        if (s.isDefaultPrevented())return;
        var o = e(r);
        this.activate(t.parent("li"), n);
        this.activate(o, o.parent(), function () {
            t.trigger({type: "shown.bs.tab", relatedTarget: i})
        })
    };
    t.prototype.activate = function (t, n, r) {
        function i() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
            t.addClass("active");
            if (o) {
                t[0].offsetWidth;
                t.addClass("in")
            } else t.removeClass("fade");
            t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active");
            r && r()
        }

        var s = n.find("> .active"), o = r && e.support.transition && s.hasClass("fade");
        o ? s.one(e.support.transition.end, i).emulateTransitionEnd(150) : i();
        s.removeClass("in")
    };
    var n = e.fn.tab;
    e.fn.tab = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.tab");
            i || r.data("bs.tab", i = new t(this));
            typeof n == "string" && i[n]()
        })
    };
    e.fn.tab.Constructor = t;
    e.fn.tab.noConflict = function () {
        e.fn.tab = n;
        return this
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
        t.preventDefault();
        e(this).tab("show")
    })
}(jQuery);