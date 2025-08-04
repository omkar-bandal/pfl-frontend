var ho = (t) => {
  throw TypeError(t);
};
var Ci = (t, e, r) => e.has(t) || ho("Cannot " + r);
var E = (t, e, r) => (Ci(t, e, "read from private field"), r ? r.call(t) : e.get(t)), le = (t, e, r) => e.has(t) ? ho("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), W = (t, e, r, n) => (Ci(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), me = (t, e, r) => (Ci(t, e, "access private method"), r);
const Kh = {
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
  FINAL_INVOICES: "/inventory/final-invoices",
  GET_ALL_FINAL_INVOICES: "/inventory/final-invoices",
  //Return by customer
  RBC: "/inventory/return-by-customer",
  GET_ALL_RBC: "/inventory/return-by-customer",
  CREATE_RBC: "/inventory/return-by-customer/create",
  VIEW_RBC: "/inventory/return-by-customer/view",
  UPDATE_RBC: "/inventory/return-by-customer/update"
}, Yh = {
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
}, Qh = {
  source: [
    { value: "vendor", label: "Vendor" },
    { value: "farmer", label: "Farmer" }
  ],
  paymentMode: [
    { value: "upi", label: "UPI" },
    { value: "cash", label: "Cash" },
    { value: "cheque", label: "Cheque" },
    { value: "rtgs", label: "RTGS" },
    { value: "neft", label: "NEFT" },
    { value: "other", label: "Other" }
  ],
  deliveryChallanType: [
    { value: "customer", label: "Customer" },
    { value: "cc-dc stock transfer", label: "CC-DC Stock Transfer" },
    { value: "dc-dc stock transfer", label: "DC-DC Stock Transfer" },
    { value: "other", label: "Other" }
  ],
  locationTypes: [
    { value: "cc", label: "CC" },
    { value: "dc", label: "DC" }
  ],
  grnType: [
    { value: "purchase", label: "Purchase" },
    { value: "transfer", label: "Transfer" }
  ],
  purchaseType: [
    { value: "fixed price sales", label: "Fixed Price Sales" },
    { value: "consignment sales / bikri", label: "Consignment Sales / Bikri" },
    { value: "mgp sales", label: "MGP Sales" }
  ],
  QUALITY_PARAMS_TYPE: [
    { label: "Good", value: "good" },
    { label: "Bad", value: "bad" },
    { label: "Average", value: "average" }
  ],
  EOD_SUBMISSION_TYPE: [
    { value: "First time submission", label: "First Time Submission" },
    { value: "Re-Submission (after management inputs)", label: "Re-Submission (after management inputs)" }
  ],
  LABOUR_TYPES: [
    { value: "skilled", label: "Skilled" },
    { value: "semi-skilled", label: "Semi-skilled" },
    { value: "unskilled", label: "Unskilled" }
  ],
  LABOR_EMP_TYPES: [
    { value: "temporary", label: "Temporary" },
    { value: "parmanent", label: "Parmanent" }
  ],
  GENDER: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" }
  ],
  MARITAL_STATUS: [
    { value: "married", label: "Married" },
    { value: "unmarried", label: "Unmarried" }
  ],
  FAMILY_RELATIONS: [
    { value: "father", label: "Father" },
    { value: "mother", label: "Mother" },
    { value: "spouse", label: "Spouse" }
  ],
  BLOOD_GROUPS: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"].map((t) => ({ value: t, label: t })),
  INWARD_TYPE: [
    { value: "purchase", label: "Purchase" },
    { value: "transferred", label: "Transferred" }
  ]
}, Ju = {
  productName: null,
  origin: null,
  variety: null,
  count: null,
  size: null,
  uom: null,
  quantity: null,
  unitPrice: null,
  amount: null,
  packingMaterialWeight: null,
  grossWeight: null,
  netWeight: null,
  weight: null
}, Jh = {
  deliveryChallanNo: null,
  grnNo: null,
  companyName: null,
  batchNo: null,
  date: null,
  source: "vendor",
  selectedParty: null,
  inwardBy: null,
  inwardCost: null,
  inwardProducts: [Ju],
  inwardQtyInKg: null,
  inwardType: "purchase",
  location: null,
  purchasedBy: null,
  purchasedQty: null,
  remarks: null,
  totalWeightInKg: null
};
var Vn = class {
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
}, jr = typeof window > "u" || "Deno" in globalThis;
function Xu() {
}
function po(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Zu(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function wn(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function at(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function mo(t) {
  return JSON.stringify(
    t,
    (e, r) => Mi(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r
  );
}
function Ui(t, e) {
  if (t === e)
    return t;
  const r = yo(t) && yo(e);
  if (r || Mi(t) && Mi(e)) {
    const n = r ? t : Object.keys(t), i = n.length, s = r ? e : Object.keys(e), o = s.length, u = r ? [] : {};
    let c = 0;
    for (let p = 0; p < o; p++) {
      const h = r ? p : s[p];
      (!r && n.includes(h) || r) && t[h] === void 0 && e[h] === void 0 ? (u[h] = void 0, c++) : (u[h] = Ui(t[h], e[h]), u[h] === t[h] && t[h] !== void 0 && c++);
    }
    return i === o && c === i ? t : u;
  }
  return e;
}
function Fn(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function yo(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Mi(t) {
  if (!go(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!go(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function go(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function bo(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Ui(t, e);
      } catch (n) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        ), n;
      }
    return Ui(t, e);
  }
  return e;
}
var Gt, Tt, hr, aa, ec = (aa = class extends Vn {
  constructor() {
    super();
    le(this, Gt);
    le(this, Tt);
    le(this, hr);
    W(this, hr, (e) => {
      if (!jr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    E(this, Tt) || this.setEventListener(E(this, hr));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = E(this, Tt)) == null || e.call(this), W(this, Tt, void 0));
  }
  setEventListener(e) {
    var r;
    W(this, hr, e), (r = E(this, Tt)) == null || r.call(this), W(this, Tt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    E(this, Gt) !== e && (W(this, Gt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof E(this, Gt) == "boolean" ? E(this, Gt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, Gt = new WeakMap(), Tt = new WeakMap(), hr = new WeakMap(), aa), tc = new ec(), pr, At, mr, ua, rc = (ua = class extends Vn {
  constructor() {
    super();
    le(this, pr, !0);
    le(this, At);
    le(this, mr);
    W(this, mr, (e) => {
      if (!jr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    E(this, At) || this.setEventListener(E(this, mr));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = E(this, At)) == null || e.call(this), W(this, At, void 0));
  }
  setEventListener(e) {
    var r;
    W(this, mr, e), (r = E(this, At)) == null || r.call(this), W(this, At, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    E(this, pr) !== e && (W(this, pr, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return E(this, pr);
  }
}, pr = new WeakMap(), At = new WeakMap(), mr = new WeakMap(), ua), nc = new rc();
function _o() {
  let t, e;
  const r = new Promise((i, s) => {
    t = i, e = s;
  });
  r.status = "pending", r.catch(() => {
  });
  function n(i) {
    Object.assign(r, i), delete r.resolve, delete r.reject;
  }
  return r.resolve = (i) => {
    n({
      status: "fulfilled",
      value: i
    }), t(i);
  }, r.reject = (i) => {
    n({
      status: "rejected",
      reason: i
    }), e(i);
  }, r;
}
function ic(t) {
  return (t ?? "online") === "online" ? nc.isOnline() : !0;
}
var sc = (t) => setTimeout(t, 0);
function oc() {
  let t = [], e = 0, r = (u) => {
    u();
  }, n = (u) => {
    u();
  }, i = sc;
  const s = (u) => {
    e ? t.push(u) : i(() => {
      r(u);
    });
  }, o = () => {
    const u = t;
    t = [], u.length && i(() => {
      n(() => {
        u.forEach((c) => {
          r(c);
        });
      });
    });
  };
  return {
    batch: (u) => {
      let c;
      e++;
      try {
        c = u();
      } finally {
        e--, e || o();
      }
      return c;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (u) => (...c) => {
      s(() => {
        u(...c);
      });
    },
    schedule: s,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (u) => {
      r = u;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (u) => {
      n = u;
    },
    setScheduler: (u) => {
      i = u;
    }
  };
}
var Gn = oc();
function ac(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ic(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function uc() {
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
var Me, X, Wr, Be, zt, yr, Ot, Ct, Hr, gr, br, Wt, Ht, It, _r, oe, $r, ji, Vi, Gi, zi, Wi, Hi, Ki, fa, ca, cc = (ca = class extends Vn {
  constructor(e, r) {
    super();
    le(this, oe);
    le(this, Me);
    le(this, X);
    le(this, Wr);
    le(this, Be);
    le(this, zt);
    le(this, yr);
    le(this, Ot);
    le(this, Ct);
    le(this, Hr);
    le(this, gr);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    le(this, br);
    le(this, Wt);
    le(this, Ht);
    le(this, It);
    le(this, _r, /* @__PURE__ */ new Set());
    this.options = r, W(this, Me, e), W(this, Ct, null), W(this, Ot, _o()), this.options.experimental_prefetchInRender || E(this, Ot).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (E(this, X).addObserver(this), Eo(E(this, X), this.options) ? me(this, oe, $r).call(this) : this.updateResult(), me(this, oe, zi).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Yi(
      E(this, X),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Yi(
      E(this, X),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), me(this, oe, Wi).call(this), me(this, oe, Hi).call(this), E(this, X).removeObserver(this);
  }
  setOptions(e) {
    const r = this.options, n = E(this, X);
    if (this.options = E(this, Me).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof at(this.options.enabled, E(this, X)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    me(this, oe, Ki).call(this), E(this, X).setOptions(this.options), r._defaulted && !Fn(this.options, r) && E(this, Me).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: E(this, X),
      observer: this
    });
    const i = this.hasListeners();
    i && vo(
      E(this, X),
      n,
      this.options,
      r
    ) && me(this, oe, $r).call(this), this.updateResult(), i && (E(this, X) !== n || at(this.options.enabled, E(this, X)) !== at(r.enabled, E(this, X)) || wn(this.options.staleTime, E(this, X)) !== wn(r.staleTime, E(this, X))) && me(this, oe, ji).call(this);
    const s = me(this, oe, Vi).call(this);
    i && (E(this, X) !== n || at(this.options.enabled, E(this, X)) !== at(r.enabled, E(this, X)) || s !== E(this, It)) && me(this, oe, Gi).call(this, s);
  }
  getOptimisticResult(e) {
    const r = E(this, Me).getQueryCache().build(E(this, Me), e), n = this.createResult(r, e);
    return fc(this, n) && (W(this, Be, n), W(this, yr, this.options), W(this, zt, E(this, X).state)), n;
  }
  getCurrentResult() {
    return E(this, Be);
  }
  trackResult(e, r) {
    const n = {};
    return Object.keys(e).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(i), r == null || r(i), e[i])
      });
    }), n;
  }
  trackProp(e) {
    E(this, _r).add(e);
  }
  getCurrentQuery() {
    return E(this, X);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const r = E(this, Me).defaultQueryOptions(e), n = E(this, Me).getQueryCache().build(E(this, Me), r);
    return n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    return me(this, oe, $r).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), E(this, Be)));
  }
  createResult(e, r) {
    var Ae;
    const n = E(this, X), i = this.options, s = E(this, Be), o = E(this, zt), u = E(this, yr), p = e !== n ? e.state : E(this, Wr), { state: h } = e;
    let m = { ...h }, O = !1, C;
    if (r._optimisticResults) {
      const pe = this.hasListeners(), re = !pe && Eo(e, r), we = pe && vo(e, n, r, i);
      (re || we) && (m = {
        ...m,
        ...ac(h.data, e.options)
      }), r._optimisticResults === "isRestoring" && (m.fetchStatus = "idle");
    }
    let { error: S, errorUpdatedAt: N, status: R } = m;
    C = m.data;
    let U = !1;
    if (r.placeholderData !== void 0 && C === void 0 && R === "pending") {
      let pe;
      s != null && s.isPlaceholderData && r.placeholderData === (u == null ? void 0 : u.placeholderData) ? (pe = s.data, U = !0) : pe = typeof r.placeholderData == "function" ? r.placeholderData(
        (Ae = E(this, br)) == null ? void 0 : Ae.state.data,
        E(this, br)
      ) : r.placeholderData, pe !== void 0 && (R = "success", C = bo(
        s == null ? void 0 : s.data,
        pe,
        r
      ), O = !0);
    }
    if (r.select && C !== void 0 && !U)
      if (s && C === (o == null ? void 0 : o.data) && r.select === E(this, Hr))
        C = E(this, gr);
      else
        try {
          W(this, Hr, r.select), C = r.select(C), C = bo(s == null ? void 0 : s.data, C, r), W(this, gr, C), W(this, Ct, null);
        } catch (pe) {
          W(this, Ct, pe);
        }
    E(this, Ct) && (S = E(this, Ct), C = E(this, gr), N = Date.now(), R = "error");
    const k = m.fetchStatus === "fetching", P = R === "pending", F = R === "error", x = P && k, G = C !== void 0, V = {
      status: R,
      fetchStatus: m.fetchStatus,
      isPending: P,
      isSuccess: R === "success",
      isError: F,
      isInitialLoading: x,
      isLoading: x,
      data: C,
      dataUpdatedAt: m.dataUpdatedAt,
      error: S,
      errorUpdatedAt: N,
      failureCount: m.fetchFailureCount,
      failureReason: m.fetchFailureReason,
      errorUpdateCount: m.errorUpdateCount,
      isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
      isFetchedAfterMount: m.dataUpdateCount > p.dataUpdateCount || m.errorUpdateCount > p.errorUpdateCount,
      isFetching: k,
      isRefetching: k && !P,
      isLoadingError: F && !G,
      isPaused: m.fetchStatus === "paused",
      isPlaceholderData: O,
      isRefetchError: F && G,
      isStale: ws(e, r),
      refetch: this.refetch,
      promise: E(this, Ot)
    };
    if (this.options.experimental_prefetchInRender) {
      const pe = (be) => {
        V.status === "error" ? be.reject(V.error) : V.data !== void 0 && be.resolve(V.data);
      }, re = () => {
        const be = W(this, Ot, V.promise = _o());
        pe(be);
      }, we = E(this, Ot);
      switch (we.status) {
        case "pending":
          e.queryHash === n.queryHash && pe(we);
          break;
        case "fulfilled":
          (V.status === "error" || V.data !== we.value) && re();
          break;
        case "rejected":
          (V.status !== "error" || V.error !== we.reason) && re();
          break;
      }
    }
    return V;
  }
  updateResult() {
    const e = E(this, Be), r = this.createResult(E(this, X), this.options);
    if (W(this, zt, E(this, X).state), W(this, yr, this.options), E(this, zt).data !== void 0 && W(this, br, E(this, X)), Fn(r, e))
      return;
    W(this, Be, r);
    const n = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: i } = this.options, s = typeof i == "function" ? i() : i;
      if (s === "all" || !s && !E(this, _r).size)
        return !0;
      const o = new Set(
        s ?? E(this, _r)
      );
      return this.options.throwOnError && o.add("error"), Object.keys(E(this, Be)).some((u) => {
        const c = u;
        return E(this, Be)[c] !== e[c] && o.has(c);
      });
    };
    me(this, oe, fa).call(this, { listeners: n() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && me(this, oe, zi).call(this);
  }
}, Me = new WeakMap(), X = new WeakMap(), Wr = new WeakMap(), Be = new WeakMap(), zt = new WeakMap(), yr = new WeakMap(), Ot = new WeakMap(), Ct = new WeakMap(), Hr = new WeakMap(), gr = new WeakMap(), br = new WeakMap(), Wt = new WeakMap(), Ht = new WeakMap(), It = new WeakMap(), _r = new WeakMap(), oe = new WeakSet(), $r = function(e) {
  me(this, oe, Ki).call(this);
  let r = E(this, X).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(Xu)), r;
}, ji = function() {
  me(this, oe, Wi).call(this);
  const e = wn(
    this.options.staleTime,
    E(this, X)
  );
  if (jr || E(this, Be).isStale || !po(e))
    return;
  const n = Zu(E(this, Be).dataUpdatedAt, e) + 1;
  W(this, Wt, setTimeout(() => {
    E(this, Be).isStale || this.updateResult();
  }, n));
}, Vi = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(E(this, X)) : this.options.refetchInterval) ?? !1;
}, Gi = function(e) {
  me(this, oe, Hi).call(this), W(this, It, e), !(jr || at(this.options.enabled, E(this, X)) === !1 || !po(E(this, It)) || E(this, It) === 0) && W(this, Ht, setInterval(() => {
    (this.options.refetchIntervalInBackground || tc.isFocused()) && me(this, oe, $r).call(this);
  }, E(this, It)));
}, zi = function() {
  me(this, oe, ji).call(this), me(this, oe, Gi).call(this, me(this, oe, Vi).call(this));
}, Wi = function() {
  E(this, Wt) && (clearTimeout(E(this, Wt)), W(this, Wt, void 0));
}, Hi = function() {
  E(this, Ht) && (clearInterval(E(this, Ht)), W(this, Ht, void 0));
}, Ki = function() {
  const e = E(this, Me).getQueryCache().build(E(this, Me), this.options);
  if (e === E(this, X))
    return;
  const r = E(this, X);
  W(this, X, e), W(this, Wr, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, fa = function(e) {
  Gn.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(E(this, Be));
    }), E(this, Me).getQueryCache().notify({
      query: E(this, X),
      type: "observerResultsUpdated"
    });
  });
}, ca);
function lc(t, e) {
  return at(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function Eo(t, e) {
  return lc(t, e) || t.state.data !== void 0 && Yi(t, e, e.refetchOnMount);
}
function Yi(t, e, r) {
  if (at(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && ws(t, e);
  }
  return !1;
}
function vo(t, e, r, n) {
  return (t !== e || at(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && ws(t, r);
}
function ws(t, e) {
  return at(e.enabled, t) !== !1 && t.isStaleByTime(wn(e.staleTime, t));
}
function fc(t, e) {
  return !Fn(t.getCurrentResult(), e);
}
var Nt, Dt, je, ht, yt, Tn, Qi, la, dc = (la = class extends Vn {
  constructor(e, r) {
    super();
    le(this, yt);
    le(this, Nt);
    le(this, Dt);
    le(this, je);
    le(this, ht);
    W(this, Nt, e), this.setOptions(r), this.bindMethods(), me(this, yt, Tn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = E(this, Nt).defaultMutationOptions(e), Fn(this.options, r) || E(this, Nt).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: E(this, je),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && mo(r.mutationKey) !== mo(this.options.mutationKey) ? this.reset() : ((n = E(this, je)) == null ? void 0 : n.state.status) === "pending" && E(this, je).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = E(this, je)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    me(this, yt, Tn).call(this), me(this, yt, Qi).call(this, e);
  }
  getCurrentResult() {
    return E(this, Dt);
  }
  reset() {
    var e;
    (e = E(this, je)) == null || e.removeObserver(this), W(this, je, void 0), me(this, yt, Tn).call(this), me(this, yt, Qi).call(this);
  }
  mutate(e, r) {
    var n;
    return W(this, ht, r), (n = E(this, je)) == null || n.removeObserver(this), W(this, je, E(this, Nt).getMutationCache().build(E(this, Nt), this.options)), E(this, je).addObserver(this), E(this, je).execute(e);
  }
}, Nt = new WeakMap(), Dt = new WeakMap(), je = new WeakMap(), ht = new WeakMap(), yt = new WeakSet(), Tn = function() {
  var r;
  const e = ((r = E(this, je)) == null ? void 0 : r.state) ?? uc();
  W(this, Dt, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Qi = function(e) {
  Gn.batch(() => {
    var r, n, i, s, o, u, c, p;
    if (E(this, ht) && this.hasListeners()) {
      const h = E(this, Dt).variables, m = E(this, Dt).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = E(this, ht)).onSuccess) == null || n.call(r, e.data, h, m), (s = (i = E(this, ht)).onSettled) == null || s.call(i, e.data, null, h, m)) : (e == null ? void 0 : e.type) === "error" && ((u = (o = E(this, ht)).onError) == null || u.call(o, e.error, h, m), (p = (c = E(this, ht)).onSettled) == null || p.call(
        c,
        void 0,
        e.error,
        h,
        m
      ));
    }
    this.listeners.forEach((h) => {
      h(E(this, Dt));
    });
  });
}, la);
function hc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ji = { exports: {} }, H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ro;
function pc() {
  if (Ro) return H;
  Ro = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.iterator;
  function O(y) {
    return y === null || typeof y != "object" ? null : (y = m && y[m] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, S = Object.assign, N = {};
  function R(y, w, K) {
    this.props = y, this.context = w, this.refs = N, this.updater = K || C;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(y, w) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, w, "setState");
  }, R.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function U() {
  }
  U.prototype = R.prototype;
  function k(y, w, K) {
    this.props = y, this.context = w, this.refs = N, this.updater = K || C;
  }
  var P = k.prototype = new U();
  P.constructor = k, S(P, R.prototype), P.isPureReactComponent = !0;
  var F = Array.isArray, x = Object.prototype.hasOwnProperty, G = { current: null }, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(y, w, K) {
    var J, ne = {}, he = null, fe = null;
    if (w != null) for (J in w.ref !== void 0 && (fe = w.ref), w.key !== void 0 && (he = "" + w.key), w) x.call(w, J) && !te.hasOwnProperty(J) && (ne[J] = w[J]);
    var ce = arguments.length - 2;
    if (ce === 1) ne.children = K;
    else if (1 < ce) {
      for (var ae = Array(ce), Ce = 0; Ce < ce; Ce++) ae[Ce] = arguments[Ce + 2];
      ne.children = ae;
    }
    if (y && y.defaultProps) for (J in ce = y.defaultProps, ce) ne[J] === void 0 && (ne[J] = ce[J]);
    return { $$typeof: t, type: y, key: he, ref: fe, props: ne, _owner: G.current };
  }
  function Ae(y, w) {
    return { $$typeof: t, type: y.type, key: w, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function pe(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }
  function re(y) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(K) {
      return w[K];
    });
  }
  var we = /\/+/g;
  function be(y, w) {
    return typeof y == "object" && y !== null && y.key != null ? re("" + y.key) : w.toString(36);
  }
  function ke(y, w, K, J, ne) {
    var he = typeof y;
    (he === "undefined" || he === "boolean") && (y = null);
    var fe = !1;
    if (y === null) fe = !0;
    else switch (he) {
      case "string":
      case "number":
        fe = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case t:
          case e:
            fe = !0;
        }
    }
    if (fe) return fe = y, ne = ne(fe), y = J === "" ? "." + be(fe, 0) : J, F(ne) ? (K = "", y != null && (K = y.replace(we, "$&/") + "/"), ke(ne, w, K, "", function(Ce) {
      return Ce;
    })) : ne != null && (pe(ne) && (ne = Ae(ne, K + (!ne.key || fe && fe.key === ne.key ? "" : ("" + ne.key).replace(we, "$&/") + "/") + y)), w.push(ne)), 1;
    if (fe = 0, J = J === "" ? "." : J + ":", F(y)) for (var ce = 0; ce < y.length; ce++) {
      he = y[ce];
      var ae = J + be(he, ce);
      fe += ke(he, w, K, ae, ne);
    }
    else if (ae = O(y), typeof ae == "function") for (y = ae.call(y), ce = 0; !(he = y.next()).done; ) he = he.value, ae = J + be(he, ce++), fe += ke(he, w, K, ae, ne);
    else if (he === "object") throw w = String(y), Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.");
    return fe;
  }
  function xe(y, w, K) {
    if (y == null) return y;
    var J = [], ne = 0;
    return ke(y, J, "", "", function(he) {
      return w.call(K, he, ne++);
    }), J;
  }
  function et(y) {
    if (y._status === -1) {
      var w = y._result;
      w = w(), w.then(function(K) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = K);
      }, function(K) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = K);
      }), y._status === -1 && (y._status = 0, y._result = w);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var q = { current: null }, it = { transition: null }, xt = { ReactCurrentDispatcher: q, ReactCurrentBatchConfig: it, ReactCurrentOwner: G };
  function ct() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return H.Children = { map: xe, forEach: function(y, w, K) {
    xe(y, function() {
      w.apply(this, arguments);
    }, K);
  }, count: function(y) {
    var w = 0;
    return xe(y, function() {
      w++;
    }), w;
  }, toArray: function(y) {
    return xe(y, function(w) {
      return w;
    }) || [];
  }, only: function(y) {
    if (!pe(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, H.Component = R, H.Fragment = r, H.Profiler = i, H.PureComponent = k, H.StrictMode = n, H.Suspense = c, H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xt, H.act = ct, H.cloneElement = function(y, w, K) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var J = S({}, y.props), ne = y.key, he = y.ref, fe = y._owner;
    if (w != null) {
      if (w.ref !== void 0 && (he = w.ref, fe = G.current), w.key !== void 0 && (ne = "" + w.key), y.type && y.type.defaultProps) var ce = y.type.defaultProps;
      for (ae in w) x.call(w, ae) && !te.hasOwnProperty(ae) && (J[ae] = w[ae] === void 0 && ce !== void 0 ? ce[ae] : w[ae]);
    }
    var ae = arguments.length - 2;
    if (ae === 1) J.children = K;
    else if (1 < ae) {
      ce = Array(ae);
      for (var Ce = 0; Ce < ae; Ce++) ce[Ce] = arguments[Ce + 2];
      J.children = ce;
    }
    return { $$typeof: t, type: y.type, key: ne, ref: he, props: J, _owner: fe };
  }, H.createContext = function(y) {
    return y = { $$typeof: o, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: s, _context: y }, y.Consumer = y;
  }, H.createElement = V, H.createFactory = function(y) {
    var w = V.bind(null, y);
    return w.type = y, w;
  }, H.createRef = function() {
    return { current: null };
  }, H.forwardRef = function(y) {
    return { $$typeof: u, render: y };
  }, H.isValidElement = pe, H.lazy = function(y) {
    return { $$typeof: h, _payload: { _status: -1, _result: y }, _init: et };
  }, H.memo = function(y, w) {
    return { $$typeof: p, type: y, compare: w === void 0 ? null : w };
  }, H.startTransition = function(y) {
    var w = it.transition;
    it.transition = {};
    try {
      y();
    } finally {
      it.transition = w;
    }
  }, H.unstable_act = ct, H.useCallback = function(y, w) {
    return q.current.useCallback(y, w);
  }, H.useContext = function(y) {
    return q.current.useContext(y);
  }, H.useDebugValue = function() {
  }, H.useDeferredValue = function(y) {
    return q.current.useDeferredValue(y);
  }, H.useEffect = function(y, w) {
    return q.current.useEffect(y, w);
  }, H.useId = function() {
    return q.current.useId();
  }, H.useImperativeHandle = function(y, w, K) {
    return q.current.useImperativeHandle(y, w, K);
  }, H.useInsertionEffect = function(y, w) {
    return q.current.useInsertionEffect(y, w);
  }, H.useLayoutEffect = function(y, w) {
    return q.current.useLayoutEffect(y, w);
  }, H.useMemo = function(y, w) {
    return q.current.useMemo(y, w);
  }, H.useReducer = function(y, w, K) {
    return q.current.useReducer(y, w, K);
  }, H.useRef = function(y) {
    return q.current.useRef(y);
  }, H.useState = function(y) {
    return q.current.useState(y);
  }, H.useSyncExternalStore = function(y, w, K) {
    return q.current.useSyncExternalStore(y, w, K);
  }, H.useTransition = function() {
    return q.current.useTransition();
  }, H.version = "18.3.1", H;
}
var Ur = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ur.exports;
var So;
function mc() {
  return So || (So = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), R = Symbol.iterator, U = "@@iterator";
      function k(a) {
        if (a === null || typeof a != "object")
          return null;
        var l = R && a[R] || a[U];
        return typeof l == "function" ? l : null;
      }
      var P = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, F = {
        transition: null
      }, x = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, G = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, te = {}, V = null;
      function Ae(a) {
        V = a;
      }
      te.setExtraStackFrame = function(a) {
        V = a;
      }, te.getCurrentStack = null, te.getStackAddendum = function() {
        var a = "";
        V && (a += V);
        var l = te.getCurrentStack;
        return l && (a += l() || ""), a;
      };
      var pe = !1, re = !1, we = !1, be = !1, ke = !1, xe = {
        ReactCurrentDispatcher: P,
        ReactCurrentBatchConfig: F,
        ReactCurrentOwner: G
      };
      xe.ReactDebugCurrentFrame = te, xe.ReactCurrentActQueue = x;
      function et(a) {
        {
          for (var l = arguments.length, g = new Array(l > 1 ? l - 1 : 0), _ = 1; _ < l; _++)
            g[_ - 1] = arguments[_];
          it("warn", a, g);
        }
      }
      function q(a) {
        {
          for (var l = arguments.length, g = new Array(l > 1 ? l - 1 : 0), _ = 1; _ < l; _++)
            g[_ - 1] = arguments[_];
          it("error", a, g);
        }
      }
      function it(a, l, g) {
        {
          var _ = xe.ReactDebugCurrentFrame, A = _.getStackAddendum();
          A !== "" && (l += "%s", g = g.concat([A]));
          var L = g.map(function(D) {
            return String(D);
          });
          L.unshift("Warning: " + l), Function.prototype.apply.call(console[a], console, L);
        }
      }
      var xt = {};
      function ct(a, l) {
        {
          var g = a.constructor, _ = g && (g.displayName || g.name) || "ReactClass", A = _ + "." + l;
          if (xt[A])
            return;
          q("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", l, _), xt[A] = !0;
        }
      }
      var y = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(a) {
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
        enqueueForceUpdate: function(a, l, g) {
          ct(a, "forceUpdate");
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
        enqueueReplaceState: function(a, l, g, _) {
          ct(a, "replaceState");
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
        enqueueSetState: function(a, l, g, _) {
          ct(a, "setState");
        }
      }, w = Object.assign, K = {};
      Object.freeze(K);
      function J(a, l, g) {
        this.props = a, this.context = l, this.refs = K, this.updater = g || y;
      }
      J.prototype.isReactComponent = {}, J.prototype.setState = function(a, l) {
        if (typeof a != "object" && typeof a != "function" && a != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, l, "setState");
      }, J.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      {
        var ne = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, he = function(a, l) {
          Object.defineProperty(J.prototype, a, {
            get: function() {
              et("%s(...) is deprecated in plain JavaScript React classes. %s", l[0], l[1]);
            }
          });
        };
        for (var fe in ne)
          ne.hasOwnProperty(fe) && he(fe, ne[fe]);
      }
      function ce() {
      }
      ce.prototype = J.prototype;
      function ae(a, l, g) {
        this.props = a, this.context = l, this.refs = K, this.updater = g || y;
      }
      var Ce = ae.prototype = new ce();
      Ce.constructor = ae, w(Ce, J.prototype), Ce.isPureReactComponent = !0;
      function si() {
        var a = {
          current: null
        };
        return Object.seal(a), a;
      }
      var Zr = Array.isArray;
      function nr(a) {
        return Zr(a);
      }
      function oi(a) {
        {
          var l = typeof Symbol == "function" && Symbol.toStringTag, g = l && a[Symbol.toStringTag] || a.constructor.name || "Object";
          return g;
        }
      }
      function ir(a) {
        try {
          return bt(a), !1;
        } catch {
          return !0;
        }
      }
      function bt(a) {
        return "" + a;
      }
      function Ft(a) {
        if (ir(a))
          return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", oi(a)), bt(a);
      }
      function en(a, l, g) {
        var _ = a.displayName;
        if (_)
          return _;
        var A = l.displayName || l.name || "";
        return A !== "" ? g + "(" + A + ")" : g;
      }
      function qt(a) {
        return a.displayName || "Context";
      }
      function st(a) {
        if (a == null)
          return null;
        if (typeof a.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
        switch (a) {
          case s:
            return "Fragment";
          case i:
            return "Portal";
          case u:
            return "Profiler";
          case o:
            return "StrictMode";
          case m:
            return "Suspense";
          case O:
            return "SuspenseList";
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case p:
              var l = a;
              return qt(l) + ".Consumer";
            case c:
              var g = a;
              return qt(g._context) + ".Provider";
            case h:
              return en(a, a.render, "ForwardRef");
            case C:
              var _ = a.displayName || null;
              return _ !== null ? _ : st(a.type) || "Memo";
            case S: {
              var A = a, L = A._payload, D = A._init;
              try {
                return st(D(L));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Lt = Object.prototype.hasOwnProperty, sr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, tn, rn, or;
      or = {};
      function Nr(a) {
        if (Lt.call(a, "ref")) {
          var l = Object.getOwnPropertyDescriptor(a, "ref").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return a.ref !== void 0;
      }
      function _t(a) {
        if (Lt.call(a, "key")) {
          var l = Object.getOwnPropertyDescriptor(a, "key").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return a.key !== void 0;
      }
      function ai(a, l) {
        var g = function() {
          tn || (tn = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        g.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: g,
          configurable: !0
        });
      }
      function nn(a, l) {
        var g = function() {
          rn || (rn = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        g.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: g,
          configurable: !0
        });
      }
      function sn(a) {
        if (typeof a.ref == "string" && G.current && a.__self && G.current.stateNode !== a.__self) {
          var l = st(G.current.type);
          or[l] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, a.ref), or[l] = !0);
        }
      }
      var Bt = function(a, l, g, _, A, L, D) {
        var M = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: a,
          key: l,
          ref: g,
          props: D,
          // Record the component responsible for creating this element.
          _owner: L
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
          value: _
        }), Object.defineProperty(M, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: A
        }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
      };
      function ui(a, l, g) {
        var _, A = {}, L = null, D = null, M = null, ee = null;
        if (l != null) {
          Nr(l) && (D = l.ref, sn(l)), _t(l) && (Ft(l.key), L = "" + l.key), M = l.__self === void 0 ? null : l.__self, ee = l.__source === void 0 ? null : l.__source;
          for (_ in l)
            Lt.call(l, _) && !sr.hasOwnProperty(_) && (A[_] = l[_]);
        }
        var de = arguments.length - 2;
        if (de === 1)
          A.children = g;
        else if (de > 1) {
          for (var _e = Array(de), Ee = 0; Ee < de; Ee++)
            _e[Ee] = arguments[Ee + 2];
          Object.freeze && Object.freeze(_e), A.children = _e;
        }
        if (a && a.defaultProps) {
          var Re = a.defaultProps;
          for (_ in Re)
            A[_] === void 0 && (A[_] = Re[_]);
        }
        if (L || D) {
          var Ie = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          L && ai(A, Ie), D && nn(A, Ie);
        }
        return Bt(a, L, D, M, ee, G.current, A);
      }
      function ci(a, l) {
        var g = Bt(a.type, l, a.ref, a._self, a._source, a._owner, a.props);
        return g;
      }
      function li(a, l, g) {
        if (a == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var _, A = w({}, a.props), L = a.key, D = a.ref, M = a._self, ee = a._source, de = a._owner;
        if (l != null) {
          Nr(l) && (D = l.ref, de = G.current), _t(l) && (Ft(l.key), L = "" + l.key);
          var _e;
          a.type && a.type.defaultProps && (_e = a.type.defaultProps);
          for (_ in l)
            Lt.call(l, _) && !sr.hasOwnProperty(_) && (l[_] === void 0 && _e !== void 0 ? A[_] = _e[_] : A[_] = l[_]);
        }
        var Ee = arguments.length - 2;
        if (Ee === 1)
          A.children = g;
        else if (Ee > 1) {
          for (var Re = Array(Ee), Ie = 0; Ie < Ee; Ie++)
            Re[Ie] = arguments[Ie + 2];
          A.children = Re;
        }
        return Bt(a.type, L, D, M, ee, de, A);
      }
      function Et(a) {
        return typeof a == "object" && a !== null && a.$$typeof === n;
      }
      var on = ".", fi = ":";
      function di(a) {
        var l = /[=:]/g, g = {
          "=": "=0",
          ":": "=2"
        }, _ = a.replace(l, function(A) {
          return g[A];
        });
        return "$" + _;
      }
      var ar = !1, an = /\/+/g;
      function lt(a) {
        return a.replace(an, "$&/");
      }
      function $t(a, l) {
        return typeof a == "object" && a !== null && a.key != null ? (Ft(a.key), di("" + a.key)) : l.toString(36);
      }
      function vt(a, l, g, _, A) {
        var L = typeof a;
        (L === "undefined" || L === "boolean") && (a = null);
        var D = !1;
        if (a === null)
          D = !0;
        else
          switch (L) {
            case "string":
            case "number":
              D = !0;
              break;
            case "object":
              switch (a.$$typeof) {
                case n:
                case i:
                  D = !0;
              }
          }
        if (D) {
          var M = a, ee = A(M), de = _ === "" ? on + $t(M, 0) : _;
          if (nr(ee)) {
            var _e = "";
            de != null && (_e = lt(de) + "/"), vt(ee, l, _e, "", function(Qu) {
              return Qu;
            });
          } else ee != null && (Et(ee) && (ee.key && (!M || M.key !== ee.key) && Ft(ee.key), ee = ci(
            ee,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            g + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ee.key && (!M || M.key !== ee.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              lt("" + ee.key) + "/"
            ) : "") + de
          )), l.push(ee));
          return 1;
        }
        var Ee, Re, Ie = 0, qe = _ === "" ? on : _ + fi;
        if (nr(a))
          for (var _n = 0; _n < a.length; _n++)
            Ee = a[_n], Re = qe + $t(Ee, _n), Ie += vt(Ee, l, g, Re, A);
        else {
          var Oi = k(a);
          if (typeof Oi == "function") {
            var co = a;
            Oi === co.entries && (ar || et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ar = !0);
            for (var Ku = Oi.call(co), lo, Yu = 0; !(lo = Ku.next()).done; )
              Ee = lo.value, Re = qe + $t(Ee, Yu++), Ie += vt(Ee, l, g, Re, A);
          } else if (L === "object") {
            var fo = String(a);
            throw new Error("Objects are not valid as a React child (found: " + (fo === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : fo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Ie;
      }
      function Ut(a, l, g) {
        if (a == null)
          return a;
        var _ = [], A = 0;
        return vt(a, _, "", "", function(L) {
          return l.call(g, L, A++);
        }), _;
      }
      function hi(a) {
        var l = 0;
        return Ut(a, function() {
          l++;
        }), l;
      }
      function un(a, l, g) {
        Ut(a, function() {
          l.apply(this, arguments);
        }, g);
      }
      function pi(a) {
        return Ut(a, function(l) {
          return l;
        }) || [];
      }
      function cn(a) {
        if (!Et(a))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return a;
      }
      function ln(a) {
        var l = {
          $$typeof: p,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: a,
          _currentValue2: a,
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
          $$typeof: c,
          _context: l
        };
        var g = !1, _ = !1, A = !1;
        {
          var L = {
            $$typeof: p,
            _context: l
          };
          Object.defineProperties(L, {
            Provider: {
              get: function() {
                return _ || (_ = !0, q("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), l.Provider;
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
                return g || (g = !0, q("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), l.Consumer;
              }
            },
            displayName: {
              get: function() {
                return l.displayName;
              },
              set: function(D) {
                A || (et("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", D), A = !0);
              }
            }
          }), l.Consumer = L;
        }
        return l._currentRenderer = null, l._currentRenderer2 = null, l;
      }
      var Mt = -1, Dr = 0, Pr = 1, fn = 2;
      function mi(a) {
        if (a._status === Mt) {
          var l = a._result, g = l();
          if (g.then(function(L) {
            if (a._status === Dr || a._status === Mt) {
              var D = a;
              D._status = Pr, D._result = L;
            }
          }, function(L) {
            if (a._status === Dr || a._status === Mt) {
              var D = a;
              D._status = fn, D._result = L;
            }
          }), a._status === Mt) {
            var _ = a;
            _._status = Dr, _._result = g;
          }
        }
        if (a._status === Pr) {
          var A = a._result;
          return A === void 0 && q(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, A), "default" in A || q(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, A), A.default;
        } else
          throw a._result;
      }
      function yi(a) {
        var l = {
          // We use these fields to store the result.
          _status: Mt,
          _result: a
        }, g = {
          $$typeof: S,
          _payload: l,
          _init: mi
        };
        {
          var _, A;
          Object.defineProperties(g, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return _;
              },
              set: function(L) {
                q("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), _ = L, Object.defineProperty(g, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return A;
              },
              set: function(L) {
                q("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), A = L, Object.defineProperty(g, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return g;
      }
      function gi(a) {
        a != null && a.$$typeof === C ? q("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof a != "function" ? q("forwardRef requires a render function but was given %s.", a === null ? "null" : typeof a) : a.length !== 0 && a.length !== 2 && q("forwardRef render functions accept exactly two parameters: props and ref. %s", a.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), a != null && (a.defaultProps != null || a.propTypes != null) && q("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var l = {
          $$typeof: h,
          render: a
        };
        {
          var g;
          Object.defineProperty(l, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return g;
            },
            set: function(_) {
              g = _, !a.name && !a.displayName && (a.displayName = _);
            }
          });
        }
        return l;
      }
      var dn;
      dn = Symbol.for("react.module.reference");
      function d(a) {
        return !!(typeof a == "string" || typeof a == "function" || a === s || a === u || ke || a === o || a === m || a === O || be || a === N || pe || re || we || typeof a == "object" && a !== null && (a.$$typeof === S || a.$$typeof === C || a.$$typeof === c || a.$$typeof === p || a.$$typeof === h || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        a.$$typeof === dn || a.getModuleId !== void 0));
      }
      function v(a, l) {
        d(a) || q("memo: The first argument must be a component. Instead received: %s", a === null ? "null" : typeof a);
        var g = {
          $$typeof: C,
          type: a,
          compare: l === void 0 ? null : l
        };
        {
          var _;
          Object.defineProperty(g, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return _;
            },
            set: function(A) {
              _ = A, !a.name && !a.displayName && (a.displayName = A);
            }
          });
        }
        return g;
      }
      function T() {
        var a = P.current;
        return a === null && q(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), a;
      }
      function B(a) {
        var l = T();
        if (a._context !== void 0) {
          var g = a._context;
          g.Consumer === a ? q("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : g.Provider === a && q("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return l.useContext(a);
      }
      function ie(a) {
        var l = T();
        return l.useState(a);
      }
      function ue(a, l, g) {
        var _ = T();
        return _.useReducer(a, l, g);
      }
      function Q(a) {
        var l = T();
        return l.useRef(a);
      }
      function z(a, l) {
        var g = T();
        return g.useEffect(a, l);
      }
      function Fe(a, l) {
        var g = T();
        return g.useInsertionEffect(a, l);
      }
      function ve(a, l) {
        var g = T();
        return g.useLayoutEffect(a, l);
      }
      function Te(a, l) {
        var g = T();
        return g.useCallback(a, l);
      }
      function $e(a, l) {
        var g = T();
        return g.useMemo(a, l);
      }
      function Rt(a, l, g) {
        var _ = T();
        return _.useImperativeHandle(a, l, g);
      }
      function ft(a, l) {
        {
          var g = T();
          return g.useDebugValue(a, l);
        }
      }
      function Le() {
        var a = T();
        return a.useTransition();
      }
      function kr(a) {
        var l = T();
        return l.useDeferredValue(a);
      }
      function bi() {
        var a = T();
        return a.useId();
      }
      function _i(a, l, g) {
        var _ = T();
        return _.useSyncExternalStore(a, l, g);
      }
      var xr = 0, js, Vs, Gs, zs, Ws, Hs, Ks;
      function Ys() {
      }
      Ys.__reactDisabledLog = !0;
      function Nu() {
        {
          if (xr === 0) {
            js = console.log, Vs = console.info, Gs = console.warn, zs = console.error, Ws = console.group, Hs = console.groupCollapsed, Ks = console.groupEnd;
            var a = {
              configurable: !0,
              enumerable: !0,
              value: Ys,
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
          xr++;
        }
      }
      function Du() {
        {
          if (xr--, xr === 0) {
            var a = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: w({}, a, {
                value: js
              }),
              info: w({}, a, {
                value: Vs
              }),
              warn: w({}, a, {
                value: Gs
              }),
              error: w({}, a, {
                value: zs
              }),
              group: w({}, a, {
                value: Ws
              }),
              groupCollapsed: w({}, a, {
                value: Hs
              }),
              groupEnd: w({}, a, {
                value: Ks
              })
            });
          }
          xr < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ei = xe.ReactCurrentDispatcher, vi;
      function hn(a, l, g) {
        {
          if (vi === void 0)
            try {
              throw Error();
            } catch (A) {
              var _ = A.stack.trim().match(/\n( *(at )?)/);
              vi = _ && _[1] || "";
            }
          return `
` + vi + a;
        }
      }
      var Ri = !1, pn;
      {
        var Pu = typeof WeakMap == "function" ? WeakMap : Map;
        pn = new Pu();
      }
      function Qs(a, l) {
        if (!a || Ri)
          return "";
        {
          var g = pn.get(a);
          if (g !== void 0)
            return g;
        }
        var _;
        Ri = !0;
        var A = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var L;
        L = Ei.current, Ei.current = null, Nu();
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
              } catch (qe) {
                _ = qe;
              }
              Reflect.construct(a, [], D);
            } else {
              try {
                D.call();
              } catch (qe) {
                _ = qe;
              }
              a.call(D.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (qe) {
              _ = qe;
            }
            a();
          }
        } catch (qe) {
          if (qe && _ && typeof qe.stack == "string") {
            for (var M = qe.stack.split(`
`), ee = _.stack.split(`
`), de = M.length - 1, _e = ee.length - 1; de >= 1 && _e >= 0 && M[de] !== ee[_e]; )
              _e--;
            for (; de >= 1 && _e >= 0; de--, _e--)
              if (M[de] !== ee[_e]) {
                if (de !== 1 || _e !== 1)
                  do
                    if (de--, _e--, _e < 0 || M[de] !== ee[_e]) {
                      var Ee = `
` + M[de].replace(" at new ", " at ");
                      return a.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", a.displayName)), typeof a == "function" && pn.set(a, Ee), Ee;
                    }
                  while (de >= 1 && _e >= 0);
                break;
              }
          }
        } finally {
          Ri = !1, Ei.current = L, Du(), Error.prepareStackTrace = A;
        }
        var Re = a ? a.displayName || a.name : "", Ie = Re ? hn(Re) : "";
        return typeof a == "function" && pn.set(a, Ie), Ie;
      }
      function ku(a, l, g) {
        return Qs(a, !1);
      }
      function xu(a) {
        var l = a.prototype;
        return !!(l && l.isReactComponent);
      }
      function mn(a, l, g) {
        if (a == null)
          return "";
        if (typeof a == "function")
          return Qs(a, xu(a));
        if (typeof a == "string")
          return hn(a);
        switch (a) {
          case m:
            return hn("Suspense");
          case O:
            return hn("SuspenseList");
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case h:
              return ku(a.render);
            case C:
              return mn(a.type, l, g);
            case S: {
              var _ = a, A = _._payload, L = _._init;
              try {
                return mn(L(A), l, g);
              } catch {
              }
            }
          }
        return "";
      }
      var Js = {}, Xs = xe.ReactDebugCurrentFrame;
      function yn(a) {
        if (a) {
          var l = a._owner, g = mn(a.type, a._source, l ? l.type : null);
          Xs.setExtraStackFrame(g);
        } else
          Xs.setExtraStackFrame(null);
      }
      function Fu(a, l, g, _, A) {
        {
          var L = Function.call.bind(Lt);
          for (var D in a)
            if (L(a, D)) {
              var M = void 0;
              try {
                if (typeof a[D] != "function") {
                  var ee = Error((_ || "React class") + ": " + g + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ee.name = "Invariant Violation", ee;
                }
                M = a[D](l, D, _, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (de) {
                M = de;
              }
              M && !(M instanceof Error) && (yn(A), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", g, D, typeof M), yn(null)), M instanceof Error && !(M.message in Js) && (Js[M.message] = !0, yn(A), q("Failed %s type: %s", g, M.message), yn(null));
            }
        }
      }
      function ur(a) {
        if (a) {
          var l = a._owner, g = mn(a.type, a._source, l ? l.type : null);
          Ae(g);
        } else
          Ae(null);
      }
      var Si;
      Si = !1;
      function Zs() {
        if (G.current) {
          var a = st(G.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
      function qu(a) {
        if (a !== void 0) {
          var l = a.fileName.replace(/^.*[\\\/]/, ""), g = a.lineNumber;
          return `

Check your code at ` + l + ":" + g + ".";
        }
        return "";
      }
      function Lu(a) {
        return a != null ? qu(a.__source) : "";
      }
      var eo = {};
      function Bu(a) {
        var l = Zs();
        if (!l) {
          var g = typeof a == "string" ? a : a.displayName || a.name;
          g && (l = `

Check the top-level render call using <` + g + ">.");
        }
        return l;
      }
      function to(a, l) {
        if (!(!a._store || a._store.validated || a.key != null)) {
          a._store.validated = !0;
          var g = Bu(l);
          if (!eo[g]) {
            eo[g] = !0;
            var _ = "";
            a && a._owner && a._owner !== G.current && (_ = " It was passed a child from " + st(a._owner.type) + "."), ur(a), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, _), ur(null);
          }
        }
      }
      function ro(a, l) {
        if (typeof a == "object") {
          if (nr(a))
            for (var g = 0; g < a.length; g++) {
              var _ = a[g];
              Et(_) && to(_, l);
            }
          else if (Et(a))
            a._store && (a._store.validated = !0);
          else if (a) {
            var A = k(a);
            if (typeof A == "function" && A !== a.entries)
              for (var L = A.call(a), D; !(D = L.next()).done; )
                Et(D.value) && to(D.value, l);
          }
        }
      }
      function no(a) {
        {
          var l = a.type;
          if (l == null || typeof l == "string")
            return;
          var g;
          if (typeof l == "function")
            g = l.propTypes;
          else if (typeof l == "object" && (l.$$typeof === h || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          l.$$typeof === C))
            g = l.propTypes;
          else
            return;
          if (g) {
            var _ = st(l);
            Fu(g, a.props, "prop", _, a);
          } else if (l.PropTypes !== void 0 && !Si) {
            Si = !0;
            var A = st(l);
            q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
          }
          typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $u(a) {
        {
          for (var l = Object.keys(a.props), g = 0; g < l.length; g++) {
            var _ = l[g];
            if (_ !== "children" && _ !== "key") {
              ur(a), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), ur(null);
              break;
            }
          }
          a.ref !== null && (ur(a), q("Invalid attribute `ref` supplied to `React.Fragment`."), ur(null));
        }
      }
      function io(a, l, g) {
        var _ = d(a);
        if (!_) {
          var A = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Lu(l);
          L ? A += L : A += Zs();
          var D;
          a === null ? D = "null" : nr(a) ? D = "array" : a !== void 0 && a.$$typeof === n ? (D = "<" + (st(a.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : D = typeof a, q("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, A);
        }
        var M = ui.apply(this, arguments);
        if (M == null)
          return M;
        if (_)
          for (var ee = 2; ee < arguments.length; ee++)
            ro(arguments[ee], a);
        return a === s ? $u(M) : no(M), M;
      }
      var so = !1;
      function Uu(a) {
        var l = io.bind(null, a);
        return l.type = a, so || (so = !0, et("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(l, "type", {
          enumerable: !1,
          get: function() {
            return et("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: a
            }), a;
          }
        }), l;
      }
      function Mu(a, l, g) {
        for (var _ = li.apply(this, arguments), A = 2; A < arguments.length; A++)
          ro(arguments[A], _.type);
        return no(_), _;
      }
      function ju(a, l) {
        var g = F.transition;
        F.transition = {};
        var _ = F.transition;
        F.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          a();
        } finally {
          if (F.transition = g, g === null && _._updatedFibers) {
            var A = _._updatedFibers.size;
            A > 10 && et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), _._updatedFibers.clear();
          }
        }
      }
      var oo = !1, gn = null;
      function Vu(a) {
        if (gn === null)
          try {
            var l = ("require" + Math.random()).slice(0, 7), g = t && t[l];
            gn = g.call(t, "timers").setImmediate;
          } catch {
            gn = function(A) {
              oo === !1 && (oo = !0, typeof MessageChannel > "u" && q("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var L = new MessageChannel();
              L.port1.onmessage = A, L.port2.postMessage(void 0);
            };
          }
        return gn(a);
      }
      var cr = 0, ao = !1;
      function uo(a) {
        {
          var l = cr;
          cr++, x.current === null && (x.current = []);
          var g = x.isBatchingLegacy, _;
          try {
            if (x.isBatchingLegacy = !0, _ = a(), !g && x.didScheduleLegacyUpdate) {
              var A = x.current;
              A !== null && (x.didScheduleLegacyUpdate = !1, Ai(A));
            }
          } catch (Re) {
            throw bn(l), Re;
          } finally {
            x.isBatchingLegacy = g;
          }
          if (_ !== null && typeof _ == "object" && typeof _.then == "function") {
            var L = _, D = !1, M = {
              then: function(Re, Ie) {
                D = !0, L.then(function(qe) {
                  bn(l), cr === 0 ? wi(qe, Re, Ie) : Re(qe);
                }, function(qe) {
                  bn(l), Ie(qe);
                });
              }
            };
            return !ao && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              D || (ao = !0, q("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), M;
          } else {
            var ee = _;
            if (bn(l), cr === 0) {
              var de = x.current;
              de !== null && (Ai(de), x.current = null);
              var _e = {
                then: function(Re, Ie) {
                  x.current === null ? (x.current = [], wi(ee, Re, Ie)) : Re(ee);
                }
              };
              return _e;
            } else {
              var Ee = {
                then: function(Re, Ie) {
                  Re(ee);
                }
              };
              return Ee;
            }
          }
        }
      }
      function bn(a) {
        a !== cr - 1 && q("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), cr = a;
      }
      function wi(a, l, g) {
        {
          var _ = x.current;
          if (_ !== null)
            try {
              Ai(_), Vu(function() {
                _.length === 0 ? (x.current = null, l(a)) : wi(a, l, g);
              });
            } catch (A) {
              g(A);
            }
          else
            l(a);
        }
      }
      var Ti = !1;
      function Ai(a) {
        if (!Ti) {
          Ti = !0;
          var l = 0;
          try {
            for (; l < a.length; l++) {
              var g = a[l];
              do
                g = g(!0);
              while (g !== null);
            }
            a.length = 0;
          } catch (_) {
            throw a = a.slice(l + 1), _;
          } finally {
            Ti = !1;
          }
        }
      }
      var Gu = io, zu = Mu, Wu = Uu, Hu = {
        map: Ut,
        forEach: un,
        count: hi,
        toArray: pi,
        only: cn
      };
      e.Children = Hu, e.Component = J, e.Fragment = s, e.Profiler = u, e.PureComponent = ae, e.StrictMode = o, e.Suspense = m, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe, e.act = uo, e.cloneElement = zu, e.createContext = ln, e.createElement = Gu, e.createFactory = Wu, e.createRef = si, e.forwardRef = gi, e.isValidElement = Et, e.lazy = yi, e.memo = v, e.startTransition = ju, e.unstable_act = uo, e.useCallback = Te, e.useContext = B, e.useDebugValue = ft, e.useDeferredValue = kr, e.useEffect = z, e.useId = bi, e.useImperativeHandle = Rt, e.useInsertionEffect = Fe, e.useLayoutEffect = ve, e.useMemo = $e, e.useReducer = ue, e.useRef = Q, e.useState = ie, e.useSyncExternalStore = _i, e.useTransition = Le, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ur, Ur.exports)), Ur.exports;
}
process.env.NODE_ENV === "production" ? Ji.exports = pc() : Ji.exports = mc();
var Pe = Ji.exports, Fr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function yc() {
  if (wo) return Fr;
  wo = 1;
  var t = Pe, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, c, p) {
    var h, m = {}, O = null, C = null;
    p !== void 0 && (O = "" + p), c.key !== void 0 && (O = "" + c.key), c.ref !== void 0 && (C = c.ref);
    for (h in c) n.call(c, h) && !s.hasOwnProperty(h) && (m[h] = c[h]);
    if (u && u.defaultProps) for (h in c = u.defaultProps, c) m[h] === void 0 && (m[h] = c[h]);
    return { $$typeof: e, type: u, key: O, ref: C, props: m, _owner: i.current };
  }
  return Fr.Fragment = r, Fr.jsx = o, Fr.jsxs = o, Fr;
}
var qr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function gc() {
  return To || (To = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Pe, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = Symbol.iterator, N = "@@iterator";
    function R(d) {
      if (d === null || typeof d != "object")
        return null;
      var v = S && d[S] || d[N];
      return typeof v == "function" ? v : null;
    }
    var U = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(d) {
      {
        for (var v = arguments.length, T = new Array(v > 1 ? v - 1 : 0), B = 1; B < v; B++)
          T[B - 1] = arguments[B];
        P("error", d, T);
      }
    }
    function P(d, v, T) {
      {
        var B = U.ReactDebugCurrentFrame, ie = B.getStackAddendum();
        ie !== "" && (v += "%s", T = T.concat([ie]));
        var ue = T.map(function(Q) {
          return String(Q);
        });
        ue.unshift("Warning: " + v), Function.prototype.apply.call(console[d], console, ue);
      }
    }
    var F = !1, x = !1, G = !1, te = !1, V = !1, Ae;
    Ae = Symbol.for("react.module.reference");
    function pe(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === s || V || d === i || d === p || d === h || te || d === C || F || x || G || typeof d == "object" && d !== null && (d.$$typeof === O || d.$$typeof === m || d.$$typeof === o || d.$$typeof === u || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === Ae || d.getModuleId !== void 0));
    }
    function re(d, v, T) {
      var B = d.displayName;
      if (B)
        return B;
      var ie = v.displayName || v.name || "";
      return ie !== "" ? T + "(" + ie + ")" : T;
    }
    function we(d) {
      return d.displayName || "Context";
    }
    function be(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case u:
            var v = d;
            return we(v) + ".Consumer";
          case o:
            var T = d;
            return we(T._context) + ".Provider";
          case c:
            return re(d, d.render, "ForwardRef");
          case m:
            var B = d.displayName || null;
            return B !== null ? B : be(d.type) || "Memo";
          case O: {
            var ie = d, ue = ie._payload, Q = ie._init;
            try {
              return be(Q(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ke = Object.assign, xe = 0, et, q, it, xt, ct, y, w;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function J() {
      {
        if (xe === 0) {
          et = console.log, q = console.info, it = console.warn, xt = console.error, ct = console.group, y = console.groupCollapsed, w = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        xe++;
      }
    }
    function ne() {
      {
        if (xe--, xe === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ke({}, d, {
              value: et
            }),
            info: ke({}, d, {
              value: q
            }),
            warn: ke({}, d, {
              value: it
            }),
            error: ke({}, d, {
              value: xt
            }),
            group: ke({}, d, {
              value: ct
            }),
            groupCollapsed: ke({}, d, {
              value: y
            }),
            groupEnd: ke({}, d, {
              value: w
            })
          });
        }
        xe < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = U.ReactCurrentDispatcher, fe;
    function ce(d, v, T) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (ie) {
            var B = ie.stack.trim().match(/\n( *(at )?)/);
            fe = B && B[1] || "";
          }
        return `
` + fe + d;
      }
    }
    var ae = !1, Ce;
    {
      var si = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new si();
    }
    function Zr(d, v) {
      if (!d || ae)
        return "";
      {
        var T = Ce.get(d);
        if (T !== void 0)
          return T;
      }
      var B;
      ae = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = he.current, he.current = null, J();
      try {
        if (v) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (Le) {
              B = Le;
            }
            Reflect.construct(d, [], Q);
          } else {
            try {
              Q.call();
            } catch (Le) {
              B = Le;
            }
            d.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Le) {
            B = Le;
          }
          d();
        }
      } catch (Le) {
        if (Le && B && typeof Le.stack == "string") {
          for (var z = Le.stack.split(`
`), Fe = B.stack.split(`
`), ve = z.length - 1, Te = Fe.length - 1; ve >= 1 && Te >= 0 && z[ve] !== Fe[Te]; )
            Te--;
          for (; ve >= 1 && Te >= 0; ve--, Te--)
            if (z[ve] !== Fe[Te]) {
              if (ve !== 1 || Te !== 1)
                do
                  if (ve--, Te--, Te < 0 || z[ve] !== Fe[Te]) {
                    var $e = `
` + z[ve].replace(" at new ", " at ");
                    return d.displayName && $e.includes("<anonymous>") && ($e = $e.replace("<anonymous>", d.displayName)), typeof d == "function" && Ce.set(d, $e), $e;
                  }
                while (ve >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        ae = !1, he.current = ue, ne(), Error.prepareStackTrace = ie;
      }
      var Rt = d ? d.displayName || d.name : "", ft = Rt ? ce(Rt) : "";
      return typeof d == "function" && Ce.set(d, ft), ft;
    }
    function nr(d, v, T) {
      return Zr(d, !1);
    }
    function oi(d) {
      var v = d.prototype;
      return !!(v && v.isReactComponent);
    }
    function ir(d, v, T) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Zr(d, oi(d));
      if (typeof d == "string")
        return ce(d);
      switch (d) {
        case p:
          return ce("Suspense");
        case h:
          return ce("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            return nr(d.render);
          case m:
            return ir(d.type, v, T);
          case O: {
            var B = d, ie = B._payload, ue = B._init;
            try {
              return ir(ue(ie), v, T);
            } catch {
            }
          }
        }
      return "";
    }
    var bt = Object.prototype.hasOwnProperty, Ft = {}, en = U.ReactDebugCurrentFrame;
    function qt(d) {
      if (d) {
        var v = d._owner, T = ir(d.type, d._source, v ? v.type : null);
        en.setExtraStackFrame(T);
      } else
        en.setExtraStackFrame(null);
    }
    function st(d, v, T, B, ie) {
      {
        var ue = Function.call.bind(bt);
        for (var Q in d)
          if (ue(d, Q)) {
            var z = void 0;
            try {
              if (typeof d[Q] != "function") {
                var Fe = Error((B || "React class") + ": " + T + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fe.name = "Invariant Violation", Fe;
              }
              z = d[Q](v, Q, B, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              z = ve;
            }
            z && !(z instanceof Error) && (qt(ie), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", T, Q, typeof z), qt(null)), z instanceof Error && !(z.message in Ft) && (Ft[z.message] = !0, qt(ie), k("Failed %s type: %s", T, z.message), qt(null));
          }
      }
    }
    var Lt = Array.isArray;
    function sr(d) {
      return Lt(d);
    }
    function tn(d) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, T = v && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return T;
      }
    }
    function rn(d) {
      try {
        return or(d), !1;
      } catch {
        return !0;
      }
    }
    function or(d) {
      return "" + d;
    }
    function Nr(d) {
      if (rn(d))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tn(d)), or(d);
    }
    var _t = U.ReactCurrentOwner, ai = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nn, sn, Bt;
    Bt = {};
    function ui(d) {
      if (bt.call(d, "ref")) {
        var v = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function ci(d) {
      if (bt.call(d, "key")) {
        var v = Object.getOwnPropertyDescriptor(d, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function li(d, v) {
      if (typeof d.ref == "string" && _t.current && v && _t.current.stateNode !== v) {
        var T = be(_t.current.type);
        Bt[T] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', be(_t.current.type), d.ref), Bt[T] = !0);
      }
    }
    function Et(d, v) {
      {
        var T = function() {
          nn || (nn = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function on(d, v) {
      {
        var T = function() {
          sn || (sn = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var fi = function(d, v, T, B, ie, ue, Q) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: d,
        key: v,
        ref: T,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function di(d, v, T, B, ie) {
      {
        var ue, Q = {}, z = null, Fe = null;
        T !== void 0 && (Nr(T), z = "" + T), ci(v) && (Nr(v.key), z = "" + v.key), ui(v) && (Fe = v.ref, li(v, ie));
        for (ue in v)
          bt.call(v, ue) && !ai.hasOwnProperty(ue) && (Q[ue] = v[ue]);
        if (d && d.defaultProps) {
          var ve = d.defaultProps;
          for (ue in ve)
            Q[ue] === void 0 && (Q[ue] = ve[ue]);
        }
        if (z || Fe) {
          var Te = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          z && Et(Q, Te), Fe && on(Q, Te);
        }
        return fi(d, z, Fe, ie, B, _t.current, Q);
      }
    }
    var ar = U.ReactCurrentOwner, an = U.ReactDebugCurrentFrame;
    function lt(d) {
      if (d) {
        var v = d._owner, T = ir(d.type, d._source, v ? v.type : null);
        an.setExtraStackFrame(T);
      } else
        an.setExtraStackFrame(null);
    }
    var $t;
    $t = !1;
    function vt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function Ut() {
      {
        if (ar.current) {
          var d = be(ar.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function hi(d) {
      return "";
    }
    var un = {};
    function pi(d) {
      {
        var v = Ut();
        if (!v) {
          var T = typeof d == "string" ? d : d.displayName || d.name;
          T && (v = `

Check the top-level render call using <` + T + ">.");
        }
        return v;
      }
    }
    function cn(d, v) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var T = pi(v);
        if (un[T])
          return;
        un[T] = !0;
        var B = "";
        d && d._owner && d._owner !== ar.current && (B = " It was passed a child from " + be(d._owner.type) + "."), lt(d), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, B), lt(null);
      }
    }
    function ln(d, v) {
      {
        if (typeof d != "object")
          return;
        if (sr(d))
          for (var T = 0; T < d.length; T++) {
            var B = d[T];
            vt(B) && cn(B, v);
          }
        else if (vt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var ie = R(d);
          if (typeof ie == "function" && ie !== d.entries)
            for (var ue = ie.call(d), Q; !(Q = ue.next()).done; )
              vt(Q.value) && cn(Q.value, v);
        }
      }
    }
    function Mt(d) {
      {
        var v = d.type;
        if (v == null || typeof v == "string")
          return;
        var T;
        if (typeof v == "function")
          T = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === m))
          T = v.propTypes;
        else
          return;
        if (T) {
          var B = be(v);
          st(T, d.props, "prop", B, d);
        } else if (v.PropTypes !== void 0 && !$t) {
          $t = !0;
          var ie = be(v);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dr(d) {
      {
        for (var v = Object.keys(d.props), T = 0; T < v.length; T++) {
          var B = v[T];
          if (B !== "children" && B !== "key") {
            lt(d), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), lt(null);
            break;
          }
        }
        d.ref !== null && (lt(d), k("Invalid attribute `ref` supplied to `React.Fragment`."), lt(null));
      }
    }
    var Pr = {};
    function fn(d, v, T, B, ie, ue) {
      {
        var Q = pe(d);
        if (!Q) {
          var z = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fe = hi();
          Fe ? z += Fe : z += Ut();
          var ve;
          d === null ? ve = "null" : sr(d) ? ve = "array" : d !== void 0 && d.$$typeof === e ? (ve = "<" + (be(d.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof d, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, z);
        }
        var Te = di(d, v, T, ie, ue);
        if (Te == null)
          return Te;
        if (Q) {
          var $e = v.children;
          if ($e !== void 0)
            if (B)
              if (sr($e)) {
                for (var Rt = 0; Rt < $e.length; Rt++)
                  ln($e[Rt], d);
                Object.freeze && Object.freeze($e);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ln($e, d);
        }
        if (bt.call(v, "key")) {
          var ft = be(d), Le = Object.keys(v).filter(function(_i) {
            return _i !== "key";
          }), kr = Le.length > 0 ? "{key: someKey, " + Le.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pr[ft + kr]) {
            var bi = Le.length > 0 ? "{" + Le.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, kr, ft, bi, ft), Pr[ft + kr] = !0;
          }
        }
        return d === n ? Dr(Te) : Mt(Te), Te;
      }
    }
    function mi(d, v, T) {
      return fn(d, v, T, !0);
    }
    function yi(d, v, T) {
      return fn(d, v, T, !1);
    }
    var gi = yi, dn = mi;
    qr.Fragment = n, qr.jsx = gi, qr.jsxs = dn;
  }()), qr;
}
process.env.NODE_ENV === "production" ? yc() : gc();
var bc = Pe.createContext(
  void 0
), da = (t) => {
  const e = Pe.useContext(bc);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, ha = Pe.createContext(!1), _c = () => Pe.useContext(ha);
ha.Provider;
function Ec() {
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
var vc = Pe.createContext(Ec()), Rc = () => Pe.useContext(vc);
function pa(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function Xi() {
}
var Sc = (t, e) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1));
}, wc = (t) => {
  Pe.useEffect(() => {
    t.clearReset();
  }, [t]);
}, Tc = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n,
  suspense: i
}) => t.isError && !e.isReset() && !t.isFetching && n && (i && t.data === void 0 || pa(r, [t.error, n])), Ac = (t) => {
  const e = t.staleTime;
  t.suspense && (t.staleTime = typeof e == "function" ? (...r) => Math.max(e(...r), 1e3) : Math.max(e ?? 1e3, 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, Oc = (t, e) => t.isLoading && t.isFetching && !e, Cc = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, Ao = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function Ic(t, e, r) {
  var m, O, C, S, N;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = da(), i = _c(), s = Rc(), o = n.defaultQueryOptions(t);
  (O = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || O.call(
    m,
    o
  ), process.env.NODE_ENV !== "production" && (o.queryFn || console.error(
    `[${o.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), o._optimisticResults = i ? "isRestoring" : "optimistic", Ac(o), Sc(o, s), wc(s);
  const u = !n.getQueryCache().get(o.queryHash), [c] = Pe.useState(
    () => new e(
      n,
      o
    )
  ), p = c.getOptimisticResult(o), h = !i && t.subscribed !== !1;
  if (Pe.useSyncExternalStore(
    Pe.useCallback(
      (R) => {
        const U = h ? c.subscribe(Gn.batchCalls(R)) : Xi;
        return c.updateResult(), U;
      },
      [c, h]
    ),
    () => c.getCurrentResult(),
    () => c.getCurrentResult()
  ), Pe.useEffect(() => {
    c.setOptions(o);
  }, [o, c]), Cc(o, p))
    throw Ao(o, c, s);
  if (Tc({
    result: p,
    errorResetBoundary: s,
    throwOnError: o.throwOnError,
    query: n.getQueryCache().get(o.queryHash),
    suspense: o.suspense
  }))
    throw p.error;
  if ((S = (C = n.getDefaultOptions().queries) == null ? void 0 : C._experimental_afterQuery) == null || S.call(
    C,
    o,
    p
  ), o.experimental_prefetchInRender && !jr && Oc(p, i)) {
    const R = u ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Ao(o, c, s)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (N = n.getQueryCache().get(o.queryHash)) == null ? void 0 : N.promise
    );
    R == null || R.catch(Xi).finally(() => {
      c.updateResult();
    });
  }
  return o.notifyOnChangeProps ? p : c.trackResult(p);
}
function Se(t, e) {
  return Ic(t, cc);
}
function ge(t, e) {
  const r = da(), [n] = Pe.useState(
    () => new dc(
      r,
      t
    )
  );
  Pe.useEffect(() => {
    n.setOptions(t);
  }, [n, t]);
  const i = Pe.useSyncExternalStore(
    Pe.useCallback(
      (o) => n.subscribe(Gn.batchCalls(o)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), s = Pe.useCallback(
    (o, u) => {
      n.mutate(o, u).catch(Xi);
    },
    [n]
  );
  if (i.error && pa(n.options.throwOnError, [i.error]))
    throw i.error;
  return { ...i, mutate: s, mutateAsync: i.mutate };
}
function ma(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Nc } = Object.prototype, { getPrototypeOf: Ts } = Object, zn = /* @__PURE__ */ ((t) => (e) => {
  const r = Nc.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), nt = (t) => (t = t.toLowerCase(), (e) => zn(e) === t), Wn = (t) => (e) => typeof e === t, { isArray: vr } = Array, Vr = Wn("undefined");
function Dc(t) {
  return t !== null && !Vr(t) && t.constructor !== null && !Vr(t.constructor) && Ye(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const ya = nt("ArrayBuffer");
function Pc(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && ya(t.buffer), e;
}
const kc = Wn("string"), Ye = Wn("function"), ga = Wn("number"), Hn = (t) => t !== null && typeof t == "object", xc = (t) => t === !0 || t === !1, An = (t) => {
  if (zn(t) !== "object")
    return !1;
  const e = Ts(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Fc = nt("Date"), qc = nt("File"), Lc = nt("Blob"), Bc = nt("FileList"), $c = (t) => Hn(t) && Ye(t.pipe), Uc = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Ye(t.append) && ((e = zn(t)) === "formdata" || // detect form-data instance
  e === "object" && Ye(t.toString) && t.toString() === "[object FormData]"));
}, Mc = nt("URLSearchParams"), [jc, Vc, Gc, zc] = ["ReadableStream", "Request", "Response", "Headers"].map(nt), Wc = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Kr(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), vr(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const s = r ? Object.getOwnPropertyNames(t) : Object.keys(t), o = s.length;
    let u;
    for (n = 0; n < o; n++)
      u = s[n], e.call(null, t[u], u, t);
  }
}
function ba(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const Vt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, _a = (t) => !Vr(t) && t !== Vt;
function Zi() {
  const { caseless: t } = _a(this) && this || {}, e = {}, r = (n, i) => {
    const s = t && ba(e, i) || i;
    An(e[s]) && An(n) ? e[s] = Zi(e[s], n) : An(n) ? e[s] = Zi({}, n) : vr(n) ? e[s] = n.slice() : e[s] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Kr(arguments[n], r);
  return e;
}
const Hc = (t, e, r, { allOwnKeys: n } = {}) => (Kr(e, (i, s) => {
  r && Ye(i) ? t[s] = ma(i, r) : t[s] = i;
}, { allOwnKeys: n }), t), Kc = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Yc = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Qc = (t, e, r, n) => {
  let i, s, o;
  const u = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
      o = i[s], (!n || n(o, t, e)) && !u[o] && (e[o] = t[o], u[o] = !0);
    t = r !== !1 && Ts(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Jc = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Xc = (t) => {
  if (!t) return null;
  if (vr(t)) return t;
  let e = t.length;
  if (!ga(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Zc = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ts(Uint8Array)), el = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const s = i.value;
    e.call(t, s[0], s[1]);
  }
}, tl = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, rl = nt("HTMLFormElement"), nl = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Oo = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), il = nt("RegExp"), Ea = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Kr(r, (i, s) => {
    let o;
    (o = e(i, s, t)) !== !1 && (n[s] = o || i);
  }), Object.defineProperties(t, n);
}, sl = (t) => {
  Ea(t, (e, r) => {
    if (Ye(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (Ye(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, ol = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((s) => {
      r[s] = !0;
    });
  };
  return vr(t) ? n(t) : n(String(t).split(e)), r;
}, al = () => {
}, ul = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, Ii = "abcdefghijklmnopqrstuvwxyz", Co = "0123456789", va = {
  DIGIT: Co,
  ALPHA: Ii,
  ALPHA_DIGIT: Ii + Ii.toUpperCase() + Co
}, cl = (t = 16, e = va.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function ll(t) {
  return !!(t && Ye(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const fl = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (Hn(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const s = vr(n) ? [] : {};
        return Kr(n, (o, u) => {
          const c = r(o, i + 1);
          !Vr(c) && (s[u] = c);
        }), e[i] = void 0, s;
      }
    }
    return n;
  };
  return r(t, 0);
}, dl = nt("AsyncFunction"), hl = (t) => t && (Hn(t) || Ye(t)) && Ye(t.then) && Ye(t.catch), Ra = ((t, e) => t ? setImmediate : e ? ((r, n) => (Vt.addEventListener("message", ({ source: i, data: s }) => {
  i === Vt && s === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), Vt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ye(Vt.postMessage)
), pl = typeof queueMicrotask < "u" ? queueMicrotask.bind(Vt) : typeof process < "u" && process.nextTick || Ra, b = {
  isArray: vr,
  isArrayBuffer: ya,
  isBuffer: Dc,
  isFormData: Uc,
  isArrayBufferView: Pc,
  isString: kc,
  isNumber: ga,
  isBoolean: xc,
  isObject: Hn,
  isPlainObject: An,
  isReadableStream: jc,
  isRequest: Vc,
  isResponse: Gc,
  isHeaders: zc,
  isUndefined: Vr,
  isDate: Fc,
  isFile: qc,
  isBlob: Lc,
  isRegExp: il,
  isFunction: Ye,
  isStream: $c,
  isURLSearchParams: Mc,
  isTypedArray: Zc,
  isFileList: Bc,
  forEach: Kr,
  merge: Zi,
  extend: Hc,
  trim: Wc,
  stripBOM: Kc,
  inherits: Yc,
  toFlatObject: Qc,
  kindOf: zn,
  kindOfTest: nt,
  endsWith: Jc,
  toArray: Xc,
  forEachEntry: el,
  matchAll: tl,
  isHTMLForm: rl,
  hasOwnProperty: Oo,
  hasOwnProp: Oo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ea,
  freezeMethods: sl,
  toObjectSet: ol,
  toCamelCase: nl,
  noop: al,
  toFiniteNumber: ul,
  findKey: ba,
  global: Vt,
  isContextDefined: _a,
  ALPHABET: va,
  generateString: cl,
  isSpecCompliantForm: ll,
  toJSONObject: fl,
  isAsyncFn: dl,
  isThenable: hl,
  setImmediate: Ra,
  asap: pl
};
function j(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
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
const Sa = j.prototype, wa = {};
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
  wa[t] = { value: t };
});
Object.defineProperties(j, wa);
Object.defineProperty(Sa, "isAxiosError", { value: !0 });
j.from = (t, e, r, n, i, s) => {
  const o = Object.create(Sa);
  return b.toFlatObject(t, o, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError"), j.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, s && Object.assign(o, s), o;
};
const ml = null;
function es(t) {
  return b.isPlainObject(t) || b.isArray(t);
}
function Ta(t) {
  return b.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Io(t, e, r) {
  return t ? t.concat(e).map(function(i, s) {
    return i = Ta(i), !r && s ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function yl(t) {
  return b.isArray(t) && !t.some(es);
}
const gl = b.toFlatObject(b, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Kn(t, e, r) {
  if (!b.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = b.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(N, R) {
    return !b.isUndefined(R[N]);
  });
  const n = r.metaTokens, i = r.visitor || h, s = r.dots, o = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(e);
  if (!b.isFunction(i))
    throw new TypeError("visitor must be a function");
  function p(S) {
    if (S === null) return "";
    if (b.isDate(S))
      return S.toISOString();
    if (!c && b.isBlob(S))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(S) || b.isTypedArray(S) ? c && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function h(S, N, R) {
    let U = S;
    if (S && !R && typeof S == "object") {
      if (b.endsWith(N, "{}"))
        N = n ? N : N.slice(0, -2), S = JSON.stringify(S);
      else if (b.isArray(S) && yl(S) || (b.isFileList(S) || b.endsWith(N, "[]")) && (U = b.toArray(S)))
        return N = Ta(N), U.forEach(function(P, F) {
          !(b.isUndefined(P) || P === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Io([N], F, s) : o === null ? N : N + "[]",
            p(P)
          );
        }), !1;
    }
    return es(S) ? !0 : (e.append(Io(R, N, s), p(S)), !1);
  }
  const m = [], O = Object.assign(gl, {
    defaultVisitor: h,
    convertValue: p,
    isVisitable: es
  });
  function C(S, N) {
    if (!b.isUndefined(S)) {
      if (m.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + N.join("."));
      m.push(S), b.forEach(S, function(U, k) {
        (!(b.isUndefined(U) || U === null) && i.call(
          e,
          U,
          b.isString(k) ? k.trim() : k,
          N,
          O
        )) === !0 && C(U, N ? N.concat(k) : [k]);
      }), m.pop();
    }
  }
  if (!b.isObject(t))
    throw new TypeError("data must be an object");
  return C(t), e;
}
function No(t) {
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
function As(t, e) {
  this._pairs = [], t && Kn(t, this, e);
}
const Aa = As.prototype;
Aa.append = function(e, r) {
  this._pairs.push([e, r]);
};
Aa.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, No);
  } : No;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function bl(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Oa(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || bl, i = r && r.serialize;
  let s;
  if (i ? s = i(e, r) : s = b.isURLSearchParams(e) ? e.toString() : new As(e, r).toString(n), s) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Do {
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
    b.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Ca = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _l = typeof URLSearchParams < "u" ? URLSearchParams : As, El = typeof FormData < "u" ? FormData : null, vl = typeof Blob < "u" ? Blob : null, Rl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _l,
    FormData: El,
    Blob: vl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Os = typeof window < "u" && typeof document < "u", ts = typeof navigator == "object" && navigator || void 0, Sl = Os && (!ts || ["ReactNative", "NativeScript", "NS"].indexOf(ts.product) < 0), wl = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Tl = Os && window.location.href || "http://localhost", Al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Os,
  hasStandardBrowserEnv: Sl,
  hasStandardBrowserWebWorkerEnv: wl,
  navigator: ts,
  origin: Tl
}, Symbol.toStringTag, { value: "Module" })), We = {
  ...Al,
  ...Rl
};
function Ol(t, e) {
  return Kn(t, new We.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, s) {
      return We.isNode && b.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Cl(t) {
  return b.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Il(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++)
    s = r[n], e[s] = t[s];
  return e;
}
function Ia(t) {
  function e(r, n, i, s) {
    let o = r[s++];
    if (o === "__proto__") return !0;
    const u = Number.isFinite(+o), c = s >= r.length;
    return o = !o && b.isArray(i) ? i.length : o, c ? (b.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !u) : ((!i[o] || !b.isObject(i[o])) && (i[o] = []), e(r, n, i[o], s) && b.isArray(i[o]) && (i[o] = Il(i[o])), !u);
  }
  if (b.isFormData(t) && b.isFunction(t.entries)) {
    const r = {};
    return b.forEachEntry(t, (n, i) => {
      e(Cl(n), i, r, 0);
    }), r;
  }
  return null;
}
function Nl(t, e, r) {
  if (b.isString(t))
    try {
      return (e || JSON.parse)(t), b.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(t);
}
const Yr = {
  transitional: Ca,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, s = b.isObject(e);
    if (s && b.isHTMLForm(e) && (e = new FormData(e)), b.isFormData(e))
      return i ? JSON.stringify(Ia(e)) : e;
    if (b.isArrayBuffer(e) || b.isBuffer(e) || b.isStream(e) || b.isFile(e) || b.isBlob(e) || b.isReadableStream(e))
      return e;
    if (b.isArrayBufferView(e))
      return e.buffer;
    if (b.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let u;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ol(e, this.formSerializer).toString();
      if ((u = b.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Kn(
          u ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || i ? (r.setContentType("application/json", !1), Nl(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Yr.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (b.isResponse(e) || b.isReadableStream(e))
      return e;
    if (e && b.isString(e) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
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
    FormData: We.classes.FormData,
    Blob: We.classes.Blob
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
b.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Yr.headers[t] = {};
});
const Dl = b.toObjectSet([
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
]), Pl = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || e[r] && Dl[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Po = Symbol("internals");
function Lr(t) {
  return t && String(t).trim().toLowerCase();
}
function On(t) {
  return t === !1 || t == null ? t : b.isArray(t) ? t.map(On) : String(t);
}
function kl(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const xl = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Ni(t, e, r, n, i) {
  if (b.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!b.isString(e)) {
    if (b.isString(n))
      return e.indexOf(n) !== -1;
    if (b.isRegExp(n))
      return n.test(e);
  }
}
function Fl(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function ql(t, e) {
  const r = b.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(i, s, o) {
        return this[n].call(this, e, i, s, o);
      },
      configurable: !0
    });
  });
}
class He {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function s(u, c, p) {
      const h = Lr(c);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const m = b.findKey(i, h);
      (!m || i[m] === void 0 || p === !0 || p === void 0 && i[m] !== !1) && (i[m || c] = On(u));
    }
    const o = (u, c) => b.forEach(u, (p, h) => s(p, h, c));
    if (b.isPlainObject(e) || e instanceof this.constructor)
      o(e, r);
    else if (b.isString(e) && (e = e.trim()) && !xl(e))
      o(Pl(e), r);
    else if (b.isHeaders(e))
      for (const [u, c] of e.entries())
        s(c, u, n);
    else
      e != null && s(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = Lr(e), e) {
      const n = b.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return kl(i);
        if (b.isFunction(r))
          return r.call(this, i, n);
        if (b.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = Lr(e), e) {
      const n = b.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || Ni(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function s(o) {
      if (o = Lr(o), o) {
        const u = b.findKey(n, o);
        u && (!r || Ni(n, n[u], u, r)) && (delete n[u], i = !0);
      }
    }
    return b.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const s = r[n];
      (!e || Ni(this, this[s], s, e, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, n = {};
    return b.forEach(this, (i, s) => {
      const o = b.findKey(n, s);
      if (o) {
        r[o] = On(i), delete r[s];
        return;
      }
      const u = e ? Fl(s) : String(s).trim();
      u !== s && delete r[s], r[u] = On(i), n[u] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return b.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && b.isArray(n) ? n.join(", ") : n);
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
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(e) {
    const n = (this[Po] = this[Po] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const u = Lr(o);
      n[u] || (ql(i, o), n[u] = !0);
    }
    return b.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
He.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.reduceDescriptors(He.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
b.freezeMethods(He);
function Di(t, e) {
  const r = this || Yr, n = e || r, i = He.from(n.headers);
  let s = n.data;
  return b.forEach(t, function(u) {
    s = u.call(r, s, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), s;
}
function Na(t) {
  return !!(t && t.__CANCEL__);
}
function Rr(t, e, r) {
  j.call(this, t ?? "canceled", j.ERR_CANCELED, e, r), this.name = "CanceledError";
}
b.inherits(Rr, j, {
  __CANCEL__: !0
});
function Da(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new j(
    "Request failed with status code " + r.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ll(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Bl(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, s = 0, o;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const p = Date.now(), h = n[s];
    o || (o = p), r[i] = c, n[i] = p;
    let m = s, O = 0;
    for (; m !== i; )
      O += r[m++], m = m % t;
    if (i = (i + 1) % t, i === s && (s = (s + 1) % t), p - o < e)
      return;
    const C = h && p - h;
    return C ? Math.round(O * 1e3 / C) : void 0;
  };
}
function $l(t, e) {
  let r = 0, n = 1e3 / e, i, s;
  const o = (p, h = Date.now()) => {
    r = h, i = null, s && (clearTimeout(s), s = null), t.apply(null, p);
  };
  return [(...p) => {
    const h = Date.now(), m = h - r;
    m >= n ? o(p, h) : (i = p, s || (s = setTimeout(() => {
      s = null, o(i);
    }, n - m)));
  }, () => i && o(i)];
}
const qn = (t, e, r = 3) => {
  let n = 0;
  const i = Bl(50, 250);
  return $l((s) => {
    const o = s.loaded, u = s.lengthComputable ? s.total : void 0, c = o - n, p = i(c), h = o <= u;
    n = o;
    const m = {
      loaded: o,
      total: u,
      progress: u ? o / u : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && u && h ? (u - o) / p : void 0,
      event: s,
      lengthComputable: u != null,
      [e ? "download" : "upload"]: !0
    };
    t(m);
  }, r);
}, ko = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, xo = (t) => (...e) => b.asap(() => t(...e)), Ul = We.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = We.navigator && /(msie|trident)/i.test(We.navigator.userAgent), r = document.createElement("a");
    let n;
    function i(s) {
      let o = s;
      return e && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
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
    return n = i(window.location.href), function(o) {
      const u = b.isString(o) ? i(o) : o;
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
), Ml = We.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, i, s) {
      const o = [t + "=" + encodeURIComponent(e)];
      b.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), b.isString(n) && o.push("path=" + n), b.isString(i) && o.push("domain=" + i), s === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function jl(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Vl(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Pa(t, e) {
  return t && !jl(e) ? Vl(t, e) : e;
}
const Fo = (t) => t instanceof He ? { ...t } : t;
function Jt(t, e) {
  e = e || {};
  const r = {};
  function n(p, h, m) {
    return b.isPlainObject(p) && b.isPlainObject(h) ? b.merge.call({ caseless: m }, p, h) : b.isPlainObject(h) ? b.merge({}, h) : b.isArray(h) ? h.slice() : h;
  }
  function i(p, h, m) {
    if (b.isUndefined(h)) {
      if (!b.isUndefined(p))
        return n(void 0, p, m);
    } else return n(p, h, m);
  }
  function s(p, h) {
    if (!b.isUndefined(h))
      return n(void 0, h);
  }
  function o(p, h) {
    if (b.isUndefined(h)) {
      if (!b.isUndefined(p))
        return n(void 0, p);
    } else return n(void 0, h);
  }
  function u(p, h, m) {
    if (m in e)
      return n(p, h);
    if (m in t)
      return n(void 0, p);
  }
  const c = {
    url: s,
    method: s,
    data: s,
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
    headers: (p, h) => i(Fo(p), Fo(h), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, t, e)), function(h) {
    const m = c[h] || i, O = m(t[h], e[h], h);
    b.isUndefined(O) && m !== u || (r[h] = O);
  }), r;
}
const ka = (t) => {
  const e = Jt({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: s, headers: o, auth: u } = e;
  e.headers = o = He.from(o), e.url = Oa(Pa(e.baseURL, e.url), t.params, t.paramsSerializer), u && o.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let c;
  if (b.isFormData(r)) {
    if (We.hasStandardBrowserEnv || We.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((c = o.getContentType()) !== !1) {
      const [p, ...h] = c ? c.split(";").map((m) => m.trim()).filter(Boolean) : [];
      o.setContentType([p || "multipart/form-data", ...h].join("; "));
    }
  }
  if (We.hasStandardBrowserEnv && (n && b.isFunction(n) && (n = n(e)), n || n !== !1 && Ul(e.url))) {
    const p = i && s && Ml.read(s);
    p && o.set(i, p);
  }
  return e;
}, Gl = typeof XMLHttpRequest < "u", zl = Gl && function(t) {
  return new Promise(function(r, n) {
    const i = ka(t);
    let s = i.data;
    const o = He.from(i.headers).normalize();
    let { responseType: u, onUploadProgress: c, onDownloadProgress: p } = i, h, m, O, C, S;
    function N() {
      C && C(), S && S(), i.cancelToken && i.cancelToken.unsubscribe(h), i.signal && i.signal.removeEventListener("abort", h);
    }
    let R = new XMLHttpRequest();
    R.open(i.method.toUpperCase(), i.url, !0), R.timeout = i.timeout;
    function U() {
      if (!R)
        return;
      const P = He.from(
        "getAllResponseHeaders" in R && R.getAllResponseHeaders()
      ), x = {
        data: !u || u === "text" || u === "json" ? R.responseText : R.response,
        status: R.status,
        statusText: R.statusText,
        headers: P,
        config: t,
        request: R
      };
      Da(function(te) {
        r(te), N();
      }, function(te) {
        n(te), N();
      }, x), R = null;
    }
    "onloadend" in R ? R.onloadend = U : R.onreadystatechange = function() {
      !R || R.readyState !== 4 || R.status === 0 && !(R.responseURL && R.responseURL.indexOf("file:") === 0) || setTimeout(U);
    }, R.onabort = function() {
      R && (n(new j("Request aborted", j.ECONNABORTED, t, R)), R = null);
    }, R.onerror = function() {
      n(new j("Network Error", j.ERR_NETWORK, t, R)), R = null;
    }, R.ontimeout = function() {
      let F = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const x = i.transitional || Ca;
      i.timeoutErrorMessage && (F = i.timeoutErrorMessage), n(new j(
        F,
        x.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        t,
        R
      )), R = null;
    }, s === void 0 && o.setContentType(null), "setRequestHeader" in R && b.forEach(o.toJSON(), function(F, x) {
      R.setRequestHeader(x, F);
    }), b.isUndefined(i.withCredentials) || (R.withCredentials = !!i.withCredentials), u && u !== "json" && (R.responseType = i.responseType), p && ([O, S] = qn(p, !0), R.addEventListener("progress", O)), c && R.upload && ([m, C] = qn(c), R.upload.addEventListener("progress", m), R.upload.addEventListener("loadend", C)), (i.cancelToken || i.signal) && (h = (P) => {
      R && (n(!P || P.type ? new Rr(null, t, R) : P), R.abort(), R = null);
    }, i.cancelToken && i.cancelToken.subscribe(h), i.signal && (i.signal.aborted ? h() : i.signal.addEventListener("abort", h)));
    const k = Ll(i.url);
    if (k && We.protocols.indexOf(k) === -1) {
      n(new j("Unsupported protocol " + k + ":", j.ERR_BAD_REQUEST, t));
      return;
    }
    R.send(s || null);
  });
}, Wl = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), i;
    const s = function(p) {
      if (!i) {
        i = !0, u();
        const h = p instanceof Error ? p : this.reason;
        n.abort(h instanceof j ? h : new Rr(h instanceof Error ? h.message : h));
      }
    };
    let o = e && setTimeout(() => {
      o = null, s(new j(`timeout ${e} of ms exceeded`, j.ETIMEDOUT));
    }, e);
    const u = () => {
      t && (o && clearTimeout(o), o = null, t.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(s) : p.removeEventListener("abort", s);
      }), t = null);
    };
    t.forEach((p) => p.addEventListener("abort", s));
    const { signal: c } = n;
    return c.unsubscribe = () => b.asap(u), c;
  }
}, Hl = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + e, yield t.slice(n, i), n = i;
}, Kl = async function* (t, e) {
  for await (const r of Yl(t))
    yield* Hl(r, e);
}, Yl = async function* (t) {
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
}, qo = (t, e, r, n) => {
  const i = Kl(t, e);
  let s = 0, o, u = (c) => {
    o || (o = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: p, value: h } = await i.next();
        if (p) {
          u(), c.close();
          return;
        }
        let m = h.byteLength;
        if (r) {
          let O = s += m;
          r(O);
        }
        c.enqueue(new Uint8Array(h));
      } catch (p) {
        throw u(p), p;
      }
    },
    cancel(c) {
      return u(c), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Yn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", xa = Yn && typeof ReadableStream == "function", Ql = Yn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Fa = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Jl = xa && Fa(() => {
  let t = !1;
  const e = new Request(We.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Lo = 64 * 1024, rs = xa && Fa(() => b.isReadableStream(new Response("").body)), Ln = {
  stream: rs && ((t) => t.body)
};
Yn && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Ln[e] && (Ln[e] = b.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new j(`Response type '${e}' is not supported`, j.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Xl = async (t) => {
  if (t == null)
    return 0;
  if (b.isBlob(t))
    return t.size;
  if (b.isSpecCompliantForm(t))
    return (await new Request(We.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (b.isArrayBufferView(t) || b.isArrayBuffer(t))
    return t.byteLength;
  if (b.isURLSearchParams(t) && (t = t + ""), b.isString(t))
    return (await Ql(t)).byteLength;
}, Zl = async (t, e) => {
  const r = b.toFiniteNumber(t.getContentLength());
  return r ?? Xl(e);
}, ef = Yn && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: i,
    cancelToken: s,
    timeout: o,
    onDownloadProgress: u,
    onUploadProgress: c,
    responseType: p,
    headers: h,
    withCredentials: m = "same-origin",
    fetchOptions: O
  } = ka(t);
  p = p ? (p + "").toLowerCase() : "text";
  let C = Wl([i, s && s.toAbortSignal()], o), S;
  const N = C && C.unsubscribe && (() => {
    C.unsubscribe();
  });
  let R;
  try {
    if (c && Jl && r !== "get" && r !== "head" && (R = await Zl(h, n)) !== 0) {
      let x = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), G;
      if (b.isFormData(n) && (G = x.headers.get("content-type")) && h.setContentType(G), x.body) {
        const [te, V] = ko(
          R,
          qn(xo(c))
        );
        n = qo(x.body, Lo, te, V);
      }
    }
    b.isString(m) || (m = m ? "include" : "omit");
    const U = "credentials" in Request.prototype;
    S = new Request(e, {
      ...O,
      signal: C,
      method: r.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: U ? m : void 0
    });
    let k = await fetch(S);
    const P = rs && (p === "stream" || p === "response");
    if (rs && (u || P && N)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((Ae) => {
        x[Ae] = k[Ae];
      });
      const G = b.toFiniteNumber(k.headers.get("content-length")), [te, V] = u && ko(
        G,
        qn(xo(u), !0)
      ) || [];
      k = new Response(
        qo(k.body, Lo, te, () => {
          V && V(), N && N();
        }),
        x
      );
    }
    p = p || "text";
    let F = await Ln[b.findKey(Ln, p) || "text"](k, t);
    return !P && N && N(), await new Promise((x, G) => {
      Da(x, G, {
        data: F,
        headers: He.from(k.headers),
        status: k.status,
        statusText: k.statusText,
        config: t,
        request: S
      });
    });
  } catch (U) {
    throw N && N(), U && U.name === "TypeError" && /fetch/i.test(U.message) ? Object.assign(
      new j("Network Error", j.ERR_NETWORK, t, S),
      {
        cause: U.cause || U
      }
    ) : j.from(U, U && U.code, t, S);
  }
}), ns = {
  http: ml,
  xhr: zl,
  fetch: ef
};
b.forEach(ns, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Bo = (t) => `- ${t}`, tf = (t) => b.isFunction(t) || t === null || t === !1, qa = {
  getAdapter: (t) => {
    t = b.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let s = 0; s < e; s++) {
      r = t[s];
      let o;
      if (n = r, !tf(r) && (n = ns[(o = String(r)).toLowerCase()], n === void 0))
        throw new j(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(i).map(
        ([u, c]) => `adapter ${u} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? s.length > 1 ? `since :
` + s.map(Bo).join(`
`) : " " + Bo(s[0]) : "as no adapter specified";
      throw new j(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ns
};
function Pi(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Rr(null, t);
}
function $o(t) {
  return Pi(t), t.headers = He.from(t.headers), t.data = Di.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), qa.getAdapter(t.adapter || Yr.adapter)(t).then(function(n) {
    return Pi(t), n.data = Di.call(
      t,
      t.transformResponse,
      n
    ), n.headers = He.from(n.headers), n;
  }, function(n) {
    return Na(n) || (Pi(t), n && n.response && (n.response.data = Di.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = He.from(n.response.headers))), Promise.reject(n);
  });
}
const La = "1.7.7", Cs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Cs[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Uo = {};
Cs.transitional = function(e, r, n) {
  function i(s, o) {
    return "[Axios v" + La + "] Transitional option '" + s + "'" + o + (n ? ". " + n : "");
  }
  return (s, o, u) => {
    if (e === !1)
      throw new j(
        i(o, " has been removed" + (r ? " in " + r : "")),
        j.ERR_DEPRECATED
      );
    return r && !Uo[o] && (Uo[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(s, o, u) : !0;
  };
};
function rf(t, e, r) {
  if (typeof t != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i], o = e[s];
    if (o) {
      const u = t[s], c = u === void 0 || o(u, s, t);
      if (c !== !0)
        throw new j("option " + s + " must be " + c, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new j("Unknown option " + s, j.ERR_BAD_OPTION);
  }
}
const is = {
  assertOptions: rf,
  validators: Cs
}, St = is.validators;
class Kt {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Do(),
      response: new Do()
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
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Jt(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 && is.assertOptions(n, {
      silentJSONParsing: St.transitional(St.boolean),
      forcedJSONParsing: St.transitional(St.boolean),
      clarifyTimeoutError: St.transitional(St.boolean)
    }, !1), i != null && (b.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : is.assertOptions(i, {
      encode: St.function,
      serialize: St.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = s && b.merge(
      s.common,
      s[r.method]
    );
    s && b.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (S) => {
        delete s[S];
      }
    ), r.headers = He.concat(o, s);
    const u = [];
    let c = !0;
    this.interceptors.request.forEach(function(N) {
      typeof N.runWhen == "function" && N.runWhen(r) === !1 || (c = c && N.synchronous, u.unshift(N.fulfilled, N.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(N) {
      p.push(N.fulfilled, N.rejected);
    });
    let h, m = 0, O;
    if (!c) {
      const S = [$o.bind(this), void 0];
      for (S.unshift.apply(S, u), S.push.apply(S, p), O = S.length, h = Promise.resolve(r); m < O; )
        h = h.then(S[m++], S[m++]);
      return h;
    }
    O = u.length;
    let C = r;
    for (m = 0; m < O; ) {
      const S = u[m++], N = u[m++];
      try {
        C = S(C);
      } catch (R) {
        N.call(this, R);
        break;
      }
    }
    try {
      h = $o.call(this, C);
    } catch (S) {
      return Promise.reject(S);
    }
    for (m = 0, O = p.length; m < O; )
      h = h.then(p[m++], p[m++]);
    return h;
  }
  getUri(e) {
    e = Jt(this.defaults, e);
    const r = Pa(e.baseURL, e.url);
    return Oa(r, e.params, e.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(e) {
  Kt.prototype[e] = function(r, n) {
    return this.request(Jt(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(s, o, u) {
      return this.request(Jt(u || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  Kt.prototype[e] = r(), Kt.prototype[e + "Form"] = r(!0);
});
class Is {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const o = new Promise((u) => {
        n.subscribe(u), s = u;
      }).then(i);
      return o.cancel = function() {
        n.unsubscribe(s);
      }, o;
    }, e(function(s, o, u) {
      n.reason || (n.reason = new Rr(s, o, u), r(n.reason));
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
      token: new Is(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
function nf(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function sf(t) {
  return b.isObject(t) && t.isAxiosError === !0;
}
const ss = {
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
Object.entries(ss).forEach(([t, e]) => {
  ss[e] = t;
});
function Ba(t) {
  const e = new Kt(t), r = ma(Kt.prototype.request, e);
  return b.extend(r, Kt.prototype, e, { allOwnKeys: !0 }), b.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Ba(Jt(t, i));
  }, r;
}
const Oe = Ba(Yr);
Oe.Axios = Kt;
Oe.CanceledError = Rr;
Oe.CancelToken = Is;
Oe.isCancel = Na;
Oe.VERSION = La;
Oe.toFormData = Kn;
Oe.AxiosError = j;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(e) {
  return Promise.all(e);
};
Oe.spread = nf;
Oe.isAxiosError = sf;
Oe.mergeConfig = Jt;
Oe.AxiosHeaders = He;
Oe.formToJSON = (t) => Ia(b.isHTMLForm(t) ? new FormData(t) : t);
Oe.getAdapter = qa.getAdapter;
Oe.HttpStatusCode = ss;
Oe.default = Oe;
const Ns = "http://ec2-3-110-83-171.ap-south-1.compute.amazonaws.com", of = () => Oe.create({
  baseURL: Ns,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class ye {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = ye.createService();
  }
  static createService() {
    return ye._axiosInstance || (ye._axiosInstance = of(), ye.setAuthHeaderInterceptor(), ye._axiosInstance.interceptors.response.use(ye.handleSuccess, ye.handleError)), ye._axiosInstance;
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
      return (await Oe.post(`${Ns}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    ye._axiosInstance.interceptors.request.use(
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
    ye._axiosInstance.interceptors.response.use(
      ye.handleSuccess,
      ye.handleError
    );
  }
  static handleSuccess(e) {
    return e.data;
  }
  // Updated error handler to catch 401 errors and try to refresh the token
  static async handleError(e) {
    var i;
    const r = e.config;
    if (e.response && e.response.status === 401 && !r._retry) {
      r._retry = !0;
      try {
        const s = await ye.refreshAccessToken();
        return ye.setAccessToken(s), r.headers.set("Authorization", `Bearer ${s}`), ye._axiosInstance(r);
      } catch (s) {
        console.error("Refresh token failed", s);
      }
    }
    const n = { name: "Error", message: "Something went wrong!" };
    return e.response && e.response.data && (n.message = (i = e.response.data) == null ? void 0 : i.message), Promise.reject(n);
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
const ut = /* @__PURE__ */ Object.create(null);
ut.open = "0";
ut.close = "1";
ut.ping = "2";
ut.pong = "3";
ut.message = "4";
ut.upgrade = "5";
ut.noop = "6";
const Cn = /* @__PURE__ */ Object.create(null);
Object.keys(ut).forEach((t) => {
  Cn[ut[t]] = t;
});
const os = { type: "error", data: "parser error" }, $a = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ua = typeof ArrayBuffer == "function", Ma = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Ds = ({ type: t, data: e }, r, n) => $a && e instanceof Blob ? r ? n(e) : Mo(e, n) : Ua && (e instanceof ArrayBuffer || Ma(e)) ? r ? n(e) : Mo(new Blob([e]), n) : n(ut[t] + (e || "")), Mo = (t, e) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    e("b" + (n || ""));
  }, r.readAsDataURL(t);
};
function jo(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let ki;
function af(t, e) {
  if ($a && t.data instanceof Blob)
    return t.data.arrayBuffer().then(jo).then(e);
  if (Ua && (t.data instanceof ArrayBuffer || Ma(t.data)))
    return e(jo(t.data));
  Ds(t, !1, (r) => {
    ki || (ki = new TextEncoder()), e(ki.encode(r));
  });
}
const Vo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Mr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Vo.length; t++)
  Mr[Vo.charCodeAt(t)] = t;
const uf = (t) => {
  let e = t.length * 0.75, r = t.length, n, i = 0, s, o, u, c;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const p = new ArrayBuffer(e), h = new Uint8Array(p);
  for (n = 0; n < r; n += 4)
    s = Mr[t.charCodeAt(n)], o = Mr[t.charCodeAt(n + 1)], u = Mr[t.charCodeAt(n + 2)], c = Mr[t.charCodeAt(n + 3)], h[i++] = s << 2 | o >> 4, h[i++] = (o & 15) << 4 | u >> 2, h[i++] = (u & 3) << 6 | c & 63;
  return p;
}, cf = typeof ArrayBuffer == "function", Ps = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: ja(t, e)
    };
  const r = t.charAt(0);
  return r === "b" ? {
    type: "message",
    data: lf(t.substring(1), e)
  } : Cn[r] ? t.length > 1 ? {
    type: Cn[r],
    data: t.substring(1)
  } : {
    type: Cn[r]
  } : os;
}, lf = (t, e) => {
  if (cf) {
    const r = uf(t);
    return ja(r, e);
  } else
    return { base64: !0, data: t };
}, ja = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, Va = "", ff = (t, e) => {
  const r = t.length, n = new Array(r);
  let i = 0;
  t.forEach((s, o) => {
    Ds(s, !1, (u) => {
      n[o] = u, ++i === r && e(n.join(Va));
    });
  });
}, df = (t, e) => {
  const r = t.split(Va), n = [];
  for (let i = 0; i < r.length; i++) {
    const s = Ps(r[i], e);
    if (n.push(s), s.type === "error")
      break;
  }
  return n;
};
function hf() {
  return new TransformStream({
    transform(t, e) {
      af(t, (r) => {
        const n = r.length;
        let i;
        if (n < 126)
          i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, n);
        else if (n < 65536) {
          i = new Uint8Array(3);
          const s = new DataView(i.buffer);
          s.setUint8(0, 126), s.setUint16(1, n);
        } else {
          i = new Uint8Array(9);
          const s = new DataView(i.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(n));
        }
        t.data && typeof t.data != "string" && (i[0] |= 128), e.enqueue(i), e.enqueue(r);
      });
    }
  });
}
let xi;
function En(t) {
  return t.reduce((e, r) => e + r.length, 0);
}
function vn(t, e) {
  if (t[0].length === e)
    return t.shift();
  const r = new Uint8Array(e);
  let n = 0;
  for (let i = 0; i < e; i++)
    r[i] = t[0][n++], n === t[0].length && (t.shift(), n = 0);
  return t.length && n < t[0].length && (t[0] = t[0].slice(n)), r;
}
function pf(t, e) {
  xi || (xi = new TextDecoder());
  const r = [];
  let n = 0, i = -1, s = !1;
  return new TransformStream({
    transform(o, u) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (En(r) < 1)
            break;
          const c = vn(r, 1);
          s = (c[0] & 128) === 128, i = c[0] & 127, i < 126 ? n = 3 : i === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (En(r) < 2)
            break;
          const c = vn(r, 2);
          i = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (En(r) < 8)
            break;
          const c = vn(r, 8), p = new DataView(c.buffer, c.byteOffset, c.length), h = p.getUint32(0);
          if (h > Math.pow(2, 21) - 1) {
            u.enqueue(os);
            break;
          }
          i = h * Math.pow(2, 32) + p.getUint32(4), n = 3;
        } else {
          if (En(r) < i)
            break;
          const c = vn(r, i);
          u.enqueue(Ps(s ? c : xi.decode(c), e)), n = 0;
        }
        if (i === 0 || i > t) {
          u.enqueue(os);
          break;
        }
      }
    }
  });
}
const Ga = 4;
function Ne(t) {
  if (t) return mf(t);
}
function mf(t) {
  for (var e in Ne.prototype)
    t[e] = Ne.prototype[e];
  return t;
}
Ne.prototype.on = Ne.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Ne.prototype.once = function(t, e) {
  function r() {
    this.off(t, r), e.apply(this, arguments);
  }
  return r.fn = e, this.on(t, r), this;
};
Ne.prototype.off = Ne.prototype.removeListener = Ne.prototype.removeAllListeners = Ne.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + t];
  if (!r) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var n, i = 0; i < r.length; i++)
    if (n = r[i], n === e || n.fn === e) {
      r.splice(i, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + t], this;
};
Ne.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, i = r.length; n < i; ++n)
      r[n].apply(this, e);
  }
  return this;
};
Ne.prototype.emitReserved = Ne.prototype.emit;
Ne.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Ne.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const Qn = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, r) => r(e, 0), Ze = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), yf = "arraybuffer";
function za(t, ...e) {
  return e.reduce((r, n) => (t.hasOwnProperty(n) && (r[n] = t[n]), r), {});
}
const gf = Ze.setTimeout, bf = Ze.clearTimeout;
function Jn(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = gf.bind(Ze), t.clearTimeoutFn = bf.bind(Ze)) : (t.setTimeoutFn = Ze.setTimeout.bind(Ze), t.clearTimeoutFn = Ze.clearTimeout.bind(Ze));
}
const _f = 1.33;
function Ef(t) {
  return typeof t == "string" ? vf(t) : Math.ceil((t.byteLength || t.size) * _f);
}
function vf(t) {
  let e = 0, r = 0;
  for (let n = 0, i = t.length; n < i; n++)
    e = t.charCodeAt(n), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function Wa() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Rf(t) {
  let e = "";
  for (let r in t)
    t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e;
}
function Sf(t) {
  let e = {}, r = t.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let s = r[n].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
class wf extends Error {
  constructor(e, r, n) {
    super(e), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class ks extends Ne {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Jn(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, r, n) {
    return super.emitReserved("error", new wf(e, r, n)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const r = Ps(e, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, r = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const r = Rf(e);
    return r.length ? "?" + r : "";
  }
}
class Tf extends ks {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", e();
    };
    if (this._polling || !this.writable) {
      let n = 0;
      this._polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
      }));
    } else
      r();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    df(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, ff(e, (r) => {
      this.doWrite(r, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "https" : "http", r = this.query || {};
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Wa()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r);
  }
}
let Ha = !1;
try {
  Ha = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Af = Ha;
function Of() {
}
class Cf extends Tf {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const r = location.protocol === "https:";
      let n = location.port;
      n || (n = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, r) {
    const n = this.request({
      method: "POST",
      data: e
    });
    n.on("success", r), n.on("error", (i, s) => {
      this.onError("xhr post error", i, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = e;
  }
}
let dr = class In extends Ne {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, r, n) {
    super(), this.createRequest = e, Jn(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const r = za(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this._opts.xd;
    const n = this._xhr = this.createRequest(r);
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let i in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(i) && n.setRequestHeader(i, this._opts.extraHeaders[i]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = () => {
        var i;
        n.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(
          // @ts-ignore
          n.getResponseHeader("set-cookie")
        )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this._data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this._onError(i);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = In.requestsCount++, In.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = Of, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete In.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
};
dr.requestsCount = 0;
dr.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Go);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Ze ? "pagehide" : "unload";
    addEventListener(t, Go, !1);
  }
}
function Go() {
  for (let t in dr.requests)
    dr.requests.hasOwnProperty(t) && dr.requests[t].abort();
}
const If = function() {
  const t = Ka({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class Nf extends Cf {
  constructor(e) {
    super(e);
    const r = e && e.forceBase64;
    this.supportsBinary = If && !r;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new dr(Ka, this.uri(), e);
  }
}
function Ka(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Af))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Ze[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Ya = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Df extends ks {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), r = this.opts.protocols, n = Ya ? {} : za(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, r, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = r === e.length - 1;
      Ds(n, this.supportsBinary, (s) => {
        try {
          this.doWrite(n, s);
        } catch {
        }
        i && Qn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", r = this.query || {};
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = Wa()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r);
  }
}
const Fi = Ze.WebSocket || Ze.MozWebSocket;
class Pf extends Df {
  createSocket(e, r, n) {
    return Ya ? new Fi(e, r, n) : r ? new Fi(e, r) : new Fi(e);
  }
  doWrite(e, r) {
    this.ws.send(r);
  }
}
class kf extends ks {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((e) => {
        const r = pf(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(r).getReader(), i = hf();
        i.readable.pipeTo(e.writable), this._writer = i.writable.getWriter();
        const s = () => {
          n.read().then(({ done: u, value: c }) => {
            u || (this.onPacket(c), s());
          }).catch((u) => {
          });
        };
        s();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
      });
    });
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = r === e.length - 1;
      this._writer.write(n).then(() => {
        i && Qn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const xf = {
  websocket: Pf,
  webtransport: kf,
  polling: Nf
}, Ff = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, qf = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function as(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const e = t, r = t.indexOf("["), n = t.indexOf("]");
  r != -1 && n != -1 && (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ";") + t.substring(n, t.length));
  let i = Ff.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[qf[o]] = i[o] || "";
  return r != -1 && n != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Lf(s, s.path), s.queryKey = Bf(s, s.query), s;
}
function Lf(t, e) {
  const r = /\/{2,9}/g, n = e.replace(r, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Bf(t, e) {
  const r = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, s) {
    i && (r[i] = s);
  }), r;
}
const us = typeof addEventListener == "function" && typeof removeEventListener == "function", Nn = [];
us && addEventListener("offline", () => {
  Nn.forEach((t) => t());
}, !1);
class Pt extends Ne {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, r) {
    if (super(), this.binaryType = yf, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (r = e, e = null), e) {
      const n = as(e);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = as(r.host).host);
    Jn(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n) => {
      const i = n.prototype.name;
      this.transports.push(i), this._transportsByName[i] = n;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Sf(this.opts.query)), us && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Nn.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = Ga, r.transport = e, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const e = this.opts.rememberUpgrade && Pt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(e);
    r.open(), this.setTransport(r);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (r) => this._onClose("transport close", r));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Pt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const r = new Error("server error");
          r.code = e.data, this._onError(r);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this._getWritablePackets();
      this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const i = this.writeBuffer[n].data;
      if (i && (r += Ef(i)), n > 0 && r > this._maxPayload)
        return this.writeBuffer.slice(0, n);
      r += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const e = Date.now() > this._pingTimeoutTime;
    return e && (this._pingTimeoutTime = 0, Qn(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), e;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(e, r, n) {
    return this._sendPacket("message", e, r, n), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, r, n) {
    return this._sendPacket("message", e, r, n), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(e, r, n, i) {
    if (typeof r == "function" && (i = r, r = void 0), typeof n == "function" && (i = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const s = {
      type: e,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), e();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : e();
    }) : this.upgrading ? n() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (Pt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(e, r) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), us && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = Nn.indexOf(this._offlineEventListener);
        n !== -1 && Nn.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Pt.protocol = Ga;
class $f extends Pt {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(e) {
    let r = this.createTransport(e), n = !1;
    Pt.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (m) => {
        if (!n)
          if (m.type === "pong" && m.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Pt.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (h(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const O = new Error("probe error");
            O.transport = r.name, this.emitReserved("upgradeError", O);
          }
      }));
    };
    function s() {
      n || (n = !0, h(), r.close(), r = null);
    }
    const o = (m) => {
      const O = new Error("probe error: " + m);
      O.transport = r.name, s(), this.emitReserved("upgradeError", O);
    };
    function u() {
      o("transport closed");
    }
    function c() {
      o("socket closed");
    }
    function p(m) {
      r && m.name !== r.name && s();
    }
    const h = () => {
      r.removeListener("open", i), r.removeListener("error", o), r.removeListener("close", u), this.off("close", c), this.off("upgrading", p);
    };
    r.once("open", i), r.once("error", o), r.once("close", u), this.once("close", c), this.once("upgrading", p), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      n || r.open();
    }, 200) : r.open();
  }
  onHandshake(e) {
    this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(e) {
    const r = [];
    for (let n = 0; n < e.length; n++)
      ~this.transports.indexOf(e[n]) && r.push(e[n]);
    return r;
  }
}
let Uf = class extends $f {
  constructor(e, r = {}) {
    const n = typeof e == "object" ? e : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((i) => xf[i]).filter((i) => !!i)), super(e, n);
  }
};
function Mf(t, e = "", r) {
  let n = t;
  r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), n = as(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + s + ":" + n.port + e, n.href = n.protocol + "://" + s + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const jf = typeof ArrayBuffer == "function", Vf = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Qa = Object.prototype.toString, Gf = typeof Blob == "function" || typeof Blob < "u" && Qa.call(Blob) === "[object BlobConstructor]", zf = typeof File == "function" || typeof File < "u" && Qa.call(File) === "[object FileConstructor]";
function xs(t) {
  return jf && (t instanceof ArrayBuffer || Vf(t)) || Gf && t instanceof Blob || zf && t instanceof File;
}
function Dn(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let r = 0, n = t.length; r < n; r++)
      if (Dn(t[r]))
        return !0;
    return !1;
  }
  if (xs(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Dn(t.toJSON(), !0);
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && Dn(t[r]))
      return !0;
  return !1;
}
function Wf(t) {
  const e = [], r = t.data, n = t;
  return n.data = cs(r, e), n.attachments = e.length, { packet: n, buffers: e };
}
function cs(t, e) {
  if (!t)
    return t;
  if (xs(t)) {
    const r = { _placeholder: !0, num: e.length };
    return e.push(t), r;
  } else if (Array.isArray(t)) {
    const r = new Array(t.length);
    for (let n = 0; n < t.length; n++)
      r[n] = cs(t[n], e);
    return r;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const r = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (r[n] = cs(t[n], e));
    return r;
  }
  return t;
}
function Hf(t, e) {
  return t.data = ls(t.data, e), delete t.attachments, t;
}
function ls(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let r = 0; r < t.length; r++)
      t[r] = ls(t[r], e);
  else if (typeof t == "object")
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (t[r] = ls(t[r], e));
  return t;
}
const Kf = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Yf = 5;
var Z;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(Z || (Z = {}));
class Qf {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === Z.EVENT || e.type === Z.ACK) && Dn(e) ? this.encodeAsBinary({
      type: e.type === Z.EVENT ? Z.BINARY_EVENT : Z.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let r = "" + e.type;
    return (e.type === Z.BINARY_EVENT || e.type === Z.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const r = Wf(e), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
function zo(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Fs extends Ne {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let r;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(e);
      const n = r.type === Z.BINARY_EVENT;
      n || r.type === Z.BINARY_ACK ? (r.type = n ? Z.EVENT : Z.ACK, this.reconstructor = new Jf(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (xs(e) || e.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(e), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let r = 0;
    const n = {
      type: Number(e.charAt(0))
    };
    if (Z[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === Z.BINARY_EVENT || n.type === Z.BINARY_ACK) {
      const s = r + 1;
      for (; e.charAt(++r) !== "-" && r != e.length; )
        ;
      const o = e.substring(s, r);
      if (o != Number(o) || e.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(o);
    }
    if (e.charAt(r + 1) === "/") {
      const s = r + 1;
      for (; ++r && !(e.charAt(r) === "," || r === e.length); )
        ;
      n.nsp = e.substring(s, r);
    } else
      n.nsp = "/";
    const i = e.charAt(r + 1);
    if (i !== "" && Number(i) == i) {
      const s = r + 1;
      for (; ++r; ) {
        const o = e.charAt(r);
        if (o == null || Number(o) != o) {
          --r;
          break;
        }
        if (r === e.length)
          break;
      }
      n.id = Number(e.substring(s, r + 1));
    }
    if (e.charAt(++r)) {
      const s = this.tryParse(e.substr(r));
      if (Fs.isPayloadValid(n.type, s))
        n.data = s;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, r) {
    switch (e) {
      case Z.CONNECT:
        return zo(r);
      case Z.DISCONNECT:
        return r === void 0;
      case Z.CONNECT_ERROR:
        return typeof r == "string" || zo(r);
      case Z.EVENT:
      case Z.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Kf.indexOf(r[0]) === -1);
      case Z.ACK:
      case Z.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Jf {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const r = Hf(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const Xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Fs,
  Encoder: Qf,
  get PacketType() {
    return Z;
  },
  protocol: Yf
}, Symbol.toStringTag, { value: "Module" }));
function tt(t, e, r) {
  return t.on(e, r), function() {
    t.off(e, r);
  };
}
const Zf = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Ja extends Ne {
  /**
   * `Socket` constructor.
   */
  constructor(e, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      tt(e, "open", this.onopen.bind(this)),
      tt(e, "packet", this.onpacket.bind(this)),
      tt(e, "error", this.onerror.bind(this)),
      tt(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...r) {
    var n, i, s;
    if (Zf.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const o = {
      type: Z.EVENT,
      data: r
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const h = this.ids++, m = r.pop();
      this._registerAckCallback(h, m), o.id = h;
    }
    const u = (i = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || i === void 0 ? void 0 : i.writable, c = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
    return this.flags.volatile && !u || (c ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, r) {
    var n;
    const i = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[e] = r;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let u = 0; u < this.sendBuffer.length; u++)
        this.sendBuffer[u].id === e && this.sendBuffer.splice(u, 1);
      r.call(this, new Error("operation has timed out"));
    }, i), o = (...u) => {
      this.io.clearTimeoutFn(s), r.apply(this, u);
    };
    o.withError = !0, this.acks[e] = o;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(e, ...r) {
    return new Promise((n, i) => {
      const s = (o, u) => o ? i(o) : n(u);
      s.withError = !0, r.push(s), this.emit(e, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let r;
    typeof e[e.length - 1] == "function" && (r = e.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((i, ...s) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(i)) : (this._queue.shift(), r && r(null, ...s)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !e || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: Z.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, r), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((n) => String(n.id) === e)) {
        const n = this.acks[e];
        delete this.acks[e], n.withError && n.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case Z.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Z.EVENT:
        case Z.BINARY_EVENT:
          this.onevent(e);
          break;
        case Z.ACK:
        case Z.BINARY_ACK:
          this.onack(e);
          break;
        case Z.DISCONNECT:
          this.ondisconnect();
          break;
        case Z.CONNECT_ERROR:
          this.destroy();
          const n = new Error(e.data.message);
          n.data = e.data.data, this.emitReserved("connect_error", n);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const r = e.data || [];
    e.id != null && r.push(this.ack(e.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const r = this;
    let n = !1;
    return function(...i) {
      n || (n = !0, r.packet({
        type: Z.ACK,
        id: e,
        data: i
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const r = this.acks[e.id];
    typeof r == "function" && (delete this.acks[e.id], r.withError && e.data.unshift(null), r.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, r) {
    this.id = e, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: Z.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (e === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (e === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, e.data);
    }
  }
}
function Sr(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Sr.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), r = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + r : t - r;
  }
  return Math.min(t, this.max) | 0;
};
Sr.prototype.reset = function() {
  this.attempts = 0;
};
Sr.prototype.setMin = function(t) {
  this.ms = t;
};
Sr.prototype.setMax = function(t) {
  this.max = t;
};
Sr.prototype.setJitter = function(t) {
  this.jitter = t;
};
class fs extends Ne {
  constructor(e, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Jn(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Sr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
    const i = r.parser || Xf;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var r;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (r = this.backoff) === null || r === void 0 || r.setMin(e), this);
  }
  randomizationFactor(e) {
    var r;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (r = this.backoff) === null || r === void 0 || r.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var r;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (r = this.backoff) === null || r === void 0 || r.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Uf(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = tt(r, "open", function() {
      n.onopen(), e && e();
    }), s = (u) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", u), e ? e(u) : this.maybeReconnectOnOpen();
    }, o = tt(r, "error", s);
    if (this._timeout !== !1) {
      const u = this._timeout, c = this.setTimeoutFn(() => {
        i(), s(new Error("timeout")), r.close();
      }, u);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(i), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(
      tt(e, "ping", this.onping.bind(this)),
      tt(e, "data", this.ondata.bind(this)),
      tt(e, "error", this.onerror.bind(this)),
      tt(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      tt(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    Qn(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, r) {
    let n = this.nsps[e];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Ja(this, e, r), this.nsps[e] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const r = this.encoder.encode(e);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(e, r) {
    var n;
    this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((i) => {
          i ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", i)) : e.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const Br = {};
function Pn(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const r = Mf(t, e.path || "/socket.io"), n = r.source, i = r.id, s = r.path, o = Br[i] && s in Br[i].nsps, u = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let c;
  return u ? c = new fs(n, e) : (Br[i] || (Br[i] = new fs(n, e)), c = Br[i]), r.query && !e.query && (e.query = r.queryKey), c.socket(r.path, e);
}
Object.assign(Pn, {
  Manager: fs,
  Socket: Ja,
  io: Pn,
  connect: Pn
});
Pn(Ns, {
  transports: ["websocket", "polling"],
  // Try websocket first, fallback to polling
  extraHeaders: {
    "ngrok-skip-browser-warning": "true"
  },
  autoConnect: !1,
  // Change to false for better control
  reconnection: !0,
  reconnectionDelay: 1e3,
  reconnectionAttempts: 5,
  timeout: 2e4,
  upgrade: !0,
  // Allow transport upgrades
  rememberUpgrade: !0,
  // Remember the upgrade for future connections
  forceNew: !1
  // Don't force new connection unnecessarily
});
const ds = {
  address1: null,
  address2: null,
  location: null,
  city: null,
  state: null,
  pincode: null
};
function er(t) {
  this._maxSize = t, this.clear();
}
er.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
er.prototype.get = function(t) {
  return this._values[t];
};
er.prototype.set = function(t, e) {
  return this._size >= this._maxSize && this.clear(), t in this._values || this._size++, this._values[t] = e;
};
var ed = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Xa = /^\d+$/, td = /^\d/, rd = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, nd = /^\s*(['"]?)(.*?)(\1)\s*$/, qs = 512, Wo = new er(qs), Ho = new er(qs), Ko = new er(qs), Yt = {
  Cache: er,
  split: hs,
  normalizePath: qi,
  setter: function(t) {
    var e = qi(t);
    return Ho.get(t) || Ho.set(t, function(n, i) {
      for (var s = 0, o = e.length, u = n; s < o - 1; ) {
        var c = e[s];
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return n;
        u = u[e[s++]];
      }
      u[e[s]] = i;
    });
  },
  getter: function(t, e) {
    var r = qi(t);
    return Ko.get(t) || Ko.set(t, function(i) {
      for (var s = 0, o = r.length; s < o; )
        if (i != null || !e) i = i[r[s++]];
        else return;
      return i;
    });
  },
  join: function(t) {
    return t.reduce(function(e, r) {
      return e + (Ls(r) || Xa.test(r) ? "[" + r + "]" : (e ? "." : "") + r);
    }, "");
  },
  forEach: function(t, e, r) {
    id(Array.isArray(t) ? t : hs(t), e, r);
  }
};
function qi(t) {
  return Wo.get(t) || Wo.set(
    t,
    hs(t).map(function(e) {
      return e.replace(nd, "$2");
    })
  );
}
function hs(t) {
  return t.match(ed) || [""];
}
function id(t, e, r) {
  var n = t.length, i, s, o, u;
  for (s = 0; s < n; s++)
    i = t[s], i && (ad(i) && (i = '"' + i + '"'), u = Ls(i), o = !u && /^\d+$/.test(i), e.call(r, i, u, o, s, t));
}
function Ls(t) {
  return typeof t == "string" && t && ["'", '"'].indexOf(t.charAt(0)) !== -1;
}
function sd(t) {
  return t.match(td) && !t.match(Xa);
}
function od(t) {
  return rd.test(t);
}
function ad(t) {
  return !Ls(t) && (sd(t) || od(t));
}
const ud = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, Xn = (t) => t.match(ud) || [], Zn = (t) => t[0].toUpperCase() + t.slice(1), Bs = (t, e) => Xn(t).join(e).toLowerCase(), Za = (t) => Xn(t).reduce(
  (e, r) => `${e}${e ? r[0].toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()}`,
  ""
), cd = (t) => Zn(Za(t)), ld = (t) => Bs(t, "_"), fd = (t) => Bs(t, "-"), dd = (t) => Zn(Bs(t, " ")), hd = (t) => Xn(t).map(Zn).join(" ");
var Li = {
  words: Xn,
  upperFirst: Zn,
  camelCase: Za,
  pascalCase: cd,
  snakeCase: ld,
  kebabCase: fd,
  sentenceCase: dd,
  titleCase: hd
}, $s = { exports: {} };
$s.exports = function(t) {
  return eu(pd(t), t);
};
$s.exports.array = eu;
function eu(t, e) {
  var r = t.length, n = new Array(r), i = {}, s = r, o = md(e), u = yd(t);
  for (e.forEach(function(p) {
    if (!u.has(p[0]) || !u.has(p[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    i[s] || c(t[s], s, /* @__PURE__ */ new Set());
  return n;
  function c(p, h, m) {
    if (m.has(p)) {
      var O;
      try {
        O = ", node was:" + JSON.stringify(p);
      } catch {
        O = "";
      }
      throw new Error("Cyclic dependency" + O);
    }
    if (!u.has(p))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(p));
    if (!i[h]) {
      i[h] = !0;
      var C = o.get(p) || /* @__PURE__ */ new Set();
      if (C = Array.from(C), h = C.length) {
        m.add(p);
        do {
          var S = C[--h];
          c(S, u.get(S), m);
        } while (h);
        m.delete(p);
      }
      n[--r] = p;
    }
  }
}
function pd(t) {
  for (var e = /* @__PURE__ */ new Set(), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    e.add(i[0]), e.add(i[1]);
  }
  return Array.from(e);
}
function md(t) {
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    e.has(i[0]) || e.set(i[0], /* @__PURE__ */ new Set()), e.has(i[1]) || e.set(i[1], /* @__PURE__ */ new Set()), e.get(i[0]).add(i[1]);
  }
  return e;
}
function yd(t) {
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = t.length; r < n; r++)
    e.set(t[r], r);
  return e;
}
var gd = $s.exports;
const bd = /* @__PURE__ */ hc(gd), _d = Object.prototype.toString, Ed = Error.prototype.toString, vd = RegExp.prototype.toString, Rd = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Sd = /^Symbol\((.*)\)(.*)$/;
function wd(t) {
  return t != +t ? "NaN" : t === 0 && 1 / t < 0 ? "-0" : "" + t;
}
function Yo(t, e = !1) {
  if (t == null || t === !0 || t === !1) return "" + t;
  const r = typeof t;
  if (r === "number") return wd(t);
  if (r === "string") return e ? `"${t}"` : t;
  if (r === "function") return "[Function " + (t.name || "anonymous") + "]";
  if (r === "symbol") return Rd.call(t).replace(Sd, "Symbol($1)");
  const n = _d.call(t).slice(8, -1);
  return n === "Date" ? isNaN(t.getTime()) ? "" + t : t.toISOString(t) : n === "Error" || t instanceof Error ? "[" + Ed.call(t) + "]" : n === "RegExp" ? vd.call(t) : null;
}
function pt(t, e) {
  let r = Yo(t, e);
  return r !== null ? r : JSON.stringify(t, function(n, i) {
    let s = Yo(this[n], e);
    return s !== null ? s : i;
  }, 2);
}
function tu(t) {
  return t == null ? [] : [].concat(t);
}
let ru, nu, iu, Td = /\$\{\s*(\w+)\s*\}/g;
ru = Symbol.toStringTag;
class Qo {
  constructor(e, r, n, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[ru] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = i, this.errors = [], this.inner = [], tu(e).forEach((s) => {
      if (Ve.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
nu = Symbol.hasInstance;
iu = Symbol.toStringTag;
class Ve extends Error {
  static formatError(e, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Object.assign({}, r, {
      path: n
    })), typeof e == "string" ? e.replace(Td, (i, s) => pt(r[s])) : typeof e == "function" ? e(r) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, r, n, i, s) {
    const o = new Qo(e, r, n, i);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[iu] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Ve);
  }
  static [nu](e) {
    return Qo[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let ot = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: t,
    type: e,
    value: r,
    originalValue: n
  }) => {
    const i = n != null && n !== r ? ` (cast from the value \`${pt(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${t} must be a \`${e}\` type, but the final value was: \`${pt(r, !0)}\`` + i : `${t} must match the configured type. The validated value was: \`${pt(r, !0)}\`` + i;
  }
}, Ue = {
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
}, wt = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, ps = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, ms = {
  isValue: "${path} field must be ${value}"
}, ys = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, kn = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Ad = {
  notType: (t) => {
    const {
      path: e,
      value: r,
      spec: n
    } = t, i = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < i) return `${e} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${pt(r, !0)}\``;
      if (r.length > i) return `${e} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${pt(r, !0)}\``;
    }
    return Ve.formatError(ot.notType, t);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: ot,
  string: Ue,
  number: wt,
  date: ps,
  object: ys,
  array: kn,
  boolean: ms,
  tuple: Ad
});
const ei = (t) => t && t.__isYupSchema__;
class Bn {
  static fromOptions(e, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: i,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...u) => u.every((c) => c === n);
    return new Bn(e, (u, c) => {
      var p;
      let h = o(...u) ? i : s;
      return (p = h == null ? void 0 : h(c)) != null ? p : c;
    });
  }
  constructor(e, r) {
    this.fn = void 0, this.refs = e, this.refs = e, this.fn = r;
  }
  resolve(e, r) {
    let n = this.refs.map((s) => (
      // TODO: ? operator here?
      s.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)
    )), i = this.fn(n, e, r);
    if (i === void 0 || // @ts-ignore this can be base
    i === e)
      return e;
    if (!ei(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(r);
  }
}
const Rn = {
  context: "$",
  value: "."
};
class tr {
  constructor(e, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Rn.context, this.isValue = this.key[0] === Rn.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Rn.context : this.isValue ? Rn.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Yt.getter(this.path, !0), this.map = r.map;
  }
  getValue(e, r, n) {
    let i = this.isContext ? n : this.isValue ? e : r;
    return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(e, r) {
    return this.getValue(e, r == null ? void 0 : r.parent, r == null ? void 0 : r.context);
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
tr.prototype.__isYupRef = !0;
const rt = (t) => t == null;
function lr(t) {
  function e({
    value: r,
    path: n = "",
    options: i,
    originalValue: s,
    schema: o
  }, u, c) {
    const {
      name: p,
      test: h,
      params: m,
      message: O,
      skipAbsent: C
    } = t;
    let {
      parent: S,
      context: N,
      abortEarly: R = o.spec.abortEarly,
      disableStackTrace: U = o.spec.disableStackTrace
    } = i;
    function k(re) {
      return tr.isRef(re) ? re.getValue(r, S, N) : re;
    }
    function P(re = {}) {
      const we = Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: re.path || n,
        spec: o.spec,
        disableStackTrace: re.disableStackTrace || U
      }, m, re.params);
      for (const ke of Object.keys(we)) we[ke] = k(we[ke]);
      const be = new Ve(Ve.formatError(re.message || O, we), r, we.path, re.type || p, we.disableStackTrace);
      return be.params = we, be;
    }
    const F = R ? u : c;
    let x = {
      path: n,
      parent: S,
      type: p,
      from: i.from,
      createError: P,
      resolve: k,
      options: i,
      originalValue: s,
      schema: o
    };
    const G = (re) => {
      Ve.isError(re) ? F(re) : re ? c(null) : F(P());
    }, te = (re) => {
      Ve.isError(re) ? F(re) : u(re);
    };
    if (C && rt(r))
      return G(!0);
    let Ae;
    try {
      var pe;
      if (Ae = h.call(x, r, x), typeof ((pe = Ae) == null ? void 0 : pe.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(Ae).then(G, te);
      }
    } catch (re) {
      te(re);
      return;
    }
    G(Ae);
  }
  return e.OPTIONS = t, e;
}
function Od(t, e, r, n = r) {
  let i, s, o;
  return e ? (Yt.forEach(e, (u, c, p) => {
    let h = c ? u.slice(1, u.length - 1) : u;
    t = t.resolve({
      context: n,
      parent: i,
      value: r
    });
    let m = t.type === "tuple", O = p ? parseInt(h, 10) : 0;
    if (t.innerType || m) {
      if (m && !p) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && O >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);
      i = r, r = r && r[O], t = m ? t.spec.types[O] : t.innerType;
    }
    if (!p) {
      if (!t.fields || !t.fields[h]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);
      i = r, r = r && r[h], t = t.fields[h];
    }
    s = h, o = c ? "[" + u + "]" : "." + u;
  }), {
    schema: t,
    parent: i,
    parentPath: s
  }) : {
    parent: i,
    parentPath: e,
    schema: t
  };
}
class $n extends Set {
  describe() {
    const e = [];
    for (const r of this.values())
      e.push(tr.isRef(r) ? r.describe() : r);
    return e;
  }
  resolveAll(e) {
    let r = [];
    for (const n of this.values())
      r.push(e(n));
    return r;
  }
  clone() {
    return new $n(this.values());
  }
  merge(e, r) {
    const n = this.clone();
    return e.forEach((i) => n.add(i)), r.forEach((i) => n.delete(i)), n;
  }
}
function fr(t, e = /* @__PURE__ */ new Map()) {
  if (ei(t) || !t || typeof t != "object") return t;
  if (e.has(t)) return e.get(t);
  let r;
  if (t instanceof Date)
    r = new Date(t.getTime()), e.set(t, r);
  else if (t instanceof RegExp)
    r = new RegExp(t), e.set(t, r);
  else if (Array.isArray(t)) {
    r = new Array(t.length), e.set(t, r);
    for (let n = 0; n < t.length; n++) r[n] = fr(t[n], e);
  } else if (t instanceof Map) {
    r = /* @__PURE__ */ new Map(), e.set(t, r);
    for (const [n, i] of t.entries()) r.set(n, fr(i, e));
  } else if (t instanceof Set) {
    r = /* @__PURE__ */ new Set(), e.set(t, r);
    for (const n of t) r.add(fr(n, e));
  } else if (t instanceof Object) {
    r = {}, e.set(t, r);
    for (const [n, i] of Object.entries(t)) r[n] = fr(i, e);
  } else
    throw Error(`Unable to clone ${t}`);
  return r;
}
class Ke {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new $n(), this._blacklist = new $n(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(ot.notType);
    }), this.type = e.type, this._typeCheck = e.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, e == null ? void 0 : e.spec), this.withMutation((r) => {
      r.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(e) {
    if (this._mutate)
      return e && Object.assign(this.spec, e), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = fr(Object.assign({}, this.spec, e)), r;
  }
  label(e) {
    let r = this.clone();
    return r.spec.label = e, r;
  }
  meta(...e) {
    if (e.length === 0) return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, e[0]), r;
  }
  withMutation(e) {
    let r = this._mutate;
    this._mutate = !0;
    let n = e(this);
    return this._mutate = r, n;
  }
  concat(e) {
    if (!e || e === this) return this;
    if (e.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);
    let r = this, n = e.clone();
    const i = Object.assign({}, r.spec, n.spec);
    return n.spec = i, n.internalTests = Object.assign({}, r.internalTests, n.internalTests), n._whitelist = r._whitelist.merge(e._whitelist, e._blacklist), n._blacklist = r._blacklist.merge(e._blacklist, e._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((s) => {
      e.tests.forEach((o) => {
        s.test(o.OPTIONS);
      });
    }), n.transforms = [...r.transforms, ...n.transforms], n;
  }
  isType(e) {
    return e == null ? !!(this.spec.nullable && e === null || this.spec.optional && e === void 0) : this._typeCheck(e);
  }
  resolve(e) {
    let r = this;
    if (r.conditions.length) {
      let n = r.conditions;
      r = r.clone(), r.conditions = [], r = n.reduce((i, s) => s.resolve(i, e), r), r = r.resolve(e);
    }
    return r;
  }
  resolveOptions(e) {
    var r, n, i, s;
    return Object.assign({}, e, {
      from: e.from || [],
      strict: (r = e.strict) != null ? r : this.spec.strict,
      abortEarly: (n = e.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (i = e.recursive) != null ? i : this.spec.recursive,
      disableStackTrace: (s = e.disableStackTrace) != null ? s : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(e, r = {}) {
    let n = this.resolve(Object.assign({
      value: e
    }, r)), i = r.assert === "ignore-optionality", s = n._cast(e, r);
    if (r.assert !== !1 && !n.isType(s)) {
      if (i && rt(s))
        return s;
      let o = pt(e), u = pt(s);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
` + (u !== o ? `result of cast: ${u}` : ""));
    }
    return s;
  }
  _cast(e, r) {
    let n = e === void 0 ? e : this.transforms.reduce((i, s) => s.call(this, i, e, this), e);
    return n === void 0 && (n = this.getDefault(r)), n;
  }
  _validate(e, r = {}, n, i) {
    let {
      path: s,
      originalValue: o = e,
      strict: u = this.spec.strict
    } = r, c = e;
    u || (c = this._cast(c, Object.assign({
      assert: !1
    }, r)));
    let p = [];
    for (let h of Object.values(this.internalTests))
      h && p.push(h);
    this.runTests({
      path: s,
      value: c,
      originalValue: o,
      options: r,
      tests: p
    }, n, (h) => {
      if (h.length)
        return i(h, c);
      this.runTests({
        path: s,
        value: c,
        originalValue: o,
        options: r,
        tests: this.tests
      }, n, i);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(e, r, n) {
    let i = !1, {
      tests: s,
      value: o,
      originalValue: u,
      path: c,
      options: p
    } = e, h = (N) => {
      i || (i = !0, r(N, o));
    }, m = (N) => {
      i || (i = !0, n(N, o));
    }, O = s.length, C = [];
    if (!O) return m([]);
    let S = {
      value: o,
      originalValue: u,
      path: c,
      options: p,
      schema: this
    };
    for (let N = 0; N < s.length; N++) {
      const R = s[N];
      R(S, h, function(k) {
        k && (Array.isArray(k) ? C.push(...k) : C.push(k)), --O <= 0 && m(C);
      });
    }
  }
  asNestedTest({
    key: e,
    index: r,
    parent: n,
    parentPath: i,
    originalParent: s,
    options: o
  }) {
    const u = e ?? r;
    if (u == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const c = typeof u == "number";
    let p = n[u];
    const h = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: p,
      originalValue: s[u],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [c ? "index" : "key"]: u,
      path: c || u.includes(".") ? `${i || ""}[${c ? u : `"${u}"`}]` : (i ? `${i}.` : "") + e
    });
    return (m, O, C) => this.resolve(h)._validate(p, h, O, C);
  }
  validate(e, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: e
    })), s = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return new Promise((o, u) => i._validate(e, r, (c, p) => {
      Ve.isError(c) && (c.value = p), u(c);
    }, (c, p) => {
      c.length ? u(new Ve(c, p, void 0, void 0, s)) : o(p);
    }));
  }
  validateSync(e, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: e
    })), s, o = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return i._validate(e, Object.assign({}, r, {
      sync: !0
    }), (u, c) => {
      throw Ve.isError(u) && (u.value = c), u;
    }, (u, c) => {
      if (u.length) throw new Ve(u, e, void 0, void 0, o);
      s = c;
    }), s;
  }
  isValid(e, r) {
    return this.validate(e, r).then(() => !0, (n) => {
      if (Ve.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, r) {
    try {
      return this.validateSync(e, r), !0;
    } catch (n) {
      if (Ve.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, e) : fr(r);
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
  nullability(e, r) {
    const n = this.clone({
      nullable: e
    });
    return n.internalTests.nullable = lr({
      message: r,
      name: "nullable",
      test(i) {
        return i === null ? this.schema.spec.nullable : !0;
      }
    }), n;
  }
  optionality(e, r) {
    const n = this.clone({
      optional: e
    });
    return n.internalTests.optionality = lr({
      message: r,
      name: "optionality",
      test(i) {
        return i === void 0 ? this.schema.spec.optional : !0;
      }
    }), n;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(e = ot.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = ot.notNull) {
    return this.nullability(!1, e);
  }
  required(e = ot.required) {
    return this.clone().withMutation((r) => r.nonNullable(e).defined(e));
  }
  notRequired() {
    return this.clone().withMutation((e) => e.nullable().optional());
  }
  transform(e) {
    let r = this.clone();
    return r.transforms.push(e), r;
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
    let r;
    if (e.length === 1 ? typeof e[0] == "function" ? r = {
      test: e[0]
    } : r = e[0] : e.length === 2 ? r = {
      name: e[0],
      test: e[1]
    } : r = {
      name: e[0],
      message: e[1],
      test: e[2]
    }, r.message === void 0 && (r.message = ot.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), i = lr(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (s || o.OPTIONS.test === i.OPTIONS.test))), n.tests.push(i), n;
  }
  when(e, r) {
    !Array.isArray(e) && typeof e != "string" && (r = e, e = ".");
    let n = this.clone(), i = tu(e).map((s) => new tr(s));
    return i.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new Bn(i, r) : Bn.fromOptions(i, r)), n;
  }
  typeError(e) {
    let r = this.clone();
    return r.internalTests.typeError = lr({
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
    }), r;
  }
  oneOf(e, r = ot.oneOf) {
    let n = this.clone();
    return e.forEach((i) => {
      n._whitelist.add(i), n._blacklist.delete(i);
    }), n.internalTests.whiteList = lr({
      message: r,
      name: "oneOf",
      skipAbsent: !0,
      test(i) {
        let s = this.schema._whitelist, o = s.resolveAll(this.resolve);
        return o.includes(i) ? !0 : this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        });
      }
    }), n;
  }
  notOneOf(e, r = ot.notOneOf) {
    let n = this.clone();
    return e.forEach((i) => {
      n._blacklist.add(i), n._whitelist.delete(i);
    }), n.internalTests.blacklist = lr({
      message: r,
      name: "notOneOf",
      test(i) {
        let s = this.schema._blacklist, o = s.resolveAll(this.resolve);
        return o.includes(i) ? this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), n;
  }
  strip(e = !0) {
    let r = this.clone();
    return r.spec.strip = e, r;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(e) {
    const r = (e ? this.resolve(e) : this).clone(), {
      label: n,
      meta: i,
      optional: s,
      nullable: o
    } = r.spec;
    return {
      meta: i,
      label: n,
      optional: s,
      nullable: o,
      default: r.getDefault(e),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.map((c) => ({
        name: c.OPTIONS.name,
        params: c.OPTIONS.params
      })).filter((c, p, h) => h.findIndex((m) => m.name === c.name) === p)
    };
  }
}
Ke.prototype.__isYupSchema__ = !0;
for (const t of ["validate", "validateSync"]) Ke.prototype[`${t}At`] = function(e, r, n = {}) {
  const {
    parent: i,
    parentPath: s,
    schema: o
  } = Od(this, e, r, n.context);
  return o[t](i && i[s], Object.assign({}, n, {
    parent: i,
    path: e
  }));
};
for (const t of ["equals", "is"]) Ke.prototype[t] = Ke.prototype.oneOf;
for (const t of ["not", "nope"]) Ke.prototype[t] = Ke.prototype.notOneOf;
const Cd = () => !0;
function Ge(t) {
  return new su(t);
}
class su extends Ke {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: Cd
    }, e));
  }
}
Ge.prototype = su.prototype;
function mt() {
  return new ou();
}
class ou extends Ke {
  constructor() {
    super({
      type: "boolean",
      check(e) {
        return e instanceof Boolean && (e = e.valueOf()), typeof e == "boolean";
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => {
        if (n.spec.coerce && !n.isType(e)) {
          if (/^(true|1)$/i.test(String(e))) return !0;
          if (/^(false|0)$/i.test(String(e))) return !1;
        }
        return e;
      });
    });
  }
  isTrue(e = ms.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(r) {
        return rt(r) || r === !0;
      }
    });
  }
  isFalse(e = ms.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(r) {
        return rt(r) || r === !1;
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
mt.prototype = ou.prototype;
const Id = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Nd(t) {
  const e = gs(t);
  if (!e) return Date.parse ? Date.parse(t) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let r = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (r = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (r = 0 - r)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + r, e.second, e.millisecond);
}
function gs(t) {
  var e, r;
  const n = Id.exec(t);
  return n ? {
    year: dt(n[1]),
    month: dt(n[2], 1) - 1,
    day: dt(n[3], 1),
    hour: dt(n[4]),
    minute: dt(n[5]),
    second: dt(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      dt(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (r = n[7]) == null ? void 0 : r.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: dt(n[10]),
    minuteOffset: dt(n[11])
  } : null;
}
function dt(t, e = 0) {
  return Number(t) || e;
}
let Dd = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Pd = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), kd = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, xd = "^\\d{4}-\\d{2}-\\d{2}", Fd = "\\d{2}:\\d{2}:\\d{2}", qd = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Ld = new RegExp(`${xd}T${Fd}(\\.\\d+)?${qd}$`), Bd = (t) => rt(t) || t === t.trim(), $d = {}.toString();
function f() {
  return new au();
}
class au extends Ke {
  constructor() {
    super({
      type: "string",
      check(e) {
        return e instanceof String && (e = e.valueOf()), typeof e == "string";
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => {
        if (!n.spec.coerce || n.isType(e) || Array.isArray(e)) return e;
        const i = e != null && e.toString ? e.toString() : e;
        return i === $d ? e : i;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((r) => r.test({
      message: e || ot.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((r) => r.OPTIONS.name !== "required"), e));
  }
  length(e, r = Ue.length) {
    return this.test({
      message: r,
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
  min(e, r = Ue.min) {
    return this.test({
      message: r,
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
  max(e, r = Ue.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(e);
      }
    });
  }
  matches(e, r) {
    let n = !1, i, s;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: i,
      name: s
    } = r : i = r), this.test({
      name: s || "matches",
      message: i || Ue.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(e) !== -1
    });
  }
  email(e = Ue.email) {
    return this.matches(Dd, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = Ue.url) {
    return this.matches(Pd, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = Ue.uuid) {
    return this.matches(kd, {
      name: "uuid",
      message: e,
      excludeEmptyString: !1
    });
  }
  datetime(e) {
    let r = "", n, i;
    return e && (typeof e == "object" ? {
      message: r = "",
      allowOffset: n = !1,
      precision: i = void 0
    } = e : r = e), this.matches(Ld, {
      name: "datetime",
      message: r || Ue.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || Ue.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || n) return !0;
        const o = gs(s);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || Ue.datetime_precision,
      params: {
        precision: i
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || i == null) return !0;
        const o = gs(s);
        return o ? o.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = Ue.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: e,
      name: "trim",
      test: Bd
    });
  }
  lowercase(e = Ue.lowercase) {
    return this.transform((r) => rt(r) ? r : r.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => rt(r) || r === r.toLowerCase()
    });
  }
  uppercase(e = Ue.uppercase) {
    return this.transform((r) => rt(r) ? r : r.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => rt(r) || r === r.toUpperCase()
    });
  }
}
f.prototype = au.prototype;
let Ud = (t) => t != +t;
function Y() {
  return new uu();
}
class uu extends Ke {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !Ud(e);
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => {
        if (!n.spec.coerce) return e;
        let i = e;
        if (typeof i == "string") {
          if (i = i.replace(/\s/g, ""), i === "") return NaN;
          i = +i;
        }
        return n.isType(i) || i === null ? i : parseFloat(i);
      });
    });
  }
  min(e, r = wt.min) {
    return this.test({
      message: r,
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
  max(e, r = wt.max) {
    return this.test({
      message: r,
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
  lessThan(e, r = wt.lessThan) {
    return this.test({
      message: r,
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
  moreThan(e, r = wt.moreThan) {
    return this.test({
      message: r,
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
  positive(e = wt.positive) {
    return this.moreThan(0, e);
  }
  negative(e = wt.negative) {
    return this.lessThan(0, e);
  }
  integer(e = wt.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (r) => Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((e) => rt(e) ? e : e | 0);
  }
  round(e) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (e = ((r = e) == null ? void 0 : r.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (n.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((i) => rt(i) ? i : Math[e](i));
  }
}
Y.prototype = uu.prototype;
let cu = /* @__PURE__ */ new Date(""), Md = (t) => Object.prototype.toString.call(t) === "[object Date]";
function Qt() {
  return new Qr();
}
class Qr extends Ke {
  constructor() {
    super({
      type: "date",
      check(e) {
        return Md(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = Nd(e), isNaN(e) ? Qr.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, r) {
    let n;
    if (tr.isRef(e))
      n = e;
    else {
      let i = this.cast(e);
      if (!this._typeCheck(i)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = i;
    }
    return n;
  }
  min(e, r = ps.min) {
    let n = this.prepareParam(e, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(i) {
        return i >= this.resolve(n);
      }
    });
  }
  max(e, r = ps.max) {
    let n = this.prepareParam(e, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(i) {
        return i <= this.resolve(n);
      }
    });
  }
}
Qr.INVALID_DATE = cu;
Qt.prototype = Qr.prototype;
Qt.INVALID_DATE = cu;
function jd(t, e = []) {
  let r = [], n = /* @__PURE__ */ new Set(), i = new Set(e.map(([o, u]) => `${o}-${u}`));
  function s(o, u) {
    let c = Yt.split(o)[0];
    n.add(c), i.has(`${u}-${c}`) || r.push([u, c]);
  }
  for (const o of Object.keys(t)) {
    let u = t[o];
    n.add(o), tr.isRef(u) && u.isSibling ? s(u.path, o) : ei(u) && "deps" in u && u.deps.forEach((c) => s(c, o));
  }
  return bd.array(Array.from(n), r).reverse();
}
function Jo(t, e) {
  let r = 1 / 0;
  return t.some((n, i) => {
    var s;
    if ((s = e.path) != null && s.includes(n))
      return r = i, !0;
  }), r;
}
function lu(t) {
  return (e, r) => Jo(t, e) - Jo(t, r);
}
const fu = (t, e, r) => {
  if (typeof t != "string")
    return t;
  let n = t;
  try {
    n = JSON.parse(t);
  } catch {
  }
  return r.isType(n) ? n : t;
};
function xn(t) {
  if ("fields" in t) {
    const e = {};
    for (const [r, n] of Object.entries(t.fields))
      e[r] = xn(n);
    return t.setFields(e);
  }
  if (t.type === "array") {
    const e = t.optional();
    return e.innerType && (e.innerType = xn(e.innerType)), e;
  }
  return t.type === "tuple" ? t.optional().clone({
    types: t.spec.types.map(xn)
  }) : "optional" in t ? t.optional() : t;
}
const Vd = (t, e) => {
  const r = [...Yt.normalizePath(e)];
  if (r.length === 1) return r[0] in t;
  let n = r.pop(), i = Yt.getter(Yt.join(r), !0)(t);
  return !!(i && n in i);
};
let Xo = (t) => Object.prototype.toString.call(t) === "[object Object]";
function Gd(t, e) {
  let r = Object.keys(t.fields);
  return Object.keys(e).filter((n) => r.indexOf(n) === -1);
}
const zd = lu([]);
function se(t) {
  return new du(t);
}
class du extends Ke {
  constructor(e) {
    super({
      type: "object",
      check(r) {
        return Xo(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = zd, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, r = {}) {
    var n;
    let i = super._cast(e, r);
    if (i === void 0) return this.getDefault(r);
    if (!this._typeCheck(i)) return i;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, u = [].concat(this._nodes, Object.keys(i).filter((m) => !this._nodes.includes(m))), c = {}, p = Object.assign({}, r, {
      parent: c,
      __validating: r.__validating || !1
    }), h = !1;
    for (const m of u) {
      let O = s[m], C = m in i;
      if (O) {
        let S, N = i[m];
        p.path = (r.path ? `${r.path}.` : "") + m, O = O.resolve({
          value: N,
          context: r.context,
          parent: c
        });
        let R = O instanceof Ke ? O.spec : void 0, U = R == null ? void 0 : R.strict;
        if (R != null && R.strip) {
          h = h || m in i;
          continue;
        }
        S = !r.__validating || !U ? (
          // TODO: use _cast, this is double resolving
          O.cast(i[m], p)
        ) : i[m], S !== void 0 && (c[m] = S);
      } else C && !o && (c[m] = i[m]);
      (C !== m in c || c[m] !== i[m]) && (h = !0);
    }
    return h ? c : i;
  }
  _validate(e, r = {}, n, i) {
    let {
      from: s = [],
      originalValue: o = e,
      recursive: u = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: o
    }, ...s], r.__validating = !0, r.originalValue = o, super._validate(e, r, n, (c, p) => {
      if (!u || !Xo(p)) {
        i(c, p);
        return;
      }
      o = o || p;
      let h = [];
      for (let m of this._nodes) {
        let O = this.fields[m];
        !O || tr.isRef(O) || h.push(O.asNestedTest({
          options: r,
          key: m,
          parent: p,
          parentPath: r.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: h,
        value: p,
        originalValue: o,
        options: r
      }, n, (m) => {
        i(m.sort(this._sortErrors).concat(c), p);
      });
    });
  }
  clone(e) {
    const r = super.clone(e);
    return r.fields = Object.assign({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(e) {
    let r = super.concat(e), n = r.fields;
    for (let [i, s] of Object.entries(this.fields)) {
      const o = n[i];
      n[i] = o === void 0 ? s : o;
    }
    return r.withMutation((i) => (
      // XXX: excludes here is wrong
      i.setFields(n, [...this._excludedEdges, ...e._excludedEdges])
    ));
  }
  _getDefault(e) {
    if ("default" in this.spec)
      return super._getDefault(e);
    if (!this._nodes.length)
      return;
    let r = {};
    return this._nodes.forEach((n) => {
      var i;
      const s = this.fields[n];
      let o = e;
      (i = o) != null && i.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[n]
      })), r[n] = s && "getDefault" in s ? s.getDefault(o) : void 0;
    }), r;
  }
  setFields(e, r) {
    let n = this.clone();
    return n.fields = e, n._nodes = jd(e, r), n._sortErrors = lu(Object.keys(e)), r && (n._excludedEdges = r), n;
  }
  shape(e, r = []) {
    return this.clone().withMutation((n) => {
      let i = n._excludedEdges;
      return r.length && (Array.isArray(r[0]) || (r = [r]), i = [...n._excludedEdges, ...r]), n.setFields(Object.assign(n.fields, e), i);
    });
  }
  partial() {
    const e = {};
    for (const [r, n] of Object.entries(this.fields))
      e[r] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
    return this.setFields(e);
  }
  deepPartial() {
    return xn(this);
  }
  pick(e) {
    const r = {};
    for (const n of e)
      this.fields[n] && (r[n] = this.fields[n]);
    return this.setFields(r, this._excludedEdges.filter(([n, i]) => e.includes(n) && e.includes(i)));
  }
  omit(e) {
    const r = [];
    for (const n of Object.keys(this.fields))
      e.includes(n) || r.push(n);
    return this.pick(r);
  }
  from(e, r, n) {
    let i = Yt.getter(e, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return Vd(s, e) && (o = Object.assign({}, s), n || delete o[e], o[r] = i(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(fu);
  }
  noUnknown(e = !0, r = ys.noUnknown) {
    typeof e != "boolean" && (r = e, e = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(i) {
        if (i == null) return !0;
        const s = Gd(this.schema, i);
        return !e || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = e, n;
  }
  unknown(e = !0, r = ys.noUnknown) {
    return this.noUnknown(!e, r);
  }
  transformKeys(e) {
    return this.transform((r) => {
      if (!r) return r;
      const n = {};
      for (const i of Object.keys(r)) n[e(i)] = r[i];
      return n;
    });
  }
  camelCase() {
    return this.transformKeys(Li.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Li.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => Li.snakeCase(e).toUpperCase());
  }
  describe(e) {
    const r = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    n.fields = {};
    for (const [s, o] of Object.entries(r.fields)) {
      var i;
      let u = e;
      (i = u) != null && i.value && (u = Object.assign({}, u, {
        parent: u.value,
        value: u.value[s]
      })), n.fields[s] = o.describe(u);
    }
    return n;
  }
}
se.prototype = du.prototype;
function kt(t) {
  return new hu(t);
}
class hu extends Ke {
  constructor(e) {
    super({
      type: "array",
      spec: {
        types: e
      },
      check(r) {
        return Array.isArray(r);
      }
    }), this.innerType = void 0, this.innerType = e;
  }
  _cast(e, r) {
    const n = super._cast(e, r);
    if (!this._typeCheck(n) || !this.innerType)
      return n;
    let i = !1;
    const s = n.map((o, u) => {
      const c = this.innerType.cast(o, Object.assign({}, r, {
        path: `${r.path || ""}[${u}]`
      }));
      return c !== o && (i = !0), c;
    });
    return i ? s : n;
  }
  _validate(e, r = {}, n, i) {
    var s;
    let o = this.innerType, u = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(e, r, n, (c, p) => {
      var h;
      if (!u || !o || !this._typeCheck(p)) {
        i(c, p);
        return;
      }
      let m = new Array(p.length);
      for (let C = 0; C < p.length; C++) {
        var O;
        m[C] = o.asNestedTest({
          options: r,
          index: C,
          parent: p,
          parentPath: r.path,
          originalParent: (O = r.originalValue) != null ? O : e
        });
      }
      this.runTests({
        value: p,
        tests: m,
        originalValue: (h = r.originalValue) != null ? h : e,
        options: r
      }, n, (C) => i(C.concat(c), p));
    });
  }
  clone(e) {
    const r = super.clone(e);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(fu);
  }
  concat(e) {
    let r = super.concat(e);
    return r.innerType = this.innerType, e.innerType && (r.innerType = r.innerType ? (
      // @ts-expect-error Lazy doesn't have concat and will break
      r.innerType.concat(e.innerType)
    ) : e.innerType), r;
  }
  of(e) {
    let r = this.clone();
    if (!ei(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + pt(e));
    return r.innerType = e, r.spec = Object.assign({}, r.spec, {
      types: e
    }), r;
  }
  length(e, r = kn.length) {
    return this.test({
      message: r,
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
  min(e, r) {
    return r = r || kn.min, this.test({
      message: r,
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
  max(e, r) {
    return r = r || kn.max, this.test({
      message: r,
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
    return this.default(() => []).transform((e, r) => this._typeCheck(e) ? e : r == null ? [] : [].concat(r));
  }
  compact(e) {
    let r = e ? (n, i, s) => !e(n, i, s) : (n) => !!n;
    return this.transform((n) => n != null ? n.filter(r) : n);
  }
  describe(e) {
    const r = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    if (r.innerType) {
      var i;
      let s = e;
      (i = s) != null && i.value && (s = Object.assign({}, s, {
        parent: s.value,
        value: s.value[0]
      })), n.innerType = r.innerType.describe(s);
    }
    return n;
  }
}
kt.prototype = hu.prototype;
const I = {
  IS_STRING: /^[a-zA-Z ]+$/,
  IS_VEHICLE_NO: /^[a-zA-Z]{2}[- ]?[0-9]{1,2}[- ]?[a-zA-Z]{1,2}[- ]?[0-9]{4}$/,
  IS_NUMBER: /^\d+(\.\d+)?$/,
  CONTACT_NO: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/,
  IS_EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}, Qe = se().shape({
  address1: f().required("Address Line 1 is required"),
  address2: f().nullable(),
  location: f().required("Location is required"),
  city: f().required("City is required").matches(I.IS_STRING, "City name should only contains alphabets."),
  state: f().required("State is required").matches(I.IS_STRING, "State name should only contains alphabets."),
  pincode: f().required("Pincode is required").matches(I.PINCODE, "Pincode must be exactly 6 digits")
});
f().test("is-future-or-today", "Date must be today or in the future", (t) => {
  if (!t)
    return !0;
  const e = new Date(t), r = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), r.setHours(0, 0, 0, 0), e >= r;
});
se().shape({
  companyName: f().required("Party Name is required"),
  category: f().required("Please select category of vendor"),
  subcategory: f().required("Please select subcategory of vendor"),
  officeAddress: Qe,
  officeContactNo: f().required("Please enter contact number.").matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: f().notRequired().nullable().matches(I.IS_EMAIL, "Please enter valid email."),
  mainProduct: f().notRequired().nullable().matches(I.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: f().notRequired().nullable().matches(I.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: f().notRequired().nullable().matches(I.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: f().notRequired().nullable().matches(I.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: f().notRequired().nullable(),
  creditTerms: f().notRequired().nullable(),
  ifGstnCopy: mt().required(),
  gstn: f().when("ifGstnCopy", {
    is: !0,
    then: (t) => t.required("GSTN number required if GSTN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  gstnCopy: Ge().when("ifGstnCopy", {
    is: !0,
    then: (t) => t.required("GSTN copy required if GSTN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  ifPanCardCopy: mt().required(),
  panNo: f().when("ifPanCardCopy", {
    is: !0,
    then: (t) => t.required("PAN number required if PAN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  panCardCopy: Ge().when("ifPanCardCopy", {
    is: !0,
    then: (t) => t.required("PAN card copy required if PAN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  ifMsmeCopy: mt().required(),
  msmeNo: f().when("ifMsmeCopy", {
    is: !0,
    then: (t) => t.required("MSME number required if MSME is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  msmeCopy: Ge().when("ifMsmeCopy", {
    is: !0,
    then: (t) => t.required("MSME copy required if MSME is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  vendorSaleInfo: se().shape({
    contactFName: f().required("Contact person first name is required.").matches(I.IS_STRING, "Name should include only alphabets."),
    contactMName: f().notRequired().nullable().matches(I.IS_STRING, "Name should include only alphabets."),
    contactLName: f().required("Contact person last name is required.").matches(I.IS_STRING, "Name should include only alphabets."),
    directContactNumber: f().required("Contact person phone number is required").matches(I.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: f().notRequired().nullable().matches(I.CONTACT_NO, "Please enter a valid contact number."),
    email: f().notRequired().nullable().matches(I.IS_EMAIL, "Please enter valid email.")
  }),
  vendorBankDetails: se().shape({
    beneficiaryFName: f().required("Beneficiary person first name is required.").matches(I.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: f().notRequired().nullable().matches(I.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: f().required("Beneficiary person last name is required.").matches(I.IS_STRING, "Name should include only alphabets."),
    bankName: f().required("Bank name is required.").matches(I.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: Qe,
    typeOfAcc: f().required("Account type is required."),
    ifscCode: f().required("IFSC code of bank is required."),
    swiftNo: f().notRequired().nullable(),
    invoiceCurrency: f().notRequired().nullable(),
    cancelledChequeCopy: f().notRequired().nullable()
  }),
  ref1FName: f().required("Reference person first name is required.").matches(I.IS_STRING, "Name should include only alphabets."),
  ref1MName: f().notRequired().nullable().matches(I.IS_STRING, "Name should include only alphabets."),
  ref1LName: f().required("Reference person first name is required.").matches(I.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: f().required("Contact number is required").matches(I.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: f().notRequired().nullable().matches(I.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: Qe,
  ref1Email: f().notRequired().nullable().matches(I.IS_EMAIL, "Please enter valid email."),
  ref2FName: f().notRequired().nullable().matches(I.IS_STRING, "Name should include only alphabets."),
  ref2MName: f().notRequired().nullable().matches(I.IS_STRING, "Name should include only alphabets."),
  ref2LName: f().notRequired().nullable().matches(I.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: f().notRequired().nullable().matches(I.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: f().notRequired().nullable().matches(I.CONTACT_NO, "Please enter valid contact number."),
  ref2Email: f().notRequired().nullable().matches(I.IS_EMAIL, "Please enter valid email."),
  ref2Address: se().shape({
    city: f().notRequired().nullable().matches(I.IS_STRING, "City name should only contains alphabets."),
    state: f().notRequired().nullable().matches(I.IS_STRING, "State name should only contains alphabets."),
    pincode: f().notRequired().nullable().matches(I.PINCODE, "Pincode must be exactly 6 digits")
  }).notRequired().nullable()
});
se().shape({
  farmerfName: f().required("First Name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  farmermName: f().nullable().matches(I.IS_STRING, "Name should only contains alphabets."),
  farmerlName: f().required("Last Name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: Qe,
  primaryMobileNo: f().required("Contact number is required.").matches(I.CONTACT_NO, "Please enter valid contact number."),
  secondaryMobileNo: f().nullable().matches(I.CONTACT_NO, "Please enter valid contact number."),
  email: f().nullable().matches(I.IS_EMAIL, "Please enter valid email."),
  dob: Qt().nullable(),
  farmAddress: Qe,
  totalLandArea: Y().nullable().min(0, "Area cannot be negative."),
  cultivationArea: Y().nullable().positive("Area cannot be negative."),
  farmerPhoto: Ge().nullable().test(
    "fileSize",
    "File size is too large (must be less than 1MB)",
    function(t) {
      return t ? t.size <= 1024 * 1024 : !0;
    }
  ),
  farmPhoto: Ge().nullable().test(
    "fileSize",
    "File size is too large (must be less than 1MB)",
    function(t) {
      return t ? t.size <= 1024 * 1024 : !0;
    }
  ),
  crops: kt(
    se({
      crop: f().required("Crop name is required"),
      noOfPlants: Y().nullable().min(0, "Number of plants cannot be negative"),
      pruningDate: Qt().required("Pruning date is required."),
      expectedHarvestDate: Qt().required("Expected harvest date is required."),
      expectedQuantityInTonnes: Y().required("Expected quantity in metric tones are required.").min(0, "Quantity cannot be negative")
    }).required("At least one crop is required")
  )
});
const Wd = se().shape({
  accDeptFName: f().required("First name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  accDeptMName: f().notRequired().nullable().matches(I.IS_STRING, "Name should only contains alphabets."),
  accDeptLName: f().required("Last name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  accDeptMobileNo: f().required("Please enter contact number.").matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  ownerFName: f().required("First name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  ownerMName: f().notRequired().nullable().matches(I.IS_STRING, "Name should only contains alphabets."),
  ownerLName: f().required("Last name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  ownerMobileNo: f().required("Please enter contact number.").matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  mandiLicenceNo: f().notRequired().nullable(),
  // mandiLicenceCopy: yup.,
  regiNo: f().notRequired().nullable(),
  // regiCopy: File | null,
  electricityBill: mt().required("Please select yes or no."),
  consumenrNo: f().when("electricityBill", {
    is: !0,
    then: (t) => t.required("Consumer number is required if electricity bill available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  electricityBillCopy: Ge().when("electricityBill", {
    is: !0,
    then: (t) => t.required("Electricity bill copy required if it is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  notElectricityBillReason: f().when("electricityBill", {
    is: !1,
    then: (t) => t.required("Please specify reason to not attach electricity bill."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  customerBlacklisted: mt().required("Please select yes or no."),
  blackListedBy: f().when("customerBlacklisted", {
    is: !0,
    then: (t) => t.required("Please specify name who blacklisted the customer."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  ifBlacklistedReason: f().when("customerBlacklisted", {
    is: !0,
    then: (t) => t.required("please specify reason for blacklisting customer."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  visitingCard: mt().required("Please select yes or no."),
  visitinContactNo: f().when("visitingCard", {
    is: !0,
    then: (t) => t.required("Consumer number is required ff visiting card available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  visitingCardCopy: Ge().when("visitingCard", {
    is: !0,
    then: (t) => t.required("Visiting card copy required if it is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  notVisitingCardReason: f().when("visitingCard", {
    is: !1,
    then: (t) => t.required("Please specify reason to not attach visiting card."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  //References
  ref1FName: f().required("First name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  ref1MName: f().notRequired().nullable().matches(I.IS_STRING, "Name should only contains alphabets."),
  ref1LName: f().required("Last name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  ref1Address: Qe,
  ref1ContactNo: f().required("Please enter contact number.").matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  ref1Email: f().required("Please enter email.").email("Please enter valid email"),
  ref2FName: f().notRequired().nullable().matches(I.IS_STRING, "Name should only contains alphabets."),
  ref2MName: f().notRequired().nullable().matches(I.IS_STRING, "Name should only contains alphabets."),
  ref2LName: f().notRequired().nullable().matches(I.IS_STRING, "Name should only contains alphabets."),
  ref2ContactNo: f().notRequired().nullable().matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  ref2Email: f().notRequired().nullable().email("Please enter valid email")
}), Hd = se().shape({
  billingName: f().required("Billing name is required."),
  commonlyKnownAs: f().notRequired().nullable(),
  contactPersonFName: f().required("First name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  contactPersonMName: f().notRequired().nullable().matches(I.IS_STRING, "Name should only contains alphabets."),
  contactPersonLName: f().required("Last name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  billingAddress: Qe,
  primaryContactNo: f().required("Please enter contact number.").matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: f().notRequired().nullable().matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: f().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: f().notRequired().nullable().email("Please enter valid email")
}), Kd = se().shape({
  deliveryAddress: Qe,
  receivingPersonFName: f().required("First name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  receivingPersonMName: f().notRequired().nullable().matches(I.IS_STRING, "Name should only contains alphabets."),
  receivingPersonLName: f().required("Last name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  primaryContactNo: f().required("Please enter contact number.").matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: f().notRequired().nullable().matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: f().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: f().notRequired().nullable().email("Please enter valid email")
}), Yd = se().shape({
  // ifCancelledCheque: yup
  //     .boolean()
  //     .required('Please select yes or no.'),
  // cancelledChequeCopy: yup
  //     .mixed()
  //     .when('ifCancelledCheque', {
  //         is: true,
  //         then: (schema) => schema.required("Cancel cheque copy required if it is available."),
  //         otherwise: (schema) => schema.notRequired().nullable(),
  //     }),
  // notCancelledChequeReason: yup
  //     .string()
  //     .when('ifCancelledCheque', {
  //         is: false,
  //         then: (schema) => schema.required("Please specify reason to not attach cancel cheque."),
  //         otherwise: (schema) => schema.notRequired().nullable(),
  //     }),
  bankAccHolderFName: f().required("First name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderMName: f().notRequired().nullable().matches(I.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderLName: f().required("Last name is required").matches(I.IS_STRING, "Name should only contains alphabets."),
  bankName: f().required("Bank name is required."),
  bankBranch: f().required("Branch name is required."),
  accType: f().required("Account type is required."),
  // otherAccType: yup
  //     .string()
  //     .notRequired()
  //     .nullable(),
  bankAccNo: f().required("Account number is required."),
  ifscCode: f().required("IFSC code is required."),
  bankAddress: Qe
  // bankStatementCopy: yup.mixed(),
});
se().shape({
  panNo: f().notRequired().nullable(),
  panCopy: Ge().notRequired().nullable(),
  aadharNo: f().notRequired().nullable(),
  addharCopy: Ge().notRequired().nullable(),
  gstn: f().notRequired().nullable(),
  regiCertificateCopy: Ge().notRequired().nullable(),
  billBookCopy: Ge().notRequired().nullable(),
  certificationsDetails: f().notRequired().nullable(),
  otherCertifications: f().notRequired().nullable(),
  corpRegiDetails: f().notRequired().nullable(),
  otherCorpRegiDetails: f().notRequired().nullable(),
  incorpoCertificateCopy: Ge().notRequired().nullable(),
  cinNo: f().notRequired().nullable()
});
const Qd = se().shape({}), Jd = se().shape({
  paymentMade: f().required("Required. Please select an option."),
  otherPaymentMade: f().nullable(),
  paymentMode: f().required("Payment mode is required."),
  otherPaymentMode: f().nullable(),
  marginDeposit: f().nullable(),
  rtv: mt().required("Please select yes or no."),
  agreementExecuted: mt().required("Please select yes or no."),
  lc: f().nullable(),
  bg: f().nullable(),
  securityDepoCheqNo: f().nullable(),
  securityDepoAmt: Y().positive("Amount cannot be negative."),
  //Initial Exposure Limit (IEL)
  IELinAmt: Y().positive("Amount cannot be negative."),
  IELRecommendedBy: f().matches(I.IS_STRING, "Name should only contain alphabets."),
  IELRecommendedDate: f().nullable(),
  //Revision of Exposure Limit (REL)
  RELinAmt: Y().positive("Amount cannot be negative."),
  RELRecommendedBy: f().matches(I.IS_STRING, "Name should only contain alphabets."),
  RELRecommendedDate: f().nullable(),
  reason: f().nullable(),
  docEvidenceCopy: Ge().nullable()
}), Xd = se().shape({
  proposerBDName: f().nullable(),
  pflCoordinator: f().nullable(),
  recommendedBy: f().nullable(),
  dispatchLocationPfl: f().nullable(),
  approvedBy: f().nullable(),
  relationshipManager: f().nullable(),
  avgBillingMonthly: Y().positive("Average cannot be negative."),
  volumeMonthly: Y().positive("Volume cannot be negative."),
  customerVerification: f().nullable(),
  verificationAgency: f().nullable(),
  validityPeriod: f().nullable(),
  dueDiligenceDone: f().nullable(),
  creditWorthinessDue: f().nullable(),
  keyAccountPersonAssigned: f().nullable(),
  sinceWhen: f().nullable(),
  ledgerCreatedDate: f().nullable(),
  ledgerCreatedBy: f().nullable(),
  ledgerVerifiedApprovedBy: f().nullable(),
  additionalNotes: f().nullable()
});
se().shape({
  organisationName: f().required("Organization name is required."),
  customerTypes: f().required("Customer type is required."),
  customerCategory: f().required("Customer category is required."),
  organisationType: f().required("Organization type is required."),
  // otherType: yup
  //     .string()
  //     .notRequired().nullable(),
  customerAddress: Qe,
  primaryContactNo: f().required("Please enter contact number.").matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: f().notRequired().nullable().matches(I.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: f().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: f().notRequired().nullable().email("Please enter valid email"),
  keyMobileNumbers: Wd,
  billingDetails: Hd,
  deliveryDetails: Kd,
  // statutoryDetails: statutoryDetailsValidationSchema,
  bankDetails: Yd,
  productSpecification: Qd,
  paymentTerms: Jd,
  officeUseOnly: Xd
});
const Zd = /^[6-9]\d{9}$/;
f().matches(Zd, "Please enter a valid 10-digit contact number");
const eh = {
  bankName: "",
  branchName: "",
  accountNumber: "",
  ifscCode: "",
  aadharNo: "",
  panNo: "",
  electionCardNo: ""
}, th = {
  relation: "",
  nameAsPerAadhar: "",
  mobileNumber: "",
  age: 0
}, rh = {
  previousFarmOrWorkPlace: "",
  workType: "",
  workLocation: "",
  workDuration: 0,
  wagesPerDayOrMonth: 0
}, Zh = {
  representativeName: "",
  siteName: "",
  laborType: "",
  laborName: "",
  nameAsPerAadhar: "",
  nameAsPerBank: "",
  presentAddress: ds,
  permanentAddress: ds,
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
  bankDetails: eh,
  familyDetails: [th],
  workExperience: [rh],
  preferredWorkingLocation: "",
  preferredWorkType: "",
  referenceName: "",
  referencePosition: "",
  referenceMobileNumber: ""
}, nh = {
  laborType: "",
  labourName: "",
  contactNo: "",
  inTime: "",
  outTime: "",
  amount: 0
}, ep = {
  companyName: "",
  location: "",
  date: "",
  labourDetails: [nh],
  remarks: ""
}, ih = {
  productName: null,
  origin: null,
  variety: null,
  count: null,
  size: null,
  uom: null,
  quantity: null,
  unitPrice: null,
  amount: null
}, tp = {
  companyName: null,
  location: null,
  date: null,
  batchNo: null,
  grn: null,
  dumpProducts: [ih],
  totalDumpCost: null,
  totalCostInWords: null,
  remark: null
}, rp = {
  companyName: null,
  date: null,
  vehicleType: null,
  vehicleNo: null,
  driverName: null,
  driverMobNo: null,
  paymentDiscussed: 0,
  transportationBillAmt: 0,
  advancePaid: 0,
  clientName: null,
  clientAddress: ds,
  receivingPerson: null,
  outTime: null,
  reachingTime: null,
  accDeptVerification: null,
  remarksPFL: null,
  feedbackbyTransporterOwner: null,
  dcNumber: null,
  clientGRNNo: null,
  paymentTerms: null,
  netInwardQty: 0,
  rejection: 0,
  shrinkageDump: 0
}, sh = {
  productName: null,
  count: null,
  size: null,
  uom: null,
  quantity: null,
  unitPrice: null,
  amount: null,
  grossWeight: null,
  packingMaterialWeight: null,
  netWeight: null
}, np = {
  companyName: null,
  location: null,
  dcNo: null,
  saleDate: null,
  buyerName: null,
  buyerMobNo: null,
  reasonForSale: null,
  approvedBy: null,
  soldBy: null,
  secondSaleProducts: [sh],
  totalNetWeight: null,
  totalAmt: null,
  totalAmtInWords: null,
  paidAmount: null,
  paymentMode: null,
  pendingAmt: null,
  remarks: null,
  comments: null,
  submittedBy: null,
  mobileNo: null
}, oh = {
  sku: null,
  uom: null,
  qty: 0,
  totalWeightinKg: 0
}, ip = {
  companyName: null,
  location: null,
  stockDate: null,
  eodProducts: [oh],
  submission: null,
  comments: null
}, ah = {
  qualityParameterId: "",
  qualityParameterType: null,
  qualityParameterName: "",
  quantity: null,
  percentage: 0
}, sp = {
  dcNo: null,
  dcDate: null,
  arrivedQty: null,
  samplingQty: null,
  purchaseBy: null,
  packBy: null,
  receivedBy: null,
  qcCheckBy: null,
  verifiedBy: null,
  totalQty: 0,
  totalpercent: 0,
  supplierName: null,
  arrivalDate: null,
  supplierLocation: null,
  remark: null,
  product: null,
  parameters: [ah]
}, uh = {
  productName: null,
  count: null,
  size: null,
  origin: null,
  variety: null,
  saleUoM: null,
  returnedUOM: null,
  quantity: 0,
  unitPrice: 0,
  amount: 0,
  grossWeight: 0,
  packingMaterialWeight: 0,
  netWeight: 0
}, op = {
  proformaInvNo: null,
  deliveryChallanNo: null,
  companyName: null,
  date: null,
  returnedProducts: [uh],
  remark: null
}, ap = se().shape({
  companyName: f().required("Company name is required."),
  location: f().required("Location is required"),
  date: Qt().required("Date is required"),
  labourDetails: kt(
    se({
      labourName: f().required("Labour name is required"),
      contactNo: f().required("Contact No is required"),
      inTime: f().required("In time is required")
      // outTime: yup.string().required("Out time is required."),
    })
  )
}), up = se().shape({
  representativeName: f().required("Prime representative name is required."),
  siteName: f().required("Site name is required"),
  laborType: f().required("Type of labor is required."),
  presentAddress: Qe,
  permanentAddress: Qe
}), cp = se().shape({
  companyName: f().required("Company name is required."),
  location: f().required("Location is required"),
  date: f().required("Date is required"),
  batchNo: f().nullable(),
  grn: f().nullable(),
  dumpProducts: kt(
    se({
      productName: f().required("Product name is required"),
      uom: f().required("UOM No is required"),
      quantity: Y().required("Quantity is required").min(0, "Quantity cannot be negative."),
      unitPrice: Y().required("Unit price is required.").min(0, "Unit price cannot be negative")
    })
  ),
  remark: f().nullable()
}), lp = se().shape({
  companyName: f().required("Company name is required."),
  dcNumber: f().required("Please select challan number."),
  date: f().nullable(),
  vehicleNo: f().required("Vehicle number is required."),
  vehicleType: f().required("Vehicle type is required."),
  driverName: f().required("Full name of driver is required.").matches(I.IS_STRING, "Name should only contain alphabets."),
  driverMobNo: f().required("Driver's mobile number is required.").matches(I.IS_NUMBER, "Please enter valid mobile number."),
  paymentDiscussed: Y().required("Please enter payment amount discussed.").min(0, "Amount cannot be negative."),
  transportationBillAmt: Y().required("Please enter transportation bill amount.").min(0, "Amount cannot be negative."),
  advancePaid: Y().nullable().min(0, "Amount cannot be negative."),
  clientName: f().required("Client name is required."),
  clientGRNNo: f().nullable(),
  clientAddress: Qe,
  receivingPerson: f().required("Receiving person name is required.").matches(I.IS_STRING, "Name should only contain alphabets."),
  outTime: f().required("Out time is required."),
  reachingTime: f().required("Reaching time is required."),
  accDeptVerification: f().required("Please select one option."),
  remarksPFL: f().nullable(),
  feedbackbyTransporterOwner: f().nullable(),
  paymentTerms: f().nullable(),
  netInwardQty: Y().nullable().min(0, "Quantity cannot be negative."),
  rejection: Y().nullable().min(0, "Quantity cannot be negative."),
  shrinkageDump: Y().nullable().min(0, "Quantity cannot be negative.")
}), fp = se().shape({
  companyName: f().required("Company name is required."),
  location: f().required("Location is required."),
  stockDate: Qt().required("Date of stock is required."),
  eodProducts: kt(
    se({
      sku: f().required("SKU is required."),
      uom: f().required("UoM is required."),
      qty: Y().required("Quantity is required.").min(0, "Quantity cannot be negative."),
      totalWeightinKg: Y().required("Total weight is required.").min(0, "Weight cannot be negative.")
    })
  ),
  submission: f().required("Submission type is required."),
  comments: f().nullable()
}), dp = se().shape({
  inwardType: f().required("Inward type is required"),
  deliveryChallanNo: f().nullable(),
  grnNo: f().nullable(),
  companyName: f().required("Company name is required."),
  batchNo: f().nullable(),
  location: f().required("Location is required."),
  date: f().required("Date is required."),
  source: f().oneOf(["vendor", "farmer"], "Inward type must be either vendor or farmer").required("Source is required"),
  selectedParty: f().required("Please select one option."),
  inwardProducts: kt(
    se({
      productName: f().required("Product name is required"),
      uom: f().required("UOM No is required"),
      quantity: Y().required("Quantity is required").min(0, "Quantity cannot be negative."),
      unitPrice: Y().required("Unit price is required").min(0, "Price cannot be negative."),
      weight: Y().nullable().min(0, "Weight cannot be negative"),
      packingMaterialWeight: Y().nullable().min(0, "Weight cannot be negative"),
      grossWeight: Y().required("Gross weight is required.").min(0, "Weight cannot be negative")
    })
  ),
  inwardBy: f().required("Name of person is required."),
  purchasedBy: f().required("Name of person is required."),
  purchasedQty: Y().required("Purchased quantity is required.").min(0, "Purchased quantity cannot be negative."),
  inwardQtyInKg: Y().required("Inward quantity is required.").min(0, "Inward quantity cannot be negative."),
  inwardCost: Y().required("Inward cost is required.").min(0, "Inward cost cannot be negative."),
  remarks: f().nullable()
  // totalWeightInKg: 0,
}), hp = se().shape({
  dcNo: f().nullable(),
  dcDate: f().nullable(),
  arrivedQty: Y().required("Arrived quantity is required.").min(0, "Quantity cannot be negative"),
  samplingQty: Y().required("Sampling quantity is required.").min(0, "Quantity cannot be negative"),
  purchaseBy: f().required("Name required."),
  receivedBy: f().required("Name required."),
  qcCheckBy: f().required("Name required."),
  verifiedBy: f().required("Name required."),
  totalQty: Y().nullable(),
  totalpercent: Y().nullable(),
  supplierName: f().required("Supplier name is required."),
  arrivalDate: f().required("Arrival date is required."),
  supplierLocation: f().required("Supplier location is required."),
  remark: f().nullable(),
  product: f().required("Product name is required."),
  parameters: kt(
    se({
      quantity: Y().required("Quantity is required").min(0, "Quantity cannot be negative.")
    })
  )
}), pp = se().shape({
  deliveryChallanNo: f().required("Delivery challan number is required."),
  date: f().required("Date is required."),
  returnedProducts: kt(
    se({
      productName: f().required("Product name is required"),
      quantity: Y().required("Quantity is required").min(0, "Quantity cannot be negative."),
      unitPrice: Y().required("Unit price is required.").min(0, "Unit price cannot be negative"),
      packingMaterialWeight: Y().nullable().min(0, "Weight cannot be negative"),
      grossWeight: Y().required("Gross weight is required.").min(0, "Weight cannot be negative")
    })
  )
}), $ = {
  //Inward Register
  GET_ALL_INWARD_REGISTERS: (t) => {
    if (t) {
      let e = `/inwardRegister/?page=${t.page}&limit=${t.limit}`;
      return t.sort && t.sort.length > 0 && (e = e + `&sort=${t.sort}`), e;
    } else
      return "/inwardRegister/";
  },
  GET_INWARD_REGISTER_FOR_VIEW_BY_ID: (t) => `/inwardRegister/view/${t}`,
  GET_INWARD_REGISTER_FOR_UPDATE_BY_ID: (t) => `/inwardRegister/update/${t}`,
  UPDATE_INWARD_REGISTER: (t) => `/inwardRegister/${t}`,
  DELETE_INWARD_REGISTER: (t) => `/inwardRegister/${t}`,
  CREATE_INWARD_REGISTER: "/inwardRegister",
  //Arrival Quality Report
  GET_ALL_AQR: (t) => {
    if (t) {
      let e = `/aqr/?page=${t.page}&limit=${t.limit}`;
      return t.sort && t.sort.length > 0 && (e = e + `&sort=${t.sort}`), e;
    } else
      return "/aqr/";
  },
  GET_AQR_FOR_VIEW_BY_ID: (t) => `/aqr/view/${t}`,
  GET_AQR_FOR_UPDATE_BY_ID: (t) => `/aqr/update/${t}`,
  UPDATE_AQR: (t) => `/aqr/${t}`,
  DELETE_AQR: (t) => `/aqr/${t}`,
  CREATE_AQR: "/aqr/",
  //Dump Register
  GET_ALL_DUMP_REGISTERS: (t) => {
    if (t) {
      let e = `/dumpRegister/?page=${t.page}&limit=${t.limit}`;
      return t.sort && t.sort.length > 0 && (e = e + `&sort=${t.sort}`), e;
    } else
      return "/dumpRegister/";
  },
  GET_DUMP_REGISTER_FOR_VIEW_BY_ID: (t) => `/dumpRegister/view/${t}`,
  GET_DUMP_REGISTER_FOR_UPDATE_BY_ID: (t) => `/dumpRegister/update/${t}`,
  UPDATE_DUMP_REGISTER: (t) => `/dumpRegister/${t}`,
  DELETE_DUMP_REGISTER: (t) => `/dumpRegister/${t}`,
  CREATE_DUMP_REGISTER: "/dumpRegister/",
  //Labor Registration
  GET_ALL_REGISTERED_LABORS: (t) => {
    if (t) {
      let e = `/labors/?page=${t.page}&limit=${t.limit}`;
      return t.sort && t.sort.length > 0 && (e = e + `&sort=${t.sort}`), e;
    } else
      return "/labors/";
  },
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
  GET_ALL_VEHICLE_DISPATCH_REGISTERS: (t) => {
    if (t) {
      let e = `/vehicleDispatches/?page=${t.page}&limit=${t.limit}`;
      return t.sort && t.sort.length > 0 && (e = e + `&sort=${t.sort}`), e;
    } else
      return "/vehicleDispatches/";
  },
  GET_VEHICLE_DISPATCH_REGISTER_FOR_VIEW_BY_ID: (t) => `/vehicleDispatches/view/${t}`,
  GET_VEHICLE_DISPATCH_REGISTER_FOR_UPDATE_BY_ID: (t) => `/vehicleDispatches/${t}`,
  UPDATE_VEHICLE_DISPATCH_REGISTER: (t) => `/vehicleDispatches/${t}`,
  DELETE_VEHICLE_DISPATCH_REGISTER: (t) => `/vehicleDispatches/${t}`,
  CREATE_VEHICLE_DISPATCH_REGISTER: "/vehicleDispatches/",
  //Second Sale Register
  GET_ALL_SECOND_SALES: (t) => {
    if (t) {
      let e = `/secondSales/?page=${t.page}&limit=${t.limit}`;
      return t.sort && t.sort.length > 0 && (e = e + `&sort=${t.sort}`), e;
    } else
      return "/secondSales/";
  },
  GET_SECOND_SALE_FOR_VIEW_BY_ID: (t) => `/secondSales/${t}/view`,
  GET_SECOND_SALE_FOR_UPDATE_BY_ID: (t) => `/secondSales/${t}/update`,
  UPDATE_SECOND_SALE: (t) => `/secondSales/${t}`,
  DELETE_SECOND_SALE: (t) => `/secondSales/${t}`,
  CREATE_SECOND_SALE: "/secondSales/",
  //EOD Report
  GET_ALL_EOD_REPORT: (t) => {
    if (t) {
      let e = `/eodStock/?page=${t.page}&limit=${t.limit}`;
      return t.sort && t.sort.length > 0 && (e = e + `&sort=${t.sort}`), e;
    } else
      return "/eodStock/";
  },
  GET_EOD_REPORT_FOR_VIEW_BY_ID: (t) => `/eodStock/view/${t}`,
  GET_EOD_REPORT_FOR_UPDATE_BY_ID: (t) => `/eodStock/${t}`,
  UPDATE_EOD_REPORT: (t) => `/eodStock/${t}`,
  DELETE_EOD_REPORT: (t) => `/eodStock/${t}`,
  CREATE_EOD_REPORT: "/eodStock/",
  GET_ALL_PROF_INV: "/invoice/getAll",
  CREATE_PROF_INV: "/invoice/generate/profarma",
  GET_ALL_FINAL_INV: "/invoice/getfinal/all",
  CREATE_FINAL_INV: "/invoice/generate/final",
  //Returned By Customer
  GET_ALL_RBC: (t) => {
    if (t) {
      let e = `/returns/?page=${t.page}&limit=${t.limit}`;
      return t.sort && t.sort.length > 0 && (e = e + `&sort=${t.sort}`), e;
    } else
      return "/returns/";
  },
  GET_RBC_BY_ID: (t) => `/returns/${t}`,
  UPDATE_RBC: (t) => `/returns/${t}`,
  DELETE_RBC: (t) => `/returns/${t}`,
  CREATE_RBC: "/returns/"
};
class wr extends ye {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createInwardRegister(e) {
    const r = $.CREATE_INWARD_REGISTER;
    return this.post(r, e);
  }
  getAllInwardRegisters(e) {
    const r = $.GET_ALL_INWARD_REGISTERS(e);
    return this.get(r);
  }
  getInwardRegisterForViewById(e) {
    const r = $.GET_INWARD_REGISTER_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  getInwardRegisterForUpdateById(e) {
    const r = $.GET_INWARD_REGISTER_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  updateInwardRegister(e, r) {
    const n = $.UPDATE_INWARD_REGISTER(e);
    return this.patch(n, r);
  }
  deleteInwardRegisterById(e) {
    const r = $.DELETE_INWARD_REGISTER(e);
    return this.delete(r);
  }
}
class Tr extends ye {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createAQR(e) {
    const r = $.CREATE_AQR;
    return this.post(r, e);
  }
  getAllAQRs(e) {
    const r = $.GET_ALL_AQR(e);
    return this.get(r);
  }
  getAQRForUpdateById(e) {
    const r = $.GET_AQR_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  getAQRForViewById(e) {
    const r = $.GET_AQR_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  updateAQR(e, r) {
    const n = $.UPDATE_AQR(e);
    return this.patch(n, r);
  }
  deleteAQRById(e) {
    const r = $.DELETE_AQR(e);
    return this.delete(r);
  }
}
class Ar extends ye {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDumpRegister(e) {
    const r = $.CREATE_DUMP_REGISTER;
    return this.post(r, e);
  }
  getAllDumpRegisters(e) {
    const r = $.GET_ALL_DUMP_REGISTERS(e);
    return this.get(r);
  }
  getDumpRegisterForViewById(e) {
    const r = $.GET_DUMP_REGISTER_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  getDumpRegisterForUpdateById(e) {
    const r = $.GET_DUMP_REGISTER_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  updateDumpRegister(e, r) {
    const n = $.UPDATE_DUMP_REGISTER(e);
    return this.patch(n, r);
  }
  deleteDumpRegisterById(e) {
    const r = $.DELETE_DUMP_REGISTER(e);
    return this.delete(r);
  }
}
class Or extends ye {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createSecondSaleRegister(e) {
    const r = $.CREATE_SECOND_SALE;
    return this.post(r, e);
  }
  getAllSecondSaleRegisters(e) {
    const r = $.GET_ALL_SECOND_SALES(e);
    return this.get(r);
  }
  getSecondSaleRegisterForViewById(e) {
    const r = $.GET_SECOND_SALE_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  getSecondSaleRegisterForUpdateById(e) {
    const r = $.GET_SECOND_SALE_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  updateSecondSaleRegister(e, r) {
    const n = $.UPDATE_SECOND_SALE(e);
    return this.patch(n, r);
  }
  deleteSecondSaleRegisterById(e) {
    const r = $.DELETE_SECOND_SALE(e);
    return this.delete(r);
  }
}
class Cr extends ye {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVehicleDispatchRegister(e) {
    const r = $.CREATE_VEHICLE_DISPATCH_REGISTER;
    return this.post(r, e);
  }
  getAllVehicleDispatchRegisters(e) {
    const r = $.GET_ALL_VEHICLE_DISPATCH_REGISTERS(e);
    return this.get(r);
  }
  getVehicleDispatchRegisterForViewById(e) {
    const r = $.GET_VEHICLE_DISPATCH_REGISTER_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  getVehicleDispatchRegisterForUpdateById(e) {
    const r = $.GET_VEHICLE_DISPATCH_REGISTER_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  updateVehicleDispatchRegister(e, r) {
    const n = $.UPDATE_VEHICLE_DISPATCH_REGISTER(e);
    return this.patch(n, r);
  }
  deleteVehicleDispatchRegisterById(e) {
    const r = $.DELETE_VEHICLE_DISPATCH_REGISTER(e);
    return this.delete(r);
  }
}
class Ir extends ye {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createEODReport(e) {
    const r = $.CREATE_EOD_REPORT;
    return this.post(r, e);
  }
  getAllEODReports(e) {
    const r = $.GET_ALL_EOD_REPORT(e);
    return this.get(r);
  }
  getEODReportForViewById(e) {
    const r = $.GET_EOD_REPORT_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  getEODReportForUpdateById(e) {
    const r = $.GET_EOD_REPORT_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  updateEODReport(e, r) {
    const n = $.UPDATE_EOD_REPORT(e);
    return this.patch(n, r);
  }
  deleteEODReportById(e) {
    const r = $.DELETE_EOD_REPORT(e);
    return this.delete(r);
  }
}
class Jr extends ye {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborRegistration(e) {
    const r = $.CREATE_LABOR_REGISTRATION;
    return this.post(r, e);
  }
  getAllRegistreredLabors(e) {
    const r = $.GET_ALL_REGISTERED_LABORS(e);
    return this.get(r);
  }
  getRegistreredLaborById(e) {
    const r = `${$.GET_REGISTERED_LABOR_BY_ID}/${e}`;
    return this.get(r);
  }
  updateRegistreredLabor(e, r) {
    const n = `${$.UPDATE_REGISTERED_LABOR}/${e}`;
    return this.patch(n, r);
  }
  deleteRegistreredLaborById(e) {
    const r = `${$.DELETE_REGISTERED_LABOR}/${e}`;
    return this.delete(r);
  }
}
class pu extends ye {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createFinalInvoice(e) {
    const r = `${$.CREATE_FINAL_INV}/${e}`;
    return this.post(r);
  }
  getAllFinalInvoices() {
    const e = $.GET_ALL_FINAL_INV;
    return this.get(e);
  }
  // getInwardRegisterById(id: string): Promise<ApiBaseState<GetInwardRegister>> {
  //     const url = `${inventoryApiUrl.GET_INWARD_REGISTER_BY_ID}/${id}`;
  //     return this.get(url);
  // }
  // updateInwardRegister(id: string, data: GetInwardRegister): Promise<ResultModel> {
  //     const url = `${inventoryApiUrl.UPDATE_INWARD_REGISTER}/${id}`;
  //     return this.patch(url, data);
  // }
  // deleteInwardRegisterById(id: string): Promise<ResultModel> {
  //     const url = `${inventoryApiUrl.DELETE_INWARD_REGISTER}/${id}`;
  //     return this.delete(url);
  // }
}
class Xr extends ye {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createReturnedByCustomer(e) {
    const r = $.CREATE_RBC;
    return this.post(r, e);
  }
  getAllReturnedByCustomers(e) {
    const r = $.GET_ALL_RBC(e);
    return this.get(r);
  }
  getReturnedByCustomerById(e) {
    const r = $.GET_RBC_BY_ID(e);
    return this.get(r);
  }
  updateReturnedByCustomer(e, r) {
    const n = $.UPDATE_RBC(e);
    return this.patch(n, r);
  }
  deleteReturnedByCustomerById(e) {
    const r = $.DELETE_RBC(e);
    return this.delete(r);
  }
}
function mp() {
  return ge({
    mutationKey: ["create-inward-register"],
    mutationFn: (t) => wr.getInstance().createInwardRegister(t)
  });
}
function yp(t) {
  return ge({
    mutationKey: ["update-inward-register"],
    mutationFn: (e) => wr.getInstance().updateInwardRegister(t, e)
  });
}
function gp(t) {
  return ge({
    mutationKey: ["delete-inward-register-by-id"],
    mutationFn: () => wr.getInstance().deleteInwardRegisterById(t)
  });
}
function bp(t) {
  return Se({
    queryKey: ["get-all-inward-registers", t],
    queryFn: () => wr.getInstance().getAllInwardRegisters(t)
  });
}
function _p(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-inward-register-for-view-by-id", e],
    queryFn: () => wr.getInstance().getInwardRegisterForViewById(t),
    enabled: !!t
  });
}
function Ep(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-inward-register-for-update-by-id", e],
    queryFn: () => wr.getInstance().getInwardRegisterForUpdateById(t),
    enabled: !!t
  });
}
function vp() {
  return ge({
    mutationKey: ["create-dump-register"],
    mutationFn: (t) => Ar.getInstance().createDumpRegister(t)
  });
}
function Rp(t) {
  return ge({
    mutationKey: ["update-dump-register"],
    mutationFn: (e) => Ar.getInstance().updateDumpRegister(t, e)
  });
}
function Sp(t) {
  return ge({
    mutationKey: ["delete-dump-register-by-id"],
    mutationFn: () => Ar.getInstance().deleteDumpRegisterById(t)
  });
}
function wp(t) {
  return Se({
    queryKey: ["get-all-dump-registers", t],
    queryFn: () => Ar.getInstance().getAllDumpRegisters(t)
  });
}
function Tp(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-dump-register-for-view-by-id", e],
    queryFn: () => Ar.getInstance().getDumpRegisterForViewById(t),
    enabled: e
  });
}
function Ap(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-dump-register-for-update-by-id", e],
    queryFn: () => Ar.getInstance().getDumpRegisterForUpdateById(t),
    enabled: e
  });
}
function Op() {
  return ge({
    mutationKey: ["create-second-sale-register"],
    mutationFn: (t) => Or.getInstance().createSecondSaleRegister(t)
  });
}
function Cp(t) {
  return ge({
    mutationKey: ["update-second-sale-register"],
    mutationFn: (e) => Or.getInstance().updateSecondSaleRegister(t, e)
  });
}
function Ip(t) {
  return ge({
    mutationKey: ["delete-second-sale-register-by-id"],
    mutationFn: () => Or.getInstance().deleteSecondSaleRegisterById(t)
  });
}
function Np(t) {
  return Se({
    queryKey: ["get-all-second-sale-registers", t],
    queryFn: () => Or.getInstance().getAllSecondSaleRegisters(t)
  });
}
function Dp(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-second-sale-register-for-view", e],
    queryFn: () => Or.getInstance().getSecondSaleRegisterForViewById(t),
    enabled: e
  });
}
function Pp(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-second-sale-register-for-update", e],
    queryFn: () => Or.getInstance().getSecondSaleRegisterForUpdateById(t),
    enabled: e
  });
}
function kp() {
  return ge({
    mutationKey: ["create-vehicle-dispatch-register"],
    mutationFn: (t) => Cr.getInstance().createVehicleDispatchRegister(t)
  });
}
function xp(t) {
  return ge({
    mutationKey: ["update-vehicle-dispatch-register"],
    mutationFn: (e) => Cr.getInstance().updateVehicleDispatchRegister(t, e)
  });
}
function Fp(t) {
  return ge({
    mutationKey: ["delete-vehicle-dispatch-register-by-id"],
    mutationFn: () => Cr.getInstance().deleteVehicleDispatchRegisterById(t)
  });
}
function qp(t) {
  return Se({
    queryKey: ["get-all-vehicle-dispatch-registers", t],
    queryFn: () => Cr.getInstance().getAllVehicleDispatchRegisters(t)
  });
}
function Lp(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-vehicle-dispatch-register-for-view", e],
    queryFn: () => Cr.getInstance().getVehicleDispatchRegisterForViewById(t),
    enabled: e
  });
}
function Bp(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-vehicle-dispatch-register-for-update", e],
    queryFn: () => Cr.getInstance().getVehicleDispatchRegisterForUpdateById(t),
    enabled: e
  });
}
function $p() {
  return ge({
    mutationKey: ["create-aqr"],
    mutationFn: (t) => Tr.getInstance().createAQR(t)
  });
}
function Up(t) {
  return ge({
    mutationKey: ["update-aqr"],
    mutationFn: (e) => Tr.getInstance().updateAQR(t, e)
  });
}
function Mp(t) {
  return ge({
    mutationKey: ["delete-aqr-by-id"],
    mutationFn: () => Tr.getInstance().deleteAQRById(t)
  });
}
function jp(t) {
  return Se({
    queryKey: ["get-all-aqrs", t],
    queryFn: () => Tr.getInstance().getAllAQRs(t)
  });
}
function Vp(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-aqr-for-update-by-id", e],
    queryFn: () => Tr.getInstance().getAQRForUpdateById(t),
    enabled: e
  });
}
function Gp(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-aqr-for-view-by-id", e],
    queryFn: () => Tr.getInstance().getAQRForViewById(t),
    enabled: e
  });
}
function zp() {
  return ge({
    mutationKey: ["create-eod-report"],
    mutationFn: (t) => Ir.getInstance().createEODReport(t)
  });
}
function Wp(t) {
  return ge({
    mutationKey: ["update-eod-report"],
    mutationFn: (e) => Ir.getInstance().updateEODReport(t, e)
  });
}
function Hp(t) {
  return ge({
    mutationKey: ["delete-eod-report-by-id"],
    mutationFn: () => Ir.getInstance().deleteEODReportById(t)
  });
}
function Kp(t) {
  return Se({
    queryKey: ["get-all-eod-reports", t],
    queryFn: () => Ir.getInstance().getAllEODReports(t)
  });
}
function Yp(t) {
  return Se({
    queryKey: ["get-eod-report-for-view"],
    queryFn: () => Ir.getInstance().getEODReportForViewById(t),
    enabled: !!t
  });
}
function Qp(t) {
  return Se({
    queryKey: ["get-eod-report-by-id"],
    queryFn: () => Ir.getInstance().getEODReportForUpdateById(t),
    enabled: !!t
  });
}
function Jp() {
  return ge({
    mutationKey: ["create-labor-register"],
    mutationFn: (t) => Jr.getInstance().createLaborRegistration(t)
  });
}
function Xp(t) {
  return ge({
    mutationKey: ["update-labor-register"],
    mutationFn: (e) => Jr.getInstance().updateRegistreredLabor(t, e)
  });
}
function Zp(t) {
  return ge({
    mutationKey: ["delete-labor-register-by-id"],
    mutationFn: () => Jr.getInstance().deleteRegistreredLaborById(t)
  });
}
function em(t) {
  return Se({
    queryKey: ["get-all-labor-registers", t],
    queryFn: () => Jr.getInstance().getAllRegistreredLabors(t)
  });
}
function tm(t) {
  const e = t.length > 0;
  return Se({
    queryKey: ["get-labor-register-by-id", t],
    queryFn: () => Jr.getInstance().getRegistreredLaborById(t),
    enabled: e
  });
}
function rm(t) {
  return ge({
    mutationKey: ["create-final-invoice"],
    mutationFn: () => pu.getInstance().createFinalInvoice(t)
  });
}
function nm() {
  return Se({
    queryKey: ["get-all-final-invoice"],
    queryFn: () => pu.getInstance().getAllFinalInvoices()
  });
}
function im() {
  return ge({
    mutationKey: ["create-returned-by-customer"],
    mutationFn: (t) => Xr.getInstance().createReturnedByCustomer(t)
  });
}
function sm(t) {
  return ge({
    mutationKey: ["update-returned-by-customer"],
    mutationFn: (e) => Xr.getInstance().updateReturnedByCustomer(t, e)
  });
}
function om(t) {
  return ge({
    mutationKey: ["delete-returned-by-customer-by-id"],
    mutationFn: () => Xr.getInstance().deleteReturnedByCustomerById(t)
  });
}
function am(t) {
  return Se({
    queryKey: ["get-all-returned-by-customers", t],
    queryFn: () => Xr.getInstance().getAllReturnedByCustomers(t)
  });
}
function um(t) {
  const e = t.length > 1;
  return Se({
    queryKey: ["get-returned-by-customer-by-id", t],
    queryFn: () => Xr.getInstance().getReturnedByCustomerById(t),
    enabled: e
  });
}
function ch(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null;
}
function lh(t) {
  return ch(t) && "type" in t && typeof t.type == "string";
}
var mu = Symbol.for("immer-nothing"), Zo = Symbol.for("immer-draftable"), Je = Symbol.for("immer-state"), fh = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(t) {
    return `The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`;
  },
  function(t) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`;
  },
  "This object has been frozen and should not be mutated",
  function(t) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(t) {
    return `'current' expects a draft, got: ${t}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(t) {
    return `'original' expects a draft, got: ${t}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function ze(t, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const r = fh[t], n = typeof r == "function" ? r.apply(null, e) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Er = Object.getPrototypeOf;
function Xt(t) {
  return !!t && !!t[Je];
}
function gt(t) {
  var e;
  return t ? yu(t) || Array.isArray(t) || !!t[Zo] || !!((e = t.constructor) != null && e[Zo]) || ri(t) || ni(t) : !1;
}
var dh = Object.prototype.constructor.toString();
function yu(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = Er(t);
  if (e === null)
    return !0;
  const r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === dh;
}
function Un(t, e) {
  ti(t) === 0 ? Reflect.ownKeys(t).forEach((r) => {
    e(r, t[r], t);
  }) : t.forEach((r, n) => e(n, r, t));
}
function ti(t) {
  const e = t[Je];
  return e ? e.type_ : Array.isArray(t) ? 1 : ri(t) ? 2 : ni(t) ? 3 : 0;
}
function bs(t, e) {
  return ti(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function gu(t, e, r) {
  const n = ti(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function hh(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function ri(t) {
  return t instanceof Map;
}
function ni(t) {
  return t instanceof Set;
}
function jt(t) {
  return t.copy_ || t.base_;
}
function _s(t, e) {
  if (ri(t))
    return new Map(t);
  if (ni(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const r = yu(t);
  if (e === !0 || e === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(t);
    delete n[Je];
    let i = Reflect.ownKeys(n);
    for (let s = 0; s < i.length; s++) {
      const o = i[s], u = n[o];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: t[o]
      });
    }
    return Object.create(Er(t), n);
  } else {
    const n = Er(t);
    if (n !== null && r)
      return { ...t };
    const i = Object.create(n);
    return Object.assign(i, t);
  }
}
function Us(t, e = !1) {
  return ii(t) || Xt(t) || !gt(t) || (ti(t) > 1 && (t.set = t.add = t.clear = t.delete = ph), Object.freeze(t), e && Object.entries(t).forEach(([r, n]) => Us(n, !0))), t;
}
function ph() {
  ze(2);
}
function ii(t) {
  return Object.isFrozen(t);
}
var mh = {};
function Zt(t) {
  const e = mh[t];
  return e || ze(0, t), e;
}
var Gr;
function bu() {
  return Gr;
}
function yh(t, e) {
  return {
    drafts_: [],
    parent_: t,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function ea(t, e) {
  e && (Zt("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = e);
}
function Es(t) {
  vs(t), t.drafts_.forEach(gh), t.drafts_ = null;
}
function vs(t) {
  t === Gr && (Gr = t.parent_);
}
function ta(t) {
  return Gr = yh(Gr, t);
}
function gh(t) {
  const e = t[Je];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function ra(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const r = e.drafts_[0];
  return t !== void 0 && t !== r ? (r[Je].modified_ && (Es(e), ze(4)), gt(t) && (t = Mn(e, t), e.parent_ || jn(e, t)), e.patches_ && Zt("Patches").generateReplacementPatches_(
    r[Je].base_,
    t,
    e.patches_,
    e.inversePatches_
  )) : t = Mn(e, r, []), Es(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), t !== mu ? t : void 0;
}
function Mn(t, e, r) {
  if (ii(e))
    return e;
  const n = e[Je];
  if (!n)
    return Un(
      e,
      (i, s) => na(t, n, e, i, s, r)
    ), e;
  if (n.scope_ !== t)
    return e;
  if (!n.modified_)
    return jn(t, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let s = i, o = !1;
    n.type_ === 3 && (s = new Set(i), i.clear(), o = !0), Un(
      s,
      (u, c) => na(t, n, i, u, c, r, o)
    ), jn(t, i, !1), r && t.patches_ && Zt("Patches").generatePatches_(
      n,
      r,
      t.patches_,
      t.inversePatches_
    );
  }
  return n.copy_;
}
function na(t, e, r, n, i, s, o) {
  if (process.env.NODE_ENV !== "production" && i === r && ze(5), Xt(i)) {
    const u = s && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !bs(e.assigned_, n) ? s.concat(n) : void 0, c = Mn(t, i, u);
    if (gu(r, n, c), Xt(c))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else o && r.add(i);
  if (gt(i) && !ii(i)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    Mn(t, i), (!e || !e.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && jn(t, i);
  }
}
function jn(t, e, r = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && Us(e, r);
}
function bh(t, e) {
  const r = Array.isArray(t), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : bu(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: t,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, s = Ms;
  r && (i = [n], s = zr);
  const { revoke: o, proxy: u } = Proxy.revocable(i, s);
  return n.draft_ = u, n.revoke_ = o, u;
}
var Ms = {
  get(t, e) {
    if (e === Je)
      return t;
    const r = jt(t);
    if (!bs(r, e))
      return _h(t, r, e);
    const n = r[e];
    return t.finalized_ || !gt(n) ? n : n === Bi(t.base_, e) ? ($i(t), t.copy_[e] = Ss(n, t)) : n;
  },
  has(t, e) {
    return e in jt(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(jt(t));
  },
  set(t, e, r) {
    const n = _u(jt(t), e);
    if (n != null && n.set)
      return n.set.call(t.draft_, r), !0;
    if (!t.modified_) {
      const i = Bi(jt(t), e), s = i == null ? void 0 : i[Je];
      if (s && s.base_ === r)
        return t.copy_[e] = r, t.assigned_[e] = !1, !0;
      if (hh(r, i) && (r !== void 0 || bs(t.base_, e)))
        return !0;
      $i(t), Rs(t);
    }
    return t.copy_[e] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || e in t.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(t.copy_[e]) || (t.copy_[e] = r, t.assigned_[e] = !0), !0;
  },
  deleteProperty(t, e) {
    return Bi(t.base_, e) !== void 0 || e in t.base_ ? (t.assigned_[e] = !1, $i(t), Rs(t)) : delete t.assigned_[e], t.copy_ && delete t.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, e) {
    const r = jt(t), n = Reflect.getOwnPropertyDescriptor(r, e);
    return n && {
      writable: !0,
      configurable: t.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: r[e]
    };
  },
  defineProperty() {
    ze(11);
  },
  getPrototypeOf(t) {
    return Er(t.base_);
  },
  setPrototypeOf() {
    ze(12);
  }
}, zr = {};
Un(Ms, (t, e) => {
  zr[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
zr.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && ze(13), zr.set.call(this, t, e, void 0);
};
zr.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && ze(14), Ms.set.call(this, t[0], e, r, t[0]);
};
function Bi(t, e) {
  const r = t[Je];
  return (r ? jt(r) : t)[e];
}
function _h(t, e, r) {
  var i;
  const n = _u(e, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(t.draft_)
  ) : void 0;
}
function _u(t, e) {
  if (!(e in t))
    return;
  let r = Er(t);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, e);
    if (n)
      return n;
    r = Er(r);
  }
}
function Rs(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Rs(t.parent_));
}
function $i(t) {
  t.copy_ || (t.copy_ = _s(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var Eh = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, r, n) => {
      if (typeof e == "function" && typeof r != "function") {
        const s = r;
        r = e;
        const o = this;
        return function(c = s, ...p) {
          return o.produce(c, (h) => r.call(this, h, ...p));
        };
      }
      typeof r != "function" && ze(6), n !== void 0 && typeof n != "function" && ze(7);
      let i;
      if (gt(e)) {
        const s = ta(this), o = Ss(e, void 0);
        let u = !0;
        try {
          i = r(o), u = !1;
        } finally {
          u ? Es(s) : vs(s);
        }
        return ea(s, n), ra(i, s);
      } else if (!e || typeof e != "object") {
        if (i = r(e), i === void 0 && (i = e), i === mu && (i = void 0), this.autoFreeze_ && Us(i, !0), n) {
          const s = [], o = [];
          Zt("Patches").generateReplacementPatches_(e, i, s, o), n(s, o);
        }
        return i;
      } else
        ze(1, e);
    }, this.produceWithPatches = (e, r) => {
      if (typeof e == "function")
        return (o, ...u) => this.produceWithPatches(o, (c) => e(c, ...u));
      let n, i;
      return [this.produce(e, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    gt(t) || ze(8), Xt(t) && (t = vh(t));
    const e = ta(this), r = Ss(t, void 0);
    return r[Je].isManual_ = !0, vs(e), r;
  }
  finishDraft(t, e) {
    const r = t && t[Je];
    (!r || !r.isManual_) && ze(9);
    const { scope_: n } = r;
    return ea(n, e), ra(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, e) {
    let r;
    for (r = e.length - 1; r >= 0; r--) {
      const i = e[r];
      if (i.path.length === 0 && i.op === "replace") {
        t = i.value;
        break;
      }
    }
    r > -1 && (e = e.slice(r + 1));
    const n = Zt("Patches").applyPatches_;
    return Xt(t) ? n(t, e) : this.produce(
      t,
      (i) => n(i, e)
    );
  }
};
function Ss(t, e) {
  const r = ri(t) ? Zt("MapSet").proxyMap_(t, e) : ni(t) ? Zt("MapSet").proxySet_(t, e) : bh(t, e);
  return (e ? e.scope_ : bu()).drafts_.push(r), r;
}
function vh(t) {
  return Xt(t) || ze(10, t), Eu(t);
}
function Eu(t) {
  if (!gt(t) || ii(t))
    return t;
  const e = t[Je];
  let r;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, r = _s(t, e.scope_.immer_.useStrictShallowCopy_);
  } else
    r = _s(t, !0);
  return Un(r, (n, i) => {
    gu(r, n, Eu(i));
  }), e && (e.finalized_ = !1), r;
}
var Xe = new Eh(), vu = Xe.produce;
Xe.produceWithPatches.bind(
  Xe
);
Xe.setAutoFreeze.bind(Xe);
Xe.setUseStrictShallowCopy.bind(Xe);
Xe.applyPatches.bind(Xe);
Xe.createDraft.bind(Xe);
Xe.finishDraft.bind(Xe);
function ia(t, e) {
  function r(...n) {
    if (e) {
      let i = e(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? De(0) : "prepareAction did not return an object");
      return {
        type: t,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: t,
      payload: n[0]
    };
  }
  return r.toString = () => `${t}`, r.type = t, r.match = (n) => lh(n) && n.type === t, r;
}
function sa(t) {
  return gt(t) ? vu(t, () => {
  }) : t;
}
function oa(t, e, r) {
  if (t.has(e)) {
    let i = t.get(e);
    return r.update && (i = r.update(i, e, t), t.set(e, i)), i;
  }
  if (!r.insert) throw new Error(process.env.NODE_ENV === "production" ? De(10) : "No insert provided for key not already in map");
  const n = r.insert(e, t);
  return t.set(e, n), n;
}
function Ru(t) {
  const e = {}, r = [];
  let n;
  const i = {
    addCase(s, o) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? De(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? De(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const u = typeof s == "string" ? s : s.type;
      if (!u)
        throw new Error(process.env.NODE_ENV === "production" ? De(28) : "`builder.addCase` cannot be called with an empty action type");
      if (u in e)
        throw new Error(process.env.NODE_ENV === "production" ? De(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${u}'`);
      return e[u] = o, i;
    },
    addMatcher(s, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? De(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: s,
        reducer: o
      }), i;
    },
    addDefaultCase(s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? De(31) : "`builder.addDefaultCase` can only be called once");
      return n = s, i;
    }
  };
  return t(i), [e, r, n];
}
function Rh(t) {
  return typeof t == "function";
}
function Sh(t, e) {
  if (process.env.NODE_ENV !== "production" && typeof e == "object")
    throw new Error(process.env.NODE_ENV === "production" ? De(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = Ru(e), s;
  if (Rh(t))
    s = () => sa(t());
  else {
    const u = sa(t);
    s = () => u;
  }
  function o(u = s(), c) {
    let p = [r[c.type], ...n.filter(({
      matcher: h
    }) => h(c)).map(({
      reducer: h
    }) => h)];
    return p.filter((h) => !!h).length === 0 && (p = [i]), p.reduce((h, m) => {
      if (m)
        if (Xt(h)) {
          const C = m(h, c);
          return C === void 0 ? h : C;
        } else {
          if (gt(h))
            return vu(h, (O) => m(O, c));
          {
            const O = m(h, c);
            if (O === void 0) {
              if (h === null)
                return h;
              throw new Error(process.env.NODE_ENV === "production" ? De(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return O;
          }
        }
      return h;
    }, u);
  }
  return o.getInitialState = s, o;
}
var wh = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Th(t, e) {
  return `${t}/${e}`;
}
function Ah({
  creators: t
} = {}) {
  var r;
  const e = (r = t == null ? void 0 : t.asyncThunk) == null ? void 0 : r[wh];
  return function(i) {
    const {
      name: s,
      reducerPath: o = s
    } = i;
    if (!s)
      throw new Error(process.env.NODE_ENV === "production" ? De(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const u = (typeof i.reducers == "function" ? i.reducers(Ch()) : i.reducers) || {}, c = Object.keys(u), p = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, h = {
      addCase(P, F) {
        const x = typeof P == "string" ? P : P.type;
        if (!x)
          throw new Error(process.env.NODE_ENV === "production" ? De(12) : "`context.addCase` cannot be called with an empty action type");
        if (x in p.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? De(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + x);
        return p.sliceCaseReducersByType[x] = F, h;
      },
      addMatcher(P, F) {
        return p.sliceMatchers.push({
          matcher: P,
          reducer: F
        }), h;
      },
      exposeAction(P, F) {
        return p.actionCreators[P] = F, h;
      },
      exposeCaseReducer(P, F) {
        return p.sliceCaseReducersByName[P] = F, h;
      }
    };
    c.forEach((P) => {
      const F = u[P], x = {
        reducerName: P,
        type: Th(s, P),
        createNotation: typeof i.reducers == "function"
      };
      Nh(F) ? Ph(x, F, h, e) : Ih(x, F, h);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? De(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [P = {}, F = [], x = void 0] = typeof i.extraReducers == "function" ? Ru(i.extraReducers) : [i.extraReducers], G = {
        ...P,
        ...p.sliceCaseReducersByType
      };
      return Sh(i.initialState, (te) => {
        for (let V in G)
          te.addCase(V, G[V]);
        for (let V of p.sliceMatchers)
          te.addMatcher(V.matcher, V.reducer);
        for (let V of F)
          te.addMatcher(V.matcher, V.reducer);
        x && te.addDefaultCase(x);
      });
    }
    const O = (P) => P, C = /* @__PURE__ */ new Map();
    let S;
    function N(P, F) {
      return S || (S = m()), S(P, F);
    }
    function R() {
      return S || (S = m()), S.getInitialState();
    }
    function U(P, F = !1) {
      function x(te) {
        let V = te[P];
        if (typeof V > "u") {
          if (F)
            V = R();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? De(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return V;
      }
      function G(te = O) {
        const V = oa(C, F, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return oa(V, te, {
          insert: () => {
            const Ae = {};
            for (const [pe, re] of Object.entries(i.selectors ?? {}))
              Ae[pe] = Oh(re, te, R, F);
            return Ae;
          }
        });
      }
      return {
        reducerPath: P,
        getSelectors: G,
        get selectors() {
          return G(x);
        },
        selectSlice: x
      };
    }
    const k = {
      name: s,
      reducer: N,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: R,
      ...U(o),
      injectInto(P, {
        reducerPath: F,
        ...x
      } = {}) {
        const G = F ?? o;
        return P.inject({
          reducerPath: G,
          reducer: N
        }, x), {
          ...k,
          ...U(G, !0)
        };
      }
    };
    return k;
  };
}
function Oh(t, e, r, n) {
  function i(s, ...o) {
    let u = e(s);
    if (typeof u > "u") {
      if (n)
        u = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? De(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(u, ...o);
  }
  return i.unwrapped = t, i;
}
var rr = /* @__PURE__ */ Ah();
function Ch() {
  function t(e, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: e,
      ...r
    };
  }
  return t.withTypes = () => t, {
    reducer(e) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [e.name](...r) {
          return e(...r);
        }
      }[e.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(e, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: e,
        reducer: r
      };
    },
    asyncThunk: t
  };
}
function Ih({
  type: t,
  reducerName: e,
  createNotation: r
}, n, i) {
  let s, o;
  if ("reducer" in n) {
    if (r && !Dh(n))
      throw new Error(process.env.NODE_ENV === "production" ? De(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    s = n.reducer, o = n.prepare;
  } else
    s = n;
  i.addCase(t, s).exposeCaseReducer(e, s).exposeAction(e, o ? ia(t, o) : ia(t));
}
function Nh(t) {
  return t._reducerDefinitionType === "asyncThunk";
}
function Dh(t) {
  return t._reducerDefinitionType === "reducerWithPrepare";
}
function Ph({
  type: t,
  reducerName: e
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? De(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: s,
    fulfilled: o,
    pending: u,
    rejected: c,
    settled: p,
    options: h
  } = r, m = i(t, s, h);
  n.exposeAction(e, m), o && n.addCase(m.fulfilled, o), u && n.addCase(m.pending, u), c && n.addCase(m.rejected, c), p && n.addMatcher(m.settled, p), n.exposeCaseReducer(e, {
    fulfilled: o || Sn,
    pending: u || Sn,
    rejected: c || Sn,
    settled: p || Sn
  });
}
function Sn() {
}
function De(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
const kh = {
  inwardRegisterFormPreview: void 0
}, Su = rr({
  name: "inwardRegister",
  initialState: kh,
  reducers: {
    setInwardRegisterFormPreview: (t, e) => {
      t.inwardRegisterFormPreview = e.payload;
    }
  }
}), { setInwardRegisterFormPreview: cm } = Su.actions, lm = (t) => t.inwardRegister, xh = Su.reducer, Fh = {
  dumpRegisterFormPreview: void 0
}, wu = rr({
  name: "dumpRegister",
  initialState: Fh,
  reducers: {
    setDumpRegisterFormPreview: (t, e) => {
      t.dumpRegisterFormPreview = e.payload;
    }
  }
}), { setDumpRegisterFormPreview: fm } = wu.actions, dm = (t) => t.dumpRegister, qh = wu.reducer, Lh = {
  aqrFormPreview: void 0
}, Tu = rr({
  name: "aqr",
  initialState: Lh,
  reducers: {
    setAQRFormPreview: (t, e) => {
      t.aqrFormPreview = e.payload;
    }
  }
}), { setAQRFormPreview: hm } = Tu.actions, pm = (t) => t.aqr, Bh = Tu.reducer, $h = {
  secondSaleRegisterFormPreview: void 0
}, Au = rr({
  name: "secondSaleRegister",
  initialState: $h,
  reducers: {
    setSecondSaleRegisterFormPreview: (t, e) => {
      t.secondSaleRegisterFormPreview = e.payload;
    }
  }
}), { setSecondSaleRegisterFormPreview: mm } = Au.actions, ym = (t) => t.secondSaleRegister, Uh = Au.reducer, Mh = {
  vehicleDispatchRegisterFormPreview: void 0
}, Ou = rr({
  name: "vehicleDispatchRegister",
  initialState: Mh,
  reducers: {
    setVehicleDispatchRegisterFormPreview: (t, e) => {
      t.vehicleDispatchRegisterFormPreview = e.payload;
    }
  }
}), { setVehicleDispatchRegisterFormPreview: gm } = Ou.actions, bm = (t) => t.vehicleDispatchRegister, jh = Ou.reducer, Vh = {
  eodReportFormPreview: void 0
}, Cu = rr({
  name: "eodReport",
  initialState: Vh,
  reducers: {
    setEODReportFormPreview: (t, e) => {
      t.eodReportFormPreview = e.payload;
    }
  }
}), { setEODReportFormPreview: _m } = Cu.actions, Em = (t) => t.eodReport, Gh = Cu.reducer, zh = {
  rbcFormPreview: null
}, Iu = rr({
  name: "rbc",
  initialState: zh,
  reducers: {
    setRBCFormPreview: (t, e) => {
      t.rbcFormPreview = e.payload;
    }
  }
}), { setRBCFormPreview: vm } = Iu.actions, Rm = (t) => t.rbc, Wh = Iu.reducer, Sm = {
  inwardRegister: xh,
  dumpRegister: qh,
  aqr: Bh,
  secondSaleRegister: Uh,
  vehicleDispatchRegister: jh,
  eodReport: Gh,
  rbc: Wh
};
export {
  ah as AQRQualityParams,
  sp as AQRinitalValues,
  Ju as InwardProductInitialValue,
  Jh as InwardRegisterInitialValue,
  sh as SecondSaleProductsInitialValue,
  np as SecondSaleRegisterInitialValue,
  Bh as aqrReducer,
  pm as aqrStates,
  hp as aqrValidationSchema,
  Yh as arrayConstants,
  ih as dumpProductsInitialValue,
  tp as dumpRegisterInitialValue,
  qh as dumpRegisterReducer,
  cp as dumpRegisterSchema,
  dm as dumpRegisterStates,
  ip as eodReportInitialValue,
  oh as eodReportProductsInitialValue,
  Gh as eodReportReducer,
  Em as eodReportStates,
  fp as eodReportValidatoinSchema,
  Qh as inventoryOptions,
  Sm as inventoryReducer,
  Kh as inventoryRouteConstants,
  xh as inwardRegisterReducer,
  lm as inwardRegisterStates,
  dp as inwardRegisterValidationSchema,
  ep as laborAttendanceInitialValue,
  ap as laborAttendanceSchema,
  eh as laborBankDetailsInitialValue,
  th as laborFamilyDetailsInitialValue,
  Zh as laborRegistrationInitialValue,
  up as laborRegistrationSchema,
  rh as laborWorkExperienceInitialValue,
  nh as laborsDetailsInitialValue,
  Rm as rbcStates,
  op as returnedByCustomerInitialValues,
  Wh as returnedByCustomerReducer,
  pp as returnedByCustomerSchema,
  uh as returnedProductsInitialValues,
  Uh as secondSaleRegisterReducer,
  ym as secondSaleRegisterStates,
  hm as setAQRFormPreview,
  fm as setDumpRegisterFormPreview,
  _m as setEODReportFormPreview,
  cm as setInwardRegisterFormPreview,
  vm as setRBCFormPreview,
  mm as setSecondSaleRegisterFormPreview,
  gm as setVehicleDispatchRegisterFormPreview,
  $p as useCreateAQR,
  vp as useCreateDumpRegister,
  zp as useCreateEODReport,
  rm as useCreateFinalInvoice,
  mp as useCreateInwardRegister,
  Jp as useCreateLaborRegistration,
  im as useCreateReturnedByCustomer,
  Op as useCreateSecondSaleRegister,
  kp as useCreateVehicleDispatchRegister,
  Mp as useDeleteAQRById,
  Sp as useDeleteDumpRegisterById,
  Hp as useDeleteEODReportById,
  gp as useDeleteInwardRegisterById,
  Zp as useDeleteLaborRegistrationById,
  om as useDeleteReturnedByCustomerById,
  Ip as useDeleteSecondSaleRegisterById,
  Fp as useDeleteVehicleDispatchRegisterById,
  Vp as useGetAQRForUpdateById,
  Gp as useGetAQRForViewById,
  jp as useGetAllAQRs,
  wp as useGetAllDumpRegisters,
  Kp as useGetAllEODReports,
  nm as useGetAllFinalInvoices,
  bp as useGetAllInwardRegisters,
  em as useGetAllLaborRegistration,
  am as useGetAllReturnedByCustomers,
  Np as useGetAllSecondSaleRegisters,
  qp as useGetAllVehicleDispatchRegisters,
  Ap as useGetDumpRegisterForUpdateById,
  Tp as useGetDumpRegisterForViewById,
  Qp as useGetEODReportForUpdateById,
  Yp as useGetEODReportForViewById,
  Ep as useGetInwardRegisterForUpdateById,
  _p as useGetInwardRegisterForViewById,
  tm as useGetLaborRegistrationById,
  um as useGetReturnedByCustomerById,
  Pp as useGetSecondSaleRegisterForUpdateById,
  Dp as useGetSecondSaleRegisterForViewById,
  Bp as useGetVehicleDispatchRegisterForUpdateById,
  Lp as useGetVehicleDispatchRegisterForViewById,
  Up as useUpdateAQR,
  Rp as useUpdateDumpRegister,
  Wp as useUpdateEODReport,
  yp as useUpdateInwardRegister,
  Xp as useUpdateLaborRegistration,
  sm as useUpdateReturnedByCustomer,
  Cp as useUpdateSecondSaleRegister,
  xp as useUpdateVehicleDispatchRegister,
  rp as vehicleDispatchRegisterInitialValues,
  jh as vehicleDispatchRegisterReducer,
  lp as vehicleDispatchRegisterSchema,
  bm as vehicleDispatchRegisterStates
};
