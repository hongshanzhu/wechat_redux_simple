function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = Object.assign({}, n.default, e), g = r.logger, u = r.stateTransformer, i = r.errorTransformer, a = r.predicate, d = r.logErrors, l = r.diffPredicate;
    if (void 0 === g) return function() {
        return function(e) {
            return function(r) {
                return e(r);
            };
        };
    };
    if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport { createLogger } from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), 
    function() {
        return function(e) {
            return function(r) {
                return e(r);
            };
        };
    };
    var s = [];
    return function(e) {
        var n = e.getState;
        return function(e) {
            return function(g) {
                if ("function" == typeof a && !a(n, g)) return e(g);
                var f = {};
                s.push(f), f.started = o.timer.now(), f.startedTime = new Date(), f.prevState = u(n()), 
                f.action = g;
                var c = void 0;
                if (d) try {
                    c = e(g);
                } catch (e) {
                    f.error = i(e);
                } else c = e(g);
                f.took = o.timer.now() - f.started, f.nextState = u(n());
                var p = r.diff && "function" == typeof l ? l(n, g) : r.diff;
                if ((0, t.default)(s, Object.assign({}, r, {
                    diff: p
                })), s.length = 0, f.error) throw f.error;
                return c;
            };
        };
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.logger = exports.createLogger = exports.defaults = void 0;

var t = e(require("./core")), o = require("./helpers"), n = e(require("./defaults")), g = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.dispatch, o = e.getState;
    if ("function" == typeof t || "function" == typeof o) return r()({
        dispatch: t,
        getState: o
    });
    console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
};

exports.defaults = n.default, exports.createLogger = r, exports.logger = g, exports.default = g;