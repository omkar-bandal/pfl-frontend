var mn = (t) => {
  throw TypeError(t);
};
var Sr = (t, e, n) => e.has(t) || mn("Cannot " + n);
var ne = (t, e, n) => (Sr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), at = (t, e, n) => e.has(t) ? mn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), ut = (t, e, n, o) => (Sr(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), ct = (t, e, n) => (Sr(t, e, "access private method"), n);
const Oi = {
  //Authentication
  SIGNIN: "/auth/login"
};
var xo = class {
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
};
function yn(t) {
  return JSON.stringify(
    t,
    (e, n) => Fo(n) ? Object.keys(n).sort().reduce((o, s) => (o[s] = n[s], o), {}) : n
  );
}
function jo(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const n in t)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function Fo(t) {
  if (!vn(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const n = e.prototype;
  return !(!vn(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function vn(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Do() {
  let t = [], e = 0, n = (d) => {
    d();
  }, o = (d) => {
    d();
  }, s = (d) => setTimeout(d, 0);
  const u = (d) => {
    e ? t.push(d) : s(() => {
      n(d);
    });
  }, c = () => {
    const d = t;
    t = [], d.length && s(() => {
      o(() => {
        d.forEach((g) => {
          n(g);
        });
      });
    });
  };
  return {
    batch: (d) => {
      let g;
      e++;
      try {
        g = d();
      } finally {
        e--, e || c();
      }
      return g;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (d) => (...g) => {
      u(() => {
        d(...g);
      });
    },
    schedule: u,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (d) => {
      n = d;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (d) => {
      o = d;
    },
    setScheduler: (d) => {
      s = d;
    }
  };
}
var In = Do();
function No() {
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
var Be, Me, be, ke, je, Ht, Ar, Ln, Lo = (Ln = class extends xo {
  constructor(e, n) {
    super();
    at(this, je);
    at(this, Be);
    at(this, Me);
    at(this, be);
    at(this, ke);
    ut(this, Be, e), this.setOptions(n), this.bindMethods(), ct(this, je, Ht).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var o;
    const n = this.options;
    this.options = ne(this, Be).defaultMutationOptions(e), jo(this.options, n) || ne(this, Be).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: ne(this, be),
      observer: this
    }), n != null && n.mutationKey && this.options.mutationKey && yn(n.mutationKey) !== yn(this.options.mutationKey) ? this.reset() : ((o = ne(this, be)) == null ? void 0 : o.state.status) === "pending" && ne(this, be).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = ne(this, be)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    ct(this, je, Ht).call(this), ct(this, je, Ar).call(this, e);
  }
  getCurrentResult() {
    return ne(this, Me);
  }
  reset() {
    var e;
    (e = ne(this, be)) == null || e.removeObserver(this), ut(this, be, void 0), ct(this, je, Ht).call(this), ct(this, je, Ar).call(this);
  }
  mutate(e, n) {
    var o;
    return ut(this, ke, n), (o = ne(this, be)) == null || o.removeObserver(this), ut(this, be, ne(this, Be).getMutationCache().build(ne(this, Be), this.options)), ne(this, be).addObserver(this), ne(this, be).execute(e);
  }
}, Be = new WeakMap(), Me = new WeakMap(), be = new WeakMap(), ke = new WeakMap(), je = new WeakSet(), Ht = function() {
  var n;
  const e = ((n = ne(this, be)) == null ? void 0 : n.state) ?? No();
  ut(this, Me, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Ar = function(e) {
  In.batch(() => {
    var n, o, s, u, c, d, g, v;
    if (ne(this, ke) && this.hasListeners()) {
      const m = ne(this, Me).variables, _ = ne(this, Me).context;
      (e == null ? void 0 : e.type) === "success" ? ((o = (n = ne(this, ke)).onSuccess) == null || o.call(n, e.data, m, _), (u = (s = ne(this, ke)).onSettled) == null || u.call(s, e.data, null, m, _)) : (e == null ? void 0 : e.type) === "error" && ((d = (c = ne(this, ke)).onError) == null || d.call(c, e.error, m, _), (v = (g = ne(this, ke)).onSettled) == null || v.call(
        g,
        void 0,
        e.error,
        m,
        _
      ));
    }
    this.listeners.forEach((m) => {
      m(ne(this, Me));
    });
  });
}, Ln), kr = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function Io() {
  if (bn) return D;
  bn = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function I(l) {
    return l === null || typeof l != "object" ? null : (l = _ && l[_] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var M = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, S = Object.assign, A = {};
  function w(l, b, N) {
    this.props = l, this.context = b, this.refs = A, this.updater = N || M;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(l, b) {
    if (typeof l != "object" && typeof l != "function" && l != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, l, b, "setState");
  }, w.prototype.forceUpdate = function(l) {
    this.updater.enqueueForceUpdate(this, l, "forceUpdate");
  };
  function q() {
  }
  q.prototype = w.prototype;
  function x(l, b, N) {
    this.props = l, this.context = b, this.refs = A, this.updater = N || M;
  }
  var K = x.prototype = new q();
  K.constructor = x, S(K, w.prototype), K.isPureReactComponent = !0;
  var ie = Array.isArray, U = Object.prototype.hasOwnProperty, Q = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(l, b, N) {
    var B, W = {}, X = null, J = null;
    if (b != null) for (B in b.ref !== void 0 && (J = b.ref), b.key !== void 0 && (X = "" + b.key), b) U.call(b, B) && !ce.hasOwnProperty(B) && (W[B] = b[B]);
    var Y = arguments.length - 2;
    if (Y === 1) W.children = N;
    else if (1 < Y) {
      for (var H = Array(Y), ae = 0; ae < Y; ae++) H[ae] = arguments[ae + 2];
      W.children = H;
    }
    if (l && l.defaultProps) for (B in Y = l.defaultProps, Y) W[B] === void 0 && (W[B] = Y[B]);
    return { $$typeof: t, type: l, key: X, ref: J, props: W, _owner: Q.current };
  }
  function Se(l, b) {
    return { $$typeof: t, type: l.type, key: b, ref: l.ref, props: l.props, _owner: l._owner };
  }
  function $e(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }
  function dt(l) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + l.replace(/[=:]/g, function(N) {
      return b[N];
    });
  }
  var qe = /\/+/g;
  function pe(l, b) {
    return typeof l == "object" && l !== null && l.key != null ? dt("" + l.key) : b.toString(36);
  }
  function ye(l, b, N, B, W) {
    var X = typeof l;
    (X === "undefined" || X === "boolean") && (l = null);
    var J = !1;
    if (l === null) J = !0;
    else switch (X) {
      case "string":
      case "number":
        J = !0;
        break;
      case "object":
        switch (l.$$typeof) {
          case t:
          case e:
            J = !0;
        }
    }
    if (J) return J = l, W = W(J), l = B === "" ? "." + pe(J, 0) : B, ie(W) ? (N = "", l != null && (N = l.replace(qe, "$&/") + "/"), ye(W, b, N, "", function(ae) {
      return ae;
    })) : W != null && ($e(W) && (W = Se(W, N + (!W.key || J && J.key === W.key ? "" : ("" + W.key).replace(qe, "$&/") + "/") + l)), b.push(W)), 1;
    if (J = 0, B = B === "" ? "." : B + ":", ie(l)) for (var Y = 0; Y < l.length; Y++) {
      X = l[Y];
      var H = B + pe(X, Y);
      J += ye(X, b, N, H, W);
    }
    else if (H = I(l), typeof H == "function") for (l = H.call(l), Y = 0; !(X = l.next()).done; ) X = X.value, H = B + pe(X, Y++), J += ye(X, b, N, H, W);
    else if (X === "object") throw b = String(l), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return J;
  }
  function le(l, b, N) {
    if (l == null) return l;
    var B = [], W = 0;
    return ye(l, B, "", "", function(X) {
      return b.call(N, X, W++);
    }), B;
  }
  function _e(l) {
    if (l._status === -1) {
      var b = l._result;
      b = b(), b.then(function(N) {
        (l._status === 0 || l._status === -1) && (l._status = 1, l._result = N);
      }, function(N) {
        (l._status === 0 || l._status === -1) && (l._status = 2, l._result = N);
      }), l._status === -1 && (l._status = 0, l._result = b);
    }
    if (l._status === 1) return l._result.default;
    throw l._result;
  }
  var T = { current: null }, Oe = { transition: null }, We = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: Oe, ReactCurrentOwner: Q };
  function Ce() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return D.Children = { map: le, forEach: function(l, b, N) {
    le(l, function() {
      b.apply(this, arguments);
    }, N);
  }, count: function(l) {
    var b = 0;
    return le(l, function() {
      b++;
    }), b;
  }, toArray: function(l) {
    return le(l, function(b) {
      return b;
    }) || [];
  }, only: function(l) {
    if (!$e(l)) throw Error("React.Children.only expected to receive a single React element child.");
    return l;
  } }, D.Component = w, D.Fragment = n, D.Profiler = s, D.PureComponent = x, D.StrictMode = o, D.Suspense = g, D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = We, D.act = Ce, D.cloneElement = function(l, b, N) {
    if (l == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + l + ".");
    var B = S({}, l.props), W = l.key, X = l.ref, J = l._owner;
    if (b != null) {
      if (b.ref !== void 0 && (X = b.ref, J = Q.current), b.key !== void 0 && (W = "" + b.key), l.type && l.type.defaultProps) var Y = l.type.defaultProps;
      for (H in b) U.call(b, H) && !ce.hasOwnProperty(H) && (B[H] = b[H] === void 0 && Y !== void 0 ? Y[H] : b[H]);
    }
    var H = arguments.length - 2;
    if (H === 1) B.children = N;
    else if (1 < H) {
      Y = Array(H);
      for (var ae = 0; ae < H; ae++) Y[ae] = arguments[ae + 2];
      B.children = Y;
    }
    return { $$typeof: t, type: l.type, key: W, ref: X, props: B, _owner: J };
  }, D.createContext = function(l) {
    return l = { $$typeof: c, _currentValue: l, _currentValue2: l, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, l.Provider = { $$typeof: u, _context: l }, l.Consumer = l;
  }, D.createElement = me, D.createFactory = function(l) {
    var b = me.bind(null, l);
    return b.type = l, b;
  }, D.createRef = function() {
    return { current: null };
  }, D.forwardRef = function(l) {
    return { $$typeof: d, render: l };
  }, D.isValidElement = $e, D.lazy = function(l) {
    return { $$typeof: m, _payload: { _status: -1, _result: l }, _init: _e };
  }, D.memo = function(l, b) {
    return { $$typeof: v, type: l, compare: b === void 0 ? null : b };
  }, D.startTransition = function(l) {
    var b = Oe.transition;
    Oe.transition = {};
    try {
      l();
    } finally {
      Oe.transition = b;
    }
  }, D.unstable_act = Ce, D.useCallback = function(l, b) {
    return T.current.useCallback(l, b);
  }, D.useContext = function(l) {
    return T.current.useContext(l);
  }, D.useDebugValue = function() {
  }, D.useDeferredValue = function(l) {
    return T.current.useDeferredValue(l);
  }, D.useEffect = function(l, b) {
    return T.current.useEffect(l, b);
  }, D.useId = function() {
    return T.current.useId();
  }, D.useImperativeHandle = function(l, b, N) {
    return T.current.useImperativeHandle(l, b, N);
  }, D.useInsertionEffect = function(l, b) {
    return T.current.useInsertionEffect(l, b);
  }, D.useLayoutEffect = function(l, b) {
    return T.current.useLayoutEffect(l, b);
  }, D.useMemo = function(l, b) {
    return T.current.useMemo(l, b);
  }, D.useReducer = function(l, b, N) {
    return T.current.useReducer(l, b, N);
  }, D.useRef = function(l) {
    return T.current.useRef(l);
  }, D.useState = function(l) {
    return T.current.useState(l);
  }, D.useSyncExternalStore = function(l, b, N) {
    return T.current.useSyncExternalStore(l, b, N);
  }, D.useTransition = function() {
    return T.current.useTransition();
  }, D.version = "18.3.1", D;
}
var Rt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Rt.exports;
var gn;
function Uo() {
  return gn || (gn = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.3.1", o = Symbol.for("react.element"), s = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), v = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), w = Symbol.iterator, q = "@@iterator";
      function x(r) {
        if (r === null || typeof r != "object")
          return null;
        var i = w && r[w] || r[q];
        return typeof i == "function" ? i : null;
      }
      var K = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {
        transition: null
      }, U = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Q = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {}, me = null;
      function Se(r) {
        me = r;
      }
      ce.setExtraStackFrame = function(r) {
        me = r;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var r = "";
        me && (r += me);
        var i = ce.getCurrentStack;
        return i && (r += i() || ""), r;
      };
      var $e = !1, dt = !1, qe = !1, pe = !1, ye = !1, le = {
        ReactCurrentDispatcher: K,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: Q
      };
      le.ReactDebugCurrentFrame = ce, le.ReactCurrentActQueue = U;
      function _e(r) {
        {
          for (var i = arguments.length, f = new Array(i > 1 ? i - 1 : 0), h = 1; h < i; h++)
            f[h - 1] = arguments[h];
          Oe("warn", r, f);
        }
      }
      function T(r) {
        {
          for (var i = arguments.length, f = new Array(i > 1 ? i - 1 : 0), h = 1; h < i; h++)
            f[h - 1] = arguments[h];
          Oe("error", r, f);
        }
      }
      function Oe(r, i, f) {
        {
          var h = le.ReactDebugCurrentFrame, R = h.getStackAddendum();
          R !== "" && (i += "%s", f = f.concat([R]));
          var C = f.map(function(O) {
            return String(O);
          });
          C.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, C);
        }
      }
      var We = {};
      function Ce(r, i) {
        {
          var f = r.constructor, h = f && (f.displayName || f.name) || "ReactClass", R = h + "." + i;
          if (We[R])
            return;
          T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, h), We[R] = !0;
        }
      }
      var l = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(r) {
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
        enqueueForceUpdate: function(r, i, f) {
          Ce(r, "forceUpdate");
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
        enqueueReplaceState: function(r, i, f, h) {
          Ce(r, "replaceState");
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
        enqueueSetState: function(r, i, f, h) {
          Ce(r, "setState");
        }
      }, b = Object.assign, N = {};
      Object.freeze(N);
      function B(r, i, f) {
        this.props = r, this.context = i, this.refs = N, this.updater = f || l;
      }
      B.prototype.isReactComponent = {}, B.prototype.setState = function(r, i) {
        if (typeof r != "object" && typeof r != "function" && r != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, i, "setState");
      }, B.prototype.forceUpdate = function(r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate");
      };
      {
        var W = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, X = function(r, i) {
          Object.defineProperty(B.prototype, r, {
            get: function() {
              _e("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
            }
          });
        };
        for (var J in W)
          W.hasOwnProperty(J) && X(J, W[J]);
      }
      function Y() {
      }
      Y.prototype = B.prototype;
      function H(r, i, f) {
        this.props = r, this.context = i, this.refs = N, this.updater = f || l;
      }
      var ae = H.prototype = new Y();
      ae.constructor = H, b(ae, B.prototype), ae.isPureReactComponent = !0;
      function tr() {
        var r = {
          current: null
        };
        return Object.seal(r), r;
      }
      var Ot = Array.isArray;
      function et(r) {
        return Ot(r);
      }
      function rr(r) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, f = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
          return f;
        }
      }
      function tt(r) {
        try {
          return Fe(r), !1;
        } catch {
          return !0;
        }
      }
      function Fe(r) {
        return "" + r;
      }
      function Ve(r) {
        if (tt(r))
          return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(r)), Fe(r);
      }
      function Tt(r, i, f) {
        var h = r.displayName;
        if (h)
          return h;
        var R = i.displayName || i.name || "";
        return R !== "" ? f + "(" + R + ")" : f;
      }
      function He(r) {
        return r.displayName || "Context";
      }
      function Te(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case u:
            return "Fragment";
          case s:
            return "Portal";
          case d:
            return "Profiler";
          case c:
            return "StrictMode";
          case _:
            return "Suspense";
          case I:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case v:
              var i = r;
              return He(i) + ".Consumer";
            case g:
              var f = r;
              return He(f._context) + ".Provider";
            case m:
              return Tt(r, r.render, "ForwardRef");
            case M:
              var h = r.displayName || null;
              return h !== null ? h : Te(r.type) || "Memo";
            case S: {
              var R = r, C = R._payload, O = R._init;
              try {
                return Te(O(C));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ze = Object.prototype.hasOwnProperty, rt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ct, Pt, nt;
      nt = {};
      function pt(r) {
        if (ze.call(r, "ref")) {
          var i = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function De(r) {
        if (ze.call(r, "key")) {
          var i = Object.getOwnPropertyDescriptor(r, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function nr(r, i) {
        var f = function() {
          Ct || (Ct = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        f.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: f,
          configurable: !0
        });
      }
      function At(r, i) {
        var f = function() {
          Pt || (Pt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        f.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: f,
          configurable: !0
        });
      }
      function kt(r) {
        if (typeof r.ref == "string" && Q.current && r.__self && Q.current.stateNode !== r.__self) {
          var i = Te(Q.current.type);
          nt[i] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, r.ref), nt[i] = !0);
        }
      }
      var Ye = function(r, i, f, h, R, C, O) {
        var k = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: r,
          key: i,
          ref: f,
          props: O,
          // Record the component responsible for creating this element.
          _owner: C
        };
        return k._store = {}, Object.defineProperty(k._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(k, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: h
        }), Object.defineProperty(k, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: R
        }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
      };
      function or(r, i, f) {
        var h, R = {}, C = null, O = null, k = null, $ = null;
        if (i != null) {
          pt(i) && (O = i.ref, kt(i)), De(i) && (Ve(i.key), C = "" + i.key), k = i.__self === void 0 ? null : i.__self, $ = i.__source === void 0 ? null : i.__source;
          for (h in i)
            ze.call(i, h) && !rt.hasOwnProperty(h) && (R[h] = i[h]);
        }
        var G = arguments.length - 2;
        if (G === 1)
          R.children = f;
        else if (G > 1) {
          for (var Z = Array(G), ee = 0; ee < G; ee++)
            Z[ee] = arguments[ee + 2];
          Object.freeze && Object.freeze(Z), R.children = Z;
        }
        if (r && r.defaultProps) {
          var re = r.defaultProps;
          for (h in re)
            R[h] === void 0 && (R[h] = re[h]);
        }
        if (C || O) {
          var ue = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          C && nr(R, ue), O && At(R, ue);
        }
        return Ye(r, C, O, k, $, Q.current, R);
      }
      function sr(r, i) {
        var f = Ye(r.type, i, r.ref, r._self, r._source, r._owner, r.props);
        return f;
      }
      function ir(r, i, f) {
        if (r == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
        var h, R = b({}, r.props), C = r.key, O = r.ref, k = r._self, $ = r._source, G = r._owner;
        if (i != null) {
          pt(i) && (O = i.ref, G = Q.current), De(i) && (Ve(i.key), C = "" + i.key);
          var Z;
          r.type && r.type.defaultProps && (Z = r.type.defaultProps);
          for (h in i)
            ze.call(i, h) && !rt.hasOwnProperty(h) && (i[h] === void 0 && Z !== void 0 ? R[h] = Z[h] : R[h] = i[h]);
        }
        var ee = arguments.length - 2;
        if (ee === 1)
          R.children = f;
        else if (ee > 1) {
          for (var re = Array(ee), ue = 0; ue < ee; ue++)
            re[ue] = arguments[ue + 2];
          R.children = re;
        }
        return Ye(r.type, C, O, k, $, G, R);
      }
      function Ne(r) {
        return typeof r == "object" && r !== null && r.$$typeof === o;
      }
      var xt = ".", ar = ":";
      function ur(r) {
        var i = /[=:]/g, f = {
          "=": "=0",
          ":": "=2"
        }, h = r.replace(i, function(R) {
          return f[R];
        });
        return "$" + h;
      }
      var ot = !1, jt = /\/+/g;
      function Pe(r) {
        return r.replace(jt, "$&/");
      }
      function Ke(r, i) {
        return typeof r == "object" && r !== null && r.key != null ? (Ve(r.key), ur("" + r.key)) : i.toString(36);
      }
      function Le(r, i, f, h, R) {
        var C = typeof r;
        (C === "undefined" || C === "boolean") && (r = null);
        var O = !1;
        if (r === null)
          O = !0;
        else
          switch (C) {
            case "string":
            case "number":
              O = !0;
              break;
            case "object":
              switch (r.$$typeof) {
                case o:
                case s:
                  O = !0;
              }
          }
        if (O) {
          var k = r, $ = R(k), G = h === "" ? xt + Ke(k, 0) : h;
          if (et($)) {
            var Z = "";
            G != null && (Z = Pe(G) + "/"), Le($, i, Z, "", function(ko) {
              return ko;
            });
          } else $ != null && (Ne($) && ($.key && (!k || k.key !== $.key) && Ve($.key), $ = sr(
            $,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            f + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            ($.key && (!k || k.key !== $.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Pe("" + $.key) + "/"
            ) : "") + G
          )), i.push($));
          return 1;
        }
        var ee, re, ue = 0, de = h === "" ? xt : h + ar;
        if (et(r))
          for (var Vt = 0; Vt < r.length; Vt++)
            ee = r[Vt], re = de + Ke(ee, Vt), ue += Le(ee, i, f, re, R);
        else {
          var wr = x(r);
          if (typeof wr == "function") {
            var dn = r;
            wr === dn.entries && (ot || _e("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ot = !0);
            for (var Po = wr.call(dn), pn, Ao = 0; !(pn = Po.next()).done; )
              ee = pn.value, re = de + Ke(ee, Ao++), ue += Le(ee, i, f, re, R);
          } else if (C === "object") {
            var hn = String(r);
            throw new Error("Objects are not valid as a React child (found: " + (hn === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : hn) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ue;
      }
      function Je(r, i, f) {
        if (r == null)
          return r;
        var h = [], R = 0;
        return Le(r, h, "", "", function(C) {
          return i.call(f, C, R++);
        }), h;
      }
      function cr(r) {
        var i = 0;
        return Je(r, function() {
          i++;
        }), i;
      }
      function Ft(r, i, f) {
        Je(r, function() {
          i.apply(this, arguments);
        }, f);
      }
      function lr(r) {
        return Je(r, function(i) {
          return i;
        }) || [];
      }
      function Dt(r) {
        if (!Ne(r))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return r;
      }
      function Nt(r) {
        var i = {
          $$typeof: v,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: r,
          _currentValue2: r,
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
        i.Provider = {
          $$typeof: g,
          _context: i
        };
        var f = !1, h = !1, R = !1;
        {
          var C = {
            $$typeof: v,
            _context: i
          };
          Object.defineProperties(C, {
            Provider: {
              get: function() {
                return h || (h = !0, T("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), i.Provider;
              },
              set: function(O) {
                i.Provider = O;
              }
            },
            _currentValue: {
              get: function() {
                return i._currentValue;
              },
              set: function(O) {
                i._currentValue = O;
              }
            },
            _currentValue2: {
              get: function() {
                return i._currentValue2;
              },
              set: function(O) {
                i._currentValue2 = O;
              }
            },
            _threadCount: {
              get: function() {
                return i._threadCount;
              },
              set: function(O) {
                i._threadCount = O;
              }
            },
            Consumer: {
              get: function() {
                return f || (f = !0, T("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), i.Consumer;
              }
            },
            displayName: {
              get: function() {
                return i.displayName;
              },
              set: function(O) {
                R || (_e("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", O), R = !0);
              }
            }
          }), i.Consumer = C;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var Ge = -1, ht = 0, mt = 1, Lt = 2;
      function fr(r) {
        if (r._status === Ge) {
          var i = r._result, f = i();
          if (f.then(function(C) {
            if (r._status === ht || r._status === Ge) {
              var O = r;
              O._status = mt, O._result = C;
            }
          }, function(C) {
            if (r._status === ht || r._status === Ge) {
              var O = r;
              O._status = Lt, O._result = C;
            }
          }), r._status === Ge) {
            var h = r;
            h._status = ht, h._result = f;
          }
        }
        if (r._status === mt) {
          var R = r._result;
          return R === void 0 && T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, R), "default" in R || T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, R), R.default;
        } else
          throw r._result;
      }
      function dr(r) {
        var i = {
          // We use these fields to store the result.
          _status: Ge,
          _result: r
        }, f = {
          $$typeof: S,
          _payload: i,
          _init: fr
        };
        {
          var h, R;
          Object.defineProperties(f, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return h;
              },
              set: function(C) {
                T("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), h = C, Object.defineProperty(f, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return R;
              },
              set: function(C) {
                T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), R = C, Object.defineProperty(f, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return f;
      }
      function pr(r) {
        r != null && r.$$typeof === M ? T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof r != "function" ? T("forwardRef requires a render function but was given %s.", r === null ? "null" : typeof r) : r.length !== 0 && r.length !== 2 && T("forwardRef render functions accept exactly two parameters: props and ref. %s", r.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), r != null && (r.defaultProps != null || r.propTypes != null) && T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var i = {
          $$typeof: m,
          render: r
        };
        {
          var f;
          Object.defineProperty(i, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return f;
            },
            set: function(h) {
              f = h, !r.name && !r.displayName && (r.displayName = h);
            }
          });
        }
        return i;
      }
      var It;
      It = Symbol.for("react.module.reference");
      function a(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === u || r === d || ye || r === c || r === _ || r === I || pe || r === A || $e || dt || qe || typeof r == "object" && r !== null && (r.$$typeof === S || r.$$typeof === M || r.$$typeof === g || r.$$typeof === v || r.$$typeof === m || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        r.$$typeof === It || r.getModuleId !== void 0));
      }
      function y(r, i) {
        a(r) || T("memo: The first argument must be a component. Instead received: %s", r === null ? "null" : typeof r);
        var f = {
          $$typeof: M,
          type: r,
          compare: i === void 0 ? null : i
        };
        {
          var h;
          Object.defineProperty(f, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return h;
            },
            set: function(R) {
              h = R, !r.name && !r.displayName && (r.displayName = R);
            }
          });
        }
        return f;
      }
      function E() {
        var r = K.current;
        return r === null && T(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), r;
      }
      function P(r) {
        var i = E();
        if (r._context !== void 0) {
          var f = r._context;
          f.Consumer === r ? T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : f.Provider === r && T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return i.useContext(r);
      }
      function V(r) {
        var i = E();
        return i.useState(r);
      }
      function z(r, i, f) {
        var h = E();
        return h.useReducer(r, i, f);
      }
      function L(r) {
        var i = E();
        return i.useRef(r);
      }
      function F(r, i) {
        var f = E();
        return f.useEffect(r, i);
      }
      function fe(r, i) {
        var f = E();
        return f.useInsertionEffect(r, i);
      }
      function te(r, i) {
        var f = E();
        return f.useLayoutEffect(r, i);
      }
      function se(r, i) {
        var f = E();
        return f.useCallback(r, i);
      }
      function ve(r, i) {
        var f = E();
        return f.useMemo(r, i);
      }
      function Ie(r, i, f) {
        var h = E();
        return h.useImperativeHandle(r, i, f);
      }
      function Ae(r, i) {
        {
          var f = E();
          return f.useDebugValue(r, i);
        }
      }
      function he() {
        var r = E();
        return r.useTransition();
      }
      function yt(r) {
        var i = E();
        return i.useDeferredValue(r);
      }
      function hr() {
        var r = E();
        return r.useId();
      }
      function mr(r, i, f) {
        var h = E();
        return h.useSyncExternalStore(r, i, f);
      }
      var vt = 0, Vr, Hr, zr, Yr, Kr, Jr, Gr;
      function Xr() {
      }
      Xr.__reactDisabledLog = !0;
      function co() {
        {
          if (vt === 0) {
            Vr = console.log, Hr = console.info, zr = console.warn, Yr = console.error, Kr = console.group, Jr = console.groupCollapsed, Gr = console.groupEnd;
            var r = {
              configurable: !0,
              enumerable: !0,
              value: Xr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: r,
              log: r,
              warn: r,
              error: r,
              group: r,
              groupCollapsed: r,
              groupEnd: r
            });
          }
          vt++;
        }
      }
      function lo() {
        {
          if (vt--, vt === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: b({}, r, {
                value: Vr
              }),
              info: b({}, r, {
                value: Hr
              }),
              warn: b({}, r, {
                value: zr
              }),
              error: b({}, r, {
                value: Yr
              }),
              group: b({}, r, {
                value: Kr
              }),
              groupCollapsed: b({}, r, {
                value: Jr
              }),
              groupEnd: b({}, r, {
                value: Gr
              })
            });
          }
          vt < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var yr = le.ReactCurrentDispatcher, vr;
      function Ut(r, i, f) {
        {
          if (vr === void 0)
            try {
              throw Error();
            } catch (R) {
              var h = R.stack.trim().match(/\n( *(at )?)/);
              vr = h && h[1] || "";
            }
          return `
` + vr + r;
        }
      }
      var br = !1, Bt;
      {
        var fo = typeof WeakMap == "function" ? WeakMap : Map;
        Bt = new fo();
      }
      function Qr(r, i) {
        if (!r || br)
          return "";
        {
          var f = Bt.get(r);
          if (f !== void 0)
            return f;
        }
        var h;
        br = !0;
        var R = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var C;
        C = yr.current, yr.current = null, co();
        try {
          if (i) {
            var O = function() {
              throw Error();
            };
            if (Object.defineProperty(O.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(O, []);
              } catch (de) {
                h = de;
              }
              Reflect.construct(r, [], O);
            } else {
              try {
                O.call();
              } catch (de) {
                h = de;
              }
              r.call(O.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (de) {
              h = de;
            }
            r();
          }
        } catch (de) {
          if (de && h && typeof de.stack == "string") {
            for (var k = de.stack.split(`
`), $ = h.stack.split(`
`), G = k.length - 1, Z = $.length - 1; G >= 1 && Z >= 0 && k[G] !== $[Z]; )
              Z--;
            for (; G >= 1 && Z >= 0; G--, Z--)
              if (k[G] !== $[Z]) {
                if (G !== 1 || Z !== 1)
                  do
                    if (G--, Z--, Z < 0 || k[G] !== $[Z]) {
                      var ee = `
` + k[G].replace(" at new ", " at ");
                      return r.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", r.displayName)), typeof r == "function" && Bt.set(r, ee), ee;
                    }
                  while (G >= 1 && Z >= 0);
                break;
              }
          }
        } finally {
          br = !1, yr.current = C, lo(), Error.prepareStackTrace = R;
        }
        var re = r ? r.displayName || r.name : "", ue = re ? Ut(re) : "";
        return typeof r == "function" && Bt.set(r, ue), ue;
      }
      function po(r, i, f) {
        return Qr(r, !1);
      }
      function ho(r) {
        var i = r.prototype;
        return !!(i && i.isReactComponent);
      }
      function Mt(r, i, f) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return Qr(r, ho(r));
        if (typeof r == "string")
          return Ut(r);
        switch (r) {
          case _:
            return Ut("Suspense");
          case I:
            return Ut("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case m:
              return po(r.render);
            case M:
              return Mt(r.type, i, f);
            case S: {
              var h = r, R = h._payload, C = h._init;
              try {
                return Mt(C(R), i, f);
              } catch {
              }
            }
          }
        return "";
      }
      var Zr = {}, en = le.ReactDebugCurrentFrame;
      function $t(r) {
        if (r) {
          var i = r._owner, f = Mt(r.type, r._source, i ? i.type : null);
          en.setExtraStackFrame(f);
        } else
          en.setExtraStackFrame(null);
      }
      function mo(r, i, f, h, R) {
        {
          var C = Function.call.bind(ze);
          for (var O in r)
            if (C(r, O)) {
              var k = void 0;
              try {
                if (typeof r[O] != "function") {
                  var $ = Error((h || "React class") + ": " + f + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw $.name = "Invariant Violation", $;
                }
                k = r[O](i, O, h, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (G) {
                k = G;
              }
              k && !(k instanceof Error) && ($t(R), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", f, O, typeof k), $t(null)), k instanceof Error && !(k.message in Zr) && (Zr[k.message] = !0, $t(R), T("Failed %s type: %s", f, k.message), $t(null));
            }
        }
      }
      function st(r) {
        if (r) {
          var i = r._owner, f = Mt(r.type, r._source, i ? i.type : null);
          Se(f);
        } else
          Se(null);
      }
      var gr;
      gr = !1;
      function tn() {
        if (Q.current) {
          var r = Te(Q.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
      function yo(r) {
        if (r !== void 0) {
          var i = r.fileName.replace(/^.*[\\\/]/, ""), f = r.lineNumber;
          return `

Check your code at ` + i + ":" + f + ".";
        }
        return "";
      }
      function vo(r) {
        return r != null ? yo(r.__source) : "";
      }
      var rn = {};
      function bo(r) {
        var i = tn();
        if (!i) {
          var f = typeof r == "string" ? r : r.displayName || r.name;
          f && (i = `

Check the top-level render call using <` + f + ">.");
        }
        return i;
      }
      function nn(r, i) {
        if (!(!r._store || r._store.validated || r.key != null)) {
          r._store.validated = !0;
          var f = bo(i);
          if (!rn[f]) {
            rn[f] = !0;
            var h = "";
            r && r._owner && r._owner !== Q.current && (h = " It was passed a child from " + Te(r._owner.type) + "."), st(r), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, h), st(null);
          }
        }
      }
      function on(r, i) {
        if (typeof r == "object") {
          if (et(r))
            for (var f = 0; f < r.length; f++) {
              var h = r[f];
              Ne(h) && nn(h, i);
            }
          else if (Ne(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var R = x(r);
            if (typeof R == "function" && R !== r.entries)
              for (var C = R.call(r), O; !(O = C.next()).done; )
                Ne(O.value) && nn(O.value, i);
          }
        }
      }
      function sn(r) {
        {
          var i = r.type;
          if (i == null || typeof i == "string")
            return;
          var f;
          if (typeof i == "function")
            f = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === m || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === M))
            f = i.propTypes;
          else
            return;
          if (f) {
            var h = Te(i);
            mo(f, r.props, "prop", h, r);
          } else if (i.PropTypes !== void 0 && !gr) {
            gr = !0;
            var R = Te(i);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function go(r) {
        {
          for (var i = Object.keys(r.props), f = 0; f < i.length; f++) {
            var h = i[f];
            if (h !== "children" && h !== "key") {
              st(r), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), st(null);
              break;
            }
          }
          r.ref !== null && (st(r), T("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
        }
      }
      function an(r, i, f) {
        var h = a(r);
        if (!h) {
          var R = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = vo(i);
          C ? R += C : R += tn();
          var O;
          r === null ? O = "null" : et(r) ? O = "array" : r !== void 0 && r.$$typeof === o ? (O = "<" + (Te(r.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : O = typeof r, T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, R);
        }
        var k = or.apply(this, arguments);
        if (k == null)
          return k;
        if (h)
          for (var $ = 2; $ < arguments.length; $++)
            on(arguments[$], r);
        return r === u ? go(k) : sn(k), k;
      }
      var un = !1;
      function Eo(r) {
        var i = an.bind(null, r);
        return i.type = r, un || (un = !0, _e("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return _e("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: r
            }), r;
          }
        }), i;
      }
      function Ro(r, i, f) {
        for (var h = ir.apply(this, arguments), R = 2; R < arguments.length; R++)
          on(arguments[R], h.type);
        return sn(h), h;
      }
      function _o(r, i) {
        var f = ie.transition;
        ie.transition = {};
        var h = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          r();
        } finally {
          if (ie.transition = f, f === null && h._updatedFibers) {
            var R = h._updatedFibers.size;
            R > 10 && _e("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), h._updatedFibers.clear();
          }
        }
      }
      var cn = !1, qt = null;
      function wo(r) {
        if (qt === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), f = t && t[i];
            qt = f.call(t, "timers").setImmediate;
          } catch {
            qt = function(R) {
              cn === !1 && (cn = !0, typeof MessageChannel > "u" && T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var C = new MessageChannel();
              C.port1.onmessage = R, C.port2.postMessage(void 0);
            };
          }
        return qt(r);
      }
      var it = 0, ln = !1;
      function fn(r) {
        {
          var i = it;
          it++, U.current === null && (U.current = []);
          var f = U.isBatchingLegacy, h;
          try {
            if (U.isBatchingLegacy = !0, h = r(), !f && U.didScheduleLegacyUpdate) {
              var R = U.current;
              R !== null && (U.didScheduleLegacyUpdate = !1, _r(R));
            }
          } catch (re) {
            throw Wt(i), re;
          } finally {
            U.isBatchingLegacy = f;
          }
          if (h !== null && typeof h == "object" && typeof h.then == "function") {
            var C = h, O = !1, k = {
              then: function(re, ue) {
                O = !0, C.then(function(de) {
                  Wt(i), it === 0 ? Er(de, re, ue) : re(de);
                }, function(de) {
                  Wt(i), ue(de);
                });
              }
            };
            return !ln && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              O || (ln = !0, T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), k;
          } else {
            var $ = h;
            if (Wt(i), it === 0) {
              var G = U.current;
              G !== null && (_r(G), U.current = null);
              var Z = {
                then: function(re, ue) {
                  U.current === null ? (U.current = [], Er($, re, ue)) : re($);
                }
              };
              return Z;
            } else {
              var ee = {
                then: function(re, ue) {
                  re($);
                }
              };
              return ee;
            }
          }
        }
      }
      function Wt(r) {
        r !== it - 1 && T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), it = r;
      }
      function Er(r, i, f) {
        {
          var h = U.current;
          if (h !== null)
            try {
              _r(h), wo(function() {
                h.length === 0 ? (U.current = null, i(r)) : Er(r, i, f);
              });
            } catch (R) {
              f(R);
            }
          else
            i(r);
        }
      }
      var Rr = !1;
      function _r(r) {
        if (!Rr) {
          Rr = !0;
          var i = 0;
          try {
            for (; i < r.length; i++) {
              var f = r[i];
              do
                f = f(!0);
              while (f !== null);
            }
            r.length = 0;
          } catch (h) {
            throw r = r.slice(i + 1), h;
          } finally {
            Rr = !1;
          }
        }
      }
      var So = an, Oo = Ro, To = Eo, Co = {
        map: Je,
        forEach: Ft,
        count: cr,
        toArray: lr,
        only: Dt
      };
      e.Children = Co, e.Component = B, e.Fragment = u, e.Profiler = d, e.PureComponent = H, e.StrictMode = c, e.Suspense = _, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, e.act = fn, e.cloneElement = Oo, e.createContext = Nt, e.createElement = So, e.createFactory = To, e.createRef = tr, e.forwardRef = pr, e.isValidElement = Ne, e.lazy = dr, e.memo = y, e.startTransition = _o, e.unstable_act = fn, e.useCallback = se, e.useContext = P, e.useDebugValue = Ae, e.useDeferredValue = yt, e.useEffect = F, e.useId = hr, e.useImperativeHandle = Ie, e.useInsertionEffect = fe, e.useLayoutEffect = te, e.useMemo = ve, e.useReducer = z, e.useRef = L, e.useState = V, e.useSyncExternalStore = mr, e.useTransition = he, e.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Rt, Rt.exports)), Rt.exports;
}
process.env.NODE_ENV === "production" ? kr.exports = Io() : kr.exports = Uo();
var xe = kr.exports, bt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function Bo() {
  if (En) return bt;
  En = 1;
  var t = xe, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, g, v) {
    var m, _ = {}, I = null, M = null;
    v !== void 0 && (I = "" + v), g.key !== void 0 && (I = "" + g.key), g.ref !== void 0 && (M = g.ref);
    for (m in g) o.call(g, m) && !u.hasOwnProperty(m) && (_[m] = g[m]);
    if (d && d.defaultProps) for (m in g = d.defaultProps, g) _[m] === void 0 && (_[m] = g[m]);
    return { $$typeof: e, type: d, key: I, ref: M, props: _, _owner: s.current };
  }
  return bt.Fragment = n, bt.jsx = c, bt.jsxs = c, bt;
}
var gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Mo() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = xe, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), S = Symbol.iterator, A = "@@iterator";
    function w(a) {
      if (a === null || typeof a != "object")
        return null;
      var y = S && a[S] || a[A];
      return typeof y == "function" ? y : null;
    }
    var q = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(a) {
      {
        for (var y = arguments.length, E = new Array(y > 1 ? y - 1 : 0), P = 1; P < y; P++)
          E[P - 1] = arguments[P];
        K("error", a, E);
      }
    }
    function K(a, y, E) {
      {
        var P = q.ReactDebugCurrentFrame, V = P.getStackAddendum();
        V !== "" && (y += "%s", E = E.concat([V]));
        var z = E.map(function(L) {
          return String(L);
        });
        z.unshift("Warning: " + y), Function.prototype.apply.call(console[a], console, z);
      }
    }
    var ie = !1, U = !1, Q = !1, ce = !1, me = !1, Se;
    Se = Symbol.for("react.module.reference");
    function $e(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === o || a === u || me || a === s || a === v || a === m || ce || a === M || ie || U || Q || typeof a == "object" && a !== null && (a.$$typeof === I || a.$$typeof === _ || a.$$typeof === c || a.$$typeof === d || a.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Se || a.getModuleId !== void 0));
    }
    function dt(a, y, E) {
      var P = a.displayName;
      if (P)
        return P;
      var V = y.displayName || y.name || "";
      return V !== "" ? E + "(" + V + ")" : E;
    }
    function qe(a) {
      return a.displayName || "Context";
    }
    function pe(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case s:
          return "StrictMode";
        case v:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case d:
            var y = a;
            return qe(y) + ".Consumer";
          case c:
            var E = a;
            return qe(E._context) + ".Provider";
          case g:
            return dt(a, a.render, "ForwardRef");
          case _:
            var P = a.displayName || null;
            return P !== null ? P : pe(a.type) || "Memo";
          case I: {
            var V = a, z = V._payload, L = V._init;
            try {
              return pe(L(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ye = Object.assign, le = 0, _e, T, Oe, We, Ce, l, b;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function B() {
      {
        if (le === 0) {
          _e = console.log, T = console.info, Oe = console.warn, We = console.error, Ce = console.group, l = console.groupCollapsed, b = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: N,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        le++;
      }
    }
    function W() {
      {
        if (le--, le === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ye({}, a, {
              value: _e
            }),
            info: ye({}, a, {
              value: T
            }),
            warn: ye({}, a, {
              value: Oe
            }),
            error: ye({}, a, {
              value: We
            }),
            group: ye({}, a, {
              value: Ce
            }),
            groupCollapsed: ye({}, a, {
              value: l
            }),
            groupEnd: ye({}, a, {
              value: b
            })
          });
        }
        le < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = q.ReactCurrentDispatcher, J;
    function Y(a, y, E) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (V) {
            var P = V.stack.trim().match(/\n( *(at )?)/);
            J = P && P[1] || "";
          }
        return `
` + J + a;
      }
    }
    var H = !1, ae;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new tr();
    }
    function Ot(a, y) {
      if (!a || H)
        return "";
      {
        var E = ae.get(a);
        if (E !== void 0)
          return E;
      }
      var P;
      H = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = X.current, X.current = null, B();
      try {
        if (y) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (he) {
              P = he;
            }
            Reflect.construct(a, [], L);
          } else {
            try {
              L.call();
            } catch (he) {
              P = he;
            }
            a.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            P = he;
          }
          a();
        }
      } catch (he) {
        if (he && P && typeof he.stack == "string") {
          for (var F = he.stack.split(`
`), fe = P.stack.split(`
`), te = F.length - 1, se = fe.length - 1; te >= 1 && se >= 0 && F[te] !== fe[se]; )
            se--;
          for (; te >= 1 && se >= 0; te--, se--)
            if (F[te] !== fe[se]) {
              if (te !== 1 || se !== 1)
                do
                  if (te--, se--, se < 0 || F[te] !== fe[se]) {
                    var ve = `
` + F[te].replace(" at new ", " at ");
                    return a.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", a.displayName)), typeof a == "function" && ae.set(a, ve), ve;
                  }
                while (te >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        H = !1, X.current = z, W(), Error.prepareStackTrace = V;
      }
      var Ie = a ? a.displayName || a.name : "", Ae = Ie ? Y(Ie) : "";
      return typeof a == "function" && ae.set(a, Ae), Ae;
    }
    function et(a, y, E) {
      return Ot(a, !1);
    }
    function rr(a) {
      var y = a.prototype;
      return !!(y && y.isReactComponent);
    }
    function tt(a, y, E) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Ot(a, rr(a));
      if (typeof a == "string")
        return Y(a);
      switch (a) {
        case v:
          return Y("Suspense");
        case m:
          return Y("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case g:
            return et(a.render);
          case _:
            return tt(a.type, y, E);
          case I: {
            var P = a, V = P._payload, z = P._init;
            try {
              return tt(z(V), y, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Fe = Object.prototype.hasOwnProperty, Ve = {}, Tt = q.ReactDebugCurrentFrame;
    function He(a) {
      if (a) {
        var y = a._owner, E = tt(a.type, a._source, y ? y.type : null);
        Tt.setExtraStackFrame(E);
      } else
        Tt.setExtraStackFrame(null);
    }
    function Te(a, y, E, P, V) {
      {
        var z = Function.call.bind(Fe);
        for (var L in a)
          if (z(a, L)) {
            var F = void 0;
            try {
              if (typeof a[L] != "function") {
                var fe = Error((P || "React class") + ": " + E + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw fe.name = "Invariant Violation", fe;
              }
              F = a[L](y, L, P, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              F = te;
            }
            F && !(F instanceof Error) && (He(V), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", E, L, typeof F), He(null)), F instanceof Error && !(F.message in Ve) && (Ve[F.message] = !0, He(V), x("Failed %s type: %s", E, F.message), He(null));
          }
      }
    }
    var ze = Array.isArray;
    function rt(a) {
      return ze(a);
    }
    function Ct(a) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, E = y && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return E;
      }
    }
    function Pt(a) {
      try {
        return nt(a), !1;
      } catch {
        return !0;
      }
    }
    function nt(a) {
      return "" + a;
    }
    function pt(a) {
      if (Pt(a))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ct(a)), nt(a);
    }
    var De = q.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, kt, Ye;
    Ye = {};
    function or(a) {
      if (Fe.call(a, "ref")) {
        var y = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function sr(a) {
      if (Fe.call(a, "key")) {
        var y = Object.getOwnPropertyDescriptor(a, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function ir(a, y) {
      if (typeof a.ref == "string" && De.current && y && De.current.stateNode !== y) {
        var E = pe(De.current.type);
        Ye[E] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', pe(De.current.type), a.ref), Ye[E] = !0);
      }
    }
    function Ne(a, y) {
      {
        var E = function() {
          At || (At = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        E.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function xt(a, y) {
      {
        var E = function() {
          kt || (kt = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        E.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var ar = function(a, y, E, P, V, z, L) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: a,
        key: y,
        ref: E,
        props: L,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(F, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function ur(a, y, E, P, V) {
      {
        var z, L = {}, F = null, fe = null;
        E !== void 0 && (pt(E), F = "" + E), sr(y) && (pt(y.key), F = "" + y.key), or(y) && (fe = y.ref, ir(y, V));
        for (z in y)
          Fe.call(y, z) && !nr.hasOwnProperty(z) && (L[z] = y[z]);
        if (a && a.defaultProps) {
          var te = a.defaultProps;
          for (z in te)
            L[z] === void 0 && (L[z] = te[z]);
        }
        if (F || fe) {
          var se = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          F && Ne(L, se), fe && xt(L, se);
        }
        return ar(a, F, fe, V, P, De.current, L);
      }
    }
    var ot = q.ReactCurrentOwner, jt = q.ReactDebugCurrentFrame;
    function Pe(a) {
      if (a) {
        var y = a._owner, E = tt(a.type, a._source, y ? y.type : null);
        jt.setExtraStackFrame(E);
      } else
        jt.setExtraStackFrame(null);
    }
    var Ke;
    Ke = !1;
    function Le(a) {
      return typeof a == "object" && a !== null && a.$$typeof === e;
    }
    function Je() {
      {
        if (ot.current) {
          var a = pe(ot.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function cr(a) {
      return "";
    }
    var Ft = {};
    function lr(a) {
      {
        var y = Je();
        if (!y) {
          var E = typeof a == "string" ? a : a.displayName || a.name;
          E && (y = `

Check the top-level render call using <` + E + ">.");
        }
        return y;
      }
    }
    function Dt(a, y) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var E = lr(y);
        if (Ft[E])
          return;
        Ft[E] = !0;
        var P = "";
        a && a._owner && a._owner !== ot.current && (P = " It was passed a child from " + pe(a._owner.type) + "."), Pe(a), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, P), Pe(null);
      }
    }
    function Nt(a, y) {
      {
        if (typeof a != "object")
          return;
        if (rt(a))
          for (var E = 0; E < a.length; E++) {
            var P = a[E];
            Le(P) && Dt(P, y);
          }
        else if (Le(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var V = w(a);
          if (typeof V == "function" && V !== a.entries)
            for (var z = V.call(a), L; !(L = z.next()).done; )
              Le(L.value) && Dt(L.value, y);
        }
      }
    }
    function Ge(a) {
      {
        var y = a.type;
        if (y == null || typeof y == "string")
          return;
        var E;
        if (typeof y == "function")
          E = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === _))
          E = y.propTypes;
        else
          return;
        if (E) {
          var P = pe(y);
          Te(E, a.props, "prop", P, a);
        } else if (y.PropTypes !== void 0 && !Ke) {
          Ke = !0;
          var V = pe(y);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(a) {
      {
        for (var y = Object.keys(a.props), E = 0; E < y.length; E++) {
          var P = y[E];
          if (P !== "children" && P !== "key") {
            Pe(a), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Pe(null);
            break;
          }
        }
        a.ref !== null && (Pe(a), x("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    var mt = {};
    function Lt(a, y, E, P, V, z) {
      {
        var L = $e(a);
        if (!L) {
          var F = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var fe = cr();
          fe ? F += fe : F += Je();
          var te;
          a === null ? te = "null" : rt(a) ? te = "array" : a !== void 0 && a.$$typeof === e ? (te = "<" + (pe(a.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : te = typeof a, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, F);
        }
        var se = ur(a, y, E, V, z);
        if (se == null)
          return se;
        if (L) {
          var ve = y.children;
          if (ve !== void 0)
            if (P)
              if (rt(ve)) {
                for (var Ie = 0; Ie < ve.length; Ie++)
                  Nt(ve[Ie], a);
                Object.freeze && Object.freeze(ve);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nt(ve, a);
        }
        if (Fe.call(y, "key")) {
          var Ae = pe(a), he = Object.keys(y).filter(function(mr) {
            return mr !== "key";
          }), yt = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mt[Ae + yt]) {
            var hr = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, yt, Ae, hr, Ae), mt[Ae + yt] = !0;
          }
        }
        return a === o ? ht(se) : Ge(se), se;
      }
    }
    function fr(a, y, E) {
      return Lt(a, y, E, !0);
    }
    function dr(a, y, E) {
      return Lt(a, y, E, !1);
    }
    var pr = dr, It = fr;
    gt.Fragment = o, gt.jsx = pr, gt.jsxs = It;
  }()), gt;
}
process.env.NODE_ENV === "production" ? Bo() : Mo();
var $o = xe.createContext(
  void 0
), qo = (t) => {
  const e = xe.useContext($o);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
};
function Wo(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function Vo() {
}
function Ho(t, e) {
  const n = qo(), [o] = xe.useState(
    () => new Lo(
      n,
      t
    )
  );
  xe.useEffect(() => {
    o.setOptions(t);
  }, [o, t]);
  const s = xe.useSyncExternalStore(
    xe.useCallback(
      (c) => o.subscribe(In.batchCalls(c)),
      [o]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), u = xe.useCallback(
    (c, d) => {
      o.mutate(c, d).catch(Vo);
    },
    [o]
  );
  if (s.error && Wo(o.options.throwOnError, [s.error]))
    throw s.error;
  return { ...s, mutate: u, mutateAsync: s.mutate };
}
function Un(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: zo } = Object.prototype, { getPrototypeOf: Br } = Object, Gt = /* @__PURE__ */ ((t) => (e) => {
  const n = zo.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), we = (t) => (t = t.toLowerCase(), (e) => Gt(e) === t), Xt = (t) => (e) => typeof e === t, { isArray: lt } = Array, _t = Xt("undefined");
function Yo(t) {
  return t !== null && !_t(t) && t.constructor !== null && !_t(t.constructor) && Re(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Bn = we("ArrayBuffer");
function Ko(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Bn(t.buffer), e;
}
const Jo = Xt("string"), Re = Xt("function"), Mn = Xt("number"), Qt = (t) => t !== null && typeof t == "object", Go = (t) => t === !0 || t === !1, zt = (t) => {
  if (Gt(t) !== "object")
    return !1;
  const e = Br(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Xo = we("Date"), Qo = we("File"), Zo = we("Blob"), es = we("FileList"), ts = (t) => Qt(t) && Re(t.pipe), rs = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Re(t.append) && ((e = Gt(t)) === "formdata" || // detect form-data instance
  e === "object" && Re(t.toString) && t.toString() === "[object FormData]"));
}, ns = we("URLSearchParams"), [os, ss, is, as] = ["ReadableStream", "Request", "Response", "Headers"].map(we), us = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wt(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let o, s;
  if (typeof t != "object" && (t = [t]), lt(t))
    for (o = 0, s = t.length; o < s; o++)
      e.call(null, t[o], o, t);
  else {
    const u = n ? Object.getOwnPropertyNames(t) : Object.keys(t), c = u.length;
    let d;
    for (o = 0; o < c; o++)
      d = u[o], e.call(null, t[d], d, t);
  }
}
function $n(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let o = n.length, s;
  for (; o-- > 0; )
    if (s = n[o], e === s.toLowerCase())
      return s;
  return null;
}
const Xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, qn = (t) => !_t(t) && t !== Xe;
function xr() {
  const { caseless: t } = qn(this) && this || {}, e = {}, n = (o, s) => {
    const u = t && $n(e, s) || s;
    zt(e[u]) && zt(o) ? e[u] = xr(e[u], o) : zt(o) ? e[u] = xr({}, o) : lt(o) ? e[u] = o.slice() : e[u] = o;
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && wt(arguments[o], n);
  return e;
}
const cs = (t, e, n, { allOwnKeys: o } = {}) => (wt(e, (s, u) => {
  n && Re(s) ? t[u] = Un(s, n) : t[u] = s;
}, { allOwnKeys: o }), t), ls = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), fs = (t, e, n, o) => {
  t.prototype = Object.create(e.prototype, o), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, ds = (t, e, n, o) => {
  let s, u, c;
  const d = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), u = s.length; u-- > 0; )
      c = s[u], (!o || o(c, t, e)) && !d[c] && (e[c] = t[c], d[c] = !0);
    t = n !== !1 && Br(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, ps = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const o = t.indexOf(e, n);
  return o !== -1 && o === n;
}, hs = (t) => {
  if (!t) return null;
  if (lt(t)) return t;
  let e = t.length;
  if (!Mn(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, ms = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Br(Uint8Array)), ys = (t, e) => {
  const o = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = o.next()) && !s.done; ) {
    const u = s.value;
    e.call(t, u[0], u[1]);
  }
}, vs = (t, e) => {
  let n;
  const o = [];
  for (; (n = t.exec(e)) !== null; )
    o.push(n);
  return o;
}, bs = we("HTMLFormElement"), gs = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, o, s) {
    return o.toUpperCase() + s;
  }
), _n = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Es = we("RegExp"), Wn = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), o = {};
  wt(n, (s, u) => {
    let c;
    (c = e(s, u, t)) !== !1 && (o[u] = c || s);
  }), Object.defineProperties(t, o);
}, Rs = (t) => {
  Wn(t, (e, n) => {
    if (Re(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const o = t[n];
    if (Re(o)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, _s = (t, e) => {
  const n = {}, o = (s) => {
    s.forEach((u) => {
      n[u] = !0;
    });
  };
  return lt(t) ? o(t) : o(String(t).split(e)), n;
}, ws = () => {
}, Ss = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, Or = "abcdefghijklmnopqrstuvwxyz", wn = "0123456789", Vn = {
  DIGIT: wn,
  ALPHA: Or,
  ALPHA_DIGIT: Or + Or.toUpperCase() + wn
}, Os = (t = 16, e = Vn.ALPHA_DIGIT) => {
  let n = "";
  const { length: o } = e;
  for (; t--; )
    n += e[Math.random() * o | 0];
  return n;
};
function Ts(t) {
  return !!(t && Re(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Cs = (t) => {
  const e = new Array(10), n = (o, s) => {
    if (Qt(o)) {
      if (e.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        e[s] = o;
        const u = lt(o) ? [] : {};
        return wt(o, (c, d) => {
          const g = n(c, s + 1);
          !_t(g) && (u[d] = g);
        }), e[s] = void 0, u;
      }
    }
    return o;
  };
  return n(t, 0);
}, Ps = we("AsyncFunction"), As = (t) => t && (Qt(t) || Re(t)) && Re(t.then) && Re(t.catch), Hn = ((t, e) => t ? setImmediate : e ? ((n, o) => (Xe.addEventListener("message", ({ source: s, data: u }) => {
  s === Xe && u === n && o.length && o.shift()();
}, !1), (s) => {
  o.push(s), Xe.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Re(Xe.postMessage)
), ks = typeof queueMicrotask < "u" ? queueMicrotask.bind(Xe) : typeof process < "u" && process.nextTick || Hn, p = {
  isArray: lt,
  isArrayBuffer: Bn,
  isBuffer: Yo,
  isFormData: rs,
  isArrayBufferView: Ko,
  isString: Jo,
  isNumber: Mn,
  isBoolean: Go,
  isObject: Qt,
  isPlainObject: zt,
  isReadableStream: os,
  isRequest: ss,
  isResponse: is,
  isHeaders: as,
  isUndefined: _t,
  isDate: Xo,
  isFile: Qo,
  isBlob: Zo,
  isRegExp: Es,
  isFunction: Re,
  isStream: ts,
  isURLSearchParams: ns,
  isTypedArray: ms,
  isFileList: es,
  forEach: wt,
  merge: xr,
  extend: cs,
  trim: us,
  stripBOM: ls,
  inherits: fs,
  toFlatObject: ds,
  kindOf: Gt,
  kindOfTest: we,
  endsWith: ps,
  toArray: hs,
  forEachEntry: ys,
  matchAll: vs,
  isHTMLForm: bs,
  hasOwnProperty: _n,
  hasOwnProp: _n,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Wn,
  freezeMethods: Rs,
  toObjectSet: _s,
  toCamelCase: gs,
  noop: ws,
  toFiniteNumber: Ss,
  findKey: $n,
  global: Xe,
  isContextDefined: qn,
  ALPHABET: Vn,
  generateString: Os,
  isSpecCompliantForm: Ts,
  toJSONObject: Cs,
  isAsyncFn: Ps,
  isThenable: As,
  setImmediate: Hn,
  asap: ks
};
function j(t, e, n, o, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), o && (this.request = o), s && (this.response = s, this.status = s.status ? s.status : null);
}
p.inherits(j, Error, {
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
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const zn = j.prototype, Yn = {};
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
  Yn[t] = { value: t };
});
Object.defineProperties(j, Yn);
Object.defineProperty(zn, "isAxiosError", { value: !0 });
j.from = (t, e, n, o, s, u) => {
  const c = Object.create(zn);
  return p.toFlatObject(t, c, function(g) {
    return g !== Error.prototype;
  }, (d) => d !== "isAxiosError"), j.call(c, t.message, e, n, o, s), c.cause = t, c.name = t.name, u && Object.assign(c, u), c;
};
const xs = null;
function jr(t) {
  return p.isPlainObject(t) || p.isArray(t);
}
function Kn(t) {
  return p.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Sn(t, e, n) {
  return t ? t.concat(e).map(function(s, u) {
    return s = Kn(s), !n && u ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function js(t) {
  return p.isArray(t) && !t.some(jr);
}
const Fs = p.toFlatObject(p, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Zt(t, e, n) {
  if (!p.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = p.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, w) {
    return !p.isUndefined(w[A]);
  });
  const o = n.metaTokens, s = n.visitor || m, u = n.dots, c = n.indexes, g = (n.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(e);
  if (!p.isFunction(s))
    throw new TypeError("visitor must be a function");
  function v(S) {
    if (S === null) return "";
    if (p.isDate(S))
      return S.toISOString();
    if (!g && p.isBlob(S))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(S) || p.isTypedArray(S) ? g && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function m(S, A, w) {
    let q = S;
    if (S && !w && typeof S == "object") {
      if (p.endsWith(A, "{}"))
        A = o ? A : A.slice(0, -2), S = JSON.stringify(S);
      else if (p.isArray(S) && js(S) || (p.isFileList(S) || p.endsWith(A, "[]")) && (q = p.toArray(S)))
        return A = Kn(A), q.forEach(function(K, ie) {
          !(p.isUndefined(K) || K === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? Sn([A], ie, u) : c === null ? A : A + "[]",
            v(K)
          );
        }), !1;
    }
    return jr(S) ? !0 : (e.append(Sn(w, A, u), v(S)), !1);
  }
  const _ = [], I = Object.assign(Fs, {
    defaultVisitor: m,
    convertValue: v,
    isVisitable: jr
  });
  function M(S, A) {
    if (!p.isUndefined(S)) {
      if (_.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      _.push(S), p.forEach(S, function(q, x) {
        (!(p.isUndefined(q) || q === null) && s.call(
          e,
          q,
          p.isString(x) ? x.trim() : x,
          A,
          I
        )) === !0 && M(q, A ? A.concat(x) : [x]);
      }), _.pop();
    }
  }
  if (!p.isObject(t))
    throw new TypeError("data must be an object");
  return M(t), e;
}
function On(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(o) {
    return e[o];
  });
}
function Mr(t, e) {
  this._pairs = [], t && Zt(t, this, e);
}
const Jn = Mr.prototype;
Jn.append = function(e, n) {
  this._pairs.push([e, n]);
};
Jn.toString = function(e) {
  const n = e ? function(o) {
    return e.call(this, o, On);
  } : On;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Ds(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Gn(t, e, n) {
  if (!e)
    return t;
  const o = n && n.encode || Ds, s = n && n.serialize;
  let u;
  if (s ? u = s(e, n) : u = p.isURLSearchParams(e) ? e.toString() : new Mr(e, n).toString(o), u) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + u;
  }
  return t;
}
class Tn {
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
  use(e, n, o) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
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
    p.forEach(this.handlers, function(o) {
      o !== null && e(o);
    });
  }
}
const Xn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ns = typeof URLSearchParams < "u" ? URLSearchParams : Mr, Ls = typeof FormData < "u" ? FormData : null, Is = typeof Blob < "u" ? Blob : null, Us = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ns,
    FormData: Ls,
    Blob: Is
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, $r = typeof window < "u" && typeof document < "u", Fr = typeof navigator == "object" && navigator || void 0, Bs = $r && (!Fr || ["ReactNative", "NativeScript", "NS"].indexOf(Fr.product) < 0), Ms = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", $s = $r && window.location.href || "http://localhost", qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $r,
  hasStandardBrowserEnv: Bs,
  hasStandardBrowserWebWorkerEnv: Ms,
  navigator: Fr,
  origin: $s
}, Symbol.toStringTag, { value: "Module" })), ge = {
  ...qs,
  ...Us
};
function Ws(t, e) {
  return Zt(t, new ge.classes.URLSearchParams(), Object.assign({
    visitor: function(n, o, s, u) {
      return ge.isNode && p.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Vs(t) {
  return p.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Hs(t) {
  const e = {}, n = Object.keys(t);
  let o;
  const s = n.length;
  let u;
  for (o = 0; o < s; o++)
    u = n[o], e[u] = t[u];
  return e;
}
function Qn(t) {
  function e(n, o, s, u) {
    let c = n[u++];
    if (c === "__proto__") return !0;
    const d = Number.isFinite(+c), g = u >= n.length;
    return c = !c && p.isArray(s) ? s.length : c, g ? (p.hasOwnProp(s, c) ? s[c] = [s[c], o] : s[c] = o, !d) : ((!s[c] || !p.isObject(s[c])) && (s[c] = []), e(n, o, s[c], u) && p.isArray(s[c]) && (s[c] = Hs(s[c])), !d);
  }
  if (p.isFormData(t) && p.isFunction(t.entries)) {
    const n = {};
    return p.forEachEntry(t, (o, s) => {
      e(Vs(o), s, n, 0);
    }), n;
  }
  return null;
}
function zs(t, e, n) {
  if (p.isString(t))
    try {
      return (e || JSON.parse)(t), p.trim(t);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (0, JSON.stringify)(t);
}
const St = {
  transitional: Xn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const o = n.getContentType() || "", s = o.indexOf("application/json") > -1, u = p.isObject(e);
    if (u && p.isHTMLForm(e) && (e = new FormData(e)), p.isFormData(e))
      return s ? JSON.stringify(Qn(e)) : e;
    if (p.isArrayBuffer(e) || p.isBuffer(e) || p.isStream(e) || p.isFile(e) || p.isBlob(e) || p.isReadableStream(e))
      return e;
    if (p.isArrayBufferView(e))
      return e.buffer;
    if (p.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let d;
    if (u) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Ws(e, this.formSerializer).toString();
      if ((d = p.isFileList(e)) || o.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return Zt(
          d ? { "files[]": e } : e,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return u || s ? (n.setContentType("application/json", !1), zs(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || St.transitional, o = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (p.isResponse(e) || p.isReadableStream(e))
      return e;
    if (e && p.isString(e) && (o && !this.responseType || s)) {
      const c = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (d) {
        if (c)
          throw d.name === "SyntaxError" ? j.from(d, j.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
    FormData: ge.classes.FormData,
    Blob: ge.classes.Blob
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
p.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  St.headers[t] = {};
});
const Ys = p.toObjectSet([
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
]), Ks = (t) => {
  const e = {};
  let n, o, s;
  return t && t.split(`
`).forEach(function(c) {
    s = c.indexOf(":"), n = c.substring(0, s).trim().toLowerCase(), o = c.substring(s + 1).trim(), !(!n || e[n] && Ys[n]) && (n === "set-cookie" ? e[n] ? e[n].push(o) : e[n] = [o] : e[n] = e[n] ? e[n] + ", " + o : o);
  }), e;
}, Cn = Symbol("internals");
function Et(t) {
  return t && String(t).trim().toLowerCase();
}
function Yt(t) {
  return t === !1 || t == null ? t : p.isArray(t) ? t.map(Yt) : String(t);
}
function Js(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = n.exec(t); )
    e[o[1]] = o[2];
  return e;
}
const Gs = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Tr(t, e, n, o, s) {
  if (p.isFunction(o))
    return o.call(this, e, n);
  if (s && (e = n), !!p.isString(e)) {
    if (p.isString(o))
      return e.indexOf(o) !== -1;
    if (p.isRegExp(o))
      return o.test(e);
  }
}
function Xs(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, o) => n.toUpperCase() + o);
}
function Qs(t, e) {
  const n = p.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(t, o + n, {
      value: function(s, u, c) {
        return this[o].call(this, e, s, u, c);
      },
      configurable: !0
    });
  });
}
class Ee {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, o) {
    const s = this;
    function u(d, g, v) {
      const m = Et(g);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const _ = p.findKey(s, m);
      (!_ || s[_] === void 0 || v === !0 || v === void 0 && s[_] !== !1) && (s[_ || g] = Yt(d));
    }
    const c = (d, g) => p.forEach(d, (v, m) => u(v, m, g));
    if (p.isPlainObject(e) || e instanceof this.constructor)
      c(e, n);
    else if (p.isString(e) && (e = e.trim()) && !Gs(e))
      c(Ks(e), n);
    else if (p.isHeaders(e))
      for (const [d, g] of e.entries())
        u(g, d, o);
    else
      e != null && u(n, e, o);
    return this;
  }
  get(e, n) {
    if (e = Et(e), e) {
      const o = p.findKey(this, e);
      if (o) {
        const s = this[o];
        if (!n)
          return s;
        if (n === !0)
          return Js(s);
        if (p.isFunction(n))
          return n.call(this, s, o);
        if (p.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Et(e), e) {
      const o = p.findKey(this, e);
      return !!(o && this[o] !== void 0 && (!n || Tr(this, this[o], o, n)));
    }
    return !1;
  }
  delete(e, n) {
    const o = this;
    let s = !1;
    function u(c) {
      if (c = Et(c), c) {
        const d = p.findKey(o, c);
        d && (!n || Tr(o, o[d], d, n)) && (delete o[d], s = !0);
      }
    }
    return p.isArray(e) ? e.forEach(u) : u(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let o = n.length, s = !1;
    for (; o--; ) {
      const u = n[o];
      (!e || Tr(this, this[u], u, e, !0)) && (delete this[u], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, o = {};
    return p.forEach(this, (s, u) => {
      const c = p.findKey(o, u);
      if (c) {
        n[c] = Yt(s), delete n[u];
        return;
      }
      const d = e ? Xs(u) : String(u).trim();
      d !== u && delete n[u], n[d] = Yt(s), o[d] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (o, s) => {
      o != null && o !== !1 && (n[s] = e && p.isArray(o) ? o.join(", ") : o);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const o = new this(e);
    return n.forEach((s) => o.set(s)), o;
  }
  static accessor(e) {
    const o = (this[Cn] = this[Cn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function u(c) {
      const d = Et(c);
      o[d] || (Qs(s, c), o[d] = !0);
    }
    return p.isArray(e) ? e.forEach(u) : u(e), this;
  }
}
Ee.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.reduceDescriptors(Ee.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(o) {
      this[n] = o;
    }
  };
});
p.freezeMethods(Ee);
function Cr(t, e) {
  const n = this || St, o = e || n, s = Ee.from(o.headers);
  let u = o.data;
  return p.forEach(t, function(d) {
    u = d.call(n, u, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), u;
}
function Zn(t) {
  return !!(t && t.__CANCEL__);
}
function ft(t, e, n) {
  j.call(this, t ?? "canceled", j.ERR_CANCELED, e, n), this.name = "CanceledError";
}
p.inherits(ft, j, {
  __CANCEL__: !0
});
function eo(t, e, n) {
  const o = n.config.validateStatus;
  !n.status || !o || o(n.status) ? t(n) : e(new j(
    "Request failed with status code " + n.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Zs(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ei(t, e) {
  t = t || 10;
  const n = new Array(t), o = new Array(t);
  let s = 0, u = 0, c;
  return e = e !== void 0 ? e : 1e3, function(g) {
    const v = Date.now(), m = o[u];
    c || (c = v), n[s] = g, o[s] = v;
    let _ = u, I = 0;
    for (; _ !== s; )
      I += n[_++], _ = _ % t;
    if (s = (s + 1) % t, s === u && (u = (u + 1) % t), v - c < e)
      return;
    const M = m && v - m;
    return M ? Math.round(I * 1e3 / M) : void 0;
  };
}
function ti(t, e) {
  let n = 0, o = 1e3 / e, s, u;
  const c = (v, m = Date.now()) => {
    n = m, s = null, u && (clearTimeout(u), u = null), t.apply(null, v);
  };
  return [(...v) => {
    const m = Date.now(), _ = m - n;
    _ >= o ? c(v, m) : (s = v, u || (u = setTimeout(() => {
      u = null, c(s);
    }, o - _)));
  }, () => s && c(s)];
}
const Kt = (t, e, n = 3) => {
  let o = 0;
  const s = ei(50, 250);
  return ti((u) => {
    const c = u.loaded, d = u.lengthComputable ? u.total : void 0, g = c - o, v = s(g), m = c <= d;
    o = c;
    const _ = {
      loaded: c,
      total: d,
      progress: d ? c / d : void 0,
      bytes: g,
      rate: v || void 0,
      estimated: v && d && m ? (d - c) / v : void 0,
      event: u,
      lengthComputable: d != null,
      [e ? "download" : "upload"]: !0
    };
    t(_);
  }, n);
}, Pn = (t, e) => {
  const n = t != null;
  return [(o) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: o
  }), e[1]];
}, An = (t) => (...e) => p.asap(() => t(...e)), ri = ge.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = ge.navigator && /(msie|trident)/i.test(ge.navigator.userAgent), n = document.createElement("a");
    let o;
    function s(u) {
      let c = u;
      return e && (n.setAttribute("href", c), c = n.href), n.setAttribute("href", c), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return o = s(window.location.href), function(c) {
      const d = p.isString(c) ? s(c) : c;
      return d.protocol === o.protocol && d.host === o.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), ni = ge.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, o, s, u) {
      const c = [t + "=" + encodeURIComponent(e)];
      p.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()), p.isString(o) && c.push("path=" + o), p.isString(s) && c.push("domain=" + s), u === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function oi(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function si(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function to(t, e) {
  return t && !oi(e) ? si(t, e) : e;
}
const kn = (t) => t instanceof Ee ? { ...t } : t;
function Ze(t, e) {
  e = e || {};
  const n = {};
  function o(v, m, _) {
    return p.isPlainObject(v) && p.isPlainObject(m) ? p.merge.call({ caseless: _ }, v, m) : p.isPlainObject(m) ? p.merge({}, m) : p.isArray(m) ? m.slice() : m;
  }
  function s(v, m, _) {
    if (p.isUndefined(m)) {
      if (!p.isUndefined(v))
        return o(void 0, v, _);
    } else return o(v, m, _);
  }
  function u(v, m) {
    if (!p.isUndefined(m))
      return o(void 0, m);
  }
  function c(v, m) {
    if (p.isUndefined(m)) {
      if (!p.isUndefined(v))
        return o(void 0, v);
    } else return o(void 0, m);
  }
  function d(v, m, _) {
    if (_ in e)
      return o(v, m);
    if (_ in t)
      return o(void 0, v);
  }
  const g = {
    url: u,
    method: u,
    data: u,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: d,
    headers: (v, m) => s(kn(v), kn(m), !0)
  };
  return p.forEach(Object.keys(Object.assign({}, t, e)), function(m) {
    const _ = g[m] || s, I = _(t[m], e[m], m);
    p.isUndefined(I) && _ !== d || (n[m] = I);
  }), n;
}
const ro = (t) => {
  const e = Ze({}, t);
  let { data: n, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: u, headers: c, auth: d } = e;
  e.headers = c = Ee.from(c), e.url = Gn(to(e.baseURL, e.url), t.params, t.paramsSerializer), d && c.set(
    "Authorization",
    "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))
  );
  let g;
  if (p.isFormData(n)) {
    if (ge.hasStandardBrowserEnv || ge.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((g = c.getContentType()) !== !1) {
      const [v, ...m] = g ? g.split(";").map((_) => _.trim()).filter(Boolean) : [];
      c.setContentType([v || "multipart/form-data", ...m].join("; "));
    }
  }
  if (ge.hasStandardBrowserEnv && (o && p.isFunction(o) && (o = o(e)), o || o !== !1 && ri(e.url))) {
    const v = s && u && ni.read(u);
    v && c.set(s, v);
  }
  return e;
}, ii = typeof XMLHttpRequest < "u", ai = ii && function(t) {
  return new Promise(function(n, o) {
    const s = ro(t);
    let u = s.data;
    const c = Ee.from(s.headers).normalize();
    let { responseType: d, onUploadProgress: g, onDownloadProgress: v } = s, m, _, I, M, S;
    function A() {
      M && M(), S && S(), s.cancelToken && s.cancelToken.unsubscribe(m), s.signal && s.signal.removeEventListener("abort", m);
    }
    let w = new XMLHttpRequest();
    w.open(s.method.toUpperCase(), s.url, !0), w.timeout = s.timeout;
    function q() {
      if (!w)
        return;
      const K = Ee.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), U = {
        data: !d || d === "text" || d === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: K,
        config: t,
        request: w
      };
      eo(function(ce) {
        n(ce), A();
      }, function(ce) {
        o(ce), A();
      }, U), w = null;
    }
    "onloadend" in w ? w.onloadend = q : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(q);
    }, w.onabort = function() {
      w && (o(new j("Request aborted", j.ECONNABORTED, t, w)), w = null);
    }, w.onerror = function() {
      o(new j("Network Error", j.ERR_NETWORK, t, w)), w = null;
    }, w.ontimeout = function() {
      let ie = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const U = s.transitional || Xn;
      s.timeoutErrorMessage && (ie = s.timeoutErrorMessage), o(new j(
        ie,
        U.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        t,
        w
      )), w = null;
    }, u === void 0 && c.setContentType(null), "setRequestHeader" in w && p.forEach(c.toJSON(), function(ie, U) {
      w.setRequestHeader(U, ie);
    }), p.isUndefined(s.withCredentials) || (w.withCredentials = !!s.withCredentials), d && d !== "json" && (w.responseType = s.responseType), v && ([I, S] = Kt(v, !0), w.addEventListener("progress", I)), g && w.upload && ([_, M] = Kt(g), w.upload.addEventListener("progress", _), w.upload.addEventListener("loadend", M)), (s.cancelToken || s.signal) && (m = (K) => {
      w && (o(!K || K.type ? new ft(null, t, w) : K), w.abort(), w = null);
    }, s.cancelToken && s.cancelToken.subscribe(m), s.signal && (s.signal.aborted ? m() : s.signal.addEventListener("abort", m)));
    const x = Zs(s.url);
    if (x && ge.protocols.indexOf(x) === -1) {
      o(new j("Unsupported protocol " + x + ":", j.ERR_BAD_REQUEST, t));
      return;
    }
    w.send(u || null);
  });
}, ui = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let o = new AbortController(), s;
    const u = function(v) {
      if (!s) {
        s = !0, d();
        const m = v instanceof Error ? v : this.reason;
        o.abort(m instanceof j ? m : new ft(m instanceof Error ? m.message : m));
      }
    };
    let c = e && setTimeout(() => {
      c = null, u(new j(`timeout ${e} of ms exceeded`, j.ETIMEDOUT));
    }, e);
    const d = () => {
      t && (c && clearTimeout(c), c = null, t.forEach((v) => {
        v.unsubscribe ? v.unsubscribe(u) : v.removeEventListener("abort", u);
      }), t = null);
    };
    t.forEach((v) => v.addEventListener("abort", u));
    const { signal: g } = o;
    return g.unsubscribe = () => p.asap(d), g;
  }
}, ci = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let o = 0, s;
  for (; o < n; )
    s = o + e, yield t.slice(o, s), o = s;
}, li = async function* (t, e) {
  for await (const n of fi(t))
    yield* ci(n, e);
}, fi = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: o } = await e.read();
      if (n)
        break;
      yield o;
    }
  } finally {
    await e.cancel();
  }
}, xn = (t, e, n, o) => {
  const s = li(t, e);
  let u = 0, c, d = (g) => {
    c || (c = !0, o && o(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: v, value: m } = await s.next();
        if (v) {
          d(), g.close();
          return;
        }
        let _ = m.byteLength;
        if (n) {
          let I = u += _;
          n(I);
        }
        g.enqueue(new Uint8Array(m));
      } catch (v) {
        throw d(v), v;
      }
    },
    cancel(g) {
      return d(g), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, er = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", no = er && typeof ReadableStream == "function", di = er && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), oo = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, pi = no && oo(() => {
  let t = !1;
  const e = new Request(ge.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), jn = 64 * 1024, Dr = no && oo(() => p.isReadableStream(new Response("").body)), Jt = {
  stream: Dr && ((t) => t.body)
};
er && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Jt[e] && (Jt[e] = p.isFunction(t[e]) ? (n) => n[e]() : (n, o) => {
      throw new j(`Response type '${e}' is not supported`, j.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const hi = async (t) => {
  if (t == null)
    return 0;
  if (p.isBlob(t))
    return t.size;
  if (p.isSpecCompliantForm(t))
    return (await new Request(ge.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (p.isArrayBufferView(t) || p.isArrayBuffer(t))
    return t.byteLength;
  if (p.isURLSearchParams(t) && (t = t + ""), p.isString(t))
    return (await di(t)).byteLength;
}, mi = async (t, e) => {
  const n = p.toFiniteNumber(t.getContentLength());
  return n ?? hi(e);
}, yi = er && (async (t) => {
  let {
    url: e,
    method: n,
    data: o,
    signal: s,
    cancelToken: u,
    timeout: c,
    onDownloadProgress: d,
    onUploadProgress: g,
    responseType: v,
    headers: m,
    withCredentials: _ = "same-origin",
    fetchOptions: I
  } = ro(t);
  v = v ? (v + "").toLowerCase() : "text";
  let M = ui([s, u && u.toAbortSignal()], c), S;
  const A = M && M.unsubscribe && (() => {
    M.unsubscribe();
  });
  let w;
  try {
    if (g && pi && n !== "get" && n !== "head" && (w = await mi(m, o)) !== 0) {
      let U = new Request(e, {
        method: "POST",
        body: o,
        duplex: "half"
      }), Q;
      if (p.isFormData(o) && (Q = U.headers.get("content-type")) && m.setContentType(Q), U.body) {
        const [ce, me] = Pn(
          w,
          Kt(An(g))
        );
        o = xn(U.body, jn, ce, me);
      }
    }
    p.isString(_) || (_ = _ ? "include" : "omit");
    const q = "credentials" in Request.prototype;
    S = new Request(e, {
      ...I,
      signal: M,
      method: n.toUpperCase(),
      headers: m.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: q ? _ : void 0
    });
    let x = await fetch(S);
    const K = Dr && (v === "stream" || v === "response");
    if (Dr && (d || K && A)) {
      const U = {};
      ["status", "statusText", "headers"].forEach((Se) => {
        U[Se] = x[Se];
      });
      const Q = p.toFiniteNumber(x.headers.get("content-length")), [ce, me] = d && Pn(
        Q,
        Kt(An(d), !0)
      ) || [];
      x = new Response(
        xn(x.body, jn, ce, () => {
          me && me(), A && A();
        }),
        U
      );
    }
    v = v || "text";
    let ie = await Jt[p.findKey(Jt, v) || "text"](x, t);
    return !K && A && A(), await new Promise((U, Q) => {
      eo(U, Q, {
        data: ie,
        headers: Ee.from(x.headers),
        status: x.status,
        statusText: x.statusText,
        config: t,
        request: S
      });
    });
  } catch (q) {
    throw A && A(), q && q.name === "TypeError" && /fetch/i.test(q.message) ? Object.assign(
      new j("Network Error", j.ERR_NETWORK, t, S),
      {
        cause: q.cause || q
      }
    ) : j.from(q, q && q.code, t, S);
  }
}), Nr = {
  http: xs,
  xhr: ai,
  fetch: yi
};
p.forEach(Nr, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Fn = (t) => `- ${t}`, vi = (t) => p.isFunction(t) || t === null || t === !1, so = {
  getAdapter: (t) => {
    t = p.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, o;
    const s = {};
    for (let u = 0; u < e; u++) {
      n = t[u];
      let c;
      if (o = n, !vi(n) && (o = Nr[(c = String(n)).toLowerCase()], o === void 0))
        throw new j(`Unknown adapter '${c}'`);
      if (o)
        break;
      s[c || "#" + u] = o;
    }
    if (!o) {
      const u = Object.entries(s).map(
        ([d, g]) => `adapter ${d} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = e ? u.length > 1 ? `since :
` + u.map(Fn).join(`
`) : " " + Fn(u[0]) : "as no adapter specified";
      throw new j(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: Nr
};
function Pr(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ft(null, t);
}
function Dn(t) {
  return Pr(t), t.headers = Ee.from(t.headers), t.data = Cr.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), so.getAdapter(t.adapter || St.adapter)(t).then(function(o) {
    return Pr(t), o.data = Cr.call(
      t,
      t.transformResponse,
      o
    ), o.headers = Ee.from(o.headers), o;
  }, function(o) {
    return Zn(o) || (Pr(t), o && o.response && (o.response.data = Cr.call(
      t,
      t.transformResponse,
      o.response
    ), o.response.headers = Ee.from(o.response.headers))), Promise.reject(o);
  });
}
const io = "1.7.7", qr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  qr[t] = function(o) {
    return typeof o === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Nn = {};
qr.transitional = function(e, n, o) {
  function s(u, c) {
    return "[Axios v" + io + "] Transitional option '" + u + "'" + c + (o ? ". " + o : "");
  }
  return (u, c, d) => {
    if (e === !1)
      throw new j(
        s(c, " has been removed" + (n ? " in " + n : "")),
        j.ERR_DEPRECATED
      );
    return n && !Nn[c] && (Nn[c] = !0, console.warn(
      s(
        c,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(u, c, d) : !0;
  };
};
function bi(t, e, n) {
  if (typeof t != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(t);
  let s = o.length;
  for (; s-- > 0; ) {
    const u = o[s], c = e[u];
    if (c) {
      const d = t[u], g = d === void 0 || c(d, u, t);
      if (g !== !0)
        throw new j("option " + u + " must be " + g, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new j("Unknown option " + u, j.ERR_BAD_OPTION);
  }
}
const Lr = {
  assertOptions: bi,
  validators: qr
}, Ue = Lr.validators;
class Qe {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Tn(),
      response: new Tn()
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
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (o) {
      if (o instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const u = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? u && !String(o.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + u) : o.stack = u;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Ze(this.defaults, n);
    const { transitional: o, paramsSerializer: s, headers: u } = n;
    o !== void 0 && Lr.assertOptions(o, {
      silentJSONParsing: Ue.transitional(Ue.boolean),
      forcedJSONParsing: Ue.transitional(Ue.boolean),
      clarifyTimeoutError: Ue.transitional(Ue.boolean)
    }, !1), s != null && (p.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Lr.assertOptions(s, {
      encode: Ue.function,
      serialize: Ue.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let c = u && p.merge(
      u.common,
      u[n.method]
    );
    u && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (S) => {
        delete u[S];
      }
    ), n.headers = Ee.concat(c, u);
    const d = [];
    let g = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(n) === !1 || (g = g && A.synchronous, d.unshift(A.fulfilled, A.rejected));
    });
    const v = [];
    this.interceptors.response.forEach(function(A) {
      v.push(A.fulfilled, A.rejected);
    });
    let m, _ = 0, I;
    if (!g) {
      const S = [Dn.bind(this), void 0];
      for (S.unshift.apply(S, d), S.push.apply(S, v), I = S.length, m = Promise.resolve(n); _ < I; )
        m = m.then(S[_++], S[_++]);
      return m;
    }
    I = d.length;
    let M = n;
    for (_ = 0; _ < I; ) {
      const S = d[_++], A = d[_++];
      try {
        M = S(M);
      } catch (w) {
        A.call(this, w);
        break;
      }
    }
    try {
      m = Dn.call(this, M);
    } catch (S) {
      return Promise.reject(S);
    }
    for (_ = 0, I = v.length; _ < I; )
      m = m.then(v[_++], v[_++]);
    return m;
  }
  getUri(e) {
    e = Ze(this.defaults, e);
    const n = to(e.baseURL, e.url);
    return Gn(n, e.params, e.paramsSerializer);
  }
}
p.forEach(["delete", "get", "head", "options"], function(e) {
  Qe.prototype[e] = function(n, o) {
    return this.request(Ze(o || {}, {
      method: e,
      url: n,
      data: (o || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(e) {
  function n(o) {
    return function(u, c, d) {
      return this.request(Ze(d || {}, {
        method: e,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Qe.prototype[e] = n(), Qe.prototype[e + "Form"] = n(!0);
});
class Wr {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(u) {
      n = u;
    });
    const o = this;
    this.promise.then((s) => {
      if (!o._listeners) return;
      let u = o._listeners.length;
      for (; u-- > 0; )
        o._listeners[u](s);
      o._listeners = null;
    }), this.promise.then = (s) => {
      let u;
      const c = new Promise((d) => {
        o.subscribe(d), u = d;
      }).then(s);
      return c.cancel = function() {
        o.unsubscribe(u);
      }, c;
    }, e(function(u, c, d) {
      o.reason || (o.reason = new ft(u, c, d), n(o.reason));
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
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (o) => {
      e.abort(o);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Wr(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function gi(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Ei(t) {
  return p.isObject(t) && t.isAxiosError === !0;
}
const Ir = {
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
Object.entries(Ir).forEach(([t, e]) => {
  Ir[e] = t;
});
function ao(t) {
  const e = new Qe(t), n = Un(Qe.prototype.request, e);
  return p.extend(n, Qe.prototype, e, { allOwnKeys: !0 }), p.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ao(Ze(t, s));
  }, n;
}
const oe = ao(St);
oe.Axios = Qe;
oe.CanceledError = ft;
oe.CancelToken = Wr;
oe.isCancel = Zn;
oe.VERSION = io;
oe.toFormData = Zt;
oe.AxiosError = j;
oe.Cancel = oe.CanceledError;
oe.all = function(e) {
  return Promise.all(e);
};
oe.spread = gi;
oe.isAxiosError = Ei;
oe.mergeConfig = Ze;
oe.AxiosHeaders = Ee;
oe.formToJSON = (t) => Qn(p.isHTMLForm(t) ? new FormData(t) : t);
oe.getAdapter = so.getAdapter;
oe.HttpStatusCode = Ir;
oe.default = oe;
const uo = {
  //Authentication
  BASE_URL: "http://ec2-43-205-254-4.ap-south-1.compute.amazonaws.com:80"
  // BASE_URL: "https://c7fb-182-156-141-17.ngrok-free.app",
}, Ur = oe.create({
  baseURL: uo.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), Ri = () => localStorage.getItem("access_token"), _i = () => localStorage.getItem("refresh_token");
Ur.interceptors.request.use(
  (t) => {
    const e = Ri();
    return e && (t.headers.Authorization = `Bearer ${e}`), t;
  },
  (t) => Promise.reject(t)
);
Ur.interceptors.response.use(
  (t) => t,
  async (t) => {
    const e = t.config;
    if (t.response && t.response.status === 401 && !e._retry) {
      e._retry = !0;
      const n = _i();
      if (n)
        try {
          const { data: o } = await oe.post("https://7759-182-156-141-17.ngrok-free.app/auth/refresh-token", {
            refreshToken: n
          });
          return localStorage.setItem("accessToken", o.accessToken), e.headers.Authorization = `Bearer ${o.accessToken}`, Ur(e);
        } catch (o) {
          return Promise.reject(o);
        }
    }
    return Promise.reject(t);
  }
);
const wi = async (t, e) => {
  var n;
  try {
    return (await oe.post(`${uo.BASE_URL}${t}`, e, {
      headers: {
        // 'ngrok-skip-browser-warning': 'true',
        "Content-Type": "application/json"
      },
      withCredentials: !0
    })).data;
  } catch (o) {
    if (oe.isAxiosError(o)) {
      const s = ((n = o.response) == null ? void 0 : n.data) || {
        message: "An error occurred. Try after some time."
      };
      throw new Error(s.message);
    } else
      throw new Error("Unknown error occurred");
  }
}, Ti = (t) => Ho({
  mutationFn: (e) => wi(t, e),
  onSuccess: (e) => {
    localStorage.setItem("access_token", e.access_token), localStorage.setItem("refresh_token", e.refresh_token), localStorage.setItem("role", e.role), localStorage.setItem("department", e.department);
  },
  onError: (e) => {
    console.error("Sign-in error:", e);
  }
});
export {
  Oi as AUTH_API_URL,
  Ti as useSignInService
};
