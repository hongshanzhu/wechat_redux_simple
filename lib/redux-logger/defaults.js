Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    level: "log",
    logger: console,
    logErrors: !0,
    collapsed: void 0,
    predicate: void 0,
    duration: !1,
    timestamp: !0,
    stateTransformer: function(r) {
        return r;
    },
    actionTransformer: function(r) {
        return r;
    },
    errorTransformer: function(r) {
        return r;
    },
    colors: {
        title: function() {
            return "inherit";
        },
        prevState: function() {
            return "#9E9E9E";
        },
        action: function() {
            return "#03A9F4";
        },
        nextState: function() {
            return "#4CAF50";
        },
        error: function() {
            return "#F20404";
        }
    },
    diff: !1,
    diffPredicate: void 0,
    transformer: void 0
};