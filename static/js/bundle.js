!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function i(e) {
        var t = e.length, i = G.type(e);
        return "function" !== i && !G.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function n(e, t, i) {
        if (G.isFunction(t))return G.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType)return G.grep(e, function (e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (ne.test(t))return G.filter(t, e, i);
            t = G.filter(t, e)
        }
        return G.grep(e, function (e) {
            return G.inArray(e, t) >= 0 !== i
        })
    }

    function o(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function s() {
        se.addEventListener ? (se.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1)) : (se.detachEvent("onreadystatechange", r), e.detachEvent("onload", r))
    }

    function r() {
        (se.addEventListener || "load" === event.type || "complete" === se.readyState) && (s(), G.ready())
    }

    function a(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(me, "-$1").toLowerCase();
            if ("string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : fe.test(i) ? G.parseJSON(i) : i)
                } catch (e) {
                }
                G.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function l(e) {
        var t;
        for (t in e)if (("data" !== t || !G.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function c(e, t, i, n) {
        if (G.acceptData(e)) {
            var o, s, r = G.expando, a = e.nodeType, l = a ? G.cache : e, c = a ? e[r] : e[r] && r;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof t)return c || (c = a ? e[r] = z.pop() || G.guid++ : r), l[c] || (l[c] = a ? {} : {toJSON: G.noop}), "object" != typeof t && "function" != typeof t || (n ? l[c] = G.extend(l[c], t) : l[c].data = G.extend(l[c].data, t)), s = l[c], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[G.camelCase(t)] = i), "string" == typeof t ? null == (o = s[t]) && (o = s[G.camelCase(t)]) : o = s, o
        }
    }

    function d(e, t, i) {
        if (G.acceptData(e)) {
            var n, o, s = e.nodeType, r = s ? G.cache : e, a = s ? e[G.expando] : G.expando;
            if (r[a]) {
                if (t && (n = i ? r[a] : r[a].data)) {
                    o = (t = G.isArray(t) ? t.concat(G.map(t, G.camelCase)) : t in n ? [t] : (t = G.camelCase(t)) in n ? [t] : t.split(" ")).length;
                    for (; o--;)delete n[t[o]];
                    if (i ? !l(n) : !G.isEmptyObject(n))return
                }
                (i || (delete r[a].data, l(r[a]))) && (s ? G.cleanData([e], !0) : Z.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
            }
        }
    }

    function u() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return se.activeElement
        } catch (e) {
        }
    }

    function f(e) {
        var t = $e.split("|"), i = e.createDocumentFragment();
        if (i.createElement)for (; t.length;)i.createElement(t.pop());
        return i
    }

    function m(e, t) {
        var i, n, o = 0, s = typeof e.getElementsByTagName !== he ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== he ? e.querySelectorAll(t || "*") : void 0;
        if (!s)for (s = [], i = e.childNodes || e; null != (n = i[o]); o++)!t || G.nodeName(n, t) ? s.push(n) : G.merge(s, m(n, t));
        return void 0 === t || t && G.nodeName(e, t) ? G.merge([e], s) : s
    }

    function g(e, t) {
        return G.nodeName(e, "table") && G.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function v(e) {
        return e.type = (null !== G.find.attr(e, "type")) + "/" + e.type, e
    }

    function y(e) {
        var t = Ie.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++)G._data(i, "globalEval", !t || G._data(t[n], "globalEval"))
    }

    function b(e, t) {
        if (1 === t.nodeType && G.hasData(e)) {
            var i, n, o, s = G._data(e), r = G._data(t, s), a = s.events;
            if (a) {
                delete r.handle, r.events = {};
                for (i in a)for (n = 0, o = a[i].length; n < o; n++)G.event.add(t, i, a[i][n])
            }
            r.data && (r.data = G.extend({}, r.data))
        }
    }

    function x(t, i) {
        var n = G(i.createElement(t)).appendTo(i.body), o = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(n[0]).display : G.css(n[0], "display");
        return n.detach(), o
    }

    function w(e) {
        var t = se, i = We[e];
        return i || ("none" !== (i = x(e, t)) && i || ((t = ((qe = (qe || G("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || qe[0].contentDocument).document).write(), t.close(), i = x(e, t), qe.detach()), We[e] = i), i
    }

    function k(e, t) {
        return {
            get: function () {
                var i = e();
                if (null != i) {
                    if (!i)return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
    }

    function T(e, t) {
        if (t in e)return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, o = tt.length; o--;)if ((t = tt[o] + i) in e)return t;
        return n
    }

    function C(e, t) {
        for (var i, n, o, s = [], r = 0, a = e.length; r < a; r++)(n = e[r]).style && (s[r] = G._data(n, "olddisplay"), i = n.style.display, t ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && ye(n) && (s[r] = G._data(n, "olddisplay", w(n.nodeName)))) : s[r] || (o = ye(n), (i && "none" !== i || !o) && G._data(n, "olddisplay", o ? i : G.css(n, "display"))));
        for (r = 0; r < a; r++)(n = e[r]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "" : "none"));
        return e
    }

    function $(e, t, i) {
        var n = Ke.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function S(e, t, i, n, o) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2)"margin" === i && (r += G.css(e, i + ve[s], !0, o)), n ? ("content" === i && (r -= G.css(e, "padding" + ve[s], !0, o)), "margin" !== i && (r -= G.css(e, "border" + ve[s] + "Width", !0, o))) : (r += G.css(e, "padding" + ve[s], !0, o), "padding" !== i && (r += G.css(e, "border" + ve[s] + "Width", !0, o)));
        return r
    }

    function E(e, t, i) {
        var n = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, s = Be(e), r = Z.boxSizing() && "border-box" === G.css(e, "boxSizing", !1, s);
        if (o <= 0 || null == o) {
            if (((o = Re(e, t, s)) < 0 || null == o) && (o = e.style[t]), Ue.test(o))return o;
            n = r && (Z.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + S(e, t, i || (r ? "border" : "content"), n, s) + "px"
    }

    function A(e, t, i, n, o) {
        return new A.prototype.init(e, t, i, n, o)
    }

    function N() {
        return setTimeout(function () {
            it = void 0
        }), it = G.now()
    }

    function P(e, t) {
        var i, n = {height: e}, o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t)n["margin" + (i = ve[o])] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function M(e, t, i) {
        for (var n, o = (lt[t] || []).concat(lt["*"]), s = 0, r = o.length; s < r; s++)if (n = o[s].call(i, t, e))return n
    }

    function O(e, t, i) {
        var n, o, s = 0, r = at.length, a = G.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o)return !1;
            for (var t = it || N(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++)c.tweens[s].run(n);
            return a.notifyWith(e, [c, n, i]), n < 1 && r ? i : (a.resolveWith(e, [c]), !1)
        }, c = a.promise({
            elem: e,
            props: G.extend({}, t),
            opts: G.extend(!0, {specialEasing: {}}, i),
            originalProperties: t,
            originalOptions: i,
            startTime: it || N(),
            duration: i.duration,
            tweens: [],
            createTween: function (t, i) {
                var n = G.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function (t) {
                var i = 0, n = t ? c.tweens.length : 0;
                if (o)return this;
                for (o = !0; i < n; i++)c.tweens[i].run(1);
                return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
            }
        }), d = c.props;
        for (function (e, t) {
            var i, n, o, s, r;
            for (i in e)if (n = G.camelCase(i), o = t[n], s = e[i], G.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = G.cssHooks[n]) && "expand" in r) {
                s = r.expand(s), delete e[n];
                for (i in s)i in e || (e[i] = s[i], t[i] = o)
            } else t[n] = o
        }(d, c.opts.specialEasing); s < r; s++)if (n = at[s].call(c, e, d, c.opts))return n;
        return G.map(d, M, c), G.isFunction(c.opts.start) && c.opts.start.call(e, c), G.fx.timer(G.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function D(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0, s = t.toLowerCase().match(ce) || [];
            if (G.isFunction(i))for (; n = s[o++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function F(e, t, i, n) {
        function o(a) {
            var l;
            return s[a] = !0, G.each(e[a] || [], function (e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        var s = {}, r = e === Pt;
        return o(t.dataTypes[0]) || !s["*"] && o("*")
    }

    function H(e, t) {
        var i, n, o = G.ajaxSettings.flatOptions || {};
        for (n in t)void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && G.extend(!0, e, i), e
    }

    function I(e, t, i, n) {
        var o;
        if (G.isArray(t))G.each(t, function (t, o) {
            i || Dt.test(e) ? n(e, o) : I(e + "[" + ("object" == typeof o ? t : "") + "]", o, i, n)
        }); else if (i || "object" !== G.type(t))n(e, t); else for (o in t)I(e + "[" + o + "]", t[o], i, n)
    }

    function j() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    }

    function L(e) {
        return G.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    var z = [], q = z.slice, W = z.concat, B = z.push, R = z.indexOf, X = {}, U = X.toString, V = X.hasOwnProperty, Y = "".trim, Z = {}, G = function (e, t) {
        return new G.fn.init(e, t)
    }, K = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Q = /^-ms-/, J = /-([\da-z])/gi;
    G.fn = G.prototype = {
        jquery: "1.11.0", constructor: G, selector: "", length: 0, toArray: function () {
            return q.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : q.call(this)
        }, pushStack: function (e) {
            var t = G.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return G.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(G.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        }, slice: function () {
            return this.pushStack(q.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: B, sort: z.sort, splice: z.splice
    }, G.extend = G.fn.extend = function () {
        var e, t, i, n, o, s, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || G.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)if (null != (o = arguments[a]))for (n in o)e = r[n], r !== (i = o[n]) && (c && i && (G.isPlainObject(i) || (t = G.isArray(i))) ? (t ? (t = !1, s = e && G.isArray(e) ? e : []) : s = e && G.isPlainObject(e) ? e : {}, r[n] = G.extend(c, s, i)) : void 0 !== i && (r[n] = i));
        return r
    }, G.extend({
        expando: "jQuery" + ("1.11.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === G.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === G.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return e - parseFloat(e) >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== G.type(e) || e.nodeType || G.isWindow(e))return !1;
            try {
                if (e.constructor && !V.call(e, "constructor") && !V.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (e) {
                return !1
            }
            if (Z.ownLast)for (t in e)return V.call(e, t);
            for (t in e);
            return void 0 === t || V.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? X[U.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            t && G.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(Q, "ms-").replace(J, function (e, t) {
                return t.toUpperCase()
            })
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var o = 0, s = e.length, r = i(e);
            if (n) {
                if (r)for (; o < s && !1 !== t.apply(e[o], n); o++); else for (o in e)if (!1 === t.apply(e[o], n))break
            } else if (r)for (; o < s && !1 !== t.call(e[o], o, e[o]); o++); else for (o in e)if (!1 === t.call(e[o], o, e[o]))break;
            return e
        }, trim: Y && !Y.call("\ufeff ") ? function (e) {
            return null == e ? "" : Y.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(K, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? G.merge(n, "string" == typeof e ? [e] : e) : B.call(n, e)), n
        }, inArray: function (e, t, i) {
            var n;
            if (t) {
                if (R)return R.call(t, e, i);
                for (n = t.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)if (i in t && t[i] === e)return i
            }
            return -1
        }, merge: function (e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i;)e[o++] = t[n++];
            if (i != i)for (; void 0 !== t[n];)e[o++] = t[n++];
            return e.length = o, e
        }, grep: function (e, t, i) {
            for (var n = [], o = 0, s = e.length, r = !i; o < s; o++)!t(e[o], o) !== r && n.push(e[o]);
            return n
        }, map: function (e, t, n) {
            var o, s = 0, r = e.length, a = [];
            if (i(e))for (; s < r; s++)null != (o = t(e[s], s, n)) && a.push(o); else for (s in e)null != (o = t(e[s], s, n)) && a.push(o);
            return W.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var i, n, o;
            if ("string" == typeof t && (o = e[t], t = e, e = o), G.isFunction(e))return i = q.call(arguments, 2), n = function () {
                return e.apply(t || this, i.concat(q.call(arguments)))
            }, n.guid = e.guid = e.guid || G.guid++, n
        }, now: function () {
            return +new Date
        }, support: Z
    }), G.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        X["[object " + t + "]"] = t.toLowerCase()
    });
    var ee = function (e) {
        function t(e, t, i, n) {
            var o, s, r, a, c, p, h, f, m, g;
            if ((t ? t.ownerDocument || t : F) !== S && $(t), t = t || S, i = i || [], !e || "string" != typeof e)return i;
            if (1 !== (a = t.nodeType) && 9 !== a)return [];
            if (A && !n) {
                if (o = he.exec(e))if (r = o[1]) {
                    if (9 === a) {
                        if (!(s = t.getElementById(r)) || !s.parentNode)return i;
                        if (s.id === r)return i.push(s), i
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(r)) && O(t, s) && s.id === r)return i.push(s), i
                } else {
                    if (o[2])return Y.apply(i, t.getElementsByTagName(e)), i;
                    if ((r = o[3]) && y.getElementsByClassName && t.getElementsByClassName)return Y.apply(i, t.getElementsByClassName(r)), i
                }
                if (y.qsa && (!N || !N.test(e))) {
                    if (f = h = D, m = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (p = d(e), (h = t.getAttribute("id")) ? f = h.replace(me, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", c = p.length; c--;)p[c] = f + u(p[c]);
                        m = fe.test(e) && l(t.parentNode) || t, g = p.join(",")
                    }
                    if (g)try {
                        return Y.apply(i, m.querySelectorAll(g)), i
                    } catch (e) {
                    } finally {
                        h || t.removeAttribute("id")
                    }
                }
            }
            return function (e, t, i, n) {
                var o, s, r, a, c, p = d(e);
                if (!n && 1 === p.length) {
                    if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (r = s[0]).type && y.getById && 9 === t.nodeType && A && _.relative[s[1].type]) {
                        if (!(t = (_.find.ID(r.matches[0].replace(ge, ve), t) || [])[0]))return i;
                        e = e.slice(s.shift().value.length)
                    }
                    for (o = ce.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !_.relative[a = r.type]);)if ((c = _.find[a]) && (n = c(r.matches[0].replace(ge, ve), fe.test(s[0].type) && l(t.parentNode) || t))) {
                        if (s.splice(o, 1), !(e = n.length && u(s)))return Y.apply(i, n), i;
                        break
                    }
                }
                return w(e, p)(n, t, !A, i, fe.test(e) && l(t.parentNode) || t), i
            }(e.replace(ne, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > _.cacheLength && delete e[t.shift()], e[i + " "] = n
            }

            var t = [];
            return e
        }

        function n(e) {
            return e[D] = !0, e
        }

        function o(e) {
            var t = S.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var i = e.split("|"), n = e.length; n--;)_.attrHandle[i[n]] = t
        }

        function r(e, t) {
            var i = t && e, n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || B) - (~e.sourceIndex || B);
            if (n)return n;
            if (i)for (; i = i.nextSibling;)if (i === t)return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return n(function (t) {
                return t = +t, n(function (i, n) {
                    for (var o, s = e([], i.length, t), r = s.length; r--;)i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function l(e) {
            return e && typeof e.getElementsByTagName !== W && e
        }

        function c() {
        }

        function d(e, i) {
            var n, o, s, r, a, l, c, d = L[e + " "];
            if (d)return i ? 0 : d.slice(0);
            for (a = e, l = [], c = _.preFilter; a;) {
                n && !(o = oe.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = se.exec(a)) && (n = o.shift(), s.push({
                    value: n,
                    type: o[0].replace(ne, " ")
                }), a = a.slice(n.length));
                for (r in _.filter)!(o = ce[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n)break
            }
            return i ? a.length : a ? t.error(e) : L(e, l).slice(0)
        }

        function u(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++)n += e[t].value;
            return n
        }

        function p(e, t, i) {
            var n = t.dir, o = i && "parentNode" === n, s = I++;
            return t.first ? function (t, i, s) {
                for (; t = t[n];)if (1 === t.nodeType || o)return e(t, i, s)
            } : function (t, i, r) {
                var a, l, c = [H, s];
                if (r) {
                    for (; t = t[n];)if ((1 === t.nodeType || o) && e(t, i, r))return !0
                } else for (; t = t[n];)if (1 === t.nodeType || o) {
                    if (l = t[D] || (t[D] = {}), (a = l[n]) && a[0] === H && a[1] === s)return c[2] = a[2];
                    if (l[n] = c, c[2] = e(t, i, r))return !0
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var o = e.length; o--;)if (!e[o](t, i, n))return !1;
                return !0
            } : e[0]
        }

        function f(e, t, i, n, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (i && !i(s, n, o) || (r.push(s), c && t.push(a)));
            return r
        }

        function m(e, i, o, s, r, a) {
            return s && !s[D] && (s = m(s)), r && !r[D] && (r = m(r, a)), n(function (n, a, l, c) {
                var d, u, p, h = [], m = [], g = a.length, v = n || function (e, i, n) {
                        for (var o = 0, s = i.length; o < s; o++)t(e, i[o], n);
                        return n
                    }(i || "*", l.nodeType ? [l] : l, []), y = !e || !n && i ? v : f(v, h, e, l, c), _ = o ? r || (n ? e : g || s) ? [] : a : y;
                if (o && o(y, _, l, c), s)for (d = f(_, m), s(d, [], l, c), u = d.length; u--;)(p = d[u]) && (_[m[u]] = !(y[m[u]] = p));
                if (n) {
                    if (r || e) {
                        if (r) {
                            for (d = [], u = _.length; u--;)(p = _[u]) && d.push(y[u] = p);
                            r(null, _ = [], d, c)
                        }
                        for (u = _.length; u--;)(p = _[u]) && (d = r ? G.call(n, p) : h[u]) > -1 && (n[d] = !(a[d] = p))
                    }
                } else _ = f(_ === a ? _.splice(g, _.length) : _), r ? r(null, a, _, c) : Y.apply(a, _)
            })
        }

        function g(e) {
            for (var t, i, n, o = e.length, s = _.relative[e[0].type], r = s || _.relative[" "], a = s ? 1 : 0, l = p(function (e) {
                return e === t
            }, r, !0), c = p(function (e) {
                return G.call(t, e) > -1
            }, r, !0), d = [function (e, i, n) {
                return !s && (n || i !== k) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n))
            }]; a < o; a++)if (i = _.relative[e[a].type])d = [p(h(d), i)]; else {
                if ((i = _.filter[e[a].type].apply(null, e[a].matches))[D]) {
                    for (n = ++a; n < o && !_.relative[e[n].type]; n++);
                    return m(a > 1 && h(d), a > 1 && u(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ne, "$1"), i, a < n && g(e.slice(a, n)), n < o && g(e = e.slice(n)), n < o && u(e))
                }
                d.push(i)
            }
            return h(d)
        }

        var v, y, _, b, x, w, k, T, C, $, S, E, A, N, P, M, O, D = "sizzle" + -new Date, F = e.document, H = 0, I = 0, j = i(), L = i(), z = i(), q = function (e, t) {
            return e === t && (C = !0), 0
        }, W = "undefined", B = 1 << 31, R = {}.hasOwnProperty, X = [], U = X.pop, V = X.push, Y = X.push, Z = X.slice, G = X.indexOf || function (e) {
                for (var t = 0, i = this.length; t < i; t++)if (this[t] === e)return t;
                return -1
            }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Q = "[\\x20\\t\\r\\n\\f]", J = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ee = J.replace("w", "w#"), te = "\\[" + Q + "*(" + J + ")" + Q + "*(?:([*^$|!~]?=)" + Q + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ee + ")|)|)" + Q + "*\\]", ie = ":(" + J + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + te.replace(3, 8) + ")*)|.*)\\)|)", ne = new RegExp("^" + Q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Q + "+$", "g"), oe = new RegExp("^" + Q + "*," + Q + "*"), se = new RegExp("^" + Q + "*([>+~]|" + Q + ")" + Q + "*"), re = new RegExp("=" + Q + "*([^\\]'\"]*?)" + Q + "*\\]", "g"), ae = new RegExp(ie), le = new RegExp("^" + ee + "$"), ce = {
            ID: new RegExp("^#(" + J + ")"),
            CLASS: new RegExp("^\\.(" + J + ")"),
            TAG: new RegExp("^(" + J.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + te),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Q + "*(even|odd|(([+-]|)(\\d*)n|)" + Q + "*(?:([+-]|)" + Q + "*(\\d+)|))" + Q + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + Q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Q + "*((?:-\\d)?\\d*)" + Q + "*\\)|)(?=[^-]|$)", "i")
        }, de = /^(?:input|select|textarea|button)$/i, ue = /^h\d$/i, pe = /^[^{]+\{\s*\[native \w/, he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, fe = /[+~]/, me = /'|\\/g, ge = new RegExp("\\\\([\\da-f]{1,6}" + Q + "?|(" + Q + ")|.)", "ig"), ve = function (e, t, i) {
            var n = "0x" + t - 65536;
            return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            Y.apply(X = Z.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
        } catch (e) {
            Y = {
                apply: X.length ? function (e, t) {
                    V.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        y = t.support = {}, x = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, $ = t.setDocument = function (e) {
            var t, i = e ? e.ownerDocument || e : F, n = i.defaultView;
            return i !== S && 9 === i.nodeType && i.documentElement ? (S = i, E = i.documentElement, A = !x(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                $()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                $()
            })), y.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), y.getElementsByTagName = o(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), y.getElementsByClassName = pe.test(i.getElementsByClassName) && o(function (e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), y.getById = o(function (e) {
                return E.appendChild(e).id = D, !i.getElementsByName || !i.getElementsByName(D).length
            }), y.getById ? (_.find.ID = function (e, t) {
                if (typeof t.getElementById !== W && A) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }, _.filter.ID = function (e) {
                var t = e.replace(ge, ve);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function (e) {
                var t = e.replace(ge, ve);
                return function (e) {
                    var i = typeof e.getAttributeNode !== W && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), _.find.TAG = y.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== W)return t.getElementsByTagName(e)
            } : function (e, t) {
                var i, n = [], o = 0, s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = s[o++];)1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, _.find.CLASS = y.getElementsByClassName && function (e, t) {
                    if (typeof t.getElementsByClassName !== W && A)return t.getElementsByClassName(e)
                }, P = [], N = [], (y.qsa = pe.test(i.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && N.push("[*^$]=" + Q + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + Q + "*(?:value|" + K + ")"), e.querySelectorAll(":checked").length || N.push(":checked")
            }), o(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + Q + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
            })), (y.matchesSelector = pe.test(M = E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && o(function (e) {
                y.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), P.push("!=", ie)
            }), N = N.length && new RegExp(N.join("|")), P = P.length && new RegExp(P.join("|")), t = pe.test(E.compareDocumentPosition), O = t || pe.test(E.contains) ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, q = t ? function (e, t) {
                if (e === t)return C = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === F && O(F, e) ? -1 : t === i || t.ownerDocument === F && O(F, t) ? 1 : T ? G.call(T, e) - G.call(T, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return C = !0, 0;
                var n, o = 0, s = e.parentNode, a = t.parentNode, l = [e], c = [t];
                if (!s || !a)return e === i ? -1 : t === i ? 1 : s ? -1 : a ? 1 : T ? G.call(T, e) - G.call(T, t) : 0;
                if (s === a)return r(e, t);
                for (n = e; n = n.parentNode;)l.unshift(n);
                for (n = t; n = n.parentNode;)c.unshift(n);
                for (; l[o] === c[o];)o++;
                return o ? r(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0
            }, i) : S
        }, t.matches = function (e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function (e, i) {
            if ((e.ownerDocument || e) !== S && $(e), i = i.replace(re, "='$1']"), y.matchesSelector && A && (!P || !P.test(i)) && (!N || !N.test(i)))try {
                var n = M.call(e, i);
                if (n || y.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (e) {
            }
            return t(i, S, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== S && $(e), O(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== S && $(e);
            var i = _.attrHandle[t.toLowerCase()], n = i && R.call(_.attrHandle, t.toLowerCase()) ? i(e, t, !A) : void 0;
            return void 0 !== n ? n : y.attributes || !A ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, i = [], n = 0, o = 0;
            if (C = !y.detectDuplicates, T = !y.sortStable && e.slice(0), e.sort(q), C) {
                for (; t = e[o++];)t === e[o] && (n = i.push(o));
                for (; n--;)e.splice(i[n], 1)
            }
            return T = null, e
        }, b = t.getText = function (e) {
            var t, i = "", n = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)i += b(e)
                } else if (3 === o || 4 === o)return e.nodeValue
            } else for (; t = e[n++];)i += b(t);
            return i
        }, (_ = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ce,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ge, ve), e[3] = (e[4] || e[5] || "").replace(ge, ve), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, i = !e[5] && e[2];
                    return ce.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : i && ae.test(i) && (t = d(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ge, ve).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = j[e + " "];
                    return t || (t = new RegExp("(^|" + Q + ")" + e + "(" + Q + "|$)")) && j(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== W && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, i, n) {
                    return function (o) {
                        var s = t.attr(o, e);
                        return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, i, n, o) {
                    var s = "nth" !== e.slice(0, 3), r = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === n && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, i, l) {
                        var c, d, u, p, h, f, m = s !== r ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (u = t; u = u[m];)if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                for (h = (c = (d = g[D] || (g[D] = {}))[e] || [])[0] === H && c[1], p = c[0] === H && c[2], u = h && g.childNodes[h]; u = ++h && u && u[m] || (p = h = 0) || f.pop();)if (1 === u.nodeType && ++p && u === t) {
                                    d[e] = [H, h, p];
                                    break
                                }
                            } else if (y && (c = (t[D] || (t[D] = {}))[e]) && c[0] === H)p = c[1]; else for (; (u = ++h && u && u[m] || (p = h = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[D] || (u[D] = {}))[e] = [H, p]), u !== t)););
                            return (p -= o) === n || p % n == 0 && p / n >= 0
                        }
                    }
                }, PSEUDO: function (e, i) {
                    var o, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[D] ? s(i) : s.length > 1 ? (o = [e, e, "", i], _.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                        for (var n, o = s(e, i), r = o.length; r--;)e[n = G.call(e, o[r])] = !(t[n] = o[r])
                    }) : function (e) {
                        return s(e, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: n(function (e) {
                    var t = [], i = [], o = w(e.replace(ne, "$1"));
                    return o[D] ? n(function (e, t, i, n) {
                        for (var s, r = o(e, null, n, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                    }) : function (e, n, s) {
                        return t[0] = e, o(t, null, s, i), !i.pop()
                    }
                }), has: n(function (e) {
                    return function (i) {
                        return t(e, i).length > 0
                    }
                }), contains: n(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
                    }
                }), lang: n(function (e) {
                    return le.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ve).toLowerCase(), function (t) {
                        var i;
                        do {
                            if (i = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                }, root: function (e) {
                    return e === E
                }, focus: function (e) {
                    return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !_.pseudos.empty(e)
                }, header: function (e) {
                    return ue.test(e.nodeName)
                }, input: function (e) {
                    return de.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: a(function () {
                    return [0]
                }), last: a(function (e, t) {
                    return [t - 1]
                }), eq: a(function (e, t, i) {
                    return [i < 0 ? i + t : i]
                }), even: a(function (e, t) {
                    for (var i = 0; i < t; i += 2)e.push(i);
                    return e
                }), odd: a(function (e, t) {
                    for (var i = 1; i < t; i += 2)e.push(i);
                    return e
                }), lt: a(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; --n >= 0;)e.push(n);
                    return e
                }), gt: a(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t;)e.push(n);
                    return e
                })
            }
        }).pseudos.nth = _.pseudos.eq;
        for (v in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})_.pseudos[v] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(v);
        for (v in{submit: !0, reset: !0})_.pseudos[v] = function (e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }(v);
        return c.prototype = _.filters = _.pseudos, _.setFilters = new c, w = t.compile = function (e, i) {
            var o, s = [], r = [], a = z[e + " "];
            if (!a) {
                for (i || (i = d(e)), o = i.length; o--;)(a = g(i[o]))[D] ? s.push(a) : r.push(a);
                a = z(e, function (e, i) {
                    var o = i.length > 0, s = e.length > 0, r = function (n, r, a, l, c) {
                        var d, u, p, h = 0, m = "0", g = n && [], v = [], y = k, b = n || s && _.find.TAG("*", c), x = H += null == y ? 1 : Math.random() || .1, w = b.length;
                        for (c && (k = r !== S && r); m !== w && null != (d = b[m]); m++) {
                            if (s && d) {
                                for (u = 0; p = e[u++];)if (p(d, r, a)) {
                                    l.push(d);
                                    break
                                }
                                c && (H = x)
                            }
                            o && ((d = !p && d) && h--, n && g.push(d))
                        }
                        if (h += m, o && m !== h) {
                            for (u = 0; p = i[u++];)p(g, v, r, a);
                            if (n) {
                                if (h > 0)for (; m--;)g[m] || v[m] || (v[m] = U.call(l));
                                v = f(v)
                            }
                            Y.apply(l, v), c && !n && v.length > 0 && h + i.length > 1 && t.uniqueSort(l)
                        }
                        return c && (H = x, k = y), g
                    };
                    return o ? n(r) : r
                }(r, s))
            }
            return a
        }, y.sortStable = D.split("").sort(q).join("") === D, y.detectDuplicates = !!C, $(), y.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(S.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (e, t, i) {
            if (!i)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), y.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function (e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase())return e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || s(K, function (e, t, i) {
            var n;
            if (!i)return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    G.find = ee, G.expr = ee.selectors, G.expr[":"] = G.expr.pseudos, G.unique = ee.uniqueSort, G.text = ee.getText, G.isXMLDoc = ee.isXML, G.contains = ee.contains;
    var te = G.expr.match.needsContext, ie = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ne = /^.[^:#\[\.,]*$/;
    G.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? G.find.matchesSelector(n, e) ? [n] : [] : G.find.matches(e, G.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, G.fn.extend({
        find: function (e) {
            var t, i = [], n = this, o = n.length;
            if ("string" != typeof e)return this.pushStack(G(e).filter(function () {
                for (t = 0; t < o; t++)if (G.contains(n[t], this))return !0
            }));
            for (t = 0; t < o; t++)G.find(e, n[t], i);
            return i = this.pushStack(o > 1 ? G.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        }, filter: function (e) {
            return this.pushStack(n(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(n(this, e || [], !0))
        }, is: function (e) {
            return !!n(this, "string" == typeof e && te.test(e) ? G(e) : e || [], !1).length
        }
    });
    var oe, se = e.document, re = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (G.fn.init = function (e, t) {
        var i, n;
        if (!e)return this;
        if ("string" == typeof e) {
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : re.exec(e)) || !i[1] && t)return !t || t.jquery ? (t || oe).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof G ? t[0] : t, G.merge(this, G.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), ie.test(i[1]) && G.isPlainObject(t))for (i in t)G.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if ((n = se.getElementById(i[2])) && n.parentNode) {
                if (n.id !== i[2])return oe.find(e);
                this.length = 1, this[0] = n
            }
            return this.context = se, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : G.isFunction(e) ? void 0 !== oe.ready ? oe.ready(e) : e(G) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), G.makeArray(e, this))
    }).prototype = G.fn, oe = G(se);
    var ae = /^(?:parents|prev(?:Until|All))/, le = {children: !0, contents: !0, next: !0, prev: !0};
    G.extend({
        dir: function (e, t, i) {
            for (var n = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === i || 1 !== o.nodeType || !G(o).is(i));)1 === o.nodeType && n.push(o), o = o[t];
            return n
        }, sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }), G.fn.extend({
        has: function (e) {
            var t, i = G(e, this), n = i.length;
            return this.filter(function () {
                for (t = 0; t < n; t++)if (G.contains(this, i[t]))return !0
            })
        }, closest: function (e, t) {
            for (var i, n = 0, o = this.length, s = [], r = te.test(e) || "string" != typeof e ? G(e, t || this.context) : 0; n < o; n++)for (i = this[n]; i && i !== t; i = i.parentNode)if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && G.find.matchesSelector(i, e))) {
                s.push(i);
                break
            }
            return this.pushStack(s.length > 1 ? G.unique(s) : s)
        }, index: function (e) {
            return e ? "string" == typeof e ? G.inArray(this[0], G(e)) : G.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(G.unique(G.merge(this.get(), G(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), G.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return G.dir(e, "parentNode")
        }, parentsUntil: function (e, t, i) {
            return G.dir(e, "parentNode", i)
        }, next: function (e) {
            return o(e, "nextSibling")
        }, prev: function (e) {
            return o(e, "previousSibling")
        }, nextAll: function (e) {
            return G.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return G.dir(e, "previousSibling")
        }, nextUntil: function (e, t, i) {
            return G.dir(e, "nextSibling", i)
        }, prevUntil: function (e, t, i) {
            return G.dir(e, "previousSibling", i)
        }, siblings: function (e) {
            return G.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return G.sibling(e.firstChild)
        }, contents: function (e) {
            return G.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : G.merge([], e.childNodes)
        }
    }, function (e, t) {
        G.fn[e] = function (i, n) {
            var o = G.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = G.filter(n, o)), this.length > 1 && (le[e] || (o = G.unique(o)), ae.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var ce = /\S+/g, de = {};
    G.Callbacks = function (e) {
        var t, i, n, o, s, r, a = [], l = !(e = "string" == typeof e ? de[e] || function (e) {
                var t = de[e] = {};
                return G.each(e.match(ce) || [], function (e, i) {
                    t[i] = !0
                }), t
            }(e) : G.extend({}, e)).once && [], c = function (u) {
            for (i = e.memory && u, n = !0, s = r || 0, r = 0, o = a.length, t = !0; a && s < o; s++)if (!1 === a[s].apply(u[0], u[1]) && e.stopOnFalse) {
                i = !1;
                break
            }
            t = !1, a && (l ? l.length && c(l.shift()) : i ? a = [] : d.disable())
        }, d = {
            add: function () {
                if (a) {
                    var n = a.length;
                    !function t(i) {
                        G.each(i, function (i, n) {
                            var o = G.type(n);
                            "function" === o ? e.unique && d.has(n) || a.push(n) : n && n.length && "string" !== o && t(n)
                        })
                    }(arguments), t ? o = a.length : i && (r = n, c(i))
                }
                return this
            }, remove: function () {
                return a && G.each(arguments, function (e, i) {
                    for (var n; (n = G.inArray(i, a, n)) > -1;)a.splice(n, 1), t && (n <= o && o--, n <= s && s--)
                }), this
            }, has: function (e) {
                return e ? G.inArray(e, a) > -1 : !(!a || !a.length)
            }, empty: function () {
                return a = [], o = 0, this
            }, disable: function () {
                return a = l = i = void 0, this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return l = void 0, i || d.disable(), this
            }, locked: function () {
                return !l
            }, fireWith: function (e, i) {
                return !a || n && !l || (i = [e, (i = i || []).slice ? i.slice() : i], t ? l.push(i) : c(i)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return d
    }, G.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", G.Callbacks("once memory"), "resolved"], ["reject", "fail", G.Callbacks("once memory"), "rejected"], ["notify", "progress", G.Callbacks("memory")]], i = "pending", n = {
                state: function () {
                    return i
                }, always: function () {
                    return o.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return G.Deferred(function (i) {
                        G.each(t, function (t, s) {
                            var r = G.isFunction(e[t]) && e[t];
                            o[s[1]](function () {
                                var e = r && r.apply(this, arguments);
                                e && G.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? G.extend(e, n) : n
                }
            }, o = {};
            return n.pipe = n.then, G.each(t, function (e, s) {
                var r = s[2], a = s[3];
                n[s[1]] = r.add, a && r.add(function () {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function () {
                    return o[s[0] + "With"](this === o ? n : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), n.promise(o), e && e.call(o, o), o
        }, when: function (e) {
            var t, i, n, o = 0, s = q.call(arguments), r = s.length, a = 1 !== r || e && G.isFunction(e.promise) ? r : 0, l = 1 === a ? e : G.Deferred(), c = function (e, i, n) {
                return function (o) {
                    i[e] = this, n[e] = arguments.length > 1 ? q.call(arguments) : o, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
            if (r > 1)for (t = new Array(r), i = new Array(r), n = new Array(r); o < r; o++)s[o] && G.isFunction(s[o].promise) ? s[o].promise().done(c(o, n, s)).fail(l.reject).progress(c(o, i, t)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    });
    var ue;
    G.fn.ready = function (e) {
        return G.ready.promise().done(e), this
    }, G.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? G.readyWait++ : G.ready(!0)
        }, ready: function (e) {
            if (!0 === e ? !--G.readyWait : !G.isReady) {
                if (!se.body)return setTimeout(G.ready);
                G.isReady = !0, !0 !== e && --G.readyWait > 0 || (ue.resolveWith(se, [G]), G.fn.trigger && G(se).trigger("ready").off("ready"))
            }
        }
    }), G.ready.promise = function (t) {
        if (!ue)if (ue = G.Deferred(), "complete" === se.readyState)setTimeout(G.ready); else if (se.addEventListener)se.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", r, !1); else {
            se.attachEvent("onreadystatechange", r), e.attachEvent("onload", r);
            var i = !1;
            try {
                i = null == e.frameElement && se.documentElement
            } catch (e) {
            }
            i && i.doScroll && function e() {
                if (!G.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(e, 50)
                    }
                    s(), G.ready()
                }
            }()
        }
        return ue.promise(t)
    };
    var pe, he = "undefined";
    for (pe in G(Z))break;
    Z.ownLast = "0" !== pe, Z.inlineBlockNeedsLayout = !1, G(function () {
        var e, t, i = se.getElementsByTagName("body")[0];
        i && ((e = se.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = se.createElement("div"), i.appendChild(e).appendChild(t), typeof t.style.zoom !== he && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (Z.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (i.style.zoom = 1)), i.removeChild(e), e = t = null)
    }), function () {
        var e = se.createElement("div");
        if (null == Z.deleteExpando) {
            Z.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                Z.deleteExpando = !1
            }
        }
        e = null
    }(), G.acceptData = function (e) {
        var t = G.noData[(e.nodeName + " ").toLowerCase()], i = +e.nodeType || 1;
        return (1 === i || 9 === i) && (!t || !0 !== t && e.getAttribute("classid") === t)
    };
    var fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, me = /([A-Z])/g;
    G.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return !!(e = e.nodeType ? G.cache[e[G.expando]] : e[G.expando]) && !l(e)
        },
        data: function (e, t, i) {
            return c(e, t, i)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, i) {
            return c(e, t, i, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), G.fn.extend({
        data: function (e, t) {
            var i, n, o, s = this[0], r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = G.data(s), 1 === s.nodeType && !G._data(s, "parsedAttrs"))) {
                    for (i = r.length; i--;)0 === (n = r[i].name).indexOf("data-") && a(s, n = G.camelCase(n.slice(5)), o[n]);
                    G._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                G.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                G.data(this, e, t)
            }) : s ? a(s, e, G.data(s, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                G.removeData(this, e)
            })
        }
    }), G.extend({
        queue: function (e, t, i) {
            var n;
            if (e)return t = (t || "fx") + "queue", n = G._data(e, t), i && (!n || G.isArray(i) ? n = G._data(e, t, G.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var i = G.queue(e, t), n = i.length, o = i.shift(), s = G._queueHooks(e, t);
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, function () {
                G.dequeue(e, t)
            }, s)), !n && s && s.empty.fire()
        }, _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return G._data(e, i) || G._data(e, i, {
                    empty: G.Callbacks("once memory").add(function () {
                        G._removeData(e, t + "queue"), G._removeData(e, i)
                    })
                })
        }
    }), G.fn.extend({
        queue: function (e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? G.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var i = G.queue(this, e, t);
                G._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && G.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                G.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var i, n = 1, o = G.Deferred(), s = this, r = this.length, a = function () {
                --n || o.resolveWith(s, [s])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = G._data(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var ge = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ve = ["Top", "Right", "Bottom", "Left"], ye = function (e, t) {
        return e = t || e, "none" === G.css(e, "display") || !G.contains(e.ownerDocument, e)
    }, _e = G.access = function (e, t, i, n, o, s, r) {
        var a = 0, l = e.length, c = null == i;
        if ("object" === G.type(i)) {
            o = !0;
            for (a in i)G.access(e, t, a, i[a], !0, s, r)
        } else if (void 0 !== n && (o = !0, G.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function (e, t, i) {
                return c.call(G(e), i)
            })), t))for (; a < l; a++)t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
        return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
    }, be = /^(?:checkbox|radio)$/i;
    !function () {
        var e = se.createDocumentFragment(), t = se.createElement("div"), i = se.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", Z.leadingWhitespace = 3 === t.firstChild.nodeType, Z.tbody = !t.getElementsByTagName("tbody").length, Z.htmlSerialize = !!t.getElementsByTagName("link").length, Z.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, e.appendChild(i), Z.appendChecked = i.checked, t.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                Z.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == Z.deleteExpando) {
            Z.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                Z.deleteExpando = !1
            }
        }
        e = t = i = null
    }(), function () {
        var t, i, n = se.createElement("div");
        for (t in{
            submit: !0,
            change: !0,
            focusin: !0
        })i = "on" + t, (Z[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), Z[t + "Bubbles"] = !1 === n.attributes[i].expando);
        n = null
    }();
    var xe = /^(?:input|select|textarea)$/i, we = /^key/, ke = /^(?:mouse|contextmenu)|click/, Te = /^(?:focusinfocus|focusoutblur)$/, Ce = /^([^.]*)(?:\.(.+)|)$/;
    G.event = {
        global: {},
        add: function (e, t, i, n, o) {
            var s, r, a, l, c, d, u, p, h, f, m, g = G._data(e);
            if (g) {
                for (i.handler && (i = (l = i).handler, o = l.selector), i.guid || (i.guid = G.guid++), (r = g.events) || (r = g.events = {}), (d = g.handle) || ((d = g.handle = function (e) {
                    return typeof G === he || e && G.event.triggered === e.type ? void 0 : G.event.dispatch.apply(d.elem, arguments)
                }).elem = e), a = (t = (t || "").match(ce) || [""]).length; a--;)h = m = (s = Ce.exec(t[a]) || [])[1], f = (s[2] || "").split(".").sort(), h && (c = G.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = G.event.special[h] || {}, u = G.extend({
                    type: h,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && G.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (p = r[h]) || ((p = r[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, f, d) || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), G.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, i, n, o) {
            var s, r, a, l, c, d, u, p, h, f, m, g = G.hasData(e) && G._data(e);
            if (g && (d = g.events)) {
                for (c = (t = (t || "").match(ce) || [""]).length; c--;)if (a = Ce.exec(t[c]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h) {
                    for (u = G.event.special[h] || {}, p = d[h = (n ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = p.length; s--;)r = p[s], !o && m !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (p.splice(s, 1), r.selector && p.delegateCount--, u.remove && u.remove.call(e, r));
                    l && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || G.removeEvent(e, h, g.handle), delete d[h])
                } else for (h in d)G.event.remove(e, h + t[c], i, n, !0);
                G.isEmptyObject(d) && (delete g.handle, G._removeData(e, "events"))
            }
        },
        trigger: function (t, i, n, o) {
            var s, r, a, l, c, d, u, p = [n || se], h = V.call(t, "type") ? t.type : t, f = V.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = n = n || se, 3 !== n.nodeType && 8 !== n.nodeType && !Te.test(h + G.event.triggered) && (h.indexOf(".") >= 0 && (h = (f = h.split(".")).shift(), f.sort()), r = h.indexOf(":") < 0 && "on" + h, t = t[G.expando] ? t : new G.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : G.makeArray(i, [t]), c = G.event.special[h] || {}, o || !c.trigger || !1 !== c.trigger.apply(n, i))) {
                if (!o && !c.noBubble && !G.isWindow(n)) {
                    for (l = c.delegateType || h, Te.test(l + h) || (a = a.parentNode); a; a = a.parentNode)p.push(a), d = a;
                    d === (n.ownerDocument || se) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (u = 0; (a = p[u++]) && !t.isPropagationStopped();)t.type = u > 1 ? l : c.bindType || h, (s = (G._data(a, "events") || {})[t.type] && G._data(a, "handle")) && s.apply(a, i), (s = r && a[r]) && s.apply && G.acceptData(a) && (t.result = s.apply(a, i), !1 === t.result && t.preventDefault());
                if (t.type = h, !o && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), i)) && G.acceptData(n) && r && n[h] && !G.isWindow(n)) {
                    (d = n[r]) && (n[r] = null), G.event.triggered = h;
                    try {
                        n[h]()
                    } catch (e) {
                    }
                    G.event.triggered = void 0, d && (n[r] = d)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = G.event.fix(e);
            var t, i, n, o, s, r = [], a = q.call(arguments), l = (G._data(this, "events") || {})[e.type] || [], c = G.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (r = G.event.handlers.call(this, e, l), t = 0; (o = r[t++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, s = 0; (n = o.handlers[s++]) && !e.isImmediatePropagationStopped();)e.namespace_re && !e.namespace_re.test(n.namespace) || (e.handleObj = n, e.data = n.data, void 0 !== (i = ((G.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var i, n, o, s, r = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (o = [], s = 0; s < a; s++)void 0 === o[i = (n = t[s]).selector + " "] && (o[i] = n.needsContext ? G(i, this).index(l) >= 0 : G.find(i, this, null, [l]).length), o[i] && o.push(n);
                o.length && r.push({elem: l, handlers: o})
            }
            return a < t.length && r.push({elem: this, handlers: t.slice(a)}), r
        },
        fix: function (e) {
            if (e[G.expando])return e;
            var t, i, n, o = e.type, s = e, r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = ke.test(o) ? this.mouseHooks : we.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new G.Event(s), t = n.length; t--;)e[i = n[t]] = s[i];
            return e.target || (e.target = s.srcElement || se), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var i, n, o, s = t.button, r = t.fromElement;
                return null == e.pageX && null != t.clientX && (o = (n = e.target.ownerDocument || se).documentElement, i = n.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== h() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === h() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (G.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
                }, _default: function (e) {
                    return G.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, i, n) {
            var o = G.extend(new G.Event, i, {type: e, isSimulated: !0, originalEvent: {}});
            n ? G.event.trigger(o, null, t) : G.event.dispatch.call(t, o), o.isDefaultPrevented() && i.preventDefault()
        }
    }, G.removeEvent = se.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function (e, t, i) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === he && (e[n] = null), e.detachEvent(n, i))
    }, G.Event = function (e, t) {
        if (!(this instanceof G.Event))return new G.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (!1 === e.returnValue || e.getPreventDefault && e.getPreventDefault()) ? u : p) : this.type = e, t && G.extend(this, t), this.timeStamp = e && e.timeStamp || G.now(), this[G.expando] = !0
    }, G.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, G.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        G.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var i, n = e.relatedTarget, o = e.handleObj;
                return n && (n === this || G.contains(this, n)) || (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), Z.submitBubbles || (G.event.special.submit = {
        setup: function () {
            if (G.nodeName(this, "form"))return !1;
            G.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, i = G.nodeName(t, "input") || G.nodeName(t, "button") ? t.form : void 0;
                i && !G._data(i, "submitBubbles") && (G.event.add(i, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), G._data(i, "submitBubbles", !0))
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && G.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            if (G.nodeName(this, "form"))return !1;
            G.event.remove(this, "._submit")
        }
    }), Z.changeBubbles || (G.event.special.change = {
        setup: function () {
            if (xe.test(this.nodeName))return "checkbox" !== this.type && "radio" !== this.type || (G.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), G.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), G.event.simulate("change", this, e, !0)
            })), !1;
            G.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                xe.test(t.nodeName) && !G._data(t, "changeBubbles") && (G.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || G.event.simulate("change", this.parentNode, e, !0)
                }), G._data(t, "changeBubbles", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return G.event.remove(this, "._change"), !xe.test(this.nodeName)
        }
    }), Z.focusinBubbles || G.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var i = function (e) {
            G.event.simulate(t, e.target, G.event.fix(e), !0)
        };
        G.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this, o = G._data(n, t);
                o || n.addEventListener(e, i, !0), G._data(n, t, (o || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, o = G._data(n, t) - 1;
                o ? G._data(n, t, o) : (n.removeEventListener(e, i, !0), G._removeData(n, t))
            }
        }
    }), G.fn.extend({
        on: function (e, t, i, n, o) {
            var s, r;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t, t = void 0);
                for (s in e)this.on(s, t, i, e[s], o);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), !1 === n)n = p; else if (!n)return this;
            return 1 === o && (r = n, (n = function (e) {
                return G().off(e), r.apply(this, arguments)
            }).guid = r.guid || (r.guid = G.guid++)), this.each(function () {
                G.event.add(this, e, n, i, t)
            })
        }, one: function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        }, off: function (e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj)return n = e.handleObj, G(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e)this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = p), this.each(function () {
                G.event.remove(this, e, i, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                G.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var i = this[0];
            if (i)return G.event.trigger(e, t, i, !0)
        }
    });
    var $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Se = / jQuery\d+="(?:null|\d+)"/g, Ee = new RegExp("<(?:" + $e + ")[\\s/>]", "i"), Ae = /^\s+/, Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Pe = /<([\w:]+)/, Me = /<tbody/i, Oe = /<|&#?\w+;/, De = /<(?:script|style|link)/i, Fe = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^$|\/(?:java|ecma)script/i, Ie = /^true\/(.*)/, je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Le = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: Z.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, ze = f(se).appendChild(se.createElement("div"));
    Le.optgroup = Le.option, Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead, Le.th = Le.td, G.extend({
        clone: function (e, t, i) {
            var n, o, s, r, a, l = G.contains(e.ownerDocument, e);
            if (Z.html5Clone || G.isXMLDoc(e) || !Ee.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ze.innerHTML = e.outerHTML, ze.removeChild(s = ze.firstChild)), !(Z.noCloneEvent && Z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || G.isXMLDoc(e)))for (n = m(s), a = m(e), r = 0; null != (o = a[r]); ++r)n[r] && function (e, t) {
                var i, n, o;
                if (1 === t.nodeType) {
                    if (i = t.nodeName.toLowerCase(), !Z.noCloneEvent && t[G.expando]) {
                        o = G._data(t);
                        for (n in o.events)G.removeEvent(t, n, o.handle);
                        t.removeAttribute(G.expando)
                    }
                    "script" === i && t.text !== e.text ? (v(t).text = e.text, y(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), Z.html5Clone && e.innerHTML && !G.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && be.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
                }
            }(o, n[r]);
            if (t)if (i)for (a = a || m(e), n = n || m(s), r = 0; null != (o = a[r]); r++)b(o, n[r]); else b(e, s);
            return (n = m(s, "script")).length > 0 && _(n, !l && m(e, "script")), n = a = o = null, s
        }, buildFragment: function (e, t, i, n) {
            for (var o, s, r, a, l, c, d, u = e.length, p = f(t), h = [], g = 0; g < u; g++)if ((s = e[g]) || 0 === s)if ("object" === G.type(s))G.merge(h, s.nodeType ? [s] : s); else if (Oe.test(s)) {
                for (a = a || p.appendChild(t.createElement("div")), l = (Pe.exec(s) || ["", ""])[1].toLowerCase(), d = Le[l] || Le._default, a.innerHTML = d[1] + s.replace(Ne, "<$1></$2>") + d[2], o = d[0]; o--;)a = a.lastChild;
                if (!Z.leadingWhitespace && Ae.test(s) && h.push(t.createTextNode(Ae.exec(s)[0])), !Z.tbody)for (o = (s = "table" !== l || Me.test(s) ? "<table>" !== d[1] || Me.test(s) ? 0 : a : a.firstChild) && s.childNodes.length; o--;)G.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                for (G.merge(h, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
                a = p.lastChild
            } else h.push(t.createTextNode(s));
            for (a && p.removeChild(a), Z.appendChecked || G.grep(m(h, "input"), function (e) {
                be.test(e.type) && (e.defaultChecked = e.checked)
            }), g = 0; s = h[g++];)if ((!n || -1 === G.inArray(s, n)) && (r = G.contains(s.ownerDocument, s), a = m(p.appendChild(s), "script"), r && _(a), i))for (o = 0; s = a[o++];)He.test(s.type || "") && i.push(s);
            return a = null, p
        }, cleanData: function (e, t) {
            for (var i, n, o, s, r = 0, a = G.expando, l = G.cache, c = Z.deleteExpando, d = G.event.special; null != (i = e[r]); r++)if ((t || G.acceptData(i)) && (o = i[a], s = o && l[o])) {
                if (s.events)for (n in s.events)d[n] ? G.event.remove(i, n) : G.removeEvent(i, n, s.handle);
                l[o] && (delete l[o], c ? delete i[a] : typeof i.removeAttribute !== he ? i.removeAttribute(a) : i[a] = null, z.push(o))
            }
        }
    }), G.fn.extend({
        text: function (e) {
            return _e(this, function (e) {
                return void 0 === e ? G.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    g(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
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
            for (var i, n = e ? G.filter(e, this) : this, o = 0; null != (i = n[o]); o++)t || 1 !== i.nodeType || G.cleanData(m(i)), i.parentNode && (t && G.contains(i.ownerDocument, i) && _(m(i, "script")), i.parentNode.removeChild(i));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && G.cleanData(m(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                e.options && G.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return G.clone(this, e, t)
            })
        }, html: function (e) {
            return _e(this, function (e) {
                var t = this[0] || {}, i = 0, n = this.length;
                if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(Se, "") : void 0;
                if ("string" == typeof e && !De.test(e) && (Z.htmlSerialize || !Ee.test(e)) && (Z.leadingWhitespace || !Ae.test(e)) && !Le[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ne, "<$1></$2>");
                    try {
                        for (; i < n; i++)1 === (t = this[i] || {}).nodeType && (G.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, G.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = W.apply([], e);
            var i, n, o, s, r, a, l = 0, c = this.length, d = this, u = c - 1, p = e[0], h = G.isFunction(p);
            if (h || c > 1 && "string" == typeof p && !Z.checkClone && Fe.test(p))return this.each(function (i) {
                var n = d.eq(i);
                h && (e[0] = p.call(this, i, n.html())), n.domManip(e, t)
            });
            if (c && (a = G.buildFragment(e, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (o = (s = G.map(m(a, "script"), v)).length; l < c; l++)n = a, l !== u && (n = G.clone(n, !0, !0), o && G.merge(s, m(n, "script"))), t.call(this[l], n, l);
                if (o)for (r = s[s.length - 1].ownerDocument, G.map(s, y), l = 0; l < o; l++)n = s[l], He.test(n.type || "") && !G._data(n, "globalEval") && G.contains(r, n) && (n.src ? G._evalUrl && G._evalUrl(n.src) : G.globalEval((n.text || n.textContent || n.innerHTML || "").replace(je, "")));
                a = i = null
            }
            return this
        }
    }), G.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        G.fn[e] = function (e) {
            for (var i, n = 0, o = [], s = G(e), r = s.length - 1; n <= r; n++)i = n === r ? this : this.clone(!0), G(s[n])[t](i), B.apply(o, i.get());
            return this.pushStack(o)
        }
    });
    var qe, We = {};
    !function () {
        var e, t, i = se.createElement("div");
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (e = i.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", Z.opacity = /^0.5/.test(e.style.opacity), Z.cssFloat = !!e.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === i.style.backgroundClip, e = i = null, Z.shrinkWrapBlocks = function () {
            var e, i, n;
            if (null == t) {
                if (!(e = se.getElementsByTagName("body")[0]))return;
                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", i = se.createElement("div"), n = se.createElement("div"), e.appendChild(i).appendChild(n), t = !1, typeof n.style.zoom !== he && (n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", t = 3 !== n.offsetWidth), e.removeChild(i), e = i = n = null
            }
            return t
        }
    }();
    var Be, Re, Xe = /^margin/, Ue = new RegExp("^(" + ge + ")(?!px)[a-z%]+$", "i"), Ve = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (Be = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, Re = function (e, t, i) {
        var n, o, s, r, a = e.style;
        return i = i || Be(e), r = i ? i.getPropertyValue(t) || i[t] : void 0, i && ("" !== r || G.contains(e.ownerDocument, e) || (r = G.style(e, t)), Ue.test(r) && Xe.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 === r ? r : r + ""
    }) : se.documentElement.currentStyle && (Be = function (e) {
        return e.currentStyle
    }, Re = function (e, t, i) {
        var n, o, s, r, a = e.style;
        return i = i || Be(e), null == (r = i ? i[t] : void 0) && a && a[t] && (r = a[t]), Ue.test(r) && !Ve.test(t) && (n = a.left, (s = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : r, r = a.pixelLeft + "px", a.left = n, s && (o.left = s)), void 0 === r ? r : r + "" || "auto"
    }), function () {
        function t() {
            var t, i, n = se.getElementsByTagName("body")[0];
            n && (t = se.createElement("div"), i = se.createElement("div"), t.style.cssText = c, n.appendChild(t).appendChild(i), i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", G.swap(n, null != n.style.zoom ? {zoom: 1} : {}, function () {
                o = 4 === i.offsetWidth
            }), s = !0, r = !1, a = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(i, null) || {}).top, s = "4px" === (e.getComputedStyle(i, null) || {width: "4px"}).width), n.removeChild(t), i = n = null)
        }

        var i, n, o, s, r, a, l = se.createElement("div"), c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (i = l.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", Z.opacity = /^0.5/.test(i.style.opacity), Z.cssFloat = !!i.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === l.style.backgroundClip, i = l = null, G.extend(Z, {
            reliableHiddenOffsets: function () {
                if (null != n)return n;
                var e, t, i, o = se.createElement("div"), s = se.getElementsByTagName("body")[0];
                if (s)return o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = se.createElement("div"), e.style.cssText = c, s.appendChild(e).appendChild(o), o.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = o.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", i = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", n = i && 0 === t[0].offsetHeight, s.removeChild(e), o = s = null, n
            }, boxSizing: function () {
                return null == o && t(), o
            }, boxSizingReliable: function () {
                return null == s && t(), s
            }, pixelPosition: function () {
                return null == r && t(), r
            }, reliableMarginRight: function () {
                var t, i, n, o;
                if (null == a && e.getComputedStyle) {
                    if (!(t = se.getElementsByTagName("body")[0]))return;
                    i = se.createElement("div"), n = se.createElement("div"), i.style.cssText = c, t.appendChild(i).appendChild(n), (o = n.appendChild(se.createElement("div"))).style.cssText = n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0", o.style.marginRight = o.style.width = "0", n.style.width = "1px", a = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(i)
                }
                return a
            }
        })
    }(), G.swap = function (e, t, i, n) {
        var o, s, r = {};
        for (s in t)r[s] = e.style[s], e.style[s] = t[s];
        o = i.apply(e, n || []);
        for (s in t)e.style[s] = r[s];
        return o
    };
    var Ye = /alpha\([^)]*\)/i, Ze = /opacity\s*=\s*([^)]*)/, Ge = /^(none|table(?!-c[ea]).+)/, Ke = new RegExp("^(" + ge + ")(.*)$", "i"), Qe = new RegExp("^([+-])=(" + ge + ")", "i"), Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, et = {letterSpacing: 0, fontWeight: 400}, tt = ["Webkit", "O", "Moz", "ms"];
    G.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = Re(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: Z.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = G.camelCase(t), l = e.style;
                if (t = G.cssProps[a] || (G.cssProps[a] = T(l, a)), r = G.cssHooks[t] || G.cssHooks[a], void 0 === i)return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : l[t];
                if ("string" == (s = typeof i) && (o = Qe.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(G.css(e, t)), s = "number"), null != i && i == i && ("number" !== s || G.cssNumber[a] || (i += "px"), Z.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(e, i, n)))))try {
                    l[t] = "", l[t] = i
                } catch (e) {
                }
            }
        },
        css: function (e, t, i, n) {
            var o, s, r, a = G.camelCase(t);
            return t = G.cssProps[a] || (G.cssProps[a] = T(e.style, a)), (r = G.cssHooks[t] || G.cssHooks[a]) && "get" in r && (s = r.get(e, !0, i)), void 0 === s && (s = Re(e, t, n)), "normal" === s && t in et && (s = et[t]), "" === i || i ? (o = parseFloat(s), !0 === i || G.isNumeric(o) ? o || 0 : s) : s
        }
    }), G.each(["height", "width"], function (e, t) {
        G.cssHooks[t] = {
            get: function (e, i, n) {
                if (i)return 0 === e.offsetWidth && Ge.test(G.css(e, "display")) ? G.swap(e, Je, function () {
                    return E(e, t, n)
                }) : E(e, t, n)
            }, set: function (e, i, n) {
                var o = n && Be(e);
                return $(0, i, n ? S(e, t, n, Z.boxSizing() && "border-box" === G.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), Z.opacity || (G.cssHooks.opacity = {
        get: function (e, t) {
            return Ze.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var i = e.style, n = e.currentStyle, o = G.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", s = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && "" === G.trim(s.replace(Ye, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = Ye.test(s) ? s.replace(Ye, o) : s + " " + o)
        }
    }), G.cssHooks.marginRight = k(Z.reliableMarginRight, function (e, t) {
        if (t)return G.swap(e, {display: "inline-block"}, Re, [e, "marginRight"])
    }), G.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        G.cssHooks[e + t] = {
            expand: function (i) {
                for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)o[e + ve[n] + t] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, Xe.test(e) || (G.cssHooks[e + t].set = $)
    }), G.fn.extend({
        css: function (e, t) {
            return _e(this, function (e, t, i) {
                var n, o, s = {}, r = 0;
                if (G.isArray(t)) {
                    for (n = Be(e), o = t.length; r < o; r++)s[t[r]] = G.css(e, t[r], !1, n);
                    return s
                }
                return void 0 !== i ? G.style(e, t, i) : G.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return C(this, !0)
        }, hide: function () {
            return C(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ye(this) ? G(this).show() : G(this).hide()
            })
        }
    }), G.Tween = A, (A.prototype = {
        constructor: A, init: function (e, t, i, n, o, s) {
            this.elem = e, this.prop = i, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (G.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        }, run: function (e) {
            var t, i = A.propHooks[this.prop];
            return this.options.duration ? this.pos = t = G.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : A.propHooks._default.set(this), this
        }
    }).init.prototype = A.prototype, (A.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = G.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            }, set: function (e) {
                G.fx.step[e.prop] ? G.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[G.cssProps[e.prop]] || G.cssHooks[e.prop]) ? G.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = A.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, G.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, G.fx = A.prototype.init, G.fx.step = {};
    var it, nt, ot = /^(?:toggle|show|hide)$/, st = new RegExp("^(?:([+-])=|)(" + ge + ")([a-z%]*)$", "i"), rt = /queueHooks$/, at = [function (e, t, i) {
        var n, o, s, r, a, l, c, d, u = this, p = {}, h = e.style, f = e.nodeType && ye(e), m = G._data(e, "fxshow");
        i.queue || (null == (a = G._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, u.always(function () {
            u.always(function () {
                a.unqueued--, G.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = G.css(e, "display"), d = w(e.nodeName), "none" === c && (c = d), "inline" === c && "none" === G.css(e, "float") && (Z.inlineBlockNeedsLayout && "inline" !== d ? h.zoom = 1 : h.display = "inline-block")), i.overflow && (h.overflow = "hidden", Z.shrinkWrapBlocks() || u.always(function () {
            h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
        }));
        for (n in t)if (o = t[n], ot.exec(o)) {
            if (delete t[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
                if ("show" !== o || !m || void 0 === m[n])continue;
                f = !0
            }
            p[n] = m && m[n] || G.style(e, n)
        }
        if (!G.isEmptyObject(p)) {
            m ? "hidden" in m && (f = m.hidden) : m = G._data(e, "fxshow", {}), s && (m.hidden = !f), f ? G(e).show() : u.done(function () {
                G(e).hide()
            }), u.done(function () {
                var t;
                G._removeData(e, "fxshow");
                for (t in p)G.style(e, t, p[t])
            });
            for (n in p)r = M(f ? m[n] : 0, n, u), n in m || (m[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }], lt = {
        "*": [function (e, t) {
            var i = this.createTween(e, t), n = i.cur(), o = st.exec(t), s = o && o[3] || (G.cssNumber[e] ? "" : "px"), r = (G.cssNumber[e] || "px" !== s && +n) && st.exec(G.css(i.elem, e)), a = 1, l = 20;
            if (r && r[3] !== s) {
                s = s || r[3], o = o || [], r = +n || 1;
                do {
                    r /= a = a || ".5", G.style(i.elem, e, r + s)
                } while (a !== (a = i.cur() / n) && 1 !== a && --l)
            }
            return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
        }]
    };
    G.Animation = G.extend(O, {
        tweener: function (e, t) {
            G.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var i, n = 0, o = e.length; n < o; n++)i = e[n], lt[i] = lt[i] || [], lt[i].unshift(t)
        }, prefilter: function (e, t) {
            t ? at.unshift(e) : at.push(e)
        }
    }), G.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? G.extend({}, e) : {
            complete: i || !i && t || G.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !G.isFunction(t) && t
        };
        return n.duration = G.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in G.fx.speeds ? G.fx.speeds[n.duration] : G.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            G.isFunction(n.old) && n.old.call(this), n.queue && G.dequeue(this, n.queue)
        }, n
    }, G.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(ye).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
        }, animate: function (e, t, i, n) {
            var o = G.isEmptyObject(e), s = G.speed(t, i, n), r = function () {
                var t = O(this, G.extend({}, e), s);
                (o || G._data(this, "finish")) && t.stop(!0)
            };
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        }, stop: function (e, t, i) {
            var n = function (e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, o = null != e && e + "queueHooks", s = G.timers, r = G._data(this);
                if (o)r[o] && r[o].stop && n(r[o]); else for (o in r)r[o] && r[o].stop && rt.test(o) && n(r[o]);
                for (o = s.length; o--;)s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(i), t = !1, s.splice(o, 1));
                !t && i || G.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, i = G._data(this), n = i[e + "queue"], o = i[e + "queueHooks"], s = G.timers, r = n ? n.length : 0;
                for (i.finish = !0, G.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;)s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < r; t++)n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), G.each(["toggle", "show", "hide"], function (e, t) {
        var i = G.fn[t];
        G.fn[t] = function (e, n, o) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(P(t, !0), e, n, o)
        }
    }), G.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        G.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), G.timers = [], G.fx.tick = function () {
        var e, t = G.timers, i = 0;
        for (it = G.now(); i < t.length; i++)(e = t[i])() || t[i] !== e || t.splice(i--, 1);
        t.length || G.fx.stop(), it = void 0
    }, G.fx.timer = function (e) {
        G.timers.push(e), e() ? G.fx.start() : G.timers.pop()
    }, G.fx.interval = 13, G.fx.start = function () {
        nt || (nt = setInterval(G.fx.tick, G.fx.interval))
    }, G.fx.stop = function () {
        clearInterval(nt), nt = null
    }, G.fx.speeds = {slow: 600, fast: 200, _default: 400}, G.fn.delay = function (e, t) {
        return e = G.fx ? G.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
            var n = setTimeout(t, e);
            i.stop = function () {
                clearTimeout(n)
            }
        })
    }, function () {
        var e, t, i, n, o = se.createElement("div");
        o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = o.getElementsByTagName("a")[0], n = (i = se.createElement("select")).appendChild(se.createElement("option")), t = o.getElementsByTagName("input")[0], e.style.cssText = "top:1px", Z.getSetAttribute = "t" !== o.className, Z.style = /top/.test(e.getAttribute("style")), Z.hrefNormalized = "/a" === e.getAttribute("href"), Z.checkOn = !!t.value, Z.optSelected = n.selected, Z.enctype = !!se.createElement("form").enctype, i.disabled = !0, Z.optDisabled = !n.disabled, (t = se.createElement("input")).setAttribute("value", ""), Z.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), Z.radioValue = "t" === t.value, e = t = i = n = o = null
    }();
    var ct = /\r/g;
    G.fn.extend({
        val: function (e) {
            var t, i, n, o = this[0];
            {
                if (arguments.length)return n = G.isFunction(e), this.each(function (i) {
                    var o;
                    1 === this.nodeType && (null == (o = n ? e.call(this, i, G(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : G.isArray(o) && (o = G.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = G.valHooks[this.type] || G.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o)return (t = G.valHooks[o.type] || G.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(ct, "") : null == i ? "" : i
            }
        }
    }), G.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = G.find.attr(e, "value");
                    return null != t ? t : G.text(e)
                }
            }, select: {
                get: function (e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || o < 0, r = s ? null : [], a = s ? o + 1 : n.length, l = o < 0 ? a : s ? o : 0; l < a; l++)if (((i = n[l]).selected || l === o) && (Z.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !G.nodeName(i.parentNode, "optgroup"))) {
                        if (t = G(i).val(), s)return t;
                        r.push(t)
                    }
                    return r
                }, set: function (e, t) {
                    for (var i, n, o = e.options, s = G.makeArray(t), r = o.length; r--;)if (n = o[r], G.inArray(G.valHooks.option.get(n), s) >= 0)try {
                        n.selected = i = !0
                    } catch (e) {
                        n.scrollHeight
                    } else n.selected = !1;
                    return i || (e.selectedIndex = -1), o
                }
            }
        }
    }), G.each(["radio", "checkbox"], function () {
        G.valHooks[this] = {
            set: function (e, t) {
                if (G.isArray(t))return e.checked = G.inArray(G(e).val(), t) >= 0
            }
        }, Z.checkOn || (G.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var dt, ut, pt = G.expr.attrHandle, ht = /^(?:checked|selected)$/i, ft = Z.getSetAttribute, mt = Z.input;
    G.fn.extend({
        attr: function (e, t) {
            return _e(this, G.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                G.removeAttr(this, e)
            })
        }
    }), G.extend({
        attr: function (e, t, i) {
            var n, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === he ? G.prop(e, t, i) : (1 === s && G.isXMLDoc(e) || (t = t.toLowerCase(), n = G.attrHooks[t] || (G.expr.match.bool.test(t) ? ut : dt)), void 0 === i ? n && "get" in n && null !== (o = n.get(e, t)) ? o : null == (o = G.find.attr(e, t)) ? void 0 : o : null !== i ? n && "set" in n && void 0 !== (o = n.set(e, i, t)) ? o : (e.setAttribute(t, i + ""), i) : void G.removeAttr(e, t))
        }, removeAttr: function (e, t) {
            var i, n, o = 0, s = t && t.match(ce);
            if (s && 1 === e.nodeType)for (; i = s[o++];)n = G.propFix[i] || i, G.expr.match.bool.test(i) ? mt && ft || !ht.test(i) ? e[n] = !1 : e[G.camelCase("default-" + i)] = e[n] = !1 : G.attr(e, i, ""), e.removeAttribute(ft ? i : n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Z.radioValue && "radio" === t && G.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }
    }), ut = {
        set: function (e, t, i) {
            return !1 === t ? G.removeAttr(e, i) : mt && ft || !ht.test(i) ? e.setAttribute(!ft && G.propFix[i] || i, i) : e[G.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, G.each(G.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var i = pt[t] || G.find.attr;
        pt[t] = mt && ft || !ht.test(t) ? function (e, t, n) {
            var o, s;
            return n || (s = pt[t], pt[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, pt[t] = s), o
        } : function (e, t, i) {
            if (!i)return e[G.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), mt && ft || (G.attrHooks.value = {
        set: function (e, t, i) {
            if (!G.nodeName(e, "input"))return dt && dt.set(e, t, i);
            e.defaultValue = t
        }
    }), ft || (dt = {
        set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            if (n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i))return t
        }
    }, pt.id = pt.name = pt.coords = function (e, t, i) {
        var n;
        if (!i)return (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, G.valHooks.button = {
        get: function (e, t) {
            var i = e.getAttributeNode(t);
            if (i && i.specified)return i.value
        }, set: dt.set
    }, G.attrHooks.contenteditable = {
        set: function (e, t, i) {
            dt.set(e, "" !== t && t, i)
        }
    }, G.each(["width", "height"], function (e, t) {
        G.attrHooks[t] = {
            set: function (e, i) {
                if ("" === i)return e.setAttribute(t, "auto"), i
            }
        }
    })), Z.style || (G.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var gt = /^(?:input|select|textarea|button|object)$/i, vt = /^(?:a|area)$/i;
    G.fn.extend({
        prop: function (e, t) {
            return _e(this, G.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = G.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {
                }
            })
        }
    }), G.extend({
        propFix: {for: "htmlFor", class: "className"}, prop: function (e, t, i) {
            var n, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return (1 !== s || !G.isXMLDoc(e)) && (t = G.propFix[t] || t, o = G.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = G.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), Z.hrefNormalized || G.each(["href", "src"], function (e, t) {
        G.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), Z.optSelected || (G.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), G.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        G.propFix[this.toLowerCase()] = this
    }), Z.enctype || (G.propFix.enctype = "encoding");
    var yt = /[\t\r\n\f]/g;
    G.fn.extend({
        addClass: function (e) {
            var t, i, n, o, s, r, a = 0, l = this.length, c = "string" == typeof e && e;
            if (G.isFunction(e))return this.each(function (t) {
                G(this).addClass(e.call(this, t, this.className))
            });
            if (c)for (t = (e || "").match(ce) || []; a < l; a++)if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(yt, " ") : " ")) {
                for (s = 0; o = t[s++];)n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                r = G.trim(n), i.className !== r && (i.className = r)
            }
            return this
        }, removeClass: function (e) {
            var t, i, n, o, s, r, a = 0, l = this.length, c = 0 === arguments.length || "string" == typeof e && e;
            if (G.isFunction(e))return this.each(function (t) {
                G(this).removeClass(e.call(this, t, this.className))
            });
            if (c)for (t = (e || "").match(ce) || []; a < l; a++)if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(yt, " ") : "")) {
                for (s = 0; o = t[s++];)for (; n.indexOf(" " + o + " ") >= 0;)n = n.replace(" " + o + " ", " ");
                r = e ? G.trim(n) : "", i.className !== r && (i.className = r)
            }
            return this
        }, toggleClass: function (e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : G.isFunction(e) ? this.each(function (i) {
                G(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function () {
                if ("string" === i)for (var t, n = 0, o = G(this), s = e.match(ce) || []; t = s[n++];)o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else i !== he && "boolean" !== i || (this.className && G._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : G._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, n = this.length; i < n; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(yt, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    }), G.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        G.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), G.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, i) {
            return this.on(e, null, t, i)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        }, undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var _t = G.now(), bt = /\?/, xt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    G.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
        var i, n = null, o = G.trim(t + "");
        return o && !G.trim(o.replace(xt, function (e, t, o, s) {
            return i && t && (n = 0), 0 === n ? e : (i = o || t, n += !s - !o, "")
        })) ? Function("return " + o)() : G.error("Invalid JSON: " + t)
    }, G.parseXML = function (t) {
        var i, n;
        if (!t || "string" != typeof t)return null;
        try {
            e.DOMParser ? (n = new DOMParser, i = n.parseFromString(t, "text/xml")) : ((i = new ActiveXObject("Microsoft.XMLDOM")).async = "false", i.loadXML(t))
        } catch (e) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || G.error("Invalid XML: " + t), i
    };
    var wt, kt, Tt = /#.*$/, Ct = /([?&])_=[^&]*/, $t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, St = /^(?:GET|HEAD)$/, Et = /^\/\//, At = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Nt = {}, Pt = {}, Mt = "*/".concat("*");
    try {
        kt = location.href
    } catch (e) {
        (kt = se.createElement("a")).href = "", kt = kt.href
    }
    wt = At.exec(kt.toLowerCase()) || [], G.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": G.parseJSON, "text xml": G.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? H(H(e, G.ajaxSettings), t) : H(G.ajaxSettings, e)
        },
        ajaxPrefilter: D(Nt),
        ajaxTransport: D(Pt),
        ajax: function (e, t) {
            function i(e, t, i, n) {
                var o, d, v, y, b, w = t;
                2 !== _ && (_ = 2, a && clearTimeout(a), c = void 0, r = n || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, i && (y = function (e, t, i) {
                    for (var n, o, s, r, a = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o)for (r in a)if (a[r] && a[r].test(o)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in i)s = l[0]; else {
                        for (r in i) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            n || (n = r)
                        }
                        s = s || n
                    }
                    if (s)return s !== l[0] && l.unshift(s), i[s]
                }(u, x, i)), y = function (e, t, i, n) {
                    var o, s, r, a, l, c = {}, d = e.dataTypes.slice();
                    if (d[1])for (r in e.converters)c[r.toLowerCase()] = e.converters[r];
                    for (s = d.shift(); s;)if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())if ("*" === s)s = l; else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s]))for (o in c)if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
                            break
                        }
                        if (!0 !== r)if (r && e.throws)t = r(t); else try {
                            t = r(t)
                        } catch (e) {
                            return {state: "parsererror", error: r ? e : "No conversion from " + l + " to " + s}
                        }
                    }
                    return {state: "success", data: t}
                }(u, y, x, o), o ? (u.ifModified && ((b = x.getResponseHeader("Last-Modified")) && (G.lastModified[s] = b), (b = x.getResponseHeader("etag")) && (G.etag[s] = b)), 204 === e || "HEAD" === u.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state, d = y.data, o = !(v = y.error))) : (v = w, !e && w || (w = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || w) + "", o ? f.resolveWith(p, [d, w, x]) : f.rejectWith(p, [x, w, v]), x.statusCode(g), g = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [x, u, o ? d : v]), m.fireWith(p, [x, w]), l && (h.trigger("ajaxComplete", [x, u]), --G.active || G.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, o, s, r, a, l, c, d, u = G.ajaxSetup({}, t), p = u.context || u, h = u.context && (p.nodeType || p.jquery) ? G(p) : G.event, f = G.Deferred(), m = G.Callbacks("once memory"), g = u.statusCode || {}, v = {}, y = {}, _ = 0, b = "canceled", x = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === _) {
                        if (!d)for (d = {}; t = $t.exec(r);)d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === _ ? r : null
                },
                setRequestHeader: function (e, t) {
                    var i = e.toLowerCase();
                    return _ || (e = y[i] = y[i] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return _ || (u.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (_ < 2)for (t in e)g[t] = [g[t], e[t]]; else x.always(e[x.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || b;
                    return c && c.abort(t), i(0, t), this
                }
            };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, u.url = ((e || u.url || kt) + "").replace(Tt, "").replace(Et, wt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = G.trim(u.dataType || "*").toLowerCase().match(ce) || [""], null == u.crossDomain && (n = At.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === wt[1] && n[2] === wt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (wt[3] || ("http:" === wt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = G.param(u.data, u.traditional)), F(Nt, u, t, x), 2 === _)return x;
            (l = u.global) && 0 == G.active++ && G.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !St.test(u.type), s = u.url, u.hasContent || (u.data && (s = u.url += (bt.test(s) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = Ct.test(s) ? s.replace(Ct, "$1_=" + _t++) : s + (bt.test(s) ? "&" : "?") + "_=" + _t++)), u.ifModified && (G.lastModified[s] && x.setRequestHeader("If-Modified-Since", G.lastModified[s]), G.etag[s] && x.setRequestHeader("If-None-Match", G.etag[s])), (u.data && u.hasContent && !1 !== u.contentType || t.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : u.accepts["*"]);
            for (o in u.headers)x.setRequestHeader(o, u.headers[o]);
            if (u.beforeSend && (!1 === u.beforeSend.call(p, x, u) || 2 === _))return x.abort();
            b = "abort";
            for (o in{success: 1, error: 1, complete: 1})x[o](u[o]);
            if (c = F(Pt, u, t, x)) {
                x.readyState = 1, l && h.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (a = setTimeout(function () {
                    x.abort("timeout")
                }, u.timeout));
                try {
                    _ = 1, c.send(v, i)
                } catch (e) {
                    if (!(_ < 2))throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function (e, t, i) {
            return G.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return G.get(e, void 0, t, "script")
        }
    }), G.each(["get", "post"], function (e, t) {
        G[t] = function (e, i, n, o) {
            return G.isFunction(i) && (o = o || n, n = i, i = void 0), G.ajax({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            })
        }
    }), G.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        G.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), G._evalUrl = function (e) {
        return G.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, G.fn.extend({
        wrapAll: function (e) {
            if (G.isFunction(e))return this.each(function (t) {
                G(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = G(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return G.isFunction(e) ? this.each(function (t) {
                G(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = G(this), i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = G.isFunction(e);
            return this.each(function (i) {
                G(this).wrapAll(t ? e.call(this, i) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                G.nodeName(this, "body") || G(this).replaceWith(this.childNodes)
            }).end()
        }
    }), G.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !Z.reliableHiddenOffsets() && "none" === (e.style && e.style.display || G.css(e, "display"))
    }, G.expr.filters.visible = function (e) {
        return !G.expr.filters.hidden(e)
    };
    var Ot = /%20/g, Dt = /\[\]$/, Ft = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, It = /^(?:input|select|textarea|keygen)/i;
    G.param = function (e, t) {
        var i, n = [], o = function (e, t) {
            t = G.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = G.ajaxSettings && G.ajaxSettings.traditional), G.isArray(e) || e.jquery && !G.isPlainObject(e))G.each(e, function () {
            o(this.name, this.value)
        }); else for (i in e)I(i, e[i], t, o);
        return n.join("&").replace(Ot, "+")
    }, G.fn.extend({
        serialize: function () {
            return G.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = G.prop(this, "elements");
                return e ? G.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !G(this).is(":disabled") && It.test(this.nodeName) && !Ht.test(e) && (this.checked || !be.test(e))
            }).map(function (e, t) {
                var i = G(this).val();
                return null == i ? null : G.isArray(i) ? G.map(i, function (e) {
                    return {name: t.name, value: e.replace(Ft, "\r\n")}
                }) : {name: t.name, value: i.replace(Ft, "\r\n")}
            }).get()
        }
    }), G.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && j() || function () {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }()
    } : j;
    var jt = 0, Lt = {}, zt = G.ajaxSettings.xhr();
    e.ActiveXObject && G(e).on("unload", function () {
        for (var e in Lt)Lt[e](void 0, !0)
    }), Z.cors = !!zt && "withCredentials" in zt, (zt = Z.ajax = !!zt) && G.ajaxTransport(function (e) {
        if (!e.crossDomain || Z.cors) {
            var t;
            return {
                send: function (i, n) {
                    var o, s = e.xhr(), r = ++jt;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (o in e.xhrFields)s[o] = e.xhrFields[o];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i)void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
                    s.send(e.hasContent && e.data || null), t = function (i, o) {
                        var a, l, c;
                        if (t && (o || 4 === s.readyState))if (delete Lt[r], t = void 0, s.onreadystatechange = G.noop, o)4 !== s.readyState && s.abort(); else {
                            c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                            try {
                                l = s.statusText
                            } catch (e) {
                                l = ""
                            }
                            a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                        }
                        c && n(a, l, c, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = Lt[r] = t : t()
                }, abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), G.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return G.globalEval(e), e
            }
        }
    }), G.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), G.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, i = se.head || G("head")[0] || se.documentElement;
            return {
                send: function (n, o) {
                    (t = se.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || o(200, "success"))
                    }, i.insertBefore(t, i.firstChild)
                }, abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var qt = [], Wt = /(=)\?(?=&|$)|\?\?/;
    G.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = qt.pop() || G.expando + "_" + _t++;
            return this[e] = !0, e
        }
    }), G.ajaxPrefilter("json jsonp", function (t, i, n) {
        var o, s, r, a = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])return o = t.jsonpCallback = G.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Wt, "$1" + o) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return r || G.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function () {
            r = arguments
        }, n.always(function () {
            e[o] = s, t[o] && (t.jsonpCallback = i.jsonpCallback, qt.push(o)), r && G.isFunction(s) && s(r[0]), r = s = void 0
        }), "script"
    }), G.parseHTML = function (e, t, i) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || se;
        var n = ie.exec(e), o = !i && [];
        return n ? [t.createElement(n[1])] : (n = G.buildFragment([e], t, o), o && o.length && G(o).remove(), G.merge([], n.childNodes))
    };
    var Bt = G.fn.load;
    G.fn.load = function (e, t, i) {
        if ("string" != typeof e && Bt)return Bt.apply(this, arguments);
        var n, o, s, r = this, a = e.indexOf(" ");
        return a >= 0 && (n = e.slice(a, e.length), e = e.slice(0, a)), G.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), r.length > 0 && G.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, r.html(n ? G("<div>").append(G.parseHTML(e)).find(n) : e)
        }).complete(i && function (e, t) {
                r.each(i, o || [e.responseText, t, e])
            }), this
    }, G.expr.filters.animated = function (e) {
        return G.grep(G.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Rt = e.document.documentElement;
    G.offset = {
        setOffset: function (e, t, i) {
            var n, o, s, r, a, l, c = G.css(e, "position"), d = G(e), u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), s = G.css(e, "top"), l = G.css(e, "left"), ("absolute" === c || "fixed" === c) && G.inArray("auto", [s, l]) > -1 ? (r = (n = d.position()).top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), G.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, G.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                G.offset.setOffset(this, e, t)
            });
            var t, i, n = {top: 0, left: 0}, o = this[0], s = o && o.ownerDocument;
            if (s)return t = s.documentElement, G.contains(t, o) ? (typeof o.getBoundingClientRect !== he && (n = o.getBoundingClientRect()), i = L(s), {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n
        }, position: function () {
            if (this[0]) {
                var e, t, i = {top: 0, left: 0}, n = this[0];
                return "fixed" === G.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), G.nodeName(e[0], "html") || (i = e.offset()), i.top += G.css(e[0], "borderTopWidth", !0), i.left += G.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - G.css(n, "marginTop", !0),
                    left: t.left - i.left - G.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Rt; e && !G.nodeName(e, "html") && "static" === G.css(e, "position");)e = e.offsetParent;
                return e || Rt
            })
        }
    }), G.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var i = /Y/.test(t);
        G.fn[e] = function (n) {
            return _e(this, function (e, n, o) {
                var s = L(e);
                if (void 0 === o)return s ? t in s ? s[t] : s.document.documentElement[n] : e[n];
                s ? s.scrollTo(i ? G(s).scrollLeft() : o, i ? o : G(s).scrollTop()) : e[n] = o
            }, e, n, arguments.length, null)
        }
    }), G.each(["top", "left"], function (e, t) {
        G.cssHooks[t] = k(Z.pixelPosition, function (e, i) {
            if (i)return i = Re(e, t), Ue.test(i) ? G(e).position()[t] + "px" : i
        })
    }), G.each({Height: "height", Width: "width"}, function (e, t) {
        G.each({padding: "inner" + e, content: t, "": "outer" + e}, function (i, n) {
            G.fn[n] = function (n, o) {
                var s = arguments.length && (i || "boolean" != typeof n), r = i || (!0 === n || !0 === o ? "margin" : "border");
                return _e(this, function (t, i, n) {
                    var o;
                    return G.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? G.css(t, i, r) : G.style(t, i, n, r)
                }, t, s ? n : void 0, s, null)
            }
        })
    }), G.fn.size = function () {
        return this.length
    }, G.fn.andSelf = G.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return G
    });
    var Xt = e.jQuery, Ut = e.$;
    return G.noConflict = function (t) {
        return e.$ === G && (e.$ = Ut), t && e.jQuery === G && (e.jQuery = Xt), G
    }, typeof t === he && (e.jQuery = e.$ = G), G
}), function (e) {
    var t, i, n, o, s, r, a, l = "Close", c = "BeforeClose", d = "MarkupParse", u = "Open", p = "Change", h = "mfp", f = "." + h, m = "mfp-ready", g = "mfp-removing", v = "mfp-prevent-close", y = function () {
    }, _ = !!window.jQuery, b = e(window), x = function (e, i) {
        t.ev.on(h + e + f, i)
    }, w = function (t, i, n, o) {
        var s = document.createElement("div");
        return s.className = "mfp-" + t, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = e(s), i && s.appendTo(i)), s
    }, k = function (i, n) {
        t.ev.triggerHandler(h + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
    }, T = function (i) {
        return i === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = i), t.currTemplate.closeBtn
    }, C = function () {
        e.magnificPopup.instance || ((t = new y).init(), e.magnificPopup.instance = t)
    };
    y.prototype = {
        constructor: y, init: function () {
            var i = navigator.appVersion;
            t.isIE7 = -1 !== i.indexOf("MSIE 7."), t.isIE8 = -1 !== i.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = function () {
                var e = document.createElement("p").style, t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition)return !0;
                for (; t.length;)if (t.pop() + "Transition" in e)return !0;
                return !1
            }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        }, open: function (i) {
            n || (n = e(document.body));
            var s;
            if (!1 === i.isObj) {
                t.items = i.items.toArray(), t.index = 0;
                var a, l = i.items;
                for (s = 0; l.length > s; s++)if ((a = l[s]).parsed && (a = a.el[0]), a === i.el[0]) {
                    t.index = s;
                    break
                }
            } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
            {
                if (!t.isOpen) {
                    t.types = [], r = "", t.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : o, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = w("bg").on("click" + f, function () {
                        t.close()
                    }), t.wrap = w("wrap").attr("tabindex", -1).on("click" + f, function (e) {
                        t._checkIfClose(e.target) && t.close()
                    }), t.container = w("container", t.wrap)), t.contentContainer = w("content"), t.st.preloader && (t.preloader = w("preloader", t.container, t.st.tLoading));
                    var c = e.magnificPopup.modules;
                    for (s = 0; c.length > s; s++) {
                        var p = c[s];
                        p = p.charAt(0).toUpperCase() + p.slice(1), t["init" + p].call(t)
                    }
                    k("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(d, function (e, t, i, n) {
                        i.close_replaceWith = T(n.type)
                    }), r += " mfp-close-btn-in") : t.wrap.append(T())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                        overflow: t.st.overflowY,
                        overflowX: "hidden",
                        overflowY: t.st.overflowY
                    }) : t.wrap.css({
                        top: b.scrollTop(),
                        position: "absolute"
                    }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                        height: o.height(),
                        position: "absolute"
                    }), t.st.enableEscapeKey && o.on("keyup" + f, function (e) {
                        27 === e.keyCode && t.close()
                    }), b.on("resize" + f, function () {
                        t.updateSize()
                    }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
                    var h = t.wH = b.height(), g = {};
                    if (t.fixedContentPos && t._hasScrollBar(h)) {
                        var v = t._getScrollbarSize();
                        v && (g.marginRight = v)
                    }
                    t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : g.overflow = "hidden");
                    var y = t.st.mainClass;
                    return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), k("BuildControls"), e("html").css(g), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || n), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                        t.content ? (t._addClassToMFP(m), t._setFocus()) : t.bgOverlay.addClass(m), o.on("focusin" + f, t._onFocusIn)
                    }, 16), t.isOpen = !0, t.updateSize(h), k(u), i
                }
                t.updateItemHTML()
            }
        }, close: function () {
            t.isOpen && (k(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(g), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        }, _close: function () {
            k(l);
            var i = g + " " + m + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                var n = {marginRight: ""};
                t.isIE7 ? e("body, html").css("overflow", "") : n.overflow = "", e("html").css(n)
            }
            o.off("keyup.mfp focusin" + f), t.ev.off(f), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, k("AfterClose")
        }, updateSize: function (e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth, n = window.innerHeight * i;
                t.wrap.css("height", n), t.wH = n
            } else t.wH = e || b.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), k("Resize")
        }, updateItemHTML: function () {
            var i = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
            var n = i.type;
            if (k("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
                var o = !!t.st[n] && t.st[n].markup;
                k("FirstMarkupParse", o), t.currTemplate[n] = !o || e(o)
            }
            s && s !== i.type && t.container.removeClass("mfp-" + s + "-holder");
            var r = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
            t.appendContent(r, n), i.preloaded = !0, k(p, i), s = i.type, t.container.prepend(t.contentContainer), k("AfterChange")
        }, appendContent: function (e, i) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(T()) : t.content = e : t.content = "", k("BeforeAppend"), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
        }, parseEl: function (i) {
            var n, o = t.items[i];
            if (o.tagName ? o = {el: e(o)} : (n = o.type, o = {data: o, src: o.src}), o.el) {
                for (var s = t.types, r = 0; s.length > r; r++)if (o.el.hasClass("mfp-" + s[r])) {
                    n = s[r];
                    break
                }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = n || t.st.type || "inline", o.index = i, o.parsed = !0, t.items[i] = o, k("ElementParse", o), t.items[i]
        }, addGroup: function (e, i) {
            var n = function (n) {
                n.mfpEl = this, t._openClick(n, e, i)
            };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
        }, _openClick: function (i, n, o) {
            if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                var s = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (s)if (e.isFunction(s)) {
                    if (!s.call(t))return !0
                } else if (s > b.width())return !0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
            }
        }, updateStatus: function (e, n) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                var o = {status: e, text: n};
                k("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", function (e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), i = e
            }
        }, _checkIfClose: function (i) {
            if (!e(i).hasClass(v)) {
                var n = t.st.closeOnContentClick, o = t.st.closeOnBgClick;
                if (n && o)return !0;
                if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0])return !0;
                if (i === t.content[0] || e.contains(t.content[0], i)) {
                    if (n)return !0
                } else if (o && e.contains(document, i))return !0;
                return !1
            }
        }, _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        }, _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        }, _hasScrollBar: function (e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || b.height())
        }, _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        }, _onFocusIn: function (i) {
            return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(), !1)
        }, _parseMarkup: function (t, i, n) {
            var o;
            n.data && (i = e.extend(n.data, i)), k(d, [t, i, n]), e.each(i, function (e, i) {
                if (void 0 === i || !1 === i)return !0;
                if ((o = e.split("_")).length > 1) {
                    var n = t.find(f + "-" + o[0]);
                    if (n.length > 0) {
                        var s = o[1];
                        "replaceWith" === s ? n[0] !== i[0] && n.replaceWith(i) : "img" === s ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(o[1], i)
                    }
                } else t.find(f + "-" + e).html(i)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: y.prototype,
        modules: [],
        open: function (t, i) {
            return C(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = i || 0, this.instance.open(t)
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function (t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function (i) {
        C();
        var n = e(this);
        if ("string" == typeof i)if ("open" === i) {
            var o, s = _ ? n.data("magnificPopup") : n[0].magnificPopup, r = parseInt(arguments[1], 10) || 0;
            s.items ? o = s.items[r] : (o = n, s.delegate && (o = o.find(s.delegate)), o = o.eq(r)), t._openClick({mfpEl: o}, n, s)
        } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1)); else i = e.extend(!0, {}, i), _ ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
        return n
    };
    var $, S, E, A = "inline", N = function () {
        E && (S.after(E.addClass($)).detach(), E = null)
    };
    e.magnificPopup.registerModule(A, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                t.types.push(A), x(l + "." + A, function () {
                    N()
                })
            }, getInline: function (i, n) {
                if (N(), i.src) {
                    var o = t.st.inline, s = e(i.src);
                    if (s.length) {
                        var r = s[0].parentNode;
                        r && r.tagName && (S || ($ = o.hiddenClass, S = w($), $ = "mfp-" + $), E = s.after(S).detach().removeClass($)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), s = e("<div>");
                    return i.inlineElement = s, s
                }
                return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
            }
        }
    });
    var P, M = "ajax", O = function () {
        P && n.removeClass(P)
    }, D = function () {
        O(), t.req && t.req.abort()
    };
    e.magnificPopup.registerModule(M, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                t.types.push(M), P = t.st.ajax.cursor, x(l + "." + M, D), x("BeforeChange." + M, D)
            }, getAjax: function (i) {
                P && n.addClass(P), t.updateStatus("loading");
                var o = e.extend({
                    url: i.src, success: function (n, o, s) {
                        var r = {data: n, xhr: s};
                        k("ParseAjax", r), t.appendContent(e(r.data), M), i.finished = !0, O(), t._setFocus(), setTimeout(function () {
                            t.wrap.addClass(m)
                        }, 16), t.updateStatus("ready"), k("AjaxContentAdded")
                    }, error: function () {
                        O(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }
        }
    });
    var F;
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var e = t.st.image, i = ".image";
                t.types.push("image"), x(u + i, function () {
                    "image" === t.currItem.type && e.cursor && n.addClass(e.cursor)
                }), x(l + i, function () {
                    e.cursor && n.removeClass(e.cursor), b.off("resize" + f)
                }), x("Resize" + i, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
            }, resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                }
            }, _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, F && clearInterval(F), e.isCheckingImgSize = !1, k("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            }, findImageSize: function (e) {
                var i = 0, n = e.img[0], o = function (s) {
                    F && clearInterval(F), F = setInterval(function () {
                        return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(F), void(3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                    }, s)
                };
                o(1)
            }, getImage: function (i, n) {
                var o = 0, s = function () {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, k("ImageLoadComplete")) : 200 > ++o ? setTimeout(s, 100) : r())
                }, r = function () {
                    i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                }, a = t.st.image, l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", i.img = e(c).on("load.mfploader", s).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return t._parseMarkup(n, {
                    title: function (i) {
                        if (i.data && void 0 !== i.data.title)return i.data.title;
                        var n = t.st.image.titleSrc;
                        if (n) {
                            if (e.isFunction(n))return n.call(t, i);
                            if (i.el)return i.el.attr(n) || ""
                        }
                        return ""
                    }(i), img_replaceWith: i.img
                }, i), t.resizeImage(), i.hasSize ? (F && clearInterval(F), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
            }
        }
    });
    var H;
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        }, proto: {
            initZoom: function () {
                var e, i = t.st.zoom, n = ".zoom";
                if (i.enabled && t.supportsTransition) {
                    var o, s, r = i.duration, a = function (e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), n = "all " + i.duration / 1e3 + "s " + i.easing, o = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, s = "transition";
                        return o["-webkit-" + s] = o["-moz-" + s] = o["-o-" + s] = o[s] = n, t.css(o), t
                    }, d = function () {
                        t.content.css("visibility", "visible")
                    };
                    x("BuildControls" + n, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom()))return void d();
                            (s = a(e)).css(t._getOffset()), t.wrap.append(s), o = setTimeout(function () {
                                s.css(t._getOffset(!0)), o = setTimeout(function () {
                                    d(), setTimeout(function () {
                                        s.remove(), e = s = null, k("ZoomAnimationEnded")
                                    }, 16)
                                }, r)
                            }, 16)
                        }
                    }), x(c + n, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = r, !e) {
                                if (!(e = t._getItemToZoom()))return;
                                s = a(e)
                            }
                            s.css(t._getOffset(!0)), t.wrap.append(s), t.content.css("visibility", "hidden"), setTimeout(function () {
                                s.css(t._getOffset())
                            }, 16)
                        }
                    }), x(l + n, function () {
                        t._allowZoom() && (d(), s && s.remove(), e = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === t.currItem.type
            }, _getItemToZoom: function () {
                return !!t.currItem.hasSize && t.currItem.img
            }, _getOffset: function (i) {
                var n, o = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(), s = parseInt(n.css("padding-top"), 10), r = parseInt(n.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - s;
                var a = {width: n.width(), height: (_ ? n.innerHeight() : n[0].offsetHeight) - r - s};
                return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
            }
        }
    });
    var I = "iframe", j = function (e) {
        if (t.currTemplate[I]) {
            var i = t.currTemplate[I].find("iframe");
            i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule(I, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                t.types.push(I), x("BeforeChange", function (e, t, i) {
                    t !== i && (t === I ? j() : i === I && j(!0))
                }), x(l + "." + I, function () {
                    j()
                })
            }, getIframe: function (i, n) {
                var o = i.src, s = t.st.iframe;
                e.each(s.patterns, function () {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var r = {};
                return s.srcAction && (r[s.srcAction] = o), t._parseMarkup(n, r, i), t.updateStatus("ready"), n
            }
        }
    });
    var L = function (e) {
        var i = t.items.length;
        return e > i - 1 ? e - i : 0 > e ? i + e : e
    }, z = function (e, t, i) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% из %total%"
        }, proto: {
            initGallery: function () {
                var i = t.st.gallery, n = ".mfp-gallery", s = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, !(!i || !i.enabled) && (r += " mfp-gallery", x(u + n, function () {
                    i.navigateByImgClick && t.wrap.on("click" + n, ".mfp-img", function () {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), o.on("keydown" + n, function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), x("UpdateStatus" + n, function (e, i) {
                    i.text && (i.text = z(i.text, t.currItem.index, t.items.length))
                }), x(d + n, function (e, n, o, s) {
                    var r = t.items.length;
                    o.counter = r > 1 ? z(i.tCounter, s.index, r) : ""
                }), x("BuildControls" + n, function () {
                    if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                        var n = i.arrowMarkup, o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(v), r = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(v), a = s ? "mfpFastClick" : "click";
                        o[a](function () {
                            t.prev()
                        }), r[a](function () {
                            t.next()
                        }), t.isIE7 && (w("b", o[0], !1, !0), w("a", o[0], !1, !0), w("b", r[0], !1, !0), w("a", r[0], !1, !0)), t.container.append(o.add(r))
                    }
                }), x(p + n, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void x(l + n, function () {
                    o.off(n), t.wrap.off("click" + n), t.arrowLeft && s && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                }))
            }, next: function () {
                t.direction = !0, t.index = L(t.index + 1), t.updateItemHTML()
            }, prev: function () {
                t.direction = !1, t.index = L(t.index - 1), t.updateItemHTML()
            }, goTo: function (e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            }, preloadNearbyImages: function () {
                var e, i = t.st.gallery.preload, n = Math.min(i[0], t.items.length), o = Math.min(i[1], t.items.length);
                for (e = 1; (t.direction ? o : n) >= e; e++)t._preloadItem(t.index + e);
                for (e = 1; (t.direction ? n : o) >= e; e++)t._preloadItem(t.index - e)
            }, _preloadItem: function (i) {
                if (i = L(i), !t.items[i].preloaded) {
                    var n = t.items[i];
                    n.parsed || (n = t.parseEl(i)), k("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                        n.hasSize = !0
                    }).on("error.mfploader", function () {
                        n.hasSize = !0, n.loadError = !0, k("LazyLoadError", n)
                    }).attr("src", n.src)), n.preloaded = !0
                }
            }
        }
    });
    var q = "retina";
    e.magnificPopup.registerModule(q, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina, i = e.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (x("ImageHasSize." + q, function (e, t) {
                        t.img.css({"max-width": t.img[0].naturalWidth / i, width: "100%"})
                    }), x("ElementParse." + q, function (t, n) {
                        n.src = e.replaceSrc(n, i)
                    }))
                }
            }
        }
    }), function () {
        var t = "ontouchstart" in window, i = function () {
            b.off("touchmove" + n + " touchend" + n)
        }, n = ".mfpFastClick";
        e.fn.mfpFastClick = function (o) {
            return e(this).each(function () {
                var s, r = e(this);
                if (t) {
                    var a, l, c, d, u, p;
                    r.on("touchstart" + n, function (e) {
                        d = !1, p = 1, u = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], l = u.clientX, c = u.clientY, b.on("touchmove" + n, function (e) {
                            u = e.originalEvent ? e.originalEvent.touches : e.touches, p = u.length, u = u[0], (Math.abs(u.clientX - l) > 10 || Math.abs(u.clientY - c) > 10) && (d = !0, i())
                        }).on("touchend" + n, function (e) {
                            i(), d || p > 1 || (s = !0, e.preventDefault(), clearTimeout(a), a = setTimeout(function () {
                                s = !1
                            }, 1e3), o())
                        })
                    })
                }
                r.on("click" + n, function () {
                    s || o()
                })
            })
        }, e.fn.destroyMfpFastClick = function () {
            e(this).off("touchstart" + n + " click" + n), t && b.off("touchmove" + n + " touchend" + n)
        }
    }(), C()
}(window.jQuery || window.Zepto), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var t = window.Slick || {};
    (t = function () {
        var t = 0;
        return function (i, n) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(i),
                appendDots: e(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, o, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0), s.checkResponsive(!0)
        }
    }()).prototype.addSlide = t.prototype.slickAdd = function (t, i, n) {
        var o = this;
        if ("boolean" == typeof i)n = i, i = null; else if (0 > i || i >= o.slideCount)return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, i) {
            e(i).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({height: t}, e.options.speed)
        }
    }, t.prototype.animateSlide = function (t, i) {
        var n = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: t}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({top: t}, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({animStart: o.currentLeft}).animate({animStart: t}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
            },
            complete: function () {
                i && i.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), n[o.animType] = !1 === o.options.vertical ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, t.prototype.asNavFor = function (t) {
        var i = this.options.asNavFor;
        i && null !== i && (i = e(i).not(this.$slider)), null !== i && "object" == typeof i && i.each(function () {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function (e) {
        var t = this, i = {};
        i[t.transitionType] = !1 === t.options.fade ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && !0 !== e.paused && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function () {
        var e = this;
        !1 === e.options.infinite ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (0 == e.currentSlide - 1 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
    }, t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function () {
        var t, i, n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
            for (i = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1)i += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
            i += "</ul>", n.$dots = e(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function () {
        var e, t, i, n, o, s, r, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = e * r + (t * a.options.slidesPerRow + i);
                        s.get(d) && c.appendChild(s.get(d))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.html(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function (t, i) {
        var n, o, s, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            o = null;
            for (n in r.breakpoints)r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, t.prototype.changeSlide = function (t, i) {
        var n, o, s, r = this, a = e(t.target);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = 0 != r.slideCount % r.options.slidesToScroll, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case"previous":
                o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                break;
            case"next":
                o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                break;
            case"index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function (e) {
        var t, i;
        if (t = this.getNavigableIndexes(), i = 0, e > t[t.length - 1])e = t[t.length - 1]; else for (var n in t) {
            if (e < t[n]) {
                e = i;
                break
            }
            i = t[n]
        }
        return e
    }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide), !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpRows = function () {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.html(e))
    }, t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function (t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            e(this).attr("style", e(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function (e) {
        var t = this, i = {};
        i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function (e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({zIndex: i.options.zIndex}), i.$slides.eq(e).animate({opacity: 1}, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function () {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, t.prototype.getDotCount = function () {
        var e = this, t = 0, i = 0, n = 0;
        if (!0 === e.options.infinite)for (; t < e.slideCount;)++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode)n = e.slideCount; else for (; t < e.slideCount;)++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n - 1
    }, t.prototype.getLeft = function (e) {
        var t, i, n, o = this, s = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = -1 * o.slideWidth * o.options.slidesToShow, s = -1 * i * o.options.slidesToShow), 0 != o.slideCount % o.options.slidesToScroll && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = -1 * (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth, s = -1 * (o.options.slidesToShow - (e - o.slideCount)) * i) : (o.slideOffset = -1 * o.slideCount % o.options.slidesToScroll * o.slideWidth, s = -1 * o.slideCount % o.options.slidesToScroll * i))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? -1 * e * o.slideWidth + o.slideOffset : -1 * e * i + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function () {
        var e, t = this, i = 0, n = 0, o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;)o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function () {
        return this
    }, t.prototype.getSlideCount = function () {
        var t, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function (o, s) {
            return s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft ? (t = s, !1) : void 0
        }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
    }, t.prototype.init = function (t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA()
    }, t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.on("click.slick", {message: "next"}, e.changeSlide))
    }, t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
    }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show(), !0 === e.options.autoplay && e.autoPlay()
    }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: "previous"}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: "next"}}))
    }, t.prototype.lazyLoad = function () {
        function t(t) {
            e("img[data-lazy]", t).each(function () {
                var t = e(this), i = e(this).attr("data-lazy"), n = document.createElement("img");
                n.onload = function () {
                    t.animate({opacity: 0}, 100, function () {
                        t.attr("src", i).animate({opacity: 1}, 200, function () {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, n.src = i
            })
        }

        var i, n, o, s = this;
        !0 === s.options.centerMode ? !0 === s.options.infinite ? (n = s.currentSlide + (s.options.slidesToShow / 2 + 1), o = n + s.options.slidesToShow + 2) : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = n + s.options.slidesToShow, !0 === s.options.fade && (n > 0 && n--, o <= s.slideCount && o++)), t(s.$slider.find(".slick-slide").slice(n, o)), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
    }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, t.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function () {
        this.paused = !1, this.autoPlay()
    }, t.prototype.postSlide = function (e) {
        var t = this;
        t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, !0 === t.options.autoplay && !1 === t.paused && t.autoPlay(), !0 === t.options.accessibility && t.initADA()
    }, t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, t.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function () {
        var t, i = this;
        e("img[data-lazy]", i.$slider).length > 0 && (t = e("img[data-lazy]", i.$slider).first()).attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function () {
            t.removeAttr("data-lazy"), i.progressiveLazyLoad(), !0 === i.options.adaptiveHeight && i.setPosition()
        }).error(function () {
            t.removeAttr("data-lazy"), i.progressiveLazyLoad()
        })
    }, t.prototype.refresh = function (t) {
        var i = this, n = i.currentSlide;
        i.destroy(!0), e.extend(i, i.initials, {currentSlide: n}), i.init(), t || i.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function () {
        var t, i, n, o = this, s = o.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in s)if (n = o.breakpoints.length - 1, i = s[t].breakpoint, s.hasOwnProperty(t)) {
                for (; n >= 0;)o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings
            }
            o.breakpoints.sort(function (e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), !0 === t.options.autoplay && t.focusHandler()
    }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, i) {
        var n = this;
        return "boolean" == typeof e ? (t = e, e = !0 === t ? 0 : n.slideCount - 1) : e = !0 === t ? --e : e, !(n.slideCount < 1 || 0 > e || e > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, t.prototype.setCSS = function (e) {
        var t, i, n = this, o = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function () {
        var t, i = this;
        i.$slides.each(function (n, o) {
            t = -1 * i.slideWidth * n, !0 === i.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({position: "relative", left: t, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
        }), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
    }, t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function (t, i, n) {
        var o, s, r = this;
        if ("responsive" === t && "array" === e.type(i))for (s in i)if ("array" !== e.type(r.options.responsive))r.options.responsive = [i[s]]; else {
            for (o = r.options.responsive.length - 1; o >= 0;)r.options.responsive[o].breakpoint === i[s].breakpoint && r.options.responsive.splice(o, 1), o--;
            r.options.responsive.push(i[s])
        } else r.options[t] = i;
        !0 === n && (r.unload(), r.reinit())
    }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function () {
        var e = this, t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function (e) {
        var t, i, n, o, s = this;
        i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, t.prototype.setupInfinite = function () {
        var t, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1)i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; n > t; t += 1)i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.setPaused = function (e) {
        var t = this;
        !0 === t.options.autoplay && !0 === t.options.pauseOnHover && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
    }, t.prototype.selectHandler = function (t) {
        var i = this, n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"), o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
    }, t.prototype.slideHandler = function (e, t, i) {
        var n, o, s, r, a = null, l = this;
        return t = t || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === t && l.asNavFor(e), n = e, a = l.getLeft(n), r = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? r : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(!1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(r, function () {
            l.postSlide(n)
        }) : l.postSlide(n))) : !1 === l.options.infinite && !0 === l.options.centerMode && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(!1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(r, function () {
            l.postSlide(n)
        }) : l.postSlide(n))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), o = 0 > n ? 0 != l.slideCount % l.options.slidesToScroll ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? 0 != l.slideCount % l.options.slidesToScroll ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), s = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== i ? (l.fadeSlideOut(s), l.fadeSlide(o, function () {
            l.postSlide(o)
        })) : l.postSlide(o), void l.animateHeight()) : void(!0 !== i ? l.animateSlide(a, function () {
            l.postSlide(o)
        }) : l.postSlide(o))))
    }, t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function () {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), 0 > (n = Math.round(180 * i / Math.PI)) && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= n && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
    }, t.prototype.swipeEnd = function () {
        var e, t = this;
        if (t.dragging = !1, t.shouldClick = !(t.touchObject.swipeLength > 10), void 0 === t.touchObject.curX)return !1;
        if (!0 === t.touchObject.edgeHit && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe)switch (t.swipeDirection()) {
            case"left":
                e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(e), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
                break;
            case"right":
                e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(e), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
        } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
    }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case"start":
                t.swipeStart(e);
                break;
            case"move":
                t.swipeMove(e);
                break;
            case"end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function (e) {
        var t, i, n, o, s, r = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (i = r.swipeDirection()) ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.swipeLeft = !1 === r.options.vertical ? t + n * o : t + n * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = t + n * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
    }, t.prototype.swipeStart = function (e) {
        var t, i = this;
        return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function () {
        var e = this;
        document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : !0 === e.options.autoplay && (e.paused = !1, e.autoPlay())
    }, t.prototype.initADA = function () {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
            e(this).attr({role: "option", "aria-describedby": "slick-slide" + t.instanceUid + i})
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (i) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.activateADA = function () {
        var e = this, t = e.$slider.find("*").is(":focus");
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false",
            tabindex: "0"
        }).find("a, input, button, select").attr({tabindex: "0"}), t && e.$slideTrack.find(".slick-active").focus()
    }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.on("focus.slick blur.slick", "*", function (i) {
            i.stopImmediatePropagation();
            var n = e(this);
            setTimeout(function () {
                t.isPlay && (n.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
            }, 0)
        })
    }, e.fn.slick = function () {
        var e, i = this, n = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = i.length, r = 0;
        for (r; s > r; r++)if ("object" == typeof n || void 0 === n ? i[r].slick = new t(i[r], n) : e = i[r].slick[n].apply(i[r].slick, o), void 0 !== e)return e;
        return i
    }
}), function (e) {
    var t, i = function () {
            var e = document.createElement("input"), t = "onpaste";
            return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input"
        }() + ".mask", n = navigator.userAgent, o = /iphone/i.test(n), s = /chrome/i.test(n), r = /android/i.test(n);
    e.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, e.fn.extend({
        caret: function (e, t) {
            var i;
            if (0 !== this.length && !this.is(":hidden"))return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((i = this.createTextRange()).collapse(!0), i.moveEnd("character", t), i.moveStart("character", e), i.select())
            })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), e = 0 - i.duplicate().moveStart("character", -1e5), t = e + i.text.length), {
                begin: e,
                end: t
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (n, a) {
            var l, c, d, u, p;
            return !n && this.length > 0 ? e(this[0]).data(e.mask.dataName)() : (a = e.extend({
                autoclear: e.mask.autoclear,
                placeholder: e.mask.placeholder,
                completed: null
            }, a), l = e.mask.definitions, c = [], d = p = n.length, u = null, e.each(n.split(""), function (e, t) {
                "?" == t ? (p--, d = e) : l[t] ? (c.push(new RegExp(l[t])), null === u && (u = c.length - 1)) : c.push(null)
            }), this.trigger("unmask").each(function () {
                function h(e) {
                    for (; ++e < p && !c[e];);
                    return e
                }

                function f(e, t) {
                    var i, n;
                    if (!(0 > e)) {
                        for (i = e, n = h(t); p > i; i++)if (c[i]) {
                            if (!(p > n && c[i].test(b[n])))break;
                            b[i] = b[n], b[n] = a.placeholder, n = h(n)
                        }
                        v(), _.caret(Math.max(u, e))
                    }
                }

                function m(t) {
                    var i, n, o, s = t.which, l = _.caret();
                    if (0 == s) {
                        if (l.begin >= p)return _.val(_.val().substr(0, p)), t.preventDefault(), !1;
                        l.begin == l.end && (s = _.val().charCodeAt(l.begin - 1), l.begin--, l.end--)
                    }
                    t.ctrlKey || t.altKey || t.metaKey || 32 > s || s && (0 != l.end - l.begin && (g(l.begin, l.end), f(l.begin, l.end - 1)), i = h(l.begin - 1), p > i && (n = String.fromCharCode(s), c[i].test(n) && (function (e) {
                        var t, i, n, o;
                        for (t = e, i = a.placeholder; p > t; t++)if (c[t]) {
                            if (n = h(t), o = b[t], b[t] = i, !(p > n && c[n].test(o)))break;
                            i = o
                        }
                    }(i), b[i] = n, v(), o = h(i), r ? setTimeout(e.proxy(e.fn.caret, _, o), 0) : _.caret(o), a.completed && o >= p && a.completed.call(_))), t.preventDefault())
                }

                function g(e, t) {
                    var i;
                    for (i = e; t > i && p > i; i++)c[i] && (b[i] = a.placeholder)
                }

                function v() {
                    _.val(b.join(""))
                }

                function y(e) {
                    var t, i, n, o = _.val(), s = -1;
                    for (t = 0, n = 0; p > t; t++)if (c[t]) {
                        for (b[t] = a.placeholder; n++ < o.length;)if (i = o.charAt(n - 1), c[t].test(i)) {
                            b[t] = i, s = t;
                            break
                        }
                        if (n > o.length)break
                    } else b[t] === o.charAt(n) && t !== d && (n++, s = t);
                    return e ? v() : d > s + 1 ? a.autoclear || b.join("") === x ? (_.val(""), g(0, p)) : v() : (v(), _.val(_.val().substring(0, s + 1))), d ? t : u
                }

                var _ = e(this), b = e.map(n.split(""), function (e) {
                    return "?" != e ? l[e] ? a.placeholder : e : void 0
                }), x = b.join(""), w = _.val();
                _.data(e.mask.dataName, function () {
                    return e.map(b, function (e, t) {
                        return c[t] && e != a.placeholder ? e : null
                    }).join("")
                }), _.attr("readonly") || _.one("unmask", function () {
                    _.unbind(".mask").removeData(e.mask.dataName)
                }).bind("focus.mask", function () {
                    clearTimeout(t);
                    var e;
                    w = _.val(), e = y(), t = setTimeout(function () {
                        v(), e == n.length ? _.caret(0, e) : _.caret(e)
                    }, 10)
                }).bind("blur.mask", function () {
                    y(), _.val() != w && _.change()
                }).bind("keydown.mask", function (e) {
                    var t, i, n, s = e.which;
                    8 === s || 46 === s || o && 127 === s ? (t = _.caret(), i = t.begin, 0 == (n = t.end) - i && (i = 46 !== s ? function (e) {
                        for (; --e >= 0 && !c[e];);
                        return e
                    }(i) : n = h(i - 1), n = 46 === s ? h(n) : n), g(i, n), f(i, n - 1), e.preventDefault()) : 27 == s && (_.val(w), _.caret(0, y()), e.preventDefault())
                }).bind("keypress.mask", m).bind(i, function () {
                    setTimeout(function () {
                        var e = y(!0);
                        _.caret(e), a.completed && e == _.val().length && a.completed.call(_)
                    }, 0)
                }), s && r && _.bind("keyup.mask", m), y()
            }))
        }
    })
}(jQuery), validators = function (e) {
    function t(t, i, n) {
        if ("undefined" == typeof File)return [];
        var o = e(t.input).get(0).files;
        return o ? 0 === o.length ? (n.skipOnEmpty || i.push(n.uploadRequired), []) : n.maxFiles && n.maxFiles < o.length ? (i.push(n.tooMany), []) : o : (i.push(n.message), [])
    }

    function i(e, t, i) {
        if (i.extensions && i.extensions.length > 0) {
            var n, o;
            o = ~(n = e.name.lastIndexOf(".")) ? e.name.substr(n + 1, e.name.length).toLowerCase() : "", ~i.extensions.indexOf(o) || t.push(i.wrongExtension.replace(/\{file\}/g, e.name))
        }
        i.mimeTypes && i.mimeTypes.length > 0 && (function (e, t) {
            for (var i = 0, n = e.length; n > i; i++)if (new RegExp(e[i]).test(t))return !0;
            return !1
        }(i.mimeTypes, e.type) || t.push(i.wrongMimeType.replace(/\{file\}/g, e.name))), i.maxSize && i.maxSize < e.size && t.push(i.tooBig.replace(/\{file\}/g, e.name)), i.minSize && i.minSize > e.size && t.push(i.tooSmall.replace(/\{file\}/g, e.name))
    }

    var n = {
        isEmpty: function (e) {
            return null === e || void 0 === e || e == [] || "" === e
        }, addMessage: function (e, t, i) {
            e.push(t.replace(/\{value\}/g, i))
        }, required: function (t, i, o) {
            var s = !1;
            if (void 0 === o.requiredValue) {
                var r = "string" == typeof t || t instanceof String;
                (o.strict && void 0 !== t || !o.strict && !n.isEmpty(r ? e.trim(t) : t)) && (s = !0)
            } else(!o.strict && t == o.requiredValue || o.strict && t === o.requiredValue) && (s = !0);
            s || n.addMessage(i, o.message, t)
        }, boolean: function (e, t, i) {
            if (!i.skipOnEmpty || !n.isEmpty(e)) {
                !i.strict && (e == i.trueValue || e == i.falseValue) || i.strict && (e === i.trueValue || e === i.falseValue) || n.addMessage(t, i.message, e)
            }
        }, string: function (e, t, i) {
            if (!i.skipOnEmpty || !n.isEmpty(e)) {
                if ("string" != typeof e)return void n.addMessage(t, i.message, e);
                void 0 !== i.min && e.length < i.min && n.addMessage(t, i.tooShort, e), void 0 !== i.max && e.length > i.max && n.addMessage(t, i.tooLong, e), void 0 !== i.is && e.length != i.is && n.addMessage(t, i.notEqual, e)
            }
        }, file: function (n, o, s) {
            var r = t(n, o, s);
            e.each(r, function (e, t) {
                i(t, o, s)
            })
        }, image: function (n, o, s, r) {
            var a = t(n, o, s);
            e.each(a, function (t, n) {
                if (i(n, o, s), "undefined" != typeof FileReader) {
                    var a = e.Deferred(), l = new FileReader, c = new Image;
                    c.onload = function () {
                        s.minWidth && this.width < s.minWidth && o.push(s.underWidth.replace(/\{file\}/g, n.name)), s.maxWidth && this.width > s.maxWidth && o.push(s.overWidth.replace(/\{file\}/g, n.name)), s.minHeight && this.height < s.minHeight && o.push(s.underHeight.replace(/\{file\}/g, n.name)), s.maxHeight && this.height > s.maxHeight && o.push(s.overHeight.replace(/\{file\}/g, n.name)), a.resolve()
                    }, c.onerror = function () {
                        o.push(s.notImage.replace(/\{file\}/g, n.name)), a.resolve()
                    }, l.onload = function () {
                        c.src = l.result
                    }, l.onerror = function () {
                        a.resolve()
                    }, l.readAsDataURL(n), r.push(a)
                }
            })
        }, number: function (e, t, i) {
            if (!i.skipOnEmpty || !n.isEmpty(e)) {
                if ("string" == typeof e && !e.match(i.pattern))return void n.addMessage(t, i.message, e);
                void 0 !== i.min && e < i.min && n.addMessage(t, i.tooSmall, e), void 0 !== i.max && e > i.max && n.addMessage(t, i.tooBig, e)
            }
        }, range: function (t, i, o) {
            if (!o.skipOnEmpty || !n.isEmpty(t)) {
                if (!o.allowArray && e.isArray(t))return void n.addMessage(i, o.message, t);
                var s = !0;
                e.each(e.isArray(t) ? t : [t], function (t, i) {
                    return -1 != e.inArray(i, o.range) || (s = !1, !1)
                }), o.not === s && n.addMessage(i, o.message, t)
            }
        }, regularExpression: function (e, t, i) {
            i.skipOnEmpty && n.isEmpty(e) || (!i.not && !e.match(i.pattern) || i.not && e.match(i.pattern)) && n.addMessage(t, i.message, e)
        }, email: function (e, t, i) {
            if (!i.skipOnEmpty || !n.isEmpty(e)) {
                var o = !0, s = /^((?:"?([^"]*)"?\s)?)(?:\s+)?(?:(<?)((.+)@([^>]+))(>?))$/.exec(e);
                null === s ? o = !1 : (i.enableIDN && (s[5] = punycode.toASCII(s[5]), s[6] = punycode.toASCII(s[6]), e = s[1] + s[3] + s[5] + "@" + s[6] + s[7]), o = !(s[5].length > 64) && (!((s[5] + "@" + s[6]).length > 254) && (e.match(i.pattern) || i.allowName && e.match(i.fullPattern)))), o || n.addMessage(t, i.message, e)
            }
        }, url: function (e, t, i) {
            if (!i.skipOnEmpty || !n.isEmpty(e)) {
                i.defaultScheme && !e.match(/:\/\//) && (e = i.defaultScheme + "://" + e);
                var o = !0;
                if (i.enableIDN) {
                    var s = /^([^:]+):\/\/([^\/]+)(.*)$/.exec(e);
                    null === s ? o = !1 : e = s[1] + "://" + punycode.toASCII(s[2]) + s[3]
                }
                o && e.match(i.pattern) || n.addMessage(t, i.message, e)
            }
        }, trim: function (t, i, o) {
            var s = t.find(i.input), r = s.val();
            return o.skipOnEmpty && n.isEmpty(r) || (r = e.trim(r), s.val(r)), r
        }, captcha: function (t, i, o) {
            if (!o.skipOnEmpty || !n.isEmpty(t)) {
                var s = e("body").data(o.hashKey);
                s = null == s ? o.hash : s[o.caseSensitive ? 0 : 1];
                for (var r = o.caseSensitive ? t : t.toLowerCase(), a = r.length - 1, l = 0; a >= 0; --a)l += r.charCodeAt(a);
                l != s && n.addMessage(i, o.message, t)
            }
        }, compare: function (t, i, o) {
            if (!o.skipOnEmpty || !n.isEmpty(t)) {
                var s, r = !0;
                switch (s = void 0 === o.compareAttribute ? o.compareValue : e("#" + o.compareAttribute).val(), "number" === o.type && (t = parseFloat(t), s = parseFloat(s)), o.operator) {
                    case"==":
                        r = t == s;
                        break;
                    case"===":
                        r = t === s;
                        break;
                    case"!=":
                        r = t != s;
                        break;
                    case"!==":
                        r = t !== s;
                        break;
                    case">":
                        r = t > s;
                        break;
                    case">=":
                        r = t >= s;
                        break;
                    case"<":
                        r = s > t;
                        break;
                    case"<=":
                        r = s >= t;
                        break;
                    default:
                        r = !1
                }
                r || n.addMessage(i, o.message, t)
            }
        }, ip: function (e, t, i) {
            var o = null, s = null;
            if (!i.skipOnEmpty || !n.isEmpty(e)) {
                var r = new RegExp(i.ipParsePattern).exec(e);
                return r && (o = r[1] || null, e = r[2], s = r[4] || null), !0 === i.subnet && null === s ? void n.addMessage(t, i.messages.noSubnet, e) : !1 === i.subnet && null !== s ? void n.addMessage(t, i.messages.hasSubnet, e) : !1 === i.negation && null !== o ? void n.addMessage(t, i.messages.message, e) : void(6 == function (e) {
                    return -1 === e.indexOf(":") ? 4 : 6
                }(e) ? (i.ipv6 || n.addMessage(t, i.messages.ipv6NotAllowed, e), new RegExp(i.ipv6Pattern).test(e) || n.addMessage(t, i.messages.message, e)) : (i.ipv4 || n.addMessage(t, i.messages.ipv4NotAllowed, e), new RegExp(i.ipv4Pattern).test(e) || n.addMessage(t, i.messages.message, e)))
            }
        }
    };
    return n
}(jQuery), function (e) {
    e.fn.goldCarrotForm = function (t) {
        var i = e(this), n = [], o = void 0, s = {
            errorSummary: ".error-summary",
            errorCssClass: "has-error",
            successCssClass: "has-success",
            ajaxDataType: "json",
            phoneMask: "phone",
            attributes: {
                name: {label: "Имя", rules: ["required", "string"]},
                phone: {label: "Телефон", rules: ["required", "string"]},
                email: {label: "Email", rules: ["required", "string", "email"]},
                text: {label: "Сообщение", rules: ["required", "text"]}
            },
            onSuccess: function () {
                i.find(r.errorSummary).html("<ul><li>Сообщение успешно отправлено.</li></ul>"), setTimeout(function () {
                    i.find(r.errorSummary).fadeOut(1e3, function () {
                        i.find(r.errorSummary).html("").show()
                    })
                }, 3e3)
            },
            onError: function () {
                i.find(r.errorSummary).html("<ul><li>Ошибка при отправке сообщения.</li></ul>")
            }
        }, r = e.extend({}, s, t);
        r.attributes = e.extend({}, s.attributes, t.attributes), i.on("submit", function (e) {
            e.preventDefault(), c() && u(), a(n)
        }), i.find("input, textarea, select, checkbox, radio").on("blur", function () {
            l(e(this), r.attributes)
        }), i.find("input, textarea").on("input", function () {
            var t = e(this);
            void 0 !== o && clearTimeout(o), o = setTimeout(function () {
                l(t, r.attributes), console.log("val")
            }, 300)
        }), i.find("select, checkbox, radio").on("change", function () {
            l(e(this), r.attributes)
        });
        var a = function (t) {
            var n = i.find(r.errorSummary), o = e("<ul/>");
            if (n.length && t)if (e.isArray(t) && t.length) {
                for (var s = 0; s < t.length; s++) {
                    var a = e("<li/>");
                    a.text(t[s]), o.append(a)
                }
                n.html(o)
            } else n.empty()
        }, l = function (t) {
            for (var i = [], n = [], o = 0; o < t.length; o++) {
                i = [];
                var s = e(t[o]);
                if (r.attributes.hasOwnProperty(s.attr("name"))) {
                    var a = r.attributes[s.attr("name")];
                    if (void 0 !== a.rules) {
                        void 0 === a.label && (a.label = s.attr("name"));
                        for (var l = 0; l < a.rules.length; l++)switch (a.rules[l]) {
                            case"string":
                                validators.string(s.val(), i, {
                                    message: "Значение «" + a.label + "» должно быть строкой.",
                                    max: 255,
                                    tooLong: "Значение «" + a.label + "» должно содержать максимум 255 символов.",
                                    skipOnEmpty: 1
                                });
                                break;
                            case"email":
                                validators.email(s.val(), i, {
                                    pattern: /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/,
                                    fullPattern: /^[^@]*<[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?>$/,
                                    allowName: !1,
                                    message: "Значение «" + a.label + "» не является правильным email адресом.",
                                    enableIDN: !1,
                                    skipOnEmpty: 1
                                });
                                break;
                            case"text":
                                validators.string(s.val(), i, {
                                    message: "Значение «" + a.label + "» должно быть строкой.",
                                    skipOnEmpty: 1
                                });
                                break;
                            case"required":
                                validators.required(s.val(), i, {message: "Необходимо заполнить «" + a.label + "»."})
                        }
                        s.removeClass(r.errorCssClass + " " + r.successCssClass), 0 === i.length ? s.addClass(r.successCssClass) : (s.addClass(r.errorCssClass), n.push(i))
                    }
                }
            }
            return n
        }, c = function () {
            var t = i.find("input, textarea, select, checkbox, radio");
            return 0 == (n = l(e(t), r.attributes)).length
        };
        i.find('input[name="' + r.phoneMask + '"]').mask("+7(999) 999-9999");
        var d = function () {
            i.trigger("reset"), i.find("input, textarea, select, checkbox, radio").removeClass(r.errorCssClass + " " + r.successCssClass)
        }, u = function () {
            e.ajax({
                url: r.url,
                data: i.serialize(),
                type: "post",
                dataType: r.ajaxDataType,
                success: function (e, t, i) {
                    d(), r.onSuccess(e, t, i)
                },
                error: r.onError
            })
        }
    }
}(jQuery), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return e(t, document, window, navigator)
    }) : "object" == typeof exports ? e(require("jquery"), document, window, navigator) : e(jQuery, document, window, navigator)
}(function (e, t, i, n, o) {
    var s = 0, r = function () {
        var t = n.userAgent, i = /msie\s\d+/i;
        return 0 < t.search(i) && (t = i.exec(t).toString(), 9 > (t = t.split(" ")[1])) && (e("html").addClass("lt-ie9"), !0)
    }();
    Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this, i = [].slice;
        if ("function" != typeof t)throw new TypeError;
        var n = i.call(arguments, 1), o = function () {
            if (this instanceof o) {
                (s = function () {
                }).prototype = t.prototype;
                var s = new s, r = t.apply(s, n.concat(i.call(arguments)));
                return Object(r) === r ? r : s
            }
            return t.apply(e, n.concat(i.call(arguments)))
        };
        return o
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        if (null == this)throw new TypeError('"this" is null or not defined');
        var i = Object(this), n = i.length >>> 0;
        if (0 === n)return -1;
        var o = +t || 0;
        if (1 / 0 === Math.abs(o) && (o = 0), o >= n)return -1;
        for (o = Math.max(0 <= o ? o : n - Math.abs(o), 0); o < n;) {
            if (o in i && i[o] === e)return o;
            o++
        }
        return -1
    });
    var a = function (n, s, r) {
        this.VERSION = "2.2.0", this.input = n, this.plugin_count = r, this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0, this.raf_id = this.old_min_interval = null, this.no_diapason = this.force_redraw = this.dragging = !1, this.has_tab_index = !0, this.is_update = this.is_key = !1, this.is_start = !0, this.is_click = this.is_resize = this.is_active = this.is_finish = !1, s = s || {}, this.$cache = {
            win: e(i),
            body: e(t.body),
            input: e(n),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        }, this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        }, this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var a = this.$cache.input;
        n = a.prop("value");
        var l;
        r = {
            type: "single",
            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,
            min_interval: 0,
            max_interval: 0,
            drag_interval: !1,
            values: [],
            p_values: [],
            from_fixed: !1,
            from_min: null,
            from_max: null,
            from_shadow: !1,
            to_fixed: !1,
            to_min: null,
            to_max: null,
            to_shadow: !1,
            prettify_enabled: !0,
            prettify_separator: " ",
            prettify: null,
            force_edges: !1,
            keyboard: !0,
            grid: !1,
            grid_margin: !0,
            grid_num: 4,
            grid_snap: !1,
            hide_min_max: !1,
            hide_from_to: !1,
            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: !0,
            values_separator: " — ",
            input_values_separator: ";",
            disable: !1,
            block: !1,
            extra_classes: "",
            scope: null,
            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        }, "INPUT" !== a[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", a[0]), (a = {
            type: a.data("type"),
            min: a.data("min"),
            max: a.data("max"),
            from: a.data("from"),
            to: a.data("to"),
            step: a.data("step"),
            min_interval: a.data("minInterval"),
            max_interval: a.data("maxInterval"),
            drag_interval: a.data("dragInterval"),
            values: a.data("values"),
            from_fixed: a.data("fromFixed"),
            from_min: a.data("fromMin"),
            from_max: a.data("fromMax"),
            from_shadow: a.data("fromShadow"),
            to_fixed: a.data("toFixed"),
            to_min: a.data("toMin"),
            to_max: a.data("toMax"),
            to_shadow: a.data("toShadow"),
            prettify_enabled: a.data("prettifyEnabled"),
            prettify_separator: a.data("prettifySeparator"),
            force_edges: a.data("forceEdges"),
            keyboard: a.data("keyboard"),
            grid: a.data("grid"),
            grid_margin: a.data("gridMargin"),
            grid_num: a.data("gridNum"),
            grid_snap: a.data("gridSnap"),
            hide_min_max: a.data("hideMinMax"),
            hide_from_to: a.data("hideFromTo"),
            prefix: a.data("prefix"),
            postfix: a.data("postfix"),
            max_postfix: a.data("maxPostfix"),
            decorate_both: a.data("decorateBoth"),
            values_separator: a.data("valuesSeparator"),
            input_values_separator: a.data("inputValuesSeparator"),
            disable: a.data("disable"),
            block: a.data("block"),
            extra_classes: a.data("extraClasses")
        }).values = a.values && a.values.split(",");
        for (l in a)a.hasOwnProperty(l) && (a[l] !== o && "" !== a[l] || delete a[l]);
        n !== o && "" !== n && ((n = n.split(a.input_values_separator || s.input_values_separator || ";"))[0] && n[0] == +n[0] && (n[0] = +n[0]), n[1] && n[1] == +n[1] && (n[1] = +n[1]), s && s.values && s.values.length ? (r.from = n[0] && s.values.indexOf(n[0]), r.to = n[1] && s.values.indexOf(n[1])) : (r.from = n[0] && +n[0], r.to = n[1] && +n[1])), e.extend(r, s), e.extend(r, a), this.options = r, this.update_check = {}, this.validate(), this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        }, this.init()
    };
    a.prototype = {
        init: function (e) {
            this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), e ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
        }, append: function () {
            this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>'), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
        }, setTopHandler: function () {
            var e = this.options.max, t = this.options.to;
            this.options.from > this.options.min && t === e ? this.$cache.s_from.addClass("type_last") : t < e && this.$cache.s_to.addClass("type_last")
        }, changeLevel: function (e) {
            switch (e) {
                case"single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                    break;
                case"from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                    break;
                case"to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                    break;
                case"both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
            }
        }, appendDisableMask: function () {
            this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
        }, removeDisableMask: function () {
            this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
        }, remove: function () {
            this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), r && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
        }, bindEvents: function () {
            this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), r && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
        }, pointerFocus: function (e) {
            if (!this.target) {
                var t = "single" === this.options.type ? this.$cache.single : this.$cache.from;
                e = t.offset().left, e += t.width() / 2 - 1, this.pointerClick("single", {
                    preventDefault: function () {
                    }, pageX: e
                })
            }
        }, pointerMove: function (e) {
            this.dragging && (this.coords.x_pointer = (e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc())
        }, pointerUp: function (t) {
            this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, r && e("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (e.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
        }, pointerDown: function (t, i) {
            i.preventDefault();
            var n = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
            2 !== i.button && ("both" === t && this.setTempMinInterval(), t || (t = this.target || "from"), this.current_plugin = this.plugin_count, this.target = t, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = n - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), r && e("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
        }, pointerClick: function (e, t) {
            t.preventDefault();
            var i = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
            2 !== t.button && (this.current_plugin = this.plugin_count, this.target = e, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
        }, key: function (e, t) {
            if (!(this.current_plugin !== this.plugin_count || t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)) {
                switch (t.which) {
                    case 83:
                    case 65:
                    case 40:
                    case 37:
                        t.preventDefault(), this.moveByKey(!1);
                        break;
                    case 87:
                    case 68:
                    case 38:
                    case 39:
                        t.preventDefault(), this.moveByKey(!0)
                }
                return !0
            }
        }, moveByKey: function (e) {
            var t = this.coords.p_pointer, i = (this.options.max - this.options.min) / 100, i = this.options.step / i;
            this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * (e ? t + i : t - i)), this.is_key = !0, this.calc()
        }, setMinMax: function () {
            if (this.options)if (this.options.hide_min_max)this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none"; else {
                if (this.options.values.length)this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max])); else {
                    var e = this._prettify(this.options.min), t = this._prettify(this.options.max);
                    this.result.min_pretty = e, this.result.max_pretty = t, this.$cache.min.html(this.decorate(e, this.options.min)), this.$cache.max.html(this.decorate(t, this.options.max))
                }
                this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
            }
        }, setTempMinInterval: function () {
            var e = this.result.to - this.result.from;
            null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = e
        }, restoreOriginalMinInterval: function () {
            null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
        }, calc: function (e) {
            if (this.options && (this.calc_count++, (10 === this.calc_count || e) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                switch (this.calcPointerPercent(), e = this.getHandleX(), "both" === this.target && (this.coords.p_gap = 0, e = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, e = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(e)), this.target) {
                    case"base":
                        n = (this.options.max - this.options.min) / 100;
                        e = (this.result.from - this.options.min) / n, n = (this.result.to - this.options.min) / n, this.coords.p_single_real = this.toFixed(e), this.coords.p_from_real = this.toFixed(e), this.coords.p_to_real = this.toFixed(n), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                        break;
                    case"single":
                        if (this.options.from_fixed)break;
                        this.coords.p_single_real = this.convertToRealPercent(e), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                        break;
                    case"from":
                        if (this.options.from_fixed)break;
                        this.coords.p_from_real = this.convertToRealPercent(e), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                        break;
                    case"to":
                        if (this.options.to_fixed)break;
                        this.coords.p_to_real = this.convertToRealPercent(e), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both":
                        if (this.options.from_fixed || this.options.to_fixed)break;
                        e = this.toFixed(e + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both_one":
                        if (!this.options.from_fixed && !this.options.to_fixed) {
                            var t = this.convertToRealPercent(e), i = (e = this.result.to_percent - this.result.from_percent) / 2, n = t - i, t = t + i;
                            0 > n && (n = 0, t = n + e), 100 < t && (t = 100, n = t - e), this.coords.p_from_real = this.calcWithStep(n), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(t), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                        }
                }
                "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
            }
        }, calcPointerPercent: function () {
            this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
        }, convertToRealPercent: function (e) {
            return e / (100 - this.coords.p_handle) * 100
        }, convertToFakePercent: function (e) {
            return e / 100 * (100 - this.coords.p_handle)
        }, getHandleX: function () {
            var e = 100 - this.coords.p_handle, t = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
            return 0 > t ? t = 0 : t > e && (t = e), t
        }, calcHandlePercent: function () {
            this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
        }, chooseHandle: function (e) {
            return "single" === this.options.type ? "single" : e >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
        }, calcMinMax: function () {
            this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
        }, calcLabels: function () {
            this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
        }, updateScene: function () {
            this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
        }, drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%" : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_click = this.is_key = !1, this.callOnFinish()), this.is_finish = this.is_resize = this.is_update = !1), this.force_redraw = this.is_click = this.is_key = this.is_start = !1))
        }, drawLabels: function () {
            if (this.options) {
                var e = this.options.values.length, t = this.options.p_values;
                if (!this.options.hide_from_to)if ("single" === this.options.type) {
                    if (e)e = this.decorate(t[this.result.from]); else {
                        var i = this._prettify(this.result.from);
                        e = this.decorate(i, this.result.from)
                    }
                    this.$cache.single.html(e), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                } else {
                    e ? (this.options.decorate_both ? (e = this.decorate(t[this.result.from]), e += this.options.values_separator, e += this.decorate(t[this.result.to])) : e = this.decorate(t[this.result.from] + this.options.values_separator + t[this.result.to]), i = this.decorate(t[this.result.from]), t = this.decorate(t[this.result.to])) : (i = this._prettify(this.result.from), t = this._prettify(this.result.to), this.options.decorate_both ? (e = this.decorate(i, this.result.from), e += this.options.values_separator, e += this.decorate(t, this.result.to)) : e = this.decorate(i + this.options.values_separator + t, this.result.to), i = this.decorate(i, this.result.from), t = this.decorate(t, this.result.to)), this.$cache.single.html(e), this.$cache.from.html(i), this.$cache.to.html(t), this.calcLabels(), e = Math.min(this.labels.p_single_left, this.labels.p_from_left), i = this.labels.p_single_left + this.labels.p_single_fake;
                    var t = this.labels.p_to_left + this.labels.p_to_fake, n = Math.max(i, t);
                    this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", n = t) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", n = Math.max(i, t))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), this.$cache.min[0].style.visibility = e < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = n > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                }
            }
        }, drawShadow: function () {
            var e = this.options, t = this.$cache, i = "number" == typeof e.from_min && !isNaN(e.from_min), n = "number" == typeof e.from_max && !isNaN(e.from_max), o = "number" == typeof e.to_min && !isNaN(e.to_min), s = "number" == typeof e.to_max && !isNaN(e.to_max);
            "single" === e.type ? e.from_shadow && (i || n) ? (i = this.convertToPercent(i ? e.from_min : e.min), n = this.convertToPercent(n ? e.from_max : e.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, t.shad_single[0].style.display = "block", t.shad_single[0].style.left = i + "%", t.shad_single[0].style.width = n + "%") : t.shad_single[0].style.display = "none" : (e.from_shadow && (i || n) ? (i = this.convertToPercent(i ? e.from_min : e.min), n = this.convertToPercent(n ? e.from_max : e.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, t.shad_from[0].style.display = "block", t.shad_from[0].style.left = i + "%", t.shad_from[0].style.width = n + "%") : t.shad_from[0].style.display = "none", e.to_shadow && (o || s) ? (o = this.convertToPercent(o ? e.to_min : e.min), e = this.convertToPercent(s ? e.to_max : e.max) - o, o = this.toFixed(o - this.coords.p_handle / 100 * o), e = this.toFixed(e - this.coords.p_handle / 100 * e), o += this.coords.p_handle / 2, t.shad_to[0].style.display = "block", t.shad_to[0].style.left = o + "%", t.shad_to[0].style.width = e + "%") : t.shad_to[0].style.display = "none")
        }, writeToInput: function () {
            "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
        }, callOnStart: function () {
            this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
        }, callOnChange: function () {
            this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
        }, callOnFinish: function () {
            this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
        }, callOnUpdate: function () {
            this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
        }, toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
        }, convertToPercent: function (e, t) {
            var i = this.options.max - this.options.min;
            return i ? this.toFixed((t ? e : e - this.options.min) / (i / 100)) : (this.no_diapason = !0, 0)
        }, convertToValue: function (e) {
            var t, i, n = this.options.min, o = this.options.max, s = n.toString().split(".")[1], r = o.toString().split(".")[1], a = 0, l = 0;
            return 0 === e ? this.options.min : 100 === e ? this.options.max : (s && (a = t = s.length), r && (a = i = r.length), t && i && (a = t >= i ? t : i), 0 > n && (l = Math.abs(n), n = +(n + l).toFixed(a), o = +(o + l).toFixed(a)), e = (o - n) / 100 * e + n, (n = this.options.step.toString().split(".")[1]) ? e = +e.toFixed(n.length) : (e /= this.options.step, e *= this.options.step, e = +e.toFixed(0)), l && (e -= l), (l = n ? +e.toFixed(n.length) : this.toFixed(e)) < this.options.min ? l = this.options.min : l > this.options.max && (l = this.options.max), l)
        }, calcWithStep: function (e) {
            var t = Math.round(e / this.coords.p_step) * this.coords.p_step;
            return 100 < t && (t = 100), 100 === e && (t = 100), this.toFixed(t)
        }, checkMinInterval: function (e, t, i) {
            var n = this.options;
            return n.min_interval ? (e = this.convertToValue(e), t = this.convertToValue(t), "from" === i ? t - e < n.min_interval && (e = t - n.min_interval) : e - t < n.min_interval && (e = t + n.min_interval), this.convertToPercent(e)) : e
        }, checkMaxInterval: function (e, t, i) {
            var n = this.options;
            return n.max_interval ? (e = this.convertToValue(e), t = this.convertToValue(t), "from" === i ? t - e > n.max_interval && (e = t - n.max_interval) : e - t > n.max_interval && (e = t + n.max_interval), this.convertToPercent(e)) : e
        }, checkDiapason: function (e, t, i) {
            e = this.convertToValue(e);
            var n = this.options;
            return "number" != typeof t && (t = n.min), "number" != typeof i && (i = n.max), e < t && (e = t), e > i && (e = i), this.convertToPercent(e)
        }, toFixed: function (e) {
            return +(e = e.toFixed(20))
        }, _prettify: function (e) {
            return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(e) : this.prettify(e) : e
        }, prettify: function (e) {
            return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
        }, checkEdges: function (e, t) {
            return this.options.force_edges ? (0 > e ? e = 0 : e > 100 - t && (e = 100 - t), this.toFixed(e)) : this.toFixed(e)
        }, validate: function () {
            var e, t = this.options, i = this.result, n = t.values, o = n.length;
            if ("string" == typeof t.min && (t.min = +t.min), "string" == typeof t.max && (t.max = +t.max), "string" == typeof t.from && (t.from = +t.from), "string" == typeof t.to && (t.to = +t.to), "string" == typeof t.step && (t.step = +t.step), "string" == typeof t.from_min && (t.from_min = +t.from_min), "string" == typeof t.from_max && (t.from_max = +t.from_max), "string" == typeof t.to_min && (t.to_min = +t.to_min), "string" == typeof t.to_max && (t.to_max = +t.to_max), "string" == typeof t.grid_num && (t.grid_num = +t.grid_num), t.max < t.min && (t.max = t.min), o)for (t.p_values = [], t.min = 0, t.max = o - 1, t.step = 1, t.grid_num = t.max, t.grid_snap = !0, e = 0; e < o; e++) {
                var s = +n[e];
                isNaN(s) ? s = n[e] : (n[e] = s, s = this._prettify(s)), t.p_values.push(s)
            }
            ("number" != typeof t.from || isNaN(t.from)) && (t.from = t.min), ("number" != typeof t.to || isNaN(t.to)) && (t.to = t.max), "single" === t.type ? (t.from < t.min && (t.from = t.min), t.from > t.max && (t.from = t.max)) : (t.from < t.min && (t.from = t.min), t.from > t.max && (t.from = t.max), t.to < t.min && (t.to = t.min), t.to > t.max && (t.to = t.max), this.update_check.from && (this.update_check.from !== t.from && t.from > t.to && (t.from = t.to), this.update_check.to !== t.to && t.to < t.from && (t.to = t.from)), t.from > t.to && (t.from = t.to), t.to < t.from && (t.to = t.from)), ("number" != typeof t.step || isNaN(t.step) || !t.step || 0 > t.step) && (t.step = 1), "number" == typeof t.from_min && t.from < t.from_min && (t.from = t.from_min), "number" == typeof t.from_max && t.from > t.from_max && (t.from = t.from_max), "number" == typeof t.to_min && t.to < t.to_min && (t.to = t.to_min), "number" == typeof t.to_max && t.from > t.to_max && (t.to = t.to_max), i && (i.min !== t.min && (i.min = t.min), i.max !== t.max && (i.max = t.max), (i.from < i.min || i.from > i.max) && (i.from = t.from), (i.to < i.min || i.to > i.max) && (i.to = t.to)), ("number" != typeof t.min_interval || isNaN(t.min_interval) || !t.min_interval || 0 > t.min_interval) && (t.min_interval = 0), ("number" != typeof t.max_interval || isNaN(t.max_interval) || !t.max_interval || 0 > t.max_interval) && (t.max_interval = 0), t.min_interval && t.min_interval > t.max - t.min && (t.min_interval = t.max - t.min), t.max_interval && t.max_interval > t.max - t.min && (t.max_interval = t.max - t.min)
        }, decorate: function (e, t) {
            var i = "", n = this.options;
            return n.prefix && (i += n.prefix), i += e, n.max_postfix && (n.values.length && e === n.p_values[n.max] ? (i += n.max_postfix, n.postfix && (i += " ")) : t === n.max && (i += n.max_postfix, n.postfix && (i += " "))), n.postfix && (i += n.postfix), i
        }, updateFrom: function () {
            this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
        }, updateTo: function () {
            this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
        }, updateResult: function () {
            this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
        }, appendGrid: function () {
            if (this.options.grid) {
                var e, t = this.options, i = t.max - t.min, n = t.grid_num, o = 4, s = "";
                if (this.calcGridMargin(), t.grid_snap)if (50 < i) {
                    n = 50 / t.step;
                    var r = this.toFixed(t.step / .5)
                } else n = i / t.step, r = this.toFixed(t.step / (i / 100)); else r = this.toFixed(100 / n);
                for (4 < n && (o = 3), 7 < n && (o = 2), 14 < n && (o = 1), 28 < n && (o = 0), i = 0; i < n + 1; i++) {
                    var a = o, l = this.toFixed(r * i);
                    100 < l && (l = 100), this.coords.big[i] = l;
                    var c = (l - r * (i - 1)) / (a + 1);
                    for (e = 1; e <= a && 0 !== l; e++) {
                        s += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(l - c * e) + '%"></span>'
                    }
                    s += '<span class="irs-grid-pol" style="left: ' + l + '%"></span>', e = this.convertToValue(l), s += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + l + '%">' + (e = t.values.length ? t.p_values[e] : this._prettify(e)) + "</span>"
                }
                this.coords.big_num = Math.ceil(n + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(s), this.cacheGridLabels()
            }
        }, cacheGridLabels: function () {
            var e, t = this.coords.big_num;
            for (e = 0; e < t; e++) {
                var i = this.$cache.grid.find(".js-grid-text-" + e);
                this.$cache.grid_labels.push(i)
            }
            this.calcGridLabels()
        }, calcGridLabels: function () {
            var e, t = [], i = [], n = this.coords.big_num;
            for (e = 0; e < n; e++)this.coords.big_w[e] = this.$cache.grid_labels[e].outerWidth(!1), this.coords.big_p[e] = this.toFixed(this.coords.big_w[e] / this.coords.w_rs * 100), this.coords.big_x[e] = this.toFixed(this.coords.big_p[e] / 2), t[e] = this.toFixed(this.coords.big[e] - this.coords.big_x[e]), i[e] = this.toFixed(t[e] + this.coords.big_p[e]);
            for (this.options.force_edges && (t[0] < -this.coords.grid_gap && (t[0] = -this.coords.grid_gap, i[0] = this.toFixed(t[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[n - 1] > 100 + this.coords.grid_gap && (i[n - 1] = 100 + this.coords.grid_gap, t[n - 1] = this.toFixed(i[n - 1] - this.coords.big_p[n - 1]), this.coords.big_x[n - 1] = this.toFixed(this.coords.big_p[n - 1] - this.coords.grid_gap))), this.calcGridCollision(2, t, i), this.calcGridCollision(4, t, i), e = 0; e < n; e++)t = this.$cache.grid_labels[e][0], this.coords.big_x[e] !== Number.POSITIVE_INFINITY && (t.style.marginLeft = -this.coords.big_x[e] + "%")
        }, calcGridCollision: function (e, t, i) {
            var n, o = this.coords.big_num;
            for (n = 0; n < o; n += e) {
                var s = n + e / 2;
                if (s >= o)break;
                this.$cache.grid_labels[s][0].style.visibility = i[n] <= t[s] ? "visible" : "hidden"
            }
        }, calcGridMargin: function () {
            this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
        }, update: function (t) {
            this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = e.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
        }, reset: function () {
            this.input && (this.updateResult(), this.update())
        }, destroy: function () {
            this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), e.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null)
        }
    }, e.fn.ionRangeSlider = function (t) {
        return this.each(function () {
            e.data(this, "ionRangeSlider") || e.data(this, "ionRangeSlider", new a(this, t, s++))
        })
    }, function () {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !i.requestAnimationFrame; ++n)i.requestAnimationFrame = i[t[n] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[t[n] + "CancelAnimationFrame"] || i[t[n] + "CancelRequestAnimationFrame"];
        i.requestAnimationFrame || (i.requestAnimationFrame = function (t, n) {
            var o = (new Date).getTime(), s = Math.max(0, 16 - (o - e)), r = i.setTimeout(function () {
                t(o + s)
            }, s);
            return e = o + s, r
        }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    }()
}), $(document).ready(function () {
    function e(e) {
        for (var t = 0; t <= o.categories.length; t++)if (o.categories[t] === e)return o.page = 1, !0;
        return !1
    }

    function t() {
        console.log("start render products"), $(".products-list .cover").fadeIn(), $.ajax({
            url: "/catalog/render-products",
            type: "POST",
            data: {data: o},
            success: function (e) {
                console.log("ajax success", e), $(".products-list .list").html(e)
                //$(".products-list .list").html(e)
            },
            error: function (e) {
                console.log("ajax error", e), $(".products-list .list").html(e.responseText)
            },
            complete: function (e) {
                $(".products-list .cover").fadeOut()
            }
        })
    }

    function i() {
        $.ajax({
            url: "/catalog/cart-cookie", type: "POST", data: {data: cart}, success: function (e) {
                $(".cart-href span").html(cart.length), $(".cart-modal .list").html(e.html), $(".cart-page-bottom-total strong span").html(e.total_price), $(".cart-modal-form").goldCarrotForm({url: "/mail/cart.php"})
            }, error: function () {
                alert("Внутренняя ошибка сервера. Товар не добавлен в корзину")
            }
        })
    }

    function n(e) {
        var t;
        cart.forEach(function (i, n, o) {
            console.log("elem", i), console.log("id", e), e == +i.id && (t = n, console.log("true", t))
        }), console.log("index", t), cart.splice(t, 1)
    }

    var o = {
        categories: [],
        brands: [],
        price: {min: $(".price-range__from").val(), max: $(".price-range__to").val()},
        sort: "default",
        countOnPage: 15,
        page: 1
    };
    o.categories.length && setTimeout(function () {
        $(".cat-title--main").click(), $(".cat-title--main").next().find(".cat-title").click()
    }, 100), (o.categories.length || o.brands.length) && t(),
        $(".catalog-page .filters .cat-title").on("click", function (e) {
            e.preventDefault();
            var id = $(this).attr('id');
            var thisE = $(this);
            if(id != undefined){
               $('.parent').each(function(){
                    if($(this).attr('id') != id){
                        $('.my').each(function(){
                            $(this).removeClass('active');
                        });
                        $(this).removeClass('active');
                        $(this).next().slideUp("fast");
                        (o.categories.splice(o.categories.indexOf(n), 1), console.log("cat removed", o.categories), t());
                    }else{
                        $(this).toggleClass("active");
                        $(this).next().slideToggle("fast");
                    }
                });
            }else{
                $(this).next().slideToggle("fast");
            }
    }),
    console.log(o), $(".checkboxes .brand").each(function () {
        $(this).find("input").is(":checked") && o.brands.push($(this).data("id"))
    }), $(".cat-item, .cat-title-item").each(function () {
        var e = $(this);
        e.hasClass("active") && o.categories.push(e.data("id"))
    }), $(".catalog-page .filters .cat-item .delete, .catalog-page .filters .cat-title-item .delete").on("click", function (i) {//удаление
        i.preventDefault(), i.stopPropagation(), $(this).hasClass("cat-title-item__delete") ? $(this).parent().parent().removeClass("active") : $(this).parent().removeClass("active");
        var n = $(this).data("id");
        console.log("cat removed", o.categories), (o.categories.splice(o.categories.indexOf(n), 1), t())
    }),
        ////////////////   удаление по клику
        $(".catalog-page .filters .cat-item, .catalog-page .filters .cat-title-item").on("click", function (i) {//удаление
            i.preventDefault();
            var n = $(this).data("id");
            if($(this).hasClass('active')){
                i.stopPropagation();
                $(this).removeClass('active');
                console.log("cat removed", o.categories), (o.categories.splice(o.categories.indexOf(n), 1), t())
            }else{
                $(this).addClass("active");
                e(n) || (o.categories.push(n), console.log("cat added", o.categories), t())
            }
    }),
        ////////////
    //    $(".catalog-page .filters .cat-item, .catalog-page .filters .cat-title-item").on("click", function (i) {
    //    i.preventDefault(), $(this).addClass("active");
    //    var n = $(this).data("id");
    //    e(n) || (o.categories.push(n), console.log("cat added", o.categories), t())
    //}),
        $(".catalog-page .filters .checkboxes .brand").on("click", function (e) {
        e.preventDefault();
        var i = $(this).find("input");
        i.prop("checked", !i.is(":checked"));
        var n = $(this).data(n).id;
        !function (e) {
            for (var t = 0; t <= o.brands.length; t++)if (o.brands[t] === e)return o.page = 1, !0;
            return !1
        }(n) ? (o.brands.push(n), console.log("brand added", o.brands)) : (o.brands.splice(o.brands.indexOf(n), 1), console.log("brand removed", o.brands)), t()
    }), $(".price-range__input").ionRangeSlider({
        type: "double",
        min: $(".price-range__from").val(),
        max: $(".price-range__to").val(),
        onFinish: function (e) {
            $(".price-range__from").val(e.from), $(".price-range__to").val(e.to), o.price.min = e.from, o.price.max = e.to, console.log("price updated", o.price), setTimeout(function () {
                t()
            }, 250)
        }
    });
    var s = $(".price-range__input").data("ionRangeSlider");
    $(".price-range__from").on("input", function () {
        s.update({from: $(this).val()}), o.price.min = $(this).val(), console.log("price updated", o.price), t()
    }), $(".price-range__to").on("input", function () {
        s.update({to: $(this).val()}), o.price.max = $(this).val(), console.log("price updated", o.price), t()
    }), $(document).on("click", ".pagination .set-page", function (e) {
        e.preventDefault(), $(".pagination .set-page").removeClass("chosen"), $(this).addClass("chosen"), o.page = $(this).data("id"), console.log("page updated", o.page), t(), $("html, body").animate({scrollTop: $(".catalog-page").offset().top}, 250)
    }), $(".select-count-on-pages").on("change", function () {
        o.countOnPage = $(this).val(), o.page = 1, console.log("countOnPage updated", o.countOnPage), t()
    }), $(".chosen-filters .block button").on("click", function () {
        $(this).parents(".block").remove()
    });
    $(document).on("click", ".add-to-compare", function () {
        $(this).data("id");
        "Сравнить" == $(this).text() ? $(this).html("В списке сравнения <i class='fa fa-check'></i>") : $(this).html("Сравнить")
    }), cart = [];
    var r = $("body").data("cart");
    "empty" == r ? cart = [] : (cart = r, $(".cart-href span").html(cart.length)), console.log("cart", cart), i(), $(document).on("click", ".add-to-cart", function () {
        var e = $(this).data("id");
        $(this).hasClass("added") && function (e) {
            for (var t = 0; t <= cart.length; t++)if (cart[t].id == e)return !0;
            return !1
        }(e) ? ($(this).removeClass("added").html('<p>В корзину</p><span class="fa fa-shopping-cart"></span>'), n(e), console.log("product deleted", cart)) : ($(this).addClass("added").html('<p>Убрать из корзины</p><span class="fa fa-times"></span>'), cart.push({
            id: e,
            count: 1
        }), console.log("product added", cart)), i()
    }), $(document).on("click", ".arrs .fa", function () {
        var e = $(this).parents(".counter").find(".product_count_input").val(), t = $(this).data("id");
        $(this).hasClass("fa-angle-up") ? $(this).parents(".counter").find(".product_count_input").val(parseInt(e) + 1) : $(this).parents(".counter").find(".product_count_input").val(parseInt(e) - 1), 0 == $(this).parents(".counter").find(".product_count_input").val() && $(this).parents(".counter").find(".product_count_input").val(1);
        var n = $(this).parents(".counter").find(".product_count_input").val();
        cart.forEach(function (e, i, o) {
            e.id == t && (e.count = n)
        }), i()
    }), $(document).on("click", ".cart-page-center .delete", function (e) {
        n($(this).data("id")), console.log(cart), $(this).parents(".cart-page-center-row").remove(), i()
    }), $(".item-detailview-table .toggler").on("click", function (e) {
        $(".item-detailview-table-body").slideToggle("fast"), $(this).find(".fa").toggleClass("fa-rotate-180")
    })
}), $(document).ready(function () {
    var e = !1;
    $(window).scroll(function () {
        $(this).scrollTop() >= $(".menu").offset().top && !e && (console.log("render map"), $.ajax({
            url: "http://api-maps.yandex.ru/2.1/?lang=ru_RU",
            success: function (e) {
                ymaps.ready(function () {
                    var e, t;
                    e = new ymaps.Map("map", {
                        center: [61.25897975, 73.39142755],
                        zoom: 15
                    }), t = new ymaps.Placemark([61.25864906, 73.39795068], {balloonContent: "Врачебный офис+"}, {
                        iconLayout: "default#image",
                        iconImageHref: "/images/foot.png",
                        iconImageSize: [93, 114],
                        iconImageOffset: [-28, -68],
                        hideIconOnBalloonOpen: !0
                    }), e.geoObjects.add(t), e.controls.remove("searchControl"), e.behaviors.disable("scrollZoom")
                })
            }
        }), e = !e)
    }), $(".popup-with-zoom-anim").magnificPopup({
        type: "inline",
        fixedContentPos: !1,
        fixedBgPos: !1,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
    }), $(".article-view .up").on("click", function () {
        $("html, body").animate({scrollTop: 0}, 500)
    }), $(".service-tabs .tab").on("click", function () {
        $(this).hasClass("active") || ($(".service-tabs .tab").removeClass("active"), $(this).addClass("active"), $(".service-content").hide(), $(".service-content-" + $(this).data("id")).fadeIn("fast"))
    }), $(".staff-view .hrefs .href").on("click", function () {
        $("html, body").animate({scrollTop: $(".block-text--" + $(this).data("scroll")).offset().top - 100}, 500)
    }), $(".reviews-page .reviews-page-top .left select").on("change", function () {
        var e = $(this);
        $.ajax({
            type: "POST", url: "/site/review-render", data: {data: e.val()}, success: function (e) {
                $(".reviews-page .reviews-wrap .list").html(e)
            }
        })
    }), $(".add-review-form .fa-star").on("click", function () {
        var e = $(this).data("id");
        $(".add-review-form .fa-star").removeClass("active");
        for (var t = 1; t <= e; t++)$(".add-review-form .fa-star-" + t).addClass("active");
        $(".add-review-form__rating").val(e)
    }), $(".add-review-form").goldCarrotForm({url: "/mail/review.php"}), $(document).on("click", ".feedback-form button", function (e) {
        e.preventDefault();
        return $(this).parent().find('input[type="checkbox"]').is(":checked") ? ($(this).parents(".feedback-form").submit(), !0) : ($(this).parents(".feedback-form").find(".error-summary").html("Необходимо принять условия пользовательского соглашения"), !1)
    }), $(".feedback-form").goldCarrotForm({
        url: "/mail/feedback.php",
        attributes: {agreement: {label: "Соглашение на обработку персональных данных", rules: "required"}}
    }), $(".contact-feedback-form").goldCarrotForm({url: "/mail/feedback.php"}), $(".order-form").goldCarrotForm({url: "/mail/feedback.php"}), $(".license .blocks").magnificPopup({
        type: "image",
        gallery: {enabled: !0},
        delegate: "a",
        fixedContentPos: !1,
        fixedBgPos: !1
    }), $(".gallery-item").magnificPopup({
        type: "image",
        gallery: {enabled: !0}
    }), $(".licenses-body-slider").slick({
        dots: !1,
        arrows: !0,
        infinite: !1,
        speed: 1e3,
        slidesToShow: 3,
        slidesToScroll: 2
    })
});
$(document).on('click', '#reviews', function(e){
    e.preventDefault();
    var name = $('input[name="name"]').val();
    var surname = $('input[name="surname"]').val();
    var surname2 = $('input[name="surname2"]').val();
    var message = $('textarea[name="text"]').val();
    var category = $('select[name="category"]').val();
    var star = 0;
    $('.fa-star').each(function(){
        if($(this).hasClass('active')){
            star = star + 1;
        }
    });
    $.ajax({
        url: "/site/add-reviews",
        type: "POST",
        dataType: "json",
        data: ({
            'name': name,
            'surname': surname,
            'surname2': surname2,
            'star': star,
            'message': message,
            'category': category,
        }),
        success: function(data){
            switch(data.status){
                case "success":
                    $('.error-summary').text('Ваше сообщение успешно отправлено');
                    break;
            }
        }
    });
});