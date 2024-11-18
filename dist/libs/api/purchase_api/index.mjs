var is = (t) => {
  throw TypeError(t);
};
var on = (t, e, r) => e.has(t) || is("Cannot " + r);
var v = (t, e, r) => (on(t, e, "read from private field"), r ? r.call(t) : e.get(t)), re = (t, e, r) => e.has(t) ? is("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), I = (t, e, r, n) => (on(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), oe = (t, e, r) => (on(t, e, "access private method"), r);
const Ha = {
  //Purchase
  //RFPA
  GET_ALL_RFPA: "/rfpa/",
  GET_A_RFPA: "/rfpa",
  POST_RFPA: "/rfpa/",
  APPROVE_RFPA: "/rfpa/approve/",
  //Deal Slip
  GET_ALL_DEAL_SLIP: "/dealSlip/",
  GET_A_DEAL_SLIP: "/dealSlip",
  POST_DEAL_SLIP: "/dealSlip/",
  APPROVE_DEAL_SLIP: "/dealSlip/approve/",
  //GRN
  GET_ALL_GRN: "/grns/",
  GET_A_GRN: "/grns",
  POST_GRN: "/grns/",
  UPDATE_GRN: "/grns",
  APPROVE_GRN: "/grns/approve/",
  GET_ALL_GRN_NO: "/grns/grnnumbers/getAllgrnNo",
  //Vouchers
  //Multiple Cash voucher
  POST_MC_VOUCHER: "/multiCashVoucher/",
  GET_ALL_MC_VOUCHER: "/multiCashVoucher/",
  GET_A_MC_VOUCHER: "/multiCashVoucher",
  UPDATE_MC_VOUCHER: "/multiCashVoucher",
  //PackingMaterialPaymentVoucher
  POST_PMP_VOUCHER: "/pmpvoucher/",
  GET_ALL__PMP_VOUCHER: "/pmpvoucher/",
  GET_A_PMP_VOUCHER: "/pmpvoucher",
  UPDATE_PMP_VOUCHER: "/pmpvoucher",
  //labour Payment Voucher
  POST_LP_VOUCHER: "/lpvoucher/",
  GET_ALL_LP_VOUCHER: "/lpvoucher/",
  GET_A_LP_VOUCHER: "/lpvoucher",
  UPDATE_LP_VOUCHER: "/lpvoucher",
  //Transport Payment Voucher
  POST_TP_VOUCHER: "/tpvoucher/",
  GET_ALL_TP_VOUCHER: "/tpvoucher/",
  GET_A_TP_VOUCHER: "/tpvoucher",
  UPDATE_TP_VOUCHER: "/tpvoucher",
  //Delivery Challan
  POST_DELIVERY_CHALLAN: "/deliveryChallan/",
  GET_ALL_DELIVERY_CHALLAN: "/deliveryChallan/",
  GET_A_DELIVERY_CHALLAN: "/deliveryChallan",
  UPDATE_DELIVERY_CHALLAN: "/deliveryChallan/",
  GET_ALL_DELIVERY_CHALLAN_NO: "/deliveryChallan/challanNos/getAllChallanNo"
};
var Pr = class {
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
}, Sr = typeof window > "u" || "Deno" in globalThis;
function Fo() {
}
function as(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function jo(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Er(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ne(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function us(t) {
  return JSON.stringify(
    t,
    (e, r) => dn(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function fn(t, e) {
  if (t === e)
    return t;
  const r = cs(t) && cs(e);
  if (r || dn(t) && dn(e)) {
    const n = r ? t : Object.keys(t), o = n.length, c = r ? e : Object.keys(e), u = c.length, l = r ? [] : {};
    let b = 0;
    for (let m = 0; m < u; m++) {
      const y = r ? m : c[m];
      (!r && n.includes(y) || r) && t[y] === void 0 && e[y] === void 0 ? (l[y] = void 0, b++) : (l[y] = fn(t[y], e[y]), l[y] === t[y] && t[y] !== void 0 && b++);
    }
    return o === u && b === o ? t : l;
  }
  return e;
}
function Or(t, e) {
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
function dn(t) {
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
        return fn(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return fn(t, e);
  }
  return e;
}
var pt, Qe, Pt, Ls, No = (Ls = class extends Pr {
  constructor() {
    super();
    re(this, pt);
    re(this, Qe);
    re(this, Pt);
    I(this, Pt, (e) => {
      if (!Sr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Qe) || this.setEventListener(v(this, Pt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, Qe)) == null || e.call(this), I(this, Qe, void 0));
  }
  setEventListener(e) {
    var r;
    I(this, Pt, e), (r = v(this, Qe)) == null || r.call(this), I(this, Qe, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    v(this, pt) !== e && (I(this, pt, e), this.onFocus());
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
}, pt = new WeakMap(), Qe = new WeakMap(), Pt = new WeakMap(), Ls), Uo = new No(), At, Xe, kt, xs, Io = (xs = class extends Pr {
  constructor() {
    super();
    re(this, At, !0);
    re(this, Xe);
    re(this, kt);
    I(this, kt, (e) => {
      if (!Sr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Xe) || this.setEventListener(v(this, kt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, Xe)) == null || e.call(this), I(this, Xe, void 0));
  }
  setEventListener(e) {
    var r;
    I(this, kt, e), (r = v(this, Xe)) == null || r.call(this), I(this, Xe, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    v(this, At) !== e && (I(this, At, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return v(this, At);
  }
}, At = new WeakMap(), Xe = new WeakMap(), kt = new WeakMap(), xs), Mo = new Io();
function Bo(t) {
  return (t ?? "online") === "online" ? Mo.isOnline() : !0;
}
function Vo() {
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
var Ar = Vo();
function $o(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Bo(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function qo() {
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
var Ce, H, Jt, _e, yt, Dt, je, Qt, Lt, xt, mt, vt, Ze, Ft, K, zt, hn, pn, yn, mn, vn, bn, gn, Ns, Fs, Ho = (Fs = class extends Pr {
  constructor(e, r) {
    super();
    re(this, K);
    re(this, Ce);
    re(this, H);
    re(this, Jt);
    re(this, _e);
    re(this, yt);
    re(this, Dt);
    re(this, je);
    re(this, Qt);
    re(this, Lt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    re(this, xt);
    re(this, mt);
    re(this, vt);
    re(this, Ze);
    re(this, Ft, /* @__PURE__ */ new Set());
    this.options = r, I(this, Ce, e), I(this, je, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, H).addObserver(this), ds(v(this, H), this.options) ? oe(this, K, zt).call(this) : this.updateResult(), oe(this, K, mn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return En(
      v(this, H),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return En(
      v(this, H),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, K, vn).call(this), oe(this, K, bn).call(this), v(this, H).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, o = v(this, H);
    if (this.options = v(this, Ce).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Ne(this.options.enabled, v(this, H)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, K, gn).call(this), v(this, H).setOptions(this.options), n._defaulted && !Or(this.options, n) && v(this, Ce).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, H),
      observer: this
    });
    const c = this.hasListeners();
    c && hs(
      v(this, H),
      o,
      this.options,
      n
    ) && oe(this, K, zt).call(this), this.updateResult(r), c && (v(this, H) !== o || Ne(this.options.enabled, v(this, H)) !== Ne(n.enabled, v(this, H)) || Er(this.options.staleTime, v(this, H)) !== Er(n.staleTime, v(this, H))) && oe(this, K, hn).call(this);
    const u = oe(this, K, pn).call(this);
    c && (v(this, H) !== o || Ne(this.options.enabled, v(this, H)) !== Ne(n.enabled, v(this, H)) || u !== v(this, Ze)) && oe(this, K, yn).call(this, u);
  }
  getOptimisticResult(e) {
    const r = v(this, Ce).getQueryCache().build(v(this, Ce), e), n = this.createResult(r, e);
    return Wo(this, n) && (I(this, _e, n), I(this, Dt, this.options), I(this, yt, v(this, H).state)), n;
  }
  getCurrentResult() {
    return v(this, _e);
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
    v(this, Ft).add(e);
  }
  getCurrentQuery() {
    return v(this, H);
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
    }).then(() => (this.updateResult(), v(this, _e)));
  }
  createResult(e, r) {
    var he;
    const n = v(this, H), o = this.options, c = v(this, _e), u = v(this, yt), l = v(this, Dt), m = e !== n ? e.state : v(this, Jt), { state: y } = e;
    let g = { ...y }, j = !1, k;
    if (r._optimisticResults) {
      const Z = this.hasListeners(), we = !Z && ds(e, r), Ie = Z && hs(e, n, r, o);
      (we || Ie) && (g = {
        ...g,
        ...$o(y.data, e.options)
      }), r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: O, errorUpdatedAt: P, status: S } = g;
    if (r.select && g.data !== void 0)
      if (c && g.data === (u == null ? void 0 : u.data) && r.select === v(this, Qt))
        k = v(this, Lt);
      else
        try {
          I(this, Qt, r.select), k = r.select(g.data), k = fs(c == null ? void 0 : c.data, k, r), I(this, Lt, k), I(this, je, null);
        } catch (Z) {
          I(this, je, Z);
        }
    else
      k = g.data;
    if (r.placeholderData !== void 0 && k === void 0 && S === "pending") {
      let Z;
      if (c != null && c.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        Z = c.data;
      else if (Z = typeof r.placeholderData == "function" ? r.placeholderData(
        (he = v(this, xt)) == null ? void 0 : he.state.data,
        v(this, xt)
      ) : r.placeholderData, r.select && Z !== void 0)
        try {
          Z = r.select(Z), I(this, je, null);
        } catch (we) {
          I(this, je, we);
        }
      Z !== void 0 && (S = "success", k = fs(
        c == null ? void 0 : c.data,
        Z,
        r
      ), j = !0);
    }
    v(this, je) && (O = v(this, je), k = v(this, Lt), P = Date.now(), S = "error");
    const B = g.fetchStatus === "fetching", L = S === "pending", Y = S === "error", ie = L && B, N = k !== void 0;
    return {
      status: S,
      fetchStatus: g.fetchStatus,
      isPending: L,
      isSuccess: S === "success",
      isError: Y,
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
      isRefetching: B && !L,
      isLoadingError: Y && !N,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: j,
      isRefetchError: Y && N,
      isStale: kn(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = v(this, _e), n = this.createResult(v(this, H), this.options);
    if (I(this, yt, v(this, H).state), I(this, Dt, this.options), v(this, yt).data !== void 0 && I(this, xt, v(this, H)), Or(n, r))
      return;
    I(this, _e, n);
    const o = {}, c = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: u } = this.options, l = typeof u == "function" ? u() : u;
      if (l === "all" || !l && !v(this, Ft).size)
        return !0;
      const b = new Set(
        l ?? v(this, Ft)
      );
      return this.options.throwOnError && b.add("error"), Object.keys(v(this, _e)).some((m) => {
        const y = m;
        return v(this, _e)[y] !== r[y] && b.has(y);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && c() && (o.listeners = !0), oe(this, K, Ns).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, K, mn).call(this);
  }
}, Ce = new WeakMap(), H = new WeakMap(), Jt = new WeakMap(), _e = new WeakMap(), yt = new WeakMap(), Dt = new WeakMap(), je = new WeakMap(), Qt = new WeakMap(), Lt = new WeakMap(), xt = new WeakMap(), mt = new WeakMap(), vt = new WeakMap(), Ze = new WeakMap(), Ft = new WeakMap(), K = new WeakSet(), zt = function(e) {
  oe(this, K, gn).call(this);
  let r = v(this, H).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(Fo)), r;
}, hn = function() {
  oe(this, K, vn).call(this);
  const e = Er(
    this.options.staleTime,
    v(this, H)
  );
  if (Sr || v(this, _e).isStale || !as(e))
    return;
  const n = jo(v(this, _e).dataUpdatedAt, e) + 1;
  I(this, mt, setTimeout(() => {
    v(this, _e).isStale || this.updateResult();
  }, n));
}, pn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, H)) : this.options.refetchInterval) ?? !1;
}, yn = function(e) {
  oe(this, K, bn).call(this), I(this, Ze, e), !(Sr || Ne(this.options.enabled, v(this, H)) === !1 || !as(v(this, Ze)) || v(this, Ze) === 0) && I(this, vt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Uo.isFocused()) && oe(this, K, zt).call(this);
  }, v(this, Ze)));
}, mn = function() {
  oe(this, K, hn).call(this), oe(this, K, yn).call(this, oe(this, K, pn).call(this));
}, vn = function() {
  v(this, mt) && (clearTimeout(v(this, mt)), I(this, mt, void 0));
}, bn = function() {
  v(this, vt) && (clearInterval(v(this, vt)), I(this, vt, void 0));
}, gn = function() {
  const e = v(this, Ce).getQueryCache().build(v(this, Ce), this.options);
  if (e === v(this, H))
    return;
  const r = v(this, H);
  I(this, H, e), I(this, Jt, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, Ns = function(e) {
  Ar.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(v(this, _e));
    }), v(this, Ce).getQueryCache().notify({
      query: v(this, H),
      type: "observerResultsUpdated"
    });
  });
}, Fs);
function Go(t, e) {
  return Ne(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function ds(t, e) {
  return Go(t, e) || t.state.data !== void 0 && En(t, e, e.refetchOnMount);
}
function En(t, e, r) {
  if (Ne(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && kn(t, e);
  }
  return !1;
}
function hs(t, e, r, n) {
  return (t !== e || Ne(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && kn(t, r);
}
function kn(t, e) {
  return Ne(e.enabled, t) !== !1 && t.isStaleByTime(Er(e.staleTime, t));
}
function Wo(t, e) {
  return !Or(t.getCurrentResult(), e);
}
var et, tt, Te, qe, He, Rr, Rn, js, zo = (js = class extends Pr {
  constructor(e, r) {
    super();
    re(this, He);
    re(this, et);
    re(this, tt);
    re(this, Te);
    re(this, qe);
    I(this, et, e), this.setOptions(r), this.bindMethods(), oe(this, He, Rr).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = v(this, et).defaultMutationOptions(e), Or(this.options, r) || v(this, et).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: v(this, Te),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && us(r.mutationKey) !== us(this.options.mutationKey) ? this.reset() : ((n = v(this, Te)) == null ? void 0 : n.state.status) === "pending" && v(this, Te).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = v(this, Te)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    oe(this, He, Rr).call(this), oe(this, He, Rn).call(this, e);
  }
  getCurrentResult() {
    return v(this, tt);
  }
  reset() {
    var e;
    (e = v(this, Te)) == null || e.removeObserver(this), I(this, Te, void 0), oe(this, He, Rr).call(this), oe(this, He, Rn).call(this);
  }
  mutate(e, r) {
    var n;
    return I(this, qe, r), (n = v(this, Te)) == null || n.removeObserver(this), I(this, Te, v(this, et).getMutationCache().build(v(this, et), this.options)), v(this, Te).addObserver(this), v(this, Te).execute(e);
  }
}, et = new WeakMap(), tt = new WeakMap(), Te = new WeakMap(), qe = new WeakMap(), He = new WeakSet(), Rr = function() {
  var r;
  const e = ((r = v(this, Te)) == null ? void 0 : r.state) ?? qo();
  I(this, tt, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Rn = function(e) {
  Ar.batch(() => {
    var r, n, o, c, u, l, b, m;
    if (v(this, qe) && this.hasListeners()) {
      const y = v(this, tt).variables, g = v(this, tt).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = v(this, qe)).onSuccess) == null || n.call(r, e.data, y, g), (c = (o = v(this, qe)).onSettled) == null || c.call(o, e.data, null, y, g)) : (e == null ? void 0 : e.type) === "error" && ((l = (u = v(this, qe)).onError) == null || l.call(u, e.error, y, g), (m = (b = v(this, qe)).onSettled) == null || m.call(
        b,
        void 0,
        e.error,
        y,
        g
      ));
    }
    this.listeners.forEach((y) => {
      y(v(this, tt));
    });
  });
}, js), _n = { exports: {} }, M = {};
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
function Yo() {
  if (ps) return M;
  ps = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), g = Symbol.iterator;
  function j(f) {
    return f === null || typeof f != "object" ? null : (f = g && f[g] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var k = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, P = {};
  function S(f, R, V) {
    this.props = f, this.context = R, this.refs = P, this.updater = V || k;
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
  function L(f, R, V) {
    this.props = f, this.context = R, this.refs = P, this.updater = V || k;
  }
  var Y = L.prototype = new B();
  Y.constructor = L, O(Y, S.prototype), Y.isPureReactComponent = !0;
  var ie = Array.isArray, N = Object.prototype.hasOwnProperty, se = { current: null }, he = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(f, R, V) {
    var q, W = {}, ne = null, ee = null;
    if (R != null) for (q in R.ref !== void 0 && (ee = R.ref), R.key !== void 0 && (ne = "" + R.key), R) N.call(R, q) && !he.hasOwnProperty(q) && (W[q] = R[q]);
    var X = arguments.length - 2;
    if (X === 1) W.children = V;
    else if (1 < X) {
      for (var J = Array(X), pe = 0; pe < X; pe++) J[pe] = arguments[pe + 2];
      W.children = J;
    }
    if (f && f.defaultProps) for (q in X = f.defaultProps, X) W[q] === void 0 && (W[q] = X[q]);
    return { $$typeof: t, type: f, key: ne, ref: ee, props: W, _owner: se.current };
  }
  function we(f, R) {
    return { $$typeof: t, type: f.type, key: R, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Ie(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }
  function It(f) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(V) {
      return R[V];
    });
  }
  var st = /\/+/g;
  function Ee(f, R) {
    return typeof f == "object" && f !== null && f.key != null ? It("" + f.key) : R.toString(36);
  }
  function Se(f, R, V, q, W) {
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
    if (ee) return ee = f, W = W(ee), f = q === "" ? "." + Ee(ee, 0) : q, ie(W) ? (V = "", f != null && (V = f.replace(st, "$&/") + "/"), Se(W, R, V, "", function(pe) {
      return pe;
    })) : W != null && (Ie(W) && (W = we(W, V + (!W.key || ee && ee.key === W.key ? "" : ("" + W.key).replace(st, "$&/") + "/") + f)), R.push(W)), 1;
    if (ee = 0, q = q === "" ? "." : q + ":", ie(f)) for (var X = 0; X < f.length; X++) {
      ne = f[X];
      var J = q + Ee(ne, X);
      ee += Se(ne, R, V, J, W);
    }
    else if (J = j(f), typeof J == "function") for (f = J.call(f), X = 0; !(ne = f.next()).done; ) ne = ne.value, J = q + Ee(ne, X++), ee += Se(ne, R, V, J, W);
    else if (ne === "object") throw R = String(f), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return ee;
  }
  function ve(f, R, V) {
    if (f == null) return f;
    var q = [], W = 0;
    return Se(f, q, "", "", function(ne) {
      return R.call(V, ne, W++);
    }), q;
  }
  function De(f) {
    if (f._status === -1) {
      var R = f._result;
      R = R(), R.then(function(V) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = V);
      }, function(V) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = V);
      }), f._status === -1 && (f._status = 0, f._result = R);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var T = { current: null }, xe = { transition: null }, ot = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: xe, ReactCurrentOwner: se };
  function Me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: ve, forEach: function(f, R, V) {
    ve(f, function() {
      R.apply(this, arguments);
    }, V);
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
  } }, M.Component = S, M.Fragment = r, M.Profiler = o, M.PureComponent = L, M.StrictMode = n, M.Suspense = b, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ot, M.act = Me, M.cloneElement = function(f, R, V) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var q = O({}, f.props), W = f.key, ne = f.ref, ee = f._owner;
    if (R != null) {
      if (R.ref !== void 0 && (ne = R.ref, ee = se.current), R.key !== void 0 && (W = "" + R.key), f.type && f.type.defaultProps) var X = f.type.defaultProps;
      for (J in R) N.call(R, J) && !he.hasOwnProperty(J) && (q[J] = R[J] === void 0 && X !== void 0 ? X[J] : R[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) q.children = V;
    else if (1 < J) {
      X = Array(J);
      for (var pe = 0; pe < J; pe++) X[pe] = arguments[pe + 2];
      q.children = X;
    }
    return { $$typeof: t, type: f.type, key: W, ref: ne, props: q, _owner: ee };
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
    return { $$typeof: y, _payload: { _status: -1, _result: f }, _init: De };
  }, M.memo = function(f, R) {
    return { $$typeof: m, type: f, compare: R === void 0 ? null : R };
  }, M.startTransition = function(f) {
    var R = xe.transition;
    xe.transition = {};
    try {
      f();
    } finally {
      xe.transition = R;
    }
  }, M.unstable_act = Me, M.useCallback = function(f, R) {
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
  }, M.useImperativeHandle = function(f, R, V) {
    return T.current.useImperativeHandle(f, R, V);
  }, M.useInsertionEffect = function(f, R) {
    return T.current.useInsertionEffect(f, R);
  }, M.useLayoutEffect = function(f, R) {
    return T.current.useLayoutEffect(f, R);
  }, M.useMemo = function(f, R) {
    return T.current.useMemo(f, R);
  }, M.useReducer = function(f, R, V) {
    return T.current.useReducer(f, R, V);
  }, M.useRef = function(f) {
    return T.current.useRef(f);
  }, M.useState = function(f) {
    return T.current.useState(f);
  }, M.useSyncExternalStore = function(f, R, V) {
    return T.current.useSyncExternalStore(f, R, V);
  }, M.useTransition = function() {
    return T.current.useTransition();
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
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), S = Symbol.iterator, B = "@@iterator";
      function L(s) {
        if (s === null || typeof s != "object")
          return null;
        var i = S && s[S] || s[B];
        return typeof i == "function" ? i : null;
      }
      var Y = {
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
      function we(s) {
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
      var Ie = !1, It = !1, st = !1, Ee = !1, Se = !1, ve = {
        ReactCurrentDispatcher: Y,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: se
      };
      ve.ReactDebugCurrentFrame = he, ve.ReactCurrentActQueue = N;
      function De(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          xe("warn", s, d);
        }
      }
      function T(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          xe("error", s, d);
        }
      }
      function xe(s, i, d) {
        {
          var p = ve.ReactDebugCurrentFrame, w = p.getStackAddendum();
          w !== "" && (i += "%s", d = d.concat([w]));
          var A = d.map(function(C) {
            return String(C);
          });
          A.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, A);
        }
      }
      var ot = {};
      function Me(s, i) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", w = p + "." + i;
          if (ot[w])
            return;
          T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, p), ot[w] = !0;
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
          Me(s, "forceUpdate");
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
          Me(s, "replaceState");
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
          Me(s, "setState");
        }
      }, R = Object.assign, V = {};
      Object.freeze(V);
      function q(s, i, d) {
        this.props = s, this.context = i, this.refs = V, this.updater = d || f;
      }
      q.prototype.isReactComponent = {}, q.prototype.setState = function(s, i) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, i, "setState");
      }, q.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var W = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ne = function(s, i) {
          Object.defineProperty(q.prototype, s, {
            get: function() {
              De("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
            }
          });
        };
        for (var ee in W)
          W.hasOwnProperty(ee) && ne(ee, W[ee]);
      }
      function X() {
      }
      X.prototype = q.prototype;
      function J(s, i, d) {
        this.props = s, this.context = i, this.refs = V, this.updater = d || f;
      }
      var pe = J.prototype = new X();
      pe.constructor = J, R(pe, q.prototype), pe.isPureReactComponent = !0;
      function Nr() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var er = Array.isArray;
      function Et(s) {
        return er(s);
      }
      function Ur(s) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function Rt(s) {
        try {
          return Ge(s), !1;
        } catch {
          return !0;
        }
      }
      function Ge(s) {
        return "" + s;
      }
      function it(s) {
        if (Rt(s))
          return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ur(s)), Ge(s);
      }
      function tr(s, i, d) {
        var p = s.displayName;
        if (p)
          return p;
        var w = i.displayName || i.name || "";
        return w !== "" ? d + "(" + w + ")" : d;
      }
      function at(s) {
        return s.displayName || "Context";
      }
      function Fe(s) {
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
          case j:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case m:
              var i = s;
              return at(i) + ".Consumer";
            case b:
              var d = s;
              return at(d._context) + ".Provider";
            case y:
              return tr(s, s.render, "ForwardRef");
            case k:
              var p = s.displayName || null;
              return p !== null ? p : Fe(s.type) || "Memo";
            case O: {
              var w = s, A = w._payload, C = w._init;
              try {
                return Fe(C(A));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ut = Object.prototype.hasOwnProperty, _t = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, rr, nr, wt;
      wt = {};
      function Mt(s) {
        if (ut.call(s, "ref")) {
          var i = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function We(s) {
        if (ut.call(s, "key")) {
          var i = Object.getOwnPropertyDescriptor(s, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function Ir(s, i) {
        var d = function() {
          rr || (rr = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: d,
          configurable: !0
        });
      }
      function sr(s, i) {
        var d = function() {
          nr || (nr = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: d,
          configurable: !0
        });
      }
      function or(s) {
        if (typeof s.ref == "string" && se.current && s.__self && se.current.stateNode !== s.__self) {
          var i = Fe(se.current.type);
          wt[i] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, s.ref), wt[i] = !0);
        }
      }
      var ct = function(s, i, d, p, w, A, C) {
        var x = {
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
        return x._store = {}, Object.defineProperty(x._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(x, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.defineProperty(x, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: w
        }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
      };
      function Mr(s, i, d) {
        var p, w = {}, A = null, C = null, x = null, G = null;
        if (i != null) {
          Mt(i) && (C = i.ref, or(i)), We(i) && (it(i.key), A = "" + i.key), x = i.__self === void 0 ? null : i.__self, G = i.__source === void 0 ? null : i.__source;
          for (p in i)
            ut.call(i, p) && !_t.hasOwnProperty(p) && (w[p] = i[p]);
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
          var le = s.defaultProps;
          for (p in le)
            w[p] === void 0 && (w[p] = le[p]);
        }
        if (A || C) {
          var ye = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          A && Ir(w, ye), C && sr(w, ye);
        }
        return ct(s, A, C, x, G, se.current, w);
      }
      function Br(s, i) {
        var d = ct(s.type, i, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function Vr(s, i, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, w = R({}, s.props), A = s.key, C = s.ref, x = s._self, G = s._source, te = s._owner;
        if (i != null) {
          Mt(i) && (C = i.ref, te = se.current), We(i) && (it(i.key), A = "" + i.key);
          var ae;
          s.type && s.type.defaultProps && (ae = s.type.defaultProps);
          for (p in i)
            ut.call(i, p) && !_t.hasOwnProperty(p) && (i[p] === void 0 && ae !== void 0 ? w[p] = ae[p] : w[p] = i[p]);
        }
        var ue = arguments.length - 2;
        if (ue === 1)
          w.children = d;
        else if (ue > 1) {
          for (var le = Array(ue), ye = 0; ye < ue; ye++)
            le[ye] = arguments[ye + 2];
          w.children = le;
        }
        return ct(s.type, A, C, x, G, te, w);
      }
      function ze(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var ir = ".", $r = ":";
      function qr(s) {
        var i = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(i, function(w) {
          return d[w];
        });
        return "$" + p;
      }
      var St = !1, ar = /\/+/g;
      function Be(s) {
        return s.replace(ar, "$&/");
      }
      function lt(s, i) {
        return typeof s == "object" && s !== null && s.key != null ? (it(s.key), qr("" + s.key)) : i.toString(36);
      }
      function Ye(s, i, d, p, w) {
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
          var x = s, G = w(x), te = p === "" ? ir + lt(x, 0) : p;
          if (Et(G)) {
            var ae = "";
            te != null && (ae = Be(te) + "/"), Ye(G, i, ae, "", function(xo) {
              return xo;
            });
          } else G != null && (ze(G) && (G.key && (!x || x.key !== G.key) && it(G.key), G = Br(
            G,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (G.key && (!x || x.key !== G.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Be("" + G.key) + "/"
            ) : "") + te
          )), i.push(G));
          return 1;
        }
        var ue, le, ye = 0, ge = p === "" ? ir : p + $r;
        if (Et(s))
          for (var gr = 0; gr < s.length; gr++)
            ue = s[gr], le = ge + lt(ue, gr), ye += Ye(ue, i, d, le, w);
        else {
          var sn = L(s);
          if (typeof sn == "function") {
            var ns = s;
            sn === ns.entries && (St || De("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), St = !0);
            for (var Do = sn.call(ns), ss, Lo = 0; !(ss = Do.next()).done; )
              ue = ss.value, le = ge + lt(ue, Lo++), ye += Ye(ue, i, d, le, w);
          } else if (A === "object") {
            var os = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (os === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : os) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ye;
      }
      function ft(s, i, d) {
        if (s == null)
          return s;
        var p = [], w = 0;
        return Ye(s, p, "", "", function(A) {
          return i.call(d, A, w++);
        }), p;
      }
      function Hr(s) {
        var i = 0;
        return ft(s, function() {
          i++;
        }), i;
      }
      function ur(s, i, d) {
        ft(s, function() {
          i.apply(this, arguments);
        }, d);
      }
      function Gr(s) {
        return ft(s, function(i) {
          return i;
        }) || [];
      }
      function cr(s) {
        if (!ze(s))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
      function lr(s) {
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
        var d = !1, p = !1, w = !1;
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
                w || (De("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", C), w = !0);
              }
            }
          }), i.Consumer = A;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var dt = -1, Bt = 0, Vt = 1, fr = 2;
      function Wr(s) {
        if (s._status === dt) {
          var i = s._result, d = i();
          if (d.then(function(A) {
            if (s._status === Bt || s._status === dt) {
              var C = s;
              C._status = Vt, C._result = A;
            }
          }, function(A) {
            if (s._status === Bt || s._status === dt) {
              var C = s;
              C._status = fr, C._result = A;
            }
          }), s._status === dt) {
            var p = s;
            p._status = Bt, p._result = d;
          }
        }
        if (s._status === Vt) {
          var w = s._result;
          return w === void 0 && T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, w), "default" in w || T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, w), w.default;
        } else
          throw s._result;
      }
      function zr(s) {
        var i = {
          // We use these fields to store the result.
          _status: dt,
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
              set: function(A) {
                T("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = A, Object.defineProperty(d, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return w;
              },
              set: function(A) {
                T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), w = A, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function Yr(s) {
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
      var dr;
      dr = Symbol.for("react.module.reference");
      function a(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === c || s === l || Se || s === u || s === g || s === j || Ee || s === P || Ie || It || st || typeof s == "object" && s !== null && (s.$$typeof === O || s.$$typeof === k || s.$$typeof === b || s.$$typeof === m || s.$$typeof === y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === dr || s.getModuleId !== void 0));
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
            set: function(w) {
              p = w, !s.name && !s.displayName && (s.displayName = w);
            }
          });
        }
        return d;
      }
      function _() {
        var s = Y.current;
        return s === null && T(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
      }
      function D(s) {
        var i = _();
        if (s._context !== void 0) {
          var d = s._context;
          d.Consumer === s ? T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === s && T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return i.useContext(s);
      }
      function z(s) {
        var i = _();
        return i.useState(s);
      }
      function Q(s, i, d) {
        var p = _();
        return p.useReducer(s, i, d);
      }
      function $(s) {
        var i = _();
        return i.useRef(s);
      }
      function U(s, i) {
        var d = _();
        return d.useEffect(s, i);
      }
      function be(s, i) {
        var d = _();
        return d.useInsertionEffect(s, i);
      }
      function ce(s, i) {
        var d = _();
        return d.useLayoutEffect(s, i);
      }
      function fe(s, i) {
        var d = _();
        return d.useCallback(s, i);
      }
      function Oe(s, i) {
        var d = _();
        return d.useMemo(s, i);
      }
      function Ke(s, i, d) {
        var p = _();
        return p.useImperativeHandle(s, i, d);
      }
      function Ve(s, i) {
        {
          var d = _();
          return d.useDebugValue(s, i);
        }
      }
      function Re() {
        var s = _();
        return s.useTransition();
      }
      function $t(s) {
        var i = _();
        return i.useDeferredValue(s);
      }
      function Kr() {
        var s = _();
        return s.useId();
      }
      function Jr(s, i, d) {
        var p = _();
        return p.useSyncExternalStore(s, i, d);
      }
      var qt = 0, Nn, Un, In, Mn, Bn, Vn, $n;
      function qn() {
      }
      qn.__reactDisabledLog = !0;
      function ho() {
        {
          if (qt === 0) {
            Nn = console.log, Un = console.info, In = console.warn, Mn = console.error, Bn = console.group, Vn = console.groupCollapsed, $n = console.groupEnd;
            var s = {
              configurable: !0,
              enumerable: !0,
              value: qn,
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
                value: Un
              }),
              warn: R({}, s, {
                value: In
              }),
              error: R({}, s, {
                value: Mn
              }),
              group: R({}, s, {
                value: Bn
              }),
              groupCollapsed: R({}, s, {
                value: Vn
              }),
              groupEnd: R({}, s, {
                value: $n
              })
            });
          }
          qt < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Qr = ve.ReactCurrentDispatcher, Xr;
      function hr(s, i, d) {
        {
          if (Xr === void 0)
            try {
              throw Error();
            } catch (w) {
              var p = w.stack.trim().match(/\n( *(at )?)/);
              Xr = p && p[1] || "";
            }
          return `
` + Xr + s;
        }
      }
      var Zr = !1, pr;
      {
        var yo = typeof WeakMap == "function" ? WeakMap : Map;
        pr = new yo();
      }
      function Hn(s, i) {
        if (!s || Zr)
          return "";
        {
          var d = pr.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        Zr = !0;
        var w = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var A;
        A = Qr.current, Qr.current = null, ho();
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
            for (var x = ge.stack.split(`
`), G = p.stack.split(`
`), te = x.length - 1, ae = G.length - 1; te >= 1 && ae >= 0 && x[te] !== G[ae]; )
              ae--;
            for (; te >= 1 && ae >= 0; te--, ae--)
              if (x[te] !== G[ae]) {
                if (te !== 1 || ae !== 1)
                  do
                    if (te--, ae--, ae < 0 || x[te] !== G[ae]) {
                      var ue = `
` + x[te].replace(" at new ", " at ");
                      return s.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", s.displayName)), typeof s == "function" && pr.set(s, ue), ue;
                    }
                  while (te >= 1 && ae >= 0);
                break;
              }
          }
        } finally {
          Zr = !1, Qr.current = A, po(), Error.prepareStackTrace = w;
        }
        var le = s ? s.displayName || s.name : "", ye = le ? hr(le) : "";
        return typeof s == "function" && pr.set(s, ye), ye;
      }
      function mo(s, i, d) {
        return Hn(s, !1);
      }
      function vo(s) {
        var i = s.prototype;
        return !!(i && i.isReactComponent);
      }
      function yr(s, i, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return Hn(s, vo(s));
        if (typeof s == "string")
          return hr(s);
        switch (s) {
          case g:
            return hr("Suspense");
          case j:
            return hr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case y:
              return mo(s.render);
            case k:
              return yr(s.type, i, d);
            case O: {
              var p = s, w = p._payload, A = p._init;
              try {
                return yr(A(w), i, d);
              } catch {
              }
            }
          }
        return "";
      }
      var Gn = {}, Wn = ve.ReactDebugCurrentFrame;
      function mr(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          Wn.setExtraStackFrame(d);
        } else
          Wn.setExtraStackFrame(null);
      }
      function bo(s, i, d, p, w) {
        {
          var A = Function.call.bind(ut);
          for (var C in s)
            if (A(s, C)) {
              var x = void 0;
              try {
                if (typeof s[C] != "function") {
                  var G = Error((p || "React class") + ": " + d + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw G.name = "Invariant Violation", G;
                }
                x = s[C](i, C, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (te) {
                x = te;
              }
              x && !(x instanceof Error) && (mr(w), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, C, typeof x), mr(null)), x instanceof Error && !(x.message in Gn) && (Gn[x.message] = !0, mr(w), T("Failed %s type: %s", d, x.message), mr(null));
            }
        }
      }
      function Ot(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          we(d);
        } else
          we(null);
      }
      var en;
      en = !1;
      function zn() {
        if (se.current) {
          var s = Fe(se.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function go(s) {
        if (s !== void 0) {
          var i = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + i + ":" + d + ".";
        }
        return "";
      }
      function Eo(s) {
        return s != null ? go(s.__source) : "";
      }
      var Yn = {};
      function Ro(s) {
        var i = zn();
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
          if (!Yn[d]) {
            Yn[d] = !0;
            var p = "";
            s && s._owner && s._owner !== se.current && (p = " It was passed a child from " + Fe(s._owner.type) + "."), Ot(s), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), Ot(null);
          }
        }
      }
      function Jn(s, i) {
        if (typeof s == "object") {
          if (Et(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              ze(p) && Kn(p, i);
            }
          else if (ze(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var w = L(s);
            if (typeof w == "function" && w !== s.entries)
              for (var A = w.call(s), C; !(C = A.next()).done; )
                ze(C.value) && Kn(C.value, i);
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
            var p = Fe(i);
            bo(d, s.props, "prop", p, s);
          } else if (i.PropTypes !== void 0 && !en) {
            en = !0;
            var w = Fe(i);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function _o(s) {
        {
          for (var i = Object.keys(s.props), d = 0; d < i.length; d++) {
            var p = i[d];
            if (p !== "children" && p !== "key") {
              Ot(s), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Ot(null);
              break;
            }
          }
          s.ref !== null && (Ot(s), T("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
        }
      }
      function Xn(s, i, d) {
        var p = a(s);
        if (!p) {
          var w = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = Eo(i);
          A ? w += A : w += zn();
          var C;
          s === null ? C = "null" : Et(s) ? C = "array" : s !== void 0 && s.$$typeof === n ? (C = "<" + (Fe(s.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : C = typeof s, T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, w);
        }
        var x = Mr.apply(this, arguments);
        if (x == null)
          return x;
        if (p)
          for (var G = 2; G < arguments.length; G++)
            Jn(arguments[G], s);
        return s === c ? _o(x) : Qn(x), x;
      }
      var Zn = !1;
      function wo(s) {
        var i = Xn.bind(null, s);
        return i.type = s, Zn || (Zn = !0, De("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return De("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), i;
      }
      function So(s, i, d) {
        for (var p = Vr.apply(this, arguments), w = 2; w < arguments.length; w++)
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
            w > 10 && De("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var es = !1, vr = null;
      function Co(s) {
        if (vr === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), d = t && t[i];
            vr = d.call(t, "timers").setImmediate;
          } catch {
            vr = function(w) {
              es === !1 && (es = !0, typeof MessageChannel > "u" && T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var A = new MessageChannel();
              A.port1.onmessage = w, A.port2.postMessage(void 0);
            };
          }
        return vr(s);
      }
      var Ct = 0, ts = !1;
      function rs(s) {
        {
          var i = Ct;
          Ct++, N.current === null && (N.current = []);
          var d = N.isBatchingLegacy, p;
          try {
            if (N.isBatchingLegacy = !0, p = s(), !d && N.didScheduleLegacyUpdate) {
              var w = N.current;
              w !== null && (N.didScheduleLegacyUpdate = !1, nn(w));
            }
          } catch (le) {
            throw br(i), le;
          } finally {
            N.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var A = p, C = !1, x = {
              then: function(le, ye) {
                C = !0, A.then(function(ge) {
                  br(i), Ct === 0 ? tn(ge, le, ye) : le(ge);
                }, function(ge) {
                  br(i), ye(ge);
                });
              }
            };
            return !ts && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              C || (ts = !0, T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), x;
          } else {
            var G = p;
            if (br(i), Ct === 0) {
              var te = N.current;
              te !== null && (nn(te), N.current = null);
              var ae = {
                then: function(le, ye) {
                  N.current === null ? (N.current = [], tn(G, le, ye)) : le(G);
                }
              };
              return ae;
            } else {
              var ue = {
                then: function(le, ye) {
                  le(G);
                }
              };
              return ue;
            }
          }
        }
      }
      function br(s) {
        s !== Ct - 1 && T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ct = s;
      }
      function tn(s, i, d) {
        {
          var p = N.current;
          if (p !== null)
            try {
              nn(p), Co(function() {
                p.length === 0 ? (N.current = null, i(s)) : tn(s, i, d);
              });
            } catch (w) {
              d(w);
            }
          else
            i(s);
        }
      }
      var rn = !1;
      function nn(s) {
        if (!rn) {
          rn = !0;
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
            rn = !1;
          }
        }
      }
      var To = Xn, Po = So, Ao = wo, ko = {
        map: ft,
        forEach: ur,
        count: Hr,
        toArray: Gr,
        only: cr
      };
      e.Children = ko, e.Component = q, e.Fragment = c, e.Profiler = l, e.PureComponent = J, e.StrictMode = u, e.Suspense = g, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, e.act = rs, e.cloneElement = Po, e.createContext = lr, e.createElement = To, e.createFactory = Ao, e.createRef = Nr, e.forwardRef = Yr, e.isValidElement = ze, e.lazy = zr, e.memo = E, e.startTransition = Oo, e.unstable_act = rs, e.useCallback = fe, e.useContext = D, e.useDebugValue = Ve, e.useDeferredValue = $t, e.useEffect = U, e.useId = Kr, e.useImperativeHandle = Ke, e.useInsertionEffect = be, e.useLayoutEffect = ce, e.useMemo = Oe, e.useReducer = Q, e.useRef = $, e.useState = z, e.useSyncExternalStore = Jr, e.useTransition = Re, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Yt, Yt.exports)), Yt.exports;
}
process.env.NODE_ENV === "production" ? _n.exports = Yo() : _n.exports = Ko();
var me = _n.exports, Ht = {};
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
  if (ms) return Ht;
  ms = 1;
  var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, b, m) {
    var y, g = {}, j = null, k = null;
    m !== void 0 && (j = "" + m), b.key !== void 0 && (j = "" + b.key), b.ref !== void 0 && (k = b.ref);
    for (y in b) n.call(b, y) && !c.hasOwnProperty(y) && (g[y] = b[y]);
    if (l && l.defaultProps) for (y in b = l.defaultProps, b) g[y] === void 0 && (g[y] = b[y]);
    return { $$typeof: e, type: l, key: j, ref: k, props: g, _owner: o.current };
  }
  return Ht.Fragment = r, Ht.jsx = u, Ht.jsxs = u, Ht;
}
var Gt = {};
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
    var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), O = Symbol.iterator, P = "@@iterator";
    function S(a) {
      if (a === null || typeof a != "object")
        return null;
      var E = O && a[O] || a[P];
      return typeof E == "function" ? E : null;
    }
    var B = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(a) {
      {
        for (var E = arguments.length, _ = new Array(E > 1 ? E - 1 : 0), D = 1; D < E; D++)
          _[D - 1] = arguments[D];
        Y("error", a, _);
      }
    }
    function Y(a, E, _) {
      {
        var D = B.ReactDebugCurrentFrame, z = D.getStackAddendum();
        z !== "" && (E += "%s", _ = _.concat([z]));
        var Q = _.map(function($) {
          return String($);
        });
        Q.unshift("Warning: " + E), Function.prototype.apply.call(console[a], console, Q);
      }
    }
    var ie = !1, N = !1, se = !1, he = !1, Z = !1, we;
    we = Symbol.for("react.module.reference");
    function Ie(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === c || Z || a === o || a === m || a === y || he || a === k || ie || N || se || typeof a == "object" && a !== null && (a.$$typeof === j || a.$$typeof === g || a.$$typeof === u || a.$$typeof === l || a.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === we || a.getModuleId !== void 0));
    }
    function It(a, E, _) {
      var D = a.displayName;
      if (D)
        return D;
      var z = E.displayName || E.name || "";
      return z !== "" ? _ + "(" + z + ")" : _;
    }
    function st(a) {
      return a.displayName || "Context";
    }
    function Ee(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
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
            return st(E) + ".Consumer";
          case u:
            var _ = a;
            return st(_._context) + ".Provider";
          case b:
            return It(a, a.render, "ForwardRef");
          case g:
            var D = a.displayName || null;
            return D !== null ? D : Ee(a.type) || "Memo";
          case j: {
            var z = a, Q = z._payload, $ = z._init;
            try {
              return Ee($(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Se = Object.assign, ve = 0, De, T, xe, ot, Me, f, R;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function q() {
      {
        if (ve === 0) {
          De = console.log, T = console.info, xe = console.warn, ot = console.error, Me = console.group, f = console.groupCollapsed, R = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: V,
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
    function W() {
      {
        if (ve--, ve === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Se({}, a, {
              value: De
            }),
            info: Se({}, a, {
              value: T
            }),
            warn: Se({}, a, {
              value: xe
            }),
            error: Se({}, a, {
              value: ot
            }),
            group: Se({}, a, {
              value: Me
            }),
            groupCollapsed: Se({}, a, {
              value: f
            }),
            groupEnd: Se({}, a, {
              value: R
            })
          });
        }
        ve < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = B.ReactCurrentDispatcher, ee;
    function X(a, E, _) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (z) {
            var D = z.stack.trim().match(/\n( *(at )?)/);
            ee = D && D[1] || "";
          }
        return `
` + ee + a;
      }
    }
    var J = !1, pe;
    {
      var Nr = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new Nr();
    }
    function er(a, E) {
      if (!a || J)
        return "";
      {
        var _ = pe.get(a);
        if (_ !== void 0)
          return _;
      }
      var D;
      J = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = ne.current, ne.current = null, q();
      try {
        if (E) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (Re) {
              D = Re;
            }
            Reflect.construct(a, [], $);
          } else {
            try {
              $.call();
            } catch (Re) {
              D = Re;
            }
            a.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            D = Re;
          }
          a();
        }
      } catch (Re) {
        if (Re && D && typeof Re.stack == "string") {
          for (var U = Re.stack.split(`
`), be = D.stack.split(`
`), ce = U.length - 1, fe = be.length - 1; ce >= 1 && fe >= 0 && U[ce] !== be[fe]; )
            fe--;
          for (; ce >= 1 && fe >= 0; ce--, fe--)
            if (U[ce] !== be[fe]) {
              if (ce !== 1 || fe !== 1)
                do
                  if (ce--, fe--, fe < 0 || U[ce] !== be[fe]) {
                    var Oe = `
` + U[ce].replace(" at new ", " at ");
                    return a.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", a.displayName)), typeof a == "function" && pe.set(a, Oe), Oe;
                  }
                while (ce >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        J = !1, ne.current = Q, W(), Error.prepareStackTrace = z;
      }
      var Ke = a ? a.displayName || a.name : "", Ve = Ke ? X(Ke) : "";
      return typeof a == "function" && pe.set(a, Ve), Ve;
    }
    function Et(a, E, _) {
      return er(a, !1);
    }
    function Ur(a) {
      var E = a.prototype;
      return !!(E && E.isReactComponent);
    }
    function Rt(a, E, _) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return er(a, Ur(a));
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
            return Et(a.render);
          case g:
            return Rt(a.type, E, _);
          case j: {
            var D = a, z = D._payload, Q = D._init;
            try {
              return Rt(Q(z), E, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Ge = Object.prototype.hasOwnProperty, it = {}, tr = B.ReactDebugCurrentFrame;
    function at(a) {
      if (a) {
        var E = a._owner, _ = Rt(a.type, a._source, E ? E.type : null);
        tr.setExtraStackFrame(_);
      } else
        tr.setExtraStackFrame(null);
    }
    function Fe(a, E, _, D, z) {
      {
        var Q = Function.call.bind(Ge);
        for (var $ in a)
          if (Q(a, $)) {
            var U = void 0;
            try {
              if (typeof a[$] != "function") {
                var be = Error((D || "React class") + ": " + _ + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              U = a[$](E, $, D, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              U = ce;
            }
            U && !(U instanceof Error) && (at(z), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", _, $, typeof U), at(null)), U instanceof Error && !(U.message in it) && (it[U.message] = !0, at(z), L("Failed %s type: %s", _, U.message), at(null));
          }
      }
    }
    var ut = Array.isArray;
    function _t(a) {
      return ut(a);
    }
    function rr(a) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, _ = E && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return _;
      }
    }
    function nr(a) {
      try {
        return wt(a), !1;
      } catch {
        return !0;
      }
    }
    function wt(a) {
      return "" + a;
    }
    function Mt(a) {
      if (nr(a))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(a)), wt(a);
    }
    var We = B.ReactCurrentOwner, Ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sr, or, ct;
    ct = {};
    function Mr(a) {
      if (Ge.call(a, "ref")) {
        var E = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Br(a) {
      if (Ge.call(a, "key")) {
        var E = Object.getOwnPropertyDescriptor(a, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Vr(a, E) {
      if (typeof a.ref == "string" && We.current && E && We.current.stateNode !== E) {
        var _ = Ee(We.current.type);
        ct[_] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ee(We.current.type), a.ref), ct[_] = !0);
      }
    }
    function ze(a, E) {
      {
        var _ = function() {
          sr || (sr = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function ir(a, E) {
      {
        var _ = function() {
          or || (or = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var $r = function(a, E, _, D, z, Q, $) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: a,
        key: E,
        ref: _,
        props: $,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function qr(a, E, _, D, z) {
      {
        var Q, $ = {}, U = null, be = null;
        _ !== void 0 && (Mt(_), U = "" + _), Br(E) && (Mt(E.key), U = "" + E.key), Mr(E) && (be = E.ref, Vr(E, z));
        for (Q in E)
          Ge.call(E, Q) && !Ir.hasOwnProperty(Q) && ($[Q] = E[Q]);
        if (a && a.defaultProps) {
          var ce = a.defaultProps;
          for (Q in ce)
            $[Q] === void 0 && ($[Q] = ce[Q]);
        }
        if (U || be) {
          var fe = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          U && ze($, fe), be && ir($, fe);
        }
        return $r(a, U, be, z, D, We.current, $);
      }
    }
    var St = B.ReactCurrentOwner, ar = B.ReactDebugCurrentFrame;
    function Be(a) {
      if (a) {
        var E = a._owner, _ = Rt(a.type, a._source, E ? E.type : null);
        ar.setExtraStackFrame(_);
      } else
        ar.setExtraStackFrame(null);
    }
    var lt;
    lt = !1;
    function Ye(a) {
      return typeof a == "object" && a !== null && a.$$typeof === e;
    }
    function ft() {
      {
        if (St.current) {
          var a = Ee(St.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Hr(a) {
      return "";
    }
    var ur = {};
    function Gr(a) {
      {
        var E = ft();
        if (!E) {
          var _ = typeof a == "string" ? a : a.displayName || a.name;
          _ && (E = `

Check the top-level render call using <` + _ + ">.");
        }
        return E;
      }
    }
    function cr(a, E) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var _ = Gr(E);
        if (ur[_])
          return;
        ur[_] = !0;
        var D = "";
        a && a._owner && a._owner !== St.current && (D = " It was passed a child from " + Ee(a._owner.type) + "."), Be(a), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, D), Be(null);
      }
    }
    function lr(a, E) {
      {
        if (typeof a != "object")
          return;
        if (_t(a))
          for (var _ = 0; _ < a.length; _++) {
            var D = a[_];
            Ye(D) && cr(D, E);
          }
        else if (Ye(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var z = S(a);
          if (typeof z == "function" && z !== a.entries)
            for (var Q = z.call(a), $; !($ = Q.next()).done; )
              Ye($.value) && cr($.value, E);
        }
      }
    }
    function dt(a) {
      {
        var E = a.type;
        if (E == null || typeof E == "string")
          return;
        var _;
        if (typeof E == "function")
          _ = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === g))
          _ = E.propTypes;
        else
          return;
        if (_) {
          var D = Ee(E);
          Fe(_, a.props, "prop", D, a);
        } else if (E.PropTypes !== void 0 && !lt) {
          lt = !0;
          var z = Ee(E);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(a) {
      {
        for (var E = Object.keys(a.props), _ = 0; _ < E.length; _++) {
          var D = E[_];
          if (D !== "children" && D !== "key") {
            Be(a), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Be(null);
            break;
          }
        }
        a.ref !== null && (Be(a), L("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    var Vt = {};
    function fr(a, E, _, D, z, Q) {
      {
        var $ = Ie(a);
        if (!$) {
          var U = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = Hr();
          be ? U += be : U += ft();
          var ce;
          a === null ? ce = "null" : _t(a) ? ce = "array" : a !== void 0 && a.$$typeof === e ? (ce = "<" + (Ee(a.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof a, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, U);
        }
        var fe = qr(a, E, _, z, Q);
        if (fe == null)
          return fe;
        if ($) {
          var Oe = E.children;
          if (Oe !== void 0)
            if (D)
              if (_t(Oe)) {
                for (var Ke = 0; Ke < Oe.length; Ke++)
                  lr(Oe[Ke], a);
                Object.freeze && Object.freeze(Oe);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lr(Oe, a);
        }
        if (Ge.call(E, "key")) {
          var Ve = Ee(a), Re = Object.keys(E).filter(function(Jr) {
            return Jr !== "key";
          }), $t = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vt[Ve + $t]) {
            var Kr = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            L(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $t, Ve, Kr, Ve), Vt[Ve + $t] = !0;
          }
        }
        return a === n ? Bt(fe) : dt(fe), fe;
      }
    }
    function Wr(a, E, _) {
      return fr(a, E, _, !0);
    }
    function zr(a, E, _) {
      return fr(a, E, _, !1);
    }
    var Yr = zr, dr = Wr;
    Gt.Fragment = n, Gt.jsx = Yr, Gt.jsxs = dr;
  }()), Gt;
}
process.env.NODE_ENV === "production" ? Jo() : Qo();
var Xo = me.createContext(
  void 0
), Us = (t) => {
  const e = me.useContext(Xo);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Is = me.createContext(!1), Zo = () => me.useContext(Is);
Is.Provider;
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
  var m, y, g, j;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Us(), o = Zo(), c = ri(), u = n.defaultQueryOptions(t);
  (y = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || y.call(
    m,
    u
  ), u._optimisticResults = o ? "isRestoring" : "optimistic", ai(u), si(u, c), oi(c);
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
        } : l.subscribe(Ar.batchCalls(k));
        return l.updateResult(), O;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), me.useEffect(() => {
    l.setOptions(u, { listeners: !1 });
  }, [u, l]), ui(u, b))
    throw ci(u, l, c);
  if (ii({
    result: b,
    errorResetBoundary: c,
    throwOnError: u.throwOnError,
    query: n.getQueryCache().get(u.queryHash)
  }))
    throw b.error;
  return (j = (g = n.getDefaultOptions().queries) == null ? void 0 : g._experimental_afterQuery) == null || j.call(
    g,
    u,
    b
  ), u.notifyOnChangeProps ? b : l.trackResult(b);
}
function Bs(t, e) {
  return li(t, Ho);
}
function Vs(t, e) {
  const r = Us(), [n] = me.useState(
    () => new zo(
      r,
      t
    )
  );
  me.useEffect(() => {
    n.setOptions(t);
  }, [n, t]);
  const o = me.useSyncExternalStore(
    me.useCallback(
      (u) => n.subscribe(Ar.batchCalls(u)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), c = me.useCallback(
    (u, l) => {
      n.mutate(u, l).catch(ni);
    },
    [n]
  );
  if (o.error && Ms(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: c, mutateAsync: o.mutate };
}
function $s(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: fi } = Object.prototype, { getPrototypeOf: Dn } = Object, kr = /* @__PURE__ */ ((t) => (e) => {
  const r = fi.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Le = (t) => (t = t.toLowerCase(), (e) => kr(e) === t), Dr = (t) => (e) => typeof e === t, { isArray: jt } = Array, Kt = Dr("undefined");
function di(t) {
  return t !== null && !Kt(t) && t.constructor !== null && !Kt(t.constructor) && ke(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const qs = Le("ArrayBuffer");
function hi(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && qs(t.buffer), e;
}
const pi = Dr("string"), ke = Dr("function"), Hs = Dr("number"), Lr = (t) => t !== null && typeof t == "object", yi = (t) => t === !0 || t === !1, _r = (t) => {
  if (kr(t) !== "object")
    return !1;
  const e = Dn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, mi = Le("Date"), vi = Le("File"), bi = Le("Blob"), gi = Le("FileList"), Ei = (t) => Lr(t) && ke(t.pipe), Ri = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ke(t.append) && ((e = kr(t)) === "formdata" || // detect form-data instance
  e === "object" && ke(t.toString) && t.toString() === "[object FormData]"));
}, _i = Le("URLSearchParams"), [wi, Si, Oi, Ci] = ["ReadableStream", "Request", "Response", "Headers"].map(Le), Ti = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xt(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), jt(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const c = r ? Object.getOwnPropertyNames(t) : Object.keys(t), u = c.length;
    let l;
    for (n = 0; n < u; n++)
      l = c[n], e.call(null, t[l], l, t);
  }
}
function Gs(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const ht = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ws = (t) => !Kt(t) && t !== ht;
function wn() {
  const { caseless: t } = Ws(this) && this || {}, e = {}, r = (n, o) => {
    const c = t && Gs(e, o) || o;
    _r(e[c]) && _r(n) ? e[c] = wn(e[c], n) : _r(n) ? e[c] = wn({}, n) : jt(n) ? e[c] = n.slice() : e[c] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Xt(arguments[n], r);
  return e;
}
const Pi = (t, e, r, { allOwnKeys: n } = {}) => (Xt(e, (o, c) => {
  r && ke(o) ? t[c] = $s(o, r) : t[c] = o;
}, { allOwnKeys: n }), t), Ai = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), ki = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Di = (t, e, r, n) => {
  let o, c, u;
  const l = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), c = o.length; c-- > 0; )
      u = o[c], (!n || n(u, t, e)) && !l[u] && (e[u] = t[u], l[u] = !0);
    t = r !== !1 && Dn(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Li = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, xi = (t) => {
  if (!t) return null;
  if (jt(t)) return t;
  let e = t.length;
  if (!Hs(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Fi = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Dn(Uint8Array)), ji = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const c = o.value;
    e.call(t, c[0], c[1]);
  }
}, Ni = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Ui = Le("HTMLFormElement"), Ii = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), bs = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Mi = Le("RegExp"), zs = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Xt(r, (o, c) => {
    let u;
    (u = e(o, c, t)) !== !1 && (n[c] = u || o);
  }), Object.defineProperties(t, n);
}, Bi = (t) => {
  zs(t, (e, r) => {
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
}, Vi = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((c) => {
      r[c] = !0;
    });
  };
  return jt(t) ? n(t) : n(String(t).split(e)), r;
}, $i = () => {
}, qi = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, an = "abcdefghijklmnopqrstuvwxyz", gs = "0123456789", Ys = {
  DIGIT: gs,
  ALPHA: an,
  ALPHA_DIGIT: an + an.toUpperCase() + gs
}, Hi = (t = 16, e = Ys.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Gi(t) {
  return !!(t && ke(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Wi = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (Lr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const c = jt(n) ? [] : {};
        return Xt(n, (u, l) => {
          const b = r(u, o + 1);
          !Kt(b) && (c[l] = b);
        }), e[o] = void 0, c;
      }
    }
    return n;
  };
  return r(t, 0);
}, zi = Le("AsyncFunction"), Yi = (t) => t && (Lr(t) || ke(t)) && ke(t.then) && ke(t.catch), Ks = ((t, e) => t ? setImmediate : e ? ((r, n) => (ht.addEventListener("message", ({ source: o, data: c }) => {
  o === ht && c === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), ht.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ke(ht.postMessage)
), Ki = typeof queueMicrotask < "u" ? queueMicrotask.bind(ht) : typeof process < "u" && process.nextTick || Ks, h = {
  isArray: jt,
  isArrayBuffer: qs,
  isBuffer: di,
  isFormData: Ri,
  isArrayBufferView: hi,
  isString: pi,
  isNumber: Hs,
  isBoolean: yi,
  isObject: Lr,
  isPlainObject: _r,
  isReadableStream: wi,
  isRequest: Si,
  isResponse: Oi,
  isHeaders: Ci,
  isUndefined: Kt,
  isDate: mi,
  isFile: vi,
  isBlob: bi,
  isRegExp: Mi,
  isFunction: ke,
  isStream: Ei,
  isURLSearchParams: _i,
  isTypedArray: Fi,
  isFileList: gi,
  forEach: Xt,
  merge: wn,
  extend: Pi,
  trim: Ti,
  stripBOM: Ai,
  inherits: ki,
  toFlatObject: Di,
  kindOf: kr,
  kindOfTest: Le,
  endsWith: Li,
  toArray: xi,
  forEachEntry: ji,
  matchAll: Ni,
  isHTMLForm: Ui,
  hasOwnProperty: bs,
  hasOwnProp: bs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zs,
  freezeMethods: Bi,
  toObjectSet: Vi,
  toCamelCase: Ii,
  noop: $i,
  toFiniteNumber: qi,
  findKey: Gs,
  global: ht,
  isContextDefined: Ws,
  ALPHABET: Ys,
  generateString: Hi,
  isSpecCompliantForm: Gi,
  toJSONObject: Wi,
  isAsyncFn: zi,
  isThenable: Yi,
  setImmediate: Ks,
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
const Js = F.prototype, Qs = {};
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
  Qs[t] = { value: t };
});
Object.defineProperties(F, Qs);
Object.defineProperty(Js, "isAxiosError", { value: !0 });
F.from = (t, e, r, n, o, c) => {
  const u = Object.create(Js);
  return h.toFlatObject(t, u, function(b) {
    return b !== Error.prototype;
  }, (l) => l !== "isAxiosError"), F.call(u, t.message, e, r, n, o), u.cause = t, u.name = t.name, c && Object.assign(u, c), u;
};
const Ji = null;
function Sn(t) {
  return h.isPlainObject(t) || h.isArray(t);
}
function Xs(t) {
  return h.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Es(t, e, r) {
  return t ? t.concat(e).map(function(o, c) {
    return o = Xs(o), !r && c ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function Qi(t) {
  return h.isArray(t) && !t.some(Sn);
}
const Xi = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function xr(t, e, r) {
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
      throw new F("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(O) || h.isTypedArray(O) ? b && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function y(O, P, S) {
    let B = O;
    if (O && !S && typeof O == "object") {
      if (h.endsWith(P, "{}"))
        P = n ? P : P.slice(0, -2), O = JSON.stringify(O);
      else if (h.isArray(O) && Qi(O) || (h.isFileList(O) || h.endsWith(P, "[]")) && (B = h.toArray(O)))
        return P = Xs(P), B.forEach(function(Y, ie) {
          !(h.isUndefined(Y) || Y === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? Es([P], ie, c) : u === null ? P : P + "[]",
            m(Y)
          );
        }), !1;
    }
    return Sn(O) ? !0 : (e.append(Es(S, P, c), m(O)), !1);
  }
  const g = [], j = Object.assign(Xi, {
    defaultVisitor: y,
    convertValue: m,
    isVisitable: Sn
  });
  function k(O, P) {
    if (!h.isUndefined(O)) {
      if (g.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + P.join("."));
      g.push(O), h.forEach(O, function(B, L) {
        (!(h.isUndefined(B) || B === null) && o.call(
          e,
          B,
          h.isString(L) ? L.trim() : L,
          P,
          j
        )) === !0 && k(B, P ? P.concat(L) : [L]);
      }), g.pop();
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
function Ln(t, e) {
  this._pairs = [], t && xr(t, this, e);
}
const Zs = Ln.prototype;
Zs.append = function(e, r) {
  this._pairs.push([e, r]);
};
Zs.toString = function(e) {
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
function eo(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Zi, o = r && r.serialize;
  let c;
  if (o ? c = o(e, r) : c = h.isURLSearchParams(e) ? e.toString() : new Ln(e, r).toString(n), c) {
    const u = t.indexOf("#");
    u !== -1 && (t = t.slice(0, u)), t += (t.indexOf("?") === -1 ? "?" : "&") + c;
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
const to = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ea = typeof URLSearchParams < "u" ? URLSearchParams : Ln, ta = typeof FormData < "u" ? FormData : null, ra = typeof Blob < "u" ? Blob : null, na = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ea,
    FormData: ta,
    Blob: ra
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xn = typeof window < "u" && typeof document < "u", On = typeof navigator == "object" && navigator || void 0, sa = xn && (!On || ["ReactNative", "NativeScript", "NS"].indexOf(On.product) < 0), oa = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ia = xn && window.location.href || "http://localhost", aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xn,
  hasStandardBrowserEnv: sa,
  hasStandardBrowserWebWorkerEnv: oa,
  navigator: On,
  origin: ia
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...aa,
  ...na
};
function ua(t, e) {
  return xr(t, new Pe.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, c) {
      return Pe.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
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
  let c;
  for (n = 0; n < o; n++)
    c = r[n], e[c] = t[c];
  return e;
}
function ro(t) {
  function e(r, n, o, c) {
    let u = r[c++];
    if (u === "__proto__") return !0;
    const l = Number.isFinite(+u), b = c >= r.length;
    return u = !u && h.isArray(o) ? o.length : u, b ? (h.hasOwnProp(o, u) ? o[u] = [o[u], n] : o[u] = n, !l) : ((!o[u] || !h.isObject(o[u])) && (o[u] = []), e(r, n, o[u], c) && h.isArray(o[u]) && (o[u] = la(o[u])), !l);
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
const Zt = {
  transitional: to,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, c = h.isObject(e);
    if (c && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
      return o ? JSON.stringify(ro(e)) : e;
    if (h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e) || h.isReadableStream(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (c) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ua(e, this.formSerializer).toString();
      if ((l = h.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return xr(
          l ? { "files[]": e } : e,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return c || o ? (r.setContentType("application/json", !1), fa(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Zt.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (h.isResponse(e) || h.isReadableStream(e))
      return e;
    if (e && h.isString(e) && (n && !this.responseType || o)) {
      const u = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (l) {
        if (u)
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
  Zt.headers[t] = {};
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
`).forEach(function(u) {
    o = u.indexOf(":"), r = u.substring(0, o).trim().toLowerCase(), n = u.substring(o + 1).trim(), !(!r || e[r] && da[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, ws = Symbol("internals");
function Wt(t) {
  return t && String(t).trim().toLowerCase();
}
function wr(t) {
  return t === !1 || t == null ? t : h.isArray(t) ? t.map(wr) : String(t);
}
function pa(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const ya = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function un(t, e, r, n, o) {
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
      const y = Wt(b);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const g = h.findKey(o, y);
      (!g || o[g] === void 0 || m === !0 || m === void 0 && o[g] !== !1) && (o[g || b] = wr(l));
    }
    const u = (l, b) => h.forEach(l, (m, y) => c(m, y, b));
    if (h.isPlainObject(e) || e instanceof this.constructor)
      u(e, r);
    else if (h.isString(e) && (e = e.trim()) && !ya(e))
      u(ha(e), r);
    else if (h.isHeaders(e))
      for (const [l, b] of e.entries())
        c(b, l, n);
    else
      e != null && c(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = Wt(e), e) {
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
    if (e = Wt(e), e) {
      const n = h.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || un(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function c(u) {
      if (u = Wt(u), u) {
        const l = h.findKey(n, u);
        l && (!r || un(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return h.isArray(e) ? e.forEach(c) : c(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const c = r[n];
      (!e || un(this, this[c], c, e, !0)) && (delete this[c], o = !0);
    }
    return o;
  }
  normalize(e) {
    const r = this, n = {};
    return h.forEach(this, (o, c) => {
      const u = h.findKey(n, c);
      if (u) {
        r[u] = wr(o), delete r[c];
        return;
      }
      const l = e ? ma(c) : String(c).trim();
      l !== c && delete r[c], r[l] = wr(o), n[l] = !0;
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
    function c(u) {
      const l = Wt(u);
      n[l] || (va(o, u), n[l] = !0);
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
function cn(t, e) {
  const r = this || Zt, n = e || r, o = Ae.from(n.headers);
  let c = n.data;
  return h.forEach(t, function(l) {
    c = l.call(r, c, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), c;
}
function no(t) {
  return !!(t && t.__CANCEL__);
}
function Nt(t, e, r) {
  F.call(this, t ?? "canceled", F.ERR_CANCELED, e, r), this.name = "CanceledError";
}
h.inherits(Nt, F, {
  __CANCEL__: !0
});
function so(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new F(
    "Request failed with status code " + r.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function ba(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ga(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, c = 0, u;
  return e = e !== void 0 ? e : 1e3, function(b) {
    const m = Date.now(), y = n[c];
    u || (u = m), r[o] = b, n[o] = m;
    let g = c, j = 0;
    for (; g !== o; )
      j += r[g++], g = g % t;
    if (o = (o + 1) % t, o === c && (c = (c + 1) % t), m - u < e)
      return;
    const k = y && m - y;
    return k ? Math.round(j * 1e3 / k) : void 0;
  };
}
function Ea(t, e) {
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
const Cr = (t, e, r = 3) => {
  let n = 0;
  const o = ga(50, 250);
  return Ea((c) => {
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
), _a = Pe.hasStandardBrowserEnv ? (
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
function wa(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Sa(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function oo(t, e) {
  return t && !wa(e) ? Sa(t, e) : e;
}
const Cs = (t) => t instanceof Ae ? { ...t } : t;
function gt(t, e) {
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
    headers: (m, y) => o(Cs(m), Cs(y), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, t, e)), function(y) {
    const g = b[y] || o, j = g(t[y], e[y], y);
    h.isUndefined(j) && g !== l || (r[y] = j);
  }), r;
}
const io = (t) => {
  const e = gt({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: c, headers: u, auth: l } = e;
  e.headers = u = Ae.from(u), e.url = eo(oo(e.baseURL, e.url), t.params, t.paramsSerializer), l && u.set(
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
  if (Pe.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(e)), n || n !== !1 && Ra(e.url))) {
    const m = o && c && _a.read(c);
    m && u.set(o, m);
  }
  return e;
}, Oa = typeof XMLHttpRequest < "u", Ca = Oa && function(t) {
  return new Promise(function(r, n) {
    const o = io(t);
    let c = o.data;
    const u = Ae.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: b, onDownloadProgress: m } = o, y, g, j, k, O;
    function P() {
      k && k(), O && O(), o.cancelToken && o.cancelToken.unsubscribe(y), o.signal && o.signal.removeEventListener("abort", y);
    }
    let S = new XMLHttpRequest();
    S.open(o.method.toUpperCase(), o.url, !0), S.timeout = o.timeout;
    function B() {
      if (!S)
        return;
      const Y = Ae.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), N = {
        data: !l || l === "text" || l === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: Y,
        config: t,
        request: S
      };
      so(function(he) {
        r(he), P();
      }, function(he) {
        n(he), P();
      }, N), S = null;
    }
    "onloadend" in S ? S.onloadend = B : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(B);
    }, S.onabort = function() {
      S && (n(new F("Request aborted", F.ECONNABORTED, t, S)), S = null);
    }, S.onerror = function() {
      n(new F("Network Error", F.ERR_NETWORK, t, S)), S = null;
    }, S.ontimeout = function() {
      let ie = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const N = o.transitional || to;
      o.timeoutErrorMessage && (ie = o.timeoutErrorMessage), n(new F(
        ie,
        N.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        t,
        S
      )), S = null;
    }, c === void 0 && u.setContentType(null), "setRequestHeader" in S && h.forEach(u.toJSON(), function(ie, N) {
      S.setRequestHeader(N, ie);
    }), h.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials), l && l !== "json" && (S.responseType = o.responseType), m && ([j, O] = Cr(m, !0), S.addEventListener("progress", j)), b && S.upload && ([g, k] = Cr(b), S.upload.addEventListener("progress", g), S.upload.addEventListener("loadend", k)), (o.cancelToken || o.signal) && (y = (Y) => {
      S && (n(!Y || Y.type ? new Nt(null, t, S) : Y), S.abort(), S = null);
    }, o.cancelToken && o.cancelToken.subscribe(y), o.signal && (o.signal.aborted ? y() : o.signal.addEventListener("abort", y)));
    const L = ba(o.url);
    if (L && Pe.protocols.indexOf(L) === -1) {
      n(new F("Unsupported protocol " + L + ":", F.ERR_BAD_REQUEST, t));
      return;
    }
    S.send(c || null);
  });
}, Ta = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const c = function(m) {
      if (!o) {
        o = !0, l();
        const y = m instanceof Error ? m : this.reason;
        n.abort(y instanceof F ? y : new Nt(y instanceof Error ? y.message : y));
      }
    };
    let u = e && setTimeout(() => {
      u = null, c(new F(`timeout ${e} of ms exceeded`, F.ETIMEDOUT));
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
}, Pa = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, Aa = async function* (t, e) {
  for await (const r of ka(t))
    yield* Pa(r, e);
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
}, Ts = (t, e, r, n) => {
  const o = Aa(t, e);
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
          let j = c += g;
          r(j);
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
}, Fr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ao = Fr && typeof ReadableStream == "function", Da = Fr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), uo = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, La = ao && uo(() => {
  let t = !1;
  const e = new Request(Pe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Ps = 64 * 1024, Cn = ao && uo(() => h.isReadableStream(new Response("").body)), Tr = {
  stream: Cn && ((t) => t.body)
};
Fr && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Tr[e] && (Tr[e] = h.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new F(`Response type '${e}' is not supported`, F.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const xa = async (t) => {
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
    return (await Da(t)).byteLength;
}, Fa = async (t, e) => {
  const r = h.toFiniteNumber(t.getContentLength());
  return r ?? xa(e);
}, ja = Fr && (async (t) => {
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
    fetchOptions: j
  } = io(t);
  m = m ? (m + "").toLowerCase() : "text";
  let k = Ta([o, c && c.toAbortSignal()], u), O;
  const P = k && k.unsubscribe && (() => {
    k.unsubscribe();
  });
  let S;
  try {
    if (b && La && r !== "get" && r !== "head" && (S = await Fa(y, n)) !== 0) {
      let N = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), se;
      if (h.isFormData(n) && (se = N.headers.get("content-type")) && y.setContentType(se), N.body) {
        const [he, Z] = Ss(
          S,
          Cr(Os(b))
        );
        n = Ts(N.body, Ps, he, Z);
      }
    }
    h.isString(g) || (g = g ? "include" : "omit");
    const B = "credentials" in Request.prototype;
    O = new Request(e, {
      ...j,
      signal: k,
      method: r.toUpperCase(),
      headers: y.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: B ? g : void 0
    });
    let L = await fetch(O);
    const Y = Cn && (m === "stream" || m === "response");
    if (Cn && (l || Y && P)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((we) => {
        N[we] = L[we];
      });
      const se = h.toFiniteNumber(L.headers.get("content-length")), [he, Z] = l && Ss(
        se,
        Cr(Os(l), !0)
      ) || [];
      L = new Response(
        Ts(L.body, Ps, he, () => {
          Z && Z(), P && P();
        }),
        N
      );
    }
    m = m || "text";
    let ie = await Tr[h.findKey(Tr, m) || "text"](L, t);
    return !Y && P && P(), await new Promise((N, se) => {
      so(N, se, {
        data: ie,
        headers: Ae.from(L.headers),
        status: L.status,
        statusText: L.statusText,
        config: t,
        request: O
      });
    });
  } catch (B) {
    throw P && P(), B && B.name === "TypeError" && /fetch/i.test(B.message) ? Object.assign(
      new F("Network Error", F.ERR_NETWORK, t, O),
      {
        cause: B.cause || B
      }
    ) : F.from(B, B && B.code, t, O);
  }
}), Tn = {
  http: Ji,
  xhr: Ca,
  fetch: ja
};
h.forEach(Tn, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const As = (t) => `- ${t}`, Na = (t) => h.isFunction(t) || t === null || t === !1, co = {
  getAdapter: (t) => {
    t = h.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let c = 0; c < e; c++) {
      r = t[c];
      let u;
      if (n = r, !Na(r) && (n = Tn[(u = String(r)).toLowerCase()], n === void 0))
        throw new F(`Unknown adapter '${u}'`);
      if (n)
        break;
      o[u || "#" + c] = n;
    }
    if (!n) {
      const c = Object.entries(o).map(
        ([l, b]) => `adapter ${l} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let u = e ? c.length > 1 ? `since :
` + c.map(As).join(`
`) : " " + As(c[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + u,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Tn
};
function ln(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Nt(null, t);
}
function ks(t) {
  return ln(t), t.headers = Ae.from(t.headers), t.data = cn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), co.getAdapter(t.adapter || Zt.adapter)(t).then(function(n) {
    return ln(t), n.data = cn.call(
      t,
      t.transformResponse,
      n
    ), n.headers = Ae.from(n.headers), n;
  }, function(n) {
    return no(n) || (ln(t), n && n.response && (n.response.data = cn.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = Ae.from(n.response.headers))), Promise.reject(n);
  });
}
const lo = "1.7.7", Fn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Fn[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ds = {};
Fn.transitional = function(e, r, n) {
  function o(c, u) {
    return "[Axios v" + lo + "] Transitional option '" + c + "'" + u + (n ? ". " + n : "");
  }
  return (c, u, l) => {
    if (e === !1)
      throw new F(
        o(u, " has been removed" + (r ? " in " + r : "")),
        F.ERR_DEPRECATED
      );
    return r && !Ds[u] && (Ds[u] = !0, console.warn(
      o(
        u,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(c, u, l) : !0;
  };
};
function Ua(t, e, r) {
  if (typeof t != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const c = n[o], u = e[c];
    if (u) {
      const l = t[c], b = l === void 0 || u(l, c, t);
      if (b !== !0)
        throw new F("option " + c + " must be " + b, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new F("Unknown option " + c, F.ERR_BAD_OPTION);
  }
}
const Pn = {
  assertOptions: Ua,
  validators: Fn
}, Je = Pn.validators;
class bt {
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = gt(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: c } = r;
    n !== void 0 && Pn.assertOptions(n, {
      silentJSONParsing: Je.transitional(Je.boolean),
      forcedJSONParsing: Je.transitional(Je.boolean),
      clarifyTimeoutError: Je.transitional(Je.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Pn.assertOptions(o, {
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
    let y, g = 0, j;
    if (!b) {
      const O = [ks.bind(this), void 0];
      for (O.unshift.apply(O, l), O.push.apply(O, m), j = O.length, y = Promise.resolve(r); g < j; )
        y = y.then(O[g++], O[g++]);
      return y;
    }
    j = l.length;
    let k = r;
    for (g = 0; g < j; ) {
      const O = l[g++], P = l[g++];
      try {
        k = O(k);
      } catch (S) {
        P.call(this, S);
        break;
      }
    }
    try {
      y = ks.call(this, k);
    } catch (O) {
      return Promise.reject(O);
    }
    for (g = 0, j = m.length; g < j; )
      y = y.then(m[g++], m[g++]);
    return y;
  }
  getUri(e) {
    e = gt(this.defaults, e);
    const r = oo(e.baseURL, e.url);
    return eo(r, e.params, e.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  bt.prototype[e] = function(r, n) {
    return this.request(gt(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(c, u, l) {
      return this.request(gt(l || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: u
      }));
    };
  }
  bt.prototype[e] = r(), bt.prototype[e + "Form"] = r(!0);
});
class jn {
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
      n.reason || (n.reason = new Nt(c, u, l), r(n.reason));
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
function Ia(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Ma(t) {
  return h.isObject(t) && t.isAxiosError === !0;
}
const An = {
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
Object.entries(An).forEach(([t, e]) => {
  An[e] = t;
});
function fo(t) {
  const e = new bt(t), r = $s(bt.prototype.request, e);
  return h.extend(r, bt.prototype, e, { allOwnKeys: !0 }), h.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return fo(gt(t, o));
  }, r;
}
const de = fo(Zt);
de.Axios = bt;
de.CanceledError = Nt;
de.CancelToken = jn;
de.isCancel = no;
de.VERSION = lo;
de.toFormData = xr;
de.AxiosError = F;
de.Cancel = de.CanceledError;
de.all = function(e) {
  return Promise.all(e);
};
de.spread = Ia;
de.isAxiosError = Ma;
de.mergeConfig = gt;
de.AxiosHeaders = Ae;
de.formToJSON = (t) => ro(h.isHTMLForm(t) ? new FormData(t) : t);
de.getAdapter = co.getAdapter;
de.HttpStatusCode = An;
de.default = de;
const Ba = {
  //Authentication
  BASE_URL: "ec2-13-234-20-64.ap-south-1.compute.amazonaws.com:80"
}, $e = de.create({
  baseURL: Ba.BASE_URL,
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "multipart/form-data"
  }
}), Va = () => localStorage.getItem("access_token"), $a = () => localStorage.getItem("refresh_token");
$e.interceptors.request.use(
  (t) => {
    const e = Va();
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
      const r = $a();
      if (r)
        try {
          const { data: n } = await de.post("https://7759-182-156-141-17.ngrok-free.app/auth/refresh-token", {
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
function Tt(t) {
  var e;
  if (de.isAxiosError(t)) {
    const r = ((e = t.response) == null ? void 0 : e.data) || {
      message: "An error occurred. Try after some time."
    };
    throw new Error(r.message);
  } else
    throw new Error("Unknown error occurred");
}
class jr {
  // Create a new Data
  async createData(e, r) {
    try {
      const n = await $e.post(e, r);
      return console.log(n.data), n.data;
    } catch (n) {
      Tt(n);
    }
  }
  // Get all Data
  async getData(e) {
    try {
      return (await $e.get(e)).data.data;
    } catch (r) {
      Tt(r);
    }
  }
  // Get an Data by ID
  async getDataById(e, r) {
    try {
      const n = await $e.get(`${e}/${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      Tt(n);
    }
  }
  // Update a data by ID
  async updateData(e, r, n) {
    try {
      const o = await $e.patch(`${e}/${r}`, n);
      return console.log(o.data), o.data;
    } catch (o) {
      Tt(o);
    }
  }
  // Delete an Data by ID
  async deleteData(e, r) {
    try {
      const n = await $e.delete(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      Tt(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(e, r) {
    try {
      const n = await $e.patch(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      Tt(n);
    }
  }
}
const rt = (t) => {
  const e = new jr();
  return Vs({ mutationFn: (r) => e.createData(t, r) });
}, Ue = (t, e) => {
  const r = new jr();
  return Bs({ queryKey: e, queryFn: () => r.getData(t) });
}, nt = (t, e, r) => {
  const n = new jr();
  return Bs({ queryKey: r, queryFn: () => n.getDataById(t, e) });
}, Ut = (t, e) => {
  const r = new jr();
  return Vs({ mutationFn: (n) => r.updateData(t, e, n) });
}, Ga = (t) => rt(t), Wa = (t) => Ue(t, ["getAllRFPA"]), za = (t, e) => nt(t, e, ["getRFPA"]), Ya = (t) => rt(t), Ka = (t) => Ue(t, ["getAllDealSlip"]), Ja = (t, e) => nt(t, e, ["getDealSlip"]), Qa = (t) => rt(t), Xa = (t) => Ue(t, ["getAllGRN"]), Za = (t) => Ue(t, ["getAllGRNNumbers"]), eu = (t, e) => nt(t, e, ["getGRN"]), tu = (t, e) => Ut(t, e), ru = (t) => rt(t), nu = (t) => Ue(t, ["getAllGRN"]), su = (t, e) => nt(t, e, ["getGRN"]), ou = (t, e) => Ut(t, e), iu = (t) => rt(t), au = (t) => Ue(t, ["getAllGRN"]), uu = (t, e) => nt(t, e, ["getGRN"]), cu = (t, e) => Ut(t, e), lu = (t) => rt(t), fu = (t) => Ue(t, ["getAllGRN"]), du = (t, e) => nt(t, e, ["getGRN"]), hu = (t, e) => Ut(t, e), pu = (t) => rt(t), yu = (t) => Ue(t, ["getAllGRN"]), mu = (t, e) => nt(t, e, ["getGRN"]), vu = (t, e) => Ut(t, e), bu = (t) => rt(t), gu = (t) => Ue(t, ["getAllDeliveryChallan"]), Eu = (t, e) => nt(t, e, ["getDeliveryChallan"]), Ru = (t, e) => Ut(t, e), _u = (t) => Ue(t, ["getAllDeliveryChallanNumbers"]);
export {
  Ha as PURCHASE_API_URL,
  Ya as useCreateDealSlip,
  bu as useCreateDeliveryChallan,
  Qa as useCreateGRN,
  ru as useCreateLPVoucher,
  iu as useCreateMCVoucher,
  lu as useCreatePMPVoucher,
  Ga as useCreateRFPA,
  pu as useCreateTPVoucher,
  Ka as useGetAllDealSlip,
  gu as useGetAllDeliveryChallan,
  _u as useGetAllDeliveryChallanNums,
  Xa as useGetAllGRN,
  Za as useGetAllGRNNums,
  nu as useGetAllLPVoucher,
  au as useGetAllMCVoucher,
  fu as useGetAllPMPVoucher,
  Wa as useGetAllRFPA,
  yu as useGetAllTPVoucher,
  Ja as useGetDealSlip,
  Eu as useGetDeliveryChallan,
  eu as useGetGRN,
  su as useGetLPVoucher,
  uu as useGetMCVoucher,
  du as useGetPMPVoucher,
  za as useGetRFPA,
  mu as useGetTPVoucher,
  Ru as useUpdateDeliveryChallan,
  tu as useUpdateGRN,
  ou as useUpdateLPVoucher,
  cu as useUpdateMCVoucher,
  hu as useUpdatePMPVoucher,
  vu as useUpdateTPVoucher
};
