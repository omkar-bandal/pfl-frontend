var cs = (t) => {
  throw TypeError(t);
};
var an = (t, e, r) => e.has(t) || cs("Cannot " + r);
var v = (t, e, r) => (an(t, e, "read from private field"), r ? r.call(t) : e.get(t)), re = (t, e, r) => e.has(t) ? cs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), I = (t, e, r, n) => (an(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), oe = (t, e, r) => (an(t, e, "access private method"), r);
const Yi = {
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
  GET_ALL_DEAL_SLIP_NO: "/dealSlip/dealslipno/getAlldealslipNo",
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
var Ar = class {
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
}, Cr = typeof window > "u" || "Deno" in globalThis;
function Uo() {
}
function ls(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Io(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Rr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Me(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function fs(t) {
  return JSON.stringify(
    t,
    (e, r) => hn(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function dn(t, e) {
  if (t === e)
    return t;
  const r = ds(t) && ds(e);
  if (r || hn(t) && hn(e)) {
    const n = r ? t : Object.keys(t), o = n.length, i = r ? e : Object.keys(e), c = i.length, l = r ? [] : {};
    let g = 0;
    for (let m = 0; m < c; m++) {
      const y = r ? m : i[m];
      (!r && n.includes(y) || r) && t[y] === void 0 && e[y] === void 0 ? (l[y] = void 0, g++) : (l[y] = dn(t[y], e[y]), l[y] === t[y] && t[y] !== void 0 && g++);
    }
    return o === c && g === o ? t : l;
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
function ds(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function hn(t) {
  if (!hs(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!hs(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function hs(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ps(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return dn(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return dn(t, e);
  }
  return e;
}
var vt, rt, kt, Ns, Mo = (Ns = class extends Ar {
  constructor() {
    super();
    re(this, vt);
    re(this, rt);
    re(this, kt);
    I(this, kt, (e) => {
      if (!Cr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    v(this, rt) || this.setEventListener(v(this, kt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, rt)) == null || e.call(this), I(this, rt, void 0));
  }
  setEventListener(e) {
    var r;
    I(this, kt, e), (r = v(this, rt)) == null || r.call(this), I(this, rt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    v(this, vt) !== e && (I(this, vt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof v(this, vt) == "boolean" ? v(this, vt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, vt = new WeakMap(), rt = new WeakMap(), kt = new WeakMap(), Ns), $o = new Mo(), Dt, nt, Lt, js, Vo = (js = class extends Ar {
  constructor() {
    super();
    re(this, Dt, !0);
    re(this, nt);
    re(this, Lt);
    I(this, Lt, (e) => {
      if (!Cr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    v(this, nt) || this.setEventListener(v(this, Lt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, nt)) == null || e.call(this), I(this, nt, void 0));
  }
  setEventListener(e) {
    var r;
    I(this, Lt, e), (r = v(this, nt)) == null || r.call(this), I(this, nt, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    v(this, Dt) !== e && (I(this, Dt, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return v(this, Dt);
  }
}, Dt = new WeakMap(), nt = new WeakMap(), Lt = new WeakMap(), js), Bo = new Vo();
function qo(t) {
  return (t ?? "online") === "online" ? Bo.isOnline() : !0;
}
function Go() {
  let t = [], e = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  }, o = (l) => setTimeout(l, 0);
  const i = (l) => {
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
      i(() => {
        l(...g);
      });
    },
    schedule: i,
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
var kr = Go();
function Ho(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: qo(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Wo() {
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
var Te, G, Qt, we, gt, xt, Ie, Xt, Ft, Nt, bt, Et, st, jt, K, Yt, pn, yn, mn, vn, gn, bn, En, Ms, Us, zo = (Us = class extends Ar {
  constructor(e, r) {
    super();
    re(this, K);
    re(this, Te);
    re(this, G);
    re(this, Qt);
    re(this, we);
    re(this, gt);
    re(this, xt);
    re(this, Ie);
    re(this, Xt);
    re(this, Ft);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    re(this, Nt);
    re(this, bt);
    re(this, Et);
    re(this, st);
    re(this, jt, /* @__PURE__ */ new Set());
    this.options = r, I(this, Te, e), I(this, Ie, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, G).addObserver(this), ys(v(this, G), this.options) ? oe(this, K, Yt).call(this) : this.updateResult(), oe(this, K, vn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Rn(
      v(this, G),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Rn(
      v(this, G),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, K, gn).call(this), oe(this, K, bn).call(this), v(this, G).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, o = v(this, G);
    if (this.options = v(this, Te).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Me(this.options.enabled, v(this, G)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, K, En).call(this), v(this, G).setOptions(this.options), n._defaulted && !Or(this.options, n) && v(this, Te).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, G),
      observer: this
    });
    const i = this.hasListeners();
    i && ms(
      v(this, G),
      o,
      this.options,
      n
    ) && oe(this, K, Yt).call(this), this.updateResult(r), i && (v(this, G) !== o || Me(this.options.enabled, v(this, G)) !== Me(n.enabled, v(this, G)) || Rr(this.options.staleTime, v(this, G)) !== Rr(n.staleTime, v(this, G))) && oe(this, K, pn).call(this);
    const c = oe(this, K, yn).call(this);
    i && (v(this, G) !== o || Me(this.options.enabled, v(this, G)) !== Me(n.enabled, v(this, G)) || c !== v(this, st)) && oe(this, K, mn).call(this, c);
  }
  getOptimisticResult(e) {
    const r = v(this, Te).getQueryCache().build(v(this, Te), e), n = this.createResult(r, e);
    return Ko(this, n) && (I(this, we, n), I(this, xt, this.options), I(this, gt, v(this, G).state)), n;
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
    v(this, jt).add(e);
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
    const r = v(this, Te).defaultQueryOptions(e), n = v(this, Te).getQueryCache().build(v(this, Te), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    return oe(this, K, Yt).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), v(this, we)));
  }
  createResult(e, r) {
    var he;
    const n = v(this, G), o = this.options, i = v(this, we), c = v(this, gt), l = v(this, xt), m = e !== n ? e.state : v(this, Qt), { state: y } = e;
    let b = { ...y }, N = !1, k;
    if (r._optimisticResults) {
      const Z = this.hasListeners(), Se = !Z && ys(e, r), $e = Z && ms(e, n, r, o);
      (Se || $e) && (b = {
        ...b,
        ...Ho(y.data, e.options)
      }), r._optimisticResults === "isRestoring" && (b.fetchStatus = "idle");
    }
    let { error: C, errorUpdatedAt: P, status: S } = b;
    if (r.select && b.data !== void 0)
      if (i && b.data === (c == null ? void 0 : c.data) && r.select === v(this, Xt))
        k = v(this, Ft);
      else
        try {
          I(this, Xt, r.select), k = r.select(b.data), k = ps(i == null ? void 0 : i.data, k, r), I(this, Ft, k), I(this, Ie, null);
        } catch (Z) {
          I(this, Ie, Z);
        }
    else
      k = b.data;
    if (r.placeholderData !== void 0 && k === void 0 && S === "pending") {
      let Z;
      if (i != null && i.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        Z = i.data;
      else if (Z = typeof r.placeholderData == "function" ? r.placeholderData(
        (he = v(this, Nt)) == null ? void 0 : he.state.data,
        v(this, Nt)
      ) : r.placeholderData, r.select && Z !== void 0)
        try {
          Z = r.select(Z), I(this, Ie, null);
        } catch (Se) {
          I(this, Ie, Se);
        }
      Z !== void 0 && (S = "success", k = ps(
        i == null ? void 0 : i.data,
        Z,
        r
      ), N = !0);
    }
    v(this, Ie) && (C = v(this, Ie), k = v(this, Ft), P = Date.now(), S = "error");
    const $ = b.fetchStatus === "fetching", L = S === "pending", Y = S === "error", ae = L && $, j = k !== void 0;
    return {
      status: S,
      fetchStatus: b.fetchStatus,
      isPending: L,
      isSuccess: S === "success",
      isError: Y,
      isInitialLoading: ae,
      isLoading: ae,
      data: k,
      dataUpdatedAt: b.dataUpdatedAt,
      error: C,
      errorUpdatedAt: P,
      failureCount: b.fetchFailureCount,
      failureReason: b.fetchFailureReason,
      errorUpdateCount: b.errorUpdateCount,
      isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
      isFetchedAfterMount: b.dataUpdateCount > m.dataUpdateCount || b.errorUpdateCount > m.errorUpdateCount,
      isFetching: $,
      isRefetching: $ && !L,
      isLoadingError: Y && !j,
      isPaused: b.fetchStatus === "paused",
      isPlaceholderData: N,
      isRefetchError: Y && j,
      isStale: Dn(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = v(this, we), n = this.createResult(v(this, G), this.options);
    if (I(this, gt, v(this, G).state), I(this, xt, this.options), v(this, gt).data !== void 0 && I(this, Nt, v(this, G)), Or(n, r))
      return;
    I(this, we, n);
    const o = {}, i = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: c } = this.options, l = typeof c == "function" ? c() : c;
      if (l === "all" || !l && !v(this, jt).size)
        return !0;
      const g = new Set(
        l ?? v(this, jt)
      );
      return this.options.throwOnError && g.add("error"), Object.keys(v(this, we)).some((m) => {
        const y = m;
        return v(this, we)[y] !== r[y] && g.has(y);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && i() && (o.listeners = !0), oe(this, K, Ms).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, K, vn).call(this);
  }
}, Te = new WeakMap(), G = new WeakMap(), Qt = new WeakMap(), we = new WeakMap(), gt = new WeakMap(), xt = new WeakMap(), Ie = new WeakMap(), Xt = new WeakMap(), Ft = new WeakMap(), Nt = new WeakMap(), bt = new WeakMap(), Et = new WeakMap(), st = new WeakMap(), jt = new WeakMap(), K = new WeakSet(), Yt = function(e) {
  oe(this, K, En).call(this);
  let r = v(this, G).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(Uo)), r;
}, pn = function() {
  oe(this, K, gn).call(this);
  const e = Rr(
    this.options.staleTime,
    v(this, G)
  );
  if (Cr || v(this, we).isStale || !ls(e))
    return;
  const n = Io(v(this, we).dataUpdatedAt, e) + 1;
  I(this, bt, setTimeout(() => {
    v(this, we).isStale || this.updateResult();
  }, n));
}, yn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, G)) : this.options.refetchInterval) ?? !1;
}, mn = function(e) {
  oe(this, K, bn).call(this), I(this, st, e), !(Cr || Me(this.options.enabled, v(this, G)) === !1 || !ls(v(this, st)) || v(this, st) === 0) && I(this, Et, setInterval(() => {
    (this.options.refetchIntervalInBackground || $o.isFocused()) && oe(this, K, Yt).call(this);
  }, v(this, st)));
}, vn = function() {
  oe(this, K, pn).call(this), oe(this, K, mn).call(this, oe(this, K, yn).call(this));
}, gn = function() {
  v(this, bt) && (clearTimeout(v(this, bt)), I(this, bt, void 0));
}, bn = function() {
  v(this, Et) && (clearInterval(v(this, Et)), I(this, Et, void 0));
}, En = function() {
  const e = v(this, Te).getQueryCache().build(v(this, Te), this.options);
  if (e === v(this, G))
    return;
  const r = v(this, G);
  I(this, G, e), I(this, Qt, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, Ms = function(e) {
  kr.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(v(this, we));
    }), v(this, Te).getQueryCache().notify({
      query: v(this, G),
      type: "observerResultsUpdated"
    });
  });
}, Us);
function Yo(t, e) {
  return Me(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function ys(t, e) {
  return Yo(t, e) || t.state.data !== void 0 && Rn(t, e, e.refetchOnMount);
}
function Rn(t, e, r) {
  if (Me(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && Dn(t, e);
  }
  return !1;
}
function ms(t, e, r, n) {
  return (t !== e || Me(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && Dn(t, r);
}
function Dn(t, e) {
  return Me(e.enabled, t) !== !1 && t.isStaleByTime(Rr(e.staleTime, t));
}
function Ko(t, e) {
  return !Or(t.getCurrentResult(), e);
}
var ot, at, Pe, Ge, He, _r, _n, Is, Jo = (Is = class extends Ar {
  constructor(e, r) {
    super();
    re(this, He);
    re(this, ot);
    re(this, at);
    re(this, Pe);
    re(this, Ge);
    I(this, ot, e), this.setOptions(r), this.bindMethods(), oe(this, He, _r).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = v(this, ot).defaultMutationOptions(e), Or(this.options, r) || v(this, ot).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: v(this, Pe),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && fs(r.mutationKey) !== fs(this.options.mutationKey) ? this.reset() : ((n = v(this, Pe)) == null ? void 0 : n.state.status) === "pending" && v(this, Pe).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = v(this, Pe)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    oe(this, He, _r).call(this), oe(this, He, _n).call(this, e);
  }
  getCurrentResult() {
    return v(this, at);
  }
  reset() {
    var e;
    (e = v(this, Pe)) == null || e.removeObserver(this), I(this, Pe, void 0), oe(this, He, _r).call(this), oe(this, He, _n).call(this);
  }
  mutate(e, r) {
    var n;
    return I(this, Ge, r), (n = v(this, Pe)) == null || n.removeObserver(this), I(this, Pe, v(this, ot).getMutationCache().build(v(this, ot), this.options)), v(this, Pe).addObserver(this), v(this, Pe).execute(e);
  }
}, ot = new WeakMap(), at = new WeakMap(), Pe = new WeakMap(), Ge = new WeakMap(), He = new WeakSet(), _r = function() {
  var r;
  const e = ((r = v(this, Pe)) == null ? void 0 : r.state) ?? Wo();
  I(this, at, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, _n = function(e) {
  kr.batch(() => {
    var r, n, o, i, c, l, g, m;
    if (v(this, Ge) && this.hasListeners()) {
      const y = v(this, at).variables, b = v(this, at).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = v(this, Ge)).onSuccess) == null || n.call(r, e.data, y, b), (i = (o = v(this, Ge)).onSettled) == null || i.call(o, e.data, null, y, b)) : (e == null ? void 0 : e.type) === "error" && ((l = (c = v(this, Ge)).onError) == null || l.call(c, e.error, y, b), (m = (g = v(this, Ge)).onSettled) == null || m.call(
        g,
        void 0,
        e.error,
        y,
        b
      ));
    }
    this.listeners.forEach((y) => {
      y(v(this, at));
    });
  });
}, Is), wn = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function Qo() {
  if (vs) return M;
  vs = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.iterator;
  function N(f) {
    return f === null || typeof f != "object" ? null : (f = b && f[b] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var k = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, P = {};
  function S(f, R, V) {
    this.props = f, this.context = R, this.refs = P, this.updater = V || k;
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
  function L(f, R, V) {
    this.props = f, this.context = R, this.refs = P, this.updater = V || k;
  }
  var Y = L.prototype = new $();
  Y.constructor = L, C(Y, S.prototype), Y.isPureReactComponent = !0;
  var ae = Array.isArray, j = Object.prototype.hasOwnProperty, se = { current: null }, he = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  function Se(f, R) {
    return { $$typeof: t, type: f.type, key: R, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function $e(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }
  function Mt(f) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(V) {
      return R[V];
    });
  }
  var it = /\/+/g;
  function Re(f, R) {
    return typeof f == "object" && f !== null && f.key != null ? Mt("" + f.key) : R.toString(36);
  }
  function Ce(f, R, V, q, W) {
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
    if (ee) return ee = f, W = W(ee), f = q === "" ? "." + Re(ee, 0) : q, ae(W) ? (V = "", f != null && (V = f.replace(it, "$&/") + "/"), Ce(W, R, V, "", function(pe) {
      return pe;
    })) : W != null && ($e(W) && (W = Se(W, V + (!W.key || ee && ee.key === W.key ? "" : ("" + W.key).replace(it, "$&/") + "/") + f)), R.push(W)), 1;
    if (ee = 0, q = q === "" ? "." : q + ":", ae(f)) for (var X = 0; X < f.length; X++) {
      ne = f[X];
      var J = q + Re(ne, X);
      ee += Ce(ne, R, V, J, W);
    }
    else if (J = N(f), typeof J == "function") for (f = J.call(f), X = 0; !(ne = f.next()).done; ) ne = ne.value, J = q + Re(ne, X++), ee += Ce(ne, R, V, J, W);
    else if (ne === "object") throw R = String(f), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return ee;
  }
  function ve(f, R, V) {
    if (f == null) return f;
    var q = [], W = 0;
    return Ce(f, q, "", "", function(ne) {
      return R.call(V, ne, W++);
    }), q;
  }
  function xe(f) {
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
  var T = { current: null }, je = { transition: null }, ut = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: je, ReactCurrentOwner: se };
  function Ve() {
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
    if (!$e(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, M.Component = S, M.Fragment = r, M.Profiler = o, M.PureComponent = L, M.StrictMode = n, M.Suspense = g, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ut, M.act = Ve, M.cloneElement = function(f, R, V) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var q = C({}, f.props), W = f.key, ne = f.ref, ee = f._owner;
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
    return f = { $$typeof: c, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: i, _context: f }, f.Consumer = f;
  }, M.createElement = Z, M.createFactory = function(f) {
    var R = Z.bind(null, f);
    return R.type = f, R;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(f) {
    return { $$typeof: l, render: f };
  }, M.isValidElement = $e, M.lazy = function(f) {
    return { $$typeof: y, _payload: { _status: -1, _result: f }, _init: xe };
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
  }, M.unstable_act = Ve, M.useCallback = function(f, R) {
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
var Kt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Kt.exports;
var gs;
function Xo() {
  return gs || (gs = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), S = Symbol.iterator, $ = "@@iterator";
      function L(s) {
        if (s === null || typeof s != "object")
          return null;
        var a = S && s[S] || s[$];
        return typeof a == "function" ? a : null;
      }
      var Y = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ae = {
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
      function Se(s) {
        Z = s;
      }
      he.setExtraStackFrame = function(s) {
        Z = s;
      }, he.getCurrentStack = null, he.getStackAddendum = function() {
        var s = "";
        Z && (s += Z);
        var a = he.getCurrentStack;
        return a && (s += a() || ""), s;
      };
      var $e = !1, Mt = !1, it = !1, Re = !1, Ce = !1, ve = {
        ReactCurrentDispatcher: Y,
        ReactCurrentBatchConfig: ae,
        ReactCurrentOwner: se
      };
      ve.ReactDebugCurrentFrame = he, ve.ReactCurrentActQueue = j;
      function xe(s) {
        {
          for (var a = arguments.length, d = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
            d[p - 1] = arguments[p];
          je("warn", s, d);
        }
      }
      function T(s) {
        {
          for (var a = arguments.length, d = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
            d[p - 1] = arguments[p];
          je("error", s, d);
        }
      }
      function je(s, a, d) {
        {
          var p = ve.ReactDebugCurrentFrame, w = p.getStackAddendum();
          w !== "" && (a += "%s", d = d.concat([w]));
          var A = d.map(function(O) {
            return String(O);
          });
          A.unshift("Warning: " + a), Function.prototype.apply.call(console[s], console, A);
        }
      }
      var ut = {};
      function Ve(s, a) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", w = p + "." + a;
          if (ut[w])
            return;
          T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", a, p), ut[w] = !0;
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
        enqueueForceUpdate: function(s, a, d) {
          Ve(s, "forceUpdate");
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
        enqueueReplaceState: function(s, a, d, p) {
          Ve(s, "replaceState");
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
        enqueueSetState: function(s, a, d, p) {
          Ve(s, "setState");
        }
      }, R = Object.assign, V = {};
      Object.freeze(V);
      function q(s, a, d) {
        this.props = s, this.context = a, this.refs = V, this.updater = d || f;
      }
      q.prototype.isReactComponent = {}, q.prototype.setState = function(s, a) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, a, "setState");
      }, q.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var W = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ne = function(s, a) {
          Object.defineProperty(q.prototype, s, {
            get: function() {
              xe("%s(...) is deprecated in plain JavaScript React classes. %s", a[0], a[1]);
            }
          });
        };
        for (var ee in W)
          W.hasOwnProperty(ee) && ne(ee, W[ee]);
      }
      function X() {
      }
      X.prototype = q.prototype;
      function J(s, a, d) {
        this.props = s, this.context = a, this.refs = V, this.updater = d || f;
      }
      var pe = J.prototype = new X();
      pe.constructor = J, R(pe, q.prototype), pe.isPureReactComponent = !0;
      function Ur() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var tr = Array.isArray;
      function wt(s) {
        return tr(s);
      }
      function Ir(s) {
        {
          var a = typeof Symbol == "function" && Symbol.toStringTag, d = a && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function St(s) {
        try {
          return Ke(s), !1;
        } catch {
          return !0;
        }
      }
      function Ke(s) {
        return "" + s;
      }
      function ct(s) {
        if (St(s))
          return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ir(s)), Ke(s);
      }
      function rr(s, a, d) {
        var p = s.displayName;
        if (p)
          return p;
        var w = a.displayName || a.name || "";
        return w !== "" ? d + "(" + w + ")" : d;
      }
      function lt(s) {
        return s.displayName || "Context";
      }
      function Ue(s) {
        if (s == null)
          return null;
        if (typeof s.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
          return s.displayName || s.name || null;
        if (typeof s == "string")
          return s;
        switch (s) {
          case i:
            return "Fragment";
          case o:
            return "Portal";
          case l:
            return "Profiler";
          case c:
            return "StrictMode";
          case b:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case m:
              var a = s;
              return lt(a) + ".Consumer";
            case g:
              var d = s;
              return lt(d._context) + ".Provider";
            case y:
              return rr(s, s.render, "ForwardRef");
            case k:
              var p = s.displayName || null;
              return p !== null ? p : Ue(s.type) || "Memo";
            case C: {
              var w = s, A = w._payload, O = w._init;
              try {
                return Ue(O(A));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ft = Object.prototype.hasOwnProperty, Ct = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, nr, sr, Ot;
      Ot = {};
      function $t(s) {
        if (ft.call(s, "ref")) {
          var a = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function Je(s) {
        if (ft.call(s, "key")) {
          var a = Object.getOwnPropertyDescriptor(s, "key").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function Mr(s, a) {
        var d = function() {
          nr || (nr = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: d,
          configurable: !0
        });
      }
      function or(s, a) {
        var d = function() {
          sr || (sr = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: d,
          configurable: !0
        });
      }
      function ar(s) {
        if (typeof s.ref == "string" && se.current && s.__self && se.current.stateNode !== s.__self) {
          var a = Ue(se.current.type);
          Ot[a] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a, s.ref), Ot[a] = !0);
        }
      }
      var dt = function(s, a, d, p, w, A, O) {
        var x = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: s,
          key: a,
          ref: d,
          props: O,
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
      function $r(s, a, d) {
        var p, w = {}, A = null, O = null, x = null, H = null;
        if (a != null) {
          $t(a) && (O = a.ref, ar(a)), Je(a) && (ct(a.key), A = "" + a.key), x = a.__self === void 0 ? null : a.__self, H = a.__source === void 0 ? null : a.__source;
          for (p in a)
            ft.call(a, p) && !Ct.hasOwnProperty(p) && (w[p] = a[p]);
        }
        var te = arguments.length - 2;
        if (te === 1)
          w.children = d;
        else if (te > 1) {
          for (var ie = Array(te), ue = 0; ue < te; ue++)
            ie[ue] = arguments[ue + 2];
          Object.freeze && Object.freeze(ie), w.children = ie;
        }
        if (s && s.defaultProps) {
          var fe = s.defaultProps;
          for (p in fe)
            w[p] === void 0 && (w[p] = fe[p]);
        }
        if (A || O) {
          var ye = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          A && Mr(w, ye), O && or(w, ye);
        }
        return dt(s, A, O, x, H, se.current, w);
      }
      function Vr(s, a) {
        var d = dt(s.type, a, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function Br(s, a, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, w = R({}, s.props), A = s.key, O = s.ref, x = s._self, H = s._source, te = s._owner;
        if (a != null) {
          $t(a) && (O = a.ref, te = se.current), Je(a) && (ct(a.key), A = "" + a.key);
          var ie;
          s.type && s.type.defaultProps && (ie = s.type.defaultProps);
          for (p in a)
            ft.call(a, p) && !Ct.hasOwnProperty(p) && (a[p] === void 0 && ie !== void 0 ? w[p] = ie[p] : w[p] = a[p]);
        }
        var ue = arguments.length - 2;
        if (ue === 1)
          w.children = d;
        else if (ue > 1) {
          for (var fe = Array(ue), ye = 0; ye < ue; ye++)
            fe[ye] = arguments[ye + 2];
          w.children = fe;
        }
        return dt(s.type, A, O, x, H, te, w);
      }
      function Qe(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var ir = ".", qr = ":";
      function Gr(s) {
        var a = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(a, function(w) {
          return d[w];
        });
        return "$" + p;
      }
      var Tt = !1, ur = /\/+/g;
      function Be(s) {
        return s.replace(ur, "$&/");
      }
      function ht(s, a) {
        return typeof s == "object" && s !== null && s.key != null ? (ct(s.key), Gr("" + s.key)) : a.toString(36);
      }
      function Xe(s, a, d, p, w) {
        var A = typeof s;
        (A === "undefined" || A === "boolean") && (s = null);
        var O = !1;
        if (s === null)
          O = !0;
        else
          switch (A) {
            case "string":
            case "number":
              O = !0;
              break;
            case "object":
              switch (s.$$typeof) {
                case n:
                case o:
                  O = !0;
              }
          }
        if (O) {
          var x = s, H = w(x), te = p === "" ? ir + ht(x, 0) : p;
          if (wt(H)) {
            var ie = "";
            te != null && (ie = Be(te) + "/"), Xe(H, a, ie, "", function(jo) {
              return jo;
            });
          } else H != null && (Qe(H) && (H.key && (!x || x.key !== H.key) && ct(H.key), H = Vr(
            H,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (H.key && (!x || x.key !== H.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Be("" + H.key) + "/"
            ) : "") + te
          )), a.push(H));
          return 1;
        }
        var ue, fe, ye = 0, be = p === "" ? ir : p + qr;
        if (wt(s))
          for (var Er = 0; Er < s.length; Er++)
            ue = s[Er], fe = be + ht(ue, Er), ye += Xe(ue, a, d, fe, w);
        else {
          var on = L(s);
          if (typeof on == "function") {
            var as = s;
            on === as.entries && (Tt || xe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tt = !0);
            for (var Fo = on.call(as), is, No = 0; !(is = Fo.next()).done; )
              ue = is.value, fe = be + ht(ue, No++), ye += Xe(ue, a, d, fe, w);
          } else if (A === "object") {
            var us = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (us === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : us) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ye;
      }
      function pt(s, a, d) {
        if (s == null)
          return s;
        var p = [], w = 0;
        return Xe(s, p, "", "", function(A) {
          return a.call(d, A, w++);
        }), p;
      }
      function Hr(s) {
        var a = 0;
        return pt(s, function() {
          a++;
        }), a;
      }
      function cr(s, a, d) {
        pt(s, function() {
          a.apply(this, arguments);
        }, d);
      }
      function Wr(s) {
        return pt(s, function(a) {
          return a;
        }) || [];
      }
      function lr(s) {
        if (!Qe(s))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
      function fr(s) {
        var a = {
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
        a.Provider = {
          $$typeof: g,
          _context: a
        };
        var d = !1, p = !1, w = !1;
        {
          var A = {
            $$typeof: m,
            _context: a
          };
          Object.defineProperties(A, {
            Provider: {
              get: function() {
                return p || (p = !0, T("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), a.Provider;
              },
              set: function(O) {
                a.Provider = O;
              }
            },
            _currentValue: {
              get: function() {
                return a._currentValue;
              },
              set: function(O) {
                a._currentValue = O;
              }
            },
            _currentValue2: {
              get: function() {
                return a._currentValue2;
              },
              set: function(O) {
                a._currentValue2 = O;
              }
            },
            _threadCount: {
              get: function() {
                return a._threadCount;
              },
              set: function(O) {
                a._threadCount = O;
              }
            },
            Consumer: {
              get: function() {
                return d || (d = !0, T("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), a.Consumer;
              }
            },
            displayName: {
              get: function() {
                return a.displayName;
              },
              set: function(O) {
                w || (xe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", O), w = !0);
              }
            }
          }), a.Consumer = A;
        }
        return a._currentRenderer = null, a._currentRenderer2 = null, a;
      }
      var yt = -1, Vt = 0, Bt = 1, dr = 2;
      function zr(s) {
        if (s._status === yt) {
          var a = s._result, d = a();
          if (d.then(function(A) {
            if (s._status === Vt || s._status === yt) {
              var O = s;
              O._status = Bt, O._result = A;
            }
          }, function(A) {
            if (s._status === Vt || s._status === yt) {
              var O = s;
              O._status = dr, O._result = A;
            }
          }), s._status === yt) {
            var p = s;
            p._status = Vt, p._result = d;
          }
        }
        if (s._status === Bt) {
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
      function Yr(s) {
        var a = {
          // We use these fields to store the result.
          _status: yt,
          _result: s
        }, d = {
          $$typeof: C,
          _payload: a,
          _init: zr
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
      function Kr(s) {
        s != null && s.$$typeof === k ? T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? T("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && T("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var a = {
          $$typeof: y,
          render: s
        };
        {
          var d;
          Object.defineProperty(a, "displayName", {
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
        return a;
      }
      var hr;
      hr = Symbol.for("react.module.reference");
      function u(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === i || s === l || Ce || s === c || s === b || s === N || Re || s === P || $e || Mt || it || typeof s == "object" && s !== null && (s.$$typeof === C || s.$$typeof === k || s.$$typeof === g || s.$$typeof === m || s.$$typeof === y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === hr || s.getModuleId !== void 0));
      }
      function E(s, a) {
        u(s) || T("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
        var d = {
          $$typeof: k,
          type: s,
          compare: a === void 0 ? null : a
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
        var a = _();
        if (s._context !== void 0) {
          var d = s._context;
          d.Consumer === s ? T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === s && T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return a.useContext(s);
      }
      function z(s) {
        var a = _();
        return a.useState(s);
      }
      function Q(s, a, d) {
        var p = _();
        return p.useReducer(s, a, d);
      }
      function B(s) {
        var a = _();
        return a.useRef(s);
      }
      function U(s, a) {
        var d = _();
        return d.useEffect(s, a);
      }
      function ge(s, a) {
        var d = _();
        return d.useInsertionEffect(s, a);
      }
      function le(s, a) {
        var d = _();
        return d.useLayoutEffect(s, a);
      }
      function de(s, a) {
        var d = _();
        return d.useCallback(s, a);
      }
      function Oe(s, a) {
        var d = _();
        return d.useMemo(s, a);
      }
      function Ze(s, a, d) {
        var p = _();
        return p.useImperativeHandle(s, a, d);
      }
      function qe(s, a) {
        {
          var d = _();
          return d.useDebugValue(s, a);
        }
      }
      function _e() {
        var s = _();
        return s.useTransition();
      }
      function qt(s) {
        var a = _();
        return a.useDeferredValue(s);
      }
      function Jr() {
        var s = _();
        return s.useId();
      }
      function Qr(s, a, d) {
        var p = _();
        return p.useSyncExternalStore(s, a, d);
      }
      var Gt = 0, Mn, $n, Vn, Bn, qn, Gn, Hn;
      function Wn() {
      }
      Wn.__reactDisabledLog = !0;
      function mo() {
        {
          if (Gt === 0) {
            Mn = console.log, $n = console.info, Vn = console.warn, Bn = console.error, qn = console.group, Gn = console.groupCollapsed, Hn = console.groupEnd;
            var s = {
              configurable: !0,
              enumerable: !0,
              value: Wn,
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
          Gt++;
        }
      }
      function vo() {
        {
          if (Gt--, Gt === 0) {
            var s = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: R({}, s, {
                value: Mn
              }),
              info: R({}, s, {
                value: $n
              }),
              warn: R({}, s, {
                value: Vn
              }),
              error: R({}, s, {
                value: Bn
              }),
              group: R({}, s, {
                value: qn
              }),
              groupCollapsed: R({}, s, {
                value: Gn
              }),
              groupEnd: R({}, s, {
                value: Hn
              })
            });
          }
          Gt < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xr = ve.ReactCurrentDispatcher, Zr;
      function pr(s, a, d) {
        {
          if (Zr === void 0)
            try {
              throw Error();
            } catch (w) {
              var p = w.stack.trim().match(/\n( *(at )?)/);
              Zr = p && p[1] || "";
            }
          return `
` + Zr + s;
        }
      }
      var en = !1, yr;
      {
        var go = typeof WeakMap == "function" ? WeakMap : Map;
        yr = new go();
      }
      function zn(s, a) {
        if (!s || en)
          return "";
        {
          var d = yr.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        en = !0;
        var w = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var A;
        A = Xr.current, Xr.current = null, mo();
        try {
          if (a) {
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
              } catch (be) {
                p = be;
              }
              Reflect.construct(s, [], O);
            } else {
              try {
                O.call();
              } catch (be) {
                p = be;
              }
              s.call(O.prototype);
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
            for (var x = be.stack.split(`
`), H = p.stack.split(`
`), te = x.length - 1, ie = H.length - 1; te >= 1 && ie >= 0 && x[te] !== H[ie]; )
              ie--;
            for (; te >= 1 && ie >= 0; te--, ie--)
              if (x[te] !== H[ie]) {
                if (te !== 1 || ie !== 1)
                  do
                    if (te--, ie--, ie < 0 || x[te] !== H[ie]) {
                      var ue = `
` + x[te].replace(" at new ", " at ");
                      return s.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", s.displayName)), typeof s == "function" && yr.set(s, ue), ue;
                    }
                  while (te >= 1 && ie >= 0);
                break;
              }
          }
        } finally {
          en = !1, Xr.current = A, vo(), Error.prepareStackTrace = w;
        }
        var fe = s ? s.displayName || s.name : "", ye = fe ? pr(fe) : "";
        return typeof s == "function" && yr.set(s, ye), ye;
      }
      function bo(s, a, d) {
        return zn(s, !1);
      }
      function Eo(s) {
        var a = s.prototype;
        return !!(a && a.isReactComponent);
      }
      function mr(s, a, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return zn(s, Eo(s));
        if (typeof s == "string")
          return pr(s);
        switch (s) {
          case b:
            return pr("Suspense");
          case N:
            return pr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case y:
              return bo(s.render);
            case k:
              return mr(s.type, a, d);
            case C: {
              var p = s, w = p._payload, A = p._init;
              try {
                return mr(A(w), a, d);
              } catch {
              }
            }
          }
        return "";
      }
      var Yn = {}, Kn = ve.ReactDebugCurrentFrame;
      function vr(s) {
        if (s) {
          var a = s._owner, d = mr(s.type, s._source, a ? a.type : null);
          Kn.setExtraStackFrame(d);
        } else
          Kn.setExtraStackFrame(null);
      }
      function Ro(s, a, d, p, w) {
        {
          var A = Function.call.bind(ft);
          for (var O in s)
            if (A(s, O)) {
              var x = void 0;
              try {
                if (typeof s[O] != "function") {
                  var H = Error((p || "React class") + ": " + d + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw H.name = "Invariant Violation", H;
                }
                x = s[O](a, O, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (te) {
                x = te;
              }
              x && !(x instanceof Error) && (vr(w), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, O, typeof x), vr(null)), x instanceof Error && !(x.message in Yn) && (Yn[x.message] = !0, vr(w), T("Failed %s type: %s", d, x.message), vr(null));
            }
        }
      }
      function Pt(s) {
        if (s) {
          var a = s._owner, d = mr(s.type, s._source, a ? a.type : null);
          Se(d);
        } else
          Se(null);
      }
      var tn;
      tn = !1;
      function Jn() {
        if (se.current) {
          var s = Ue(se.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function _o(s) {
        if (s !== void 0) {
          var a = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + a + ":" + d + ".";
        }
        return "";
      }
      function wo(s) {
        return s != null ? _o(s.__source) : "";
      }
      var Qn = {};
      function So(s) {
        var a = Jn();
        if (!a) {
          var d = typeof s == "string" ? s : s.displayName || s.name;
          d && (a = `

Check the top-level render call using <` + d + ">.");
        }
        return a;
      }
      function Xn(s, a) {
        if (!(!s._store || s._store.validated || s.key != null)) {
          s._store.validated = !0;
          var d = So(a);
          if (!Qn[d]) {
            Qn[d] = !0;
            var p = "";
            s && s._owner && s._owner !== se.current && (p = " It was passed a child from " + Ue(s._owner.type) + "."), Pt(s), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), Pt(null);
          }
        }
      }
      function Zn(s, a) {
        if (typeof s == "object") {
          if (wt(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              Qe(p) && Xn(p, a);
            }
          else if (Qe(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var w = L(s);
            if (typeof w == "function" && w !== s.entries)
              for (var A = w.call(s), O; !(O = A.next()).done; )
                Qe(O.value) && Xn(O.value, a);
          }
        }
      }
      function es(s) {
        {
          var a = s.type;
          if (a == null || typeof a == "string")
            return;
          var d;
          if (typeof a == "function")
            d = a.propTypes;
          else if (typeof a == "object" && (a.$$typeof === y || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          a.$$typeof === k))
            d = a.propTypes;
          else
            return;
          if (d) {
            var p = Ue(a);
            Ro(d, s.props, "prop", p, s);
          } else if (a.PropTypes !== void 0 && !tn) {
            tn = !0;
            var w = Ue(a);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
          }
          typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Co(s) {
        {
          for (var a = Object.keys(s.props), d = 0; d < a.length; d++) {
            var p = a[d];
            if (p !== "children" && p !== "key") {
              Pt(s), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Pt(null);
              break;
            }
          }
          s.ref !== null && (Pt(s), T("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
        }
      }
      function ts(s, a, d) {
        var p = u(s);
        if (!p) {
          var w = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = wo(a);
          A ? w += A : w += Jn();
          var O;
          s === null ? O = "null" : wt(s) ? O = "array" : s !== void 0 && s.$$typeof === n ? (O = "<" + (Ue(s.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : O = typeof s, T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, w);
        }
        var x = $r.apply(this, arguments);
        if (x == null)
          return x;
        if (p)
          for (var H = 2; H < arguments.length; H++)
            Zn(arguments[H], s);
        return s === i ? Co(x) : es(x), x;
      }
      var rs = !1;
      function Oo(s) {
        var a = ts.bind(null, s);
        return a.type = s, rs || (rs = !0, xe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(a, "type", {
          enumerable: !1,
          get: function() {
            return xe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), a;
      }
      function To(s, a, d) {
        for (var p = Br.apply(this, arguments), w = 2; w < arguments.length; w++)
          Zn(arguments[w], p.type);
        return es(p), p;
      }
      function Po(s, a) {
        var d = ae.transition;
        ae.transition = {};
        var p = ae.transition;
        ae.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          s();
        } finally {
          if (ae.transition = d, d === null && p._updatedFibers) {
            var w = p._updatedFibers.size;
            w > 10 && xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var ns = !1, gr = null;
      function Ao(s) {
        if (gr === null)
          try {
            var a = ("require" + Math.random()).slice(0, 7), d = t && t[a];
            gr = d.call(t, "timers").setImmediate;
          } catch {
            gr = function(w) {
              ns === !1 && (ns = !0, typeof MessageChannel > "u" && T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var A = new MessageChannel();
              A.port1.onmessage = w, A.port2.postMessage(void 0);
            };
          }
        return gr(s);
      }
      var At = 0, ss = !1;
      function os(s) {
        {
          var a = At;
          At++, j.current === null && (j.current = []);
          var d = j.isBatchingLegacy, p;
          try {
            if (j.isBatchingLegacy = !0, p = s(), !d && j.didScheduleLegacyUpdate) {
              var w = j.current;
              w !== null && (j.didScheduleLegacyUpdate = !1, sn(w));
            }
          } catch (fe) {
            throw br(a), fe;
          } finally {
            j.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var A = p, O = !1, x = {
              then: function(fe, ye) {
                O = !0, A.then(function(be) {
                  br(a), At === 0 ? rn(be, fe, ye) : fe(be);
                }, function(be) {
                  br(a), ye(be);
                });
              }
            };
            return !ss && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              O || (ss = !0, T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), x;
          } else {
            var H = p;
            if (br(a), At === 0) {
              var te = j.current;
              te !== null && (sn(te), j.current = null);
              var ie = {
                then: function(fe, ye) {
                  j.current === null ? (j.current = [], rn(H, fe, ye)) : fe(H);
                }
              };
              return ie;
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
      function br(s) {
        s !== At - 1 && T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), At = s;
      }
      function rn(s, a, d) {
        {
          var p = j.current;
          if (p !== null)
            try {
              sn(p), Ao(function() {
                p.length === 0 ? (j.current = null, a(s)) : rn(s, a, d);
              });
            } catch (w) {
              d(w);
            }
          else
            a(s);
        }
      }
      var nn = !1;
      function sn(s) {
        if (!nn) {
          nn = !0;
          var a = 0;
          try {
            for (; a < s.length; a++) {
              var d = s[a];
              do
                d = d(!0);
              while (d !== null);
            }
            s.length = 0;
          } catch (p) {
            throw s = s.slice(a + 1), p;
          } finally {
            nn = !1;
          }
        }
      }
      var ko = ts, Do = To, Lo = Oo, xo = {
        map: pt,
        forEach: cr,
        count: Hr,
        toArray: Wr,
        only: lr
      };
      e.Children = xo, e.Component = q, e.Fragment = i, e.Profiler = l, e.PureComponent = J, e.StrictMode = c, e.Suspense = b, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, e.act = os, e.cloneElement = Do, e.createContext = fr, e.createElement = ko, e.createFactory = Lo, e.createRef = Ur, e.forwardRef = Kr, e.isValidElement = Qe, e.lazy = Yr, e.memo = E, e.startTransition = Po, e.unstable_act = os, e.useCallback = de, e.useContext = D, e.useDebugValue = qe, e.useDeferredValue = qt, e.useEffect = U, e.useId = Jr, e.useImperativeHandle = Ze, e.useInsertionEffect = ge, e.useLayoutEffect = le, e.useMemo = Oe, e.useReducer = Q, e.useRef = B, e.useState = z, e.useSyncExternalStore = Qr, e.useTransition = _e, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kt, Kt.exports)), Kt.exports;
}
process.env.NODE_ENV === "production" ? wn.exports = Qo() : wn.exports = Xo();
var me = wn.exports, Ht = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs;
function Zo() {
  if (bs) return Ht;
  bs = 1;
  var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, g, m) {
    var y, b = {}, N = null, k = null;
    m !== void 0 && (N = "" + m), g.key !== void 0 && (N = "" + g.key), g.ref !== void 0 && (k = g.ref);
    for (y in g) n.call(g, y) && !i.hasOwnProperty(y) && (b[y] = g[y]);
    if (l && l.defaultProps) for (y in g = l.defaultProps, g) b[y] === void 0 && (b[y] = g[y]);
    return { $$typeof: e, type: l, key: N, ref: k, props: b, _owner: o.current };
  }
  return Ht.Fragment = r, Ht.jsx = c, Ht.jsxs = c, Ht;
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
var Es;
function ea() {
  return Es || (Es = 1, process.env.NODE_ENV !== "production" && function() {
    var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), C = Symbol.iterator, P = "@@iterator";
    function S(u) {
      if (u === null || typeof u != "object")
        return null;
      var E = C && u[C] || u[P];
      return typeof E == "function" ? E : null;
    }
    var $ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(u) {
      {
        for (var E = arguments.length, _ = new Array(E > 1 ? E - 1 : 0), D = 1; D < E; D++)
          _[D - 1] = arguments[D];
        Y("error", u, _);
      }
    }
    function Y(u, E, _) {
      {
        var D = $.ReactDebugCurrentFrame, z = D.getStackAddendum();
        z !== "" && (E += "%s", _ = _.concat([z]));
        var Q = _.map(function(B) {
          return String(B);
        });
        Q.unshift("Warning: " + E), Function.prototype.apply.call(console[u], console, Q);
      }
    }
    var ae = !1, j = !1, se = !1, he = !1, Z = !1, Se;
    Se = Symbol.for("react.module.reference");
    function $e(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === i || Z || u === o || u === m || u === y || he || u === k || ae || j || se || typeof u == "object" && u !== null && (u.$$typeof === N || u.$$typeof === b || u.$$typeof === c || u.$$typeof === l || u.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === Se || u.getModuleId !== void 0));
    }
    function Mt(u, E, _) {
      var D = u.displayName;
      if (D)
        return D;
      var z = E.displayName || E.name || "";
      return z !== "" ? _ + "(" + z + ")" : _;
    }
    function it(u) {
      return u.displayName || "Context";
    }
    function Re(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
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
            return it(E) + ".Consumer";
          case c:
            var _ = u;
            return it(_._context) + ".Provider";
          case g:
            return Mt(u, u.render, "ForwardRef");
          case b:
            var D = u.displayName || null;
            return D !== null ? D : Re(u.type) || "Memo";
          case N: {
            var z = u, Q = z._payload, B = z._init;
            try {
              return Re(B(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ce = Object.assign, ve = 0, xe, T, je, ut, Ve, f, R;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function q() {
      {
        if (ve === 0) {
          xe = console.log, T = console.info, je = console.warn, ut = console.error, Ve = console.group, f = console.groupCollapsed, R = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: V,
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
    function W() {
      {
        if (ve--, ve === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ce({}, u, {
              value: xe
            }),
            info: Ce({}, u, {
              value: T
            }),
            warn: Ce({}, u, {
              value: je
            }),
            error: Ce({}, u, {
              value: ut
            }),
            group: Ce({}, u, {
              value: Ve
            }),
            groupCollapsed: Ce({}, u, {
              value: f
            }),
            groupEnd: Ce({}, u, {
              value: R
            })
          });
        }
        ve < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = $.ReactCurrentDispatcher, ee;
    function X(u, E, _) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (z) {
            var D = z.stack.trim().match(/\n( *(at )?)/);
            ee = D && D[1] || "";
          }
        return `
` + ee + u;
      }
    }
    var J = !1, pe;
    {
      var Ur = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new Ur();
    }
    function tr(u, E) {
      if (!u || J)
        return "";
      {
        var _ = pe.get(u);
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
            } catch (_e) {
              D = _e;
            }
            Reflect.construct(u, [], B);
          } else {
            try {
              B.call();
            } catch (_e) {
              D = _e;
            }
            u.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            D = _e;
          }
          u();
        }
      } catch (_e) {
        if (_e && D && typeof _e.stack == "string") {
          for (var U = _e.stack.split(`
`), ge = D.stack.split(`
`), le = U.length - 1, de = ge.length - 1; le >= 1 && de >= 0 && U[le] !== ge[de]; )
            de--;
          for (; le >= 1 && de >= 0; le--, de--)
            if (U[le] !== ge[de]) {
              if (le !== 1 || de !== 1)
                do
                  if (le--, de--, de < 0 || U[le] !== ge[de]) {
                    var Oe = `
` + U[le].replace(" at new ", " at ");
                    return u.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", u.displayName)), typeof u == "function" && pe.set(u, Oe), Oe;
                  }
                while (le >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        J = !1, ne.current = Q, W(), Error.prepareStackTrace = z;
      }
      var Ze = u ? u.displayName || u.name : "", qe = Ze ? X(Ze) : "";
      return typeof u == "function" && pe.set(u, qe), qe;
    }
    function wt(u, E, _) {
      return tr(u, !1);
    }
    function Ir(u) {
      var E = u.prototype;
      return !!(E && E.isReactComponent);
    }
    function St(u, E, _) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return tr(u, Ir(u));
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
            return wt(u.render);
          case b:
            return St(u.type, E, _);
          case N: {
            var D = u, z = D._payload, Q = D._init;
            try {
              return St(Q(z), E, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Ke = Object.prototype.hasOwnProperty, ct = {}, rr = $.ReactDebugCurrentFrame;
    function lt(u) {
      if (u) {
        var E = u._owner, _ = St(u.type, u._source, E ? E.type : null);
        rr.setExtraStackFrame(_);
      } else
        rr.setExtraStackFrame(null);
    }
    function Ue(u, E, _, D, z) {
      {
        var Q = Function.call.bind(Ke);
        for (var B in u)
          if (Q(u, B)) {
            var U = void 0;
            try {
              if (typeof u[B] != "function") {
                var ge = Error((D || "React class") + ": " + _ + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              U = u[B](E, B, D, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (le) {
              U = le;
            }
            U && !(U instanceof Error) && (lt(z), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", _, B, typeof U), lt(null)), U instanceof Error && !(U.message in ct) && (ct[U.message] = !0, lt(z), L("Failed %s type: %s", _, U.message), lt(null));
          }
      }
    }
    var ft = Array.isArray;
    function Ct(u) {
      return ft(u);
    }
    function nr(u) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, _ = E && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return _;
      }
    }
    function sr(u) {
      try {
        return Ot(u), !1;
      } catch {
        return !0;
      }
    }
    function Ot(u) {
      return "" + u;
    }
    function $t(u) {
      if (sr(u))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(u)), Ot(u);
    }
    var Je = $.ReactCurrentOwner, Mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ar, dt;
    dt = {};
    function $r(u) {
      if (Ke.call(u, "ref")) {
        var E = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Vr(u) {
      if (Ke.call(u, "key")) {
        var E = Object.getOwnPropertyDescriptor(u, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Br(u, E) {
      if (typeof u.ref == "string" && Je.current && E && Je.current.stateNode !== E) {
        var _ = Re(Je.current.type);
        dt[_] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Re(Je.current.type), u.ref), dt[_] = !0);
      }
    }
    function Qe(u, E) {
      {
        var _ = function() {
          or || (or = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        _.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function ir(u, E) {
      {
        var _ = function() {
          ar || (ar = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        _.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var qr = function(u, E, _, D, z, Q, B) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: u,
        key: E,
        ref: _,
        props: B,
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
    function Gr(u, E, _, D, z) {
      {
        var Q, B = {}, U = null, ge = null;
        _ !== void 0 && ($t(_), U = "" + _), Vr(E) && ($t(E.key), U = "" + E.key), $r(E) && (ge = E.ref, Br(E, z));
        for (Q in E)
          Ke.call(E, Q) && !Mr.hasOwnProperty(Q) && (B[Q] = E[Q]);
        if (u && u.defaultProps) {
          var le = u.defaultProps;
          for (Q in le)
            B[Q] === void 0 && (B[Q] = le[Q]);
        }
        if (U || ge) {
          var de = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          U && Qe(B, de), ge && ir(B, de);
        }
        return qr(u, U, ge, z, D, Je.current, B);
      }
    }
    var Tt = $.ReactCurrentOwner, ur = $.ReactDebugCurrentFrame;
    function Be(u) {
      if (u) {
        var E = u._owner, _ = St(u.type, u._source, E ? E.type : null);
        ur.setExtraStackFrame(_);
      } else
        ur.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function Xe(u) {
      return typeof u == "object" && u !== null && u.$$typeof === e;
    }
    function pt() {
      {
        if (Tt.current) {
          var u = Re(Tt.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Hr(u) {
      return "";
    }
    var cr = {};
    function Wr(u) {
      {
        var E = pt();
        if (!E) {
          var _ = typeof u == "string" ? u : u.displayName || u.name;
          _ && (E = `

Check the top-level render call using <` + _ + ">.");
        }
        return E;
      }
    }
    function lr(u, E) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var _ = Wr(E);
        if (cr[_])
          return;
        cr[_] = !0;
        var D = "";
        u && u._owner && u._owner !== Tt.current && (D = " It was passed a child from " + Re(u._owner.type) + "."), Be(u), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, D), Be(null);
      }
    }
    function fr(u, E) {
      {
        if (typeof u != "object")
          return;
        if (Ct(u))
          for (var _ = 0; _ < u.length; _++) {
            var D = u[_];
            Xe(D) && lr(D, E);
          }
        else if (Xe(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var z = S(u);
          if (typeof z == "function" && z !== u.entries)
            for (var Q = z.call(u), B; !(B = Q.next()).done; )
              Xe(B.value) && lr(B.value, E);
        }
      }
    }
    function yt(u) {
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
          var D = Re(E);
          Ue(_, u.props, "prop", D, u);
        } else if (E.PropTypes !== void 0 && !ht) {
          ht = !0;
          var z = Re(E);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vt(u) {
      {
        for (var E = Object.keys(u.props), _ = 0; _ < E.length; _++) {
          var D = E[_];
          if (D !== "children" && D !== "key") {
            Be(u), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Be(null);
            break;
          }
        }
        u.ref !== null && (Be(u), L("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    var Bt = {};
    function dr(u, E, _, D, z, Q) {
      {
        var B = $e(u);
        if (!B) {
          var U = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Hr();
          ge ? U += ge : U += pt();
          var le;
          u === null ? le = "null" : Ct(u) ? le = "array" : u !== void 0 && u.$$typeof === e ? (le = "<" + (Re(u.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : le = typeof u, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, U);
        }
        var de = Gr(u, E, _, z, Q);
        if (de == null)
          return de;
        if (B) {
          var Oe = E.children;
          if (Oe !== void 0)
            if (D)
              if (Ct(Oe)) {
                for (var Ze = 0; Ze < Oe.length; Ze++)
                  fr(Oe[Ze], u);
                Object.freeze && Object.freeze(Oe);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(Oe, u);
        }
        if (Ke.call(E, "key")) {
          var qe = Re(u), _e = Object.keys(E).filter(function(Qr) {
            return Qr !== "key";
          }), qt = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Bt[qe + qt]) {
            var Jr = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            L(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qt, qe, Jr, qe), Bt[qe + qt] = !0;
          }
        }
        return u === n ? Vt(de) : yt(de), de;
      }
    }
    function zr(u, E, _) {
      return dr(u, E, _, !0);
    }
    function Yr(u, E, _) {
      return dr(u, E, _, !1);
    }
    var Kr = Yr, hr = zr;
    Wt.Fragment = n, Wt.jsx = Kr, Wt.jsxs = hr;
  }()), Wt;
}
process.env.NODE_ENV === "production" ? Zo() : ea();
var ta = me.createContext(
  void 0
), $s = (t) => {
  const e = me.useContext(ta);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Vs = me.createContext(!1), ra = () => me.useContext(Vs);
Vs.Provider;
function na() {
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
var sa = me.createContext(na()), oa = () => me.useContext(sa);
function Bs(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function aa() {
}
var ia = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, ua = (t) => {
  me.useEffect(() => {
    t.clearReset();
  }, [t]);
}, ca = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && Bs(r, [t.error, n]), la = (t) => {
  t.suspense && (typeof t.staleTime != "number" && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, fa = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, da = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function ha(t, e, r) {
  var m, y, b, N;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = $s(), o = ra(), i = oa(), c = n.defaultQueryOptions(t);
  (y = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || y.call(
    m,
    c
  ), c._optimisticResults = o ? "isRestoring" : "optimistic", la(c), ia(c, i), ua(i);
  const [l] = me.useState(
    () => new e(
      n,
      c
    )
  ), g = l.getOptimisticResult(c);
  if (me.useSyncExternalStore(
    me.useCallback(
      (k) => {
        const C = o ? () => {
        } : l.subscribe(kr.batchCalls(k));
        return l.updateResult(), C;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), me.useEffect(() => {
    l.setOptions(c, { listeners: !1 });
  }, [c, l]), fa(c, g))
    throw da(c, l, i);
  if (ca({
    result: g,
    errorResetBoundary: i,
    throwOnError: c.throwOnError,
    query: n.getQueryCache().get(c.queryHash)
  }))
    throw g.error;
  return (N = (b = n.getDefaultOptions().queries) == null ? void 0 : b._experimental_afterQuery) == null || N.call(
    b,
    c,
    g
  ), c.notifyOnChangeProps ? g : l.trackResult(g);
}
function Ln(t, e) {
  return ha(t, zo);
}
function qs(t, e) {
  const r = $s(), [n] = me.useState(
    () => new Jo(
      r,
      t
    )
  );
  me.useEffect(() => {
    n.setOptions(t);
  }, [n, t]);
  const o = me.useSyncExternalStore(
    me.useCallback(
      (c) => n.subscribe(kr.batchCalls(c)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), i = me.useCallback(
    (c, l) => {
      n.mutate(c, l).catch(aa);
    },
    [n]
  );
  if (o.error && Bs(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: i, mutateAsync: o.mutate };
}
function Gs(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: pa } = Object.prototype, { getPrototypeOf: xn } = Object, Dr = /* @__PURE__ */ ((t) => (e) => {
  const r = pa.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ne = (t) => (t = t.toLowerCase(), (e) => Dr(e) === t), Lr = (t) => (e) => typeof e === t, { isArray: Ut } = Array, Jt = Lr("undefined");
function ya(t) {
  return t !== null && !Jt(t) && t.constructor !== null && !Jt(t.constructor) && De(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Hs = Ne("ArrayBuffer");
function ma(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Hs(t.buffer), e;
}
const va = Lr("string"), De = Lr("function"), Ws = Lr("number"), xr = (t) => t !== null && typeof t == "object", ga = (t) => t === !0 || t === !1, wr = (t) => {
  if (Dr(t) !== "object")
    return !1;
  const e = xn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, ba = Ne("Date"), Ea = Ne("File"), Ra = Ne("Blob"), _a = Ne("FileList"), wa = (t) => xr(t) && De(t.pipe), Sa = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || De(t.append) && ((e = Dr(t)) === "formdata" || // detect form-data instance
  e === "object" && De(t.toString) && t.toString() === "[object FormData]"));
}, Ca = Ne("URLSearchParams"), [Oa, Ta, Pa, Aa] = ["ReadableStream", "Request", "Response", "Headers"].map(Ne), ka = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zt(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), Ut(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t), c = i.length;
    let l;
    for (n = 0; n < c; n++)
      l = i[n], e.call(null, t[l], l, t);
  }
}
function zs(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const mt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ys = (t) => !Jt(t) && t !== mt;
function Sn() {
  const { caseless: t } = Ys(this) && this || {}, e = {}, r = (n, o) => {
    const i = t && zs(e, o) || o;
    wr(e[i]) && wr(n) ? e[i] = Sn(e[i], n) : wr(n) ? e[i] = Sn({}, n) : Ut(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Zt(arguments[n], r);
  return e;
}
const Da = (t, e, r, { allOwnKeys: n } = {}) => (Zt(e, (o, i) => {
  r && De(o) ? t[i] = Gs(o, r) : t[i] = o;
}, { allOwnKeys: n }), t), La = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), xa = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Fa = (t, e, r, n) => {
  let o, i, c;
  const l = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      c = o[i], (!n || n(c, t, e)) && !l[c] && (e[c] = t[c], l[c] = !0);
    t = r !== !1 && xn(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Na = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, ja = (t) => {
  if (!t) return null;
  if (Ut(t)) return t;
  let e = t.length;
  if (!Ws(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Ua = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && xn(Uint8Array)), Ia = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, Ma = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, $a = Ne("HTMLFormElement"), Va = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Rs = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Ba = Ne("RegExp"), Ks = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Zt(r, (o, i) => {
    let c;
    (c = e(o, i, t)) !== !1 && (n[i] = c || o);
  }), Object.defineProperties(t, n);
}, qa = (t) => {
  Ks(t, (e, r) => {
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
}, Ga = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return Ut(t) ? n(t) : n(String(t).split(e)), r;
}, Ha = () => {
}, Wa = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, un = "abcdefghijklmnopqrstuvwxyz", _s = "0123456789", Js = {
  DIGIT: _s,
  ALPHA: un,
  ALPHA_DIGIT: un + un.toUpperCase() + _s
}, za = (t = 16, e = Js.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Ya(t) {
  return !!(t && De(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Ka = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (xr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const i = Ut(n) ? [] : {};
        return Zt(n, (c, l) => {
          const g = r(c, o + 1);
          !Jt(g) && (i[l] = g);
        }), e[o] = void 0, i;
      }
    }
    return n;
  };
  return r(t, 0);
}, Ja = Ne("AsyncFunction"), Qa = (t) => t && (xr(t) || De(t)) && De(t.then) && De(t.catch), Qs = ((t, e) => t ? setImmediate : e ? ((r, n) => (mt.addEventListener("message", ({ source: o, data: i }) => {
  o === mt && i === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), mt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  De(mt.postMessage)
), Xa = typeof queueMicrotask < "u" ? queueMicrotask.bind(mt) : typeof process < "u" && process.nextTick || Qs, h = {
  isArray: Ut,
  isArrayBuffer: Hs,
  isBuffer: ya,
  isFormData: Sa,
  isArrayBufferView: ma,
  isString: va,
  isNumber: Ws,
  isBoolean: ga,
  isObject: xr,
  isPlainObject: wr,
  isReadableStream: Oa,
  isRequest: Ta,
  isResponse: Pa,
  isHeaders: Aa,
  isUndefined: Jt,
  isDate: ba,
  isFile: Ea,
  isBlob: Ra,
  isRegExp: Ba,
  isFunction: De,
  isStream: wa,
  isURLSearchParams: Ca,
  isTypedArray: Ua,
  isFileList: _a,
  forEach: Zt,
  merge: Sn,
  extend: Da,
  trim: ka,
  stripBOM: La,
  inherits: xa,
  toFlatObject: Fa,
  kindOf: Dr,
  kindOfTest: Ne,
  endsWith: Na,
  toArray: ja,
  forEachEntry: Ia,
  matchAll: Ma,
  isHTMLForm: $a,
  hasOwnProperty: Rs,
  hasOwnProp: Rs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ks,
  freezeMethods: qa,
  toObjectSet: Ga,
  toCamelCase: Va,
  noop: Ha,
  toFiniteNumber: Wa,
  findKey: zs,
  global: mt,
  isContextDefined: Ys,
  ALPHABET: Js,
  generateString: za,
  isSpecCompliantForm: Ya,
  toJSONObject: Ka,
  isAsyncFn: Ja,
  isThenable: Qa,
  setImmediate: Qs,
  asap: Xa
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
const Xs = F.prototype, Zs = {};
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
  Zs[t] = { value: t };
});
Object.defineProperties(F, Zs);
Object.defineProperty(Xs, "isAxiosError", { value: !0 });
F.from = (t, e, r, n, o, i) => {
  const c = Object.create(Xs);
  return h.toFlatObject(t, c, function(g) {
    return g !== Error.prototype;
  }, (l) => l !== "isAxiosError"), F.call(c, t.message, e, r, n, o), c.cause = t, c.name = t.name, i && Object.assign(c, i), c;
};
const Za = null;
function Cn(t) {
  return h.isPlainObject(t) || h.isArray(t);
}
function eo(t) {
  return h.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ws(t, e, r) {
  return t ? t.concat(e).map(function(o, i) {
    return o = eo(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function ei(t) {
  return h.isArray(t) && !t.some(Cn);
}
const ti = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Fr(t, e, r) {
  if (!h.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, S) {
    return !h.isUndefined(S[P]);
  });
  const n = r.metaTokens, o = r.visitor || y, i = r.dots, c = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(e);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function m(C) {
    if (C === null) return "";
    if (h.isDate(C))
      return C.toISOString();
    if (!g && h.isBlob(C))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(C) || h.isTypedArray(C) ? g && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function y(C, P, S) {
    let $ = C;
    if (C && !S && typeof C == "object") {
      if (h.endsWith(P, "{}"))
        P = n ? P : P.slice(0, -2), C = JSON.stringify(C);
      else if (h.isArray(C) && ei(C) || (h.isFileList(C) || h.endsWith(P, "[]")) && ($ = h.toArray(C)))
        return P = eo(P), $.forEach(function(Y, ae) {
          !(h.isUndefined(Y) || Y === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? ws([P], ae, i) : c === null ? P : P + "[]",
            m(Y)
          );
        }), !1;
    }
    return Cn(C) ? !0 : (e.append(ws(S, P, i), m(C)), !1);
  }
  const b = [], N = Object.assign(ti, {
    defaultVisitor: y,
    convertValue: m,
    isVisitable: Cn
  });
  function k(C, P) {
    if (!h.isUndefined(C)) {
      if (b.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + P.join("."));
      b.push(C), h.forEach(C, function($, L) {
        (!(h.isUndefined($) || $ === null) && o.call(
          e,
          $,
          h.isString(L) ? L.trim() : L,
          P,
          N
        )) === !0 && k($, P ? P.concat(L) : [L]);
      }), b.pop();
    }
  }
  if (!h.isObject(t))
    throw new TypeError("data must be an object");
  return k(t), e;
}
function Ss(t) {
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
function Fn(t, e) {
  this._pairs = [], t && Fr(t, this, e);
}
const to = Fn.prototype;
to.append = function(e, r) {
  this._pairs.push([e, r]);
};
to.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Ss);
  } : Ss;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function ri(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ro(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || ri, o = r && r.serialize;
  let i;
  if (o ? i = o(e, r) : i = h.isURLSearchParams(e) ? e.toString() : new Fn(e, r).toString(n), i) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class Cs {
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
const no = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ni = typeof URLSearchParams < "u" ? URLSearchParams : Fn, si = typeof FormData < "u" ? FormData : null, oi = typeof Blob < "u" ? Blob : null, ai = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ni,
    FormData: si,
    Blob: oi
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Nn = typeof window < "u" && typeof document < "u", On = typeof navigator == "object" && navigator || void 0, ii = Nn && (!On || ["ReactNative", "NativeScript", "NS"].indexOf(On.product) < 0), ui = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ci = Nn && window.location.href || "http://localhost", li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Nn,
  hasStandardBrowserEnv: ii,
  hasStandardBrowserWebWorkerEnv: ui,
  navigator: On,
  origin: ci
}, Symbol.toStringTag, { value: "Module" })), Ae = {
  ...li,
  ...ai
};
function fi(t, e) {
  return Fr(t, new Ae.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return Ae.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function di(t) {
  return h.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function hi(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], e[i] = t[i];
  return e;
}
function so(t) {
  function e(r, n, o, i) {
    let c = r[i++];
    if (c === "__proto__") return !0;
    const l = Number.isFinite(+c), g = i >= r.length;
    return c = !c && h.isArray(o) ? o.length : c, g ? (h.hasOwnProp(o, c) ? o[c] = [o[c], n] : o[c] = n, !l) : ((!o[c] || !h.isObject(o[c])) && (o[c] = []), e(r, n, o[c], i) && h.isArray(o[c]) && (o[c] = hi(o[c])), !l);
  }
  if (h.isFormData(t) && h.isFunction(t.entries)) {
    const r = {};
    return h.forEachEntry(t, (n, o) => {
      e(di(n), o, r, 0);
    }), r;
  }
  return null;
}
function pi(t, e, r) {
  if (h.isString(t))
    try {
      return (e || JSON.parse)(t), h.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(t);
}
const er = {
  transitional: no,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = h.isObject(e);
    if (i && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
      return o ? JSON.stringify(so(e)) : e;
    if (h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e) || h.isReadableStream(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return fi(e, this.formSerializer).toString();
      if ((l = h.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return Fr(
          l ? { "files[]": e } : e,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), pi(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || er.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: Ae.classes.FormData,
    Blob: Ae.classes.Blob
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
  er.headers[t] = {};
});
const yi = h.toObjectSet([
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
]), mi = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(c) {
    o = c.indexOf(":"), r = c.substring(0, o).trim().toLowerCase(), n = c.substring(o + 1).trim(), !(!r || e[r] && yi[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Os = Symbol("internals");
function zt(t) {
  return t && String(t).trim().toLowerCase();
}
function Sr(t) {
  return t === !1 || t == null ? t : h.isArray(t) ? t.map(Sr) : String(t);
}
function vi(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const gi = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function cn(t, e, r, n, o) {
  if (h.isFunction(n))
    return n.call(this, e, r);
  if (o && (e = r), !!h.isString(e)) {
    if (h.isString(n))
      return e.indexOf(n) !== -1;
    if (h.isRegExp(n))
      return n.test(e);
  }
}
function bi(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Ei(t, e) {
  const r = h.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(o, i, c) {
        return this[n].call(this, e, o, i, c);
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
    function i(l, g, m) {
      const y = zt(g);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const b = h.findKey(o, y);
      (!b || o[b] === void 0 || m === !0 || m === void 0 && o[b] !== !1) && (o[b || g] = Sr(l));
    }
    const c = (l, g) => h.forEach(l, (m, y) => i(m, y, g));
    if (h.isPlainObject(e) || e instanceof this.constructor)
      c(e, r);
    else if (h.isString(e) && (e = e.trim()) && !gi(e))
      c(mi(e), r);
    else if (h.isHeaders(e))
      for (const [l, g] of e.entries())
        i(g, l, n);
    else
      e != null && i(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = zt(e), e) {
      const n = h.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return vi(o);
        if (h.isFunction(r))
          return r.call(this, o, n);
        if (h.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = zt(e), e) {
      const n = h.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || cn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function i(c) {
      if (c = zt(c), c) {
        const l = h.findKey(n, c);
        l && (!r || cn(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return h.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!e || cn(this, this[i], i, e, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(e) {
    const r = this, n = {};
    return h.forEach(this, (o, i) => {
      const c = h.findKey(n, i);
      if (c) {
        r[c] = Sr(o), delete r[i];
        return;
      }
      const l = e ? bi(i) : String(i).trim();
      l !== i && delete r[i], r[l] = Sr(o), n[l] = !0;
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
    const n = (this[Os] = this[Os] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(c) {
      const l = zt(c);
      n[l] || (Ei(o, c), n[l] = !0);
    }
    return h.isArray(e) ? e.forEach(i) : i(e), this;
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
function ln(t, e) {
  const r = this || er, n = e || r, o = ke.from(n.headers);
  let i = n.data;
  return h.forEach(t, function(l) {
    i = l.call(r, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function oo(t) {
  return !!(t && t.__CANCEL__);
}
function It(t, e, r) {
  F.call(this, t ?? "canceled", F.ERR_CANCELED, e, r), this.name = "CanceledError";
}
h.inherits(It, F, {
  __CANCEL__: !0
});
function ao(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new F(
    "Request failed with status code " + r.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ri(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function _i(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, i = 0, c;
  return e = e !== void 0 ? e : 1e3, function(g) {
    const m = Date.now(), y = n[i];
    c || (c = m), r[o] = g, n[o] = m;
    let b = i, N = 0;
    for (; b !== o; )
      N += r[b++], b = b % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), m - c < e)
      return;
    const k = y && m - y;
    return k ? Math.round(N * 1e3 / k) : void 0;
  };
}
function wi(t, e) {
  let r = 0, n = 1e3 / e, o, i;
  const c = (m, y = Date.now()) => {
    r = y, o = null, i && (clearTimeout(i), i = null), t.apply(null, m);
  };
  return [(...m) => {
    const y = Date.now(), b = y - r;
    b >= n ? c(m, y) : (o = m, i || (i = setTimeout(() => {
      i = null, c(o);
    }, n - b)));
  }, () => o && c(o)];
}
const Tr = (t, e, r = 3) => {
  let n = 0;
  const o = _i(50, 250);
  return wi((i) => {
    const c = i.loaded, l = i.lengthComputable ? i.total : void 0, g = c - n, m = o(g), y = c <= l;
    n = c;
    const b = {
      loaded: c,
      total: l,
      progress: l ? c / l : void 0,
      bytes: g,
      rate: m || void 0,
      estimated: m && l && y ? (l - c) / m : void 0,
      event: i,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    t(b);
  }, r);
}, Ts = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Ps = (t) => (...e) => h.asap(() => t(...e)), Si = Ae.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = Ae.navigator && /(msie|trident)/i.test(Ae.navigator.userAgent), r = document.createElement("a");
    let n;
    function o(i) {
      let c = i;
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
), Ci = Ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, o, i) {
      const c = [t + "=" + encodeURIComponent(e)];
      h.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()), h.isString(n) && c.push("path=" + n), h.isString(o) && c.push("domain=" + o), i === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function Oi(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ti(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function io(t, e) {
  return t && !Oi(e) ? Ti(t, e) : e;
}
const As = (t) => t instanceof ke ? { ...t } : t;
function _t(t, e) {
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
  function i(m, y) {
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
    url: i,
    method: i,
    data: i,
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
    headers: (m, y) => o(As(m), As(y), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, t, e)), function(y) {
    const b = g[y] || o, N = b(t[y], e[y], y);
    h.isUndefined(N) && b !== l || (r[y] = N);
  }), r;
}
const uo = (t) => {
  const e = _t({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: i, headers: c, auth: l } = e;
  e.headers = c = ke.from(c), e.url = ro(io(e.baseURL, e.url), t.params, t.paramsSerializer), l && c.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let g;
  if (h.isFormData(r)) {
    if (Ae.hasStandardBrowserEnv || Ae.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((g = c.getContentType()) !== !1) {
      const [m, ...y] = g ? g.split(";").map((b) => b.trim()).filter(Boolean) : [];
      c.setContentType([m || "multipart/form-data", ...y].join("; "));
    }
  }
  if (Ae.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(e)), n || n !== !1 && Si(e.url))) {
    const m = o && i && Ci.read(i);
    m && c.set(o, m);
  }
  return e;
}, Pi = typeof XMLHttpRequest < "u", Ai = Pi && function(t) {
  return new Promise(function(r, n) {
    const o = uo(t);
    let i = o.data;
    const c = ke.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: g, onDownloadProgress: m } = o, y, b, N, k, C;
    function P() {
      k && k(), C && C(), o.cancelToken && o.cancelToken.unsubscribe(y), o.signal && o.signal.removeEventListener("abort", y);
    }
    let S = new XMLHttpRequest();
    S.open(o.method.toUpperCase(), o.url, !0), S.timeout = o.timeout;
    function $() {
      if (!S)
        return;
      const Y = ke.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), j = {
        data: !l || l === "text" || l === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: Y,
        config: t,
        request: S
      };
      ao(function(he) {
        r(he), P();
      }, function(he) {
        n(he), P();
      }, j), S = null;
    }
    "onloadend" in S ? S.onloadend = $ : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout($);
    }, S.onabort = function() {
      S && (n(new F("Request aborted", F.ECONNABORTED, t, S)), S = null);
    }, S.onerror = function() {
      n(new F("Network Error", F.ERR_NETWORK, t, S)), S = null;
    }, S.ontimeout = function() {
      let ae = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const j = o.transitional || no;
      o.timeoutErrorMessage && (ae = o.timeoutErrorMessage), n(new F(
        ae,
        j.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        t,
        S
      )), S = null;
    }, i === void 0 && c.setContentType(null), "setRequestHeader" in S && h.forEach(c.toJSON(), function(ae, j) {
      S.setRequestHeader(j, ae);
    }), h.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials), l && l !== "json" && (S.responseType = o.responseType), m && ([N, C] = Tr(m, !0), S.addEventListener("progress", N)), g && S.upload && ([b, k] = Tr(g), S.upload.addEventListener("progress", b), S.upload.addEventListener("loadend", k)), (o.cancelToken || o.signal) && (y = (Y) => {
      S && (n(!Y || Y.type ? new It(null, t, S) : Y), S.abort(), S = null);
    }, o.cancelToken && o.cancelToken.subscribe(y), o.signal && (o.signal.aborted ? y() : o.signal.addEventListener("abort", y)));
    const L = Ri(o.url);
    if (L && Ae.protocols.indexOf(L) === -1) {
      n(new F("Unsupported protocol " + L + ":", F.ERR_BAD_REQUEST, t));
      return;
    }
    S.send(i || null);
  });
}, ki = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const i = function(m) {
      if (!o) {
        o = !0, l();
        const y = m instanceof Error ? m : this.reason;
        n.abort(y instanceof F ? y : new It(y instanceof Error ? y.message : y));
      }
    };
    let c = e && setTimeout(() => {
      c = null, i(new F(`timeout ${e} of ms exceeded`, F.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (c && clearTimeout(c), c = null, t.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(i) : m.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((m) => m.addEventListener("abort", i));
    const { signal: g } = n;
    return g.unsubscribe = () => h.asap(l), g;
  }
}, Di = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, Li = async function* (t, e) {
  for await (const r of xi(t))
    yield* Di(r, e);
}, xi = async function* (t) {
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
}, ks = (t, e, r, n) => {
  const o = Li(t, e);
  let i = 0, c, l = (g) => {
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
          let N = i += b;
          r(N);
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
}, Nr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", co = Nr && typeof ReadableStream == "function", Fi = Nr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), lo = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Ni = co && lo(() => {
  let t = !1;
  const e = new Request(Ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Ds = 64 * 1024, Tn = co && lo(() => h.isReadableStream(new Response("").body)), Pr = {
  stream: Tn && ((t) => t.body)
};
Nr && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Pr[e] && (Pr[e] = h.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new F(`Response type '${e}' is not supported`, F.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const ji = async (t) => {
  if (t == null)
    return 0;
  if (h.isBlob(t))
    return t.size;
  if (h.isSpecCompliantForm(t))
    return (await new Request(Ae.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(t) || h.isArrayBuffer(t))
    return t.byteLength;
  if (h.isURLSearchParams(t) && (t = t + ""), h.isString(t))
    return (await Fi(t)).byteLength;
}, Ui = async (t, e) => {
  const r = h.toFiniteNumber(t.getContentLength());
  return r ?? ji(e);
}, Ii = Nr && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: o,
    cancelToken: i,
    timeout: c,
    onDownloadProgress: l,
    onUploadProgress: g,
    responseType: m,
    headers: y,
    withCredentials: b = "same-origin",
    fetchOptions: N
  } = uo(t);
  m = m ? (m + "").toLowerCase() : "text";
  let k = ki([o, i && i.toAbortSignal()], c), C;
  const P = k && k.unsubscribe && (() => {
    k.unsubscribe();
  });
  let S;
  try {
    if (g && Ni && r !== "get" && r !== "head" && (S = await Ui(y, n)) !== 0) {
      let j = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), se;
      if (h.isFormData(n) && (se = j.headers.get("content-type")) && y.setContentType(se), j.body) {
        const [he, Z] = Ts(
          S,
          Tr(Ps(g))
        );
        n = ks(j.body, Ds, he, Z);
      }
    }
    h.isString(b) || (b = b ? "include" : "omit");
    const $ = "credentials" in Request.prototype;
    C = new Request(e, {
      ...N,
      signal: k,
      method: r.toUpperCase(),
      headers: y.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: $ ? b : void 0
    });
    let L = await fetch(C);
    const Y = Tn && (m === "stream" || m === "response");
    if (Tn && (l || Y && P)) {
      const j = {};
      ["status", "statusText", "headers"].forEach((Se) => {
        j[Se] = L[Se];
      });
      const se = h.toFiniteNumber(L.headers.get("content-length")), [he, Z] = l && Ts(
        se,
        Tr(Ps(l), !0)
      ) || [];
      L = new Response(
        ks(L.body, Ds, he, () => {
          Z && Z(), P && P();
        }),
        j
      );
    }
    m = m || "text";
    let ae = await Pr[h.findKey(Pr, m) || "text"](L, t);
    return !Y && P && P(), await new Promise((j, se) => {
      ao(j, se, {
        data: ae,
        headers: ke.from(L.headers),
        status: L.status,
        statusText: L.statusText,
        config: t,
        request: C
      });
    });
  } catch ($) {
    throw P && P(), $ && $.name === "TypeError" && /fetch/i.test($.message) ? Object.assign(
      new F("Network Error", F.ERR_NETWORK, t, C),
      {
        cause: $.cause || $
      }
    ) : F.from($, $ && $.code, t, C);
  }
}), Pn = {
  http: Za,
  xhr: Ai,
  fetch: Ii
};
h.forEach(Pn, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ls = (t) => `- ${t}`, Mi = (t) => h.isFunction(t) || t === null || t === !1, fo = {
  getAdapter: (t) => {
    t = h.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let i = 0; i < e; i++) {
      r = t[i];
      let c;
      if (n = r, !Mi(r) && (n = Pn[(c = String(r)).toLowerCase()], n === void 0))
        throw new F(`Unknown adapter '${c}'`);
      if (n)
        break;
      o[c || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(o).map(
        ([l, g]) => `adapter ${l} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = e ? i.length > 1 ? `since :
` + i.map(Ls).join(`
`) : " " + Ls(i[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Pn
};
function fn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new It(null, t);
}
function xs(t) {
  return fn(t), t.headers = ke.from(t.headers), t.data = ln.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), fo.getAdapter(t.adapter || er.adapter)(t).then(function(n) {
    return fn(t), n.data = ln.call(
      t,
      t.transformResponse,
      n
    ), n.headers = ke.from(n.headers), n;
  }, function(n) {
    return oo(n) || (fn(t), n && n.response && (n.response.data = ln.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = ke.from(n.response.headers))), Promise.reject(n);
  });
}
const ho = "1.7.7", jn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  jn[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Fs = {};
jn.transitional = function(e, r, n) {
  function o(i, c) {
    return "[Axios v" + ho + "] Transitional option '" + i + "'" + c + (n ? ". " + n : "");
  }
  return (i, c, l) => {
    if (e === !1)
      throw new F(
        o(c, " has been removed" + (r ? " in " + r : "")),
        F.ERR_DEPRECATED
      );
    return r && !Fs[c] && (Fs[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(i, c, l) : !0;
  };
};
function $i(t, e, r) {
  if (typeof t != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], c = e[i];
    if (c) {
      const l = t[i], g = l === void 0 || c(l, i, t);
      if (g !== !0)
        throw new F("option " + i + " must be " + g, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new F("Unknown option " + i, F.ERR_BAD_OPTION);
  }
}
const An = {
  assertOptions: $i,
  validators: jn
}, et = An.validators;
class Rt {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Cs(),
      response: new Cs()
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
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = _t(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && An.assertOptions(n, {
      silentJSONParsing: et.transitional(et.boolean),
      forcedJSONParsing: et.transitional(et.boolean),
      clarifyTimeoutError: et.transitional(et.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : An.assertOptions(o, {
      encode: et.function,
      serialize: et.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let c = i && h.merge(
      i.common,
      i[r.method]
    );
    i && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete i[C];
      }
    ), r.headers = ke.concat(c, i);
    const l = [];
    let g = !0;
    this.interceptors.request.forEach(function(P) {
      typeof P.runWhen == "function" && P.runWhen(r) === !1 || (g = g && P.synchronous, l.unshift(P.fulfilled, P.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(P) {
      m.push(P.fulfilled, P.rejected);
    });
    let y, b = 0, N;
    if (!g) {
      const C = [xs.bind(this), void 0];
      for (C.unshift.apply(C, l), C.push.apply(C, m), N = C.length, y = Promise.resolve(r); b < N; )
        y = y.then(C[b++], C[b++]);
      return y;
    }
    N = l.length;
    let k = r;
    for (b = 0; b < N; ) {
      const C = l[b++], P = l[b++];
      try {
        k = C(k);
      } catch (S) {
        P.call(this, S);
        break;
      }
    }
    try {
      y = xs.call(this, k);
    } catch (C) {
      return Promise.reject(C);
    }
    for (b = 0, N = m.length; b < N; )
      y = y.then(m[b++], m[b++]);
    return y;
  }
  getUri(e) {
    e = _t(this.defaults, e);
    const r = io(e.baseURL, e.url);
    return ro(r, e.params, e.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  Rt.prototype[e] = function(r, n) {
    return this.request(_t(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(i, c, l) {
      return this.request(_t(l || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: c
      }));
    };
  }
  Rt.prototype[e] = r(), Rt.prototype[e + "Form"] = r(!0);
});
class Un {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const c = new Promise((l) => {
        n.subscribe(l), i = l;
      }).then(o);
      return c.cancel = function() {
        n.unsubscribe(i);
      }, c;
    }, e(function(i, c, l) {
      n.reason || (n.reason = new It(i, c, l), r(n.reason));
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
      token: new Un(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
function Vi(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Bi(t) {
  return h.isObject(t) && t.isAxiosError === !0;
}
const kn = {
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
Object.entries(kn).forEach(([t, e]) => {
  kn[e] = t;
});
function po(t) {
  const e = new Rt(t), r = Gs(Rt.prototype.request, e);
  return h.extend(r, Rt.prototype, e, { allOwnKeys: !0 }), h.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return po(_t(t, o));
  }, r;
}
const ce = po(er);
ce.Axios = Rt;
ce.CanceledError = It;
ce.CancelToken = Un;
ce.isCancel = oo;
ce.VERSION = ho;
ce.toFormData = Fr;
ce.AxiosError = F;
ce.Cancel = ce.CanceledError;
ce.all = function(e) {
  return Promise.all(e);
};
ce.spread = Vi;
ce.isAxiosError = Bi;
ce.mergeConfig = _t;
ce.AxiosHeaders = ke;
ce.formToJSON = (t) => so(h.isHTMLForm(t) ? new FormData(t) : t);
ce.getAdapter = fo.getAdapter;
ce.HttpStatusCode = kn;
ce.default = ce;
const In = {
  BASE_URL: "http://ec2-13-127-33-137.ap-south-1.compute.amazonaws.com"
  // BASE_URL: "https://af11-182-156-141-17.ngrok-free.app",
}, Fe = ce.create({
  baseURL: In.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), qi = () => localStorage.getItem("access_token"), Gi = () => localStorage.getItem("refresh_token");
Fe.interceptors.request.use(
  (t) => {
    const e = qi();
    return e && (t.headers.Authorization = `Bearer ${e}`), t;
  },
  (t) => Promise.reject(t)
);
Fe.interceptors.response.use(
  (t) => t,
  async (t) => {
    const e = t.config;
    if (t.response && t.response.status === 401 && !e._retry) {
      e._retry = !0;
      const r = Gi();
      if (r)
        try {
          const n = await ce.post(`${In.BASE_URL}/auth/refresh-token`, {
            refreshToken: r
          });
          return localStorage.setItem("access_token", n.data.access_token), e.headers.Authorization = `Bearer ${n.data.access_token}`, Fe(e);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(t);
  }
);
function tt(t) {
  var e;
  if (ce.isAxiosError(t)) {
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
      const n = await Fe.post(e, r);
      return console.log(n.data), n.data;
    } catch (n) {
      tt(n);
    }
  }
  // Get all Data
  async getData(e) {
    try {
      return (await Fe.get(e)).data.data;
    } catch (r) {
      tt(r);
    }
  }
  // Get an Data by ID
  async getDataById(e, r) {
    try {
      const n = await Fe.get(`${e}/${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      tt(n);
    }
  }
  // Get Data by Query
  async getDataByQuery(e, r) {
    try {
      const n = await Fe.get(`${e}?search=${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      tt(n);
    }
  }
  // Update a data by ID
  async updateData(e, r, n) {
    try {
      const o = await Fe.patch(`${e}/${r}`, n);
      return console.log(o.data), o.data;
    } catch (o) {
      tt(o);
    }
  }
  // Delete an Data by ID
  async deleteData(e, r) {
    try {
      const n = await Fe.delete(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      tt(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(e, r) {
    try {
      const n = await Fe.patch(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      tt(n);
    }
  }
}
const We = (t) => {
  const e = new jr();
  return qs({ mutationFn: (r) => e.createData(t, r) });
}, Le = (t, e) => {
  const r = new jr();
  return Ln({ queryKey: e, queryFn: () => r.getData(t) });
}, ze = (t, e, r) => {
  const n = new jr();
  return Ln({ queryKey: r, queryFn: () => n.getDataById(t, e), enabled: !!e });
}, Ye = (t, e) => {
  const r = new jr();
  return qs({ mutationFn: (n) => r.updateData(t, e, n) });
}, yo = "http://ec2-13-127-33-137.ap-south-1.compute.amazonaws.com", Hi = () => ce.create({
  baseURL: yo,
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
    return Ee._axiosInstance || (Ee._axiosInstance = Hi(), Ee.setAuthHeaderInterceptor(), Ee._axiosInstance.interceptors.response.use(Ee.handleSuccess, Ee.handleError)), Ee._axiosInstance;
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
      return (await ce.post(`${yo}/auth/refresh-token`, {
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
        const i = await Ee.refreshAccessToken();
        return Ee.setAccessToken(i), r.headers.set("Authorization", `Bearer ${i}`), Ee._axiosInstance(r);
      } catch (i) {
        console.error("Refresh token failed", i);
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
const Ki = (t) => We(t), Ji = (t) => Le(t, ["getAllRFPA"]), Qi = (t, e) => ze(t, e, ["getRFPA", e]), Xi = (t, e) => Ye(t, e), Zi = (t) => Le(t, ["getAllRFPANumbers"]), eu = (t) => We(t), tu = (t) => Le(t, ["getAllDealSlip"]), ru = (t, e) => ze(t, e, ["getDealSlip"]), nu = (t, e) => Ye(t, e), su = (t) => Le(t, ["getAllDealSlipNumbers"]), ou = (t) => We(t), au = (t) => Le(t, ["getAllGRN"]), iu = (t) => Le(t, ["getAllGRNNumbers"]), uu = (t, e) => ze(t, e, ["getGRN"]), cu = (t, e) => Ye(t, e), lu = (t) => We(t), fu = (t) => Le(t, ["getAllGRN"]), du = (t, e) => ze(t, e, ["getGRN"]), hu = (t, e) => Ye(t, e), pu = (t) => We(t), yu = (t) => Le(t, ["getAllGRN"]), mu = (t, e) => ze(t, e, ["getGRN", e]), vu = (t, e) => Ye(t, e), gu = (t) => We(t), bu = (t) => Le(t, ["getAllGRN"]), Eu = (t, e) => ze(t, e, ["getPMPVoucher"]), Ru = (t, e) => Ye(t, e), _u = (t) => We(t), wu = (t) => Le(t, ["getAllGRN"]), Su = (t, e) => ze(t, e, ["getGRN"]), Cu = (t, e) => Ye(t, e), Ou = (t) => We(t), Tu = (t) => Le(t, ["getAllDeliveryChallan"]), Pu = (t, e) => ze(t, e, ["getDeliveryChallan"]), Au = (t, e) => Ye(t, e), ku = (t) => Le(t, ["getAllDeliveryChallanNumbers"]), Du = (t) => We(t), Lu = (t) => Le(t, ["getAllPaymentRequest"]), xu = (t, e) => ze(t, e, ["getPaymentRequest"]), Fu = (t, e) => Ye(t, e), Wi = async (t) => {
  try {
    const e = await Fe.get(`${In.BASE_URL}/source/${t}`);
    return console.log(e.data), e.data;
  } catch (e) {
    tt(e);
  }
}, Nu = (t) => Ln({ queryKey: ["get-vendors-farmers-data-by-source"], queryFn: () => Wi(t), enabled: !!t });
class ju extends Ee {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getProcurementFilteredData(e, r) {
    const n = `/grns/calculation/tilldate?filterType=${e}&filterValue=${r}`;
    return this.get(n);
  }
  getProcurementAllData() {
    return this.get("/grns/calculation/tilldate");
  }
  getProcurementDataByDates(e, r, n) {
    if (["today", "financialYear", "tillDate"].includes(e)) {
      const o = `/grns/calculations/dates?filterType=${e}`;
      return this.get(o);
    } else if (e === "dateRange") {
      const o = `/grns/calculations/dates?filterType=dateRange&startDate=${r}&endDate=${n}`;
      return this.get(o);
    } else
      throw new Error(`Invalid filterType: ${e}`);
  }
  getSaleAllData() {
    return this.get("/deliveryChallan/calculations/dates?filterType=tilldate");
  }
  getSaleDataByDates(e, r, n) {
    if (["today", "financialYear", "tillDate"].includes(e)) {
      const o = `/deliveryChallan/calculations/dates?filterType=${e}`;
      return this.get(o);
    } else if (e === "dateRange") {
      const o = `/deliveryChallan/calculations/dates?filterType=dateRange&startDate=${r}&endDate=${n}`;
      return this.get(o);
    } else
      throw new Error(`Invalid filterType: ${e}`);
  }
}
export {
  Yi as PURCHASE_API_URL,
  ju as PurchaseDashboardServices,
  eu as useCreateDealSlip,
  Ou as useCreateDeliveryChallan,
  ou as useCreateGRN,
  lu as useCreateLPVoucher,
  pu as useCreateMCVoucher,
  gu as useCreatePMPVoucher,
  Du as useCreatePaymentRequest,
  Ki as useCreateRFPA,
  _u as useCreateTPVoucher,
  tu as useGetAllDealSlip,
  su as useGetAllDealSlipNums,
  Tu as useGetAllDeliveryChallan,
  ku as useGetAllDeliveryChallanNums,
  au as useGetAllGRN,
  iu as useGetAllGRNNums,
  fu as useGetAllLPVoucher,
  yu as useGetAllMCVoucher,
  bu as useGetAllPMPVoucher,
  Lu as useGetAllPaymentRequest,
  Ji as useGetAllRFPA,
  Zi as useGetAllRFPANums,
  wu as useGetAllTPVoucher,
  ru as useGetDealSlip,
  Pu as useGetDeliveryChallan,
  uu as useGetGRN,
  du as useGetLPVoucher,
  mu as useGetMCVoucher,
  Eu as useGetPMPVoucher,
  xu as useGetPaymentRequest,
  Qi as useGetRFPA,
  Su as useGetTPVoucher,
  Nu as useGetVendorOrFarmerBySource,
  nu as useUpdateDealSlip,
  Au as useUpdateDeliveryChallan,
  cu as useUpdateGRN,
  hu as useUpdateLPVoucher,
  vu as useUpdateMCVoucher,
  Ru as useUpdatePMPVoucher,
  Fu as useUpdatePaymentRequest,
  Xi as useUpdateRFPA,
  Cu as useUpdateTPVoucher
};
