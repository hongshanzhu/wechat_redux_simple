function t(t) {
    if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
        return r;
    }
    return Array.from(t);
}

function e(e, r, n, a) {
    switch (void 0 === e ? "undefined" : o(e)) {
      case "object":
        return "function" == typeof e[a] ? e[a].apply(e, t(n)) : e[a];

      case "function":
        return e(r);

      default:
        return e;
    }
}

function r(t) {
    var e = t.timestamp, r = t.duration;
    return function(t, o, n) {
        var a = [ "action" ];
        return a.push("%c" + String(t.type)), e && a.push("%c@ " + o), r && a.push("%c(in " + n.toFixed(2) + " ms)"), 
        a.join(" ");
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, n = require("./helpers"), a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./diff"));

exports.default = function(t, o) {
    var i = o.logger, c = o.actionTransformer, l = o.titleFormatter, f = void 0 === l ? r(o) : l, u = o.collapsed, p = o.colors, s = o.level, d = o.diff, y = void 0 === o.titleFormatter;
    t.forEach(function(r, l) {
        var g = r.started, v = r.startedTime, h = r.action, m = r.prevState, S = r.error, b = r.took, w = r.nextState, x = t[l + 1];
        x && (w = x.prevState, b = x.started - g);
        var A = c(h), T = "function" == typeof u ? u(function() {
            return w;
        }, h, r) : u, C = (0, n.formatTime)(v), E = p.title ? "color: " + p.title(A) + ";" : "", _ = [ "color: gray; font-weight: lighter;" ];
        _.push(E), o.timestamp && _.push("color: gray; font-weight: lighter;"), o.duration && _.push("color: gray; font-weight: lighter;");
        var j = f(A, C, b);
        try {
            T ? p.title && y ? i.groupCollapsed.apply(i, [ "%c " + j ].concat(_)) : i.groupCollapsed(j) : p.title && y ? i.group.apply(i, [ "%c " + j ].concat(_)) : i.group(j);
        } catch (t) {
            i.log(j);
        }
        var F = e(s, A, [ m ], "prevState"), q = e(s, A, [ A ], "action"), M = e(s, A, [ S, m ], "error"), k = e(s, A, [ w ], "nextState");
        if (F) if (p.prevState) {
            var O = "color: " + p.prevState(m) + "; font-weight: bold";
            i[F]("%c prev state", O, m);
        } else i[F]("prev state", m);
        if (q) if (p.action) {
            var P = "color: " + p.action(A) + "; font-weight: bold";
            i[q]("%c action    ", P, A);
        } else i[q]("action    ", A);
        if (S && M) if (p.error) {
            var R = "color: " + p.error(S, m) + "; font-weight: bold;";
            i[M]("%c error     ", R, S);
        } else i[M]("error     ", S);
        if (k) if (p.nextState) {
            var z = "color: " + p.nextState(w) + "; font-weight: bold";
            i[k]("%c next state", z, w);
        } else i[k]("next state", w);
        i.withTrace && (i.groupCollapsed("TRACE"), i.trace(), i.groupEnd()), d && (0, a.default)(m, w, i, T);
        try {
            i.groupEnd();
        } catch (t) {
            i.log("—— log end ——");
        }
    });
};