var Ls = (r) => {
  throw TypeError(r);
};
var Tn = (r, e, t) => e.has(r) || Ls("Cannot " + t);
var S = (r, e, t) => (Tn(r, e, "read from private field"), t ? t.call(r) : e.get(r)), pe = (r, e, t) => e.has(r) ? Ls("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), W = (r, e, t, n) => (Tn(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), ge = (r, e, t) => (Tn(r, e, "access private method"), t);
var ts = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(r) {
    return this.listeners.add(r), this.onSubscribe(), () => {
      this.listeners.delete(r), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Br = typeof window > "u" || "Deno" in globalThis;
function Pa() {
}
function $s(r) {
  return typeof r == "number" && r >= 0 && r !== 1 / 0;
}
function Na(r, e) {
  return Math.max(r + (e || 0) - Date.now(), 0);
}
function Ir(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Qe(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Fn(r, e) {
  if (r === e)
    return r;
  const t = js(r) && js(e);
  if (t || Ms(r) && Ms(e)) {
    const n = t ? r : Object.keys(r), s = n.length, a = t ? e : Object.keys(e), o = a.length, u = t ? [] : {};
    let f = 0;
    for (let d = 0; d < o; d++) {
      const h = t ? d : a[d];
      (!t && n.includes(h) || t) && r[h] === void 0 && e[h] === void 0 ? (u[h] = void 0, f++) : (u[h] = Fn(r[h], e[h]), u[h] === r[h] && r[h] !== void 0 && f++);
    }
    return s === o && f === s ? r : u;
  }
  return e;
}
function Dn(r, e) {
  if (!e || Object.keys(r).length !== Object.keys(e).length)
    return !1;
  for (const t in r)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function js(r) {
  return Array.isArray(r) && r.length === Object.keys(r).length;
}
function Ms(r) {
  if (!qs(r))
    return !1;
  const e = r.constructor;
  if (e === void 0)
    return !0;
  const t = e.prototype;
  return !(!qs(t) || !t.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(r) !== Object.prototype);
}
function qs(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function Us(r, e, t) {
  if (typeof t.structuralSharing == "function")
    return t.structuralSharing(r, e);
  if (t.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Fn(r, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${t.queryHash}]: ${n}`
        );
      }
    return Fn(r, e);
  }
  return e;
}
var _t, lt, qt, mi, Fa = (mi = class extends ts {
  constructor() {
    super();
    pe(this, _t);
    pe(this, lt);
    pe(this, qt);
    W(this, qt, (e) => {
      if (!Br && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    S(this, lt) || this.setEventListener(S(this, qt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = S(this, lt)) == null || e.call(this), W(this, lt, void 0));
  }
  setEventListener(e) {
    var t;
    W(this, qt, e), (t = S(this, lt)) == null || t.call(this), W(this, lt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    S(this, _t) !== e && (W(this, _t, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    var e;
    return typeof S(this, _t) == "boolean" ? S(this, _t) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, _t = new WeakMap(), lt = new WeakMap(), qt = new WeakMap(), mi), Da = new Fa(), Ut, ct, Bt, yi, ka = (yi = class extends ts {
  constructor() {
    super();
    pe(this, Ut, !0);
    pe(this, ct);
    pe(this, Bt);
    W(this, Bt, (e) => {
      if (!Br && window.addEventListener) {
        const t = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    S(this, ct) || this.setEventListener(S(this, Bt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = S(this, ct)) == null || e.call(this), W(this, ct, void 0));
  }
  setEventListener(e) {
    var t;
    W(this, Bt, e), (t = S(this, ct)) == null || t.call(this), W(this, ct, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    S(this, Ut) !== e && (W(this, Ut, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return S(this, Ut);
  }
}, Ut = new WeakMap(), ct = new WeakMap(), Bt = new WeakMap(), yi), Ia = new ka();
function La(r) {
  return (r ?? "online") === "online" ? Ia.isOnline() : !0;
}
function $a() {
  let r = [], e = 0, t = (u) => {
    u();
  }, n = (u) => {
    u();
  }, s = (u) => setTimeout(u, 0);
  const a = (u) => {
    e ? r.push(u) : s(() => {
      t(u);
    });
  }, o = () => {
    const u = r;
    r = [], u.length && s(() => {
      n(() => {
        u.forEach((f) => {
          t(f);
        });
      });
    });
  };
  return {
    batch: (u) => {
      let f;
      e++;
      try {
        f = u();
      } finally {
        e--, e || o();
      }
      return f;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (u) => (...f) => {
      a(() => {
        u(...f);
      });
    },
    schedule: a,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (u) => {
      t = u;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (u) => {
      n = u;
    },
    setScheduler: (u) => {
      s = u;
    }
  };
}
var gi = $a();
function ja(r, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: La(e.networkMode) ? "fetching" : "paused",
    ...r === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
var ke, G, lr, Ne, St, Vt, Ke, cr, Gt, zt, wt, Rt, ft, Ht, J, nr, kn, In, Ln, $n, jn, Mn, qn, vi, bi, Ma = (bi = class extends ts {
  constructor(e, t) {
    super();
    pe(this, J);
    pe(this, ke);
    pe(this, G);
    pe(this, lr);
    pe(this, Ne);
    pe(this, St);
    pe(this, Vt);
    pe(this, Ke);
    pe(this, cr);
    pe(this, Gt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    pe(this, zt);
    pe(this, wt);
    pe(this, Rt);
    pe(this, ft);
    pe(this, Ht, /* @__PURE__ */ new Set());
    this.options = t, W(this, ke, e), W(this, Ke, null), this.bindMethods(), this.setOptions(t);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (S(this, G).addObserver(this), Bs(S(this, G), this.options) ? ge(this, J, nr).call(this) : this.updateResult(), ge(this, J, $n).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Un(
      S(this, G),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Un(
      S(this, G),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ge(this, J, jn).call(this), ge(this, J, Mn).call(this), S(this, G).removeObserver(this);
  }
  setOptions(e, t) {
    const n = this.options, s = S(this, G);
    if (this.options = S(this, ke).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Qe(this.options.enabled, S(this, G)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ge(this, J, qn).call(this), S(this, G).setOptions(this.options), n._defaulted && !Dn(this.options, n) && S(this, ke).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: S(this, G),
      observer: this
    });
    const a = this.hasListeners();
    a && Vs(
      S(this, G),
      s,
      this.options,
      n
    ) && ge(this, J, nr).call(this), this.updateResult(t), a && (S(this, G) !== s || Qe(this.options.enabled, S(this, G)) !== Qe(n.enabled, S(this, G)) || Ir(this.options.staleTime, S(this, G)) !== Ir(n.staleTime, S(this, G))) && ge(this, J, kn).call(this);
    const o = ge(this, J, In).call(this);
    a && (S(this, G) !== s || Qe(this.options.enabled, S(this, G)) !== Qe(n.enabled, S(this, G)) || o !== S(this, ft)) && ge(this, J, Ln).call(this, o);
  }
  getOptimisticResult(e) {
    const t = S(this, ke).getQueryCache().build(S(this, ke), e), n = this.createResult(t, e);
    return Ua(this, n) && (W(this, Ne, n), W(this, Vt, this.options), W(this, St, S(this, G).state)), n;
  }
  getCurrentResult() {
    return S(this, Ne);
  }
  trackResult(e, t) {
    const n = {};
    return Object.keys(e).forEach((s) => {
      Object.defineProperty(n, s, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(s), t == null || t(s), e[s])
      });
    }), n;
  }
  trackProp(e) {
    S(this, Ht).add(e);
  }
  getCurrentQuery() {
    return S(this, G);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const t = S(this, ke).defaultQueryOptions(e), n = S(this, ke).getQueryCache().build(S(this, ke), t);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return ge(this, J, nr).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), S(this, Ne)));
  }
  createResult(e, t) {
    var ue;
    const n = S(this, G), s = this.options, a = S(this, Ne), o = S(this, St), u = S(this, Vt), d = e !== n ? e.state : S(this, lr), { state: h } = e;
    let y = { ...h }, O = !1, C;
    if (t._optimisticResults) {
      const re = this.hasListeners(), Se = !re && Bs(e, t), Ue = re && Vs(e, n, t, s);
      (Se || Ue) && (y = {
        ...y,
        ...ja(h.data, e.options)
      }), t._optimisticResults === "isRestoring" && (y.fetchStatus = "idle");
    }
    let { error: T, errorUpdatedAt: A, status: R } = y;
    if (t.select && y.data !== void 0)
      if (a && y.data === (o == null ? void 0 : o.data) && t.select === S(this, cr))
        C = S(this, Gt);
      else
        try {
          W(this, cr, t.select), C = t.select(y.data), C = Us(a == null ? void 0 : a.data, C, t), W(this, Gt, C), W(this, Ke, null);
        } catch (re) {
          W(this, Ke, re);
        }
    else
      C = y.data;
    if (t.placeholderData !== void 0 && C === void 0 && R === "pending") {
      let re;
      if (a != null && a.isPlaceholderData && t.placeholderData === (u == null ? void 0 : u.placeholderData))
        re = a.data;
      else if (re = typeof t.placeholderData == "function" ? t.placeholderData(
        (ue = S(this, zt)) == null ? void 0 : ue.state.data,
        S(this, zt)
      ) : t.placeholderData, t.select && re !== void 0)
        try {
          re = t.select(re), W(this, Ke, null);
        } catch (Se) {
          W(this, Ke, Se);
        }
      re !== void 0 && (R = "success", C = Us(
        a == null ? void 0 : a.data,
        re,
        t
      ), O = !0);
    }
    S(this, Ke) && (T = S(this, Ke), C = S(this, Gt), A = Date.now(), R = "error");
    const L = y.fetchStatus === "fetching", N = R === "pending", z = R === "error", te = N && L, $ = C !== void 0;
    return {
      status: R,
      fetchStatus: y.fetchStatus,
      isPending: N,
      isSuccess: R === "success",
      isError: z,
      isInitialLoading: te,
      isLoading: te,
      data: C,
      dataUpdatedAt: y.dataUpdatedAt,
      error: T,
      errorUpdatedAt: A,
      failureCount: y.fetchFailureCount,
      failureReason: y.fetchFailureReason,
      errorUpdateCount: y.errorUpdateCount,
      isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
      isFetchedAfterMount: y.dataUpdateCount > d.dataUpdateCount || y.errorUpdateCount > d.errorUpdateCount,
      isFetching: L,
      isRefetching: L && !N,
      isLoadingError: z && !$,
      isPaused: y.fetchStatus === "paused",
      isPlaceholderData: O,
      isRefetchError: z && $,
      isStale: rs(e, t),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const t = S(this, Ne), n = this.createResult(S(this, G), this.options);
    if (W(this, St, S(this, G).state), W(this, Vt, this.options), S(this, St).data !== void 0 && W(this, zt, S(this, G)), Dn(n, t))
      return;
    W(this, Ne, n);
    const s = {}, a = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: o } = this.options, u = typeof o == "function" ? o() : o;
      if (u === "all" || !u && !S(this, Ht).size)
        return !0;
      const f = new Set(
        u ?? S(this, Ht)
      );
      return this.options.throwOnError && f.add("error"), Object.keys(S(this, Ne)).some((d) => {
        const h = d;
        return S(this, Ne)[h] !== t[h] && f.has(h);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && a() && (s.listeners = !0), ge(this, J, vi).call(this, { ...s, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ge(this, J, $n).call(this);
  }
}, ke = new WeakMap(), G = new WeakMap(), lr = new WeakMap(), Ne = new WeakMap(), St = new WeakMap(), Vt = new WeakMap(), Ke = new WeakMap(), cr = new WeakMap(), Gt = new WeakMap(), zt = new WeakMap(), wt = new WeakMap(), Rt = new WeakMap(), ft = new WeakMap(), Ht = new WeakMap(), J = new WeakSet(), nr = function(e) {
  ge(this, J, qn).call(this);
  let t = S(this, G).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (t = t.catch(Pa)), t;
}, kn = function() {
  ge(this, J, jn).call(this);
  const e = Ir(
    this.options.staleTime,
    S(this, G)
  );
  if (Br || S(this, Ne).isStale || !$s(e))
    return;
  const n = Na(S(this, Ne).dataUpdatedAt, e) + 1;
  W(this, wt, setTimeout(() => {
    S(this, Ne).isStale || this.updateResult();
  }, n));
}, In = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(S(this, G)) : this.options.refetchInterval) ?? !1;
}, Ln = function(e) {
  ge(this, J, Mn).call(this), W(this, ft, e), !(Br || Qe(this.options.enabled, S(this, G)) === !1 || !$s(S(this, ft)) || S(this, ft) === 0) && W(this, Rt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Da.isFocused()) && ge(this, J, nr).call(this);
  }, S(this, ft)));
}, $n = function() {
  ge(this, J, kn).call(this), ge(this, J, Ln).call(this, ge(this, J, In).call(this));
}, jn = function() {
  S(this, wt) && (clearTimeout(S(this, wt)), W(this, wt, void 0));
}, Mn = function() {
  S(this, Rt) && (clearInterval(S(this, Rt)), W(this, Rt, void 0));
}, qn = function() {
  const e = S(this, ke).getQueryCache().build(S(this, ke), this.options);
  if (e === S(this, G))
    return;
  const t = S(this, G);
  W(this, G, e), W(this, lr, e.state), this.hasListeners() && (t == null || t.removeObserver(this), e.addObserver(this));
}, vi = function(e) {
  gi.batch(() => {
    e.listeners && this.listeners.forEach((t) => {
      t(S(this, Ne));
    }), S(this, ke).getQueryCache().notify({
      query: S(this, G),
      type: "observerResultsUpdated"
    });
  });
}, bi);
function qa(r, e) {
  return Qe(e.enabled, r) !== !1 && r.state.data === void 0 && !(r.state.status === "error" && e.retryOnMount === !1);
}
function Bs(r, e) {
  return qa(r, e) || r.state.data !== void 0 && Un(r, e, e.refetchOnMount);
}
function Un(r, e, t) {
  if (Qe(e.enabled, r) !== !1) {
    const n = typeof t == "function" ? t(r) : t;
    return n === "always" || n !== !1 && rs(r, e);
  }
  return !1;
}
function Vs(r, e, t, n) {
  return (r !== e || Qe(n.enabled, r) === !1) && (!t.suspense || r.state.status !== "error") && rs(r, t);
}
function rs(r, e) {
  return Qe(e.enabled, r) !== !1 && r.isStaleByTime(Ir(e.staleTime, r));
}
function Ua(r, e) {
  return !Dn(r.getCurrentResult(), e);
}
function Ba(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Bn = { exports: {} }, q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gs;
function Va() {
  if (Gs) return q;
  Gs = 1;
  var r = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.iterator;
  function O(p) {
    return p === null || typeof p != "object" ? null : (p = y && p[y] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T = Object.assign, A = {};
  function R(p, E, U) {
    this.props = p, this.context = E, this.refs = A, this.updater = U || C;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(p, E) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, E, "setState");
  }, R.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function L() {
  }
  L.prototype = R.prototype;
  function N(p, E, U) {
    this.props = p, this.context = E, this.refs = A, this.updater = U || C;
  }
  var z = N.prototype = new L();
  z.constructor = N, T(z, R.prototype), z.isPureReactComponent = !0;
  var te = Array.isArray, $ = Object.prototype.hasOwnProperty, Z = { current: null }, ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(p, E, U) {
    var V, Y = {}, ae = null, se = null;
    if (E != null) for (V in E.ref !== void 0 && (se = E.ref), E.key !== void 0 && (ae = "" + E.key), E) $.call(E, V) && !ue.hasOwnProperty(V) && (Y[V] = E[V]);
    var ne = arguments.length - 2;
    if (ne === 1) Y.children = U;
    else if (1 < ne) {
      for (var X = Array(ne), ye = 0; ye < ne; ye++) X[ye] = arguments[ye + 2];
      Y.children = X;
    }
    if (p && p.defaultProps) for (V in ne = p.defaultProps, ne) Y[V] === void 0 && (Y[V] = ne[V]);
    return { $$typeof: r, type: p, key: ae, ref: se, props: Y, _owner: Z.current };
  }
  function Se(p, E) {
    return { $$typeof: r, type: p.type, key: E, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function Ue(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }
  function oe(p) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(U) {
      return E[U];
    });
  }
  var Pe = /\/+/g;
  function we(p, E) {
    return typeof p == "object" && p !== null && p.key != null ? oe("" + p.key) : E.toString(36);
  }
  function Re(p, E, U, V, Y) {
    var ae = typeof p;
    (ae === "undefined" || ae === "boolean") && (p = null);
    var se = !1;
    if (p === null) se = !0;
    else switch (ae) {
      case "string":
      case "number":
        se = !0;
        break;
      case "object":
        switch (p.$$typeof) {
          case r:
          case e:
            se = !0;
        }
    }
    if (se) return se = p, Y = Y(se), p = V === "" ? "." + we(se, 0) : V, te(Y) ? (U = "", p != null && (U = p.replace(Pe, "$&/") + "/"), Re(Y, E, U, "", function(ye) {
      return ye;
    })) : Y != null && (Ue(Y) && (Y = Se(Y, U + (!Y.key || se && se.key === Y.key ? "" : ("" + Y.key).replace(Pe, "$&/") + "/") + p)), E.push(Y)), 1;
    if (se = 0, V = V === "" ? "." : V + ":", te(p)) for (var ne = 0; ne < p.length; ne++) {
      ae = p[ne];
      var X = V + we(ae, ne);
      se += Re(ae, E, U, X, Y);
    }
    else if (X = O(p), typeof X == "function") for (p = X.call(p), ne = 0; !(ae = p.next()).done; ) ae = ae.value, X = V + we(ae, ne++), se += Re(ae, E, U, X, Y);
    else if (ae === "object") throw E = String(p), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return se;
  }
  function Te(p, E, U) {
    if (p == null) return p;
    var V = [], Y = 0;
    return Re(p, V, "", "", function(ae) {
      return E.call(U, ae, Y++);
    }), V;
  }
  function Ve(p) {
    if (p._status === -1) {
      var E = p._result;
      E = E(), E.then(function(U) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = U);
      }, function(U) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = U);
      }), p._status === -1 && (p._status = 0, p._result = E);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var F = { current: null }, He = { transition: null }, dt = { ReactCurrentDispatcher: F, ReactCurrentBatchConfig: He, ReactCurrentOwner: Z };
  function Je() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return q.Children = { map: Te, forEach: function(p, E, U) {
    Te(p, function() {
      E.apply(this, arguments);
    }, U);
  }, count: function(p) {
    var E = 0;
    return Te(p, function() {
      E++;
    }), E;
  }, toArray: function(p) {
    return Te(p, function(E) {
      return E;
    }) || [];
  }, only: function(p) {
    if (!Ue(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, q.Component = R, q.Fragment = t, q.Profiler = s, q.PureComponent = N, q.StrictMode = n, q.Suspense = f, q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dt, q.act = Je, q.cloneElement = function(p, E, U) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var V = T({}, p.props), Y = p.key, ae = p.ref, se = p._owner;
    if (E != null) {
      if (E.ref !== void 0 && (ae = E.ref, se = Z.current), E.key !== void 0 && (Y = "" + E.key), p.type && p.type.defaultProps) var ne = p.type.defaultProps;
      for (X in E) $.call(E, X) && !ue.hasOwnProperty(X) && (V[X] = E[X] === void 0 && ne !== void 0 ? ne[X] : E[X]);
    }
    var X = arguments.length - 2;
    if (X === 1) V.children = U;
    else if (1 < X) {
      ne = Array(X);
      for (var ye = 0; ye < X; ye++) ne[ye] = arguments[ye + 2];
      V.children = ne;
    }
    return { $$typeof: r, type: p.type, key: Y, ref: ae, props: V, _owner: se };
  }, q.createContext = function(p) {
    return p = { $$typeof: o, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: a, _context: p }, p.Consumer = p;
  }, q.createElement = re, q.createFactory = function(p) {
    var E = re.bind(null, p);
    return E.type = p, E;
  }, q.createRef = function() {
    return { current: null };
  }, q.forwardRef = function(p) {
    return { $$typeof: u, render: p };
  }, q.isValidElement = Ue, q.lazy = function(p) {
    return { $$typeof: h, _payload: { _status: -1, _result: p }, _init: Ve };
  }, q.memo = function(p, E) {
    return { $$typeof: d, type: p, compare: E === void 0 ? null : E };
  }, q.startTransition = function(p) {
    var E = He.transition;
    He.transition = {};
    try {
      p();
    } finally {
      He.transition = E;
    }
  }, q.unstable_act = Je, q.useCallback = function(p, E) {
    return F.current.useCallback(p, E);
  }, q.useContext = function(p) {
    return F.current.useContext(p);
  }, q.useDebugValue = function() {
  }, q.useDeferredValue = function(p) {
    return F.current.useDeferredValue(p);
  }, q.useEffect = function(p, E) {
    return F.current.useEffect(p, E);
  }, q.useId = function() {
    return F.current.useId();
  }, q.useImperativeHandle = function(p, E, U) {
    return F.current.useImperativeHandle(p, E, U);
  }, q.useInsertionEffect = function(p, E) {
    return F.current.useInsertionEffect(p, E);
  }, q.useLayoutEffect = function(p, E) {
    return F.current.useLayoutEffect(p, E);
  }, q.useMemo = function(p, E) {
    return F.current.useMemo(p, E);
  }, q.useReducer = function(p, E, U) {
    return F.current.useReducer(p, E, U);
  }, q.useRef = function(p) {
    return F.current.useRef(p);
  }, q.useState = function(p) {
    return F.current.useState(p);
  }, q.useSyncExternalStore = function(p, E, U) {
    return F.current.useSyncExternalStore(p, E, U);
  }, q.useTransition = function() {
    return F.current.useTransition();
  }, q.version = "18.3.1", q;
}
var sr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
sr.exports;
var zs;
function Ga() {
  return zs || (zs = 1, function(r, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = "18.3.1", n = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), R = Symbol.iterator, L = "@@iterator";
      function N(i) {
        if (i === null || typeof i != "object")
          return null;
        var l = R && i[R] || i[L];
        return typeof l == "function" ? l : null;
      }
      var z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, te = {
        transition: null
      }, $ = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {}, re = null;
      function Se(i) {
        re = i;
      }
      ue.setExtraStackFrame = function(i) {
        re = i;
      }, ue.getCurrentStack = null, ue.getStackAddendum = function() {
        var i = "";
        re && (i += re);
        var l = ue.getCurrentStack;
        return l && (i += l() || ""), i;
      };
      var Ue = !1, oe = !1, Pe = !1, we = !1, Re = !1, Te = {
        ReactCurrentDispatcher: z,
        ReactCurrentBatchConfig: te,
        ReactCurrentOwner: Z
      };
      Te.ReactDebugCurrentFrame = ue, Te.ReactCurrentActQueue = $;
      function Ve(i) {
        {
          for (var l = arguments.length, m = new Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++)
            m[g - 1] = arguments[g];
          He("warn", i, m);
        }
      }
      function F(i) {
        {
          for (var l = arguments.length, m = new Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++)
            m[g - 1] = arguments[g];
          He("error", i, m);
        }
      }
      function He(i, l, m) {
        {
          var g = Te.ReactDebugCurrentFrame, w = g.getStackAddendum();
          w !== "" && (l += "%s", m = m.concat([w]));
          var D = m.map(function(x) {
            return String(x);
          });
          D.unshift("Warning: " + l), Function.prototype.apply.call(console[i], console, D);
        }
      }
      var dt = {};
      function Je(i, l) {
        {
          var m = i.constructor, g = m && (m.displayName || m.name) || "ReactClass", w = g + "." + l;
          if (dt[w])
            return;
          F("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", l, g), dt[w] = !0;
        }
      }
      var p = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(i) {
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
        enqueueForceUpdate: function(i, l, m) {
          Je(i, "forceUpdate");
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
        enqueueReplaceState: function(i, l, m, g) {
          Je(i, "replaceState");
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
        enqueueSetState: function(i, l, m, g) {
          Je(i, "setState");
        }
      }, E = Object.assign, U = {};
      Object.freeze(U);
      function V(i, l, m) {
        this.props = i, this.context = l, this.refs = U, this.updater = m || p;
      }
      V.prototype.isReactComponent = {}, V.prototype.setState = function(i, l) {
        if (typeof i != "object" && typeof i != "function" && i != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, i, l, "setState");
      }, V.prototype.forceUpdate = function(i) {
        this.updater.enqueueForceUpdate(this, i, "forceUpdate");
      };
      {
        var Y = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ae = function(i, l) {
          Object.defineProperty(V.prototype, i, {
            get: function() {
              Ve("%s(...) is deprecated in plain JavaScript React classes. %s", l[0], l[1]);
            }
          });
        };
        for (var se in Y)
          Y.hasOwnProperty(se) && ae(se, Y[se]);
      }
      function ne() {
      }
      ne.prototype = V.prototype;
      function X(i, l, m) {
        this.props = i, this.context = l, this.refs = U, this.updater = m || p;
      }
      var ye = X.prototype = new ne();
      ye.constructor = X, E(ye, V.prototype), ye.isPureReactComponent = !0;
      function tn() {
        var i = {
          current: null
        };
        return Object.seal(i), i;
      }
      var pr = Array.isArray;
      function Nt(i) {
        return pr(i);
      }
      function rn(i) {
        {
          var l = typeof Symbol == "function" && Symbol.toStringTag, m = l && i[Symbol.toStringTag] || i.constructor.name || "Object";
          return m;
        }
      }
      function Ft(i) {
        try {
          return rt(i), !1;
        } catch {
          return !0;
        }
      }
      function rt(i) {
        return "" + i;
      }
      function ht(i) {
        if (Ft(i))
          return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rn(i)), rt(i);
      }
      function mr(i, l, m) {
        var g = i.displayName;
        if (g)
          return g;
        var w = l.displayName || l.name || "";
        return w !== "" ? m + "(" + w + ")" : m;
      }
      function pt(i) {
        return i.displayName || "Context";
      }
      function We(i) {
        if (i == null)
          return null;
        if (typeof i.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
          return i.displayName || i.name || null;
        if (typeof i == "string")
          return i;
        switch (i) {
          case a:
            return "Fragment";
          case s:
            return "Portal";
          case u:
            return "Profiler";
          case o:
            return "StrictMode";
          case y:
            return "Suspense";
          case O:
            return "SuspenseList";
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case d:
              var l = i;
              return pt(l) + ".Consumer";
            case f:
              var m = i;
              return pt(m._context) + ".Provider";
            case h:
              return mr(i, i.render, "ForwardRef");
            case C:
              var g = i.displayName || null;
              return g !== null ? g : We(i.type) || "Memo";
            case T: {
              var w = i, D = w._payload, x = w._init;
              try {
                return We(x(D));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var mt = Object.prototype.hasOwnProperty, Dt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, yr, br, kt;
      kt = {};
      function Kt(i) {
        if (mt.call(i, "ref")) {
          var l = Object.getOwnPropertyDescriptor(i, "ref").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return i.ref !== void 0;
      }
      function nt(i) {
        if (mt.call(i, "key")) {
          var l = Object.getOwnPropertyDescriptor(i, "key").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return i.key !== void 0;
      }
      function nn(i, l) {
        var m = function() {
          yr || (yr = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: m,
          configurable: !0
        });
      }
      function gr(i, l) {
        var m = function() {
          br || (br = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: m,
          configurable: !0
        });
      }
      function vr(i) {
        if (typeof i.ref == "string" && Z.current && i.__self && Z.current.stateNode !== i.__self) {
          var l = We(Z.current.type);
          kt[l] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i.ref), kt[l] = !0);
        }
      }
      var yt = function(i, l, m, g, w, D, x) {
        var I = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: i,
          key: l,
          ref: m,
          props: x,
          // Record the component responsible for creating this element.
          _owner: D
        };
        return I._store = {}, Object.defineProperty(I._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(I, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: g
        }), Object.defineProperty(I, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: w
        }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
      };
      function sn(i, l, m) {
        var g, w = {}, D = null, x = null, I = null, H = null;
        if (l != null) {
          Kt(l) && (x = l.ref, vr(l)), nt(l) && (ht(l.key), D = "" + l.key), I = l.__self === void 0 ? null : l.__self, H = l.__source === void 0 ? null : l.__source;
          for (g in l)
            mt.call(l, g) && !Dt.hasOwnProperty(g) && (w[g] = l[g]);
        }
        var ie = arguments.length - 2;
        if (ie === 1)
          w.children = m;
        else if (ie > 1) {
          for (var le = Array(ie), ce = 0; ce < ie; ce++)
            le[ce] = arguments[ce + 2];
          Object.freeze && Object.freeze(le), w.children = le;
        }
        if (i && i.defaultProps) {
          var de = i.defaultProps;
          for (g in de)
            w[g] === void 0 && (w[g] = de[g]);
        }
        if (D || x) {
          var be = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          D && nn(w, be), x && gr(w, be);
        }
        return yt(i, D, x, I, H, Z.current, w);
      }
      function an(i, l) {
        var m = yt(i.type, l, i.ref, i._self, i._source, i._owner, i.props);
        return m;
      }
      function on(i, l, m) {
        if (i == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + i + ".");
        var g, w = E({}, i.props), D = i.key, x = i.ref, I = i._self, H = i._source, ie = i._owner;
        if (l != null) {
          Kt(l) && (x = l.ref, ie = Z.current), nt(l) && (ht(l.key), D = "" + l.key);
          var le;
          i.type && i.type.defaultProps && (le = i.type.defaultProps);
          for (g in l)
            mt.call(l, g) && !Dt.hasOwnProperty(g) && (l[g] === void 0 && le !== void 0 ? w[g] = le[g] : w[g] = l[g]);
        }
        var ce = arguments.length - 2;
        if (ce === 1)
          w.children = m;
        else if (ce > 1) {
          for (var de = Array(ce), be = 0; be < ce; be++)
            de[be] = arguments[be + 2];
          w.children = de;
        }
        return yt(i.type, D, x, I, H, ie, w);
      }
      function st(i) {
        return typeof i == "object" && i !== null && i.$$typeof === n;
      }
      var Er = ".", un = ":";
      function ln(i) {
        var l = /[=:]/g, m = {
          "=": "=0",
          ":": "=2"
        }, g = i.replace(l, function(w) {
          return m[w];
        });
        return "$" + g;
      }
      var It = !1, _r = /\/+/g;
      function Ze(i) {
        return i.replace(_r, "$&/");
      }
      function bt(i, l) {
        return typeof i == "object" && i !== null && i.key != null ? (ht(i.key), ln("" + i.key)) : l.toString(36);
      }
      function it(i, l, m, g, w) {
        var D = typeof i;
        (D === "undefined" || D === "boolean") && (i = null);
        var x = !1;
        if (i === null)
          x = !0;
        else
          switch (D) {
            case "string":
            case "number":
              x = !0;
              break;
            case "object":
              switch (i.$$typeof) {
                case n:
                case s:
                  x = !0;
              }
          }
        if (x) {
          var I = i, H = w(I), ie = g === "" ? Er + bt(I, 0) : g;
          if (Nt(H)) {
            var le = "";
            ie != null && (le = Ze(ie) + "/"), it(H, l, le, "", function(xa) {
              return xa;
            });
          } else H != null && (st(H) && (H.key && (!I || I.key !== H.key) && ht(H.key), H = an(
            H,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            m + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (H.key && (!I || I.key !== H.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ze("" + H.key) + "/"
            ) : "") + ie
          )), l.push(H));
          return 1;
        }
        var ce, de, be = 0, Oe = g === "" ? Er : g + un;
        if (Nt(i))
          for (var Dr = 0; Dr < i.length; Dr++)
            ce = i[Dr], de = Oe + bt(ce, Dr), be += it(ce, l, m, de, w);
        else {
          var Rn = N(i);
          if (typeof Rn == "function") {
            var Ds = i;
            Rn === Ds.entries && (It || Ve("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var Oa = Rn.call(Ds), ks, Aa = 0; !(ks = Oa.next()).done; )
              ce = ks.value, de = Oe + bt(ce, Aa++), be += it(ce, l, m, de, w);
          } else if (D === "object") {
            var Is = String(i);
            throw new Error("Objects are not valid as a React child (found: " + (Is === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : Is) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return be;
      }
      function gt(i, l, m) {
        if (i == null)
          return i;
        var g = [], w = 0;
        return it(i, g, "", "", function(D) {
          return l.call(m, D, w++);
        }), g;
      }
      function cn(i) {
        var l = 0;
        return gt(i, function() {
          l++;
        }), l;
      }
      function Sr(i, l, m) {
        gt(i, function() {
          l.apply(this, arguments);
        }, m);
      }
      function fn(i) {
        return gt(i, function(l) {
          return l;
        }) || [];
      }
      function wr(i) {
        if (!st(i))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return i;
      }
      function Rr(i) {
        var l = {
          $$typeof: d,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: i,
          _currentValue2: i,
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
        l.Provider = {
          $$typeof: f,
          _context: l
        };
        var m = !1, g = !1, w = !1;
        {
          var D = {
            $$typeof: d,
            _context: l
          };
          Object.defineProperties(D, {
            Provider: {
              get: function() {
                return g || (g = !0, F("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), l.Provider;
              },
              set: function(x) {
                l.Provider = x;
              }
            },
            _currentValue: {
              get: function() {
                return l._currentValue;
              },
              set: function(x) {
                l._currentValue = x;
              }
            },
            _currentValue2: {
              get: function() {
                return l._currentValue2;
              },
              set: function(x) {
                l._currentValue2 = x;
              }
            },
            _threadCount: {
              get: function() {
                return l._threadCount;
              },
              set: function(x) {
                l._threadCount = x;
              }
            },
            Consumer: {
              get: function() {
                return m || (m = !0, F("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), l.Consumer;
              }
            },
            displayName: {
              get: function() {
                return l.displayName;
              },
              set: function(x) {
                w || (Ve("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", x), w = !0);
              }
            }
          }), l.Consumer = D;
        }
        return l._currentRenderer = null, l._currentRenderer2 = null, l;
      }
      var vt = -1, Qt = 0, Jt = 1, Tr = 2;
      function dn(i) {
        if (i._status === vt) {
          var l = i._result, m = l();
          if (m.then(function(D) {
            if (i._status === Qt || i._status === vt) {
              var x = i;
              x._status = Jt, x._result = D;
            }
          }, function(D) {
            if (i._status === Qt || i._status === vt) {
              var x = i;
              x._status = Tr, x._result = D;
            }
          }), i._status === vt) {
            var g = i;
            g._status = Qt, g._result = m;
          }
        }
        if (i._status === Jt) {
          var w = i._result;
          return w === void 0 && F(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, w), "default" in w || F(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, w), w.default;
        } else
          throw i._result;
      }
      function hn(i) {
        var l = {
          // We use these fields to store the result.
          _status: vt,
          _result: i
        }, m = {
          $$typeof: T,
          _payload: l,
          _init: dn
        };
        {
          var g, w;
          Object.defineProperties(m, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return g;
              },
              set: function(D) {
                F("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), g = D, Object.defineProperty(m, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return w;
              },
              set: function(D) {
                F("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), w = D, Object.defineProperty(m, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return m;
      }
      function pn(i) {
        i != null && i.$$typeof === C ? F("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof i != "function" ? F("forwardRef requires a render function but was given %s.", i === null ? "null" : typeof i) : i.length !== 0 && i.length !== 2 && F("forwardRef render functions accept exactly two parameters: props and ref. %s", i.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), i != null && (i.defaultProps != null || i.propTypes != null) && F("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var l = {
          $$typeof: h,
          render: i
        };
        {
          var m;
          Object.defineProperty(l, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return m;
            },
            set: function(g) {
              m = g, !i.name && !i.displayName && (i.displayName = g);
            }
          });
        }
        return l;
      }
      var Cr;
      Cr = Symbol.for("react.module.reference");
      function c(i) {
        return !!(typeof i == "string" || typeof i == "function" || i === a || i === u || Re || i === o || i === y || i === O || we || i === A || Ue || oe || Pe || typeof i == "object" && i !== null && (i.$$typeof === T || i.$$typeof === C || i.$$typeof === f || i.$$typeof === d || i.$$typeof === h || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        i.$$typeof === Cr || i.getModuleId !== void 0));
      }
      function v(i, l) {
        c(i) || F("memo: The first argument must be a component. Instead received: %s", i === null ? "null" : typeof i);
        var m = {
          $$typeof: C,
          type: i,
          compare: l === void 0 ? null : l
        };
        {
          var g;
          Object.defineProperty(m, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return g;
            },
            set: function(w) {
              g = w, !i.name && !i.displayName && (i.displayName = w);
            }
          });
        }
        return m;
      }
      function _() {
        var i = z.current;
        return i === null && F(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), i;
      }
      function k(i) {
        var l = _();
        if (i._context !== void 0) {
          var m = i._context;
          m.Consumer === i ? F("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : m.Provider === i && F("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return l.useContext(i);
      }
      function K(i) {
        var l = _();
        return l.useState(i);
      }
      function ee(i, l, m) {
        var g = _();
        return g.useReducer(i, l, m);
      }
      function B(i) {
        var l = _();
        return l.useRef(i);
      }
      function M(i, l) {
        var m = _();
        return m.useEffect(i, l);
      }
      function Ce(i, l) {
        var m = _();
        return m.useInsertionEffect(i, l);
      }
      function fe(i, l) {
        var m = _();
        return m.useLayoutEffect(i, l);
      }
      function he(i, l) {
        var m = _();
        return m.useCallback(i, l);
      }
      function Fe(i, l) {
        var m = _();
        return m.useMemo(i, l);
      }
      function at(i, l, m) {
        var g = _();
        return g.useImperativeHandle(i, l, m);
      }
      function Xe(i, l) {
        {
          var m = _();
          return m.useDebugValue(i, l);
        }
      }
      function xe() {
        var i = _();
        return i.useTransition();
      }
      function Zt(i) {
        var l = _();
        return l.useDeferredValue(i);
      }
      function mn() {
        var i = _();
        return i.useId();
      }
      function yn(i, l, m) {
        var g = _();
        return g.useSyncExternalStore(i, l, m);
      }
      var Xt = 0, ds, hs, ps, ms, ys, bs, gs;
      function vs() {
      }
      vs.__reactDisabledLog = !0;
      function la() {
        {
          if (Xt === 0) {
            ds = console.log, hs = console.info, ps = console.warn, ms = console.error, ys = console.group, bs = console.groupCollapsed, gs = console.groupEnd;
            var i = {
              configurable: !0,
              enumerable: !0,
              value: vs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: i,
              log: i,
              warn: i,
              error: i,
              group: i,
              groupCollapsed: i,
              groupEnd: i
            });
          }
          Xt++;
        }
      }
      function ca() {
        {
          if (Xt--, Xt === 0) {
            var i = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: E({}, i, {
                value: ds
              }),
              info: E({}, i, {
                value: hs
              }),
              warn: E({}, i, {
                value: ps
              }),
              error: E({}, i, {
                value: ms
              }),
              group: E({}, i, {
                value: ys
              }),
              groupCollapsed: E({}, i, {
                value: bs
              }),
              groupEnd: E({}, i, {
                value: gs
              })
            });
          }
          Xt < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var bn = Te.ReactCurrentDispatcher, gn;
      function Or(i, l, m) {
        {
          if (gn === void 0)
            try {
              throw Error();
            } catch (w) {
              var g = w.stack.trim().match(/\n( *(at )?)/);
              gn = g && g[1] || "";
            }
          return `
` + gn + i;
        }
      }
      var vn = !1, Ar;
      {
        var fa = typeof WeakMap == "function" ? WeakMap : Map;
        Ar = new fa();
      }
      function Es(i, l) {
        if (!i || vn)
          return "";
        {
          var m = Ar.get(i);
          if (m !== void 0)
            return m;
        }
        var g;
        vn = !0;
        var w = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var D;
        D = bn.current, bn.current = null, la();
        try {
          if (l) {
            var x = function() {
              throw Error();
            };
            if (Object.defineProperty(x.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(x, []);
              } catch (Oe) {
                g = Oe;
              }
              Reflect.construct(i, [], x);
            } else {
              try {
                x.call();
              } catch (Oe) {
                g = Oe;
              }
              i.call(x.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Oe) {
              g = Oe;
            }
            i();
          }
        } catch (Oe) {
          if (Oe && g && typeof Oe.stack == "string") {
            for (var I = Oe.stack.split(`
`), H = g.stack.split(`
`), ie = I.length - 1, le = H.length - 1; ie >= 1 && le >= 0 && I[ie] !== H[le]; )
              le--;
            for (; ie >= 1 && le >= 0; ie--, le--)
              if (I[ie] !== H[le]) {
                if (ie !== 1 || le !== 1)
                  do
                    if (ie--, le--, le < 0 || I[ie] !== H[le]) {
                      var ce = `
` + I[ie].replace(" at new ", " at ");
                      return i.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", i.displayName)), typeof i == "function" && Ar.set(i, ce), ce;
                    }
                  while (ie >= 1 && le >= 0);
                break;
              }
          }
        } finally {
          vn = !1, bn.current = D, ca(), Error.prepareStackTrace = w;
        }
        var de = i ? i.displayName || i.name : "", be = de ? Or(de) : "";
        return typeof i == "function" && Ar.set(i, be), be;
      }
      function da(i, l, m) {
        return Es(i, !1);
      }
      function ha(i) {
        var l = i.prototype;
        return !!(l && l.isReactComponent);
      }
      function xr(i, l, m) {
        if (i == null)
          return "";
        if (typeof i == "function")
          return Es(i, ha(i));
        if (typeof i == "string")
          return Or(i);
        switch (i) {
          case y:
            return Or("Suspense");
          case O:
            return Or("SuspenseList");
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case h:
              return da(i.render);
            case C:
              return xr(i.type, l, m);
            case T: {
              var g = i, w = g._payload, D = g._init;
              try {
                return xr(D(w), l, m);
              } catch {
              }
            }
          }
        return "";
      }
      var _s = {}, Ss = Te.ReactDebugCurrentFrame;
      function Pr(i) {
        if (i) {
          var l = i._owner, m = xr(i.type, i._source, l ? l.type : null);
          Ss.setExtraStackFrame(m);
        } else
          Ss.setExtraStackFrame(null);
      }
      function pa(i, l, m, g, w) {
        {
          var D = Function.call.bind(mt);
          for (var x in i)
            if (D(i, x)) {
              var I = void 0;
              try {
                if (typeof i[x] != "function") {
                  var H = Error((g || "React class") + ": " + m + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw H.name = "Invariant Violation", H;
                }
                I = i[x](l, x, g, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ie) {
                I = ie;
              }
              I && !(I instanceof Error) && (Pr(w), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", m, x, typeof I), Pr(null)), I instanceof Error && !(I.message in _s) && (_s[I.message] = !0, Pr(w), F("Failed %s type: %s", m, I.message), Pr(null));
            }
        }
      }
      function Lt(i) {
        if (i) {
          var l = i._owner, m = xr(i.type, i._source, l ? l.type : null);
          Se(m);
        } else
          Se(null);
      }
      var En;
      En = !1;
      function ws() {
        if (Z.current) {
          var i = We(Z.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
      function ma(i) {
        if (i !== void 0) {
          var l = i.fileName.replace(/^.*[\\\/]/, ""), m = i.lineNumber;
          return `

Check your code at ` + l + ":" + m + ".";
        }
        return "";
      }
      function ya(i) {
        return i != null ? ma(i.__source) : "";
      }
      var Rs = {};
      function ba(i) {
        var l = ws();
        if (!l) {
          var m = typeof i == "string" ? i : i.displayName || i.name;
          m && (l = `

Check the top-level render call using <` + m + ">.");
        }
        return l;
      }
      function Ts(i, l) {
        if (!(!i._store || i._store.validated || i.key != null)) {
          i._store.validated = !0;
          var m = ba(l);
          if (!Rs[m]) {
            Rs[m] = !0;
            var g = "";
            i && i._owner && i._owner !== Z.current && (g = " It was passed a child from " + We(i._owner.type) + "."), Lt(i), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, g), Lt(null);
          }
        }
      }
      function Cs(i, l) {
        if (typeof i == "object") {
          if (Nt(i))
            for (var m = 0; m < i.length; m++) {
              var g = i[m];
              st(g) && Ts(g, l);
            }
          else if (st(i))
            i._store && (i._store.validated = !0);
          else if (i) {
            var w = N(i);
            if (typeof w == "function" && w !== i.entries)
              for (var D = w.call(i), x; !(x = D.next()).done; )
                st(x.value) && Ts(x.value, l);
          }
        }
      }
      function Os(i) {
        {
          var l = i.type;
          if (l == null || typeof l == "string")
            return;
          var m;
          if (typeof l == "function")
            m = l.propTypes;
          else if (typeof l == "object" && (l.$$typeof === h || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          l.$$typeof === C))
            m = l.propTypes;
          else
            return;
          if (m) {
            var g = We(l);
            pa(m, i.props, "prop", g, i);
          } else if (l.PropTypes !== void 0 && !En) {
            En = !0;
            var w = We(l);
            F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
          }
          typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ga(i) {
        {
          for (var l = Object.keys(i.props), m = 0; m < l.length; m++) {
            var g = l[m];
            if (g !== "children" && g !== "key") {
              Lt(i), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Lt(null);
              break;
            }
          }
          i.ref !== null && (Lt(i), F("Invalid attribute `ref` supplied to `React.Fragment`."), Lt(null));
        }
      }
      function As(i, l, m) {
        var g = c(i);
        if (!g) {
          var w = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = ya(l);
          D ? w += D : w += ws();
          var x;
          i === null ? x = "null" : Nt(i) ? x = "array" : i !== void 0 && i.$$typeof === n ? (x = "<" + (We(i.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : x = typeof i, F("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, w);
        }
        var I = sn.apply(this, arguments);
        if (I == null)
          return I;
        if (g)
          for (var H = 2; H < arguments.length; H++)
            Cs(arguments[H], i);
        return i === a ? ga(I) : Os(I), I;
      }
      var xs = !1;
      function va(i) {
        var l = As.bind(null, i);
        return l.type = i, xs || (xs = !0, Ve("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(l, "type", {
          enumerable: !1,
          get: function() {
            return Ve("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: i
            }), i;
          }
        }), l;
      }
      function Ea(i, l, m) {
        for (var g = on.apply(this, arguments), w = 2; w < arguments.length; w++)
          Cs(arguments[w], g.type);
        return Os(g), g;
      }
      function _a(i, l) {
        var m = te.transition;
        te.transition = {};
        var g = te.transition;
        te.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          i();
        } finally {
          if (te.transition = m, m === null && g._updatedFibers) {
            var w = g._updatedFibers.size;
            w > 10 && Ve("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), g._updatedFibers.clear();
          }
        }
      }
      var Ps = !1, Nr = null;
      function Sa(i) {
        if (Nr === null)
          try {
            var l = ("require" + Math.random()).slice(0, 7), m = r && r[l];
            Nr = m.call(r, "timers").setImmediate;
          } catch {
            Nr = function(w) {
              Ps === !1 && (Ps = !0, typeof MessageChannel > "u" && F("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var D = new MessageChannel();
              D.port1.onmessage = w, D.port2.postMessage(void 0);
            };
          }
        return Nr(i);
      }
      var $t = 0, Ns = !1;
      function Fs(i) {
        {
          var l = $t;
          $t++, $.current === null && ($.current = []);
          var m = $.isBatchingLegacy, g;
          try {
            if ($.isBatchingLegacy = !0, g = i(), !m && $.didScheduleLegacyUpdate) {
              var w = $.current;
              w !== null && ($.didScheduleLegacyUpdate = !1, wn(w));
            }
          } catch (de) {
            throw Fr(l), de;
          } finally {
            $.isBatchingLegacy = m;
          }
          if (g !== null && typeof g == "object" && typeof g.then == "function") {
            var D = g, x = !1, I = {
              then: function(de, be) {
                x = !0, D.then(function(Oe) {
                  Fr(l), $t === 0 ? _n(Oe, de, be) : de(Oe);
                }, function(Oe) {
                  Fr(l), be(Oe);
                });
              }
            };
            return !Ns && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              x || (Ns = !0, F("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), I;
          } else {
            var H = g;
            if (Fr(l), $t === 0) {
              var ie = $.current;
              ie !== null && (wn(ie), $.current = null);
              var le = {
                then: function(de, be) {
                  $.current === null ? ($.current = [], _n(H, de, be)) : de(H);
                }
              };
              return le;
            } else {
              var ce = {
                then: function(de, be) {
                  de(H);
                }
              };
              return ce;
            }
          }
        }
      }
      function Fr(i) {
        i !== $t - 1 && F("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), $t = i;
      }
      function _n(i, l, m) {
        {
          var g = $.current;
          if (g !== null)
            try {
              wn(g), Sa(function() {
                g.length === 0 ? ($.current = null, l(i)) : _n(i, l, m);
              });
            } catch (w) {
              m(w);
            }
          else
            l(i);
        }
      }
      var Sn = !1;
      function wn(i) {
        if (!Sn) {
          Sn = !0;
          var l = 0;
          try {
            for (; l < i.length; l++) {
              var m = i[l];
              do
                m = m(!0);
              while (m !== null);
            }
            i.length = 0;
          } catch (g) {
            throw i = i.slice(l + 1), g;
          } finally {
            Sn = !1;
          }
        }
      }
      var wa = As, Ra = Ea, Ta = va, Ca = {
        map: gt,
        forEach: Sr,
        count: cn,
        toArray: fn,
        only: wr
      };
      e.Children = Ca, e.Component = V, e.Fragment = a, e.Profiler = u, e.PureComponent = X, e.StrictMode = o, e.Suspense = y, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, e.act = Fs, e.cloneElement = Ra, e.createContext = Rr, e.createElement = wa, e.createFactory = Ta, e.createRef = tn, e.forwardRef = pn, e.isValidElement = st, e.lazy = hn, e.memo = v, e.startTransition = _a, e.unstable_act = Fs, e.useCallback = he, e.useContext = k, e.useDebugValue = Xe, e.useDeferredValue = Zt, e.useEffect = M, e.useId = mn, e.useImperativeHandle = at, e.useInsertionEffect = Ce, e.useLayoutEffect = fe, e.useMemo = Fe, e.useReducer = ee, e.useRef = B, e.useState = K, e.useSyncExternalStore = yn, e.useTransition = xe, e.version = t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sr, sr.exports)), sr.exports;
}
process.env.NODE_ENV === "production" ? Bn.exports = Va() : Bn.exports = Ga();
var Me = Bn.exports, er = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs;
function za() {
  if (Hs) return er;
  Hs = 1;
  var r = Me, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, f, d) {
    var h, y = {}, O = null, C = null;
    d !== void 0 && (O = "" + d), f.key !== void 0 && (O = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (h in f) n.call(f, h) && !a.hasOwnProperty(h) && (y[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) y[h] === void 0 && (y[h] = f[h]);
    return { $$typeof: e, type: u, key: O, ref: C, props: y, _owner: s.current };
  }
  return er.Fragment = t, er.jsx = o, er.jsxs = o, er;
}
var tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ws;
function Ha() {
  return Ws || (Ws = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Me, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), T = Symbol.iterator, A = "@@iterator";
    function R(c) {
      if (c === null || typeof c != "object")
        return null;
      var v = T && c[T] || c[A];
      return typeof v == "function" ? v : null;
    }
    var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(c) {
      {
        for (var v = arguments.length, _ = new Array(v > 1 ? v - 1 : 0), k = 1; k < v; k++)
          _[k - 1] = arguments[k];
        z("error", c, _);
      }
    }
    function z(c, v, _) {
      {
        var k = L.ReactDebugCurrentFrame, K = k.getStackAddendum();
        K !== "" && (v += "%s", _ = _.concat([K]));
        var ee = _.map(function(B) {
          return String(B);
        });
        ee.unshift("Warning: " + v), Function.prototype.apply.call(console[c], console, ee);
      }
    }
    var te = !1, $ = !1, Z = !1, ue = !1, re = !1, Se;
    Se = Symbol.for("react.module.reference");
    function Ue(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === a || re || c === s || c === d || c === h || ue || c === C || te || $ || Z || typeof c == "object" && c !== null && (c.$$typeof === O || c.$$typeof === y || c.$$typeof === o || c.$$typeof === u || c.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === Se || c.getModuleId !== void 0));
    }
    function oe(c, v, _) {
      var k = c.displayName;
      if (k)
        return k;
      var K = v.displayName || v.name || "";
      return K !== "" ? _ + "(" + K + ")" : _;
    }
    function Pe(c) {
      return c.displayName || "Context";
    }
    function we(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case d:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            var v = c;
            return Pe(v) + ".Consumer";
          case o:
            var _ = c;
            return Pe(_._context) + ".Provider";
          case f:
            return oe(c, c.render, "ForwardRef");
          case y:
            var k = c.displayName || null;
            return k !== null ? k : we(c.type) || "Memo";
          case O: {
            var K = c, ee = K._payload, B = K._init;
            try {
              return we(B(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Re = Object.assign, Te = 0, Ve, F, He, dt, Je, p, E;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function V() {
      {
        if (Te === 0) {
          Ve = console.log, F = console.info, He = console.warn, dt = console.error, Je = console.group, p = console.groupCollapsed, E = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        Te++;
      }
    }
    function Y() {
      {
        if (Te--, Te === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Re({}, c, {
              value: Ve
            }),
            info: Re({}, c, {
              value: F
            }),
            warn: Re({}, c, {
              value: He
            }),
            error: Re({}, c, {
              value: dt
            }),
            group: Re({}, c, {
              value: Je
            }),
            groupCollapsed: Re({}, c, {
              value: p
            }),
            groupEnd: Re({}, c, {
              value: E
            })
          });
        }
        Te < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = L.ReactCurrentDispatcher, se;
    function ne(c, v, _) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (K) {
            var k = K.stack.trim().match(/\n( *(at )?)/);
            se = k && k[1] || "";
          }
        return `
` + se + c;
      }
    }
    var X = !1, ye;
    {
      var tn = typeof WeakMap == "function" ? WeakMap : Map;
      ye = new tn();
    }
    function pr(c, v) {
      if (!c || X)
        return "";
      {
        var _ = ye.get(c);
        if (_ !== void 0)
          return _;
      }
      var k;
      X = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ee;
      ee = ae.current, ae.current = null, V();
      try {
        if (v) {
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
            } catch (xe) {
              k = xe;
            }
            Reflect.construct(c, [], B);
          } else {
            try {
              B.call();
            } catch (xe) {
              k = xe;
            }
            c.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            k = xe;
          }
          c();
        }
      } catch (xe) {
        if (xe && k && typeof xe.stack == "string") {
          for (var M = xe.stack.split(`
`), Ce = k.stack.split(`
`), fe = M.length - 1, he = Ce.length - 1; fe >= 1 && he >= 0 && M[fe] !== Ce[he]; )
            he--;
          for (; fe >= 1 && he >= 0; fe--, he--)
            if (M[fe] !== Ce[he]) {
              if (fe !== 1 || he !== 1)
                do
                  if (fe--, he--, he < 0 || M[fe] !== Ce[he]) {
                    var Fe = `
` + M[fe].replace(" at new ", " at ");
                    return c.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", c.displayName)), typeof c == "function" && ye.set(c, Fe), Fe;
                  }
                while (fe >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        X = !1, ae.current = ee, Y(), Error.prepareStackTrace = K;
      }
      var at = c ? c.displayName || c.name : "", Xe = at ? ne(at) : "";
      return typeof c == "function" && ye.set(c, Xe), Xe;
    }
    function Nt(c, v, _) {
      return pr(c, !1);
    }
    function rn(c) {
      var v = c.prototype;
      return !!(v && v.isReactComponent);
    }
    function Ft(c, v, _) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return pr(c, rn(c));
      if (typeof c == "string")
        return ne(c);
      switch (c) {
        case d:
          return ne("Suspense");
        case h:
          return ne("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case f:
            return Nt(c.render);
          case y:
            return Ft(c.type, v, _);
          case O: {
            var k = c, K = k._payload, ee = k._init;
            try {
              return Ft(ee(K), v, _);
            } catch {
            }
          }
        }
      return "";
    }
    var rt = Object.prototype.hasOwnProperty, ht = {}, mr = L.ReactDebugCurrentFrame;
    function pt(c) {
      if (c) {
        var v = c._owner, _ = Ft(c.type, c._source, v ? v.type : null);
        mr.setExtraStackFrame(_);
      } else
        mr.setExtraStackFrame(null);
    }
    function We(c, v, _, k, K) {
      {
        var ee = Function.call.bind(rt);
        for (var B in c)
          if (ee(c, B)) {
            var M = void 0;
            try {
              if (typeof c[B] != "function") {
                var Ce = Error((k || "React class") + ": " + _ + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              M = c[B](v, B, k, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fe) {
              M = fe;
            }
            M && !(M instanceof Error) && (pt(K), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", _, B, typeof M), pt(null)), M instanceof Error && !(M.message in ht) && (ht[M.message] = !0, pt(K), N("Failed %s type: %s", _, M.message), pt(null));
          }
      }
    }
    var mt = Array.isArray;
    function Dt(c) {
      return mt(c);
    }
    function yr(c) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, _ = v && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return _;
      }
    }
    function br(c) {
      try {
        return kt(c), !1;
      } catch {
        return !0;
      }
    }
    function kt(c) {
      return "" + c;
    }
    function Kt(c) {
      if (br(c))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(c)), kt(c);
    }
    var nt = L.ReactCurrentOwner, nn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gr, vr, yt;
    yt = {};
    function sn(c) {
      if (rt.call(c, "ref")) {
        var v = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function an(c) {
      if (rt.call(c, "key")) {
        var v = Object.getOwnPropertyDescriptor(c, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function on(c, v) {
      if (typeof c.ref == "string" && nt.current && v && nt.current.stateNode !== v) {
        var _ = we(nt.current.type);
        yt[_] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', we(nt.current.type), c.ref), yt[_] = !0);
      }
    }
    function st(c, v) {
      {
        var _ = function() {
          gr || (gr = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        _.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Er(c, v) {
      {
        var _ = function() {
          vr || (vr = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        _.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var un = function(c, v, _, k, K, ee, B) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: v,
        ref: _,
        props: B,
        // Record the component responsible for creating this element.
        _owner: ee
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function ln(c, v, _, k, K) {
      {
        var ee, B = {}, M = null, Ce = null;
        _ !== void 0 && (Kt(_), M = "" + _), an(v) && (Kt(v.key), M = "" + v.key), sn(v) && (Ce = v.ref, on(v, K));
        for (ee in v)
          rt.call(v, ee) && !nn.hasOwnProperty(ee) && (B[ee] = v[ee]);
        if (c && c.defaultProps) {
          var fe = c.defaultProps;
          for (ee in fe)
            B[ee] === void 0 && (B[ee] = fe[ee]);
        }
        if (M || Ce) {
          var he = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          M && st(B, he), Ce && Er(B, he);
        }
        return un(c, M, Ce, K, k, nt.current, B);
      }
    }
    var It = L.ReactCurrentOwner, _r = L.ReactDebugCurrentFrame;
    function Ze(c) {
      if (c) {
        var v = c._owner, _ = Ft(c.type, c._source, v ? v.type : null);
        _r.setExtraStackFrame(_);
      } else
        _r.setExtraStackFrame(null);
    }
    var bt;
    bt = !1;
    function it(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function gt() {
      {
        if (It.current) {
          var c = we(It.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function cn(c) {
      return "";
    }
    var Sr = {};
    function fn(c) {
      {
        var v = gt();
        if (!v) {
          var _ = typeof c == "string" ? c : c.displayName || c.name;
          _ && (v = `

Check the top-level render call using <` + _ + ">.");
        }
        return v;
      }
    }
    function wr(c, v) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var _ = fn(v);
        if (Sr[_])
          return;
        Sr[_] = !0;
        var k = "";
        c && c._owner && c._owner !== It.current && (k = " It was passed a child from " + we(c._owner.type) + "."), Ze(c), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, k), Ze(null);
      }
    }
    function Rr(c, v) {
      {
        if (typeof c != "object")
          return;
        if (Dt(c))
          for (var _ = 0; _ < c.length; _++) {
            var k = c[_];
            it(k) && wr(k, v);
          }
        else if (it(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var K = R(c);
          if (typeof K == "function" && K !== c.entries)
            for (var ee = K.call(c), B; !(B = ee.next()).done; )
              it(B.value) && wr(B.value, v);
        }
      }
    }
    function vt(c) {
      {
        var v = c.type;
        if (v == null || typeof v == "string")
          return;
        var _;
        if (typeof v == "function")
          _ = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === y))
          _ = v.propTypes;
        else
          return;
        if (_) {
          var k = we(v);
          We(_, c.props, "prop", k, c);
        } else if (v.PropTypes !== void 0 && !bt) {
          bt = !0;
          var K = we(v);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qt(c) {
      {
        for (var v = Object.keys(c.props), _ = 0; _ < v.length; _++) {
          var k = v[_];
          if (k !== "children" && k !== "key") {
            Ze(c), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Ze(null);
            break;
          }
        }
        c.ref !== null && (Ze(c), N("Invalid attribute `ref` supplied to `React.Fragment`."), Ze(null));
      }
    }
    var Jt = {};
    function Tr(c, v, _, k, K, ee) {
      {
        var B = Ue(c);
        if (!B) {
          var M = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = cn();
          Ce ? M += Ce : M += gt();
          var fe;
          c === null ? fe = "null" : Dt(c) ? fe = "array" : c !== void 0 && c.$$typeof === e ? (fe = "<" + (we(c.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof c, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, M);
        }
        var he = ln(c, v, _, K, ee);
        if (he == null)
          return he;
        if (B) {
          var Fe = v.children;
          if (Fe !== void 0)
            if (k)
              if (Dt(Fe)) {
                for (var at = 0; at < Fe.length; at++)
                  Rr(Fe[at], c);
                Object.freeze && Object.freeze(Fe);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rr(Fe, c);
        }
        if (rt.call(v, "key")) {
          var Xe = we(c), xe = Object.keys(v).filter(function(yn) {
            return yn !== "key";
          }), Zt = xe.length > 0 ? "{key: someKey, " + xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Jt[Xe + Zt]) {
            var mn = xe.length > 0 ? "{" + xe.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Zt, Xe, mn, Xe), Jt[Xe + Zt] = !0;
          }
        }
        return c === n ? Qt(he) : vt(he), he;
      }
    }
    function dn(c, v, _) {
      return Tr(c, v, _, !0);
    }
    function hn(c, v, _) {
      return Tr(c, v, _, !1);
    }
    var pn = hn, Cr = dn;
    tr.Fragment = n, tr.jsx = pn, tr.jsxs = Cr;
  }()), tr;
}
process.env.NODE_ENV === "production" ? za() : Ha();
var Wa = Me.createContext(
  void 0
), Ya = (r) => {
  const e = Me.useContext(Wa);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Ei = Me.createContext(!1), Ka = () => Me.useContext(Ei);
Ei.Provider;
function Qa() {
  let r = !1;
  return {
    clearReset: () => {
      r = !1;
    },
    reset: () => {
      r = !0;
    },
    isReset: () => r
  };
}
var Ja = Me.createContext(Qa()), Za = () => Me.useContext(Ja);
function Xa(r, e) {
  return typeof r == "function" ? r(...e) : !!r;
}
var eo = (r, e) => {
  (r.suspense || r.throwOnError) && (e.isReset() || (r.retryOnMount = !1));
}, to = (r) => {
  Me.useEffect(() => {
    r.clearReset();
  }, [r]);
}, ro = ({
  result: r,
  errorResetBoundary: e,
  throwOnError: t,
  query: n
}) => r.isError && !e.isReset() && !r.isFetching && n && Xa(t, [r.error, n]), no = (r) => {
  r.suspense && (typeof r.staleTime != "number" && (r.staleTime = 1e3), typeof r.gcTime == "number" && (r.gcTime = Math.max(r.gcTime, 1e3)));
}, so = (r, e) => (r == null ? void 0 : r.suspense) && e.isPending, io = (r, e, t) => e.fetchOptimistic(r).catch(() => {
  t.clearReset();
});
function ao(r, e, t) {
  var d, h, y, O;
  if (process.env.NODE_ENV !== "production" && (typeof r != "object" || Array.isArray(r)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Ya(), s = Ka(), a = Za(), o = n.defaultQueryOptions(r);
  (h = (d = n.getDefaultOptions().queries) == null ? void 0 : d._experimental_beforeQuery) == null || h.call(
    d,
    o
  ), o._optimisticResults = s ? "isRestoring" : "optimistic", no(o), eo(o, a), to(a);
  const [u] = Me.useState(
    () => new e(
      n,
      o
    )
  ), f = u.getOptimisticResult(o);
  if (Me.useSyncExternalStore(
    Me.useCallback(
      (C) => {
        const T = s ? () => {
        } : u.subscribe(gi.batchCalls(C));
        return u.updateResult(), T;
      },
      [u, s]
    ),
    () => u.getCurrentResult(),
    () => u.getCurrentResult()
  ), Me.useEffect(() => {
    u.setOptions(o, { listeners: !1 });
  }, [o, u]), so(o, f))
    throw io(o, u, a);
  if (ro({
    result: f,
    errorResetBoundary: a,
    throwOnError: o.throwOnError,
    query: n.getQueryCache().get(o.queryHash)
  }))
    throw f.error;
  return (O = (y = n.getDefaultOptions().queries) == null ? void 0 : y._experimental_afterQuery) == null || O.call(
    y,
    o,
    f
  ), o.notifyOnChangeProps ? f : u.trackResult(f);
}
function Ee(r, e) {
  return ao(r, Ma);
}
const ve = {
  GET_COMPANY_NAMES: "/company/partial/details",
  GET_DEPARTMENT_BY_ID: "/departments",
  GET_PRODUCTS_PARTIAL: "/products/partial/data",
  GET_PRODUCTS_PARTIAL_BY_ID: "/products/partial",
  SEARCH_PRODUCT: "/products/productname/?search=",
  SEARCH_PRODUCT_ALL_DATA: "/products/serachData/product?search=",
  GET_VENDORS_PARTIAL: "/vendors/filterVendor/all",
  GET_VENDORS_PARTIAL_BY_ID: "/vendors/filterData",
  SEARCH_VENDOR: "/vendors/filterVendor/withfilter?search=",
  GET_FARMERS_PARTIAL: "/farmers/filterFarmer/all",
  GET_FARMERS_PARTIAL_BY_ID: "/farmers/filterFarmer",
  SEARCH_FARMER: "/farmers/filterFarmer/search/withfilter?search=",
  GET_CUSTOMERS_PARTIAL: "/customers/partial/all",
  GET_CUSTOMER_NAMESL: "/customers/names/all",
  GET_UOM_PARTIAL: "/uoms/getAll/partialdata",
  GET_BRANCHES_PARTIAL: "/location-branches/filterData/filter/all",
  GET_ALL_RFPA_NO: "/rfpa/rfpanumbers/getAllRfpaNo",
  GET_ALL_DEAL_SLIP_NO: "/dealSlip/dealslipno/getAlldealslipNo",
  GET_ALL_GRN_NO: "/grns/grnnumbers/getAllgrnNo",
  GET_ALL_DELIVERY_CHALLAN_NO: "/deliveryChallan/challanNos/getAllChallanNo"
};
function _i(r, e) {
  return function() {
    return r.apply(e, arguments);
  };
}
const { toString: oo } = Object.prototype, { getPrototypeOf: ns } = Object, Wr = /* @__PURE__ */ ((r) => (e) => {
  const t = oo.call(e);
  return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ze = (r) => (r = r.toLowerCase(), (e) => Wr(e) === r), Yr = (r) => (e) => typeof e === r, { isArray: Wt } = Array, ur = Yr("undefined");
function uo(r) {
  return r !== null && !ur(r) && r.constructor !== null && !ur(r.constructor) && qe(r.constructor.isBuffer) && r.constructor.isBuffer(r);
}
const Si = ze("ArrayBuffer");
function lo(r) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && Si(r.buffer), e;
}
const co = Yr("string"), qe = Yr("function"), wi = Yr("number"), Kr = (r) => r !== null && typeof r == "object", fo = (r) => r === !0 || r === !1, Lr = (r) => {
  if (Wr(r) !== "object")
    return !1;
  const e = ns(r);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
}, ho = ze("Date"), po = ze("File"), mo = ze("Blob"), yo = ze("FileList"), bo = (r) => Kr(r) && qe(r.pipe), go = (r) => {
  let e;
  return r && (typeof FormData == "function" && r instanceof FormData || qe(r.append) && ((e = Wr(r)) === "formdata" || // detect form-data instance
  e === "object" && qe(r.toString) && r.toString() === "[object FormData]"));
}, vo = ze("URLSearchParams"), [Eo, _o, So, wo] = ["ReadableStream", "Request", "Response", "Headers"].map(ze), Ro = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fr(r, e, { allOwnKeys: t = !1 } = {}) {
  if (r === null || typeof r > "u")
    return;
  let n, s;
  if (typeof r != "object" && (r = [r]), Wt(r))
    for (n = 0, s = r.length; n < s; n++)
      e.call(null, r[n], n, r);
  else {
    const a = t ? Object.getOwnPropertyNames(r) : Object.keys(r), o = a.length;
    let u;
    for (n = 0; n < o; n++)
      u = a[n], e.call(null, r[u], u, r);
  }
}
function Ri(r, e) {
  e = e.toLowerCase();
  const t = Object.keys(r);
  let n = t.length, s;
  for (; n-- > 0; )
    if (s = t[n], e === s.toLowerCase())
      return s;
  return null;
}
const Et = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ti = (r) => !ur(r) && r !== Et;
function Vn() {
  const { caseless: r } = Ti(this) && this || {}, e = {}, t = (n, s) => {
    const a = r && Ri(e, s) || s;
    Lr(e[a]) && Lr(n) ? e[a] = Vn(e[a], n) : Lr(n) ? e[a] = Vn({}, n) : Wt(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && fr(arguments[n], t);
  return e;
}
const To = (r, e, t, { allOwnKeys: n } = {}) => (fr(e, (s, a) => {
  t && qe(s) ? r[a] = _i(s, t) : r[a] = s;
}, { allOwnKeys: n }), r), Co = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), Oo = (r, e, t, n) => {
  r.prototype = Object.create(e.prototype, n), r.prototype.constructor = r, Object.defineProperty(r, "super", {
    value: e.prototype
  }), t && Object.assign(r.prototype, t);
}, Ao = (r, e, t, n) => {
  let s, a, o;
  const u = {};
  if (e = e || {}, r == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(r), a = s.length; a-- > 0; )
      o = s[a], (!n || n(o, r, e)) && !u[o] && (e[o] = r[o], u[o] = !0);
    r = t !== !1 && ns(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}, xo = (r, e, t) => {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  const n = r.indexOf(e, t);
  return n !== -1 && n === t;
}, Po = (r) => {
  if (!r) return null;
  if (Wt(r)) return r;
  let e = r.length;
  if (!wi(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = r[e];
  return t;
}, No = /* @__PURE__ */ ((r) => (e) => r && e instanceof r)(typeof Uint8Array < "u" && ns(Uint8Array)), Fo = (r, e) => {
  const n = (r && r[Symbol.iterator]).call(r);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    e.call(r, a[0], a[1]);
  }
}, Do = (r, e) => {
  let t;
  const n = [];
  for (; (t = r.exec(e)) !== null; )
    n.push(t);
  return n;
}, ko = ze("HTMLFormElement"), Io = (r) => r.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, s) {
    return n.toUpperCase() + s;
  }
), Ys = (({ hasOwnProperty: r }) => (e, t) => r.call(e, t))(Object.prototype), Lo = ze("RegExp"), Ci = (r, e) => {
  const t = Object.getOwnPropertyDescriptors(r), n = {};
  fr(t, (s, a) => {
    let o;
    (o = e(s, a, r)) !== !1 && (n[a] = o || s);
  }), Object.defineProperties(r, n);
}, $o = (r) => {
  Ci(r, (e, t) => {
    if (qe(r) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = r[t];
    if (qe(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, jo = (r, e) => {
  const t = {}, n = (s) => {
    s.forEach((a) => {
      t[a] = !0;
    });
  };
  return Wt(r) ? n(r) : n(String(r).split(e)), t;
}, Mo = () => {
}, qo = (r, e) => r != null && Number.isFinite(r = +r) ? r : e, Cn = "abcdefghijklmnopqrstuvwxyz", Ks = "0123456789", Oi = {
  DIGIT: Ks,
  ALPHA: Cn,
  ALPHA_DIGIT: Cn + Cn.toUpperCase() + Ks
}, Uo = (r = 16, e = Oi.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = e;
  for (; r--; )
    t += e[Math.random() * n | 0];
  return t;
};
function Bo(r) {
  return !!(r && qe(r.append) && r[Symbol.toStringTag] === "FormData" && r[Symbol.iterator]);
}
const Vo = (r) => {
  const e = new Array(10), t = (n, s) => {
    if (Kr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const a = Wt(n) ? [] : {};
        return fr(n, (o, u) => {
          const f = t(o, s + 1);
          !ur(f) && (a[u] = f);
        }), e[s] = void 0, a;
      }
    }
    return n;
  };
  return t(r, 0);
}, Go = ze("AsyncFunction"), zo = (r) => r && (Kr(r) || qe(r)) && qe(r.then) && qe(r.catch), Ai = ((r, e) => r ? setImmediate : e ? ((t, n) => (Et.addEventListener("message", ({ source: s, data: a }) => {
  s === Et && a === t && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), Et.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  qe(Et.postMessage)
), Ho = typeof queueMicrotask < "u" ? queueMicrotask.bind(Et) : typeof process < "u" && process.nextTick || Ai, b = {
  isArray: Wt,
  isArrayBuffer: Si,
  isBuffer: uo,
  isFormData: go,
  isArrayBufferView: lo,
  isString: co,
  isNumber: wi,
  isBoolean: fo,
  isObject: Kr,
  isPlainObject: Lr,
  isReadableStream: Eo,
  isRequest: _o,
  isResponse: So,
  isHeaders: wo,
  isUndefined: ur,
  isDate: ho,
  isFile: po,
  isBlob: mo,
  isRegExp: Lo,
  isFunction: qe,
  isStream: bo,
  isURLSearchParams: vo,
  isTypedArray: No,
  isFileList: yo,
  forEach: fr,
  merge: Vn,
  extend: To,
  trim: Ro,
  stripBOM: Co,
  inherits: Oo,
  toFlatObject: Ao,
  kindOf: Wr,
  kindOfTest: ze,
  endsWith: xo,
  toArray: Po,
  forEachEntry: Fo,
  matchAll: Do,
  isHTMLForm: ko,
  hasOwnProperty: Ys,
  hasOwnProp: Ys,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ci,
  freezeMethods: $o,
  toObjectSet: jo,
  toCamelCase: Io,
  noop: Mo,
  toFiniteNumber: qo,
  findKey: Ri,
  global: Et,
  isContextDefined: Ti,
  ALPHABET: Oi,
  generateString: Uo,
  isSpecCompliantForm: Bo,
  toJSONObject: Vo,
  isAsyncFn: Go,
  isThenable: zo,
  setImmediate: Ai,
  asap: Ho
};
function j(r, e, t, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
b.inherits(j, Error, {
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
      config: b.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const xi = j.prototype, Pi = {};
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
].forEach((r) => {
  Pi[r] = { value: r };
});
Object.defineProperties(j, Pi);
Object.defineProperty(xi, "isAxiosError", { value: !0 });
j.from = (r, e, t, n, s, a) => {
  const o = Object.create(xi);
  return b.toFlatObject(r, o, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError"), j.call(o, r.message, e, t, n, s), o.cause = r, o.name = r.name, a && Object.assign(o, a), o;
};
const Wo = null;
function Gn(r) {
  return b.isPlainObject(r) || b.isArray(r);
}
function Ni(r) {
  return b.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function Qs(r, e, t) {
  return r ? r.concat(e).map(function(s, a) {
    return s = Ni(s), !t && a ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function Yo(r) {
  return b.isArray(r) && !r.some(Gn);
}
const Ko = b.toFlatObject(b, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Qr(r, e, t) {
  if (!b.isObject(r))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = b.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, R) {
    return !b.isUndefined(R[A]);
  });
  const n = t.metaTokens, s = t.visitor || h, a = t.dots, o = t.indexes, f = (t.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(e);
  if (!b.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(T) {
    if (T === null) return "";
    if (b.isDate(T))
      return T.toISOString();
    if (!f && b.isBlob(T))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(T) || b.isTypedArray(T) ? f && typeof Blob == "function" ? new Blob([T]) : Buffer.from(T) : T;
  }
  function h(T, A, R) {
    let L = T;
    if (T && !R && typeof T == "object") {
      if (b.endsWith(A, "{}"))
        A = n ? A : A.slice(0, -2), T = JSON.stringify(T);
      else if (b.isArray(T) && Yo(T) || (b.isFileList(T) || b.endsWith(A, "[]")) && (L = b.toArray(T)))
        return A = Ni(A), L.forEach(function(z, te) {
          !(b.isUndefined(z) || z === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Qs([A], te, a) : o === null ? A : A + "[]",
            d(z)
          );
        }), !1;
    }
    return Gn(T) ? !0 : (e.append(Qs(R, A, a), d(T)), !1);
  }
  const y = [], O = Object.assign(Ko, {
    defaultVisitor: h,
    convertValue: d,
    isVisitable: Gn
  });
  function C(T, A) {
    if (!b.isUndefined(T)) {
      if (y.indexOf(T) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      y.push(T), b.forEach(T, function(L, N) {
        (!(b.isUndefined(L) || L === null) && s.call(
          e,
          L,
          b.isString(N) ? N.trim() : N,
          A,
          O
        )) === !0 && C(L, A ? A.concat(N) : [N]);
      }), y.pop();
    }
  }
  if (!b.isObject(r))
    throw new TypeError("data must be an object");
  return C(r), e;
}
function Js(r) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function ss(r, e) {
  this._pairs = [], r && Qr(r, this, e);
}
const Fi = ss.prototype;
Fi.append = function(e, t) {
  this._pairs.push([e, t]);
};
Fi.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, Js);
  } : Js;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function Qo(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Di(r, e, t) {
  if (!e)
    return r;
  const n = t && t.encode || Qo, s = t && t.serialize;
  let a;
  if (s ? a = s(e, t) : a = b.isURLSearchParams(e) ? e.toString() : new ss(e, t).toString(n), a) {
    const o = r.indexOf("#");
    o !== -1 && (r = r.slice(0, o)), r += (r.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return r;
}
class Zs {
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
  use(e, t, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
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
    b.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const ki = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jo = typeof URLSearchParams < "u" ? URLSearchParams : ss, Zo = typeof FormData < "u" ? FormData : null, Xo = typeof Blob < "u" ? Blob : null, eu = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jo,
    FormData: Zo,
    Blob: Xo
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, is = typeof window < "u" && typeof document < "u", zn = typeof navigator == "object" && navigator || void 0, tu = is && (!zn || ["ReactNative", "NativeScript", "NS"].indexOf(zn.product) < 0), ru = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", nu = is && window.location.href || "http://localhost", su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: is,
  hasStandardBrowserEnv: tu,
  hasStandardBrowserWebWorkerEnv: ru,
  navigator: zn,
  origin: nu
}, Symbol.toStringTag, { value: "Module" })), Le = {
  ...su,
  ...eu
};
function iu(r, e) {
  return Qr(r, new Le.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, s, a) {
      return Le.isNode && b.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function au(r) {
  return b.matchAll(/\w+|\[(\w*)]/g, r).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ou(r) {
  const e = {}, t = Object.keys(r);
  let n;
  const s = t.length;
  let a;
  for (n = 0; n < s; n++)
    a = t[n], e[a] = r[a];
  return e;
}
function Ii(r) {
  function e(t, n, s, a) {
    let o = t[a++];
    if (o === "__proto__") return !0;
    const u = Number.isFinite(+o), f = a >= t.length;
    return o = !o && b.isArray(s) ? s.length : o, f ? (b.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !u) : ((!s[o] || !b.isObject(s[o])) && (s[o] = []), e(t, n, s[o], a) && b.isArray(s[o]) && (s[o] = ou(s[o])), !u);
  }
  if (b.isFormData(r) && b.isFunction(r.entries)) {
    const t = {};
    return b.forEachEntry(r, (n, s) => {
      e(au(n), s, t, 0);
    }), t;
  }
  return null;
}
function uu(r, e, t) {
  if (b.isString(r))
    try {
      return (e || JSON.parse)(r), b.trim(r);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(r);
}
const dr = {
  transitional: ki,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", s = n.indexOf("application/json") > -1, a = b.isObject(e);
    if (a && b.isHTMLForm(e) && (e = new FormData(e)), b.isFormData(e))
      return s ? JSON.stringify(Ii(e)) : e;
    if (b.isArrayBuffer(e) || b.isBuffer(e) || b.isStream(e) || b.isFile(e) || b.isBlob(e) || b.isReadableStream(e))
      return e;
    if (b.isArrayBufferView(e))
      return e.buffer;
    if (b.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let u;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return iu(e, this.formSerializer).toString();
      if ((u = b.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Qr(
          u ? { "files[]": e } : e,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || s ? (t.setContentType("application/json", !1), uu(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || dr.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (b.isResponse(e) || b.isReadableStream(e))
      return e;
    if (e && b.isString(e) && (n && !this.responseType || s)) {
      const o = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? j.from(u, j.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
    FormData: Le.classes.FormData,
    Blob: Le.classes.Blob
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
b.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  dr.headers[r] = {};
});
const lu = b.toObjectSet([
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
]), cu = (r) => {
  const e = {};
  let t, n, s;
  return r && r.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!t || e[t] && lu[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, Xs = Symbol("internals");
function rr(r) {
  return r && String(r).trim().toLowerCase();
}
function $r(r) {
  return r === !1 || r == null ? r : b.isArray(r) ? r.map($r) : String(r);
}
function fu(r) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(r); )
    e[n[1]] = n[2];
  return e;
}
const du = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function On(r, e, t, n, s) {
  if (b.isFunction(n))
    return n.call(this, e, t);
  if (s && (e = t), !!b.isString(e)) {
    if (b.isString(n))
      return e.indexOf(n) !== -1;
    if (b.isRegExp(n))
      return n.test(e);
  }
}
function hu(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function pu(r, e) {
  const t = b.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(r, n + t, {
      value: function(s, a, o) {
        return this[n].call(this, e, s, a, o);
      },
      configurable: !0
    });
  });
}
class $e {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const s = this;
    function a(u, f, d) {
      const h = rr(f);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const y = b.findKey(s, h);
      (!y || s[y] === void 0 || d === !0 || d === void 0 && s[y] !== !1) && (s[y || f] = $r(u));
    }
    const o = (u, f) => b.forEach(u, (d, h) => a(d, h, f));
    if (b.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (b.isString(e) && (e = e.trim()) && !du(e))
      o(cu(e), t);
    else if (b.isHeaders(e))
      for (const [u, f] of e.entries())
        a(f, u, n);
    else
      e != null && a(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = rr(e), e) {
      const n = b.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!t)
          return s;
        if (t === !0)
          return fu(s);
        if (b.isFunction(t))
          return t.call(this, s, n);
        if (b.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = rr(e), e) {
      const n = b.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || On(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let s = !1;
    function a(o) {
      if (o = rr(o), o) {
        const u = b.findKey(n, o);
        u && (!t || On(n, n[u], u, t)) && (delete n[u], s = !0);
      }
    }
    return b.isArray(e) ? e.forEach(a) : a(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, s = !1;
    for (; n--; ) {
      const a = t[n];
      (!e || On(this, this[a], a, e, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, n = {};
    return b.forEach(this, (s, a) => {
      const o = b.findKey(n, a);
      if (o) {
        t[o] = $r(s), delete t[a];
        return;
      }
      const u = e ? hu(a) : String(a).trim();
      u !== a && delete t[a], t[u] = $r(s), n[u] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return b.forEach(this, (n, s) => {
      n != null && n !== !1 && (t[s] = e && b.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const n = new this(e);
    return t.forEach((s) => n.set(s)), n;
  }
  static accessor(e) {
    const n = (this[Xs] = this[Xs] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const u = rr(o);
      n[u] || (pu(s, o), n[u] = !0);
    }
    return b.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
$e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.reduceDescriptors($e.prototype, ({ value: r }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => r,
    set(n) {
      this[t] = n;
    }
  };
});
b.freezeMethods($e);
function An(r, e) {
  const t = this || dr, n = e || t, s = $e.from(n.headers);
  let a = n.data;
  return b.forEach(r, function(u) {
    a = u.call(t, a, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), a;
}
function Li(r) {
  return !!(r && r.__CANCEL__);
}
function Yt(r, e, t) {
  j.call(this, r ?? "canceled", j.ERR_CANCELED, e, t), this.name = "CanceledError";
}
b.inherits(Yt, j, {
  __CANCEL__: !0
});
function $i(r, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? r(t) : e(new j(
    "Request failed with status code " + t.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function mu(r) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return e && e[1] || "";
}
function yu(r, e) {
  r = r || 10;
  const t = new Array(r), n = new Array(r);
  let s = 0, a = 0, o;
  return e = e !== void 0 ? e : 1e3, function(f) {
    const d = Date.now(), h = n[a];
    o || (o = d), t[s] = f, n[s] = d;
    let y = a, O = 0;
    for (; y !== s; )
      O += t[y++], y = y % r;
    if (s = (s + 1) % r, s === a && (a = (a + 1) % r), d - o < e)
      return;
    const C = h && d - h;
    return C ? Math.round(O * 1e3 / C) : void 0;
  };
}
function bu(r, e) {
  let t = 0, n = 1e3 / e, s, a;
  const o = (d, h = Date.now()) => {
    t = h, s = null, a && (clearTimeout(a), a = null), r.apply(null, d);
  };
  return [(...d) => {
    const h = Date.now(), y = h - t;
    y >= n ? o(d, h) : (s = d, a || (a = setTimeout(() => {
      a = null, o(s);
    }, n - y)));
  }, () => s && o(s)];
}
const Vr = (r, e, t = 3) => {
  let n = 0;
  const s = yu(50, 250);
  return bu((a) => {
    const o = a.loaded, u = a.lengthComputable ? a.total : void 0, f = o - n, d = s(f), h = o <= u;
    n = o;
    const y = {
      loaded: o,
      total: u,
      progress: u ? o / u : void 0,
      bytes: f,
      rate: d || void 0,
      estimated: d && u && h ? (u - o) / d : void 0,
      event: a,
      lengthComputable: u != null,
      [e ? "download" : "upload"]: !0
    };
    r(y);
  }, t);
}, ei = (r, e) => {
  const t = r != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: r,
    loaded: n
  }), e[1]];
}, ti = (r) => (...e) => b.asap(() => r(...e)), gu = Le.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = Le.navigator && /(msie|trident)/i.test(Le.navigator.userAgent), t = document.createElement("a");
    let n;
    function s(a) {
      let o = a;
      return e && (t.setAttribute("href", o), o = t.href), t.setAttribute("href", o), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return n = s(window.location.href), function(o) {
      const u = b.isString(o) ? s(o) : o;
      return u.protocol === n.protocol && u.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), vu = Le.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(r, e, t, n, s, a) {
      const o = [r + "=" + encodeURIComponent(e)];
      b.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), b.isString(n) && o.push("path=" + n), b.isString(s) && o.push("domain=" + s), a === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(r) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(r) {
      this.write(r, "", Date.now() - 864e5);
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
function Eu(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function _u(r, e) {
  return e ? r.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : r;
}
function ji(r, e) {
  return r && !Eu(e) ? _u(r, e) : e;
}
const ri = (r) => r instanceof $e ? { ...r } : r;
function At(r, e) {
  e = e || {};
  const t = {};
  function n(d, h, y) {
    return b.isPlainObject(d) && b.isPlainObject(h) ? b.merge.call({ caseless: y }, d, h) : b.isPlainObject(h) ? b.merge({}, h) : b.isArray(h) ? h.slice() : h;
  }
  function s(d, h, y) {
    if (b.isUndefined(h)) {
      if (!b.isUndefined(d))
        return n(void 0, d, y);
    } else return n(d, h, y);
  }
  function a(d, h) {
    if (!b.isUndefined(h))
      return n(void 0, h);
  }
  function o(d, h) {
    if (b.isUndefined(h)) {
      if (!b.isUndefined(d))
        return n(void 0, d);
    } else return n(void 0, h);
  }
  function u(d, h, y) {
    if (y in e)
      return n(d, h);
    if (y in r)
      return n(void 0, d);
  }
  const f = {
    url: a,
    method: a,
    data: a,
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
    validateStatus: u,
    headers: (d, h) => s(ri(d), ri(h), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, r, e)), function(h) {
    const y = f[h] || s, O = y(r[h], e[h], h);
    b.isUndefined(O) && y !== u || (t[h] = O);
  }), t;
}
const Mi = (r) => {
  const e = At({}, r);
  let { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: a, headers: o, auth: u } = e;
  e.headers = o = $e.from(o), e.url = Di(ji(e.baseURL, e.url), r.params, r.paramsSerializer), u && o.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let f;
  if (b.isFormData(t)) {
    if (Le.hasStandardBrowserEnv || Le.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((f = o.getContentType()) !== !1) {
      const [d, ...h] = f ? f.split(";").map((y) => y.trim()).filter(Boolean) : [];
      o.setContentType([d || "multipart/form-data", ...h].join("; "));
    }
  }
  if (Le.hasStandardBrowserEnv && (n && b.isFunction(n) && (n = n(e)), n || n !== !1 && gu(e.url))) {
    const d = s && a && vu.read(a);
    d && o.set(s, d);
  }
  return e;
}, Su = typeof XMLHttpRequest < "u", wu = Su && function(r) {
  return new Promise(function(t, n) {
    const s = Mi(r);
    let a = s.data;
    const o = $e.from(s.headers).normalize();
    let { responseType: u, onUploadProgress: f, onDownloadProgress: d } = s, h, y, O, C, T;
    function A() {
      C && C(), T && T(), s.cancelToken && s.cancelToken.unsubscribe(h), s.signal && s.signal.removeEventListener("abort", h);
    }
    let R = new XMLHttpRequest();
    R.open(s.method.toUpperCase(), s.url, !0), R.timeout = s.timeout;
    function L() {
      if (!R)
        return;
      const z = $e.from(
        "getAllResponseHeaders" in R && R.getAllResponseHeaders()
      ), $ = {
        data: !u || u === "text" || u === "json" ? R.responseText : R.response,
        status: R.status,
        statusText: R.statusText,
        headers: z,
        config: r,
        request: R
      };
      $i(function(ue) {
        t(ue), A();
      }, function(ue) {
        n(ue), A();
      }, $), R = null;
    }
    "onloadend" in R ? R.onloadend = L : R.onreadystatechange = function() {
      !R || R.readyState !== 4 || R.status === 0 && !(R.responseURL && R.responseURL.indexOf("file:") === 0) || setTimeout(L);
    }, R.onabort = function() {
      R && (n(new j("Request aborted", j.ECONNABORTED, r, R)), R = null);
    }, R.onerror = function() {
      n(new j("Network Error", j.ERR_NETWORK, r, R)), R = null;
    }, R.ontimeout = function() {
      let te = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const $ = s.transitional || ki;
      s.timeoutErrorMessage && (te = s.timeoutErrorMessage), n(new j(
        te,
        $.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        r,
        R
      )), R = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in R && b.forEach(o.toJSON(), function(te, $) {
      R.setRequestHeader($, te);
    }), b.isUndefined(s.withCredentials) || (R.withCredentials = !!s.withCredentials), u && u !== "json" && (R.responseType = s.responseType), d && ([O, T] = Vr(d, !0), R.addEventListener("progress", O)), f && R.upload && ([y, C] = Vr(f), R.upload.addEventListener("progress", y), R.upload.addEventListener("loadend", C)), (s.cancelToken || s.signal) && (h = (z) => {
      R && (n(!z || z.type ? new Yt(null, r, R) : z), R.abort(), R = null);
    }, s.cancelToken && s.cancelToken.subscribe(h), s.signal && (s.signal.aborted ? h() : s.signal.addEventListener("abort", h)));
    const N = mu(s.url);
    if (N && Le.protocols.indexOf(N) === -1) {
      n(new j("Unsupported protocol " + N + ":", j.ERR_BAD_REQUEST, r));
      return;
    }
    R.send(a || null);
  });
}, Ru = (r, e) => {
  const { length: t } = r = r ? r.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), s;
    const a = function(d) {
      if (!s) {
        s = !0, u();
        const h = d instanceof Error ? d : this.reason;
        n.abort(h instanceof j ? h : new Yt(h instanceof Error ? h.message : h));
      }
    };
    let o = e && setTimeout(() => {
      o = null, a(new j(`timeout ${e} of ms exceeded`, j.ETIMEDOUT));
    }, e);
    const u = () => {
      r && (o && clearTimeout(o), o = null, r.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(a) : d.removeEventListener("abort", a);
      }), r = null);
    };
    r.forEach((d) => d.addEventListener("abort", a));
    const { signal: f } = n;
    return f.unsubscribe = () => b.asap(u), f;
  }
}, Tu = function* (r, e) {
  let t = r.byteLength;
  if (t < e) {
    yield r;
    return;
  }
  let n = 0, s;
  for (; n < t; )
    s = n + e, yield r.slice(n, s), n = s;
}, Cu = async function* (r, e) {
  for await (const t of Ou(r))
    yield* Tu(t, e);
}, Ou = async function* (r) {
  if (r[Symbol.asyncIterator]) {
    yield* r;
    return;
  }
  const e = r.getReader();
  try {
    for (; ; ) {
      const { done: t, value: n } = await e.read();
      if (t)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, ni = (r, e, t, n) => {
  const s = Cu(r, e);
  let a = 0, o, u = (f) => {
    o || (o = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: d, value: h } = await s.next();
        if (d) {
          u(), f.close();
          return;
        }
        let y = h.byteLength;
        if (t) {
          let O = a += y;
          t(O);
        }
        f.enqueue(new Uint8Array(h));
      } catch (d) {
        throw u(d), d;
      }
    },
    cancel(f) {
      return u(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Jr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", qi = Jr && typeof ReadableStream == "function", Au = Jr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (e) => r.encode(e))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), Ui = (r, ...e) => {
  try {
    return !!r(...e);
  } catch {
    return !1;
  }
}, xu = qi && Ui(() => {
  let r = !1;
  const e = new Request(Le.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return r = !0, "half";
    }
  }).headers.has("Content-Type");
  return r && !e;
}), si = 64 * 1024, Hn = qi && Ui(() => b.isReadableStream(new Response("").body)), Gr = {
  stream: Hn && ((r) => r.body)
};
Jr && ((r) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Gr[e] && (Gr[e] = b.isFunction(r[e]) ? (t) => t[e]() : (t, n) => {
      throw new j(`Response type '${e}' is not supported`, j.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Pu = async (r) => {
  if (r == null)
    return 0;
  if (b.isBlob(r))
    return r.size;
  if (b.isSpecCompliantForm(r))
    return (await new Request(Le.origin, {
      method: "POST",
      body: r
    }).arrayBuffer()).byteLength;
  if (b.isArrayBufferView(r) || b.isArrayBuffer(r))
    return r.byteLength;
  if (b.isURLSearchParams(r) && (r = r + ""), b.isString(r))
    return (await Au(r)).byteLength;
}, Nu = async (r, e) => {
  const t = b.toFiniteNumber(r.getContentLength());
  return t ?? Pu(e);
}, Fu = Jr && (async (r) => {
  let {
    url: e,
    method: t,
    data: n,
    signal: s,
    cancelToken: a,
    timeout: o,
    onDownloadProgress: u,
    onUploadProgress: f,
    responseType: d,
    headers: h,
    withCredentials: y = "same-origin",
    fetchOptions: O
  } = Mi(r);
  d = d ? (d + "").toLowerCase() : "text";
  let C = Ru([s, a && a.toAbortSignal()], o), T;
  const A = C && C.unsubscribe && (() => {
    C.unsubscribe();
  });
  let R;
  try {
    if (f && xu && t !== "get" && t !== "head" && (R = await Nu(h, n)) !== 0) {
      let $ = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), Z;
      if (b.isFormData(n) && (Z = $.headers.get("content-type")) && h.setContentType(Z), $.body) {
        const [ue, re] = ei(
          R,
          Vr(ti(f))
        );
        n = ni($.body, si, ue, re);
      }
    }
    b.isString(y) || (y = y ? "include" : "omit");
    const L = "credentials" in Request.prototype;
    T = new Request(e, {
      ...O,
      signal: C,
      method: t.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: L ? y : void 0
    });
    let N = await fetch(T);
    const z = Hn && (d === "stream" || d === "response");
    if (Hn && (u || z && A)) {
      const $ = {};
      ["status", "statusText", "headers"].forEach((Se) => {
        $[Se] = N[Se];
      });
      const Z = b.toFiniteNumber(N.headers.get("content-length")), [ue, re] = u && ei(
        Z,
        Vr(ti(u), !0)
      ) || [];
      N = new Response(
        ni(N.body, si, ue, () => {
          re && re(), A && A();
        }),
        $
      );
    }
    d = d || "text";
    let te = await Gr[b.findKey(Gr, d) || "text"](N, r);
    return !z && A && A(), await new Promise(($, Z) => {
      $i($, Z, {
        data: te,
        headers: $e.from(N.headers),
        status: N.status,
        statusText: N.statusText,
        config: r,
        request: T
      });
    });
  } catch (L) {
    throw A && A(), L && L.name === "TypeError" && /fetch/i.test(L.message) ? Object.assign(
      new j("Network Error", j.ERR_NETWORK, r, T),
      {
        cause: L.cause || L
      }
    ) : j.from(L, L && L.code, r, T);
  }
}), Wn = {
  http: Wo,
  xhr: wu,
  fetch: Fu
};
b.forEach(Wn, (r, e) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: e });
    } catch {
    }
    Object.defineProperty(r, "adapterName", { value: e });
  }
});
const ii = (r) => `- ${r}`, Du = (r) => b.isFunction(r) || r === null || r === !1, Bi = {
  getAdapter: (r) => {
    r = b.isArray(r) ? r : [r];
    const { length: e } = r;
    let t, n;
    const s = {};
    for (let a = 0; a < e; a++) {
      t = r[a];
      let o;
      if (n = t, !Du(t) && (n = Wn[(o = String(t)).toLowerCase()], n === void 0))
        throw new j(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(s).map(
        ([u, f]) => `adapter ${u} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? a.length > 1 ? `since :
` + a.map(ii).join(`
`) : " " + ii(a[0]) : "as no adapter specified";
      throw new j(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Wn
};
function xn(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new Yt(null, r);
}
function ai(r) {
  return xn(r), r.headers = $e.from(r.headers), r.data = An.call(
    r,
    r.transformRequest
  ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), Bi.getAdapter(r.adapter || dr.adapter)(r).then(function(n) {
    return xn(r), n.data = An.call(
      r,
      r.transformResponse,
      n
    ), n.headers = $e.from(n.headers), n;
  }, function(n) {
    return Li(n) || (xn(r), n && n.response && (n.response.data = An.call(
      r,
      r.transformResponse,
      n.response
    ), n.response.headers = $e.from(n.response.headers))), Promise.reject(n);
  });
}
const Vi = "1.7.7", as = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, e) => {
  as[r] = function(n) {
    return typeof n === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
const oi = {};
as.transitional = function(e, t, n) {
  function s(a, o) {
    return "[Axios v" + Vi + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, u) => {
    if (e === !1)
      throw new j(
        s(o, " has been removed" + (t ? " in " + t : "")),
        j.ERR_DEPRECATED
      );
    return t && !oi[o] && (oi[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(a, o, u) : !0;
  };
};
function ku(r, e, t) {
  if (typeof r != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(r);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], o = e[a];
    if (o) {
      const u = r[a], f = u === void 0 || o(u, a, r);
      if (f !== !0)
        throw new j("option " + a + " must be " + f, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new j("Unknown option " + a, j.ERR_BAD_OPTION);
  }
}
const Yn = {
  assertOptions: ku,
  validators: as
}, ot = Yn.validators;
class Tt {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Zs(),
      response: new Zs()
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
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (n) {
      if (n instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = At(this.defaults, t);
    const { transitional: n, paramsSerializer: s, headers: a } = t;
    n !== void 0 && Yn.assertOptions(n, {
      silentJSONParsing: ot.transitional(ot.boolean),
      forcedJSONParsing: ot.transitional(ot.boolean),
      clarifyTimeoutError: ot.transitional(ot.boolean)
    }, !1), s != null && (b.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : Yn.assertOptions(s, {
      encode: ot.function,
      serialize: ot.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = a && b.merge(
      a.common,
      a[t.method]
    );
    a && b.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (T) => {
        delete a[T];
      }
    ), t.headers = $e.concat(o, a);
    const u = [];
    let f = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(t) === !1 || (f = f && A.synchronous, u.unshift(A.fulfilled, A.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(A) {
      d.push(A.fulfilled, A.rejected);
    });
    let h, y = 0, O;
    if (!f) {
      const T = [ai.bind(this), void 0];
      for (T.unshift.apply(T, u), T.push.apply(T, d), O = T.length, h = Promise.resolve(t); y < O; )
        h = h.then(T[y++], T[y++]);
      return h;
    }
    O = u.length;
    let C = t;
    for (y = 0; y < O; ) {
      const T = u[y++], A = u[y++];
      try {
        C = T(C);
      } catch (R) {
        A.call(this, R);
        break;
      }
    }
    try {
      h = ai.call(this, C);
    } catch (T) {
      return Promise.reject(T);
    }
    for (y = 0, O = d.length; y < O; )
      h = h.then(d[y++], d[y++]);
    return h;
  }
  getUri(e) {
    e = At(this.defaults, e);
    const t = ji(e.baseURL, e.url);
    return Di(t, e.params, e.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(e) {
  Tt.prototype[e] = function(t, n) {
    return this.request(At(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(a, o, u) {
      return this.request(At(u || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  Tt.prototype[e] = t(), Tt.prototype[e + "Form"] = t(!0);
});
class os {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(a) {
      t = a;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const o = new Promise((u) => {
        n.subscribe(u), a = u;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, e(function(a, o, u) {
      n.reason || (n.reason = new Yt(a, o, u), t(n.reason));
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
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), t = (n) => {
      e.abort(n);
    };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new os(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function Iu(r) {
  return function(t) {
    return r.apply(null, t);
  };
}
function Lu(r) {
  return b.isObject(r) && r.isAxiosError === !0;
}
const Kn = {
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
Object.entries(Kn).forEach(([r, e]) => {
  Kn[e] = r;
});
function Gi(r) {
  const e = new Tt(r), t = _i(Tt.prototype.request, e);
  return b.extend(t, Tt.prototype, e, { allOwnKeys: !0 }), b.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return Gi(At(r, s));
  }, t;
}
const me = Gi(dr);
me.Axios = Tt;
me.CanceledError = Yt;
me.CancelToken = os;
me.isCancel = Li;
me.VERSION = Vi;
me.toFormData = Qr;
me.AxiosError = j;
me.Cancel = me.CanceledError;
me.all = function(e) {
  return Promise.all(e);
};
me.spread = Iu;
me.isAxiosError = Lu;
me.mergeConfig = At;
me.AxiosHeaders = $e;
me.formToJSON = (r) => Ii(b.isHTMLForm(r) ? new FormData(r) : r);
me.getAdapter = Bi.getAdapter;
me.HttpStatusCode = Kn;
me.default = me;
const zi = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com", $u = () => me.create({
  baseURL: zi,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class Ae {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = Ae.createService();
  }
  static createService() {
    return Ae._axiosInstance || (Ae._axiosInstance = $u(), Ae.setAuthHeaderInterceptor(), Ae._axiosInstance.interceptors.response.use(Ae.handleSuccess, Ae.handleError)), Ae._axiosInstance;
  }
  // static setAuthToken(accessToken: string, refreshToken: string) {
  //   this._accessToken = accessToken;
  //   this._refreshToken = refreshToken;
  //   console.log("Access: ", this._accessToken);
  //   console.log("Refresh: ", this._refreshToken);
  // }
  static setAccessToken(e) {
    localStorage.setItem("access_token", e);
  }
  static setRefreshToken(e) {
    localStorage.setItem("refresh_token", e);
  }
  // Method to call your refresh endpoint. Adjust URL and payload as needed.
  static async refreshAccessToken() {
    try {
      const e = localStorage.getItem("refresh_token");
      return (await me.post(`${zi}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    Ae._axiosInstance.interceptors.request.use(
      function(e) {
        const t = localStorage.getItem("access_token");
        return t && (e.headers.Authorization = `Bearer ${t}`), e;
      },
      function(e) {
        return Promise.reject(e);
      }
    );
  }
  static setResponseInterceptor() {
    Ae._axiosInstance.interceptors.response.use(
      Ae.handleSuccess,
      Ae.handleError
    );
  }
  static handleSuccess(e) {
    return e.data;
  }
  // Updated error handler to catch 401 errors and try to refresh the token
  static async handleError(e) {
    var s;
    const t = e.config;
    if (e.response && e.response.status === 401 && !t._retry) {
      t._retry = !0;
      try {
        const a = await Ae.refreshAccessToken();
        return Ae.setAccessToken(a), t.headers.set("Authorization", `Bearer ${a}`), Ae._axiosInstance(t);
      } catch (a) {
        console.error("Refresh token failed", a);
      }
    }
    const n = { name: "Error", message: "Something went wrong!" };
    return e.response && e.response.data && (n.message = (s = e.response.data) == null ? void 0 : s.message), Promise.reject(n);
  }
  get(e) {
    return this.service.get(e);
  }
  post(e, t) {
    return this.service.post(e, t);
  }
  postFormData(e, t) {
    return this.service.post(e, t, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  put(e, t) {
    return this.service.put(e, t);
  }
  putFormData(e, t) {
    return this.service.put(e, t, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  patch(e, t) {
    return this.service.patch(e, t);
  }
  patchFormData(e, t) {
    return this.service.patch(e, t, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  delete(e) {
    return this.service.delete(e);
  }
}
class _e extends Ae {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getCompanyNames() {
    const e = ve.GET_COMPANY_NAMES;
    return this.get(e);
  }
  //Product Partial Data
  getProductsPatrialData() {
    const e = ve.GET_PRODUCTS_PARTIAL;
    return this.get(e);
  }
  getProductsPatrialDataById(e) {
    const t = `${ve.GET_PRODUCTS_PARTIAL_BY_ID}/${e}`;
    return this.get(t);
  }
  searchProductDataByQuery(e) {
    const t = `${ve.SEARCH_PRODUCT}${e}`;
    return this.get(t);
  }
  searchProductAllDataByQuery(e) {
    const t = `${ve.SEARCH_PRODUCT_ALL_DATA}${e}`;
    return this.get(t);
  }
  //Vendor Partial Data
  getVendorsPatrialData() {
    const e = ve.GET_VENDORS_PARTIAL;
    return this.get(e);
  }
  getVendorsPatrialDataById(e) {
    const t = `${ve.GET_VENDORS_PARTIAL_BY_ID}/${e}`;
    return this.get(t);
  }
  searchVendorDataByQuery(e) {
    const t = `${ve.SEARCH_VENDOR}${e}`;
    return this.get(t);
  }
  //Farmer Partial Data
  getFarmersPatrialData() {
    const e = ve.GET_FARMERS_PARTIAL;
    return this.get(e);
  }
  getFarmersPatrialDataById(e) {
    const t = `${ve.GET_FARMERS_PARTIAL_BY_ID}/${e}`;
    return this.get(t);
  }
  searchFarmerDataByQuery(e) {
    const t = `${ve.SEARCH_FARMER}${e}`;
    return this.get(t);
  }
  //Customer
  getCustomerPatrialData(e) {
    const t = `${ve.GET_CUSTOMERS_PARTIAL}/${e}`;
    return this.get(t);
  }
  getAllCustomerNames() {
    const e = ve.GET_CUSTOMER_NAMESL;
    return this.get(e);
  }
  //Numbers
  getRFPANums() {
    const e = ve.GET_ALL_RFPA_NO;
    return this.get(e);
  }
  getGRNNums() {
    const e = ve.GET_ALL_GRN_NO;
    return this.get(e);
  }
  getDealSlipNums() {
    const e = ve.GET_ALL_DEAL_SLIP_NO;
    return this.get(e);
  }
  getDeliveryChallanNums() {
    const e = ve.GET_ALL_DELIVERY_CHALLAN_NO;
    return this.get(e);
  }
  getUOMPartialData() {
    const e = ve.GET_UOM_PARTIAL;
    return this.get(e);
  }
  getBranchPartialData() {
    const e = ve.GET_BRANCHES_PARTIAL;
    return this.get(e);
  }
  getDepartmentById(e) {
    const t = `${ve.GET_DEPARTMENT_BY_ID}/${e}`;
    return this.get(t);
  }
}
function zl() {
  return Ee({
    queryKey: ["get-company-names"],
    queryFn: () => _e.getInstance().getCompanyNames()
  });
}
function Hl(r) {
  const e = r.length > 1;
  return Ee({
    queryKey: ["get-department-by-id"],
    queryFn: () => _e.getInstance().getDepartmentById(r),
    enabled: e
  });
}
function Wl() {
  return Ee({
    queryKey: ["get-products-partial-data"],
    queryFn: () => _e.getInstance().getProductsPatrialData()
  });
}
function Yl(r) {
  const e = r.length > 1;
  return Ee({
    queryKey: ["search-product", r],
    queryFn: () => _e.getInstance().getProductsPatrialDataById(r),
    enabled: e
  });
}
function Kl(r) {
  const e = r.length > 1;
  return Ee({
    queryKey: ["search-product", r],
    queryFn: () => _e.getInstance().searchProductDataByQuery(r),
    enabled: e
  });
}
function Ql(r) {
  const e = r.length > 1;
  return Ee({
    queryKey: ["search-product-all-data", r],
    queryFn: () => _e.getInstance().searchProductAllDataByQuery(r),
    enabled: e
  });
}
function Jl() {
  return Ee({
    queryKey: ["get-farmers-partial-data"],
    queryFn: () => _e.getInstance().getFarmersPatrialData()
  });
}
function Zl(r, e) {
  const t = r.length > 1 && e === "farmer";
  return Ee({
    queryKey: ["search-farmer", r, e],
    queryFn: () => _e.getInstance().getFarmersPatrialDataById(r),
    enabled: t
  });
}
function Xl(r) {
  const e = r.length > 1;
  return Ee({
    queryKey: ["search-farmer", r],
    queryFn: () => _e.getInstance().searchFarmerDataByQuery(r),
    enabled: e
  });
}
function ec() {
  return Ee({
    queryKey: ["get-vendors-partial-data"],
    queryFn: () => _e.getInstance().getVendorsPatrialData()
  });
}
function tc(r, e) {
  const t = r.length > 1 && e === "vendor";
  return Ee({
    queryKey: ["search-vendor", r, e],
    queryFn: () => _e.getInstance().getVendorsPatrialDataById(r),
    enabled: t
  });
}
function rc(r) {
  const e = r.length > 1;
  return Ee({
    queryKey: ["search-vendor", r],
    queryFn: () => _e.getInstance().searchVendorDataByQuery(r),
    enabled: e
  });
}
function nc(r) {
  return Ee({
    queryKey: ["get-customers-partial-data", r],
    queryFn: () => _e.getInstance().getCustomerPatrialData(r),
    enabled: !!r
  });
}
function sc() {
  return Ee({
    queryKey: ["get-customer-names"],
    queryFn: () => _e.getInstance().getAllCustomerNames()
  });
}
function ic() {
  return Ee({
    queryKey: ["get-uom-partial-data"],
    queryFn: () => _e.getInstance().getUOMPartialData()
  });
}
function ac() {
  return Ee({
    queryKey: ["get-branches-partial-data"],
    queryFn: () => _e.getInstance().getBranchPartialData()
  });
}
function oc() {
  return Ee({
    queryKey: ["get-rfpa-nums"],
    queryFn: () => _e.getInstance().getRFPANums()
  });
}
function uc() {
  return Ee({
    queryKey: ["get-grn-nums"],
    queryFn: () => _e.getInstance().getGRNNums()
  });
}
function lc() {
  return Ee({
    queryKey: ["get-deal-slip-nums"],
    queryFn: () => _e.getInstance().getDealSlipNums()
  });
}
function cc() {
  return Ee({
    queryKey: ["get-delivery-challan-nums"],
    queryFn: () => _e.getInstance().getDeliveryChallanNums()
  });
}
const fc = (r) => {
  if (r === 0) return "Zero Rupees";
  const e = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ], t = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"], n = ["", "Thousand", "Lakh", "Crore"], s = (f) => {
    let d = "";
    return f >= 100 && (d += e[Math.floor(f / 100)] + " Hundred ", f %= 100), f >= 20 && (d += t[Math.floor(f / 10)] + " ", f %= 10), f > 0 && (d += e[f] + " "), d.trim();
  }, a = [];
  for (a.push(r % 1e3), r = Math.floor(r / 1e3); r > 0; )
    a.push(r % 100), r = Math.floor(r / 100);
  let o = "", u = 0;
  for (; a.length > 0; ) {
    const f = a.shift();
    if (f > 0) {
      const d = s(f);
      u > 0 ? o = `${d} ${n[u]} ${o}`.trim() : o = `${d} ${o}`.trim();
    }
    u++;
  }
  return o + " Rupees";
}, ju = (r, e, t = "") => {
  Object.keys(e).forEach((n) => {
    const s = e[n], a = t ? `${t}[${n}]` : n;
    s !== null && (s instanceof File ? r.append(a, s) : typeof s == "object" && s !== null && !(s instanceof Date) ? ju(r, s, a) : typeof s == "string" ? s.trim().length > 0 && r.append(a, s.trim().toLowerCase()) : s !== void 0 && r.append(a, s.toString()));
  });
};
function dc(r, e, t) {
  return r.map((n) => ({
    value: String(n[e]),
    label: String(n[t])
  }));
}
const hc = () => {
  const r = /* @__PURE__ */ new Date();
  return `${r.getFullYear()}-${(r.getMonth() + 1).toString().padStart(2, "0")}-${r.getDate().toString().padStart(2, "0")}`;
}, pc = (r, e) => {
  let t;
  return (...n) => {
    clearTimeout(t), t = setTimeout(() => r(...n), e);
  };
}, mc = (r) => r.toLowerCase().split(" ").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
function yc(r, e) {
  if (r) {
    const t = Object.entries(r).filter(([n, s]) => s != null && s !== "").map(
      ([n, s]) => `${encodeURIComponent(n)}=${encodeURIComponent(s)}`
    ).join("&");
    return t ? `${e}?${t}` : e;
  } else
    return "";
}
const bc = (r) => {
  const e = [];
  return r ? (r.address1 && e.push(r.address1), r.address2 && e.push(r.address2), r.location && e.push(r.location), r.city && e.push(r.city), r.state && e.push(r.state), r.pincode && e.push(r.pincode), e.join(", ")) : "";
}, gc = (r, e) => e !== null && r !== null ? e == null ? void 0 : e.find((t) => t.id === r) : null, vc = {
  accTypes: [
    { value: "savings", label: "Savings" },
    { value: "current", label: "Current" },
    { value: "cash credit", label: "Cash Credit" },
    { value: "over draft account", label: "Over Draft Account" },
    { value: "other", label: "Other" }
  ],
  inFnVBusiness: [
    { value: "Less than 1 year", label: "Less than 1 year" },
    { value: "Less than 3 year", label: "Less than 3 year" },
    { value: "Less than 5 year", label: "Less than 5 year" },
    { value: "More than 5 year", label: "More than 5 year" },
    { value: "More than 10 year", label: "More than 10 year" },
    { value: "More than 15 year", label: "More than 15 year" }
  ],
  fileYesOrNo: [
    { value: !0, label: "Yes" },
    { value: !1, label: "No" }
  ],
  proposedPaymentTerms: [
    { value: "After Unloading", label: "After Unloading" },
    { value: "After Loading", label: "After Loading" },
    { value: "Between 3 to 5 Days", label: "Between 3 to 5 Days" },
    { value: "1 Week", label: "1 Week" },
    { value: "15 Days", label: "15 Days" }
  ],
  creditTerms: [
    { value: "5/10 net 30", label: "5/10 net 30" },
    { value: "3/15 net 60", label: "3/15 net 60" },
    { value: "2/20 net 90", label: "2/20 net 90" },
    { value: "EOM", label: "EOM" }
  ],
  gender: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" }
  ],
  landHoldingStatus: [
    { value: "owned", label: "Owned" },
    { value: "leased", label: "Leased" },
    { value: "shared", label: "Shared" },
    { value: "encumbered", label: "Encumbered" }
  ],
  landStatus: [
    { value: "cultivable", label: "Cultivable" },
    { value: "fallow", label: "Fallow" },
    { value: "irrigated", label: "Irrigated" },
    { value: "non-irrigated", label: "Non-Irrigated" }
  ],
  organizationType: [
    { value: "proprietor", label: "Proprietor" },
    { value: "partnership", label: "Partnership" },
    { value: "private ltd.", label: "Private Ltd." },
    { value: "llc", label: "LLC" },
    { value: "public ltd.", label: "Public Ltd." },
    { value: "other", label: "Other" }
  ]
}, Be = {
  address1: null,
  address2: null,
  location: null,
  city: null,
  state: null,
  pincode: null
}, Mu = {
  contactFName: null,
  contactMName: null,
  contactLName: null,
  directContactNumber: null,
  mobileNumber: null,
  email: null
}, qu = {
  beneficiaryFName: null,
  beneficiaryMName: null,
  beneficiaryLName: null,
  bankName: null,
  branchAddress: Be,
  typeOfAcc: null,
  ifscCode: null,
  swiftNo: null,
  invoiceCurrency: null,
  cancelledChequeCopy: null
}, Ec = {
  companyName: null,
  category: null,
  subcategory: null,
  inFandVBusinessSince: null,
  dateOfIncorporation: null,
  officeAddress: Be,
  officeContactNo: null,
  officeEmail: null,
  website: null,
  //Other Details
  mainProduct: null,
  listOfAllProducts: [],
  dispatchCenter: null,
  warehouseLocations: null,
  packingCenterLocation: null,
  ifGstnCopy: !1,
  gstn: null,
  gstnCopy: null,
  ifPanCardCopy: !1,
  panNo: null,
  panCardCopy: null,
  ifMsmeCopy: !1,
  msmeNo: null,
  msmeCopy: null,
  tradeLicenseNumber: null,
  proposedPaymentTerms: null,
  creditTerms: null,
  anyDetailsTeamAndInfra: null,
  //Vendor Sales Contact
  vendorSaleInfo: Mu,
  //Vendor Bank Details
  vendorBankDetails: qu,
  //Vendor References
  ref1FName: null,
  ref1MName: null,
  ref1LName: null,
  ref1PrimaryCNumb: null,
  ref1AltrCNumb: null,
  ref1Address: Be,
  ref1Email: null,
  ref2FName: null,
  ref2MName: null,
  ref2LName: null,
  ref2PrimaryCNumb: null,
  ref2AltrCNumb: null,
  ref2Address: Be,
  ref2Email: null
}, Uu = {
  crop: null,
  variety: null,
  noOfPlants: null,
  pruningDate: null,
  expectedHarvestDate: null,
  expectedQuantityInTonnes: null
}, _c = {
  //Farmer Details
  farmerfName: null,
  farmermName: null,
  farmerlName: null,
  residensialAddress: Be,
  primaryMobileNo: null,
  secondaryMobileNo: null,
  email: null,
  gender: null,
  dob: null,
  idProofNo: null,
  idProofCopy: null,
  howDoYouSell: null,
  //Farm Details
  landHoldingStatus: null,
  landStatus: null,
  farmAddress: Be,
  totalLandArea: null,
  cultivationArea: null,
  sevenTwelveNo: null,
  sevenTwelveCopy: null,
  farmerPhoto: null,
  farmPhoto: null,
  crops: [Uu],
  dateOfVisit: null,
  registerBy: null,
  registerDate: null
}, Bu = {
  accDeptFName: null,
  accDeptMName: null,
  accDeptLName: null,
  accDeptMobileNo: null,
  ownerFName: null,
  ownerMName: null,
  ownerLName: null,
  ownerMobileNo: null,
  mandiLicenceNo: null,
  mandiLicenceCopy: null,
  regiNo: null,
  regiCopy: null,
  electricityBill: null,
  consumenrNo: null,
  electricityBillCopy: null,
  notElectricityBillReason: null,
  customerBlacklisted: null,
  ifBlacklistedReason: null,
  blackListedBy: null,
  visitingCard: null,
  visitinContactNo: null,
  visitingCardCopy: null,
  notVisitingCardReason: null,
  ref1FName: null,
  ref1MName: null,
  ref1LName: null,
  ref1Address: Be,
  ref1ContactNo: null,
  ref1Email: null,
  ref2FName: null,
  ref2MName: null,
  ref2LName: null,
  ref2Address: Be,
  ref2ContactNo: null,
  ref2Email: null
}, Vu = {
  billingName: null,
  contactPersonFName: null,
  contactPersonMName: null,
  contactPersonLName: null,
  commonlyKnownAs: null,
  billingAddress: Be,
  billingAddressProofCopy: null,
  primaryContactNo: null,
  secondaryContactNo: null,
  emailPrimary: null,
  emailSecondary: null,
  billingFormatCopy: null
}, Gu = {
  deliveryAddress: Be,
  deliveryAddressProofCopy: null,
  deliveryTime: null,
  receivingPersonFName: null,
  receivingPersonMName: null,
  receivingPersonLName: null,
  primaryContactNo: null,
  secondaryContactNo: null,
  emailPrimary: null,
  emailSecondary: null
}, zu = {
  panNo: null,
  panCopy: null,
  aadharNo: null,
  addharCopy: null,
  gstn: null,
  regiCertificateCopy: null,
  billBookCopy: null,
  certificationsDetails: null,
  otherCertifications: null,
  corpRegiDetails: null,
  otherCorpRegiDetails: null,
  incorpoCertificateCopy: null,
  cinNo: null
}, Hu = {
  ifCancelledCheque: null,
  notCancelledChequeReason: null,
  cancelledChequeCopy: null,
  accType: null,
  otherAccType: null,
  bankStatementCopy: null,
  bankAccHolderFName: null,
  bankAccHolderMName: null,
  bankAccHolderLName: null,
  bankName: null,
  bankBranch: null,
  bankAccNo: null,
  ifscCode: null,
  bankAddress: Be
}, Wu = [
  {
    articleName: null,
    specifications: null,
    parameters: null,
    packingMaterialSpec: null,
    rejectionCriteria: null,
    comment: null
  }
], Yu = {
  paymentMade: null,
  otherPaymentMade: null,
  paymentMode: null,
  otherPaymentMode: null,
  marginDeposit: null,
  rtv: null,
  agreementExecuted: null,
  lc: null,
  bg: null,
  securityDepoCheqNo: null,
  securityDepoAmt: 0,
  IELinAmt: 0,
  IELRecommendedBy: null,
  IELRecommendedDate: null,
  RELinAmt: 0,
  RELRecommendedBy: null,
  RELRecommendedDate: null,
  reason: null,
  docEvidenceCopy: null
}, Ku = {
  proposerBDName: null,
  pflCoordinator: null,
  recommendedBy: null,
  dispatchLocationPfl: null,
  approvedBy: null,
  relationshipManager: null,
  avgBillingMonthly: 0,
  volumeMonthly: 0,
  customerVerification: null,
  verificationAgency: null,
  validityPeriod: null,
  dueDiligenceDone: null,
  creditWorthinessDue: null,
  keyAccountPersonAssigned: null,
  sinceWhen: null,
  ledgerCreatedDate: null,
  ledgerCreatedBy: null,
  ledgerVerifiedApprovedBy: null,
  additionalNotes: null,
  customerCode: null,
  createdBy: null,
  createdDate: null
}, Sc = {
  organisationName: null,
  customerTypes: null,
  customerCategory: null,
  organisationType: null,
  otherType: null,
  customerAddress: Be,
  primaryContactNo: null,
  secondaryContactNo: null,
  emailPrimary: null,
  emailSecondary: null,
  keyMobileNumbers: Bu,
  billingDetails: Vu,
  deliveryDetails: Gu,
  statutoryDetails: zu,
  bankDetails: Hu,
  productSpecification: Wu,
  paymentTerms: Yu,
  officeUseOnly: Ku
}, wc = {
  name: "",
  productOrigin: "",
  brand: "",
  classification: "",
  category: "",
  subcategory: "",
  description: "",
  variety: [],
  count: [],
  size: [],
  uom: "",
  packingType: "",
  shelfLife: 0,
  storageTemp: 0,
  qualityParameters: [{ name: "", type: "good" }],
  image: null
};
function xt(r) {
  this._maxSize = r, this.clear();
}
xt.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
xt.prototype.get = function(r) {
  return this._values[r];
};
xt.prototype.set = function(r, e) {
  return this._size >= this._maxSize && this.clear(), r in this._values || this._size++, this._values[r] = e;
};
var Qu = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Hi = /^\d+$/, Ju = /^\d/, Zu = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, Xu = /^\s*(['"]?)(.*?)(\1)\s*$/, us = 512, ui = new xt(us), li = new xt(us), ci = new xt(us), Ct = {
  Cache: xt,
  split: Qn,
  normalizePath: Pn,
  setter: function(r) {
    var e = Pn(r);
    return li.get(r) || li.set(r, function(n, s) {
      for (var a = 0, o = e.length, u = n; a < o - 1; ) {
        var f = e[a];
        if (f === "__proto__" || f === "constructor" || f === "prototype")
          return n;
        u = u[e[a++]];
      }
      u[e[a]] = s;
    });
  },
  getter: function(r, e) {
    var t = Pn(r);
    return ci.get(r) || ci.set(r, function(s) {
      for (var a = 0, o = t.length; a < o; )
        if (s != null || !e) s = s[t[a++]];
        else return;
      return s;
    });
  },
  join: function(r) {
    return r.reduce(function(e, t) {
      return e + (ls(t) || Hi.test(t) ? "[" + t + "]" : (e ? "." : "") + t);
    }, "");
  },
  forEach: function(r, e, t) {
    el(Array.isArray(r) ? r : Qn(r), e, t);
  }
};
function Pn(r) {
  return ui.get(r) || ui.set(
    r,
    Qn(r).map(function(e) {
      return e.replace(Xu, "$2");
    })
  );
}
function Qn(r) {
  return r.match(Qu) || [""];
}
function el(r, e, t) {
  var n = r.length, s, a, o, u;
  for (a = 0; a < n; a++)
    s = r[a], s && (nl(s) && (s = '"' + s + '"'), u = ls(s), o = !u && /^\d+$/.test(s), e.call(t, s, u, o, a, r));
}
function ls(r) {
  return typeof r == "string" && r && ["'", '"'].indexOf(r.charAt(0)) !== -1;
}
function tl(r) {
  return r.match(Ju) && !r.match(Hi);
}
function rl(r) {
  return Zu.test(r);
}
function nl(r) {
  return !ls(r) && (tl(r) || rl(r));
}
const sl = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, Zr = (r) => r.match(sl) || [], Xr = (r) => r[0].toUpperCase() + r.slice(1), cs = (r, e) => Zr(r).join(e).toLowerCase(), Wi = (r) => Zr(r).reduce(
  (e, t) => `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`,
  ""
), il = (r) => Xr(Wi(r)), al = (r) => cs(r, "_"), ol = (r) => cs(r, "-"), ul = (r) => Xr(cs(r, " ")), ll = (r) => Zr(r).map(Xr).join(" ");
var Nn = {
  words: Zr,
  upperFirst: Xr,
  camelCase: Wi,
  pascalCase: il,
  snakeCase: al,
  kebabCase: ol,
  sentenceCase: ul,
  titleCase: ll
}, fs = { exports: {} };
fs.exports = function(r) {
  return Yi(cl(r), r);
};
fs.exports.array = Yi;
function Yi(r, e) {
  var t = r.length, n = new Array(t), s = {}, a = t, o = fl(e), u = dl(r);
  for (e.forEach(function(d) {
    if (!u.has(d[0]) || !u.has(d[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); a--; )
    s[a] || f(r[a], a, /* @__PURE__ */ new Set());
  return n;
  function f(d, h, y) {
    if (y.has(d)) {
      var O;
      try {
        O = ", node was:" + JSON.stringify(d);
      } catch {
        O = "";
      }
      throw new Error("Cyclic dependency" + O);
    }
    if (!u.has(d))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(d));
    if (!s[h]) {
      s[h] = !0;
      var C = o.get(d) || /* @__PURE__ */ new Set();
      if (C = Array.from(C), h = C.length) {
        y.add(d);
        do {
          var T = C[--h];
          f(T, u.get(T), y);
        } while (h);
        y.delete(d);
      }
      n[--t] = d;
    }
  }
}
function cl(r) {
  for (var e = /* @__PURE__ */ new Set(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.add(s[0]), e.add(s[1]);
  }
  return Array.from(e);
}
function fl(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.has(s[0]) || e.set(s[0], /* @__PURE__ */ new Set()), e.has(s[1]) || e.set(s[1], /* @__PURE__ */ new Set()), e.get(s[0]).add(s[1]);
  }
  return e;
}
function dl(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++)
    e.set(r[t], t);
  return e;
}
var hl = fs.exports;
const pl = /* @__PURE__ */ Ba(hl), ml = Object.prototype.toString, yl = Error.prototype.toString, bl = RegExp.prototype.toString, gl = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", vl = /^Symbol\((.*)\)(.*)$/;
function El(r) {
  return r != +r ? "NaN" : r === 0 && 1 / r < 0 ? "-0" : "" + r;
}
function fi(r, e = !1) {
  if (r == null || r === !0 || r === !1) return "" + r;
  const t = typeof r;
  if (t === "number") return El(r);
  if (t === "string") return e ? `"${r}"` : r;
  if (t === "function") return "[Function " + (r.name || "anonymous") + "]";
  if (t === "symbol") return gl.call(r).replace(vl, "Symbol($1)");
  const n = ml.call(r).slice(8, -1);
  return n === "Date" ? isNaN(r.getTime()) ? "" + r : r.toISOString(r) : n === "Error" || r instanceof Error ? "[" + yl.call(r) + "]" : n === "RegExp" ? bl.call(r) : null;
}
function tt(r, e) {
  let t = fi(r, e);
  return t !== null ? t : JSON.stringify(r, function(n, s) {
    let a = fi(this[n], e);
    return a !== null ? a : s;
  }, 2);
}
function Ki(r) {
  return r == null ? [] : [].concat(r);
}
let Qi, Ji, Zi, _l = /\$\{\s*(\w+)\s*\}/g;
Qi = Symbol.toStringTag;
class di {
  constructor(e, t, n, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Qi] = "Error", this.name = "ValidationError", this.value = t, this.path = n, this.type = s, this.errors = [], this.inner = [], Ki(e).forEach((a) => {
      if (Ie.isError(a)) {
        this.errors.push(...a.errors);
        const o = a.inner.length ? a.inner : [a];
        this.inner.push(...o);
      } else
        this.errors.push(a);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Ji = Symbol.hasInstance;
Zi = Symbol.toStringTag;
class Ie extends Error {
  static formatError(e, t) {
    const n = t.label || t.path || "this";
    return n !== t.path && (t = Object.assign({}, t, {
      path: n
    })), typeof e == "string" ? e.replace(_l, (s, a) => tt(t[a])) : typeof e == "function" ? e(t) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, n, s, a) {
    const o = new di(e, t, n, s);
    if (a)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Zi] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Ie);
  }
  static [Ji](e) {
    return di[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let Ye = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: r,
    type: e,
    value: t,
    originalValue: n
  }) => {
    const s = n != null && n !== t ? ` (cast from the value \`${tt(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${r} must be a \`${e}\` type, but the final value was: \`${tt(t, !0)}\`` + s : `${r} must match the configured type. The validated value was: \`${tt(t, !0)}\`` + s;
  }
}, De = {
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
}, ut = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Jn = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Zn = {
  isValue: "${path} field must be ${value}"
}, Xn = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, jr = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Sl = {
  notType: (r) => {
    const {
      path: e,
      value: t,
      spec: n
    } = r, s = n.types.length;
    if (Array.isArray(t)) {
      if (t.length < s) return `${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${tt(t, !0)}\``;
      if (t.length > s) return `${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${tt(t, !0)}\``;
    }
    return Ie.formatError(Ye.notType, r);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Ye,
  string: De,
  number: ut,
  date: Jn,
  object: Xn,
  array: jr,
  boolean: Zn,
  tuple: Sl
});
const en = (r) => r && r.__isYupSchema__;
class zr {
  static fromOptions(e, t) {
    if (!t.then && !t.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: s,
      otherwise: a
    } = t, o = typeof n == "function" ? n : (...u) => u.every((f) => f === n);
    return new zr(e, (u, f) => {
      var d;
      let h = o(...u) ? s : a;
      return (d = h == null ? void 0 : h(f)) != null ? d : f;
    });
  }
  constructor(e, t) {
    this.fn = void 0, this.refs = e, this.refs = e, this.fn = t;
  }
  resolve(e, t) {
    let n = this.refs.map((a) => (
      // TODO: ? operator here?
      a.getValue(t == null ? void 0 : t.value, t == null ? void 0 : t.parent, t == null ? void 0 : t.context)
    )), s = this.fn(n, e, t);
    if (s === void 0 || // @ts-ignore this can be base
    s === e)
      return e;
    if (!en(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(t);
  }
}
const kr = {
  context: "$",
  value: "."
};
class Pt {
  constructor(e, t = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === kr.context, this.isValue = this.key[0] === kr.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? kr.context : this.isValue ? kr.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Ct.getter(this.path, !0), this.map = t.map;
  }
  getValue(e, t, n) {
    let s = this.isContext ? n : this.isValue ? e : t;
    return this.getter && (s = this.getter(s || {})), this.map && (s = this.map(s)), s;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(e, t) {
    return this.getValue(e, t == null ? void 0 : t.parent, t == null ? void 0 : t.context);
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
Pt.prototype.__isYupRef = !0;
const Ge = (r) => r == null;
function jt(r) {
  function e({
    value: t,
    path: n = "",
    options: s,
    originalValue: a,
    schema: o
  }, u, f) {
    const {
      name: d,
      test: h,
      params: y,
      message: O,
      skipAbsent: C
    } = r;
    let {
      parent: T,
      context: A,
      abortEarly: R = o.spec.abortEarly,
      disableStackTrace: L = o.spec.disableStackTrace
    } = s;
    function N(oe) {
      return Pt.isRef(oe) ? oe.getValue(t, T, A) : oe;
    }
    function z(oe = {}) {
      const Pe = Object.assign({
        value: t,
        originalValue: a,
        label: o.spec.label,
        path: oe.path || n,
        spec: o.spec,
        disableStackTrace: oe.disableStackTrace || L
      }, y, oe.params);
      for (const Re of Object.keys(Pe)) Pe[Re] = N(Pe[Re]);
      const we = new Ie(Ie.formatError(oe.message || O, Pe), t, Pe.path, oe.type || d, Pe.disableStackTrace);
      return we.params = Pe, we;
    }
    const te = R ? u : f;
    let $ = {
      path: n,
      parent: T,
      type: d,
      from: s.from,
      createError: z,
      resolve: N,
      options: s,
      originalValue: a,
      schema: o
    };
    const Z = (oe) => {
      Ie.isError(oe) ? te(oe) : oe ? f(null) : te(z());
    }, ue = (oe) => {
      Ie.isError(oe) ? te(oe) : u(oe);
    };
    if (C && Ge(t))
      return Z(!0);
    let Se;
    try {
      var Ue;
      if (Se = h.call($, t, $), typeof ((Ue = Se) == null ? void 0 : Ue.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${$.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(Se).then(Z, ue);
      }
    } catch (oe) {
      ue(oe);
      return;
    }
    Z(Se);
  }
  return e.OPTIONS = r, e;
}
function wl(r, e, t, n = t) {
  let s, a, o;
  return e ? (Ct.forEach(e, (u, f, d) => {
    let h = f ? u.slice(1, u.length - 1) : u;
    r = r.resolve({
      context: n,
      parent: s,
      value: t
    });
    let y = r.type === "tuple", O = d ? parseInt(h, 10) : 0;
    if (r.innerType || y) {
      if (y && !d) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (t && O >= t.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);
      s = t, t = t && t[O], r = y ? r.spec.types[O] : r.innerType;
    }
    if (!d) {
      if (!r.fields || !r.fields[h]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${r.type}")`);
      s = t, t = t && t[h], r = r.fields[h];
    }
    a = h, o = f ? "[" + u + "]" : "." + u;
  }), {
    schema: r,
    parent: s,
    parentPath: a
  }) : {
    parent: s,
    parentPath: e,
    schema: r
  };
}
class Hr extends Set {
  describe() {
    const e = [];
    for (const t of this.values())
      e.push(Pt.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const n of this.values())
      t.push(e(n));
    return t;
  }
  clone() {
    return new Hr(this.values());
  }
  merge(e, t) {
    const n = this.clone();
    return e.forEach((s) => n.add(s)), t.forEach((s) => n.delete(s)), n;
  }
}
function Mt(r, e = /* @__PURE__ */ new Map()) {
  if (en(r) || !r || typeof r != "object") return r;
  if (e.has(r)) return e.get(r);
  let t;
  if (r instanceof Date)
    t = new Date(r.getTime()), e.set(r, t);
  else if (r instanceof RegExp)
    t = new RegExp(r), e.set(r, t);
  else if (Array.isArray(r)) {
    t = new Array(r.length), e.set(r, t);
    for (let n = 0; n < r.length; n++) t[n] = Mt(r[n], e);
  } else if (r instanceof Map) {
    t = /* @__PURE__ */ new Map(), e.set(r, t);
    for (const [n, s] of r.entries()) t.set(n, Mt(s, e));
  } else if (r instanceof Set) {
    t = /* @__PURE__ */ new Set(), e.set(r, t);
    for (const n of r) t.add(Mt(n, e));
  } else if (r instanceof Object) {
    t = {}, e.set(r, t);
    for (const [n, s] of Object.entries(r)) t[n] = Mt(s, e);
  } else
    throw Error(`Unable to clone ${r}`);
  return t;
}
class je {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Hr(), this._blacklist = new Hr(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(Ye.notType);
    }), this.type = e.type, this._typeCheck = e.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, e == null ? void 0 : e.spec), this.withMutation((t) => {
      t.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(e) {
    if (this._mutate)
      return e && Object.assign(this.spec, e), this;
    const t = Object.create(Object.getPrototypeOf(this));
    return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = Mt(Object.assign({}, this.spec, e)), t;
  }
  label(e) {
    let t = this.clone();
    return t.spec.label = e, t;
  }
  meta(...e) {
    if (e.length === 0) return this.spec.meta;
    let t = this.clone();
    return t.spec.meta = Object.assign(t.spec.meta || {}, e[0]), t;
  }
  withMutation(e) {
    let t = this._mutate;
    this._mutate = !0;
    let n = e(this);
    return this._mutate = t, n;
  }
  concat(e) {
    if (!e || e === this) return this;
    if (e.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);
    let t = this, n = e.clone();
    const s = Object.assign({}, t.spec, n.spec);
    return n.spec = s, n.internalTests = Object.assign({}, t.internalTests, n.internalTests), n._whitelist = t._whitelist.merge(e._whitelist, e._blacklist), n._blacklist = t._blacklist.merge(e._blacklist, e._whitelist), n.tests = t.tests, n.exclusiveTests = t.exclusiveTests, n.withMutation((a) => {
      e.tests.forEach((o) => {
        a.test(o.OPTIONS);
      });
    }), n.transforms = [...t.transforms, ...n.transforms], n;
  }
  isType(e) {
    return e == null ? !!(this.spec.nullable && e === null || this.spec.optional && e === void 0) : this._typeCheck(e);
  }
  resolve(e) {
    let t = this;
    if (t.conditions.length) {
      let n = t.conditions;
      t = t.clone(), t.conditions = [], t = n.reduce((s, a) => a.resolve(s, e), t), t = t.resolve(e);
    }
    return t;
  }
  resolveOptions(e) {
    var t, n, s, a;
    return Object.assign({}, e, {
      from: e.from || [],
      strict: (t = e.strict) != null ? t : this.spec.strict,
      abortEarly: (n = e.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (s = e.recursive) != null ? s : this.spec.recursive,
      disableStackTrace: (a = e.disableStackTrace) != null ? a : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(e, t = {}) {
    let n = this.resolve(Object.assign({
      value: e
    }, t)), s = t.assert === "ignore-optionality", a = n._cast(e, t);
    if (t.assert !== !1 && !n.isType(a)) {
      if (s && Ge(a))
        return a;
      let o = tt(e), u = tt(a);
      throw new TypeError(`The value of ${t.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
` + (u !== o ? `result of cast: ${u}` : ""));
    }
    return a;
  }
  _cast(e, t) {
    let n = e === void 0 ? e : this.transforms.reduce((s, a) => a.call(this, s, e, this), e);
    return n === void 0 && (n = this.getDefault(t)), n;
  }
  _validate(e, t = {}, n, s) {
    let {
      path: a,
      originalValue: o = e,
      strict: u = this.spec.strict
    } = t, f = e;
    u || (f = this._cast(f, Object.assign({
      assert: !1
    }, t)));
    let d = [];
    for (let h of Object.values(this.internalTests))
      h && d.push(h);
    this.runTests({
      path: a,
      value: f,
      originalValue: o,
      options: t,
      tests: d
    }, n, (h) => {
      if (h.length)
        return s(h, f);
      this.runTests({
        path: a,
        value: f,
        originalValue: o,
        options: t,
        tests: this.tests
      }, n, s);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(e, t, n) {
    let s = !1, {
      tests: a,
      value: o,
      originalValue: u,
      path: f,
      options: d
    } = e, h = (A) => {
      s || (s = !0, t(A, o));
    }, y = (A) => {
      s || (s = !0, n(A, o));
    }, O = a.length, C = [];
    if (!O) return y([]);
    let T = {
      value: o,
      originalValue: u,
      path: f,
      options: d,
      schema: this
    };
    for (let A = 0; A < a.length; A++) {
      const R = a[A];
      R(T, h, function(N) {
        N && (Array.isArray(N) ? C.push(...N) : C.push(N)), --O <= 0 && y(C);
      });
    }
  }
  asNestedTest({
    key: e,
    index: t,
    parent: n,
    parentPath: s,
    originalParent: a,
    options: o
  }) {
    const u = e ?? t;
    if (u == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const f = typeof u == "number";
    let d = n[u];
    const h = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: d,
      originalValue: a[u],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [f ? "index" : "key"]: u,
      path: f || u.includes(".") ? `${s || ""}[${f ? u : `"${u}"`}]` : (s ? `${s}.` : "") + e
    });
    return (y, O, C) => this.resolve(h)._validate(d, h, O, C);
  }
  validate(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), a = (n = t == null ? void 0 : t.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return new Promise((o, u) => s._validate(e, t, (f, d) => {
      Ie.isError(f) && (f.value = d), u(f);
    }, (f, d) => {
      f.length ? u(new Ie(f, d, void 0, void 0, a)) : o(d);
    }));
  }
  validateSync(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), a, o = (n = t == null ? void 0 : t.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return s._validate(e, Object.assign({}, t, {
      sync: !0
    }), (u, f) => {
      throw Ie.isError(u) && (u.value = f), u;
    }, (u, f) => {
      if (u.length) throw new Ie(u, e, void 0, void 0, o);
      a = f;
    }), a;
  }
  isValid(e, t) {
    return this.validate(e, t).then(() => !0, (n) => {
      if (Ie.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (n) {
      if (Ie.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : Mt(t);
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
  nullability(e, t) {
    const n = this.clone({
      nullable: e
    });
    return n.internalTests.nullable = jt({
      message: t,
      name: "nullable",
      test(s) {
        return s === null ? this.schema.spec.nullable : !0;
      }
    }), n;
  }
  optionality(e, t) {
    const n = this.clone({
      optional: e
    });
    return n.internalTests.optionality = jt({
      message: t,
      name: "optionality",
      test(s) {
        return s === void 0 ? this.schema.spec.optional : !0;
      }
    }), n;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(e = Ye.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = Ye.notNull) {
    return this.nullability(!1, e);
  }
  required(e = Ye.required) {
    return this.clone().withMutation((t) => t.nonNullable(e).defined(e));
  }
  notRequired() {
    return this.clone().withMutation((e) => e.nullable().optional());
  }
  transform(e) {
    let t = this.clone();
    return t.transforms.push(e), t;
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
    let t;
    if (e.length === 1 ? typeof e[0] == "function" ? t = {
      test: e[0]
    } : t = e[0] : e.length === 2 ? t = {
      name: e[0],
      test: e[1]
    } : t = {
      name: e[0],
      message: e[1],
      test: e[2]
    }, t.message === void 0 && (t.message = Ye.default), typeof t.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), s = jt(t), a = t.exclusive || t.name && n.exclusiveTests[t.name] === !0;
    if (t.exclusive && !t.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return t.name && (n.exclusiveTests[t.name] = !!t.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === t.name && (a || o.OPTIONS.test === s.OPTIONS.test))), n.tests.push(s), n;
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
    let n = this.clone(), s = Ki(e).map((a) => new Pt(a));
    return s.forEach((a) => {
      a.isSibling && n.deps.push(a.key);
    }), n.conditions.push(typeof t == "function" ? new zr(s, t) : zr.fromOptions(s, t)), n;
  }
  typeError(e) {
    let t = this.clone();
    return t.internalTests.typeError = jt({
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
    }), t;
  }
  oneOf(e, t = Ye.oneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._whitelist.add(s), n._blacklist.delete(s);
    }), n.internalTests.whiteList = jt({
      message: t,
      name: "oneOf",
      skipAbsent: !0,
      test(s) {
        let a = this.schema._whitelist, o = a.resolveAll(this.resolve);
        return o.includes(s) ? !0 : this.createError({
          params: {
            values: Array.from(a).join(", "),
            resolved: o
          }
        });
      }
    }), n;
  }
  notOneOf(e, t = Ye.notOneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._blacklist.add(s), n._whitelist.delete(s);
    }), n.internalTests.blacklist = jt({
      message: t,
      name: "notOneOf",
      test(s) {
        let a = this.schema._blacklist, o = a.resolveAll(this.resolve);
        return o.includes(s) ? this.createError({
          params: {
            values: Array.from(a).join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), n;
  }
  strip(e = !0) {
    let t = this.clone();
    return t.spec.strip = e, t;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), {
      label: n,
      meta: s,
      optional: a,
      nullable: o
    } = t.spec;
    return {
      meta: s,
      label: n,
      optional: a,
      nullable: o,
      default: t.getDefault(e),
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests.map((f) => ({
        name: f.OPTIONS.name,
        params: f.OPTIONS.params
      })).filter((f, d, h) => h.findIndex((y) => y.name === f.name) === d)
    };
  }
}
je.prototype.__isYupSchema__ = !0;
for (const r of ["validate", "validateSync"]) je.prototype[`${r}At`] = function(e, t, n = {}) {
  const {
    parent: s,
    parentPath: a,
    schema: o
  } = wl(this, e, t, n.context);
  return o[r](s && s[a], Object.assign({}, n, {
    parent: s,
    path: e
  }));
};
for (const r of ["equals", "is"]) je.prototype[r] = je.prototype.oneOf;
for (const r of ["not", "nope"]) je.prototype[r] = je.prototype.notOneOf;
const Rl = () => !0;
function Mr(r) {
  return new Xi(r);
}
class Xi extends je {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: Rl
    }, e));
  }
}
Mr.prototype = Xi.prototype;
function qr() {
  return new ea();
}
class ea extends je {
  constructor() {
    super({
      type: "boolean",
      check(e) {
        return e instanceof Boolean && (e = e.valueOf()), typeof e == "boolean";
      }
    }), this.withMutation(() => {
      this.transform((e, t, n) => {
        if (n.spec.coerce && !n.isType(e)) {
          if (/^(true|1)$/i.test(String(e))) return !0;
          if (/^(false|0)$/i.test(String(e))) return !1;
        }
        return e;
      });
    });
  }
  isTrue(e = Zn.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(t) {
        return Ge(t) || t === !0;
      }
    });
  }
  isFalse(e = Zn.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(t) {
        return Ge(t) || t === !1;
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
qr.prototype = ea.prototype;
const Tl = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Cl(r) {
  const e = es(r);
  if (!e) return Date.parse ? Date.parse(r) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let t = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (t = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (t = 0 - t)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + t, e.second, e.millisecond);
}
function es(r) {
  var e, t;
  const n = Tl.exec(r);
  return n ? {
    year: et(n[1]),
    month: et(n[2], 1) - 1,
    day: et(n[3], 1),
    hour: et(n[4]),
    minute: et(n[5]),
    second: et(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      et(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (t = n[7]) == null ? void 0 : t.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: et(n[10]),
    minuteOffset: et(n[11])
  } : null;
}
function et(r, e = 0) {
  return Number(r) || e;
}
let Ol = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Al = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), xl = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Pl = "^\\d{4}-\\d{2}-\\d{2}", Nl = "\\d{2}:\\d{2}:\\d{2}", Fl = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Dl = new RegExp(`${Pl}T${Nl}(\\.\\d+)?${Fl}$`), kl = (r) => Ge(r) || r === r.trim(), Il = {}.toString();
function P() {
  return new ta();
}
class ta extends je {
  constructor() {
    super({
      type: "string",
      check(e) {
        return e instanceof String && (e = e.valueOf()), typeof e == "string";
      }
    }), this.withMutation(() => {
      this.transform((e, t, n) => {
        if (!n.spec.coerce || n.isType(e) || Array.isArray(e)) return e;
        const s = e != null && e.toString ? e.toString() : e;
        return s === Il ? e : s;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((t) => t.test({
      message: e || Ye.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((t) => t.OPTIONS.name !== "required"), e));
  }
  length(e, t = De.length) {
    return this.test({
      message: t,
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
  min(e, t = De.min) {
    return this.test({
      message: t,
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
  max(e, t = De.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: t,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(e);
      }
    });
  }
  matches(e, t) {
    let n = !1, s, a;
    return t && (typeof t == "object" ? {
      excludeEmptyString: n = !1,
      message: s,
      name: a
    } = t : s = t), this.test({
      name: a || "matches",
      message: s || De.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(e) !== -1
    });
  }
  email(e = De.email) {
    return this.matches(Ol, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = De.url) {
    return this.matches(Al, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = De.uuid) {
    return this.matches(xl, {
      name: "uuid",
      message: e,
      excludeEmptyString: !1
    });
  }
  datetime(e) {
    let t = "", n, s;
    return e && (typeof e == "object" ? {
      message: t = "",
      allowOffset: n = !1,
      precision: s = void 0
    } = e : t = e), this.matches(Dl, {
      name: "datetime",
      message: t || De.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: t || De.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (a) => {
        if (!a || n) return !0;
        const o = es(a);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: t || De.datetime_precision,
      params: {
        precision: s
      },
      skipAbsent: !0,
      test: (a) => {
        if (!a || s == null) return !0;
        const o = es(a);
        return o ? o.precision === s : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = De.trim) {
    return this.transform((t) => t != null ? t.trim() : t).test({
      message: e,
      name: "trim",
      test: kl
    });
  }
  lowercase(e = De.lowercase) {
    return this.transform((t) => Ge(t) ? t : t.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => Ge(t) || t === t.toLowerCase()
    });
  }
  uppercase(e = De.uppercase) {
    return this.transform((t) => Ge(t) ? t : t.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => Ge(t) || t === t.toUpperCase()
    });
  }
}
P.prototype = ta.prototype;
let Ll = (r) => r != +r;
function ir() {
  return new ra();
}
class ra extends je {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !Ll(e);
      }
    }), this.withMutation(() => {
      this.transform((e, t, n) => {
        if (!n.spec.coerce) return e;
        let s = e;
        if (typeof s == "string") {
          if (s = s.replace(/\s/g, ""), s === "") return NaN;
          s = +s;
        }
        return n.isType(s) || s === null ? s : parseFloat(s);
      });
    });
  }
  min(e, t = ut.min) {
    return this.test({
      message: t,
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
  max(e, t = ut.max) {
    return this.test({
      message: t,
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
  lessThan(e, t = ut.lessThan) {
    return this.test({
      message: t,
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
  moreThan(e, t = ut.moreThan) {
    return this.test({
      message: t,
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
  positive(e = ut.positive) {
    return this.moreThan(0, e);
  }
  negative(e = ut.negative) {
    return this.lessThan(0, e);
  }
  integer(e = ut.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (t) => Number.isInteger(t)
    });
  }
  truncate() {
    return this.transform((e) => Ge(e) ? e : e | 0);
  }
  round(e) {
    var t;
    let n = ["ceil", "floor", "round", "trunc"];
    if (e = ((t = e) == null ? void 0 : t.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (n.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((s) => Ge(s) ? s : Math[e](s));
  }
}
ir.prototype = ra.prototype;
let na = /* @__PURE__ */ new Date(""), $l = (r) => Object.prototype.toString.call(r) === "[object Date]";
function ar() {
  return new hr();
}
class hr extends je {
  constructor() {
    super({
      type: "date",
      check(e) {
        return $l(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, t, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = Cl(e), isNaN(e) ? hr.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, t) {
    let n;
    if (Pt.isRef(e))
      n = e;
    else {
      let s = this.cast(e);
      if (!this._typeCheck(s)) throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = s;
    }
    return n;
  }
  min(e, t = Jn.min) {
    let n = this.prepareParam(e, "min");
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(s) {
        return s >= this.resolve(n);
      }
    });
  }
  max(e, t = Jn.max) {
    let n = this.prepareParam(e, "max");
    return this.test({
      message: t,
      name: "max",
      exclusive: !0,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(s) {
        return s <= this.resolve(n);
      }
    });
  }
}
hr.INVALID_DATE = na;
ar.prototype = hr.prototype;
ar.INVALID_DATE = na;
function jl(r, e = []) {
  let t = [], n = /* @__PURE__ */ new Set(), s = new Set(e.map(([o, u]) => `${o}-${u}`));
  function a(o, u) {
    let f = Ct.split(o)[0];
    n.add(f), s.has(`${u}-${f}`) || t.push([u, f]);
  }
  for (const o of Object.keys(r)) {
    let u = r[o];
    n.add(o), Pt.isRef(u) && u.isSibling ? a(u.path, o) : en(u) && "deps" in u && u.deps.forEach((f) => a(f, o));
  }
  return pl.array(Array.from(n), t).reverse();
}
function hi(r, e) {
  let t = 1 / 0;
  return r.some((n, s) => {
    var a;
    if ((a = e.path) != null && a.includes(n))
      return t = s, !0;
  }), t;
}
function sa(r) {
  return (e, t) => hi(r, e) - hi(r, t);
}
const ia = (r, e, t) => {
  if (typeof r != "string")
    return r;
  let n = r;
  try {
    n = JSON.parse(r);
  } catch {
  }
  return t.isType(n) ? n : r;
};
function Ur(r) {
  if ("fields" in r) {
    const e = {};
    for (const [t, n] of Object.entries(r.fields))
      e[t] = Ur(n);
    return r.setFields(e);
  }
  if (r.type === "array") {
    const e = r.optional();
    return e.innerType && (e.innerType = Ur(e.innerType)), e;
  }
  return r.type === "tuple" ? r.optional().clone({
    types: r.spec.types.map(Ur)
  }) : "optional" in r ? r.optional() : r;
}
const Ml = (r, e) => {
  const t = [...Ct.normalizePath(e)];
  if (t.length === 1) return t[0] in r;
  let n = t.pop(), s = Ct.getter(Ct.join(t), !0)(r);
  return !!(s && n in s);
};
let pi = (r) => Object.prototype.toString.call(r) === "[object Object]";
function ql(r, e) {
  let t = Object.keys(r.fields);
  return Object.keys(e).filter((n) => t.indexOf(n) === -1);
}
const Ul = sa([]);
function Ot(r) {
  return new aa(r);
}
class aa extends je {
  constructor(e) {
    super({
      type: "object",
      check(t) {
        return pi(t) || typeof t == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Ul, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, t = {}) {
    var n;
    let s = super._cast(e, t);
    if (s === void 0) return this.getDefault(t);
    if (!this._typeCheck(s)) return s;
    let a = this.fields, o = (n = t.stripUnknown) != null ? n : this.spec.noUnknown, u = [].concat(this._nodes, Object.keys(s).filter((y) => !this._nodes.includes(y))), f = {}, d = Object.assign({}, t, {
      parent: f,
      __validating: t.__validating || !1
    }), h = !1;
    for (const y of u) {
      let O = a[y], C = y in s;
      if (O) {
        let T, A = s[y];
        d.path = (t.path ? `${t.path}.` : "") + y, O = O.resolve({
          value: A,
          context: t.context,
          parent: f
        });
        let R = O instanceof je ? O.spec : void 0, L = R == null ? void 0 : R.strict;
        if (R != null && R.strip) {
          h = h || y in s;
          continue;
        }
        T = !t.__validating || !L ? (
          // TODO: use _cast, this is double resolving
          O.cast(s[y], d)
        ) : s[y], T !== void 0 && (f[y] = T);
      } else C && !o && (f[y] = s[y]);
      (C !== y in f || f[y] !== s[y]) && (h = !0);
    }
    return h ? f : s;
  }
  _validate(e, t = {}, n, s) {
    let {
      from: a = [],
      originalValue: o = e,
      recursive: u = this.spec.recursive
    } = t;
    t.from = [{
      schema: this,
      value: o
    }, ...a], t.__validating = !0, t.originalValue = o, super._validate(e, t, n, (f, d) => {
      if (!u || !pi(d)) {
        s(f, d);
        return;
      }
      o = o || d;
      let h = [];
      for (let y of this._nodes) {
        let O = this.fields[y];
        !O || Pt.isRef(O) || h.push(O.asNestedTest({
          options: t,
          key: y,
          parent: d,
          parentPath: t.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: h,
        value: d,
        originalValue: o,
        options: t
      }, n, (y) => {
        s(y.sort(this._sortErrors).concat(f), d);
      });
    });
  }
  clone(e) {
    const t = super.clone(e);
    return t.fields = Object.assign({}, this.fields), t._nodes = this._nodes, t._excludedEdges = this._excludedEdges, t._sortErrors = this._sortErrors, t;
  }
  concat(e) {
    let t = super.concat(e), n = t.fields;
    for (let [s, a] of Object.entries(this.fields)) {
      const o = n[s];
      n[s] = o === void 0 ? a : o;
    }
    return t.withMutation((s) => (
      // XXX: excludes here is wrong
      s.setFields(n, [...this._excludedEdges, ...e._excludedEdges])
    ));
  }
  _getDefault(e) {
    if ("default" in this.spec)
      return super._getDefault(e);
    if (!this._nodes.length)
      return;
    let t = {};
    return this._nodes.forEach((n) => {
      var s;
      const a = this.fields[n];
      let o = e;
      (s = o) != null && s.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[n]
      })), t[n] = a && "getDefault" in a ? a.getDefault(o) : void 0;
    }), t;
  }
  setFields(e, t) {
    let n = this.clone();
    return n.fields = e, n._nodes = jl(e, t), n._sortErrors = sa(Object.keys(e)), t && (n._excludedEdges = t), n;
  }
  shape(e, t = []) {
    return this.clone().withMutation((n) => {
      let s = n._excludedEdges;
      return t.length && (Array.isArray(t[0]) || (t = [t]), s = [...n._excludedEdges, ...t]), n.setFields(Object.assign(n.fields, e), s);
    });
  }
  partial() {
    const e = {};
    for (const [t, n] of Object.entries(this.fields))
      e[t] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
    return this.setFields(e);
  }
  deepPartial() {
    return Ur(this);
  }
  pick(e) {
    const t = {};
    for (const n of e)
      this.fields[n] && (t[n] = this.fields[n]);
    return this.setFields(t, this._excludedEdges.filter(([n, s]) => e.includes(n) && e.includes(s)));
  }
  omit(e) {
    const t = [];
    for (const n of Object.keys(this.fields))
      e.includes(n) || t.push(n);
    return this.pick(t);
  }
  from(e, t, n) {
    let s = Ct.getter(e, !0);
    return this.transform((a) => {
      if (!a) return a;
      let o = a;
      return Ml(a, e) && (o = Object.assign({}, a), n || delete o[e], o[t] = s(a)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(ia);
  }
  noUnknown(e = !0, t = Xn.noUnknown) {
    typeof e != "boolean" && (t = e, e = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: t,
      test(s) {
        if (s == null) return !0;
        const a = ql(this.schema, s);
        return !e || a.length === 0 || this.createError({
          params: {
            unknown: a.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = e, n;
  }
  unknown(e = !0, t = Xn.noUnknown) {
    return this.noUnknown(!e, t);
  }
  transformKeys(e) {
    return this.transform((t) => {
      if (!t) return t;
      const n = {};
      for (const s of Object.keys(t)) n[e(s)] = t[s];
      return n;
    });
  }
  camelCase() {
    return this.transformKeys(Nn.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Nn.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => Nn.snakeCase(e).toUpperCase());
  }
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    n.fields = {};
    for (const [a, o] of Object.entries(t.fields)) {
      var s;
      let u = e;
      (s = u) != null && s.value && (u = Object.assign({}, u, {
        parent: u.value,
        value: u.value[a]
      })), n.fields[a] = o.describe(u);
    }
    return n;
  }
}
Ot.prototype = aa.prototype;
function oa(r) {
  return new ua(r);
}
class ua extends je {
  constructor(e) {
    super({
      type: "array",
      spec: {
        types: e
      },
      check(t) {
        return Array.isArray(t);
      }
    }), this.innerType = void 0, this.innerType = e;
  }
  _cast(e, t) {
    const n = super._cast(e, t);
    if (!this._typeCheck(n) || !this.innerType)
      return n;
    let s = !1;
    const a = n.map((o, u) => {
      const f = this.innerType.cast(o, Object.assign({}, t, {
        path: `${t.path || ""}[${u}]`
      }));
      return f !== o && (s = !0), f;
    });
    return s ? a : n;
  }
  _validate(e, t = {}, n, s) {
    var a;
    let o = this.innerType, u = (a = t.recursive) != null ? a : this.spec.recursive;
    t.originalValue != null && t.originalValue, super._validate(e, t, n, (f, d) => {
      var h;
      if (!u || !o || !this._typeCheck(d)) {
        s(f, d);
        return;
      }
      let y = new Array(d.length);
      for (let C = 0; C < d.length; C++) {
        var O;
        y[C] = o.asNestedTest({
          options: t,
          index: C,
          parent: d,
          parentPath: t.path,
          originalParent: (O = t.originalValue) != null ? O : e
        });
      }
      this.runTests({
        value: d,
        tests: y,
        originalValue: (h = t.originalValue) != null ? h : e,
        options: t
      }, n, (C) => s(C.concat(f), d));
    });
  }
  clone(e) {
    const t = super.clone(e);
    return t.innerType = this.innerType, t;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(ia);
  }
  concat(e) {
    let t = super.concat(e);
    return t.innerType = this.innerType, e.innerType && (t.innerType = t.innerType ? (
      // @ts-expect-error Lazy doesn't have concat and will break
      t.innerType.concat(e.innerType)
    ) : e.innerType), t;
  }
  of(e) {
    let t = this.clone();
    if (!en(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + tt(e));
    return t.innerType = e, t.spec = Object.assign({}, t.spec, {
      types: e
    }), t;
  }
  length(e, t = jr.length) {
    return this.test({
      message: t,
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
  min(e, t) {
    return t = t || jr.min, this.test({
      message: t,
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
  max(e, t) {
    return t = t || jr.max, this.test({
      message: t,
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
    return this.default(() => []).transform((e, t) => this._typeCheck(e) ? e : t == null ? [] : [].concat(t));
  }
  compact(e) {
    let t = e ? (n, s, a) => !e(n, s, a) : (n) => !!n;
    return this.transform((n) => n != null ? n.filter(t) : n);
  }
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    if (t.innerType) {
      var s;
      let a = e;
      (s = a) != null && s.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[0]
      })), n.innerType = t.innerType.describe(a);
    }
    return n;
  }
}
oa.prototype = ua.prototype;
const Q = {
  IS_STRING: /^[a-zA-Z ]+$/,
  IS_VEHICLE_NO: /^[a-zA-Z]{2}[- ]?[0-9]{1,2}[- ]?[a-zA-Z]{1,2}[- ]?[0-9]{4}$/,
  IS_NUMBER: /^\d+(\.\d+)?$/,
  CONTACT_NO: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/
}, or = Ot().shape({
  address1: P().required("Address Line 1 is required"),
  address2: P().nullable(),
  location: P().required("Location is required"),
  city: P().required("City is required").matches(Q.IS_STRING, "City name should only contains alphabets."),
  state: P().required("State is required").matches(Q.IS_STRING, "State name should only contains alphabets."),
  pincode: P().required("Pincode is required").matches(Q.PINCODE, "Pincode must be exactly 6 digits")
}), Rc = P().test("is-future-or-today", "Date must be today or in the future", (r) => {
  if (!r)
    return !0;
  const e = new Date(r), t = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), e >= t;
}), Tc = Ot().shape({
  companyName: P().required("Party Name is required"),
  category: P().required("Please select category of vendor"),
  subcategory: P().required("Please select subcategory of vendor"),
  officeAddress: or,
  officeContactNo: P().required("Please enter contact number.").matches(Q.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: P().nullable().email("Please enter valid email"),
  mainProduct: P().nullable().matches(Q.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: P().nullable().matches(Q.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: P().nullable().matches(Q.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: P().nullable().matches(Q.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: P().nullable(),
  creditTerms: P().nullable(),
  ifGstnCopy: qr().required(),
  gstn: P().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN number required if GSTN is available."),
    otherwise: (r) => r.nullable()
  }),
  gstnCopy: Mr().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN copy required if GSTN is available."),
    otherwise: (r) => r.nullable()
  }),
  ifPanCardCopy: qr().required(),
  panNo: P().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN number required if PAN is available."),
    otherwise: (r) => r.nullable()
  }),
  panCardCopy: Mr().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN card copy required if PAN is available."),
    otherwise: (r) => r.nullable()
  }),
  ifMsmeCopy: qr().required(),
  msmeNo: P().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME number required if MSME is available."),
    otherwise: (r) => r.nullable()
  }),
  msmeCopy: Mr().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME copy required if MSME is available."),
    otherwise: (r) => r.nullable()
  }),
  vendorSaleInfo: Ot().shape({
    contactFName: P().required("Contact person first name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
    contactMName: P().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
    contactLName: P().required("Contact person last name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
    directContactNumber: P().required("Contact person phone number is required").matches(Q.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: P().nullable().matches(Q.CONTACT_NO, "Please enter a valid contact number."),
    email: P().nullable().email("Please enter valid email")
  }),
  vendorBankDetails: Ot().shape({
    beneficiaryFName: P().required("Beneficiary person first name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: P().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: P().required("Beneficiary person last name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
    bankName: P().required("Bank name is required.").matches(Q.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: or,
    typeOfAcc: P().required("Account type is required."),
    ifscCode: P().required("IFSC code of bank is required."),
    swiftNo: P().nullable(),
    invoiceCurrency: P().nullable(),
    cancelledChequeCopy: P().nullable()
  }),
  ref1FName: P().required("Reference person first name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
  ref1MName: P().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
  ref1LName: P().required("Reference person first name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: P().required("Contact number is required").matches(Q.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: P().nullable().matches(Q.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: or,
  ref1Email: P().nullable().email("Please enter valid email."),
  ref2FName: P().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
  ref2MName: P().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
  ref2LName: P().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: P().nullable().matches(Q.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: P().nullable().matches(Q.CONTACT_NO, "Please enter valid contact number."),
  // ref2Address: initValAddress,
  ref2Email: P().nullable().email("Please enter valid email.")
}), Bl = /^[6-9]\d{9}$/, Vl = P().matches(Bl, "Please enter a valid 10-digit contact number"), Cc = Ot().shape({
  farmerfName: P().required("First Name is required").matches(Q.IS_STRING, "Name should only contains alphabets."),
  farmermName: P().nullable().matches(Q.IS_STRING, "Name should only contains alphabets."),
  farmerlName: P().required("Last Name is required").matches(Q.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: or,
  primaryMobileNo: Vl,
  secondaryMobileNo: P().nullable().matches(Q.CONTACT_NO, "Please enter valid contact number."),
  email: P().email("Please enter valid emial"),
  dob: ar().required("Date of Birth is required"),
  farmAddress: or,
  totalLandArea: ir().nullable().positive("Area cannot be negative."),
  cultivationArea: ir().nullable().positive("Area cannot be negative."),
  crops: oa(
    Ot({
      crop: P().required("Crop name is required"),
      noOfPlants: ir().nullable().positive("Number of plants cannot be negative"),
      pruningDate: ar().required("Pruning date is required."),
      expectedHarvestDate: ar().required("Expected harvest date is required."),
      expectedQuantityInTonnes: ir().required("Expected quantity in metric tones are required.").positive("Quantity cannot be negative")
    }).required("At least one crop is required")
  )
});
export {
  Q as REGEX,
  or as addressSchema,
  ju as appendFormData,
  yc as buildUrl,
  Vl as contactNoSchema,
  mc as convertInTitleCase,
  Rc as dateSchema,
  pc as debounce,
  Cc as farmerValidationSchema,
  bc as formatAddress,
  hc as getCurrentDate,
  gc as getSelectedProductData,
  Be as initValAddress,
  Uu as initValCrop,
  Sc as initValCustomer,
  _c as initValFarmer,
  wc as initValProduct,
  Ec as initValVendor,
  dc as mapToValueLabelArray,
  fc as numToWords,
  vc as sharedData,
  lc as useGetAllDealSlipNums,
  cc as useGetAllDeliveryChallanNums,
  uc as useGetAllGRNNums,
  oc as useGetAllRFPANums,
  ac as useGetBranchesPartialData,
  zl as useGetCompanyNames,
  sc as useGetCustomerNames,
  nc as useGetCustomerPartialData,
  Hl as useGetDepartmentById,
  Jl as useGetFarmersPartialData,
  Zl as useGetFarmersPartialDataById,
  Wl as useGetProductsPartialData,
  Yl as useGetProductsPartialDataById,
  ic as useGetUOMPartialData,
  ec as useGetVendorsPartialData,
  tc as useGetVendorsPartialDataById,
  Xl as useSearchFarmerData,
  Ql as useSearchProductAllData,
  Kl as useSearchProductData,
  rc as useSearchVendorData,
  Tc as vendorValidationSchema
};
