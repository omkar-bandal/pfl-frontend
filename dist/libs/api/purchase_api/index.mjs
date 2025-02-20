var ls = (t) => {
  throw TypeError(t);
};
var un = (t, e, r) => e.has(t) || ls("Cannot " + r);
var E = (t, e, r) => (un(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ne = (t, e, r) => e.has(t) ? ls("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), V = (t, e, r, n) => (un(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), ae = (t, e, r) => (un(t, e, "access private method"), r);
const Ki = {
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
}, U = {
  //RFPA
  GET_ALL_RFPA: "/rfpa/",
  GET_RFPA_BY_ID: "/rfpa",
  CREATE_RFPA: "/rfpa/",
  UPDATE_RFPA: "/rfpa",
  DELETE_RFPA: "/rfpa",
  APPROVE_RFPA: "/rfpa/approve/",
  GET_ALL_RFPA_NO: "/rfpa/rfpanumbers/getAllRfpaNo",
  //Deal Slip
  GET_ALL_DEAL_SLIP: "/dealSlip/",
  GET_DEAL_SLIP_BY_ID: "/dealSlip",
  CREATE_DEAL_SLIP: "/dealSlip/",
  UPDATE_DEAL_SLIP: "/dealSlip",
  DELETE_DEAL_SLIP: "/dealSlip",
  APPROVE_DEAL_SLIP: "/dealSlip/approve/",
  GET_ALL_DEAL_SLIP_NO: "/dealSlip/dealslipno/getAlldealslipNo",
  //GRN
  GET_ALL_GRN: "/grns/",
  GET_GRN_BY_ID: "/grns",
  CREATE_GRN: "/grns/",
  UPDATE_GRN: "/grns",
  DELETE_GRN: "/grns",
  APPROVE_GRN: "/grns/approve/",
  GET_ALL_GRN_NO: "/grns/grnnumbers/getAllgrnNo",
  //Payment Request
  GET_ALL_PAYMENT_REQ: "/paymentRequest/",
  GET_PAYMENT_REQ_BY_ID: " /paymentRequest/",
  CREATE_PAYMENT_REQ: "/paymentRequest",
  UPDATE_PAYMENT_REQ: "/paymentRequest",
  DELETE_PAYMENT_REQ: "/paymentRequest",
  //Vouchers
  //Multiple Cash voucher
  GET_ALL_MC_VOUCHER: "/multiCashVoucher/",
  GET_MC_VOUCHER_BY_ID: "/multiCashVoucher",
  CREATE_MC_VOUCHER: "/multiCashVoucher/",
  UPDATE_MC_VOUCHER: "/multiCashVoucher",
  DELETE_MC_VOUCHER: "/multiCashVoucher",
  //PackingMaterialPaymentVoucher
  GET_ALL_PMP_VOUCHER: "/pmpvoucher/",
  GET_PMP_VOUCHER_BY_ID: "/pmpvoucher",
  CREATE_PMP_VOUCHER: "/pmpvoucher/",
  UPDATE_PMP_VOUCHER: "/pmpvoucher",
  DELETE_PMP_VOUCHER: "/pmpvoucher",
  //labour Payment Voucher
  GET_ALL_LP_VOUCHER: "/lpvoucher/",
  GET_LP_VOUCHER_BY_ID: "/lpvoucher",
  CREATE_LP_VOUCHER: "/lpvoucher/",
  UPDATE_LP_VOUCHER: "/lpvoucher",
  DELETE_LP_VOUCHER: "/lpvoucher",
  //Transport Payment Voucher
  GET_ALL_TP_VOUCHER: "/tpvoucher/",
  GET_TP_VOUCHER_BY_ID: "/tpvoucher",
  CREATE_TP_VOUCHER: "/tpvoucher/",
  UPDATE_TP_VOUCHER: "/tpvoucher",
  DELETE_TP_VOUCHER: "/tpvoucher",
  //Delivery Challan
  GET_ALL_DELIVERY_CHALLAN: "/deliveryChallan/",
  GET_DELIVERY_CHALLAN_BY_ID: "/deliveryChallan",
  CREATE_DELIVERY_CHALLAN: "/deliveryChallan/",
  UPDATE_DELIVERY_CHALLAN: "/deliveryChallan",
  DELETE_DELIVERY_CHALLAN: "/deliveryChallan",
  GET_ALL_DELIVERY_CHALLAN_NO: "/deliveryChallan/challanNos/getAllChallanNo"
};
var Lr = class {
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
function jo() {
}
function fs(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Vo(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function br(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Me(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ds(t) {
  return JSON.stringify(
    t,
    (e, r) => pn(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function hn(t, e) {
  if (t === e)
    return t;
  const r = hs(t) && hs(e);
  if (r || pn(t) && pn(e)) {
    const n = r ? t : Object.keys(t), o = n.length, i = r ? e : Object.keys(e), c = i.length, l = r ? [] : {};
    let v = 0;
    for (let m = 0; m < c; m++) {
      const y = r ? m : i[m];
      (!r && n.includes(y) || r) && t[y] === void 0 && e[y] === void 0 ? (l[y] = void 0, v++) : (l[y] = hn(t[y], e[y]), l[y] === t[y] && t[y] !== void 0 && v++);
    }
    return o === c && v === o ? t : l;
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
function hs(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function pn(t) {
  if (!ps(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!ps(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function ps(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ys(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return hn(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return hn(t, e);
  }
  return e;
}
var vt, nt, Dt, Us, Mo = (Us = class extends Lr {
  constructor() {
    super();
    ne(this, vt);
    ne(this, nt);
    ne(this, Dt);
    V(this, Dt, (e) => {
      if (!wr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    E(this, nt) || this.setEventListener(E(this, Dt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = E(this, nt)) == null || e.call(this), V(this, nt, void 0));
  }
  setEventListener(e) {
    var r;
    V(this, Dt, e), (r = E(this, nt)) == null || r.call(this), V(this, nt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    E(this, vt) !== e && (V(this, vt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof E(this, vt) == "boolean" ? E(this, vt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, vt = new WeakMap(), nt = new WeakMap(), Dt = new WeakMap(), Us), $o = new Mo(), kt, st, Ft, xs, Bo = (xs = class extends Lr {
  constructor() {
    super();
    ne(this, kt, !0);
    ne(this, st);
    ne(this, Ft);
    V(this, Ft, (e) => {
      if (!wr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    E(this, st) || this.setEventListener(E(this, Ft));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = E(this, st)) == null || e.call(this), V(this, st, void 0));
  }
  setEventListener(e) {
    var r;
    V(this, Ft, e), (r = E(this, st)) == null || r.call(this), V(this, st, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    E(this, kt) !== e && (V(this, kt, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return E(this, kt);
  }
}, kt = new WeakMap(), st = new WeakMap(), Ft = new WeakMap(), xs), Go = new Bo();
function Ho(t) {
  return (t ?? "online") === "online" ? Go.isOnline() : !0;
}
function qo() {
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
        l.forEach((v) => {
          r(v);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let v;
      e++;
      try {
        v = l();
      } finally {
        e--, e || c();
      }
      return v;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...v) => {
      i(() => {
        l(...v);
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
var Dr = qo();
function Yo(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ho(e.networkMode) ? "fetching" : "paused",
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
var Pe, q, Xt, Te, _t, It, Ve, Zt, Nt, Ut, gt, Rt, ot, xt, Q, Kt, yn, mn, En, vn, _n, gn, Rn, Ms, js, zo = (js = class extends Lr {
  constructor(e, r) {
    super();
    ne(this, Q);
    ne(this, Pe);
    ne(this, q);
    ne(this, Xt);
    ne(this, Te);
    ne(this, _t);
    ne(this, It);
    ne(this, Ve);
    ne(this, Zt);
    ne(this, Nt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    ne(this, Ut);
    ne(this, gt);
    ne(this, Rt);
    ne(this, ot);
    ne(this, xt, /* @__PURE__ */ new Set());
    this.options = r, V(this, Pe, e), V(this, Ve, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (E(this, q).addObserver(this), ms(E(this, q), this.options) ? ae(this, Q, Kt).call(this) : this.updateResult(), ae(this, Q, vn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return bn(
      E(this, q),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return bn(
      E(this, q),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ae(this, Q, _n).call(this), ae(this, Q, gn).call(this), E(this, q).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, o = E(this, q);
    if (this.options = E(this, Pe).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Me(this.options.enabled, E(this, q)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ae(this, Q, Rn).call(this), E(this, q).setOptions(this.options), n._defaulted && !Sr(this.options, n) && E(this, Pe).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: E(this, q),
      observer: this
    });
    const i = this.hasListeners();
    i && Es(
      E(this, q),
      o,
      this.options,
      n
    ) && ae(this, Q, Kt).call(this), this.updateResult(r), i && (E(this, q) !== o || Me(this.options.enabled, E(this, q)) !== Me(n.enabled, E(this, q)) || br(this.options.staleTime, E(this, q)) !== br(n.staleTime, E(this, q))) && ae(this, Q, yn).call(this);
    const c = ae(this, Q, mn).call(this);
    i && (E(this, q) !== o || Me(this.options.enabled, E(this, q)) !== Me(n.enabled, E(this, q)) || c !== E(this, ot)) && ae(this, Q, En).call(this, c);
  }
  getOptimisticResult(e) {
    const r = E(this, Pe).getQueryCache().build(E(this, Pe), e), n = this.createResult(r, e);
    return Qo(this, n) && (V(this, Te, n), V(this, It, this.options), V(this, _t, E(this, q).state)), n;
  }
  getCurrentResult() {
    return E(this, Te);
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
    E(this, xt).add(e);
  }
  getCurrentQuery() {
    return E(this, q);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const r = E(this, Pe).defaultQueryOptions(e), n = E(this, Pe).getQueryCache().build(E(this, Pe), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    return ae(this, Q, Kt).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), E(this, Te)));
  }
  createResult(e, r) {
    var ye;
    const n = E(this, q), o = this.options, i = E(this, Te), c = E(this, _t), l = E(this, It), m = e !== n ? e.state : E(this, Xt), { state: y } = e;
    let _ = { ...y }, N = !1, L;
    if (r._optimisticResults) {
      const ee = this.hasListeners(), Ae = !ee && ms(e, r), $e = ee && Es(e, n, r, o);
      (Ae || $e) && (_ = {
        ..._,
        ...Yo(y.data, e.options)
      }), r._optimisticResults === "isRestoring" && (_.fetchStatus = "idle");
    }
    let { error: A, errorUpdatedAt: P, status: T } = _;
    if (r.select && _.data !== void 0)
      if (i && _.data === (c == null ? void 0 : c.data) && r.select === E(this, Zt))
        L = E(this, Nt);
      else
        try {
          V(this, Zt, r.select), L = r.select(_.data), L = ys(i == null ? void 0 : i.data, L, r), V(this, Nt, L), V(this, Ve, null);
        } catch (ee) {
          V(this, Ve, ee);
        }
    else
      L = _.data;
    if (r.placeholderData !== void 0 && L === void 0 && T === "pending") {
      let ee;
      if (i != null && i.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        ee = i.data;
      else if (ee = typeof r.placeholderData == "function" ? r.placeholderData(
        (ye = E(this, Ut)) == null ? void 0 : ye.state.data,
        E(this, Ut)
      ) : r.placeholderData, r.select && ee !== void 0)
        try {
          ee = r.select(ee), V(this, Ve, null);
        } catch (Ae) {
          V(this, Ve, Ae);
        }
      ee !== void 0 && (T = "success", L = ys(
        i == null ? void 0 : i.data,
        ee,
        r
      ), N = !0);
    }
    E(this, Ve) && (A = E(this, Ve), L = E(this, Nt), P = Date.now(), T = "error");
    const $ = _.fetchStatus === "fetching", k = T === "pending", K = T === "error", ue = k && $, x = L !== void 0;
    return {
      status: T,
      fetchStatus: _.fetchStatus,
      isPending: k,
      isSuccess: T === "success",
      isError: K,
      isInitialLoading: ue,
      isLoading: ue,
      data: L,
      dataUpdatedAt: _.dataUpdatedAt,
      error: A,
      errorUpdatedAt: P,
      failureCount: _.fetchFailureCount,
      failureReason: _.fetchFailureReason,
      errorUpdateCount: _.errorUpdateCount,
      isFetched: _.dataUpdateCount > 0 || _.errorUpdateCount > 0,
      isFetchedAfterMount: _.dataUpdateCount > m.dataUpdateCount || _.errorUpdateCount > m.errorUpdateCount,
      isFetching: $,
      isRefetching: $ && !k,
      isLoadingError: K && !x,
      isPaused: _.fetchStatus === "paused",
      isPlaceholderData: N,
      isRefetchError: K && x,
      isStale: kn(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = E(this, Te), n = this.createResult(E(this, q), this.options);
    if (V(this, _t, E(this, q).state), V(this, It, this.options), E(this, _t).data !== void 0 && V(this, Ut, E(this, q)), Sr(n, r))
      return;
    V(this, Te, n);
    const o = {}, i = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: c } = this.options, l = typeof c == "function" ? c() : c;
      if (l === "all" || !l && !E(this, xt).size)
        return !0;
      const v = new Set(
        l ?? E(this, xt)
      );
      return this.options.throwOnError && v.add("error"), Object.keys(E(this, Te)).some((m) => {
        const y = m;
        return E(this, Te)[y] !== r[y] && v.has(y);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && i() && (o.listeners = !0), ae(this, Q, Ms).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ae(this, Q, vn).call(this);
  }
}, Pe = new WeakMap(), q = new WeakMap(), Xt = new WeakMap(), Te = new WeakMap(), _t = new WeakMap(), It = new WeakMap(), Ve = new WeakMap(), Zt = new WeakMap(), Nt = new WeakMap(), Ut = new WeakMap(), gt = new WeakMap(), Rt = new WeakMap(), ot = new WeakMap(), xt = new WeakMap(), Q = new WeakSet(), Kt = function(e) {
  ae(this, Q, Rn).call(this);
  let r = E(this, q).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(jo)), r;
}, yn = function() {
  ae(this, Q, _n).call(this);
  const e = br(
    this.options.staleTime,
    E(this, q)
  );
  if (wr || E(this, Te).isStale || !fs(e))
    return;
  const n = Vo(E(this, Te).dataUpdatedAt, e) + 1;
  V(this, gt, setTimeout(() => {
    E(this, Te).isStale || this.updateResult();
  }, n));
}, mn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(E(this, q)) : this.options.refetchInterval) ?? !1;
}, En = function(e) {
  ae(this, Q, gn).call(this), V(this, ot, e), !(wr || Me(this.options.enabled, E(this, q)) === !1 || !fs(E(this, ot)) || E(this, ot) === 0) && V(this, Rt, setInterval(() => {
    (this.options.refetchIntervalInBackground || $o.isFocused()) && ae(this, Q, Kt).call(this);
  }, E(this, ot)));
}, vn = function() {
  ae(this, Q, yn).call(this), ae(this, Q, En).call(this, ae(this, Q, mn).call(this));
}, _n = function() {
  E(this, gt) && (clearTimeout(E(this, gt)), V(this, gt, void 0));
}, gn = function() {
  E(this, Rt) && (clearInterval(E(this, Rt)), V(this, Rt, void 0));
}, Rn = function() {
  const e = E(this, Pe).getQueryCache().build(E(this, Pe), this.options);
  if (e === E(this, q))
    return;
  const r = E(this, q);
  V(this, q, e), V(this, Xt, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, Ms = function(e) {
  Dr.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(E(this, Te));
    }), E(this, Pe).getQueryCache().notify({
      query: E(this, q),
      type: "observerResultsUpdated"
    });
  });
}, js);
function Ko(t, e) {
  return Me(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function ms(t, e) {
  return Ko(t, e) || t.state.data !== void 0 && bn(t, e, e.refetchOnMount);
}
function bn(t, e, r) {
  if (Me(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && kn(t, e);
  }
  return !1;
}
function Es(t, e, r, n) {
  return (t !== e || Me(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && kn(t, r);
}
function kn(t, e) {
  return Me(e.enabled, t) !== !1 && t.isStaleByTime(br(e.staleTime, t));
}
function Qo(t, e) {
  return !Sr(t.getCurrentResult(), e);
}
var at, it, Oe, qe, Ye, Cr, Cn, Vs, Jo = (Vs = class extends Lr {
  constructor(e, r) {
    super();
    ne(this, Ye);
    ne(this, at);
    ne(this, it);
    ne(this, Oe);
    ne(this, qe);
    V(this, at, e), this.setOptions(r), this.bindMethods(), ae(this, Ye, Cr).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = E(this, at).defaultMutationOptions(e), Sr(this.options, r) || E(this, at).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: E(this, Oe),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && ds(r.mutationKey) !== ds(this.options.mutationKey) ? this.reset() : ((n = E(this, Oe)) == null ? void 0 : n.state.status) === "pending" && E(this, Oe).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = E(this, Oe)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    ae(this, Ye, Cr).call(this), ae(this, Ye, Cn).call(this, e);
  }
  getCurrentResult() {
    return E(this, it);
  }
  reset() {
    var e;
    (e = E(this, Oe)) == null || e.removeObserver(this), V(this, Oe, void 0), ae(this, Ye, Cr).call(this), ae(this, Ye, Cn).call(this);
  }
  mutate(e, r) {
    var n;
    return V(this, qe, r), (n = E(this, Oe)) == null || n.removeObserver(this), V(this, Oe, E(this, at).getMutationCache().build(E(this, at), this.options)), E(this, Oe).addObserver(this), E(this, Oe).execute(e);
  }
}, at = new WeakMap(), it = new WeakMap(), Oe = new WeakMap(), qe = new WeakMap(), Ye = new WeakSet(), Cr = function() {
  var r;
  const e = ((r = E(this, Oe)) == null ? void 0 : r.state) ?? Wo();
  V(this, it, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Cn = function(e) {
  Dr.batch(() => {
    var r, n, o, i, c, l, v, m;
    if (E(this, qe) && this.hasListeners()) {
      const y = E(this, it).variables, _ = E(this, it).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = E(this, qe)).onSuccess) == null || n.call(r, e.data, y, _), (i = (o = E(this, qe)).onSettled) == null || i.call(o, e.data, null, y, _)) : (e == null ? void 0 : e.type) === "error" && ((l = (c = E(this, qe)).onError) == null || l.call(c, e.error, y, _), (m = (v = E(this, qe)).onSettled) == null || m.call(
        v,
        void 0,
        e.error,
        y,
        _
      ));
    }
    this.listeners.forEach((y) => {
      y(E(this, it));
    });
  });
}, Vs), Tn = { exports: {} }, M = {};
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
function Xo() {
  if (vs) return M;
  vs = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function N(f) {
    return f === null || typeof f != "object" ? null : (f = _ && f[_] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, P = {};
  function T(f, R, B) {
    this.props = f, this.context = R, this.refs = P, this.updater = B || L;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(f, R) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, R, "setState");
  }, T.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function $() {
  }
  $.prototype = T.prototype;
  function k(f, R, B) {
    this.props = f, this.context = R, this.refs = P, this.updater = B || L;
  }
  var K = k.prototype = new $();
  K.constructor = k, A(K, T.prototype), K.isPureReactComponent = !0;
  var ue = Array.isArray, x = Object.prototype.hasOwnProperty, oe = { current: null }, ye = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(f, R, B) {
    var H, W = {}, se = null, te = null;
    if (R != null) for (H in R.ref !== void 0 && (te = R.ref), R.key !== void 0 && (se = "" + R.key), R) x.call(R, H) && !ye.hasOwnProperty(H) && (W[H] = R[H]);
    var Z = arguments.length - 2;
    if (Z === 1) W.children = B;
    else if (1 < Z) {
      for (var J = Array(Z), me = 0; me < Z; me++) J[me] = arguments[me + 2];
      W.children = J;
    }
    if (f && f.defaultProps) for (H in Z = f.defaultProps, Z) W[H] === void 0 && (W[H] = Z[H]);
    return { $$typeof: t, type: f, key: se, ref: te, props: W, _owner: oe.current };
  }
  function Ae(f, R) {
    return { $$typeof: t, type: f.type, key: R, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function $e(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }
  function Mt(f) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(B) {
      return R[B];
    });
  }
  var ut = /\/+/g;
  function be(f, R) {
    return typeof f == "object" && f !== null && f.key != null ? Mt("" + f.key) : R.toString(36);
  }
  function we(f, R, B, H, W) {
    var se = typeof f;
    (se === "undefined" || se === "boolean") && (f = null);
    var te = !1;
    if (f === null) te = !0;
    else switch (se) {
      case "string":
      case "number":
        te = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case t:
          case e:
            te = !0;
        }
    }
    if (te) return te = f, W = W(te), f = H === "" ? "." + be(te, 0) : H, ue(W) ? (B = "", f != null && (B = f.replace(ut, "$&/") + "/"), we(W, R, B, "", function(me) {
      return me;
    })) : W != null && ($e(W) && (W = Ae(W, B + (!W.key || te && te.key === W.key ? "" : ("" + W.key).replace(ut, "$&/") + "/") + f)), R.push(W)), 1;
    if (te = 0, H = H === "" ? "." : H + ":", ue(f)) for (var Z = 0; Z < f.length; Z++) {
      se = f[Z];
      var J = H + be(se, Z);
      te += we(se, R, B, J, W);
    }
    else if (J = N(f), typeof J == "function") for (f = J.call(f), Z = 0; !(se = f.next()).done; ) se = se.value, J = H + be(se, Z++), te += we(se, R, B, J, W);
    else if (se === "object") throw R = String(f), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return te;
  }
  function _e(f, R, B) {
    if (f == null) return f;
    var H = [], W = 0;
    return we(f, H, "", "", function(se) {
      return R.call(B, se, W++);
    }), H;
  }
  function Ie(f) {
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
  var S = { current: null }, xe = { transition: null }, ct = { ReactCurrentDispatcher: S, ReactCurrentBatchConfig: xe, ReactCurrentOwner: oe };
  function Be() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: _e, forEach: function(f, R, B) {
    _e(f, function() {
      R.apply(this, arguments);
    }, B);
  }, count: function(f) {
    var R = 0;
    return _e(f, function() {
      R++;
    }), R;
  }, toArray: function(f) {
    return _e(f, function(R) {
      return R;
    }) || [];
  }, only: function(f) {
    if (!$e(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, M.Component = T, M.Fragment = r, M.Profiler = o, M.PureComponent = k, M.StrictMode = n, M.Suspense = v, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ct, M.act = Be, M.cloneElement = function(f, R, B) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var H = A({}, f.props), W = f.key, se = f.ref, te = f._owner;
    if (R != null) {
      if (R.ref !== void 0 && (se = R.ref, te = oe.current), R.key !== void 0 && (W = "" + R.key), f.type && f.type.defaultProps) var Z = f.type.defaultProps;
      for (J in R) x.call(R, J) && !ye.hasOwnProperty(J) && (H[J] = R[J] === void 0 && Z !== void 0 ? Z[J] : R[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) H.children = B;
    else if (1 < J) {
      Z = Array(J);
      for (var me = 0; me < J; me++) Z[me] = arguments[me + 2];
      H.children = Z;
    }
    return { $$typeof: t, type: f.type, key: W, ref: se, props: H, _owner: te };
  }, M.createContext = function(f) {
    return f = { $$typeof: c, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: i, _context: f }, f.Consumer = f;
  }, M.createElement = ee, M.createFactory = function(f) {
    var R = ee.bind(null, f);
    return R.type = f, R;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(f) {
    return { $$typeof: l, render: f };
  }, M.isValidElement = $e, M.lazy = function(f) {
    return { $$typeof: y, _payload: { _status: -1, _result: f }, _init: Ie };
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
  }, M.unstable_act = Be, M.useCallback = function(f, R) {
    return S.current.useCallback(f, R);
  }, M.useContext = function(f) {
    return S.current.useContext(f);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(f) {
    return S.current.useDeferredValue(f);
  }, M.useEffect = function(f, R) {
    return S.current.useEffect(f, R);
  }, M.useId = function() {
    return S.current.useId();
  }, M.useImperativeHandle = function(f, R, B) {
    return S.current.useImperativeHandle(f, R, B);
  }, M.useInsertionEffect = function(f, R) {
    return S.current.useInsertionEffect(f, R);
  }, M.useLayoutEffect = function(f, R) {
    return S.current.useLayoutEffect(f, R);
  }, M.useMemo = function(f, R) {
    return S.current.useMemo(f, R);
  }, M.useReducer = function(f, R, B) {
    return S.current.useReducer(f, R, B);
  }, M.useRef = function(f) {
    return S.current.useRef(f);
  }, M.useState = function(f) {
    return S.current.useState(f);
  }, M.useSyncExternalStore = function(f, R, B) {
    return S.current.useSyncExternalStore(f, R, B);
  }, M.useTransition = function() {
    return S.current.useTransition();
  }, M.version = "18.3.1", M;
}
var Qt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Qt.exports;
var _s;
function Zo() {
  return _s || (_s = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), T = Symbol.iterator, $ = "@@iterator";
      function k(s) {
        if (s === null || typeof s != "object")
          return null;
        var a = T && s[T] || s[$];
        return typeof a == "function" ? a : null;
      }
      var K = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, x = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ye = {}, ee = null;
      function Ae(s) {
        ee = s;
      }
      ye.setExtraStackFrame = function(s) {
        ee = s;
      }, ye.getCurrentStack = null, ye.getStackAddendum = function() {
        var s = "";
        ee && (s += ee);
        var a = ye.getCurrentStack;
        return a && (s += a() || ""), s;
      };
      var $e = !1, Mt = !1, ut = !1, be = !1, we = !1, _e = {
        ReactCurrentDispatcher: K,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: oe
      };
      _e.ReactDebugCurrentFrame = ye, _e.ReactCurrentActQueue = x;
      function Ie(s) {
        {
          for (var a = arguments.length, d = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
            d[p - 1] = arguments[p];
          xe("warn", s, d);
        }
      }
      function S(s) {
        {
          for (var a = arguments.length, d = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
            d[p - 1] = arguments[p];
          xe("error", s, d);
        }
      }
      function xe(s, a, d) {
        {
          var p = _e.ReactDebugCurrentFrame, C = p.getStackAddendum();
          C !== "" && (a += "%s", d = d.concat([C]));
          var O = d.map(function(w) {
            return String(w);
          });
          O.unshift("Warning: " + a), Function.prototype.apply.call(console[s], console, O);
        }
      }
      var ct = {};
      function Be(s, a) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", C = p + "." + a;
          if (ct[C])
            return;
          S("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", a, p), ct[C] = !0;
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
        enqueueReplaceState: function(s, a, d, p) {
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
        enqueueSetState: function(s, a, d, p) {
          Be(s, "setState");
        }
      }, R = Object.assign, B = {};
      Object.freeze(B);
      function H(s, a, d) {
        this.props = s, this.context = a, this.refs = B, this.updater = d || f;
      }
      H.prototype.isReactComponent = {}, H.prototype.setState = function(s, a) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, a, "setState");
      }, H.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var W = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, se = function(s, a) {
          Object.defineProperty(H.prototype, s, {
            get: function() {
              Ie("%s(...) is deprecated in plain JavaScript React classes. %s", a[0], a[1]);
            }
          });
        };
        for (var te in W)
          W.hasOwnProperty(te) && se(te, W[te]);
      }
      function Z() {
      }
      Z.prototype = H.prototype;
      function J(s, a, d) {
        this.props = s, this.context = a, this.refs = B, this.updater = d || f;
      }
      var me = J.prototype = new Z();
      me.constructor = J, R(me, H.prototype), me.isPureReactComponent = !0;
      function jr() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var rr = Array.isArray;
      function Tt(s) {
        return rr(s);
      }
      function Vr(s) {
        {
          var a = typeof Symbol == "function" && Symbol.toStringTag, d = a && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function At(s) {
        try {
          return Qe(s), !1;
        } catch {
          return !0;
        }
      }
      function Qe(s) {
        return "" + s;
      }
      function lt(s) {
        if (At(s))
          return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vr(s)), Qe(s);
      }
      function nr(s, a, d) {
        var p = s.displayName;
        if (p)
          return p;
        var C = a.displayName || a.name || "";
        return C !== "" ? d + "(" + C + ")" : d;
      }
      function ft(s) {
        return s.displayName || "Context";
      }
      function je(s) {
        if (s == null)
          return null;
        if (typeof s.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
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
          case _:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case m:
              var a = s;
              return ft(a) + ".Consumer";
            case v:
              var d = s;
              return ft(d._context) + ".Provider";
            case y:
              return nr(s, s.render, "ForwardRef");
            case L:
              var p = s.displayName || null;
              return p !== null ? p : je(s.type) || "Memo";
            case A: {
              var C = s, O = C._payload, w = C._init;
              try {
                return je(w(O));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var dt = Object.prototype.hasOwnProperty, wt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, sr, or, St;
      St = {};
      function $t(s) {
        if (dt.call(s, "ref")) {
          var a = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function Je(s) {
        if (dt.call(s, "key")) {
          var a = Object.getOwnPropertyDescriptor(s, "key").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function Mr(s, a) {
        var d = function() {
          sr || (sr = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: d,
          configurable: !0
        });
      }
      function ar(s, a) {
        var d = function() {
          or || (or = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: d,
          configurable: !0
        });
      }
      function ir(s) {
        if (typeof s.ref == "string" && oe.current && s.__self && oe.current.stateNode !== s.__self) {
          var a = je(oe.current.type);
          St[a] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a, s.ref), St[a] = !0);
        }
      }
      var ht = function(s, a, d, p, C, O, w) {
        var F = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: s,
          key: a,
          ref: d,
          props: w,
          // Record the component responsible for creating this element.
          _owner: O
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
          value: p
        }), Object.defineProperty(F, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: C
        }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
      };
      function $r(s, a, d) {
        var p, C = {}, O = null, w = null, F = null, Y = null;
        if (a != null) {
          $t(a) && (w = a.ref, ir(a)), Je(a) && (lt(a.key), O = "" + a.key), F = a.__self === void 0 ? null : a.__self, Y = a.__source === void 0 ? null : a.__source;
          for (p in a)
            dt.call(a, p) && !wt.hasOwnProperty(p) && (C[p] = a[p]);
        }
        var re = arguments.length - 2;
        if (re === 1)
          C.children = d;
        else if (re > 1) {
          for (var ce = Array(re), le = 0; le < re; le++)
            ce[le] = arguments[le + 2];
          Object.freeze && Object.freeze(ce), C.children = ce;
        }
        if (s && s.defaultProps) {
          var he = s.defaultProps;
          for (p in he)
            C[p] === void 0 && (C[p] = he[p]);
        }
        if (O || w) {
          var Ee = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          O && Mr(C, Ee), w && ar(C, Ee);
        }
        return ht(s, O, w, F, Y, oe.current, C);
      }
      function Br(s, a) {
        var d = ht(s.type, a, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function Gr(s, a, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, C = R({}, s.props), O = s.key, w = s.ref, F = s._self, Y = s._source, re = s._owner;
        if (a != null) {
          $t(a) && (w = a.ref, re = oe.current), Je(a) && (lt(a.key), O = "" + a.key);
          var ce;
          s.type && s.type.defaultProps && (ce = s.type.defaultProps);
          for (p in a)
            dt.call(a, p) && !wt.hasOwnProperty(p) && (a[p] === void 0 && ce !== void 0 ? C[p] = ce[p] : C[p] = a[p]);
        }
        var le = arguments.length - 2;
        if (le === 1)
          C.children = d;
        else if (le > 1) {
          for (var he = Array(le), Ee = 0; Ee < le; Ee++)
            he[Ee] = arguments[Ee + 2];
          C.children = he;
        }
        return ht(s.type, O, w, F, Y, re, C);
      }
      function Xe(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var ur = ".", Hr = ":";
      function qr(s) {
        var a = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(a, function(C) {
          return d[C];
        });
        return "$" + p;
      }
      var Pt = !1, cr = /\/+/g;
      function Ge(s) {
        return s.replace(cr, "$&/");
      }
      function pt(s, a) {
        return typeof s == "object" && s !== null && s.key != null ? (lt(s.key), qr("" + s.key)) : a.toString(36);
      }
      function Ze(s, a, d, p, C) {
        var O = typeof s;
        (O === "undefined" || O === "boolean") && (s = null);
        var w = !1;
        if (s === null)
          w = !0;
        else
          switch (O) {
            case "string":
            case "number":
              w = !0;
              break;
            case "object":
              switch (s.$$typeof) {
                case n:
                case o:
                  w = !0;
              }
          }
        if (w) {
          var F = s, Y = C(F), re = p === "" ? ur + pt(F, 0) : p;
          if (Tt(Y)) {
            var ce = "";
            re != null && (ce = Ge(re) + "/"), Ze(Y, a, ce, "", function(xo) {
              return xo;
            });
          } else Y != null && (Xe(Y) && (Y.key && (!F || F.key !== Y.key) && lt(Y.key), Y = Br(
            Y,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Y.key && (!F || F.key !== Y.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ge("" + Y.key) + "/"
            ) : "") + re
          )), a.push(Y));
          return 1;
        }
        var le, he, Ee = 0, Re = p === "" ? ur : p + Hr;
        if (Tt(s))
          for (var Rr = 0; Rr < s.length; Rr++)
            le = s[Rr], he = Re + pt(le, Rr), Ee += Ze(le, a, d, he, C);
        else {
          var an = k(s);
          if (typeof an == "function") {
            var is = s;
            an === is.entries && (Pt || Ie("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Pt = !0);
            for (var No = an.call(is), us, Uo = 0; !(us = No.next()).done; )
              le = us.value, he = Re + pt(le, Uo++), Ee += Ze(le, a, d, he, C);
          } else if (O === "object") {
            var cs = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (cs === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : cs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Ee;
      }
      function yt(s, a, d) {
        if (s == null)
          return s;
        var p = [], C = 0;
        return Ze(s, p, "", "", function(O) {
          return a.call(d, O, C++);
        }), p;
      }
      function Yr(s) {
        var a = 0;
        return yt(s, function() {
          a++;
        }), a;
      }
      function lr(s, a, d) {
        yt(s, function() {
          a.apply(this, arguments);
        }, d);
      }
      function Wr(s) {
        return yt(s, function(a) {
          return a;
        }) || [];
      }
      function fr(s) {
        if (!Xe(s))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
      function dr(s) {
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
          $$typeof: v,
          _context: a
        };
        var d = !1, p = !1, C = !1;
        {
          var O = {
            $$typeof: m,
            _context: a
          };
          Object.defineProperties(O, {
            Provider: {
              get: function() {
                return p || (p = !0, S("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), a.Provider;
              },
              set: function(w) {
                a.Provider = w;
              }
            },
            _currentValue: {
              get: function() {
                return a._currentValue;
              },
              set: function(w) {
                a._currentValue = w;
              }
            },
            _currentValue2: {
              get: function() {
                return a._currentValue2;
              },
              set: function(w) {
                a._currentValue2 = w;
              }
            },
            _threadCount: {
              get: function() {
                return a._threadCount;
              },
              set: function(w) {
                a._threadCount = w;
              }
            },
            Consumer: {
              get: function() {
                return d || (d = !0, S("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), a.Consumer;
              }
            },
            displayName: {
              get: function() {
                return a.displayName;
              },
              set: function(w) {
                C || (Ie("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", w), C = !0);
              }
            }
          }), a.Consumer = O;
        }
        return a._currentRenderer = null, a._currentRenderer2 = null, a;
      }
      var mt = -1, Bt = 0, Gt = 1, hr = 2;
      function zr(s) {
        if (s._status === mt) {
          var a = s._result, d = a();
          if (d.then(function(O) {
            if (s._status === Bt || s._status === mt) {
              var w = s;
              w._status = Gt, w._result = O;
            }
          }, function(O) {
            if (s._status === Bt || s._status === mt) {
              var w = s;
              w._status = hr, w._result = O;
            }
          }), s._status === mt) {
            var p = s;
            p._status = Bt, p._result = d;
          }
        }
        if (s._status === Gt) {
          var C = s._result;
          return C === void 0 && S(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, C), "default" in C || S(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, C), C.default;
        } else
          throw s._result;
      }
      function Kr(s) {
        var a = {
          // We use these fields to store the result.
          _status: mt,
          _result: s
        }, d = {
          $$typeof: A,
          _payload: a,
          _init: zr
        };
        {
          var p, C;
          Object.defineProperties(d, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(O) {
                S("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = O, Object.defineProperty(d, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return C;
              },
              set: function(O) {
                S("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), C = O, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function Qr(s) {
        s != null && s.$$typeof === L ? S("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? S("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && S("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && S("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
      var pr;
      pr = Symbol.for("react.module.reference");
      function u(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === i || s === l || we || s === c || s === _ || s === N || be || s === P || $e || Mt || ut || typeof s == "object" && s !== null && (s.$$typeof === A || s.$$typeof === L || s.$$typeof === v || s.$$typeof === m || s.$$typeof === y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === pr || s.getModuleId !== void 0));
      }
      function g(s, a) {
        u(s) || S("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
        var d = {
          $$typeof: L,
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
            set: function(C) {
              p = C, !s.name && !s.displayName && (s.displayName = C);
            }
          });
        }
        return d;
      }
      function b() {
        var s = K.current;
        return s === null && S(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
      }
      function D(s) {
        var a = b();
        if (s._context !== void 0) {
          var d = s._context;
          d.Consumer === s ? S("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === s && S("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return a.useContext(s);
      }
      function z(s) {
        var a = b();
        return a.useState(s);
      }
      function X(s, a, d) {
        var p = b();
        return p.useReducer(s, a, d);
      }
      function G(s) {
        var a = b();
        return a.useRef(s);
      }
      function j(s, a) {
        var d = b();
        return d.useEffect(s, a);
      }
      function ge(s, a) {
        var d = b();
        return d.useInsertionEffect(s, a);
      }
      function de(s, a) {
        var d = b();
        return d.useLayoutEffect(s, a);
      }
      function pe(s, a) {
        var d = b();
        return d.useCallback(s, a);
      }
      function Se(s, a) {
        var d = b();
        return d.useMemo(s, a);
      }
      function et(s, a, d) {
        var p = b();
        return p.useImperativeHandle(s, a, d);
      }
      function He(s, a) {
        {
          var d = b();
          return d.useDebugValue(s, a);
        }
      }
      function Ce() {
        var s = b();
        return s.useTransition();
      }
      function Ht(s) {
        var a = b();
        return a.useDeferredValue(s);
      }
      function Jr() {
        var s = b();
        return s.useId();
      }
      function Xr(s, a, d) {
        var p = b();
        return p.useSyncExternalStore(s, a, d);
      }
      var qt = 0, Mn, $n, Bn, Gn, Hn, qn, Yn;
      function Wn() {
      }
      Wn.__reactDisabledLog = !0;
      function Eo() {
        {
          if (qt === 0) {
            Mn = console.log, $n = console.info, Bn = console.warn, Gn = console.error, Hn = console.group, qn = console.groupCollapsed, Yn = console.groupEnd;
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
          qt++;
        }
      }
      function vo() {
        {
          if (qt--, qt === 0) {
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
                value: Bn
              }),
              error: R({}, s, {
                value: Gn
              }),
              group: R({}, s, {
                value: Hn
              }),
              groupCollapsed: R({}, s, {
                value: qn
              }),
              groupEnd: R({}, s, {
                value: Yn
              })
            });
          }
          qt < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Zr = _e.ReactCurrentDispatcher, en;
      function yr(s, a, d) {
        {
          if (en === void 0)
            try {
              throw Error();
            } catch (C) {
              var p = C.stack.trim().match(/\n( *(at )?)/);
              en = p && p[1] || "";
            }
          return `
` + en + s;
        }
      }
      var tn = !1, mr;
      {
        var _o = typeof WeakMap == "function" ? WeakMap : Map;
        mr = new _o();
      }
      function zn(s, a) {
        if (!s || tn)
          return "";
        {
          var d = mr.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        tn = !0;
        var C = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var O;
        O = Zr.current, Zr.current = null, Eo();
        try {
          if (a) {
            var w = function() {
              throw Error();
            };
            if (Object.defineProperty(w.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(w, []);
              } catch (Re) {
                p = Re;
              }
              Reflect.construct(s, [], w);
            } else {
              try {
                w.call();
              } catch (Re) {
                p = Re;
              }
              s.call(w.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Re) {
              p = Re;
            }
            s();
          }
        } catch (Re) {
          if (Re && p && typeof Re.stack == "string") {
            for (var F = Re.stack.split(`
`), Y = p.stack.split(`
`), re = F.length - 1, ce = Y.length - 1; re >= 1 && ce >= 0 && F[re] !== Y[ce]; )
              ce--;
            for (; re >= 1 && ce >= 0; re--, ce--)
              if (F[re] !== Y[ce]) {
                if (re !== 1 || ce !== 1)
                  do
                    if (re--, ce--, ce < 0 || F[re] !== Y[ce]) {
                      var le = `
` + F[re].replace(" at new ", " at ");
                      return s.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", s.displayName)), typeof s == "function" && mr.set(s, le), le;
                    }
                  while (re >= 1 && ce >= 0);
                break;
              }
          }
        } finally {
          tn = !1, Zr.current = O, vo(), Error.prepareStackTrace = C;
        }
        var he = s ? s.displayName || s.name : "", Ee = he ? yr(he) : "";
        return typeof s == "function" && mr.set(s, Ee), Ee;
      }
      function go(s, a, d) {
        return zn(s, !1);
      }
      function Ro(s) {
        var a = s.prototype;
        return !!(a && a.isReactComponent);
      }
      function Er(s, a, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return zn(s, Ro(s));
        if (typeof s == "string")
          return yr(s);
        switch (s) {
          case _:
            return yr("Suspense");
          case N:
            return yr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case y:
              return go(s.render);
            case L:
              return Er(s.type, a, d);
            case A: {
              var p = s, C = p._payload, O = p._init;
              try {
                return Er(O(C), a, d);
              } catch {
              }
            }
          }
        return "";
      }
      var Kn = {}, Qn = _e.ReactDebugCurrentFrame;
      function vr(s) {
        if (s) {
          var a = s._owner, d = Er(s.type, s._source, a ? a.type : null);
          Qn.setExtraStackFrame(d);
        } else
          Qn.setExtraStackFrame(null);
      }
      function bo(s, a, d, p, C) {
        {
          var O = Function.call.bind(dt);
          for (var w in s)
            if (O(s, w)) {
              var F = void 0;
              try {
                if (typeof s[w] != "function") {
                  var Y = Error((p || "React class") + ": " + d + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Y.name = "Invariant Violation", Y;
                }
                F = s[w](a, w, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (re) {
                F = re;
              }
              F && !(F instanceof Error) && (vr(C), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, w, typeof F), vr(null)), F instanceof Error && !(F.message in Kn) && (Kn[F.message] = !0, vr(C), S("Failed %s type: %s", d, F.message), vr(null));
            }
        }
      }
      function Ot(s) {
        if (s) {
          var a = s._owner, d = Er(s.type, s._source, a ? a.type : null);
          Ae(d);
        } else
          Ae(null);
      }
      var rn;
      rn = !1;
      function Jn() {
        if (oe.current) {
          var s = je(oe.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function Co(s) {
        if (s !== void 0) {
          var a = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + a + ":" + d + ".";
        }
        return "";
      }
      function To(s) {
        return s != null ? Co(s.__source) : "";
      }
      var Xn = {};
      function Ao(s) {
        var a = Jn();
        if (!a) {
          var d = typeof s == "string" ? s : s.displayName || s.name;
          d && (a = `

Check the top-level render call using <` + d + ">.");
        }
        return a;
      }
      function Zn(s, a) {
        if (!(!s._store || s._store.validated || s.key != null)) {
          s._store.validated = !0;
          var d = Ao(a);
          if (!Xn[d]) {
            Xn[d] = !0;
            var p = "";
            s && s._owner && s._owner !== oe.current && (p = " It was passed a child from " + je(s._owner.type) + "."), Ot(s), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), Ot(null);
          }
        }
      }
      function es(s, a) {
        if (typeof s == "object") {
          if (Tt(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              Xe(p) && Zn(p, a);
            }
          else if (Xe(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var C = k(s);
            if (typeof C == "function" && C !== s.entries)
              for (var O = C.call(s), w; !(w = O.next()).done; )
                Xe(w.value) && Zn(w.value, a);
          }
        }
      }
      function ts(s) {
        {
          var a = s.type;
          if (a == null || typeof a == "string")
            return;
          var d;
          if (typeof a == "function")
            d = a.propTypes;
          else if (typeof a == "object" && (a.$$typeof === y || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          a.$$typeof === L))
            d = a.propTypes;
          else
            return;
          if (d) {
            var p = je(a);
            bo(d, s.props, "prop", p, s);
          } else if (a.PropTypes !== void 0 && !rn) {
            rn = !0;
            var C = je(a);
            S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
          }
          typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function wo(s) {
        {
          for (var a = Object.keys(s.props), d = 0; d < a.length; d++) {
            var p = a[d];
            if (p !== "children" && p !== "key") {
              Ot(s), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Ot(null);
              break;
            }
          }
          s.ref !== null && (Ot(s), S("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
        }
      }
      function rs(s, a, d) {
        var p = u(s);
        if (!p) {
          var C = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = To(a);
          O ? C += O : C += Jn();
          var w;
          s === null ? w = "null" : Tt(s) ? w = "array" : s !== void 0 && s.$$typeof === n ? (w = "<" + (je(s.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : w = typeof s, S("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, C);
        }
        var F = $r.apply(this, arguments);
        if (F == null)
          return F;
        if (p)
          for (var Y = 2; Y < arguments.length; Y++)
            es(arguments[Y], s);
        return s === i ? wo(F) : ts(F), F;
      }
      var ns = !1;
      function So(s) {
        var a = rs.bind(null, s);
        return a.type = s, ns || (ns = !0, Ie("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(a, "type", {
          enumerable: !1,
          get: function() {
            return Ie("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), a;
      }
      function Po(s, a, d) {
        for (var p = Gr.apply(this, arguments), C = 2; C < arguments.length; C++)
          es(arguments[C], p.type);
        return ts(p), p;
      }
      function Oo(s, a) {
        var d = ue.transition;
        ue.transition = {};
        var p = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          s();
        } finally {
          if (ue.transition = d, d === null && p._updatedFibers) {
            var C = p._updatedFibers.size;
            C > 10 && Ie("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var ss = !1, _r = null;
      function Lo(s) {
        if (_r === null)
          try {
            var a = ("require" + Math.random()).slice(0, 7), d = t && t[a];
            _r = d.call(t, "timers").setImmediate;
          } catch {
            _r = function(C) {
              ss === !1 && (ss = !0, typeof MessageChannel > "u" && S("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var O = new MessageChannel();
              O.port1.onmessage = C, O.port2.postMessage(void 0);
            };
          }
        return _r(s);
      }
      var Lt = 0, os = !1;
      function as(s) {
        {
          var a = Lt;
          Lt++, x.current === null && (x.current = []);
          var d = x.isBatchingLegacy, p;
          try {
            if (x.isBatchingLegacy = !0, p = s(), !d && x.didScheduleLegacyUpdate) {
              var C = x.current;
              C !== null && (x.didScheduleLegacyUpdate = !1, on(C));
            }
          } catch (he) {
            throw gr(a), he;
          } finally {
            x.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var O = p, w = !1, F = {
              then: function(he, Ee) {
                w = !0, O.then(function(Re) {
                  gr(a), Lt === 0 ? nn(Re, he, Ee) : he(Re);
                }, function(Re) {
                  gr(a), Ee(Re);
                });
              }
            };
            return !os && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              w || (os = !0, S("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), F;
          } else {
            var Y = p;
            if (gr(a), Lt === 0) {
              var re = x.current;
              re !== null && (on(re), x.current = null);
              var ce = {
                then: function(he, Ee) {
                  x.current === null ? (x.current = [], nn(Y, he, Ee)) : he(Y);
                }
              };
              return ce;
            } else {
              var le = {
                then: function(he, Ee) {
                  he(Y);
                }
              };
              return le;
            }
          }
        }
      }
      function gr(s) {
        s !== Lt - 1 && S("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Lt = s;
      }
      function nn(s, a, d) {
        {
          var p = x.current;
          if (p !== null)
            try {
              on(p), Lo(function() {
                p.length === 0 ? (x.current = null, a(s)) : nn(s, a, d);
              });
            } catch (C) {
              d(C);
            }
          else
            a(s);
        }
      }
      var sn = !1;
      function on(s) {
        if (!sn) {
          sn = !0;
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
            sn = !1;
          }
        }
      }
      var Do = rs, ko = Po, Fo = So, Io = {
        map: yt,
        forEach: lr,
        count: Yr,
        toArray: Wr,
        only: fr
      };
      e.Children = Io, e.Component = H, e.Fragment = i, e.Profiler = l, e.PureComponent = J, e.StrictMode = c, e.Suspense = _, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _e, e.act = as, e.cloneElement = ko, e.createContext = dr, e.createElement = Do, e.createFactory = Fo, e.createRef = jr, e.forwardRef = Qr, e.isValidElement = Xe, e.lazy = Kr, e.memo = g, e.startTransition = Oo, e.unstable_act = as, e.useCallback = pe, e.useContext = D, e.useDebugValue = He, e.useDeferredValue = Ht, e.useEffect = j, e.useId = Jr, e.useImperativeHandle = et, e.useInsertionEffect = ge, e.useLayoutEffect = de, e.useMemo = Se, e.useReducer = X, e.useRef = G, e.useState = z, e.useSyncExternalStore = Xr, e.useTransition = Ce, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Qt, Qt.exports)), Qt.exports;
}
process.env.NODE_ENV === "production" ? Tn.exports = Xo() : Tn.exports = Zo();
var ve = Tn.exports, Yt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs;
function ea() {
  if (gs) return Yt;
  gs = 1;
  var t = ve, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, v, m) {
    var y, _ = {}, N = null, L = null;
    m !== void 0 && (N = "" + m), v.key !== void 0 && (N = "" + v.key), v.ref !== void 0 && (L = v.ref);
    for (y in v) n.call(v, y) && !i.hasOwnProperty(y) && (_[y] = v[y]);
    if (l && l.defaultProps) for (y in v = l.defaultProps, v) _[y] === void 0 && (_[y] = v[y]);
    return { $$typeof: e, type: l, key: N, ref: L, props: _, _owner: o.current };
  }
  return Yt.Fragment = r, Yt.jsx = c, Yt.jsxs = c, Yt;
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
var Rs;
function ta() {
  return Rs || (Rs = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ve, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), A = Symbol.iterator, P = "@@iterator";
    function T(u) {
      if (u === null || typeof u != "object")
        return null;
      var g = A && u[A] || u[P];
      return typeof g == "function" ? g : null;
    }
    var $ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(u) {
      {
        for (var g = arguments.length, b = new Array(g > 1 ? g - 1 : 0), D = 1; D < g; D++)
          b[D - 1] = arguments[D];
        K("error", u, b);
      }
    }
    function K(u, g, b) {
      {
        var D = $.ReactDebugCurrentFrame, z = D.getStackAddendum();
        z !== "" && (g += "%s", b = b.concat([z]));
        var X = b.map(function(G) {
          return String(G);
        });
        X.unshift("Warning: " + g), Function.prototype.apply.call(console[u], console, X);
      }
    }
    var ue = !1, x = !1, oe = !1, ye = !1, ee = !1, Ae;
    Ae = Symbol.for("react.module.reference");
    function $e(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === i || ee || u === o || u === m || u === y || ye || u === L || ue || x || oe || typeof u == "object" && u !== null && (u.$$typeof === N || u.$$typeof === _ || u.$$typeof === c || u.$$typeof === l || u.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === Ae || u.getModuleId !== void 0));
    }
    function Mt(u, g, b) {
      var D = u.displayName;
      if (D)
        return D;
      var z = g.displayName || g.name || "";
      return z !== "" ? b + "(" + z + ")" : b;
    }
    function ut(u) {
      return u.displayName || "Context";
    }
    function be(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
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
            var g = u;
            return ut(g) + ".Consumer";
          case c:
            var b = u;
            return ut(b._context) + ".Provider";
          case v:
            return Mt(u, u.render, "ForwardRef");
          case _:
            var D = u.displayName || null;
            return D !== null ? D : be(u.type) || "Memo";
          case N: {
            var z = u, X = z._payload, G = z._init;
            try {
              return be(G(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var we = Object.assign, _e = 0, Ie, S, xe, ct, Be, f, R;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function H() {
      {
        if (_e === 0) {
          Ie = console.log, S = console.info, xe = console.warn, ct = console.error, Be = console.group, f = console.groupCollapsed, R = console.groupEnd;
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
        _e++;
      }
    }
    function W() {
      {
        if (_e--, _e === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: we({}, u, {
              value: Ie
            }),
            info: we({}, u, {
              value: S
            }),
            warn: we({}, u, {
              value: xe
            }),
            error: we({}, u, {
              value: ct
            }),
            group: we({}, u, {
              value: Be
            }),
            groupCollapsed: we({}, u, {
              value: f
            }),
            groupEnd: we({}, u, {
              value: R
            })
          });
        }
        _e < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = $.ReactCurrentDispatcher, te;
    function Z(u, g, b) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (z) {
            var D = z.stack.trim().match(/\n( *(at )?)/);
            te = D && D[1] || "";
          }
        return `
` + te + u;
      }
    }
    var J = !1, me;
    {
      var jr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new jr();
    }
    function rr(u, g) {
      if (!u || J)
        return "";
      {
        var b = me.get(u);
        if (b !== void 0)
          return b;
      }
      var D;
      J = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = se.current, se.current = null, H();
      try {
        if (g) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (Ce) {
              D = Ce;
            }
            Reflect.construct(u, [], G);
          } else {
            try {
              G.call();
            } catch (Ce) {
              D = Ce;
            }
            u.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            D = Ce;
          }
          u();
        }
      } catch (Ce) {
        if (Ce && D && typeof Ce.stack == "string") {
          for (var j = Ce.stack.split(`
`), ge = D.stack.split(`
`), de = j.length - 1, pe = ge.length - 1; de >= 1 && pe >= 0 && j[de] !== ge[pe]; )
            pe--;
          for (; de >= 1 && pe >= 0; de--, pe--)
            if (j[de] !== ge[pe]) {
              if (de !== 1 || pe !== 1)
                do
                  if (de--, pe--, pe < 0 || j[de] !== ge[pe]) {
                    var Se = `
` + j[de].replace(" at new ", " at ");
                    return u.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", u.displayName)), typeof u == "function" && me.set(u, Se), Se;
                  }
                while (de >= 1 && pe >= 0);
              break;
            }
        }
      } finally {
        J = !1, se.current = X, W(), Error.prepareStackTrace = z;
      }
      var et = u ? u.displayName || u.name : "", He = et ? Z(et) : "";
      return typeof u == "function" && me.set(u, He), He;
    }
    function Tt(u, g, b) {
      return rr(u, !1);
    }
    function Vr(u) {
      var g = u.prototype;
      return !!(g && g.isReactComponent);
    }
    function At(u, g, b) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return rr(u, Vr(u));
      if (typeof u == "string")
        return Z(u);
      switch (u) {
        case m:
          return Z("Suspense");
        case y:
          return Z("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case v:
            return Tt(u.render);
          case _:
            return At(u.type, g, b);
          case N: {
            var D = u, z = D._payload, X = D._init;
            try {
              return At(X(z), g, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, lt = {}, nr = $.ReactDebugCurrentFrame;
    function ft(u) {
      if (u) {
        var g = u._owner, b = At(u.type, u._source, g ? g.type : null);
        nr.setExtraStackFrame(b);
      } else
        nr.setExtraStackFrame(null);
    }
    function je(u, g, b, D, z) {
      {
        var X = Function.call.bind(Qe);
        for (var G in u)
          if (X(u, G)) {
            var j = void 0;
            try {
              if (typeof u[G] != "function") {
                var ge = Error((D || "React class") + ": " + b + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              j = u[G](g, G, D, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (de) {
              j = de;
            }
            j && !(j instanceof Error) && (ft(z), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", b, G, typeof j), ft(null)), j instanceof Error && !(j.message in lt) && (lt[j.message] = !0, ft(z), k("Failed %s type: %s", b, j.message), ft(null));
          }
      }
    }
    var dt = Array.isArray;
    function wt(u) {
      return dt(u);
    }
    function sr(u) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, b = g && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return b;
      }
    }
    function or(u) {
      try {
        return St(u), !1;
      } catch {
        return !0;
      }
    }
    function St(u) {
      return "" + u;
    }
    function $t(u) {
      if (or(u))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(u)), St(u);
    }
    var Je = $.ReactCurrentOwner, Mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, ir, ht;
    ht = {};
    function $r(u) {
      if (Qe.call(u, "ref")) {
        var g = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Br(u) {
      if (Qe.call(u, "key")) {
        var g = Object.getOwnPropertyDescriptor(u, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Gr(u, g) {
      if (typeof u.ref == "string" && Je.current && g && Je.current.stateNode !== g) {
        var b = be(Je.current.type);
        ht[b] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', be(Je.current.type), u.ref), ht[b] = !0);
      }
    }
    function Xe(u, g) {
      {
        var b = function() {
          ar || (ar = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        b.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function ur(u, g) {
      {
        var b = function() {
          ir || (ir = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        b.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Hr = function(u, g, b, D, z, X, G) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: u,
        key: g,
        ref: b,
        props: G,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function qr(u, g, b, D, z) {
      {
        var X, G = {}, j = null, ge = null;
        b !== void 0 && ($t(b), j = "" + b), Br(g) && ($t(g.key), j = "" + g.key), $r(g) && (ge = g.ref, Gr(g, z));
        for (X in g)
          Qe.call(g, X) && !Mr.hasOwnProperty(X) && (G[X] = g[X]);
        if (u && u.defaultProps) {
          var de = u.defaultProps;
          for (X in de)
            G[X] === void 0 && (G[X] = de[X]);
        }
        if (j || ge) {
          var pe = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          j && Xe(G, pe), ge && ur(G, pe);
        }
        return Hr(u, j, ge, z, D, Je.current, G);
      }
    }
    var Pt = $.ReactCurrentOwner, cr = $.ReactDebugCurrentFrame;
    function Ge(u) {
      if (u) {
        var g = u._owner, b = At(u.type, u._source, g ? g.type : null);
        cr.setExtraStackFrame(b);
      } else
        cr.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function Ze(u) {
      return typeof u == "object" && u !== null && u.$$typeof === e;
    }
    function yt() {
      {
        if (Pt.current) {
          var u = be(Pt.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Yr(u) {
      return "";
    }
    var lr = {};
    function Wr(u) {
      {
        var g = yt();
        if (!g) {
          var b = typeof u == "string" ? u : u.displayName || u.name;
          b && (g = `

Check the top-level render call using <` + b + ">.");
        }
        return g;
      }
    }
    function fr(u, g) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var b = Wr(g);
        if (lr[b])
          return;
        lr[b] = !0;
        var D = "";
        u && u._owner && u._owner !== Pt.current && (D = " It was passed a child from " + be(u._owner.type) + "."), Ge(u), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, D), Ge(null);
      }
    }
    function dr(u, g) {
      {
        if (typeof u != "object")
          return;
        if (wt(u))
          for (var b = 0; b < u.length; b++) {
            var D = u[b];
            Ze(D) && fr(D, g);
          }
        else if (Ze(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var z = T(u);
          if (typeof z == "function" && z !== u.entries)
            for (var X = z.call(u), G; !(G = X.next()).done; )
              Ze(G.value) && fr(G.value, g);
        }
      }
    }
    function mt(u) {
      {
        var g = u.type;
        if (g == null || typeof g == "string")
          return;
        var b;
        if (typeof g == "function")
          b = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === _))
          b = g.propTypes;
        else
          return;
        if (b) {
          var D = be(g);
          je(b, u.props, "prop", D, u);
        } else if (g.PropTypes !== void 0 && !pt) {
          pt = !0;
          var z = be(g);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(u) {
      {
        for (var g = Object.keys(u.props), b = 0; b < g.length; b++) {
          var D = g[b];
          if (D !== "children" && D !== "key") {
            Ge(u), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Ge(null);
            break;
          }
        }
        u.ref !== null && (Ge(u), k("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
      }
    }
    var Gt = {};
    function hr(u, g, b, D, z, X) {
      {
        var G = $e(u);
        if (!G) {
          var j = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Yr();
          ge ? j += ge : j += yt();
          var de;
          u === null ? de = "null" : wt(u) ? de = "array" : u !== void 0 && u.$$typeof === e ? (de = "<" + (be(u.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : de = typeof u, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, j);
        }
        var pe = qr(u, g, b, z, X);
        if (pe == null)
          return pe;
        if (G) {
          var Se = g.children;
          if (Se !== void 0)
            if (D)
              if (wt(Se)) {
                for (var et = 0; et < Se.length; et++)
                  dr(Se[et], u);
                Object.freeze && Object.freeze(Se);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dr(Se, u);
        }
        if (Qe.call(g, "key")) {
          var He = be(u), Ce = Object.keys(g).filter(function(Xr) {
            return Xr !== "key";
          }), Ht = Ce.length > 0 ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Gt[He + Ht]) {
            var Jr = Ce.length > 0 ? "{" + Ce.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ht, He, Jr, He), Gt[He + Ht] = !0;
          }
        }
        return u === n ? Bt(pe) : mt(pe), pe;
      }
    }
    function zr(u, g, b) {
      return hr(u, g, b, !0);
    }
    function Kr(u, g, b) {
      return hr(u, g, b, !1);
    }
    var Qr = Kr, pr = zr;
    Wt.Fragment = n, Wt.jsx = Qr, Wt.jsxs = pr;
  }()), Wt;
}
process.env.NODE_ENV === "production" ? ea() : ta();
var ra = ve.createContext(
  void 0
), $s = (t) => {
  const e = ve.useContext(ra);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Bs = ve.createContext(!1), na = () => ve.useContext(Bs);
Bs.Provider;
function sa() {
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
var oa = ve.createContext(sa()), aa = () => ve.useContext(oa);
function Gs(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function ia() {
}
var ua = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, ca = (t) => {
  ve.useEffect(() => {
    t.clearReset();
  }, [t]);
}, la = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && Gs(r, [t.error, n]), fa = (t) => {
  t.suspense && (typeof t.staleTime != "number" && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, da = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, ha = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function pa(t, e, r) {
  var m, y, _, N;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = $s(), o = na(), i = aa(), c = n.defaultQueryOptions(t);
  (y = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || y.call(
    m,
    c
  ), c._optimisticResults = o ? "isRestoring" : "optimistic", fa(c), ua(c, i), ca(i);
  const [l] = ve.useState(
    () => new e(
      n,
      c
    )
  ), v = l.getOptimisticResult(c);
  if (ve.useSyncExternalStore(
    ve.useCallback(
      (L) => {
        const A = o ? () => {
        } : l.subscribe(Dr.batchCalls(L));
        return l.updateResult(), A;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), ve.useEffect(() => {
    l.setOptions(c, { listeners: !1 });
  }, [c, l]), da(c, v))
    throw ha(c, l, i);
  if (la({
    result: v,
    errorResetBoundary: i,
    throwOnError: c.throwOnError,
    query: n.getQueryCache().get(c.queryHash)
  }))
    throw v.error;
  return (N = (_ = n.getDefaultOptions().queries) == null ? void 0 : _._experimental_afterQuery) == null || N.call(
    _,
    c,
    v
  ), c.notifyOnChangeProps ? v : l.trackResult(v);
}
function Fn(t, e) {
  return pa(t, zo);
}
function Hs(t, e) {
  const r = $s(), [n] = ve.useState(
    () => new Jo(
      r,
      t
    )
  );
  ve.useEffect(() => {
    n.setOptions(t);
  }, [n, t]);
  const o = ve.useSyncExternalStore(
    ve.useCallback(
      (c) => n.subscribe(Dr.batchCalls(c)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), i = ve.useCallback(
    (c, l) => {
      n.mutate(c, l).catch(ia);
    },
    [n]
  );
  if (o.error && Gs(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: i, mutateAsync: o.mutate };
}
function qs(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: ya } = Object.prototype, { getPrototypeOf: In } = Object, kr = /* @__PURE__ */ ((t) => (e) => {
  const r = ya.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ue = (t) => (t = t.toLowerCase(), (e) => kr(e) === t), Fr = (t) => (e) => typeof e === t, { isArray: jt } = Array, Jt = Fr("undefined");
function ma(t) {
  return t !== null && !Jt(t) && t.constructor !== null && !Jt(t.constructor) && ke(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ys = Ue("ArrayBuffer");
function Ea(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ys(t.buffer), e;
}
const va = Fr("string"), ke = Fr("function"), Ws = Fr("number"), Ir = (t) => t !== null && typeof t == "object", _a = (t) => t === !0 || t === !1, Tr = (t) => {
  if (kr(t) !== "object")
    return !1;
  const e = In(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, ga = Ue("Date"), Ra = Ue("File"), ba = Ue("Blob"), Ca = Ue("FileList"), Ta = (t) => Ir(t) && ke(t.pipe), Aa = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ke(t.append) && ((e = kr(t)) === "formdata" || // detect form-data instance
  e === "object" && ke(t.toString) && t.toString() === "[object FormData]"));
}, wa = Ue("URLSearchParams"), [Sa, Pa, Oa, La] = ["ReadableStream", "Request", "Response", "Headers"].map(Ue), Da = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function er(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), jt(t))
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
const Et = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ks = (t) => !Jt(t) && t !== Et;
function An() {
  const { caseless: t } = Ks(this) && this || {}, e = {}, r = (n, o) => {
    const i = t && zs(e, o) || o;
    Tr(e[i]) && Tr(n) ? e[i] = An(e[i], n) : Tr(n) ? e[i] = An({}, n) : jt(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && er(arguments[n], r);
  return e;
}
const ka = (t, e, r, { allOwnKeys: n } = {}) => (er(e, (o, i) => {
  r && ke(o) ? t[i] = qs(o, r) : t[i] = o;
}, { allOwnKeys: n }), t), Fa = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Ia = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Na = (t, e, r, n) => {
  let o, i, c;
  const l = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      c = o[i], (!n || n(c, t, e)) && !l[c] && (e[c] = t[c], l[c] = !0);
    t = r !== !1 && In(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Ua = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, xa = (t) => {
  if (!t) return null;
  if (jt(t)) return t;
  let e = t.length;
  if (!Ws(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, ja = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && In(Uint8Array)), Va = (t, e) => {
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
}, $a = Ue("HTMLFormElement"), Ba = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), bs = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Ga = Ue("RegExp"), Qs = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  er(r, (o, i) => {
    let c;
    (c = e(o, i, t)) !== !1 && (n[i] = c || o);
  }), Object.defineProperties(t, n);
}, Ha = (t) => {
  Qs(t, (e, r) => {
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
}, qa = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return jt(t) ? n(t) : n(String(t).split(e)), r;
}, Ya = () => {
}, Wa = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, cn = "abcdefghijklmnopqrstuvwxyz", Cs = "0123456789", Js = {
  DIGIT: Cs,
  ALPHA: cn,
  ALPHA_DIGIT: cn + cn.toUpperCase() + Cs
}, za = (t = 16, e = Js.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Ka(t) {
  return !!(t && ke(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Qa = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (Ir(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const i = jt(n) ? [] : {};
        return er(n, (c, l) => {
          const v = r(c, o + 1);
          !Jt(v) && (i[l] = v);
        }), e[o] = void 0, i;
      }
    }
    return n;
  };
  return r(t, 0);
}, Ja = Ue("AsyncFunction"), Xa = (t) => t && (Ir(t) || ke(t)) && ke(t.then) && ke(t.catch), Xs = ((t, e) => t ? setImmediate : e ? ((r, n) => (Et.addEventListener("message", ({ source: o, data: i }) => {
  o === Et && i === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), Et.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ke(Et.postMessage)
), Za = typeof queueMicrotask < "u" ? queueMicrotask.bind(Et) : typeof process < "u" && process.nextTick || Xs, h = {
  isArray: jt,
  isArrayBuffer: Ys,
  isBuffer: ma,
  isFormData: Aa,
  isArrayBufferView: Ea,
  isString: va,
  isNumber: Ws,
  isBoolean: _a,
  isObject: Ir,
  isPlainObject: Tr,
  isReadableStream: Sa,
  isRequest: Pa,
  isResponse: Oa,
  isHeaders: La,
  isUndefined: Jt,
  isDate: ga,
  isFile: Ra,
  isBlob: ba,
  isRegExp: Ga,
  isFunction: ke,
  isStream: Ta,
  isURLSearchParams: wa,
  isTypedArray: ja,
  isFileList: Ca,
  forEach: er,
  merge: An,
  extend: ka,
  trim: Da,
  stripBOM: Fa,
  inherits: Ia,
  toFlatObject: Na,
  kindOf: kr,
  kindOfTest: Ue,
  endsWith: Ua,
  toArray: xa,
  forEachEntry: Va,
  matchAll: Ma,
  isHTMLForm: $a,
  hasOwnProperty: bs,
  hasOwnProp: bs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Qs,
  freezeMethods: Ha,
  toObjectSet: qa,
  toCamelCase: Ba,
  noop: Ya,
  toFiniteNumber: Wa,
  findKey: zs,
  global: Et,
  isContextDefined: Ks,
  ALPHABET: Js,
  generateString: za,
  isSpecCompliantForm: Ka,
  toJSONObject: Qa,
  isAsyncFn: Ja,
  isThenable: Xa,
  setImmediate: Xs,
  asap: Za
};
function I(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
h.inherits(I, Error, {
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
const Zs = I.prototype, eo = {};
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
  eo[t] = { value: t };
});
Object.defineProperties(I, eo);
Object.defineProperty(Zs, "isAxiosError", { value: !0 });
I.from = (t, e, r, n, o, i) => {
  const c = Object.create(Zs);
  return h.toFlatObject(t, c, function(v) {
    return v !== Error.prototype;
  }, (l) => l !== "isAxiosError"), I.call(c, t.message, e, r, n, o), c.cause = t, c.name = t.name, i && Object.assign(c, i), c;
};
const ei = null;
function wn(t) {
  return h.isPlainObject(t) || h.isArray(t);
}
function to(t) {
  return h.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Ts(t, e, r) {
  return t ? t.concat(e).map(function(o, i) {
    return o = to(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function ti(t) {
  return h.isArray(t) && !t.some(wn);
}
const ri = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Nr(t, e, r) {
  if (!h.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, T) {
    return !h.isUndefined(T[P]);
  });
  const n = r.metaTokens, o = r.visitor || y, i = r.dots, c = r.indexes, v = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(e);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function m(A) {
    if (A === null) return "";
    if (h.isDate(A))
      return A.toISOString();
    if (!v && h.isBlob(A))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(A) || h.isTypedArray(A) ? v && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function y(A, P, T) {
    let $ = A;
    if (A && !T && typeof A == "object") {
      if (h.endsWith(P, "{}"))
        P = n ? P : P.slice(0, -2), A = JSON.stringify(A);
      else if (h.isArray(A) && ti(A) || (h.isFileList(A) || h.endsWith(P, "[]")) && ($ = h.toArray(A)))
        return P = to(P), $.forEach(function(K, ue) {
          !(h.isUndefined(K) || K === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? Ts([P], ue, i) : c === null ? P : P + "[]",
            m(K)
          );
        }), !1;
    }
    return wn(A) ? !0 : (e.append(Ts(T, P, i), m(A)), !1);
  }
  const _ = [], N = Object.assign(ri, {
    defaultVisitor: y,
    convertValue: m,
    isVisitable: wn
  });
  function L(A, P) {
    if (!h.isUndefined(A)) {
      if (_.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + P.join("."));
      _.push(A), h.forEach(A, function($, k) {
        (!(h.isUndefined($) || $ === null) && o.call(
          e,
          $,
          h.isString(k) ? k.trim() : k,
          P,
          N
        )) === !0 && L($, P ? P.concat(k) : [k]);
      }), _.pop();
    }
  }
  if (!h.isObject(t))
    throw new TypeError("data must be an object");
  return L(t), e;
}
function As(t) {
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
function Nn(t, e) {
  this._pairs = [], t && Nr(t, this, e);
}
const ro = Nn.prototype;
ro.append = function(e, r) {
  this._pairs.push([e, r]);
};
ro.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, As);
  } : As;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function ni(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function no(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || ni, o = r && r.serialize;
  let i;
  if (o ? i = o(e, r) : i = h.isURLSearchParams(e) ? e.toString() : new Nn(e, r).toString(n), i) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class ws {
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
const so = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, si = typeof URLSearchParams < "u" ? URLSearchParams : Nn, oi = typeof FormData < "u" ? FormData : null, ai = typeof Blob < "u" ? Blob : null, ii = {
  isBrowser: !0,
  classes: {
    URLSearchParams: si,
    FormData: oi,
    Blob: ai
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Un = typeof window < "u" && typeof document < "u", Sn = typeof navigator == "object" && navigator || void 0, ui = Un && (!Sn || ["ReactNative", "NativeScript", "NS"].indexOf(Sn.product) < 0), ci = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", li = Un && window.location.href || "http://localhost", fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Un,
  hasStandardBrowserEnv: ui,
  hasStandardBrowserWebWorkerEnv: ci,
  navigator: Sn,
  origin: li
}, Symbol.toStringTag, { value: "Module" })), Le = {
  ...fi,
  ...ii
};
function di(t, e) {
  return Nr(t, new Le.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return Le.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function hi(t) {
  return h.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function pi(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], e[i] = t[i];
  return e;
}
function oo(t) {
  function e(r, n, o, i) {
    let c = r[i++];
    if (c === "__proto__") return !0;
    const l = Number.isFinite(+c), v = i >= r.length;
    return c = !c && h.isArray(o) ? o.length : c, v ? (h.hasOwnProp(o, c) ? o[c] = [o[c], n] : o[c] = n, !l) : ((!o[c] || !h.isObject(o[c])) && (o[c] = []), e(r, n, o[c], i) && h.isArray(o[c]) && (o[c] = pi(o[c])), !l);
  }
  if (h.isFormData(t) && h.isFunction(t.entries)) {
    const r = {};
    return h.forEachEntry(t, (n, o) => {
      e(hi(n), o, r, 0);
    }), r;
  }
  return null;
}
function yi(t, e, r) {
  if (h.isString(t))
    try {
      return (e || JSON.parse)(t), h.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(t);
}
const tr = {
  transitional: so,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = h.isObject(e);
    if (i && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
      return o ? JSON.stringify(oo(e)) : e;
    if (h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e) || h.isReadableStream(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return di(e, this.formSerializer).toString();
      if ((l = h.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const v = this.env && this.env.FormData;
        return Nr(
          l ? { "files[]": e } : e,
          v && new v(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), yi(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || tr.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (h.isResponse(e) || h.isReadableStream(e))
      return e;
    if (e && h.isString(e) && (n && !this.responseType || o)) {
      const c = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (l) {
        if (c)
          throw l.name === "SyntaxError" ? I.from(l, I.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
h.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  tr.headers[t] = {};
});
const mi = h.toObjectSet([
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
]), Ei = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(c) {
    o = c.indexOf(":"), r = c.substring(0, o).trim().toLowerCase(), n = c.substring(o + 1).trim(), !(!r || e[r] && mi[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Ss = Symbol("internals");
function zt(t) {
  return t && String(t).trim().toLowerCase();
}
function Ar(t) {
  return t === !1 || t == null ? t : h.isArray(t) ? t.map(Ar) : String(t);
}
function vi(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const _i = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ln(t, e, r, n, o) {
  if (h.isFunction(n))
    return n.call(this, e, r);
  if (o && (e = r), !!h.isString(e)) {
    if (h.isString(n))
      return e.indexOf(n) !== -1;
    if (h.isRegExp(n))
      return n.test(e);
  }
}
function gi(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Ri(t, e) {
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
class De {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function i(l, v, m) {
      const y = zt(v);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const _ = h.findKey(o, y);
      (!_ || o[_] === void 0 || m === !0 || m === void 0 && o[_] !== !1) && (o[_ || v] = Ar(l));
    }
    const c = (l, v) => h.forEach(l, (m, y) => i(m, y, v));
    if (h.isPlainObject(e) || e instanceof this.constructor)
      c(e, r);
    else if (h.isString(e) && (e = e.trim()) && !_i(e))
      c(Ei(e), r);
    else if (h.isHeaders(e))
      for (const [l, v] of e.entries())
        i(v, l, n);
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
      return !!(n && this[n] !== void 0 && (!r || ln(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function i(c) {
      if (c = zt(c), c) {
        const l = h.findKey(n, c);
        l && (!r || ln(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return h.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!e || ln(this, this[i], i, e, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(e) {
    const r = this, n = {};
    return h.forEach(this, (o, i) => {
      const c = h.findKey(n, i);
      if (c) {
        r[c] = Ar(o), delete r[i];
        return;
      }
      const l = e ? gi(i) : String(i).trim();
      l !== i && delete r[i], r[l] = Ar(o), n[l] = !0;
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
    const n = (this[Ss] = this[Ss] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(c) {
      const l = zt(c);
      n[l] || (Ri(o, c), n[l] = !0);
    }
    return h.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
De.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(De.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(De);
function fn(t, e) {
  const r = this || tr, n = e || r, o = De.from(n.headers);
  let i = n.data;
  return h.forEach(t, function(l) {
    i = l.call(r, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function ao(t) {
  return !!(t && t.__CANCEL__);
}
function Vt(t, e, r) {
  I.call(this, t ?? "canceled", I.ERR_CANCELED, e, r), this.name = "CanceledError";
}
h.inherits(Vt, I, {
  __CANCEL__: !0
});
function io(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new I(
    "Request failed with status code " + r.status,
    [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function bi(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Ci(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, i = 0, c;
  return e = e !== void 0 ? e : 1e3, function(v) {
    const m = Date.now(), y = n[i];
    c || (c = m), r[o] = v, n[o] = m;
    let _ = i, N = 0;
    for (; _ !== o; )
      N += r[_++], _ = _ % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), m - c < e)
      return;
    const L = y && m - y;
    return L ? Math.round(N * 1e3 / L) : void 0;
  };
}
function Ti(t, e) {
  let r = 0, n = 1e3 / e, o, i;
  const c = (m, y = Date.now()) => {
    r = y, o = null, i && (clearTimeout(i), i = null), t.apply(null, m);
  };
  return [(...m) => {
    const y = Date.now(), _ = y - r;
    _ >= n ? c(m, y) : (o = m, i || (i = setTimeout(() => {
      i = null, c(o);
    }, n - _)));
  }, () => o && c(o)];
}
const Pr = (t, e, r = 3) => {
  let n = 0;
  const o = Ci(50, 250);
  return Ti((i) => {
    const c = i.loaded, l = i.lengthComputable ? i.total : void 0, v = c - n, m = o(v), y = c <= l;
    n = c;
    const _ = {
      loaded: c,
      total: l,
      progress: l ? c / l : void 0,
      bytes: v,
      rate: m || void 0,
      estimated: m && l && y ? (l - c) / m : void 0,
      event: i,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    t(_);
  }, r);
}, Ps = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Os = (t) => (...e) => h.asap(() => t(...e)), Ai = Le.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = Le.navigator && /(msie|trident)/i.test(Le.navigator.userAgent), r = document.createElement("a");
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
), wi = Le.hasStandardBrowserEnv ? (
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
function Si(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Pi(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function uo(t, e) {
  return t && !Si(e) ? Pi(t, e) : e;
}
const Ls = (t) => t instanceof De ? { ...t } : t;
function Ct(t, e) {
  e = e || {};
  const r = {};
  function n(m, y, _) {
    return h.isPlainObject(m) && h.isPlainObject(y) ? h.merge.call({ caseless: _ }, m, y) : h.isPlainObject(y) ? h.merge({}, y) : h.isArray(y) ? y.slice() : y;
  }
  function o(m, y, _) {
    if (h.isUndefined(y)) {
      if (!h.isUndefined(m))
        return n(void 0, m, _);
    } else return n(m, y, _);
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
  function l(m, y, _) {
    if (_ in e)
      return n(m, y);
    if (_ in t)
      return n(void 0, m);
  }
  const v = {
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
    headers: (m, y) => o(Ls(m), Ls(y), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, t, e)), function(y) {
    const _ = v[y] || o, N = _(t[y], e[y], y);
    h.isUndefined(N) && _ !== l || (r[y] = N);
  }), r;
}
const co = (t) => {
  const e = Ct({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: i, headers: c, auth: l } = e;
  e.headers = c = De.from(c), e.url = no(uo(e.baseURL, e.url), t.params, t.paramsSerializer), l && c.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let v;
  if (h.isFormData(r)) {
    if (Le.hasStandardBrowserEnv || Le.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((v = c.getContentType()) !== !1) {
      const [m, ...y] = v ? v.split(";").map((_) => _.trim()).filter(Boolean) : [];
      c.setContentType([m || "multipart/form-data", ...y].join("; "));
    }
  }
  if (Le.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(e)), n || n !== !1 && Ai(e.url))) {
    const m = o && i && wi.read(i);
    m && c.set(o, m);
  }
  return e;
}, Oi = typeof XMLHttpRequest < "u", Li = Oi && function(t) {
  return new Promise(function(r, n) {
    const o = co(t);
    let i = o.data;
    const c = De.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: v, onDownloadProgress: m } = o, y, _, N, L, A;
    function P() {
      L && L(), A && A(), o.cancelToken && o.cancelToken.unsubscribe(y), o.signal && o.signal.removeEventListener("abort", y);
    }
    let T = new XMLHttpRequest();
    T.open(o.method.toUpperCase(), o.url, !0), T.timeout = o.timeout;
    function $() {
      if (!T)
        return;
      const K = De.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), x = {
        data: !l || l === "text" || l === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: K,
        config: t,
        request: T
      };
      io(function(ye) {
        r(ye), P();
      }, function(ye) {
        n(ye), P();
      }, x), T = null;
    }
    "onloadend" in T ? T.onloadend = $ : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout($);
    }, T.onabort = function() {
      T && (n(new I("Request aborted", I.ECONNABORTED, t, T)), T = null);
    }, T.onerror = function() {
      n(new I("Network Error", I.ERR_NETWORK, t, T)), T = null;
    }, T.ontimeout = function() {
      let ue = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const x = o.transitional || so;
      o.timeoutErrorMessage && (ue = o.timeoutErrorMessage), n(new I(
        ue,
        x.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
        t,
        T
      )), T = null;
    }, i === void 0 && c.setContentType(null), "setRequestHeader" in T && h.forEach(c.toJSON(), function(ue, x) {
      T.setRequestHeader(x, ue);
    }), h.isUndefined(o.withCredentials) || (T.withCredentials = !!o.withCredentials), l && l !== "json" && (T.responseType = o.responseType), m && ([N, A] = Pr(m, !0), T.addEventListener("progress", N)), v && T.upload && ([_, L] = Pr(v), T.upload.addEventListener("progress", _), T.upload.addEventListener("loadend", L)), (o.cancelToken || o.signal) && (y = (K) => {
      T && (n(!K || K.type ? new Vt(null, t, T) : K), T.abort(), T = null);
    }, o.cancelToken && o.cancelToken.subscribe(y), o.signal && (o.signal.aborted ? y() : o.signal.addEventListener("abort", y)));
    const k = bi(o.url);
    if (k && Le.protocols.indexOf(k) === -1) {
      n(new I("Unsupported protocol " + k + ":", I.ERR_BAD_REQUEST, t));
      return;
    }
    T.send(i || null);
  });
}, Di = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const i = function(m) {
      if (!o) {
        o = !0, l();
        const y = m instanceof Error ? m : this.reason;
        n.abort(y instanceof I ? y : new Vt(y instanceof Error ? y.message : y));
      }
    };
    let c = e && setTimeout(() => {
      c = null, i(new I(`timeout ${e} of ms exceeded`, I.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (c && clearTimeout(c), c = null, t.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(i) : m.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((m) => m.addEventListener("abort", i));
    const { signal: v } = n;
    return v.unsubscribe = () => h.asap(l), v;
  }
}, ki = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, Fi = async function* (t, e) {
  for await (const r of Ii(t))
    yield* ki(r, e);
}, Ii = async function* (t) {
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
}, Ds = (t, e, r, n) => {
  const o = Fi(t, e);
  let i = 0, c, l = (v) => {
    c || (c = !0, n && n(v));
  };
  return new ReadableStream({
    async pull(v) {
      try {
        const { done: m, value: y } = await o.next();
        if (m) {
          l(), v.close();
          return;
        }
        let _ = y.byteLength;
        if (r) {
          let N = i += _;
          r(N);
        }
        v.enqueue(new Uint8Array(y));
      } catch (m) {
        throw l(m), m;
      }
    },
    cancel(v) {
      return l(v), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ur = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lo = Ur && typeof ReadableStream == "function", Ni = Ur && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), fo = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Ui = lo && fo(() => {
  let t = !1;
  const e = new Request(Le.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), ks = 64 * 1024, Pn = lo && fo(() => h.isReadableStream(new Response("").body)), Or = {
  stream: Pn && ((t) => t.body)
};
Ur && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Or[e] && (Or[e] = h.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new I(`Response type '${e}' is not supported`, I.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const xi = async (t) => {
  if (t == null)
    return 0;
  if (h.isBlob(t))
    return t.size;
  if (h.isSpecCompliantForm(t))
    return (await new Request(Le.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(t) || h.isArrayBuffer(t))
    return t.byteLength;
  if (h.isURLSearchParams(t) && (t = t + ""), h.isString(t))
    return (await Ni(t)).byteLength;
}, ji = async (t, e) => {
  const r = h.toFiniteNumber(t.getContentLength());
  return r ?? xi(e);
}, Vi = Ur && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: o,
    cancelToken: i,
    timeout: c,
    onDownloadProgress: l,
    onUploadProgress: v,
    responseType: m,
    headers: y,
    withCredentials: _ = "same-origin",
    fetchOptions: N
  } = co(t);
  m = m ? (m + "").toLowerCase() : "text";
  let L = Di([o, i && i.toAbortSignal()], c), A;
  const P = L && L.unsubscribe && (() => {
    L.unsubscribe();
  });
  let T;
  try {
    if (v && Ui && r !== "get" && r !== "head" && (T = await ji(y, n)) !== 0) {
      let x = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), oe;
      if (h.isFormData(n) && (oe = x.headers.get("content-type")) && y.setContentType(oe), x.body) {
        const [ye, ee] = Ps(
          T,
          Pr(Os(v))
        );
        n = Ds(x.body, ks, ye, ee);
      }
    }
    h.isString(_) || (_ = _ ? "include" : "omit");
    const $ = "credentials" in Request.prototype;
    A = new Request(e, {
      ...N,
      signal: L,
      method: r.toUpperCase(),
      headers: y.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: $ ? _ : void 0
    });
    let k = await fetch(A);
    const K = Pn && (m === "stream" || m === "response");
    if (Pn && (l || K && P)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((Ae) => {
        x[Ae] = k[Ae];
      });
      const oe = h.toFiniteNumber(k.headers.get("content-length")), [ye, ee] = l && Ps(
        oe,
        Pr(Os(l), !0)
      ) || [];
      k = new Response(
        Ds(k.body, ks, ye, () => {
          ee && ee(), P && P();
        }),
        x
      );
    }
    m = m || "text";
    let ue = await Or[h.findKey(Or, m) || "text"](k, t);
    return !K && P && P(), await new Promise((x, oe) => {
      io(x, oe, {
        data: ue,
        headers: De.from(k.headers),
        status: k.status,
        statusText: k.statusText,
        config: t,
        request: A
      });
    });
  } catch ($) {
    throw P && P(), $ && $.name === "TypeError" && /fetch/i.test($.message) ? Object.assign(
      new I("Network Error", I.ERR_NETWORK, t, A),
      {
        cause: $.cause || $
      }
    ) : I.from($, $ && $.code, t, A);
  }
}), On = {
  http: ei,
  xhr: Li,
  fetch: Vi
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
const Fs = (t) => `- ${t}`, Mi = (t) => h.isFunction(t) || t === null || t === !1, ho = {
  getAdapter: (t) => {
    t = h.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let i = 0; i < e; i++) {
      r = t[i];
      let c;
      if (n = r, !Mi(r) && (n = On[(c = String(r)).toLowerCase()], n === void 0))
        throw new I(`Unknown adapter '${c}'`);
      if (n)
        break;
      o[c || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(o).map(
        ([l, v]) => `adapter ${l} ` + (v === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = e ? i.length > 1 ? `since :
` + i.map(Fs).join(`
`) : " " + Fs(i[0]) : "as no adapter specified";
      throw new I(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: On
};
function dn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Vt(null, t);
}
function Is(t) {
  return dn(t), t.headers = De.from(t.headers), t.data = fn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ho.getAdapter(t.adapter || tr.adapter)(t).then(function(n) {
    return dn(t), n.data = fn.call(
      t,
      t.transformResponse,
      n
    ), n.headers = De.from(n.headers), n;
  }, function(n) {
    return ao(n) || (dn(t), n && n.response && (n.response.data = fn.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = De.from(n.response.headers))), Promise.reject(n);
  });
}
const po = "1.7.7", xn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  xn[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ns = {};
xn.transitional = function(e, r, n) {
  function o(i, c) {
    return "[Axios v" + po + "] Transitional option '" + i + "'" + c + (n ? ". " + n : "");
  }
  return (i, c, l) => {
    if (e === !1)
      throw new I(
        o(c, " has been removed" + (r ? " in " + r : "")),
        I.ERR_DEPRECATED
      );
    return r && !Ns[c] && (Ns[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(i, c, l) : !0;
  };
};
function $i(t, e, r) {
  if (typeof t != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], c = e[i];
    if (c) {
      const l = t[i], v = l === void 0 || c(l, i, t);
      if (v !== !0)
        throw new I("option " + i + " must be " + v, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new I("Unknown option " + i, I.ERR_BAD_OPTION);
  }
}
const Ln = {
  assertOptions: $i,
  validators: xn
}, tt = Ln.validators;
class bt {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new ws(),
      response: new ws()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Ct(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Ln.assertOptions(n, {
      silentJSONParsing: tt.transitional(tt.boolean),
      forcedJSONParsing: tt.transitional(tt.boolean),
      clarifyTimeoutError: tt.transitional(tt.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Ln.assertOptions(o, {
      encode: tt.function,
      serialize: tt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let c = i && h.merge(
      i.common,
      i[r.method]
    );
    i && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (A) => {
        delete i[A];
      }
    ), r.headers = De.concat(c, i);
    const l = [];
    let v = !0;
    this.interceptors.request.forEach(function(P) {
      typeof P.runWhen == "function" && P.runWhen(r) === !1 || (v = v && P.synchronous, l.unshift(P.fulfilled, P.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(P) {
      m.push(P.fulfilled, P.rejected);
    });
    let y, _ = 0, N;
    if (!v) {
      const A = [Is.bind(this), void 0];
      for (A.unshift.apply(A, l), A.push.apply(A, m), N = A.length, y = Promise.resolve(r); _ < N; )
        y = y.then(A[_++], A[_++]);
      return y;
    }
    N = l.length;
    let L = r;
    for (_ = 0; _ < N; ) {
      const A = l[_++], P = l[_++];
      try {
        L = A(L);
      } catch (T) {
        P.call(this, T);
        break;
      }
    }
    try {
      y = Is.call(this, L);
    } catch (A) {
      return Promise.reject(A);
    }
    for (_ = 0, N = m.length; _ < N; )
      y = y.then(m[_++], m[_++]);
    return y;
  }
  getUri(e) {
    e = Ct(this.defaults, e);
    const r = uo(e.baseURL, e.url);
    return no(r, e.params, e.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  bt.prototype[e] = function(r, n) {
    return this.request(Ct(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(i, c, l) {
      return this.request(Ct(l || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: c
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
      n.reason || (n.reason = new Vt(i, c, l), r(n.reason));
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
function Bi(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Gi(t) {
  return h.isObject(t) && t.isAxiosError === !0;
}
const Dn = {
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
Object.entries(Dn).forEach(([t, e]) => {
  Dn[e] = t;
});
function yo(t) {
  const e = new bt(t), r = qs(bt.prototype.request, e);
  return h.extend(r, bt.prototype, e, { allOwnKeys: !0 }), h.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return yo(Ct(t, o));
  }, r;
}
const fe = yo(tr);
fe.Axios = bt;
fe.CanceledError = Vt;
fe.CancelToken = jn;
fe.isCancel = ao;
fe.VERSION = po;
fe.toFormData = Nr;
fe.AxiosError = I;
fe.Cancel = fe.CanceledError;
fe.all = function(e) {
  return Promise.all(e);
};
fe.spread = Bi;
fe.isAxiosError = Gi;
fe.mergeConfig = Ct;
fe.AxiosHeaders = De;
fe.formToJSON = (t) => oo(h.isHTMLForm(t) ? new FormData(t) : t);
fe.getAdapter = ho.getAdapter;
fe.HttpStatusCode = Dn;
fe.default = fe;
const Vn = {
  BASE_URL: "http://ec2-13-233-15-253.ap-south-1.compute.amazonaws.com"
  // BASE_URL: "https://7785-182-156-141-17.ngrok-free.app",
}, Ne = fe.create({
  baseURL: Vn.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), Hi = () => localStorage.getItem("access_token"), qi = () => localStorage.getItem("refresh_token");
Ne.interceptors.request.use(
  (t) => {
    const e = Hi();
    return e && (t.headers.Authorization = `Bearer ${e}`), t;
  },
  (t) => Promise.reject(t)
);
Ne.interceptors.response.use(
  (t) => t,
  async (t) => {
    const e = t.config;
    if (t.response && t.response.status === 401 && !e._retry) {
      e._retry = !0;
      const r = qi();
      if (r)
        try {
          const n = await fe.post(`${Vn.BASE_URL}/auth/refresh-token`, {
            refreshToken: r
          });
          return localStorage.setItem("access_token", n.data.access_token), e.headers.Authorization = `Bearer ${n.data.access_token}`, Ne(e);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(t);
  }
);
function rt(t) {
  var e;
  if (fe.isAxiosError(t)) {
    const r = ((e = t.response) == null ? void 0 : e.data) || {
      message: "An error occurred. Try after some time."
    };
    throw new Error(r.message);
  } else
    throw new Error("Unknown error occurred");
}
class xr {
  // Create a new Data
  async createData(e, r) {
    try {
      const n = await Ne.post(e, r);
      return console.log(n.data), n.data;
    } catch (n) {
      rt(n);
    }
  }
  // Get all Data
  async getData(e) {
    try {
      return (await Ne.get(e)).data.data;
    } catch (r) {
      rt(r);
    }
  }
  // Get an Data by ID
  async getDataById(e, r) {
    try {
      const n = await Ne.get(`${e}/${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      rt(n);
    }
  }
  // Get Data by Query
  async getDataByQuery(e, r) {
    try {
      const n = await Ne.get(`${e}?search=${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      rt(n);
    }
  }
  // Update a data by ID
  async updateData(e, r, n) {
    try {
      const o = await Ne.patch(`${e}/${r}`, n);
      return console.log(o.data), o.data;
    } catch (o) {
      rt(o);
    }
  }
  // Delete an Data by ID
  async deleteData(e, r) {
    try {
      const n = await Ne.delete(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      rt(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(e, r) {
    try {
      const n = await Ne.patch(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      rt(n);
    }
  }
}
const We = (t) => {
  const e = new xr();
  return Hs({ mutationFn: (r) => e.createData(t, r) });
}, Fe = (t, e) => {
  const r = new xr();
  return Fn({ queryKey: e, queryFn: () => r.getData(t) });
}, ze = (t, e, r) => {
  const n = new xr();
  return Fn({ queryKey: r, queryFn: () => n.getDataById(t, e), enabled: !!e });
}, Ke = (t, e) => {
  const r = new xr();
  return Hs({ mutationFn: (n) => r.updateData(t, e, n) });
}, mo = "http://ec2-13-233-15-253.ap-south-1.compute.amazonaws.com", Yi = () => fe.create({
  baseURL: mo,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class ie {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = ie.createService();
  }
  static createService() {
    return ie._axiosInstance || (ie._axiosInstance = Yi(), ie.setAuthHeaderInterceptor(), ie._axiosInstance.interceptors.response.use(ie.handleSuccess, ie.handleError)), ie._axiosInstance;
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
      return (await fe.post(`${mo}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    ie._axiosInstance.interceptors.request.use(
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
    ie._axiosInstance.interceptors.response.use(
      ie.handleSuccess,
      ie.handleError
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
        const i = await ie.refreshAccessToken();
        return ie.setAccessToken(i), r.headers.set("Authorization", `Bearer ${i}`), ie._axiosInstance(r);
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
const Qi = (t) => We(t), Ji = (t) => Fe(t, ["getAllRFPA"]), Xi = (t, e) => ze(t, e, ["getRFPA", e]), Zi = (t, e) => Ke(t, e), eu = (t) => Fe(t, ["getAllRFPANumbers"]), tu = (t) => We(t), ru = (t) => Fe(t, ["getAllDealSlip"]), nu = (t, e) => ze(t, e, ["getDealSlip"]), su = (t, e) => Ke(t, e), ou = (t) => Fe(t, ["getAllDealSlipNumbers"]), au = (t) => We(t), iu = (t) => Fe(t, ["getAllGRN"]), uu = (t) => Fe(t, ["getAllGRNNumbers"]), cu = (t, e) => ze(t, e, ["getGRN"]), lu = (t, e) => Ke(t, e), fu = (t) => We(t), du = (t) => Fe(t, ["getAllGRN"]), hu = (t, e) => ze(t, e, ["getGRN"]), pu = (t, e) => Ke(t, e), yu = (t) => We(t), mu = (t) => Fe(t, ["getAllGRN"]), Eu = (t, e) => ze(t, e, ["getGRN", e]), vu = (t, e) => Ke(t, e), _u = (t) => We(t), gu = (t) => Fe(t, ["getAllGRN"]), Ru = (t, e) => ze(t, e, ["getPMPVoucher"]), bu = (t, e) => Ke(t, e), Cu = (t) => We(t), Tu = (t) => Fe(t, ["getAllGRN"]), Au = (t, e) => ze(t, e, ["getGRN"]), wu = (t, e) => Ke(t, e), Su = (t) => We(t), Pu = (t) => Fe(t, ["getAllDeliveryChallan"]), Ou = (t, e) => ze(t, e, ["getDeliveryChallan"]), Lu = (t, e) => Ke(t, e), Du = (t) => Fe(t, ["getAllDeliveryChallanNumbers"]), ku = (t) => We(t), Fu = (t) => Fe(t, ["getAllPaymentRequest"]), Iu = (t, e) => ze(t, e, ["getPaymentRequest"]), Nu = (t, e) => Ke(t, e), Wi = async (t) => {
  try {
    const e = await Ne.get(`${Vn.BASE_URL}/source/${t}`);
    return console.log(e.data), e.data;
  } catch (e) {
    rt(e);
  }
}, Uu = (t) => Fn({ queryKey: ["get-vendors-farmers-data-by-source"], queryFn: () => Wi(t), enabled: !!t });
class xu extends ie {
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
class ju extends ie {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createRFPA(e) {
    const r = U.CREATE_RFPA;
    return this.post(r, e);
  }
  getAllRFPAs() {
    const e = U.GET_ALL_RFPA;
    return this.get(e);
  }
  getRFPAById(e) {
    const r = `${U.GET_RFPA_BY_ID}/${e}`;
    return this.get(r);
  }
  updateRFPA(e, r) {
    const n = `${U.UPDATE_RFPA}/${e}`;
    return this.patch(n, r);
  }
  deleteRFPAById(e) {
    const r = `${U.DELETE_RFPA}/${e}`;
    return this.delete(r);
  }
}
class Vu extends ie {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDealSlip(e) {
    const r = U.CREATE_DEAL_SLIP;
    return this.post(r, e);
  }
  getAllDealSlips() {
    const e = U.GET_ALL_DEAL_SLIP;
    return this.get(e);
  }
  getDealSlipById(e) {
    const r = `${U.GET_DEAL_SLIP_BY_ID}/${e}`;
    return this.get(r);
  }
  updateDealSlip(e, r) {
    const n = `${U.UPDATE_DEAL_SLIP}/${e}`;
    return this.patch(n, r);
  }
  deleteDealSlipById(e) {
    const r = `${U.DELETE_DEAL_SLIP}/${e}`;
    return this.delete(r);
  }
}
class Mu extends ie {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createGRN(e) {
    const r = U.CREATE_GRN;
    return this.postFormData(r, e);
  }
  getAllGRNs() {
    const e = U.GET_ALL_GRN;
    return this.get(e);
  }
  getGRNById(e) {
    const r = `${U.GET_GRN_BY_ID}/${e}`;
    return this.get(r);
  }
  updateGRN(e, r) {
    const n = `${U.UPDATE_GRN}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteGRNById(e) {
    const r = `${U.DELETE_GRN}/${e}`;
    return this.delete(r);
  }
}
class $u extends ie {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createMultiCashVoucher(e) {
    const r = U.CREATE_MC_VOUCHER;
    return this.postFormData(r, e);
  }
  getAllMultiCashVouchers() {
    const e = U.GET_ALL_MC_VOUCHER;
    return this.get(e);
  }
  getMultiCashVoucherById(e) {
    const r = `${U.GET_MC_VOUCHER_BY_ID}/${e}`;
    return this.get(r);
  }
  updateMultiCashVoucher(e, r) {
    const n = `${U.UPDATE_MC_VOUCHER}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteMultiCashVoucherById(e) {
    const r = `${U.DELETE_MC_VOUCHER}/${e}`;
    return this.delete(r);
  }
}
class Bu extends ie {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborPaymentVoucher(e) {
    const r = U.CREATE_LP_VOUCHER;
    return this.postFormData(r, e);
  }
  getAllLaborPaymentVouchers() {
    const e = U.GET_ALL_LP_VOUCHER;
    return this.get(e);
  }
  GetLaborPaymentVoucherById(e) {
    const r = `${U.GET_LP_VOUCHER_BY_ID}/${e}`;
    return this.get(r);
  }
  updateLaborPaymentVoucher(e, r) {
    const n = `${U.UPDATE_LP_VOUCHER}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteLaborPaymentVoucherById(e) {
    const r = `${U.DELETE_LP_VOUCHER}/${e}`;
    return this.delete(r);
  }
}
class Gu extends ie {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createTransportPaymentVoucher(e) {
    const r = U.CREATE_TP_VOUCHER;
    return this.postFormData(r, e);
  }
  getAllTransportPaymentVouchers() {
    const e = U.GET_ALL_TP_VOUCHER;
    return this.get(e);
  }
  GetTransportPaymentVoucherById(e) {
    const r = `${U.GET_TP_VOUCHER_BY_ID}/${e}`;
    return this.get(r);
  }
  updateTransportPaymentVoucher(e, r) {
    const n = `${U.UPDATE_TP_VOUCHER}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteTransportPaymentVoucherById(e) {
    const r = `${U.DELETE_TP_VOUCHER}/${e}`;
    return this.delete(r);
  }
}
class Hu extends ie {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createPackingMeterialPaymentVoucher(e) {
    const r = U.CREATE_PMP_VOUCHER;
    return this.postFormData(r, e);
  }
  getAllPackingMeterialPaymentVouchers() {
    const e = U.GET_ALL_PMP_VOUCHER;
    return this.get(e);
  }
  GetPackingMeterialPaymentVoucherById(e) {
    const r = `${U.GET_PMP_VOUCHER_BY_ID}/${e}`;
    return this.get(r);
  }
  updatePackingMeterialPaymentVoucher(e, r) {
    const n = `${U.UPDATE_PMP_VOUCHER}/${e}`;
    return this.patchFormData(n, r);
  }
  deletePackingMeterialPaymentVoucherById(e) {
    const r = `${U.DELETE_PMP_VOUCHER}/${e}`;
    return this.delete(r);
  }
}
class qu extends ie {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDeliveryChallan(e) {
    const r = U.CREATE_DELIVERY_CHALLAN;
    return this.postFormData(r, e);
  }
  getAllDeliveryChallans() {
    const e = U.GET_ALL_DELIVERY_CHALLAN;
    return this.get(e);
  }
  getDeliveryChallanById(e) {
    const r = `${U.GET_DELIVERY_CHALLAN_BY_ID}/${e}`;
    return this.get(r);
  }
  updateDeliveryChallan(e, r) {
    const n = `${U.UPDATE_DELIVERY_CHALLAN}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteDeliveryChallanById(e) {
    const r = `${U.DELETE_DELIVERY_CHALLAN}/${e}`;
    return this.delete(r);
  }
}
export {
  Vu as DealSlipServices,
  qu as DeliveryChallanServices,
  Mu as GRNServices,
  Bu as LaborPaymentVoucherServices,
  $u as MultiCashVoucherServices,
  Ki as PURCHASE_API_URL,
  Hu as PackingMeterialPaymentVoucherServices,
  xu as PurchaseDashboardServices,
  ju as RFPAServices,
  Gu as TransportPaymentVoucherServices,
  U as purchaseApiUrl,
  tu as useCreateDealSlip,
  Su as useCreateDeliveryChallan,
  au as useCreateGRN,
  fu as useCreateLPVoucher,
  yu as useCreateMCVoucher,
  _u as useCreatePMPVoucher,
  ku as useCreatePaymentRequest,
  Qi as useCreateRFPA,
  Cu as useCreateTPVoucher,
  ru as useGetAllDealSlip,
  ou as useGetAllDealSlipNums,
  Pu as useGetAllDeliveryChallan,
  Du as useGetAllDeliveryChallanNums,
  iu as useGetAllGRN,
  uu as useGetAllGRNNums,
  du as useGetAllLPVoucher,
  mu as useGetAllMCVoucher,
  gu as useGetAllPMPVoucher,
  Fu as useGetAllPaymentRequest,
  Ji as useGetAllRFPA,
  eu as useGetAllRFPANums,
  Tu as useGetAllTPVoucher,
  nu as useGetDealSlip,
  Ou as useGetDeliveryChallan,
  cu as useGetGRN,
  hu as useGetLPVoucher,
  Eu as useGetMCVoucher,
  Ru as useGetPMPVoucher,
  Iu as useGetPaymentRequest,
  Xi as useGetRFPA,
  Au as useGetTPVoucher,
  Uu as useGetVendorOrFarmerBySource,
  su as useUpdateDealSlip,
  Lu as useUpdateDeliveryChallan,
  lu as useUpdateGRN,
  pu as useUpdateLPVoucher,
  vu as useUpdateMCVoucher,
  bu as useUpdatePMPVoucher,
  Nu as useUpdatePaymentRequest,
  Zi as useUpdateRFPA,
  wu as useUpdateTPVoucher
};
