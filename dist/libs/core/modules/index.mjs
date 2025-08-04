var Eo = (t) => {
  throw TypeError(t);
};
var hi = (t, e, r) => e.has(t) || Eo("Cannot " + r);
var P = (t, e, r) => (hi(t, e, "read from private field"), r ? r.call(t) : e.get(t)), oe = (t, e, r) => e.has(t) ? Eo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), re = (t, e, r, n) => (hi(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), ke = (t, e, r) => (hi(t, e, "access private method"), r);
var rn = (t, e, r, n) => ({
  set _(i) {
    re(t, e, i, r);
  },
  get _() {
    return P(t, e, n);
  }
});
function Kl(t, e) {
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
function as(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ii = { exports: {} }, ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Co;
function Hl() {
  if (Co) return ne;
  Co = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.iterator;
  function m(g) {
    return g === null || typeof g != "object" ? null : (g = p && g[p] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var b = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, w = {};
  function E(g, T, L) {
    this.props = g, this.context = T, this.refs = w, this.updater = L || b;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(g, T) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, T, "setState");
  }, E.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function A() {
  }
  A.prototype = E.prototype;
  function M(g, T, L) {
    this.props = g, this.context = T, this.refs = w, this.updater = L || b;
  }
  var _ = M.prototype = new A();
  _.constructor = M, C(_, E.prototype), _.isPureReactComponent = !0;
  var R = Array.isArray, v = Object.prototype.hasOwnProperty, k = { current: null }, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Y(g, T, L) {
    var F, U = {}, G = null, W = null;
    if (T != null) for (F in T.ref !== void 0 && (W = T.ref), T.key !== void 0 && (G = "" + T.key), T) v.call(T, F) && !X.hasOwnProperty(F) && (U[F] = T[F]);
    var H = arguments.length - 2;
    if (H === 1) U.children = L;
    else if (1 < H) {
      for (var Q = Array(H), Z = 0; Z < H; Z++) Q[Z] = arguments[Z + 2];
      U.children = Q;
    }
    if (g && g.defaultProps) for (F in H = g.defaultProps, H) U[F] === void 0 && (U[F] = H[F]);
    return { $$typeof: t, type: g, key: G, ref: W, props: U, _owner: k.current };
  }
  function d(g, T) {
    return { $$typeof: t, type: g.type, key: T, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function $(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }
  function V(g) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(L) {
      return T[L];
    });
  }
  var te = /\/+/g;
  function Ce(g, T) {
    return typeof g == "object" && g !== null && g.key != null ? V("" + g.key) : T.toString(36);
  }
  function ge(g, T, L, F, U) {
    var G = typeof g;
    (G === "undefined" || G === "boolean") && (g = null);
    var W = !1;
    if (g === null) W = !0;
    else switch (G) {
      case "string":
      case "number":
        W = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case t:
          case e:
            W = !0;
        }
    }
    if (W) return W = g, U = U(W), g = F === "" ? "." + Ce(W, 0) : F, R(U) ? (L = "", g != null && (L = g.replace(te, "$&/") + "/"), ge(U, T, L, "", function(Z) {
      return Z;
    })) : U != null && ($(U) && (U = d(U, L + (!U.key || W && W.key === U.key ? "" : ("" + U.key).replace(te, "$&/") + "/") + g)), T.push(U)), 1;
    if (W = 0, F = F === "" ? "." : F + ":", R(g)) for (var H = 0; H < g.length; H++) {
      G = g[H];
      var Q = F + Ce(G, H);
      W += ge(G, T, L, Q, U);
    }
    else if (Q = m(g), typeof Q == "function") for (g = Q.call(g), H = 0; !(G = g.next()).done; ) G = G.value, Q = F + Ce(G, H++), W += ge(G, T, L, Q, U);
    else if (G === "object") throw T = String(g), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    return W;
  }
  function we(g, T, L) {
    if (g == null) return g;
    var F = [], U = 0;
    return ge(g, F, "", "", function(G) {
      return T.call(L, G, U++);
    }), F;
  }
  function be(g) {
    if (g._status === -1) {
      var T = g._result;
      T = T(), T.then(function(L) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = L);
      }, function(L) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = L);
      }), g._status === -1 && (g._status = 0, g._result = T);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var K = { current: null }, He = { transition: null }, Et = { ReactCurrentDispatcher: K, ReactCurrentBatchConfig: He, ReactCurrentOwner: k };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ne.Children = { map: we, forEach: function(g, T, L) {
    we(g, function() {
      T.apply(this, arguments);
    }, L);
  }, count: function(g) {
    var T = 0;
    return we(g, function() {
      T++;
    }), T;
  }, toArray: function(g) {
    return we(g, function(T) {
      return T;
    }) || [];
  }, only: function(g) {
    if (!$(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, ne.Component = E, ne.Fragment = r, ne.Profiler = i, ne.PureComponent = M, ne.StrictMode = n, ne.Suspense = l, ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Et, ne.act = x, ne.cloneElement = function(g, T, L) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var F = C({}, g.props), U = g.key, G = g.ref, W = g._owner;
    if (T != null) {
      if (T.ref !== void 0 && (G = T.ref, W = k.current), T.key !== void 0 && (U = "" + T.key), g.type && g.type.defaultProps) var H = g.type.defaultProps;
      for (Q in T) v.call(T, Q) && !X.hasOwnProperty(Q) && (F[Q] = T[Q] === void 0 && H !== void 0 ? H[Q] : T[Q]);
    }
    var Q = arguments.length - 2;
    if (Q === 1) F.children = L;
    else if (1 < Q) {
      H = Array(Q);
      for (var Z = 0; Z < Q; Z++) H[Z] = arguments[Z + 2];
      F.children = H;
    }
    return { $$typeof: t, type: g.type, key: U, ref: G, props: F, _owner: W };
  }, ne.createContext = function(g) {
    return g = { $$typeof: o, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: s, _context: g }, g.Consumer = g;
  }, ne.createElement = Y, ne.createFactory = function(g) {
    var T = Y.bind(null, g);
    return T.type = g, T;
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(g) {
    return { $$typeof: a, render: g };
  }, ne.isValidElement = $, ne.lazy = function(g) {
    return { $$typeof: f, _payload: { _status: -1, _result: g }, _init: be };
  }, ne.memo = function(g, T) {
    return { $$typeof: h, type: g, compare: T === void 0 ? null : T };
  }, ne.startTransition = function(g) {
    var T = He.transition;
    He.transition = {};
    try {
      g();
    } finally {
      He.transition = T;
    }
  }, ne.unstable_act = x, ne.useCallback = function(g, T) {
    return K.current.useCallback(g, T);
  }, ne.useContext = function(g) {
    return K.current.useContext(g);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(g) {
    return K.current.useDeferredValue(g);
  }, ne.useEffect = function(g, T) {
    return K.current.useEffect(g, T);
  }, ne.useId = function() {
    return K.current.useId();
  }, ne.useImperativeHandle = function(g, T, L) {
    return K.current.useImperativeHandle(g, T, L);
  }, ne.useInsertionEffect = function(g, T) {
    return K.current.useInsertionEffect(g, T);
  }, ne.useLayoutEffect = function(g, T) {
    return K.current.useLayoutEffect(g, T);
  }, ne.useMemo = function(g, T) {
    return K.current.useMemo(g, T);
  }, ne.useReducer = function(g, T, L) {
    return K.current.useReducer(g, T, L);
  }, ne.useRef = function(g) {
    return K.current.useRef(g);
  }, ne.useState = function(g) {
    return K.current.useState(g);
  }, ne.useSyncExternalStore = function(g, T, L) {
    return K.current.useSyncExternalStore(g, T, L);
  }, ne.useTransition = function() {
    return K.current.useTransition();
  }, ne.version = "18.3.1", ne;
}
var Tr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Tr.exports;
var Oo;
function Ql() {
  return Oo || (Oo = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), h = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), E = Symbol.iterator, A = "@@iterator";
      function M(u) {
        if (u === null || typeof u != "object")
          return null;
        var y = E && u[E] || u[A];
        return typeof y == "function" ? y : null;
      }
      var _ = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, R = {
        transition: null
      }, v = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, k = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, X = {}, Y = null;
      function d(u) {
        Y = u;
      }
      X.setExtraStackFrame = function(u) {
        Y = u;
      }, X.getCurrentStack = null, X.getStackAddendum = function() {
        var u = "";
        Y && (u += Y);
        var y = X.getCurrentStack;
        return y && (u += y() || ""), u;
      };
      var $ = !1, V = !1, te = !1, Ce = !1, ge = !1, we = {
        ReactCurrentDispatcher: _,
        ReactCurrentBatchConfig: R,
        ReactCurrentOwner: k
      };
      we.ReactDebugCurrentFrame = X, we.ReactCurrentActQueue = v;
      function be(u) {
        {
          for (var y = arguments.length, S = new Array(y > 1 ? y - 1 : 0), O = 1; O < y; O++)
            S[O - 1] = arguments[O];
          He("warn", u, S);
        }
      }
      function K(u) {
        {
          for (var y = arguments.length, S = new Array(y > 1 ? y - 1 : 0), O = 1; O < y; O++)
            S[O - 1] = arguments[O];
          He("error", u, S);
        }
      }
      function He(u, y, S) {
        {
          var O = we.ReactDebugCurrentFrame, D = O.getStackAddendum();
          D !== "" && (y += "%s", S = S.concat([D]));
          var J = S.map(function(z) {
            return String(z);
          });
          J.unshift("Warning: " + y), Function.prototype.apply.call(console[u], console, J);
        }
      }
      var Et = {};
      function x(u, y) {
        {
          var S = u.constructor, O = S && (S.displayName || S.name) || "ReactClass", D = O + "." + y;
          if (Et[D])
            return;
          K("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", y, O), Et[D] = !0;
        }
      }
      var g = {
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
        enqueueForceUpdate: function(u, y, S) {
          x(u, "forceUpdate");
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
        enqueueReplaceState: function(u, y, S, O) {
          x(u, "replaceState");
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
        enqueueSetState: function(u, y, S, O) {
          x(u, "setState");
        }
      }, T = Object.assign, L = {};
      Object.freeze(L);
      function F(u, y, S) {
        this.props = u, this.context = y, this.refs = L, this.updater = S || g;
      }
      F.prototype.isReactComponent = {}, F.prototype.setState = function(u, y) {
        if (typeof u != "object" && typeof u != "function" && u != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, u, y, "setState");
      }, F.prototype.forceUpdate = function(u) {
        this.updater.enqueueForceUpdate(this, u, "forceUpdate");
      };
      {
        var U = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, G = function(u, y) {
          Object.defineProperty(F.prototype, u, {
            get: function() {
              be("%s(...) is deprecated in plain JavaScript React classes. %s", y[0], y[1]);
            }
          });
        };
        for (var W in U)
          U.hasOwnProperty(W) && G(W, U[W]);
      }
      function H() {
      }
      H.prototype = F.prototype;
      function Q(u, y, S) {
        this.props = u, this.context = y, this.refs = L, this.updater = S || g;
      }
      var Z = Q.prototype = new H();
      Z.constructor = Q, T(Z, F.prototype), Z.isPureReactComponent = !0;
      function xe() {
        var u = {
          current: null
        };
        return Object.seal(u), u;
      }
      var B = Array.isArray;
      function $e(u) {
        return B(u);
      }
      function Jt(u) {
        {
          var y = typeof Symbol == "function" && Symbol.toStringTag, S = y && u[Symbol.toStringTag] || u.constructor.name || "Object";
          return S;
        }
      }
      function Gr(u) {
        try {
          return Ls(u), !1;
        } catch {
          return !0;
        }
      }
      function Ls(u) {
        return "" + u;
      }
      function Wr(u) {
        if (Gr(u))
          return K("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Jt(u)), Ls(u);
      }
      function Gc(u, y, S) {
        var O = u.displayName;
        if (O)
          return O;
        var D = y.displayName || y.name || "";
        return D !== "" ? S + "(" + D + ")" : S;
      }
      function js(u) {
        return u.displayName || "Context";
      }
      function Ct(u) {
        if (u == null)
          return null;
        if (typeof u.tag == "number" && K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
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
          case p:
            return "Suspense";
          case m:
            return "SuspenseList";
        }
        if (typeof u == "object")
          switch (u.$$typeof) {
            case h:
              var y = u;
              return js(y) + ".Consumer";
            case l:
              var S = u;
              return js(S._context) + ".Provider";
            case f:
              return Gc(u, u.render, "ForwardRef");
            case b:
              var O = u.displayName || null;
              return O !== null ? O : Ct(u.type) || "Memo";
            case C: {
              var D = u, J = D._payload, z = D._init;
              try {
                return Ct(z(J));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Sr = Object.prototype.hasOwnProperty, Bs = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Vs, Us, ti;
      ti = {};
      function zs(u) {
        if (Sr.call(u, "ref")) {
          var y = Object.getOwnPropertyDescriptor(u, "ref").get;
          if (y && y.isReactWarning)
            return !1;
        }
        return u.ref !== void 0;
      }
      function Gs(u) {
        if (Sr.call(u, "key")) {
          var y = Object.getOwnPropertyDescriptor(u, "key").get;
          if (y && y.isReactWarning)
            return !1;
        }
        return u.key !== void 0;
      }
      function Wc(u, y) {
        var S = function() {
          Vs || (Vs = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        S.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: S,
          configurable: !0
        });
      }
      function Kc(u, y) {
        var S = function() {
          Us || (Us = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        S.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: S,
          configurable: !0
        });
      }
      function Hc(u) {
        if (typeof u.ref == "string" && k.current && u.__self && k.current.stateNode !== u.__self) {
          var y = Ct(k.current.type);
          ti[y] || (K('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y, u.ref), ti[y] = !0);
        }
      }
      var ri = function(u, y, S, O, D, J, z) {
        var ee = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: u,
          key: y,
          ref: S,
          props: z,
          // Record the component responsible for creating this element.
          _owner: J
        };
        return ee._store = {}, Object.defineProperty(ee._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ee, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: O
        }), Object.defineProperty(ee, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: D
        }), Object.freeze && (Object.freeze(ee.props), Object.freeze(ee)), ee;
      };
      function Qc(u, y, S) {
        var O, D = {}, J = null, z = null, ee = null, se = null;
        if (y != null) {
          zs(y) && (z = y.ref, Hc(y)), Gs(y) && (Wr(y.key), J = "" + y.key), ee = y.__self === void 0 ? null : y.__self, se = y.__source === void 0 ? null : y.__source;
          for (O in y)
            Sr.call(y, O) && !Bs.hasOwnProperty(O) && (D[O] = y[O]);
        }
        var le = arguments.length - 2;
        if (le === 1)
          D.children = S;
        else if (le > 1) {
          for (var pe = Array(le), me = 0; me < le; me++)
            pe[me] = arguments[me + 2];
          Object.freeze && Object.freeze(pe), D.children = pe;
        }
        if (u && u.defaultProps) {
          var ve = u.defaultProps;
          for (O in ve)
            D[O] === void 0 && (D[O] = ve[O]);
        }
        if (J || z) {
          var Te = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          J && Wc(D, Te), z && Kc(D, Te);
        }
        return ri(u, J, z, ee, se, k.current, D);
      }
      function Yc(u, y) {
        var S = ri(u.type, y, u.ref, u._self, u._source, u._owner, u.props);
        return S;
      }
      function Xc(u, y, S) {
        if (u == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + u + ".");
        var O, D = T({}, u.props), J = u.key, z = u.ref, ee = u._self, se = u._source, le = u._owner;
        if (y != null) {
          zs(y) && (z = y.ref, le = k.current), Gs(y) && (Wr(y.key), J = "" + y.key);
          var pe;
          u.type && u.type.defaultProps && (pe = u.type.defaultProps);
          for (O in y)
            Sr.call(y, O) && !Bs.hasOwnProperty(O) && (y[O] === void 0 && pe !== void 0 ? D[O] = pe[O] : D[O] = y[O]);
        }
        var me = arguments.length - 2;
        if (me === 1)
          D.children = S;
        else if (me > 1) {
          for (var ve = Array(me), Te = 0; Te < me; Te++)
            ve[Te] = arguments[Te + 2];
          D.children = ve;
        }
        return ri(u.type, J, z, ee, se, le, D);
      }
      function Zt(u) {
        return typeof u == "object" && u !== null && u.$$typeof === n;
      }
      var Ws = ".", Jc = ":";
      function Zc(u) {
        var y = /[=:]/g, S = {
          "=": "=0",
          ":": "=2"
        }, O = u.replace(y, function(D) {
          return S[D];
        });
        return "$" + O;
      }
      var Ks = !1, el = /\/+/g;
      function Hs(u) {
        return u.replace(el, "$&/");
      }
      function ni(u, y) {
        return typeof u == "object" && u !== null && u.key != null ? (Wr(u.key), Zc("" + u.key)) : y.toString(36);
      }
      function Kr(u, y, S, O, D) {
        var J = typeof u;
        (J === "undefined" || J === "boolean") && (u = null);
        var z = !1;
        if (u === null)
          z = !0;
        else
          switch (J) {
            case "string":
            case "number":
              z = !0;
              break;
            case "object":
              switch (u.$$typeof) {
                case n:
                case i:
                  z = !0;
              }
          }
        if (z) {
          var ee = u, se = D(ee), le = O === "" ? Ws + ni(ee, 0) : O;
          if ($e(se)) {
            var pe = "";
            le != null && (pe = Hs(le) + "/"), Kr(se, y, pe, "", function(Wl) {
              return Wl;
            });
          } else se != null && (Zt(se) && (se.key && (!ee || ee.key !== se.key) && Wr(se.key), se = Yc(
            se,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            S + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (se.key && (!ee || ee.key !== se.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Hs("" + se.key) + "/"
            ) : "") + le
          )), y.push(se));
          return 1;
        }
        var me, ve, Te = 0, Pe = O === "" ? Ws : O + Jc;
        if ($e(u))
          for (var tn = 0; tn < u.length; tn++)
            me = u[tn], ve = Pe + ni(me, tn), Te += Kr(me, y, S, ve, D);
        else {
          var fi = M(u);
          if (typeof fi == "function") {
            var wo = u;
            fi === wo.entries && (Ks || be("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ks = !0);
            for (var zl = fi.call(wo), So, Gl = 0; !(So = zl.next()).done; )
              me = So.value, ve = Pe + ni(me, Gl++), Te += Kr(me, y, S, ve, D);
          } else if (J === "object") {
            var _o = String(u);
            throw new Error("Objects are not valid as a React child (found: " + (_o === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : _o) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Te;
      }
      function Hr(u, y, S) {
        if (u == null)
          return u;
        var O = [], D = 0;
        return Kr(u, O, "", "", function(J) {
          return y.call(S, J, D++);
        }), O;
      }
      function tl(u) {
        var y = 0;
        return Hr(u, function() {
          y++;
        }), y;
      }
      function rl(u, y, S) {
        Hr(u, function() {
          y.apply(this, arguments);
        }, S);
      }
      function nl(u) {
        return Hr(u, function(y) {
          return y;
        }) || [];
      }
      function il(u) {
        if (!Zt(u))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return u;
      }
      function sl(u) {
        var y = {
          $$typeof: h,
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
        y.Provider = {
          $$typeof: l,
          _context: y
        };
        var S = !1, O = !1, D = !1;
        {
          var J = {
            $$typeof: h,
            _context: y
          };
          Object.defineProperties(J, {
            Provider: {
              get: function() {
                return O || (O = !0, K("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), y.Provider;
              },
              set: function(z) {
                y.Provider = z;
              }
            },
            _currentValue: {
              get: function() {
                return y._currentValue;
              },
              set: function(z) {
                y._currentValue = z;
              }
            },
            _currentValue2: {
              get: function() {
                return y._currentValue2;
              },
              set: function(z) {
                y._currentValue2 = z;
              }
            },
            _threadCount: {
              get: function() {
                return y._threadCount;
              },
              set: function(z) {
                y._threadCount = z;
              }
            },
            Consumer: {
              get: function() {
                return S || (S = !0, K("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), y.Consumer;
              }
            },
            displayName: {
              get: function() {
                return y.displayName;
              },
              set: function(z) {
                D || (be("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", z), D = !0);
              }
            }
          }), y.Consumer = J;
        }
        return y._currentRenderer = null, y._currentRenderer2 = null, y;
      }
      var _r = -1, ii = 0, Qs = 1, ol = 2;
      function al(u) {
        if (u._status === _r) {
          var y = u._result, S = y();
          if (S.then(function(J) {
            if (u._status === ii || u._status === _r) {
              var z = u;
              z._status = Qs, z._result = J;
            }
          }, function(J) {
            if (u._status === ii || u._status === _r) {
              var z = u;
              z._status = ol, z._result = J;
            }
          }), u._status === _r) {
            var O = u;
            O._status = ii, O._result = S;
          }
        }
        if (u._status === Qs) {
          var D = u._result;
          return D === void 0 && K(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, D), "default" in D || K(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, D), D.default;
        } else
          throw u._result;
      }
      function ul(u) {
        var y = {
          // We use these fields to store the result.
          _status: _r,
          _result: u
        }, S = {
          $$typeof: C,
          _payload: y,
          _init: al
        };
        {
          var O, D;
          Object.defineProperties(S, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return O;
              },
              set: function(J) {
                K("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), O = J, Object.defineProperty(S, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return D;
              },
              set: function(J) {
                K("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), D = J, Object.defineProperty(S, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return S;
      }
      function cl(u) {
        u != null && u.$$typeof === b ? K("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof u != "function" ? K("forwardRef requires a render function but was given %s.", u === null ? "null" : typeof u) : u.length !== 0 && u.length !== 2 && K("forwardRef render functions accept exactly two parameters: props and ref. %s", u.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), u != null && (u.defaultProps != null || u.propTypes != null) && K("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var y = {
          $$typeof: f,
          render: u
        };
        {
          var S;
          Object.defineProperty(y, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return S;
            },
            set: function(O) {
              S = O, !u.name && !u.displayName && (u.displayName = O);
            }
          });
        }
        return y;
      }
      var Ys;
      Ys = Symbol.for("react.module.reference");
      function Xs(u) {
        return !!(typeof u == "string" || typeof u == "function" || u === s || u === a || ge || u === o || u === p || u === m || Ce || u === w || $ || V || te || typeof u == "object" && u !== null && (u.$$typeof === C || u.$$typeof === b || u.$$typeof === l || u.$$typeof === h || u.$$typeof === f || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        u.$$typeof === Ys || u.getModuleId !== void 0));
      }
      function ll(u, y) {
        Xs(u) || K("memo: The first argument must be a component. Instead received: %s", u === null ? "null" : typeof u);
        var S = {
          $$typeof: b,
          type: u,
          compare: y === void 0 ? null : y
        };
        {
          var O;
          Object.defineProperty(S, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return O;
            },
            set: function(D) {
              O = D, !u.name && !u.displayName && (u.displayName = D);
            }
          });
        }
        return S;
      }
      function Fe() {
        var u = _.current;
        return u === null && K(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), u;
      }
      function dl(u) {
        var y = Fe();
        if (u._context !== void 0) {
          var S = u._context;
          S.Consumer === u ? K("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : S.Provider === u && K("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return y.useContext(u);
      }
      function fl(u) {
        var y = Fe();
        return y.useState(u);
      }
      function hl(u, y, S) {
        var O = Fe();
        return O.useReducer(u, y, S);
      }
      function pl(u) {
        var y = Fe();
        return y.useRef(u);
      }
      function ml(u, y) {
        var S = Fe();
        return S.useEffect(u, y);
      }
      function yl(u, y) {
        var S = Fe();
        return S.useInsertionEffect(u, y);
      }
      function gl(u, y) {
        var S = Fe();
        return S.useLayoutEffect(u, y);
      }
      function bl(u, y) {
        var S = Fe();
        return S.useCallback(u, y);
      }
      function vl(u, y) {
        var S = Fe();
        return S.useMemo(u, y);
      }
      function wl(u, y, S) {
        var O = Fe();
        return O.useImperativeHandle(u, y, S);
      }
      function Sl(u, y) {
        {
          var S = Fe();
          return S.useDebugValue(u, y);
        }
      }
      function _l() {
        var u = Fe();
        return u.useTransition();
      }
      function El(u) {
        var y = Fe();
        return y.useDeferredValue(u);
      }
      function Cl() {
        var u = Fe();
        return u.useId();
      }
      function Ol(u, y, S) {
        var O = Fe();
        return O.useSyncExternalStore(u, y, S);
      }
      var Er = 0, Js, Zs, eo, to, ro, no, io;
      function so() {
      }
      so.__reactDisabledLog = !0;
      function Nl() {
        {
          if (Er === 0) {
            Js = console.log, Zs = console.info, eo = console.warn, to = console.error, ro = console.group, no = console.groupCollapsed, io = console.groupEnd;
            var u = {
              configurable: !0,
              enumerable: !0,
              value: so,
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
          Er++;
        }
      }
      function Tl() {
        {
          if (Er--, Er === 0) {
            var u = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: T({}, u, {
                value: Js
              }),
              info: T({}, u, {
                value: Zs
              }),
              warn: T({}, u, {
                value: eo
              }),
              error: T({}, u, {
                value: to
              }),
              group: T({}, u, {
                value: ro
              }),
              groupCollapsed: T({}, u, {
                value: no
              }),
              groupEnd: T({}, u, {
                value: io
              })
            });
          }
          Er < 0 && K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var si = we.ReactCurrentDispatcher, oi;
      function Qr(u, y, S) {
        {
          if (oi === void 0)
            try {
              throw Error();
            } catch (D) {
              var O = D.stack.trim().match(/\n( *(at )?)/);
              oi = O && O[1] || "";
            }
          return `
` + oi + u;
        }
      }
      var ai = !1, Yr;
      {
        var ql = typeof WeakMap == "function" ? WeakMap : Map;
        Yr = new ql();
      }
      function oo(u, y) {
        if (!u || ai)
          return "";
        {
          var S = Yr.get(u);
          if (S !== void 0)
            return S;
        }
        var O;
        ai = !0;
        var D = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var J;
        J = si.current, si.current = null, Nl();
        try {
          if (y) {
            var z = function() {
              throw Error();
            };
            if (Object.defineProperty(z.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(z, []);
              } catch (Pe) {
                O = Pe;
              }
              Reflect.construct(u, [], z);
            } else {
              try {
                z.call();
              } catch (Pe) {
                O = Pe;
              }
              u.call(z.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Pe) {
              O = Pe;
            }
            u();
          }
        } catch (Pe) {
          if (Pe && O && typeof Pe.stack == "string") {
            for (var ee = Pe.stack.split(`
`), se = O.stack.split(`
`), le = ee.length - 1, pe = se.length - 1; le >= 1 && pe >= 0 && ee[le] !== se[pe]; )
              pe--;
            for (; le >= 1 && pe >= 0; le--, pe--)
              if (ee[le] !== se[pe]) {
                if (le !== 1 || pe !== 1)
                  do
                    if (le--, pe--, pe < 0 || ee[le] !== se[pe]) {
                      var me = `
` + ee[le].replace(" at new ", " at ");
                      return u.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", u.displayName)), typeof u == "function" && Yr.set(u, me), me;
                    }
                  while (le >= 1 && pe >= 0);
                break;
              }
          }
        } finally {
          ai = !1, si.current = J, Tl(), Error.prepareStackTrace = D;
        }
        var ve = u ? u.displayName || u.name : "", Te = ve ? Qr(ve) : "";
        return typeof u == "function" && Yr.set(u, Te), Te;
      }
      function Rl(u, y, S) {
        return oo(u, !1);
      }
      function Pl(u) {
        var y = u.prototype;
        return !!(y && y.isReactComponent);
      }
      function Xr(u, y, S) {
        if (u == null)
          return "";
        if (typeof u == "function")
          return oo(u, Pl(u));
        if (typeof u == "string")
          return Qr(u);
        switch (u) {
          case p:
            return Qr("Suspense");
          case m:
            return Qr("SuspenseList");
        }
        if (typeof u == "object")
          switch (u.$$typeof) {
            case f:
              return Rl(u.render);
            case b:
              return Xr(u.type, y, S);
            case C: {
              var O = u, D = O._payload, J = O._init;
              try {
                return Xr(J(D), y, S);
              } catch {
              }
            }
          }
        return "";
      }
      var ao = {}, uo = we.ReactDebugCurrentFrame;
      function Jr(u) {
        if (u) {
          var y = u._owner, S = Xr(u.type, u._source, y ? y.type : null);
          uo.setExtraStackFrame(S);
        } else
          uo.setExtraStackFrame(null);
      }
      function Al(u, y, S, O, D) {
        {
          var J = Function.call.bind(Sr);
          for (var z in u)
            if (J(u, z)) {
              var ee = void 0;
              try {
                if (typeof u[z] != "function") {
                  var se = Error((O || "React class") + ": " + S + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw se.name = "Invariant Violation", se;
                }
                ee = u[z](y, z, O, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (le) {
                ee = le;
              }
              ee && !(ee instanceof Error) && (Jr(D), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", S, z, typeof ee), Jr(null)), ee instanceof Error && !(ee.message in ao) && (ao[ee.message] = !0, Jr(D), K("Failed %s type: %s", S, ee.message), Jr(null));
            }
        }
      }
      function er(u) {
        if (u) {
          var y = u._owner, S = Xr(u.type, u._source, y ? y.type : null);
          d(S);
        } else
          d(null);
      }
      var ui;
      ui = !1;
      function co() {
        if (k.current) {
          var u = Ct(k.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
      function xl(u) {
        if (u !== void 0) {
          var y = u.fileName.replace(/^.*[\\\/]/, ""), S = u.lineNumber;
          return `

Check your code at ` + y + ":" + S + ".";
        }
        return "";
      }
      function kl(u) {
        return u != null ? xl(u.__source) : "";
      }
      var lo = {};
      function Dl(u) {
        var y = co();
        if (!y) {
          var S = typeof u == "string" ? u : u.displayName || u.name;
          S && (y = `

Check the top-level render call using <` + S + ">.");
        }
        return y;
      }
      function fo(u, y) {
        if (!(!u._store || u._store.validated || u.key != null)) {
          u._store.validated = !0;
          var S = Dl(y);
          if (!lo[S]) {
            lo[S] = !0;
            var O = "";
            u && u._owner && u._owner !== k.current && (O = " It was passed a child from " + Ct(u._owner.type) + "."), er(u), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, O), er(null);
          }
        }
      }
      function ho(u, y) {
        if (typeof u == "object") {
          if ($e(u))
            for (var S = 0; S < u.length; S++) {
              var O = u[S];
              Zt(O) && fo(O, y);
            }
          else if (Zt(u))
            u._store && (u._store.validated = !0);
          else if (u) {
            var D = M(u);
            if (typeof D == "function" && D !== u.entries)
              for (var J = D.call(u), z; !(z = J.next()).done; )
                Zt(z.value) && fo(z.value, y);
          }
        }
      }
      function po(u) {
        {
          var y = u.type;
          if (y == null || typeof y == "string")
            return;
          var S;
          if (typeof y == "function")
            S = y.propTypes;
          else if (typeof y == "object" && (y.$$typeof === f || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          y.$$typeof === b))
            S = y.propTypes;
          else
            return;
          if (S) {
            var O = Ct(y);
            Al(S, u.props, "prop", O, u);
          } else if (y.PropTypes !== void 0 && !ui) {
            ui = !0;
            var D = Ct(y);
            K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
          }
          typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Il(u) {
        {
          for (var y = Object.keys(u.props), S = 0; S < y.length; S++) {
            var O = y[S];
            if (O !== "children" && O !== "key") {
              er(u), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), er(null);
              break;
            }
          }
          u.ref !== null && (er(u), K("Invalid attribute `ref` supplied to `React.Fragment`."), er(null));
        }
      }
      function mo(u, y, S) {
        var O = Xs(u);
        if (!O) {
          var D = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = kl(y);
          J ? D += J : D += co();
          var z;
          u === null ? z = "null" : $e(u) ? z = "array" : u !== void 0 && u.$$typeof === n ? (z = "<" + (Ct(u.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : z = typeof u, K("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, D);
        }
        var ee = Qc.apply(this, arguments);
        if (ee == null)
          return ee;
        if (O)
          for (var se = 2; se < arguments.length; se++)
            ho(arguments[se], u);
        return u === s ? Il(ee) : po(ee), ee;
      }
      var yo = !1;
      function $l(u) {
        var y = mo.bind(null, u);
        return y.type = u, yo || (yo = !0, be("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(y, "type", {
          enumerable: !1,
          get: function() {
            return be("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: u
            }), u;
          }
        }), y;
      }
      function Fl(u, y, S) {
        for (var O = Xc.apply(this, arguments), D = 2; D < arguments.length; D++)
          ho(arguments[D], O.type);
        return po(O), O;
      }
      function Ml(u, y) {
        var S = R.transition;
        R.transition = {};
        var O = R.transition;
        R.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          u();
        } finally {
          if (R.transition = S, S === null && O._updatedFibers) {
            var D = O._updatedFibers.size;
            D > 10 && be("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), O._updatedFibers.clear();
          }
        }
      }
      var go = !1, Zr = null;
      function Ll(u) {
        if (Zr === null)
          try {
            var y = ("require" + Math.random()).slice(0, 7), S = t && t[y];
            Zr = S.call(t, "timers").setImmediate;
          } catch {
            Zr = function(D) {
              go === !1 && (go = !0, typeof MessageChannel > "u" && K("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var J = new MessageChannel();
              J.port1.onmessage = D, J.port2.postMessage(void 0);
            };
          }
        return Zr(u);
      }
      var tr = 0, bo = !1;
      function vo(u) {
        {
          var y = tr;
          tr++, v.current === null && (v.current = []);
          var S = v.isBatchingLegacy, O;
          try {
            if (v.isBatchingLegacy = !0, O = u(), !S && v.didScheduleLegacyUpdate) {
              var D = v.current;
              D !== null && (v.didScheduleLegacyUpdate = !1, di(D));
            }
          } catch (ve) {
            throw en(y), ve;
          } finally {
            v.isBatchingLegacy = S;
          }
          if (O !== null && typeof O == "object" && typeof O.then == "function") {
            var J = O, z = !1, ee = {
              then: function(ve, Te) {
                z = !0, J.then(function(Pe) {
                  en(y), tr === 0 ? ci(Pe, ve, Te) : ve(Pe);
                }, function(Pe) {
                  en(y), Te(Pe);
                });
              }
            };
            return !bo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              z || (bo = !0, K("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ee;
          } else {
            var se = O;
            if (en(y), tr === 0) {
              var le = v.current;
              le !== null && (di(le), v.current = null);
              var pe = {
                then: function(ve, Te) {
                  v.current === null ? (v.current = [], ci(se, ve, Te)) : ve(se);
                }
              };
              return pe;
            } else {
              var me = {
                then: function(ve, Te) {
                  ve(se);
                }
              };
              return me;
            }
          }
        }
      }
      function en(u) {
        u !== tr - 1 && K("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), tr = u;
      }
      function ci(u, y, S) {
        {
          var O = v.current;
          if (O !== null)
            try {
              di(O), Ll(function() {
                O.length === 0 ? (v.current = null, y(u)) : ci(u, y, S);
              });
            } catch (D) {
              S(D);
            }
          else
            y(u);
        }
      }
      var li = !1;
      function di(u) {
        if (!li) {
          li = !0;
          var y = 0;
          try {
            for (; y < u.length; y++) {
              var S = u[y];
              do
                S = S(!0);
              while (S !== null);
            }
            u.length = 0;
          } catch (O) {
            throw u = u.slice(y + 1), O;
          } finally {
            li = !1;
          }
        }
      }
      var jl = mo, Bl = Fl, Vl = $l, Ul = {
        map: Hr,
        forEach: rl,
        count: tl,
        toArray: nl,
        only: il
      };
      e.Children = Ul, e.Component = F, e.Fragment = s, e.Profiler = a, e.PureComponent = Q, e.StrictMode = o, e.Suspense = p, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, e.act = vo, e.cloneElement = Bl, e.createContext = sl, e.createElement = jl, e.createFactory = Vl, e.createRef = xe, e.forwardRef = cl, e.isValidElement = Zt, e.lazy = ul, e.memo = ll, e.startTransition = Ml, e.unstable_act = vo, e.useCallback = bl, e.useContext = dl, e.useDebugValue = Sl, e.useDeferredValue = El, e.useEffect = ml, e.useId = Cl, e.useImperativeHandle = wl, e.useInsertionEffect = yl, e.useLayoutEffect = gl, e.useMemo = vl, e.useReducer = hl, e.useRef = pl, e.useState = fl, e.useSyncExternalStore = Ol, e.useTransition = _l, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Tr, Tr.exports)), Tr.exports;
}
process.env.NODE_ENV === "production" ? Ii.exports = Hl() : Ii.exports = Ql();
var Rn = Ii.exports;
const La = /* @__PURE__ */ as(Rn), No = /* @__PURE__ */ Kl({
  __proto__: null,
  default: La
}, [Rn]);
var $i = { exports: {} }, pi = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function Yl() {
  if (To) return pi;
  To = 1;
  var t = Rn;
  function e(l, h) {
    return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, s = t.useEffect, o = t.useMemo, a = t.useDebugValue;
  return pi.useSyncExternalStoreWithSelector = function(l, h, f, p, m) {
    var b = i(null);
    if (b.current === null) {
      var C = { hasValue: !1, value: null };
      b.current = C;
    } else C = b.current;
    b = o(function() {
      function E(v) {
        if (!A) {
          if (A = !0, M = v, v = p(v), m !== void 0 && C.hasValue) {
            var k = C.value;
            if (m(k, v)) return _ = k;
          }
          return _ = v;
        }
        if (k = _, r(M, v)) return k;
        var X = p(v);
        return m !== void 0 && m(k, X) ? k : (M = v, _ = X);
      }
      var A = !1, M, _, R = f === void 0 ? null : f;
      return [function() {
        return E(h());
      }, R === null ? void 0 : function() {
        return E(R());
      }];
    }, [h, f, p, m]);
    var w = n(l, b[0], b[1]);
    return s(function() {
      C.hasValue = !0, C.value = w;
    }, [w]), a(w), w;
  }, pi;
}
var mi = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo;
function Xl() {
  return qo || (qo = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Rn;
    function e(h, f) {
      return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
    }
    var r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, s = t.useEffect, o = t.useMemo, a = t.useDebugValue;
    function l(h, f, p, m, b) {
      var C = i(null), w;
      C.current === null ? (w = {
        hasValue: !1,
        value: null
      }, C.current = w) : w = C.current;
      var E = o(function() {
        var R = !1, v, k, X = function(V) {
          if (!R) {
            R = !0, v = V;
            var te = m(V);
            if (b !== void 0 && w.hasValue) {
              var Ce = w.value;
              if (b(Ce, te))
                return k = Ce, Ce;
            }
            return k = te, te;
          }
          var ge = v, we = k;
          if (r(ge, V))
            return we;
          var be = m(V);
          return b !== void 0 && b(we, be) ? we : (v = V, k = be, be);
        }, Y = p === void 0 ? null : p, d = function() {
          return X(f());
        }, $ = Y === null ? void 0 : function() {
          return X(Y());
        };
        return [d, $];
      }, [f, p, m, b]), A = E[0], M = E[1], _ = n(h, A, M);
      return s(function() {
        w.hasValue = !0, w.value = _;
      }, [_]), a(_), _;
    }
    mi.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), mi;
}
process.env.NODE_ENV === "production" ? $i.exports = Yl() : $i.exports = Xl();
var Jl = $i.exports, lt = (
  // prettier-ignore
  // @ts-ignore
  "default" in No ? La : No
), Ro = Symbol.for("react-redux-context"), Po = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Zl() {
  if (!lt.createContext)
    return {};
  const t = Po[Ro] ?? (Po[Ro] = /* @__PURE__ */ new Map());
  let e = t.get(lt.createContext);
  return e || (e = lt.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (e.displayName = "ReactRedux"), t.set(lt.createContext, e)), e;
}
var Kt = /* @__PURE__ */ Zl(), ed = () => {
  throw new Error("uSES not initialized!");
};
function us(t = Kt) {
  return function() {
    const r = lt.useContext(t);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var ja = /* @__PURE__ */ us(), Ba = ed, td = (t) => {
  Ba = t;
}, rd = (t, e) => t === e;
function nd(t = Kt) {
  const e = t === Kt ? ja : us(t), r = (n, i = {}) => {
    const { equalityFn: s = rd, devModeChecks: o = {} } = typeof i == "function" ? { equalityFn: i } : i;
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
      subscription: l,
      getServerState: h,
      stabilityCheck: f,
      identityFunctionCheck: p
    } = e(), m = lt.useRef(!0), b = lt.useCallback(
      {
        [n.name](w) {
          const E = n(w);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: A,
              stabilityCheck: M
            } = {
              stabilityCheck: f,
              identityFunctionCheck: p,
              ...o
            };
            if (M === "always" || M === "once" && m.current) {
              const _ = n(w);
              if (!s(E, _)) {
                let R;
                try {
                  throw new Error();
                } catch (v) {
                  ({ stack: R } = v);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: w,
                    selected: E,
                    selected2: _,
                    stack: R
                  }
                );
              }
            }
            if ((A === "always" || A === "once" && m.current) && E === w) {
              let _;
              try {
                throw new Error();
              } catch (R) {
                ({ stack: _ } = R);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: _ }
              );
            }
            m.current && (m.current = !1);
          }
          return E;
        }
      }[n.name],
      [n, f, o.stabilityCheck]
    ), C = Ba(
      l.addNestedSub,
      a.getState,
      h || a.getState,
      b,
      s
    );
    return lt.useDebugValue(C), C;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Va = /* @__PURE__ */ nd(), id = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", sd = typeof navigator < "u" && navigator.product === "ReactNative";
id || sd ? lt.useLayoutEffect : lt.useEffect;
function Ua(t = Kt) {
  const e = t === Kt ? ja : (
    // @ts-ignore
    us(t)
  ), r = () => {
    const { store: n } = e();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var od = /* @__PURE__ */ Ua();
function ad(t = Kt) {
  const e = t === Kt ? od : Ua(t), r = () => e().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var za = /* @__PURE__ */ ad();
td(Jl.useSyncExternalStoreWithSelector);
const ud = Va.withTypes(), Pb = za.withTypes();
function Re(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var cd = typeof Symbol == "function" && Symbol.observable || "@@observable", Ao = cd, yi = () => Math.random().toString(36).substring(7).split("").join("."), ld = {
  INIT: `@@redux/INIT${/* @__PURE__ */ yi()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ yi()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${yi()}`
}, Gt = ld;
function Br(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null;
}
function dd(t) {
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
  if (pd(t))
    return "date";
  if (hd(t))
    return "error";
  const r = fd(t);
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
function fd(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function hd(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function pd(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function bt(t) {
  let e = typeof t;
  return process.env.NODE_ENV !== "production" && (e = dd(t)), e;
}
function cs(t, e, r) {
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Re(2) : `Expected the root reducer to be a function. Instead, received: '${bt(t)}'`);
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Re(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Re(1) : `Expected the enhancer to be a function. Instead, received: '${bt(r)}'`);
    return r(cs)(t, e);
  }
  let n = t, i = e, s = /* @__PURE__ */ new Map(), o = s, a = 0, l = !1;
  function h() {
    o === s && (o = /* @__PURE__ */ new Map(), s.forEach((E, A) => {
      o.set(A, E);
    }));
  }
  function f() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Re(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function p(E) {
    if (typeof E != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Re(4) : `Expected the listener to be a function. Instead, received: '${bt(E)}'`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Re(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let A = !0;
    h();
    const M = a++;
    return o.set(M, E), function() {
      if (A) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? Re(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        A = !1, h(), o.delete(M), s = null;
      }
    };
  }
  function m(E) {
    if (!Br(E))
      throw new Error(process.env.NODE_ENV === "production" ? Re(7) : `Actions must be plain objects. Instead, the actual type was: '${bt(E)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof E.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Re(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof E.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Re(17) : `Action "type" property must be a string. Instead, the actual type was: '${bt(E.type)}'. Value was: '${E.type}' (stringified)`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Re(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = n(i, E);
    } finally {
      l = !1;
    }
    return (s = o).forEach((M) => {
      M();
    }), E;
  }
  function b(E) {
    if (typeof E != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Re(10) : `Expected the nextReducer to be a function. Instead, received: '${bt(E)}`);
    n = E, m({
      type: Gt.REPLACE
    });
  }
  function C() {
    const E = p;
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
          throw new Error(process.env.NODE_ENV === "production" ? Re(11) : `Expected the observer to be an object. Instead, received: '${bt(A)}'`);
        function M() {
          const R = A;
          R.next && R.next(f());
        }
        return M(), {
          unsubscribe: E(M)
        };
      },
      [Ao]() {
        return this;
      }
    };
  }
  return m({
    type: Gt.INIT
  }), {
    dispatch: m,
    subscribe: p,
    getState: f,
    replaceReducer: b,
    [Ao]: C
  };
}
function xo(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function md(t, e, r, n) {
  const i = Object.keys(e), s = r && r.type === Gt.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Br(t))
    return `The ${s} has unexpected type of "${bt(t)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const o = Object.keys(t).filter((a) => !e.hasOwnProperty(a) && !n[a]);
  if (o.forEach((a) => {
    n[a] = !0;
  }), !(r && r.type === Gt.REPLACE) && o.length > 0)
    return `Unexpected ${o.length > 1 ? "keys" : "key"} "${o.join('", "')}" found in ${s}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function yd(t) {
  Object.keys(t).forEach((e) => {
    const r = t[e];
    if (typeof r(void 0, {
      type: Gt.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Re(12) : `The slice reducer for key "${e}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Gt.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Re(13) : `The slice reducer for key "${e}" returned undefined when probed with a random type. Don't try to handle '${Gt.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function ls(t) {
  const e = Object.keys(t), r = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    process.env.NODE_ENV !== "production" && typeof t[a] > "u" && xo(`No reducer provided for key "${a}"`), typeof t[a] == "function" && (r[a] = t[a]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let s;
  try {
    yd(r);
  } catch (o) {
    s = o;
  }
  return function(a = {}, l) {
    if (s)
      throw s;
    if (process.env.NODE_ENV !== "production") {
      const p = md(a, r, l, i);
      p && xo(p);
    }
    let h = !1;
    const f = {};
    for (let p = 0; p < n.length; p++) {
      const m = n[p], b = r[m], C = a[m], w = b(C, l);
      if (typeof w > "u") {
        const E = l && l.type;
        throw new Error(process.env.NODE_ENV === "production" ? Re(14) : `When called with an action of type ${E ? `"${String(E)}"` : "(unknown type)"}, the slice reducer for key "${m}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[m] = w, h = h || w !== C;
    }
    return h = h || n.length !== Object.keys(a).length, h ? f : a;
  };
}
function ko(t, e) {
  return function(...r) {
    return e(t.apply(this, r));
  };
}
function gd(t, e) {
  if (typeof t == "function")
    return ko(t, e);
  if (typeof t != "object" || t === null)
    throw new Error(process.env.NODE_ENV === "production" ? Re(16) : `bindActionCreators expected an object or a function, but instead received: '${bt(t)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const r = {};
  for (const n in t) {
    const i = t[n];
    typeof i == "function" && (r[n] = ko(i, e));
  }
  return r;
}
function wn(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, r) => (...n) => e(r(...n)));
}
function bd(...t) {
  return (e) => (r, n) => {
    const i = e(r, n);
    let s = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Re(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const o = {
      getState: i.getState,
      dispatch: (l, ...h) => s(l, ...h)
    }, a = t.map((l) => l(o));
    return s = wn(...a)(i.dispatch), {
      ...i,
      dispatch: s
    };
  };
}
function Ga(t) {
  return Br(t) && "type" in t && typeof t.type == "string";
}
var Wa = Symbol.for("immer-nothing"), Do = Symbol.for("immer-draftable"), We = Symbol.for("immer-state"), vd = process.env.NODE_ENV !== "production" ? [
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
function Ve(t, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const r = vd[t], n = typeof r == "function" ? r.apply(null, e) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var vr = Object.getPrototypeOf;
function Ht(t) {
  return !!t && !!t[We];
}
function St(t) {
  var e;
  return t ? Ka(t) || Array.isArray(t) || !!t[Do] || !!((e = t.constructor) != null && e[Do]) || An(t) || xn(t) : !1;
}
var wd = Object.prototype.constructor.toString();
function Ka(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = vr(t);
  if (e === null)
    return !0;
  const r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === wd;
}
function Sn(t, e) {
  Pn(t) === 0 ? Reflect.ownKeys(t).forEach((r) => {
    e(r, t[r], t);
  }) : t.forEach((r, n) => e(n, r, t));
}
function Pn(t) {
  const e = t[We];
  return e ? e.type_ : Array.isArray(t) ? 1 : An(t) ? 2 : xn(t) ? 3 : 0;
}
function Fi(t, e) {
  return Pn(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function Ha(t, e, r) {
  const n = Pn(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function Sd(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function An(t) {
  return t instanceof Map;
}
function xn(t) {
  return t instanceof Set;
}
function Mt(t) {
  return t.copy_ || t.base_;
}
function Mi(t, e) {
  if (An(t))
    return new Map(t);
  if (xn(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const r = Ka(t);
  if (e === !0 || e === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(t);
    delete n[We];
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
    return Object.create(vr(t), n);
  } else {
    const n = vr(t);
    if (n !== null && r)
      return { ...t };
    const i = Object.create(n);
    return Object.assign(i, t);
  }
}
function ds(t, e = !1) {
  return kn(t) || Ht(t) || !St(t) || (Pn(t) > 1 && (t.set = t.add = t.clear = t.delete = _d), Object.freeze(t), e && Object.entries(t).forEach(([r, n]) => ds(n, !0))), t;
}
function _d() {
  Ve(2);
}
function kn(t) {
  return Object.isFrozen(t);
}
var Ed = {};
function Qt(t) {
  const e = Ed[t];
  return e || Ve(0, t), e;
}
var Dr;
function Qa() {
  return Dr;
}
function Cd(t, e) {
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
function Io(t, e) {
  e && (Qt("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = e);
}
function Li(t) {
  ji(t), t.drafts_.forEach(Od), t.drafts_ = null;
}
function ji(t) {
  t === Dr && (Dr = t.parent_);
}
function $o(t) {
  return Dr = Cd(Dr, t);
}
function Od(t) {
  const e = t[We];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function Fo(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const r = e.drafts_[0];
  return t !== void 0 && t !== r ? (r[We].modified_ && (Li(e), Ve(4)), St(t) && (t = _n(e, t), e.parent_ || En(e, t)), e.patches_ && Qt("Patches").generateReplacementPatches_(
    r[We].base_,
    t,
    e.patches_,
    e.inversePatches_
  )) : t = _n(e, r, []), Li(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), t !== Wa ? t : void 0;
}
function _n(t, e, r) {
  if (kn(e))
    return e;
  const n = e[We];
  if (!n)
    return Sn(
      e,
      (i, s) => Mo(t, n, e, i, s, r)
    ), e;
  if (n.scope_ !== t)
    return e;
  if (!n.modified_)
    return En(t, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let s = i, o = !1;
    n.type_ === 3 && (s = new Set(i), i.clear(), o = !0), Sn(
      s,
      (a, l) => Mo(t, n, i, a, l, r, o)
    ), En(t, i, !1), r && t.patches_ && Qt("Patches").generatePatches_(
      n,
      r,
      t.patches_,
      t.inversePatches_
    );
  }
  return n.copy_;
}
function Mo(t, e, r, n, i, s, o) {
  if (process.env.NODE_ENV !== "production" && i === r && Ve(5), Ht(i)) {
    const a = s && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Fi(e.assigned_, n) ? s.concat(n) : void 0, l = _n(t, i, a);
    if (Ha(r, n, l), Ht(l))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else o && r.add(i);
  if (St(i) && !kn(i)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    _n(t, i), (!e || !e.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && En(t, i);
  }
}
function En(t, e, r = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && ds(e, r);
}
function Nd(t, e) {
  const r = Array.isArray(t), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Qa(),
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
  let i = n, s = fs;
  r && (i = [n], s = Ir);
  const { revoke: o, proxy: a } = Proxy.revocable(i, s);
  return n.draft_ = a, n.revoke_ = o, a;
}
var fs = {
  get(t, e) {
    if (e === We)
      return t;
    const r = Mt(t);
    if (!Fi(r, e))
      return Td(t, r, e);
    const n = r[e];
    return t.finalized_ || !St(n) ? n : n === gi(t.base_, e) ? (bi(t), t.copy_[e] = Vi(n, t)) : n;
  },
  has(t, e) {
    return e in Mt(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(Mt(t));
  },
  set(t, e, r) {
    const n = Ya(Mt(t), e);
    if (n != null && n.set)
      return n.set.call(t.draft_, r), !0;
    if (!t.modified_) {
      const i = gi(Mt(t), e), s = i == null ? void 0 : i[We];
      if (s && s.base_ === r)
        return t.copy_[e] = r, t.assigned_[e] = !1, !0;
      if (Sd(r, i) && (r !== void 0 || Fi(t.base_, e)))
        return !0;
      bi(t), Bi(t);
    }
    return t.copy_[e] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || e in t.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(t.copy_[e]) || (t.copy_[e] = r, t.assigned_[e] = !0), !0;
  },
  deleteProperty(t, e) {
    return gi(t.base_, e) !== void 0 || e in t.base_ ? (t.assigned_[e] = !1, bi(t), Bi(t)) : delete t.assigned_[e], t.copy_ && delete t.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, e) {
    const r = Mt(t), n = Reflect.getOwnPropertyDescriptor(r, e);
    return n && {
      writable: !0,
      configurable: t.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: r[e]
    };
  },
  defineProperty() {
    Ve(11);
  },
  getPrototypeOf(t) {
    return vr(t.base_);
  },
  setPrototypeOf() {
    Ve(12);
  }
}, Ir = {};
Sn(fs, (t, e) => {
  Ir[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
Ir.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && Ve(13), Ir.set.call(this, t, e, void 0);
};
Ir.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && Ve(14), fs.set.call(this, t[0], e, r, t[0]);
};
function gi(t, e) {
  const r = t[We];
  return (r ? Mt(r) : t)[e];
}
function Td(t, e, r) {
  var i;
  const n = Ya(e, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(t.draft_)
  ) : void 0;
}
function Ya(t, e) {
  if (!(e in t))
    return;
  let r = vr(t);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, e);
    if (n)
      return n;
    r = vr(r);
  }
}
function Bi(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Bi(t.parent_));
}
function bi(t) {
  t.copy_ || (t.copy_ = Mi(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var qd = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, r, n) => {
      if (typeof e == "function" && typeof r != "function") {
        const s = r;
        r = e;
        const o = this;
        return function(l = s, ...h) {
          return o.produce(l, (f) => r.call(this, f, ...h));
        };
      }
      typeof r != "function" && Ve(6), n !== void 0 && typeof n != "function" && Ve(7);
      let i;
      if (St(e)) {
        const s = $o(this), o = Vi(e, void 0);
        let a = !0;
        try {
          i = r(o), a = !1;
        } finally {
          a ? Li(s) : ji(s);
        }
        return Io(s, n), Fo(i, s);
      } else if (!e || typeof e != "object") {
        if (i = r(e), i === void 0 && (i = e), i === Wa && (i = void 0), this.autoFreeze_ && ds(i, !0), n) {
          const s = [], o = [];
          Qt("Patches").generateReplacementPatches_(e, i, s, o), n(s, o);
        }
        return i;
      } else
        Ve(1, e);
    }, this.produceWithPatches = (e, r) => {
      if (typeof e == "function")
        return (o, ...a) => this.produceWithPatches(o, (l) => e(l, ...a));
      let n, i;
      return [this.produce(e, r, (o, a) => {
        n = o, i = a;
      }), n, i];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    St(t) || Ve(8), Ht(t) && (t = Rd(t));
    const e = $o(this), r = Vi(t, void 0);
    return r[We].isManual_ = !0, ji(e), r;
  }
  finishDraft(t, e) {
    const r = t && t[We];
    (!r || !r.isManual_) && Ve(9);
    const { scope_: n } = r;
    return Io(n, e), Fo(void 0, n);
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
    const n = Qt("Patches").applyPatches_;
    return Ht(t) ? n(t, e) : this.produce(
      t,
      (i) => n(i, e)
    );
  }
};
function Vi(t, e) {
  const r = An(t) ? Qt("MapSet").proxyMap_(t, e) : xn(t) ? Qt("MapSet").proxySet_(t, e) : Nd(t, e);
  return (e ? e.scope_ : Qa()).drafts_.push(r), r;
}
function Rd(t) {
  return Ht(t) || Ve(10, t), Xa(t);
}
function Xa(t) {
  if (!St(t) || kn(t))
    return t;
  const e = t[We];
  let r;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, r = Mi(t, e.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Mi(t, !0);
  return Sn(r, (n, i) => {
    Ha(r, n, Xa(i));
  }), e && (e.finalized_ = !1), r;
}
var Ke = new qd(), Ja = Ke.produce;
Ke.produceWithPatches.bind(
  Ke
);
Ke.setAutoFreeze.bind(Ke);
Ke.setUseStrictShallowCopy.bind(Ke);
Ke.applyPatches.bind(Ke);
Ke.createDraft.bind(Ke);
Ke.finishDraft.bind(Ke);
function Za(t) {
  return ({ dispatch: r, getState: n }) => (i) => (s) => typeof s == "function" ? s(r, n, t) : i(s);
}
var Pd = Za(), Ad = Za, xd = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? wn : wn.apply(null, arguments);
}, kd = (t) => t && typeof t.match == "function";
function Lo(t, e) {
  function r(...n) {
    if (e) {
      let i = e(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? he(0) : "prepareAction did not return an object");
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
  return r.toString = () => `${t}`, r.type = t, r.match = (n) => Ga(n) && n.type === t, r;
}
function Dd(t) {
  return typeof t == "function" && "type" in t && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  kd(t);
}
function Id(t) {
  const e = t ? `${t}`.split("/") : [], r = e[e.length - 1] || "actionCreator";
  return `Detected an action creator with type "${t || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function $d(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: e = Dd
  } = t;
  return () => (r) => (n) => (e(n) && console.warn(Id(n.type)), r(n));
}
function eu(t, e) {
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
var tu = class qr extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, qr.prototype);
  }
  static get [Symbol.species]() {
    return qr;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new qr(...e[0].concat(this)) : new qr(...e.concat(this));
  }
};
function jo(t) {
  return St(t) ? Ja(t, () => {
  }) : t;
}
function Bo(t, e, r) {
  if (t.has(e)) {
    let i = t.get(e);
    return r.update && (i = r.update(i, e, t), t.set(e, i)), i;
  }
  if (!r.insert) throw new Error(process.env.NODE_ENV === "production" ? he(10) : "No insert provided for key not already in map");
  const n = r.insert(e, t);
  return t.set(e, n), n;
}
function Fd(t) {
  return typeof t != "object" || t == null || Object.isFrozen(t);
}
function Md(t, e, r) {
  const n = ru(t, e, r);
  return {
    detectMutations() {
      return nu(t, e, n, r);
    }
  };
}
function ru(t, e = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const s = {
    value: r
  };
  if (!t(r) && !i.has(r)) {
    i.add(r), s.children = {};
    for (const o in r) {
      const a = n ? n + "." + o : o;
      e.length && e.indexOf(a) !== -1 || (s.children[o] = ru(t, e, r[o], a));
    }
  }
  return s;
}
function nu(t, e = [], r, n, i = !1, s = "") {
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
  const l = {};
  for (let f in r.children)
    l[f] = !0;
  for (let f in n)
    l[f] = !0;
  const h = e.length > 0;
  for (let f in l) {
    const p = s ? s + "." + f : f;
    if (h && e.some((C) => C instanceof RegExp ? C.test(p) : p === C))
      continue;
    const m = nu(t, e, r.children[f], n[f], a, p);
    if (m.wasMutated)
      return m;
  }
  return {
    wasMutated: !1
  };
}
function Ld(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (e) => (r) => e(r);
  {
    let e = function(a, l, h, f) {
      return JSON.stringify(a, r(l, f), h);
    }, r = function(a, l) {
      let h = [], f = [];
      return l || (l = function(p, m) {
        return h[0] === m ? "[Circular ~]" : "[Circular ~." + f.slice(0, h.indexOf(m)).join(".") + "]";
      }), function(p, m) {
        if (h.length > 0) {
          var b = h.indexOf(this);
          ~b ? h.splice(b + 1) : h.push(this), ~b ? f.splice(b, 1 / 0, p) : f.push(p), ~h.indexOf(m) && (m = l.call(this, p, m));
        } else h.push(m);
        return a == null ? m : a.call(this, p, m);
      };
    }, {
      isImmutable: n = Fd,
      ignoredPaths: i,
      warnAfter: s = 32
    } = t;
    const o = Md.bind(null, n, i);
    return ({
      getState: a
    }) => {
      let l = a(), h = o(l), f;
      return (p) => (m) => {
        const b = eu(s, "ImmutableStateInvariantMiddleware");
        b.measureTime(() => {
          if (l = a(), f = h.detectMutations(), h = o(l), f.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? he(19) : `A state mutation was detected between dispatches, in the path '${f.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const C = p(m);
        return b.measureTime(() => {
          if (l = a(), f = h.detectMutations(), h = o(l), f.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? he(20) : `A state mutation was detected inside a dispatch, in the path: ${f.path || ""}. Take a look at the reducer(s) handling the action ${e(m)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), b.warnIfExceeded(), C;
      };
    };
  }
}
function iu(t) {
  const e = typeof t;
  return t == null || e === "string" || e === "boolean" || e === "number" || Array.isArray(t) || Br(t);
}
function Ui(t, e = "", r = iu, n, i = [], s) {
  let o;
  if (!r(t))
    return {
      keyPath: e || "<root>",
      value: t
    };
  if (typeof t != "object" || t === null || s != null && s.has(t)) return !1;
  const a = n != null ? n(t) : Object.entries(t), l = i.length > 0;
  for (const [h, f] of a) {
    const p = e ? e + "." + h : h;
    if (!(l && i.some((b) => b instanceof RegExp ? b.test(p) : p === b))) {
      if (!r(f))
        return {
          keyPath: p,
          value: f
        };
      if (typeof f == "object" && (o = Ui(f, p, r, n, i, s), o))
        return o;
    }
  }
  return s && su(t) && s.add(t), !1;
}
function su(t) {
  if (!Object.isFrozen(t)) return !1;
  for (const e of Object.values(t))
    if (!(typeof e != "object" || e === null) && !su(e))
      return !1;
  return !0;
}
function jd(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (e) => (r) => e(r);
  {
    const {
      isSerializable: e = iu,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: s = [],
      warnAfter: o = 32,
      ignoreState: a = !1,
      ignoreActions: l = !1,
      disableCache: h = !1
    } = t, f = !h && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (p) => (m) => (b) => {
      if (!Ga(b))
        return m(b);
      const C = m(b), w = eu(o, "SerializableStateInvariantMiddleware");
      return !l && !(n.length && n.indexOf(b.type) !== -1) && w.measureTime(() => {
        const E = Ui(b, "", e, r, i, f);
        if (E) {
          const {
            keyPath: A,
            value: M
          } = E;
          console.error(`A non-serializable value was detected in an action, in the path: \`${A}\`. Value:`, M, `
Take a look at the logic that dispatched this action: `, b, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), a || (w.measureTime(() => {
        const E = p.getState(), A = Ui(E, "", e, r, s, f);
        if (A) {
          const {
            keyPath: M,
            value: _
          } = A;
          console.error(`A non-serializable value was detected in the state, in the path: \`${M}\`. Value:`, _, `
Take a look at the reducer(s) handling this action type: ${b.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), w.warnIfExceeded()), C;
    };
  }
}
function nn(t) {
  return typeof t == "boolean";
}
var Bd = () => function(e) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: s = !0
  } = e ?? {};
  let o = new tu();
  if (r && (nn(r) ? o.push(Pd) : o.push(Ad(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let a = {};
      nn(n) || (a = n), o.unshift(Ld(a));
    }
    if (i) {
      let a = {};
      nn(i) || (a = i), o.push(jd(a));
    }
    if (s) {
      let a = {};
      nn(s) || (a = s), o.unshift($d(a));
    }
  }
  return o;
}, Vd = "RTK_autoBatch", ou = (t) => (e) => {
  setTimeout(e, t);
}, Ud = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ou(10), zd = (t = {
  type: "raf"
}) => (e) => (...r) => {
  const n = e(...r);
  let i = !0, s = !1, o = !1;
  const a = /* @__PURE__ */ new Set(), l = t.type === "tick" ? queueMicrotask : t.type === "raf" ? Ud : t.type === "callback" ? t.queueNotification : ou(t.timeout), h = () => {
    o = !1, s && (s = !1, a.forEach((f) => f()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const p = () => i && f(), m = n.subscribe(p);
      return a.add(f), () => {
        m(), a.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var p;
      try {
        return i = !((p = f == null ? void 0 : f.meta) != null && p[Vd]), s = !i, s && (o || (o = !0, l(h))), n.dispatch(f);
      } finally {
        i = !0;
      }
    }
  });
}, Gd = (t) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new tu(t);
  return n && i.push(zd(typeof n == "object" ? n : void 0)), i;
};
function Dn(t) {
  const e = Bd(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    preloadedState: s = void 0,
    enhancers: o = void 0
  } = t || {};
  let a;
  if (typeof r == "function")
    a = r;
  else if (Br(r))
    a = ls(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? he(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? he(2) : "`middleware` field must be a callback");
  let l;
  if (typeof n == "function") {
    if (l = n(e), process.env.NODE_ENV !== "production" && !Array.isArray(l))
      throw new Error(process.env.NODE_ENV === "production" ? he(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    l = e();
  if (process.env.NODE_ENV !== "production" && l.some((C) => typeof C != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? he(4) : "each middleware provided to configureStore must be a function");
  let h = wn;
  i && (h = xd({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const f = bd(...l), p = Gd(f);
  if (process.env.NODE_ENV !== "production" && o && typeof o != "function")
    throw new Error(process.env.NODE_ENV === "production" ? he(5) : "`enhancers` field must be a callback");
  let m = typeof o == "function" ? o(p) : p();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(m))
    throw new Error(process.env.NODE_ENV === "production" ? he(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && m.some((C) => typeof C != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? he(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && l.length && !m.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const b = h(...m);
  return cs(a, s, b);
}
function au(t) {
  const e = {}, r = [];
  let n;
  const i = {
    addCase(s, o) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? he(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? he(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof s == "string" ? s : s.type;
      if (!a)
        throw new Error(process.env.NODE_ENV === "production" ? he(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in e)
        throw new Error(process.env.NODE_ENV === "production" ? he(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return e[a] = o, i;
    },
    addMatcher(s, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? he(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: s,
        reducer: o
      }), i;
    },
    addDefaultCase(s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? he(31) : "`builder.addDefaultCase` can only be called once");
      return n = s, i;
    }
  };
  return t(i), [e, r, n];
}
function Wd(t) {
  return typeof t == "function";
}
function Kd(t, e) {
  if (process.env.NODE_ENV !== "production" && typeof e == "object")
    throw new Error(process.env.NODE_ENV === "production" ? he(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = au(e), s;
  if (Wd(t))
    s = () => jo(t());
  else {
    const a = jo(t);
    s = () => a;
  }
  function o(a = s(), l) {
    let h = [r[l.type], ...n.filter(({
      matcher: f
    }) => f(l)).map(({
      reducer: f
    }) => f)];
    return h.filter((f) => !!f).length === 0 && (h = [i]), h.reduce((f, p) => {
      if (p)
        if (Ht(f)) {
          const b = p(f, l);
          return b === void 0 ? f : b;
        } else {
          if (St(f))
            return Ja(f, (m) => p(m, l));
          {
            const m = p(f, l);
            if (m === void 0) {
              if (f === null)
                return f;
              throw new Error(process.env.NODE_ENV === "production" ? he(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return m;
          }
        }
      return f;
    }, a);
  }
  return o.getInitialState = s, o;
}
var Hd = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Qd(t, e) {
  return `${t}/${e}`;
}
function Yd({
  creators: t
} = {}) {
  var r;
  const e = (r = t == null ? void 0 : t.asyncThunk) == null ? void 0 : r[Hd];
  return function(i) {
    const {
      name: s,
      reducerPath: o = s
    } = i;
    if (!s)
      throw new Error(process.env.NODE_ENV === "production" ? he(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof i.reducers == "function" ? i.reducers(Jd()) : i.reducers) || {}, l = Object.keys(a), h = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(_, R) {
        const v = typeof _ == "string" ? _ : _.type;
        if (!v)
          throw new Error(process.env.NODE_ENV === "production" ? he(12) : "`context.addCase` cannot be called with an empty action type");
        if (v in h.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? he(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + v);
        return h.sliceCaseReducersByType[v] = R, f;
      },
      addMatcher(_, R) {
        return h.sliceMatchers.push({
          matcher: _,
          reducer: R
        }), f;
      },
      exposeAction(_, R) {
        return h.actionCreators[_] = R, f;
      },
      exposeCaseReducer(_, R) {
        return h.sliceCaseReducersByName[_] = R, f;
      }
    };
    l.forEach((_) => {
      const R = a[_], v = {
        reducerName: _,
        type: Qd(s, _),
        createNotation: typeof i.reducers == "function"
      };
      ef(R) ? rf(v, R, f, e) : Zd(v, R, f);
    });
    function p() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? he(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [_ = {}, R = [], v = void 0] = typeof i.extraReducers == "function" ? au(i.extraReducers) : [i.extraReducers], k = {
        ..._,
        ...h.sliceCaseReducersByType
      };
      return Kd(i.initialState, (X) => {
        for (let Y in k)
          X.addCase(Y, k[Y]);
        for (let Y of h.sliceMatchers)
          X.addMatcher(Y.matcher, Y.reducer);
        for (let Y of R)
          X.addMatcher(Y.matcher, Y.reducer);
        v && X.addDefaultCase(v);
      });
    }
    const m = (_) => _, b = /* @__PURE__ */ new Map();
    let C;
    function w(_, R) {
      return C || (C = p()), C(_, R);
    }
    function E() {
      return C || (C = p()), C.getInitialState();
    }
    function A(_, R = !1) {
      function v(X) {
        let Y = X[_];
        if (typeof Y > "u") {
          if (R)
            Y = E();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? he(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return Y;
      }
      function k(X = m) {
        const Y = Bo(b, R, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Bo(Y, X, {
          insert: () => {
            const d = {};
            for (const [$, V] of Object.entries(i.selectors ?? {}))
              d[$] = Xd(V, X, E, R);
            return d;
          }
        });
      }
      return {
        reducerPath: _,
        getSelectors: k,
        get selectors() {
          return k(v);
        },
        selectSlice: v
      };
    }
    const M = {
      name: s,
      reducer: w,
      actions: h.actionCreators,
      caseReducers: h.sliceCaseReducersByName,
      getInitialState: E,
      ...A(o),
      injectInto(_, {
        reducerPath: R,
        ...v
      } = {}) {
        const k = R ?? o;
        return _.inject({
          reducerPath: k,
          reducer: w
        }, v), {
          ...M,
          ...A(k, !0)
        };
      }
    };
    return M;
  };
}
function Xd(t, e, r, n) {
  function i(s, ...o) {
    let a = e(s);
    if (typeof a > "u") {
      if (n)
        a = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? he(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(a, ...o);
  }
  return i.unwrapped = t, i;
}
var ae = /* @__PURE__ */ Yd();
function Jd() {
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
function Zd({
  type: t,
  reducerName: e,
  createNotation: r
}, n, i) {
  let s, o;
  if ("reducer" in n) {
    if (r && !tf(n))
      throw new Error(process.env.NODE_ENV === "production" ? he(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    s = n.reducer, o = n.prepare;
  } else
    s = n;
  i.addCase(t, s).exposeCaseReducer(e, s).exposeAction(e, o ? Lo(t, o) : Lo(t));
}
function ef(t) {
  return t._reducerDefinitionType === "asyncThunk";
}
function tf(t) {
  return t._reducerDefinitionType === "reducerWithPrepare";
}
function rf({
  type: t,
  reducerName: e
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? he(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: s,
    fulfilled: o,
    pending: a,
    rejected: l,
    settled: h,
    options: f
  } = r, p = i(t, s, f);
  n.exposeAction(e, p), o && n.addCase(p.fulfilled, o), a && n.addCase(p.pending, a), l && n.addCase(p.rejected, l), h && n.addMatcher(p.settled, h), n.exposeCaseReducer(e, {
    fulfilled: o || sn,
    pending: a || sn,
    rejected: l || sn,
    settled: h || sn
  });
}
function sn() {
}
function he(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
const Ab = {
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
}, nf = {
  AUTH: "auth",
  LAYOUT: "layout",
  PREVIEW: "preview"
}, xb = {
  SIGN_IN: "/"
}, sf = {
  isLoggedIn: !1,
  loggedInUserInfo: null,
  employeePermissions: null,
  isForgetPswdDialog: !1
}, uu = ae({
  name: nf.AUTH,
  initialState: sf,
  reducers: {
    setIsLoggedIn: (t, e) => {
      t.isLoggedIn = e.payload;
    },
    checkAuth: (t) => {
      const e = localStorage.getItem("access_token");
      t.isLoggedIn = !!e;
    },
    setLoggedInUserInfo: (t, e) => {
      t.loggedInUserInfo = e.payload;
    },
    setEmployeePermissions: (t, e) => {
      t.employeePermissions = e.payload;
    },
    openForgetPasswordDialog: (t) => {
      t.isForgetPswdDialog = !0;
    },
    closeForgetPasswordDialog: (t) => {
      t.isForgetPswdDialog = !1;
    }
  }
}), { setIsLoggedIn: of, checkAuth: af, setLoggedInUserInfo: uf, setEmployeePermissions: cf, closeForgetPasswordDialog: lf, openForgetPasswordDialog: df } = uu.actions, ff = (t) => t.auth, hf = {
  setIsLoggedIn: of,
  checkAuth: af,
  setLoggedInUserInfo: uf,
  setEmployeePermissions: cf,
  openForgetPasswordDialog: df,
  closeForgetPasswordDialog: lf
}, pf = uu.reducer, mf = {
  mobileOpen: !1,
  isSidebarClosing: !1
}, cu = ae({
  name: "layout",
  initialState: mf,
  reducers: {
    setMobileOpen: (t, e) => {
      t.mobileOpen = e.payload;
    },
    setIsSidebarClosing: (t, e) => {
      t.isSidebarClosing = e.payload;
    }
  }
}), { setMobileOpen: yf, setIsSidebarClosing: gf } = cu.actions, bf = { setMobileOpen: yf, setIsSidebarClosing: gf }, kb = (t) => t.layout.mobileOpen, Db = (t) => t.layout.isSidebarClosing, Ib = (t) => t.layout, vf = cu.reducer, wf = {
  preview: !1
}, lu = ae({
  name: "preview",
  initialState: wf,
  reducers: {
    setPreview: (t, e) => {
      t.preview = e.payload;
    }
  }
}), { setPreview: Sf } = lu.actions, _f = { setPreview: Sf }, $b = (t) => t.preview.preview, Ef = lu.reducer, Cf = {
  isDialogBoxOpen: !1
}, du = ae({
  name: "dialogBox",
  initialState: Cf,
  reducers: {
    openDialogBox: (t) => {
      t.isDialogBoxOpen = !0;
    },
    closeDialogBox: (t) => {
      t.isDialogBoxOpen = !1;
    }
  }
}), { openDialogBox: Of, closeDialogBox: Nf } = du.actions, Tf = { openDialogBox: Of, closeDialogBox: Nf }, Fb = (t) => t.dialogBox.isDialogBoxOpen, qf = du.reducer, Rf = {
  notifications: []
}, fu = ae({
  name: "notifications",
  initialState: Rf,
  reducers: {
    addNotification: (t, e) => {
      t.notifications.push(e.payload);
    },
    clearNotifications: (t) => {
      t.notifications = [];
    },
    setNotifications: (t, e) => {
      t.notifications = e.payload;
    }
  }
}), { addNotification: Pf, clearNotifications: Af, setNotifications: xf } = fu.actions, kf = { addNotification: Pf, clearNotifications: Af, setNotifications: xf }, Mb = (t) => t.notifications.notifications, Df = fu.reducer, If = {
  isDrawerOpen: !1
}, hu = ae({
  name: "drawerContainer",
  initialState: If,
  reducers: {
    openDrawer: (t) => {
      t.isDrawerOpen = !0;
    },
    closeDrawer: (t) => {
      t.isDrawerOpen = !1;
    }
  }
}), { openDrawer: $f, closeDrawer: Ff } = hu.actions, Mf = { openDrawer: $f, closeDrawer: Ff }, Lb = (t) => t.drawerContainer.isDrawerOpen, Lf = hu.reducer, jb = () => {
  const t = za();
  return gd({
    ...hf,
    ...bf,
    ..._f,
    ...Tf,
    ...kf,
    ...Mf
  }, t);
}, jf = {
  auth: pf,
  layout: vf,
  preview: Ef,
  dialogBox: qf,
  drawerContainer: Lf,
  notifications: Df
}, Bf = {
  rfpaFormPreview: void 0
}, pu = ae({
  name: "rfpaData",
  initialState: Bf,
  reducers: {
    setRFPAFormPreview: (t, e) => {
      t.rfpaFormPreview = e.payload;
    }
  }
});
pu.actions;
const mu = pu.reducer, Vf = {
  dealSlipFormPreview: null
}, yu = ae({
  name: "dealSlipData",
  initialState: Vf,
  reducers: {
    setDealSlipFormPreview: (t, e) => {
      t.dealSlipFormPreview = e.payload;
    }
  }
});
yu.actions;
const gu = yu.reducer, Uf = {
  grn: [],
  selectedGRN: void 0,
  grnFormPreview: void 0,
  grnActionType: null,
  reasonForGRNAction: ""
}, bu = ae({
  name: "grnData",
  initialState: Uf,
  reducers: {
    setGRNData: (t, e) => {
      t.grn = e.payload;
    },
    setSelectedGRN: (t, e) => {
      t.selectedGRN = e.payload;
    },
    setGRNFormPreview: (t, e) => {
      t.grnFormPreview = e.payload;
    },
    setGRNActionType: (t, e) => {
      t.grnActionType = e.payload;
    },
    setReasonForGRNAction: (t, e) => {
      t.reasonForGRNAction = e.payload;
    }
  }
});
bu.actions;
const vu = bu.reducer, zf = {
  mcVoucherFormPreview: void 0
}, wu = ae({
  name: "mc_voucher",
  initialState: zf,
  reducers: {
    setMCVoucherFormPreview: (t, e) => {
      t.mcVoucherFormPreview = e.payload;
    }
  }
});
wu.actions;
const Su = wu.reducer, Gf = {
  lpVoucherFormPreview: null
}, _u = ae({
  name: "lp_voucher",
  initialState: Gf,
  reducers: {
    setLPVoucherFormPreview: (t, e) => {
      t.lpVoucherFormPreview = e.payload;
    }
  }
});
_u.actions;
const Eu = _u.reducer, Wf = {
  pmpVoucherFormPreview: void 0
}, Cu = ae({
  name: "pmp_voucher",
  initialState: Wf,
  reducers: {
    setPMPVoucherFormPreview: (t, e) => {
      t.pmpVoucherFormPreview = e.payload;
    }
  }
});
Cu.actions;
const Ou = Cu.reducer, Kf = {
  tpVoucherFormPreview: void 0
}, Nu = ae({
  name: "tp_voucher",
  initialState: Kf,
  reducers: {
    setTPVoucherFormPreview: (t, e) => {
      t.tpVoucherFormPreview = e.payload;
    }
  }
});
Nu.actions;
const Tu = Nu.reducer, Hf = {
  previewDCTypeCustomer: void 0,
  previewDCTypeStockTransfer: void 0
}, qu = ae({
  name: "delivery_challan",
  initialState: Hf,
  reducers: {
    setPreviewDCTypeCustomer: (t, e) => {
      t.previewDCTypeCustomer = e.payload;
    },
    setPreviewDCTypeStockTransfer: (t, e) => {
      t.previewDCTypeStockTransfer = e.payload;
    }
  }
});
qu.actions;
const Ru = qu.reducer, Qf = {
  paymentReq: [],
  selectedPaymentReq: void 0,
  previewPaymentReq: void 0
}, Pu = ae({
  name: "payment_request",
  initialState: Qf,
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
Pu.actions;
const Au = Pu.reducer;
Dn({
  reducer: {
    rfpaData: mu,
    dealSlipData: gu,
    grnData: vu,
    mc_voucher: Su,
    lp_voucher: Eu,
    tp_voucher: Tu,
    pmp_voucher: Ou,
    delivery_challan: Ru,
    payment_request: Au
  }
});
function Yt(t) {
  this._maxSize = t, this.clear();
}
Yt.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
Yt.prototype.get = function(t) {
  return this._values[t];
};
Yt.prototype.set = function(t, e) {
  return this._size >= this._maxSize && this.clear(), t in this._values || this._size++, this._values[t] = e;
};
var Yf = /[^.^\]^[]+|(?=\[\]|\.\.)/g, xu = /^\d+$/, Xf = /^\d/, Jf = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, Zf = /^\s*(['"]?)(.*?)(\1)\s*$/, hs = 512, Vo = new Yt(hs), Uo = new Yt(hs), zo = new Yt(hs), Wt = {
  Cache: Yt,
  split: zi,
  normalizePath: vi,
  setter: function(t) {
    var e = vi(t);
    return Uo.get(t) || Uo.set(t, function(n, i) {
      for (var s = 0, o = e.length, a = n; s < o - 1; ) {
        var l = e[s];
        if (l === "__proto__" || l === "constructor" || l === "prototype")
          return n;
        a = a[e[s++]];
      }
      a[e[s]] = i;
    });
  },
  getter: function(t, e) {
    var r = vi(t);
    return zo.get(t) || zo.set(t, function(i) {
      for (var s = 0, o = r.length; s < o; )
        if (i != null || !e) i = i[r[s++]];
        else return;
      return i;
    });
  },
  join: function(t) {
    return t.reduce(function(e, r) {
      return e + (ps(r) || xu.test(r) ? "[" + r + "]" : (e ? "." : "") + r);
    }, "");
  },
  forEach: function(t, e, r) {
    eh(Array.isArray(t) ? t : zi(t), e, r);
  }
};
function vi(t) {
  return Vo.get(t) || Vo.set(
    t,
    zi(t).map(function(e) {
      return e.replace(Zf, "$2");
    })
  );
}
function zi(t) {
  return t.match(Yf) || [""];
}
function eh(t, e, r) {
  var n = t.length, i, s, o, a;
  for (s = 0; s < n; s++)
    i = t[s], i && (nh(i) && (i = '"' + i + '"'), a = ps(i), o = !a && /^\d+$/.test(i), e.call(r, i, a, o, s, t));
}
function ps(t) {
  return typeof t == "string" && t && ["'", '"'].indexOf(t.charAt(0)) !== -1;
}
function th(t) {
  return t.match(Xf) && !t.match(xu);
}
function rh(t) {
  return Jf.test(t);
}
function nh(t) {
  return !ps(t) && (th(t) || rh(t));
}
const ih = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, In = (t) => t.match(ih) || [], $n = (t) => t[0].toUpperCase() + t.slice(1), ms = (t, e) => In(t).join(e).toLowerCase(), ku = (t) => In(t).reduce(
  (e, r) => `${e}${e ? r[0].toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()}`,
  ""
), sh = (t) => $n(ku(t)), oh = (t) => ms(t, "_"), ah = (t) => ms(t, "-"), uh = (t) => $n(ms(t, " ")), ch = (t) => In(t).map($n).join(" ");
var wi = {
  words: In,
  upperFirst: $n,
  camelCase: ku,
  pascalCase: sh,
  snakeCase: oh,
  kebabCase: ah,
  sentenceCase: uh,
  titleCase: ch
}, ys = { exports: {} };
ys.exports = function(t) {
  return Du(lh(t), t);
};
ys.exports.array = Du;
function Du(t, e) {
  var r = t.length, n = new Array(r), i = {}, s = r, o = dh(e), a = fh(t);
  for (e.forEach(function(h) {
    if (!a.has(h[0]) || !a.has(h[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    i[s] || l(t[s], s, /* @__PURE__ */ new Set());
  return n;
  function l(h, f, p) {
    if (p.has(h)) {
      var m;
      try {
        m = ", node was:" + JSON.stringify(h);
      } catch {
        m = "";
      }
      throw new Error("Cyclic dependency" + m);
    }
    if (!a.has(h))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(h));
    if (!i[f]) {
      i[f] = !0;
      var b = o.get(h) || /* @__PURE__ */ new Set();
      if (b = Array.from(b), f = b.length) {
        p.add(h);
        do {
          var C = b[--f];
          l(C, a.get(C), p);
        } while (f);
        p.delete(h);
      }
      n[--r] = h;
    }
  }
}
function lh(t) {
  for (var e = /* @__PURE__ */ new Set(), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    e.add(i[0]), e.add(i[1]);
  }
  return Array.from(e);
}
function dh(t) {
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    e.has(i[0]) || e.set(i[0], /* @__PURE__ */ new Set()), e.has(i[1]) || e.set(i[1], /* @__PURE__ */ new Set()), e.get(i[0]).add(i[1]);
  }
  return e;
}
function fh(t) {
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = t.length; r < n; r++)
    e.set(t[r], r);
  return e;
}
var hh = ys.exports;
const ph = /* @__PURE__ */ as(hh), mh = Object.prototype.toString, yh = Error.prototype.toString, gh = RegExp.prototype.toString, bh = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", vh = /^Symbol\((.*)\)(.*)$/;
function wh(t) {
  return t != +t ? "NaN" : t === 0 && 1 / t < 0 ? "-0" : "" + t;
}
function Go(t, e = !1) {
  if (t == null || t === !0 || t === !1) return "" + t;
  const r = typeof t;
  if (r === "number") return wh(t);
  if (r === "string") return e ? `"${t}"` : t;
  if (r === "function") return "[Function " + (t.name || "anonymous") + "]";
  if (r === "symbol") return bh.call(t).replace(vh, "Symbol($1)");
  const n = mh.call(t).slice(8, -1);
  return n === "Date" ? isNaN(t.getTime()) ? "" + t : t.toISOString(t) : n === "Error" || t instanceof Error ? "[" + yh.call(t) + "]" : n === "RegExp" ? gh.call(t) : null;
}
function wt(t, e) {
  let r = Go(t, e);
  return r !== null ? r : JSON.stringify(t, function(n, i) {
    let s = Go(this[n], e);
    return s !== null ? s : i;
  }, 2);
}
function Iu(t) {
  return t == null ? [] : [].concat(t);
}
let $u, Fu, Mu, Sh = /\$\{\s*(\w+)\s*\}/g;
$u = Symbol.toStringTag;
class Wo {
  constructor(e, r, n, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[$u] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = i, this.errors = [], this.inner = [], Iu(e).forEach((s) => {
      if (Be.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Fu = Symbol.hasInstance;
Mu = Symbol.toStringTag;
class Be extends Error {
  static formatError(e, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Object.assign({}, r, {
      path: n
    })), typeof e == "string" ? e.replace(Sh, (i, s) => wt(r[s])) : typeof e == "function" ? e(r) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, r, n, i, s) {
    const o = new Wo(e, r, n, i);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Mu] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Be);
  }
  static [Fu](e) {
    return Wo[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let ot = {
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
    const i = n != null && n !== r ? ` (cast from the value \`${wt(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${t} must be a \`${e}\` type, but the final value was: \`${wt(r, !0)}\`` + i : `${t} must match the configured type. The validated value was: \`${wt(r, !0)}\`` + i;
  }
}, je = {
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
}, Ot = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Gi = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Wi = {
  isValue: "${path} field must be ${value}"
}, Ki = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, hn = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, _h = {
  notType: (t) => {
    const {
      path: e,
      value: r,
      spec: n
    } = t, i = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < i) return `${e} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${wt(r, !0)}\``;
      if (r.length > i) return `${e} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${wt(r, !0)}\``;
    }
    return Be.formatError(ot.notType, t);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: ot,
  string: je,
  number: Ot,
  date: Gi,
  object: Ki,
  array: hn,
  boolean: Wi,
  tuple: _h
});
const Fn = (t) => t && t.__isYupSchema__;
class Cn {
  static fromOptions(e, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: i,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...a) => a.every((l) => l === n);
    return new Cn(e, (a, l) => {
      var h;
      let f = o(...a) ? i : s;
      return (h = f == null ? void 0 : f(l)) != null ? h : l;
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
    if (!Fn(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(r);
  }
}
const on = {
  context: "$",
  value: "."
};
class Xt {
  constructor(e, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === on.context, this.isValue = this.key[0] === on.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? on.context : this.isValue ? on.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Wt.getter(this.path, !0), this.map = r.map;
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
Xt.prototype.__isYupRef = !0;
const nt = (t) => t == null;
function rr(t) {
  function e({
    value: r,
    path: n = "",
    options: i,
    originalValue: s,
    schema: o
  }, a, l) {
    const {
      name: h,
      test: f,
      params: p,
      message: m,
      skipAbsent: b
    } = t;
    let {
      parent: C,
      context: w,
      abortEarly: E = o.spec.abortEarly,
      disableStackTrace: A = o.spec.disableStackTrace
    } = i;
    function M(V) {
      return Xt.isRef(V) ? V.getValue(r, C, w) : V;
    }
    function _(V = {}) {
      const te = Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: V.path || n,
        spec: o.spec,
        disableStackTrace: V.disableStackTrace || A
      }, p, V.params);
      for (const ge of Object.keys(te)) te[ge] = M(te[ge]);
      const Ce = new Be(Be.formatError(V.message || m, te), r, te.path, V.type || h, te.disableStackTrace);
      return Ce.params = te, Ce;
    }
    const R = E ? a : l;
    let v = {
      path: n,
      parent: C,
      type: h,
      from: i.from,
      createError: _,
      resolve: M,
      options: i,
      originalValue: s,
      schema: o
    };
    const k = (V) => {
      Be.isError(V) ? R(V) : V ? l(null) : R(_());
    }, X = (V) => {
      Be.isError(V) ? R(V) : a(V);
    };
    if (b && nt(r))
      return k(!0);
    let d;
    try {
      var $;
      if (d = f.call(v, r, v), typeof (($ = d) == null ? void 0 : $.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${v.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(d).then(k, X);
      }
    } catch (V) {
      X(V);
      return;
    }
    k(d);
  }
  return e.OPTIONS = t, e;
}
function Eh(t, e, r, n = r) {
  let i, s, o;
  return e ? (Wt.forEach(e, (a, l, h) => {
    let f = l ? a.slice(1, a.length - 1) : a;
    t = t.resolve({
      context: n,
      parent: i,
      value: r
    });
    let p = t.type === "tuple", m = h ? parseInt(f, 10) : 0;
    if (t.innerType || p) {
      if (p && !h) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && m >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);
      i = r, r = r && r[m], t = p ? t.spec.types[m] : t.innerType;
    }
    if (!h) {
      if (!t.fields || !t.fields[f]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);
      i = r, r = r && r[f], t = t.fields[f];
    }
    s = f, o = l ? "[" + a + "]" : "." + a;
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
class On extends Set {
  describe() {
    const e = [];
    for (const r of this.values())
      e.push(Xt.isRef(r) ? r.describe() : r);
    return e;
  }
  resolveAll(e) {
    let r = [];
    for (const n of this.values())
      r.push(e(n));
    return r;
  }
  clone() {
    return new On(this.values());
  }
  merge(e, r) {
    const n = this.clone();
    return e.forEach((i) => n.add(i)), r.forEach((i) => n.delete(i)), n;
  }
}
function ur(t, e = /* @__PURE__ */ new Map()) {
  if (Fn(t) || !t || typeof t != "object") return t;
  if (e.has(t)) return e.get(t);
  let r;
  if (t instanceof Date)
    r = new Date(t.getTime()), e.set(t, r);
  else if (t instanceof RegExp)
    r = new RegExp(t), e.set(t, r);
  else if (Array.isArray(t)) {
    r = new Array(t.length), e.set(t, r);
    for (let n = 0; n < t.length; n++) r[n] = ur(t[n], e);
  } else if (t instanceof Map) {
    r = /* @__PURE__ */ new Map(), e.set(t, r);
    for (const [n, i] of t.entries()) r.set(n, ur(i, e));
  } else if (t instanceof Set) {
    r = /* @__PURE__ */ new Set(), e.set(t, r);
    for (const n of t) r.add(ur(n, e));
  } else if (t instanceof Object) {
    r = {}, e.set(t, r);
    for (const [n, i] of Object.entries(t)) r[n] = ur(i, e);
  } else
    throw Error(`Unable to clone ${t}`);
  return r;
}
class Ue {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new On(), this._blacklist = new On(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(ot.notType);
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
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = ur(Object.assign({}, this.spec, e)), r;
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
      if (i && nt(s))
        return s;
      let o = wt(e), a = wt(s);
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
    } = r, l = e;
    a || (l = this._cast(l, Object.assign({
      assert: !1
    }, r)));
    let h = [];
    for (let f of Object.values(this.internalTests))
      f && h.push(f);
    this.runTests({
      path: s,
      value: l,
      originalValue: o,
      options: r,
      tests: h
    }, n, (f) => {
      if (f.length)
        return i(f, l);
      this.runTests({
        path: s,
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
      tests: s,
      value: o,
      originalValue: a,
      path: l,
      options: h
    } = e, f = (w) => {
      i || (i = !0, r(w, o));
    }, p = (w) => {
      i || (i = !0, n(w, o));
    }, m = s.length, b = [];
    if (!m) return p([]);
    let C = {
      value: o,
      originalValue: a,
      path: l,
      options: h,
      schema: this
    };
    for (let w = 0; w < s.length; w++) {
      const E = s[w];
      E(C, f, function(M) {
        M && (Array.isArray(M) ? b.push(...M) : b.push(M)), --m <= 0 && p(b);
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
    const l = typeof a == "number";
    let h = n[a];
    const f = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: h,
      originalValue: s[a],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [l ? "index" : "key"]: a,
      path: l || a.includes(".") ? `${i || ""}[${l ? a : `"${a}"`}]` : (i ? `${i}.` : "") + e
    });
    return (p, m, b) => this.resolve(f)._validate(h, f, m, b);
  }
  validate(e, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: e
    })), s = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return new Promise((o, a) => i._validate(e, r, (l, h) => {
      Be.isError(l) && (l.value = h), a(l);
    }, (l, h) => {
      l.length ? a(new Be(l, h, void 0, void 0, s)) : o(h);
    }));
  }
  validateSync(e, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: e
    })), s, o = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return i._validate(e, Object.assign({}, r, {
      sync: !0
    }), (a, l) => {
      throw Be.isError(a) && (a.value = l), a;
    }, (a, l) => {
      if (a.length) throw new Be(a, e, void 0, void 0, o);
      s = l;
    }), s;
  }
  isValid(e, r) {
    return this.validate(e, r).then(() => !0, (n) => {
      if (Be.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, r) {
    try {
      return this.validateSync(e, r), !0;
    } catch (n) {
      if (Be.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, e) : ur(r);
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
    return n.internalTests.nullable = rr({
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
    return n.internalTests.optionality = rr({
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
  defined(e = ot.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = ot.notNull) {
    return this.nullability(!1, e);
  }
  required(e = ot.required) {
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
    }, r.message === void 0 && (r.message = ot.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), i = rr(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (s || o.OPTIONS.test === i.OPTIONS.test))), n.tests.push(i), n;
  }
  when(e, r) {
    !Array.isArray(e) && typeof e != "string" && (r = e, e = ".");
    let n = this.clone(), i = Iu(e).map((s) => new Xt(s));
    return i.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new Cn(i, r) : Cn.fromOptions(i, r)), n;
  }
  typeError(e) {
    let r = this.clone();
    return r.internalTests.typeError = rr({
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
  oneOf(e, r = ot.oneOf) {
    let n = this.clone();
    return e.forEach((i) => {
      n._whitelist.add(i), n._blacklist.delete(i);
    }), n.internalTests.whiteList = rr({
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
  notOneOf(e, r = ot.notOneOf) {
    let n = this.clone();
    return e.forEach((i) => {
      n._blacklist.add(i), n._whitelist.delete(i);
    }), n.internalTests.blacklist = rr({
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
      tests: r.tests.map((l) => ({
        name: l.OPTIONS.name,
        params: l.OPTIONS.params
      })).filter((l, h, f) => f.findIndex((p) => p.name === l.name) === h)
    };
  }
}
Ue.prototype.__isYupSchema__ = !0;
for (const t of ["validate", "validateSync"]) Ue.prototype[`${t}At`] = function(e, r, n = {}) {
  const {
    parent: i,
    parentPath: s,
    schema: o
  } = Eh(this, e, r, n.context);
  return o[t](i && i[s], Object.assign({}, n, {
    parent: i,
    path: e
  }));
};
for (const t of ["equals", "is"]) Ue.prototype[t] = Ue.prototype.oneOf;
for (const t of ["not", "nope"]) Ue.prototype[t] = Ue.prototype.notOneOf;
const Ch = () => !0;
function Ae(t) {
  return new Lu(t);
}
class Lu extends Ue {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: Ch
    }, e));
  }
}
Ae.prototype = Lu.prototype;
function it() {
  return new ju();
}
class ju extends Ue {
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
  isTrue(e = Wi.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(r) {
        return nt(r) || r === !0;
      }
    });
  }
  isFalse(e = Wi.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(r) {
        return nt(r) || r === !1;
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
it.prototype = ju.prototype;
const Oh = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Nh(t) {
  const e = Hi(t);
  if (!e) return Date.parse ? Date.parse(t) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let r = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (r = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (r = 0 - r)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + r, e.second, e.millisecond);
}
function Hi(t) {
  var e, r;
  const n = Oh.exec(t);
  return n ? {
    year: pt(n[1]),
    month: pt(n[2], 1) - 1,
    day: pt(n[3], 1),
    hour: pt(n[4]),
    minute: pt(n[5]),
    second: pt(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      pt(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (r = n[7]) == null ? void 0 : r.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: pt(n[10]),
    minuteOffset: pt(n[11])
  } : null;
}
function pt(t, e = 0) {
  return Number(t) || e;
}
let Th = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), qh = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Rh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Ph = "^\\d{4}-\\d{2}-\\d{2}", Ah = "\\d{2}:\\d{2}:\\d{2}", xh = "(([+-]\\d{2}(:?\\d{2})?)|Z)", kh = new RegExp(`${Ph}T${Ah}(\\.\\d+)?${xh}$`), Dh = (t) => nt(t) || t === t.trim(), Ih = {}.toString();
function c() {
  return new Bu();
}
class Bu extends Ue {
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
        return i === Ih ? e : i;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((r) => r.test({
      message: e || ot.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((r) => r.OPTIONS.name !== "required"), e));
  }
  length(e, r = je.length) {
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
  min(e, r = je.min) {
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
  max(e, r = je.max) {
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
      message: i || je.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(e) !== -1
    });
  }
  email(e = je.email) {
    return this.matches(Th, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = je.url) {
    return this.matches(qh, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = je.uuid) {
    return this.matches(Rh, {
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
    } = e : r = e), this.matches(kh, {
      name: "datetime",
      message: r || je.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || je.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || n) return !0;
        const o = Hi(s);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || je.datetime_precision,
      params: {
        precision: i
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || i == null) return !0;
        const o = Hi(s);
        return o ? o.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = je.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: e,
      name: "trim",
      test: Dh
    });
  }
  lowercase(e = je.lowercase) {
    return this.transform((r) => nt(r) ? r : r.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => nt(r) || r === r.toLowerCase()
    });
  }
  uppercase(e = je.uppercase) {
    return this.transform((r) => nt(r) ? r : r.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => nt(r) || r === r.toUpperCase()
    });
  }
}
c.prototype = Bu.prototype;
let $h = (t) => t != +t;
function I() {
  return new Vu();
}
class Vu extends Ue {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !$h(e);
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
  min(e, r = Ot.min) {
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
  max(e, r = Ot.max) {
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
  lessThan(e, r = Ot.lessThan) {
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
  moreThan(e, r = Ot.moreThan) {
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
  positive(e = Ot.positive) {
    return this.moreThan(0, e);
  }
  negative(e = Ot.negative) {
    return this.lessThan(0, e);
  }
  integer(e = Ot.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (r) => Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((e) => nt(e) ? e : e | 0);
  }
  round(e) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (e = ((r = e) == null ? void 0 : r.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (n.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((i) => nt(i) ? i : Math[e](i));
  }
}
I.prototype = Vu.prototype;
let Uu = /* @__PURE__ */ new Date(""), Fh = (t) => Object.prototype.toString.call(t) === "[object Date]";
function dt() {
  return new Vr();
}
class Vr extends Ue {
  constructor() {
    super({
      type: "date",
      check(e) {
        return Fh(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = Nh(e), isNaN(e) ? Vr.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, r) {
    let n;
    if (Xt.isRef(e))
      n = e;
    else {
      let i = this.cast(e);
      if (!this._typeCheck(i)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = i;
    }
    return n;
  }
  min(e, r = Gi.min) {
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
  max(e, r = Gi.max) {
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
Vr.INVALID_DATE = Uu;
dt.prototype = Vr.prototype;
dt.INVALID_DATE = Uu;
function Mh(t, e = []) {
  let r = [], n = /* @__PURE__ */ new Set(), i = new Set(e.map(([o, a]) => `${o}-${a}`));
  function s(o, a) {
    let l = Wt.split(o)[0];
    n.add(l), i.has(`${a}-${l}`) || r.push([a, l]);
  }
  for (const o of Object.keys(t)) {
    let a = t[o];
    n.add(o), Xt.isRef(a) && a.isSibling ? s(a.path, o) : Fn(a) && "deps" in a && a.deps.forEach((l) => s(l, o));
  }
  return ph.array(Array.from(n), r).reverse();
}
function Ko(t, e) {
  let r = 1 / 0;
  return t.some((n, i) => {
    var s;
    if ((s = e.path) != null && s.includes(n))
      return r = i, !0;
  }), r;
}
function zu(t) {
  return (e, r) => Ko(t, e) - Ko(t, r);
}
const Gu = (t, e, r) => {
  if (typeof t != "string")
    return t;
  let n = t;
  try {
    n = JSON.parse(t);
  } catch {
  }
  return r.isType(n) ? n : t;
};
function pn(t) {
  if ("fields" in t) {
    const e = {};
    for (const [r, n] of Object.entries(t.fields))
      e[r] = pn(n);
    return t.setFields(e);
  }
  if (t.type === "array") {
    const e = t.optional();
    return e.innerType && (e.innerType = pn(e.innerType)), e;
  }
  return t.type === "tuple" ? t.optional().clone({
    types: t.spec.types.map(pn)
  }) : "optional" in t ? t.optional() : t;
}
const Lh = (t, e) => {
  const r = [...Wt.normalizePath(e)];
  if (r.length === 1) return r[0] in t;
  let n = r.pop(), i = Wt.getter(Wt.join(r), !0)(t);
  return !!(i && n in i);
};
let Ho = (t) => Object.prototype.toString.call(t) === "[object Object]";
function jh(t, e) {
  let r = Object.keys(t.fields);
  return Object.keys(e).filter((n) => r.indexOf(n) === -1);
}
const Bh = zu([]);
function j(t) {
  return new Wu(t);
}
class Wu extends Ue {
  constructor(e) {
    super({
      type: "object",
      check(r) {
        return Ho(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Bh, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, r = {}) {
    var n;
    let i = super._cast(e, r);
    if (i === void 0) return this.getDefault(r);
    if (!this._typeCheck(i)) return i;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, a = [].concat(this._nodes, Object.keys(i).filter((p) => !this._nodes.includes(p))), l = {}, h = Object.assign({}, r, {
      parent: l,
      __validating: r.__validating || !1
    }), f = !1;
    for (const p of a) {
      let m = s[p], b = p in i;
      if (m) {
        let C, w = i[p];
        h.path = (r.path ? `${r.path}.` : "") + p, m = m.resolve({
          value: w,
          context: r.context,
          parent: l
        });
        let E = m instanceof Ue ? m.spec : void 0, A = E == null ? void 0 : E.strict;
        if (E != null && E.strip) {
          f = f || p in i;
          continue;
        }
        C = !r.__validating || !A ? (
          // TODO: use _cast, this is double resolving
          m.cast(i[p], h)
        ) : i[p], C !== void 0 && (l[p] = C);
      } else b && !o && (l[p] = i[p]);
      (b !== p in l || l[p] !== i[p]) && (f = !0);
    }
    return f ? l : i;
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
    }, ...s], r.__validating = !0, r.originalValue = o, super._validate(e, r, n, (l, h) => {
      if (!a || !Ho(h)) {
        i(l, h);
        return;
      }
      o = o || h;
      let f = [];
      for (let p of this._nodes) {
        let m = this.fields[p];
        !m || Xt.isRef(m) || f.push(m.asNestedTest({
          options: r,
          key: p,
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
      }, n, (p) => {
        i(p.sort(this._sortErrors).concat(l), h);
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
    return n.fields = e, n._nodes = Mh(e, r), n._sortErrors = zu(Object.keys(e)), r && (n._excludedEdges = r), n;
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
    return pn(this);
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
    let i = Wt.getter(e, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return Lh(s, e) && (o = Object.assign({}, s), n || delete o[e], o[r] = i(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Gu);
  }
  noUnknown(e = !0, r = Ki.noUnknown) {
    typeof e != "boolean" && (r = e, e = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(i) {
        if (i == null) return !0;
        const s = jh(this.schema, i);
        return !e || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = e, n;
  }
  unknown(e = !0, r = Ki.noUnknown) {
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
    return this.transformKeys(wi.camelCase);
  }
  snakeCase() {
    return this.transformKeys(wi.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => wi.snakeCase(e).toUpperCase());
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
j.prototype = Wu.prototype;
function Ie(t) {
  return new Ku(t);
}
class Ku extends Ue {
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
      const l = this.innerType.cast(o, Object.assign({}, r, {
        path: `${r.path || ""}[${a}]`
      }));
      return l !== o && (i = !0), l;
    });
    return i ? s : n;
  }
  _validate(e, r = {}, n, i) {
    var s;
    let o = this.innerType, a = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(e, r, n, (l, h) => {
      var f;
      if (!a || !o || !this._typeCheck(h)) {
        i(l, h);
        return;
      }
      let p = new Array(h.length);
      for (let b = 0; b < h.length; b++) {
        var m;
        p[b] = o.asNestedTest({
          options: r,
          index: b,
          parent: h,
          parentPath: r.path,
          originalParent: (m = r.originalValue) != null ? m : e
        });
      }
      this.runTests({
        value: h,
        tests: p,
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
    return this.transform(Gu);
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
    if (!Fn(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + wt(e));
    return r.innerType = e, r.spec = Object.assign({}, r.spec, {
      types: e
    }), r;
  }
  length(e, r = hn.length) {
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
    return r = r || hn.min, this.test({
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
    return r = r || hn.max, this.test({
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
Ie.prototype = Ku.prototype;
const Vh = /^[6-9]\d{9}$/;
c().matches(Vh, "Please enter a valid 10-digit contact number").required("Contact number is required");
j().shape({
  address1: c().required("Address Line 1 is required"),
  address2: c(),
  location: c().required("Location is required"),
  city: c().required("City is required"),
  state: c().required("State is required"),
  pincode: c().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
var Mn = class {
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
}, Ln = typeof window > "u" || "Deno" in globalThis;
function Ze() {
}
function Uh(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function zh(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Gh(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Qo(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Wh(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Yo(t, e) {
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
      if (e.queryHash !== gs(o, e.options))
        return !1;
    } else if (!Fr(e.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const l = e.isActive();
    if (r === "active" && !l || r === "inactive" && l)
      return !1;
  }
  return !(typeof a == "boolean" && e.isStale() !== a || i && i !== e.state.fetchStatus || s && !s(e));
}
function Xo(t, e) {
  const { exact: r, status: n, predicate: i, mutationKey: s } = t;
  if (s) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if ($r(e.options.mutationKey) !== $r(s))
        return !1;
    } else if (!Fr(e.options.mutationKey, s))
      return !1;
  }
  return !(n && e.state.status !== n || i && !i(e));
}
function gs(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || $r)(t);
}
function $r(t) {
  return JSON.stringify(
    t,
    (e, r) => Yi(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r
  );
}
function Fr(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every((r) => Fr(t[r], e[r])) : !1;
}
function Qi(t, e) {
  if (t === e)
    return t;
  const r = Jo(t) && Jo(e);
  if (r || Yi(t) && Yi(e)) {
    const n = r ? t : Object.keys(t), i = n.length, s = r ? e : Object.keys(e), o = s.length, a = r ? [] : {};
    let l = 0;
    for (let h = 0; h < o; h++) {
      const f = r ? h : s[h];
      (!r && n.includes(f) || r) && t[f] === void 0 && e[f] === void 0 ? (a[f] = void 0, l++) : (a[f] = Qi(t[f], e[f]), a[f] === t[f] && t[f] !== void 0 && l++);
    }
    return i === o && l === i ? t : a;
  }
  return e;
}
function Jo(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Yi(t) {
  if (!Zo(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!Zo(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function Zo(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Kh(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Hh(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Qi(t, e);
      } catch (n) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        ), n;
      }
    return Qi(t, e);
  }
  return e;
}
function Qh(t, e, r = 0) {
  const n = [...t, e];
  return r && n.length > r ? n.slice(1) : n;
}
function Yh(t, e, r = 0) {
  const n = [e, ...t];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Nn = Symbol();
function Hu(t, e) {
  return process.env.NODE_ENV !== "production" && t.queryFn === Nn && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.queryHash}'`
  ), !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Nn ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
var jt, qt, lr, Aa, Xh = (Aa = class extends Mn {
  constructor() {
    super();
    oe(this, jt);
    oe(this, qt);
    oe(this, lr);
    re(this, lr, (e) => {
      if (!Ln && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    P(this, qt) || this.setEventListener(P(this, lr));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = P(this, qt)) == null || e.call(this), re(this, qt, void 0));
  }
  setEventListener(e) {
    var r;
    re(this, lr, e), (r = P(this, qt)) == null || r.call(this), re(this, qt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    P(this, jt) !== e && (re(this, jt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof P(this, jt) == "boolean" ? P(this, jt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, jt = new WeakMap(), qt = new WeakMap(), lr = new WeakMap(), Aa), Qu = new Xh(), dr, Rt, fr, xa, Jh = (xa = class extends Mn {
  constructor() {
    super();
    oe(this, dr, !0);
    oe(this, Rt);
    oe(this, fr);
    re(this, fr, (e) => {
      if (!Ln && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    P(this, Rt) || this.setEventListener(P(this, fr));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = P(this, Rt)) == null || e.call(this), re(this, Rt, void 0));
  }
  setEventListener(e) {
    var r;
    re(this, fr, e), (r = P(this, Rt)) == null || r.call(this), re(this, Rt, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    P(this, dr) !== e && (re(this, dr, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return P(this, dr);
  }
}, dr = new WeakMap(), Rt = new WeakMap(), fr = new WeakMap(), xa), Tn = new Jh();
function Zh() {
  let t, e;
  const r = new Promise((i, s) => {
    t = i, e = s;
  });
  r.status = "pending", r.catch(() => {
  });
  function n(i) {
    Object.assign(r, i), delete r.resolve, delete r.reject;
  }
  return r.resolve = (i) => {
    n({
      status: "fulfilled",
      value: i
    }), t(i);
  }, r.reject = (i) => {
    n({
      status: "rejected",
      reason: i
    }), e(i);
  }, r;
}
function ep(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Yu(t) {
  return (t ?? "online") === "online" ? Tn.isOnline() : !0;
}
var Xu = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function Si(t) {
  return t instanceof Xu;
}
function Ju(t) {
  let e = !1, r = 0, n = !1, i;
  const s = Zh(), o = (w) => {
    var E;
    n || (m(new Xu(w)), (E = t.abort) == null || E.call(t));
  }, a = () => {
    e = !0;
  }, l = () => {
    e = !1;
  }, h = () => Qu.isFocused() && (t.networkMode === "always" || Tn.isOnline()) && t.canRun(), f = () => Yu(t.networkMode) && t.canRun(), p = (w) => {
    var E;
    n || (n = !0, (E = t.onSuccess) == null || E.call(t, w), i == null || i(), s.resolve(w));
  }, m = (w) => {
    var E;
    n || (n = !0, (E = t.onError) == null || E.call(t, w), i == null || i(), s.reject(w));
  }, b = () => new Promise((w) => {
    var E;
    i = (A) => {
      (n || h()) && w(A);
    }, (E = t.onPause) == null || E.call(t);
  }).then(() => {
    var w;
    i = void 0, n || (w = t.onContinue) == null || w.call(t);
  }), C = () => {
    if (n)
      return;
    let w;
    const E = r === 0 ? t.initialPromise : void 0;
    try {
      w = E ?? t.fn();
    } catch (A) {
      w = Promise.reject(A);
    }
    Promise.resolve(w).then(p).catch((A) => {
      var k;
      if (n)
        return;
      const M = t.retry ?? (Ln ? 0 : 3), _ = t.retryDelay ?? ep, R = typeof _ == "function" ? _(r, A) : _, v = M === !0 || typeof M == "number" && r < M || typeof M == "function" && M(r, A);
      if (e || !v) {
        m(A);
        return;
      }
      r++, (k = t.onFail) == null || k.call(t, r, A), Kh(R).then(() => h() ? void 0 : b()).then(() => {
        e ? m(A) : C();
      });
    });
  };
  return {
    promise: s,
    cancel: o,
    continue: () => (i == null || i(), s),
    cancelRetry: a,
    continueRetry: l,
    canStart: f,
    start: () => (f() ? C() : b().then(C), s)
  };
}
var tp = (t) => setTimeout(t, 0);
function rp() {
  let t = [], e = 0, r = (a) => {
    a();
  }, n = (a) => {
    a();
  }, i = tp;
  const s = (a) => {
    e ? t.push(a) : i(() => {
      r(a);
    });
  }, o = () => {
    const a = t;
    t = [], a.length && i(() => {
      n(() => {
        a.forEach((l) => {
          r(l);
        });
      });
    });
  };
  return {
    batch: (a) => {
      let l;
      e++;
      try {
        l = a();
      } finally {
        e--, e || o();
      }
      return l;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (a) => (...l) => {
      s(() => {
        a(...l);
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
var Le = rp(), Bt, ka, Zu = (ka = class {
  constructor() {
    oe(this, Bt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), zh(this.gcTime) && re(this, Bt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (Ln ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    P(this, Bt) && (clearTimeout(P(this, Bt)), re(this, Bt, void 0));
  }
}, Bt = new WeakMap(), ka), hr, pr, Qe, Vt, De, Lr, Ut, et, gt, Da, np = (Da = class extends Zu {
  constructor(e) {
    super();
    oe(this, et);
    oe(this, hr);
    oe(this, pr);
    oe(this, Qe);
    oe(this, Vt);
    oe(this, De);
    oe(this, Lr);
    oe(this, Ut);
    re(this, Ut, !1), re(this, Lr, e.defaultOptions), this.setOptions(e.options), this.observers = [], re(this, Vt, e.client), re(this, Qe, P(this, Vt).getQueryCache()), this.queryKey = e.queryKey, this.queryHash = e.queryHash, re(this, hr, sp(this.options)), this.state = e.state ?? P(this, hr), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var e;
    return (e = P(this, De)) == null ? void 0 : e.promise;
  }
  setOptions(e) {
    this.options = { ...P(this, Lr), ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && P(this, Qe).remove(this);
  }
  setData(e, r) {
    const n = Hh(this.state.data, e, this.options);
    return ke(this, et, gt).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(e, r) {
    ke(this, et, gt).call(this, { type: "setState", state: e, setStateOptions: r });
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
    this.destroy(), this.setState(P(this, hr));
  }
  isActive() {
    return this.observers.some(
      (e) => Wh(e.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Nn || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !Gh(this.state.dataUpdatedAt, e);
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
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), P(this, Qe).notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((r) => r !== e), this.observers.length || (P(this, De) && (P(this, Ut) ? P(this, De).cancel({ revert: !0 }) : P(this, De).cancelRetry()), this.scheduleGc()), P(this, Qe).notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || ke(this, et, gt).call(this, { type: "invalidate" });
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
      const p = this.observers.find((m) => m.options.queryFn);
      p && this.setOptions(p.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), i = (p) => {
      Object.defineProperty(p, "signal", {
        enumerable: !0,
        get: () => (re(this, Ut, !0), n.signal)
      });
    }, s = () => {
      const p = Hu(this.options, r), m = {
        client: P(this, Vt),
        queryKey: this.queryKey,
        meta: this.meta
      };
      return i(m), re(this, Ut, !1), this.options.persister ? this.options.persister(
        p,
        m,
        this
      ) : p(m);
    }, o = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      client: P(this, Vt),
      state: this.state,
      fetchFn: s
    };
    i(o), (l = this.options.behavior) == null || l.onFetch(
      o,
      this
    ), re(this, pr, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((h = o.fetchOptions) == null ? void 0 : h.meta)) && ke(this, et, gt).call(this, { type: "fetch", meta: (f = o.fetchOptions) == null ? void 0 : f.meta });
    const a = (p) => {
      var m, b, C, w;
      Si(p) && p.silent || ke(this, et, gt).call(this, {
        type: "error",
        error: p
      }), Si(p) || ((b = (m = P(this, Qe).config).onError) == null || b.call(
        m,
        p,
        this
      ), (w = (C = P(this, Qe).config).onSettled) == null || w.call(
        C,
        this.state.data,
        p,
        this
      )), this.scheduleGc();
    };
    return re(this, De, Ju({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: o.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (p) => {
        var m, b, C, w;
        if (p === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), a(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(p);
        } catch (E) {
          a(E);
          return;
        }
        (b = (m = P(this, Qe).config).onSuccess) == null || b.call(m, p, this), (w = (C = P(this, Qe).config).onSettled) == null || w.call(
          C,
          p,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: a,
      onFail: (p, m) => {
        ke(this, et, gt).call(this, { type: "failed", failureCount: p, error: m });
      },
      onPause: () => {
        ke(this, et, gt).call(this, { type: "pause" });
      },
      onContinue: () => {
        ke(this, et, gt).call(this, { type: "continue" });
      },
      retry: o.options.retry,
      retryDelay: o.options.retryDelay,
      networkMode: o.options.networkMode,
      canRun: () => !0
    })), P(this, De).start();
  }
}, hr = new WeakMap(), pr = new WeakMap(), Qe = new WeakMap(), Vt = new WeakMap(), De = new WeakMap(), Lr = new WeakMap(), Ut = new WeakMap(), et = new WeakSet(), gt = function(e) {
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
          ...ip(n.data, this.options),
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
        return Si(i) && i.revert && P(this, pr) ? { ...P(this, pr), fetchStatus: "idle" } : {
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
  this.state = r(this.state), Le.batch(() => {
    this.observers.forEach((n) => {
      n.onQueryUpdate();
    }), P(this, Qe).notify({ query: this, type: "updated", action: e });
  });
}, Da);
function ip(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Yu(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function sp(t) {
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
var at, Ia, op = (Ia = class extends Mn {
  constructor(e = {}) {
    super();
    oe(this, at);
    this.config = e, re(this, at, /* @__PURE__ */ new Map());
  }
  build(e, r, n) {
    const i = r.queryKey, s = r.queryHash ?? gs(i, r);
    let o = this.get(s);
    return o || (o = new np({
      client: e,
      queryKey: i,
      queryHash: s,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(i)
    }), this.add(o)), o;
  }
  add(e) {
    P(this, at).has(e.queryHash) || (P(this, at).set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const r = P(this, at).get(e.queryHash);
    r && (e.destroy(), r === e && P(this, at).delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    Le.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return P(this, at).get(e);
  }
  getAll() {
    return [...P(this, at).values()];
  }
  find(e) {
    const r = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Yo(r, n)
    );
  }
  findAll(e = {}) {
    const r = this.getAll();
    return Object.keys(e).length > 0 ? r.filter((n) => Yo(e, n)) : r;
  }
  notify(e) {
    Le.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  onFocus() {
    Le.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    Le.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
}, at = new WeakMap(), Ia), ut, Me, zt, ct, Nt, $a, ap = ($a = class extends Zu {
  constructor(e) {
    super();
    oe(this, ct);
    oe(this, ut);
    oe(this, Me);
    oe(this, zt);
    this.mutationId = e.mutationId, re(this, Me, e.mutationCache), re(this, ut, []), this.state = e.state || up(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = e, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    P(this, ut).includes(e) || (P(this, ut).push(e), this.clearGcTimeout(), P(this, Me).notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    re(this, ut, P(this, ut).filter((r) => r !== e)), this.scheduleGc(), P(this, Me).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    P(this, ut).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Me).remove(this));
  }
  continue() {
    var e;
    return ((e = P(this, zt)) == null ? void 0 : e.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    var s, o, a, l, h, f, p, m, b, C, w, E, A, M, _, R, v, k, X, Y;
    const r = () => {
      ke(this, ct, Nt).call(this, { type: "continue" });
    };
    re(this, zt, Ju({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (d, $) => {
        ke(this, ct, Nt).call(this, { type: "failed", failureCount: d, error: $ });
      },
      onPause: () => {
        ke(this, ct, Nt).call(this, { type: "pause" });
      },
      onContinue: r,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => P(this, Me).canRun(this)
    }));
    const n = this.state.status === "pending", i = !P(this, zt).canStart();
    try {
      if (n)
        r();
      else {
        ke(this, ct, Nt).call(this, { type: "pending", variables: e, isPaused: i }), await ((o = (s = P(this, Me).config).onMutate) == null ? void 0 : o.call(
          s,
          e,
          this
        ));
        const $ = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, e));
        $ !== this.state.context && ke(this, ct, Nt).call(this, {
          type: "pending",
          context: $,
          variables: e,
          isPaused: i
        });
      }
      const d = await P(this, zt).start();
      return await ((f = (h = P(this, Me).config).onSuccess) == null ? void 0 : f.call(
        h,
        d,
        e,
        this.state.context,
        this
      )), await ((m = (p = this.options).onSuccess) == null ? void 0 : m.call(p, d, e, this.state.context)), await ((C = (b = P(this, Me).config).onSettled) == null ? void 0 : C.call(
        b,
        d,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((E = (w = this.options).onSettled) == null ? void 0 : E.call(w, d, null, e, this.state.context)), ke(this, ct, Nt).call(this, { type: "success", data: d }), d;
    } catch (d) {
      try {
        throw await ((M = (A = P(this, Me).config).onError) == null ? void 0 : M.call(
          A,
          d,
          e,
          this.state.context,
          this
        )), await ((R = (_ = this.options).onError) == null ? void 0 : R.call(
          _,
          d,
          e,
          this.state.context
        )), await ((k = (v = P(this, Me).config).onSettled) == null ? void 0 : k.call(
          v,
          void 0,
          d,
          this.state.variables,
          this.state.context,
          this
        )), await ((Y = (X = this.options).onSettled) == null ? void 0 : Y.call(
          X,
          void 0,
          d,
          e,
          this.state.context
        )), d;
      } finally {
        ke(this, ct, Nt).call(this, { type: "error", error: d });
      }
    } finally {
      P(this, Me).runNext(this);
    }
  }
}, ut = new WeakMap(), Me = new WeakMap(), zt = new WeakMap(), ct = new WeakSet(), Nt = function(e) {
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
  this.state = r(this.state), Le.batch(() => {
    P(this, ut).forEach((n) => {
      n.onMutationUpdate(e);
    }), P(this, Me).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
}, $a);
function up() {
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
var vt, tt, jr, Fa, cp = (Fa = class extends Mn {
  constructor(e = {}) {
    super();
    oe(this, vt);
    oe(this, tt);
    oe(this, jr);
    this.config = e, re(this, vt, /* @__PURE__ */ new Set()), re(this, tt, /* @__PURE__ */ new Map()), re(this, jr, 0);
  }
  build(e, r, n) {
    const i = new ap({
      mutationCache: this,
      mutationId: ++rn(this, jr)._,
      options: e.defaultMutationOptions(r),
      state: n
    });
    return this.add(i), i;
  }
  add(e) {
    P(this, vt).add(e);
    const r = an(e);
    if (typeof r == "string") {
      const n = P(this, tt).get(r);
      n ? n.push(e) : P(this, tt).set(r, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (P(this, vt).delete(e)) {
      const r = an(e);
      if (typeof r == "string") {
        const n = P(this, tt).get(r);
        if (n)
          if (n.length > 1) {
            const i = n.indexOf(e);
            i !== -1 && n.splice(i, 1);
          } else n[0] === e && P(this, tt).delete(r);
      }
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    const r = an(e);
    if (typeof r == "string") {
      const n = P(this, tt).get(r), i = n == null ? void 0 : n.find(
        (s) => s.state.status === "pending"
      );
      return !i || i === e;
    } else
      return !0;
  }
  runNext(e) {
    var n;
    const r = an(e);
    if (typeof r == "string") {
      const i = (n = P(this, tt).get(r)) == null ? void 0 : n.find((s) => s !== e && s.state.isPaused);
      return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    Le.batch(() => {
      P(this, vt).forEach((e) => {
        this.notify({ type: "removed", mutation: e });
      }), P(this, vt).clear(), P(this, tt).clear();
    });
  }
  getAll() {
    return Array.from(P(this, vt));
  }
  find(e) {
    const r = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Xo(r, n)
    );
  }
  findAll(e = {}) {
    return this.getAll().filter((r) => Xo(e, r));
  }
  notify(e) {
    Le.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((r) => r.state.isPaused);
    return Le.batch(
      () => Promise.all(
        e.map((r) => r.continue().catch(Ze))
      )
    );
  }
}, vt = new WeakMap(), tt = new WeakMap(), jr = new WeakMap(), Fa);
function an(t) {
  var e;
  return (e = t.options.scope) == null ? void 0 : e.id;
}
function ea(t) {
  return {
    onFetch: (e, r) => {
      var f, p, m, b, C;
      const n = e.options, i = (m = (p = (f = e.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : m.direction, s = ((b = e.state.data) == null ? void 0 : b.pages) || [], o = ((C = e.state.data) == null ? void 0 : C.pageParams) || [];
      let a = { pages: [], pageParams: [] }, l = 0;
      const h = async () => {
        let w = !1;
        const E = (_) => {
          Object.defineProperty(_, "signal", {
            enumerable: !0,
            get: () => (e.signal.aborted ? w = !0 : e.signal.addEventListener("abort", () => {
              w = !0;
            }), e.signal)
          });
        }, A = Hu(e.options, e.fetchOptions), M = async (_, R, v) => {
          if (w)
            return Promise.reject();
          if (R == null && _.pages.length)
            return Promise.resolve(_);
          const k = {
            client: e.client,
            queryKey: e.queryKey,
            pageParam: R,
            direction: v ? "backward" : "forward",
            meta: e.options.meta
          };
          E(k);
          const X = await A(
            k
          ), { maxPages: Y } = e.options, d = v ? Yh : Qh;
          return {
            pages: d(_.pages, X, Y),
            pageParams: d(_.pageParams, R, Y)
          };
        };
        if (i && s.length) {
          const _ = i === "backward", R = _ ? lp : ta, v = {
            pages: s,
            pageParams: o
          }, k = R(n, v);
          a = await M(v, k, _);
        } else {
          const _ = t ?? s.length;
          do {
            const R = l === 0 ? o[0] ?? n.initialPageParam : ta(n, a);
            if (l > 0 && R == null)
              break;
            a = await M(a, R), l++;
          } while (l < _);
        }
        return a;
      };
      e.options.persister ? e.fetchFn = () => {
        var w, E;
        return (E = (w = e.options).persister) == null ? void 0 : E.call(
          w,
          h,
          {
            client: e.client,
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
function ta(t, { pages: e, pageParams: r }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(
    e[n],
    e,
    r[n],
    r
  ) : void 0;
}
function lp(t, { pages: e, pageParams: r }) {
  var n;
  return e.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, e[0], e, r[0], r) : void 0;
}
var Ee, Pt, At, mr, yr, xt, gr, br, Ma, dp = (Ma = class {
  constructor(t = {}) {
    oe(this, Ee);
    oe(this, Pt);
    oe(this, At);
    oe(this, mr);
    oe(this, yr);
    oe(this, xt);
    oe(this, gr);
    oe(this, br);
    re(this, Ee, t.queryCache || new op()), re(this, Pt, t.mutationCache || new cp()), re(this, At, t.defaultOptions || {}), re(this, mr, /* @__PURE__ */ new Map()), re(this, yr, /* @__PURE__ */ new Map()), re(this, xt, 0);
  }
  mount() {
    rn(this, xt)._++, P(this, xt) === 1 && (re(this, gr, Qu.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), P(this, Ee).onFocus());
    })), re(this, br, Tn.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), P(this, Ee).onOnline());
    })));
  }
  unmount() {
    var t, e;
    rn(this, xt)._--, P(this, xt) === 0 && ((t = P(this, gr)) == null || t.call(this), re(this, gr, void 0), (e = P(this, br)) == null || e.call(this), re(this, br, void 0));
  }
  isFetching(t) {
    return P(this, Ee).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return P(this, Pt).findAll({ ...t, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = P(this, Ee).get(e.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t) {
    const e = this.defaultQueryOptions(t), r = P(this, Ee).build(this, e), n = r.state.data;
    return n === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(Qo(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(n));
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
    ), s = i == null ? void 0 : i.state.data, o = Uh(e, s);
    if (o !== void 0)
      return P(this, Ee).build(this, n).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(t, e, r) {
    return Le.batch(
      () => P(this, Ee).findAll(t).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, e, r)
      ])
    );
  }
  getQueryState(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = P(this, Ee).get(
      e.queryHash
    )) == null ? void 0 : r.state;
  }
  removeQueries(t) {
    const e = P(this, Ee);
    Le.batch(() => {
      e.findAll(t).forEach((r) => {
        e.remove(r);
      });
    });
  }
  resetQueries(t, e) {
    const r = P(this, Ee);
    return Le.batch(() => (r.findAll(t).forEach((n) => {
      n.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...t
      },
      e
    )));
  }
  cancelQueries(t, e = {}) {
    const r = { revert: !0, ...e }, n = Le.batch(
      () => P(this, Ee).findAll(t).map((i) => i.cancel(r))
    );
    return Promise.all(n).then(Ze).catch(Ze);
  }
  invalidateQueries(t, e = {}) {
    return Le.batch(() => (P(this, Ee).findAll(t).forEach((r) => {
      r.invalidate();
    }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...t,
        type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
      },
      e
    )));
  }
  refetchQueries(t, e = {}) {
    const r = {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }, n = Le.batch(
      () => P(this, Ee).findAll(t).filter((i) => !i.isDisabled()).map((i) => {
        let s = i.fetch(void 0, r);
        return r.throwOnError || (s = s.catch(Ze)), i.state.fetchStatus === "paused" ? Promise.resolve() : s;
      })
    );
    return Promise.all(n).then(Ze);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const r = P(this, Ee).build(this, e);
    return r.isStaleByTime(
      Qo(e.staleTime, r)
    ) ? r.fetch(e) : Promise.resolve(r.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(Ze).catch(Ze);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = ea(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Ze).catch(Ze);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = ea(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return Tn.isOnline() ? P(this, Pt).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return P(this, Ee);
  }
  getMutationCache() {
    return P(this, Pt);
  }
  getDefaultOptions() {
    return P(this, At);
  }
  setDefaultOptions(t) {
    re(this, At, t);
  }
  setQueryDefaults(t, e) {
    P(this, mr).set($r(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...P(this, mr).values()], r = {};
    return e.forEach((n) => {
      Fr(t, n.queryKey) && Object.assign(r, n.defaultOptions);
    }), r;
  }
  setMutationDefaults(t, e) {
    P(this, yr).set($r(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...P(this, yr).values()], r = {};
    return e.forEach((n) => {
      Fr(t, n.mutationKey) && Object.assign(r, n.defaultOptions);
    }), r;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...P(this, At).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = gs(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === Nn && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...P(this, At).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    P(this, Ee).clear(), P(this, Pt).clear();
  }
}, Ee = new WeakMap(), Pt = new WeakMap(), At = new WeakMap(), mr = new WeakMap(), yr = new WeakMap(), xt = new WeakMap(), gr = new WeakMap(), br = new WeakMap(), Ma);
const fp = "http://ec2-3-110-83-171.ap-south-1.compute.amazonaws.com", ht = /* @__PURE__ */ Object.create(null);
ht.open = "0";
ht.close = "1";
ht.ping = "2";
ht.pong = "3";
ht.message = "4";
ht.upgrade = "5";
ht.noop = "6";
const mn = /* @__PURE__ */ Object.create(null);
Object.keys(ht).forEach((t) => {
  mn[ht[t]] = t;
});
const Xi = { type: "error", data: "parser error" }, ec = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", tc = typeof ArrayBuffer == "function", rc = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, bs = ({ type: t, data: e }, r, n) => ec && e instanceof Blob ? r ? n(e) : ra(e, n) : tc && (e instanceof ArrayBuffer || rc(e)) ? r ? n(e) : ra(new Blob([e]), n) : n(ht[t] + (e || "")), ra = (t, e) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    e("b" + (n || ""));
  }, r.readAsDataURL(t);
};
function na(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let _i;
function hp(t, e) {
  if (ec && t.data instanceof Blob)
    return t.data.arrayBuffer().then(na).then(e);
  if (tc && (t.data instanceof ArrayBuffer || rc(t.data)))
    return e(na(t.data));
  bs(t, !1, (r) => {
    _i || (_i = new TextEncoder()), e(_i.encode(r));
  });
}
const ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Rr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < ia.length; t++)
  Rr[ia.charCodeAt(t)] = t;
const pp = (t) => {
  let e = t.length * 0.75, r = t.length, n, i = 0, s, o, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const h = new ArrayBuffer(e), f = new Uint8Array(h);
  for (n = 0; n < r; n += 4)
    s = Rr[t.charCodeAt(n)], o = Rr[t.charCodeAt(n + 1)], a = Rr[t.charCodeAt(n + 2)], l = Rr[t.charCodeAt(n + 3)], f[i++] = s << 2 | o >> 4, f[i++] = (o & 15) << 4 | a >> 2, f[i++] = (a & 3) << 6 | l & 63;
  return h;
}, mp = typeof ArrayBuffer == "function", vs = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: nc(t, e)
    };
  const r = t.charAt(0);
  return r === "b" ? {
    type: "message",
    data: yp(t.substring(1), e)
  } : mn[r] ? t.length > 1 ? {
    type: mn[r],
    data: t.substring(1)
  } : {
    type: mn[r]
  } : Xi;
}, yp = (t, e) => {
  if (mp) {
    const r = pp(t);
    return nc(r, e);
  } else
    return { base64: !0, data: t };
}, nc = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, ic = "", gp = (t, e) => {
  const r = t.length, n = new Array(r);
  let i = 0;
  t.forEach((s, o) => {
    bs(s, !1, (a) => {
      n[o] = a, ++i === r && e(n.join(ic));
    });
  });
}, bp = (t, e) => {
  const r = t.split(ic), n = [];
  for (let i = 0; i < r.length; i++) {
    const s = vs(r[i], e);
    if (n.push(s), s.type === "error")
      break;
  }
  return n;
};
function vp() {
  return new TransformStream({
    transform(t, e) {
      hp(t, (r) => {
        const n = r.length;
        let i;
        if (n < 126)
          i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, n);
        else if (n < 65536) {
          i = new Uint8Array(3);
          const s = new DataView(i.buffer);
          s.setUint8(0, 126), s.setUint16(1, n);
        } else {
          i = new Uint8Array(9);
          const s = new DataView(i.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(n));
        }
        t.data && typeof t.data != "string" && (i[0] |= 128), e.enqueue(i), e.enqueue(r);
      });
    }
  });
}
let Ei;
function un(t) {
  return t.reduce((e, r) => e + r.length, 0);
}
function cn(t, e) {
  if (t[0].length === e)
    return t.shift();
  const r = new Uint8Array(e);
  let n = 0;
  for (let i = 0; i < e; i++)
    r[i] = t[0][n++], n === t[0].length && (t.shift(), n = 0);
  return t.length && n < t[0].length && (t[0] = t[0].slice(n)), r;
}
function wp(t, e) {
  Ei || (Ei = new TextDecoder());
  const r = [];
  let n = 0, i = -1, s = !1;
  return new TransformStream({
    transform(o, a) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (un(r) < 1)
            break;
          const l = cn(r, 1);
          s = (l[0] & 128) === 128, i = l[0] & 127, i < 126 ? n = 3 : i === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (un(r) < 2)
            break;
          const l = cn(r, 2);
          i = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (un(r) < 8)
            break;
          const l = cn(r, 8), h = new DataView(l.buffer, l.byteOffset, l.length), f = h.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Xi);
            break;
          }
          i = f * Math.pow(2, 32) + h.getUint32(4), n = 3;
        } else {
          if (un(r) < i)
            break;
          const l = cn(r, i);
          a.enqueue(vs(s ? l : Ei.decode(l), e)), n = 0;
        }
        if (i === 0 || i > t) {
          a.enqueue(Xi);
          break;
        }
      }
    }
  });
}
const sc = 4;
function qe(t) {
  if (t) return Sp(t);
}
function Sp(t) {
  for (var e in qe.prototype)
    t[e] = qe.prototype[e];
  return t;
}
qe.prototype.on = qe.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
qe.prototype.once = function(t, e) {
  function r() {
    this.off(t, r), e.apply(this, arguments);
  }
  return r.fn = e, this.on(t, r), this;
};
qe.prototype.off = qe.prototype.removeListener = qe.prototype.removeAllListeners = qe.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + t];
  if (!r) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var n, i = 0; i < r.length; i++)
    if (n = r[i], n === e || n.fn === e) {
      r.splice(i, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + t], this;
};
qe.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, i = r.length; n < i; ++n)
      r[n].apply(this, e);
  }
  return this;
};
qe.prototype.emitReserved = qe.prototype.emit;
qe.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
qe.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const jn = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, r) => r(e, 0), Ye = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), _p = "arraybuffer";
function oc(t, ...e) {
  return e.reduce((r, n) => (t.hasOwnProperty(n) && (r[n] = t[n]), r), {});
}
const Ep = Ye.setTimeout, Cp = Ye.clearTimeout;
function Bn(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = Ep.bind(Ye), t.clearTimeoutFn = Cp.bind(Ye)) : (t.setTimeoutFn = Ye.setTimeout.bind(Ye), t.clearTimeoutFn = Ye.clearTimeout.bind(Ye));
}
const Op = 1.33;
function Np(t) {
  return typeof t == "string" ? Tp(t) : Math.ceil((t.byteLength || t.size) * Op);
}
function Tp(t) {
  let e = 0, r = 0;
  for (let n = 0, i = t.length; n < i; n++)
    e = t.charCodeAt(n), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function ac() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function qp(t) {
  let e = "";
  for (let r in t)
    t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e;
}
function Rp(t) {
  let e = {}, r = t.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let s = r[n].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
class Pp extends Error {
  constructor(e, r, n) {
    super(e), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class ws extends qe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Bn(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, r, n) {
    return super.emitReserved("error", new Pp(e, r, n)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const r = vs(e, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, r = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const r = qp(e);
    return r.length ? "?" + r : "";
  }
}
class Ap extends ws {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", e();
    };
    if (this._polling || !this.writable) {
      let n = 0;
      this._polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
      }));
    } else
      r();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    bp(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, gp(e, (r) => {
      this.doWrite(r, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "https" : "http", r = this.query || {};
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = ac()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r);
  }
}
let uc = !1;
try {
  uc = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const xp = uc;
function kp() {
}
class Dp extends Ap {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const r = location.protocol === "https:";
      let n = location.port;
      n || (n = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, r) {
    const n = this.request({
      method: "POST",
      data: e
    });
    n.on("success", r), n.on("error", (i, s) => {
      this.onError("xhr post error", i, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = e;
  }
}
class ft extends qe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, r, n) {
    super(), this.createRequest = e, Bn(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const r = oc(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this._opts.xd;
    const n = this._xhr = this.createRequest(r);
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let i in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(i) && n.setRequestHeader(i, this._opts.extraHeaders[i]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = () => {
        var i;
        n.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(
          // @ts-ignore
          n.getResponseHeader("set-cookie")
        )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this._data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this._onError(i);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = ft.requestsCount++, ft.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = kp, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete ft.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
ft.requestsCount = 0;
ft.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", sa);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Ye ? "pagehide" : "unload";
    addEventListener(t, sa, !1);
  }
}
function sa() {
  for (let t in ft.requests)
    ft.requests.hasOwnProperty(t) && ft.requests[t].abort();
}
const Ip = function() {
  const t = cc({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class $p extends Dp {
  constructor(e) {
    super(e);
    const r = e && e.forceBase64;
    this.supportsBinary = Ip && !r;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new ft(cc, this.uri(), e);
  }
}
function cc(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || xp))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Ye[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const lc = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Fp extends ws {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), r = this.opts.protocols, n = lc ? {} : oc(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, r, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = r === e.length - 1;
      bs(n, this.supportsBinary, (s) => {
        try {
          this.doWrite(n, s);
        } catch {
        }
        i && jn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", r = this.query || {};
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = ac()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r);
  }
}
const Ci = Ye.WebSocket || Ye.MozWebSocket;
class Mp extends Fp {
  createSocket(e, r, n) {
    return lc ? new Ci(e, r, n) : r ? new Ci(e, r) : new Ci(e);
  }
  doWrite(e, r) {
    this.ws.send(r);
  }
}
class Lp extends ws {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((e) => {
        const r = wp(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(r).getReader(), i = vp();
        i.readable.pipeTo(e.writable), this._writer = i.writable.getWriter();
        const s = () => {
          n.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), s());
          }).catch((a) => {
          });
        };
        s();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
      });
    });
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = r === e.length - 1;
      this._writer.write(n).then(() => {
        i && jn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const jp = {
  websocket: Mp,
  webtransport: Lp,
  polling: $p
}, Bp = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Vp = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function Ji(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const e = t, r = t.indexOf("["), n = t.indexOf("]");
  r != -1 && n != -1 && (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ";") + t.substring(n, t.length));
  let i = Bp.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[Vp[o]] = i[o] || "";
  return r != -1 && n != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Up(s, s.path), s.queryKey = zp(s, s.query), s;
}
function Up(t, e) {
  const r = /\/{2,9}/g, n = e.replace(r, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function zp(t, e) {
  const r = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, s) {
    i && (r[i] = s);
  }), r;
}
const Zi = typeof addEventListener == "function" && typeof removeEventListener == "function", yn = [];
Zi && addEventListener("offline", () => {
  yn.forEach((t) => t());
}, !1);
class Dt extends qe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, r) {
    if (super(), this.binaryType = _p, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (r = e, e = null), e) {
      const n = Ji(e);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = Ji(r.host).host);
    Bn(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n) => {
      const i = n.prototype.name;
      this.transports.push(i), this._transportsByName[i] = n;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Rp(this.opts.query)), Zi && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, yn.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = sc, r.transport = e, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const e = this.opts.rememberUpgrade && Dt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(e);
    r.open(), this.setTransport(r);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (r) => this._onClose("transport close", r));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Dt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const r = new Error("server error");
          r.code = e.data, this._onError(r);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this._getWritablePackets();
      this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const i = this.writeBuffer[n].data;
      if (i && (r += Np(i)), n > 0 && r > this._maxPayload)
        return this.writeBuffer.slice(0, n);
      r += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const e = Date.now() > this._pingTimeoutTime;
    return e && (this._pingTimeoutTime = 0, jn(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), e;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(e, r, n) {
    return this._sendPacket("message", e, r, n), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, r, n) {
    return this._sendPacket("message", e, r, n), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(e, r, n, i) {
    if (typeof r == "function" && (i = r, r = void 0), typeof n == "function" && (i = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const s = {
      type: e,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), e();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : e();
    }) : this.upgrading ? n() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (Dt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(e, r) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Zi && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = yn.indexOf(this._offlineEventListener);
        n !== -1 && yn.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Dt.protocol = sc;
class Gp extends Dt {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(e) {
    let r = this.createTransport(e), n = !1;
    Dt.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (p) => {
        if (!n)
          if (p.type === "pong" && p.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Dt.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (f(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const m = new Error("probe error");
            m.transport = r.name, this.emitReserved("upgradeError", m);
          }
      }));
    };
    function s() {
      n || (n = !0, f(), r.close(), r = null);
    }
    const o = (p) => {
      const m = new Error("probe error: " + p);
      m.transport = r.name, s(), this.emitReserved("upgradeError", m);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function h(p) {
      r && p.name !== r.name && s();
    }
    const f = () => {
      r.removeListener("open", i), r.removeListener("error", o), r.removeListener("close", a), this.off("close", l), this.off("upgrading", h);
    };
    r.once("open", i), r.once("error", o), r.once("close", a), this.once("close", l), this.once("upgrading", h), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      n || r.open();
    }, 200) : r.open();
  }
  onHandshake(e) {
    this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(e) {
    const r = [];
    for (let n = 0; n < e.length; n++)
      ~this.transports.indexOf(e[n]) && r.push(e[n]);
    return r;
  }
}
let Wp = class extends Gp {
  constructor(e, r = {}) {
    const n = typeof e == "object" ? e : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((i) => jp[i]).filter((i) => !!i)), super(e, n);
  }
};
function Kp(t, e = "", r) {
  let n = t;
  r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), n = Ji(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + s + ":" + n.port + e, n.href = n.protocol + "://" + s + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const Hp = typeof ArrayBuffer == "function", Qp = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, dc = Object.prototype.toString, Yp = typeof Blob == "function" || typeof Blob < "u" && dc.call(Blob) === "[object BlobConstructor]", Xp = typeof File == "function" || typeof File < "u" && dc.call(File) === "[object FileConstructor]";
function Ss(t) {
  return Hp && (t instanceof ArrayBuffer || Qp(t)) || Yp && t instanceof Blob || Xp && t instanceof File;
}
function gn(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let r = 0, n = t.length; r < n; r++)
      if (gn(t[r]))
        return !0;
    return !1;
  }
  if (Ss(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return gn(t.toJSON(), !0);
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && gn(t[r]))
      return !0;
  return !1;
}
function Jp(t) {
  const e = [], r = t.data, n = t;
  return n.data = es(r, e), n.attachments = e.length, { packet: n, buffers: e };
}
function es(t, e) {
  if (!t)
    return t;
  if (Ss(t)) {
    const r = { _placeholder: !0, num: e.length };
    return e.push(t), r;
  } else if (Array.isArray(t)) {
    const r = new Array(t.length);
    for (let n = 0; n < t.length; n++)
      r[n] = es(t[n], e);
    return r;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const r = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (r[n] = es(t[n], e));
    return r;
  }
  return t;
}
function Zp(t, e) {
  return t.data = ts(t.data, e), delete t.attachments, t;
}
function ts(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let r = 0; r < t.length; r++)
      t[r] = ts(t[r], e);
  else if (typeof t == "object")
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (t[r] = ts(t[r], e));
  return t;
}
const em = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], tm = 5;
var ie;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(ie || (ie = {}));
class rm {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === ie.EVENT || e.type === ie.ACK) && gn(e) ? this.encodeAsBinary({
      type: e.type === ie.EVENT ? ie.BINARY_EVENT : ie.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let r = "" + e.type;
    return (e.type === ie.BINARY_EVENT || e.type === ie.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const r = Jp(e), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
function oa(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class _s extends qe {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let r;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(e);
      const n = r.type === ie.BINARY_EVENT;
      n || r.type === ie.BINARY_ACK ? (r.type = n ? ie.EVENT : ie.ACK, this.reconstructor = new nm(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (Ss(e) || e.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(e), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let r = 0;
    const n = {
      type: Number(e.charAt(0))
    };
    if (ie[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === ie.BINARY_EVENT || n.type === ie.BINARY_ACK) {
      const s = r + 1;
      for (; e.charAt(++r) !== "-" && r != e.length; )
        ;
      const o = e.substring(s, r);
      if (o != Number(o) || e.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(o);
    }
    if (e.charAt(r + 1) === "/") {
      const s = r + 1;
      for (; ++r && !(e.charAt(r) === "," || r === e.length); )
        ;
      n.nsp = e.substring(s, r);
    } else
      n.nsp = "/";
    const i = e.charAt(r + 1);
    if (i !== "" && Number(i) == i) {
      const s = r + 1;
      for (; ++r; ) {
        const o = e.charAt(r);
        if (o == null || Number(o) != o) {
          --r;
          break;
        }
        if (r === e.length)
          break;
      }
      n.id = Number(e.substring(s, r + 1));
    }
    if (e.charAt(++r)) {
      const s = this.tryParse(e.substr(r));
      if (_s.isPayloadValid(n.type, s))
        n.data = s;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, r) {
    switch (e) {
      case ie.CONNECT:
        return oa(r);
      case ie.DISCONNECT:
        return r === void 0;
      case ie.CONNECT_ERROR:
        return typeof r == "string" || oa(r);
      case ie.EVENT:
      case ie.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && em.indexOf(r[0]) === -1);
      case ie.ACK:
      case ie.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class nm {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const r = Zp(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const im = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: _s,
  Encoder: rm,
  get PacketType() {
    return ie;
  },
  protocol: tm
}, Symbol.toStringTag, { value: "Module" }));
function rt(t, e, r) {
  return t.on(e, r), function() {
    t.off(e, r);
  };
}
const sm = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class fc extends qe {
  /**
   * `Socket` constructor.
   */
  constructor(e, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      rt(e, "open", this.onopen.bind(this)),
      rt(e, "packet", this.onpacket.bind(this)),
      rt(e, "error", this.onerror.bind(this)),
      rt(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...r) {
    var n, i, s;
    if (sm.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const o = {
      type: ie.EVENT,
      data: r
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const f = this.ids++, p = r.pop();
      this._registerAckCallback(f, p), o.id = f;
    }
    const a = (i = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || i === void 0 ? void 0 : i.writable, l = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
    return this.flags.volatile && !a || (l ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, r) {
    var n;
    const i = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[e] = r;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      r.call(this, new Error("operation has timed out"));
    }, i), o = (...a) => {
      this.io.clearTimeoutFn(s), r.apply(this, a);
    };
    o.withError = !0, this.acks[e] = o;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(e, ...r) {
    return new Promise((n, i) => {
      const s = (o, a) => o ? i(o) : n(a);
      s.withError = !0, r.push(s), this.emit(e, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let r;
    typeof e[e.length - 1] == "function" && (r = e.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((i, ...s) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(i)) : (this._queue.shift(), r && r(null, ...s)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !e || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: ie.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, r), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((n) => String(n.id) === e)) {
        const n = this.acks[e];
        delete this.acks[e], n.withError && n.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case ie.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ie.EVENT:
        case ie.BINARY_EVENT:
          this.onevent(e);
          break;
        case ie.ACK:
        case ie.BINARY_ACK:
          this.onack(e);
          break;
        case ie.DISCONNECT:
          this.ondisconnect();
          break;
        case ie.CONNECT_ERROR:
          this.destroy();
          const n = new Error(e.data.message);
          n.data = e.data.data, this.emitReserved("connect_error", n);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const r = e.data || [];
    e.id != null && r.push(this.ack(e.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const r = this;
    let n = !1;
    return function(...i) {
      n || (n = !0, r.packet({
        type: ie.ACK,
        id: e,
        data: i
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const r = this.acks[e.id];
    typeof r == "function" && (delete this.acks[e.id], r.withError && e.data.unshift(null), r.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, r) {
    this.id = e, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: ie.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (e === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (e === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, e.data);
    }
  }
}
function wr(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
wr.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), r = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + r : t - r;
  }
  return Math.min(t, this.max) | 0;
};
wr.prototype.reset = function() {
  this.attempts = 0;
};
wr.prototype.setMin = function(t) {
  this.ms = t;
};
wr.prototype.setMax = function(t) {
  this.max = t;
};
wr.prototype.setJitter = function(t) {
  this.jitter = t;
};
class rs extends qe {
  constructor(e, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Bn(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new wr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
    const i = r.parser || im;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var r;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (r = this.backoff) === null || r === void 0 || r.setMin(e), this);
  }
  randomizationFactor(e) {
    var r;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (r = this.backoff) === null || r === void 0 || r.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var r;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (r = this.backoff) === null || r === void 0 || r.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Wp(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = rt(r, "open", function() {
      n.onopen(), e && e();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = rt(r, "error", s);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        i(), s(new Error("timeout")), r.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
      });
    }
    return this.subs.push(i), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(
      rt(e, "ping", this.onping.bind(this)),
      rt(e, "data", this.ondata.bind(this)),
      rt(e, "error", this.onerror.bind(this)),
      rt(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      rt(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    jn(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, r) {
    let n = this.nsps[e];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new fc(this, e, r), this.nsps[e] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const r = this.encoder.encode(e);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(e, r) {
    var n;
    this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((i) => {
          i ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", i)) : e.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const Cr = {};
function bn(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const r = Kp(t, e.path || "/socket.io"), n = r.source, i = r.id, s = r.path, o = Cr[i] && s in Cr[i].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return a ? l = new rs(n, e) : (Cr[i] || (Cr[i] = new rs(n, e)), l = Cr[i]), r.query && !e.query && (e.query = r.queryKey), l.socket(r.path, e);
}
Object.assign(bn, {
  Manager: rs,
  Socket: fc,
  io: bn,
  connect: bn
});
bn(fp, {
  transports: ["websocket", "polling"],
  // Try websocket first, fallback to polling
  extraHeaders: {
    "ngrok-skip-browser-warning": "true"
  },
  autoConnect: !1,
  // Change to false for better control
  reconnection: !0,
  reconnectionDelay: 1e3,
  reconnectionAttempts: 5,
  timeout: 2e4,
  upgrade: !0,
  // Allow transport upgrades
  rememberUpgrade: !0,
  // Remember the upgrade for future connections
  forceNew: !1
  // Don't force new connection unnecessarily
});
const q = {
  IS_STRING: /^[a-zA-Z ]+$/,
  IS_VEHICLE_NO: /^[a-zA-Z]{2}[- ]?[0-9]{1,2}[- ]?[a-zA-Z]{1,2}[- ]?[0-9]{4}$/,
  IS_NUMBER: /^\d+(\.\d+)?$/,
  CONTACT_NO: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/,
  IS_EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}, Oe = j().shape({
  address1: c().required("Address Line 1 is required"),
  address2: c().nullable(),
  location: c().required("Location is required"),
  city: c().required("City is required").matches(q.IS_STRING, "City name should only contains alphabets."),
  state: c().required("State is required").matches(q.IS_STRING, "State name should only contains alphabets."),
  pincode: c().required("Pincode is required").matches(q.PINCODE, "Pincode must be exactly 6 digits")
}), kt = c().test("is-future-or-today", "Date must be today or in the future", (t) => {
  if (!t)
    return !0;
  const e = new Date(t), r = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), r.setHours(0, 0, 0, 0), e >= r;
});
j().shape({
  companyName: c().required("Party Name is required"),
  category: c().required("Please select category of vendor"),
  subcategory: c().required("Please select subcategory of vendor"),
  officeAddress: Oe,
  officeContactNo: c().required("Please enter contact number.").matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: c().notRequired().nullable().matches(q.IS_EMAIL, "Please enter valid email."),
  mainProduct: c().notRequired().nullable().matches(q.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: c().notRequired().nullable().matches(q.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: c().notRequired().nullable().matches(q.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: c().notRequired().nullable().matches(q.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: c().notRequired().nullable(),
  creditTerms: c().notRequired().nullable(),
  ifGstnCopy: it().required(),
  gstn: c().when("ifGstnCopy", {
    is: !0,
    then: (t) => t.required("GSTN number required if GSTN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  gstnCopy: Ae().when("ifGstnCopy", {
    is: !0,
    then: (t) => t.required("GSTN copy required if GSTN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  ifPanCardCopy: it().required(),
  panNo: c().when("ifPanCardCopy", {
    is: !0,
    then: (t) => t.required("PAN number required if PAN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  panCardCopy: Ae().when("ifPanCardCopy", {
    is: !0,
    then: (t) => t.required("PAN card copy required if PAN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  ifMsmeCopy: it().required(),
  msmeNo: c().when("ifMsmeCopy", {
    is: !0,
    then: (t) => t.required("MSME number required if MSME is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  msmeCopy: Ae().when("ifMsmeCopy", {
    is: !0,
    then: (t) => t.required("MSME copy required if MSME is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  vendorSaleInfo: j().shape({
    contactFName: c().required("Contact person first name is required.").matches(q.IS_STRING, "Name should include only alphabets."),
    contactMName: c().notRequired().nullable().matches(q.IS_STRING, "Name should include only alphabets."),
    contactLName: c().required("Contact person last name is required.").matches(q.IS_STRING, "Name should include only alphabets."),
    directContactNumber: c().required("Contact person phone number is required").matches(q.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: c().notRequired().nullable().matches(q.CONTACT_NO, "Please enter a valid contact number."),
    email: c().notRequired().nullable().matches(q.IS_EMAIL, "Please enter valid email.")
  }),
  vendorBankDetails: j().shape({
    beneficiaryFName: c().required("Beneficiary person first name is required.").matches(q.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: c().notRequired().nullable().matches(q.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: c().required("Beneficiary person last name is required.").matches(q.IS_STRING, "Name should include only alphabets."),
    bankName: c().required("Bank name is required.").matches(q.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: Oe,
    typeOfAcc: c().required("Account type is required."),
    ifscCode: c().required("IFSC code of bank is required."),
    swiftNo: c().notRequired().nullable(),
    invoiceCurrency: c().notRequired().nullable(),
    cancelledChequeCopy: c().notRequired().nullable()
  }),
  ref1FName: c().required("Reference person first name is required.").matches(q.IS_STRING, "Name should include only alphabets."),
  ref1MName: c().notRequired().nullable().matches(q.IS_STRING, "Name should include only alphabets."),
  ref1LName: c().required("Reference person first name is required.").matches(q.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: c().required("Contact number is required").matches(q.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: c().notRequired().nullable().matches(q.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: Oe,
  ref1Email: c().notRequired().nullable().matches(q.IS_EMAIL, "Please enter valid email."),
  ref2FName: c().notRequired().nullable().matches(q.IS_STRING, "Name should include only alphabets."),
  ref2MName: c().notRequired().nullable().matches(q.IS_STRING, "Name should include only alphabets."),
  ref2LName: c().notRequired().nullable().matches(q.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: c().notRequired().nullable().matches(q.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: c().notRequired().nullable().matches(q.CONTACT_NO, "Please enter valid contact number."),
  ref2Email: c().notRequired().nullable().matches(q.IS_EMAIL, "Please enter valid email."),
  ref2Address: j().shape({
    city: c().notRequired().nullable().matches(q.IS_STRING, "City name should only contains alphabets."),
    state: c().notRequired().nullable().matches(q.IS_STRING, "State name should only contains alphabets."),
    pincode: c().notRequired().nullable().matches(q.PINCODE, "Pincode must be exactly 6 digits")
  }).notRequired().nullable()
});
j().shape({
  farmerfName: c().required("First Name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  farmermName: c().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  farmerlName: c().required("Last Name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: Oe,
  primaryMobileNo: c().required("Contact number is required.").matches(q.CONTACT_NO, "Please enter valid contact number."),
  secondaryMobileNo: c().nullable().matches(q.CONTACT_NO, "Please enter valid contact number."),
  email: c().nullable().matches(q.IS_EMAIL, "Please enter valid email."),
  dob: dt().nullable(),
  farmAddress: Oe,
  totalLandArea: I().nullable().min(0, "Area cannot be negative."),
  cultivationArea: I().nullable().positive("Area cannot be negative."),
  farmerPhoto: Ae().nullable().test(
    "fileSize",
    "File size is too large (must be less than 1MB)",
    function(t) {
      return t ? t.size <= 1024 * 1024 : !0;
    }
  ),
  farmPhoto: Ae().nullable().test(
    "fileSize",
    "File size is too large (must be less than 1MB)",
    function(t) {
      return t ? t.size <= 1024 * 1024 : !0;
    }
  ),
  crops: Ie(
    j({
      crop: c().required("Crop name is required"),
      noOfPlants: I().nullable().min(0, "Number of plants cannot be negative"),
      pruningDate: dt().required("Pruning date is required."),
      expectedHarvestDate: dt().required("Expected harvest date is required."),
      expectedQuantityInTonnes: I().required("Expected quantity in metric tones are required.").min(0, "Quantity cannot be negative")
    }).required("At least one crop is required")
  )
});
const om = j().shape({
  accDeptFName: c().required("First name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  accDeptMName: c().notRequired().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  accDeptLName: c().required("Last name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  accDeptMobileNo: c().required("Please enter contact number.").matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  ownerFName: c().required("First name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  ownerMName: c().notRequired().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  ownerLName: c().required("Last name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  ownerMobileNo: c().required("Please enter contact number.").matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  mandiLicenceNo: c().notRequired().nullable(),
  // mandiLicenceCopy: yup.,
  regiNo: c().notRequired().nullable(),
  // regiCopy: File | null,
  electricityBill: it().required("Please select yes or no."),
  consumenrNo: c().when("electricityBill", {
    is: !0,
    then: (t) => t.required("Consumer number is required if electricity bill available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  electricityBillCopy: Ae().when("electricityBill", {
    is: !0,
    then: (t) => t.required("Electricity bill copy required if it is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  notElectricityBillReason: c().when("electricityBill", {
    is: !1,
    then: (t) => t.required("Please specify reason to not attach electricity bill."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  customerBlacklisted: it().required("Please select yes or no."),
  blackListedBy: c().when("customerBlacklisted", {
    is: !0,
    then: (t) => t.required("Please specify name who blacklisted the customer."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  ifBlacklistedReason: c().when("customerBlacklisted", {
    is: !0,
    then: (t) => t.required("please specify reason for blacklisting customer."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  visitingCard: it().required("Please select yes or no."),
  visitinContactNo: c().when("visitingCard", {
    is: !0,
    then: (t) => t.required("Consumer number is required ff visiting card available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  visitingCardCopy: Ae().when("visitingCard", {
    is: !0,
    then: (t) => t.required("Visiting card copy required if it is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  notVisitingCardReason: c().when("visitingCard", {
    is: !1,
    then: (t) => t.required("Please specify reason to not attach visiting card."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  //References
  ref1FName: c().required("First name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  ref1MName: c().notRequired().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  ref1LName: c().required("Last name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  ref1Address: Oe,
  ref1ContactNo: c().required("Please enter contact number.").matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  ref1Email: c().required("Please enter email.").email("Please enter valid email"),
  ref2FName: c().notRequired().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  ref2MName: c().notRequired().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  ref2LName: c().notRequired().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  ref2ContactNo: c().notRequired().nullable().matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  ref2Email: c().notRequired().nullable().email("Please enter valid email")
}), am = j().shape({
  billingName: c().required("Billing name is required."),
  commonlyKnownAs: c().notRequired().nullable(),
  contactPersonFName: c().required("First name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  contactPersonMName: c().notRequired().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  contactPersonLName: c().required("Last name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  billingAddress: Oe,
  primaryContactNo: c().required("Please enter contact number.").matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: c().notRequired().nullable().matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: c().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: c().notRequired().nullable().email("Please enter valid email")
}), um = j().shape({
  deliveryAddress: Oe,
  receivingPersonFName: c().required("First name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  receivingPersonMName: c().notRequired().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  receivingPersonLName: c().required("Last name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  primaryContactNo: c().required("Please enter contact number.").matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: c().notRequired().nullable().matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: c().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: c().notRequired().nullable().email("Please enter valid email")
}), cm = j().shape({
  // ifCancelledCheque: yup
  //     .boolean()
  //     .required('Please select yes or no.'),
  // cancelledChequeCopy: yup
  //     .mixed()
  //     .when('ifCancelledCheque', {
  //         is: true,
  //         then: (schema) => schema.required("Cancel cheque copy required if it is available."),
  //         otherwise: (schema) => schema.notRequired().nullable(),
  //     }),
  // notCancelledChequeReason: yup
  //     .string()
  //     .when('ifCancelledCheque', {
  //         is: false,
  //         then: (schema) => schema.required("Please specify reason to not attach cancel cheque."),
  //         otherwise: (schema) => schema.notRequired().nullable(),
  //     }),
  bankAccHolderFName: c().required("First name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderMName: c().notRequired().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderLName: c().required("Last name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  bankName: c().required("Bank name is required."),
  bankBranch: c().required("Branch name is required."),
  accType: c().required("Account type is required."),
  // otherAccType: yup
  //     .string()
  //     .notRequired()
  //     .nullable(),
  bankAccNo: c().required("Account number is required."),
  ifscCode: c().required("IFSC code is required."),
  bankAddress: Oe
  // bankStatementCopy: yup.mixed(),
});
j().shape({
  panNo: c().notRequired().nullable(),
  panCopy: Ae().notRequired().nullable(),
  aadharNo: c().notRequired().nullable(),
  addharCopy: Ae().notRequired().nullable(),
  gstn: c().notRequired().nullable(),
  regiCertificateCopy: Ae().notRequired().nullable(),
  billBookCopy: Ae().notRequired().nullable(),
  certificationsDetails: c().notRequired().nullable(),
  otherCertifications: c().notRequired().nullable(),
  corpRegiDetails: c().notRequired().nullable(),
  otherCorpRegiDetails: c().notRequired().nullable(),
  incorpoCertificateCopy: Ae().notRequired().nullable(),
  cinNo: c().notRequired().nullable()
});
const lm = j().shape({}), dm = j().shape({
  paymentMade: c().required("Required. Please select an option."),
  otherPaymentMade: c().nullable(),
  paymentMode: c().required("Payment mode is required."),
  otherPaymentMode: c().nullable(),
  marginDeposit: c().nullable(),
  rtv: it().required("Please select yes or no."),
  agreementExecuted: it().required("Please select yes or no."),
  lc: c().nullable(),
  bg: c().nullable(),
  securityDepoCheqNo: c().nullable(),
  securityDepoAmt: I().positive("Amount cannot be negative."),
  //Initial Exposure Limit (IEL)
  IELinAmt: I().positive("Amount cannot be negative."),
  IELRecommendedBy: c().matches(q.IS_STRING, "Name should only contain alphabets."),
  IELRecommendedDate: c().nullable(),
  //Revision of Exposure Limit (REL)
  RELinAmt: I().positive("Amount cannot be negative."),
  RELRecommendedBy: c().matches(q.IS_STRING, "Name should only contain alphabets."),
  RELRecommendedDate: c().nullable(),
  reason: c().nullable(),
  docEvidenceCopy: Ae().nullable()
}), fm = j().shape({
  proposerBDName: c().nullable(),
  pflCoordinator: c().nullable(),
  recommendedBy: c().nullable(),
  dispatchLocationPfl: c().nullable(),
  approvedBy: c().nullable(),
  relationshipManager: c().nullable(),
  avgBillingMonthly: I().positive("Average cannot be negative."),
  volumeMonthly: I().positive("Volume cannot be negative."),
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
j().shape({
  organisationName: c().required("Organization name is required."),
  customerTypes: c().required("Customer type is required."),
  customerCategory: c().required("Customer category is required."),
  organisationType: c().required("Organization type is required."),
  // otherType: yup
  //     .string()
  //     .notRequired().nullable(),
  customerAddress: Oe,
  primaryContactNo: c().required("Please enter contact number.").matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: c().notRequired().nullable().matches(q.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: c().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: c().notRequired().nullable().email("Please enter valid email"),
  keyMobileNumbers: om,
  billingDetails: am,
  deliveryDetails: um,
  // statutoryDetails: statutoryDetailsValidationSchema,
  bankDetails: cm,
  productSpecification: lm,
  paymentTerms: dm,
  officeUseOnly: fm
});
const hm = /^[6-9]\d{9}$/;
c().matches(hm, "Please enter a valid 10-digit contact number");
j().shape({
  companyName: c().required("Company Name is required"),
  purchaseLocation: c().test(
    "is-required-conditional",
    "Purchase location is required.",
    function(t) {
      const { otherPurchaseLoc: e } = this.parent;
      return !(!t && !e);
    }
  ),
  otherPurchaseLoc: c().when("purchaseLocation", {
    is: "other",
    then: (t) => t.required("Please specify 'Other' purchase location."),
    otherwise: (t) => t.notRequired()
  }),
  purchaseForSalesLocation: c().test(
    "is-required-conditional-sales",
    "Purchase for sales location is required.",
    function(t) {
      const { otherPurchaseForSalesLoc: e } = this.parent;
      return !(!t && !e);
    }
  ),
  otherPurchaseForSalesLoc: c().when("purchaseForSalesLocation", {
    is: "other",
    then: (t) => t.required("Please specify 'Other' purchase for sales location."),
    otherwise: (t) => t.notRequired()
  }),
  selectedParty: c().required("Please select one option"),
  rfpaProducts: Ie().of(
    j().shape({
      productName: c().required("Product is required"),
      grade: c().nullable(),
      quantity: I().required("Quantity is required").positive("Quantity must be positive"),
      unitPrice: I().required("Unit Price is required").positive("Unit Price must be positive"),
      purchaseDate: kt.required("Purchase Date is required"),
      dispatchDate: kt.required("Dispatch Date is required"),
      deliveryDate: kt.required("Delivery Date is required"),
      deliveryLocation: c().required("Delivery Location is required"),
      expectedHarvestDate: dt().nullable()
    })
  ).required("RFPA Products are required"),
  paymentInfo: j().shape({
    paymentMode: c().required("Payment Mode is required"),
    advancePaidAmt: I().nullable().min(0, "Amount must be positive"),
    creditPeriod: I().required("Credit Period is required").min(0, "Credit Period must be positive"),
    paymentDate: kt.required("Payment Date is required"),
    paymentTerms: I().required("Payment Terms is required").positive("Payment Terms must be positive")
  }).required("Payment Information is required"),
  deliveryReceivingPerson: c().matches(q.IS_STRING, "Please enter a valid name").required("Delivery Receiving Person is required")
});
j().shape({
  loadingLocation: c().required("Loading location is required."),
  lotNo: c().required("Lot number is required.")
});
j().shape({
  companyName: c().required("Company Name is required"),
  purchaseInstructionsBy: c().required("Requesting person name required").matches(q.IS_STRING, "Name should only contain alphabets."),
  purchaseLocation: c().test("is-required-conditional", "Purchase location is required.", function(t) {
    const { otherPurchaseLoc: e } = this.parent;
    return !(!t && !e);
  }),
  otherPurchaseLoc: c().when("purchaseLocation", {
    is: "other",
    then: (t) => t.required("Please specify 'Other' purchase location."),
    otherwise: (t) => t.notRequired()
  }),
  purchaseForSalesLocation: c().test("is-required-conditional-sales", "Purchase for sales location is required.", function(t) {
    const { otherPurchaseForSalesLoc: e } = this.parent;
    return !(!t && !e);
  }),
  otherPurchaseForSalesLoc: c().when("purchaseForSalesLocation", {
    is: "other",
    then: (t) => t.required("Please specify 'Other' purchase for sales location."),
    otherwise: (t) => t.notRequired()
  }),
  selectedParty: c().required("Please select one option"),
  grnProducts: Ie().of(
    j().shape({
      productName: c().required("Select at least one product"),
      quantity: I().required("Quantity is required").min(0, "Quantity can't be negative"),
      unitPrice: I().required("Unit price is required").min(0, "Price can't be negative"),
      grossWeight: I().required("Gross weight is required").min(0, "Weight can't be negative"),
      packingMaterialWeight: I().required("Packing material weight is required").min(0, "Weight can't be negative"),
      purchaseDate: kt.required("Purchase Date is required"),
      dispatchDate: kt.required("Dispatch Date is required"),
      deliveryDate: kt.required("Delivery Date is required"),
      deliveryLocation: c().required("Delivery Location is required"),
      expectedHarvestDate: dt().nullable(),
      rtv: it().required("Select is product rtv or not")
    })
  ).required("At lease one product required"),
  freight: I().nullable().min(0, "Amount can't be negative"),
  otherCharges: I().nullable().min(0, "Amount can't be negative"),
  paymentInfo: j().shape({
    paymentMode: c().required("Payment Mode is required"),
    creditPeriod: I().required("Credit Period is required").min(0, "Credit Period must be positive"),
    paymentDate: kt.required("Payment Date is required"),
    paymentTerms: I().required("Payment Terms is required").positive("Payment Terms must be positive"),
    advancePaidAmt: I().nullable().min(0, "Amount must be positive"),
    remainingAmt: I().nullable().min(0, "Amount must be positive")
  }).required("Payment Information is required"),
  purchasedBy: c().nullable().matches(q.IS_STRING, "Name should only contain alphabets."),
  receivedThrough: c().nullable().matches(q.IS_STRING, "Name should only contain alphabets."),
  securityPerson: c().nullable().matches(q.IS_STRING, "Name should only contain alphabets."),
  vehicleNo: c().nullable().matches(q.IS_VEHICLE_NO, "Please enter valid vehicle number."),
  cratesIn: I().nullable().min(0, "Count of crates can't be negative"),
  deliveryReceivingPerson: c().required("Delivery receiving person name is required").matches(q.IS_STRING, "Name should only contain alphabets."),
  rmn: c().required("RM name is required").matches(q.IS_STRING, "Name should only contain alphabets.")
});
j().shape({
  companyName: c().required("Company name is required"),
  debitCreditTo: c().required("Name required for debit / credit to."),
  payReceivedFrom: c().required("Name required for pay / received from"),
  location: c().required("Location is required"),
  noOfLabours: I().required("Number of labour is required").positive("Number of labours cannot be negative"),
  ratePerLabour: I().required("Rate is required").positive("Rate cannot be negative"),
  loadingDate: c().required("Loading date is required"),
  contactNo: c().required("Contact number is required.").matches(q.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: c().nullable().matches(q.IS_NUMBER, "Please enter valid contact number."),
  paymentMode: c().required("Payment mode is required"),
  receiverName: c().required("Receiver name is required").matches(q.IS_STRING, "Name should only contains alphabets.")
});
j().shape({
  companyName: c().required("Company name is required"),
  debitCreditTo: c().required("Name required for debit / credit to."),
  payReceivedFrom: c().required("Name required for pay / received from"),
  location: c().required("Location is required"),
  paymentMode: c().required("Payment mode is required"),
  receiverName: c().required("Receiver name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  particulars: Ie(
    j({
      description: c().required("Description is required").min(5, "Minimum 5 characters required"),
      amt: I().required("Amount is required").positive("Amount cannot be negative")
    })
  )
});
j().shape({
  companyName: c().required("Company name is required"),
  debitCreditTo: c().required("Name required for debit / credit to."),
  payReceivedFrom: c().required("Name required for pay / received from"),
  location: c().required("Location is required"),
  sellerName: c().required("Seller name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  address: Oe,
  contactNo: c().required("Contact number is required.").matches(q.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: c().nullable().matches(q.CONTACT_NO, "Please enter valid contact number."),
  paymentMode: c().required("Payment mode is required"),
  receiverName: c().required("Receiver name is required").matches(q.IS_STRING, "Name should only contains alphabets."),
  materials: Ie().of(
    j().shape({
      itemName: c().required("Item name is required"),
      itemUom: c().required("UOM is required"),
      itemQty: I().required("Quantity is required").positive("Quantity cannot be negative"),
      rate: I().required("Quantity is required").positive("Quantity cannot be negative")
    })
  )
});
j().shape({
  companyName: c().required("Company name is required"),
  debitCreditTo: c().required("Name required for debit / credit to."),
  payReceivedFrom: c().required("Name required for pay / received from"),
  location: c().required("Location is required"),
  driverName: c().required("Driver name is required").matches(q.IS_STRING, "Name should only contain alphabets"),
  contactNo: c().required("Contact number is required").matches(q.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: c().nullable().matches(q.CONTACT_NO, "Please enter valid contact number."),
  vehicleNo: c().required("Vehicle number is required"),
  dispatchLocation: c().required("Dispatch location is required"),
  destinationLocation: c().required("Destination location is required"),
  paymentMode: c().required("Payment mode is required"),
  totalAmt: I().required("Total amount is required.").min(0, "Amount cannot be negative."),
  receiverName: c().required("Receiver name is required").matches(q.IS_STRING, "Name should only contain alphabets")
});
const hc = j().shape({
  companyName: c().required("Company name is required"),
  driverName: c().required("Driver name is required").matches(q.IS_STRING, "Name should only contain alphabets."),
  contactNo: c().required("Driver contact number is required.").matches(q.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: c().nullable().matches(q.CONTACT_NO, "Please enter valid contact number."),
  vehicleNo: c().required("Vehicle number is required").matches(q.IS_VEHICLE_NO, "Please enter valid vehicle number."),
  receiverName: c().required("Receiver name is required").matches(q.IS_STRING, "Name should only contain alphabets."),
  rmn: c().required("RM name is required").matches(q.IS_STRING, "Name should only contain alphabets."),
  items: Ie().of(
    j().shape({
      productName: c().required("Product name is required"),
      uom: c().required("UOM is required"),
      quantity: I().required("Quantity is required").positive("Quantity cannot be negative"),
      unitPrice: I().required("Unit price is required").positive("Price cannot be negative"),
      grossWeight: I().required("Gross weight is required").positive("Weight cannot be negative"),
      packingMaterialWeight: I().required("Packing material weight is required").positive("Weight cannot be negative")
    })
  ),
  anyAttachment: Ae().nullable().test("fileFormat", "Invalid image format (only jpg, jpeg, png allowed)", (t) => {
    if (!t) return !0;
    const e = t;
    return ["image/jpeg", "image/png", "image/jpg"].includes(e.type);
  }).test("fileSize", "Image is too large (max 1MB)", (t) => {
    if (!t) return !0;
    const e = t, r = 1 * 1024 * 1024;
    return e.size <= r;
  })
});
hc.shape({
  customerName: c().required("Name is required"),
  fromLocation: c().required("Location is required")
});
hc.shape({
  stockTransferType: c().required("Type of stock transfer is required"),
  fromLocation: c().required("Location is required"),
  toLocation: c().required("Location is required")
});
j().shape({
  paymentDate: dt().required("Payment Date is required"),
  partyName: c().required("Party Name is required"),
  amount: I().required("Amount is required").positive("Amount must be positive"),
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
Va.withTypes();
const Mr = {
  black: "#000",
  white: "#fff"
}, nr = {
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
}, ir = {
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
}, sr = {
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
}, or = {
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
}, ar = {
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
}, Or = {
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
function It(t) {
  let e = "https://mui.com/production-error/?code=" + t;
  for (let r = 1; r < arguments.length; r += 1)
    e += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + t + "; visit " + e + " for the full message.";
}
var ns = { exports: {} }, ln = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa;
function mm() {
  if (aa) return ue;
  aa = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, p = t ? Symbol.for("react.suspense") : 60113, m = t ? Symbol.for("react.suspense_list") : 60120, b = t ? Symbol.for("react.memo") : 60115, C = t ? Symbol.for("react.lazy") : 60116, w = t ? Symbol.for("react.block") : 60121, E = t ? Symbol.for("react.fundamental") : 60117, A = t ? Symbol.for("react.responder") : 60118, M = t ? Symbol.for("react.scope") : 60119;
  function _(v) {
    if (typeof v == "object" && v !== null) {
      var k = v.$$typeof;
      switch (k) {
        case e:
          switch (v = v.type, v) {
            case l:
            case h:
            case n:
            case s:
            case i:
            case p:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case f:
                case C:
                case b:
                case o:
                  return v;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function R(v) {
    return _(v) === h;
  }
  return ue.AsyncMode = l, ue.ConcurrentMode = h, ue.ContextConsumer = a, ue.ContextProvider = o, ue.Element = e, ue.ForwardRef = f, ue.Fragment = n, ue.Lazy = C, ue.Memo = b, ue.Portal = r, ue.Profiler = s, ue.StrictMode = i, ue.Suspense = p, ue.isAsyncMode = function(v) {
    return R(v) || _(v) === l;
  }, ue.isConcurrentMode = R, ue.isContextConsumer = function(v) {
    return _(v) === a;
  }, ue.isContextProvider = function(v) {
    return _(v) === o;
  }, ue.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, ue.isForwardRef = function(v) {
    return _(v) === f;
  }, ue.isFragment = function(v) {
    return _(v) === n;
  }, ue.isLazy = function(v) {
    return _(v) === C;
  }, ue.isMemo = function(v) {
    return _(v) === b;
  }, ue.isPortal = function(v) {
    return _(v) === r;
  }, ue.isProfiler = function(v) {
    return _(v) === s;
  }, ue.isStrictMode = function(v) {
    return _(v) === i;
  }, ue.isSuspense = function(v) {
    return _(v) === p;
  }, ue.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === h || v === s || v === i || v === p || v === m || typeof v == "object" && v !== null && (v.$$typeof === C || v.$$typeof === b || v.$$typeof === o || v.$$typeof === a || v.$$typeof === f || v.$$typeof === E || v.$$typeof === A || v.$$typeof === M || v.$$typeof === w);
  }, ue.typeOf = _, ue;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua;
function ym() {
  return ua || (ua = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, p = t ? Symbol.for("react.suspense") : 60113, m = t ? Symbol.for("react.suspense_list") : 60120, b = t ? Symbol.for("react.memo") : 60115, C = t ? Symbol.for("react.lazy") : 60116, w = t ? Symbol.for("react.block") : 60121, E = t ? Symbol.for("react.fundamental") : 60117, A = t ? Symbol.for("react.responder") : 60118, M = t ? Symbol.for("react.scope") : 60119;
    function _(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === n || B === h || B === s || B === i || B === p || B === m || typeof B == "object" && B !== null && (B.$$typeof === C || B.$$typeof === b || B.$$typeof === o || B.$$typeof === a || B.$$typeof === f || B.$$typeof === E || B.$$typeof === A || B.$$typeof === M || B.$$typeof === w);
    }
    function R(B) {
      if (typeof B == "object" && B !== null) {
        var $e = B.$$typeof;
        switch ($e) {
          case e:
            var Jt = B.type;
            switch (Jt) {
              case l:
              case h:
              case n:
              case s:
              case i:
              case p:
                return Jt;
              default:
                var Gr = Jt && Jt.$$typeof;
                switch (Gr) {
                  case a:
                  case f:
                  case C:
                  case b:
                  case o:
                    return Gr;
                  default:
                    return $e;
                }
            }
          case r:
            return $e;
        }
      }
    }
    var v = l, k = h, X = a, Y = o, d = e, $ = f, V = n, te = C, Ce = b, ge = r, we = s, be = i, K = p, He = !1;
    function Et(B) {
      return He || (He = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(B) || R(B) === l;
    }
    function x(B) {
      return R(B) === h;
    }
    function g(B) {
      return R(B) === a;
    }
    function T(B) {
      return R(B) === o;
    }
    function L(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function F(B) {
      return R(B) === f;
    }
    function U(B) {
      return R(B) === n;
    }
    function G(B) {
      return R(B) === C;
    }
    function W(B) {
      return R(B) === b;
    }
    function H(B) {
      return R(B) === r;
    }
    function Q(B) {
      return R(B) === s;
    }
    function Z(B) {
      return R(B) === i;
    }
    function xe(B) {
      return R(B) === p;
    }
    ce.AsyncMode = v, ce.ConcurrentMode = k, ce.ContextConsumer = X, ce.ContextProvider = Y, ce.Element = d, ce.ForwardRef = $, ce.Fragment = V, ce.Lazy = te, ce.Memo = Ce, ce.Portal = ge, ce.Profiler = we, ce.StrictMode = be, ce.Suspense = K, ce.isAsyncMode = Et, ce.isConcurrentMode = x, ce.isContextConsumer = g, ce.isContextProvider = T, ce.isElement = L, ce.isForwardRef = F, ce.isFragment = U, ce.isLazy = G, ce.isMemo = W, ce.isPortal = H, ce.isProfiler = Q, ce.isStrictMode = Z, ce.isSuspense = xe, ce.isValidElementType = _, ce.typeOf = R;
  }()), ce;
}
var ca;
function pc() {
  return ca || (ca = 1, process.env.NODE_ENV === "production" ? ln.exports = mm() : ln.exports = ym()), ln.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Oi, la;
function gm() {
  if (la) return Oi;
  la = 1;
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
  return Oi = i() ? Object.assign : function(s, o) {
    for (var a, l = n(s), h, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var p in a)
        e.call(a, p) && (l[p] = a[p]);
      if (t) {
        h = t(a);
        for (var m = 0; m < h.length; m++)
          r.call(a, h[m]) && (l[h[m]] = a[h[m]]);
      }
    }
    return l;
  }, Oi;
}
var Ni, da;
function Es() {
  if (da) return Ni;
  da = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ni = t, Ni;
}
var Ti, fa;
function mc() {
  return fa || (fa = 1, Ti = Function.call.bind(Object.prototype.hasOwnProperty)), Ti;
}
var qi, ha;
function bm() {
  if (ha) return qi;
  ha = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Es(), r = {}, n = mc();
    t = function(s) {
      var o = "Warning: " + s;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(s, o, a, l, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in s)
        if (n(s, f)) {
          var p;
          try {
            if (typeof s[f] != "function") {
              var m = Error(
                (l || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = s[f](o, f, l, a, null, e);
          } catch (C) {
            p = C;
          }
          if (p && !(p instanceof Error) && t(
            (l || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var b = h ? h() : "";
            t(
              "Failed " + a + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, qi = i, qi;
}
var Ri, pa;
function vm() {
  if (pa) return Ri;
  pa = 1;
  var t = pc(), e = gm(), r = Es(), n = mc(), i = bm(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var l = "Warning: " + a;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Ri = function(a, l) {
    var h = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(x) {
      var g = x && (h && x[h] || x[f]);
      if (typeof g == "function")
        return g;
    }
    var m = "<<anonymous>>", b = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: M(),
      arrayOf: _,
      element: R(),
      elementType: v(),
      instanceOf: k,
      node: $(),
      objectOf: Y,
      oneOf: X,
      oneOfType: d,
      shape: te,
      exact: Ce
    };
    function C(x, g) {
      return x === g ? x !== 0 || 1 / x === 1 / g : x !== x && g !== g;
    }
    function w(x, g) {
      this.message = x, this.data = g && typeof g == "object" ? g : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function E(x) {
      if (process.env.NODE_ENV !== "production")
        var g = {}, T = 0;
      function L(U, G, W, H, Q, Z, xe) {
        if (H = H || m, Z = Z || W, xe !== r) {
          if (l) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var $e = H + ":" + W;
            !g[$e] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), g[$e] = !0, T++);
          }
        }
        return G[W] == null ? U ? G[W] === null ? new w("The " + Q + " `" + Z + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new w("The " + Q + " `" + Z + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : x(G, W, H, Q, Z);
      }
      var F = L.bind(null, !1);
      return F.isRequired = L.bind(null, !0), F;
    }
    function A(x) {
      function g(T, L, F, U, G, W) {
        var H = T[L], Q = be(H);
        if (Q !== x) {
          var Z = K(H);
          return new w(
            "Invalid " + U + " `" + G + "` of type " + ("`" + Z + "` supplied to `" + F + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return E(g);
    }
    function M() {
      return E(o);
    }
    function _(x) {
      function g(T, L, F, U, G) {
        if (typeof x != "function")
          return new w("Property `" + G + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var W = T[L];
        if (!Array.isArray(W)) {
          var H = be(W);
          return new w("Invalid " + U + " `" + G + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected an array."));
        }
        for (var Q = 0; Q < W.length; Q++) {
          var Z = x(W, Q, F, U, G + "[" + Q + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return E(g);
    }
    function R() {
      function x(g, T, L, F, U) {
        var G = g[T];
        if (!a(G)) {
          var W = be(G);
          return new w("Invalid " + F + " `" + U + "` of type " + ("`" + W + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(x);
    }
    function v() {
      function x(g, T, L, F, U) {
        var G = g[T];
        if (!t.isValidElementType(G)) {
          var W = be(G);
          return new w("Invalid " + F + " `" + U + "` of type " + ("`" + W + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(x);
    }
    function k(x) {
      function g(T, L, F, U, G) {
        if (!(T[L] instanceof x)) {
          var W = x.name || m, H = Et(T[L]);
          return new w("Invalid " + U + " `" + G + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return E(g);
    }
    function X(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), o;
      function g(T, L, F, U, G) {
        for (var W = T[L], H = 0; H < x.length; H++)
          if (C(W, x[H]))
            return null;
        var Q = JSON.stringify(x, function(xe, B) {
          var $e = K(B);
          return $e === "symbol" ? String(B) : B;
        });
        return new w("Invalid " + U + " `" + G + "` of value `" + String(W) + "` " + ("supplied to `" + F + "`, expected one of " + Q + "."));
      }
      return E(g);
    }
    function Y(x) {
      function g(T, L, F, U, G) {
        if (typeof x != "function")
          return new w("Property `" + G + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var W = T[L], H = be(W);
        if (H !== "object")
          return new w("Invalid " + U + " `" + G + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected an object."));
        for (var Q in W)
          if (n(W, Q)) {
            var Z = x(W, Q, F, U, G + "." + Q, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return E(g);
    }
    function d(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var g = 0; g < x.length; g++) {
        var T = x[g];
        if (typeof T != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + He(T) + " at index " + g + "."
          ), o;
      }
      function L(F, U, G, W, H) {
        for (var Q = [], Z = 0; Z < x.length; Z++) {
          var xe = x[Z], B = xe(F, U, G, W, H, r);
          if (B == null)
            return null;
          B.data && n(B.data, "expectedType") && Q.push(B.data.expectedType);
        }
        var $e = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new w("Invalid " + W + " `" + H + "` supplied to " + ("`" + G + "`" + $e + "."));
      }
      return E(L);
    }
    function $() {
      function x(g, T, L, F, U) {
        return ge(g[T]) ? null : new w("Invalid " + F + " `" + U + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return E(x);
    }
    function V(x, g, T, L, F) {
      return new w(
        (x || "React class") + ": " + g + " type `" + T + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function te(x) {
      function g(T, L, F, U, G) {
        var W = T[L], H = be(W);
        if (H !== "object")
          return new w("Invalid " + U + " `" + G + "` of type `" + H + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var Q in x) {
          var Z = x[Q];
          if (typeof Z != "function")
            return V(F, U, G, Q, K(Z));
          var xe = Z(W, Q, F, U, G + "." + Q, r);
          if (xe)
            return xe;
        }
        return null;
      }
      return E(g);
    }
    function Ce(x) {
      function g(T, L, F, U, G) {
        var W = T[L], H = be(W);
        if (H !== "object")
          return new w("Invalid " + U + " `" + G + "` of type `" + H + "` " + ("supplied to `" + F + "`, expected `object`."));
        var Q = e({}, T[L], x);
        for (var Z in Q) {
          var xe = x[Z];
          if (n(x, Z) && typeof xe != "function")
            return V(F, U, G, Z, K(xe));
          if (!xe)
            return new w(
              "Invalid " + U + " `" + G + "` key `" + Z + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(T[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var B = xe(W, Z, F, U, G + "." + Z, r);
          if (B)
            return B;
        }
        return null;
      }
      return E(g);
    }
    function ge(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(ge);
          if (x === null || a(x))
            return !0;
          var g = p(x);
          if (g) {
            var T = g.call(x), L;
            if (g !== x.entries) {
              for (; !(L = T.next()).done; )
                if (!ge(L.value))
                  return !1;
            } else
              for (; !(L = T.next()).done; ) {
                var F = L.value;
                if (F && !ge(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function we(x, g) {
      return x === "symbol" ? !0 : g ? g["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && g instanceof Symbol : !1;
    }
    function be(x) {
      var g = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : we(g, x) ? "symbol" : g;
    }
    function K(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var g = be(x);
      if (g === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return g;
    }
    function He(x) {
      var g = K(x);
      switch (g) {
        case "array":
        case "object":
          return "an " + g;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + g;
        default:
          return g;
      }
    }
    function Et(x) {
      return !x.constructor || !x.constructor.name ? m : x.constructor.name;
    }
    return b.checkPropTypes = i, b.resetWarningCache = i.resetWarningCache, b.PropTypes = b, b;
  }, Ri;
}
var Pi, ma;
function wm() {
  if (ma) return Pi;
  ma = 1;
  var t = Es();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, Pi = function() {
    function n(o, a, l, h, f, p) {
      if (p !== t) {
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
      resetWarningCache: e
    };
    return s.PropTypes = s, s;
  }, Pi;
}
if (process.env.NODE_ENV !== "production") {
  var Sm = pc(), _m = !0;
  ns.exports = vm()(Sm.isElement, _m);
} else
  ns.exports = wm()();
var Em = ns.exports;
const Nr = /* @__PURE__ */ as(Em);
function Tt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function yc(t) {
  if (!Tt(t))
    return t;
  const e = {};
  return Object.keys(t).forEach((r) => {
    e[r] = yc(t[r]);
  }), e;
}
function Ge(t, e, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...t
  } : t;
  return Tt(t) && Tt(e) && Object.keys(e).forEach((i) => {
    Tt(e[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(t, i) && Tt(t[i]) ? n[i] = Ge(t[i], e[i], r) : r.clone ? n[i] = Tt(e[i]) ? yc(e[i]) : e[i] : n[i] = e[i];
  }), n;
}
const Cm = (t) => {
  const e = Object.keys(t).map((r) => ({
    key: r,
    val: t[r]
  })) || [];
  return e.sort((r, n) => r.val - n.val), e.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Om(t) {
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
  } = t, s = Cm(e), o = Object.keys(s);
  function a(m) {
    return `@media (min-width:${typeof e[m] == "number" ? e[m] : m}${r})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof e[m] == "number" ? e[m] : m) - n / 100}${r})`;
  }
  function h(m, b) {
    const C = o.indexOf(b);
    return `@media (min-width:${typeof e[m] == "number" ? e[m] : m}${r}) and (max-width:${(C !== -1 && typeof e[o[C]] == "number" ? e[o[C]] : b) - n / 100}${r})`;
  }
  function f(m) {
    return o.indexOf(m) + 1 < o.length ? h(m, o[o.indexOf(m) + 1]) : a(m);
  }
  function p(m) {
    const b = o.indexOf(m);
    return b === 0 ? a(o[1]) : b === o.length - 1 ? l(o[b]) : h(m, o[o.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: o,
    values: s,
    up: a,
    down: l,
    between: h,
    only: f,
    not: p,
    unit: r,
    ...i
  };
}
function Nm(t, e) {
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
function qm(t, e) {
  const r = e.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${e})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : It(18, `(${e})`));
    return null;
  }
  const [, n, i] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return t.containerQueries(i).up(s);
}
function Rm(t) {
  const e = (s, o) => s.replace("@media", o ? `@container ${o}` : "@container");
  function r(s, o) {
    s.up = (...a) => e(t.breakpoints.up(...a), o), s.down = (...a) => e(t.breakpoints.down(...a), o), s.between = (...a) => e(t.breakpoints.between(...a), o), s.only = (...a) => e(t.breakpoints.only(...a), o), s.not = (...a) => {
      const l = e(t.breakpoints.not(...a), o);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, i = (s) => (r(n, s), n);
  return r(i), {
    ...t,
    containerQueries: i
  };
}
const Pm = {
  borderRadius: 4
}, Ft = process.env.NODE_ENV !== "production" ? Nr.oneOfType([Nr.number, Nr.string, Nr.object, Nr.array]) : {};
function xr(t, e) {
  return e ? Ge(t, e, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : t;
}
const Vn = {
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
}, ya = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (t) => `@media (min-width:${Vn[t]}px)`
}, Am = {
  containerQueries: (t) => ({
    up: (e) => {
      let r = typeof e == "number" ? e : Vn[e] || e;
      return typeof r == "number" && (r = `${r}px`), t ? `@container ${t} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function _t(t, e, r) {
  const n = t.theme || {};
  if (Array.isArray(e)) {
    const s = n.breakpoints || ya;
    return e.reduce((o, a, l) => (o[s.up(s.keys[l])] = r(e[l]), o), {});
  }
  if (typeof e == "object") {
    const s = n.breakpoints || ya;
    return Object.keys(e).reduce((o, a) => {
      if (Tm(s.keys, a)) {
        const l = qm(n.containerQueries ? n : Am, a);
        l && (o[l] = r(e[a], a));
      } else if (Object.keys(s.values || Vn).includes(a)) {
        const l = s.up(a);
        o[l] = r(e[a], a);
      } else {
        const l = a;
        o[l] = e[l];
      }
      return o;
    }, {});
  }
  return r(e);
}
function xm(t = {}) {
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
function gc(t) {
  if (typeof t != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : It(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Un(t, e, r = !0) {
  if (!e || typeof e != "string")
    return null;
  if (t && t.vars && r) {
    const n = `vars.${e}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, t);
    if (n != null)
      return n;
  }
  return e.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, t);
}
function qn(t, e, r, n = r) {
  let i;
  return typeof t == "function" ? i = t(r) : Array.isArray(t) ? i = t[r] || n : i = Un(t, r) || n, e && (i = e(i, n, t)), i;
}
function Ne(t) {
  const {
    prop: e,
    cssProperty: r = t.prop,
    themeKey: n,
    transform: i
  } = t, s = (o) => {
    if (o[e] == null)
      return null;
    const a = o[e], l = o.theme, h = Un(l, n) || {};
    return _t(o, a, (p) => {
      let m = qn(h, i, p);
      return p === m && typeof p == "string" && (m = qn(h, i, `${e}${p === "default" ? "" : gc(p)}`, p)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [e]: Ft
  } : {}, s.filterProps = [e], s;
}
function Dm(t) {
  const e = {};
  return (r) => (e[r] === void 0 && (e[r] = t(r)), e[r]);
}
const Im = {
  m: "margin",
  p: "padding"
}, $m = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ga = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Fm = Dm((t) => {
  if (t.length > 2)
    if (ga[t])
      t = ga[t];
    else
      return [t];
  const [e, r] = t.split(""), n = Im[e], i = $m[r] || "";
  return Array.isArray(i) ? i.map((s) => n + s) : [n + i];
}), zn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Gn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Mm = [...zn, ...Gn];
function Ur(t, e, r, n) {
  const i = Un(t, e, !0) ?? r;
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
function Cs(t) {
  return Ur(t, "spacing", 8, "spacing");
}
function zr(t, e) {
  return typeof e == "string" || e == null ? e : t(e);
}
function Lm(t, e) {
  return (r) => t.reduce((n, i) => (n[i] = zr(e, r), n), {});
}
function jm(t, e, r, n) {
  if (!e.includes(r))
    return null;
  const i = Fm(r), s = Lm(i, n), o = t[r];
  return _t(t, o, s);
}
function bc(t, e) {
  const r = Cs(t.theme);
  return Object.keys(t).map((n) => jm(t, e, n, r)).reduce(xr, {});
}
function Se(t) {
  return bc(t, zn);
}
Se.propTypes = process.env.NODE_ENV !== "production" ? zn.reduce((t, e) => (t[e] = Ft, t), {}) : {};
Se.filterProps = zn;
function _e(t) {
  return bc(t, Gn);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? Gn.reduce((t, e) => (t[e] = Ft, t), {}) : {};
_e.filterProps = Gn;
process.env.NODE_ENV !== "production" && Mm.reduce((t, e) => (t[e] = Ft, t), {});
function vc(t = 8, e = Cs({
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
function Wn(...t) {
  const e = t.reduce((n, i) => (i.filterProps.forEach((s) => {
    n[s] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, s) => e[s] ? xr(i, e[s](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? t.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = t.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function Xe(t) {
  return typeof t != "number" ? t : `${t}px solid`;
}
function Je(t, e) {
  return Ne({
    prop: t,
    themeKey: "borders",
    transform: e
  });
}
const Bm = Je("border", Xe), Vm = Je("borderTop", Xe), Um = Je("borderRight", Xe), zm = Je("borderBottom", Xe), Gm = Je("borderLeft", Xe), Wm = Je("borderColor"), Km = Je("borderTopColor"), Hm = Je("borderRightColor"), Qm = Je("borderBottomColor"), Ym = Je("borderLeftColor"), Xm = Je("outline", Xe), Jm = Je("outlineColor"), Kn = (t) => {
  if (t.borderRadius !== void 0 && t.borderRadius !== null) {
    const e = Ur(t.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: zr(e, n)
    });
    return _t(t, t.borderRadius, r);
  }
  return null;
};
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ft
} : {};
Kn.filterProps = ["borderRadius"];
Wn(Bm, Vm, Um, zm, Gm, Wm, Km, Hm, Qm, Ym, Kn, Xm, Jm);
const Hn = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const e = Ur(t.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: zr(e, n)
    });
    return _t(t, t.gap, r);
  }
  return null;
};
Hn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ft
} : {};
Hn.filterProps = ["gap"];
const Qn = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const e = Ur(t.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: zr(e, n)
    });
    return _t(t, t.columnGap, r);
  }
  return null;
};
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ft
} : {};
Qn.filterProps = ["columnGap"];
const Yn = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const e = Ur(t.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: zr(e, n)
    });
    return _t(t, t.rowGap, r);
  }
  return null;
};
Yn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ft
} : {};
Yn.filterProps = ["rowGap"];
const Zm = Ne({
  prop: "gridColumn"
}), ey = Ne({
  prop: "gridRow"
}), ty = Ne({
  prop: "gridAutoFlow"
}), ry = Ne({
  prop: "gridAutoColumns"
}), ny = Ne({
  prop: "gridAutoRows"
}), iy = Ne({
  prop: "gridTemplateColumns"
}), sy = Ne({
  prop: "gridTemplateRows"
}), oy = Ne({
  prop: "gridTemplateAreas"
}), ay = Ne({
  prop: "gridArea"
});
Wn(Hn, Qn, Yn, Zm, ey, ty, ry, ny, iy, sy, oy, ay);
function cr(t, e) {
  return e === "grey" ? e : t;
}
const uy = Ne({
  prop: "color",
  themeKey: "palette",
  transform: cr
}), cy = Ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: cr
}), ly = Ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: cr
});
Wn(uy, cy, ly);
function ze(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const dy = Ne({
  prop: "width",
  transform: ze
}), Os = (t) => {
  if (t.maxWidth !== void 0 && t.maxWidth !== null) {
    const e = (r) => {
      var i, s, o, a, l;
      const n = ((o = (s = (i = t.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : s.values) == null ? void 0 : o[r]) || Vn[r];
      return n ? ((l = (a = t.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${t.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ze(r)
      };
    };
    return _t(t, t.maxWidth, e);
  }
  return null;
};
Os.filterProps = ["maxWidth"];
const fy = Ne({
  prop: "minWidth",
  transform: ze
}), hy = Ne({
  prop: "height",
  transform: ze
}), py = Ne({
  prop: "maxHeight",
  transform: ze
}), my = Ne({
  prop: "minHeight",
  transform: ze
});
Ne({
  prop: "size",
  cssProperty: "width",
  transform: ze
});
Ne({
  prop: "size",
  cssProperty: "height",
  transform: ze
});
const yy = Ne({
  prop: "boxSizing"
});
Wn(dy, Os, fy, hy, py, my, yy);
const Xn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Xe
  },
  borderTop: {
    themeKey: "borders",
    transform: Xe
  },
  borderRight: {
    themeKey: "borders",
    transform: Xe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Xe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Xe
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
    transform: Xe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Kn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: cr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: cr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: cr
  },
  // spacing
  p: {
    style: _e
  },
  pt: {
    style: _e
  },
  pr: {
    style: _e
  },
  pb: {
    style: _e
  },
  pl: {
    style: _e
  },
  px: {
    style: _e
  },
  py: {
    style: _e
  },
  padding: {
    style: _e
  },
  paddingTop: {
    style: _e
  },
  paddingRight: {
    style: _e
  },
  paddingBottom: {
    style: _e
  },
  paddingLeft: {
    style: _e
  },
  paddingX: {
    style: _e
  },
  paddingY: {
    style: _e
  },
  paddingInline: {
    style: _e
  },
  paddingInlineStart: {
    style: _e
  },
  paddingInlineEnd: {
    style: _e
  },
  paddingBlock: {
    style: _e
  },
  paddingBlockStart: {
    style: _e
  },
  paddingBlockEnd: {
    style: _e
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
    style: Hn
  },
  rowGap: {
    style: Yn
  },
  columnGap: {
    style: Qn
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
    transform: ze
  },
  maxWidth: {
    style: Os
  },
  minWidth: {
    transform: ze
  },
  height: {
    transform: ze
  },
  maxHeight: {
    transform: ze
  },
  minHeight: {
    transform: ze
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
function gy(...t) {
  const e = t.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(e);
  return t.every((n) => r.size === Object.keys(n).length);
}
function by(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function vy() {
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
      cssProperty: l = r,
      themeKey: h,
      transform: f,
      style: p
    } = a;
    if (n == null)
      return null;
    if (h === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = Un(i, h) || {};
    return p ? p(o) : _t(o, n, (C) => {
      let w = qn(m, f, C);
      return C === w && typeof C == "string" && (w = qn(m, f, `${r}${C === "default" ? "" : gc(C)}`, C)), l === !1 ? w : {
        [l]: w
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
    const s = i.unstable_sxConfig ?? Xn;
    function o(a) {
      let l = a;
      if (typeof a == "function")
        l = a(i);
      else if (typeof a != "object")
        return a;
      if (!l)
        return null;
      const h = xm(i.breakpoints), f = Object.keys(h);
      let p = h;
      return Object.keys(l).forEach((m) => {
        const b = by(l[m], i);
        if (b != null)
          if (typeof b == "object")
            if (s[m])
              p = xr(p, t(m, b, i, s));
            else {
              const C = _t({
                theme: i
              }, b, (w) => ({
                [m]: w
              }));
              gy(C, b) ? p[m] = e({
                sx: b,
                theme: i
              }) : p = xr(p, C);
            }
          else
            p = xr(p, t(m, b, i, s));
      }), Nm(i, km(f, p));
    }
    return Array.isArray(n) ? n.map(o) : o(n);
  }
  return e;
}
const Jn = vy();
Jn.filterProps = ["sx"];
function wy(t, e) {
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
function Sy(t = {}, ...e) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: s = {},
    ...o
  } = t, a = Om(r), l = vc(i);
  let h = Ge({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...Pm,
      ...s
    }
  }, o);
  return h = Rm(h), h.applyStyles = wy, h = e.reduce((f, p) => Ge(f, p), h), h.unstable_sxConfig = {
    ...Xn,
    ...o == null ? void 0 : o.unstable_sxConfig
  }, h.unstable_sx = function(p) {
    return Jn({
      sx: p,
      theme: this
    });
  }, h;
}
const ba = (t) => t, _y = () => {
  let t = ba;
  return {
    configure(e) {
      t = e;
    },
    generate(e) {
      return t(e);
    },
    reset() {
      t = ba;
    }
  };
}, Ey = _y(), Cy = {
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
function Oy(t, e, r = "Mui") {
  const n = Cy[e];
  return n ? `${r}-${n}` : `${Ey.generate(t)}-${e}`;
}
function Ny(t, e = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(e, Math.min(t, r));
}
function Ns(t, e = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (t < e || t > r) && console.error(`MUI: The value provided ${t} is out of range [${e}, ${r}].`), Ny(t, e, r);
}
function Ty(t) {
  t = t.slice(1);
  const e = new RegExp(`.{1,${t.length >= 6 ? 2 : 1}}`, "g");
  let r = t.match(e);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function $t(t) {
  if (t.type)
    return t;
  if (t.charAt(0) === "#")
    return $t(Ty(t));
  const e = t.indexOf("("), r = t.substring(0, e);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${t}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : It(9, t));
  let n = t.substring(e + 1, t.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : It(10, i));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const qy = (t) => {
  const e = $t(t);
  return e.values.slice(0, 3).map((r, n) => e.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Pr = (t, e) => {
  try {
    return qy(t);
  } catch {
    return e && process.env.NODE_ENV !== "production" && console.warn(e), t;
  }
};
function Zn(t) {
  const {
    type: e,
    colorSpace: r
  } = t;
  let {
    values: n
  } = t;
  return e.includes("rgb") ? n = n.map((i, s) => s < 3 ? parseInt(i, 10) : i) : e.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), e.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${e}(${n})`;
}
function wc(t) {
  t = $t(t);
  const {
    values: e
  } = t, r = e[0], n = e[1] / 100, i = e[2] / 100, s = n * Math.min(i, 1 - i), o = (h, f = (h + r / 30) % 12) => i - s * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const l = [Math.round(o(0) * 255), Math.round(o(8) * 255), Math.round(o(4) * 255)];
  return t.type === "hsla" && (a += "a", l.push(e[3])), Zn({
    type: a,
    values: l
  });
}
function is(t) {
  t = $t(t);
  let e = t.type === "hsl" || t.type === "hsla" ? $t(wc(t)).values : t.values;
  return e = e.map((r) => (t.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
}
function va(t, e) {
  const r = is(t), n = is(e);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ry(t, e) {
  return t = $t(t), e = Ns(e), (t.type === "rgb" || t.type === "hsl") && (t.type += "a"), t.type === "color" ? t.values[3] = `/${e}` : t.values[3] = e, Zn(t);
}
function dn(t, e, r) {
  try {
    return Ry(t, e);
  } catch {
    return t;
  }
}
function Ts(t, e) {
  if (t = $t(t), e = Ns(e), t.type.includes("hsl"))
    t.values[2] *= 1 - e;
  else if (t.type.includes("rgb") || t.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      t.values[r] *= 1 - e;
  return Zn(t);
}
function de(t, e, r) {
  try {
    return Ts(t, e);
  } catch {
    return t;
  }
}
function qs(t, e) {
  if (t = $t(t), e = Ns(e), t.type.includes("hsl"))
    t.values[2] += (100 - t.values[2]) * e;
  else if (t.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      t.values[r] += (255 - t.values[r]) * e;
  else if (t.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      t.values[r] += (1 - t.values[r]) * e;
  return Zn(t);
}
function fe(t, e, r) {
  try {
    return qs(t, e);
  } catch {
    return t;
  }
}
function Py(t, e = 0.15) {
  return is(t) > 0.5 ? Ts(t, e) : qs(t, e);
}
function fn(t, e, r) {
  try {
    return Py(t, e);
  } catch {
    return t;
  }
}
function Ay(t = "") {
  function e(...n) {
    if (!n.length)
      return "";
    const i = n[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${t ? `${t}-` : ""}${i}${e(...n.slice(1))})` : `, ${i}`;
  }
  return (n, ...i) => `var(--${t ? `${t}-` : ""}${n}${e(...i)})`;
}
const wa = (t, e, r, n = []) => {
  let i = t;
  e.forEach((s, o) => {
    o === e.length - 1 ? Array.isArray(i) ? i[Number(s)] = r : i && typeof i == "object" && (i[s] = r) : i && typeof i == "object" && (i[s] || (i[s] = n.includes(s) ? [] : {}), i = i[s]);
  });
}, xy = (t, e, r) => {
  function n(i, s = [], o = []) {
    Object.entries(i).forEach(([a, l]) => {
      (!r || r && !r([...s, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...s, a], Array.isArray(l) ? [...o, a] : o) : e([...s, a], l, o));
    });
  }
  n(t);
}, ky = (t, e) => typeof e == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => t.includes(n)) || t[t.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
function Ai(t, e) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = e || {}, i = {}, s = {}, o = {};
  return xy(
    t,
    (a, l, h) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(a, l))) {
        const f = `--${r ? `${r}-` : ""}${a.join("-")}`, p = ky(a, l);
        Object.assign(i, {
          [f]: p
        }), wa(s, a, `var(${f})`, h), wa(o, a, `var(${f}, ${p})`, h);
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
function Dy(t, e = {}) {
  const {
    getSelector: r = E,
    disableCssColorScheme: n,
    colorSchemeSelector: i
  } = e, {
    colorSchemes: s = {},
    components: o,
    defaultColorScheme: a = "light",
    ...l
  } = t, {
    vars: h,
    css: f,
    varsWithDefaults: p
  } = Ai(l, e);
  let m = p;
  const b = {}, {
    [a]: C,
    ...w
  } = s;
  if (Object.entries(w || {}).forEach(([_, R]) => {
    const {
      vars: v,
      css: k,
      varsWithDefaults: X
    } = Ai(R, e);
    m = Ge(m, X), b[_] = {
      css: k,
      vars: v
    };
  }), C) {
    const {
      css: _,
      vars: R,
      varsWithDefaults: v
    } = Ai(C, e);
    m = Ge(m, v), b[a] = {
      css: _,
      vars: R
    };
  }
  function E(_, R) {
    var k, X;
    let v = i;
    if (i === "class" && (v = ".%s"), i === "data" && (v = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (v = `[${i}="%s"]`), _) {
      if (v === "media")
        return t.defaultColorScheme === _ ? ":root" : {
          [`@media (prefers-color-scheme: ${((X = (k = s[_]) == null ? void 0 : k.palette) == null ? void 0 : X.mode) || _})`]: {
            ":root": R
          }
        };
      if (v)
        return t.defaultColorScheme === _ ? `:root, ${v.replace("%s", String(_))}` : v.replace("%s", String(_));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let _ = {
        ...h
      };
      return Object.entries(b).forEach(([, {
        vars: R
      }]) => {
        _ = Ge(_, R);
      }), _;
    },
    generateStyleSheets: () => {
      var Y, d;
      const _ = [], R = t.defaultColorScheme || "light";
      function v($, V) {
        Object.keys(V).length && _.push(typeof $ == "string" ? {
          [$]: {
            ...V
          }
        } : $);
      }
      v(r(void 0, {
        ...f
      }), f);
      const {
        [R]: k,
        ...X
      } = b;
      if (k) {
        const {
          css: $
        } = k, V = (d = (Y = s[R]) == null ? void 0 : Y.palette) == null ? void 0 : d.mode, te = !n && V ? {
          colorScheme: V,
          ...$
        } : {
          ...$
        };
        v(r(R, {
          ...te
        }), te);
      }
      return Object.entries(X).forEach(([$, {
        css: V
      }]) => {
        var ge, we;
        const te = (we = (ge = s[$]) == null ? void 0 : ge.palette) == null ? void 0 : we.mode, Ce = !n && te ? {
          colorScheme: te,
          ...V
        } : {
          ...V
        };
        v(r($, {
          ...Ce
        }), Ce);
      }), _;
    }
  };
}
function Iy(t) {
  return function(r) {
    return t === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : t ? t.startsWith("data-") && !t.includes("%s") ? `[${t}="${r}"] &` : t === "class" ? `.${r} &` : t === "data" ? `[data-${r}] &` : `${t.replace("%s", r)} &` : "&";
  };
}
const Sa = {
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
    paper: Mr.white,
    default: Mr.white
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
}, xi = {
  text: {
    primary: Mr.white,
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
    active: Mr.white,
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
function _a(t, e, r, n) {
  const i = n.light || n, s = n.dark || n * 1.5;
  t[e] || (t.hasOwnProperty(r) ? t[e] = t[r] : e === "light" ? t.light = qs(t.main, i) : e === "dark" && (t.dark = Ts(t.main, s)));
}
function $y(t = "light") {
  return t === "dark" ? {
    main: sr[200],
    light: sr[50],
    dark: sr[400]
  } : {
    main: sr[700],
    light: sr[400],
    dark: sr[800]
  };
}
function Fy(t = "light") {
  return t === "dark" ? {
    main: ir[200],
    light: ir[50],
    dark: ir[400]
  } : {
    main: ir[500],
    light: ir[300],
    dark: ir[700]
  };
}
function My(t = "light") {
  return t === "dark" ? {
    main: nr[500],
    light: nr[300],
    dark: nr[700]
  } : {
    main: nr[700],
    light: nr[400],
    dark: nr[800]
  };
}
function Ly(t = "light") {
  return t === "dark" ? {
    main: or[400],
    light: or[300],
    dark: or[700]
  } : {
    main: or[700],
    light: or[500],
    dark: or[900]
  };
}
function jy(t = "light") {
  return t === "dark" ? {
    main: ar[400],
    light: ar[300],
    dark: ar[700]
  } : {
    main: ar[800],
    light: ar[500],
    dark: ar[900]
  };
}
function By(t = "light") {
  return t === "dark" ? {
    main: Or[400],
    light: Or[300],
    dark: Or[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Or[500],
    dark: Or[900]
  };
}
function Rs(t) {
  const {
    mode: e = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...i
  } = t, s = t.primary || $y(e), o = t.secondary || Fy(e), a = t.error || My(e), l = t.info || Ly(e), h = t.success || jy(e), f = t.warning || By(e);
  function p(w) {
    const E = va(w, xi.text.primary) >= r ? xi.text.primary : Sa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const A = va(w, E);
      A < 3 && console.error([`MUI: The contrast ratio of ${A}:1 for ${E} on ${w}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const m = ({
    color: w,
    name: E,
    mainShade: A = 500,
    lightShade: M = 300,
    darkShade: _ = 700
  }) => {
    if (w = {
      ...w
    }, !w.main && w[A] && (w.main = w[A]), !w.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${A}\` property.` : It(11, E ? ` (${E})` : "", A));
    if (typeof w.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(w.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : It(12, E ? ` (${E})` : "", JSON.stringify(w.main)));
    return _a(w, "light", M, n), _a(w, "dark", _, n), w.contrastText || (w.contrastText = p(w.main)), w;
  }, b = {
    dark: xi,
    light: Sa
  };
  return process.env.NODE_ENV !== "production" && (b[e] || console.error(`MUI: The palette mode \`${e}\` is not supported.`)), Ge({
    // A collection of common colors.
    common: {
      ...Mr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: e,
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
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: h,
      name: "success"
    }),
    // The grey colors.
    grey: pm,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b[e]
  }, i);
}
function Vy(t) {
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
function zy(t) {
  return Math.round(t * 1e5) / 1e5;
}
const Ea = {
  textTransform: "uppercase"
}, Ca = '"Roboto", "Helvetica", "Arial", sans-serif';
function Gy(t, e) {
  const {
    fontFamily: r = Ca,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: o = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: f,
    ...p
  } = typeof e == "function" ? e(t) : e;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = n / 14, b = f || ((E) => `${E / l * m}rem`), C = (E, A, M, _, R) => ({
    fontFamily: r,
    fontWeight: E,
    fontSize: b(A),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: M,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Ca ? {
      letterSpacing: `${zy(_ / A)}em`
    } : {},
    ...R,
    ...h
  }), w = {
    h1: C(i, 96, 1.167, -1.5),
    h2: C(i, 60, 1.2, -0.5),
    h3: C(s, 48, 1.167, 0),
    h4: C(s, 34, 1.235, 0.25),
    h5: C(s, 24, 1.334, 0),
    h6: C(o, 20, 1.6, 0.15),
    subtitle1: C(s, 16, 1.75, 0.15),
    subtitle2: C(o, 14, 1.57, 0.1),
    body1: C(s, 16, 1.5, 0.15),
    body2: C(s, 14, 1.43, 0.15),
    button: C(o, 14, 1.75, 0.4, Ea),
    caption: C(s, 12, 1.66, 0.4),
    overline: C(s, 12, 2.66, 1, Ea),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ge({
    htmlFontSize: l,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: o,
    fontWeightBold: a,
    ...w
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Wy = 0.2, Ky = 0.14, Hy = 0.12;
function ye(...t) {
  return [`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${Wy})`, `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${Ky})`, `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${Hy})`].join(",");
}
const Qy = ["none", ye(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ye(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ye(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ye(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ye(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ye(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ye(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ye(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ye(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ye(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ye(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ye(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ye(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ye(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ye(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ye(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ye(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ye(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ye(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ye(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ye(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ye(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ye(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ye(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Yy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Xy = {
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
function Oa(t) {
  return `${Math.round(t)}ms`;
}
function Jy(t) {
  if (!t)
    return 0;
  const e = t / 36;
  return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
}
function Zy(t) {
  const e = {
    ...Yy,
    ...t.easing
  }, r = {
    ...Xy,
    ...t.duration
  };
  return {
    getAutoHeightDuration: Jy,
    create: (i = ["all"], s = {}) => {
      const {
        duration: o = r.standard,
        easing: a = e.easeInOut,
        delay: l = 0,
        ...h
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const f = (m) => typeof m == "string", p = (m) => !Number.isNaN(parseFloat(m));
        !f(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(o) && !f(o) && console.error(`MUI: Argument "duration" must be a number or a string but found ${o}.`), f(a) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(h).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(h).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((f) => `${f} ${typeof o == "string" ? o : Oa(o)} ${a} ${typeof l == "string" ? l : Oa(l)}`).join(",");
    },
    ...t,
    easing: e,
    duration: r
  };
}
const eg = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ss(t = {}, ...e) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: i,
    palette: s = {},
    transitions: o = {},
    typography: a = {},
    shape: l,
    ...h
  } = t;
  if (t.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : It(20));
  const f = Rs(s), p = Sy(t);
  let m = Ge(p, {
    mixins: Uy(p.breakpoints, n),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Qy.slice(),
    typography: Gy(f, a),
    transitions: Zy(o),
    zIndex: {
      ...eg
    }
  });
  if (m = Ge(m, h), m = e.reduce((b, C) => Ge(b, C), m), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], C = (w, E) => {
      let A;
      for (A in w) {
        const M = w[A];
        if (b.includes(A) && Object.keys(M).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const _ = Oy("", A);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${A}\` internal state.`, "You can not override it like this: ", JSON.stringify(w, null, 2), "", `Instead, you need to use the '&.${_}' syntax:`, JSON.stringify({
              root: {
                [`&.${_}`]: M
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          w[A] = {};
        }
      }
    };
    Object.keys(m.components).forEach((w) => {
      const E = m.components[w].styleOverrides;
      E && w.startsWith("Mui") && C(E, w);
    });
  }
  return m.unstable_sxConfig = {
    ...Xn,
    ...h == null ? void 0 : h.unstable_sxConfig
  }, m.unstable_sx = function(C) {
    return Jn({
      sx: C,
      theme: this
    });
  }, m;
}
function tg(t) {
  let e;
  return t < 1 ? e = 5.11916 * t ** 2 : e = 4.5 * Math.log(t + 1) + 2, Math.round(e * 10) / 1e3;
}
const rg = [...Array(25)].map((t, e) => {
  if (e === 0)
    return "none";
  const r = tg(e);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Sc(t) {
  return {
    inputPlaceholder: t === "dark" ? 0.5 : 0.42,
    inputUnderline: t === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: t === "dark" ? 0.2 : 0.12,
    switchTrack: t === "dark" ? 0.3 : 0.38
  };
}
function _c(t) {
  return t === "dark" ? rg : [];
}
function ng(t) {
  const {
    palette: e = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...i
  } = t, s = Rs(e);
  return {
    palette: s,
    opacity: {
      ...Sc(s.mode),
      ...r
    },
    overlays: n || _c(s.mode),
    ...i
  };
}
function ig(t) {
  var e;
  return !!t[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!t[0].match(/sxConfig$/) || // ends with sxConfig
  t[0] === "palette" && !!((e = t[1]) != null && e.match(/(mode|contrastThreshold|tonalOffset)/));
}
const sg = (t) => [...[...Array(25)].map((e, r) => `--${t ? `${t}-` : ""}overlays-${r}`), `--${t ? `${t}-` : ""}palette-AppBar-darkBg`, `--${t ? `${t}-` : ""}palette-AppBar-darkColor`], og = (t) => (e, r) => {
  const n = t.colorSchemeSelector;
  let i = n;
  if (n === "class" && (i = ".%s"), n === "data" && (i = "[data-%s]"), n != null && n.startsWith("data-") && !n.includes("%s") && (i = `[${n}="%s"]`), t.defaultColorScheme === e) {
    if (e === "dark") {
      const s = {};
      return sg(t.cssVarPrefix).forEach((o) => {
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
function ag(t) {
  return Tt(t) || typeof t > "u" || typeof t == "string" || typeof t == "boolean" || typeof t == "number" || Array.isArray(t);
}
function ug(t = {}) {
  const e = {
    ...t
  };
  function r(n) {
    const i = Object.entries(n);
    for (let s = 0; s < i.length; s++) {
      const [o, a] = i[s];
      !ag(a) || o.startsWith("unstable_") ? delete n[o] : Tt(a) && (n[o] = {
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
function cg(t, e) {
  e.forEach((r) => {
    t[r] || (t[r] = {});
  });
}
function N(t, e, r) {
  !t[e] && r && (t[e] = r);
}
function Ar(t) {
  return !t || !t.startsWith("hsl") ? t : wc(t);
}
function mt(t, e) {
  `${e}Channel` in t || (t[`${e}Channel`] = Pr(Ar(t[e]), `MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function lg(t) {
  return typeof t == "number" ? `${t}px` : typeof t == "string" || typeof t == "function" || Array.isArray(t) ? t : "8px";
}
const st = (t) => {
  try {
    return t();
  } catch {
  }
}, dg = (t = "mui") => Ay(t);
function ki(t, e, r, n) {
  if (!e)
    return;
  e = e === !0 ? {} : e;
  const i = n === "dark" ? "dark" : "light";
  if (!r) {
    t[n] = ng({
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
  } = ss({
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
      ...Sc(i),
      ...e == null ? void 0 : e.opacity
    },
    overlays: (e == null ? void 0 : e.overlays) || _c(i)
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
    shouldSkipGeneratingVar: o = ig,
    colorSchemeSelector: a = r.light && r.dark ? "media" : void 0,
    ...l
  } = t, h = Object.keys(r)[0], f = n || (r.light && h !== "light" ? "light" : h), p = dg(s), {
    [f]: m,
    light: b,
    dark: C,
    ...w
  } = r, E = {
    ...w
  };
  let A = m;
  if ((f === "dark" && !("dark" in r) || f === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : It(21, f));
  const M = ki(E, A, l, f);
  b && !E.light && ki(E, b, void 0, "light"), C && !E.dark && ki(E, C, void 0, "dark");
  let _ = {
    defaultColorScheme: f,
    ...M,
    cssVarPrefix: s,
    colorSchemeSelector: a,
    getCssVar: p,
    colorSchemes: E,
    font: {
      ...Vy(M.typography),
      ...M.font
    },
    spacing: lg(l.spacing)
  };
  Object.keys(_.colorSchemes).forEach((Y) => {
    const d = _.colorSchemes[Y].palette, $ = (V) => {
      const te = V.split("-"), Ce = te[1], ge = te[2];
      return p(V, d[Ce][ge]);
    };
    if (d.mode === "light" && (N(d.common, "background", "#fff"), N(d.common, "onBackground", "#000")), d.mode === "dark" && (N(d.common, "background", "#000"), N(d.common, "onBackground", "#fff")), cg(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      N(d.Alert, "errorColor", de(d.error.light, 0.6)), N(d.Alert, "infoColor", de(d.info.light, 0.6)), N(d.Alert, "successColor", de(d.success.light, 0.6)), N(d.Alert, "warningColor", de(d.warning.light, 0.6)), N(d.Alert, "errorFilledBg", $("palette-error-main")), N(d.Alert, "infoFilledBg", $("palette-info-main")), N(d.Alert, "successFilledBg", $("palette-success-main")), N(d.Alert, "warningFilledBg", $("palette-warning-main")), N(d.Alert, "errorFilledColor", st(() => d.getContrastText(d.error.main))), N(d.Alert, "infoFilledColor", st(() => d.getContrastText(d.info.main))), N(d.Alert, "successFilledColor", st(() => d.getContrastText(d.success.main))), N(d.Alert, "warningFilledColor", st(() => d.getContrastText(d.warning.main))), N(d.Alert, "errorStandardBg", fe(d.error.light, 0.9)), N(d.Alert, "infoStandardBg", fe(d.info.light, 0.9)), N(d.Alert, "successStandardBg", fe(d.success.light, 0.9)), N(d.Alert, "warningStandardBg", fe(d.warning.light, 0.9)), N(d.Alert, "errorIconColor", $("palette-error-main")), N(d.Alert, "infoIconColor", $("palette-info-main")), N(d.Alert, "successIconColor", $("palette-success-main")), N(d.Alert, "warningIconColor", $("palette-warning-main")), N(d.AppBar, "defaultBg", $("palette-grey-100")), N(d.Avatar, "defaultBg", $("palette-grey-400")), N(d.Button, "inheritContainedBg", $("palette-grey-300")), N(d.Button, "inheritContainedHoverBg", $("palette-grey-A100")), N(d.Chip, "defaultBorder", $("palette-grey-400")), N(d.Chip, "defaultAvatarColor", $("palette-grey-700")), N(d.Chip, "defaultIconColor", $("palette-grey-700")), N(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), N(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), N(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), N(d.LinearProgress, "primaryBg", fe(d.primary.main, 0.62)), N(d.LinearProgress, "secondaryBg", fe(d.secondary.main, 0.62)), N(d.LinearProgress, "errorBg", fe(d.error.main, 0.62)), N(d.LinearProgress, "infoBg", fe(d.info.main, 0.62)), N(d.LinearProgress, "successBg", fe(d.success.main, 0.62)), N(d.LinearProgress, "warningBg", fe(d.warning.main, 0.62)), N(d.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), N(d.Slider, "primaryTrack", fe(d.primary.main, 0.62)), N(d.Slider, "secondaryTrack", fe(d.secondary.main, 0.62)), N(d.Slider, "errorTrack", fe(d.error.main, 0.62)), N(d.Slider, "infoTrack", fe(d.info.main, 0.62)), N(d.Slider, "successTrack", fe(d.success.main, 0.62)), N(d.Slider, "warningTrack", fe(d.warning.main, 0.62));
      const V = fn(d.background.default, 0.8);
      N(d.SnackbarContent, "bg", V), N(d.SnackbarContent, "color", st(() => d.getContrastText(V))), N(d.SpeedDialAction, "fabHoverBg", fn(d.background.paper, 0.15)), N(d.StepConnector, "border", $("palette-grey-400")), N(d.StepContent, "border", $("palette-grey-400")), N(d.Switch, "defaultColor", $("palette-common-white")), N(d.Switch, "defaultDisabledColor", $("palette-grey-100")), N(d.Switch, "primaryDisabledColor", fe(d.primary.main, 0.62)), N(d.Switch, "secondaryDisabledColor", fe(d.secondary.main, 0.62)), N(d.Switch, "errorDisabledColor", fe(d.error.main, 0.62)), N(d.Switch, "infoDisabledColor", fe(d.info.main, 0.62)), N(d.Switch, "successDisabledColor", fe(d.success.main, 0.62)), N(d.Switch, "warningDisabledColor", fe(d.warning.main, 0.62)), N(d.TableCell, "border", fe(dn(d.divider, 1), 0.88)), N(d.Tooltip, "bg", dn(d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      N(d.Alert, "errorColor", fe(d.error.light, 0.6)), N(d.Alert, "infoColor", fe(d.info.light, 0.6)), N(d.Alert, "successColor", fe(d.success.light, 0.6)), N(d.Alert, "warningColor", fe(d.warning.light, 0.6)), N(d.Alert, "errorFilledBg", $("palette-error-dark")), N(d.Alert, "infoFilledBg", $("palette-info-dark")), N(d.Alert, "successFilledBg", $("palette-success-dark")), N(d.Alert, "warningFilledBg", $("palette-warning-dark")), N(d.Alert, "errorFilledColor", st(() => d.getContrastText(d.error.dark))), N(d.Alert, "infoFilledColor", st(() => d.getContrastText(d.info.dark))), N(d.Alert, "successFilledColor", st(() => d.getContrastText(d.success.dark))), N(d.Alert, "warningFilledColor", st(() => d.getContrastText(d.warning.dark))), N(d.Alert, "errorStandardBg", de(d.error.light, 0.9)), N(d.Alert, "infoStandardBg", de(d.info.light, 0.9)), N(d.Alert, "successStandardBg", de(d.success.light, 0.9)), N(d.Alert, "warningStandardBg", de(d.warning.light, 0.9)), N(d.Alert, "errorIconColor", $("palette-error-main")), N(d.Alert, "infoIconColor", $("palette-info-main")), N(d.Alert, "successIconColor", $("palette-success-main")), N(d.Alert, "warningIconColor", $("palette-warning-main")), N(d.AppBar, "defaultBg", $("palette-grey-900")), N(d.AppBar, "darkBg", $("palette-background-paper")), N(d.AppBar, "darkColor", $("palette-text-primary")), N(d.Avatar, "defaultBg", $("palette-grey-600")), N(d.Button, "inheritContainedBg", $("palette-grey-800")), N(d.Button, "inheritContainedHoverBg", $("palette-grey-700")), N(d.Chip, "defaultBorder", $("palette-grey-700")), N(d.Chip, "defaultAvatarColor", $("palette-grey-300")), N(d.Chip, "defaultIconColor", $("palette-grey-300")), N(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), N(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), N(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), N(d.LinearProgress, "primaryBg", de(d.primary.main, 0.5)), N(d.LinearProgress, "secondaryBg", de(d.secondary.main, 0.5)), N(d.LinearProgress, "errorBg", de(d.error.main, 0.5)), N(d.LinearProgress, "infoBg", de(d.info.main, 0.5)), N(d.LinearProgress, "successBg", de(d.success.main, 0.5)), N(d.LinearProgress, "warningBg", de(d.warning.main, 0.5)), N(d.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), N(d.Slider, "primaryTrack", de(d.primary.main, 0.5)), N(d.Slider, "secondaryTrack", de(d.secondary.main, 0.5)), N(d.Slider, "errorTrack", de(d.error.main, 0.5)), N(d.Slider, "infoTrack", de(d.info.main, 0.5)), N(d.Slider, "successTrack", de(d.success.main, 0.5)), N(d.Slider, "warningTrack", de(d.warning.main, 0.5));
      const V = fn(d.background.default, 0.98);
      N(d.SnackbarContent, "bg", V), N(d.SnackbarContent, "color", st(() => d.getContrastText(V))), N(d.SpeedDialAction, "fabHoverBg", fn(d.background.paper, 0.15)), N(d.StepConnector, "border", $("palette-grey-600")), N(d.StepContent, "border", $("palette-grey-600")), N(d.Switch, "defaultColor", $("palette-grey-300")), N(d.Switch, "defaultDisabledColor", $("palette-grey-600")), N(d.Switch, "primaryDisabledColor", de(d.primary.main, 0.55)), N(d.Switch, "secondaryDisabledColor", de(d.secondary.main, 0.55)), N(d.Switch, "errorDisabledColor", de(d.error.main, 0.55)), N(d.Switch, "infoDisabledColor", de(d.info.main, 0.55)), N(d.Switch, "successDisabledColor", de(d.success.main, 0.55)), N(d.Switch, "warningDisabledColor", de(d.warning.main, 0.55)), N(d.TableCell, "border", de(dn(d.divider, 1), 0.68)), N(d.Tooltip, "bg", dn(d.grey[700], 0.92));
    }
    mt(d.background, "default"), mt(d.background, "paper"), mt(d.common, "background"), mt(d.common, "onBackground"), mt(d, "divider"), Object.keys(d).forEach((V) => {
      const te = d[V];
      te && typeof te == "object" && (te.main && N(d[V], "mainChannel", Pr(Ar(te.main))), te.light && N(d[V], "lightChannel", Pr(Ar(te.light))), te.dark && N(d[V], "darkChannel", Pr(Ar(te.dark))), te.contrastText && N(d[V], "contrastTextChannel", Pr(Ar(te.contrastText))), V === "text" && (mt(d[V], "primary"), mt(d[V], "secondary")), V === "action" && (te.active && mt(d[V], "active"), te.selected && mt(d[V], "selected")));
    });
  }), _ = e.reduce((Y, d) => Ge(Y, d), _);
  const R = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: o,
    getSelector: og(_)
  }, {
    vars: v,
    generateThemeVars: k,
    generateStyleSheets: X
  } = Dy(_, R);
  return _.vars = v, Object.entries(_.colorSchemes[_.defaultColorScheme]).forEach(([Y, d]) => {
    _[Y] = d;
  }), _.generateThemeVars = k, _.generateStyleSheets = X, _.generateSpacing = function() {
    return vc(l.spacing, Cs(this));
  }, _.getColorSchemeSelector = Iy(a), _.spacing = _.generateSpacing(), _.shouldSkipGeneratingVar = o, _.unstable_sxConfig = {
    ...Xn,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, _.unstable_sx = function(d) {
    return Jn({
      sx: d,
      theme: this
    });
  }, _.toRuntimeSource = ug, _;
}
function Na(t, e, r) {
  t.colorSchemes && r && (t.colorSchemes[e] = {
    ...r !== !0 && r,
    palette: Rs({
      ...r === !0 ? {} : r.palette,
      mode: e
    })
    // cast type to skip module augmentation test
  });
}
function Ps(t = {}, ...e) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: i = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r == null ? void 0 : r.mode,
    ...o
  } = t, a = s || "light", l = i == null ? void 0 : i[a], h = {
    ...i,
    ...r ? {
      [a]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in t))
      return ss(t, ...e);
    let f = r;
    "palette" in t || h[a] && (h[a] !== !0 ? f = h[a].palette : a === "dark" && (f = {
      mode: "dark"
    }));
    const p = ss({
      ...t,
      palette: f
    }, ...e);
    return p.defaultColorScheme = a, p.colorSchemes = h, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: p.palette
    }, Na(p, "dark", h.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: p.palette
    }, Na(p, "light", h.light)), p;
  }
  return !r && !("light" in h) && a === "light" && (h.light = !0), fg({
    ...o,
    colorSchemes: h,
    defaultColorScheme: a,
    ...typeof n != "boolean" && n
  }, ...e);
}
Ps({
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
const hg = {
  rfpaData: mu,
  dealSlipData: gu,
  grnData: vu,
  mc_voucher: Su,
  lp_voucher: Eu,
  tp_voucher: Tu,
  pmp_voucher: Ou,
  delivery_challan: Ru,
  payment_request: Au
}, pg = {
  customers: [],
  customerFormPreview: null
}, Ec = ae({
  name: "customerData",
  initialState: pg,
  reducers: {
    setCustomerData: (t, e) => {
      t.customers = e.payload;
    },
    setCustomerFormPreview: (t, e) => {
      t.customerFormPreview = e.payload;
    }
  }
});
Ec.actions;
const mg = Ec.reducer, yg = {
  allVendors: [],
  allVendorssPartialData: [],
  selectedVendorPartialData: null,
  vendorFormPreview: null
}, Cc = ae({
  name: "vendorData",
  initialState: yg,
  reducers: {
    setVendorData: (t, e) => {
      t.allVendors = e.payload;
    },
    setAllVendorsPartialData: (t, e) => {
      t.allVendorssPartialData = e.payload;
    },
    setSelectedVendorPartialData: (t, e) => {
      t.selectedVendorPartialData = e.payload;
    },
    setVendorFormPreview: (t, e) => {
      t.vendorFormPreview = e.payload;
    }
  }
});
Cc.actions;
const gg = Cc.reducer, bg = {
  employees: [],
  employeeFormPreview: null
}, Oc = ae({
  name: "employeeData",
  initialState: bg,
  reducers: {
    setEmployeeData: (t, e) => {
      t.employees = e.payload;
    },
    setEmployeeFormPreview: (t, e) => {
      t.employeeFormPreview = e.payload;
    }
  }
});
Oc.actions;
const vg = Oc.reducer, wg = {
  allFarmers: [],
  allFarmersPartialData: [],
  selectedFarmerPartialData: null,
  farmerFormPreview: null
}, Nc = ae({
  name: "farmerData",
  initialState: wg,
  reducers: {
    setFarmerData: (t, e) => {
      t.allFarmers = e.payload;
    },
    setAllFarmersPartialData: (t, e) => {
      t.allFarmersPartialData = e.payload;
    },
    setSelectedFarmerPartialData: (t, e) => {
      t.selectedFarmerPartialData = e.payload;
    },
    setFarmerFormPreview: (t, e) => {
      t.farmerFormPreview = e.payload;
    }
  }
});
Nc.actions;
const Sg = Nc.reducer, _g = {
  allProducts: [],
  selectedProduct: void 0,
  productCat: [],
  productSubCat: [],
  productPartialData: [],
  productFormPreview: null
}, Tc = ae({
  name: "productData",
  initialState: _g,
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
    },
    setProductFormPreview: (t, e) => {
      t.productFormPreview = e.payload;
    }
  }
});
Tc.actions;
const Eg = Tc.reducer;
var qc = /* @__PURE__ */ ((t) => (t[t["collection-center"] = 0] = "collection-center", t[t["distribution-center"] = 1] = "distribution-center", t[t["seasonal-collection-center"] = 2] = "seasonal-collection-center", t[t.warehouse = 3] = "warehouse", t))(qc || {}), Rc = /* @__PURE__ */ ((t) => (t[t["registered-office"] = 0] = "registered-office", t[t["corporate-office"] = 1] = "corporate-office", t))(Rc || {});
const Cg = {
  offices: [],
  officeType: Rc["registered-office"],
  selectedOffices: void 0,
  officeFormPreview: null
}, Pc = ae({
  name: "officesData",
  initialState: Cg,
  reducers: {
    setOfficesData: (t, e) => {
      t.offices = e.payload;
    },
    setOfficeType: (t, e) => {
      t.officeType = e.payload;
    },
    setOfficeFormPreview: (t, e) => {
      t.officeFormPreview = e.payload;
    }
  }
});
Pc.actions;
const Og = Pc.reducer, Ng = {
  branches: [],
  BranchType: qc["collection-center"],
  selectedBranches: void 0,
  branchFormPreview: null
}, Ac = ae({
  name: "branchesData",
  initialState: Ng,
  reducers: {
    setBranchesData: (t, e) => {
      t.branches = e.payload;
    },
    setBranchType: (t, e) => {
      t.BranchType = e.payload;
    },
    setBranchFormPreview: (t, e) => {
      t.branchFormPreview = e.payload;
    }
  }
});
Ac.actions;
const Tg = Ac.reducer, qg = {
  packagingMaterialFormPreview: null
}, xc = ae({
  name: "packagingMaterialData",
  initialState: qg,
  reducers: {
    setPackagingMaterialFormPreview: (t, e) => {
      t.packagingMaterialFormPreview = e.payload;
    }
  }
});
xc.actions;
const Rg = xc.reducer, Pg = {
  showReplaceForm: !1
}, kc = ae({
  name: "approvalFlow",
  initialState: Pg,
  reducers: {
    setShowReplaceForm: (t) => {
      t.showReplaceForm = !t.showReplaceForm;
    }
  }
});
kc.actions;
const Ag = kc.reducer, Dc = {
  approvalFlow: Ag,
  customerData: mg,
  vendorData: gg,
  employeeData: vg,
  farmerData: Sg,
  productData: Eg,
  officesData: Og,
  branchesData: Tg,
  packagingMaterialData: Rg
};
Dn({
  reducer: Dc
});
j().shape({
  firstName: c().required("First name is required").min(3, "First name should be more than 3 characters").matches(q.IS_STRING, "Name should only contains alphabets."),
  middleName: c().notRequired().min(3, "First name should be more than 3 characters").matches(q.IS_STRING, "Name should only contains alphabets."),
  lastName: c().required("Last name is required").min(3, "Last name should be more than 3 characters").matches(q.IS_STRING, "Name should only contains alphabets."),
  username: c().required("Username is required").min(5, "username should be more than 5 characters").max(16, "username should be less than 16 characters"),
  primaryMobNo: c().required("Mobile number is required").matches(q.CONTACT_NO, "Mobile number must contain only numbers"),
  secondaryMobNo: c().notRequired().matches(q.CONTACT_NO, "Mobile number must contain only numbers"),
  primaryEmail: c().required("Email is required").matches(q.IS_EMAIL, "Please enter valid email."),
  secondaryEmail: c().notRequired().matches(q.IS_EMAIL, "Please enter valid email."),
  residentialAddress: Oe,
  permanentAddress: Oe,
  companyName: c().required("Company name is required"),
  department: c().required("Department is required."),
  joiningDate: c().required("Joining date is required"),
  joiningLocation: c().required("Joining location is required"),
  currentWorkLocation: c().required("Work location is required"),
  otherWorkLocationInput: Ae().when("currentWorkLocation", {
    is: null,
    then: (t) => t.required("Other work location is required"),
    otherwise: (t) => t.nullable()
  }),
  accessLocation: Ie().of(c()).min(1, "Atleast one access location should be selected").required("Access location is required"),
  cugNo: c().notRequired().matches(q.CONTACT_NO, "Mobile number must contain only numbers"),
  workEmail: c().notRequired().matches(q.IS_EMAIL, "Please enter valid email.")
  // permissions: Yup.array().min(1, 'Please fill the permission array').required('Permissions are required.')
});
j().shape({
  name: c().required("Name is required").min(3, "Product name should be more than 3 characters"),
  image: Ae().nullable().required("Image is required").test("fileFormat", "Invalid image format (only jpg, jpeg, png allowed)", (t) => {
    if (!t) return !0;
    const e = t;
    return ["image/jpeg", "image/png", "image/jpg"].includes(e.type);
  }).test("fileSize", "Image is too large (max 1MB)", (t) => {
    if (!t) return !0;
    const e = t, r = 1 * 1024 * 1024;
    return e.size <= r;
  }),
  returnable: it().required("Returnable is required"),
  description: c().required("Description is required"),
  product_code: c().required("Product code is required"),
  category: c().required("Category is required"),
  subcategory: c().required("Subcategory is required"),
  classification: c().required("Classification is required"),
  uom: c().required("UOM is required")
});
j().shape({
  name: c().required("Product classification name is required.")
});
j().shape({
  name: c().required("Product category name is required"),
  productClassification: c().required("Related product classification name is required")
});
j().shape({
  name: c().required("Product subcategory name is required"),
  category: c().required("Related product category name is required")
});
j().shape({
  name: c().required("Office name is required"),
  address: Oe,
  cFirstName: c().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  cMiddleName: c().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  cLastName: c().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  contactNumber: c().nullable().matches(q.CONTACT_NO, "Please enter valid contact number."),
  officeEmail: c().nullable().matches(q.IS_EMAIL, "Please enter valid email."),
  notes: c().nullable()
});
j().shape({
  name: c().required("Office name is required"),
  prefix: c().required("Prefix is required for creating GRN numbers. Please enter."),
  address: Oe,
  cFirstName: c().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  cMiddleName: c().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  cLastName: c().nullable().matches(q.IS_STRING, "Name should only contains alphabets."),
  contactNumber: c().nullable().matches(q.CONTACT_NO, "Please enter valid contact number."),
  totalCapacity: I().min(0, "Capacity must be 0 or greater"),
  currentCapacity: I().min(0, "Capacity must be 0 or greater"),
  balanceCapacity: I().min(0, "Capacity must be 0 or greater"),
  notes: c().nullable()
});
j().shape({
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
j().shape({
  companyName: c().required("Party Name is required"),
  category: c().required("Please select category of vendor"),
  subcategory: c().required("Please select subcategory of vendor"),
  inFandVBusinessSince: c(),
  dateOfIncorporation: c(),
  officeAddress: Oe,
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
j().shape({
  farmerfName: c().required("First Name is required").min(3, "Minimum 3 characters required."),
  farmermName: c().notRequired(),
  farmerlName: c().required("Last Name is required").min(3, "Minimum 3 characters required."),
  residensialAddress: Oe,
  farmAddress: Oe,
  primaryMobileNo: c().required("Contact No is required")
});
j().shape({
  unit: c().required("UOM name is required"),
  abbreviation: c().required("Abbreviation of UOM is required")
});
j().shape({
  conversionFactor: I().required("Conversion factor is required").positive("Conversion factor cannot be negative."),
  fromUOM: c().required("UOM name is required"),
  toUOM: c().required("UOM name is required")
});
j().shape({
  address1: c().required("Address Line 1 is required"),
  address2: c().nullable(),
  location: c().required("Location is required"),
  city: c().required("City is required"),
  state: c().required("State is required"),
  pincode: c().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
j().shape({
  creator: c().required("Please select an employee name."),
  approvers: j().shape({
    firstApprover: j().shape({
      users: Ie().of(c()).required("Name of first approver is required.").min(1, "Please select atleast one option"),
      minAmtCanApprove: I().nullable().min(0, "Amount cannot be negative."),
      maxAmtCanApprove: I().nullable().min(0, "Amount cannot be negative.")
    }),
    secondApprover: j().shape({
      users: Ie().of(c()).required("Name of second approver is required.").min(1, "Please select atleast one option"),
      minAmtCanApprove: I().nullable().min(0, "Amount cannot be negative."),
      maxAmtCanApprove: I().nullable().min(0, "Amount cannot be negative.")
    }),
    thirdApprover: j().shape({
      minAmtCanApprove: I().nullable().min(0, "Amount cannot be negative."),
      maxAmtCanApprove: I().nullable().min(0, "Amount cannot be negative.")
    }),
    fourthApprover: j().shape({
      minAmtCanApprove: I().nullable().min(0, "Amount cannot be negative."),
      maxAmtCanApprove: I().nullable().min(0, "Amount cannot be negative.")
    }),
    fifthApprover: j().shape({
      minAmtCanApprove: I().nullable().min(0, "Amount cannot be negative."),
      maxAmtCanApprove: I().nullable().min(0, "Amount cannot be negative.")
    })
  })
});
j().shape({
  oldUserId: c().required("Please select employee to be replace."),
  newUserId: c().required("Please select employee replace with.")
});
Ps({
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
j().shape({
  companyName: c().required("Company name is required."),
  location: c().required("Location is required"),
  date: dt().required("Date is required"),
  labourDetails: Ie(
    j({
      labourName: c().required("Labour name is required"),
      contactNo: c().required("Contact No is required"),
      inTime: c().required("In time is required")
      // outTime: yup.string().required("Out time is required."),
    })
  )
});
j().shape({
  representativeName: c().required("Prime representative name is required."),
  siteName: c().required("Site name is required"),
  laborType: c().required("Type of labor is required."),
  presentAddress: Oe,
  permanentAddress: Oe
});
j().shape({
  companyName: c().required("Company name is required."),
  location: c().required("Location is required"),
  date: c().required("Date is required"),
  batchNo: c().nullable(),
  grn: c().nullable(),
  dumpProducts: Ie(
    j({
      productName: c().required("Product name is required"),
      uom: c().required("UOM No is required"),
      quantity: I().required("Quantity is required").min(0, "Quantity cannot be negative."),
      unitPrice: I().required("Unit price is required.").min(0, "Unit price cannot be negative")
    })
  ),
  remark: c().nullable()
});
j().shape({
  companyName: c().required("Company name is required."),
  dcNumber: c().required("Please select challan number."),
  date: c().nullable(),
  vehicleNo: c().required("Vehicle number is required."),
  vehicleType: c().required("Vehicle type is required."),
  driverName: c().required("Full name of driver is required.").matches(q.IS_STRING, "Name should only contain alphabets."),
  driverMobNo: c().required("Driver's mobile number is required.").matches(q.IS_NUMBER, "Please enter valid mobile number."),
  paymentDiscussed: I().required("Please enter payment amount discussed.").min(0, "Amount cannot be negative."),
  transportationBillAmt: I().required("Please enter transportation bill amount.").min(0, "Amount cannot be negative."),
  advancePaid: I().nullable().min(0, "Amount cannot be negative."),
  clientName: c().required("Client name is required."),
  clientGRNNo: c().nullable(),
  clientAddress: Oe,
  receivingPerson: c().required("Receiving person name is required.").matches(q.IS_STRING, "Name should only contain alphabets."),
  outTime: c().required("Out time is required."),
  reachingTime: c().required("Reaching time is required."),
  accDeptVerification: c().required("Please select one option."),
  remarksPFL: c().nullable(),
  feedbackbyTransporterOwner: c().nullable(),
  paymentTerms: c().nullable(),
  netInwardQty: I().nullable().min(0, "Quantity cannot be negative."),
  rejection: I().nullable().min(0, "Quantity cannot be negative."),
  shrinkageDump: I().nullable().min(0, "Quantity cannot be negative.")
});
j().shape({
  companyName: c().required("Company name is required."),
  location: c().required("Location is required."),
  stockDate: dt().required("Date of stock is required."),
  eodProducts: Ie(
    j({
      sku: c().required("SKU is required."),
      uom: c().required("UoM is required."),
      qty: I().required("Quantity is required.").min(0, "Quantity cannot be negative."),
      totalWeightinKg: I().required("Total weight is required.").min(0, "Weight cannot be negative.")
    })
  ),
  submission: c().required("Submission type is required."),
  comments: c().nullable()
});
j().shape({
  inwardType: c().required("Inward type is required"),
  deliveryChallanNo: c().nullable(),
  grnNo: c().nullable(),
  companyName: c().required("Company name is required."),
  batchNo: c().nullable(),
  location: c().required("Location is required."),
  date: c().required("Date is required."),
  source: c().oneOf(["vendor", "farmer"], "Inward type must be either vendor or farmer").required("Source is required"),
  selectedParty: c().required("Please select one option."),
  inwardProducts: Ie(
    j({
      productName: c().required("Product name is required"),
      uom: c().required("UOM No is required"),
      quantity: I().required("Quantity is required").min(0, "Quantity cannot be negative."),
      unitPrice: I().required("Unit price is required").min(0, "Price cannot be negative."),
      weight: I().nullable().min(0, "Weight cannot be negative"),
      packingMaterialWeight: I().nullable().min(0, "Weight cannot be negative"),
      grossWeight: I().required("Gross weight is required.").min(0, "Weight cannot be negative")
    })
  ),
  inwardBy: c().required("Name of person is required."),
  purchasedBy: c().required("Name of person is required."),
  purchasedQty: I().required("Purchased quantity is required.").min(0, "Purchased quantity cannot be negative."),
  inwardQtyInKg: I().required("Inward quantity is required.").min(0, "Inward quantity cannot be negative."),
  inwardCost: I().required("Inward cost is required.").min(0, "Inward cost cannot be negative."),
  remarks: c().nullable()
  // totalWeightInKg: 0,
});
j().shape({
  dcNo: c().nullable(),
  dcDate: c().nullable(),
  arrivedQty: I().required("Arrived quantity is required.").min(0, "Quantity cannot be negative"),
  samplingQty: I().required("Sampling quantity is required.").min(0, "Quantity cannot be negative"),
  purchaseBy: c().required("Name required."),
  receivedBy: c().required("Name required."),
  qcCheckBy: c().required("Name required."),
  verifiedBy: c().required("Name required."),
  totalQty: I().nullable(),
  totalpercent: I().nullable(),
  supplierName: c().required("Supplier name is required."),
  arrivalDate: c().required("Arrival date is required."),
  supplierLocation: c().required("Supplier location is required."),
  remark: c().nullable(),
  product: c().required("Product name is required."),
  parameters: Ie(
    j({
      quantity: I().required("Quantity is required").min(0, "Quantity cannot be negative.")
    })
  )
});
j().shape({
  deliveryChallanNo: c().required("Delivery challan number is required."),
  date: c().required("Date is required."),
  returnedProducts: Ie(
    j({
      productName: c().required("Product name is required"),
      quantity: I().required("Quantity is required").min(0, "Quantity cannot be negative."),
      unitPrice: I().required("Unit price is required.").min(0, "Unit price cannot be negative"),
      packingMaterialWeight: I().nullable().min(0, "Weight cannot be negative"),
      grossWeight: I().required("Gross weight is required.").min(0, "Weight cannot be negative")
    })
  )
});
const xg = {
  inwardRegisterFormPreview: void 0
}, Ic = ae({
  name: "inwardRegister",
  initialState: xg,
  reducers: {
    setInwardRegisterFormPreview: (t, e) => {
      t.inwardRegisterFormPreview = e.payload;
    }
  }
});
Ic.actions;
const kg = Ic.reducer, Dg = {
  dumpRegisterFormPreview: void 0
}, $c = ae({
  name: "dumpRegister",
  initialState: Dg,
  reducers: {
    setDumpRegisterFormPreview: (t, e) => {
      t.dumpRegisterFormPreview = e.payload;
    }
  }
});
$c.actions;
const Ig = $c.reducer, $g = {
  aqrFormPreview: void 0
}, Fc = ae({
  name: "aqr",
  initialState: $g,
  reducers: {
    setAQRFormPreview: (t, e) => {
      t.aqrFormPreview = e.payload;
    }
  }
});
Fc.actions;
const Fg = Fc.reducer, Mg = {
  secondSaleRegisterFormPreview: void 0
}, Mc = ae({
  name: "secondSaleRegister",
  initialState: Mg,
  reducers: {
    setSecondSaleRegisterFormPreview: (t, e) => {
      t.secondSaleRegisterFormPreview = e.payload;
    }
  }
});
Mc.actions;
const Lg = Mc.reducer, jg = {
  vehicleDispatchRegisterFormPreview: void 0
}, Lc = ae({
  name: "vehicleDispatchRegister",
  initialState: jg,
  reducers: {
    setVehicleDispatchRegisterFormPreview: (t, e) => {
      t.vehicleDispatchRegisterFormPreview = e.payload;
    }
  }
});
Lc.actions;
const Bg = Lc.reducer, Vg = {
  eodReportFormPreview: void 0
}, jc = ae({
  name: "eodReport",
  initialState: Vg,
  reducers: {
    setEODReportFormPreview: (t, e) => {
      t.eodReportFormPreview = e.payload;
    }
  }
});
jc.actions;
const Ug = jc.reducer, zg = {
  rbcFormPreview: null
}, Bc = ae({
  name: "rbc",
  initialState: zg,
  reducers: {
    setRBCFormPreview: (t, e) => {
      t.rbcFormPreview = e.payload;
    }
  }
});
Bc.actions;
const Gg = Bc.reducer, Wg = {
  inwardRegister: kg,
  dumpRegister: Ig,
  aqr: Fg,
  secondSaleRegister: Lg,
  vehicleDispatchRegister: Bg,
  eodReport: Ug,
  rbc: Gg
}, Vc = ls({
  ...jf,
  ...Dc,
  ...hg,
  ...Wg
});
var As = "persist:", xs = "persist/FLUSH", ei = "persist/REHYDRATE", ks = "persist/PAUSE", Ds = "persist/PERSIST", Is = "persist/PURGE", $s = "persist/REGISTER", Kg = -1;
function kr(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kr = function(r) {
    return typeof r;
  } : kr = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, kr(t);
}
function Ta(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ta(r, !0).forEach(function(n) {
      Qg(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ta(r).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Qg(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Yg(t, e, r, n) {
  var i = n.debug, s = Hg({}, r);
  return t && kr(t) === "object" && Object.keys(t).forEach(function(o) {
    if (o !== "_persist") {
      if (e[o] !== r[o]) {
        process.env.NODE_ENV !== "production" && i && console.log("redux-persist/stateReconciler: sub state for key `%s` modified, skipping.", o);
        return;
      }
      s[o] = t[o];
    }
  }), process.env.NODE_ENV !== "production" && i && t && kr(t) === "object" && console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(t).join(", "), "'")), s;
}
function Xg(t) {
  var e = t.blacklist || null, r = t.whitelist || null, n = t.transforms || [], i = t.throttle || 0, s = "".concat(t.keyPrefix !== void 0 ? t.keyPrefix : As).concat(t.key), o = t.storage, a;
  t.serialize === !1 ? a = function(v) {
    return v;
  } : typeof t.serialize == "function" ? a = t.serialize : a = Jg;
  var l = t.writeFailHandler || null, h = {}, f = {}, p = [], m = null, b = null, C = function(v) {
    Object.keys(v).forEach(function(k) {
      A(k) && h[k] !== v[k] && p.indexOf(k) === -1 && p.push(k);
    }), Object.keys(h).forEach(function(k) {
      v[k] === void 0 && A(k) && p.indexOf(k) === -1 && h[k] !== void 0 && p.push(k);
    }), m === null && (m = setInterval(w, i)), h = v;
  };
  function w() {
    if (p.length === 0) {
      m && clearInterval(m), m = null;
      return;
    }
    var R = p.shift(), v = n.reduce(function(k, X) {
      return X.in(k, R, h);
    }, h[R]);
    if (v !== void 0)
      try {
        f[R] = a(v);
      } catch (k) {
        console.error("redux-persist/createPersistoid: error serializing state", k);
      }
    else
      delete f[R];
    p.length === 0 && E();
  }
  function E() {
    Object.keys(f).forEach(function(R) {
      h[R] === void 0 && delete f[R];
    }), b = o.setItem(s, a(f)).catch(M);
  }
  function A(R) {
    return !(r && r.indexOf(R) === -1 && R !== "_persist" || e && e.indexOf(R) !== -1);
  }
  function M(R) {
    l && l(R), R && process.env.NODE_ENV !== "production" && console.error("Error storing data", R);
  }
  var _ = function() {
    for (; p.length !== 0; )
      w();
    return b || Promise.resolve();
  };
  return {
    update: C,
    flush: _
  };
}
function Jg(t) {
  return JSON.stringify(t);
}
function Zg(t) {
  var e = t.transforms || [], r = "".concat(t.keyPrefix !== void 0 ? t.keyPrefix : As).concat(t.key), n = t.storage, i = t.debug, s;
  return t.deserialize === !1 ? s = function(a) {
    return a;
  } : typeof t.deserialize == "function" ? s = t.deserialize : s = eb, n.getItem(r).then(function(o) {
    if (o) try {
      var a = {}, l = s(o);
      return Object.keys(l).forEach(function(h) {
        a[h] = e.reduceRight(function(f, p) {
          return p.out(f, h, l);
        }, s(l[h]));
      }), a;
    } catch (h) {
      throw process.env.NODE_ENV !== "production" && i && console.log("redux-persist/getStoredState: Error restoring data ".concat(o), h), h;
    }
    else
      return;
  });
}
function eb(t) {
  return JSON.parse(t);
}
function tb(t) {
  var e = t.storage, r = "".concat(t.keyPrefix !== void 0 ? t.keyPrefix : As).concat(t.key);
  return e.removeItem(r, rb);
}
function rb(t) {
  t && process.env.NODE_ENV !== "production" && console.error("redux-persist/purgeStoredState: Error purging data stored state", t);
}
function qa(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qa(r, !0).forEach(function(n) {
      nb(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : qa(r).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function nb(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function ib(t, e) {
  if (t == null) return {};
  var r = sb(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function sb(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
var ob = 5e3;
function ab(t, e) {
  if (process.env.NODE_ENV !== "production") {
    if (!t) throw new Error("config is required for persistReducer");
    if (!t.key) throw new Error("key is required in persistor config");
    if (!t.storage) throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
  }
  var r = t.version !== void 0 ? t.version : Kg;
  t.debug;
  var n = t.stateReconciler === void 0 ? Yg : t.stateReconciler, i = t.getStoredState || Zg, s = t.timeout !== void 0 ? t.timeout : ob, o = null, a = !1, l = !0, h = function(p) {
    return p._persist.rehydrated && o && !l && o.update(p), p;
  };
  return function(f, p) {
    var m = f || {}, b = m._persist, C = ib(m, ["_persist"]), w = C;
    if (p.type === Ds) {
      var E = !1, A = function(Y, d) {
        process.env.NODE_ENV !== "production" && E && console.error('redux-persist: rehydrate for "'.concat(t.key, '" called after timeout.'), Y, d), E || (p.rehydrate(t.key, Y, d), E = !0);
      };
      if (s && setTimeout(function() {
        !E && A(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(t.key, '"')));
      }, s), l = !1, o || (o = Xg(t)), b)
        return yt({}, e(w, p), {
          _persist: b
        });
      if (typeof p.rehydrate != "function" || typeof p.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
      return p.register(t.key), i(t).then(function(X) {
        var Y = t.migrate || function(d, $) {
          return Promise.resolve(d);
        };
        Y(X, r).then(function(d) {
          A(d);
        }, function(d) {
          process.env.NODE_ENV !== "production" && d && console.error("redux-persist: migration error", d), A(void 0, d);
        });
      }, function(X) {
        A(void 0, X);
      }), yt({}, e(w, p), {
        _persist: {
          version: r,
          rehydrated: !1
        }
      });
    } else {
      if (p.type === Is)
        return a = !0, p.result(tb(t)), yt({}, e(w, p), {
          _persist: b
        });
      if (p.type === xs)
        return p.result(o && o.flush()), yt({}, e(w, p), {
          _persist: b
        });
      if (p.type === ks)
        l = !0;
      else if (p.type === ei) {
        if (a) return yt({}, w, {
          _persist: yt({}, b, {
            rehydrated: !0
          })
          // @NOTE if key does not match, will continue to default else below
        });
        if (p.key === t.key) {
          var M = e(w, p), _ = p.payload, R = n !== !1 && _ !== void 0 ? n(_, f, M, t) : M, v = yt({}, R, {
            _persist: yt({}, b, {
              rehydrated: !0
            })
          });
          return h(v);
        }
      }
    }
    if (!b) return e(f, p);
    var k = e(w, p);
    return k === w ? f : h(yt({}, k, {
      _persist: b
    }));
  };
}
function Ra(t) {
  return lb(t) || cb(t) || ub();
}
function ub() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function cb(t) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]") return Array.from(t);
}
function lb(t) {
  if (Array.isArray(t)) {
    for (var e = 0, r = new Array(t.length); e < t.length; e++)
      r[e] = t[e];
    return r;
  }
}
function Pa(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function os(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pa(r, !0).forEach(function(n) {
      db(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Pa(r).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function db(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Uc = {
  registry: [],
  bootstrapped: !1
}, fb = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Uc, r = arguments.length > 1 ? arguments[1] : void 0;
  switch (r.type) {
    case $s:
      return os({}, e, {
        registry: [].concat(Ra(e.registry), [r.key])
      });
    case ei:
      var n = e.registry.indexOf(r.key), i = Ra(e.registry);
      return i.splice(n, 1), os({}, e, {
        registry: i,
        bootstrapped: i.length === 0
      });
    default:
      return e;
  }
};
function hb(t, e, r) {
  if (process.env.NODE_ENV !== "production") {
    var n = {}, i = ["blacklist", "whitelist", "transforms", "storage", "keyPrefix", "migrate"];
    i.forEach(function(h) {
      n[h] && console.error('redux-persist: invalid option passed to persistStore: "'.concat(h, '". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer.'));
    });
  }
  var s = cs(fb, Uc, void 0), o = function(f) {
    s.dispatch({
      type: $s,
      key: f
    });
  }, a = function(f, p, m) {
    var b = {
      type: ei,
      payload: p,
      err: m,
      key: f
      // dispatch to `store` to rehydrate and `persistor` to track result
    };
    t.dispatch(b), s.dispatch(b);
  }, l = os({}, s, {
    purge: function() {
      var f = [];
      return t.dispatch({
        type: Is,
        result: function(m) {
          f.push(m);
        }
      }), Promise.all(f);
    },
    flush: function() {
      var f = [];
      return t.dispatch({
        type: xs,
        result: function(m) {
          f.push(m);
        }
      }), Promise.all(f);
    },
    pause: function() {
      t.dispatch({
        type: ks
      });
    },
    persist: function() {
      t.dispatch({
        type: Ds,
        register: o,
        rehydrate: a
      });
    }
  });
  return l.persist(), l;
}
var Fs = {}, Ms = {};
Ms.__esModule = !0;
Ms.default = yb;
function vn(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vn = function(r) {
    return typeof r;
  } : vn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, vn(t);
}
function Di() {
}
var pb = {
  getItem: Di,
  setItem: Di,
  removeItem: Di
};
function mb(t) {
  if ((typeof self > "u" ? "undefined" : vn(self)) !== "object" || !(t in self))
    return !1;
  try {
    var e = self[t], r = "redux-persist ".concat(t, " test");
    e.setItem(r, "test"), e.getItem(r), e.removeItem(r);
  } catch {
    return process.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(t, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function yb(t) {
  var e = "".concat(t, "Storage");
  return mb(e) ? self[e] : (process.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), pb);
}
Fs.__esModule = !0;
Fs.default = vb;
var gb = bb(Ms);
function bb(t) {
  return t && t.__esModule ? t : { default: t };
}
function vb(t) {
  var e = (0, gb.default)(t);
  return {
    getItem: function(n) {
      return new Promise(function(i, s) {
        i(e.getItem(n));
      });
    },
    setItem: function(n, i) {
      return new Promise(function(s, o) {
        s(e.setItem(n, i));
      });
    },
    removeItem: function(n) {
      return new Promise(function(i, s) {
        i(e.removeItem(n));
      });
    }
  };
}
var zc = void 0, wb = Sb(Fs);
function Sb(t) {
  return t && t.__esModule ? t : { default: t };
}
var _b = (0, wb.default)("local");
zc = _b;
const Eb = {
  key: "root",
  storage: zc,
  whitelist: ["auth"]
}, Cb = ab(Eb, Vc), Ob = Dn({
  reducer: Cb,
  middleware: (t) => t({
    serializableCheck: {
      ignoredActions: [xs, ei, ks, Ds, Is, $s]
    }
  })
}), Vb = hb(Ob);
function Ub(t, ...e) {
  const r = ls({ ...Vc, ...t });
  return Dn({
    // devTools: window.isDebug,
    reducer: r,
    middleware: (n) => n({ serializableCheck: !0 }).concat([...e])
  });
}
const Lt = (t, e, r) => {
  const n = t == null ? void 0 : t.find(
    (i) => i.documentDefinition.uniqueKey === e
  );
  if (!n) return !1;
  switch (r) {
    case "create":
      return n.canCreate;
    case "view":
      return n.canView;
    case "edit":
      return n.canEdit;
    case "delete":
      return n.canDelete;
    case "download":
      return n.canDownload;
    default:
      return !1;
  }
}, zb = (t) => {
  const { employeePermissions: e } = ud(ff);
  return {
    canCreate: Lt(e || [], t, "create"),
    canView: Lt(e || [], t, "view"),
    canEdit: Lt(e || [], t, "edit"),
    canDelete: Lt(e || [], t, "delete"),
    canDownload: Lt(e || [], t, "download"),
    checkPermission: (r) => Lt(e || [], t, r)
  };
}, Gb = new dp(), Nb = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, Tb = /^[0-9]{10}$/, qb = /^[a-zA-Z0-9_-]{3,20}$/, Wb = j({
  uid: c().required("Email, mobile number, or username is required").test(
    "is-valid-identifier",
    "Please enter a valid email, mobile number, or username",
    (t) => t ? !!(Nb.test(t) || Tb.test(t) || qb.test(t)) : !1
  ),
  password: c().required("Password is required").min(8, "Password should be at least 8 characters")
}), Kb = (t) => j().shape({
  uid: t === "email" ? c().email("Invalid email address").required("Email is required") : c().matches(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number").required("Mobile number is required"),
  password: c().required("Password is required").min(8, "Password must be at least 8 characters long")
}), Hb = Ps({
  palette: {
    primary: {
      main: "#00cc66",
      light: "#f6fff7",
      dark: " #00994d",
      contrastText: "#ffffff"
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
}), Qb = (t, e, r = "create", n) => {
  const i = (s) => s.map((o) => {
    const a = { ...o };
    return o.children && o.children.length > 0 && (a.children = i(o.children)), o.grandChildren && o.grandChildren.length > 0 && (a.grandChildren = i(o.grandChildren)), a;
  }).filter((o) => {
    const a = Lt(e, o.uniqueKey || "", r), l = o.children && o.children.length > 0 || o.grandChildren && o.grandChildren.length > 0;
    return n ? a || l : a;
  });
  return i(t);
};
export {
  Kb as SignInSchema,
  Pf as addNotification,
  hf as authActionCreators,
  pf as authReducer,
  xb as authRouteConstants,
  ff as authState,
  af as checkAuth,
  Af as clearNotifications,
  Nf as closeDialogBox,
  Ff as closeDrawer,
  lf as closeForgetPasswordDialog,
  Ob as coreStore,
  Ub as createStore,
  Tf as dialogBoxActionCreators,
  qf as dialogBoxReducer,
  du as dialogBoxSlice,
  Fb as dialogBoxState,
  Mf as drawerContainerActionCreators,
  Lf as drawerContainerReducer,
  hu as drawerContainerSlice,
  Lb as drawerContainerState,
  Qb as filterSidebarOptions,
  Lt as hasPermission,
  Db as isSidebarClosingState,
  bf as layoutActionCreators,
  vf as layoutReducer,
  Ib as layoutStates,
  Wb as loginSchema,
  kb as mobileOpenState,
  Hb as muiTheme,
  kf as notificationActionCreators,
  Df as notificationReducer,
  Mb as notificationsState,
  Of as openDialogBox,
  $f as openDrawer,
  df as openForgetPasswordDialog,
  Vb as persistor,
  _f as previewActionCreators,
  Ef as previewReducer,
  lu as previewSlice,
  $b as previewState,
  Gb as queryClient,
  Vc as rootReducer,
  cf as setEmployeePermissions,
  of as setIsLoggedIn,
  gf as setIsSidebarClosing,
  uf as setLoggedInUserInfo,
  yf as setMobileOpen,
  xf as setNotifications,
  Sf as setPreview,
  nf as sliceConstant,
  Ab as stringConstants,
  jb as useActions,
  Pb as useAppDispatch,
  ud as useAppSelector,
  zb as usePermission
};
