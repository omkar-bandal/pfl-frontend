var ns = (t) => {
  throw TypeError(t);
};
var tn = (t, e, r) => e.has(t) || ns("Cannot " + r);
var v = (t, e, r) => (tn(t, e, "read from private field"), r ? r.call(t) : e.get(t)), re = (t, e, r) => e.has(t) ? ns("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), U = (t, e, r, n) => (tn(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), oe = (t, e, r) => (tn(t, e, "access private method"), r);
var Or = class {
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
}, Rr = typeof window > "u" || "Deno" in globalThis;
function xo() {
}
function ss(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Fo(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function vr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ne(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function os(t) {
  return JSON.stringify(
    t,
    (e, r) => un(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function an(t, e) {
  if (t === e)
    return t;
  const r = is(t) && is(e);
  if (r || un(t) && un(e)) {
    const n = r ? t : Object.keys(t), o = n.length, c = r ? e : Object.keys(e), u = c.length, l = r ? [] : {};
    let b = 0;
    for (let m = 0; m < u; m++) {
      const y = r ? m : c[m];
      (!r && n.includes(y) || r) && t[y] === void 0 && e[y] === void 0 ? (l[y] = void 0, b++) : (l[y] = an(t[y], e[y]), l[y] === t[y] && t[y] !== void 0 && b++);
    }
    return o === u && b === o ? t : l;
  }
  return e;
}
function wr(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function is(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function un(t) {
  if (!as(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!as(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function as(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function us(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return an(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return an(t, e);
  }
  return e;
}
var ft, Qe, Ot, As, Do = (As = class extends Or {
  constructor() {
    super();
    re(this, ft);
    re(this, Qe);
    re(this, Ot);
    U(this, Ot, (e) => {
      if (!Rr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Qe) || this.setEventListener(v(this, Ot));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, Qe)) == null || e.call(this), U(this, Qe, void 0));
  }
  setEventListener(e) {
    var r;
    U(this, Ot, e), (r = v(this, Qe)) == null || r.call(this), U(this, Qe, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    v(this, ft) !== e && (U(this, ft, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof v(this, ft) == "boolean" ? v(this, ft) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, ft = new WeakMap(), Qe = new WeakMap(), Ot = new WeakMap(), As), jo = new Do(), Ct, Ge, Tt, ks, Lo = (ks = class extends Or {
  constructor() {
    super();
    re(this, Ct, !0);
    re(this, Ge);
    re(this, Tt);
    U(this, Tt, (e) => {
      if (!Rr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Ge) || this.setEventListener(v(this, Tt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, Ge)) == null || e.call(this), U(this, Ge, void 0));
  }
  setEventListener(e) {
    var r;
    U(this, Tt, e), (r = v(this, Ge)) == null || r.call(this), U(this, Ge, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    v(this, Ct) !== e && (U(this, Ct, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return v(this, Ct);
  }
}, Ct = new WeakMap(), Ge = new WeakMap(), Tt = new WeakMap(), ks), No = new Lo();
function Io(t) {
  return (t ?? "online") === "online" ? No.isOnline() : !0;
}
function Uo() {
  let t = [], e = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  }, o = (l) => setTimeout(l, 0);
  const c = (l) => {
    e ? t.push(l) : o(() => {
      r(l);
    });
  }, u = () => {
    const l = t;
    t = [], l.length && o(() => {
      n(() => {
        l.forEach((b) => {
          r(b);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let b;
      e++;
      try {
        b = l();
      } finally {
        e--, e || u();
      }
      return b;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...b) => {
      c(() => {
        l(...b);
      });
    },
    schedule: c,
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
var Cr = Uo();
function Mo(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Io(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Bo() {
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
var Ce, W, Ht, we, dt, Pt, Le, Yt, At, kt, ht, pt, Xe, xt, J, Vt, cn, ln, fn, dn, hn, pn, yn, Ds, xs, $o = (xs = class extends Or {
  constructor(e, r) {
    super();
    re(this, J);
    re(this, Ce);
    re(this, W);
    re(this, Ht);
    re(this, we);
    re(this, dt);
    re(this, Pt);
    re(this, Le);
    re(this, Yt);
    re(this, At);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    re(this, kt);
    re(this, ht);
    re(this, pt);
    re(this, Xe);
    re(this, xt, /* @__PURE__ */ new Set());
    this.options = r, U(this, Ce, e), U(this, Le, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, W).addObserver(this), cs(v(this, W), this.options) ? oe(this, J, Vt).call(this) : this.updateResult(), oe(this, J, dn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return mn(
      v(this, W),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return mn(
      v(this, W),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, J, hn).call(this), oe(this, J, pn).call(this), v(this, W).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, o = v(this, W);
    if (this.options = v(this, Ce).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Ne(this.options.enabled, v(this, W)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, J, yn).call(this), v(this, W).setOptions(this.options), n._defaulted && !wr(this.options, n) && v(this, Ce).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, W),
      observer: this
    });
    const c = this.hasListeners();
    c && ls(
      v(this, W),
      o,
      this.options,
      n
    ) && oe(this, J, Vt).call(this), this.updateResult(r), c && (v(this, W) !== o || Ne(this.options.enabled, v(this, W)) !== Ne(n.enabled, v(this, W)) || vr(this.options.staleTime, v(this, W)) !== vr(n.staleTime, v(this, W))) && oe(this, J, cn).call(this);
    const u = oe(this, J, ln).call(this);
    c && (v(this, W) !== o || Ne(this.options.enabled, v(this, W)) !== Ne(n.enabled, v(this, W)) || u !== v(this, Xe)) && oe(this, J, fn).call(this, u);
  }
  getOptimisticResult(e) {
    const r = v(this, Ce).getQueryCache().build(v(this, Ce), e), n = this.createResult(r, e);
    return Vo(this, n) && (U(this, we, n), U(this, Pt, this.options), U(this, dt, v(this, W).state)), n;
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
    v(this, xt).add(e);
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
    return oe(this, J, Vt).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), v(this, we)));
  }
  createResult(e, r) {
    var he;
    const n = v(this, W), o = this.options, c = v(this, we), u = v(this, dt), l = v(this, Pt), m = e !== n ? e.state : v(this, Ht), { state: y } = e;
    let g = { ...y }, L = !1, k;
    if (r._optimisticResults) {
      const Z = this.hasListeners(), _e = !Z && cs(e, r), Ie = Z && ls(e, n, r, o);
      (_e || Ie) && (g = {
        ...g,
        ...Mo(y.data, e.options)
      }), r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: O, errorUpdatedAt: P, status: S } = g;
    if (r.select && g.data !== void 0)
      if (c && g.data === (u == null ? void 0 : u.data) && r.select === v(this, Yt))
        k = v(this, At);
      else
        try {
          U(this, Yt, r.select), k = r.select(g.data), k = us(c == null ? void 0 : c.data, k, r), U(this, At, k), U(this, Le, null);
        } catch (Z) {
          U(this, Le, Z);
        }
    else
      k = g.data;
    if (r.placeholderData !== void 0 && k === void 0 && S === "pending") {
      let Z;
      if (c != null && c.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        Z = c.data;
      else if (Z = typeof r.placeholderData == "function" ? r.placeholderData(
        (he = v(this, kt)) == null ? void 0 : he.state.data,
        v(this, kt)
      ) : r.placeholderData, r.select && Z !== void 0)
        try {
          Z = r.select(Z), U(this, Le, null);
        } catch (_e) {
          U(this, Le, _e);
        }
      Z !== void 0 && (S = "success", k = us(
        c == null ? void 0 : c.data,
        Z,
        r
      ), L = !0);
    }
    v(this, Le) && (O = v(this, Le), k = v(this, At), P = Date.now(), S = "error");
    const B = g.fetchStatus === "fetching", F = S === "pending", K = S === "error", ie = F && B, N = k !== void 0;
    return {
      status: S,
      fetchStatus: g.fetchStatus,
      isPending: F,
      isSuccess: S === "success",
      isError: K,
      isInitialLoading: ie,
      isLoading: ie,
      data: k,
      dataUpdatedAt: g.dataUpdatedAt,
      error: O,
      errorUpdatedAt: P,
      failureCount: g.fetchFailureCount,
      failureReason: g.fetchFailureReason,
      errorUpdateCount: g.errorUpdateCount,
      isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
      isFetchedAfterMount: g.dataUpdateCount > m.dataUpdateCount || g.errorUpdateCount > m.errorUpdateCount,
      isFetching: B,
      isRefetching: B && !F,
      isLoadingError: K && !N,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: L,
      isRefetchError: K && N,
      isStale: Cn(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = v(this, we), n = this.createResult(v(this, W), this.options);
    if (U(this, dt, v(this, W).state), U(this, Pt, this.options), v(this, dt).data !== void 0 && U(this, kt, v(this, W)), wr(n, r))
      return;
    U(this, we, n);
    const o = {}, c = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: u } = this.options, l = typeof u == "function" ? u() : u;
      if (l === "all" || !l && !v(this, xt).size)
        return !0;
      const b = new Set(
        l ?? v(this, xt)
      );
      return this.options.throwOnError && b.add("error"), Object.keys(v(this, we)).some((m) => {
        const y = m;
        return v(this, we)[y] !== r[y] && b.has(y);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && c() && (o.listeners = !0), oe(this, J, Ds).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, J, dn).call(this);
  }
}, Ce = new WeakMap(), W = new WeakMap(), Ht = new WeakMap(), we = new WeakMap(), dt = new WeakMap(), Pt = new WeakMap(), Le = new WeakMap(), Yt = new WeakMap(), At = new WeakMap(), kt = new WeakMap(), ht = new WeakMap(), pt = new WeakMap(), Xe = new WeakMap(), xt = new WeakMap(), J = new WeakSet(), Vt = function(e) {
  oe(this, J, yn).call(this);
  let r = v(this, W).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(xo)), r;
}, cn = function() {
  oe(this, J, hn).call(this);
  const e = vr(
    this.options.staleTime,
    v(this, W)
  );
  if (Rr || v(this, we).isStale || !ss(e))
    return;
  const n = Fo(v(this, we).dataUpdatedAt, e) + 1;
  U(this, ht, setTimeout(() => {
    v(this, we).isStale || this.updateResult();
  }, n));
}, ln = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, W)) : this.options.refetchInterval) ?? !1;
}, fn = function(e) {
  oe(this, J, pn).call(this), U(this, Xe, e), !(Rr || Ne(this.options.enabled, v(this, W)) === !1 || !ss(v(this, Xe)) || v(this, Xe) === 0) && U(this, pt, setInterval(() => {
    (this.options.refetchIntervalInBackground || jo.isFocused()) && oe(this, J, Vt).call(this);
  }, v(this, Xe)));
}, dn = function() {
  oe(this, J, cn).call(this), oe(this, J, fn).call(this, oe(this, J, ln).call(this));
}, hn = function() {
  v(this, ht) && (clearTimeout(v(this, ht)), U(this, ht, void 0));
}, pn = function() {
  v(this, pt) && (clearInterval(v(this, pt)), U(this, pt, void 0));
}, yn = function() {
  const e = v(this, Ce).getQueryCache().build(v(this, Ce), this.options);
  if (e === v(this, W))
    return;
  const r = v(this, W);
  U(this, W, e), U(this, Ht, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, Ds = function(e) {
  Cr.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(v(this, we));
    }), v(this, Ce).getQueryCache().notify({
      query: v(this, W),
      type: "observerResultsUpdated"
    });
  });
}, xs);
function qo(t, e) {
  return Ne(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function cs(t, e) {
  return qo(t, e) || t.state.data !== void 0 && mn(t, e, e.refetchOnMount);
}
function mn(t, e, r) {
  if (Ne(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && Cn(t, e);
  }
  return !1;
}
function ls(t, e, r, n) {
  return (t !== e || Ne(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && Cn(t, r);
}
function Cn(t, e) {
  return Ne(e.enabled, t) !== !1 && t.isStaleByTime(vr(e.staleTime, t));
}
function Vo(t, e) {
  return !wr(t.getCurrentResult(), e);
}
var Ze, et, Te, qe, Ve, br, vn, Fs, Wo = (Fs = class extends Or {
  constructor(e, r) {
    super();
    re(this, Ve);
    re(this, Ze);
    re(this, et);
    re(this, Te);
    re(this, qe);
    U(this, Ze, e), this.setOptions(r), this.bindMethods(), oe(this, Ve, br).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = v(this, Ze).defaultMutationOptions(e), wr(this.options, r) || v(this, Ze).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: v(this, Te),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && os(r.mutationKey) !== os(this.options.mutationKey) ? this.reset() : ((n = v(this, Te)) == null ? void 0 : n.state.status) === "pending" && v(this, Te).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = v(this, Te)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    oe(this, Ve, br).call(this), oe(this, Ve, vn).call(this, e);
  }
  getCurrentResult() {
    return v(this, et);
  }
  reset() {
    var e;
    (e = v(this, Te)) == null || e.removeObserver(this), U(this, Te, void 0), oe(this, Ve, br).call(this), oe(this, Ve, vn).call(this);
  }
  mutate(e, r) {
    var n;
    return U(this, qe, r), (n = v(this, Te)) == null || n.removeObserver(this), U(this, Te, v(this, Ze).getMutationCache().build(v(this, Ze), this.options)), v(this, Te).addObserver(this), v(this, Te).execute(e);
  }
}, Ze = new WeakMap(), et = new WeakMap(), Te = new WeakMap(), qe = new WeakMap(), Ve = new WeakSet(), br = function() {
  var r;
  const e = ((r = v(this, Te)) == null ? void 0 : r.state) ?? Bo();
  U(this, et, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, vn = function(e) {
  Cr.batch(() => {
    var r, n, o, c, u, l, b, m;
    if (v(this, qe) && this.hasListeners()) {
      const y = v(this, et).variables, g = v(this, et).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = v(this, qe)).onSuccess) == null || n.call(r, e.data, y, g), (c = (o = v(this, qe)).onSettled) == null || c.call(o, e.data, null, y, g)) : (e == null ? void 0 : e.type) === "error" && ((l = (u = v(this, qe)).onError) == null || l.call(u, e.error, y, g), (m = (b = v(this, qe)).onSettled) == null || m.call(
        b,
        void 0,
        e.error,
        y,
        g
      ));
    }
    this.listeners.forEach((y) => {
      y(v(this, et));
    });
  });
}, Fs), bn = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs;
function zo() {
  if (fs) return M;
  fs = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), g = Symbol.iterator;
  function L(f) {
    return f === null || typeof f != "object" ? null : (f = g && f[g] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var k = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, P = {};
  function S(f, R, $) {
    this.props = f, this.context = R, this.refs = P, this.updater = $ || k;
  }
  S.prototype.isReactComponent = {}, S.prototype.setState = function(f, R) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, R, "setState");
  }, S.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function B() {
  }
  B.prototype = S.prototype;
  function F(f, R, $) {
    this.props = f, this.context = R, this.refs = P, this.updater = $ || k;
  }
  var K = F.prototype = new B();
  K.constructor = F, O(K, S.prototype), K.isPureReactComponent = !0;
  var ie = Array.isArray, N = Object.prototype.hasOwnProperty, se = { current: null }, he = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(f, R, $) {
    var V, H = {}, ne = null, ee = null;
    if (R != null) for (V in R.ref !== void 0 && (ee = R.ref), R.key !== void 0 && (ne = "" + R.key), R) N.call(R, V) && !he.hasOwnProperty(V) && (H[V] = R[V]);
    var X = arguments.length - 2;
    if (X === 1) H.children = $;
    else if (1 < X) {
      for (var Q = Array(X), pe = 0; pe < X; pe++) Q[pe] = arguments[pe + 2];
      H.children = Q;
    }
    if (f && f.defaultProps) for (V in X = f.defaultProps, X) H[V] === void 0 && (H[V] = X[V]);
    return { $$typeof: t, type: f, key: ne, ref: ee, props: H, _owner: se.current };
  }
  function _e(f, R) {
    return { $$typeof: t, type: f.type, key: R, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Ie(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }
  function jt(f) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function($) {
      return R[$];
    });
  }
  var tt = /\/+/g;
  function Ee(f, R) {
    return typeof f == "object" && f !== null && f.key != null ? jt("" + f.key) : R.toString(36);
  }
  function Se(f, R, $, V, H) {
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
    if (ee) return ee = f, H = H(ee), f = V === "" ? "." + Ee(ee, 0) : V, ie(H) ? ($ = "", f != null && ($ = f.replace(tt, "$&/") + "/"), Se(H, R, $, "", function(pe) {
      return pe;
    })) : H != null && (Ie(H) && (H = _e(H, $ + (!H.key || ee && ee.key === H.key ? "" : ("" + H.key).replace(tt, "$&/") + "/") + f)), R.push(H)), 1;
    if (ee = 0, V = V === "" ? "." : V + ":", ie(f)) for (var X = 0; X < f.length; X++) {
      ne = f[X];
      var Q = V + Ee(ne, X);
      ee += Se(ne, R, $, Q, H);
    }
    else if (Q = L(f), typeof Q == "function") for (f = Q.call(f), X = 0; !(ne = f.next()).done; ) ne = ne.value, Q = V + Ee(ne, X++), ee += Se(ne, R, $, Q, H);
    else if (ne === "object") throw R = String(f), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return ee;
  }
  function ve(f, R, $) {
    if (f == null) return f;
    var V = [], H = 0;
    return Se(f, V, "", "", function(ne) {
      return R.call($, ne, H++);
    }), V;
  }
  function xe(f) {
    if (f._status === -1) {
      var R = f._result;
      R = R(), R.then(function($) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = $);
      }, function($) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = $);
      }), f._status === -1 && (f._status = 0, f._result = R);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var T = { current: null }, De = { transition: null }, rt = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: De, ReactCurrentOwner: se };
  function Ue() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: ve, forEach: function(f, R, $) {
    ve(f, function() {
      R.apply(this, arguments);
    }, $);
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
    if (!Ie(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, M.Component = S, M.Fragment = r, M.Profiler = o, M.PureComponent = F, M.StrictMode = n, M.Suspense = b, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rt, M.act = Ue, M.cloneElement = function(f, R, $) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var V = O({}, f.props), H = f.key, ne = f.ref, ee = f._owner;
    if (R != null) {
      if (R.ref !== void 0 && (ne = R.ref, ee = se.current), R.key !== void 0 && (H = "" + R.key), f.type && f.type.defaultProps) var X = f.type.defaultProps;
      for (Q in R) N.call(R, Q) && !he.hasOwnProperty(Q) && (V[Q] = R[Q] === void 0 && X !== void 0 ? X[Q] : R[Q]);
    }
    var Q = arguments.length - 2;
    if (Q === 1) V.children = $;
    else if (1 < Q) {
      X = Array(Q);
      for (var pe = 0; pe < Q; pe++) X[pe] = arguments[pe + 2];
      V.children = X;
    }
    return { $$typeof: t, type: f.type, key: H, ref: ne, props: V, _owner: ee };
  }, M.createContext = function(f) {
    return f = { $$typeof: u, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: c, _context: f }, f.Consumer = f;
  }, M.createElement = Z, M.createFactory = function(f) {
    var R = Z.bind(null, f);
    return R.type = f, R;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(f) {
    return { $$typeof: l, render: f };
  }, M.isValidElement = Ie, M.lazy = function(f) {
    return { $$typeof: y, _payload: { _status: -1, _result: f }, _init: xe };
  }, M.memo = function(f, R) {
    return { $$typeof: m, type: f, compare: R === void 0 ? null : R };
  }, M.startTransition = function(f) {
    var R = De.transition;
    De.transition = {};
    try {
      f();
    } finally {
      De.transition = R;
    }
  }, M.unstable_act = Ue, M.useCallback = function(f, R) {
    return T.current.useCallback(f, R);
  }, M.useContext = function(f) {
    return T.current.useContext(f);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(f) {
    return T.current.useDeferredValue(f);
  }, M.useEffect = function(f, R) {
    return T.current.useEffect(f, R);
  }, M.useId = function() {
    return T.current.useId();
  }, M.useImperativeHandle = function(f, R, $) {
    return T.current.useImperativeHandle(f, R, $);
  }, M.useInsertionEffect = function(f, R) {
    return T.current.useInsertionEffect(f, R);
  }, M.useLayoutEffect = function(f, R) {
    return T.current.useLayoutEffect(f, R);
  }, M.useMemo = function(f, R) {
    return T.current.useMemo(f, R);
  }, M.useReducer = function(f, R, $) {
    return T.current.useReducer(f, R, $);
  }, M.useRef = function(f) {
    return T.current.useRef(f);
  }, M.useState = function(f) {
    return T.current.useState(f);
  }, M.useSyncExternalStore = function(f, R, $) {
    return T.current.useSyncExternalStore(f, R, $);
  }, M.useTransition = function() {
    return T.current.useTransition();
  }, M.version = "18.3.1", M;
}
var Wt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Wt.exports;
var ds;
function Ho() {
  return ds || (ds = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), S = Symbol.iterator, B = "@@iterator";
      function F(s) {
        if (s === null || typeof s != "object")
          return null;
        var i = S && s[S] || s[B];
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
      function _e(s) {
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
      var Ie = !1, jt = !1, tt = !1, Ee = !1, Se = !1, ve = {
        ReactCurrentDispatcher: K,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: se
      };
      ve.ReactDebugCurrentFrame = he, ve.ReactCurrentActQueue = N;
      function xe(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          De("warn", s, d);
        }
      }
      function T(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          De("error", s, d);
        }
      }
      function De(s, i, d) {
        {
          var p = ve.ReactDebugCurrentFrame, _ = p.getStackAddendum();
          _ !== "" && (i += "%s", d = d.concat([_]));
          var A = d.map(function(C) {
            return String(C);
          });
          A.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, A);
        }
      }
      var rt = {};
      function Ue(s, i) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", _ = p + "." + i;
          if (rt[_])
            return;
          T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, p), rt[_] = !0;
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
          Ue(s, "forceUpdate");
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
          Ue(s, "replaceState");
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
          Ue(s, "setState");
        }
      }, R = Object.assign, $ = {};
      Object.freeze($);
      function V(s, i, d) {
        this.props = s, this.context = i, this.refs = $, this.updater = d || f;
      }
      V.prototype.isReactComponent = {}, V.prototype.setState = function(s, i) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, i, "setState");
      }, V.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var H = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ne = function(s, i) {
          Object.defineProperty(V.prototype, s, {
            get: function() {
              xe("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
            }
          });
        };
        for (var ee in H)
          H.hasOwnProperty(ee) && ne(ee, H[ee]);
      }
      function X() {
      }
      X.prototype = V.prototype;
      function Q(s, i, d) {
        this.props = s, this.context = i, this.refs = $, this.updater = d || f;
      }
      var pe = Q.prototype = new X();
      pe.constructor = Q, R(pe, V.prototype), pe.isPureReactComponent = !0;
      function Fr() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var Gt = Array.isArray;
      function vt(s) {
        return Gt(s);
      }
      function Dr(s) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function bt(s) {
        try {
          return We(s), !1;
        } catch {
          return !0;
        }
      }
      function We(s) {
        return "" + s;
      }
      function nt(s) {
        if (bt(s))
          return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dr(s)), We(s);
      }
      function Xt(s, i, d) {
        var p = s.displayName;
        if (p)
          return p;
        var _ = i.displayName || i.name || "";
        return _ !== "" ? d + "(" + _ + ")" : d;
      }
      function st(s) {
        return s.displayName || "Context";
      }
      function je(s) {
        if (s == null)
          return null;
        if (typeof s.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
          return s.displayName || s.name || null;
        if (typeof s == "string")
          return s;
        switch (s) {
          case c:
            return "Fragment";
          case o:
            return "Portal";
          case l:
            return "Profiler";
          case u:
            return "StrictMode";
          case g:
            return "Suspense";
          case L:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case m:
              var i = s;
              return st(i) + ".Consumer";
            case b:
              var d = s;
              return st(d._context) + ".Provider";
            case y:
              return Xt(s, s.render, "ForwardRef");
            case k:
              var p = s.displayName || null;
              return p !== null ? p : je(s.type) || "Memo";
            case O: {
              var _ = s, A = _._payload, C = _._init;
              try {
                return je(C(A));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ot = Object.prototype.hasOwnProperty, gt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Zt, er, Et;
      Et = {};
      function Lt(s) {
        if (ot.call(s, "ref")) {
          var i = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function ze(s) {
        if (ot.call(s, "key")) {
          var i = Object.getOwnPropertyDescriptor(s, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function jr(s, i) {
        var d = function() {
          Zt || (Zt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: d,
          configurable: !0
        });
      }
      function tr(s, i) {
        var d = function() {
          er || (er = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: d,
          configurable: !0
        });
      }
      function rr(s) {
        if (typeof s.ref == "string" && se.current && s.__self && se.current.stateNode !== s.__self) {
          var i = je(se.current.type);
          Et[i] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, s.ref), Et[i] = !0);
        }
      }
      var it = function(s, i, d, p, _, A, C) {
        var D = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: s,
          key: i,
          ref: d,
          props: C,
          // Record the component responsible for creating this element.
          _owner: A
        };
        return D._store = {}, Object.defineProperty(D._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(D, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.defineProperty(D, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: _
        }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
      };
      function Lr(s, i, d) {
        var p, _ = {}, A = null, C = null, D = null, z = null;
        if (i != null) {
          Lt(i) && (C = i.ref, rr(i)), ze(i) && (nt(i.key), A = "" + i.key), D = i.__self === void 0 ? null : i.__self, z = i.__source === void 0 ? null : i.__source;
          for (p in i)
            ot.call(i, p) && !gt.hasOwnProperty(p) && (_[p] = i[p]);
        }
        var te = arguments.length - 2;
        if (te === 1)
          _.children = d;
        else if (te > 1) {
          for (var ae = Array(te), ue = 0; ue < te; ue++)
            ae[ue] = arguments[ue + 2];
          Object.freeze && Object.freeze(ae), _.children = ae;
        }
        if (s && s.defaultProps) {
          var le = s.defaultProps;
          for (p in le)
            _[p] === void 0 && (_[p] = le[p]);
        }
        if (A || C) {
          var ye = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          A && jr(_, ye), C && tr(_, ye);
        }
        return it(s, A, C, D, z, se.current, _);
      }
      function Nr(s, i) {
        var d = it(s.type, i, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function Ir(s, i, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, _ = R({}, s.props), A = s.key, C = s.ref, D = s._self, z = s._source, te = s._owner;
        if (i != null) {
          Lt(i) && (C = i.ref, te = se.current), ze(i) && (nt(i.key), A = "" + i.key);
          var ae;
          s.type && s.type.defaultProps && (ae = s.type.defaultProps);
          for (p in i)
            ot.call(i, p) && !gt.hasOwnProperty(p) && (i[p] === void 0 && ae !== void 0 ? _[p] = ae[p] : _[p] = i[p]);
        }
        var ue = arguments.length - 2;
        if (ue === 1)
          _.children = d;
        else if (ue > 1) {
          for (var le = Array(ue), ye = 0; ye < ue; ye++)
            le[ye] = arguments[ye + 2];
          _.children = le;
        }
        return it(s.type, A, C, D, z, te, _);
      }
      function He(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var nr = ".", Ur = ":";
      function Mr(s) {
        var i = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(i, function(_) {
          return d[_];
        });
        return "$" + p;
      }
      var Rt = !1, sr = /\/+/g;
      function Me(s) {
        return s.replace(sr, "$&/");
      }
      function at(s, i) {
        return typeof s == "object" && s !== null && s.key != null ? (nt(s.key), Mr("" + s.key)) : i.toString(36);
      }
      function Ye(s, i, d, p, _) {
        var A = typeof s;
        (A === "undefined" || A === "boolean") && (s = null);
        var C = !1;
        if (s === null)
          C = !0;
        else
          switch (A) {
            case "string":
            case "number":
              C = !0;
              break;
            case "object":
              switch (s.$$typeof) {
                case n:
                case o:
                  C = !0;
              }
          }
        if (C) {
          var D = s, z = _(D), te = p === "" ? nr + at(D, 0) : p;
          if (vt(z)) {
            var ae = "";
            te != null && (ae = Me(te) + "/"), Ye(z, i, ae, "", function(ko) {
              return ko;
            });
          } else z != null && (He(z) && (z.key && (!D || D.key !== z.key) && nt(z.key), z = Nr(
            z,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (z.key && (!D || D.key !== z.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Me("" + z.key) + "/"
            ) : "") + te
          )), i.push(z));
          return 1;
        }
        var ue, le, ye = 0, ge = p === "" ? nr : p + Ur;
        if (vt(s))
          for (var mr = 0; mr < s.length; mr++)
            ue = s[mr], le = ge + at(ue, mr), ye += Ye(ue, i, d, le, _);
        else {
          var en = F(s);
          if (typeof en == "function") {
            var es = s;
            en === es.entries && (Rt || xe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Rt = !0);
            for (var Po = en.call(es), ts, Ao = 0; !(ts = Po.next()).done; )
              ue = ts.value, le = ge + at(ue, Ao++), ye += Ye(ue, i, d, le, _);
          } else if (A === "object") {
            var rs = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (rs === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : rs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ye;
      }
      function ut(s, i, d) {
        if (s == null)
          return s;
        var p = [], _ = 0;
        return Ye(s, p, "", "", function(A) {
          return i.call(d, A, _++);
        }), p;
      }
      function Br(s) {
        var i = 0;
        return ut(s, function() {
          i++;
        }), i;
      }
      function or(s, i, d) {
        ut(s, function() {
          i.apply(this, arguments);
        }, d);
      }
      function $r(s) {
        return ut(s, function(i) {
          return i;
        }) || [];
      }
      function ir(s) {
        if (!He(s))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
      function ar(s) {
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
          $$typeof: b,
          _context: i
        };
        var d = !1, p = !1, _ = !1;
        {
          var A = {
            $$typeof: m,
            _context: i
          };
          Object.defineProperties(A, {
            Provider: {
              get: function() {
                return p || (p = !0, T("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), i.Provider;
              },
              set: function(C) {
                i.Provider = C;
              }
            },
            _currentValue: {
              get: function() {
                return i._currentValue;
              },
              set: function(C) {
                i._currentValue = C;
              }
            },
            _currentValue2: {
              get: function() {
                return i._currentValue2;
              },
              set: function(C) {
                i._currentValue2 = C;
              }
            },
            _threadCount: {
              get: function() {
                return i._threadCount;
              },
              set: function(C) {
                i._threadCount = C;
              }
            },
            Consumer: {
              get: function() {
                return d || (d = !0, T("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), i.Consumer;
              }
            },
            displayName: {
              get: function() {
                return i.displayName;
              },
              set: function(C) {
                _ || (xe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", C), _ = !0);
              }
            }
          }), i.Consumer = A;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var ct = -1, Nt = 0, It = 1, ur = 2;
      function qr(s) {
        if (s._status === ct) {
          var i = s._result, d = i();
          if (d.then(function(A) {
            if (s._status === Nt || s._status === ct) {
              var C = s;
              C._status = It, C._result = A;
            }
          }, function(A) {
            if (s._status === Nt || s._status === ct) {
              var C = s;
              C._status = ur, C._result = A;
            }
          }), s._status === ct) {
            var p = s;
            p._status = Nt, p._result = d;
          }
        }
        if (s._status === It) {
          var _ = s._result;
          return _ === void 0 && T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, _), "default" in _ || T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, _), _.default;
        } else
          throw s._result;
      }
      function Vr(s) {
        var i = {
          // We use these fields to store the result.
          _status: ct,
          _result: s
        }, d = {
          $$typeof: O,
          _payload: i,
          _init: qr
        };
        {
          var p, _;
          Object.defineProperties(d, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(A) {
                T("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = A, Object.defineProperty(d, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return _;
              },
              set: function(A) {
                T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), _ = A, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function Wr(s) {
        s != null && s.$$typeof === k ? T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? T("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && T("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
      var cr;
      cr = Symbol.for("react.module.reference");
      function a(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === c || s === l || Se || s === u || s === g || s === L || Ee || s === P || Ie || jt || tt || typeof s == "object" && s !== null && (s.$$typeof === O || s.$$typeof === k || s.$$typeof === b || s.$$typeof === m || s.$$typeof === y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === cr || s.getModuleId !== void 0));
      }
      function E(s, i) {
        a(s) || T("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
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
            set: function(_) {
              p = _, !s.name && !s.displayName && (s.displayName = _);
            }
          });
        }
        return d;
      }
      function w() {
        var s = K.current;
        return s === null && T(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
      }
      function x(s) {
        var i = w();
        if (s._context !== void 0) {
          var d = s._context;
          d.Consumer === s ? T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === s && T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return i.useContext(s);
      }
      function Y(s) {
        var i = w();
        return i.useState(s);
      }
      function G(s, i, d) {
        var p = w();
        return p.useReducer(s, i, d);
      }
      function q(s) {
        var i = w();
        return i.useRef(s);
      }
      function I(s, i) {
        var d = w();
        return d.useEffect(s, i);
      }
      function be(s, i) {
        var d = w();
        return d.useInsertionEffect(s, i);
      }
      function ce(s, i) {
        var d = w();
        return d.useLayoutEffect(s, i);
      }
      function fe(s, i) {
        var d = w();
        return d.useCallback(s, i);
      }
      function Oe(s, i) {
        var d = w();
        return d.useMemo(s, i);
      }
      function Ke(s, i, d) {
        var p = w();
        return p.useImperativeHandle(s, i, d);
      }
      function Be(s, i) {
        {
          var d = w();
          return d.useDebugValue(s, i);
        }
      }
      function Re() {
        var s = w();
        return s.useTransition();
      }
      function Ut(s) {
        var i = w();
        return i.useDeferredValue(s);
      }
      function zr() {
        var s = w();
        return s.useId();
      }
      function Hr(s, i, d) {
        var p = w();
        return p.useSyncExternalStore(s, i, d);
      }
      var Mt = 0, Dn, jn, Ln, Nn, In, Un, Mn;
      function Bn() {
      }
      Bn.__reactDisabledLog = !0;
      function co() {
        {
          if (Mt === 0) {
            Dn = console.log, jn = console.info, Ln = console.warn, Nn = console.error, In = console.group, Un = console.groupCollapsed, Mn = console.groupEnd;
            var s = {
              configurable: !0,
              enumerable: !0,
              value: Bn,
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
          Mt++;
        }
      }
      function lo() {
        {
          if (Mt--, Mt === 0) {
            var s = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: R({}, s, {
                value: Dn
              }),
              info: R({}, s, {
                value: jn
              }),
              warn: R({}, s, {
                value: Ln
              }),
              error: R({}, s, {
                value: Nn
              }),
              group: R({}, s, {
                value: In
              }),
              groupCollapsed: R({}, s, {
                value: Un
              }),
              groupEnd: R({}, s, {
                value: Mn
              })
            });
          }
          Mt < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Yr = ve.ReactCurrentDispatcher, Kr;
      function lr(s, i, d) {
        {
          if (Kr === void 0)
            try {
              throw Error();
            } catch (_) {
              var p = _.stack.trim().match(/\n( *(at )?)/);
              Kr = p && p[1] || "";
            }
          return `
` + Kr + s;
        }
      }
      var Jr = !1, fr;
      {
        var fo = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new fo();
      }
      function $n(s, i) {
        if (!s || Jr)
          return "";
        {
          var d = fr.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        Jr = !0;
        var _ = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var A;
        A = Yr.current, Yr.current = null, co();
        try {
          if (i) {
            var C = function() {
              throw Error();
            };
            if (Object.defineProperty(C.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(C, []);
              } catch (ge) {
                p = ge;
              }
              Reflect.construct(s, [], C);
            } else {
              try {
                C.call();
              } catch (ge) {
                p = ge;
              }
              s.call(C.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ge) {
              p = ge;
            }
            s();
          }
        } catch (ge) {
          if (ge && p && typeof ge.stack == "string") {
            for (var D = ge.stack.split(`
`), z = p.stack.split(`
`), te = D.length - 1, ae = z.length - 1; te >= 1 && ae >= 0 && D[te] !== z[ae]; )
              ae--;
            for (; te >= 1 && ae >= 0; te--, ae--)
              if (D[te] !== z[ae]) {
                if (te !== 1 || ae !== 1)
                  do
                    if (te--, ae--, ae < 0 || D[te] !== z[ae]) {
                      var ue = `
` + D[te].replace(" at new ", " at ");
                      return s.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", s.displayName)), typeof s == "function" && fr.set(s, ue), ue;
                    }
                  while (te >= 1 && ae >= 0);
                break;
              }
          }
        } finally {
          Jr = !1, Yr.current = A, lo(), Error.prepareStackTrace = _;
        }
        var le = s ? s.displayName || s.name : "", ye = le ? lr(le) : "";
        return typeof s == "function" && fr.set(s, ye), ye;
      }
      function ho(s, i, d) {
        return $n(s, !1);
      }
      function po(s) {
        var i = s.prototype;
        return !!(i && i.isReactComponent);
      }
      function dr(s, i, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return $n(s, po(s));
        if (typeof s == "string")
          return lr(s);
        switch (s) {
          case g:
            return lr("Suspense");
          case L:
            return lr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case y:
              return ho(s.render);
            case k:
              return dr(s.type, i, d);
            case O: {
              var p = s, _ = p._payload, A = p._init;
              try {
                return dr(A(_), i, d);
              } catch {
              }
            }
          }
        return "";
      }
      var qn = {}, Vn = ve.ReactDebugCurrentFrame;
      function hr(s) {
        if (s) {
          var i = s._owner, d = dr(s.type, s._source, i ? i.type : null);
          Vn.setExtraStackFrame(d);
        } else
          Vn.setExtraStackFrame(null);
      }
      function yo(s, i, d, p, _) {
        {
          var A = Function.call.bind(ot);
          for (var C in s)
            if (A(s, C)) {
              var D = void 0;
              try {
                if (typeof s[C] != "function") {
                  var z = Error((p || "React class") + ": " + d + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw z.name = "Invariant Violation", z;
                }
                D = s[C](i, C, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (te) {
                D = te;
              }
              D && !(D instanceof Error) && (hr(_), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, C, typeof D), hr(null)), D instanceof Error && !(D.message in qn) && (qn[D.message] = !0, hr(_), T("Failed %s type: %s", d, D.message), hr(null));
            }
        }
      }
      function wt(s) {
        if (s) {
          var i = s._owner, d = dr(s.type, s._source, i ? i.type : null);
          _e(d);
        } else
          _e(null);
      }
      var Qr;
      Qr = !1;
      function Wn() {
        if (se.current) {
          var s = je(se.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function mo(s) {
        if (s !== void 0) {
          var i = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + i + ":" + d + ".";
        }
        return "";
      }
      function vo(s) {
        return s != null ? mo(s.__source) : "";
      }
      var zn = {};
      function bo(s) {
        var i = Wn();
        if (!i) {
          var d = typeof s == "string" ? s : s.displayName || s.name;
          d && (i = `

Check the top-level render call using <` + d + ">.");
        }
        return i;
      }
      function Hn(s, i) {
        if (!(!s._store || s._store.validated || s.key != null)) {
          s._store.validated = !0;
          var d = bo(i);
          if (!zn[d]) {
            zn[d] = !0;
            var p = "";
            s && s._owner && s._owner !== se.current && (p = " It was passed a child from " + je(s._owner.type) + "."), wt(s), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), wt(null);
          }
        }
      }
      function Yn(s, i) {
        if (typeof s == "object") {
          if (vt(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              He(p) && Hn(p, i);
            }
          else if (He(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var _ = F(s);
            if (typeof _ == "function" && _ !== s.entries)
              for (var A = _.call(s), C; !(C = A.next()).done; )
                He(C.value) && Hn(C.value, i);
          }
        }
      }
      function Kn(s) {
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
            var p = je(i);
            yo(d, s.props, "prop", p, s);
          } else if (i.PropTypes !== void 0 && !Qr) {
            Qr = !0;
            var _ = je(i);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function go(s) {
        {
          for (var i = Object.keys(s.props), d = 0; d < i.length; d++) {
            var p = i[d];
            if (p !== "children" && p !== "key") {
              wt(s), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), wt(null);
              break;
            }
          }
          s.ref !== null && (wt(s), T("Invalid attribute `ref` supplied to `React.Fragment`."), wt(null));
        }
      }
      function Jn(s, i, d) {
        var p = a(s);
        if (!p) {
          var _ = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = vo(i);
          A ? _ += A : _ += Wn();
          var C;
          s === null ? C = "null" : vt(s) ? C = "array" : s !== void 0 && s.$$typeof === n ? (C = "<" + (je(s.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : C = typeof s, T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, _);
        }
        var D = Lr.apply(this, arguments);
        if (D == null)
          return D;
        if (p)
          for (var z = 2; z < arguments.length; z++)
            Yn(arguments[z], s);
        return s === c ? go(D) : Kn(D), D;
      }
      var Qn = !1;
      function Eo(s) {
        var i = Jn.bind(null, s);
        return i.type = s, Qn || (Qn = !0, xe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return xe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), i;
      }
      function Ro(s, i, d) {
        for (var p = Ir.apply(this, arguments), _ = 2; _ < arguments.length; _++)
          Yn(arguments[_], p.type);
        return Kn(p), p;
      }
      function wo(s, i) {
        var d = ie.transition;
        ie.transition = {};
        var p = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          s();
        } finally {
          if (ie.transition = d, d === null && p._updatedFibers) {
            var _ = p._updatedFibers.size;
            _ > 10 && xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var Gn = !1, pr = null;
      function _o(s) {
        if (pr === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), d = t && t[i];
            pr = d.call(t, "timers").setImmediate;
          } catch {
            pr = function(_) {
              Gn === !1 && (Gn = !0, typeof MessageChannel > "u" && T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var A = new MessageChannel();
              A.port1.onmessage = _, A.port2.postMessage(void 0);
            };
          }
        return pr(s);
      }
      var _t = 0, Xn = !1;
      function Zn(s) {
        {
          var i = _t;
          _t++, N.current === null && (N.current = []);
          var d = N.isBatchingLegacy, p;
          try {
            if (N.isBatchingLegacy = !0, p = s(), !d && N.didScheduleLegacyUpdate) {
              var _ = N.current;
              _ !== null && (N.didScheduleLegacyUpdate = !1, Zr(_));
            }
          } catch (le) {
            throw yr(i), le;
          } finally {
            N.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var A = p, C = !1, D = {
              then: function(le, ye) {
                C = !0, A.then(function(ge) {
                  yr(i), _t === 0 ? Gr(ge, le, ye) : le(ge);
                }, function(ge) {
                  yr(i), ye(ge);
                });
              }
            };
            return !Xn && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              C || (Xn = !0, T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), D;
          } else {
            var z = p;
            if (yr(i), _t === 0) {
              var te = N.current;
              te !== null && (Zr(te), N.current = null);
              var ae = {
                then: function(le, ye) {
                  N.current === null ? (N.current = [], Gr(z, le, ye)) : le(z);
                }
              };
              return ae;
            } else {
              var ue = {
                then: function(le, ye) {
                  le(z);
                }
              };
              return ue;
            }
          }
        }
      }
      function yr(s) {
        s !== _t - 1 && T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), _t = s;
      }
      function Gr(s, i, d) {
        {
          var p = N.current;
          if (p !== null)
            try {
              Zr(p), _o(function() {
                p.length === 0 ? (N.current = null, i(s)) : Gr(s, i, d);
              });
            } catch (_) {
              d(_);
            }
          else
            i(s);
        }
      }
      var Xr = !1;
      function Zr(s) {
        if (!Xr) {
          Xr = !0;
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
            Xr = !1;
          }
        }
      }
      var So = Jn, Oo = Ro, Co = Eo, To = {
        map: ut,
        forEach: or,
        count: Br,
        toArray: $r,
        only: ir
      };
      e.Children = To, e.Component = V, e.Fragment = c, e.Profiler = l, e.PureComponent = Q, e.StrictMode = u, e.Suspense = g, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, e.act = Zn, e.cloneElement = Oo, e.createContext = ar, e.createElement = So, e.createFactory = Co, e.createRef = Fr, e.forwardRef = Wr, e.isValidElement = He, e.lazy = Vr, e.memo = E, e.startTransition = wo, e.unstable_act = Zn, e.useCallback = fe, e.useContext = x, e.useDebugValue = Be, e.useDeferredValue = Ut, e.useEffect = I, e.useId = zr, e.useImperativeHandle = Ke, e.useInsertionEffect = be, e.useLayoutEffect = ce, e.useMemo = Oe, e.useReducer = G, e.useRef = q, e.useState = Y, e.useSyncExternalStore = Hr, e.useTransition = Re, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Wt, Wt.exports)), Wt.exports;
}
process.env.NODE_ENV === "production" ? bn.exports = zo() : bn.exports = Ho();
var me = bn.exports, Bt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hs;
function Yo() {
  if (hs) return Bt;
  hs = 1;
  var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, b, m) {
    var y, g = {}, L = null, k = null;
    m !== void 0 && (L = "" + m), b.key !== void 0 && (L = "" + b.key), b.ref !== void 0 && (k = b.ref);
    for (y in b) n.call(b, y) && !c.hasOwnProperty(y) && (g[y] = b[y]);
    if (l && l.defaultProps) for (y in b = l.defaultProps, b) g[y] === void 0 && (g[y] = b[y]);
    return { $$typeof: e, type: l, key: L, ref: k, props: g, _owner: o.current };
  }
  return Bt.Fragment = r, Bt.jsx = u, Bt.jsxs = u, Bt;
}
var $t = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function Ko() {
  return ps || (ps = 1, process.env.NODE_ENV !== "production" && function() {
    var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), O = Symbol.iterator, P = "@@iterator";
    function S(a) {
      if (a === null || typeof a != "object")
        return null;
      var E = O && a[O] || a[P];
      return typeof E == "function" ? E : null;
    }
    var B = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(a) {
      {
        for (var E = arguments.length, w = new Array(E > 1 ? E - 1 : 0), x = 1; x < E; x++)
          w[x - 1] = arguments[x];
        K("error", a, w);
      }
    }
    function K(a, E, w) {
      {
        var x = B.ReactDebugCurrentFrame, Y = x.getStackAddendum();
        Y !== "" && (E += "%s", w = w.concat([Y]));
        var G = w.map(function(q) {
          return String(q);
        });
        G.unshift("Warning: " + E), Function.prototype.apply.call(console[a], console, G);
      }
    }
    var ie = !1, N = !1, se = !1, he = !1, Z = !1, _e;
    _e = Symbol.for("react.module.reference");
    function Ie(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === c || Z || a === o || a === m || a === y || he || a === k || ie || N || se || typeof a == "object" && a !== null && (a.$$typeof === L || a.$$typeof === g || a.$$typeof === u || a.$$typeof === l || a.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === _e || a.getModuleId !== void 0));
    }
    function jt(a, E, w) {
      var x = a.displayName;
      if (x)
        return x;
      var Y = E.displayName || E.name || "";
      return Y !== "" ? w + "(" + Y + ")" : w;
    }
    function tt(a) {
      return a.displayName || "Context";
    }
    function Ee(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case m:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            var E = a;
            return tt(E) + ".Consumer";
          case u:
            var w = a;
            return tt(w._context) + ".Provider";
          case b:
            return jt(a, a.render, "ForwardRef");
          case g:
            var x = a.displayName || null;
            return x !== null ? x : Ee(a.type) || "Memo";
          case L: {
            var Y = a, G = Y._payload, q = Y._init;
            try {
              return Ee(q(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Se = Object.assign, ve = 0, xe, T, De, rt, Ue, f, R;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function V() {
      {
        if (ve === 0) {
          xe = console.log, T = console.info, De = console.warn, rt = console.error, Ue = console.group, f = console.groupCollapsed, R = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: $,
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
        ve++;
      }
    }
    function H() {
      {
        if (ve--, ve === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Se({}, a, {
              value: xe
            }),
            info: Se({}, a, {
              value: T
            }),
            warn: Se({}, a, {
              value: De
            }),
            error: Se({}, a, {
              value: rt
            }),
            group: Se({}, a, {
              value: Ue
            }),
            groupCollapsed: Se({}, a, {
              value: f
            }),
            groupEnd: Se({}, a, {
              value: R
            })
          });
        }
        ve < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = B.ReactCurrentDispatcher, ee;
    function X(a, E, w) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (Y) {
            var x = Y.stack.trim().match(/\n( *(at )?)/);
            ee = x && x[1] || "";
          }
        return `
` + ee + a;
      }
    }
    var Q = !1, pe;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new Fr();
    }
    function Gt(a, E) {
      if (!a || Q)
        return "";
      {
        var w = pe.get(a);
        if (w !== void 0)
          return w;
      }
      var x;
      Q = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = ne.current, ne.current = null, V();
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
            } catch (Re) {
              x = Re;
            }
            Reflect.construct(a, [], q);
          } else {
            try {
              q.call();
            } catch (Re) {
              x = Re;
            }
            a.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            x = Re;
          }
          a();
        }
      } catch (Re) {
        if (Re && x && typeof Re.stack == "string") {
          for (var I = Re.stack.split(`
`), be = x.stack.split(`
`), ce = I.length - 1, fe = be.length - 1; ce >= 1 && fe >= 0 && I[ce] !== be[fe]; )
            fe--;
          for (; ce >= 1 && fe >= 0; ce--, fe--)
            if (I[ce] !== be[fe]) {
              if (ce !== 1 || fe !== 1)
                do
                  if (ce--, fe--, fe < 0 || I[ce] !== be[fe]) {
                    var Oe = `
` + I[ce].replace(" at new ", " at ");
                    return a.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", a.displayName)), typeof a == "function" && pe.set(a, Oe), Oe;
                  }
                while (ce >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        Q = !1, ne.current = G, H(), Error.prepareStackTrace = Y;
      }
      var Ke = a ? a.displayName || a.name : "", Be = Ke ? X(Ke) : "";
      return typeof a == "function" && pe.set(a, Be), Be;
    }
    function vt(a, E, w) {
      return Gt(a, !1);
    }
    function Dr(a) {
      var E = a.prototype;
      return !!(E && E.isReactComponent);
    }
    function bt(a, E, w) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Gt(a, Dr(a));
      if (typeof a == "string")
        return X(a);
      switch (a) {
        case m:
          return X("Suspense");
        case y:
          return X("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case b:
            return vt(a.render);
          case g:
            return bt(a.type, E, w);
          case L: {
            var x = a, Y = x._payload, G = x._init;
            try {
              return bt(G(Y), E, w);
            } catch {
            }
          }
        }
      return "";
    }
    var We = Object.prototype.hasOwnProperty, nt = {}, Xt = B.ReactDebugCurrentFrame;
    function st(a) {
      if (a) {
        var E = a._owner, w = bt(a.type, a._source, E ? E.type : null);
        Xt.setExtraStackFrame(w);
      } else
        Xt.setExtraStackFrame(null);
    }
    function je(a, E, w, x, Y) {
      {
        var G = Function.call.bind(We);
        for (var q in a)
          if (G(a, q)) {
            var I = void 0;
            try {
              if (typeof a[q] != "function") {
                var be = Error((x || "React class") + ": " + w + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              I = a[q](E, q, x, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              I = ce;
            }
            I && !(I instanceof Error) && (st(Y), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", w, q, typeof I), st(null)), I instanceof Error && !(I.message in nt) && (nt[I.message] = !0, st(Y), F("Failed %s type: %s", w, I.message), st(null));
          }
      }
    }
    var ot = Array.isArray;
    function gt(a) {
      return ot(a);
    }
    function Zt(a) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, w = E && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return w;
      }
    }
    function er(a) {
      try {
        return Et(a), !1;
      } catch {
        return !0;
      }
    }
    function Et(a) {
      return "" + a;
    }
    function Lt(a) {
      if (er(a))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zt(a)), Et(a);
    }
    var ze = B.ReactCurrentOwner, jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, rr, it;
    it = {};
    function Lr(a) {
      if (We.call(a, "ref")) {
        var E = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Nr(a) {
      if (We.call(a, "key")) {
        var E = Object.getOwnPropertyDescriptor(a, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Ir(a, E) {
      if (typeof a.ref == "string" && ze.current && E && ze.current.stateNode !== E) {
        var w = Ee(ze.current.type);
        it[w] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ee(ze.current.type), a.ref), it[w] = !0);
      }
    }
    function He(a, E) {
      {
        var w = function() {
          tr || (tr = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        w.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function nr(a, E) {
      {
        var w = function() {
          rr || (rr = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        w.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Ur = function(a, E, w, x, Y, G, q) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: a,
        key: E,
        ref: w,
        props: q,
        // Record the component responsible for creating this element.
        _owner: G
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
    function Mr(a, E, w, x, Y) {
      {
        var G, q = {}, I = null, be = null;
        w !== void 0 && (Lt(w), I = "" + w), Nr(E) && (Lt(E.key), I = "" + E.key), Lr(E) && (be = E.ref, Ir(E, Y));
        for (G in E)
          We.call(E, G) && !jr.hasOwnProperty(G) && (q[G] = E[G]);
        if (a && a.defaultProps) {
          var ce = a.defaultProps;
          for (G in ce)
            q[G] === void 0 && (q[G] = ce[G]);
        }
        if (I || be) {
          var fe = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          I && He(q, fe), be && nr(q, fe);
        }
        return Ur(a, I, be, Y, x, ze.current, q);
      }
    }
    var Rt = B.ReactCurrentOwner, sr = B.ReactDebugCurrentFrame;
    function Me(a) {
      if (a) {
        var E = a._owner, w = bt(a.type, a._source, E ? E.type : null);
        sr.setExtraStackFrame(w);
      } else
        sr.setExtraStackFrame(null);
    }
    var at;
    at = !1;
    function Ye(a) {
      return typeof a == "object" && a !== null && a.$$typeof === e;
    }
    function ut() {
      {
        if (Rt.current) {
          var a = Ee(Rt.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Br(a) {
      return "";
    }
    var or = {};
    function $r(a) {
      {
        var E = ut();
        if (!E) {
          var w = typeof a == "string" ? a : a.displayName || a.name;
          w && (E = `

Check the top-level render call using <` + w + ">.");
        }
        return E;
      }
    }
    function ir(a, E) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var w = $r(E);
        if (or[w])
          return;
        or[w] = !0;
        var x = "";
        a && a._owner && a._owner !== Rt.current && (x = " It was passed a child from " + Ee(a._owner.type) + "."), Me(a), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, x), Me(null);
      }
    }
    function ar(a, E) {
      {
        if (typeof a != "object")
          return;
        if (gt(a))
          for (var w = 0; w < a.length; w++) {
            var x = a[w];
            Ye(x) && ir(x, E);
          }
        else if (Ye(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var Y = S(a);
          if (typeof Y == "function" && Y !== a.entries)
            for (var G = Y.call(a), q; !(q = G.next()).done; )
              Ye(q.value) && ir(q.value, E);
        }
      }
    }
    function ct(a) {
      {
        var E = a.type;
        if (E == null || typeof E == "string")
          return;
        var w;
        if (typeof E == "function")
          w = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === g))
          w = E.propTypes;
        else
          return;
        if (w) {
          var x = Ee(E);
          je(w, a.props, "prop", x, a);
        } else if (E.PropTypes !== void 0 && !at) {
          at = !0;
          var Y = Ee(E);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nt(a) {
      {
        for (var E = Object.keys(a.props), w = 0; w < E.length; w++) {
          var x = E[w];
          if (x !== "children" && x !== "key") {
            Me(a), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), Me(null);
            break;
          }
        }
        a.ref !== null && (Me(a), F("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var It = {};
    function ur(a, E, w, x, Y, G) {
      {
        var q = Ie(a);
        if (!q) {
          var I = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = Br();
          be ? I += be : I += ut();
          var ce;
          a === null ? ce = "null" : gt(a) ? ce = "array" : a !== void 0 && a.$$typeof === e ? (ce = "<" + (Ee(a.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof a, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, I);
        }
        var fe = Mr(a, E, w, Y, G);
        if (fe == null)
          return fe;
        if (q) {
          var Oe = E.children;
          if (Oe !== void 0)
            if (x)
              if (gt(Oe)) {
                for (var Ke = 0; Ke < Oe.length; Ke++)
                  ar(Oe[Ke], a);
                Object.freeze && Object.freeze(Oe);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ar(Oe, a);
        }
        if (We.call(E, "key")) {
          var Be = Ee(a), Re = Object.keys(E).filter(function(Hr) {
            return Hr !== "key";
          }), Ut = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!It[Be + Ut]) {
            var zr = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ut, Be, zr, Be), It[Be + Ut] = !0;
          }
        }
        return a === n ? Nt(fe) : ct(fe), fe;
      }
    }
    function qr(a, E, w) {
      return ur(a, E, w, !0);
    }
    function Vr(a, E, w) {
      return ur(a, E, w, !1);
    }
    var Wr = Vr, cr = qr;
    $t.Fragment = n, $t.jsx = Wr, $t.jsxs = cr;
  }()), $t;
}
process.env.NODE_ENV === "production" ? Yo() : Ko();
var Jo = me.createContext(
  void 0
), js = (t) => {
  const e = me.useContext(Jo);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Ls = me.createContext(!1), Qo = () => me.useContext(Ls);
Ls.Provider;
function Go() {
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
var Xo = me.createContext(Go()), Zo = () => me.useContext(Xo);
function Ns(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function ei() {
}
var ti = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, ri = (t) => {
  me.useEffect(() => {
    t.clearReset();
  }, [t]);
}, ni = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && Ns(r, [t.error, n]), si = (t) => {
  t.suspense && (typeof t.staleTime != "number" && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, oi = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, ii = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function ai(t, e, r) {
  var m, y, g, L;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = js(), o = Qo(), c = Zo(), u = n.defaultQueryOptions(t);
  (y = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || y.call(
    m,
    u
  ), u._optimisticResults = o ? "isRestoring" : "optimistic", si(u), ti(u, c), ri(c);
  const [l] = me.useState(
    () => new e(
      n,
      u
    )
  ), b = l.getOptimisticResult(u);
  if (me.useSyncExternalStore(
    me.useCallback(
      (k) => {
        const O = o ? () => {
        } : l.subscribe(Cr.batchCalls(k));
        return l.updateResult(), O;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), me.useEffect(() => {
    l.setOptions(u, { listeners: !1 });
  }, [u, l]), oi(u, b))
    throw ii(u, l, c);
  if (ni({
    result: b,
    errorResetBoundary: c,
    throwOnError: u.throwOnError,
    query: n.getQueryCache().get(u.queryHash)
  }))
    throw b.error;
  return (L = (g = n.getDefaultOptions().queries) == null ? void 0 : g._experimental_afterQuery) == null || L.call(
    g,
    u,
    b
  ), u.notifyOnChangeProps ? b : l.trackResult(b);
}
function Is(t, e) {
  return ai(t, $o);
}
function Tn(t, e) {
  const r = js(), [n] = me.useState(
    () => new Wo(
      r,
      t
    )
  );
  me.useEffect(() => {
    n.setOptions(t);
  }, [n, t]);
  const o = me.useSyncExternalStore(
    me.useCallback(
      (u) => n.subscribe(Cr.batchCalls(u)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), c = me.useCallback(
    (u, l) => {
      n.mutate(u, l).catch(ei);
    },
    [n]
  );
  if (o.error && Ns(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: c, mutateAsync: o.mutate };
}
function Us(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: ui } = Object.prototype, { getPrototypeOf: Pn } = Object, Tr = /* @__PURE__ */ ((t) => (e) => {
  const r = ui.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Fe = (t) => (t = t.toLowerCase(), (e) => Tr(e) === t), Pr = (t) => (e) => typeof e === t, { isArray: Ft } = Array, zt = Pr("undefined");
function ci(t) {
  return t !== null && !zt(t) && t.constructor !== null && !zt(t.constructor) && ke(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ms = Fe("ArrayBuffer");
function li(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ms(t.buffer), e;
}
const fi = Pr("string"), ke = Pr("function"), Bs = Pr("number"), Ar = (t) => t !== null && typeof t == "object", di = (t) => t === !0 || t === !1, gr = (t) => {
  if (Tr(t) !== "object")
    return !1;
  const e = Pn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, hi = Fe("Date"), pi = Fe("File"), yi = Fe("Blob"), mi = Fe("FileList"), vi = (t) => Ar(t) && ke(t.pipe), bi = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ke(t.append) && ((e = Tr(t)) === "formdata" || // detect form-data instance
  e === "object" && ke(t.toString) && t.toString() === "[object FormData]"));
}, gi = Fe("URLSearchParams"), [Ei, Ri, wi, _i] = ["ReadableStream", "Request", "Response", "Headers"].map(Fe), Si = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Kt(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), Ft(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const c = r ? Object.getOwnPropertyNames(t) : Object.keys(t), u = c.length;
    let l;
    for (n = 0; n < u; n++)
      l = c[n], e.call(null, t[l], l, t);
  }
}
function $s(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const lt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, qs = (t) => !zt(t) && t !== lt;
function gn() {
  const { caseless: t } = qs(this) && this || {}, e = {}, r = (n, o) => {
    const c = t && $s(e, o) || o;
    gr(e[c]) && gr(n) ? e[c] = gn(e[c], n) : gr(n) ? e[c] = gn({}, n) : Ft(n) ? e[c] = n.slice() : e[c] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Kt(arguments[n], r);
  return e;
}
const Oi = (t, e, r, { allOwnKeys: n } = {}) => (Kt(e, (o, c) => {
  r && ke(o) ? t[c] = Us(o, r) : t[c] = o;
}, { allOwnKeys: n }), t), Ci = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Ti = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Pi = (t, e, r, n) => {
  let o, c, u;
  const l = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), c = o.length; c-- > 0; )
      u = o[c], (!n || n(u, t, e)) && !l[u] && (e[u] = t[u], l[u] = !0);
    t = r !== !1 && Pn(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Ai = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, ki = (t) => {
  if (!t) return null;
  if (Ft(t)) return t;
  let e = t.length;
  if (!Bs(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, xi = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Pn(Uint8Array)), Fi = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const c = o.value;
    e.call(t, c[0], c[1]);
  }
}, Di = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, ji = Fe("HTMLFormElement"), Li = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), ys = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Ni = Fe("RegExp"), Vs = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Kt(r, (o, c) => {
    let u;
    (u = e(o, c, t)) !== !1 && (n[c] = u || o);
  }), Object.defineProperties(t, n);
}, Ii = (t) => {
  Vs(t, (e, r) => {
    if (ke(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (ke(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ui = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((c) => {
      r[c] = !0;
    });
  };
  return Ft(t) ? n(t) : n(String(t).split(e)), r;
}, Mi = () => {
}, Bi = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, rn = "abcdefghijklmnopqrstuvwxyz", ms = "0123456789", Ws = {
  DIGIT: ms,
  ALPHA: rn,
  ALPHA_DIGIT: rn + rn.toUpperCase() + ms
}, $i = (t = 16, e = Ws.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function qi(t) {
  return !!(t && ke(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Vi = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (Ar(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const c = Ft(n) ? [] : {};
        return Kt(n, (u, l) => {
          const b = r(u, o + 1);
          !zt(b) && (c[l] = b);
        }), e[o] = void 0, c;
      }
    }
    return n;
  };
  return r(t, 0);
}, Wi = Fe("AsyncFunction"), zi = (t) => t && (Ar(t) || ke(t)) && ke(t.then) && ke(t.catch), zs = ((t, e) => t ? setImmediate : e ? ((r, n) => (lt.addEventListener("message", ({ source: o, data: c }) => {
  o === lt && c === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), lt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ke(lt.postMessage)
), Hi = typeof queueMicrotask < "u" ? queueMicrotask.bind(lt) : typeof process < "u" && process.nextTick || zs, h = {
  isArray: Ft,
  isArrayBuffer: Ms,
  isBuffer: ci,
  isFormData: bi,
  isArrayBufferView: li,
  isString: fi,
  isNumber: Bs,
  isBoolean: di,
  isObject: Ar,
  isPlainObject: gr,
  isReadableStream: Ei,
  isRequest: Ri,
  isResponse: wi,
  isHeaders: _i,
  isUndefined: zt,
  isDate: hi,
  isFile: pi,
  isBlob: yi,
  isRegExp: Ni,
  isFunction: ke,
  isStream: vi,
  isURLSearchParams: gi,
  isTypedArray: xi,
  isFileList: mi,
  forEach: Kt,
  merge: gn,
  extend: Oi,
  trim: Si,
  stripBOM: Ci,
  inherits: Ti,
  toFlatObject: Pi,
  kindOf: Tr,
  kindOfTest: Fe,
  endsWith: Ai,
  toArray: ki,
  forEachEntry: Fi,
  matchAll: Di,
  isHTMLForm: ji,
  hasOwnProperty: ys,
  hasOwnProp: ys,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Vs,
  freezeMethods: Ii,
  toObjectSet: Ui,
  toCamelCase: Li,
  noop: Mi,
  toFiniteNumber: Bi,
  findKey: $s,
  global: lt,
  isContextDefined: qs,
  ALPHABET: Ws,
  generateString: $i,
  isSpecCompliantForm: qi,
  toJSONObject: Vi,
  isAsyncFn: Wi,
  isThenable: zi,
  setImmediate: zs,
  asap: Hi
};
function j(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
h.inherits(j, Error, {
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
const Hs = j.prototype, Ys = {};
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
  Ys[t] = { value: t };
});
Object.defineProperties(j, Ys);
Object.defineProperty(Hs, "isAxiosError", { value: !0 });
j.from = (t, e, r, n, o, c) => {
  const u = Object.create(Hs);
  return h.toFlatObject(t, u, function(b) {
    return b !== Error.prototype;
  }, (l) => l !== "isAxiosError"), j.call(u, t.message, e, r, n, o), u.cause = t, u.name = t.name, c && Object.assign(u, c), u;
};
const Yi = null;
function En(t) {
  return h.isPlainObject(t) || h.isArray(t);
}
function Ks(t) {
  return h.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function vs(t, e, r) {
  return t ? t.concat(e).map(function(o, c) {
    return o = Ks(o), !r && c ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function Ki(t) {
  return h.isArray(t) && !t.some(En);
}
const Ji = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function kr(t, e, r) {
  if (!h.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, S) {
    return !h.isUndefined(S[P]);
  });
  const n = r.metaTokens, o = r.visitor || y, c = r.dots, u = r.indexes, b = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(e);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function m(O) {
    if (O === null) return "";
    if (h.isDate(O))
      return O.toISOString();
    if (!b && h.isBlob(O))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(O) || h.isTypedArray(O) ? b && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function y(O, P, S) {
    let B = O;
    if (O && !S && typeof O == "object") {
      if (h.endsWith(P, "{}"))
        P = n ? P : P.slice(0, -2), O = JSON.stringify(O);
      else if (h.isArray(O) && Ki(O) || (h.isFileList(O) || h.endsWith(P, "[]")) && (B = h.toArray(O)))
        return P = Ks(P), B.forEach(function(K, ie) {
          !(h.isUndefined(K) || K === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? vs([P], ie, c) : u === null ? P : P + "[]",
            m(K)
          );
        }), !1;
    }
    return En(O) ? !0 : (e.append(vs(S, P, c), m(O)), !1);
  }
  const g = [], L = Object.assign(Ji, {
    defaultVisitor: y,
    convertValue: m,
    isVisitable: En
  });
  function k(O, P) {
    if (!h.isUndefined(O)) {
      if (g.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + P.join("."));
      g.push(O), h.forEach(O, function(B, F) {
        (!(h.isUndefined(B) || B === null) && o.call(
          e,
          B,
          h.isString(F) ? F.trim() : F,
          P,
          L
        )) === !0 && k(B, P ? P.concat(F) : [F]);
      }), g.pop();
    }
  }
  if (!h.isObject(t))
    throw new TypeError("data must be an object");
  return k(t), e;
}
function bs(t) {
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
function An(t, e) {
  this._pairs = [], t && kr(t, this, e);
}
const Js = An.prototype;
Js.append = function(e, r) {
  this._pairs.push([e, r]);
};
Js.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, bs);
  } : bs;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Qi(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Qs(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Qi, o = r && r.serialize;
  let c;
  if (o ? c = o(e, r) : c = h.isURLSearchParams(e) ? e.toString() : new An(e, r).toString(n), c) {
    const u = t.indexOf("#");
    u !== -1 && (t = t.slice(0, u)), t += (t.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return t;
}
class gs {
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
const Gs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Gi = typeof URLSearchParams < "u" ? URLSearchParams : An, Xi = typeof FormData < "u" ? FormData : null, Zi = typeof Blob < "u" ? Blob : null, ea = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Gi,
    FormData: Xi,
    Blob: Zi
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, kn = typeof window < "u" && typeof document < "u", Rn = typeof navigator == "object" && navigator || void 0, ta = kn && (!Rn || ["ReactNative", "NativeScript", "NS"].indexOf(Rn.product) < 0), ra = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", na = kn && window.location.href || "http://localhost", sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: kn,
  hasStandardBrowserEnv: ta,
  hasStandardBrowserWebWorkerEnv: ra,
  navigator: Rn,
  origin: na
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...sa,
  ...ea
};
function oa(t, e) {
  return kr(t, new Pe.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, c) {
      return Pe.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function ia(t) {
  return h.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function aa(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let c;
  for (n = 0; n < o; n++)
    c = r[n], e[c] = t[c];
  return e;
}
function Xs(t) {
  function e(r, n, o, c) {
    let u = r[c++];
    if (u === "__proto__") return !0;
    const l = Number.isFinite(+u), b = c >= r.length;
    return u = !u && h.isArray(o) ? o.length : u, b ? (h.hasOwnProp(o, u) ? o[u] = [o[u], n] : o[u] = n, !l) : ((!o[u] || !h.isObject(o[u])) && (o[u] = []), e(r, n, o[u], c) && h.isArray(o[u]) && (o[u] = aa(o[u])), !l);
  }
  if (h.isFormData(t) && h.isFunction(t.entries)) {
    const r = {};
    return h.forEachEntry(t, (n, o) => {
      e(ia(n), o, r, 0);
    }), r;
  }
  return null;
}
function ua(t, e, r) {
  if (h.isString(t))
    try {
      return (e || JSON.parse)(t), h.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(t);
}
const Jt = {
  transitional: Gs,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, c = h.isObject(e);
    if (c && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
      return o ? JSON.stringify(Xs(e)) : e;
    if (h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e) || h.isReadableStream(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (c) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return oa(e, this.formSerializer).toString();
      if ((l = h.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return kr(
          l ? { "files[]": e } : e,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return c || o ? (r.setContentType("application/json", !1), ua(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Jt.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (h.isResponse(e) || h.isReadableStream(e))
      return e;
    if (e && h.isString(e) && (n && !this.responseType || o)) {
      const u = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (l) {
        if (u)
          throw l.name === "SyntaxError" ? j.from(l, j.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
  Jt.headers[t] = {};
});
const ca = h.toObjectSet([
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
]), la = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(u) {
    o = u.indexOf(":"), r = u.substring(0, o).trim().toLowerCase(), n = u.substring(o + 1).trim(), !(!r || e[r] && ca[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Es = Symbol("internals");
function qt(t) {
  return t && String(t).trim().toLowerCase();
}
function Er(t) {
  return t === !1 || t == null ? t : h.isArray(t) ? t.map(Er) : String(t);
}
function fa(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const da = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function nn(t, e, r, n, o) {
  if (h.isFunction(n))
    return n.call(this, e, r);
  if (o && (e = r), !!h.isString(e)) {
    if (h.isString(n))
      return e.indexOf(n) !== -1;
    if (h.isRegExp(n))
      return n.test(e);
  }
}
function ha(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function pa(t, e) {
  const r = h.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(o, c, u) {
        return this[n].call(this, e, o, c, u);
      },
      configurable: !0
    });
  });
}
class Ae {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function c(l, b, m) {
      const y = qt(b);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const g = h.findKey(o, y);
      (!g || o[g] === void 0 || m === !0 || m === void 0 && o[g] !== !1) && (o[g || b] = Er(l));
    }
    const u = (l, b) => h.forEach(l, (m, y) => c(m, y, b));
    if (h.isPlainObject(e) || e instanceof this.constructor)
      u(e, r);
    else if (h.isString(e) && (e = e.trim()) && !da(e))
      u(la(e), r);
    else if (h.isHeaders(e))
      for (const [l, b] of e.entries())
        c(b, l, n);
    else
      e != null && c(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = qt(e), e) {
      const n = h.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return fa(o);
        if (h.isFunction(r))
          return r.call(this, o, n);
        if (h.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = qt(e), e) {
      const n = h.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || nn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function c(u) {
      if (u = qt(u), u) {
        const l = h.findKey(n, u);
        l && (!r || nn(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return h.isArray(e) ? e.forEach(c) : c(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const c = r[n];
      (!e || nn(this, this[c], c, e, !0)) && (delete this[c], o = !0);
    }
    return o;
  }
  normalize(e) {
    const r = this, n = {};
    return h.forEach(this, (o, c) => {
      const u = h.findKey(n, c);
      if (u) {
        r[u] = Er(o), delete r[c];
        return;
      }
      const l = e ? ha(c) : String(c).trim();
      l !== c && delete r[c], r[l] = Er(o), n[l] = !0;
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
    const n = (this[Es] = this[Es] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function c(u) {
      const l = qt(u);
      n[l] || (pa(o, u), n[l] = !0);
    }
    return h.isArray(e) ? e.forEach(c) : c(e), this;
  }
}
Ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(Ae.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(Ae);
function sn(t, e) {
  const r = this || Jt, n = e || r, o = Ae.from(n.headers);
  let c = n.data;
  return h.forEach(t, function(l) {
    c = l.call(r, c, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), c;
}
function Zs(t) {
  return !!(t && t.__CANCEL__);
}
function Dt(t, e, r) {
  j.call(this, t ?? "canceled", j.ERR_CANCELED, e, r), this.name = "CanceledError";
}
h.inherits(Dt, j, {
  __CANCEL__: !0
});
function eo(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new j(
    "Request failed with status code " + r.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function ya(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ma(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, c = 0, u;
  return e = e !== void 0 ? e : 1e3, function(b) {
    const m = Date.now(), y = n[c];
    u || (u = m), r[o] = b, n[o] = m;
    let g = c, L = 0;
    for (; g !== o; )
      L += r[g++], g = g % t;
    if (o = (o + 1) % t, o === c && (c = (c + 1) % t), m - u < e)
      return;
    const k = y && m - y;
    return k ? Math.round(L * 1e3 / k) : void 0;
  };
}
function va(t, e) {
  let r = 0, n = 1e3 / e, o, c;
  const u = (m, y = Date.now()) => {
    r = y, o = null, c && (clearTimeout(c), c = null), t.apply(null, m);
  };
  return [(...m) => {
    const y = Date.now(), g = y - r;
    g >= n ? u(m, y) : (o = m, c || (c = setTimeout(() => {
      c = null, u(o);
    }, n - g)));
  }, () => o && u(o)];
}
const _r = (t, e, r = 3) => {
  let n = 0;
  const o = ma(50, 250);
  return va((c) => {
    const u = c.loaded, l = c.lengthComputable ? c.total : void 0, b = u - n, m = o(b), y = u <= l;
    n = u;
    const g = {
      loaded: u,
      total: l,
      progress: l ? u / l : void 0,
      bytes: b,
      rate: m || void 0,
      estimated: m && l && y ? (l - u) / m : void 0,
      event: c,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    t(g);
  }, r);
}, Rs = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, ws = (t) => (...e) => h.asap(() => t(...e)), ba = Pe.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = Pe.navigator && /(msie|trident)/i.test(Pe.navigator.userAgent), r = document.createElement("a");
    let n;
    function o(c) {
      let u = c;
      return e && (r.setAttribute("href", u), u = r.href), r.setAttribute("href", u), {
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
    return n = o(window.location.href), function(u) {
      const l = h.isString(u) ? o(u) : u;
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
), ga = Pe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, o, c) {
      const u = [t + "=" + encodeURIComponent(e)];
      h.isNumber(r) && u.push("expires=" + new Date(r).toGMTString()), h.isString(n) && u.push("path=" + n), h.isString(o) && u.push("domain=" + o), c === !0 && u.push("secure"), document.cookie = u.join("; ");
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
function Ea(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ra(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function to(t, e) {
  return t && !Ea(e) ? Ra(t, e) : e;
}
const _s = (t) => t instanceof Ae ? { ...t } : t;
function mt(t, e) {
  e = e || {};
  const r = {};
  function n(m, y, g) {
    return h.isPlainObject(m) && h.isPlainObject(y) ? h.merge.call({ caseless: g }, m, y) : h.isPlainObject(y) ? h.merge({}, y) : h.isArray(y) ? y.slice() : y;
  }
  function o(m, y, g) {
    if (h.isUndefined(y)) {
      if (!h.isUndefined(m))
        return n(void 0, m, g);
    } else return n(m, y, g);
  }
  function c(m, y) {
    if (!h.isUndefined(y))
      return n(void 0, y);
  }
  function u(m, y) {
    if (h.isUndefined(y)) {
      if (!h.isUndefined(m))
        return n(void 0, m);
    } else return n(void 0, y);
  }
  function l(m, y, g) {
    if (g in e)
      return n(m, y);
    if (g in t)
      return n(void 0, m);
  }
  const b = {
    url: c,
    method: c,
    data: c,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: l,
    headers: (m, y) => o(_s(m), _s(y), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, t, e)), function(y) {
    const g = b[y] || o, L = g(t[y], e[y], y);
    h.isUndefined(L) && g !== l || (r[y] = L);
  }), r;
}
const ro = (t) => {
  const e = mt({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: c, headers: u, auth: l } = e;
  e.headers = u = Ae.from(u), e.url = Qs(to(e.baseURL, e.url), t.params, t.paramsSerializer), l && u.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let b;
  if (h.isFormData(r)) {
    if (Pe.hasStandardBrowserEnv || Pe.hasStandardBrowserWebWorkerEnv)
      u.setContentType(void 0);
    else if ((b = u.getContentType()) !== !1) {
      const [m, ...y] = b ? b.split(";").map((g) => g.trim()).filter(Boolean) : [];
      u.setContentType([m || "multipart/form-data", ...y].join("; "));
    }
  }
  if (Pe.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(e)), n || n !== !1 && ba(e.url))) {
    const m = o && c && ga.read(c);
    m && u.set(o, m);
  }
  return e;
}, wa = typeof XMLHttpRequest < "u", _a = wa && function(t) {
  return new Promise(function(r, n) {
    const o = ro(t);
    let c = o.data;
    const u = Ae.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: b, onDownloadProgress: m } = o, y, g, L, k, O;
    function P() {
      k && k(), O && O(), o.cancelToken && o.cancelToken.unsubscribe(y), o.signal && o.signal.removeEventListener("abort", y);
    }
    let S = new XMLHttpRequest();
    S.open(o.method.toUpperCase(), o.url, !0), S.timeout = o.timeout;
    function B() {
      if (!S)
        return;
      const K = Ae.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), N = {
        data: !l || l === "text" || l === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: K,
        config: t,
        request: S
      };
      eo(function(he) {
        r(he), P();
      }, function(he) {
        n(he), P();
      }, N), S = null;
    }
    "onloadend" in S ? S.onloadend = B : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(B);
    }, S.onabort = function() {
      S && (n(new j("Request aborted", j.ECONNABORTED, t, S)), S = null);
    }, S.onerror = function() {
      n(new j("Network Error", j.ERR_NETWORK, t, S)), S = null;
    }, S.ontimeout = function() {
      let ie = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const N = o.transitional || Gs;
      o.timeoutErrorMessage && (ie = o.timeoutErrorMessage), n(new j(
        ie,
        N.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        t,
        S
      )), S = null;
    }, c === void 0 && u.setContentType(null), "setRequestHeader" in S && h.forEach(u.toJSON(), function(ie, N) {
      S.setRequestHeader(N, ie);
    }), h.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials), l && l !== "json" && (S.responseType = o.responseType), m && ([L, O] = _r(m, !0), S.addEventListener("progress", L)), b && S.upload && ([g, k] = _r(b), S.upload.addEventListener("progress", g), S.upload.addEventListener("loadend", k)), (o.cancelToken || o.signal) && (y = (K) => {
      S && (n(!K || K.type ? new Dt(null, t, S) : K), S.abort(), S = null);
    }, o.cancelToken && o.cancelToken.subscribe(y), o.signal && (o.signal.aborted ? y() : o.signal.addEventListener("abort", y)));
    const F = ya(o.url);
    if (F && Pe.protocols.indexOf(F) === -1) {
      n(new j("Unsupported protocol " + F + ":", j.ERR_BAD_REQUEST, t));
      return;
    }
    S.send(c || null);
  });
}, Sa = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const c = function(m) {
      if (!o) {
        o = !0, l();
        const y = m instanceof Error ? m : this.reason;
        n.abort(y instanceof j ? y : new Dt(y instanceof Error ? y.message : y));
      }
    };
    let u = e && setTimeout(() => {
      u = null, c(new j(`timeout ${e} of ms exceeded`, j.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (u && clearTimeout(u), u = null, t.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(c) : m.removeEventListener("abort", c);
      }), t = null);
    };
    t.forEach((m) => m.addEventListener("abort", c));
    const { signal: b } = n;
    return b.unsubscribe = () => h.asap(l), b;
  }
}, Oa = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, Ca = async function* (t, e) {
  for await (const r of Ta(t))
    yield* Oa(r, e);
}, Ta = async function* (t) {
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
}, Ss = (t, e, r, n) => {
  const o = Ca(t, e);
  let c = 0, u, l = (b) => {
    u || (u = !0, n && n(b));
  };
  return new ReadableStream({
    async pull(b) {
      try {
        const { done: m, value: y } = await o.next();
        if (m) {
          l(), b.close();
          return;
        }
        let g = y.byteLength;
        if (r) {
          let L = c += g;
          r(L);
        }
        b.enqueue(new Uint8Array(y));
      } catch (m) {
        throw l(m), m;
      }
    },
    cancel(b) {
      return l(b), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, xr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", no = xr && typeof ReadableStream == "function", Pa = xr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), so = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Aa = no && so(() => {
  let t = !1;
  const e = new Request(Pe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Os = 64 * 1024, wn = no && so(() => h.isReadableStream(new Response("").body)), Sr = {
  stream: wn && ((t) => t.body)
};
xr && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Sr[e] && (Sr[e] = h.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new j(`Response type '${e}' is not supported`, j.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const ka = async (t) => {
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
    return (await Pa(t)).byteLength;
}, xa = async (t, e) => {
  const r = h.toFiniteNumber(t.getContentLength());
  return r ?? ka(e);
}, Fa = xr && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: o,
    cancelToken: c,
    timeout: u,
    onDownloadProgress: l,
    onUploadProgress: b,
    responseType: m,
    headers: y,
    withCredentials: g = "same-origin",
    fetchOptions: L
  } = ro(t);
  m = m ? (m + "").toLowerCase() : "text";
  let k = Sa([o, c && c.toAbortSignal()], u), O;
  const P = k && k.unsubscribe && (() => {
    k.unsubscribe();
  });
  let S;
  try {
    if (b && Aa && r !== "get" && r !== "head" && (S = await xa(y, n)) !== 0) {
      let N = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), se;
      if (h.isFormData(n) && (se = N.headers.get("content-type")) && y.setContentType(se), N.body) {
        const [he, Z] = Rs(
          S,
          _r(ws(b))
        );
        n = Ss(N.body, Os, he, Z);
      }
    }
    h.isString(g) || (g = g ? "include" : "omit");
    const B = "credentials" in Request.prototype;
    O = new Request(e, {
      ...L,
      signal: k,
      method: r.toUpperCase(),
      headers: y.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: B ? g : void 0
    });
    let F = await fetch(O);
    const K = wn && (m === "stream" || m === "response");
    if (wn && (l || K && P)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((_e) => {
        N[_e] = F[_e];
      });
      const se = h.toFiniteNumber(F.headers.get("content-length")), [he, Z] = l && Rs(
        se,
        _r(ws(l), !0)
      ) || [];
      F = new Response(
        Ss(F.body, Os, he, () => {
          Z && Z(), P && P();
        }),
        N
      );
    }
    m = m || "text";
    let ie = await Sr[h.findKey(Sr, m) || "text"](F, t);
    return !K && P && P(), await new Promise((N, se) => {
      eo(N, se, {
        data: ie,
        headers: Ae.from(F.headers),
        status: F.status,
        statusText: F.statusText,
        config: t,
        request: O
      });
    });
  } catch (B) {
    throw P && P(), B && B.name === "TypeError" && /fetch/i.test(B.message) ? Object.assign(
      new j("Network Error", j.ERR_NETWORK, t, O),
      {
        cause: B.cause || B
      }
    ) : j.from(B, B && B.code, t, O);
  }
}), _n = {
  http: Yi,
  xhr: _a,
  fetch: Fa
};
h.forEach(_n, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Cs = (t) => `- ${t}`, Da = (t) => h.isFunction(t) || t === null || t === !1, oo = {
  getAdapter: (t) => {
    t = h.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let c = 0; c < e; c++) {
      r = t[c];
      let u;
      if (n = r, !Da(r) && (n = _n[(u = String(r)).toLowerCase()], n === void 0))
        throw new j(`Unknown adapter '${u}'`);
      if (n)
        break;
      o[u || "#" + c] = n;
    }
    if (!n) {
      const c = Object.entries(o).map(
        ([l, b]) => `adapter ${l} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let u = e ? c.length > 1 ? `since :
` + c.map(Cs).join(`
`) : " " + Cs(c[0]) : "as no adapter specified";
      throw new j(
        "There is no suitable adapter to dispatch the request " + u,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: _n
};
function on(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Dt(null, t);
}
function Ts(t) {
  return on(t), t.headers = Ae.from(t.headers), t.data = sn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), oo.getAdapter(t.adapter || Jt.adapter)(t).then(function(n) {
    return on(t), n.data = sn.call(
      t,
      t.transformResponse,
      n
    ), n.headers = Ae.from(n.headers), n;
  }, function(n) {
    return Zs(n) || (on(t), n && n.response && (n.response.data = sn.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = Ae.from(n.response.headers))), Promise.reject(n);
  });
}
const io = "1.7.7", xn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  xn[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ps = {};
xn.transitional = function(e, r, n) {
  function o(c, u) {
    return "[Axios v" + io + "] Transitional option '" + c + "'" + u + (n ? ". " + n : "");
  }
  return (c, u, l) => {
    if (e === !1)
      throw new j(
        o(u, " has been removed" + (r ? " in " + r : "")),
        j.ERR_DEPRECATED
      );
    return r && !Ps[u] && (Ps[u] = !0, console.warn(
      o(
        u,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(c, u, l) : !0;
  };
};
function ja(t, e, r) {
  if (typeof t != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const c = n[o], u = e[c];
    if (u) {
      const l = t[c], b = l === void 0 || u(l, c, t);
      if (b !== !0)
        throw new j("option " + c + " must be " + b, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new j("Unknown option " + c, j.ERR_BAD_OPTION);
  }
}
const Sn = {
  assertOptions: ja,
  validators: xn
}, Je = Sn.validators;
class yt {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new gs(),
      response: new gs()
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
        const c = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? c && !String(n.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + c) : n.stack = c;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = mt(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: c } = r;
    n !== void 0 && Sn.assertOptions(n, {
      silentJSONParsing: Je.transitional(Je.boolean),
      forcedJSONParsing: Je.transitional(Je.boolean),
      clarifyTimeoutError: Je.transitional(Je.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Sn.assertOptions(o, {
      encode: Je.function,
      serialize: Je.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let u = c && h.merge(
      c.common,
      c[r.method]
    );
    c && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (O) => {
        delete c[O];
      }
    ), r.headers = Ae.concat(u, c);
    const l = [];
    let b = !0;
    this.interceptors.request.forEach(function(P) {
      typeof P.runWhen == "function" && P.runWhen(r) === !1 || (b = b && P.synchronous, l.unshift(P.fulfilled, P.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(P) {
      m.push(P.fulfilled, P.rejected);
    });
    let y, g = 0, L;
    if (!b) {
      const O = [Ts.bind(this), void 0];
      for (O.unshift.apply(O, l), O.push.apply(O, m), L = O.length, y = Promise.resolve(r); g < L; )
        y = y.then(O[g++], O[g++]);
      return y;
    }
    L = l.length;
    let k = r;
    for (g = 0; g < L; ) {
      const O = l[g++], P = l[g++];
      try {
        k = O(k);
      } catch (S) {
        P.call(this, S);
        break;
      }
    }
    try {
      y = Ts.call(this, k);
    } catch (O) {
      return Promise.reject(O);
    }
    for (g = 0, L = m.length; g < L; )
      y = y.then(m[g++], m[g++]);
    return y;
  }
  getUri(e) {
    e = mt(this.defaults, e);
    const r = to(e.baseURL, e.url);
    return Qs(r, e.params, e.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  yt.prototype[e] = function(r, n) {
    return this.request(mt(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(c, u, l) {
      return this.request(mt(l || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: u
      }));
    };
  }
  yt.prototype[e] = r(), yt.prototype[e + "Form"] = r(!0);
});
class Fn {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(c) {
      r = c;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let c = n._listeners.length;
      for (; c-- > 0; )
        n._listeners[c](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let c;
      const u = new Promise((l) => {
        n.subscribe(l), c = l;
      }).then(o);
      return u.cancel = function() {
        n.unsubscribe(c);
      }, u;
    }, e(function(c, u, l) {
      n.reason || (n.reason = new Dt(c, u, l), r(n.reason));
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
      token: new Fn(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
function La(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Na(t) {
  return h.isObject(t) && t.isAxiosError === !0;
}
const On = {
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
Object.entries(On).forEach(([t, e]) => {
  On[e] = t;
});
function ao(t) {
  const e = new yt(t), r = Us(yt.prototype.request, e);
  return h.extend(r, yt.prototype, e, { allOwnKeys: !0 }), h.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return ao(mt(t, o));
  }, r;
}
const de = ao(Jt);
de.Axios = yt;
de.CanceledError = Dt;
de.CancelToken = Fn;
de.isCancel = Zs;
de.VERSION = io;
de.toFormData = kr;
de.AxiosError = j;
de.Cancel = de.CanceledError;
de.all = function(e) {
  return Promise.all(e);
};
de.spread = La;
de.isAxiosError = Na;
de.mergeConfig = mt;
de.AxiosHeaders = Ae;
de.formToJSON = (t) => Xs(h.isHTMLForm(t) ? new FormData(t) : t);
de.getAdapter = oo.getAdapter;
de.HttpStatusCode = On;
de.default = de;
const uo = {
  //Authentication
  BASE_URL: "http://ec2-3-109-211-250.ap-south-1.compute.amazonaws.com:80"
  // BASE_URL: "https://b641-182-156-141-17.ngrok-free.app",
}, $e = de.create({
  baseURL: uo.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), Ia = () => localStorage.getItem("access_token"), Ua = () => localStorage.getItem("refresh_token");
$e.interceptors.request.use(
  (t) => {
    const e = Ia();
    return e && (t.headers.Authorization = `Bearer ${e}`), t;
  },
  (t) => Promise.reject(t)
);
$e.interceptors.response.use(
  (t) => t,
  async (t) => {
    const e = t.config;
    if (t.response && t.response.status === 401 && !e._retry) {
      e._retry = !0;
      const r = Ua();
      if (r)
        try {
          const { data: n } = await de.post(`${uo.BASE_URL}/auth/refresh-token`, {
            refreshToken: r
          });
          return localStorage.setItem("accessToken", n.accessToken), e.headers.Authorization = `Bearer ${n.accessToken}`, $e(e);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(t);
  }
);
function St(t) {
  var e;
  if (de.isAxiosError(t)) {
    const r = ((e = t.response) == null ? void 0 : e.data) || {
      message: "An error occurred. Try after some time."
    };
    throw new Error(r.message);
  } else
    throw new Error("Unknown error occurred");
}
class Qt {
  // Create a new Data
  async createData(e, r) {
    try {
      const n = await $e.post(e, r);
      return console.log(n.data), n.data;
    } catch (n) {
      St(n);
    }
  }
  // Get all Data
  async getData(e) {
    try {
      return (await $e.get(e)).data.data;
    } catch (r) {
      St(r);
    }
  }
  // Get an Data by ID
  async getDataById(e, r) {
    try {
      const n = await $e.get(`${e}/${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      St(n);
    }
  }
  // Update a data by ID
  async updateData(e, r, n) {
    try {
      const o = await $e.patch(`${e}/${r}`, n);
      return console.log(o.data), o.data;
    } catch (o) {
      St(o);
    }
  }
  // Delete an Data by ID
  async deleteData(e, r) {
    try {
      const n = await $e.delete(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      St(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(e, r) {
    try {
      const n = await $e.patch(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      St(n);
    }
  }
}
const Ba = (t) => {
  const e = new Qt();
  return Tn({ mutationFn: (r) => e.createData(t, r) });
}, $a = (t) => {
  const e = new Qt();
  return Tn({ mutationFn: (r) => e.deleteData(t, r) });
}, qa = (t, e) => {
  const r = new Qt();
  return Is({ queryKey: e, queryFn: () => r.getData(t) });
}, Va = (t, e, r) => {
  const n = new Qt();
  return Is({ queryKey: r, queryFn: () => n.getDataById(t, e) });
}, Wa = (t, e) => {
  const r = new Qt();
  return Tn({ mutationFn: (n) => r.updateData(t, e, n) });
};
export {
  uo as COM_API_URL,
  $e as axiosInstance,
  Ia as getAccessToken,
  Ua as getRefreshToken,
  St as handleError,
  Ba as useCreateData,
  $a as useDeleteData,
  qa as useGetAllData,
  Va as useGetData,
  Wa as useUpdateData
};
