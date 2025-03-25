var Oa = (t) => {
  throw TypeError(t);
};
var Vn = (t, e, r) => e.has(t) || Oa("Cannot " + r);
var P = (t, e, r) => (Vn(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ae = (t, e, r) => e.has(t) ? Oa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), te = (t, e, r, n) => (Vn(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Ae = (t, e, r) => (Vn(t, e, "access private method"), r);
var Lr = (t, e, r, n) => ({
  set _(i) {
    te(t, e, i, r);
  },
  get _() {
    return P(t, e, n);
  }
});
function Pc(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in t)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(t, i, a.get ? a : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
function Ci(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ii = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function xc() {
  if (Ta) return re;
  Ta = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.iterator;
  function g(y) {
    return y === null || typeof y != "object" ? null : (y = m && y[m] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var b = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, E = {};
  function T(y, N, $) {
    this.props = y, this.context = N, this.refs = E, this.updater = $ || b;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(y, N) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, N, "setState");
  }, T.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function A() {
  }
  A.prototype = T.prototype;
  function k(y, N, $) {
    this.props = y, this.context = N, this.refs = E, this.updater = $ || b;
  }
  var S = k.prototype = new A();
  S.constructor = k, _(S, T.prototype), S.isPureReactComponent = !0;
  var x = Array.isArray, v = Object.prototype.hasOwnProperty, j = { current: null }, Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(y, N, $) {
    var I, B = {}, z = null, G = null;
    if (N != null) for (I in N.ref !== void 0 && (G = N.ref), N.key !== void 0 && (z = "" + N.key), N) v.call(N, I) && !Z.hasOwnProperty(I) && (B[I] = N[I]);
    var K = arguments.length - 2;
    if (K === 1) B.children = $;
    else if (1 < K) {
      for (var H = Array(K), Q = 0; Q < K; Q++) H[Q] = arguments[Q + 2];
      B.children = H;
    }
    if (y && y.defaultProps) for (I in K = y.defaultProps, K) B[I] === void 0 && (B[I] = K[I]);
    return { $$typeof: t, type: y, key: z, ref: G, props: B, _owner: j.current };
  }
  function d(y, N) {
    return { $$typeof: t, type: y.type, key: N, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function F(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }
  function V(y) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function($) {
      return N[$];
    });
  }
  var ee = /\/+/g;
  function _e(y, N) {
    return typeof y == "object" && y !== null && y.key != null ? V("" + y.key) : N.toString(36);
  }
  function me(y, N, $, I, B) {
    var z = typeof y;
    (z === "undefined" || z === "boolean") && (y = null);
    var G = !1;
    if (y === null) G = !0;
    else switch (z) {
      case "string":
      case "number":
        G = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case t:
          case e:
            G = !0;
        }
    }
    if (G) return G = y, B = B(G), y = I === "" ? "." + _e(G, 0) : I, x(B) ? ($ = "", y != null && ($ = y.replace(ee, "$&/") + "/"), me(B, N, $, "", function(Q) {
      return Q;
    })) : B != null && (F(B) && (B = d(B, $ + (!B.key || G && G.key === B.key ? "" : ("" + B.key).replace(ee, "$&/") + "/") + y)), N.push(B)), 1;
    if (G = 0, I = I === "" ? "." : I + ":", x(y)) for (var K = 0; K < y.length; K++) {
      z = y[K];
      var H = I + _e(z, K);
      G += me(z, N, $, H, B);
    }
    else if (H = g(y), typeof H == "function") for (y = H.call(y), K = 0; !(z = y.next()).done; ) z = z.value, H = I + _e(z, K++), G += me(z, N, $, H, B);
    else if (z === "object") throw N = String(y), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
    return G;
  }
  function ve(y, N, $) {
    if (y == null) return y;
    var I = [], B = 0;
    return me(y, I, "", "", function(z) {
      return N.call($, z, B++);
    }), I;
  }
  function ye(y) {
    if (y._status === -1) {
      var N = y._result;
      N = N(), N.then(function($) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = $);
      }, function($) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = $);
      }), y._status === -1 && (y._status = 0, y._result = N);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var W = { current: null }, We = { transition: null }, pt = { ReactCurrentDispatcher: W, ReactCurrentBatchConfig: We, ReactCurrentOwner: j };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return re.Children = { map: ve, forEach: function(y, N, $) {
    ve(y, function() {
      N.apply(this, arguments);
    }, $);
  }, count: function(y) {
    var N = 0;
    return ve(y, function() {
      N++;
    }), N;
  }, toArray: function(y) {
    return ve(y, function(N) {
      return N;
    }) || [];
  }, only: function(y) {
    if (!F(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, re.Component = T, re.Fragment = r, re.Profiler = i, re.PureComponent = k, re.StrictMode = n, re.Suspense = l, re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pt, re.act = D, re.cloneElement = function(y, N, $) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var I = _({}, y.props), B = y.key, z = y.ref, G = y._owner;
    if (N != null) {
      if (N.ref !== void 0 && (z = N.ref, G = j.current), N.key !== void 0 && (B = "" + N.key), y.type && y.type.defaultProps) var K = y.type.defaultProps;
      for (H in N) v.call(N, H) && !Z.hasOwnProperty(H) && (I[H] = N[H] === void 0 && K !== void 0 ? K[H] : N[H]);
    }
    var H = arguments.length - 2;
    if (H === 1) I.children = $;
    else if (1 < H) {
      K = Array(H);
      for (var Q = 0; Q < H; Q++) K[Q] = arguments[Q + 2];
      I.children = K;
    }
    return { $$typeof: t, type: y.type, key: B, ref: z, props: I, _owner: G };
  }, re.createContext = function(y) {
    return y = { $$typeof: o, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: a, _context: y }, y.Consumer = y;
  }, re.createElement = L, re.createFactory = function(y) {
    var N = L.bind(null, y);
    return N.type = y, N;
  }, re.createRef = function() {
    return { current: null };
  }, re.forwardRef = function(y) {
    return { $$typeof: u, render: y };
  }, re.isValidElement = F, re.lazy = function(y) {
    return { $$typeof: f, _payload: { _status: -1, _result: y }, _init: ye };
  }, re.memo = function(y, N) {
    return { $$typeof: h, type: y, compare: N === void 0 ? null : N };
  }, re.startTransition = function(y) {
    var N = We.transition;
    We.transition = {};
    try {
      y();
    } finally {
      We.transition = N;
    }
  }, re.unstable_act = D, re.useCallback = function(y, N) {
    return W.current.useCallback(y, N);
  }, re.useContext = function(y) {
    return W.current.useContext(y);
  }, re.useDebugValue = function() {
  }, re.useDeferredValue = function(y) {
    return W.current.useDeferredValue(y);
  }, re.useEffect = function(y, N) {
    return W.current.useEffect(y, N);
  }, re.useId = function() {
    return W.current.useId();
  }, re.useImperativeHandle = function(y, N, $) {
    return W.current.useImperativeHandle(y, N, $);
  }, re.useInsertionEffect = function(y, N) {
    return W.current.useInsertionEffect(y, N);
  }, re.useLayoutEffect = function(y, N) {
    return W.current.useLayoutEffect(y, N);
  }, re.useMemo = function(y, N) {
    return W.current.useMemo(y, N);
  }, re.useReducer = function(y, N, $) {
    return W.current.useReducer(y, N, $);
  }, re.useRef = function(y) {
    return W.current.useRef(y);
  }, re.useState = function(y) {
    return W.current.useState(y);
  }, re.useSyncExternalStore = function(y, N, $) {
    return W.current.useSyncExternalStore(y, N, $);
  }, re.useTransition = function() {
    return W.current.useTransition();
  }, re.version = "18.3.1", re;
}
var pr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
pr.exports;
var Na;
function Rc() {
  return Na || (Na = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), h = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), T = Symbol.iterator, A = "@@iterator";
      function k(s) {
        if (s === null || typeof s != "object")
          return null;
        var p = T && s[T] || s[A];
        return typeof p == "function" ? p : null;
      }
      var S = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, x = {
        transition: null
      }, v = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, j = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Z = {}, L = null;
      function d(s) {
        L = s;
      }
      Z.setExtraStackFrame = function(s) {
        L = s;
      }, Z.getCurrentStack = null, Z.getStackAddendum = function() {
        var s = "";
        L && (s += L);
        var p = Z.getCurrentStack;
        return p && (s += p() || ""), s;
      };
      var F = !1, V = !1, ee = !1, _e = !1, me = !1, ve = {
        ReactCurrentDispatcher: S,
        ReactCurrentBatchConfig: x,
        ReactCurrentOwner: j
      };
      ve.ReactDebugCurrentFrame = Z, ve.ReactCurrentActQueue = v;
      function ye(s) {
        {
          for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), C = 1; C < p; C++)
            w[C - 1] = arguments[C];
          We("warn", s, w);
        }
      }
      function W(s) {
        {
          for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), C = 1; C < p; C++)
            w[C - 1] = arguments[C];
          We("error", s, w);
        }
      }
      function We(s, p, w) {
        {
          var C = ve.ReactDebugCurrentFrame, q = C.getStackAddendum();
          q !== "" && (p += "%s", w = w.concat([q]));
          var Y = w.map(function(U) {
            return String(U);
          });
          Y.unshift("Warning: " + p), Function.prototype.apply.call(console[s], console, Y);
        }
      }
      var pt = {};
      function D(s, p) {
        {
          var w = s.constructor, C = w && (w.displayName || w.name) || "ReactClass", q = C + "." + p;
          if (pt[q])
            return;
          W("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", p, C), pt[q] = !0;
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
        isMounted: function(s) {
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
        enqueueForceUpdate: function(s, p, w) {
          D(s, "forceUpdate");
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
        enqueueReplaceState: function(s, p, w, C) {
          D(s, "replaceState");
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
        enqueueSetState: function(s, p, w, C) {
          D(s, "setState");
        }
      }, N = Object.assign, $ = {};
      Object.freeze($);
      function I(s, p, w) {
        this.props = s, this.context = p, this.refs = $, this.updater = w || y;
      }
      I.prototype.isReactComponent = {}, I.prototype.setState = function(s, p) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, p, "setState");
      }, I.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var B = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, z = function(s, p) {
          Object.defineProperty(I.prototype, s, {
            get: function() {
              ye("%s(...) is deprecated in plain JavaScript React classes. %s", p[0], p[1]);
            }
          });
        };
        for (var G in B)
          B.hasOwnProperty(G) && z(G, B[G]);
      }
      function K() {
      }
      K.prototype = I.prototype;
      function H(s, p, w) {
        this.props = s, this.context = p, this.refs = $, this.updater = w || y;
      }
      var Q = H.prototype = new K();
      Q.constructor = H, N(Q, I.prototype), Q.isPureReactComponent = !0;
      function Re() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var M = Array.isArray;
      function qe(s) {
        return M(s);
      }
      function Lt(s) {
        {
          var p = typeof Symbol == "function" && Symbol.toStringTag, w = p && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return w;
        }
      }
      function Rr(s) {
        try {
          return Bi(s), !1;
        } catch {
          return !0;
        }
      }
      function Bi(s) {
        return "" + s;
      }
      function Ar(s) {
        if (Rr(s))
          return W("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lt(s)), Bi(s);
      }
      function Tu(s, p, w) {
        var C = s.displayName;
        if (C)
          return C;
        var q = p.displayName || p.name || "";
        return q !== "" ? w + "(" + q + ")" : w;
      }
      function Ui(s) {
        return s.displayName || "Context";
      }
      function mt(s) {
        if (s == null)
          return null;
        if (typeof s.tag == "number" && W("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
          return s.displayName || s.name || null;
        if (typeof s == "string")
          return s;
        switch (s) {
          case a:
            return "Fragment";
          case i:
            return "Portal";
          case u:
            return "Profiler";
          case o:
            return "StrictMode";
          case m:
            return "Suspense";
          case g:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case h:
              var p = s;
              return Ui(p) + ".Consumer";
            case l:
              var w = s;
              return Ui(w._context) + ".Provider";
            case f:
              return Tu(s, s.render, "ForwardRef");
            case b:
              var C = s.displayName || null;
              return C !== null ? C : mt(s.type) || "Memo";
            case _: {
              var q = s, Y = q._payload, U = q._init;
              try {
                return mt(U(Y));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var cr = Object.prototype.hasOwnProperty, zi = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Gi, Wi, Pn;
      Pn = {};
      function Ki(s) {
        if (cr.call(s, "ref")) {
          var p = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (p && p.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function Hi(s) {
        if (cr.call(s, "key")) {
          var p = Object.getOwnPropertyDescriptor(s, "key").get;
          if (p && p.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function Nu(s, p) {
        var w = function() {
          Gi || (Gi = !0, W("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: w,
          configurable: !0
        });
      }
      function Pu(s, p) {
        var w = function() {
          Wi || (Wi = !0, W("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: w,
          configurable: !0
        });
      }
      function xu(s) {
        if (typeof s.ref == "string" && j.current && s.__self && j.current.stateNode !== s.__self) {
          var p = mt(j.current.type);
          Pn[p] || (W('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p, s.ref), Pn[p] = !0);
        }
      }
      var xn = function(s, p, w, C, q, Y, U) {
        var J = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: s,
          key: p,
          ref: w,
          props: U,
          // Record the component responsible for creating this element.
          _owner: Y
        };
        return J._store = {}, Object.defineProperty(J._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(J, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: C
        }), Object.defineProperty(J, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
      };
      function Ru(s, p, w) {
        var C, q = {}, Y = null, U = null, J = null, ie = null;
        if (p != null) {
          Ki(p) && (U = p.ref, xu(p)), Hi(p) && (Ar(p.key), Y = "" + p.key), J = p.__self === void 0 ? null : p.__self, ie = p.__source === void 0 ? null : p.__source;
          for (C in p)
            cr.call(p, C) && !zi.hasOwnProperty(C) && (q[C] = p[C]);
        }
        var ue = arguments.length - 2;
        if (ue === 1)
          q.children = w;
        else if (ue > 1) {
          for (var fe = Array(ue), he = 0; he < ue; he++)
            fe[he] = arguments[he + 2];
          Object.freeze && Object.freeze(fe), q.children = fe;
        }
        if (s && s.defaultProps) {
          var ge = s.defaultProps;
          for (C in ge)
            q[C] === void 0 && (q[C] = ge[C]);
        }
        if (Y || U) {
          var Oe = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          Y && Nu(q, Oe), U && Pu(q, Oe);
        }
        return xn(s, Y, U, J, ie, j.current, q);
      }
      function Au(s, p) {
        var w = xn(s.type, p, s.ref, s._self, s._source, s._owner, s.props);
        return w;
      }
      function Du(s, p, w) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var C, q = N({}, s.props), Y = s.key, U = s.ref, J = s._self, ie = s._source, ue = s._owner;
        if (p != null) {
          Ki(p) && (U = p.ref, ue = j.current), Hi(p) && (Ar(p.key), Y = "" + p.key);
          var fe;
          s.type && s.type.defaultProps && (fe = s.type.defaultProps);
          for (C in p)
            cr.call(p, C) && !zi.hasOwnProperty(C) && (p[C] === void 0 && fe !== void 0 ? q[C] = fe[C] : q[C] = p[C]);
        }
        var he = arguments.length - 2;
        if (he === 1)
          q.children = w;
        else if (he > 1) {
          for (var ge = Array(he), Oe = 0; Oe < he; Oe++)
            ge[Oe] = arguments[Oe + 2];
          q.children = ge;
        }
        return xn(s.type, Y, U, J, ie, ue, q);
      }
      function Bt(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var Yi = ".", qu = ":";
      function ku(s) {
        var p = /[=:]/g, w = {
          "=": "=0",
          ":": "=2"
        }, C = s.replace(p, function(q) {
          return w[q];
        });
        return "$" + C;
      }
      var Qi = !1, Iu = /\/+/g;
      function Zi(s) {
        return s.replace(Iu, "$&/");
      }
      function Rn(s, p) {
        return typeof s == "object" && s !== null && s.key != null ? (Ar(s.key), ku("" + s.key)) : p.toString(36);
      }
      function Dr(s, p, w, C, q) {
        var Y = typeof s;
        (Y === "undefined" || Y === "boolean") && (s = null);
        var U = !1;
        if (s === null)
          U = !0;
        else
          switch (Y) {
            case "string":
            case "number":
              U = !0;
              break;
            case "object":
              switch (s.$$typeof) {
                case n:
                case i:
                  U = !0;
              }
          }
        if (U) {
          var J = s, ie = q(J), ue = C === "" ? Yi + Rn(J, 0) : C;
          if (qe(ie)) {
            var fe = "";
            ue != null && (fe = Zi(ue) + "/"), Dr(ie, p, fe, "", function(Nc) {
              return Nc;
            });
          } else ie != null && (Bt(ie) && (ie.key && (!J || J.key !== ie.key) && Ar(ie.key), ie = Au(
            ie,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            w + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ie.key && (!J || J.key !== ie.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Zi("" + ie.key) + "/"
            ) : "") + ue
          )), p.push(ie));
          return 1;
        }
        var he, ge, Oe = 0, Pe = C === "" ? Yi : C + qu;
        if (qe(s))
          for (var Vr = 0; Vr < s.length; Vr++)
            he = s[Vr], ge = Pe + Rn(he, Vr), Oe += Dr(he, p, w, ge, q);
        else {
          var jn = k(s);
          if (typeof jn == "function") {
            var Ea = s;
            jn === Ea.entries && (Qi || ye("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qi = !0);
            for (var Oc = jn.call(Ea), _a, Tc = 0; !(_a = Oc.next()).done; )
              he = _a.value, ge = Pe + Rn(he, Tc++), Oe += Dr(he, p, w, ge, q);
          } else if (Y === "object") {
            var Ca = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (Ca === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : Ca) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Oe;
      }
      function qr(s, p, w) {
        if (s == null)
          return s;
        var C = [], q = 0;
        return Dr(s, C, "", "", function(Y) {
          return p.call(w, Y, q++);
        }), C;
      }
      function $u(s) {
        var p = 0;
        return qr(s, function() {
          p++;
        }), p;
      }
      function Mu(s, p, w) {
        qr(s, function() {
          p.apply(this, arguments);
        }, w);
      }
      function Fu(s) {
        return qr(s, function(p) {
          return p;
        }) || [];
      }
      function ju(s) {
        if (!Bt(s))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
      function Vu(s) {
        var p = {
          $$typeof: h,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: s,
          _currentValue2: s,
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
        p.Provider = {
          $$typeof: l,
          _context: p
        };
        var w = !1, C = !1, q = !1;
        {
          var Y = {
            $$typeof: h,
            _context: p
          };
          Object.defineProperties(Y, {
            Provider: {
              get: function() {
                return C || (C = !0, W("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), p.Provider;
              },
              set: function(U) {
                p.Provider = U;
              }
            },
            _currentValue: {
              get: function() {
                return p._currentValue;
              },
              set: function(U) {
                p._currentValue = U;
              }
            },
            _currentValue2: {
              get: function() {
                return p._currentValue2;
              },
              set: function(U) {
                p._currentValue2 = U;
              }
            },
            _threadCount: {
              get: function() {
                return p._threadCount;
              },
              set: function(U) {
                p._threadCount = U;
              }
            },
            Consumer: {
              get: function() {
                return w || (w = !0, W("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), p.Consumer;
              }
            },
            displayName: {
              get: function() {
                return p.displayName;
              },
              set: function(U) {
                q || (ye("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", U), q = !0);
              }
            }
          }), p.Consumer = Y;
        }
        return p._currentRenderer = null, p._currentRenderer2 = null, p;
      }
      var lr = -1, An = 0, Xi = 1, Lu = 2;
      function Bu(s) {
        if (s._status === lr) {
          var p = s._result, w = p();
          if (w.then(function(Y) {
            if (s._status === An || s._status === lr) {
              var U = s;
              U._status = Xi, U._result = Y;
            }
          }, function(Y) {
            if (s._status === An || s._status === lr) {
              var U = s;
              U._status = Lu, U._result = Y;
            }
          }), s._status === lr) {
            var C = s;
            C._status = An, C._result = w;
          }
        }
        if (s._status === Xi) {
          var q = s._result;
          return q === void 0 && W(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, q), "default" in q || W(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, q), q.default;
        } else
          throw s._result;
      }
      function Uu(s) {
        var p = {
          // We use these fields to store the result.
          _status: lr,
          _result: s
        }, w = {
          $$typeof: _,
          _payload: p,
          _init: Bu
        };
        {
          var C, q;
          Object.defineProperties(w, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return C;
              },
              set: function(Y) {
                W("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), C = Y, Object.defineProperty(w, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Y) {
                W("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Y, Object.defineProperty(w, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return w;
      }
      function zu(s) {
        s != null && s.$$typeof === b ? W("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? W("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && W("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && W("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var p = {
          $$typeof: f,
          render: s
        };
        {
          var w;
          Object.defineProperty(p, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return w;
            },
            set: function(C) {
              w = C, !s.name && !s.displayName && (s.displayName = C);
            }
          });
        }
        return p;
      }
      var Ji;
      Ji = Symbol.for("react.module.reference");
      function ea(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === a || s === u || me || s === o || s === m || s === g || _e || s === E || F || V || ee || typeof s == "object" && s !== null && (s.$$typeof === _ || s.$$typeof === b || s.$$typeof === l || s.$$typeof === h || s.$$typeof === f || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === Ji || s.getModuleId !== void 0));
      }
      function Gu(s, p) {
        ea(s) || W("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
        var w = {
          $$typeof: b,
          type: s,
          compare: p === void 0 ? null : p
        };
        {
          var C;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return C;
            },
            set: function(q) {
              C = q, !s.name && !s.displayName && (s.displayName = q);
            }
          });
        }
        return w;
      }
      function ke() {
        var s = S.current;
        return s === null && W(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
      }
      function Wu(s) {
        var p = ke();
        if (s._context !== void 0) {
          var w = s._context;
          w.Consumer === s ? W("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : w.Provider === s && W("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return p.useContext(s);
      }
      function Ku(s) {
        var p = ke();
        return p.useState(s);
      }
      function Hu(s, p, w) {
        var C = ke();
        return C.useReducer(s, p, w);
      }
      function Yu(s) {
        var p = ke();
        return p.useRef(s);
      }
      function Qu(s, p) {
        var w = ke();
        return w.useEffect(s, p);
      }
      function Zu(s, p) {
        var w = ke();
        return w.useInsertionEffect(s, p);
      }
      function Xu(s, p) {
        var w = ke();
        return w.useLayoutEffect(s, p);
      }
      function Ju(s, p) {
        var w = ke();
        return w.useCallback(s, p);
      }
      function ec(s, p) {
        var w = ke();
        return w.useMemo(s, p);
      }
      function tc(s, p, w) {
        var C = ke();
        return C.useImperativeHandle(s, p, w);
      }
      function rc(s, p) {
        {
          var w = ke();
          return w.useDebugValue(s, p);
        }
      }
      function nc() {
        var s = ke();
        return s.useTransition();
      }
      function ic(s) {
        var p = ke();
        return p.useDeferredValue(s);
      }
      function ac() {
        var s = ke();
        return s.useId();
      }
      function sc(s, p, w) {
        var C = ke();
        return C.useSyncExternalStore(s, p, w);
      }
      var dr = 0, ta, ra, na, ia, aa, sa, oa;
      function ua() {
      }
      ua.__reactDisabledLog = !0;
      function oc() {
        {
          if (dr === 0) {
            ta = console.log, ra = console.info, na = console.warn, ia = console.error, aa = console.group, sa = console.groupCollapsed, oa = console.groupEnd;
            var s = {
              configurable: !0,
              enumerable: !0,
              value: ua,
              writable: !0
            };
            Object.defineProperties(console, {
              info: s,
              log: s,
              warn: s,
              error: s,
              group: s,
              groupCollapsed: s,
              groupEnd: s
            });
          }
          dr++;
        }
      }
      function uc() {
        {
          if (dr--, dr === 0) {
            var s = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: N({}, s, {
                value: ta
              }),
              info: N({}, s, {
                value: ra
              }),
              warn: N({}, s, {
                value: na
              }),
              error: N({}, s, {
                value: ia
              }),
              group: N({}, s, {
                value: aa
              }),
              groupCollapsed: N({}, s, {
                value: sa
              }),
              groupEnd: N({}, s, {
                value: oa
              })
            });
          }
          dr < 0 && W("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Dn = ve.ReactCurrentDispatcher, qn;
      function kr(s, p, w) {
        {
          if (qn === void 0)
            try {
              throw Error();
            } catch (q) {
              var C = q.stack.trim().match(/\n( *(at )?)/);
              qn = C && C[1] || "";
            }
          return `
` + qn + s;
        }
      }
      var kn = !1, Ir;
      {
        var cc = typeof WeakMap == "function" ? WeakMap : Map;
        Ir = new cc();
      }
      function ca(s, p) {
        if (!s || kn)
          return "";
        {
          var w = Ir.get(s);
          if (w !== void 0)
            return w;
        }
        var C;
        kn = !0;
        var q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Y;
        Y = Dn.current, Dn.current = null, oc();
        try {
          if (p) {
            var U = function() {
              throw Error();
            };
            if (Object.defineProperty(U.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(U, []);
              } catch (Pe) {
                C = Pe;
              }
              Reflect.construct(s, [], U);
            } else {
              try {
                U.call();
              } catch (Pe) {
                C = Pe;
              }
              s.call(U.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Pe) {
              C = Pe;
            }
            s();
          }
        } catch (Pe) {
          if (Pe && C && typeof Pe.stack == "string") {
            for (var J = Pe.stack.split(`
`), ie = C.stack.split(`
`), ue = J.length - 1, fe = ie.length - 1; ue >= 1 && fe >= 0 && J[ue] !== ie[fe]; )
              fe--;
            for (; ue >= 1 && fe >= 0; ue--, fe--)
              if (J[ue] !== ie[fe]) {
                if (ue !== 1 || fe !== 1)
                  do
                    if (ue--, fe--, fe < 0 || J[ue] !== ie[fe]) {
                      var he = `
` + J[ue].replace(" at new ", " at ");
                      return s.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", s.displayName)), typeof s == "function" && Ir.set(s, he), he;
                    }
                  while (ue >= 1 && fe >= 0);
                break;
              }
          }
        } finally {
          kn = !1, Dn.current = Y, uc(), Error.prepareStackTrace = q;
        }
        var ge = s ? s.displayName || s.name : "", Oe = ge ? kr(ge) : "";
        return typeof s == "function" && Ir.set(s, Oe), Oe;
      }
      function lc(s, p, w) {
        return ca(s, !1);
      }
      function dc(s) {
        var p = s.prototype;
        return !!(p && p.isReactComponent);
      }
      function $r(s, p, w) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return ca(s, dc(s));
        if (typeof s == "string")
          return kr(s);
        switch (s) {
          case m:
            return kr("Suspense");
          case g:
            return kr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case f:
              return lc(s.render);
            case b:
              return $r(s.type, p, w);
            case _: {
              var C = s, q = C._payload, Y = C._init;
              try {
                return $r(Y(q), p, w);
              } catch {
              }
            }
          }
        return "";
      }
      var la = {}, da = ve.ReactDebugCurrentFrame;
      function Mr(s) {
        if (s) {
          var p = s._owner, w = $r(s.type, s._source, p ? p.type : null);
          da.setExtraStackFrame(w);
        } else
          da.setExtraStackFrame(null);
      }
      function fc(s, p, w, C, q) {
        {
          var Y = Function.call.bind(cr);
          for (var U in s)
            if (Y(s, U)) {
              var J = void 0;
              try {
                if (typeof s[U] != "function") {
                  var ie = Error((C || "React class") + ": " + w + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ie.name = "Invariant Violation", ie;
                }
                J = s[U](p, U, C, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ue) {
                J = ue;
              }
              J && !(J instanceof Error) && (Mr(q), W("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", w, U, typeof J), Mr(null)), J instanceof Error && !(J.message in la) && (la[J.message] = !0, Mr(q), W("Failed %s type: %s", w, J.message), Mr(null));
            }
        }
      }
      function Ut(s) {
        if (s) {
          var p = s._owner, w = $r(s.type, s._source, p ? p.type : null);
          d(w);
        } else
          d(null);
      }
      var In;
      In = !1;
      function fa() {
        if (j.current) {
          var s = mt(j.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function hc(s) {
        if (s !== void 0) {
          var p = s.fileName.replace(/^.*[\\\/]/, ""), w = s.lineNumber;
          return `

Check your code at ` + p + ":" + w + ".";
        }
        return "";
      }
      function pc(s) {
        return s != null ? hc(s.__source) : "";
      }
      var ha = {};
      function mc(s) {
        var p = fa();
        if (!p) {
          var w = typeof s == "string" ? s : s.displayName || s.name;
          w && (p = `

Check the top-level render call using <` + w + ">.");
        }
        return p;
      }
      function pa(s, p) {
        if (!(!s._store || s._store.validated || s.key != null)) {
          s._store.validated = !0;
          var w = mc(p);
          if (!ha[w]) {
            ha[w] = !0;
            var C = "";
            s && s._owner && s._owner !== j.current && (C = " It was passed a child from " + mt(s._owner.type) + "."), Ut(s), W('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, C), Ut(null);
          }
        }
      }
      function ma(s, p) {
        if (typeof s == "object") {
          if (qe(s))
            for (var w = 0; w < s.length; w++) {
              var C = s[w];
              Bt(C) && pa(C, p);
            }
          else if (Bt(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var q = k(s);
            if (typeof q == "function" && q !== s.entries)
              for (var Y = q.call(s), U; !(U = Y.next()).done; )
                Bt(U.value) && pa(U.value, p);
          }
        }
      }
      function ya(s) {
        {
          var p = s.type;
          if (p == null || typeof p == "string")
            return;
          var w;
          if (typeof p == "function")
            w = p.propTypes;
          else if (typeof p == "object" && (p.$$typeof === f || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          p.$$typeof === b))
            w = p.propTypes;
          else
            return;
          if (w) {
            var C = mt(p);
            fc(w, s.props, "prop", C, s);
          } else if (p.PropTypes !== void 0 && !In) {
            In = !0;
            var q = mt(p);
            W("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
          }
          typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && W("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function yc(s) {
        {
          for (var p = Object.keys(s.props), w = 0; w < p.length; w++) {
            var C = p[w];
            if (C !== "children" && C !== "key") {
              Ut(s), W("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), Ut(null);
              break;
            }
          }
          s.ref !== null && (Ut(s), W("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
        }
      }
      function ga(s, p, w) {
        var C = ea(s);
        if (!C) {
          var q = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = pc(p);
          Y ? q += Y : q += fa();
          var U;
          s === null ? U = "null" : qe(s) ? U = "array" : s !== void 0 && s.$$typeof === n ? (U = "<" + (mt(s.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : U = typeof s, W("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", U, q);
        }
        var J = Ru.apply(this, arguments);
        if (J == null)
          return J;
        if (C)
          for (var ie = 2; ie < arguments.length; ie++)
            ma(arguments[ie], s);
        return s === a ? yc(J) : ya(J), J;
      }
      var ba = !1;
      function gc(s) {
        var p = ga.bind(null, s);
        return p.type = s, ba || (ba = !0, ye("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(p, "type", {
          enumerable: !1,
          get: function() {
            return ye("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), p;
      }
      function bc(s, p, w) {
        for (var C = Du.apply(this, arguments), q = 2; q < arguments.length; q++)
          ma(arguments[q], C.type);
        return ya(C), C;
      }
      function vc(s, p) {
        var w = x.transition;
        x.transition = {};
        var C = x.transition;
        x.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          s();
        } finally {
          if (x.transition = w, w === null && C._updatedFibers) {
            var q = C._updatedFibers.size;
            q > 10 && ye("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), C._updatedFibers.clear();
          }
        }
      }
      var va = !1, Fr = null;
      function Sc(s) {
        if (Fr === null)
          try {
            var p = ("require" + Math.random()).slice(0, 7), w = t && t[p];
            Fr = w.call(t, "timers").setImmediate;
          } catch {
            Fr = function(q) {
              va === !1 && (va = !0, typeof MessageChannel > "u" && W("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Y = new MessageChannel();
              Y.port1.onmessage = q, Y.port2.postMessage(void 0);
            };
          }
        return Fr(s);
      }
      var zt = 0, Sa = !1;
      function wa(s) {
        {
          var p = zt;
          zt++, v.current === null && (v.current = []);
          var w = v.isBatchingLegacy, C;
          try {
            if (v.isBatchingLegacy = !0, C = s(), !w && v.didScheduleLegacyUpdate) {
              var q = v.current;
              q !== null && (v.didScheduleLegacyUpdate = !1, Fn(q));
            }
          } catch (ge) {
            throw jr(p), ge;
          } finally {
            v.isBatchingLegacy = w;
          }
          if (C !== null && typeof C == "object" && typeof C.then == "function") {
            var Y = C, U = !1, J = {
              then: function(ge, Oe) {
                U = !0, Y.then(function(Pe) {
                  jr(p), zt === 0 ? $n(Pe, ge, Oe) : ge(Pe);
                }, function(Pe) {
                  jr(p), Oe(Pe);
                });
              }
            };
            return !Sa && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              U || (Sa = !0, W("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), J;
          } else {
            var ie = C;
            if (jr(p), zt === 0) {
              var ue = v.current;
              ue !== null && (Fn(ue), v.current = null);
              var fe = {
                then: function(ge, Oe) {
                  v.current === null ? (v.current = [], $n(ie, ge, Oe)) : ge(ie);
                }
              };
              return fe;
            } else {
              var he = {
                then: function(ge, Oe) {
                  ge(ie);
                }
              };
              return he;
            }
          }
        }
      }
      function jr(s) {
        s !== zt - 1 && W("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), zt = s;
      }
      function $n(s, p, w) {
        {
          var C = v.current;
          if (C !== null)
            try {
              Fn(C), Sc(function() {
                C.length === 0 ? (v.current = null, p(s)) : $n(s, p, w);
              });
            } catch (q) {
              w(q);
            }
          else
            p(s);
        }
      }
      var Mn = !1;
      function Fn(s) {
        if (!Mn) {
          Mn = !0;
          var p = 0;
          try {
            for (; p < s.length; p++) {
              var w = s[p];
              do
                w = w(!0);
              while (w !== null);
            }
            s.length = 0;
          } catch (C) {
            throw s = s.slice(p + 1), C;
          } finally {
            Mn = !1;
          }
        }
      }
      var wc = ga, Ec = bc, _c = gc, Cc = {
        map: qr,
        forEach: Mu,
        count: $u,
        toArray: Fu,
        only: ju
      };
      e.Children = Cc, e.Component = I, e.Fragment = a, e.Profiler = u, e.PureComponent = H, e.StrictMode = o, e.Suspense = m, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, e.act = wa, e.cloneElement = Ec, e.createContext = Vu, e.createElement = wc, e.createFactory = _c, e.createRef = Re, e.forwardRef = zu, e.isValidElement = Bt, e.lazy = Uu, e.memo = Gu, e.startTransition = vc, e.unstable_act = wa, e.useCallback = Ju, e.useContext = Wu, e.useDebugValue = rc, e.useDeferredValue = ic, e.useEffect = Qu, e.useId = ac, e.useImperativeHandle = tc, e.useInsertionEffect = Zu, e.useLayoutEffect = Xu, e.useMemo = ec, e.useReducer = Hu, e.useRef = Yu, e.useState = Ku, e.useSyncExternalStore = sc, e.useTransition = nc, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(pr, pr.exports)), pr.exports;
}
process.env.NODE_ENV === "production" ? ii.exports = xc() : ii.exports = Rc();
var sn = ii.exports;
const Ds = /* @__PURE__ */ Ci(sn), Pa = /* @__PURE__ */ Pc({
  __proto__: null,
  default: Ds
}, [sn]);
var ai = { exports: {} }, Ln = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xa;
function Ac() {
  if (xa) return Ln;
  xa = 1;
  var t = sn;
  function e(l, h) {
    return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
  return Ln.useSyncExternalStoreWithSelector = function(l, h, f, m, g) {
    var b = i(null);
    if (b.current === null) {
      var _ = { hasValue: !1, value: null };
      b.current = _;
    } else _ = b.current;
    b = o(function() {
      function T(v) {
        if (!A) {
          if (A = !0, k = v, v = m(v), g !== void 0 && _.hasValue) {
            var j = _.value;
            if (g(j, v)) return S = j;
          }
          return S = v;
        }
        if (j = S, r(k, v)) return j;
        var Z = m(v);
        return g !== void 0 && g(j, Z) ? j : (k = v, S = Z);
      }
      var A = !1, k, S, x = f === void 0 ? null : f;
      return [function() {
        return T(h());
      }, x === null ? void 0 : function() {
        return T(x());
      }];
    }, [h, f, m, g]);
    var E = n(l, b[0], b[1]);
    return a(function() {
      _.hasValue = !0, _.value = E;
    }, [E]), u(E), E;
  }, Ln;
}
var Bn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function Dc() {
  return Ra || (Ra = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = sn;
    function e(h, f) {
      return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
    }
    var r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    function l(h, f, m, g, b) {
      var _ = i(null), E;
      _.current === null ? (E = {
        hasValue: !1,
        value: null
      }, _.current = E) : E = _.current;
      var T = o(function() {
        var x = !1, v, j, Z = function(V) {
          if (!x) {
            x = !0, v = V;
            var ee = g(V);
            if (b !== void 0 && E.hasValue) {
              var _e = E.value;
              if (b(_e, ee))
                return j = _e, _e;
            }
            return j = ee, ee;
          }
          var me = v, ve = j;
          if (r(me, V))
            return ve;
          var ye = g(V);
          return b !== void 0 && b(ve, ye) ? ve : (v = V, j = ye, ye);
        }, L = m === void 0 ? null : m, d = function() {
          return Z(f());
        }, F = L === null ? void 0 : function() {
          return Z(L());
        };
        return [d, F];
      }, [f, m, g, b]), A = T[0], k = T[1], S = n(h, A, k);
      return a(function() {
        E.hasValue = !0, E.value = S;
      }, [S]), u(S), S;
    }
    Bn.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bn;
}
process.env.NODE_ENV === "production" ? ai.exports = Ac() : ai.exports = Dc();
var qc = ai.exports, at = (
  // prettier-ignore
  // @ts-ignore
  "default" in Pa ? Ds : Pa
), Aa = Symbol.for("react-redux-context"), Da = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function kc() {
  if (!at.createContext)
    return {};
  const t = Da[Aa] ?? (Da[Aa] = /* @__PURE__ */ new Map());
  let e = t.get(at.createContext);
  return e || (e = at.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (e.displayName = "ReactRedux"), t.set(at.createContext, e)), e;
}
var It = /* @__PURE__ */ kc(), Ic = () => {
  throw new Error("uSES not initialized!");
};
function Oi(t = It) {
  return function() {
    const r = at.useContext(t);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var qs = /* @__PURE__ */ Oi(), ks = Ic, $c = (t) => {
  ks = t;
}, Mc = (t, e) => t === e;
function Fc(t = It) {
  const e = t === It ? qs : Oi(t), r = (n, i = {}) => {
    const { equalityFn: a = Mc, devModeChecks: o = {} } = typeof i == "function" ? { equalityFn: i } : i;
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error("You must pass a selector to useSelector");
      if (typeof n != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof a != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: u,
      subscription: l,
      getServerState: h,
      stabilityCheck: f,
      identityFunctionCheck: m
    } = e(), g = at.useRef(!0), b = at.useCallback(
      {
        [n.name](E) {
          const T = n(E);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: A,
              stabilityCheck: k
            } = {
              stabilityCheck: f,
              identityFunctionCheck: m,
              ...o
            };
            if (k === "always" || k === "once" && g.current) {
              const S = n(E);
              if (!a(T, S)) {
                let x;
                try {
                  throw new Error();
                } catch (v) {
                  ({ stack: x } = v);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: E,
                    selected: T,
                    selected2: S,
                    stack: x
                  }
                );
              }
            }
            if ((A === "always" || A === "once" && g.current) && T === E) {
              let S;
              try {
                throw new Error();
              } catch (x) {
                ({ stack: S } = x);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: S }
              );
            }
            g.current && (g.current = !1);
          }
          return T;
        }
      }[n.name],
      [n, f, o.stabilityCheck]
    ), _ = ks(
      l.addNestedSub,
      u.getState,
      h || u.getState,
      b,
      a
    );
    return at.useDebugValue(_), _;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Is = /* @__PURE__ */ Fc(), jc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vc = typeof navigator < "u" && navigator.product === "ReactNative";
jc || Vc ? at.useLayoutEffect : at.useEffect;
function $s(t = It) {
  const e = t === It ? qs : (
    // @ts-ignore
    Oi(t)
  ), r = () => {
    const { store: n } = e();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Lc = /* @__PURE__ */ $s();
function Bc(t = It) {
  const e = t === It ? Lc : $s(t), r = () => e().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Ms = /* @__PURE__ */ Bc();
$c(qc.useSyncExternalStoreWithSelector);
const Xp = Is.withTypes(), Jp = Ms.withTypes();
function Ne(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var Uc = typeof Symbol == "function" && Symbol.observable || "@@observable", qa = Uc, Un = () => Math.random().toString(36).substring(7).split("").join("."), zc = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Un()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Un()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Un()}`
}, qt = zc;
function Tr(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null;
}
function Gc(t) {
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  const e = typeof t;
  switch (e) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return e;
  }
  if (Array.isArray(t))
    return "array";
  if (Hc(t))
    return "date";
  if (Kc(t))
    return "error";
  const r = Wc(t);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(t).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Wc(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function Kc(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function Hc(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function ct(t) {
  let e = typeof t;
  return process.env.NODE_ENV !== "production" && (e = Gc(t)), e;
}
function Fs(t, e, r) {
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ne(2) : `Expected the root reducer to be a function. Instead, received: '${ct(t)}'`);
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ne(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ne(1) : `Expected the enhancer to be a function. Instead, received: '${ct(r)}'`);
    return r(Fs)(t, e);
  }
  let n = t, i = e, a = /* @__PURE__ */ new Map(), o = a, u = 0, l = !1;
  function h() {
    o === a && (o = /* @__PURE__ */ new Map(), a.forEach((T, A) => {
      o.set(A, T);
    }));
  }
  function f() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ne(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function m(T) {
    if (typeof T != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ne(4) : `Expected the listener to be a function. Instead, received: '${ct(T)}'`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ne(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let A = !0;
    h();
    const k = u++;
    return o.set(k, T), function() {
      if (A) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? Ne(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        A = !1, h(), o.delete(k), a = null;
      }
    };
  }
  function g(T) {
    if (!Tr(T))
      throw new Error(process.env.NODE_ENV === "production" ? Ne(7) : `Actions must be plain objects. Instead, the actual type was: '${ct(T)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof T.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ne(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof T.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Ne(17) : `Action "type" property must be a string. Instead, the actual type was: '${ct(T.type)}'. Value was: '${T.type}' (stringified)`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ne(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = n(i, T);
    } finally {
      l = !1;
    }
    return (a = o).forEach((k) => {
      k();
    }), T;
  }
  function b(T) {
    if (typeof T != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ne(10) : `Expected the nextReducer to be a function. Instead, received: '${ct(T)}`);
    n = T, g({
      type: qt.REPLACE
    });
  }
  function _() {
    const T = m;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(A) {
        if (typeof A != "object" || A === null)
          throw new Error(process.env.NODE_ENV === "production" ? Ne(11) : `Expected the observer to be an object. Instead, received: '${ct(A)}'`);
        function k() {
          const x = A;
          x.next && x.next(f());
        }
        return k(), {
          unsubscribe: T(k)
        };
      },
      [qa]() {
        return this;
      }
    };
  }
  return g({
    type: qt.INIT
  }), {
    dispatch: g,
    subscribe: m,
    getState: f,
    replaceReducer: b,
    [qa]: _
  };
}
function ka(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function Yc(t, e, r, n) {
  const i = Object.keys(e), a = r && r.type === qt.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Tr(t))
    return `The ${a} has unexpected type of "${ct(t)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const o = Object.keys(t).filter((u) => !e.hasOwnProperty(u) && !n[u]);
  if (o.forEach((u) => {
    n[u] = !0;
  }), !(r && r.type === qt.REPLACE) && o.length > 0)
    return `Unexpected ${o.length > 1 ? "keys" : "key"} "${o.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function Qc(t) {
  Object.keys(t).forEach((e) => {
    const r = t[e];
    if (typeof r(void 0, {
      type: qt.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ne(12) : `The slice reducer for key "${e}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: qt.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ne(13) : `The slice reducer for key "${e}" returned undefined when probed with a random type. Don't try to handle '${qt.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function js(t) {
  const e = Object.keys(t), r = {};
  for (let o = 0; o < e.length; o++) {
    const u = e[o];
    process.env.NODE_ENV !== "production" && typeof t[u] > "u" && ka(`No reducer provided for key "${u}"`), typeof t[u] == "function" && (r[u] = t[u]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let a;
  try {
    Qc(r);
  } catch (o) {
    a = o;
  }
  return function(u = {}, l) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const m = Yc(u, r, l, i);
      m && ka(m);
    }
    let h = !1;
    const f = {};
    for (let m = 0; m < n.length; m++) {
      const g = n[m], b = r[g], _ = u[g], E = b(_, l);
      if (typeof E > "u") {
        const T = l && l.type;
        throw new Error(process.env.NODE_ENV === "production" ? Ne(14) : `When called with an action of type ${T ? `"${String(T)}"` : "(unknown type)"}, the slice reducer for key "${g}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[g] = E, h = h || E !== _;
    }
    return h = h || n.length !== Object.keys(u).length, h ? f : u;
  };
}
function Ia(t, e) {
  return function(...r) {
    return e(t.apply(this, r));
  };
}
function Zc(t, e) {
  if (typeof t == "function")
    return Ia(t, e);
  if (typeof t != "object" || t === null)
    throw new Error(process.env.NODE_ENV === "production" ? Ne(16) : `bindActionCreators expected an object or a function, but instead received: '${ct(t)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const r = {};
  for (const n in t) {
    const i = t[n];
    typeof i == "function" && (r[n] = Ia(i, e));
  }
  return r;
}
function Zr(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, r) => (...n) => e(r(...n)));
}
function Xc(...t) {
  return (e) => (r, n) => {
    const i = e(r, n);
    let a = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Ne(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const o = {
      getState: i.getState,
      dispatch: (l, ...h) => a(l, ...h)
    }, u = t.map((l) => l(o));
    return a = Zr(...u)(i.dispatch), {
      ...i,
      dispatch: a
    };
  };
}
function Vs(t) {
  return Tr(t) && "type" in t && typeof t.type == "string";
}
var Ls = Symbol.for("immer-nothing"), $a = Symbol.for("immer-draftable"), ze = Symbol.for("immer-state"), Jc = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(t) {
    return `The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`;
  },
  function(t) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`;
  },
  "This object has been frozen and should not be mutated",
  function(t) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(t) {
    return `'current' expects a draft, got: ${t}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(t) {
    return `'original' expects a draft, got: ${t}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function je(t, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const r = Jc[t], n = typeof r == "function" ? r.apply(null, e) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ur = Object.getPrototypeOf;
function $t(t) {
  return !!t && !!t[ze];
}
function ft(t) {
  var e;
  return t ? Bs(t) || Array.isArray(t) || !!t[$a] || !!((e = t.constructor) != null && e[$a]) || un(t) || cn(t) : !1;
}
var el = Object.prototype.constructor.toString();
function Bs(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = ur(t);
  if (e === null)
    return !0;
  const r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === el;
}
function Xr(t, e) {
  on(t) === 0 ? Reflect.ownKeys(t).forEach((r) => {
    e(r, t[r], t);
  }) : t.forEach((r, n) => e(n, r, t));
}
function on(t) {
  const e = t[ze];
  return e ? e.type_ : Array.isArray(t) ? 1 : un(t) ? 2 : cn(t) ? 3 : 0;
}
function si(t, e) {
  return on(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function Us(t, e, r) {
  const n = on(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function tl(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function un(t) {
  return t instanceof Map;
}
function cn(t) {
  return t instanceof Set;
}
function Nt(t) {
  return t.copy_ || t.base_;
}
function oi(t, e) {
  if (un(t))
    return new Map(t);
  if (cn(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const r = Bs(t);
  if (e === !0 || e === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(t);
    delete n[ze];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: t[o]
      });
    }
    return Object.create(ur(t), n);
  } else {
    const n = ur(t);
    if (n !== null && r)
      return { ...t };
    const i = Object.create(n);
    return Object.assign(i, t);
  }
}
function Ti(t, e = !1) {
  return ln(t) || $t(t) || !ft(t) || (on(t) > 1 && (t.set = t.add = t.clear = t.delete = rl), Object.freeze(t), e && Object.entries(t).forEach(([r, n]) => Ti(n, !0))), t;
}
function rl() {
  je(2);
}
function ln(t) {
  return Object.isFrozen(t);
}
var nl = {};
function Mt(t) {
  const e = nl[t];
  return e || je(0, t), e;
}
var vr;
function zs() {
  return vr;
}
function il(t, e) {
  return {
    drafts_: [],
    parent_: t,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Ma(t, e) {
  e && (Mt("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = e);
}
function ui(t) {
  ci(t), t.drafts_.forEach(al), t.drafts_ = null;
}
function ci(t) {
  t === vr && (vr = t.parent_);
}
function Fa(t) {
  return vr = il(vr, t);
}
function al(t) {
  const e = t[ze];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function ja(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const r = e.drafts_[0];
  return t !== void 0 && t !== r ? (r[ze].modified_ && (ui(e), je(4)), ft(t) && (t = Jr(e, t), e.parent_ || en(e, t)), e.patches_ && Mt("Patches").generateReplacementPatches_(
    r[ze].base_,
    t,
    e.patches_,
    e.inversePatches_
  )) : t = Jr(e, r, []), ui(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), t !== Ls ? t : void 0;
}
function Jr(t, e, r) {
  if (ln(e))
    return e;
  const n = e[ze];
  if (!n)
    return Xr(
      e,
      (i, a) => Va(t, n, e, i, a, r)
    ), e;
  if (n.scope_ !== t)
    return e;
  if (!n.modified_)
    return en(t, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let a = i, o = !1;
    n.type_ === 3 && (a = new Set(i), i.clear(), o = !0), Xr(
      a,
      (u, l) => Va(t, n, i, u, l, r, o)
    ), en(t, i, !1), r && t.patches_ && Mt("Patches").generatePatches_(
      n,
      r,
      t.patches_,
      t.inversePatches_
    );
  }
  return n.copy_;
}
function Va(t, e, r, n, i, a, o) {
  if (process.env.NODE_ENV !== "production" && i === r && je(5), $t(i)) {
    const u = a && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !si(e.assigned_, n) ? a.concat(n) : void 0, l = Jr(t, i, u);
    if (Us(r, n, l), $t(l))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else o && r.add(i);
  if (ft(i) && !ln(i)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    Jr(t, i), (!e || !e.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && en(t, i);
  }
}
function en(t, e, r = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && Ti(e, r);
}
function sl(t, e) {
  const r = Array.isArray(t), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : zs(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: t,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, a = Ni;
  r && (i = [n], a = Sr);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, u;
}
var Ni = {
  get(t, e) {
    if (e === ze)
      return t;
    const r = Nt(t);
    if (!si(r, e))
      return ol(t, r, e);
    const n = r[e];
    return t.finalized_ || !ft(n) ? n : n === zn(t.base_, e) ? (Gn(t), t.copy_[e] = di(n, t)) : n;
  },
  has(t, e) {
    return e in Nt(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(Nt(t));
  },
  set(t, e, r) {
    const n = Gs(Nt(t), e);
    if (n != null && n.set)
      return n.set.call(t.draft_, r), !0;
    if (!t.modified_) {
      const i = zn(Nt(t), e), a = i == null ? void 0 : i[ze];
      if (a && a.base_ === r)
        return t.copy_[e] = r, t.assigned_[e] = !1, !0;
      if (tl(r, i) && (r !== void 0 || si(t.base_, e)))
        return !0;
      Gn(t), li(t);
    }
    return t.copy_[e] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || e in t.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(t.copy_[e]) || (t.copy_[e] = r, t.assigned_[e] = !0), !0;
  },
  deleteProperty(t, e) {
    return zn(t.base_, e) !== void 0 || e in t.base_ ? (t.assigned_[e] = !1, Gn(t), li(t)) : delete t.assigned_[e], t.copy_ && delete t.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, e) {
    const r = Nt(t), n = Reflect.getOwnPropertyDescriptor(r, e);
    return n && {
      writable: !0,
      configurable: t.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: r[e]
    };
  },
  defineProperty() {
    je(11);
  },
  getPrototypeOf(t) {
    return ur(t.base_);
  },
  setPrototypeOf() {
    je(12);
  }
}, Sr = {};
Xr(Ni, (t, e) => {
  Sr[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
Sr.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && je(13), Sr.set.call(this, t, e, void 0);
};
Sr.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && je(14), Ni.set.call(this, t[0], e, r, t[0]);
};
function zn(t, e) {
  const r = t[ze];
  return (r ? Nt(r) : t)[e];
}
function ol(t, e, r) {
  var i;
  const n = Gs(e, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(t.draft_)
  ) : void 0;
}
function Gs(t, e) {
  if (!(e in t))
    return;
  let r = ur(t);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, e);
    if (n)
      return n;
    r = ur(r);
  }
}
function li(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && li(t.parent_));
}
function Gn(t) {
  t.copy_ || (t.copy_ = oi(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var ul = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, r, n) => {
      if (typeof e == "function" && typeof r != "function") {
        const a = r;
        r = e;
        const o = this;
        return function(l = a, ...h) {
          return o.produce(l, (f) => r.call(this, f, ...h));
        };
      }
      typeof r != "function" && je(6), n !== void 0 && typeof n != "function" && je(7);
      let i;
      if (ft(e)) {
        const a = Fa(this), o = di(e, void 0);
        let u = !0;
        try {
          i = r(o), u = !1;
        } finally {
          u ? ui(a) : ci(a);
        }
        return Ma(a, n), ja(i, a);
      } else if (!e || typeof e != "object") {
        if (i = r(e), i === void 0 && (i = e), i === Ls && (i = void 0), this.autoFreeze_ && Ti(i, !0), n) {
          const a = [], o = [];
          Mt("Patches").generateReplacementPatches_(e, i, a, o), n(a, o);
        }
        return i;
      } else
        je(1, e);
    }, this.produceWithPatches = (e, r) => {
      if (typeof e == "function")
        return (o, ...u) => this.produceWithPatches(o, (l) => e(l, ...u));
      let n, i;
      return [this.produce(e, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    ft(t) || je(8), $t(t) && (t = cl(t));
    const e = Fa(this), r = di(t, void 0);
    return r[ze].isManual_ = !0, ci(e), r;
  }
  finishDraft(t, e) {
    const r = t && t[ze];
    (!r || !r.isManual_) && je(9);
    const { scope_: n } = r;
    return Ma(n, e), ja(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, e) {
    let r;
    for (r = e.length - 1; r >= 0; r--) {
      const i = e[r];
      if (i.path.length === 0 && i.op === "replace") {
        t = i.value;
        break;
      }
    }
    r > -1 && (e = e.slice(r + 1));
    const n = Mt("Patches").applyPatches_;
    return $t(t) ? n(t, e) : this.produce(
      t,
      (i) => n(i, e)
    );
  }
};
function di(t, e) {
  const r = un(t) ? Mt("MapSet").proxyMap_(t, e) : cn(t) ? Mt("MapSet").proxySet_(t, e) : sl(t, e);
  return (e ? e.scope_ : zs()).drafts_.push(r), r;
}
function cl(t) {
  return $t(t) || je(10, t), Ws(t);
}
function Ws(t) {
  if (!ft(t) || ln(t))
    return t;
  const e = t[ze];
  let r;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, r = oi(t, e.scope_.immer_.useStrictShallowCopy_);
  } else
    r = oi(t, !0);
  return Xr(r, (n, i) => {
    Us(r, n, Ws(i));
  }), e && (e.finalized_ = !1), r;
}
var Ge = new ul(), Ks = Ge.produce;
Ge.produceWithPatches.bind(
  Ge
);
Ge.setAutoFreeze.bind(Ge);
Ge.setUseStrictShallowCopy.bind(Ge);
Ge.applyPatches.bind(Ge);
Ge.createDraft.bind(Ge);
Ge.finishDraft.bind(Ge);
function Hs(t) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, t) : i(a);
}
var ll = Hs(), dl = Hs, fl = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Zr : Zr.apply(null, arguments);
}, hl = (t) => t && typeof t.match == "function";
function La(t, e) {
  function r(...n) {
    if (e) {
      let i = e(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? de(0) : "prepareAction did not return an object");
      return {
        type: t,
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
      type: t,
      payload: n[0]
    };
  }
  return r.toString = () => `${t}`, r.type = t, r.match = (n) => Vs(n) && n.type === t, r;
}
function pl(t) {
  return typeof t == "function" && "type" in t && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  hl(t);
}
function ml(t) {
  const e = t ? `${t}`.split("/") : [], r = e[e.length - 1] || "actionCreator";
  return `Detected an action creator with type "${t || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function yl(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: e = pl
  } = t;
  return () => (r) => (n) => (e(n) && console.warn(ml(n.type)), r(n));
}
function Ys(t, e) {
  let r = 0;
  return {
    measureTime(n) {
      const i = Date.now();
      try {
        return n();
      } finally {
        const a = Date.now();
        r += a - i;
      }
    },
    warnIfExceeded() {
      r > t && console.warn(`${e} took ${r}ms, which is more than the warning threshold of ${t}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Qs = class mr extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, mr.prototype);
  }
  static get [Symbol.species]() {
    return mr;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new mr(...e[0].concat(this)) : new mr(...e.concat(this));
  }
};
function Ba(t) {
  return ft(t) ? Ks(t, () => {
  }) : t;
}
function Ua(t, e, r) {
  if (t.has(e)) {
    let i = t.get(e);
    return r.update && (i = r.update(i, e, t), t.set(e, i)), i;
  }
  if (!r.insert) throw new Error(process.env.NODE_ENV === "production" ? de(10) : "No insert provided for key not already in map");
  const n = r.insert(e, t);
  return t.set(e, n), n;
}
function gl(t) {
  return typeof t != "object" || t == null || Object.isFrozen(t);
}
function bl(t, e, r) {
  const n = Zs(t, e, r);
  return {
    detectMutations() {
      return Xs(t, e, n, r);
    }
  };
}
function Zs(t, e = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const a = {
    value: r
  };
  if (!t(r) && !i.has(r)) {
    i.add(r), a.children = {};
    for (const o in r) {
      const u = n ? n + "." + o : o;
      e.length && e.indexOf(u) !== -1 || (a.children[o] = Zs(t, e, r[o], u));
    }
  }
  return a;
}
function Xs(t, e = [], r, n, i = !1, a = "") {
  const o = r ? r.value : void 0, u = o === n;
  if (i && !u && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: a
    };
  if (t(o) || t(n))
    return {
      wasMutated: !1
    };
  const l = {};
  for (let f in r.children)
    l[f] = !0;
  for (let f in n)
    l[f] = !0;
  const h = e.length > 0;
  for (let f in l) {
    const m = a ? a + "." + f : f;
    if (h && e.some((_) => _ instanceof RegExp ? _.test(m) : m === _))
      continue;
    const g = Xs(t, e, r.children[f], n[f], u, m);
    if (g.wasMutated)
      return g;
  }
  return {
    wasMutated: !1
  };
}
function vl(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (e) => (r) => e(r);
  {
    let e = function(u, l, h, f) {
      return JSON.stringify(u, r(l, f), h);
    }, r = function(u, l) {
      let h = [], f = [];
      return l || (l = function(m, g) {
        return h[0] === g ? "[Circular ~]" : "[Circular ~." + f.slice(0, h.indexOf(g)).join(".") + "]";
      }), function(m, g) {
        if (h.length > 0) {
          var b = h.indexOf(this);
          ~b ? h.splice(b + 1) : h.push(this), ~b ? f.splice(b, 1 / 0, m) : f.push(m), ~h.indexOf(g) && (g = l.call(this, m, g));
        } else h.push(g);
        return u == null ? g : u.call(this, m, g);
      };
    }, {
      isImmutable: n = gl,
      ignoredPaths: i,
      warnAfter: a = 32
    } = t;
    const o = bl.bind(null, n, i);
    return ({
      getState: u
    }) => {
      let l = u(), h = o(l), f;
      return (m) => (g) => {
        const b = Ys(a, "ImmutableStateInvariantMiddleware");
        b.measureTime(() => {
          if (l = u(), f = h.detectMutations(), h = o(l), f.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? de(19) : `A state mutation was detected between dispatches, in the path '${f.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const _ = m(g);
        return b.measureTime(() => {
          if (l = u(), f = h.detectMutations(), h = o(l), f.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? de(20) : `A state mutation was detected inside a dispatch, in the path: ${f.path || ""}. Take a look at the reducer(s) handling the action ${e(g)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), b.warnIfExceeded(), _;
      };
    };
  }
}
function Js(t) {
  const e = typeof t;
  return t == null || e === "string" || e === "boolean" || e === "number" || Array.isArray(t) || Tr(t);
}
function fi(t, e = "", r = Js, n, i = [], a) {
  let o;
  if (!r(t))
    return {
      keyPath: e || "<root>",
      value: t
    };
  if (typeof t != "object" || t === null || a != null && a.has(t)) return !1;
  const u = n != null ? n(t) : Object.entries(t), l = i.length > 0;
  for (const [h, f] of u) {
    const m = e ? e + "." + h : h;
    if (!(l && i.some((b) => b instanceof RegExp ? b.test(m) : m === b))) {
      if (!r(f))
        return {
          keyPath: m,
          value: f
        };
      if (typeof f == "object" && (o = fi(f, m, r, n, i, a), o))
        return o;
    }
  }
  return a && eo(t) && a.add(t), !1;
}
function eo(t) {
  if (!Object.isFrozen(t)) return !1;
  for (const e of Object.values(t))
    if (!(typeof e != "object" || e === null) && !eo(e))
      return !1;
  return !0;
}
function Sl(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (e) => (r) => e(r);
  {
    const {
      isSerializable: e = Js,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: a = [],
      warnAfter: o = 32,
      ignoreState: u = !1,
      ignoreActions: l = !1,
      disableCache: h = !1
    } = t, f = !h && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (m) => (g) => (b) => {
      if (!Vs(b))
        return g(b);
      const _ = g(b), E = Ys(o, "SerializableStateInvariantMiddleware");
      return !l && !(n.length && n.indexOf(b.type) !== -1) && E.measureTime(() => {
        const T = fi(b, "", e, r, i, f);
        if (T) {
          const {
            keyPath: A,
            value: k
          } = T;
          console.error(`A non-serializable value was detected in an action, in the path: \`${A}\`. Value:`, k, `
Take a look at the logic that dispatched this action: `, b, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), u || (E.measureTime(() => {
        const T = m.getState(), A = fi(T, "", e, r, a, f);
        if (A) {
          const {
            keyPath: k,
            value: S
          } = A;
          console.error(`A non-serializable value was detected in the state, in the path: \`${k}\`. Value:`, S, `
Take a look at the reducer(s) handling this action type: ${b.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), E.warnIfExceeded()), _;
    };
  }
}
function Br(t) {
  return typeof t == "boolean";
}
var wl = () => function(e) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: a = !0
  } = e ?? {};
  let o = new Qs();
  if (r && (Br(r) ? o.push(ll) : o.push(dl(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let u = {};
      Br(n) || (u = n), o.unshift(vl(u));
    }
    if (i) {
      let u = {};
      Br(i) || (u = i), o.push(Sl(u));
    }
    if (a) {
      let u = {};
      Br(a) || (u = a), o.unshift(yl(u));
    }
  }
  return o;
}, El = "RTK_autoBatch", to = (t) => (e) => {
  setTimeout(e, t);
}, _l = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : to(10), Cl = (t = {
  type: "raf"
}) => (e) => (...r) => {
  const n = e(...r);
  let i = !0, a = !1, o = !1;
  const u = /* @__PURE__ */ new Set(), l = t.type === "tick" ? queueMicrotask : t.type === "raf" ? _l : t.type === "callback" ? t.queueNotification : to(t.timeout), h = () => {
    o = !1, a && (a = !1, u.forEach((f) => f()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const m = () => i && f(), g = n.subscribe(m);
      return u.add(f), () => {
        g(), u.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var m;
      try {
        return i = !((m = f == null ? void 0 : f.meta) != null && m[El]), a = !i, a && (o || (o = !0, l(h))), n.dispatch(f);
      } finally {
        i = !0;
      }
    }
  });
}, Ol = (t) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new Qs(t);
  return n && i.push(Cl(typeof n == "object" ? n : void 0)), i;
};
function Pi(t) {
  const e = wl(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    preloadedState: a = void 0,
    enhancers: o = void 0
  } = t || {};
  let u;
  if (typeof r == "function")
    u = r;
  else if (Tr(r))
    u = js(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? de(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? de(2) : "`middleware` field must be a callback");
  let l;
  if (typeof n == "function") {
    if (l = n(e), process.env.NODE_ENV !== "production" && !Array.isArray(l))
      throw new Error(process.env.NODE_ENV === "production" ? de(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    l = e();
  if (process.env.NODE_ENV !== "production" && l.some((_) => typeof _ != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? de(4) : "each middleware provided to configureStore must be a function");
  let h = Zr;
  i && (h = fl({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const f = Xc(...l), m = Ol(f);
  if (process.env.NODE_ENV !== "production" && o && typeof o != "function")
    throw new Error(process.env.NODE_ENV === "production" ? de(5) : "`enhancers` field must be a callback");
  let g = typeof o == "function" ? o(m) : m();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(g))
    throw new Error(process.env.NODE_ENV === "production" ? de(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && g.some((_) => typeof _ != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? de(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && l.length && !g.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const b = h(...g);
  return Fs(u, a, b);
}
function ro(t) {
  const e = {}, r = [];
  let n;
  const i = {
    addCase(a, o) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? de(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? de(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const u = typeof a == "string" ? a : a.type;
      if (!u)
        throw new Error(process.env.NODE_ENV === "production" ? de(28) : "`builder.addCase` cannot be called with an empty action type");
      if (u in e)
        throw new Error(process.env.NODE_ENV === "production" ? de(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${u}'`);
      return e[u] = o, i;
    },
    addMatcher(a, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? de(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: a,
        reducer: o
      }), i;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? de(31) : "`builder.addDefaultCase` can only be called once");
      return n = a, i;
    }
  };
  return t(i), [e, r, n];
}
function Tl(t) {
  return typeof t == "function";
}
function Nl(t, e) {
  if (process.env.NODE_ENV !== "production" && typeof e == "object")
    throw new Error(process.env.NODE_ENV === "production" ? de(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = ro(e), a;
  if (Tl(t))
    a = () => Ba(t());
  else {
    const u = Ba(t);
    a = () => u;
  }
  function o(u = a(), l) {
    let h = [r[l.type], ...n.filter(({
      matcher: f
    }) => f(l)).map(({
      reducer: f
    }) => f)];
    return h.filter((f) => !!f).length === 0 && (h = [i]), h.reduce((f, m) => {
      if (m)
        if ($t(f)) {
          const b = m(f, l);
          return b === void 0 ? f : b;
        } else {
          if (ft(f))
            return Ks(f, (g) => m(g, l));
          {
            const g = m(f, l);
            if (g === void 0) {
              if (f === null)
                return f;
              throw new Error(process.env.NODE_ENV === "production" ? de(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return g;
          }
        }
      return f;
    }, u);
  }
  return o.getInitialState = a, o;
}
var Pl = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function xl(t, e) {
  return `${t}/${e}`;
}
function Rl({
  creators: t
} = {}) {
  var r;
  const e = (r = t == null ? void 0 : t.asyncThunk) == null ? void 0 : r[Pl];
  return function(i) {
    const {
      name: a,
      reducerPath: o = a
    } = i;
    if (!a)
      throw new Error(process.env.NODE_ENV === "production" ? de(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const u = (typeof i.reducers == "function" ? i.reducers(Dl()) : i.reducers) || {}, l = Object.keys(u), h = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(S, x) {
        const v = typeof S == "string" ? S : S.type;
        if (!v)
          throw new Error(process.env.NODE_ENV === "production" ? de(12) : "`context.addCase` cannot be called with an empty action type");
        if (v in h.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? de(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + v);
        return h.sliceCaseReducersByType[v] = x, f;
      },
      addMatcher(S, x) {
        return h.sliceMatchers.push({
          matcher: S,
          reducer: x
        }), f;
      },
      exposeAction(S, x) {
        return h.actionCreators[S] = x, f;
      },
      exposeCaseReducer(S, x) {
        return h.sliceCaseReducersByName[S] = x, f;
      }
    };
    l.forEach((S) => {
      const x = u[S], v = {
        reducerName: S,
        type: xl(a, S),
        createNotation: typeof i.reducers == "function"
      };
      kl(x) ? $l(v, x, f, e) : ql(v, x, f);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? de(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [S = {}, x = [], v = void 0] = typeof i.extraReducers == "function" ? ro(i.extraReducers) : [i.extraReducers], j = {
        ...S,
        ...h.sliceCaseReducersByType
      };
      return Nl(i.initialState, (Z) => {
        for (let L in j)
          Z.addCase(L, j[L]);
        for (let L of h.sliceMatchers)
          Z.addMatcher(L.matcher, L.reducer);
        for (let L of x)
          Z.addMatcher(L.matcher, L.reducer);
        v && Z.addDefaultCase(v);
      });
    }
    const g = (S) => S, b = /* @__PURE__ */ new Map();
    let _;
    function E(S, x) {
      return _ || (_ = m()), _(S, x);
    }
    function T() {
      return _ || (_ = m()), _.getInitialState();
    }
    function A(S, x = !1) {
      function v(Z) {
        let L = Z[S];
        if (typeof L > "u") {
          if (x)
            L = T();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? de(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return L;
      }
      function j(Z = g) {
        const L = Ua(b, x, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Ua(L, Z, {
          insert: () => {
            const d = {};
            for (const [F, V] of Object.entries(i.selectors ?? {}))
              d[F] = Al(V, Z, T, x);
            return d;
          }
        });
      }
      return {
        reducerPath: S,
        getSelectors: j,
        get selectors() {
          return j(v);
        },
        selectSlice: v
      };
    }
    const k = {
      name: a,
      reducer: E,
      actions: h.actionCreators,
      caseReducers: h.sliceCaseReducersByName,
      getInitialState: T,
      ...A(o),
      injectInto(S, {
        reducerPath: x,
        ...v
      } = {}) {
        const j = x ?? o;
        return S.inject({
          reducerPath: j,
          reducer: E
        }, v), {
          ...k,
          ...A(j, !0)
        };
      }
    };
    return k;
  };
}
function Al(t, e, r, n) {
  function i(a, ...o) {
    let u = e(a);
    if (typeof u > "u") {
      if (n)
        u = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? de(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(u, ...o);
  }
  return i.unwrapped = t, i;
}
var be = /* @__PURE__ */ Rl();
function Dl() {
  function t(e, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: e,
      ...r
    };
  }
  return t.withTypes = () => t, {
    reducer(e) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [e.name](...r) {
          return e(...r);
        }
      }[e.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(e, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: e,
        reducer: r
      };
    },
    asyncThunk: t
  };
}
function ql({
  type: t,
  reducerName: e,
  createNotation: r
}, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !Il(n))
      throw new Error(process.env.NODE_ENV === "production" ? de(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = n.reducer, o = n.prepare;
  } else
    a = n;
  i.addCase(t, a).exposeCaseReducer(e, a).exposeAction(e, o ? La(t, o) : La(t));
}
function kl(t) {
  return t._reducerDefinitionType === "asyncThunk";
}
function Il(t) {
  return t._reducerDefinitionType === "reducerWithPrepare";
}
function $l({
  type: t,
  reducerName: e
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? de(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: a,
    fulfilled: o,
    pending: u,
    rejected: l,
    settled: h,
    options: f
  } = r, m = i(t, a, f);
  n.exposeAction(e, m), o && n.addCase(m.fulfilled, o), u && n.addCase(m.pending, u), l && n.addCase(m.rejected, l), h && n.addMatcher(m.settled, h), n.exposeCaseReducer(e, {
    fulfilled: o || Ur,
    pending: u || Ur,
    rejected: l || Ur,
    settled: h || Ur
  });
}
function Ur() {
}
function de(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
const em = {
  //Roles
  ROLE_ADMIN: "ADMIN",
  ROLE_SUPERADMIN: "SUPERADMIN",
  ROLE_EMPLOYEE: "EMPLOYEE",
  ROLE_SENIOR: "SENIOR",
  ROLE_MANAGER: "MANAGER",
  //Department
  DEPT_ADMIN: "administrator",
  DEPT_PURCHASE: "purchase",
  DEPT_INVENTORY: "inventory",
  DEPT_SALES: "sales",
  //Sign In
  REMEMBER_ME: "Remember Me",
  SIGNING_IN: "Signing In...",
  SIGN_IN: "Sign In",
  SIGN_IN_ERROR: "Failed to sign in",
  USING_MOB_NO: "Sign in using mobile number",
  USING_EMAIL: "Sign in using email",
  MOB_NO: "Mobile Number",
  EMAIL: "Email",
  PASSWORD: "Password"
}, Ml = {
  AUTH: "auth",
  LAYOUT: "layout",
  PREVIEW: "preview"
}, tm = {
  SIGN_IN: "/"
}, Fl = {
  isLoggedIn: !1,
  showPassword: !1,
  signinMethod: "email",
  deptId: "",
  loggedInUserInfo: null
}, no = be({
  name: Ml.AUTH,
  initialState: Fl,
  reducers: {
    setShowPassword: (t) => {
      t.showPassword = !t.showPassword;
    },
    setSigninMethod: (t, e) => {
      t.signinMethod = e.payload;
    },
    setTokens: (t, e) => {
      localStorage.setItem("access_token", e.payload.access_token), localStorage.setItem("refresh_token", e.payload.refresh_token), t.isLoggedIn = !!e.payload;
    },
    setDeptId: (t, e) => {
      t.deptId = e.payload;
    },
    checkAuth: (t) => {
      const e = localStorage.getItem("access_token");
      t.isLoggedIn = !!e;
    },
    setLoggedInUserInfo: (t, e) => {
      t.loggedInUserInfo = e.payload;
    }
  }
}), { setShowPassword: jl, setSigninMethod: Vl, checkAuth: Ll, setDeptId: Bl, setTokens: Ul, setLoggedInUserInfo: zl } = no.actions, rm = (t) => t.auth, Gl = { setShowPassword: jl, setSigninMethod: Vl, checkAuth: Ll, setTokens: Ul, setLoggedInUserInfo: zl, setDeptId: Bl }, Wl = no.reducer, Kl = {
  mobileOpen: !1,
  isClosing: !1,
  pageTitle: "Dashboard"
}, io = be({
  name: "layout",
  initialState: Kl,
  reducers: {
    setMobileOpen: (t, e) => {
      t.mobileOpen = e.payload;
    },
    setIsClosing: (t, e) => {
      t.isClosing = e.payload;
    },
    setPageTitle: (t, e) => {
      t.pageTitle = e.payload;
    }
  }
}), { setMobileOpen: Hl, setIsClosing: Yl, setPageTitle: Ql } = io.actions, Zl = { setMobileOpen: Hl, setIsClosing: Yl, setPageTitle: Ql }, nm = (t) => t.layout.mobileOpen, im = (t) => t.layout.isClosing, am = (t) => t.layout.pageTitle, Xl = io.reducer, Jl = {
  preview: !1
}, ao = be({
  name: "preview",
  initialState: Jl,
  reducers: {
    setPreview: (t, e) => {
      t.preview = e.payload;
    }
  }
}), { setPreview: ed } = ao.actions, td = { setPreview: ed }, sm = (t) => t.preview.preview, rd = ao.reducer, om = () => {
  const t = Ms();
  return Zc({
    ...Gl,
    ...Zl,
    ...td
  }, t);
}, nd = {
  auth: Wl,
  layout: Xl,
  preview: rd
}, id = {
  rfpa: [],
  selectedRFPA: void 0,
  previewRFPA: void 0
}, so = be({
  name: "rfpaData",
  initialState: id,
  reducers: {
    setRFPAData: (t, e) => {
      t.rfpa = e.payload;
    },
    setSelectedRFPA: (t, e) => {
      t.selectedRFPA = e.payload;
    },
    setPreviewRFPA: (t, e) => {
      t.previewRFPA = e.payload;
    }
  }
});
so.actions;
const oo = so.reducer, ad = {
  dealSlip: [],
  selectedDealSlip: void 0
}, uo = be({
  name: "dealSlipData",
  initialState: ad,
  reducers: {
    setDealSlipData: (t, e) => {
      t.dealSlip = e.payload;
    },
    setSelectedDealSlip: (t, e) => {
      t.selectedDealSlip = e.payload;
    }
  }
});
uo.actions;
const co = uo.reducer, sd = {
  grn: [],
  selectedGRN: void 0,
  previewGRN: void 0,
  subTotalAmt: 0,
  totalAmt: 0,
  totAmtWords: ""
}, lo = be({
  name: "grnData",
  initialState: sd,
  reducers: {
    setGRNData: (t, e) => {
      t.grn = e.payload;
    },
    setSelectedGRN: (t, e) => {
      t.selectedGRN = e.payload;
    },
    setPreviewGRN: (t, e) => {
      t.previewGRN = e.payload;
    },
    setSubTotalAmt: (t, e) => {
      t.subTotalAmt = e.payload;
    },
    setTotalAmt: (t, e) => {
      t.totalAmt = e.payload;
    },
    setTotAmtWords: (t, e) => {
      t.totAmtWords = e.payload;
    }
  }
});
lo.actions;
const fo = lo.reducer, od = {
  mcVouchers: [],
  selectedMCVoucher: void 0,
  previewMCVoucher: void 0
}, ho = be({
  name: "mc_voucher",
  initialState: od,
  reducers: {
    setMCVouchers: (t, e) => {
      t.mcVouchers = e.payload;
    },
    setSelectedMCVoucher: (t, e) => {
      t.selectedMCVoucher = e.payload;
    },
    setPreviewMCVoucher: (t, e) => {
      t.previewMCVoucher = e.payload;
    }
  }
});
ho.actions;
const po = ho.reducer, ud = {
  lpVouchers: [],
  selectedLPVoucher: void 0,
  previewLPVoucher: void 0
}, mo = be({
  name: "lp_voucher",
  initialState: ud,
  reducers: {
    setLPVouchers: (t, e) => {
      t.lpVouchers = e.payload;
    },
    setSelectedLPVoucher: (t, e) => {
      t.selectedLPVoucher = e.payload;
    },
    setPreviewLPVoucher: (t, e) => {
      t.previewLPVoucher = e.payload;
    }
  }
});
mo.actions;
const yo = mo.reducer, cd = {
  pmpVouchers: [],
  selectedPMPVoucher: void 0,
  previewPMPVoucher: void 0
}, go = be({
  name: "pmp_voucher",
  initialState: cd,
  reducers: {
    setPMPVouchers: (t, e) => {
      t.pmpVouchers = e.payload;
    },
    setSelectedPMPVoucher: (t, e) => {
      t.selectedPMPVoucher = e.payload;
    },
    setPreviewPMPVoucher: (t, e) => {
      t.previewPMPVoucher = e.payload;
    }
  }
});
go.actions;
const bo = go.reducer, ld = {
  tpVouchers: [],
  selectedTPVoucher: void 0,
  previewTPVoucher: void 0
}, vo = be({
  name: "tp_voucher",
  initialState: ld,
  reducers: {
    setTPVouchers: (t, e) => {
      t.tpVouchers = e.payload;
    },
    setSelectedTPVoucher: (t, e) => {
      t.selectedTPVoucher = e.payload;
    },
    setPreviewTPVoucher: (t, e) => {
      t.previewTPVoucher = e.payload;
    }
  }
});
vo.actions;
const So = vo.reducer, dd = {
  dcs: [],
  selectedDC: void 0,
  previewDC: void 0
}, wo = be({
  name: "delivery_challan",
  initialState: dd,
  reducers: {
    setDCs: (t, e) => {
      t.dcs = e.payload;
    },
    setSelectedDC: (t, e) => {
      t.selectedDC = e.payload;
    },
    setPreviewDC: (t, e) => {
      t.previewDC = e.payload;
    }
  }
});
wo.actions;
const Eo = wo.reducer, fd = {
  paymentReq: [],
  selectedPaymentReq: void 0,
  previewPaymentReq: void 0
}, _o = be({
  name: "payment_request",
  initialState: fd,
  reducers: {
    setPaymentReqs: (t, e) => {
      t.paymentReq = e.payload;
    },
    setSelectedPaymentReq: (t, e) => {
      t.selectedPaymentReq = e.payload;
    },
    setPreviewPaymentReq: (t, e) => {
      t.previewPaymentReq = e.payload;
    }
  }
});
_o.actions;
const Co = _o.reducer;
Pi({
  reducer: {
    rfpaData: oo,
    dealSlipData: co,
    grnData: fo,
    mc_voucher: po,
    lp_voucher: yo,
    tp_voucher: So,
    pmp_voucher: bo,
    delivery_challan: Eo,
    payment_request: Co
  }
});
function Ft(t) {
  this._maxSize = t, this.clear();
}
Ft.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
Ft.prototype.get = function(t) {
  return this._values[t];
};
Ft.prototype.set = function(t, e) {
  return this._size >= this._maxSize && this.clear(), t in this._values || this._size++, this._values[t] = e;
};
var hd = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Oo = /^\d+$/, pd = /^\d/, md = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, yd = /^\s*(['"]?)(.*?)(\1)\s*$/, xi = 512, za = new Ft(xi), Ga = new Ft(xi), Wa = new Ft(xi), kt = {
  Cache: Ft,
  split: hi,
  normalizePath: Wn,
  setter: function(t) {
    var e = Wn(t);
    return Ga.get(t) || Ga.set(t, function(n, i) {
      for (var a = 0, o = e.length, u = n; a < o - 1; ) {
        var l = e[a];
        if (l === "__proto__" || l === "constructor" || l === "prototype")
          return n;
        u = u[e[a++]];
      }
      u[e[a]] = i;
    });
  },
  getter: function(t, e) {
    var r = Wn(t);
    return Wa.get(t) || Wa.set(t, function(i) {
      for (var a = 0, o = r.length; a < o; )
        if (i != null || !e) i = i[r[a++]];
        else return;
      return i;
    });
  },
  join: function(t) {
    return t.reduce(function(e, r) {
      return e + (Ri(r) || Oo.test(r) ? "[" + r + "]" : (e ? "." : "") + r);
    }, "");
  },
  forEach: function(t, e, r) {
    gd(Array.isArray(t) ? t : hi(t), e, r);
  }
};
function Wn(t) {
  return za.get(t) || za.set(
    t,
    hi(t).map(function(e) {
      return e.replace(yd, "$2");
    })
  );
}
function hi(t) {
  return t.match(hd) || [""];
}
function gd(t, e, r) {
  var n = t.length, i, a, o, u;
  for (a = 0; a < n; a++)
    i = t[a], i && (Sd(i) && (i = '"' + i + '"'), u = Ri(i), o = !u && /^\d+$/.test(i), e.call(r, i, u, o, a, t));
}
function Ri(t) {
  return typeof t == "string" && t && ["'", '"'].indexOf(t.charAt(0)) !== -1;
}
function bd(t) {
  return t.match(pd) && !t.match(Oo);
}
function vd(t) {
  return md.test(t);
}
function Sd(t) {
  return !Ri(t) && (bd(t) || vd(t));
}
const wd = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, dn = (t) => t.match(wd) || [], fn = (t) => t[0].toUpperCase() + t.slice(1), Ai = (t, e) => dn(t).join(e).toLowerCase(), To = (t) => dn(t).reduce(
  (e, r) => `${e}${e ? r[0].toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()}`,
  ""
), Ed = (t) => fn(To(t)), _d = (t) => Ai(t, "_"), Cd = (t) => Ai(t, "-"), Od = (t) => fn(Ai(t, " ")), Td = (t) => dn(t).map(fn).join(" ");
var Kn = {
  words: dn,
  upperFirst: fn,
  camelCase: To,
  pascalCase: Ed,
  snakeCase: _d,
  kebabCase: Cd,
  sentenceCase: Od,
  titleCase: Td
}, Di = { exports: {} };
Di.exports = function(t) {
  return No(Nd(t), t);
};
Di.exports.array = No;
function No(t, e) {
  var r = t.length, n = new Array(r), i = {}, a = r, o = Pd(e), u = xd(t);
  for (e.forEach(function(h) {
    if (!u.has(h[0]) || !u.has(h[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); a--; )
    i[a] || l(t[a], a, /* @__PURE__ */ new Set());
  return n;
  function l(h, f, m) {
    if (m.has(h)) {
      var g;
      try {
        g = ", node was:" + JSON.stringify(h);
      } catch {
        g = "";
      }
      throw new Error("Cyclic dependency" + g);
    }
    if (!u.has(h))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(h));
    if (!i[f]) {
      i[f] = !0;
      var b = o.get(h) || /* @__PURE__ */ new Set();
      if (b = Array.from(b), f = b.length) {
        m.add(h);
        do {
          var _ = b[--f];
          l(_, u.get(_), m);
        } while (f);
        m.delete(h);
      }
      n[--r] = h;
    }
  }
}
function Nd(t) {
  for (var e = /* @__PURE__ */ new Set(), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    e.add(i[0]), e.add(i[1]);
  }
  return Array.from(e);
}
function Pd(t) {
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    e.has(i[0]) || e.set(i[0], /* @__PURE__ */ new Set()), e.has(i[1]) || e.set(i[1], /* @__PURE__ */ new Set()), e.get(i[0]).add(i[1]);
  }
  return e;
}
function xd(t) {
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = t.length; r < n; r++)
    e.set(t[r], r);
  return e;
}
var Rd = Di.exports;
const Ad = /* @__PURE__ */ Ci(Rd), Dd = Object.prototype.toString, qd = Error.prototype.toString, kd = RegExp.prototype.toString, Id = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", $d = /^Symbol\((.*)\)(.*)$/;
function Md(t) {
  return t != +t ? "NaN" : t === 0 && 1 / t < 0 ? "-0" : "" + t;
}
function Ka(t, e = !1) {
  if (t == null || t === !0 || t === !1) return "" + t;
  const r = typeof t;
  if (r === "number") return Md(t);
  if (r === "string") return e ? `"${t}"` : t;
  if (r === "function") return "[Function " + (t.name || "anonymous") + "]";
  if (r === "symbol") return Id.call(t).replace($d, "Symbol($1)");
  const n = Dd.call(t).slice(8, -1);
  return n === "Date" ? isNaN(t.getTime()) ? "" + t : t.toISOString(t) : n === "Error" || t instanceof Error ? "[" + qd.call(t) + "]" : n === "RegExp" ? kd.call(t) : null;
}
function lt(t, e) {
  let r = Ka(t, e);
  return r !== null ? r : JSON.stringify(t, function(n, i) {
    let a = Ka(this[n], e);
    return a !== null ? a : i;
  }, 2);
}
function Po(t) {
  return t == null ? [] : [].concat(t);
}
let xo, Ro, Ao, Fd = /\$\{\s*(\w+)\s*\}/g;
xo = Symbol.toStringTag;
class Ha {
  constructor(e, r, n, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[xo] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = i, this.errors = [], this.inner = [], Po(e).forEach((a) => {
      if (Fe.isError(a)) {
        this.errors.push(...a.errors);
        const o = a.inner.length ? a.inner : [a];
        this.inner.push(...o);
      } else
        this.errors.push(a);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Ro = Symbol.hasInstance;
Ao = Symbol.toStringTag;
class Fe extends Error {
  static formatError(e, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Object.assign({}, r, {
      path: n
    })), typeof e == "string" ? e.replace(Fd, (i, a) => lt(r[a])) : typeof e == "function" ? e(r) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, r, n, i, a) {
    const o = new Ha(e, r, n, i);
    if (a)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Ao] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Fe);
  }
  static [Ro](e) {
    return Ha[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let tt = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: t,
    type: e,
    value: r,
    originalValue: n
  }) => {
    const i = n != null && n !== r ? ` (cast from the value \`${lt(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${t} must be a \`${e}\` type, but the final value was: \`${lt(r, !0)}\`` + i : `${t} must match the configured type. The validated value was: \`${lt(r, !0)}\`` + i;
  }
}, Me = {
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
}, yt = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, pi = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, mi = {
  isValue: "${path} field must be ${value}"
}, yi = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Yr = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, jd = {
  notType: (t) => {
    const {
      path: e,
      value: r,
      spec: n
    } = t, i = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < i) return `${e} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${lt(r, !0)}\``;
      if (r.length > i) return `${e} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${lt(r, !0)}\``;
    }
    return Fe.formatError(tt.notType, t);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: tt,
  string: Me,
  number: yt,
  date: pi,
  object: yi,
  array: Yr,
  boolean: mi,
  tuple: jd
});
const hn = (t) => t && t.__isYupSchema__;
class tn {
  static fromOptions(e, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: i,
      otherwise: a
    } = r, o = typeof n == "function" ? n : (...u) => u.every((l) => l === n);
    return new tn(e, (u, l) => {
      var h;
      let f = o(...u) ? i : a;
      return (h = f == null ? void 0 : f(l)) != null ? h : l;
    });
  }
  constructor(e, r) {
    this.fn = void 0, this.refs = e, this.refs = e, this.fn = r;
  }
  resolve(e, r) {
    let n = this.refs.map((a) => (
      // TODO: ? operator here?
      a.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)
    )), i = this.fn(n, e, r);
    if (i === void 0 || // @ts-ignore this can be base
    i === e)
      return e;
    if (!hn(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(r);
  }
}
const zr = {
  context: "$",
  value: "."
};
class jt {
  constructor(e, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === zr.context, this.isValue = this.key[0] === zr.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? zr.context : this.isValue ? zr.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && kt.getter(this.path, !0), this.map = r.map;
  }
  getValue(e, r, n) {
    let i = this.isContext ? n : this.isValue ? e : r;
    return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(e, r) {
    return this.getValue(e, r == null ? void 0 : r.parent, r == null ? void 0 : r.context);
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
  static isRef(e) {
    return e && e.__isYupRef;
  }
}
jt.prototype.__isYupRef = !0;
const Je = (t) => t == null;
function Gt(t) {
  function e({
    value: r,
    path: n = "",
    options: i,
    originalValue: a,
    schema: o
  }, u, l) {
    const {
      name: h,
      test: f,
      params: m,
      message: g,
      skipAbsent: b
    } = t;
    let {
      parent: _,
      context: E,
      abortEarly: T = o.spec.abortEarly,
      disableStackTrace: A = o.spec.disableStackTrace
    } = i;
    function k(V) {
      return jt.isRef(V) ? V.getValue(r, _, E) : V;
    }
    function S(V = {}) {
      const ee = Object.assign({
        value: r,
        originalValue: a,
        label: o.spec.label,
        path: V.path || n,
        spec: o.spec,
        disableStackTrace: V.disableStackTrace || A
      }, m, V.params);
      for (const me of Object.keys(ee)) ee[me] = k(ee[me]);
      const _e = new Fe(Fe.formatError(V.message || g, ee), r, ee.path, V.type || h, ee.disableStackTrace);
      return _e.params = ee, _e;
    }
    const x = T ? u : l;
    let v = {
      path: n,
      parent: _,
      type: h,
      from: i.from,
      createError: S,
      resolve: k,
      options: i,
      originalValue: a,
      schema: o
    };
    const j = (V) => {
      Fe.isError(V) ? x(V) : V ? l(null) : x(S());
    }, Z = (V) => {
      Fe.isError(V) ? x(V) : u(V);
    };
    if (b && Je(r))
      return j(!0);
    let d;
    try {
      var F;
      if (d = f.call(v, r, v), typeof ((F = d) == null ? void 0 : F.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${v.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(d).then(j, Z);
      }
    } catch (V) {
      Z(V);
      return;
    }
    j(d);
  }
  return e.OPTIONS = t, e;
}
function Vd(t, e, r, n = r) {
  let i, a, o;
  return e ? (kt.forEach(e, (u, l, h) => {
    let f = l ? u.slice(1, u.length - 1) : u;
    t = t.resolve({
      context: n,
      parent: i,
      value: r
    });
    let m = t.type === "tuple", g = h ? parseInt(f, 10) : 0;
    if (t.innerType || m) {
      if (m && !h) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && g >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);
      i = r, r = r && r[g], t = m ? t.spec.types[g] : t.innerType;
    }
    if (!h) {
      if (!t.fields || !t.fields[f]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);
      i = r, r = r && r[f], t = t.fields[f];
    }
    a = f, o = l ? "[" + u + "]" : "." + u;
  }), {
    schema: t,
    parent: i,
    parentPath: a
  }) : {
    parent: i,
    parentPath: e,
    schema: t
  };
}
class rn extends Set {
  describe() {
    const e = [];
    for (const r of this.values())
      e.push(jt.isRef(r) ? r.describe() : r);
    return e;
  }
  resolveAll(e) {
    let r = [];
    for (const n of this.values())
      r.push(e(n));
    return r;
  }
  clone() {
    return new rn(this.values());
  }
  merge(e, r) {
    const n = this.clone();
    return e.forEach((i) => n.add(i)), r.forEach((i) => n.delete(i)), n;
  }
}
function Zt(t, e = /* @__PURE__ */ new Map()) {
  if (hn(t) || !t || typeof t != "object") return t;
  if (e.has(t)) return e.get(t);
  let r;
  if (t instanceof Date)
    r = new Date(t.getTime()), e.set(t, r);
  else if (t instanceof RegExp)
    r = new RegExp(t), e.set(t, r);
  else if (Array.isArray(t)) {
    r = new Array(t.length), e.set(t, r);
    for (let n = 0; n < t.length; n++) r[n] = Zt(t[n], e);
  } else if (t instanceof Map) {
    r = /* @__PURE__ */ new Map(), e.set(t, r);
    for (const [n, i] of t.entries()) r.set(n, Zt(i, e));
  } else if (t instanceof Set) {
    r = /* @__PURE__ */ new Set(), e.set(t, r);
    for (const n of t) r.add(Zt(n, e));
  } else if (t instanceof Object) {
    r = {}, e.set(t, r);
    for (const [n, i] of Object.entries(t)) r[n] = Zt(i, e);
  } else
    throw Error(`Unable to clone ${t}`);
  return r;
}
class Ve {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new rn(), this._blacklist = new rn(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(tt.notType);
    }), this.type = e.type, this._typeCheck = e.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, e == null ? void 0 : e.spec), this.withMutation((r) => {
      r.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(e) {
    if (this._mutate)
      return e && Object.assign(this.spec, e), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Zt(Object.assign({}, this.spec, e)), r;
  }
  label(e) {
    let r = this.clone();
    return r.spec.label = e, r;
  }
  meta(...e) {
    if (e.length === 0) return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, e[0]), r;
  }
  withMutation(e) {
    let r = this._mutate;
    this._mutate = !0;
    let n = e(this);
    return this._mutate = r, n;
  }
  concat(e) {
    if (!e || e === this) return this;
    if (e.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);
    let r = this, n = e.clone();
    const i = Object.assign({}, r.spec, n.spec);
    return n.spec = i, n.internalTests = Object.assign({}, r.internalTests, n.internalTests), n._whitelist = r._whitelist.merge(e._whitelist, e._blacklist), n._blacklist = r._blacklist.merge(e._blacklist, e._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((a) => {
      e.tests.forEach((o) => {
        a.test(o.OPTIONS);
      });
    }), n.transforms = [...r.transforms, ...n.transforms], n;
  }
  isType(e) {
    return e == null ? !!(this.spec.nullable && e === null || this.spec.optional && e === void 0) : this._typeCheck(e);
  }
  resolve(e) {
    let r = this;
    if (r.conditions.length) {
      let n = r.conditions;
      r = r.clone(), r.conditions = [], r = n.reduce((i, a) => a.resolve(i, e), r), r = r.resolve(e);
    }
    return r;
  }
  resolveOptions(e) {
    var r, n, i, a;
    return Object.assign({}, e, {
      from: e.from || [],
      strict: (r = e.strict) != null ? r : this.spec.strict,
      abortEarly: (n = e.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (i = e.recursive) != null ? i : this.spec.recursive,
      disableStackTrace: (a = e.disableStackTrace) != null ? a : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(e, r = {}) {
    let n = this.resolve(Object.assign({
      value: e
    }, r)), i = r.assert === "ignore-optionality", a = n._cast(e, r);
    if (r.assert !== !1 && !n.isType(a)) {
      if (i && Je(a))
        return a;
      let o = lt(e), u = lt(a);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
` + (u !== o ? `result of cast: ${u}` : ""));
    }
    return a;
  }
  _cast(e, r) {
    let n = e === void 0 ? e : this.transforms.reduce((i, a) => a.call(this, i, e, this), e);
    return n === void 0 && (n = this.getDefault(r)), n;
  }
  _validate(e, r = {}, n, i) {
    let {
      path: a,
      originalValue: o = e,
      strict: u = this.spec.strict
    } = r, l = e;
    u || (l = this._cast(l, Object.assign({
      assert: !1
    }, r)));
    let h = [];
    for (let f of Object.values(this.internalTests))
      f && h.push(f);
    this.runTests({
      path: a,
      value: l,
      originalValue: o,
      options: r,
      tests: h
    }, n, (f) => {
      if (f.length)
        return i(f, l);
      this.runTests({
        path: a,
        value: l,
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
  runTests(e, r, n) {
    let i = !1, {
      tests: a,
      value: o,
      originalValue: u,
      path: l,
      options: h
    } = e, f = (E) => {
      i || (i = !0, r(E, o));
    }, m = (E) => {
      i || (i = !0, n(E, o));
    }, g = a.length, b = [];
    if (!g) return m([]);
    let _ = {
      value: o,
      originalValue: u,
      path: l,
      options: h,
      schema: this
    };
    for (let E = 0; E < a.length; E++) {
      const T = a[E];
      T(_, f, function(k) {
        k && (Array.isArray(k) ? b.push(...k) : b.push(k)), --g <= 0 && m(b);
      });
    }
  }
  asNestedTest({
    key: e,
    index: r,
    parent: n,
    parentPath: i,
    originalParent: a,
    options: o
  }) {
    const u = e ?? r;
    if (u == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const l = typeof u == "number";
    let h = n[u];
    const f = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: h,
      originalValue: a[u],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [l ? "index" : "key"]: u,
      path: l || u.includes(".") ? `${i || ""}[${l ? u : `"${u}"`}]` : (i ? `${i}.` : "") + e
    });
    return (m, g, b) => this.resolve(f)._validate(h, f, g, b);
  }
  validate(e, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: e
    })), a = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return new Promise((o, u) => i._validate(e, r, (l, h) => {
      Fe.isError(l) && (l.value = h), u(l);
    }, (l, h) => {
      l.length ? u(new Fe(l, h, void 0, void 0, a)) : o(h);
    }));
  }
  validateSync(e, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: e
    })), a, o = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return i._validate(e, Object.assign({}, r, {
      sync: !0
    }), (u, l) => {
      throw Fe.isError(u) && (u.value = l), u;
    }, (u, l) => {
      if (u.length) throw new Fe(u, e, void 0, void 0, o);
      a = l;
    }), a;
  }
  isValid(e, r) {
    return this.validate(e, r).then(() => !0, (n) => {
      if (Fe.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, r) {
    try {
      return this.validateSync(e, r), !0;
    } catch (n) {
      if (Fe.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, e) : Zt(r);
  }
  getDefault(e) {
    return this.resolve(e || {})._getDefault(e);
  }
  default(e) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: e
    });
  }
  strict(e = !0) {
    return this.clone({
      strict: e
    });
  }
  nullability(e, r) {
    const n = this.clone({
      nullable: e
    });
    return n.internalTests.nullable = Gt({
      message: r,
      name: "nullable",
      test(i) {
        return i === null ? this.schema.spec.nullable : !0;
      }
    }), n;
  }
  optionality(e, r) {
    const n = this.clone({
      optional: e
    });
    return n.internalTests.optionality = Gt({
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
  defined(e = tt.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = tt.notNull) {
    return this.nullability(!1, e);
  }
  required(e = tt.required) {
    return this.clone().withMutation((r) => r.nonNullable(e).defined(e));
  }
  notRequired() {
    return this.clone().withMutation((e) => e.nullable().optional());
  }
  transform(e) {
    let r = this.clone();
    return r.transforms.push(e), r;
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
  test(...e) {
    let r;
    if (e.length === 1 ? typeof e[0] == "function" ? r = {
      test: e[0]
    } : r = e[0] : e.length === 2 ? r = {
      name: e[0],
      test: e[1]
    } : r = {
      name: e[0],
      message: e[1],
      test: e[2]
    }, r.message === void 0 && (r.message = tt.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), i = Gt(r), a = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (a || o.OPTIONS.test === i.OPTIONS.test))), n.tests.push(i), n;
  }
  when(e, r) {
    !Array.isArray(e) && typeof e != "string" && (r = e, e = ".");
    let n = this.clone(), i = Po(e).map((a) => new jt(a));
    return i.forEach((a) => {
      a.isSibling && n.deps.push(a.key);
    }), n.conditions.push(typeof r == "function" ? new tn(i, r) : tn.fromOptions(i, r)), n;
  }
  typeError(e) {
    let r = this.clone();
    return r.internalTests.typeError = Gt({
      message: e,
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
  oneOf(e, r = tt.oneOf) {
    let n = this.clone();
    return e.forEach((i) => {
      n._whitelist.add(i), n._blacklist.delete(i);
    }), n.internalTests.whiteList = Gt({
      message: r,
      name: "oneOf",
      skipAbsent: !0,
      test(i) {
        let a = this.schema._whitelist, o = a.resolveAll(this.resolve);
        return o.includes(i) ? !0 : this.createError({
          params: {
            values: Array.from(a).join(", "),
            resolved: o
          }
        });
      }
    }), n;
  }
  notOneOf(e, r = tt.notOneOf) {
    let n = this.clone();
    return e.forEach((i) => {
      n._blacklist.add(i), n._whitelist.delete(i);
    }), n.internalTests.blacklist = Gt({
      message: r,
      name: "notOneOf",
      test(i) {
        let a = this.schema._blacklist, o = a.resolveAll(this.resolve);
        return o.includes(i) ? this.createError({
          params: {
            values: Array.from(a).join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), n;
  }
  strip(e = !0) {
    let r = this.clone();
    return r.spec.strip = e, r;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(e) {
    const r = (e ? this.resolve(e) : this).clone(), {
      label: n,
      meta: i,
      optional: a,
      nullable: o
    } = r.spec;
    return {
      meta: i,
      label: n,
      optional: a,
      nullable: o,
      default: r.getDefault(e),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.map((l) => ({
        name: l.OPTIONS.name,
        params: l.OPTIONS.params
      })).filter((l, h, f) => f.findIndex((m) => m.name === l.name) === h)
    };
  }
}
Ve.prototype.__isYupSchema__ = !0;
for (const t of ["validate", "validateSync"]) Ve.prototype[`${t}At`] = function(e, r, n = {}) {
  const {
    parent: i,
    parentPath: a,
    schema: o
  } = Vd(this, e, r, n.context);
  return o[t](i && i[a], Object.assign({}, n, {
    parent: i,
    path: e
  }));
};
for (const t of ["equals", "is"]) Ve.prototype[t] = Ve.prototype.oneOf;
for (const t of ["not", "nope"]) Ve.prototype[t] = Ve.prototype.notOneOf;
const Ld = () => !0;
function Te(t) {
  return new Do(t);
}
class Do extends Ve {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: Ld
    }, e));
  }
}
Te.prototype = Do.prototype;
function Ye() {
  return new qo();
}
class qo extends Ve {
  constructor() {
    super({
      type: "boolean",
      check(e) {
        return e instanceof Boolean && (e = e.valueOf()), typeof e == "boolean";
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => {
        if (n.spec.coerce && !n.isType(e)) {
          if (/^(true|1)$/i.test(String(e))) return !0;
          if (/^(false|0)$/i.test(String(e))) return !1;
        }
        return e;
      });
    });
  }
  isTrue(e = mi.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(r) {
        return Je(r) || r === !0;
      }
    });
  }
  isFalse(e = mi.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(r) {
        return Je(r) || r === !1;
      }
    });
  }
  default(e) {
    return super.default(e);
  }
  defined(e) {
    return super.defined(e);
  }
  optional() {
    return super.optional();
  }
  required(e) {
    return super.required(e);
  }
  notRequired() {
    return super.notRequired();
  }
  nullable() {
    return super.nullable();
  }
  nonNullable(e) {
    return super.nonNullable(e);
  }
  strip(e) {
    return super.strip(e);
  }
}
Ye.prototype = qo.prototype;
const Bd = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Ud(t) {
  const e = gi(t);
  if (!e) return Date.parse ? Date.parse(t) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let r = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (r = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (r = 0 - r)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + r, e.second, e.millisecond);
}
function gi(t) {
  var e, r;
  const n = Bd.exec(t);
  return n ? {
    year: st(n[1]),
    month: st(n[2], 1) - 1,
    day: st(n[3], 1),
    hour: st(n[4]),
    minute: st(n[5]),
    second: st(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      st(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (r = n[7]) == null ? void 0 : r.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: st(n[10]),
    minuteOffset: st(n[11])
  } : null;
}
function st(t, e = 0) {
  return Number(t) || e;
}
let zd = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Gd = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Wd = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Kd = "^\\d{4}-\\d{2}-\\d{2}", Hd = "\\d{2}:\\d{2}:\\d{2}", Yd = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Qd = new RegExp(`${Kd}T${Hd}(\\.\\d+)?${Yd}$`), Zd = (t) => Je(t) || t === t.trim(), Xd = {}.toString();
function c() {
  return new ko();
}
class ko extends Ve {
  constructor() {
    super({
      type: "string",
      check(e) {
        return e instanceof String && (e = e.valueOf()), typeof e == "string";
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => {
        if (!n.spec.coerce || n.isType(e) || Array.isArray(e)) return e;
        const i = e != null && e.toString ? e.toString() : e;
        return i === Xd ? e : i;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((r) => r.test({
      message: e || tt.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((r) => r.OPTIONS.name !== "required"), e));
  }
  length(e, r = Me.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: e
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(e);
      }
    });
  }
  min(e, r = Me.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(n) {
        return n.length >= this.resolve(e);
      }
    });
  }
  max(e, r = Me.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(e);
      }
    });
  }
  matches(e, r) {
    let n = !1, i, a;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: i,
      name: a
    } = r : i = r), this.test({
      name: a || "matches",
      message: i || Me.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(e) !== -1
    });
  }
  email(e = Me.email) {
    return this.matches(zd, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = Me.url) {
    return this.matches(Gd, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = Me.uuid) {
    return this.matches(Wd, {
      name: "uuid",
      message: e,
      excludeEmptyString: !1
    });
  }
  datetime(e) {
    let r = "", n, i;
    return e && (typeof e == "object" ? {
      message: r = "",
      allowOffset: n = !1,
      precision: i = void 0
    } = e : r = e), this.matches(Qd, {
      name: "datetime",
      message: r || Me.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || Me.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (a) => {
        if (!a || n) return !0;
        const o = gi(a);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || Me.datetime_precision,
      params: {
        precision: i
      },
      skipAbsent: !0,
      test: (a) => {
        if (!a || i == null) return !0;
        const o = gi(a);
        return o ? o.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = Me.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: e,
      name: "trim",
      test: Zd
    });
  }
  lowercase(e = Me.lowercase) {
    return this.transform((r) => Je(r) ? r : r.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Je(r) || r === r.toLowerCase()
    });
  }
  uppercase(e = Me.uppercase) {
    return this.transform((r) => Je(r) ? r : r.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Je(r) || r === r.toUpperCase()
    });
  }
}
c.prototype = ko.prototype;
let Jd = (t) => t != +t;
function ne() {
  return new Io();
}
class Io extends Ve {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !Jd(e);
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => {
        if (!n.spec.coerce) return e;
        let i = e;
        if (typeof i == "string") {
          if (i = i.replace(/\s/g, ""), i === "") return NaN;
          i = +i;
        }
        return n.isType(i) || i === null ? i : parseFloat(i);
      });
    });
  }
  min(e, r = yt.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(n) {
        return n >= this.resolve(e);
      }
    });
  }
  max(e, r = yt.max) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(n) {
        return n <= this.resolve(e);
      }
    });
  }
  lessThan(e, r = yt.lessThan) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        less: e
      },
      skipAbsent: !0,
      test(n) {
        return n < this.resolve(e);
      }
    });
  }
  moreThan(e, r = yt.moreThan) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        more: e
      },
      skipAbsent: !0,
      test(n) {
        return n > this.resolve(e);
      }
    });
  }
  positive(e = yt.positive) {
    return this.moreThan(0, e);
  }
  negative(e = yt.negative) {
    return this.lessThan(0, e);
  }
  integer(e = yt.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (r) => Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((e) => Je(e) ? e : e | 0);
  }
  round(e) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (e = ((r = e) == null ? void 0 : r.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (n.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((i) => Je(i) ? i : Math[e](i));
  }
}
ne.prototype = Io.prototype;
let $o = /* @__PURE__ */ new Date(""), ef = (t) => Object.prototype.toString.call(t) === "[object Date]";
function dt() {
  return new Nr();
}
class Nr extends Ve {
  constructor() {
    super({
      type: "date",
      check(e) {
        return ef(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = Ud(e), isNaN(e) ? Nr.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, r) {
    let n;
    if (jt.isRef(e))
      n = e;
    else {
      let i = this.cast(e);
      if (!this._typeCheck(i)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = i;
    }
    return n;
  }
  min(e, r = pi.min) {
    let n = this.prepareParam(e, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(i) {
        return i >= this.resolve(n);
      }
    });
  }
  max(e, r = pi.max) {
    let n = this.prepareParam(e, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(i) {
        return i <= this.resolve(n);
      }
    });
  }
}
Nr.INVALID_DATE = $o;
dt.prototype = Nr.prototype;
dt.INVALID_DATE = $o;
function tf(t, e = []) {
  let r = [], n = /* @__PURE__ */ new Set(), i = new Set(e.map(([o, u]) => `${o}-${u}`));
  function a(o, u) {
    let l = kt.split(o)[0];
    n.add(l), i.has(`${u}-${l}`) || r.push([u, l]);
  }
  for (const o of Object.keys(t)) {
    let u = t[o];
    n.add(o), jt.isRef(u) && u.isSibling ? a(u.path, o) : hn(u) && "deps" in u && u.deps.forEach((l) => a(l, o));
  }
  return Ad.array(Array.from(n), r).reverse();
}
function Ya(t, e) {
  let r = 1 / 0;
  return t.some((n, i) => {
    var a;
    if ((a = e.path) != null && a.includes(n))
      return r = i, !0;
  }), r;
}
function Mo(t) {
  return (e, r) => Ya(t, e) - Ya(t, r);
}
const Fo = (t, e, r) => {
  if (typeof t != "string")
    return t;
  let n = t;
  try {
    n = JSON.parse(t);
  } catch {
  }
  return r.isType(n) ? n : t;
};
function Qr(t) {
  if ("fields" in t) {
    const e = {};
    for (const [r, n] of Object.entries(t.fields))
      e[r] = Qr(n);
    return t.setFields(e);
  }
  if (t.type === "array") {
    const e = t.optional();
    return e.innerType && (e.innerType = Qr(e.innerType)), e;
  }
  return t.type === "tuple" ? t.optional().clone({
    types: t.spec.types.map(Qr)
  }) : "optional" in t ? t.optional() : t;
}
const rf = (t, e) => {
  const r = [...kt.normalizePath(e)];
  if (r.length === 1) return r[0] in t;
  let n = r.pop(), i = kt.getter(kt.join(r), !0)(t);
  return !!(i && n in i);
};
let Qa = (t) => Object.prototype.toString.call(t) === "[object Object]";
function nf(t, e) {
  let r = Object.keys(t.fields);
  return Object.keys(e).filter((n) => r.indexOf(n) === -1);
}
const af = Mo([]);
function X(t) {
  return new jo(t);
}
class jo extends Ve {
  constructor(e) {
    super({
      type: "object",
      check(r) {
        return Qa(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = af, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, r = {}) {
    var n;
    let i = super._cast(e, r);
    if (i === void 0) return this.getDefault(r);
    if (!this._typeCheck(i)) return i;
    let a = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, u = [].concat(this._nodes, Object.keys(i).filter((m) => !this._nodes.includes(m))), l = {}, h = Object.assign({}, r, {
      parent: l,
      __validating: r.__validating || !1
    }), f = !1;
    for (const m of u) {
      let g = a[m], b = m in i;
      if (g) {
        let _, E = i[m];
        h.path = (r.path ? `${r.path}.` : "") + m, g = g.resolve({
          value: E,
          context: r.context,
          parent: l
        });
        let T = g instanceof Ve ? g.spec : void 0, A = T == null ? void 0 : T.strict;
        if (T != null && T.strip) {
          f = f || m in i;
          continue;
        }
        _ = !r.__validating || !A ? (
          // TODO: use _cast, this is double resolving
          g.cast(i[m], h)
        ) : i[m], _ !== void 0 && (l[m] = _);
      } else b && !o && (l[m] = i[m]);
      (b !== m in l || l[m] !== i[m]) && (f = !0);
    }
    return f ? l : i;
  }
  _validate(e, r = {}, n, i) {
    let {
      from: a = [],
      originalValue: o = e,
      recursive: u = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: o
    }, ...a], r.__validating = !0, r.originalValue = o, super._validate(e, r, n, (l, h) => {
      if (!u || !Qa(h)) {
        i(l, h);
        return;
      }
      o = o || h;
      let f = [];
      for (let m of this._nodes) {
        let g = this.fields[m];
        !g || jt.isRef(g) || f.push(g.asNestedTest({
          options: r,
          key: m,
          parent: h,
          parentPath: r.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: f,
        value: h,
        originalValue: o,
        options: r
      }, n, (m) => {
        i(m.sort(this._sortErrors).concat(l), h);
      });
    });
  }
  clone(e) {
    const r = super.clone(e);
    return r.fields = Object.assign({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(e) {
    let r = super.concat(e), n = r.fields;
    for (let [i, a] of Object.entries(this.fields)) {
      const o = n[i];
      n[i] = o === void 0 ? a : o;
    }
    return r.withMutation((i) => (
      // XXX: excludes here is wrong
      i.setFields(n, [...this._excludedEdges, ...e._excludedEdges])
    ));
  }
  _getDefault(e) {
    if ("default" in this.spec)
      return super._getDefault(e);
    if (!this._nodes.length)
      return;
    let r = {};
    return this._nodes.forEach((n) => {
      var i;
      const a = this.fields[n];
      let o = e;
      (i = o) != null && i.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[n]
      })), r[n] = a && "getDefault" in a ? a.getDefault(o) : void 0;
    }), r;
  }
  setFields(e, r) {
    let n = this.clone();
    return n.fields = e, n._nodes = tf(e, r), n._sortErrors = Mo(Object.keys(e)), r && (n._excludedEdges = r), n;
  }
  shape(e, r = []) {
    return this.clone().withMutation((n) => {
      let i = n._excludedEdges;
      return r.length && (Array.isArray(r[0]) || (r = [r]), i = [...n._excludedEdges, ...r]), n.setFields(Object.assign(n.fields, e), i);
    });
  }
  partial() {
    const e = {};
    for (const [r, n] of Object.entries(this.fields))
      e[r] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
    return this.setFields(e);
  }
  deepPartial() {
    return Qr(this);
  }
  pick(e) {
    const r = {};
    for (const n of e)
      this.fields[n] && (r[n] = this.fields[n]);
    return this.setFields(r, this._excludedEdges.filter(([n, i]) => e.includes(n) && e.includes(i)));
  }
  omit(e) {
    const r = [];
    for (const n of Object.keys(this.fields))
      e.includes(n) || r.push(n);
    return this.pick(r);
  }
  from(e, r, n) {
    let i = kt.getter(e, !0);
    return this.transform((a) => {
      if (!a) return a;
      let o = a;
      return rf(a, e) && (o = Object.assign({}, a), n || delete o[e], o[r] = i(a)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Fo);
  }
  noUnknown(e = !0, r = yi.noUnknown) {
    typeof e != "boolean" && (r = e, e = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(i) {
        if (i == null) return !0;
        const a = nf(this.schema, i);
        return !e || a.length === 0 || this.createError({
          params: {
            unknown: a.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = e, n;
  }
  unknown(e = !0, r = yi.noUnknown) {
    return this.noUnknown(!e, r);
  }
  transformKeys(e) {
    return this.transform((r) => {
      if (!r) return r;
      const n = {};
      for (const i of Object.keys(r)) n[e(i)] = r[i];
      return n;
    });
  }
  camelCase() {
    return this.transformKeys(Kn.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Kn.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => Kn.snakeCase(e).toUpperCase());
  }
  describe(e) {
    const r = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    n.fields = {};
    for (const [a, o] of Object.entries(r.fields)) {
      var i;
      let u = e;
      (i = u) != null && i.value && (u = Object.assign({}, u, {
        parent: u.value,
        value: u.value[a]
      })), n.fields[a] = o.describe(u);
    }
    return n;
  }
}
X.prototype = jo.prototype;
function Vt(t) {
  return new Vo(t);
}
class Vo extends Ve {
  constructor(e) {
    super({
      type: "array",
      spec: {
        types: e
      },
      check(r) {
        return Array.isArray(r);
      }
    }), this.innerType = void 0, this.innerType = e;
  }
  _cast(e, r) {
    const n = super._cast(e, r);
    if (!this._typeCheck(n) || !this.innerType)
      return n;
    let i = !1;
    const a = n.map((o, u) => {
      const l = this.innerType.cast(o, Object.assign({}, r, {
        path: `${r.path || ""}[${u}]`
      }));
      return l !== o && (i = !0), l;
    });
    return i ? a : n;
  }
  _validate(e, r = {}, n, i) {
    var a;
    let o = this.innerType, u = (a = r.recursive) != null ? a : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(e, r, n, (l, h) => {
      var f;
      if (!u || !o || !this._typeCheck(h)) {
        i(l, h);
        return;
      }
      let m = new Array(h.length);
      for (let b = 0; b < h.length; b++) {
        var g;
        m[b] = o.asNestedTest({
          options: r,
          index: b,
          parent: h,
          parentPath: r.path,
          originalParent: (g = r.originalValue) != null ? g : e
        });
      }
      this.runTests({
        value: h,
        tests: m,
        originalValue: (f = r.originalValue) != null ? f : e,
        options: r
      }, n, (b) => i(b.concat(l), h));
    });
  }
  clone(e) {
    const r = super.clone(e);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Fo);
  }
  concat(e) {
    let r = super.concat(e);
    return r.innerType = this.innerType, e.innerType && (r.innerType = r.innerType ? (
      // @ts-expect-error Lazy doesn't have concat and will break
      r.innerType.concat(e.innerType)
    ) : e.innerType), r;
  }
  of(e) {
    let r = this.clone();
    if (!hn(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + lt(e));
    return r.innerType = e, r.spec = Object.assign({}, r.spec, {
      types: e
    }), r;
  }
  length(e, r = Yr.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: e
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(e);
      }
    });
  }
  min(e, r) {
    return r = r || Yr.min, this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      // FIXME(ts): Array<typeof T>
      test(n) {
        return n.length >= this.resolve(e);
      }
    });
  }
  max(e, r) {
    return r = r || Yr.max, this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(e);
      }
    });
  }
  ensure() {
    return this.default(() => []).transform((e, r) => this._typeCheck(e) ? e : r == null ? [] : [].concat(r));
  }
  compact(e) {
    let r = e ? (n, i, a) => !e(n, i, a) : (n) => !!n;
    return this.transform((n) => n != null ? n.filter(r) : n);
  }
  describe(e) {
    const r = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    if (r.innerType) {
      var i;
      let a = e;
      (i = a) != null && i.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[0]
      })), n.innerType = r.innerType.describe(a);
    }
    return n;
  }
}
Vt.prototype = Vo.prototype;
const sf = /^[6-9]\d{9}$/;
c().matches(sf, "Please enter a valid 10-digit contact number").required("Contact number is required");
X().shape({
  address1: c().required("Address Line 1 is required"),
  address2: c(),
  location: c().required("Location is required"),
  city: c().required("City is required"),
  state: c().required("State is required"),
  pincode: c().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
var pn = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, mn = typeof window > "u" || "Deno" in globalThis;
function Ze() {
}
function of(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function uf(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function cf(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Za(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function lf(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Xa(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: u
  } = t;
  if (o) {
    if (n) {
      if (e.queryHash !== qi(o, e.options))
        return !1;
    } else if (!Er(e.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const l = e.isActive();
    if (r === "active" && !l || r === "inactive" && l)
      return !1;
  }
  return !(typeof u == "boolean" && e.isStale() !== u || i && i !== e.state.fetchStatus || a && !a(e));
}
function Ja(t, e) {
  const { exact: r, status: n, predicate: i, mutationKey: a } = t;
  if (a) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (wr(e.options.mutationKey) !== wr(a))
        return !1;
    } else if (!Er(e.options.mutationKey, a))
      return !1;
  }
  return !(n && e.state.status !== n || i && !i(e));
}
function qi(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || wr)(t);
}
function wr(t) {
  return JSON.stringify(
    t,
    (e, r) => vi(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r
  );
}
function Er(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !Er(t[r], e[r])) : !1;
}
function bi(t, e) {
  if (t === e)
    return t;
  const r = es(t) && es(e);
  if (r || vi(t) && vi(e)) {
    const n = r ? t : Object.keys(t), i = n.length, a = r ? e : Object.keys(e), o = a.length, u = r ? [] : {};
    let l = 0;
    for (let h = 0; h < o; h++) {
      const f = r ? h : a[h];
      (!r && n.includes(f) || r) && t[f] === void 0 && e[f] === void 0 ? (u[f] = void 0, l++) : (u[f] = bi(t[f], e[f]), u[f] === t[f] && t[f] !== void 0 && l++);
    }
    return i === o && l === i ? t : u;
  }
  return e;
}
function es(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function vi(t) {
  if (!ts(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!ts(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function ts(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function df(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function ff(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return bi(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return bi(t, e);
  }
  return e;
}
function hf(t, e, r = 0) {
  const n = [...t, e];
  return r && n.length > r ? n.slice(1) : n;
}
function pf(t, e, r = 0) {
  const n = [e, ...t];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Si = Symbol();
function Lo(t, e) {
  return process.env.NODE_ENV !== "production" && t.queryFn === Si && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.queryHash}'`
  ), !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Si ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
var xt, vt, Jt, Cs, mf = (Cs = class extends pn {
  constructor() {
    super();
    ae(this, xt);
    ae(this, vt);
    ae(this, Jt);
    te(this, Jt, (e) => {
      if (!mn && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    P(this, vt) || this.setEventListener(P(this, Jt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = P(this, vt)) == null || e.call(this), te(this, vt, void 0));
  }
  setEventListener(e) {
    var r;
    te(this, Jt, e), (r = P(this, vt)) == null || r.call(this), te(this, vt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    P(this, xt) !== e && (te(this, xt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof P(this, xt) == "boolean" ? P(this, xt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, xt = new WeakMap(), vt = new WeakMap(), Jt = new WeakMap(), Cs), Bo = new mf(), er, St, tr, Os, yf = (Os = class extends pn {
  constructor() {
    super();
    ae(this, er, !0);
    ae(this, St);
    ae(this, tr);
    te(this, tr, (e) => {
      if (!mn && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    P(this, St) || this.setEventListener(P(this, tr));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = P(this, St)) == null || e.call(this), te(this, St, void 0));
  }
  setEventListener(e) {
    var r;
    te(this, tr, e), (r = P(this, St)) == null || r.call(this), te(this, St, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    P(this, er) !== e && (te(this, er, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return P(this, er);
  }
}, er = new WeakMap(), St = new WeakMap(), tr = new WeakMap(), Os), nn = new yf();
function gf(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Uo(t) {
  return (t ?? "online") === "online" ? nn.isOnline() : !0;
}
var zo = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function Hn(t) {
  return t instanceof zo;
}
function Go(t) {
  let e = !1, r = 0, n = !1, i, a, o;
  const u = new Promise((A, k) => {
    a = A, o = k;
  }), l = (A) => {
    var k;
    n || (_(new zo(A)), (k = t.abort) == null || k.call(t));
  }, h = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, m = () => Bo.isFocused() && (t.networkMode === "always" || nn.isOnline()) && t.canRun(), g = () => Uo(t.networkMode) && t.canRun(), b = (A) => {
    var k;
    n || (n = !0, (k = t.onSuccess) == null || k.call(t, A), i == null || i(), a(A));
  }, _ = (A) => {
    var k;
    n || (n = !0, (k = t.onError) == null || k.call(t, A), i == null || i(), o(A));
  }, E = () => new Promise((A) => {
    var k;
    i = (S) => {
      (n || m()) && A(S);
    }, (k = t.onPause) == null || k.call(t);
  }).then(() => {
    var A;
    i = void 0, n || (A = t.onContinue) == null || A.call(t);
  }), T = () => {
    if (n)
      return;
    let A;
    const k = r === 0 ? t.initialPromise : void 0;
    try {
      A = k ?? t.fn();
    } catch (S) {
      A = Promise.reject(S);
    }
    Promise.resolve(A).then(b).catch((S) => {
      var L;
      if (n)
        return;
      const x = t.retry ?? (mn ? 0 : 3), v = t.retryDelay ?? gf, j = typeof v == "function" ? v(r, S) : v, Z = x === !0 || typeof x == "number" && r < x || typeof x == "function" && x(r, S);
      if (e || !Z) {
        _(S);
        return;
      }
      r++, (L = t.onFail) == null || L.call(t, r, S), df(j).then(() => m() ? void 0 : E()).then(() => {
        e ? _(S) : T();
      });
    });
  };
  return {
    promise: u,
    cancel: l,
    continue: () => (i == null || i(), u),
    cancelRetry: h,
    continueRetry: f,
    canStart: g,
    start: () => (g() ? T() : E().then(T), u)
  };
}
function bf() {
  let t = [], e = 0, r = (u) => {
    u();
  }, n = (u) => {
    u();
  }, i = (u) => setTimeout(u, 0);
  const a = (u) => {
    e ? t.push(u) : i(() => {
      r(u);
    });
  }, o = () => {
    const u = t;
    t = [], u.length && i(() => {
      n(() => {
        u.forEach((l) => {
          r(l);
        });
      });
    });
  };
  return {
    batch: (u) => {
      let l;
      e++;
      try {
        l = u();
      } finally {
        e--, e || o();
      }
      return l;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (u) => (...l) => {
      a(() => {
        u(...l);
      });
    },
    schedule: a,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (u) => {
      r = u;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (u) => {
      n = u;
    },
    setScheduler: (u) => {
      i = u;
    }
  };
}
var $e = bf(), Rt, Ts, Wo = (Ts = class {
  constructor() {
    ae(this, Rt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), uf(this.gcTime) && te(this, Rt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (mn ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    P(this, Rt) && (clearTimeout(P(this, Rt)), te(this, Rt, void 0));
  }
}, Rt = new WeakMap(), Ts), rr, nr, Ke, De, Cr, At, Xe, ut, Ns, vf = (Ns = class extends Wo {
  constructor(e) {
    super();
    ae(this, Xe);
    ae(this, rr);
    ae(this, nr);
    ae(this, Ke);
    ae(this, De);
    ae(this, Cr);
    ae(this, At);
    te(this, At, !1), te(this, Cr, e.defaultOptions), this.setOptions(e.options), this.observers = [], te(this, Ke, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, te(this, rr, wf(this.options)), this.state = e.state ?? P(this, rr), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var e;
    return (e = P(this, De)) == null ? void 0 : e.promise;
  }
  setOptions(e) {
    this.options = { ...P(this, Cr), ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && P(this, Ke).remove(this);
  }
  setData(e, r) {
    const n = ff(this.state.data, e, this.options);
    return Ae(this, Xe, ut).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(e, r) {
    Ae(this, Xe, ut).call(this, { type: "setState", state: e, setStateOptions: r });
  }
  cancel(e) {
    var n, i;
    const r = (n = P(this, De)) == null ? void 0 : n.promise;
    return (i = P(this, De)) == null || i.cancel(e), r ? r.then(Ze).catch(Ze) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(P(this, rr));
  }
  isActive() {
    return this.observers.some(
      (e) => lf(e.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !cf(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var r;
    const e = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    e == null || e.refetch({ cancelRefetch: !1 }), (r = P(this, De)) == null || r.continue();
  }
  onOnline() {
    var r;
    const e = this.observers.find((n) => n.shouldFetchOnReconnect());
    e == null || e.refetch({ cancelRefetch: !1 }), (r = P(this, De)) == null || r.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), P(this, Ke).notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((r) => r !== e), this.observers.length || (P(this, De) && (P(this, At) ? P(this, De).cancel({ revert: !0 }) : P(this, De).cancelRetry()), this.scheduleGc()), P(this, Ke).notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || Ae(this, Xe, ut).call(this, { type: "invalidate" });
  }
  fetch(e, r) {
    var l, h, f;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (P(this, De))
        return P(this, De).continueRetry(), P(this, De).promise;
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const m = this.observers.find((g) => g.options.queryFn);
      m && this.setOptions(m.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), i = (m) => {
      Object.defineProperty(m, "signal", {
        enumerable: !0,
        get: () => (te(this, At, !0), n.signal)
      });
    }, a = () => {
      const m = Lo(this.options, r), g = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return i(g), te(this, At, !1), this.options.persister ? this.options.persister(
        m,
        g,
        this
      ) : m(g);
    }, o = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: a
    };
    i(o), (l = this.options.behavior) == null || l.onFetch(
      o,
      this
    ), te(this, nr, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((h = o.fetchOptions) == null ? void 0 : h.meta)) && Ae(this, Xe, ut).call(this, { type: "fetch", meta: (f = o.fetchOptions) == null ? void 0 : f.meta });
    const u = (m) => {
      var g, b, _, E;
      Hn(m) && m.silent || Ae(this, Xe, ut).call(this, {
        type: "error",
        error: m
      }), Hn(m) || ((b = (g = P(this, Ke).config).onError) == null || b.call(
        g,
        m,
        this
      ), (E = (_ = P(this, Ke).config).onSettled) == null || E.call(
        _,
        this.state.data,
        m,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return te(this, De, Go({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: o.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (m) => {
        var g, b, _, E;
        if (m === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), u(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(m);
        } catch (T) {
          u(T);
          return;
        }
        (b = (g = P(this, Ke).config).onSuccess) == null || b.call(g, m, this), (E = (_ = P(this, Ke).config).onSettled) == null || E.call(
          _,
          m,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: u,
      onFail: (m, g) => {
        Ae(this, Xe, ut).call(this, { type: "failed", failureCount: m, error: g });
      },
      onPause: () => {
        Ae(this, Xe, ut).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ae(this, Xe, ut).call(this, { type: "continue" });
      },
      retry: o.options.retry,
      retryDelay: o.options.retryDelay,
      networkMode: o.options.networkMode,
      canRun: () => !0
    })), P(this, De).start();
  }
}, rr = new WeakMap(), nr = new WeakMap(), Ke = new WeakMap(), De = new WeakMap(), Cr = new WeakMap(), At = new WeakMap(), Xe = new WeakSet(), ut = function(e) {
  const r = (n) => {
    switch (e.type) {
      case "failed":
        return {
          ...n,
          fetchFailureCount: e.failureCount,
          fetchFailureReason: e.error
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
          ...Sf(n.data, this.options),
          fetchMeta: e.meta ?? null
        };
      case "success":
        return {
          ...n,
          data: e.data,
          dataUpdateCount: n.dataUpdateCount + 1,
          dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!e.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const i = e.error;
        return Hn(i) && i.revert && P(this, nr) ? { ...P(this, nr), fetchStatus: "idle" } : {
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
          ...e.state
        };
    }
  };
  this.state = r(this.state), $e.batch(() => {
    this.observers.forEach((n) => {
      n.onQueryUpdate();
    }), P(this, Ke).notify({ query: this, type: "updated", action: e });
  });
}, Ns);
function Sf(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Uo(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function wf(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, r = e !== void 0, n = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: e,
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
var rt, Ps, Ef = (Ps = class extends pn {
  constructor(e = {}) {
    super();
    ae(this, rt);
    this.config = e, te(this, rt, /* @__PURE__ */ new Map());
  }
  build(e, r, n) {
    const i = r.queryKey, a = r.queryHash ?? qi(i, r);
    let o = this.get(a);
    return o || (o = new vf({
      cache: this,
      queryKey: i,
      queryHash: a,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(i)
    }), this.add(o)), o;
  }
  add(e) {
    P(this, rt).has(e.queryHash) || (P(this, rt).set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const r = P(this, rt).get(e.queryHash);
    r && (e.destroy(), r === e && P(this, rt).delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    $e.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return P(this, rt).get(e);
  }
  getAll() {
    return [...P(this, rt).values()];
  }
  find(e) {
    const r = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Xa(r, n)
    );
  }
  findAll(e = {}) {
    const r = this.getAll();
    return Object.keys(e).length > 0 ? r.filter((n) => Xa(e, n)) : r;
  }
  notify(e) {
    $e.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  onFocus() {
    $e.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    $e.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
}, rt = new WeakMap(), Ps), nt, Ie, Dt, it, gt, xs, _f = (xs = class extends Wo {
  constructor(e) {
    super();
    ae(this, it);
    ae(this, nt);
    ae(this, Ie);
    ae(this, Dt);
    this.mutationId = e.mutationId, te(this, Ie, e.mutationCache), te(this, nt, []), this.state = e.state || Cf(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = e, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    P(this, nt).includes(e) || (P(this, nt).push(e), this.clearGcTimeout(), P(this, Ie).notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    te(this, nt, P(this, nt).filter((r) => r !== e)), this.scheduleGc(), P(this, Ie).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    P(this, nt).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Ie).remove(this));
  }
  continue() {
    var e;
    return ((e = P(this, Dt)) == null ? void 0 : e.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    var i, a, o, u, l, h, f, m, g, b, _, E, T, A, k, S, x, v, j, Z;
    te(this, Dt, Go({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (L, d) => {
        Ae(this, it, gt).call(this, { type: "failed", failureCount: L, error: d });
      },
      onPause: () => {
        Ae(this, it, gt).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ae(this, it, gt).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => P(this, Ie).canRun(this)
    }));
    const r = this.state.status === "pending", n = !P(this, Dt).canStart();
    try {
      if (!r) {
        Ae(this, it, gt).call(this, { type: "pending", variables: e, isPaused: n }), await ((a = (i = P(this, Ie).config).onMutate) == null ? void 0 : a.call(
          i,
          e,
          this
        ));
        const d = await ((u = (o = this.options).onMutate) == null ? void 0 : u.call(o, e));
        d !== this.state.context && Ae(this, it, gt).call(this, {
          type: "pending",
          context: d,
          variables: e,
          isPaused: n
        });
      }
      const L = await P(this, Dt).start();
      return await ((h = (l = P(this, Ie).config).onSuccess) == null ? void 0 : h.call(
        l,
        L,
        e,
        this.state.context,
        this
      )), await ((m = (f = this.options).onSuccess) == null ? void 0 : m.call(f, L, e, this.state.context)), await ((b = (g = P(this, Ie).config).onSettled) == null ? void 0 : b.call(
        g,
        L,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((E = (_ = this.options).onSettled) == null ? void 0 : E.call(_, L, null, e, this.state.context)), Ae(this, it, gt).call(this, { type: "success", data: L }), L;
    } catch (L) {
      try {
        throw await ((A = (T = P(this, Ie).config).onError) == null ? void 0 : A.call(
          T,
          L,
          e,
          this.state.context,
          this
        )), await ((S = (k = this.options).onError) == null ? void 0 : S.call(
          k,
          L,
          e,
          this.state.context
        )), await ((v = (x = P(this, Ie).config).onSettled) == null ? void 0 : v.call(
          x,
          void 0,
          L,
          this.state.variables,
          this.state.context,
          this
        )), await ((Z = (j = this.options).onSettled) == null ? void 0 : Z.call(
          j,
          void 0,
          L,
          e,
          this.state.context
        )), L;
      } finally {
        Ae(this, it, gt).call(this, { type: "error", error: L });
      }
    } finally {
      P(this, Ie).runNext(this);
    }
  }
}, nt = new WeakMap(), Ie = new WeakMap(), Dt = new WeakMap(), it = new WeakSet(), gt = function(e) {
  const r = (n) => {
    switch (e.type) {
      case "failed":
        return {
          ...n,
          failureCount: e.failureCount,
          failureReason: e.error
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
          context: e.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: e.isPaused,
          status: "pending",
          variables: e.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...n,
          data: e.data,
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
          error: e.error,
          failureCount: n.failureCount + 1,
          failureReason: e.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), $e.batch(() => {
    P(this, nt).forEach((n) => {
      n.onMutationUpdate(e);
    }), P(this, Ie).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
}, xs);
function Cf() {
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
var Le, Or, Rs, Of = (Rs = class extends pn {
  constructor(e = {}) {
    super();
    ae(this, Le);
    ae(this, Or);
    this.config = e, te(this, Le, /* @__PURE__ */ new Map()), te(this, Or, Date.now());
  }
  build(e, r, n) {
    const i = new _f({
      mutationCache: this,
      mutationId: ++Lr(this, Or)._,
      options: e.defaultMutationOptions(r),
      state: n
    });
    return this.add(i), i;
  }
  add(e) {
    const r = Gr(e), n = P(this, Le).get(r) ?? [];
    n.push(e), P(this, Le).set(r, n), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    var n;
    const r = Gr(e);
    if (P(this, Le).has(r)) {
      const i = (n = P(this, Le).get(r)) == null ? void 0 : n.filter((a) => a !== e);
      i && (i.length === 0 ? P(this, Le).delete(r) : P(this, Le).set(r, i));
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    var n;
    const r = (n = P(this, Le).get(Gr(e))) == null ? void 0 : n.find((i) => i.state.status === "pending");
    return !r || r === e;
  }
  runNext(e) {
    var n;
    const r = (n = P(this, Le).get(Gr(e))) == null ? void 0 : n.find((i) => i !== e && i.state.isPaused);
    return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
  }
  clear() {
    $e.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return [...P(this, Le).values()].flat();
  }
  find(e) {
    const r = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Ja(r, n)
    );
  }
  findAll(e = {}) {
    return this.getAll().filter((r) => Ja(e, r));
  }
  notify(e) {
    $e.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((r) => r.state.isPaused);
    return $e.batch(
      () => Promise.all(
        e.map((r) => r.continue().catch(Ze))
      )
    );
  }
}, Le = new WeakMap(), Or = new WeakMap(), Rs);
function Gr(t) {
  var e;
  return ((e = t.options.scope) == null ? void 0 : e.id) ?? String(t.mutationId);
}
function rs(t) {
  return {
    onFetch: (e, r) => {
      var f, m, g, b, _;
      const n = e.options, i = (g = (m = (f = e.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : m.fetchMore) == null ? void 0 : g.direction, a = ((b = e.state.data) == null ? void 0 : b.pages) || [], o = ((_ = e.state.data) == null ? void 0 : _.pageParams) || [];
      let u = { pages: [], pageParams: [] }, l = 0;
      const h = async () => {
        let E = !1;
        const T = (S) => {
          Object.defineProperty(S, "signal", {
            enumerable: !0,
            get: () => (e.signal.aborted ? E = !0 : e.signal.addEventListener("abort", () => {
              E = !0;
            }), e.signal)
          });
        }, A = Lo(e.options, e.fetchOptions), k = async (S, x, v) => {
          if (E)
            return Promise.reject();
          if (x == null && S.pages.length)
            return Promise.resolve(S);
          const j = {
            queryKey: e.queryKey,
            pageParam: x,
            direction: v ? "backward" : "forward",
            meta: e.options.meta
          };
          T(j);
          const Z = await A(
            j
          ), { maxPages: L } = e.options, d = v ? pf : hf;
          return {
            pages: d(S.pages, Z, L),
            pageParams: d(S.pageParams, x, L)
          };
        };
        if (i && a.length) {
          const S = i === "backward", x = S ? Tf : ns, v = {
            pages: a,
            pageParams: o
          }, j = x(n, v);
          u = await k(v, j, S);
        } else {
          const S = t ?? a.length;
          do {
            const x = l === 0 ? o[0] ?? n.initialPageParam : ns(n, u);
            if (l > 0 && x == null)
              break;
            u = await k(u, x), l++;
          } while (l < S);
        }
        return u;
      };
      e.options.persister ? e.fetchFn = () => {
        var E, T;
        return (T = (E = e.options).persister) == null ? void 0 : T.call(
          E,
          h,
          {
            queryKey: e.queryKey,
            meta: e.options.meta,
            signal: e.signal
          },
          r
        );
      } : e.fetchFn = h;
    }
  };
}
function ns(t, { pages: e, pageParams: r }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(
    e[n],
    e,
    r[n],
    r
  ) : void 0;
}
function Tf(t, { pages: e, pageParams: r }) {
  var n;
  return e.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, e[0], e, r[0], r) : void 0;
}
var Ee, wt, Et, ir, ar, _t, sr, or, As, Nf = (As = class {
  constructor(t = {}) {
    ae(this, Ee);
    ae(this, wt);
    ae(this, Et);
    ae(this, ir);
    ae(this, ar);
    ae(this, _t);
    ae(this, sr);
    ae(this, or);
    te(this, Ee, t.queryCache || new Ef()), te(this, wt, t.mutationCache || new Of()), te(this, Et, t.defaultOptions || {}), te(this, ir, /* @__PURE__ */ new Map()), te(this, ar, /* @__PURE__ */ new Map()), te(this, _t, 0);
  }
  mount() {
    Lr(this, _t)._++, P(this, _t) === 1 && (te(this, sr, Bo.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), P(this, Ee).onFocus());
    })), te(this, or, nn.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), P(this, Ee).onOnline());
    })));
  }
  unmount() {
    var t, e;
    Lr(this, _t)._--, P(this, _t) === 0 && ((t = P(this, sr)) == null || t.call(this), te(this, sr, void 0), (e = P(this, or)) == null || e.call(this), te(this, or, void 0));
  }
  isFetching(t) {
    return P(this, Ee).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return P(this, wt).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = P(this, Ee).get(e.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t) {
    const e = this.getQueryData(t.queryKey);
    if (e === void 0)
      return this.fetchQuery(t);
    {
      const r = this.defaultQueryOptions(t), n = P(this, Ee).build(this, r);
      return t.revalidateIfStale && n.isStaleByTime(Za(r.staleTime, n)) && this.prefetchQuery(r), Promise.resolve(e);
    }
  }
  getQueriesData(t) {
    return P(this, Ee).findAll(t).map(({ queryKey: e, state: r }) => {
      const n = r.data;
      return [e, n];
    });
  }
  setQueryData(t, e, r) {
    const n = this.defaultQueryOptions({ queryKey: t }), i = P(this, Ee).get(
      n.queryHash
    ), a = i == null ? void 0 : i.state.data, o = of(e, a);
    if (o !== void 0)
      return P(this, Ee).build(this, n).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(t, e, r) {
    return $e.batch(
      () => P(this, Ee).findAll(t).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, e, r)
      ])
    );
  }
  getQueryState(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = P(this, Ee).get(e.queryHash)) == null ? void 0 : r.state;
  }
  removeQueries(t) {
    const e = P(this, Ee);
    $e.batch(() => {
      e.findAll(t).forEach((r) => {
        e.remove(r);
      });
    });
  }
  resetQueries(t, e) {
    const r = P(this, Ee), n = {
      type: "active",
      ...t
    };
    return $e.batch(() => (r.findAll(t).forEach((i) => {
      i.reset();
    }), this.refetchQueries(n, e)));
  }
  cancelQueries(t = {}, e = {}) {
    const r = { revert: !0, ...e }, n = $e.batch(
      () => P(this, Ee).findAll(t).map((i) => i.cancel(r))
    );
    return Promise.all(n).then(Ze).catch(Ze);
  }
  invalidateQueries(t = {}, e = {}) {
    return $e.batch(() => {
      if (P(this, Ee).findAll(t).forEach((n) => {
        n.invalidate();
      }), t.refetchType === "none")
        return Promise.resolve();
      const r = {
        ...t,
        type: t.refetchType ?? t.type ?? "active"
      };
      return this.refetchQueries(r, e);
    });
  }
  refetchQueries(t = {}, e) {
    const r = {
      ...e,
      cancelRefetch: (e == null ? void 0 : e.cancelRefetch) ?? !0
    }, n = $e.batch(
      () => P(this, Ee).findAll(t).filter((i) => !i.isDisabled()).map((i) => {
        let a = i.fetch(void 0, r);
        return r.throwOnError || (a = a.catch(Ze)), i.state.fetchStatus === "paused" ? Promise.resolve() : a;
      })
    );
    return Promise.all(n).then(Ze);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const r = P(this, Ee).build(this, e);
    return r.isStaleByTime(
      Za(e.staleTime, r)
    ) ? r.fetch(e) : Promise.resolve(r.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(Ze).catch(Ze);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = rs(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Ze).catch(Ze);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = rs(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return nn.isOnline() ? P(this, wt).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return P(this, Ee);
  }
  getMutationCache() {
    return P(this, wt);
  }
  getDefaultOptions() {
    return P(this, Et);
  }
  setDefaultOptions(t) {
    te(this, Et, t);
  }
  setQueryDefaults(t, e) {
    P(this, ir).set(wr(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...P(this, ir).values()];
    let r = {};
    return e.forEach((n) => {
      Er(t, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(t, e) {
    P(this, ar).set(wr(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...P(this, ar).values()];
    let r = {};
    return e.forEach((n) => {
      Er(t, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...P(this, Et).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = qi(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.enabled !== !0 && e.queryFn === Si && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...P(this, Et).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    P(this, Ee).clear(), P(this, wt).clear();
  }
}, Ee = new WeakMap(), wt = new WeakMap(), Et = new WeakMap(), ir = new WeakMap(), ar = new WeakMap(), _t = new WeakMap(), sr = new WeakMap(), or = new WeakMap(), As);
const R = {
  IS_STRING: /^[a-zA-Z ]+$/,
  IS_VEHICLE_NO: /^[a-zA-Z]{2}[- ]?[0-9]{1,2}[- ]?[a-zA-Z]{1,2}[- ]?[0-9]{4}$/,
  IS_NUMBER: /^\d+(\.\d+)?$/,
  CONTACT_NO: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/
}, xe = X().shape({
  address1: c().required("Address Line 1 is required"),
  address2: c().nullable(),
  location: c().required("Location is required"),
  city: c().required("City is required").matches(R.IS_STRING, "City name should only contains alphabets."),
  state: c().required("State is required").matches(R.IS_STRING, "State name should only contains alphabets."),
  pincode: c().required("Pincode is required").matches(R.PINCODE, "Pincode must be exactly 6 digits")
}), Pt = c().test("is-future-or-today", "Date must be today or in the future", (t) => {
  if (!t)
    return !0;
  const e = new Date(t), r = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), r.setHours(0, 0, 0, 0), e >= r;
});
X().shape({
  companyName: c().required("Party Name is required"),
  category: c().required("Please select category of vendor"),
  subcategory: c().required("Please select subcategory of vendor"),
  officeAddress: xe,
  officeContactNo: c().required("Please enter contact number.").matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: c().nullable().email("Please enter valid email"),
  mainProduct: c().nullable().matches(R.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: c().nullable().matches(R.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: c().nullable().matches(R.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: c().nullable().matches(R.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: c().nullable(),
  creditTerms: c().nullable(),
  ifGstnCopy: Ye().required(),
  gstn: c().when("ifGstnCopy", {
    is: !0,
    then: (t) => t.required("GSTN number required if GSTN is available."),
    otherwise: (t) => t.nullable()
  }),
  gstnCopy: Te().when("ifGstnCopy", {
    is: !0,
    then: (t) => t.required("GSTN copy required if GSTN is available."),
    otherwise: (t) => t.nullable()
  }),
  ifPanCardCopy: Ye().required(),
  panNo: c().when("ifPanCardCopy", {
    is: !0,
    then: (t) => t.required("PAN number required if PAN is available."),
    otherwise: (t) => t.nullable()
  }),
  panCardCopy: Te().when("ifPanCardCopy", {
    is: !0,
    then: (t) => t.required("PAN card copy required if PAN is available."),
    otherwise: (t) => t.nullable()
  }),
  ifMsmeCopy: Ye().required(),
  msmeNo: c().when("ifMsmeCopy", {
    is: !0,
    then: (t) => t.required("MSME number required if MSME is available."),
    otherwise: (t) => t.nullable()
  }),
  msmeCopy: Te().when("ifMsmeCopy", {
    is: !0,
    then: (t) => t.required("MSME copy required if MSME is available."),
    otherwise: (t) => t.nullable()
  }),
  vendorSaleInfo: X().shape({
    contactFName: c().required("Contact person first name is required.").matches(R.IS_STRING, "Name should include only alphabets."),
    contactMName: c().nullable().matches(R.IS_STRING, "Name should include only alphabets."),
    contactLName: c().required("Contact person last name is required.").matches(R.IS_STRING, "Name should include only alphabets."),
    directContactNumber: c().required("Contact person phone number is required").matches(R.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: c().nullable().matches(R.CONTACT_NO, "Please enter a valid contact number."),
    email: c().nullable().email("Please enter valid email")
  }),
  vendorBankDetails: X().shape({
    beneficiaryFName: c().required("Beneficiary person first name is required.").matches(R.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: c().nullable().matches(R.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: c().required("Beneficiary person last name is required.").matches(R.IS_STRING, "Name should include only alphabets."),
    bankName: c().required("Bank name is required.").matches(R.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: xe,
    typeOfAcc: c().required("Account type is required."),
    ifscCode: c().required("IFSC code of bank is required."),
    swiftNo: c().nullable(),
    invoiceCurrency: c().nullable(),
    cancelledChequeCopy: c().nullable()
  }),
  ref1FName: c().required("Reference person first name is required.").matches(R.IS_STRING, "Name should include only alphabets."),
  ref1MName: c().nullable().matches(R.IS_STRING, "Name should include only alphabets."),
  ref1LName: c().required("Reference person first name is required.").matches(R.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: c().required("Contact number is required").matches(R.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: c().nullable().matches(R.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: xe,
  ref1Email: c().nullable().email("Please enter valid email."),
  ref2FName: c().nullable().matches(R.IS_STRING, "Name should include only alphabets."),
  ref2MName: c().nullable().matches(R.IS_STRING, "Name should include only alphabets."),
  ref2LName: c().nullable().matches(R.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: c().nullable().matches(R.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: c().nullable().matches(R.CONTACT_NO, "Please enter valid contact number."),
  // ref2Address: initValAddress,
  ref2Email: c().nullable().email("Please enter valid email.")
});
const Pf = /^[6-9]\d{9}$/, xf = c().matches(Pf, "Please enter a valid 10-digit contact number");
X().shape({
  farmerfName: c().required("First Name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  farmermName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  farmerlName: c().required("Last Name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: xe,
  primaryMobileNo: xf,
  secondaryMobileNo: c().nullable().matches(R.CONTACT_NO, "Please enter valid contact number."),
  email: c().email("Please enter valid emial"),
  dob: dt().required("Date of Birth is required"),
  farmAddress: xe,
  totalLandArea: ne().nullable().positive("Area cannot be negative."),
  cultivationArea: ne().nullable().positive("Area cannot be negative."),
  crops: Vt(
    X({
      crop: c().required("Crop name is required"),
      noOfPlants: ne().nullable().positive("Number of plants cannot be negative"),
      pruningDate: dt().required("Pruning date is required."),
      expectedHarvestDate: dt().required("Expected harvest date is required."),
      expectedQuantityInTonnes: ne().required("Expected quantity in metric tones are required.").positive("Quantity cannot be negative")
    }).required("At least one crop is required")
  )
});
const Rf = X().shape({
  accDeptFName: c().required("First name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  accDeptMName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  accDeptLName: c().required("Last name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  accDeptMobileNo: c().required("Please enter contact number.").matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  ownerFName: c().required("First name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  ownerMName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  ownerLName: c().required("Last name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  ownerMobileNo: c().required("Please enter contact number.").matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  mandiLicenceNo: c().nullable(),
  // mandiLicenceCopy: yup.,
  regiNo: c().nullable(),
  // regiCopy: File | null,
  electricityBill: Ye().required("Please select yes or no."),
  consumenrNo: c().when("electricityBill", {
    is: !0,
    then: (t) => t.required("Consumer number is required if electricity bill available."),
    otherwise: (t) => t.nullable()
  }),
  electricityBillCopy: Te().when("electricityBill", {
    is: !0,
    then: (t) => t.required("Electricity bill copy required if it is available."),
    otherwise: (t) => t.nullable()
  }),
  notElectricityBillReason: c().when("electricityBill", {
    is: !1,
    then: (t) => t.required("Please specify reason to not attach electricity bill."),
    otherwise: (t) => t.nullable()
  }),
  customerBlacklisted: Ye().required("Please select yes or no."),
  blackListedBy: c().when("customerBlacklisted", {
    is: !0,
    then: (t) => t.required("Please specify name who blacklisted the customer."),
    otherwise: (t) => t.nullable()
  }),
  ifBlacklistedReason: c().when("customerBlacklisted", {
    is: !0,
    then: (t) => t.required("please specify reason for blacklisting customer."),
    otherwise: (t) => t.nullable()
  }),
  visitingCard: Ye().required("Please select yes or no."),
  visitinContactNo: c().when("visitingCard", {
    is: !0,
    then: (t) => t.required("Consumer number is required ff visiting card available."),
    otherwise: (t) => t.nullable()
  }),
  visitingCardCopy: Te().when("visitingCard", {
    is: !0,
    then: (t) => t.required("Visiting card copy required if it is available."),
    otherwise: (t) => t.nullable()
  }),
  notVisitingCardReason: c().when("visitingCard", {
    is: !1,
    then: (t) => t.required("Please specify reason to not attach visiting card."),
    otherwise: (t) => t.nullable()
  }),
  //References
  ref1FName: c().required("First name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  ref1MName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  ref1LName: c().required("Last name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  ref1Address: xe,
  ref1ContactNo: c().required("Please enter contact number.").matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  ref1Email: c().required("Please enter email.").email("Please enter valid email"),
  ref2FName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  ref2MName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  ref2LName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  ref2address: X().nullable(),
  ref2ContactNo: c().nullable().matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  ref2Email: c().nullable().email("Please enter valid email")
}), Af = X().shape({
  billingName: c().required("Billing name is required."),
  commonlyKnownAs: c().nullable(),
  contactPersonFName: c().required("First name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  contactPersonMName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  contactPersonLName: c().required("Last name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  billingAddress: xe,
  primaryContactNo: c().required("Please enter contact number.").matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: c().nullable().matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: c().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: c().nullable().email("Please enter valid email"),
  billingAddressProofCopy: Te().nullable(),
  billingFormatCopy: Te().nullable()
}), Df = X().shape({
  deliveryAddress: xe,
  deliveryAddressProofCopy: Te().nullable(),
  deliveryTime: c().nullable(),
  receivingPersonFName: c().required("First name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  receivingPersonMName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  receivingPersonLName: c().required("Last name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  primaryContactNo: c().required("Please enter contact number.").matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: c().nullable().matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: c().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: c().nullable().email("Please enter valid email")
}), qf = X().shape({
  ifCancelledCheque: Ye().required("Please select yes or no."),
  cancelledChequeCopy: Te().when("ifCancelledCheque", {
    is: !0,
    then: (t) => t.required("Cancel cheque copy required if it is available."),
    otherwise: (t) => t.nullable()
  }),
  notCancelledChequeReason: c().when("ifCancelledCheque", {
    is: !1,
    then: (t) => t.required("Please specify reason to not attach cancel cheque."),
    otherwise: (t) => t.nullable()
  }),
  bankAccHolderFName: c().required("First name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderMName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderLName: c().required("Last name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  bankName: c().required("Bank name is required."),
  bankBranch: c().required("Branch name is required."),
  accType: c().required("Account type is required."),
  otherAccType: c().nullable(),
  bankAccNo: c().required("Account number is required."),
  ifscCode: c().required("IFSC code is required."),
  bankAddress: xe,
  bankStatementCopy: Te()
}), kf = X().shape({
  panNo: c().nullable(),
  panCopy: Te().nullable(),
  aadharNo: c().nullable(),
  addharCopy: Te().nullable(),
  gstn: c().nullable(),
  regiCertificateCopy: Te().nullable(),
  billBookCopy: Te().nullable(),
  certificationsDetails: c().nullable(),
  otherCertifications: c().nullable(),
  corpRegiDetails: c().nullable(),
  otherCorpRegiDetails: c().nullable(),
  incorpoCertificateCopy: Te().nullable(),
  cinNo: c().nullable()
}), If = X().shape({}), $f = X().shape({
  paymentMade: c().required("Required. Please select an option."),
  otherPaymentMade: c().nullable(),
  paymentMode: c().required("Payment mode is required."),
  otherPaymentMode: c().nullable(),
  marginDeposit: c().nullable(),
  rtv: Ye().required("Please select yes or no."),
  agreementExecuted: Ye().required("Please select yes or no."),
  lc: c().nullable(),
  bg: c().nullable(),
  securityDepoCheqNo: c().nullable(),
  securityDepoAmt: ne().positive("Amount cannot be negative."),
  //Initial Exposure Limit (IEL)
  IELinAmt: ne().positive("Amount cannot be negative."),
  IELRecommendedBy: c().matches(R.IS_STRING, "Name should only contain alphabets."),
  IELRecommendedDate: c().nullable(),
  //Revision of Exposure Limit (REL)
  RELinAmt: ne().positive("Amount cannot be negative."),
  RELRecommendedBy: c().matches(R.IS_STRING, "Name should only contain alphabets."),
  RELRecommendedDate: c().nullable(),
  reason: c().nullable(),
  docEvidenceCopy: Te().nullable()
}), Mf = X().shape({
  proposerBDName: c().nullable(),
  pflCoordinator: c().nullable(),
  recommendedBy: c().nullable(),
  dispatchLocationPfl: c().nullable(),
  approvedBy: c().nullable(),
  relationshipManager: c().nullable(),
  avgBillingMonthly: ne().positive("Average cannot be negative."),
  volumeMonthly: ne().positive("Volume cannot be negative."),
  customerVerification: c().nullable(),
  verificationAgency: c().nullable(),
  validityPeriod: c().nullable(),
  dueDiligenceDone: c().nullable(),
  creditWorthinessDue: c().nullable(),
  keyAccountPersonAssigned: c().nullable(),
  sinceWhen: c().nullable(),
  ledgerCreatedDate: c().nullable(),
  ledgerCreatedBy: c().nullable(),
  ledgerVerifiedApprovedBy: c().nullable(),
  additionalNotes: c().nullable()
});
X().shape({
  organisationName: c().required("Organization name is required."),
  customerTypes: c().required("Customer type is required."),
  customerCategory: c().required("Customer category is required."),
  organisationType: c().required("Organization type is required."),
  otherType: c().nullable(),
  customerAddress: xe,
  primaryContactNo: c().required("Please enter contact number.").matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: c().nullable().matches(R.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: c().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: c().nullable().email("Please enter valid email"),
  keyMobileNumbers: Rf,
  billingDetails: Af,
  deliveryDetails: Df,
  statutoryDetails: kf,
  bankDetails: qf,
  productSpecification: If,
  paymentTerms: $f,
  officeUseOnly: Mf
});
X().shape({
  companyName: c().required("Company Name is required"),
  // purchaseLocation: yup.string().required('Purchase Location is required'),
  // purchaseForSalesLocation: yup.string().required('Purchase for sales location is required'),
  selectedParty: c().required("Please select one option"),
  rfpaProducts: Vt().of(
    X().shape({
      product: c().required("Product is required"),
      grade: c().nullable(),
      quantity: ne().required("Quantity is required").positive("Quantity must be positive"),
      unitPrice: ne().required("Unit Price is required").positive("Unit Price must be positive"),
      purchaseDate: Pt.required("Purchase Date is required"),
      dispatchDate: Pt.required("Dispatch Date is required"),
      deliveryDate: Pt.required("Delivery Date is required"),
      deliveryLocation: c().required("Delivery Location is required"),
      expectedHarvestDate: dt().nullable()
    })
  ).required("RFPA Products are required"),
  paymentInfo: X().shape({
    paymentMode: c().required("Payment Mode is required"),
    advancePaidAmt: ne().nullable().positive("Amount must be positive"),
    creditPeriod: ne().min(0, "Credit Period must be positive").required("Credit Period is required"),
    paymentDate: Pt.required("Payment Date is required"),
    paymentTerms: ne().required("Payment Terms is required").positive("Payment Terms must be positive")
  }).required("Payment Information is required"),
  deliveryReceivingPerson: c().matches(R.IS_STRING, "Please enter a valid name").required("Delivery Receiving Person is required")
});
X().shape({
  loadingLocation: c().required("Loading location is required."),
  lotNo: c().required("Lot number is required.")
});
X().shape({
  // locationType: "cc" | "dc",
  // grnType: "transfer" | "purchase",
  // purchaseType: "fixed price sales" | "consignment sales/bikri" | "mgp sales";
  purchaseType: c().required("Type of purchase is required"),
  companyName: c().required("Company Name is required"),
  purchaseInstructionsBy: c().required("Requesting person name required").matches(R.IS_STRING, "Name should only contain alphabets."),
  // purchaseLocation: yup.string().required('Purchase Location is required'),
  // purchaseForSalesLocation: yup.string().required('Purchase For Which is required'),
  source: c().required("Source is required"),
  selectedParty: c().required("Please select one option"),
  grnProducts: Vt().of(
    X().shape({
      productName: c().required("Select at least one product"),
      quantity: ne().required("Quantity is required").positive("Quantity can't be negative"),
      unitPrice: ne().required("Unit price is required").positive("Price can't be negative"),
      grossWeight: ne().required("Gross weight is required").positive("Weight can't be negative"),
      packingMaterialWeight: ne().required("Packing material weight is required").positive("Weight can't be negative"),
      purchaseDate: Pt.required("Purchase Date is required"),
      dispatchDate: Pt.required("Dispatch Date is required"),
      deliveryDate: Pt.required("Delivery Date is required"),
      deliveryLocation: c().required("Delivery Location is required"),
      expectedHarvestDate: dt().nullable(),
      rtv: Ye().required("Select is product rtv or not")
    })
  ).required("At lease one product required"),
  freight: ne().nullable().positive("Amount can't be negative"),
  otherCharges: ne().nullable().positive("Amount can't be negative"),
  purchasedBy: c().nullable().matches(R.IS_STRING, "Name should only contain alphabets."),
  receivedThrough: c().nullable().matches(R.IS_STRING, "Name should only contain alphabets."),
  securityPerson: c().nullable().matches(R.IS_STRING, "Name should only contain alphabets."),
  vehicleNo: c().nullable().matches(R.IS_VEHICLE_NO, "Please enter valid vehicle number."),
  cratesIn: ne().nullable().positive("Count of crates can't be negative"),
  deliveryReceivingPerson: c().required("Delivery receiving person name is required").matches(R.IS_STRING, "Name should only contain alphabets."),
  rmn: c().required("RM name is required").matches(R.IS_STRING, "Name should only contain alphabets.")
});
X().shape({
  companyName: c().required("Company name is required"),
  debitCreditTo: c().required("Name required for debit / credit to."),
  payReceivedFrom: c().required("Name required for pay / received from"),
  location: c().required("Location is required"),
  noOfLabours: ne().required("Number of labour is required").positive("Number of labours cannot be negative"),
  ratePerLabour: ne().required("Rate is required").positive("Rate cannot be negative"),
  loadingDate: dt().required("Loading date is required"),
  contactNo: c().required("Contact number is required.").matches(R.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: c().nullable().matches(R.IS_NUMBER, "Please enter valid contact number."),
  paymentMode: c().required("Payment mode is required"),
  receiverName: c().required("Receiver name is required").matches(R.IS_STRING, "Name should only contains alphabets.")
});
X().shape({
  companyName: c().required("Company name is required"),
  debitCreditTo: c().required("Name required for debit / credit to."),
  payReceivedFrom: c().required("Name required for pay / received from"),
  location: c().required("Location is required"),
  paymentMode: c().required("Payment mode is required"),
  receiverName: c().required("Receiver name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  particulars: Vt(
    X({
      description: c().required("Description is required").min(5, "Minimum 5 characters required"),
      amt: ne().required("Amount is required").positive("Amount cannot be negative")
    })
  )
});
X().shape({
  companyName: c().required("Company name is required"),
  debitCreditTo: c().required("Name required for debit / credit to."),
  payReceivedFrom: c().required("Name required for pay / received from"),
  location: c().required("Location is required"),
  sellerName: c().required("Seller name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  address: xe,
  contactNo: c().required("Contact number is required.").matches(R.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: c().nullable().matches(R.CONTACT_NO, "Please enter valid contact number."),
  paymentMode: c().required("Payment mode is required"),
  receiverName: c().required("Receiver name is required").matches(R.IS_STRING, "Name should only contains alphabets."),
  materials: Vt().of(
    X().shape({
      itemName: c().required("Item name is required"),
      itemUom: c().required("UOM is required"),
      itemQty: ne().required("Quantity is required").positive("Quantity cannot be negative"),
      rate: ne().required("Quantity is required").positive("Quantity cannot be negative")
    })
  )
});
X().shape({
  companyName: c().required("Company name is required"),
  debitCreditTo: c().required("Name required for debit / credit to."),
  payReceivedFrom: c().required("Name required for pay / received from"),
  location: c().required("Location is required"),
  driverName: c().required("Driver name is required").matches(R.IS_STRING, "Name should only contain alphabets"),
  contactNo: c().required("Contact number is required").matches(R.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: c().nullable().matches(R.CONTACT_NO, "Please enter valid contact number."),
  vehicleNo: c().required("Vehicle number is required"),
  dispatchLocation: c().required("Dispatch location is required"),
  destinationLocation: c().required("Destination location is required"),
  paymentMode: c().required("Payment mode is required"),
  receiverName: c().required("Receiver name is required").matches(R.IS_STRING, "Name should only contain alphabets")
});
X().shape({
  deliveryCType: c().required("Challan type is required"),
  companyName: c().required("Company name is required"),
  partyName: c().required("Name is required"),
  fromLocation: c().required("Location is required"),
  toLocation: c().notRequired(),
  driverName: c().required("Driver name is required").matches(R.IS_STRING, "Name should only contain alphabets."),
  contactNo: c().required("Driver contact number is required.").matches(R.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: c().nullable().matches(R.CONTACT_NO, "Please enter valid contact number."),
  vehicleNo: c().required("Vehicle number is required").matches(R.IS_VEHICLE_NO, "Please enter valid vehicle number."),
  receiverName: c().required("Receiver name is required").matches(R.IS_STRING, "Name should only contain alphabets."),
  rmn: c().required("RM name is required").matches(R.IS_STRING, "Name should only contain alphabets."),
  items: Vt().of(
    X().shape({
      productName: c().required("Product name is required"),
      uom: c().required("UOM is required"),
      quantity: ne().required("Quantity is required").positive("Quantity cannot be negative"),
      unitPrice: ne().required("Unit price is required").positive("Price cannot be negative"),
      grossWeight: ne().required("Gross weight is required").positive("Weight cannot be negative"),
      packingMaterialWeight: ne().required("Packing material weight is required").positive("Weight cannot be negative")
    })
  ),
  anyAttachment: Te().nullable().test("fileFormat", "Invalid image format (only jpg, jpeg, png allowed)", (t) => {
    if (!t) return !0;
    const e = t;
    return ["image/jpeg", "image/png", "image/jpg"].includes(e.type);
  }).test("fileSize", "Image is too large (max 1MB)", (t) => {
    if (!t) return !0;
    const e = t, r = 1 * 1024 * 1024;
    return e.size <= r;
  })
});
X().shape({
  paymentDate: dt().required("Payment Date is required"),
  partyName: c().required("Party Name is required"),
  amount: ne().required("Amount is required").positive("Amount must be positive"),
  bankAccNo: c().required("Bank Account Number is required"),
  ifscCode: c().required("IFSC Code is required"),
  paymentMode: c().required("Payment Mode is required"),
  typesOfTransaction: c().required("Types of Transaction is required"),
  otherTransaction: c().required("Other Transaction is required"),
  vehicleNo: c().required("Vehicle No is required"),
  placeOfPurchase: c().required("Place of Purchase is required"),
  contactpersonRec: c().required("Contact Person Receiving is required"),
  contactpersonSen: c().required("Contact Person Sending is required"),
  costCenter: c().required("Cost Center is required"),
  kycByEmail: c().required("KYC by Email is required"),
  remark: c().required("Remark is required")
});
Is.withTypes();
const _r = {
  black: "#000",
  white: "#fff"
}, Wt = {
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
}, Kt = {
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
}, Ht = {
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
}, Yt = {
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
}, Qt = {
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
}, fr = {
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
}, Ff = {
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
function Ct(t) {
  let e = "https://mui.com/production-error/?code=" + t;
  for (let r = 1; r < arguments.length; r += 1)
    e += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + t + "; visit " + e + " for the full message.";
}
var wi = { exports: {} }, Wr = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function jf() {
  if (is) return se;
  is = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, m = t ? Symbol.for("react.suspense") : 60113, g = t ? Symbol.for("react.suspense_list") : 60120, b = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, E = t ? Symbol.for("react.block") : 60121, T = t ? Symbol.for("react.fundamental") : 60117, A = t ? Symbol.for("react.responder") : 60118, k = t ? Symbol.for("react.scope") : 60119;
  function S(v) {
    if (typeof v == "object" && v !== null) {
      var j = v.$$typeof;
      switch (j) {
        case e:
          switch (v = v.type, v) {
            case l:
            case h:
            case n:
            case a:
            case i:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case u:
                case f:
                case _:
                case b:
                case o:
                  return v;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function x(v) {
    return S(v) === h;
  }
  return se.AsyncMode = l, se.ConcurrentMode = h, se.ContextConsumer = u, se.ContextProvider = o, se.Element = e, se.ForwardRef = f, se.Fragment = n, se.Lazy = _, se.Memo = b, se.Portal = r, se.Profiler = a, se.StrictMode = i, se.Suspense = m, se.isAsyncMode = function(v) {
    return x(v) || S(v) === l;
  }, se.isConcurrentMode = x, se.isContextConsumer = function(v) {
    return S(v) === u;
  }, se.isContextProvider = function(v) {
    return S(v) === o;
  }, se.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, se.isForwardRef = function(v) {
    return S(v) === f;
  }, se.isFragment = function(v) {
    return S(v) === n;
  }, se.isLazy = function(v) {
    return S(v) === _;
  }, se.isMemo = function(v) {
    return S(v) === b;
  }, se.isPortal = function(v) {
    return S(v) === r;
  }, se.isProfiler = function(v) {
    return S(v) === a;
  }, se.isStrictMode = function(v) {
    return S(v) === i;
  }, se.isSuspense = function(v) {
    return S(v) === m;
  }, se.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === h || v === a || v === i || v === m || v === g || typeof v == "object" && v !== null && (v.$$typeof === _ || v.$$typeof === b || v.$$typeof === o || v.$$typeof === u || v.$$typeof === f || v.$$typeof === T || v.$$typeof === A || v.$$typeof === k || v.$$typeof === E);
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
var as;
function Vf() {
  return as || (as = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, m = t ? Symbol.for("react.suspense") : 60113, g = t ? Symbol.for("react.suspense_list") : 60120, b = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, E = t ? Symbol.for("react.block") : 60121, T = t ? Symbol.for("react.fundamental") : 60117, A = t ? Symbol.for("react.responder") : 60118, k = t ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === h || M === a || M === i || M === m || M === g || typeof M == "object" && M !== null && (M.$$typeof === _ || M.$$typeof === b || M.$$typeof === o || M.$$typeof === u || M.$$typeof === f || M.$$typeof === T || M.$$typeof === A || M.$$typeof === k || M.$$typeof === E);
    }
    function x(M) {
      if (typeof M == "object" && M !== null) {
        var qe = M.$$typeof;
        switch (qe) {
          case e:
            var Lt = M.type;
            switch (Lt) {
              case l:
              case h:
              case n:
              case a:
              case i:
              case m:
                return Lt;
              default:
                var Rr = Lt && Lt.$$typeof;
                switch (Rr) {
                  case u:
                  case f:
                  case _:
                  case b:
                  case o:
                    return Rr;
                  default:
                    return qe;
                }
            }
          case r:
            return qe;
        }
      }
    }
    var v = l, j = h, Z = u, L = o, d = e, F = f, V = n, ee = _, _e = b, me = r, ve = a, ye = i, W = m, We = !1;
    function pt(M) {
      return We || (We = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(M) || x(M) === l;
    }
    function D(M) {
      return x(M) === h;
    }
    function y(M) {
      return x(M) === u;
    }
    function N(M) {
      return x(M) === o;
    }
    function $(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function I(M) {
      return x(M) === f;
    }
    function B(M) {
      return x(M) === n;
    }
    function z(M) {
      return x(M) === _;
    }
    function G(M) {
      return x(M) === b;
    }
    function K(M) {
      return x(M) === r;
    }
    function H(M) {
      return x(M) === a;
    }
    function Q(M) {
      return x(M) === i;
    }
    function Re(M) {
      return x(M) === m;
    }
    oe.AsyncMode = v, oe.ConcurrentMode = j, oe.ContextConsumer = Z, oe.ContextProvider = L, oe.Element = d, oe.ForwardRef = F, oe.Fragment = V, oe.Lazy = ee, oe.Memo = _e, oe.Portal = me, oe.Profiler = ve, oe.StrictMode = ye, oe.Suspense = W, oe.isAsyncMode = pt, oe.isConcurrentMode = D, oe.isContextConsumer = y, oe.isContextProvider = N, oe.isElement = $, oe.isForwardRef = I, oe.isFragment = B, oe.isLazy = z, oe.isMemo = G, oe.isPortal = K, oe.isProfiler = H, oe.isStrictMode = Q, oe.isSuspense = Re, oe.isValidElementType = S, oe.typeOf = x;
  }()), oe;
}
var ss;
function Ko() {
  return ss || (ss = 1, process.env.NODE_ENV === "production" ? Wr.exports = jf() : Wr.exports = Vf()), Wr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yn, os;
function Lf() {
  if (os) return Yn;
  os = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, u = 0; u < 10; u++)
        o["_" + String.fromCharCode(u)] = u;
      var l = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        h[f] = f;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Yn = i() ? Object.assign : function(a, o) {
    for (var u, l = n(a), h, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var m in u)
        e.call(u, m) && (l[m] = u[m]);
      if (t) {
        h = t(u);
        for (var g = 0; g < h.length; g++)
          r.call(u, h[g]) && (l[h[g]] = u[h[g]]);
      }
    }
    return l;
  }, Yn;
}
var Qn, us;
function ki() {
  if (us) return Qn;
  us = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qn = t, Qn;
}
var Zn, cs;
function Ho() {
  return cs || (cs = 1, Zn = Function.call.bind(Object.prototype.hasOwnProperty)), Zn;
}
var Xn, ls;
function Bf() {
  if (ls) return Xn;
  ls = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = ki(), r = {}, n = Ho();
    t = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, u, l, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var m;
          try {
            if (typeof a[f] != "function") {
              var g = Error(
                (l || "React class") + ": " + u + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = a[f](o, f, l, u, null, e);
          } catch (_) {
            m = _;
          }
          if (m && !(m instanceof Error) && t(
            (l || "React class") + ": type specification of " + u + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var b = h ? h() : "";
            t(
              "Failed " + u + " type: " + m.message + (b ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Xn = i, Xn;
}
var Jn, ds;
function Uf() {
  if (ds) return Jn;
  ds = 1;
  var t = Ko(), e = Lf(), r = ki(), n = Ho(), i = Bf(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var l = "Warning: " + u;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Jn = function(u, l) {
    var h = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(D) {
      var y = D && (h && D[h] || D[f]);
      if (typeof y == "function")
        return y;
    }
    var g = "<<anonymous>>", b = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: k(),
      arrayOf: S,
      element: x(),
      elementType: v(),
      instanceOf: j,
      node: F(),
      objectOf: L,
      oneOf: Z,
      oneOfType: d,
      shape: ee,
      exact: _e
    };
    function _(D, y) {
      return D === y ? D !== 0 || 1 / D === 1 / y : D !== D && y !== y;
    }
    function E(D, y) {
      this.message = D, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    E.prototype = Error.prototype;
    function T(D) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, N = 0;
      function $(B, z, G, K, H, Q, Re) {
        if (K = K || g, Q = Q || G, Re !== r) {
          if (l) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var qe = K + ":" + G;
            !y[qe] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[qe] = !0, N++);
          }
        }
        return z[G] == null ? B ? z[G] === null ? new E("The " + H + " `" + Q + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new E("The " + H + " `" + Q + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : D(z, G, K, H, Q);
      }
      var I = $.bind(null, !1);
      return I.isRequired = $.bind(null, !0), I;
    }
    function A(D) {
      function y(N, $, I, B, z, G) {
        var K = N[$], H = ye(K);
        if (H !== D) {
          var Q = W(K);
          return new E(
            "Invalid " + B + " `" + z + "` of type " + ("`" + Q + "` supplied to `" + I + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return T(y);
    }
    function k() {
      return T(o);
    }
    function S(D) {
      function y(N, $, I, B, z) {
        if (typeof D != "function")
          return new E("Property `" + z + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var G = N[$];
        if (!Array.isArray(G)) {
          var K = ye(G);
          return new E("Invalid " + B + " `" + z + "` of type " + ("`" + K + "` supplied to `" + I + "`, expected an array."));
        }
        for (var H = 0; H < G.length; H++) {
          var Q = D(G, H, I, B, z + "[" + H + "]", r);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return T(y);
    }
    function x() {
      function D(y, N, $, I, B) {
        var z = y[N];
        if (!u(z)) {
          var G = ye(z);
          return new E("Invalid " + I + " `" + B + "` of type " + ("`" + G + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(D);
    }
    function v() {
      function D(y, N, $, I, B) {
        var z = y[N];
        if (!t.isValidElementType(z)) {
          var G = ye(z);
          return new E("Invalid " + I + " `" + B + "` of type " + ("`" + G + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(D);
    }
    function j(D) {
      function y(N, $, I, B, z) {
        if (!(N[$] instanceof D)) {
          var G = D.name || g, K = pt(N[$]);
          return new E("Invalid " + B + " `" + z + "` of type " + ("`" + K + "` supplied to `" + I + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return T(y);
    }
    function Z(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function y(N, $, I, B, z) {
        for (var G = N[$], K = 0; K < D.length; K++)
          if (_(G, D[K]))
            return null;
        var H = JSON.stringify(D, function(Re, M) {
          var qe = W(M);
          return qe === "symbol" ? String(M) : M;
        });
        return new E("Invalid " + B + " `" + z + "` of value `" + String(G) + "` " + ("supplied to `" + I + "`, expected one of " + H + "."));
      }
      return T(y);
    }
    function L(D) {
      function y(N, $, I, B, z) {
        if (typeof D != "function")
          return new E("Property `" + z + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var G = N[$], K = ye(G);
        if (K !== "object")
          return new E("Invalid " + B + " `" + z + "` of type " + ("`" + K + "` supplied to `" + I + "`, expected an object."));
        for (var H in G)
          if (n(G, H)) {
            var Q = D(G, H, I, B, z + "." + H, r);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return T(y);
    }
    function d(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var y = 0; y < D.length; y++) {
        var N = D[y];
        if (typeof N != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + We(N) + " at index " + y + "."
          ), o;
      }
      function $(I, B, z, G, K) {
        for (var H = [], Q = 0; Q < D.length; Q++) {
          var Re = D[Q], M = Re(I, B, z, G, K, r);
          if (M == null)
            return null;
          M.data && n(M.data, "expectedType") && H.push(M.data.expectedType);
        }
        var qe = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new E("Invalid " + G + " `" + K + "` supplied to " + ("`" + z + "`" + qe + "."));
      }
      return T($);
    }
    function F() {
      function D(y, N, $, I, B) {
        return me(y[N]) ? null : new E("Invalid " + I + " `" + B + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return T(D);
    }
    function V(D, y, N, $, I) {
      return new E(
        (D || "React class") + ": " + y + " type `" + N + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function ee(D) {
      function y(N, $, I, B, z) {
        var G = N[$], K = ye(G);
        if (K !== "object")
          return new E("Invalid " + B + " `" + z + "` of type `" + K + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var H in D) {
          var Q = D[H];
          if (typeof Q != "function")
            return V(I, B, z, H, W(Q));
          var Re = Q(G, H, I, B, z + "." + H, r);
          if (Re)
            return Re;
        }
        return null;
      }
      return T(y);
    }
    function _e(D) {
      function y(N, $, I, B, z) {
        var G = N[$], K = ye(G);
        if (K !== "object")
          return new E("Invalid " + B + " `" + z + "` of type `" + K + "` " + ("supplied to `" + I + "`, expected `object`."));
        var H = e({}, N[$], D);
        for (var Q in H) {
          var Re = D[Q];
          if (n(D, Q) && typeof Re != "function")
            return V(I, B, z, Q, W(Re));
          if (!Re)
            return new E(
              "Invalid " + B + " `" + z + "` key `" + Q + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(N[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var M = Re(G, Q, I, B, z + "." + Q, r);
          if (M)
            return M;
        }
        return null;
      }
      return T(y);
    }
    function me(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(me);
          if (D === null || u(D))
            return !0;
          var y = m(D);
          if (y) {
            var N = y.call(D), $;
            if (y !== D.entries) {
              for (; !($ = N.next()).done; )
                if (!me($.value))
                  return !1;
            } else
              for (; !($ = N.next()).done; ) {
                var I = $.value;
                if (I && !me(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ve(D, y) {
      return D === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function ye(D) {
      var y = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : ve(y, D) ? "symbol" : y;
    }
    function W(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var y = ye(D);
      if (y === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function We(D) {
      var y = W(D);
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
    function pt(D) {
      return !D.constructor || !D.constructor.name ? g : D.constructor.name;
    }
    return b.checkPropTypes = i, b.resetWarningCache = i.resetWarningCache, b.PropTypes = b, b;
  }, Jn;
}
var ei, fs;
function zf() {
  if (fs) return ei;
  fs = 1;
  var t = ki();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, ei = function() {
    function n(o, u, l, h, f, m) {
      if (m !== t) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
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
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, ei;
}
if (process.env.NODE_ENV !== "production") {
  var Gf = Ko(), Wf = !0;
  wi.exports = Uf()(Gf.isElement, Wf);
} else
  wi.exports = zf()();
var Kf = wi.exports;
const hr = /* @__PURE__ */ Ci(Kf);
function bt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function Yo(t) {
  if (!bt(t))
    return t;
  const e = {};
  return Object.keys(t).forEach((r) => {
    e[r] = Yo(t[r]);
  }), e;
}
function Ue(t, e, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...t
  } : t;
  return bt(t) && bt(e) && Object.keys(e).forEach((i) => {
    bt(e[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(t, i) && bt(t[i]) ? n[i] = Ue(t[i], e[i], r) : r.clone ? n[i] = bt(e[i]) ? Yo(e[i]) : e[i] : n[i] = e[i];
  }), n;
}
const Hf = (t) => {
  const e = Object.keys(t).map((r) => ({
    key: r,
    val: t[r]
  })) || [];
  return e.sort((r, n) => r.val - n.val), e.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Yf(t) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: e = {
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
  } = t, a = Hf(e), o = Object.keys(a);
  function u(g) {
    return `@media (min-width:${typeof e[g] == "number" ? e[g] : g}${r})`;
  }
  function l(g) {
    return `@media (max-width:${(typeof e[g] == "number" ? e[g] : g) - n / 100}${r})`;
  }
  function h(g, b) {
    const _ = o.indexOf(b);
    return `@media (min-width:${typeof e[g] == "number" ? e[g] : g}${r}) and (max-width:${(_ !== -1 && typeof e[o[_]] == "number" ? e[o[_]] : b) - n / 100}${r})`;
  }
  function f(g) {
    return o.indexOf(g) + 1 < o.length ? h(g, o[o.indexOf(g) + 1]) : u(g);
  }
  function m(g) {
    const b = o.indexOf(g);
    return b === 0 ? u(o[1]) : b === o.length - 1 ? l(o[b]) : h(g, o[o.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: o,
    values: a,
    up: u,
    down: l,
    between: h,
    only: f,
    not: m,
    unit: r,
    ...i
  };
}
function Qf(t, e) {
  if (!t.containerQueries)
    return e;
  const r = Object.keys(e).filter((n) => n.startsWith("@container")).sort((n, i) => {
    var o, u;
    const a = /min-width:\s*([0-9.]+)/;
    return +(((o = n.match(a)) == null ? void 0 : o[1]) || 0) - +(((u = i.match(a)) == null ? void 0 : u[1]) || 0);
  });
  return r.length ? r.reduce((n, i) => {
    const a = e[i];
    return delete n[i], n[i] = a, n;
  }, {
    ...e
  }) : e;
}
function Zf(t, e) {
  return e === "@" || e.startsWith("@") && (t.some((r) => e.startsWith(`@${r}`)) || !!e.match(/^@\d/));
}
function Xf(t, e) {
  const r = e.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${e})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ct(18, `(${e})`));
    return null;
  }
  const [, n, i] = r, a = Number.isNaN(+n) ? n || 0 : +n;
  return t.containerQueries(i).up(a);
}
function Jf(t) {
  const e = (a, o) => a.replace("@media", o ? `@container ${o}` : "@container");
  function r(a, o) {
    a.up = (...u) => e(t.breakpoints.up(...u), o), a.down = (...u) => e(t.breakpoints.down(...u), o), a.between = (...u) => e(t.breakpoints.between(...u), o), a.only = (...u) => e(t.breakpoints.only(...u), o), a.not = (...u) => {
      const l = e(t.breakpoints.not(...u), o);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, i = (a) => (r(n, a), n);
  return r(i), {
    ...t,
    containerQueries: i
  };
}
const eh = {
  borderRadius: 4
}, Tt = process.env.NODE_ENV !== "production" ? hr.oneOfType([hr.number, hr.string, hr.object, hr.array]) : {};
function br(t, e) {
  return e ? Ue(t, e, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : t;
}
const yn = {
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
}, hs = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (t) => `@media (min-width:${yn[t]}px)`
}, th = {
  containerQueries: (t) => ({
    up: (e) => {
      let r = typeof e == "number" ? e : yn[e] || e;
      return typeof r == "number" && (r = `${r}px`), t ? `@container ${t} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function ht(t, e, r) {
  const n = t.theme || {};
  if (Array.isArray(e)) {
    const a = n.breakpoints || hs;
    return e.reduce((o, u, l) => (o[a.up(a.keys[l])] = r(e[l]), o), {});
  }
  if (typeof e == "object") {
    const a = n.breakpoints || hs;
    return Object.keys(e).reduce((o, u) => {
      if (Zf(a.keys, u)) {
        const l = Xf(n.containerQueries ? n : th, u);
        l && (o[l] = r(e[u], u));
      } else if (Object.keys(a.values || yn).includes(u)) {
        const l = a.up(u);
        o[l] = r(e[u], u);
      } else {
        const l = u;
        o[l] = e[l];
      }
      return o;
    }, {});
  }
  return r(e);
}
function rh(t = {}) {
  var r;
  return ((r = t.keys) == null ? void 0 : r.reduce((n, i) => {
    const a = t.up(i);
    return n[a] = {}, n;
  }, {})) || {};
}
function nh(t, e) {
  return t.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, e);
}
function Qo(t) {
  if (typeof t != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ct(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function gn(t, e, r = !0) {
  if (!e || typeof e != "string")
    return null;
  if (t && t.vars && r) {
    const n = `vars.${e}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, t);
    if (n != null)
      return n;
  }
  return e.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, t);
}
function an(t, e, r, n = r) {
  let i;
  return typeof t == "function" ? i = t(r) : Array.isArray(t) ? i = t[r] || n : i = gn(t, r) || n, e && (i = e(i, n, t)), i;
}
function Ce(t) {
  const {
    prop: e,
    cssProperty: r = t.prop,
    themeKey: n,
    transform: i
  } = t, a = (o) => {
    if (o[e] == null)
      return null;
    const u = o[e], l = o.theme, h = gn(l, n) || {};
    return ht(o, u, (m) => {
      let g = an(h, i, m);
      return m === g && typeof m == "string" && (g = an(h, i, `${e}${m === "default" ? "" : Qo(m)}`, m)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [e]: Tt
  } : {}, a.filterProps = [e], a;
}
function ih(t) {
  const e = {};
  return (r) => (e[r] === void 0 && (e[r] = t(r)), e[r]);
}
const ah = {
  m: "margin",
  p: "padding"
}, sh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ps = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, oh = ih((t) => {
  if (t.length > 2)
    if (ps[t])
      t = ps[t];
    else
      return [t];
  const [e, r] = t.split(""), n = ah[e], i = sh[r] || "";
  return Array.isArray(i) ? i.map((a) => n + a) : [n + i];
}), bn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], vn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], uh = [...bn, ...vn];
function Pr(t, e, r, n) {
  const i = gn(t, e, !0) ?? r;
  return typeof i == "number" || typeof i == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), typeof i == "string" ? `calc(${a} * ${i})` : i * a) : Array.isArray(i) ? (a) => {
    if (typeof a == "string")
      return a;
    const o = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(o) ? o > i.length - 1 && console.error([`MUI: The value provided (${o}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${o} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${e}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${e}\` as a number.`].join(`
`)));
    const u = i[o];
    return a >= 0 ? u : typeof u == "number" ? -u : `-${u}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${e}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ii(t) {
  return Pr(t, "spacing", 8, "spacing");
}
function xr(t, e) {
  return typeof e == "string" || e == null ? e : t(e);
}
function ch(t, e) {
  return (r) => t.reduce((n, i) => (n[i] = xr(e, r), n), {});
}
function lh(t, e, r, n) {
  if (!e.includes(r))
    return null;
  const i = oh(r), a = ch(i, n), o = t[r];
  return ht(t, o, a);
}
function Zo(t, e) {
  const r = Ii(t.theme);
  return Object.keys(t).map((n) => lh(t, e, n, r)).reduce(br, {});
}
function Se(t) {
  return Zo(t, bn);
}
Se.propTypes = process.env.NODE_ENV !== "production" ? bn.reduce((t, e) => (t[e] = Tt, t), {}) : {};
Se.filterProps = bn;
function we(t) {
  return Zo(t, vn);
}
we.propTypes = process.env.NODE_ENV !== "production" ? vn.reduce((t, e) => (t[e] = Tt, t), {}) : {};
we.filterProps = vn;
process.env.NODE_ENV !== "production" && uh.reduce((t, e) => (t[e] = Tt, t), {});
function Xo(t = 8, e = Ii({
  spacing: t
})) {
  if (t.mui)
    return t;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const o = e(a);
    return typeof o == "number" ? `${o}px` : o;
  }).join(" "));
  return r.mui = !0, r;
}
function Sn(...t) {
  const e = t.reduce((n, i) => (i.filterProps.forEach((a) => {
    n[a] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, a) => e[a] ? br(i, e[a](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? t.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = t.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function He(t) {
  return typeof t != "number" ? t : `${t}px solid`;
}
function Qe(t, e) {
  return Ce({
    prop: t,
    themeKey: "borders",
    transform: e
  });
}
const dh = Qe("border", He), fh = Qe("borderTop", He), hh = Qe("borderRight", He), ph = Qe("borderBottom", He), mh = Qe("borderLeft", He), yh = Qe("borderColor"), gh = Qe("borderTopColor"), bh = Qe("borderRightColor"), vh = Qe("borderBottomColor"), Sh = Qe("borderLeftColor"), wh = Qe("outline", He), Eh = Qe("outlineColor"), wn = (t) => {
  if (t.borderRadius !== void 0 && t.borderRadius !== null) {
    const e = Pr(t.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: xr(e, n)
    });
    return ht(t, t.borderRadius, r);
  }
  return null;
};
wn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Tt
} : {};
wn.filterProps = ["borderRadius"];
Sn(dh, fh, hh, ph, mh, yh, gh, bh, vh, Sh, wn, wh, Eh);
const En = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const e = Pr(t.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: xr(e, n)
    });
    return ht(t, t.gap, r);
  }
  return null;
};
En.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Tt
} : {};
En.filterProps = ["gap"];
const _n = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const e = Pr(t.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: xr(e, n)
    });
    return ht(t, t.columnGap, r);
  }
  return null;
};
_n.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Tt
} : {};
_n.filterProps = ["columnGap"];
const Cn = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const e = Pr(t.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: xr(e, n)
    });
    return ht(t, t.rowGap, r);
  }
  return null;
};
Cn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Tt
} : {};
Cn.filterProps = ["rowGap"];
const _h = Ce({
  prop: "gridColumn"
}), Ch = Ce({
  prop: "gridRow"
}), Oh = Ce({
  prop: "gridAutoFlow"
}), Th = Ce({
  prop: "gridAutoColumns"
}), Nh = Ce({
  prop: "gridAutoRows"
}), Ph = Ce({
  prop: "gridTemplateColumns"
}), xh = Ce({
  prop: "gridTemplateRows"
}), Rh = Ce({
  prop: "gridTemplateAreas"
}), Ah = Ce({
  prop: "gridArea"
});
Sn(En, _n, Cn, _h, Ch, Oh, Th, Nh, Ph, xh, Rh, Ah);
function Xt(t, e) {
  return e === "grey" ? e : t;
}
const Dh = Ce({
  prop: "color",
  themeKey: "palette",
  transform: Xt
}), qh = Ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Xt
}), kh = Ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Xt
});
Sn(Dh, qh, kh);
function Be(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const Ih = Ce({
  prop: "width",
  transform: Be
}), $i = (t) => {
  if (t.maxWidth !== void 0 && t.maxWidth !== null) {
    const e = (r) => {
      var i, a, o, u, l;
      const n = ((o = (a = (i = t.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : o[r]) || yn[r];
      return n ? ((l = (u = t.theme) == null ? void 0 : u.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${t.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Be(r)
      };
    };
    return ht(t, t.maxWidth, e);
  }
  return null;
};
$i.filterProps = ["maxWidth"];
const $h = Ce({
  prop: "minWidth",
  transform: Be
}), Mh = Ce({
  prop: "height",
  transform: Be
}), Fh = Ce({
  prop: "maxHeight",
  transform: Be
}), jh = Ce({
  prop: "minHeight",
  transform: Be
});
Ce({
  prop: "size",
  cssProperty: "width",
  transform: Be
});
Ce({
  prop: "size",
  cssProperty: "height",
  transform: Be
});
const Vh = Ce({
  prop: "boxSizing"
});
Sn(Ih, $i, $h, Mh, Fh, jh, Vh);
const On = {
  // borders
  border: {
    themeKey: "borders",
    transform: He
  },
  borderTop: {
    themeKey: "borders",
    transform: He
  },
  borderRight: {
    themeKey: "borders",
    transform: He
  },
  borderBottom: {
    themeKey: "borders",
    transform: He
  },
  borderLeft: {
    themeKey: "borders",
    transform: He
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
    transform: He
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: wn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Xt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Xt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Xt
  },
  // spacing
  p: {
    style: we
  },
  pt: {
    style: we
  },
  pr: {
    style: we
  },
  pb: {
    style: we
  },
  pl: {
    style: we
  },
  px: {
    style: we
  },
  py: {
    style: we
  },
  padding: {
    style: we
  },
  paddingTop: {
    style: we
  },
  paddingRight: {
    style: we
  },
  paddingBottom: {
    style: we
  },
  paddingLeft: {
    style: we
  },
  paddingX: {
    style: we
  },
  paddingY: {
    style: we
  },
  paddingInline: {
    style: we
  },
  paddingInlineStart: {
    style: we
  },
  paddingInlineEnd: {
    style: we
  },
  paddingBlock: {
    style: we
  },
  paddingBlockStart: {
    style: we
  },
  paddingBlockEnd: {
    style: we
  },
  m: {
    style: Se
  },
  mt: {
    style: Se
  },
  mr: {
    style: Se
  },
  mb: {
    style: Se
  },
  ml: {
    style: Se
  },
  mx: {
    style: Se
  },
  my: {
    style: Se
  },
  margin: {
    style: Se
  },
  marginTop: {
    style: Se
  },
  marginRight: {
    style: Se
  },
  marginBottom: {
    style: Se
  },
  marginLeft: {
    style: Se
  },
  marginX: {
    style: Se
  },
  marginY: {
    style: Se
  },
  marginInline: {
    style: Se
  },
  marginInlineStart: {
    style: Se
  },
  marginInlineEnd: {
    style: Se
  },
  marginBlock: {
    style: Se
  },
  marginBlockStart: {
    style: Se
  },
  marginBlockEnd: {
    style: Se
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (t) => ({
      "@media print": {
        display: t
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
    style: En
  },
  rowGap: {
    style: Cn
  },
  columnGap: {
    style: _n
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
    transform: Be
  },
  maxWidth: {
    style: $i
  },
  minWidth: {
    transform: Be
  },
  height: {
    transform: Be
  },
  maxHeight: {
    transform: Be
  },
  minHeight: {
    transform: Be
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
function Lh(...t) {
  const e = t.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(e);
  return t.every((n) => r.size === Object.keys(n).length);
}
function Bh(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Uh() {
  function t(r, n, i, a) {
    const o = {
      [r]: n,
      theme: i
    }, u = a[r];
    if (!u)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: h,
      transform: f,
      style: m
    } = u;
    if (n == null)
      return null;
    if (h === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = gn(i, h) || {};
    return m ? m(o) : ht(o, n, (_) => {
      let E = an(g, f, _);
      return _ === E && typeof _ == "string" && (E = an(g, f, `${r}${_ === "default" ? "" : Qo(_)}`, _)), l === !1 ? E : {
        [l]: E
      };
    });
  }
  function e(r) {
    const {
      sx: n,
      theme: i = {}
    } = r || {};
    if (!n)
      return null;
    const a = i.unstable_sxConfig ?? On;
    function o(u) {
      let l = u;
      if (typeof u == "function")
        l = u(i);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const h = rh(i.breakpoints), f = Object.keys(h);
      let m = h;
      return Object.keys(l).forEach((g) => {
        const b = Bh(l[g], i);
        if (b != null)
          if (typeof b == "object")
            if (a[g])
              m = br(m, t(g, b, i, a));
            else {
              const _ = ht({
                theme: i
              }, b, (E) => ({
                [g]: E
              }));
              Lh(_, b) ? m[g] = e({
                sx: b,
                theme: i
              }) : m = br(m, _);
            }
          else
            m = br(m, t(g, b, i, a));
      }), Qf(i, nh(f, m));
    }
    return Array.isArray(n) ? n.map(o) : o(n);
  }
  return e;
}
const Tn = Uh();
Tn.filterProps = ["sx"];
function zh(t, e) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[t]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let i = r.getColorSchemeSelector(t);
    return i === "&" ? e : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: e
    });
  }
  return r.palette.mode === t ? e : {};
}
function Gh(t = {}, ...e) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: a = {},
    ...o
  } = t, u = Yf(r), l = Xo(i);
  let h = Ue({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...eh,
      ...a
    }
  }, o);
  return h = Jf(h), h.applyStyles = zh, h = e.reduce((f, m) => Ue(f, m), h), h.unstable_sxConfig = {
    ...On,
    ...o == null ? void 0 : o.unstable_sxConfig
  }, h.unstable_sx = function(m) {
    return Tn({
      sx: m,
      theme: this
    });
  }, h;
}
const ms = (t) => t, Wh = () => {
  let t = ms;
  return {
    configure(e) {
      t = e;
    },
    generate(e) {
      return t(e);
    },
    reset() {
      t = ms;
    }
  };
}, Kh = Wh(), Hh = {
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
function Yh(t, e, r = "Mui") {
  const n = Hh[e];
  return n ? `${r}-${n}` : `${Kh.generate(t)}-${e}`;
}
function Qh(t, e = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(e, Math.min(t, r));
}
function Mi(t, e = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (t < e || t > r) && console.error(`MUI: The value provided ${t} is out of range [${e}, ${r}].`), Qh(t, e, r);
}
function Zh(t) {
  t = t.slice(1);
  const e = new RegExp(`.{1,${t.length >= 6 ? 2 : 1}}`, "g");
  let r = t.match(e);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ot(t) {
  if (t.type)
    return t;
  if (t.charAt(0) === "#")
    return Ot(Zh(t));
  const e = t.indexOf("("), r = t.substring(0, e);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${t}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ct(9, t));
  let n = t.substring(e + 1, t.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ct(10, i));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const Xh = (t) => {
  const e = Ot(t);
  return e.values.slice(0, 3).map((r, n) => e.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, yr = (t, e) => {
  try {
    return Xh(t);
  } catch {
    return e && process.env.NODE_ENV !== "production" && console.warn(e), t;
  }
};
function Nn(t) {
  const {
    type: e,
    colorSpace: r
  } = t;
  let {
    values: n
  } = t;
  return e.includes("rgb") ? n = n.map((i, a) => a < 3 ? parseInt(i, 10) : i) : e.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), e.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${e}(${n})`;
}
function Jo(t) {
  t = Ot(t);
  const {
    values: e
  } = t, r = e[0], n = e[1] / 100, i = e[2] / 100, a = n * Math.min(i, 1 - i), o = (h, f = (h + r / 30) % 12) => i - a * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let u = "rgb";
  const l = [Math.round(o(0) * 255), Math.round(o(8) * 255), Math.round(o(4) * 255)];
  return t.type === "hsla" && (u += "a", l.push(e[3])), Nn({
    type: u,
    values: l
  });
}
function Ei(t) {
  t = Ot(t);
  let e = t.type === "hsl" || t.type === "hsla" ? Ot(Jo(t)).values : t.values;
  return e = e.map((r) => (t.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
}
function ys(t, e) {
  const r = Ei(t), n = Ei(e);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Jh(t, e) {
  return t = Ot(t), e = Mi(e), (t.type === "rgb" || t.type === "hsl") && (t.type += "a"), t.type === "color" ? t.values[3] = `/${e}` : t.values[3] = e, Nn(t);
}
function Kr(t, e, r) {
  try {
    return Jh(t, e);
  } catch {
    return t;
  }
}
function Fi(t, e) {
  if (t = Ot(t), e = Mi(e), t.type.includes("hsl"))
    t.values[2] *= 1 - e;
  else if (t.type.includes("rgb") || t.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      t.values[r] *= 1 - e;
  return Nn(t);
}
function ce(t, e, r) {
  try {
    return Fi(t, e);
  } catch {
    return t;
  }
}
function ji(t, e) {
  if (t = Ot(t), e = Mi(e), t.type.includes("hsl"))
    t.values[2] += (100 - t.values[2]) * e;
  else if (t.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      t.values[r] += (255 - t.values[r]) * e;
  else if (t.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      t.values[r] += (1 - t.values[r]) * e;
  return Nn(t);
}
function le(t, e, r) {
  try {
    return ji(t, e);
  } catch {
    return t;
  }
}
function ep(t, e = 0.15) {
  return Ei(t) > 0.5 ? Fi(t, e) : ji(t, e);
}
function Hr(t, e, r) {
  try {
    return ep(t, e);
  } catch {
    return t;
  }
}
function tp(t = "") {
  function e(...n) {
    if (!n.length)
      return "";
    const i = n[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${t ? `${t}-` : ""}${i}${e(...n.slice(1))})` : `, ${i}`;
  }
  return (n, ...i) => `var(--${t ? `${t}-` : ""}${n}${e(...i)})`;
}
const gs = (t, e, r, n = []) => {
  let i = t;
  e.forEach((a, o) => {
    o === e.length - 1 ? Array.isArray(i) ? i[Number(a)] = r : i && typeof i == "object" && (i[a] = r) : i && typeof i == "object" && (i[a] || (i[a] = n.includes(a) ? [] : {}), i = i[a]);
  });
}, rp = (t, e, r) => {
  function n(i, a = [], o = []) {
    Object.entries(i).forEach(([u, l]) => {
      (!r || r && !r([...a, u])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...a, u], Array.isArray(l) ? [...o, u] : o) : e([...a, u], l, o));
    });
  }
  n(t);
}, np = (t, e) => typeof e == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => t.includes(n)) || t[t.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
function ti(t, e) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = e || {}, i = {}, a = {}, o = {};
  return rp(
    t,
    (u, l, h) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(u, l))) {
        const f = `--${r ? `${r}-` : ""}${u.join("-")}`, m = np(u, l);
        Object.assign(i, {
          [f]: m
        }), gs(a, u, `var(${f})`, h), gs(o, u, `var(${f}, ${m})`, h);
      }
    },
    (u) => u[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: a,
    varsWithDefaults: o
  };
}
function ip(t, e = {}) {
  const {
    getSelector: r = T,
    disableCssColorScheme: n,
    colorSchemeSelector: i
  } = e, {
    colorSchemes: a = {},
    components: o,
    defaultColorScheme: u = "light",
    ...l
  } = t, {
    vars: h,
    css: f,
    varsWithDefaults: m
  } = ti(l, e);
  let g = m;
  const b = {}, {
    [u]: _,
    ...E
  } = a;
  if (Object.entries(E || {}).forEach(([S, x]) => {
    const {
      vars: v,
      css: j,
      varsWithDefaults: Z
    } = ti(x, e);
    g = Ue(g, Z), b[S] = {
      css: j,
      vars: v
    };
  }), _) {
    const {
      css: S,
      vars: x,
      varsWithDefaults: v
    } = ti(_, e);
    g = Ue(g, v), b[u] = {
      css: S,
      vars: x
    };
  }
  function T(S, x) {
    var j, Z;
    let v = i;
    if (i === "class" && (v = ".%s"), i === "data" && (v = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (v = `[${i}="%s"]`), S) {
      if (v === "media")
        return t.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((Z = (j = a[S]) == null ? void 0 : j.palette) == null ? void 0 : Z.mode) || S})`]: {
            ":root": x
          }
        };
      if (v)
        return t.defaultColorScheme === S ? `:root, ${v.replace("%s", String(S))}` : v.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let S = {
        ...h
      };
      return Object.entries(b).forEach(([, {
        vars: x
      }]) => {
        S = Ue(S, x);
      }), S;
    },
    generateStyleSheets: () => {
      var L, d;
      const S = [], x = t.defaultColorScheme || "light";
      function v(F, V) {
        Object.keys(V).length && S.push(typeof F == "string" ? {
          [F]: {
            ...V
          }
        } : F);
      }
      v(r(void 0, {
        ...f
      }), f);
      const {
        [x]: j,
        ...Z
      } = b;
      if (j) {
        const {
          css: F
        } = j, V = (d = (L = a[x]) == null ? void 0 : L.palette) == null ? void 0 : d.mode, ee = !n && V ? {
          colorScheme: V,
          ...F
        } : {
          ...F
        };
        v(r(x, {
          ...ee
        }), ee);
      }
      return Object.entries(Z).forEach(([F, {
        css: V
      }]) => {
        var me, ve;
        const ee = (ve = (me = a[F]) == null ? void 0 : me.palette) == null ? void 0 : ve.mode, _e = !n && ee ? {
          colorScheme: ee,
          ...V
        } : {
          ...V
        };
        v(r(F, {
          ..._e
        }), _e);
      }), S;
    }
  };
}
function ap(t) {
  return function(r) {
    return t === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : t ? t.startsWith("data-") && !t.includes("%s") ? `[${t}="${r}"] &` : t === "class" ? `.${r} &` : t === "data" ? `[data-${r}] &` : `${t.replace("%s", r)} &` : "&";
  };
}
const bs = {
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
    paper: _r.white,
    default: _r.white
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
}, ri = {
  text: {
    primary: _r.white,
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
    active: _r.white,
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
function vs(t, e, r, n) {
  const i = n.light || n, a = n.dark || n * 1.5;
  t[e] || (t.hasOwnProperty(r) ? t[e] = t[r] : e === "light" ? t.light = ji(t.main, i) : e === "dark" && (t.dark = Fi(t.main, a)));
}
function sp(t = "light") {
  return t === "dark" ? {
    main: Ht[200],
    light: Ht[50],
    dark: Ht[400]
  } : {
    main: Ht[700],
    light: Ht[400],
    dark: Ht[800]
  };
}
function op(t = "light") {
  return t === "dark" ? {
    main: Kt[200],
    light: Kt[50],
    dark: Kt[400]
  } : {
    main: Kt[500],
    light: Kt[300],
    dark: Kt[700]
  };
}
function up(t = "light") {
  return t === "dark" ? {
    main: Wt[500],
    light: Wt[300],
    dark: Wt[700]
  } : {
    main: Wt[700],
    light: Wt[400],
    dark: Wt[800]
  };
}
function cp(t = "light") {
  return t === "dark" ? {
    main: Yt[400],
    light: Yt[300],
    dark: Yt[700]
  } : {
    main: Yt[700],
    light: Yt[500],
    dark: Yt[900]
  };
}
function lp(t = "light") {
  return t === "dark" ? {
    main: Qt[400],
    light: Qt[300],
    dark: Qt[700]
  } : {
    main: Qt[800],
    light: Qt[500],
    dark: Qt[900]
  };
}
function dp(t = "light") {
  return t === "dark" ? {
    main: fr[400],
    light: fr[300],
    dark: fr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: fr[500],
    dark: fr[900]
  };
}
function Vi(t) {
  const {
    mode: e = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...i
  } = t, a = t.primary || sp(e), o = t.secondary || op(e), u = t.error || up(e), l = t.info || cp(e), h = t.success || lp(e), f = t.warning || dp(e);
  function m(E) {
    const T = ys(E, ri.text.primary) >= r ? ri.text.primary : bs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const A = ys(E, T);
      A < 3 && console.error([`MUI: The contrast ratio of ${A}:1 for ${T} on ${E}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return T;
  }
  const g = ({
    color: E,
    name: T,
    mainShade: A = 500,
    lightShade: k = 300,
    darkShade: S = 700
  }) => {
    if (E = {
      ...E
    }, !E.main && E[A] && (E.main = E[A]), !E.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${A}\` property.` : Ct(11, T ? ` (${T})` : "", A));
    if (typeof E.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(E.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ct(12, T ? ` (${T})` : "", JSON.stringify(E.main)));
    return vs(E, "light", k, n), vs(E, "dark", S, n), E.contrastText || (E.contrastText = m(E.main)), E;
  }, b = {
    dark: ri,
    light: bs
  };
  return process.env.NODE_ENV !== "production" && (b[e] || console.error(`MUI: The palette mode \`${e}\` is not supported.`)), Ue({
    // A collection of common colors.
    common: {
      ..._r
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: e,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: o,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: h,
      name: "success"
    }),
    // The grey colors.
    grey: Ff,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b[e]
  }, i);
}
function fp(t) {
  const e = {};
  return Object.entries(t).forEach((n) => {
    const [i, a] = n;
    typeof a == "object" && (e[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), e;
}
function hp(t, e) {
  return {
    toolbar: {
      minHeight: 56,
      [t.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [t.up("sm")]: {
        minHeight: 64
      }
    },
    ...e
  };
}
function pp(t) {
  return Math.round(t * 1e5) / 1e5;
}
const Ss = {
  textTransform: "uppercase"
}, ws = '"Roboto", "Helvetica", "Arial", sans-serif';
function mp(t, e) {
  const {
    fontFamily: r = ws,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: o = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: f,
    ...m
  } = typeof e == "function" ? e(t) : e;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, b = f || ((T) => `${T / l * g}rem`), _ = (T, A, k, S, x) => ({
    fontFamily: r,
    fontWeight: T,
    fontSize: b(A),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ws ? {
      letterSpacing: `${pp(S / A)}em`
    } : {},
    ...x,
    ...h
  }), E = {
    h1: _(i, 96, 1.167, -1.5),
    h2: _(i, 60, 1.2, -0.5),
    h3: _(a, 48, 1.167, 0),
    h4: _(a, 34, 1.235, 0.25),
    h5: _(a, 24, 1.334, 0),
    h6: _(o, 20, 1.6, 0.15),
    subtitle1: _(a, 16, 1.75, 0.15),
    subtitle2: _(o, 14, 1.57, 0.1),
    body1: _(a, 16, 1.5, 0.15),
    body2: _(a, 14, 1.43, 0.15),
    button: _(o, 14, 1.75, 0.4, Ss),
    caption: _(a, 12, 1.66, 0.4),
    overline: _(a, 12, 2.66, 1, Ss),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ue({
    htmlFontSize: l,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: o,
    fontWeightBold: u,
    ...E
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const yp = 0.2, gp = 0.14, bp = 0.12;
function pe(...t) {
  return [`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${yp})`, `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${gp})`, `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${bp})`].join(",");
}
const vp = ["none", pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Sp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, wp = {
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
function Es(t) {
  return `${Math.round(t)}ms`;
}
function Ep(t) {
  if (!t)
    return 0;
  const e = t / 36;
  return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
}
function _p(t) {
  const e = {
    ...Sp,
    ...t.easing
  }, r = {
    ...wp,
    ...t.duration
  };
  return {
    getAutoHeightDuration: Ep,
    create: (i = ["all"], a = {}) => {
      const {
        duration: o = r.standard,
        easing: u = e.easeInOut,
        delay: l = 0,
        ...h
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const f = (g) => typeof g == "string", m = (g) => !Number.isNaN(parseFloat(g));
        !f(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(o) && !f(o) && console.error(`MUI: Argument "duration" must be a number or a string but found ${o}.`), f(u) || console.error('MUI: Argument "easing" must be a string.'), !m(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(h).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(h).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((f) => `${f} ${typeof o == "string" ? o : Es(o)} ${u} ${typeof l == "string" ? l : Es(l)}`).join(",");
    },
    ...t,
    easing: e,
    duration: r
  };
}
const Cp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function _i(t = {}, ...e) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: i,
    palette: a = {},
    transitions: o = {},
    typography: u = {},
    shape: l,
    ...h
  } = t;
  if (t.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ct(20));
  const f = Vi(a), m = Gh(t);
  let g = Ue(m, {
    mixins: hp(m.breakpoints, n),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: vp.slice(),
    typography: mp(f, u),
    transitions: _p(o),
    zIndex: {
      ...Cp
    }
  });
  if (g = Ue(g, h), g = e.reduce((b, _) => Ue(b, _), g), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], _ = (E, T) => {
      let A;
      for (A in E) {
        const k = E[A];
        if (b.includes(A) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = Yh("", A);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${A}\` internal state.`, "You can not override it like this: ", JSON.stringify(E, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          E[A] = {};
        }
      }
    };
    Object.keys(g.components).forEach((E) => {
      const T = g.components[E].styleOverrides;
      T && E.startsWith("Mui") && _(T, E);
    });
  }
  return g.unstable_sxConfig = {
    ...On,
    ...h == null ? void 0 : h.unstable_sxConfig
  }, g.unstable_sx = function(_) {
    return Tn({
      sx: _,
      theme: this
    });
  }, g;
}
function Op(t) {
  let e;
  return t < 1 ? e = 5.11916 * t ** 2 : e = 4.5 * Math.log(t + 1) + 2, Math.round(e * 10) / 1e3;
}
const Tp = [...Array(25)].map((t, e) => {
  if (e === 0)
    return "none";
  const r = Op(e);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function eu(t) {
  return {
    inputPlaceholder: t === "dark" ? 0.5 : 0.42,
    inputUnderline: t === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: t === "dark" ? 0.2 : 0.12,
    switchTrack: t === "dark" ? 0.3 : 0.38
  };
}
function tu(t) {
  return t === "dark" ? Tp : [];
}
function Np(t) {
  const {
    palette: e = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...i
  } = t, a = Vi(e);
  return {
    palette: a,
    opacity: {
      ...eu(a.mode),
      ...r
    },
    overlays: n || tu(a.mode),
    ...i
  };
}
function Pp(t) {
  var e;
  return !!t[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!t[0].match(/sxConfig$/) || // ends with sxConfig
  t[0] === "palette" && !!((e = t[1]) != null && e.match(/(mode|contrastThreshold|tonalOffset)/));
}
const xp = (t) => [...[...Array(25)].map((e, r) => `--${t ? `${t}-` : ""}overlays-${r}`), `--${t ? `${t}-` : ""}palette-AppBar-darkBg`, `--${t ? `${t}-` : ""}palette-AppBar-darkColor`], Rp = (t) => (e, r) => {
  const n = t.colorSchemeSelector;
  let i = n;
  if (n === "class" && (i = ".%s"), n === "data" && (i = "[data-%s]"), n != null && n.startsWith("data-") && !n.includes("%s") && (i = `[${n}="%s"]`), t.defaultColorScheme === e) {
    if (e === "dark") {
      const a = {};
      return xp(t.cssVarPrefix).forEach((o) => {
        a[o] = r[o], delete r[o];
      }), i === "media" ? {
        ":root": r,
        "@media (prefers-color-scheme: dark)": {
          ":root": a
        }
      } : i ? {
        [i.replace("%s", e)]: a,
        [`:root, ${i.replace("%s", e)}`]: r
      } : {
        ":root": {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `:root, ${i.replace("%s", String(e))}`;
  } else if (e) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(e)})`]: {
          ":root": r
        }
      };
    if (i)
      return i.replace("%s", String(e));
  }
  return ":root";
};
function Ap(t) {
  return bt(t) || typeof t > "u" || typeof t == "string" || typeof t == "boolean" || typeof t == "number" || Array.isArray(t);
}
function Dp(t = {}) {
  const e = {
    ...t
  };
  function r(n) {
    const i = Object.entries(n);
    for (let a = 0; a < i.length; a++) {
      const [o, u] = i[a];
      !Ap(u) || o.startsWith("unstable_") ? delete n[o] : bt(u) && (n[o] = {
        ...u
      }, r(n[o]));
    }
  }
  return r(e), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function qp(t, e) {
  e.forEach((r) => {
    t[r] || (t[r] = {});
  });
}
function O(t, e, r) {
  !t[e] && r && (t[e] = r);
}
function gr(t) {
  return !t || !t.startsWith("hsl") ? t : Jo(t);
}
function ot(t, e) {
  `${e}Channel` in t || (t[`${e}Channel`] = yr(gr(t[e]), `MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function kp(t) {
  return typeof t == "number" ? `${t}px` : typeof t == "string" || typeof t == "function" || Array.isArray(t) ? t : "8px";
}
const et = (t) => {
  try {
    return t();
  } catch {
  }
}, Ip = (t = "mui") => tp(t);
function ni(t, e, r, n) {
  if (!e)
    return;
  e = e === !0 ? {} : e;
  const i = n === "dark" ? "dark" : "light";
  if (!r) {
    t[n] = Np({
      ...e,
      palette: {
        mode: i,
        ...e == null ? void 0 : e.palette
      }
    });
    return;
  }
  const {
    palette: a,
    ...o
  } = _i({
    ...r,
    palette: {
      mode: i,
      ...e == null ? void 0 : e.palette
    }
  });
  return t[n] = {
    ...e,
    palette: a,
    opacity: {
      ...eu(i),
      ...e == null ? void 0 : e.opacity
    },
    overlays: (e == null ? void 0 : e.overlays) || tu(i)
  }, o;
}
function $p(t = {}, ...e) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: o = Pp,
    colorSchemeSelector: u = r.light && r.dark ? "media" : void 0,
    ...l
  } = t, h = Object.keys(r)[0], f = n || (r.light && h !== "light" ? "light" : h), m = Ip(a), {
    [f]: g,
    light: b,
    dark: _,
    ...E
  } = r, T = {
    ...E
  };
  let A = g;
  if ((f === "dark" && !("dark" in r) || f === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : Ct(21, f));
  const k = ni(T, A, l, f);
  b && !T.light && ni(T, b, void 0, "light"), _ && !T.dark && ni(T, _, void 0, "dark");
  let S = {
    defaultColorScheme: f,
    ...k,
    cssVarPrefix: a,
    colorSchemeSelector: u,
    getCssVar: m,
    colorSchemes: T,
    font: {
      ...fp(k.typography),
      ...k.font
    },
    spacing: kp(l.spacing)
  };
  Object.keys(S.colorSchemes).forEach((L) => {
    const d = S.colorSchemes[L].palette, F = (V) => {
      const ee = V.split("-"), _e = ee[1], me = ee[2];
      return m(V, d[_e][me]);
    };
    if (d.mode === "light" && (O(d.common, "background", "#fff"), O(d.common, "onBackground", "#000")), d.mode === "dark" && (O(d.common, "background", "#000"), O(d.common, "onBackground", "#fff")), qp(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      O(d.Alert, "errorColor", ce(d.error.light, 0.6)), O(d.Alert, "infoColor", ce(d.info.light, 0.6)), O(d.Alert, "successColor", ce(d.success.light, 0.6)), O(d.Alert, "warningColor", ce(d.warning.light, 0.6)), O(d.Alert, "errorFilledBg", F("palette-error-main")), O(d.Alert, "infoFilledBg", F("palette-info-main")), O(d.Alert, "successFilledBg", F("palette-success-main")), O(d.Alert, "warningFilledBg", F("palette-warning-main")), O(d.Alert, "errorFilledColor", et(() => d.getContrastText(d.error.main))), O(d.Alert, "infoFilledColor", et(() => d.getContrastText(d.info.main))), O(d.Alert, "successFilledColor", et(() => d.getContrastText(d.success.main))), O(d.Alert, "warningFilledColor", et(() => d.getContrastText(d.warning.main))), O(d.Alert, "errorStandardBg", le(d.error.light, 0.9)), O(d.Alert, "infoStandardBg", le(d.info.light, 0.9)), O(d.Alert, "successStandardBg", le(d.success.light, 0.9)), O(d.Alert, "warningStandardBg", le(d.warning.light, 0.9)), O(d.Alert, "errorIconColor", F("palette-error-main")), O(d.Alert, "infoIconColor", F("palette-info-main")), O(d.Alert, "successIconColor", F("palette-success-main")), O(d.Alert, "warningIconColor", F("palette-warning-main")), O(d.AppBar, "defaultBg", F("palette-grey-100")), O(d.Avatar, "defaultBg", F("palette-grey-400")), O(d.Button, "inheritContainedBg", F("palette-grey-300")), O(d.Button, "inheritContainedHoverBg", F("palette-grey-A100")), O(d.Chip, "defaultBorder", F("palette-grey-400")), O(d.Chip, "defaultAvatarColor", F("palette-grey-700")), O(d.Chip, "defaultIconColor", F("palette-grey-700")), O(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), O(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), O(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), O(d.LinearProgress, "primaryBg", le(d.primary.main, 0.62)), O(d.LinearProgress, "secondaryBg", le(d.secondary.main, 0.62)), O(d.LinearProgress, "errorBg", le(d.error.main, 0.62)), O(d.LinearProgress, "infoBg", le(d.info.main, 0.62)), O(d.LinearProgress, "successBg", le(d.success.main, 0.62)), O(d.LinearProgress, "warningBg", le(d.warning.main, 0.62)), O(d.Skeleton, "bg", `rgba(${F("palette-text-primaryChannel")} / 0.11)`), O(d.Slider, "primaryTrack", le(d.primary.main, 0.62)), O(d.Slider, "secondaryTrack", le(d.secondary.main, 0.62)), O(d.Slider, "errorTrack", le(d.error.main, 0.62)), O(d.Slider, "infoTrack", le(d.info.main, 0.62)), O(d.Slider, "successTrack", le(d.success.main, 0.62)), O(d.Slider, "warningTrack", le(d.warning.main, 0.62));
      const V = Hr(d.background.default, 0.8);
      O(d.SnackbarContent, "bg", V), O(d.SnackbarContent, "color", et(() => d.getContrastText(V))), O(d.SpeedDialAction, "fabHoverBg", Hr(d.background.paper, 0.15)), O(d.StepConnector, "border", F("palette-grey-400")), O(d.StepContent, "border", F("palette-grey-400")), O(d.Switch, "defaultColor", F("palette-common-white")), O(d.Switch, "defaultDisabledColor", F("palette-grey-100")), O(d.Switch, "primaryDisabledColor", le(d.primary.main, 0.62)), O(d.Switch, "secondaryDisabledColor", le(d.secondary.main, 0.62)), O(d.Switch, "errorDisabledColor", le(d.error.main, 0.62)), O(d.Switch, "infoDisabledColor", le(d.info.main, 0.62)), O(d.Switch, "successDisabledColor", le(d.success.main, 0.62)), O(d.Switch, "warningDisabledColor", le(d.warning.main, 0.62)), O(d.TableCell, "border", le(Kr(d.divider, 1), 0.88)), O(d.Tooltip, "bg", Kr(d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      O(d.Alert, "errorColor", le(d.error.light, 0.6)), O(d.Alert, "infoColor", le(d.info.light, 0.6)), O(d.Alert, "successColor", le(d.success.light, 0.6)), O(d.Alert, "warningColor", le(d.warning.light, 0.6)), O(d.Alert, "errorFilledBg", F("palette-error-dark")), O(d.Alert, "infoFilledBg", F("palette-info-dark")), O(d.Alert, "successFilledBg", F("palette-success-dark")), O(d.Alert, "warningFilledBg", F("palette-warning-dark")), O(d.Alert, "errorFilledColor", et(() => d.getContrastText(d.error.dark))), O(d.Alert, "infoFilledColor", et(() => d.getContrastText(d.info.dark))), O(d.Alert, "successFilledColor", et(() => d.getContrastText(d.success.dark))), O(d.Alert, "warningFilledColor", et(() => d.getContrastText(d.warning.dark))), O(d.Alert, "errorStandardBg", ce(d.error.light, 0.9)), O(d.Alert, "infoStandardBg", ce(d.info.light, 0.9)), O(d.Alert, "successStandardBg", ce(d.success.light, 0.9)), O(d.Alert, "warningStandardBg", ce(d.warning.light, 0.9)), O(d.Alert, "errorIconColor", F("palette-error-main")), O(d.Alert, "infoIconColor", F("palette-info-main")), O(d.Alert, "successIconColor", F("palette-success-main")), O(d.Alert, "warningIconColor", F("palette-warning-main")), O(d.AppBar, "defaultBg", F("palette-grey-900")), O(d.AppBar, "darkBg", F("palette-background-paper")), O(d.AppBar, "darkColor", F("palette-text-primary")), O(d.Avatar, "defaultBg", F("palette-grey-600")), O(d.Button, "inheritContainedBg", F("palette-grey-800")), O(d.Button, "inheritContainedHoverBg", F("palette-grey-700")), O(d.Chip, "defaultBorder", F("palette-grey-700")), O(d.Chip, "defaultAvatarColor", F("palette-grey-300")), O(d.Chip, "defaultIconColor", F("palette-grey-300")), O(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), O(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), O(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), O(d.LinearProgress, "primaryBg", ce(d.primary.main, 0.5)), O(d.LinearProgress, "secondaryBg", ce(d.secondary.main, 0.5)), O(d.LinearProgress, "errorBg", ce(d.error.main, 0.5)), O(d.LinearProgress, "infoBg", ce(d.info.main, 0.5)), O(d.LinearProgress, "successBg", ce(d.success.main, 0.5)), O(d.LinearProgress, "warningBg", ce(d.warning.main, 0.5)), O(d.Skeleton, "bg", `rgba(${F("palette-text-primaryChannel")} / 0.13)`), O(d.Slider, "primaryTrack", ce(d.primary.main, 0.5)), O(d.Slider, "secondaryTrack", ce(d.secondary.main, 0.5)), O(d.Slider, "errorTrack", ce(d.error.main, 0.5)), O(d.Slider, "infoTrack", ce(d.info.main, 0.5)), O(d.Slider, "successTrack", ce(d.success.main, 0.5)), O(d.Slider, "warningTrack", ce(d.warning.main, 0.5));
      const V = Hr(d.background.default, 0.98);
      O(d.SnackbarContent, "bg", V), O(d.SnackbarContent, "color", et(() => d.getContrastText(V))), O(d.SpeedDialAction, "fabHoverBg", Hr(d.background.paper, 0.15)), O(d.StepConnector, "border", F("palette-grey-600")), O(d.StepContent, "border", F("palette-grey-600")), O(d.Switch, "defaultColor", F("palette-grey-300")), O(d.Switch, "defaultDisabledColor", F("palette-grey-600")), O(d.Switch, "primaryDisabledColor", ce(d.primary.main, 0.55)), O(d.Switch, "secondaryDisabledColor", ce(d.secondary.main, 0.55)), O(d.Switch, "errorDisabledColor", ce(d.error.main, 0.55)), O(d.Switch, "infoDisabledColor", ce(d.info.main, 0.55)), O(d.Switch, "successDisabledColor", ce(d.success.main, 0.55)), O(d.Switch, "warningDisabledColor", ce(d.warning.main, 0.55)), O(d.TableCell, "border", ce(Kr(d.divider, 1), 0.68)), O(d.Tooltip, "bg", Kr(d.grey[700], 0.92));
    }
    ot(d.background, "default"), ot(d.background, "paper"), ot(d.common, "background"), ot(d.common, "onBackground"), ot(d, "divider"), Object.keys(d).forEach((V) => {
      const ee = d[V];
      ee && typeof ee == "object" && (ee.main && O(d[V], "mainChannel", yr(gr(ee.main))), ee.light && O(d[V], "lightChannel", yr(gr(ee.light))), ee.dark && O(d[V], "darkChannel", yr(gr(ee.dark))), ee.contrastText && O(d[V], "contrastTextChannel", yr(gr(ee.contrastText))), V === "text" && (ot(d[V], "primary"), ot(d[V], "secondary")), V === "action" && (ee.active && ot(d[V], "active"), ee.selected && ot(d[V], "selected")));
    });
  }), S = e.reduce((L, d) => Ue(L, d), S);
  const x = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: o,
    getSelector: Rp(S)
  }, {
    vars: v,
    generateThemeVars: j,
    generateStyleSheets: Z
  } = ip(S, x);
  return S.vars = v, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([L, d]) => {
    S[L] = d;
  }), S.generateThemeVars = j, S.generateStyleSheets = Z, S.generateSpacing = function() {
    return Xo(l.spacing, Ii(this));
  }, S.getColorSchemeSelector = ap(u), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = o, S.unstable_sxConfig = {
    ...On,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, S.unstable_sx = function(d) {
    return Tn({
      sx: d,
      theme: this
    });
  }, S.toRuntimeSource = Dp, S;
}
function _s(t, e, r) {
  t.colorSchemes && r && (t.colorSchemes[e] = {
    ...r !== !0 && r,
    palette: Vi({
      ...r === !0 ? {} : r.palette,
      mode: e
    })
    // cast type to skip module augmentation test
  });
}
function Li(t = {}, ...e) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: i = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = r == null ? void 0 : r.mode,
    ...o
  } = t, u = a || "light", l = i == null ? void 0 : i[u], h = {
    ...i,
    ...r ? {
      [u]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in t))
      return _i(t, ...e);
    let f = r;
    "palette" in t || h[u] && (h[u] !== !0 ? f = h[u].palette : u === "dark" && (f = {
      mode: "dark"
    }));
    const m = _i({
      ...t,
      palette: f
    }, ...e);
    return m.defaultColorScheme = u, m.colorSchemes = h, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: m.palette
    }, _s(m, "dark", h.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: m.palette
    }, _s(m, "light", h.light)), m;
  }
  return !r && !("light" in h) && u === "light" && (h.light = !0), $p({
    ...o,
    colorSchemes: h,
    defaultColorScheme: u,
    ...typeof n != "boolean" && n
  }, ...e);
}
Li({
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
const Mp = {
  rfpaData: oo,
  dealSlipData: co,
  grnData: fo,
  mc_voucher: po,
  lp_voucher: yo,
  tp_voucher: So,
  pmp_voucher: bo,
  delivery_challan: Eo,
  payment_request: Co
}, Fp = {
  openDrawer: !1,
  openFor: "create",
  dataId: ""
}, ru = be({
  name: "formContainer",
  initialState: Fp,
  reducers: {
    setDrawerOpen: (t, e) => {
      t.openDrawer = e.payload;
    },
    setOpenFor: (t, e) => {
      t.openFor = e.payload;
    },
    setDataId: (t, e) => {
      t.dataId = e.payload;
    }
  }
});
ru.actions;
const nu = ru.reducer, jp = {
  customers: []
}, iu = be({
  name: "customerData",
  initialState: jp,
  reducers: {
    setCustomerData: (t, e) => {
      t.customers = e.payload;
    }
  }
});
iu.actions;
const au = iu.reducer, Vp = {
  allVendors: [],
  allVendorssPartialData: [],
  selectedVendorPartialData: null
}, su = be({
  name: "vendorData",
  initialState: Vp,
  reducers: {
    setVendorData: (t, e) => {
      t.allVendors = e.payload;
    },
    setAllVendorsPartialData: (t, e) => {
      t.allVendorssPartialData = e.payload;
    },
    setSelectedVendorPartialData: (t, e) => {
      t.selectedVendorPartialData = e.payload;
    }
  }
});
su.actions;
const ou = su.reducer, Lp = {
  employees: []
}, uu = be({
  name: "employeeData",
  initialState: Lp,
  reducers: {
    setEmployeeData: (t, e) => {
      t.employees = e.payload;
    }
  }
});
uu.actions;
const cu = uu.reducer, Bp = {
  allFarmers: [],
  allFarmersPartialData: [],
  selectedFarmerPartialData: null
}, lu = be({
  name: "farmerData",
  initialState: Bp,
  reducers: {
    setFarmerData: (t, e) => {
      t.allFarmers = e.payload;
    },
    setAllFarmersPartialData: (t, e) => {
      t.allFarmersPartialData = e.payload;
    },
    setSelectedFarmerPartialData: (t, e) => {
      t.selectedFarmerPartialData = e.payload;
    }
  }
});
lu.actions;
const du = lu.reducer, Up = {
  allProducts: [],
  selectedProduct: void 0,
  productCat: [],
  productSubCat: [],
  productPartialData: []
}, fu = be({
  name: "productData",
  initialState: Up,
  reducers: {
    setProducts: (t, e) => {
      t.allProducts = e.payload;
    },
    setSelectedProduct: (t, e) => {
      t.selectedProduct = e.payload;
    },
    setProductCat: (t, e) => {
      t.productCat = e.payload;
    },
    setProductSubCat: (t, e) => {
      t.productSubCat = e.payload;
    },
    clearProductPartialData: (t) => {
      t.productPartialData = [];
    },
    addorupdateProductPartialData: (t, e) => {
      const { index: r, object: n } = e.payload;
      t.productPartialData[r] !== void 0 ? t.productPartialData[r] = n : t.productPartialData.splice(r, 0, n);
    },
    removeProductPartialData: (t, e) => {
      const r = e.payload;
      t.productPartialData.splice(r, 1);
    }
  }
});
fu.actions;
const hu = fu.reducer, zp = {
  allUOMs: [],
  selectedUOM: void 0,
  allUOMConvMat: [],
  selectedUOMConvMat: void 0
}, pu = be({
  name: "uomData",
  initialState: zp,
  reducers: {
    setUOMs: (t, e) => {
      t.allUOMs = e.payload;
    },
    setSelectedUOM: (t, e) => {
      t.selectedUOM = e.payload;
    },
    setUOMConvMat: (t, e) => {
      t.allUOMConvMat = e.payload;
    },
    setSelectedUOMConvMat: (t, e) => {
      t.selectedUOMConvMat = e.payload;
    }
  }
});
pu.actions;
const mu = pu.reducer;
var yu = /* @__PURE__ */ ((t) => (t[t["collection-center"] = 0] = "collection-center", t[t["distribution-center"] = 1] = "distribution-center", t[t["seasonal-collection-center"] = 2] = "seasonal-collection-center", t[t.warehouse = 3] = "warehouse", t))(yu || {}), gu = /* @__PURE__ */ ((t) => (t[t["registered-office"] = 0] = "registered-office", t[t["corporate-office"] = 1] = "corporate-office", t))(gu || {});
const Gp = {
  offices: [],
  officeType: gu["registered-office"],
  selectedOffices: void 0
}, bu = be({
  name: "officesData",
  initialState: Gp,
  reducers: {
    setOfficesData: (t, e) => {
      t.offices = e.payload;
    },
    setOfficeType: (t, e) => {
      t.officeType = e.payload;
    }
  }
});
bu.actions;
const vu = bu.reducer, Wp = {
  branches: [],
  BranchType: yu["collection-center"],
  selectedBranches: void 0
}, Su = be({
  name: "branchesData",
  initialState: Wp,
  reducers: {
    setBranchesData: (t, e) => {
      t.branches = e.payload;
    },
    setBranchType: (t, e) => {
      t.BranchType = e.payload;
    }
  }
});
Su.actions;
const wu = Su.reducer, Kp = {
  open: !1,
  message: "",
  severity: "success"
}, Eu = be({
  name: "alertSnackbar",
  initialState: Kp,
  reducers: {
    openAlertbar: (t, e) => {
      t.open = e.payload;
    },
    closeAlertbar: (t, e) => {
      t.open = e.payload;
    },
    addMessageSevirity: (t, e) => {
      t.message = e.payload.message, t.severity = e.payload.severity;
    },
    removeMessageSeverity: (t) => {
      t.message = "", t.severity = "success";
    }
  }
});
Eu.actions;
const _u = Eu.reducer, Hp = {
  allVendorCategories: [],
  selectedVendorCategory: null
}, Cu = be({
  name: "vendorCategoryData",
  initialState: Hp,
  reducers: {
    setAllVendorCategories: (t, e) => {
      t.allVendorCategories = e.payload;
    },
    setSelectedVendorCategory: (t, e) => {
      t.selectedVendorCategory = e.payload;
    }
  }
});
Cu.actions;
const Ou = Cu.reducer;
Pi({
  reducer: {
    formContainer: nu,
    customerData: au,
    vendorData: ou,
    vendorCategoryData: Ou,
    employeeData: cu,
    farmerData: du,
    productData: hu,
    uomData: mu,
    officesData: vu,
    branchesData: wu,
    alertSnackbar: _u
  }
});
const Yp = {
  formContainer: nu,
  customerData: au,
  vendorData: ou,
  vendorCategoryData: Ou,
  employeeData: cu,
  farmerData: du,
  productData: hu,
  uomData: mu,
  officesData: vu,
  branchesData: wu,
  alertSnackbar: _u
};
X().shape({
  firstName: c().required("First name is required").min(3, "First name should be more than 3 characters").matches(R.IS_STRING, "Name should only contains alphabets."),
  lastName: c().required("Last name is required").min(3, "Last name should be more than 3 characters").matches(R.IS_STRING, "Name should only contains alphabets."),
  username: c().required("Username is required").min(5, "username should be more than 5 characters").max(12, "username should be less than 12 characters"),
  password: c().required("Password is required."),
  phoneNumber: c().required("Mobile number is required").matches(R.CONTACT_NO, "Mobile number must contain only numbers"),
  email: c().required("Email is required").email("Invalid email format"),
  address: xe,
  joiningDate: c().required("Joining date is required"),
  selectDepartment: c().required("Please select a deparment for employee."),
  level: c().required("Please select a level for employee."),
  reportingManager: c().optional()
});
X().shape({
  name: c().required("Name is required").min(3, "Product name should be more than 3 characters"),
  image: Te().nullable().required("Image is required").test("fileFormat", "Invalid image format (only jpg, jpeg, png allowed)", (t) => {
    if (!t) return !0;
    const e = t;
    return ["image/jpeg", "image/png", "image/jpg"].includes(e.type);
  }).test("fileSize", "Image is too large (max 1MB)", (t) => {
    if (!t) return !0;
    const e = t, r = 1 * 1024 * 1024;
    return e.size <= r;
  }),
  returnable: Ye().required("Returnable is required"),
  description: c().required("Description is required"),
  product_code: c().required("Product code is required"),
  category: c().required("Category is required"),
  subcategory: c().required("Subcategory is required"),
  classification: c().required("Classification is required"),
  uom: c().required("UOM is required")
});
X().shape({
  name: c().required("Product classification name is required.")
});
X().shape({
  name: c().required("Product category name is required"),
  productClassification: c().required("Related product classification name is required")
});
X().shape({
  name: c().required("Product subcategory name is required"),
  category: c().required("Related product category name is required")
});
X().shape({
  name: c().required("Office name is required"),
  address: xe,
  cFirstName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  cMiddleName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  cLastName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  contactNumber: c().nullable().matches(R.CONTACT_NO, "Please enter valid contact number."),
  officeEmail: c().nullable().email("Invalid email format"),
  notes: c().nullable()
});
X().shape({
  name: c().required("Office name is required"),
  prefix: c().required("Prefix is required for creating GRN numbers. Please enter."),
  address: xe,
  cFirstName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  cMiddleName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  cLastName: c().nullable().matches(R.IS_STRING, "Name should only contains alphabets."),
  contactNumber: c().nullable().matches(R.CONTACT_NO, "Please enter valid contact number."),
  totalCapacity: ne().min(0, "Capacity must be 0 or greater"),
  currentCapacity: ne().min(0, "Capacity must be 0 or greater"),
  balanceCapacity: ne().min(0, "Capacity must be 0 or greater"),
  notes: c().nullable()
});
X().shape({
  organisationName: c().required("Organisation Name is required"),
  // customerTypes: customerTypesSchema,
  // customerCategory: customerCategorySchema,
  organisationType: c().required("Organisation Type is required"),
  otherType: c(),
  // customerAddress: addressSchema,
  primaryContactNo: c().required("Primary Contact No. is required").matches(/^\d{10}$/, "Contact number must be 10 digits"),
  secondaryContactNo: c().matches(/^\d{10}$/, "Contact number must be 10 digits"),
  emailPrimary: c().email("Invalid email format").required("Primary Email is required"),
  emailSecondary: c().email("Invalid email format")
  //     keyMobileNumbers: keyMobileNumbersSchema,
  //     billingDetails: billingDetailsSchema,
  //     deliveryDetails: deliveryDetailsSchema,
  //     statutoryDetails: statutoryDetailsSchema,
  //     bankDetails: bankDetailsSchema,
  //     productSpecification: Yup.array().of(productSpecificationSchema),
  //     paymentTerms: paymentTermsSchema,
  //     officeUseOnly: officeUseOnlySchema,
});
X().shape({
  companyName: c().required("Party Name is required"),
  category: c().required("Please select category of vendor"),
  subcategory: c().required("Please select subcategory of vendor"),
  inFandVBusinessSince: c(),
  dateOfIncorporation: c(),
  officeAddress: xe,
  officeContactNo: c().matches(/^\d{10}$/, "Contact number must be 10 digits")
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
X().shape({
  farmerfName: c().required("First Name is required").min(3, "Minimum 3 characters required."),
  farmermName: c().notRequired(),
  farmerlName: c().required("Last Name is required").min(3, "Minimum 3 characters required."),
  residensialAddress: xe,
  farmAddress: xe,
  primaryMobileNo: c().required("Contact No is required")
});
X().shape({
  unit: c().required("UOM name is required"),
  abbreviation: c().required("Abbreviation of UOM is required")
});
X().shape({
  conversionFactor: ne().required("Conversion factor is required").positive("Conversion factor cannot be negative."),
  fromUOM: c().required("UOM name is required"),
  toUOM: c().required("UOM name is required")
});
X().shape({
  address1: c().required("Address Line 1 is required"),
  address2: c().nullable(),
  location: c().required("Location is required"),
  city: c().required("City is required"),
  state: c().required("State is required"),
  pincode: c().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
Li({
  palette: {
    // primary: {
    //   main: '#008A00',
    //   light: '#befabe',
    // },
    // secondary: {
    //   main: '#2a3eb1',
    //   light: '#3d5afe',
    // },
    primary: {
      main: "#009933",
      light: "#e6ffee",
      dark: "#00cc44",
      contrastText: "#fff"
    },
    secondary: {
      main: "#000",
      light: "#616161"
    }
  }
});
const Qp = js({ ...nd, ...Mp, ...Yp }), um = Pi({
  reducer: Qp
}), cm = new Nf(), lm = (t) => X().shape({
  uid: t === "email" ? c().email("Invalid email address").required("Email is required") : c().matches(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number").required("Mobile number is required"),
  password: c().required("Password is required").min(8, "Password must be at least 8 characters long")
}), dm = Li({
  palette: {
    primary: {
      main: "#00cc66",
      light: "#e6fff2",
      dark: "#00994d",
      contrastText: "#fff"
    },
    secondary: {
      main: "#404040",
      light: "#808080",
      dark: "#000000",
      contrastText: "#fff"
    },
    info: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff"
    },
    warning: {
      main: "#ff9100",
      light: "#ffbd66",
      dark: "#e68200",
      contrastText: "#fff"
    }
  }
});
export {
  lm as SignInSchema,
  Gl as authActionCreators,
  Wl as authReducer,
  tm as authRouteConstants,
  rm as authState,
  Ll as checkAuth,
  um as coreStore,
  im as isClosingState,
  Zl as layoutActionCreators,
  Xl as layoutReducer,
  nm as mobileOpenState,
  dm as muiTheme,
  am as pageTitleState,
  td as previewActionCreators,
  rd as previewReducer,
  ao as previewSlice,
  sm as previewState,
  cm as queryClient,
  Bl as setDeptId,
  Yl as setIsClosing,
  zl as setLoggedInUserInfo,
  Hl as setMobileOpen,
  Ql as setPageTitle,
  ed as setPreview,
  jl as setShowPassword,
  Vl as setSigninMethod,
  Ul as setTokens,
  Ml as sliceConstant,
  em as stringConstants,
  om as useActions,
  Jp as useAppDispatch,
  Xp as useAppSelector
};
