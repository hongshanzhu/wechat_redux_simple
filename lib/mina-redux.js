var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(n, e) {
    "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "object" === ("undefined" == typeof module ? "undefined" : t(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) ? exports.WeAppRedux = e() : n.WeAppRedux = e();
}(void 0, function() {
    return function(t) {
        function n(o) {
            if (e[o]) return e[o].exports;
            var r = e[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return t[o].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports;
        }
        var e = {};
        return n.m = t, n.c = e, n.p = "", n(0);
    }([ function(t, n, e) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var r = o(e(3)), i = o(e(4));
        t.exports = {
            Provider: r.default,
            connect: i.default
        };
    }, function(t, n) {
        t.exports = {
            assign: function(t) {
                if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
                for (var n = Object(t), e = 1; e < arguments.length; e++) {
                    var o = arguments[e];
                    if (void 0 !== o && null !== o) for (var r in o) o.hasOwnProperty(r) && (n[r] = o[r]);
                }
                return n;
            }
        };
    }, function(t, n) {
        t.exports = function(t) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(t);
            try {
                throw new Error(t);
            } catch (t) {}
        };
    }, function(t, n, e) {
        function o(t) {
            var n = [ "subscribe", "dispatch", "getState" ].filter(function(n) {
                return !t.hasOwnProperty(n);
            });
            n.length > 0 && (0, r.default)("Store似乎不是一个合法的Redux Store对象: 缺少这些方法: " + n.join(", ") + "。");
        }
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(e(2)), i = e(1);
        t.exports = function(t) {
            return o(t), function(n) {
                return (0, i.assign)({}, n, {
                    store: t
                });
            };
        };
    }, function(t, n, e) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var r = o(e(5)), i = o(e(2)), u = o(e(6)), f = e(1), c = function(t) {
            return {};
        }, s = function(t) {
            return {
                dispatch: t
            };
        };
        t.exports = function(t, n) {
            var e = Boolean(t), o = t || c, d = getApp(), a = void 0;
            return a = "function" == typeof n ? n : n ? (0, u.default)(n) : s, function(t) {
                function n(t) {
                    if (this.unsubscribe) {
                        var n = this.store.getState(), e = o(n, t);
                        this.data && !(0, r.default)(this.data, e) && this.setData(e);
                    }
                }
                var u = t.onLoad, c = t.onUnload;
                return (0, f.assign)({}, t, a(d.store.dispatch), {
                    onLoad: function(t) {
                        this.store = d.store, this.store || (0, i.default)("Store对象不存在!"), e && (this.unsubscribe = this.store.subscribe(n.bind(this, t)), 
                        n.call(this, t)), "function" == typeof u && u.call(this, t);
                    },
                    onUnload: function() {
                        "function" == typeof c && c.call(this), "function" == typeof this.unsubscribe && this.unsubscribe();
                    }
                });
            };
        };
    }, function(t, n) {
        t.exports = function(t, n) {
            if (t === n) return !0;
            var e = Object.keys(t), o = Object.keys(n);
            if (e.length !== o.length) return !1;
            for (var r = Object.prototype.hasOwnProperty, i = 0; i < e.length; i++) if (!r.call(n, e[i]) || t[e[i]] !== n[e[i]]) return !1;
            return !0;
        };
    }, function(n, e) {
        function o(t, n) {
            return function() {
                return n(t.apply(void 0, arguments));
            };
        }
        function r(t, n) {
            if ("function" == typeof t) return o(t, n);
            if ("object" !== (void 0 === t ? "undefined" : i(t)) || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : void 0 === t ? "undefined" : i(t)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var e = Object.keys(t), r = {}, u = 0; u < e.length; u++) {
                var f = e[u], c = t[f];
                "function" == typeof c && (r[f] = o(c, n));
            }
            return r;
        }
        var i = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(n) {
            return void 0 === n ? "undefined" : t(n);
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : void 0 === n ? "undefined" : t(n);
        };
        n.exports = function(t) {
            return function(n) {
                return r(t, n);
            };
        };
    } ]);
});