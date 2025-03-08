var is = (t) => {
  throw TypeError(t);
};
var nn = (t, e, r) => e.has(t) || is("Cannot " + r);
var v = (t, e, r) => (nn(t, e, "read from private field"), r ? r.call(t) : e.get(t)), re = (t, e, r) => e.has(t) ? is("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), U = (t, e, r, n) => (nn(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), oe = (t, e, r) => (nn(t, e, "access private method"), r);
var Cr = class {
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
}, wr = typeof window > "u" || "Deno" in globalThis;
function Fo() {
}
function as(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function jo(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function br(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Me(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function us(t) {
  return JSON.stringify(
    t,
    (e, r) => ln(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function cn(t, e) {
  if (t === e)
    return t;
  const r = cs(t) && cs(e);
  if (r || ln(t) && ln(e)) {
    const n = r ? t : Object.keys(t), o = n.length, a = r ? e : Object.keys(e), c = a.length, l = r ? [] : {};
    let g = 0;
    for (let m = 0; m < c; m++) {
      const y = r ? m : a[m];
      (!r && n.includes(y) || r) && t[y] === void 0 && e[y] === void 0 ? (l[y] = void 0, g++) : (l[y] = cn(t[y], e[y]), l[y] === t[y] && t[y] !== void 0 && g++);
    }
    return o === c && g === o ? t : l;
  }
  return e;
}
function Sr(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function cs(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function ln(t) {
  if (!ls(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!ls(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function ls(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function fs(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return cn(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return cn(t, e);
  }
  return e;
}
var pt, Xe, Ct, Ds, No = (Ds = class extends Cr {
  constructor() {
    super();
    re(this, pt);
    re(this, Xe);
    re(this, Ct);
    U(this, Ct, (e) => {
      if (!wr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Xe) || this.setEventListener(v(this, Ct));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, Xe)) == null || e.call(this), U(this, Xe, void 0));
  }
  setEventListener(e) {
    var r;
    U(this, Ct, e), (r = v(this, Xe)) == null || r.call(this), U(this, Xe, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    v(this, pt) !== e && (U(this, pt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof v(this, pt) == "boolean" ? v(this, pt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, pt = new WeakMap(), Xe = new WeakMap(), Ct = new WeakMap(), Ds), Io = new No(), At, Ze, Pt, Ls, Uo = (Ls = class extends Cr {
  constructor() {
    super();
    re(this, At, !0);
    re(this, Ze);
    re(this, Pt);
    U(this, Pt, (e) => {
      if (!wr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Ze) || this.setEventListener(v(this, Pt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, Ze)) == null || e.call(this), U(this, Ze, void 0));
  }
  setEventListener(e) {
    var r;
    U(this, Pt, e), (r = v(this, Ze)) == null || r.call(this), U(this, Ze, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    v(this, At) !== e && (U(this, At, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return v(this, At);
  }
}, At = new WeakMap(), Ze = new WeakMap(), Pt = new WeakMap(), Ls), Mo = new Uo();
function $o(t) {
  return (t ?? "online") === "online" ? Mo.isOnline() : !0;
}
function Bo() {
  let t = [], e = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  }, o = (l) => setTimeout(l, 0);
  const a = (l) => {
    e ? t.push(l) : o(() => {
      r(l);
    });
  }, c = () => {
    const l = t;
    t = [], l.length && o(() => {
      n(() => {
        l.forEach((g) => {
          r(g);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let g;
      e++;
      try {
        g = l();
      } finally {
        e--, e || c();
      }
      return g;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...g) => {
      a(() => {
        l(...g);
      });
    },
    schedule: a,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (l) => {
      r = l;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (l) => {
      n = l;
    },
    setScheduler: (l) => {
      o = l;
    }
  };
}
var Ar = Bo();
function qo(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: $o(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Vo() {
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
var Ce, W, Kt, we, yt, kt, Ue, Jt, xt, Dt, mt, vt, et, Lt, K, zt, fn, dn, hn, pn, yn, mn, vn, Ns, Fs, Wo = (Fs = class extends Cr {
  constructor(e, r) {
    super();
    re(this, K);
    re(this, Ce);
    re(this, W);
    re(this, Kt);
    re(this, we);
    re(this, yt);
    re(this, kt);
    re(this, Ue);
    re(this, Jt);
    re(this, xt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    re(this, Dt);
    re(this, mt);
    re(this, vt);
    re(this, et);
    re(this, Lt, /* @__PURE__ */ new Set());
    this.options = r, U(this, Ce, e), U(this, Ue, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, W).addObserver(this), ds(v(this, W), this.options) ? oe(this, K, zt).call(this) : this.updateResult(), oe(this, K, pn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return gn(
      v(this, W),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return gn(
      v(this, W),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, K, yn).call(this), oe(this, K, mn).call(this), v(this, W).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, o = v(this, W);
    if (this.options = v(this, Ce).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Me(this.options.enabled, v(this, W)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, K, vn).call(this), v(this, W).setOptions(this.options), n._defaulted && !Sr(this.options, n) && v(this, Ce).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, W),
      observer: this
    });
    const a = this.hasListeners();
    a && hs(
      v(this, W),
      o,
      this.options,
      n
    ) && oe(this, K, zt).call(this), this.updateResult(r), a && (v(this, W) !== o || Me(this.options.enabled, v(this, W)) !== Me(n.enabled, v(this, W)) || br(this.options.staleTime, v(this, W)) !== br(n.staleTime, v(this, W))) && oe(this, K, fn).call(this);
    const c = oe(this, K, dn).call(this);
    a && (v(this, W) !== o || Me(this.options.enabled, v(this, W)) !== Me(n.enabled, v(this, W)) || c !== v(this, et)) && oe(this, K, hn).call(this, c);
  }
  getOptimisticResult(e) {
    const r = v(this, Ce).getQueryCache().build(v(this, Ce), e), n = this.createResult(r, e);
    return zo(this, n) && (U(this, we, n), U(this, kt, this.options), U(this, yt, v(this, W).state)), n;
  }
  getCurrentResult() {
    return v(this, we);
  }
  trackResult(e, r) {
    const n = {};
    return Object.keys(e).forEach((o) => {
      Object.defineProperty(n, o, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(o), r == null || r(o), e[o])
      });
    }), n;
  }
  trackProp(e) {
    v(this, Lt).add(e);
  }
  getCurrentQuery() {
    return v(this, W);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const r = v(this, Ce).defaultQueryOptions(e), n = v(this, Ce).getQueryCache().build(v(this, Ce), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    return oe(this, K, zt).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), v(this, we)));
  }
  createResult(e, r) {
    var he;
    const n = v(this, W), o = this.options, a = v(this, we), c = v(this, yt), l = v(this, kt), m = e !== n ? e.state : v(this, Kt), { state: y } = e;
    let b = { ...y }, j = !1, k;
    if (r._optimisticResults) {
      const Z = this.hasListeners(), Se = !Z && ds(e, r), $e = Z && hs(e, n, r, o);
      (Se || $e) && (b = {
        ...b,
        ...qo(y.data, e.options)
      }), r._optimisticResults === "isRestoring" && (b.fetchStatus = "idle");
    }
    let { error: O, errorUpdatedAt: A, status: S } = b;
    if (r.select && b.data !== void 0)
      if (a && b.data === (c == null ? void 0 : c.data) && r.select === v(this, Jt))
        k = v(this, xt);
      else
        try {
          U(this, Jt, r.select), k = r.select(b.data), k = fs(a == null ? void 0 : a.data, k, r), U(this, xt, k), U(this, Ue, null);
        } catch (Z) {
          U(this, Ue, Z);
        }
    else
      k = b.data;
    if (r.placeholderData !== void 0 && k === void 0 && S === "pending") {
      let Z;
      if (a != null && a.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        Z = a.data;
      else if (Z = typeof r.placeholderData == "function" ? r.placeholderData(
        (he = v(this, Dt)) == null ? void 0 : he.state.data,
        v(this, Dt)
      ) : r.placeholderData, r.select && Z !== void 0)
        try {
          Z = r.select(Z), U(this, Ue, null);
        } catch (Se) {
          U(this, Ue, Se);
        }
      Z !== void 0 && (S = "success", k = fs(
        a == null ? void 0 : a.data,
        Z,
        r
      ), j = !0);
    }
    v(this, Ue) && (O = v(this, Ue), k = v(this, xt), A = Date.now(), S = "error");
    const $ = b.fetchStatus === "fetching", D = S === "pending", G = S === "error", ie = D && $, N = k !== void 0;
    return {
      status: S,
      fetchStatus: b.fetchStatus,
      isPending: D,
      isSuccess: S === "success",
      isError: G,
      isInitialLoading: ie,
      isLoading: ie,
      data: k,
      dataUpdatedAt: b.dataUpdatedAt,
      error: O,
      errorUpdatedAt: A,
      failureCount: b.fetchFailureCount,
      failureReason: b.fetchFailureReason,
      errorUpdateCount: b.errorUpdateCount,
      isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
      isFetchedAfterMount: b.dataUpdateCount > m.dataUpdateCount || b.errorUpdateCount > m.errorUpdateCount,
      isFetching: $,
      isRefetching: $ && !D,
      isLoadingError: G && !N,
      isPaused: b.fetchStatus === "paused",
      isPlaceholderData: j,
      isRefetchError: G && N,
      isStale: An(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = v(this, we), n = this.createResult(v(this, W), this.options);
    if (U(this, yt, v(this, W).state), U(this, kt, this.options), v(this, yt).data !== void 0 && U(this, Dt, v(this, W)), Sr(n, r))
      return;
    U(this, we, n);
    const o = {}, a = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: c } = this.options, l = typeof c == "function" ? c() : c;
      if (l === "all" || !l && !v(this, Lt).size)
        return !0;
      const g = new Set(
        l ?? v(this, Lt)
      );
      return this.options.throwOnError && g.add("error"), Object.keys(v(this, we)).some((m) => {
        const y = m;
        return v(this, we)[y] !== r[y] && g.has(y);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && a() && (o.listeners = !0), oe(this, K, Ns).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, K, pn).call(this);
  }
}, Ce = new WeakMap(), W = new WeakMap(), Kt = new WeakMap(), we = new WeakMap(), yt = new WeakMap(), kt = new WeakMap(), Ue = new WeakMap(), Jt = new WeakMap(), xt = new WeakMap(), Dt = new WeakMap(), mt = new WeakMap(), vt = new WeakMap(), et = new WeakMap(), Lt = new WeakMap(), K = new WeakSet(), zt = function(e) {
  oe(this, K, vn).call(this);
  let r = v(this, W).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(Fo)), r;
}, fn = function() {
  oe(this, K, yn).call(this);
  const e = br(
    this.options.staleTime,
    v(this, W)
  );
  if (wr || v(this, we).isStale || !as(e))
    return;
  const n = jo(v(this, we).dataUpdatedAt, e) + 1;
  U(this, mt, setTimeout(() => {
    v(this, we).isStale || this.updateResult();
  }, n));
}, dn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, W)) : this.options.refetchInterval) ?? !1;
}, hn = function(e) {
  oe(this, K, mn).call(this), U(this, et, e), !(wr || Me(this.options.enabled, v(this, W)) === !1 || !as(v(this, et)) || v(this, et) === 0) && U(this, vt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Io.isFocused()) && oe(this, K, zt).call(this);
  }, v(this, et)));
}, pn = function() {
  oe(this, K, fn).call(this), oe(this, K, hn).call(this, oe(this, K, dn).call(this));
}, yn = function() {
  v(this, mt) && (clearTimeout(v(this, mt)), U(this, mt, void 0));
}, mn = function() {
  v(this, vt) && (clearInterval(v(this, vt)), U(this, vt, void 0));
}, vn = function() {
  const e = v(this, Ce).getQueryCache().build(v(this, Ce), this.options);
  if (e === v(this, W))
    return;
  const r = v(this, W);
  U(this, W, e), U(this, Kt, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, Ns = function(e) {
  Ar.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(v(this, we));
    }), v(this, Ce).getQueryCache().notify({
      query: v(this, W),
      type: "observerResultsUpdated"
    });
  });
}, Fs);
function Ho(t, e) {
  return Me(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function ds(t, e) {
  return Ho(t, e) || t.state.data !== void 0 && gn(t, e, e.refetchOnMount);
}
function gn(t, e, r) {
  if (Me(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && An(t, e);
  }
  return !1;
}
function hs(t, e, r, n) {
  return (t !== e || Me(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && An(t, r);
}
function An(t, e) {
  return Me(e.enabled, t) !== !1 && t.isStaleByTime(br(e.staleTime, t));
}
function zo(t, e) {
  return !Sr(t.getCurrentResult(), e);
}
var tt, rt, Ae, We, He, Er, bn, js, Yo = (js = class extends Cr {
  constructor(e, r) {
    super();
    re(this, He);
    re(this, tt);
    re(this, rt);
    re(this, Ae);
    re(this, We);
    U(this, tt, e), this.setOptions(r), this.bindMethods(), oe(this, He, Er).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = v(this, tt).defaultMutationOptions(e), Sr(this.options, r) || v(this, tt).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: v(this, Ae),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && us(r.mutationKey) !== us(this.options.mutationKey) ? this.reset() : ((n = v(this, Ae)) == null ? void 0 : n.state.status) === "pending" && v(this, Ae).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = v(this, Ae)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    oe(this, He, Er).call(this), oe(this, He, bn).call(this, e);
  }
  getCurrentResult() {
    return v(this, rt);
  }
  reset() {
    var e;
    (e = v(this, Ae)) == null || e.removeObserver(this), U(this, Ae, void 0), oe(this, He, Er).call(this), oe(this, He, bn).call(this);
  }
  mutate(e, r) {
    var n;
    return U(this, We, r), (n = v(this, Ae)) == null || n.removeObserver(this), U(this, Ae, v(this, tt).getMutationCache().build(v(this, tt), this.options)), v(this, Ae).addObserver(this), v(this, Ae).execute(e);
  }
}, tt = new WeakMap(), rt = new WeakMap(), Ae = new WeakMap(), We = new WeakMap(), He = new WeakSet(), Er = function() {
  var r;
  const e = ((r = v(this, Ae)) == null ? void 0 : r.state) ?? Vo();
  U(this, rt, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, bn = function(e) {
  Ar.batch(() => {
    var r, n, o, a, c, l, g, m;
    if (v(this, We) && this.hasListeners()) {
      const y = v(this, rt).variables, b = v(this, rt).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = v(this, We)).onSuccess) == null || n.call(r, e.data, y, b), (a = (o = v(this, We)).onSettled) == null || a.call(o, e.data, null, y, b)) : (e == null ? void 0 : e.type) === "error" && ((l = (c = v(this, We)).onError) == null || l.call(c, e.error, y, b), (m = (g = v(this, We)).onSettled) == null || m.call(
        g,
        void 0,
        e.error,
        y,
        b
      ));
    }
    this.listeners.forEach((y) => {
      y(v(this, rt));
    });
  });
}, js), En = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function Go() {
  if (ps) return M;
  ps = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.iterator;
  function j(f) {
    return f === null || typeof f != "object" ? null : (f = b && f[b] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var k = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, A = {};
  function S(f, R, B) {
    this.props = f, this.context = R, this.refs = A, this.updater = B || k;
  }
  S.prototype.isReactComponent = {}, S.prototype.setState = function(f, R) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, R, "setState");
  }, S.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function $() {
  }
  $.prototype = S.prototype;
  function D(f, R, B) {
    this.props = f, this.context = R, this.refs = A, this.updater = B || k;
  }
  var G = D.prototype = new $();
  G.constructor = D, O(G, S.prototype), G.isPureReactComponent = !0;
  var ie = Array.isArray, N = Object.prototype.hasOwnProperty, se = { current: null }, he = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(f, R, B) {
    var V, z = {}, ne = null, ee = null;
    if (R != null) for (V in R.ref !== void 0 && (ee = R.ref), R.key !== void 0 && (ne = "" + R.key), R) N.call(R, V) && !he.hasOwnProperty(V) && (z[V] = R[V]);
    var X = arguments.length - 2;
    if (X === 1) z.children = B;
    else if (1 < X) {
      for (var J = Array(X), pe = 0; pe < X; pe++) J[pe] = arguments[pe + 2];
      z.children = J;
    }
    if (f && f.defaultProps) for (V in X = f.defaultProps, X) z[V] === void 0 && (z[V] = X[V]);
    return { $$typeof: t, type: f, key: ne, ref: ee, props: z, _owner: se.current };
  }
  function Se(f, R) {
    return { $$typeof: t, type: f.type, key: R, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function $e(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }
  function It(f) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(B) {
      return R[B];
    });
  }
  var nt = /\/+/g;
  function Re(f, R) {
    return typeof f == "object" && f !== null && f.key != null ? It("" + f.key) : R.toString(36);
  }
  function Oe(f, R, B, V, z) {
    var ne = typeof f;
    (ne === "undefined" || ne === "boolean") && (f = null);
    var ee = !1;
    if (f === null) ee = !0;
    else switch (ne) {
      case "string":
      case "number":
        ee = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case t:
          case e:
            ee = !0;
        }
    }
    if (ee) return ee = f, z = z(ee), f = V === "" ? "." + Re(ee, 0) : V, ie(z) ? (B = "", f != null && (B = f.replace(nt, "$&/") + "/"), Oe(z, R, B, "", function(pe) {
      return pe;
    })) : z != null && ($e(z) && (z = Se(z, B + (!z.key || ee && ee.key === z.key ? "" : ("" + z.key).replace(nt, "$&/") + "/") + f)), R.push(z)), 1;
    if (ee = 0, V = V === "" ? "." : V + ":", ie(f)) for (var X = 0; X < f.length; X++) {
      ne = f[X];
      var J = V + Re(ne, X);
      ee += Oe(ne, R, B, J, z);
    }
    else if (J = j(f), typeof J == "function") for (f = J.call(f), X = 0; !(ne = f.next()).done; ) ne = ne.value, J = V + Re(ne, X++), ee += Oe(ne, R, B, J, z);
    else if (ne === "object") throw R = String(f), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return ee;
  }
  function ve(f, R, B) {
    if (f == null) return f;
    var V = [], z = 0;
    return Oe(f, V, "", "", function(ne) {
      return R.call(B, ne, z++);
    }), V;
  }
  function Le(f) {
    if (f._status === -1) {
      var R = f._result;
      R = R(), R.then(function(B) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = B);
      }, function(B) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = B);
      }), f._status === -1 && (f._status = 0, f._result = R);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var C = { current: null }, je = { transition: null }, st = { ReactCurrentDispatcher: C, ReactCurrentBatchConfig: je, ReactCurrentOwner: se };
  function Be() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: ve, forEach: function(f, R, B) {
    ve(f, function() {
      R.apply(this, arguments);
    }, B);
  }, count: function(f) {
    var R = 0;
    return ve(f, function() {
      R++;
    }), R;
  }, toArray: function(f) {
    return ve(f, function(R) {
      return R;
    }) || [];
  }, only: function(f) {
    if (!$e(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, M.Component = S, M.Fragment = r, M.Profiler = o, M.PureComponent = D, M.StrictMode = n, M.Suspense = g, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = st, M.act = Be, M.cloneElement = function(f, R, B) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var V = O({}, f.props), z = f.key, ne = f.ref, ee = f._owner;
    if (R != null) {
      if (R.ref !== void 0 && (ne = R.ref, ee = se.current), R.key !== void 0 && (z = "" + R.key), f.type && f.type.defaultProps) var X = f.type.defaultProps;
      for (J in R) N.call(R, J) && !he.hasOwnProperty(J) && (V[J] = R[J] === void 0 && X !== void 0 ? X[J] : R[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) V.children = B;
    else if (1 < J) {
      X = Array(J);
      for (var pe = 0; pe < J; pe++) X[pe] = arguments[pe + 2];
      V.children = X;
    }
    return { $$typeof: t, type: f.type, key: z, ref: ne, props: V, _owner: ee };
  }, M.createContext = function(f) {
    return f = { $$typeof: c, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: a, _context: f }, f.Consumer = f;
  }, M.createElement = Z, M.createFactory = function(f) {
    var R = Z.bind(null, f);
    return R.type = f, R;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(f) {
    return { $$typeof: l, render: f };
  }, M.isValidElement = $e, M.lazy = function(f) {
    return { $$typeof: y, _payload: { _status: -1, _result: f }, _init: Le };
  }, M.memo = function(f, R) {
    return { $$typeof: m, type: f, compare: R === void 0 ? null : R };
  }, M.startTransition = function(f) {
    var R = je.transition;
    je.transition = {};
    try {
      f();
    } finally {
      je.transition = R;
    }
  }, M.unstable_act = Be, M.useCallback = function(f, R) {
    return C.current.useCallback(f, R);
  }, M.useContext = function(f) {
    return C.current.useContext(f);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(f) {
    return C.current.useDeferredValue(f);
  }, M.useEffect = function(f, R) {
    return C.current.useEffect(f, R);
  }, M.useId = function() {
    return C.current.useId();
  }, M.useImperativeHandle = function(f, R, B) {
    return C.current.useImperativeHandle(f, R, B);
  }, M.useInsertionEffect = function(f, R) {
    return C.current.useInsertionEffect(f, R);
  }, M.useLayoutEffect = function(f, R) {
    return C.current.useLayoutEffect(f, R);
  }, M.useMemo = function(f, R) {
    return C.current.useMemo(f, R);
  }, M.useReducer = function(f, R, B) {
    return C.current.useReducer(f, R, B);
  }, M.useRef = function(f) {
    return C.current.useRef(f);
  }, M.useState = function(f) {
    return C.current.useState(f);
  }, M.useSyncExternalStore = function(f, R, B) {
    return C.current.useSyncExternalStore(f, R, B);
  }, M.useTransition = function() {
    return C.current.useTransition();
  }, M.version = "18.3.1", M;
}
var Yt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Yt.exports;
var ys;
function Ko() {
  return ys || (ys = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), S = Symbol.iterator, $ = "@@iterator";
      function D(s) {
        if (s === null || typeof s != "object")
          return null;
        var i = S && s[S] || s[$];
        return typeof i == "function" ? i : null;
      }
      var G = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {
        transition: null
      }, N = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, se = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, he = {}, Z = null;
      function Se(s) {
        Z = s;
      }
      he.setExtraStackFrame = function(s) {
        Z = s;
      }, he.getCurrentStack = null, he.getStackAddendum = function() {
        var s = "";
        Z && (s += Z);
        var i = he.getCurrentStack;
        return i && (s += i() || ""), s;
      };
      var $e = !1, It = !1, nt = !1, Re = !1, Oe = !1, ve = {
        ReactCurrentDispatcher: G,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: se
      };
      ve.ReactDebugCurrentFrame = he, ve.ReactCurrentActQueue = N;
      function Le(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          je("warn", s, d);
        }
      }
      function C(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          je("error", s, d);
        }
      }
      function je(s, i, d) {
        {
          var p = ve.ReactDebugCurrentFrame, w = p.getStackAddendum();
          w !== "" && (i += "%s", d = d.concat([w]));
          var P = d.map(function(T) {
            return String(T);
          });
          P.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, P);
        }
      }
      var st = {};
      function Be(s, i) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", w = p + "." + i;
          if (st[w])
            return;
          C("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, p), st[w] = !0;
        }
      }
      var f = {
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
        enqueueForceUpdate: function(s, i, d) {
          Be(s, "forceUpdate");
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
        enqueueReplaceState: function(s, i, d, p) {
          Be(s, "replaceState");
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
        enqueueSetState: function(s, i, d, p) {
          Be(s, "setState");
        }
      }, R = Object.assign, B = {};
      Object.freeze(B);
      function V(s, i, d) {
        this.props = s, this.context = i, this.refs = B, this.updater = d || f;
      }
      V.prototype.isReactComponent = {}, V.prototype.setState = function(s, i) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, i, "setState");
      }, V.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var z = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ne = function(s, i) {
          Object.defineProperty(V.prototype, s, {
            get: function() {
              Le("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
            }
          });
        };
        for (var ee in z)
          z.hasOwnProperty(ee) && ne(ee, z[ee]);
      }
      function X() {
      }
      X.prototype = V.prototype;
      function J(s, i, d) {
        this.props = s, this.context = i, this.refs = B, this.updater = d || f;
      }
      var pe = J.prototype = new X();
      pe.constructor = J, R(pe, V.prototype), pe.isPureReactComponent = !0;
      function Fr() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var Zt = Array.isArray;
      function Et(s) {
        return Zt(s);
      }
      function jr(s) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function Rt(s) {
        try {
          return ze(s), !1;
        } catch {
          return !0;
        }
      }
      function ze(s) {
        return "" + s;
      }
      function ot(s) {
        if (Rt(s))
          return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jr(s)), ze(s);
      }
      function er(s, i, d) {
        var p = s.displayName;
        if (p)
          return p;
        var w = i.displayName || i.name || "";
        return w !== "" ? d + "(" + w + ")" : d;
      }
      function it(s) {
        return s.displayName || "Context";
      }
      function Ne(s) {
        if (s == null)
          return null;
        if (typeof s.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
          return s.displayName || s.name || null;
        if (typeof s == "string")
          return s;
        switch (s) {
          case a:
            return "Fragment";
          case o:
            return "Portal";
          case l:
            return "Profiler";
          case c:
            return "StrictMode";
          case b:
            return "Suspense";
          case j:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case m:
              var i = s;
              return it(i) + ".Consumer";
            case g:
              var d = s;
              return it(d._context) + ".Provider";
            case y:
              return er(s, s.render, "ForwardRef");
            case k:
              var p = s.displayName || null;
              return p !== null ? p : Ne(s.type) || "Memo";
            case O: {
              var w = s, P = w._payload, T = w._init;
              try {
                return Ne(T(P));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var at = Object.prototype.hasOwnProperty, _t = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, tr, rr, wt;
      wt = {};
      function Ut(s) {
        if (at.call(s, "ref")) {
          var i = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function Ye(s) {
        if (at.call(s, "key")) {
          var i = Object.getOwnPropertyDescriptor(s, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function Nr(s, i) {
        var d = function() {
          tr || (tr = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: d,
          configurable: !0
        });
      }
      function nr(s, i) {
        var d = function() {
          rr || (rr = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: d,
          configurable: !0
        });
      }
      function sr(s) {
        if (typeof s.ref == "string" && se.current && s.__self && se.current.stateNode !== s.__self) {
          var i = Ne(se.current.type);
          wt[i] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, s.ref), wt[i] = !0);
        }
      }
      var ut = function(s, i, d, p, w, P, T) {
        var L = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: s,
          key: i,
          ref: d,
          props: T,
          // Record the component responsible for creating this element.
          _owner: P
        };
        return L._store = {}, Object.defineProperty(L._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(L, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.defineProperty(L, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: w
        }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
      };
      function Ir(s, i, d) {
        var p, w = {}, P = null, T = null, L = null, H = null;
        if (i != null) {
          Ut(i) && (T = i.ref, sr(i)), Ye(i) && (ot(i.key), P = "" + i.key), L = i.__self === void 0 ? null : i.__self, H = i.__source === void 0 ? null : i.__source;
          for (p in i)
            at.call(i, p) && !_t.hasOwnProperty(p) && (w[p] = i[p]);
        }
        var te = arguments.length - 2;
        if (te === 1)
          w.children = d;
        else if (te > 1) {
          for (var ae = Array(te), ue = 0; ue < te; ue++)
            ae[ue] = arguments[ue + 2];
          Object.freeze && Object.freeze(ae), w.children = ae;
        }
        if (s && s.defaultProps) {
          var fe = s.defaultProps;
          for (p in fe)
            w[p] === void 0 && (w[p] = fe[p]);
        }
        if (P || T) {
          var ye = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          P && Nr(w, ye), T && nr(w, ye);
        }
        return ut(s, P, T, L, H, se.current, w);
      }
      function Ur(s, i) {
        var d = ut(s.type, i, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function Mr(s, i, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, w = R({}, s.props), P = s.key, T = s.ref, L = s._self, H = s._source, te = s._owner;
        if (i != null) {
          Ut(i) && (T = i.ref, te = se.current), Ye(i) && (ot(i.key), P = "" + i.key);
          var ae;
          s.type && s.type.defaultProps && (ae = s.type.defaultProps);
          for (p in i)
            at.call(i, p) && !_t.hasOwnProperty(p) && (i[p] === void 0 && ae !== void 0 ? w[p] = ae[p] : w[p] = i[p]);
        }
        var ue = arguments.length - 2;
        if (ue === 1)
          w.children = d;
        else if (ue > 1) {
          for (var fe = Array(ue), ye = 0; ye < ue; ye++)
            fe[ye] = arguments[ye + 2];
          w.children = fe;
        }
        return ut(s.type, P, T, L, H, te, w);
      }
      function Ge(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var or = ".", $r = ":";
      function Br(s) {
        var i = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(i, function(w) {
          return d[w];
        });
        return "$" + p;
      }
      var St = !1, ir = /\/+/g;
      function qe(s) {
        return s.replace(ir, "$&/");
      }
      function ct(s, i) {
        return typeof s == "object" && s !== null && s.key != null ? (ot(s.key), Br("" + s.key)) : i.toString(36);
      }
      function Ke(s, i, d, p, w) {
        var P = typeof s;
        (P === "undefined" || P === "boolean") && (s = null);
        var T = !1;
        if (s === null)
          T = !0;
        else
          switch (P) {
            case "string":
            case "number":
              T = !0;
              break;
            case "object":
              switch (s.$$typeof) {
                case n:
                case o:
                  T = !0;
              }
          }
        if (T) {
          var L = s, H = w(L), te = p === "" ? or + ct(L, 0) : p;
          if (Et(H)) {
            var ae = "";
            te != null && (ae = qe(te) + "/"), Ke(H, i, ae, "", function(Lo) {
              return Lo;
            });
          } else H != null && (Ge(H) && (H.key && (!L || L.key !== H.key) && ot(H.key), H = Ur(
            H,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (H.key && (!L || L.key !== H.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              qe("" + H.key) + "/"
            ) : "") + te
          )), i.push(H));
          return 1;
        }
        var ue, fe, ye = 0, be = p === "" ? or : p + $r;
        if (Et(s))
          for (var gr = 0; gr < s.length; gr++)
            ue = s[gr], fe = be + ct(ue, gr), ye += Ke(ue, i, d, fe, w);
        else {
          var rn = D(s);
          if (typeof rn == "function") {
            var ns = s;
            rn === ns.entries && (St || Le("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), St = !0);
            for (var xo = rn.call(ns), ss, Do = 0; !(ss = xo.next()).done; )
              ue = ss.value, fe = be + ct(ue, Do++), ye += Ke(ue, i, d, fe, w);
          } else if (P === "object") {
            var os = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (os === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : os) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ye;
      }
      function lt(s, i, d) {
        if (s == null)
          return s;
        var p = [], w = 0;
        return Ke(s, p, "", "", function(P) {
          return i.call(d, P, w++);
        }), p;
      }
      function qr(s) {
        var i = 0;
        return lt(s, function() {
          i++;
        }), i;
      }
      function ar(s, i, d) {
        lt(s, function() {
          i.apply(this, arguments);
        }, d);
      }
      function Vr(s) {
        return lt(s, function(i) {
          return i;
        }) || [];
      }
      function ur(s) {
        if (!Ge(s))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
      function cr(s) {
        var i = {
          $$typeof: m,
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
        i.Provider = {
          $$typeof: g,
          _context: i
        };
        var d = !1, p = !1, w = !1;
        {
          var P = {
            $$typeof: m,
            _context: i
          };
          Object.defineProperties(P, {
            Provider: {
              get: function() {
                return p || (p = !0, C("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), i.Provider;
              },
              set: function(T) {
                i.Provider = T;
              }
            },
            _currentValue: {
              get: function() {
                return i._currentValue;
              },
              set: function(T) {
                i._currentValue = T;
              }
            },
            _currentValue2: {
              get: function() {
                return i._currentValue2;
              },
              set: function(T) {
                i._currentValue2 = T;
              }
            },
            _threadCount: {
              get: function() {
                return i._threadCount;
              },
              set: function(T) {
                i._threadCount = T;
              }
            },
            Consumer: {
              get: function() {
                return d || (d = !0, C("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), i.Consumer;
              }
            },
            displayName: {
              get: function() {
                return i.displayName;
              },
              set: function(T) {
                w || (Le("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", T), w = !0);
              }
            }
          }), i.Consumer = P;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var ft = -1, Mt = 0, $t = 1, lr = 2;
      function Wr(s) {
        if (s._status === ft) {
          var i = s._result, d = i();
          if (d.then(function(P) {
            if (s._status === Mt || s._status === ft) {
              var T = s;
              T._status = $t, T._result = P;
            }
          }, function(P) {
            if (s._status === Mt || s._status === ft) {
              var T = s;
              T._status = lr, T._result = P;
            }
          }), s._status === ft) {
            var p = s;
            p._status = Mt, p._result = d;
          }
        }
        if (s._status === $t) {
          var w = s._result;
          return w === void 0 && C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, w), "default" in w || C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, w), w.default;
        } else
          throw s._result;
      }
      function Hr(s) {
        var i = {
          // We use these fields to store the result.
          _status: ft,
          _result: s
        }, d = {
          $$typeof: O,
          _payload: i,
          _init: Wr
        };
        {
          var p, w;
          Object.defineProperties(d, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(P) {
                C("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = P, Object.defineProperty(d, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return w;
              },
              set: function(P) {
                C("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), w = P, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function zr(s) {
        s != null && s.$$typeof === k ? C("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? C("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && C("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && C("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var i = {
          $$typeof: y,
          render: s
        };
        {
          var d;
          Object.defineProperty(i, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return d;
            },
            set: function(p) {
              d = p, !s.name && !s.displayName && (s.displayName = p);
            }
          });
        }
        return i;
      }
      var fr;
      fr = Symbol.for("react.module.reference");
      function u(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === a || s === l || Oe || s === c || s === b || s === j || Re || s === A || $e || It || nt || typeof s == "object" && s !== null && (s.$$typeof === O || s.$$typeof === k || s.$$typeof === g || s.$$typeof === m || s.$$typeof === y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === fr || s.getModuleId !== void 0));
      }
      function E(s, i) {
        u(s) || C("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
        var d = {
          $$typeof: k,
          type: s,
          compare: i === void 0 ? null : i
        };
        {
          var p;
          Object.defineProperty(d, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return p;
            },
            set: function(w) {
              p = w, !s.name && !s.displayName && (s.displayName = w);
            }
          });
        }
        return d;
      }
      function _() {
        var s = G.current;
        return s === null && C(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
      }
      function x(s) {
        var i = _();
        if (s._context !== void 0) {
          var d = s._context;
          d.Consumer === s ? C("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === s && C("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return i.useContext(s);
      }
      function Y(s) {
        var i = _();
        return i.useState(s);
      }
      function Q(s, i, d) {
        var p = _();
        return p.useReducer(s, i, d);
      }
      function q(s) {
        var i = _();
        return i.useRef(s);
      }
      function I(s, i) {
        var d = _();
        return d.useEffect(s, i);
      }
      function ge(s, i) {
        var d = _();
        return d.useInsertionEffect(s, i);
      }
      function le(s, i) {
        var d = _();
        return d.useLayoutEffect(s, i);
      }
      function de(s, i) {
        var d = _();
        return d.useCallback(s, i);
      }
      function Te(s, i) {
        var d = _();
        return d.useMemo(s, i);
      }
      function Je(s, i, d) {
        var p = _();
        return p.useImperativeHandle(s, i, d);
      }
      function Ve(s, i) {
        {
          var d = _();
          return d.useDebugValue(s, i);
        }
      }
      function _e() {
        var s = _();
        return s.useTransition();
      }
      function Bt(s) {
        var i = _();
        return i.useDeferredValue(s);
      }
      function Yr() {
        var s = _();
        return s.useId();
      }
      function Gr(s, i, d) {
        var p = _();
        return p.useSyncExternalStore(s, i, d);
      }
      var qt = 0, Nn, In, Un, Mn, $n, Bn, qn;
      function Vn() {
      }
      Vn.__reactDisabledLog = !0;
      function ho() {
        {
          if (qt === 0) {
            Nn = console.log, In = console.info, Un = console.warn, Mn = console.error, $n = console.group, Bn = console.groupCollapsed, qn = console.groupEnd;
            var s = {
              configurable: !0,
              enumerable: !0,
              value: Vn,
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
          qt++;
        }
      }
      function po() {
        {
          if (qt--, qt === 0) {
            var s = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: R({}, s, {
                value: Nn
              }),
              info: R({}, s, {
                value: In
              }),
              warn: R({}, s, {
                value: Un
              }),
              error: R({}, s, {
                value: Mn
              }),
              group: R({}, s, {
                value: $n
              }),
              groupCollapsed: R({}, s, {
                value: Bn
              }),
              groupEnd: R({}, s, {
                value: qn
              })
            });
          }
          qt < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Kr = ve.ReactCurrentDispatcher, Jr;
      function dr(s, i, d) {
        {
          if (Jr === void 0)
            try {
              throw Error();
            } catch (w) {
              var p = w.stack.trim().match(/\n( *(at )?)/);
              Jr = p && p[1] || "";
            }
          return `
` + Jr + s;
        }
      }
      var Qr = !1, hr;
      {
        var yo = typeof WeakMap == "function" ? WeakMap : Map;
        hr = new yo();
      }
      function Wn(s, i) {
        if (!s || Qr)
          return "";
        {
          var d = hr.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        Qr = !0;
        var w = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var P;
        P = Kr.current, Kr.current = null, ho();
        try {
          if (i) {
            var T = function() {
              throw Error();
            };
            if (Object.defineProperty(T.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(T, []);
              } catch (be) {
                p = be;
              }
              Reflect.construct(s, [], T);
            } else {
              try {
                T.call();
              } catch (be) {
                p = be;
              }
              s.call(T.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (be) {
              p = be;
            }
            s();
          }
        } catch (be) {
          if (be && p && typeof be.stack == "string") {
            for (var L = be.stack.split(`
`), H = p.stack.split(`
`), te = L.length - 1, ae = H.length - 1; te >= 1 && ae >= 0 && L[te] !== H[ae]; )
              ae--;
            for (; te >= 1 && ae >= 0; te--, ae--)
              if (L[te] !== H[ae]) {
                if (te !== 1 || ae !== 1)
                  do
                    if (te--, ae--, ae < 0 || L[te] !== H[ae]) {
                      var ue = `
` + L[te].replace(" at new ", " at ");
                      return s.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", s.displayName)), typeof s == "function" && hr.set(s, ue), ue;
                    }
                  while (te >= 1 && ae >= 0);
                break;
              }
          }
        } finally {
          Qr = !1, Kr.current = P, po(), Error.prepareStackTrace = w;
        }
        var fe = s ? s.displayName || s.name : "", ye = fe ? dr(fe) : "";
        return typeof s == "function" && hr.set(s, ye), ye;
      }
      function mo(s, i, d) {
        return Wn(s, !1);
      }
      function vo(s) {
        var i = s.prototype;
        return !!(i && i.isReactComponent);
      }
      function pr(s, i, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return Wn(s, vo(s));
        if (typeof s == "string")
          return dr(s);
        switch (s) {
          case b:
            return dr("Suspense");
          case j:
            return dr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case y:
              return mo(s.render);
            case k:
              return pr(s.type, i, d);
            case O: {
              var p = s, w = p._payload, P = p._init;
              try {
                return pr(P(w), i, d);
              } catch {
              }
            }
          }
        return "";
      }
      var Hn = {}, zn = ve.ReactDebugCurrentFrame;
      function yr(s) {
        if (s) {
          var i = s._owner, d = pr(s.type, s._source, i ? i.type : null);
          zn.setExtraStackFrame(d);
        } else
          zn.setExtraStackFrame(null);
      }
      function go(s, i, d, p, w) {
        {
          var P = Function.call.bind(at);
          for (var T in s)
            if (P(s, T)) {
              var L = void 0;
              try {
                if (typeof s[T] != "function") {
                  var H = Error((p || "React class") + ": " + d + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw H.name = "Invariant Violation", H;
                }
                L = s[T](i, T, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (te) {
                L = te;
              }
              L && !(L instanceof Error) && (yr(w), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, T, typeof L), yr(null)), L instanceof Error && !(L.message in Hn) && (Hn[L.message] = !0, yr(w), C("Failed %s type: %s", d, L.message), yr(null));
            }
        }
      }
      function Ot(s) {
        if (s) {
          var i = s._owner, d = pr(s.type, s._source, i ? i.type : null);
          Se(d);
        } else
          Se(null);
      }
      var Xr;
      Xr = !1;
      function Yn() {
        if (se.current) {
          var s = Ne(se.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function bo(s) {
        if (s !== void 0) {
          var i = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + i + ":" + d + ".";
        }
        return "";
      }
      function Eo(s) {
        return s != null ? bo(s.__source) : "";
      }
      var Gn = {};
      function Ro(s) {
        var i = Yn();
        if (!i) {
          var d = typeof s == "string" ? s : s.displayName || s.name;
          d && (i = `

Check the top-level render call using <` + d + ">.");
        }
        return i;
      }
      function Kn(s, i) {
        if (!(!s._store || s._store.validated || s.key != null)) {
          s._store.validated = !0;
          var d = Ro(i);
          if (!Gn[d]) {
            Gn[d] = !0;
            var p = "";
            s && s._owner && s._owner !== se.current && (p = " It was passed a child from " + Ne(s._owner.type) + "."), Ot(s), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), Ot(null);
          }
        }
      }
      function Jn(s, i) {
        if (typeof s == "object") {
          if (Et(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              Ge(p) && Kn(p, i);
            }
          else if (Ge(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var w = D(s);
            if (typeof w == "function" && w !== s.entries)
              for (var P = w.call(s), T; !(T = P.next()).done; )
                Ge(T.value) && Kn(T.value, i);
          }
        }
      }
      function Qn(s) {
        {
          var i = s.type;
          if (i == null || typeof i == "string")
            return;
          var d;
          if (typeof i == "function")
            d = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === y || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === k))
            d = i.propTypes;
          else
            return;
          if (d) {
            var p = Ne(i);
            go(d, s.props, "prop", p, s);
          } else if (i.PropTypes !== void 0 && !Xr) {
            Xr = !0;
            var w = Ne(i);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function _o(s) {
        {
          for (var i = Object.keys(s.props), d = 0; d < i.length; d++) {
            var p = i[d];
            if (p !== "children" && p !== "key") {
              Ot(s), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Ot(null);
              break;
            }
          }
          s.ref !== null && (Ot(s), C("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
        }
      }
      function Xn(s, i, d) {
        var p = u(s);
        if (!p) {
          var w = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = Eo(i);
          P ? w += P : w += Yn();
          var T;
          s === null ? T = "null" : Et(s) ? T = "array" : s !== void 0 && s.$$typeof === n ? (T = "<" + (Ne(s.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : T = typeof s, C("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, w);
        }
        var L = Ir.apply(this, arguments);
        if (L == null)
          return L;
        if (p)
          for (var H = 2; H < arguments.length; H++)
            Jn(arguments[H], s);
        return s === a ? _o(L) : Qn(L), L;
      }
      var Zn = !1;
      function wo(s) {
        var i = Xn.bind(null, s);
        return i.type = s, Zn || (Zn = !0, Le("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return Le("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), i;
      }
      function So(s, i, d) {
        for (var p = Mr.apply(this, arguments), w = 2; w < arguments.length; w++)
          Jn(arguments[w], p.type);
        return Qn(p), p;
      }
      function Oo(s, i) {
        var d = ie.transition;
        ie.transition = {};
        var p = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          s();
        } finally {
          if (ie.transition = d, d === null && p._updatedFibers) {
            var w = p._updatedFibers.size;
            w > 10 && Le("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var es = !1, mr = null;
      function To(s) {
        if (mr === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), d = t && t[i];
            mr = d.call(t, "timers").setImmediate;
          } catch {
            mr = function(w) {
              es === !1 && (es = !0, typeof MessageChannel > "u" && C("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var P = new MessageChannel();
              P.port1.onmessage = w, P.port2.postMessage(void 0);
            };
          }
        return mr(s);
      }
      var Tt = 0, ts = !1;
      function rs(s) {
        {
          var i = Tt;
          Tt++, N.current === null && (N.current = []);
          var d = N.isBatchingLegacy, p;
          try {
            if (N.isBatchingLegacy = !0, p = s(), !d && N.didScheduleLegacyUpdate) {
              var w = N.current;
              w !== null && (N.didScheduleLegacyUpdate = !1, tn(w));
            }
          } catch (fe) {
            throw vr(i), fe;
          } finally {
            N.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var P = p, T = !1, L = {
              then: function(fe, ye) {
                T = !0, P.then(function(be) {
                  vr(i), Tt === 0 ? Zr(be, fe, ye) : fe(be);
                }, function(be) {
                  vr(i), ye(be);
                });
              }
            };
            return !ts && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              T || (ts = !0, C("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), L;
          } else {
            var H = p;
            if (vr(i), Tt === 0) {
              var te = N.current;
              te !== null && (tn(te), N.current = null);
              var ae = {
                then: function(fe, ye) {
                  N.current === null ? (N.current = [], Zr(H, fe, ye)) : fe(H);
                }
              };
              return ae;
            } else {
              var ue = {
                then: function(fe, ye) {
                  fe(H);
                }
              };
              return ue;
            }
          }
        }
      }
      function vr(s) {
        s !== Tt - 1 && C("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Tt = s;
      }
      function Zr(s, i, d) {
        {
          var p = N.current;
          if (p !== null)
            try {
              tn(p), To(function() {
                p.length === 0 ? (N.current = null, i(s)) : Zr(s, i, d);
              });
            } catch (w) {
              d(w);
            }
          else
            i(s);
        }
      }
      var en = !1;
      function tn(s) {
        if (!en) {
          en = !0;
          var i = 0;
          try {
            for (; i < s.length; i++) {
              var d = s[i];
              do
                d = d(!0);
              while (d !== null);
            }
            s.length = 0;
          } catch (p) {
            throw s = s.slice(i + 1), p;
          } finally {
            en = !1;
          }
        }
      }
      var Co = Xn, Ao = So, Po = wo, ko = {
        map: lt,
        forEach: ar,
        count: qr,
        toArray: Vr,
        only: ur
      };
      e.Children = ko, e.Component = V, e.Fragment = a, e.Profiler = l, e.PureComponent = J, e.StrictMode = c, e.Suspense = b, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, e.act = rs, e.cloneElement = Ao, e.createContext = cr, e.createElement = Co, e.createFactory = Po, e.createRef = Fr, e.forwardRef = zr, e.isValidElement = Ge, e.lazy = Hr, e.memo = E, e.startTransition = Oo, e.unstable_act = rs, e.useCallback = de, e.useContext = x, e.useDebugValue = Ve, e.useDeferredValue = Bt, e.useEffect = I, e.useId = Yr, e.useImperativeHandle = Je, e.useInsertionEffect = ge, e.useLayoutEffect = le, e.useMemo = Te, e.useReducer = Q, e.useRef = q, e.useState = Y, e.useSyncExternalStore = Gr, e.useTransition = _e, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Yt, Yt.exports)), Yt.exports;
}
process.env.NODE_ENV === "production" ? En.exports = Go() : En.exports = Ko();
var me = En.exports, Vt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function Jo() {
  if (ms) return Vt;
  ms = 1;
  var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, g, m) {
    var y, b = {}, j = null, k = null;
    m !== void 0 && (j = "" + m), g.key !== void 0 && (j = "" + g.key), g.ref !== void 0 && (k = g.ref);
    for (y in g) n.call(g, y) && !a.hasOwnProperty(y) && (b[y] = g[y]);
    if (l && l.defaultProps) for (y in g = l.defaultProps, g) b[y] === void 0 && (b[y] = g[y]);
    return { $$typeof: e, type: l, key: j, ref: k, props: b, _owner: o.current };
  }
  return Vt.Fragment = r, Vt.jsx = c, Vt.jsxs = c, Vt;
}
var Wt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function Qo() {
  return vs || (vs = 1, process.env.NODE_ENV !== "production" && function() {
    var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), O = Symbol.iterator, A = "@@iterator";
    function S(u) {
      if (u === null || typeof u != "object")
        return null;
      var E = O && u[O] || u[A];
      return typeof E == "function" ? E : null;
    }
    var $ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(u) {
      {
        for (var E = arguments.length, _ = new Array(E > 1 ? E - 1 : 0), x = 1; x < E; x++)
          _[x - 1] = arguments[x];
        G("error", u, _);
      }
    }
    function G(u, E, _) {
      {
        var x = $.ReactDebugCurrentFrame, Y = x.getStackAddendum();
        Y !== "" && (E += "%s", _ = _.concat([Y]));
        var Q = _.map(function(q) {
          return String(q);
        });
        Q.unshift("Warning: " + E), Function.prototype.apply.call(console[u], console, Q);
      }
    }
    var ie = !1, N = !1, se = !1, he = !1, Z = !1, Se;
    Se = Symbol.for("react.module.reference");
    function $e(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === a || Z || u === o || u === m || u === y || he || u === k || ie || N || se || typeof u == "object" && u !== null && (u.$$typeof === j || u.$$typeof === b || u.$$typeof === c || u.$$typeof === l || u.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === Se || u.getModuleId !== void 0));
    }
    function It(u, E, _) {
      var x = u.displayName;
      if (x)
        return x;
      var Y = E.displayName || E.name || "";
      return Y !== "" ? _ + "(" + Y + ")" : _;
    }
    function nt(u) {
      return u.displayName || "Context";
    }
    function Re(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case m:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            var E = u;
            return nt(E) + ".Consumer";
          case c:
            var _ = u;
            return nt(_._context) + ".Provider";
          case g:
            return It(u, u.render, "ForwardRef");
          case b:
            var x = u.displayName || null;
            return x !== null ? x : Re(u.type) || "Memo";
          case j: {
            var Y = u, Q = Y._payload, q = Y._init;
            try {
              return Re(q(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Oe = Object.assign, ve = 0, Le, C, je, st, Be, f, R;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function V() {
      {
        if (ve === 0) {
          Le = console.log, C = console.info, je = console.warn, st = console.error, Be = console.group, f = console.groupCollapsed, R = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: B,
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
        ve++;
      }
    }
    function z() {
      {
        if (ve--, ve === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Oe({}, u, {
              value: Le
            }),
            info: Oe({}, u, {
              value: C
            }),
            warn: Oe({}, u, {
              value: je
            }),
            error: Oe({}, u, {
              value: st
            }),
            group: Oe({}, u, {
              value: Be
            }),
            groupCollapsed: Oe({}, u, {
              value: f
            }),
            groupEnd: Oe({}, u, {
              value: R
            })
          });
        }
        ve < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = $.ReactCurrentDispatcher, ee;
    function X(u, E, _) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (Y) {
            var x = Y.stack.trim().match(/\n( *(at )?)/);
            ee = x && x[1] || "";
          }
        return `
` + ee + u;
      }
    }
    var J = !1, pe;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new Fr();
    }
    function Zt(u, E) {
      if (!u || J)
        return "";
      {
        var _ = pe.get(u);
        if (_ !== void 0)
          return _;
      }
      var x;
      J = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = ne.current, ne.current = null, V();
      try {
        if (E) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (_e) {
              x = _e;
            }
            Reflect.construct(u, [], q);
          } else {
            try {
              q.call();
            } catch (_e) {
              x = _e;
            }
            u.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            x = _e;
          }
          u();
        }
      } catch (_e) {
        if (_e && x && typeof _e.stack == "string") {
          for (var I = _e.stack.split(`
`), ge = x.stack.split(`
`), le = I.length - 1, de = ge.length - 1; le >= 1 && de >= 0 && I[le] !== ge[de]; )
            de--;
          for (; le >= 1 && de >= 0; le--, de--)
            if (I[le] !== ge[de]) {
              if (le !== 1 || de !== 1)
                do
                  if (le--, de--, de < 0 || I[le] !== ge[de]) {
                    var Te = `
` + I[le].replace(" at new ", " at ");
                    return u.displayName && Te.includes("<anonymous>") && (Te = Te.replace("<anonymous>", u.displayName)), typeof u == "function" && pe.set(u, Te), Te;
                  }
                while (le >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        J = !1, ne.current = Q, z(), Error.prepareStackTrace = Y;
      }
      var Je = u ? u.displayName || u.name : "", Ve = Je ? X(Je) : "";
      return typeof u == "function" && pe.set(u, Ve), Ve;
    }
    function Et(u, E, _) {
      return Zt(u, !1);
    }
    function jr(u) {
      var E = u.prototype;
      return !!(E && E.isReactComponent);
    }
    function Rt(u, E, _) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return Zt(u, jr(u));
      if (typeof u == "string")
        return X(u);
      switch (u) {
        case m:
          return X("Suspense");
        case y:
          return X("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case g:
            return Et(u.render);
          case b:
            return Rt(u.type, E, _);
          case j: {
            var x = u, Y = x._payload, Q = x._init;
            try {
              return Rt(Q(Y), E, _);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, ot = {}, er = $.ReactDebugCurrentFrame;
    function it(u) {
      if (u) {
        var E = u._owner, _ = Rt(u.type, u._source, E ? E.type : null);
        er.setExtraStackFrame(_);
      } else
        er.setExtraStackFrame(null);
    }
    function Ne(u, E, _, x, Y) {
      {
        var Q = Function.call.bind(ze);
        for (var q in u)
          if (Q(u, q)) {
            var I = void 0;
            try {
              if (typeof u[q] != "function") {
                var ge = Error((x || "React class") + ": " + _ + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              I = u[q](E, q, x, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (le) {
              I = le;
            }
            I && !(I instanceof Error) && (it(Y), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", _, q, typeof I), it(null)), I instanceof Error && !(I.message in ot) && (ot[I.message] = !0, it(Y), D("Failed %s type: %s", _, I.message), it(null));
          }
      }
    }
    var at = Array.isArray;
    function _t(u) {
      return at(u);
    }
    function tr(u) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, _ = E && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return _;
      }
    }
    function rr(u) {
      try {
        return wt(u), !1;
      } catch {
        return !0;
      }
    }
    function wt(u) {
      return "" + u;
    }
    function Ut(u) {
      if (rr(u))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(u)), wt(u);
    }
    var Ye = $.ReactCurrentOwner, Nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nr, sr, ut;
    ut = {};
    function Ir(u) {
      if (ze.call(u, "ref")) {
        var E = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Ur(u) {
      if (ze.call(u, "key")) {
        var E = Object.getOwnPropertyDescriptor(u, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Mr(u, E) {
      if (typeof u.ref == "string" && Ye.current && E && Ye.current.stateNode !== E) {
        var _ = Re(Ye.current.type);
        ut[_] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Re(Ye.current.type), u.ref), ut[_] = !0);
      }
    }
    function Ge(u, E) {
      {
        var _ = function() {
          nr || (nr = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        _.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function or(u, E) {
      {
        var _ = function() {
          sr || (sr = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        _.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var $r = function(u, E, _, x, Y, Q, q) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: u,
        key: E,
        ref: _,
        props: q,
        // Record the component responsible for creating this element.
        _owner: Q
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
        value: x
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function Br(u, E, _, x, Y) {
      {
        var Q, q = {}, I = null, ge = null;
        _ !== void 0 && (Ut(_), I = "" + _), Ur(E) && (Ut(E.key), I = "" + E.key), Ir(E) && (ge = E.ref, Mr(E, Y));
        for (Q in E)
          ze.call(E, Q) && !Nr.hasOwnProperty(Q) && (q[Q] = E[Q]);
        if (u && u.defaultProps) {
          var le = u.defaultProps;
          for (Q in le)
            q[Q] === void 0 && (q[Q] = le[Q]);
        }
        if (I || ge) {
          var de = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          I && Ge(q, de), ge && or(q, de);
        }
        return $r(u, I, ge, Y, x, Ye.current, q);
      }
    }
    var St = $.ReactCurrentOwner, ir = $.ReactDebugCurrentFrame;
    function qe(u) {
      if (u) {
        var E = u._owner, _ = Rt(u.type, u._source, E ? E.type : null);
        ir.setExtraStackFrame(_);
      } else
        ir.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function Ke(u) {
      return typeof u == "object" && u !== null && u.$$typeof === e;
    }
    function lt() {
      {
        if (St.current) {
          var u = Re(St.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function qr(u) {
      return "";
    }
    var ar = {};
    function Vr(u) {
      {
        var E = lt();
        if (!E) {
          var _ = typeof u == "string" ? u : u.displayName || u.name;
          _ && (E = `

Check the top-level render call using <` + _ + ">.");
        }
        return E;
      }
    }
    function ur(u, E) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var _ = Vr(E);
        if (ar[_])
          return;
        ar[_] = !0;
        var x = "";
        u && u._owner && u._owner !== St.current && (x = " It was passed a child from " + Re(u._owner.type) + "."), qe(u), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, x), qe(null);
      }
    }
    function cr(u, E) {
      {
        if (typeof u != "object")
          return;
        if (_t(u))
          for (var _ = 0; _ < u.length; _++) {
            var x = u[_];
            Ke(x) && ur(x, E);
          }
        else if (Ke(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var Y = S(u);
          if (typeof Y == "function" && Y !== u.entries)
            for (var Q = Y.call(u), q; !(q = Q.next()).done; )
              Ke(q.value) && ur(q.value, E);
        }
      }
    }
    function ft(u) {
      {
        var E = u.type;
        if (E == null || typeof E == "string")
          return;
        var _;
        if (typeof E == "function")
          _ = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === b))
          _ = E.propTypes;
        else
          return;
        if (_) {
          var x = Re(E);
          Ne(_, u.props, "prop", x, u);
        } else if (E.PropTypes !== void 0 && !ct) {
          ct = !0;
          var Y = Re(E);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mt(u) {
      {
        for (var E = Object.keys(u.props), _ = 0; _ < E.length; _++) {
          var x = E[_];
          if (x !== "children" && x !== "key") {
            qe(u), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), qe(null);
            break;
          }
        }
        u.ref !== null && (qe(u), D("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    var $t = {};
    function lr(u, E, _, x, Y, Q) {
      {
        var q = $e(u);
        if (!q) {
          var I = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = qr();
          ge ? I += ge : I += lt();
          var le;
          u === null ? le = "null" : _t(u) ? le = "array" : u !== void 0 && u.$$typeof === e ? (le = "<" + (Re(u.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : le = typeof u, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, I);
        }
        var de = Br(u, E, _, Y, Q);
        if (de == null)
          return de;
        if (q) {
          var Te = E.children;
          if (Te !== void 0)
            if (x)
              if (_t(Te)) {
                for (var Je = 0; Je < Te.length; Je++)
                  cr(Te[Je], u);
                Object.freeze && Object.freeze(Te);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(Te, u);
        }
        if (ze.call(E, "key")) {
          var Ve = Re(u), _e = Object.keys(E).filter(function(Gr) {
            return Gr !== "key";
          }), Bt = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$t[Ve + Bt]) {
            var Yr = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Bt, Ve, Yr, Ve), $t[Ve + Bt] = !0;
          }
        }
        return u === n ? Mt(de) : ft(de), de;
      }
    }
    function Wr(u, E, _) {
      return lr(u, E, _, !0);
    }
    function Hr(u, E, _) {
      return lr(u, E, _, !1);
    }
    var zr = Hr, fr = Wr;
    Wt.Fragment = n, Wt.jsx = zr, Wt.jsxs = fr;
  }()), Wt;
}
process.env.NODE_ENV === "production" ? Jo() : Qo();
var Xo = me.createContext(
  void 0
), Is = (t) => {
  const e = me.useContext(Xo);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Us = me.createContext(!1), Zo = () => me.useContext(Us);
Us.Provider;
function ei() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
var ti = me.createContext(ei()), ri = () => me.useContext(ti);
function Ms(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function ni() {
}
var si = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, oi = (t) => {
  me.useEffect(() => {
    t.clearReset();
  }, [t]);
}, ii = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && Ms(r, [t.error, n]), ai = (t) => {
  t.suspense && (typeof t.staleTime != "number" && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, ui = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, ci = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function li(t, e, r) {
  var m, y, b, j;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Is(), o = Zo(), a = ri(), c = n.defaultQueryOptions(t);
  (y = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || y.call(
    m,
    c
  ), c._optimisticResults = o ? "isRestoring" : "optimistic", ai(c), si(c, a), oi(a);
  const [l] = me.useState(
    () => new e(
      n,
      c
    )
  ), g = l.getOptimisticResult(c);
  if (me.useSyncExternalStore(
    me.useCallback(
      (k) => {
        const O = o ? () => {
        } : l.subscribe(Ar.batchCalls(k));
        return l.updateResult(), O;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), me.useEffect(() => {
    l.setOptions(c, { listeners: !1 });
  }, [c, l]), ui(c, g))
    throw ci(c, l, a);
  if (ii({
    result: g,
    errorResetBoundary: a,
    throwOnError: c.throwOnError,
    query: n.getQueryCache().get(c.queryHash)
  }))
    throw g.error;
  return (j = (b = n.getDefaultOptions().queries) == null ? void 0 : b._experimental_afterQuery) == null || j.call(
    b,
    c,
    g
  ), c.notifyOnChangeProps ? g : l.trackResult(g);
}
function Pn(t, e) {
  return li(t, Wo);
}
function kn(t, e) {
  const r = Is(), [n] = me.useState(
    () => new Yo(
      r,
      t
    )
  );
  me.useEffect(() => {
    n.setOptions(t);
  }, [n, t]);
  const o = me.useSyncExternalStore(
    me.useCallback(
      (c) => n.subscribe(Ar.batchCalls(c)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), a = me.useCallback(
    (c, l) => {
      n.mutate(c, l).catch(ni);
    },
    [n]
  );
  if (o.error && Ms(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: a, mutateAsync: o.mutate };
}
function $s(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: fi } = Object.prototype, { getPrototypeOf: xn } = Object, Pr = /* @__PURE__ */ ((t) => (e) => {
  const r = fi.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Fe = (t) => (t = t.toLowerCase(), (e) => Pr(e) === t), kr = (t) => (e) => typeof e === t, { isArray: Ft } = Array, Gt = kr("undefined");
function di(t) {
  return t !== null && !Gt(t) && t.constructor !== null && !Gt(t.constructor) && De(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Bs = Fe("ArrayBuffer");
function hi(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Bs(t.buffer), e;
}
const pi = kr("string"), De = kr("function"), qs = kr("number"), xr = (t) => t !== null && typeof t == "object", yi = (t) => t === !0 || t === !1, Rr = (t) => {
  if (Pr(t) !== "object")
    return !1;
  const e = xn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, mi = Fe("Date"), vi = Fe("File"), gi = Fe("Blob"), bi = Fe("FileList"), Ei = (t) => xr(t) && De(t.pipe), Ri = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || De(t.append) && ((e = Pr(t)) === "formdata" || // detect form-data instance
  e === "object" && De(t.toString) && t.toString() === "[object FormData]"));
}, _i = Fe("URLSearchParams"), [wi, Si, Oi, Ti] = ["ReadableStream", "Request", "Response", "Headers"].map(Fe), Ci = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qt(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), Ft(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), c = a.length;
    let l;
    for (n = 0; n < c; n++)
      l = a[n], e.call(null, t[l], l, t);
  }
}
function Vs(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const ht = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ws = (t) => !Gt(t) && t !== ht;
function Rn() {
  const { caseless: t } = Ws(this) && this || {}, e = {}, r = (n, o) => {
    const a = t && Vs(e, o) || o;
    Rr(e[a]) && Rr(n) ? e[a] = Rn(e[a], n) : Rr(n) ? e[a] = Rn({}, n) : Ft(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Qt(arguments[n], r);
  return e;
}
const Ai = (t, e, r, { allOwnKeys: n } = {}) => (Qt(e, (o, a) => {
  r && De(o) ? t[a] = $s(o, r) : t[a] = o;
}, { allOwnKeys: n }), t), Pi = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), ki = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, xi = (t, e, r, n) => {
  let o, a, c;
  const l = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), a = o.length; a-- > 0; )
      c = o[a], (!n || n(c, t, e)) && !l[c] && (e[c] = t[c], l[c] = !0);
    t = r !== !1 && xn(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Di = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Li = (t) => {
  if (!t) return null;
  if (Ft(t)) return t;
  let e = t.length;
  if (!qs(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Fi = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && xn(Uint8Array)), ji = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    e.call(t, a[0], a[1]);
  }
}, Ni = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Ii = Fe("HTMLFormElement"), Ui = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), gs = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Mi = Fe("RegExp"), Hs = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Qt(r, (o, a) => {
    let c;
    (c = e(o, a, t)) !== !1 && (n[a] = c || o);
  }), Object.defineProperties(t, n);
}, $i = (t) => {
  Hs(t, (e, r) => {
    if (De(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (De(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Bi = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return Ft(t) ? n(t) : n(String(t).split(e)), r;
}, qi = () => {
}, Vi = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, sn = "abcdefghijklmnopqrstuvwxyz", bs = "0123456789", zs = {
  DIGIT: bs,
  ALPHA: sn,
  ALPHA_DIGIT: sn + sn.toUpperCase() + bs
}, Wi = (t = 16, e = zs.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Hi(t) {
  return !!(t && De(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const zi = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (xr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const a = Ft(n) ? [] : {};
        return Qt(n, (c, l) => {
          const g = r(c, o + 1);
          !Gt(g) && (a[l] = g);
        }), e[o] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, Yi = Fe("AsyncFunction"), Gi = (t) => t && (xr(t) || De(t)) && De(t.then) && De(t.catch), Ys = ((t, e) => t ? setImmediate : e ? ((r, n) => (ht.addEventListener("message", ({ source: o, data: a }) => {
  o === ht && a === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), ht.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  De(ht.postMessage)
), Ki = typeof queueMicrotask < "u" ? queueMicrotask.bind(ht) : typeof process < "u" && process.nextTick || Ys, h = {
  isArray: Ft,
  isArrayBuffer: Bs,
  isBuffer: di,
  isFormData: Ri,
  isArrayBufferView: hi,
  isString: pi,
  isNumber: qs,
  isBoolean: yi,
  isObject: xr,
  isPlainObject: Rr,
  isReadableStream: wi,
  isRequest: Si,
  isResponse: Oi,
  isHeaders: Ti,
  isUndefined: Gt,
  isDate: mi,
  isFile: vi,
  isBlob: gi,
  isRegExp: Mi,
  isFunction: De,
  isStream: Ei,
  isURLSearchParams: _i,
  isTypedArray: Fi,
  isFileList: bi,
  forEach: Qt,
  merge: Rn,
  extend: Ai,
  trim: Ci,
  stripBOM: Pi,
  inherits: ki,
  toFlatObject: xi,
  kindOf: Pr,
  kindOfTest: Fe,
  endsWith: Di,
  toArray: Li,
  forEachEntry: ji,
  matchAll: Ni,
  isHTMLForm: Ii,
  hasOwnProperty: gs,
  hasOwnProp: gs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hs,
  freezeMethods: $i,
  toObjectSet: Bi,
  toCamelCase: Ui,
  noop: qi,
  toFiniteNumber: Vi,
  findKey: Vs,
  global: ht,
  isContextDefined: Ws,
  ALPHABET: zs,
  generateString: Wi,
  isSpecCompliantForm: Hi,
  toJSONObject: zi,
  isAsyncFn: Yi,
  isThenable: Gi,
  setImmediate: Ys,
  asap: Ki
};
function F(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
h.inherits(F, Error, {
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
      config: h.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Gs = F.prototype, Ks = {};
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
  Ks[t] = { value: t };
});
Object.defineProperties(F, Ks);
Object.defineProperty(Gs, "isAxiosError", { value: !0 });
F.from = (t, e, r, n, o, a) => {
  const c = Object.create(Gs);
  return h.toFlatObject(t, c, function(g) {
    return g !== Error.prototype;
  }, (l) => l !== "isAxiosError"), F.call(c, t.message, e, r, n, o), c.cause = t, c.name = t.name, a && Object.assign(c, a), c;
};
const Ji = null;
function _n(t) {
  return h.isPlainObject(t) || h.isArray(t);
}
function Js(t) {
  return h.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Es(t, e, r) {
  return t ? t.concat(e).map(function(o, a) {
    return o = Js(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function Qi(t) {
  return h.isArray(t) && !t.some(_n);
}
const Xi = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Dr(t, e, r) {
  if (!h.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, S) {
    return !h.isUndefined(S[A]);
  });
  const n = r.metaTokens, o = r.visitor || y, a = r.dots, c = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(e);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function m(O) {
    if (O === null) return "";
    if (h.isDate(O))
      return O.toISOString();
    if (!g && h.isBlob(O))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(O) || h.isTypedArray(O) ? g && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function y(O, A, S) {
    let $ = O;
    if (O && !S && typeof O == "object") {
      if (h.endsWith(A, "{}"))
        A = n ? A : A.slice(0, -2), O = JSON.stringify(O);
      else if (h.isArray(O) && Qi(O) || (h.isFileList(O) || h.endsWith(A, "[]")) && ($ = h.toArray(O)))
        return A = Js(A), $.forEach(function(G, ie) {
          !(h.isUndefined(G) || G === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? Es([A], ie, a) : c === null ? A : A + "[]",
            m(G)
          );
        }), !1;
    }
    return _n(O) ? !0 : (e.append(Es(S, A, a), m(O)), !1);
  }
  const b = [], j = Object.assign(Xi, {
    defaultVisitor: y,
    convertValue: m,
    isVisitable: _n
  });
  function k(O, A) {
    if (!h.isUndefined(O)) {
      if (b.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      b.push(O), h.forEach(O, function($, D) {
        (!(h.isUndefined($) || $ === null) && o.call(
          e,
          $,
          h.isString(D) ? D.trim() : D,
          A,
          j
        )) === !0 && k($, A ? A.concat(D) : [D]);
      }), b.pop();
    }
  }
  if (!h.isObject(t))
    throw new TypeError("data must be an object");
  return k(t), e;
}
function Rs(t) {
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
function Dn(t, e) {
  this._pairs = [], t && Dr(t, this, e);
}
const Qs = Dn.prototype;
Qs.append = function(e, r) {
  this._pairs.push([e, r]);
};
Qs.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Rs);
  } : Rs;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Zi(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xs(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Zi, o = r && r.serialize;
  let a;
  if (o ? a = o(e, r) : a = h.isURLSearchParams(e) ? e.toString() : new Dn(e, r).toString(n), a) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class _s {
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
    h.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Zs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ea = typeof URLSearchParams < "u" ? URLSearchParams : Dn, ta = typeof FormData < "u" ? FormData : null, ra = typeof Blob < "u" ? Blob : null, na = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ea,
    FormData: ta,
    Blob: ra
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ln = typeof window < "u" && typeof document < "u", wn = typeof navigator == "object" && navigator || void 0, sa = Ln && (!wn || ["ReactNative", "NativeScript", "NS"].indexOf(wn.product) < 0), oa = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ia = Ln && window.location.href || "http://localhost", aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ln,
  hasStandardBrowserEnv: sa,
  hasStandardBrowserWebWorkerEnv: oa,
  navigator: wn,
  origin: ia
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...aa,
  ...na
};
function ua(t, e) {
  return Dr(t, new Pe.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, a) {
      return Pe.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function ca(t) {
  return h.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function la(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function eo(t) {
  function e(r, n, o, a) {
    let c = r[a++];
    if (c === "__proto__") return !0;
    const l = Number.isFinite(+c), g = a >= r.length;
    return c = !c && h.isArray(o) ? o.length : c, g ? (h.hasOwnProp(o, c) ? o[c] = [o[c], n] : o[c] = n, !l) : ((!o[c] || !h.isObject(o[c])) && (o[c] = []), e(r, n, o[c], a) && h.isArray(o[c]) && (o[c] = la(o[c])), !l);
  }
  if (h.isFormData(t) && h.isFunction(t.entries)) {
    const r = {};
    return h.forEachEntry(t, (n, o) => {
      e(ca(n), o, r, 0);
    }), r;
  }
  return null;
}
function fa(t, e, r) {
  if (h.isString(t))
    try {
      return (e || JSON.parse)(t), h.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(t);
}
const Xt = {
  transitional: Zs,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = h.isObject(e);
    if (a && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
      return o ? JSON.stringify(eo(e)) : e;
    if (h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e) || h.isReadableStream(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ua(e, this.formSerializer).toString();
      if ((l = h.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return Dr(
          l ? { "files[]": e } : e,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), fa(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Xt.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (h.isResponse(e) || h.isReadableStream(e))
      return e;
    if (e && h.isString(e) && (n && !this.responseType || o)) {
      const c = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (l) {
        if (c)
          throw l.name === "SyntaxError" ? F.from(l, F.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: Pe.classes.FormData,
    Blob: Pe.classes.Blob
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
h.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Xt.headers[t] = {};
});
const da = h.toObjectSet([
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
]), ha = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(c) {
    o = c.indexOf(":"), r = c.substring(0, o).trim().toLowerCase(), n = c.substring(o + 1).trim(), !(!r || e[r] && da[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, ws = Symbol("internals");
function Ht(t) {
  return t && String(t).trim().toLowerCase();
}
function _r(t) {
  return t === !1 || t == null ? t : h.isArray(t) ? t.map(_r) : String(t);
}
function pa(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const ya = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function on(t, e, r, n, o) {
  if (h.isFunction(n))
    return n.call(this, e, r);
  if (o && (e = r), !!h.isString(e)) {
    if (h.isString(n))
      return e.indexOf(n) !== -1;
    if (h.isRegExp(n))
      return n.test(e);
  }
}
function ma(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function va(t, e) {
  const r = h.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(o, a, c) {
        return this[n].call(this, e, o, a, c);
      },
      configurable: !0
    });
  });
}
class ke {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function a(l, g, m) {
      const y = Ht(g);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const b = h.findKey(o, y);
      (!b || o[b] === void 0 || m === !0 || m === void 0 && o[b] !== !1) && (o[b || g] = _r(l));
    }
    const c = (l, g) => h.forEach(l, (m, y) => a(m, y, g));
    if (h.isPlainObject(e) || e instanceof this.constructor)
      c(e, r);
    else if (h.isString(e) && (e = e.trim()) && !ya(e))
      c(ha(e), r);
    else if (h.isHeaders(e))
      for (const [l, g] of e.entries())
        a(g, l, n);
    else
      e != null && a(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = Ht(e), e) {
      const n = h.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return pa(o);
        if (h.isFunction(r))
          return r.call(this, o, n);
        if (h.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = Ht(e), e) {
      const n = h.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || on(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function a(c) {
      if (c = Ht(c), c) {
        const l = h.findKey(n, c);
        l && (!r || on(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return h.isArray(e) ? e.forEach(a) : a(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || on(this, this[a], a, e, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(e) {
    const r = this, n = {};
    return h.forEach(this, (o, a) => {
      const c = h.findKey(n, a);
      if (c) {
        r[c] = _r(o), delete r[a];
        return;
      }
      const l = e ? ma(a) : String(a).trim();
      l !== a && delete r[a], r[l] = _r(o), n[l] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return h.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = e && h.isArray(n) ? n.join(", ") : n);
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
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(e) {
    const n = (this[ws] = this[ws] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(c) {
      const l = Ht(c);
      n[l] || (va(o, c), n[l] = !0);
    }
    return h.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
ke.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(ke.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(ke);
function an(t, e) {
  const r = this || Xt, n = e || r, o = ke.from(n.headers);
  let a = n.data;
  return h.forEach(t, function(l) {
    a = l.call(r, a, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), a;
}
function to(t) {
  return !!(t && t.__CANCEL__);
}
function jt(t, e, r) {
  F.call(this, t ?? "canceled", F.ERR_CANCELED, e, r), this.name = "CanceledError";
}
h.inherits(jt, F, {
  __CANCEL__: !0
});
function ro(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new F(
    "Request failed with status code " + r.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function ga(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ba(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, a = 0, c;
  return e = e !== void 0 ? e : 1e3, function(g) {
    const m = Date.now(), y = n[a];
    c || (c = m), r[o] = g, n[o] = m;
    let b = a, j = 0;
    for (; b !== o; )
      j += r[b++], b = b % t;
    if (o = (o + 1) % t, o === a && (a = (a + 1) % t), m - c < e)
      return;
    const k = y && m - y;
    return k ? Math.round(j * 1e3 / k) : void 0;
  };
}
function Ea(t, e) {
  let r = 0, n = 1e3 / e, o, a;
  const c = (m, y = Date.now()) => {
    r = y, o = null, a && (clearTimeout(a), a = null), t.apply(null, m);
  };
  return [(...m) => {
    const y = Date.now(), b = y - r;
    b >= n ? c(m, y) : (o = m, a || (a = setTimeout(() => {
      a = null, c(o);
    }, n - b)));
  }, () => o && c(o)];
}
const Or = (t, e, r = 3) => {
  let n = 0;
  const o = ba(50, 250);
  return Ea((a) => {
    const c = a.loaded, l = a.lengthComputable ? a.total : void 0, g = c - n, m = o(g), y = c <= l;
    n = c;
    const b = {
      loaded: c,
      total: l,
      progress: l ? c / l : void 0,
      bytes: g,
      rate: m || void 0,
      estimated: m && l && y ? (l - c) / m : void 0,
      event: a,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    t(b);
  }, r);
}, Ss = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Os = (t) => (...e) => h.asap(() => t(...e)), Ra = Pe.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = Pe.navigator && /(msie|trident)/i.test(Pe.navigator.userAgent), r = document.createElement("a");
    let n;
    function o(a) {
      let c = a;
      return e && (r.setAttribute("href", c), c = r.href), r.setAttribute("href", c), {
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
    return n = o(window.location.href), function(c) {
      const l = h.isString(c) ? o(c) : c;
      return l.protocol === n.protocol && l.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), _a = Pe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, o, a) {
      const c = [t + "=" + encodeURIComponent(e)];
      h.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()), h.isString(n) && c.push("path=" + n), h.isString(o) && c.push("domain=" + o), a === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function wa(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Sa(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function no(t, e) {
  return t && !wa(e) ? Sa(t, e) : e;
}
const Ts = (t) => t instanceof ke ? { ...t } : t;
function bt(t, e) {
  e = e || {};
  const r = {};
  function n(m, y, b) {
    return h.isPlainObject(m) && h.isPlainObject(y) ? h.merge.call({ caseless: b }, m, y) : h.isPlainObject(y) ? h.merge({}, y) : h.isArray(y) ? y.slice() : y;
  }
  function o(m, y, b) {
    if (h.isUndefined(y)) {
      if (!h.isUndefined(m))
        return n(void 0, m, b);
    } else return n(m, y, b);
  }
  function a(m, y) {
    if (!h.isUndefined(y))
      return n(void 0, y);
  }
  function c(m, y) {
    if (h.isUndefined(y)) {
      if (!h.isUndefined(m))
        return n(void 0, m);
    } else return n(void 0, y);
  }
  function l(m, y, b) {
    if (b in e)
      return n(m, y);
    if (b in t)
      return n(void 0, m);
  }
  const g = {
    url: a,
    method: a,
    data: a,
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
    validateStatus: l,
    headers: (m, y) => o(Ts(m), Ts(y), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, t, e)), function(y) {
    const b = g[y] || o, j = b(t[y], e[y], y);
    h.isUndefined(j) && b !== l || (r[y] = j);
  }), r;
}
const so = (t) => {
  const e = bt({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: c, auth: l } = e;
  e.headers = c = ke.from(c), e.url = Xs(no(e.baseURL, e.url), t.params, t.paramsSerializer), l && c.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let g;
  if (h.isFormData(r)) {
    if (Pe.hasStandardBrowserEnv || Pe.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((g = c.getContentType()) !== !1) {
      const [m, ...y] = g ? g.split(";").map((b) => b.trim()).filter(Boolean) : [];
      c.setContentType([m || "multipart/form-data", ...y].join("; "));
    }
  }
  if (Pe.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(e)), n || n !== !1 && Ra(e.url))) {
    const m = o && a && _a.read(a);
    m && c.set(o, m);
  }
  return e;
}, Oa = typeof XMLHttpRequest < "u", Ta = Oa && function(t) {
  return new Promise(function(r, n) {
    const o = so(t);
    let a = o.data;
    const c = ke.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: g, onDownloadProgress: m } = o, y, b, j, k, O;
    function A() {
      k && k(), O && O(), o.cancelToken && o.cancelToken.unsubscribe(y), o.signal && o.signal.removeEventListener("abort", y);
    }
    let S = new XMLHttpRequest();
    S.open(o.method.toUpperCase(), o.url, !0), S.timeout = o.timeout;
    function $() {
      if (!S)
        return;
      const G = ke.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), N = {
        data: !l || l === "text" || l === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: G,
        config: t,
        request: S
      };
      ro(function(he) {
        r(he), A();
      }, function(he) {
        n(he), A();
      }, N), S = null;
    }
    "onloadend" in S ? S.onloadend = $ : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout($);
    }, S.onabort = function() {
      S && (n(new F("Request aborted", F.ECONNABORTED, t, S)), S = null);
    }, S.onerror = function() {
      n(new F("Network Error", F.ERR_NETWORK, t, S)), S = null;
    }, S.ontimeout = function() {
      let ie = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const N = o.transitional || Zs;
      o.timeoutErrorMessage && (ie = o.timeoutErrorMessage), n(new F(
        ie,
        N.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        t,
        S
      )), S = null;
    }, a === void 0 && c.setContentType(null), "setRequestHeader" in S && h.forEach(c.toJSON(), function(ie, N) {
      S.setRequestHeader(N, ie);
    }), h.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials), l && l !== "json" && (S.responseType = o.responseType), m && ([j, O] = Or(m, !0), S.addEventListener("progress", j)), g && S.upload && ([b, k] = Or(g), S.upload.addEventListener("progress", b), S.upload.addEventListener("loadend", k)), (o.cancelToken || o.signal) && (y = (G) => {
      S && (n(!G || G.type ? new jt(null, t, S) : G), S.abort(), S = null);
    }, o.cancelToken && o.cancelToken.subscribe(y), o.signal && (o.signal.aborted ? y() : o.signal.addEventListener("abort", y)));
    const D = ga(o.url);
    if (D && Pe.protocols.indexOf(D) === -1) {
      n(new F("Unsupported protocol " + D + ":", F.ERR_BAD_REQUEST, t));
      return;
    }
    S.send(a || null);
  });
}, Ca = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const a = function(m) {
      if (!o) {
        o = !0, l();
        const y = m instanceof Error ? m : this.reason;
        n.abort(y instanceof F ? y : new jt(y instanceof Error ? y.message : y));
      }
    };
    let c = e && setTimeout(() => {
      c = null, a(new F(`timeout ${e} of ms exceeded`, F.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (c && clearTimeout(c), c = null, t.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(a) : m.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((m) => m.addEventListener("abort", a));
    const { signal: g } = n;
    return g.unsubscribe = () => h.asap(l), g;
  }
}, Aa = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, Pa = async function* (t, e) {
  for await (const r of ka(t))
    yield* Aa(r, e);
}, ka = async function* (t) {
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
}, Cs = (t, e, r, n) => {
  const o = Pa(t, e);
  let a = 0, c, l = (g) => {
    c || (c = !0, n && n(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: m, value: y } = await o.next();
        if (m) {
          l(), g.close();
          return;
        }
        let b = y.byteLength;
        if (r) {
          let j = a += b;
          r(j);
        }
        g.enqueue(new Uint8Array(y));
      } catch (m) {
        throw l(m), m;
      }
    },
    cancel(g) {
      return l(g), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Lr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", oo = Lr && typeof ReadableStream == "function", xa = Lr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), io = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Da = oo && io(() => {
  let t = !1;
  const e = new Request(Pe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), As = 64 * 1024, Sn = oo && io(() => h.isReadableStream(new Response("").body)), Tr = {
  stream: Sn && ((t) => t.body)
};
Lr && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Tr[e] && (Tr[e] = h.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new F(`Response type '${e}' is not supported`, F.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const La = async (t) => {
  if (t == null)
    return 0;
  if (h.isBlob(t))
    return t.size;
  if (h.isSpecCompliantForm(t))
    return (await new Request(Pe.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(t) || h.isArrayBuffer(t))
    return t.byteLength;
  if (h.isURLSearchParams(t) && (t = t + ""), h.isString(t))
    return (await xa(t)).byteLength;
}, Fa = async (t, e) => {
  const r = h.toFiniteNumber(t.getContentLength());
  return r ?? La(e);
}, ja = Lr && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: o,
    cancelToken: a,
    timeout: c,
    onDownloadProgress: l,
    onUploadProgress: g,
    responseType: m,
    headers: y,
    withCredentials: b = "same-origin",
    fetchOptions: j
  } = so(t);
  m = m ? (m + "").toLowerCase() : "text";
  let k = Ca([o, a && a.toAbortSignal()], c), O;
  const A = k && k.unsubscribe && (() => {
    k.unsubscribe();
  });
  let S;
  try {
    if (g && Da && r !== "get" && r !== "head" && (S = await Fa(y, n)) !== 0) {
      let N = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), se;
      if (h.isFormData(n) && (se = N.headers.get("content-type")) && y.setContentType(se), N.body) {
        const [he, Z] = Ss(
          S,
          Or(Os(g))
        );
        n = Cs(N.body, As, he, Z);
      }
    }
    h.isString(b) || (b = b ? "include" : "omit");
    const $ = "credentials" in Request.prototype;
    O = new Request(e, {
      ...j,
      signal: k,
      method: r.toUpperCase(),
      headers: y.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: $ ? b : void 0
    });
    let D = await fetch(O);
    const G = Sn && (m === "stream" || m === "response");
    if (Sn && (l || G && A)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((Se) => {
        N[Se] = D[Se];
      });
      const se = h.toFiniteNumber(D.headers.get("content-length")), [he, Z] = l && Ss(
        se,
        Or(Os(l), !0)
      ) || [];
      D = new Response(
        Cs(D.body, As, he, () => {
          Z && Z(), A && A();
        }),
        N
      );
    }
    m = m || "text";
    let ie = await Tr[h.findKey(Tr, m) || "text"](D, t);
    return !G && A && A(), await new Promise((N, se) => {
      ro(N, se, {
        data: ie,
        headers: ke.from(D.headers),
        status: D.status,
        statusText: D.statusText,
        config: t,
        request: O
      });
    });
  } catch ($) {
    throw A && A(), $ && $.name === "TypeError" && /fetch/i.test($.message) ? Object.assign(
      new F("Network Error", F.ERR_NETWORK, t, O),
      {
        cause: $.cause || $
      }
    ) : F.from($, $ && $.code, t, O);
  }
}), On = {
  http: Ji,
  xhr: Ta,
  fetch: ja
};
h.forEach(On, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ps = (t) => `- ${t}`, Na = (t) => h.isFunction(t) || t === null || t === !1, ao = {
  getAdapter: (t) => {
    t = h.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let c;
      if (n = r, !Na(r) && (n = On[(c = String(r)).toLowerCase()], n === void 0))
        throw new F(`Unknown adapter '${c}'`);
      if (n)
        break;
      o[c || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([l, g]) => `adapter ${l} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = e ? a.length > 1 ? `since :
` + a.map(Ps).join(`
`) : " " + Ps(a[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: On
};
function un(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new jt(null, t);
}
function ks(t) {
  return un(t), t.headers = ke.from(t.headers), t.data = an.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ao.getAdapter(t.adapter || Xt.adapter)(t).then(function(n) {
    return un(t), n.data = an.call(
      t,
      t.transformResponse,
      n
    ), n.headers = ke.from(n.headers), n;
  }, function(n) {
    return to(n) || (un(t), n && n.response && (n.response.data = an.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = ke.from(n.response.headers))), Promise.reject(n);
  });
}
const uo = "1.7.7", Fn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Fn[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const xs = {};
Fn.transitional = function(e, r, n) {
  function o(a, c) {
    return "[Axios v" + uo + "] Transitional option '" + a + "'" + c + (n ? ". " + n : "");
  }
  return (a, c, l) => {
    if (e === !1)
      throw new F(
        o(c, " has been removed" + (r ? " in " + r : "")),
        F.ERR_DEPRECATED
      );
    return r && !xs[c] && (xs[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, c, l) : !0;
  };
};
function Ia(t, e, r) {
  if (typeof t != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], c = e[a];
    if (c) {
      const l = t[a], g = l === void 0 || c(l, a, t);
      if (g !== !0)
        throw new F("option " + a + " must be " + g, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new F("Unknown option " + a, F.ERR_BAD_OPTION);
  }
}
const Tn = {
  assertOptions: Ia,
  validators: Fn
}, Qe = Tn.validators;
class gt {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new _s(),
      response: new _s()
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
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = bt(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: a } = r;
    n !== void 0 && Tn.assertOptions(n, {
      silentJSONParsing: Qe.transitional(Qe.boolean),
      forcedJSONParsing: Qe.transitional(Qe.boolean),
      clarifyTimeoutError: Qe.transitional(Qe.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Tn.assertOptions(o, {
      encode: Qe.function,
      serialize: Qe.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let c = a && h.merge(
      a.common,
      a[r.method]
    );
    a && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (O) => {
        delete a[O];
      }
    ), r.headers = ke.concat(c, a);
    const l = [];
    let g = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(r) === !1 || (g = g && A.synchronous, l.unshift(A.fulfilled, A.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(A) {
      m.push(A.fulfilled, A.rejected);
    });
    let y, b = 0, j;
    if (!g) {
      const O = [ks.bind(this), void 0];
      for (O.unshift.apply(O, l), O.push.apply(O, m), j = O.length, y = Promise.resolve(r); b < j; )
        y = y.then(O[b++], O[b++]);
      return y;
    }
    j = l.length;
    let k = r;
    for (b = 0; b < j; ) {
      const O = l[b++], A = l[b++];
      try {
        k = O(k);
      } catch (S) {
        A.call(this, S);
        break;
      }
    }
    try {
      y = ks.call(this, k);
    } catch (O) {
      return Promise.reject(O);
    }
    for (b = 0, j = m.length; b < j; )
      y = y.then(m[b++], m[b++]);
    return y;
  }
  getUri(e) {
    e = bt(this.defaults, e);
    const r = no(e.baseURL, e.url);
    return Xs(r, e.params, e.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  gt.prototype[e] = function(r, n) {
    return this.request(bt(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, c, l) {
      return this.request(bt(l || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: c
      }));
    };
  }
  gt.prototype[e] = r(), gt.prototype[e + "Form"] = r(!0);
});
class jn {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const c = new Promise((l) => {
        n.subscribe(l), a = l;
      }).then(o);
      return c.cancel = function() {
        n.unsubscribe(a);
      }, c;
    }, e(function(a, c, l) {
      n.reason || (n.reason = new jt(a, c, l), r(n.reason));
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
      token: new jn(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
function Ua(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Ma(t) {
  return h.isObject(t) && t.isAxiosError === !0;
}
const Cn = {
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
Object.entries(Cn).forEach(([t, e]) => {
  Cn[e] = t;
});
function co(t) {
  const e = new gt(t), r = $s(gt.prototype.request, e);
  return h.extend(r, gt.prototype, e, { allOwnKeys: !0 }), h.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return co(bt(t, o));
  }, r;
}
const ce = co(Xt);
ce.Axios = gt;
ce.CanceledError = jt;
ce.CancelToken = jn;
ce.isCancel = to;
ce.VERSION = uo;
ce.toFormData = Dr;
ce.AxiosError = F;
ce.Cancel = ce.CanceledError;
ce.all = function(e) {
  return Promise.all(e);
};
ce.spread = Ua;
ce.isAxiosError = Ma;
ce.mergeConfig = bt;
ce.AxiosHeaders = ke;
ce.formToJSON = (t) => eo(h.isHTMLForm(t) ? new FormData(t) : t);
ce.getAdapter = ao.getAdapter;
ce.HttpStatusCode = Cn;
ce.default = ce;
const lo = {
  BASE_URL: "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com"
  // BASE_URL: "https://4ab7-182-156-141-17.ngrok-free.app",
}, Ie = ce.create({
  baseURL: lo.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), $a = () => localStorage.getItem("access_token"), Ba = () => localStorage.getItem("refresh_token");
Ie.interceptors.request.use(
  (t) => {
    const e = $a();
    return e && (t.headers.Authorization = `Bearer ${e}`), t;
  },
  (t) => Promise.reject(t)
);
Ie.interceptors.response.use(
  (t) => t,
  async (t) => {
    const e = t.config;
    if (t.response && t.response.status === 401 && !e._retry) {
      e._retry = !0;
      const r = Ba();
      if (r)
        try {
          const n = await ce.post(`${lo.BASE_URL}/auth/refresh-token`, {
            refreshToken: r
          });
          return localStorage.setItem("access_token", n.data.access_token), e.headers.Authorization = `Bearer ${n.data.access_token}`, Ie(e);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(t);
  }
);
function dt(t) {
  var e;
  if (ce.isAxiosError(t)) {
    const r = ((e = t.response) == null ? void 0 : e.data) || {
      message: "An error occurred. Try after some time."
    };
    throw new Error(r.message);
  } else
    throw new Error("Unknown error occurred");
}
class Nt {
  // Create a new Data
  async createData(e, r) {
    try {
      const n = await Ie.post(e, r);
      return console.log(n.data), n.data;
    } catch (n) {
      dt(n);
    }
  }
  // Get all Data
  async getData(e) {
    try {
      return (await Ie.get(e)).data.data;
    } catch (r) {
      dt(r);
    }
  }
  // Get an Data by ID
  async getDataById(e, r) {
    try {
      const n = await Ie.get(`${e}/${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      dt(n);
    }
  }
  // Get Data by Query
  async getDataByQuery(e, r) {
    try {
      const n = await Ie.get(`${e}?search=${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      dt(n);
    }
  }
  // Update a data by ID
  async updateData(e, r, n) {
    try {
      const o = await Ie.patch(`${e}/${r}`, n);
      return console.log(o.data), o.data;
    } catch (o) {
      dt(o);
    }
  }
  // Delete an Data by ID
  async deleteData(e, r) {
    try {
      const n = await Ie.delete(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      dt(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(e, r) {
    try {
      const n = await Ie.patch(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      dt(n);
    }
  }
}
const Ha = (t) => {
  const e = new Nt();
  return kn({ mutationFn: (r) => e.createData(t, r) });
}, za = (t) => {
  const e = new Nt();
  return kn({ mutationFn: (r) => e.deleteData(t, r) });
}, qa = (t, e) => {
  const r = new Nt();
  return Pn({ queryKey: e, queryFn: () => r.getData(t) });
}, Ya = (t, e, r) => {
  const n = new Nt();
  return Pn({ queryKey: r, queryFn: () => n.getDataById(t, e), enabled: !!e });
}, Ga = (t, e) => {
  const r = new Nt();
  return kn({ mutationFn: (n) => r.updateData(t, e, n) });
}, Ka = (t, e, r) => {
  const n = new Nt();
  return Pn({ queryKey: r, queryFn: () => n.getDataByQuery(t, e), enabled: !!e });
}, Ja = (t) => qa(t, ["getCompanyNames"]), Qa = {
  COMPANY_NAMES: "/company/partial/details"
}, xe = {
  GET_COMPANY_NAMES: "/company/partial/details",
  GET_PRODUCTS_PARTIAL: "/products/partial/data",
  GET_VENDORS_PARTIAL: "/vendors/filterVendor/all",
  GET_FARMERS_PARTIAL: "/farmers/filterFarmer/all",
  GET_CUSTOMERS_PARTIAL: "/customers/partial/all",
  GET_CUSTOMER_NAMESL: "/customers/names/all",
  GET_UOM_PARTIAL: "/uoms/getAll/partialdata",
  GET_BRANCHES_PARTIAL: "/location-branches/filterData/filter/all",
  GET_ALL_RFPA_NO: "/rfpa/rfpanumbers/getAllRfpaNo",
  GET_ALL_DEAL_SLIP_NO: "/dealSlip/dealslipno/getAlldealslipNo",
  GET_ALL_GRN_NO: "/grns/grnnumbers/getAllgrnNo",
  GET_ALL_DELIVERY_CHALLAN_NO: "/deliveryChallan/challanNos/getAllChallanNo",
  GET_DEPARTMENT_BY_ID: "/departments"
}, fo = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com", Va = () => ce.create({
  baseURL: fo,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class Ee {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = Ee.createService();
  }
  static createService() {
    return Ee._axiosInstance || (Ee._axiosInstance = Va(), Ee.setAuthHeaderInterceptor(), Ee._axiosInstance.interceptors.response.use(Ee.handleSuccess, Ee.handleError)), Ee._axiosInstance;
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
      return (await ce.post(`${fo}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    Ee._axiosInstance.interceptors.request.use(
      function(e) {
        const r = localStorage.getItem("access_token");
        return r && (e.headers.Authorization = `Bearer ${r}`), e;
      },
      function(e) {
        return Promise.reject(e);
      }
    );
  }
  static setResponseInterceptor() {
    Ee._axiosInstance.interceptors.response.use(
      Ee.handleSuccess,
      Ee.handleError
    );
  }
  static handleSuccess(e) {
    return e.data;
  }
  // Updated error handler to catch 401 errors and try to refresh the token
  static async handleError(e) {
    var o;
    const r = e.config;
    if (e.response && e.response.status === 401 && !r._retry) {
      r._retry = !0;
      try {
        const a = await Ee.refreshAccessToken();
        return Ee.setAccessToken(a), r.headers.set("Authorization", `Bearer ${a}`), Ee._axiosInstance(r);
      } catch (a) {
        console.error("Refresh token failed", a);
      }
    }
    const n = { name: "Error", message: "Something went wrong!" };
    return e.response && e.response.data && (n.message = (o = e.response.data) == null ? void 0 : o.message), Promise.reject(n);
  }
  get(e) {
    return this.service.get(e);
  }
  post(e, r) {
    return this.service.post(e, r);
  }
  postFormData(e, r) {
    return this.service.post(e, r, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  put(e, r) {
    return this.service.put(e, r);
  }
  putFormData(e, r) {
    return this.service.put(e, r, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  patch(e, r) {
    return this.service.patch(e, r);
  }
  patchFormData(e, r) {
    return this.service.patch(e, r, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  delete(e) {
    return this.service.delete(e);
  }
}
class Xa extends Ee {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getCompanyNames() {
    const e = xe.GET_COMPANY_NAMES;
    return this.get(e);
  }
  getProductsPatrialData() {
    const e = xe.GET_PRODUCTS_PARTIAL;
    return this.get(e);
  }
  getVendorsPatrialData() {
    const e = xe.GET_VENDORS_PARTIAL;
    return this.get(e);
  }
  getFarmersPatrialData() {
    const e = xe.GET_FARMERS_PARTIAL;
    return this.get(e);
  }
  getCustomerPatrialData(e) {
    const r = `${xe.GET_CUSTOMERS_PARTIAL}/${e}`;
    return this.get(r);
  }
  getAllCustomerNames() {
    const e = xe.GET_CUSTOMER_NAMESL;
    return this.get(e);
  }
  getUOMPartialData() {
    const e = xe.GET_UOM_PARTIAL;
    return this.get(e);
  }
  getBranchPartialData() {
    const e = xe.GET_BRANCHES_PARTIAL;
    return this.get(e);
  }
  getRFPANums() {
    const e = xe.GET_ALL_RFPA_NO;
    return this.get(e);
  }
  getGRNNums() {
    const e = xe.GET_ALL_GRN_NO;
    return this.get(e);
  }
  getDealSlipNums() {
    const e = xe.GET_ALL_DEAL_SLIP_NO;
    return this.get(e);
  }
  getDeliveryChallanNums() {
    const e = xe.GET_ALL_DELIVERY_CHALLAN_NO;
    return this.get(e);
  }
  getDepartmentById(e) {
    const r = `${xe.GET_DEPARTMENT_BY_ID}/${e}`;
    return this.get(r);
  }
}
export {
  Ee as BaseService,
  lo as COM_API_URL,
  Qa as SHARED_API_URL,
  Xa as SharedService,
  Ie as axiosInstance,
  $a as getAccessToken,
  Ba as getRefreshToken,
  dt as handleError,
  xe as sharedApiUrlConstants,
  Ha as useCreateData,
  za as useDeleteData,
  qa as useGetAllData,
  Ja as useGetCompanyNames,
  Ya as useGetData,
  Ka as useGetDataByQuery,
  Ga as useUpdateData
};
