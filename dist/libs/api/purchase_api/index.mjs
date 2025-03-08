var Js = (r) => {
  throw TypeError(r);
};
var Un = (r, e, t) => e.has(r) || Js("Cannot " + t);
var E = (r, e, t) => (Un(r, e, "read from private field"), t ? t.call(r) : e.get(r)), oe = (r, e, t) => e.has(r) ? Js("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), M = (r, e, t, n) => (Un(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), ce = (r, e, t) => (Un(r, e, "access private method"), t);
const rc = {
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
}, j = {
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
var nn = class {
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
}, Jr = typeof window > "u" || "Deno" in globalThis;
function Wa() {
}
function Zs(r) {
  return typeof r == "number" && r >= 0 && r !== 1 / 0;
}
function Ka(r, e) {
  return Math.max(r + (e || 0) - Date.now(), 0);
}
function Gr(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Qe(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Xs(r) {
  return JSON.stringify(
    r,
    (e, t) => zn(t) ? Object.keys(t).sort().reduce((n, s) => (n[s] = t[s], n), {}) : t
  );
}
function Hn(r, e) {
  if (r === e)
    return r;
  const t = ei(r) && ei(e);
  if (t || zn(r) && zn(e)) {
    const n = t ? r : Object.keys(r), s = n.length, a = t ? e : Object.keys(e), o = a.length, u = t ? [] : {};
    let f = 0;
    for (let h = 0; h < o; h++) {
      const d = t ? h : a[h];
      (!t && n.includes(d) || t) && r[d] === void 0 && e[d] === void 0 ? (u[d] = void 0, f++) : (u[d] = Hn(r[d], e[d]), u[d] === r[d] && r[d] !== void 0 && f++);
    }
    return s === o && f === s ? r : u;
  }
  return e;
}
function Zr(r, e) {
  if (!e || Object.keys(r).length !== Object.keys(e).length)
    return !1;
  for (const t in r)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function ei(r) {
  return Array.isArray(r) && r.length === Object.keys(r).length;
}
function zn(r) {
  if (!ti(r))
    return !1;
  const e = r.constructor;
  if (e === void 0)
    return !0;
  const t = e.prototype;
  return !(!ti(t) || !t.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(r) !== Object.prototype);
}
function ti(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function ri(r, e, t) {
  if (typeof t.structuralSharing == "function")
    return t.structuralSharing(r, e);
  if (t.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Hn(r, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${t.queryHash}]: ${n}`
        );
      }
    return Hn(r, e);
  }
  return e;
}
var Pt, mt, Wt, xi, Qa = (xi = class extends nn {
  constructor() {
    super();
    oe(this, Pt);
    oe(this, mt);
    oe(this, Wt);
    M(this, Wt, (e) => {
      if (!Jr && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    E(this, mt) || this.setEventListener(E(this, Wt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = E(this, mt)) == null || e.call(this), M(this, mt, void 0));
  }
  setEventListener(e) {
    var t;
    M(this, Wt, e), (t = E(this, mt)) == null || t.call(this), M(this, mt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    E(this, Pt) !== e && (M(this, Pt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    var e;
    return typeof E(this, Pt) == "boolean" ? E(this, Pt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, Pt = new WeakMap(), mt = new WeakMap(), Wt = new WeakMap(), xi), Ja = new Qa(), Kt, yt, Qt, Di, Za = (Di = class extends nn {
  constructor() {
    super();
    oe(this, Kt, !0);
    oe(this, yt);
    oe(this, Qt);
    M(this, Qt, (e) => {
      if (!Jr && window.addEventListener) {
        const t = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    E(this, yt) || this.setEventListener(E(this, Qt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = E(this, yt)) == null || e.call(this), M(this, yt, void 0));
  }
  setEventListener(e) {
    var t;
    M(this, Qt, e), (t = E(this, yt)) == null || t.call(this), M(this, yt, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    E(this, Kt) !== e && (M(this, Kt, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return E(this, Kt);
  }
}, Kt = new WeakMap(), yt = new WeakMap(), Qt = new WeakMap(), Di), Xa = new Za();
function eo(r) {
  return (r ?? "online") === "online" ? Xa.isOnline() : !0;
}
function to() {
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
var sn = to();
function ro(r, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: eo(e.networkMode) ? "fetching" : "paused",
    ...r === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function no() {
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
var Fe, z, br, xe, xt, Jt, Ke, gr, Zt, Xt, Dt, Nt, bt, er, Z, fr, Yn, Wn, Kn, Qn, Jn, Zn, Xn, Li, Ni, so = (Ni = class extends nn {
  constructor(e, t) {
    super();
    oe(this, Z);
    oe(this, Fe);
    oe(this, z);
    oe(this, br);
    oe(this, xe);
    oe(this, xt);
    oe(this, Jt);
    oe(this, Ke);
    oe(this, gr);
    oe(this, Zt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    oe(this, Xt);
    oe(this, Dt);
    oe(this, Nt);
    oe(this, bt);
    oe(this, er, /* @__PURE__ */ new Set());
    this.options = t, M(this, Fe, e), M(this, Ke, null), this.bindMethods(), this.setOptions(t);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (E(this, z).addObserver(this), ni(E(this, z), this.options) ? ce(this, Z, fr).call(this) : this.updateResult(), ce(this, Z, Qn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return es(
      E(this, z),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return es(
      E(this, z),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ce(this, Z, Jn).call(this), ce(this, Z, Zn).call(this), E(this, z).removeObserver(this);
  }
  setOptions(e, t) {
    const n = this.options, s = E(this, z);
    if (this.options = E(this, Fe).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Qe(this.options.enabled, E(this, z)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ce(this, Z, Xn).call(this), E(this, z).setOptions(this.options), n._defaulted && !Zr(this.options, n) && E(this, Fe).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: E(this, z),
      observer: this
    });
    const a = this.hasListeners();
    a && si(
      E(this, z),
      s,
      this.options,
      n
    ) && ce(this, Z, fr).call(this), this.updateResult(t), a && (E(this, z) !== s || Qe(this.options.enabled, E(this, z)) !== Qe(n.enabled, E(this, z)) || Gr(this.options.staleTime, E(this, z)) !== Gr(n.staleTime, E(this, z))) && ce(this, Z, Yn).call(this);
    const o = ce(this, Z, Wn).call(this);
    a && (E(this, z) !== s || Qe(this.options.enabled, E(this, z)) !== Qe(n.enabled, E(this, z)) || o !== E(this, bt)) && ce(this, Z, Kn).call(this, o);
  }
  getOptimisticResult(e) {
    const t = E(this, Fe).getQueryCache().build(E(this, Fe), e), n = this.createResult(t, e);
    return ao(this, n) && (M(this, xe, n), M(this, Jt, this.options), M(this, xt, E(this, z).state)), n;
  }
  getCurrentResult() {
    return E(this, xe);
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
    E(this, er).add(e);
  }
  getCurrentQuery() {
    return E(this, z);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const t = E(this, Fe).defaultQueryOptions(e), n = E(this, Fe).getQueryCache().build(E(this, Fe), t);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return ce(this, Z, fr).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), E(this, xe)));
  }
  createResult(e, t) {
    var de;
    const n = E(this, z), s = this.options, a = E(this, xe), o = E(this, xt), u = E(this, Jt), h = e !== n ? e.state : E(this, br), { state: d } = e;
    let y = { ...d }, O = !1, C;
    if (t._optimisticResults) {
      const ne = this.hasListeners(), _e = !ne && ni(e, t), Me = ne && si(e, n, t, s);
      (_e || Me) && (y = {
        ...y,
        ...ro(d.data, e.options)
      }), t._optimisticResults === "isRestoring" && (y.fetchStatus = "idle");
    }
    let { error: w, errorUpdatedAt: A, status: S } = y;
    if (t.select && y.data !== void 0)
      if (a && y.data === (o == null ? void 0 : o.data) && t.select === E(this, gr))
        C = E(this, Zt);
      else
        try {
          M(this, gr, t.select), C = t.select(y.data), C = ri(a == null ? void 0 : a.data, C, t), M(this, Zt, C), M(this, Ke, null);
        } catch (ne) {
          M(this, Ke, ne);
        }
    else
      C = y.data;
    if (t.placeholderData !== void 0 && C === void 0 && S === "pending") {
      let ne;
      if (a != null && a.isPlaceholderData && t.placeholderData === (u == null ? void 0 : u.placeholderData))
        ne = a.data;
      else if (ne = typeof t.placeholderData == "function" ? t.placeholderData(
        (de = E(this, Xt)) == null ? void 0 : de.state.data,
        E(this, Xt)
      ) : t.placeholderData, t.select && ne !== void 0)
        try {
          ne = t.select(ne), M(this, Ke, null);
        } catch (_e) {
          M(this, Ke, _e);
        }
      ne !== void 0 && (S = "success", C = ri(
        a == null ? void 0 : a.data,
        ne,
        t
      ), O = !0);
    }
    E(this, Ke) && (w = E(this, Ke), C = E(this, Zt), A = Date.now(), S = "error");
    const I = y.fetchStatus === "fetching", D = S === "pending", Y = S === "error", re = D && I, $ = C !== void 0;
    return {
      status: S,
      fetchStatus: y.fetchStatus,
      isPending: D,
      isSuccess: S === "success",
      isError: Y,
      isInitialLoading: re,
      isLoading: re,
      data: C,
      dataUpdatedAt: y.dataUpdatedAt,
      error: w,
      errorUpdatedAt: A,
      failureCount: y.fetchFailureCount,
      failureReason: y.fetchFailureReason,
      errorUpdateCount: y.errorUpdateCount,
      isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
      isFetchedAfterMount: y.dataUpdateCount > h.dataUpdateCount || y.errorUpdateCount > h.errorUpdateCount,
      isFetching: I,
      isRefetching: I && !D,
      isLoadingError: Y && !$,
      isPaused: y.fetchStatus === "paused",
      isPlaceholderData: O,
      isRefetchError: Y && $,
      isStale: ms(e, t),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const t = E(this, xe), n = this.createResult(E(this, z), this.options);
    if (M(this, xt, E(this, z).state), M(this, Jt, this.options), E(this, xt).data !== void 0 && M(this, Xt, E(this, z)), Zr(n, t))
      return;
    M(this, xe, n);
    const s = {}, a = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: o } = this.options, u = typeof o == "function" ? o() : o;
      if (u === "all" || !u && !E(this, er).size)
        return !0;
      const f = new Set(
        u ?? E(this, er)
      );
      return this.options.throwOnError && f.add("error"), Object.keys(E(this, xe)).some((h) => {
        const d = h;
        return E(this, xe)[d] !== t[d] && f.has(d);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && a() && (s.listeners = !0), ce(this, Z, Li).call(this, { ...s, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ce(this, Z, Qn).call(this);
  }
}, Fe = new WeakMap(), z = new WeakMap(), br = new WeakMap(), xe = new WeakMap(), xt = new WeakMap(), Jt = new WeakMap(), Ke = new WeakMap(), gr = new WeakMap(), Zt = new WeakMap(), Xt = new WeakMap(), Dt = new WeakMap(), Nt = new WeakMap(), bt = new WeakMap(), er = new WeakMap(), Z = new WeakSet(), fr = function(e) {
  ce(this, Z, Xn).call(this);
  let t = E(this, z).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (t = t.catch(Wa)), t;
}, Yn = function() {
  ce(this, Z, Jn).call(this);
  const e = Gr(
    this.options.staleTime,
    E(this, z)
  );
  if (Jr || E(this, xe).isStale || !Zs(e))
    return;
  const n = Ka(E(this, xe).dataUpdatedAt, e) + 1;
  M(this, Dt, setTimeout(() => {
    E(this, xe).isStale || this.updateResult();
  }, n));
}, Wn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(E(this, z)) : this.options.refetchInterval) ?? !1;
}, Kn = function(e) {
  ce(this, Z, Zn).call(this), M(this, bt, e), !(Jr || Qe(this.options.enabled, E(this, z)) === !1 || !Zs(E(this, bt)) || E(this, bt) === 0) && M(this, Nt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Ja.isFocused()) && ce(this, Z, fr).call(this);
  }, E(this, bt)));
}, Qn = function() {
  ce(this, Z, Yn).call(this), ce(this, Z, Kn).call(this, ce(this, Z, Wn).call(this));
}, Jn = function() {
  E(this, Dt) && (clearTimeout(E(this, Dt)), M(this, Dt, void 0));
}, Zn = function() {
  E(this, Nt) && (clearInterval(E(this, Nt)), M(this, Nt, void 0));
}, Xn = function() {
  const e = E(this, Fe).getQueryCache().build(E(this, Fe), this.options);
  if (e === E(this, z))
    return;
  const t = E(this, z);
  M(this, z, e), M(this, br, e.state), this.hasListeners() && (t == null || t.removeObserver(this), e.addObserver(this));
}, Li = function(e) {
  sn.batch(() => {
    e.listeners && this.listeners.forEach((t) => {
      t(E(this, xe));
    }), E(this, Fe).getQueryCache().notify({
      query: E(this, z),
      type: "observerResultsUpdated"
    });
  });
}, Ni);
function io(r, e) {
  return Qe(e.enabled, r) !== !1 && r.state.data === void 0 && !(r.state.status === "error" && e.retryOnMount === !1);
}
function ni(r, e) {
  return io(r, e) || r.state.data !== void 0 && es(r, e, e.refetchOnMount);
}
function es(r, e, t) {
  if (Qe(e.enabled, r) !== !1) {
    const n = typeof t == "function" ? t(r) : t;
    return n === "always" || n !== !1 && ms(r, e);
  }
  return !1;
}
function si(r, e, t, n) {
  return (r !== e || Qe(n.enabled, r) === !1) && (!t.suspense || r.state.status !== "error") && ms(r, t);
}
function ms(r, e) {
  return Qe(e.enabled, r) !== !1 && r.isStaleByTime(Gr(e.staleTime, r));
}
function ao(r, e) {
  return !Zr(r.getCurrentResult(), e);
}
var gt, Et, Le, tt, nt, Br, ts, Fi, oo = (Fi = class extends nn {
  constructor(e, t) {
    super();
    oe(this, nt);
    oe(this, gt);
    oe(this, Et);
    oe(this, Le);
    oe(this, tt);
    M(this, gt, e), this.setOptions(t), this.bindMethods(), ce(this, nt, Br).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const t = this.options;
    this.options = E(this, gt).defaultMutationOptions(e), Zr(this.options, t) || E(this, gt).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: E(this, Le),
      observer: this
    }), t != null && t.mutationKey && this.options.mutationKey && Xs(t.mutationKey) !== Xs(this.options.mutationKey) ? this.reset() : ((n = E(this, Le)) == null ? void 0 : n.state.status) === "pending" && E(this, Le).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = E(this, Le)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    ce(this, nt, Br).call(this), ce(this, nt, ts).call(this, e);
  }
  getCurrentResult() {
    return E(this, Et);
  }
  reset() {
    var e;
    (e = E(this, Le)) == null || e.removeObserver(this), M(this, Le, void 0), ce(this, nt, Br).call(this), ce(this, nt, ts).call(this);
  }
  mutate(e, t) {
    var n;
    return M(this, tt, t), (n = E(this, Le)) == null || n.removeObserver(this), M(this, Le, E(this, gt).getMutationCache().build(E(this, gt), this.options)), E(this, Le).addObserver(this), E(this, Le).execute(e);
  }
}, gt = new WeakMap(), Et = new WeakMap(), Le = new WeakMap(), tt = new WeakMap(), nt = new WeakSet(), Br = function() {
  var t;
  const e = ((t = E(this, Le)) == null ? void 0 : t.state) ?? no();
  M(this, Et, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, ts = function(e) {
  sn.batch(() => {
    var t, n, s, a, o, u, f, h;
    if (E(this, tt) && this.hasListeners()) {
      const d = E(this, Et).variables, y = E(this, Et).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (t = E(this, tt)).onSuccess) == null || n.call(t, e.data, d, y), (a = (s = E(this, tt)).onSettled) == null || a.call(s, e.data, null, d, y)) : (e == null ? void 0 : e.type) === "error" && ((u = (o = E(this, tt)).onError) == null || u.call(o, e.error, d, y), (h = (f = E(this, tt)).onSettled) == null || h.call(
        f,
        void 0,
        e.error,
        d,
        y
      ));
    }
    this.listeners.forEach((d) => {
      d(E(this, Et));
    });
  });
}, Fi);
function uo(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var rs = { exports: {} }, q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ii;
function lo() {
  if (ii) return q;
  ii = 1;
  var r = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), y = Symbol.iterator;
  function O(p) {
    return p === null || typeof p != "object" ? null : (p = y && p[y] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, w = Object.assign, A = {};
  function S(p, _, G) {
    this.props = p, this.context = _, this.refs = A, this.updater = G || C;
  }
  S.prototype.isReactComponent = {}, S.prototype.setState = function(p, _) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, _, "setState");
  }, S.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function I() {
  }
  I.prototype = S.prototype;
  function D(p, _, G) {
    this.props = p, this.context = _, this.refs = A, this.updater = G || C;
  }
  var Y = D.prototype = new I();
  Y.constructor = D, w(Y, S.prototype), Y.isPureReactComponent = !0;
  var re = Array.isArray, $ = Object.prototype.hasOwnProperty, X = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(p, _, G) {
    var H, K = {}, ue = null, ie = null;
    if (_ != null) for (H in _.ref !== void 0 && (ie = _.ref), _.key !== void 0 && (ue = "" + _.key), _) $.call(_, H) && !de.hasOwnProperty(H) && (K[H] = _[H]);
    var se = arguments.length - 2;
    if (se === 1) K.children = G;
    else if (1 < se) {
      for (var ee = Array(se), Ee = 0; Ee < se; Ee++) ee[Ee] = arguments[Ee + 2];
      K.children = ee;
    }
    if (p && p.defaultProps) for (H in se = p.defaultProps, se) K[H] === void 0 && (K[H] = se[H]);
    return { $$typeof: r, type: p, key: ue, ref: ie, props: K, _owner: X.current };
  }
  function _e(p, _) {
    return { $$typeof: r, type: p.type, key: _, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function Me(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }
  function le(p) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(G) {
      return _[G];
    });
  }
  var Pe = /\/+/g;
  function Re(p, _) {
    return typeof p == "object" && p !== null && p.key != null ? le("" + p.key) : _.toString(36);
  }
  function Se(p, _, G, H, K) {
    var ue = typeof p;
    (ue === "undefined" || ue === "boolean") && (p = null);
    var ie = !1;
    if (p === null) ie = !0;
    else switch (ue) {
      case "string":
      case "number":
        ie = !0;
        break;
      case "object":
        switch (p.$$typeof) {
          case r:
          case e:
            ie = !0;
        }
    }
    if (ie) return ie = p, K = K(ie), p = H === "" ? "." + Re(ie, 0) : H, re(K) ? (G = "", p != null && (G = p.replace(Pe, "$&/") + "/"), Se(K, _, G, "", function(Ee) {
      return Ee;
    })) : K != null && (Me(K) && (K = _e(K, G + (!K.key || ie && ie.key === K.key ? "" : ("" + K.key).replace(Pe, "$&/") + "/") + p)), _.push(K)), 1;
    if (ie = 0, H = H === "" ? "." : H + ":", re(p)) for (var se = 0; se < p.length; se++) {
      ue = p[se];
      var ee = H + Re(ue, se);
      ie += Se(ue, _, G, ee, K);
    }
    else if (ee = O(p), typeof ee == "function") for (p = ee.call(p), se = 0; !(ue = p.next()).done; ) ue = ue.value, ee = H + Re(ue, se++), ie += Se(ue, _, G, ee, K);
    else if (ue === "object") throw _ = String(p), Error("Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead.");
    return ie;
  }
  function we(p, _, G) {
    if (p == null) return p;
    var H = [], K = 0;
    return Se(p, H, "", "", function(ue) {
      return _.call(G, ue, K++);
    }), H;
  }
  function qe(p) {
    if (p._status === -1) {
      var _ = p._result;
      _ = _(), _.then(function(G) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = G);
      }, function(G) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = G);
      }), p._status === -1 && (p._status = 0, p._result = _);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var N = { current: null }, ze = { transition: null }, vt = { ReactCurrentDispatcher: N, ReactCurrentBatchConfig: ze, ReactCurrentOwner: X };
  function Je() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return q.Children = { map: we, forEach: function(p, _, G) {
    we(p, function() {
      _.apply(this, arguments);
    }, G);
  }, count: function(p) {
    var _ = 0;
    return we(p, function() {
      _++;
    }), _;
  }, toArray: function(p) {
    return we(p, function(_) {
      return _;
    }) || [];
  }, only: function(p) {
    if (!Me(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, q.Component = S, q.Fragment = t, q.Profiler = s, q.PureComponent = D, q.StrictMode = n, q.Suspense = f, q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vt, q.act = Je, q.cloneElement = function(p, _, G) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var H = w({}, p.props), K = p.key, ue = p.ref, ie = p._owner;
    if (_ != null) {
      if (_.ref !== void 0 && (ue = _.ref, ie = X.current), _.key !== void 0 && (K = "" + _.key), p.type && p.type.defaultProps) var se = p.type.defaultProps;
      for (ee in _) $.call(_, ee) && !de.hasOwnProperty(ee) && (H[ee] = _[ee] === void 0 && se !== void 0 ? se[ee] : _[ee]);
    }
    var ee = arguments.length - 2;
    if (ee === 1) H.children = G;
    else if (1 < ee) {
      se = Array(ee);
      for (var Ee = 0; Ee < ee; Ee++) se[Ee] = arguments[Ee + 2];
      H.children = se;
    }
    return { $$typeof: r, type: p.type, key: K, ref: ue, props: H, _owner: ie };
  }, q.createContext = function(p) {
    return p = { $$typeof: o, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: a, _context: p }, p.Consumer = p;
  }, q.createElement = ne, q.createFactory = function(p) {
    var _ = ne.bind(null, p);
    return _.type = p, _;
  }, q.createRef = function() {
    return { current: null };
  }, q.forwardRef = function(p) {
    return { $$typeof: u, render: p };
  }, q.isValidElement = Me, q.lazy = function(p) {
    return { $$typeof: d, _payload: { _status: -1, _result: p }, _init: qe };
  }, q.memo = function(p, _) {
    return { $$typeof: h, type: p, compare: _ === void 0 ? null : _ };
  }, q.startTransition = function(p) {
    var _ = ze.transition;
    ze.transition = {};
    try {
      p();
    } finally {
      ze.transition = _;
    }
  }, q.unstable_act = Je, q.useCallback = function(p, _) {
    return N.current.useCallback(p, _);
  }, q.useContext = function(p) {
    return N.current.useContext(p);
  }, q.useDebugValue = function() {
  }, q.useDeferredValue = function(p) {
    return N.current.useDeferredValue(p);
  }, q.useEffect = function(p, _) {
    return N.current.useEffect(p, _);
  }, q.useId = function() {
    return N.current.useId();
  }, q.useImperativeHandle = function(p, _, G) {
    return N.current.useImperativeHandle(p, _, G);
  }, q.useInsertionEffect = function(p, _) {
    return N.current.useInsertionEffect(p, _);
  }, q.useLayoutEffect = function(p, _) {
    return N.current.useLayoutEffect(p, _);
  }, q.useMemo = function(p, _) {
    return N.current.useMemo(p, _);
  }, q.useReducer = function(p, _, G) {
    return N.current.useReducer(p, _, G);
  }, q.useRef = function(p) {
    return N.current.useRef(p);
  }, q.useState = function(p) {
    return N.current.useState(p);
  }, q.useSyncExternalStore = function(p, _, G) {
    return N.current.useSyncExternalStore(p, _, G);
  }, q.useTransition = function() {
    return N.current.useTransition();
  }, q.version = "18.3.1", q;
}
var dr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
dr.exports;
var ai;
function co() {
  return ai || (ai = 1, function(r, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = "18.3.1", n = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), S = Symbol.iterator, I = "@@iterator";
      function D(i) {
        if (i === null || typeof i != "object")
          return null;
        var l = S && i[S] || i[I];
        return typeof l == "function" ? l : null;
      }
      var Y = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, re = {
        transition: null
      }, $ = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, X = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {}, ne = null;
      function _e(i) {
        ne = i;
      }
      de.setExtraStackFrame = function(i) {
        ne = i;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var i = "";
        ne && (i += ne);
        var l = de.getCurrentStack;
        return l && (i += l() || ""), i;
      };
      var Me = !1, le = !1, Pe = !1, Re = !1, Se = !1, we = {
        ReactCurrentDispatcher: Y,
        ReactCurrentBatchConfig: re,
        ReactCurrentOwner: X
      };
      we.ReactDebugCurrentFrame = de, we.ReactCurrentActQueue = $;
      function qe(i) {
        {
          for (var l = arguments.length, m = new Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++)
            m[g - 1] = arguments[g];
          ze("warn", i, m);
        }
      }
      function N(i) {
        {
          for (var l = arguments.length, m = new Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++)
            m[g - 1] = arguments[g];
          ze("error", i, m);
        }
      }
      function ze(i, l, m) {
        {
          var g = we.ReactDebugCurrentFrame, T = g.getStackAddendum();
          T !== "" && (l += "%s", m = m.concat([T]));
          var F = m.map(function(P) {
            return String(P);
          });
          F.unshift("Warning: " + l), Function.prototype.apply.call(console[i], console, F);
        }
      }
      var vt = {};
      function Je(i, l) {
        {
          var m = i.constructor, g = m && (m.displayName || m.name) || "ReactClass", T = g + "." + l;
          if (vt[T])
            return;
          N("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", l, g), vt[T] = !0;
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
      }, _ = Object.assign, G = {};
      Object.freeze(G);
      function H(i, l, m) {
        this.props = i, this.context = l, this.refs = G, this.updater = m || p;
      }
      H.prototype.isReactComponent = {}, H.prototype.setState = function(i, l) {
        if (typeof i != "object" && typeof i != "function" && i != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, i, l, "setState");
      }, H.prototype.forceUpdate = function(i) {
        this.updater.enqueueForceUpdate(this, i, "forceUpdate");
      };
      {
        var K = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ue = function(i, l) {
          Object.defineProperty(H.prototype, i, {
            get: function() {
              qe("%s(...) is deprecated in plain JavaScript React classes. %s", l[0], l[1]);
            }
          });
        };
        for (var ie in K)
          K.hasOwnProperty(ie) && ue(ie, K[ie]);
      }
      function se() {
      }
      se.prototype = H.prototype;
      function ee(i, l, m) {
        this.props = i, this.context = l, this.refs = G, this.updater = m || p;
      }
      var Ee = ee.prototype = new se();
      Ee.constructor = ee, _(Ee, H.prototype), Ee.isPureReactComponent = !0;
      function mn() {
        var i = {
          current: null
        };
        return Object.seal(i), i;
      }
      var Rr = Array.isArray;
      function jt(i) {
        return Rr(i);
      }
      function yn(i) {
        {
          var l = typeof Symbol == "function" && Symbol.toStringTag, m = l && i[Symbol.toStringTag] || i.constructor.name || "Object";
          return m;
        }
      }
      function Vt(i) {
        try {
          return ot(i), !1;
        } catch {
          return !0;
        }
      }
      function ot(i) {
        return "" + i;
      }
      function _t(i) {
        if (Vt(i))
          return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yn(i)), ot(i);
      }
      function Tr(i, l, m) {
        var g = i.displayName;
        if (g)
          return g;
        var T = l.displayName || l.name || "";
        return T !== "" ? m + "(" + T + ")" : m;
      }
      function Rt(i) {
        return i.displayName || "Context";
      }
      function Ye(i) {
        if (i == null)
          return null;
        if (typeof i.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
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
            case h:
              var l = i;
              return Rt(l) + ".Consumer";
            case f:
              var m = i;
              return Rt(m._context) + ".Provider";
            case d:
              return Tr(i, i.render, "ForwardRef");
            case C:
              var g = i.displayName || null;
              return g !== null ? g : Ye(i.type) || "Memo";
            case w: {
              var T = i, F = T._payload, P = T._init;
              try {
                return Ye(P(F));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tt = Object.prototype.hasOwnProperty, Mt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sr, wr, qt;
      qt = {};
      function nr(i) {
        if (Tt.call(i, "ref")) {
          var l = Object.getOwnPropertyDescriptor(i, "ref").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return i.ref !== void 0;
      }
      function ut(i) {
        if (Tt.call(i, "key")) {
          var l = Object.getOwnPropertyDescriptor(i, "key").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return i.key !== void 0;
      }
      function bn(i, l) {
        var m = function() {
          Sr || (Sr = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: m,
          configurable: !0
        });
      }
      function Cr(i, l) {
        var m = function() {
          wr || (wr = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: m,
          configurable: !0
        });
      }
      function Or(i) {
        if (typeof i.ref == "string" && X.current && i.__self && X.current.stateNode !== i.__self) {
          var l = Ye(X.current.type);
          qt[l] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i.ref), qt[l] = !0);
        }
      }
      var St = function(i, l, m, g, T, F, P) {
        var k = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: i,
          key: l,
          ref: m,
          props: P,
          // Record the component responsible for creating this element.
          _owner: F
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
          value: g
        }), Object.defineProperty(k, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: T
        }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
      };
      function gn(i, l, m) {
        var g, T = {}, F = null, P = null, k = null, W = null;
        if (l != null) {
          nr(l) && (P = l.ref, Or(l)), ut(l) && (_t(l.key), F = "" + l.key), k = l.__self === void 0 ? null : l.__self, W = l.__source === void 0 ? null : l.__source;
          for (g in l)
            Tt.call(l, g) && !Mt.hasOwnProperty(g) && (T[g] = l[g]);
        }
        var ae = arguments.length - 2;
        if (ae === 1)
          T.children = m;
        else if (ae > 1) {
          for (var he = Array(ae), pe = 0; pe < ae; pe++)
            he[pe] = arguments[pe + 2];
          Object.freeze && Object.freeze(he), T.children = he;
        }
        if (i && i.defaultProps) {
          var be = i.defaultProps;
          for (g in be)
            T[g] === void 0 && (T[g] = be[g]);
        }
        if (F || P) {
          var ve = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          F && bn(T, ve), P && Cr(T, ve);
        }
        return St(i, F, P, k, W, X.current, T);
      }
      function En(i, l) {
        var m = St(i.type, l, i.ref, i._self, i._source, i._owner, i.props);
        return m;
      }
      function vn(i, l, m) {
        if (i == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + i + ".");
        var g, T = _({}, i.props), F = i.key, P = i.ref, k = i._self, W = i._source, ae = i._owner;
        if (l != null) {
          nr(l) && (P = l.ref, ae = X.current), ut(l) && (_t(l.key), F = "" + l.key);
          var he;
          i.type && i.type.defaultProps && (he = i.type.defaultProps);
          for (g in l)
            Tt.call(l, g) && !Mt.hasOwnProperty(g) && (l[g] === void 0 && he !== void 0 ? T[g] = he[g] : T[g] = l[g]);
        }
        var pe = arguments.length - 2;
        if (pe === 1)
          T.children = m;
        else if (pe > 1) {
          for (var be = Array(pe), ve = 0; ve < pe; ve++)
            be[ve] = arguments[ve + 2];
          T.children = be;
        }
        return St(i.type, F, P, k, W, ae, T);
      }
      function lt(i) {
        return typeof i == "object" && i !== null && i.$$typeof === n;
      }
      var Ar = ".", _n = ":";
      function Rn(i) {
        var l = /[=:]/g, m = {
          "=": "=0",
          ":": "=2"
        }, g = i.replace(l, function(T) {
          return m[T];
        });
        return "$" + g;
      }
      var Gt = !1, Pr = /\/+/g;
      function Ze(i) {
        return i.replace(Pr, "$&/");
      }
      function wt(i, l) {
        return typeof i == "object" && i !== null && i.key != null ? (_t(i.key), Rn("" + i.key)) : l.toString(36);
      }
      function ct(i, l, m, g, T) {
        var F = typeof i;
        (F === "undefined" || F === "boolean") && (i = null);
        var P = !1;
        if (i === null)
          P = !0;
        else
          switch (F) {
            case "string":
            case "number":
              P = !0;
              break;
            case "object":
              switch (i.$$typeof) {
                case n:
                case s:
                  P = !0;
              }
          }
        if (P) {
          var k = i, W = T(k), ae = g === "" ? Ar + wt(k, 0) : g;
          if (jt(W)) {
            var he = "";
            ae != null && (he = Ze(ae) + "/"), ct(W, l, he, "", function(Ya) {
              return Ya;
            });
          } else W != null && (lt(W) && (W.key && (!k || k.key !== W.key) && _t(W.key), W = En(
            W,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            m + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (W.key && (!k || k.key !== W.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ze("" + W.key) + "/"
            ) : "") + ae
          )), l.push(W));
          return 1;
        }
        var pe, be, ve = 0, Oe = g === "" ? Ar : g + _n;
        if (jt(i))
          for (var Mr = 0; Mr < i.length; Mr++)
            pe = i[Mr], be = Oe + wt(pe, Mr), ve += ct(pe, l, m, be, T);
        else {
          var $n = D(i);
          if (typeof $n == "function") {
            var Ws = i;
            $n === Ws.entries && (Gt || qe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gt = !0);
            for (var Ha = $n.call(Ws), Ks, za = 0; !(Ks = Ha.next()).done; )
              pe = Ks.value, be = Oe + wt(pe, za++), ve += ct(pe, l, m, be, T);
          } else if (F === "object") {
            var Qs = String(i);
            throw new Error("Objects are not valid as a React child (found: " + (Qs === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : Qs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ve;
      }
      function Ct(i, l, m) {
        if (i == null)
          return i;
        var g = [], T = 0;
        return ct(i, g, "", "", function(F) {
          return l.call(m, F, T++);
        }), g;
      }
      function Tn(i) {
        var l = 0;
        return Ct(i, function() {
          l++;
        }), l;
      }
      function xr(i, l, m) {
        Ct(i, function() {
          l.apply(this, arguments);
        }, m);
      }
      function Sn(i) {
        return Ct(i, function(l) {
          return l;
        }) || [];
      }
      function Dr(i) {
        if (!lt(i))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return i;
      }
      function Nr(i) {
        var l = {
          $$typeof: h,
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
        var m = !1, g = !1, T = !1;
        {
          var F = {
            $$typeof: h,
            _context: l
          };
          Object.defineProperties(F, {
            Provider: {
              get: function() {
                return g || (g = !0, N("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), l.Provider;
              },
              set: function(P) {
                l.Provider = P;
              }
            },
            _currentValue: {
              get: function() {
                return l._currentValue;
              },
              set: function(P) {
                l._currentValue = P;
              }
            },
            _currentValue2: {
              get: function() {
                return l._currentValue2;
              },
              set: function(P) {
                l._currentValue2 = P;
              }
            },
            _threadCount: {
              get: function() {
                return l._threadCount;
              },
              set: function(P) {
                l._threadCount = P;
              }
            },
            Consumer: {
              get: function() {
                return m || (m = !0, N("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), l.Consumer;
              }
            },
            displayName: {
              get: function() {
                return l.displayName;
              },
              set: function(P) {
                T || (qe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", P), T = !0);
              }
            }
          }), l.Consumer = F;
        }
        return l._currentRenderer = null, l._currentRenderer2 = null, l;
      }
      var Ot = -1, sr = 0, ir = 1, Fr = 2;
      function wn(i) {
        if (i._status === Ot) {
          var l = i._result, m = l();
          if (m.then(function(F) {
            if (i._status === sr || i._status === Ot) {
              var P = i;
              P._status = ir, P._result = F;
            }
          }, function(F) {
            if (i._status === sr || i._status === Ot) {
              var P = i;
              P._status = Fr, P._result = F;
            }
          }), i._status === Ot) {
            var g = i;
            g._status = sr, g._result = m;
          }
        }
        if (i._status === ir) {
          var T = i._result;
          return T === void 0 && N(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, T), "default" in T || N(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, T), T.default;
        } else
          throw i._result;
      }
      function Cn(i) {
        var l = {
          // We use these fields to store the result.
          _status: Ot,
          _result: i
        }, m = {
          $$typeof: w,
          _payload: l,
          _init: wn
        };
        {
          var g, T;
          Object.defineProperties(m, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return g;
              },
              set: function(F) {
                N("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), g = F, Object.defineProperty(m, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return T;
              },
              set: function(F) {
                N("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), T = F, Object.defineProperty(m, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return m;
      }
      function On(i) {
        i != null && i.$$typeof === C ? N("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof i != "function" ? N("forwardRef requires a render function but was given %s.", i === null ? "null" : typeof i) : i.length !== 0 && i.length !== 2 && N("forwardRef render functions accept exactly two parameters: props and ref. %s", i.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), i != null && (i.defaultProps != null || i.propTypes != null) && N("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var l = {
          $$typeof: d,
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
      var Lr;
      Lr = Symbol.for("react.module.reference");
      function c(i) {
        return !!(typeof i == "string" || typeof i == "function" || i === a || i === u || Se || i === o || i === y || i === O || Re || i === A || Me || le || Pe || typeof i == "object" && i !== null && (i.$$typeof === w || i.$$typeof === C || i.$$typeof === f || i.$$typeof === h || i.$$typeof === d || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        i.$$typeof === Lr || i.getModuleId !== void 0));
      }
      function v(i, l) {
        c(i) || N("memo: The first argument must be a component. Instead received: %s", i === null ? "null" : typeof i);
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
            set: function(T) {
              g = T, !i.name && !i.displayName && (i.displayName = T);
            }
          });
        }
        return m;
      }
      function R() {
        var i = Y.current;
        return i === null && N(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), i;
      }
      function L(i) {
        var l = R();
        if (i._context !== void 0) {
          var m = i._context;
          m.Consumer === i ? N("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : m.Provider === i && N("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return l.useContext(i);
      }
      function Q(i) {
        var l = R();
        return l.useState(i);
      }
      function te(i, l, m) {
        var g = R();
        return g.useReducer(i, l, m);
      }
      function B(i) {
        var l = R();
        return l.useRef(i);
      }
      function V(i, l) {
        var m = R();
        return m.useEffect(i, l);
      }
      function Ce(i, l) {
        var m = R();
        return m.useInsertionEffect(i, l);
      }
      function ye(i, l) {
        var m = R();
        return m.useLayoutEffect(i, l);
      }
      function ge(i, l) {
        var m = R();
        return m.useCallback(i, l);
      }
      function De(i, l) {
        var m = R();
        return m.useMemo(i, l);
      }
      function ft(i, l, m) {
        var g = R();
        return g.useImperativeHandle(i, l, m);
      }
      function Xe(i, l) {
        {
          var m = R();
          return m.useDebugValue(i, l);
        }
      }
      function Ae() {
        var i = R();
        return i.useTransition();
      }
      function ar(i) {
        var l = R();
        return l.useDeferredValue(i);
      }
      function An() {
        var i = R();
        return i.useId();
      }
      function Pn(i, l, m) {
        var g = R();
        return g.useSyncExternalStore(i, l, m);
      }
      var or = 0, Os, As, Ps, xs, Ds, Ns, Fs;
      function Ls() {
      }
      Ls.__reactDisabledLog = !0;
      function Oa() {
        {
          if (or === 0) {
            Os = console.log, As = console.info, Ps = console.warn, xs = console.error, Ds = console.group, Ns = console.groupCollapsed, Fs = console.groupEnd;
            var i = {
              configurable: !0,
              enumerable: !0,
              value: Ls,
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
          or++;
        }
      }
      function Aa() {
        {
          if (or--, or === 0) {
            var i = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: _({}, i, {
                value: Os
              }),
              info: _({}, i, {
                value: As
              }),
              warn: _({}, i, {
                value: Ps
              }),
              error: _({}, i, {
                value: xs
              }),
              group: _({}, i, {
                value: Ds
              }),
              groupCollapsed: _({}, i, {
                value: Ns
              }),
              groupEnd: _({}, i, {
                value: Fs
              })
            });
          }
          or < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xn = we.ReactCurrentDispatcher, Dn;
      function kr(i, l, m) {
        {
          if (Dn === void 0)
            try {
              throw Error();
            } catch (T) {
              var g = T.stack.trim().match(/\n( *(at )?)/);
              Dn = g && g[1] || "";
            }
          return `
` + Dn + i;
        }
      }
      var Nn = !1, Ir;
      {
        var Pa = typeof WeakMap == "function" ? WeakMap : Map;
        Ir = new Pa();
      }
      function ks(i, l) {
        if (!i || Nn)
          return "";
        {
          var m = Ir.get(i);
          if (m !== void 0)
            return m;
        }
        var g;
        Nn = !0;
        var T = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var F;
        F = xn.current, xn.current = null, Oa();
        try {
          if (l) {
            var P = function() {
              throw Error();
            };
            if (Object.defineProperty(P.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(P, []);
              } catch (Oe) {
                g = Oe;
              }
              Reflect.construct(i, [], P);
            } else {
              try {
                P.call();
              } catch (Oe) {
                g = Oe;
              }
              i.call(P.prototype);
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
            for (var k = Oe.stack.split(`
`), W = g.stack.split(`
`), ae = k.length - 1, he = W.length - 1; ae >= 1 && he >= 0 && k[ae] !== W[he]; )
              he--;
            for (; ae >= 1 && he >= 0; ae--, he--)
              if (k[ae] !== W[he]) {
                if (ae !== 1 || he !== 1)
                  do
                    if (ae--, he--, he < 0 || k[ae] !== W[he]) {
                      var pe = `
` + k[ae].replace(" at new ", " at ");
                      return i.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", i.displayName)), typeof i == "function" && Ir.set(i, pe), pe;
                    }
                  while (ae >= 1 && he >= 0);
                break;
              }
          }
        } finally {
          Nn = !1, xn.current = F, Aa(), Error.prepareStackTrace = T;
        }
        var be = i ? i.displayName || i.name : "", ve = be ? kr(be) : "";
        return typeof i == "function" && Ir.set(i, ve), ve;
      }
      function xa(i, l, m) {
        return ks(i, !1);
      }
      function Da(i) {
        var l = i.prototype;
        return !!(l && l.isReactComponent);
      }
      function $r(i, l, m) {
        if (i == null)
          return "";
        if (typeof i == "function")
          return ks(i, Da(i));
        if (typeof i == "string")
          return kr(i);
        switch (i) {
          case y:
            return kr("Suspense");
          case O:
            return kr("SuspenseList");
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case d:
              return xa(i.render);
            case C:
              return $r(i.type, l, m);
            case w: {
              var g = i, T = g._payload, F = g._init;
              try {
                return $r(F(T), l, m);
              } catch {
              }
            }
          }
        return "";
      }
      var Is = {}, $s = we.ReactDebugCurrentFrame;
      function Ur(i) {
        if (i) {
          var l = i._owner, m = $r(i.type, i._source, l ? l.type : null);
          $s.setExtraStackFrame(m);
        } else
          $s.setExtraStackFrame(null);
      }
      function Na(i, l, m, g, T) {
        {
          var F = Function.call.bind(Tt);
          for (var P in i)
            if (F(i, P)) {
              var k = void 0;
              try {
                if (typeof i[P] != "function") {
                  var W = Error((g || "React class") + ": " + m + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw W.name = "Invariant Violation", W;
                }
                k = i[P](l, P, g, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ae) {
                k = ae;
              }
              k && !(k instanceof Error) && (Ur(T), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", m, P, typeof k), Ur(null)), k instanceof Error && !(k.message in Is) && (Is[k.message] = !0, Ur(T), N("Failed %s type: %s", m, k.message), Ur(null));
            }
        }
      }
      function Bt(i) {
        if (i) {
          var l = i._owner, m = $r(i.type, i._source, l ? l.type : null);
          _e(m);
        } else
          _e(null);
      }
      var Fn;
      Fn = !1;
      function Us() {
        if (X.current) {
          var i = Ye(X.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
      function Fa(i) {
        if (i !== void 0) {
          var l = i.fileName.replace(/^.*[\\\/]/, ""), m = i.lineNumber;
          return `

Check your code at ` + l + ":" + m + ".";
        }
        return "";
      }
      function La(i) {
        return i != null ? Fa(i.__source) : "";
      }
      var js = {};
      function ka(i) {
        var l = Us();
        if (!l) {
          var m = typeof i == "string" ? i : i.displayName || i.name;
          m && (l = `

Check the top-level render call using <` + m + ">.");
        }
        return l;
      }
      function Vs(i, l) {
        if (!(!i._store || i._store.validated || i.key != null)) {
          i._store.validated = !0;
          var m = ka(l);
          if (!js[m]) {
            js[m] = !0;
            var g = "";
            i && i._owner && i._owner !== X.current && (g = " It was passed a child from " + Ye(i._owner.type) + "."), Bt(i), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, g), Bt(null);
          }
        }
      }
      function Ms(i, l) {
        if (typeof i == "object") {
          if (jt(i))
            for (var m = 0; m < i.length; m++) {
              var g = i[m];
              lt(g) && Vs(g, l);
            }
          else if (lt(i))
            i._store && (i._store.validated = !0);
          else if (i) {
            var T = D(i);
            if (typeof T == "function" && T !== i.entries)
              for (var F = T.call(i), P; !(P = F.next()).done; )
                lt(P.value) && Vs(P.value, l);
          }
        }
      }
      function qs(i) {
        {
          var l = i.type;
          if (l == null || typeof l == "string")
            return;
          var m;
          if (typeof l == "function")
            m = l.propTypes;
          else if (typeof l == "object" && (l.$$typeof === d || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          l.$$typeof === C))
            m = l.propTypes;
          else
            return;
          if (m) {
            var g = Ye(l);
            Na(m, i.props, "prop", g, i);
          } else if (l.PropTypes !== void 0 && !Fn) {
            Fn = !0;
            var T = Ye(l);
            N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
          }
          typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ia(i) {
        {
          for (var l = Object.keys(i.props), m = 0; m < l.length; m++) {
            var g = l[m];
            if (g !== "children" && g !== "key") {
              Bt(i), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Bt(null);
              break;
            }
          }
          i.ref !== null && (Bt(i), N("Invalid attribute `ref` supplied to `React.Fragment`."), Bt(null));
        }
      }
      function Gs(i, l, m) {
        var g = c(i);
        if (!g) {
          var T = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = La(l);
          F ? T += F : T += Us();
          var P;
          i === null ? P = "null" : jt(i) ? P = "array" : i !== void 0 && i.$$typeof === n ? (P = "<" + (Ye(i.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : P = typeof i, N("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, T);
        }
        var k = gn.apply(this, arguments);
        if (k == null)
          return k;
        if (g)
          for (var W = 2; W < arguments.length; W++)
            Ms(arguments[W], i);
        return i === a ? Ia(k) : qs(k), k;
      }
      var Bs = !1;
      function $a(i) {
        var l = Gs.bind(null, i);
        return l.type = i, Bs || (Bs = !0, qe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(l, "type", {
          enumerable: !1,
          get: function() {
            return qe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: i
            }), i;
          }
        }), l;
      }
      function Ua(i, l, m) {
        for (var g = vn.apply(this, arguments), T = 2; T < arguments.length; T++)
          Ms(arguments[T], g.type);
        return qs(g), g;
      }
      function ja(i, l) {
        var m = re.transition;
        re.transition = {};
        var g = re.transition;
        re.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          i();
        } finally {
          if (re.transition = m, m === null && g._updatedFibers) {
            var T = g._updatedFibers.size;
            T > 10 && qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), g._updatedFibers.clear();
          }
        }
      }
      var Hs = !1, jr = null;
      function Va(i) {
        if (jr === null)
          try {
            var l = ("require" + Math.random()).slice(0, 7), m = r && r[l];
            jr = m.call(r, "timers").setImmediate;
          } catch {
            jr = function(T) {
              Hs === !1 && (Hs = !0, typeof MessageChannel > "u" && N("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var F = new MessageChannel();
              F.port1.onmessage = T, F.port2.postMessage(void 0);
            };
          }
        return jr(i);
      }
      var Ht = 0, zs = !1;
      function Ys(i) {
        {
          var l = Ht;
          Ht++, $.current === null && ($.current = []);
          var m = $.isBatchingLegacy, g;
          try {
            if ($.isBatchingLegacy = !0, g = i(), !m && $.didScheduleLegacyUpdate) {
              var T = $.current;
              T !== null && ($.didScheduleLegacyUpdate = !1, In(T));
            }
          } catch (be) {
            throw Vr(l), be;
          } finally {
            $.isBatchingLegacy = m;
          }
          if (g !== null && typeof g == "object" && typeof g.then == "function") {
            var F = g, P = !1, k = {
              then: function(be, ve) {
                P = !0, F.then(function(Oe) {
                  Vr(l), Ht === 0 ? Ln(Oe, be, ve) : be(Oe);
                }, function(Oe) {
                  Vr(l), ve(Oe);
                });
              }
            };
            return !zs && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              P || (zs = !0, N("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), k;
          } else {
            var W = g;
            if (Vr(l), Ht === 0) {
              var ae = $.current;
              ae !== null && (In(ae), $.current = null);
              var he = {
                then: function(be, ve) {
                  $.current === null ? ($.current = [], Ln(W, be, ve)) : be(W);
                }
              };
              return he;
            } else {
              var pe = {
                then: function(be, ve) {
                  be(W);
                }
              };
              return pe;
            }
          }
        }
      }
      function Vr(i) {
        i !== Ht - 1 && N("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ht = i;
      }
      function Ln(i, l, m) {
        {
          var g = $.current;
          if (g !== null)
            try {
              In(g), Va(function() {
                g.length === 0 ? ($.current = null, l(i)) : Ln(i, l, m);
              });
            } catch (T) {
              m(T);
            }
          else
            l(i);
        }
      }
      var kn = !1;
      function In(i) {
        if (!kn) {
          kn = !0;
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
            kn = !1;
          }
        }
      }
      var Ma = Gs, qa = Ua, Ga = $a, Ba = {
        map: Ct,
        forEach: xr,
        count: Tn,
        toArray: Sn,
        only: Dr
      };
      e.Children = Ba, e.Component = H, e.Fragment = a, e.Profiler = u, e.PureComponent = ee, e.StrictMode = o, e.Suspense = y, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, e.act = Ys, e.cloneElement = qa, e.createContext = Nr, e.createElement = Ma, e.createFactory = Ga, e.createRef = mn, e.forwardRef = On, e.isValidElement = lt, e.lazy = Cn, e.memo = v, e.startTransition = ja, e.unstable_act = Ys, e.useCallback = ge, e.useContext = L, e.useDebugValue = Xe, e.useDeferredValue = ar, e.useEffect = V, e.useId = An, e.useImperativeHandle = ft, e.useInsertionEffect = Ce, e.useLayoutEffect = ye, e.useMemo = De, e.useReducer = te, e.useRef = B, e.useState = Q, e.useSyncExternalStore = Pn, e.useTransition = Ae, e.version = t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(dr, dr.exports)), dr.exports;
}
process.env.NODE_ENV === "production" ? rs.exports = lo() : rs.exports = co();
var Te = rs.exports, ur = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi;
function fo() {
  if (oi) return ur;
  oi = 1;
  var r = Te, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, f, h) {
    var d, y = {}, O = null, C = null;
    h !== void 0 && (O = "" + h), f.key !== void 0 && (O = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (d in f) n.call(f, d) && !a.hasOwnProperty(d) && (y[d] = f[d]);
    if (u && u.defaultProps) for (d in f = u.defaultProps, f) y[d] === void 0 && (y[d] = f[d]);
    return { $$typeof: e, type: u, key: O, ref: C, props: y, _owner: s.current };
  }
  return ur.Fragment = t, ur.jsx = o, ur.jsxs = o, ur;
}
var lr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ui;
function ho() {
  return ui || (ui = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Te, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), w = Symbol.iterator, A = "@@iterator";
    function S(c) {
      if (c === null || typeof c != "object")
        return null;
      var v = w && c[w] || c[A];
      return typeof v == "function" ? v : null;
    }
    var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(c) {
      {
        for (var v = arguments.length, R = new Array(v > 1 ? v - 1 : 0), L = 1; L < v; L++)
          R[L - 1] = arguments[L];
        Y("error", c, R);
      }
    }
    function Y(c, v, R) {
      {
        var L = I.ReactDebugCurrentFrame, Q = L.getStackAddendum();
        Q !== "" && (v += "%s", R = R.concat([Q]));
        var te = R.map(function(B) {
          return String(B);
        });
        te.unshift("Warning: " + v), Function.prototype.apply.call(console[c], console, te);
      }
    }
    var re = !1, $ = !1, X = !1, de = !1, ne = !1, _e;
    _e = Symbol.for("react.module.reference");
    function Me(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === a || ne || c === s || c === h || c === d || de || c === C || re || $ || X || typeof c == "object" && c !== null && (c.$$typeof === O || c.$$typeof === y || c.$$typeof === o || c.$$typeof === u || c.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === _e || c.getModuleId !== void 0));
    }
    function le(c, v, R) {
      var L = c.displayName;
      if (L)
        return L;
      var Q = v.displayName || v.name || "";
      return Q !== "" ? R + "(" + Q + ")" : R;
    }
    function Pe(c) {
      return c.displayName || "Context";
    }
    function Re(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
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
        case h:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            var v = c;
            return Pe(v) + ".Consumer";
          case o:
            var R = c;
            return Pe(R._context) + ".Provider";
          case f:
            return le(c, c.render, "ForwardRef");
          case y:
            var L = c.displayName || null;
            return L !== null ? L : Re(c.type) || "Memo";
          case O: {
            var Q = c, te = Q._payload, B = Q._init;
            try {
              return Re(B(te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Se = Object.assign, we = 0, qe, N, ze, vt, Je, p, _;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function H() {
      {
        if (we === 0) {
          qe = console.log, N = console.info, ze = console.warn, vt = console.error, Je = console.group, p = console.groupCollapsed, _ = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: G,
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
        we++;
      }
    }
    function K() {
      {
        if (we--, we === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Se({}, c, {
              value: qe
            }),
            info: Se({}, c, {
              value: N
            }),
            warn: Se({}, c, {
              value: ze
            }),
            error: Se({}, c, {
              value: vt
            }),
            group: Se({}, c, {
              value: Je
            }),
            groupCollapsed: Se({}, c, {
              value: p
            }),
            groupEnd: Se({}, c, {
              value: _
            })
          });
        }
        we < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = I.ReactCurrentDispatcher, ie;
    function se(c, v, R) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (Q) {
            var L = Q.stack.trim().match(/\n( *(at )?)/);
            ie = L && L[1] || "";
          }
        return `
` + ie + c;
      }
    }
    var ee = !1, Ee;
    {
      var mn = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new mn();
    }
    function Rr(c, v) {
      if (!c || ee)
        return "";
      {
        var R = Ee.get(c);
        if (R !== void 0)
          return R;
      }
      var L;
      ee = !0;
      var Q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = ue.current, ue.current = null, H();
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
            } catch (Ae) {
              L = Ae;
            }
            Reflect.construct(c, [], B);
          } else {
            try {
              B.call();
            } catch (Ae) {
              L = Ae;
            }
            c.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ae) {
            L = Ae;
          }
          c();
        }
      } catch (Ae) {
        if (Ae && L && typeof Ae.stack == "string") {
          for (var V = Ae.stack.split(`
`), Ce = L.stack.split(`
`), ye = V.length - 1, ge = Ce.length - 1; ye >= 1 && ge >= 0 && V[ye] !== Ce[ge]; )
            ge--;
          for (; ye >= 1 && ge >= 0; ye--, ge--)
            if (V[ye] !== Ce[ge]) {
              if (ye !== 1 || ge !== 1)
                do
                  if (ye--, ge--, ge < 0 || V[ye] !== Ce[ge]) {
                    var De = `
` + V[ye].replace(" at new ", " at ");
                    return c.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", c.displayName)), typeof c == "function" && Ee.set(c, De), De;
                  }
                while (ye >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        ee = !1, ue.current = te, K(), Error.prepareStackTrace = Q;
      }
      var ft = c ? c.displayName || c.name : "", Xe = ft ? se(ft) : "";
      return typeof c == "function" && Ee.set(c, Xe), Xe;
    }
    function jt(c, v, R) {
      return Rr(c, !1);
    }
    function yn(c) {
      var v = c.prototype;
      return !!(v && v.isReactComponent);
    }
    function Vt(c, v, R) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return Rr(c, yn(c));
      if (typeof c == "string")
        return se(c);
      switch (c) {
        case h:
          return se("Suspense");
        case d:
          return se("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case f:
            return jt(c.render);
          case y:
            return Vt(c.type, v, R);
          case O: {
            var L = c, Q = L._payload, te = L._init;
            try {
              return Vt(te(Q), v, R);
            } catch {
            }
          }
        }
      return "";
    }
    var ot = Object.prototype.hasOwnProperty, _t = {}, Tr = I.ReactDebugCurrentFrame;
    function Rt(c) {
      if (c) {
        var v = c._owner, R = Vt(c.type, c._source, v ? v.type : null);
        Tr.setExtraStackFrame(R);
      } else
        Tr.setExtraStackFrame(null);
    }
    function Ye(c, v, R, L, Q) {
      {
        var te = Function.call.bind(ot);
        for (var B in c)
          if (te(c, B)) {
            var V = void 0;
            try {
              if (typeof c[B] != "function") {
                var Ce = Error((L || "React class") + ": " + R + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              V = c[B](v, B, L, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ye) {
              V = ye;
            }
            V && !(V instanceof Error) && (Rt(Q), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", R, B, typeof V), Rt(null)), V instanceof Error && !(V.message in _t) && (_t[V.message] = !0, Rt(Q), D("Failed %s type: %s", R, V.message), Rt(null));
          }
      }
    }
    var Tt = Array.isArray;
    function Mt(c) {
      return Tt(c);
    }
    function Sr(c) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, R = v && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return R;
      }
    }
    function wr(c) {
      try {
        return qt(c), !1;
      } catch {
        return !0;
      }
    }
    function qt(c) {
      return "" + c;
    }
    function nr(c) {
      if (wr(c))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(c)), qt(c);
    }
    var ut = I.ReactCurrentOwner, bn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Cr, Or, St;
    St = {};
    function gn(c) {
      if (ot.call(c, "ref")) {
        var v = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function En(c) {
      if (ot.call(c, "key")) {
        var v = Object.getOwnPropertyDescriptor(c, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function vn(c, v) {
      if (typeof c.ref == "string" && ut.current && v && ut.current.stateNode !== v) {
        var R = Re(ut.current.type);
        St[R] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Re(ut.current.type), c.ref), St[R] = !0);
      }
    }
    function lt(c, v) {
      {
        var R = function() {
          Cr || (Cr = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        R.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function Ar(c, v) {
      {
        var R = function() {
          Or || (Or = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        R.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var _n = function(c, v, R, L, Q, te, B) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: v,
        ref: R,
        props: B,
        // Record the component responsible for creating this element.
        _owner: te
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function Rn(c, v, R, L, Q) {
      {
        var te, B = {}, V = null, Ce = null;
        R !== void 0 && (nr(R), V = "" + R), En(v) && (nr(v.key), V = "" + v.key), gn(v) && (Ce = v.ref, vn(v, Q));
        for (te in v)
          ot.call(v, te) && !bn.hasOwnProperty(te) && (B[te] = v[te]);
        if (c && c.defaultProps) {
          var ye = c.defaultProps;
          for (te in ye)
            B[te] === void 0 && (B[te] = ye[te]);
        }
        if (V || Ce) {
          var ge = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          V && lt(B, ge), Ce && Ar(B, ge);
        }
        return _n(c, V, Ce, Q, L, ut.current, B);
      }
    }
    var Gt = I.ReactCurrentOwner, Pr = I.ReactDebugCurrentFrame;
    function Ze(c) {
      if (c) {
        var v = c._owner, R = Vt(c.type, c._source, v ? v.type : null);
        Pr.setExtraStackFrame(R);
      } else
        Pr.setExtraStackFrame(null);
    }
    var wt;
    wt = !1;
    function ct(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function Ct() {
      {
        if (Gt.current) {
          var c = Re(Gt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Tn(c) {
      return "";
    }
    var xr = {};
    function Sn(c) {
      {
        var v = Ct();
        if (!v) {
          var R = typeof c == "string" ? c : c.displayName || c.name;
          R && (v = `

Check the top-level render call using <` + R + ">.");
        }
        return v;
      }
    }
    function Dr(c, v) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var R = Sn(v);
        if (xr[R])
          return;
        xr[R] = !0;
        var L = "";
        c && c._owner && c._owner !== Gt.current && (L = " It was passed a child from " + Re(c._owner.type) + "."), Ze(c), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, L), Ze(null);
      }
    }
    function Nr(c, v) {
      {
        if (typeof c != "object")
          return;
        if (Mt(c))
          for (var R = 0; R < c.length; R++) {
            var L = c[R];
            ct(L) && Dr(L, v);
          }
        else if (ct(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var Q = S(c);
          if (typeof Q == "function" && Q !== c.entries)
            for (var te = Q.call(c), B; !(B = te.next()).done; )
              ct(B.value) && Dr(B.value, v);
        }
      }
    }
    function Ot(c) {
      {
        var v = c.type;
        if (v == null || typeof v == "string")
          return;
        var R;
        if (typeof v == "function")
          R = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === y))
          R = v.propTypes;
        else
          return;
        if (R) {
          var L = Re(v);
          Ye(R, c.props, "prop", L, c);
        } else if (v.PropTypes !== void 0 && !wt) {
          wt = !0;
          var Q = Re(v);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Q || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(c) {
      {
        for (var v = Object.keys(c.props), R = 0; R < v.length; R++) {
          var L = v[R];
          if (L !== "children" && L !== "key") {
            Ze(c), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Ze(null);
            break;
          }
        }
        c.ref !== null && (Ze(c), D("Invalid attribute `ref` supplied to `React.Fragment`."), Ze(null));
      }
    }
    var ir = {};
    function Fr(c, v, R, L, Q, te) {
      {
        var B = Me(c);
        if (!B) {
          var V = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = Tn();
          Ce ? V += Ce : V += Ct();
          var ye;
          c === null ? ye = "null" : Mt(c) ? ye = "array" : c !== void 0 && c.$$typeof === e ? (ye = "<" + (Re(c.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof c, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, V);
        }
        var ge = Rn(c, v, R, Q, te);
        if (ge == null)
          return ge;
        if (B) {
          var De = v.children;
          if (De !== void 0)
            if (L)
              if (Mt(De)) {
                for (var ft = 0; ft < De.length; ft++)
                  Nr(De[ft], c);
                Object.freeze && Object.freeze(De);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nr(De, c);
        }
        if (ot.call(v, "key")) {
          var Xe = Re(c), Ae = Object.keys(v).filter(function(Pn) {
            return Pn !== "key";
          }), ar = Ae.length > 0 ? "{key: someKey, " + Ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ir[Xe + ar]) {
            var An = Ae.length > 0 ? "{" + Ae.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ar, Xe, An, Xe), ir[Xe + ar] = !0;
          }
        }
        return c === n ? sr(ge) : Ot(ge), ge;
      }
    }
    function wn(c, v, R) {
      return Fr(c, v, R, !0);
    }
    function Cn(c, v, R) {
      return Fr(c, v, R, !1);
    }
    var On = Cn, Lr = wn;
    lr.Fragment = n, lr.jsx = On, lr.jsxs = Lr;
  }()), lr;
}
process.env.NODE_ENV === "production" ? fo() : ho();
var po = Te.createContext(
  void 0
), ki = (r) => {
  const e = Te.useContext(po);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Ii = Te.createContext(!1), mo = () => Te.useContext(Ii);
Ii.Provider;
function yo() {
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
var bo = Te.createContext(yo()), go = () => Te.useContext(bo);
function $i(r, e) {
  return typeof r == "function" ? r(...e) : !!r;
}
function Eo() {
}
var vo = (r, e) => {
  (r.suspense || r.throwOnError) && (e.isReset() || (r.retryOnMount = !1));
}, _o = (r) => {
  Te.useEffect(() => {
    r.clearReset();
  }, [r]);
}, Ro = ({
  result: r,
  errorResetBoundary: e,
  throwOnError: t,
  query: n
}) => r.isError && !e.isReset() && !r.isFetching && n && $i(t, [r.error, n]), To = (r) => {
  r.suspense && (typeof r.staleTime != "number" && (r.staleTime = 1e3), typeof r.gcTime == "number" && (r.gcTime = Math.max(r.gcTime, 1e3)));
}, So = (r, e) => (r == null ? void 0 : r.suspense) && e.isPending, wo = (r, e, t) => e.fetchOptimistic(r).catch(() => {
  t.clearReset();
});
function Co(r, e, t) {
  var h, d, y, O;
  if (process.env.NODE_ENV !== "production" && (typeof r != "object" || Array.isArray(r)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = ki(), s = mo(), a = go(), o = n.defaultQueryOptions(r);
  (d = (h = n.getDefaultOptions().queries) == null ? void 0 : h._experimental_beforeQuery) == null || d.call(
    h,
    o
  ), o._optimisticResults = s ? "isRestoring" : "optimistic", To(o), vo(o, a), _o(a);
  const [u] = Te.useState(
    () => new e(
      n,
      o
    )
  ), f = u.getOptimisticResult(o);
  if (Te.useSyncExternalStore(
    Te.useCallback(
      (C) => {
        const w = s ? () => {
        } : u.subscribe(sn.batchCalls(C));
        return u.updateResult(), w;
      },
      [u, s]
    ),
    () => u.getCurrentResult(),
    () => u.getCurrentResult()
  ), Te.useEffect(() => {
    u.setOptions(o, { listeners: !1 });
  }, [o, u]), So(o, f))
    throw wo(o, u, a);
  if (Ro({
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
function ys(r, e) {
  return Co(r, so);
}
function Ui(r, e) {
  const t = ki(), [n] = Te.useState(
    () => new oo(
      t,
      r
    )
  );
  Te.useEffect(() => {
    n.setOptions(r);
  }, [n, r]);
  const s = Te.useSyncExternalStore(
    Te.useCallback(
      (o) => n.subscribe(sn.batchCalls(o)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), a = Te.useCallback(
    (o, u) => {
      n.mutate(o, u).catch(Eo);
    },
    [n]
  );
  if (s.error && $i(n.options.throwOnError, [s.error]))
    throw s.error;
  return { ...s, mutate: a, mutateAsync: s.mutate };
}
function ji(r, e) {
  return function() {
    return r.apply(e, arguments);
  };
}
const { toString: Oo } = Object.prototype, { getPrototypeOf: bs } = Object, an = /* @__PURE__ */ ((r) => (e) => {
  const t = Oo.call(e);
  return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), He = (r) => (r = r.toLowerCase(), (e) => an(e) === r), on = (r) => (e) => typeof e === r, { isArray: tr } = Array, yr = on("undefined");
function Ao(r) {
  return r !== null && !yr(r) && r.constructor !== null && !yr(r.constructor) && je(r.constructor.isBuffer) && r.constructor.isBuffer(r);
}
const Vi = He("ArrayBuffer");
function Po(r) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && Vi(r.buffer), e;
}
const xo = on("string"), je = on("function"), Mi = on("number"), un = (r) => r !== null && typeof r == "object", Do = (r) => r === !0 || r === !1, Hr = (r) => {
  if (an(r) !== "object")
    return !1;
  const e = bs(r);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
}, No = He("Date"), Fo = He("File"), Lo = He("Blob"), ko = He("FileList"), Io = (r) => un(r) && je(r.pipe), $o = (r) => {
  let e;
  return r && (typeof FormData == "function" && r instanceof FormData || je(r.append) && ((e = an(r)) === "formdata" || // detect form-data instance
  e === "object" && je(r.toString) && r.toString() === "[object FormData]"));
}, Uo = He("URLSearchParams"), [jo, Vo, Mo, qo] = ["ReadableStream", "Request", "Response", "Headers"].map(He), Go = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Er(r, e, { allOwnKeys: t = !1 } = {}) {
  if (r === null || typeof r > "u")
    return;
  let n, s;
  if (typeof r != "object" && (r = [r]), tr(r))
    for (n = 0, s = r.length; n < s; n++)
      e.call(null, r[n], n, r);
  else {
    const a = t ? Object.getOwnPropertyNames(r) : Object.keys(r), o = a.length;
    let u;
    for (n = 0; n < o; n++)
      u = a[n], e.call(null, r[u], u, r);
  }
}
function qi(r, e) {
  e = e.toLowerCase();
  const t = Object.keys(r);
  let n = t.length, s;
  for (; n-- > 0; )
    if (s = t[n], e === s.toLowerCase())
      return s;
  return null;
}
const At = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Gi = (r) => !yr(r) && r !== At;
function ns() {
  const { caseless: r } = Gi(this) && this || {}, e = {}, t = (n, s) => {
    const a = r && qi(e, s) || s;
    Hr(e[a]) && Hr(n) ? e[a] = ns(e[a], n) : Hr(n) ? e[a] = ns({}, n) : tr(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Er(arguments[n], t);
  return e;
}
const Bo = (r, e, t, { allOwnKeys: n } = {}) => (Er(e, (s, a) => {
  t && je(s) ? r[a] = ji(s, t) : r[a] = s;
}, { allOwnKeys: n }), r), Ho = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), zo = (r, e, t, n) => {
  r.prototype = Object.create(e.prototype, n), r.prototype.constructor = r, Object.defineProperty(r, "super", {
    value: e.prototype
  }), t && Object.assign(r.prototype, t);
}, Yo = (r, e, t, n) => {
  let s, a, o;
  const u = {};
  if (e = e || {}, r == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(r), a = s.length; a-- > 0; )
      o = s[a], (!n || n(o, r, e)) && !u[o] && (e[o] = r[o], u[o] = !0);
    r = t !== !1 && bs(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}, Wo = (r, e, t) => {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  const n = r.indexOf(e, t);
  return n !== -1 && n === t;
}, Ko = (r) => {
  if (!r) return null;
  if (tr(r)) return r;
  let e = r.length;
  if (!Mi(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = r[e];
  return t;
}, Qo = /* @__PURE__ */ ((r) => (e) => r && e instanceof r)(typeof Uint8Array < "u" && bs(Uint8Array)), Jo = (r, e) => {
  const n = (r && r[Symbol.iterator]).call(r);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    e.call(r, a[0], a[1]);
  }
}, Zo = (r, e) => {
  let t;
  const n = [];
  for (; (t = r.exec(e)) !== null; )
    n.push(t);
  return n;
}, Xo = He("HTMLFormElement"), eu = (r) => r.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, s) {
    return n.toUpperCase() + s;
  }
), li = (({ hasOwnProperty: r }) => (e, t) => r.call(e, t))(Object.prototype), tu = He("RegExp"), Bi = (r, e) => {
  const t = Object.getOwnPropertyDescriptors(r), n = {};
  Er(t, (s, a) => {
    let o;
    (o = e(s, a, r)) !== !1 && (n[a] = o || s);
  }), Object.defineProperties(r, n);
}, ru = (r) => {
  Bi(r, (e, t) => {
    if (je(r) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = r[t];
    if (je(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, nu = (r, e) => {
  const t = {}, n = (s) => {
    s.forEach((a) => {
      t[a] = !0;
    });
  };
  return tr(r) ? n(r) : n(String(r).split(e)), t;
}, su = () => {
}, iu = (r, e) => r != null && Number.isFinite(r = +r) ? r : e, jn = "abcdefghijklmnopqrstuvwxyz", ci = "0123456789", Hi = {
  DIGIT: ci,
  ALPHA: jn,
  ALPHA_DIGIT: jn + jn.toUpperCase() + ci
}, au = (r = 16, e = Hi.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = e;
  for (; r--; )
    t += e[Math.random() * n | 0];
  return t;
};
function ou(r) {
  return !!(r && je(r.append) && r[Symbol.toStringTag] === "FormData" && r[Symbol.iterator]);
}
const uu = (r) => {
  const e = new Array(10), t = (n, s) => {
    if (un(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const a = tr(n) ? [] : {};
        return Er(n, (o, u) => {
          const f = t(o, s + 1);
          !yr(f) && (a[u] = f);
        }), e[s] = void 0, a;
      }
    }
    return n;
  };
  return t(r, 0);
}, lu = He("AsyncFunction"), cu = (r) => r && (un(r) || je(r)) && je(r.then) && je(r.catch), zi = ((r, e) => r ? setImmediate : e ? ((t, n) => (At.addEventListener("message", ({ source: s, data: a }) => {
  s === At && a === t && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), At.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  je(At.postMessage)
), fu = typeof queueMicrotask < "u" ? queueMicrotask.bind(At) : typeof process < "u" && process.nextTick || zi, b = {
  isArray: tr,
  isArrayBuffer: Vi,
  isBuffer: Ao,
  isFormData: $o,
  isArrayBufferView: Po,
  isString: xo,
  isNumber: Mi,
  isBoolean: Do,
  isObject: un,
  isPlainObject: Hr,
  isReadableStream: jo,
  isRequest: Vo,
  isResponse: Mo,
  isHeaders: qo,
  isUndefined: yr,
  isDate: No,
  isFile: Fo,
  isBlob: Lo,
  isRegExp: tu,
  isFunction: je,
  isStream: Io,
  isURLSearchParams: Uo,
  isTypedArray: Qo,
  isFileList: ko,
  forEach: Er,
  merge: ns,
  extend: Bo,
  trim: Go,
  stripBOM: Ho,
  inherits: zo,
  toFlatObject: Yo,
  kindOf: an,
  kindOfTest: He,
  endsWith: Wo,
  toArray: Ko,
  forEachEntry: Jo,
  matchAll: Zo,
  isHTMLForm: Xo,
  hasOwnProperty: li,
  hasOwnProp: li,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Bi,
  freezeMethods: ru,
  toObjectSet: nu,
  toCamelCase: eu,
  noop: su,
  toFiniteNumber: iu,
  findKey: qi,
  global: At,
  isContextDefined: Gi,
  ALPHABET: Hi,
  generateString: au,
  isSpecCompliantForm: ou,
  toJSONObject: uu,
  isAsyncFn: lu,
  isThenable: cu,
  setImmediate: zi,
  asap: fu
};
function U(r, e, t, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
b.inherits(U, Error, {
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
const Yi = U.prototype, Wi = {};
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
  Wi[r] = { value: r };
});
Object.defineProperties(U, Wi);
Object.defineProperty(Yi, "isAxiosError", { value: !0 });
U.from = (r, e, t, n, s, a) => {
  const o = Object.create(Yi);
  return b.toFlatObject(r, o, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError"), U.call(o, r.message, e, t, n, s), o.cause = r, o.name = r.name, a && Object.assign(o, a), o;
};
const du = null;
function ss(r) {
  return b.isPlainObject(r) || b.isArray(r);
}
function Ki(r) {
  return b.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function fi(r, e, t) {
  return r ? r.concat(e).map(function(s, a) {
    return s = Ki(s), !t && a ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function hu(r) {
  return b.isArray(r) && !r.some(ss);
}
const pu = b.toFlatObject(b, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ln(r, e, t) {
  if (!b.isObject(r))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = b.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, S) {
    return !b.isUndefined(S[A]);
  });
  const n = t.metaTokens, s = t.visitor || d, a = t.dots, o = t.indexes, f = (t.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(e);
  if (!b.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(w) {
    if (w === null) return "";
    if (b.isDate(w))
      return w.toISOString();
    if (!f && b.isBlob(w))
      throw new U("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(w) || b.isTypedArray(w) ? f && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function d(w, A, S) {
    let I = w;
    if (w && !S && typeof w == "object") {
      if (b.endsWith(A, "{}"))
        A = n ? A : A.slice(0, -2), w = JSON.stringify(w);
      else if (b.isArray(w) && hu(w) || (b.isFileList(w) || b.endsWith(A, "[]")) && (I = b.toArray(w)))
        return A = Ki(A), I.forEach(function(Y, re) {
          !(b.isUndefined(Y) || Y === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? fi([A], re, a) : o === null ? A : A + "[]",
            h(Y)
          );
        }), !1;
    }
    return ss(w) ? !0 : (e.append(fi(S, A, a), h(w)), !1);
  }
  const y = [], O = Object.assign(pu, {
    defaultVisitor: d,
    convertValue: h,
    isVisitable: ss
  });
  function C(w, A) {
    if (!b.isUndefined(w)) {
      if (y.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      y.push(w), b.forEach(w, function(I, D) {
        (!(b.isUndefined(I) || I === null) && s.call(
          e,
          I,
          b.isString(D) ? D.trim() : D,
          A,
          O
        )) === !0 && C(I, A ? A.concat(D) : [D]);
      }), y.pop();
    }
  }
  if (!b.isObject(r))
    throw new TypeError("data must be an object");
  return C(r), e;
}
function di(r) {
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
function gs(r, e) {
  this._pairs = [], r && ln(r, this, e);
}
const Qi = gs.prototype;
Qi.append = function(e, t) {
  this._pairs.push([e, t]);
};
Qi.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, di);
  } : di;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function mu(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ji(r, e, t) {
  if (!e)
    return r;
  const n = t && t.encode || mu, s = t && t.serialize;
  let a;
  if (s ? a = s(e, t) : a = b.isURLSearchParams(e) ? e.toString() : new gs(e, t).toString(n), a) {
    const o = r.indexOf("#");
    o !== -1 && (r = r.slice(0, o)), r += (r.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return r;
}
class hi {
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
const Zi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, yu = typeof URLSearchParams < "u" ? URLSearchParams : gs, bu = typeof FormData < "u" ? FormData : null, gu = typeof Blob < "u" ? Blob : null, Eu = {
  isBrowser: !0,
  classes: {
    URLSearchParams: yu,
    FormData: bu,
    Blob: gu
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Es = typeof window < "u" && typeof document < "u", is = typeof navigator == "object" && navigator || void 0, vu = Es && (!is || ["ReactNative", "NativeScript", "NS"].indexOf(is.product) < 0), _u = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ru = Es && window.location.href || "http://localhost", Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Es,
  hasStandardBrowserEnv: vu,
  hasStandardBrowserWebWorkerEnv: _u,
  navigator: is,
  origin: Ru
}, Symbol.toStringTag, { value: "Module" })), Ie = {
  ...Tu,
  ...Eu
};
function Su(r, e) {
  return ln(r, new Ie.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, s, a) {
      return Ie.isNode && b.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function wu(r) {
  return b.matchAll(/\w+|\[(\w*)]/g, r).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Cu(r) {
  const e = {}, t = Object.keys(r);
  let n;
  const s = t.length;
  let a;
  for (n = 0; n < s; n++)
    a = t[n], e[a] = r[a];
  return e;
}
function Xi(r) {
  function e(t, n, s, a) {
    let o = t[a++];
    if (o === "__proto__") return !0;
    const u = Number.isFinite(+o), f = a >= t.length;
    return o = !o && b.isArray(s) ? s.length : o, f ? (b.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !u) : ((!s[o] || !b.isObject(s[o])) && (s[o] = []), e(t, n, s[o], a) && b.isArray(s[o]) && (s[o] = Cu(s[o])), !u);
  }
  if (b.isFormData(r) && b.isFunction(r.entries)) {
    const t = {};
    return b.forEachEntry(r, (n, s) => {
      e(wu(n), s, t, 0);
    }), t;
  }
  return null;
}
function Ou(r, e, t) {
  if (b.isString(r))
    try {
      return (e || JSON.parse)(r), b.trim(r);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(r);
}
const vr = {
  transitional: Zi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", s = n.indexOf("application/json") > -1, a = b.isObject(e);
    if (a && b.isHTMLForm(e) && (e = new FormData(e)), b.isFormData(e))
      return s ? JSON.stringify(Xi(e)) : e;
    if (b.isArrayBuffer(e) || b.isBuffer(e) || b.isStream(e) || b.isFile(e) || b.isBlob(e) || b.isReadableStream(e))
      return e;
    if (b.isArrayBufferView(e))
      return e.buffer;
    if (b.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let u;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Su(e, this.formSerializer).toString();
      if ((u = b.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ln(
          u ? { "files[]": e } : e,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || s ? (t.setContentType("application/json", !1), Ou(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || vr.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (b.isResponse(e) || b.isReadableStream(e))
      return e;
    if (e && b.isString(e) && (n && !this.responseType || s)) {
      const o = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? U.from(u, U.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
    FormData: Ie.classes.FormData,
    Blob: Ie.classes.Blob
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
  vr.headers[r] = {};
});
const Au = b.toObjectSet([
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
]), Pu = (r) => {
  const e = {};
  let t, n, s;
  return r && r.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!t || e[t] && Au[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, pi = Symbol("internals");
function cr(r) {
  return r && String(r).trim().toLowerCase();
}
function zr(r) {
  return r === !1 || r == null ? r : b.isArray(r) ? r.map(zr) : String(r);
}
function xu(r) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(r); )
    e[n[1]] = n[2];
  return e;
}
const Du = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function Vn(r, e, t, n, s) {
  if (b.isFunction(n))
    return n.call(this, e, t);
  if (s && (e = t), !!b.isString(e)) {
    if (b.isString(n))
      return e.indexOf(n) !== -1;
    if (b.isRegExp(n))
      return n.test(e);
  }
}
function Nu(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Fu(r, e) {
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
    function a(u, f, h) {
      const d = cr(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const y = b.findKey(s, d);
      (!y || s[y] === void 0 || h === !0 || h === void 0 && s[y] !== !1) && (s[y || f] = zr(u));
    }
    const o = (u, f) => b.forEach(u, (h, d) => a(h, d, f));
    if (b.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (b.isString(e) && (e = e.trim()) && !Du(e))
      o(Pu(e), t);
    else if (b.isHeaders(e))
      for (const [u, f] of e.entries())
        a(f, u, n);
    else
      e != null && a(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = cr(e), e) {
      const n = b.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!t)
          return s;
        if (t === !0)
          return xu(s);
        if (b.isFunction(t))
          return t.call(this, s, n);
        if (b.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = cr(e), e) {
      const n = b.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || Vn(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let s = !1;
    function a(o) {
      if (o = cr(o), o) {
        const u = b.findKey(n, o);
        u && (!t || Vn(n, n[u], u, t)) && (delete n[u], s = !0);
      }
    }
    return b.isArray(e) ? e.forEach(a) : a(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, s = !1;
    for (; n--; ) {
      const a = t[n];
      (!e || Vn(this, this[a], a, e, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, n = {};
    return b.forEach(this, (s, a) => {
      const o = b.findKey(n, a);
      if (o) {
        t[o] = zr(s), delete t[a];
        return;
      }
      const u = e ? Nu(a) : String(a).trim();
      u !== a && delete t[a], t[u] = zr(s), n[u] = !0;
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
    const n = (this[pi] = this[pi] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const u = cr(o);
      n[u] || (Fu(s, o), n[u] = !0);
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
function Mn(r, e) {
  const t = this || vr, n = e || t, s = $e.from(n.headers);
  let a = n.data;
  return b.forEach(r, function(u) {
    a = u.call(t, a, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), a;
}
function ea(r) {
  return !!(r && r.__CANCEL__);
}
function rr(r, e, t) {
  U.call(this, r ?? "canceled", U.ERR_CANCELED, e, t), this.name = "CanceledError";
}
b.inherits(rr, U, {
  __CANCEL__: !0
});
function ta(r, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? r(t) : e(new U(
    "Request failed with status code " + t.status,
    [U.ERR_BAD_REQUEST, U.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function Lu(r) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return e && e[1] || "";
}
function ku(r, e) {
  r = r || 10;
  const t = new Array(r), n = new Array(r);
  let s = 0, a = 0, o;
  return e = e !== void 0 ? e : 1e3, function(f) {
    const h = Date.now(), d = n[a];
    o || (o = h), t[s] = f, n[s] = h;
    let y = a, O = 0;
    for (; y !== s; )
      O += t[y++], y = y % r;
    if (s = (s + 1) % r, s === a && (a = (a + 1) % r), h - o < e)
      return;
    const C = d && h - d;
    return C ? Math.round(O * 1e3 / C) : void 0;
  };
}
function Iu(r, e) {
  let t = 0, n = 1e3 / e, s, a;
  const o = (h, d = Date.now()) => {
    t = d, s = null, a && (clearTimeout(a), a = null), r.apply(null, h);
  };
  return [(...h) => {
    const d = Date.now(), y = d - t;
    y >= n ? o(h, d) : (s = h, a || (a = setTimeout(() => {
      a = null, o(s);
    }, n - y)));
  }, () => s && o(s)];
}
const Xr = (r, e, t = 3) => {
  let n = 0;
  const s = ku(50, 250);
  return Iu((a) => {
    const o = a.loaded, u = a.lengthComputable ? a.total : void 0, f = o - n, h = s(f), d = o <= u;
    n = o;
    const y = {
      loaded: o,
      total: u,
      progress: u ? o / u : void 0,
      bytes: f,
      rate: h || void 0,
      estimated: h && u && d ? (u - o) / h : void 0,
      event: a,
      lengthComputable: u != null,
      [e ? "download" : "upload"]: !0
    };
    r(y);
  }, t);
}, mi = (r, e) => {
  const t = r != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: r,
    loaded: n
  }), e[1]];
}, yi = (r) => (...e) => b.asap(() => r(...e)), $u = Ie.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = Ie.navigator && /(msie|trident)/i.test(Ie.navigator.userAgent), t = document.createElement("a");
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
), Uu = Ie.hasStandardBrowserEnv ? (
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
function ju(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function Vu(r, e) {
  return e ? r.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : r;
}
function ra(r, e) {
  return r && !ju(e) ? Vu(r, e) : e;
}
const bi = (r) => r instanceof $e ? { ...r } : r;
function It(r, e) {
  e = e || {};
  const t = {};
  function n(h, d, y) {
    return b.isPlainObject(h) && b.isPlainObject(d) ? b.merge.call({ caseless: y }, h, d) : b.isPlainObject(d) ? b.merge({}, d) : b.isArray(d) ? d.slice() : d;
  }
  function s(h, d, y) {
    if (b.isUndefined(d)) {
      if (!b.isUndefined(h))
        return n(void 0, h, y);
    } else return n(h, d, y);
  }
  function a(h, d) {
    if (!b.isUndefined(d))
      return n(void 0, d);
  }
  function o(h, d) {
    if (b.isUndefined(d)) {
      if (!b.isUndefined(h))
        return n(void 0, h);
    } else return n(void 0, d);
  }
  function u(h, d, y) {
    if (y in e)
      return n(h, d);
    if (y in r)
      return n(void 0, h);
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
    headers: (h, d) => s(bi(h), bi(d), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, r, e)), function(d) {
    const y = f[d] || s, O = y(r[d], e[d], d);
    b.isUndefined(O) && y !== u || (t[d] = O);
  }), t;
}
const na = (r) => {
  const e = It({}, r);
  let { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: a, headers: o, auth: u } = e;
  e.headers = o = $e.from(o), e.url = Ji(ra(e.baseURL, e.url), r.params, r.paramsSerializer), u && o.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let f;
  if (b.isFormData(t)) {
    if (Ie.hasStandardBrowserEnv || Ie.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((f = o.getContentType()) !== !1) {
      const [h, ...d] = f ? f.split(";").map((y) => y.trim()).filter(Boolean) : [];
      o.setContentType([h || "multipart/form-data", ...d].join("; "));
    }
  }
  if (Ie.hasStandardBrowserEnv && (n && b.isFunction(n) && (n = n(e)), n || n !== !1 && $u(e.url))) {
    const h = s && a && Uu.read(a);
    h && o.set(s, h);
  }
  return e;
}, Mu = typeof XMLHttpRequest < "u", qu = Mu && function(r) {
  return new Promise(function(t, n) {
    const s = na(r);
    let a = s.data;
    const o = $e.from(s.headers).normalize();
    let { responseType: u, onUploadProgress: f, onDownloadProgress: h } = s, d, y, O, C, w;
    function A() {
      C && C(), w && w(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let S = new XMLHttpRequest();
    S.open(s.method.toUpperCase(), s.url, !0), S.timeout = s.timeout;
    function I() {
      if (!S)
        return;
      const Y = $e.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), $ = {
        data: !u || u === "text" || u === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: Y,
        config: r,
        request: S
      };
      ta(function(de) {
        t(de), A();
      }, function(de) {
        n(de), A();
      }, $), S = null;
    }
    "onloadend" in S ? S.onloadend = I : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(I);
    }, S.onabort = function() {
      S && (n(new U("Request aborted", U.ECONNABORTED, r, S)), S = null);
    }, S.onerror = function() {
      n(new U("Network Error", U.ERR_NETWORK, r, S)), S = null;
    }, S.ontimeout = function() {
      let re = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const $ = s.transitional || Zi;
      s.timeoutErrorMessage && (re = s.timeoutErrorMessage), n(new U(
        re,
        $.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,
        r,
        S
      )), S = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in S && b.forEach(o.toJSON(), function(re, $) {
      S.setRequestHeader($, re);
    }), b.isUndefined(s.withCredentials) || (S.withCredentials = !!s.withCredentials), u && u !== "json" && (S.responseType = s.responseType), h && ([O, w] = Xr(h, !0), S.addEventListener("progress", O)), f && S.upload && ([y, C] = Xr(f), S.upload.addEventListener("progress", y), S.upload.addEventListener("loadend", C)), (s.cancelToken || s.signal) && (d = (Y) => {
      S && (n(!Y || Y.type ? new rr(null, r, S) : Y), S.abort(), S = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const D = Lu(s.url);
    if (D && Ie.protocols.indexOf(D) === -1) {
      n(new U("Unsupported protocol " + D + ":", U.ERR_BAD_REQUEST, r));
      return;
    }
    S.send(a || null);
  });
}, Gu = (r, e) => {
  const { length: t } = r = r ? r.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), s;
    const a = function(h) {
      if (!s) {
        s = !0, u();
        const d = h instanceof Error ? h : this.reason;
        n.abort(d instanceof U ? d : new rr(d instanceof Error ? d.message : d));
      }
    };
    let o = e && setTimeout(() => {
      o = null, a(new U(`timeout ${e} of ms exceeded`, U.ETIMEDOUT));
    }, e);
    const u = () => {
      r && (o && clearTimeout(o), o = null, r.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(a) : h.removeEventListener("abort", a);
      }), r = null);
    };
    r.forEach((h) => h.addEventListener("abort", a));
    const { signal: f } = n;
    return f.unsubscribe = () => b.asap(u), f;
  }
}, Bu = function* (r, e) {
  let t = r.byteLength;
  if (t < e) {
    yield r;
    return;
  }
  let n = 0, s;
  for (; n < t; )
    s = n + e, yield r.slice(n, s), n = s;
}, Hu = async function* (r, e) {
  for await (const t of zu(r))
    yield* Bu(t, e);
}, zu = async function* (r) {
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
}, gi = (r, e, t, n) => {
  const s = Hu(r, e);
  let a = 0, o, u = (f) => {
    o || (o = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: h, value: d } = await s.next();
        if (h) {
          u(), f.close();
          return;
        }
        let y = d.byteLength;
        if (t) {
          let O = a += y;
          t(O);
        }
        f.enqueue(new Uint8Array(d));
      } catch (h) {
        throw u(h), h;
      }
    },
    cancel(f) {
      return u(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, cn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", sa = cn && typeof ReadableStream == "function", Yu = cn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (e) => r.encode(e))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), ia = (r, ...e) => {
  try {
    return !!r(...e);
  } catch {
    return !1;
  }
}, Wu = sa && ia(() => {
  let r = !1;
  const e = new Request(Ie.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return r = !0, "half";
    }
  }).headers.has("Content-Type");
  return r && !e;
}), Ei = 64 * 1024, as = sa && ia(() => b.isReadableStream(new Response("").body)), en = {
  stream: as && ((r) => r.body)
};
cn && ((r) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !en[e] && (en[e] = b.isFunction(r[e]) ? (t) => t[e]() : (t, n) => {
      throw new U(`Response type '${e}' is not supported`, U.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Ku = async (r) => {
  if (r == null)
    return 0;
  if (b.isBlob(r))
    return r.size;
  if (b.isSpecCompliantForm(r))
    return (await new Request(Ie.origin, {
      method: "POST",
      body: r
    }).arrayBuffer()).byteLength;
  if (b.isArrayBufferView(r) || b.isArrayBuffer(r))
    return r.byteLength;
  if (b.isURLSearchParams(r) && (r = r + ""), b.isString(r))
    return (await Yu(r)).byteLength;
}, Qu = async (r, e) => {
  const t = b.toFiniteNumber(r.getContentLength());
  return t ?? Ku(e);
}, Ju = cn && (async (r) => {
  let {
    url: e,
    method: t,
    data: n,
    signal: s,
    cancelToken: a,
    timeout: o,
    onDownloadProgress: u,
    onUploadProgress: f,
    responseType: h,
    headers: d,
    withCredentials: y = "same-origin",
    fetchOptions: O
  } = na(r);
  h = h ? (h + "").toLowerCase() : "text";
  let C = Gu([s, a && a.toAbortSignal()], o), w;
  const A = C && C.unsubscribe && (() => {
    C.unsubscribe();
  });
  let S;
  try {
    if (f && Wu && t !== "get" && t !== "head" && (S = await Qu(d, n)) !== 0) {
      let $ = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), X;
      if (b.isFormData(n) && (X = $.headers.get("content-type")) && d.setContentType(X), $.body) {
        const [de, ne] = mi(
          S,
          Xr(yi(f))
        );
        n = gi($.body, Ei, de, ne);
      }
    }
    b.isString(y) || (y = y ? "include" : "omit");
    const I = "credentials" in Request.prototype;
    w = new Request(e, {
      ...O,
      signal: C,
      method: t.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: I ? y : void 0
    });
    let D = await fetch(w);
    const Y = as && (h === "stream" || h === "response");
    if (as && (u || Y && A)) {
      const $ = {};
      ["status", "statusText", "headers"].forEach((_e) => {
        $[_e] = D[_e];
      });
      const X = b.toFiniteNumber(D.headers.get("content-length")), [de, ne] = u && mi(
        X,
        Xr(yi(u), !0)
      ) || [];
      D = new Response(
        gi(D.body, Ei, de, () => {
          ne && ne(), A && A();
        }),
        $
      );
    }
    h = h || "text";
    let re = await en[b.findKey(en, h) || "text"](D, r);
    return !Y && A && A(), await new Promise(($, X) => {
      ta($, X, {
        data: re,
        headers: $e.from(D.headers),
        status: D.status,
        statusText: D.statusText,
        config: r,
        request: w
      });
    });
  } catch (I) {
    throw A && A(), I && I.name === "TypeError" && /fetch/i.test(I.message) ? Object.assign(
      new U("Network Error", U.ERR_NETWORK, r, w),
      {
        cause: I.cause || I
      }
    ) : U.from(I, I && I.code, r, w);
  }
}), os = {
  http: du,
  xhr: qu,
  fetch: Ju
};
b.forEach(os, (r, e) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: e });
    } catch {
    }
    Object.defineProperty(r, "adapterName", { value: e });
  }
});
const vi = (r) => `- ${r}`, Zu = (r) => b.isFunction(r) || r === null || r === !1, aa = {
  getAdapter: (r) => {
    r = b.isArray(r) ? r : [r];
    const { length: e } = r;
    let t, n;
    const s = {};
    for (let a = 0; a < e; a++) {
      t = r[a];
      let o;
      if (n = t, !Zu(t) && (n = os[(o = String(t)).toLowerCase()], n === void 0))
        throw new U(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(s).map(
        ([u, f]) => `adapter ${u} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? a.length > 1 ? `since :
` + a.map(vi).join(`
`) : " " + vi(a[0]) : "as no adapter specified";
      throw new U(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: os
};
function qn(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new rr(null, r);
}
function _i(r) {
  return qn(r), r.headers = $e.from(r.headers), r.data = Mn.call(
    r,
    r.transformRequest
  ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), aa.getAdapter(r.adapter || vr.adapter)(r).then(function(n) {
    return qn(r), n.data = Mn.call(
      r,
      r.transformResponse,
      n
    ), n.headers = $e.from(n.headers), n;
  }, function(n) {
    return ea(n) || (qn(r), n && n.response && (n.response.data = Mn.call(
      r,
      r.transformResponse,
      n.response
    ), n.response.headers = $e.from(n.response.headers))), Promise.reject(n);
  });
}
const oa = "1.7.7", vs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, e) => {
  vs[r] = function(n) {
    return typeof n === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
const Ri = {};
vs.transitional = function(e, t, n) {
  function s(a, o) {
    return "[Axios v" + oa + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, u) => {
    if (e === !1)
      throw new U(
        s(o, " has been removed" + (t ? " in " + t : "")),
        U.ERR_DEPRECATED
      );
    return t && !Ri[o] && (Ri[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(a, o, u) : !0;
  };
};
function Xu(r, e, t) {
  if (typeof r != "object")
    throw new U("options must be an object", U.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(r);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], o = e[a];
    if (o) {
      const u = r[a], f = u === void 0 || o(u, a, r);
      if (f !== !0)
        throw new U("option " + a + " must be " + f, U.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new U("Unknown option " + a, U.ERR_BAD_OPTION);
  }
}
const us = {
  assertOptions: Xu,
  validators: vs
}, dt = us.validators;
class Ft {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new hi(),
      response: new hi()
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = It(this.defaults, t);
    const { transitional: n, paramsSerializer: s, headers: a } = t;
    n !== void 0 && us.assertOptions(n, {
      silentJSONParsing: dt.transitional(dt.boolean),
      forcedJSONParsing: dt.transitional(dt.boolean),
      clarifyTimeoutError: dt.transitional(dt.boolean)
    }, !1), s != null && (b.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : us.assertOptions(s, {
      encode: dt.function,
      serialize: dt.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = a && b.merge(
      a.common,
      a[t.method]
    );
    a && b.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete a[w];
      }
    ), t.headers = $e.concat(o, a);
    const u = [];
    let f = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(t) === !1 || (f = f && A.synchronous, u.unshift(A.fulfilled, A.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(A) {
      h.push(A.fulfilled, A.rejected);
    });
    let d, y = 0, O;
    if (!f) {
      const w = [_i.bind(this), void 0];
      for (w.unshift.apply(w, u), w.push.apply(w, h), O = w.length, d = Promise.resolve(t); y < O; )
        d = d.then(w[y++], w[y++]);
      return d;
    }
    O = u.length;
    let C = t;
    for (y = 0; y < O; ) {
      const w = u[y++], A = u[y++];
      try {
        C = w(C);
      } catch (S) {
        A.call(this, S);
        break;
      }
    }
    try {
      d = _i.call(this, C);
    } catch (w) {
      return Promise.reject(w);
    }
    for (y = 0, O = h.length; y < O; )
      d = d.then(h[y++], h[y++]);
    return d;
  }
  getUri(e) {
    e = It(this.defaults, e);
    const t = ra(e.baseURL, e.url);
    return Ji(t, e.params, e.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(e) {
  Ft.prototype[e] = function(t, n) {
    return this.request(It(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(a, o, u) {
      return this.request(It(u || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  Ft.prototype[e] = t(), Ft.prototype[e + "Form"] = t(!0);
});
class _s {
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
      n.reason || (n.reason = new rr(a, o, u), t(n.reason));
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
      token: new _s(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function el(r) {
  return function(t) {
    return r.apply(null, t);
  };
}
function tl(r) {
  return b.isObject(r) && r.isAxiosError === !0;
}
const ls = {
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
Object.entries(ls).forEach(([r, e]) => {
  ls[e] = r;
});
function ua(r) {
  const e = new Ft(r), t = ji(Ft.prototype.request, e);
  return b.extend(t, Ft.prototype, e, { allOwnKeys: !0 }), b.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return ua(It(r, s));
  }, t;
}
const me = ua(vr);
me.Axios = Ft;
me.CanceledError = rr;
me.CancelToken = _s;
me.isCancel = ea;
me.VERSION = oa;
me.toFormData = ln;
me.AxiosError = U;
me.Cancel = me.CanceledError;
me.all = function(e) {
  return Promise.all(e);
};
me.spread = el;
me.isAxiosError = tl;
me.mergeConfig = It;
me.AxiosHeaders = $e;
me.formToJSON = (r) => Xi(b.isHTMLForm(r) ? new FormData(r) : r);
me.getAdapter = aa.getAdapter;
me.HttpStatusCode = ls;
me.default = me;
const Rs = {
  BASE_URL: "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com"
  // BASE_URL: "https://4ab7-182-156-141-17.ngrok-free.app",
}, Ge = me.create({
  baseURL: Rs.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), rl = () => localStorage.getItem("access_token"), nl = () => localStorage.getItem("refresh_token");
Ge.interceptors.request.use(
  (r) => {
    const e = rl();
    return e && (r.headers.Authorization = `Bearer ${e}`), r;
  },
  (r) => Promise.reject(r)
);
Ge.interceptors.response.use(
  (r) => r,
  async (r) => {
    const e = r.config;
    if (r.response && r.response.status === 401 && !e._retry) {
      e._retry = !0;
      const t = nl();
      if (t)
        try {
          const n = await me.post(`${Rs.BASE_URL}/auth/refresh-token`, {
            refreshToken: t
          });
          return localStorage.setItem("access_token", n.data.access_token), e.headers.Authorization = `Bearer ${n.data.access_token}`, Ge(e);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(r);
  }
);
function ht(r) {
  var e;
  if (me.isAxiosError(r)) {
    const t = ((e = r.response) == null ? void 0 : e.data) || {
      message: "An error occurred. Try after some time."
    };
    throw new Error(t.message);
  } else
    throw new Error("Unknown error occurred");
}
class fn {
  // Create a new Data
  async createData(e, t) {
    try {
      const n = await Ge.post(e, t);
      return console.log(n.data), n.data;
    } catch (n) {
      ht(n);
    }
  }
  // Get all Data
  async getData(e) {
    try {
      return (await Ge.get(e)).data.data;
    } catch (t) {
      ht(t);
    }
  }
  // Get an Data by ID
  async getDataById(e, t) {
    try {
      const n = await Ge.get(`${e}/${t}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      ht(n);
    }
  }
  // Get Data by Query
  async getDataByQuery(e, t) {
    try {
      const n = await Ge.get(`${e}?search=${t}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      ht(n);
    }
  }
  // Update a data by ID
  async updateData(e, t, n) {
    try {
      const s = await Ge.patch(`${e}/${t}`, n);
      return console.log(s.data), s.data;
    } catch (s) {
      ht(s);
    }
  }
  // Delete an Data by ID
  async deleteData(e, t) {
    try {
      const n = await Ge.delete(`${e}${t}`);
      return console.log(n.data), n.data;
    } catch (n) {
      ht(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(e, t) {
    try {
      const n = await Ge.patch(`${e}${t}`);
      return console.log(n.data), n.data;
    } catch (n) {
      ht(n);
    }
  }
}
const st = (r) => {
  const e = new fn();
  return Ui({ mutationFn: (t) => e.createData(r, t) });
}, Ve = (r, e) => {
  const t = new fn();
  return ys({ queryKey: e, queryFn: () => t.getData(r) });
}, it = (r, e, t) => {
  const n = new fn();
  return ys({ queryKey: t, queryFn: () => n.getDataById(r, e), enabled: !!e });
}, at = (r, e) => {
  const t = new fn();
  return Ui({ mutationFn: (n) => t.updateData(r, e, n) });
}, la = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com", sl = () => me.create({
  baseURL: la,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class fe {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = fe.createService();
  }
  static createService() {
    return fe._axiosInstance || (fe._axiosInstance = sl(), fe.setAuthHeaderInterceptor(), fe._axiosInstance.interceptors.response.use(fe.handleSuccess, fe.handleError)), fe._axiosInstance;
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
      return (await me.post(`${la}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    fe._axiosInstance.interceptors.request.use(
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
    fe._axiosInstance.interceptors.response.use(
      fe.handleSuccess,
      fe.handleError
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
        const a = await fe.refreshAccessToken();
        return fe.setAccessToken(a), t.headers.set("Authorization", `Bearer ${a}`), fe._axiosInstance(t);
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
const nc = (r) => st(r), sc = (r) => Ve(r, ["getAllRFPA"]), ic = (r, e) => it(r, e, ["getRFPA", e]), ac = (r, e) => at(r, e), oc = (r) => Ve(r, ["getAllRFPANumbers"]), uc = (r) => st(r), lc = (r) => Ve(r, ["getAllDealSlip"]), cc = (r, e) => it(r, e, ["getDealSlip"]), fc = (r, e) => at(r, e), dc = (r) => Ve(r, ["getAllDealSlipNumbers"]), hc = (r) => st(r), pc = (r) => Ve(r, ["getAllGRN"]), mc = (r) => Ve(r, ["getAllGRNNumbers"]), yc = (r, e) => it(r, e, ["getGRN"]), bc = (r, e) => at(r, e), gc = (r) => st(r), Ec = (r) => Ve(r, ["getAllGRN"]), vc = (r, e) => it(r, e, ["getGRN"]), _c = (r, e) => at(r, e), Rc = (r) => st(r), Tc = (r) => Ve(r, ["getAllGRN"]), Sc = (r, e) => it(r, e, ["getGRN", e]), wc = (r, e) => at(r, e), Cc = (r) => st(r), Oc = (r) => Ve(r, ["getAllGRN"]), Ac = (r, e) => it(r, e, ["getPMPVoucher"]), Pc = (r, e) => at(r, e), xc = (r) => st(r), Dc = (r) => Ve(r, ["getAllGRN"]), Nc = (r, e) => it(r, e, ["getGRN"]), Fc = (r, e) => at(r, e), Lc = (r) => st(r), kc = (r) => Ve(r, ["getAllDeliveryChallan"]), Ic = (r, e) => it(r, e, ["getDeliveryChallan"]), $c = (r, e) => at(r, e), Uc = (r) => Ve(r, ["getAllDeliveryChallanNumbers"]), jc = (r) => st(r), Vc = (r) => Ve(r, ["getAllPaymentRequest"]), Mc = (r, e) => it(r, e, ["getPaymentRequest"]), qc = (r, e) => at(r, e), il = async (r) => {
  try {
    const e = await Ge.get(`${Rs.BASE_URL}/source/${r}`);
    return console.log(e.data), e.data;
  } catch (e) {
    ht(e);
  }
}, Gc = (r) => ys({ queryKey: ["get-vendors-farmers-data-by-source"], queryFn: () => il(r), enabled: !!r });
function al(r, e) {
  if (r) {
    const t = Object.entries(r).filter(([n, s]) => s != null && s !== "").map(
      ([n, s]) => `${encodeURIComponent(n)}=${encodeURIComponent(s)}`
    ).join("&");
    return t ? `${e}?${t}` : e;
  } else
    return "";
}
function $t(r) {
  this._maxSize = r, this.clear();
}
$t.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
$t.prototype.get = function(r) {
  return this._values[r];
};
$t.prototype.set = function(r, e) {
  return this._size >= this._maxSize && this.clear(), r in this._values || this._size++, this._values[r] = e;
};
var ol = /[^.^\]^[]+|(?=\[\]|\.\.)/g, ca = /^\d+$/, ul = /^\d/, ll = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, cl = /^\s*(['"]?)(.*?)(\1)\s*$/, Ts = 512, Ti = new $t(Ts), Si = new $t(Ts), wi = new $t(Ts), Lt = {
  Cache: $t,
  split: cs,
  normalizePath: Gn,
  setter: function(r) {
    var e = Gn(r);
    return Si.get(r) || Si.set(r, function(n, s) {
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
    var t = Gn(r);
    return wi.get(r) || wi.set(r, function(s) {
      for (var a = 0, o = t.length; a < o; )
        if (s != null || !e) s = s[t[a++]];
        else return;
      return s;
    });
  },
  join: function(r) {
    return r.reduce(function(e, t) {
      return e + (Ss(t) || ca.test(t) ? "[" + t + "]" : (e ? "." : "") + t);
    }, "");
  },
  forEach: function(r, e, t) {
    fl(Array.isArray(r) ? r : cs(r), e, t);
  }
};
function Gn(r) {
  return Ti.get(r) || Ti.set(
    r,
    cs(r).map(function(e) {
      return e.replace(cl, "$2");
    })
  );
}
function cs(r) {
  return r.match(ol) || [""];
}
function fl(r, e, t) {
  var n = r.length, s, a, o, u;
  for (a = 0; a < n; a++)
    s = r[a], s && (pl(s) && (s = '"' + s + '"'), u = Ss(s), o = !u && /^\d+$/.test(s), e.call(t, s, u, o, a, r));
}
function Ss(r) {
  return typeof r == "string" && r && ["'", '"'].indexOf(r.charAt(0)) !== -1;
}
function dl(r) {
  return r.match(ul) && !r.match(ca);
}
function hl(r) {
  return ll.test(r);
}
function pl(r) {
  return !Ss(r) && (dl(r) || hl(r));
}
const ml = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, dn = (r) => r.match(ml) || [], hn = (r) => r[0].toUpperCase() + r.slice(1), ws = (r, e) => dn(r).join(e).toLowerCase(), fa = (r) => dn(r).reduce(
  (e, t) => `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`,
  ""
), yl = (r) => hn(fa(r)), bl = (r) => ws(r, "_"), gl = (r) => ws(r, "-"), El = (r) => hn(ws(r, " ")), vl = (r) => dn(r).map(hn).join(" ");
var Bn = {
  words: dn,
  upperFirst: hn,
  camelCase: fa,
  pascalCase: yl,
  snakeCase: bl,
  kebabCase: gl,
  sentenceCase: El,
  titleCase: vl
}, Cs = { exports: {} };
Cs.exports = function(r) {
  return da(_l(r), r);
};
Cs.exports.array = da;
function da(r, e) {
  var t = r.length, n = new Array(t), s = {}, a = t, o = Rl(e), u = Tl(r);
  for (e.forEach(function(h) {
    if (!u.has(h[0]) || !u.has(h[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); a--; )
    s[a] || f(r[a], a, /* @__PURE__ */ new Set());
  return n;
  function f(h, d, y) {
    if (y.has(h)) {
      var O;
      try {
        O = ", node was:" + JSON.stringify(h);
      } catch {
        O = "";
      }
      throw new Error("Cyclic dependency" + O);
    }
    if (!u.has(h))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(h));
    if (!s[d]) {
      s[d] = !0;
      var C = o.get(h) || /* @__PURE__ */ new Set();
      if (C = Array.from(C), d = C.length) {
        y.add(h);
        do {
          var w = C[--d];
          f(w, u.get(w), y);
        } while (d);
        y.delete(h);
      }
      n[--t] = h;
    }
  }
}
function _l(r) {
  for (var e = /* @__PURE__ */ new Set(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.add(s[0]), e.add(s[1]);
  }
  return Array.from(e);
}
function Rl(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.has(s[0]) || e.set(s[0], /* @__PURE__ */ new Set()), e.has(s[1]) || e.set(s[1], /* @__PURE__ */ new Set()), e.get(s[0]).add(s[1]);
  }
  return e;
}
function Tl(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++)
    e.set(r[t], t);
  return e;
}
var Sl = Cs.exports;
const wl = /* @__PURE__ */ uo(Sl), Cl = Object.prototype.toString, Ol = Error.prototype.toString, Al = RegExp.prototype.toString, Pl = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", xl = /^Symbol\((.*)\)(.*)$/;
function Dl(r) {
  return r != +r ? "NaN" : r === 0 && 1 / r < 0 ? "-0" : "" + r;
}
function Ci(r, e = !1) {
  if (r == null || r === !0 || r === !1) return "" + r;
  const t = typeof r;
  if (t === "number") return Dl(r);
  if (t === "string") return e ? `"${r}"` : r;
  if (t === "function") return "[Function " + (r.name || "anonymous") + "]";
  if (t === "symbol") return Pl.call(r).replace(xl, "Symbol($1)");
  const n = Cl.call(r).slice(8, -1);
  return n === "Date" ? isNaN(r.getTime()) ? "" + r : r.toISOString(r) : n === "Error" || r instanceof Error ? "[" + Ol.call(r) + "]" : n === "RegExp" ? Al.call(r) : null;
}
function rt(r, e) {
  let t = Ci(r, e);
  return t !== null ? t : JSON.stringify(r, function(n, s) {
    let a = Ci(this[n], e);
    return a !== null ? a : s;
  }, 2);
}
function ha(r) {
  return r == null ? [] : [].concat(r);
}
let pa, ma, ya, Nl = /\$\{\s*(\w+)\s*\}/g;
pa = Symbol.toStringTag;
class Oi {
  constructor(e, t, n, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[pa] = "Error", this.name = "ValidationError", this.value = t, this.path = n, this.type = s, this.errors = [], this.inner = [], ha(e).forEach((a) => {
      if (ke.isError(a)) {
        this.errors.push(...a.errors);
        const o = a.inner.length ? a.inner : [a];
        this.inner.push(...o);
      } else
        this.errors.push(a);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
ma = Symbol.hasInstance;
ya = Symbol.toStringTag;
class ke extends Error {
  static formatError(e, t) {
    const n = t.label || t.path || "this";
    return n !== t.path && (t = Object.assign({}, t, {
      path: n
    })), typeof e == "string" ? e.replace(Nl, (s, a) => rt(t[a])) : typeof e == "function" ? e(t) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, n, s, a) {
    const o = new Oi(e, t, n, s);
    if (a)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[ya] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, ke);
  }
  static [ma](e) {
    return Oi[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let We = {
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
    const s = n != null && n !== t ? ` (cast from the value \`${rt(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${r} must be a \`${e}\` type, but the final value was: \`${rt(t, !0)}\`` + s : `${r} must match the configured type. The validated value was: \`${rt(t, !0)}\`` + s;
  }
}, Ne = {
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
}, pt = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, fs = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, ds = {
  isValue: "${path} field must be ${value}"
}, hs = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Yr = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Fl = {
  notType: (r) => {
    const {
      path: e,
      value: t,
      spec: n
    } = r, s = n.types.length;
    if (Array.isArray(t)) {
      if (t.length < s) return `${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${rt(t, !0)}\``;
      if (t.length > s) return `${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${rt(t, !0)}\``;
    }
    return ke.formatError(We.notType, r);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: We,
  string: Ne,
  number: pt,
  date: fs,
  object: hs,
  array: Yr,
  boolean: ds,
  tuple: Fl
});
const pn = (r) => r && r.__isYupSchema__;
class tn {
  static fromOptions(e, t) {
    if (!t.then && !t.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: s,
      otherwise: a
    } = t, o = typeof n == "function" ? n : (...u) => u.every((f) => f === n);
    return new tn(e, (u, f) => {
      var h;
      let d = o(...u) ? s : a;
      return (h = d == null ? void 0 : d(f)) != null ? h : f;
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
    if (!pn(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(t);
  }
}
const qr = {
  context: "$",
  value: "."
};
class Ut {
  constructor(e, t = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === qr.context, this.isValue = this.key[0] === qr.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? qr.context : this.isValue ? qr.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Lt.getter(this.path, !0), this.map = t.map;
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
Ut.prototype.__isYupRef = !0;
const Be = (r) => r == null;
function zt(r) {
  function e({
    value: t,
    path: n = "",
    options: s,
    originalValue: a,
    schema: o
  }, u, f) {
    const {
      name: h,
      test: d,
      params: y,
      message: O,
      skipAbsent: C
    } = r;
    let {
      parent: w,
      context: A,
      abortEarly: S = o.spec.abortEarly,
      disableStackTrace: I = o.spec.disableStackTrace
    } = s;
    function D(le) {
      return Ut.isRef(le) ? le.getValue(t, w, A) : le;
    }
    function Y(le = {}) {
      const Pe = Object.assign({
        value: t,
        originalValue: a,
        label: o.spec.label,
        path: le.path || n,
        spec: o.spec,
        disableStackTrace: le.disableStackTrace || I
      }, y, le.params);
      for (const Se of Object.keys(Pe)) Pe[Se] = D(Pe[Se]);
      const Re = new ke(ke.formatError(le.message || O, Pe), t, Pe.path, le.type || h, Pe.disableStackTrace);
      return Re.params = Pe, Re;
    }
    const re = S ? u : f;
    let $ = {
      path: n,
      parent: w,
      type: h,
      from: s.from,
      createError: Y,
      resolve: D,
      options: s,
      originalValue: a,
      schema: o
    };
    const X = (le) => {
      ke.isError(le) ? re(le) : le ? f(null) : re(Y());
    }, de = (le) => {
      ke.isError(le) ? re(le) : u(le);
    };
    if (C && Be(t))
      return X(!0);
    let _e;
    try {
      var Me;
      if (_e = d.call($, t, $), typeof ((Me = _e) == null ? void 0 : Me.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${$.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(_e).then(X, de);
      }
    } catch (le) {
      de(le);
      return;
    }
    X(_e);
  }
  return e.OPTIONS = r, e;
}
function Ll(r, e, t, n = t) {
  let s, a, o;
  return e ? (Lt.forEach(e, (u, f, h) => {
    let d = f ? u.slice(1, u.length - 1) : u;
    r = r.resolve({
      context: n,
      parent: s,
      value: t
    });
    let y = r.type === "tuple", O = h ? parseInt(d, 10) : 0;
    if (r.innerType || y) {
      if (y && !h) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (t && O >= t.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);
      s = t, t = t && t[O], r = y ? r.spec.types[O] : r.innerType;
    }
    if (!h) {
      if (!r.fields || !r.fields[d]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${r.type}")`);
      s = t, t = t && t[d], r = r.fields[d];
    }
    a = d, o = f ? "[" + u + "]" : "." + u;
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
class rn extends Set {
  describe() {
    const e = [];
    for (const t of this.values())
      e.push(Ut.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const n of this.values())
      t.push(e(n));
    return t;
  }
  clone() {
    return new rn(this.values());
  }
  merge(e, t) {
    const n = this.clone();
    return e.forEach((s) => n.add(s)), t.forEach((s) => n.delete(s)), n;
  }
}
function Yt(r, e = /* @__PURE__ */ new Map()) {
  if (pn(r) || !r || typeof r != "object") return r;
  if (e.has(r)) return e.get(r);
  let t;
  if (r instanceof Date)
    t = new Date(r.getTime()), e.set(r, t);
  else if (r instanceof RegExp)
    t = new RegExp(r), e.set(r, t);
  else if (Array.isArray(r)) {
    t = new Array(r.length), e.set(r, t);
    for (let n = 0; n < r.length; n++) t[n] = Yt(r[n], e);
  } else if (r instanceof Map) {
    t = /* @__PURE__ */ new Map(), e.set(r, t);
    for (const [n, s] of r.entries()) t.set(n, Yt(s, e));
  } else if (r instanceof Set) {
    t = /* @__PURE__ */ new Set(), e.set(r, t);
    for (const n of r) t.add(Yt(n, e));
  } else if (r instanceof Object) {
    t = {}, e.set(r, t);
    for (const [n, s] of Object.entries(r)) t[n] = Yt(s, e);
  } else
    throw Error(`Unable to clone ${r}`);
  return t;
}
class Ue {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new rn(), this._blacklist = new rn(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(We.notType);
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
    return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = Yt(Object.assign({}, this.spec, e)), t;
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
      if (s && Be(a))
        return a;
      let o = rt(e), u = rt(a);
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
    let h = [];
    for (let d of Object.values(this.internalTests))
      d && h.push(d);
    this.runTests({
      path: a,
      value: f,
      originalValue: o,
      options: t,
      tests: h
    }, n, (d) => {
      if (d.length)
        return s(d, f);
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
      options: h
    } = e, d = (A) => {
      s || (s = !0, t(A, o));
    }, y = (A) => {
      s || (s = !0, n(A, o));
    }, O = a.length, C = [];
    if (!O) return y([]);
    let w = {
      value: o,
      originalValue: u,
      path: f,
      options: h,
      schema: this
    };
    for (let A = 0; A < a.length; A++) {
      const S = a[A];
      S(w, d, function(D) {
        D && (Array.isArray(D) ? C.push(...D) : C.push(D)), --O <= 0 && y(C);
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
    let h = n[u];
    const d = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: h,
      originalValue: a[u],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [f ? "index" : "key"]: u,
      path: f || u.includes(".") ? `${s || ""}[${f ? u : `"${u}"`}]` : (s ? `${s}.` : "") + e
    });
    return (y, O, C) => this.resolve(d)._validate(h, d, O, C);
  }
  validate(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), a = (n = t == null ? void 0 : t.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return new Promise((o, u) => s._validate(e, t, (f, h) => {
      ke.isError(f) && (f.value = h), u(f);
    }, (f, h) => {
      f.length ? u(new ke(f, h, void 0, void 0, a)) : o(h);
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
      throw ke.isError(u) && (u.value = f), u;
    }, (u, f) => {
      if (u.length) throw new ke(u, e, void 0, void 0, o);
      a = f;
    }), a;
  }
  isValid(e, t) {
    return this.validate(e, t).then(() => !0, (n) => {
      if (ke.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (n) {
      if (ke.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : Yt(t);
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
    return n.internalTests.nullable = zt({
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
    return n.internalTests.optionality = zt({
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
  defined(e = We.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = We.notNull) {
    return this.nullability(!1, e);
  }
  required(e = We.required) {
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
    }, t.message === void 0 && (t.message = We.default), typeof t.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), s = zt(t), a = t.exclusive || t.name && n.exclusiveTests[t.name] === !0;
    if (t.exclusive && !t.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return t.name && (n.exclusiveTests[t.name] = !!t.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === t.name && (a || o.OPTIONS.test === s.OPTIONS.test))), n.tests.push(s), n;
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
    let n = this.clone(), s = ha(e).map((a) => new Ut(a));
    return s.forEach((a) => {
      a.isSibling && n.deps.push(a.key);
    }), n.conditions.push(typeof t == "function" ? new tn(s, t) : tn.fromOptions(s, t)), n;
  }
  typeError(e) {
    let t = this.clone();
    return t.internalTests.typeError = zt({
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
  oneOf(e, t = We.oneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._whitelist.add(s), n._blacklist.delete(s);
    }), n.internalTests.whiteList = zt({
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
  notOneOf(e, t = We.notOneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._blacklist.add(s), n._whitelist.delete(s);
    }), n.internalTests.blacklist = zt({
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
      })).filter((f, h, d) => d.findIndex((y) => y.name === f.name) === h)
    };
  }
}
Ue.prototype.__isYupSchema__ = !0;
for (const r of ["validate", "validateSync"]) Ue.prototype[`${r}At`] = function(e, t, n = {}) {
  const {
    parent: s,
    parentPath: a,
    schema: o
  } = Ll(this, e, t, n.context);
  return o[r](s && s[a], Object.assign({}, n, {
    parent: s,
    path: e
  }));
};
for (const r of ["equals", "is"]) Ue.prototype[r] = Ue.prototype.oneOf;
for (const r of ["not", "nope"]) Ue.prototype[r] = Ue.prototype.notOneOf;
const kl = () => !0;
function Wr(r) {
  return new ba(r);
}
class ba extends Ue {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: kl
    }, e));
  }
}
Wr.prototype = ba.prototype;
function Kr() {
  return new ga();
}
class ga extends Ue {
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
  isTrue(e = ds.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(t) {
        return Be(t) || t === !0;
      }
    });
  }
  isFalse(e = ds.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(t) {
        return Be(t) || t === !1;
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
Kr.prototype = ga.prototype;
const Il = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function $l(r) {
  const e = ps(r);
  if (!e) return Date.parse ? Date.parse(r) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let t = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (t = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (t = 0 - t)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + t, e.second, e.millisecond);
}
function ps(r) {
  var e, t;
  const n = Il.exec(r);
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
let Ul = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), jl = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Vl = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Ml = "^\\d{4}-\\d{2}-\\d{2}", ql = "\\d{2}:\\d{2}:\\d{2}", Gl = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Bl = new RegExp(`${Ml}T${ql}(\\.\\d+)?${Gl}$`), Hl = (r) => Be(r) || r === r.trim(), zl = {}.toString();
function x() {
  return new Ea();
}
class Ea extends Ue {
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
        return s === zl ? e : s;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((t) => t.test({
      message: e || We.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((t) => t.OPTIONS.name !== "required"), e));
  }
  length(e, t = Ne.length) {
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
  min(e, t = Ne.min) {
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
  max(e, t = Ne.max) {
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
      message: s || Ne.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(e) !== -1
    });
  }
  email(e = Ne.email) {
    return this.matches(Ul, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = Ne.url) {
    return this.matches(jl, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = Ne.uuid) {
    return this.matches(Vl, {
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
    } = e : t = e), this.matches(Bl, {
      name: "datetime",
      message: t || Ne.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: t || Ne.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (a) => {
        if (!a || n) return !0;
        const o = ps(a);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: t || Ne.datetime_precision,
      params: {
        precision: s
      },
      skipAbsent: !0,
      test: (a) => {
        if (!a || s == null) return !0;
        const o = ps(a);
        return o ? o.precision === s : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = Ne.trim) {
    return this.transform((t) => t != null ? t.trim() : t).test({
      message: e,
      name: "trim",
      test: Hl
    });
  }
  lowercase(e = Ne.lowercase) {
    return this.transform((t) => Be(t) ? t : t.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => Be(t) || t === t.toLowerCase()
    });
  }
  uppercase(e = Ne.uppercase) {
    return this.transform((t) => Be(t) ? t : t.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => Be(t) || t === t.toUpperCase()
    });
  }
}
x.prototype = Ea.prototype;
let Yl = (r) => r != +r;
function hr() {
  return new va();
}
class va extends Ue {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !Yl(e);
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
  min(e, t = pt.min) {
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
  max(e, t = pt.max) {
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
  lessThan(e, t = pt.lessThan) {
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
  moreThan(e, t = pt.moreThan) {
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
  positive(e = pt.positive) {
    return this.moreThan(0, e);
  }
  negative(e = pt.negative) {
    return this.lessThan(0, e);
  }
  integer(e = pt.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (t) => Number.isInteger(t)
    });
  }
  truncate() {
    return this.transform((e) => Be(e) ? e : e | 0);
  }
  round(e) {
    var t;
    let n = ["ceil", "floor", "round", "trunc"];
    if (e = ((t = e) == null ? void 0 : t.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (n.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((s) => Be(s) ? s : Math[e](s));
  }
}
hr.prototype = va.prototype;
let _a = /* @__PURE__ */ new Date(""), Wl = (r) => Object.prototype.toString.call(r) === "[object Date]";
function pr() {
  return new _r();
}
class _r extends Ue {
  constructor() {
    super({
      type: "date",
      check(e) {
        return Wl(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, t, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = $l(e), isNaN(e) ? _r.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, t) {
    let n;
    if (Ut.isRef(e))
      n = e;
    else {
      let s = this.cast(e);
      if (!this._typeCheck(s)) throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = s;
    }
    return n;
  }
  min(e, t = fs.min) {
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
  max(e, t = fs.max) {
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
_r.INVALID_DATE = _a;
pr.prototype = _r.prototype;
pr.INVALID_DATE = _a;
function Kl(r, e = []) {
  let t = [], n = /* @__PURE__ */ new Set(), s = new Set(e.map(([o, u]) => `${o}-${u}`));
  function a(o, u) {
    let f = Lt.split(o)[0];
    n.add(f), s.has(`${u}-${f}`) || t.push([u, f]);
  }
  for (const o of Object.keys(r)) {
    let u = r[o];
    n.add(o), Ut.isRef(u) && u.isSibling ? a(u.path, o) : pn(u) && "deps" in u && u.deps.forEach((f) => a(f, o));
  }
  return wl.array(Array.from(n), t).reverse();
}
function Ai(r, e) {
  let t = 1 / 0;
  return r.some((n, s) => {
    var a;
    if ((a = e.path) != null && a.includes(n))
      return t = s, !0;
  }), t;
}
function Ra(r) {
  return (e, t) => Ai(r, e) - Ai(r, t);
}
const Ta = (r, e, t) => {
  if (typeof r != "string")
    return r;
  let n = r;
  try {
    n = JSON.parse(r);
  } catch {
  }
  return t.isType(n) ? n : r;
};
function Qr(r) {
  if ("fields" in r) {
    const e = {};
    for (const [t, n] of Object.entries(r.fields))
      e[t] = Qr(n);
    return r.setFields(e);
  }
  if (r.type === "array") {
    const e = r.optional();
    return e.innerType && (e.innerType = Qr(e.innerType)), e;
  }
  return r.type === "tuple" ? r.optional().clone({
    types: r.spec.types.map(Qr)
  }) : "optional" in r ? r.optional() : r;
}
const Ql = (r, e) => {
  const t = [...Lt.normalizePath(e)];
  if (t.length === 1) return t[0] in r;
  let n = t.pop(), s = Lt.getter(Lt.join(t), !0)(r);
  return !!(s && n in s);
};
let Pi = (r) => Object.prototype.toString.call(r) === "[object Object]";
function Jl(r, e) {
  let t = Object.keys(r.fields);
  return Object.keys(e).filter((n) => t.indexOf(n) === -1);
}
const Zl = Ra([]);
function kt(r) {
  return new Sa(r);
}
class Sa extends Ue {
  constructor(e) {
    super({
      type: "object",
      check(t) {
        return Pi(t) || typeof t == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Zl, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, t = {}) {
    var n;
    let s = super._cast(e, t);
    if (s === void 0) return this.getDefault(t);
    if (!this._typeCheck(s)) return s;
    let a = this.fields, o = (n = t.stripUnknown) != null ? n : this.spec.noUnknown, u = [].concat(this._nodes, Object.keys(s).filter((y) => !this._nodes.includes(y))), f = {}, h = Object.assign({}, t, {
      parent: f,
      __validating: t.__validating || !1
    }), d = !1;
    for (const y of u) {
      let O = a[y], C = y in s;
      if (O) {
        let w, A = s[y];
        h.path = (t.path ? `${t.path}.` : "") + y, O = O.resolve({
          value: A,
          context: t.context,
          parent: f
        });
        let S = O instanceof Ue ? O.spec : void 0, I = S == null ? void 0 : S.strict;
        if (S != null && S.strip) {
          d = d || y in s;
          continue;
        }
        w = !t.__validating || !I ? (
          // TODO: use _cast, this is double resolving
          O.cast(s[y], h)
        ) : s[y], w !== void 0 && (f[y] = w);
      } else C && !o && (f[y] = s[y]);
      (C !== y in f || f[y] !== s[y]) && (d = !0);
    }
    return d ? f : s;
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
    }, ...a], t.__validating = !0, t.originalValue = o, super._validate(e, t, n, (f, h) => {
      if (!u || !Pi(h)) {
        s(f, h);
        return;
      }
      o = o || h;
      let d = [];
      for (let y of this._nodes) {
        let O = this.fields[y];
        !O || Ut.isRef(O) || d.push(O.asNestedTest({
          options: t,
          key: y,
          parent: h,
          parentPath: t.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: d,
        value: h,
        originalValue: o,
        options: t
      }, n, (y) => {
        s(y.sort(this._sortErrors).concat(f), h);
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
    return n.fields = e, n._nodes = Kl(e, t), n._sortErrors = Ra(Object.keys(e)), t && (n._excludedEdges = t), n;
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
    return Qr(this);
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
    let s = Lt.getter(e, !0);
    return this.transform((a) => {
      if (!a) return a;
      let o = a;
      return Ql(a, e) && (o = Object.assign({}, a), n || delete o[e], o[t] = s(a)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Ta);
  }
  noUnknown(e = !0, t = hs.noUnknown) {
    typeof e != "boolean" && (t = e, e = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: t,
      test(s) {
        if (s == null) return !0;
        const a = Jl(this.schema, s);
        return !e || a.length === 0 || this.createError({
          params: {
            unknown: a.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = e, n;
  }
  unknown(e = !0, t = hs.noUnknown) {
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
    return this.transformKeys(Bn.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Bn.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => Bn.snakeCase(e).toUpperCase());
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
kt.prototype = Sa.prototype;
function wa(r) {
  return new Ca(r);
}
class Ca extends Ue {
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
    t.originalValue != null && t.originalValue, super._validate(e, t, n, (f, h) => {
      var d;
      if (!u || !o || !this._typeCheck(h)) {
        s(f, h);
        return;
      }
      let y = new Array(h.length);
      for (let C = 0; C < h.length; C++) {
        var O;
        y[C] = o.asNestedTest({
          options: t,
          index: C,
          parent: h,
          parentPath: t.path,
          originalParent: (O = t.originalValue) != null ? O : e
        });
      }
      this.runTests({
        value: h,
        tests: y,
        originalValue: (d = t.originalValue) != null ? d : e,
        options: t
      }, n, (C) => s(C.concat(f), h));
    });
  }
  clone(e) {
    const t = super.clone(e);
    return t.innerType = this.innerType, t;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Ta);
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
    if (!pn(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + rt(e));
    return t.innerType = e, t.spec = Object.assign({}, t.spec, {
      types: e
    }), t;
  }
  length(e, t = Yr.length) {
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
    return t = t || Yr.min, this.test({
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
    return t = t || Yr.max, this.test({
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
wa.prototype = Ca.prototype;
const J = {
  IS_STRING: /^[a-zA-Z ]+$/,
  IS_VEHICLE_NO: /^[a-zA-Z]{2}[- ]?[0-9]{1,2}[- ]?[a-zA-Z]{1,2}[- ]?[0-9]{4}$/,
  IS_NUMBER: /^\d+(\.\d+)?$/,
  CONTACT_NO: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/
}, mr = kt().shape({
  address1: x().required("Address Line 1 is required"),
  address2: x().nullable(),
  location: x().required("Location is required"),
  city: x().required("City is required").matches(J.IS_STRING, "City name should only contains alphabets."),
  state: x().required("State is required").matches(J.IS_STRING, "State name should only contains alphabets."),
  pincode: x().required("Pincode is required").matches(J.PINCODE, "Pincode must be exactly 6 digits")
});
x().test("is-future-or-today", "Date must be today or in the future", (r) => {
  if (!r)
    return !0;
  const e = new Date(r), t = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), e >= t;
});
kt().shape({
  companyName: x().required("Party Name is required"),
  category: x().required("Please select category of vendor"),
  subcategory: x().required("Please select subcategory of vendor"),
  officeAddress: mr,
  officeContactNo: x().required("Please enter contact number.").matches(J.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: x().nullable().email("Please enter valid email"),
  mainProduct: x().nullable().matches(J.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: x().nullable().matches(J.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: x().nullable().matches(J.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: x().nullable().matches(J.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: x().nullable(),
  creditTerms: x().nullable(),
  ifGstnCopy: Kr().required(),
  gstn: x().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN number required if GSTN is available."),
    otherwise: (r) => r.nullable()
  }),
  gstnCopy: Wr().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN copy required if GSTN is available."),
    otherwise: (r) => r.nullable()
  }),
  ifPanCardCopy: Kr().required(),
  panNo: x().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN number required if PAN is available."),
    otherwise: (r) => r.nullable()
  }),
  panCardCopy: Wr().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN card copy required if PAN is available."),
    otherwise: (r) => r.nullable()
  }),
  ifMsmeCopy: Kr().required(),
  msmeNo: x().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME number required if MSME is available."),
    otherwise: (r) => r.nullable()
  }),
  msmeCopy: Wr().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME copy required if MSME is available."),
    otherwise: (r) => r.nullable()
  }),
  vendorSaleInfo: kt().shape({
    contactFName: x().required("Contact person first name is required.").matches(J.IS_STRING, "Name should include only alphabets."),
    contactMName: x().nullable().matches(J.IS_STRING, "Name should include only alphabets."),
    contactLName: x().required("Contact person last name is required.").matches(J.IS_STRING, "Name should include only alphabets."),
    directContactNumber: x().required("Contact person phone number is required").matches(J.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: x().nullable().matches(J.CONTACT_NO, "Please enter a valid contact number."),
    email: x().nullable().email("Please enter valid email")
  }),
  vendorBankDetails: kt().shape({
    beneficiaryFName: x().required("Beneficiary person first name is required.").matches(J.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: x().nullable().matches(J.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: x().required("Beneficiary person last name is required.").matches(J.IS_STRING, "Name should include only alphabets."),
    bankName: x().required("Bank name is required.").matches(J.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: mr,
    typeOfAcc: x().required("Account type is required."),
    ifscCode: x().required("IFSC code of bank is required."),
    swiftNo: x().nullable(),
    invoiceCurrency: x().nullable(),
    cancelledChequeCopy: x().nullable()
  }),
  ref1FName: x().required("Reference person first name is required.").matches(J.IS_STRING, "Name should include only alphabets."),
  ref1MName: x().nullable().matches(J.IS_STRING, "Name should include only alphabets."),
  ref1LName: x().required("Reference person first name is required.").matches(J.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: x().required("Contact number is required").matches(J.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: x().nullable().matches(J.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: mr,
  ref1Email: x().nullable().email("Please enter valid email."),
  ref2FName: x().nullable().matches(J.IS_STRING, "Name should include only alphabets."),
  ref2MName: x().nullable().matches(J.IS_STRING, "Name should include only alphabets."),
  ref2LName: x().nullable().matches(J.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: x().nullable().matches(J.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: x().nullable().matches(J.CONTACT_NO, "Please enter valid contact number."),
  // ref2Address: initValAddress,
  ref2Email: x().nullable().email("Please enter valid email.")
});
const Xl = /^[6-9]\d{9}$/, ec = x().matches(Xl, "Please enter a valid 10-digit contact number");
kt().shape({
  farmerfName: x().required("First Name is required").matches(J.IS_STRING, "Name should only contains alphabets."),
  farmermName: x().nullable().matches(J.IS_STRING, "Name should only contains alphabets."),
  farmerlName: x().required("Last Name is required").matches(J.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: mr,
  primaryMobileNo: ec,
  secondaryMobileNo: x().nullable().matches(J.CONTACT_NO, "Please enter valid contact number."),
  email: x().email("Please enter valid emial"),
  dob: pr().required("Date of Birth is required"),
  farmAddress: mr,
  totalLandArea: hr().nullable().positive("Area cannot be negative."),
  cultivationArea: hr().nullable().positive("Area cannot be negative."),
  crops: wa(
    kt({
      crop: x().required("Crop name is required"),
      noOfPlants: hr().nullable().positive("Number of plants cannot be negative"),
      pruningDate: pr().required("Pruning date is required."),
      expectedHarvestDate: pr().required("Expected harvest date is required."),
      expectedQuantityInTonnes: hr().required("Expected quantity in metric tones are required.").positive("Quantity cannot be negative")
    }).required("At least one crop is required")
  )
});
class Bc extends fe {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getProcurementFilteredData(e, t) {
    const n = `/grns/calculation/tilldate?filterType=${e}&filterValue=${t}`;
    return this.get(n);
  }
  getProcurementAllData() {
    return this.get("/grns/calculation/tilldate");
  }
  getProcurementDataByDates(e, t, n) {
    if (["today", "financialYear", "tillDate"].includes(e)) {
      const s = `/grns/calculations/dates?filterType=${e}`;
      return this.get(s);
    } else if (e === "dateRange") {
      const s = `/grns/calculations/dates?filterType=dateRange&startDate=${t}&endDate=${n}`;
      return this.get(s);
    } else
      throw new Error(`Invalid filterType: ${e}`);
  }
  getSaleAllData() {
    return this.get("/deliveryChallan/calculations/dates?filterType=tilldate");
  }
  getSaleDataByDates(e, t, n) {
    if (["today", "financialYear", "tillDate"].includes(e)) {
      const s = `/deliveryChallan/calculations/dates?filterType=${e}`;
      return this.get(s);
    } else if (e === "dateRange") {
      const s = `/deliveryChallan/calculations/dates?filterType=dateRange&startDate=${t}&endDate=${n}`;
      return this.get(s);
    } else
      throw new Error(`Invalid filterType: ${e}`);
  }
  getDashboardData(e) {
    const t = al(e, "/api/management/getGrns/management");
    return console.log("dashboard data url: ", t), this.get(t);
  }
}
class Hc extends fe {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createRFPA(e) {
    const t = j.CREATE_RFPA;
    return this.post(t, e);
  }
  getAllRFPAs() {
    const e = j.GET_ALL_RFPA;
    return this.get(e);
  }
  getRFPAById(e) {
    const t = `${j.GET_RFPA_BY_ID}/${e}`;
    return this.get(t);
  }
  updateRFPA(e, t) {
    const n = `${j.UPDATE_RFPA}/${e}`;
    return this.patch(n, t);
  }
  deleteRFPAById(e) {
    const t = `${j.DELETE_RFPA}/${e}`;
    return this.delete(t);
  }
}
class zc extends fe {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDealSlip(e) {
    const t = j.CREATE_DEAL_SLIP;
    return this.post(t, e);
  }
  getAllDealSlips() {
    const e = j.GET_ALL_DEAL_SLIP;
    return this.get(e);
  }
  getDealSlipById(e) {
    const t = `${j.GET_DEAL_SLIP_BY_ID}/${e}`;
    return this.get(t);
  }
  updateDealSlip(e, t) {
    const n = `${j.UPDATE_DEAL_SLIP}/${e}`;
    return this.patch(n, t);
  }
  deleteDealSlipById(e) {
    const t = `${j.DELETE_DEAL_SLIP}/${e}`;
    return this.delete(t);
  }
}
class Yc extends fe {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createGRN(e) {
    const t = j.CREATE_GRN;
    return this.postFormData(t, e);
  }
  getAllGRNs() {
    const e = j.GET_ALL_GRN;
    return this.get(e);
  }
  getGRNById(e) {
    const t = `${j.GET_GRN_BY_ID}/${e}`;
    return this.get(t);
  }
  updateGRN(e, t) {
    const n = `${j.UPDATE_GRN}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteGRNById(e) {
    const t = `${j.DELETE_GRN}/${e}`;
    return this.delete(t);
  }
}
class Wc extends fe {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createMultiCashVoucher(e) {
    const t = j.CREATE_MC_VOUCHER;
    return this.postFormData(t, e);
  }
  getAllMultiCashVouchers() {
    const e = j.GET_ALL_MC_VOUCHER;
    return this.get(e);
  }
  getMultiCashVoucherById(e) {
    const t = `${j.GET_MC_VOUCHER_BY_ID}/${e}`;
    return this.get(t);
  }
  updateMultiCashVoucher(e, t) {
    const n = `${j.UPDATE_MC_VOUCHER}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteMultiCashVoucherById(e) {
    const t = `${j.DELETE_MC_VOUCHER}/${e}`;
    return this.delete(t);
  }
}
class Kc extends fe {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborPaymentVoucher(e) {
    const t = j.CREATE_LP_VOUCHER;
    return this.postFormData(t, e);
  }
  getAllLaborPaymentVouchers() {
    const e = j.GET_ALL_LP_VOUCHER;
    return this.get(e);
  }
  GetLaborPaymentVoucherById(e) {
    const t = `${j.GET_LP_VOUCHER_BY_ID}/${e}`;
    return this.get(t);
  }
  updateLaborPaymentVoucher(e, t) {
    const n = `${j.UPDATE_LP_VOUCHER}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteLaborPaymentVoucherById(e) {
    const t = `${j.DELETE_LP_VOUCHER}/${e}`;
    return this.delete(t);
  }
}
class Qc extends fe {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createTransportPaymentVoucher(e) {
    const t = j.CREATE_TP_VOUCHER;
    return this.postFormData(t, e);
  }
  getAllTransportPaymentVouchers() {
    const e = j.GET_ALL_TP_VOUCHER;
    return this.get(e);
  }
  GetTransportPaymentVoucherById(e) {
    const t = `${j.GET_TP_VOUCHER_BY_ID}/${e}`;
    return this.get(t);
  }
  updateTransportPaymentVoucher(e, t) {
    const n = `${j.UPDATE_TP_VOUCHER}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteTransportPaymentVoucherById(e) {
    const t = `${j.DELETE_TP_VOUCHER}/${e}`;
    return this.delete(t);
  }
}
class Jc extends fe {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createPackingMeterialPaymentVoucher(e) {
    const t = j.CREATE_PMP_VOUCHER;
    return this.postFormData(t, e);
  }
  getAllPackingMeterialPaymentVouchers() {
    const e = j.GET_ALL_PMP_VOUCHER;
    return this.get(e);
  }
  GetPackingMeterialPaymentVoucherById(e) {
    const t = `${j.GET_PMP_VOUCHER_BY_ID}/${e}`;
    return this.get(t);
  }
  updatePackingMeterialPaymentVoucher(e, t) {
    const n = `${j.UPDATE_PMP_VOUCHER}/${e}`;
    return this.patchFormData(n, t);
  }
  deletePackingMeterialPaymentVoucherById(e) {
    const t = `${j.DELETE_PMP_VOUCHER}/${e}`;
    return this.delete(t);
  }
}
class Zc extends fe {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDeliveryChallan(e) {
    const t = j.CREATE_DELIVERY_CHALLAN;
    return this.postFormData(t, e);
  }
  getAllDeliveryChallans() {
    const e = j.GET_ALL_DELIVERY_CHALLAN;
    return this.get(e);
  }
  getDeliveryChallanById(e) {
    const t = `${j.GET_DELIVERY_CHALLAN_BY_ID}/${e}`;
    return this.get(t);
  }
  updateDeliveryChallan(e, t) {
    const n = `${j.UPDATE_DELIVERY_CHALLAN}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteDeliveryChallanById(e) {
    const t = `${j.DELETE_DELIVERY_CHALLAN}/${e}`;
    return this.delete(t);
  }
}
export {
  zc as DealSlipServices,
  Zc as DeliveryChallanServices,
  Yc as GRNServices,
  Kc as LaborPaymentVoucherServices,
  Wc as MultiCashVoucherServices,
  rc as PURCHASE_API_URL,
  Jc as PackingMeterialPaymentVoucherServices,
  Bc as PurchaseDashboardServices,
  Hc as RFPAServices,
  Qc as TransportPaymentVoucherServices,
  j as purchaseApiUrl,
  uc as useCreateDealSlip,
  Lc as useCreateDeliveryChallan,
  hc as useCreateGRN,
  gc as useCreateLPVoucher,
  Rc as useCreateMCVoucher,
  Cc as useCreatePMPVoucher,
  jc as useCreatePaymentRequest,
  nc as useCreateRFPA,
  xc as useCreateTPVoucher,
  lc as useGetAllDealSlip,
  dc as useGetAllDealSlipNums,
  kc as useGetAllDeliveryChallan,
  Uc as useGetAllDeliveryChallanNums,
  pc as useGetAllGRN,
  mc as useGetAllGRNNums,
  Ec as useGetAllLPVoucher,
  Tc as useGetAllMCVoucher,
  Oc as useGetAllPMPVoucher,
  Vc as useGetAllPaymentRequest,
  sc as useGetAllRFPA,
  oc as useGetAllRFPANums,
  Dc as useGetAllTPVoucher,
  cc as useGetDealSlip,
  Ic as useGetDeliveryChallan,
  yc as useGetGRN,
  vc as useGetLPVoucher,
  Sc as useGetMCVoucher,
  Ac as useGetPMPVoucher,
  Mc as useGetPaymentRequest,
  ic as useGetRFPA,
  Nc as useGetTPVoucher,
  Gc as useGetVendorOrFarmerBySource,
  fc as useUpdateDealSlip,
  $c as useUpdateDeliveryChallan,
  bc as useUpdateGRN,
  _c as useUpdateLPVoucher,
  wc as useUpdateMCVoucher,
  Pc as useUpdatePMPVoucher,
  qc as useUpdatePaymentRequest,
  ac as useUpdateRFPA,
  Fc as useUpdateTPVoucher
};
