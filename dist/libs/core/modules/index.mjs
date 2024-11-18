var ro = (e) => {
  throw TypeError(e);
};
var ei = (e, t, r) => t.has(e) || ro("Cannot " + r);
var D = (e, t, r) => (ei(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ie = (e, t, r) => t.has(e) ? ro("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), te = (e, t, r, n) => (ei(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Ae = (e, t, r) => (ei(e, t, "access private method"), r);
var Kr = (e, t, r, n) => ({
  set _(i) {
    te(e, t, i, r);
  },
  get _() {
    return D(e, t, n);
  }
});
function Vl(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(n, i);
          s && Object.defineProperty(e, i, s.get ? s : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Ji(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Si = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function Ll() {
  if (no) return re;
  no = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), d = Symbol.iterator;
  function m(y) {
    return y === null || typeof y != "object" ? null : (y = d && y[d] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, g = Object.assign, v = {};
  function b(y, x, I) {
    this.props = y, this.context = x, this.refs = v, this.updater = I || w;
  }
  b.prototype.isReactComponent = {}, b.prototype.setState = function(y, x) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, x, "setState");
  }, b.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function R() {
  }
  R.prototype = b.prototype;
  function k(y, x, I) {
    this.props = y, this.context = x, this.refs = v, this.updater = I || w;
  }
  var S = k.prototype = new R();
  S.constructor = k, g(S, b.prototype), S.isPureReactComponent = !0;
  var A = Array.isArray, E = Object.prototype.hasOwnProperty, $ = { current: null }, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(y, x, I) {
    var F, U = {}, z = null, W = null;
    if (x != null) for (F in x.ref !== void 0 && (W = x.ref), x.key !== void 0 && (z = "" + x.key), x) E.call(x, F) && !G.hasOwnProperty(F) && (U[F] = x[F]);
    var K = arguments.length - 2;
    if (K === 1) U.children = I;
    else if (1 < K) {
      for (var Y = Array(K), J = 0; J < K; J++) Y[J] = arguments[J + 2];
      U.children = Y;
    }
    if (y && y.defaultProps) for (F in K = y.defaultProps, K) U[F] === void 0 && (U[F] = K[F]);
    return { $$typeof: e, type: y, key: z, ref: W, props: U, _owner: $.current };
  }
  function p(y, x) {
    return { $$typeof: e, type: y.type, key: x, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function q(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }
  function V(y) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(I) {
      return x[I];
    });
  }
  var Z = /\/+/g;
  function we(y, x) {
    return typeof y == "object" && y !== null && y.key != null ? V("" + y.key) : x.toString(36);
  }
  function he(y, x, I, F, U) {
    var z = typeof y;
    (z === "undefined" || z === "boolean") && (y = null);
    var W = !1;
    if (y === null) W = !0;
    else switch (z) {
      case "string":
      case "number":
        W = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case e:
          case t:
            W = !0;
        }
    }
    if (W) return W = y, U = U(W), y = F === "" ? "." + we(W, 0) : F, A(U) ? (I = "", y != null && (I = y.replace(Z, "$&/") + "/"), he(U, x, I, "", function(J) {
      return J;
    })) : U != null && (q(U) && (U = p(U, I + (!U.key || W && W.key === U.key ? "" : ("" + U.key).replace(Z, "$&/") + "/") + y)), x.push(U)), 1;
    if (W = 0, F = F === "" ? "." : F + ":", A(y)) for (var K = 0; K < y.length; K++) {
      z = y[K];
      var Y = F + we(z, K);
      W += he(z, x, I, Y, U);
    }
    else if (Y = m(y), typeof Y == "function") for (y = Y.call(y), K = 0; !(z = y.next()).done; ) z = z.value, Y = F + we(z, K++), W += he(z, x, I, Y, U);
    else if (z === "object") throw x = String(y), Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.");
    return W;
  }
  function ge(y, x, I) {
    if (y == null) return y;
    var F = [], U = 0;
    return he(y, F, "", "", function(z) {
      return x.call(I, z, U++);
    }), F;
  }
  function me(y) {
    if (y._status === -1) {
      var x = y._result;
      x = x(), x.then(function(I) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = I);
      }, function(I) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = I);
      }), y._status === -1 && (y._status = 0, y._result = x);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var H = { current: null }, He = { transition: null }, pt = { ReactCurrentDispatcher: H, ReactCurrentBatchConfig: He, ReactCurrentOwner: $ };
  function P() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return re.Children = { map: ge, forEach: function(y, x, I) {
    ge(y, function() {
      x.apply(this, arguments);
    }, I);
  }, count: function(y) {
    var x = 0;
    return ge(y, function() {
      x++;
    }), x;
  }, toArray: function(y) {
    return ge(y, function(x) {
      return x;
    }) || [];
  }, only: function(y) {
    if (!q(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, re.Component = b, re.Fragment = r, re.Profiler = i, re.PureComponent = k, re.StrictMode = n, re.Suspense = c, re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pt, re.act = P, re.cloneElement = function(y, x, I) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var F = g({}, y.props), U = y.key, z = y.ref, W = y._owner;
    if (x != null) {
      if (x.ref !== void 0 && (z = x.ref, W = $.current), x.key !== void 0 && (U = "" + x.key), y.type && y.type.defaultProps) var K = y.type.defaultProps;
      for (Y in x) E.call(x, Y) && !G.hasOwnProperty(Y) && (F[Y] = x[Y] === void 0 && K !== void 0 ? K[Y] : x[Y]);
    }
    var Y = arguments.length - 2;
    if (Y === 1) F.children = I;
    else if (1 < Y) {
      K = Array(Y);
      for (var J = 0; J < Y; J++) K[J] = arguments[J + 2];
      F.children = K;
    }
    return { $$typeof: e, type: y.type, key: U, ref: z, props: F, _owner: W };
  }, re.createContext = function(y) {
    return y = { $$typeof: o, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: s, _context: y }, y.Consumer = y;
  }, re.createElement = j, re.createFactory = function(y) {
    var x = j.bind(null, y);
    return x.type = y, x;
  }, re.createRef = function() {
    return { current: null };
  }, re.forwardRef = function(y) {
    return { $$typeof: a, render: y };
  }, re.isValidElement = q, re.lazy = function(y) {
    return { $$typeof: l, _payload: { _status: -1, _result: y }, _init: me };
  }, re.memo = function(y, x) {
    return { $$typeof: f, type: y, compare: x === void 0 ? null : x };
  }, re.startTransition = function(y) {
    var x = He.transition;
    He.transition = {};
    try {
      y();
    } finally {
      He.transition = x;
    }
  }, re.unstable_act = P, re.useCallback = function(y, x) {
    return H.current.useCallback(y, x);
  }, re.useContext = function(y) {
    return H.current.useContext(y);
  }, re.useDebugValue = function() {
  }, re.useDeferredValue = function(y) {
    return H.current.useDeferredValue(y);
  }, re.useEffect = function(y, x) {
    return H.current.useEffect(y, x);
  }, re.useId = function() {
    return H.current.useId();
  }, re.useImperativeHandle = function(y, x, I) {
    return H.current.useImperativeHandle(y, x, I);
  }, re.useInsertionEffect = function(y, x) {
    return H.current.useInsertionEffect(y, x);
  }, re.useLayoutEffect = function(y, x) {
    return H.current.useLayoutEffect(y, x);
  }, re.useMemo = function(y, x) {
    return H.current.useMemo(y, x);
  }, re.useReducer = function(y, x, I) {
    return H.current.useReducer(y, x, I);
  }, re.useRef = function(y) {
    return H.current.useRef(y);
  }, re.useState = function(y) {
    return H.current.useState(y);
  }, re.useSyncExternalStore = function(y, x, I) {
    return H.current.useSyncExternalStore(y, x, I);
  }, re.useTransition = function() {
    return H.current.useTransition();
  }, re.version = "18.3.1", re;
}
var br = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
br.exports;
var io;
function Ul() {
  return io || (io = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b = Symbol.iterator, R = "@@iterator";
      function k(u) {
        if (u === null || typeof u != "object")
          return null;
        var h = b && u[b] || u[R];
        return typeof h == "function" ? h : null;
      }
      var S = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, A = {
        transition: null
      }, E = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, $ = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, G = {}, j = null;
      function p(u) {
        j = u;
      }
      G.setExtraStackFrame = function(u) {
        j = u;
      }, G.getCurrentStack = null, G.getStackAddendum = function() {
        var u = "";
        j && (u += j);
        var h = G.getCurrentStack;
        return h && (u += h() || ""), u;
      };
      var q = !1, V = !1, Z = !1, we = !1, he = !1, ge = {
        ReactCurrentDispatcher: S,
        ReactCurrentBatchConfig: A,
        ReactCurrentOwner: $
      };
      ge.ReactDebugCurrentFrame = G, ge.ReactCurrentActQueue = E;
      function me(u) {
        {
          for (var h = arguments.length, _ = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++)
            _[C - 1] = arguments[C];
          He("warn", u, _);
        }
      }
      function H(u) {
        {
          for (var h = arguments.length, _ = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++)
            _[C - 1] = arguments[C];
          He("error", u, _);
        }
      }
      function He(u, h, _) {
        {
          var C = ge.ReactDebugCurrentFrame, N = C.getStackAddendum();
          N !== "" && (h += "%s", _ = _.concat([N]));
          var Q = _.map(function(B) {
            return String(B);
          });
          Q.unshift("Warning: " + h), Function.prototype.apply.call(console[u], console, Q);
        }
      }
      var pt = {};
      function P(u, h) {
        {
          var _ = u.constructor, C = _ && (_.displayName || _.name) || "ReactClass", N = C + "." + h;
          if (pt[N])
            return;
          H("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", h, C), pt[N] = !0;
        }
      }
      var y = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(u) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(u, h, _) {
          P(u, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(u, h, _, C) {
          P(u, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(u, h, _, C) {
          P(u, "setState");
        }
      }, x = Object.assign, I = {};
      Object.freeze(I);
      function F(u, h, _) {
        this.props = u, this.context = h, this.refs = I, this.updater = _ || y;
      }
      F.prototype.isReactComponent = {}, F.prototype.setState = function(u, h) {
        if (typeof u != "object" && typeof u != "function" && u != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, u, h, "setState");
      }, F.prototype.forceUpdate = function(u) {
        this.updater.enqueueForceUpdate(this, u, "forceUpdate");
      };
      {
        var U = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, z = function(u, h) {
          Object.defineProperty(F.prototype, u, {
            get: function() {
              me("%s(...) is deprecated in plain JavaScript React classes. %s", h[0], h[1]);
            }
          });
        };
        for (var W in U)
          U.hasOwnProperty(W) && z(W, U[W]);
      }
      function K() {
      }
      K.prototype = F.prototype;
      function Y(u, h, _) {
        this.props = u, this.context = h, this.refs = I, this.updater = _ || y;
      }
      var J = Y.prototype = new K();
      J.constructor = Y, x(J, F.prototype), J.isPureReactComponent = !0;
      function Re() {
        var u = {
          current: null
        };
        return Object.seal(u), u;
      }
      var M = Array.isArray;
      function ke(u) {
        return M(u);
      }
      function Ut(u) {
        {
          var h = typeof Symbol == "function" && Symbol.toStringTag, _ = h && u[Symbol.toStringTag] || u.constructor.name || "Object";
          return _;
        }
      }
      function Ir(u) {
        try {
          return vs(u), !1;
        } catch {
          return !0;
        }
      }
      function vs(u) {
        return "" + u;
      }
      function Mr(u) {
        if (Ir(u))
          return H("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ut(u)), vs(u);
      }
      function jc(u, h, _) {
        var C = u.displayName;
        if (C)
          return C;
        var N = h.displayName || h.name || "";
        return N !== "" ? _ + "(" + N + ")" : _;
      }
      function Es(u) {
        return u.displayName || "Context";
      }
      function ht(u) {
        if (u == null)
          return null;
        if (typeof u.tag == "number" && H("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
          return u.displayName || u.name || null;
        if (typeof u == "string")
          return u;
        switch (u) {
          case s:
            return "Fragment";
          case i:
            return "Portal";
          case a:
            return "Profiler";
          case o:
            return "StrictMode";
          case d:
            return "Suspense";
          case m:
            return "SuspenseList";
        }
        if (typeof u == "object")
          switch (u.$$typeof) {
            case f:
              var h = u;
              return Es(h) + ".Consumer";
            case c:
              var _ = u;
              return Es(_._context) + ".Provider";
            case l:
              return jc(u, u.render, "ForwardRef");
            case w:
              var C = u.displayName || null;
              return C !== null ? C : ht(u.type) || "Memo";
            case g: {
              var N = u, Q = N._payload, B = N._init;
              try {
                return ht(B(Q));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var dr = Object.prototype.hasOwnProperty, ws = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ss, _s, Un;
      Un = {};
      function Os(u) {
        if (dr.call(u, "ref")) {
          var h = Object.getOwnPropertyDescriptor(u, "ref").get;
          if (h && h.isReactWarning)
            return !1;
        }
        return u.ref !== void 0;
      }
      function Cs(u) {
        if (dr.call(u, "key")) {
          var h = Object.getOwnPropertyDescriptor(u, "key").get;
          if (h && h.isReactWarning)
            return !1;
        }
        return u.key !== void 0;
      }
      function qc(u, h) {
        var _ = function() {
          Ss || (Ss = !0, H("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        _.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: _,
          configurable: !0
        });
      }
      function Vc(u, h) {
        var _ = function() {
          _s || (_s = !0, H("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        _.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: _,
          configurable: !0
        });
      }
      function Lc(u) {
        if (typeof u.ref == "string" && $.current && u.__self && $.current.stateNode !== u.__self) {
          var h = ht($.current.type);
          Un[h] || (H('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', h, u.ref), Un[h] = !0);
        }
      }
      var Bn = function(u, h, _, C, N, Q, B) {
        var X = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: u,
          key: h,
          ref: _,
          props: B,
          // Record the component responsible for creating this element.
          _owner: Q
        };
        return X._store = {}, Object.defineProperty(X._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(X, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: C
        }), Object.defineProperty(X, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: N
        }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
      };
      function Uc(u, h, _) {
        var C, N = {}, Q = null, B = null, X = null, ne = null;
        if (h != null) {
          Os(h) && (B = h.ref, Lc(h)), Cs(h) && (Mr(h.key), Q = "" + h.key), X = h.__self === void 0 ? null : h.__self, ne = h.__source === void 0 ? null : h.__source;
          for (C in h)
            dr.call(h, C) && !ws.hasOwnProperty(C) && (N[C] = h[C]);
        }
        var ae = arguments.length - 2;
        if (ae === 1)
          N.children = _;
        else if (ae > 1) {
          for (var fe = Array(ae), de = 0; de < ae; de++)
            fe[de] = arguments[de + 2];
          Object.freeze && Object.freeze(fe), N.children = fe;
        }
        if (u && u.defaultProps) {
          var ye = u.defaultProps;
          for (C in ye)
            N[C] === void 0 && (N[C] = ye[C]);
        }
        if (Q || B) {
          var Ce = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          Q && qc(N, Ce), B && Vc(N, Ce);
        }
        return Bn(u, Q, B, X, ne, $.current, N);
      }
      function Bc(u, h) {
        var _ = Bn(u.type, h, u.ref, u._self, u._source, u._owner, u.props);
        return _;
      }
      function zc(u, h, _) {
        if (u == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + u + ".");
        var C, N = x({}, u.props), Q = u.key, B = u.ref, X = u._self, ne = u._source, ae = u._owner;
        if (h != null) {
          Os(h) && (B = h.ref, ae = $.current), Cs(h) && (Mr(h.key), Q = "" + h.key);
          var fe;
          u.type && u.type.defaultProps && (fe = u.type.defaultProps);
          for (C in h)
            dr.call(h, C) && !ws.hasOwnProperty(C) && (h[C] === void 0 && fe !== void 0 ? N[C] = fe[C] : N[C] = h[C]);
        }
        var de = arguments.length - 2;
        if (de === 1)
          N.children = _;
        else if (de > 1) {
          for (var ye = Array(de), Ce = 0; Ce < de; Ce++)
            ye[Ce] = arguments[Ce + 2];
          N.children = ye;
        }
        return Bn(u.type, Q, B, X, ne, ae, N);
      }
      function Bt(u) {
        return typeof u == "object" && u !== null && u.$$typeof === n;
      }
      var Ts = ".", Wc = ":";
      function Hc(u) {
        var h = /[=:]/g, _ = {
          "=": "=0",
          ":": "=2"
        }, C = u.replace(h, function(N) {
          return _[N];
        });
        return "$" + C;
      }
      var xs = !1, Kc = /\/+/g;
      function Rs(u) {
        return u.replace(Kc, "$&/");
      }
      function zn(u, h) {
        return typeof u == "object" && u !== null && u.key != null ? (Mr(u.key), Hc("" + u.key)) : h.toString(36);
      }
      function jr(u, h, _, C, N) {
        var Q = typeof u;
        (Q === "undefined" || Q === "boolean") && (u = null);
        var B = !1;
        if (u === null)
          B = !0;
        else
          switch (Q) {
            case "string":
            case "number":
              B = !0;
              break;
            case "object":
              switch (u.$$typeof) {
                case n:
                case i:
                  B = !0;
              }
          }
        if (B) {
          var X = u, ne = N(X), ae = C === "" ? Ts + zn(X, 0) : C;
          if (ke(ne)) {
            var fe = "";
            ae != null && (fe = Rs(ae) + "/"), jr(ne, h, fe, "", function(ql) {
              return ql;
            });
          } else ne != null && (Bt(ne) && (ne.key && (!X || X.key !== ne.key) && Mr(ne.key), ne = Bc(
            ne,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            _ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ne.key && (!X || X.key !== ne.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Rs("" + ne.key) + "/"
            ) : "") + ae
          )), h.push(ne));
          return 1;
        }
        var de, ye, Ce = 0, Te = C === "" ? Ts : C + Wc;
        if (ke(u))
          for (var Hr = 0; Hr < u.length; Hr++)
            de = u[Hr], ye = Te + zn(de, Hr), Ce += jr(de, h, _, ye, N);
        else {
          var Zn = k(u);
          if (typeof Zn == "function") {
            var Zs = u;
            Zn === Zs.entries && (xs || me("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), xs = !0);
            for (var Ml = Zn.call(Zs), eo, jl = 0; !(eo = Ml.next()).done; )
              de = eo.value, ye = Te + zn(de, jl++), Ce += jr(de, h, _, ye, N);
          } else if (Q === "object") {
            var to = String(u);
            throw new Error("Objects are not valid as a React child (found: " + (to === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : to) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Ce;
      }
      function qr(u, h, _) {
        if (u == null)
          return u;
        var C = [], N = 0;
        return jr(u, C, "", "", function(Q) {
          return h.call(_, Q, N++);
        }), C;
      }
      function Gc(u) {
        var h = 0;
        return qr(u, function() {
          h++;
        }), h;
      }
      function Yc(u, h, _) {
        qr(u, function() {
          h.apply(this, arguments);
        }, _);
      }
      function Qc(u) {
        return qr(u, function(h) {
          return h;
        }) || [];
      }
      function Jc(u) {
        if (!Bt(u))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return u;
      }
      function Xc(u) {
        var h = {
          $$typeof: f,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: u,
          _currentValue2: u,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        h.Provider = {
          $$typeof: c,
          _context: h
        };
        var _ = !1, C = !1, N = !1;
        {
          var Q = {
            $$typeof: f,
            _context: h
          };
          Object.defineProperties(Q, {
            Provider: {
              get: function() {
                return C || (C = !0, H("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), h.Provider;
              },
              set: function(B) {
                h.Provider = B;
              }
            },
            _currentValue: {
              get: function() {
                return h._currentValue;
              },
              set: function(B) {
                h._currentValue = B;
              }
            },
            _currentValue2: {
              get: function() {
                return h._currentValue2;
              },
              set: function(B) {
                h._currentValue2 = B;
              }
            },
            _threadCount: {
              get: function() {
                return h._threadCount;
              },
              set: function(B) {
                h._threadCount = B;
              }
            },
            Consumer: {
              get: function() {
                return _ || (_ = !0, H("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), h.Consumer;
              }
            },
            displayName: {
              get: function() {
                return h.displayName;
              },
              set: function(B) {
                N || (me("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", B), N = !0);
              }
            }
          }), h.Consumer = Q;
        }
        return h._currentRenderer = null, h._currentRenderer2 = null, h;
      }
      var pr = -1, Wn = 0, As = 1, Zc = 2;
      function el(u) {
        if (u._status === pr) {
          var h = u._result, _ = h();
          if (_.then(function(Q) {
            if (u._status === Wn || u._status === pr) {
              var B = u;
              B._status = As, B._result = Q;
            }
          }, function(Q) {
            if (u._status === Wn || u._status === pr) {
              var B = u;
              B._status = Zc, B._result = Q;
            }
          }), u._status === pr) {
            var C = u;
            C._status = Wn, C._result = _;
          }
        }
        if (u._status === As) {
          var N = u._result;
          return N === void 0 && H(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, N), "default" in N || H(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, N), N.default;
        } else
          throw u._result;
      }
      function tl(u) {
        var h = {
          // We use these fields to store the result.
          _status: pr,
          _result: u
        }, _ = {
          $$typeof: g,
          _payload: h,
          _init: el
        };
        {
          var C, N;
          Object.defineProperties(_, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return C;
              },
              set: function(Q) {
                H("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), C = Q, Object.defineProperty(_, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return N;
              },
              set: function(Q) {
                H("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), N = Q, Object.defineProperty(_, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return _;
      }
      function rl(u) {
        u != null && u.$$typeof === w ? H("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof u != "function" ? H("forwardRef requires a render function but was given %s.", u === null ? "null" : typeof u) : u.length !== 0 && u.length !== 2 && H("forwardRef render functions accept exactly two parameters: props and ref. %s", u.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), u != null && (u.defaultProps != null || u.propTypes != null) && H("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var h = {
          $$typeof: l,
          render: u
        };
        {
          var _;
          Object.defineProperty(h, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return _;
            },
            set: function(C) {
              _ = C, !u.name && !u.displayName && (u.displayName = C);
            }
          });
        }
        return h;
      }
      var Ds;
      Ds = Symbol.for("react.module.reference");
      function ks(u) {
        return !!(typeof u == "string" || typeof u == "function" || u === s || u === a || he || u === o || u === d || u === m || we || u === v || q || V || Z || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === w || u.$$typeof === c || u.$$typeof === f || u.$$typeof === l || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        u.$$typeof === Ds || u.getModuleId !== void 0));
      }
      function nl(u, h) {
        ks(u) || H("memo: The first argument must be a component. Instead received: %s", u === null ? "null" : typeof u);
        var _ = {
          $$typeof: w,
          type: u,
          compare: h === void 0 ? null : h
        };
        {
          var C;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return C;
            },
            set: function(N) {
              C = N, !u.name && !u.displayName && (u.displayName = N);
            }
          });
        }
        return _;
      }
      function Pe() {
        var u = S.current;
        return u === null && H(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), u;
      }
      function il(u) {
        var h = Pe();
        if (u._context !== void 0) {
          var _ = u._context;
          _.Consumer === u ? H("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : _.Provider === u && H("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return h.useContext(u);
      }
      function sl(u) {
        var h = Pe();
        return h.useState(u);
      }
      function ol(u, h, _) {
        var C = Pe();
        return C.useReducer(u, h, _);
      }
      function al(u) {
        var h = Pe();
        return h.useRef(u);
      }
      function ul(u, h) {
        var _ = Pe();
        return _.useEffect(u, h);
      }
      function cl(u, h) {
        var _ = Pe();
        return _.useInsertionEffect(u, h);
      }
      function ll(u, h) {
        var _ = Pe();
        return _.useLayoutEffect(u, h);
      }
      function fl(u, h) {
        var _ = Pe();
        return _.useCallback(u, h);
      }
      function dl(u, h) {
        var _ = Pe();
        return _.useMemo(u, h);
      }
      function pl(u, h, _) {
        var C = Pe();
        return C.useImperativeHandle(u, h, _);
      }
      function hl(u, h) {
        {
          var _ = Pe();
          return _.useDebugValue(u, h);
        }
      }
      function ml() {
        var u = Pe();
        return u.useTransition();
      }
      function yl(u) {
        var h = Pe();
        return h.useDeferredValue(u);
      }
      function gl() {
        var u = Pe();
        return u.useId();
      }
      function bl(u, h, _) {
        var C = Pe();
        return C.useSyncExternalStore(u, h, _);
      }
      var hr = 0, Ps, Ns, $s, Fs, Is, Ms, js;
      function qs() {
      }
      qs.__reactDisabledLog = !0;
      function vl() {
        {
          if (hr === 0) {
            Ps = console.log, Ns = console.info, $s = console.warn, Fs = console.error, Is = console.group, Ms = console.groupCollapsed, js = console.groupEnd;
            var u = {
              configurable: !0,
              enumerable: !0,
              value: qs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: u,
              log: u,
              warn: u,
              error: u,
              group: u,
              groupCollapsed: u,
              groupEnd: u
            });
          }
          hr++;
        }
      }
      function El() {
        {
          if (hr--, hr === 0) {
            var u = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: x({}, u, {
                value: Ps
              }),
              info: x({}, u, {
                value: Ns
              }),
              warn: x({}, u, {
                value: $s
              }),
              error: x({}, u, {
                value: Fs
              }),
              group: x({}, u, {
                value: Is
              }),
              groupCollapsed: x({}, u, {
                value: Ms
              }),
              groupEnd: x({}, u, {
                value: js
              })
            });
          }
          hr < 0 && H("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Hn = ge.ReactCurrentDispatcher, Kn;
      function Vr(u, h, _) {
        {
          if (Kn === void 0)
            try {
              throw Error();
            } catch (N) {
              var C = N.stack.trim().match(/\n( *(at )?)/);
              Kn = C && C[1] || "";
            }
          return `
` + Kn + u;
        }
      }
      var Gn = !1, Lr;
      {
        var wl = typeof WeakMap == "function" ? WeakMap : Map;
        Lr = new wl();
      }
      function Vs(u, h) {
        if (!u || Gn)
          return "";
        {
          var _ = Lr.get(u);
          if (_ !== void 0)
            return _;
        }
        var C;
        Gn = !0;
        var N = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Q;
        Q = Hn.current, Hn.current = null, vl();
        try {
          if (h) {
            var B = function() {
              throw Error();
            };
            if (Object.defineProperty(B.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(B, []);
              } catch (Te) {
                C = Te;
              }
              Reflect.construct(u, [], B);
            } else {
              try {
                B.call();
              } catch (Te) {
                C = Te;
              }
              u.call(B.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Te) {
              C = Te;
            }
            u();
          }
        } catch (Te) {
          if (Te && C && typeof Te.stack == "string") {
            for (var X = Te.stack.split(`
`), ne = C.stack.split(`
`), ae = X.length - 1, fe = ne.length - 1; ae >= 1 && fe >= 0 && X[ae] !== ne[fe]; )
              fe--;
            for (; ae >= 1 && fe >= 0; ae--, fe--)
              if (X[ae] !== ne[fe]) {
                if (ae !== 1 || fe !== 1)
                  do
                    if (ae--, fe--, fe < 0 || X[ae] !== ne[fe]) {
                      var de = `
` + X[ae].replace(" at new ", " at ");
                      return u.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", u.displayName)), typeof u == "function" && Lr.set(u, de), de;
                    }
                  while (ae >= 1 && fe >= 0);
                break;
              }
          }
        } finally {
          Gn = !1, Hn.current = Q, El(), Error.prepareStackTrace = N;
        }
        var ye = u ? u.displayName || u.name : "", Ce = ye ? Vr(ye) : "";
        return typeof u == "function" && Lr.set(u, Ce), Ce;
      }
      function Sl(u, h, _) {
        return Vs(u, !1);
      }
      function _l(u) {
        var h = u.prototype;
        return !!(h && h.isReactComponent);
      }
      function Ur(u, h, _) {
        if (u == null)
          return "";
        if (typeof u == "function")
          return Vs(u, _l(u));
        if (typeof u == "string")
          return Vr(u);
        switch (u) {
          case d:
            return Vr("Suspense");
          case m:
            return Vr("SuspenseList");
        }
        if (typeof u == "object")
          switch (u.$$typeof) {
            case l:
              return Sl(u.render);
            case w:
              return Ur(u.type, h, _);
            case g: {
              var C = u, N = C._payload, Q = C._init;
              try {
                return Ur(Q(N), h, _);
              } catch {
              }
            }
          }
        return "";
      }
      var Ls = {}, Us = ge.ReactDebugCurrentFrame;
      function Br(u) {
        if (u) {
          var h = u._owner, _ = Ur(u.type, u._source, h ? h.type : null);
          Us.setExtraStackFrame(_);
        } else
          Us.setExtraStackFrame(null);
      }
      function Ol(u, h, _, C, N) {
        {
          var Q = Function.call.bind(dr);
          for (var B in u)
            if (Q(u, B)) {
              var X = void 0;
              try {
                if (typeof u[B] != "function") {
                  var ne = Error((C || "React class") + ": " + _ + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ne.name = "Invariant Violation", ne;
                }
                X = u[B](h, B, C, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ae) {
                X = ae;
              }
              X && !(X instanceof Error) && (Br(N), H("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", _, B, typeof X), Br(null)), X instanceof Error && !(X.message in Ls) && (Ls[X.message] = !0, Br(N), H("Failed %s type: %s", _, X.message), Br(null));
            }
        }
      }
      function zt(u) {
        if (u) {
          var h = u._owner, _ = Ur(u.type, u._source, h ? h.type : null);
          p(_);
        } else
          p(null);
      }
      var Yn;
      Yn = !1;
      function Bs() {
        if ($.current) {
          var u = ht($.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
      function Cl(u) {
        if (u !== void 0) {
          var h = u.fileName.replace(/^.*[\\\/]/, ""), _ = u.lineNumber;
          return `

Check your code at ` + h + ":" + _ + ".";
        }
        return "";
      }
      function Tl(u) {
        return u != null ? Cl(u.__source) : "";
      }
      var zs = {};
      function xl(u) {
        var h = Bs();
        if (!h) {
          var _ = typeof u == "string" ? u : u.displayName || u.name;
          _ && (h = `

Check the top-level render call using <` + _ + ">.");
        }
        return h;
      }
      function Ws(u, h) {
        if (!(!u._store || u._store.validated || u.key != null)) {
          u._store.validated = !0;
          var _ = xl(h);
          if (!zs[_]) {
            zs[_] = !0;
            var C = "";
            u && u._owner && u._owner !== $.current && (C = " It was passed a child from " + ht(u._owner.type) + "."), zt(u), H('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, C), zt(null);
          }
        }
      }
      function Hs(u, h) {
        if (typeof u == "object") {
          if (ke(u))
            for (var _ = 0; _ < u.length; _++) {
              var C = u[_];
              Bt(C) && Ws(C, h);
            }
          else if (Bt(u))
            u._store && (u._store.validated = !0);
          else if (u) {
            var N = k(u);
            if (typeof N == "function" && N !== u.entries)
              for (var Q = N.call(u), B; !(B = Q.next()).done; )
                Bt(B.value) && Ws(B.value, h);
          }
        }
      }
      function Ks(u) {
        {
          var h = u.type;
          if (h == null || typeof h == "string")
            return;
          var _;
          if (typeof h == "function")
            _ = h.propTypes;
          else if (typeof h == "object" && (h.$$typeof === l || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          h.$$typeof === w))
            _ = h.propTypes;
          else
            return;
          if (_) {
            var C = ht(h);
            Ol(_, u.props, "prop", C, u);
          } else if (h.PropTypes !== void 0 && !Yn) {
            Yn = !0;
            var N = ht(h);
            H("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
          }
          typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && H("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Rl(u) {
        {
          for (var h = Object.keys(u.props), _ = 0; _ < h.length; _++) {
            var C = h[_];
            if (C !== "children" && C !== "key") {
              zt(u), H("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), zt(null);
              break;
            }
          }
          u.ref !== null && (zt(u), H("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
        }
      }
      function Gs(u, h, _) {
        var C = ks(u);
        if (!C) {
          var N = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Tl(h);
          Q ? N += Q : N += Bs();
          var B;
          u === null ? B = "null" : ke(u) ? B = "array" : u !== void 0 && u.$$typeof === n ? (B = "<" + (ht(u.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : B = typeof u, H("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, N);
        }
        var X = Uc.apply(this, arguments);
        if (X == null)
          return X;
        if (C)
          for (var ne = 2; ne < arguments.length; ne++)
            Hs(arguments[ne], u);
        return u === s ? Rl(X) : Ks(X), X;
      }
      var Ys = !1;
      function Al(u) {
        var h = Gs.bind(null, u);
        return h.type = u, Ys || (Ys = !0, me("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(h, "type", {
          enumerable: !1,
          get: function() {
            return me("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: u
            }), u;
          }
        }), h;
      }
      function Dl(u, h, _) {
        for (var C = zc.apply(this, arguments), N = 2; N < arguments.length; N++)
          Hs(arguments[N], C.type);
        return Ks(C), C;
      }
      function kl(u, h) {
        var _ = A.transition;
        A.transition = {};
        var C = A.transition;
        A.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          u();
        } finally {
          if (A.transition = _, _ === null && C._updatedFibers) {
            var N = C._updatedFibers.size;
            N > 10 && me("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), C._updatedFibers.clear();
          }
        }
      }
      var Qs = !1, zr = null;
      function Pl(u) {
        if (zr === null)
          try {
            var h = ("require" + Math.random()).slice(0, 7), _ = e && e[h];
            zr = _.call(e, "timers").setImmediate;
          } catch {
            zr = function(N) {
              Qs === !1 && (Qs = !0, typeof MessageChannel > "u" && H("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Q = new MessageChannel();
              Q.port1.onmessage = N, Q.port2.postMessage(void 0);
            };
          }
        return zr(u);
      }
      var Wt = 0, Js = !1;
      function Xs(u) {
        {
          var h = Wt;
          Wt++, E.current === null && (E.current = []);
          var _ = E.isBatchingLegacy, C;
          try {
            if (E.isBatchingLegacy = !0, C = u(), !_ && E.didScheduleLegacyUpdate) {
              var N = E.current;
              N !== null && (E.didScheduleLegacyUpdate = !1, Xn(N));
            }
          } catch (ye) {
            throw Wr(h), ye;
          } finally {
            E.isBatchingLegacy = _;
          }
          if (C !== null && typeof C == "object" && typeof C.then == "function") {
            var Q = C, B = !1, X = {
              then: function(ye, Ce) {
                B = !0, Q.then(function(Te) {
                  Wr(h), Wt === 0 ? Qn(Te, ye, Ce) : ye(Te);
                }, function(Te) {
                  Wr(h), Ce(Te);
                });
              }
            };
            return !Js && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              B || (Js = !0, H("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), X;
          } else {
            var ne = C;
            if (Wr(h), Wt === 0) {
              var ae = E.current;
              ae !== null && (Xn(ae), E.current = null);
              var fe = {
                then: function(ye, Ce) {
                  E.current === null ? (E.current = [], Qn(ne, ye, Ce)) : ye(ne);
                }
              };
              return fe;
            } else {
              var de = {
                then: function(ye, Ce) {
                  ye(ne);
                }
              };
              return de;
            }
          }
        }
      }
      function Wr(u) {
        u !== Wt - 1 && H("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Wt = u;
      }
      function Qn(u, h, _) {
        {
          var C = E.current;
          if (C !== null)
            try {
              Xn(C), Pl(function() {
                C.length === 0 ? (E.current = null, h(u)) : Qn(u, h, _);
              });
            } catch (N) {
              _(N);
            }
          else
            h(u);
        }
      }
      var Jn = !1;
      function Xn(u) {
        if (!Jn) {
          Jn = !0;
          var h = 0;
          try {
            for (; h < u.length; h++) {
              var _ = u[h];
              do
                _ = _(!0);
              while (_ !== null);
            }
            u.length = 0;
          } catch (C) {
            throw u = u.slice(h + 1), C;
          } finally {
            Jn = !1;
          }
        }
      }
      var Nl = Gs, $l = Dl, Fl = Al, Il = {
        map: qr,
        forEach: Yc,
        count: Gc,
        toArray: Qc,
        only: Jc
      };
      t.Children = Il, t.Component = F, t.Fragment = s, t.Profiler = a, t.PureComponent = Y, t.StrictMode = o, t.Suspense = d, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, t.act = Xs, t.cloneElement = $l, t.createContext = Xc, t.createElement = Nl, t.createFactory = Fl, t.createRef = Re, t.forwardRef = rl, t.isValidElement = Bt, t.lazy = tl, t.memo = nl, t.startTransition = kl, t.unstable_act = Xs, t.useCallback = fl, t.useContext = il, t.useDebugValue = hl, t.useDeferredValue = yl, t.useEffect = ul, t.useId = gl, t.useImperativeHandle = pl, t.useInsertionEffect = cl, t.useLayoutEffect = ll, t.useMemo = dl, t.useReducer = ol, t.useRef = al, t.useState = sl, t.useSyncExternalStore = bl, t.useTransition = ml, t.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(br, br.exports)), br.exports;
}
process.env.NODE_ENV === "production" ? Si.exports = Ll() : Si.exports = Ul();
var mn = Si.exports;
const Oa = /* @__PURE__ */ Ji(mn), so = /* @__PURE__ */ Vl({
  __proto__: null,
  default: Oa
}, [mn]);
var _i = { exports: {} }, ti = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function Bl() {
  if (oo) return ti;
  oo = 1;
  var e = mn;
  function t(c, f) {
    return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, s = e.useEffect, o = e.useMemo, a = e.useDebugValue;
  return ti.useSyncExternalStoreWithSelector = function(c, f, l, d, m) {
    var w = i(null);
    if (w.current === null) {
      var g = { hasValue: !1, value: null };
      w.current = g;
    } else g = w.current;
    w = o(function() {
      function b(E) {
        if (!R) {
          if (R = !0, k = E, E = d(E), m !== void 0 && g.hasValue) {
            var $ = g.value;
            if (m($, E)) return S = $;
          }
          return S = E;
        }
        if ($ = S, r(k, E)) return $;
        var G = d(E);
        return m !== void 0 && m($, G) ? $ : (k = E, S = G);
      }
      var R = !1, k, S, A = l === void 0 ? null : l;
      return [function() {
        return b(f());
      }, A === null ? void 0 : function() {
        return b(A());
      }];
    }, [f, l, d, m]);
    var v = n(c, w[0], w[1]);
    return s(function() {
      g.hasValue = !0, g.value = v;
    }, [v]), a(v), v;
  }, ti;
}
var ri = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function zl() {
  return ao || (ao = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = mn;
    function t(f, l) {
      return f === l && (f !== 0 || 1 / f === 1 / l) || f !== f && l !== l;
    }
    var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, s = e.useEffect, o = e.useMemo, a = e.useDebugValue;
    function c(f, l, d, m, w) {
      var g = i(null), v;
      g.current === null ? (v = {
        hasValue: !1,
        value: null
      }, g.current = v) : v = g.current;
      var b = o(function() {
        var A = !1, E, $, G = function(V) {
          if (!A) {
            A = !0, E = V;
            var Z = m(V);
            if (w !== void 0 && v.hasValue) {
              var we = v.value;
              if (w(we, Z))
                return $ = we, we;
            }
            return $ = Z, Z;
          }
          var he = E, ge = $;
          if (r(he, V))
            return ge;
          var me = m(V);
          return w !== void 0 && w(ge, me) ? ge : (E = V, $ = me, me);
        }, j = d === void 0 ? null : d, p = function() {
          return G(l());
        }, q = j === null ? void 0 : function() {
          return G(j());
        };
        return [p, q];
      }, [l, d, m, w]), R = b[0], k = b[1], S = n(f, R, k);
      return s(function() {
        v.hasValue = !0, v.value = S;
      }, [S]), a(S), S;
    }
    ri.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ri;
}
process.env.NODE_ENV === "production" ? _i.exports = Bl() : _i.exports = zl();
var Wl = _i.exports, ot = (
  // prettier-ignore
  // @ts-ignore
  "default" in so ? Oa : so
), uo = Symbol.for("react-redux-context"), co = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Hl() {
  if (!ot.createContext)
    return {};
  const e = co[uo] ?? (co[uo] = /* @__PURE__ */ new Map());
  let t = e.get(ot.createContext);
  return t || (t = ot.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(ot.createContext, t)), t;
}
var Oi = /* @__PURE__ */ Hl(), Kl = () => {
  throw new Error("uSES not initialized!");
};
function Ca(e = Oi) {
  return function() {
    const r = ot.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var Gl = /* @__PURE__ */ Ca(), Ta = Kl, Yl = (e) => {
  Ta = e;
}, Ql = (e, t) => e === t;
function Jl(e = Oi) {
  const t = e === Oi ? Gl : Ca(e), r = (n, i = {}) => {
    const { equalityFn: s = Ql, devModeChecks: o = {} } = typeof i == "function" ? { equalityFn: i } : i;
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error("You must pass a selector to useSelector");
      if (typeof n != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof s != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: a,
      subscription: c,
      getServerState: f,
      stabilityCheck: l,
      identityFunctionCheck: d
    } = t(), m = ot.useRef(!0), w = ot.useCallback(
      {
        [n.name](v) {
          const b = n(v);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: R,
              stabilityCheck: k
            } = {
              stabilityCheck: l,
              identityFunctionCheck: d,
              ...o
            };
            if (k === "always" || k === "once" && m.current) {
              const S = n(v);
              if (!s(b, S)) {
                let A;
                try {
                  throw new Error();
                } catch (E) {
                  ({ stack: A } = E);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: v,
                    selected: b,
                    selected2: S,
                    stack: A
                  }
                );
              }
            }
            if ((R === "always" || R === "once" && m.current) && b === v) {
              let S;
              try {
                throw new Error();
              } catch (A) {
                ({ stack: S } = A);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: S }
              );
            }
            m.current && (m.current = !1);
          }
          return b;
        }
      }[n.name],
      [n, l, o.stabilityCheck]
    ), g = Ta(
      c.addNestedSub,
      a.getState,
      f || a.getState,
      w,
      s
    );
    return ot.useDebugValue(g), g;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var xa = /* @__PURE__ */ Jl(), Xl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Zl = typeof navigator < "u" && navigator.product === "ReactNative";
Xl || Zl ? ot.useLayoutEffect : ot.useEffect;
Yl(Wl.useSyncExternalStoreWithSelector);
const mg = xa.withTypes(), yg = {
  //Roles
  ROLE_ADMIN: "ADMIN",
  ROLE_SUPERADMIN: "SUPERADMIN",
  ROLE_EMPLOYEE: "EMPLOYEE",
  ROLE_SENIOR: "SENIOR",
  ROLE_MANAGER: "MANAGER",
  //Department
  DEPT_ADMIN: "Admin",
  DEPT_PURCHASE: "Purchase",
  DEPT_SALES: "Sales"
};
function xe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ef = typeof Symbol == "function" && Symbol.observable || "@@observable", lo = ef, ni = () => Math.random().toString(36).substring(7).split("").join("."), tf = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ni()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ni()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ni()}`
}, $t = tf;
function kr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function rf(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (of(e))
    return "date";
  if (sf(e))
    return "error";
  const r = nf(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function nf(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function sf(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function of(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function yt(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = rf(e)), t;
}
function Ra(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? xe(2) : `Expected the root reducer to be a function. Instead, received: '${yt(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? xe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xe(1) : `Expected the enhancer to be a function. Instead, received: '${yt(r)}'`);
    return r(Ra)(e, t);
  }
  let n = e, i = t, s = /* @__PURE__ */ new Map(), o = s, a = 0, c = !1;
  function f() {
    o === s && (o = /* @__PURE__ */ new Map(), s.forEach((b, R) => {
      o.set(R, b);
    }));
  }
  function l() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function d(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xe(4) : `Expected the listener to be a function. Instead, received: '${yt(b)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let R = !0;
    f();
    const k = a++;
    return o.set(k, b), function() {
      if (R) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? xe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        R = !1, f(), o.delete(k), s = null;
      }
    };
  }
  function m(b) {
    if (!kr(b))
      throw new Error(process.env.NODE_ENV === "production" ? xe(7) : `Actions must be plain objects. Instead, the actual type was: '${yt(b)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof b.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? xe(17) : `Action "type" property must be a string. Instead, the actual type was: '${yt(b.type)}'. Value was: '${b.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xe(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = n(i, b);
    } finally {
      c = !1;
    }
    return (s = o).forEach((k) => {
      k();
    }), b;
  }
  function w(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xe(10) : `Expected the nextReducer to be a function. Instead, received: '${yt(b)}`);
    n = b, m({
      type: $t.REPLACE
    });
  }
  function g() {
    const b = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(R) {
        if (typeof R != "object" || R === null)
          throw new Error(process.env.NODE_ENV === "production" ? xe(11) : `Expected the observer to be an object. Instead, received: '${yt(R)}'`);
        function k() {
          const A = R;
          A.next && A.next(l());
        }
        return k(), {
          unsubscribe: b(k)
        };
      },
      [lo]() {
        return this;
      }
    };
  }
  return m({
    type: $t.INIT
  }), {
    dispatch: m,
    subscribe: d,
    getState: l,
    replaceReducer: w,
    [lo]: g
  };
}
function fo(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function af(e, t, r, n) {
  const i = Object.keys(t), s = r && r.type === $t.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!kr(e))
    return `The ${s} has unexpected type of "${yt(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const o = Object.keys(e).filter((a) => !t.hasOwnProperty(a) && !n[a]);
  if (o.forEach((a) => {
    n[a] = !0;
  }), !(r && r.type === $t.REPLACE) && o.length > 0)
    return `Unexpected ${o.length > 1 ? "keys" : "key"} "${o.join('", "')}" found in ${s}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function uf(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: $t.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xe(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: $t.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xe(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${$t.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Aa(e) {
  const t = Object.keys(e), r = {};
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    process.env.NODE_ENV !== "production" && typeof e[a] > "u" && fo(`No reducer provided for key "${a}"`), typeof e[a] == "function" && (r[a] = e[a]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let s;
  try {
    uf(r);
  } catch (o) {
    s = o;
  }
  return function(a = {}, c) {
    if (s)
      throw s;
    if (process.env.NODE_ENV !== "production") {
      const d = af(a, r, c, i);
      d && fo(d);
    }
    let f = !1;
    const l = {};
    for (let d = 0; d < n.length; d++) {
      const m = n[d], w = r[m], g = a[m], v = w(g, c);
      if (typeof v > "u") {
        const b = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? xe(14) : `When called with an action of type ${b ? `"${String(b)}"` : "(unknown type)"}, the slice reducer for key "${m}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[m] = v, f = f || v !== g;
    }
    return f = f || n.length !== Object.keys(a).length, f ? l : a;
  };
}
function sn(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function cf(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let s = () => {
      throw new Error(process.env.NODE_ENV === "production" ? xe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const o = {
      getState: i.getState,
      dispatch: (c, ...f) => s(c, ...f)
    }, a = e.map((c) => c(o));
    return s = sn(...a)(i.dispatch), {
      ...i,
      dispatch: s
    };
  };
}
function Da(e) {
  return kr(e) && "type" in e && typeof e.type == "string";
}
var ka = Symbol.for("immer-nothing"), po = Symbol.for("immer-draftable"), ze = Symbol.for("immer-state"), lf = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Me(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = lf[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var cr = Object.getPrototypeOf;
function Mt(e) {
  return !!e && !!e[ze];
}
function ft(e) {
  var t;
  return e ? Pa(e) || Array.isArray(e) || !!e[po] || !!((t = e.constructor) != null && t[po]) || gn(e) || bn(e) : !1;
}
var ff = Object.prototype.constructor.toString();
function Pa(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = cr(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === ff;
}
function on(e, t) {
  yn(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function yn(e) {
  const t = e[ze];
  return t ? t.type_ : Array.isArray(e) ? 1 : gn(e) ? 2 : bn(e) ? 3 : 0;
}
function Ci(e, t) {
  return yn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Na(e, t, r) {
  const n = yn(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function df(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function gn(e) {
  return e instanceof Map;
}
function bn(e) {
  return e instanceof Set;
}
function Rt(e) {
  return e.copy_ || e.base_;
}
function Ti(e, t) {
  if (gn(e))
    return new Map(e);
  if (bn(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Pa(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[ze];
    let i = Reflect.ownKeys(n);
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = n[o];
      a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: a.enumerable,
        value: e[o]
      });
    }
    return Object.create(cr(e), n);
  } else {
    const n = cr(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function Xi(e, t = !1) {
  return vn(e) || Mt(e) || !ft(e) || (yn(e) > 1 && (e.set = e.add = e.clear = e.delete = pf), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => Xi(n, !0))), e;
}
function pf() {
  Me(2);
}
function vn(e) {
  return Object.isFrozen(e);
}
var hf = {};
function jt(e) {
  const t = hf[e];
  return t || Me(0, e), t;
}
var _r;
function $a() {
  return _r;
}
function mf(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function ho(e, t) {
  t && (jt("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function xi(e) {
  Ri(e), e.drafts_.forEach(yf), e.drafts_ = null;
}
function Ri(e) {
  e === _r && (_r = e.parent_);
}
function mo(e) {
  return _r = mf(_r, e);
}
function yf(e) {
  const t = e[ze];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function yo(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[ze].modified_ && (xi(t), Me(4)), ft(e) && (e = an(t, e), t.parent_ || un(t, e)), t.patches_ && jt("Patches").generateReplacementPatches_(
    r[ze].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = an(t, r, []), xi(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== ka ? e : void 0;
}
function an(e, t, r) {
  if (vn(t))
    return t;
  const n = t[ze];
  if (!n)
    return on(
      t,
      (i, s) => go(e, n, t, i, s, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return un(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let s = i, o = !1;
    n.type_ === 3 && (s = new Set(i), i.clear(), o = !0), on(
      s,
      (a, c) => go(e, n, i, a, c, r, o)
    ), un(e, i, !1), r && e.patches_ && jt("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function go(e, t, r, n, i, s, o) {
  if (process.env.NODE_ENV !== "production" && i === r && Me(5), Mt(i)) {
    const a = s && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Ci(t.assigned_, n) ? s.concat(n) : void 0, c = an(e, i, a);
    if (Na(r, n, c), Mt(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else o && r.add(i);
  if (ft(i) && !vn(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    an(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && un(e, i);
  }
}
function un(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Xi(t, r);
}
function gf(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : $a(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, s = Zi;
  r && (i = [n], s = Or);
  const { revoke: o, proxy: a } = Proxy.revocable(i, s);
  return n.draft_ = a, n.revoke_ = o, a;
}
var Zi = {
  get(e, t) {
    if (t === ze)
      return e;
    const r = Rt(e);
    if (!Ci(r, t))
      return bf(e, r, t);
    const n = r[t];
    return e.finalized_ || !ft(n) ? n : n === ii(e.base_, t) ? (si(e), e.copy_[t] = Di(n, e)) : n;
  },
  has(e, t) {
    return t in Rt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Rt(e));
  },
  set(e, t, r) {
    const n = Fa(Rt(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = ii(Rt(e), t), s = i == null ? void 0 : i[ze];
      if (s && s.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (df(r, i) && (r !== void 0 || Ci(e.base_, t)))
        return !0;
      si(e), Ai(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return ii(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, si(e), Ai(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Rt(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Me(11);
  },
  getPrototypeOf(e) {
    return cr(e.base_);
  },
  setPrototypeOf() {
    Me(12);
  }
}, Or = {};
on(Zi, (e, t) => {
  Or[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Or.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Me(13), Or.set.call(this, e, t, void 0);
};
Or.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Me(14), Zi.set.call(this, e[0], t, r, e[0]);
};
function ii(e, t) {
  const r = e[ze];
  return (r ? Rt(r) : e)[t];
}
function bf(e, t, r) {
  var i;
  const n = Fa(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function Fa(e, t) {
  if (!(t in e))
    return;
  let r = cr(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = cr(r);
  }
}
function Ai(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ai(e.parent_));
}
function si(e) {
  e.copy_ || (e.copy_ = Ti(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var vf = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const s = r;
        r = t;
        const o = this;
        return function(c = s, ...f) {
          return o.produce(c, (l) => r.call(this, l, ...f));
        };
      }
      typeof r != "function" && Me(6), n !== void 0 && typeof n != "function" && Me(7);
      let i;
      if (ft(t)) {
        const s = mo(this), o = Di(t, void 0);
        let a = !0;
        try {
          i = r(o), a = !1;
        } finally {
          a ? xi(s) : Ri(s);
        }
        return ho(s, n), yo(i, s);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === ka && (i = void 0), this.autoFreeze_ && Xi(i, !0), n) {
          const s = [], o = [];
          jt("Patches").generateReplacementPatches_(t, i, s, o), n(s, o);
        }
        return i;
      } else
        Me(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (o, ...a) => this.produceWithPatches(o, (c) => t(c, ...a));
      let n, i;
      return [this.produce(t, r, (o, a) => {
        n = o, i = a;
      }), n, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ft(e) || Me(8), Mt(e) && (e = Ef(e));
    const t = mo(this), r = Di(e, void 0);
    return r[ze].isManual_ = !0, Ri(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[ze];
    (!r || !r.isManual_) && Me(9);
    const { scope_: n } = r;
    return ho(n, t), yo(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = jt("Patches").applyPatches_;
    return Mt(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function Di(e, t) {
  const r = gn(e) ? jt("MapSet").proxyMap_(e, t) : bn(e) ? jt("MapSet").proxySet_(e, t) : gf(e, t);
  return (t ? t.scope_ : $a()).drafts_.push(r), r;
}
function Ef(e) {
  return Mt(e) || Me(10, e), Ia(e);
}
function Ia(e) {
  if (!ft(e) || vn(e))
    return e;
  const t = e[ze];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Ti(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Ti(e, !0);
  return on(r, (n, i) => {
    Na(r, n, Ia(i));
  }), t && (t.finalized_ = !1), r;
}
var We = new vf(), Ma = We.produce;
We.produceWithPatches.bind(
  We
);
We.setAutoFreeze.bind(We);
We.setUseStrictShallowCopy.bind(We);
We.applyPatches.bind(We);
We.createDraft.bind(We);
We.finishDraft.bind(We);
function ja(e) {
  return ({ dispatch: r, getState: n }) => (i) => (s) => typeof s == "function" ? s(r, n, e) : i(s);
}
var wf = ja(), Sf = ja, _f = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? sn : sn.apply(null, arguments);
}, Of = (e) => e && typeof e.match == "function";
function bo(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? le(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Da(n) && n.type === e, r;
}
function Cf(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Of(e);
}
function Tf(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function xf(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = Cf
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(Tf(n.type)), r(n));
}
function qa(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const i = Date.now();
      try {
        return n();
      } finally {
        const s = Date.now();
        r += s - i;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Va = class vr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, vr.prototype);
  }
  static get [Symbol.species]() {
    return vr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new vr(...t[0].concat(this)) : new vr(...t.concat(this));
  }
};
function vo(e) {
  return ft(e) ? Ma(e, () => {
  }) : e;
}
function Eo(e, t, r) {
  if (e.has(t)) {
    let i = e.get(t);
    return r.update && (i = r.update(i, t, e), e.set(t, i)), i;
  }
  if (!r.insert) throw new Error(process.env.NODE_ENV === "production" ? le(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function Rf(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Af(e, t, r) {
  const n = La(e, t, r);
  return {
    detectMutations() {
      return Ua(e, t, n, r);
    }
  };
}
function La(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const s = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), s.children = {};
    for (const o in r) {
      const a = n ? n + "." + o : o;
      t.length && t.indexOf(a) !== -1 || (s.children[o] = La(e, t, r[o], a));
    }
  }
  return s;
}
function Ua(e, t = [], r, n, i = !1, s = "") {
  const o = r ? r.value : void 0, a = o === n;
  if (i && !a && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: s
    };
  if (e(o) || e(n))
    return {
      wasMutated: !1
    };
  const c = {};
  for (let l in r.children)
    c[l] = !0;
  for (let l in n)
    c[l] = !0;
  const f = t.length > 0;
  for (let l in c) {
    const d = s ? s + "." + l : l;
    if (f && t.some((g) => g instanceof RegExp ? g.test(d) : d === g))
      continue;
    const m = Ua(e, t, r.children[l], n[l], a, d);
    if (m.wasMutated)
      return m;
  }
  return {
    wasMutated: !1
  };
}
function Df(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(a, c, f, l) {
      return JSON.stringify(a, r(c, l), f);
    }, r = function(a, c) {
      let f = [], l = [];
      return c || (c = function(d, m) {
        return f[0] === m ? "[Circular ~]" : "[Circular ~." + l.slice(0, f.indexOf(m)).join(".") + "]";
      }), function(d, m) {
        if (f.length > 0) {
          var w = f.indexOf(this);
          ~w ? f.splice(w + 1) : f.push(this), ~w ? l.splice(w, 1 / 0, d) : l.push(d), ~f.indexOf(m) && (m = c.call(this, d, m));
        } else f.push(m);
        return a == null ? m : a.call(this, d, m);
      };
    }, {
      isImmutable: n = Rf,
      ignoredPaths: i,
      warnAfter: s = 32
    } = e;
    const o = Af.bind(null, n, i);
    return ({
      getState: a
    }) => {
      let c = a(), f = o(c), l;
      return (d) => (m) => {
        const w = qa(s, "ImmutableStateInvariantMiddleware");
        w.measureTime(() => {
          if (c = a(), l = f.detectMutations(), f = o(c), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? le(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const g = d(m);
        return w.measureTime(() => {
          if (c = a(), l = f.detectMutations(), f = o(c), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? le(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${t(m)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), w.warnIfExceeded(), g;
      };
    };
  }
}
function Ba(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || kr(e);
}
function ki(e, t = "", r = Ba, n, i = [], s) {
  let o;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || s != null && s.has(e)) return !1;
  const a = n != null ? n(e) : Object.entries(e), c = i.length > 0;
  for (const [f, l] of a) {
    const d = t ? t + "." + f : f;
    if (!(c && i.some((w) => w instanceof RegExp ? w.test(d) : d === w))) {
      if (!r(l))
        return {
          keyPath: d,
          value: l
        };
      if (typeof l == "object" && (o = ki(l, d, r, n, i, s), o))
        return o;
    }
  }
  return s && za(e) && s.add(e), !1;
}
function za(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !za(t))
      return !1;
  return !0;
}
function kf(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = Ba,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: s = [],
      warnAfter: o = 32,
      ignoreState: a = !1,
      ignoreActions: c = !1,
      disableCache: f = !1
    } = e, l = !f && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (m) => (w) => {
      if (!Da(w))
        return m(w);
      const g = m(w), v = qa(o, "SerializableStateInvariantMiddleware");
      return !c && !(n.length && n.indexOf(w.type) !== -1) && v.measureTime(() => {
        const b = ki(w, "", t, r, i, l);
        if (b) {
          const {
            keyPath: R,
            value: k
          } = b;
          console.error(`A non-serializable value was detected in an action, in the path: \`${R}\`. Value:`, k, `
Take a look at the logic that dispatched this action: `, w, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), a || (v.measureTime(() => {
        const b = d.getState(), R = ki(b, "", t, r, s, l);
        if (R) {
          const {
            keyPath: k,
            value: S
          } = R;
          console.error(`A non-serializable value was detected in the state, in the path: \`${k}\`. Value:`, S, `
Take a look at the reducer(s) handling this action type: ${w.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), v.warnIfExceeded()), g;
    };
  }
}
function Gr(e) {
  return typeof e == "boolean";
}
var Pf = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: s = !0
  } = t ?? {};
  let o = new Va();
  if (r && (Gr(r) ? o.push(wf) : o.push(Sf(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let a = {};
      Gr(n) || (a = n), o.unshift(Df(a));
    }
    if (i) {
      let a = {};
      Gr(i) || (a = i), o.push(kf(a));
    }
    if (s) {
      let a = {};
      Gr(s) || (a = s), o.unshift(xf(a));
    }
  }
  return o;
}, Nf = "RTK_autoBatch", Wa = (e) => (t) => {
  setTimeout(t, e);
}, $f = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Wa(10), Ff = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, s = !1, o = !1;
  const a = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? $f : e.type === "callback" ? e.queueNotification : Wa(e.timeout), f = () => {
    o = !1, s && (s = !1, a.forEach((l) => l()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const d = () => i && l(), m = n.subscribe(d);
      return a.add(l), () => {
        m(), a.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      var d;
      try {
        return i = !((d = l == null ? void 0 : l.meta) != null && d[Nf]), s = !i, s && (o || (o = !0, c(f))), n.dispatch(l);
      } finally {
        i = !0;
      }
    }
  });
}, If = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new Va(e);
  return n && i.push(Ff(typeof n == "object" ? n : void 0)), i;
};
function es(e) {
  const t = Pf(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    preloadedState: s = void 0,
    enhancers: o = void 0
  } = e || {};
  let a;
  if (typeof r == "function")
    a = r;
  else if (kr(r))
    a = Aa(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? le(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? le(2) : "`middleware` field must be a callback");
  let c;
  if (typeof n == "function") {
    if (c = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? le(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (process.env.NODE_ENV !== "production" && c.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? le(4) : "each middleware provided to configureStore must be a function");
  let f = sn;
  i && (f = _f({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const l = cf(...c), d = If(l);
  if (process.env.NODE_ENV !== "production" && o && typeof o != "function")
    throw new Error(process.env.NODE_ENV === "production" ? le(5) : "`enhancers` field must be a callback");
  let m = typeof o == "function" ? o(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(m))
    throw new Error(process.env.NODE_ENV === "production" ? le(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && m.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? le(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !m.includes(l) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const w = f(...m);
  return Ra(a, s, w);
}
function Ha(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(s, o) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? le(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? le(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof s == "string" ? s : s.type;
      if (!a)
        throw new Error(process.env.NODE_ENV === "production" ? le(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in t)
        throw new Error(process.env.NODE_ENV === "production" ? le(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return t[a] = o, i;
    },
    addMatcher(s, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? le(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: s,
        reducer: o
      }), i;
    },
    addDefaultCase(s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? le(31) : "`builder.addDefaultCase` can only be called once");
      return n = s, i;
    }
  };
  return e(i), [t, r, n];
}
function Mf(e) {
  return typeof e == "function";
}
function jf(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? le(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = Ha(t), s;
  if (Mf(e))
    s = () => vo(e());
  else {
    const a = vo(e);
    s = () => a;
  }
  function o(a = s(), c) {
    let f = [r[c.type], ...n.filter(({
      matcher: l
    }) => l(c)).map(({
      reducer: l
    }) => l)];
    return f.filter((l) => !!l).length === 0 && (f = [i]), f.reduce((l, d) => {
      if (d)
        if (Mt(l)) {
          const w = d(l, c);
          return w === void 0 ? l : w;
        } else {
          if (ft(l))
            return Ma(l, (m) => d(m, c));
          {
            const m = d(l, c);
            if (m === void 0) {
              if (l === null)
                return l;
              throw new Error(process.env.NODE_ENV === "production" ? le(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return m;
          }
        }
      return l;
    }, a);
  }
  return o.getInitialState = s, o;
}
var qf = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Vf(e, t) {
  return `${e}/${t}`;
}
function Lf({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[qf];
  return function(i) {
    const {
      name: s,
      reducerPath: o = s
    } = i;
    if (!s)
      throw new Error(process.env.NODE_ENV === "production" ? le(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof i.reducers == "function" ? i.reducers(Bf()) : i.reducers) || {}, c = Object.keys(a), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, l = {
      addCase(S, A) {
        const E = typeof S == "string" ? S : S.type;
        if (!E)
          throw new Error(process.env.NODE_ENV === "production" ? le(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in f.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? le(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return f.sliceCaseReducersByType[E] = A, l;
      },
      addMatcher(S, A) {
        return f.sliceMatchers.push({
          matcher: S,
          reducer: A
        }), l;
      },
      exposeAction(S, A) {
        return f.actionCreators[S] = A, l;
      },
      exposeCaseReducer(S, A) {
        return f.sliceCaseReducersByName[S] = A, l;
      }
    };
    c.forEach((S) => {
      const A = a[S], E = {
        reducerName: S,
        type: Vf(s, S),
        createNotation: typeof i.reducers == "function"
      };
      Wf(A) ? Kf(E, A, l, t) : zf(E, A, l);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? le(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [S = {}, A = [], E = void 0] = typeof i.extraReducers == "function" ? Ha(i.extraReducers) : [i.extraReducers], $ = {
        ...S,
        ...f.sliceCaseReducersByType
      };
      return jf(i.initialState, (G) => {
        for (let j in $)
          G.addCase(j, $[j]);
        for (let j of f.sliceMatchers)
          G.addMatcher(j.matcher, j.reducer);
        for (let j of A)
          G.addMatcher(j.matcher, j.reducer);
        E && G.addDefaultCase(E);
      });
    }
    const m = (S) => S, w = /* @__PURE__ */ new Map();
    let g;
    function v(S, A) {
      return g || (g = d()), g(S, A);
    }
    function b() {
      return g || (g = d()), g.getInitialState();
    }
    function R(S, A = !1) {
      function E(G) {
        let j = G[S];
        if (typeof j > "u") {
          if (A)
            j = b();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? le(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return j;
      }
      function $(G = m) {
        const j = Eo(w, A, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Eo(j, G, {
          insert: () => {
            const p = {};
            for (const [q, V] of Object.entries(i.selectors ?? {}))
              p[q] = Uf(V, G, b, A);
            return p;
          }
        });
      }
      return {
        reducerPath: S,
        getSelectors: $,
        get selectors() {
          return $(E);
        },
        selectSlice: E
      };
    }
    const k = {
      name: s,
      reducer: v,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: b,
      ...R(o),
      injectInto(S, {
        reducerPath: A,
        ...E
      } = {}) {
        const $ = A ?? o;
        return S.inject({
          reducerPath: $,
          reducer: v
        }, E), {
          ...k,
          ...R($, !0)
        };
      }
    };
    return k;
  };
}
function Uf(e, t, r, n) {
  function i(s, ...o) {
    let a = t(s);
    if (typeof a > "u") {
      if (n)
        a = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? le(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(a, ...o);
  }
  return i.unwrapped = e, i;
}
var _e = /* @__PURE__ */ Lf();
function Bf() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function zf({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let s, o;
  if ("reducer" in n) {
    if (r && !Hf(n))
      throw new Error(process.env.NODE_ENV === "production" ? le(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    s = n.reducer, o = n.prepare;
  } else
    s = n;
  i.addCase(e, s).exposeCaseReducer(t, s).exposeAction(t, o ? bo(e, o) : bo(e));
}
function Wf(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Hf(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Kf({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? le(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: s,
    fulfilled: o,
    pending: a,
    rejected: c,
    settled: f,
    options: l
  } = r, d = i(e, s, l);
  n.exposeAction(t, d), o && n.addCase(d.fulfilled, o), a && n.addCase(d.pending, a), c && n.addCase(d.rejected, c), f && n.addMatcher(d.settled, f), n.exposeCaseReducer(t, {
    fulfilled: o || Yr,
    pending: a || Yr,
    rejected: c || Yr,
    settled: f || Yr
  });
}
function Yr() {
}
function le(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Gf = {
  mobileOpen: !1,
  isClosing: !1,
  pageTitle: "Dashboard"
}, Ka = _e({
  name: "layout",
  initialState: Gf,
  reducers: {
    setMobileOpen: (e, t) => {
      e.mobileOpen = t.payload;
    },
    setIsClosing: (e, t) => {
      e.isClosing = t.payload;
    },
    setPageTitle: (e, t) => {
      e.pageTitle = t.payload;
    }
  }
}), { setMobileOpen: gg, setIsClosing: bg, setPageTitle: vg } = Ka.actions, Eg = (e) => e.layout.mobileOpen, wg = (e) => e.layout.isClosing, Sg = (e) => e.layout.pageTitle, Yf = Ka.reducer, Qf = {
  preview: !1
}, Ga = _e({
  name: "preview",
  initialState: Qf,
  reducers: {
    setPreview: (e, t) => {
      e.preview = t.payload;
    }
  }
}), { setPreview: _g } = Ga.actions, Og = (e) => e.preview.preview, Jf = Ga.reducer, Xf = {
  openDrawer: !1,
  openFor: "create",
  dataId: ""
}, Ya = _e({
  name: "formContainer",
  initialState: Xf,
  reducers: {
    setDrawerOpen: (e, t) => {
      e.openDrawer = t.payload;
    },
    setOpenFor: (e, t) => {
      e.openFor = t.payload;
    },
    setDataId: (e, t) => {
      e.dataId = t.payload;
    }
  }
});
Ya.actions;
const Qa = Ya.reducer, Zf = {
  customers: []
}, Ja = _e({
  name: "customerData",
  initialState: Zf,
  reducers: {
    setCustomerData: (e, t) => {
      e.customers = t.payload;
    }
  }
});
Ja.actions;
const Xa = Ja.reducer, ed = {
  allVendors: [],
  selectedVendor: void 0
}, Za = _e({
  name: "vendorData",
  initialState: ed,
  reducers: {
    setVendorData: (e, t) => {
      e.allVendors = t.payload;
    },
    setSelectedVendor: (e, t) => {
      e.selectedVendor = t.payload;
    }
  }
});
Za.actions;
const eu = Za.reducer, td = {
  employees: []
}, tu = _e({
  name: "employeeData",
  initialState: td,
  reducers: {
    setEmployeeData: (e, t) => {
      e.employees = t.payload;
    }
  }
});
tu.actions;
const ru = tu.reducer, rd = {
  allFarmers: [],
  selectedFarmer: void 0
}, nu = _e({
  name: "farmerData",
  initialState: rd,
  reducers: {
    setFarmerData: (e, t) => {
      e.allFarmers = t.payload;
    },
    setSelectedFarmer: (e, t) => {
      e.selectedFarmer = t.payload;
    }
  }
});
nu.actions;
const iu = nu.reducer, nd = {
  allProducts: [],
  selectedProduct: void 0,
  productCat: [],
  productSubCat: []
}, su = _e({
  name: "productData",
  initialState: nd,
  reducers: {
    setProducts: (e, t) => {
      e.allProducts = t.payload;
    },
    setSelectedProduct: (e, t) => {
      e.selectedProduct = t.payload;
    },
    setProductCat: (e, t) => {
      e.productCat = t.payload;
    },
    setProductSubCat: (e, t) => {
      e.productSubCat = t.payload;
    }
  }
});
su.actions;
const ou = su.reducer, id = {
  allUOMs: [],
  selectedUOM: void 0,
  allUOMConvMat: [],
  selectedUOMConvMat: void 0
}, au = _e({
  name: "uomData",
  initialState: id,
  reducers: {
    setUOMs: (e, t) => {
      e.allUOMs = t.payload;
    },
    setSelectedUOM: (e, t) => {
      e.selectedUOM = t.payload;
    },
    setUOMConvMat: (e, t) => {
      e.allUOMConvMat = t.payload;
    },
    setSelectedUOMConvMat: (e, t) => {
      e.selectedUOMConvMat = t.payload;
    }
  }
});
au.actions;
const uu = au.reducer;
var En = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, wn = typeof window > "u" || "Deno" in globalThis;
function Xe() {
}
function sd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function od(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ad(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function wo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ud(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function So(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: s,
    queryKey: o,
    stale: a
  } = e;
  if (o) {
    if (n) {
      if (t.queryHash !== ts(o, t.options))
        return !1;
    } else if (!Tr(t.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const c = t.isActive();
    if (r === "active" && !c || r === "inactive" && c)
      return !1;
  }
  return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || s && !s(t));
}
function _o(e, t) {
  const { exact: r, status: n, predicate: i, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (Cr(t.options.mutationKey) !== Cr(s))
        return !1;
    } else if (!Tr(t.options.mutationKey, s))
      return !1;
  }
  return !(n && t.state.status !== n || i && !i(t));
}
function ts(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Cr)(e);
}
function Cr(e) {
  return JSON.stringify(
    e,
    (t, r) => Ni(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r
  );
}
function Tr(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !Tr(e[r], t[r])) : !1;
}
function Pi(e, t) {
  if (e === t)
    return e;
  const r = Oo(e) && Oo(t);
  if (r || Ni(e) && Ni(t)) {
    const n = r ? e : Object.keys(e), i = n.length, s = r ? t : Object.keys(t), o = s.length, a = r ? [] : {};
    let c = 0;
    for (let f = 0; f < o; f++) {
      const l = r ? f : s[f];
      (!r && n.includes(l) || r) && e[l] === void 0 && t[l] === void 0 ? (a[l] = void 0, c++) : (a[l] = Pi(e[l], t[l]), a[l] === e[l] && e[l] !== void 0 && c++);
    }
    return i === o && c === i ? e : a;
  }
  return t;
}
function Oo(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ni(e) {
  if (!Co(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!Co(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Co(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function cd(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function ld(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Pi(e, t);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return Pi(e, t);
  }
  return t;
}
function fd(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function dd(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var $i = Symbol();
function cu(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === $i && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === $i ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var Dt, vt, er, ya, pd = (ya = class extends En {
  constructor() {
    super();
    ie(this, Dt);
    ie(this, vt);
    ie(this, er);
    te(this, er, (t) => {
      if (!wn && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    D(this, vt) || this.setEventListener(D(this, er));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = D(this, vt)) == null || t.call(this), te(this, vt, void 0));
  }
  setEventListener(t) {
    var r;
    te(this, er, t), (r = D(this, vt)) == null || r.call(this), te(this, vt, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    D(this, Dt) !== t && (te(this, Dt, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof D(this, Dt) == "boolean" ? D(this, Dt) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Dt = new WeakMap(), vt = new WeakMap(), er = new WeakMap(), ya), lu = new pd(), tr, Et, rr, ga, hd = (ga = class extends En {
  constructor() {
    super();
    ie(this, tr, !0);
    ie(this, Et);
    ie(this, rr);
    te(this, rr, (t) => {
      if (!wn && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    D(this, Et) || this.setEventListener(D(this, rr));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = D(this, Et)) == null || t.call(this), te(this, Et, void 0));
  }
  setEventListener(t) {
    var r;
    te(this, rr, t), (r = D(this, Et)) == null || r.call(this), te(this, Et, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    D(this, tr) !== t && (te(this, tr, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return D(this, tr);
  }
}, tr = new WeakMap(), Et = new WeakMap(), rr = new WeakMap(), ga), cn = new hd();
function md(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function fu(e) {
  return (e ?? "online") === "online" ? cn.isOnline() : !0;
}
var du = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function oi(e) {
  return e instanceof du;
}
function pu(e) {
  let t = !1, r = 0, n = !1, i, s, o;
  const a = new Promise((R, k) => {
    s = R, o = k;
  }), c = (R) => {
    var k;
    n || (g(new du(R)), (k = e.abort) == null || k.call(e));
  }, f = () => {
    t = !0;
  }, l = () => {
    t = !1;
  }, d = () => lu.isFocused() && (e.networkMode === "always" || cn.isOnline()) && e.canRun(), m = () => fu(e.networkMode) && e.canRun(), w = (R) => {
    var k;
    n || (n = !0, (k = e.onSuccess) == null || k.call(e, R), i == null || i(), s(R));
  }, g = (R) => {
    var k;
    n || (n = !0, (k = e.onError) == null || k.call(e, R), i == null || i(), o(R));
  }, v = () => new Promise((R) => {
    var k;
    i = (S) => {
      (n || d()) && R(S);
    }, (k = e.onPause) == null || k.call(e);
  }).then(() => {
    var R;
    i = void 0, n || (R = e.onContinue) == null || R.call(e);
  }), b = () => {
    if (n)
      return;
    let R;
    const k = r === 0 ? e.initialPromise : void 0;
    try {
      R = k ?? e.fn();
    } catch (S) {
      R = Promise.reject(S);
    }
    Promise.resolve(R).then(w).catch((S) => {
      var j;
      if (n)
        return;
      const A = e.retry ?? (wn ? 0 : 3), E = e.retryDelay ?? md, $ = typeof E == "function" ? E(r, S) : E, G = A === !0 || typeof A == "number" && r < A || typeof A == "function" && A(r, S);
      if (t || !G) {
        g(S);
        return;
      }
      r++, (j = e.onFail) == null || j.call(e, r, S), cd($).then(() => d() ? void 0 : v()).then(() => {
        t ? g(S) : b();
      });
    });
  };
  return {
    promise: a,
    cancel: c,
    continue: () => (i == null || i(), a),
    cancelRetry: f,
    continueRetry: l,
    canStart: m,
    start: () => (m() ? b() : v().then(b), a)
  };
}
function yd() {
  let e = [], t = 0, r = (a) => {
    a();
  }, n = (a) => {
    a();
  }, i = (a) => setTimeout(a, 0);
  const s = (a) => {
    t ? e.push(a) : i(() => {
      r(a);
    });
  }, o = () => {
    const a = e;
    e = [], a.length && i(() => {
      n(() => {
        a.forEach((c) => {
          r(c);
        });
      });
    });
  };
  return {
    batch: (a) => {
      let c;
      t++;
      try {
        c = a();
      } finally {
        t--, t || o();
      }
      return c;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (a) => (...c) => {
      s(() => {
        a(...c);
      });
    },
    schedule: s,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (a) => {
      r = a;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (a) => {
      n = a;
    },
    setScheduler: (a) => {
      i = a;
    }
  };
}
var $e = yd(), kt, ba, hu = (ba = class {
  constructor() {
    ie(this, kt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), od(this.gcTime) && te(this, kt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (wn ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    D(this, kt) && (clearTimeout(D(this, kt)), te(this, kt, void 0));
  }
}, kt = new WeakMap(), ba), nr, ir, Ke, De, Ar, Pt, Ze, ct, va, gd = (va = class extends hu {
  constructor(t) {
    super();
    ie(this, Ze);
    ie(this, nr);
    ie(this, ir);
    ie(this, Ke);
    ie(this, De);
    ie(this, Ar);
    ie(this, Pt);
    te(this, Pt, !1), te(this, Ar, t.defaultOptions), this.setOptions(t.options), this.observers = [], te(this, Ke, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, te(this, nr, vd(this.options)), this.state = t.state ?? D(this, nr), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = D(this, De)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...D(this, Ar), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && D(this, Ke).remove(this);
  }
  setData(t, r) {
    const n = ld(this.state.data, t, this.options);
    return Ae(this, Ze, ct).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    Ae(this, Ze, ct).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n, i;
    const r = (n = D(this, De)) == null ? void 0 : n.promise;
    return (i = D(this, De)) == null || i.cancel(t), r ? r.then(Xe).catch(Xe) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(D(this, nr));
  }
  isActive() {
    return this.observers.some(
      (t) => ud(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !ad(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = D(this, De)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = this.observers.find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = D(this, De)) == null || r.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), D(this, Ke).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (D(this, De) && (D(this, Pt) ? D(this, De).cancel({ revert: !0 }) : D(this, De).cancelRetry()), this.scheduleGc()), D(this, Ke).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || Ae(this, Ze, ct).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var c, f, l;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (D(this, De))
        return D(this, De).continueRetry(), D(this, De).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const d = this.observers.find((m) => m.options.queryFn);
      d && this.setOptions(d.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), i = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (te(this, Pt, !0), n.signal)
      });
    }, s = () => {
      const d = cu(this.options, r), m = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return i(m), te(this, Pt, !1), this.options.persister ? this.options.persister(
        d,
        m,
        this
      ) : d(m);
    }, o = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: s
    };
    i(o), (c = this.options.behavior) == null || c.onFetch(
      o,
      this
    ), te(this, ir, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((f = o.fetchOptions) == null ? void 0 : f.meta)) && Ae(this, Ze, ct).call(this, { type: "fetch", meta: (l = o.fetchOptions) == null ? void 0 : l.meta });
    const a = (d) => {
      var m, w, g, v;
      oi(d) && d.silent || Ae(this, Ze, ct).call(this, {
        type: "error",
        error: d
      }), oi(d) || ((w = (m = D(this, Ke).config).onError) == null || w.call(
        m,
        d,
        this
      ), (v = (g = D(this, Ke).config).onSettled) == null || v.call(
        g,
        this.state.data,
        d,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return te(this, De, pu({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: o.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (d) => {
        var m, w, g, v;
        if (d === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), a(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(d);
        } catch (b) {
          a(b);
          return;
        }
        (w = (m = D(this, Ke).config).onSuccess) == null || w.call(m, d, this), (v = (g = D(this, Ke).config).onSettled) == null || v.call(
          g,
          d,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: a,
      onFail: (d, m) => {
        Ae(this, Ze, ct).call(this, { type: "failed", failureCount: d, error: m });
      },
      onPause: () => {
        Ae(this, Ze, ct).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ae(this, Ze, ct).call(this, { type: "continue" });
      },
      retry: o.options.retry,
      retryDelay: o.options.retryDelay,
      networkMode: o.options.networkMode,
      canRun: () => !0
    })), D(this, De).start();
  }
}, nr = new WeakMap(), ir = new WeakMap(), Ke = new WeakMap(), De = new WeakMap(), Ar = new WeakMap(), Pt = new WeakMap(), Ze = new WeakSet(), ct = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...n,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...n,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...n,
          ...bd(n.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return {
          ...n,
          data: t.data,
          dataUpdateCount: n.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const i = t.error;
        return oi(i) && i.revert && D(this, ir) ? { ...D(this, ir), fetchStatus: "idle" } : {
          ...n,
          error: i,
          errorUpdateCount: n.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: n.fetchFailureCount + 1,
          fetchFailureReason: i,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...n,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...n,
          ...t.state
        };
    }
  };
  this.state = r(this.state), $e.batch(() => {
    this.observers.forEach((n) => {
      n.onQueryUpdate();
    }), D(this, Ke).notify({ query: this, type: "updated", action: t });
  });
}, va);
function bd(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: fu(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function vd(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = t !== void 0, n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var nt, Ea, Ed = (Ea = class extends En {
  constructor(t = {}) {
    super();
    ie(this, nt);
    this.config = t, te(this, nt, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const i = r.queryKey, s = r.queryHash ?? ts(i, r);
    let o = this.get(s);
    return o || (o = new gd({
      cache: this,
      queryKey: i,
      queryHash: s,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(i)
    }), this.add(o)), o;
  }
  add(t) {
    D(this, nt).has(t.queryHash) || (D(this, nt).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = D(this, nt).get(t.queryHash);
    r && (t.destroy(), r === t && D(this, nt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    $e.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return D(this, nt).get(t);
  }
  getAll() {
    return [...D(this, nt).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => So(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => So(t, n)) : r;
  }
  notify(t) {
    $e.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    $e.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    $e.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, nt = new WeakMap(), Ea), it, Ne, Nt, st, gt, wa, wd = (wa = class extends hu {
  constructor(t) {
    super();
    ie(this, st);
    ie(this, it);
    ie(this, Ne);
    ie(this, Nt);
    this.mutationId = t.mutationId, te(this, Ne, t.mutationCache), te(this, it, []), this.state = t.state || Sd(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    D(this, it).includes(t) || (D(this, it).push(t), this.clearGcTimeout(), D(this, Ne).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    te(this, it, D(this, it).filter((r) => r !== t)), this.scheduleGc(), D(this, Ne).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    D(this, it).length || (this.state.status === "pending" ? this.scheduleGc() : D(this, Ne).remove(this));
  }
  continue() {
    var t;
    return ((t = D(this, Nt)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var i, s, o, a, c, f, l, d, m, w, g, v, b, R, k, S, A, E, $, G;
    te(this, Nt, pu({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (j, p) => {
        Ae(this, st, gt).call(this, { type: "failed", failureCount: j, error: p });
      },
      onPause: () => {
        Ae(this, st, gt).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ae(this, st, gt).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => D(this, Ne).canRun(this)
    }));
    const r = this.state.status === "pending", n = !D(this, Nt).canStart();
    try {
      if (!r) {
        Ae(this, st, gt).call(this, { type: "pending", variables: t, isPaused: n }), await ((s = (i = D(this, Ne).config).onMutate) == null ? void 0 : s.call(
          i,
          t,
          this
        ));
        const p = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
        p !== this.state.context && Ae(this, st, gt).call(this, {
          type: "pending",
          context: p,
          variables: t,
          isPaused: n
        });
      }
      const j = await D(this, Nt).start();
      return await ((f = (c = D(this, Ne).config).onSuccess) == null ? void 0 : f.call(
        c,
        j,
        t,
        this.state.context,
        this
      )), await ((d = (l = this.options).onSuccess) == null ? void 0 : d.call(l, j, t, this.state.context)), await ((w = (m = D(this, Ne).config).onSettled) == null ? void 0 : w.call(
        m,
        j,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((v = (g = this.options).onSettled) == null ? void 0 : v.call(g, j, null, t, this.state.context)), Ae(this, st, gt).call(this, { type: "success", data: j }), j;
    } catch (j) {
      try {
        throw await ((R = (b = D(this, Ne).config).onError) == null ? void 0 : R.call(
          b,
          j,
          t,
          this.state.context,
          this
        )), await ((S = (k = this.options).onError) == null ? void 0 : S.call(
          k,
          j,
          t,
          this.state.context
        )), await ((E = (A = D(this, Ne).config).onSettled) == null ? void 0 : E.call(
          A,
          void 0,
          j,
          this.state.variables,
          this.state.context,
          this
        )), await ((G = ($ = this.options).onSettled) == null ? void 0 : G.call(
          $,
          void 0,
          j,
          t,
          this.state.context
        )), j;
      } finally {
        Ae(this, st, gt).call(this, { type: "error", error: j });
      }
    } finally {
      D(this, Ne).runNext(this);
    }
  }
}, it = new WeakMap(), Ne = new WeakMap(), Nt = new WeakMap(), st = new WeakSet(), gt = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...n,
          isPaused: !0
        };
      case "continue":
        return {
          ...n,
          isPaused: !1
        };
      case "pending":
        return {
          ...n,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: t.isPaused,
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...n,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...n,
          data: void 0,
          error: t.error,
          failureCount: n.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), $e.batch(() => {
    D(this, it).forEach((n) => {
      n.onMutationUpdate(t);
    }), D(this, Ne).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, wa);
function Sd() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var Ve, Dr, Sa, _d = (Sa = class extends En {
  constructor(t = {}) {
    super();
    ie(this, Ve);
    ie(this, Dr);
    this.config = t, te(this, Ve, /* @__PURE__ */ new Map()), te(this, Dr, Date.now());
  }
  build(t, r, n) {
    const i = new wd({
      mutationCache: this,
      mutationId: ++Kr(this, Dr)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(i), i;
  }
  add(t) {
    const r = Qr(t), n = D(this, Ve).get(r) ?? [];
    n.push(t), D(this, Ve).set(r, n), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var n;
    const r = Qr(t);
    if (D(this, Ve).has(r)) {
      const i = (n = D(this, Ve).get(r)) == null ? void 0 : n.filter((s) => s !== t);
      i && (i.length === 0 ? D(this, Ve).delete(r) : D(this, Ve).set(r, i));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var n;
    const r = (n = D(this, Ve).get(Qr(t))) == null ? void 0 : n.find((i) => i.state.status === "pending");
    return !r || r === t;
  }
  runNext(t) {
    var n;
    const r = (n = D(this, Ve).get(Qr(t))) == null ? void 0 : n.find((i) => i !== t && i.state.isPaused);
    return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
  }
  clear() {
    $e.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return [...D(this, Ve).values()].flat();
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => _o(r, n)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((r) => _o(t, r));
  }
  notify(t) {
    $e.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((r) => r.state.isPaused);
    return $e.batch(
      () => Promise.all(
        t.map((r) => r.continue().catch(Xe))
      )
    );
  }
}, Ve = new WeakMap(), Dr = new WeakMap(), Sa);
function Qr(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function To(e) {
  return {
    onFetch: (t, r) => {
      var l, d, m, w, g;
      const n = t.options, i = (m = (d = (l = t.fetchOptions) == null ? void 0 : l.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : m.direction, s = ((w = t.state.data) == null ? void 0 : w.pages) || [], o = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
      let a = { pages: [], pageParams: [] }, c = 0;
      const f = async () => {
        let v = !1;
        const b = (S) => {
          Object.defineProperty(S, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
              v = !0;
            }), t.signal)
          });
        }, R = cu(t.options, t.fetchOptions), k = async (S, A, E) => {
          if (v)
            return Promise.reject();
          if (A == null && S.pages.length)
            return Promise.resolve(S);
          const $ = {
            queryKey: t.queryKey,
            pageParam: A,
            direction: E ? "backward" : "forward",
            meta: t.options.meta
          };
          b($);
          const G = await R(
            $
          ), { maxPages: j } = t.options, p = E ? dd : fd;
          return {
            pages: p(S.pages, G, j),
            pageParams: p(S.pageParams, A, j)
          };
        };
        if (i && s.length) {
          const S = i === "backward", A = S ? Od : xo, E = {
            pages: s,
            pageParams: o
          }, $ = A(n, E);
          a = await k(E, $, S);
        } else {
          const S = e ?? s.length;
          do {
            const A = c === 0 ? o[0] ?? n.initialPageParam : xo(n, a);
            if (c > 0 && A == null)
              break;
            a = await k(a, A), c++;
          } while (c < S);
        }
        return a;
      };
      t.options.persister ? t.fetchFn = () => {
        var v, b;
        return (b = (v = t.options).persister) == null ? void 0 : b.call(
          v,
          f,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          r
        );
      } : t.fetchFn = f;
    }
  };
}
function xo(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  ) : void 0;
}
function Od(e, { pages: t, pageParams: r }) {
  var n;
  return t.length > 0 ? (n = e.getPreviousPageParam) == null ? void 0 : n.call(e, t[0], t, r[0], r) : void 0;
}
var Ee, wt, St, sr, or, _t, ar, ur, _a, Cd = (_a = class {
  constructor(e = {}) {
    ie(this, Ee);
    ie(this, wt);
    ie(this, St);
    ie(this, sr);
    ie(this, or);
    ie(this, _t);
    ie(this, ar);
    ie(this, ur);
    te(this, Ee, e.queryCache || new Ed()), te(this, wt, e.mutationCache || new _d()), te(this, St, e.defaultOptions || {}), te(this, sr, /* @__PURE__ */ new Map()), te(this, or, /* @__PURE__ */ new Map()), te(this, _t, 0);
  }
  mount() {
    Kr(this, _t)._++, D(this, _t) === 1 && (te(this, ar, lu.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), D(this, Ee).onFocus());
    })), te(this, ur, cn.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), D(this, Ee).onOnline());
    })));
  }
  unmount() {
    var e, t;
    Kr(this, _t)._--, D(this, _t) === 0 && ((e = D(this, ar)) == null || e.call(this), te(this, ar, void 0), (t = D(this, ur)) == null || t.call(this), te(this, ur, void 0));
  }
  isFetching(e) {
    return D(this, Ee).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return D(this, wt).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = D(this, Ee).get(t.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0)
      return this.fetchQuery(e);
    {
      const r = this.defaultQueryOptions(e), n = D(this, Ee).build(this, r);
      return e.revalidateIfStale && n.isStaleByTime(wo(r.staleTime, n)) && this.prefetchQuery(r), Promise.resolve(t);
    }
  }
  getQueriesData(e) {
    return D(this, Ee).findAll(e).map(({ queryKey: t, state: r }) => {
      const n = r.data;
      return [t, n];
    });
  }
  setQueryData(e, t, r) {
    const n = this.defaultQueryOptions({ queryKey: e }), i = D(this, Ee).get(
      n.queryHash
    ), s = i == null ? void 0 : i.state.data, o = sd(t, s);
    if (o !== void 0)
      return D(this, Ee).build(this, n).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return $e.batch(
      () => D(this, Ee).findAll(e).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, t, r)
      ])
    );
  }
  getQueryState(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = D(this, Ee).get(t.queryHash)) == null ? void 0 : r.state;
  }
  removeQueries(e) {
    const t = D(this, Ee);
    $e.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = D(this, Ee), n = {
      type: "active",
      ...e
    };
    return $e.batch(() => (r.findAll(e).forEach((i) => {
      i.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = $e.batch(
      () => D(this, Ee).findAll(e).map((i) => i.cancel(r))
    );
    return Promise.all(n).then(Xe).catch(Xe);
  }
  invalidateQueries(e = {}, t = {}) {
    return $e.batch(() => {
      if (D(this, Ee).findAll(e).forEach((n) => {
        n.invalidate();
      }), e.refetchType === "none")
        return Promise.resolve();
      const r = {
        ...e,
        type: e.refetchType ?? e.type ?? "active"
      };
      return this.refetchQueries(r, t);
    });
  }
  refetchQueries(e = {}, t) {
    const r = {
      ...t,
      cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
    }, n = $e.batch(
      () => D(this, Ee).findAll(e).filter((i) => !i.isDisabled()).map((i) => {
        let s = i.fetch(void 0, r);
        return r.throwOnError || (s = s.catch(Xe)), i.state.fetchStatus === "paused" ? Promise.resolve() : s;
      })
    );
    return Promise.all(n).then(Xe);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const r = D(this, Ee).build(this, t);
    return r.isStaleByTime(
      wo(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Xe).catch(Xe);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = To(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Xe).catch(Xe);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = To(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return cn.isOnline() ? D(this, wt).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return D(this, Ee);
  }
  getMutationCache() {
    return D(this, wt);
  }
  getDefaultOptions() {
    return D(this, St);
  }
  setDefaultOptions(e) {
    te(this, St, e);
  }
  setQueryDefaults(e, t) {
    D(this, sr).set(Cr(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...D(this, sr).values()];
    let r = {};
    return t.forEach((n) => {
      Tr(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    D(this, or).set(Cr(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...D(this, or).values()];
    let r = {};
    return t.forEach((n) => {
      Tr(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...D(this, St).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = ts(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === $i && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...D(this, St).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    D(this, Ee).clear(), D(this, wt).clear();
  }
}, Ee = new WeakMap(), wt = new WeakMap(), St = new WeakMap(), sr = new WeakMap(), or = new WeakMap(), _t = new WeakMap(), ar = new WeakMap(), ur = new WeakMap(), _a);
function mu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Td } = Object.prototype, { getPrototypeOf: rs } = Object, Sn = /* @__PURE__ */ ((e) => (t) => {
  const r = Td.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), et = (e) => (e = e.toLowerCase(), (t) => Sn(t) === e), _n = (e) => (t) => typeof t === e, { isArray: lr } = Array, xr = _n("undefined");
function xd(e) {
  return e !== null && !xr(e) && e.constructor !== null && !xr(e.constructor) && Ue(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yu = et("ArrayBuffer");
function Rd(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && yu(e.buffer), t;
}
const Ad = _n("string"), Ue = _n("function"), gu = _n("number"), On = (e) => e !== null && typeof e == "object", Dd = (e) => e === !0 || e === !1, tn = (e) => {
  if (Sn(e) !== "object")
    return !1;
  const t = rs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, kd = et("Date"), Pd = et("File"), Nd = et("Blob"), $d = et("FileList"), Fd = (e) => On(e) && Ue(e.pipe), Id = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ue(e.append) && ((t = Sn(e)) === "formdata" || // detect form-data instance
  t === "object" && Ue(e.toString) && e.toString() === "[object FormData]"));
}, Md = et("URLSearchParams"), [jd, qd, Vd, Ld] = ["ReadableStream", "Request", "Response", "Headers"].map(et), Ud = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Pr(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), lr(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let a;
    for (n = 0; n < o; n++)
      a = s[n], t.call(null, e[a], a, e);
  }
}
function bu(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const At = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, vu = (e) => !xr(e) && e !== At;
function Fi() {
  const { caseless: e } = vu(this) && this || {}, t = {}, r = (n, i) => {
    const s = e && bu(t, i) || i;
    tn(t[s]) && tn(n) ? t[s] = Fi(t[s], n) : tn(n) ? t[s] = Fi({}, n) : lr(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Pr(arguments[n], r);
  return t;
}
const Bd = (e, t, r, { allOwnKeys: n } = {}) => (Pr(t, (i, s) => {
  r && Ue(i) ? e[s] = mu(i, r) : e[s] = i;
}, { allOwnKeys: n }), e), zd = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wd = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Hd = (e, t, r, n) => {
  let i, s, o;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      o = i[s], (!n || n(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = r !== !1 && rs(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Kd = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Gd = (e) => {
  if (!e) return null;
  if (lr(e)) return e;
  let t = e.length;
  if (!gu(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Yd = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && rs(Uint8Array)), Qd = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const s = i.value;
    t.call(e, s[0], s[1]);
  }
}, Jd = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Xd = et("HTMLFormElement"), Zd = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Ro = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), ep = et("RegExp"), Eu = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Pr(r, (i, s) => {
    let o;
    (o = t(i, s, e)) !== !1 && (n[s] = o || i);
  }), Object.defineProperties(e, n);
}, tp = (e) => {
  Eu(e, (t, r) => {
    if (Ue(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Ue(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, rp = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((s) => {
      r[s] = !0;
    });
  };
  return lr(e) ? n(e) : n(String(e).split(t)), r;
}, np = () => {
}, ip = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, ai = "abcdefghijklmnopqrstuvwxyz", Ao = "0123456789", wu = {
  DIGIT: Ao,
  ALPHA: ai,
  ALPHA_DIGIT: ai + ai.toUpperCase() + Ao
}, sp = (e = 16, t = wu.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function op(e) {
  return !!(e && Ue(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ap = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (On(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const s = lr(n) ? [] : {};
        return Pr(n, (o, a) => {
          const c = r(o, i + 1);
          !xr(c) && (s[a] = c);
        }), t[i] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, up = et("AsyncFunction"), cp = (e) => e && (On(e) || Ue(e)) && Ue(e.then) && Ue(e.catch), Su = ((e, t) => e ? setImmediate : t ? ((r, n) => (At.addEventListener("message", ({ source: i, data: s }) => {
  i === At && s === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), At.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ue(At.postMessage)
), lp = typeof queueMicrotask < "u" ? queueMicrotask.bind(At) : typeof process < "u" && process.nextTick || Su, O = {
  isArray: lr,
  isArrayBuffer: yu,
  isBuffer: xd,
  isFormData: Id,
  isArrayBufferView: Rd,
  isString: Ad,
  isNumber: gu,
  isBoolean: Dd,
  isObject: On,
  isPlainObject: tn,
  isReadableStream: jd,
  isRequest: qd,
  isResponse: Vd,
  isHeaders: Ld,
  isUndefined: xr,
  isDate: kd,
  isFile: Pd,
  isBlob: Nd,
  isRegExp: ep,
  isFunction: Ue,
  isStream: Fd,
  isURLSearchParams: Md,
  isTypedArray: Yd,
  isFileList: $d,
  forEach: Pr,
  merge: Fi,
  extend: Bd,
  trim: Ud,
  stripBOM: zd,
  inherits: Wd,
  toFlatObject: Hd,
  kindOf: Sn,
  kindOfTest: et,
  endsWith: Kd,
  toArray: Gd,
  forEachEntry: Qd,
  matchAll: Jd,
  isHTMLForm: Xd,
  hasOwnProperty: Ro,
  hasOwnProp: Ro,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Eu,
  freezeMethods: tp,
  toObjectSet: rp,
  toCamelCase: Zd,
  noop: np,
  toFiniteNumber: ip,
  findKey: bu,
  global: At,
  isContextDefined: vu,
  ALPHABET: wu,
  generateString: sp,
  isSpecCompliantForm: op,
  toJSONObject: ap,
  isAsyncFn: up,
  isThenable: cp,
  setImmediate: Su,
  asap: lp
};
function ee(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
O.inherits(ee, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: O.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const _u = ee.prototype, Ou = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ou[e] = { value: e };
});
Object.defineProperties(ee, Ou);
Object.defineProperty(_u, "isAxiosError", { value: !0 });
ee.from = (e, t, r, n, i, s) => {
  const o = Object.create(_u);
  return O.toFlatObject(e, o, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), ee.call(o, e.message, t, r, n, i), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const fp = null;
function Ii(e) {
  return O.isPlainObject(e) || O.isArray(e);
}
function Cu(e) {
  return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Do(e, t, r) {
  return e ? e.concat(t).map(function(i, s) {
    return i = Cu(i), !r && s ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function dp(e) {
  return O.isArray(e) && !e.some(Ii);
}
const pp = O.toFlatObject(O, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Cn(e, t, r) {
  if (!O.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = O.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, b) {
    return !O.isUndefined(b[v]);
  });
  const n = r.metaTokens, i = r.visitor || l, s = r.dots, o = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t);
  if (!O.isFunction(i))
    throw new TypeError("visitor must be a function");
  function f(g) {
    if (g === null) return "";
    if (O.isDate(g))
      return g.toISOString();
    if (!c && O.isBlob(g))
      throw new ee("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(g) || O.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function l(g, v, b) {
    let R = g;
    if (g && !b && typeof g == "object") {
      if (O.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (O.isArray(g) && dp(g) || (O.isFileList(g) || O.endsWith(v, "[]")) && (R = O.toArray(g)))
        return v = Cu(v), R.forEach(function(S, A) {
          !(O.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Do([v], A, s) : o === null ? v : v + "[]",
            f(S)
          );
        }), !1;
    }
    return Ii(g) ? !0 : (t.append(Do(b, v, s), f(g)), !1);
  }
  const d = [], m = Object.assign(pp, {
    defaultVisitor: l,
    convertValue: f,
    isVisitable: Ii
  });
  function w(g, v) {
    if (!O.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(g), O.forEach(g, function(R, k) {
        (!(O.isUndefined(R) || R === null) && i.call(
          t,
          R,
          O.isString(k) ? k.trim() : k,
          v,
          m
        )) === !0 && w(R, v ? v.concat(k) : [k]);
      }), d.pop();
    }
  }
  if (!O.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function ko(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function ns(e, t) {
  this._pairs = [], e && Cn(e, this, t);
}
const Tu = ns.prototype;
Tu.append = function(t, r) {
  this._pairs.push([t, r]);
};
Tu.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ko);
  } : ko;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function hp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xu(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || hp, i = r && r.serialize;
  let s;
  if (i ? s = i(t, r) : s = O.isURLSearchParams(t) ? t.toString() : new ns(t, r).toString(n), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Po {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    O.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Ru = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, mp = typeof URLSearchParams < "u" ? URLSearchParams : ns, yp = typeof FormData < "u" ? FormData : null, gp = typeof Blob < "u" ? Blob : null, bp = {
  isBrowser: !0,
  classes: {
    URLSearchParams: mp,
    FormData: yp,
    Blob: gp
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, is = typeof window < "u" && typeof document < "u", Mi = typeof navigator == "object" && navigator || void 0, vp = is && (!Mi || ["ReactNative", "NativeScript", "NS"].indexOf(Mi.product) < 0), Ep = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", wp = is && window.location.href || "http://localhost", Sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: is,
  hasStandardBrowserEnv: vp,
  hasStandardBrowserWebWorkerEnv: Ep,
  navigator: Mi,
  origin: wp
}, Symbol.toStringTag, { value: "Module" })), je = {
  ...Sp,
  ...bp
};
function _p(e, t) {
  return Cn(e, new je.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, s) {
      return je.isNode && O.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Op(e) {
  return O.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Cp(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Au(e) {
  function t(r, n, i, s) {
    let o = r[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), c = s >= r.length;
    return o = !o && O.isArray(i) ? i.length : o, c ? (O.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !a) : ((!i[o] || !O.isObject(i[o])) && (i[o] = []), t(r, n, i[o], s) && O.isArray(i[o]) && (i[o] = Cp(i[o])), !a);
  }
  if (O.isFormData(e) && O.isFunction(e.entries)) {
    const r = {};
    return O.forEachEntry(e, (n, i) => {
      t(Op(n), i, r, 0);
    }), r;
  }
  return null;
}
function Tp(e, t, r) {
  if (O.isString(e))
    try {
      return (t || JSON.parse)(e), O.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(e);
}
const Nr = {
  transitional: Ru,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, s = O.isObject(t);
    if (s && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t))
      return i ? JSON.stringify(Au(t)) : t;
    if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t) || O.isReadableStream(t))
      return t;
    if (O.isArrayBufferView(t))
      return t.buffer;
    if (O.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return _p(t, this.formSerializer).toString();
      if ((a = O.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Cn(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || i ? (r.setContentType("application/json", !1), Tp(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Nr.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (O.isResponse(t) || O.isReadableStream(t))
      return t;
    if (t && O.isString(t) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? ee.from(a, ee.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: je.classes.FormData,
    Blob: je.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
O.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Nr.headers[e] = {};
});
const xp = O.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Rp = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || t[r] && xp[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, No = Symbol("internals");
function mr(e) {
  return e && String(e).trim().toLowerCase();
}
function rn(e) {
  return e === !1 || e == null ? e : O.isArray(e) ? e.map(rn) : String(e);
}
function Ap(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Dp = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ui(e, t, r, n, i) {
  if (O.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!O.isString(t)) {
    if (O.isString(n))
      return t.indexOf(n) !== -1;
    if (O.isRegExp(n))
      return n.test(t);
  }
}
function kp(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Pp(e, t) {
  const r = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, s, o) {
        return this[n].call(this, t, i, s, o);
      },
      configurable: !0
    });
  });
}
class qe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function s(a, c, f) {
      const l = mr(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = O.findKey(i, l);
      (!d || i[d] === void 0 || f === !0 || f === void 0 && i[d] !== !1) && (i[d || c] = rn(a));
    }
    const o = (a, c) => O.forEach(a, (f, l) => s(f, l, c));
    if (O.isPlainObject(t) || t instanceof this.constructor)
      o(t, r);
    else if (O.isString(t) && (t = t.trim()) && !Dp(t))
      o(Rp(t), r);
    else if (O.isHeaders(t))
      for (const [a, c] of t.entries())
        s(c, a, n);
    else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = mr(t), t) {
      const n = O.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Ap(i);
        if (O.isFunction(r))
          return r.call(this, i, n);
        if (O.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = mr(t), t) {
      const n = O.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || ui(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function s(o) {
      if (o = mr(o), o) {
        const a = O.findKey(n, o);
        a && (!r || ui(n, n[a], a, r)) && (delete n[a], i = !0);
      }
    }
    return O.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || ui(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return O.forEach(this, (i, s) => {
      const o = O.findKey(n, s);
      if (o) {
        r[o] = rn(i), delete r[s];
        return;
      }
      const a = t ? kp(s) : String(s).trim();
      a !== s && delete r[s], r[a] = rn(i), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && O.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[No] = this[No] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const a = mr(o);
      n[a] || (Pp(i, o), n[a] = !0);
    }
    return O.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
qe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(qe.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
O.freezeMethods(qe);
function ci(e, t) {
  const r = this || Nr, n = t || r, i = qe.from(n.headers);
  let s = n.data;
  return O.forEach(e, function(a) {
    s = a.call(r, s, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), s;
}
function Du(e) {
  return !!(e && e.__CANCEL__);
}
function fr(e, t, r) {
  ee.call(this, e ?? "canceled", ee.ERR_CANCELED, t, r), this.name = "CanceledError";
}
O.inherits(fr, ee, {
  __CANCEL__: !0
});
function ku(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new ee(
    "Request failed with status code " + r.status,
    [ee.ERR_BAD_REQUEST, ee.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Np(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function $p(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, s = 0, o;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const f = Date.now(), l = n[s];
    o || (o = f), r[i] = c, n[i] = f;
    let d = s, m = 0;
    for (; d !== i; )
      m += r[d++], d = d % e;
    if (i = (i + 1) % e, i === s && (s = (s + 1) % e), f - o < t)
      return;
    const w = l && f - l;
    return w ? Math.round(m * 1e3 / w) : void 0;
  };
}
function Fp(e, t) {
  let r = 0, n = 1e3 / t, i, s;
  const o = (f, l = Date.now()) => {
    r = l, i = null, s && (clearTimeout(s), s = null), e.apply(null, f);
  };
  return [(...f) => {
    const l = Date.now(), d = l - r;
    d >= n ? o(f, l) : (i = f, s || (s = setTimeout(() => {
      s = null, o(i);
    }, n - d)));
  }, () => i && o(i)];
}
const ln = (e, t, r = 3) => {
  let n = 0;
  const i = $p(50, 250);
  return Fp((s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, c = o - n, f = i(c), l = o <= a;
    n = o;
    const d = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: c,
      rate: f || void 0,
      estimated: f && a && l ? (a - o) / f : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, r);
}, $o = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Fo = (e) => (...t) => O.asap(() => e(...t)), Ip = je.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = je.navigator && /(msie|trident)/i.test(je.navigator.userAgent), r = document.createElement("a");
    let n;
    function i(s) {
      let o = s;
      return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = i(window.location.href), function(o) {
      const a = O.isString(o) ? i(o) : o;
      return a.protocol === n.protocol && a.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Mp = je.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, s) {
      const o = [e + "=" + encodeURIComponent(t)];
      O.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), O.isString(n) && o.push("path=" + n), O.isString(i) && o.push("domain=" + i), s === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function jp(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function qp(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pu(e, t) {
  return e && !jp(t) ? qp(e, t) : t;
}
const Io = (e) => e instanceof qe ? { ...e } : e;
function qt(e, t) {
  t = t || {};
  const r = {};
  function n(f, l, d) {
    return O.isPlainObject(f) && O.isPlainObject(l) ? O.merge.call({ caseless: d }, f, l) : O.isPlainObject(l) ? O.merge({}, l) : O.isArray(l) ? l.slice() : l;
  }
  function i(f, l, d) {
    if (O.isUndefined(l)) {
      if (!O.isUndefined(f))
        return n(void 0, f, d);
    } else return n(f, l, d);
  }
  function s(f, l) {
    if (!O.isUndefined(l))
      return n(void 0, l);
  }
  function o(f, l) {
    if (O.isUndefined(l)) {
      if (!O.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, l);
  }
  function a(f, l, d) {
    if (d in t)
      return n(f, l);
    if (d in e)
      return n(void 0, f);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (f, l) => i(Io(f), Io(l), !0)
  };
  return O.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const d = c[l] || i, m = d(e[l], t[l], l);
    O.isUndefined(m) && d !== a || (r[l] = m);
  }), r;
}
const Nu = (e) => {
  const t = qt({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: s, headers: o, auth: a } = t;
  t.headers = o = qe.from(o), t.url = xu(Pu(t.baseURL, t.url), e.params, e.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (O.isFormData(r)) {
    if (je.hasStandardBrowserEnv || je.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((c = o.getContentType()) !== !1) {
      const [f, ...l] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([f || "multipart/form-data", ...l].join("; "));
    }
  }
  if (je.hasStandardBrowserEnv && (n && O.isFunction(n) && (n = n(t)), n || n !== !1 && Ip(t.url))) {
    const f = i && s && Mp.read(s);
    f && o.set(i, f);
  }
  return t;
}, Vp = typeof XMLHttpRequest < "u", Lp = Vp && function(e) {
  return new Promise(function(r, n) {
    const i = Nu(e);
    let s = i.data;
    const o = qe.from(i.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: f } = i, l, d, m, w, g;
    function v() {
      w && w(), g && g(), i.cancelToken && i.cancelToken.unsubscribe(l), i.signal && i.signal.removeEventListener("abort", l);
    }
    let b = new XMLHttpRequest();
    b.open(i.method.toUpperCase(), i.url, !0), b.timeout = i.timeout;
    function R() {
      if (!b)
        return;
      const S = qe.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), E = {
        data: !a || a === "text" || a === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: S,
        config: e,
        request: b
      };
      ku(function(G) {
        r(G), v();
      }, function(G) {
        n(G), v();
      }, E), b = null;
    }
    "onloadend" in b ? b.onloadend = R : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, b.onabort = function() {
      b && (n(new ee("Request aborted", ee.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function() {
      n(new ee("Network Error", ee.ERR_NETWORK, e, b)), b = null;
    }, b.ontimeout = function() {
      let A = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const E = i.transitional || Ru;
      i.timeoutErrorMessage && (A = i.timeoutErrorMessage), n(new ee(
        A,
        E.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED,
        e,
        b
      )), b = null;
    }, s === void 0 && o.setContentType(null), "setRequestHeader" in b && O.forEach(o.toJSON(), function(A, E) {
      b.setRequestHeader(E, A);
    }), O.isUndefined(i.withCredentials) || (b.withCredentials = !!i.withCredentials), a && a !== "json" && (b.responseType = i.responseType), f && ([m, g] = ln(f, !0), b.addEventListener("progress", m)), c && b.upload && ([d, w] = ln(c), b.upload.addEventListener("progress", d), b.upload.addEventListener("loadend", w)), (i.cancelToken || i.signal) && (l = (S) => {
      b && (n(!S || S.type ? new fr(null, e, b) : S), b.abort(), b = null);
    }, i.cancelToken && i.cancelToken.subscribe(l), i.signal && (i.signal.aborted ? l() : i.signal.addEventListener("abort", l)));
    const k = Np(i.url);
    if (k && je.protocols.indexOf(k) === -1) {
      n(new ee("Unsupported protocol " + k + ":", ee.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(s || null);
  });
}, Up = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const s = function(f) {
      if (!i) {
        i = !0, a();
        const l = f instanceof Error ? f : this.reason;
        n.abort(l instanceof ee ? l : new fr(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, s(new ee(`timeout ${t} of ms exceeded`, ee.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", s));
    const { signal: c } = n;
    return c.unsubscribe = () => O.asap(a), c;
  }
}, Bp = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + t, yield e.slice(n, i), n = i;
}, zp = async function* (e, t) {
  for await (const r of Wp(e))
    yield* Bp(r, t);
}, Wp = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Mo = (e, t, r, n) => {
  const i = zp(e, t);
  let s = 0, o, a = (c) => {
    o || (o = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: f, value: l } = await i.next();
        if (f) {
          a(), c.close();
          return;
        }
        let d = l.byteLength;
        if (r) {
          let m = s += d;
          r(m);
        }
        c.enqueue(new Uint8Array(l));
      } catch (f) {
        throw a(f), f;
      }
    },
    cancel(c) {
      return a(c), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Tn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", $u = Tn && typeof ReadableStream == "function", Hp = Tn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Fu = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Kp = $u && Fu(() => {
  let e = !1;
  const t = new Request(je.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), jo = 64 * 1024, ji = $u && Fu(() => O.isReadableStream(new Response("").body)), fn = {
  stream: ji && ((e) => e.body)
};
Tn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !fn[t] && (fn[t] = O.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new ee(`Response type '${t}' is not supported`, ee.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Gp = async (e) => {
  if (e == null)
    return 0;
  if (O.isBlob(e))
    return e.size;
  if (O.isSpecCompliantForm(e))
    return (await new Request(je.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (O.isArrayBufferView(e) || O.isArrayBuffer(e))
    return e.byteLength;
  if (O.isURLSearchParams(e) && (e = e + ""), O.isString(e))
    return (await Hp(e)).byteLength;
}, Yp = async (e, t) => {
  const r = O.toFiniteNumber(e.getContentLength());
  return r ?? Gp(t);
}, Qp = Tn && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: i,
    cancelToken: s,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: f,
    headers: l,
    withCredentials: d = "same-origin",
    fetchOptions: m
  } = Nu(e);
  f = f ? (f + "").toLowerCase() : "text";
  let w = Up([i, s && s.toAbortSignal()], o), g;
  const v = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let b;
  try {
    if (c && Kp && r !== "get" && r !== "head" && (b = await Yp(l, n)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), $;
      if (O.isFormData(n) && ($ = E.headers.get("content-type")) && l.setContentType($), E.body) {
        const [G, j] = $o(
          b,
          ln(Fo(c))
        );
        n = Mo(E.body, jo, G, j);
      }
    }
    O.isString(d) || (d = d ? "include" : "omit");
    const R = "credentials" in Request.prototype;
    g = new Request(t, {
      ...m,
      signal: w,
      method: r.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: R ? d : void 0
    });
    let k = await fetch(g);
    const S = ji && (f === "stream" || f === "response");
    if (ji && (a || S && v)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((p) => {
        E[p] = k[p];
      });
      const $ = O.toFiniteNumber(k.headers.get("content-length")), [G, j] = a && $o(
        $,
        ln(Fo(a), !0)
      ) || [];
      k = new Response(
        Mo(k.body, jo, G, () => {
          j && j(), v && v();
        }),
        E
      );
    }
    f = f || "text";
    let A = await fn[O.findKey(fn, f) || "text"](k, e);
    return !S && v && v(), await new Promise((E, $) => {
      ku(E, $, {
        data: A,
        headers: qe.from(k.headers),
        status: k.status,
        statusText: k.statusText,
        config: e,
        request: g
      });
    });
  } catch (R) {
    throw v && v(), R && R.name === "TypeError" && /fetch/i.test(R.message) ? Object.assign(
      new ee("Network Error", ee.ERR_NETWORK, e, g),
      {
        cause: R.cause || R
      }
    ) : ee.from(R, R && R.code, e, g);
  }
}), qi = {
  http: fp,
  xhr: Lp,
  fetch: Qp
};
O.forEach(qi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const qo = (e) => `- ${e}`, Jp = (e) => O.isFunction(e) || e === null || e === !1, Iu = {
  getAdapter: (e) => {
    e = O.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let o;
      if (n = r, !Jp(r) && (n = qi[(o = String(r)).toLowerCase()], n === void 0))
        throw new ee(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(i).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? s.length > 1 ? `since :
` + s.map(qo).join(`
`) : " " + qo(s[0]) : "as no adapter specified";
      throw new ee(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: qi
};
function li(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new fr(null, e);
}
function Vo(e) {
  return li(e), e.headers = qe.from(e.headers), e.data = ci.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Iu.getAdapter(e.adapter || Nr.adapter)(e).then(function(n) {
    return li(e), n.data = ci.call(
      e,
      e.transformResponse,
      n
    ), n.headers = qe.from(n.headers), n;
  }, function(n) {
    return Du(n) || (li(e), n && n.response && (n.response.data = ci.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = qe.from(n.response.headers))), Promise.reject(n);
  });
}
const Mu = "1.7.7", ss = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ss[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Lo = {};
ss.transitional = function(t, r, n) {
  function i(s, o) {
    return "[Axios v" + Mu + "] Transitional option '" + s + "'" + o + (n ? ". " + n : "");
  }
  return (s, o, a) => {
    if (t === !1)
      throw new ee(
        i(o, " has been removed" + (r ? " in " + r : "")),
        ee.ERR_DEPRECATED
      );
    return r && !Lo[o] && (Lo[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, o, a) : !0;
  };
};
function Xp(e, t, r) {
  if (typeof e != "object")
    throw new ee("options must be an object", ee.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i], o = t[s];
    if (o) {
      const a = e[s], c = a === void 0 || o(a, s, e);
      if (c !== !0)
        throw new ee("option " + s + " must be " + c, ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ee("Unknown option " + s, ee.ERR_BAD_OPTION);
  }
}
const Vi = {
  assertOptions: Xp,
  validators: ss
}, mt = Vi.validators;
class Ft {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Po(),
      response: new Po()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = qt(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 && Vi.assertOptions(n, {
      silentJSONParsing: mt.transitional(mt.boolean),
      forcedJSONParsing: mt.transitional(mt.boolean),
      clarifyTimeoutError: mt.transitional(mt.boolean)
    }, !1), i != null && (O.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Vi.assertOptions(i, {
      encode: mt.function,
      serialize: mt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = s && O.merge(
      s.common,
      s[r.method]
    );
    s && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), r.headers = qe.concat(o, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (c = c && v.synchronous, a.unshift(v.fulfilled, v.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(v) {
      f.push(v.fulfilled, v.rejected);
    });
    let l, d = 0, m;
    if (!c) {
      const g = [Vo.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, f), m = g.length, l = Promise.resolve(r); d < m; )
        l = l.then(g[d++], g[d++]);
      return l;
    }
    m = a.length;
    let w = r;
    for (d = 0; d < m; ) {
      const g = a[d++], v = a[d++];
      try {
        w = g(w);
      } catch (b) {
        v.call(this, b);
        break;
      }
    }
    try {
      l = Vo.call(this, w);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, m = f.length; d < m; )
      l = l.then(f[d++], f[d++]);
    return l;
  }
  getUri(t) {
    t = qt(this.defaults, t);
    const r = Pu(t.baseURL, t.url);
    return xu(r, t.params, t.paramsSerializer);
  }
}
O.forEach(["delete", "get", "head", "options"], function(t) {
  Ft.prototype[t] = function(r, n) {
    return this.request(qt(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, o, a) {
      return this.request(qt(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  Ft.prototype[t] = r(), Ft.prototype[t + "Form"] = r(!0);
});
class os {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const o = new Promise((a) => {
        n.subscribe(a), s = a;
      }).then(i);
      return o.cancel = function() {
        n.unsubscribe(s);
      }, o;
    }, t(function(s, o, a) {
      n.reason || (n.reason = new fr(s, o, a), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new os(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
function Zp(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function eh(e) {
  return O.isObject(e) && e.isAxiosError === !0;
}
const Li = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Li).forEach(([e, t]) => {
  Li[t] = e;
});
function ju(e) {
  const t = new Ft(e), r = mu(Ft.prototype.request, t);
  return O.extend(r, Ft.prototype, t, { allOwnKeys: !0 }), O.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return ju(qt(e, i));
  }, r;
}
const Se = ju(Nr);
Se.Axios = Ft;
Se.CanceledError = fr;
Se.CancelToken = os;
Se.isCancel = Du;
Se.VERSION = Mu;
Se.toFormData = Cn;
Se.AxiosError = ee;
Se.Cancel = Se.CanceledError;
Se.all = function(t) {
  return Promise.all(t);
};
Se.spread = Zp;
Se.isAxiosError = eh;
Se.mergeConfig = qt;
Se.AxiosHeaders = qe;
Se.formToJSON = (e) => Au(O.isHTMLForm(e) ? new FormData(e) : e);
Se.getAdapter = Iu.getAdapter;
Se.HttpStatusCode = Li;
Se.default = Se;
const th = {
  //Authentication
  BASE_URL: "ec2-13-234-20-64.ap-south-1.compute.amazonaws.com:80"
}, Ui = Se.create({
  baseURL: th.BASE_URL,
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "multipart/form-data"
  }
}), rh = () => localStorage.getItem("access_token"), nh = () => localStorage.getItem("refresh_token");
Ui.interceptors.request.use(
  (e) => {
    const t = rh();
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
Ui.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config;
    if (e.response && e.response.status === 401 && !t._retry) {
      t._retry = !0;
      const r = nh();
      if (r)
        try {
          const { data: n } = await Se.post("https://7759-182-156-141-17.ngrok-free.app/auth/refresh-token", {
            refreshToken: r
          });
          return localStorage.setItem("accessToken", n.accessToken), t.headers.Authorization = `Bearer ${n.accessToken}`, Ui(t);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(e);
  }
);
var qu = /* @__PURE__ */ ((e) => (e[e.COLLECTION_CENTER = 0] = "COLLECTION_CENTER", e[e.DISTRIBUTION_CENTER = 1] = "DISTRIBUTION_CENTER", e[e.SEASONAL_COLLECTION_CENTER = 2] = "SEASONAL_COLLECTION_CENTER", e[e.WAREHOUSE = 3] = "WAREHOUSE", e))(qu || {}), Vu = /* @__PURE__ */ ((e) => (e[e.REGISTERED_OFFICE = 0] = "REGISTERED_OFFICE", e[e.CORPORATE_OFFICE = 1] = "CORPORATE_OFFICE", e))(Vu || {}), Lu = /* @__PURE__ */ ((e) => (e.OWNED = "Owned", e.LEASED = "Leased", e.SHARED = "Shared", e.ENCUMBERED = "Encumbered", e))(Lu || {}), Uu = /* @__PURE__ */ ((e) => (e.CULTIVABLE = "Cultivable", e.FALLOW = "Fallow", e.IRRIGATED = "Irrigated", e.NON_IRRIGATED = "Non-Irrigated", e))(Uu || {});
const ih = {
  offices: [],
  officeType: Vu.REGISTERED_OFFICE,
  selectedOffices: void 0
}, Bu = _e({
  name: "officesData",
  initialState: ih,
  reducers: {
    setOfficesData: (e, t) => {
      e.offices = t.payload;
    },
    setOfficeType: (e, t) => {
      e.officeType = t.payload;
    }
  }
});
Bu.actions;
const zu = Bu.reducer, sh = {
  branches: [],
  BranchType: qu.COLLECTION_CENTER,
  selectedBranches: void 0
}, Wu = _e({
  name: "branchesData",
  initialState: sh,
  reducers: {
    setBranchesData: (e, t) => {
      e.branches = t.payload;
    },
    setBranchType: (e, t) => {
      e.BranchType = t.payload;
    }
  }
});
Wu.actions;
const Hu = Wu.reducer, oh = {
  open: !1,
  message: "",
  severity: "success"
}, Ku = _e({
  name: "alertSnackbar",
  initialState: oh,
  reducers: {
    openAlertbar: (e, t) => {
      e.open = t.payload;
    },
    closeAlertbar: (e, t) => {
      e.open = t.payload;
    },
    addMessageSevirity: (e, t) => {
      e.message = t.payload.message, e.severity = t.payload.severity;
    },
    removeMessageSeverity: (e) => {
      e.message = "", e.severity = "success";
    }
  }
});
Ku.actions;
const Gu = Ku.reducer;
es({
  reducer: {
    formContainer: Qa,
    customerData: Xa,
    vendorData: eu,
    employeeData: ru,
    farmerData: iu,
    productData: ou,
    uomData: uu,
    officesData: zu,
    branchesData: Hu,
    alertSnackbar: Gu
  }
});
const Uo = {
  address1: "",
  address2: "",
  location: "",
  city: "",
  state: "",
  pincode: ""
}, ah = {
  crop: "",
  variety: "",
  noOfPlants: "",
  pruningDate: /* @__PURE__ */ new Date(),
  expectedHarvestDate: /* @__PURE__ */ new Date(),
  expectedQuantityInTonnes: 0
};
Lu.OWNED, Uu.NON_IRRIGATED;
function Vt(e) {
  this._maxSize = e, this.clear();
}
Vt.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
Vt.prototype.get = function(e) {
  return this._values[e];
};
Vt.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var uh = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Yu = /^\d+$/, ch = /^\d/, lh = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, fh = /^\s*(['"]?)(.*?)(\1)\s*$/, as = 512, Bo = new Vt(as), zo = new Vt(as), Wo = new Vt(as), It = {
  Cache: Vt,
  split: Bi,
  normalizePath: fi,
  setter: function(e) {
    var t = fi(e);
    return zo.get(e) || zo.set(e, function(n, i) {
      for (var s = 0, o = t.length, a = n; s < o - 1; ) {
        var c = t[s];
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return n;
        a = a[t[s++]];
      }
      a[t[s]] = i;
    });
  },
  getter: function(e, t) {
    var r = fi(e);
    return Wo.get(e) || Wo.set(e, function(i) {
      for (var s = 0, o = r.length; s < o; )
        if (i != null || !t) i = i[r[s++]];
        else return;
      return i;
    });
  },
  join: function(e) {
    return e.reduce(function(t, r) {
      return t + (us(r) || Yu.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    dh(Array.isArray(e) ? e : Bi(e), t, r);
  }
};
function fi(e) {
  return Bo.get(e) || Bo.set(
    e,
    Bi(e).map(function(t) {
      return t.replace(fh, "$2");
    })
  );
}
function Bi(e) {
  return e.match(uh) || [""];
}
function dh(e, t, r) {
  var n = e.length, i, s, o, a;
  for (s = 0; s < n; s++)
    i = e[s], i && (mh(i) && (i = '"' + i + '"'), a = us(i), o = !a && /^\d+$/.test(i), t.call(r, i, a, o, s, e));
}
function us(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function ph(e) {
  return e.match(ch) && !e.match(Yu);
}
function hh(e) {
  return lh.test(e);
}
function mh(e) {
  return !us(e) && (ph(e) || hh(e));
}
const yh = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, xn = (e) => e.match(yh) || [], Rn = (e) => e[0].toUpperCase() + e.slice(1), cs = (e, t) => xn(e).join(t).toLowerCase(), Qu = (e) => xn(e).reduce(
  (t, r) => `${t}${t ? r[0].toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()}`,
  ""
), gh = (e) => Rn(Qu(e)), bh = (e) => cs(e, "_"), vh = (e) => cs(e, "-"), Eh = (e) => Rn(cs(e, " ")), wh = (e) => xn(e).map(Rn).join(" ");
var di = {
  words: xn,
  upperFirst: Rn,
  camelCase: Qu,
  pascalCase: gh,
  snakeCase: bh,
  kebabCase: vh,
  sentenceCase: Eh,
  titleCase: wh
}, ls = { exports: {} };
ls.exports = function(e) {
  return Ju(Sh(e), e);
};
ls.exports.array = Ju;
function Ju(e, t) {
  var r = e.length, n = new Array(r), i = {}, s = r, o = _h(t), a = Oh(e);
  for (t.forEach(function(f) {
    if (!a.has(f[0]) || !a.has(f[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    i[s] || c(e[s], s, /* @__PURE__ */ new Set());
  return n;
  function c(f, l, d) {
    if (d.has(f)) {
      var m;
      try {
        m = ", node was:" + JSON.stringify(f);
      } catch {
        m = "";
      }
      throw new Error("Cyclic dependency" + m);
    }
    if (!a.has(f))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(f));
    if (!i[l]) {
      i[l] = !0;
      var w = o.get(f) || /* @__PURE__ */ new Set();
      if (w = Array.from(w), l = w.length) {
        d.add(f);
        do {
          var g = w[--l];
          c(g, a.get(g), d);
        } while (l);
        d.delete(f);
      }
      n[--r] = f;
    }
  }
}
function Sh(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t.add(i[0]), t.add(i[1]);
  }
  return Array.from(t);
}
function _h(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
  }
  return t;
}
function Oh(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var Ch = ls.exports;
const Th = /* @__PURE__ */ Ji(Ch), xh = Object.prototype.toString, Rh = Error.prototype.toString, Ah = RegExp.prototype.toString, Dh = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", kh = /^Symbol\((.*)\)(.*)$/;
function Ph(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Ho(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return Ph(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return Dh.call(e).replace(kh, "Symbol($1)");
  const n = xh.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Rh.call(e) + "]" : n === "RegExp" ? Ah.call(e) : null;
}
function Ot(e, t) {
  let r = Ho(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, i) {
    let s = Ho(this[n], t);
    return s !== null ? s : i;
  }, 2);
}
function Xu(e) {
  return e == null ? [] : [].concat(e);
}
let Zu, ec, tc, Nh = /\$\{\s*(\w+)\s*\}/g;
Zu = Symbol.toStringTag;
class Ko {
  constructor(t, r, n, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Zu] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = i, this.errors = [], this.inner = [], Xu(t).forEach((s) => {
      if (Ie.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
ec = Symbol.hasInstance;
tc = Symbol.toStringTag;
class Ie extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Object.assign({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(Nh, (i, s) => Ot(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, i, s) {
    const o = new Ko(t, r, n, i);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[tc] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Ie);
  }
  static [ec](t) {
    return Ko[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let rt = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: r,
    originalValue: n
  }) => {
    const i = n != null && n !== r ? ` (cast from the value \`${Ot(n, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Ot(r, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${Ot(r, !0)}\`` + i;
  }
}, Fe = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, $h = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, zi = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Wi = {
  isValue: "${path} field must be ${value}"
}, Hi = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Fh = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Ih = {
  notType: (e) => {
    const {
      path: t,
      value: r,
      spec: n
    } = e, i = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < i) return `${t} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${Ot(r, !0)}\``;
      if (r.length > i) return `${t} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${Ot(r, !0)}\``;
    }
    return Ie.formatError(rt.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: rt,
  string: Fe,
  number: $h,
  date: zi,
  object: Hi,
  array: Fh,
  boolean: Wi,
  tuple: Ih
});
const fs = (e) => e && e.__isYupSchema__;
class dn {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: i,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...a) => a.every((c) => c === n);
    return new dn(t, (a, c) => {
      var f;
      let l = o(...a) ? i : s;
      return (f = l == null ? void 0 : l(c)) != null ? f : c;
    });
  }
  constructor(t, r) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = r;
  }
  resolve(t, r) {
    let n = this.refs.map((s) => (
      // TODO: ? operator here?
      s.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)
    )), i = this.fn(n, t, r);
    if (i === void 0 || // @ts-ignore this can be base
    i === t)
      return t;
    if (!fs(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(r);
  }
}
const Jr = {
  context: "$",
  value: "."
};
class Lt {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Jr.context, this.isValue = this.key[0] === Jr.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Jr.context : this.isValue ? Jr.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && It.getter(this.path, !0), this.map = r.map;
  }
  getValue(t, r, n) {
    let i = this.isContext ? n : this.isValue ? t : r;
    return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, r) {
    return this.getValue(t, r == null ? void 0 : r.parent, r == null ? void 0 : r.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
Lt.prototype.__isYupRef = !0;
const lt = (e) => e == null;
function Ht(e) {
  function t({
    value: r,
    path: n = "",
    options: i,
    originalValue: s,
    schema: o
  }, a, c) {
    const {
      name: f,
      test: l,
      params: d,
      message: m,
      skipAbsent: w
    } = e;
    let {
      parent: g,
      context: v,
      abortEarly: b = o.spec.abortEarly,
      disableStackTrace: R = o.spec.disableStackTrace
    } = i;
    function k(V) {
      return Lt.isRef(V) ? V.getValue(r, g, v) : V;
    }
    function S(V = {}) {
      const Z = Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: V.path || n,
        spec: o.spec,
        disableStackTrace: V.disableStackTrace || R
      }, d, V.params);
      for (const he of Object.keys(Z)) Z[he] = k(Z[he]);
      const we = new Ie(Ie.formatError(V.message || m, Z), r, Z.path, V.type || f, Z.disableStackTrace);
      return we.params = Z, we;
    }
    const A = b ? a : c;
    let E = {
      path: n,
      parent: g,
      type: f,
      from: i.from,
      createError: S,
      resolve: k,
      options: i,
      originalValue: s,
      schema: o
    };
    const $ = (V) => {
      Ie.isError(V) ? A(V) : V ? c(null) : A(S());
    }, G = (V) => {
      Ie.isError(V) ? A(V) : a(V);
    };
    if (w && lt(r))
      return $(!0);
    let p;
    try {
      var q;
      if (p = l.call(E, r, E), typeof ((q = p) == null ? void 0 : q.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(p).then($, G);
      }
    } catch (V) {
      G(V);
      return;
    }
    $(p);
  }
  return t.OPTIONS = e, t;
}
function Mh(e, t, r, n = r) {
  let i, s, o;
  return t ? (It.forEach(t, (a, c, f) => {
    let l = c ? a.slice(1, a.length - 1) : a;
    e = e.resolve({
      context: n,
      parent: i,
      value: r
    });
    let d = e.type === "tuple", m = f ? parseInt(l, 10) : 0;
    if (e.innerType || d) {
      if (d && !f) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && m >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);
      i = r, r = r && r[m], e = d ? e.spec.types[m] : e.innerType;
    }
    if (!f) {
      if (!e.fields || !e.fields[l]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
      i = r, r = r && r[l], e = e.fields[l];
    }
    s = l, o = c ? "[" + a + "]" : "." + a;
  }), {
    schema: e,
    parent: i,
    parentPath: s
  }) : {
    parent: i,
    parentPath: t,
    schema: e
  };
}
class pn extends Set {
  describe() {
    const t = [];
    for (const r of this.values())
      t.push(Lt.isRef(r) ? r.describe() : r);
    return t;
  }
  resolveAll(t) {
    let r = [];
    for (const n of this.values())
      r.push(t(n));
    return r;
  }
  clone() {
    return new pn(this.values());
  }
  merge(t, r) {
    const n = this.clone();
    return t.forEach((i) => n.add(i)), r.forEach((i) => n.delete(i)), n;
  }
}
function Xt(e, t = /* @__PURE__ */ new Map()) {
  if (fs(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date)
    r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp)
    r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let n = 0; n < e.length; n++) r[n] = Xt(e[n], t);
  } else if (e instanceof Map) {
    r = /* @__PURE__ */ new Map(), t.set(e, r);
    for (const [n, i] of e.entries()) r.set(n, Xt(i, t));
  } else if (e instanceof Set) {
    r = /* @__PURE__ */ new Set(), t.set(e, r);
    for (const n of e) r.add(Xt(n, t));
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [n, i] of Object.entries(e)) r[n] = Xt(i, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return r;
}
class Ye {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new pn(), this._blacklist = new pn(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(rt.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t == null ? void 0 : t.spec), this.withMutation((r) => {
      r.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Xt(Object.assign({}, this.spec, t)), r;
  }
  label(t) {
    let r = this.clone();
    return r.spec.label = t, r;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]), r;
  }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let n = t(this);
    return this._mutate = r, n;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let r = this, n = t.clone();
    const i = Object.assign({}, r.spec, n.spec);
    return n.spec = i, n.internalTests = Object.assign({}, r.internalTests, n.internalTests), n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((s) => {
      t.tests.forEach((o) => {
        s.test(o.OPTIONS);
      });
    }), n.transforms = [...r.transforms, ...n.transforms], n;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let n = r.conditions;
      r = r.clone(), r.conditions = [], r = n.reduce((i, s) => s.resolve(i, t), r), r = r.resolve(t);
    }
    return r;
  }
  resolveOptions(t) {
    var r, n, i, s;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (r = t.strict) != null ? r : this.spec.strict,
      abortEarly: (n = t.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (i = t.recursive) != null ? i : this.spec.recursive,
      disableStackTrace: (s = t.disableStackTrace) != null ? s : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, r = {}) {
    let n = this.resolve(Object.assign({
      value: t
    }, r)), i = r.assert === "ignore-optionality", s = n._cast(t, r);
    if (r.assert !== !1 && !n.isType(s)) {
      if (i && lt(s))
        return s;
      let o = Ot(t), a = Ot(s);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
` + (a !== o ? `result of cast: ${a}` : ""));
    }
    return s;
  }
  _cast(t, r) {
    let n = t === void 0 ? t : this.transforms.reduce((i, s) => s.call(this, i, t, this), t);
    return n === void 0 && (n = this.getDefault(r)), n;
  }
  _validate(t, r = {}, n, i) {
    let {
      path: s,
      originalValue: o = t,
      strict: a = this.spec.strict
    } = r, c = t;
    a || (c = this._cast(c, Object.assign({
      assert: !1
    }, r)));
    let f = [];
    for (let l of Object.values(this.internalTests))
      l && f.push(l);
    this.runTests({
      path: s,
      value: c,
      originalValue: o,
      options: r,
      tests: f
    }, n, (l) => {
      if (l.length)
        return i(l, c);
      this.runTests({
        path: s,
        value: c,
        originalValue: o,
        options: r,
        tests: this.tests
      }, n, i);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, r, n) {
    let i = !1, {
      tests: s,
      value: o,
      originalValue: a,
      path: c,
      options: f
    } = t, l = (v) => {
      i || (i = !0, r(v, o));
    }, d = (v) => {
      i || (i = !0, n(v, o));
    }, m = s.length, w = [];
    if (!m) return d([]);
    let g = {
      value: o,
      originalValue: a,
      path: c,
      options: f,
      schema: this
    };
    for (let v = 0; v < s.length; v++) {
      const b = s[v];
      b(g, l, function(k) {
        k && (Array.isArray(k) ? w.push(...k) : w.push(k)), --m <= 0 && d(w);
      });
    }
  }
  asNestedTest({
    key: t,
    index: r,
    parent: n,
    parentPath: i,
    originalParent: s,
    options: o
  }) {
    const a = t ?? r;
    if (a == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const c = typeof a == "number";
    let f = n[a];
    const l = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: f,
      originalValue: s[a],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [c ? "index" : "key"]: a,
      path: c || a.includes(".") ? `${i || ""}[${c ? a : `"${a}"`}]` : (i ? `${i}.` : "") + t
    });
    return (d, m, w) => this.resolve(l)._validate(f, l, m, w);
  }
  validate(t, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return new Promise((o, a) => i._validate(t, r, (c, f) => {
      Ie.isError(c) && (c.value = f), a(c);
    }, (c, f) => {
      c.length ? a(new Ie(c, f, void 0, void 0, s)) : o(f);
    }));
  }
  validateSync(t, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: t
    })), s, o = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return i._validate(t, Object.assign({}, r, {
      sync: !0
    }), (a, c) => {
      throw Ie.isError(a) && (a.value = c), a;
    }, (a, c) => {
      if (a.length) throw new Ie(a, t, void 0, void 0, o);
      s = c;
    }), s;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (Ie.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (Ie.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : Xt(r);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    });
  }
  nullability(t, r) {
    const n = this.clone({
      nullable: t
    });
    return n.internalTests.nullable = Ht({
      message: r,
      name: "nullable",
      test(i) {
        return i === null ? this.schema.spec.nullable : !0;
      }
    }), n;
  }
  optionality(t, r) {
    const n = this.clone({
      optional: t
    });
    return n.internalTests.optionality = Ht({
      message: r,
      name: "optionality",
      test(i) {
        return i === void 0 ? this.schema.spec.optional : !0;
      }
    }), n;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = rt.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = rt.notNull) {
    return this.nullability(!1, t);
  }
  required(t = rt.required) {
    return this.clone().withMutation((r) => r.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let r = this.clone();
    return r.transforms.push(t), r;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let r;
    if (t.length === 1 ? typeof t[0] == "function" ? r = {
      test: t[0]
    } : r = t[0] : t.length === 2 ? r = {
      name: t[0],
      test: t[1]
    } : r = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, r.message === void 0 && (r.message = rt.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), i = Ht(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (s || o.OPTIONS.test === i.OPTIONS.test))), n.tests.push(i), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), i = Xu(t).map((s) => new Lt(s));
    return i.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new dn(i, r) : dn.fromOptions(i, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r.internalTests.typeError = Ht({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(n) {
        return this.schema._typeCheck(n) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), r;
  }
  oneOf(t, r = rt.oneOf) {
    let n = this.clone();
    return t.forEach((i) => {
      n._whitelist.add(i), n._blacklist.delete(i);
    }), n.internalTests.whiteList = Ht({
      message: r,
      name: "oneOf",
      skipAbsent: !0,
      test(i) {
        let s = this.schema._whitelist, o = s.resolveAll(this.resolve);
        return o.includes(i) ? !0 : this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        });
      }
    }), n;
  }
  notOneOf(t, r = rt.notOneOf) {
    let n = this.clone();
    return t.forEach((i) => {
      n._blacklist.add(i), n._whitelist.delete(i);
    }), n.internalTests.blacklist = Ht({
      message: r,
      name: "notOneOf",
      test(i) {
        let s = this.schema._blacklist, o = s.resolveAll(this.resolve);
        return o.includes(i) ? this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), n;
  }
  strip(t = !0) {
    let r = this.clone();
    return r.spec.strip = t, r;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), {
      label: n,
      meta: i,
      optional: s,
      nullable: o
    } = r.spec;
    return {
      meta: i,
      label: n,
      optional: s,
      nullable: o,
      default: r.getDefault(t),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.map((c) => ({
        name: c.OPTIONS.name,
        params: c.OPTIONS.params
      })).filter((c, f, l) => l.findIndex((d) => d.name === c.name) === f)
    };
  }
}
Ye.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) Ye.prototype[`${e}At`] = function(t, r, n = {}) {
  const {
    parent: i,
    parentPath: s,
    schema: o
  } = Mh(this, t, r, n.context);
  return o[e](i && i[s], Object.assign({}, n, {
    parent: i,
    path: t
  }));
};
for (const e of ["equals", "is"]) Ye.prototype[e] = Ye.prototype.oneOf;
for (const e of ["not", "nope"]) Ye.prototype[e] = Ye.prototype.notOneOf;
const jh = () => !0;
function rc(e) {
  return new nc(e);
}
class nc extends Ye {
  constructor(t) {
    super(typeof t == "function" ? {
      type: "mixed",
      check: t
    } : Object.assign({
      type: "mixed",
      check: jh
    }, t));
  }
}
rc.prototype = nc.prototype;
function ic() {
  return new sc();
}
class sc extends Ye {
  constructor() {
    super({
      type: "boolean",
      check(t) {
        return t instanceof Boolean && (t = t.valueOf()), typeof t == "boolean";
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => {
        if (n.spec.coerce && !n.isType(t)) {
          if (/^(true|1)$/i.test(String(t))) return !0;
          if (/^(false|0)$/i.test(String(t))) return !1;
        }
        return t;
      });
    });
  }
  isTrue(t = Wi.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(r) {
        return lt(r) || r === !0;
      }
    });
  }
  isFalse(t = Wi.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(r) {
        return lt(r) || r === !1;
      }
    });
  }
  default(t) {
    return super.default(t);
  }
  defined(t) {
    return super.defined(t);
  }
  optional() {
    return super.optional();
  }
  required(t) {
    return super.required(t);
  }
  notRequired() {
    return super.notRequired();
  }
  nullable() {
    return super.nullable();
  }
  nonNullable(t) {
    return super.nonNullable(t);
  }
  strip(t) {
    return super.strip(t);
  }
}
ic.prototype = sc.prototype;
const qh = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Vh(e) {
  const t = Ki(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function Ki(e) {
  var t, r;
  const n = qh.exec(e);
  return n ? {
    year: at(n[1]),
    month: at(n[2], 1) - 1,
    day: at(n[3], 1),
    hour: at(n[4]),
    minute: at(n[5]),
    second: at(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      at(n[7].substring(0, 3))
    ) : 0,
    precision: (t = (r = n[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: at(n[10]),
    minuteOffset: at(n[11])
  } : null;
}
function at(e, t = 0) {
  return Number(e) || t;
}
let Lh = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Uh = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Bh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, zh = "^\\d{4}-\\d{2}-\\d{2}", Wh = "\\d{2}:\\d{2}:\\d{2}", Hh = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Kh = new RegExp(`${zh}T${Wh}(\\.\\d+)?${Hh}$`), Gh = (e) => lt(e) || e === e.trim(), Yh = {}.toString();
function L() {
  return new oc();
}
class oc extends Ye {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => {
        if (!n.spec.coerce || n.isType(t) || Array.isArray(t)) return t;
        const i = t != null && t.toString ? t.toString() : t;
        return i === Yh ? t : i;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((r) => r.test({
      message: t || rt.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t));
  }
  length(t, r = Fe.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(t);
      }
    });
  }
  min(t, r = Fe.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = Fe.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(t);
      }
    });
  }
  matches(t, r) {
    let n = !1, i, s;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: i,
      name: s
    } = r : i = r), this.test({
      name: s || "matches",
      message: i || Fe.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(t) !== -1
    });
  }
  email(t = Fe.email) {
    return this.matches(Lh, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = Fe.url) {
    return this.matches(Uh, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = Fe.uuid) {
    return this.matches(Bh, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let r = "", n, i;
    return t && (typeof t == "object" ? {
      message: r = "",
      allowOffset: n = !1,
      precision: i = void 0
    } = t : r = t), this.matches(Kh, {
      name: "datetime",
      message: r || Fe.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || Fe.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || n) return !0;
        const o = Ki(s);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || Fe.datetime_precision,
      params: {
        precision: i
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || i == null) return !0;
        const o = Ki(s);
        return o ? o.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = Fe.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: Gh
    });
  }
  lowercase(t = Fe.lowercase) {
    return this.transform((r) => lt(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => lt(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = Fe.uppercase) {
    return this.transform((r) => lt(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => lt(r) || r === r.toUpperCase()
    });
  }
}
L.prototype = oc.prototype;
let Qh = /* @__PURE__ */ new Date(""), Jh = (e) => Object.prototype.toString.call(e) === "[object Date]";
class An extends Ye {
  constructor() {
    super({
      type: "date",
      check(t) {
        return Jh(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => !n.spec.coerce || n.isType(t) || t === null ? t : (t = Vh(t), isNaN(t) ? An.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, r) {
    let n;
    if (Lt.isRef(t))
      n = t;
    else {
      let i = this.cast(t);
      if (!this._typeCheck(i)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = i;
    }
    return n;
  }
  min(t, r = zi.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(i) {
        return i >= this.resolve(n);
      }
    });
  }
  max(t, r = zi.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(i) {
        return i <= this.resolve(n);
      }
    });
  }
}
An.INVALID_DATE = Qh;
An.prototype;
function Xh(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), i = new Set(t.map(([o, a]) => `${o}-${a}`));
  function s(o, a) {
    let c = It.split(o)[0];
    n.add(c), i.has(`${a}-${c}`) || r.push([a, c]);
  }
  for (const o of Object.keys(e)) {
    let a = e[o];
    n.add(o), Lt.isRef(a) && a.isSibling ? s(a.path, o) : fs(a) && "deps" in a && a.deps.forEach((c) => s(c, o));
  }
  return Th.array(Array.from(n), r).reverse();
}
function Go(e, t) {
  let r = 1 / 0;
  return e.some((n, i) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = i, !0;
  }), r;
}
function ac(e) {
  return (t, r) => Go(e, t) - Go(e, r);
}
const Zh = (e, t, r) => {
  if (typeof e != "string")
    return e;
  let n = e;
  try {
    n = JSON.parse(e);
  } catch {
  }
  return r.isType(n) ? n : e;
};
function nn(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, n] of Object.entries(e.fields))
      t[r] = nn(n);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = nn(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(nn)
  }) : "optional" in e ? e.optional() : e;
}
const em = (e, t) => {
  const r = [...It.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let n = r.pop(), i = It.getter(It.join(r), !0)(e);
  return !!(i && n in i);
};
let Yo = (e) => Object.prototype.toString.call(e) === "[object Object]";
function tm(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const rm = ac([]);
function Qe(e) {
  return new uc(e);
}
class uc extends Ye {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return Yo(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = rm, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, r = {}) {
    var n;
    let i = super._cast(t, r);
    if (i === void 0) return this.getDefault(r);
    if (!this._typeCheck(i)) return i;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, a = [].concat(this._nodes, Object.keys(i).filter((d) => !this._nodes.includes(d))), c = {}, f = Object.assign({}, r, {
      parent: c,
      __validating: r.__validating || !1
    }), l = !1;
    for (const d of a) {
      let m = s[d], w = d in i;
      if (m) {
        let g, v = i[d];
        f.path = (r.path ? `${r.path}.` : "") + d, m = m.resolve({
          value: v,
          context: r.context,
          parent: c
        });
        let b = m instanceof Ye ? m.spec : void 0, R = b == null ? void 0 : b.strict;
        if (b != null && b.strip) {
          l = l || d in i;
          continue;
        }
        g = !r.__validating || !R ? (
          // TODO: use _cast, this is double resolving
          m.cast(i[d], f)
        ) : i[d], g !== void 0 && (c[d] = g);
      } else w && !o && (c[d] = i[d]);
      (w !== d in c || c[d] !== i[d]) && (l = !0);
    }
    return l ? c : i;
  }
  _validate(t, r = {}, n, i) {
    let {
      from: s = [],
      originalValue: o = t,
      recursive: a = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: o
    }, ...s], r.__validating = !0, r.originalValue = o, super._validate(t, r, n, (c, f) => {
      if (!a || !Yo(f)) {
        i(c, f);
        return;
      }
      o = o || f;
      let l = [];
      for (let d of this._nodes) {
        let m = this.fields[d];
        !m || Lt.isRef(m) || l.push(m.asNestedTest({
          options: r,
          key: d,
          parent: f,
          parentPath: r.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: l,
        value: f,
        originalValue: o,
        options: r
      }, n, (d) => {
        i(d.sort(this._sortErrors).concat(c), f);
      });
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = Object.assign({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [i, s] of Object.entries(this.fields)) {
      const o = n[i];
      n[i] = o === void 0 ? s : o;
    }
    return r.withMutation((i) => (
      // XXX: excludes here is wrong
      i.setFields(n, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let r = {};
    return this._nodes.forEach((n) => {
      var i;
      const s = this.fields[n];
      let o = t;
      (i = o) != null && i.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[n]
      })), r[n] = s && "getDefault" in s ? s.getDefault(o) : void 0;
    }), r;
  }
  setFields(t, r) {
    let n = this.clone();
    return n.fields = t, n._nodes = Xh(t, r), n._sortErrors = ac(Object.keys(t)), r && (n._excludedEdges = r), n;
  }
  shape(t, r = []) {
    return this.clone().withMutation((n) => {
      let i = n._excludedEdges;
      return r.length && (Array.isArray(r[0]) || (r = [r]), i = [...n._excludedEdges, ...r]), n.setFields(Object.assign(n.fields, t), i);
    });
  }
  partial() {
    const t = {};
    for (const [r, n] of Object.entries(this.fields))
      t[r] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
    return this.setFields(t);
  }
  deepPartial() {
    return nn(this);
  }
  pick(t) {
    const r = {};
    for (const n of t)
      this.fields[n] && (r[n] = this.fields[n]);
    return this.setFields(r, this._excludedEdges.filter(([n, i]) => t.includes(n) && t.includes(i)));
  }
  omit(t) {
    const r = [];
    for (const n of Object.keys(this.fields))
      t.includes(n) || r.push(n);
    return this.pick(r);
  }
  from(t, r, n) {
    let i = It.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return em(s, t) && (o = Object.assign({}, s), n || delete o[t], o[r] = i(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Zh);
  }
  noUnknown(t = !0, r = Hi.noUnknown) {
    typeof t != "boolean" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(i) {
        if (i == null) return !0;
        const s = tm(this.schema, i);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Hi.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => {
      if (!r) return r;
      const n = {};
      for (const i of Object.keys(r)) n[t(i)] = r[i];
      return n;
    });
  }
  camelCase() {
    return this.transformKeys(di.camelCase);
  }
  snakeCase() {
    return this.transformKeys(di.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => di.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), n = super.describe(t);
    n.fields = {};
    for (const [s, o] of Object.entries(r.fields)) {
      var i;
      let a = t;
      (i = a) != null && i.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[s]
      })), n.fields[s] = o.describe(a);
    }
    return n;
  }
}
Qe.prototype = uc.prototype;
Qe().shape({
  firstName: L().required("First name is required").min(3, "First name should be more than 3 characters"),
  middleName: L().required("Middle name is required").min(3, "Middle name should be more than 3 characters"),
  lastName: L().required("Last name is required").min(3, "Last name should be more than 3 characters"),
  designation: L().required("Designation is required").min(5, "Incorrect Designation"),
  username: L().required("Username is required").min(5, "username should be more than 5 characters").max(12, "username should be less than 12 characters"),
  phoneNumber: L().required("Mobile number is required").length(10, "Mobile number must be 10 digits").matches(/^[0-9]+$/, "Mobile number must contain only numbers"),
  cugNo: L().required("CUG number is required").length(10, "CUG number must be 10 digits").matches(/^[0-9]+$/, "CUG number must contain only numbers"),
  email: L().required("Email is required").email("Invalid email format"),
  companyEmail: L().required("Company email is required").email("Invalid email format"),
  address: Qe().shape({
    street: L().required("Street address is required"),
    city: L().required("City is required"),
    state: L().required("State is required"),
    country: L().required("Country is required"),
    postalCode: L().required("Postal Code is required")
  }),
  joiningDate: L().required("Joining date is required"),
  relocationDate: L().optional(),
  relocationPlace: L().optional(),
  recommendedBy: L().optional(),
  role: L().required("Role is required"),
  reportingAuthorityFunctional: L().optional(),
  reportingAuthorityAdministrative: L().optional()
});
Qe().shape({
  name: L().required("Name is required").min(3, "Product name should be more than 3 characters"),
  image: rc().nullable().required("Image is required").test("fileFormat", "Invalid image format (only jpg, jpeg, png allowed)", (e) => {
    if (!e) return !0;
    const t = e;
    return ["image/jpeg", "image/png", "image/jpg"].includes(t.type);
  }).test("fileSize", "Image is too large (max 1MB)", (e) => {
    if (!e) return !0;
    const t = e, r = 1 * 1024 * 1024;
    return t.size <= r;
  }),
  returnable: ic().required("Returnable is required"),
  description: L().required("Description is required"),
  product_code: L().required("Product code is required"),
  category: L().required("Category is required"),
  subcategory: L().required("Subcategory is required"),
  classification: L().required("Classification is required"),
  uom: L().required("UOM is required")
});
Qe().shape({
  name: L().required("Office name is required"),
  address: Qe().shape({
    address1: L().required("Address 1 is required"),
    address2: L().optional(),
    location: L().required("Location is required"),
    city: L().required("City is required"),
    state: L().required("State is required"),
    pincode: L().required("Pincode is required")
  }),
  contactNumber: L().required("Contact number is required"),
  officeEmail: L().required("Office email is required").email("Invalid email format"),
  notes: L().optional()
});
Qe().shape({
  organisationName: L().required("Organisation Name is required"),
  // customerTypes: customerTypesSchema,
  // customerCategory: customerCategorySchema,
  organisationType: L().required("Organisation Type is required"),
  otherType: L(),
  // customerAddress: addressSchema,
  primaryContactNo: L().required("Primary Contact No. is required").matches(/^\d{10}$/, "Contact number must be 10 digits"),
  secondaryContactNo: L().matches(/^\d{10}$/, "Contact number must be 10 digits"),
  emailPrimary: L().email("Invalid email format").required("Primary Email is required"),
  emailSecondary: L().email("Invalid email format")
  //     keyMobileNumbers: keyMobileNumbersSchema,
  //     billingDetails: billingDetailsSchema,
  //     deliveryDetails: deliveryDetailsSchema,
  //     statutoryDetails: statutoryDetailsSchema,
  //     bankDetails: bankDetailsSchema,
  //     productSpecification: Yup.array().of(productSpecificationSchema),
  //     paymentTerms: paymentTermsSchema,
  //     officeUseOnly: officeUseOnlySchema,
});
const cc = Qe().shape({
  address1: L().required("Address Line 1 is required"),
  address2: L(),
  location: L().required("Location is required"),
  city: L().required("City is required"),
  state: L().required("State is required"),
  pincode: L().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
Qe().shape({
  companyName: L().required("Party Name is required"),
  category: L().required("Please select category of vendor"),
  subcategory: L().required("Please select subcategory of vendor"),
  inFandVBusinessSince: L(),
  dateOfIncorporation: L(),
  officeAddress: cc,
  officeContactNo: L().matches(/^\d{10}$/, "Contact number must be 10 digits")
  // website: Yup.string().notRequired(),
  // email: Yup.string().email('Invalid email format').required('Email is required'),
  // mainProductsToBeSupplied: Yup.string().required('Main Products to be Supplied are required'),
  // dispatchCenter: Yup.string().required('Please add location of dispatch center'),
  // warehouseLocations: Yup.string().required('Please add location of warehouse location'),
  // packingCenterLocation: Yup.string().required('Please add packing of packing center'),
  // ifGstnCopy: Yup.boolean().required('Please select Yes or No'),
  // ifPanCardCopy: Yup.boolean().required('Please select Yes or No'),
  // ifMsmeCopy: Yup.boolean().required('Please select Yes or No'),
  // proposedPaymentTerms: Yup.string().required('Please select a proposed payment term'),
  // creditTerms: Yup.string().required('Please select a credit term'),
  // contactPersonFirstName: Yup.string().required('Contact Person First Name is required'),
  // contactPersonMiddleName: Yup.string(),
  // contactPersonLastName: Yup.string().required('Contact Person Last Name is required'),
  // primaryContactNumber: Yup.string().required('Primary Contact Number is required').matches(/^\d{10}$/, 'Contact number must be 10 digits'),
  // alternateContactNumber: Yup.string().matches(/^\d{10}$/, 'Contact number must be 10 digits'),
  // // PANNumber: Yup.string().required('PAN Number is required').matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN number'),
  // tradeLicenseNumber: Yup.string(),
  // proposedLicenseTerms: Yup.string(),
  // anyOtherDetailsRegardingTeamAndInfrastructure: Yup.string(),
  // submittedBy: Yup.string(),
  // registeredBy: Yup.string(),
  // registeredDate: Yup.string(),
  // // gstn: Yup.string().required('GSTN is required').matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/, 'Invalid GSTN format'),
  // description: Yup.string(),
  // vendorCode: Yup.string(),
  // vendorGrade: Yup.string().required('Vendor Grade is required').oneOf(['A', 'B', 'C'], 'Vendor Grade must be A, B, or C'),
  // forWhichProduct: Yup.string(),
  // address: addressSchema, // Referencing the address schema
});
Qe().shape({
  farmerfName: L().required("First Name is required"),
  farmermName: L().notRequired(),
  farmerlName: L().required("Last Name is required"),
  residensialAddress: cc,
  primaryMobileNo: L().required("Contact No is required")
});
const Rr = {
  black: "#000",
  white: "#fff"
}, Kt = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Gt = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Yt = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Qt = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Jt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, yr = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, nm = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Ct(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Gi = { exports: {} }, Xr = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qo;
function im() {
  if (Qo) return se;
  Qo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function S(E) {
    if (typeof E == "object" && E !== null) {
      var $ = E.$$typeof;
      switch ($) {
        case t:
          switch (E = E.type, E) {
            case c:
            case f:
            case n:
            case s:
            case i:
            case d:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case a:
                case l:
                case g:
                case w:
                case o:
                  return E;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  function A(E) {
    return S(E) === f;
  }
  return se.AsyncMode = c, se.ConcurrentMode = f, se.ContextConsumer = a, se.ContextProvider = o, se.Element = t, se.ForwardRef = l, se.Fragment = n, se.Lazy = g, se.Memo = w, se.Portal = r, se.Profiler = s, se.StrictMode = i, se.Suspense = d, se.isAsyncMode = function(E) {
    return A(E) || S(E) === c;
  }, se.isConcurrentMode = A, se.isContextConsumer = function(E) {
    return S(E) === a;
  }, se.isContextProvider = function(E) {
    return S(E) === o;
  }, se.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, se.isForwardRef = function(E) {
    return S(E) === l;
  }, se.isFragment = function(E) {
    return S(E) === n;
  }, se.isLazy = function(E) {
    return S(E) === g;
  }, se.isMemo = function(E) {
    return S(E) === w;
  }, se.isPortal = function(E) {
    return S(E) === r;
  }, se.isProfiler = function(E) {
    return S(E) === s;
  }, se.isStrictMode = function(E) {
    return S(E) === i;
  }, se.isSuspense = function(E) {
    return S(E) === d;
  }, se.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === f || E === s || E === i || E === d || E === m || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === w || E.$$typeof === o || E.$$typeof === a || E.$$typeof === l || E.$$typeof === b || E.$$typeof === R || E.$$typeof === k || E.$$typeof === v);
  }, se.typeOf = S, se;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jo;
function sm() {
  return Jo || (Jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === f || M === s || M === i || M === d || M === m || typeof M == "object" && M !== null && (M.$$typeof === g || M.$$typeof === w || M.$$typeof === o || M.$$typeof === a || M.$$typeof === l || M.$$typeof === b || M.$$typeof === R || M.$$typeof === k || M.$$typeof === v);
    }
    function A(M) {
      if (typeof M == "object" && M !== null) {
        var ke = M.$$typeof;
        switch (ke) {
          case t:
            var Ut = M.type;
            switch (Ut) {
              case c:
              case f:
              case n:
              case s:
              case i:
              case d:
                return Ut;
              default:
                var Ir = Ut && Ut.$$typeof;
                switch (Ir) {
                  case a:
                  case l:
                  case g:
                  case w:
                  case o:
                    return Ir;
                  default:
                    return ke;
                }
            }
          case r:
            return ke;
        }
      }
    }
    var E = c, $ = f, G = a, j = o, p = t, q = l, V = n, Z = g, we = w, he = r, ge = s, me = i, H = d, He = !1;
    function pt(M) {
      return He || (He = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(M) || A(M) === c;
    }
    function P(M) {
      return A(M) === f;
    }
    function y(M) {
      return A(M) === a;
    }
    function x(M) {
      return A(M) === o;
    }
    function I(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function F(M) {
      return A(M) === l;
    }
    function U(M) {
      return A(M) === n;
    }
    function z(M) {
      return A(M) === g;
    }
    function W(M) {
      return A(M) === w;
    }
    function K(M) {
      return A(M) === r;
    }
    function Y(M) {
      return A(M) === s;
    }
    function J(M) {
      return A(M) === i;
    }
    function Re(M) {
      return A(M) === d;
    }
    oe.AsyncMode = E, oe.ConcurrentMode = $, oe.ContextConsumer = G, oe.ContextProvider = j, oe.Element = p, oe.ForwardRef = q, oe.Fragment = V, oe.Lazy = Z, oe.Memo = we, oe.Portal = he, oe.Profiler = ge, oe.StrictMode = me, oe.Suspense = H, oe.isAsyncMode = pt, oe.isConcurrentMode = P, oe.isContextConsumer = y, oe.isContextProvider = x, oe.isElement = I, oe.isForwardRef = F, oe.isFragment = U, oe.isLazy = z, oe.isMemo = W, oe.isPortal = K, oe.isProfiler = Y, oe.isStrictMode = J, oe.isSuspense = Re, oe.isValidElementType = S, oe.typeOf = A;
  }()), oe;
}
var Xo;
function lc() {
  return Xo || (Xo = 1, process.env.NODE_ENV === "production" ? Xr.exports = im() : Xr.exports = sm()), Xr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pi, Zo;
function om() {
  if (Zo) return pi;
  Zo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var o = {}, a = 0; a < 10; a++)
        o["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        f[l] = l;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pi = i() ? Object.assign : function(s, o) {
    for (var a, c = n(s), f, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var d in a)
        t.call(a, d) && (c[d] = a[d]);
      if (e) {
        f = e(a);
        for (var m = 0; m < f.length; m++)
          r.call(a, f[m]) && (c[f[m]] = a[f[m]]);
      }
    }
    return c;
  }, pi;
}
var hi, ea;
function ds() {
  if (ea) return hi;
  ea = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return hi = e, hi;
}
var mi, ta;
function fc() {
  return ta || (ta = 1, mi = Function.call.bind(Object.prototype.hasOwnProperty)), mi;
}
var yi, ra;
function am() {
  if (ra) return yi;
  ra = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ds(), r = {}, n = fc();
    e = function(s) {
      var o = "Warning: " + s;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(s, o, a, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in s)
        if (n(s, l)) {
          var d;
          try {
            if (typeof s[l] != "function") {
              var m = Error(
                (c || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            d = s[l](o, l, c, a, null, t);
          } catch (g) {
            d = g;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var w = f ? f() : "";
            e(
              "Failed " + a + " type: " + d.message + (w ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, yi = i, yi;
}
var gi, na;
function um() {
  if (na) return gi;
  na = 1;
  var e = lc(), t = om(), r = ds(), n = fc(), i = am(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return gi = function(a, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function d(P) {
      var y = P && (f && P[f] || P[l]);
      if (typeof y == "function")
        return y;
    }
    var m = "<<anonymous>>", w = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: k(),
      arrayOf: S,
      element: A(),
      elementType: E(),
      instanceOf: $,
      node: q(),
      objectOf: j,
      oneOf: G,
      oneOfType: p,
      shape: Z,
      exact: we
    };
    function g(P, y) {
      return P === y ? P !== 0 || 1 / P === 1 / y : P !== P && y !== y;
    }
    function v(P, y) {
      this.message = P, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function b(P) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, x = 0;
      function I(U, z, W, K, Y, J, Re) {
        if (K = K || m, J = J || W, Re !== r) {
          if (c) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ke = K + ":" + W;
            !y[ke] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[ke] = !0, x++);
          }
        }
        return z[W] == null ? U ? z[W] === null ? new v("The " + Y + " `" + J + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new v("The " + Y + " `" + J + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : P(z, W, K, Y, J);
      }
      var F = I.bind(null, !1);
      return F.isRequired = I.bind(null, !0), F;
    }
    function R(P) {
      function y(x, I, F, U, z, W) {
        var K = x[I], Y = me(K);
        if (Y !== P) {
          var J = H(K);
          return new v(
            "Invalid " + U + " `" + z + "` of type " + ("`" + J + "` supplied to `" + F + "`, expected ") + ("`" + P + "`."),
            { expectedType: P }
          );
        }
        return null;
      }
      return b(y);
    }
    function k() {
      return b(o);
    }
    function S(P) {
      function y(x, I, F, U, z) {
        if (typeof P != "function")
          return new v("Property `" + z + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var W = x[I];
        if (!Array.isArray(W)) {
          var K = me(W);
          return new v("Invalid " + U + " `" + z + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected an array."));
        }
        for (var Y = 0; Y < W.length; Y++) {
          var J = P(W, Y, F, U, z + "[" + Y + "]", r);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return b(y);
    }
    function A() {
      function P(y, x, I, F, U) {
        var z = y[x];
        if (!a(z)) {
          var W = me(z);
          return new v("Invalid " + F + " `" + U + "` of type " + ("`" + W + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(P);
    }
    function E() {
      function P(y, x, I, F, U) {
        var z = y[x];
        if (!e.isValidElementType(z)) {
          var W = me(z);
          return new v("Invalid " + F + " `" + U + "` of type " + ("`" + W + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(P);
    }
    function $(P) {
      function y(x, I, F, U, z) {
        if (!(x[I] instanceof P)) {
          var W = P.name || m, K = pt(x[I]);
          return new v("Invalid " + U + " `" + z + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return b(y);
    }
    function G(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), o;
      function y(x, I, F, U, z) {
        for (var W = x[I], K = 0; K < P.length; K++)
          if (g(W, P[K]))
            return null;
        var Y = JSON.stringify(P, function(Re, M) {
          var ke = H(M);
          return ke === "symbol" ? String(M) : M;
        });
        return new v("Invalid " + U + " `" + z + "` of value `" + String(W) + "` " + ("supplied to `" + F + "`, expected one of " + Y + "."));
      }
      return b(y);
    }
    function j(P) {
      function y(x, I, F, U, z) {
        if (typeof P != "function")
          return new v("Property `" + z + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var W = x[I], K = me(W);
        if (K !== "object")
          return new v("Invalid " + U + " `" + z + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected an object."));
        for (var Y in W)
          if (n(W, Y)) {
            var J = P(W, Y, F, U, z + "." + Y, r);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return b(y);
    }
    function p(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var y = 0; y < P.length; y++) {
        var x = P[y];
        if (typeof x != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + He(x) + " at index " + y + "."
          ), o;
      }
      function I(F, U, z, W, K) {
        for (var Y = [], J = 0; J < P.length; J++) {
          var Re = P[J], M = Re(F, U, z, W, K, r);
          if (M == null)
            return null;
          M.data && n(M.data, "expectedType") && Y.push(M.data.expectedType);
        }
        var ke = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new v("Invalid " + W + " `" + K + "` supplied to " + ("`" + z + "`" + ke + "."));
      }
      return b(I);
    }
    function q() {
      function P(y, x, I, F, U) {
        return he(y[x]) ? null : new v("Invalid " + F + " `" + U + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return b(P);
    }
    function V(P, y, x, I, F) {
      return new v(
        (P || "React class") + ": " + y + " type `" + x + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function Z(P) {
      function y(x, I, F, U, z) {
        var W = x[I], K = me(W);
        if (K !== "object")
          return new v("Invalid " + U + " `" + z + "` of type `" + K + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var Y in P) {
          var J = P[Y];
          if (typeof J != "function")
            return V(F, U, z, Y, H(J));
          var Re = J(W, Y, F, U, z + "." + Y, r);
          if (Re)
            return Re;
        }
        return null;
      }
      return b(y);
    }
    function we(P) {
      function y(x, I, F, U, z) {
        var W = x[I], K = me(W);
        if (K !== "object")
          return new v("Invalid " + U + " `" + z + "` of type `" + K + "` " + ("supplied to `" + F + "`, expected `object`."));
        var Y = t({}, x[I], P);
        for (var J in Y) {
          var Re = P[J];
          if (n(P, J) && typeof Re != "function")
            return V(F, U, z, J, H(Re));
          if (!Re)
            return new v(
              "Invalid " + U + " `" + z + "` key `" + J + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(x[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
            );
          var M = Re(W, J, F, U, z + "." + J, r);
          if (M)
            return M;
        }
        return null;
      }
      return b(y);
    }
    function he(P) {
      switch (typeof P) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !P;
        case "object":
          if (Array.isArray(P))
            return P.every(he);
          if (P === null || a(P))
            return !0;
          var y = d(P);
          if (y) {
            var x = y.call(P), I;
            if (y !== P.entries) {
              for (; !(I = x.next()).done; )
                if (!he(I.value))
                  return !1;
            } else
              for (; !(I = x.next()).done; ) {
                var F = I.value;
                if (F && !he(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ge(P, y) {
      return P === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function me(P) {
      var y = typeof P;
      return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : ge(y, P) ? "symbol" : y;
    }
    function H(P) {
      if (typeof P > "u" || P === null)
        return "" + P;
      var y = me(P);
      if (y === "object") {
        if (P instanceof Date)
          return "date";
        if (P instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function He(P) {
      var y = H(P);
      switch (y) {
        case "array":
        case "object":
          return "an " + y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + y;
        default:
          return y;
      }
    }
    function pt(P) {
      return !P.constructor || !P.constructor.name ? m : P.constructor.name;
    }
    return w.checkPropTypes = i, w.resetWarningCache = i.resetWarningCache, w.PropTypes = w, w;
  }, gi;
}
var bi, ia;
function cm() {
  if (ia) return bi;
  ia = 1;
  var e = ds();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, bi = function() {
    function n(o, a, c, f, l, d) {
      if (d !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, bi;
}
if (process.env.NODE_ENV !== "production") {
  var lm = lc(), fm = !0;
  Gi.exports = um()(lm.isElement, fm);
} else
  Gi.exports = cm()();
var dm = Gi.exports;
const gr = /* @__PURE__ */ Ji(dm);
function bt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function dc(e) {
  if (!bt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = dc(e[r]);
  }), t;
}
function Be(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return bt(e) && bt(t) && Object.keys(t).forEach((i) => {
    bt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && bt(e[i]) ? n[i] = Be(e[i], t[i], r) : r.clone ? n[i] = bt(t[i]) ? dc(t[i]) : t[i] : n[i] = t[i];
  }), n;
}
const pm = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function hm(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...i
  } = e, s = pm(t), o = Object.keys(s);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function c(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function f(m, w) {
    const g = o.indexOf(w);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(g !== -1 && typeof t[o[g]] == "number" ? t[o[g]] : w) - n / 100}${r})`;
  }
  function l(m) {
    return o.indexOf(m) + 1 < o.length ? f(m, o[o.indexOf(m) + 1]) : a(m);
  }
  function d(m) {
    const w = o.indexOf(m);
    return w === 0 ? a(o[1]) : w === o.length - 1 ? c(o[w]) : f(m, o[o.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: o,
    values: s,
    up: a,
    down: c,
    between: f,
    only: l,
    not: d,
    unit: r,
    ...i
  };
}
function mm(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, i) => {
    var o, a;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((o = n.match(s)) == null ? void 0 : o[1]) || 0) - +(((a = i.match(s)) == null ? void 0 : a[1]) || 0);
  });
  return r.length ? r.reduce((n, i) => {
    const s = t[i];
    return delete n[i], n[i] = s, n;
  }, {
    ...t
  }) : t;
}
function ym(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function gm(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ct(18, `(${t})`));
    return null;
  }
  const [, n, i] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(i).up(s);
}
function bm(e) {
  const t = (s, o) => s.replace("@media", o ? `@container ${o}` : "@container");
  function r(s, o) {
    s.up = (...a) => t(e.breakpoints.up(...a), o), s.down = (...a) => t(e.breakpoints.down(...a), o), s.between = (...a) => t(e.breakpoints.between(...a), o), s.only = (...a) => t(e.breakpoints.only(...a), o), s.not = (...a) => {
      const c = t(e.breakpoints.not(...a), o);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, i = (s) => (r(n, s), n);
  return r(i), {
    ...e,
    containerQueries: i
  };
}
const vm = {
  borderRadius: 4
}, xt = process.env.NODE_ENV !== "production" ? gr.oneOfType([gr.number, gr.string, gr.object, gr.array]) : {};
function Sr(e, t) {
  return t ? Be(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Dn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, sa = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Dn[e]}px)`
}, Em = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Dn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function dt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || sa;
    return t.reduce((o, a, c) => (o[s.up(s.keys[c])] = r(t[c]), o), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || sa;
    return Object.keys(t).reduce((o, a) => {
      if (ym(s.keys, a)) {
        const c = gm(n.containerQueries ? n : Em, a);
        c && (o[c] = r(t[a], a));
      } else if (Object.keys(s.values || Dn).includes(a)) {
        const c = s.up(a);
        o[c] = r(t[a], a);
      } else {
        const c = a;
        o[c] = t[c];
      }
      return o;
    }, {});
  }
  return r(t);
}
function wm(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, i) => {
    const s = e.up(i);
    return n[s] = {}, n;
  }, {})) || {};
}
function Sm(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function pc(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ct(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function kn(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function hn(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = kn(e, r) || n, t && (i = t(i, n, e)), i;
}
function Oe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: i
  } = e, s = (o) => {
    if (o[t] == null)
      return null;
    const a = o[t], c = o.theme, f = kn(c, n) || {};
    return dt(o, a, (d) => {
      let m = hn(f, i, d);
      return d === m && typeof d == "string" && (m = hn(f, i, `${t}${d === "default" ? "" : pc(d)}`, d)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: xt
  } : {}, s.filterProps = [t], s;
}
function _m(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Om = {
  m: "margin",
  p: "padding"
}, Cm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, oa = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Tm = _m((e) => {
  if (e.length > 2)
    if (oa[e])
      e = oa[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Om[t], i = Cm[r] || "";
  return Array.isArray(i) ? i.map((s) => n + s) : [n + i];
}), Pn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Nn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], xm = [...Pn, ...Nn];
function $r(e, t, r, n) {
  const i = kn(e, t, !0) ?? r;
  return typeof i == "number" || typeof i == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), typeof i == "string" ? `calc(${s} * ${i})` : i * s) : Array.isArray(i) ? (s) => {
    if (typeof s == "string")
      return s;
    const o = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(o) ? o > i.length - 1 && console.error([`MUI: The value provided (${o}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${o} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = i[o];
    return s >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ps(e) {
  return $r(e, "spacing", 8, "spacing");
}
function Fr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Rm(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = Fr(t, r), n), {});
}
function Am(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const i = Tm(r), s = Rm(i, n), o = e[r];
  return dt(e, o, s);
}
function hc(e, t) {
  const r = ps(e.theme);
  return Object.keys(e).map((n) => Am(e, t, n, r)).reduce(Sr, {});
}
function be(e) {
  return hc(e, Pn);
}
be.propTypes = process.env.NODE_ENV !== "production" ? Pn.reduce((e, t) => (e[t] = xt, e), {}) : {};
be.filterProps = Pn;
function ve(e) {
  return hc(e, Nn);
}
ve.propTypes = process.env.NODE_ENV !== "production" ? Nn.reduce((e, t) => (e[t] = xt, e), {}) : {};
ve.filterProps = Nn;
process.env.NODE_ENV !== "production" && xm.reduce((e, t) => (e[t] = xt, e), {});
function mc(e = 8, t = ps({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const o = t(s);
    return typeof o == "number" ? `${o}px` : o;
  }).join(" "));
  return r.mui = !0, r;
}
function $n(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((s) => {
    n[s] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, s) => t[s] ? Sr(i, t[s](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function Ge(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Je(e, t) {
  return Oe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Dm = Je("border", Ge), km = Je("borderTop", Ge), Pm = Je("borderRight", Ge), Nm = Je("borderBottom", Ge), $m = Je("borderLeft", Ge), Fm = Je("borderColor"), Im = Je("borderTopColor"), Mm = Je("borderRightColor"), jm = Je("borderBottomColor"), qm = Je("borderLeftColor"), Vm = Je("outline", Ge), Lm = Je("outlineColor"), Fn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = $r(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Fr(t, n)
    });
    return dt(e, e.borderRadius, r);
  }
  return null;
};
Fn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: xt
} : {};
Fn.filterProps = ["borderRadius"];
$n(Dm, km, Pm, Nm, $m, Fm, Im, Mm, jm, qm, Fn, Vm, Lm);
const In = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = $r(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Fr(t, n)
    });
    return dt(e, e.gap, r);
  }
  return null;
};
In.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: xt
} : {};
In.filterProps = ["gap"];
const Mn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = $r(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Fr(t, n)
    });
    return dt(e, e.columnGap, r);
  }
  return null;
};
Mn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: xt
} : {};
Mn.filterProps = ["columnGap"];
const jn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = $r(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Fr(t, n)
    });
    return dt(e, e.rowGap, r);
  }
  return null;
};
jn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: xt
} : {};
jn.filterProps = ["rowGap"];
const Um = Oe({
  prop: "gridColumn"
}), Bm = Oe({
  prop: "gridRow"
}), zm = Oe({
  prop: "gridAutoFlow"
}), Wm = Oe({
  prop: "gridAutoColumns"
}), Hm = Oe({
  prop: "gridAutoRows"
}), Km = Oe({
  prop: "gridTemplateColumns"
}), Gm = Oe({
  prop: "gridTemplateRows"
}), Ym = Oe({
  prop: "gridTemplateAreas"
}), Qm = Oe({
  prop: "gridArea"
});
$n(In, Mn, jn, Um, Bm, zm, Wm, Hm, Km, Gm, Ym, Qm);
function Zt(e, t) {
  return t === "grey" ? t : e;
}
const Jm = Oe({
  prop: "color",
  themeKey: "palette",
  transform: Zt
}), Xm = Oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Zt
}), Zm = Oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Zt
});
$n(Jm, Xm, Zm);
function Le(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ey = Oe({
  prop: "width",
  transform: Le
}), hs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var i, s, o, a, c;
      const n = ((o = (s = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : s.values) == null ? void 0 : o[r]) || Dn[r];
      return n ? ((c = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Le(r)
      };
    };
    return dt(e, e.maxWidth, t);
  }
  return null;
};
hs.filterProps = ["maxWidth"];
const ty = Oe({
  prop: "minWidth",
  transform: Le
}), ry = Oe({
  prop: "height",
  transform: Le
}), ny = Oe({
  prop: "maxHeight",
  transform: Le
}), iy = Oe({
  prop: "minHeight",
  transform: Le
});
Oe({
  prop: "size",
  cssProperty: "width",
  transform: Le
});
Oe({
  prop: "size",
  cssProperty: "height",
  transform: Le
});
const sy = Oe({
  prop: "boxSizing"
});
$n(ey, hs, ty, ry, ny, iy, sy);
const qn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ge
  },
  borderTop: {
    themeKey: "borders",
    transform: Ge
  },
  borderRight: {
    themeKey: "borders",
    transform: Ge
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ge
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ge
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ge
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Fn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Zt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Zt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Zt
  },
  // spacing
  p: {
    style: ve
  },
  pt: {
    style: ve
  },
  pr: {
    style: ve
  },
  pb: {
    style: ve
  },
  pl: {
    style: ve
  },
  px: {
    style: ve
  },
  py: {
    style: ve
  },
  padding: {
    style: ve
  },
  paddingTop: {
    style: ve
  },
  paddingRight: {
    style: ve
  },
  paddingBottom: {
    style: ve
  },
  paddingLeft: {
    style: ve
  },
  paddingX: {
    style: ve
  },
  paddingY: {
    style: ve
  },
  paddingInline: {
    style: ve
  },
  paddingInlineStart: {
    style: ve
  },
  paddingInlineEnd: {
    style: ve
  },
  paddingBlock: {
    style: ve
  },
  paddingBlockStart: {
    style: ve
  },
  paddingBlockEnd: {
    style: ve
  },
  m: {
    style: be
  },
  mt: {
    style: be
  },
  mr: {
    style: be
  },
  mb: {
    style: be
  },
  ml: {
    style: be
  },
  mx: {
    style: be
  },
  my: {
    style: be
  },
  margin: {
    style: be
  },
  marginTop: {
    style: be
  },
  marginRight: {
    style: be
  },
  marginBottom: {
    style: be
  },
  marginLeft: {
    style: be
  },
  marginX: {
    style: be
  },
  marginY: {
    style: be
  },
  marginInline: {
    style: be
  },
  marginInlineStart: {
    style: be
  },
  marginInlineEnd: {
    style: be
  },
  marginBlock: {
    style: be
  },
  marginBlockStart: {
    style: be
  },
  marginBlockEnd: {
    style: be
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: In
  },
  rowGap: {
    style: jn
  },
  columnGap: {
    style: Mn
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Le
  },
  maxWidth: {
    style: hs
  },
  minWidth: {
    transform: Le
  },
  height: {
    transform: Le
  },
  maxHeight: {
    transform: Le
  },
  minHeight: {
    transform: Le
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function oy(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function ay(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function uy() {
  function e(r, n, i, s) {
    const o = {
      [r]: n,
      theme: i
    }, a = s[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: f,
      transform: l,
      style: d
    } = a;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = kn(i, f) || {};
    return d ? d(o) : dt(o, n, (g) => {
      let v = hn(m, l, g);
      return g === v && typeof g == "string" && (v = hn(m, l, `${r}${g === "default" ? "" : pc(g)}`, g)), c === !1 ? v : {
        [c]: v
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: i = {}
    } = r || {};
    if (!n)
      return null;
    const s = i.unstable_sxConfig ?? qn;
    function o(a) {
      let c = a;
      if (typeof a == "function")
        c = a(i);
      else if (typeof a != "object")
        return a;
      if (!c)
        return null;
      const f = wm(i.breakpoints), l = Object.keys(f);
      let d = f;
      return Object.keys(c).forEach((m) => {
        const w = ay(c[m], i);
        if (w != null)
          if (typeof w == "object")
            if (s[m])
              d = Sr(d, e(m, w, i, s));
            else {
              const g = dt({
                theme: i
              }, w, (v) => ({
                [m]: v
              }));
              oy(g, w) ? d[m] = t({
                sx: w,
                theme: i
              }) : d = Sr(d, g);
            }
          else
            d = Sr(d, e(m, w, i, s));
      }), mm(i, Sm(l, d));
    }
    return Array.isArray(n) ? n.map(o) : o(n);
  }
  return t;
}
const Vn = uy();
Vn.filterProps = ["sx"];
function cy(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let i = r.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function ly(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: s = {},
    ...o
  } = e, a = hm(r), c = mc(i);
  let f = Be({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: c,
    shape: {
      ...vm,
      ...s
    }
  }, o);
  return f = bm(f), f.applyStyles = cy, f = t.reduce((l, d) => Be(l, d), f), f.unstable_sxConfig = {
    ...qn,
    ...o == null ? void 0 : o.unstable_sxConfig
  }, f.unstable_sx = function(d) {
    return Vn({
      sx: d,
      theme: this
    });
  }, f;
}
const aa = (e) => e, fy = () => {
  let e = aa;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = aa;
    }
  };
}, dy = fy(), py = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function hy(e, t, r = "Mui") {
  const n = py[t];
  return n ? `${r}-${n}` : `${dy.generate(e)}-${t}`;
}
function my(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function ms(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), my(e, t, r);
}
function yy(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Tt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Tt(yy(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ct(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ct(10, i));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const gy = (e) => {
  const t = Tt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Er = (e, t) => {
  try {
    return gy(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Ln(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function yc(e) {
  e = Tt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, s = n * Math.min(i, 1 - i), o = (f, l = (f + r / 30) % 12) => i - s * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let a = "rgb";
  const c = [Math.round(o(0) * 255), Math.round(o(8) * 255), Math.round(o(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), Ln({
    type: a,
    values: c
  });
}
function Yi(e) {
  e = Tt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Tt(yc(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ua(e, t) {
  const r = Yi(e), n = Yi(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function by(e, t) {
  return e = Tt(e), t = ms(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ln(e);
}
function Zr(e, t, r) {
  try {
    return by(e, t);
  } catch {
    return e;
  }
}
function ys(e, t) {
  if (e = Tt(e), t = ms(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Ln(e);
}
function ue(e, t, r) {
  try {
    return ys(e, t);
  } catch {
    return e;
  }
}
function gs(e, t) {
  if (e = Tt(e), t = ms(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Ln(e);
}
function ce(e, t, r) {
  try {
    return gs(e, t);
  } catch {
    return e;
  }
}
function vy(e, t = 0.15) {
  return Yi(e) > 0.5 ? ys(e, t) : gs(e, t);
}
function en(e, t, r) {
  try {
    return vy(e, t);
  } catch {
    return e;
  }
}
function Ey(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const i = n[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...n.slice(1))})` : `, ${i}`;
  }
  return (n, ...i) => `var(--${e ? `${e}-` : ""}${n}${t(...i)})`;
}
const ca = (e, t, r, n = []) => {
  let i = e;
  t.forEach((s, o) => {
    o === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = r : i && typeof i == "object" && (i[s] = r) : i && typeof i == "object" && (i[s] || (i[s] = n.includes(s) ? [] : {}), i = i[s]);
  });
}, wy = (e, t, r) => {
  function n(i, s = [], o = []) {
    Object.entries(i).forEach(([a, c]) => {
      (!r || r && !r([...s, a])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...s, a], Array.isArray(c) ? [...o, a] : o) : t([...s, a], c, o));
    });
  }
  n(e);
}, Sy = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function vi(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, i = {}, s = {}, o = {};
  return wy(
    e,
    (a, c, f) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(a, c))) {
        const l = `--${r ? `${r}-` : ""}${a.join("-")}`, d = Sy(a, c);
        Object.assign(i, {
          [l]: d
        }), ca(s, a, `var(${l})`, f), ca(o, a, `var(${l}, ${d})`, f);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: s,
    varsWithDefaults: o
  };
}
function _y(e, t = {}) {
  const {
    getSelector: r = b,
    disableCssColorScheme: n,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: s = {},
    components: o,
    defaultColorScheme: a = "light",
    ...c
  } = e, {
    vars: f,
    css: l,
    varsWithDefaults: d
  } = vi(c, t);
  let m = d;
  const w = {}, {
    [a]: g,
    ...v
  } = s;
  if (Object.entries(v || {}).forEach(([S, A]) => {
    const {
      vars: E,
      css: $,
      varsWithDefaults: G
    } = vi(A, t);
    m = Be(m, G), w[S] = {
      css: $,
      vars: E
    };
  }), g) {
    const {
      css: S,
      vars: A,
      varsWithDefaults: E
    } = vi(g, t);
    m = Be(m, E), w[a] = {
      css: S,
      vars: A
    };
  }
  function b(S, A) {
    var $, G;
    let E = i;
    if (i === "class" && (E = ".%s"), i === "data" && (E = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (E = `[${i}="%s"]`), S) {
      if (E === "media")
        return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((G = ($ = s[S]) == null ? void 0 : $.palette) == null ? void 0 : G.mode) || S})`]: {
            ":root": A
          }
        };
      if (E)
        return e.defaultColorScheme === S ? `:root, ${E.replace("%s", String(S))}` : E.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let S = {
        ...f
      };
      return Object.entries(w).forEach(([, {
        vars: A
      }]) => {
        S = Be(S, A);
      }), S;
    },
    generateStyleSheets: () => {
      var j, p;
      const S = [], A = e.defaultColorScheme || "light";
      function E(q, V) {
        Object.keys(V).length && S.push(typeof q == "string" ? {
          [q]: {
            ...V
          }
        } : q);
      }
      E(r(void 0, {
        ...l
      }), l);
      const {
        [A]: $,
        ...G
      } = w;
      if ($) {
        const {
          css: q
        } = $, V = (p = (j = s[A]) == null ? void 0 : j.palette) == null ? void 0 : p.mode, Z = !n && V ? {
          colorScheme: V,
          ...q
        } : {
          ...q
        };
        E(r(A, {
          ...Z
        }), Z);
      }
      return Object.entries(G).forEach(([q, {
        css: V
      }]) => {
        var he, ge;
        const Z = (ge = (he = s[q]) == null ? void 0 : he.palette) == null ? void 0 : ge.mode, we = !n && Z ? {
          colorScheme: Z,
          ...V
        } : {
          ...V
        };
        E(r(q, {
          ...we
        }), we);
      }), S;
    }
  };
}
function Oy(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const la = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Rr.white,
    default: Rr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ei = {
  text: {
    primary: Rr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Rr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function fa(e, t, r, n) {
  const i = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = gs(e.main, i) : t === "dark" && (e.dark = ys(e.main, s)));
}
function Cy(e = "light") {
  return e === "dark" ? {
    main: Yt[200],
    light: Yt[50],
    dark: Yt[400]
  } : {
    main: Yt[700],
    light: Yt[400],
    dark: Yt[800]
  };
}
function Ty(e = "light") {
  return e === "dark" ? {
    main: Gt[200],
    light: Gt[50],
    dark: Gt[400]
  } : {
    main: Gt[500],
    light: Gt[300],
    dark: Gt[700]
  };
}
function xy(e = "light") {
  return e === "dark" ? {
    main: Kt[500],
    light: Kt[300],
    dark: Kt[700]
  } : {
    main: Kt[700],
    light: Kt[400],
    dark: Kt[800]
  };
}
function Ry(e = "light") {
  return e === "dark" ? {
    main: Qt[400],
    light: Qt[300],
    dark: Qt[700]
  } : {
    main: Qt[700],
    light: Qt[500],
    dark: Qt[900]
  };
}
function Ay(e = "light") {
  return e === "dark" ? {
    main: Jt[400],
    light: Jt[300],
    dark: Jt[700]
  } : {
    main: Jt[800],
    light: Jt[500],
    dark: Jt[900]
  };
}
function Dy(e = "light") {
  return e === "dark" ? {
    main: yr[400],
    light: yr[300],
    dark: yr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: yr[500],
    dark: yr[900]
  };
}
function bs(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...i
  } = e, s = e.primary || Cy(t), o = e.secondary || Ty(t), a = e.error || xy(t), c = e.info || Ry(t), f = e.success || Ay(t), l = e.warning || Dy(t);
  function d(v) {
    const b = ua(v, Ei.text.primary) >= r ? Ei.text.primary : la.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = ua(v, b);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${b} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return b;
  }
  const m = ({
    color: v,
    name: b,
    mainShade: R = 500,
    lightShade: k = 300,
    darkShade: S = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[R] && (v.main = v[R]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : Ct(11, b ? ` (${b})` : "", R));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ct(12, b ? ` (${b})` : "", JSON.stringify(v.main)));
    return fa(v, "light", k, n), fa(v, "dark", S, n), v.contrastText || (v.contrastText = d(v.main)), v;
  }, w = {
    dark: Ei,
    light: la
  };
  return process.env.NODE_ENV !== "production" && (w[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Be({
    // A collection of common colors.
    common: {
      ...Rr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: o,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: l,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: nm,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...w[t]
  }, i);
}
function ky(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [i, s] = n;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function Py(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Ny(e) {
  return Math.round(e * 1e5) / 1e5;
}
const da = {
  textTransform: "uppercase"
}, pa = '"Roboto", "Helvetica", "Arial", sans-serif';
function $y(e, t) {
  const {
    fontFamily: r = pa,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: o = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: l,
    ...d
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = n / 14, w = l || ((b) => `${b / c * m}rem`), g = (b, R, k, S, A) => ({
    fontFamily: r,
    fontWeight: b,
    fontSize: w(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === pa ? {
      letterSpacing: `${Ny(S / R)}em`
    } : {},
    ...A,
    ...f
  }), v = {
    h1: g(i, 96, 1.167, -1.5),
    h2: g(i, 60, 1.2, -0.5),
    h3: g(s, 48, 1.167, 0),
    h4: g(s, 34, 1.235, 0.25),
    h5: g(s, 24, 1.334, 0),
    h6: g(o, 20, 1.6, 0.15),
    subtitle1: g(s, 16, 1.75, 0.15),
    subtitle2: g(o, 14, 1.57, 0.1),
    body1: g(s, 16, 1.5, 0.15),
    body2: g(s, 14, 1.43, 0.15),
    button: g(o, 14, 1.75, 0.4, da),
    caption: g(s, 12, 1.66, 0.4),
    overline: g(s, 12, 2.66, 1, da),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Be({
    htmlFontSize: c,
    pxToRem: w,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: o,
    fontWeightBold: a,
    ...v
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const Fy = 0.2, Iy = 0.14, My = 0.12;
function pe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Fy})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Iy})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${My})`].join(",");
}
const jy = ["none", pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], qy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Vy = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ha(e) {
  return `${Math.round(e)}ms`;
}
function Ly(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Uy(e) {
  const t = {
    ...qy,
    ...e.easing
  }, r = {
    ...Vy,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Ly,
    create: (i = ["all"], s = {}) => {
      const {
        duration: o = r.standard,
        easing: a = t.easeInOut,
        delay: c = 0,
        ...f
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const l = (m) => typeof m == "string", d = (m) => !Number.isNaN(parseFloat(m));
        !l(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !d(o) && !l(o) && console.error(`MUI: Argument "duration" must be a number or a string but found ${o}.`), l(a) || console.error('MUI: Argument "easing" must be a string.'), !d(c) && !l(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((l) => `${l} ${typeof o == "string" ? o : ha(o)} ${a} ${typeof c == "string" ? c : ha(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const By = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Qi(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: i,
    palette: s = {},
    transitions: o = {},
    typography: a = {},
    shape: c,
    ...f
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ct(20));
  const l = bs(s), d = ly(e);
  let m = Be(d, {
    mixins: Py(d.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: jy.slice(),
    typography: $y(l, a),
    transitions: Uy(o),
    zIndex: {
      ...By
    }
  });
  if (m = Be(m, f), m = t.reduce((w, g) => Be(w, g), m), process.env.NODE_ENV !== "production") {
    const w = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], g = (v, b) => {
      let R;
      for (R in v) {
        const k = v[R];
        if (w.includes(R) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = hy("", R);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[R] = {};
        }
      }
    };
    Object.keys(m.components).forEach((v) => {
      const b = m.components[v].styleOverrides;
      b && v.startsWith("Mui") && g(b, v);
    });
  }
  return m.unstable_sxConfig = {
    ...qn,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, m.unstable_sx = function(g) {
    return Vn({
      sx: g,
      theme: this
    });
  }, m;
}
function zy(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Wy = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = zy(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function gc(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function bc(e) {
  return e === "dark" ? Wy : [];
}
function Hy(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...i
  } = e, s = bs(t);
  return {
    palette: s,
    opacity: {
      ...gc(s.mode),
      ...r
    },
    overlays: n || bc(s.mode),
    ...i
  };
}
function Ky(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Gy = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Yy = (e) => (t, r) => {
  const n = e.colorSchemeSelector;
  let i = n;
  if (n === "class" && (i = ".%s"), n === "data" && (i = "[data-%s]"), n != null && n.startsWith("data-") && !n.includes("%s") && (i = `[${n}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Gy(e.cssVarPrefix).forEach((o) => {
        s[o] = r[o], delete r[o];
      }), i === "media" ? {
        ":root": r,
        "@media (prefers-color-scheme: dark)": {
          ":root": s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`:root, ${i.replace("%s", t)}`]: r
      } : {
        ":root": {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `:root, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          ":root": r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return ":root";
};
function Qy(e) {
  return bt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Jy(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const i = Object.entries(n);
    for (let s = 0; s < i.length; s++) {
      const [o, a] = i[s];
      !Qy(a) || o.startsWith("unstable_") ? delete n[o] : bt(a) && (n[o] = {
        ...a
      }, r(n[o]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Xy(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function T(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function wr(e) {
  return !e || !e.startsWith("hsl") ? e : yc(e);
}
function ut(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Er(wr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Zy(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const tt = (e) => {
  try {
    return e();
  } catch {
  }
}, eg = (e = "mui") => Ey(e);
function wi(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Hy({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: s,
    ...o
  } = Qi({
    ...r,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: s,
    opacity: {
      ...gc(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || bc(i)
  }, o;
}
function tg(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: o = Ky,
    colorSchemeSelector: a = r.light && r.dark ? "media" : void 0,
    ...c
  } = e, f = Object.keys(r)[0], l = n || (r.light && f !== "light" ? "light" : f), d = eg(s), {
    [l]: m,
    light: w,
    dark: g,
    ...v
  } = r, b = {
    ...v
  };
  let R = m;
  if ((l === "dark" && !("dark" in r) || l === "light" && !("light" in r)) && (R = !0), !R)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${l}\` option is either missing or invalid.` : Ct(21, l));
  const k = wi(b, R, c, l);
  w && !b.light && wi(b, w, void 0, "light"), g && !b.dark && wi(b, g, void 0, "dark");
  let S = {
    defaultColorScheme: l,
    ...k,
    cssVarPrefix: s,
    colorSchemeSelector: a,
    getCssVar: d,
    colorSchemes: b,
    font: {
      ...ky(k.typography),
      ...k.font
    },
    spacing: Zy(c.spacing)
  };
  Object.keys(S.colorSchemes).forEach((j) => {
    const p = S.colorSchemes[j].palette, q = (V) => {
      const Z = V.split("-"), we = Z[1], he = Z[2];
      return d(V, p[we][he]);
    };
    if (p.mode === "light" && (T(p.common, "background", "#fff"), T(p.common, "onBackground", "#000")), p.mode === "dark" && (T(p.common, "background", "#000"), T(p.common, "onBackground", "#fff")), Xy(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      T(p.Alert, "errorColor", ue(p.error.light, 0.6)), T(p.Alert, "infoColor", ue(p.info.light, 0.6)), T(p.Alert, "successColor", ue(p.success.light, 0.6)), T(p.Alert, "warningColor", ue(p.warning.light, 0.6)), T(p.Alert, "errorFilledBg", q("palette-error-main")), T(p.Alert, "infoFilledBg", q("palette-info-main")), T(p.Alert, "successFilledBg", q("palette-success-main")), T(p.Alert, "warningFilledBg", q("palette-warning-main")), T(p.Alert, "errorFilledColor", tt(() => p.getContrastText(p.error.main))), T(p.Alert, "infoFilledColor", tt(() => p.getContrastText(p.info.main))), T(p.Alert, "successFilledColor", tt(() => p.getContrastText(p.success.main))), T(p.Alert, "warningFilledColor", tt(() => p.getContrastText(p.warning.main))), T(p.Alert, "errorStandardBg", ce(p.error.light, 0.9)), T(p.Alert, "infoStandardBg", ce(p.info.light, 0.9)), T(p.Alert, "successStandardBg", ce(p.success.light, 0.9)), T(p.Alert, "warningStandardBg", ce(p.warning.light, 0.9)), T(p.Alert, "errorIconColor", q("palette-error-main")), T(p.Alert, "infoIconColor", q("palette-info-main")), T(p.Alert, "successIconColor", q("palette-success-main")), T(p.Alert, "warningIconColor", q("palette-warning-main")), T(p.AppBar, "defaultBg", q("palette-grey-100")), T(p.Avatar, "defaultBg", q("palette-grey-400")), T(p.Button, "inheritContainedBg", q("palette-grey-300")), T(p.Button, "inheritContainedHoverBg", q("palette-grey-A100")), T(p.Chip, "defaultBorder", q("palette-grey-400")), T(p.Chip, "defaultAvatarColor", q("palette-grey-700")), T(p.Chip, "defaultIconColor", q("palette-grey-700")), T(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), T(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), T(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), T(p.LinearProgress, "primaryBg", ce(p.primary.main, 0.62)), T(p.LinearProgress, "secondaryBg", ce(p.secondary.main, 0.62)), T(p.LinearProgress, "errorBg", ce(p.error.main, 0.62)), T(p.LinearProgress, "infoBg", ce(p.info.main, 0.62)), T(p.LinearProgress, "successBg", ce(p.success.main, 0.62)), T(p.LinearProgress, "warningBg", ce(p.warning.main, 0.62)), T(p.Skeleton, "bg", `rgba(${q("palette-text-primaryChannel")} / 0.11)`), T(p.Slider, "primaryTrack", ce(p.primary.main, 0.62)), T(p.Slider, "secondaryTrack", ce(p.secondary.main, 0.62)), T(p.Slider, "errorTrack", ce(p.error.main, 0.62)), T(p.Slider, "infoTrack", ce(p.info.main, 0.62)), T(p.Slider, "successTrack", ce(p.success.main, 0.62)), T(p.Slider, "warningTrack", ce(p.warning.main, 0.62));
      const V = en(p.background.default, 0.8);
      T(p.SnackbarContent, "bg", V), T(p.SnackbarContent, "color", tt(() => p.getContrastText(V))), T(p.SpeedDialAction, "fabHoverBg", en(p.background.paper, 0.15)), T(p.StepConnector, "border", q("palette-grey-400")), T(p.StepContent, "border", q("palette-grey-400")), T(p.Switch, "defaultColor", q("palette-common-white")), T(p.Switch, "defaultDisabledColor", q("palette-grey-100")), T(p.Switch, "primaryDisabledColor", ce(p.primary.main, 0.62)), T(p.Switch, "secondaryDisabledColor", ce(p.secondary.main, 0.62)), T(p.Switch, "errorDisabledColor", ce(p.error.main, 0.62)), T(p.Switch, "infoDisabledColor", ce(p.info.main, 0.62)), T(p.Switch, "successDisabledColor", ce(p.success.main, 0.62)), T(p.Switch, "warningDisabledColor", ce(p.warning.main, 0.62)), T(p.TableCell, "border", ce(Zr(p.divider, 1), 0.88)), T(p.Tooltip, "bg", Zr(p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      T(p.Alert, "errorColor", ce(p.error.light, 0.6)), T(p.Alert, "infoColor", ce(p.info.light, 0.6)), T(p.Alert, "successColor", ce(p.success.light, 0.6)), T(p.Alert, "warningColor", ce(p.warning.light, 0.6)), T(p.Alert, "errorFilledBg", q("palette-error-dark")), T(p.Alert, "infoFilledBg", q("palette-info-dark")), T(p.Alert, "successFilledBg", q("palette-success-dark")), T(p.Alert, "warningFilledBg", q("palette-warning-dark")), T(p.Alert, "errorFilledColor", tt(() => p.getContrastText(p.error.dark))), T(p.Alert, "infoFilledColor", tt(() => p.getContrastText(p.info.dark))), T(p.Alert, "successFilledColor", tt(() => p.getContrastText(p.success.dark))), T(p.Alert, "warningFilledColor", tt(() => p.getContrastText(p.warning.dark))), T(p.Alert, "errorStandardBg", ue(p.error.light, 0.9)), T(p.Alert, "infoStandardBg", ue(p.info.light, 0.9)), T(p.Alert, "successStandardBg", ue(p.success.light, 0.9)), T(p.Alert, "warningStandardBg", ue(p.warning.light, 0.9)), T(p.Alert, "errorIconColor", q("palette-error-main")), T(p.Alert, "infoIconColor", q("palette-info-main")), T(p.Alert, "successIconColor", q("palette-success-main")), T(p.Alert, "warningIconColor", q("palette-warning-main")), T(p.AppBar, "defaultBg", q("palette-grey-900")), T(p.AppBar, "darkBg", q("palette-background-paper")), T(p.AppBar, "darkColor", q("palette-text-primary")), T(p.Avatar, "defaultBg", q("palette-grey-600")), T(p.Button, "inheritContainedBg", q("palette-grey-800")), T(p.Button, "inheritContainedHoverBg", q("palette-grey-700")), T(p.Chip, "defaultBorder", q("palette-grey-700")), T(p.Chip, "defaultAvatarColor", q("palette-grey-300")), T(p.Chip, "defaultIconColor", q("palette-grey-300")), T(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), T(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), T(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), T(p.LinearProgress, "primaryBg", ue(p.primary.main, 0.5)), T(p.LinearProgress, "secondaryBg", ue(p.secondary.main, 0.5)), T(p.LinearProgress, "errorBg", ue(p.error.main, 0.5)), T(p.LinearProgress, "infoBg", ue(p.info.main, 0.5)), T(p.LinearProgress, "successBg", ue(p.success.main, 0.5)), T(p.LinearProgress, "warningBg", ue(p.warning.main, 0.5)), T(p.Skeleton, "bg", `rgba(${q("palette-text-primaryChannel")} / 0.13)`), T(p.Slider, "primaryTrack", ue(p.primary.main, 0.5)), T(p.Slider, "secondaryTrack", ue(p.secondary.main, 0.5)), T(p.Slider, "errorTrack", ue(p.error.main, 0.5)), T(p.Slider, "infoTrack", ue(p.info.main, 0.5)), T(p.Slider, "successTrack", ue(p.success.main, 0.5)), T(p.Slider, "warningTrack", ue(p.warning.main, 0.5));
      const V = en(p.background.default, 0.98);
      T(p.SnackbarContent, "bg", V), T(p.SnackbarContent, "color", tt(() => p.getContrastText(V))), T(p.SpeedDialAction, "fabHoverBg", en(p.background.paper, 0.15)), T(p.StepConnector, "border", q("palette-grey-600")), T(p.StepContent, "border", q("palette-grey-600")), T(p.Switch, "defaultColor", q("palette-grey-300")), T(p.Switch, "defaultDisabledColor", q("palette-grey-600")), T(p.Switch, "primaryDisabledColor", ue(p.primary.main, 0.55)), T(p.Switch, "secondaryDisabledColor", ue(p.secondary.main, 0.55)), T(p.Switch, "errorDisabledColor", ue(p.error.main, 0.55)), T(p.Switch, "infoDisabledColor", ue(p.info.main, 0.55)), T(p.Switch, "successDisabledColor", ue(p.success.main, 0.55)), T(p.Switch, "warningDisabledColor", ue(p.warning.main, 0.55)), T(p.TableCell, "border", ue(Zr(p.divider, 1), 0.68)), T(p.Tooltip, "bg", Zr(p.grey[700], 0.92));
    }
    ut(p.background, "default"), ut(p.background, "paper"), ut(p.common, "background"), ut(p.common, "onBackground"), ut(p, "divider"), Object.keys(p).forEach((V) => {
      const Z = p[V];
      Z && typeof Z == "object" && (Z.main && T(p[V], "mainChannel", Er(wr(Z.main))), Z.light && T(p[V], "lightChannel", Er(wr(Z.light))), Z.dark && T(p[V], "darkChannel", Er(wr(Z.dark))), Z.contrastText && T(p[V], "contrastTextChannel", Er(wr(Z.contrastText))), V === "text" && (ut(p[V], "primary"), ut(p[V], "secondary")), V === "action" && (Z.active && ut(p[V], "active"), Z.selected && ut(p[V], "selected")));
    });
  }), S = t.reduce((j, p) => Be(j, p), S);
  const A = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: o,
    getSelector: Yy(S)
  }, {
    vars: E,
    generateThemeVars: $,
    generateStyleSheets: G
  } = _y(S, A);
  return S.vars = E, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([j, p]) => {
    S[j] = p;
  }), S.generateThemeVars = $, S.generateStyleSheets = G, S.generateSpacing = function() {
    return mc(c.spacing, ps(this));
  }, S.getColorSchemeSelector = Oy(a), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = o, S.unstable_sxConfig = {
    ...qn,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, S.unstable_sx = function(p) {
    return Vn({
      sx: p,
      theme: this
    });
  }, S.toRuntimeSource = Jy, S;
}
function ma(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: bs({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function vc(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: i = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r == null ? void 0 : r.mode,
    ...o
  } = e, a = s || "light", c = i == null ? void 0 : i[a], f = {
    ...i,
    ...r ? {
      [a]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Qi(e, ...t);
    let l = r;
    "palette" in e || f[a] && (f[a] !== !0 ? l = f[a].palette : a === "dark" && (l = {
      mode: "dark"
    }));
    const d = Qi({
      ...e,
      palette: l
    }, ...t);
    return d.defaultColorScheme = a, d.colorSchemes = f, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: d.palette
    }, ma(d, "dark", f.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: d.palette
    }, ma(d, "light", f.light)), d;
  }
  return !r && !("light" in f) && a === "light" && (f.light = !0), tg({
    ...o,
    colorSchemes: f,
    defaultColorScheme: a,
    ...typeof n != "boolean" && n
  }, ...t);
}
vc({
  palette: {
    primary: {
      main: "#008A00",
      light: "#befabe"
    },
    secondary: {
      main: "#2a3eb1",
      light: "#3d5afe"
    }
  }
});
const rg = {
  layout: Yf,
  preview: Jf,
  formContainer: Qa,
  customerData: Xa,
  vendorData: eu,
  employeeData: ru,
  farmerData: iu,
  productData: ou,
  uomData: uu,
  officesData: zu,
  branchesData: Hu,
  alertSnackbar: Gu
}, ng = {
  rfpa: [],
  selectedRFPA: void 0,
  previewRFPA: void 0
}, Ec = _e({
  name: "rfpaData",
  initialState: ng,
  reducers: {
    setRFPAData: (e, t) => {
      e.rfpa = t.payload;
    },
    setSelectedRFPA: (e, t) => {
      e.selectedRFPA = t.payload;
    },
    setPreviewRFPA: (e, t) => {
      e.previewRFPA = t.payload;
    }
  }
});
Ec.actions;
const wc = Ec.reducer, ig = {
  dealSlip: [],
  selectedDealSlip: void 0
}, Sc = _e({
  name: "dealSlipData",
  initialState: ig,
  reducers: {
    setDealSlipData: (e, t) => {
      e.dealSlip = t.payload;
    },
    setSelectedDealSlip: (e, t) => {
      e.selectedDealSlip = t.payload;
    }
  }
});
Sc.actions;
const _c = Sc.reducer, sg = {
  grn: [],
  selectedGRN: void 0,
  previewGRN: void 0,
  subTotalAmt: 0,
  totalAmt: 0,
  totAmtWords: ""
}, Oc = _e({
  name: "grnData",
  initialState: sg,
  reducers: {
    setGRNData: (e, t) => {
      e.grn = t.payload;
    },
    setSelectedGRN: (e, t) => {
      e.selectedGRN = t.payload;
    },
    setPreviewGRN: (e, t) => {
      e.previewGRN = t.payload;
    },
    setSubTotalAmt: (e, t) => {
      e.subTotalAmt = t.payload;
    },
    setTotalAmt: (e, t) => {
      e.totalAmt = t.payload;
    },
    setTotAmtWords: (e, t) => {
      e.totAmtWords = t.payload;
    }
  }
});
Oc.actions;
const Cc = Oc.reducer, og = {
  mcVouchers: [],
  selectedMCVoucher: void 0,
  previewMCVoucher: void 0
}, Tc = _e({
  name: "mc_voucher",
  initialState: og,
  reducers: {
    setMCVouchers: (e, t) => {
      e.mcVouchers = t.payload;
    },
    setSelectedMCVoucher: (e, t) => {
      e.selectedMCVoucher = t.payload;
    },
    setPreviewMCVoucher: (e, t) => {
      e.previewMCVoucher = t.payload;
    }
  }
});
Tc.actions;
const xc = Tc.reducer, ag = {
  lpVouchers: [],
  selectedLPVoucher: void 0,
  previewLPVoucher: void 0
}, Rc = _e({
  name: "lp_voucher",
  initialState: ag,
  reducers: {
    setLPVouchers: (e, t) => {
      e.lpVouchers = t.payload;
    },
    setSelectedLPVoucher: (e, t) => {
      e.selectedLPVoucher = t.payload;
    },
    setPreviewLPVoucher: (e, t) => {
      e.previewLPVoucher = t.payload;
    }
  }
});
Rc.actions;
const Ac = Rc.reducer, ug = {
  pmpVouchers: [],
  selectedPMPVoucher: void 0,
  previewPMPVoucher: void 0
}, Dc = _e({
  name: "pmp_voucher",
  initialState: ug,
  reducers: {
    setPMPVouchers: (e, t) => {
      e.pmpVouchers = t.payload;
    },
    setSelectedPMPVoucher: (e, t) => {
      e.selectedPMPVoucher = t.payload;
    },
    setPreviewPMPVoucher: (e, t) => {
      e.previewPMPVoucher = t.payload;
    }
  }
});
Dc.actions;
const kc = Dc.reducer, cg = {
  tpVouchers: [],
  selectedTPVoucher: void 0,
  previewTPVoucher: void 0
}, Pc = _e({
  name: "tp_voucher",
  initialState: cg,
  reducers: {
    setTPVouchers: (e, t) => {
      e.tpVouchers = t.payload;
    },
    setSelectedTPVoucher: (e, t) => {
      e.selectedTPVoucher = t.payload;
    },
    setPreviewTPVoucher: (e, t) => {
      e.previewTPVoucher = t.payload;
    }
  }
});
Pc.actions;
const Nc = Pc.reducer, lg = {
  dcs: [],
  selectedDC: void 0,
  previewDC: void 0
}, $c = _e({
  name: "delivery_challan",
  initialState: lg,
  reducers: {
    setDCs: (e, t) => {
      e.dcs = t.payload;
    },
    setSelectedDC: (e, t) => {
      e.selectedDC = t.payload;
    },
    setPreviewDC: (e, t) => {
      e.previewDC = t.payload;
    }
  }
});
$c.actions;
const Fc = $c.reducer, fg = {
  paymentReq: [],
  selectedPaymentReq: void 0,
  previewPaymentReq: void 0
}, Ic = _e({
  name: "payment_request",
  initialState: fg,
  reducers: {
    setPaymentReqs: (e, t) => {
      e.paymentReq = t.payload;
    },
    setSelectedPaymentReq: (e, t) => {
      e.selectedPaymentReq = t.payload;
    },
    setPreviewPaymentReq: (e, t) => {
      e.previewPaymentReq = t.payload;
    }
  }
});
Ic.actions;
const Mc = Ic.reducer;
es({
  reducer: {
    rfpaData: wc,
    dealSlipData: _c,
    grnData: Cc,
    mc_voucher: xc,
    lp_voucher: Ac,
    tp_voucher: Nc,
    pmp_voucher: kc,
    delivery_challan: Fc,
    payment_request: Mc
  }
});
Qe().shape({
  location: L().required("Location is required."),
  loadingLoctn: L().required("Loading location is required.")
});
Qe().shape({
  // requestedby: Yup.string().required('Employee name is important.'),
  // requestingDept: Yup.string().required('Department name is important.'),
});
xa.withTypes();
vc({
  palette: {
    primary: {
      main: "#008A00",
      light: "#befabe"
    },
    secondary: {
      main: "#2a3eb1",
      light: "#3d5afe"
    }
  }
});
const dg = {
  rfpaData: wc,
  dealSlipData: _c,
  grnData: Cc,
  mc_voucher: xc,
  lp_voucher: Ac,
  tp_voucher: Nc,
  pmp_voucher: kc,
  delivery_challan: Fc,
  payment_request: Mc
}, pg = Aa({ ...rg, ...dg }), Cg = es({
  reducer: pg
}), Tg = new Cd();
export {
  yg as STRINGS,
  Cg as coreStore,
  wg as isClosingState,
  Yf as layoutReducer,
  Ka as layoutSlice,
  Eg as mobileOpenState,
  Sg as pageTitleState,
  Jf as previewReducer,
  Ga as previewSlice,
  Og as previewState,
  Tg as queryClient,
  bg as setIsClosing,
  gg as setMobileOpen,
  vg as setPageTitle,
  _g as setPreview,
  mg as useAppSelector
};
