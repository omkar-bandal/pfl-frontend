var is = (t) => {
  throw TypeError(t);
};
var on = (t, e, r) => e.has(t) || is("Cannot " + r);
var v = (t, e, r) => (on(t, e, "read from private field"), r ? r.call(t) : e.get(t)), re = (t, e, r) => e.has(t) ? is("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), I = (t, e, r, n) => (on(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), oe = (t, e, r) => (on(t, e, "access private method"), r);
const Ga = {
  //Purchase
  //RFPA
  GET_ALL_RFPA: "/rfpa/",
  GET_A_RFPA: "/rfpa",
  POST_RFPA: "/rfpa/",
  UPDATE_RFPA: "/rfpa",
  APPROVE_RFPA: "/rfpa/approve/",
  GET_ALL_RFPA_NO: "/rfpa/rfpanumbers/getAllRfpaNo",
  //Deal Slip
  GET_ALL_DEAL_SLIP: "/dealSlip/",
  GET_A_DEAL_SLIP: "/dealSlip",
  POST_DEAL_SLIP: "/dealSlip/",
  UPDATE_DEAL_SLIP: "/dealSlip",
  APPROVE_DEAL_SLIP: "/dealSlip/approve/",
  //GRN
  GET_ALL_GRN: "/grns/",
  GET_A_GRN: "/grns",
  POST_GRN: "/grns/",
  UPDATE_GRN: "/grns",
  APPROVE_GRN: "/grns/approve/",
  GET_ALL_GRN_NO: "/grns/grnnumbers/getAllgrnNo",
  //Payment Request
  GET_ALL_PAYMENT_REQ: "/paymentRequest/",
  GET_A_PAYMENT_REQ: " /paymentRequest/",
  POST_PAYMENT_REQ: "/paymentRequest",
  UPDATE_PAYMENT_REQ: "/paymentRequest",
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
  UPDATE_DELIVERY_CHALLAN: "/deliveryChallan",
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
function No() {
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
function Ie(t, e) {
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
var mt, et, At, Ls, Uo = (Ls = class extends Pr {
  constructor() {
    super();
    re(this, mt);
    re(this, et);
    re(this, At);
    I(this, At, (e) => {
      if (!Sr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    v(this, et) || this.setEventListener(v(this, At));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, et)) == null || e.call(this), I(this, et, void 0));
  }
  setEventListener(e) {
    var r;
    I(this, At, e), (r = v(this, et)) == null || r.call(this), I(this, et, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    v(this, mt) !== e && (I(this, mt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof v(this, mt) == "boolean" ? v(this, mt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, mt = new WeakMap(), et = new WeakMap(), At = new WeakMap(), Ls), Io = new Uo(), kt, tt, Dt, xs, Mo = (xs = class extends Pr {
  constructor() {
    super();
    re(this, kt, !0);
    re(this, tt);
    re(this, Dt);
    I(this, Dt, (e) => {
      if (!Sr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    v(this, tt) || this.setEventListener(v(this, Dt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, tt)) == null || e.call(this), I(this, tt, void 0));
  }
  setEventListener(e) {
    var r;
    I(this, Dt, e), (r = v(this, tt)) == null || r.call(this), I(this, tt, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    v(this, kt) !== e && (I(this, kt, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return v(this, kt);
  }
}, kt = new WeakMap(), tt = new WeakMap(), Dt = new WeakMap(), xs), Bo = new Mo();
function Vo(t) {
  return (t ?? "online") === "online" ? Bo.isOnline() : !0;
}
function $o() {
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
var Ar = $o();
function qo(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Vo(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Go() {
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
var Ce, G, Jt, _e, vt, Lt, Ue, Qt, xt, Ft, bt, gt, rt, Nt, K, zt, hn, pn, yn, mn, vn, bn, gn, js, Fs, Ho = (Fs = class extends Pr {
  constructor(e, r) {
    super();
    re(this, K);
    re(this, Ce);
    re(this, G);
    re(this, Jt);
    re(this, _e);
    re(this, vt);
    re(this, Lt);
    re(this, Ue);
    re(this, Qt);
    re(this, xt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    re(this, Ft);
    re(this, bt);
    re(this, gt);
    re(this, rt);
    re(this, Nt, /* @__PURE__ */ new Set());
    this.options = r, I(this, Ce, e), I(this, Ue, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, G).addObserver(this), ds(v(this, G), this.options) ? oe(this, K, zt).call(this) : this.updateResult(), oe(this, K, mn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return En(
      v(this, G),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return En(
      v(this, G),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, K, vn).call(this), oe(this, K, bn).call(this), v(this, G).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, o = v(this, G);
    if (this.options = v(this, Ce).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Ie(this.options.enabled, v(this, G)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, K, gn).call(this), v(this, G).setOptions(this.options), n._defaulted && !Or(this.options, n) && v(this, Ce).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, G),
      observer: this
    });
    const c = this.hasListeners();
    c && hs(
      v(this, G),
      o,
      this.options,
      n
    ) && oe(this, K, zt).call(this), this.updateResult(r), c && (v(this, G) !== o || Ie(this.options.enabled, v(this, G)) !== Ie(n.enabled, v(this, G)) || Er(this.options.staleTime, v(this, G)) !== Er(n.staleTime, v(this, G))) && oe(this, K, hn).call(this);
    const u = oe(this, K, pn).call(this);
    c && (v(this, G) !== o || Ie(this.options.enabled, v(this, G)) !== Ie(n.enabled, v(this, G)) || u !== v(this, rt)) && oe(this, K, yn).call(this, u);
  }
  getOptimisticResult(e) {
    const r = v(this, Ce).getQueryCache().build(v(this, Ce), e), n = this.createResult(r, e);
    return zo(this, n) && (I(this, _e, n), I(this, Lt, this.options), I(this, vt, v(this, G).state)), n;
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
    v(this, Nt).add(e);
  }
  getCurrentQuery() {
    return v(this, G);
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
    const n = v(this, G), o = this.options, c = v(this, _e), u = v(this, vt), l = v(this, Lt), m = e !== n ? e.state : v(this, Jt), { state: y } = e;
    let g = { ...y }, N = !1, k;
    if (r._optimisticResults) {
      const Z = this.hasListeners(), we = !Z && ds(e, r), Me = Z && hs(e, n, r, o);
      (we || Me) && (g = {
        ...g,
        ...qo(y.data, e.options)
      }), r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: O, errorUpdatedAt: P, status: S } = g;
    if (r.select && g.data !== void 0)
      if (c && g.data === (u == null ? void 0 : u.data) && r.select === v(this, Qt))
        k = v(this, xt);
      else
        try {
          I(this, Qt, r.select), k = r.select(g.data), k = fs(c == null ? void 0 : c.data, k, r), I(this, xt, k), I(this, Ue, null);
        } catch (Z) {
          I(this, Ue, Z);
        }
    else
      k = g.data;
    if (r.placeholderData !== void 0 && k === void 0 && S === "pending") {
      let Z;
      if (c != null && c.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        Z = c.data;
      else if (Z = typeof r.placeholderData == "function" ? r.placeholderData(
        (he = v(this, Ft)) == null ? void 0 : he.state.data,
        v(this, Ft)
      ) : r.placeholderData, r.select && Z !== void 0)
        try {
          Z = r.select(Z), I(this, Ue, null);
        } catch (we) {
          I(this, Ue, we);
        }
      Z !== void 0 && (S = "success", k = fs(
        c == null ? void 0 : c.data,
        Z,
        r
      ), N = !0);
    }
    v(this, Ue) && (O = v(this, Ue), k = v(this, xt), P = Date.now(), S = "error");
    const B = g.fetchStatus === "fetching", L = S === "pending", Y = S === "error", ie = L && B, j = k !== void 0;
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
      isLoadingError: Y && !j,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: N,
      isRefetchError: Y && j,
      isStale: kn(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = v(this, _e), n = this.createResult(v(this, G), this.options);
    if (I(this, vt, v(this, G).state), I(this, Lt, this.options), v(this, vt).data !== void 0 && I(this, Ft, v(this, G)), Or(n, r))
      return;
    I(this, _e, n);
    const o = {}, c = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: u } = this.options, l = typeof u == "function" ? u() : u;
      if (l === "all" || !l && !v(this, Nt).size)
        return !0;
      const b = new Set(
        l ?? v(this, Nt)
      );
      return this.options.throwOnError && b.add("error"), Object.keys(v(this, _e)).some((m) => {
        const y = m;
        return v(this, _e)[y] !== r[y] && b.has(y);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && c() && (o.listeners = !0), oe(this, K, js).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, K, mn).call(this);
  }
}, Ce = new WeakMap(), G = new WeakMap(), Jt = new WeakMap(), _e = new WeakMap(), vt = new WeakMap(), Lt = new WeakMap(), Ue = new WeakMap(), Qt = new WeakMap(), xt = new WeakMap(), Ft = new WeakMap(), bt = new WeakMap(), gt = new WeakMap(), rt = new WeakMap(), Nt = new WeakMap(), K = new WeakSet(), zt = function(e) {
  oe(this, K, gn).call(this);
  let r = v(this, G).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(No)), r;
}, hn = function() {
  oe(this, K, vn).call(this);
  const e = Er(
    this.options.staleTime,
    v(this, G)
  );
  if (Sr || v(this, _e).isStale || !as(e))
    return;
  const n = jo(v(this, _e).dataUpdatedAt, e) + 1;
  I(this, bt, setTimeout(() => {
    v(this, _e).isStale || this.updateResult();
  }, n));
}, pn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, G)) : this.options.refetchInterval) ?? !1;
}, yn = function(e) {
  oe(this, K, bn).call(this), I(this, rt, e), !(Sr || Ie(this.options.enabled, v(this, G)) === !1 || !as(v(this, rt)) || v(this, rt) === 0) && I(this, gt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Io.isFocused()) && oe(this, K, zt).call(this);
  }, v(this, rt)));
}, mn = function() {
  oe(this, K, hn).call(this), oe(this, K, yn).call(this, oe(this, K, pn).call(this));
}, vn = function() {
  v(this, bt) && (clearTimeout(v(this, bt)), I(this, bt, void 0));
}, bn = function() {
  v(this, gt) && (clearInterval(v(this, gt)), I(this, gt, void 0));
}, gn = function() {
  const e = v(this, Ce).getQueryCache().build(v(this, Ce), this.options);
  if (e === v(this, G))
    return;
  const r = v(this, G);
  I(this, G, e), I(this, Jt, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, js = function(e) {
  Ar.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(v(this, _e));
    }), v(this, Ce).getQueryCache().notify({
      query: v(this, G),
      type: "observerResultsUpdated"
    });
  });
}, Fs);
function Wo(t, e) {
  return Ie(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function ds(t, e) {
  return Wo(t, e) || t.state.data !== void 0 && En(t, e, e.refetchOnMount);
}
function En(t, e, r) {
  if (Ie(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && kn(t, e);
  }
  return !1;
}
function hs(t, e, r, n) {
  return (t !== e || Ie(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && kn(t, r);
}
function kn(t, e) {
  return Ie(e.enabled, t) !== !1 && t.isStaleByTime(Er(e.staleTime, t));
}
function zo(t, e) {
  return !Or(t.getCurrentResult(), e);
}
var nt, st, Te, qe, Ge, Rr, Rn, Ns, Yo = (Ns = class extends Pr {
  constructor(e, r) {
    super();
    re(this, Ge);
    re(this, nt);
    re(this, st);
    re(this, Te);
    re(this, qe);
    I(this, nt, e), this.setOptions(r), this.bindMethods(), oe(this, Ge, Rr).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = v(this, nt).defaultMutationOptions(e), Or(this.options, r) || v(this, nt).getMutationCache().notify({
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
    oe(this, Ge, Rr).call(this), oe(this, Ge, Rn).call(this, e);
  }
  getCurrentResult() {
    return v(this, st);
  }
  reset() {
    var e;
    (e = v(this, Te)) == null || e.removeObserver(this), I(this, Te, void 0), oe(this, Ge, Rr).call(this), oe(this, Ge, Rn).call(this);
  }
  mutate(e, r) {
    var n;
    return I(this, qe, r), (n = v(this, Te)) == null || n.removeObserver(this), I(this, Te, v(this, nt).getMutationCache().build(v(this, nt), this.options)), v(this, Te).addObserver(this), v(this, Te).execute(e);
  }
}, nt = new WeakMap(), st = new WeakMap(), Te = new WeakMap(), qe = new WeakMap(), Ge = new WeakSet(), Rr = function() {
  var r;
  const e = ((r = v(this, Te)) == null ? void 0 : r.state) ?? Go();
  I(this, st, {
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
      const y = v(this, st).variables, g = v(this, st).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = v(this, qe)).onSuccess) == null || n.call(r, e.data, y, g), (c = (o = v(this, qe)).onSettled) == null || c.call(o, e.data, null, y, g)) : (e == null ? void 0 : e.type) === "error" && ((l = (u = v(this, qe)).onError) == null || l.call(u, e.error, y, g), (m = (b = v(this, qe)).onSettled) == null || m.call(
        b,
        void 0,
        e.error,
        y,
        g
      ));
    }
    this.listeners.forEach((y) => {
      y(v(this, st));
    });
  });
}, Ns), _n = { exports: {} }, M = {};
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
function Ko() {
  if (ps) return M;
  ps = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), g = Symbol.iterator;
  function N(f) {
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
  var ie = Array.isArray, j = Object.prototype.hasOwnProperty, se = { current: null }, he = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(f, R, V) {
    var q, W = {}, ne = null, ee = null;
    if (R != null) for (q in R.ref !== void 0 && (ee = R.ref), R.key !== void 0 && (ne = "" + R.key), R) j.call(R, q) && !he.hasOwnProperty(q) && (W[q] = R[q]);
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
  function Me(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }
  function It(f) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(V) {
      return R[V];
    });
  }
  var ot = /\/+/g;
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
    if (ee) return ee = f, W = W(ee), f = q === "" ? "." + Ee(ee, 0) : q, ie(W) ? (V = "", f != null && (V = f.replace(ot, "$&/") + "/"), Se(W, R, V, "", function(pe) {
      return pe;
    })) : W != null && (Me(W) && (W = we(W, V + (!W.key || ee && ee.key === W.key ? "" : ("" + W.key).replace(ot, "$&/") + "/") + f)), R.push(W)), 1;
    if (ee = 0, q = q === "" ? "." : q + ":", ie(f)) for (var X = 0; X < f.length; X++) {
      ne = f[X];
      var J = q + Ee(ne, X);
      ee += Se(ne, R, V, J, W);
    }
    else if (J = N(f), typeof J == "function") for (f = J.call(f), X = 0; !(ne = f.next()).done; ) ne = ne.value, J = q + Ee(ne, X++), ee += Se(ne, R, V, J, W);
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
  function Le(f) {
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
  var T = { current: null }, Fe = { transition: null }, it = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: Fe, ReactCurrentOwner: se };
  function Be() {
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
    if (!Me(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, M.Component = S, M.Fragment = r, M.Profiler = o, M.PureComponent = L, M.StrictMode = n, M.Suspense = b, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = it, M.act = Be, M.cloneElement = function(f, R, V) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var q = O({}, f.props), W = f.key, ne = f.ref, ee = f._owner;
    if (R != null) {
      if (R.ref !== void 0 && (ne = R.ref, ee = se.current), R.key !== void 0 && (W = "" + R.key), f.type && f.type.defaultProps) var X = f.type.defaultProps;
      for (J in R) j.call(R, J) && !he.hasOwnProperty(J) && (q[J] = R[J] === void 0 && X !== void 0 ? X[J] : R[J]);
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
  }, M.isValidElement = Me, M.lazy = function(f) {
    return { $$typeof: y, _payload: { _status: -1, _result: f }, _init: Le };
  }, M.memo = function(f, R) {
    return { $$typeof: m, type: f, compare: R === void 0 ? null : R };
  }, M.startTransition = function(f) {
    var R = Fe.transition;
    Fe.transition = {};
    try {
      f();
    } finally {
      Fe.transition = R;
    }
  }, M.unstable_act = Be, M.useCallback = function(f, R) {
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
function Jo() {
  return ys || (ys = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), S = Symbol.iterator, B = "@@iterator";
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
      }, j = {
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
      var Me = !1, It = !1, ot = !1, Ee = !1, Se = !1, ve = {
        ReactCurrentDispatcher: Y,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: se
      };
      ve.ReactDebugCurrentFrame = he, ve.ReactCurrentActQueue = j;
      function Le(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          Fe("warn", s, d);
        }
      }
      function T(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          Fe("error", s, d);
        }
      }
      function Fe(s, i, d) {
        {
          var p = ve.ReactDebugCurrentFrame, w = p.getStackAddendum();
          w !== "" && (i += "%s", d = d.concat([w]));
          var A = d.map(function(C) {
            return String(C);
          });
          A.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, A);
        }
      }
      var it = {};
      function Be(s, i) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", w = p + "." + i;
          if (it[w])
            return;
          T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, p), it[w] = !0;
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
              Le("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
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
      function jr() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var er = Array.isArray;
      function _t(s) {
        return er(s);
      }
      function Ur(s) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function wt(s) {
        try {
          return Ye(s), !1;
        } catch {
          return !0;
        }
      }
      function Ye(s) {
        return "" + s;
      }
      function at(s) {
        if (wt(s))
          return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ur(s)), Ye(s);
      }
      function tr(s, i, d) {
        var p = s.displayName;
        if (p)
          return p;
        var w = i.displayName || i.name || "";
        return w !== "" ? d + "(" + w + ")" : d;
      }
      function ut(s) {
        return s.displayName || "Context";
      }
      function Ne(s) {
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
          case N:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case m:
              var i = s;
              return ut(i) + ".Consumer";
            case b:
              var d = s;
              return ut(d._context) + ".Provider";
            case y:
              return tr(s, s.render, "ForwardRef");
            case k:
              var p = s.displayName || null;
              return p !== null ? p : Ne(s.type) || "Memo";
            case O: {
              var w = s, A = w._payload, C = w._init;
              try {
                return Ne(C(A));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ct = Object.prototype.hasOwnProperty, St = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, rr, nr, Ot;
      Ot = {};
      function Mt(s) {
        if (ct.call(s, "ref")) {
          var i = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function Ke(s) {
        if (ct.call(s, "key")) {
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
          var i = Ne(se.current.type);
          Ot[i] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, s.ref), Ot[i] = !0);
        }
      }
      var lt = function(s, i, d, p, w, A, C) {
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
        var p, w = {}, A = null, C = null, x = null, H = null;
        if (i != null) {
          Mt(i) && (C = i.ref, or(i)), Ke(i) && (at(i.key), A = "" + i.key), x = i.__self === void 0 ? null : i.__self, H = i.__source === void 0 ? null : i.__source;
          for (p in i)
            ct.call(i, p) && !St.hasOwnProperty(p) && (w[p] = i[p]);
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
        return lt(s, A, C, x, H, se.current, w);
      }
      function Br(s, i) {
        var d = lt(s.type, i, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function Vr(s, i, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, w = R({}, s.props), A = s.key, C = s.ref, x = s._self, H = s._source, te = s._owner;
        if (i != null) {
          Mt(i) && (C = i.ref, te = se.current), Ke(i) && (at(i.key), A = "" + i.key);
          var ae;
          s.type && s.type.defaultProps && (ae = s.type.defaultProps);
          for (p in i)
            ct.call(i, p) && !St.hasOwnProperty(p) && (i[p] === void 0 && ae !== void 0 ? w[p] = ae[p] : w[p] = i[p]);
        }
        var ue = arguments.length - 2;
        if (ue === 1)
          w.children = d;
        else if (ue > 1) {
          for (var le = Array(ue), ye = 0; ye < ue; ye++)
            le[ye] = arguments[ye + 2];
          w.children = le;
        }
        return lt(s.type, A, C, x, H, te, w);
      }
      function Je(s) {
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
      var Ct = !1, ar = /\/+/g;
      function Ve(s) {
        return s.replace(ar, "$&/");
      }
      function ft(s, i) {
        return typeof s == "object" && s !== null && s.key != null ? (at(s.key), qr("" + s.key)) : i.toString(36);
      }
      function Qe(s, i, d, p, w) {
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
          var x = s, H = w(x), te = p === "" ? ir + ft(x, 0) : p;
          if (_t(H)) {
            var ae = "";
            te != null && (ae = Ve(te) + "/"), Qe(H, i, ae, "", function(Fo) {
              return Fo;
            });
          } else H != null && (Je(H) && (H.key && (!x || x.key !== H.key) && at(H.key), H = Br(
            H,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (H.key && (!x || x.key !== H.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ve("" + H.key) + "/"
            ) : "") + te
          )), i.push(H));
          return 1;
        }
        var ue, le, ye = 0, ge = p === "" ? ir : p + $r;
        if (_t(s))
          for (var gr = 0; gr < s.length; gr++)
            ue = s[gr], le = ge + ft(ue, gr), ye += Qe(ue, i, d, le, w);
        else {
          var sn = L(s);
          if (typeof sn == "function") {
            var ns = s;
            sn === ns.entries && (Ct || Le("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ct = !0);
            for (var Lo = sn.call(ns), ss, xo = 0; !(ss = Lo.next()).done; )
              ue = ss.value, le = ge + ft(ue, xo++), ye += Qe(ue, i, d, le, w);
          } else if (A === "object") {
            var os = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (os === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : os) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ye;
      }
      function dt(s, i, d) {
        if (s == null)
          return s;
        var p = [], w = 0;
        return Qe(s, p, "", "", function(A) {
          return i.call(d, A, w++);
        }), p;
      }
      function Gr(s) {
        var i = 0;
        return dt(s, function() {
          i++;
        }), i;
      }
      function ur(s, i, d) {
        dt(s, function() {
          i.apply(this, arguments);
        }, d);
      }
      function Hr(s) {
        return dt(s, function(i) {
          return i;
        }) || [];
      }
      function cr(s) {
        if (!Je(s))
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
                w || (Le("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", C), w = !0);
              }
            }
          }), i.Consumer = A;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var ht = -1, Bt = 0, Vt = 1, fr = 2;
      function Wr(s) {
        if (s._status === ht) {
          var i = s._result, d = i();
          if (d.then(function(A) {
            if (s._status === Bt || s._status === ht) {
              var C = s;
              C._status = Vt, C._result = A;
            }
          }, function(A) {
            if (s._status === Bt || s._status === ht) {
              var C = s;
              C._status = fr, C._result = A;
            }
          }), s._status === ht) {
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
          _status: ht,
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
        return !!(typeof s == "string" || typeof s == "function" || s === c || s === l || Se || s === u || s === g || s === N || Ee || s === P || Me || It || ot || typeof s == "object" && s !== null && (s.$$typeof === O || s.$$typeof === k || s.$$typeof === b || s.$$typeof === m || s.$$typeof === y || // This needs to include all possible module reference object
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
      function Xe(s, i, d) {
        var p = _();
        return p.useImperativeHandle(s, i, d);
      }
      function $e(s, i) {
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
      var qt = 0, jn, Un, In, Mn, Bn, Vn, $n;
      function qn() {
      }
      qn.__reactDisabledLog = !0;
      function po() {
        {
          if (qt === 0) {
            jn = console.log, Un = console.info, In = console.warn, Mn = console.error, Bn = console.group, Vn = console.groupCollapsed, $n = console.groupEnd;
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
      function yo() {
        {
          if (qt--, qt === 0) {
            var s = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: R({}, s, {
                value: jn
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
        var mo = typeof WeakMap == "function" ? WeakMap : Map;
        pr = new mo();
      }
      function Gn(s, i) {
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
        A = Qr.current, Qr.current = null, po();
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
`), H = p.stack.split(`
`), te = x.length - 1, ae = H.length - 1; te >= 1 && ae >= 0 && x[te] !== H[ae]; )
              ae--;
            for (; te >= 1 && ae >= 0; te--, ae--)
              if (x[te] !== H[ae]) {
                if (te !== 1 || ae !== 1)
                  do
                    if (te--, ae--, ae < 0 || x[te] !== H[ae]) {
                      var ue = `
` + x[te].replace(" at new ", " at ");
                      return s.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", s.displayName)), typeof s == "function" && pr.set(s, ue), ue;
                    }
                  while (te >= 1 && ae >= 0);
                break;
              }
          }
        } finally {
          Zr = !1, Qr.current = A, yo(), Error.prepareStackTrace = w;
        }
        var le = s ? s.displayName || s.name : "", ye = le ? hr(le) : "";
        return typeof s == "function" && pr.set(s, ye), ye;
      }
      function vo(s, i, d) {
        return Gn(s, !1);
      }
      function bo(s) {
        var i = s.prototype;
        return !!(i && i.isReactComponent);
      }
      function yr(s, i, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return Gn(s, bo(s));
        if (typeof s == "string")
          return hr(s);
        switch (s) {
          case g:
            return hr("Suspense");
          case N:
            return hr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case y:
              return vo(s.render);
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
      var Hn = {}, Wn = ve.ReactDebugCurrentFrame;
      function mr(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          Wn.setExtraStackFrame(d);
        } else
          Wn.setExtraStackFrame(null);
      }
      function go(s, i, d, p, w) {
        {
          var A = Function.call.bind(ct);
          for (var C in s)
            if (A(s, C)) {
              var x = void 0;
              try {
                if (typeof s[C] != "function") {
                  var H = Error((p || "React class") + ": " + d + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw H.name = "Invariant Violation", H;
                }
                x = s[C](i, C, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (te) {
                x = te;
              }
              x && !(x instanceof Error) && (mr(w), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, C, typeof x), mr(null)), x instanceof Error && !(x.message in Hn) && (Hn[x.message] = !0, mr(w), T("Failed %s type: %s", d, x.message), mr(null));
            }
        }
      }
      function Tt(s) {
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
          var s = Ne(se.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function Eo(s) {
        if (s !== void 0) {
          var i = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + i + ":" + d + ".";
        }
        return "";
      }
      function Ro(s) {
        return s != null ? Eo(s.__source) : "";
      }
      var Yn = {};
      function _o(s) {
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
          var d = _o(i);
          if (!Yn[d]) {
            Yn[d] = !0;
            var p = "";
            s && s._owner && s._owner !== se.current && (p = " It was passed a child from " + Ne(s._owner.type) + "."), Tt(s), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), Tt(null);
          }
        }
      }
      function Jn(s, i) {
        if (typeof s == "object") {
          if (_t(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              Je(p) && Kn(p, i);
            }
          else if (Je(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var w = L(s);
            if (typeof w == "function" && w !== s.entries)
              for (var A = w.call(s), C; !(C = A.next()).done; )
                Je(C.value) && Kn(C.value, i);
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
          } else if (i.PropTypes !== void 0 && !en) {
            en = !0;
            var w = Ne(i);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function wo(s) {
        {
          for (var i = Object.keys(s.props), d = 0; d < i.length; d++) {
            var p = i[d];
            if (p !== "children" && p !== "key") {
              Tt(s), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Tt(null);
              break;
            }
          }
          s.ref !== null && (Tt(s), T("Invalid attribute `ref` supplied to `React.Fragment`."), Tt(null));
        }
      }
      function Xn(s, i, d) {
        var p = a(s);
        if (!p) {
          var w = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = Ro(i);
          A ? w += A : w += zn();
          var C;
          s === null ? C = "null" : _t(s) ? C = "array" : s !== void 0 && s.$$typeof === n ? (C = "<" + (Ne(s.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : C = typeof s, T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, w);
        }
        var x = Mr.apply(this, arguments);
        if (x == null)
          return x;
        if (p)
          for (var H = 2; H < arguments.length; H++)
            Jn(arguments[H], s);
        return s === c ? wo(x) : Qn(x), x;
      }
      var Zn = !1;
      function So(s) {
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
      function Oo(s, i, d) {
        for (var p = Vr.apply(this, arguments), w = 2; w < arguments.length; w++)
          Jn(arguments[w], p.type);
        return Qn(p), p;
      }
      function Co(s, i) {
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
      var es = !1, vr = null;
      function To(s) {
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
      var Pt = 0, ts = !1;
      function rs(s) {
        {
          var i = Pt;
          Pt++, j.current === null && (j.current = []);
          var d = j.isBatchingLegacy, p;
          try {
            if (j.isBatchingLegacy = !0, p = s(), !d && j.didScheduleLegacyUpdate) {
              var w = j.current;
              w !== null && (j.didScheduleLegacyUpdate = !1, nn(w));
            }
          } catch (le) {
            throw br(i), le;
          } finally {
            j.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var A = p, C = !1, x = {
              then: function(le, ye) {
                C = !0, A.then(function(ge) {
                  br(i), Pt === 0 ? tn(ge, le, ye) : le(ge);
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
            var H = p;
            if (br(i), Pt === 0) {
              var te = j.current;
              te !== null && (nn(te), j.current = null);
              var ae = {
                then: function(le, ye) {
                  j.current === null ? (j.current = [], tn(H, le, ye)) : le(H);
                }
              };
              return ae;
            } else {
              var ue = {
                then: function(le, ye) {
                  le(H);
                }
              };
              return ue;
            }
          }
        }
      }
      function br(s) {
        s !== Pt - 1 && T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Pt = s;
      }
      function tn(s, i, d) {
        {
          var p = j.current;
          if (p !== null)
            try {
              nn(p), To(function() {
                p.length === 0 ? (j.current = null, i(s)) : tn(s, i, d);
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
      var Po = Xn, Ao = Oo, ko = So, Do = {
        map: dt,
        forEach: ur,
        count: Gr,
        toArray: Hr,
        only: cr
      };
      e.Children = Do, e.Component = q, e.Fragment = c, e.Profiler = l, e.PureComponent = J, e.StrictMode = u, e.Suspense = g, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, e.act = rs, e.cloneElement = Ao, e.createContext = lr, e.createElement = Po, e.createFactory = ko, e.createRef = jr, e.forwardRef = Yr, e.isValidElement = Je, e.lazy = zr, e.memo = E, e.startTransition = Co, e.unstable_act = rs, e.useCallback = fe, e.useContext = D, e.useDebugValue = $e, e.useDeferredValue = $t, e.useEffect = U, e.useId = Kr, e.useImperativeHandle = Xe, e.useInsertionEffect = be, e.useLayoutEffect = ce, e.useMemo = Oe, e.useReducer = Q, e.useRef = $, e.useState = z, e.useSyncExternalStore = Jr, e.useTransition = Re, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Yt, Yt.exports)), Yt.exports;
}
process.env.NODE_ENV === "production" ? _n.exports = Ko() : _n.exports = Jo();
var me = _n.exports, Gt = {};
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
function Qo() {
  if (ms) return Gt;
  ms = 1;
  var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, b, m) {
    var y, g = {}, N = null, k = null;
    m !== void 0 && (N = "" + m), b.key !== void 0 && (N = "" + b.key), b.ref !== void 0 && (k = b.ref);
    for (y in b) n.call(b, y) && !c.hasOwnProperty(y) && (g[y] = b[y]);
    if (l && l.defaultProps) for (y in b = l.defaultProps, b) g[y] === void 0 && (g[y] = b[y]);
    return { $$typeof: e, type: l, key: N, ref: k, props: g, _owner: o.current };
  }
  return Gt.Fragment = r, Gt.jsx = u, Gt.jsxs = u, Gt;
}
var Ht = {};
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
function Xo() {
  return vs || (vs = 1, process.env.NODE_ENV !== "production" && function() {
    var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), O = Symbol.iterator, P = "@@iterator";
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
    var ie = !1, j = !1, se = !1, he = !1, Z = !1, we;
    we = Symbol.for("react.module.reference");
    function Me(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === c || Z || a === o || a === m || a === y || he || a === k || ie || j || se || typeof a == "object" && a !== null && (a.$$typeof === N || a.$$typeof === g || a.$$typeof === u || a.$$typeof === l || a.$$typeof === b || // This needs to include all possible module reference object
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
    function ot(a) {
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
            return ot(E) + ".Consumer";
          case u:
            var _ = a;
            return ot(_._context) + ".Provider";
          case b:
            return It(a, a.render, "ForwardRef");
          case g:
            var D = a.displayName || null;
            return D !== null ? D : Ee(a.type) || "Memo";
          case N: {
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
    var Se = Object.assign, ve = 0, Le, T, Fe, it, Be, f, R;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function q() {
      {
        if (ve === 0) {
          Le = console.log, T = console.info, Fe = console.warn, it = console.error, Be = console.group, f = console.groupCollapsed, R = console.groupEnd;
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
              value: Le
            }),
            info: Se({}, a, {
              value: T
            }),
            warn: Se({}, a, {
              value: Fe
            }),
            error: Se({}, a, {
              value: it
            }),
            group: Se({}, a, {
              value: Be
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
      var jr = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new jr();
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
      var Xe = a ? a.displayName || a.name : "", $e = Xe ? X(Xe) : "";
      return typeof a == "function" && pe.set(a, $e), $e;
    }
    function _t(a, E, _) {
      return er(a, !1);
    }
    function Ur(a) {
      var E = a.prototype;
      return !!(E && E.isReactComponent);
    }
    function wt(a, E, _) {
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
            return _t(a.render);
          case g:
            return wt(a.type, E, _);
          case N: {
            var D = a, z = D._payload, Q = D._init;
            try {
              return wt(Q(z), E, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, at = {}, tr = B.ReactDebugCurrentFrame;
    function ut(a) {
      if (a) {
        var E = a._owner, _ = wt(a.type, a._source, E ? E.type : null);
        tr.setExtraStackFrame(_);
      } else
        tr.setExtraStackFrame(null);
    }
    function Ne(a, E, _, D, z) {
      {
        var Q = Function.call.bind(Ye);
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
            U && !(U instanceof Error) && (ut(z), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", _, $, typeof U), ut(null)), U instanceof Error && !(U.message in at) && (at[U.message] = !0, ut(z), L("Failed %s type: %s", _, U.message), ut(null));
          }
      }
    }
    var ct = Array.isArray;
    function St(a) {
      return ct(a);
    }
    function rr(a) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, _ = E && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return _;
      }
    }
    function nr(a) {
      try {
        return Ot(a), !1;
      } catch {
        return !0;
      }
    }
    function Ot(a) {
      return "" + a;
    }
    function Mt(a) {
      if (nr(a))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(a)), Ot(a);
    }
    var Ke = B.ReactCurrentOwner, Ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sr, or, lt;
    lt = {};
    function Mr(a) {
      if (Ye.call(a, "ref")) {
        var E = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Br(a) {
      if (Ye.call(a, "key")) {
        var E = Object.getOwnPropertyDescriptor(a, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Vr(a, E) {
      if (typeof a.ref == "string" && Ke.current && E && Ke.current.stateNode !== E) {
        var _ = Ee(Ke.current.type);
        lt[_] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ee(Ke.current.type), a.ref), lt[_] = !0);
      }
    }
    function Je(a, E) {
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
          Ye.call(E, Q) && !Ir.hasOwnProperty(Q) && ($[Q] = E[Q]);
        if (a && a.defaultProps) {
          var ce = a.defaultProps;
          for (Q in ce)
            $[Q] === void 0 && ($[Q] = ce[Q]);
        }
        if (U || be) {
          var fe = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          U && Je($, fe), be && ir($, fe);
        }
        return $r(a, U, be, z, D, Ke.current, $);
      }
    }
    var Ct = B.ReactCurrentOwner, ar = B.ReactDebugCurrentFrame;
    function Ve(a) {
      if (a) {
        var E = a._owner, _ = wt(a.type, a._source, E ? E.type : null);
        ar.setExtraStackFrame(_);
      } else
        ar.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function Qe(a) {
      return typeof a == "object" && a !== null && a.$$typeof === e;
    }
    function dt() {
      {
        if (Ct.current) {
          var a = Ee(Ct.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Gr(a) {
      return "";
    }
    var ur = {};
    function Hr(a) {
      {
        var E = dt();
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
        var _ = Hr(E);
        if (ur[_])
          return;
        ur[_] = !0;
        var D = "";
        a && a._owner && a._owner !== Ct.current && (D = " It was passed a child from " + Ee(a._owner.type) + "."), Ve(a), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, D), Ve(null);
      }
    }
    function lr(a, E) {
      {
        if (typeof a != "object")
          return;
        if (St(a))
          for (var _ = 0; _ < a.length; _++) {
            var D = a[_];
            Qe(D) && cr(D, E);
          }
        else if (Qe(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var z = S(a);
          if (typeof z == "function" && z !== a.entries)
            for (var Q = z.call(a), $; !($ = Q.next()).done; )
              Qe($.value) && cr($.value, E);
        }
      }
    }
    function ht(a) {
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
          Ne(_, a.props, "prop", D, a);
        } else if (E.PropTypes !== void 0 && !ft) {
          ft = !0;
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
            Ve(a), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Ve(null);
            break;
          }
        }
        a.ref !== null && (Ve(a), L("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var Vt = {};
    function fr(a, E, _, D, z, Q) {
      {
        var $ = Me(a);
        if (!$) {
          var U = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = Gr();
          be ? U += be : U += dt();
          var ce;
          a === null ? ce = "null" : St(a) ? ce = "array" : a !== void 0 && a.$$typeof === e ? (ce = "<" + (Ee(a.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof a, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, U);
        }
        var fe = qr(a, E, _, z, Q);
        if (fe == null)
          return fe;
        if ($) {
          var Oe = E.children;
          if (Oe !== void 0)
            if (D)
              if (St(Oe)) {
                for (var Xe = 0; Xe < Oe.length; Xe++)
                  lr(Oe[Xe], a);
                Object.freeze && Object.freeze(Oe);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lr(Oe, a);
        }
        if (Ye.call(E, "key")) {
          var $e = Ee(a), Re = Object.keys(E).filter(function(Jr) {
            return Jr !== "key";
          }), $t = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vt[$e + $t]) {
            var Kr = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            L(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $t, $e, Kr, $e), Vt[$e + $t] = !0;
          }
        }
        return a === n ? Bt(fe) : ht(fe), fe;
      }
    }
    function Wr(a, E, _) {
      return fr(a, E, _, !0);
    }
    function zr(a, E, _) {
      return fr(a, E, _, !1);
    }
    var Yr = zr, dr = Wr;
    Ht.Fragment = n, Ht.jsx = Yr, Ht.jsxs = dr;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? Qo() : Xo();
var Zo = me.createContext(
  void 0
), Us = (t) => {
  const e = me.useContext(Zo);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Is = me.createContext(!1), ei = () => me.useContext(Is);
Is.Provider;
function ti() {
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
var ri = me.createContext(ti()), ni = () => me.useContext(ri);
function Ms(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function si() {
}
var oi = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, ii = (t) => {
  me.useEffect(() => {
    t.clearReset();
  }, [t]);
}, ai = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && Ms(r, [t.error, n]), ui = (t) => {
  t.suspense && (typeof t.staleTime != "number" && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, ci = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, li = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function fi(t, e, r) {
  var m, y, g, N;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Us(), o = ei(), c = ni(), u = n.defaultQueryOptions(t);
  (y = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || y.call(
    m,
    u
  ), u._optimisticResults = o ? "isRestoring" : "optimistic", ui(u), oi(u, c), ii(c);
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
  }, [u, l]), ci(u, b))
    throw li(u, l, c);
  if (ai({
    result: b,
    errorResetBoundary: c,
    throwOnError: u.throwOnError,
    query: n.getQueryCache().get(u.queryHash)
  }))
    throw b.error;
  return (N = (g = n.getDefaultOptions().queries) == null ? void 0 : g._experimental_afterQuery) == null || N.call(
    g,
    u,
    b
  ), u.notifyOnChangeProps ? b : l.trackResult(b);
}
function Bs(t, e) {
  return fi(t, Ho);
}
function Vs(t, e) {
  const r = Us(), [n] = me.useState(
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
      (u) => n.subscribe(Ar.batchCalls(u)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), c = me.useCallback(
    (u, l) => {
      n.mutate(u, l).catch(si);
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
const { toString: di } = Object.prototype, { getPrototypeOf: Dn } = Object, kr = /* @__PURE__ */ ((t) => (e) => {
  const r = di.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), xe = (t) => (t = t.toLowerCase(), (e) => kr(e) === t), Dr = (t) => (e) => typeof e === t, { isArray: jt } = Array, Kt = Dr("undefined");
function hi(t) {
  return t !== null && !Kt(t) && t.constructor !== null && !Kt(t.constructor) && ke(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const qs = xe("ArrayBuffer");
function pi(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && qs(t.buffer), e;
}
const yi = Dr("string"), ke = Dr("function"), Gs = Dr("number"), Lr = (t) => t !== null && typeof t == "object", mi = (t) => t === !0 || t === !1, _r = (t) => {
  if (kr(t) !== "object")
    return !1;
  const e = Dn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, vi = xe("Date"), bi = xe("File"), gi = xe("Blob"), Ei = xe("FileList"), Ri = (t) => Lr(t) && ke(t.pipe), _i = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ke(t.append) && ((e = kr(t)) === "formdata" || // detect form-data instance
  e === "object" && ke(t.toString) && t.toString() === "[object FormData]"));
}, wi = xe("URLSearchParams"), [Si, Oi, Ci, Ti] = ["ReadableStream", "Request", "Response", "Headers"].map(xe), Pi = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Hs(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const yt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ws = (t) => !Kt(t) && t !== yt;
function wn() {
  const { caseless: t } = Ws(this) && this || {}, e = {}, r = (n, o) => {
    const c = t && Hs(e, o) || o;
    _r(e[c]) && _r(n) ? e[c] = wn(e[c], n) : _r(n) ? e[c] = wn({}, n) : jt(n) ? e[c] = n.slice() : e[c] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Xt(arguments[n], r);
  return e;
}
const Ai = (t, e, r, { allOwnKeys: n } = {}) => (Xt(e, (o, c) => {
  r && ke(o) ? t[c] = $s(o, r) : t[c] = o;
}, { allOwnKeys: n }), t), ki = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Di = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Li = (t, e, r, n) => {
  let o, c, u;
  const l = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), c = o.length; c-- > 0; )
      u = o[c], (!n || n(u, t, e)) && !l[u] && (e[u] = t[u], l[u] = !0);
    t = r !== !1 && Dn(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, xi = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Fi = (t) => {
  if (!t) return null;
  if (jt(t)) return t;
  let e = t.length;
  if (!Gs(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Ni = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Dn(Uint8Array)), ji = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const c = o.value;
    e.call(t, c[0], c[1]);
  }
}, Ui = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Ii = xe("HTMLFormElement"), Mi = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), bs = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Bi = xe("RegExp"), zs = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Xt(r, (o, c) => {
    let u;
    (u = e(o, c, t)) !== !1 && (n[c] = u || o);
  }), Object.defineProperties(t, n);
}, Vi = (t) => {
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
}, $i = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((c) => {
      r[c] = !0;
    });
  };
  return jt(t) ? n(t) : n(String(t).split(e)), r;
}, qi = () => {
}, Gi = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, an = "abcdefghijklmnopqrstuvwxyz", gs = "0123456789", Ys = {
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
function Wi(t) {
  return !!(t && ke(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const zi = (t) => {
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
}, Yi = xe("AsyncFunction"), Ki = (t) => t && (Lr(t) || ke(t)) && ke(t.then) && ke(t.catch), Ks = ((t, e) => t ? setImmediate : e ? ((r, n) => (yt.addEventListener("message", ({ source: o, data: c }) => {
  o === yt && c === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), yt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ke(yt.postMessage)
), Ji = typeof queueMicrotask < "u" ? queueMicrotask.bind(yt) : typeof process < "u" && process.nextTick || Ks, h = {
  isArray: jt,
  isArrayBuffer: qs,
  isBuffer: hi,
  isFormData: _i,
  isArrayBufferView: pi,
  isString: yi,
  isNumber: Gs,
  isBoolean: mi,
  isObject: Lr,
  isPlainObject: _r,
  isReadableStream: Si,
  isRequest: Oi,
  isResponse: Ci,
  isHeaders: Ti,
  isUndefined: Kt,
  isDate: vi,
  isFile: bi,
  isBlob: gi,
  isRegExp: Bi,
  isFunction: ke,
  isStream: Ri,
  isURLSearchParams: wi,
  isTypedArray: Ni,
  isFileList: Ei,
  forEach: Xt,
  merge: wn,
  extend: Ai,
  trim: Pi,
  stripBOM: ki,
  inherits: Di,
  toFlatObject: Li,
  kindOf: kr,
  kindOfTest: xe,
  endsWith: xi,
  toArray: Fi,
  forEachEntry: ji,
  matchAll: Ui,
  isHTMLForm: Ii,
  hasOwnProperty: bs,
  hasOwnProp: bs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zs,
  freezeMethods: Vi,
  toObjectSet: $i,
  toCamelCase: Mi,
  noop: qi,
  toFiniteNumber: Gi,
  findKey: Hs,
  global: yt,
  isContextDefined: Ws,
  ALPHABET: Ys,
  generateString: Hi,
  isSpecCompliantForm: Wi,
  toJSONObject: zi,
  isAsyncFn: Yi,
  isThenable: Ki,
  setImmediate: Ks,
  asap: Ji
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
const Qi = null;
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
function Xi(t) {
  return h.isArray(t) && !t.some(Sn);
}
const Zi = h.toFlatObject(h, {}, null, function(e) {
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
      else if (h.isArray(O) && Xi(O) || (h.isFileList(O) || h.endsWith(P, "[]")) && (B = h.toArray(O)))
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
  const g = [], N = Object.assign(Zi, {
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
          N
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
function ea(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function eo(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || ea, o = r && r.serialize;
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
}, ta = typeof URLSearchParams < "u" ? URLSearchParams : Ln, ra = typeof FormData < "u" ? FormData : null, na = typeof Blob < "u" ? Blob : null, sa = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ta,
    FormData: ra,
    Blob: na
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xn = typeof window < "u" && typeof document < "u", On = typeof navigator == "object" && navigator || void 0, oa = xn && (!On || ["ReactNative", "NativeScript", "NS"].indexOf(On.product) < 0), ia = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", aa = xn && window.location.href || "http://localhost", ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xn,
  hasStandardBrowserEnv: oa,
  hasStandardBrowserWebWorkerEnv: ia,
  navigator: On,
  origin: aa
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...ua,
  ...sa
};
function ca(t, e) {
  return xr(t, new Pe.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, c) {
      return Pe.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function la(t) {
  return h.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function fa(t) {
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
    return u = !u && h.isArray(o) ? o.length : u, b ? (h.hasOwnProp(o, u) ? o[u] = [o[u], n] : o[u] = n, !l) : ((!o[u] || !h.isObject(o[u])) && (o[u] = []), e(r, n, o[u], c) && h.isArray(o[u]) && (o[u] = fa(o[u])), !l);
  }
  if (h.isFormData(t) && h.isFunction(t.entries)) {
    const r = {};
    return h.forEachEntry(t, (n, o) => {
      e(la(n), o, r, 0);
    }), r;
  }
  return null;
}
function da(t, e, r) {
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
        return ca(e, this.formSerializer).toString();
      if ((l = h.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return xr(
          l ? { "files[]": e } : e,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return c || o ? (r.setContentType("application/json", !1), da(e)) : e;
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
const ha = h.toObjectSet([
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
]), pa = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(u) {
    o = u.indexOf(":"), r = u.substring(0, o).trim().toLowerCase(), n = u.substring(o + 1).trim(), !(!r || e[r] && ha[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, ws = Symbol("internals");
function Wt(t) {
  return t && String(t).trim().toLowerCase();
}
function wr(t) {
  return t === !1 || t == null ? t : h.isArray(t) ? t.map(wr) : String(t);
}
function ya(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const ma = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
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
function va(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function ba(t, e) {
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
    else if (h.isString(e) && (e = e.trim()) && !ma(e))
      u(pa(e), r);
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
          return ya(o);
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
      const l = e ? va(c) : String(c).trim();
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
      n[l] || (ba(o, u), n[l] = !0);
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
function Ut(t, e, r) {
  F.call(this, t ?? "canceled", F.ERR_CANCELED, e, r), this.name = "CanceledError";
}
h.inherits(Ut, F, {
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
function ga(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Ea(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, c = 0, u;
  return e = e !== void 0 ? e : 1e3, function(b) {
    const m = Date.now(), y = n[c];
    u || (u = m), r[o] = b, n[o] = m;
    let g = c, N = 0;
    for (; g !== o; )
      N += r[g++], g = g % t;
    if (o = (o + 1) % t, o === c && (c = (c + 1) % t), m - u < e)
      return;
    const k = y && m - y;
    return k ? Math.round(N * 1e3 / k) : void 0;
  };
}
function Ra(t, e) {
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
  const o = Ea(50, 250);
  return Ra((c) => {
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
}, Os = (t) => (...e) => h.asap(() => t(...e)), _a = Pe.hasStandardBrowserEnv ? (
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
), wa = Pe.hasStandardBrowserEnv ? (
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
function Sa(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Oa(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function oo(t, e) {
  return t && !Sa(e) ? Oa(t, e) : e;
}
const Cs = (t) => t instanceof Ae ? { ...t } : t;
function Rt(t, e) {
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
    const g = b[y] || o, N = g(t[y], e[y], y);
    h.isUndefined(N) && g !== l || (r[y] = N);
  }), r;
}
const io = (t) => {
  const e = Rt({}, t);
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
  if (Pe.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(e)), n || n !== !1 && _a(e.url))) {
    const m = o && c && wa.read(c);
    m && u.set(o, m);
  }
  return e;
}, Ca = typeof XMLHttpRequest < "u", Ta = Ca && function(t) {
  return new Promise(function(r, n) {
    const o = io(t);
    let c = o.data;
    const u = Ae.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: b, onDownloadProgress: m } = o, y, g, N, k, O;
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
      ), j = {
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
      }, j), S = null;
    }
    "onloadend" in S ? S.onloadend = B : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(B);
    }, S.onabort = function() {
      S && (n(new F("Request aborted", F.ECONNABORTED, t, S)), S = null);
    }, S.onerror = function() {
      n(new F("Network Error", F.ERR_NETWORK, t, S)), S = null;
    }, S.ontimeout = function() {
      let ie = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const j = o.transitional || to;
      o.timeoutErrorMessage && (ie = o.timeoutErrorMessage), n(new F(
        ie,
        j.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        t,
        S
      )), S = null;
    }, c === void 0 && u.setContentType(null), "setRequestHeader" in S && h.forEach(u.toJSON(), function(ie, j) {
      S.setRequestHeader(j, ie);
    }), h.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials), l && l !== "json" && (S.responseType = o.responseType), m && ([N, O] = Cr(m, !0), S.addEventListener("progress", N)), b && S.upload && ([g, k] = Cr(b), S.upload.addEventListener("progress", g), S.upload.addEventListener("loadend", k)), (o.cancelToken || o.signal) && (y = (Y) => {
      S && (n(!Y || Y.type ? new Ut(null, t, S) : Y), S.abort(), S = null);
    }, o.cancelToken && o.cancelToken.subscribe(y), o.signal && (o.signal.aborted ? y() : o.signal.addEventListener("abort", y)));
    const L = ga(o.url);
    if (L && Pe.protocols.indexOf(L) === -1) {
      n(new F("Unsupported protocol " + L + ":", F.ERR_BAD_REQUEST, t));
      return;
    }
    S.send(c || null);
  });
}, Pa = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const c = function(m) {
      if (!o) {
        o = !0, l();
        const y = m instanceof Error ? m : this.reason;
        n.abort(y instanceof F ? y : new Ut(y instanceof Error ? y.message : y));
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
}, Aa = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, ka = async function* (t, e) {
  for await (const r of Da(t))
    yield* Aa(r, e);
}, Da = async function* (t) {
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
  const o = ka(t, e);
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
          let N = c += g;
          r(N);
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
}, Fr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ao = Fr && typeof ReadableStream == "function", La = Fr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), uo = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, xa = ao && uo(() => {
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
const Fa = async (t) => {
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
    return (await La(t)).byteLength;
}, Na = async (t, e) => {
  const r = h.toFiniteNumber(t.getContentLength());
  return r ?? Fa(e);
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
    fetchOptions: N
  } = io(t);
  m = m ? (m + "").toLowerCase() : "text";
  let k = Pa([o, c && c.toAbortSignal()], u), O;
  const P = k && k.unsubscribe && (() => {
    k.unsubscribe();
  });
  let S;
  try {
    if (b && xa && r !== "get" && r !== "head" && (S = await Na(y, n)) !== 0) {
      let j = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), se;
      if (h.isFormData(n) && (se = j.headers.get("content-type")) && y.setContentType(se), j.body) {
        const [he, Z] = Ss(
          S,
          Cr(Os(b))
        );
        n = Ts(j.body, Ps, he, Z);
      }
    }
    h.isString(g) || (g = g ? "include" : "omit");
    const B = "credentials" in Request.prototype;
    O = new Request(e, {
      ...N,
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
      const j = {};
      ["status", "statusText", "headers"].forEach((we) => {
        j[we] = L[we];
      });
      const se = h.toFiniteNumber(L.headers.get("content-length")), [he, Z] = l && Ss(
        se,
        Cr(Os(l), !0)
      ) || [];
      L = new Response(
        Ts(L.body, Ps, he, () => {
          Z && Z(), P && P();
        }),
        j
      );
    }
    m = m || "text";
    let ie = await Tr[h.findKey(Tr, m) || "text"](L, t);
    return !Y && P && P(), await new Promise((j, se) => {
      so(j, se, {
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
  http: Qi,
  xhr: Ta,
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
const As = (t) => `- ${t}`, Ua = (t) => h.isFunction(t) || t === null || t === !1, co = {
  getAdapter: (t) => {
    t = h.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let c = 0; c < e; c++) {
      r = t[c];
      let u;
      if (n = r, !Ua(r) && (n = Tn[(u = String(r)).toLowerCase()], n === void 0))
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
    throw new Ut(null, t);
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
function Ia(t, e, r) {
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
  assertOptions: Ia,
  validators: Fn
}, Ze = Pn.validators;
class Et {
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Rt(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: c } = r;
    n !== void 0 && Pn.assertOptions(n, {
      silentJSONParsing: Ze.transitional(Ze.boolean),
      forcedJSONParsing: Ze.transitional(Ze.boolean),
      clarifyTimeoutError: Ze.transitional(Ze.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Pn.assertOptions(o, {
      encode: Ze.function,
      serialize: Ze.function
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
    let y, g = 0, N;
    if (!b) {
      const O = [ks.bind(this), void 0];
      for (O.unshift.apply(O, l), O.push.apply(O, m), N = O.length, y = Promise.resolve(r); g < N; )
        y = y.then(O[g++], O[g++]);
      return y;
    }
    N = l.length;
    let k = r;
    for (g = 0; g < N; ) {
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
    for (g = 0, N = m.length; g < N; )
      y = y.then(m[g++], m[g++]);
    return y;
  }
  getUri(e) {
    e = Rt(this.defaults, e);
    const r = oo(e.baseURL, e.url);
    return eo(r, e.params, e.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  Et.prototype[e] = function(r, n) {
    return this.request(Rt(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(c, u, l) {
      return this.request(Rt(l || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: u
      }));
    };
  }
  Et.prototype[e] = r(), Et.prototype[e + "Form"] = r(!0);
});
class Nn {
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
      n.reason || (n.reason = new Ut(c, u, l), r(n.reason));
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
      token: new Nn(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
function Ma(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Ba(t) {
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
  const e = new Et(t), r = $s(Et.prototype.request, e);
  return h.extend(r, Et.prototype, e, { allOwnKeys: !0 }), h.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return fo(Rt(t, o));
  }, r;
}
const de = fo(Zt);
de.Axios = Et;
de.CanceledError = Ut;
de.CancelToken = Nn;
de.isCancel = no;
de.VERSION = lo;
de.toFormData = xr;
de.AxiosError = F;
de.Cancel = de.CanceledError;
de.all = function(e) {
  return Promise.all(e);
};
de.spread = Ma;
de.isAxiosError = Ba;
de.mergeConfig = Rt;
de.AxiosHeaders = Ae;
de.formToJSON = (t) => ro(h.isHTMLForm(t) ? new FormData(t) : t);
de.getAdapter = co.getAdapter;
de.HttpStatusCode = An;
de.default = de;
const ho = {
  //Authentication
  BASE_URL: "http://ec2-3-109-211-250.ap-south-1.compute.amazonaws.com:80"
  // BASE_URL: "https://fbbe-182-156-141-17.ngrok-free.app",
}, je = de.create({
  baseURL: ho.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), Va = () => localStorage.getItem("access_token"), $a = () => localStorage.getItem("refresh_token");
je.interceptors.request.use(
  (t) => {
    const e = Va();
    return e && (t.headers.Authorization = `Bearer ${e}`), t;
  },
  (t) => Promise.reject(t)
);
je.interceptors.response.use(
  (t) => t,
  async (t) => {
    const e = t.config;
    if (t.response && t.response.status === 401 && !e._retry) {
      e._retry = !0;
      const r = $a();
      if (r)
        try {
          const { data: n } = await de.post(`${ho.BASE_URL}/auth/refresh-token`, {
            refreshToken: r
          });
          return localStorage.setItem("accessToken", n.accessToken), e.headers.Authorization = `Bearer ${n.accessToken}`, je(e);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(t);
  }
);
function pt(t) {
  var e;
  if (de.isAxiosError(t)) {
    const r = ((e = t.response) == null ? void 0 : e.data) || {
      message: "An error occurred. Try after some time."
    };
    throw new Error(r.message);
  } else
    throw new Error("Unknown error occurred");
}
class Nr {
  // Create a new Data
  async createData(e, r) {
    try {
      const n = await je.post(e, r);
      return console.log(n.data), n.data;
    } catch (n) {
      pt(n);
    }
  }
  // Get all Data
  async getData(e) {
    try {
      return (await je.get(e)).data.data;
    } catch (r) {
      pt(r);
    }
  }
  // Get an Data by ID
  async getDataById(e, r) {
    try {
      const n = await je.get(`${e}/${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      pt(n);
    }
  }
  // Get Data by Query
  async getDataByQuery(e, r) {
    try {
      const n = await je.get(`${e}?search=${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      pt(n);
    }
  }
  // Update a data by ID
  async updateData(e, r, n) {
    try {
      const o = await je.patch(`${e}/${r}`, n);
      return console.log(o.data), o.data;
    } catch (o) {
      pt(o);
    }
  }
  // Delete an Data by ID
  async deleteData(e, r) {
    try {
      const n = await je.delete(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      pt(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(e, r) {
    try {
      const n = await je.patch(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      pt(n);
    }
  }
}
const He = (t) => {
  const e = new Nr();
  return Vs({ mutationFn: (r) => e.createData(t, r) });
}, De = (t, e) => {
  const r = new Nr();
  return Bs({ queryKey: e, queryFn: () => r.getData(t) });
}, We = (t, e, r) => {
  const n = new Nr();
  return Bs({ queryKey: r, queryFn: () => n.getDataById(t, e), enabled: !!e });
}, ze = (t, e) => {
  const r = new Nr();
  return Vs({ mutationFn: (n) => r.updateData(t, e, n) });
}, Ha = (t) => He(t), Wa = (t) => De(t, ["getAllRFPA"]), za = (t, e) => We(t, e, ["getRFPA"]), Ya = (t, e) => ze(t, e), Ka = (t) => De(t, ["getAllRFPANumbers"]), Ja = (t) => He(t), Qa = (t) => De(t, ["getAllDealSlip"]), Xa = (t, e) => We(t, e, ["getDealSlip"]), Za = (t, e) => ze(t, e), eu = (t) => He(t), tu = (t) => De(t, ["getAllGRN"]), ru = (t) => De(t, ["getAllGRNNumbers"]), nu = (t, e) => We(t, e, ["getGRN"]), su = (t, e) => ze(t, e), ou = (t) => He(t), iu = (t) => De(t, ["getAllGRN"]), au = (t, e) => We(t, e, ["getGRN"]), uu = (t, e) => ze(t, e), cu = (t) => He(t), lu = (t) => De(t, ["getAllGRN"]), fu = (t, e) => We(t, e, ["getGRN", e]), du = (t, e) => ze(t, e), hu = (t) => He(t), pu = (t) => De(t, ["getAllGRN"]), yu = (t, e) => We(t, e, ["getPMPVoucher"]), mu = (t, e) => ze(t, e), vu = (t) => He(t), bu = (t) => De(t, ["getAllGRN"]), gu = (t, e) => We(t, e, ["getGRN"]), Eu = (t, e) => ze(t, e), Ru = (t) => He(t), _u = (t) => De(t, ["getAllDeliveryChallan"]), wu = (t, e) => We(t, e, ["getDeliveryChallan"]), Su = (t, e) => ze(t, e), Ou = (t) => De(t, ["getAllDeliveryChallanNumbers"]), Cu = (t) => He(t), Tu = (t) => De(t, ["getAllPaymentRequest"]), Pu = (t, e) => We(t, e, ["getPaymentRequest"]), Au = (t, e) => ze(t, e);
export {
  Ga as PURCHASE_API_URL,
  Ja as useCreateDealSlip,
  Ru as useCreateDeliveryChallan,
  eu as useCreateGRN,
  ou as useCreateLPVoucher,
  cu as useCreateMCVoucher,
  hu as useCreatePMPVoucher,
  Cu as useCreatePaymentRequest,
  Ha as useCreateRFPA,
  vu as useCreateTPVoucher,
  Qa as useGetAllDealSlip,
  _u as useGetAllDeliveryChallan,
  Ou as useGetAllDeliveryChallanNums,
  tu as useGetAllGRN,
  ru as useGetAllGRNNums,
  iu as useGetAllLPVoucher,
  lu as useGetAllMCVoucher,
  pu as useGetAllPMPVoucher,
  Tu as useGetAllPaymentRequest,
  Wa as useGetAllRFPA,
  Ka as useGetAllRFPANums,
  bu as useGetAllTPVoucher,
  Xa as useGetDealSlip,
  wu as useGetDeliveryChallan,
  nu as useGetGRN,
  au as useGetLPVoucher,
  fu as useGetMCVoucher,
  yu as useGetPMPVoucher,
  Pu as useGetPaymentRequest,
  za as useGetRFPA,
  gu as useGetTPVoucher,
  Za as useUpdateDealSlip,
  Su as useUpdateDeliveryChallan,
  su as useUpdateGRN,
  uu as useUpdateLPVoucher,
  du as useUpdateMCVoucher,
  mu as useUpdatePMPVoucher,
  Au as useUpdatePaymentRequest,
  Ya as useUpdateRFPA,
  Eu as useUpdateTPVoucher
};
