var cs = (e) => {
  throw TypeError(e);
};
var an = (e, t, r) => t.has(e) || cs("Cannot " + r);
var v = (e, t, r) => (an(e, t, "read from private field"), r ? r.call(e) : t.get(e)), re = (e, t, r) => t.has(e) ? cs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), j = (e, t, r, n) => (an(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), oe = (e, t, r) => (an(e, t, "access private method"), r);
const Ja = {
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
};
var Pr = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
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
function Io() {
}
function ls(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function No(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Rr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fs(e) {
  return JSON.stringify(
    e,
    (t, r) => hn(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function dn(e, t) {
  if (e === t)
    return e;
  const r = ds(e) && ds(t);
  if (r || hn(e) && hn(t)) {
    const n = r ? e : Object.keys(e), o = n.length, c = r ? t : Object.keys(t), u = c.length, l = r ? [] : {};
    let E = 0;
    for (let m = 0; m < u; m++) {
      const y = r ? m : c[m];
      (!r && n.includes(y) || r) && e[y] === void 0 && t[y] === void 0 ? (l[y] = void 0, E++) : (l[y] = dn(e[y], t[y]), l[y] === e[y] && e[y] !== void 0 && E++);
    }
    return o === u && E === o ? e : l;
  }
  return t;
}
function wr(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function ds(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function hn(e) {
  if (!hs(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!hs(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function hs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ps(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return dn(e, t);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return dn(e, t);
  }
  return t;
}
var mt, et, Pt, xs, jo = (xs = class extends Pr {
  constructor() {
    super();
    re(this, mt);
    re(this, et);
    re(this, Pt);
    j(this, Pt, (t) => {
      if (!Sr && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    v(this, et) || this.setEventListener(v(this, Pt));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = v(this, et)) == null || t.call(this), j(this, et, void 0));
  }
  setEventListener(t) {
    var r;
    j(this, Pt, t), (r = v(this, et)) == null || r.call(this), j(this, et, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    v(this, mt) !== t && (j(this, mt, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof v(this, mt) == "boolean" ? v(this, mt) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, mt = new WeakMap(), et = new WeakMap(), Pt = new WeakMap(), xs), Mo = new jo(), Dt, tt, Ft, Is, Bo = (Is = class extends Pr {
  constructor() {
    super();
    re(this, Dt, !0);
    re(this, tt);
    re(this, Ft);
    j(this, Ft, (t) => {
      if (!Sr && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    v(this, tt) || this.setEventListener(v(this, Ft));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = v(this, tt)) == null || t.call(this), j(this, tt, void 0));
  }
  setEventListener(t) {
    var r;
    j(this, Ft, t), (r = v(this, tt)) == null || r.call(this), j(this, tt, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    v(this, Dt) !== t && (j(this, Dt, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return v(this, Dt);
  }
}, Dt = new WeakMap(), tt = new WeakMap(), Ft = new WeakMap(), Is), Go = new Bo();
function Vo(e) {
  return (e ?? "online") === "online" ? Go.isOnline() : !0;
}
function $o() {
  let e = [], t = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  }, o = (l) => setTimeout(l, 0);
  const c = (l) => {
    t ? e.push(l) : o(() => {
      r(l);
    });
  }, u = () => {
    const l = e;
    e = [], l.length && o(() => {
      n(() => {
        l.forEach((E) => {
          r(E);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let E;
      t++;
      try {
        E = l();
      } finally {
        t--, t || u();
      }
      return E;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...E) => {
      c(() => {
        l(...E);
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
var Dr = $o();
function qo(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Vo(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
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
var Te, q, Qt, Ce, vt, kt, Be, Xt, Ut, Lt, Et, gt, rt, xt, K, zt, pn, yn, mn, vn, En, gn, bn, Ms, Ns, Ho = (Ns = class extends Pr {
  constructor(t, r) {
    super();
    re(this, K);
    re(this, Te);
    re(this, q);
    re(this, Qt);
    re(this, Ce);
    re(this, vt);
    re(this, kt);
    re(this, Be);
    re(this, Xt);
    re(this, Ut);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    re(this, Lt);
    re(this, Et);
    re(this, gt);
    re(this, rt);
    re(this, xt, /* @__PURE__ */ new Set());
    this.options = r, j(this, Te, t), j(this, Be, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, q).addObserver(this), ys(v(this, q), this.options) ? oe(this, K, zt).call(this) : this.updateResult(), oe(this, K, vn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Rn(
      v(this, q),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Rn(
      v(this, q),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, K, En).call(this), oe(this, K, gn).call(this), v(this, q).removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options, o = v(this, q);
    if (this.options = v(this, Te).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Ge(this.options.enabled, v(this, q)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, K, bn).call(this), v(this, q).setOptions(this.options), n._defaulted && !wr(this.options, n) && v(this, Te).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, q),
      observer: this
    });
    const c = this.hasListeners();
    c && ms(
      v(this, q),
      o,
      this.options,
      n
    ) && oe(this, K, zt).call(this), this.updateResult(r), c && (v(this, q) !== o || Ge(this.options.enabled, v(this, q)) !== Ge(n.enabled, v(this, q)) || Rr(this.options.staleTime, v(this, q)) !== Rr(n.staleTime, v(this, q))) && oe(this, K, pn).call(this);
    const u = oe(this, K, yn).call(this);
    c && (v(this, q) !== o || Ge(this.options.enabled, v(this, q)) !== Ge(n.enabled, v(this, q)) || u !== v(this, rt)) && oe(this, K, mn).call(this, u);
  }
  getOptimisticResult(t) {
    const r = v(this, Te).getQueryCache().build(v(this, Te), t), n = this.createResult(r, t);
    return zo(this, n) && (j(this, Ce, n), j(this, kt, this.options), j(this, vt, v(this, q).state)), n;
  }
  getCurrentResult() {
    return v(this, Ce);
  }
  trackResult(t, r) {
    const n = {};
    return Object.keys(t).forEach((o) => {
      Object.defineProperty(n, o, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(o), r == null || r(o), t[o])
      });
    }), n;
  }
  trackProp(t) {
    v(this, xt).add(t);
  }
  getCurrentQuery() {
    return v(this, q);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = v(this, Te).defaultQueryOptions(t), n = v(this, Te).getQueryCache().build(v(this, Te), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return oe(this, K, zt).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), v(this, Ce)));
  }
  createResult(t, r) {
    var he;
    const n = v(this, q), o = this.options, c = v(this, Ce), u = v(this, vt), l = v(this, kt), m = t !== n ? t.state : v(this, Qt), { state: y } = t;
    let g = { ...y }, x = !1, D;
    if (r._optimisticResults) {
      const Z = this.hasListeners(), Oe = !Z && ys(t, r), Ve = Z && ms(t, n, r, o);
      (Oe || Ve) && (g = {
        ...g,
        ...qo(y.data, t.options)
      }), r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: S, errorUpdatedAt: A, status: O } = g;
    if (r.select && g.data !== void 0)
      if (c && g.data === (u == null ? void 0 : u.data) && r.select === v(this, Xt))
        D = v(this, Ut);
      else
        try {
          j(this, Xt, r.select), D = r.select(g.data), D = ps(c == null ? void 0 : c.data, D, r), j(this, Ut, D), j(this, Be, null);
        } catch (Z) {
          j(this, Be, Z);
        }
    else
      D = g.data;
    if (r.placeholderData !== void 0 && D === void 0 && O === "pending") {
      let Z;
      if (c != null && c.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        Z = c.data;
      else if (Z = typeof r.placeholderData == "function" ? r.placeholderData(
        (he = v(this, Lt)) == null ? void 0 : he.state.data,
        v(this, Lt)
      ) : r.placeholderData, r.select && Z !== void 0)
        try {
          Z = r.select(Z), j(this, Be, null);
        } catch (Oe) {
          j(this, Be, Oe);
        }
      Z !== void 0 && (O = "success", D = ps(
        c == null ? void 0 : c.data,
        Z,
        r
      ), x = !0);
    }
    v(this, Be) && (S = v(this, Be), D = v(this, Ut), A = Date.now(), O = "error");
    const B = g.fetchStatus === "fetching", k = O === "pending", z = O === "error", ie = k && B, I = D !== void 0;
    return {
      status: O,
      fetchStatus: g.fetchStatus,
      isPending: k,
      isSuccess: O === "success",
      isError: z,
      isInitialLoading: ie,
      isLoading: ie,
      data: D,
      dataUpdatedAt: g.dataUpdatedAt,
      error: S,
      errorUpdatedAt: A,
      failureCount: g.fetchFailureCount,
      failureReason: g.fetchFailureReason,
      errorUpdateCount: g.errorUpdateCount,
      isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
      isFetchedAfterMount: g.dataUpdateCount > m.dataUpdateCount || g.errorUpdateCount > m.errorUpdateCount,
      isFetching: B,
      isRefetching: B && !k,
      isLoadingError: z && !I,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: x,
      isRefetchError: z && I,
      isStale: Fn(t, r),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const r = v(this, Ce), n = this.createResult(v(this, q), this.options);
    if (j(this, vt, v(this, q).state), j(this, kt, this.options), v(this, vt).data !== void 0 && j(this, Lt, v(this, q)), wr(n, r))
      return;
    j(this, Ce, n);
    const o = {}, c = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: u } = this.options, l = typeof u == "function" ? u() : u;
      if (l === "all" || !l && !v(this, xt).size)
        return !0;
      const E = new Set(
        l ?? v(this, xt)
      );
      return this.options.throwOnError && E.add("error"), Object.keys(v(this, Ce)).some((m) => {
        const y = m;
        return v(this, Ce)[y] !== r[y] && E.has(y);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && c() && (o.listeners = !0), oe(this, K, Ms).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, K, vn).call(this);
  }
}, Te = new WeakMap(), q = new WeakMap(), Qt = new WeakMap(), Ce = new WeakMap(), vt = new WeakMap(), kt = new WeakMap(), Be = new WeakMap(), Xt = new WeakMap(), Ut = new WeakMap(), Lt = new WeakMap(), Et = new WeakMap(), gt = new WeakMap(), rt = new WeakMap(), xt = new WeakMap(), K = new WeakSet(), zt = function(t) {
  oe(this, K, bn).call(this);
  let r = v(this, q).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(Io)), r;
}, pn = function() {
  oe(this, K, En).call(this);
  const t = Rr(
    this.options.staleTime,
    v(this, q)
  );
  if (Sr || v(this, Ce).isStale || !ls(t))
    return;
  const n = No(v(this, Ce).dataUpdatedAt, t) + 1;
  j(this, Et, setTimeout(() => {
    v(this, Ce).isStale || this.updateResult();
  }, n));
}, yn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, q)) : this.options.refetchInterval) ?? !1;
}, mn = function(t) {
  oe(this, K, gn).call(this), j(this, rt, t), !(Sr || Ge(this.options.enabled, v(this, q)) === !1 || !ls(v(this, rt)) || v(this, rt) === 0) && j(this, gt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Mo.isFocused()) && oe(this, K, zt).call(this);
  }, v(this, rt)));
}, vn = function() {
  oe(this, K, pn).call(this), oe(this, K, mn).call(this, oe(this, K, yn).call(this));
}, En = function() {
  v(this, Et) && (clearTimeout(v(this, Et)), j(this, Et, void 0));
}, gn = function() {
  v(this, gt) && (clearInterval(v(this, gt)), j(this, gt, void 0));
}, bn = function() {
  const t = v(this, Te).getQueryCache().build(v(this, Te), this.options);
  if (t === v(this, q))
    return;
  const r = v(this, q);
  j(this, q, t), j(this, Qt, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Ms = function(t) {
  Dr.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(v(this, Ce));
    }), v(this, Te).getQueryCache().notify({
      query: v(this, q),
      type: "observerResultsUpdated"
    });
  });
}, Ns);
function Yo(e, t) {
  return Ge(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function ys(e, t) {
  return Yo(e, t) || e.state.data !== void 0 && Rn(e, t, t.refetchOnMount);
}
function Rn(e, t, r) {
  if (Ge(t.enabled, e) !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && Fn(e, t);
  }
  return !1;
}
function ms(e, t, r, n) {
  return (e !== t || Ge(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && Fn(e, r);
}
function Fn(e, t) {
  return Ge(t.enabled, e) !== !1 && e.isStaleByTime(Rr(t.staleTime, e));
}
function zo(e, t) {
  return !wr(e.getCurrentResult(), t);
}
var nt, st, Ae, He, Ye, _r, _n, js, Ko = (js = class extends Pr {
  constructor(t, r) {
    super();
    re(this, Ye);
    re(this, nt);
    re(this, st);
    re(this, Ae);
    re(this, He);
    j(this, nt, t), this.setOptions(r), this.bindMethods(), oe(this, Ye, _r).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var n;
    const r = this.options;
    this.options = v(this, nt).defaultMutationOptions(t), wr(this.options, r) || v(this, nt).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: v(this, Ae),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && fs(r.mutationKey) !== fs(this.options.mutationKey) ? this.reset() : ((n = v(this, Ae)) == null ? void 0 : n.state.status) === "pending" && v(this, Ae).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = v(this, Ae)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    oe(this, Ye, _r).call(this), oe(this, Ye, _n).call(this, t);
  }
  getCurrentResult() {
    return v(this, st);
  }
  reset() {
    var t;
    (t = v(this, Ae)) == null || t.removeObserver(this), j(this, Ae, void 0), oe(this, Ye, _r).call(this), oe(this, Ye, _n).call(this);
  }
  mutate(t, r) {
    var n;
    return j(this, He, r), (n = v(this, Ae)) == null || n.removeObserver(this), j(this, Ae, v(this, nt).getMutationCache().build(v(this, nt), this.options)), v(this, Ae).addObserver(this), v(this, Ae).execute(t);
  }
}, nt = new WeakMap(), st = new WeakMap(), Ae = new WeakMap(), He = new WeakMap(), Ye = new WeakSet(), _r = function() {
  var r;
  const t = ((r = v(this, Ae)) == null ? void 0 : r.state) ?? Wo();
  j(this, st, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, _n = function(t) {
  Dr.batch(() => {
    var r, n, o, c, u, l, E, m;
    if (v(this, He) && this.hasListeners()) {
      const y = v(this, st).variables, g = v(this, st).context;
      (t == null ? void 0 : t.type) === "success" ? ((n = (r = v(this, He)).onSuccess) == null || n.call(r, t.data, y, g), (c = (o = v(this, He)).onSettled) == null || c.call(o, t.data, null, y, g)) : (t == null ? void 0 : t.type) === "error" && ((l = (u = v(this, He)).onError) == null || l.call(u, t.error, y, g), (m = (E = v(this, He)).onSettled) == null || m.call(
        E,
        void 0,
        t.error,
        y,
        g
      ));
    }
    this.listeners.forEach((y) => {
      y(v(this, st));
    });
  });
}, js), Cn = { exports: {} }, M = {};
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
function Jo() {
  if (vs) return M;
  vs = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), g = Symbol.iterator;
  function x(f) {
    return f === null || typeof f != "object" ? null : (f = g && f[g] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var D = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, S = Object.assign, A = {};
  function O(f, R, G) {
    this.props = f, this.context = R, this.refs = A, this.updater = G || D;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(f, R) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, R, "setState");
  }, O.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function B() {
  }
  B.prototype = O.prototype;
  function k(f, R, G) {
    this.props = f, this.context = R, this.refs = A, this.updater = G || D;
  }
  var z = k.prototype = new B();
  z.constructor = k, S(z, O.prototype), z.isPureReactComponent = !0;
  var ie = Array.isArray, I = Object.prototype.hasOwnProperty, se = { current: null }, he = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(f, R, G) {
    var $, H = {}, ne = null, ee = null;
    if (R != null) for ($ in R.ref !== void 0 && (ee = R.ref), R.key !== void 0 && (ne = "" + R.key), R) I.call(R, $) && !he.hasOwnProperty($) && (H[$] = R[$]);
    var X = arguments.length - 2;
    if (X === 1) H.children = G;
    else if (1 < X) {
      for (var J = Array(X), pe = 0; pe < X; pe++) J[pe] = arguments[pe + 2];
      H.children = J;
    }
    if (f && f.defaultProps) for ($ in X = f.defaultProps, X) H[$] === void 0 && (H[$] = X[$]);
    return { $$typeof: e, type: f, key: ne, ref: ee, props: H, _owner: se.current };
  }
  function Oe(f, R) {
    return { $$typeof: e, type: f.type, key: R, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Ve(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }
  function Mt(f) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(G) {
      return R[G];
    });
  }
  var ot = /\/+/g;
  function Re(f, R) {
    return typeof f == "object" && f !== null && f.key != null ? Mt("" + f.key) : R.toString(36);
  }
  function Se(f, R, G, $, H) {
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
          case e:
          case t:
            ee = !0;
        }
    }
    if (ee) return ee = f, H = H(ee), f = $ === "" ? "." + Re(ee, 0) : $, ie(H) ? (G = "", f != null && (G = f.replace(ot, "$&/") + "/"), Se(H, R, G, "", function(pe) {
      return pe;
    })) : H != null && (Ve(H) && (H = Oe(H, G + (!H.key || ee && ee.key === H.key ? "" : ("" + H.key).replace(ot, "$&/") + "/") + f)), R.push(H)), 1;
    if (ee = 0, $ = $ === "" ? "." : $ + ":", ie(f)) for (var X = 0; X < f.length; X++) {
      ne = f[X];
      var J = $ + Re(ne, X);
      ee += Se(ne, R, G, J, H);
    }
    else if (J = x(f), typeof J == "function") for (f = J.call(f), X = 0; !(ne = f.next()).done; ) ne = ne.value, J = $ + Re(ne, X++), ee += Se(ne, R, G, J, H);
    else if (ne === "object") throw R = String(f), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return ee;
  }
  function Ee(f, R, G) {
    if (f == null) return f;
    var $ = [], H = 0;
    return Se(f, $, "", "", function(ne) {
      return R.call(G, ne, H++);
    }), $;
  }
  function xe(f) {
    if (f._status === -1) {
      var R = f._result;
      R = R(), R.then(function(G) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = G);
      }, function(G) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = G);
      }), f._status === -1 && (f._status = 0, f._result = R);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var T = { current: null }, Ne = { transition: null }, it = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: Ne, ReactCurrentOwner: se };
  function $e() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: Ee, forEach: function(f, R, G) {
    Ee(f, function() {
      R.apply(this, arguments);
    }, G);
  }, count: function(f) {
    var R = 0;
    return Ee(f, function() {
      R++;
    }), R;
  }, toArray: function(f) {
    return Ee(f, function(R) {
      return R;
    }) || [];
  }, only: function(f) {
    if (!Ve(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, M.Component = O, M.Fragment = r, M.Profiler = o, M.PureComponent = k, M.StrictMode = n, M.Suspense = E, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = it, M.act = $e, M.cloneElement = function(f, R, G) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var $ = S({}, f.props), H = f.key, ne = f.ref, ee = f._owner;
    if (R != null) {
      if (R.ref !== void 0 && (ne = R.ref, ee = se.current), R.key !== void 0 && (H = "" + R.key), f.type && f.type.defaultProps) var X = f.type.defaultProps;
      for (J in R) I.call(R, J) && !he.hasOwnProperty(J) && ($[J] = R[J] === void 0 && X !== void 0 ? X[J] : R[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) $.children = G;
    else if (1 < J) {
      X = Array(J);
      for (var pe = 0; pe < J; pe++) X[pe] = arguments[pe + 2];
      $.children = X;
    }
    return { $$typeof: e, type: f.type, key: H, ref: ne, props: $, _owner: ee };
  }, M.createContext = function(f) {
    return f = { $$typeof: u, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: c, _context: f }, f.Consumer = f;
  }, M.createElement = Z, M.createFactory = function(f) {
    var R = Z.bind(null, f);
    return R.type = f, R;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(f) {
    return { $$typeof: l, render: f };
  }, M.isValidElement = Ve, M.lazy = function(f) {
    return { $$typeof: y, _payload: { _status: -1, _result: f }, _init: xe };
  }, M.memo = function(f, R) {
    return { $$typeof: m, type: f, compare: R === void 0 ? null : R };
  }, M.startTransition = function(f) {
    var R = Ne.transition;
    Ne.transition = {};
    try {
      f();
    } finally {
      Ne.transition = R;
    }
  }, M.unstable_act = $e, M.useCallback = function(f, R) {
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
  }, M.useImperativeHandle = function(f, R, G) {
    return T.current.useImperativeHandle(f, R, G);
  }, M.useInsertionEffect = function(f, R) {
    return T.current.useInsertionEffect(f, R);
  }, M.useLayoutEffect = function(f, R) {
    return T.current.useLayoutEffect(f, R);
  }, M.useMemo = function(f, R) {
    return T.current.useMemo(f, R);
  }, M.useReducer = function(f, R, G) {
    return T.current.useReducer(f, R, G);
  }, M.useRef = function(f) {
    return T.current.useRef(f);
  }, M.useState = function(f) {
    return T.current.useState(f);
  }, M.useSyncExternalStore = function(f, R, G) {
    return T.current.useSyncExternalStore(f, R, G);
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
var Es;
function Qo() {
  return Es || (Es = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), O = Symbol.iterator, B = "@@iterator";
      function k(s) {
        if (s === null || typeof s != "object")
          return null;
        var i = O && s[O] || s[B];
        return typeof i == "function" ? i : null;
      }
      var z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {
        transition: null
      }, I = {
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
      function Oe(s) {
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
      var Ve = !1, Mt = !1, ot = !1, Re = !1, Se = !1, Ee = {
        ReactCurrentDispatcher: z,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: se
      };
      Ee.ReactDebugCurrentFrame = he, Ee.ReactCurrentActQueue = I;
      function xe(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          Ne("warn", s, d);
        }
      }
      function T(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          Ne("error", s, d);
        }
      }
      function Ne(s, i, d) {
        {
          var p = Ee.ReactDebugCurrentFrame, C = p.getStackAddendum();
          C !== "" && (i += "%s", d = d.concat([C]));
          var P = d.map(function(w) {
            return String(w);
          });
          P.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, P);
        }
      }
      var it = {};
      function $e(s, i) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", C = p + "." + i;
          if (it[C])
            return;
          T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, p), it[C] = !0;
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
          $e(s, "forceUpdate");
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
          $e(s, "replaceState");
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
          $e(s, "setState");
        }
      }, R = Object.assign, G = {};
      Object.freeze(G);
      function $(s, i, d) {
        this.props = s, this.context = i, this.refs = G, this.updater = d || f;
      }
      $.prototype.isReactComponent = {}, $.prototype.setState = function(s, i) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, i, "setState");
      }, $.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var H = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ne = function(s, i) {
          Object.defineProperty($.prototype, s, {
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
      X.prototype = $.prototype;
      function J(s, i, d) {
        this.props = s, this.context = i, this.refs = G, this.updater = d || f;
      }
      var pe = J.prototype = new X();
      pe.constructor = J, R(pe, $.prototype), pe.isPureReactComponent = !0;
      function Nr() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var tr = Array.isArray;
      function _t(s) {
        return tr(s);
      }
      function jr(s) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function Ct(s) {
        try {
          return ze(s), !1;
        } catch {
          return !0;
        }
      }
      function ze(s) {
        return "" + s;
      }
      function at(s) {
        if (Ct(s))
          return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jr(s)), ze(s);
      }
      function rr(s, i, d) {
        var p = s.displayName;
        if (p)
          return p;
        var C = i.displayName || i.name || "";
        return C !== "" ? d + "(" + C + ")" : d;
      }
      function ut(s) {
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
          case x:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case m:
              var i = s;
              return ut(i) + ".Consumer";
            case E:
              var d = s;
              return ut(d._context) + ".Provider";
            case y:
              return rr(s, s.render, "ForwardRef");
            case D:
              var p = s.displayName || null;
              return p !== null ? p : je(s.type) || "Memo";
            case S: {
              var C = s, P = C._payload, w = C._init;
              try {
                return je(w(P));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ct = Object.prototype.hasOwnProperty, Ot = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, nr, sr, St;
      St = {};
      function Bt(s) {
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
      function Mr(s, i) {
        var d = function() {
          nr || (nr = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: d,
          configurable: !0
        });
      }
      function or(s, i) {
        var d = function() {
          sr || (sr = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: d,
          configurable: !0
        });
      }
      function ir(s) {
        if (typeof s.ref == "string" && se.current && s.__self && se.current.stateNode !== s.__self) {
          var i = je(se.current.type);
          St[i] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, s.ref), St[i] = !0);
        }
      }
      var lt = function(s, i, d, p, C, P, w) {
        var U = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: s,
          key: i,
          ref: d,
          props: w,
          // Record the component responsible for creating this element.
          _owner: P
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
          value: p
        }), Object.defineProperty(U, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: C
        }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
      };
      function Br(s, i, d) {
        var p, C = {}, P = null, w = null, U = null, W = null;
        if (i != null) {
          Bt(i) && (w = i.ref, ir(i)), Ke(i) && (at(i.key), P = "" + i.key), U = i.__self === void 0 ? null : i.__self, W = i.__source === void 0 ? null : i.__source;
          for (p in i)
            ct.call(i, p) && !Ot.hasOwnProperty(p) && (C[p] = i[p]);
        }
        var te = arguments.length - 2;
        if (te === 1)
          C.children = d;
        else if (te > 1) {
          for (var ae = Array(te), ue = 0; ue < te; ue++)
            ae[ue] = arguments[ue + 2];
          Object.freeze && Object.freeze(ae), C.children = ae;
        }
        if (s && s.defaultProps) {
          var le = s.defaultProps;
          for (p in le)
            C[p] === void 0 && (C[p] = le[p]);
        }
        if (P || w) {
          var ye = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          P && Mr(C, ye), w && or(C, ye);
        }
        return lt(s, P, w, U, W, se.current, C);
      }
      function Gr(s, i) {
        var d = lt(s.type, i, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function Vr(s, i, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, C = R({}, s.props), P = s.key, w = s.ref, U = s._self, W = s._source, te = s._owner;
        if (i != null) {
          Bt(i) && (w = i.ref, te = se.current), Ke(i) && (at(i.key), P = "" + i.key);
          var ae;
          s.type && s.type.defaultProps && (ae = s.type.defaultProps);
          for (p in i)
            ct.call(i, p) && !Ot.hasOwnProperty(p) && (i[p] === void 0 && ae !== void 0 ? C[p] = ae[p] : C[p] = i[p]);
        }
        var ue = arguments.length - 2;
        if (ue === 1)
          C.children = d;
        else if (ue > 1) {
          for (var le = Array(ue), ye = 0; ye < ue; ye++)
            le[ye] = arguments[ye + 2];
          C.children = le;
        }
        return lt(s.type, P, w, U, W, te, C);
      }
      function Je(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var ar = ".", $r = ":";
      function qr(s) {
        var i = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(i, function(C) {
          return d[C];
        });
        return "$" + p;
      }
      var wt = !1, ur = /\/+/g;
      function qe(s) {
        return s.replace(ur, "$&/");
      }
      function ft(s, i) {
        return typeof s == "object" && s !== null && s.key != null ? (at(s.key), qr("" + s.key)) : i.toString(36);
      }
      function Qe(s, i, d, p, C) {
        var P = typeof s;
        (P === "undefined" || P === "boolean") && (s = null);
        var w = !1;
        if (s === null)
          w = !0;
        else
          switch (P) {
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
          var U = s, W = C(U), te = p === "" ? ar + ft(U, 0) : p;
          if (_t(W)) {
            var ae = "";
            te != null && (ae = qe(te) + "/"), Qe(W, i, ae, "", function(xo) {
              return xo;
            });
          } else W != null && (Je(W) && (W.key && (!U || U.key !== W.key) && at(W.key), W = Gr(
            W,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (W.key && (!U || U.key !== W.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              qe("" + W.key) + "/"
            ) : "") + te
          )), i.push(W));
          return 1;
        }
        var ue, le, ye = 0, be = p === "" ? ar : p + $r;
        if (_t(s))
          for (var br = 0; br < s.length; br++)
            ue = s[br], le = be + ft(ue, br), ye += Qe(ue, i, d, le, C);
        else {
          var on = k(s);
          if (typeof on == "function") {
            var is = s;
            on === is.entries && (wt || xe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wt = !0);
            for (var Uo = on.call(is), as, Lo = 0; !(as = Uo.next()).done; )
              ue = as.value, le = be + ft(ue, Lo++), ye += Qe(ue, i, d, le, C);
          } else if (P === "object") {
            var us = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (us === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : us) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ye;
      }
      function dt(s, i, d) {
        if (s == null)
          return s;
        var p = [], C = 0;
        return Qe(s, p, "", "", function(P) {
          return i.call(d, P, C++);
        }), p;
      }
      function Wr(s) {
        var i = 0;
        return dt(s, function() {
          i++;
        }), i;
      }
      function cr(s, i, d) {
        dt(s, function() {
          i.apply(this, arguments);
        }, d);
      }
      function Hr(s) {
        return dt(s, function(i) {
          return i;
        }) || [];
      }
      function lr(s) {
        if (!Je(s))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
      function fr(s) {
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
          $$typeof: E,
          _context: i
        };
        var d = !1, p = !1, C = !1;
        {
          var P = {
            $$typeof: m,
            _context: i
          };
          Object.defineProperties(P, {
            Provider: {
              get: function() {
                return p || (p = !0, T("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), i.Provider;
              },
              set: function(w) {
                i.Provider = w;
              }
            },
            _currentValue: {
              get: function() {
                return i._currentValue;
              },
              set: function(w) {
                i._currentValue = w;
              }
            },
            _currentValue2: {
              get: function() {
                return i._currentValue2;
              },
              set: function(w) {
                i._currentValue2 = w;
              }
            },
            _threadCount: {
              get: function() {
                return i._threadCount;
              },
              set: function(w) {
                i._threadCount = w;
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
              set: function(w) {
                C || (xe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", w), C = !0);
              }
            }
          }), i.Consumer = P;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var ht = -1, Gt = 0, Vt = 1, dr = 2;
      function Yr(s) {
        if (s._status === ht) {
          var i = s._result, d = i();
          if (d.then(function(P) {
            if (s._status === Gt || s._status === ht) {
              var w = s;
              w._status = Vt, w._result = P;
            }
          }, function(P) {
            if (s._status === Gt || s._status === ht) {
              var w = s;
              w._status = dr, w._result = P;
            }
          }), s._status === ht) {
            var p = s;
            p._status = Gt, p._result = d;
          }
        }
        if (s._status === Vt) {
          var C = s._result;
          return C === void 0 && T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, C), "default" in C || T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, C), C.default;
        } else
          throw s._result;
      }
      function zr(s) {
        var i = {
          // We use these fields to store the result.
          _status: ht,
          _result: s
        }, d = {
          $$typeof: S,
          _payload: i,
          _init: Yr
        };
        {
          var p, C;
          Object.defineProperties(d, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(P) {
                T("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = P, Object.defineProperty(d, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return C;
              },
              set: function(P) {
                T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), C = P, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function Kr(s) {
        s != null && s.$$typeof === D ? T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? T("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && T("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
      var hr;
      hr = Symbol.for("react.module.reference");
      function a(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === c || s === l || Se || s === u || s === g || s === x || Re || s === A || Ve || Mt || ot || typeof s == "object" && s !== null && (s.$$typeof === S || s.$$typeof === D || s.$$typeof === E || s.$$typeof === m || s.$$typeof === y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === hr || s.getModuleId !== void 0));
      }
      function b(s, i) {
        a(s) || T("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
        var d = {
          $$typeof: D,
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
            set: function(C) {
              p = C, !s.name && !s.displayName && (s.displayName = C);
            }
          });
        }
        return d;
      }
      function _() {
        var s = z.current;
        return s === null && T(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
      }
      function F(s) {
        var i = _();
        if (s._context !== void 0) {
          var d = s._context;
          d.Consumer === s ? T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === s && T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return i.useContext(s);
      }
      function Y(s) {
        var i = _();
        return i.useState(s);
      }
      function Q(s, i, d) {
        var p = _();
        return p.useReducer(s, i, d);
      }
      function V(s) {
        var i = _();
        return i.useRef(s);
      }
      function N(s, i) {
        var d = _();
        return d.useEffect(s, i);
      }
      function ge(s, i) {
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
      function we(s, i) {
        var d = _();
        return d.useMemo(s, i);
      }
      function Xe(s, i, d) {
        var p = _();
        return p.useImperativeHandle(s, i, d);
      }
      function We(s, i) {
        {
          var d = _();
          return d.useDebugValue(s, i);
        }
      }
      function _e() {
        var s = _();
        return s.useTransition();
      }
      function $t(s) {
        var i = _();
        return i.useDeferredValue(s);
      }
      function Jr() {
        var s = _();
        return s.useId();
      }
      function Qr(s, i, d) {
        var p = _();
        return p.useSyncExternalStore(s, i, d);
      }
      var qt = 0, Mn, Bn, Gn, Vn, $n, qn, Wn;
      function Hn() {
      }
      Hn.__reactDisabledLog = !0;
      function yo() {
        {
          if (qt === 0) {
            Mn = console.log, Bn = console.info, Gn = console.warn, Vn = console.error, $n = console.group, qn = console.groupCollapsed, Wn = console.groupEnd;
            var s = {
              configurable: !0,
              enumerable: !0,
              value: Hn,
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
      function mo() {
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
                value: Bn
              }),
              warn: R({}, s, {
                value: Gn
              }),
              error: R({}, s, {
                value: Vn
              }),
              group: R({}, s, {
                value: $n
              }),
              groupCollapsed: R({}, s, {
                value: qn
              }),
              groupEnd: R({}, s, {
                value: Wn
              })
            });
          }
          qt < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xr = Ee.ReactCurrentDispatcher, Zr;
      function pr(s, i, d) {
        {
          if (Zr === void 0)
            try {
              throw Error();
            } catch (C) {
              var p = C.stack.trim().match(/\n( *(at )?)/);
              Zr = p && p[1] || "";
            }
          return `
` + Zr + s;
        }
      }
      var en = !1, yr;
      {
        var vo = typeof WeakMap == "function" ? WeakMap : Map;
        yr = new vo();
      }
      function Yn(s, i) {
        if (!s || en)
          return "";
        {
          var d = yr.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        en = !0;
        var C = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var P;
        P = Xr.current, Xr.current = null, yo();
        try {
          if (i) {
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
              } catch (be) {
                p = be;
              }
              Reflect.construct(s, [], w);
            } else {
              try {
                w.call();
              } catch (be) {
                p = be;
              }
              s.call(w.prototype);
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
            for (var U = be.stack.split(`
`), W = p.stack.split(`
`), te = U.length - 1, ae = W.length - 1; te >= 1 && ae >= 0 && U[te] !== W[ae]; )
              ae--;
            for (; te >= 1 && ae >= 0; te--, ae--)
              if (U[te] !== W[ae]) {
                if (te !== 1 || ae !== 1)
                  do
                    if (te--, ae--, ae < 0 || U[te] !== W[ae]) {
                      var ue = `
` + U[te].replace(" at new ", " at ");
                      return s.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", s.displayName)), typeof s == "function" && yr.set(s, ue), ue;
                    }
                  while (te >= 1 && ae >= 0);
                break;
              }
          }
        } finally {
          en = !1, Xr.current = P, mo(), Error.prepareStackTrace = C;
        }
        var le = s ? s.displayName || s.name : "", ye = le ? pr(le) : "";
        return typeof s == "function" && yr.set(s, ye), ye;
      }
      function Eo(s, i, d) {
        return Yn(s, !1);
      }
      function go(s) {
        var i = s.prototype;
        return !!(i && i.isReactComponent);
      }
      function mr(s, i, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return Yn(s, go(s));
        if (typeof s == "string")
          return pr(s);
        switch (s) {
          case g:
            return pr("Suspense");
          case x:
            return pr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case y:
              return Eo(s.render);
            case D:
              return mr(s.type, i, d);
            case S: {
              var p = s, C = p._payload, P = p._init;
              try {
                return mr(P(C), i, d);
              } catch {
              }
            }
          }
        return "";
      }
      var zn = {}, Kn = Ee.ReactDebugCurrentFrame;
      function vr(s) {
        if (s) {
          var i = s._owner, d = mr(s.type, s._source, i ? i.type : null);
          Kn.setExtraStackFrame(d);
        } else
          Kn.setExtraStackFrame(null);
      }
      function bo(s, i, d, p, C) {
        {
          var P = Function.call.bind(ct);
          for (var w in s)
            if (P(s, w)) {
              var U = void 0;
              try {
                if (typeof s[w] != "function") {
                  var W = Error((p || "React class") + ": " + d + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw W.name = "Invariant Violation", W;
                }
                U = s[w](i, w, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (te) {
                U = te;
              }
              U && !(U instanceof Error) && (vr(C), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, w, typeof U), vr(null)), U instanceof Error && !(U.message in zn) && (zn[U.message] = !0, vr(C), T("Failed %s type: %s", d, U.message), vr(null));
            }
        }
      }
      function Tt(s) {
        if (s) {
          var i = s._owner, d = mr(s.type, s._source, i ? i.type : null);
          Oe(d);
        } else
          Oe(null);
      }
      var tn;
      tn = !1;
      function Jn() {
        if (se.current) {
          var s = je(se.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function Ro(s) {
        if (s !== void 0) {
          var i = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + i + ":" + d + ".";
        }
        return "";
      }
      function _o(s) {
        return s != null ? Ro(s.__source) : "";
      }
      var Qn = {};
      function Co(s) {
        var i = Jn();
        if (!i) {
          var d = typeof s == "string" ? s : s.displayName || s.name;
          d && (i = `

Check the top-level render call using <` + d + ">.");
        }
        return i;
      }
      function Xn(s, i) {
        if (!(!s._store || s._store.validated || s.key != null)) {
          s._store.validated = !0;
          var d = Co(i);
          if (!Qn[d]) {
            Qn[d] = !0;
            var p = "";
            s && s._owner && s._owner !== se.current && (p = " It was passed a child from " + je(s._owner.type) + "."), Tt(s), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), Tt(null);
          }
        }
      }
      function Zn(s, i) {
        if (typeof s == "object") {
          if (_t(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              Je(p) && Xn(p, i);
            }
          else if (Je(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var C = k(s);
            if (typeof C == "function" && C !== s.entries)
              for (var P = C.call(s), w; !(w = P.next()).done; )
                Je(w.value) && Xn(w.value, i);
          }
        }
      }
      function es(s) {
        {
          var i = s.type;
          if (i == null || typeof i == "string")
            return;
          var d;
          if (typeof i == "function")
            d = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === y || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === D))
            d = i.propTypes;
          else
            return;
          if (d) {
            var p = je(i);
            bo(d, s.props, "prop", p, s);
          } else if (i.PropTypes !== void 0 && !tn) {
            tn = !0;
            var C = je(i);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Oo(s) {
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
      function ts(s, i, d) {
        var p = a(s);
        if (!p) {
          var C = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = _o(i);
          P ? C += P : C += Jn();
          var w;
          s === null ? w = "null" : _t(s) ? w = "array" : s !== void 0 && s.$$typeof === n ? (w = "<" + (je(s.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : w = typeof s, T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, C);
        }
        var U = Br.apply(this, arguments);
        if (U == null)
          return U;
        if (p)
          for (var W = 2; W < arguments.length; W++)
            Zn(arguments[W], s);
        return s === c ? Oo(U) : es(U), U;
      }
      var rs = !1;
      function So(s) {
        var i = ts.bind(null, s);
        return i.type = s, rs || (rs = !0, xe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return xe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), i;
      }
      function wo(s, i, d) {
        for (var p = Vr.apply(this, arguments), C = 2; C < arguments.length; C++)
          Zn(arguments[C], p.type);
        return es(p), p;
      }
      function To(s, i) {
        var d = ie.transition;
        ie.transition = {};
        var p = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          s();
        } finally {
          if (ie.transition = d, d === null && p._updatedFibers) {
            var C = p._updatedFibers.size;
            C > 10 && xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var ns = !1, Er = null;
      function Ao(s) {
        if (Er === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), d = e && e[i];
            Er = d.call(e, "timers").setImmediate;
          } catch {
            Er = function(C) {
              ns === !1 && (ns = !0, typeof MessageChannel > "u" && T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var P = new MessageChannel();
              P.port1.onmessage = C, P.port2.postMessage(void 0);
            };
          }
        return Er(s);
      }
      var At = 0, ss = !1;
      function os(s) {
        {
          var i = At;
          At++, I.current === null && (I.current = []);
          var d = I.isBatchingLegacy, p;
          try {
            if (I.isBatchingLegacy = !0, p = s(), !d && I.didScheduleLegacyUpdate) {
              var C = I.current;
              C !== null && (I.didScheduleLegacyUpdate = !1, sn(C));
            }
          } catch (le) {
            throw gr(i), le;
          } finally {
            I.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var P = p, w = !1, U = {
              then: function(le, ye) {
                w = !0, P.then(function(be) {
                  gr(i), At === 0 ? rn(be, le, ye) : le(be);
                }, function(be) {
                  gr(i), ye(be);
                });
              }
            };
            return !ss && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              w || (ss = !0, T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), U;
          } else {
            var W = p;
            if (gr(i), At === 0) {
              var te = I.current;
              te !== null && (sn(te), I.current = null);
              var ae = {
                then: function(le, ye) {
                  I.current === null ? (I.current = [], rn(W, le, ye)) : le(W);
                }
              };
              return ae;
            } else {
              var ue = {
                then: function(le, ye) {
                  le(W);
                }
              };
              return ue;
            }
          }
        }
      }
      function gr(s) {
        s !== At - 1 && T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), At = s;
      }
      function rn(s, i, d) {
        {
          var p = I.current;
          if (p !== null)
            try {
              sn(p), Ao(function() {
                p.length === 0 ? (I.current = null, i(s)) : rn(s, i, d);
              });
            } catch (C) {
              d(C);
            }
          else
            i(s);
        }
      }
      var nn = !1;
      function sn(s) {
        if (!nn) {
          nn = !0;
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
            nn = !1;
          }
        }
      }
      var Po = ts, Do = wo, Fo = So, ko = {
        map: dt,
        forEach: cr,
        count: Wr,
        toArray: Hr,
        only: lr
      };
      t.Children = ko, t.Component = $, t.Fragment = c, t.Profiler = l, t.PureComponent = J, t.StrictMode = u, t.Suspense = g, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ee, t.act = os, t.cloneElement = Do, t.createContext = fr, t.createElement = Po, t.createFactory = Fo, t.createRef = Nr, t.forwardRef = Kr, t.isValidElement = Je, t.lazy = zr, t.memo = b, t.startTransition = To, t.unstable_act = os, t.useCallback = fe, t.useContext = F, t.useDebugValue = We, t.useDeferredValue = $t, t.useEffect = N, t.useId = Jr, t.useImperativeHandle = Xe, t.useInsertionEffect = ge, t.useLayoutEffect = ce, t.useMemo = we, t.useReducer = Q, t.useRef = V, t.useState = Y, t.useSyncExternalStore = Qr, t.useTransition = _e, t.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kt, Kt.exports)), Kt.exports;
}
process.env.NODE_ENV === "production" ? Cn.exports = Jo() : Cn.exports = Qo();
var me = Cn.exports, Wt = {};
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
function Xo() {
  if (gs) return Wt;
  gs = 1;
  var e = me, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, E, m) {
    var y, g = {}, x = null, D = null;
    m !== void 0 && (x = "" + m), E.key !== void 0 && (x = "" + E.key), E.ref !== void 0 && (D = E.ref);
    for (y in E) n.call(E, y) && !c.hasOwnProperty(y) && (g[y] = E[y]);
    if (l && l.defaultProps) for (y in E = l.defaultProps, E) g[y] === void 0 && (g[y] = E[y]);
    return { $$typeof: t, type: l, key: x, ref: D, props: g, _owner: o.current };
  }
  return Wt.Fragment = r, Wt.jsx = u, Wt.jsxs = u, Wt;
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
var bs;
function Zo() {
  return bs || (bs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), S = Symbol.iterator, A = "@@iterator";
    function O(a) {
      if (a === null || typeof a != "object")
        return null;
      var b = S && a[S] || a[A];
      return typeof b == "function" ? b : null;
    }
    var B = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(a) {
      {
        for (var b = arguments.length, _ = new Array(b > 1 ? b - 1 : 0), F = 1; F < b; F++)
          _[F - 1] = arguments[F];
        z("error", a, _);
      }
    }
    function z(a, b, _) {
      {
        var F = B.ReactDebugCurrentFrame, Y = F.getStackAddendum();
        Y !== "" && (b += "%s", _ = _.concat([Y]));
        var Q = _.map(function(V) {
          return String(V);
        });
        Q.unshift("Warning: " + b), Function.prototype.apply.call(console[a], console, Q);
      }
    }
    var ie = !1, I = !1, se = !1, he = !1, Z = !1, Oe;
    Oe = Symbol.for("react.module.reference");
    function Ve(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === c || Z || a === o || a === m || a === y || he || a === D || ie || I || se || typeof a == "object" && a !== null && (a.$$typeof === x || a.$$typeof === g || a.$$typeof === u || a.$$typeof === l || a.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Oe || a.getModuleId !== void 0));
    }
    function Mt(a, b, _) {
      var F = a.displayName;
      if (F)
        return F;
      var Y = b.displayName || b.name || "";
      return Y !== "" ? _ + "(" + Y + ")" : _;
    }
    function ot(a) {
      return a.displayName || "Context";
    }
    function Re(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
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
            var b = a;
            return ot(b) + ".Consumer";
          case u:
            var _ = a;
            return ot(_._context) + ".Provider";
          case E:
            return Mt(a, a.render, "ForwardRef");
          case g:
            var F = a.displayName || null;
            return F !== null ? F : Re(a.type) || "Memo";
          case x: {
            var Y = a, Q = Y._payload, V = Y._init;
            try {
              return Re(V(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Se = Object.assign, Ee = 0, xe, T, Ne, it, $e, f, R;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function $() {
      {
        if (Ee === 0) {
          xe = console.log, T = console.info, Ne = console.warn, it = console.error, $e = console.group, f = console.groupCollapsed, R = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: G,
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
        Ee++;
      }
    }
    function H() {
      {
        if (Ee--, Ee === 0) {
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
              value: Ne
            }),
            error: Se({}, a, {
              value: it
            }),
            group: Se({}, a, {
              value: $e
            }),
            groupCollapsed: Se({}, a, {
              value: f
            }),
            groupEnd: Se({}, a, {
              value: R
            })
          });
        }
        Ee < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = B.ReactCurrentDispatcher, ee;
    function X(a, b, _) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (Y) {
            var F = Y.stack.trim().match(/\n( *(at )?)/);
            ee = F && F[1] || "";
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
    function tr(a, b) {
      if (!a || J)
        return "";
      {
        var _ = pe.get(a);
        if (_ !== void 0)
          return _;
      }
      var F;
      J = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = ne.current, ne.current = null, $();
      try {
        if (b) {
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
            } catch (_e) {
              F = _e;
            }
            Reflect.construct(a, [], V);
          } else {
            try {
              V.call();
            } catch (_e) {
              F = _e;
            }
            a.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            F = _e;
          }
          a();
        }
      } catch (_e) {
        if (_e && F && typeof _e.stack == "string") {
          for (var N = _e.stack.split(`
`), ge = F.stack.split(`
`), ce = N.length - 1, fe = ge.length - 1; ce >= 1 && fe >= 0 && N[ce] !== ge[fe]; )
            fe--;
          for (; ce >= 1 && fe >= 0; ce--, fe--)
            if (N[ce] !== ge[fe]) {
              if (ce !== 1 || fe !== 1)
                do
                  if (ce--, fe--, fe < 0 || N[ce] !== ge[fe]) {
                    var we = `
` + N[ce].replace(" at new ", " at ");
                    return a.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", a.displayName)), typeof a == "function" && pe.set(a, we), we;
                  }
                while (ce >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        J = !1, ne.current = Q, H(), Error.prepareStackTrace = Y;
      }
      var Xe = a ? a.displayName || a.name : "", We = Xe ? X(Xe) : "";
      return typeof a == "function" && pe.set(a, We), We;
    }
    function _t(a, b, _) {
      return tr(a, !1);
    }
    function jr(a) {
      var b = a.prototype;
      return !!(b && b.isReactComponent);
    }
    function Ct(a, b, _) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return tr(a, jr(a));
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
          case E:
            return _t(a.render);
          case g:
            return Ct(a.type, b, _);
          case x: {
            var F = a, Y = F._payload, Q = F._init;
            try {
              return Ct(Q(Y), b, _);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, at = {}, rr = B.ReactDebugCurrentFrame;
    function ut(a) {
      if (a) {
        var b = a._owner, _ = Ct(a.type, a._source, b ? b.type : null);
        rr.setExtraStackFrame(_);
      } else
        rr.setExtraStackFrame(null);
    }
    function je(a, b, _, F, Y) {
      {
        var Q = Function.call.bind(ze);
        for (var V in a)
          if (Q(a, V)) {
            var N = void 0;
            try {
              if (typeof a[V] != "function") {
                var ge = Error((F || "React class") + ": " + _ + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              N = a[V](b, V, F, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              N = ce;
            }
            N && !(N instanceof Error) && (ut(Y), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", _, V, typeof N), ut(null)), N instanceof Error && !(N.message in at) && (at[N.message] = !0, ut(Y), k("Failed %s type: %s", _, N.message), ut(null));
          }
      }
    }
    var ct = Array.isArray;
    function Ot(a) {
      return ct(a);
    }
    function nr(a) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, _ = b && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return _;
      }
    }
    function sr(a) {
      try {
        return St(a), !1;
      } catch {
        return !0;
      }
    }
    function St(a) {
      return "" + a;
    }
    function Bt(a) {
      if (sr(a))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(a)), St(a);
    }
    var Ke = B.ReactCurrentOwner, Mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ir, lt;
    lt = {};
    function Br(a) {
      if (ze.call(a, "ref")) {
        var b = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Gr(a) {
      if (ze.call(a, "key")) {
        var b = Object.getOwnPropertyDescriptor(a, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Vr(a, b) {
      if (typeof a.ref == "string" && Ke.current && b && Ke.current.stateNode !== b) {
        var _ = Re(Ke.current.type);
        lt[_] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Re(Ke.current.type), a.ref), lt[_] = !0);
      }
    }
    function Je(a, b) {
      {
        var _ = function() {
          or || (or = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function ar(a, b) {
      {
        var _ = function() {
          ir || (ir = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var $r = function(a, b, _, F, Y, Q, V) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: b,
        ref: _,
        props: V,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function qr(a, b, _, F, Y) {
      {
        var Q, V = {}, N = null, ge = null;
        _ !== void 0 && (Bt(_), N = "" + _), Gr(b) && (Bt(b.key), N = "" + b.key), Br(b) && (ge = b.ref, Vr(b, Y));
        for (Q in b)
          ze.call(b, Q) && !Mr.hasOwnProperty(Q) && (V[Q] = b[Q]);
        if (a && a.defaultProps) {
          var ce = a.defaultProps;
          for (Q in ce)
            V[Q] === void 0 && (V[Q] = ce[Q]);
        }
        if (N || ge) {
          var fe = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          N && Je(V, fe), ge && ar(V, fe);
        }
        return $r(a, N, ge, Y, F, Ke.current, V);
      }
    }
    var wt = B.ReactCurrentOwner, ur = B.ReactDebugCurrentFrame;
    function qe(a) {
      if (a) {
        var b = a._owner, _ = Ct(a.type, a._source, b ? b.type : null);
        ur.setExtraStackFrame(_);
      } else
        ur.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function Qe(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function dt() {
      {
        if (wt.current) {
          var a = Re(wt.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Wr(a) {
      return "";
    }
    var cr = {};
    function Hr(a) {
      {
        var b = dt();
        if (!b) {
          var _ = typeof a == "string" ? a : a.displayName || a.name;
          _ && (b = `

Check the top-level render call using <` + _ + ">.");
        }
        return b;
      }
    }
    function lr(a, b) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var _ = Hr(b);
        if (cr[_])
          return;
        cr[_] = !0;
        var F = "";
        a && a._owner && a._owner !== wt.current && (F = " It was passed a child from " + Re(a._owner.type) + "."), qe(a), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, F), qe(null);
      }
    }
    function fr(a, b) {
      {
        if (typeof a != "object")
          return;
        if (Ot(a))
          for (var _ = 0; _ < a.length; _++) {
            var F = a[_];
            Qe(F) && lr(F, b);
          }
        else if (Qe(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var Y = O(a);
          if (typeof Y == "function" && Y !== a.entries)
            for (var Q = Y.call(a), V; !(V = Q.next()).done; )
              Qe(V.value) && lr(V.value, b);
        }
      }
    }
    function ht(a) {
      {
        var b = a.type;
        if (b == null || typeof b == "string")
          return;
        var _;
        if (typeof b == "function")
          _ = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === g))
          _ = b.propTypes;
        else
          return;
        if (_) {
          var F = Re(b);
          je(_, a.props, "prop", F, a);
        } else if (b.PropTypes !== void 0 && !ft) {
          ft = !0;
          var Y = Re(b);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gt(a) {
      {
        for (var b = Object.keys(a.props), _ = 0; _ < b.length; _++) {
          var F = b[_];
          if (F !== "children" && F !== "key") {
            qe(a), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), qe(null);
            break;
          }
        }
        a.ref !== null && (qe(a), k("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    var Vt = {};
    function dr(a, b, _, F, Y, Q) {
      {
        var V = Ve(a);
        if (!V) {
          var N = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Wr();
          ge ? N += ge : N += dt();
          var ce;
          a === null ? ce = "null" : Ot(a) ? ce = "array" : a !== void 0 && a.$$typeof === t ? (ce = "<" + (Re(a.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof a, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, N);
        }
        var fe = qr(a, b, _, Y, Q);
        if (fe == null)
          return fe;
        if (V) {
          var we = b.children;
          if (we !== void 0)
            if (F)
              if (Ot(we)) {
                for (var Xe = 0; Xe < we.length; Xe++)
                  fr(we[Xe], a);
                Object.freeze && Object.freeze(we);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(we, a);
        }
        if (ze.call(b, "key")) {
          var We = Re(a), _e = Object.keys(b).filter(function(Qr) {
            return Qr !== "key";
          }), $t = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vt[We + $t]) {
            var Jr = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $t, We, Jr, We), Vt[We + $t] = !0;
          }
        }
        return a === n ? Gt(fe) : ht(fe), fe;
      }
    }
    function Yr(a, b, _) {
      return dr(a, b, _, !0);
    }
    function zr(a, b, _) {
      return dr(a, b, _, !1);
    }
    var Kr = zr, hr = Yr;
    Ht.Fragment = n, Ht.jsx = Kr, Ht.jsxs = hr;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? Xo() : Zo();
var ei = me.createContext(
  void 0
), Bs = (e) => {
  const t = me.useContext(ei);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Gs = me.createContext(!1), ti = () => me.useContext(Gs);
Gs.Provider;
function ri() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var ni = me.createContext(ri()), si = () => me.useContext(ni);
function Vs(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function oi() {
}
var ii = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, ai = (e) => {
  me.useEffect(() => {
    e.clearReset();
  }, [e]);
}, ui = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n
}) => e.isError && !t.isReset() && !e.isFetching && n && Vs(r, [e.error, n]), ci = (e) => {
  e.suspense && (typeof e.staleTime != "number" && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, li = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, fi = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function di(e, t, r) {
  var m, y, g, x;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Bs(), o = ti(), c = si(), u = n.defaultQueryOptions(e);
  (y = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || y.call(
    m,
    u
  ), u._optimisticResults = o ? "isRestoring" : "optimistic", ci(u), ii(u, c), ai(c);
  const [l] = me.useState(
    () => new t(
      n,
      u
    )
  ), E = l.getOptimisticResult(u);
  if (me.useSyncExternalStore(
    me.useCallback(
      (D) => {
        const S = o ? () => {
        } : l.subscribe(Dr.batchCalls(D));
        return l.updateResult(), S;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), me.useEffect(() => {
    l.setOptions(u, { listeners: !1 });
  }, [u, l]), li(u, E))
    throw fi(u, l, c);
  if (ui({
    result: E,
    errorResetBoundary: c,
    throwOnError: u.throwOnError,
    query: n.getQueryCache().get(u.queryHash)
  }))
    throw E.error;
  return (x = (g = n.getDefaultOptions().queries) == null ? void 0 : g._experimental_afterQuery) == null || x.call(
    g,
    u,
    E
  ), u.notifyOnChangeProps ? E : l.trackResult(E);
}
function kn(e, t) {
  return di(e, Ho);
}
function Un(e, t) {
  const r = Bs(), [n] = me.useState(
    () => new Ko(
      r,
      e
    )
  );
  me.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const o = me.useSyncExternalStore(
    me.useCallback(
      (u) => n.subscribe(Dr.batchCalls(u)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), c = me.useCallback(
    (u, l) => {
      n.mutate(u, l).catch(oi);
    },
    [n]
  );
  if (o.error && Vs(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: c, mutateAsync: o.mutate };
}
function $s(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: hi } = Object.prototype, { getPrototypeOf: Ln } = Object, Fr = /* @__PURE__ */ ((e) => (t) => {
  const r = hi.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ie = (e) => (e = e.toLowerCase(), (t) => Fr(t) === e), kr = (e) => (t) => typeof t === e, { isArray: It } = Array, Jt = kr("undefined");
function pi(e) {
  return e !== null && !Jt(e) && e.constructor !== null && !Jt(e.constructor) && Ue(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qs = Ie("ArrayBuffer");
function yi(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qs(e.buffer), t;
}
const mi = kr("string"), Ue = kr("function"), Ws = kr("number"), Ur = (e) => e !== null && typeof e == "object", vi = (e) => e === !0 || e === !1, Cr = (e) => {
  if (Fr(e) !== "object")
    return !1;
  const t = Ln(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ei = Ie("Date"), gi = Ie("File"), bi = Ie("Blob"), Ri = Ie("FileList"), _i = (e) => Ur(e) && Ue(e.pipe), Ci = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ue(e.append) && ((t = Fr(e)) === "formdata" || // detect form-data instance
  t === "object" && Ue(e.toString) && e.toString() === "[object FormData]"));
}, Oi = Ie("URLSearchParams"), [Si, wi, Ti, Ai] = ["ReadableStream", "Request", "Response", "Headers"].map(Ie), Pi = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zt(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), It(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const c = r ? Object.getOwnPropertyNames(e) : Object.keys(e), u = c.length;
    let l;
    for (n = 0; n < u; n++)
      l = c[n], t.call(null, e[l], l, e);
  }
}
function Hs(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const yt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ys = (e) => !Jt(e) && e !== yt;
function On() {
  const { caseless: e } = Ys(this) && this || {}, t = {}, r = (n, o) => {
    const c = e && Hs(t, o) || o;
    Cr(t[c]) && Cr(n) ? t[c] = On(t[c], n) : Cr(n) ? t[c] = On({}, n) : It(n) ? t[c] = n.slice() : t[c] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Zt(arguments[n], r);
  return t;
}
const Di = (e, t, r, { allOwnKeys: n } = {}) => (Zt(t, (o, c) => {
  r && Ue(o) ? e[c] = $s(o, r) : e[c] = o;
}, { allOwnKeys: n }), e), Fi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ki = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Ui = (e, t, r, n) => {
  let o, c, u;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), c = o.length; c-- > 0; )
      u = o[c], (!n || n(u, e, t)) && !l[u] && (t[u] = e[u], l[u] = !0);
    e = r !== !1 && Ln(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Li = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, xi = (e) => {
  if (!e) return null;
  if (It(e)) return e;
  let t = e.length;
  if (!Ws(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ii = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ln(Uint8Array)), Ni = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const c = o.value;
    t.call(e, c[0], c[1]);
  }
}, ji = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Mi = Ie("HTMLFormElement"), Bi = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Rs = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Gi = Ie("RegExp"), zs = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Zt(r, (o, c) => {
    let u;
    (u = t(o, c, e)) !== !1 && (n[c] = u || o);
  }), Object.defineProperties(e, n);
}, Vi = (e) => {
  zs(e, (t, r) => {
    if (Ue(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Ue(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, $i = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((c) => {
      r[c] = !0;
    });
  };
  return It(e) ? n(e) : n(String(e).split(t)), r;
}, qi = () => {
}, Wi = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, un = "abcdefghijklmnopqrstuvwxyz", _s = "0123456789", Ks = {
  DIGIT: _s,
  ALPHA: un,
  ALPHA_DIGIT: un + un.toUpperCase() + _s
}, Hi = (e = 16, t = Ks.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Yi(e) {
  return !!(e && Ue(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const zi = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Ur(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const c = It(n) ? [] : {};
        return Zt(n, (u, l) => {
          const E = r(u, o + 1);
          !Jt(E) && (c[l] = E);
        }), t[o] = void 0, c;
      }
    }
    return n;
  };
  return r(e, 0);
}, Ki = Ie("AsyncFunction"), Ji = (e) => e && (Ur(e) || Ue(e)) && Ue(e.then) && Ue(e.catch), Js = ((e, t) => e ? setImmediate : t ? ((r, n) => (yt.addEventListener("message", ({ source: o, data: c }) => {
  o === yt && c === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), yt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ue(yt.postMessage)
), Qi = typeof queueMicrotask < "u" ? queueMicrotask.bind(yt) : typeof process < "u" && process.nextTick || Js, h = {
  isArray: It,
  isArrayBuffer: qs,
  isBuffer: pi,
  isFormData: Ci,
  isArrayBufferView: yi,
  isString: mi,
  isNumber: Ws,
  isBoolean: vi,
  isObject: Ur,
  isPlainObject: Cr,
  isReadableStream: Si,
  isRequest: wi,
  isResponse: Ti,
  isHeaders: Ai,
  isUndefined: Jt,
  isDate: Ei,
  isFile: gi,
  isBlob: bi,
  isRegExp: Gi,
  isFunction: Ue,
  isStream: _i,
  isURLSearchParams: Oi,
  isTypedArray: Ii,
  isFileList: Ri,
  forEach: Zt,
  merge: On,
  extend: Di,
  trim: Pi,
  stripBOM: Fi,
  inherits: ki,
  toFlatObject: Ui,
  kindOf: Fr,
  kindOfTest: Ie,
  endsWith: Li,
  toArray: xi,
  forEachEntry: Ni,
  matchAll: ji,
  isHTMLForm: Mi,
  hasOwnProperty: Rs,
  hasOwnProp: Rs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zs,
  freezeMethods: Vi,
  toObjectSet: $i,
  toCamelCase: Bi,
  noop: qi,
  toFiniteNumber: Wi,
  findKey: Hs,
  global: yt,
  isContextDefined: Ys,
  ALPHABET: Ks,
  generateString: Hi,
  isSpecCompliantForm: Yi,
  toJSONObject: zi,
  isAsyncFn: Ki,
  isThenable: Ji,
  setImmediate: Js,
  asap: Qi
};
function L(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
h.inherits(L, Error, {
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
const Qs = L.prototype, Xs = {};
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
].forEach((e) => {
  Xs[e] = { value: e };
});
Object.defineProperties(L, Xs);
Object.defineProperty(Qs, "isAxiosError", { value: !0 });
L.from = (e, t, r, n, o, c) => {
  const u = Object.create(Qs);
  return h.toFlatObject(e, u, function(E) {
    return E !== Error.prototype;
  }, (l) => l !== "isAxiosError"), L.call(u, e.message, t, r, n, o), u.cause = e, u.name = e.name, c && Object.assign(u, c), u;
};
const Xi = null;
function Sn(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function Zs(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Cs(e, t, r) {
  return e ? e.concat(t).map(function(o, c) {
    return o = Zs(o), !r && c ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Zi(e) {
  return h.isArray(e) && !e.some(Sn);
}
const ea = h.toFlatObject(h, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Lr(e, t, r) {
  if (!h.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, O) {
    return !h.isUndefined(O[A]);
  });
  const n = r.metaTokens, o = r.visitor || y, c = r.dots, u = r.indexes, E = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(t);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function m(S) {
    if (S === null) return "";
    if (h.isDate(S))
      return S.toISOString();
    if (!E && h.isBlob(S))
      throw new L("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(S) || h.isTypedArray(S) ? E && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function y(S, A, O) {
    let B = S;
    if (S && !O && typeof S == "object") {
      if (h.endsWith(A, "{}"))
        A = n ? A : A.slice(0, -2), S = JSON.stringify(S);
      else if (h.isArray(S) && Zi(S) || (h.isFileList(S) || h.endsWith(A, "[]")) && (B = h.toArray(S)))
        return A = Zs(A), B.forEach(function(z, ie) {
          !(h.isUndefined(z) || z === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? Cs([A], ie, c) : u === null ? A : A + "[]",
            m(z)
          );
        }), !1;
    }
    return Sn(S) ? !0 : (t.append(Cs(O, A, c), m(S)), !1);
  }
  const g = [], x = Object.assign(ea, {
    defaultVisitor: y,
    convertValue: m,
    isVisitable: Sn
  });
  function D(S, A) {
    if (!h.isUndefined(S)) {
      if (g.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      g.push(S), h.forEach(S, function(B, k) {
        (!(h.isUndefined(B) || B === null) && o.call(
          t,
          B,
          h.isString(k) ? k.trim() : k,
          A,
          x
        )) === !0 && D(B, A ? A.concat(k) : [k]);
      }), g.pop();
    }
  }
  if (!h.isObject(e))
    throw new TypeError("data must be an object");
  return D(e), t;
}
function Os(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function xn(e, t) {
  this._pairs = [], e && Lr(e, this, t);
}
const eo = xn.prototype;
eo.append = function(t, r) {
  this._pairs.push([t, r]);
};
eo.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Os);
  } : Os;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function ta(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function to(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ta, o = r && r.serialize;
  let c;
  if (o ? c = o(t, r) : c = h.isURLSearchParams(t) ? t.toString() : new xn(t, r).toString(n), c) {
    const u = e.indexOf("#");
    u !== -1 && (e = e.slice(0, u)), e += (e.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return e;
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    h.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ro = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ra = typeof URLSearchParams < "u" ? URLSearchParams : xn, na = typeof FormData < "u" ? FormData : null, sa = typeof Blob < "u" ? Blob : null, oa = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ra,
    FormData: na,
    Blob: sa
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, In = typeof window < "u" && typeof document < "u", wn = typeof navigator == "object" && navigator || void 0, ia = In && (!wn || ["ReactNative", "NativeScript", "NS"].indexOf(wn.product) < 0), aa = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ua = In && window.location.href || "http://localhost", ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: In,
  hasStandardBrowserEnv: ia,
  hasStandardBrowserWebWorkerEnv: aa,
  navigator: wn,
  origin: ua
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...ca,
  ...oa
};
function la(e, t) {
  return Lr(e, new Pe.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, c) {
      return Pe.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function fa(e) {
  return h.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function da(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let c;
  for (n = 0; n < o; n++)
    c = r[n], t[c] = e[c];
  return t;
}
function no(e) {
  function t(r, n, o, c) {
    let u = r[c++];
    if (u === "__proto__") return !0;
    const l = Number.isFinite(+u), E = c >= r.length;
    return u = !u && h.isArray(o) ? o.length : u, E ? (h.hasOwnProp(o, u) ? o[u] = [o[u], n] : o[u] = n, !l) : ((!o[u] || !h.isObject(o[u])) && (o[u] = []), t(r, n, o[u], c) && h.isArray(o[u]) && (o[u] = da(o[u])), !l);
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const r = {};
    return h.forEachEntry(e, (n, o) => {
      t(fa(n), o, r, 0);
    }), r;
  }
  return null;
}
function ha(e, t, r) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(e);
}
const er = {
  transitional: ro,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, c = h.isObject(t);
    if (c && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t))
      return o ? JSON.stringify(no(t)) : t;
    if (h.isArrayBuffer(t) || h.isBuffer(t) || h.isStream(t) || h.isFile(t) || h.isBlob(t) || h.isReadableStream(t))
      return t;
    if (h.isArrayBufferView(t))
      return t.buffer;
    if (h.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (c) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return la(t, this.formSerializer).toString();
      if ((l = h.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const E = this.env && this.env.FormData;
        return Lr(
          l ? { "files[]": t } : t,
          E && new E(),
          this.formSerializer
        );
      }
    }
    return c || o ? (r.setContentType("application/json", !1), ha(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || er.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (h.isResponse(t) || h.isReadableStream(t))
      return t;
    if (t && h.isString(t) && (n && !this.responseType || o)) {
      const u = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (u)
          throw l.name === "SyntaxError" ? L.from(l, L.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
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
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
h.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  er.headers[e] = {};
});
const pa = h.toObjectSet([
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
]), ya = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(u) {
    o = u.indexOf(":"), r = u.substring(0, o).trim().toLowerCase(), n = u.substring(o + 1).trim(), !(!r || t[r] && pa[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, ws = Symbol("internals");
function Yt(e) {
  return e && String(e).trim().toLowerCase();
}
function Or(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(Or) : String(e);
}
function ma(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const va = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function cn(e, t, r, n, o) {
  if (h.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!h.isString(t)) {
    if (h.isString(n))
      return t.indexOf(n) !== -1;
    if (h.isRegExp(n))
      return n.test(t);
  }
}
function Ea(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function ga(e, t) {
  const r = h.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, c, u) {
        return this[n].call(this, t, o, c, u);
      },
      configurable: !0
    });
  });
}
class De {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function c(l, E, m) {
      const y = Yt(E);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const g = h.findKey(o, y);
      (!g || o[g] === void 0 || m === !0 || m === void 0 && o[g] !== !1) && (o[g || E] = Or(l));
    }
    const u = (l, E) => h.forEach(l, (m, y) => c(m, y, E));
    if (h.isPlainObject(t) || t instanceof this.constructor)
      u(t, r);
    else if (h.isString(t) && (t = t.trim()) && !va(t))
      u(ya(t), r);
    else if (h.isHeaders(t))
      for (const [l, E] of t.entries())
        c(E, l, n);
    else
      t != null && c(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Yt(t), t) {
      const n = h.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return ma(o);
        if (h.isFunction(r))
          return r.call(this, o, n);
        if (h.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Yt(t), t) {
      const n = h.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || cn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function c(u) {
      if (u = Yt(u), u) {
        const l = h.findKey(n, u);
        l && (!r || cn(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return h.isArray(t) ? t.forEach(c) : c(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const c = r[n];
      (!t || cn(this, this[c], c, t, !0)) && (delete this[c], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return h.forEach(this, (o, c) => {
      const u = h.findKey(n, c);
      if (u) {
        r[u] = Or(o), delete r[c];
        return;
      }
      const l = t ? Ea(c) : String(c).trim();
      l !== c && delete r[c], r[l] = Or(o), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return h.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && h.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[ws] = this[ws] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function c(u) {
      const l = Yt(u);
      n[l] || (ga(o, u), n[l] = !0);
    }
    return h.isArray(t) ? t.forEach(c) : c(t), this;
  }
}
De.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(De.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(De);
function ln(e, t) {
  const r = this || er, n = t || r, o = De.from(n.headers);
  let c = n.data;
  return h.forEach(e, function(l) {
    c = l.call(r, c, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), c;
}
function so(e) {
  return !!(e && e.__CANCEL__);
}
function Nt(e, t, r) {
  L.call(this, e ?? "canceled", L.ERR_CANCELED, t, r), this.name = "CanceledError";
}
h.inherits(Nt, L, {
  __CANCEL__: !0
});
function oo(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new L(
    "Request failed with status code " + r.status,
    [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function ba(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ra(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, c = 0, u;
  return t = t !== void 0 ? t : 1e3, function(E) {
    const m = Date.now(), y = n[c];
    u || (u = m), r[o] = E, n[o] = m;
    let g = c, x = 0;
    for (; g !== o; )
      x += r[g++], g = g % e;
    if (o = (o + 1) % e, o === c && (c = (c + 1) % e), m - u < t)
      return;
    const D = y && m - y;
    return D ? Math.round(x * 1e3 / D) : void 0;
  };
}
function _a(e, t) {
  let r = 0, n = 1e3 / t, o, c;
  const u = (m, y = Date.now()) => {
    r = y, o = null, c && (clearTimeout(c), c = null), e.apply(null, m);
  };
  return [(...m) => {
    const y = Date.now(), g = y - r;
    g >= n ? u(m, y) : (o = m, c || (c = setTimeout(() => {
      c = null, u(o);
    }, n - g)));
  }, () => o && u(o)];
}
const Tr = (e, t, r = 3) => {
  let n = 0;
  const o = Ra(50, 250);
  return _a((c) => {
    const u = c.loaded, l = c.lengthComputable ? c.total : void 0, E = u - n, m = o(E), y = u <= l;
    n = u;
    const g = {
      loaded: u,
      total: l,
      progress: l ? u / l : void 0,
      bytes: E,
      rate: m || void 0,
      estimated: m && l && y ? (l - u) / m : void 0,
      event: c,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(g);
  }, r);
}, Ts = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, As = (e) => (...t) => h.asap(() => e(...t)), Ca = Pe.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = Pe.navigator && /(msie|trident)/i.test(Pe.navigator.userAgent), r = document.createElement("a");
    let n;
    function o(c) {
      let u = c;
      return t && (r.setAttribute("href", u), u = r.href), r.setAttribute("href", u), {
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
), Oa = Pe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, c) {
      const u = [e + "=" + encodeURIComponent(t)];
      h.isNumber(r) && u.push("expires=" + new Date(r).toGMTString()), h.isString(n) && u.push("path=" + n), h.isString(o) && u.push("domain=" + o), c === !0 && u.push("secure"), document.cookie = u.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
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
function Sa(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function wa(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function io(e, t) {
  return e && !Sa(t) ? wa(e, t) : t;
}
const Ps = (e) => e instanceof De ? { ...e } : e;
function Rt(e, t) {
  t = t || {};
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
    if (g in t)
      return n(m, y);
    if (g in e)
      return n(void 0, m);
  }
  const E = {
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
    headers: (m, y) => o(Ps(m), Ps(y), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, e, t)), function(y) {
    const g = E[y] || o, x = g(e[y], t[y], y);
    h.isUndefined(x) && g !== l || (r[y] = x);
  }), r;
}
const ao = (e) => {
  const t = Rt({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: c, headers: u, auth: l } = t;
  t.headers = u = De.from(u), t.url = to(io(t.baseURL, t.url), e.params, e.paramsSerializer), l && u.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let E;
  if (h.isFormData(r)) {
    if (Pe.hasStandardBrowserEnv || Pe.hasStandardBrowserWebWorkerEnv)
      u.setContentType(void 0);
    else if ((E = u.getContentType()) !== !1) {
      const [m, ...y] = E ? E.split(";").map((g) => g.trim()).filter(Boolean) : [];
      u.setContentType([m || "multipart/form-data", ...y].join("; "));
    }
  }
  if (Pe.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(t)), n || n !== !1 && Ca(t.url))) {
    const m = o && c && Oa.read(c);
    m && u.set(o, m);
  }
  return t;
}, Ta = typeof XMLHttpRequest < "u", Aa = Ta && function(e) {
  return new Promise(function(r, n) {
    const o = ao(e);
    let c = o.data;
    const u = De.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: E, onDownloadProgress: m } = o, y, g, x, D, S;
    function A() {
      D && D(), S && S(), o.cancelToken && o.cancelToken.unsubscribe(y), o.signal && o.signal.removeEventListener("abort", y);
    }
    let O = new XMLHttpRequest();
    O.open(o.method.toUpperCase(), o.url, !0), O.timeout = o.timeout;
    function B() {
      if (!O)
        return;
      const z = De.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), I = {
        data: !l || l === "text" || l === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: z,
        config: e,
        request: O
      };
      oo(function(he) {
        r(he), A();
      }, function(he) {
        n(he), A();
      }, I), O = null;
    }
    "onloadend" in O ? O.onloadend = B : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(B);
    }, O.onabort = function() {
      O && (n(new L("Request aborted", L.ECONNABORTED, e, O)), O = null);
    }, O.onerror = function() {
      n(new L("Network Error", L.ERR_NETWORK, e, O)), O = null;
    }, O.ontimeout = function() {
      let ie = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const I = o.transitional || ro;
      o.timeoutErrorMessage && (ie = o.timeoutErrorMessage), n(new L(
        ie,
        I.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED,
        e,
        O
      )), O = null;
    }, c === void 0 && u.setContentType(null), "setRequestHeader" in O && h.forEach(u.toJSON(), function(ie, I) {
      O.setRequestHeader(I, ie);
    }), h.isUndefined(o.withCredentials) || (O.withCredentials = !!o.withCredentials), l && l !== "json" && (O.responseType = o.responseType), m && ([x, S] = Tr(m, !0), O.addEventListener("progress", x)), E && O.upload && ([g, D] = Tr(E), O.upload.addEventListener("progress", g), O.upload.addEventListener("loadend", D)), (o.cancelToken || o.signal) && (y = (z) => {
      O && (n(!z || z.type ? new Nt(null, e, O) : z), O.abort(), O = null);
    }, o.cancelToken && o.cancelToken.subscribe(y), o.signal && (o.signal.aborted ? y() : o.signal.addEventListener("abort", y)));
    const k = ba(o.url);
    if (k && Pe.protocols.indexOf(k) === -1) {
      n(new L("Unsupported protocol " + k + ":", L.ERR_BAD_REQUEST, e));
      return;
    }
    O.send(c || null);
  });
}, Pa = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const c = function(m) {
      if (!o) {
        o = !0, l();
        const y = m instanceof Error ? m : this.reason;
        n.abort(y instanceof L ? y : new Nt(y instanceof Error ? y.message : y));
      }
    };
    let u = t && setTimeout(() => {
      u = null, c(new L(`timeout ${t} of ms exceeded`, L.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (u && clearTimeout(u), u = null, e.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(c) : m.removeEventListener("abort", c);
      }), e = null);
    };
    e.forEach((m) => m.addEventListener("abort", c));
    const { signal: E } = n;
    return E.unsubscribe = () => h.asap(l), E;
  }
}, Da = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, Fa = async function* (e, t) {
  for await (const r of ka(e))
    yield* Da(r, t);
}, ka = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Ds = (e, t, r, n) => {
  const o = Fa(e, t);
  let c = 0, u, l = (E) => {
    u || (u = !0, n && n(E));
  };
  return new ReadableStream({
    async pull(E) {
      try {
        const { done: m, value: y } = await o.next();
        if (m) {
          l(), E.close();
          return;
        }
        let g = y.byteLength;
        if (r) {
          let x = c += g;
          r(x);
        }
        E.enqueue(new Uint8Array(y));
      } catch (m) {
        throw l(m), m;
      }
    },
    cancel(E) {
      return l(E), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, xr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", uo = xr && typeof ReadableStream == "function", Ua = xr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), co = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, La = uo && co(() => {
  let e = !1;
  const t = new Request(Pe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Fs = 64 * 1024, Tn = uo && co(() => h.isReadableStream(new Response("").body)), Ar = {
  stream: Tn && ((e) => e.body)
};
xr && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ar[t] && (Ar[t] = h.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new L(`Response type '${t}' is not supported`, L.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const xa = async (e) => {
  if (e == null)
    return 0;
  if (h.isBlob(e))
    return e.size;
  if (h.isSpecCompliantForm(e))
    return (await new Request(Pe.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(e) || h.isArrayBuffer(e))
    return e.byteLength;
  if (h.isURLSearchParams(e) && (e = e + ""), h.isString(e))
    return (await Ua(e)).byteLength;
}, Ia = async (e, t) => {
  const r = h.toFiniteNumber(e.getContentLength());
  return r ?? xa(t);
}, Na = xr && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: o,
    cancelToken: c,
    timeout: u,
    onDownloadProgress: l,
    onUploadProgress: E,
    responseType: m,
    headers: y,
    withCredentials: g = "same-origin",
    fetchOptions: x
  } = ao(e);
  m = m ? (m + "").toLowerCase() : "text";
  let D = Pa([o, c && c.toAbortSignal()], u), S;
  const A = D && D.unsubscribe && (() => {
    D.unsubscribe();
  });
  let O;
  try {
    if (E && La && r !== "get" && r !== "head" && (O = await Ia(y, n)) !== 0) {
      let I = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), se;
      if (h.isFormData(n) && (se = I.headers.get("content-type")) && y.setContentType(se), I.body) {
        const [he, Z] = Ts(
          O,
          Tr(As(E))
        );
        n = Ds(I.body, Fs, he, Z);
      }
    }
    h.isString(g) || (g = g ? "include" : "omit");
    const B = "credentials" in Request.prototype;
    S = new Request(t, {
      ...x,
      signal: D,
      method: r.toUpperCase(),
      headers: y.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: B ? g : void 0
    });
    let k = await fetch(S);
    const z = Tn && (m === "stream" || m === "response");
    if (Tn && (l || z && A)) {
      const I = {};
      ["status", "statusText", "headers"].forEach((Oe) => {
        I[Oe] = k[Oe];
      });
      const se = h.toFiniteNumber(k.headers.get("content-length")), [he, Z] = l && Ts(
        se,
        Tr(As(l), !0)
      ) || [];
      k = new Response(
        Ds(k.body, Fs, he, () => {
          Z && Z(), A && A();
        }),
        I
      );
    }
    m = m || "text";
    let ie = await Ar[h.findKey(Ar, m) || "text"](k, e);
    return !z && A && A(), await new Promise((I, se) => {
      oo(I, se, {
        data: ie,
        headers: De.from(k.headers),
        status: k.status,
        statusText: k.statusText,
        config: e,
        request: S
      });
    });
  } catch (B) {
    throw A && A(), B && B.name === "TypeError" && /fetch/i.test(B.message) ? Object.assign(
      new L("Network Error", L.ERR_NETWORK, e, S),
      {
        cause: B.cause || B
      }
    ) : L.from(B, B && B.code, e, S);
  }
}), An = {
  http: Xi,
  xhr: Aa,
  fetch: Na
};
h.forEach(An, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ks = (e) => `- ${e}`, ja = (e) => h.isFunction(e) || e === null || e === !1, lo = {
  getAdapter: (e) => {
    e = h.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let c = 0; c < t; c++) {
      r = e[c];
      let u;
      if (n = r, !ja(r) && (n = An[(u = String(r)).toLowerCase()], n === void 0))
        throw new L(`Unknown adapter '${u}'`);
      if (n)
        break;
      o[u || "#" + c] = n;
    }
    if (!n) {
      const c = Object.entries(o).map(
        ([l, E]) => `adapter ${l} ` + (E === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let u = t ? c.length > 1 ? `since :
` + c.map(ks).join(`
`) : " " + ks(c[0]) : "as no adapter specified";
      throw new L(
        "There is no suitable adapter to dispatch the request " + u,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: An
};
function fn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Nt(null, e);
}
function Us(e) {
  return fn(e), e.headers = De.from(e.headers), e.data = ln.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), lo.getAdapter(e.adapter || er.adapter)(e).then(function(n) {
    return fn(e), n.data = ln.call(
      e,
      e.transformResponse,
      n
    ), n.headers = De.from(n.headers), n;
  }, function(n) {
    return so(n) || (fn(e), n && n.response && (n.response.data = ln.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = De.from(n.response.headers))), Promise.reject(n);
  });
}
const fo = "1.7.7", Nn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Nn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ls = {};
Nn.transitional = function(t, r, n) {
  function o(c, u) {
    return "[Axios v" + fo + "] Transitional option '" + c + "'" + u + (n ? ". " + n : "");
  }
  return (c, u, l) => {
    if (t === !1)
      throw new L(
        o(u, " has been removed" + (r ? " in " + r : "")),
        L.ERR_DEPRECATED
      );
    return r && !Ls[u] && (Ls[u] = !0, console.warn(
      o(
        u,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(c, u, l) : !0;
  };
};
function Ma(e, t, r) {
  if (typeof e != "object")
    throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const c = n[o], u = t[c];
    if (u) {
      const l = e[c], E = l === void 0 || u(l, c, e);
      if (E !== !0)
        throw new L("option " + c + " must be " + E, L.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new L("Unknown option " + c, L.ERR_BAD_OPTION);
  }
}
const Pn = {
  assertOptions: Ma,
  validators: Nn
}, Ze = Pn.validators;
class bt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
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
  async request(t, r) {
    try {
      return await this._request(t, r);
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
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Rt(this.defaults, r);
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
      (S) => {
        delete c[S];
      }
    ), r.headers = De.concat(u, c);
    const l = [];
    let E = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(r) === !1 || (E = E && A.synchronous, l.unshift(A.fulfilled, A.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(A) {
      m.push(A.fulfilled, A.rejected);
    });
    let y, g = 0, x;
    if (!E) {
      const S = [Us.bind(this), void 0];
      for (S.unshift.apply(S, l), S.push.apply(S, m), x = S.length, y = Promise.resolve(r); g < x; )
        y = y.then(S[g++], S[g++]);
      return y;
    }
    x = l.length;
    let D = r;
    for (g = 0; g < x; ) {
      const S = l[g++], A = l[g++];
      try {
        D = S(D);
      } catch (O) {
        A.call(this, O);
        break;
      }
    }
    try {
      y = Us.call(this, D);
    } catch (S) {
      return Promise.reject(S);
    }
    for (g = 0, x = m.length; g < x; )
      y = y.then(m[g++], m[g++]);
    return y;
  }
  getUri(t) {
    t = Rt(this.defaults, t);
    const r = io(t.baseURL, t.url);
    return to(r, t.params, t.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(t) {
  bt.prototype[t] = function(r, n) {
    return this.request(Rt(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(c, u, l) {
      return this.request(Rt(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: u
      }));
    };
  }
  bt.prototype[t] = r(), bt.prototype[t + "Form"] = r(!0);
});
class jn {
  constructor(t) {
    if (typeof t != "function")
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
    }, t(function(c, u, l) {
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new jn(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function Ba(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Ga(e) {
  return h.isObject(e) && e.isAxiosError === !0;
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
Object.entries(Dn).forEach(([e, t]) => {
  Dn[t] = e;
});
function ho(e) {
  const t = new bt(e), r = $s(bt.prototype.request, t);
  return h.extend(r, bt.prototype, t, { allOwnKeys: !0 }), h.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return ho(Rt(e, o));
  }, r;
}
const de = ho(er);
de.Axios = bt;
de.CanceledError = Nt;
de.CancelToken = jn;
de.isCancel = so;
de.VERSION = fo;
de.toFormData = Lr;
de.AxiosError = L;
de.Cancel = de.CanceledError;
de.all = function(t) {
  return Promise.all(t);
};
de.spread = Ba;
de.isAxiosError = Ga;
de.mergeConfig = Rt;
de.AxiosHeaders = De;
de.formToJSON = (e) => no(h.isHTMLForm(e) ? new FormData(e) : e);
de.getAdapter = lo.getAdapter;
de.HttpStatusCode = Dn;
de.default = de;
const po = {
  //Authentication
  BASE_URL: "http://ec2-13-203-76-236.ap-south-1.compute.amazonaws.com:80"
  // BASE_URL: "https://c911-182-156-141-17.ngrok-free.app",
}, Me = de.create({
  baseURL: po.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), Va = () => localStorage.getItem("access_token"), $a = () => localStorage.getItem("refresh_token");
Me.interceptors.request.use(
  (e) => {
    const t = Va();
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
Me.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config;
    if (e.response && e.response.status === 401 && !t._retry) {
      t._retry = !0;
      const r = $a();
      if (r)
        try {
          const n = await de.post(`${po.BASE_URL}/auth/refresh-token`, {
            refreshToken: r
          });
          return localStorage.setItem("access_token", n.data.access_token), t.headers.Authorization = `Bearer ${n.data.access_token}`, Me(t);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(e);
  }
);
function pt(e) {
  var t;
  if (de.isAxiosError(e)) {
    const r = ((t = e.response) == null ? void 0 : t.data) || {
      message: "An error occurred. Try after some time."
    };
    throw new Error(r.message);
  } else
    throw new Error("Unknown error occurred");
}
class jt {
  // Create a new Data
  async createData(t, r) {
    try {
      const n = await Me.post(t, r);
      return console.log(n.data), n.data;
    } catch (n) {
      pt(n);
    }
  }
  // Get all Data
  async getData(t) {
    try {
      return (await Me.get(t)).data.data;
    } catch (r) {
      pt(r);
    }
  }
  // Get an Data by ID
  async getDataById(t, r) {
    try {
      const n = await Me.get(`${t}/${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      pt(n);
    }
  }
  // Get Data by Query
  async getDataByQuery(t, r) {
    try {
      const n = await Me.get(`${t}?search=${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      pt(n);
    }
  }
  // Update a data by ID
  async updateData(t, r, n) {
    try {
      const o = await Me.patch(`${t}/${r}`, n);
      return console.log(o.data), o.data;
    } catch (o) {
      pt(o);
    }
  }
  // Delete an Data by ID
  async deleteData(t, r) {
    try {
      const n = await Me.delete(`${t}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      pt(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(t, r) {
    try {
      const n = await Me.patch(`${t}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      pt(n);
    }
  }
}
const Fe = (e) => {
  const t = new jt();
  return Un({ mutationFn: (r) => t.createData(e, r) });
}, qa = (e) => {
  const t = new jt();
  return Un({ mutationFn: (r) => t.deleteData(e, r) });
}, ve = (e, t) => {
  const r = new jt();
  return kn({ queryKey: t, queryFn: () => r.getData(e) });
}, ke = (e, t, r) => {
  const n = new jt();
  return kn({ queryKey: r, queryFn: () => n.getDataById(e, t), enabled: !!t });
}, Le = (e, t) => {
  const r = new jt();
  return Un({ mutationFn: (n) => r.updateData(e, t, n) });
}, Ir = (e, t, r) => {
  const n = new jt();
  return kn({ queryKey: r, queryFn: () => n.getDataByQuery(e, t), enabled: !!t });
}, Qa = (e) => Fe(e), Xa = (e) => qa(e), Za = (e) => ve(e, ["getAllCustomers"]), eu = (e) => ve(e, ["getAllCustomerCategories"]), tu = (e) => ve(e, ["getAllCustomerTypes"]), ru = (e, t) => ke(e, t, ["getCustomer"]), nu = (e, t) => Le(e, t), su = (e) => Fe(e), ou = (e) => ve(e, ["getAllEmployees"]), iu = (e) => ve(e, ["getAllRoles"]), au = (e, t) => ke(e, t, ["getEmployee"]), uu = (e, t) => Le(e, t), cu = (e) => Fe(e), lu = (e) => ve(e, ["getFarmers"]), fu = (e, t) => ke(e, t, ["getFarmer"]), du = (e, t) => Le(e, t), hu = (e) => ve(e, ["getAllFilteredFarmerData"]), pu = (e) => Fe(e), yu = (e) => ve(e, ["getAllVendors"]), mu = (e) => ve(e, ["getAllFilteredVendorData"]), vu = (e, t) => ke(e, t, ["getVendor"]), Eu = (e) => Fe(e), gu = (e, t) => ke(e, t, ["getAVendorCategory"]), bu = (e) => ve(e, ["getAllVendorCat"]), Ru = (e, t) => Le(e, t), _u = (e) => Fe(e), Cu = (e, t) => ke(e, t, ["getAVendorSubcategory"]), Ou = (e) => ve(e, ["getVendor"]), Su = (e, t) => Le(e, t), wu = (e, t) => Ir(e, t, ["get-vendor-subcategories-by-query", t]), Tu = (e, t) => Ir(e, t, ["get-vendors-by-query", t]), Au = (e) => Fe(e), Pu = (e) => ve(e, ["getProducts"]), Du = (e, t) => ke(e, t, ["getAProduct"]), Fu = (e, t) => Le(e, t), ku = (e) => Fe(e), Uu = (e, t) => ke(e, t, ["getAProductClassification"]), Lu = (e) => ve(e, ["getProductsClassification"]), xu = (e, t) => Le(e, t), Iu = (e) => Fe(e), Nu = (e, t) => ke(e, t, ["getAProductCategory"]), ju = (e) => ve(e, ["getProductCat"]), Mu = (e, t) => Le(e, t), Bu = (e) => Fe(e), Gu = (e, t) => ke(e, t, ["getAProductSubcategory"]), Vu = (e) => ve(e, ["getProductSubcat"]), $u = (e, t) => Le(e, t), qu = (e) => Fe(e), Wu = (e, t) => ke(e, t, ["getAUOM"]), Hu = (e) => ve(e, ["getUOMs"]), Yu = (e, t) => Le(e, t), zu = (e) => Fe(e), Ku = (e, t) => ke(e, t, ["getAUOMConversionMatrix"]), Ju = (e) => ve(e, ["getUOMConversionMatrixs"]), Qu = (e, t) => Le(e, t), Xu = (e) => Fe(e), Zu = (e, t) => ke(e, t, ["getABranch"]), ec = (e, t) => Ir(e, t, ["getAllBranches", t]), tc = (e, t) => Le(e, t), rc = (e) => ve(e, ["get-all-filtered-branches"]), nc = (e) => Fe(e), sc = (e, t) => ke(e, t, ["getAOffice"]), oc = (e, t) => Ir(e, t, ["get-all-offices"]), ic = (e, t) => Le(e, t);
var Wa = /* @__PURE__ */ ((e) => (e[e["collection-center"] = 0] = "collection-center", e[e["distribution-center"] = 1] = "distribution-center", e[e["seasonal-collection-center"] = 2] = "seasonal-collection-center", e[e.warehouse = 3] = "warehouse", e))(Wa || {}), Ha = /* @__PURE__ */ ((e) => (e[e["registered-office"] = 0] = "registered-office", e[e["corporate-office"] = 1] = "corporate-office", e))(Ha || {}), Ya = /* @__PURE__ */ ((e) => (e.OWNED = "Owned", e.LEASED = "Leased", e.SHARED = "Shared", e.ENCUMBERED = "Encumbered", e))(Ya || {}), za = /* @__PURE__ */ ((e) => (e.CULTIVABLE = "Cultivable", e.FALLOW = "Fallow", e.IRRIGATED = "Irrigated", e.NON_IRRIGATED = "Non-Irrigated", e))(za || {});
export {
  Ja as ADMIN_API_URL,
  Wa as BranchType,
  Ya as LandHoldingStatus,
  za as LandStatus,
  Ha as OfficeType,
  Xu as useCreateBranches,
  Qa as useCreateCustomer,
  su as useCreateEmployee,
  cu as useCreateFarmer,
  nc as useCreateOffice,
  Au as useCreateProduct,
  Iu as useCreateProductCat,
  ku as useCreateProductClassification,
  Bu as useCreateProductSubcat,
  qu as useCreateUOM,
  zu as useCreateUOMConversionMatrix,
  pu as useCreateVendor,
  _u as useCreateVendorCat,
  Eu as useCreateVendorSubCat,
  Xa as useDeleteCustomer,
  Zu as useGetABranch,
  sc as useGetAOffice,
  Du as useGetAProduct,
  Nu as useGetAProductCat,
  Uu as useGetAProductClassification,
  Gu as useGetAProductSubcat,
  Wu as useGetAUOM,
  Ku as useGetAUOMConversionMatrixs,
  gu as useGetAVendorCat,
  Cu as useGetAVendorSubCat,
  ec as useGetAllBranches,
  eu as useGetAllCustomerCategories,
  tu as useGetAllCustomerTypes,
  Za as useGetAllCustomers,
  ou as useGetAllEmployee,
  lu as useGetAllFarmers,
  rc as useGetAllFilteredBranches,
  hu as useGetAllFilteredFarmerData,
  mu as useGetAllFilteredVendorData,
  oc as useGetAllOffices,
  Lu as useGetAllProductClassification,
  Vu as useGetAllProductSubCat,
  Pu as useGetAllProducts,
  ju as useGetAllProductsCat,
  iu as useGetAllRoles,
  Ju as useGetAllUOMConversionMatrixs,
  Hu as useGetAllUOMs,
  Tu as useGetAllVendorByQuery,
  bu as useGetAllVendorCat,
  Ou as useGetAllVendorSubCat,
  wu as useGetAllVendorSubcategoriesByQuery,
  yu as useGetAllVendors,
  ru as useGetCustomer,
  au as useGetEmployee,
  fu as useGetFarmer,
  vu as useGetVendor,
  tc as useUpdateBranch,
  nu as useUpdateCustomer,
  uu as useUpdateEmployee,
  du as useUpdateFarmer,
  ic as useUpdateOffice,
  Fu as useUpdateProduct,
  Mu as useUpdateProductCat,
  xu as useUpdateProductClassification,
  $u as useUpdateProductSubcat,
  Yu as useUpdateUOM,
  Qu as useUpdateUOMConversionMatrixs,
  Ru as useUpdateVendorCat,
  Su as useUpdateVendorSubCat
};
