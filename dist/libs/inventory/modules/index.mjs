var fo = (t) => {
  throw TypeError(t);
};
var Ai = (t, e, r) => e.has(t) || fo("Cannot " + r);
var E = (t, e, r) => (Ai(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ce = (t, e, r) => e.has(t) ? fo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), W = (t, e, r, n) => (Ai(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), me = (t, e, r) => (Ai(t, e, "access private method"), r);
const Gh = {
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
  GET_ALL_FINAL_INVOICES: "/inventory/final-invoices"
}, zh = {
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
}, Wh = {
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
}, Yu = {
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
}, Hh = {
  deliveryChallanNo: null,
  grnNo: null,
  companyName: null,
  batchNo: null,
  date: null,
  source: "vendor",
  selectedParty: null,
  inwardBy: null,
  inwardCost: null,
  inwardProducts: [Yu],
  inwardQtyInKg: null,
  inwardType: "purchase",
  location: null,
  purchasedBy: null,
  purchasedQty: null,
  remarks: null,
  totalWeightInKg: null
};
var jn = class {
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
function Qu() {
}
function ho(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Ju(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Sn(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function at(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function po(t) {
  return JSON.stringify(
    t,
    (e, r) => Ui(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r
  );
}
function $i(t, e) {
  if (t === e)
    return t;
  const r = mo(t) && mo(e);
  if (r || Ui(t) && Ui(e)) {
    const n = r ? t : Object.keys(t), i = n.length, s = r ? e : Object.keys(e), o = s.length, u = r ? [] : {};
    let l = 0;
    for (let p = 0; p < o; p++) {
      const h = r ? p : s[p];
      (!r && n.includes(h) || r) && t[h] === void 0 && e[h] === void 0 ? (u[h] = void 0, l++) : (u[h] = $i(t[h], e[h]), u[h] === t[h] && t[h] !== void 0 && l++);
    }
    return i === o && l === i ? t : u;
  }
  return e;
}
function xn(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function mo(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Ui(t) {
  if (!yo(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!yo(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function yo(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function go(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return $i(t, e);
      } catch (n) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        ), n;
      }
    return $i(t, e);
  }
  return e;
}
var Vt, Tt, dr, oa, Xu = (oa = class extends jn {
  constructor() {
    super();
    ce(this, Vt);
    ce(this, Tt);
    ce(this, dr);
    W(this, dr, (e) => {
      if (!jr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    E(this, Tt) || this.setEventListener(E(this, dr));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = E(this, Tt)) == null || e.call(this), W(this, Tt, void 0));
  }
  setEventListener(e) {
    var r;
    W(this, dr, e), (r = E(this, Tt)) == null || r.call(this), W(this, Tt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    E(this, Vt) !== e && (W(this, Vt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof E(this, Vt) == "boolean" ? E(this, Vt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, Vt = new WeakMap(), Tt = new WeakMap(), dr = new WeakMap(), oa), Zu = new Xu(), hr, Ot, pr, aa, el = (aa = class extends jn {
  constructor() {
    super();
    ce(this, hr, !0);
    ce(this, Ot);
    ce(this, pr);
    W(this, pr, (e) => {
      if (!jr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    E(this, Ot) || this.setEventListener(E(this, pr));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = E(this, Ot)) == null || e.call(this), W(this, Ot, void 0));
  }
  setEventListener(e) {
    var r;
    W(this, pr, e), (r = E(this, Ot)) == null || r.call(this), W(this, Ot, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    E(this, hr) !== e && (W(this, hr, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return E(this, hr);
  }
}, hr = new WeakMap(), Ot = new WeakMap(), pr = new WeakMap(), aa), tl = new el();
function bo() {
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
function rl(t) {
  return (t ?? "online") === "online" ? tl.isOnline() : !0;
}
var nl = (t) => setTimeout(t, 0);
function il() {
  let t = [], e = 0, r = (u) => {
    u();
  }, n = (u) => {
    u();
  }, i = nl;
  const s = (u) => {
    e ? t.push(u) : i(() => {
      r(u);
    });
  }, o = () => {
    const u = t;
    t = [], u.length && i(() => {
      n(() => {
        u.forEach((l) => {
          r(l);
        });
      });
    });
  };
  return {
    batch: (u) => {
      let l;
      e++;
      try {
        l = u();
      } finally {
        e--, e || o();
      }
      return l;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (u) => (...l) => {
      s(() => {
        u(...l);
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
var Vn = il();
function sl(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: rl(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function ol() {
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
var je, J, Wr, $e, Gt, mr, At, Ct, Hr, yr, gr, zt, Wt, Nt, br, oe, $r, Mi, ji, Vi, Gi, zi, Wi, Hi, ca, ua, al = (ua = class extends jn {
  constructor(e, r) {
    super();
    ce(this, oe);
    ce(this, je);
    ce(this, J);
    ce(this, Wr);
    ce(this, $e);
    ce(this, Gt);
    ce(this, mr);
    ce(this, At);
    ce(this, Ct);
    ce(this, Hr);
    ce(this, yr);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    ce(this, gr);
    ce(this, zt);
    ce(this, Wt);
    ce(this, Nt);
    ce(this, br, /* @__PURE__ */ new Set());
    this.options = r, W(this, je, e), W(this, Ct, null), W(this, At, bo()), this.options.experimental_prefetchInRender || E(this, At).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (E(this, J).addObserver(this), _o(E(this, J), this.options) ? me(this, oe, $r).call(this) : this.updateResult(), me(this, oe, Gi).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Ki(
      E(this, J),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Ki(
      E(this, J),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), me(this, oe, zi).call(this), me(this, oe, Wi).call(this), E(this, J).removeObserver(this);
  }
  setOptions(e) {
    const r = this.options, n = E(this, J);
    if (this.options = E(this, je).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof at(this.options.enabled, E(this, J)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    me(this, oe, Hi).call(this), E(this, J).setOptions(this.options), r._defaulted && !xn(this.options, r) && E(this, je).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: E(this, J),
      observer: this
    });
    const i = this.hasListeners();
    i && Eo(
      E(this, J),
      n,
      this.options,
      r
    ) && me(this, oe, $r).call(this), this.updateResult(), i && (E(this, J) !== n || at(this.options.enabled, E(this, J)) !== at(r.enabled, E(this, J)) || Sn(this.options.staleTime, E(this, J)) !== Sn(r.staleTime, E(this, J))) && me(this, oe, Mi).call(this);
    const s = me(this, oe, ji).call(this);
    i && (E(this, J) !== n || at(this.options.enabled, E(this, J)) !== at(r.enabled, E(this, J)) || s !== E(this, Nt)) && me(this, oe, Vi).call(this, s);
  }
  getOptimisticResult(e) {
    const r = E(this, je).getQueryCache().build(E(this, je), e), n = this.createResult(r, e);
    return ll(this, n) && (W(this, $e, n), W(this, mr, this.options), W(this, Gt, E(this, J).state)), n;
  }
  getCurrentResult() {
    return E(this, $e);
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
    E(this, br).add(e);
  }
  getCurrentQuery() {
    return E(this, J);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const r = E(this, je).defaultQueryOptions(e), n = E(this, je).getQueryCache().build(E(this, je), r);
    return n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    return me(this, oe, $r).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), E(this, $e)));
  }
  createResult(e, r) {
    var Te;
    const n = E(this, J), i = this.options, s = E(this, $e), o = E(this, Gt), u = E(this, mr), p = e !== n ? e.state : E(this, Wr), { state: h } = e;
    let m = { ...h }, A = !1, C;
    if (r._optimisticResults) {
      const pe = this.hasListeners(), re = !pe && _o(e, r), Re = pe && Eo(e, n, r, i);
      (re || Re) && (m = {
        ...m,
        ...sl(h.data, e.options)
      }), r._optimisticResults === "isRestoring" && (m.fetchStatus = "idle");
    }
    let { error: S, errorUpdatedAt: I, status: R } = m;
    C = m.data;
    let $ = !1;
    if (r.placeholderData !== void 0 && C === void 0 && R === "pending") {
      let pe;
      s != null && s.isPlaceholderData && r.placeholderData === (u == null ? void 0 : u.placeholderData) ? (pe = s.data, $ = !0) : pe = typeof r.placeholderData == "function" ? r.placeholderData(
        (Te = E(this, gr)) == null ? void 0 : Te.state.data,
        E(this, gr)
      ) : r.placeholderData, pe !== void 0 && (R = "success", C = go(
        s == null ? void 0 : s.data,
        pe,
        r
      ), A = !0);
    }
    if (r.select && C !== void 0 && !$)
      if (s && C === (o == null ? void 0 : o.data) && r.select === E(this, Hr))
        C = E(this, yr);
      else
        try {
          W(this, Hr, r.select), C = r.select(C), C = go(s == null ? void 0 : s.data, C, r), W(this, yr, C), W(this, Ct, null);
        } catch (pe) {
          W(this, Ct, pe);
        }
    E(this, Ct) && (S = E(this, Ct), C = E(this, yr), I = Date.now(), R = "error");
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
      errorUpdatedAt: I,
      failureCount: m.fetchFailureCount,
      failureReason: m.fetchFailureReason,
      errorUpdateCount: m.errorUpdateCount,
      isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
      isFetchedAfterMount: m.dataUpdateCount > p.dataUpdateCount || m.errorUpdateCount > p.errorUpdateCount,
      isFetching: k,
      isRefetching: k && !P,
      isLoadingError: F && !G,
      isPaused: m.fetchStatus === "paused",
      isPlaceholderData: A,
      isRefetchError: F && G,
      isStale: Ss(e, r),
      refetch: this.refetch,
      promise: E(this, At)
    };
    if (this.options.experimental_prefetchInRender) {
      const pe = (ye) => {
        V.status === "error" ? ye.reject(V.error) : V.data !== void 0 && ye.resolve(V.data);
      }, re = () => {
        const ye = W(this, At, V.promise = bo());
        pe(ye);
      }, Re = E(this, At);
      switch (Re.status) {
        case "pending":
          e.queryHash === n.queryHash && pe(Re);
          break;
        case "fulfilled":
          (V.status === "error" || V.data !== Re.value) && re();
          break;
        case "rejected":
          (V.status !== "error" || V.error !== Re.reason) && re();
          break;
      }
    }
    return V;
  }
  updateResult() {
    const e = E(this, $e), r = this.createResult(E(this, J), this.options);
    if (W(this, Gt, E(this, J).state), W(this, mr, this.options), E(this, Gt).data !== void 0 && W(this, gr, E(this, J)), xn(r, e))
      return;
    W(this, $e, r);
    const n = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: i } = this.options, s = typeof i == "function" ? i() : i;
      if (s === "all" || !s && !E(this, br).size)
        return !0;
      const o = new Set(
        s ?? E(this, br)
      );
      return this.options.throwOnError && o.add("error"), Object.keys(E(this, $e)).some((u) => {
        const l = u;
        return E(this, $e)[l] !== e[l] && o.has(l);
      });
    };
    me(this, oe, ca).call(this, { listeners: n() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && me(this, oe, Gi).call(this);
  }
}, je = new WeakMap(), J = new WeakMap(), Wr = new WeakMap(), $e = new WeakMap(), Gt = new WeakMap(), mr = new WeakMap(), At = new WeakMap(), Ct = new WeakMap(), Hr = new WeakMap(), yr = new WeakMap(), gr = new WeakMap(), zt = new WeakMap(), Wt = new WeakMap(), Nt = new WeakMap(), br = new WeakMap(), oe = new WeakSet(), $r = function(e) {
  me(this, oe, Hi).call(this);
  let r = E(this, J).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(Qu)), r;
}, Mi = function() {
  me(this, oe, zi).call(this);
  const e = Sn(
    this.options.staleTime,
    E(this, J)
  );
  if (jr || E(this, $e).isStale || !ho(e))
    return;
  const n = Ju(E(this, $e).dataUpdatedAt, e) + 1;
  W(this, zt, setTimeout(() => {
    E(this, $e).isStale || this.updateResult();
  }, n));
}, ji = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(E(this, J)) : this.options.refetchInterval) ?? !1;
}, Vi = function(e) {
  me(this, oe, Wi).call(this), W(this, Nt, e), !(jr || at(this.options.enabled, E(this, J)) === !1 || !ho(E(this, Nt)) || E(this, Nt) === 0) && W(this, Wt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Zu.isFocused()) && me(this, oe, $r).call(this);
  }, E(this, Nt)));
}, Gi = function() {
  me(this, oe, Mi).call(this), me(this, oe, Vi).call(this, me(this, oe, ji).call(this));
}, zi = function() {
  E(this, zt) && (clearTimeout(E(this, zt)), W(this, zt, void 0));
}, Wi = function() {
  E(this, Wt) && (clearInterval(E(this, Wt)), W(this, Wt, void 0));
}, Hi = function() {
  const e = E(this, je).getQueryCache().build(E(this, je), this.options);
  if (e === E(this, J))
    return;
  const r = E(this, J);
  W(this, J, e), W(this, Wr, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, ca = function(e) {
  Vn.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(E(this, $e));
    }), E(this, je).getQueryCache().notify({
      query: E(this, J),
      type: "observerResultsUpdated"
    });
  });
}, ua);
function ul(t, e) {
  return at(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function _o(t, e) {
  return ul(t, e) || t.state.data !== void 0 && Ki(t, e, e.refetchOnMount);
}
function Ki(t, e, r) {
  if (at(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && Ss(t, e);
  }
  return !1;
}
function Eo(t, e, r, n) {
  return (t !== e || at(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && Ss(t, r);
}
function Ss(t, e) {
  return at(e.enabled, t) !== !1 && t.isStaleByTime(Sn(e.staleTime, t));
}
function ll(t, e) {
  return !xn(t.getCurrentResult(), e);
}
var It, Dt, Ve, pt, yt, wn, Yi, la, cl = (la = class extends jn {
  constructor(e, r) {
    super();
    ce(this, yt);
    ce(this, It);
    ce(this, Dt);
    ce(this, Ve);
    ce(this, pt);
    W(this, It, e), this.setOptions(r), this.bindMethods(), me(this, yt, wn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = E(this, It).defaultMutationOptions(e), xn(this.options, r) || E(this, It).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: E(this, Ve),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && po(r.mutationKey) !== po(this.options.mutationKey) ? this.reset() : ((n = E(this, Ve)) == null ? void 0 : n.state.status) === "pending" && E(this, Ve).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = E(this, Ve)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    me(this, yt, wn).call(this), me(this, yt, Yi).call(this, e);
  }
  getCurrentResult() {
    return E(this, Dt);
  }
  reset() {
    var e;
    (e = E(this, Ve)) == null || e.removeObserver(this), W(this, Ve, void 0), me(this, yt, wn).call(this), me(this, yt, Yi).call(this);
  }
  mutate(e, r) {
    var n;
    return W(this, pt, r), (n = E(this, Ve)) == null || n.removeObserver(this), W(this, Ve, E(this, It).getMutationCache().build(E(this, It), this.options)), E(this, Ve).addObserver(this), E(this, Ve).execute(e);
  }
}, It = new WeakMap(), Dt = new WeakMap(), Ve = new WeakMap(), pt = new WeakMap(), yt = new WeakSet(), wn = function() {
  var r;
  const e = ((r = E(this, Ve)) == null ? void 0 : r.state) ?? ol();
  W(this, Dt, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Yi = function(e) {
  Vn.batch(() => {
    var r, n, i, s, o, u, l, p;
    if (E(this, pt) && this.hasListeners()) {
      const h = E(this, Dt).variables, m = E(this, Dt).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = E(this, pt)).onSuccess) == null || n.call(r, e.data, h, m), (s = (i = E(this, pt)).onSettled) == null || s.call(i, e.data, null, h, m)) : (e == null ? void 0 : e.type) === "error" && ((u = (o = E(this, pt)).onError) == null || u.call(o, e.error, h, m), (p = (l = E(this, pt)).onSettled) == null || p.call(
        l,
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
function fl(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Qi = { exports: {} }, H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function dl() {
  if (vo) return H;
  vo = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.iterator;
  function A(y) {
    return y === null || typeof y != "object" ? null : (y = m && y[m] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, S = Object.assign, I = {};
  function R(y, w, K) {
    this.props = y, this.context = w, this.refs = I, this.updater = K || C;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(y, w) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, w, "setState");
  }, R.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function $() {
  }
  $.prototype = R.prototype;
  function k(y, w, K) {
    this.props = y, this.context = w, this.refs = I, this.updater = K || C;
  }
  var P = k.prototype = new $();
  P.constructor = k, S(P, R.prototype), P.isPureReactComponent = !0;
  var F = Array.isArray, x = Object.prototype.hasOwnProperty, G = { current: null }, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(y, w, K) {
    var Q, ne = {}, he = null, fe = null;
    if (w != null) for (Q in w.ref !== void 0 && (fe = w.ref), w.key !== void 0 && (he = "" + w.key), w) x.call(w, Q) && !te.hasOwnProperty(Q) && (ne[Q] = w[Q]);
    var le = arguments.length - 2;
    if (le === 1) ne.children = K;
    else if (1 < le) {
      for (var ae = Array(le), Ce = 0; Ce < le; Ce++) ae[Ce] = arguments[Ce + 2];
      ne.children = ae;
    }
    if (y && y.defaultProps) for (Q in le = y.defaultProps, le) ne[Q] === void 0 && (ne[Q] = le[Q]);
    return { $$typeof: t, type: y, key: he, ref: fe, props: ne, _owner: G.current };
  }
  function Te(y, w) {
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
  var Re = /\/+/g;
  function ye(y, w) {
    return typeof y == "object" && y !== null && y.key != null ? re("" + y.key) : w.toString(36);
  }
  function xe(y, w, K, Q, ne) {
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
    if (fe) return fe = y, ne = ne(fe), y = Q === "" ? "." + ye(fe, 0) : Q, F(ne) ? (K = "", y != null && (K = y.replace(Re, "$&/") + "/"), xe(ne, w, K, "", function(Ce) {
      return Ce;
    })) : ne != null && (pe(ne) && (ne = Te(ne, K + (!ne.key || fe && fe.key === ne.key ? "" : ("" + ne.key).replace(Re, "$&/") + "/") + y)), w.push(ne)), 1;
    if (fe = 0, Q = Q === "" ? "." : Q + ":", F(y)) for (var le = 0; le < y.length; le++) {
      he = y[le];
      var ae = Q + ye(he, le);
      fe += xe(he, w, K, ae, ne);
    }
    else if (ae = A(y), typeof ae == "function") for (y = ae.call(y), le = 0; !(he = y.next()).done; ) he = he.value, ae = Q + ye(he, le++), fe += xe(he, w, K, ae, ne);
    else if (he === "object") throw w = String(y), Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.");
    return fe;
  }
  function Fe(y, w, K) {
    if (y == null) return y;
    var Q = [], ne = 0;
    return xe(y, Q, "", "", function(he) {
      return w.call(K, he, ne++);
    }), Q;
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
  var q = { current: null }, it = { transition: null }, kt = { ReactCurrentDispatcher: q, ReactCurrentBatchConfig: it, ReactCurrentOwner: G };
  function ct() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return H.Children = { map: Fe, forEach: function(y, w, K) {
    Fe(y, function() {
      w.apply(this, arguments);
    }, K);
  }, count: function(y) {
    var w = 0;
    return Fe(y, function() {
      w++;
    }), w;
  }, toArray: function(y) {
    return Fe(y, function(w) {
      return w;
    }) || [];
  }, only: function(y) {
    if (!pe(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, H.Component = R, H.Fragment = r, H.Profiler = i, H.PureComponent = k, H.StrictMode = n, H.Suspense = l, H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, H.act = ct, H.cloneElement = function(y, w, K) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var Q = S({}, y.props), ne = y.key, he = y.ref, fe = y._owner;
    if (w != null) {
      if (w.ref !== void 0 && (he = w.ref, fe = G.current), w.key !== void 0 && (ne = "" + w.key), y.type && y.type.defaultProps) var le = y.type.defaultProps;
      for (ae in w) x.call(w, ae) && !te.hasOwnProperty(ae) && (Q[ae] = w[ae] === void 0 && le !== void 0 ? le[ae] : w[ae]);
    }
    var ae = arguments.length - 2;
    if (ae === 1) Q.children = K;
    else if (1 < ae) {
      le = Array(ae);
      for (var Ce = 0; Ce < ae; Ce++) le[Ce] = arguments[Ce + 2];
      Q.children = le;
    }
    return { $$typeof: t, type: y.type, key: ne, ref: he, props: Q, _owner: fe };
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
var Ro;
function hl() {
  return Ro || (Ro = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), R = Symbol.iterator, $ = "@@iterator";
      function k(a) {
        if (a === null || typeof a != "object")
          return null;
        var c = R && a[R] || a[$];
        return typeof c == "function" ? c : null;
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
      function Te(a) {
        V = a;
      }
      te.setExtraStackFrame = function(a) {
        V = a;
      }, te.getCurrentStack = null, te.getStackAddendum = function() {
        var a = "";
        V && (a += V);
        var c = te.getCurrentStack;
        return c && (a += c() || ""), a;
      };
      var pe = !1, re = !1, Re = !1, ye = !1, xe = !1, Fe = {
        ReactCurrentDispatcher: P,
        ReactCurrentBatchConfig: F,
        ReactCurrentOwner: G
      };
      Fe.ReactDebugCurrentFrame = te, Fe.ReactCurrentActQueue = x;
      function et(a) {
        {
          for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), _ = 1; _ < c; _++)
            g[_ - 1] = arguments[_];
          it("warn", a, g);
        }
      }
      function q(a) {
        {
          for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), _ = 1; _ < c; _++)
            g[_ - 1] = arguments[_];
          it("error", a, g);
        }
      }
      function it(a, c, g) {
        {
          var _ = Fe.ReactDebugCurrentFrame, O = _.getStackAddendum();
          O !== "" && (c += "%s", g = g.concat([O]));
          var L = g.map(function(D) {
            return String(D);
          });
          L.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, L);
        }
      }
      var kt = {};
      function ct(a, c) {
        {
          var g = a.constructor, _ = g && (g.displayName || g.name) || "ReactClass", O = _ + "." + c;
          if (kt[O])
            return;
          q("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", c, _), kt[O] = !0;
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
        enqueueForceUpdate: function(a, c, g) {
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
        enqueueReplaceState: function(a, c, g, _) {
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
        enqueueSetState: function(a, c, g, _) {
          ct(a, "setState");
        }
      }, w = Object.assign, K = {};
      Object.freeze(K);
      function Q(a, c, g) {
        this.props = a, this.context = c, this.refs = K, this.updater = g || y;
      }
      Q.prototype.isReactComponent = {}, Q.prototype.setState = function(a, c) {
        if (typeof a != "object" && typeof a != "function" && a != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, c, "setState");
      }, Q.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      {
        var ne = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, he = function(a, c) {
          Object.defineProperty(Q.prototype, a, {
            get: function() {
              et("%s(...) is deprecated in plain JavaScript React classes. %s", c[0], c[1]);
            }
          });
        };
        for (var fe in ne)
          ne.hasOwnProperty(fe) && he(fe, ne[fe]);
      }
      function le() {
      }
      le.prototype = Q.prototype;
      function ae(a, c, g) {
        this.props = a, this.context = c, this.refs = K, this.updater = g || y;
      }
      var Ce = ae.prototype = new le();
      Ce.constructor = ae, w(Ce, Q.prototype), Ce.isPureReactComponent = !0;
      function ii() {
        var a = {
          current: null
        };
        return Object.seal(a), a;
      }
      var Xr = Array.isArray;
      function rr(a) {
        return Xr(a);
      }
      function si(a) {
        {
          var c = typeof Symbol == "function" && Symbol.toStringTag, g = c && a[Symbol.toStringTag] || a.constructor.name || "Object";
          return g;
        }
      }
      function nr(a) {
        try {
          return bt(a), !1;
        } catch {
          return !0;
        }
      }
      function bt(a) {
        return "" + a;
      }
      function xt(a) {
        if (nr(a))
          return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", si(a)), bt(a);
      }
      function Zr(a, c, g) {
        var _ = a.displayName;
        if (_)
          return _;
        var O = c.displayName || c.name || "";
        return O !== "" ? g + "(" + O + ")" : g;
      }
      function Ft(a) {
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
          case A:
            return "SuspenseList";
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case p:
              var c = a;
              return Ft(c) + ".Consumer";
            case l:
              var g = a;
              return Ft(g._context) + ".Provider";
            case h:
              return Zr(a, a.render, "ForwardRef");
            case C:
              var _ = a.displayName || null;
              return _ !== null ? _ : st(a.type) || "Memo";
            case S: {
              var O = a, L = O._payload, D = O._init;
              try {
                return st(D(L));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var qt = Object.prototype.hasOwnProperty, ir = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, en, tn, sr;
      sr = {};
      function Ir(a) {
        if (qt.call(a, "ref")) {
          var c = Object.getOwnPropertyDescriptor(a, "ref").get;
          if (c && c.isReactWarning)
            return !1;
        }
        return a.ref !== void 0;
      }
      function _t(a) {
        if (qt.call(a, "key")) {
          var c = Object.getOwnPropertyDescriptor(a, "key").get;
          if (c && c.isReactWarning)
            return !1;
        }
        return a.key !== void 0;
      }
      function oi(a, c) {
        var g = function() {
          en || (en = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: g,
          configurable: !0
        });
      }
      function rn(a, c) {
        var g = function() {
          tn || (tn = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: g,
          configurable: !0
        });
      }
      function nn(a) {
        if (typeof a.ref == "string" && G.current && a.__self && G.current.stateNode !== a.__self) {
          var c = st(G.current.type);
          sr[c] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', c, a.ref), sr[c] = !0);
        }
      }
      var Lt = function(a, c, g, _, O, L, D) {
        var U = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: a,
          key: c,
          ref: g,
          props: D,
          // Record the component responsible for creating this element.
          _owner: L
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
          value: _
        }), Object.defineProperty(U, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: O
        }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
      };
      function ai(a, c, g) {
        var _, O = {}, L = null, D = null, U = null, Z = null;
        if (c != null) {
          Ir(c) && (D = c.ref, nn(c)), _t(c) && (xt(c.key), L = "" + c.key), U = c.__self === void 0 ? null : c.__self, Z = c.__source === void 0 ? null : c.__source;
          for (_ in c)
            qt.call(c, _) && !ir.hasOwnProperty(_) && (O[_] = c[_]);
        }
        var de = arguments.length - 2;
        if (de === 1)
          O.children = g;
        else if (de > 1) {
          for (var ge = Array(de), be = 0; be < de; be++)
            ge[be] = arguments[be + 2];
          Object.freeze && Object.freeze(ge), O.children = ge;
        }
        if (a && a.defaultProps) {
          var ve = a.defaultProps;
          for (_ in ve)
            O[_] === void 0 && (O[_] = ve[_]);
        }
        if (L || D) {
          var Ne = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          L && oi(O, Ne), D && rn(O, Ne);
        }
        return Lt(a, L, D, U, Z, G.current, O);
      }
      function ui(a, c) {
        var g = Lt(a.type, c, a.ref, a._self, a._source, a._owner, a.props);
        return g;
      }
      function li(a, c, g) {
        if (a == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var _, O = w({}, a.props), L = a.key, D = a.ref, U = a._self, Z = a._source, de = a._owner;
        if (c != null) {
          Ir(c) && (D = c.ref, de = G.current), _t(c) && (xt(c.key), L = "" + c.key);
          var ge;
          a.type && a.type.defaultProps && (ge = a.type.defaultProps);
          for (_ in c)
            qt.call(c, _) && !ir.hasOwnProperty(_) && (c[_] === void 0 && ge !== void 0 ? O[_] = ge[_] : O[_] = c[_]);
        }
        var be = arguments.length - 2;
        if (be === 1)
          O.children = g;
        else if (be > 1) {
          for (var ve = Array(be), Ne = 0; Ne < be; Ne++)
            ve[Ne] = arguments[Ne + 2];
          O.children = ve;
        }
        return Lt(a.type, L, D, U, Z, de, O);
      }
      function Et(a) {
        return typeof a == "object" && a !== null && a.$$typeof === n;
      }
      var sn = ".", ci = ":";
      function fi(a) {
        var c = /[=:]/g, g = {
          "=": "=0",
          ":": "=2"
        }, _ = a.replace(c, function(O) {
          return g[O];
        });
        return "$" + _;
      }
      var or = !1, on = /\/+/g;
      function ft(a) {
        return a.replace(on, "$&/");
      }
      function Bt(a, c) {
        return typeof a == "object" && a !== null && a.key != null ? (xt(a.key), fi("" + a.key)) : c.toString(36);
      }
      function vt(a, c, g, _, O) {
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
          var U = a, Z = O(U), de = _ === "" ? sn + Bt(U, 0) : _;
          if (rr(Z)) {
            var ge = "";
            de != null && (ge = ft(de) + "/"), vt(Z, c, ge, "", function(Ku) {
              return Ku;
            });
          } else Z != null && (Et(Z) && (Z.key && (!U || U.key !== Z.key) && xt(Z.key), Z = ui(
            Z,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            g + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Z.key && (!U || U.key !== Z.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ft("" + Z.key) + "/"
            ) : "") + de
          )), c.push(Z));
          return 1;
        }
        var be, ve, Ne = 0, Le = _ === "" ? sn : _ + ci;
        if (rr(a))
          for (var bn = 0; bn < a.length; bn++)
            be = a[bn], ve = Le + Bt(be, bn), Ne += vt(be, c, g, ve, O);
        else {
          var Oi = k(a);
          if (typeof Oi == "function") {
            var uo = a;
            Oi === uo.entries && (or || et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), or = !0);
            for (var Wu = Oi.call(uo), lo, Hu = 0; !(lo = Wu.next()).done; )
              be = lo.value, ve = Le + Bt(be, Hu++), Ne += vt(be, c, g, ve, O);
          } else if (L === "object") {
            var co = String(a);
            throw new Error("Objects are not valid as a React child (found: " + (co === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : co) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Ne;
      }
      function $t(a, c, g) {
        if (a == null)
          return a;
        var _ = [], O = 0;
        return vt(a, _, "", "", function(L) {
          return c.call(g, L, O++);
        }), _;
      }
      function di(a) {
        var c = 0;
        return $t(a, function() {
          c++;
        }), c;
      }
      function an(a, c, g) {
        $t(a, function() {
          c.apply(this, arguments);
        }, g);
      }
      function hi(a) {
        return $t(a, function(c) {
          return c;
        }) || [];
      }
      function un(a) {
        if (!Et(a))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return a;
      }
      function ln(a) {
        var c = {
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
        c.Provider = {
          $$typeof: l,
          _context: c
        };
        var g = !1, _ = !1, O = !1;
        {
          var L = {
            $$typeof: p,
            _context: c
          };
          Object.defineProperties(L, {
            Provider: {
              get: function() {
                return _ || (_ = !0, q("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), c.Provider;
              },
              set: function(D) {
                c.Provider = D;
              }
            },
            _currentValue: {
              get: function() {
                return c._currentValue;
              },
              set: function(D) {
                c._currentValue = D;
              }
            },
            _currentValue2: {
              get: function() {
                return c._currentValue2;
              },
              set: function(D) {
                c._currentValue2 = D;
              }
            },
            _threadCount: {
              get: function() {
                return c._threadCount;
              },
              set: function(D) {
                c._threadCount = D;
              }
            },
            Consumer: {
              get: function() {
                return g || (g = !0, q("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), c.Consumer;
              }
            },
            displayName: {
              get: function() {
                return c.displayName;
              },
              set: function(D) {
                O || (et("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", D), O = !0);
              }
            }
          }), c.Consumer = L;
        }
        return c._currentRenderer = null, c._currentRenderer2 = null, c;
      }
      var Ut = -1, Dr = 0, Pr = 1, cn = 2;
      function pi(a) {
        if (a._status === Ut) {
          var c = a._result, g = c();
          if (g.then(function(L) {
            if (a._status === Dr || a._status === Ut) {
              var D = a;
              D._status = Pr, D._result = L;
            }
          }, function(L) {
            if (a._status === Dr || a._status === Ut) {
              var D = a;
              D._status = cn, D._result = L;
            }
          }), a._status === Ut) {
            var _ = a;
            _._status = Dr, _._result = g;
          }
        }
        if (a._status === Pr) {
          var O = a._result;
          return O === void 0 && q(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, O), "default" in O || q(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, O), O.default;
        } else
          throw a._result;
      }
      function mi(a) {
        var c = {
          // We use these fields to store the result.
          _status: Ut,
          _result: a
        }, g = {
          $$typeof: S,
          _payload: c,
          _init: pi
        };
        {
          var _, O;
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
                return O;
              },
              set: function(L) {
                q("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), O = L, Object.defineProperty(g, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return g;
      }
      function yi(a) {
        a != null && a.$$typeof === C ? q("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof a != "function" ? q("forwardRef requires a render function but was given %s.", a === null ? "null" : typeof a) : a.length !== 0 && a.length !== 2 && q("forwardRef render functions accept exactly two parameters: props and ref. %s", a.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), a != null && (a.defaultProps != null || a.propTypes != null) && q("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var c = {
          $$typeof: h,
          render: a
        };
        {
          var g;
          Object.defineProperty(c, "displayName", {
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
        return c;
      }
      var fn;
      fn = Symbol.for("react.module.reference");
      function d(a) {
        return !!(typeof a == "string" || typeof a == "function" || a === s || a === u || xe || a === o || a === m || a === A || ye || a === I || pe || re || Re || typeof a == "object" && a !== null && (a.$$typeof === S || a.$$typeof === C || a.$$typeof === l || a.$$typeof === p || a.$$typeof === h || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        a.$$typeof === fn || a.getModuleId !== void 0));
      }
      function v(a, c) {
        d(a) || q("memo: The first argument must be a component. Instead received: %s", a === null ? "null" : typeof a);
        var g = {
          $$typeof: C,
          type: a,
          compare: c === void 0 ? null : c
        };
        {
          var _;
          Object.defineProperty(g, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return _;
            },
            set: function(O) {
              _ = O, !a.name && !a.displayName && (a.displayName = O);
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
        var c = T();
        if (a._context !== void 0) {
          var g = a._context;
          g.Consumer === a ? q("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : g.Provider === a && q("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return c.useContext(a);
      }
      function ie(a) {
        var c = T();
        return c.useState(a);
      }
      function ue(a, c, g) {
        var _ = T();
        return _.useReducer(a, c, g);
      }
      function Y(a) {
        var c = T();
        return c.useRef(a);
      }
      function z(a, c) {
        var g = T();
        return g.useEffect(a, c);
      }
      function qe(a, c) {
        var g = T();
        return g.useInsertionEffect(a, c);
      }
      function Ee(a, c) {
        var g = T();
        return g.useLayoutEffect(a, c);
      }
      function Se(a, c) {
        var g = T();
        return g.useCallback(a, c);
      }
      function Ue(a, c) {
        var g = T();
        return g.useMemo(a, c);
      }
      function Rt(a, c, g) {
        var _ = T();
        return _.useImperativeHandle(a, c, g);
      }
      function dt(a, c) {
        {
          var g = T();
          return g.useDebugValue(a, c);
        }
      }
      function Be() {
        var a = T();
        return a.useTransition();
      }
      function kr(a) {
        var c = T();
        return c.useDeferredValue(a);
      }
      function gi() {
        var a = T();
        return a.useId();
      }
      function bi(a, c, g) {
        var _ = T();
        return _.useSyncExternalStore(a, c, g);
      }
      var xr = 0, Ms, js, Vs, Gs, zs, Ws, Hs;
      function Ks() {
      }
      Ks.__reactDisabledLog = !0;
      function Cu() {
        {
          if (xr === 0) {
            Ms = console.log, js = console.info, Vs = console.warn, Gs = console.error, zs = console.group, Ws = console.groupCollapsed, Hs = console.groupEnd;
            var a = {
              configurable: !0,
              enumerable: !0,
              value: Ks,
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
      function Nu() {
        {
          if (xr--, xr === 0) {
            var a = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: w({}, a, {
                value: Ms
              }),
              info: w({}, a, {
                value: js
              }),
              warn: w({}, a, {
                value: Vs
              }),
              error: w({}, a, {
                value: Gs
              }),
              group: w({}, a, {
                value: zs
              }),
              groupCollapsed: w({}, a, {
                value: Ws
              }),
              groupEnd: w({}, a, {
                value: Hs
              })
            });
          }
          xr < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var _i = Fe.ReactCurrentDispatcher, Ei;
      function dn(a, c, g) {
        {
          if (Ei === void 0)
            try {
              throw Error();
            } catch (O) {
              var _ = O.stack.trim().match(/\n( *(at )?)/);
              Ei = _ && _[1] || "";
            }
          return `
` + Ei + a;
        }
      }
      var vi = !1, hn;
      {
        var Iu = typeof WeakMap == "function" ? WeakMap : Map;
        hn = new Iu();
      }
      function Ys(a, c) {
        if (!a || vi)
          return "";
        {
          var g = hn.get(a);
          if (g !== void 0)
            return g;
        }
        var _;
        vi = !0;
        var O = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var L;
        L = _i.current, _i.current = null, Cu();
        try {
          if (c) {
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
              } catch (Le) {
                _ = Le;
              }
              Reflect.construct(a, [], D);
            } else {
              try {
                D.call();
              } catch (Le) {
                _ = Le;
              }
              a.call(D.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Le) {
              _ = Le;
            }
            a();
          }
        } catch (Le) {
          if (Le && _ && typeof Le.stack == "string") {
            for (var U = Le.stack.split(`
`), Z = _.stack.split(`
`), de = U.length - 1, ge = Z.length - 1; de >= 1 && ge >= 0 && U[de] !== Z[ge]; )
              ge--;
            for (; de >= 1 && ge >= 0; de--, ge--)
              if (U[de] !== Z[ge]) {
                if (de !== 1 || ge !== 1)
                  do
                    if (de--, ge--, ge < 0 || U[de] !== Z[ge]) {
                      var be = `
` + U[de].replace(" at new ", " at ");
                      return a.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", a.displayName)), typeof a == "function" && hn.set(a, be), be;
                    }
                  while (de >= 1 && ge >= 0);
                break;
              }
          }
        } finally {
          vi = !1, _i.current = L, Nu(), Error.prepareStackTrace = O;
        }
        var ve = a ? a.displayName || a.name : "", Ne = ve ? dn(ve) : "";
        return typeof a == "function" && hn.set(a, Ne), Ne;
      }
      function Du(a, c, g) {
        return Ys(a, !1);
      }
      function Pu(a) {
        var c = a.prototype;
        return !!(c && c.isReactComponent);
      }
      function pn(a, c, g) {
        if (a == null)
          return "";
        if (typeof a == "function")
          return Ys(a, Pu(a));
        if (typeof a == "string")
          return dn(a);
        switch (a) {
          case m:
            return dn("Suspense");
          case A:
            return dn("SuspenseList");
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case h:
              return Du(a.render);
            case C:
              return pn(a.type, c, g);
            case S: {
              var _ = a, O = _._payload, L = _._init;
              try {
                return pn(L(O), c, g);
              } catch {
              }
            }
          }
        return "";
      }
      var Qs = {}, Js = Fe.ReactDebugCurrentFrame;
      function mn(a) {
        if (a) {
          var c = a._owner, g = pn(a.type, a._source, c ? c.type : null);
          Js.setExtraStackFrame(g);
        } else
          Js.setExtraStackFrame(null);
      }
      function ku(a, c, g, _, O) {
        {
          var L = Function.call.bind(qt);
          for (var D in a)
            if (L(a, D)) {
              var U = void 0;
              try {
                if (typeof a[D] != "function") {
                  var Z = Error((_ || "React class") + ": " + g + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Z.name = "Invariant Violation", Z;
                }
                U = a[D](c, D, _, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (de) {
                U = de;
              }
              U && !(U instanceof Error) && (mn(O), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", g, D, typeof U), mn(null)), U instanceof Error && !(U.message in Qs) && (Qs[U.message] = !0, mn(O), q("Failed %s type: %s", g, U.message), mn(null));
            }
        }
      }
      function ar(a) {
        if (a) {
          var c = a._owner, g = pn(a.type, a._source, c ? c.type : null);
          Te(g);
        } else
          Te(null);
      }
      var Ri;
      Ri = !1;
      function Xs() {
        if (G.current) {
          var a = st(G.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
      function xu(a) {
        if (a !== void 0) {
          var c = a.fileName.replace(/^.*[\\\/]/, ""), g = a.lineNumber;
          return `

Check your code at ` + c + ":" + g + ".";
        }
        return "";
      }
      function Fu(a) {
        return a != null ? xu(a.__source) : "";
      }
      var Zs = {};
      function qu(a) {
        var c = Xs();
        if (!c) {
          var g = typeof a == "string" ? a : a.displayName || a.name;
          g && (c = `

Check the top-level render call using <` + g + ">.");
        }
        return c;
      }
      function eo(a, c) {
        if (!(!a._store || a._store.validated || a.key != null)) {
          a._store.validated = !0;
          var g = qu(c);
          if (!Zs[g]) {
            Zs[g] = !0;
            var _ = "";
            a && a._owner && a._owner !== G.current && (_ = " It was passed a child from " + st(a._owner.type) + "."), ar(a), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, _), ar(null);
          }
        }
      }
      function to(a, c) {
        if (typeof a == "object") {
          if (rr(a))
            for (var g = 0; g < a.length; g++) {
              var _ = a[g];
              Et(_) && eo(_, c);
            }
          else if (Et(a))
            a._store && (a._store.validated = !0);
          else if (a) {
            var O = k(a);
            if (typeof O == "function" && O !== a.entries)
              for (var L = O.call(a), D; !(D = L.next()).done; )
                Et(D.value) && eo(D.value, c);
          }
        }
      }
      function ro(a) {
        {
          var c = a.type;
          if (c == null || typeof c == "string")
            return;
          var g;
          if (typeof c == "function")
            g = c.propTypes;
          else if (typeof c == "object" && (c.$$typeof === h || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          c.$$typeof === C))
            g = c.propTypes;
          else
            return;
          if (g) {
            var _ = st(c);
            ku(g, a.props, "prop", _, a);
          } else if (c.PropTypes !== void 0 && !Ri) {
            Ri = !0;
            var O = st(c);
            q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
          }
          typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Lu(a) {
        {
          for (var c = Object.keys(a.props), g = 0; g < c.length; g++) {
            var _ = c[g];
            if (_ !== "children" && _ !== "key") {
              ar(a), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), ar(null);
              break;
            }
          }
          a.ref !== null && (ar(a), q("Invalid attribute `ref` supplied to `React.Fragment`."), ar(null));
        }
      }
      function no(a, c, g) {
        var _ = d(a);
        if (!_) {
          var O = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Fu(c);
          L ? O += L : O += Xs();
          var D;
          a === null ? D = "null" : rr(a) ? D = "array" : a !== void 0 && a.$$typeof === n ? (D = "<" + (st(a.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : D = typeof a, q("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, O);
        }
        var U = ai.apply(this, arguments);
        if (U == null)
          return U;
        if (_)
          for (var Z = 2; Z < arguments.length; Z++)
            to(arguments[Z], a);
        return a === s ? Lu(U) : ro(U), U;
      }
      var io = !1;
      function Bu(a) {
        var c = no.bind(null, a);
        return c.type = a, io || (io = !0, et("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(c, "type", {
          enumerable: !1,
          get: function() {
            return et("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: a
            }), a;
          }
        }), c;
      }
      function $u(a, c, g) {
        for (var _ = li.apply(this, arguments), O = 2; O < arguments.length; O++)
          to(arguments[O], _.type);
        return ro(_), _;
      }
      function Uu(a, c) {
        var g = F.transition;
        F.transition = {};
        var _ = F.transition;
        F.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          a();
        } finally {
          if (F.transition = g, g === null && _._updatedFibers) {
            var O = _._updatedFibers.size;
            O > 10 && et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), _._updatedFibers.clear();
          }
        }
      }
      var so = !1, yn = null;
      function Mu(a) {
        if (yn === null)
          try {
            var c = ("require" + Math.random()).slice(0, 7), g = t && t[c];
            yn = g.call(t, "timers").setImmediate;
          } catch {
            yn = function(O) {
              so === !1 && (so = !0, typeof MessageChannel > "u" && q("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var L = new MessageChannel();
              L.port1.onmessage = O, L.port2.postMessage(void 0);
            };
          }
        return yn(a);
      }
      var ur = 0, oo = !1;
      function ao(a) {
        {
          var c = ur;
          ur++, x.current === null && (x.current = []);
          var g = x.isBatchingLegacy, _;
          try {
            if (x.isBatchingLegacy = !0, _ = a(), !g && x.didScheduleLegacyUpdate) {
              var O = x.current;
              O !== null && (x.didScheduleLegacyUpdate = !1, Ti(O));
            }
          } catch (ve) {
            throw gn(c), ve;
          } finally {
            x.isBatchingLegacy = g;
          }
          if (_ !== null && typeof _ == "object" && typeof _.then == "function") {
            var L = _, D = !1, U = {
              then: function(ve, Ne) {
                D = !0, L.then(function(Le) {
                  gn(c), ur === 0 ? Si(Le, ve, Ne) : ve(Le);
                }, function(Le) {
                  gn(c), Ne(Le);
                });
              }
            };
            return !oo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              D || (oo = !0, q("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), U;
          } else {
            var Z = _;
            if (gn(c), ur === 0) {
              var de = x.current;
              de !== null && (Ti(de), x.current = null);
              var ge = {
                then: function(ve, Ne) {
                  x.current === null ? (x.current = [], Si(Z, ve, Ne)) : ve(Z);
                }
              };
              return ge;
            } else {
              var be = {
                then: function(ve, Ne) {
                  ve(Z);
                }
              };
              return be;
            }
          }
        }
      }
      function gn(a) {
        a !== ur - 1 && q("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ur = a;
      }
      function Si(a, c, g) {
        {
          var _ = x.current;
          if (_ !== null)
            try {
              Ti(_), Mu(function() {
                _.length === 0 ? (x.current = null, c(a)) : Si(a, c, g);
              });
            } catch (O) {
              g(O);
            }
          else
            c(a);
        }
      }
      var wi = !1;
      function Ti(a) {
        if (!wi) {
          wi = !0;
          var c = 0;
          try {
            for (; c < a.length; c++) {
              var g = a[c];
              do
                g = g(!0);
              while (g !== null);
            }
            a.length = 0;
          } catch (_) {
            throw a = a.slice(c + 1), _;
          } finally {
            wi = !1;
          }
        }
      }
      var ju = no, Vu = $u, Gu = Bu, zu = {
        map: $t,
        forEach: an,
        count: di,
        toArray: hi,
        only: un
      };
      e.Children = zu, e.Component = Q, e.Fragment = s, e.Profiler = u, e.PureComponent = ae, e.StrictMode = o, e.Suspense = m, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fe, e.act = ao, e.cloneElement = Vu, e.createContext = ln, e.createElement = ju, e.createFactory = Gu, e.createRef = ii, e.forwardRef = yi, e.isValidElement = Et, e.lazy = mi, e.memo = v, e.startTransition = Uu, e.unstable_act = ao, e.useCallback = Se, e.useContext = B, e.useDebugValue = dt, e.useDeferredValue = kr, e.useEffect = z, e.useId = gi, e.useImperativeHandle = Rt, e.useInsertionEffect = qe, e.useLayoutEffect = Ee, e.useMemo = Ue, e.useReducer = ue, e.useRef = Y, e.useState = ie, e.useSyncExternalStore = bi, e.useTransition = Be, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ur, Ur.exports)), Ur.exports;
}
process.env.NODE_ENV === "production" ? Qi.exports = dl() : Qi.exports = hl();
var ke = Qi.exports, Fr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var So;
function pl() {
  if (So) return Fr;
  So = 1;
  var t = ke, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, l, p) {
    var h, m = {}, A = null, C = null;
    p !== void 0 && (A = "" + p), l.key !== void 0 && (A = "" + l.key), l.ref !== void 0 && (C = l.ref);
    for (h in l) n.call(l, h) && !s.hasOwnProperty(h) && (m[h] = l[h]);
    if (u && u.defaultProps) for (h in l = u.defaultProps, l) m[h] === void 0 && (m[h] = l[h]);
    return { $$typeof: e, type: u, key: A, ref: C, props: m, _owner: i.current };
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
var wo;
function ml() {
  return wo || (wo = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ke, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = Symbol.iterator, I = "@@iterator";
    function R(d) {
      if (d === null || typeof d != "object")
        return null;
      var v = S && d[S] || d[I];
      return typeof v == "function" ? v : null;
    }
    var $ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(d) {
      {
        for (var v = arguments.length, T = new Array(v > 1 ? v - 1 : 0), B = 1; B < v; B++)
          T[B - 1] = arguments[B];
        P("error", d, T);
      }
    }
    function P(d, v, T) {
      {
        var B = $.ReactDebugCurrentFrame, ie = B.getStackAddendum();
        ie !== "" && (v += "%s", T = T.concat([ie]));
        var ue = T.map(function(Y) {
          return String(Y);
        });
        ue.unshift("Warning: " + v), Function.prototype.apply.call(console[d], console, ue);
      }
    }
    var F = !1, x = !1, G = !1, te = !1, V = !1, Te;
    Te = Symbol.for("react.module.reference");
    function pe(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === s || V || d === i || d === p || d === h || te || d === C || F || x || G || typeof d == "object" && d !== null && (d.$$typeof === A || d.$$typeof === m || d.$$typeof === o || d.$$typeof === u || d.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === Te || d.getModuleId !== void 0));
    }
    function re(d, v, T) {
      var B = d.displayName;
      if (B)
        return B;
      var ie = v.displayName || v.name || "";
      return ie !== "" ? T + "(" + ie + ")" : T;
    }
    function Re(d) {
      return d.displayName || "Context";
    }
    function ye(d) {
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
            return Re(v) + ".Consumer";
          case o:
            var T = d;
            return Re(T._context) + ".Provider";
          case l:
            return re(d, d.render, "ForwardRef");
          case m:
            var B = d.displayName || null;
            return B !== null ? B : ye(d.type) || "Memo";
          case A: {
            var ie = d, ue = ie._payload, Y = ie._init;
            try {
              return ye(Y(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var xe = Object.assign, Fe = 0, et, q, it, kt, ct, y, w;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function Q() {
      {
        if (Fe === 0) {
          et = console.log, q = console.info, it = console.warn, kt = console.error, ct = console.group, y = console.groupCollapsed, w = console.groupEnd;
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
        Fe++;
      }
    }
    function ne() {
      {
        if (Fe--, Fe === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xe({}, d, {
              value: et
            }),
            info: xe({}, d, {
              value: q
            }),
            warn: xe({}, d, {
              value: it
            }),
            error: xe({}, d, {
              value: kt
            }),
            group: xe({}, d, {
              value: ct
            }),
            groupCollapsed: xe({}, d, {
              value: y
            }),
            groupEnd: xe({}, d, {
              value: w
            })
          });
        }
        Fe < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = $.ReactCurrentDispatcher, fe;
    function le(d, v, T) {
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
      var ii = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new ii();
    }
    function Xr(d, v) {
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
      ue = he.current, he.current = null, Q();
      try {
        if (v) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (Be) {
              B = Be;
            }
            Reflect.construct(d, [], Y);
          } else {
            try {
              Y.call();
            } catch (Be) {
              B = Be;
            }
            d.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Be) {
            B = Be;
          }
          d();
        }
      } catch (Be) {
        if (Be && B && typeof Be.stack == "string") {
          for (var z = Be.stack.split(`
`), qe = B.stack.split(`
`), Ee = z.length - 1, Se = qe.length - 1; Ee >= 1 && Se >= 0 && z[Ee] !== qe[Se]; )
            Se--;
          for (; Ee >= 1 && Se >= 0; Ee--, Se--)
            if (z[Ee] !== qe[Se]) {
              if (Ee !== 1 || Se !== 1)
                do
                  if (Ee--, Se--, Se < 0 || z[Ee] !== qe[Se]) {
                    var Ue = `
` + z[Ee].replace(" at new ", " at ");
                    return d.displayName && Ue.includes("<anonymous>") && (Ue = Ue.replace("<anonymous>", d.displayName)), typeof d == "function" && Ce.set(d, Ue), Ue;
                  }
                while (Ee >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        ae = !1, he.current = ue, ne(), Error.prepareStackTrace = ie;
      }
      var Rt = d ? d.displayName || d.name : "", dt = Rt ? le(Rt) : "";
      return typeof d == "function" && Ce.set(d, dt), dt;
    }
    function rr(d, v, T) {
      return Xr(d, !1);
    }
    function si(d) {
      var v = d.prototype;
      return !!(v && v.isReactComponent);
    }
    function nr(d, v, T) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Xr(d, si(d));
      if (typeof d == "string")
        return le(d);
      switch (d) {
        case p:
          return le("Suspense");
        case h:
          return le("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            return rr(d.render);
          case m:
            return nr(d.type, v, T);
          case A: {
            var B = d, ie = B._payload, ue = B._init;
            try {
              return nr(ue(ie), v, T);
            } catch {
            }
          }
        }
      return "";
    }
    var bt = Object.prototype.hasOwnProperty, xt = {}, Zr = $.ReactDebugCurrentFrame;
    function Ft(d) {
      if (d) {
        var v = d._owner, T = nr(d.type, d._source, v ? v.type : null);
        Zr.setExtraStackFrame(T);
      } else
        Zr.setExtraStackFrame(null);
    }
    function st(d, v, T, B, ie) {
      {
        var ue = Function.call.bind(bt);
        for (var Y in d)
          if (ue(d, Y)) {
            var z = void 0;
            try {
              if (typeof d[Y] != "function") {
                var qe = Error((B || "React class") + ": " + T + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qe.name = "Invariant Violation", qe;
              }
              z = d[Y](v, Y, B, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              z = Ee;
            }
            z && !(z instanceof Error) && (Ft(ie), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", T, Y, typeof z), Ft(null)), z instanceof Error && !(z.message in xt) && (xt[z.message] = !0, Ft(ie), k("Failed %s type: %s", T, z.message), Ft(null));
          }
      }
    }
    var qt = Array.isArray;
    function ir(d) {
      return qt(d);
    }
    function en(d) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, T = v && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return T;
      }
    }
    function tn(d) {
      try {
        return sr(d), !1;
      } catch {
        return !0;
      }
    }
    function sr(d) {
      return "" + d;
    }
    function Ir(d) {
      if (tn(d))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", en(d)), sr(d);
    }
    var _t = $.ReactCurrentOwner, oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rn, nn, Lt;
    Lt = {};
    function ai(d) {
      if (bt.call(d, "ref")) {
        var v = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function ui(d) {
      if (bt.call(d, "key")) {
        var v = Object.getOwnPropertyDescriptor(d, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function li(d, v) {
      if (typeof d.ref == "string" && _t.current && v && _t.current.stateNode !== v) {
        var T = ye(_t.current.type);
        Lt[T] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ye(_t.current.type), d.ref), Lt[T] = !0);
      }
    }
    function Et(d, v) {
      {
        var T = function() {
          rn || (rn = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function sn(d, v) {
      {
        var T = function() {
          nn || (nn = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var ci = function(d, v, T, B, ie, ue, Y) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: d,
        key: v,
        ref: T,
        props: Y,
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
    function fi(d, v, T, B, ie) {
      {
        var ue, Y = {}, z = null, qe = null;
        T !== void 0 && (Ir(T), z = "" + T), ui(v) && (Ir(v.key), z = "" + v.key), ai(v) && (qe = v.ref, li(v, ie));
        for (ue in v)
          bt.call(v, ue) && !oi.hasOwnProperty(ue) && (Y[ue] = v[ue]);
        if (d && d.defaultProps) {
          var Ee = d.defaultProps;
          for (ue in Ee)
            Y[ue] === void 0 && (Y[ue] = Ee[ue]);
        }
        if (z || qe) {
          var Se = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          z && Et(Y, Se), qe && sn(Y, Se);
        }
        return ci(d, z, qe, ie, B, _t.current, Y);
      }
    }
    var or = $.ReactCurrentOwner, on = $.ReactDebugCurrentFrame;
    function ft(d) {
      if (d) {
        var v = d._owner, T = nr(d.type, d._source, v ? v.type : null);
        on.setExtraStackFrame(T);
      } else
        on.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function vt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function $t() {
      {
        if (or.current) {
          var d = ye(or.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function di(d) {
      return "";
    }
    var an = {};
    function hi(d) {
      {
        var v = $t();
        if (!v) {
          var T = typeof d == "string" ? d : d.displayName || d.name;
          T && (v = `

Check the top-level render call using <` + T + ">.");
        }
        return v;
      }
    }
    function un(d, v) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var T = hi(v);
        if (an[T])
          return;
        an[T] = !0;
        var B = "";
        d && d._owner && d._owner !== or.current && (B = " It was passed a child from " + ye(d._owner.type) + "."), ft(d), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, B), ft(null);
      }
    }
    function ln(d, v) {
      {
        if (typeof d != "object")
          return;
        if (ir(d))
          for (var T = 0; T < d.length; T++) {
            var B = d[T];
            vt(B) && un(B, v);
          }
        else if (vt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var ie = R(d);
          if (typeof ie == "function" && ie !== d.entries)
            for (var ue = ie.call(d), Y; !(Y = ue.next()).done; )
              vt(Y.value) && un(Y.value, v);
        }
      }
    }
    function Ut(d) {
      {
        var v = d.type;
        if (v == null || typeof v == "string")
          return;
        var T;
        if (typeof v == "function")
          T = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === m))
          T = v.propTypes;
        else
          return;
        if (T) {
          var B = ye(v);
          st(T, d.props, "prop", B, d);
        } else if (v.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var ie = ye(v);
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
            ft(d), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), ft(null);
            break;
          }
        }
        d.ref !== null && (ft(d), k("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    var Pr = {};
    function cn(d, v, T, B, ie, ue) {
      {
        var Y = pe(d);
        if (!Y) {
          var z = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = di();
          qe ? z += qe : z += $t();
          var Ee;
          d === null ? Ee = "null" : ir(d) ? Ee = "array" : d !== void 0 && d.$$typeof === e ? (Ee = "<" + (ye(d.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof d, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, z);
        }
        var Se = fi(d, v, T, ie, ue);
        if (Se == null)
          return Se;
        if (Y) {
          var Ue = v.children;
          if (Ue !== void 0)
            if (B)
              if (ir(Ue)) {
                for (var Rt = 0; Rt < Ue.length; Rt++)
                  ln(Ue[Rt], d);
                Object.freeze && Object.freeze(Ue);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ln(Ue, d);
        }
        if (bt.call(v, "key")) {
          var dt = ye(d), Be = Object.keys(v).filter(function(bi) {
            return bi !== "key";
          }), kr = Be.length > 0 ? "{key: someKey, " + Be.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pr[dt + kr]) {
            var gi = Be.length > 0 ? "{" + Be.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, kr, dt, gi, dt), Pr[dt + kr] = !0;
          }
        }
        return d === n ? Dr(Se) : Ut(Se), Se;
      }
    }
    function pi(d, v, T) {
      return cn(d, v, T, !0);
    }
    function mi(d, v, T) {
      return cn(d, v, T, !1);
    }
    var yi = mi, fn = pi;
    qr.Fragment = n, qr.jsx = yi, qr.jsxs = fn;
  }()), qr;
}
process.env.NODE_ENV === "production" ? pl() : ml();
var yl = ke.createContext(
  void 0
), fa = (t) => {
  const e = ke.useContext(yl);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, da = ke.createContext(!1), gl = () => ke.useContext(da);
da.Provider;
function bl() {
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
var _l = ke.createContext(bl()), El = () => ke.useContext(_l);
function ha(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function Ji() {
}
var vl = (t, e) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1));
}, Rl = (t) => {
  ke.useEffect(() => {
    t.clearReset();
  }, [t]);
}, Sl = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n,
  suspense: i
}) => t.isError && !e.isReset() && !t.isFetching && n && (i && t.data === void 0 || ha(r, [t.error, n])), wl = (t) => {
  const e = t.staleTime;
  t.suspense && (t.staleTime = typeof e == "function" ? (...r) => Math.max(e(...r), 1e3) : Math.max(e ?? 1e3, 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, Tl = (t, e) => t.isLoading && t.isFetching && !e, Ol = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, To = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function Al(t, e, r) {
  var m, A, C, S, I;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = fa(), i = gl(), s = El(), o = n.defaultQueryOptions(t);
  (A = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || A.call(
    m,
    o
  ), process.env.NODE_ENV !== "production" && (o.queryFn || console.error(
    `[${o.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), o._optimisticResults = i ? "isRestoring" : "optimistic", wl(o), vl(o, s), Rl(s);
  const u = !n.getQueryCache().get(o.queryHash), [l] = ke.useState(
    () => new e(
      n,
      o
    )
  ), p = l.getOptimisticResult(o), h = !i && t.subscribed !== !1;
  if (ke.useSyncExternalStore(
    ke.useCallback(
      (R) => {
        const $ = h ? l.subscribe(Vn.batchCalls(R)) : Ji;
        return l.updateResult(), $;
      },
      [l, h]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), ke.useEffect(() => {
    l.setOptions(o);
  }, [o, l]), Ol(o, p))
    throw To(o, l, s);
  if (Sl({
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
  ), o.experimental_prefetchInRender && !jr && Tl(p, i)) {
    const R = u ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      To(o, l, s)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (I = n.getQueryCache().get(o.queryHash)) == null ? void 0 : I.promise
    );
    R == null || R.catch(Ji).finally(() => {
      l.updateResult();
    });
  }
  return o.notifyOnChangeProps ? p : l.trackResult(p);
}
function Ae(t, e) {
  return Al(t, al);
}
function we(t, e) {
  const r = fa(), [n] = ke.useState(
    () => new cl(
      r,
      t
    )
  );
  ke.useEffect(() => {
    n.setOptions(t);
  }, [n, t]);
  const i = ke.useSyncExternalStore(
    ke.useCallback(
      (o) => n.subscribe(Vn.batchCalls(o)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), s = ke.useCallback(
    (o, u) => {
      n.mutate(o, u).catch(Ji);
    },
    [n]
  );
  if (i.error && ha(n.options.throwOnError, [i.error]))
    throw i.error;
  return { ...i, mutate: s, mutateAsync: i.mutate };
}
function pa(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Cl } = Object.prototype, { getPrototypeOf: ws } = Object, Gn = /* @__PURE__ */ ((t) => (e) => {
  const r = Cl.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), nt = (t) => (t = t.toLowerCase(), (e) => Gn(e) === t), zn = (t) => (e) => typeof e === t, { isArray: Er } = Array, Vr = zn("undefined");
function Nl(t) {
  return t !== null && !Vr(t) && t.constructor !== null && !Vr(t.constructor) && Ye(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const ma = nt("ArrayBuffer");
function Il(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && ma(t.buffer), e;
}
const Dl = zn("string"), Ye = zn("function"), ya = zn("number"), Wn = (t) => t !== null && typeof t == "object", Pl = (t) => t === !0 || t === !1, Tn = (t) => {
  if (Gn(t) !== "object")
    return !1;
  const e = ws(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, kl = nt("Date"), xl = nt("File"), Fl = nt("Blob"), ql = nt("FileList"), Ll = (t) => Wn(t) && Ye(t.pipe), Bl = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Ye(t.append) && ((e = Gn(t)) === "formdata" || // detect form-data instance
  e === "object" && Ye(t.toString) && t.toString() === "[object FormData]"));
}, $l = nt("URLSearchParams"), [Ul, Ml, jl, Vl] = ["ReadableStream", "Request", "Response", "Headers"].map(nt), Gl = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Kr(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), Er(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const s = r ? Object.getOwnPropertyNames(t) : Object.keys(t), o = s.length;
    let u;
    for (n = 0; n < o; n++)
      u = s[n], e.call(null, t[u], u, t);
  }
}
function ga(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const jt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ba = (t) => !Vr(t) && t !== jt;
function Xi() {
  const { caseless: t } = ba(this) && this || {}, e = {}, r = (n, i) => {
    const s = t && ga(e, i) || i;
    Tn(e[s]) && Tn(n) ? e[s] = Xi(e[s], n) : Tn(n) ? e[s] = Xi({}, n) : Er(n) ? e[s] = n.slice() : e[s] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Kr(arguments[n], r);
  return e;
}
const zl = (t, e, r, { allOwnKeys: n } = {}) => (Kr(e, (i, s) => {
  r && Ye(i) ? t[s] = pa(i, r) : t[s] = i;
}, { allOwnKeys: n }), t), Wl = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Hl = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Kl = (t, e, r, n) => {
  let i, s, o;
  const u = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
      o = i[s], (!n || n(o, t, e)) && !u[o] && (e[o] = t[o], u[o] = !0);
    t = r !== !1 && ws(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Yl = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Ql = (t) => {
  if (!t) return null;
  if (Er(t)) return t;
  let e = t.length;
  if (!ya(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Jl = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && ws(Uint8Array)), Xl = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const s = i.value;
    e.call(t, s[0], s[1]);
  }
}, Zl = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, ec = nt("HTMLFormElement"), tc = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Oo = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), rc = nt("RegExp"), _a = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Kr(r, (i, s) => {
    let o;
    (o = e(i, s, t)) !== !1 && (n[s] = o || i);
  }), Object.defineProperties(t, n);
}, nc = (t) => {
  _a(t, (e, r) => {
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
}, ic = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((s) => {
      r[s] = !0;
    });
  };
  return Er(t) ? n(t) : n(String(t).split(e)), r;
}, sc = () => {
}, oc = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, Ci = "abcdefghijklmnopqrstuvwxyz", Ao = "0123456789", Ea = {
  DIGIT: Ao,
  ALPHA: Ci,
  ALPHA_DIGIT: Ci + Ci.toUpperCase() + Ao
}, ac = (t = 16, e = Ea.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function uc(t) {
  return !!(t && Ye(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const lc = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (Wn(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const s = Er(n) ? [] : {};
        return Kr(n, (o, u) => {
          const l = r(o, i + 1);
          !Vr(l) && (s[u] = l);
        }), e[i] = void 0, s;
      }
    }
    return n;
  };
  return r(t, 0);
}, cc = nt("AsyncFunction"), fc = (t) => t && (Wn(t) || Ye(t)) && Ye(t.then) && Ye(t.catch), va = ((t, e) => t ? setImmediate : e ? ((r, n) => (jt.addEventListener("message", ({ source: i, data: s }) => {
  i === jt && s === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), jt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ye(jt.postMessage)
), dc = typeof queueMicrotask < "u" ? queueMicrotask.bind(jt) : typeof process < "u" && process.nextTick || va, b = {
  isArray: Er,
  isArrayBuffer: ma,
  isBuffer: Nl,
  isFormData: Bl,
  isArrayBufferView: Il,
  isString: Dl,
  isNumber: ya,
  isBoolean: Pl,
  isObject: Wn,
  isPlainObject: Tn,
  isReadableStream: Ul,
  isRequest: Ml,
  isResponse: jl,
  isHeaders: Vl,
  isUndefined: Vr,
  isDate: kl,
  isFile: xl,
  isBlob: Fl,
  isRegExp: rc,
  isFunction: Ye,
  isStream: Ll,
  isURLSearchParams: $l,
  isTypedArray: Jl,
  isFileList: ql,
  forEach: Kr,
  merge: Xi,
  extend: zl,
  trim: Gl,
  stripBOM: Wl,
  inherits: Hl,
  toFlatObject: Kl,
  kindOf: Gn,
  kindOfTest: nt,
  endsWith: Yl,
  toArray: Ql,
  forEachEntry: Xl,
  matchAll: Zl,
  isHTMLForm: ec,
  hasOwnProperty: Oo,
  hasOwnProp: Oo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _a,
  freezeMethods: nc,
  toObjectSet: ic,
  toCamelCase: tc,
  noop: sc,
  toFiniteNumber: oc,
  findKey: ga,
  global: jt,
  isContextDefined: ba,
  ALPHABET: Ea,
  generateString: ac,
  isSpecCompliantForm: uc,
  toJSONObject: lc,
  isAsyncFn: cc,
  isThenable: fc,
  setImmediate: va,
  asap: dc
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
const Ra = j.prototype, Sa = {};
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
  Sa[t] = { value: t };
});
Object.defineProperties(j, Sa);
Object.defineProperty(Ra, "isAxiosError", { value: !0 });
j.from = (t, e, r, n, i, s) => {
  const o = Object.create(Ra);
  return b.toFlatObject(t, o, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError"), j.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, s && Object.assign(o, s), o;
};
const hc = null;
function Zi(t) {
  return b.isPlainObject(t) || b.isArray(t);
}
function wa(t) {
  return b.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Co(t, e, r) {
  return t ? t.concat(e).map(function(i, s) {
    return i = wa(i), !r && s ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function pc(t) {
  return b.isArray(t) && !t.some(Zi);
}
const mc = b.toFlatObject(b, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Hn(t, e, r) {
  if (!b.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = b.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(I, R) {
    return !b.isUndefined(R[I]);
  });
  const n = r.metaTokens, i = r.visitor || h, s = r.dots, o = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(e);
  if (!b.isFunction(i))
    throw new TypeError("visitor must be a function");
  function p(S) {
    if (S === null) return "";
    if (b.isDate(S))
      return S.toISOString();
    if (!l && b.isBlob(S))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(S) || b.isTypedArray(S) ? l && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function h(S, I, R) {
    let $ = S;
    if (S && !R && typeof S == "object") {
      if (b.endsWith(I, "{}"))
        I = n ? I : I.slice(0, -2), S = JSON.stringify(S);
      else if (b.isArray(S) && pc(S) || (b.isFileList(S) || b.endsWith(I, "[]")) && ($ = b.toArray(S)))
        return I = wa(I), $.forEach(function(P, F) {
          !(b.isUndefined(P) || P === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Co([I], F, s) : o === null ? I : I + "[]",
            p(P)
          );
        }), !1;
    }
    return Zi(S) ? !0 : (e.append(Co(R, I, s), p(S)), !1);
  }
  const m = [], A = Object.assign(mc, {
    defaultVisitor: h,
    convertValue: p,
    isVisitable: Zi
  });
  function C(S, I) {
    if (!b.isUndefined(S)) {
      if (m.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + I.join("."));
      m.push(S), b.forEach(S, function($, k) {
        (!(b.isUndefined($) || $ === null) && i.call(
          e,
          $,
          b.isString(k) ? k.trim() : k,
          I,
          A
        )) === !0 && C($, I ? I.concat(k) : [k]);
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
function Ts(t, e) {
  this._pairs = [], t && Hn(t, this, e);
}
const Ta = Ts.prototype;
Ta.append = function(e, r) {
  this._pairs.push([e, r]);
};
Ta.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, No);
  } : No;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function yc(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Oa(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || yc, i = r && r.serialize;
  let s;
  if (i ? s = i(e, r) : s = b.isURLSearchParams(e) ? e.toString() : new Ts(e, r).toString(n), s) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Io {
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
const Aa = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gc = typeof URLSearchParams < "u" ? URLSearchParams : Ts, bc = typeof FormData < "u" ? FormData : null, _c = typeof Blob < "u" ? Blob : null, Ec = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gc,
    FormData: bc,
    Blob: _c
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Os = typeof window < "u" && typeof document < "u", es = typeof navigator == "object" && navigator || void 0, vc = Os && (!es || ["ReactNative", "NativeScript", "NS"].indexOf(es.product) < 0), Rc = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Sc = Os && window.location.href || "http://localhost", wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Os,
  hasStandardBrowserEnv: vc,
  hasStandardBrowserWebWorkerEnv: Rc,
  navigator: es,
  origin: Sc
}, Symbol.toStringTag, { value: "Module" })), We = {
  ...wc,
  ...Ec
};
function Tc(t, e) {
  return Hn(t, new We.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, s) {
      return We.isNode && b.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Oc(t) {
  return b.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Ac(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++)
    s = r[n], e[s] = t[s];
  return e;
}
function Ca(t) {
  function e(r, n, i, s) {
    let o = r[s++];
    if (o === "__proto__") return !0;
    const u = Number.isFinite(+o), l = s >= r.length;
    return o = !o && b.isArray(i) ? i.length : o, l ? (b.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !u) : ((!i[o] || !b.isObject(i[o])) && (i[o] = []), e(r, n, i[o], s) && b.isArray(i[o]) && (i[o] = Ac(i[o])), !u);
  }
  if (b.isFormData(t) && b.isFunction(t.entries)) {
    const r = {};
    return b.forEachEntry(t, (n, i) => {
      e(Oc(n), i, r, 0);
    }), r;
  }
  return null;
}
function Cc(t, e, r) {
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
  transitional: Aa,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, s = b.isObject(e);
    if (s && b.isHTMLForm(e) && (e = new FormData(e)), b.isFormData(e))
      return i ? JSON.stringify(Ca(e)) : e;
    if (b.isArrayBuffer(e) || b.isBuffer(e) || b.isStream(e) || b.isFile(e) || b.isBlob(e) || b.isReadableStream(e))
      return e;
    if (b.isArrayBufferView(e))
      return e.buffer;
    if (b.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let u;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Tc(e, this.formSerializer).toString();
      if ((u = b.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Hn(
          u ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || i ? (r.setContentType("application/json", !1), Cc(e)) : e;
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
const Nc = b.toObjectSet([
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
]), Ic = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || e[r] && Nc[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Do = Symbol("internals");
function Lr(t) {
  return t && String(t).trim().toLowerCase();
}
function On(t) {
  return t === !1 || t == null ? t : b.isArray(t) ? t.map(On) : String(t);
}
function Dc(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Pc = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
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
function kc(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function xc(t, e) {
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
    function s(u, l, p) {
      const h = Lr(l);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const m = b.findKey(i, h);
      (!m || i[m] === void 0 || p === !0 || p === void 0 && i[m] !== !1) && (i[m || l] = On(u));
    }
    const o = (u, l) => b.forEach(u, (p, h) => s(p, h, l));
    if (b.isPlainObject(e) || e instanceof this.constructor)
      o(e, r);
    else if (b.isString(e) && (e = e.trim()) && !Pc(e))
      o(Ic(e), r);
    else if (b.isHeaders(e))
      for (const [u, l] of e.entries())
        s(l, u, n);
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
          return Dc(i);
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
      const u = e ? kc(s) : String(s).trim();
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
    const n = (this[Do] = this[Do] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const u = Lr(o);
      n[u] || (xc(i, o), n[u] = !0);
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
function Ii(t, e) {
  const r = this || Yr, n = e || r, i = He.from(n.headers);
  let s = n.data;
  return b.forEach(t, function(u) {
    s = u.call(r, s, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), s;
}
function Na(t) {
  return !!(t && t.__CANCEL__);
}
function vr(t, e, r) {
  j.call(this, t ?? "canceled", j.ERR_CANCELED, e, r), this.name = "CanceledError";
}
b.inherits(vr, j, {
  __CANCEL__: !0
});
function Ia(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new j(
    "Request failed with status code " + r.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Fc(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function qc(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, s = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const p = Date.now(), h = n[s];
    o || (o = p), r[i] = l, n[i] = p;
    let m = s, A = 0;
    for (; m !== i; )
      A += r[m++], m = m % t;
    if (i = (i + 1) % t, i === s && (s = (s + 1) % t), p - o < e)
      return;
    const C = h && p - h;
    return C ? Math.round(A * 1e3 / C) : void 0;
  };
}
function Lc(t, e) {
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
const Fn = (t, e, r = 3) => {
  let n = 0;
  const i = qc(50, 250);
  return Lc((s) => {
    const o = s.loaded, u = s.lengthComputable ? s.total : void 0, l = o - n, p = i(l), h = o <= u;
    n = o;
    const m = {
      loaded: o,
      total: u,
      progress: u ? o / u : void 0,
      bytes: l,
      rate: p || void 0,
      estimated: p && u && h ? (u - o) / p : void 0,
      event: s,
      lengthComputable: u != null,
      [e ? "download" : "upload"]: !0
    };
    t(m);
  }, r);
}, Po = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, ko = (t) => (...e) => b.asap(() => t(...e)), Bc = We.hasStandardBrowserEnv ? (
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
), $c = We.hasStandardBrowserEnv ? (
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
function Uc(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Mc(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Da(t, e) {
  return t && !Uc(e) ? Mc(t, e) : e;
}
const xo = (t) => t instanceof He ? { ...t } : t;
function Qt(t, e) {
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
  const l = {
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
    headers: (p, h) => i(xo(p), xo(h), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, t, e)), function(h) {
    const m = l[h] || i, A = m(t[h], e[h], h);
    b.isUndefined(A) && m !== u || (r[h] = A);
  }), r;
}
const Pa = (t) => {
  const e = Qt({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: s, headers: o, auth: u } = e;
  e.headers = o = He.from(o), e.url = Oa(Da(e.baseURL, e.url), t.params, t.paramsSerializer), u && o.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let l;
  if (b.isFormData(r)) {
    if (We.hasStandardBrowserEnv || We.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((l = o.getContentType()) !== !1) {
      const [p, ...h] = l ? l.split(";").map((m) => m.trim()).filter(Boolean) : [];
      o.setContentType([p || "multipart/form-data", ...h].join("; "));
    }
  }
  if (We.hasStandardBrowserEnv && (n && b.isFunction(n) && (n = n(e)), n || n !== !1 && Bc(e.url))) {
    const p = i && s && $c.read(s);
    p && o.set(i, p);
  }
  return e;
}, jc = typeof XMLHttpRequest < "u", Vc = jc && function(t) {
  return new Promise(function(r, n) {
    const i = Pa(t);
    let s = i.data;
    const o = He.from(i.headers).normalize();
    let { responseType: u, onUploadProgress: l, onDownloadProgress: p } = i, h, m, A, C, S;
    function I() {
      C && C(), S && S(), i.cancelToken && i.cancelToken.unsubscribe(h), i.signal && i.signal.removeEventListener("abort", h);
    }
    let R = new XMLHttpRequest();
    R.open(i.method.toUpperCase(), i.url, !0), R.timeout = i.timeout;
    function $() {
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
      Ia(function(te) {
        r(te), I();
      }, function(te) {
        n(te), I();
      }, x), R = null;
    }
    "onloadend" in R ? R.onloadend = $ : R.onreadystatechange = function() {
      !R || R.readyState !== 4 || R.status === 0 && !(R.responseURL && R.responseURL.indexOf("file:") === 0) || setTimeout($);
    }, R.onabort = function() {
      R && (n(new j("Request aborted", j.ECONNABORTED, t, R)), R = null);
    }, R.onerror = function() {
      n(new j("Network Error", j.ERR_NETWORK, t, R)), R = null;
    }, R.ontimeout = function() {
      let F = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const x = i.transitional || Aa;
      i.timeoutErrorMessage && (F = i.timeoutErrorMessage), n(new j(
        F,
        x.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        t,
        R
      )), R = null;
    }, s === void 0 && o.setContentType(null), "setRequestHeader" in R && b.forEach(o.toJSON(), function(F, x) {
      R.setRequestHeader(x, F);
    }), b.isUndefined(i.withCredentials) || (R.withCredentials = !!i.withCredentials), u && u !== "json" && (R.responseType = i.responseType), p && ([A, S] = Fn(p, !0), R.addEventListener("progress", A)), l && R.upload && ([m, C] = Fn(l), R.upload.addEventListener("progress", m), R.upload.addEventListener("loadend", C)), (i.cancelToken || i.signal) && (h = (P) => {
      R && (n(!P || P.type ? new vr(null, t, R) : P), R.abort(), R = null);
    }, i.cancelToken && i.cancelToken.subscribe(h), i.signal && (i.signal.aborted ? h() : i.signal.addEventListener("abort", h)));
    const k = Fc(i.url);
    if (k && We.protocols.indexOf(k) === -1) {
      n(new j("Unsupported protocol " + k + ":", j.ERR_BAD_REQUEST, t));
      return;
    }
    R.send(s || null);
  });
}, Gc = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), i;
    const s = function(p) {
      if (!i) {
        i = !0, u();
        const h = p instanceof Error ? p : this.reason;
        n.abort(h instanceof j ? h : new vr(h instanceof Error ? h.message : h));
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
    const { signal: l } = n;
    return l.unsubscribe = () => b.asap(u), l;
  }
}, zc = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + e, yield t.slice(n, i), n = i;
}, Wc = async function* (t, e) {
  for await (const r of Hc(t))
    yield* zc(r, e);
}, Hc = async function* (t) {
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
}, Fo = (t, e, r, n) => {
  const i = Wc(t, e);
  let s = 0, o, u = (l) => {
    o || (o = !0, n && n(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: p, value: h } = await i.next();
        if (p) {
          u(), l.close();
          return;
        }
        let m = h.byteLength;
        if (r) {
          let A = s += m;
          r(A);
        }
        l.enqueue(new Uint8Array(h));
      } catch (p) {
        throw u(p), p;
      }
    },
    cancel(l) {
      return u(l), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Kn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ka = Kn && typeof ReadableStream == "function", Kc = Kn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), xa = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Yc = ka && xa(() => {
  let t = !1;
  const e = new Request(We.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), qo = 64 * 1024, ts = ka && xa(() => b.isReadableStream(new Response("").body)), qn = {
  stream: ts && ((t) => t.body)
};
Kn && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !qn[e] && (qn[e] = b.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new j(`Response type '${e}' is not supported`, j.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Qc = async (t) => {
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
    return (await Kc(t)).byteLength;
}, Jc = async (t, e) => {
  const r = b.toFiniteNumber(t.getContentLength());
  return r ?? Qc(e);
}, Xc = Kn && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: i,
    cancelToken: s,
    timeout: o,
    onDownloadProgress: u,
    onUploadProgress: l,
    responseType: p,
    headers: h,
    withCredentials: m = "same-origin",
    fetchOptions: A
  } = Pa(t);
  p = p ? (p + "").toLowerCase() : "text";
  let C = Gc([i, s && s.toAbortSignal()], o), S;
  const I = C && C.unsubscribe && (() => {
    C.unsubscribe();
  });
  let R;
  try {
    if (l && Yc && r !== "get" && r !== "head" && (R = await Jc(h, n)) !== 0) {
      let x = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), G;
      if (b.isFormData(n) && (G = x.headers.get("content-type")) && h.setContentType(G), x.body) {
        const [te, V] = Po(
          R,
          Fn(ko(l))
        );
        n = Fo(x.body, qo, te, V);
      }
    }
    b.isString(m) || (m = m ? "include" : "omit");
    const $ = "credentials" in Request.prototype;
    S = new Request(e, {
      ...A,
      signal: C,
      method: r.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: $ ? m : void 0
    });
    let k = await fetch(S);
    const P = ts && (p === "stream" || p === "response");
    if (ts && (u || P && I)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((Te) => {
        x[Te] = k[Te];
      });
      const G = b.toFiniteNumber(k.headers.get("content-length")), [te, V] = u && Po(
        G,
        Fn(ko(u), !0)
      ) || [];
      k = new Response(
        Fo(k.body, qo, te, () => {
          V && V(), I && I();
        }),
        x
      );
    }
    p = p || "text";
    let F = await qn[b.findKey(qn, p) || "text"](k, t);
    return !P && I && I(), await new Promise((x, G) => {
      Ia(x, G, {
        data: F,
        headers: He.from(k.headers),
        status: k.status,
        statusText: k.statusText,
        config: t,
        request: S
      });
    });
  } catch ($) {
    throw I && I(), $ && $.name === "TypeError" && /fetch/i.test($.message) ? Object.assign(
      new j("Network Error", j.ERR_NETWORK, t, S),
      {
        cause: $.cause || $
      }
    ) : j.from($, $ && $.code, t, S);
  }
}), rs = {
  http: hc,
  xhr: Vc,
  fetch: Xc
};
b.forEach(rs, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Lo = (t) => `- ${t}`, Zc = (t) => b.isFunction(t) || t === null || t === !1, Fa = {
  getAdapter: (t) => {
    t = b.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let s = 0; s < e; s++) {
      r = t[s];
      let o;
      if (n = r, !Zc(r) && (n = rs[(o = String(r)).toLowerCase()], n === void 0))
        throw new j(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(i).map(
        ([u, l]) => `adapter ${u} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? s.length > 1 ? `since :
` + s.map(Lo).join(`
`) : " " + Lo(s[0]) : "as no adapter specified";
      throw new j(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: rs
};
function Di(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new vr(null, t);
}
function Bo(t) {
  return Di(t), t.headers = He.from(t.headers), t.data = Ii.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Fa.getAdapter(t.adapter || Yr.adapter)(t).then(function(n) {
    return Di(t), n.data = Ii.call(
      t,
      t.transformResponse,
      n
    ), n.headers = He.from(n.headers), n;
  }, function(n) {
    return Na(n) || (Di(t), n && n.response && (n.response.data = Ii.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = He.from(n.response.headers))), Promise.reject(n);
  });
}
const qa = "1.7.7", As = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  As[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const $o = {};
As.transitional = function(e, r, n) {
  function i(s, o) {
    return "[Axios v" + qa + "] Transitional option '" + s + "'" + o + (n ? ". " + n : "");
  }
  return (s, o, u) => {
    if (e === !1)
      throw new j(
        i(o, " has been removed" + (r ? " in " + r : "")),
        j.ERR_DEPRECATED
      );
    return r && !$o[o] && ($o[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(s, o, u) : !0;
  };
};
function ef(t, e, r) {
  if (typeof t != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i], o = e[s];
    if (o) {
      const u = t[s], l = u === void 0 || o(u, s, t);
      if (l !== !0)
        throw new j("option " + s + " must be " + l, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new j("Unknown option " + s, j.ERR_BAD_OPTION);
  }
}
const ns = {
  assertOptions: ef,
  validators: As
}, St = ns.validators;
class Ht {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Io(),
      response: new Io()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Qt(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 && ns.assertOptions(n, {
      silentJSONParsing: St.transitional(St.boolean),
      forcedJSONParsing: St.transitional(St.boolean),
      clarifyTimeoutError: St.transitional(St.boolean)
    }, !1), i != null && (b.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : ns.assertOptions(i, {
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
    let l = !0;
    this.interceptors.request.forEach(function(I) {
      typeof I.runWhen == "function" && I.runWhen(r) === !1 || (l = l && I.synchronous, u.unshift(I.fulfilled, I.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(I) {
      p.push(I.fulfilled, I.rejected);
    });
    let h, m = 0, A;
    if (!l) {
      const S = [Bo.bind(this), void 0];
      for (S.unshift.apply(S, u), S.push.apply(S, p), A = S.length, h = Promise.resolve(r); m < A; )
        h = h.then(S[m++], S[m++]);
      return h;
    }
    A = u.length;
    let C = r;
    for (m = 0; m < A; ) {
      const S = u[m++], I = u[m++];
      try {
        C = S(C);
      } catch (R) {
        I.call(this, R);
        break;
      }
    }
    try {
      h = Bo.call(this, C);
    } catch (S) {
      return Promise.reject(S);
    }
    for (m = 0, A = p.length; m < A; )
      h = h.then(p[m++], p[m++]);
    return h;
  }
  getUri(e) {
    e = Qt(this.defaults, e);
    const r = Da(e.baseURL, e.url);
    return Oa(r, e.params, e.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(e) {
  Ht.prototype[e] = function(r, n) {
    return this.request(Qt(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(s, o, u) {
      return this.request(Qt(u || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  Ht.prototype[e] = r(), Ht.prototype[e + "Form"] = r(!0);
});
class Cs {
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
      n.reason || (n.reason = new vr(s, o, u), r(n.reason));
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
      token: new Cs(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
function tf(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function rf(t) {
  return b.isObject(t) && t.isAxiosError === !0;
}
const is = {
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
Object.entries(is).forEach(([t, e]) => {
  is[e] = t;
});
function La(t) {
  const e = new Ht(t), r = pa(Ht.prototype.request, e);
  return b.extend(r, Ht.prototype, e, { allOwnKeys: !0 }), b.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return La(Qt(t, i));
  }, r;
}
const Oe = La(Yr);
Oe.Axios = Ht;
Oe.CanceledError = vr;
Oe.CancelToken = Cs;
Oe.isCancel = Na;
Oe.VERSION = qa;
Oe.toFormData = Hn;
Oe.AxiosError = j;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(e) {
  return Promise.all(e);
};
Oe.spread = tf;
Oe.isAxiosError = rf;
Oe.mergeConfig = Qt;
Oe.AxiosHeaders = He;
Oe.formToJSON = (t) => Ca(b.isHTMLForm(t) ? new FormData(t) : t);
Oe.getAdapter = Fa.getAdapter;
Oe.HttpStatusCode = is;
Oe.default = Oe;
const Ns = "http://ec2-3-111-34-32.ap-south-1.compute.amazonaws.com", nf = () => Oe.create({
  baseURL: Ns,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class _e {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = _e.createService();
  }
  static createService() {
    return _e._axiosInstance || (_e._axiosInstance = nf(), _e.setAuthHeaderInterceptor(), _e._axiosInstance.interceptors.response.use(_e.handleSuccess, _e.handleError)), _e._axiosInstance;
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
    _e._axiosInstance.interceptors.request.use(
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
    _e._axiosInstance.interceptors.response.use(
      _e.handleSuccess,
      _e.handleError
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
        const s = await _e.refreshAccessToken();
        return _e.setAccessToken(s), r.headers.set("Authorization", `Bearer ${s}`), _e._axiosInstance(r);
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
const lt = /* @__PURE__ */ Object.create(null);
lt.open = "0";
lt.close = "1";
lt.ping = "2";
lt.pong = "3";
lt.message = "4";
lt.upgrade = "5";
lt.noop = "6";
const An = /* @__PURE__ */ Object.create(null);
Object.keys(lt).forEach((t) => {
  An[lt[t]] = t;
});
const ss = { type: "error", data: "parser error" }, Ba = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", $a = typeof ArrayBuffer == "function", Ua = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Is = ({ type: t, data: e }, r, n) => Ba && e instanceof Blob ? r ? n(e) : Uo(e, n) : $a && (e instanceof ArrayBuffer || Ua(e)) ? r ? n(e) : Uo(new Blob([e]), n) : n(lt[t] + (e || "")), Uo = (t, e) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    e("b" + (n || ""));
  }, r.readAsDataURL(t);
};
function Mo(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Pi;
function sf(t, e) {
  if (Ba && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Mo).then(e);
  if ($a && (t.data instanceof ArrayBuffer || Ua(t.data)))
    return e(Mo(t.data));
  Is(t, !1, (r) => {
    Pi || (Pi = new TextEncoder()), e(Pi.encode(r));
  });
}
const jo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Mr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < jo.length; t++)
  Mr[jo.charCodeAt(t)] = t;
const of = (t) => {
  let e = t.length * 0.75, r = t.length, n, i = 0, s, o, u, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const p = new ArrayBuffer(e), h = new Uint8Array(p);
  for (n = 0; n < r; n += 4)
    s = Mr[t.charCodeAt(n)], o = Mr[t.charCodeAt(n + 1)], u = Mr[t.charCodeAt(n + 2)], l = Mr[t.charCodeAt(n + 3)], h[i++] = s << 2 | o >> 4, h[i++] = (o & 15) << 4 | u >> 2, h[i++] = (u & 3) << 6 | l & 63;
  return p;
}, af = typeof ArrayBuffer == "function", Ds = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Ma(t, e)
    };
  const r = t.charAt(0);
  return r === "b" ? {
    type: "message",
    data: uf(t.substring(1), e)
  } : An[r] ? t.length > 1 ? {
    type: An[r],
    data: t.substring(1)
  } : {
    type: An[r]
  } : ss;
}, uf = (t, e) => {
  if (af) {
    const r = of(t);
    return Ma(r, e);
  } else
    return { base64: !0, data: t };
}, Ma = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, ja = "", lf = (t, e) => {
  const r = t.length, n = new Array(r);
  let i = 0;
  t.forEach((s, o) => {
    Is(s, !1, (u) => {
      n[o] = u, ++i === r && e(n.join(ja));
    });
  });
}, cf = (t, e) => {
  const r = t.split(ja), n = [];
  for (let i = 0; i < r.length; i++) {
    const s = Ds(r[i], e);
    if (n.push(s), s.type === "error")
      break;
  }
  return n;
};
function ff() {
  return new TransformStream({
    transform(t, e) {
      sf(t, (r) => {
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
let ki;
function _n(t) {
  return t.reduce((e, r) => e + r.length, 0);
}
function En(t, e) {
  if (t[0].length === e)
    return t.shift();
  const r = new Uint8Array(e);
  let n = 0;
  for (let i = 0; i < e; i++)
    r[i] = t[0][n++], n === t[0].length && (t.shift(), n = 0);
  return t.length && n < t[0].length && (t[0] = t[0].slice(n)), r;
}
function df(t, e) {
  ki || (ki = new TextDecoder());
  const r = [];
  let n = 0, i = -1, s = !1;
  return new TransformStream({
    transform(o, u) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (_n(r) < 1)
            break;
          const l = En(r, 1);
          s = (l[0] & 128) === 128, i = l[0] & 127, i < 126 ? n = 3 : i === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (_n(r) < 2)
            break;
          const l = En(r, 2);
          i = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (_n(r) < 8)
            break;
          const l = En(r, 8), p = new DataView(l.buffer, l.byteOffset, l.length), h = p.getUint32(0);
          if (h > Math.pow(2, 21) - 1) {
            u.enqueue(ss);
            break;
          }
          i = h * Math.pow(2, 32) + p.getUint32(4), n = 3;
        } else {
          if (_n(r) < i)
            break;
          const l = En(r, i);
          u.enqueue(Ds(s ? l : ki.decode(l), e)), n = 0;
        }
        if (i === 0 || i > t) {
          u.enqueue(ss);
          break;
        }
      }
    }
  });
}
const Va = 4;
function Ie(t) {
  if (t) return hf(t);
}
function hf(t) {
  for (var e in Ie.prototype)
    t[e] = Ie.prototype[e];
  return t;
}
Ie.prototype.on = Ie.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Ie.prototype.once = function(t, e) {
  function r() {
    this.off(t, r), e.apply(this, arguments);
  }
  return r.fn = e, this.on(t, r), this;
};
Ie.prototype.off = Ie.prototype.removeListener = Ie.prototype.removeAllListeners = Ie.prototype.removeEventListener = function(t, e) {
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
Ie.prototype.emit = function(t) {
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
Ie.prototype.emitReserved = Ie.prototype.emit;
Ie.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Ie.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const Yn = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, r) => r(e, 0), Ze = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), pf = "arraybuffer";
function Ga(t, ...e) {
  return e.reduce((r, n) => (t.hasOwnProperty(n) && (r[n] = t[n]), r), {});
}
const mf = Ze.setTimeout, yf = Ze.clearTimeout;
function Qn(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = mf.bind(Ze), t.clearTimeoutFn = yf.bind(Ze)) : (t.setTimeoutFn = Ze.setTimeout.bind(Ze), t.clearTimeoutFn = Ze.clearTimeout.bind(Ze));
}
const gf = 1.33;
function bf(t) {
  return typeof t == "string" ? _f(t) : Math.ceil((t.byteLength || t.size) * gf);
}
function _f(t) {
  let e = 0, r = 0;
  for (let n = 0, i = t.length; n < i; n++)
    e = t.charCodeAt(n), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function za() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Ef(t) {
  let e = "";
  for (let r in t)
    t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e;
}
function vf(t) {
  let e = {}, r = t.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let s = r[n].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
class Rf extends Error {
  constructor(e, r, n) {
    super(e), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class Ps extends Ie {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Qn(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
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
    return super.emitReserved("error", new Rf(e, r, n)), this;
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
    const r = Ds(e, this.socket.binaryType);
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
    const r = Ef(e);
    return r.length ? "?" + r : "";
  }
}
class Sf extends Ps {
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
    cf(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, lf(e, (r) => {
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
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = za()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r);
  }
}
let Wa = !1;
try {
  Wa = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const wf = Wa;
function Tf() {
}
class Of extends Sf {
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
let fr = class Cn extends Ie {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, r, n) {
    super(), this.createRequest = e, Qn(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const r = Ga(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = Cn.requestsCount++, Cn.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Tf, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Cn.requests[this._index], this._xhr = null;
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
fr.requestsCount = 0;
fr.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Vo);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Ze ? "pagehide" : "unload";
    addEventListener(t, Vo, !1);
  }
}
function Vo() {
  for (let t in fr.requests)
    fr.requests.hasOwnProperty(t) && fr.requests[t].abort();
}
const Af = function() {
  const t = Ha({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class Cf extends Of {
  constructor(e) {
    super(e);
    const r = e && e.forceBase64;
    this.supportsBinary = Af && !r;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new fr(Ha, this.uri(), e);
  }
}
function Ha(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || wf))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Ze[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Ka = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Nf extends Ps {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), r = this.opts.protocols, n = Ka ? {} : Ga(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Is(n, this.supportsBinary, (s) => {
        try {
          this.doWrite(n, s);
        } catch {
        }
        i && Yn(() => {
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
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = za()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r);
  }
}
const xi = Ze.WebSocket || Ze.MozWebSocket;
class If extends Nf {
  createSocket(e, r, n) {
    return Ka ? new xi(e, r, n) : r ? new xi(e, r) : new xi(e);
  }
  doWrite(e, r) {
    this.ws.send(r);
  }
}
class Df extends Ps {
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
        const r = df(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(r).getReader(), i = ff();
        i.readable.pipeTo(e.writable), this._writer = i.writable.getWriter();
        const s = () => {
          n.read().then(({ done: u, value: l }) => {
            u || (this.onPacket(l), s());
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
        i && Yn(() => {
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
const Pf = {
  websocket: If,
  webtransport: Df,
  polling: Cf
}, kf = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, xf = [
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
function os(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const e = t, r = t.indexOf("["), n = t.indexOf("]");
  r != -1 && n != -1 && (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ";") + t.substring(n, t.length));
  let i = kf.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[xf[o]] = i[o] || "";
  return r != -1 && n != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Ff(s, s.path), s.queryKey = qf(s, s.query), s;
}
function Ff(t, e) {
  const r = /\/{2,9}/g, n = e.replace(r, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function qf(t, e) {
  const r = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, s) {
    i && (r[i] = s);
  }), r;
}
const as = typeof addEventListener == "function" && typeof removeEventListener == "function", Nn = [];
as && addEventListener("offline", () => {
  Nn.forEach((t) => t());
}, !1);
class Pt extends Ie {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, r) {
    if (super(), this.binaryType = pf, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (r = e, e = null), e) {
      const n = os(e);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = os(r.host).host);
    Qn(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n) => {
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = vf(this.opts.query)), as && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
    r.EIO = Va, r.transport = e, this.id && (r.sid = this.id);
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
      if (i && (r += bf(i)), n > 0 && r > this._maxPayload)
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
    return e && (this._pingTimeoutTime = 0, Yn(() => {
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), as && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = Nn.indexOf(this._offlineEventListener);
        n !== -1 && Nn.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Pt.protocol = Va;
class Lf extends Pt {
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
            const A = new Error("probe error");
            A.transport = r.name, this.emitReserved("upgradeError", A);
          }
      }));
    };
    function s() {
      n || (n = !0, h(), r.close(), r = null);
    }
    const o = (m) => {
      const A = new Error("probe error: " + m);
      A.transport = r.name, s(), this.emitReserved("upgradeError", A);
    };
    function u() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function p(m) {
      r && m.name !== r.name && s();
    }
    const h = () => {
      r.removeListener("open", i), r.removeListener("error", o), r.removeListener("close", u), this.off("close", l), this.off("upgrading", p);
    };
    r.once("open", i), r.once("error", o), r.once("close", u), this.once("close", l), this.once("upgrading", p), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
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
let Bf = class extends Lf {
  constructor(e, r = {}) {
    const n = typeof e == "object" ? e : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((i) => Pf[i]).filter((i) => !!i)), super(e, n);
  }
};
function $f(t, e = "", r) {
  let n = t;
  r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), n = os(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + s + ":" + n.port + e, n.href = n.protocol + "://" + s + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const Uf = typeof ArrayBuffer == "function", Mf = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Ya = Object.prototype.toString, jf = typeof Blob == "function" || typeof Blob < "u" && Ya.call(Blob) === "[object BlobConstructor]", Vf = typeof File == "function" || typeof File < "u" && Ya.call(File) === "[object FileConstructor]";
function ks(t) {
  return Uf && (t instanceof ArrayBuffer || Mf(t)) || jf && t instanceof Blob || Vf && t instanceof File;
}
function In(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let r = 0, n = t.length; r < n; r++)
      if (In(t[r]))
        return !0;
    return !1;
  }
  if (ks(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return In(t.toJSON(), !0);
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && In(t[r]))
      return !0;
  return !1;
}
function Gf(t) {
  const e = [], r = t.data, n = t;
  return n.data = us(r, e), n.attachments = e.length, { packet: n, buffers: e };
}
function us(t, e) {
  if (!t)
    return t;
  if (ks(t)) {
    const r = { _placeholder: !0, num: e.length };
    return e.push(t), r;
  } else if (Array.isArray(t)) {
    const r = new Array(t.length);
    for (let n = 0; n < t.length; n++)
      r[n] = us(t[n], e);
    return r;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const r = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (r[n] = us(t[n], e));
    return r;
  }
  return t;
}
function zf(t, e) {
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
const Wf = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Hf = 5;
var X;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(X || (X = {}));
class Kf {
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
    return (e.type === X.EVENT || e.type === X.ACK) && In(e) ? this.encodeAsBinary({
      type: e.type === X.EVENT ? X.BINARY_EVENT : X.BINARY_ACK,
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
    return (e.type === X.BINARY_EVENT || e.type === X.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const r = Gf(e), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
function Go(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class xs extends Ie {
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
      const n = r.type === X.BINARY_EVENT;
      n || r.type === X.BINARY_ACK ? (r.type = n ? X.EVENT : X.ACK, this.reconstructor = new Yf(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (ks(e) || e.base64)
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
    if (X[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === X.BINARY_EVENT || n.type === X.BINARY_ACK) {
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
      if (xs.isPayloadValid(n.type, s))
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
      case X.CONNECT:
        return Go(r);
      case X.DISCONNECT:
        return r === void 0;
      case X.CONNECT_ERROR:
        return typeof r == "string" || Go(r);
      case X.EVENT:
      case X.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Wf.indexOf(r[0]) === -1);
      case X.ACK:
      case X.BINARY_ACK:
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
class Yf {
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
      const r = zf(this.reconPack, this.buffers);
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
const Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: xs,
  Encoder: Kf,
  get PacketType() {
    return X;
  },
  protocol: Hf
}, Symbol.toStringTag, { value: "Module" }));
function tt(t, e, r) {
  return t.on(e, r), function() {
    t.off(e, r);
  };
}
const Jf = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Qa extends Ie {
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
    if (Jf.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const o = {
      type: X.EVENT,
      data: r
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const h = this.ids++, m = r.pop();
      this._registerAckCallback(h, m), o.id = h;
    }
    const u = (i = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || i === void 0 ? void 0 : i.writable, l = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
    return this.flags.volatile && !u || (l ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
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
      type: X.CONNECT,
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
        case X.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case X.EVENT:
        case X.BINARY_EVENT:
          this.onevent(e);
          break;
        case X.ACK:
        case X.BINARY_ACK:
          this.onack(e);
          break;
        case X.DISCONNECT:
          this.ondisconnect();
          break;
        case X.CONNECT_ERROR:
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
        type: X.ACK,
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
    return this.connected && this.packet({ type: X.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Rr(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Rr.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), r = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + r : t - r;
  }
  return Math.min(t, this.max) | 0;
};
Rr.prototype.reset = function() {
  this.attempts = 0;
};
Rr.prototype.setMin = function(t) {
  this.ms = t;
};
Rr.prototype.setMax = function(t) {
  this.max = t;
};
Rr.prototype.setJitter = function(t) {
  this.jitter = t;
};
class cs extends Ie {
  constructor(e, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Qn(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Rr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
    const i = r.parser || Qf;
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
    this.engine = new Bf(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = tt(r, "open", function() {
      n.onopen(), e && e();
    }), s = (u) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", u), e ? e(u) : this.maybeReconnectOnOpen();
    }, o = tt(r, "error", s);
    if (this._timeout !== !1) {
      const u = this._timeout, l = this.setTimeoutFn(() => {
        i(), s(new Error("timeout")), r.close();
      }, u);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
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
    Yn(() => {
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Qa(this, e, r), this.nsps[e] = n), n;
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
function Dn(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const r = $f(t, e.path || "/socket.io"), n = r.source, i = r.id, s = r.path, o = Br[i] && s in Br[i].nsps, u = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return u ? l = new cs(n, e) : (Br[i] || (Br[i] = new cs(n, e)), l = Br[i]), r.query && !e.query && (e.query = r.queryKey), l.socket(r.path, e);
}
Object.assign(Dn, {
  Manager: cs,
  Socket: Qa,
  io: Dn,
  connect: Dn
});
Dn(Ns, {
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
const fs = {
  address1: null,
  address2: null,
  location: null,
  city: null,
  state: null,
  pincode: null
};
function Zt(t) {
  this._maxSize = t, this.clear();
}
Zt.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
Zt.prototype.get = function(t) {
  return this._values[t];
};
Zt.prototype.set = function(t, e) {
  return this._size >= this._maxSize && this.clear(), t in this._values || this._size++, this._values[t] = e;
};
var Xf = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Ja = /^\d+$/, Zf = /^\d/, ed = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, td = /^\s*(['"]?)(.*?)(\1)\s*$/, Fs = 512, zo = new Zt(Fs), Wo = new Zt(Fs), Ho = new Zt(Fs), Kt = {
  Cache: Zt,
  split: ds,
  normalizePath: Fi,
  setter: function(t) {
    var e = Fi(t);
    return Wo.get(t) || Wo.set(t, function(n, i) {
      for (var s = 0, o = e.length, u = n; s < o - 1; ) {
        var l = e[s];
        if (l === "__proto__" || l === "constructor" || l === "prototype")
          return n;
        u = u[e[s++]];
      }
      u[e[s]] = i;
    });
  },
  getter: function(t, e) {
    var r = Fi(t);
    return Ho.get(t) || Ho.set(t, function(i) {
      for (var s = 0, o = r.length; s < o; )
        if (i != null || !e) i = i[r[s++]];
        else return;
      return i;
    });
  },
  join: function(t) {
    return t.reduce(function(e, r) {
      return e + (qs(r) || Ja.test(r) ? "[" + r + "]" : (e ? "." : "") + r);
    }, "");
  },
  forEach: function(t, e, r) {
    rd(Array.isArray(t) ? t : ds(t), e, r);
  }
};
function Fi(t) {
  return zo.get(t) || zo.set(
    t,
    ds(t).map(function(e) {
      return e.replace(td, "$2");
    })
  );
}
function ds(t) {
  return t.match(Xf) || [""];
}
function rd(t, e, r) {
  var n = t.length, i, s, o, u;
  for (s = 0; s < n; s++)
    i = t[s], i && (sd(i) && (i = '"' + i + '"'), u = qs(i), o = !u && /^\d+$/.test(i), e.call(r, i, u, o, s, t));
}
function qs(t) {
  return typeof t == "string" && t && ["'", '"'].indexOf(t.charAt(0)) !== -1;
}
function nd(t) {
  return t.match(Zf) && !t.match(Ja);
}
function id(t) {
  return ed.test(t);
}
function sd(t) {
  return !qs(t) && (nd(t) || id(t));
}
const od = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, Jn = (t) => t.match(od) || [], Xn = (t) => t[0].toUpperCase() + t.slice(1), Ls = (t, e) => Jn(t).join(e).toLowerCase(), Xa = (t) => Jn(t).reduce(
  (e, r) => `${e}${e ? r[0].toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()}`,
  ""
), ad = (t) => Xn(Xa(t)), ud = (t) => Ls(t, "_"), ld = (t) => Ls(t, "-"), cd = (t) => Xn(Ls(t, " ")), fd = (t) => Jn(t).map(Xn).join(" ");
var qi = {
  words: Jn,
  upperFirst: Xn,
  camelCase: Xa,
  pascalCase: ad,
  snakeCase: ud,
  kebabCase: ld,
  sentenceCase: cd,
  titleCase: fd
}, Bs = { exports: {} };
Bs.exports = function(t) {
  return Za(dd(t), t);
};
Bs.exports.array = Za;
function Za(t, e) {
  var r = t.length, n = new Array(r), i = {}, s = r, o = hd(e), u = pd(t);
  for (e.forEach(function(p) {
    if (!u.has(p[0]) || !u.has(p[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    i[s] || l(t[s], s, /* @__PURE__ */ new Set());
  return n;
  function l(p, h, m) {
    if (m.has(p)) {
      var A;
      try {
        A = ", node was:" + JSON.stringify(p);
      } catch {
        A = "";
      }
      throw new Error("Cyclic dependency" + A);
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
          l(S, u.get(S), m);
        } while (h);
        m.delete(p);
      }
      n[--r] = p;
    }
  }
}
function dd(t) {
  for (var e = /* @__PURE__ */ new Set(), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    e.add(i[0]), e.add(i[1]);
  }
  return Array.from(e);
}
function hd(t) {
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    e.has(i[0]) || e.set(i[0], /* @__PURE__ */ new Set()), e.has(i[1]) || e.set(i[1], /* @__PURE__ */ new Set()), e.get(i[0]).add(i[1]);
  }
  return e;
}
function pd(t) {
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = t.length; r < n; r++)
    e.set(t[r], r);
  return e;
}
var md = Bs.exports;
const yd = /* @__PURE__ */ fl(md), gd = Object.prototype.toString, bd = Error.prototype.toString, _d = RegExp.prototype.toString, Ed = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", vd = /^Symbol\((.*)\)(.*)$/;
function Rd(t) {
  return t != +t ? "NaN" : t === 0 && 1 / t < 0 ? "-0" : "" + t;
}
function Ko(t, e = !1) {
  if (t == null || t === !0 || t === !1) return "" + t;
  const r = typeof t;
  if (r === "number") return Rd(t);
  if (r === "string") return e ? `"${t}"` : t;
  if (r === "function") return "[Function " + (t.name || "anonymous") + "]";
  if (r === "symbol") return Ed.call(t).replace(vd, "Symbol($1)");
  const n = gd.call(t).slice(8, -1);
  return n === "Date" ? isNaN(t.getTime()) ? "" + t : t.toISOString(t) : n === "Error" || t instanceof Error ? "[" + bd.call(t) + "]" : n === "RegExp" ? _d.call(t) : null;
}
function mt(t, e) {
  let r = Ko(t, e);
  return r !== null ? r : JSON.stringify(t, function(n, i) {
    let s = Ko(this[n], e);
    return s !== null ? s : i;
  }, 2);
}
function eu(t) {
  return t == null ? [] : [].concat(t);
}
let tu, ru, nu, Sd = /\$\{\s*(\w+)\s*\}/g;
tu = Symbol.toStringTag;
class Yo {
  constructor(e, r, n, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[tu] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = i, this.errors = [], this.inner = [], eu(e).forEach((s) => {
      if (Ge.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
ru = Symbol.hasInstance;
nu = Symbol.toStringTag;
class Ge extends Error {
  static formatError(e, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Object.assign({}, r, {
      path: n
    })), typeof e == "string" ? e.replace(Sd, (i, s) => mt(r[s])) : typeof e == "function" ? e(r) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, r, n, i, s) {
    const o = new Yo(e, r, n, i);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[nu] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Ge);
  }
  static [ru](e) {
    return Yo[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
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
    const i = n != null && n !== r ? ` (cast from the value \`${mt(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${t} must be a \`${e}\` type, but the final value was: \`${mt(r, !0)}\`` + i : `${t} must match the configured type. The validated value was: \`${mt(r, !0)}\`` + i;
  }
}, Me = {
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
}, hs = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, ps = {
  isValue: "${path} field must be ${value}"
}, ms = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Pn = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, wd = {
  notType: (t) => {
    const {
      path: e,
      value: r,
      spec: n
    } = t, i = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < i) return `${e} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${mt(r, !0)}\``;
      if (r.length > i) return `${e} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${mt(r, !0)}\``;
    }
    return Ge.formatError(ot.notType, t);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: ot,
  string: Me,
  number: wt,
  date: hs,
  object: ms,
  array: Pn,
  boolean: ps,
  tuple: wd
});
const Zn = (t) => t && t.__isYupSchema__;
class Ln {
  static fromOptions(e, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: i,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...u) => u.every((l) => l === n);
    return new Ln(e, (u, l) => {
      var p;
      let h = o(...u) ? i : s;
      return (p = h == null ? void 0 : h(l)) != null ? p : l;
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
    if (!Zn(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(r);
  }
}
const vn = {
  context: "$",
  value: "."
};
class er {
  constructor(e, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === vn.context, this.isValue = this.key[0] === vn.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? vn.context : this.isValue ? vn.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Kt.getter(this.path, !0), this.map = r.map;
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
er.prototype.__isYupRef = !0;
const rt = (t) => t == null;
function lr(t) {
  function e({
    value: r,
    path: n = "",
    options: i,
    originalValue: s,
    schema: o
  }, u, l) {
    const {
      name: p,
      test: h,
      params: m,
      message: A,
      skipAbsent: C
    } = t;
    let {
      parent: S,
      context: I,
      abortEarly: R = o.spec.abortEarly,
      disableStackTrace: $ = o.spec.disableStackTrace
    } = i;
    function k(re) {
      return er.isRef(re) ? re.getValue(r, S, I) : re;
    }
    function P(re = {}) {
      const Re = Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: re.path || n,
        spec: o.spec,
        disableStackTrace: re.disableStackTrace || $
      }, m, re.params);
      for (const xe of Object.keys(Re)) Re[xe] = k(Re[xe]);
      const ye = new Ge(Ge.formatError(re.message || A, Re), r, Re.path, re.type || p, Re.disableStackTrace);
      return ye.params = Re, ye;
    }
    const F = R ? u : l;
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
      Ge.isError(re) ? F(re) : re ? l(null) : F(P());
    }, te = (re) => {
      Ge.isError(re) ? F(re) : u(re);
    };
    if (C && rt(r))
      return G(!0);
    let Te;
    try {
      var pe;
      if (Te = h.call(x, r, x), typeof ((pe = Te) == null ? void 0 : pe.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(Te).then(G, te);
      }
    } catch (re) {
      te(re);
      return;
    }
    G(Te);
  }
  return e.OPTIONS = t, e;
}
function Td(t, e, r, n = r) {
  let i, s, o;
  return e ? (Kt.forEach(e, (u, l, p) => {
    let h = l ? u.slice(1, u.length - 1) : u;
    t = t.resolve({
      context: n,
      parent: i,
      value: r
    });
    let m = t.type === "tuple", A = p ? parseInt(h, 10) : 0;
    if (t.innerType || m) {
      if (m && !p) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && A >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);
      i = r, r = r && r[A], t = m ? t.spec.types[A] : t.innerType;
    }
    if (!p) {
      if (!t.fields || !t.fields[h]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);
      i = r, r = r && r[h], t = t.fields[h];
    }
    s = h, o = l ? "[" + u + "]" : "." + u;
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
class Bn extends Set {
  describe() {
    const e = [];
    for (const r of this.values())
      e.push(er.isRef(r) ? r.describe() : r);
    return e;
  }
  resolveAll(e) {
    let r = [];
    for (const n of this.values())
      r.push(e(n));
    return r;
  }
  clone() {
    return new Bn(this.values());
  }
  merge(e, r) {
    const n = this.clone();
    return e.forEach((i) => n.add(i)), r.forEach((i) => n.delete(i)), n;
  }
}
function cr(t, e = /* @__PURE__ */ new Map()) {
  if (Zn(t) || !t || typeof t != "object") return t;
  if (e.has(t)) return e.get(t);
  let r;
  if (t instanceof Date)
    r = new Date(t.getTime()), e.set(t, r);
  else if (t instanceof RegExp)
    r = new RegExp(t), e.set(t, r);
  else if (Array.isArray(t)) {
    r = new Array(t.length), e.set(t, r);
    for (let n = 0; n < t.length; n++) r[n] = cr(t[n], e);
  } else if (t instanceof Map) {
    r = /* @__PURE__ */ new Map(), e.set(t, r);
    for (const [n, i] of t.entries()) r.set(n, cr(i, e));
  } else if (t instanceof Set) {
    r = /* @__PURE__ */ new Set(), e.set(t, r);
    for (const n of t) r.add(cr(n, e));
  } else if (t instanceof Object) {
    r = {}, e.set(t, r);
    for (const [n, i] of Object.entries(t)) r[n] = cr(i, e);
  } else
    throw Error(`Unable to clone ${t}`);
  return r;
}
class Ke {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Bn(), this._blacklist = new Bn(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
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
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = cr(Object.assign({}, this.spec, e)), r;
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
      let o = mt(e), u = mt(s);
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
    } = r, l = e;
    u || (l = this._cast(l, Object.assign({
      assert: !1
    }, r)));
    let p = [];
    for (let h of Object.values(this.internalTests))
      h && p.push(h);
    this.runTests({
      path: s,
      value: l,
      originalValue: o,
      options: r,
      tests: p
    }, n, (h) => {
      if (h.length)
        return i(h, l);
      this.runTests({
        path: s,
        value: l,
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
      path: l,
      options: p
    } = e, h = (I) => {
      i || (i = !0, r(I, o));
    }, m = (I) => {
      i || (i = !0, n(I, o));
    }, A = s.length, C = [];
    if (!A) return m([]);
    let S = {
      value: o,
      originalValue: u,
      path: l,
      options: p,
      schema: this
    };
    for (let I = 0; I < s.length; I++) {
      const R = s[I];
      R(S, h, function(k) {
        k && (Array.isArray(k) ? C.push(...k) : C.push(k)), --A <= 0 && m(C);
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
    const l = typeof u == "number";
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
      [l ? "index" : "key"]: u,
      path: l || u.includes(".") ? `${i || ""}[${l ? u : `"${u}"`}]` : (i ? `${i}.` : "") + e
    });
    return (m, A, C) => this.resolve(h)._validate(p, h, A, C);
  }
  validate(e, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: e
    })), s = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return new Promise((o, u) => i._validate(e, r, (l, p) => {
      Ge.isError(l) && (l.value = p), u(l);
    }, (l, p) => {
      l.length ? u(new Ge(l, p, void 0, void 0, s)) : o(p);
    }));
  }
  validateSync(e, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: e
    })), s, o = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return i._validate(e, Object.assign({}, r, {
      sync: !0
    }), (u, l) => {
      throw Ge.isError(u) && (u.value = l), u;
    }, (u, l) => {
      if (u.length) throw new Ge(u, e, void 0, void 0, o);
      s = l;
    }), s;
  }
  isValid(e, r) {
    return this.validate(e, r).then(() => !0, (n) => {
      if (Ge.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, r) {
    try {
      return this.validateSync(e, r), !0;
    } catch (n) {
      if (Ge.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, e) : cr(r);
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
    let n = this.clone(), i = eu(e).map((s) => new er(s));
    return i.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new Ln(i, r) : Ln.fromOptions(i, r)), n;
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
      tests: r.tests.map((l) => ({
        name: l.OPTIONS.name,
        params: l.OPTIONS.params
      })).filter((l, p, h) => h.findIndex((m) => m.name === l.name) === p)
    };
  }
}
Ke.prototype.__isYupSchema__ = !0;
for (const t of ["validate", "validateSync"]) Ke.prototype[`${t}At`] = function(e, r, n = {}) {
  const {
    parent: i,
    parentPath: s,
    schema: o
  } = Td(this, e, r, n.context);
  return o[t](i && i[s], Object.assign({}, n, {
    parent: i,
    path: e
  }));
};
for (const t of ["equals", "is"]) Ke.prototype[t] = Ke.prototype.oneOf;
for (const t of ["not", "nope"]) Ke.prototype[t] = Ke.prototype.notOneOf;
const Od = () => !0;
function De(t) {
  return new iu(t);
}
class iu extends Ke {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: Od
    }, e));
  }
}
De.prototype = iu.prototype;
function ut() {
  return new su();
}
class su extends Ke {
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
  isTrue(e = ps.isValue) {
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
  isFalse(e = ps.isValue) {
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
ut.prototype = su.prototype;
const Ad = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Cd(t) {
  const e = ys(t);
  if (!e) return Date.parse ? Date.parse(t) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let r = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (r = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (r = 0 - r)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + r, e.second, e.millisecond);
}
function ys(t) {
  var e, r;
  const n = Ad.exec(t);
  return n ? {
    year: ht(n[1]),
    month: ht(n[2], 1) - 1,
    day: ht(n[3], 1),
    hour: ht(n[4]),
    minute: ht(n[5]),
    second: ht(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      ht(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (r = n[7]) == null ? void 0 : r.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: ht(n[10]),
    minuteOffset: ht(n[11])
  } : null;
}
function ht(t, e = 0) {
  return Number(t) || e;
}
let Nd = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Id = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Dd = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Pd = "^\\d{4}-\\d{2}-\\d{2}", kd = "\\d{2}:\\d{2}:\\d{2}", xd = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Fd = new RegExp(`${Pd}T${kd}(\\.\\d+)?${xd}$`), qd = (t) => rt(t) || t === t.trim(), Ld = {}.toString();
function f() {
  return new ou();
}
class ou extends Ke {
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
        return i === Ld ? e : i;
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
  length(e, r = Me.length) {
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
  min(e, r = Me.min) {
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
  max(e, r = Me.max) {
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
      message: i || Me.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(e) !== -1
    });
  }
  email(e = Me.email) {
    return this.matches(Nd, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = Me.url) {
    return this.matches(Id, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = Me.uuid) {
    return this.matches(Dd, {
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
    } = e : r = e), this.matches(Fd, {
      name: "datetime",
      message: r || Me.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || Me.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || n) return !0;
        const o = ys(s);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || Me.datetime_precision,
      params: {
        precision: i
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || i == null) return !0;
        const o = ys(s);
        return o ? o.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = Me.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: e,
      name: "trim",
      test: qd
    });
  }
  lowercase(e = Me.lowercase) {
    return this.transform((r) => rt(r) ? r : r.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => rt(r) || r === r.toLowerCase()
    });
  }
  uppercase(e = Me.uppercase) {
    return this.transform((r) => rt(r) ? r : r.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => rt(r) || r === r.toUpperCase()
    });
  }
}
f.prototype = ou.prototype;
let Bd = (t) => t != +t;
function ee() {
  return new au();
}
class au extends Ke {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !Bd(e);
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
ee.prototype = au.prototype;
let uu = /* @__PURE__ */ new Date(""), $d = (t) => Object.prototype.toString.call(t) === "[object Date]";
function Yt() {
  return new Qr();
}
class Qr extends Ke {
  constructor() {
    super({
      type: "date",
      check(e) {
        return $d(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, r, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = Cd(e), isNaN(e) ? Qr.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, r) {
    let n;
    if (er.isRef(e))
      n = e;
    else {
      let i = this.cast(e);
      if (!this._typeCheck(i)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = i;
    }
    return n;
  }
  min(e, r = hs.min) {
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
  max(e, r = hs.max) {
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
Qr.INVALID_DATE = uu;
Yt.prototype = Qr.prototype;
Yt.INVALID_DATE = uu;
function Ud(t, e = []) {
  let r = [], n = /* @__PURE__ */ new Set(), i = new Set(e.map(([o, u]) => `${o}-${u}`));
  function s(o, u) {
    let l = Kt.split(o)[0];
    n.add(l), i.has(`${u}-${l}`) || r.push([u, l]);
  }
  for (const o of Object.keys(t)) {
    let u = t[o];
    n.add(o), er.isRef(u) && u.isSibling ? s(u.path, o) : Zn(u) && "deps" in u && u.deps.forEach((l) => s(l, o));
  }
  return yd.array(Array.from(n), r).reverse();
}
function Qo(t, e) {
  let r = 1 / 0;
  return t.some((n, i) => {
    var s;
    if ((s = e.path) != null && s.includes(n))
      return r = i, !0;
  }), r;
}
function lu(t) {
  return (e, r) => Qo(t, e) - Qo(t, r);
}
const cu = (t, e, r) => {
  if (typeof t != "string")
    return t;
  let n = t;
  try {
    n = JSON.parse(t);
  } catch {
  }
  return r.isType(n) ? n : t;
};
function kn(t) {
  if ("fields" in t) {
    const e = {};
    for (const [r, n] of Object.entries(t.fields))
      e[r] = kn(n);
    return t.setFields(e);
  }
  if (t.type === "array") {
    const e = t.optional();
    return e.innerType && (e.innerType = kn(e.innerType)), e;
  }
  return t.type === "tuple" ? t.optional().clone({
    types: t.spec.types.map(kn)
  }) : "optional" in t ? t.optional() : t;
}
const Md = (t, e) => {
  const r = [...Kt.normalizePath(e)];
  if (r.length === 1) return r[0] in t;
  let n = r.pop(), i = Kt.getter(Kt.join(r), !0)(t);
  return !!(i && n in i);
};
let Jo = (t) => Object.prototype.toString.call(t) === "[object Object]";
function jd(t, e) {
  let r = Object.keys(t.fields);
  return Object.keys(e).filter((n) => r.indexOf(n) === -1);
}
const Vd = lu([]);
function se(t) {
  return new fu(t);
}
class fu extends Ke {
  constructor(e) {
    super({
      type: "object",
      check(r) {
        return Jo(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Vd, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, r = {}) {
    var n;
    let i = super._cast(e, r);
    if (i === void 0) return this.getDefault(r);
    if (!this._typeCheck(i)) return i;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, u = [].concat(this._nodes, Object.keys(i).filter((m) => !this._nodes.includes(m))), l = {}, p = Object.assign({}, r, {
      parent: l,
      __validating: r.__validating || !1
    }), h = !1;
    for (const m of u) {
      let A = s[m], C = m in i;
      if (A) {
        let S, I = i[m];
        p.path = (r.path ? `${r.path}.` : "") + m, A = A.resolve({
          value: I,
          context: r.context,
          parent: l
        });
        let R = A instanceof Ke ? A.spec : void 0, $ = R == null ? void 0 : R.strict;
        if (R != null && R.strip) {
          h = h || m in i;
          continue;
        }
        S = !r.__validating || !$ ? (
          // TODO: use _cast, this is double resolving
          A.cast(i[m], p)
        ) : i[m], S !== void 0 && (l[m] = S);
      } else C && !o && (l[m] = i[m]);
      (C !== m in l || l[m] !== i[m]) && (h = !0);
    }
    return h ? l : i;
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
    }, ...s], r.__validating = !0, r.originalValue = o, super._validate(e, r, n, (l, p) => {
      if (!u || !Jo(p)) {
        i(l, p);
        return;
      }
      o = o || p;
      let h = [];
      for (let m of this._nodes) {
        let A = this.fields[m];
        !A || er.isRef(A) || h.push(A.asNestedTest({
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
        i(m.sort(this._sortErrors).concat(l), p);
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
    return n.fields = e, n._nodes = Ud(e, r), n._sortErrors = lu(Object.keys(e)), r && (n._excludedEdges = r), n;
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
    return kn(this);
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
    let i = Kt.getter(e, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return Md(s, e) && (o = Object.assign({}, s), n || delete o[e], o[r] = i(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(cu);
  }
  noUnknown(e = !0, r = ms.noUnknown) {
    typeof e != "boolean" && (r = e, e = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(i) {
        if (i == null) return !0;
        const s = jd(this.schema, i);
        return !e || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = e, n;
  }
  unknown(e = !0, r = ms.noUnknown) {
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
    return this.transformKeys(qi.camelCase);
  }
  snakeCase() {
    return this.transformKeys(qi.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => qi.snakeCase(e).toUpperCase());
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
se.prototype = fu.prototype;
function tr(t) {
  return new du(t);
}
class du extends Ke {
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
      const l = this.innerType.cast(o, Object.assign({}, r, {
        path: `${r.path || ""}[${u}]`
      }));
      return l !== o && (i = !0), l;
    });
    return i ? s : n;
  }
  _validate(e, r = {}, n, i) {
    var s;
    let o = this.innerType, u = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(e, r, n, (l, p) => {
      var h;
      if (!u || !o || !this._typeCheck(p)) {
        i(l, p);
        return;
      }
      let m = new Array(p.length);
      for (let C = 0; C < p.length; C++) {
        var A;
        m[C] = o.asNestedTest({
          options: r,
          index: C,
          parent: p,
          parentPath: r.path,
          originalParent: (A = r.originalValue) != null ? A : e
        });
      }
      this.runTests({
        value: p,
        tests: m,
        originalValue: (h = r.originalValue) != null ? h : e,
        options: r
      }, n, (C) => i(C.concat(l), p));
    });
  }
  clone(e) {
    const r = super.clone(e);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(cu);
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
    if (!Zn(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + mt(e));
    return r.innerType = e, r.spec = Object.assign({}, r.spec, {
      types: e
    }), r;
  }
  length(e, r = Pn.length) {
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
    return r = r || Pn.min, this.test({
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
    return r = r || Pn.max, this.test({
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
tr.prototype = du.prototype;
const N = {
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
  city: f().required("City is required").matches(N.IS_STRING, "City name should only contains alphabets."),
  state: f().required("State is required").matches(N.IS_STRING, "State name should only contains alphabets."),
  pincode: f().required("Pincode is required").matches(N.PINCODE, "Pincode must be exactly 6 digits")
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
  officeContactNo: f().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: f().notRequired().nullable().matches(N.IS_EMAIL, "Please enter valid email."),
  mainProduct: f().notRequired().nullable().matches(N.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: f().notRequired().nullable().matches(N.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: f().notRequired().nullable().matches(N.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: f().notRequired().nullable().matches(N.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: f().notRequired().nullable(),
  creditTerms: f().notRequired().nullable(),
  ifGstnCopy: ut().required(),
  gstn: f().when("ifGstnCopy", {
    is: !0,
    then: (t) => t.required("GSTN number required if GSTN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  gstnCopy: De().when("ifGstnCopy", {
    is: !0,
    then: (t) => t.required("GSTN copy required if GSTN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  ifPanCardCopy: ut().required(),
  panNo: f().when("ifPanCardCopy", {
    is: !0,
    then: (t) => t.required("PAN number required if PAN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  panCardCopy: De().when("ifPanCardCopy", {
    is: !0,
    then: (t) => t.required("PAN card copy required if PAN is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  ifMsmeCopy: ut().required(),
  msmeNo: f().when("ifMsmeCopy", {
    is: !0,
    then: (t) => t.required("MSME number required if MSME is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  msmeCopy: De().when("ifMsmeCopy", {
    is: !0,
    then: (t) => t.required("MSME copy required if MSME is available."),
    otherwise: (t) => t.notRequired().nullable()
  }),
  vendorSaleInfo: se().shape({
    contactFName: f().required("Contact person first name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
    contactMName: f().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
    contactLName: f().required("Contact person last name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
    directContactNumber: f().required("Contact person phone number is required").matches(N.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: f().notRequired().nullable().matches(N.CONTACT_NO, "Please enter a valid contact number."),
    email: f().notRequired().nullable().matches(N.IS_EMAIL, "Please enter valid email.")
  }),
  vendorBankDetails: se().shape({
    beneficiaryFName: f().required("Beneficiary person first name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: f().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: f().required("Beneficiary person last name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
    bankName: f().required("Bank name is required.").matches(N.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: Qe,
    typeOfAcc: f().required("Account type is required."),
    ifscCode: f().required("IFSC code of bank is required."),
    swiftNo: f().notRequired().nullable(),
    invoiceCurrency: f().notRequired().nullable(),
    cancelledChequeCopy: f().notRequired().nullable()
  }),
  ref1FName: f().required("Reference person first name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
  ref1MName: f().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
  ref1LName: f().required("Reference person first name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: f().required("Contact number is required").matches(N.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: f().notRequired().nullable().matches(N.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: Qe,
  ref1Email: f().notRequired().nullable().matches(N.IS_EMAIL, "Please enter valid email."),
  ref2FName: f().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
  ref2MName: f().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
  ref2LName: f().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: f().notRequired().nullable().matches(N.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: f().notRequired().nullable().matches(N.CONTACT_NO, "Please enter valid contact number."),
  ref2Email: f().notRequired().nullable().matches(N.IS_EMAIL, "Please enter valid email."),
  ref2Address: se().shape({
    city: f().notRequired().nullable().matches(N.IS_STRING, "City name should only contains alphabets."),
    state: f().notRequired().nullable().matches(N.IS_STRING, "State name should only contains alphabets."),
    pincode: f().notRequired().nullable().matches(N.PINCODE, "Pincode must be exactly 6 digits")
  }).notRequired().nullable()
});
se().shape({
  farmerfName: f().required("First Name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  farmermName: f().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  farmerlName: f().required("Last Name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: Qe,
  primaryMobileNo: f().required("Contact number is required.").matches(N.CONTACT_NO, "Please enter valid contact number."),
  secondaryMobileNo: f().nullable().matches(N.CONTACT_NO, "Please enter valid contact number."),
  email: f().nullable().matches(N.IS_EMAIL, "Please enter valid email."),
  dob: Yt().nullable(),
  farmAddress: Qe,
  totalLandArea: ee().nullable().min(0, "Area cannot be negative."),
  cultivationArea: ee().nullable().positive("Area cannot be negative."),
  farmerPhoto: De().nullable().test(
    "fileSize",
    "File size is too large (must be less than 1MB)",
    function(t) {
      return t ? t.size <= 1024 * 1024 : !0;
    }
  ),
  farmPhoto: De().nullable().test(
    "fileSize",
    "File size is too large (must be less than 1MB)",
    function(t) {
      return t ? t.size <= 1024 * 1024 : !0;
    }
  ),
  crops: tr(
    se({
      crop: f().required("Crop name is required"),
      noOfPlants: ee().nullable().min(0, "Number of plants cannot be negative"),
      pruningDate: Yt().required("Pruning date is required."),
      expectedHarvestDate: Yt().required("Expected harvest date is required."),
      expectedQuantityInTonnes: ee().required("Expected quantity in metric tones are required.").min(0, "Quantity cannot be negative")
    }).required("At least one crop is required")
  )
});
const Gd = se().shape({
  accDeptFName: f().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  accDeptMName: f().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  accDeptLName: f().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  accDeptMobileNo: f().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  ownerFName: f().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  ownerMName: f().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  ownerLName: f().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  ownerMobileNo: f().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  mandiLicenceNo: f().nullable(),
  // mandiLicenceCopy: yup.,
  regiNo: f().nullable(),
  // regiCopy: File | null,
  electricityBill: ut().required("Please select yes or no."),
  consumenrNo: f().when("electricityBill", {
    is: !0,
    then: (t) => t.required("Consumer number is required if electricity bill available."),
    otherwise: (t) => t.nullable()
  }),
  electricityBillCopy: De().when("electricityBill", {
    is: !0,
    then: (t) => t.required("Electricity bill copy required if it is available."),
    otherwise: (t) => t.nullable()
  }),
  notElectricityBillReason: f().when("electricityBill", {
    is: !1,
    then: (t) => t.required("Please specify reason to not attach electricity bill."),
    otherwise: (t) => t.nullable()
  }),
  customerBlacklisted: ut().required("Please select yes or no."),
  blackListedBy: f().when("customerBlacklisted", {
    is: !0,
    then: (t) => t.required("Please specify name who blacklisted the customer."),
    otherwise: (t) => t.nullable()
  }),
  ifBlacklistedReason: f().when("customerBlacklisted", {
    is: !0,
    then: (t) => t.required("please specify reason for blacklisting customer."),
    otherwise: (t) => t.nullable()
  }),
  visitingCard: ut().required("Please select yes or no."),
  visitinContactNo: f().when("visitingCard", {
    is: !0,
    then: (t) => t.required("Consumer number is required ff visiting card available."),
    otherwise: (t) => t.nullable()
  }),
  visitingCardCopy: De().when("visitingCard", {
    is: !0,
    then: (t) => t.required("Visiting card copy required if it is available."),
    otherwise: (t) => t.nullable()
  }),
  notVisitingCardReason: f().when("visitingCard", {
    is: !1,
    then: (t) => t.required("Please specify reason to not attach visiting card."),
    otherwise: (t) => t.nullable()
  }),
  //References
  ref1FName: f().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  ref1MName: f().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  ref1LName: f().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  ref1Address: Qe,
  ref1ContactNo: f().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  ref1Email: f().required("Please enter email.").email("Please enter valid email"),
  ref2FName: f().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  ref2MName: f().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  ref2LName: f().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  ref2address: se().nullable(),
  ref2ContactNo: f().nullable().matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  ref2Email: f().nullable().email("Please enter valid email")
}), zd = se().shape({
  billingName: f().required("Billing name is required."),
  commonlyKnownAs: f().nullable(),
  contactPersonFName: f().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  contactPersonMName: f().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  contactPersonLName: f().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  billingAddress: Qe,
  primaryContactNo: f().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: f().nullable().matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: f().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: f().nullable().email("Please enter valid email"),
  billingAddressProofCopy: De().nullable(),
  billingFormatCopy: De().nullable()
}), Wd = se().shape({
  deliveryAddress: Qe,
  deliveryAddressProofCopy: De().nullable(),
  deliveryTime: f().nullable(),
  receivingPersonFName: f().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  receivingPersonMName: f().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  receivingPersonLName: f().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  primaryContactNo: f().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: f().nullable().matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: f().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: f().nullable().email("Please enter valid email")
}), Hd = se().shape({
  ifCancelledCheque: ut().required("Please select yes or no."),
  cancelledChequeCopy: De().when("ifCancelledCheque", {
    is: !0,
    then: (t) => t.required("Cancel cheque copy required if it is available."),
    otherwise: (t) => t.nullable()
  }),
  notCancelledChequeReason: f().when("ifCancelledCheque", {
    is: !1,
    then: (t) => t.required("Please specify reason to not attach cancel cheque."),
    otherwise: (t) => t.nullable()
  }),
  bankAccHolderFName: f().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderMName: f().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderLName: f().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  bankName: f().required("Bank name is required."),
  bankBranch: f().required("Branch name is required."),
  accType: f().required("Account type is required."),
  otherAccType: f().nullable(),
  bankAccNo: f().required("Account number is required."),
  ifscCode: f().required("IFSC code is required."),
  bankAddress: Qe,
  bankStatementCopy: De()
}), Kd = se().shape({
  panNo: f().nullable(),
  panCopy: De().nullable(),
  aadharNo: f().nullable(),
  addharCopy: De().nullable(),
  gstn: f().nullable(),
  regiCertificateCopy: De().nullable(),
  billBookCopy: De().nullable(),
  certificationsDetails: f().nullable(),
  otherCertifications: f().nullable(),
  corpRegiDetails: f().nullable(),
  otherCorpRegiDetails: f().nullable(),
  incorpoCertificateCopy: De().nullable(),
  cinNo: f().nullable()
}), Yd = se().shape({}), Qd = se().shape({
  paymentMade: f().required("Required. Please select an option."),
  otherPaymentMade: f().nullable(),
  paymentMode: f().required("Payment mode is required."),
  otherPaymentMode: f().nullable(),
  marginDeposit: f().nullable(),
  rtv: ut().required("Please select yes or no."),
  agreementExecuted: ut().required("Please select yes or no."),
  lc: f().nullable(),
  bg: f().nullable(),
  securityDepoCheqNo: f().nullable(),
  securityDepoAmt: ee().positive("Amount cannot be negative."),
  //Initial Exposure Limit (IEL)
  IELinAmt: ee().positive("Amount cannot be negative."),
  IELRecommendedBy: f().matches(N.IS_STRING, "Name should only contain alphabets."),
  IELRecommendedDate: f().nullable(),
  //Revision of Exposure Limit (REL)
  RELinAmt: ee().positive("Amount cannot be negative."),
  RELRecommendedBy: f().matches(N.IS_STRING, "Name should only contain alphabets."),
  RELRecommendedDate: f().nullable(),
  reason: f().nullable(),
  docEvidenceCopy: De().nullable()
}), Jd = se().shape({
  proposerBDName: f().nullable(),
  pflCoordinator: f().nullable(),
  recommendedBy: f().nullable(),
  dispatchLocationPfl: f().nullable(),
  approvedBy: f().nullable(),
  relationshipManager: f().nullable(),
  avgBillingMonthly: ee().positive("Average cannot be negative."),
  volumeMonthly: ee().positive("Volume cannot be negative."),
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
  otherType: f().nullable(),
  customerAddress: Qe,
  primaryContactNo: f().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: f().nullable().matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: f().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: f().nullable().email("Please enter valid email"),
  keyMobileNumbers: Gd,
  billingDetails: zd,
  deliveryDetails: Wd,
  statutoryDetails: Kd,
  bankDetails: Hd,
  productSpecification: Yd,
  paymentTerms: Qd,
  officeUseOnly: Jd
});
const Xd = /^[6-9]\d{9}$/;
f().matches(Xd, "Please enter a valid 10-digit contact number");
const Zd = {
  bankName: "",
  branchName: "",
  accountNumber: "",
  ifscCode: "",
  aadharNo: "",
  panNo: "",
  electionCardNo: ""
}, eh = {
  relation: "",
  nameAsPerAadhar: "",
  mobileNumber: "",
  age: 0
}, th = {
  previousFarmOrWorkPlace: "",
  workType: "",
  workLocation: "",
  workDuration: 0,
  wagesPerDayOrMonth: 0
}, Yh = {
  representativeName: "",
  siteName: "",
  laborType: "",
  laborName: "",
  nameAsPerAadhar: "",
  nameAsPerBank: "",
  presentAddress: fs,
  permanentAddress: fs,
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
  bankDetails: Zd,
  familyDetails: [eh],
  workExperience: [th],
  preferredWorkingLocation: "",
  preferredWorkType: "",
  referenceName: "",
  referencePosition: "",
  referenceMobileNumber: ""
}, rh = {
  laborType: "",
  labourName: "",
  contactNo: "",
  inTime: "",
  outTime: "",
  amount: 0
}, Qh = {
  companyName: "",
  location: "",
  date: "",
  labourDetails: [rh],
  remarks: ""
}, nh = {
  productName: null,
  origin: null,
  variety: null,
  count: null,
  size: null,
  uom: null,
  quantity: null,
  unitPrice: null,
  amount: null
}, Jh = {
  companyName: null,
  location: null,
  date: null,
  batchNo: null,
  grn: null,
  dumpProducts: [nh],
  totalDumpCost: null,
  totalCostInWords: null,
  remark: null
}, Xh = {
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
  clientAddress: fs,
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
}, ih = {
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
}, Zh = {
  companyName: null,
  location: null,
  dcNo: null,
  saleDate: null,
  buyerName: null,
  buyerMobNo: null,
  reasonForSale: null,
  approvedBy: null,
  soldBy: null,
  secondSaleProducts: [ih],
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
}, sh = {
  sku: null,
  uom: null,
  qty: 0,
  totalWeightinKg: 0
}, ep = {
  companyName: null,
  location: null,
  stockDate: null,
  eodProducts: [sh],
  submission: null,
  comments: null
}, oh = {
  qualityParameterId: "",
  qualityParameterType: null,
  qualityParameterName: "",
  quantity: null,
  percentage: 0
}, tp = {
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
  parameters: [oh]
}, rp = se().shape({
  companyName: f().required("Company name is required."),
  location: f().required("Location is required"),
  date: Yt().required("Date is required"),
  labourDetails: tr(
    se({
      labourName: f().required("Labour name is required"),
      contactNo: f().required("Contact No is required"),
      inTime: f().required("In time is required")
      // outTime: yup.string().required("Out time is required."),
    })
  )
}), np = se().shape({
  representativeName: f().required("Prime representative name is required."),
  siteName: f().required("Site name is required"),
  laborType: f().required("Type of labor is required."),
  presentAddress: Qe,
  permanentAddress: Qe
}), ip = se().shape({
  companyName: f().required("Company name is required."),
  location: f().required("Location is required"),
  date: f().required("Date is required"),
  batchNo: f().nullable(),
  grn: f().nullable(),
  dumpProducts: tr(
    se({
      productName: f().required("Product name is required"),
      uom: f().required("UOM No is required"),
      quantity: ee().required("Quantity is required").min(0, "Quantity cannot be negative."),
      unitPrice: ee().required("Unit price is required.").min(0, "Unit price cannot be negative")
    })
  ),
  remark: f().nullable()
}), sp = se().shape({
  companyName: f().required("Company name is required."),
  dcNumber: f().required("Please select challan number."),
  date: f().nullable(),
  vehicleNo: f().required("Vehicle number is required."),
  vehicleType: f().required("Vehicle type is required."),
  driverName: f().required("Full name of driver is required.").matches(N.IS_STRING, "Name should only contain alphabets."),
  driverMobNo: f().required("Driver's mobile number is required.").matches(N.IS_NUMBER, "Please enter valid mobile number."),
  paymentDiscussed: ee().required("Please enter payment amount discussed.").min(0, "Amount cannot be negative."),
  transportationBillAmt: ee().required("Please enter transportation bill amount.").min(0, "Amount cannot be negative."),
  advancePaid: ee().nullable().min(0, "Amount cannot be negative."),
  clientName: f().required("Client name is required."),
  clientGRNNo: f().nullable(),
  clientAddress: Qe,
  receivingPerson: f().required("Receiving person name is required.").matches(N.IS_STRING, "Name should only contain alphabets."),
  outTime: f().required("Out time is required."),
  reachingTime: f().required("Reaching time is required."),
  accDeptVerification: f().required("Please select one option."),
  remarksPFL: f().nullable(),
  feedbackbyTransporterOwner: f().nullable(),
  paymentTerms: f().nullable(),
  netInwardQty: ee().nullable().min(0, "Quantity cannot be negative."),
  rejection: ee().nullable().min(0, "Quantity cannot be negative."),
  shrinkageDump: ee().nullable().min(0, "Quantity cannot be negative.")
}), op = se().shape({
  companyName: f().required("Company name is required."),
  location: f().required("Location is required."),
  stockDate: Yt().required("Date of stock is required."),
  eodProducts: tr(
    se({
      sku: f().required("SKU is required."),
      uom: f().required("UoM is required."),
      qty: ee().required("Quantity is required.").min(0, "Quantity cannot be negative."),
      totalWeightinKg: ee().required("Total weight is required.").min(0, "Weight cannot be negative.")
    })
  ),
  submission: f().required("Submission type is required."),
  comments: f().nullable()
}), ap = se().shape({
  inwardType: f().required("Inward type is required"),
  deliveryChallanNo: f().nullable(),
  grnNo: f().nullable(),
  companyName: f().required("Company name is required."),
  batchNo: f().nullable(),
  location: f().required("Location is required."),
  date: f().required("Date is required."),
  source: f().oneOf(["vendor", "farmer"], "Inward type must be either vendor or farmer").required("Source is required"),
  selectedParty: f().required("Please select one option."),
  inwardProducts: tr(
    se({
      productName: f().required("Product name is required"),
      uom: f().required("UOM No is required"),
      quantity: ee().required("Quantity is required").min(0, "Quantity cannot be negative."),
      unitPrice: ee().required("Unit price is required").min(0, "Price cannot be negative."),
      weight: ee().nullable().min(0, "Weight cannot be negative"),
      packingMaterialWeight: ee().nullable().min(0, "Weight cannot be negative"),
      grossWeight: ee().required("Gross weight is required.").min(0, "Weight cannot be negative")
    })
  ),
  inwardBy: f().required("Name of person is required."),
  purchasedBy: f().required("Name of person is required."),
  purchasedQty: ee().required("Purchased quantity is required.").min(0, "Purchased quantity cannot be negative."),
  inwardQtyInKg: ee().required("Inward quantity is required.").min(0, "Inward quantity cannot be negative."),
  inwardCost: ee().required("Inward cost is required.").min(0, "Inward cost cannot be negative."),
  remarks: f().nullable()
  // totalWeightInKg: 0,
}), up = se().shape({
  dcNo: f().nullable(),
  dcDate: f().nullable(),
  arrivedQty: ee().required("Arrived quantity is required.").min(0, "Quantity cannot be negative"),
  samplingQty: ee().required("Sampling quantity is required.").min(0, "Quantity cannot be negative"),
  purchaseBy: f().required("Name required."),
  receivedBy: f().required("Name required."),
  qcCheckBy: f().required("Name required."),
  verifiedBy: f().required("Name required."),
  totalQty: ee().nullable(),
  totalpercent: ee().nullable(),
  supplierName: f().required("Supplier name is required."),
  arrivalDate: f().required("Arrival date is required."),
  supplierLocation: f().required("Supplier location is required."),
  remark: f().nullable(),
  product: f().required("Product name is required."),
  parameters: tr(
    se({
      quantity: ee().required("Quantity is required").min(0, "Quantity cannot be negative.")
    })
  )
}), M = {
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
  CREATE_FINAL_INV: "/invoice/generate/final"
};
class Sr extends _e {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createInwardRegister(e) {
    const r = M.CREATE_INWARD_REGISTER;
    return this.post(r, e);
  }
  getAllInwardRegisters(e) {
    const r = M.GET_ALL_INWARD_REGISTERS(e);
    return this.get(r);
  }
  getInwardRegisterForViewById(e) {
    const r = M.GET_INWARD_REGISTER_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  getInwardRegisterForUpdateById(e) {
    const r = M.GET_INWARD_REGISTER_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  updateInwardRegister(e, r) {
    const n = M.UPDATE_INWARD_REGISTER(e);
    return this.patch(n, r);
  }
  deleteInwardRegisterById(e) {
    const r = M.DELETE_INWARD_REGISTER(e);
    return this.delete(r);
  }
}
class wr extends _e {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createAQR(e) {
    const r = M.CREATE_AQR;
    return this.post(r, e);
  }
  getAllAQRs(e) {
    const r = M.GET_ALL_AQR(e);
    return this.get(r);
  }
  getAQRForUpdateById(e) {
    const r = M.GET_AQR_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  getAQRForViewById(e) {
    const r = M.GET_AQR_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  updateAQR(e, r) {
    const n = M.UPDATE_AQR(e);
    return this.patch(n, r);
  }
  deleteAQRById(e) {
    const r = M.DELETE_AQR(e);
    return this.delete(r);
  }
}
class Tr extends _e {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDumpRegister(e) {
    const r = M.CREATE_DUMP_REGISTER;
    return this.post(r, e);
  }
  getAllDumpRegisters(e) {
    const r = M.GET_ALL_DUMP_REGISTERS(e);
    return this.get(r);
  }
  getDumpRegisterForViewById(e) {
    const r = M.GET_DUMP_REGISTER_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  getDumpRegisterForUpdateById(e) {
    const r = M.GET_DUMP_REGISTER_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  updateDumpRegister(e, r) {
    const n = M.UPDATE_DUMP_REGISTER(e);
    return this.patch(n, r);
  }
  deleteDumpRegisterById(e) {
    const r = M.DELETE_DUMP_REGISTER(e);
    return this.delete(r);
  }
}
class Or extends _e {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createSecondSaleRegister(e) {
    const r = M.CREATE_SECOND_SALE;
    return this.post(r, e);
  }
  getAllSecondSaleRegisters(e) {
    const r = M.GET_ALL_SECOND_SALES(e);
    return this.get(r);
  }
  getSecondSaleRegisterForViewById(e) {
    const r = M.GET_SECOND_SALE_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  getSecondSaleRegisterForUpdateById(e) {
    const r = M.GET_SECOND_SALE_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  updateSecondSaleRegister(e, r) {
    const n = M.UPDATE_SECOND_SALE(e);
    return this.patch(n, r);
  }
  deleteSecondSaleRegisterById(e) {
    const r = M.DELETE_SECOND_SALE(e);
    return this.delete(r);
  }
}
class Ar extends _e {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVehicleDispatchRegister(e) {
    const r = M.CREATE_VEHICLE_DISPATCH_REGISTER;
    return this.post(r, e);
  }
  getAllVehicleDispatchRegisters(e) {
    const r = M.GET_ALL_VEHICLE_DISPATCH_REGISTERS(e);
    return this.get(r);
  }
  getVehicleDispatchRegisterForViewById(e) {
    const r = M.GET_VEHICLE_DISPATCH_REGISTER_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  getVehicleDispatchRegisterForUpdateById(e) {
    const r = M.GET_VEHICLE_DISPATCH_REGISTER_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  updateVehicleDispatchRegister(e, r) {
    const n = M.UPDATE_VEHICLE_DISPATCH_REGISTER(e);
    return this.patch(n, r);
  }
  deleteVehicleDispatchRegisterById(e) {
    const r = M.DELETE_VEHICLE_DISPATCH_REGISTER(e);
    return this.delete(r);
  }
}
class Cr extends _e {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createEODReport(e) {
    const r = M.CREATE_EOD_REPORT;
    return this.post(r, e);
  }
  getAllEODReports(e) {
    const r = M.GET_ALL_EOD_REPORT(e);
    return this.get(r);
  }
  getEODReportForViewById(e) {
    const r = M.GET_EOD_REPORT_FOR_VIEW_BY_ID(e);
    return this.get(r);
  }
  getEODReportForUpdateById(e) {
    const r = M.GET_EOD_REPORT_FOR_UPDATE_BY_ID(e);
    return this.get(r);
  }
  updateEODReport(e, r) {
    const n = M.UPDATE_EOD_REPORT(e);
    return this.patch(n, r);
  }
  deleteEODReportById(e) {
    const r = M.DELETE_EOD_REPORT(e);
    return this.delete(r);
  }
}
class Jr extends _e {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborRegistration(e) {
    const r = M.CREATE_LABOR_REGISTRATION;
    return this.post(r, e);
  }
  getAllRegistreredLabors(e) {
    const r = M.GET_ALL_REGISTERED_LABORS(e);
    return this.get(r);
  }
  getRegistreredLaborById(e) {
    const r = `${M.GET_REGISTERED_LABOR_BY_ID}/${e}`;
    return this.get(r);
  }
  updateRegistreredLabor(e, r) {
    const n = `${M.UPDATE_REGISTERED_LABOR}/${e}`;
    return this.patch(n, r);
  }
  deleteRegistreredLaborById(e) {
    const r = `${M.DELETE_REGISTERED_LABOR}/${e}`;
    return this.delete(r);
  }
}
class hu extends _e {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createFinalInvoice(e) {
    const r = `${M.CREATE_FINAL_INV}/${e}`;
    return this.post(r);
  }
  getAllFinalInvoices() {
    const e = M.GET_ALL_FINAL_INV;
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
function lp() {
  return we({
    mutationKey: ["create-inward-register"],
    mutationFn: (t) => Sr.getInstance().createInwardRegister(t)
  });
}
function cp(t) {
  return we({
    mutationKey: ["update-inward-register"],
    mutationFn: (e) => Sr.getInstance().updateInwardRegister(t, e)
  });
}
function fp(t) {
  return we({
    mutationKey: ["delete-inward-register-by-id"],
    mutationFn: () => Sr.getInstance().deleteInwardRegisterById(t)
  });
}
function dp(t) {
  return Ae({
    queryKey: ["get-all-inward-registers", t],
    queryFn: () => Sr.getInstance().getAllInwardRegisters(t)
  });
}
function hp(t) {
  const e = t.length > 1;
  return Ae({
    queryKey: ["get-inward-register-for-view-by-id", e],
    queryFn: () => Sr.getInstance().getInwardRegisterForViewById(t),
    enabled: !!t
  });
}
function pp(t) {
  const e = t.length > 1;
  return Ae({
    queryKey: ["get-inward-register-for-update-by-id", e],
    queryFn: () => Sr.getInstance().getInwardRegisterForUpdateById(t),
    enabled: !!t
  });
}
function mp() {
  return we({
    mutationKey: ["create-dump-register"],
    mutationFn: (t) => Tr.getInstance().createDumpRegister(t)
  });
}
function yp(t) {
  return we({
    mutationKey: ["update-dump-register"],
    mutationFn: (e) => Tr.getInstance().updateDumpRegister(t, e)
  });
}
function gp(t) {
  return we({
    mutationKey: ["delete-dump-register-by-id"],
    mutationFn: () => Tr.getInstance().deleteDumpRegisterById(t)
  });
}
function bp(t) {
  return Ae({
    queryKey: ["get-all-dump-registers", t],
    queryFn: () => Tr.getInstance().getAllDumpRegisters(t)
  });
}
function _p(t) {
  const e = t.length > 1;
  return Ae({
    queryKey: ["get-dump-register-for-view-by-id", e],
    queryFn: () => Tr.getInstance().getDumpRegisterForViewById(t),
    enabled: e
  });
}
function Ep(t) {
  const e = t.length > 1;
  return Ae({
    queryKey: ["get-dump-register-for-update-by-id", e],
    queryFn: () => Tr.getInstance().getDumpRegisterForUpdateById(t),
    enabled: e
  });
}
function vp() {
  return we({
    mutationKey: ["create-second-sale-register"],
    mutationFn: (t) => Or.getInstance().createSecondSaleRegister(t)
  });
}
function Rp(t) {
  return we({
    mutationKey: ["update-second-sale-register"],
    mutationFn: (e) => Or.getInstance().updateSecondSaleRegister(t, e)
  });
}
function Sp(t) {
  return we({
    mutationKey: ["delete-second-sale-register-by-id"],
    mutationFn: () => Or.getInstance().deleteSecondSaleRegisterById(t)
  });
}
function wp(t) {
  return Ae({
    queryKey: ["get-all-second-sale-registers", t],
    queryFn: () => Or.getInstance().getAllSecondSaleRegisters(t)
  });
}
function Tp(t) {
  const e = t.length > 1;
  return Ae({
    queryKey: ["get-second-sale-register-for-view", e],
    queryFn: () => Or.getInstance().getSecondSaleRegisterForViewById(t),
    enabled: e
  });
}
function Op(t) {
  const e = t.length > 1;
  return Ae({
    queryKey: ["get-second-sale-register-for-update", e],
    queryFn: () => Or.getInstance().getSecondSaleRegisterForUpdateById(t),
    enabled: e
  });
}
function Ap() {
  return we({
    mutationKey: ["create-vehicle-dispatch-register"],
    mutationFn: (t) => Ar.getInstance().createVehicleDispatchRegister(t)
  });
}
function Cp(t) {
  return we({
    mutationKey: ["update-vehicle-dispatch-register"],
    mutationFn: (e) => Ar.getInstance().updateVehicleDispatchRegister(t, e)
  });
}
function Np(t) {
  return we({
    mutationKey: ["delete-vehicle-dispatch-register-by-id"],
    mutationFn: () => Ar.getInstance().deleteVehicleDispatchRegisterById(t)
  });
}
function Ip(t) {
  return Ae({
    queryKey: ["get-all-vehicle-dispatch-registers", t],
    queryFn: () => Ar.getInstance().getAllVehicleDispatchRegisters(t)
  });
}
function Dp(t) {
  const e = t.length > 1;
  return Ae({
    queryKey: ["get-vehicle-dispatch-register-for-view", e],
    queryFn: () => Ar.getInstance().getVehicleDispatchRegisterForViewById(t),
    enabled: e
  });
}
function Pp(t) {
  const e = t.length > 1;
  return Ae({
    queryKey: ["get-vehicle-dispatch-register-for-update", e],
    queryFn: () => Ar.getInstance().getVehicleDispatchRegisterForUpdateById(t),
    enabled: e
  });
}
function kp() {
  return we({
    mutationKey: ["create-aqr"],
    mutationFn: (t) => wr.getInstance().createAQR(t)
  });
}
function xp(t) {
  return we({
    mutationKey: ["update-aqr"],
    mutationFn: (e) => wr.getInstance().updateAQR(t, e)
  });
}
function Fp(t) {
  return we({
    mutationKey: ["delete-aqr-by-id"],
    mutationFn: () => wr.getInstance().deleteAQRById(t)
  });
}
function qp(t) {
  return Ae({
    queryKey: ["get-all-aqrs", t],
    queryFn: () => wr.getInstance().getAllAQRs(t)
  });
}
function Lp(t) {
  const e = t.length > 1;
  return Ae({
    queryKey: ["get-aqr-for-update-by-id", e],
    queryFn: () => wr.getInstance().getAQRForUpdateById(t),
    enabled: e
  });
}
function Bp(t) {
  const e = t.length > 1;
  return Ae({
    queryKey: ["get-aqr-for-view-by-id", e],
    queryFn: () => wr.getInstance().getAQRForViewById(t),
    enabled: e
  });
}
function $p() {
  return we({
    mutationKey: ["create-eod-report"],
    mutationFn: (t) => Cr.getInstance().createEODReport(t)
  });
}
function Up(t) {
  return we({
    mutationKey: ["update-eod-report"],
    mutationFn: (e) => Cr.getInstance().updateEODReport(t, e)
  });
}
function Mp(t) {
  return we({
    mutationKey: ["delete-eod-report-by-id"],
    mutationFn: () => Cr.getInstance().deleteEODReportById(t)
  });
}
function jp(t) {
  return Ae({
    queryKey: ["get-all-eod-reports", t],
    queryFn: () => Cr.getInstance().getAllEODReports(t)
  });
}
function Vp(t) {
  return Ae({
    queryKey: ["get-eod-report-for-view"],
    queryFn: () => Cr.getInstance().getEODReportForViewById(t),
    enabled: !!t
  });
}
function Gp(t) {
  return Ae({
    queryKey: ["get-eod-report-by-id"],
    queryFn: () => Cr.getInstance().getEODReportForUpdateById(t),
    enabled: !!t
  });
}
function zp() {
  return we({
    mutationKey: ["create-labor-register"],
    mutationFn: (t) => Jr.getInstance().createLaborRegistration(t)
  });
}
function Wp(t) {
  return we({
    mutationKey: ["update-labor-register"],
    mutationFn: (e) => Jr.getInstance().updateRegistreredLabor(t, e)
  });
}
function Hp(t) {
  return we({
    mutationKey: ["delete-labor-register-by-id"],
    mutationFn: () => Jr.getInstance().deleteRegistreredLaborById(t)
  });
}
function Kp(t) {
  return Ae({
    queryKey: ["get-all-labor-registers", t],
    queryFn: () => Jr.getInstance().getAllRegistreredLabors(t)
  });
}
function Yp(t) {
  const e = t.length > 0;
  return Ae({
    queryKey: ["get-labor-register-by-id", t],
    queryFn: () => Jr.getInstance().getRegistreredLaborById(t),
    enabled: e
  });
}
function Qp(t) {
  return we({
    mutationKey: ["create-final-invoice"],
    mutationFn: () => hu.getInstance().createFinalInvoice(t)
  });
}
function Jp() {
  return Ae({
    queryKey: ["get-all-final-invoice"],
    queryFn: () => hu.getInstance().getAllFinalInvoices()
  });
}
function ah(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null;
}
function uh(t) {
  return ah(t) && "type" in t && typeof t.type == "string";
}
var pu = Symbol.for("immer-nothing"), Xo = Symbol.for("immer-draftable"), Je = Symbol.for("immer-state"), lh = process.env.NODE_ENV !== "production" ? [
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
    const r = lh[t], n = typeof r == "function" ? r.apply(null, e) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var _r = Object.getPrototypeOf;
function Jt(t) {
  return !!t && !!t[Je];
}
function gt(t) {
  var e;
  return t ? mu(t) || Array.isArray(t) || !!t[Xo] || !!((e = t.constructor) != null && e[Xo]) || ti(t) || ri(t) : !1;
}
var ch = Object.prototype.constructor.toString();
function mu(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = _r(t);
  if (e === null)
    return !0;
  const r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === ch;
}
function $n(t, e) {
  ei(t) === 0 ? Reflect.ownKeys(t).forEach((r) => {
    e(r, t[r], t);
  }) : t.forEach((r, n) => e(n, r, t));
}
function ei(t) {
  const e = t[Je];
  return e ? e.type_ : Array.isArray(t) ? 1 : ti(t) ? 2 : ri(t) ? 3 : 0;
}
function gs(t, e) {
  return ei(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function yu(t, e, r) {
  const n = ei(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function fh(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function ti(t) {
  return t instanceof Map;
}
function ri(t) {
  return t instanceof Set;
}
function Mt(t) {
  return t.copy_ || t.base_;
}
function bs(t, e) {
  if (ti(t))
    return new Map(t);
  if (ri(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const r = mu(t);
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
    return Object.create(_r(t), n);
  } else {
    const n = _r(t);
    if (n !== null && r)
      return { ...t };
    const i = Object.create(n);
    return Object.assign(i, t);
  }
}
function $s(t, e = !1) {
  return ni(t) || Jt(t) || !gt(t) || (ei(t) > 1 && (t.set = t.add = t.clear = t.delete = dh), Object.freeze(t), e && Object.entries(t).forEach(([r, n]) => $s(n, !0))), t;
}
function dh() {
  ze(2);
}
function ni(t) {
  return Object.isFrozen(t);
}
var hh = {};
function Xt(t) {
  const e = hh[t];
  return e || ze(0, t), e;
}
var Gr;
function gu() {
  return Gr;
}
function ph(t, e) {
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
function Zo(t, e) {
  e && (Xt("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = e);
}
function _s(t) {
  Es(t), t.drafts_.forEach(mh), t.drafts_ = null;
}
function Es(t) {
  t === Gr && (Gr = t.parent_);
}
function ea(t) {
  return Gr = ph(Gr, t);
}
function mh(t) {
  const e = t[Je];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function ta(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const r = e.drafts_[0];
  return t !== void 0 && t !== r ? (r[Je].modified_ && (_s(e), ze(4)), gt(t) && (t = Un(e, t), e.parent_ || Mn(e, t)), e.patches_ && Xt("Patches").generateReplacementPatches_(
    r[Je].base_,
    t,
    e.patches_,
    e.inversePatches_
  )) : t = Un(e, r, []), _s(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), t !== pu ? t : void 0;
}
function Un(t, e, r) {
  if (ni(e))
    return e;
  const n = e[Je];
  if (!n)
    return $n(
      e,
      (i, s) => ra(t, n, e, i, s, r)
    ), e;
  if (n.scope_ !== t)
    return e;
  if (!n.modified_)
    return Mn(t, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let s = i, o = !1;
    n.type_ === 3 && (s = new Set(i), i.clear(), o = !0), $n(
      s,
      (u, l) => ra(t, n, i, u, l, r, o)
    ), Mn(t, i, !1), r && t.patches_ && Xt("Patches").generatePatches_(
      n,
      r,
      t.patches_,
      t.inversePatches_
    );
  }
  return n.copy_;
}
function ra(t, e, r, n, i, s, o) {
  if (process.env.NODE_ENV !== "production" && i === r && ze(5), Jt(i)) {
    const u = s && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !gs(e.assigned_, n) ? s.concat(n) : void 0, l = Un(t, i, u);
    if (yu(r, n, l), Jt(l))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else o && r.add(i);
  if (gt(i) && !ni(i)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    Un(t, i), (!e || !e.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && Mn(t, i);
  }
}
function Mn(t, e, r = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && $s(e, r);
}
function yh(t, e) {
  const r = Array.isArray(t), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : gu(),
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
  let i = n, s = Us;
  r && (i = [n], s = zr);
  const { revoke: o, proxy: u } = Proxy.revocable(i, s);
  return n.draft_ = u, n.revoke_ = o, u;
}
var Us = {
  get(t, e) {
    if (e === Je)
      return t;
    const r = Mt(t);
    if (!gs(r, e))
      return gh(t, r, e);
    const n = r[e];
    return t.finalized_ || !gt(n) ? n : n === Li(t.base_, e) ? (Bi(t), t.copy_[e] = Rs(n, t)) : n;
  },
  has(t, e) {
    return e in Mt(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(Mt(t));
  },
  set(t, e, r) {
    const n = bu(Mt(t), e);
    if (n != null && n.set)
      return n.set.call(t.draft_, r), !0;
    if (!t.modified_) {
      const i = Li(Mt(t), e), s = i == null ? void 0 : i[Je];
      if (s && s.base_ === r)
        return t.copy_[e] = r, t.assigned_[e] = !1, !0;
      if (fh(r, i) && (r !== void 0 || gs(t.base_, e)))
        return !0;
      Bi(t), vs(t);
    }
    return t.copy_[e] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || e in t.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(t.copy_[e]) || (t.copy_[e] = r, t.assigned_[e] = !0), !0;
  },
  deleteProperty(t, e) {
    return Li(t.base_, e) !== void 0 || e in t.base_ ? (t.assigned_[e] = !1, Bi(t), vs(t)) : delete t.assigned_[e], t.copy_ && delete t.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, e) {
    const r = Mt(t), n = Reflect.getOwnPropertyDescriptor(r, e);
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
    return _r(t.base_);
  },
  setPrototypeOf() {
    ze(12);
  }
}, zr = {};
$n(Us, (t, e) => {
  zr[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
zr.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && ze(13), zr.set.call(this, t, e, void 0);
};
zr.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && ze(14), Us.set.call(this, t[0], e, r, t[0]);
};
function Li(t, e) {
  const r = t[Je];
  return (r ? Mt(r) : t)[e];
}
function gh(t, e, r) {
  var i;
  const n = bu(e, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(t.draft_)
  ) : void 0;
}
function bu(t, e) {
  if (!(e in t))
    return;
  let r = _r(t);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, e);
    if (n)
      return n;
    r = _r(r);
  }
}
function vs(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && vs(t.parent_));
}
function Bi(t) {
  t.copy_ || (t.copy_ = bs(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var bh = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, r, n) => {
      if (typeof e == "function" && typeof r != "function") {
        const s = r;
        r = e;
        const o = this;
        return function(l = s, ...p) {
          return o.produce(l, (h) => r.call(this, h, ...p));
        };
      }
      typeof r != "function" && ze(6), n !== void 0 && typeof n != "function" && ze(7);
      let i;
      if (gt(e)) {
        const s = ea(this), o = Rs(e, void 0);
        let u = !0;
        try {
          i = r(o), u = !1;
        } finally {
          u ? _s(s) : Es(s);
        }
        return Zo(s, n), ta(i, s);
      } else if (!e || typeof e != "object") {
        if (i = r(e), i === void 0 && (i = e), i === pu && (i = void 0), this.autoFreeze_ && $s(i, !0), n) {
          const s = [], o = [];
          Xt("Patches").generateReplacementPatches_(e, i, s, o), n(s, o);
        }
        return i;
      } else
        ze(1, e);
    }, this.produceWithPatches = (e, r) => {
      if (typeof e == "function")
        return (o, ...u) => this.produceWithPatches(o, (l) => e(l, ...u));
      let n, i;
      return [this.produce(e, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    gt(t) || ze(8), Jt(t) && (t = _h(t));
    const e = ea(this), r = Rs(t, void 0);
    return r[Je].isManual_ = !0, Es(e), r;
  }
  finishDraft(t, e) {
    const r = t && t[Je];
    (!r || !r.isManual_) && ze(9);
    const { scope_: n } = r;
    return Zo(n, e), ta(void 0, n);
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
    const n = Xt("Patches").applyPatches_;
    return Jt(t) ? n(t, e) : this.produce(
      t,
      (i) => n(i, e)
    );
  }
};
function Rs(t, e) {
  const r = ti(t) ? Xt("MapSet").proxyMap_(t, e) : ri(t) ? Xt("MapSet").proxySet_(t, e) : yh(t, e);
  return (e ? e.scope_ : gu()).drafts_.push(r), r;
}
function _h(t) {
  return Jt(t) || ze(10, t), _u(t);
}
function _u(t) {
  if (!gt(t) || ni(t))
    return t;
  const e = t[Je];
  let r;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, r = bs(t, e.scope_.immer_.useStrictShallowCopy_);
  } else
    r = bs(t, !0);
  return $n(r, (n, i) => {
    yu(r, n, _u(i));
  }), e && (e.finalized_ = !1), r;
}
var Xe = new bh(), Eu = Xe.produce;
Xe.produceWithPatches.bind(
  Xe
);
Xe.setAutoFreeze.bind(Xe);
Xe.setUseStrictShallowCopy.bind(Xe);
Xe.applyPatches.bind(Xe);
Xe.createDraft.bind(Xe);
Xe.finishDraft.bind(Xe);
function na(t, e) {
  function r(...n) {
    if (e) {
      let i = e(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? Pe(0) : "prepareAction did not return an object");
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
  return r.toString = () => `${t}`, r.type = t, r.match = (n) => uh(n) && n.type === t, r;
}
function ia(t) {
  return gt(t) ? Eu(t, () => {
  }) : t;
}
function sa(t, e, r) {
  if (t.has(e)) {
    let i = t.get(e);
    return r.update && (i = r.update(i, e, t), t.set(e, i)), i;
  }
  if (!r.insert) throw new Error(process.env.NODE_ENV === "production" ? Pe(10) : "No insert provided for key not already in map");
  const n = r.insert(e, t);
  return t.set(e, n), n;
}
function vu(t) {
  const e = {}, r = [];
  let n;
  const i = {
    addCase(s, o) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? Pe(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? Pe(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const u = typeof s == "string" ? s : s.type;
      if (!u)
        throw new Error(process.env.NODE_ENV === "production" ? Pe(28) : "`builder.addCase` cannot be called with an empty action type");
      if (u in e)
        throw new Error(process.env.NODE_ENV === "production" ? Pe(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${u}'`);
      return e[u] = o, i;
    },
    addMatcher(s, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? Pe(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: s,
        reducer: o
      }), i;
    },
    addDefaultCase(s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? Pe(31) : "`builder.addDefaultCase` can only be called once");
      return n = s, i;
    }
  };
  return t(i), [e, r, n];
}
function Eh(t) {
  return typeof t == "function";
}
function vh(t, e) {
  if (process.env.NODE_ENV !== "production" && typeof e == "object")
    throw new Error(process.env.NODE_ENV === "production" ? Pe(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = vu(e), s;
  if (Eh(t))
    s = () => ia(t());
  else {
    const u = ia(t);
    s = () => u;
  }
  function o(u = s(), l) {
    let p = [r[l.type], ...n.filter(({
      matcher: h
    }) => h(l)).map(({
      reducer: h
    }) => h)];
    return p.filter((h) => !!h).length === 0 && (p = [i]), p.reduce((h, m) => {
      if (m)
        if (Jt(h)) {
          const C = m(h, l);
          return C === void 0 ? h : C;
        } else {
          if (gt(h))
            return Eu(h, (A) => m(A, l));
          {
            const A = m(h, l);
            if (A === void 0) {
              if (h === null)
                return h;
              throw new Error(process.env.NODE_ENV === "production" ? Pe(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return A;
          }
        }
      return h;
    }, u);
  }
  return o.getInitialState = s, o;
}
var Rh = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Sh(t, e) {
  return `${t}/${e}`;
}
function wh({
  creators: t
} = {}) {
  var r;
  const e = (r = t == null ? void 0 : t.asyncThunk) == null ? void 0 : r[Rh];
  return function(i) {
    const {
      name: s,
      reducerPath: o = s
    } = i;
    if (!s)
      throw new Error(process.env.NODE_ENV === "production" ? Pe(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const u = (typeof i.reducers == "function" ? i.reducers(Oh()) : i.reducers) || {}, l = Object.keys(u), p = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, h = {
      addCase(P, F) {
        const x = typeof P == "string" ? P : P.type;
        if (!x)
          throw new Error(process.env.NODE_ENV === "production" ? Pe(12) : "`context.addCase` cannot be called with an empty action type");
        if (x in p.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? Pe(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + x);
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
    l.forEach((P) => {
      const F = u[P], x = {
        reducerName: P,
        type: Sh(s, P),
        createNotation: typeof i.reducers == "function"
      };
      Ch(F) ? Ih(x, F, h, e) : Ah(x, F, h);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? Pe(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [P = {}, F = [], x = void 0] = typeof i.extraReducers == "function" ? vu(i.extraReducers) : [i.extraReducers], G = {
        ...P,
        ...p.sliceCaseReducersByType
      };
      return vh(i.initialState, (te) => {
        for (let V in G)
          te.addCase(V, G[V]);
        for (let V of p.sliceMatchers)
          te.addMatcher(V.matcher, V.reducer);
        for (let V of F)
          te.addMatcher(V.matcher, V.reducer);
        x && te.addDefaultCase(x);
      });
    }
    const A = (P) => P, C = /* @__PURE__ */ new Map();
    let S;
    function I(P, F) {
      return S || (S = m()), S(P, F);
    }
    function R() {
      return S || (S = m()), S.getInitialState();
    }
    function $(P, F = !1) {
      function x(te) {
        let V = te[P];
        if (typeof V > "u") {
          if (F)
            V = R();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? Pe(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return V;
      }
      function G(te = A) {
        const V = sa(C, F, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return sa(V, te, {
          insert: () => {
            const Te = {};
            for (const [pe, re] of Object.entries(i.selectors ?? {}))
              Te[pe] = Th(re, te, R, F);
            return Te;
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
      reducer: I,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: R,
      ...$(o),
      injectInto(P, {
        reducerPath: F,
        ...x
      } = {}) {
        const G = F ?? o;
        return P.inject({
          reducerPath: G,
          reducer: I
        }, x), {
          ...k,
          ...$(G, !0)
        };
      }
    };
    return k;
  };
}
function Th(t, e, r, n) {
  function i(s, ...o) {
    let u = e(s);
    if (typeof u > "u") {
      if (n)
        u = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? Pe(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(u, ...o);
  }
  return i.unwrapped = t, i;
}
var Nr = /* @__PURE__ */ wh();
function Oh() {
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
function Ah({
  type: t,
  reducerName: e,
  createNotation: r
}, n, i) {
  let s, o;
  if ("reducer" in n) {
    if (r && !Nh(n))
      throw new Error(process.env.NODE_ENV === "production" ? Pe(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    s = n.reducer, o = n.prepare;
  } else
    s = n;
  i.addCase(t, s).exposeCaseReducer(e, s).exposeAction(e, o ? na(t, o) : na(t));
}
function Ch(t) {
  return t._reducerDefinitionType === "asyncThunk";
}
function Nh(t) {
  return t._reducerDefinitionType === "reducerWithPrepare";
}
function Ih({
  type: t,
  reducerName: e
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? Pe(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: s,
    fulfilled: o,
    pending: u,
    rejected: l,
    settled: p,
    options: h
  } = r, m = i(t, s, h);
  n.exposeAction(e, m), o && n.addCase(m.fulfilled, o), u && n.addCase(m.pending, u), l && n.addCase(m.rejected, l), p && n.addMatcher(m.settled, p), n.exposeCaseReducer(e, {
    fulfilled: o || Rn,
    pending: u || Rn,
    rejected: l || Rn,
    settled: p || Rn
  });
}
function Rn() {
}
function Pe(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
const Dh = {
  inwardRegisterFormPreview: void 0
}, Ru = Nr({
  name: "inwardRegister",
  initialState: Dh,
  reducers: {
    setInwardRegisterFormPreview: (t, e) => {
      t.inwardRegisterFormPreview = e.payload;
    }
  }
}), { setInwardRegisterFormPreview: Xp } = Ru.actions, Zp = (t) => t.inwardRegister, Ph = Ru.reducer, kh = {
  dumpRegisterFormPreview: void 0
}, Su = Nr({
  name: "dumpRegister",
  initialState: kh,
  reducers: {
    setDumpRegisterFormPreview: (t, e) => {
      t.dumpRegisterFormPreview = e.payload;
    }
  }
}), { setDumpRegisterFormPreview: em } = Su.actions, tm = (t) => t.dumpRegister, xh = Su.reducer, Fh = {
  aqrFormPreview: void 0
}, wu = Nr({
  name: "aqr",
  initialState: Fh,
  reducers: {
    setAQRFormPreview: (t, e) => {
      t.aqrFormPreview = e.payload;
    }
  }
}), { setAQRFormPreview: rm } = wu.actions, nm = (t) => t.aqr, qh = wu.reducer, Lh = {
  secondSaleRegisterFormPreview: void 0
}, Tu = Nr({
  name: "secondSaleRegister",
  initialState: Lh,
  reducers: {
    setSecondSaleRegisterFormPreview: (t, e) => {
      t.secondSaleRegisterFormPreview = e.payload;
    }
  }
}), { setSecondSaleRegisterFormPreview: im } = Tu.actions, sm = (t) => t.secondSaleRegister, Bh = Tu.reducer, $h = {
  vehicleDispatchRegisterFormPreview: void 0
}, Ou = Nr({
  name: "vehicleDispatchRegister",
  initialState: $h,
  reducers: {
    setVehicleDispatchRegisterFormPreview: (t, e) => {
      t.vehicleDispatchRegisterFormPreview = e.payload;
    }
  }
}), { setVehicleDispatchRegisterFormPreview: om } = Ou.actions, am = (t) => t.vehicleDispatchRegister, Uh = Ou.reducer, Mh = {
  eodReportFormPreview: void 0
}, Au = Nr({
  name: "eodReport",
  initialState: Mh,
  reducers: {
    setEODReportFormPreview: (t, e) => {
      t.eodReportFormPreview = e.payload;
    }
  }
}), { setEODReportFormPreview: um } = Au.actions, lm = (t) => t.eodReport, jh = Au.reducer, cm = {
  inwardRegister: Ph,
  dumpRegister: xh,
  aqr: qh,
  secondSaleRegister: Bh,
  vehicleDispatchRegister: Uh,
  eodReport: jh
};
export {
  oh as AQRQualityParams,
  tp as AQRinitalValues,
  Yu as InwardProductInitialValue,
  Hh as InwardRegisterInitialValue,
  ih as SecondSaleProductsInitialValue,
  Zh as SecondSaleRegisterInitialValue,
  qh as aqrReducer,
  nm as aqrStates,
  up as aqrValidationSchema,
  zh as arrayConstants,
  nh as dumpProductsInitialValue,
  Jh as dumpRegisterInitialValue,
  xh as dumpRegisterReducer,
  ip as dumpRegisterSchema,
  tm as dumpRegisterStates,
  ep as eodReportInitialValue,
  sh as eodReportProductsInitialValue,
  jh as eodReportReducer,
  lm as eodReportStates,
  op as eodReportValidatoinSchema,
  Wh as inventoryOptions,
  cm as inventoryReducer,
  Gh as inventoryRouteConstants,
  Ph as inwardRegisterReducer,
  Zp as inwardRegisterStates,
  ap as inwardRegisterValidationSchema,
  Qh as laborAttendanceInitialValue,
  rp as laborAttendanceSchema,
  Zd as laborBankDetailsInitialValue,
  eh as laborFamilyDetailsInitialValue,
  Yh as laborRegistrationInitialValue,
  np as laborRegistrationSchema,
  th as laborWorkExperienceInitialValue,
  rh as laborsDetailsInitialValue,
  Bh as secondSaleRegisterReducer,
  sm as secondSaleRegisterStates,
  rm as setAQRFormPreview,
  em as setDumpRegisterFormPreview,
  um as setEODReportFormPreview,
  Xp as setInwardRegisterFormPreview,
  im as setSecondSaleRegisterFormPreview,
  om as setVehicleDispatchRegisterFormPreview,
  kp as useCreateAQR,
  mp as useCreateDumpRegister,
  $p as useCreateEODReport,
  Qp as useCreateFinalInvoice,
  lp as useCreateInwardRegister,
  zp as useCreateLaborRegistration,
  vp as useCreateSecondSaleRegister,
  Ap as useCreateVehicleDispatchRegister,
  Fp as useDeleteAQRById,
  gp as useDeleteDumpRegisterById,
  Mp as useDeleteEODReportById,
  fp as useDeleteInwardRegisterById,
  Hp as useDeleteLaborRegistrationById,
  Sp as useDeleteSecondSaleRegisterById,
  Np as useDeleteVehicleDispatchRegisterById,
  Lp as useGetAQRForUpdateById,
  Bp as useGetAQRForViewById,
  qp as useGetAllAQRs,
  bp as useGetAllDumpRegisters,
  jp as useGetAllEODReports,
  Jp as useGetAllFinalInvoices,
  dp as useGetAllInwardRegisters,
  Kp as useGetAllLaborRegistration,
  wp as useGetAllSecondSaleRegisters,
  Ip as useGetAllVehicleDispatchRegisters,
  Ep as useGetDumpRegisterForUpdateById,
  _p as useGetDumpRegisterForViewById,
  Gp as useGetEODReportForUpdateById,
  Vp as useGetEODReportForViewById,
  pp as useGetInwardRegisterForUpdateById,
  hp as useGetInwardRegisterForViewById,
  Yp as useGetLaborRegistrationById,
  Op as useGetSecondSaleRegisterForUpdateById,
  Tp as useGetSecondSaleRegisterForViewById,
  Pp as useGetVehicleDispatchRegisterForUpdateById,
  Dp as useGetVehicleDispatchRegisterForViewById,
  xp as useUpdateAQR,
  yp as useUpdateDumpRegister,
  Up as useUpdateEODReport,
  cp as useUpdateInwardRegister,
  Wp as useUpdateLaborRegistration,
  Rp as useUpdateSecondSaleRegister,
  Cp as useUpdateVehicleDispatchRegister,
  Xh as vehicleDispatchRegisterInitialValues,
  Uh as vehicleDispatchRegisterReducer,
  sp as vehicleDispatchRegisterSchema,
  am as vehicleDispatchRegisterStates
};
