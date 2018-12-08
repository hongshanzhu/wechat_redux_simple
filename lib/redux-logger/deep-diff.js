var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(t, n) {
    "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.DeepDiff = n();
}(void 0, function() {
    function t(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
    }
    function n(e, t) {
        Object.defineProperty(this, "kind", {
            value: e,
            enumerable: !0
        }), t && t.length && Object.defineProperty(this, "path", {
            value: t,
            enumerable: !0
        });
    }
    function i(e, t, n) {
        i.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
            value: t,
            enumerable: !0
        }), Object.defineProperty(this, "rhs", {
            value: n,
            enumerable: !0
        });
    }
    function r(e, t) {
        r.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
            value: t,
            enumerable: !0
        });
    }
    function a(e, t) {
        a.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
            value: t,
            enumerable: !0
        });
    }
    function o(e, t, n) {
        o.super_.call(this, "A", e), Object.defineProperty(this, "index", {
            value: t,
            enumerable: !0
        }), Object.defineProperty(this, "item", {
            value: n,
            enumerable: !0
        });
    }
    function l(e, t, n) {
        var i = e.slice((n || t) + 1 || e.length);
        return e.length = t < 0 ? e.length + t : t, e.push.apply(e, i), e;
    }
    function f(t) {
        var n = void 0 === t ? "undefined" : e(t);
        return "object" !== n ? n : t === Math ? "math" : null === t ? "null" : Array.isArray(t) ? "array" : "[object Date]" === Object.prototype.toString.call(t) ? "date" : "function" == typeof t.toString && /^\/.*\//.test(t.toString()) ? "regexp" : "object";
    }
    function u(t, n, h, c, s, p, d) {
        s = s || [], d = d || [];
        var b = s.slice(0);
        if (void 0 !== p) {
            if (c) {
                if ("function" == typeof c && c(b, p)) return;
                if ("object" === (void 0 === c ? "undefined" : e(c))) {
                    if (c.prefilter && c.prefilter(b, p)) return;
                    if (c.normalize) {
                        var v = c.normalize(b, p, t, n);
                        v && (t = v[0], n = v[1]);
                    }
                }
            }
            b.push(p);
        }
        "regexp" === f(t) && "regexp" === f(n) && (t = t.toString(), n = n.toString());
        var y = void 0 === t ? "undefined" : e(t), m = void 0 === n ? "undefined" : e(n), g = "undefined" !== y || d && d[d.length - 1].lhs && d[d.length - 1].lhs.hasOwnProperty(p), k = "undefined" !== m || d && d[d.length - 1].rhs && d[d.length - 1].rhs.hasOwnProperty(p);
        if (!g && k) h(new r(b, n)); else if (!k && g) h(new a(b, t)); else if (f(t) !== f(n)) h(new i(b, t, n)); else if ("date" === f(t) && t - n != 0) h(new i(b, t, n)); else if ("object" === y && null !== t && null !== n) if (d.filter(function(e) {
            return e.lhs === t;
        }).length) t !== n && h(new i(b, t, n)); else {
            if (d.push({
                lhs: t,
                rhs: n
            }), Array.isArray(t)) {
                var w;
                t.length;
                for (w = 0; w < t.length; w++) w >= n.length ? h(new o(b, w, new a(void 0, t[w]))) : u(t[w], n[w], h, c, b, w, d);
                for (;w < n.length; ) h(new o(b, w, new r(void 0, n[w++])));
            } else {
                var j = Object.keys(t), D = Object.keys(n);
                j.forEach(function(e, i) {
                    var r = D.indexOf(e);
                    r >= 0 ? (u(t[e], n[e], h, c, b, e, d), D = l(D, r)) : u(t[e], void 0, h, c, b, e, d);
                }), D.forEach(function(e) {
                    u(void 0, n[e], h, c, b, e, d);
                });
            }
            d.length = d.length - 1;
        } else t !== n && ("number" === y && isNaN(t) && isNaN(n) || h(new i(b, t, n)));
    }
    function h(e, t, n, i) {
        return i = i || [], u(e, t, function(e) {
            e && i.push(e);
        }, n), i.length ? i : void 0;
    }
    function c(e, t, n) {
        if (n.path && n.path.length) {
            var i, r = e[t], a = n.path.length - 1;
            for (i = 0; i < a; i++) r = r[n.path[i]];
            switch (n.kind) {
              case "A":
                c(r[n.path[i]], n.index, n.item);
                break;

              case "D":
                delete r[n.path[i]];
                break;

              case "E":
              case "N":
                r[n.path[i]] = n.rhs;
            }
        } else switch (n.kind) {
          case "A":
            c(e[t], n.index, n.item);
            break;

          case "D":
            e = l(e, t);
            break;

          case "E":
          case "N":
            e[t] = n.rhs;
        }
        return e;
    }
    function s(e, t, n) {
        if (e && t && n && n.kind) {
            for (var i = e, r = -1, a = n.path ? n.path.length - 1 : 0; ++r < a; ) void 0 === i[n.path[r]] && (i[n.path[r]] = "number" == typeof n.path[r] ? [] : {}), 
            i = i[n.path[r]];
            switch (n.kind) {
              case "A":
                c(n.path ? i[n.path[r]] : i, n.index, n.item);
                break;

              case "D":
                delete i[n.path[r]];
                break;

              case "E":
              case "N":
                i[n.path[r]] = n.rhs;
            }
        }
    }
    function p(e, t, n) {
        if (n.path && n.path.length) {
            var i, r = e[t], a = n.path.length - 1;
            for (i = 0; i < a; i++) r = r[n.path[i]];
            switch (n.kind) {
              case "A":
                p(r[n.path[i]], n.index, n.item);
                break;

              case "D":
              case "E":
                r[n.path[i]] = n.lhs;
                break;

              case "N":
                delete r[n.path[i]];
            }
        } else switch (n.kind) {
          case "A":
            p(e[t], n.index, n.item);
            break;

          case "D":
          case "E":
            e[t] = n.lhs;
            break;

          case "N":
            e = l(e, t);
        }
        return e;
    }
    var d, b, v = [];
    return d = "object" === ("undefined" == typeof global ? "undefined" : e(global)) && global ? global : "undefined" != typeof window ? window : {}, 
    (b = d.DeepDiff) && v.push(function() {
        void 0 !== b && d.DeepDiff === h && (d.DeepDiff = b, b = void 0);
    }), t(i, n), t(r, n), t(a, n), t(o, n), Object.defineProperties(h, {
        diff: {
            value: h,
            enumerable: !0
        },
        observableDiff: {
            value: u,
            enumerable: !0
        },
        applyDiff: {
            value: function(e, t, n) {
                e && t && u(e, t, function(i) {
                    n && !n(e, t, i) || s(e, t, i);
                });
            },
            enumerable: !0
        },
        applyChange: {
            value: s,
            enumerable: !0
        },
        revertChange: {
            value: function(e, t, n) {
                if (e && t && n && n.kind) {
                    var i, r, a = e;
                    for (r = n.path.length - 1, i = 0; i < r; i++) void 0 === a[n.path[i]] && (a[n.path[i]] = {}), 
                    a = a[n.path[i]];
                    switch (n.kind) {
                      case "A":
                        p(a[n.path[i]], n.index, n.item);
                        break;

                      case "D":
                      case "E":
                        a[n.path[i]] = n.lhs;
                        break;

                      case "N":
                        delete a[n.path[i]];
                    }
                }
            },
            enumerable: !0
        },
        isConflict: {
            value: function() {
                return void 0 !== b;
            },
            enumerable: !0
        },
        noConflict: {
            value: function() {
                return v && (v.forEach(function(e) {
                    e();
                }), v = null), h;
            },
            enumerable: !0
        }
    }), h;
});