!function (e) { var n = {}; function t(r) { if (n[r])
    return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports; } t.m = e, t.c = n, t.d = function (e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r }); }, t.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, t.t = function (e, n) { if (1 & n && (e = t(e)), 8 & n)
    return e; if (4 & n && "object" == typeof e && e && e.__esModule)
    return e; var r = Object.create(null); if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e)
    for (var o in e)
        t.d(r, o, function (n) { return e[n]; }.bind(null, o)); return r; }, t.n = function (e) { var n = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return t.d(n, "a", n), n; }, t.o = function (e, n) { return Object.prototype.hasOwnProperty.call(e, n); }, t.p = "", t(t.s = 4); }([function (e, n) { function t(e, n) { if (!(this instanceof t))
        return new t(e, n); if (Array.isArray(e) || (n = e, e = []), n = n || {}, this.data = e || [], this.length = this.data.length, this.compare = n.compare || o, this.setNodeId = n.setNodeId || r, this.length > 0)
        for (var i = this.length >> 1; i >= 0; i--)
            this._down(i); if (n.setNodeId)
        for (i = 0; i < this.length; ++i)
            this.setNodeId(this.data[i], i); } function r() { } function o(e, n) { return e - n; } e.exports = t, t.prototype = { push: function (e) { this.data.push(e), this.setNodeId(e, this.length), this.length++, this._up(this.length - 1); }, pop: function () { if (0 !== this.length) {
            var e = this.data[0];
            return this.length--, this.length > 0 && (this.data[0] = this.data[this.length], this.setNodeId(this.data[0], 0), this._down(0)), this.data.pop(), e;
        } }, peek: function () { return this.data[0]; }, updateItem: function (e) { this._down(e), this._up(e); }, _up: function (e) { for (var n = this.data, t = this.compare, r = this.setNodeId, o = n[e]; e > 0;) {
            var i = e - 1 >> 1, a = n[i];
            if (t(o, a) >= 0)
                break;
            n[e] = a, r(a, e), e = i;
        } n[e] = o, r(o, e); }, _down: function (e) { for (var n = this.data, t = this.compare, r = this.length >> 1, o = n[e], i = this.setNodeId; e < r;) {
            var a = 1 + (e << 1), u = a + 1, f = n[a];
            if (u < this.length && t(n[u], f) < 0 && (a = u, f = n[u]), t(f, o) >= 0)
                break;
            n[e] = f, i(f, e), e = a;
        } n[e] = o, i(o, e); } }; }, function (e, n) { e.exports = { l2: function (e, n) { var t = e.x - n.x, r = e.y - n.y; return Math.sqrt(t * t + r * r); }, l1: function (e, n) { var t = e.x - n.x, r = e.y - n.y; return Math.abs(t) + Math.abs(r); } }; }, function (e, n) { var t = []; "function" == typeof Object.freeze && Object.freeze(t), e.exports = { heuristic: function () { return 0; }, distance: function () { return 1; }, compareFScore: function (e, n) { return e.fScore - n.fScore; }, NO_PATH: t, setHeapIndex: function (e, n) { e.heapIndex = n; }, setH1: function (e, n) { e.h1 = n; }, setH2: function (e, n) { e.h2 = n; }, compareF1Score: function (e, n) { return e.f1 - n.f1; }, compareF2Score: function (e, n) { return e.f2 - n.f2; } }; }, function (e, n) { function t(e) { this.node = e, this.parent = null, this.closed = !1, this.open = 0, this.distanceToSource = Number.POSITIVE_INFINITY, this.fScore = Number.POSITIVE_INFINITY, this.heapIndex = -1; } e.exports = function () { var e = 0, n = []; return { createNewState: function (r) { var o = n[e]; return o ? (o.node = r, o.parent = null, o.closed = !1, o.open = 0, o.distanceToSource = Number.POSITIVE_INFINITY, o.fScore = Number.POSITIVE_INFINITY, o.heapIndex = -1) : (o = new t(r), n[e] = o), e++, o; }, reset: function () { e = 0; } }; }; }, function (e, n, t) { ngraph = { graph: t(5), path: t(7) }; }, function (e, n, t) { e.exports = function (e) { "uniqueLinkId" in (e = e || {}) && (console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n", "\n", "Note: there is also change in default behavior: From now on each graph\nis considered to be not a multigraph by default (each edge is unique)."), e.multigraph = e.uniqueLinkId); void 0 === e.multigraph && (e.multigraph = !1); var n = "function" == typeof Object.create ? Object.create(null) : {}, t = [], c = {}, d = 0, s = 0, h = Object.keys ? F : j, p = e.multigraph ? function (e, n, t) { var r = f(e, n), o = c.hasOwnProperty(r); if (o || O(e, n)) {
        o || (c[r] = 0);
        var i = "@" + ++c[r];
        r = f(e + i, n + i);
    } return new u(e, n, t, r); } : function (e, n, t) { var r = f(e, n); return new u(e, n, t, r); }, l = [], I = E, v = E, g = E, N = E, S = { addNode: T, addLink: function (e, n, r) { g(); var o = k(e) || T(e), i = k(n) || T(n), u = p(e, n, r); t.push(u), a(o, u), e !== n && a(i, u); return I(u, "add"), N(), u; }, removeLink: x, removeNode: y, getNode: k, getNodesCount: function () { return d; }, getLinksCount: function () { return t.length; }, getLinks: function (e) { var n = k(e); return n ? n.links : null; }, forEachNode: h, forEachLinkedNode: function (e, t, r) { var o = k(e); if (o && o.links && "function" == typeof t)
            return r ? function (e, t, r) { for (var o = 0; o < e.length; ++o) {
                var i = e[o];
                if (i.fromId === t && r(n[i.toId], i))
                    return !0;
            } }(o.links, e, t) : function (e, t, r) { for (var o = 0; o < e.length; ++o) {
                var i = e[o], a = i.fromId === t ? i.toId : i.fromId;
                if (r(n[a], i))
                    return !0;
            } }(o.links, e, t); }, forEachLink: function (e) { var n, r; if ("function" == typeof e)
            for (n = 0, r = t.length; n < r; ++n)
                e(t[n]); }, beginUpdate: g, endUpdate: N, clear: function () { g(), h(function (e) { y(e.id); }), N(); }, hasLink: O, hasNode: k, getLink: O }; return r(S), m = S.on, S.on = function () { return S.beginUpdate = g = _, S.endUpdate = N = P, I = b, v = w, S.on = m, m.apply(S, arguments); }, S; var m; function b(e, n) { l.push({ link: e, changeType: n }); } function w(e, n) { l.push({ node: e, changeType: n }); } function T(e, t) { if (void 0 === e)
        throw new Error("Invalid node identifier"); g(); var r = k(e); return r ? (r.data = t, v(r, "update")) : (r = new i(e, t), d++, v(r, "add")), n[e] = r, N(), r; } function k(e) { return n[e]; } function y(e) { var t = k(e); if (!t)
        return !1; g(); var r = t.links; if (r) {
        t.links = null;
        for (var o = 0; o < r.length; ++o)
            x(r[o]);
    } return delete n[e], d--, v(t, "remove"), N(), !0; } function x(e) { if (!e)
        return !1; var n = o(e, t); if (n < 0)
        return !1; g(), t.splice(n, 1); var r = k(e.fromId), i = k(e.toId); return r && (n = o(e, r.links)) >= 0 && r.links.splice(n, 1), i && (n = o(e, i.links)) >= 0 && i.links.splice(n, 1), I(e, "remove"), N(), !0; } function O(e, n) { var t, r = k(e); if (!r || !r.links)
        return null; for (t = 0; t < r.links.length; ++t) {
        var o = r.links[t];
        if (o.fromId === e && o.toId === n)
            return o;
    } return null; } function E() { } function _() { s += 1; } function P() { 0 === (s -= 1) && l.length > 0 && (S.fire("changed", l), l.length = 0); } function F(e) { if ("function" == typeof e)
        for (var t = Object.keys(n), r = 0; r < t.length; ++r)
            if (e(n[t[r]]))
                return !0; } function j(e) { var t; if ("function" == typeof e)
        for (t in n)
            if (e(n[t]))
                return !0; } }; var r = t(6); function o(e, n) { if (!n)
        return -1; if (n.indexOf)
        return n.indexOf(e); var t, r = n.length; for (t = 0; t < r; t += 1)
        if (n[t] === e)
            return t; return -1; } function i(e, n) { this.id = e, this.links = null, this.data = n; } function a(e, n) { e.links ? e.links.push(n) : e.links = [n]; } function u(e, n, t, r) { this.fromId = e, this.toId = n, this.data = t, this.id = r; } function f(e, n) { return e.toString() + "👉 " + n.toString(); } }, function (e, n) { e.exports = function (e) { !function (e) { if (!e)
        throw new Error("Eventify cannot use falsy object as events subject"); for (var n = ["on", "fire", "off"], t = 0; t < n.length; ++t)
        if (e.hasOwnProperty(n[t]))
            throw new Error("Subject cannot be eventified, since it already has property '" + n[t] + "'"); }(e); var n = function (e) { var n = Object.create(null); return { on: function (t, r, o) { if ("function" != typeof r)
            throw new Error("callback is expected to be a function"); var i = n[t]; return i || (i = n[t] = []), i.push({ callback: r, ctx: o }), e; }, off: function (t, r) { var o = void 0 === t; if (o)
            return n = Object.create(null), e; if (n[t]) {
            var i = "function" != typeof r;
            if (i)
                delete n[t];
            else
                for (var a = n[t], u = 0; u < a.length; ++u)
                    a[u].callback === r && a.splice(u, 1);
        } return e; }, fire: function (t) { var r, o = n[t]; if (!o)
            return e; arguments.length > 1 && (r = Array.prototype.splice.call(arguments, 1)); for (var i = 0; i < o.length; ++i) {
            var a = o[i];
            a.callback.apply(a.ctx, r);
        } return e; } }; }(e); return e.on = n.on, e.off = n.off, e.fire = n.fire, e; }; }, function (e, n, t) { e.exports = { aStar: t(8), aGreedy: t(9), nba: t(10) }; }, function (e, n, t) { e.exports = function (e, n) { var t = (n = n || {}).oriented, i = n.heuristic; i || (i = a.heuristic); var c = n.distance; c || (c = a.distance); var d = o(); return { find: function (n, o) { var s = e.getNode(n); if (!s)
            throw new Error("fromId is not defined in this graph: " + n); var h = e.getNode(o); if (!h)
            throw new Error("toId is not defined in this graph: " + o); d.reset(); var p, l = new Map, I = new r({ compare: a.compareFScore, setNodeId: a.setHeapIndex }), v = d.createNewState(s); l.set(n, v), v.fScore = i(s, h), v.distanceToSource = 0, I.push(v), v.open = 1; for (; I.length > 0;) {
            if (p = I.pop(), g = h, p.node === g)
                return f(p);
            p.closed = !0, e.forEachLinkedNode(p.node.id, N, t);
        } var g; return u; function N(e, n) { var t = l.get(e.id); if (t || (t = d.createNewState(e), l.set(e.id, t)), !t.closed) {
            0 === t.open && (I.push(t), t.open = 1);
            var r = p.distanceToSource + c(e, p.node, n);
            r >= t.distanceToSource || (t.parent = p, t.distanceToSource = r, t.fScore = r + i(t.node, h), I.updateItem(t.heapIndex));
        } } } }; }; var r = t(0), o = t(3), i = t(1), a = t(2), u = a.NO_PATH; function f(e) { for (var n = [e.node], t = e.parent; t;)
        n.push(t.node), t = t.parent; return n; } e.exports.l2 = i.l2, e.exports.l1 = i.l1; }, function (e, n, t) { e.exports = function (e, n) { var t = (n = n || {}).oriented, i = n.heuristic; i || (i = a.heuristic); var d = n.distance; d || (d = a.distance); var s = o(); return { find: function (n, o) { var h = e.getNode(n); if (!h)
            throw new Error("fromId is not defined in this graph: " + n); var p = e.getNode(o); if (!p)
            throw new Error("toId is not defined in this graph: " + o); if (h === p)
            return [h]; s.reset(); var l = t ? function (e, n) { if (k === u) {
            if (n.fromId === y.node.id)
                return O(e, n, y);
        }
        else if (k === f && n.toId === y.node.id)
            return O(e, n, y); } : function (e, n) { return O(e, n, y); }, I = new Map, v = new r({ compare: a.compareFScore, setNodeId: a.setHeapIndex }), g = new r({ compare: a.compareFScore, setNodeId: a.setHeapIndex }), N = s.createNewState(h); I.set(n, N), N.fScore = i(h, p), N.distanceToSource = 0, v.push(N), N.open = u; var S = s.createNewState(p); S.fScore = i(p, h), S.distanceToSource = 0, g.push(S), S.open = f; var m, b, w = Number.POSITIVE_INFINITY, T = v, k = u; for (; v.length > 0 && g.length > 0;) {
            v.length < g.length ? (k = u, T = v) : (k = f, T = g);
            var y = T.pop();
            if (y.closed = !0, !(y.distanceToSource > w) && (e.forEachLinkedNode(y.node.id, l), m && b))
                return x(m, b);
        } return c; function x(e, n) { for (var t = [], r = e; r;)
            t.push(r.node), r = r.parent; for (var o = n; o;)
            t.unshift(o.node), o = o.parent; return t; } function O(e, n, t) { var r = I.get(e.id); if (r || (r = s.createNewState(e), I.set(e.id, r)), !r.closed)
            if (function (e) { var n = e.open; if (n && n !== k)
                return !0; return !1; }(r)) {
                var o = r.distanceToSource + t.distanceToSource;
                o < w && (m = r, b = t, w = o);
            }
            else {
                var a = t.distanceToSource + d(r.node, t.node, n);
                if (!(a >= r.distanceToSource)) {
                    var f = k === u ? p : h, c = a + i(r.node, f);
                    c >= w || (r.fScore = c, 0 === r.open && (T.push(r), T.updateItem(r.heapIndex), r.open = k), r.parent = t, r.distanceToSource = a);
                }
            } } } }; }; var r = t(0), o = t(3), i = t(1), a = t(2), u = 1, f = 2, c = a.NO_PATH; e.exports.l2 = i.l2, e.exports.l1 = i.l1; }, function (e, n, t) { e.exports = function (e, n) { var t = (n = n || {}).oriented, o = n.quitFast, f = n.heuristic; f || (f = i.heuristic); var c = n.distance; c || (c = i.distance); var d = a(); return { find: function (n, a) { var s = e.getNode(n); if (!s)
            throw new Error("fromId is not defined in this graph: " + n); var h = e.getNode(a); if (!h)
            throw new Error("toId is not defined in this graph: " + a); d.reset(); var p, l = t ? function (e, n) { if (n.fromId === T.node.id)
            return O(e, n); } : O, I = t ? function (e, n) { if (n.toId === T.node.id)
            return E(e, n); } : E, v = new Map, g = new r({ compare: i.compareF1Score, setNodeId: i.setH1 }), N = new r({ compare: i.compareF2Score, setNodeId: i.setH2 }), S = Number.POSITIVE_INFINITY, m = d.createNewState(s); v.set(n, m), m.g1 = 0; var b = f(s, h); m.f1 = b, g.push(m); var w = d.createNewState(h); v.set(a, w), w.g2 = 0; var T, k = b; w.f2 = k, N.push(w); for (; N.length && g.length && (g.length < N.length ? y() : x(), !o || !p);)
            ; return function (e) { if (!e)
            return u; var n = [e.node], t = e.p1; for (; t;)
            n.push(t.node), t = t.p1; var r = e.p2; for (; r;)
            n.unshift(r.node), r = r.p2; return n; }(p); function y() { (T = g.pop()).closed || (T.closed = !0, T.f1 < S && T.g1 + k - f(s, T.node) < S && e.forEachLinkedNode(T.node.id, l), g.length > 0 && (b = g.peek().f1)); } function x() { (T = N.pop()).closed || (T.closed = !0, T.f2 < S && T.g2 + b - f(T.node, h) < S && e.forEachLinkedNode(T.node.id, I), N.length > 0 && (k = N.peek().f2)); } function O(e, n) { var t = v.get(e.id); if (t || (t = d.createNewState(e), v.set(e.id, t)), !t.closed) {
            var r = T.g1 + c(T.node, e, n);
            r < t.g1 && (t.g1 = r, t.f1 = r + f(t.node, h), t.p1 = T, t.h1 < 0 ? g.push(t) : g.updateItem(t.h1));
            var o = t.g1 + t.g2;
            o < S && (S = o, p = t);
        } } function E(e, n) { var t = v.get(e.id); if (t || (t = d.createNewState(e), v.set(e.id, t)), !t.closed) {
            var r = T.g2 + c(T.node, e, n);
            r < t.g2 && (t.g2 = r, t.f2 = r + f(s, t.node), t.p2 = T, t.h2 < 0 ? N.push(t) : N.updateItem(t.h2));
            var o = t.g1 + t.g2;
            o < S && (S = o, p = t);
        } } } }; }; var r = t(0), o = t(1), i = t(2), a = t(11), u = i.NO_PATH; e.exports.l2 = o.l2, e.exports.l1 = o.l1; }, function (e, n) { function t(e) { this.node = e, this.p1 = null, this.p2 = null, this.closed = !1, this.g1 = Number.POSITIVE_INFINITY, this.g2 = Number.POSITIVE_INFINITY, this.f1 = Number.POSITIVE_INFINITY, this.f2 = Number.POSITIVE_INFINITY, this.h1 = -1, this.h2 = -1; } e.exports = function () { var e = 0, n = []; return { createNewState: function (r) { var o = n[e]; o ? (o.node = r, o.p1 = null, o.p2 = null, o.closed = !1, o.g1 = Number.POSITIVE_INFINITY, o.g2 = Number.POSITIVE_INFINITY, o.f1 = Number.POSITIVE_INFINITY, o.f2 = Number.POSITIVE_INFINITY, o.h1 = -1, o.h2 = -1) : (o = new t(r), n[e] = o); return e++, o; }, reset: function () { e = 0; } }; }; }]);
