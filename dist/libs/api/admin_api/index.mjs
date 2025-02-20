var fs = (t) => {
  throw TypeError(t);
};
var cn = (t, e, r) => e.has(t) || fs("Cannot " + r);
var _ = (t, e, r) => (cn(t, e, "read from private field"), r ? r.call(t) : e.get(t)), se = (t, e, r) => e.has(t) ? fs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), G = (t, e, r, n) => (cn(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), ae = (t, e, r) => (cn(t, e, "access private method"), r);
const eu = {
  //roles
  GET_ALL_ROLES: "/roles/",
  //Employee
  GET_ALL_EMPLOYEES: "/employee/",
  CREATE_EMPLOYEE: "/employee/",
  GET_AN_EMPLOYEE: "/employee",
  UPDATE_AN_EMPLOYEE: "/employee",
  DELETE_EMPLOYEE: "/employee/",
  CHANGE_EMPLOYEE_STATUS: "/employeeCredential/",
  //Customers
  GET_ALL_CUSTOMERS: "/customers/",
  POST_CUSTOMER: "/customers/",
  DELETE_CUSTOMER: "/customers/",
  UPDATE_CUSTOMER: "/customers",
  GET_A_CUSTOMER: "/customers",
  GET_CUSTOMER_NAMES: "/customers/names/all",
  GET_CUSTOMER_PARTIAL_DATA: "/customers/partial/all",
  GET_ALL_CUSTOMER_TYPE: "/customerType/",
  GET_ALL_CUSTOMER_CATEGORY: "/customerCategory/ ",
  //Farmers
  GET_ALL_FARMERS: "/farmers/",
  POST_FARMER: "/farmers/",
  UPDATE_FARMER: "/farmers",
  GET_A_FARMER: "/farmers",
  GET_ALL_FARMERS_FILTERED: "/farmers/filterFarmer/all",
  //Vendors
  GET_ALL_VENDORS: "/vendors/",
  GET_A_VENDOR: "/vendors",
  POST_VENDOR: "/vendors/",
  UPDATE_VENDOR: "/vendors",
  GET_ALL_VENDORS_FILTERED: "/vendors/filterVendor/all",
  GET_ALL_VENDOR_CAT: "/vendor-categories/",
  CREATE_VENDOR_CAT: "/vendor-categories/",
  GET_A_VENDOR_CAT: "/vendor-categories",
  UPDATE_VENDOR_CAT: "/vendor-categories",
  GET_ALL_VENDOR_SUBCAT: "/vendor-subcategories/",
  CREATE_VENDOR_SUBCAT: "/vendor-subcategories/",
  GET_A_VENDOR_SUBCAT: "/vendor-subcategories",
  UPDATE_VENDOR_SUBCAT: "/vendor-subcategories",
  GET_VENDOR_SUBCAT_BY_QUERY: "/vendor-subcategories/getSubcategories",
  GET_VENDOR_BY_QUERY: "/vendors/bysearch/getvendors",
  //Prooducts
  GET_ALL_PRODUCTS: "/products/",
  GET_A_PRODUCTS: "/products",
  CREATE_PRODUCTS: "/products/",
  UPDATE_PRODUCTS: "/products",
  GET_ALL_PRODUCT_CATEGORY: "/productCategory",
  GET_A_PRODUCT_CATEGORY: "/productCategory",
  CREATE_PRODUCT_CATEGORY: "/productCategory",
  UPDATE_PRODUCT_CATEGORY: "/productCategory",
  GET_ALL_PRODUCT_SUBCATEGORY: "/productSubcategory",
  GET_A_PRODUCT_SUBCATEGORY: "/productSubcategory",
  CREATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  UPDATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  GET_ALL_PRODUCT_CLASSIFICATION: "/productClassification",
  GET_A_PRODUCT_CLASSIFICATION: "/productClassification",
  CREATE_PRODUCT_CLASSIFICATION: "/productClassification",
  UPDATE_PRODUCT_CLASSIFICATION: "/productClassification",
  GET_ALL_UOM: "/uoms/",
  CREATE_UOM: "/uoms/",
  GET_A_UOM: "/uoms",
  UPDATE_UOM: "/uoms",
  GET_ALL_UOM_CONVERSION: "/uom-conversion-matrix/",
  GET_A_UOM_CONVERSION: "/uom-conversion-matrix",
  CREATE_UOM_CONVERSION: "/uom-conversion-matrix/",
  UPDATE_UOM_CONVERSION: "/uom-conversion-matrix",
  //Locations
  //Offices
  GET_ALL_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
  GET_ALL_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
  GET_A_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
  GET_A_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
  POST_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
  POST_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
  UPDATE_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
  UPDATE_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
  GET_ALL_OFFICES: "/location-offices/",
  GET_A_OFFICE: "/location-offices/",
  CREATE_OFFICE: "/location-offices",
  UPDATE_OFFICE: "/location-offices",
  //Branches
  GET_ALL_BRANCHES: "/location-branches/",
  GET_A_BRANCH: "/location-branches/",
  CREATE_BRANCH: "/location-branches",
  UPDATE_BRANCH: "/location-branches",
  GET_ALL_BRANCHES_FILTERED: "/location-branches/filterData/filter/all"
}, b = {
  //roles
  GET_ALL_ROLES: "/roles/",
  //Employee
  GET_ALL_EMPLOYEES: "/employee/",
  CREATE_EMPLOYEE: "/employee/",
  GET_AN_EMPLOYEE: "/employee",
  UPDATE_AN_EMPLOYEE: "/employee",
  DELETE_EMPLOYEE: "/employee/",
  CHANGE_EMPLOYEE_STATUS: "/employeeCredential/",
  //Customers
  GET_ALL_CUSTOMERS: "/customers/",
  POST_CUSTOMER: "/customers/",
  CREATE_CUSTOMER: "/customers/",
  DELETE_CUSTOMER: "/customers/",
  UPDATE_CUSTOMER: "/customers",
  GET_A_CUSTOMER: "/customers",
  GET_CUSTOMER_NAMES: "/customers/names/all",
  GET_CUSTOMER_PARTIAL_DATA: "/customers/partial/all",
  GET_ALL_CUSTOMER_TYPE: "/customerType/",
  GET_ALL_CUSTOMER_CATEGORY: "/customerCategory/ ",
  //Farmers
  GET_ALL_FARMERS: "/farmers/",
  GET_A_FARMER: "/farmers",
  POST_FARMER: "/farmers/",
  CREATE_FARMER: "/farmers/",
  UPDATE_FARMER: "/farmers",
  DELETE_FARMER: "/farmers",
  GET_ALL_FARMERS_FILTERED: "/farmers/filterFarmer/all",
  //Vendors
  GET_ALL_VENDORS: "/vendors/",
  GET_A_VENDOR: "/vendors",
  POST_VENDOR: "/vendors/",
  CREATE_VENDOR: "/vendors/",
  UPDATE_VENDOR: "/vendors",
  DELETE_VENDOR: "/vendors",
  GET_ALL_VENDORS_FILTERED: "/vendors/filterVendor/all",
  GET_ALL_VENDOR_CAT: "/vendor-categories/",
  CREATE_VENDOR_CAT: "/vendor-categories/",
  GET_A_VENDOR_CAT: "/vendor-categories",
  UPDATE_VENDOR_CAT: "/vendor-categories",
  DELETE_VENDOR_CAT: "/vendor-categories",
  GET_ALL_VENDOR_SUBCAT: "/vendor-subcategories/",
  CREATE_VENDOR_SUBCAT: "/vendor-subcategories/",
  GET_A_VENDOR_SUBCAT: "/vendor-subcategories",
  UPDATE_VENDOR_SUBCAT: "/vendor-subcategories",
  DELETE_VENDOR_SUBCAT: "/vendor-subcategories",
  GET_VENDOR_SUBCAT_BY_QUERY: "/vendor-subcategories/getSubcategories",
  GET_VENDOR_BY_QUERY: "/vendors/bysearch/getvendors",
  //Prooducts
  GET_ALL_PRODUCTS: "/products/",
  GET_A_PRODUCTS: "/products",
  CREATE_PRODUCTS: "/products/",
  UPDATE_PRODUCTS: "/products",
  DELETE_PRODUCT: "/products",
  GET_PRODUCTS_PARTIAL: "/products/partial/data",
  GET_ALL_PRODUCT_CATEGORY: "/productCategory/",
  GET_A_PRODUCT_CATEGORY: "/productCategory",
  CREATE_PRODUCT_CATEGORY: "/productCategory",
  UPDATE_PRODUCT_CATEGORY: "/productCategory",
  DELETE_PRODUCT_CATEGORY: "/productCategory",
  GET_ALL_PRODUCT_SUBCATEGORY: "/productSubcategory",
  GET_A_PRODUCT_SUBCATEGORY: "/productSubcategory",
  CREATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  UPDATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  DELETE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  GET_ALL_PRODUCT_CLASSIFICATION: "/productClassification",
  GET_A_PRODUCT_CLASSIFICATION: "/productClassification",
  CREATE_PRODUCT_CLASSIFICATION: "/productClassification",
  UPDATE_PRODUCT_CLASSIFICATION: "/productClassification",
  DELETE_PRODUCT_CLASSIFICATION: "/productClassification",
  GET_ALL_UOM: "/uoms/",
  CREATE_UOM: "/uoms/",
  GET_A_UOM: "/uoms",
  UPDATE_UOM: "/uoms",
  DELETE_UOM: "/uoms",
  GET_ALL_UOM_CONVERSION: "/uom-conversion-matrix/",
  GET_A_UOM_CONVERSION: "/uom-conversion-matrix",
  CREATE_UOM_CONVERSION: "/uom-conversion-matrix/",
  UPDATE_UOM_CONVERSION: "/uom-conversion-matrix",
  DELETE_UOM_CONVERSION: "/uom-conversion-matrix",
  //Locations
  //Offices
  GET_ALL_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
  GET_ALL_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
  GET_A_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
  GET_A_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
  POST_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
  POST_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
  UPDATE_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
  UPDATE_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
  //Offices
  GET_ALL_OFFICES: "/location-offices",
  GET_A_OFFICE: "/location-offices",
  CREATE_OFFICE: "/location-offices",
  UPDATE_OFFICE: "/location-offices",
  DELETE_OFFICE: "/location-offices",
  //Branches
  GET_ALL_BRANCHES: "/location-branches",
  GET_A_BRANCH: "/location-branches",
  CREATE_BRANCH: "/location-branches",
  UPDATE_BRANCH: "/location-branches",
  DELETE_BRANCH: "/location-branches",
  GET_ALL_BRANCHES_FILTERED: "/location-branches/filterData/filter/all"
};
var Ur = class {
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
function Go() {
}
function ds(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function $o(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Tr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ve(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function hs(t) {
  return JSON.stringify(
    t,
    (e, r) => En(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function pn(t, e) {
  if (t === e)
    return t;
  const r = ps(t) && ps(e);
  if (r || En(t) && En(e)) {
    const n = r ? t : Object.keys(t), o = n.length, a = r ? e : Object.keys(e), c = a.length, l = r ? [] : {};
    let y = 0;
    for (let m = 0; m < c; m++) {
      const E = r ? m : a[m];
      (!r && n.includes(E) || r) && t[E] === void 0 && e[E] === void 0 ? (l[E] = void 0, y++) : (l[E] = pn(t[E], e[E]), l[E] === t[E] && t[E] !== void 0 && y++);
    }
    return o === c && y === o ? t : l;
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
function ps(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function En(t) {
  if (!Es(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!Es(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function Es(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ms(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return pn(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return pn(t, e);
  }
  return e;
}
var yt, rt, Ut, ks, jo = (ks = class extends Ur {
  constructor() {
    super();
    se(this, yt);
    se(this, rt);
    se(this, Ut);
    G(this, Ut, (e) => {
      if (!Sr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    _(this, rt) || this.setEventListener(_(this, Ut));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = _(this, rt)) == null || e.call(this), G(this, rt, void 0));
  }
  setEventListener(e) {
    var r;
    G(this, Ut, e), (r = _(this, rt)) == null || r.call(this), G(this, rt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    _(this, yt) !== e && (G(this, yt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof _(this, yt) == "boolean" ? _(this, yt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, yt = new WeakMap(), rt = new WeakMap(), Ut = new WeakMap(), ks), Bo = new jo(), Ft, nt, Lt, Ms, Vo = (Ms = class extends Ur {
  constructor() {
    super();
    se(this, Ft, !0);
    se(this, nt);
    se(this, Lt);
    G(this, Lt, (e) => {
      if (!Sr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    _(this, nt) || this.setEventListener(_(this, Lt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = _(this, nt)) == null || e.call(this), G(this, nt, void 0));
  }
  setEventListener(e) {
    var r;
    G(this, Lt, e), (r = _(this, nt)) == null || r.call(this), G(this, nt, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    _(this, Ft) !== e && (G(this, Ft, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return _(this, Ft);
  }
}, Ft = new WeakMap(), nt = new WeakMap(), Lt = new WeakMap(), Ms), Yo = new Vo();
function qo(t) {
  return (t ?? "online") === "online" ? Yo.isOnline() : !0;
}
function Ho() {
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
        l.forEach((y) => {
          r(y);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let y;
      e++;
      try {
        y = l();
      } finally {
        e--, e || c();
      }
      return y;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...y) => {
      a(() => {
        l(...y);
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
var Fr = Ho();
function Wo(t, e) {
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
function zo() {
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
var De, q, Zt, be, Rt, It, Be, er, Nt, xt, gt, vt, st, kt, Q, Jt, mn, _n, yn, Rn, gn, vn, Cn, js, Gs, Ko = (Gs = class extends Ur {
  constructor(e, r) {
    super();
    se(this, Q);
    se(this, De);
    se(this, q);
    se(this, Zt);
    se(this, be);
    se(this, Rt);
    se(this, It);
    se(this, Be);
    se(this, er);
    se(this, Nt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    se(this, xt);
    se(this, gt);
    se(this, vt);
    se(this, st);
    se(this, kt, /* @__PURE__ */ new Set());
    this.options = r, G(this, De, e), G(this, Be, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (_(this, q).addObserver(this), _s(_(this, q), this.options) ? ae(this, Q, Jt).call(this) : this.updateResult(), ae(this, Q, Rn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Tn(
      _(this, q),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Tn(
      _(this, q),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ae(this, Q, gn).call(this), ae(this, Q, vn).call(this), _(this, q).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, o = _(this, q);
    if (this.options = _(this, De).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Ve(this.options.enabled, _(this, q)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ae(this, Q, Cn).call(this), _(this, q).setOptions(this.options), n._defaulted && !wr(this.options, n) && _(this, De).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: _(this, q),
      observer: this
    });
    const a = this.hasListeners();
    a && ys(
      _(this, q),
      o,
      this.options,
      n
    ) && ae(this, Q, Jt).call(this), this.updateResult(r), a && (_(this, q) !== o || Ve(this.options.enabled, _(this, q)) !== Ve(n.enabled, _(this, q)) || Tr(this.options.staleTime, _(this, q)) !== Tr(n.staleTime, _(this, q))) && ae(this, Q, mn).call(this);
    const c = ae(this, Q, _n).call(this);
    a && (_(this, q) !== o || Ve(this.options.enabled, _(this, q)) !== Ve(n.enabled, _(this, q)) || c !== _(this, st)) && ae(this, Q, yn).call(this, c);
  }
  getOptimisticResult(e) {
    const r = _(this, De).getQueryCache().build(_(this, De), e), n = this.createResult(r, e);
    return Qo(this, n) && (G(this, be, n), G(this, It, this.options), G(this, Rt, _(this, q).state)), n;
  }
  getCurrentResult() {
    return _(this, be);
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
    _(this, kt).add(e);
  }
  getCurrentQuery() {
    return _(this, q);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const r = _(this, De).defaultQueryOptions(e), n = _(this, De).getQueryCache().build(_(this, De), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    return ae(this, Q, Jt).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), _(this, be)));
  }
  createResult(e, r) {
    var Ee;
    const n = _(this, q), o = this.options, a = _(this, be), c = _(this, Rt), l = _(this, It), m = e !== n ? e.state : _(this, Zt), { state: E } = e;
    let R = { ...E }, x = !1, U;
    if (r._optimisticResults) {
      const te = this.hasListeners(), Se = !te && _s(e, r), Ye = te && ys(e, n, r, o);
      (Se || Ye) && (R = {
        ...R,
        ...Wo(E.data, e.options)
      }), r._optimisticResults === "isRestoring" && (R.fetchStatus = "idle");
    }
    let { error: A, errorUpdatedAt: P, status: O } = R;
    if (r.select && R.data !== void 0)
      if (a && R.data === (c == null ? void 0 : c.data) && r.select === _(this, er))
        U = _(this, Nt);
      else
        try {
          G(this, er, r.select), U = r.select(R.data), U = ms(a == null ? void 0 : a.data, U, r), G(this, Nt, U), G(this, Be, null);
        } catch (te) {
          G(this, Be, te);
        }
    else
      U = R.data;
    if (r.placeholderData !== void 0 && U === void 0 && O === "pending") {
      let te;
      if (a != null && a.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        te = a.data;
      else if (te = typeof r.placeholderData == "function" ? r.placeholderData(
        (Ee = _(this, xt)) == null ? void 0 : Ee.state.data,
        _(this, xt)
      ) : r.placeholderData, r.select && te !== void 0)
        try {
          te = r.select(te), G(this, Be, null);
        } catch (Se) {
          G(this, Be, Se);
        }
      te !== void 0 && (O = "success", U = ms(
        a == null ? void 0 : a.data,
        te,
        r
      ), x = !0);
    }
    _(this, Be) && (A = _(this, Be), U = _(this, Nt), P = Date.now(), O = "error");
    const j = R.fetchStatus === "fetching", L = O === "pending", K = O === "error", ue = L && j, k = U !== void 0;
    return {
      status: O,
      fetchStatus: R.fetchStatus,
      isPending: L,
      isSuccess: O === "success",
      isError: K,
      isInitialLoading: ue,
      isLoading: ue,
      data: U,
      dataUpdatedAt: R.dataUpdatedAt,
      error: A,
      errorUpdatedAt: P,
      failureCount: R.fetchFailureCount,
      failureReason: R.fetchFailureReason,
      errorUpdateCount: R.errorUpdateCount,
      isFetched: R.dataUpdateCount > 0 || R.errorUpdateCount > 0,
      isFetchedAfterMount: R.dataUpdateCount > m.dataUpdateCount || R.errorUpdateCount > m.errorUpdateCount,
      isFetching: j,
      isRefetching: j && !L,
      isLoadingError: K && !k,
      isPaused: R.fetchStatus === "paused",
      isPlaceholderData: x,
      isRefetchError: K && k,
      isStale: Ln(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = _(this, be), n = this.createResult(_(this, q), this.options);
    if (G(this, Rt, _(this, q).state), G(this, It, this.options), _(this, Rt).data !== void 0 && G(this, xt, _(this, q)), wr(n, r))
      return;
    G(this, be, n);
    const o = {}, a = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: c } = this.options, l = typeof c == "function" ? c() : c;
      if (l === "all" || !l && !_(this, kt).size)
        return !0;
      const y = new Set(
        l ?? _(this, kt)
      );
      return this.options.throwOnError && y.add("error"), Object.keys(_(this, be)).some((m) => {
        const E = m;
        return _(this, be)[E] !== r[E] && y.has(E);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && a() && (o.listeners = !0), ae(this, Q, js).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ae(this, Q, Rn).call(this);
  }
}, De = new WeakMap(), q = new WeakMap(), Zt = new WeakMap(), be = new WeakMap(), Rt = new WeakMap(), It = new WeakMap(), Be = new WeakMap(), er = new WeakMap(), Nt = new WeakMap(), xt = new WeakMap(), gt = new WeakMap(), vt = new WeakMap(), st = new WeakMap(), kt = new WeakMap(), Q = new WeakSet(), Jt = function(e) {
  ae(this, Q, Cn).call(this);
  let r = _(this, q).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(Go)), r;
}, mn = function() {
  ae(this, Q, gn).call(this);
  const e = Tr(
    this.options.staleTime,
    _(this, q)
  );
  if (Sr || _(this, be).isStale || !ds(e))
    return;
  const n = $o(_(this, be).dataUpdatedAt, e) + 1;
  G(this, gt, setTimeout(() => {
    _(this, be).isStale || this.updateResult();
  }, n));
}, _n = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(_(this, q)) : this.options.refetchInterval) ?? !1;
}, yn = function(e) {
  ae(this, Q, vn).call(this), G(this, st, e), !(Sr || Ve(this.options.enabled, _(this, q)) === !1 || !ds(_(this, st)) || _(this, st) === 0) && G(this, vt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Bo.isFocused()) && ae(this, Q, Jt).call(this);
  }, _(this, st)));
}, Rn = function() {
  ae(this, Q, mn).call(this), ae(this, Q, yn).call(this, ae(this, Q, _n).call(this));
}, gn = function() {
  _(this, gt) && (clearTimeout(_(this, gt)), G(this, gt, void 0));
}, vn = function() {
  _(this, vt) && (clearInterval(_(this, vt)), G(this, vt, void 0));
}, Cn = function() {
  const e = _(this, De).getQueryCache().build(_(this, De), this.options);
  if (e === _(this, q))
    return;
  const r = _(this, q);
  G(this, q, e), G(this, Zt, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, js = function(e) {
  Fr.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(_(this, be));
    }), _(this, De).getQueryCache().notify({
      query: _(this, q),
      type: "observerResultsUpdated"
    });
  });
}, Gs);
function Jo(t, e) {
  return Ve(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function _s(t, e) {
  return Jo(t, e) || t.state.data !== void 0 && Tn(t, e, e.refetchOnMount);
}
function Tn(t, e, r) {
  if (Ve(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && Ln(t, e);
  }
  return !1;
}
function ys(t, e, r, n) {
  return (t !== e || Ve(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && Ln(t, r);
}
function Ln(t, e) {
  return Ve(e.enabled, t) !== !1 && t.isStaleByTime(Tr(e.staleTime, t));
}
function Qo(t, e) {
  return !wr(t.getCurrentResult(), e);
}
var ot, it, Ue, ze, Ke, Or, On, $s, Xo = ($s = class extends Ur {
  constructor(e, r) {
    super();
    se(this, Ke);
    se(this, ot);
    se(this, it);
    se(this, Ue);
    se(this, ze);
    G(this, ot, e), this.setOptions(r), this.bindMethods(), ae(this, Ke, Or).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = _(this, ot).defaultMutationOptions(e), wr(this.options, r) || _(this, ot).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: _(this, Ue),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && hs(r.mutationKey) !== hs(this.options.mutationKey) ? this.reset() : ((n = _(this, Ue)) == null ? void 0 : n.state.status) === "pending" && _(this, Ue).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = _(this, Ue)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    ae(this, Ke, Or).call(this), ae(this, Ke, On).call(this, e);
  }
  getCurrentResult() {
    return _(this, it);
  }
  reset() {
    var e;
    (e = _(this, Ue)) == null || e.removeObserver(this), G(this, Ue, void 0), ae(this, Ke, Or).call(this), ae(this, Ke, On).call(this);
  }
  mutate(e, r) {
    var n;
    return G(this, ze, r), (n = _(this, Ue)) == null || n.removeObserver(this), G(this, Ue, _(this, ot).getMutationCache().build(_(this, ot), this.options)), _(this, Ue).addObserver(this), _(this, Ue).execute(e);
  }
}, ot = new WeakMap(), it = new WeakMap(), Ue = new WeakMap(), ze = new WeakMap(), Ke = new WeakSet(), Or = function() {
  var r;
  const e = ((r = _(this, Ue)) == null ? void 0 : r.state) ?? zo();
  G(this, it, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, On = function(e) {
  Fr.batch(() => {
    var r, n, o, a, c, l, y, m;
    if (_(this, ze) && this.hasListeners()) {
      const E = _(this, it).variables, R = _(this, it).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = _(this, ze)).onSuccess) == null || n.call(r, e.data, E, R), (a = (o = _(this, ze)).onSettled) == null || a.call(o, e.data, null, E, R)) : (e == null ? void 0 : e.type) === "error" && ((l = (c = _(this, ze)).onError) == null || l.call(c, e.error, E, R), (m = (y = _(this, ze)).onSettled) == null || m.call(
        y,
        void 0,
        e.error,
        E,
        R
      ));
    }
    this.listeners.forEach((E) => {
      E(_(this, it));
    });
  });
}, $s), bn = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rs;
function Zo() {
  if (Rs) return $;
  Rs = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.iterator;
  function x(f) {
    return f === null || typeof f != "object" ? null : (f = R && f[R] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var U = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, P = {};
  function O(f, v, B) {
    this.props = f, this.context = v, this.refs = P, this.updater = B || U;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(f, v) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, v, "setState");
  }, O.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function j() {
  }
  j.prototype = O.prototype;
  function L(f, v, B) {
    this.props = f, this.context = v, this.refs = P, this.updater = B || U;
  }
  var K = L.prototype = new j();
  K.constructor = L, A(K, O.prototype), K.isPureReactComponent = !0;
  var ue = Array.isArray, k = Object.prototype.hasOwnProperty, ie = { current: null }, Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(f, v, B) {
    var Y, W = {}, oe = null, re = null;
    if (v != null) for (Y in v.ref !== void 0 && (re = v.ref), v.key !== void 0 && (oe = "" + v.key), v) k.call(v, Y) && !Ee.hasOwnProperty(Y) && (W[Y] = v[Y]);
    var ee = arguments.length - 2;
    if (ee === 1) W.children = B;
    else if (1 < ee) {
      for (var X = Array(ee), me = 0; me < ee; me++) X[me] = arguments[me + 2];
      W.children = X;
    }
    if (f && f.defaultProps) for (Y in ee = f.defaultProps, ee) W[Y] === void 0 && (W[Y] = ee[Y]);
    return { $$typeof: t, type: f, key: oe, ref: re, props: W, _owner: ie.current };
  }
  function Se(f, v) {
    return { $$typeof: t, type: f.type, key: v, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Ye(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }
  function jt(f) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(B) {
      return v[B];
    });
  }
  var at = /\/+/g;
  function Te(f, v) {
    return typeof f == "object" && f !== null && f.key != null ? jt("" + f.key) : v.toString(36);
  }
  function we(f, v, B, Y, W) {
    var oe = typeof f;
    (oe === "undefined" || oe === "boolean") && (f = null);
    var re = !1;
    if (f === null) re = !0;
    else switch (oe) {
      case "string":
      case "number":
        re = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case t:
          case e:
            re = !0;
        }
    }
    if (re) return re = f, W = W(re), f = Y === "" ? "." + Te(re, 0) : Y, ue(W) ? (B = "", f != null && (B = f.replace(at, "$&/") + "/"), we(W, v, B, "", function(me) {
      return me;
    })) : W != null && (Ye(W) && (W = Se(W, B + (!W.key || re && re.key === W.key ? "" : ("" + W.key).replace(at, "$&/") + "/") + f)), v.push(W)), 1;
    if (re = 0, Y = Y === "" ? "." : Y + ":", ue(f)) for (var ee = 0; ee < f.length; ee++) {
      oe = f[ee];
      var X = Y + Te(oe, ee);
      re += we(oe, v, B, X, W);
    }
    else if (X = x(f), typeof X == "function") for (f = X.call(f), ee = 0; !(oe = f.next()).done; ) oe = oe.value, X = Y + Te(oe, ee++), re += we(oe, v, B, X, W);
    else if (oe === "object") throw v = String(f), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return re;
  }
  function ge(f, v, B) {
    if (f == null) return f;
    var Y = [], W = 0;
    return we(f, Y, "", "", function(oe) {
      return v.call(B, oe, W++);
    }), Y;
  }
  function ke(f) {
    if (f._status === -1) {
      var v = f._result;
      v = v(), v.then(function(B) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = B);
      }, function(B) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = B);
      }), f._status === -1 && (f._status = 0, f._result = v);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var w = { current: null }, Ge = { transition: null }, ut = { ReactCurrentDispatcher: w, ReactCurrentBatchConfig: Ge, ReactCurrentOwner: ie };
  function qe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return $.Children = { map: ge, forEach: function(f, v, B) {
    ge(f, function() {
      v.apply(this, arguments);
    }, B);
  }, count: function(f) {
    var v = 0;
    return ge(f, function() {
      v++;
    }), v;
  }, toArray: function(f) {
    return ge(f, function(v) {
      return v;
    }) || [];
  }, only: function(f) {
    if (!Ye(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, $.Component = O, $.Fragment = r, $.Profiler = o, $.PureComponent = L, $.StrictMode = n, $.Suspense = y, $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ut, $.act = qe, $.cloneElement = function(f, v, B) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var Y = A({}, f.props), W = f.key, oe = f.ref, re = f._owner;
    if (v != null) {
      if (v.ref !== void 0 && (oe = v.ref, re = ie.current), v.key !== void 0 && (W = "" + v.key), f.type && f.type.defaultProps) var ee = f.type.defaultProps;
      for (X in v) k.call(v, X) && !Ee.hasOwnProperty(X) && (Y[X] = v[X] === void 0 && ee !== void 0 ? ee[X] : v[X]);
    }
    var X = arguments.length - 2;
    if (X === 1) Y.children = B;
    else if (1 < X) {
      ee = Array(X);
      for (var me = 0; me < X; me++) ee[me] = arguments[me + 2];
      Y.children = ee;
    }
    return { $$typeof: t, type: f.type, key: W, ref: oe, props: Y, _owner: re };
  }, $.createContext = function(f) {
    return f = { $$typeof: c, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: a, _context: f }, f.Consumer = f;
  }, $.createElement = te, $.createFactory = function(f) {
    var v = te.bind(null, f);
    return v.type = f, v;
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(f) {
    return { $$typeof: l, render: f };
  }, $.isValidElement = Ye, $.lazy = function(f) {
    return { $$typeof: E, _payload: { _status: -1, _result: f }, _init: ke };
  }, $.memo = function(f, v) {
    return { $$typeof: m, type: f, compare: v === void 0 ? null : v };
  }, $.startTransition = function(f) {
    var v = Ge.transition;
    Ge.transition = {};
    try {
      f();
    } finally {
      Ge.transition = v;
    }
  }, $.unstable_act = qe, $.useCallback = function(f, v) {
    return w.current.useCallback(f, v);
  }, $.useContext = function(f) {
    return w.current.useContext(f);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(f) {
    return w.current.useDeferredValue(f);
  }, $.useEffect = function(f, v) {
    return w.current.useEffect(f, v);
  }, $.useId = function() {
    return w.current.useId();
  }, $.useImperativeHandle = function(f, v, B) {
    return w.current.useImperativeHandle(f, v, B);
  }, $.useInsertionEffect = function(f, v) {
    return w.current.useInsertionEffect(f, v);
  }, $.useLayoutEffect = function(f, v) {
    return w.current.useLayoutEffect(f, v);
  }, $.useMemo = function(f, v) {
    return w.current.useMemo(f, v);
  }, $.useReducer = function(f, v, B) {
    return w.current.useReducer(f, v, B);
  }, $.useRef = function(f) {
    return w.current.useRef(f);
  }, $.useState = function(f) {
    return w.current.useState(f);
  }, $.useSyncExternalStore = function(f, v, B) {
    return w.current.useSyncExternalStore(f, v, B);
  }, $.useTransition = function() {
    return w.current.useTransition();
  }, $.version = "18.3.1", $;
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
var gs;
function ei() {
  return gs || (gs = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), m = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), O = Symbol.iterator, j = "@@iterator";
      function L(s) {
        if (s === null || typeof s != "object")
          return null;
        var i = O && s[O] || s[j];
        return typeof i == "function" ? i : null;
      }
      var K = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, k = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ie = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ee = {}, te = null;
      function Se(s) {
        te = s;
      }
      Ee.setExtraStackFrame = function(s) {
        te = s;
      }, Ee.getCurrentStack = null, Ee.getStackAddendum = function() {
        var s = "";
        te && (s += te);
        var i = Ee.getCurrentStack;
        return i && (s += i() || ""), s;
      };
      var Ye = !1, jt = !1, at = !1, Te = !1, we = !1, ge = {
        ReactCurrentDispatcher: K,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: ie
      };
      ge.ReactDebugCurrentFrame = Ee, ge.ReactCurrentActQueue = k;
      function ke(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          Ge("warn", s, d);
        }
      }
      function w(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          Ge("error", s, d);
        }
      }
      function Ge(s, i, d) {
        {
          var p = ge.ReactDebugCurrentFrame, T = p.getStackAddendum();
          T !== "" && (i += "%s", d = d.concat([T]));
          var D = d.map(function(S) {
            return String(S);
          });
          D.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, D);
        }
      }
      var ut = {};
      function qe(s, i) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", T = p + "." + i;
          if (ut[T])
            return;
          w("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, p), ut[T] = !0;
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
          qe(s, "forceUpdate");
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
          qe(s, "replaceState");
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
          qe(s, "setState");
        }
      }, v = Object.assign, B = {};
      Object.freeze(B);
      function Y(s, i, d) {
        this.props = s, this.context = i, this.refs = B, this.updater = d || f;
      }
      Y.prototype.isReactComponent = {}, Y.prototype.setState = function(s, i) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, i, "setState");
      }, Y.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var W = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, oe = function(s, i) {
          Object.defineProperty(Y.prototype, s, {
            get: function() {
              ke("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
            }
          });
        };
        for (var re in W)
          W.hasOwnProperty(re) && oe(re, W[re]);
      }
      function ee() {
      }
      ee.prototype = Y.prototype;
      function X(s, i, d) {
        this.props = s, this.context = i, this.refs = B, this.updater = d || f;
      }
      var me = X.prototype = new ee();
      me.constructor = X, v(me, Y.prototype), me.isPureReactComponent = !0;
      function Gr() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var nr = Array.isArray;
      function Ot(s) {
        return nr(s);
      }
      function $r(s) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function bt(s) {
        try {
          return Je(s), !1;
        } catch {
          return !0;
        }
      }
      function Je(s) {
        return "" + s;
      }
      function ct(s) {
        if (bt(s))
          return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $r(s)), Je(s);
      }
      function sr(s, i, d) {
        var p = s.displayName;
        if (p)
          return p;
        var T = i.displayName || i.name || "";
        return T !== "" ? d + "(" + T + ")" : d;
      }
      function lt(s) {
        return s.displayName || "Context";
      }
      function $e(s) {
        if (s == null)
          return null;
        if (typeof s.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
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
          case R:
            return "Suspense";
          case x:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case m:
              var i = s;
              return lt(i) + ".Consumer";
            case y:
              var d = s;
              return lt(d._context) + ".Provider";
            case E:
              return sr(s, s.render, "ForwardRef");
            case U:
              var p = s.displayName || null;
              return p !== null ? p : $e(s.type) || "Memo";
            case A: {
              var T = s, D = T._payload, S = T._init;
              try {
                return $e(S(D));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ft = Object.prototype.hasOwnProperty, At = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, or, ir, St;
      St = {};
      function Bt(s) {
        if (ft.call(s, "ref")) {
          var i = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function Qe(s) {
        if (ft.call(s, "key")) {
          var i = Object.getOwnPropertyDescriptor(s, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function jr(s, i) {
        var d = function() {
          or || (or = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: d,
          configurable: !0
        });
      }
      function ar(s, i) {
        var d = function() {
          ir || (ir = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: d,
          configurable: !0
        });
      }
      function ur(s) {
        if (typeof s.ref == "string" && ie.current && s.__self && ie.current.stateNode !== s.__self) {
          var i = $e(ie.current.type);
          St[i] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, s.ref), St[i] = !0);
        }
      }
      var dt = function(s, i, d, p, T, D, S) {
        var I = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: s,
          key: i,
          ref: d,
          props: S,
          // Record the component responsible for creating this element.
          _owner: D
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
          value: p
        }), Object.defineProperty(I, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: T
        }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
      };
      function Br(s, i, d) {
        var p, T = {}, D = null, S = null, I = null, H = null;
        if (i != null) {
          Bt(i) && (S = i.ref, ur(i)), Qe(i) && (ct(i.key), D = "" + i.key), I = i.__self === void 0 ? null : i.__self, H = i.__source === void 0 ? null : i.__source;
          for (p in i)
            ft.call(i, p) && !At.hasOwnProperty(p) && (T[p] = i[p]);
        }
        var ne = arguments.length - 2;
        if (ne === 1)
          T.children = d;
        else if (ne > 1) {
          for (var ce = Array(ne), le = 0; le < ne; le++)
            ce[le] = arguments[le + 2];
          Object.freeze && Object.freeze(ce), T.children = ce;
        }
        if (s && s.defaultProps) {
          var he = s.defaultProps;
          for (p in he)
            T[p] === void 0 && (T[p] = he[p]);
        }
        if (D || S) {
          var _e = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          D && jr(T, _e), S && ar(T, _e);
        }
        return dt(s, D, S, I, H, ie.current, T);
      }
      function Vr(s, i) {
        var d = dt(s.type, i, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function Yr(s, i, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, T = v({}, s.props), D = s.key, S = s.ref, I = s._self, H = s._source, ne = s._owner;
        if (i != null) {
          Bt(i) && (S = i.ref, ne = ie.current), Qe(i) && (ct(i.key), D = "" + i.key);
          var ce;
          s.type && s.type.defaultProps && (ce = s.type.defaultProps);
          for (p in i)
            ft.call(i, p) && !At.hasOwnProperty(p) && (i[p] === void 0 && ce !== void 0 ? T[p] = ce[p] : T[p] = i[p]);
        }
        var le = arguments.length - 2;
        if (le === 1)
          T.children = d;
        else if (le > 1) {
          for (var he = Array(le), _e = 0; _e < le; _e++)
            he[_e] = arguments[_e + 2];
          T.children = he;
        }
        return dt(s.type, D, S, I, H, ne, T);
      }
      function Xe(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var cr = ".", qr = ":";
      function Hr(s) {
        var i = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(i, function(T) {
          return d[T];
        });
        return "$" + p;
      }
      var wt = !1, lr = /\/+/g;
      function He(s) {
        return s.replace(lr, "$&/");
      }
      function ht(s, i) {
        return typeof s == "object" && s !== null && s.key != null ? (ct(s.key), Hr("" + s.key)) : i.toString(36);
      }
      function Ze(s, i, d, p, T) {
        var D = typeof s;
        (D === "undefined" || D === "boolean") && (s = null);
        var S = !1;
        if (s === null)
          S = !0;
        else
          switch (D) {
            case "string":
            case "number":
              S = !0;
              break;
            case "object":
              switch (s.$$typeof) {
                case n:
                case o:
                  S = !0;
              }
          }
        if (S) {
          var I = s, H = T(I), ne = p === "" ? cr + ht(I, 0) : p;
          if (Ot(H)) {
            var ce = "";
            ne != null && (ce = He(ne) + "/"), Ze(H, i, ce, "", function(Mo) {
              return Mo;
            });
          } else H != null && (Xe(H) && (H.key && (!I || I.key !== H.key) && ct(H.key), H = Vr(
            H,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (H.key && (!I || I.key !== H.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              He("" + H.key) + "/"
            ) : "") + ne
          )), i.push(H));
          return 1;
        }
        var le, he, _e = 0, Ce = p === "" ? cr : p + qr;
        if (Ot(s))
          for (var Cr = 0; Cr < s.length; Cr++)
            le = s[Cr], he = Ce + ht(le, Cr), _e += Ze(le, i, d, he, T);
        else {
          var un = L(s);
          if (typeof un == "function") {
            var us = s;
            un === us.entries && (wt || ke("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wt = !0);
            for (var xo = un.call(us), cs, ko = 0; !(cs = xo.next()).done; )
              le = cs.value, he = Ce + ht(le, ko++), _e += Ze(le, i, d, he, T);
          } else if (D === "object") {
            var ls = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (ls === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : ls) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return _e;
      }
      function pt(s, i, d) {
        if (s == null)
          return s;
        var p = [], T = 0;
        return Ze(s, p, "", "", function(D) {
          return i.call(d, D, T++);
        }), p;
      }
      function Wr(s) {
        var i = 0;
        return pt(s, function() {
          i++;
        }), i;
      }
      function fr(s, i, d) {
        pt(s, function() {
          i.apply(this, arguments);
        }, d);
      }
      function zr(s) {
        return pt(s, function(i) {
          return i;
        }) || [];
      }
      function dr(s) {
        if (!Xe(s))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
      function hr(s) {
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
          $$typeof: y,
          _context: i
        };
        var d = !1, p = !1, T = !1;
        {
          var D = {
            $$typeof: m,
            _context: i
          };
          Object.defineProperties(D, {
            Provider: {
              get: function() {
                return p || (p = !0, w("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), i.Provider;
              },
              set: function(S) {
                i.Provider = S;
              }
            },
            _currentValue: {
              get: function() {
                return i._currentValue;
              },
              set: function(S) {
                i._currentValue = S;
              }
            },
            _currentValue2: {
              get: function() {
                return i._currentValue2;
              },
              set: function(S) {
                i._currentValue2 = S;
              }
            },
            _threadCount: {
              get: function() {
                return i._threadCount;
              },
              set: function(S) {
                i._threadCount = S;
              }
            },
            Consumer: {
              get: function() {
                return d || (d = !0, w("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), i.Consumer;
              }
            },
            displayName: {
              get: function() {
                return i.displayName;
              },
              set: function(S) {
                T || (ke("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", S), T = !0);
              }
            }
          }), i.Consumer = D;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var Et = -1, Vt = 0, Yt = 1, pr = 2;
      function Kr(s) {
        if (s._status === Et) {
          var i = s._result, d = i();
          if (d.then(function(D) {
            if (s._status === Vt || s._status === Et) {
              var S = s;
              S._status = Yt, S._result = D;
            }
          }, function(D) {
            if (s._status === Vt || s._status === Et) {
              var S = s;
              S._status = pr, S._result = D;
            }
          }), s._status === Et) {
            var p = s;
            p._status = Vt, p._result = d;
          }
        }
        if (s._status === Yt) {
          var T = s._result;
          return T === void 0 && w(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, T), "default" in T || w(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, T), T.default;
        } else
          throw s._result;
      }
      function Jr(s) {
        var i = {
          // We use these fields to store the result.
          _status: Et,
          _result: s
        }, d = {
          $$typeof: A,
          _payload: i,
          _init: Kr
        };
        {
          var p, T;
          Object.defineProperties(d, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(D) {
                w("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = D, Object.defineProperty(d, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return T;
              },
              set: function(D) {
                w("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), T = D, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function Qr(s) {
        s != null && s.$$typeof === U ? w("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? w("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && w("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && w("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var i = {
          $$typeof: E,
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
      var Er;
      Er = Symbol.for("react.module.reference");
      function u(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === a || s === l || we || s === c || s === R || s === x || Te || s === P || Ye || jt || at || typeof s == "object" && s !== null && (s.$$typeof === A || s.$$typeof === U || s.$$typeof === y || s.$$typeof === m || s.$$typeof === E || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === Er || s.getModuleId !== void 0));
      }
      function g(s, i) {
        u(s) || w("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
        var d = {
          $$typeof: U,
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
            set: function(T) {
              p = T, !s.name && !s.displayName && (s.displayName = T);
            }
          });
        }
        return d;
      }
      function C() {
        var s = K.current;
        return s === null && w(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
      }
      function F(s) {
        var i = C();
        if (s._context !== void 0) {
          var d = s._context;
          d.Consumer === s ? w("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === s && w("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return i.useContext(s);
      }
      function z(s) {
        var i = C();
        return i.useState(s);
      }
      function Z(s, i, d) {
        var p = C();
        return p.useReducer(s, i, d);
      }
      function V(s) {
        var i = C();
        return i.useRef(s);
      }
      function M(s, i) {
        var d = C();
        return d.useEffect(s, i);
      }
      function ve(s, i) {
        var d = C();
        return d.useInsertionEffect(s, i);
      }
      function de(s, i) {
        var d = C();
        return d.useLayoutEffect(s, i);
      }
      function pe(s, i) {
        var d = C();
        return d.useCallback(s, i);
      }
      function Pe(s, i) {
        var d = C();
        return d.useMemo(s, i);
      }
      function et(s, i, d) {
        var p = C();
        return p.useImperativeHandle(s, i, d);
      }
      function We(s, i) {
        {
          var d = C();
          return d.useDebugValue(s, i);
        }
      }
      function Oe() {
        var s = C();
        return s.useTransition();
      }
      function qt(s) {
        var i = C();
        return i.useDeferredValue(s);
      }
      function Xr() {
        var s = C();
        return s.useId();
      }
      function Zr(s, i, d) {
        var p = C();
        return p.useSyncExternalStore(s, i, d);
      }
      var Ht = 0, jn, Bn, Vn, Yn, qn, Hn, Wn;
      function zn() {
      }
      zn.__reactDisabledLog = !0;
      function yo() {
        {
          if (Ht === 0) {
            jn = console.log, Bn = console.info, Vn = console.warn, Yn = console.error, qn = console.group, Hn = console.groupCollapsed, Wn = console.groupEnd;
            var s = {
              configurable: !0,
              enumerable: !0,
              value: zn,
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
          Ht++;
        }
      }
      function Ro() {
        {
          if (Ht--, Ht === 0) {
            var s = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: v({}, s, {
                value: jn
              }),
              info: v({}, s, {
                value: Bn
              }),
              warn: v({}, s, {
                value: Vn
              }),
              error: v({}, s, {
                value: Yn
              }),
              group: v({}, s, {
                value: qn
              }),
              groupCollapsed: v({}, s, {
                value: Hn
              }),
              groupEnd: v({}, s, {
                value: Wn
              })
            });
          }
          Ht < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var en = ge.ReactCurrentDispatcher, tn;
      function mr(s, i, d) {
        {
          if (tn === void 0)
            try {
              throw Error();
            } catch (T) {
              var p = T.stack.trim().match(/\n( *(at )?)/);
              tn = p && p[1] || "";
            }
          return `
` + tn + s;
        }
      }
      var rn = !1, _r;
      {
        var go = typeof WeakMap == "function" ? WeakMap : Map;
        _r = new go();
      }
      function Kn(s, i) {
        if (!s || rn)
          return "";
        {
          var d = _r.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        rn = !0;
        var T = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var D;
        D = en.current, en.current = null, yo();
        try {
          if (i) {
            var S = function() {
              throw Error();
            };
            if (Object.defineProperty(S.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(S, []);
              } catch (Ce) {
                p = Ce;
              }
              Reflect.construct(s, [], S);
            } else {
              try {
                S.call();
              } catch (Ce) {
                p = Ce;
              }
              s.call(S.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ce) {
              p = Ce;
            }
            s();
          }
        } catch (Ce) {
          if (Ce && p && typeof Ce.stack == "string") {
            for (var I = Ce.stack.split(`
`), H = p.stack.split(`
`), ne = I.length - 1, ce = H.length - 1; ne >= 1 && ce >= 0 && I[ne] !== H[ce]; )
              ce--;
            for (; ne >= 1 && ce >= 0; ne--, ce--)
              if (I[ne] !== H[ce]) {
                if (ne !== 1 || ce !== 1)
                  do
                    if (ne--, ce--, ce < 0 || I[ne] !== H[ce]) {
                      var le = `
` + I[ne].replace(" at new ", " at ");
                      return s.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", s.displayName)), typeof s == "function" && _r.set(s, le), le;
                    }
                  while (ne >= 1 && ce >= 0);
                break;
              }
          }
        } finally {
          rn = !1, en.current = D, Ro(), Error.prepareStackTrace = T;
        }
        var he = s ? s.displayName || s.name : "", _e = he ? mr(he) : "";
        return typeof s == "function" && _r.set(s, _e), _e;
      }
      function vo(s, i, d) {
        return Kn(s, !1);
      }
      function Co(s) {
        var i = s.prototype;
        return !!(i && i.isReactComponent);
      }
      function yr(s, i, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return Kn(s, Co(s));
        if (typeof s == "string")
          return mr(s);
        switch (s) {
          case R:
            return mr("Suspense");
          case x:
            return mr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case E:
              return vo(s.render);
            case U:
              return yr(s.type, i, d);
            case A: {
              var p = s, T = p._payload, D = p._init;
              try {
                return yr(D(T), i, d);
              } catch {
              }
            }
          }
        return "";
      }
      var Jn = {}, Qn = ge.ReactDebugCurrentFrame;
      function Rr(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          Qn.setExtraStackFrame(d);
        } else
          Qn.setExtraStackFrame(null);
      }
      function To(s, i, d, p, T) {
        {
          var D = Function.call.bind(ft);
          for (var S in s)
            if (D(s, S)) {
              var I = void 0;
              try {
                if (typeof s[S] != "function") {
                  var H = Error((p || "React class") + ": " + d + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw H.name = "Invariant Violation", H;
                }
                I = s[S](i, S, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ne) {
                I = ne;
              }
              I && !(I instanceof Error) && (Rr(T), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, S, typeof I), Rr(null)), I instanceof Error && !(I.message in Jn) && (Jn[I.message] = !0, Rr(T), w("Failed %s type: %s", d, I.message), Rr(null));
            }
        }
      }
      function Pt(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          Se(d);
        } else
          Se(null);
      }
      var nn;
      nn = !1;
      function Xn() {
        if (ie.current) {
          var s = $e(ie.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function Oo(s) {
        if (s !== void 0) {
          var i = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + i + ":" + d + ".";
        }
        return "";
      }
      function bo(s) {
        return s != null ? Oo(s.__source) : "";
      }
      var Zn = {};
      function Ao(s) {
        var i = Xn();
        if (!i) {
          var d = typeof s == "string" ? s : s.displayName || s.name;
          d && (i = `

Check the top-level render call using <` + d + ">.");
        }
        return i;
      }
      function es(s, i) {
        if (!(!s._store || s._store.validated || s.key != null)) {
          s._store.validated = !0;
          var d = Ao(i);
          if (!Zn[d]) {
            Zn[d] = !0;
            var p = "";
            s && s._owner && s._owner !== ie.current && (p = " It was passed a child from " + $e(s._owner.type) + "."), Pt(s), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), Pt(null);
          }
        }
      }
      function ts(s, i) {
        if (typeof s == "object") {
          if (Ot(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              Xe(p) && es(p, i);
            }
          else if (Xe(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var T = L(s);
            if (typeof T == "function" && T !== s.entries)
              for (var D = T.call(s), S; !(S = D.next()).done; )
                Xe(S.value) && es(S.value, i);
          }
        }
      }
      function rs(s) {
        {
          var i = s.type;
          if (i == null || typeof i == "string")
            return;
          var d;
          if (typeof i == "function")
            d = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === E || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === U))
            d = i.propTypes;
          else
            return;
          if (d) {
            var p = $e(i);
            To(d, s.props, "prop", p, s);
          } else if (i.PropTypes !== void 0 && !nn) {
            nn = !0;
            var T = $e(i);
            w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function So(s) {
        {
          for (var i = Object.keys(s.props), d = 0; d < i.length; d++) {
            var p = i[d];
            if (p !== "children" && p !== "key") {
              Pt(s), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Pt(null);
              break;
            }
          }
          s.ref !== null && (Pt(s), w("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
        }
      }
      function ns(s, i, d) {
        var p = u(s);
        if (!p) {
          var T = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = bo(i);
          D ? T += D : T += Xn();
          var S;
          s === null ? S = "null" : Ot(s) ? S = "array" : s !== void 0 && s.$$typeof === n ? (S = "<" + ($e(s.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : S = typeof s, w("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, T);
        }
        var I = Br.apply(this, arguments);
        if (I == null)
          return I;
        if (p)
          for (var H = 2; H < arguments.length; H++)
            ts(arguments[H], s);
        return s === a ? So(I) : rs(I), I;
      }
      var ss = !1;
      function wo(s) {
        var i = ns.bind(null, s);
        return i.type = s, ss || (ss = !0, ke("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return ke("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), i;
      }
      function Po(s, i, d) {
        for (var p = Yr.apply(this, arguments), T = 2; T < arguments.length; T++)
          ts(arguments[T], p.type);
        return rs(p), p;
      }
      function Do(s, i) {
        var d = ue.transition;
        ue.transition = {};
        var p = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          s();
        } finally {
          if (ue.transition = d, d === null && p._updatedFibers) {
            var T = p._updatedFibers.size;
            T > 10 && ke("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var os = !1, gr = null;
      function Uo(s) {
        if (gr === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), d = t && t[i];
            gr = d.call(t, "timers").setImmediate;
          } catch {
            gr = function(T) {
              os === !1 && (os = !0, typeof MessageChannel > "u" && w("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var D = new MessageChannel();
              D.port1.onmessage = T, D.port2.postMessage(void 0);
            };
          }
        return gr(s);
      }
      var Dt = 0, is = !1;
      function as(s) {
        {
          var i = Dt;
          Dt++, k.current === null && (k.current = []);
          var d = k.isBatchingLegacy, p;
          try {
            if (k.isBatchingLegacy = !0, p = s(), !d && k.didScheduleLegacyUpdate) {
              var T = k.current;
              T !== null && (k.didScheduleLegacyUpdate = !1, an(T));
            }
          } catch (he) {
            throw vr(i), he;
          } finally {
            k.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var D = p, S = !1, I = {
              then: function(he, _e) {
                S = !0, D.then(function(Ce) {
                  vr(i), Dt === 0 ? sn(Ce, he, _e) : he(Ce);
                }, function(Ce) {
                  vr(i), _e(Ce);
                });
              }
            };
            return !is && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              S || (is = !0, w("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), I;
          } else {
            var H = p;
            if (vr(i), Dt === 0) {
              var ne = k.current;
              ne !== null && (an(ne), k.current = null);
              var ce = {
                then: function(he, _e) {
                  k.current === null ? (k.current = [], sn(H, he, _e)) : he(H);
                }
              };
              return ce;
            } else {
              var le = {
                then: function(he, _e) {
                  he(H);
                }
              };
              return le;
            }
          }
        }
      }
      function vr(s) {
        s !== Dt - 1 && w("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Dt = s;
      }
      function sn(s, i, d) {
        {
          var p = k.current;
          if (p !== null)
            try {
              an(p), Uo(function() {
                p.length === 0 ? (k.current = null, i(s)) : sn(s, i, d);
              });
            } catch (T) {
              d(T);
            }
          else
            i(s);
        }
      }
      var on = !1;
      function an(s) {
        if (!on) {
          on = !0;
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
            on = !1;
          }
        }
      }
      var Fo = ns, Lo = Po, Io = wo, No = {
        map: pt,
        forEach: fr,
        count: Wr,
        toArray: zr,
        only: dr
      };
      e.Children = No, e.Component = Y, e.Fragment = a, e.Profiler = l, e.PureComponent = X, e.StrictMode = c, e.Suspense = R, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, e.act = as, e.cloneElement = Lo, e.createContext = hr, e.createElement = Fo, e.createFactory = Io, e.createRef = Gr, e.forwardRef = Qr, e.isValidElement = Xe, e.lazy = Jr, e.memo = g, e.startTransition = Do, e.unstable_act = as, e.useCallback = pe, e.useContext = F, e.useDebugValue = We, e.useDeferredValue = qt, e.useEffect = M, e.useId = Xr, e.useImperativeHandle = et, e.useInsertionEffect = ve, e.useLayoutEffect = de, e.useMemo = Pe, e.useReducer = Z, e.useRef = V, e.useState = z, e.useSyncExternalStore = Zr, e.useTransition = Oe, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Qt, Qt.exports)), Qt.exports;
}
process.env.NODE_ENV === "production" ? bn.exports = Zo() : bn.exports = ei();
var Re = bn.exports, Wt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function ti() {
  if (vs) return Wt;
  vs = 1;
  var t = Re, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, y, m) {
    var E, R = {}, x = null, U = null;
    m !== void 0 && (x = "" + m), y.key !== void 0 && (x = "" + y.key), y.ref !== void 0 && (U = y.ref);
    for (E in y) n.call(y, E) && !a.hasOwnProperty(E) && (R[E] = y[E]);
    if (l && l.defaultProps) for (E in y = l.defaultProps, y) R[E] === void 0 && (R[E] = y[E]);
    return { $$typeof: e, type: l, key: x, ref: U, props: R, _owner: o.current };
  }
  return Wt.Fragment = r, Wt.jsx = c, Wt.jsxs = c, Wt;
}
var zt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cs;
function ri() {
  return Cs || (Cs = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Re, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), A = Symbol.iterator, P = "@@iterator";
    function O(u) {
      if (u === null || typeof u != "object")
        return null;
      var g = A && u[A] || u[P];
      return typeof g == "function" ? g : null;
    }
    var j = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(u) {
      {
        for (var g = arguments.length, C = new Array(g > 1 ? g - 1 : 0), F = 1; F < g; F++)
          C[F - 1] = arguments[F];
        K("error", u, C);
      }
    }
    function K(u, g, C) {
      {
        var F = j.ReactDebugCurrentFrame, z = F.getStackAddendum();
        z !== "" && (g += "%s", C = C.concat([z]));
        var Z = C.map(function(V) {
          return String(V);
        });
        Z.unshift("Warning: " + g), Function.prototype.apply.call(console[u], console, Z);
      }
    }
    var ue = !1, k = !1, ie = !1, Ee = !1, te = !1, Se;
    Se = Symbol.for("react.module.reference");
    function Ye(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === a || te || u === o || u === m || u === E || Ee || u === U || ue || k || ie || typeof u == "object" && u !== null && (u.$$typeof === x || u.$$typeof === R || u.$$typeof === c || u.$$typeof === l || u.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === Se || u.getModuleId !== void 0));
    }
    function jt(u, g, C) {
      var F = u.displayName;
      if (F)
        return F;
      var z = g.displayName || g.name || "";
      return z !== "" ? C + "(" + z + ")" : C;
    }
    function at(u) {
      return u.displayName || "Context";
    }
    function Te(u) {
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
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case m:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            var g = u;
            return at(g) + ".Consumer";
          case c:
            var C = u;
            return at(C._context) + ".Provider";
          case y:
            return jt(u, u.render, "ForwardRef");
          case R:
            var F = u.displayName || null;
            return F !== null ? F : Te(u.type) || "Memo";
          case x: {
            var z = u, Z = z._payload, V = z._init;
            try {
              return Te(V(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var we = Object.assign, ge = 0, ke, w, Ge, ut, qe, f, v;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function Y() {
      {
        if (ge === 0) {
          ke = console.log, w = console.info, Ge = console.warn, ut = console.error, qe = console.group, f = console.groupCollapsed, v = console.groupEnd;
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
        ge++;
      }
    }
    function W() {
      {
        if (ge--, ge === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: we({}, u, {
              value: ke
            }),
            info: we({}, u, {
              value: w
            }),
            warn: we({}, u, {
              value: Ge
            }),
            error: we({}, u, {
              value: ut
            }),
            group: we({}, u, {
              value: qe
            }),
            groupCollapsed: we({}, u, {
              value: f
            }),
            groupEnd: we({}, u, {
              value: v
            })
          });
        }
        ge < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = j.ReactCurrentDispatcher, re;
    function ee(u, g, C) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (z) {
            var F = z.stack.trim().match(/\n( *(at )?)/);
            re = F && F[1] || "";
          }
        return `
` + re + u;
      }
    }
    var X = !1, me;
    {
      var Gr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new Gr();
    }
    function nr(u, g) {
      if (!u || X)
        return "";
      {
        var C = me.get(u);
        if (C !== void 0)
          return C;
      }
      var F;
      X = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = oe.current, oe.current = null, Y();
      try {
        if (g) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (Oe) {
              F = Oe;
            }
            Reflect.construct(u, [], V);
          } else {
            try {
              V.call();
            } catch (Oe) {
              F = Oe;
            }
            u.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            F = Oe;
          }
          u();
        }
      } catch (Oe) {
        if (Oe && F && typeof Oe.stack == "string") {
          for (var M = Oe.stack.split(`
`), ve = F.stack.split(`
`), de = M.length - 1, pe = ve.length - 1; de >= 1 && pe >= 0 && M[de] !== ve[pe]; )
            pe--;
          for (; de >= 1 && pe >= 0; de--, pe--)
            if (M[de] !== ve[pe]) {
              if (de !== 1 || pe !== 1)
                do
                  if (de--, pe--, pe < 0 || M[de] !== ve[pe]) {
                    var Pe = `
` + M[de].replace(" at new ", " at ");
                    return u.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", u.displayName)), typeof u == "function" && me.set(u, Pe), Pe;
                  }
                while (de >= 1 && pe >= 0);
              break;
            }
        }
      } finally {
        X = !1, oe.current = Z, W(), Error.prepareStackTrace = z;
      }
      var et = u ? u.displayName || u.name : "", We = et ? ee(et) : "";
      return typeof u == "function" && me.set(u, We), We;
    }
    function Ot(u, g, C) {
      return nr(u, !1);
    }
    function $r(u) {
      var g = u.prototype;
      return !!(g && g.isReactComponent);
    }
    function bt(u, g, C) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return nr(u, $r(u));
      if (typeof u == "string")
        return ee(u);
      switch (u) {
        case m:
          return ee("Suspense");
        case E:
          return ee("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case y:
            return Ot(u.render);
          case R:
            return bt(u.type, g, C);
          case x: {
            var F = u, z = F._payload, Z = F._init;
            try {
              return bt(Z(z), g, C);
            } catch {
            }
          }
        }
      return "";
    }
    var Je = Object.prototype.hasOwnProperty, ct = {}, sr = j.ReactDebugCurrentFrame;
    function lt(u) {
      if (u) {
        var g = u._owner, C = bt(u.type, u._source, g ? g.type : null);
        sr.setExtraStackFrame(C);
      } else
        sr.setExtraStackFrame(null);
    }
    function $e(u, g, C, F, z) {
      {
        var Z = Function.call.bind(Je);
        for (var V in u)
          if (Z(u, V)) {
            var M = void 0;
            try {
              if (typeof u[V] != "function") {
                var ve = Error((F || "React class") + ": " + C + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              M = u[V](g, V, F, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (de) {
              M = de;
            }
            M && !(M instanceof Error) && (lt(z), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", C, V, typeof M), lt(null)), M instanceof Error && !(M.message in ct) && (ct[M.message] = !0, lt(z), L("Failed %s type: %s", C, M.message), lt(null));
          }
      }
    }
    var ft = Array.isArray;
    function At(u) {
      return ft(u);
    }
    function or(u) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, C = g && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return C;
      }
    }
    function ir(u) {
      try {
        return St(u), !1;
      } catch {
        return !0;
      }
    }
    function St(u) {
      return "" + u;
    }
    function Bt(u) {
      if (ir(u))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(u)), St(u);
    }
    var Qe = j.ReactCurrentOwner, jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, ur, dt;
    dt = {};
    function Br(u) {
      if (Je.call(u, "ref")) {
        var g = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Vr(u) {
      if (Je.call(u, "key")) {
        var g = Object.getOwnPropertyDescriptor(u, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Yr(u, g) {
      if (typeof u.ref == "string" && Qe.current && g && Qe.current.stateNode !== g) {
        var C = Te(Qe.current.type);
        dt[C] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Te(Qe.current.type), u.ref), dt[C] = !0);
      }
    }
    function Xe(u, g) {
      {
        var C = function() {
          ar || (ar = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        C.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function cr(u, g) {
      {
        var C = function() {
          ur || (ur = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        C.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var qr = function(u, g, C, F, z, Z, V) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: u,
        key: g,
        ref: C,
        props: V,
        // Record the component responsible for creating this element.
        _owner: Z
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
        value: F
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Hr(u, g, C, F, z) {
      {
        var Z, V = {}, M = null, ve = null;
        C !== void 0 && (Bt(C), M = "" + C), Vr(g) && (Bt(g.key), M = "" + g.key), Br(g) && (ve = g.ref, Yr(g, z));
        for (Z in g)
          Je.call(g, Z) && !jr.hasOwnProperty(Z) && (V[Z] = g[Z]);
        if (u && u.defaultProps) {
          var de = u.defaultProps;
          for (Z in de)
            V[Z] === void 0 && (V[Z] = de[Z]);
        }
        if (M || ve) {
          var pe = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          M && Xe(V, pe), ve && cr(V, pe);
        }
        return qr(u, M, ve, z, F, Qe.current, V);
      }
    }
    var wt = j.ReactCurrentOwner, lr = j.ReactDebugCurrentFrame;
    function He(u) {
      if (u) {
        var g = u._owner, C = bt(u.type, u._source, g ? g.type : null);
        lr.setExtraStackFrame(C);
      } else
        lr.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function Ze(u) {
      return typeof u == "object" && u !== null && u.$$typeof === e;
    }
    function pt() {
      {
        if (wt.current) {
          var u = Te(wt.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Wr(u) {
      return "";
    }
    var fr = {};
    function zr(u) {
      {
        var g = pt();
        if (!g) {
          var C = typeof u == "string" ? u : u.displayName || u.name;
          C && (g = `

Check the top-level render call using <` + C + ">.");
        }
        return g;
      }
    }
    function dr(u, g) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var C = zr(g);
        if (fr[C])
          return;
        fr[C] = !0;
        var F = "";
        u && u._owner && u._owner !== wt.current && (F = " It was passed a child from " + Te(u._owner.type) + "."), He(u), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, F), He(null);
      }
    }
    function hr(u, g) {
      {
        if (typeof u != "object")
          return;
        if (At(u))
          for (var C = 0; C < u.length; C++) {
            var F = u[C];
            Ze(F) && dr(F, g);
          }
        else if (Ze(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var z = O(u);
          if (typeof z == "function" && z !== u.entries)
            for (var Z = z.call(u), V; !(V = Z.next()).done; )
              Ze(V.value) && dr(V.value, g);
        }
      }
    }
    function Et(u) {
      {
        var g = u.type;
        if (g == null || typeof g == "string")
          return;
        var C;
        if (typeof g == "function")
          C = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === R))
          C = g.propTypes;
        else
          return;
        if (C) {
          var F = Te(g);
          $e(C, u.props, "prop", F, u);
        } else if (g.PropTypes !== void 0 && !ht) {
          ht = !0;
          var z = Te(g);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vt(u) {
      {
        for (var g = Object.keys(u.props), C = 0; C < g.length; C++) {
          var F = g[C];
          if (F !== "children" && F !== "key") {
            He(u), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), He(null);
            break;
          }
        }
        u.ref !== null && (He(u), L("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
      }
    }
    var Yt = {};
    function pr(u, g, C, F, z, Z) {
      {
        var V = Ye(u);
        if (!V) {
          var M = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Wr();
          ve ? M += ve : M += pt();
          var de;
          u === null ? de = "null" : At(u) ? de = "array" : u !== void 0 && u.$$typeof === e ? (de = "<" + (Te(u.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : de = typeof u, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, M);
        }
        var pe = Hr(u, g, C, z, Z);
        if (pe == null)
          return pe;
        if (V) {
          var Pe = g.children;
          if (Pe !== void 0)
            if (F)
              if (At(Pe)) {
                for (var et = 0; et < Pe.length; et++)
                  hr(Pe[et], u);
                Object.freeze && Object.freeze(Pe);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hr(Pe, u);
        }
        if (Je.call(g, "key")) {
          var We = Te(u), Oe = Object.keys(g).filter(function(Zr) {
            return Zr !== "key";
          }), qt = Oe.length > 0 ? "{key: someKey, " + Oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yt[We + qt]) {
            var Xr = Oe.length > 0 ? "{" + Oe.join(": ..., ") + ": ...}" : "{}";
            L(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qt, We, Xr, We), Yt[We + qt] = !0;
          }
        }
        return u === n ? Vt(pe) : Et(pe), pe;
      }
    }
    function Kr(u, g, C) {
      return pr(u, g, C, !0);
    }
    function Jr(u, g, C) {
      return pr(u, g, C, !1);
    }
    var Qr = Jr, Er = Kr;
    zt.Fragment = n, zt.jsx = Qr, zt.jsxs = Er;
  }()), zt;
}
process.env.NODE_ENV === "production" ? ti() : ri();
var ni = Re.createContext(
  void 0
), Bs = (t) => {
  const e = Re.useContext(ni);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Vs = Re.createContext(!1), si = () => Re.useContext(Vs);
Vs.Provider;
function oi() {
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
var ii = Re.createContext(oi()), ai = () => Re.useContext(ii);
function Ys(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function ui() {
}
var ci = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, li = (t) => {
  Re.useEffect(() => {
    t.clearReset();
  }, [t]);
}, fi = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && Ys(r, [t.error, n]), di = (t) => {
  t.suspense && (typeof t.staleTime != "number" && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, hi = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, pi = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function Ei(t, e, r) {
  var m, E, R, x;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Bs(), o = si(), a = ai(), c = n.defaultQueryOptions(t);
  (E = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || E.call(
    m,
    c
  ), c._optimisticResults = o ? "isRestoring" : "optimistic", di(c), ci(c, a), li(a);
  const [l] = Re.useState(
    () => new e(
      n,
      c
    )
  ), y = l.getOptimisticResult(c);
  if (Re.useSyncExternalStore(
    Re.useCallback(
      (U) => {
        const A = o ? () => {
        } : l.subscribe(Fr.batchCalls(U));
        return l.updateResult(), A;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), Re.useEffect(() => {
    l.setOptions(c, { listeners: !1 });
  }, [c, l]), hi(c, y))
    throw pi(c, l, a);
  if (fi({
    result: y,
    errorResetBoundary: a,
    throwOnError: c.throwOnError,
    query: n.getQueryCache().get(c.queryHash)
  }))
    throw y.error;
  return (x = (R = n.getDefaultOptions().queries) == null ? void 0 : R._experimental_afterQuery) == null || x.call(
    R,
    c,
    y
  ), c.notifyOnChangeProps ? y : l.trackResult(y);
}
function In(t, e) {
  return Ei(t, Ko);
}
function Nn(t, e) {
  const r = Bs(), [n] = Re.useState(
    () => new Xo(
      r,
      t
    )
  );
  Re.useEffect(() => {
    n.setOptions(t);
  }, [n, t]);
  const o = Re.useSyncExternalStore(
    Re.useCallback(
      (c) => n.subscribe(Fr.batchCalls(c)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), a = Re.useCallback(
    (c, l) => {
      n.mutate(c, l).catch(ui);
    },
    [n]
  );
  if (o.error && Ys(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: a, mutateAsync: o.mutate };
}
function qs(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: mi } = Object.prototype, { getPrototypeOf: xn } = Object, Lr = /* @__PURE__ */ ((t) => (e) => {
  const r = mi.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Me = (t) => (t = t.toLowerCase(), (e) => Lr(e) === t), Ir = (t) => (e) => typeof e === t, { isArray: Mt } = Array, Xt = Ir("undefined");
function _i(t) {
  return t !== null && !Xt(t) && t.constructor !== null && !Xt(t.constructor) && Ne(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Hs = Me("ArrayBuffer");
function yi(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Hs(t.buffer), e;
}
const Ri = Ir("string"), Ne = Ir("function"), Ws = Ir("number"), Nr = (t) => t !== null && typeof t == "object", gi = (t) => t === !0 || t === !1, br = (t) => {
  if (Lr(t) !== "object")
    return !1;
  const e = xn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, vi = Me("Date"), Ci = Me("File"), Ti = Me("Blob"), Oi = Me("FileList"), bi = (t) => Nr(t) && Ne(t.pipe), Ai = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Ne(t.append) && ((e = Lr(t)) === "formdata" || // detect form-data instance
  e === "object" && Ne(t.toString) && t.toString() === "[object FormData]"));
}, Si = Me("URLSearchParams"), [wi, Pi, Di, Ui] = ["ReadableStream", "Request", "Response", "Headers"].map(Me), Fi = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function tr(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), Mt(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), c = a.length;
    let l;
    for (n = 0; n < c; n++)
      l = a[n], e.call(null, t[l], l, t);
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
const _t = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ks = (t) => !Xt(t) && t !== _t;
function An() {
  const { caseless: t } = Ks(this) && this || {}, e = {}, r = (n, o) => {
    const a = t && zs(e, o) || o;
    br(e[a]) && br(n) ? e[a] = An(e[a], n) : br(n) ? e[a] = An({}, n) : Mt(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && tr(arguments[n], r);
  return e;
}
const Li = (t, e, r, { allOwnKeys: n } = {}) => (tr(e, (o, a) => {
  r && Ne(o) ? t[a] = qs(o, r) : t[a] = o;
}, { allOwnKeys: n }), t), Ii = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Ni = (t, e, r, n) => {
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
}, ki = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Mi = (t) => {
  if (!t) return null;
  if (Mt(t)) return t;
  let e = t.length;
  if (!Ws(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Gi = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && xn(Uint8Array)), $i = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    e.call(t, a[0], a[1]);
  }
}, ji = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Bi = Me("HTMLFormElement"), Vi = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Ts = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Yi = Me("RegExp"), Js = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  tr(r, (o, a) => {
    let c;
    (c = e(o, a, t)) !== !1 && (n[a] = c || o);
  }), Object.defineProperties(t, n);
}, qi = (t) => {
  Js(t, (e, r) => {
    if (Ne(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (Ne(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Hi = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return Mt(t) ? n(t) : n(String(t).split(e)), r;
}, Wi = () => {
}, zi = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, ln = "abcdefghijklmnopqrstuvwxyz", Os = "0123456789", Qs = {
  DIGIT: Os,
  ALPHA: ln,
  ALPHA_DIGIT: ln + ln.toUpperCase() + Os
}, Ki = (t = 16, e = Qs.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Ji(t) {
  return !!(t && Ne(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Qi = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (Nr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const a = Mt(n) ? [] : {};
        return tr(n, (c, l) => {
          const y = r(c, o + 1);
          !Xt(y) && (a[l] = y);
        }), e[o] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, Xi = Me("AsyncFunction"), Zi = (t) => t && (Nr(t) || Ne(t)) && Ne(t.then) && Ne(t.catch), Xs = ((t, e) => t ? setImmediate : e ? ((r, n) => (_t.addEventListener("message", ({ source: o, data: a }) => {
  o === _t && a === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), _t.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ne(_t.postMessage)
), ea = typeof queueMicrotask < "u" ? queueMicrotask.bind(_t) : typeof process < "u" && process.nextTick || Xs, h = {
  isArray: Mt,
  isArrayBuffer: Hs,
  isBuffer: _i,
  isFormData: Ai,
  isArrayBufferView: yi,
  isString: Ri,
  isNumber: Ws,
  isBoolean: gi,
  isObject: Nr,
  isPlainObject: br,
  isReadableStream: wi,
  isRequest: Pi,
  isResponse: Di,
  isHeaders: Ui,
  isUndefined: Xt,
  isDate: vi,
  isFile: Ci,
  isBlob: Ti,
  isRegExp: Yi,
  isFunction: Ne,
  isStream: bi,
  isURLSearchParams: Si,
  isTypedArray: Gi,
  isFileList: Oi,
  forEach: tr,
  merge: An,
  extend: Li,
  trim: Fi,
  stripBOM: Ii,
  inherits: Ni,
  toFlatObject: xi,
  kindOf: Lr,
  kindOfTest: Me,
  endsWith: ki,
  toArray: Mi,
  forEachEntry: $i,
  matchAll: ji,
  isHTMLForm: Bi,
  hasOwnProperty: Ts,
  hasOwnProp: Ts,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Js,
  freezeMethods: qi,
  toObjectSet: Hi,
  toCamelCase: Vi,
  noop: Wi,
  toFiniteNumber: zi,
  findKey: zs,
  global: _t,
  isContextDefined: Ks,
  ALPHABET: Qs,
  generateString: Ki,
  isSpecCompliantForm: Ji,
  toJSONObject: Qi,
  isAsyncFn: Xi,
  isThenable: Zi,
  setImmediate: Xs,
  asap: ea
};
function N(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
h.inherits(N, Error, {
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
const Zs = N.prototype, eo = {};
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
Object.defineProperties(N, eo);
Object.defineProperty(Zs, "isAxiosError", { value: !0 });
N.from = (t, e, r, n, o, a) => {
  const c = Object.create(Zs);
  return h.toFlatObject(t, c, function(y) {
    return y !== Error.prototype;
  }, (l) => l !== "isAxiosError"), N.call(c, t.message, e, r, n, o), c.cause = t, c.name = t.name, a && Object.assign(c, a), c;
};
const ta = null;
function Sn(t) {
  return h.isPlainObject(t) || h.isArray(t);
}
function to(t) {
  return h.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function bs(t, e, r) {
  return t ? t.concat(e).map(function(o, a) {
    return o = to(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function ra(t) {
  return h.isArray(t) && !t.some(Sn);
}
const na = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function xr(t, e, r) {
  if (!h.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, O) {
    return !h.isUndefined(O[P]);
  });
  const n = r.metaTokens, o = r.visitor || E, a = r.dots, c = r.indexes, y = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(e);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function m(A) {
    if (A === null) return "";
    if (h.isDate(A))
      return A.toISOString();
    if (!y && h.isBlob(A))
      throw new N("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(A) || h.isTypedArray(A) ? y && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function E(A, P, O) {
    let j = A;
    if (A && !O && typeof A == "object") {
      if (h.endsWith(P, "{}"))
        P = n ? P : P.slice(0, -2), A = JSON.stringify(A);
      else if (h.isArray(A) && ra(A) || (h.isFileList(A) || h.endsWith(P, "[]")) && (j = h.toArray(A)))
        return P = to(P), j.forEach(function(K, ue) {
          !(h.isUndefined(K) || K === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? bs([P], ue, a) : c === null ? P : P + "[]",
            m(K)
          );
        }), !1;
    }
    return Sn(A) ? !0 : (e.append(bs(O, P, a), m(A)), !1);
  }
  const R = [], x = Object.assign(na, {
    defaultVisitor: E,
    convertValue: m,
    isVisitable: Sn
  });
  function U(A, P) {
    if (!h.isUndefined(A)) {
      if (R.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + P.join("."));
      R.push(A), h.forEach(A, function(j, L) {
        (!(h.isUndefined(j) || j === null) && o.call(
          e,
          j,
          h.isString(L) ? L.trim() : L,
          P,
          x
        )) === !0 && U(j, P ? P.concat(L) : [L]);
      }), R.pop();
    }
  }
  if (!h.isObject(t))
    throw new TypeError("data must be an object");
  return U(t), e;
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
function kn(t, e) {
  this._pairs = [], t && xr(t, this, e);
}
const ro = kn.prototype;
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
function sa(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function no(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || sa, o = r && r.serialize;
  let a;
  if (o ? a = o(e, r) : a = h.isURLSearchParams(e) ? e.toString() : new kn(e, r).toString(n), a) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class Ss {
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
}, oa = typeof URLSearchParams < "u" ? URLSearchParams : kn, ia = typeof FormData < "u" ? FormData : null, aa = typeof Blob < "u" ? Blob : null, ua = {
  isBrowser: !0,
  classes: {
    URLSearchParams: oa,
    FormData: ia,
    Blob: aa
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Mn = typeof window < "u" && typeof document < "u", wn = typeof navigator == "object" && navigator || void 0, ca = Mn && (!wn || ["ReactNative", "NativeScript", "NS"].indexOf(wn.product) < 0), la = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", fa = Mn && window.location.href || "http://localhost", da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Mn,
  hasStandardBrowserEnv: ca,
  hasStandardBrowserWebWorkerEnv: la,
  navigator: wn,
  origin: fa
}, Symbol.toStringTag, { value: "Module" })), Fe = {
  ...da,
  ...ua
};
function ha(t, e) {
  return xr(t, new Fe.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, a) {
      return Fe.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function pa(t) {
  return h.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Ea(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function oo(t) {
  function e(r, n, o, a) {
    let c = r[a++];
    if (c === "__proto__") return !0;
    const l = Number.isFinite(+c), y = a >= r.length;
    return c = !c && h.isArray(o) ? o.length : c, y ? (h.hasOwnProp(o, c) ? o[c] = [o[c], n] : o[c] = n, !l) : ((!o[c] || !h.isObject(o[c])) && (o[c] = []), e(r, n, o[c], a) && h.isArray(o[c]) && (o[c] = Ea(o[c])), !l);
  }
  if (h.isFormData(t) && h.isFunction(t.entries)) {
    const r = {};
    return h.forEachEntry(t, (n, o) => {
      e(pa(n), o, r, 0);
    }), r;
  }
  return null;
}
function ma(t, e, r) {
  if (h.isString(t))
    try {
      return (e || JSON.parse)(t), h.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(t);
}
const rr = {
  transitional: so,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = h.isObject(e);
    if (a && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
      return o ? JSON.stringify(oo(e)) : e;
    if (h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e) || h.isReadableStream(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ha(e, this.formSerializer).toString();
      if ((l = h.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const y = this.env && this.env.FormData;
        return xr(
          l ? { "files[]": e } : e,
          y && new y(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), ma(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || rr.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (h.isResponse(e) || h.isReadableStream(e))
      return e;
    if (e && h.isString(e) && (n && !this.responseType || o)) {
      const c = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (l) {
        if (c)
          throw l.name === "SyntaxError" ? N.from(l, N.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: Fe.classes.FormData,
    Blob: Fe.classes.Blob
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
  rr.headers[t] = {};
});
const _a = h.toObjectSet([
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
]), ya = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(c) {
    o = c.indexOf(":"), r = c.substring(0, o).trim().toLowerCase(), n = c.substring(o + 1).trim(), !(!r || e[r] && _a[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, ws = Symbol("internals");
function Kt(t) {
  return t && String(t).trim().toLowerCase();
}
function Ar(t) {
  return t === !1 || t == null ? t : h.isArray(t) ? t.map(Ar) : String(t);
}
function Ra(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const ga = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function fn(t, e, r, n, o) {
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
function Ca(t, e) {
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
class Le {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function a(l, y, m) {
      const E = Kt(y);
      if (!E)
        throw new Error("header name must be a non-empty string");
      const R = h.findKey(o, E);
      (!R || o[R] === void 0 || m === !0 || m === void 0 && o[R] !== !1) && (o[R || y] = Ar(l));
    }
    const c = (l, y) => h.forEach(l, (m, E) => a(m, E, y));
    if (h.isPlainObject(e) || e instanceof this.constructor)
      c(e, r);
    else if (h.isString(e) && (e = e.trim()) && !ga(e))
      c(ya(e), r);
    else if (h.isHeaders(e))
      for (const [l, y] of e.entries())
        a(y, l, n);
    else
      e != null && a(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = Kt(e), e) {
      const n = h.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Ra(o);
        if (h.isFunction(r))
          return r.call(this, o, n);
        if (h.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = Kt(e), e) {
      const n = h.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || fn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function a(c) {
      if (c = Kt(c), c) {
        const l = h.findKey(n, c);
        l && (!r || fn(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return h.isArray(e) ? e.forEach(a) : a(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || fn(this, this[a], a, e, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(e) {
    const r = this, n = {};
    return h.forEach(this, (o, a) => {
      const c = h.findKey(n, a);
      if (c) {
        r[c] = Ar(o), delete r[a];
        return;
      }
      const l = e ? va(a) : String(a).trim();
      l !== a && delete r[a], r[l] = Ar(o), n[l] = !0;
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
      const l = Kt(c);
      n[l] || (Ca(o, c), n[l] = !0);
    }
    return h.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
Le.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(Le.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(Le);
function dn(t, e) {
  const r = this || rr, n = e || r, o = Le.from(n.headers);
  let a = n.data;
  return h.forEach(t, function(l) {
    a = l.call(r, a, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), a;
}
function io(t) {
  return !!(t && t.__CANCEL__);
}
function Gt(t, e, r) {
  N.call(this, t ?? "canceled", N.ERR_CANCELED, e, r), this.name = "CanceledError";
}
h.inherits(Gt, N, {
  __CANCEL__: !0
});
function ao(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new N(
    "Request failed with status code " + r.status,
    [N.ERR_BAD_REQUEST, N.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ta(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Oa(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, a = 0, c;
  return e = e !== void 0 ? e : 1e3, function(y) {
    const m = Date.now(), E = n[a];
    c || (c = m), r[o] = y, n[o] = m;
    let R = a, x = 0;
    for (; R !== o; )
      x += r[R++], R = R % t;
    if (o = (o + 1) % t, o === a && (a = (a + 1) % t), m - c < e)
      return;
    const U = E && m - E;
    return U ? Math.round(x * 1e3 / U) : void 0;
  };
}
function ba(t, e) {
  let r = 0, n = 1e3 / e, o, a;
  const c = (m, E = Date.now()) => {
    r = E, o = null, a && (clearTimeout(a), a = null), t.apply(null, m);
  };
  return [(...m) => {
    const E = Date.now(), R = E - r;
    R >= n ? c(m, E) : (o = m, a || (a = setTimeout(() => {
      a = null, c(o);
    }, n - R)));
  }, () => o && c(o)];
}
const Pr = (t, e, r = 3) => {
  let n = 0;
  const o = Oa(50, 250);
  return ba((a) => {
    const c = a.loaded, l = a.lengthComputable ? a.total : void 0, y = c - n, m = o(y), E = c <= l;
    n = c;
    const R = {
      loaded: c,
      total: l,
      progress: l ? c / l : void 0,
      bytes: y,
      rate: m || void 0,
      estimated: m && l && E ? (l - c) / m : void 0,
      event: a,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    t(R);
  }, r);
}, Ps = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Ds = (t) => (...e) => h.asap(() => t(...e)), Aa = Fe.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = Fe.navigator && /(msie|trident)/i.test(Fe.navigator.userAgent), r = document.createElement("a");
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
), Sa = Fe.hasStandardBrowserEnv ? (
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
function Pa(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function uo(t, e) {
  return t && !wa(e) ? Pa(t, e) : e;
}
const Us = (t) => t instanceof Le ? { ...t } : t;
function Tt(t, e) {
  e = e || {};
  const r = {};
  function n(m, E, R) {
    return h.isPlainObject(m) && h.isPlainObject(E) ? h.merge.call({ caseless: R }, m, E) : h.isPlainObject(E) ? h.merge({}, E) : h.isArray(E) ? E.slice() : E;
  }
  function o(m, E, R) {
    if (h.isUndefined(E)) {
      if (!h.isUndefined(m))
        return n(void 0, m, R);
    } else return n(m, E, R);
  }
  function a(m, E) {
    if (!h.isUndefined(E))
      return n(void 0, E);
  }
  function c(m, E) {
    if (h.isUndefined(E)) {
      if (!h.isUndefined(m))
        return n(void 0, m);
    } else return n(void 0, E);
  }
  function l(m, E, R) {
    if (R in e)
      return n(m, E);
    if (R in t)
      return n(void 0, m);
  }
  const y = {
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
    headers: (m, E) => o(Us(m), Us(E), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, t, e)), function(E) {
    const R = y[E] || o, x = R(t[E], e[E], E);
    h.isUndefined(x) && R !== l || (r[E] = x);
  }), r;
}
const co = (t) => {
  const e = Tt({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: c, auth: l } = e;
  e.headers = c = Le.from(c), e.url = no(uo(e.baseURL, e.url), t.params, t.paramsSerializer), l && c.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let y;
  if (h.isFormData(r)) {
    if (Fe.hasStandardBrowserEnv || Fe.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((y = c.getContentType()) !== !1) {
      const [m, ...E] = y ? y.split(";").map((R) => R.trim()).filter(Boolean) : [];
      c.setContentType([m || "multipart/form-data", ...E].join("; "));
    }
  }
  if (Fe.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(e)), n || n !== !1 && Aa(e.url))) {
    const m = o && a && Sa.read(a);
    m && c.set(o, m);
  }
  return e;
}, Da = typeof XMLHttpRequest < "u", Ua = Da && function(t) {
  return new Promise(function(r, n) {
    const o = co(t);
    let a = o.data;
    const c = Le.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: y, onDownloadProgress: m } = o, E, R, x, U, A;
    function P() {
      U && U(), A && A(), o.cancelToken && o.cancelToken.unsubscribe(E), o.signal && o.signal.removeEventListener("abort", E);
    }
    let O = new XMLHttpRequest();
    O.open(o.method.toUpperCase(), o.url, !0), O.timeout = o.timeout;
    function j() {
      if (!O)
        return;
      const K = Le.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), k = {
        data: !l || l === "text" || l === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: K,
        config: t,
        request: O
      };
      ao(function(Ee) {
        r(Ee), P();
      }, function(Ee) {
        n(Ee), P();
      }, k), O = null;
    }
    "onloadend" in O ? O.onloadend = j : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(j);
    }, O.onabort = function() {
      O && (n(new N("Request aborted", N.ECONNABORTED, t, O)), O = null);
    }, O.onerror = function() {
      n(new N("Network Error", N.ERR_NETWORK, t, O)), O = null;
    }, O.ontimeout = function() {
      let ue = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const k = o.transitional || so;
      o.timeoutErrorMessage && (ue = o.timeoutErrorMessage), n(new N(
        ue,
        k.clarifyTimeoutError ? N.ETIMEDOUT : N.ECONNABORTED,
        t,
        O
      )), O = null;
    }, a === void 0 && c.setContentType(null), "setRequestHeader" in O && h.forEach(c.toJSON(), function(ue, k) {
      O.setRequestHeader(k, ue);
    }), h.isUndefined(o.withCredentials) || (O.withCredentials = !!o.withCredentials), l && l !== "json" && (O.responseType = o.responseType), m && ([x, A] = Pr(m, !0), O.addEventListener("progress", x)), y && O.upload && ([R, U] = Pr(y), O.upload.addEventListener("progress", R), O.upload.addEventListener("loadend", U)), (o.cancelToken || o.signal) && (E = (K) => {
      O && (n(!K || K.type ? new Gt(null, t, O) : K), O.abort(), O = null);
    }, o.cancelToken && o.cancelToken.subscribe(E), o.signal && (o.signal.aborted ? E() : o.signal.addEventListener("abort", E)));
    const L = Ta(o.url);
    if (L && Fe.protocols.indexOf(L) === -1) {
      n(new N("Unsupported protocol " + L + ":", N.ERR_BAD_REQUEST, t));
      return;
    }
    O.send(a || null);
  });
}, Fa = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const a = function(m) {
      if (!o) {
        o = !0, l();
        const E = m instanceof Error ? m : this.reason;
        n.abort(E instanceof N ? E : new Gt(E instanceof Error ? E.message : E));
      }
    };
    let c = e && setTimeout(() => {
      c = null, a(new N(`timeout ${e} of ms exceeded`, N.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (c && clearTimeout(c), c = null, t.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(a) : m.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((m) => m.addEventListener("abort", a));
    const { signal: y } = n;
    return y.unsubscribe = () => h.asap(l), y;
  }
}, La = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, Ia = async function* (t, e) {
  for await (const r of Na(t))
    yield* La(r, e);
}, Na = async function* (t) {
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
}, Fs = (t, e, r, n) => {
  const o = Ia(t, e);
  let a = 0, c, l = (y) => {
    c || (c = !0, n && n(y));
  };
  return new ReadableStream({
    async pull(y) {
      try {
        const { done: m, value: E } = await o.next();
        if (m) {
          l(), y.close();
          return;
        }
        let R = E.byteLength;
        if (r) {
          let x = a += R;
          r(x);
        }
        y.enqueue(new Uint8Array(E));
      } catch (m) {
        throw l(m), m;
      }
    },
    cancel(y) {
      return l(y), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, kr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lo = kr && typeof ReadableStream == "function", xa = kr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), fo = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, ka = lo && fo(() => {
  let t = !1;
  const e = new Request(Fe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Ls = 64 * 1024, Pn = lo && fo(() => h.isReadableStream(new Response("").body)), Dr = {
  stream: Pn && ((t) => t.body)
};
kr && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Dr[e] && (Dr[e] = h.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new N(`Response type '${e}' is not supported`, N.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Ma = async (t) => {
  if (t == null)
    return 0;
  if (h.isBlob(t))
    return t.size;
  if (h.isSpecCompliantForm(t))
    return (await new Request(Fe.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(t) || h.isArrayBuffer(t))
    return t.byteLength;
  if (h.isURLSearchParams(t) && (t = t + ""), h.isString(t))
    return (await xa(t)).byteLength;
}, Ga = async (t, e) => {
  const r = h.toFiniteNumber(t.getContentLength());
  return r ?? Ma(e);
}, $a = kr && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: o,
    cancelToken: a,
    timeout: c,
    onDownloadProgress: l,
    onUploadProgress: y,
    responseType: m,
    headers: E,
    withCredentials: R = "same-origin",
    fetchOptions: x
  } = co(t);
  m = m ? (m + "").toLowerCase() : "text";
  let U = Fa([o, a && a.toAbortSignal()], c), A;
  const P = U && U.unsubscribe && (() => {
    U.unsubscribe();
  });
  let O;
  try {
    if (y && ka && r !== "get" && r !== "head" && (O = await Ga(E, n)) !== 0) {
      let k = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), ie;
      if (h.isFormData(n) && (ie = k.headers.get("content-type")) && E.setContentType(ie), k.body) {
        const [Ee, te] = Ps(
          O,
          Pr(Ds(y))
        );
        n = Fs(k.body, Ls, Ee, te);
      }
    }
    h.isString(R) || (R = R ? "include" : "omit");
    const j = "credentials" in Request.prototype;
    A = new Request(e, {
      ...x,
      signal: U,
      method: r.toUpperCase(),
      headers: E.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: j ? R : void 0
    });
    let L = await fetch(A);
    const K = Pn && (m === "stream" || m === "response");
    if (Pn && (l || K && P)) {
      const k = {};
      ["status", "statusText", "headers"].forEach((Se) => {
        k[Se] = L[Se];
      });
      const ie = h.toFiniteNumber(L.headers.get("content-length")), [Ee, te] = l && Ps(
        ie,
        Pr(Ds(l), !0)
      ) || [];
      L = new Response(
        Fs(L.body, Ls, Ee, () => {
          te && te(), P && P();
        }),
        k
      );
    }
    m = m || "text";
    let ue = await Dr[h.findKey(Dr, m) || "text"](L, t);
    return !K && P && P(), await new Promise((k, ie) => {
      ao(k, ie, {
        data: ue,
        headers: Le.from(L.headers),
        status: L.status,
        statusText: L.statusText,
        config: t,
        request: A
      });
    });
  } catch (j) {
    throw P && P(), j && j.name === "TypeError" && /fetch/i.test(j.message) ? Object.assign(
      new N("Network Error", N.ERR_NETWORK, t, A),
      {
        cause: j.cause || j
      }
    ) : N.from(j, j && j.code, t, A);
  }
}), Dn = {
  http: ta,
  xhr: Ua,
  fetch: $a
};
h.forEach(Dn, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Is = (t) => `- ${t}`, ja = (t) => h.isFunction(t) || t === null || t === !1, ho = {
  getAdapter: (t) => {
    t = h.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let c;
      if (n = r, !ja(r) && (n = Dn[(c = String(r)).toLowerCase()], n === void 0))
        throw new N(`Unknown adapter '${c}'`);
      if (n)
        break;
      o[c || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([l, y]) => `adapter ${l} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = e ? a.length > 1 ? `since :
` + a.map(Is).join(`
`) : " " + Is(a[0]) : "as no adapter specified";
      throw new N(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Dn
};
function hn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Gt(null, t);
}
function Ns(t) {
  return hn(t), t.headers = Le.from(t.headers), t.data = dn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ho.getAdapter(t.adapter || rr.adapter)(t).then(function(n) {
    return hn(t), n.data = dn.call(
      t,
      t.transformResponse,
      n
    ), n.headers = Le.from(n.headers), n;
  }, function(n) {
    return io(n) || (hn(t), n && n.response && (n.response.data = dn.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = Le.from(n.response.headers))), Promise.reject(n);
  });
}
const po = "1.7.7", Gn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Gn[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const xs = {};
Gn.transitional = function(e, r, n) {
  function o(a, c) {
    return "[Axios v" + po + "] Transitional option '" + a + "'" + c + (n ? ". " + n : "");
  }
  return (a, c, l) => {
    if (e === !1)
      throw new N(
        o(c, " has been removed" + (r ? " in " + r : "")),
        N.ERR_DEPRECATED
      );
    return r && !xs[c] && (xs[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, c, l) : !0;
  };
};
function Ba(t, e, r) {
  if (typeof t != "object")
    throw new N("options must be an object", N.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], c = e[a];
    if (c) {
      const l = t[a], y = l === void 0 || c(l, a, t);
      if (y !== !0)
        throw new N("option " + a + " must be " + y, N.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new N("Unknown option " + a, N.ERR_BAD_OPTION);
  }
}
const Un = {
  assertOptions: Ba,
  validators: Gn
}, tt = Un.validators;
class Ct {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Ss(),
      response: new Ss()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Tt(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: a } = r;
    n !== void 0 && Un.assertOptions(n, {
      silentJSONParsing: tt.transitional(tt.boolean),
      forcedJSONParsing: tt.transitional(tt.boolean),
      clarifyTimeoutError: tt.transitional(tt.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Un.assertOptions(o, {
      encode: tt.function,
      serialize: tt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let c = a && h.merge(
      a.common,
      a[r.method]
    );
    a && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (A) => {
        delete a[A];
      }
    ), r.headers = Le.concat(c, a);
    const l = [];
    let y = !0;
    this.interceptors.request.forEach(function(P) {
      typeof P.runWhen == "function" && P.runWhen(r) === !1 || (y = y && P.synchronous, l.unshift(P.fulfilled, P.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(P) {
      m.push(P.fulfilled, P.rejected);
    });
    let E, R = 0, x;
    if (!y) {
      const A = [Ns.bind(this), void 0];
      for (A.unshift.apply(A, l), A.push.apply(A, m), x = A.length, E = Promise.resolve(r); R < x; )
        E = E.then(A[R++], A[R++]);
      return E;
    }
    x = l.length;
    let U = r;
    for (R = 0; R < x; ) {
      const A = l[R++], P = l[R++];
      try {
        U = A(U);
      } catch (O) {
        P.call(this, O);
        break;
      }
    }
    try {
      E = Ns.call(this, U);
    } catch (A) {
      return Promise.reject(A);
    }
    for (R = 0, x = m.length; R < x; )
      E = E.then(m[R++], m[R++]);
    return E;
  }
  getUri(e) {
    e = Tt(this.defaults, e);
    const r = uo(e.baseURL, e.url);
    return no(r, e.params, e.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  Ct.prototype[e] = function(r, n) {
    return this.request(Tt(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, c, l) {
      return this.request(Tt(l || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: c
      }));
    };
  }
  Ct.prototype[e] = r(), Ct.prototype[e + "Form"] = r(!0);
});
class $n {
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
      n.reason || (n.reason = new Gt(a, c, l), r(n.reason));
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
      token: new $n(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
function Va(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Ya(t) {
  return h.isObject(t) && t.isAxiosError === !0;
}
const Fn = {
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
Object.entries(Fn).forEach(([t, e]) => {
  Fn[e] = t;
});
function Eo(t) {
  const e = new Ct(t), r = qs(Ct.prototype.request, e);
  return h.extend(r, Ct.prototype, e, { allOwnKeys: !0 }), h.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Eo(Tt(t, o));
  }, r;
}
const fe = Eo(rr);
fe.Axios = Ct;
fe.CanceledError = Gt;
fe.CancelToken = $n;
fe.isCancel = io;
fe.VERSION = po;
fe.toFormData = xr;
fe.AxiosError = N;
fe.Cancel = fe.CanceledError;
fe.all = function(e) {
  return Promise.all(e);
};
fe.spread = Va;
fe.isAxiosError = Ya;
fe.mergeConfig = Tt;
fe.AxiosHeaders = Le;
fe.formToJSON = (t) => oo(h.isHTMLForm(t) ? new FormData(t) : t);
fe.getAdapter = ho.getAdapter;
fe.HttpStatusCode = Fn;
fe.default = fe;
const mo = {
  BASE_URL: "http://ec2-13-233-15-253.ap-south-1.compute.amazonaws.com"
  // BASE_URL: "https://7785-182-156-141-17.ngrok-free.app",
}, je = fe.create({
  baseURL: mo.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), qa = () => localStorage.getItem("access_token"), Ha = () => localStorage.getItem("refresh_token");
je.interceptors.request.use(
  (t) => {
    const e = qa();
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
      const r = Ha();
      if (r)
        try {
          const n = await fe.post(`${mo.BASE_URL}/auth/refresh-token`, {
            refreshToken: r
          });
          return localStorage.setItem("access_token", n.data.access_token), e.headers.Authorization = `Bearer ${n.data.access_token}`, je(e);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(t);
  }
);
function mt(t) {
  var e;
  if (fe.isAxiosError(t)) {
    const r = ((e = t.response) == null ? void 0 : e.data) || {
      message: "An error occurred. Try after some time."
    };
    throw new Error(r.message);
  } else
    throw new Error("Unknown error occurred");
}
class $t {
  // Create a new Data
  async createData(e, r) {
    try {
      const n = await je.post(e, r);
      return console.log(n.data), n.data;
    } catch (n) {
      mt(n);
    }
  }
  // Get all Data
  async getData(e) {
    try {
      return (await je.get(e)).data.data;
    } catch (r) {
      mt(r);
    }
  }
  // Get an Data by ID
  async getDataById(e, r) {
    try {
      const n = await je.get(`${e}/${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      mt(n);
    }
  }
  // Get Data by Query
  async getDataByQuery(e, r) {
    try {
      const n = await je.get(`${e}?search=${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      mt(n);
    }
  }
  // Update a data by ID
  async updateData(e, r, n) {
    try {
      const o = await je.patch(`${e}/${r}`, n);
      return console.log(o.data), o.data;
    } catch (o) {
      mt(o);
    }
  }
  // Delete an Data by ID
  async deleteData(e, r) {
    try {
      const n = await je.delete(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      mt(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(e, r) {
    try {
      const n = await je.patch(`${e}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      mt(n);
    }
  }
}
const Ie = (t) => {
  const e = new $t();
  return Nn({ mutationFn: (r) => e.createData(t, r) });
}, Wa = (t) => {
  const e = new $t();
  return Nn({ mutationFn: (r) => e.deleteData(t, r) });
}, ye = (t, e) => {
  const r = new $t();
  return In({ queryKey: e, queryFn: () => r.getData(t) });
}, Ae = (t, e, r) => {
  const n = new $t();
  return In({ queryKey: r, queryFn: () => n.getDataById(t, e), enabled: !!e });
}, xe = (t, e) => {
  const r = new $t();
  return Nn({ mutationFn: (n) => r.updateData(t, e, n) });
}, Mr = (t, e, r) => {
  const n = new $t();
  return In({ queryKey: r, queryFn: () => n.getDataByQuery(t, e), enabled: !!e });
}, _o = "http://ec2-13-233-15-253.ap-south-1.compute.amazonaws.com", za = () => fe.create({
  baseURL: _o,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class J {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = J.createService();
  }
  static createService() {
    return J._axiosInstance || (J._axiosInstance = za(), J.setAuthHeaderInterceptor(), J._axiosInstance.interceptors.response.use(J.handleSuccess, J.handleError)), J._axiosInstance;
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
      return (await fe.post(`${_o}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    J._axiosInstance.interceptors.request.use(
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
    J._axiosInstance.interceptors.response.use(
      J.handleSuccess,
      J.handleError
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
        const a = await J.refreshAccessToken();
        return J.setAccessToken(a), r.headers.set("Authorization", `Bearer ${a}`), J._axiosInstance(r);
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
const tu = (t) => Ie(t), ru = (t) => Wa(t), nu = (t) => ye(t, ["getAllCustomers"]), su = (t) => ye(t, ["getAllCustomerCategories"]), ou = (t) => ye(t, ["getAllCustomerTypes"]), iu = (t, e) => Ae(t, e, ["getCustomer"]), au = (t, e) => xe(t, e), uu = (t) => ye(t, ["getAllCustomerNames"]), cu = (t, e) => Ae(t, e, ["getCustomerPartialData"]), lu = (t) => Ie(t), fu = (t) => ye(t, ["getAllEmployees"]), du = (t) => ye(t, ["getAllRoles"]), hu = (t, e) => Ae(t, e, ["getEmployee"]), pu = (t, e) => xe(t, e), Eu = (t) => Ie(t), mu = (t) => ye(t, ["getFarmers"]), _u = (t, e) => Ae(t, e, ["getFarmer"]), yu = (t, e) => xe(t, e), Ru = (t) => ye(t, ["getAllFilteredFarmerData"]), gu = (t) => Ie(t), vu = (t) => ye(t, ["getAllVendors"]), Cu = (t) => ye(t, ["getAllFilteredVendorData"]), Tu = (t, e) => Ae(t, e, ["getVendor"]), Ou = (t) => Ie(t), bu = (t, e) => Ae(t, e, ["getAVendorCategory"]), Au = (t) => ye(t, ["getAllVendorCat"]), Su = (t, e) => xe(t, e), wu = (t) => Ie(t), Pu = (t, e) => Ae(t, e, ["getAVendorSubcategory"]), Du = (t) => ye(t, ["getVendor"]), Uu = (t, e) => xe(t, e), Fu = (t, e) => Mr(t, e, ["get-vendor-subcategories-by-query", e]), Lu = (t, e) => Mr(t, e, ["get-vendors-by-query", e]), Iu = (t) => Ie(t), Nu = (t) => ye(t, ["getProducts"]), xu = (t, e) => Ae(t, e, ["getAProduct"]), ku = (t, e) => xe(t, e), Mu = (t) => Ie(t), Gu = (t, e) => Ae(t, e, ["getAProductClassification"]), $u = (t) => ye(t, ["getProductsClassification"]), ju = (t, e) => xe(t, e), Bu = (t) => Ie(t), Vu = (t, e) => Ae(t, e, ["getAProductCategory"]), Yu = (t) => ye(t, ["getProductCat"]), qu = (t, e) => xe(t, e), Hu = (t) => Ie(t), Wu = (t, e) => Ae(t, e, ["getAProductSubcategory"]), zu = (t) => ye(t, ["getProductSubcat"]), Ku = (t, e) => xe(t, e), Ju = (t) => Ie(t), Qu = (t, e) => Ae(t, e, ["getAUOM"]), Xu = (t) => ye(t, ["getUOMs"]), Zu = (t, e) => xe(t, e), ec = (t) => Ie(t), tc = (t, e) => Ae(t, e, ["getAUOMConversionMatrix"]), rc = (t) => ye(t, ["getUOMConversionMatrixs"]), nc = (t, e) => xe(t, e), sc = (t) => Ie(t), oc = (t, e) => Ae(t, e, ["getABranch"]), ic = (t, e) => Mr(t, e, ["getAllBranches", e]), ac = (t, e) => xe(t, e), uc = (t) => ye(t, ["get-all-filtered-branches"]), cc = (t) => Ie(t), lc = (t, e) => Ae(t, e, ["getAOffice"]), fc = (t, e) => Mr(t, e, ["get-all-offices"]), dc = (t, e) => xe(t, e);
var Ka = /* @__PURE__ */ ((t) => (t[t["collection-center"] = 0] = "collection-center", t[t["distribution-center"] = 1] = "distribution-center", t[t["seasonal-collection-center"] = 2] = "seasonal-collection-center", t[t.warehouse = 3] = "warehouse", t))(Ka || {}), Ja = /* @__PURE__ */ ((t) => (t[t["registered-office"] = 0] = "registered-office", t[t["corporate-office"] = 1] = "corporate-office", t))(Ja || {}), Qa = /* @__PURE__ */ ((t) => (t.OWNED = "Owned", t.LEASED = "Leased", t.SHARED = "Shared", t.ENCUMBERED = "Encumbered", t))(Qa || {}), Xa = /* @__PURE__ */ ((t) => (t.CULTIVABLE = "Cultivable", t.FALLOW = "Fallow", t.IRRIGATED = "Irrigated", t.NON_IRRIGATED = "Non-Irrigated", t))(Xa || {});
class hc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProduct(e) {
    const r = b.CREATE_PRODUCTS;
    return this.postFormData(r, e);
  }
  getAllProducts() {
    const e = b.GET_ALL_PRODUCTS;
    return this.get(e);
  }
  getProductsPatrialData() {
    const e = b.GET_PRODUCTS_PARTIAL;
    return this.get(e);
  }
  getProductById(e) {
    const r = `${b.GET_A_PRODUCTS}/${e}`;
    return this.get(r);
  }
  updateProduct(e, r) {
    const n = `${b.UPDATE_PRODUCTS}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteProductById(e) {
    const r = `${b.DELETE_PRODUCT}/${e}`;
    return this.delete(r);
  }
}
class pc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductClassification(e) {
    const r = b.CREATE_PRODUCT_CLASSIFICATION;
    return this.post(r, e);
  }
  getAllProductClassifications() {
    const e = b.GET_ALL_PRODUCT_CLASSIFICATION;
    return this.get(e);
  }
  getProductClassificationById(e) {
    const r = `${b.GET_A_PRODUCT_CLASSIFICATION}/${e}`;
    return this.get(r);
  }
  updateProductClassification(e, r) {
    const n = `${b.UPDATE_PRODUCT_CLASSIFICATION}/${e}`;
    return this.patch(n, r);
  }
  deleteProductClassificationById(e) {
    const r = `${b.DELETE_PRODUCT_CLASSIFICATION}/${e}`;
    return this.delete(r);
  }
}
class Ec extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductCategory(e) {
    const r = b.CREATE_PRODUCT_CATEGORY;
    return this.post(r, e);
  }
  getAllProductCategories() {
    const e = b.GET_ALL_PRODUCT_CATEGORY;
    return this.get(e);
  }
  getProductCategoryById(e) {
    const r = `${b.GET_A_PRODUCT_CATEGORY}/${e}`;
    return this.get(r);
  }
  updateProductCategory(e, r) {
    const n = `${b.UPDATE_PRODUCT_CATEGORY}/${e}`;
    return this.patch(n, r);
  }
  deleteProductCategoryById(e) {
    const r = `${b.DELETE_PRODUCT_CATEGORY}/${e}`;
    return this.delete(r);
  }
}
class mc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductSubcategory(e) {
    const r = b.CREATE_PRODUCT_SUBCATEGORY;
    return this.post(r, e);
  }
  getAllProductSubcategories() {
    const e = b.GET_ALL_PRODUCT_SUBCATEGORY;
    return this.get(e);
  }
  getProductSubcategoryById(e) {
    const r = `${b.GET_A_PRODUCT_SUBCATEGORY}/${e}`;
    return this.get(r);
  }
  updateProductSubcategory(e, r) {
    const n = `${b.UPDATE_PRODUCT_SUBCATEGORY}/${e}`;
    return this.patch(n, r);
  }
  deleteProductSubcategoryById(e) {
    const r = `${b.DELETE_PRODUCT_SUBCATEGORY}/${e}`;
    return this.delete(r);
  }
}
class _c extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createUOM(e) {
    const r = b.CREATE_UOM;
    return this.post(r, e);
  }
  getAllUOMs() {
    const e = b.GET_ALL_UOM;
    return this.get(e);
  }
  getUOMById(e) {
    const r = `${b.GET_A_UOM}/${e}`;
    return this.get(r);
  }
  updateUOM(e, r) {
    const n = `${b.UPDATE_UOM}/${e}`;
    return this.patch(n, r);
  }
  deleteUOMById(e) {
    const r = `${b.DELETE_UOM}/${e}`;
    return this.delete(r);
  }
}
class yc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createUOMConversionMatrix(e) {
    const r = b.CREATE_UOM_CONVERSION;
    return this.post(r, e);
  }
  getAllUOMConversionMatrix() {
    const e = b.GET_ALL_UOM_CONVERSION;
    return this.get(e);
  }
  getUOMConversionMatrixById(e) {
    const r = `${b.GET_A_UOM_CONVERSION}/${e}`;
    return this.get(r);
  }
  updateUOMConversionMatrix(e, r) {
    const n = `${b.UPDATE_UOM_CONVERSION}/${e}`;
    return this.patch(n, r);
  }
  deleteUOMConversionMatrixById(e) {
    const r = `${b.DELETE_UOM_CONVERSION}/${e}`;
    return this.delete(r);
  }
}
class Rc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createBranch(e, r) {
    const n = `${b.CREATE_BRANCH}/${r}`;
    return this.post(n, e);
  }
  getAllBranches(e) {
    const r = `${b.GET_ALL_BRANCHES}/?search=${e}`;
    return this.get(r);
  }
  getBranchById(e) {
    const r = `${b.GET_A_BRANCH}/${e}`;
    return this.get(r);
  }
  updateBranch(e, r, n) {
    const o = `${b.UPDATE_BRANCH}/${r}/${e}`;
    return this.patch(o, n);
  }
  deleteBranchById(e, r) {
    const n = `${b.DELETE_BRANCH}/${r}/${e}`;
    return this.delete(n);
  }
}
class gc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createOffice(e, r) {
    const n = `${b.CREATE_OFFICE}/${r}`;
    return this.post(n, e);
  }
  getAllOffice(e) {
    const r = `${b.GET_ALL_OFFICES}/${e}`;
    return this.get(r);
  }
  getOfficeById(e, r) {
    const n = `${b.GET_A_OFFICE}/${r}/${e}`;
    return this.get(n);
  }
  updateOffice(e, r, n) {
    const o = `${b.UPDATE_OFFICE}/${r}/${e}`;
    return this.patch(o, n);
  }
  deleteOfficeById(e, r) {
    const n = `${b.DELETE_OFFICE}/${r}/${e}`;
    return this.delete(n);
  }
}
class vc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendor(e) {
    const r = b.CREATE_VENDOR;
    return this.postFormData(r, e);
  }
  getAllVendors() {
    const e = b.GET_ALL_VENDORS;
    return this.get(e);
  }
  getVendorById(e) {
    const r = `${b.GET_A_VENDOR}/${e}`;
    return this.get(r);
  }
  updateVendor(e, r) {
    const n = `${b.UPDATE_VENDOR}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteVendorById(e) {
    const r = `${b.DELETE_VENDOR}/${e}`;
    return this.delete(r);
  }
}
class Cc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendorCategory(e) {
    const r = b.CREATE_VENDOR_CAT;
    return this.post(r, e);
  }
  getAllVendorCategories() {
    const e = b.GET_ALL_VENDOR_CAT;
    return this.get(e);
  }
  getVendorCategoryById(e) {
    const r = `${b.GET_A_VENDOR_CAT}/${e}`;
    return this.get(r);
  }
  updateVendorCategory(e, r) {
    const n = `${b.UPDATE_VENDOR_CAT}/${e}`;
    return this.patch(n, r);
  }
  deleteProdctCategoryById(e) {
    const r = `${b.DELETE_VENDOR_CAT}/${e}`;
    return this.delete(r);
  }
}
class Tc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendorSubcategory(e) {
    const r = b.CREATE_VENDOR_SUBCAT;
    return this.post(r, e);
  }
  getAllVendorSubcategories() {
    const e = b.GET_ALL_VENDOR_SUBCAT;
    return this.get(e);
  }
  getVendorSubcategoryById(e) {
    const r = `${b.GET_A_VENDOR_SUBCAT}/${e}`;
    return this.get(r);
  }
  updateVendorSubcategory(e, r) {
    const n = `${b.UPDATE_VENDOR_SUBCAT}/${e}`;
    return this.patch(n, r);
  }
  deleteProdctSubcategoryById(e) {
    const r = `${b.DELETE_VENDOR_SUBCAT}/${e}`;
    return this.delete(r);
  }
}
class Oc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createCustomer(e) {
    const r = b.CREATE_CUSTOMER;
    return this.postFormData(r, e);
  }
  getAllCustomers() {
    const e = b.GET_ALL_CUSTOMERS;
    return this.get(e);
  }
  getCustomerById(e) {
    const r = `${b.GET_A_CUSTOMER}/${e}`;
    return this.get(r);
  }
  updateCustomer(e, r) {
    const n = `${b.UPDATE_CUSTOMER}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteCustomerById(e) {
    const r = `${b.DELETE_CUSTOMER}/${e}`;
    return this.delete(r);
  }
}
class bc extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createFarmer(e) {
    const r = b.CREATE_FARMER;
    return this.postFormData(r, e);
  }
  getAllFarmers() {
    const e = b.GET_ALL_FARMERS;
    return this.get(e);
  }
  getFarmerById(e) {
    const r = `${b.GET_A_FARMER}/${e}`;
    return this.get(r);
  }
  updateFarmer(e, r) {
    const n = `${b.UPDATE_FARMER}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteFarmerById(e) {
    const r = `${b.DELETE_FARMER}/${e}`;
    return this.delete(r);
  }
}
class Ac extends J {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createEmployee(e) {
    const r = b.CREATE_EMPLOYEE;
    return this.postFormData(r, e);
  }
  getAllEmployees() {
    const e = b.GET_ALL_EMPLOYEES;
    return this.get(e);
  }
  getEmployeeById(e) {
    const r = `${b.GET_AN_EMPLOYEE}/${e}`;
    return this.get(r);
  }
  updateEmployee(e, r) {
    const n = `${b.UPDATE_AN_EMPLOYEE}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteEmployeeById(e) {
    const r = `${b.DELETE_EMPLOYEE}/${e}`;
    return this.delete(r);
  }
}
export {
  eu as ADMIN_API_URL,
  Rc as BranchService,
  Ka as BranchType,
  Oc as CustomersService,
  Ac as EmployeesService,
  bc as FarmersService,
  Qa as LandHoldingStatus,
  Xa as LandStatus,
  gc as OfficeService,
  Ja as OfficeType,
  Ec as ProductCategoryService,
  pc as ProductClassificationService,
  mc as ProductSubcategoryService,
  hc as ProductsService,
  yc as UOMConversionMatrixService,
  _c as UOMService,
  Cc as VendorCategoryService,
  Tc as VendorSubcategoryService,
  vc as VendorsService,
  b as adminApiUrlConstants,
  sc as useCreateBranches,
  tu as useCreateCustomer,
  lu as useCreateEmployee,
  Eu as useCreateFarmer,
  cc as useCreateOffice,
  Iu as useCreateProduct,
  Bu as useCreateProductCat,
  Mu as useCreateProductClassification,
  Hu as useCreateProductSubcat,
  Ju as useCreateUOM,
  ec as useCreateUOMConversionMatrix,
  gu as useCreateVendor,
  wu as useCreateVendorCat,
  Ou as useCreateVendorSubCat,
  ru as useDeleteCustomer,
  oc as useGetABranch,
  lc as useGetAOffice,
  xu as useGetAProduct,
  Vu as useGetAProductCat,
  Gu as useGetAProductClassification,
  Wu as useGetAProductSubcat,
  Qu as useGetAUOM,
  tc as useGetAUOMConversionMatrixs,
  bu as useGetAVendorCat,
  Pu as useGetAVendorSubCat,
  ic as useGetAllBranches,
  su as useGetAllCustomerCategories,
  uu as useGetAllCustomerNames,
  ou as useGetAllCustomerTypes,
  nu as useGetAllCustomers,
  fu as useGetAllEmployee,
  mu as useGetAllFarmers,
  uc as useGetAllFilteredBranches,
  Ru as useGetAllFilteredFarmerData,
  Cu as useGetAllFilteredVendorData,
  fc as useGetAllOffices,
  $u as useGetAllProductClassification,
  zu as useGetAllProductSubCat,
  Nu as useGetAllProducts,
  Yu as useGetAllProductsCat,
  du as useGetAllRoles,
  rc as useGetAllUOMConversionMatrixs,
  Xu as useGetAllUOMs,
  Lu as useGetAllVendorByQuery,
  Au as useGetAllVendorCat,
  Du as useGetAllVendorSubCat,
  Fu as useGetAllVendorSubcategoriesByQuery,
  vu as useGetAllVendors,
  iu as useGetCustomer,
  cu as useGetCustomerPartialData,
  hu as useGetEmployee,
  _u as useGetFarmer,
  Tu as useGetVendor,
  ac as useUpdateBranch,
  au as useUpdateCustomer,
  pu as useUpdateEmployee,
  yu as useUpdateFarmer,
  dc as useUpdateOffice,
  ku as useUpdateProduct,
  qu as useUpdateProductCat,
  ju as useUpdateProductClassification,
  Ku as useUpdateProductSubcat,
  Zu as useUpdateUOM,
  nc as useUpdateUOMConversionMatrixs,
  Su as useUpdateVendorCat,
  Uu as useUpdateVendorSubCat
};
