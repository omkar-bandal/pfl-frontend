var Xs = (r) => {
  throw TypeError(r);
};
var Un = (r, e, t) => e.has(r) || Xs("Cannot " + t);
var b = (r, e, t) => (Un(r, e, "read from private field"), t ? t.call(r) : e.get(r)), oe = (r, e, t) => e.has(r) ? Xs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), U = (r, e, t, n) => (Un(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), ce = (r, e, t) => (Un(r, e, "access private method"), t);
const lc = {
  //Inventory
  INVENTORY: "/inventory",
  //Dashboard
  DASHBOARD_INVENTORY: "/inventory/dashboard",
  //Dilivery Challan
  DELIVERY_CHALLAN: "/inventory/delivery-challan",
  GET_ALL_DELIVERY_CHALLAN: "/inventory/delivery-challan",
  CREATE_DELIVERY_CHALLAN: "/inventory/delivery-challan/create",
  VIEW_DELIVERY_CHALLAN: "/inventory/delivery-challan/view",
  UPDATE_DELIVERY_CHALLAN: "/inventory/delivery-challan/update",
  //Inward Register
  INWARD_REGISTER: "/inventory/inward-register",
  GET_ALL_INWARD_REGISTERS: "/inventory/inward-register",
  CREATE_INWARD_REGISTER: "/inventory/inward-register/create",
  VIEW_INWARD_REGISTER: "/inventory/inward-register/view",
  UPDATE_INWARD_REGISTER: "/inventory/inward-register/update",
  //Arrival QC Report
  AQR: "/inventory/arrival-qc-report",
  GET_ALL_AQR: "/inventory/arrival-qc-report",
  CREATE_AQR: "/inventory/arrival-qc-report/create",
  VIEW_AQR: "/inventory/arrival-qc-report/view",
  UPDATE_AQR: "/inventory/arrival-qc-report/update",
  //Labour Register
  LABOUR_REGISTER: "/inventory/labor-register",
  GET_ALL_LABOUR_REGISTER: "/inventory/labor-register",
  CREATE_LABOUR_REGISTER: "/inventory/labor-register/create",
  VIEW_LABOUR_REGISTER: "/inventory/labor-register/view",
  UPDATE_LABOUR_REGISTER: "/inventory/labor-register/update",
  //Labour Attendance
  LABOUR_ATTENDANCE: "/inventory/labor-attendance",
  GET_ALL_LABOUR_ATTENDANCE: "/inventory/labor-attendance",
  CREATE_LABOUR_ATTENDANCE: "/inventory/labor-attendance/create",
  UPDATE_LABOUR_ATTENDANCE: "/inventory/labor-attendance/update",
  //Goods Received Note
  GRN: "/inventory/goods-received-note",
  GET_ALL_GRN: "/inventory/goods-received-note",
  CREATE_GRN: "/inventory/goods-received-note/create",
  VIEW_GRN: "/inventory/goods-received-note/view",
  UPDATE_GRN: "/inventory/goods-received-note/update",
  //Dump Register
  DUMP_REGISTER: "/inventory/dump-register",
  GET_ALL_DUMP_REGISTERS: "/inventory/dump-register",
  CREATE_DUMP_REGISTER: "/inventory/dump-register/create",
  VIEW_DUMP_REGISTER: "/inventory/dump-register/view",
  UPDATE_DUMP_REGISTER: "/inventory/dump-register/update",
  //Vehicle Dispatch Register
  VEHICLE_DISPATCH_REGISTER: "/inventory/vehicle-dispatch-register",
  GET_ALL_VEHILCE_DISPATCH_REGISTER: "/inventory/vehicle-dispatch-register",
  CREATE_VEHILCE_DISPATCH_REGISTER: "/inventory/vehicle-dispatch-register/create",
  VIEW_VEHILCE_DISPATCH_REGISTER: "/inventory/vehicle-dispatch-register/view",
  UPDATE_VEHILCE_DISPATCH_REGISTER: "/inventory/vehicle-dispatch-register/update",
  //Second Sale Register
  SECOND_SALE_REGISTER: "/inventory/second-sale-register",
  GET_ALL_SECOND_SALE_REGISTER: "/inventory/second-sale-register",
  CREATE_SECOND_SALE_REGISTER: "/inventory/second-sale-register/create",
  VIEW_SECOND_SALE_REGISTER: "/inventory/second-sale-register/view",
  UPDATE_SECOND_SALE_REGISTER: "/inventory/second-sale-register/update",
  //Stock Register
  STOCK_REGISTER: "/inventory/stock-register",
  GET_ALL_STOCK_REGISTER: "/inventory/stock-register",
  CREATE_STOCK_REGISTER: "/inventory/stock-register/create",
  VIEW_STOCK_REGISTER: "/inventory/stock-register/view",
  UPDATE_STOCK_REGISTER: "/inventory/stock-register/update",
  //End of Day (EOD) Report
  EOD_REPORT: "/inventory/eod-report",
  GET_ALL_EOD_REPORT: "/inventory/eod-report",
  CREATE_EOD_REPORT: "/inventory/eod-report/create",
  VIEW_EOD_REPORT: "/inventory/eod-report/view",
  UPDATE_EOD_REPORT: "/inventory/eod-report/update",
  PROFORMA_INVOICES: "/inventory/proforma-invoices",
  GET_ALL_PROFORMA_INVOICES: "/inventory/proforma-invoices"
}, cc = {
  COMPANY_NAMES: [
    { value: "Prime Fresh Limited", label: "Prime Fresh Limited" },
    { value: "Florens Fresh Supply Solutions Pvt.Ltd.", label: "Florens Fresh Supply Solutions Pvt.Ltd." },
    { value: "Florens Farming Private Limited", label: "Florens Farming Private Limited" },
    { value: "Prime Fresh Retail (I) Private Limited", label: "Prime Fresh Retail (I) Private Limited" },
    { value: "VyankteshPrime Fresh Farmers Producer Company Limited", label: "VyankteshPrime Fresh Farmers Producer Company Limited" }
  ],
  SOURCES: [
    { value: "vendor", label: "Vendor" },
    { value: "farmer", label: "Farmer" }
  ],
  PAYMENT_MODE: [
    { value: "UPI", label: "UPI" },
    { value: "Cash", label: "Cash" },
    { value: "Cheque", label: "Cheque" },
    { value: "RTGS", label: "RTGS" },
    { value: "NEFT", label: "NEFT" },
    { value: "Other", label: "Other" }
  ],
  EOD_SUBMISSION: [
    { value: "First time submission", label: "First Time Submission" },
    { value: "Re-Submission (after management inputs)", label: "Re-Submission (after management inputs)" }
  ],
  LABOUR_TYPES: ["Skilled", "Semi-skilled", "Unskilled"],
  LABOR_EMP_TYPES: [
    { value: "temporary", label: "Temporary" },
    { value: "parmanent", label: "Parmanent" }
  ],
  GENDER: ["Male", "Female"],
  MARITAL_STATUS: ["Married", "Unmarried"],
  FAMILY_RELATIONS: ["Father", "Mother", "Spouse"],
  BLOOD_GROUPS: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"],
  INWARD_TYPE: ["Purchase", "Transferred"]
}, Ya = {
  product: "",
  count: "",
  size: "",
  qty: 0,
  uom: "",
  weight: 0,
  productContainerWeight: 0,
  netWeight: 0,
  grossWeight: 0
}, fc = {
  deliveryChallanNo: "",
  grnNo: "",
  companyName: "",
  batchNo: "",
  date: "",
  source: "vendor",
  selectedParty: "",
  inwardBy: "",
  inwardCost: 0,
  inwardProducts: [Ya],
  inwardQtyInKg: 0,
  inwardType: "",
  location: "",
  purchasedBy: "",
  purchasedQty: 0,
  remarks: "",
  totalWeightInKg: 0
};
var an = class {
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
}, Xr = typeof window > "u" || "Deno" in globalThis;
function Qa() {
}
function ei(r) {
  return typeof r == "number" && r >= 0 && r !== 1 / 0;
}
function Ja(r, e) {
  return Math.max(r + (e || 0) - Date.now(), 0);
}
function zr(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Je(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function ti(r) {
  return JSON.stringify(
    r,
    (e, t) => Kn(t) ? Object.keys(t).sort().reduce((n, s) => (n[s] = t[s], n), {}) : t
  );
}
function Hn(r, e) {
  if (r === e)
    return r;
  const t = ri(r) && ri(e);
  if (t || Kn(r) && Kn(e)) {
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
function en(r, e) {
  if (!e || Object.keys(r).length !== Object.keys(e).length)
    return !1;
  for (const t in r)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function ri(r) {
  return Array.isArray(r) && r.length === Object.keys(r).length;
}
function Kn(r) {
  if (!ni(r))
    return !1;
  const e = r.constructor;
  if (e === void 0)
    return !0;
  const t = e.prototype;
  return !(!ni(t) || !t.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(r) !== Object.prototype);
}
function ni(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function si(r, e, t) {
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
var At, dt, Ht, Pi, Za = (Pi = class extends an {
  constructor() {
    super();
    oe(this, At);
    oe(this, dt);
    oe(this, Ht);
    U(this, Ht, (e) => {
      if (!Xr && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    b(this, dt) || this.setEventListener(b(this, Ht));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = b(this, dt)) == null || e.call(this), U(this, dt, void 0));
  }
  setEventListener(e) {
    var t;
    U(this, Ht, e), (t = b(this, dt)) == null || t.call(this), U(this, dt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    b(this, At) !== e && (U(this, At, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    var e;
    return typeof b(this, At) == "boolean" ? b(this, At) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, At = new WeakMap(), dt = new WeakMap(), Ht = new WeakMap(), Pi), Xa = new Za(), Kt, ht, Yt, Ni, eo = (Ni = class extends an {
  constructor() {
    super();
    oe(this, Kt, !0);
    oe(this, ht);
    oe(this, Yt);
    U(this, Yt, (e) => {
      if (!Xr && window.addEventListener) {
        const t = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    b(this, ht) || this.setEventListener(b(this, Yt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = b(this, ht)) == null || e.call(this), U(this, ht, void 0));
  }
  setEventListener(e) {
    var t;
    U(this, Yt, e), (t = b(this, ht)) == null || t.call(this), U(this, ht, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    b(this, Kt) !== e && (U(this, Kt, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return b(this, Kt);
  }
}, Kt = new WeakMap(), ht = new WeakMap(), Yt = new WeakMap(), Ni), to = new eo();
function ro(r) {
  return (r ?? "online") === "online" ? to.isOnline() : !0;
}
function no() {
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
var on = no();
function so(r, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ro(e.networkMode) ? "fetching" : "paused",
    ...r === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function io() {
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
var ke, z, hr, xe, Ct, Qt, Qe, pr, Jt, Zt, It, Dt, pt, Xt, Z, cr, Yn, Qn, Jn, Zn, Xn, es, ts, Li, ki, ao = (ki = class extends an {
  constructor(e, t) {
    super();
    oe(this, Z);
    oe(this, ke);
    oe(this, z);
    oe(this, hr);
    oe(this, xe);
    oe(this, Ct);
    oe(this, Qt);
    oe(this, Qe);
    oe(this, pr);
    oe(this, Jt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    oe(this, Zt);
    oe(this, It);
    oe(this, Dt);
    oe(this, pt);
    oe(this, Xt, /* @__PURE__ */ new Set());
    this.options = t, U(this, ke, e), U(this, Qe, null), this.bindMethods(), this.setOptions(t);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (b(this, z).addObserver(this), ii(b(this, z), this.options) ? ce(this, Z, cr).call(this) : this.updateResult(), ce(this, Z, Zn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return rs(
      b(this, z),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return rs(
      b(this, z),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ce(this, Z, Xn).call(this), ce(this, Z, es).call(this), b(this, z).removeObserver(this);
  }
  setOptions(e, t) {
    const n = this.options, s = b(this, z);
    if (this.options = b(this, ke).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Je(this.options.enabled, b(this, z)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ce(this, Z, ts).call(this), b(this, z).setOptions(this.options), n._defaulted && !en(this.options, n) && b(this, ke).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: b(this, z),
      observer: this
    });
    const a = this.hasListeners();
    a && ai(
      b(this, z),
      s,
      this.options,
      n
    ) && ce(this, Z, cr).call(this), this.updateResult(t), a && (b(this, z) !== s || Je(this.options.enabled, b(this, z)) !== Je(n.enabled, b(this, z)) || zr(this.options.staleTime, b(this, z)) !== zr(n.staleTime, b(this, z))) && ce(this, Z, Yn).call(this);
    const o = ce(this, Z, Qn).call(this);
    a && (b(this, z) !== s || Je(this.options.enabled, b(this, z)) !== Je(n.enabled, b(this, z)) || o !== b(this, pt)) && ce(this, Z, Jn).call(this, o);
  }
  getOptimisticResult(e) {
    const t = b(this, ke).getQueryCache().build(b(this, ke), e), n = this.createResult(t, e);
    return uo(this, n) && (U(this, xe, n), U(this, Qt, this.options), U(this, Ct, b(this, z).state)), n;
  }
  getCurrentResult() {
    return b(this, xe);
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
    b(this, Xt).add(e);
  }
  getCurrentQuery() {
    return b(this, z);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const t = b(this, ke).defaultQueryOptions(e), n = b(this, ke).getQueryCache().build(b(this, ke), t);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return ce(this, Z, cr).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), b(this, xe)));
  }
  createResult(e, t) {
    var fe;
    const n = b(this, z), s = this.options, a = b(this, xe), o = b(this, Ct), u = b(this, Qt), h = e !== n ? e.state : b(this, hr), { state: d } = e;
    let y = { ...d }, A = !1, O;
    if (t._optimisticResults) {
      const ne = this.hasListeners(), Re = !ne && ii(e, t), Me = ne && ai(e, n, t, s);
      (Re || Me) && (y = {
        ...y,
        ...so(d.data, e.options)
      }), t._optimisticResults === "isRestoring" && (y.fetchStatus = "idle");
    }
    let { error: w, errorUpdatedAt: I, status: T } = y;
    if (t.select && y.data !== void 0)
      if (a && y.data === (o == null ? void 0 : o.data) && t.select === b(this, pr))
        O = b(this, Jt);
      else
        try {
          U(this, pr, t.select), O = t.select(y.data), O = si(a == null ? void 0 : a.data, O, t), U(this, Jt, O), U(this, Qe, null);
        } catch (ne) {
          U(this, Qe, ne);
        }
    else
      O = y.data;
    if (t.placeholderData !== void 0 && O === void 0 && T === "pending") {
      let ne;
      if (a != null && a.isPlaceholderData && t.placeholderData === (u == null ? void 0 : u.placeholderData))
        ne = a.data;
      else if (ne = typeof t.placeholderData == "function" ? t.placeholderData(
        (fe = b(this, Zt)) == null ? void 0 : fe.state.data,
        b(this, Zt)
      ) : t.placeholderData, t.select && ne !== void 0)
        try {
          ne = t.select(ne), U(this, Qe, null);
        } catch (Re) {
          U(this, Qe, Re);
        }
      ne !== void 0 && (T = "success", O = si(
        a == null ? void 0 : a.data,
        ne,
        t
      ), A = !0);
    }
    b(this, Qe) && (w = b(this, Qe), O = b(this, Jt), I = Date.now(), T = "error");
    const L = y.fetchStatus === "fetching", x = T === "pending", W = T === "error", re = x && L, $ = O !== void 0;
    return {
      status: T,
      fetchStatus: y.fetchStatus,
      isPending: x,
      isSuccess: T === "success",
      isError: W,
      isInitialLoading: re,
      isLoading: re,
      data: O,
      dataUpdatedAt: y.dataUpdatedAt,
      error: w,
      errorUpdatedAt: I,
      failureCount: y.fetchFailureCount,
      failureReason: y.fetchFailureReason,
      errorUpdateCount: y.errorUpdateCount,
      isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
      isFetchedAfterMount: y.dataUpdateCount > h.dataUpdateCount || y.errorUpdateCount > h.errorUpdateCount,
      isFetching: L,
      isRefetching: L && !x,
      isLoadingError: W && !$,
      isPaused: y.fetchStatus === "paused",
      isPlaceholderData: A,
      isRefetchError: W && $,
      isStale: bs(e, t),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const t = b(this, xe), n = this.createResult(b(this, z), this.options);
    if (U(this, Ct, b(this, z).state), U(this, Qt, this.options), b(this, Ct).data !== void 0 && U(this, Zt, b(this, z)), en(n, t))
      return;
    U(this, xe, n);
    const s = {}, a = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: o } = this.options, u = typeof o == "function" ? o() : o;
      if (u === "all" || !u && !b(this, Xt).size)
        return !0;
      const f = new Set(
        u ?? b(this, Xt)
      );
      return this.options.throwOnError && f.add("error"), Object.keys(b(this, xe)).some((h) => {
        const d = h;
        return b(this, xe)[d] !== t[d] && f.has(d);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && a() && (s.listeners = !0), ce(this, Z, Li).call(this, { ...s, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ce(this, Z, Zn).call(this);
  }
}, ke = new WeakMap(), z = new WeakMap(), hr = new WeakMap(), xe = new WeakMap(), Ct = new WeakMap(), Qt = new WeakMap(), Qe = new WeakMap(), pr = new WeakMap(), Jt = new WeakMap(), Zt = new WeakMap(), It = new WeakMap(), Dt = new WeakMap(), pt = new WeakMap(), Xt = new WeakMap(), Z = new WeakSet(), cr = function(e) {
  ce(this, Z, ts).call(this);
  let t = b(this, z).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (t = t.catch(Qa)), t;
}, Yn = function() {
  ce(this, Z, Xn).call(this);
  const e = zr(
    this.options.staleTime,
    b(this, z)
  );
  if (Xr || b(this, xe).isStale || !ei(e))
    return;
  const n = Ja(b(this, xe).dataUpdatedAt, e) + 1;
  U(this, It, setTimeout(() => {
    b(this, xe).isStale || this.updateResult();
  }, n));
}, Qn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(b(this, z)) : this.options.refetchInterval) ?? !1;
}, Jn = function(e) {
  ce(this, Z, es).call(this), U(this, pt, e), !(Xr || Je(this.options.enabled, b(this, z)) === !1 || !ei(b(this, pt)) || b(this, pt) === 0) && U(this, Dt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Xa.isFocused()) && ce(this, Z, cr).call(this);
  }, b(this, pt)));
}, Zn = function() {
  ce(this, Z, Yn).call(this), ce(this, Z, Jn).call(this, ce(this, Z, Qn).call(this));
}, Xn = function() {
  b(this, It) && (clearTimeout(b(this, It)), U(this, It, void 0));
}, es = function() {
  b(this, Dt) && (clearInterval(b(this, Dt)), U(this, Dt, void 0));
}, ts = function() {
  const e = b(this, ke).getQueryCache().build(b(this, ke), this.options);
  if (e === b(this, z))
    return;
  const t = b(this, z);
  U(this, z, e), U(this, hr, e.state), this.hasListeners() && (t == null || t.removeObserver(this), e.addObserver(this));
}, Li = function(e) {
  on.batch(() => {
    e.listeners && this.listeners.forEach((t) => {
      t(b(this, xe));
    }), b(this, ke).getQueryCache().notify({
      query: b(this, z),
      type: "observerResultsUpdated"
    });
  });
}, ki);
function oo(r, e) {
  return Je(e.enabled, r) !== !1 && r.state.data === void 0 && !(r.state.status === "error" && e.retryOnMount === !1);
}
function ii(r, e) {
  return oo(r, e) || r.state.data !== void 0 && rs(r, e, e.refetchOnMount);
}
function rs(r, e, t) {
  if (Je(e.enabled, r) !== !1) {
    const n = typeof t == "function" ? t(r) : t;
    return n === "always" || n !== !1 && bs(r, e);
  }
  return !1;
}
function ai(r, e, t, n) {
  return (r !== e || Je(n.enabled, r) === !1) && (!t.suspense || r.state.status !== "error") && bs(r, t);
}
function bs(r, e) {
  return Je(e.enabled, r) !== !1 && r.isStaleByTime(zr(e.staleTime, r));
}
function uo(r, e) {
  return !en(r.getCurrentResult(), e);
}
var mt, yt, Fe, rt, st, Wr, ns, Fi, lo = (Fi = class extends an {
  constructor(e, t) {
    super();
    oe(this, st);
    oe(this, mt);
    oe(this, yt);
    oe(this, Fe);
    oe(this, rt);
    U(this, mt, e), this.setOptions(t), this.bindMethods(), ce(this, st, Wr).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const t = this.options;
    this.options = b(this, mt).defaultMutationOptions(e), en(this.options, t) || b(this, mt).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: b(this, Fe),
      observer: this
    }), t != null && t.mutationKey && this.options.mutationKey && ti(t.mutationKey) !== ti(this.options.mutationKey) ? this.reset() : ((n = b(this, Fe)) == null ? void 0 : n.state.status) === "pending" && b(this, Fe).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = b(this, Fe)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    ce(this, st, Wr).call(this), ce(this, st, ns).call(this, e);
  }
  getCurrentResult() {
    return b(this, yt);
  }
  reset() {
    var e;
    (e = b(this, Fe)) == null || e.removeObserver(this), U(this, Fe, void 0), ce(this, st, Wr).call(this), ce(this, st, ns).call(this);
  }
  mutate(e, t) {
    var n;
    return U(this, rt, t), (n = b(this, Fe)) == null || n.removeObserver(this), U(this, Fe, b(this, mt).getMutationCache().build(b(this, mt), this.options)), b(this, Fe).addObserver(this), b(this, Fe).execute(e);
  }
}, mt = new WeakMap(), yt = new WeakMap(), Fe = new WeakMap(), rt = new WeakMap(), st = new WeakSet(), Wr = function() {
  var t;
  const e = ((t = b(this, Fe)) == null ? void 0 : t.state) ?? io();
  U(this, yt, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, ns = function(e) {
  on.batch(() => {
    var t, n, s, a, o, u, f, h;
    if (b(this, rt) && this.hasListeners()) {
      const d = b(this, yt).variables, y = b(this, yt).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (t = b(this, rt)).onSuccess) == null || n.call(t, e.data, d, y), (a = (s = b(this, rt)).onSettled) == null || a.call(s, e.data, null, d, y)) : (e == null ? void 0 : e.type) === "error" && ((u = (o = b(this, rt)).onError) == null || u.call(o, e.error, d, y), (h = (f = b(this, rt)).onSettled) == null || h.call(
        f,
        void 0,
        e.error,
        d,
        y
      ));
    }
    this.listeners.forEach((d) => {
      d(b(this, yt));
    });
  });
}, Fi);
function co(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ss = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi;
function fo() {
  if (oi) return M;
  oi = 1;
  var r = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), y = Symbol.iterator;
  function A(p) {
    return p === null || typeof p != "object" ? null : (p = y && p[y] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var O = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, w = Object.assign, I = {};
  function T(p, R, B) {
    this.props = p, this.context = R, this.refs = I, this.updater = B || O;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(p, R) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, R, "setState");
  }, T.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function L() {
  }
  L.prototype = T.prototype;
  function x(p, R, B) {
    this.props = p, this.context = R, this.refs = I, this.updater = B || O;
  }
  var W = x.prototype = new L();
  W.constructor = x, w(W, T.prototype), W.isPureReactComponent = !0;
  var re = Array.isArray, $ = Object.prototype.hasOwnProperty, X = { current: null }, fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(p, R, B) {
    var V, K = {}, ue = null, ie = null;
    if (R != null) for (V in R.ref !== void 0 && (ie = R.ref), R.key !== void 0 && (ue = "" + R.key), R) $.call(R, V) && !fe.hasOwnProperty(V) && (K[V] = R[V]);
    var se = arguments.length - 2;
    if (se === 1) K.children = B;
    else if (1 < se) {
      for (var ee = Array(se), be = 0; be < se; be++) ee[be] = arguments[be + 2];
      K.children = ee;
    }
    if (p && p.defaultProps) for (V in se = p.defaultProps, se) K[V] === void 0 && (K[V] = se[V]);
    return { $$typeof: r, type: p, key: ue, ref: ie, props: K, _owner: X.current };
  }
  function Re(p, R) {
    return { $$typeof: r, type: p.type, key: R, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function Me(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }
  function le(p) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(B) {
      return R[B];
    });
  }
  var De = /\/+/g;
  function _e(p, R) {
    return typeof p == "object" && p !== null && p.key != null ? le("" + p.key) : R.toString(36);
  }
  function we(p, R, B, V, K) {
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
    if (ie) return ie = p, K = K(ie), p = V === "" ? "." + _e(ie, 0) : V, re(K) ? (B = "", p != null && (B = p.replace(De, "$&/") + "/"), we(K, R, B, "", function(be) {
      return be;
    })) : K != null && (Me(K) && (K = Re(K, B + (!K.key || ie && ie.key === K.key ? "" : ("" + K.key).replace(De, "$&/") + "/") + p)), R.push(K)), 1;
    if (ie = 0, V = V === "" ? "." : V + ":", re(p)) for (var se = 0; se < p.length; se++) {
      ue = p[se];
      var ee = V + _e(ue, se);
      ie += we(ue, R, B, ee, K);
    }
    else if (ee = A(p), typeof ee == "function") for (p = ee.call(p), se = 0; !(ue = p.next()).done; ) ue = ue.value, ee = V + _e(ue, se++), ie += we(ue, R, B, ee, K);
    else if (ue === "object") throw R = String(p), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return ie;
  }
  function Oe(p, R, B) {
    if (p == null) return p;
    var V = [], K = 0;
    return we(p, V, "", "", function(ue) {
      return R.call(B, ue, K++);
    }), V;
  }
  function Ve(p) {
    if (p._status === -1) {
      var R = p._result;
      R = R(), R.then(function(B) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = B);
      }, function(B) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = B);
      }), p._status === -1 && (p._status = 0, p._result = R);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var P = { current: null }, He = { transition: null }, Et = { ReactCurrentDispatcher: P, ReactCurrentBatchConfig: He, ReactCurrentOwner: X };
  function Ze() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: Oe, forEach: function(p, R, B) {
    Oe(p, function() {
      R.apply(this, arguments);
    }, B);
  }, count: function(p) {
    var R = 0;
    return Oe(p, function() {
      R++;
    }), R;
  }, toArray: function(p) {
    return Oe(p, function(R) {
      return R;
    }) || [];
  }, only: function(p) {
    if (!Me(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, M.Component = T, M.Fragment = t, M.Profiler = s, M.PureComponent = x, M.StrictMode = n, M.Suspense = f, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Et, M.act = Ze, M.cloneElement = function(p, R, B) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var V = w({}, p.props), K = p.key, ue = p.ref, ie = p._owner;
    if (R != null) {
      if (R.ref !== void 0 && (ue = R.ref, ie = X.current), R.key !== void 0 && (K = "" + R.key), p.type && p.type.defaultProps) var se = p.type.defaultProps;
      for (ee in R) $.call(R, ee) && !fe.hasOwnProperty(ee) && (V[ee] = R[ee] === void 0 && se !== void 0 ? se[ee] : R[ee]);
    }
    var ee = arguments.length - 2;
    if (ee === 1) V.children = B;
    else if (1 < ee) {
      se = Array(ee);
      for (var be = 0; be < ee; be++) se[be] = arguments[be + 2];
      V.children = se;
    }
    return { $$typeof: r, type: p.type, key: K, ref: ue, props: V, _owner: ie };
  }, M.createContext = function(p) {
    return p = { $$typeof: o, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: a, _context: p }, p.Consumer = p;
  }, M.createElement = ne, M.createFactory = function(p) {
    var R = ne.bind(null, p);
    return R.type = p, R;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(p) {
    return { $$typeof: u, render: p };
  }, M.isValidElement = Me, M.lazy = function(p) {
    return { $$typeof: d, _payload: { _status: -1, _result: p }, _init: Ve };
  }, M.memo = function(p, R) {
    return { $$typeof: h, type: p, compare: R === void 0 ? null : R };
  }, M.startTransition = function(p) {
    var R = He.transition;
    He.transition = {};
    try {
      p();
    } finally {
      He.transition = R;
    }
  }, M.unstable_act = Ze, M.useCallback = function(p, R) {
    return P.current.useCallback(p, R);
  }, M.useContext = function(p) {
    return P.current.useContext(p);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(p) {
    return P.current.useDeferredValue(p);
  }, M.useEffect = function(p, R) {
    return P.current.useEffect(p, R);
  }, M.useId = function() {
    return P.current.useId();
  }, M.useImperativeHandle = function(p, R, B) {
    return P.current.useImperativeHandle(p, R, B);
  }, M.useInsertionEffect = function(p, R) {
    return P.current.useInsertionEffect(p, R);
  }, M.useLayoutEffect = function(p, R) {
    return P.current.useLayoutEffect(p, R);
  }, M.useMemo = function(p, R) {
    return P.current.useMemo(p, R);
  }, M.useReducer = function(p, R, B) {
    return P.current.useReducer(p, R, B);
  }, M.useRef = function(p) {
    return P.current.useRef(p);
  }, M.useState = function(p) {
    return P.current.useState(p);
  }, M.useSyncExternalStore = function(p, R, B) {
    return P.current.useSyncExternalStore(p, R, B);
  }, M.useTransition = function() {
    return P.current.useTransition();
  }, M.version = "18.3.1", M;
}
var fr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
fr.exports;
var ui;
function ho() {
  return ui || (ui = 1, function(r, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = "18.3.1", n = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), T = Symbol.iterator, L = "@@iterator";
      function x(i) {
        if (i === null || typeof i != "object")
          return null;
        var l = T && i[T] || i[L];
        return typeof l == "function" ? l : null;
      }
      var W = {
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
      }, fe = {}, ne = null;
      function Re(i) {
        ne = i;
      }
      fe.setExtraStackFrame = function(i) {
        ne = i;
      }, fe.getCurrentStack = null, fe.getStackAddendum = function() {
        var i = "";
        ne && (i += ne);
        var l = fe.getCurrentStack;
        return l && (i += l() || ""), i;
      };
      var Me = !1, le = !1, De = !1, _e = !1, we = !1, Oe = {
        ReactCurrentDispatcher: W,
        ReactCurrentBatchConfig: re,
        ReactCurrentOwner: X
      };
      Oe.ReactDebugCurrentFrame = fe, Oe.ReactCurrentActQueue = $;
      function Ve(i) {
        {
          for (var l = arguments.length, m = new Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++)
            m[g - 1] = arguments[g];
          He("warn", i, m);
        }
      }
      function P(i) {
        {
          for (var l = arguments.length, m = new Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++)
            m[g - 1] = arguments[g];
          He("error", i, m);
        }
      }
      function He(i, l, m) {
        {
          var g = Oe.ReactDebugCurrentFrame, S = g.getStackAddendum();
          S !== "" && (l += "%s", m = m.concat([S]));
          var N = m.map(function(D) {
            return String(D);
          });
          N.unshift("Warning: " + l), Function.prototype.apply.call(console[i], console, N);
        }
      }
      var Et = {};
      function Ze(i, l) {
        {
          var m = i.constructor, g = m && (m.displayName || m.name) || "ReactClass", S = g + "." + l;
          if (Et[S])
            return;
          P("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", l, g), Et[S] = !0;
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
          Ze(i, "forceUpdate");
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
          Ze(i, "replaceState");
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
          Ze(i, "setState");
        }
      }, R = Object.assign, B = {};
      Object.freeze(B);
      function V(i, l, m) {
        this.props = i, this.context = l, this.refs = B, this.updater = m || p;
      }
      V.prototype.isReactComponent = {}, V.prototype.setState = function(i, l) {
        if (typeof i != "object" && typeof i != "function" && i != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, i, l, "setState");
      }, V.prototype.forceUpdate = function(i) {
        this.updater.enqueueForceUpdate(this, i, "forceUpdate");
      };
      {
        var K = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ue = function(i, l) {
          Object.defineProperty(V.prototype, i, {
            get: function() {
              Ve("%s(...) is deprecated in plain JavaScript React classes. %s", l[0], l[1]);
            }
          });
        };
        for (var ie in K)
          K.hasOwnProperty(ie) && ue(ie, K[ie]);
      }
      function se() {
      }
      se.prototype = V.prototype;
      function ee(i, l, m) {
        this.props = i, this.context = l, this.refs = B, this.updater = m || p;
      }
      var be = ee.prototype = new se();
      be.constructor = ee, R(be, V.prototype), be.isPureReactComponent = !0;
      function En() {
        var i = {
          current: null
        };
        return Object.seal(i), i;
      }
      var Tr = Array.isArray;
      function jt(i) {
        return Tr(i);
      }
      function gn(i) {
        {
          var l = typeof Symbol == "function" && Symbol.toStringTag, m = l && i[Symbol.toStringTag] || i.constructor.name || "Object";
          return m;
        }
      }
      function qt(i) {
        try {
          return it(i), !1;
        } catch {
          return !0;
        }
      }
      function it(i) {
        return "" + i;
      }
      function gt(i) {
        if (qt(i))
          return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gn(i)), it(i);
      }
      function wr(i, l, m) {
        var g = i.displayName;
        if (g)
          return g;
        var S = l.displayName || l.name || "";
        return S !== "" ? m + "(" + S + ")" : m;
      }
      function bt(i) {
        return i.displayName || "Context";
      }
      function Ke(i) {
        if (i == null)
          return null;
        if (typeof i.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
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
          case A:
            return "SuspenseList";
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case h:
              var l = i;
              return bt(l) + ".Consumer";
            case f:
              var m = i;
              return bt(m._context) + ".Provider";
            case d:
              return wr(i, i.render, "ForwardRef");
            case O:
              var g = i.displayName || null;
              return g !== null ? g : Ke(i.type) || "Memo";
            case w: {
              var S = i, N = S._payload, D = S._init;
              try {
                return Ke(D(N));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var vt = Object.prototype.hasOwnProperty, Ut = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Or, Ar, Mt;
      Mt = {};
      function rr(i) {
        if (vt.call(i, "ref")) {
          var l = Object.getOwnPropertyDescriptor(i, "ref").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return i.ref !== void 0;
      }
      function at(i) {
        if (vt.call(i, "key")) {
          var l = Object.getOwnPropertyDescriptor(i, "key").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return i.key !== void 0;
      }
      function bn(i, l) {
        var m = function() {
          Or || (Or = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: m,
          configurable: !0
        });
      }
      function Cr(i, l) {
        var m = function() {
          Ar || (Ar = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: m,
          configurable: !0
        });
      }
      function Ir(i) {
        if (typeof i.ref == "string" && X.current && i.__self && X.current.stateNode !== i.__self) {
          var l = Ke(X.current.type);
          Mt[l] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i.ref), Mt[l] = !0);
        }
      }
      var Rt = function(i, l, m, g, S, N, D) {
        var F = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: i,
          key: l,
          ref: m,
          props: D,
          // Record the component responsible for creating this element.
          _owner: N
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
          value: g
        }), Object.defineProperty(F, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: S
        }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
      };
      function vn(i, l, m) {
        var g, S = {}, N = null, D = null, F = null, H = null;
        if (l != null) {
          rr(l) && (D = l.ref, Ir(l)), at(l) && (gt(l.key), N = "" + l.key), F = l.__self === void 0 ? null : l.__self, H = l.__source === void 0 ? null : l.__source;
          for (g in l)
            vt.call(l, g) && !Ut.hasOwnProperty(g) && (S[g] = l[g]);
        }
        var ae = arguments.length - 2;
        if (ae === 1)
          S.children = m;
        else if (ae > 1) {
          for (var de = Array(ae), he = 0; he < ae; he++)
            de[he] = arguments[he + 2];
          Object.freeze && Object.freeze(de), S.children = de;
        }
        if (i && i.defaultProps) {
          var me = i.defaultProps;
          for (g in me)
            S[g] === void 0 && (S[g] = me[g]);
        }
        if (N || D) {
          var ve = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          N && bn(S, ve), D && Cr(S, ve);
        }
        return Rt(i, N, D, F, H, X.current, S);
      }
      function Rn(i, l) {
        var m = Rt(i.type, l, i.ref, i._self, i._source, i._owner, i.props);
        return m;
      }
      function _n(i, l, m) {
        if (i == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + i + ".");
        var g, S = R({}, i.props), N = i.key, D = i.ref, F = i._self, H = i._source, ae = i._owner;
        if (l != null) {
          rr(l) && (D = l.ref, ae = X.current), at(l) && (gt(l.key), N = "" + l.key);
          var de;
          i.type && i.type.defaultProps && (de = i.type.defaultProps);
          for (g in l)
            vt.call(l, g) && !Ut.hasOwnProperty(g) && (l[g] === void 0 && de !== void 0 ? S[g] = de[g] : S[g] = l[g]);
        }
        var he = arguments.length - 2;
        if (he === 1)
          S.children = m;
        else if (he > 1) {
          for (var me = Array(he), ve = 0; ve < he; ve++)
            me[ve] = arguments[ve + 2];
          S.children = me;
        }
        return Rt(i.type, N, D, F, H, ae, S);
      }
      function ot(i) {
        return typeof i == "object" && i !== null && i.$$typeof === n;
      }
      var Dr = ".", Sn = ":";
      function Tn(i) {
        var l = /[=:]/g, m = {
          "=": "=0",
          ":": "=2"
        }, g = i.replace(l, function(S) {
          return m[S];
        });
        return "$" + g;
      }
      var Bt = !1, xr = /\/+/g;
      function Xe(i) {
        return i.replace(xr, "$&/");
      }
      function _t(i, l) {
        return typeof i == "object" && i !== null && i.key != null ? (gt(i.key), Tn("" + i.key)) : l.toString(36);
      }
      function ut(i, l, m, g, S) {
        var N = typeof i;
        (N === "undefined" || N === "boolean") && (i = null);
        var D = !1;
        if (i === null)
          D = !0;
        else
          switch (N) {
            case "string":
            case "number":
              D = !0;
              break;
            case "object":
              switch (i.$$typeof) {
                case n:
                case s:
                  D = !0;
              }
          }
        if (D) {
          var F = i, H = S(F), ae = g === "" ? Dr + _t(F, 0) : g;
          if (jt(H)) {
            var de = "";
            ae != null && (de = Xe(ae) + "/"), ut(H, l, de, "", function(Ka) {
              return Ka;
            });
          } else H != null && (ot(H) && (H.key && (!F || F.key !== H.key) && gt(H.key), H = Rn(
            H,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            m + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (H.key && (!F || F.key !== H.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Xe("" + H.key) + "/"
            ) : "") + ae
          )), l.push(H));
          return 1;
        }
        var he, me, ve = 0, Ce = g === "" ? Dr : g + Sn;
        if (jt(i))
          for (var Gr = 0; Gr < i.length; Gr++)
            he = i[Gr], me = Ce + _t(he, Gr), ve += ut(he, l, m, me, S);
        else {
          var qn = x(i);
          if (typeof qn == "function") {
            var Qs = i;
            qn === Qs.entries && (Bt || Ve("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var Wa = qn.call(Qs), Js, Ha = 0; !(Js = Wa.next()).done; )
              he = Js.value, me = Ce + _t(he, Ha++), ve += ut(he, l, m, me, S);
          } else if (N === "object") {
            var Zs = String(i);
            throw new Error("Objects are not valid as a React child (found: " + (Zs === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : Zs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ve;
      }
      function St(i, l, m) {
        if (i == null)
          return i;
        var g = [], S = 0;
        return ut(i, g, "", "", function(N) {
          return l.call(m, N, S++);
        }), g;
      }
      function wn(i) {
        var l = 0;
        return St(i, function() {
          l++;
        }), l;
      }
      function Pr(i, l, m) {
        St(i, function() {
          l.apply(this, arguments);
        }, m);
      }
      function On(i) {
        return St(i, function(l) {
          return l;
        }) || [];
      }
      function Nr(i) {
        if (!ot(i))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return i;
      }
      function kr(i) {
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
        var m = !1, g = !1, S = !1;
        {
          var N = {
            $$typeof: h,
            _context: l
          };
          Object.defineProperties(N, {
            Provider: {
              get: function() {
                return g || (g = !0, P("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), l.Provider;
              },
              set: function(D) {
                l.Provider = D;
              }
            },
            _currentValue: {
              get: function() {
                return l._currentValue;
              },
              set: function(D) {
                l._currentValue = D;
              }
            },
            _currentValue2: {
              get: function() {
                return l._currentValue2;
              },
              set: function(D) {
                l._currentValue2 = D;
              }
            },
            _threadCount: {
              get: function() {
                return l._threadCount;
              },
              set: function(D) {
                l._threadCount = D;
              }
            },
            Consumer: {
              get: function() {
                return m || (m = !0, P("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), l.Consumer;
              }
            },
            displayName: {
              get: function() {
                return l.displayName;
              },
              set: function(D) {
                S || (Ve("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", D), S = !0);
              }
            }
          }), l.Consumer = N;
        }
        return l._currentRenderer = null, l._currentRenderer2 = null, l;
      }
      var Tt = -1, nr = 0, sr = 1, Fr = 2;
      function An(i) {
        if (i._status === Tt) {
          var l = i._result, m = l();
          if (m.then(function(N) {
            if (i._status === nr || i._status === Tt) {
              var D = i;
              D._status = sr, D._result = N;
            }
          }, function(N) {
            if (i._status === nr || i._status === Tt) {
              var D = i;
              D._status = Fr, D._result = N;
            }
          }), i._status === Tt) {
            var g = i;
            g._status = nr, g._result = m;
          }
        }
        if (i._status === sr) {
          var S = i._result;
          return S === void 0 && P(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, S), "default" in S || P(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, S), S.default;
        } else
          throw i._result;
      }
      function Cn(i) {
        var l = {
          // We use these fields to store the result.
          _status: Tt,
          _result: i
        }, m = {
          $$typeof: w,
          _payload: l,
          _init: An
        };
        {
          var g, S;
          Object.defineProperties(m, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return g;
              },
              set: function(N) {
                P("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), g = N, Object.defineProperty(m, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return S;
              },
              set: function(N) {
                P("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), S = N, Object.defineProperty(m, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return m;
      }
      function In(i) {
        i != null && i.$$typeof === O ? P("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof i != "function" ? P("forwardRef requires a render function but was given %s.", i === null ? "null" : typeof i) : i.length !== 0 && i.length !== 2 && P("forwardRef render functions accept exactly two parameters: props and ref. %s", i.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), i != null && (i.defaultProps != null || i.propTypes != null) && P("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
        return !!(typeof i == "string" || typeof i == "function" || i === a || i === u || we || i === o || i === y || i === A || _e || i === I || Me || le || De || typeof i == "object" && i !== null && (i.$$typeof === w || i.$$typeof === O || i.$$typeof === f || i.$$typeof === h || i.$$typeof === d || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        i.$$typeof === Lr || i.getModuleId !== void 0));
      }
      function v(i, l) {
        c(i) || P("memo: The first argument must be a component. Instead received: %s", i === null ? "null" : typeof i);
        var m = {
          $$typeof: O,
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
            set: function(S) {
              g = S, !i.name && !i.displayName && (i.displayName = S);
            }
          });
        }
        return m;
      }
      function _() {
        var i = W.current;
        return i === null && P(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), i;
      }
      function k(i) {
        var l = _();
        if (i._context !== void 0) {
          var m = i._context;
          m.Consumer === i ? P("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : m.Provider === i && P("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return l.useContext(i);
      }
      function Y(i) {
        var l = _();
        return l.useState(i);
      }
      function te(i, l, m) {
        var g = _();
        return g.useReducer(i, l, m);
      }
      function G(i) {
        var l = _();
        return l.useRef(i);
      }
      function q(i, l) {
        var m = _();
        return m.useEffect(i, l);
      }
      function Ae(i, l) {
        var m = _();
        return m.useInsertionEffect(i, l);
      }
      function pe(i, l) {
        var m = _();
        return m.useLayoutEffect(i, l);
      }
      function Ee(i, l) {
        var m = _();
        return m.useCallback(i, l);
      }
      function Pe(i, l) {
        var m = _();
        return m.useMemo(i, l);
      }
      function lt(i, l, m) {
        var g = _();
        return g.useImperativeHandle(i, l, m);
      }
      function et(i, l) {
        {
          var m = _();
          return m.useDebugValue(i, l);
        }
      }
      function Ie() {
        var i = _();
        return i.useTransition();
      }
      function ir(i) {
        var l = _();
        return l.useDeferredValue(i);
      }
      function Dn() {
        var i = _();
        return i.useId();
      }
      function xn(i, l, m) {
        var g = _();
        return g.useSyncExternalStore(i, l, m);
      }
      var ar = 0, Is, Ds, xs, Ps, Ns, ks, Fs;
      function Ls() {
      }
      Ls.__reactDisabledLog = !0;
      function Ca() {
        {
          if (ar === 0) {
            Is = console.log, Ds = console.info, xs = console.warn, Ps = console.error, Ns = console.group, ks = console.groupCollapsed, Fs = console.groupEnd;
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
          ar++;
        }
      }
      function Ia() {
        {
          if (ar--, ar === 0) {
            var i = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: R({}, i, {
                value: Is
              }),
              info: R({}, i, {
                value: Ds
              }),
              warn: R({}, i, {
                value: xs
              }),
              error: R({}, i, {
                value: Ps
              }),
              group: R({}, i, {
                value: Ns
              }),
              groupCollapsed: R({}, i, {
                value: ks
              }),
              groupEnd: R({}, i, {
                value: Fs
              })
            });
          }
          ar < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Pn = Oe.ReactCurrentDispatcher, Nn;
      function $r(i, l, m) {
        {
          if (Nn === void 0)
            try {
              throw Error();
            } catch (S) {
              var g = S.stack.trim().match(/\n( *(at )?)/);
              Nn = g && g[1] || "";
            }
          return `
` + Nn + i;
        }
      }
      var kn = !1, jr;
      {
        var Da = typeof WeakMap == "function" ? WeakMap : Map;
        jr = new Da();
      }
      function $s(i, l) {
        if (!i || kn)
          return "";
        {
          var m = jr.get(i);
          if (m !== void 0)
            return m;
        }
        var g;
        kn = !0;
        var S = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var N;
        N = Pn.current, Pn.current = null, Ca();
        try {
          if (l) {
            var D = function() {
              throw Error();
            };
            if (Object.defineProperty(D.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(D, []);
              } catch (Ce) {
                g = Ce;
              }
              Reflect.construct(i, [], D);
            } else {
              try {
                D.call();
              } catch (Ce) {
                g = Ce;
              }
              i.call(D.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ce) {
              g = Ce;
            }
            i();
          }
        } catch (Ce) {
          if (Ce && g && typeof Ce.stack == "string") {
            for (var F = Ce.stack.split(`
`), H = g.stack.split(`
`), ae = F.length - 1, de = H.length - 1; ae >= 1 && de >= 0 && F[ae] !== H[de]; )
              de--;
            for (; ae >= 1 && de >= 0; ae--, de--)
              if (F[ae] !== H[de]) {
                if (ae !== 1 || de !== 1)
                  do
                    if (ae--, de--, de < 0 || F[ae] !== H[de]) {
                      var he = `
` + F[ae].replace(" at new ", " at ");
                      return i.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", i.displayName)), typeof i == "function" && jr.set(i, he), he;
                    }
                  while (ae >= 1 && de >= 0);
                break;
              }
          }
        } finally {
          kn = !1, Pn.current = N, Ia(), Error.prepareStackTrace = S;
        }
        var me = i ? i.displayName || i.name : "", ve = me ? $r(me) : "";
        return typeof i == "function" && jr.set(i, ve), ve;
      }
      function xa(i, l, m) {
        return $s(i, !1);
      }
      function Pa(i) {
        var l = i.prototype;
        return !!(l && l.isReactComponent);
      }
      function qr(i, l, m) {
        if (i == null)
          return "";
        if (typeof i == "function")
          return $s(i, Pa(i));
        if (typeof i == "string")
          return $r(i);
        switch (i) {
          case y:
            return $r("Suspense");
          case A:
            return $r("SuspenseList");
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case d:
              return xa(i.render);
            case O:
              return qr(i.type, l, m);
            case w: {
              var g = i, S = g._payload, N = g._init;
              try {
                return qr(N(S), l, m);
              } catch {
              }
            }
          }
        return "";
      }
      var js = {}, qs = Oe.ReactDebugCurrentFrame;
      function Ur(i) {
        if (i) {
          var l = i._owner, m = qr(i.type, i._source, l ? l.type : null);
          qs.setExtraStackFrame(m);
        } else
          qs.setExtraStackFrame(null);
      }
      function Na(i, l, m, g, S) {
        {
          var N = Function.call.bind(vt);
          for (var D in i)
            if (N(i, D)) {
              var F = void 0;
              try {
                if (typeof i[D] != "function") {
                  var H = Error((g || "React class") + ": " + m + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw H.name = "Invariant Violation", H;
                }
                F = i[D](l, D, g, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ae) {
                F = ae;
              }
              F && !(F instanceof Error) && (Ur(S), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", m, D, typeof F), Ur(null)), F instanceof Error && !(F.message in js) && (js[F.message] = !0, Ur(S), P("Failed %s type: %s", m, F.message), Ur(null));
            }
        }
      }
      function Gt(i) {
        if (i) {
          var l = i._owner, m = qr(i.type, i._source, l ? l.type : null);
          Re(m);
        } else
          Re(null);
      }
      var Fn;
      Fn = !1;
      function Us() {
        if (X.current) {
          var i = Ke(X.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
      function ka(i) {
        if (i !== void 0) {
          var l = i.fileName.replace(/^.*[\\\/]/, ""), m = i.lineNumber;
          return `

Check your code at ` + l + ":" + m + ".";
        }
        return "";
      }
      function Fa(i) {
        return i != null ? ka(i.__source) : "";
      }
      var Ms = {};
      function La(i) {
        var l = Us();
        if (!l) {
          var m = typeof i == "string" ? i : i.displayName || i.name;
          m && (l = `

Check the top-level render call using <` + m + ">.");
        }
        return l;
      }
      function Bs(i, l) {
        if (!(!i._store || i._store.validated || i.key != null)) {
          i._store.validated = !0;
          var m = La(l);
          if (!Ms[m]) {
            Ms[m] = !0;
            var g = "";
            i && i._owner && i._owner !== X.current && (g = " It was passed a child from " + Ke(i._owner.type) + "."), Gt(i), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, g), Gt(null);
          }
        }
      }
      function Gs(i, l) {
        if (typeof i == "object") {
          if (jt(i))
            for (var m = 0; m < i.length; m++) {
              var g = i[m];
              ot(g) && Bs(g, l);
            }
          else if (ot(i))
            i._store && (i._store.validated = !0);
          else if (i) {
            var S = x(i);
            if (typeof S == "function" && S !== i.entries)
              for (var N = S.call(i), D; !(D = N.next()).done; )
                ot(D.value) && Bs(D.value, l);
          }
        }
      }
      function Vs(i) {
        {
          var l = i.type;
          if (l == null || typeof l == "string")
            return;
          var m;
          if (typeof l == "function")
            m = l.propTypes;
          else if (typeof l == "object" && (l.$$typeof === d || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          l.$$typeof === O))
            m = l.propTypes;
          else
            return;
          if (m) {
            var g = Ke(l);
            Na(m, i.props, "prop", g, i);
          } else if (l.PropTypes !== void 0 && !Fn) {
            Fn = !0;
            var S = Ke(l);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
          }
          typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $a(i) {
        {
          for (var l = Object.keys(i.props), m = 0; m < l.length; m++) {
            var g = l[m];
            if (g !== "children" && g !== "key") {
              Gt(i), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Gt(null);
              break;
            }
          }
          i.ref !== null && (Gt(i), P("Invalid attribute `ref` supplied to `React.Fragment`."), Gt(null));
        }
      }
      function zs(i, l, m) {
        var g = c(i);
        if (!g) {
          var S = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = Fa(l);
          N ? S += N : S += Us();
          var D;
          i === null ? D = "null" : jt(i) ? D = "array" : i !== void 0 && i.$$typeof === n ? (D = "<" + (Ke(i.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : D = typeof i, P("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, S);
        }
        var F = vn.apply(this, arguments);
        if (F == null)
          return F;
        if (g)
          for (var H = 2; H < arguments.length; H++)
            Gs(arguments[H], i);
        return i === a ? $a(F) : Vs(F), F;
      }
      var Ws = !1;
      function ja(i) {
        var l = zs.bind(null, i);
        return l.type = i, Ws || (Ws = !0, Ve("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(l, "type", {
          enumerable: !1,
          get: function() {
            return Ve("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: i
            }), i;
          }
        }), l;
      }
      function qa(i, l, m) {
        for (var g = _n.apply(this, arguments), S = 2; S < arguments.length; S++)
          Gs(arguments[S], g.type);
        return Vs(g), g;
      }
      function Ua(i, l) {
        var m = re.transition;
        re.transition = {};
        var g = re.transition;
        re.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          i();
        } finally {
          if (re.transition = m, m === null && g._updatedFibers) {
            var S = g._updatedFibers.size;
            S > 10 && Ve("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), g._updatedFibers.clear();
          }
        }
      }
      var Hs = !1, Mr = null;
      function Ma(i) {
        if (Mr === null)
          try {
            var l = ("require" + Math.random()).slice(0, 7), m = r && r[l];
            Mr = m.call(r, "timers").setImmediate;
          } catch {
            Mr = function(S) {
              Hs === !1 && (Hs = !0, typeof MessageChannel > "u" && P("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var N = new MessageChannel();
              N.port1.onmessage = S, N.port2.postMessage(void 0);
            };
          }
        return Mr(i);
      }
      var Vt = 0, Ks = !1;
      function Ys(i) {
        {
          var l = Vt;
          Vt++, $.current === null && ($.current = []);
          var m = $.isBatchingLegacy, g;
          try {
            if ($.isBatchingLegacy = !0, g = i(), !m && $.didScheduleLegacyUpdate) {
              var S = $.current;
              S !== null && ($.didScheduleLegacyUpdate = !1, jn(S));
            }
          } catch (me) {
            throw Br(l), me;
          } finally {
            $.isBatchingLegacy = m;
          }
          if (g !== null && typeof g == "object" && typeof g.then == "function") {
            var N = g, D = !1, F = {
              then: function(me, ve) {
                D = !0, N.then(function(Ce) {
                  Br(l), Vt === 0 ? Ln(Ce, me, ve) : me(Ce);
                }, function(Ce) {
                  Br(l), ve(Ce);
                });
              }
            };
            return !Ks && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              D || (Ks = !0, P("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), F;
          } else {
            var H = g;
            if (Br(l), Vt === 0) {
              var ae = $.current;
              ae !== null && (jn(ae), $.current = null);
              var de = {
                then: function(me, ve) {
                  $.current === null ? ($.current = [], Ln(H, me, ve)) : me(H);
                }
              };
              return de;
            } else {
              var he = {
                then: function(me, ve) {
                  me(H);
                }
              };
              return he;
            }
          }
        }
      }
      function Br(i) {
        i !== Vt - 1 && P("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Vt = i;
      }
      function Ln(i, l, m) {
        {
          var g = $.current;
          if (g !== null)
            try {
              jn(g), Ma(function() {
                g.length === 0 ? ($.current = null, l(i)) : Ln(i, l, m);
              });
            } catch (S) {
              m(S);
            }
          else
            l(i);
        }
      }
      var $n = !1;
      function jn(i) {
        if (!$n) {
          $n = !0;
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
            $n = !1;
          }
        }
      }
      var Ba = zs, Ga = qa, Va = ja, za = {
        map: St,
        forEach: Pr,
        count: wn,
        toArray: On,
        only: Nr
      };
      e.Children = za, e.Component = V, e.Fragment = a, e.Profiler = u, e.PureComponent = ee, e.StrictMode = o, e.Suspense = y, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, e.act = Ys, e.cloneElement = Ga, e.createContext = kr, e.createElement = Ba, e.createFactory = Va, e.createRef = En, e.forwardRef = In, e.isValidElement = ot, e.lazy = Cn, e.memo = v, e.startTransition = Ua, e.unstable_act = Ys, e.useCallback = Ee, e.useContext = k, e.useDebugValue = et, e.useDeferredValue = ir, e.useEffect = q, e.useId = Dn, e.useImperativeHandle = lt, e.useInsertionEffect = Ae, e.useLayoutEffect = pe, e.useMemo = Pe, e.useReducer = te, e.useRef = G, e.useState = Y, e.useSyncExternalStore = xn, e.useTransition = Ie, e.version = t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fr, fr.exports)), fr.exports;
}
process.env.NODE_ENV === "production" ? ss.exports = fo() : ss.exports = ho();
var Se = ss.exports, or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var li;
function po() {
  if (li) return or;
  li = 1;
  var r = Se, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, f, h) {
    var d, y = {}, A = null, O = null;
    h !== void 0 && (A = "" + h), f.key !== void 0 && (A = "" + f.key), f.ref !== void 0 && (O = f.ref);
    for (d in f) n.call(f, d) && !a.hasOwnProperty(d) && (y[d] = f[d]);
    if (u && u.defaultProps) for (d in f = u.defaultProps, f) y[d] === void 0 && (y[d] = f[d]);
    return { $$typeof: e, type: u, key: A, ref: O, props: y, _owner: s.current };
  }
  return or.Fragment = t, or.jsx = o, or.jsxs = o, or;
}
var ur = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ci;
function mo() {
  return ci || (ci = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Se, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), w = Symbol.iterator, I = "@@iterator";
    function T(c) {
      if (c === null || typeof c != "object")
        return null;
      var v = w && c[w] || c[I];
      return typeof v == "function" ? v : null;
    }
    var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(c) {
      {
        for (var v = arguments.length, _ = new Array(v > 1 ? v - 1 : 0), k = 1; k < v; k++)
          _[k - 1] = arguments[k];
        W("error", c, _);
      }
    }
    function W(c, v, _) {
      {
        var k = L.ReactDebugCurrentFrame, Y = k.getStackAddendum();
        Y !== "" && (v += "%s", _ = _.concat([Y]));
        var te = _.map(function(G) {
          return String(G);
        });
        te.unshift("Warning: " + v), Function.prototype.apply.call(console[c], console, te);
      }
    }
    var re = !1, $ = !1, X = !1, fe = !1, ne = !1, Re;
    Re = Symbol.for("react.module.reference");
    function Me(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === a || ne || c === s || c === h || c === d || fe || c === O || re || $ || X || typeof c == "object" && c !== null && (c.$$typeof === A || c.$$typeof === y || c.$$typeof === o || c.$$typeof === u || c.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === Re || c.getModuleId !== void 0));
    }
    function le(c, v, _) {
      var k = c.displayName;
      if (k)
        return k;
      var Y = v.displayName || v.name || "";
      return Y !== "" ? _ + "(" + Y + ")" : _;
    }
    function De(c) {
      return c.displayName || "Context";
    }
    function _e(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
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
            return De(v) + ".Consumer";
          case o:
            var _ = c;
            return De(_._context) + ".Provider";
          case f:
            return le(c, c.render, "ForwardRef");
          case y:
            var k = c.displayName || null;
            return k !== null ? k : _e(c.type) || "Memo";
          case A: {
            var Y = c, te = Y._payload, G = Y._init;
            try {
              return _e(G(te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var we = Object.assign, Oe = 0, Ve, P, He, Et, Ze, p, R;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function V() {
      {
        if (Oe === 0) {
          Ve = console.log, P = console.info, He = console.warn, Et = console.error, Ze = console.group, p = console.groupCollapsed, R = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: B,
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
        Oe++;
      }
    }
    function K() {
      {
        if (Oe--, Oe === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: we({}, c, {
              value: Ve
            }),
            info: we({}, c, {
              value: P
            }),
            warn: we({}, c, {
              value: He
            }),
            error: we({}, c, {
              value: Et
            }),
            group: we({}, c, {
              value: Ze
            }),
            groupCollapsed: we({}, c, {
              value: p
            }),
            groupEnd: we({}, c, {
              value: R
            })
          });
        }
        Oe < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = L.ReactCurrentDispatcher, ie;
    function se(c, v, _) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (Y) {
            var k = Y.stack.trim().match(/\n( *(at )?)/);
            ie = k && k[1] || "";
          }
        return `
` + ie + c;
      }
    }
    var ee = !1, be;
    {
      var En = typeof WeakMap == "function" ? WeakMap : Map;
      be = new En();
    }
    function Tr(c, v) {
      if (!c || ee)
        return "";
      {
        var _ = be.get(c);
        if (_ !== void 0)
          return _;
      }
      var k;
      ee = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = ue.current, ue.current = null, V();
      try {
        if (v) {
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
            } catch (Ie) {
              k = Ie;
            }
            Reflect.construct(c, [], G);
          } else {
            try {
              G.call();
            } catch (Ie) {
              k = Ie;
            }
            c.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ie) {
            k = Ie;
          }
          c();
        }
      } catch (Ie) {
        if (Ie && k && typeof Ie.stack == "string") {
          for (var q = Ie.stack.split(`
`), Ae = k.stack.split(`
`), pe = q.length - 1, Ee = Ae.length - 1; pe >= 1 && Ee >= 0 && q[pe] !== Ae[Ee]; )
            Ee--;
          for (; pe >= 1 && Ee >= 0; pe--, Ee--)
            if (q[pe] !== Ae[Ee]) {
              if (pe !== 1 || Ee !== 1)
                do
                  if (pe--, Ee--, Ee < 0 || q[pe] !== Ae[Ee]) {
                    var Pe = `
` + q[pe].replace(" at new ", " at ");
                    return c.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", c.displayName)), typeof c == "function" && be.set(c, Pe), Pe;
                  }
                while (pe >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        ee = !1, ue.current = te, K(), Error.prepareStackTrace = Y;
      }
      var lt = c ? c.displayName || c.name : "", et = lt ? se(lt) : "";
      return typeof c == "function" && be.set(c, et), et;
    }
    function jt(c, v, _) {
      return Tr(c, !1);
    }
    function gn(c) {
      var v = c.prototype;
      return !!(v && v.isReactComponent);
    }
    function qt(c, v, _) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return Tr(c, gn(c));
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
            return qt(c.type, v, _);
          case A: {
            var k = c, Y = k._payload, te = k._init;
            try {
              return qt(te(Y), v, _);
            } catch {
            }
          }
        }
      return "";
    }
    var it = Object.prototype.hasOwnProperty, gt = {}, wr = L.ReactDebugCurrentFrame;
    function bt(c) {
      if (c) {
        var v = c._owner, _ = qt(c.type, c._source, v ? v.type : null);
        wr.setExtraStackFrame(_);
      } else
        wr.setExtraStackFrame(null);
    }
    function Ke(c, v, _, k, Y) {
      {
        var te = Function.call.bind(it);
        for (var G in c)
          if (te(c, G)) {
            var q = void 0;
            try {
              if (typeof c[G] != "function") {
                var Ae = Error((k || "React class") + ": " + _ + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ae.name = "Invariant Violation", Ae;
              }
              q = c[G](v, G, k, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pe) {
              q = pe;
            }
            q && !(q instanceof Error) && (bt(Y), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", _, G, typeof q), bt(null)), q instanceof Error && !(q.message in gt) && (gt[q.message] = !0, bt(Y), x("Failed %s type: %s", _, q.message), bt(null));
          }
      }
    }
    var vt = Array.isArray;
    function Ut(c) {
      return vt(c);
    }
    function Or(c) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, _ = v && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return _;
      }
    }
    function Ar(c) {
      try {
        return Mt(c), !1;
      } catch {
        return !0;
      }
    }
    function Mt(c) {
      return "" + c;
    }
    function rr(c) {
      if (Ar(c))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(c)), Mt(c);
    }
    var at = L.ReactCurrentOwner, bn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Cr, Ir, Rt;
    Rt = {};
    function vn(c) {
      if (it.call(c, "ref")) {
        var v = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Rn(c) {
      if (it.call(c, "key")) {
        var v = Object.getOwnPropertyDescriptor(c, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function _n(c, v) {
      if (typeof c.ref == "string" && at.current && v && at.current.stateNode !== v) {
        var _ = _e(at.current.type);
        Rt[_] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _e(at.current.type), c.ref), Rt[_] = !0);
      }
    }
    function ot(c, v) {
      {
        var _ = function() {
          Cr || (Cr = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        _.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Dr(c, v) {
      {
        var _ = function() {
          Ir || (Ir = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        _.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var Sn = function(c, v, _, k, Y, te, G) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: v,
        ref: _,
        props: G,
        // Record the component responsible for creating this element.
        _owner: te
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function Tn(c, v, _, k, Y) {
      {
        var te, G = {}, q = null, Ae = null;
        _ !== void 0 && (rr(_), q = "" + _), Rn(v) && (rr(v.key), q = "" + v.key), vn(v) && (Ae = v.ref, _n(v, Y));
        for (te in v)
          it.call(v, te) && !bn.hasOwnProperty(te) && (G[te] = v[te]);
        if (c && c.defaultProps) {
          var pe = c.defaultProps;
          for (te in pe)
            G[te] === void 0 && (G[te] = pe[te]);
        }
        if (q || Ae) {
          var Ee = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          q && ot(G, Ee), Ae && Dr(G, Ee);
        }
        return Sn(c, q, Ae, Y, k, at.current, G);
      }
    }
    var Bt = L.ReactCurrentOwner, xr = L.ReactDebugCurrentFrame;
    function Xe(c) {
      if (c) {
        var v = c._owner, _ = qt(c.type, c._source, v ? v.type : null);
        xr.setExtraStackFrame(_);
      } else
        xr.setExtraStackFrame(null);
    }
    var _t;
    _t = !1;
    function ut(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function St() {
      {
        if (Bt.current) {
          var c = _e(Bt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function wn(c) {
      return "";
    }
    var Pr = {};
    function On(c) {
      {
        var v = St();
        if (!v) {
          var _ = typeof c == "string" ? c : c.displayName || c.name;
          _ && (v = `

Check the top-level render call using <` + _ + ">.");
        }
        return v;
      }
    }
    function Nr(c, v) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var _ = On(v);
        if (Pr[_])
          return;
        Pr[_] = !0;
        var k = "";
        c && c._owner && c._owner !== Bt.current && (k = " It was passed a child from " + _e(c._owner.type) + "."), Xe(c), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, k), Xe(null);
      }
    }
    function kr(c, v) {
      {
        if (typeof c != "object")
          return;
        if (Ut(c))
          for (var _ = 0; _ < c.length; _++) {
            var k = c[_];
            ut(k) && Nr(k, v);
          }
        else if (ut(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var Y = T(c);
          if (typeof Y == "function" && Y !== c.entries)
            for (var te = Y.call(c), G; !(G = te.next()).done; )
              ut(G.value) && Nr(G.value, v);
        }
      }
    }
    function Tt(c) {
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
          var k = _e(v);
          Ke(_, c.props, "prop", k, c);
        } else if (v.PropTypes !== void 0 && !_t) {
          _t = !0;
          var Y = _e(v);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(c) {
      {
        for (var v = Object.keys(c.props), _ = 0; _ < v.length; _++) {
          var k = v[_];
          if (k !== "children" && k !== "key") {
            Xe(c), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Xe(null);
            break;
          }
        }
        c.ref !== null && (Xe(c), x("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    var sr = {};
    function Fr(c, v, _, k, Y, te) {
      {
        var G = Me(c);
        if (!G) {
          var q = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = wn();
          Ae ? q += Ae : q += St();
          var pe;
          c === null ? pe = "null" : Ut(c) ? pe = "array" : c !== void 0 && c.$$typeof === e ? (pe = "<" + (_e(c.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof c, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, q);
        }
        var Ee = Tn(c, v, _, Y, te);
        if (Ee == null)
          return Ee;
        if (G) {
          var Pe = v.children;
          if (Pe !== void 0)
            if (k)
              if (Ut(Pe)) {
                for (var lt = 0; lt < Pe.length; lt++)
                  kr(Pe[lt], c);
                Object.freeze && Object.freeze(Pe);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              kr(Pe, c);
        }
        if (it.call(v, "key")) {
          var et = _e(c), Ie = Object.keys(v).filter(function(xn) {
            return xn !== "key";
          }), ir = Ie.length > 0 ? "{key: someKey, " + Ie.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[et + ir]) {
            var Dn = Ie.length > 0 ? "{" + Ie.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ir, et, Dn, et), sr[et + ir] = !0;
          }
        }
        return c === n ? nr(Ee) : Tt(Ee), Ee;
      }
    }
    function An(c, v, _) {
      return Fr(c, v, _, !0);
    }
    function Cn(c, v, _) {
      return Fr(c, v, _, !1);
    }
    var In = Cn, Lr = An;
    ur.Fragment = n, ur.jsx = In, ur.jsxs = Lr;
  }()), ur;
}
process.env.NODE_ENV === "production" ? po() : mo();
var yo = Se.createContext(
  void 0
), $i = (r) => {
  const e = Se.useContext(yo);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, ji = Se.createContext(!1), Eo = () => Se.useContext(ji);
ji.Provider;
function go() {
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
var bo = Se.createContext(go()), vo = () => Se.useContext(bo);
function qi(r, e) {
  return typeof r == "function" ? r(...e) : !!r;
}
function Ro() {
}
var _o = (r, e) => {
  (r.suspense || r.throwOnError) && (e.isReset() || (r.retryOnMount = !1));
}, So = (r) => {
  Se.useEffect(() => {
    r.clearReset();
  }, [r]);
}, To = ({
  result: r,
  errorResetBoundary: e,
  throwOnError: t,
  query: n
}) => r.isError && !e.isReset() && !r.isFetching && n && qi(t, [r.error, n]), wo = (r) => {
  r.suspense && (typeof r.staleTime != "number" && (r.staleTime = 1e3), typeof r.gcTime == "number" && (r.gcTime = Math.max(r.gcTime, 1e3)));
}, Oo = (r, e) => (r == null ? void 0 : r.suspense) && e.isPending, Ao = (r, e, t) => e.fetchOptimistic(r).catch(() => {
  t.clearReset();
});
function Co(r, e, t) {
  var h, d, y, A;
  if (process.env.NODE_ENV !== "production" && (typeof r != "object" || Array.isArray(r)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = $i(), s = Eo(), a = vo(), o = n.defaultQueryOptions(r);
  (d = (h = n.getDefaultOptions().queries) == null ? void 0 : h._experimental_beforeQuery) == null || d.call(
    h,
    o
  ), o._optimisticResults = s ? "isRestoring" : "optimistic", wo(o), _o(o, a), So(a);
  const [u] = Se.useState(
    () => new e(
      n,
      o
    )
  ), f = u.getOptimisticResult(o);
  if (Se.useSyncExternalStore(
    Se.useCallback(
      (O) => {
        const w = s ? () => {
        } : u.subscribe(on.batchCalls(O));
        return u.updateResult(), w;
      },
      [u, s]
    ),
    () => u.getCurrentResult(),
    () => u.getCurrentResult()
  ), Se.useEffect(() => {
    u.setOptions(o, { listeners: !1 });
  }, [o, u]), Oo(o, f))
    throw Ao(o, u, a);
  if (To({
    result: f,
    errorResetBoundary: a,
    throwOnError: o.throwOnError,
    query: n.getQueryCache().get(o.queryHash)
  }))
    throw f.error;
  return (A = (y = n.getDefaultOptions().queries) == null ? void 0 : y._experimental_afterQuery) == null || A.call(
    y,
    o,
    f
  ), o.notifyOnChangeProps ? f : u.trackResult(f);
}
function Ge(r, e) {
  return Co(r, ao);
}
function Te(r, e) {
  const t = $i(), [n] = Se.useState(
    () => new lo(
      t,
      r
    )
  );
  Se.useEffect(() => {
    n.setOptions(r);
  }, [n, r]);
  const s = Se.useSyncExternalStore(
    Se.useCallback(
      (o) => n.subscribe(on.batchCalls(o)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), a = Se.useCallback(
    (o, u) => {
      n.mutate(o, u).catch(Ro);
    },
    [n]
  );
  if (s.error && qi(n.options.throwOnError, [s.error]))
    throw s.error;
  return { ...s, mutate: a, mutateAsync: s.mutate };
}
function Ui(r, e) {
  return function() {
    return r.apply(e, arguments);
  };
}
const { toString: Io } = Object.prototype, { getPrototypeOf: vs } = Object, un = /* @__PURE__ */ ((r) => (e) => {
  const t = Io.call(e);
  return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), We = (r) => (r = r.toLowerCase(), (e) => un(e) === r), ln = (r) => (e) => typeof e === r, { isArray: er } = Array, dr = ln("undefined");
function Do(r) {
  return r !== null && !dr(r) && r.constructor !== null && !dr(r.constructor) && Ue(r.constructor.isBuffer) && r.constructor.isBuffer(r);
}
const Mi = We("ArrayBuffer");
function xo(r) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && Mi(r.buffer), e;
}
const Po = ln("string"), Ue = ln("function"), Bi = ln("number"), cn = (r) => r !== null && typeof r == "object", No = (r) => r === !0 || r === !1, Hr = (r) => {
  if (un(r) !== "object")
    return !1;
  const e = vs(r);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
}, ko = We("Date"), Fo = We("File"), Lo = We("Blob"), $o = We("FileList"), jo = (r) => cn(r) && Ue(r.pipe), qo = (r) => {
  let e;
  return r && (typeof FormData == "function" && r instanceof FormData || Ue(r.append) && ((e = un(r)) === "formdata" || // detect form-data instance
  e === "object" && Ue(r.toString) && r.toString() === "[object FormData]"));
}, Uo = We("URLSearchParams"), [Mo, Bo, Go, Vo] = ["ReadableStream", "Request", "Response", "Headers"].map(We), zo = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function mr(r, e, { allOwnKeys: t = !1 } = {}) {
  if (r === null || typeof r > "u")
    return;
  let n, s;
  if (typeof r != "object" && (r = [r]), er(r))
    for (n = 0, s = r.length; n < s; n++)
      e.call(null, r[n], n, r);
  else {
    const a = t ? Object.getOwnPropertyNames(r) : Object.keys(r), o = a.length;
    let u;
    for (n = 0; n < o; n++)
      u = a[n], e.call(null, r[u], u, r);
  }
}
function Gi(r, e) {
  e = e.toLowerCase();
  const t = Object.keys(r);
  let n = t.length, s;
  for (; n-- > 0; )
    if (s = t[n], e === s.toLowerCase())
      return s;
  return null;
}
const wt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Vi = (r) => !dr(r) && r !== wt;
function is() {
  const { caseless: r } = Vi(this) && this || {}, e = {}, t = (n, s) => {
    const a = r && Gi(e, s) || s;
    Hr(e[a]) && Hr(n) ? e[a] = is(e[a], n) : Hr(n) ? e[a] = is({}, n) : er(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && mr(arguments[n], t);
  return e;
}
const Wo = (r, e, t, { allOwnKeys: n } = {}) => (mr(e, (s, a) => {
  t && Ue(s) ? r[a] = Ui(s, t) : r[a] = s;
}, { allOwnKeys: n }), r), Ho = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), Ko = (r, e, t, n) => {
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
    r = t !== !1 && vs(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}, Qo = (r, e, t) => {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  const n = r.indexOf(e, t);
  return n !== -1 && n === t;
}, Jo = (r) => {
  if (!r) return null;
  if (er(r)) return r;
  let e = r.length;
  if (!Bi(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = r[e];
  return t;
}, Zo = /* @__PURE__ */ ((r) => (e) => r && e instanceof r)(typeof Uint8Array < "u" && vs(Uint8Array)), Xo = (r, e) => {
  const n = (r && r[Symbol.iterator]).call(r);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    e.call(r, a[0], a[1]);
  }
}, eu = (r, e) => {
  let t;
  const n = [];
  for (; (t = r.exec(e)) !== null; )
    n.push(t);
  return n;
}, tu = We("HTMLFormElement"), ru = (r) => r.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, s) {
    return n.toUpperCase() + s;
  }
), fi = (({ hasOwnProperty: r }) => (e, t) => r.call(e, t))(Object.prototype), nu = We("RegExp"), zi = (r, e) => {
  const t = Object.getOwnPropertyDescriptors(r), n = {};
  mr(t, (s, a) => {
    let o;
    (o = e(s, a, r)) !== !1 && (n[a] = o || s);
  }), Object.defineProperties(r, n);
}, su = (r) => {
  zi(r, (e, t) => {
    if (Ue(r) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = r[t];
    if (Ue(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, iu = (r, e) => {
  const t = {}, n = (s) => {
    s.forEach((a) => {
      t[a] = !0;
    });
  };
  return er(r) ? n(r) : n(String(r).split(e)), t;
}, au = () => {
}, ou = (r, e) => r != null && Number.isFinite(r = +r) ? r : e, Mn = "abcdefghijklmnopqrstuvwxyz", di = "0123456789", Wi = {
  DIGIT: di,
  ALPHA: Mn,
  ALPHA_DIGIT: Mn + Mn.toUpperCase() + di
}, uu = (r = 16, e = Wi.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = e;
  for (; r--; )
    t += e[Math.random() * n | 0];
  return t;
};
function lu(r) {
  return !!(r && Ue(r.append) && r[Symbol.toStringTag] === "FormData" && r[Symbol.iterator]);
}
const cu = (r) => {
  const e = new Array(10), t = (n, s) => {
    if (cn(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const a = er(n) ? [] : {};
        return mr(n, (o, u) => {
          const f = t(o, s + 1);
          !dr(f) && (a[u] = f);
        }), e[s] = void 0, a;
      }
    }
    return n;
  };
  return t(r, 0);
}, fu = We("AsyncFunction"), du = (r) => r && (cn(r) || Ue(r)) && Ue(r.then) && Ue(r.catch), Hi = ((r, e) => r ? setImmediate : e ? ((t, n) => (wt.addEventListener("message", ({ source: s, data: a }) => {
  s === wt && a === t && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), wt.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  Ue(wt.postMessage)
), hu = typeof queueMicrotask < "u" ? queueMicrotask.bind(wt) : typeof process < "u" && process.nextTick || Hi, E = {
  isArray: er,
  isArrayBuffer: Mi,
  isBuffer: Do,
  isFormData: qo,
  isArrayBufferView: xo,
  isString: Po,
  isNumber: Bi,
  isBoolean: No,
  isObject: cn,
  isPlainObject: Hr,
  isReadableStream: Mo,
  isRequest: Bo,
  isResponse: Go,
  isHeaders: Vo,
  isUndefined: dr,
  isDate: ko,
  isFile: Fo,
  isBlob: Lo,
  isRegExp: nu,
  isFunction: Ue,
  isStream: jo,
  isURLSearchParams: Uo,
  isTypedArray: Zo,
  isFileList: $o,
  forEach: mr,
  merge: is,
  extend: Wo,
  trim: zo,
  stripBOM: Ho,
  inherits: Ko,
  toFlatObject: Yo,
  kindOf: un,
  kindOfTest: We,
  endsWith: Qo,
  toArray: Jo,
  forEachEntry: Xo,
  matchAll: eu,
  isHTMLForm: tu,
  hasOwnProperty: fi,
  hasOwnProp: fi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zi,
  freezeMethods: su,
  toObjectSet: iu,
  toCamelCase: ru,
  noop: au,
  toFiniteNumber: ou,
  findKey: Gi,
  global: wt,
  isContextDefined: Vi,
  ALPHABET: Wi,
  generateString: uu,
  isSpecCompliantForm: lu,
  toJSONObject: cu,
  isAsyncFn: fu,
  isThenable: du,
  setImmediate: Hi,
  asap: hu
};
function j(r, e, t, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
E.inherits(j, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ki = j.prototype, Yi = {};
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
  Yi[r] = { value: r };
});
Object.defineProperties(j, Yi);
Object.defineProperty(Ki, "isAxiosError", { value: !0 });
j.from = (r, e, t, n, s, a) => {
  const o = Object.create(Ki);
  return E.toFlatObject(r, o, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError"), j.call(o, r.message, e, t, n, s), o.cause = r, o.name = r.name, a && Object.assign(o, a), o;
};
const pu = null;
function as(r) {
  return E.isPlainObject(r) || E.isArray(r);
}
function Qi(r) {
  return E.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function hi(r, e, t) {
  return r ? r.concat(e).map(function(s, a) {
    return s = Qi(s), !t && a ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function mu(r) {
  return E.isArray(r) && !r.some(as);
}
const yu = E.toFlatObject(E, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function fn(r, e, t) {
  if (!E.isObject(r))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = E.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(I, T) {
    return !E.isUndefined(T[I]);
  });
  const n = t.metaTokens, s = t.visitor || d, a = t.dots, o = t.indexes, f = (t.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(e);
  if (!E.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(w) {
    if (w === null) return "";
    if (E.isDate(w))
      return w.toISOString();
    if (!f && E.isBlob(w))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(w) || E.isTypedArray(w) ? f && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function d(w, I, T) {
    let L = w;
    if (w && !T && typeof w == "object") {
      if (E.endsWith(I, "{}"))
        I = n ? I : I.slice(0, -2), w = JSON.stringify(w);
      else if (E.isArray(w) && mu(w) || (E.isFileList(w) || E.endsWith(I, "[]")) && (L = E.toArray(w)))
        return I = Qi(I), L.forEach(function(W, re) {
          !(E.isUndefined(W) || W === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? hi([I], re, a) : o === null ? I : I + "[]",
            h(W)
          );
        }), !1;
    }
    return as(w) ? !0 : (e.append(hi(T, I, a), h(w)), !1);
  }
  const y = [], A = Object.assign(yu, {
    defaultVisitor: d,
    convertValue: h,
    isVisitable: as
  });
  function O(w, I) {
    if (!E.isUndefined(w)) {
      if (y.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + I.join("."));
      y.push(w), E.forEach(w, function(L, x) {
        (!(E.isUndefined(L) || L === null) && s.call(
          e,
          L,
          E.isString(x) ? x.trim() : x,
          I,
          A
        )) === !0 && O(L, I ? I.concat(x) : [x]);
      }), y.pop();
    }
  }
  if (!E.isObject(r))
    throw new TypeError("data must be an object");
  return O(r), e;
}
function pi(r) {
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
function Rs(r, e) {
  this._pairs = [], r && fn(r, this, e);
}
const Ji = Rs.prototype;
Ji.append = function(e, t) {
  this._pairs.push([e, t]);
};
Ji.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, pi);
  } : pi;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function Eu(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Zi(r, e, t) {
  if (!e)
    return r;
  const n = t && t.encode || Eu, s = t && t.serialize;
  let a;
  if (s ? a = s(e, t) : a = E.isURLSearchParams(e) ? e.toString() : new Rs(e, t).toString(n), a) {
    const o = r.indexOf("#");
    o !== -1 && (r = r.slice(0, o)), r += (r.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return r;
}
class mi {
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
    E.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Xi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gu = typeof URLSearchParams < "u" ? URLSearchParams : Rs, bu = typeof FormData < "u" ? FormData : null, vu = typeof Blob < "u" ? Blob : null, Ru = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gu,
    FormData: bu,
    Blob: vu
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, _s = typeof window < "u" && typeof document < "u", os = typeof navigator == "object" && navigator || void 0, _u = _s && (!os || ["ReactNative", "NativeScript", "NS"].indexOf(os.product) < 0), Su = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Tu = _s && window.location.href || "http://localhost", wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _s,
  hasStandardBrowserEnv: _u,
  hasStandardBrowserWebWorkerEnv: Su,
  navigator: os,
  origin: Tu
}, Symbol.toStringTag, { value: "Module" })), $e = {
  ...wu,
  ...Ru
};
function Ou(r, e) {
  return fn(r, new $e.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, s, a) {
      return $e.isNode && E.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Au(r) {
  return E.matchAll(/\w+|\[(\w*)]/g, r).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
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
function ea(r) {
  function e(t, n, s, a) {
    let o = t[a++];
    if (o === "__proto__") return !0;
    const u = Number.isFinite(+o), f = a >= t.length;
    return o = !o && E.isArray(s) ? s.length : o, f ? (E.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !u) : ((!s[o] || !E.isObject(s[o])) && (s[o] = []), e(t, n, s[o], a) && E.isArray(s[o]) && (s[o] = Cu(s[o])), !u);
  }
  if (E.isFormData(r) && E.isFunction(r.entries)) {
    const t = {};
    return E.forEachEntry(r, (n, s) => {
      e(Au(n), s, t, 0);
    }), t;
  }
  return null;
}
function Iu(r, e, t) {
  if (E.isString(r))
    try {
      return (e || JSON.parse)(r), E.trim(r);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(r);
}
const yr = {
  transitional: Xi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", s = n.indexOf("application/json") > -1, a = E.isObject(e);
    if (a && E.isHTMLForm(e) && (e = new FormData(e)), E.isFormData(e))
      return s ? JSON.stringify(ea(e)) : e;
    if (E.isArrayBuffer(e) || E.isBuffer(e) || E.isStream(e) || E.isFile(e) || E.isBlob(e) || E.isReadableStream(e))
      return e;
    if (E.isArrayBufferView(e))
      return e.buffer;
    if (E.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let u;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ou(e, this.formSerializer).toString();
      if ((u = E.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return fn(
          u ? { "files[]": e } : e,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || s ? (t.setContentType("application/json", !1), Iu(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || yr.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (E.isResponse(e) || E.isReadableStream(e))
      return e;
    if (e && E.isString(e) && (n && !this.responseType || s)) {
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
    FormData: $e.classes.FormData,
    Blob: $e.classes.Blob
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
E.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  yr.headers[r] = {};
});
const Du = E.toObjectSet([
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
]), xu = (r) => {
  const e = {};
  let t, n, s;
  return r && r.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!t || e[t] && Du[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, yi = Symbol("internals");
function lr(r) {
  return r && String(r).trim().toLowerCase();
}
function Kr(r) {
  return r === !1 || r == null ? r : E.isArray(r) ? r.map(Kr) : String(r);
}
function Pu(r) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(r); )
    e[n[1]] = n[2];
  return e;
}
const Nu = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function Bn(r, e, t, n, s) {
  if (E.isFunction(n))
    return n.call(this, e, t);
  if (s && (e = t), !!E.isString(e)) {
    if (E.isString(n))
      return e.indexOf(n) !== -1;
    if (E.isRegExp(n))
      return n.test(e);
  }
}
function ku(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Fu(r, e) {
  const t = E.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(r, n + t, {
      value: function(s, a, o) {
        return this[n].call(this, e, s, a, o);
      },
      configurable: !0
    });
  });
}
class je {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const s = this;
    function a(u, f, h) {
      const d = lr(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const y = E.findKey(s, d);
      (!y || s[y] === void 0 || h === !0 || h === void 0 && s[y] !== !1) && (s[y || f] = Kr(u));
    }
    const o = (u, f) => E.forEach(u, (h, d) => a(h, d, f));
    if (E.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (E.isString(e) && (e = e.trim()) && !Nu(e))
      o(xu(e), t);
    else if (E.isHeaders(e))
      for (const [u, f] of e.entries())
        a(f, u, n);
    else
      e != null && a(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = lr(e), e) {
      const n = E.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!t)
          return s;
        if (t === !0)
          return Pu(s);
        if (E.isFunction(t))
          return t.call(this, s, n);
        if (E.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = lr(e), e) {
      const n = E.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || Bn(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let s = !1;
    function a(o) {
      if (o = lr(o), o) {
        const u = E.findKey(n, o);
        u && (!t || Bn(n, n[u], u, t)) && (delete n[u], s = !0);
      }
    }
    return E.isArray(e) ? e.forEach(a) : a(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, s = !1;
    for (; n--; ) {
      const a = t[n];
      (!e || Bn(this, this[a], a, e, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, n = {};
    return E.forEach(this, (s, a) => {
      const o = E.findKey(n, a);
      if (o) {
        t[o] = Kr(s), delete t[a];
        return;
      }
      const u = e ? ku(a) : String(a).trim();
      u !== a && delete t[a], t[u] = Kr(s), n[u] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (n, s) => {
      n != null && n !== !1 && (t[s] = e && E.isArray(n) ? n.join(", ") : n);
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
    const n = (this[yi] = this[yi] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const u = lr(o);
      n[u] || (Fu(s, o), n[u] = !0);
    }
    return E.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(je.prototype, ({ value: r }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => r,
    set(n) {
      this[t] = n;
    }
  };
});
E.freezeMethods(je);
function Gn(r, e) {
  const t = this || yr, n = e || t, s = je.from(n.headers);
  let a = n.data;
  return E.forEach(r, function(u) {
    a = u.call(t, a, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), a;
}
function ta(r) {
  return !!(r && r.__CANCEL__);
}
function tr(r, e, t) {
  j.call(this, r ?? "canceled", j.ERR_CANCELED, e, t), this.name = "CanceledError";
}
E.inherits(tr, j, {
  __CANCEL__: !0
});
function ra(r, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? r(t) : e(new j(
    "Request failed with status code " + t.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function Lu(r) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return e && e[1] || "";
}
function $u(r, e) {
  r = r || 10;
  const t = new Array(r), n = new Array(r);
  let s = 0, a = 0, o;
  return e = e !== void 0 ? e : 1e3, function(f) {
    const h = Date.now(), d = n[a];
    o || (o = h), t[s] = f, n[s] = h;
    let y = a, A = 0;
    for (; y !== s; )
      A += t[y++], y = y % r;
    if (s = (s + 1) % r, s === a && (a = (a + 1) % r), h - o < e)
      return;
    const O = d && h - d;
    return O ? Math.round(A * 1e3 / O) : void 0;
  };
}
function ju(r, e) {
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
const tn = (r, e, t = 3) => {
  let n = 0;
  const s = $u(50, 250);
  return ju((a) => {
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
}, Ei = (r, e) => {
  const t = r != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: r,
    loaded: n
  }), e[1]];
}, gi = (r) => (...e) => E.asap(() => r(...e)), qu = $e.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = $e.navigator && /(msie|trident)/i.test($e.navigator.userAgent), t = document.createElement("a");
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
      const u = E.isString(o) ? s(o) : o;
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
), Uu = $e.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(r, e, t, n, s, a) {
      const o = [r + "=" + encodeURIComponent(e)];
      E.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), E.isString(n) && o.push("path=" + n), E.isString(s) && o.push("domain=" + s), a === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function Mu(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function Bu(r, e) {
  return e ? r.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : r;
}
function na(r, e) {
  return r && !Mu(e) ? Bu(r, e) : e;
}
const bi = (r) => r instanceof je ? { ...r } : r;
function Ft(r, e) {
  e = e || {};
  const t = {};
  function n(h, d, y) {
    return E.isPlainObject(h) && E.isPlainObject(d) ? E.merge.call({ caseless: y }, h, d) : E.isPlainObject(d) ? E.merge({}, d) : E.isArray(d) ? d.slice() : d;
  }
  function s(h, d, y) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(h))
        return n(void 0, h, y);
    } else return n(h, d, y);
  }
  function a(h, d) {
    if (!E.isUndefined(d))
      return n(void 0, d);
  }
  function o(h, d) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(h))
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
  return E.forEach(Object.keys(Object.assign({}, r, e)), function(d) {
    const y = f[d] || s, A = y(r[d], e[d], d);
    E.isUndefined(A) && y !== u || (t[d] = A);
  }), t;
}
const sa = (r) => {
  const e = Ft({}, r);
  let { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: a, headers: o, auth: u } = e;
  e.headers = o = je.from(o), e.url = Zi(na(e.baseURL, e.url), r.params, r.paramsSerializer), u && o.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let f;
  if (E.isFormData(t)) {
    if ($e.hasStandardBrowserEnv || $e.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((f = o.getContentType()) !== !1) {
      const [h, ...d] = f ? f.split(";").map((y) => y.trim()).filter(Boolean) : [];
      o.setContentType([h || "multipart/form-data", ...d].join("; "));
    }
  }
  if ($e.hasStandardBrowserEnv && (n && E.isFunction(n) && (n = n(e)), n || n !== !1 && qu(e.url))) {
    const h = s && a && Uu.read(a);
    h && o.set(s, h);
  }
  return e;
}, Gu = typeof XMLHttpRequest < "u", Vu = Gu && function(r) {
  return new Promise(function(t, n) {
    const s = sa(r);
    let a = s.data;
    const o = je.from(s.headers).normalize();
    let { responseType: u, onUploadProgress: f, onDownloadProgress: h } = s, d, y, A, O, w;
    function I() {
      O && O(), w && w(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let T = new XMLHttpRequest();
    T.open(s.method.toUpperCase(), s.url, !0), T.timeout = s.timeout;
    function L() {
      if (!T)
        return;
      const W = je.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), $ = {
        data: !u || u === "text" || u === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: W,
        config: r,
        request: T
      };
      ra(function(fe) {
        t(fe), I();
      }, function(fe) {
        n(fe), I();
      }, $), T = null;
    }
    "onloadend" in T ? T.onloadend = L : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(L);
    }, T.onabort = function() {
      T && (n(new j("Request aborted", j.ECONNABORTED, r, T)), T = null);
    }, T.onerror = function() {
      n(new j("Network Error", j.ERR_NETWORK, r, T)), T = null;
    }, T.ontimeout = function() {
      let re = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const $ = s.transitional || Xi;
      s.timeoutErrorMessage && (re = s.timeoutErrorMessage), n(new j(
        re,
        $.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        r,
        T
      )), T = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in T && E.forEach(o.toJSON(), function(re, $) {
      T.setRequestHeader($, re);
    }), E.isUndefined(s.withCredentials) || (T.withCredentials = !!s.withCredentials), u && u !== "json" && (T.responseType = s.responseType), h && ([A, w] = tn(h, !0), T.addEventListener("progress", A)), f && T.upload && ([y, O] = tn(f), T.upload.addEventListener("progress", y), T.upload.addEventListener("loadend", O)), (s.cancelToken || s.signal) && (d = (W) => {
      T && (n(!W || W.type ? new tr(null, r, T) : W), T.abort(), T = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const x = Lu(s.url);
    if (x && $e.protocols.indexOf(x) === -1) {
      n(new j("Unsupported protocol " + x + ":", j.ERR_BAD_REQUEST, r));
      return;
    }
    T.send(a || null);
  });
}, zu = (r, e) => {
  const { length: t } = r = r ? r.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), s;
    const a = function(h) {
      if (!s) {
        s = !0, u();
        const d = h instanceof Error ? h : this.reason;
        n.abort(d instanceof j ? d : new tr(d instanceof Error ? d.message : d));
      }
    };
    let o = e && setTimeout(() => {
      o = null, a(new j(`timeout ${e} of ms exceeded`, j.ETIMEDOUT));
    }, e);
    const u = () => {
      r && (o && clearTimeout(o), o = null, r.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(a) : h.removeEventListener("abort", a);
      }), r = null);
    };
    r.forEach((h) => h.addEventListener("abort", a));
    const { signal: f } = n;
    return f.unsubscribe = () => E.asap(u), f;
  }
}, Wu = function* (r, e) {
  let t = r.byteLength;
  if (t < e) {
    yield r;
    return;
  }
  let n = 0, s;
  for (; n < t; )
    s = n + e, yield r.slice(n, s), n = s;
}, Hu = async function* (r, e) {
  for await (const t of Ku(r))
    yield* Wu(t, e);
}, Ku = async function* (r) {
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
}, vi = (r, e, t, n) => {
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
          let A = a += y;
          t(A);
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
}, dn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ia = dn && typeof ReadableStream == "function", Yu = dn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (e) => r.encode(e))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), aa = (r, ...e) => {
  try {
    return !!r(...e);
  } catch {
    return !1;
  }
}, Qu = ia && aa(() => {
  let r = !1;
  const e = new Request($e.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return r = !0, "half";
    }
  }).headers.has("Content-Type");
  return r && !e;
}), Ri = 64 * 1024, us = ia && aa(() => E.isReadableStream(new Response("").body)), rn = {
  stream: us && ((r) => r.body)
};
dn && ((r) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !rn[e] && (rn[e] = E.isFunction(r[e]) ? (t) => t[e]() : (t, n) => {
      throw new j(`Response type '${e}' is not supported`, j.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Ju = async (r) => {
  if (r == null)
    return 0;
  if (E.isBlob(r))
    return r.size;
  if (E.isSpecCompliantForm(r))
    return (await new Request($e.origin, {
      method: "POST",
      body: r
    }).arrayBuffer()).byteLength;
  if (E.isArrayBufferView(r) || E.isArrayBuffer(r))
    return r.byteLength;
  if (E.isURLSearchParams(r) && (r = r + ""), E.isString(r))
    return (await Yu(r)).byteLength;
}, Zu = async (r, e) => {
  const t = E.toFiniteNumber(r.getContentLength());
  return t ?? Ju(e);
}, Xu = dn && (async (r) => {
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
    fetchOptions: A
  } = sa(r);
  h = h ? (h + "").toLowerCase() : "text";
  let O = zu([s, a && a.toAbortSignal()], o), w;
  const I = O && O.unsubscribe && (() => {
    O.unsubscribe();
  });
  let T;
  try {
    if (f && Qu && t !== "get" && t !== "head" && (T = await Zu(d, n)) !== 0) {
      let $ = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), X;
      if (E.isFormData(n) && (X = $.headers.get("content-type")) && d.setContentType(X), $.body) {
        const [fe, ne] = Ei(
          T,
          tn(gi(f))
        );
        n = vi($.body, Ri, fe, ne);
      }
    }
    E.isString(y) || (y = y ? "include" : "omit");
    const L = "credentials" in Request.prototype;
    w = new Request(e, {
      ...A,
      signal: O,
      method: t.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: L ? y : void 0
    });
    let x = await fetch(w);
    const W = us && (h === "stream" || h === "response");
    if (us && (u || W && I)) {
      const $ = {};
      ["status", "statusText", "headers"].forEach((Re) => {
        $[Re] = x[Re];
      });
      const X = E.toFiniteNumber(x.headers.get("content-length")), [fe, ne] = u && Ei(
        X,
        tn(gi(u), !0)
      ) || [];
      x = new Response(
        vi(x.body, Ri, fe, () => {
          ne && ne(), I && I();
        }),
        $
      );
    }
    h = h || "text";
    let re = await rn[E.findKey(rn, h) || "text"](x, r);
    return !W && I && I(), await new Promise(($, X) => {
      ra($, X, {
        data: re,
        headers: je.from(x.headers),
        status: x.status,
        statusText: x.statusText,
        config: r,
        request: w
      });
    });
  } catch (L) {
    throw I && I(), L && L.name === "TypeError" && /fetch/i.test(L.message) ? Object.assign(
      new j("Network Error", j.ERR_NETWORK, r, w),
      {
        cause: L.cause || L
      }
    ) : j.from(L, L && L.code, r, w);
  }
}), ls = {
  http: pu,
  xhr: Vu,
  fetch: Xu
};
E.forEach(ls, (r, e) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: e });
    } catch {
    }
    Object.defineProperty(r, "adapterName", { value: e });
  }
});
const _i = (r) => `- ${r}`, el = (r) => E.isFunction(r) || r === null || r === !1, oa = {
  getAdapter: (r) => {
    r = E.isArray(r) ? r : [r];
    const { length: e } = r;
    let t, n;
    const s = {};
    for (let a = 0; a < e; a++) {
      t = r[a];
      let o;
      if (n = t, !el(t) && (n = ls[(o = String(t)).toLowerCase()], n === void 0))
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
` + a.map(_i).join(`
`) : " " + _i(a[0]) : "as no adapter specified";
      throw new j(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ls
};
function Vn(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new tr(null, r);
}
function Si(r) {
  return Vn(r), r.headers = je.from(r.headers), r.data = Gn.call(
    r,
    r.transformRequest
  ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), oa.getAdapter(r.adapter || yr.adapter)(r).then(function(n) {
    return Vn(r), n.data = Gn.call(
      r,
      r.transformResponse,
      n
    ), n.headers = je.from(n.headers), n;
  }, function(n) {
    return ta(n) || (Vn(r), n && n.response && (n.response.data = Gn.call(
      r,
      r.transformResponse,
      n.response
    ), n.response.headers = je.from(n.response.headers))), Promise.reject(n);
  });
}
const ua = "1.7.7", Ss = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, e) => {
  Ss[r] = function(n) {
    return typeof n === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
const Ti = {};
Ss.transitional = function(e, t, n) {
  function s(a, o) {
    return "[Axios v" + ua + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, u) => {
    if (e === !1)
      throw new j(
        s(o, " has been removed" + (t ? " in " + t : "")),
        j.ERR_DEPRECATED
      );
    return t && !Ti[o] && (Ti[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(a, o, u) : !0;
  };
};
function tl(r, e, t) {
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
const cs = {
  assertOptions: tl,
  validators: Ss
}, ct = cs.validators;
class xt {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new mi(),
      response: new mi()
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Ft(this.defaults, t);
    const { transitional: n, paramsSerializer: s, headers: a } = t;
    n !== void 0 && cs.assertOptions(n, {
      silentJSONParsing: ct.transitional(ct.boolean),
      forcedJSONParsing: ct.transitional(ct.boolean),
      clarifyTimeoutError: ct.transitional(ct.boolean)
    }, !1), s != null && (E.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : cs.assertOptions(s, {
      encode: ct.function,
      serialize: ct.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = a && E.merge(
      a.common,
      a[t.method]
    );
    a && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete a[w];
      }
    ), t.headers = je.concat(o, a);
    const u = [];
    let f = !0;
    this.interceptors.request.forEach(function(I) {
      typeof I.runWhen == "function" && I.runWhen(t) === !1 || (f = f && I.synchronous, u.unshift(I.fulfilled, I.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(I) {
      h.push(I.fulfilled, I.rejected);
    });
    let d, y = 0, A;
    if (!f) {
      const w = [Si.bind(this), void 0];
      for (w.unshift.apply(w, u), w.push.apply(w, h), A = w.length, d = Promise.resolve(t); y < A; )
        d = d.then(w[y++], w[y++]);
      return d;
    }
    A = u.length;
    let O = t;
    for (y = 0; y < A; ) {
      const w = u[y++], I = u[y++];
      try {
        O = w(O);
      } catch (T) {
        I.call(this, T);
        break;
      }
    }
    try {
      d = Si.call(this, O);
    } catch (w) {
      return Promise.reject(w);
    }
    for (y = 0, A = h.length; y < A; )
      d = d.then(h[y++], h[y++]);
    return d;
  }
  getUri(e) {
    e = Ft(this.defaults, e);
    const t = na(e.baseURL, e.url);
    return Zi(t, e.params, e.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(e) {
  xt.prototype[e] = function(t, n) {
    return this.request(Ft(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(a, o, u) {
      return this.request(Ft(u || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  xt.prototype[e] = t(), xt.prototype[e + "Form"] = t(!0);
});
class Ts {
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
      n.reason || (n.reason = new tr(a, o, u), t(n.reason));
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
      token: new Ts(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function rl(r) {
  return function(t) {
    return r.apply(null, t);
  };
}
function nl(r) {
  return E.isObject(r) && r.isAxiosError === !0;
}
const fs = {
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
Object.entries(fs).forEach(([r, e]) => {
  fs[e] = r;
});
function la(r) {
  const e = new xt(r), t = Ui(xt.prototype.request, e);
  return E.extend(t, xt.prototype, e, { allOwnKeys: !0 }), E.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return la(Ft(r, s));
  }, t;
}
const ye = la(yr);
ye.Axios = xt;
ye.CanceledError = tr;
ye.CancelToken = Ts;
ye.isCancel = ta;
ye.VERSION = ua;
ye.toFormData = fn;
ye.AxiosError = j;
ye.Cancel = ye.CanceledError;
ye.all = function(e) {
  return Promise.all(e);
};
ye.spread = rl;
ye.isAxiosError = nl;
ye.mergeConfig = Ft;
ye.AxiosHeaders = je;
ye.formToJSON = (r) => ea(E.isHTMLForm(r) ? new FormData(r) : r);
ye.getAdapter = oa.getAdapter;
ye.HttpStatusCode = fs;
ye.default = ye;
const ca = {
  BASE_URL: "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com"
  // BASE_URL: "https://4ab7-182-156-141-17.ngrok-free.app",
}, ds = ye.create({
  baseURL: ca.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), sl = () => localStorage.getItem("access_token"), il = () => localStorage.getItem("refresh_token");
ds.interceptors.request.use(
  (r) => {
    const e = sl();
    return e && (r.headers.Authorization = `Bearer ${e}`), r;
  },
  (r) => Promise.reject(r)
);
ds.interceptors.response.use(
  (r) => r,
  async (r) => {
    const e = r.config;
    if (r.response && r.response.status === 401 && !e._retry) {
      e._retry = !0;
      const t = il();
      if (t)
        try {
          const n = await ye.post(`${ca.BASE_URL}/auth/refresh-token`, {
            refreshToken: t
          });
          return localStorage.setItem("access_token", n.data.access_token), e.headers.Authorization = `Bearer ${n.data.access_token}`, ds(e);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(r);
  }
);
const fa = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com", al = () => ye.create({
  baseURL: fa,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class ge {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = ge.createService();
  }
  static createService() {
    return ge._axiosInstance || (ge._axiosInstance = al(), ge.setAuthHeaderInterceptor(), ge._axiosInstance.interceptors.response.use(ge.handleSuccess, ge.handleError)), ge._axiosInstance;
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
      return (await ye.post(`${fa}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    ge._axiosInstance.interceptors.request.use(
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
    ge._axiosInstance.interceptors.response.use(
      ge.handleSuccess,
      ge.handleError
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
        const a = await ge.refreshAccessToken();
        return ge.setAccessToken(a), t.headers.set("Authorization", `Bearer ${a}`), ge._axiosInstance(t);
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
const hs = {
  address1: null,
  address2: null,
  location: null,
  city: null,
  state: null,
  pincode: null
};
function Lt(r) {
  this._maxSize = r, this.clear();
}
Lt.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
Lt.prototype.get = function(r) {
  return this._values[r];
};
Lt.prototype.set = function(r, e) {
  return this._size >= this._maxSize && this.clear(), r in this._values || this._size++, this._values[r] = e;
};
var ol = /[^.^\]^[]+|(?=\[\]|\.\.)/g, da = /^\d+$/, ul = /^\d/, ll = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, cl = /^\s*(['"]?)(.*?)(\1)\s*$/, ws = 512, wi = new Lt(ws), Oi = new Lt(ws), Ai = new Lt(ws), Pt = {
  Cache: Lt,
  split: ps,
  normalizePath: zn,
  setter: function(r) {
    var e = zn(r);
    return Oi.get(r) || Oi.set(r, function(n, s) {
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
    var t = zn(r);
    return Ai.get(r) || Ai.set(r, function(s) {
      for (var a = 0, o = t.length; a < o; )
        if (s != null || !e) s = s[t[a++]];
        else return;
      return s;
    });
  },
  join: function(r) {
    return r.reduce(function(e, t) {
      return e + (Os(t) || da.test(t) ? "[" + t + "]" : (e ? "." : "") + t);
    }, "");
  },
  forEach: function(r, e, t) {
    fl(Array.isArray(r) ? r : ps(r), e, t);
  }
};
function zn(r) {
  return wi.get(r) || wi.set(
    r,
    ps(r).map(function(e) {
      return e.replace(cl, "$2");
    })
  );
}
function ps(r) {
  return r.match(ol) || [""];
}
function fl(r, e, t) {
  var n = r.length, s, a, o, u;
  for (a = 0; a < n; a++)
    s = r[a], s && (pl(s) && (s = '"' + s + '"'), u = Os(s), o = !u && /^\d+$/.test(s), e.call(t, s, u, o, a, r));
}
function Os(r) {
  return typeof r == "string" && r && ["'", '"'].indexOf(r.charAt(0)) !== -1;
}
function dl(r) {
  return r.match(ul) && !r.match(da);
}
function hl(r) {
  return ll.test(r);
}
function pl(r) {
  return !Os(r) && (dl(r) || hl(r));
}
const ml = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, hn = (r) => r.match(ml) || [], pn = (r) => r[0].toUpperCase() + r.slice(1), As = (r, e) => hn(r).join(e).toLowerCase(), ha = (r) => hn(r).reduce(
  (e, t) => `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`,
  ""
), yl = (r) => pn(ha(r)), El = (r) => As(r, "_"), gl = (r) => As(r, "-"), bl = (r) => pn(As(r, " ")), vl = (r) => hn(r).map(pn).join(" ");
var Wn = {
  words: hn,
  upperFirst: pn,
  camelCase: ha,
  pascalCase: yl,
  snakeCase: El,
  kebabCase: gl,
  sentenceCase: bl,
  titleCase: vl
}, Cs = { exports: {} };
Cs.exports = function(r) {
  return pa(Rl(r), r);
};
Cs.exports.array = pa;
function pa(r, e) {
  var t = r.length, n = new Array(t), s = {}, a = t, o = _l(e), u = Sl(r);
  for (e.forEach(function(h) {
    if (!u.has(h[0]) || !u.has(h[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); a--; )
    s[a] || f(r[a], a, /* @__PURE__ */ new Set());
  return n;
  function f(h, d, y) {
    if (y.has(h)) {
      var A;
      try {
        A = ", node was:" + JSON.stringify(h);
      } catch {
        A = "";
      }
      throw new Error("Cyclic dependency" + A);
    }
    if (!u.has(h))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(h));
    if (!s[d]) {
      s[d] = !0;
      var O = o.get(h) || /* @__PURE__ */ new Set();
      if (O = Array.from(O), d = O.length) {
        y.add(h);
        do {
          var w = O[--d];
          f(w, u.get(w), y);
        } while (d);
        y.delete(h);
      }
      n[--t] = h;
    }
  }
}
function Rl(r) {
  for (var e = /* @__PURE__ */ new Set(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.add(s[0]), e.add(s[1]);
  }
  return Array.from(e);
}
function _l(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.has(s[0]) || e.set(s[0], /* @__PURE__ */ new Set()), e.has(s[1]) || e.set(s[1], /* @__PURE__ */ new Set()), e.get(s[0]).add(s[1]);
  }
  return e;
}
function Sl(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++)
    e.set(r[t], t);
  return e;
}
var Tl = Cs.exports;
const wl = /* @__PURE__ */ co(Tl), Ol = Object.prototype.toString, Al = Error.prototype.toString, Cl = RegExp.prototype.toString, Il = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Dl = /^Symbol\((.*)\)(.*)$/;
function xl(r) {
  return r != +r ? "NaN" : r === 0 && 1 / r < 0 ? "-0" : "" + r;
}
function Ci(r, e = !1) {
  if (r == null || r === !0 || r === !1) return "" + r;
  const t = typeof r;
  if (t === "number") return xl(r);
  if (t === "string") return e ? `"${r}"` : r;
  if (t === "function") return "[Function " + (r.name || "anonymous") + "]";
  if (t === "symbol") return Il.call(r).replace(Dl, "Symbol($1)");
  const n = Ol.call(r).slice(8, -1);
  return n === "Date" ? isNaN(r.getTime()) ? "" + r : r.toISOString(r) : n === "Error" || r instanceof Error ? "[" + Al.call(r) + "]" : n === "RegExp" ? Cl.call(r) : null;
}
function nt(r, e) {
  let t = Ci(r, e);
  return t !== null ? t : JSON.stringify(r, function(n, s) {
    let a = Ci(this[n], e);
    return a !== null ? a : s;
  }, 2);
}
function ma(r) {
  return r == null ? [] : [].concat(r);
}
let ya, Ea, ga, Pl = /\$\{\s*(\w+)\s*\}/g;
ya = Symbol.toStringTag;
class Ii {
  constructor(e, t, n, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[ya] = "Error", this.name = "ValidationError", this.value = t, this.path = n, this.type = s, this.errors = [], this.inner = [], ma(e).forEach((a) => {
      if (Le.isError(a)) {
        this.errors.push(...a.errors);
        const o = a.inner.length ? a.inner : [a];
        this.inner.push(...o);
      } else
        this.errors.push(a);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Ea = Symbol.hasInstance;
ga = Symbol.toStringTag;
class Le extends Error {
  static formatError(e, t) {
    const n = t.label || t.path || "this";
    return n !== t.path && (t = Object.assign({}, t, {
      path: n
    })), typeof e == "string" ? e.replace(Pl, (s, a) => nt(t[a])) : typeof e == "function" ? e(t) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, n, s, a) {
    const o = new Ii(e, t, n, s);
    if (a)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[ga] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Le);
  }
  static [Ea](e) {
    return Ii[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
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
    const s = n != null && n !== t ? ` (cast from the value \`${nt(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${r} must be a \`${e}\` type, but the final value was: \`${nt(t, !0)}\`` + s : `${r} must match the configured type. The validated value was: \`${nt(t, !0)}\`` + s;
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
}, ft = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, ms = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, ys = {
  isValue: "${path} field must be ${value}"
}, Es = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Yr = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Nl = {
  notType: (r) => {
    const {
      path: e,
      value: t,
      spec: n
    } = r, s = n.types.length;
    if (Array.isArray(t)) {
      if (t.length < s) return `${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${nt(t, !0)}\``;
      if (t.length > s) return `${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${nt(t, !0)}\``;
    }
    return Le.formatError(Ye.notType, r);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Ye,
  string: Ne,
  number: ft,
  date: ms,
  object: Es,
  array: Yr,
  boolean: ys,
  tuple: Nl
});
const mn = (r) => r && r.__isYupSchema__;
class nn {
  static fromOptions(e, t) {
    if (!t.then && !t.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: s,
      otherwise: a
    } = t, o = typeof n == "function" ? n : (...u) => u.every((f) => f === n);
    return new nn(e, (u, f) => {
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
    if (!mn(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(t);
  }
}
const Vr = {
  context: "$",
  value: "."
};
class $t {
  constructor(e, t = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Vr.context, this.isValue = this.key[0] === Vr.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Vr.context : this.isValue ? Vr.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Pt.getter(this.path, !0), this.map = t.map;
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
$t.prototype.__isYupRef = !0;
const ze = (r) => r == null;
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
      message: A,
      skipAbsent: O
    } = r;
    let {
      parent: w,
      context: I,
      abortEarly: T = o.spec.abortEarly,
      disableStackTrace: L = o.spec.disableStackTrace
    } = s;
    function x(le) {
      return $t.isRef(le) ? le.getValue(t, w, I) : le;
    }
    function W(le = {}) {
      const De = Object.assign({
        value: t,
        originalValue: a,
        label: o.spec.label,
        path: le.path || n,
        spec: o.spec,
        disableStackTrace: le.disableStackTrace || L
      }, y, le.params);
      for (const we of Object.keys(De)) De[we] = x(De[we]);
      const _e = new Le(Le.formatError(le.message || A, De), t, De.path, le.type || h, De.disableStackTrace);
      return _e.params = De, _e;
    }
    const re = T ? u : f;
    let $ = {
      path: n,
      parent: w,
      type: h,
      from: s.from,
      createError: W,
      resolve: x,
      options: s,
      originalValue: a,
      schema: o
    };
    const X = (le) => {
      Le.isError(le) ? re(le) : le ? f(null) : re(W());
    }, fe = (le) => {
      Le.isError(le) ? re(le) : u(le);
    };
    if (O && ze(t))
      return X(!0);
    let Re;
    try {
      var Me;
      if (Re = d.call($, t, $), typeof ((Me = Re) == null ? void 0 : Me.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${$.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(Re).then(X, fe);
      }
    } catch (le) {
      fe(le);
      return;
    }
    X(Re);
  }
  return e.OPTIONS = r, e;
}
function kl(r, e, t, n = t) {
  let s, a, o;
  return e ? (Pt.forEach(e, (u, f, h) => {
    let d = f ? u.slice(1, u.length - 1) : u;
    r = r.resolve({
      context: n,
      parent: s,
      value: t
    });
    let y = r.type === "tuple", A = h ? parseInt(d, 10) : 0;
    if (r.innerType || y) {
      if (y && !h) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (t && A >= t.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);
      s = t, t = t && t[A], r = y ? r.spec.types[A] : r.innerType;
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
class sn extends Set {
  describe() {
    const e = [];
    for (const t of this.values())
      e.push($t.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const n of this.values())
      t.push(e(n));
    return t;
  }
  clone() {
    return new sn(this.values());
  }
  merge(e, t) {
    const n = this.clone();
    return e.forEach((s) => n.add(s)), t.forEach((s) => n.delete(s)), n;
  }
}
function Wt(r, e = /* @__PURE__ */ new Map()) {
  if (mn(r) || !r || typeof r != "object") return r;
  if (e.has(r)) return e.get(r);
  let t;
  if (r instanceof Date)
    t = new Date(r.getTime()), e.set(r, t);
  else if (r instanceof RegExp)
    t = new RegExp(r), e.set(r, t);
  else if (Array.isArray(r)) {
    t = new Array(r.length), e.set(r, t);
    for (let n = 0; n < r.length; n++) t[n] = Wt(r[n], e);
  } else if (r instanceof Map) {
    t = /* @__PURE__ */ new Map(), e.set(r, t);
    for (const [n, s] of r.entries()) t.set(n, Wt(s, e));
  } else if (r instanceof Set) {
    t = /* @__PURE__ */ new Set(), e.set(r, t);
    for (const n of r) t.add(Wt(n, e));
  } else if (r instanceof Object) {
    t = {}, e.set(r, t);
    for (const [n, s] of Object.entries(r)) t[n] = Wt(s, e);
  } else
    throw Error(`Unable to clone ${r}`);
  return t;
}
class qe {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new sn(), this._blacklist = new sn(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
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
    return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = Wt(Object.assign({}, this.spec, e)), t;
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
      if (s && ze(a))
        return a;
      let o = nt(e), u = nt(a);
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
    } = e, d = (I) => {
      s || (s = !0, t(I, o));
    }, y = (I) => {
      s || (s = !0, n(I, o));
    }, A = a.length, O = [];
    if (!A) return y([]);
    let w = {
      value: o,
      originalValue: u,
      path: f,
      options: h,
      schema: this
    };
    for (let I = 0; I < a.length; I++) {
      const T = a[I];
      T(w, d, function(x) {
        x && (Array.isArray(x) ? O.push(...x) : O.push(x)), --A <= 0 && y(O);
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
    return (y, A, O) => this.resolve(d)._validate(h, d, A, O);
  }
  validate(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), a = (n = t == null ? void 0 : t.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return new Promise((o, u) => s._validate(e, t, (f, h) => {
      Le.isError(f) && (f.value = h), u(f);
    }, (f, h) => {
      f.length ? u(new Le(f, h, void 0, void 0, a)) : o(h);
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
      throw Le.isError(u) && (u.value = f), u;
    }, (u, f) => {
      if (u.length) throw new Le(u, e, void 0, void 0, o);
      a = f;
    }), a;
  }
  isValid(e, t) {
    return this.validate(e, t).then(() => !0, (n) => {
      if (Le.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (n) {
      if (Le.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : Wt(t);
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
    let n = this.clone(), s = zt(t), a = t.exclusive || t.name && n.exclusiveTests[t.name] === !0;
    if (t.exclusive && !t.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return t.name && (n.exclusiveTests[t.name] = !!t.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === t.name && (a || o.OPTIONS.test === s.OPTIONS.test))), n.tests.push(s), n;
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
    let n = this.clone(), s = ma(e).map((a) => new $t(a));
    return s.forEach((a) => {
      a.isSibling && n.deps.push(a.key);
    }), n.conditions.push(typeof t == "function" ? new nn(s, t) : nn.fromOptions(s, t)), n;
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
  oneOf(e, t = Ye.oneOf) {
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
  notOneOf(e, t = Ye.notOneOf) {
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
qe.prototype.__isYupSchema__ = !0;
for (const r of ["validate", "validateSync"]) qe.prototype[`${r}At`] = function(e, t, n = {}) {
  const {
    parent: s,
    parentPath: a,
    schema: o
  } = kl(this, e, t, n.context);
  return o[r](s && s[a], Object.assign({}, n, {
    parent: s,
    path: e
  }));
};
for (const r of ["equals", "is"]) qe.prototype[r] = qe.prototype.oneOf;
for (const r of ["not", "nope"]) qe.prototype[r] = qe.prototype.notOneOf;
const Fl = () => !0;
function Qr(r) {
  return new ba(r);
}
class ba extends qe {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: Fl
    }, e));
  }
}
Qr.prototype = ba.prototype;
function Jr() {
  return new va();
}
class va extends qe {
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
  isTrue(e = ys.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(t) {
        return ze(t) || t === !0;
      }
    });
  }
  isFalse(e = ys.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(t) {
        return ze(t) || t === !1;
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
Jr.prototype = va.prototype;
const Ll = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function $l(r) {
  const e = gs(r);
  if (!e) return Date.parse ? Date.parse(r) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let t = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (t = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (t = 0 - t)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + t, e.second, e.millisecond);
}
function gs(r) {
  var e, t;
  const n = Ll.exec(r);
  return n ? {
    year: tt(n[1]),
    month: tt(n[2], 1) - 1,
    day: tt(n[3], 1),
    hour: tt(n[4]),
    minute: tt(n[5]),
    second: tt(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      tt(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (t = n[7]) == null ? void 0 : t.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: tt(n[10]),
    minuteOffset: tt(n[11])
  } : null;
}
function tt(r, e = 0) {
  return Number(r) || e;
}
let jl = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), ql = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Ul = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Ml = "^\\d{4}-\\d{2}-\\d{2}", Bl = "\\d{2}:\\d{2}:\\d{2}", Gl = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Vl = new RegExp(`${Ml}T${Bl}(\\.\\d+)?${Gl}$`), zl = (r) => ze(r) || r === r.trim(), Wl = {}.toString();
function C() {
  return new Ra();
}
class Ra extends qe {
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
        return s === Wl ? e : s;
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
    return this.matches(jl, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = Ne.url) {
    return this.matches(ql, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = Ne.uuid) {
    return this.matches(Ul, {
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
    } = e : t = e), this.matches(Vl, {
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
        const o = gs(a);
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
        const o = gs(a);
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
      test: zl
    });
  }
  lowercase(e = Ne.lowercase) {
    return this.transform((t) => ze(t) ? t : t.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => ze(t) || t === t.toLowerCase()
    });
  }
  uppercase(e = Ne.uppercase) {
    return this.transform((t) => ze(t) ? t : t.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => ze(t) || t === t.toUpperCase()
    });
  }
}
C.prototype = Ra.prototype;
let Hl = (r) => r != +r;
function Ot() {
  return new _a();
}
class _a extends qe {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !Hl(e);
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
  min(e, t = ft.min) {
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
  max(e, t = ft.max) {
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
  lessThan(e, t = ft.lessThan) {
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
  moreThan(e, t = ft.moreThan) {
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
  positive(e = ft.positive) {
    return this.moreThan(0, e);
  }
  negative(e = ft.negative) {
    return this.lessThan(0, e);
  }
  integer(e = ft.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (t) => Number.isInteger(t)
    });
  }
  truncate() {
    return this.transform((e) => ze(e) ? e : e | 0);
  }
  round(e) {
    var t;
    let n = ["ceil", "floor", "round", "trunc"];
    if (e = ((t = e) == null ? void 0 : t.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (n.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((s) => ze(s) ? s : Math[e](s));
  }
}
Ot.prototype = _a.prototype;
let Sa = /* @__PURE__ */ new Date(""), Kl = (r) => Object.prototype.toString.call(r) === "[object Date]";
function Nt() {
  return new Er();
}
class Er extends qe {
  constructor() {
    super({
      type: "date",
      check(e) {
        return Kl(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, t, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = $l(e), isNaN(e) ? Er.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, t) {
    let n;
    if ($t.isRef(e))
      n = e;
    else {
      let s = this.cast(e);
      if (!this._typeCheck(s)) throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = s;
    }
    return n;
  }
  min(e, t = ms.min) {
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
  max(e, t = ms.max) {
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
Er.INVALID_DATE = Sa;
Nt.prototype = Er.prototype;
Nt.INVALID_DATE = Sa;
function Yl(r, e = []) {
  let t = [], n = /* @__PURE__ */ new Set(), s = new Set(e.map(([o, u]) => `${o}-${u}`));
  function a(o, u) {
    let f = Pt.split(o)[0];
    n.add(f), s.has(`${u}-${f}`) || t.push([u, f]);
  }
  for (const o of Object.keys(r)) {
    let u = r[o];
    n.add(o), $t.isRef(u) && u.isSibling ? a(u.path, o) : mn(u) && "deps" in u && u.deps.forEach((f) => a(f, o));
  }
  return wl.array(Array.from(n), t).reverse();
}
function Di(r, e) {
  let t = 1 / 0;
  return r.some((n, s) => {
    var a;
    if ((a = e.path) != null && a.includes(n))
      return t = s, !0;
  }), t;
}
function Ta(r) {
  return (e, t) => Di(r, e) - Di(r, t);
}
const wa = (r, e, t) => {
  if (typeof r != "string")
    return r;
  let n = r;
  try {
    n = JSON.parse(r);
  } catch {
  }
  return t.isType(n) ? n : r;
};
function Zr(r) {
  if ("fields" in r) {
    const e = {};
    for (const [t, n] of Object.entries(r.fields))
      e[t] = Zr(n);
    return r.setFields(e);
  }
  if (r.type === "array") {
    const e = r.optional();
    return e.innerType && (e.innerType = Zr(e.innerType)), e;
  }
  return r.type === "tuple" ? r.optional().clone({
    types: r.spec.types.map(Zr)
  }) : "optional" in r ? r.optional() : r;
}
const Ql = (r, e) => {
  const t = [...Pt.normalizePath(e)];
  if (t.length === 1) return t[0] in r;
  let n = t.pop(), s = Pt.getter(Pt.join(t), !0)(r);
  return !!(s && n in s);
};
let xi = (r) => Object.prototype.toString.call(r) === "[object Object]";
function Jl(r, e) {
  let t = Object.keys(r.fields);
  return Object.keys(e).filter((n) => t.indexOf(n) === -1);
}
const Zl = Ta([]);
function Be(r) {
  return new Oa(r);
}
class Oa extends qe {
  constructor(e) {
    super({
      type: "object",
      check(t) {
        return xi(t) || typeof t == "function";
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
      let A = a[y], O = y in s;
      if (A) {
        let w, I = s[y];
        h.path = (t.path ? `${t.path}.` : "") + y, A = A.resolve({
          value: I,
          context: t.context,
          parent: f
        });
        let T = A instanceof qe ? A.spec : void 0, L = T == null ? void 0 : T.strict;
        if (T != null && T.strip) {
          d = d || y in s;
          continue;
        }
        w = !t.__validating || !L ? (
          // TODO: use _cast, this is double resolving
          A.cast(s[y], h)
        ) : s[y], w !== void 0 && (f[y] = w);
      } else O && !o && (f[y] = s[y]);
      (O !== y in f || f[y] !== s[y]) && (d = !0);
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
      if (!u || !xi(h)) {
        s(f, h);
        return;
      }
      o = o || h;
      let d = [];
      for (let y of this._nodes) {
        let A = this.fields[y];
        !A || $t.isRef(A) || d.push(A.asNestedTest({
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
    return n.fields = e, n._nodes = Yl(e, t), n._sortErrors = Ta(Object.keys(e)), t && (n._excludedEdges = t), n;
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
    return Zr(this);
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
    let s = Pt.getter(e, !0);
    return this.transform((a) => {
      if (!a) return a;
      let o = a;
      return Ql(a, e) && (o = Object.assign({}, a), n || delete o[e], o[t] = s(a)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(wa);
  }
  noUnknown(e = !0, t = Es.noUnknown) {
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
  unknown(e = !0, t = Es.noUnknown) {
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
    return this.transformKeys(Wn.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Wn.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => Wn.snakeCase(e).toUpperCase());
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
Be.prototype = Oa.prototype;
function yn(r) {
  return new Aa(r);
}
class Aa extends qe {
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
      for (let O = 0; O < h.length; O++) {
        var A;
        y[O] = o.asNestedTest({
          options: t,
          index: O,
          parent: h,
          parentPath: t.path,
          originalParent: (A = t.originalValue) != null ? A : e
        });
      }
      this.runTests({
        value: h,
        tests: y,
        originalValue: (d = t.originalValue) != null ? d : e,
        options: t
      }, n, (O) => s(O.concat(f), h));
    });
  }
  clone(e) {
    const t = super.clone(e);
    return t.innerType = this.innerType, t;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(wa);
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
    if (!mn(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + nt(e));
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
yn.prototype = Aa.prototype;
const Q = {
  IS_STRING: /^[a-zA-Z ]+$/,
  IS_VEHICLE_NO: /^[a-zA-Z]{2}[- ]?[0-9]{1,2}[- ]?[a-zA-Z]{1,2}[- ]?[0-9]{4}$/,
  IS_NUMBER: /^\d+(\.\d+)?$/,
  CONTACT_NO: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/
}, kt = Be().shape({
  address1: C().required("Address Line 1 is required"),
  address2: C().nullable(),
  location: C().required("Location is required"),
  city: C().required("City is required").matches(Q.IS_STRING, "City name should only contains alphabets."),
  state: C().required("State is required").matches(Q.IS_STRING, "State name should only contains alphabets."),
  pincode: C().required("Pincode is required").matches(Q.PINCODE, "Pincode must be exactly 6 digits")
});
C().test("is-future-or-today", "Date must be today or in the future", (r) => {
  if (!r)
    return !0;
  const e = new Date(r), t = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), e >= t;
});
Be().shape({
  companyName: C().required("Party Name is required"),
  category: C().required("Please select category of vendor"),
  subcategory: C().required("Please select subcategory of vendor"),
  officeAddress: kt,
  officeContactNo: C().required("Please enter contact number.").matches(Q.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: C().nullable().email("Please enter valid email"),
  mainProduct: C().nullable().matches(Q.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: C().nullable().matches(Q.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: C().nullable().matches(Q.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: C().nullable().matches(Q.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: C().nullable(),
  creditTerms: C().nullable(),
  ifGstnCopy: Jr().required(),
  gstn: C().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN number required if GSTN is available."),
    otherwise: (r) => r.nullable()
  }),
  gstnCopy: Qr().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN copy required if GSTN is available."),
    otherwise: (r) => r.nullable()
  }),
  ifPanCardCopy: Jr().required(),
  panNo: C().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN number required if PAN is available."),
    otherwise: (r) => r.nullable()
  }),
  panCardCopy: Qr().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN card copy required if PAN is available."),
    otherwise: (r) => r.nullable()
  }),
  ifMsmeCopy: Jr().required(),
  msmeNo: C().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME number required if MSME is available."),
    otherwise: (r) => r.nullable()
  }),
  msmeCopy: Qr().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME copy required if MSME is available."),
    otherwise: (r) => r.nullable()
  }),
  vendorSaleInfo: Be().shape({
    contactFName: C().required("Contact person first name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
    contactMName: C().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
    contactLName: C().required("Contact person last name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
    directContactNumber: C().required("Contact person phone number is required").matches(Q.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: C().nullable().matches(Q.CONTACT_NO, "Please enter a valid contact number."),
    email: C().nullable().email("Please enter valid email")
  }),
  vendorBankDetails: Be().shape({
    beneficiaryFName: C().required("Beneficiary person first name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: C().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: C().required("Beneficiary person last name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
    bankName: C().required("Bank name is required.").matches(Q.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: kt,
    typeOfAcc: C().required("Account type is required."),
    ifscCode: C().required("IFSC code of bank is required."),
    swiftNo: C().nullable(),
    invoiceCurrency: C().nullable(),
    cancelledChequeCopy: C().nullable()
  }),
  ref1FName: C().required("Reference person first name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
  ref1MName: C().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
  ref1LName: C().required("Reference person first name is required.").matches(Q.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: C().required("Contact number is required").matches(Q.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: C().nullable().matches(Q.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: kt,
  ref1Email: C().nullable().email("Please enter valid email."),
  ref2FName: C().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
  ref2MName: C().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
  ref2LName: C().nullable().matches(Q.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: C().nullable().matches(Q.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: C().nullable().matches(Q.CONTACT_NO, "Please enter valid contact number."),
  // ref2Address: initValAddress,
  ref2Email: C().nullable().email("Please enter valid email.")
});
const Xl = /^[6-9]\d{9}$/, ec = C().matches(Xl, "Please enter a valid 10-digit contact number");
Be().shape({
  farmerfName: C().required("First Name is required").matches(Q.IS_STRING, "Name should only contains alphabets."),
  farmermName: C().nullable().matches(Q.IS_STRING, "Name should only contains alphabets."),
  farmerlName: C().required("Last Name is required").matches(Q.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: kt,
  primaryMobileNo: ec,
  secondaryMobileNo: C().nullable().matches(Q.CONTACT_NO, "Please enter valid contact number."),
  email: C().email("Please enter valid emial"),
  dob: Nt().required("Date of Birth is required"),
  farmAddress: kt,
  totalLandArea: Ot().nullable().positive("Area cannot be negative."),
  cultivationArea: Ot().nullable().positive("Area cannot be negative."),
  crops: yn(
    Be({
      crop: C().required("Crop name is required"),
      noOfPlants: Ot().nullable().positive("Number of plants cannot be negative"),
      pruningDate: Nt().required("Pruning date is required."),
      expectedHarvestDate: Nt().required("Expected harvest date is required."),
      expectedQuantityInTonnes: Ot().required("Expected quantity in metric tones are required.").positive("Quantity cannot be negative")
    }).required("At least one crop is required")
  )
});
const tc = {
  bankName: "",
  branchName: "",
  accountNumber: "",
  ifscCode: "",
  aadharNo: "",
  panNo: "",
  electionCardNo: ""
}, rc = {
  relation: "",
  nameAsPerAadhar: "",
  mobileNumber: "",
  age: 0
}, nc = {
  previousFarmOrWorkPlace: "",
  workType: "",
  workLocation: "",
  workDuration: 0,
  wagesPerDayOrMonth: 0
}, dc = {
  representativeName: "",
  siteName: "",
  laborType: "",
  laborName: "",
  nameAsPerAadhar: "",
  nameAsPerBank: "",
  presentAddress: hs,
  permanentAddress: hs,
  mobileNumber: "",
  emergencyContactNo: "",
  emergencyContactName: "",
  relationWithEmergencyContact: "",
  healthIssues: "",
  birthDate: "",
  gender: "",
  bloodGroup: "",
  educationQualification: "",
  pfUanNo: "",
  maritalStatus: "",
  email: "",
  bankDetails: tc,
  familyDetails: [rc],
  workExperience: [nc],
  preferredWorkingLocation: "",
  preferredWorkType: "",
  referenceName: "",
  referencePosition: "",
  referenceMobileNumber: ""
}, sc = {
  laborType: "",
  labourName: "",
  contactNo: "",
  inTime: "",
  outTime: "",
  amount: 0
}, hc = {
  companyName: "",
  location: "",
  date: "",
  labourDetails: [sc],
  remarks: ""
}, ic = {
  product: "",
  uom: "",
  quantity: 0,
  dumpCost: 0
}, pc = {
  companyName: "",
  location: "",
  date: "",
  batchNo: "",
  grn: "",
  dumpProducts: [ic],
  remark: ""
}, mc = {
  date: "",
  vehicleType: "",
  vehicleNo: "",
  driverName: "",
  driverMobNo: "",
  paymentDiscussed: 0,
  transportationBillAmt: 0,
  advancePaid: 0,
  clientName: "",
  clientAddress: hs,
  receivingPerson: "",
  outTime: "",
  reachingTime: "",
  accDeptVerification: "",
  remarksPFL: "",
  feedbackbyTransporterOwner: "",
  dcNumber: "",
  netInwardQty: 0,
  clientGRNNo: "",
  paymentTerms: "",
  rejection: "",
  shrinkageDump: ""
}, ac = {
  product: "string",
  uom: "string",
  qty: 0,
  rate: 0,
  amount: 0
}, yc = {
  location: "",
  dcNo: "",
  saleDate: "",
  buyerName: "",
  buyerMobNo: "",
  reasonForSale: "",
  approvedBy: "",
  soldBy: "",
  secondSaleProducts: [ac],
  paidAmount: "",
  paymentMode: "",
  pendingAmt: "",
  remarks: "",
  comments: "",
  submittedBy: "",
  mobileNo: ""
}, oc = {
  sku: "",
  uom: "",
  qty: 0,
  totalWeightinKg: 0
}, Ec = {
  location: "",
  stockDate: "",
  eodProducts: [oc],
  submission: "",
  comments: ""
}, gc = {
  dcNo: "",
  dcDate: "",
  arrivedQty: 0,
  samplingQty: 0,
  purchaseBy: "",
  packBy: "",
  receivedBy: "",
  qcCheckBy: "",
  varifiedBy: "",
  totalQty: 0,
  totalpercent: 0,
  supplierName: "",
  arrivalDate: "",
  supplierLocation: "",
  remark: "",
  product: "",
  parameters: [{
    quantity: 0,
    percentage: 0,
    qualityParameter: ""
  }]
}, bc = Be().shape({
  companyName: C().required("Company name is required."),
  location: C().required("Location is required"),
  date: Nt().required("Date is required"),
  labourDetails: yn(
    Be({
      labourName: C().required("Labour name is required"),
      contactNo: C().required("Contact No is required"),
      inTime: C().required("In time is required")
      // outTime: yup.string().required("Out time is required."),
    })
  )
}), vc = Be().shape({
  representativeName: C().required("Prime representative name is required."),
  siteName: C().required("Site name is required"),
  laborType: C().required("Type of labor is required."),
  presentAddress: kt,
  permanentAddress: kt
}), Rc = Be().shape({
  companyName: C().required("Company name is required."),
  location: C().required("Location is required"),
  date: Nt().required("Date is required"),
  batchNo: C().nullable(),
  grn: C().nullable(),
  labourDetails: yn(
    Be({
      product: C().required("Product name is required"),
      uom: C().required("UOM No is required"),
      quantity: Ot().required("Quantity is required").positive("Quantity cannot be negative"),
      dumpCost: Ot().required("Dump cost is required.").positive("Dump cost cannot be negative")
    })
  )
}), J = {
  //Inward Register
  GET_ALL_INWARD_REGISTERS: "/inwardRegister",
  GET_INWARD_REGISTER_BY_ID: "/inwardRegister",
  CREATE_INWARD_REGISTER: "/inwardRegister",
  UPDATE_INWARD_REGISTER: "/inwardRegister",
  DELETE_INWARD_REGISTER: "/inwardRegister",
  //Arrival Quality Report
  GET_ALL_AQR: "/aqr/",
  GET_AQR_BY_ID: "/aqr",
  CREATE_AQR: "/aqr/",
  UPDATE_AQR: "/aqr",
  DELETE_AQR: "/aqr",
  //Dump Register
  GET_ALL_DUMP_REGISTERS: "/dumpRegister/",
  GET_DUMP_REGISTER_BY_ID: "/dumpRegister",
  CREATE_DUMP_REGISTER: "/dumpRegister/",
  UPDATE_DUMP_REGISTER: "/dumpRegister",
  DELETE_DUMP_REGISTER: "/dumpRegister",
  //Labor Registration
  GET_ALL_REGISTERED_LABORS: "/labors/",
  GET_REGISTERED_LABOR_BY_ID: "/labors",
  CREATE_LABOR_REGISTRATION: "/labors/",
  UPDATE_REGISTERED_LABOR: "/labors",
  DELETE_REGISTERED_LABOR: "/labors",
  //Temporaty Labors
  GET_ALL_TEMP_LABORS: "/tempLabour/",
  GET_TEMP_LABOR_BY_ID: "/tempLabour",
  CREATE_A_TEMP_LABOR: "/tempLabour/",
  UPDATE_TEMP_LABOR: "/tempLabour",
  DELETE_TEMP_LABOR: "/tempLabour",
  //Labor Attendance
  GET_ALL_LABOR_ATTENDANCE: "/laborAttendances/",
  GET_LABOR_ATTENDANCE_BY_ID: "/laborAttendances",
  CREATE_LABOR_ATTENDANCE: "/laborAttendances/",
  UPDATE_LABOR_ATTENDANCE: "/laborAttendances",
  DELETE_LABOR_ATTENDANCE: "/laborAttendances",
  //Vehicle Dispatch Register
  GET_ALL_VEHICLE_DISPATCH_REGISTERS: "/vehicleDispatches/",
  GET_VEHICLE_DISPATCH_REGISTER_BY_ID: "/vehicleDispatches",
  CREATE_VEHICLE_DISPATCH_REGISTER: "/vehicleDispatches/",
  UPDATE_VEHICLE_DISPATCH_REGISTER: "/vehicleDispatches",
  DELETE_VEHICLE_DISPATCH_REGISTER: "/vehicleDispatches",
  //Second Sale Register
  GET_ALL_SECOND_SALE_REGISTERS: "/secondSales/",
  GET_SECOND_SALE_REGISTER_BY_ID: "/secondSales",
  CREATE_SECOND_SALE_REGISTER: "/secondSales/",
  UPDATE_SECOND_SALE_REGISTER: "/secondSales",
  DELETE_SECOND_SALE_REGISTER: "/secondSales",
  //EOD Report 
  GET_ALL_EOD_REPORT: "/eodStock/",
  GET_EOD_REPORT_BY_ID: "/eodStock",
  CREATE_EOD_REPORT: "/eodStock/",
  UPDATE_EOD_REPORT: "/eodStock",
  DELETE_EOD_REPORT: "/eodStock"
};
class gr extends ge {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createInwardRegister(e) {
    const t = J.CREATE_INWARD_REGISTER;
    return this.post(t, e);
  }
  getAllInwardRegisters() {
    const e = J.GET_ALL_INWARD_REGISTERS;
    return this.get(e);
  }
  getInwardRegisterById(e) {
    const t = `${J.GET_INWARD_REGISTER_BY_ID}/${e}`;
    return this.get(t);
  }
  updateInwardRegister(e, t) {
    const n = `${J.UPDATE_INWARD_REGISTER}/${e}`;
    return this.patch(n, t);
  }
  deleteInwardRegisterById(e) {
    const t = `${J.DELETE_INWARD_REGISTER}/${e}`;
    return this.delete(t);
  }
}
class br extends ge {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createAQR(e) {
    const t = J.CREATE_AQR;
    return this.post(t, e);
  }
  getAllAQRs() {
    const e = J.GET_ALL_AQR;
    return this.get(e);
  }
  getAQRById(e) {
    const t = `${J.GET_AQR_BY_ID}/${e}`;
    return this.get(t);
  }
  updateAQR(e, t) {
    const n = `${J.UPDATE_AQR}/${e}`;
    return this.patch(n, t);
  }
  deleteAQRById(e) {
    const t = `${J.DELETE_AQR}/${e}`;
    return this.delete(t);
  }
}
class vr extends ge {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDumpRegister(e) {
    const t = J.CREATE_DUMP_REGISTER;
    return this.post(t, e);
  }
  getAllDumpRegisters() {
    const e = J.GET_ALL_DUMP_REGISTERS;
    return this.get(e);
  }
  getDumpRegisterById(e) {
    const t = `${J.GET_DUMP_REGISTER_BY_ID}/${e}`;
    return this.get(t);
  }
  updateDumpRegister(e, t) {
    const n = `${J.UPDATE_DUMP_REGISTER}/${e}`;
    return this.patch(n, t);
  }
  deleteDumpRegisterById(e) {
    const t = `${J.DELETE_DUMP_REGISTER}/${e}`;
    return this.delete(t);
  }
}
class Rr extends ge {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createSecondSaleRegister(e) {
    const t = J.CREATE_SECOND_SALE_REGISTER;
    return this.post(t, e);
  }
  getAllSecondSaleRegisters() {
    const e = J.GET_ALL_SECOND_SALE_REGISTERS;
    return this.get(e);
  }
  getSecondSaleRegisterById(e) {
    const t = `${J.GET_SECOND_SALE_REGISTER_BY_ID}/${e}`;
    return this.get(t);
  }
  updateSecondSaleRegister(e, t) {
    const n = `${J.UPDATE_SECOND_SALE_REGISTER}/${e}`;
    return this.patch(n, t);
  }
  deleteSecondSaleRegisterById(e) {
    const t = `${J.DELETE_SECOND_SALE_REGISTER}/${e}`;
    return this.delete(t);
  }
}
class _r extends ge {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVehicleDispatchRegister(e) {
    const t = J.CREATE_VEHICLE_DISPATCH_REGISTER;
    return this.post(t, e);
  }
  getAllVehicleDispatchRegisters() {
    const e = J.GET_ALL_VEHICLE_DISPATCH_REGISTERS;
    return this.get(e);
  }
  getVehicleDispatchRegisterById(e) {
    const t = `${J.GET_VEHICLE_DISPATCH_REGISTER_BY_ID}/${e}`;
    return this.get(t);
  }
  updateVehicleDispatchRegister(e, t) {
    const n = `${J.UPDATE_VEHICLE_DISPATCH_REGISTER}/${e}`;
    return this.patch(n, t);
  }
  deleteVehicleDispatchRegisterById(e) {
    const t = `${J.DELETE_VEHICLE_DISPATCH_REGISTER}/${e}`;
    return this.delete(t);
  }
}
class Sr extends ge {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createEODReport(e) {
    const t = J.CREATE_EOD_REPORT;
    return this.post(t, e);
  }
  getAllEODReports() {
    const e = J.GET_ALL_EOD_REPORT;
    return this.get(e);
  }
  getEODReportById(e) {
    const t = `${J.GET_EOD_REPORT_BY_ID}/${e}`;
    return this.get(t);
  }
  updateEODReport(e, t) {
    const n = `${J.UPDATE_EOD_REPORT}/${e}`;
    return this.patch(n, t);
  }
  deleteEODReportById(e) {
    const t = `${J.DELETE_EOD_REPORT}/${e}`;
    return this.delete(t);
  }
}
function _c() {
  return Te({
    mutationKey: ["create-inward-register"],
    mutationFn: (r) => gr.getInstance().createInwardRegister(r)
  });
}
function Sc(r) {
  return Te({
    mutationKey: ["update-inward-register"],
    mutationFn: (e) => gr.getInstance().updateInwardRegister(r, e)
  });
}
function Tc(r) {
  return Te({
    mutationKey: ["delete-inward-register-by-id"],
    mutationFn: () => gr.getInstance().deleteInwardRegisterById(r)
  });
}
function wc() {
  return Ge({
    queryKey: ["get-all-inward-registers"],
    queryFn: () => gr.getInstance().getAllInwardRegisters()
  });
}
function Oc(r) {
  return Ge({
    queryKey: ["get-inward-register-by-id"],
    queryFn: () => gr.getInstance().getInwardRegisterById(r),
    enabled: !!r
  });
}
function Ac() {
  return Te({
    mutationKey: ["create-dump-register"],
    mutationFn: (r) => vr.getInstance().createDumpRegister(r)
  });
}
function Cc(r) {
  return Te({
    mutationKey: ["update-dump-register"],
    mutationFn: (e) => vr.getInstance().updateDumpRegister(r, e)
  });
}
function Ic(r) {
  return Te({
    mutationKey: ["delete-dump-register-by-id"],
    mutationFn: () => vr.getInstance().deleteDumpRegisterById(r)
  });
}
function Dc() {
  return Ge({
    queryKey: ["get-all-dump-registers"],
    queryFn: () => vr.getInstance().getAllDumpRegisters()
  });
}
function xc(r) {
  const e = r.length > 1;
  return Ge({
    queryKey: ["get-dump-register-by-id"],
    queryFn: () => vr.getInstance().getDumpRegisterById(r),
    enabled: e
  });
}
function Pc() {
  return Te({
    mutationKey: ["create-second-sale-register"],
    mutationFn: (r) => Rr.getInstance().createSecondSaleRegister(r)
  });
}
function Nc(r) {
  return Te({
    mutationKey: ["update-second-sale-register"],
    mutationFn: (e) => Rr.getInstance().updateSecondSaleRegister(r, e)
  });
}
function kc(r) {
  return Te({
    mutationKey: ["delete-second-sale-register-by-id"],
    mutationFn: () => Rr.getInstance().deleteSecondSaleRegisterById(r)
  });
}
function Fc() {
  return Ge({
    queryKey: ["get-all-second-sale-registers"],
    queryFn: () => Rr.getInstance().getAllSecondSaleRegisters()
  });
}
function Lc(r) {
  return Ge({
    queryKey: ["get-second-sale-register-by-id"],
    queryFn: () => Rr.getInstance().getSecondSaleRegisterById(r),
    enabled: !!r
  });
}
function $c() {
  return Te({
    mutationKey: ["create-vehicle-dispatch-register"],
    mutationFn: (r) => _r.getInstance().createVehicleDispatchRegister(r)
  });
}
function jc(r) {
  return Te({
    mutationKey: ["update-vehicle-dispatch-register"],
    mutationFn: (e) => _r.getInstance().updateVehicleDispatchRegister(r, e)
  });
}
function qc(r) {
  return Te({
    mutationKey: ["delete-vehicle-dispatch-register-by-id"],
    mutationFn: () => _r.getInstance().deleteVehicleDispatchRegisterById(r)
  });
}
function Uc() {
  return Ge({
    queryKey: ["get-all-vehicle-dispatch-registers"],
    queryFn: () => _r.getInstance().getAllVehicleDispatchRegisters()
  });
}
function Mc(r) {
  return Ge({
    queryKey: ["get-vehicle-dispatch-register-by-id"],
    queryFn: () => _r.getInstance().getVehicleDispatchRegisterById(r),
    enabled: !!r
  });
}
function Bc() {
  return Te({
    mutationKey: ["create-aqr"],
    mutationFn: (r) => br.getInstance().createAQR(r)
  });
}
function Gc(r) {
  return Te({
    mutationKey: ["update-aqr"],
    mutationFn: (e) => br.getInstance().updateAQR(r, e)
  });
}
function Vc(r) {
  return Te({
    mutationKey: ["delete-aqr-by-id"],
    mutationFn: () => br.getInstance().deleteAQRById(r)
  });
}
function zc() {
  return Ge({
    queryKey: ["get-all-aqrs"],
    queryFn: () => br.getInstance().getAllAQRs()
  });
}
function Wc(r) {
  return Ge({
    queryKey: ["get-aqr-by-id"],
    queryFn: () => br.getInstance().getAQRById(r),
    enabled: !!r
  });
}
function Hc() {
  return Te({
    mutationKey: ["create-eod-report"],
    mutationFn: (r) => Sr.getInstance().createEODReport(r)
  });
}
function Kc(r) {
  return Te({
    mutationKey: ["update-eod-report"],
    mutationFn: (e) => Sr.getInstance().updateEODReport(r, e)
  });
}
function Yc(r) {
  return Te({
    mutationKey: ["delete-eod-report-by-id"],
    mutationFn: () => Sr.getInstance().deleteEODReportById(r)
  });
}
function Qc() {
  return Ge({
    queryKey: ["get-all-eod-reports"],
    queryFn: () => Sr.getInstance().getAllEODReports()
  });
}
function Jc(r) {
  return Ge({
    queryKey: ["get-eod-report-by-id"],
    queryFn: () => Sr.getInstance().getEODReportById(r),
    enabled: !!r
  });
}
export {
  gc as AQRinitalValues,
  Ya as InwardProductInitialValue,
  fc as InwardRegisterInitialValue,
  ac as SecondSaleProductsInitialValue,
  yc as SecondSaleRegisterInitialValue,
  cc as arrayConstants,
  ic as dumpProductsInitialValue,
  pc as dumpRegisterInitialValue,
  Rc as dumpRegisterSchema,
  Ec as eodReportInitialValue,
  oc as eodReportProductsInitialValue,
  lc as inventoryRouteConstants,
  hc as laborAttendanceInitialValue,
  bc as laborAttendanceSchema,
  tc as laborBankDetailsInitialValue,
  rc as laborFamilyDetailsInitialValue,
  dc as laborRegistrationInitialValue,
  vc as laborRegistrationSchema,
  nc as laborWorkExperienceInitialValue,
  sc as laborsDetailsInitialValue,
  Bc as useCreateAQR,
  Ac as useCreateDumpRegister,
  Hc as useCreateEODReport,
  _c as useCreateInwardRegister,
  Pc as useCreateSecondSaleRegister,
  $c as useCreateVehicleDispatchRegister,
  Vc as useDeleteAQRById,
  Ic as useDeleteDumpRegisterById,
  Yc as useDeleteEODReportById,
  Tc as useDeleteInwardRegisterById,
  kc as useDeleteSecondSaleRegisterById,
  qc as useDeleteVehicleDispatchRegisterById,
  Wc as useGetAQRById,
  zc as useGetAllAQRs,
  Dc as useGetAllDumpRegisters,
  Qc as useGetAllEODReports,
  wc as useGetAllInwardRegisters,
  Fc as useGetAllSecondSaleRegisters,
  Uc as useGetAllVehicleDispatchRegisters,
  xc as useGetDumpRegisterById,
  Jc as useGetEODReportById,
  Oc as useGetInwardRegisterById,
  Lc as useGetSecondSaleRegisterById,
  Mc as useGetVehicleDispatchRegisterById,
  Gc as useUpdateAQR,
  Cc as useUpdateDumpRegister,
  Kc as useUpdateEODReport,
  Sc as useUpdateInwardRegister,
  Nc as useUpdateSecondSaleRegister,
  jc as useUpdateVehicleDispatchRegister,
  mc as vehicleDispatchRegisterInitialValues
};
