var uo = (t) => {
  throw TypeError(t);
};
var ai = (t, e, r) => e.has(t) || uo("Cannot " + r);
var D = (t, e, r) => (ai(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ie = (t, e, r) => e.has(t) ? uo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), te = (t, e, r, n) => (ai(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Pe = (t, e, r) => (ai(t, e, "access private method"), r);
var Jr = (t, e, r, n) => ({
  set _(i) {
    te(t, e, i, r);
  },
  get _() {
    return D(t, e, n);
  }
});
function Jl(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(n, i);
          s && Object.defineProperty(t, i, s.get ? s : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
function is(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ai = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function Xl() {
  if (co) return re;
  co = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), d = Symbol.iterator;
  function h(y) {
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
  function A() {
  }
  A.prototype = b.prototype;
  function k(y, x, I) {
    this.props = y, this.context = x, this.refs = v, this.updater = I || w;
  }
  var S = k.prototype = new A();
  S.constructor = k, g(S, b.prototype), S.isPureReactComponent = !0;
  var P = Array.isArray, E = Object.prototype.hasOwnProperty, q = { current: null }, G = { key: !0, ref: !0, __self: !0, __source: !0 };
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
    return { $$typeof: t, type: y, key: z, ref: W, props: U, _owner: q.current };
  }
  function p(y, x) {
    return { $$typeof: t, type: y.type, key: x, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function V(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }
  function L(y) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(I) {
      return x[I];
    });
  }
  var Z = /\/+/g;
  function Oe(y, x) {
    return typeof y == "object" && y !== null && y.key != null ? L("" + y.key) : x.toString(36);
  }
  function me(y, x, I, F, U) {
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
          case t:
          case e:
            W = !0;
        }
    }
    if (W) return W = y, U = U(W), y = F === "" ? "." + Oe(W, 0) : F, P(U) ? (I = "", y != null && (I = y.replace(Z, "$&/") + "/"), me(U, x, I, "", function(J) {
      return J;
    })) : U != null && (V(U) && (U = p(U, I + (!U.key || W && W.key === U.key ? "" : ("" + U.key).replace(Z, "$&/") + "/") + y)), x.push(U)), 1;
    if (W = 0, F = F === "" ? "." : F + ":", P(y)) for (var K = 0; K < y.length; K++) {
      z = y[K];
      var Y = F + Oe(z, K);
      W += me(z, x, I, Y, U);
    }
    else if (Y = h(y), typeof Y == "function") for (y = Y.call(y), K = 0; !(z = y.next()).done; ) z = z.value, Y = F + Oe(z, K++), W += me(z, x, I, Y, U);
    else if (z === "object") throw x = String(y), Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.");
    return W;
  }
  function be(y, x, I) {
    if (y == null) return y;
    var F = [], U = 0;
    return me(y, F, "", "", function(z) {
      return x.call(I, z, U++);
    }), F;
  }
  function ye(y) {
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
  var H = { current: null }, Ge = { transition: null }, mt = { ReactCurrentDispatcher: H, ReactCurrentBatchConfig: Ge, ReactCurrentOwner: q };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return re.Children = { map: be, forEach: function(y, x, I) {
    be(y, function() {
      x.apply(this, arguments);
    }, I);
  }, count: function(y) {
    var x = 0;
    return be(y, function() {
      x++;
    }), x;
  }, toArray: function(y) {
    return be(y, function(x) {
      return x;
    }) || [];
  }, only: function(y) {
    if (!V(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, re.Component = b, re.Fragment = r, re.Profiler = i, re.PureComponent = k, re.StrictMode = n, re.Suspense = c, re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mt, re.act = N, re.cloneElement = function(y, x, I) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var F = g({}, y.props), U = y.key, z = y.ref, W = y._owner;
    if (x != null) {
      if (x.ref !== void 0 && (z = x.ref, W = q.current), x.key !== void 0 && (U = "" + x.key), y.type && y.type.defaultProps) var K = y.type.defaultProps;
      for (Y in x) E.call(x, Y) && !G.hasOwnProperty(Y) && (F[Y] = x[Y] === void 0 && K !== void 0 ? K[Y] : x[Y]);
    }
    var Y = arguments.length - 2;
    if (Y === 1) F.children = I;
    else if (1 < Y) {
      K = Array(Y);
      for (var J = 0; J < Y; J++) K[J] = arguments[J + 2];
      F.children = K;
    }
    return { $$typeof: t, type: y.type, key: U, ref: z, props: F, _owner: W };
  }, re.createContext = function(y) {
    return y = { $$typeof: o, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: s, _context: y }, y.Consumer = y;
  }, re.createElement = j, re.createFactory = function(y) {
    var x = j.bind(null, y);
    return x.type = y, x;
  }, re.createRef = function() {
    return { current: null };
  }, re.forwardRef = function(y) {
    return { $$typeof: a, render: y };
  }, re.isValidElement = V, re.lazy = function(y) {
    return { $$typeof: f, _payload: { _status: -1, _result: y }, _init: ye };
  }, re.memo = function(y, x) {
    return { $$typeof: l, type: y, compare: x === void 0 ? null : x };
  }, re.startTransition = function(y) {
    var x = Ge.transition;
    Ge.transition = {};
    try {
      y();
    } finally {
      Ge.transition = x;
    }
  }, re.unstable_act = N, re.useCallback = function(y, x) {
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
var wr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
wr.exports;
var lo;
function Zl() {
  return lo || (lo = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b = Symbol.iterator, A = "@@iterator";
      function k(u) {
        if (u === null || typeof u != "object")
          return null;
        var m = b && u[b] || u[A];
        return typeof m == "function" ? m : null;
      }
      var S = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, P = {
        transition: null
      }, E = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, q = {
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
        var m = G.getCurrentStack;
        return m && (u += m() || ""), u;
      };
      var V = !1, L = !1, Z = !1, Oe = !1, me = !1, be = {
        ReactCurrentDispatcher: S,
        ReactCurrentBatchConfig: P,
        ReactCurrentOwner: q
      };
      be.ReactDebugCurrentFrame = G, be.ReactCurrentActQueue = E;
      function ye(u) {
        {
          for (var m = arguments.length, _ = new Array(m > 1 ? m - 1 : 0), T = 1; T < m; T++)
            _[T - 1] = arguments[T];
          Ge("warn", u, _);
        }
      }
      function H(u) {
        {
          for (var m = arguments.length, _ = new Array(m > 1 ? m - 1 : 0), T = 1; T < m; T++)
            _[T - 1] = arguments[T];
          Ge("error", u, _);
        }
      }
      function Ge(u, m, _) {
        {
          var T = be.ReactDebugCurrentFrame, $ = T.getStackAddendum();
          $ !== "" && (m += "%s", _ = _.concat([$]));
          var Q = _.map(function(B) {
            return String(B);
          });
          Q.unshift("Warning: " + m), Function.prototype.apply.call(console[u], console, Q);
        }
      }
      var mt = {};
      function N(u, m) {
        {
          var _ = u.constructor, T = _ && (_.displayName || _.name) || "ReactClass", $ = T + "." + m;
          if (mt[$])
            return;
          H("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", m, T), mt[$] = !0;
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
        enqueueForceUpdate: function(u, m, _) {
          N(u, "forceUpdate");
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
        enqueueReplaceState: function(u, m, _, T) {
          N(u, "replaceState");
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
        enqueueSetState: function(u, m, _, T) {
          N(u, "setState");
        }
      }, x = Object.assign, I = {};
      Object.freeze(I);
      function F(u, m, _) {
        this.props = u, this.context = m, this.refs = I, this.updater = _ || y;
      }
      F.prototype.isReactComponent = {}, F.prototype.setState = function(u, m) {
        if (typeof u != "object" && typeof u != "function" && u != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, u, m, "setState");
      }, F.prototype.forceUpdate = function(u) {
        this.updater.enqueueForceUpdate(this, u, "forceUpdate");
      };
      {
        var U = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, z = function(u, m) {
          Object.defineProperty(F.prototype, u, {
            get: function() {
              ye("%s(...) is deprecated in plain JavaScript React classes. %s", m[0], m[1]);
            }
          });
        };
        for (var W in U)
          U.hasOwnProperty(W) && z(W, U[W]);
      }
      function K() {
      }
      K.prototype = F.prototype;
      function Y(u, m, _) {
        this.props = u, this.context = m, this.refs = I, this.updater = _ || y;
      }
      var J = Y.prototype = new K();
      J.constructor = Y, x(J, F.prototype), J.isPureReactComponent = !0;
      function Ae() {
        var u = {
          current: null
        };
        return Object.seal(u), u;
      }
      var M = Array.isArray;
      function ke(u) {
        return M(u);
      }
      function zt(u) {
        {
          var m = typeof Symbol == "function" && Symbol.toStringTag, _ = m && u[Symbol.toStringTag] || u.constructor.name || "Object";
          return _;
        }
      }
      function Vr(u) {
        try {
          return Cs(u), !1;
        } catch {
          return !0;
        }
      }
      function Cs(u) {
        return "" + u;
      }
      function Lr(u) {
        if (Vr(u))
          return H("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zt(u)), Cs(u);
      }
      function Yc(u, m, _) {
        var T = u.displayName;
        if (T)
          return T;
        var $ = m.displayName || m.name || "";
        return $ !== "" ? _ + "(" + $ + ")" : _;
      }
      function Ts(u) {
        return u.displayName || "Context";
      }
      function yt(u) {
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
          case h:
            return "SuspenseList";
        }
        if (typeof u == "object")
          switch (u.$$typeof) {
            case l:
              var m = u;
              return Ts(m) + ".Consumer";
            case c:
              var _ = u;
              return Ts(_._context) + ".Provider";
            case f:
              return Yc(u, u.render, "ForwardRef");
            case w:
              var T = u.displayName || null;
              return T !== null ? T : yt(u.type) || "Memo";
            case g: {
              var $ = u, Q = $._payload, B = $._init;
              try {
                return yt(B(Q));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var hr = Object.prototype.hasOwnProperty, Rs = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, xs, As, Yn;
      Yn = {};
      function Ps(u) {
        if (hr.call(u, "ref")) {
          var m = Object.getOwnPropertyDescriptor(u, "ref").get;
          if (m && m.isReactWarning)
            return !1;
        }
        return u.ref !== void 0;
      }
      function Ds(u) {
        if (hr.call(u, "key")) {
          var m = Object.getOwnPropertyDescriptor(u, "key").get;
          if (m && m.isReactWarning)
            return !1;
        }
        return u.key !== void 0;
      }
      function Qc(u, m) {
        var _ = function() {
          xs || (xs = !0, H("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        _.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: _,
          configurable: !0
        });
      }
      function Jc(u, m) {
        var _ = function() {
          As || (As = !0, H("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        _.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: _,
          configurable: !0
        });
      }
      function Xc(u) {
        if (typeof u.ref == "string" && q.current && u.__self && q.current.stateNode !== u.__self) {
          var m = yt(q.current.type);
          Yn[m] || (H('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m, u.ref), Yn[m] = !0);
        }
      }
      var Qn = function(u, m, _, T, $, Q, B) {
        var X = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: u,
          key: m,
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
          value: T
        }), Object.defineProperty(X, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: $
        }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
      };
      function Zc(u, m, _) {
        var T, $ = {}, Q = null, B = null, X = null, ne = null;
        if (m != null) {
          Ps(m) && (B = m.ref, Xc(m)), Ds(m) && (Lr(m.key), Q = "" + m.key), X = m.__self === void 0 ? null : m.__self, ne = m.__source === void 0 ? null : m.__source;
          for (T in m)
            hr.call(m, T) && !Rs.hasOwnProperty(T) && ($[T] = m[T]);
        }
        var ue = arguments.length - 2;
        if (ue === 1)
          $.children = _;
        else if (ue > 1) {
          for (var de = Array(ue), pe = 0; pe < ue; pe++)
            de[pe] = arguments[pe + 2];
          Object.freeze && Object.freeze(de), $.children = de;
        }
        if (u && u.defaultProps) {
          var ge = u.defaultProps;
          for (T in ge)
            $[T] === void 0 && ($[T] = ge[T]);
        }
        if (Q || B) {
          var Te = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          Q && Qc($, Te), B && Jc($, Te);
        }
        return Qn(u, Q, B, X, ne, q.current, $);
      }
      function el(u, m) {
        var _ = Qn(u.type, m, u.ref, u._self, u._source, u._owner, u.props);
        return _;
      }
      function tl(u, m, _) {
        if (u == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + u + ".");
        var T, $ = x({}, u.props), Q = u.key, B = u.ref, X = u._self, ne = u._source, ue = u._owner;
        if (m != null) {
          Ps(m) && (B = m.ref, ue = q.current), Ds(m) && (Lr(m.key), Q = "" + m.key);
          var de;
          u.type && u.type.defaultProps && (de = u.type.defaultProps);
          for (T in m)
            hr.call(m, T) && !Rs.hasOwnProperty(T) && (m[T] === void 0 && de !== void 0 ? $[T] = de[T] : $[T] = m[T]);
        }
        var pe = arguments.length - 2;
        if (pe === 1)
          $.children = _;
        else if (pe > 1) {
          for (var ge = Array(pe), Te = 0; Te < pe; Te++)
            ge[Te] = arguments[Te + 2];
          $.children = ge;
        }
        return Qn(u.type, Q, B, X, ne, ue, $);
      }
      function Wt(u) {
        return typeof u == "object" && u !== null && u.$$typeof === n;
      }
      var ks = ".", rl = ":";
      function nl(u) {
        var m = /[=:]/g, _ = {
          "=": "=0",
          ":": "=2"
        }, T = u.replace(m, function($) {
          return _[$];
        });
        return "$" + T;
      }
      var Ns = !1, il = /\/+/g;
      function $s(u) {
        return u.replace(il, "$&/");
      }
      function Jn(u, m) {
        return typeof u == "object" && u !== null && u.key != null ? (Lr(u.key), nl("" + u.key)) : m.toString(36);
      }
      function Ur(u, m, _, T, $) {
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
          var X = u, ne = $(X), ue = T === "" ? ks + Jn(X, 0) : T;
          if (ke(ne)) {
            var de = "";
            ue != null && (de = $s(ue) + "/"), Ur(ne, m, de, "", function(Ql) {
              return Ql;
            });
          } else ne != null && (Wt(ne) && (ne.key && (!X || X.key !== ne.key) && Lr(ne.key), ne = el(
            ne,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            _ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ne.key && (!X || X.key !== ne.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              $s("" + ne.key) + "/"
            ) : "") + ue
          )), m.push(ne));
          return 1;
        }
        var pe, ge, Te = 0, Re = T === "" ? ks : T + rl;
        if (ke(u))
          for (var Qr = 0; Qr < u.length; Qr++)
            pe = u[Qr], ge = Re + Jn(pe, Qr), Te += Ur(pe, m, _, ge, $);
        else {
          var oi = k(u);
          if (typeof oi == "function") {
            var so = u;
            oi === so.entries && (Ns || ye("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ns = !0);
            for (var Gl = oi.call(so), oo, Yl = 0; !(oo = Gl.next()).done; )
              pe = oo.value, ge = Re + Jn(pe, Yl++), Te += Ur(pe, m, _, ge, $);
          } else if (Q === "object") {
            var ao = String(u);
            throw new Error("Objects are not valid as a React child (found: " + (ao === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : ao) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Te;
      }
      function Br(u, m, _) {
        if (u == null)
          return u;
        var T = [], $ = 0;
        return Ur(u, T, "", "", function(Q) {
          return m.call(_, Q, $++);
        }), T;
      }
      function sl(u) {
        var m = 0;
        return Br(u, function() {
          m++;
        }), m;
      }
      function ol(u, m, _) {
        Br(u, function() {
          m.apply(this, arguments);
        }, _);
      }
      function al(u) {
        return Br(u, function(m) {
          return m;
        }) || [];
      }
      function ul(u) {
        if (!Wt(u))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return u;
      }
      function cl(u) {
        var m = {
          $$typeof: l,
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
        m.Provider = {
          $$typeof: c,
          _context: m
        };
        var _ = !1, T = !1, $ = !1;
        {
          var Q = {
            $$typeof: l,
            _context: m
          };
          Object.defineProperties(Q, {
            Provider: {
              get: function() {
                return T || (T = !0, H("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), m.Provider;
              },
              set: function(B) {
                m.Provider = B;
              }
            },
            _currentValue: {
              get: function() {
                return m._currentValue;
              },
              set: function(B) {
                m._currentValue = B;
              }
            },
            _currentValue2: {
              get: function() {
                return m._currentValue2;
              },
              set: function(B) {
                m._currentValue2 = B;
              }
            },
            _threadCount: {
              get: function() {
                return m._threadCount;
              },
              set: function(B) {
                m._threadCount = B;
              }
            },
            Consumer: {
              get: function() {
                return _ || (_ = !0, H("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), m.Consumer;
              }
            },
            displayName: {
              get: function() {
                return m.displayName;
              },
              set: function(B) {
                $ || (ye("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", B), $ = !0);
              }
            }
          }), m.Consumer = Q;
        }
        return m._currentRenderer = null, m._currentRenderer2 = null, m;
      }
      var mr = -1, Xn = 0, qs = 1, ll = 2;
      function fl(u) {
        if (u._status === mr) {
          var m = u._result, _ = m();
          if (_.then(function(Q) {
            if (u._status === Xn || u._status === mr) {
              var B = u;
              B._status = qs, B._result = Q;
            }
          }, function(Q) {
            if (u._status === Xn || u._status === mr) {
              var B = u;
              B._status = ll, B._result = Q;
            }
          }), u._status === mr) {
            var T = u;
            T._status = Xn, T._result = _;
          }
        }
        if (u._status === qs) {
          var $ = u._result;
          return $ === void 0 && H(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, $), "default" in $ || H(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, $), $.default;
        } else
          throw u._result;
      }
      function dl(u) {
        var m = {
          // We use these fields to store the result.
          _status: mr,
          _result: u
        }, _ = {
          $$typeof: g,
          _payload: m,
          _init: fl
        };
        {
          var T, $;
          Object.defineProperties(_, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return T;
              },
              set: function(Q) {
                H("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), T = Q, Object.defineProperty(_, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return $;
              },
              set: function(Q) {
                H("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), $ = Q, Object.defineProperty(_, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return _;
      }
      function pl(u) {
        u != null && u.$$typeof === w ? H("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof u != "function" ? H("forwardRef requires a render function but was given %s.", u === null ? "null" : typeof u) : u.length !== 0 && u.length !== 2 && H("forwardRef render functions accept exactly two parameters: props and ref. %s", u.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), u != null && (u.defaultProps != null || u.propTypes != null) && H("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var m = {
          $$typeof: f,
          render: u
        };
        {
          var _;
          Object.defineProperty(m, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return _;
            },
            set: function(T) {
              _ = T, !u.name && !u.displayName && (u.displayName = T);
            }
          });
        }
        return m;
      }
      var Fs;
      Fs = Symbol.for("react.module.reference");
      function Is(u) {
        return !!(typeof u == "string" || typeof u == "function" || u === s || u === a || me || u === o || u === d || u === h || Oe || u === v || V || L || Z || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === w || u.$$typeof === c || u.$$typeof === l || u.$$typeof === f || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        u.$$typeof === Fs || u.getModuleId !== void 0));
      }
      function hl(u, m) {
        Is(u) || H("memo: The first argument must be a component. Instead received: %s", u === null ? "null" : typeof u);
        var _ = {
          $$typeof: w,
          type: u,
          compare: m === void 0 ? null : m
        };
        {
          var T;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return T;
            },
            set: function($) {
              T = $, !u.name && !u.displayName && (u.displayName = $);
            }
          });
        }
        return _;
      }
      function Ne() {
        var u = S.current;
        return u === null && H(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), u;
      }
      function ml(u) {
        var m = Ne();
        if (u._context !== void 0) {
          var _ = u._context;
          _.Consumer === u ? H("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : _.Provider === u && H("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return m.useContext(u);
      }
      function yl(u) {
        var m = Ne();
        return m.useState(u);
      }
      function gl(u, m, _) {
        var T = Ne();
        return T.useReducer(u, m, _);
      }
      function bl(u) {
        var m = Ne();
        return m.useRef(u);
      }
      function vl(u, m) {
        var _ = Ne();
        return _.useEffect(u, m);
      }
      function wl(u, m) {
        var _ = Ne();
        return _.useInsertionEffect(u, m);
      }
      function El(u, m) {
        var _ = Ne();
        return _.useLayoutEffect(u, m);
      }
      function Sl(u, m) {
        var _ = Ne();
        return _.useCallback(u, m);
      }
      function Ol(u, m) {
        var _ = Ne();
        return _.useMemo(u, m);
      }
      function _l(u, m, _) {
        var T = Ne();
        return T.useImperativeHandle(u, m, _);
      }
      function Cl(u, m) {
        {
          var _ = Ne();
          return _.useDebugValue(u, m);
        }
      }
      function Tl() {
        var u = Ne();
        return u.useTransition();
      }
      function Rl(u) {
        var m = Ne();
        return m.useDeferredValue(u);
      }
      function xl() {
        var u = Ne();
        return u.useId();
      }
      function Al(u, m, _) {
        var T = Ne();
        return T.useSyncExternalStore(u, m, _);
      }
      var yr = 0, Ms, js, Vs, Ls, Us, Bs, zs;
      function Ws() {
      }
      Ws.__reactDisabledLog = !0;
      function Pl() {
        {
          if (yr === 0) {
            Ms = console.log, js = console.info, Vs = console.warn, Ls = console.error, Us = console.group, Bs = console.groupCollapsed, zs = console.groupEnd;
            var u = {
              configurable: !0,
              enumerable: !0,
              value: Ws,
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
          yr++;
        }
      }
      function Dl() {
        {
          if (yr--, yr === 0) {
            var u = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: x({}, u, {
                value: Ms
              }),
              info: x({}, u, {
                value: js
              }),
              warn: x({}, u, {
                value: Vs
              }),
              error: x({}, u, {
                value: Ls
              }),
              group: x({}, u, {
                value: Us
              }),
              groupCollapsed: x({}, u, {
                value: Bs
              }),
              groupEnd: x({}, u, {
                value: zs
              })
            });
          }
          yr < 0 && H("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Zn = be.ReactCurrentDispatcher, ei;
      function zr(u, m, _) {
        {
          if (ei === void 0)
            try {
              throw Error();
            } catch ($) {
              var T = $.stack.trim().match(/\n( *(at )?)/);
              ei = T && T[1] || "";
            }
          return `
` + ei + u;
        }
      }
      var ti = !1, Wr;
      {
        var kl = typeof WeakMap == "function" ? WeakMap : Map;
        Wr = new kl();
      }
      function Hs(u, m) {
        if (!u || ti)
          return "";
        {
          var _ = Wr.get(u);
          if (_ !== void 0)
            return _;
        }
        var T;
        ti = !0;
        var $ = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Q;
        Q = Zn.current, Zn.current = null, Pl();
        try {
          if (m) {
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
              } catch (Re) {
                T = Re;
              }
              Reflect.construct(u, [], B);
            } else {
              try {
                B.call();
              } catch (Re) {
                T = Re;
              }
              u.call(B.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Re) {
              T = Re;
            }
            u();
          }
        } catch (Re) {
          if (Re && T && typeof Re.stack == "string") {
            for (var X = Re.stack.split(`
`), ne = T.stack.split(`
`), ue = X.length - 1, de = ne.length - 1; ue >= 1 && de >= 0 && X[ue] !== ne[de]; )
              de--;
            for (; ue >= 1 && de >= 0; ue--, de--)
              if (X[ue] !== ne[de]) {
                if (ue !== 1 || de !== 1)
                  do
                    if (ue--, de--, de < 0 || X[ue] !== ne[de]) {
                      var pe = `
` + X[ue].replace(" at new ", " at ");
                      return u.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", u.displayName)), typeof u == "function" && Wr.set(u, pe), pe;
                    }
                  while (ue >= 1 && de >= 0);
                break;
              }
          }
        } finally {
          ti = !1, Zn.current = Q, Dl(), Error.prepareStackTrace = $;
        }
        var ge = u ? u.displayName || u.name : "", Te = ge ? zr(ge) : "";
        return typeof u == "function" && Wr.set(u, Te), Te;
      }
      function Nl(u, m, _) {
        return Hs(u, !1);
      }
      function $l(u) {
        var m = u.prototype;
        return !!(m && m.isReactComponent);
      }
      function Hr(u, m, _) {
        if (u == null)
          return "";
        if (typeof u == "function")
          return Hs(u, $l(u));
        if (typeof u == "string")
          return zr(u);
        switch (u) {
          case d:
            return zr("Suspense");
          case h:
            return zr("SuspenseList");
        }
        if (typeof u == "object")
          switch (u.$$typeof) {
            case f:
              return Nl(u.render);
            case w:
              return Hr(u.type, m, _);
            case g: {
              var T = u, $ = T._payload, Q = T._init;
              try {
                return Hr(Q($), m, _);
              } catch {
              }
            }
          }
        return "";
      }
      var Ks = {}, Gs = be.ReactDebugCurrentFrame;
      function Kr(u) {
        if (u) {
          var m = u._owner, _ = Hr(u.type, u._source, m ? m.type : null);
          Gs.setExtraStackFrame(_);
        } else
          Gs.setExtraStackFrame(null);
      }
      function ql(u, m, _, T, $) {
        {
          var Q = Function.call.bind(hr);
          for (var B in u)
            if (Q(u, B)) {
              var X = void 0;
              try {
                if (typeof u[B] != "function") {
                  var ne = Error((T || "React class") + ": " + _ + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ne.name = "Invariant Violation", ne;
                }
                X = u[B](m, B, T, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ue) {
                X = ue;
              }
              X && !(X instanceof Error) && (Kr($), H("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", _, B, typeof X), Kr(null)), X instanceof Error && !(X.message in Ks) && (Ks[X.message] = !0, Kr($), H("Failed %s type: %s", _, X.message), Kr(null));
            }
        }
      }
      function Ht(u) {
        if (u) {
          var m = u._owner, _ = Hr(u.type, u._source, m ? m.type : null);
          p(_);
        } else
          p(null);
      }
      var ri;
      ri = !1;
      function Ys() {
        if (q.current) {
          var u = yt(q.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
      function Fl(u) {
        if (u !== void 0) {
          var m = u.fileName.replace(/^.*[\\\/]/, ""), _ = u.lineNumber;
          return `

Check your code at ` + m + ":" + _ + ".";
        }
        return "";
      }
      function Il(u) {
        return u != null ? Fl(u.__source) : "";
      }
      var Qs = {};
      function Ml(u) {
        var m = Ys();
        if (!m) {
          var _ = typeof u == "string" ? u : u.displayName || u.name;
          _ && (m = `

Check the top-level render call using <` + _ + ">.");
        }
        return m;
      }
      function Js(u, m) {
        if (!(!u._store || u._store.validated || u.key != null)) {
          u._store.validated = !0;
          var _ = Ml(m);
          if (!Qs[_]) {
            Qs[_] = !0;
            var T = "";
            u && u._owner && u._owner !== q.current && (T = " It was passed a child from " + yt(u._owner.type) + "."), Ht(u), H('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, T), Ht(null);
          }
        }
      }
      function Xs(u, m) {
        if (typeof u == "object") {
          if (ke(u))
            for (var _ = 0; _ < u.length; _++) {
              var T = u[_];
              Wt(T) && Js(T, m);
            }
          else if (Wt(u))
            u._store && (u._store.validated = !0);
          else if (u) {
            var $ = k(u);
            if (typeof $ == "function" && $ !== u.entries)
              for (var Q = $.call(u), B; !(B = Q.next()).done; )
                Wt(B.value) && Js(B.value, m);
          }
        }
      }
      function Zs(u) {
        {
          var m = u.type;
          if (m == null || typeof m == "string")
            return;
          var _;
          if (typeof m == "function")
            _ = m.propTypes;
          else if (typeof m == "object" && (m.$$typeof === f || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          m.$$typeof === w))
            _ = m.propTypes;
          else
            return;
          if (_) {
            var T = yt(m);
            ql(_, u.props, "prop", T, u);
          } else if (m.PropTypes !== void 0 && !ri) {
            ri = !0;
            var $ = yt(m);
            H("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
          }
          typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && H("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function jl(u) {
        {
          for (var m = Object.keys(u.props), _ = 0; _ < m.length; _++) {
            var T = m[_];
            if (T !== "children" && T !== "key") {
              Ht(u), H("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Ht(null);
              break;
            }
          }
          u.ref !== null && (Ht(u), H("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
        }
      }
      function eo(u, m, _) {
        var T = Is(u);
        if (!T) {
          var $ = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Il(m);
          Q ? $ += Q : $ += Ys();
          var B;
          u === null ? B = "null" : ke(u) ? B = "array" : u !== void 0 && u.$$typeof === n ? (B = "<" + (yt(u.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : B = typeof u, H("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, $);
        }
        var X = Zc.apply(this, arguments);
        if (X == null)
          return X;
        if (T)
          for (var ne = 2; ne < arguments.length; ne++)
            Xs(arguments[ne], u);
        return u === s ? jl(X) : Zs(X), X;
      }
      var to = !1;
      function Vl(u) {
        var m = eo.bind(null, u);
        return m.type = u, to || (to = !0, ye("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(m, "type", {
          enumerable: !1,
          get: function() {
            return ye("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: u
            }), u;
          }
        }), m;
      }
      function Ll(u, m, _) {
        for (var T = tl.apply(this, arguments), $ = 2; $ < arguments.length; $++)
          Xs(arguments[$], T.type);
        return Zs(T), T;
      }
      function Ul(u, m) {
        var _ = P.transition;
        P.transition = {};
        var T = P.transition;
        P.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          u();
        } finally {
          if (P.transition = _, _ === null && T._updatedFibers) {
            var $ = T._updatedFibers.size;
            $ > 10 && ye("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), T._updatedFibers.clear();
          }
        }
      }
      var ro = !1, Gr = null;
      function Bl(u) {
        if (Gr === null)
          try {
            var m = ("require" + Math.random()).slice(0, 7), _ = t && t[m];
            Gr = _.call(t, "timers").setImmediate;
          } catch {
            Gr = function($) {
              ro === !1 && (ro = !0, typeof MessageChannel > "u" && H("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Q = new MessageChannel();
              Q.port1.onmessage = $, Q.port2.postMessage(void 0);
            };
          }
        return Gr(u);
      }
      var Kt = 0, no = !1;
      function io(u) {
        {
          var m = Kt;
          Kt++, E.current === null && (E.current = []);
          var _ = E.isBatchingLegacy, T;
          try {
            if (E.isBatchingLegacy = !0, T = u(), !_ && E.didScheduleLegacyUpdate) {
              var $ = E.current;
              $ !== null && (E.didScheduleLegacyUpdate = !1, si($));
            }
          } catch (ge) {
            throw Yr(m), ge;
          } finally {
            E.isBatchingLegacy = _;
          }
          if (T !== null && typeof T == "object" && typeof T.then == "function") {
            var Q = T, B = !1, X = {
              then: function(ge, Te) {
                B = !0, Q.then(function(Re) {
                  Yr(m), Kt === 0 ? ni(Re, ge, Te) : ge(Re);
                }, function(Re) {
                  Yr(m), Te(Re);
                });
              }
            };
            return !no && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              B || (no = !0, H("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), X;
          } else {
            var ne = T;
            if (Yr(m), Kt === 0) {
              var ue = E.current;
              ue !== null && (si(ue), E.current = null);
              var de = {
                then: function(ge, Te) {
                  E.current === null ? (E.current = [], ni(ne, ge, Te)) : ge(ne);
                }
              };
              return de;
            } else {
              var pe = {
                then: function(ge, Te) {
                  ge(ne);
                }
              };
              return pe;
            }
          }
        }
      }
      function Yr(u) {
        u !== Kt - 1 && H("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Kt = u;
      }
      function ni(u, m, _) {
        {
          var T = E.current;
          if (T !== null)
            try {
              si(T), Bl(function() {
                T.length === 0 ? (E.current = null, m(u)) : ni(u, m, _);
              });
            } catch ($) {
              _($);
            }
          else
            m(u);
        }
      }
      var ii = !1;
      function si(u) {
        if (!ii) {
          ii = !0;
          var m = 0;
          try {
            for (; m < u.length; m++) {
              var _ = u[m];
              do
                _ = _(!0);
              while (_ !== null);
            }
            u.length = 0;
          } catch (T) {
            throw u = u.slice(m + 1), T;
          } finally {
            ii = !1;
          }
        }
      }
      var zl = eo, Wl = Ll, Hl = Vl, Kl = {
        map: Br,
        forEach: ol,
        count: sl,
        toArray: al,
        only: ul
      };
      e.Children = Kl, e.Component = F, e.Fragment = s, e.Profiler = a, e.PureComponent = Y, e.StrictMode = o, e.Suspense = d, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, e.act = io, e.cloneElement = Wl, e.createContext = cl, e.createElement = zl, e.createFactory = Hl, e.createRef = Ae, e.forwardRef = pl, e.isValidElement = Wt, e.lazy = dl, e.memo = hl, e.startTransition = Ul, e.unstable_act = io, e.useCallback = Sl, e.useContext = ml, e.useDebugValue = Cl, e.useDeferredValue = Rl, e.useEffect = vl, e.useId = xl, e.useImperativeHandle = _l, e.useInsertionEffect = wl, e.useLayoutEffect = El, e.useMemo = Ol, e.useReducer = gl, e.useRef = bl, e.useState = yl, e.useSyncExternalStore = Al, e.useTransition = Tl, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(wr, wr.exports)), wr.exports;
}
process.env.NODE_ENV === "production" ? Ai.exports = Xl() : Ai.exports = Zl();
var wn = Ai.exports;
const Pa = /* @__PURE__ */ is(wn), fo = /* @__PURE__ */ Jl({
  __proto__: null,
  default: Pa
}, [wn]);
var Pi = { exports: {} }, ui = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function ef() {
  if (po) return ui;
  po = 1;
  var t = wn;
  function e(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, s = t.useEffect, o = t.useMemo, a = t.useDebugValue;
  return ui.useSyncExternalStoreWithSelector = function(c, l, f, d, h) {
    var w = i(null);
    if (w.current === null) {
      var g = { hasValue: !1, value: null };
      w.current = g;
    } else g = w.current;
    w = o(function() {
      function b(E) {
        if (!A) {
          if (A = !0, k = E, E = d(E), h !== void 0 && g.hasValue) {
            var q = g.value;
            if (h(q, E)) return S = q;
          }
          return S = E;
        }
        if (q = S, r(k, E)) return q;
        var G = d(E);
        return h !== void 0 && h(q, G) ? q : (k = E, S = G);
      }
      var A = !1, k, S, P = f === void 0 ? null : f;
      return [function() {
        return b(l());
      }, P === null ? void 0 : function() {
        return b(P());
      }];
    }, [l, f, d, h]);
    var v = n(c, w[0], w[1]);
    return s(function() {
      g.hasValue = !0, g.value = v;
    }, [v]), a(v), v;
  }, ui;
}
var ci = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function tf() {
  return ho || (ho = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = wn;
    function e(l, f) {
      return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
    }
    var r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, s = t.useEffect, o = t.useMemo, a = t.useDebugValue;
    function c(l, f, d, h, w) {
      var g = i(null), v;
      g.current === null ? (v = {
        hasValue: !1,
        value: null
      }, g.current = v) : v = g.current;
      var b = o(function() {
        var P = !1, E, q, G = function(L) {
          if (!P) {
            P = !0, E = L;
            var Z = h(L);
            if (w !== void 0 && v.hasValue) {
              var Oe = v.value;
              if (w(Oe, Z))
                return q = Oe, Oe;
            }
            return q = Z, Z;
          }
          var me = E, be = q;
          if (r(me, L))
            return be;
          var ye = h(L);
          return w !== void 0 && w(be, ye) ? be : (E = L, q = ye, ye);
        }, j = d === void 0 ? null : d, p = function() {
          return G(f());
        }, V = j === null ? void 0 : function() {
          return G(j());
        };
        return [p, V];
      }, [f, d, h, w]), A = b[0], k = b[1], S = n(l, A, k);
      return s(function() {
        v.hasValue = !0, v.value = S;
      }, [S]), a(S), S;
    }
    ci.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ci;
}
process.env.NODE_ENV === "production" ? Pi.exports = ef() : Pi.exports = tf();
var rf = Pi.exports, ut = (
  // prettier-ignore
  // @ts-ignore
  "default" in fo ? Pa : fo
), mo = Symbol.for("react-redux-context"), yo = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function nf() {
  if (!ut.createContext)
    return {};
  const t = yo[mo] ?? (yo[mo] = /* @__PURE__ */ new Map());
  let e = t.get(ut.createContext);
  return e || (e = ut.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (e.displayName = "ReactRedux"), t.set(ut.createContext, e)), e;
}
var Di = /* @__PURE__ */ nf(), sf = () => {
  throw new Error("uSES not initialized!");
};
function Da(t = Di) {
  return function() {
    const r = ut.useContext(t);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var of = /* @__PURE__ */ Da(), ka = sf, af = (t) => {
  ka = t;
}, uf = (t, e) => t === e;
function cf(t = Di) {
  const e = t === Di ? of : Da(t), r = (n, i = {}) => {
    const { equalityFn: s = uf, devModeChecks: o = {} } = typeof i == "function" ? { equalityFn: i } : i;
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
      getServerState: l,
      stabilityCheck: f,
      identityFunctionCheck: d
    } = e(), h = ut.useRef(!0), w = ut.useCallback(
      {
        [n.name](v) {
          const b = n(v);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: A,
              stabilityCheck: k
            } = {
              stabilityCheck: f,
              identityFunctionCheck: d,
              ...o
            };
            if (k === "always" || k === "once" && h.current) {
              const S = n(v);
              if (!s(b, S)) {
                let P;
                try {
                  throw new Error();
                } catch (E) {
                  ({ stack: P } = E);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: v,
                    selected: b,
                    selected2: S,
                    stack: P
                  }
                );
              }
            }
            if ((A === "always" || A === "once" && h.current) && b === v) {
              let S;
              try {
                throw new Error();
              } catch (P) {
                ({ stack: S } = P);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: S }
              );
            }
            h.current && (h.current = !1);
          }
          return b;
        }
      }[n.name],
      [n, f, o.stabilityCheck]
    ), g = ka(
      c.addNestedSub,
      a.getState,
      l || a.getState,
      w,
      s
    );
    return ut.useDebugValue(g), g;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Na = /* @__PURE__ */ cf(), lf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ff = typeof navigator < "u" && navigator.product === "ReactNative";
lf || ff ? ut.useLayoutEffect : ut.useEffect;
af(rf.useSyncExternalStoreWithSelector);
const Rg = Na.withTypes(), xg = {
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
function xe(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var df = typeof Symbol == "function" && Symbol.observable || "@@observable", go = df, li = () => Math.random().toString(36).substring(7).split("").join("."), pf = {
  INIT: `@@redux/INIT${/* @__PURE__ */ li()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ li()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${li()}`
}, Ft = pf;
function Nr(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null;
}
function hf(t) {
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
  if (gf(t))
    return "date";
  if (yf(t))
    return "error";
  const r = mf(t);
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
function mf(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function yf(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function gf(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function bt(t) {
  let e = typeof t;
  return process.env.NODE_ENV !== "production" && (e = hf(t)), e;
}
function $a(t, e, r) {
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? xe(2) : `Expected the root reducer to be a function. Instead, received: '${bt(t)}'`);
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? xe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xe(1) : `Expected the enhancer to be a function. Instead, received: '${bt(r)}'`);
    return r($a)(t, e);
  }
  let n = t, i = e, s = /* @__PURE__ */ new Map(), o = s, a = 0, c = !1;
  function l() {
    o === s && (o = /* @__PURE__ */ new Map(), s.forEach((b, A) => {
      o.set(A, b);
    }));
  }
  function f() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function d(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xe(4) : `Expected the listener to be a function. Instead, received: '${bt(b)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let A = !0;
    l();
    const k = a++;
    return o.set(k, b), function() {
      if (A) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? xe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        A = !1, l(), o.delete(k), s = null;
      }
    };
  }
  function h(b) {
    if (!Nr(b))
      throw new Error(process.env.NODE_ENV === "production" ? xe(7) : `Actions must be plain objects. Instead, the actual type was: '${bt(b)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof b.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? xe(17) : `Action "type" property must be a string. Instead, the actual type was: '${bt(b.type)}'. Value was: '${b.type}' (stringified)`);
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
      throw new Error(process.env.NODE_ENV === "production" ? xe(10) : `Expected the nextReducer to be a function. Instead, received: '${bt(b)}`);
    n = b, h({
      type: Ft.REPLACE
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
      subscribe(A) {
        if (typeof A != "object" || A === null)
          throw new Error(process.env.NODE_ENV === "production" ? xe(11) : `Expected the observer to be an object. Instead, received: '${bt(A)}'`);
        function k() {
          const P = A;
          P.next && P.next(f());
        }
        return k(), {
          unsubscribe: b(k)
        };
      },
      [go]() {
        return this;
      }
    };
  }
  return h({
    type: Ft.INIT
  }), {
    dispatch: h,
    subscribe: d,
    getState: f,
    replaceReducer: w,
    [go]: g
  };
}
function bo(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function bf(t, e, r, n) {
  const i = Object.keys(e), s = r && r.type === Ft.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Nr(t))
    return `The ${s} has unexpected type of "${bt(t)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const o = Object.keys(t).filter((a) => !e.hasOwnProperty(a) && !n[a]);
  if (o.forEach((a) => {
    n[a] = !0;
  }), !(r && r.type === Ft.REPLACE) && o.length > 0)
    return `Unexpected ${o.length > 1 ? "keys" : "key"} "${o.join('", "')}" found in ${s}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function vf(t) {
  Object.keys(t).forEach((e) => {
    const r = t[e];
    if (typeof r(void 0, {
      type: Ft.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xe(12) : `The slice reducer for key "${e}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Ft.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xe(13) : `The slice reducer for key "${e}" returned undefined when probed with a random type. Don't try to handle '${Ft.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function qa(t) {
  const e = Object.keys(t), r = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    process.env.NODE_ENV !== "production" && typeof t[a] > "u" && bo(`No reducer provided for key "${a}"`), typeof t[a] == "function" && (r[a] = t[a]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let s;
  try {
    vf(r);
  } catch (o) {
    s = o;
  }
  return function(a = {}, c) {
    if (s)
      throw s;
    if (process.env.NODE_ENV !== "production") {
      const d = bf(a, r, c, i);
      d && bo(d);
    }
    let l = !1;
    const f = {};
    for (let d = 0; d < n.length; d++) {
      const h = n[d], w = r[h], g = a[h], v = w(g, c);
      if (typeof v > "u") {
        const b = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? xe(14) : `When called with an action of type ${b ? `"${String(b)}"` : "(unknown type)"}, the slice reducer for key "${h}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[h] = v, l = l || v !== g;
    }
    return l = l || n.length !== Object.keys(a).length, l ? f : a;
  };
}
function ln(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, r) => (...n) => e(r(...n)));
}
function wf(...t) {
  return (e) => (r, n) => {
    const i = e(r, n);
    let s = () => {
      throw new Error(process.env.NODE_ENV === "production" ? xe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const o = {
      getState: i.getState,
      dispatch: (c, ...l) => s(c, ...l)
    }, a = t.map((c) => c(o));
    return s = ln(...a)(i.dispatch), {
      ...i,
      dispatch: s
    };
  };
}
function Fa(t) {
  return Nr(t) && "type" in t && typeof t.type == "string";
}
var Ia = Symbol.for("immer-nothing"), vo = Symbol.for("immer-draftable"), He = Symbol.for("immer-state"), Ef = process.env.NODE_ENV !== "production" ? [
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
function Me(t, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const r = Ef[t], n = typeof r == "function" ? r.apply(null, e) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var fr = Object.getPrototypeOf;
function jt(t) {
  return !!t && !!t[He];
}
function pt(t) {
  var e;
  return t ? Ma(t) || Array.isArray(t) || !!t[vo] || !!((e = t.constructor) != null && e[vo]) || Sn(t) || On(t) : !1;
}
var Sf = Object.prototype.constructor.toString();
function Ma(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = fr(t);
  if (e === null)
    return !0;
  const r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Sf;
}
function fn(t, e) {
  En(t) === 0 ? Reflect.ownKeys(t).forEach((r) => {
    e(r, t[r], t);
  }) : t.forEach((r, n) => e(n, r, t));
}
function En(t) {
  const e = t[He];
  return e ? e.type_ : Array.isArray(t) ? 1 : Sn(t) ? 2 : On(t) ? 3 : 0;
}
function ki(t, e) {
  return En(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function ja(t, e, r) {
  const n = En(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function Of(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function Sn(t) {
  return t instanceof Map;
}
function On(t) {
  return t instanceof Set;
}
function Pt(t) {
  return t.copy_ || t.base_;
}
function Ni(t, e) {
  if (Sn(t))
    return new Map(t);
  if (On(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const r = Ma(t);
  if (e === !0 || e === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(t);
    delete n[He];
    let i = Reflect.ownKeys(n);
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = n[o];
      a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: a.enumerable,
        value: t[o]
      });
    }
    return Object.create(fr(t), n);
  } else {
    const n = fr(t);
    if (n !== null && r)
      return { ...t };
    const i = Object.create(n);
    return Object.assign(i, t);
  }
}
function ss(t, e = !1) {
  return _n(t) || jt(t) || !pt(t) || (En(t) > 1 && (t.set = t.add = t.clear = t.delete = _f), Object.freeze(t), e && Object.entries(t).forEach(([r, n]) => ss(n, !0))), t;
}
function _f() {
  Me(2);
}
function _n(t) {
  return Object.isFrozen(t);
}
var Cf = {};
function Vt(t) {
  const e = Cf[t];
  return e || Me(0, t), e;
}
var Cr;
function Va() {
  return Cr;
}
function Tf(t, e) {
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
function wo(t, e) {
  e && (Vt("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = e);
}
function $i(t) {
  qi(t), t.drafts_.forEach(Rf), t.drafts_ = null;
}
function qi(t) {
  t === Cr && (Cr = t.parent_);
}
function Eo(t) {
  return Cr = Tf(Cr, t);
}
function Rf(t) {
  const e = t[He];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function So(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const r = e.drafts_[0];
  return t !== void 0 && t !== r ? (r[He].modified_ && ($i(e), Me(4)), pt(t) && (t = dn(e, t), e.parent_ || pn(e, t)), e.patches_ && Vt("Patches").generateReplacementPatches_(
    r[He].base_,
    t,
    e.patches_,
    e.inversePatches_
  )) : t = dn(e, r, []), $i(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), t !== Ia ? t : void 0;
}
function dn(t, e, r) {
  if (_n(e))
    return e;
  const n = e[He];
  if (!n)
    return fn(
      e,
      (i, s) => Oo(t, n, e, i, s, r)
    ), e;
  if (n.scope_ !== t)
    return e;
  if (!n.modified_)
    return pn(t, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let s = i, o = !1;
    n.type_ === 3 && (s = new Set(i), i.clear(), o = !0), fn(
      s,
      (a, c) => Oo(t, n, i, a, c, r, o)
    ), pn(t, i, !1), r && t.patches_ && Vt("Patches").generatePatches_(
      n,
      r,
      t.patches_,
      t.inversePatches_
    );
  }
  return n.copy_;
}
function Oo(t, e, r, n, i, s, o) {
  if (process.env.NODE_ENV !== "production" && i === r && Me(5), jt(i)) {
    const a = s && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ki(e.assigned_, n) ? s.concat(n) : void 0, c = dn(t, i, a);
    if (ja(r, n, c), jt(c))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else o && r.add(i);
  if (pt(i) && !_n(i)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    dn(t, i), (!e || !e.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && pn(t, i);
  }
}
function pn(t, e, r = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && ss(e, r);
}
function xf(t, e) {
  const r = Array.isArray(t), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Va(),
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
  let i = n, s = os;
  r && (i = [n], s = Tr);
  const { revoke: o, proxy: a } = Proxy.revocable(i, s);
  return n.draft_ = a, n.revoke_ = o, a;
}
var os = {
  get(t, e) {
    if (e === He)
      return t;
    const r = Pt(t);
    if (!ki(r, e))
      return Af(t, r, e);
    const n = r[e];
    return t.finalized_ || !pt(n) ? n : n === fi(t.base_, e) ? (di(t), t.copy_[e] = Ii(n, t)) : n;
  },
  has(t, e) {
    return e in Pt(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(Pt(t));
  },
  set(t, e, r) {
    const n = La(Pt(t), e);
    if (n != null && n.set)
      return n.set.call(t.draft_, r), !0;
    if (!t.modified_) {
      const i = fi(Pt(t), e), s = i == null ? void 0 : i[He];
      if (s && s.base_ === r)
        return t.copy_[e] = r, t.assigned_[e] = !1, !0;
      if (Of(r, i) && (r !== void 0 || ki(t.base_, e)))
        return !0;
      di(t), Fi(t);
    }
    return t.copy_[e] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || e in t.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(t.copy_[e]) || (t.copy_[e] = r, t.assigned_[e] = !0), !0;
  },
  deleteProperty(t, e) {
    return fi(t.base_, e) !== void 0 || e in t.base_ ? (t.assigned_[e] = !1, di(t), Fi(t)) : delete t.assigned_[e], t.copy_ && delete t.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, e) {
    const r = Pt(t), n = Reflect.getOwnPropertyDescriptor(r, e);
    return n && {
      writable: !0,
      configurable: t.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: r[e]
    };
  },
  defineProperty() {
    Me(11);
  },
  getPrototypeOf(t) {
    return fr(t.base_);
  },
  setPrototypeOf() {
    Me(12);
  }
}, Tr = {};
fn(os, (t, e) => {
  Tr[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
Tr.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && Me(13), Tr.set.call(this, t, e, void 0);
};
Tr.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && Me(14), os.set.call(this, t[0], e, r, t[0]);
};
function fi(t, e) {
  const r = t[He];
  return (r ? Pt(r) : t)[e];
}
function Af(t, e, r) {
  var i;
  const n = La(e, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(t.draft_)
  ) : void 0;
}
function La(t, e) {
  if (!(e in t))
    return;
  let r = fr(t);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, e);
    if (n)
      return n;
    r = fr(r);
  }
}
function Fi(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Fi(t.parent_));
}
function di(t) {
  t.copy_ || (t.copy_ = Ni(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var Pf = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, r, n) => {
      if (typeof e == "function" && typeof r != "function") {
        const s = r;
        r = e;
        const o = this;
        return function(c = s, ...l) {
          return o.produce(c, (f) => r.call(this, f, ...l));
        };
      }
      typeof r != "function" && Me(6), n !== void 0 && typeof n != "function" && Me(7);
      let i;
      if (pt(e)) {
        const s = Eo(this), o = Ii(e, void 0);
        let a = !0;
        try {
          i = r(o), a = !1;
        } finally {
          a ? $i(s) : qi(s);
        }
        return wo(s, n), So(i, s);
      } else if (!e || typeof e != "object") {
        if (i = r(e), i === void 0 && (i = e), i === Ia && (i = void 0), this.autoFreeze_ && ss(i, !0), n) {
          const s = [], o = [];
          Vt("Patches").generateReplacementPatches_(e, i, s, o), n(s, o);
        }
        return i;
      } else
        Me(1, e);
    }, this.produceWithPatches = (e, r) => {
      if (typeof e == "function")
        return (o, ...a) => this.produceWithPatches(o, (c) => e(c, ...a));
      let n, i;
      return [this.produce(e, r, (o, a) => {
        n = o, i = a;
      }), n, i];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    pt(t) || Me(8), jt(t) && (t = Df(t));
    const e = Eo(this), r = Ii(t, void 0);
    return r[He].isManual_ = !0, qi(e), r;
  }
  finishDraft(t, e) {
    const r = t && t[He];
    (!r || !r.isManual_) && Me(9);
    const { scope_: n } = r;
    return wo(n, e), So(void 0, n);
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
    const n = Vt("Patches").applyPatches_;
    return jt(t) ? n(t, e) : this.produce(
      t,
      (i) => n(i, e)
    );
  }
};
function Ii(t, e) {
  const r = Sn(t) ? Vt("MapSet").proxyMap_(t, e) : On(t) ? Vt("MapSet").proxySet_(t, e) : xf(t, e);
  return (e ? e.scope_ : Va()).drafts_.push(r), r;
}
function Df(t) {
  return jt(t) || Me(10, t), Ua(t);
}
function Ua(t) {
  if (!pt(t) || _n(t))
    return t;
  const e = t[He];
  let r;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, r = Ni(t, e.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Ni(t, !0);
  return fn(r, (n, i) => {
    ja(r, n, Ua(i));
  }), e && (e.finalized_ = !1), r;
}
var Ke = new Pf(), Ba = Ke.produce;
Ke.produceWithPatches.bind(
  Ke
);
Ke.setAutoFreeze.bind(Ke);
Ke.setUseStrictShallowCopy.bind(Ke);
Ke.applyPatches.bind(Ke);
Ke.createDraft.bind(Ke);
Ke.finishDraft.bind(Ke);
function za(t) {
  return ({ dispatch: r, getState: n }) => (i) => (s) => typeof s == "function" ? s(r, n, t) : i(s);
}
var kf = za(), Nf = za, $f = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ln : ln.apply(null, arguments);
}, qf = (t) => t && typeof t.match == "function";
function _o(t, e) {
  function r(...n) {
    if (e) {
      let i = e(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? fe(0) : "prepareAction did not return an object");
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
  return r.toString = () => `${t}`, r.type = t, r.match = (n) => Fa(n) && n.type === t, r;
}
function Ff(t) {
  return typeof t == "function" && "type" in t && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  qf(t);
}
function If(t) {
  const e = t ? `${t}`.split("/") : [], r = e[e.length - 1] || "actionCreator";
  return `Detected an action creator with type "${t || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function Mf(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: e = Ff
  } = t;
  return () => (r) => (n) => (e(n) && console.warn(If(n.type)), r(n));
}
function Wa(t, e) {
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
      r > t && console.warn(`${e} took ${r}ms, which is more than the warning threshold of ${t}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Ha = class Er extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Er.prototype);
  }
  static get [Symbol.species]() {
    return Er;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new Er(...e[0].concat(this)) : new Er(...e.concat(this));
  }
};
function Co(t) {
  return pt(t) ? Ba(t, () => {
  }) : t;
}
function To(t, e, r) {
  if (t.has(e)) {
    let i = t.get(e);
    return r.update && (i = r.update(i, e, t), t.set(e, i)), i;
  }
  if (!r.insert) throw new Error(process.env.NODE_ENV === "production" ? fe(10) : "No insert provided for key not already in map");
  const n = r.insert(e, t);
  return t.set(e, n), n;
}
function jf(t) {
  return typeof t != "object" || t == null || Object.isFrozen(t);
}
function Vf(t, e, r) {
  const n = Ka(t, e, r);
  return {
    detectMutations() {
      return Ga(t, e, n, r);
    }
  };
}
function Ka(t, e = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const s = {
    value: r
  };
  if (!t(r) && !i.has(r)) {
    i.add(r), s.children = {};
    for (const o in r) {
      const a = n ? n + "." + o : o;
      e.length && e.indexOf(a) !== -1 || (s.children[o] = Ka(t, e, r[o], a));
    }
  }
  return s;
}
function Ga(t, e = [], r, n, i = !1, s = "") {
  const o = r ? r.value : void 0, a = o === n;
  if (i && !a && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: s
    };
  if (t(o) || t(n))
    return {
      wasMutated: !1
    };
  const c = {};
  for (let f in r.children)
    c[f] = !0;
  for (let f in n)
    c[f] = !0;
  const l = e.length > 0;
  for (let f in c) {
    const d = s ? s + "." + f : f;
    if (l && e.some((g) => g instanceof RegExp ? g.test(d) : d === g))
      continue;
    const h = Ga(t, e, r.children[f], n[f], a, d);
    if (h.wasMutated)
      return h;
  }
  return {
    wasMutated: !1
  };
}
function Lf(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (e) => (r) => e(r);
  {
    let e = function(a, c, l, f) {
      return JSON.stringify(a, r(c, f), l);
    }, r = function(a, c) {
      let l = [], f = [];
      return c || (c = function(d, h) {
        return l[0] === h ? "[Circular ~]" : "[Circular ~." + f.slice(0, l.indexOf(h)).join(".") + "]";
      }), function(d, h) {
        if (l.length > 0) {
          var w = l.indexOf(this);
          ~w ? l.splice(w + 1) : l.push(this), ~w ? f.splice(w, 1 / 0, d) : f.push(d), ~l.indexOf(h) && (h = c.call(this, d, h));
        } else l.push(h);
        return a == null ? h : a.call(this, d, h);
      };
    }, {
      isImmutable: n = jf,
      ignoredPaths: i,
      warnAfter: s = 32
    } = t;
    const o = Vf.bind(null, n, i);
    return ({
      getState: a
    }) => {
      let c = a(), l = o(c), f;
      return (d) => (h) => {
        const w = Wa(s, "ImmutableStateInvariantMiddleware");
        w.measureTime(() => {
          if (c = a(), f = l.detectMutations(), l = o(c), f.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? fe(19) : `A state mutation was detected between dispatches, in the path '${f.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const g = d(h);
        return w.measureTime(() => {
          if (c = a(), f = l.detectMutations(), l = o(c), f.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? fe(20) : `A state mutation was detected inside a dispatch, in the path: ${f.path || ""}. Take a look at the reducer(s) handling the action ${e(h)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), w.warnIfExceeded(), g;
      };
    };
  }
}
function Ya(t) {
  const e = typeof t;
  return t == null || e === "string" || e === "boolean" || e === "number" || Array.isArray(t) || Nr(t);
}
function Mi(t, e = "", r = Ya, n, i = [], s) {
  let o;
  if (!r(t))
    return {
      keyPath: e || "<root>",
      value: t
    };
  if (typeof t != "object" || t === null || s != null && s.has(t)) return !1;
  const a = n != null ? n(t) : Object.entries(t), c = i.length > 0;
  for (const [l, f] of a) {
    const d = e ? e + "." + l : l;
    if (!(c && i.some((w) => w instanceof RegExp ? w.test(d) : d === w))) {
      if (!r(f))
        return {
          keyPath: d,
          value: f
        };
      if (typeof f == "object" && (o = Mi(f, d, r, n, i, s), o))
        return o;
    }
  }
  return s && Qa(t) && s.add(t), !1;
}
function Qa(t) {
  if (!Object.isFrozen(t)) return !1;
  for (const e of Object.values(t))
    if (!(typeof e != "object" || e === null) && !Qa(e))
      return !1;
  return !0;
}
function Uf(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (e) => (r) => e(r);
  {
    const {
      isSerializable: e = Ya,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: s = [],
      warnAfter: o = 32,
      ignoreState: a = !1,
      ignoreActions: c = !1,
      disableCache: l = !1
    } = t, f = !l && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (h) => (w) => {
      if (!Fa(w))
        return h(w);
      const g = h(w), v = Wa(o, "SerializableStateInvariantMiddleware");
      return !c && !(n.length && n.indexOf(w.type) !== -1) && v.measureTime(() => {
        const b = Mi(w, "", e, r, i, f);
        if (b) {
          const {
            keyPath: A,
            value: k
          } = b;
          console.error(`A non-serializable value was detected in an action, in the path: \`${A}\`. Value:`, k, `
Take a look at the logic that dispatched this action: `, w, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), a || (v.measureTime(() => {
        const b = d.getState(), A = Mi(b, "", e, r, s, f);
        if (A) {
          const {
            keyPath: k,
            value: S
          } = A;
          console.error(`A non-serializable value was detected in the state, in the path: \`${k}\`. Value:`, S, `
Take a look at the reducer(s) handling this action type: ${w.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), v.warnIfExceeded()), g;
    };
  }
}
function Xr(t) {
  return typeof t == "boolean";
}
var Bf = () => function(e) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: s = !0
  } = e ?? {};
  let o = new Ha();
  if (r && (Xr(r) ? o.push(kf) : o.push(Nf(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let a = {};
      Xr(n) || (a = n), o.unshift(Lf(a));
    }
    if (i) {
      let a = {};
      Xr(i) || (a = i), o.push(Uf(a));
    }
    if (s) {
      let a = {};
      Xr(s) || (a = s), o.unshift(Mf(a));
    }
  }
  return o;
}, zf = "RTK_autoBatch", Ja = (t) => (e) => {
  setTimeout(e, t);
}, Wf = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Ja(10), Hf = (t = {
  type: "raf"
}) => (e) => (...r) => {
  const n = e(...r);
  let i = !0, s = !1, o = !1;
  const a = /* @__PURE__ */ new Set(), c = t.type === "tick" ? queueMicrotask : t.type === "raf" ? Wf : t.type === "callback" ? t.queueNotification : Ja(t.timeout), l = () => {
    o = !1, s && (s = !1, a.forEach((f) => f()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const d = () => i && f(), h = n.subscribe(d);
      return a.add(f), () => {
        h(), a.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var d;
      try {
        return i = !((d = f == null ? void 0 : f.meta) != null && d[zf]), s = !i, s && (o || (o = !0, c(l))), n.dispatch(f);
      } finally {
        i = !0;
      }
    }
  });
}, Kf = (t) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new Ha(t);
  return n && i.push(Hf(typeof n == "object" ? n : void 0)), i;
};
function as(t) {
  const e = Bf(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    preloadedState: s = void 0,
    enhancers: o = void 0
  } = t || {};
  let a;
  if (typeof r == "function")
    a = r;
  else if (Nr(r))
    a = qa(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? fe(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? fe(2) : "`middleware` field must be a callback");
  let c;
  if (typeof n == "function") {
    if (c = n(e), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? fe(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = e();
  if (process.env.NODE_ENV !== "production" && c.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? fe(4) : "each middleware provided to configureStore must be a function");
  let l = ln;
  i && (l = $f({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const f = wf(...c), d = Kf(f);
  if (process.env.NODE_ENV !== "production" && o && typeof o != "function")
    throw new Error(process.env.NODE_ENV === "production" ? fe(5) : "`enhancers` field must be a callback");
  let h = typeof o == "function" ? o(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? fe(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && h.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? fe(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !h.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const w = l(...h);
  return $a(a, s, w);
}
function Xa(t) {
  const e = {}, r = [];
  let n;
  const i = {
    addCase(s, o) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? fe(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? fe(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof s == "string" ? s : s.type;
      if (!a)
        throw new Error(process.env.NODE_ENV === "production" ? fe(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in e)
        throw new Error(process.env.NODE_ENV === "production" ? fe(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return e[a] = o, i;
    },
    addMatcher(s, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? fe(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: s,
        reducer: o
      }), i;
    },
    addDefaultCase(s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? fe(31) : "`builder.addDefaultCase` can only be called once");
      return n = s, i;
    }
  };
  return t(i), [e, r, n];
}
function Gf(t) {
  return typeof t == "function";
}
function Yf(t, e) {
  if (process.env.NODE_ENV !== "production" && typeof e == "object")
    throw new Error(process.env.NODE_ENV === "production" ? fe(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = Xa(e), s;
  if (Gf(t))
    s = () => Co(t());
  else {
    const a = Co(t);
    s = () => a;
  }
  function o(a = s(), c) {
    let l = [r[c.type], ...n.filter(({
      matcher: f
    }) => f(c)).map(({
      reducer: f
    }) => f)];
    return l.filter((f) => !!f).length === 0 && (l = [i]), l.reduce((f, d) => {
      if (d)
        if (jt(f)) {
          const w = d(f, c);
          return w === void 0 ? f : w;
        } else {
          if (pt(f))
            return Ba(f, (h) => d(h, c));
          {
            const h = d(f, c);
            if (h === void 0) {
              if (f === null)
                return f;
              throw new Error(process.env.NODE_ENV === "production" ? fe(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return h;
          }
        }
      return f;
    }, a);
  }
  return o.getInitialState = s, o;
}
var Qf = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Jf(t, e) {
  return `${t}/${e}`;
}
function Xf({
  creators: t
} = {}) {
  var r;
  const e = (r = t == null ? void 0 : t.asyncThunk) == null ? void 0 : r[Qf];
  return function(i) {
    const {
      name: s,
      reducerPath: o = s
    } = i;
    if (!s)
      throw new Error(process.env.NODE_ENV === "production" ? fe(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof i.reducers == "function" ? i.reducers(ed()) : i.reducers) || {}, c = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(S, P) {
        const E = typeof S == "string" ? S : S.type;
        if (!E)
          throw new Error(process.env.NODE_ENV === "production" ? fe(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in l.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? fe(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return l.sliceCaseReducersByType[E] = P, f;
      },
      addMatcher(S, P) {
        return l.sliceMatchers.push({
          matcher: S,
          reducer: P
        }), f;
      },
      exposeAction(S, P) {
        return l.actionCreators[S] = P, f;
      },
      exposeCaseReducer(S, P) {
        return l.sliceCaseReducersByName[S] = P, f;
      }
    };
    c.forEach((S) => {
      const P = a[S], E = {
        reducerName: S,
        type: Jf(s, S),
        createNotation: typeof i.reducers == "function"
      };
      rd(P) ? id(E, P, f, e) : td(E, P, f);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? fe(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [S = {}, P = [], E = void 0] = typeof i.extraReducers == "function" ? Xa(i.extraReducers) : [i.extraReducers], q = {
        ...S,
        ...l.sliceCaseReducersByType
      };
      return Yf(i.initialState, (G) => {
        for (let j in q)
          G.addCase(j, q[j]);
        for (let j of l.sliceMatchers)
          G.addMatcher(j.matcher, j.reducer);
        for (let j of P)
          G.addMatcher(j.matcher, j.reducer);
        E && G.addDefaultCase(E);
      });
    }
    const h = (S) => S, w = /* @__PURE__ */ new Map();
    let g;
    function v(S, P) {
      return g || (g = d()), g(S, P);
    }
    function b() {
      return g || (g = d()), g.getInitialState();
    }
    function A(S, P = !1) {
      function E(G) {
        let j = G[S];
        if (typeof j > "u") {
          if (P)
            j = b();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? fe(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return j;
      }
      function q(G = h) {
        const j = To(w, P, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return To(j, G, {
          insert: () => {
            const p = {};
            for (const [V, L] of Object.entries(i.selectors ?? {}))
              p[V] = Zf(L, G, b, P);
            return p;
          }
        });
      }
      return {
        reducerPath: S,
        getSelectors: q,
        get selectors() {
          return q(E);
        },
        selectSlice: E
      };
    }
    const k = {
      name: s,
      reducer: v,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: b,
      ...A(o),
      injectInto(S, {
        reducerPath: P,
        ...E
      } = {}) {
        const q = P ?? o;
        return S.inject({
          reducerPath: q,
          reducer: v
        }, E), {
          ...k,
          ...A(q, !0)
        };
      }
    };
    return k;
  };
}
function Zf(t, e, r, n) {
  function i(s, ...o) {
    let a = e(s);
    if (typeof a > "u") {
      if (n)
        a = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? fe(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(a, ...o);
  }
  return i.unwrapped = t, i;
}
var Se = /* @__PURE__ */ Xf();
function ed() {
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
function td({
  type: t,
  reducerName: e,
  createNotation: r
}, n, i) {
  let s, o;
  if ("reducer" in n) {
    if (r && !nd(n))
      throw new Error(process.env.NODE_ENV === "production" ? fe(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    s = n.reducer, o = n.prepare;
  } else
    s = n;
  i.addCase(t, s).exposeCaseReducer(e, s).exposeAction(e, o ? _o(t, o) : _o(t));
}
function rd(t) {
  return t._reducerDefinitionType === "asyncThunk";
}
function nd(t) {
  return t._reducerDefinitionType === "reducerWithPrepare";
}
function id({
  type: t,
  reducerName: e
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? fe(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: s,
    fulfilled: o,
    pending: a,
    rejected: c,
    settled: l,
    options: f
  } = r, d = i(t, s, f);
  n.exposeAction(e, d), o && n.addCase(d.fulfilled, o), a && n.addCase(d.pending, a), c && n.addCase(d.rejected, c), l && n.addMatcher(d.settled, l), n.exposeCaseReducer(e, {
    fulfilled: o || Zr,
    pending: a || Zr,
    rejected: c || Zr,
    settled: l || Zr
  });
}
function Zr() {
}
function fe(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
const sd = {
  mobileOpen: !1,
  isClosing: !1,
  pageTitle: "Dashboard"
}, Za = Se({
  name: "layout",
  initialState: sd,
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
}), { setMobileOpen: Ag, setIsClosing: Pg, setPageTitle: Dg } = Za.actions, kg = (t) => t.layout.mobileOpen, Ng = (t) => t.layout.isClosing, $g = (t) => t.layout.pageTitle, od = Za.reducer, ad = {
  preview: !1
}, eu = Se({
  name: "preview",
  initialState: ad,
  reducers: {
    setPreview: (t, e) => {
      t.preview = e.payload;
    }
  }
}), { setPreview: qg } = eu.actions, Fg = (t) => t.preview.preview, ud = eu.reducer, cd = {
  isOpen: !1,
  severity: "success",
  message: ""
}, tu = Se({
  name: "notification",
  initialState: cd,
  reducers: {
    showNotification: (t, e) => {
      t.isOpen = !0, t.severity = e.payload.severity, t.message = e.payload.message;
    },
    hideNotification: (t) => {
      t.isOpen = !1;
    }
  }
}), { showNotification: Ig, hideNotification: Mg } = tu.actions, jg = (t) => t.notification, ld = tu.reducer, fd = {
  openDrawer: !1,
  openFor: "create",
  dataId: ""
}, ru = Se({
  name: "formContainer",
  initialState: fd,
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
const nu = ru.reducer, dd = {
  customers: []
}, iu = Se({
  name: "customerData",
  initialState: dd,
  reducers: {
    setCustomerData: (t, e) => {
      t.customers = e.payload;
    }
  }
});
iu.actions;
const su = iu.reducer, pd = {
  allVendors: [],
  selectedVendor: null
}, ou = Se({
  name: "vendorData",
  initialState: pd,
  reducers: {
    setVendorData: (t, e) => {
      t.allVendors = e.payload;
    },
    setSelectedVendor: (t, e) => {
      t.selectedVendor = e.payload;
    }
  }
});
ou.actions;
const au = ou.reducer, hd = {
  employees: []
}, uu = Se({
  name: "employeeData",
  initialState: hd,
  reducers: {
    setEmployeeData: (t, e) => {
      t.employees = e.payload;
    }
  }
});
uu.actions;
const cu = uu.reducer, md = {
  allFarmers: [],
  selectedFarmer: null
}, lu = Se({
  name: "farmerData",
  initialState: md,
  reducers: {
    setFarmerData: (t, e) => {
      t.allFarmers = e.payload;
    },
    setSelectedFarmer: (t, e) => {
      t.selectedFarmer = e.payload;
    }
  }
});
lu.actions;
const fu = lu.reducer, yd = {
  allProducts: [],
  selectedProduct: void 0,
  productCat: [],
  productSubCat: []
}, du = Se({
  name: "productData",
  initialState: yd,
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
    }
  }
});
du.actions;
const pu = du.reducer, gd = {
  allUOMs: [],
  selectedUOM: void 0,
  allUOMConvMat: [],
  selectedUOMConvMat: void 0
}, hu = Se({
  name: "uomData",
  initialState: gd,
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
hu.actions;
const mu = hu.reducer;
var Cn = class {
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
}, Tn = typeof window > "u" || "Deno" in globalThis;
function Ze() {
}
function bd(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function vd(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function wd(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Ro(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ed(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function xo(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: s,
    queryKey: o,
    stale: a
  } = t;
  if (o) {
    if (n) {
      if (e.queryHash !== us(o, e.options))
        return !1;
    } else if (!xr(e.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const c = e.isActive();
    if (r === "active" && !c || r === "inactive" && c)
      return !1;
  }
  return !(typeof a == "boolean" && e.isStale() !== a || i && i !== e.state.fetchStatus || s && !s(e));
}
function Ao(t, e) {
  const { exact: r, status: n, predicate: i, mutationKey: s } = t;
  if (s) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (Rr(e.options.mutationKey) !== Rr(s))
        return !1;
    } else if (!xr(e.options.mutationKey, s))
      return !1;
  }
  return !(n && e.state.status !== n || i && !i(e));
}
function us(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Rr)(t);
}
function Rr(t) {
  return JSON.stringify(
    t,
    (e, r) => Vi(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r
  );
}
function xr(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !xr(t[r], e[r])) : !1;
}
function ji(t, e) {
  if (t === e)
    return t;
  const r = Po(t) && Po(e);
  if (r || Vi(t) && Vi(e)) {
    const n = r ? t : Object.keys(t), i = n.length, s = r ? e : Object.keys(e), o = s.length, a = r ? [] : {};
    let c = 0;
    for (let l = 0; l < o; l++) {
      const f = r ? l : s[l];
      (!r && n.includes(f) || r) && t[f] === void 0 && e[f] === void 0 ? (a[f] = void 0, c++) : (a[f] = ji(t[f], e[f]), a[f] === t[f] && t[f] !== void 0 && c++);
    }
    return i === o && c === i ? t : a;
  }
  return e;
}
function Po(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Vi(t) {
  if (!Do(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!Do(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function Do(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Sd(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Od(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return ji(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return ji(t, e);
  }
  return e;
}
function _d(t, e, r = 0) {
  const n = [...t, e];
  return r && n.length > r ? n.slice(1) : n;
}
function Cd(t, e, r = 0) {
  const n = [e, ...t];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Li = Symbol();
function yu(t, e) {
  return process.env.NODE_ENV !== "production" && t.queryFn === Li && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.queryHash}'`
  ), !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Li ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
var kt, St, rr, Sa, Td = (Sa = class extends Cn {
  constructor() {
    super();
    ie(this, kt);
    ie(this, St);
    ie(this, rr);
    te(this, rr, (e) => {
      if (!Tn && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    D(this, St) || this.setEventListener(D(this, rr));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = D(this, St)) == null || e.call(this), te(this, St, void 0));
  }
  setEventListener(e) {
    var r;
    te(this, rr, e), (r = D(this, St)) == null || r.call(this), te(this, St, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    D(this, kt) !== e && (te(this, kt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof D(this, kt) == "boolean" ? D(this, kt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, kt = new WeakMap(), St = new WeakMap(), rr = new WeakMap(), Sa), gu = new Td(), nr, Ot, ir, Oa, Rd = (Oa = class extends Cn {
  constructor() {
    super();
    ie(this, nr, !0);
    ie(this, Ot);
    ie(this, ir);
    te(this, ir, (e) => {
      if (!Tn && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    D(this, Ot) || this.setEventListener(D(this, ir));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = D(this, Ot)) == null || e.call(this), te(this, Ot, void 0));
  }
  setEventListener(e) {
    var r;
    te(this, ir, e), (r = D(this, Ot)) == null || r.call(this), te(this, Ot, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    D(this, nr) !== e && (te(this, nr, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return D(this, nr);
  }
}, nr = new WeakMap(), Ot = new WeakMap(), ir = new WeakMap(), Oa), hn = new Rd();
function xd(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function bu(t) {
  return (t ?? "online") === "online" ? hn.isOnline() : !0;
}
var vu = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function pi(t) {
  return t instanceof vu;
}
function wu(t) {
  let e = !1, r = 0, n = !1, i, s, o;
  const a = new Promise((A, k) => {
    s = A, o = k;
  }), c = (A) => {
    var k;
    n || (g(new vu(A)), (k = t.abort) == null || k.call(t));
  }, l = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, d = () => gu.isFocused() && (t.networkMode === "always" || hn.isOnline()) && t.canRun(), h = () => bu(t.networkMode) && t.canRun(), w = (A) => {
    var k;
    n || (n = !0, (k = t.onSuccess) == null || k.call(t, A), i == null || i(), s(A));
  }, g = (A) => {
    var k;
    n || (n = !0, (k = t.onError) == null || k.call(t, A), i == null || i(), o(A));
  }, v = () => new Promise((A) => {
    var k;
    i = (S) => {
      (n || d()) && A(S);
    }, (k = t.onPause) == null || k.call(t);
  }).then(() => {
    var A;
    i = void 0, n || (A = t.onContinue) == null || A.call(t);
  }), b = () => {
    if (n)
      return;
    let A;
    const k = r === 0 ? t.initialPromise : void 0;
    try {
      A = k ?? t.fn();
    } catch (S) {
      A = Promise.reject(S);
    }
    Promise.resolve(A).then(w).catch((S) => {
      var j;
      if (n)
        return;
      const P = t.retry ?? (Tn ? 0 : 3), E = t.retryDelay ?? xd, q = typeof E == "function" ? E(r, S) : E, G = P === !0 || typeof P == "number" && r < P || typeof P == "function" && P(r, S);
      if (e || !G) {
        g(S);
        return;
      }
      r++, (j = t.onFail) == null || j.call(t, r, S), Sd(q).then(() => d() ? void 0 : v()).then(() => {
        e ? g(S) : b();
      });
    });
  };
  return {
    promise: a,
    cancel: c,
    continue: () => (i == null || i(), a),
    cancelRetry: l,
    continueRetry: f,
    canStart: h,
    start: () => (h() ? b() : v().then(b), a)
  };
}
function Ad() {
  let t = [], e = 0, r = (a) => {
    a();
  }, n = (a) => {
    a();
  }, i = (a) => setTimeout(a, 0);
  const s = (a) => {
    e ? t.push(a) : i(() => {
      r(a);
    });
  }, o = () => {
    const a = t;
    t = [], a.length && i(() => {
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
      e++;
      try {
        c = a();
      } finally {
        e--, e || o();
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
var qe = Ad(), Nt, _a, Eu = (_a = class {
  constructor() {
    ie(this, Nt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), vd(this.gcTime) && te(this, Nt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (Tn ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    D(this, Nt) && (clearTimeout(D(this, Nt)), te(this, Nt, void 0));
  }
}, Nt = new WeakMap(), _a), sr, or, Ye, De, Dr, $t, et, ft, Ca, Pd = (Ca = class extends Eu {
  constructor(e) {
    super();
    ie(this, et);
    ie(this, sr);
    ie(this, or);
    ie(this, Ye);
    ie(this, De);
    ie(this, Dr);
    ie(this, $t);
    te(this, $t, !1), te(this, Dr, e.defaultOptions), this.setOptions(e.options), this.observers = [], te(this, Ye, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, te(this, sr, kd(this.options)), this.state = e.state ?? D(this, sr), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var e;
    return (e = D(this, De)) == null ? void 0 : e.promise;
  }
  setOptions(e) {
    this.options = { ...D(this, Dr), ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && D(this, Ye).remove(this);
  }
  setData(e, r) {
    const n = Od(this.state.data, e, this.options);
    return Pe(this, et, ft).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(e, r) {
    Pe(this, et, ft).call(this, { type: "setState", state: e, setStateOptions: r });
  }
  cancel(e) {
    var n, i;
    const r = (n = D(this, De)) == null ? void 0 : n.promise;
    return (i = D(this, De)) == null || i.cancel(e), r ? r.then(Ze).catch(Ze) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(D(this, sr));
  }
  isActive() {
    return this.observers.some(
      (e) => Ed(e.options.enabled, this) !== !1
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
    return this.state.isInvalidated || this.state.data === void 0 || !wd(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var r;
    const e = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    e == null || e.refetch({ cancelRefetch: !1 }), (r = D(this, De)) == null || r.continue();
  }
  onOnline() {
    var r;
    const e = this.observers.find((n) => n.shouldFetchOnReconnect());
    e == null || e.refetch({ cancelRefetch: !1 }), (r = D(this, De)) == null || r.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), D(this, Ye).notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((r) => r !== e), this.observers.length || (D(this, De) && (D(this, $t) ? D(this, De).cancel({ revert: !0 }) : D(this, De).cancelRetry()), this.scheduleGc()), D(this, Ye).notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || Pe(this, et, ft).call(this, { type: "invalidate" });
  }
  fetch(e, r) {
    var c, l, f;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (D(this, De))
        return D(this, De).continueRetry(), D(this, De).promise;
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const d = this.observers.find((h) => h.options.queryFn);
      d && this.setOptions(d.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), i = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (te(this, $t, !0), n.signal)
      });
    }, s = () => {
      const d = yu(this.options, r), h = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return i(h), te(this, $t, !1), this.options.persister ? this.options.persister(
        d,
        h,
        this
      ) : d(h);
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
    ), te(this, or, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((l = o.fetchOptions) == null ? void 0 : l.meta)) && Pe(this, et, ft).call(this, { type: "fetch", meta: (f = o.fetchOptions) == null ? void 0 : f.meta });
    const a = (d) => {
      var h, w, g, v;
      pi(d) && d.silent || Pe(this, et, ft).call(this, {
        type: "error",
        error: d
      }), pi(d) || ((w = (h = D(this, Ye).config).onError) == null || w.call(
        h,
        d,
        this
      ), (v = (g = D(this, Ye).config).onSettled) == null || v.call(
        g,
        this.state.data,
        d,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return te(this, De, wu({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: o.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (d) => {
        var h, w, g, v;
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
        (w = (h = D(this, Ye).config).onSuccess) == null || w.call(h, d, this), (v = (g = D(this, Ye).config).onSettled) == null || v.call(
          g,
          d,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: a,
      onFail: (d, h) => {
        Pe(this, et, ft).call(this, { type: "failed", failureCount: d, error: h });
      },
      onPause: () => {
        Pe(this, et, ft).call(this, { type: "pause" });
      },
      onContinue: () => {
        Pe(this, et, ft).call(this, { type: "continue" });
      },
      retry: o.options.retry,
      retryDelay: o.options.retryDelay,
      networkMode: o.options.networkMode,
      canRun: () => !0
    })), D(this, De).start();
  }
}, sr = new WeakMap(), or = new WeakMap(), Ye = new WeakMap(), De = new WeakMap(), Dr = new WeakMap(), $t = new WeakMap(), et = new WeakSet(), ft = function(e) {
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
          ...Dd(n.data, this.options),
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
        return pi(i) && i.revert && D(this, or) ? { ...D(this, or), fetchStatus: "idle" } : {
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
  this.state = r(this.state), qe.batch(() => {
    this.observers.forEach((n) => {
      n.onQueryUpdate();
    }), D(this, Ye).notify({ query: this, type: "updated", action: e });
  });
}, Ca);
function Dd(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: bu(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function kd(t) {
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
var st, Ta, Nd = (Ta = class extends Cn {
  constructor(e = {}) {
    super();
    ie(this, st);
    this.config = e, te(this, st, /* @__PURE__ */ new Map());
  }
  build(e, r, n) {
    const i = r.queryKey, s = r.queryHash ?? us(i, r);
    let o = this.get(s);
    return o || (o = new Pd({
      cache: this,
      queryKey: i,
      queryHash: s,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(i)
    }), this.add(o)), o;
  }
  add(e) {
    D(this, st).has(e.queryHash) || (D(this, st).set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const r = D(this, st).get(e.queryHash);
    r && (e.destroy(), r === e && D(this, st).delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    qe.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return D(this, st).get(e);
  }
  getAll() {
    return [...D(this, st).values()];
  }
  find(e) {
    const r = { exact: !0, ...e };
    return this.getAll().find(
      (n) => xo(r, n)
    );
  }
  findAll(e = {}) {
    const r = this.getAll();
    return Object.keys(e).length > 0 ? r.filter((n) => xo(e, n)) : r;
  }
  notify(e) {
    qe.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  onFocus() {
    qe.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    qe.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
}, st = new WeakMap(), Ta), ot, $e, qt, at, vt, Ra, $d = (Ra = class extends Eu {
  constructor(e) {
    super();
    ie(this, at);
    ie(this, ot);
    ie(this, $e);
    ie(this, qt);
    this.mutationId = e.mutationId, te(this, $e, e.mutationCache), te(this, ot, []), this.state = e.state || qd(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = e, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    D(this, ot).includes(e) || (D(this, ot).push(e), this.clearGcTimeout(), D(this, $e).notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    te(this, ot, D(this, ot).filter((r) => r !== e)), this.scheduleGc(), D(this, $e).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    D(this, ot).length || (this.state.status === "pending" ? this.scheduleGc() : D(this, $e).remove(this));
  }
  continue() {
    var e;
    return ((e = D(this, qt)) == null ? void 0 : e.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    var i, s, o, a, c, l, f, d, h, w, g, v, b, A, k, S, P, E, q, G;
    te(this, qt, wu({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (j, p) => {
        Pe(this, at, vt).call(this, { type: "failed", failureCount: j, error: p });
      },
      onPause: () => {
        Pe(this, at, vt).call(this, { type: "pause" });
      },
      onContinue: () => {
        Pe(this, at, vt).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => D(this, $e).canRun(this)
    }));
    const r = this.state.status === "pending", n = !D(this, qt).canStart();
    try {
      if (!r) {
        Pe(this, at, vt).call(this, { type: "pending", variables: e, isPaused: n }), await ((s = (i = D(this, $e).config).onMutate) == null ? void 0 : s.call(
          i,
          e,
          this
        ));
        const p = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, e));
        p !== this.state.context && Pe(this, at, vt).call(this, {
          type: "pending",
          context: p,
          variables: e,
          isPaused: n
        });
      }
      const j = await D(this, qt).start();
      return await ((l = (c = D(this, $e).config).onSuccess) == null ? void 0 : l.call(
        c,
        j,
        e,
        this.state.context,
        this
      )), await ((d = (f = this.options).onSuccess) == null ? void 0 : d.call(f, j, e, this.state.context)), await ((w = (h = D(this, $e).config).onSettled) == null ? void 0 : w.call(
        h,
        j,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((v = (g = this.options).onSettled) == null ? void 0 : v.call(g, j, null, e, this.state.context)), Pe(this, at, vt).call(this, { type: "success", data: j }), j;
    } catch (j) {
      try {
        throw await ((A = (b = D(this, $e).config).onError) == null ? void 0 : A.call(
          b,
          j,
          e,
          this.state.context,
          this
        )), await ((S = (k = this.options).onError) == null ? void 0 : S.call(
          k,
          j,
          e,
          this.state.context
        )), await ((E = (P = D(this, $e).config).onSettled) == null ? void 0 : E.call(
          P,
          void 0,
          j,
          this.state.variables,
          this.state.context,
          this
        )), await ((G = (q = this.options).onSettled) == null ? void 0 : G.call(
          q,
          void 0,
          j,
          e,
          this.state.context
        )), j;
      } finally {
        Pe(this, at, vt).call(this, { type: "error", error: j });
      }
    } finally {
      D(this, $e).runNext(this);
    }
  }
}, ot = new WeakMap(), $e = new WeakMap(), qt = new WeakMap(), at = new WeakSet(), vt = function(e) {
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
  this.state = r(this.state), qe.batch(() => {
    D(this, ot).forEach((n) => {
      n.onMutationUpdate(e);
    }), D(this, $e).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
}, Ra);
function qd() {
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
var Ue, kr, xa, Fd = (xa = class extends Cn {
  constructor(e = {}) {
    super();
    ie(this, Ue);
    ie(this, kr);
    this.config = e, te(this, Ue, /* @__PURE__ */ new Map()), te(this, kr, Date.now());
  }
  build(e, r, n) {
    const i = new $d({
      mutationCache: this,
      mutationId: ++Jr(this, kr)._,
      options: e.defaultMutationOptions(r),
      state: n
    });
    return this.add(i), i;
  }
  add(e) {
    const r = en(e), n = D(this, Ue).get(r) ?? [];
    n.push(e), D(this, Ue).set(r, n), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    var n;
    const r = en(e);
    if (D(this, Ue).has(r)) {
      const i = (n = D(this, Ue).get(r)) == null ? void 0 : n.filter((s) => s !== e);
      i && (i.length === 0 ? D(this, Ue).delete(r) : D(this, Ue).set(r, i));
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    var n;
    const r = (n = D(this, Ue).get(en(e))) == null ? void 0 : n.find((i) => i.state.status === "pending");
    return !r || r === e;
  }
  runNext(e) {
    var n;
    const r = (n = D(this, Ue).get(en(e))) == null ? void 0 : n.find((i) => i !== e && i.state.isPaused);
    return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
  }
  clear() {
    qe.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return [...D(this, Ue).values()].flat();
  }
  find(e) {
    const r = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Ao(r, n)
    );
  }
  findAll(e = {}) {
    return this.getAll().filter((r) => Ao(e, r));
  }
  notify(e) {
    qe.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((r) => r.state.isPaused);
    return qe.batch(
      () => Promise.all(
        e.map((r) => r.continue().catch(Ze))
      )
    );
  }
}, Ue = new WeakMap(), kr = new WeakMap(), xa);
function en(t) {
  var e;
  return ((e = t.options.scope) == null ? void 0 : e.id) ?? String(t.mutationId);
}
function ko(t) {
  return {
    onFetch: (e, r) => {
      var f, d, h, w, g;
      const n = e.options, i = (h = (d = (f = e.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : h.direction, s = ((w = e.state.data) == null ? void 0 : w.pages) || [], o = ((g = e.state.data) == null ? void 0 : g.pageParams) || [];
      let a = { pages: [], pageParams: [] }, c = 0;
      const l = async () => {
        let v = !1;
        const b = (S) => {
          Object.defineProperty(S, "signal", {
            enumerable: !0,
            get: () => (e.signal.aborted ? v = !0 : e.signal.addEventListener("abort", () => {
              v = !0;
            }), e.signal)
          });
        }, A = yu(e.options, e.fetchOptions), k = async (S, P, E) => {
          if (v)
            return Promise.reject();
          if (P == null && S.pages.length)
            return Promise.resolve(S);
          const q = {
            queryKey: e.queryKey,
            pageParam: P,
            direction: E ? "backward" : "forward",
            meta: e.options.meta
          };
          b(q);
          const G = await A(
            q
          ), { maxPages: j } = e.options, p = E ? Cd : _d;
          return {
            pages: p(S.pages, G, j),
            pageParams: p(S.pageParams, P, j)
          };
        };
        if (i && s.length) {
          const S = i === "backward", P = S ? Id : No, E = {
            pages: s,
            pageParams: o
          }, q = P(n, E);
          a = await k(E, q, S);
        } else {
          const S = t ?? s.length;
          do {
            const P = c === 0 ? o[0] ?? n.initialPageParam : No(n, a);
            if (c > 0 && P == null)
              break;
            a = await k(a, P), c++;
          } while (c < S);
        }
        return a;
      };
      e.options.persister ? e.fetchFn = () => {
        var v, b;
        return (b = (v = e.options).persister) == null ? void 0 : b.call(
          v,
          l,
          {
            queryKey: e.queryKey,
            meta: e.options.meta,
            signal: e.signal
          },
          r
        );
      } : e.fetchFn = l;
    }
  };
}
function No(t, { pages: e, pageParams: r }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(
    e[n],
    e,
    r[n],
    r
  ) : void 0;
}
function Id(t, { pages: e, pageParams: r }) {
  var n;
  return e.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, e[0], e, r[0], r) : void 0;
}
var Ee, _t, Ct, ar, ur, Tt, cr, lr, Aa, Md = (Aa = class {
  constructor(t = {}) {
    ie(this, Ee);
    ie(this, _t);
    ie(this, Ct);
    ie(this, ar);
    ie(this, ur);
    ie(this, Tt);
    ie(this, cr);
    ie(this, lr);
    te(this, Ee, t.queryCache || new Nd()), te(this, _t, t.mutationCache || new Fd()), te(this, Ct, t.defaultOptions || {}), te(this, ar, /* @__PURE__ */ new Map()), te(this, ur, /* @__PURE__ */ new Map()), te(this, Tt, 0);
  }
  mount() {
    Jr(this, Tt)._++, D(this, Tt) === 1 && (te(this, cr, gu.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), D(this, Ee).onFocus());
    })), te(this, lr, hn.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), D(this, Ee).onOnline());
    })));
  }
  unmount() {
    var t, e;
    Jr(this, Tt)._--, D(this, Tt) === 0 && ((t = D(this, cr)) == null || t.call(this), te(this, cr, void 0), (e = D(this, lr)) == null || e.call(this), te(this, lr, void 0));
  }
  isFetching(t) {
    return D(this, Ee).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return D(this, _t).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = D(this, Ee).get(e.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t) {
    const e = this.getQueryData(t.queryKey);
    if (e === void 0)
      return this.fetchQuery(t);
    {
      const r = this.defaultQueryOptions(t), n = D(this, Ee).build(this, r);
      return t.revalidateIfStale && n.isStaleByTime(Ro(r.staleTime, n)) && this.prefetchQuery(r), Promise.resolve(e);
    }
  }
  getQueriesData(t) {
    return D(this, Ee).findAll(t).map(({ queryKey: e, state: r }) => {
      const n = r.data;
      return [e, n];
    });
  }
  setQueryData(t, e, r) {
    const n = this.defaultQueryOptions({ queryKey: t }), i = D(this, Ee).get(
      n.queryHash
    ), s = i == null ? void 0 : i.state.data, o = bd(e, s);
    if (o !== void 0)
      return D(this, Ee).build(this, n).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(t, e, r) {
    return qe.batch(
      () => D(this, Ee).findAll(t).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, e, r)
      ])
    );
  }
  getQueryState(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = D(this, Ee).get(e.queryHash)) == null ? void 0 : r.state;
  }
  removeQueries(t) {
    const e = D(this, Ee);
    qe.batch(() => {
      e.findAll(t).forEach((r) => {
        e.remove(r);
      });
    });
  }
  resetQueries(t, e) {
    const r = D(this, Ee), n = {
      type: "active",
      ...t
    };
    return qe.batch(() => (r.findAll(t).forEach((i) => {
      i.reset();
    }), this.refetchQueries(n, e)));
  }
  cancelQueries(t = {}, e = {}) {
    const r = { revert: !0, ...e }, n = qe.batch(
      () => D(this, Ee).findAll(t).map((i) => i.cancel(r))
    );
    return Promise.all(n).then(Ze).catch(Ze);
  }
  invalidateQueries(t = {}, e = {}) {
    return qe.batch(() => {
      if (D(this, Ee).findAll(t).forEach((n) => {
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
    }, n = qe.batch(
      () => D(this, Ee).findAll(t).filter((i) => !i.isDisabled()).map((i) => {
        let s = i.fetch(void 0, r);
        return r.throwOnError || (s = s.catch(Ze)), i.state.fetchStatus === "paused" ? Promise.resolve() : s;
      })
    );
    return Promise.all(n).then(Ze);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const r = D(this, Ee).build(this, e);
    return r.isStaleByTime(
      Ro(e.staleTime, r)
    ) ? r.fetch(e) : Promise.resolve(r.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(Ze).catch(Ze);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = ko(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Ze).catch(Ze);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = ko(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return hn.isOnline() ? D(this, _t).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return D(this, Ee);
  }
  getMutationCache() {
    return D(this, _t);
  }
  getDefaultOptions() {
    return D(this, Ct);
  }
  setDefaultOptions(t) {
    te(this, Ct, t);
  }
  setQueryDefaults(t, e) {
    D(this, ar).set(Rr(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...D(this, ar).values()];
    let r = {};
    return e.forEach((n) => {
      xr(t, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(t, e) {
    D(this, ur).set(Rr(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...D(this, ur).values()];
    let r = {};
    return e.forEach((n) => {
      xr(t, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...D(this, Ct).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = us(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.enabled !== !0 && e.queryFn === Li && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...D(this, Ct).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    D(this, Ee).clear(), D(this, _t).clear();
  }
}, Ee = new WeakMap(), _t = new WeakMap(), Ct = new WeakMap(), ar = new WeakMap(), ur = new WeakMap(), Tt = new WeakMap(), cr = new WeakMap(), lr = new WeakMap(), Aa);
function Su(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: jd } = Object.prototype, { getPrototypeOf: cs } = Object, Rn = /* @__PURE__ */ ((t) => (e) => {
  const r = jd.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), rt = (t) => (t = t.toLowerCase(), (e) => Rn(e) === t), xn = (t) => (e) => typeof e === t, { isArray: dr } = Array, Ar = xn("undefined");
function Vd(t) {
  return t !== null && !Ar(t) && t.constructor !== null && !Ar(t.constructor) && ze(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ou = rt("ArrayBuffer");
function Ld(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ou(t.buffer), e;
}
const Ud = xn("string"), ze = xn("function"), _u = xn("number"), An = (t) => t !== null && typeof t == "object", Bd = (t) => t === !0 || t === !1, on = (t) => {
  if (Rn(t) !== "object")
    return !1;
  const e = cs(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, zd = rt("Date"), Wd = rt("File"), Hd = rt("Blob"), Kd = rt("FileList"), Gd = (t) => An(t) && ze(t.pipe), Yd = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ze(t.append) && ((e = Rn(t)) === "formdata" || // detect form-data instance
  e === "object" && ze(t.toString) && t.toString() === "[object FormData]"));
}, Qd = rt("URLSearchParams"), [Jd, Xd, Zd, ep] = ["ReadableStream", "Request", "Response", "Headers"].map(rt), tp = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $r(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), dr(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const s = r ? Object.getOwnPropertyNames(t) : Object.keys(t), o = s.length;
    let a;
    for (n = 0; n < o; n++)
      a = s[n], e.call(null, t[a], a, t);
  }
}
function Cu(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const Dt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Tu = (t) => !Ar(t) && t !== Dt;
function Ui() {
  const { caseless: t } = Tu(this) && this || {}, e = {}, r = (n, i) => {
    const s = t && Cu(e, i) || i;
    on(e[s]) && on(n) ? e[s] = Ui(e[s], n) : on(n) ? e[s] = Ui({}, n) : dr(n) ? e[s] = n.slice() : e[s] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && $r(arguments[n], r);
  return e;
}
const rp = (t, e, r, { allOwnKeys: n } = {}) => ($r(e, (i, s) => {
  r && ze(i) ? t[s] = Su(i, r) : t[s] = i;
}, { allOwnKeys: n }), t), np = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), ip = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, sp = (t, e, r, n) => {
  let i, s, o;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
      o = i[s], (!n || n(o, t, e)) && !a[o] && (e[o] = t[o], a[o] = !0);
    t = r !== !1 && cs(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, op = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, ap = (t) => {
  if (!t) return null;
  if (dr(t)) return t;
  let e = t.length;
  if (!_u(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, up = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && cs(Uint8Array)), cp = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const s = i.value;
    e.call(t, s[0], s[1]);
  }
}, lp = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, fp = rt("HTMLFormElement"), dp = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), $o = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), pp = rt("RegExp"), Ru = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  $r(r, (i, s) => {
    let o;
    (o = e(i, s, t)) !== !1 && (n[s] = o || i);
  }), Object.defineProperties(t, n);
}, hp = (t) => {
  Ru(t, (e, r) => {
    if (ze(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (ze(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, mp = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((s) => {
      r[s] = !0;
    });
  };
  return dr(t) ? n(t) : n(String(t).split(e)), r;
}, yp = () => {
}, gp = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, hi = "abcdefghijklmnopqrstuvwxyz", qo = "0123456789", xu = {
  DIGIT: qo,
  ALPHA: hi,
  ALPHA_DIGIT: hi + hi.toUpperCase() + qo
}, bp = (t = 16, e = xu.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function vp(t) {
  return !!(t && ze(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const wp = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (An(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const s = dr(n) ? [] : {};
        return $r(n, (o, a) => {
          const c = r(o, i + 1);
          !Ar(c) && (s[a] = c);
        }), e[i] = void 0, s;
      }
    }
    return n;
  };
  return r(t, 0);
}, Ep = rt("AsyncFunction"), Sp = (t) => t && (An(t) || ze(t)) && ze(t.then) && ze(t.catch), Au = ((t, e) => t ? setImmediate : e ? ((r, n) => (Dt.addEventListener("message", ({ source: i, data: s }) => {
  i === Dt && s === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), Dt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ze(Dt.postMessage)
), Op = typeof queueMicrotask < "u" ? queueMicrotask.bind(Dt) : typeof process < "u" && process.nextTick || Au, C = {
  isArray: dr,
  isArrayBuffer: Ou,
  isBuffer: Vd,
  isFormData: Yd,
  isArrayBufferView: Ld,
  isString: Ud,
  isNumber: _u,
  isBoolean: Bd,
  isObject: An,
  isPlainObject: on,
  isReadableStream: Jd,
  isRequest: Xd,
  isResponse: Zd,
  isHeaders: ep,
  isUndefined: Ar,
  isDate: zd,
  isFile: Wd,
  isBlob: Hd,
  isRegExp: pp,
  isFunction: ze,
  isStream: Gd,
  isURLSearchParams: Qd,
  isTypedArray: up,
  isFileList: Kd,
  forEach: $r,
  merge: Ui,
  extend: rp,
  trim: tp,
  stripBOM: np,
  inherits: ip,
  toFlatObject: sp,
  kindOf: Rn,
  kindOfTest: rt,
  endsWith: op,
  toArray: ap,
  forEachEntry: cp,
  matchAll: lp,
  isHTMLForm: fp,
  hasOwnProperty: $o,
  hasOwnProp: $o,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ru,
  freezeMethods: hp,
  toObjectSet: mp,
  toCamelCase: dp,
  noop: yp,
  toFiniteNumber: gp,
  findKey: Cu,
  global: Dt,
  isContextDefined: Tu,
  ALPHABET: xu,
  generateString: bp,
  isSpecCompliantForm: vp,
  toJSONObject: wp,
  isAsyncFn: Ep,
  isThenable: Sp,
  setImmediate: Au,
  asap: Op
};
function ee(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
C.inherits(ee, Error, {
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
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Pu = ee.prototype, Du = {};
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
].forEach((t) => {
  Du[t] = { value: t };
});
Object.defineProperties(ee, Du);
Object.defineProperty(Pu, "isAxiosError", { value: !0 });
ee.from = (t, e, r, n, i, s) => {
  const o = Object.create(Pu);
  return C.toFlatObject(t, o, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), ee.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, s && Object.assign(o, s), o;
};
const _p = null;
function Bi(t) {
  return C.isPlainObject(t) || C.isArray(t);
}
function ku(t) {
  return C.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Fo(t, e, r) {
  return t ? t.concat(e).map(function(i, s) {
    return i = ku(i), !r && s ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function Cp(t) {
  return C.isArray(t) && !t.some(Bi);
}
const Tp = C.toFlatObject(C, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Pn(t, e, r) {
  if (!C.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = C.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, b) {
    return !C.isUndefined(b[v]);
  });
  const n = r.metaTokens, i = r.visitor || f, s = r.dots, o = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(e);
  if (!C.isFunction(i))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (C.isDate(g))
      return g.toISOString();
    if (!c && C.isBlob(g))
      throw new ee("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(g) || C.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, v, b) {
    let A = g;
    if (g && !b && typeof g == "object") {
      if (C.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (C.isArray(g) && Cp(g) || (C.isFileList(g) || C.endsWith(v, "[]")) && (A = C.toArray(g)))
        return v = ku(v), A.forEach(function(S, P) {
          !(C.isUndefined(S) || S === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Fo([v], P, s) : o === null ? v : v + "[]",
            l(S)
          );
        }), !1;
    }
    return Bi(g) ? !0 : (e.append(Fo(b, v, s), l(g)), !1);
  }
  const d = [], h = Object.assign(Tp, {
    defaultVisitor: f,
    convertValue: l,
    isVisitable: Bi
  });
  function w(g, v) {
    if (!C.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(g), C.forEach(g, function(A, k) {
        (!(C.isUndefined(A) || A === null) && i.call(
          e,
          A,
          C.isString(k) ? k.trim() : k,
          v,
          h
        )) === !0 && w(A, v ? v.concat(k) : [k]);
      }), d.pop();
    }
  }
  if (!C.isObject(t))
    throw new TypeError("data must be an object");
  return w(t), e;
}
function Io(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function ls(t, e) {
  this._pairs = [], t && Pn(t, this, e);
}
const Nu = ls.prototype;
Nu.append = function(e, r) {
  this._pairs.push([e, r]);
};
Nu.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Io);
  } : Io;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Rp(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $u(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Rp, i = r && r.serialize;
  let s;
  if (i ? s = i(e, r) : s = C.isURLSearchParams(e) ? e.toString() : new ls(e, r).toString(n), s) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Mo {
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
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
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
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    C.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const qu = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xp = typeof URLSearchParams < "u" ? URLSearchParams : ls, Ap = typeof FormData < "u" ? FormData : null, Pp = typeof Blob < "u" ? Blob : null, Dp = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xp,
    FormData: Ap,
    Blob: Pp
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, fs = typeof window < "u" && typeof document < "u", zi = typeof navigator == "object" && navigator || void 0, kp = fs && (!zi || ["ReactNative", "NativeScript", "NS"].indexOf(zi.product) < 0), Np = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", $p = fs && window.location.href || "http://localhost", qp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: fs,
  hasStandardBrowserEnv: kp,
  hasStandardBrowserWebWorkerEnv: Np,
  navigator: zi,
  origin: $p
}, Symbol.toStringTag, { value: "Module" })), je = {
  ...qp,
  ...Dp
};
function Fp(t, e) {
  return Pn(t, new je.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, s) {
      return je.isNode && C.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Ip(t) {
  return C.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Mp(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++)
    s = r[n], e[s] = t[s];
  return e;
}
function Fu(t) {
  function e(r, n, i, s) {
    let o = r[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), c = s >= r.length;
    return o = !o && C.isArray(i) ? i.length : o, c ? (C.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !a) : ((!i[o] || !C.isObject(i[o])) && (i[o] = []), e(r, n, i[o], s) && C.isArray(i[o]) && (i[o] = Mp(i[o])), !a);
  }
  if (C.isFormData(t) && C.isFunction(t.entries)) {
    const r = {};
    return C.forEachEntry(t, (n, i) => {
      e(Ip(n), i, r, 0);
    }), r;
  }
  return null;
}
function jp(t, e, r) {
  if (C.isString(t))
    try {
      return (e || JSON.parse)(t), C.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(t);
}
const qr = {
  transitional: qu,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, s = C.isObject(e);
    if (s && C.isHTMLForm(e) && (e = new FormData(e)), C.isFormData(e))
      return i ? JSON.stringify(Fu(e)) : e;
    if (C.isArrayBuffer(e) || C.isBuffer(e) || C.isStream(e) || C.isFile(e) || C.isBlob(e) || C.isReadableStream(e))
      return e;
    if (C.isArrayBufferView(e))
      return e.buffer;
    if (C.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Fp(e, this.formSerializer).toString();
      if ((a = C.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Pn(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || i ? (r.setContentType("application/json", !1), jp(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || qr.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (C.isResponse(e) || C.isReadableStream(e))
      return e;
    if (e && C.isString(e) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? ee.from(a, ee.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
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
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  qr.headers[t] = {};
});
const Vp = C.toObjectSet([
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
]), Lp = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || e[r] && Vp[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, jo = Symbol("internals");
function gr(t) {
  return t && String(t).trim().toLowerCase();
}
function an(t) {
  return t === !1 || t == null ? t : C.isArray(t) ? t.map(an) : String(t);
}
function Up(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Bp = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function mi(t, e, r, n, i) {
  if (C.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!C.isString(e)) {
    if (C.isString(n))
      return e.indexOf(n) !== -1;
    if (C.isRegExp(n))
      return n.test(e);
  }
}
function zp(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Wp(t, e) {
  const r = C.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(i, s, o) {
        return this[n].call(this, e, i, s, o);
      },
      configurable: !0
    });
  });
}
class Ve {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function s(a, c, l) {
      const f = gr(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = C.findKey(i, f);
      (!d || i[d] === void 0 || l === !0 || l === void 0 && i[d] !== !1) && (i[d || c] = an(a));
    }
    const o = (a, c) => C.forEach(a, (l, f) => s(l, f, c));
    if (C.isPlainObject(e) || e instanceof this.constructor)
      o(e, r);
    else if (C.isString(e) && (e = e.trim()) && !Bp(e))
      o(Lp(e), r);
    else if (C.isHeaders(e))
      for (const [a, c] of e.entries())
        s(c, a, n);
    else
      e != null && s(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = gr(e), e) {
      const n = C.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Up(i);
        if (C.isFunction(r))
          return r.call(this, i, n);
        if (C.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = gr(e), e) {
      const n = C.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || mi(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function s(o) {
      if (o = gr(o), o) {
        const a = C.findKey(n, o);
        a && (!r || mi(n, n[a], a, r)) && (delete n[a], i = !0);
      }
    }
    return C.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const s = r[n];
      (!e || mi(this, this[s], s, e, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, n = {};
    return C.forEach(this, (i, s) => {
      const o = C.findKey(n, s);
      if (o) {
        r[o] = an(i), delete r[s];
        return;
      }
      const a = e ? zp(s) : String(s).trim();
      a !== s && delete r[s], r[a] = an(i), n[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && C.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(e) {
    const n = (this[jo] = this[jo] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const a = gr(o);
      n[a] || (Wp(i, o), n[a] = !0);
    }
    return C.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
Ve.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(Ve.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
C.freezeMethods(Ve);
function yi(t, e) {
  const r = this || qr, n = e || r, i = Ve.from(n.headers);
  let s = n.data;
  return C.forEach(t, function(a) {
    s = a.call(r, s, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), s;
}
function Iu(t) {
  return !!(t && t.__CANCEL__);
}
function pr(t, e, r) {
  ee.call(this, t ?? "canceled", ee.ERR_CANCELED, e, r), this.name = "CanceledError";
}
C.inherits(pr, ee, {
  __CANCEL__: !0
});
function Mu(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new ee(
    "Request failed with status code " + r.status,
    [ee.ERR_BAD_REQUEST, ee.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Hp(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Kp(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, s = 0, o;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const l = Date.now(), f = n[s];
    o || (o = l), r[i] = c, n[i] = l;
    let d = s, h = 0;
    for (; d !== i; )
      h += r[d++], d = d % t;
    if (i = (i + 1) % t, i === s && (s = (s + 1) % t), l - o < e)
      return;
    const w = f && l - f;
    return w ? Math.round(h * 1e3 / w) : void 0;
  };
}
function Gp(t, e) {
  let r = 0, n = 1e3 / e, i, s;
  const o = (l, f = Date.now()) => {
    r = f, i = null, s && (clearTimeout(s), s = null), t.apply(null, l);
  };
  return [(...l) => {
    const f = Date.now(), d = f - r;
    d >= n ? o(l, f) : (i = l, s || (s = setTimeout(() => {
      s = null, o(i);
    }, n - d)));
  }, () => i && o(i)];
}
const mn = (t, e, r = 3) => {
  let n = 0;
  const i = Kp(50, 250);
  return Gp((s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, c = o - n, l = i(c), f = o <= a;
    n = o;
    const d = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && f ? (a - o) / l : void 0,
      event: s,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, r);
}, Vo = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Lo = (t) => (...e) => C.asap(() => t(...e)), Yp = je.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = je.navigator && /(msie|trident)/i.test(je.navigator.userAgent), r = document.createElement("a");
    let n;
    function i(s) {
      let o = s;
      return e && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
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
      const a = C.isString(o) ? i(o) : o;
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
), Qp = je.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, i, s) {
      const o = [t + "=" + encodeURIComponent(e)];
      C.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), C.isString(n) && o.push("path=" + n), C.isString(i) && o.push("domain=" + i), s === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
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
function Jp(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Xp(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ju(t, e) {
  return t && !Jp(e) ? Xp(t, e) : e;
}
const Uo = (t) => t instanceof Ve ? { ...t } : t;
function Lt(t, e) {
  e = e || {};
  const r = {};
  function n(l, f, d) {
    return C.isPlainObject(l) && C.isPlainObject(f) ? C.merge.call({ caseless: d }, l, f) : C.isPlainObject(f) ? C.merge({}, f) : C.isArray(f) ? f.slice() : f;
  }
  function i(l, f, d) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(l))
        return n(void 0, l, d);
    } else return n(l, f, d);
  }
  function s(l, f) {
    if (!C.isUndefined(f))
      return n(void 0, f);
  }
  function o(l, f) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, f);
  }
  function a(l, f, d) {
    if (d in e)
      return n(l, f);
    if (d in t)
      return n(void 0, l);
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
    headers: (l, f) => i(Uo(l), Uo(f), !0)
  };
  return C.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const d = c[f] || i, h = d(t[f], e[f], f);
    C.isUndefined(h) && d !== a || (r[f] = h);
  }), r;
}
const Vu = (t) => {
  const e = Lt({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: s, headers: o, auth: a } = e;
  e.headers = o = Ve.from(o), e.url = $u(ju(e.baseURL, e.url), t.params, t.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (C.isFormData(r)) {
    if (je.hasStandardBrowserEnv || je.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((c = o.getContentType()) !== !1) {
      const [l, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([l || "multipart/form-data", ...f].join("; "));
    }
  }
  if (je.hasStandardBrowserEnv && (n && C.isFunction(n) && (n = n(e)), n || n !== !1 && Yp(e.url))) {
    const l = i && s && Qp.read(s);
    l && o.set(i, l);
  }
  return e;
}, Zp = typeof XMLHttpRequest < "u", eh = Zp && function(t) {
  return new Promise(function(r, n) {
    const i = Vu(t);
    let s = i.data;
    const o = Ve.from(i.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = i, f, d, h, w, g;
    function v() {
      w && w(), g && g(), i.cancelToken && i.cancelToken.unsubscribe(f), i.signal && i.signal.removeEventListener("abort", f);
    }
    let b = new XMLHttpRequest();
    b.open(i.method.toUpperCase(), i.url, !0), b.timeout = i.timeout;
    function A() {
      if (!b)
        return;
      const S = Ve.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), E = {
        data: !a || a === "text" || a === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: S,
        config: t,
        request: b
      };
      Mu(function(G) {
        r(G), v();
      }, function(G) {
        n(G), v();
      }, E), b = null;
    }
    "onloadend" in b ? b.onloadend = A : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, b.onabort = function() {
      b && (n(new ee("Request aborted", ee.ECONNABORTED, t, b)), b = null);
    }, b.onerror = function() {
      n(new ee("Network Error", ee.ERR_NETWORK, t, b)), b = null;
    }, b.ontimeout = function() {
      let P = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const E = i.transitional || qu;
      i.timeoutErrorMessage && (P = i.timeoutErrorMessage), n(new ee(
        P,
        E.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED,
        t,
        b
      )), b = null;
    }, s === void 0 && o.setContentType(null), "setRequestHeader" in b && C.forEach(o.toJSON(), function(P, E) {
      b.setRequestHeader(E, P);
    }), C.isUndefined(i.withCredentials) || (b.withCredentials = !!i.withCredentials), a && a !== "json" && (b.responseType = i.responseType), l && ([h, g] = mn(l, !0), b.addEventListener("progress", h)), c && b.upload && ([d, w] = mn(c), b.upload.addEventListener("progress", d), b.upload.addEventListener("loadend", w)), (i.cancelToken || i.signal) && (f = (S) => {
      b && (n(!S || S.type ? new pr(null, t, b) : S), b.abort(), b = null);
    }, i.cancelToken && i.cancelToken.subscribe(f), i.signal && (i.signal.aborted ? f() : i.signal.addEventListener("abort", f)));
    const k = Hp(i.url);
    if (k && je.protocols.indexOf(k) === -1) {
      n(new ee("Unsupported protocol " + k + ":", ee.ERR_BAD_REQUEST, t));
      return;
    }
    b.send(s || null);
  });
}, th = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), i;
    const s = function(l) {
      if (!i) {
        i = !0, a();
        const f = l instanceof Error ? l : this.reason;
        n.abort(f instanceof ee ? f : new pr(f instanceof Error ? f.message : f));
      }
    };
    let o = e && setTimeout(() => {
      o = null, s(new ee(`timeout ${e} of ms exceeded`, ee.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (o && clearTimeout(o), o = null, t.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(s) : l.removeEventListener("abort", s);
      }), t = null);
    };
    t.forEach((l) => l.addEventListener("abort", s));
    const { signal: c } = n;
    return c.unsubscribe = () => C.asap(a), c;
  }
}, rh = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + e, yield t.slice(n, i), n = i;
}, nh = async function* (t, e) {
  for await (const r of ih(t))
    yield* rh(r, e);
}, ih = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await e.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, Bo = (t, e, r, n) => {
  const i = nh(t, e);
  let s = 0, o, a = (c) => {
    o || (o = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: f } = await i.next();
        if (l) {
          a(), c.close();
          return;
        }
        let d = f.byteLength;
        if (r) {
          let h = s += d;
          r(h);
        }
        c.enqueue(new Uint8Array(f));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(c) {
      return a(c), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Dn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Lu = Dn && typeof ReadableStream == "function", sh = Dn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Uu = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, oh = Lu && Uu(() => {
  let t = !1;
  const e = new Request(je.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), zo = 64 * 1024, Wi = Lu && Uu(() => C.isReadableStream(new Response("").body)), yn = {
  stream: Wi && ((t) => t.body)
};
Dn && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !yn[e] && (yn[e] = C.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new ee(`Response type '${e}' is not supported`, ee.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const ah = async (t) => {
  if (t == null)
    return 0;
  if (C.isBlob(t))
    return t.size;
  if (C.isSpecCompliantForm(t))
    return (await new Request(je.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (C.isArrayBufferView(t) || C.isArrayBuffer(t))
    return t.byteLength;
  if (C.isURLSearchParams(t) && (t = t + ""), C.isString(t))
    return (await sh(t)).byteLength;
}, uh = async (t, e) => {
  const r = C.toFiniteNumber(t.getContentLength());
  return r ?? ah(e);
}, ch = Dn && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: i,
    cancelToken: s,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: l,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: h
  } = Vu(t);
  l = l ? (l + "").toLowerCase() : "text";
  let w = th([i, s && s.toAbortSignal()], o), g;
  const v = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let b;
  try {
    if (c && oh && r !== "get" && r !== "head" && (b = await uh(f, n)) !== 0) {
      let E = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), q;
      if (C.isFormData(n) && (q = E.headers.get("content-type")) && f.setContentType(q), E.body) {
        const [G, j] = Vo(
          b,
          mn(Lo(c))
        );
        n = Bo(E.body, zo, G, j);
      }
    }
    C.isString(d) || (d = d ? "include" : "omit");
    const A = "credentials" in Request.prototype;
    g = new Request(e, {
      ...h,
      signal: w,
      method: r.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: A ? d : void 0
    });
    let k = await fetch(g);
    const S = Wi && (l === "stream" || l === "response");
    if (Wi && (a || S && v)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((p) => {
        E[p] = k[p];
      });
      const q = C.toFiniteNumber(k.headers.get("content-length")), [G, j] = a && Vo(
        q,
        mn(Lo(a), !0)
      ) || [];
      k = new Response(
        Bo(k.body, zo, G, () => {
          j && j(), v && v();
        }),
        E
      );
    }
    l = l || "text";
    let P = await yn[C.findKey(yn, l) || "text"](k, t);
    return !S && v && v(), await new Promise((E, q) => {
      Mu(E, q, {
        data: P,
        headers: Ve.from(k.headers),
        status: k.status,
        statusText: k.statusText,
        config: t,
        request: g
      });
    });
  } catch (A) {
    throw v && v(), A && A.name === "TypeError" && /fetch/i.test(A.message) ? Object.assign(
      new ee("Network Error", ee.ERR_NETWORK, t, g),
      {
        cause: A.cause || A
      }
    ) : ee.from(A, A && A.code, t, g);
  }
}), Hi = {
  http: _p,
  xhr: eh,
  fetch: ch
};
C.forEach(Hi, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Wo = (t) => `- ${t}`, lh = (t) => C.isFunction(t) || t === null || t === !1, Bu = {
  getAdapter: (t) => {
    t = C.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let s = 0; s < e; s++) {
      r = t[s];
      let o;
      if (n = r, !lh(r) && (n = Hi[(o = String(r)).toLowerCase()], n === void 0))
        throw new ee(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(i).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? s.length > 1 ? `since :
` + s.map(Wo).join(`
`) : " " + Wo(s[0]) : "as no adapter specified";
      throw new ee(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Hi
};
function gi(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new pr(null, t);
}
function Ho(t) {
  return gi(t), t.headers = Ve.from(t.headers), t.data = yi.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Bu.getAdapter(t.adapter || qr.adapter)(t).then(function(n) {
    return gi(t), n.data = yi.call(
      t,
      t.transformResponse,
      n
    ), n.headers = Ve.from(n.headers), n;
  }, function(n) {
    return Iu(n) || (gi(t), n && n.response && (n.response.data = yi.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = Ve.from(n.response.headers))), Promise.reject(n);
  });
}
const zu = "1.7.7", ds = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ds[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ko = {};
ds.transitional = function(e, r, n) {
  function i(s, o) {
    return "[Axios v" + zu + "] Transitional option '" + s + "'" + o + (n ? ". " + n : "");
  }
  return (s, o, a) => {
    if (e === !1)
      throw new ee(
        i(o, " has been removed" + (r ? " in " + r : "")),
        ee.ERR_DEPRECATED
      );
    return r && !Ko[o] && (Ko[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(s, o, a) : !0;
  };
};
function fh(t, e, r) {
  if (typeof t != "object")
    throw new ee("options must be an object", ee.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i], o = e[s];
    if (o) {
      const a = t[s], c = a === void 0 || o(a, s, t);
      if (c !== !0)
        throw new ee("option " + s + " must be " + c, ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ee("Unknown option " + s, ee.ERR_BAD_OPTION);
  }
}
const Ki = {
  assertOptions: fh,
  validators: ds
}, gt = Ki.validators;
class It {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Mo(),
      response: new Mo()
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
  async request(e, r) {
    try {
      return await this._request(e, r);
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
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Lt(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 && Ki.assertOptions(n, {
      silentJSONParsing: gt.transitional(gt.boolean),
      forcedJSONParsing: gt.transitional(gt.boolean),
      clarifyTimeoutError: gt.transitional(gt.boolean)
    }, !1), i != null && (C.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Ki.assertOptions(i, {
      encode: gt.function,
      serialize: gt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = s && C.merge(
      s.common,
      s[r.method]
    );
    s && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), r.headers = Ve.concat(o, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (c = c && v.synchronous, a.unshift(v.fulfilled, v.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(v) {
      l.push(v.fulfilled, v.rejected);
    });
    let f, d = 0, h;
    if (!c) {
      const g = [Ho.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), h = g.length, f = Promise.resolve(r); d < h; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    h = a.length;
    let w = r;
    for (d = 0; d < h; ) {
      const g = a[d++], v = a[d++];
      try {
        w = g(w);
      } catch (b) {
        v.call(this, b);
        break;
      }
    }
    try {
      f = Ho.call(this, w);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, h = l.length; d < h; )
      f = f.then(l[d++], l[d++]);
    return f;
  }
  getUri(e) {
    e = Lt(this.defaults, e);
    const r = ju(e.baseURL, e.url);
    return $u(r, e.params, e.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function(e) {
  It.prototype[e] = function(r, n) {
    return this.request(Lt(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(s, o, a) {
      return this.request(Lt(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  It.prototype[e] = r(), It.prototype[e + "Form"] = r(!0);
});
class ps {
  constructor(e) {
    if (typeof e != "function")
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
    }, e(function(s, o, a) {
      n.reason || (n.reason = new pr(s, o, a), r(n.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), r = (n) => {
      e.abort(n);
    };
    return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new ps(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
function dh(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function ph(t) {
  return C.isObject(t) && t.isAxiosError === !0;
}
const Gi = {
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
Object.entries(Gi).forEach(([t, e]) => {
  Gi[e] = t;
});
function Wu(t) {
  const e = new It(t), r = Su(It.prototype.request, e);
  return C.extend(r, It.prototype, e, { allOwnKeys: !0 }), C.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Wu(Lt(t, i));
  }, r;
}
const _e = Wu(qr);
_e.Axios = It;
_e.CanceledError = pr;
_e.CancelToken = ps;
_e.isCancel = Iu;
_e.VERSION = zu;
_e.toFormData = Pn;
_e.AxiosError = ee;
_e.Cancel = _e.CanceledError;
_e.all = function(e) {
  return Promise.all(e);
};
_e.spread = dh;
_e.isAxiosError = ph;
_e.mergeConfig = Lt;
_e.AxiosHeaders = Ve;
_e.formToJSON = (t) => Fu(C.isHTMLForm(t) ? new FormData(t) : t);
_e.getAdapter = Bu.getAdapter;
_e.HttpStatusCode = Gi;
_e.default = _e;
const hh = {
  //Authentication
  // BASE_URL: "http://ec2-13-127-113-138.ap-south-1.compute.amazonaws.com:80",
  BASE_URL: "https://617a-182-156-141-17.ngrok-free.app"
}, Yi = _e.create({
  baseURL: hh.BASE_URL,
  // withCredentials: true,
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "multipart/form-data"
  }
}), mh = () => localStorage.getItem("access_token"), yh = () => localStorage.getItem("refresh_token");
Yi.interceptors.request.use(
  (t) => {
    const e = mh();
    return e && (t.headers.Authorization = `Bearer ${e}`), t;
  },
  (t) => Promise.reject(t)
);
Yi.interceptors.response.use(
  (t) => t,
  async (t) => {
    const e = t.config;
    if (t.response && t.response.status === 401 && !e._retry) {
      e._retry = !0;
      const r = yh();
      if (r)
        try {
          const { data: n } = await _e.post("https://7759-182-156-141-17.ngrok-free.app/auth/refresh-token", {
            refreshToken: r
          });
          return localStorage.setItem("accessToken", n.accessToken), e.headers.Authorization = `Bearer ${n.accessToken}`, Yi(e);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(t);
  }
);
var Hu = /* @__PURE__ */ ((t) => (t[t.COLLECTION_CENTER = 0] = "COLLECTION_CENTER", t[t.DISTRIBUTION_CENTER = 1] = "DISTRIBUTION_CENTER", t[t.SEASONAL_COLLECTION_CENTER = 2] = "SEASONAL_COLLECTION_CENTER", t[t.WAREHOUSE = 3] = "WAREHOUSE", t))(Hu || {}), Ku = /* @__PURE__ */ ((t) => (t[t.REGISTERED_OFFICE = 0] = "REGISTERED_OFFICE", t[t.CORPORATE_OFFICE = 1] = "CORPORATE_OFFICE", t))(Ku || {}), Gu = /* @__PURE__ */ ((t) => (t.OWNED = "Owned", t.LEASED = "Leased", t.SHARED = "Shared", t.ENCUMBERED = "Encumbered", t))(Gu || {}), Yu = /* @__PURE__ */ ((t) => (t.CULTIVABLE = "Cultivable", t.FALLOW = "Fallow", t.IRRIGATED = "Irrigated", t.NON_IRRIGATED = "Non-Irrigated", t))(Yu || {});
const gh = {
  offices: [],
  officeType: Ku.REGISTERED_OFFICE,
  selectedOffices: void 0
}, Qu = Se({
  name: "officesData",
  initialState: gh,
  reducers: {
    setOfficesData: (t, e) => {
      t.offices = e.payload;
    },
    setOfficeType: (t, e) => {
      t.officeType = e.payload;
    }
  }
});
Qu.actions;
const Ju = Qu.reducer, bh = {
  branches: [],
  BranchType: Hu.COLLECTION_CENTER,
  selectedBranches: void 0
}, Xu = Se({
  name: "branchesData",
  initialState: bh,
  reducers: {
    setBranchesData: (t, e) => {
      t.branches = e.payload;
    },
    setBranchType: (t, e) => {
      t.BranchType = e.payload;
    }
  }
});
Xu.actions;
const Zu = Xu.reducer, vh = {
  open: !1,
  message: "",
  severity: "success"
}, ec = Se({
  name: "alertSnackbar",
  initialState: vh,
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
ec.actions;
const tc = ec.reducer;
as({
  reducer: {
    formContainer: nu,
    customerData: su,
    vendorData: au,
    employeeData: cu,
    farmerData: fu,
    productData: pu,
    uomData: mu,
    officesData: Ju,
    branchesData: Zu,
    alertSnackbar: tc
  }
});
const Go = {
  address1: "",
  address2: "",
  location: "",
  city: "",
  state: "",
  pincode: ""
}, wh = {
  crop: "",
  variety: "",
  noOfPlants: "",
  pruningDate: /* @__PURE__ */ new Date(),
  expectedHarvestDate: /* @__PURE__ */ new Date(),
  expectedQuantityInTonnes: 0
};
Gu.OWNED, Yu.NON_IRRIGATED;
function Ut(t) {
  this._maxSize = t, this.clear();
}
Ut.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
Ut.prototype.get = function(t) {
  return this._values[t];
};
Ut.prototype.set = function(t, e) {
  return this._size >= this._maxSize && this.clear(), t in this._values || this._size++, this._values[t] = e;
};
var Eh = /[^.^\]^[]+|(?=\[\]|\.\.)/g, rc = /^\d+$/, Sh = /^\d/, Oh = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, _h = /^\s*(['"]?)(.*?)(\1)\s*$/, hs = 512, Yo = new Ut(hs), Qo = new Ut(hs), Jo = new Ut(hs), Mt = {
  Cache: Ut,
  split: Qi,
  normalizePath: bi,
  setter: function(t) {
    var e = bi(t);
    return Qo.get(t) || Qo.set(t, function(n, i) {
      for (var s = 0, o = e.length, a = n; s < o - 1; ) {
        var c = e[s];
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return n;
        a = a[e[s++]];
      }
      a[e[s]] = i;
    });
  },
  getter: function(t, e) {
    var r = bi(t);
    return Jo.get(t) || Jo.set(t, function(i) {
      for (var s = 0, o = r.length; s < o; )
        if (i != null || !e) i = i[r[s++]];
        else return;
      return i;
    });
  },
  join: function(t) {
    return t.reduce(function(e, r) {
      return e + (ms(r) || rc.test(r) ? "[" + r + "]" : (e ? "." : "") + r);
    }, "");
  },
  forEach: function(t, e, r) {
    Ch(Array.isArray(t) ? t : Qi(t), e, r);
  }
};
function bi(t) {
  return Yo.get(t) || Yo.set(
    t,
    Qi(t).map(function(e) {
      return e.replace(_h, "$2");
    })
  );
}
function Qi(t) {
  return t.match(Eh) || [""];
}
function Ch(t, e, r) {
  var n = t.length, i, s, o, a;
  for (s = 0; s < n; s++)
    i = t[s], i && (xh(i) && (i = '"' + i + '"'), a = ms(i), o = !a && /^\d+$/.test(i), e.call(r, i, a, o, s, t));
}
function ms(t) {
  return typeof t == "string" && t && ["'", '"'].indexOf(t.charAt(0)) !== -1;
}
function Th(t) {
  return t.match(Sh) && !t.match(rc);
}
function Rh(t) {
  return Oh.test(t);
}
function xh(t) {
  return !ms(t) && (Th(t) || Rh(t));
}
const Ah = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, kn = (t) => t.match(Ah) || [], Nn = (t) => t[0].toUpperCase() + t.slice(1), ys = (t, e) => kn(t).join(e).toLowerCase(), nc = (t) => kn(t).reduce(
  (e, r) => `${e}${e ? r[0].toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()}`,
  ""
), Ph = (t) => Nn(nc(t)), Dh = (t) => ys(t, "_"), kh = (t) => ys(t, "-"), Nh = (t) => Nn(ys(t, " ")), $h = (t) => kn(t).map(Nn).join(" ");
var vi = {
  words: kn,
  upperFirst: Nn,
  camelCase: nc,
  pascalCase: Ph,
  snakeCase: Dh,
  kebabCase: kh,
  sentenceCase: Nh,
  titleCase: $h
}, gs = { exports: {} };
gs.exports = function(t) {
  return ic(qh(t), t);
};
gs.exports.array = ic;
function ic(t, e) {
  var r = t.length, n = new Array(r), i = {}, s = r, o = Fh(e), a = Ih(t);
  for (e.forEach(function(l) {
    if (!a.has(l[0]) || !a.has(l[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    i[s] || c(t[s], s, /* @__PURE__ */ new Set());
  return n;
  function c(l, f, d) {
    if (d.has(l)) {
      var h;
      try {
        h = ", node was:" + JSON.stringify(l);
      } catch {
        h = "";
      }
      throw new Error("Cyclic dependency" + h);
    }
    if (!a.has(l))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(l));
    if (!i[f]) {
      i[f] = !0;
      var w = o.get(l) || /* @__PURE__ */ new Set();
      if (w = Array.from(w), f = w.length) {
        d.add(l);
        do {
          var g = w[--f];
          c(g, a.get(g), d);
        } while (f);
        d.delete(l);
      }
      n[--r] = l;
    }
  }
}
function qh(t) {
  for (var e = /* @__PURE__ */ new Set(), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    e.add(i[0]), e.add(i[1]);
  }
  return Array.from(e);
}
function Fh(t) {
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    e.has(i[0]) || e.set(i[0], /* @__PURE__ */ new Set()), e.has(i[1]) || e.set(i[1], /* @__PURE__ */ new Set()), e.get(i[0]).add(i[1]);
  }
  return e;
}
function Ih(t) {
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = t.length; r < n; r++)
    e.set(t[r], r);
  return e;
}
var Mh = gs.exports;
const jh = /* @__PURE__ */ is(Mh), Vh = Object.prototype.toString, Lh = Error.prototype.toString, Uh = RegExp.prototype.toString, Bh = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", zh = /^Symbol\((.*)\)(.*)$/;
function Wh(t) {
  return t != +t ? "NaN" : t === 0 && 1 / t < 0 ? "-0" : "" + t;
}
function Xo(t, e = !1) {
  if (t == null || t === !0 || t === !1) return "" + t;
  const r = typeof t;
  if (r === "number") return Wh(t);
  if (r === "string") return e ? `"${t}"` : t;
  if (r === "function") return "[Function " + (t.name || "anonymous") + "]";
  if (r === "symbol") return Bh.call(t).replace(zh, "Symbol($1)");
  const n = Vh.call(t).slice(8, -1);
  return n === "Date" ? isNaN(t.getTime()) ? "" + t : t.toISOString(t) : n === "Error" || t instanceof Error ? "[" + Lh.call(t) + "]" : n === "RegExp" ? Uh.call(t) : null;
}
function dt(t, e) {
  let r = Xo(t, e);
  return r !== null ? r : JSON.stringify(t, function(n, i) {
    let s = Xo(this[n], e);
    return s !== null ? s : i;
  }, 2);
}
function sc(t) {
  return t == null ? [] : [].concat(t);
}
let oc, ac, uc, Hh = /\$\{\s*(\w+)\s*\}/g;
oc = Symbol.toStringTag;
class Zo {
  constructor(e, r, n, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[oc] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = i, this.errors = [], this.inner = [], sc(e).forEach((s) => {
      if (Ie.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
ac = Symbol.hasInstance;
uc = Symbol.toStringTag;
class Ie extends Error {
  static formatError(e, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Object.assign({}, r, {
      path: n
    })), typeof e == "string" ? e.replace(Hh, (i, s) => dt(r[s])) : typeof e == "function" ? e(r) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, r, n, i, s) {
    const o = new Zo(e, r, n, i);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[uc] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Ie);
  }
  static [ac](e) {
    return Zo[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let it = {
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
    const i = n != null && n !== r ? ` (cast from the value \`${dt(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${t} must be a \`${e}\` type, but the final value was: \`${dt(r, !0)}\`` + i : `${t} must match the configured type. The validated value was: \`${dt(r, !0)}\`` + i;
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
}, wt = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Ji = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Xi = {
  isValue: "${path} field must be ${value}"
}, Zi = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, un = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Kh = {
  notType: (t) => {
    const {
      path: e,
      value: r,
      spec: n
    } = t, i = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < i) return `${e} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${dt(r, !0)}\``;
      if (r.length > i) return `${e} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${dt(r, !0)}\``;
    }
    return Ie.formatError(it.notType, t);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: it,
  string: Fe,
  number: wt,
  date: Ji,
  object: Zi,
  array: un,
  boolean: Xi,
  tuple: Kh
});
const $n = (t) => t && t.__isYupSchema__;
class gn {
  static fromOptions(e, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: i,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...a) => a.every((c) => c === n);
    return new gn(e, (a, c) => {
      var l;
      let f = o(...a) ? i : s;
      return (l = f == null ? void 0 : f(c)) != null ? l : c;
    });
  }
  constructor(e, r) {
    this.fn = void 0, this.refs = e, this.refs = e, this.fn = r;
  }
  resolve(e, r) {
    let n = this.refs.map((s) => (
      // TODO: ? operator here?
      s.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)
    )), i = this.fn(n, e, r);
    if (i === void 0 || // @ts-ignore this can be base
    i === e)
      return e;
    if (!$n(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(r);
  }
}
const tn = {
  context: "$",
  value: "."
};
class Bt {
  constructor(e, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === tn.context, this.isValue = this.key[0] === tn.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? tn.context : this.isValue ? tn.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Mt.getter(this.path, !0), this.map = r.map;
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
Bt.prototype.__isYupRef = !0;
const tt = (t) => t == null;
function Gt(t) {
  function e({
    value: r,
    path: n = "",
    options: i,
    originalValue: s,
    schema: o
  }, a, c) {
    const {
      name: l,
      test: f,
      params: d,
      message: h,
      skipAbsent: w
    } = t;
    let {
      parent: g,
      context: v,
      abortEarly: b = o.spec.abortEarly,
      disableStackTrace: A = o.spec.disableStackTrace
    } = i;
    function k(L) {
      return Bt.isRef(L) ? L.getValue(r, g, v) : L;
    }
    function S(L = {}) {
      const Z = Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: L.path || n,
        spec: o.spec,
        disableStackTrace: L.disableStackTrace || A
      }, d, L.params);
      for (const me of Object.keys(Z)) Z[me] = k(Z[me]);
      const Oe = new Ie(Ie.formatError(L.message || h, Z), r, Z.path, L.type || l, Z.disableStackTrace);
      return Oe.params = Z, Oe;
    }
    const P = b ? a : c;
    let E = {
      path: n,
      parent: g,
      type: l,
      from: i.from,
      createError: S,
      resolve: k,
      options: i,
      originalValue: s,
      schema: o
    };
    const q = (L) => {
      Ie.isError(L) ? P(L) : L ? c(null) : P(S());
    }, G = (L) => {
      Ie.isError(L) ? P(L) : a(L);
    };
    if (w && tt(r))
      return q(!0);
    let p;
    try {
      var V;
      if (p = f.call(E, r, E), typeof ((V = p) == null ? void 0 : V.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(p).then(q, G);
      }
    } catch (L) {
      G(L);
      return;
    }
    q(p);
  }
  return e.OPTIONS = t, e;
}
function Gh(t, e, r, n = r) {
  let i, s, o;
  return e ? (Mt.forEach(e, (a, c, l) => {
    let f = c ? a.slice(1, a.length - 1) : a;
    t = t.resolve({
      context: n,
      parent: i,
      value: r
    });
    let d = t.type === "tuple", h = l ? parseInt(f, 10) : 0;
    if (t.innerType || d) {
      if (d && !l) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && h >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);
      i = r, r = r && r[h], t = d ? t.spec.types[h] : t.innerType;
    }
    if (!l) {
      if (!t.fields || !t.fields[f]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);
      i = r, r = r && r[f], t = t.fields[f];
    }
    s = f, o = c ? "[" + a + "]" : "." + a;
  }), {
    schema: t,
    parent: i,
    parentPath: s
  }) : {
    parent: i,
    parentPath: e,
    schema: t
  };
}
class bn extends Set {
  describe() {
    const e = [];
    for (const r of this.values())
      e.push(Bt.isRef(r) ? r.describe() : r);
    return e;
  }
  resolveAll(e) {
    let r = [];
    for (const n of this.values())
      r.push(e(n));
    return r;
  }
  clone() {
    return new bn(this.values());
  }
  merge(e, r) {
    const n = this.clone();
    return e.forEach((i) => n.add(i)), r.forEach((i) => n.delete(i)), n;
  }
}
function er(t, e = /* @__PURE__ */ new Map()) {
  if ($n(t) || !t || typeof t != "object") return t;
  if (e.has(t)) return e.get(t);
  let r;
  if (t instanceof Date)
    r = new Date(t.getTime()), e.set(t, r);
  else if (t instanceof RegExp)
    r = new RegExp(t), e.set(t, r);
  else if (Array.isArray(t)) {
    r = new Array(t.length), e.set(t, r);
    for (let n = 0; n < t.length; n++) r[n] = er(t[n], e);
  } else if (t instanceof Map) {
    r = /* @__PURE__ */ new Map(), e.set(t, r);
    for (const [n, i] of t.entries()) r.set(n, er(i, e));
  } else if (t instanceof Set) {
    r = /* @__PURE__ */ new Set(), e.set(t, r);
    for (const n of t) r.add(er(n, e));
  } else if (t instanceof Object) {
    r = {}, e.set(t, r);
    for (const [n, i] of Object.entries(t)) r[n] = er(i, e);
  } else
    throw Error(`Unable to clone ${t}`);
  return r;
}
class Le {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new bn(), this._blacklist = new bn(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(it.notType);
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
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = er(Object.assign({}, this.spec, e)), r;
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
    return n.spec = i, n.internalTests = Object.assign({}, r.internalTests, n.internalTests), n._whitelist = r._whitelist.merge(e._whitelist, e._blacklist), n._blacklist = r._blacklist.merge(e._blacklist, e._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((s) => {
      e.tests.forEach((o) => {
        s.test(o.OPTIONS);
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
      r = r.clone(), r.conditions = [], r = n.reduce((i, s) => s.resolve(i, e), r), r = r.resolve(e);
    }
    return r;
  }
  resolveOptions(e) {
    var r, n, i, s;
    return Object.assign({}, e, {
      from: e.from || [],
      strict: (r = e.strict) != null ? r : this.spec.strict,
      abortEarly: (n = e.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (i = e.recursive) != null ? i : this.spec.recursive,
      disableStackTrace: (s = e.disableStackTrace) != null ? s : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(e, r = {}) {
    let n = this.resolve(Object.assign({
      value: e
    }, r)), i = r.assert === "ignore-optionality", s = n._cast(e, r);
    if (r.assert !== !1 && !n.isType(s)) {
      if (i && tt(s))
        return s;
      let o = dt(e), a = dt(s);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
` + (a !== o ? `result of cast: ${a}` : ""));
    }
    return s;
  }
  _cast(e, r) {
    let n = e === void 0 ? e : this.transforms.reduce((i, s) => s.call(this, i, e, this), e);
    return n === void 0 && (n = this.getDefault(r)), n;
  }
  _validate(e, r = {}, n, i) {
    let {
      path: s,
      originalValue: o = e,
      strict: a = this.spec.strict
    } = r, c = e;
    a || (c = this._cast(c, Object.assign({
      assert: !1
    }, r)));
    let l = [];
    for (let f of Object.values(this.internalTests))
      f && l.push(f);
    this.runTests({
      path: s,
      value: c,
      originalValue: o,
      options: r,
      tests: l
    }, n, (f) => {
      if (f.length)
        return i(f, c);
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
  runTests(e, r, n) {
    let i = !1, {
      tests: s,
      value: o,
      originalValue: a,
      path: c,
      options: l
    } = e, f = (v) => {
      i || (i = !0, r(v, o));
    }, d = (v) => {
      i || (i = !0, n(v, o));
    }, h = s.length, w = [];
    if (!h) return d([]);
    let g = {
      value: o,
      originalValue: a,
      path: c,
      options: l,
      schema: this
    };
    for (let v = 0; v < s.length; v++) {
      const b = s[v];
      b(g, f, function(k) {
        k && (Array.isArray(k) ? w.push(...k) : w.push(k)), --h <= 0 && d(w);
      });
    }
  }
  asNestedTest({
    key: e,
    index: r,
    parent: n,
    parentPath: i,
    originalParent: s,
    options: o
  }) {
    const a = e ?? r;
    if (a == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const c = typeof a == "number";
    let l = n[a];
    const f = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: l,
      originalValue: s[a],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [c ? "index" : "key"]: a,
      path: c || a.includes(".") ? `${i || ""}[${c ? a : `"${a}"`}]` : (i ? `${i}.` : "") + e
    });
    return (d, h, w) => this.resolve(f)._validate(l, f, h, w);
  }
  validate(e, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: e
    })), s = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return new Promise((o, a) => i._validate(e, r, (c, l) => {
      Ie.isError(c) && (c.value = l), a(c);
    }, (c, l) => {
      c.length ? a(new Ie(c, l, void 0, void 0, s)) : o(l);
    }));
  }
  validateSync(e, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: e
    })), s, o = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return i._validate(e, Object.assign({}, r, {
      sync: !0
    }), (a, c) => {
      throw Ie.isError(a) && (a.value = c), a;
    }, (a, c) => {
      if (a.length) throw new Ie(a, e, void 0, void 0, o);
      s = c;
    }), s;
  }
  isValid(e, r) {
    return this.validate(e, r).then(() => !0, (n) => {
      if (Ie.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, r) {
    try {
      return this.validateSync(e, r), !0;
    } catch (n) {
      if (Ie.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, e) : er(r);
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
  defined(e = it.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = it.notNull) {
    return this.nullability(!1, e);
  }
  required(e = it.required) {
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
    }, r.message === void 0 && (r.message = it.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), i = Gt(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (s || o.OPTIONS.test === i.OPTIONS.test))), n.tests.push(i), n;
  }
  when(e, r) {
    !Array.isArray(e) && typeof e != "string" && (r = e, e = ".");
    let n = this.clone(), i = sc(e).map((s) => new Bt(s));
    return i.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new gn(i, r) : gn.fromOptions(i, r)), n;
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
  oneOf(e, r = it.oneOf) {
    let n = this.clone();
    return e.forEach((i) => {
      n._whitelist.add(i), n._blacklist.delete(i);
    }), n.internalTests.whiteList = Gt({
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
  notOneOf(e, r = it.notOneOf) {
    let n = this.clone();
    return e.forEach((i) => {
      n._blacklist.add(i), n._whitelist.delete(i);
    }), n.internalTests.blacklist = Gt({
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
      optional: s,
      nullable: o
    } = r.spec;
    return {
      meta: i,
      label: n,
      optional: s,
      nullable: o,
      default: r.getDefault(e),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.map((c) => ({
        name: c.OPTIONS.name,
        params: c.OPTIONS.params
      })).filter((c, l, f) => f.findIndex((d) => d.name === c.name) === l)
    };
  }
}
Le.prototype.__isYupSchema__ = !0;
for (const t of ["validate", "validateSync"]) Le.prototype[`${t}At`] = function(e, r, n = {}) {
  const {
    parent: i,
    parentPath: s,
    schema: o
  } = Gh(this, e, r, n.context);
  return o[t](i && i[s], Object.assign({}, n, {
    parent: i,
    path: e
  }));
};
for (const t of ["equals", "is"]) Le.prototype[t] = Le.prototype.oneOf;
for (const t of ["not", "nope"]) Le.prototype[t] = Le.prototype.notOneOf;
const Yh = () => !0;
function cc(t) {
  return new lc(t);
}
class lc extends Le {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: Yh
    }, e));
  }
}
cc.prototype = lc.prototype;
function fc() {
  return new dc();
}
class dc extends Le {
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
  isTrue(e = Xi.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(r) {
        return tt(r) || r === !0;
      }
    });
  }
  isFalse(e = Xi.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(r) {
        return tt(r) || r === !1;
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
fc.prototype = dc.prototype;
const Qh = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Jh(t) {
  const e = es(t);
  if (!e) return Date.parse ? Date.parse(t) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let r = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (r = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (r = 0 - r)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + r, e.second, e.millisecond);
}
function es(t) {
  var e, r;
  const n = Qh.exec(t);
  return n ? {
    year: ct(n[1]),
    month: ct(n[2], 1) - 1,
    day: ct(n[3], 1),
    hour: ct(n[4]),
    minute: ct(n[5]),
    second: ct(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      ct(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (r = n[7]) == null ? void 0 : r.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: ct(n[10]),
    minuteOffset: ct(n[11])
  } : null;
}
function ct(t, e = 0) {
  return Number(t) || e;
}
let Xh = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Zh = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), em = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, tm = "^\\d{4}-\\d{2}-\\d{2}", rm = "\\d{2}:\\d{2}:\\d{2}", nm = "(([+-]\\d{2}(:?\\d{2})?)|Z)", im = new RegExp(`${tm}T${rm}(\\.\\d+)?${nm}$`), sm = (t) => tt(t) || t === t.trim(), om = {}.toString();
function O() {
  return new pc();
}
class pc extends Le {
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
        return i === om ? e : i;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((r) => r.test({
      message: e || it.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((r) => r.OPTIONS.name !== "required"), e));
  }
  length(e, r = Fe.length) {
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
  min(e, r = Fe.min) {
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
  max(e, r = Fe.max) {
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
    let n = !1, i, s;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: i,
      name: s
    } = r : i = r), this.test({
      name: s || "matches",
      message: i || Fe.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(e) !== -1
    });
  }
  email(e = Fe.email) {
    return this.matches(Xh, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = Fe.url) {
    return this.matches(Zh, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = Fe.uuid) {
    return this.matches(em, {
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
    } = e : r = e), this.matches(im, {
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
        const o = es(s);
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
        const o = es(s);
        return o ? o.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = Fe.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: e,
      name: "trim",
      test: sm
    });
  }
  lowercase(e = Fe.lowercase) {
    return this.transform((r) => tt(r) ? r : r.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => tt(r) || r === r.toLowerCase()
    });
  }
  uppercase(e = Fe.uppercase) {
    return this.transform((r) => tt(r) ? r : r.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => tt(r) || r === r.toUpperCase()
    });
  }
}
O.prototype = pc.prototype;
let am = (t) => t != +t;
function Je() {
  return new hc();
}
class hc extends Le {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !am(e);
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
  min(e, r = wt.min) {
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
  max(e, r = wt.max) {
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
  lessThan(e, r = wt.lessThan) {
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
  moreThan(e, r = wt.moreThan) {
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
  positive(e = wt.positive) {
    return this.moreThan(0, e);
  }
  negative(e = wt.negative) {
    return this.lessThan(0, e);
  }
  integer(e = wt.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (r) => Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((e) => tt(e) ? e : e | 0);
  }
  round(e) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (e = ((r = e) == null ? void 0 : r.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (n.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((i) => tt(i) ? i : Math[e](i));
  }
}
Je.prototype = hc.prototype;
let mc = /* @__PURE__ */ new Date(""), um = (t) => Object.prototype.toString.call(t) === "[object Date]";
function Fr() {
  return new Ir();
}
class Ir extends Le {
  constructor() {
    super({
      type: "date",
      check(e) {
        return um(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = Jh(e), isNaN(e) ? Ir.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, r) {
    let n;
    if (Bt.isRef(e))
      n = e;
    else {
      let i = this.cast(e);
      if (!this._typeCheck(i)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = i;
    }
    return n;
  }
  min(e, r = Ji.min) {
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
  max(e, r = Ji.max) {
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
Ir.INVALID_DATE = mc;
Fr.prototype = Ir.prototype;
Fr.INVALID_DATE = mc;
function cm(t, e = []) {
  let r = [], n = /* @__PURE__ */ new Set(), i = new Set(e.map(([o, a]) => `${o}-${a}`));
  function s(o, a) {
    let c = Mt.split(o)[0];
    n.add(c), i.has(`${a}-${c}`) || r.push([a, c]);
  }
  for (const o of Object.keys(t)) {
    let a = t[o];
    n.add(o), Bt.isRef(a) && a.isSibling ? s(a.path, o) : $n(a) && "deps" in a && a.deps.forEach((c) => s(c, o));
  }
  return jh.array(Array.from(n), r).reverse();
}
function ea(t, e) {
  let r = 1 / 0;
  return t.some((n, i) => {
    var s;
    if ((s = e.path) != null && s.includes(n))
      return r = i, !0;
  }), r;
}
function yc(t) {
  return (e, r) => ea(t, e) - ea(t, r);
}
const gc = (t, e, r) => {
  if (typeof t != "string")
    return t;
  let n = t;
  try {
    n = JSON.parse(t);
  } catch {
  }
  return r.isType(n) ? n : t;
};
function cn(t) {
  if ("fields" in t) {
    const e = {};
    for (const [r, n] of Object.entries(t.fields))
      e[r] = cn(n);
    return t.setFields(e);
  }
  if (t.type === "array") {
    const e = t.optional();
    return e.innerType && (e.innerType = cn(e.innerType)), e;
  }
  return t.type === "tuple" ? t.optional().clone({
    types: t.spec.types.map(cn)
  }) : "optional" in t ? t.optional() : t;
}
const lm = (t, e) => {
  const r = [...Mt.normalizePath(e)];
  if (r.length === 1) return r[0] in t;
  let n = r.pop(), i = Mt.getter(Mt.join(r), !0)(t);
  return !!(i && n in i);
};
let ta = (t) => Object.prototype.toString.call(t) === "[object Object]";
function fm(t, e) {
  let r = Object.keys(t.fields);
  return Object.keys(e).filter((n) => r.indexOf(n) === -1);
}
const dm = yc([]);
function ae(t) {
  return new bc(t);
}
class bc extends Le {
  constructor(e) {
    super({
      type: "object",
      check(r) {
        return ta(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = dm, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, r = {}) {
    var n;
    let i = super._cast(e, r);
    if (i === void 0) return this.getDefault(r);
    if (!this._typeCheck(i)) return i;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, a = [].concat(this._nodes, Object.keys(i).filter((d) => !this._nodes.includes(d))), c = {}, l = Object.assign({}, r, {
      parent: c,
      __validating: r.__validating || !1
    }), f = !1;
    for (const d of a) {
      let h = s[d], w = d in i;
      if (h) {
        let g, v = i[d];
        l.path = (r.path ? `${r.path}.` : "") + d, h = h.resolve({
          value: v,
          context: r.context,
          parent: c
        });
        let b = h instanceof Le ? h.spec : void 0, A = b == null ? void 0 : b.strict;
        if (b != null && b.strip) {
          f = f || d in i;
          continue;
        }
        g = !r.__validating || !A ? (
          // TODO: use _cast, this is double resolving
          h.cast(i[d], l)
        ) : i[d], g !== void 0 && (c[d] = g);
      } else w && !o && (c[d] = i[d]);
      (w !== d in c || c[d] !== i[d]) && (f = !0);
    }
    return f ? c : i;
  }
  _validate(e, r = {}, n, i) {
    let {
      from: s = [],
      originalValue: o = e,
      recursive: a = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: o
    }, ...s], r.__validating = !0, r.originalValue = o, super._validate(e, r, n, (c, l) => {
      if (!a || !ta(l)) {
        i(c, l);
        return;
      }
      o = o || l;
      let f = [];
      for (let d of this._nodes) {
        let h = this.fields[d];
        !h || Bt.isRef(h) || f.push(h.asNestedTest({
          options: r,
          key: d,
          parent: l,
          parentPath: r.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: f,
        value: l,
        originalValue: o,
        options: r
      }, n, (d) => {
        i(d.sort(this._sortErrors).concat(c), l);
      });
    });
  }
  clone(e) {
    const r = super.clone(e);
    return r.fields = Object.assign({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(e) {
    let r = super.concat(e), n = r.fields;
    for (let [i, s] of Object.entries(this.fields)) {
      const o = n[i];
      n[i] = o === void 0 ? s : o;
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
      const s = this.fields[n];
      let o = e;
      (i = o) != null && i.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[n]
      })), r[n] = s && "getDefault" in s ? s.getDefault(o) : void 0;
    }), r;
  }
  setFields(e, r) {
    let n = this.clone();
    return n.fields = e, n._nodes = cm(e, r), n._sortErrors = yc(Object.keys(e)), r && (n._excludedEdges = r), n;
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
    return cn(this);
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
    let i = Mt.getter(e, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return lm(s, e) && (o = Object.assign({}, s), n || delete o[e], o[r] = i(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(gc);
  }
  noUnknown(e = !0, r = Zi.noUnknown) {
    typeof e != "boolean" && (r = e, e = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(i) {
        if (i == null) return !0;
        const s = fm(this.schema, i);
        return !e || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = e, n;
  }
  unknown(e = !0, r = Zi.noUnknown) {
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
    return this.transformKeys(vi.camelCase);
  }
  snakeCase() {
    return this.transformKeys(vi.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => vi.snakeCase(e).toUpperCase());
  }
  describe(e) {
    const r = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    n.fields = {};
    for (const [s, o] of Object.entries(r.fields)) {
      var i;
      let a = e;
      (i = a) != null && i.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[s]
      })), n.fields[s] = o.describe(a);
    }
    return n;
  }
}
ae.prototype = bc.prototype;
function qn(t) {
  return new vc(t);
}
class vc extends Le {
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
    const s = n.map((o, a) => {
      const c = this.innerType.cast(o, Object.assign({}, r, {
        path: `${r.path || ""}[${a}]`
      }));
      return c !== o && (i = !0), c;
    });
    return i ? s : n;
  }
  _validate(e, r = {}, n, i) {
    var s;
    let o = this.innerType, a = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(e, r, n, (c, l) => {
      var f;
      if (!a || !o || !this._typeCheck(l)) {
        i(c, l);
        return;
      }
      let d = new Array(l.length);
      for (let w = 0; w < l.length; w++) {
        var h;
        d[w] = o.asNestedTest({
          options: r,
          index: w,
          parent: l,
          parentPath: r.path,
          originalParent: (h = r.originalValue) != null ? h : e
        });
      }
      this.runTests({
        value: l,
        tests: d,
        originalValue: (f = r.originalValue) != null ? f : e,
        options: r
      }, n, (w) => i(w.concat(c), l));
    });
  }
  clone(e) {
    const r = super.clone(e);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(gc);
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
    if (!$n(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + dt(e));
    return r.innerType = e, r.spec = Object.assign({}, r.spec, {
      types: e
    }), r;
  }
  length(e, r = un.length) {
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
    return r = r || un.min, this.test({
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
    return r = r || un.max, this.test({
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
    let r = e ? (n, i, s) => !e(n, i, s) : (n) => !!n;
    return this.transform((n) => n != null ? n.filter(r) : n);
  }
  describe(e) {
    const r = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    if (r.innerType) {
      var i;
      let s = e;
      (i = s) != null && i.value && (s = Object.assign({}, s, {
        parent: s.value,
        value: s.value[0]
      })), n.innerType = r.innerType.describe(s);
    }
    return n;
  }
}
qn.prototype = vc.prototype;
ae().shape({
  firstName: O().required("First name is required").min(3, "First name should be more than 3 characters"),
  middleName: O().required("Middle name is required").min(3, "Middle name should be more than 3 characters"),
  lastName: O().required("Last name is required").min(3, "Last name should be more than 3 characters"),
  designation: O().required("Designation is required").min(5, "Incorrect Designation"),
  username: O().required("Username is required").min(5, "username should be more than 5 characters").max(12, "username should be less than 12 characters"),
  phoneNumber: O().required("Mobile number is required").length(10, "Mobile number must be 10 digits").matches(/^[0-9]+$/, "Mobile number must contain only numbers"),
  cugNo: O().required("CUG number is required").length(10, "CUG number must be 10 digits").matches(/^[0-9]+$/, "CUG number must contain only numbers"),
  email: O().required("Email is required").email("Invalid email format"),
  companyEmail: O().required("Company email is required").email("Invalid email format"),
  address: ae().shape({
    street: O().required("Street address is required"),
    city: O().required("City is required"),
    state: O().required("State is required"),
    country: O().required("Country is required"),
    postalCode: O().required("Postal Code is required")
  }),
  joiningDate: O().required("Joining date is required"),
  relocationDate: O().optional(),
  relocationPlace: O().optional(),
  recommendedBy: O().optional(),
  role: O().required("Role is required"),
  reportingAuthorityFunctional: O().optional(),
  reportingAuthorityAdministrative: O().optional()
});
ae().shape({
  name: O().required("Name is required").min(3, "Product name should be more than 3 characters"),
  image: cc().nullable().required("Image is required").test("fileFormat", "Invalid image format (only jpg, jpeg, png allowed)", (t) => {
    if (!t) return !0;
    const e = t;
    return ["image/jpeg", "image/png", "image/jpg"].includes(e.type);
  }).test("fileSize", "Image is too large (max 1MB)", (t) => {
    if (!t) return !0;
    const e = t, r = 1 * 1024 * 1024;
    return e.size <= r;
  }),
  returnable: fc().required("Returnable is required"),
  description: O().required("Description is required"),
  product_code: O().required("Product code is required"),
  category: O().required("Category is required"),
  subcategory: O().required("Subcategory is required"),
  classification: O().required("Classification is required"),
  uom: O().required("UOM is required")
});
ae().shape({
  name: O().required("Product classification name is required.")
});
ae().shape({
  name: O().required("Product category name is required"),
  productClassification: O().required("Related product classification name is required")
});
ae().shape({
  name: O().required("Product subcategory name is required"),
  category: O().required("Related product category name is required")
});
ae().shape({
  name: O().required("Office name is required"),
  address: ae().shape({
    address1: O().required("Address 1 is required"),
    address2: O().optional(),
    location: O().required("Location is required"),
    city: O().required("City is required"),
    state: O().required("State is required"),
    pincode: O().required("Pincode is required")
  }),
  contactNumber: O().required("Contact number is required"),
  officeEmail: O().required("Office email is required").email("Invalid email format"),
  notes: O().optional()
});
ae().shape({
  organisationName: O().required("Organisation Name is required"),
  // customerTypes: customerTypesSchema,
  // customerCategory: customerCategorySchema,
  organisationType: O().required("Organisation Type is required"),
  otherType: O(),
  // customerAddress: addressSchema,
  primaryContactNo: O().required("Primary Contact No. is required").matches(/^\d{10}$/, "Contact number must be 10 digits"),
  secondaryContactNo: O().matches(/^\d{10}$/, "Contact number must be 10 digits"),
  emailPrimary: O().email("Invalid email format").required("Primary Email is required"),
  emailSecondary: O().email("Invalid email format")
  //     keyMobileNumbers: keyMobileNumbersSchema,
  //     billingDetails: billingDetailsSchema,
  //     deliveryDetails: deliveryDetailsSchema,
  //     statutoryDetails: statutoryDetailsSchema,
  //     bankDetails: bankDetailsSchema,
  //     productSpecification: Yup.array().of(productSpecificationSchema),
  //     paymentTerms: paymentTermsSchema,
  //     officeUseOnly: officeUseOnlySchema,
});
const wc = ae().shape({
  address1: O().required("Address Line 1 is required"),
  address2: O().nullable(),
  location: O().required("Location is required"),
  city: O().required("City is required"),
  state: O().required("State is required"),
  pincode: O().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
ae().shape({
  companyName: O().required("Party Name is required"),
  category: O().required("Please select category of vendor"),
  subcategory: O().required("Please select subcategory of vendor"),
  inFandVBusinessSince: O(),
  dateOfIncorporation: O(),
  officeAddress: wc,
  officeContactNo: O().matches(/^\d{10}$/, "Contact number must be 10 digits")
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
ae().shape({
  farmerfName: O().required("First Name is required"),
  farmermName: O().notRequired(),
  farmerlName: O().required("Last Name is required"),
  residensialAddress: wc,
  primaryMobileNo: O().required("Contact No is required")
});
ae().shape({
  unit: O().required("UOM name is required"),
  abbreviation: O().required("Abbreviation of UOM is required")
});
ae().shape({
  conversionFactor: Je().required("Conversion factor is required").positive("Conversion factor cannot be negative."),
  fromUOM: O().required("UOM name is required"),
  toUOM: O().required("UOM name is required")
});
const Pr = {
  black: "#000",
  white: "#fff"
}, Yt = {
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
}, Qt = {
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
}, Jt = {
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
}, Xt = {
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
}, Zt = {
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
}, br = {
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
}, pm = {
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
function Rt(t) {
  let e = "https://mui.com/production-error/?code=" + t;
  for (let r = 1; r < arguments.length; r += 1)
    e += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + t + "; visit " + e + " for the full message.";
}
var ts = { exports: {} }, rn = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra;
function hm() {
  if (ra) return se;
  ra = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, g = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, b = t ? Symbol.for("react.fundamental") : 60117, A = t ? Symbol.for("react.responder") : 60118, k = t ? Symbol.for("react.scope") : 60119;
  function S(E) {
    if (typeof E == "object" && E !== null) {
      var q = E.$$typeof;
      switch (q) {
        case e:
          switch (E = E.type, E) {
            case c:
            case l:
            case n:
            case s:
            case i:
            case d:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case a:
                case f:
                case g:
                case w:
                case o:
                  return E;
                default:
                  return q;
              }
          }
        case r:
          return q;
      }
    }
  }
  function P(E) {
    return S(E) === l;
  }
  return se.AsyncMode = c, se.ConcurrentMode = l, se.ContextConsumer = a, se.ContextProvider = o, se.Element = e, se.ForwardRef = f, se.Fragment = n, se.Lazy = g, se.Memo = w, se.Portal = r, se.Profiler = s, se.StrictMode = i, se.Suspense = d, se.isAsyncMode = function(E) {
    return P(E) || S(E) === c;
  }, se.isConcurrentMode = P, se.isContextConsumer = function(E) {
    return S(E) === a;
  }, se.isContextProvider = function(E) {
    return S(E) === o;
  }, se.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === e;
  }, se.isForwardRef = function(E) {
    return S(E) === f;
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
    return typeof E == "string" || typeof E == "function" || E === n || E === l || E === s || E === i || E === d || E === h || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === w || E.$$typeof === o || E.$$typeof === a || E.$$typeof === f || E.$$typeof === b || E.$$typeof === A || E.$$typeof === k || E.$$typeof === v);
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
var na;
function mm() {
  return na || (na = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, g = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, b = t ? Symbol.for("react.fundamental") : 60117, A = t ? Symbol.for("react.responder") : 60118, k = t ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === l || M === s || M === i || M === d || M === h || typeof M == "object" && M !== null && (M.$$typeof === g || M.$$typeof === w || M.$$typeof === o || M.$$typeof === a || M.$$typeof === f || M.$$typeof === b || M.$$typeof === A || M.$$typeof === k || M.$$typeof === v);
    }
    function P(M) {
      if (typeof M == "object" && M !== null) {
        var ke = M.$$typeof;
        switch (ke) {
          case e:
            var zt = M.type;
            switch (zt) {
              case c:
              case l:
              case n:
              case s:
              case i:
              case d:
                return zt;
              default:
                var Vr = zt && zt.$$typeof;
                switch (Vr) {
                  case a:
                  case f:
                  case g:
                  case w:
                  case o:
                    return Vr;
                  default:
                    return ke;
                }
            }
          case r:
            return ke;
        }
      }
    }
    var E = c, q = l, G = a, j = o, p = e, V = f, L = n, Z = g, Oe = w, me = r, be = s, ye = i, H = d, Ge = !1;
    function mt(M) {
      return Ge || (Ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(M) || P(M) === c;
    }
    function N(M) {
      return P(M) === l;
    }
    function y(M) {
      return P(M) === a;
    }
    function x(M) {
      return P(M) === o;
    }
    function I(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function F(M) {
      return P(M) === f;
    }
    function U(M) {
      return P(M) === n;
    }
    function z(M) {
      return P(M) === g;
    }
    function W(M) {
      return P(M) === w;
    }
    function K(M) {
      return P(M) === r;
    }
    function Y(M) {
      return P(M) === s;
    }
    function J(M) {
      return P(M) === i;
    }
    function Ae(M) {
      return P(M) === d;
    }
    oe.AsyncMode = E, oe.ConcurrentMode = q, oe.ContextConsumer = G, oe.ContextProvider = j, oe.Element = p, oe.ForwardRef = V, oe.Fragment = L, oe.Lazy = Z, oe.Memo = Oe, oe.Portal = me, oe.Profiler = be, oe.StrictMode = ye, oe.Suspense = H, oe.isAsyncMode = mt, oe.isConcurrentMode = N, oe.isContextConsumer = y, oe.isContextProvider = x, oe.isElement = I, oe.isForwardRef = F, oe.isFragment = U, oe.isLazy = z, oe.isMemo = W, oe.isPortal = K, oe.isProfiler = Y, oe.isStrictMode = J, oe.isSuspense = Ae, oe.isValidElementType = S, oe.typeOf = P;
  }()), oe;
}
var ia;
function Ec() {
  return ia || (ia = 1, process.env.NODE_ENV === "production" ? rn.exports = hm() : rn.exports = mm()), rn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var wi, sa;
function ym() {
  if (sa) return wi;
  sa = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
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
      var c = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return wi = i() ? Object.assign : function(s, o) {
    for (var a, c = n(s), l, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var d in a)
        e.call(a, d) && (c[d] = a[d]);
      if (t) {
        l = t(a);
        for (var h = 0; h < l.length; h++)
          r.call(a, l[h]) && (c[l[h]] = a[l[h]]);
      }
    }
    return c;
  }, wi;
}
var Ei, oa;
function bs() {
  if (oa) return Ei;
  oa = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ei = t, Ei;
}
var Si, aa;
function Sc() {
  return aa || (aa = 1, Si = Function.call.bind(Object.prototype.hasOwnProperty)), Si;
}
var Oi, ua;
function gm() {
  if (ua) return Oi;
  ua = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = bs(), r = {}, n = Sc();
    t = function(s) {
      var o = "Warning: " + s;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(s, o, a, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in s)
        if (n(s, f)) {
          var d;
          try {
            if (typeof s[f] != "function") {
              var h = Error(
                (c || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = s[f](o, f, c, a, null, e);
          } catch (g) {
            d = g;
          }
          if (d && !(d instanceof Error) && t(
            (c || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var w = l ? l() : "";
            t(
              "Failed " + a + " type: " + d.message + (w ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Oi = i, Oi;
}
var _i, ca;
function bm() {
  if (ca) return _i;
  ca = 1;
  var t = Ec(), e = ym(), r = bs(), n = Sc(), i = gm(), s = function() {
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
  return _i = function(a, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(N) {
      var y = N && (l && N[l] || N[f]);
      if (typeof y == "function")
        return y;
    }
    var h = "<<anonymous>>", w = {
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
      element: P(),
      elementType: E(),
      instanceOf: q,
      node: V(),
      objectOf: j,
      oneOf: G,
      oneOfType: p,
      shape: Z,
      exact: Oe
    };
    function g(N, y) {
      return N === y ? N !== 0 || 1 / N === 1 / y : N !== N && y !== y;
    }
    function v(N, y) {
      this.message = N, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function b(N) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, x = 0;
      function I(U, z, W, K, Y, J, Ae) {
        if (K = K || h, J = J || W, Ae !== r) {
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
        return z[W] == null ? U ? z[W] === null ? new v("The " + Y + " `" + J + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new v("The " + Y + " `" + J + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : N(z, W, K, Y, J);
      }
      var F = I.bind(null, !1);
      return F.isRequired = I.bind(null, !0), F;
    }
    function A(N) {
      function y(x, I, F, U, z, W) {
        var K = x[I], Y = ye(K);
        if (Y !== N) {
          var J = H(K);
          return new v(
            "Invalid " + U + " `" + z + "` of type " + ("`" + J + "` supplied to `" + F + "`, expected ") + ("`" + N + "`."),
            { expectedType: N }
          );
        }
        return null;
      }
      return b(y);
    }
    function k() {
      return b(o);
    }
    function S(N) {
      function y(x, I, F, U, z) {
        if (typeof N != "function")
          return new v("Property `" + z + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var W = x[I];
        if (!Array.isArray(W)) {
          var K = ye(W);
          return new v("Invalid " + U + " `" + z + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected an array."));
        }
        for (var Y = 0; Y < W.length; Y++) {
          var J = N(W, Y, F, U, z + "[" + Y + "]", r);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return b(y);
    }
    function P() {
      function N(y, x, I, F, U) {
        var z = y[x];
        if (!a(z)) {
          var W = ye(z);
          return new v("Invalid " + F + " `" + U + "` of type " + ("`" + W + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(N);
    }
    function E() {
      function N(y, x, I, F, U) {
        var z = y[x];
        if (!t.isValidElementType(z)) {
          var W = ye(z);
          return new v("Invalid " + F + " `" + U + "` of type " + ("`" + W + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(N);
    }
    function q(N) {
      function y(x, I, F, U, z) {
        if (!(x[I] instanceof N)) {
          var W = N.name || h, K = mt(x[I]);
          return new v("Invalid " + U + " `" + z + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return b(y);
    }
    function G(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), o;
      function y(x, I, F, U, z) {
        for (var W = x[I], K = 0; K < N.length; K++)
          if (g(W, N[K]))
            return null;
        var Y = JSON.stringify(N, function(Ae, M) {
          var ke = H(M);
          return ke === "symbol" ? String(M) : M;
        });
        return new v("Invalid " + U + " `" + z + "` of value `" + String(W) + "` " + ("supplied to `" + F + "`, expected one of " + Y + "."));
      }
      return b(y);
    }
    function j(N) {
      function y(x, I, F, U, z) {
        if (typeof N != "function")
          return new v("Property `" + z + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var W = x[I], K = ye(W);
        if (K !== "object")
          return new v("Invalid " + U + " `" + z + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected an object."));
        for (var Y in W)
          if (n(W, Y)) {
            var J = N(W, Y, F, U, z + "." + Y, r);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return b(y);
    }
    function p(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var y = 0; y < N.length; y++) {
        var x = N[y];
        if (typeof x != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ge(x) + " at index " + y + "."
          ), o;
      }
      function I(F, U, z, W, K) {
        for (var Y = [], J = 0; J < N.length; J++) {
          var Ae = N[J], M = Ae(F, U, z, W, K, r);
          if (M == null)
            return null;
          M.data && n(M.data, "expectedType") && Y.push(M.data.expectedType);
        }
        var ke = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new v("Invalid " + W + " `" + K + "` supplied to " + ("`" + z + "`" + ke + "."));
      }
      return b(I);
    }
    function V() {
      function N(y, x, I, F, U) {
        return me(y[x]) ? null : new v("Invalid " + F + " `" + U + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return b(N);
    }
    function L(N, y, x, I, F) {
      return new v(
        (N || "React class") + ": " + y + " type `" + x + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function Z(N) {
      function y(x, I, F, U, z) {
        var W = x[I], K = ye(W);
        if (K !== "object")
          return new v("Invalid " + U + " `" + z + "` of type `" + K + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var Y in N) {
          var J = N[Y];
          if (typeof J != "function")
            return L(F, U, z, Y, H(J));
          var Ae = J(W, Y, F, U, z + "." + Y, r);
          if (Ae)
            return Ae;
        }
        return null;
      }
      return b(y);
    }
    function Oe(N) {
      function y(x, I, F, U, z) {
        var W = x[I], K = ye(W);
        if (K !== "object")
          return new v("Invalid " + U + " `" + z + "` of type `" + K + "` " + ("supplied to `" + F + "`, expected `object`."));
        var Y = e({}, x[I], N);
        for (var J in Y) {
          var Ae = N[J];
          if (n(N, J) && typeof Ae != "function")
            return L(F, U, z, J, H(Ae));
          if (!Ae)
            return new v(
              "Invalid " + U + " `" + z + "` key `" + J + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(x[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var M = Ae(W, J, F, U, z + "." + J, r);
          if (M)
            return M;
        }
        return null;
      }
      return b(y);
    }
    function me(N) {
      switch (typeof N) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !N;
        case "object":
          if (Array.isArray(N))
            return N.every(me);
          if (N === null || a(N))
            return !0;
          var y = d(N);
          if (y) {
            var x = y.call(N), I;
            if (y !== N.entries) {
              for (; !(I = x.next()).done; )
                if (!me(I.value))
                  return !1;
            } else
              for (; !(I = x.next()).done; ) {
                var F = I.value;
                if (F && !me(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function be(N, y) {
      return N === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function ye(N) {
      var y = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : be(y, N) ? "symbol" : y;
    }
    function H(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var y = ye(N);
      if (y === "object") {
        if (N instanceof Date)
          return "date";
        if (N instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function Ge(N) {
      var y = H(N);
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
    function mt(N) {
      return !N.constructor || !N.constructor.name ? h : N.constructor.name;
    }
    return w.checkPropTypes = i, w.resetWarningCache = i.resetWarningCache, w.PropTypes = w, w;
  }, _i;
}
var Ci, la;
function vm() {
  if (la) return Ci;
  la = 1;
  var t = bs();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, Ci = function() {
    function n(o, a, c, l, f, d) {
      if (d !== t) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
      resetWarningCache: e
    };
    return s.PropTypes = s, s;
  }, Ci;
}
if (process.env.NODE_ENV !== "production") {
  var wm = Ec(), Em = !0;
  ts.exports = bm()(wm.isElement, Em);
} else
  ts.exports = vm()();
var Sm = ts.exports;
const vr = /* @__PURE__ */ is(Sm);
function Et(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function Oc(t) {
  if (!Et(t))
    return t;
  const e = {};
  return Object.keys(t).forEach((r) => {
    e[r] = Oc(t[r]);
  }), e;
}
function We(t, e, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...t
  } : t;
  return Et(t) && Et(e) && Object.keys(e).forEach((i) => {
    Et(e[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(t, i) && Et(t[i]) ? n[i] = We(t[i], e[i], r) : r.clone ? n[i] = Et(e[i]) ? Oc(e[i]) : e[i] : n[i] = e[i];
  }), n;
}
const Om = (t) => {
  const e = Object.keys(t).map((r) => ({
    key: r,
    val: t[r]
  })) || [];
  return e.sort((r, n) => r.val - n.val), e.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function _m(t) {
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
  } = t, s = Om(e), o = Object.keys(s);
  function a(h) {
    return `@media (min-width:${typeof e[h] == "number" ? e[h] : h}${r})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof e[h] == "number" ? e[h] : h) - n / 100}${r})`;
  }
  function l(h, w) {
    const g = o.indexOf(w);
    return `@media (min-width:${typeof e[h] == "number" ? e[h] : h}${r}) and (max-width:${(g !== -1 && typeof e[o[g]] == "number" ? e[o[g]] : w) - n / 100}${r})`;
  }
  function f(h) {
    return o.indexOf(h) + 1 < o.length ? l(h, o[o.indexOf(h) + 1]) : a(h);
  }
  function d(h) {
    const w = o.indexOf(h);
    return w === 0 ? a(o[1]) : w === o.length - 1 ? c(o[w]) : l(h, o[o.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: o,
    values: s,
    up: a,
    down: c,
    between: l,
    only: f,
    not: d,
    unit: r,
    ...i
  };
}
function Cm(t, e) {
  if (!t.containerQueries)
    return e;
  const r = Object.keys(e).filter((n) => n.startsWith("@container")).sort((n, i) => {
    var o, a;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((o = n.match(s)) == null ? void 0 : o[1]) || 0) - +(((a = i.match(s)) == null ? void 0 : a[1]) || 0);
  });
  return r.length ? r.reduce((n, i) => {
    const s = e[i];
    return delete n[i], n[i] = s, n;
  }, {
    ...e
  }) : e;
}
function Tm(t, e) {
  return e === "@" || e.startsWith("@") && (t.some((r) => e.startsWith(`@${r}`)) || !!e.match(/^@\d/));
}
function Rm(t, e) {
  const r = e.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${e})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Rt(18, `(${e})`));
    return null;
  }
  const [, n, i] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return t.containerQueries(i).up(s);
}
function xm(t) {
  const e = (s, o) => s.replace("@media", o ? `@container ${o}` : "@container");
  function r(s, o) {
    s.up = (...a) => e(t.breakpoints.up(...a), o), s.down = (...a) => e(t.breakpoints.down(...a), o), s.between = (...a) => e(t.breakpoints.between(...a), o), s.only = (...a) => e(t.breakpoints.only(...a), o), s.not = (...a) => {
      const c = e(t.breakpoints.not(...a), o);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, i = (s) => (r(n, s), n);
  return r(i), {
    ...t,
    containerQueries: i
  };
}
const Am = {
  borderRadius: 4
}, At = process.env.NODE_ENV !== "production" ? vr.oneOfType([vr.number, vr.string, vr.object, vr.array]) : {};
function _r(t, e) {
  return e ? We(t, e, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : t;
}
const Fn = {
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
}, fa = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (t) => `@media (min-width:${Fn[t]}px)`
}, Pm = {
  containerQueries: (t) => ({
    up: (e) => {
      let r = typeof e == "number" ? e : Fn[e] || e;
      return typeof r == "number" && (r = `${r}px`), t ? `@container ${t} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function ht(t, e, r) {
  const n = t.theme || {};
  if (Array.isArray(e)) {
    const s = n.breakpoints || fa;
    return e.reduce((o, a, c) => (o[s.up(s.keys[c])] = r(e[c]), o), {});
  }
  if (typeof e == "object") {
    const s = n.breakpoints || fa;
    return Object.keys(e).reduce((o, a) => {
      if (Tm(s.keys, a)) {
        const c = Rm(n.containerQueries ? n : Pm, a);
        c && (o[c] = r(e[a], a));
      } else if (Object.keys(s.values || Fn).includes(a)) {
        const c = s.up(a);
        o[c] = r(e[a], a);
      } else {
        const c = a;
        o[c] = e[c];
      }
      return o;
    }, {});
  }
  return r(e);
}
function Dm(t = {}) {
  var r;
  return ((r = t.keys) == null ? void 0 : r.reduce((n, i) => {
    const s = t.up(i);
    return n[s] = {}, n;
  }, {})) || {};
}
function km(t, e) {
  return t.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, e);
}
function _c(t) {
  if (typeof t != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Rt(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function In(t, e, r = !0) {
  if (!e || typeof e != "string")
    return null;
  if (t && t.vars && r) {
    const n = `vars.${e}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, t);
    if (n != null)
      return n;
  }
  return e.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, t);
}
function vn(t, e, r, n = r) {
  let i;
  return typeof t == "function" ? i = t(r) : Array.isArray(t) ? i = t[r] || n : i = In(t, r) || n, e && (i = e(i, n, t)), i;
}
function Ce(t) {
  const {
    prop: e,
    cssProperty: r = t.prop,
    themeKey: n,
    transform: i
  } = t, s = (o) => {
    if (o[e] == null)
      return null;
    const a = o[e], c = o.theme, l = In(c, n) || {};
    return ht(o, a, (d) => {
      let h = vn(l, i, d);
      return d === h && typeof d == "string" && (h = vn(l, i, `${e}${d === "default" ? "" : _c(d)}`, d)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [e]: At
  } : {}, s.filterProps = [e], s;
}
function Nm(t) {
  const e = {};
  return (r) => (e[r] === void 0 && (e[r] = t(r)), e[r]);
}
const $m = {
  m: "margin",
  p: "padding"
}, qm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, da = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Fm = Nm((t) => {
  if (t.length > 2)
    if (da[t])
      t = da[t];
    else
      return [t];
  const [e, r] = t.split(""), n = $m[e], i = qm[r] || "";
  return Array.isArray(i) ? i.map((s) => n + s) : [n + i];
}), Mn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], jn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Im = [...Mn, ...jn];
function Mr(t, e, r, n) {
  const i = In(t, e, !0) ?? r;
  return typeof i == "number" || typeof i == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), typeof i == "string" ? `calc(${s} * ${i})` : i * s) : Array.isArray(i) ? (s) => {
    if (typeof s == "string")
      return s;
    const o = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(o) ? o > i.length - 1 && console.error([`MUI: The value provided (${o}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${o} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${e}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${e}\` as a number.`].join(`
`)));
    const a = i[o];
    return s >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${e}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function vs(t) {
  return Mr(t, "spacing", 8, "spacing");
}
function jr(t, e) {
  return typeof e == "string" || e == null ? e : t(e);
}
function Mm(t, e) {
  return (r) => t.reduce((n, i) => (n[i] = jr(e, r), n), {});
}
function jm(t, e, r, n) {
  if (!e.includes(r))
    return null;
  const i = Fm(r), s = Mm(i, n), o = t[r];
  return ht(t, o, s);
}
function Cc(t, e) {
  const r = vs(t.theme);
  return Object.keys(t).map((n) => jm(t, e, n, r)).reduce(_r, {});
}
function ve(t) {
  return Cc(t, Mn);
}
ve.propTypes = process.env.NODE_ENV !== "production" ? Mn.reduce((t, e) => (t[e] = At, t), {}) : {};
ve.filterProps = Mn;
function we(t) {
  return Cc(t, jn);
}
we.propTypes = process.env.NODE_ENV !== "production" ? jn.reduce((t, e) => (t[e] = At, t), {}) : {};
we.filterProps = jn;
process.env.NODE_ENV !== "production" && Im.reduce((t, e) => (t[e] = At, t), {});
function Tc(t = 8, e = vs({
  spacing: t
})) {
  if (t.mui)
    return t;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const o = e(s);
    return typeof o == "number" ? `${o}px` : o;
  }).join(" "));
  return r.mui = !0, r;
}
function Vn(...t) {
  const e = t.reduce((n, i) => (i.filterProps.forEach((s) => {
    n[s] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, s) => e[s] ? _r(i, e[s](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? t.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = t.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function Qe(t) {
  return typeof t != "number" ? t : `${t}px solid`;
}
function Xe(t, e) {
  return Ce({
    prop: t,
    themeKey: "borders",
    transform: e
  });
}
const Vm = Xe("border", Qe), Lm = Xe("borderTop", Qe), Um = Xe("borderRight", Qe), Bm = Xe("borderBottom", Qe), zm = Xe("borderLeft", Qe), Wm = Xe("borderColor"), Hm = Xe("borderTopColor"), Km = Xe("borderRightColor"), Gm = Xe("borderBottomColor"), Ym = Xe("borderLeftColor"), Qm = Xe("outline", Qe), Jm = Xe("outlineColor"), Ln = (t) => {
  if (t.borderRadius !== void 0 && t.borderRadius !== null) {
    const e = Mr(t.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: jr(e, n)
    });
    return ht(t, t.borderRadius, r);
  }
  return null;
};
Ln.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: At
} : {};
Ln.filterProps = ["borderRadius"];
Vn(Vm, Lm, Um, Bm, zm, Wm, Hm, Km, Gm, Ym, Ln, Qm, Jm);
const Un = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const e = Mr(t.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: jr(e, n)
    });
    return ht(t, t.gap, r);
  }
  return null;
};
Un.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: At
} : {};
Un.filterProps = ["gap"];
const Bn = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const e = Mr(t.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: jr(e, n)
    });
    return ht(t, t.columnGap, r);
  }
  return null;
};
Bn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: At
} : {};
Bn.filterProps = ["columnGap"];
const zn = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const e = Mr(t.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: jr(e, n)
    });
    return ht(t, t.rowGap, r);
  }
  return null;
};
zn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: At
} : {};
zn.filterProps = ["rowGap"];
const Xm = Ce({
  prop: "gridColumn"
}), Zm = Ce({
  prop: "gridRow"
}), ey = Ce({
  prop: "gridAutoFlow"
}), ty = Ce({
  prop: "gridAutoColumns"
}), ry = Ce({
  prop: "gridAutoRows"
}), ny = Ce({
  prop: "gridTemplateColumns"
}), iy = Ce({
  prop: "gridTemplateRows"
}), sy = Ce({
  prop: "gridTemplateAreas"
}), oy = Ce({
  prop: "gridArea"
});
Vn(Un, Bn, zn, Xm, Zm, ey, ty, ry, ny, iy, sy, oy);
function tr(t, e) {
  return e === "grey" ? e : t;
}
const ay = Ce({
  prop: "color",
  themeKey: "palette",
  transform: tr
}), uy = Ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: tr
}), cy = Ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: tr
});
Vn(ay, uy, cy);
function Be(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const ly = Ce({
  prop: "width",
  transform: Be
}), ws = (t) => {
  if (t.maxWidth !== void 0 && t.maxWidth !== null) {
    const e = (r) => {
      var i, s, o, a, c;
      const n = ((o = (s = (i = t.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : s.values) == null ? void 0 : o[r]) || Fn[r];
      return n ? ((c = (a = t.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
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
ws.filterProps = ["maxWidth"];
const fy = Ce({
  prop: "minWidth",
  transform: Be
}), dy = Ce({
  prop: "height",
  transform: Be
}), py = Ce({
  prop: "maxHeight",
  transform: Be
}), hy = Ce({
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
const my = Ce({
  prop: "boxSizing"
});
Vn(ly, ws, fy, dy, py, hy, my);
const Wn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Qe
  },
  borderTop: {
    themeKey: "borders",
    transform: Qe
  },
  borderRight: {
    themeKey: "borders",
    transform: Qe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Qe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Qe
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
    transform: Qe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ln
  },
  // palette
  color: {
    themeKey: "palette",
    transform: tr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: tr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: tr
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
    style: ve
  },
  mt: {
    style: ve
  },
  mr: {
    style: ve
  },
  mb: {
    style: ve
  },
  ml: {
    style: ve
  },
  mx: {
    style: ve
  },
  my: {
    style: ve
  },
  margin: {
    style: ve
  },
  marginTop: {
    style: ve
  },
  marginRight: {
    style: ve
  },
  marginBottom: {
    style: ve
  },
  marginLeft: {
    style: ve
  },
  marginX: {
    style: ve
  },
  marginY: {
    style: ve
  },
  marginInline: {
    style: ve
  },
  marginInlineStart: {
    style: ve
  },
  marginInlineEnd: {
    style: ve
  },
  marginBlock: {
    style: ve
  },
  marginBlockStart: {
    style: ve
  },
  marginBlockEnd: {
    style: ve
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
    style: Un
  },
  rowGap: {
    style: zn
  },
  columnGap: {
    style: Bn
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
    style: ws
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
function yy(...t) {
  const e = t.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(e);
  return t.every((n) => r.size === Object.keys(n).length);
}
function gy(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function by() {
  function t(r, n, i, s) {
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
      themeKey: l,
      transform: f,
      style: d
    } = a;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = In(i, l) || {};
    return d ? d(o) : ht(o, n, (g) => {
      let v = vn(h, f, g);
      return g === v && typeof g == "string" && (v = vn(h, f, `${r}${g === "default" ? "" : _c(g)}`, g)), c === !1 ? v : {
        [c]: v
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
    const s = i.unstable_sxConfig ?? Wn;
    function o(a) {
      let c = a;
      if (typeof a == "function")
        c = a(i);
      else if (typeof a != "object")
        return a;
      if (!c)
        return null;
      const l = Dm(i.breakpoints), f = Object.keys(l);
      let d = l;
      return Object.keys(c).forEach((h) => {
        const w = gy(c[h], i);
        if (w != null)
          if (typeof w == "object")
            if (s[h])
              d = _r(d, t(h, w, i, s));
            else {
              const g = ht({
                theme: i
              }, w, (v) => ({
                [h]: v
              }));
              yy(g, w) ? d[h] = e({
                sx: w,
                theme: i
              }) : d = _r(d, g);
            }
          else
            d = _r(d, t(h, w, i, s));
      }), Cm(i, km(f, d));
    }
    return Array.isArray(n) ? n.map(o) : o(n);
  }
  return e;
}
const Hn = by();
Hn.filterProps = ["sx"];
function vy(t, e) {
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
function wy(t = {}, ...e) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: s = {},
    ...o
  } = t, a = _m(r), c = Tc(i);
  let l = We({
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
      ...Am,
      ...s
    }
  }, o);
  return l = xm(l), l.applyStyles = vy, l = e.reduce((f, d) => We(f, d), l), l.unstable_sxConfig = {
    ...Wn,
    ...o == null ? void 0 : o.unstable_sxConfig
  }, l.unstable_sx = function(d) {
    return Hn({
      sx: d,
      theme: this
    });
  }, l;
}
const pa = (t) => t, Ey = () => {
  let t = pa;
  return {
    configure(e) {
      t = e;
    },
    generate(e) {
      return t(e);
    },
    reset() {
      t = pa;
    }
  };
}, Sy = Ey(), Oy = {
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
function _y(t, e, r = "Mui") {
  const n = Oy[e];
  return n ? `${r}-${n}` : `${Sy.generate(t)}-${e}`;
}
function Cy(t, e = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(e, Math.min(t, r));
}
function Es(t, e = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (t < e || t > r) && console.error(`MUI: The value provided ${t} is out of range [${e}, ${r}].`), Cy(t, e, r);
}
function Ty(t) {
  t = t.slice(1);
  const e = new RegExp(`.{1,${t.length >= 6 ? 2 : 1}}`, "g");
  let r = t.match(e);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function xt(t) {
  if (t.type)
    return t;
  if (t.charAt(0) === "#")
    return xt(Ty(t));
  const e = t.indexOf("("), r = t.substring(0, e);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${t}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Rt(9, t));
  let n = t.substring(e + 1, t.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Rt(10, i));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const Ry = (t) => {
  const e = xt(t);
  return e.values.slice(0, 3).map((r, n) => e.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Sr = (t, e) => {
  try {
    return Ry(t);
  } catch {
    return e && process.env.NODE_ENV !== "production" && console.warn(e), t;
  }
};
function Kn(t) {
  const {
    type: e,
    colorSpace: r
  } = t;
  let {
    values: n
  } = t;
  return e.includes("rgb") ? n = n.map((i, s) => s < 3 ? parseInt(i, 10) : i) : e.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), e.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${e}(${n})`;
}
function Rc(t) {
  t = xt(t);
  const {
    values: e
  } = t, r = e[0], n = e[1] / 100, i = e[2] / 100, s = n * Math.min(i, 1 - i), o = (l, f = (l + r / 30) % 12) => i - s * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const c = [Math.round(o(0) * 255), Math.round(o(8) * 255), Math.round(o(4) * 255)];
  return t.type === "hsla" && (a += "a", c.push(e[3])), Kn({
    type: a,
    values: c
  });
}
function rs(t) {
  t = xt(t);
  let e = t.type === "hsl" || t.type === "hsla" ? xt(Rc(t)).values : t.values;
  return e = e.map((r) => (t.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
}
function ha(t, e) {
  const r = rs(t), n = rs(e);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function xy(t, e) {
  return t = xt(t), e = Es(e), (t.type === "rgb" || t.type === "hsl") && (t.type += "a"), t.type === "color" ? t.values[3] = `/${e}` : t.values[3] = e, Kn(t);
}
function nn(t, e, r) {
  try {
    return xy(t, e);
  } catch {
    return t;
  }
}
function Ss(t, e) {
  if (t = xt(t), e = Es(e), t.type.includes("hsl"))
    t.values[2] *= 1 - e;
  else if (t.type.includes("rgb") || t.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      t.values[r] *= 1 - e;
  return Kn(t);
}
function ce(t, e, r) {
  try {
    return Ss(t, e);
  } catch {
    return t;
  }
}
function Os(t, e) {
  if (t = xt(t), e = Es(e), t.type.includes("hsl"))
    t.values[2] += (100 - t.values[2]) * e;
  else if (t.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      t.values[r] += (255 - t.values[r]) * e;
  else if (t.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      t.values[r] += (1 - t.values[r]) * e;
  return Kn(t);
}
function le(t, e, r) {
  try {
    return Os(t, e);
  } catch {
    return t;
  }
}
function Ay(t, e = 0.15) {
  return rs(t) > 0.5 ? Ss(t, e) : Os(t, e);
}
function sn(t, e, r) {
  try {
    return Ay(t, e);
  } catch {
    return t;
  }
}
function Py(t = "") {
  function e(...n) {
    if (!n.length)
      return "";
    const i = n[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${t ? `${t}-` : ""}${i}${e(...n.slice(1))})` : `, ${i}`;
  }
  return (n, ...i) => `var(--${t ? `${t}-` : ""}${n}${e(...i)})`;
}
const ma = (t, e, r, n = []) => {
  let i = t;
  e.forEach((s, o) => {
    o === e.length - 1 ? Array.isArray(i) ? i[Number(s)] = r : i && typeof i == "object" && (i[s] = r) : i && typeof i == "object" && (i[s] || (i[s] = n.includes(s) ? [] : {}), i = i[s]);
  });
}, Dy = (t, e, r) => {
  function n(i, s = [], o = []) {
    Object.entries(i).forEach(([a, c]) => {
      (!r || r && !r([...s, a])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...s, a], Array.isArray(c) ? [...o, a] : o) : e([...s, a], c, o));
    });
  }
  n(t);
}, ky = (t, e) => typeof e == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => t.includes(n)) || t[t.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
function Ti(t, e) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = e || {}, i = {}, s = {}, o = {};
  return Dy(
    t,
    (a, c, l) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(a, c))) {
        const f = `--${r ? `${r}-` : ""}${a.join("-")}`, d = ky(a, c);
        Object.assign(i, {
          [f]: d
        }), ma(s, a, `var(${f})`, l), ma(o, a, `var(${f}, ${d})`, l);
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
function Ny(t, e = {}) {
  const {
    getSelector: r = b,
    disableCssColorScheme: n,
    colorSchemeSelector: i
  } = e, {
    colorSchemes: s = {},
    components: o,
    defaultColorScheme: a = "light",
    ...c
  } = t, {
    vars: l,
    css: f,
    varsWithDefaults: d
  } = Ti(c, e);
  let h = d;
  const w = {}, {
    [a]: g,
    ...v
  } = s;
  if (Object.entries(v || {}).forEach(([S, P]) => {
    const {
      vars: E,
      css: q,
      varsWithDefaults: G
    } = Ti(P, e);
    h = We(h, G), w[S] = {
      css: q,
      vars: E
    };
  }), g) {
    const {
      css: S,
      vars: P,
      varsWithDefaults: E
    } = Ti(g, e);
    h = We(h, E), w[a] = {
      css: S,
      vars: P
    };
  }
  function b(S, P) {
    var q, G;
    let E = i;
    if (i === "class" && (E = ".%s"), i === "data" && (E = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (E = `[${i}="%s"]`), S) {
      if (E === "media")
        return t.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((G = (q = s[S]) == null ? void 0 : q.palette) == null ? void 0 : G.mode) || S})`]: {
            ":root": P
          }
        };
      if (E)
        return t.defaultColorScheme === S ? `:root, ${E.replace("%s", String(S))}` : E.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let S = {
        ...l
      };
      return Object.entries(w).forEach(([, {
        vars: P
      }]) => {
        S = We(S, P);
      }), S;
    },
    generateStyleSheets: () => {
      var j, p;
      const S = [], P = t.defaultColorScheme || "light";
      function E(V, L) {
        Object.keys(L).length && S.push(typeof V == "string" ? {
          [V]: {
            ...L
          }
        } : V);
      }
      E(r(void 0, {
        ...f
      }), f);
      const {
        [P]: q,
        ...G
      } = w;
      if (q) {
        const {
          css: V
        } = q, L = (p = (j = s[P]) == null ? void 0 : j.palette) == null ? void 0 : p.mode, Z = !n && L ? {
          colorScheme: L,
          ...V
        } : {
          ...V
        };
        E(r(P, {
          ...Z
        }), Z);
      }
      return Object.entries(G).forEach(([V, {
        css: L
      }]) => {
        var me, be;
        const Z = (be = (me = s[V]) == null ? void 0 : me.palette) == null ? void 0 : be.mode, Oe = !n && Z ? {
          colorScheme: Z,
          ...L
        } : {
          ...L
        };
        E(r(V, {
          ...Oe
        }), Oe);
      }), S;
    }
  };
}
function $y(t) {
  return function(r) {
    return t === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : t ? t.startsWith("data-") && !t.includes("%s") ? `[${t}="${r}"] &` : t === "class" ? `.${r} &` : t === "data" ? `[data-${r}] &` : `${t.replace("%s", r)} &` : "&";
  };
}
const ya = {
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
    paper: Pr.white,
    default: Pr.white
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
}, Ri = {
  text: {
    primary: Pr.white,
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
    active: Pr.white,
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
function ga(t, e, r, n) {
  const i = n.light || n, s = n.dark || n * 1.5;
  t[e] || (t.hasOwnProperty(r) ? t[e] = t[r] : e === "light" ? t.light = Os(t.main, i) : e === "dark" && (t.dark = Ss(t.main, s)));
}
function qy(t = "light") {
  return t === "dark" ? {
    main: Jt[200],
    light: Jt[50],
    dark: Jt[400]
  } : {
    main: Jt[700],
    light: Jt[400],
    dark: Jt[800]
  };
}
function Fy(t = "light") {
  return t === "dark" ? {
    main: Qt[200],
    light: Qt[50],
    dark: Qt[400]
  } : {
    main: Qt[500],
    light: Qt[300],
    dark: Qt[700]
  };
}
function Iy(t = "light") {
  return t === "dark" ? {
    main: Yt[500],
    light: Yt[300],
    dark: Yt[700]
  } : {
    main: Yt[700],
    light: Yt[400],
    dark: Yt[800]
  };
}
function My(t = "light") {
  return t === "dark" ? {
    main: Xt[400],
    light: Xt[300],
    dark: Xt[700]
  } : {
    main: Xt[700],
    light: Xt[500],
    dark: Xt[900]
  };
}
function jy(t = "light") {
  return t === "dark" ? {
    main: Zt[400],
    light: Zt[300],
    dark: Zt[700]
  } : {
    main: Zt[800],
    light: Zt[500],
    dark: Zt[900]
  };
}
function Vy(t = "light") {
  return t === "dark" ? {
    main: br[400],
    light: br[300],
    dark: br[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: br[500],
    dark: br[900]
  };
}
function _s(t) {
  const {
    mode: e = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...i
  } = t, s = t.primary || qy(e), o = t.secondary || Fy(e), a = t.error || Iy(e), c = t.info || My(e), l = t.success || jy(e), f = t.warning || Vy(e);
  function d(v) {
    const b = ha(v, Ri.text.primary) >= r ? Ri.text.primary : ya.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const A = ha(v, b);
      A < 3 && console.error([`MUI: The contrast ratio of ${A}:1 for ${b} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return b;
  }
  const h = ({
    color: v,
    name: b,
    mainShade: A = 500,
    lightShade: k = 300,
    darkShade: S = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[A] && (v.main = v[A]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${A}\` property.` : Rt(11, b ? ` (${b})` : "", A));
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
} });` : Rt(12, b ? ` (${b})` : "", JSON.stringify(v.main)));
    return ga(v, "light", k, n), ga(v, "dark", S, n), v.contrastText || (v.contrastText = d(v.main)), v;
  }, w = {
    dark: Ri,
    light: ya
  };
  return process.env.NODE_ENV !== "production" && (w[e] || console.error(`MUI: The palette mode \`${e}\` is not supported.`)), We({
    // A collection of common colors.
    common: {
      ...Pr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: e,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: o,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: pm,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...w[e]
  }, i);
}
function Ly(t) {
  const e = {};
  return Object.entries(t).forEach((n) => {
    const [i, s] = n;
    typeof s == "object" && (e[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), e;
}
function Uy(t, e) {
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
function By(t) {
  return Math.round(t * 1e5) / 1e5;
}
const ba = {
  textTransform: "uppercase"
}, va = '"Roboto", "Helvetica", "Arial", sans-serif';
function zy(t, e) {
  const {
    fontFamily: r = va,
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
    allVariants: l,
    pxToRem: f,
    ...d
  } = typeof e == "function" ? e(t) : e;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, w = f || ((b) => `${b / c * h}rem`), g = (b, A, k, S, P) => ({
    fontFamily: r,
    fontWeight: b,
    fontSize: w(A),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === va ? {
      letterSpacing: `${By(S / A)}em`
    } : {},
    ...P,
    ...l
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
    button: g(o, 14, 1.75, 0.4, ba),
    caption: g(s, 12, 1.66, 0.4),
    overline: g(s, 12, 2.66, 1, ba),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return We({
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
const Wy = 0.2, Hy = 0.14, Ky = 0.12;
function he(...t) {
  return [`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${Wy})`, `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${Hy})`, `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${Ky})`].join(",");
}
const Gy = ["none", he(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), he(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), he(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), he(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), he(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), he(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), he(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), he(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), he(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), he(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), he(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), he(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), he(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), he(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), he(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), he(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), he(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), he(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), he(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), he(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), he(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), he(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), he(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), he(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Yy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Qy = {
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
function wa(t) {
  return `${Math.round(t)}ms`;
}
function Jy(t) {
  if (!t)
    return 0;
  const e = t / 36;
  return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
}
function Xy(t) {
  const e = {
    ...Yy,
    ...t.easing
  }, r = {
    ...Qy,
    ...t.duration
  };
  return {
    getAutoHeightDuration: Jy,
    create: (i = ["all"], s = {}) => {
      const {
        duration: o = r.standard,
        easing: a = e.easeInOut,
        delay: c = 0,
        ...l
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", d = (h) => !Number.isNaN(parseFloat(h));
        !f(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !d(o) && !f(o) && console.error(`MUI: Argument "duration" must be a number or a string but found ${o}.`), f(a) || console.error('MUI: Argument "easing" must be a string.'), !d(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((f) => `${f} ${typeof o == "string" ? o : wa(o)} ${a} ${typeof c == "string" ? c : wa(c)}`).join(",");
    },
    ...t,
    easing: e,
    duration: r
  };
}
const Zy = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ns(t = {}, ...e) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: i,
    palette: s = {},
    transitions: o = {},
    typography: a = {},
    shape: c,
    ...l
  } = t;
  if (t.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Rt(20));
  const f = _s(s), d = wy(t);
  let h = We(d, {
    mixins: Uy(d.breakpoints, n),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Gy.slice(),
    typography: zy(f, a),
    transitions: Xy(o),
    zIndex: {
      ...Zy
    }
  });
  if (h = We(h, l), h = e.reduce((w, g) => We(w, g), h), process.env.NODE_ENV !== "production") {
    const w = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], g = (v, b) => {
      let A;
      for (A in v) {
        const k = v[A];
        if (w.includes(A) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = _y("", A);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${A}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[A] = {};
        }
      }
    };
    Object.keys(h.components).forEach((v) => {
      const b = h.components[v].styleOverrides;
      b && v.startsWith("Mui") && g(b, v);
    });
  }
  return h.unstable_sxConfig = {
    ...Wn,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, h.unstable_sx = function(g) {
    return Hn({
      sx: g,
      theme: this
    });
  }, h;
}
function eg(t) {
  let e;
  return t < 1 ? e = 5.11916 * t ** 2 : e = 4.5 * Math.log(t + 1) + 2, Math.round(e * 10) / 1e3;
}
const tg = [...Array(25)].map((t, e) => {
  if (e === 0)
    return "none";
  const r = eg(e);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function xc(t) {
  return {
    inputPlaceholder: t === "dark" ? 0.5 : 0.42,
    inputUnderline: t === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: t === "dark" ? 0.2 : 0.12,
    switchTrack: t === "dark" ? 0.3 : 0.38
  };
}
function Ac(t) {
  return t === "dark" ? tg : [];
}
function rg(t) {
  const {
    palette: e = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...i
  } = t, s = _s(e);
  return {
    palette: s,
    opacity: {
      ...xc(s.mode),
      ...r
    },
    overlays: n || Ac(s.mode),
    ...i
  };
}
function ng(t) {
  var e;
  return !!t[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!t[0].match(/sxConfig$/) || // ends with sxConfig
  t[0] === "palette" && !!((e = t[1]) != null && e.match(/(mode|contrastThreshold|tonalOffset)/));
}
const ig = (t) => [...[...Array(25)].map((e, r) => `--${t ? `${t}-` : ""}overlays-${r}`), `--${t ? `${t}-` : ""}palette-AppBar-darkBg`, `--${t ? `${t}-` : ""}palette-AppBar-darkColor`], sg = (t) => (e, r) => {
  const n = t.colorSchemeSelector;
  let i = n;
  if (n === "class" && (i = ".%s"), n === "data" && (i = "[data-%s]"), n != null && n.startsWith("data-") && !n.includes("%s") && (i = `[${n}="%s"]`), t.defaultColorScheme === e) {
    if (e === "dark") {
      const s = {};
      return ig(t.cssVarPrefix).forEach((o) => {
        s[o] = r[o], delete r[o];
      }), i === "media" ? {
        ":root": r,
        "@media (prefers-color-scheme: dark)": {
          ":root": s
        }
      } : i ? {
        [i.replace("%s", e)]: s,
        [`:root, ${i.replace("%s", e)}`]: r
      } : {
        ":root": {
          ...r,
          ...s
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
function og(t) {
  return Et(t) || typeof t > "u" || typeof t == "string" || typeof t == "boolean" || typeof t == "number" || Array.isArray(t);
}
function ag(t = {}) {
  const e = {
    ...t
  };
  function r(n) {
    const i = Object.entries(n);
    for (let s = 0; s < i.length; s++) {
      const [o, a] = i[s];
      !og(a) || o.startsWith("unstable_") ? delete n[o] : Et(a) && (n[o] = {
        ...a
      }, r(n[o]));
    }
  }
  return r(e), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ug(t, e) {
  e.forEach((r) => {
    t[r] || (t[r] = {});
  });
}
function R(t, e, r) {
  !t[e] && r && (t[e] = r);
}
function Or(t) {
  return !t || !t.startsWith("hsl") ? t : Rc(t);
}
function lt(t, e) {
  `${e}Channel` in t || (t[`${e}Channel`] = Sr(Or(t[e]), `MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function cg(t) {
  return typeof t == "number" ? `${t}px` : typeof t == "string" || typeof t == "function" || Array.isArray(t) ? t : "8px";
}
const nt = (t) => {
  try {
    return t();
  } catch {
  }
}, lg = (t = "mui") => Py(t);
function xi(t, e, r, n) {
  if (!e)
    return;
  e = e === !0 ? {} : e;
  const i = n === "dark" ? "dark" : "light";
  if (!r) {
    t[n] = rg({
      ...e,
      palette: {
        mode: i,
        ...e == null ? void 0 : e.palette
      }
    });
    return;
  }
  const {
    palette: s,
    ...o
  } = ns({
    ...r,
    palette: {
      mode: i,
      ...e == null ? void 0 : e.palette
    }
  });
  return t[n] = {
    ...e,
    palette: s,
    opacity: {
      ...xc(i),
      ...e == null ? void 0 : e.opacity
    },
    overlays: (e == null ? void 0 : e.overlays) || Ac(i)
  }, o;
}
function fg(t = {}, ...e) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: o = ng,
    colorSchemeSelector: a = r.light && r.dark ? "media" : void 0,
    ...c
  } = t, l = Object.keys(r)[0], f = n || (r.light && l !== "light" ? "light" : l), d = lg(s), {
    [f]: h,
    light: w,
    dark: g,
    ...v
  } = r, b = {
    ...v
  };
  let A = h;
  if ((f === "dark" && !("dark" in r) || f === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : Rt(21, f));
  const k = xi(b, A, c, f);
  w && !b.light && xi(b, w, void 0, "light"), g && !b.dark && xi(b, g, void 0, "dark");
  let S = {
    defaultColorScheme: f,
    ...k,
    cssVarPrefix: s,
    colorSchemeSelector: a,
    getCssVar: d,
    colorSchemes: b,
    font: {
      ...Ly(k.typography),
      ...k.font
    },
    spacing: cg(c.spacing)
  };
  Object.keys(S.colorSchemes).forEach((j) => {
    const p = S.colorSchemes[j].palette, V = (L) => {
      const Z = L.split("-"), Oe = Z[1], me = Z[2];
      return d(L, p[Oe][me]);
    };
    if (p.mode === "light" && (R(p.common, "background", "#fff"), R(p.common, "onBackground", "#000")), p.mode === "dark" && (R(p.common, "background", "#000"), R(p.common, "onBackground", "#fff")), ug(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      R(p.Alert, "errorColor", ce(p.error.light, 0.6)), R(p.Alert, "infoColor", ce(p.info.light, 0.6)), R(p.Alert, "successColor", ce(p.success.light, 0.6)), R(p.Alert, "warningColor", ce(p.warning.light, 0.6)), R(p.Alert, "errorFilledBg", V("palette-error-main")), R(p.Alert, "infoFilledBg", V("palette-info-main")), R(p.Alert, "successFilledBg", V("palette-success-main")), R(p.Alert, "warningFilledBg", V("palette-warning-main")), R(p.Alert, "errorFilledColor", nt(() => p.getContrastText(p.error.main))), R(p.Alert, "infoFilledColor", nt(() => p.getContrastText(p.info.main))), R(p.Alert, "successFilledColor", nt(() => p.getContrastText(p.success.main))), R(p.Alert, "warningFilledColor", nt(() => p.getContrastText(p.warning.main))), R(p.Alert, "errorStandardBg", le(p.error.light, 0.9)), R(p.Alert, "infoStandardBg", le(p.info.light, 0.9)), R(p.Alert, "successStandardBg", le(p.success.light, 0.9)), R(p.Alert, "warningStandardBg", le(p.warning.light, 0.9)), R(p.Alert, "errorIconColor", V("palette-error-main")), R(p.Alert, "infoIconColor", V("palette-info-main")), R(p.Alert, "successIconColor", V("palette-success-main")), R(p.Alert, "warningIconColor", V("palette-warning-main")), R(p.AppBar, "defaultBg", V("palette-grey-100")), R(p.Avatar, "defaultBg", V("palette-grey-400")), R(p.Button, "inheritContainedBg", V("palette-grey-300")), R(p.Button, "inheritContainedHoverBg", V("palette-grey-A100")), R(p.Chip, "defaultBorder", V("palette-grey-400")), R(p.Chip, "defaultAvatarColor", V("palette-grey-700")), R(p.Chip, "defaultIconColor", V("palette-grey-700")), R(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), R(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), R(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), R(p.LinearProgress, "primaryBg", le(p.primary.main, 0.62)), R(p.LinearProgress, "secondaryBg", le(p.secondary.main, 0.62)), R(p.LinearProgress, "errorBg", le(p.error.main, 0.62)), R(p.LinearProgress, "infoBg", le(p.info.main, 0.62)), R(p.LinearProgress, "successBg", le(p.success.main, 0.62)), R(p.LinearProgress, "warningBg", le(p.warning.main, 0.62)), R(p.Skeleton, "bg", `rgba(${V("palette-text-primaryChannel")} / 0.11)`), R(p.Slider, "primaryTrack", le(p.primary.main, 0.62)), R(p.Slider, "secondaryTrack", le(p.secondary.main, 0.62)), R(p.Slider, "errorTrack", le(p.error.main, 0.62)), R(p.Slider, "infoTrack", le(p.info.main, 0.62)), R(p.Slider, "successTrack", le(p.success.main, 0.62)), R(p.Slider, "warningTrack", le(p.warning.main, 0.62));
      const L = sn(p.background.default, 0.8);
      R(p.SnackbarContent, "bg", L), R(p.SnackbarContent, "color", nt(() => p.getContrastText(L))), R(p.SpeedDialAction, "fabHoverBg", sn(p.background.paper, 0.15)), R(p.StepConnector, "border", V("palette-grey-400")), R(p.StepContent, "border", V("palette-grey-400")), R(p.Switch, "defaultColor", V("palette-common-white")), R(p.Switch, "defaultDisabledColor", V("palette-grey-100")), R(p.Switch, "primaryDisabledColor", le(p.primary.main, 0.62)), R(p.Switch, "secondaryDisabledColor", le(p.secondary.main, 0.62)), R(p.Switch, "errorDisabledColor", le(p.error.main, 0.62)), R(p.Switch, "infoDisabledColor", le(p.info.main, 0.62)), R(p.Switch, "successDisabledColor", le(p.success.main, 0.62)), R(p.Switch, "warningDisabledColor", le(p.warning.main, 0.62)), R(p.TableCell, "border", le(nn(p.divider, 1), 0.88)), R(p.Tooltip, "bg", nn(p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      R(p.Alert, "errorColor", le(p.error.light, 0.6)), R(p.Alert, "infoColor", le(p.info.light, 0.6)), R(p.Alert, "successColor", le(p.success.light, 0.6)), R(p.Alert, "warningColor", le(p.warning.light, 0.6)), R(p.Alert, "errorFilledBg", V("palette-error-dark")), R(p.Alert, "infoFilledBg", V("palette-info-dark")), R(p.Alert, "successFilledBg", V("palette-success-dark")), R(p.Alert, "warningFilledBg", V("palette-warning-dark")), R(p.Alert, "errorFilledColor", nt(() => p.getContrastText(p.error.dark))), R(p.Alert, "infoFilledColor", nt(() => p.getContrastText(p.info.dark))), R(p.Alert, "successFilledColor", nt(() => p.getContrastText(p.success.dark))), R(p.Alert, "warningFilledColor", nt(() => p.getContrastText(p.warning.dark))), R(p.Alert, "errorStandardBg", ce(p.error.light, 0.9)), R(p.Alert, "infoStandardBg", ce(p.info.light, 0.9)), R(p.Alert, "successStandardBg", ce(p.success.light, 0.9)), R(p.Alert, "warningStandardBg", ce(p.warning.light, 0.9)), R(p.Alert, "errorIconColor", V("palette-error-main")), R(p.Alert, "infoIconColor", V("palette-info-main")), R(p.Alert, "successIconColor", V("palette-success-main")), R(p.Alert, "warningIconColor", V("palette-warning-main")), R(p.AppBar, "defaultBg", V("palette-grey-900")), R(p.AppBar, "darkBg", V("palette-background-paper")), R(p.AppBar, "darkColor", V("palette-text-primary")), R(p.Avatar, "defaultBg", V("palette-grey-600")), R(p.Button, "inheritContainedBg", V("palette-grey-800")), R(p.Button, "inheritContainedHoverBg", V("palette-grey-700")), R(p.Chip, "defaultBorder", V("palette-grey-700")), R(p.Chip, "defaultAvatarColor", V("palette-grey-300")), R(p.Chip, "defaultIconColor", V("palette-grey-300")), R(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), R(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), R(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), R(p.LinearProgress, "primaryBg", ce(p.primary.main, 0.5)), R(p.LinearProgress, "secondaryBg", ce(p.secondary.main, 0.5)), R(p.LinearProgress, "errorBg", ce(p.error.main, 0.5)), R(p.LinearProgress, "infoBg", ce(p.info.main, 0.5)), R(p.LinearProgress, "successBg", ce(p.success.main, 0.5)), R(p.LinearProgress, "warningBg", ce(p.warning.main, 0.5)), R(p.Skeleton, "bg", `rgba(${V("palette-text-primaryChannel")} / 0.13)`), R(p.Slider, "primaryTrack", ce(p.primary.main, 0.5)), R(p.Slider, "secondaryTrack", ce(p.secondary.main, 0.5)), R(p.Slider, "errorTrack", ce(p.error.main, 0.5)), R(p.Slider, "infoTrack", ce(p.info.main, 0.5)), R(p.Slider, "successTrack", ce(p.success.main, 0.5)), R(p.Slider, "warningTrack", ce(p.warning.main, 0.5));
      const L = sn(p.background.default, 0.98);
      R(p.SnackbarContent, "bg", L), R(p.SnackbarContent, "color", nt(() => p.getContrastText(L))), R(p.SpeedDialAction, "fabHoverBg", sn(p.background.paper, 0.15)), R(p.StepConnector, "border", V("palette-grey-600")), R(p.StepContent, "border", V("palette-grey-600")), R(p.Switch, "defaultColor", V("palette-grey-300")), R(p.Switch, "defaultDisabledColor", V("palette-grey-600")), R(p.Switch, "primaryDisabledColor", ce(p.primary.main, 0.55)), R(p.Switch, "secondaryDisabledColor", ce(p.secondary.main, 0.55)), R(p.Switch, "errorDisabledColor", ce(p.error.main, 0.55)), R(p.Switch, "infoDisabledColor", ce(p.info.main, 0.55)), R(p.Switch, "successDisabledColor", ce(p.success.main, 0.55)), R(p.Switch, "warningDisabledColor", ce(p.warning.main, 0.55)), R(p.TableCell, "border", ce(nn(p.divider, 1), 0.68)), R(p.Tooltip, "bg", nn(p.grey[700], 0.92));
    }
    lt(p.background, "default"), lt(p.background, "paper"), lt(p.common, "background"), lt(p.common, "onBackground"), lt(p, "divider"), Object.keys(p).forEach((L) => {
      const Z = p[L];
      Z && typeof Z == "object" && (Z.main && R(p[L], "mainChannel", Sr(Or(Z.main))), Z.light && R(p[L], "lightChannel", Sr(Or(Z.light))), Z.dark && R(p[L], "darkChannel", Sr(Or(Z.dark))), Z.contrastText && R(p[L], "contrastTextChannel", Sr(Or(Z.contrastText))), L === "text" && (lt(p[L], "primary"), lt(p[L], "secondary")), L === "action" && (Z.active && lt(p[L], "active"), Z.selected && lt(p[L], "selected")));
    });
  }), S = e.reduce((j, p) => We(j, p), S);
  const P = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: o,
    getSelector: sg(S)
  }, {
    vars: E,
    generateThemeVars: q,
    generateStyleSheets: G
  } = Ny(S, P);
  return S.vars = E, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([j, p]) => {
    S[j] = p;
  }), S.generateThemeVars = q, S.generateStyleSheets = G, S.generateSpacing = function() {
    return Tc(c.spacing, vs(this));
  }, S.getColorSchemeSelector = $y(a), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = o, S.unstable_sxConfig = {
    ...Wn,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, S.unstable_sx = function(p) {
    return Hn({
      sx: p,
      theme: this
    });
  }, S.toRuntimeSource = ag, S;
}
function Ea(t, e, r) {
  t.colorSchemes && r && (t.colorSchemes[e] = {
    ...r !== !0 && r,
    palette: _s({
      ...r === !0 ? {} : r.palette,
      mode: e
    })
    // cast type to skip module augmentation test
  });
}
function Pc(t = {}, ...e) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: i = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r == null ? void 0 : r.mode,
    ...o
  } = t, a = s || "light", c = i == null ? void 0 : i[a], l = {
    ...i,
    ...r ? {
      [a]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in t))
      return ns(t, ...e);
    let f = r;
    "palette" in t || l[a] && (l[a] !== !0 ? f = l[a].palette : a === "dark" && (f = {
      mode: "dark"
    }));
    const d = ns({
      ...t,
      palette: f
    }, ...e);
    return d.defaultColorScheme = a, d.colorSchemes = l, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...l.light !== !0 && l.light,
      palette: d.palette
    }, Ea(d, "dark", l.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...l.dark !== !0 && l.dark,
      palette: d.palette
    }, Ea(d, "light", l.light)), d;
  }
  return !r && !("light" in l) && a === "light" && (l.light = !0), fg({
    ...o,
    colorSchemes: l,
    defaultColorScheme: a,
    ...typeof n != "boolean" && n
  }, ...e);
}
Pc({
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
  layout: od,
  preview: ud,
  notification: ld,
  formContainer: nu,
  customerData: su,
  vendorData: au,
  employeeData: cu,
  farmerData: fu,
  productData: pu,
  uomData: mu,
  officesData: Ju,
  branchesData: Zu,
  alertSnackbar: tc
}, pg = {
  rfpa: [],
  selectedRFPA: void 0,
  previewRFPA: void 0
}, Dc = Se({
  name: "rfpaData",
  initialState: pg,
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
Dc.actions;
const kc = Dc.reducer, hg = {
  dealSlip: [],
  selectedDealSlip: void 0
}, Nc = Se({
  name: "dealSlipData",
  initialState: hg,
  reducers: {
    setDealSlipData: (t, e) => {
      t.dealSlip = e.payload;
    },
    setSelectedDealSlip: (t, e) => {
      t.selectedDealSlip = e.payload;
    }
  }
});
Nc.actions;
const $c = Nc.reducer, mg = {
  grn: [],
  selectedGRN: void 0,
  previewGRN: void 0,
  subTotalAmt: 0,
  totalAmt: 0,
  totAmtWords: ""
}, qc = Se({
  name: "grnData",
  initialState: mg,
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
qc.actions;
const Fc = qc.reducer, yg = {
  mcVouchers: [],
  selectedMCVoucher: void 0,
  previewMCVoucher: void 0
}, Ic = Se({
  name: "mc_voucher",
  initialState: yg,
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
Ic.actions;
const Mc = Ic.reducer, gg = {
  lpVouchers: [],
  selectedLPVoucher: void 0,
  previewLPVoucher: void 0
}, jc = Se({
  name: "lp_voucher",
  initialState: gg,
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
jc.actions;
const Vc = jc.reducer, bg = {
  pmpVouchers: [],
  selectedPMPVoucher: void 0,
  previewPMPVoucher: void 0
}, Lc = Se({
  name: "pmp_voucher",
  initialState: bg,
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
Lc.actions;
const Uc = Lc.reducer, vg = {
  tpVouchers: [],
  selectedTPVoucher: void 0,
  previewTPVoucher: void 0
}, Bc = Se({
  name: "tp_voucher",
  initialState: vg,
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
Bc.actions;
const zc = Bc.reducer, wg = {
  dcs: [],
  selectedDC: void 0,
  previewDC: void 0
}, Wc = Se({
  name: "delivery_challan",
  initialState: wg,
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
Wc.actions;
const Hc = Wc.reducer, Eg = {
  paymentReq: [],
  selectedPaymentReq: void 0,
  previewPaymentReq: void 0
}, Kc = Se({
  name: "payment_request",
  initialState: Eg,
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
Kc.actions;
const Gc = Kc.reducer;
as({
  reducer: {
    rfpaData: kc,
    dealSlipData: $c,
    grnData: Fc,
    mc_voucher: Mc,
    lp_voucher: Vc,
    tp_voucher: zc,
    pmp_voucher: Uc,
    delivery_challan: Hc,
    payment_request: Gc
  }
});
const Sg = /^[6-9]\d{9}$/, Gn = O().matches(Sg, "Please enter a valid 10-digit contact number").required("Contact number is required"), Og = ae().shape({
  address1: O().required("Address Line 1 is required"),
  address2: O(),
  location: O().required("Location is required"),
  city: O().required("City is required"),
  state: O().required("State is required"),
  pincode: O().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
ae().shape({
  companyName: O().required("Company Name is required"),
  purchaseLocation: O().required("Purchase Location is required"),
  purchaseForWhich: O().required("Purchase For Which is required"),
  selectedParty: O().required("Please select one option"),
  // rfpaProducts: yup.array().of(
  //     yup.object().shape({
  //         product: yup.string().required('Product is required'),
  //         grade: yup.string().required('Grade is required'),
  //         quantity: yup.number().required('Quantity is required').positive('Quantity must be positive'),
  //         unitPrice: yup.number().required('Unit Price is required').positive('Unit Price must be positive'),
  //         purchaseDate: yup.date().required('Purchase Date is required'),
  //         dispatchDate: yup.date().required('Dispatch Date is required'),
  //         deliveryDate: yup.date().required('Delivery Date is required'),
  //         deliveryLocation: yup.string().required('Delivery Location is required'),
  //         expectedHarvestDate: yup.date().nullable(), // Optional field
  //     })
  // ).required('RFPA Products are required'),
  paymentInfo: ae().shape({
    paymentMode: O().required("Payment Mode is required"),
    creditPeriod: Je().required("Credit Period is required").positive("Credit Period must be positive"),
    paymentDate: Fr().required("Payment Date is required"),
    paymentTerms: Je().required("Payment Terms is required").positive("Payment Terms must be positive")
  }).required("Payment Information is required"),
  deliveryReceivingPerson: O().required("Delivery Receiving Person is required")
});
ae().shape({
  loadingLocation: O().required("Loading location is required."),
  lotNo: O().required("Lot number is required.")
});
ae().shape({
  companyName: O().required("Company Name is required"),
  billNo: O().required("Bill number is required"),
  serialNo: O().required("Serial number is required"),
  purchaseRequestByWhom: O().required("Requesting person name required"),
  purchaseLocation: O().required("Purchase Location is required"),
  purchaseForWhich: O().required("Purchase For Which is required"),
  source: O().required("Source required"),
  selectedParty: O().required("Please select one option"),
  products: qn().of(
    ae().shape({
      product: O().required("Select at least one product"),
      count: O().required("Select at least one counnt"),
      quantity: Je().required("Quantity is required").positive("Quantity can't be negative"),
      rate: Je().required("Rate is required").positive("Rate can't be negative"),
      rtv: O().required("Select is product rtv or not")
    })
  ).required("At lease one product required"),
  deliveryReceivingPerson: O().required("Delivery receiving person name is required"),
  rmn: O().required("RM name is required")
});
ae().shape({
  companyName: O().required("Company name is required"),
  debitCreditTo: O().required("Name required for debit / credit to."),
  payReceivedFrom: O().required("Name required for pay / received from"),
  location: O().required("Location is required"),
  noOfLabours: Je().required("Number of labour is required").positive("Number of labours cannot be negative"),
  ratePerLabour: Je().required("Rate is required").positive("Rate cannot be negative"),
  loadingDate: Fr().required("Loading date is required"),
  workLocation: O().required("Location of work is required"),
  contactNo: Gn,
  paymentMode: O().required("Payment mode is required"),
  receiverName: O().required("Receiver name is required")
});
ae().shape({
  companyName: O().required("Company name is required"),
  debitCreditTo: O().required("Name required for debit / credit to."),
  payReceivedFrom: O().required("Name required for pay / received from"),
  location: O().required("Location is required"),
  paymentMode: O().required("Payment mode is required"),
  receiverName: O().required("Receiver name is required"),
  particulars: qn().of(
    ae().shape({
      description: O().required("Description is required"),
      amt: Je().required("Amount is required").positive("Amount cannot be negative")
    })
  )
});
ae().shape({
  companyName: O().required("Company name is required"),
  debitCreditTo: O().required("Name required for debit / credit to."),
  payReceivedFrom: O().required("Name required for pay / received from"),
  location: O().required("Location is required"),
  sellerName: O().required("Seller name is required"),
  address: Og,
  contactNo: Gn,
  paymentMode: O().required("Payment mode is required"),
  receiverName: O().required("Receiver name is required")
  // materials: yup.array().of(
  //     yup.object().shape({
  //         itemName: yup.string().required('Item name is required'),
  //         uom: yup.string().required('UOM is required'),
  //         itemQty: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
  //         rate: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
  //     })
  // )
});
ae().shape({
  companyName: O().required("Company name is required"),
  debitCreditTo: O().required("Name required for debit / credit to."),
  payReceivedFrom: O().required("Name required for pay / received from"),
  location: O().required("Location is required"),
  driverName: O().required("Driver name is required"),
  contactNo: Gn,
  vehicleNo: O().required("Vehicle number is required"),
  dispatchLocation: O().required("Dispatch location is required"),
  destinationLocation: O().required("Destination location is required"),
  paymentMode: O().required("Payment mode is required"),
  receiverName: O().required("Receiver name is required")
});
ae().shape({
  companyName: O().required("Company name is required"),
  partyName: O().required("Party name is required"),
  fromLocation: O().required("Location is required"),
  toLocation: O().required("Location is required"),
  driverName: O().required("Driver name is required"),
  contactNo: Gn,
  vehicleNo: O().required("Vehicle number is required"),
  receiverName: O().required("Receiver name is required"),
  rmn: O().required("RM name is required"),
  items: qn().of(
    ae().shape({
      itemName: O().required("Item name is required"),
      itemQty: Je().required("Quantity is required").positive("Quantity cannot be negative"),
      rate: Je().required("Quantity is required").positive("Quantity cannot be negative")
    })
  )
});
ae().shape({
  paymentDate: Fr().required("Payment Date is required"),
  partyName: O().required("Party Name is required"),
  amount: Je().required("Amount is required").positive("Amount must be positive"),
  bankAccNo: O().required("Bank Account Number is required"),
  ifscCode: O().required("IFSC Code is required"),
  paymentMode: O().required("Payment Mode is required"),
  typesOfTransaction: O().required("Types of Transaction is required"),
  otherTransaction: O().required("Other Transaction is required"),
  vehicleNo: O().required("Vehicle No is required"),
  placeOfPurchase: O().required("Place of Purchase is required"),
  contactpersonRec: O().required("Contact Person Receiving is required"),
  contactpersonSen: O().required("Contact Person Sending is required"),
  costCenter: O().required("Cost Center is required"),
  kycByEmail: O().required("KYC by Email is required"),
  remark: O().required("Remark is required")
});
Na.withTypes();
Pc({
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
const _g = {
  rfpaData: kc,
  dealSlipData: $c,
  grnData: Fc,
  mc_voucher: Mc,
  lp_voucher: Vc,
  tp_voucher: zc,
  pmp_voucher: Uc,
  delivery_challan: Hc,
  payment_request: Gc
}, Cg = qa({ ...dg, ..._g }), Vg = as({
  reducer: Cg
}), Lg = new Md();
export {
  xg as STRINGS,
  Vg as coreStore,
  Mg as hideNotification,
  Ng as isClosingState,
  od as layoutReducer,
  Za as layoutSlice,
  kg as mobileOpenState,
  ld as notificationReducer,
  jg as notificationState,
  $g as pageTitleState,
  ud as previewReducer,
  eu as previewSlice,
  Fg as previewState,
  Lg as queryClient,
  Pg as setIsClosing,
  Ag as setMobileOpen,
  Dg as setPageTitle,
  qg as setPreview,
  Ig as showNotification,
  Rg as useAppSelector
};
