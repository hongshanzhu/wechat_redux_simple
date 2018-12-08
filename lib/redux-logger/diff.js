function r(r) {
    if (Array.isArray(r)) {
        for (var e = 0, t = Array(r.length); e < r.length; e++) t[e] = r[e];
        return t;
    }
    return Array.from(r);
}

function e(r) {
    return "color: " + n[r].color + "; font-weight: bold";
}

function t(r) {
    var e = r.kind, t = r.path, o = r.lhs, n = r.rhs, f = r.index, c = r.item;
    switch (e) {
      case "E":
        return [ t.join("."), o, "→", n ];

      case "N":
        return [ t.join("."), n ];

      case "D":
        return [ t.join(".") ];

      case "A":
        return [ t.join(".") + "[" + f + "]", c ];

      default:
        return [];
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.style = e, exports.render = t, exports.default = function(f, c, i, u) {
    var a = (0, o.default)(f, c);
    try {
        u ? i.groupCollapsed("diff") : i.group("diff");
    } catch (r) {
        i.log("diff");
    }
    a ? a.forEach(function(o) {
        var f = o.kind, c = t(o);
        i.log.apply(i, [ "%c " + n[f].text, e(f) ].concat(r(c)));
    }) : i.log("—— no diff ——");
    try {
        i.groupEnd();
    } catch (r) {
        i.log("—— diff end —— ");
    }
};

var o = function(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}(require("deep-diff")), n = {
    E: {
        color: "#2196F3",
        text: "CHANGED:"
    },
    N: {
        color: "#4CAF50",
        text: "ADDED:"
    },
    D: {
        color: "#F44336",
        text: "DELETED:"
    },
    A: {
        color: "#2196F3",
        text: "ARRAY:"
    }
};