Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = exports.repeat = function(e, r) {
    return new Array(r + 1).join(e);
}, r = exports.pad = function(r, t) {
    return e("0", t - r.toString().length) + r;
};

exports.formatTime = function(e) {
    return r(e.getHours(), 2) + ":" + r(e.getMinutes(), 2) + ":" + r(e.getSeconds(), 2) + "." + r(e.getMilliseconds(), 3);
}, exports.timer = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date;