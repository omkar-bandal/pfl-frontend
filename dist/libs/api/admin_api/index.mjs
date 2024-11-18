var as = (e) => {
  throw TypeError(e);
};
var on = (e, t, r) => t.has(e) || as("Cannot " + r);
var v = (e, t, r) => (on(e, t, "read from private field"), r ? r.call(e) : t.get(e)), re = (e, t, r) => t.has(e) ? as("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), j = (e, t, r, n) => (on(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), oe = (e, t, r) => (on(e, t, "access private method"), r);
const Ka = {
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
  //Vendors
  GET_ALL_VENDORS: "/vendors/",
  GET_A_VENDOR: "/vendors",
  POST_VENDOR: "/vendors/",
  UPDATE_VENDOR: "/vendors",
  GET_ALL_VENDOR_CAT: "/vendor-categories/",
  GET_ALL_VENDOR_SUBCAT: "/vendor-subcategories/",
  //Prooducts
  GET_ALL_PRODUCTS: "/products/",
  GET_A_PRODUCTS: "/products/",
  CREATE_PRODUCTS: "/products/",
  UPDATE_PRODUCTS: "/products/",
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
  GET_A_UOM: "/uoms/",
  UPDATE_UOM: "/uoms/",
  GET_ALL_UOM_CONVERSION: "/uom-conversion-matrix/",
  GET_A_UOM_CONVERSION: "/uom-conversion-matrix/",
  CREATE_UOM_CONVERSION: "/uom-conversion-matrix/",
  UPDATE_UOM_CONVERSION: "/uom-conversion-matrix/",
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
  //Branches
  GET_ALL_CC: "/location_branches/COLLECTION_CENTER",
  GET_ALL_DC: "/location_branches/DISTRIBUTION_CENTER",
  GET_ALL_SEASONAL_CC: "/location_branches/SEASONAL_COLLECTION_CENTER",
  GET_ALL_WAREHOUSE: "/location_branches/WAREHOUSE",
  POST_BRANCH: "/location_branches",
  UPDATE_BRANCH: "/location_branches"
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
function xo() {
}
function us(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Uo(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Rr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cs(e) {
  return JSON.stringify(
    e,
    (t, r) => dn(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function fn(e, t) {
  if (e === t)
    return e;
  const r = ls(e) && ls(t);
  if (r || dn(e) && dn(t)) {
    const n = r ? e : Object.keys(e), o = n.length, c = r ? t : Object.keys(t), u = c.length, l = r ? [] : {};
    let E = 0;
    for (let y = 0; y < u; y++) {
      const m = r ? y : c[y];
      (!r && n.includes(m) || r) && e[m] === void 0 && t[m] === void 0 ? (l[m] = void 0, E++) : (l[m] = fn(e[m], t[m]), l[m] === e[m] && e[m] !== void 0 && E++);
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
function ls(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function dn(e) {
  if (!fs(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!fs(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function fs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ds(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return fn(e, t);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return fn(e, t);
  }
  return t;
}
var mt, et, Pt, ks, Io = (ks = class extends Pr {
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
}, mt = new WeakMap(), et = new WeakMap(), Pt = new WeakMap(), ks), No = new Io(), Ft, tt, Dt, xs, jo = (xs = class extends Pr {
  constructor() {
    super();
    re(this, Ft, !0);
    re(this, tt);
    re(this, Dt);
    j(this, Dt, (t) => {
      if (!Sr && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
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
    var t;
    this.hasListeners() || ((t = v(this, tt)) == null || t.call(this), j(this, tt, void 0));
  }
  setEventListener(t) {
    var r;
    j(this, Dt, t), (r = v(this, tt)) == null || r.call(this), j(this, tt, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    v(this, Ft) !== t && (j(this, Ft, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return v(this, Ft);
  }
}, Ft = new WeakMap(), tt = new WeakMap(), Dt = new WeakMap(), xs), Mo = new jo();
function Bo(e) {
  return (e ?? "online") === "online" ? Mo.isOnline() : !0;
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
var Fr = $o();
function Go(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Bo(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Vo() {
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
var Te, q, Jt, Oe, yt, Lt, Me, Qt, kt, xt, vt, Et, rt, Ut, K, zt, hn, pn, mn, yn, vn, En, bn, Ns, Us, qo = (Us = class extends Pr {
  constructor(t, r) {
    super();
    re(this, K);
    re(this, Te);
    re(this, q);
    re(this, Jt);
    re(this, Oe);
    re(this, yt);
    re(this, Lt);
    re(this, Me);
    re(this, Qt);
    re(this, kt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    re(this, xt);
    re(this, vt);
    re(this, Et);
    re(this, rt);
    re(this, Ut, /* @__PURE__ */ new Set());
    this.options = r, j(this, Te, t), j(this, Me, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, q).addObserver(this), hs(v(this, q), this.options) ? oe(this, K, zt).call(this) : this.updateResult(), oe(this, K, yn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return gn(
      v(this, q),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return gn(
      v(this, q),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, K, vn).call(this), oe(this, K, En).call(this), v(this, q).removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options, o = v(this, q);
    if (this.options = v(this, Te).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Be(this.options.enabled, v(this, q)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, K, bn).call(this), v(this, q).setOptions(this.options), n._defaulted && !wr(this.options, n) && v(this, Te).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, q),
      observer: this
    });
    const c = this.hasListeners();
    c && ps(
      v(this, q),
      o,
      this.options,
      n
    ) && oe(this, K, zt).call(this), this.updateResult(r), c && (v(this, q) !== o || Be(this.options.enabled, v(this, q)) !== Be(n.enabled, v(this, q)) || Rr(this.options.staleTime, v(this, q)) !== Rr(n.staleTime, v(this, q))) && oe(this, K, hn).call(this);
    const u = oe(this, K, pn).call(this);
    c && (v(this, q) !== o || Be(this.options.enabled, v(this, q)) !== Be(n.enabled, v(this, q)) || u !== v(this, rt)) && oe(this, K, mn).call(this, u);
  }
  getOptimisticResult(t) {
    const r = v(this, Te).getQueryCache().build(v(this, Te), t), n = this.createResult(r, t);
    return Ho(this, n) && (j(this, Oe, n), j(this, Lt, this.options), j(this, yt, v(this, q).state)), n;
  }
  getCurrentResult() {
    return v(this, Oe);
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
    v(this, Ut).add(t);
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
    }).then(() => (this.updateResult(), v(this, Oe)));
  }
  createResult(t, r) {
    var he;
    const n = v(this, q), o = this.options, c = v(this, Oe), u = v(this, yt), l = v(this, Lt), y = t !== n ? t.state : v(this, Jt), { state: m } = t;
    let b = { ...m }, U = !1, F;
    if (r._optimisticResults) {
      const Z = this.hasListeners(), Ce = !Z && hs(t, r), $e = Z && ps(t, n, r, o);
      (Ce || $e) && (b = {
        ...b,
        ...Go(m.data, t.options)
      }), r._optimisticResults === "isRestoring" && (b.fetchStatus = "idle");
    }
    let { error: S, errorUpdatedAt: A, status: C } = b;
    if (r.select && b.data !== void 0)
      if (c && b.data === (u == null ? void 0 : u.data) && r.select === v(this, Qt))
        F = v(this, kt);
      else
        try {
          j(this, Qt, r.select), F = r.select(b.data), F = ds(c == null ? void 0 : c.data, F, r), j(this, kt, F), j(this, Me, null);
        } catch (Z) {
          j(this, Me, Z);
        }
    else
      F = b.data;
    if (r.placeholderData !== void 0 && F === void 0 && C === "pending") {
      let Z;
      if (c != null && c.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        Z = c.data;
      else if (Z = typeof r.placeholderData == "function" ? r.placeholderData(
        (he = v(this, xt)) == null ? void 0 : he.state.data,
        v(this, xt)
      ) : r.placeholderData, r.select && Z !== void 0)
        try {
          Z = r.select(Z), j(this, Me, null);
        } catch (Ce) {
          j(this, Me, Ce);
        }
      Z !== void 0 && (C = "success", F = ds(
        c == null ? void 0 : c.data,
        Z,
        r
      ), U = !0);
    }
    v(this, Me) && (S = v(this, Me), F = v(this, kt), A = Date.now(), C = "error");
    const B = b.fetchStatus === "fetching", L = C === "pending", Y = C === "error", ie = L && B, I = F !== void 0;
    return {
      status: C,
      fetchStatus: b.fetchStatus,
      isPending: L,
      isSuccess: C === "success",
      isError: Y,
      isInitialLoading: ie,
      isLoading: ie,
      data: F,
      dataUpdatedAt: b.dataUpdatedAt,
      error: S,
      errorUpdatedAt: A,
      failureCount: b.fetchFailureCount,
      failureReason: b.fetchFailureReason,
      errorUpdateCount: b.errorUpdateCount,
      isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
      isFetchedAfterMount: b.dataUpdateCount > y.dataUpdateCount || b.errorUpdateCount > y.errorUpdateCount,
      isFetching: B,
      isRefetching: B && !L,
      isLoadingError: Y && !I,
      isPaused: b.fetchStatus === "paused",
      isPlaceholderData: U,
      isRefetchError: Y && I,
      isStale: Fn(t, r),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const r = v(this, Oe), n = this.createResult(v(this, q), this.options);
    if (j(this, yt, v(this, q).state), j(this, Lt, this.options), v(this, yt).data !== void 0 && j(this, xt, v(this, q)), wr(n, r))
      return;
    j(this, Oe, n);
    const o = {}, c = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: u } = this.options, l = typeof u == "function" ? u() : u;
      if (l === "all" || !l && !v(this, Ut).size)
        return !0;
      const E = new Set(
        l ?? v(this, Ut)
      );
      return this.options.throwOnError && E.add("error"), Object.keys(v(this, Oe)).some((y) => {
        const m = y;
        return v(this, Oe)[m] !== r[m] && E.has(m);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && c() && (o.listeners = !0), oe(this, K, Ns).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, K, yn).call(this);
  }
}, Te = new WeakMap(), q = new WeakMap(), Jt = new WeakMap(), Oe = new WeakMap(), yt = new WeakMap(), Lt = new WeakMap(), Me = new WeakMap(), Qt = new WeakMap(), kt = new WeakMap(), xt = new WeakMap(), vt = new WeakMap(), Et = new WeakMap(), rt = new WeakMap(), Ut = new WeakMap(), K = new WeakSet(), zt = function(t) {
  oe(this, K, bn).call(this);
  let r = v(this, q).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(xo)), r;
}, hn = function() {
  oe(this, K, vn).call(this);
  const t = Rr(
    this.options.staleTime,
    v(this, q)
  );
  if (Sr || v(this, Oe).isStale || !us(t))
    return;
  const n = Uo(v(this, Oe).dataUpdatedAt, t) + 1;
  j(this, vt, setTimeout(() => {
    v(this, Oe).isStale || this.updateResult();
  }, n));
}, pn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, q)) : this.options.refetchInterval) ?? !1;
}, mn = function(t) {
  oe(this, K, En).call(this), j(this, rt, t), !(Sr || Be(this.options.enabled, v(this, q)) === !1 || !us(v(this, rt)) || v(this, rt) === 0) && j(this, Et, setInterval(() => {
    (this.options.refetchIntervalInBackground || No.isFocused()) && oe(this, K, zt).call(this);
  }, v(this, rt)));
}, yn = function() {
  oe(this, K, hn).call(this), oe(this, K, mn).call(this, oe(this, K, pn).call(this));
}, vn = function() {
  v(this, vt) && (clearTimeout(v(this, vt)), j(this, vt, void 0));
}, En = function() {
  v(this, Et) && (clearInterval(v(this, Et)), j(this, Et, void 0));
}, bn = function() {
  const t = v(this, Te).getQueryCache().build(v(this, Te), this.options);
  if (t === v(this, q))
    return;
  const r = v(this, q);
  j(this, q, t), j(this, Jt, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Ns = function(t) {
  Fr.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(v(this, Oe));
    }), v(this, Te).getQueryCache().notify({
      query: v(this, q),
      type: "observerResultsUpdated"
    });
  });
}, Us);
function Wo(e, t) {
  return Be(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function hs(e, t) {
  return Wo(e, t) || e.state.data !== void 0 && gn(e, t, t.refetchOnMount);
}
function gn(e, t, r) {
  if (Be(t.enabled, e) !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && Fn(e, t);
  }
  return !1;
}
function ps(e, t, r, n) {
  return (e !== t || Be(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && Fn(e, r);
}
function Fn(e, t) {
  return Be(t.enabled, e) !== !1 && e.isStaleByTime(Rr(t.staleTime, e));
}
function Ho(e, t) {
  return !wr(e.getCurrentResult(), t);
}
var nt, st, Ae, He, ze, _r, Rn, Is, zo = (Is = class extends Pr {
  constructor(t, r) {
    super();
    re(this, ze);
    re(this, nt);
    re(this, st);
    re(this, Ae);
    re(this, He);
    j(this, nt, t), this.setOptions(r), this.bindMethods(), oe(this, ze, _r).call(this);
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
    }), r != null && r.mutationKey && this.options.mutationKey && cs(r.mutationKey) !== cs(this.options.mutationKey) ? this.reset() : ((n = v(this, Ae)) == null ? void 0 : n.state.status) === "pending" && v(this, Ae).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = v(this, Ae)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    oe(this, ze, _r).call(this), oe(this, ze, Rn).call(this, t);
  }
  getCurrentResult() {
    return v(this, st);
  }
  reset() {
    var t;
    (t = v(this, Ae)) == null || t.removeObserver(this), j(this, Ae, void 0), oe(this, ze, _r).call(this), oe(this, ze, Rn).call(this);
  }
  mutate(t, r) {
    var n;
    return j(this, He, r), (n = v(this, Ae)) == null || n.removeObserver(this), j(this, Ae, v(this, nt).getMutationCache().build(v(this, nt), this.options)), v(this, Ae).addObserver(this), v(this, Ae).execute(t);
  }
}, nt = new WeakMap(), st = new WeakMap(), Ae = new WeakMap(), He = new WeakMap(), ze = new WeakSet(), _r = function() {
  var r;
  const t = ((r = v(this, Ae)) == null ? void 0 : r.state) ?? Vo();
  j(this, st, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Rn = function(t) {
  Fr.batch(() => {
    var r, n, o, c, u, l, E, y;
    if (v(this, He) && this.hasListeners()) {
      const m = v(this, st).variables, b = v(this, st).context;
      (t == null ? void 0 : t.type) === "success" ? ((n = (r = v(this, He)).onSuccess) == null || n.call(r, t.data, m, b), (c = (o = v(this, He)).onSettled) == null || c.call(o, t.data, null, m, b)) : (t == null ? void 0 : t.type) === "error" && ((l = (u = v(this, He)).onError) == null || l.call(u, t.error, m, b), (y = (E = v(this, He)).onSettled) == null || y.call(
        E,
        void 0,
        t.error,
        m,
        b
      ));
    }
    this.listeners.forEach((m) => {
      m(v(this, st));
    });
  });
}, Is), _n = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function Yo() {
  if (ms) return M;
  ms = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.iterator;
  function U(f) {
    return f === null || typeof f != "object" ? null : (f = b && f[b] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, S = Object.assign, A = {};
  function C(f, R, $) {
    this.props = f, this.context = R, this.refs = A, this.updater = $ || F;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(f, R) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, R, "setState");
  }, C.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function B() {
  }
  B.prototype = C.prototype;
  function L(f, R, $) {
    this.props = f, this.context = R, this.refs = A, this.updater = $ || F;
  }
  var Y = L.prototype = new B();
  Y.constructor = L, S(Y, C.prototype), Y.isPureReactComponent = !0;
  var ie = Array.isArray, I = Object.prototype.hasOwnProperty, se = { current: null }, he = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(f, R, $) {
    var V, H = {}, ne = null, ee = null;
    if (R != null) for (V in R.ref !== void 0 && (ee = R.ref), R.key !== void 0 && (ne = "" + R.key), R) I.call(R, V) && !he.hasOwnProperty(V) && (H[V] = R[V]);
    var X = arguments.length - 2;
    if (X === 1) H.children = $;
    else if (1 < X) {
      for (var J = Array(X), pe = 0; pe < X; pe++) J[pe] = arguments[pe + 2];
      H.children = J;
    }
    if (f && f.defaultProps) for (V in X = f.defaultProps, X) H[V] === void 0 && (H[V] = X[V]);
    return { $$typeof: e, type: f, key: ne, ref: ee, props: H, _owner: se.current };
  }
  function Ce(f, R) {
    return { $$typeof: e, type: f.type, key: R, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function $e(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }
  function jt(f) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function($) {
      return R[$];
    });
  }
  var ot = /\/+/g;
  function Re(f, R) {
    return typeof f == "object" && f !== null && f.key != null ? jt("" + f.key) : R.toString(36);
  }
  function Se(f, R, $, V, H) {
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
    if (ee) return ee = f, H = H(ee), f = V === "" ? "." + Re(ee, 0) : V, ie(H) ? ($ = "", f != null && ($ = f.replace(ot, "$&/") + "/"), Se(H, R, $, "", function(pe) {
      return pe;
    })) : H != null && ($e(H) && (H = Ce(H, $ + (!H.key || ee && ee.key === H.key ? "" : ("" + H.key).replace(ot, "$&/") + "/") + f)), R.push(H)), 1;
    if (ee = 0, V = V === "" ? "." : V + ":", ie(f)) for (var X = 0; X < f.length; X++) {
      ne = f[X];
      var J = V + Re(ne, X);
      ee += Se(ne, R, $, J, H);
    }
    else if (J = U(f), typeof J == "function") for (f = J.call(f), X = 0; !(ne = f.next()).done; ) ne = ne.value, J = V + Re(ne, X++), ee += Se(ne, R, $, J, H);
    else if (ne === "object") throw R = String(f), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return ee;
  }
  function ve(f, R, $) {
    if (f == null) return f;
    var V = [], H = 0;
    return Se(f, V, "", "", function(ne) {
      return R.call($, ne, H++);
    }), V;
  }
  function xe(f) {
    if (f._status === -1) {
      var R = f._result;
      R = R(), R.then(function($) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = $);
      }, function($) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = $);
      }), f._status === -1 && (f._status = 0, f._result = R);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var T = { current: null }, Ne = { transition: null }, it = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: Ne, ReactCurrentOwner: se };
  function Ge() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: ve, forEach: function(f, R, $) {
    ve(f, function() {
      R.apply(this, arguments);
    }, $);
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
  } }, M.Component = C, M.Fragment = r, M.Profiler = o, M.PureComponent = L, M.StrictMode = n, M.Suspense = E, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = it, M.act = Ge, M.cloneElement = function(f, R, $) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var V = S({}, f.props), H = f.key, ne = f.ref, ee = f._owner;
    if (R != null) {
      if (R.ref !== void 0 && (ne = R.ref, ee = se.current), R.key !== void 0 && (H = "" + R.key), f.type && f.type.defaultProps) var X = f.type.defaultProps;
      for (J in R) I.call(R, J) && !he.hasOwnProperty(J) && (V[J] = R[J] === void 0 && X !== void 0 ? X[J] : R[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) V.children = $;
    else if (1 < J) {
      X = Array(J);
      for (var pe = 0; pe < J; pe++) X[pe] = arguments[pe + 2];
      V.children = X;
    }
    return { $$typeof: e, type: f.type, key: H, ref: ne, props: V, _owner: ee };
  }, M.createContext = function(f) {
    return f = { $$typeof: u, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: c, _context: f }, f.Consumer = f;
  }, M.createElement = Z, M.createFactory = function(f) {
    var R = Z.bind(null, f);
    return R.type = f, R;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(f) {
    return { $$typeof: l, render: f };
  }, M.isValidElement = $e, M.lazy = function(f) {
    return { $$typeof: m, _payload: { _status: -1, _result: f }, _init: xe };
  }, M.memo = function(f, R) {
    return { $$typeof: y, type: f, compare: R === void 0 ? null : R };
  }, M.startTransition = function(f) {
    var R = Ne.transition;
    Ne.transition = {};
    try {
      f();
    } finally {
      Ne.transition = R;
    }
  }, M.unstable_act = Ge, M.useCallback = function(f, R) {
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
  }, M.useImperativeHandle = function(f, R, $) {
    return T.current.useImperativeHandle(f, R, $);
  }, M.useInsertionEffect = function(f, R) {
    return T.current.useInsertionEffect(f, R);
  }, M.useLayoutEffect = function(f, R) {
    return T.current.useLayoutEffect(f, R);
  }, M.useMemo = function(f, R) {
    return T.current.useMemo(f, R);
  }, M.useReducer = function(f, R, $) {
    return T.current.useReducer(f, R, $);
  }, M.useRef = function(f) {
    return T.current.useRef(f);
  }, M.useState = function(f) {
    return T.current.useState(f);
  }, M.useSyncExternalStore = function(f, R, $) {
    return T.current.useSyncExternalStore(f, R, $);
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
  return ys || (ys = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), y = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), C = Symbol.iterator, B = "@@iterator";
      function L(s) {
        if (s === null || typeof s != "object")
          return null;
        var i = C && s[C] || s[B];
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
      function Ce(s) {
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
      var $e = !1, jt = !1, ot = !1, Re = !1, Se = !1, ve = {
        ReactCurrentDispatcher: Y,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: se
      };
      ve.ReactDebugCurrentFrame = he, ve.ReactCurrentActQueue = I;
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
          var p = ve.ReactDebugCurrentFrame, O = p.getStackAddendum();
          O !== "" && (i += "%s", d = d.concat([O]));
          var P = d.map(function(w) {
            return String(w);
          });
          P.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, P);
        }
      }
      var it = {};
      function Ge(s, i) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", O = p + "." + i;
          if (it[O])
            return;
          T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, p), it[O] = !0;
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
          Ge(s, "forceUpdate");
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
          Ge(s, "replaceState");
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
          Ge(s, "setState");
        }
      }, R = Object.assign, $ = {};
      Object.freeze($);
      function V(s, i, d) {
        this.props = s, this.context = i, this.refs = $, this.updater = d || f;
      }
      V.prototype.isReactComponent = {}, V.prototype.setState = function(s, i) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, i, "setState");
      }, V.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var H = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ne = function(s, i) {
          Object.defineProperty(V.prototype, s, {
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
      X.prototype = V.prototype;
      function J(s, i, d) {
        this.props = s, this.context = i, this.refs = $, this.updater = d || f;
      }
      var pe = J.prototype = new X();
      pe.constructor = J, R(pe, V.prototype), pe.isPureReactComponent = !0;
      function Ir() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var tr = Array.isArray;
      function Rt(s) {
        return tr(s);
      }
      function Nr(s) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function _t(s) {
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
        if (_t(s))
          return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nr(s)), Ye(s);
      }
      function rr(s, i, d) {
        var p = s.displayName;
        if (p)
          return p;
        var O = i.displayName || i.name || "";
        return O !== "" ? d + "(" + O + ")" : d;
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
          case b:
            return "Suspense";
          case U:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case y:
              var i = s;
              return ut(i) + ".Consumer";
            case E:
              var d = s;
              return ut(d._context) + ".Provider";
            case m:
              return rr(s, s.render, "ForwardRef");
            case F:
              var p = s.displayName || null;
              return p !== null ? p : je(s.type) || "Memo";
            case S: {
              var O = s, P = O._payload, w = O._init;
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
      }, nr, sr, Ct;
      Ct = {};
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
      function jr(s, i) {
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
          Ct[i] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, s.ref), Ct[i] = !0);
        }
      }
      var lt = function(s, i, d, p, O, P, w) {
        var k = {
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
        return k._store = {}, Object.defineProperty(k._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(k, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.defineProperty(k, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: O
        }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
      };
      function Mr(s, i, d) {
        var p, O = {}, P = null, w = null, k = null, W = null;
        if (i != null) {
          Mt(i) && (w = i.ref, ir(i)), Ke(i) && (at(i.key), P = "" + i.key), k = i.__self === void 0 ? null : i.__self, W = i.__source === void 0 ? null : i.__source;
          for (p in i)
            ct.call(i, p) && !Ot.hasOwnProperty(p) && (O[p] = i[p]);
        }
        var te = arguments.length - 2;
        if (te === 1)
          O.children = d;
        else if (te > 1) {
          for (var ae = Array(te), ue = 0; ue < te; ue++)
            ae[ue] = arguments[ue + 2];
          Object.freeze && Object.freeze(ae), O.children = ae;
        }
        if (s && s.defaultProps) {
          var le = s.defaultProps;
          for (p in le)
            O[p] === void 0 && (O[p] = le[p]);
        }
        if (P || w) {
          var me = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          P && jr(O, me), w && or(O, me);
        }
        return lt(s, P, w, k, W, se.current, O);
      }
      function Br(s, i) {
        var d = lt(s.type, i, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function $r(s, i, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, O = R({}, s.props), P = s.key, w = s.ref, k = s._self, W = s._source, te = s._owner;
        if (i != null) {
          Mt(i) && (w = i.ref, te = se.current), Ke(i) && (at(i.key), P = "" + i.key);
          var ae;
          s.type && s.type.defaultProps && (ae = s.type.defaultProps);
          for (p in i)
            ct.call(i, p) && !Ot.hasOwnProperty(p) && (i[p] === void 0 && ae !== void 0 ? O[p] = ae[p] : O[p] = i[p]);
        }
        var ue = arguments.length - 2;
        if (ue === 1)
          O.children = d;
        else if (ue > 1) {
          for (var le = Array(ue), me = 0; me < ue; me++)
            le[me] = arguments[me + 2];
          O.children = le;
        }
        return lt(s.type, P, w, k, W, te, O);
      }
      function Je(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var ar = ".", Gr = ":";
      function Vr(s) {
        var i = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(i, function(O) {
          return d[O];
        });
        return "$" + p;
      }
      var St = !1, ur = /\/+/g;
      function Ve(s) {
        return s.replace(ur, "$&/");
      }
      function ft(s, i) {
        return typeof s == "object" && s !== null && s.key != null ? (at(s.key), Vr("" + s.key)) : i.toString(36);
      }
      function Qe(s, i, d, p, O) {
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
          var k = s, W = O(k), te = p === "" ? ar + ft(k, 0) : p;
          if (Rt(W)) {
            var ae = "";
            te != null && (ae = Ve(te) + "/"), Qe(W, i, ae, "", function(ko) {
              return ko;
            });
          } else W != null && (Je(W) && (W.key && (!k || k.key !== W.key) && at(W.key), W = Br(
            W,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (W.key && (!k || k.key !== W.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ve("" + W.key) + "/"
            ) : "") + te
          )), i.push(W));
          return 1;
        }
        var ue, le, me = 0, be = p === "" ? ar : p + Gr;
        if (Rt(s))
          for (var gr = 0; gr < s.length; gr++)
            ue = s[gr], le = be + ft(ue, gr), me += Qe(ue, i, d, le, O);
        else {
          var sn = L(s);
          if (typeof sn == "function") {
            var ss = s;
            sn === ss.entries && (St || xe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), St = !0);
            for (var Do = sn.call(ss), os, Lo = 0; !(os = Do.next()).done; )
              ue = os.value, le = be + ft(ue, Lo++), me += Qe(ue, i, d, le, O);
          } else if (P === "object") {
            var is = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (is === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : is) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return me;
      }
      function dt(s, i, d) {
        if (s == null)
          return s;
        var p = [], O = 0;
        return Qe(s, p, "", "", function(P) {
          return i.call(d, P, O++);
        }), p;
      }
      function qr(s) {
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
      function Wr(s) {
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
          $$typeof: y,
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
        var d = !1, p = !1, O = !1;
        {
          var P = {
            $$typeof: y,
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
                O || (xe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", w), O = !0);
              }
            }
          }), i.Consumer = P;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var ht = -1, Bt = 0, $t = 1, dr = 2;
      function Hr(s) {
        if (s._status === ht) {
          var i = s._result, d = i();
          if (d.then(function(P) {
            if (s._status === Bt || s._status === ht) {
              var w = s;
              w._status = $t, w._result = P;
            }
          }, function(P) {
            if (s._status === Bt || s._status === ht) {
              var w = s;
              w._status = dr, w._result = P;
            }
          }), s._status === ht) {
            var p = s;
            p._status = Bt, p._result = d;
          }
        }
        if (s._status === $t) {
          var O = s._result;
          return O === void 0 && T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, O), "default" in O || T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, O), O.default;
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
          _init: Hr
        };
        {
          var p, O;
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
                return O;
              },
              set: function(P) {
                T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), O = P, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function Yr(s) {
        s != null && s.$$typeof === F ? T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? T("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && T("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var i = {
          $$typeof: m,
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
        return !!(typeof s == "string" || typeof s == "function" || s === c || s === l || Se || s === u || s === b || s === U || Re || s === A || $e || jt || ot || typeof s == "object" && s !== null && (s.$$typeof === S || s.$$typeof === F || s.$$typeof === E || s.$$typeof === y || s.$$typeof === m || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === hr || s.getModuleId !== void 0));
      }
      function g(s, i) {
        a(s) || T("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
        var d = {
          $$typeof: F,
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
            set: function(O) {
              p = O, !s.name && !s.displayName && (s.displayName = O);
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
      function G(s) {
        var i = _();
        return i.useRef(s);
      }
      function N(s, i) {
        var d = _();
        return d.useEffect(s, i);
      }
      function Ee(s, i) {
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
      function qe(s, i) {
        {
          var d = _();
          return d.useDebugValue(s, i);
        }
      }
      function _e() {
        var s = _();
        return s.useTransition();
      }
      function Gt(s) {
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
      var Vt = 0, Nn, jn, Mn, Bn, $n, Gn, Vn;
      function qn() {
      }
      qn.__reactDisabledLog = !0;
      function ho() {
        {
          if (Vt === 0) {
            Nn = console.log, jn = console.info, Mn = console.warn, Bn = console.error, $n = console.group, Gn = console.groupCollapsed, Vn = console.groupEnd;
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
          Vt++;
        }
      }
      function po() {
        {
          if (Vt--, Vt === 0) {
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
                value: jn
              }),
              warn: R({}, s, {
                value: Mn
              }),
              error: R({}, s, {
                value: Bn
              }),
              group: R({}, s, {
                value: $n
              }),
              groupCollapsed: R({}, s, {
                value: Gn
              }),
              groupEnd: R({}, s, {
                value: Vn
              })
            });
          }
          Vt < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Qr = ve.ReactCurrentDispatcher, Xr;
      function pr(s, i, d) {
        {
          if (Xr === void 0)
            try {
              throw Error();
            } catch (O) {
              var p = O.stack.trim().match(/\n( *(at )?)/);
              Xr = p && p[1] || "";
            }
          return `
` + Xr + s;
        }
      }
      var Zr = !1, mr;
      {
        var mo = typeof WeakMap == "function" ? WeakMap : Map;
        mr = new mo();
      }
      function Wn(s, i) {
        if (!s || Zr)
          return "";
        {
          var d = mr.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        Zr = !0;
        var O = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var P;
        P = Qr.current, Qr.current = null, ho();
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
            for (var k = be.stack.split(`
`), W = p.stack.split(`
`), te = k.length - 1, ae = W.length - 1; te >= 1 && ae >= 0 && k[te] !== W[ae]; )
              ae--;
            for (; te >= 1 && ae >= 0; te--, ae--)
              if (k[te] !== W[ae]) {
                if (te !== 1 || ae !== 1)
                  do
                    if (te--, ae--, ae < 0 || k[te] !== W[ae]) {
                      var ue = `
` + k[te].replace(" at new ", " at ");
                      return s.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", s.displayName)), typeof s == "function" && mr.set(s, ue), ue;
                    }
                  while (te >= 1 && ae >= 0);
                break;
              }
          }
        } finally {
          Zr = !1, Qr.current = P, po(), Error.prepareStackTrace = O;
        }
        var le = s ? s.displayName || s.name : "", me = le ? pr(le) : "";
        return typeof s == "function" && mr.set(s, me), me;
      }
      function yo(s, i, d) {
        return Wn(s, !1);
      }
      function vo(s) {
        var i = s.prototype;
        return !!(i && i.isReactComponent);
      }
      function yr(s, i, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return Wn(s, vo(s));
        if (typeof s == "string")
          return pr(s);
        switch (s) {
          case b:
            return pr("Suspense");
          case U:
            return pr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case m:
              return yo(s.render);
            case F:
              return yr(s.type, i, d);
            case S: {
              var p = s, O = p._payload, P = p._init;
              try {
                return yr(P(O), i, d);
              } catch {
              }
            }
          }
        return "";
      }
      var Hn = {}, zn = ve.ReactDebugCurrentFrame;
      function vr(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          zn.setExtraStackFrame(d);
        } else
          zn.setExtraStackFrame(null);
      }
      function Eo(s, i, d, p, O) {
        {
          var P = Function.call.bind(ct);
          for (var w in s)
            if (P(s, w)) {
              var k = void 0;
              try {
                if (typeof s[w] != "function") {
                  var W = Error((p || "React class") + ": " + d + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw W.name = "Invariant Violation", W;
                }
                k = s[w](i, w, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (te) {
                k = te;
              }
              k && !(k instanceof Error) && (vr(O), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, w, typeof k), vr(null)), k instanceof Error && !(k.message in Hn) && (Hn[k.message] = !0, vr(O), T("Failed %s type: %s", d, k.message), vr(null));
            }
        }
      }
      function wt(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          Ce(d);
        } else
          Ce(null);
      }
      var en;
      en = !1;
      function Yn() {
        if (se.current) {
          var s = je(se.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function bo(s) {
        if (s !== void 0) {
          var i = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + i + ":" + d + ".";
        }
        return "";
      }
      function go(s) {
        return s != null ? bo(s.__source) : "";
      }
      var Kn = {};
      function Ro(s) {
        var i = Yn();
        if (!i) {
          var d = typeof s == "string" ? s : s.displayName || s.name;
          d && (i = `

Check the top-level render call using <` + d + ">.");
        }
        return i;
      }
      function Jn(s, i) {
        if (!(!s._store || s._store.validated || s.key != null)) {
          s._store.validated = !0;
          var d = Ro(i);
          if (!Kn[d]) {
            Kn[d] = !0;
            var p = "";
            s && s._owner && s._owner !== se.current && (p = " It was passed a child from " + je(s._owner.type) + "."), wt(s), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), wt(null);
          }
        }
      }
      function Qn(s, i) {
        if (typeof s == "object") {
          if (Rt(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              Je(p) && Jn(p, i);
            }
          else if (Je(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var O = L(s);
            if (typeof O == "function" && O !== s.entries)
              for (var P = O.call(s), w; !(w = P.next()).done; )
                Je(w.value) && Jn(w.value, i);
          }
        }
      }
      function Xn(s) {
        {
          var i = s.type;
          if (i == null || typeof i == "string")
            return;
          var d;
          if (typeof i == "function")
            d = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === m || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === F))
            d = i.propTypes;
          else
            return;
          if (d) {
            var p = je(i);
            Eo(d, s.props, "prop", p, s);
          } else if (i.PropTypes !== void 0 && !en) {
            en = !0;
            var O = je(i);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function _o(s) {
        {
          for (var i = Object.keys(s.props), d = 0; d < i.length; d++) {
            var p = i[d];
            if (p !== "children" && p !== "key") {
              wt(s), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), wt(null);
              break;
            }
          }
          s.ref !== null && (wt(s), T("Invalid attribute `ref` supplied to `React.Fragment`."), wt(null));
        }
      }
      function Zn(s, i, d) {
        var p = a(s);
        if (!p) {
          var O = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = go(i);
          P ? O += P : O += Yn();
          var w;
          s === null ? w = "null" : Rt(s) ? w = "array" : s !== void 0 && s.$$typeof === n ? (w = "<" + (je(s.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : w = typeof s, T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, O);
        }
        var k = Mr.apply(this, arguments);
        if (k == null)
          return k;
        if (p)
          for (var W = 2; W < arguments.length; W++)
            Qn(arguments[W], s);
        return s === c ? _o(k) : Xn(k), k;
      }
      var es = !1;
      function Oo(s) {
        var i = Zn.bind(null, s);
        return i.type = s, es || (es = !0, xe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return xe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), i;
      }
      function Co(s, i, d) {
        for (var p = $r.apply(this, arguments), O = 2; O < arguments.length; O++)
          Qn(arguments[O], p.type);
        return Xn(p), p;
      }
      function So(s, i) {
        var d = ie.transition;
        ie.transition = {};
        var p = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          s();
        } finally {
          if (ie.transition = d, d === null && p._updatedFibers) {
            var O = p._updatedFibers.size;
            O > 10 && xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var ts = !1, Er = null;
      function wo(s) {
        if (Er === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), d = e && e[i];
            Er = d.call(e, "timers").setImmediate;
          } catch {
            Er = function(O) {
              ts === !1 && (ts = !0, typeof MessageChannel > "u" && T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var P = new MessageChannel();
              P.port1.onmessage = O, P.port2.postMessage(void 0);
            };
          }
        return Er(s);
      }
      var Tt = 0, rs = !1;
      function ns(s) {
        {
          var i = Tt;
          Tt++, I.current === null && (I.current = []);
          var d = I.isBatchingLegacy, p;
          try {
            if (I.isBatchingLegacy = !0, p = s(), !d && I.didScheduleLegacyUpdate) {
              var O = I.current;
              O !== null && (I.didScheduleLegacyUpdate = !1, nn(O));
            }
          } catch (le) {
            throw br(i), le;
          } finally {
            I.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var P = p, w = !1, k = {
              then: function(le, me) {
                w = !0, P.then(function(be) {
                  br(i), Tt === 0 ? tn(be, le, me) : le(be);
                }, function(be) {
                  br(i), me(be);
                });
              }
            };
            return !rs && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              w || (rs = !0, T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), k;
          } else {
            var W = p;
            if (br(i), Tt === 0) {
              var te = I.current;
              te !== null && (nn(te), I.current = null);
              var ae = {
                then: function(le, me) {
                  I.current === null ? (I.current = [], tn(W, le, me)) : le(W);
                }
              };
              return ae;
            } else {
              var ue = {
                then: function(le, me) {
                  le(W);
                }
              };
              return ue;
            }
          }
        }
      }
      function br(s) {
        s !== Tt - 1 && T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Tt = s;
      }
      function tn(s, i, d) {
        {
          var p = I.current;
          if (p !== null)
            try {
              nn(p), wo(function() {
                p.length === 0 ? (I.current = null, i(s)) : tn(s, i, d);
              });
            } catch (O) {
              d(O);
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
      var To = Zn, Ao = Co, Po = Oo, Fo = {
        map: dt,
        forEach: cr,
        count: qr,
        toArray: Wr,
        only: lr
      };
      t.Children = Fo, t.Component = V, t.Fragment = c, t.Profiler = l, t.PureComponent = J, t.StrictMode = u, t.Suspense = b, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, t.act = ns, t.cloneElement = Ao, t.createContext = fr, t.createElement = To, t.createFactory = Po, t.createRef = Ir, t.forwardRef = Yr, t.isValidElement = Je, t.lazy = zr, t.memo = g, t.startTransition = So, t.unstable_act = ns, t.useCallback = fe, t.useContext = D, t.useDebugValue = qe, t.useDeferredValue = Gt, t.useEffect = N, t.useId = Kr, t.useImperativeHandle = Xe, t.useInsertionEffect = Ee, t.useLayoutEffect = ce, t.useMemo = we, t.useReducer = Q, t.useRef = G, t.useState = z, t.useSyncExternalStore = Jr, t.useTransition = _e, t.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Yt, Yt.exports)), Yt.exports;
}
process.env.NODE_ENV === "production" ? _n.exports = Yo() : _n.exports = Ko();
var ye = _n.exports, qt = {};
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
function Jo() {
  if (vs) return qt;
  vs = 1;
  var e = ye, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, E, y) {
    var m, b = {}, U = null, F = null;
    y !== void 0 && (U = "" + y), E.key !== void 0 && (U = "" + E.key), E.ref !== void 0 && (F = E.ref);
    for (m in E) n.call(E, m) && !c.hasOwnProperty(m) && (b[m] = E[m]);
    if (l && l.defaultProps) for (m in E = l.defaultProps, E) b[m] === void 0 && (b[m] = E[m]);
    return { $$typeof: t, type: l, key: U, ref: F, props: b, _owner: o.current };
  }
  return qt.Fragment = r, qt.jsx = u, qt.jsxs = u, qt;
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
function Qo() {
  return Es || (Es = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ye, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), S = Symbol.iterator, A = "@@iterator";
    function C(a) {
      if (a === null || typeof a != "object")
        return null;
      var g = S && a[S] || a[A];
      return typeof g == "function" ? g : null;
    }
    var B = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(a) {
      {
        for (var g = arguments.length, _ = new Array(g > 1 ? g - 1 : 0), D = 1; D < g; D++)
          _[D - 1] = arguments[D];
        Y("error", a, _);
      }
    }
    function Y(a, g, _) {
      {
        var D = B.ReactDebugCurrentFrame, z = D.getStackAddendum();
        z !== "" && (g += "%s", _ = _.concat([z]));
        var Q = _.map(function(G) {
          return String(G);
        });
        Q.unshift("Warning: " + g), Function.prototype.apply.call(console[a], console, Q);
      }
    }
    var ie = !1, I = !1, se = !1, he = !1, Z = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function $e(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === c || Z || a === o || a === y || a === m || he || a === F || ie || I || se || typeof a == "object" && a !== null && (a.$$typeof === U || a.$$typeof === b || a.$$typeof === u || a.$$typeof === l || a.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Ce || a.getModuleId !== void 0));
    }
    function jt(a, g, _) {
      var D = a.displayName;
      if (D)
        return D;
      var z = g.displayName || g.name || "";
      return z !== "" ? _ + "(" + z + ")" : _;
    }
    function ot(a) {
      return a.displayName || "Context";
    }
    function Re(a) {
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
        case y:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            var g = a;
            return ot(g) + ".Consumer";
          case u:
            var _ = a;
            return ot(_._context) + ".Provider";
          case E:
            return jt(a, a.render, "ForwardRef");
          case b:
            var D = a.displayName || null;
            return D !== null ? D : Re(a.type) || "Memo";
          case U: {
            var z = a, Q = z._payload, G = z._init;
            try {
              return Re(G(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Se = Object.assign, ve = 0, xe, T, Ne, it, Ge, f, R;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function V() {
      {
        if (ve === 0) {
          xe = console.log, T = console.info, Ne = console.warn, it = console.error, Ge = console.group, f = console.groupCollapsed, R = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: $,
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
    function H() {
      {
        if (ve--, ve === 0) {
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
              value: Ge
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
    function X(a, g, _) {
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
      var Ir = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new Ir();
    }
    function tr(a, g) {
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
      Q = ne.current, ne.current = null, V();
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
            } catch (_e) {
              D = _e;
            }
            Reflect.construct(a, [], G);
          } else {
            try {
              G.call();
            } catch (_e) {
              D = _e;
            }
            a.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            D = _e;
          }
          a();
        }
      } catch (_e) {
        if (_e && D && typeof _e.stack == "string") {
          for (var N = _e.stack.split(`
`), Ee = D.stack.split(`
`), ce = N.length - 1, fe = Ee.length - 1; ce >= 1 && fe >= 0 && N[ce] !== Ee[fe]; )
            fe--;
          for (; ce >= 1 && fe >= 0; ce--, fe--)
            if (N[ce] !== Ee[fe]) {
              if (ce !== 1 || fe !== 1)
                do
                  if (ce--, fe--, fe < 0 || N[ce] !== Ee[fe]) {
                    var we = `
` + N[ce].replace(" at new ", " at ");
                    return a.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", a.displayName)), typeof a == "function" && pe.set(a, we), we;
                  }
                while (ce >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        J = !1, ne.current = Q, H(), Error.prepareStackTrace = z;
      }
      var Xe = a ? a.displayName || a.name : "", qe = Xe ? X(Xe) : "";
      return typeof a == "function" && pe.set(a, qe), qe;
    }
    function Rt(a, g, _) {
      return tr(a, !1);
    }
    function Nr(a) {
      var g = a.prototype;
      return !!(g && g.isReactComponent);
    }
    function _t(a, g, _) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return tr(a, Nr(a));
      if (typeof a == "string")
        return X(a);
      switch (a) {
        case y:
          return X("Suspense");
        case m:
          return X("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case E:
            return Rt(a.render);
          case b:
            return _t(a.type, g, _);
          case U: {
            var D = a, z = D._payload, Q = D._init;
            try {
              return _t(Q(z), g, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, at = {}, rr = B.ReactDebugCurrentFrame;
    function ut(a) {
      if (a) {
        var g = a._owner, _ = _t(a.type, a._source, g ? g.type : null);
        rr.setExtraStackFrame(_);
      } else
        rr.setExtraStackFrame(null);
    }
    function je(a, g, _, D, z) {
      {
        var Q = Function.call.bind(Ye);
        for (var G in a)
          if (Q(a, G)) {
            var N = void 0;
            try {
              if (typeof a[G] != "function") {
                var Ee = Error((D || "React class") + ": " + _ + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ee.name = "Invariant Violation", Ee;
              }
              N = a[G](g, G, D, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              N = ce;
            }
            N && !(N instanceof Error) && (ut(z), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", _, G, typeof N), ut(null)), N instanceof Error && !(N.message in at) && (at[N.message] = !0, ut(z), L("Failed %s type: %s", _, N.message), ut(null));
          }
      }
    }
    var ct = Array.isArray;
    function Ot(a) {
      return ct(a);
    }
    function nr(a) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, _ = g && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return _;
      }
    }
    function sr(a) {
      try {
        return Ct(a), !1;
      } catch {
        return !0;
      }
    }
    function Ct(a) {
      return "" + a;
    }
    function Mt(a) {
      if (sr(a))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(a)), Ct(a);
    }
    var Ke = B.ReactCurrentOwner, jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ir, lt;
    lt = {};
    function Mr(a) {
      if (Ye.call(a, "ref")) {
        var g = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Br(a) {
      if (Ye.call(a, "key")) {
        var g = Object.getOwnPropertyDescriptor(a, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function $r(a, g) {
      if (typeof a.ref == "string" && Ke.current && g && Ke.current.stateNode !== g) {
        var _ = Re(Ke.current.type);
        lt[_] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Re(Ke.current.type), a.ref), lt[_] = !0);
      }
    }
    function Je(a, g) {
      {
        var _ = function() {
          or || (or = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function ar(a, g) {
      {
        var _ = function() {
          ir || (ir = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var Gr = function(a, g, _, D, z, Q, G) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: g,
        ref: _,
        props: G,
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
        value: D
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function Vr(a, g, _, D, z) {
      {
        var Q, G = {}, N = null, Ee = null;
        _ !== void 0 && (Mt(_), N = "" + _), Br(g) && (Mt(g.key), N = "" + g.key), Mr(g) && (Ee = g.ref, $r(g, z));
        for (Q in g)
          Ye.call(g, Q) && !jr.hasOwnProperty(Q) && (G[Q] = g[Q]);
        if (a && a.defaultProps) {
          var ce = a.defaultProps;
          for (Q in ce)
            G[Q] === void 0 && (G[Q] = ce[Q]);
        }
        if (N || Ee) {
          var fe = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          N && Je(G, fe), Ee && ar(G, fe);
        }
        return Gr(a, N, Ee, z, D, Ke.current, G);
      }
    }
    var St = B.ReactCurrentOwner, ur = B.ReactDebugCurrentFrame;
    function Ve(a) {
      if (a) {
        var g = a._owner, _ = _t(a.type, a._source, g ? g.type : null);
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
        if (St.current) {
          var a = Re(St.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function qr(a) {
      return "";
    }
    var cr = {};
    function Wr(a) {
      {
        var g = dt();
        if (!g) {
          var _ = typeof a == "string" ? a : a.displayName || a.name;
          _ && (g = `

Check the top-level render call using <` + _ + ">.");
        }
        return g;
      }
    }
    function lr(a, g) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var _ = Wr(g);
        if (cr[_])
          return;
        cr[_] = !0;
        var D = "";
        a && a._owner && a._owner !== St.current && (D = " It was passed a child from " + Re(a._owner.type) + "."), Ve(a), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, D), Ve(null);
      }
    }
    function fr(a, g) {
      {
        if (typeof a != "object")
          return;
        if (Ot(a))
          for (var _ = 0; _ < a.length; _++) {
            var D = a[_];
            Qe(D) && lr(D, g);
          }
        else if (Qe(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var z = C(a);
          if (typeof z == "function" && z !== a.entries)
            for (var Q = z.call(a), G; !(G = Q.next()).done; )
              Qe(G.value) && lr(G.value, g);
        }
      }
    }
    function ht(a) {
      {
        var g = a.type;
        if (g == null || typeof g == "string")
          return;
        var _;
        if (typeof g == "function")
          _ = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === b))
          _ = g.propTypes;
        else
          return;
        if (_) {
          var D = Re(g);
          je(_, a.props, "prop", D, a);
        } else if (g.PropTypes !== void 0 && !ft) {
          ft = !0;
          var z = Re(g);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(a) {
      {
        for (var g = Object.keys(a.props), _ = 0; _ < g.length; _++) {
          var D = g[_];
          if (D !== "children" && D !== "key") {
            Ve(a), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Ve(null);
            break;
          }
        }
        a.ref !== null && (Ve(a), L("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var $t = {};
    function dr(a, g, _, D, z, Q) {
      {
        var G = $e(a);
        if (!G) {
          var N = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = qr();
          Ee ? N += Ee : N += dt();
          var ce;
          a === null ? ce = "null" : Ot(a) ? ce = "array" : a !== void 0 && a.$$typeof === t ? (ce = "<" + (Re(a.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof a, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, N);
        }
        var fe = Vr(a, g, _, z, Q);
        if (fe == null)
          return fe;
        if (G) {
          var we = g.children;
          if (we !== void 0)
            if (D)
              if (Ot(we)) {
                for (var Xe = 0; Xe < we.length; Xe++)
                  fr(we[Xe], a);
                Object.freeze && Object.freeze(we);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(we, a);
        }
        if (Ye.call(g, "key")) {
          var qe = Re(a), _e = Object.keys(g).filter(function(Jr) {
            return Jr !== "key";
          }), Gt = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$t[qe + Gt]) {
            var Kr = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            L(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gt, qe, Kr, qe), $t[qe + Gt] = !0;
          }
        }
        return a === n ? Bt(fe) : ht(fe), fe;
      }
    }
    function Hr(a, g, _) {
      return dr(a, g, _, !0);
    }
    function zr(a, g, _) {
      return dr(a, g, _, !1);
    }
    var Yr = zr, hr = Hr;
    Wt.Fragment = n, Wt.jsx = Yr, Wt.jsxs = hr;
  }()), Wt;
}
process.env.NODE_ENV === "production" ? Jo() : Qo();
var Xo = ye.createContext(
  void 0
), js = (e) => {
  const t = ye.useContext(Xo);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Ms = ye.createContext(!1), Zo = () => ye.useContext(Ms);
Ms.Provider;
function ei() {
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
var ti = ye.createContext(ei()), ri = () => ye.useContext(ti);
function Bs(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function ni() {
}
var si = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, oi = (e) => {
  ye.useEffect(() => {
    e.clearReset();
  }, [e]);
}, ii = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n
}) => e.isError && !t.isReset() && !e.isFetching && n && Bs(r, [e.error, n]), ai = (e) => {
  e.suspense && (typeof e.staleTime != "number" && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, ui = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, ci = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function li(e, t, r) {
  var y, m, b, U;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = js(), o = Zo(), c = ri(), u = n.defaultQueryOptions(e);
  (m = (y = n.getDefaultOptions().queries) == null ? void 0 : y._experimental_beforeQuery) == null || m.call(
    y,
    u
  ), u._optimisticResults = o ? "isRestoring" : "optimistic", ai(u), si(u, c), oi(c);
  const [l] = ye.useState(
    () => new t(
      n,
      u
    )
  ), E = l.getOptimisticResult(u);
  if (ye.useSyncExternalStore(
    ye.useCallback(
      (F) => {
        const S = o ? () => {
        } : l.subscribe(Fr.batchCalls(F));
        return l.updateResult(), S;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), ye.useEffect(() => {
    l.setOptions(u, { listeners: !1 });
  }, [u, l]), ui(u, E))
    throw ci(u, l, c);
  if (ii({
    result: E,
    errorResetBoundary: c,
    throwOnError: u.throwOnError,
    query: n.getQueryCache().get(u.queryHash)
  }))
    throw E.error;
  return (U = (b = n.getDefaultOptions().queries) == null ? void 0 : b._experimental_afterQuery) == null || U.call(
    b,
    u,
    E
  ), u.notifyOnChangeProps ? E : l.trackResult(E);
}
function $s(e, t) {
  return li(e, qo);
}
function Dn(e, t) {
  const r = js(), [n] = ye.useState(
    () => new zo(
      r,
      e
    )
  );
  ye.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const o = ye.useSyncExternalStore(
    ye.useCallback(
      (u) => n.subscribe(Fr.batchCalls(u)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), c = ye.useCallback(
    (u, l) => {
      n.mutate(u, l).catch(ni);
    },
    [n]
  );
  if (o.error && Bs(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: c, mutateAsync: o.mutate };
}
function Gs(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: fi } = Object.prototype, { getPrototypeOf: Ln } = Object, Dr = /* @__PURE__ */ ((e) => (t) => {
  const r = fi.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ue = (e) => (e = e.toLowerCase(), (t) => Dr(t) === e), Lr = (e) => (t) => typeof t === e, { isArray: It } = Array, Kt = Lr("undefined");
function di(e) {
  return e !== null && !Kt(e) && e.constructor !== null && !Kt(e.constructor) && De(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Vs = Ue("ArrayBuffer");
function hi(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Vs(e.buffer), t;
}
const pi = Lr("string"), De = Lr("function"), qs = Lr("number"), kr = (e) => e !== null && typeof e == "object", mi = (e) => e === !0 || e === !1, Or = (e) => {
  if (Dr(e) !== "object")
    return !1;
  const t = Ln(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, yi = Ue("Date"), vi = Ue("File"), Ei = Ue("Blob"), bi = Ue("FileList"), gi = (e) => kr(e) && De(e.pipe), Ri = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || De(e.append) && ((t = Dr(e)) === "formdata" || // detect form-data instance
  t === "object" && De(e.toString) && e.toString() === "[object FormData]"));
}, _i = Ue("URLSearchParams"), [Oi, Ci, Si, wi] = ["ReadableStream", "Request", "Response", "Headers"].map(Ue), Ti = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xt(e, t, { allOwnKeys: r = !1 } = {}) {
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
function Ws(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const pt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Hs = (e) => !Kt(e) && e !== pt;
function On() {
  const { caseless: e } = Hs(this) && this || {}, t = {}, r = (n, o) => {
    const c = e && Ws(t, o) || o;
    Or(t[c]) && Or(n) ? t[c] = On(t[c], n) : Or(n) ? t[c] = On({}, n) : It(n) ? t[c] = n.slice() : t[c] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Xt(arguments[n], r);
  return t;
}
const Ai = (e, t, r, { allOwnKeys: n } = {}) => (Xt(t, (o, c) => {
  r && De(o) ? e[c] = Gs(o, r) : e[c] = o;
}, { allOwnKeys: n }), e), Pi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Fi = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Di = (e, t, r, n) => {
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
}, ki = (e) => {
  if (!e) return null;
  if (It(e)) return e;
  let t = e.length;
  if (!qs(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, xi = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ln(Uint8Array)), Ui = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const c = o.value;
    t.call(e, c[0], c[1]);
  }
}, Ii = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Ni = Ue("HTMLFormElement"), ji = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), bs = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Mi = Ue("RegExp"), zs = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Xt(r, (o, c) => {
    let u;
    (u = t(o, c, e)) !== !1 && (n[c] = u || o);
  }), Object.defineProperties(e, n);
}, Bi = (e) => {
  zs(e, (t, r) => {
    if (De(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (De(n)) {
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
}, Gi = () => {
}, Vi = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, an = "abcdefghijklmnopqrstuvwxyz", gs = "0123456789", Ys = {
  DIGIT: gs,
  ALPHA: an,
  ALPHA_DIGIT: an + an.toUpperCase() + gs
}, qi = (e = 16, t = Ys.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Wi(e) {
  return !!(e && De(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Hi = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (kr(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const c = It(n) ? [] : {};
        return Xt(n, (u, l) => {
          const E = r(u, o + 1);
          !Kt(E) && (c[l] = E);
        }), t[o] = void 0, c;
      }
    }
    return n;
  };
  return r(e, 0);
}, zi = Ue("AsyncFunction"), Yi = (e) => e && (kr(e) || De(e)) && De(e.then) && De(e.catch), Ks = ((e, t) => e ? setImmediate : t ? ((r, n) => (pt.addEventListener("message", ({ source: o, data: c }) => {
  o === pt && c === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), pt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  De(pt.postMessage)
), Ki = typeof queueMicrotask < "u" ? queueMicrotask.bind(pt) : typeof process < "u" && process.nextTick || Ks, h = {
  isArray: It,
  isArrayBuffer: Vs,
  isBuffer: di,
  isFormData: Ri,
  isArrayBufferView: hi,
  isString: pi,
  isNumber: qs,
  isBoolean: mi,
  isObject: kr,
  isPlainObject: Or,
  isReadableStream: Oi,
  isRequest: Ci,
  isResponse: Si,
  isHeaders: wi,
  isUndefined: Kt,
  isDate: yi,
  isFile: vi,
  isBlob: Ei,
  isRegExp: Mi,
  isFunction: De,
  isStream: gi,
  isURLSearchParams: _i,
  isTypedArray: xi,
  isFileList: bi,
  forEach: Xt,
  merge: On,
  extend: Ai,
  trim: Ti,
  stripBOM: Pi,
  inherits: Fi,
  toFlatObject: Di,
  kindOf: Dr,
  kindOfTest: Ue,
  endsWith: Li,
  toArray: ki,
  forEachEntry: Ui,
  matchAll: Ii,
  isHTMLForm: Ni,
  hasOwnProperty: bs,
  hasOwnProp: bs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zs,
  freezeMethods: Bi,
  toObjectSet: $i,
  toCamelCase: ji,
  noop: Gi,
  toFiniteNumber: Vi,
  findKey: Ws,
  global: pt,
  isContextDefined: Hs,
  ALPHABET: Ys,
  generateString: qi,
  isSpecCompliantForm: Wi,
  toJSONObject: Hi,
  isAsyncFn: zi,
  isThenable: Yi,
  setImmediate: Ks,
  asap: Ki
};
function x(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
h.inherits(x, Error, {
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
const Js = x.prototype, Qs = {};
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
  Qs[e] = { value: e };
});
Object.defineProperties(x, Qs);
Object.defineProperty(Js, "isAxiosError", { value: !0 });
x.from = (e, t, r, n, o, c) => {
  const u = Object.create(Js);
  return h.toFlatObject(e, u, function(E) {
    return E !== Error.prototype;
  }, (l) => l !== "isAxiosError"), x.call(u, e.message, t, r, n, o), u.cause = e, u.name = e.name, c && Object.assign(u, c), u;
};
const Ji = null;
function Cn(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function Xs(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Rs(e, t, r) {
  return e ? e.concat(t).map(function(o, c) {
    return o = Xs(o), !r && c ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Qi(e) {
  return h.isArray(e) && !e.some(Cn);
}
const Xi = h.toFlatObject(h, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function xr(e, t, r) {
  if (!h.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, C) {
    return !h.isUndefined(C[A]);
  });
  const n = r.metaTokens, o = r.visitor || m, c = r.dots, u = r.indexes, E = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(t);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(S) {
    if (S === null) return "";
    if (h.isDate(S))
      return S.toISOString();
    if (!E && h.isBlob(S))
      throw new x("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(S) || h.isTypedArray(S) ? E && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function m(S, A, C) {
    let B = S;
    if (S && !C && typeof S == "object") {
      if (h.endsWith(A, "{}"))
        A = n ? A : A.slice(0, -2), S = JSON.stringify(S);
      else if (h.isArray(S) && Qi(S) || (h.isFileList(S) || h.endsWith(A, "[]")) && (B = h.toArray(S)))
        return A = Xs(A), B.forEach(function(Y, ie) {
          !(h.isUndefined(Y) || Y === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? Rs([A], ie, c) : u === null ? A : A + "[]",
            y(Y)
          );
        }), !1;
    }
    return Cn(S) ? !0 : (t.append(Rs(C, A, c), y(S)), !1);
  }
  const b = [], U = Object.assign(Xi, {
    defaultVisitor: m,
    convertValue: y,
    isVisitable: Cn
  });
  function F(S, A) {
    if (!h.isUndefined(S)) {
      if (b.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      b.push(S), h.forEach(S, function(B, L) {
        (!(h.isUndefined(B) || B === null) && o.call(
          t,
          B,
          h.isString(L) ? L.trim() : L,
          A,
          U
        )) === !0 && F(B, A ? A.concat(L) : [L]);
      }), b.pop();
    }
  }
  if (!h.isObject(e))
    throw new TypeError("data must be an object");
  return F(e), t;
}
function _s(e) {
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
function kn(e, t) {
  this._pairs = [], e && xr(e, this, t);
}
const Zs = kn.prototype;
Zs.append = function(t, r) {
  this._pairs.push([t, r]);
};
Zs.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, _s);
  } : _s;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Zi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function eo(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Zi, o = r && r.serialize;
  let c;
  if (o ? c = o(t, r) : c = h.isURLSearchParams(t) ? t.toString() : new kn(t, r).toString(n), c) {
    const u = e.indexOf("#");
    u !== -1 && (e = e.slice(0, u)), e += (e.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return e;
}
class Os {
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
const to = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ea = typeof URLSearchParams < "u" ? URLSearchParams : kn, ta = typeof FormData < "u" ? FormData : null, ra = typeof Blob < "u" ? Blob : null, na = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ea,
    FormData: ta,
    Blob: ra
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xn = typeof window < "u" && typeof document < "u", Sn = typeof navigator == "object" && navigator || void 0, sa = xn && (!Sn || ["ReactNative", "NativeScript", "NS"].indexOf(Sn.product) < 0), oa = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ia = xn && window.location.href || "http://localhost", aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xn,
  hasStandardBrowserEnv: sa,
  hasStandardBrowserWebWorkerEnv: oa,
  navigator: Sn,
  origin: ia
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...aa,
  ...na
};
function ua(e, t) {
  return xr(e, new Pe.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, c) {
      return Pe.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ca(e) {
  return h.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function la(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let c;
  for (n = 0; n < o; n++)
    c = r[n], t[c] = e[c];
  return t;
}
function ro(e) {
  function t(r, n, o, c) {
    let u = r[c++];
    if (u === "__proto__") return !0;
    const l = Number.isFinite(+u), E = c >= r.length;
    return u = !u && h.isArray(o) ? o.length : u, E ? (h.hasOwnProp(o, u) ? o[u] = [o[u], n] : o[u] = n, !l) : ((!o[u] || !h.isObject(o[u])) && (o[u] = []), t(r, n, o[u], c) && h.isArray(o[u]) && (o[u] = la(o[u])), !l);
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const r = {};
    return h.forEachEntry(e, (n, o) => {
      t(ca(n), o, r, 0);
    }), r;
  }
  return null;
}
function fa(e, t, r) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(e);
}
const Zt = {
  transitional: to,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, c = h.isObject(t);
    if (c && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t))
      return o ? JSON.stringify(ro(t)) : t;
    if (h.isArrayBuffer(t) || h.isBuffer(t) || h.isStream(t) || h.isFile(t) || h.isBlob(t) || h.isReadableStream(t))
      return t;
    if (h.isArrayBufferView(t))
      return t.buffer;
    if (h.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (c) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ua(t, this.formSerializer).toString();
      if ((l = h.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const E = this.env && this.env.FormData;
        return xr(
          l ? { "files[]": t } : t,
          E && new E(),
          this.formSerializer
        );
      }
    }
    return c || o ? (r.setContentType("application/json", !1), fa(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Zt.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (h.isResponse(t) || h.isReadableStream(t))
      return t;
    if (t && h.isString(t) && (n && !this.responseType || o)) {
      const u = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (u)
          throw l.name === "SyntaxError" ? x.from(l, x.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
  Zt.headers[e] = {};
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
]), ha = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(u) {
    o = u.indexOf(":"), r = u.substring(0, o).trim().toLowerCase(), n = u.substring(o + 1).trim(), !(!r || t[r] && da[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Cs = Symbol("internals");
function Ht(e) {
  return e && String(e).trim().toLowerCase();
}
function Cr(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(Cr) : String(e);
}
function pa(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const ma = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function un(e, t, r, n, o) {
  if (h.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!h.isString(t)) {
    if (h.isString(n))
      return t.indexOf(n) !== -1;
    if (h.isRegExp(n))
      return n.test(t);
  }
}
function ya(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function va(e, t) {
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
class Fe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function c(l, E, y) {
      const m = Ht(E);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const b = h.findKey(o, m);
      (!b || o[b] === void 0 || y === !0 || y === void 0 && o[b] !== !1) && (o[b || E] = Cr(l));
    }
    const u = (l, E) => h.forEach(l, (y, m) => c(y, m, E));
    if (h.isPlainObject(t) || t instanceof this.constructor)
      u(t, r);
    else if (h.isString(t) && (t = t.trim()) && !ma(t))
      u(ha(t), r);
    else if (h.isHeaders(t))
      for (const [l, E] of t.entries())
        c(E, l, n);
    else
      t != null && c(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Ht(t), t) {
      const n = h.findKey(this, t);
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
  has(t, r) {
    if (t = Ht(t), t) {
      const n = h.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || un(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function c(u) {
      if (u = Ht(u), u) {
        const l = h.findKey(n, u);
        l && (!r || un(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return h.isArray(t) ? t.forEach(c) : c(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const c = r[n];
      (!t || un(this, this[c], c, t, !0)) && (delete this[c], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return h.forEach(this, (o, c) => {
      const u = h.findKey(n, c);
      if (u) {
        r[u] = Cr(o), delete r[c];
        return;
      }
      const l = t ? ya(c) : String(c).trim();
      l !== c && delete r[c], r[l] = Cr(o), n[l] = !0;
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
    const n = (this[Cs] = this[Cs] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function c(u) {
      const l = Ht(u);
      n[l] || (va(o, u), n[l] = !0);
    }
    return h.isArray(t) ? t.forEach(c) : c(t), this;
  }
}
Fe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(Fe.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(Fe);
function cn(e, t) {
  const r = this || Zt, n = t || r, o = Fe.from(n.headers);
  let c = n.data;
  return h.forEach(e, function(l) {
    c = l.call(r, c, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), c;
}
function no(e) {
  return !!(e && e.__CANCEL__);
}
function Nt(e, t, r) {
  x.call(this, e ?? "canceled", x.ERR_CANCELED, t, r), this.name = "CanceledError";
}
h.inherits(Nt, x, {
  __CANCEL__: !0
});
function so(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new x(
    "Request failed with status code " + r.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ea(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ba(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, c = 0, u;
  return t = t !== void 0 ? t : 1e3, function(E) {
    const y = Date.now(), m = n[c];
    u || (u = y), r[o] = E, n[o] = y;
    let b = c, U = 0;
    for (; b !== o; )
      U += r[b++], b = b % e;
    if (o = (o + 1) % e, o === c && (c = (c + 1) % e), y - u < t)
      return;
    const F = m && y - m;
    return F ? Math.round(U * 1e3 / F) : void 0;
  };
}
function ga(e, t) {
  let r = 0, n = 1e3 / t, o, c;
  const u = (y, m = Date.now()) => {
    r = m, o = null, c && (clearTimeout(c), c = null), e.apply(null, y);
  };
  return [(...y) => {
    const m = Date.now(), b = m - r;
    b >= n ? u(y, m) : (o = y, c || (c = setTimeout(() => {
      c = null, u(o);
    }, n - b)));
  }, () => o && u(o)];
}
const Tr = (e, t, r = 3) => {
  let n = 0;
  const o = ba(50, 250);
  return ga((c) => {
    const u = c.loaded, l = c.lengthComputable ? c.total : void 0, E = u - n, y = o(E), m = u <= l;
    n = u;
    const b = {
      loaded: u,
      total: l,
      progress: l ? u / l : void 0,
      bytes: E,
      rate: y || void 0,
      estimated: y && l && m ? (l - u) / y : void 0,
      event: c,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(b);
  }, r);
}, Ss = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, ws = (e) => (...t) => h.asap(() => e(...t)), Ra = Pe.hasStandardBrowserEnv ? (
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
), _a = Pe.hasStandardBrowserEnv ? (
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
function Oa(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ca(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function oo(e, t) {
  return e && !Oa(t) ? Ca(e, t) : t;
}
const Ts = (e) => e instanceof Fe ? { ...e } : e;
function gt(e, t) {
  t = t || {};
  const r = {};
  function n(y, m, b) {
    return h.isPlainObject(y) && h.isPlainObject(m) ? h.merge.call({ caseless: b }, y, m) : h.isPlainObject(m) ? h.merge({}, m) : h.isArray(m) ? m.slice() : m;
  }
  function o(y, m, b) {
    if (h.isUndefined(m)) {
      if (!h.isUndefined(y))
        return n(void 0, y, b);
    } else return n(y, m, b);
  }
  function c(y, m) {
    if (!h.isUndefined(m))
      return n(void 0, m);
  }
  function u(y, m) {
    if (h.isUndefined(m)) {
      if (!h.isUndefined(y))
        return n(void 0, y);
    } else return n(void 0, m);
  }
  function l(y, m, b) {
    if (b in t)
      return n(y, m);
    if (b in e)
      return n(void 0, y);
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
    headers: (y, m) => o(Ts(y), Ts(m), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, e, t)), function(m) {
    const b = E[m] || o, U = b(e[m], t[m], m);
    h.isUndefined(U) && b !== l || (r[m] = U);
  }), r;
}
const io = (e) => {
  const t = gt({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: c, headers: u, auth: l } = t;
  t.headers = u = Fe.from(u), t.url = eo(oo(t.baseURL, t.url), e.params, e.paramsSerializer), l && u.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let E;
  if (h.isFormData(r)) {
    if (Pe.hasStandardBrowserEnv || Pe.hasStandardBrowserWebWorkerEnv)
      u.setContentType(void 0);
    else if ((E = u.getContentType()) !== !1) {
      const [y, ...m] = E ? E.split(";").map((b) => b.trim()).filter(Boolean) : [];
      u.setContentType([y || "multipart/form-data", ...m].join("; "));
    }
  }
  if (Pe.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(t)), n || n !== !1 && Ra(t.url))) {
    const y = o && c && _a.read(c);
    y && u.set(o, y);
  }
  return t;
}, Sa = typeof XMLHttpRequest < "u", wa = Sa && function(e) {
  return new Promise(function(r, n) {
    const o = io(e);
    let c = o.data;
    const u = Fe.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: E, onDownloadProgress: y } = o, m, b, U, F, S;
    function A() {
      F && F(), S && S(), o.cancelToken && o.cancelToken.unsubscribe(m), o.signal && o.signal.removeEventListener("abort", m);
    }
    let C = new XMLHttpRequest();
    C.open(o.method.toUpperCase(), o.url, !0), C.timeout = o.timeout;
    function B() {
      if (!C)
        return;
      const Y = Fe.from(
        "getAllResponseHeaders" in C && C.getAllResponseHeaders()
      ), I = {
        data: !l || l === "text" || l === "json" ? C.responseText : C.response,
        status: C.status,
        statusText: C.statusText,
        headers: Y,
        config: e,
        request: C
      };
      so(function(he) {
        r(he), A();
      }, function(he) {
        n(he), A();
      }, I), C = null;
    }
    "onloadend" in C ? C.onloadend = B : C.onreadystatechange = function() {
      !C || C.readyState !== 4 || C.status === 0 && !(C.responseURL && C.responseURL.indexOf("file:") === 0) || setTimeout(B);
    }, C.onabort = function() {
      C && (n(new x("Request aborted", x.ECONNABORTED, e, C)), C = null);
    }, C.onerror = function() {
      n(new x("Network Error", x.ERR_NETWORK, e, C)), C = null;
    }, C.ontimeout = function() {
      let ie = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const I = o.transitional || to;
      o.timeoutErrorMessage && (ie = o.timeoutErrorMessage), n(new x(
        ie,
        I.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        e,
        C
      )), C = null;
    }, c === void 0 && u.setContentType(null), "setRequestHeader" in C && h.forEach(u.toJSON(), function(ie, I) {
      C.setRequestHeader(I, ie);
    }), h.isUndefined(o.withCredentials) || (C.withCredentials = !!o.withCredentials), l && l !== "json" && (C.responseType = o.responseType), y && ([U, S] = Tr(y, !0), C.addEventListener("progress", U)), E && C.upload && ([b, F] = Tr(E), C.upload.addEventListener("progress", b), C.upload.addEventListener("loadend", F)), (o.cancelToken || o.signal) && (m = (Y) => {
      C && (n(!Y || Y.type ? new Nt(null, e, C) : Y), C.abort(), C = null);
    }, o.cancelToken && o.cancelToken.subscribe(m), o.signal && (o.signal.aborted ? m() : o.signal.addEventListener("abort", m)));
    const L = Ea(o.url);
    if (L && Pe.protocols.indexOf(L) === -1) {
      n(new x("Unsupported protocol " + L + ":", x.ERR_BAD_REQUEST, e));
      return;
    }
    C.send(c || null);
  });
}, Ta = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const c = function(y) {
      if (!o) {
        o = !0, l();
        const m = y instanceof Error ? y : this.reason;
        n.abort(m instanceof x ? m : new Nt(m instanceof Error ? m.message : m));
      }
    };
    let u = t && setTimeout(() => {
      u = null, c(new x(`timeout ${t} of ms exceeded`, x.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (u && clearTimeout(u), u = null, e.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(c) : y.removeEventListener("abort", c);
      }), e = null);
    };
    e.forEach((y) => y.addEventListener("abort", c));
    const { signal: E } = n;
    return E.unsubscribe = () => h.asap(l), E;
  }
}, Aa = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, Pa = async function* (e, t) {
  for await (const r of Fa(e))
    yield* Aa(r, t);
}, Fa = async function* (e) {
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
}, As = (e, t, r, n) => {
  const o = Pa(e, t);
  let c = 0, u, l = (E) => {
    u || (u = !0, n && n(E));
  };
  return new ReadableStream({
    async pull(E) {
      try {
        const { done: y, value: m } = await o.next();
        if (y) {
          l(), E.close();
          return;
        }
        let b = m.byteLength;
        if (r) {
          let U = c += b;
          r(U);
        }
        E.enqueue(new Uint8Array(m));
      } catch (y) {
        throw l(y), y;
      }
    },
    cancel(E) {
      return l(E), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ur = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ao = Ur && typeof ReadableStream == "function", Da = Ur && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), uo = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, La = ao && uo(() => {
  let e = !1;
  const t = new Request(Pe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ps = 64 * 1024, wn = ao && uo(() => h.isReadableStream(new Response("").body)), Ar = {
  stream: wn && ((e) => e.body)
};
Ur && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ar[t] && (Ar[t] = h.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new x(`Response type '${t}' is not supported`, x.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const ka = async (e) => {
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
    return (await Da(e)).byteLength;
}, xa = async (e, t) => {
  const r = h.toFiniteNumber(e.getContentLength());
  return r ?? ka(t);
}, Ua = Ur && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: o,
    cancelToken: c,
    timeout: u,
    onDownloadProgress: l,
    onUploadProgress: E,
    responseType: y,
    headers: m,
    withCredentials: b = "same-origin",
    fetchOptions: U
  } = io(e);
  y = y ? (y + "").toLowerCase() : "text";
  let F = Ta([o, c && c.toAbortSignal()], u), S;
  const A = F && F.unsubscribe && (() => {
    F.unsubscribe();
  });
  let C;
  try {
    if (E && La && r !== "get" && r !== "head" && (C = await xa(m, n)) !== 0) {
      let I = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), se;
      if (h.isFormData(n) && (se = I.headers.get("content-type")) && m.setContentType(se), I.body) {
        const [he, Z] = Ss(
          C,
          Tr(ws(E))
        );
        n = As(I.body, Ps, he, Z);
      }
    }
    h.isString(b) || (b = b ? "include" : "omit");
    const B = "credentials" in Request.prototype;
    S = new Request(t, {
      ...U,
      signal: F,
      method: r.toUpperCase(),
      headers: m.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: B ? b : void 0
    });
    let L = await fetch(S);
    const Y = wn && (y === "stream" || y === "response");
    if (wn && (l || Y && A)) {
      const I = {};
      ["status", "statusText", "headers"].forEach((Ce) => {
        I[Ce] = L[Ce];
      });
      const se = h.toFiniteNumber(L.headers.get("content-length")), [he, Z] = l && Ss(
        se,
        Tr(ws(l), !0)
      ) || [];
      L = new Response(
        As(L.body, Ps, he, () => {
          Z && Z(), A && A();
        }),
        I
      );
    }
    y = y || "text";
    let ie = await Ar[h.findKey(Ar, y) || "text"](L, e);
    return !Y && A && A(), await new Promise((I, se) => {
      so(I, se, {
        data: ie,
        headers: Fe.from(L.headers),
        status: L.status,
        statusText: L.statusText,
        config: e,
        request: S
      });
    });
  } catch (B) {
    throw A && A(), B && B.name === "TypeError" && /fetch/i.test(B.message) ? Object.assign(
      new x("Network Error", x.ERR_NETWORK, e, S),
      {
        cause: B.cause || B
      }
    ) : x.from(B, B && B.code, e, S);
  }
}), Tn = {
  http: Ji,
  xhr: wa,
  fetch: Ua
};
h.forEach(Tn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Fs = (e) => `- ${e}`, Ia = (e) => h.isFunction(e) || e === null || e === !1, co = {
  getAdapter: (e) => {
    e = h.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let c = 0; c < t; c++) {
      r = e[c];
      let u;
      if (n = r, !Ia(r) && (n = Tn[(u = String(r)).toLowerCase()], n === void 0))
        throw new x(`Unknown adapter '${u}'`);
      if (n)
        break;
      o[u || "#" + c] = n;
    }
    if (!n) {
      const c = Object.entries(o).map(
        ([l, E]) => `adapter ${l} ` + (E === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let u = t ? c.length > 1 ? `since :
` + c.map(Fs).join(`
`) : " " + Fs(c[0]) : "as no adapter specified";
      throw new x(
        "There is no suitable adapter to dispatch the request " + u,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Tn
};
function ln(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Nt(null, e);
}
function Ds(e) {
  return ln(e), e.headers = Fe.from(e.headers), e.data = cn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), co.getAdapter(e.adapter || Zt.adapter)(e).then(function(n) {
    return ln(e), n.data = cn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Fe.from(n.headers), n;
  }, function(n) {
    return no(n) || (ln(e), n && n.response && (n.response.data = cn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Fe.from(n.response.headers))), Promise.reject(n);
  });
}
const lo = "1.7.7", Un = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Un[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ls = {};
Un.transitional = function(t, r, n) {
  function o(c, u) {
    return "[Axios v" + lo + "] Transitional option '" + c + "'" + u + (n ? ". " + n : "");
  }
  return (c, u, l) => {
    if (t === !1)
      throw new x(
        o(u, " has been removed" + (r ? " in " + r : "")),
        x.ERR_DEPRECATED
      );
    return r && !Ls[u] && (Ls[u] = !0, console.warn(
      o(
        u,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(c, u, l) : !0;
  };
};
function Na(e, t, r) {
  if (typeof e != "object")
    throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const c = n[o], u = t[c];
    if (u) {
      const l = e[c], E = l === void 0 || u(l, c, e);
      if (E !== !0)
        throw new x("option " + c + " must be " + E, x.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new x("Unknown option " + c, x.ERR_BAD_OPTION);
  }
}
const An = {
  assertOptions: Na,
  validators: Un
}, Ze = An.validators;
class bt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Os(),
      response: new Os()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = gt(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: c } = r;
    n !== void 0 && An.assertOptions(n, {
      silentJSONParsing: Ze.transitional(Ze.boolean),
      forcedJSONParsing: Ze.transitional(Ze.boolean),
      clarifyTimeoutError: Ze.transitional(Ze.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : An.assertOptions(o, {
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
    ), r.headers = Fe.concat(u, c);
    const l = [];
    let E = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(r) === !1 || (E = E && A.synchronous, l.unshift(A.fulfilled, A.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(A) {
      y.push(A.fulfilled, A.rejected);
    });
    let m, b = 0, U;
    if (!E) {
      const S = [Ds.bind(this), void 0];
      for (S.unshift.apply(S, l), S.push.apply(S, y), U = S.length, m = Promise.resolve(r); b < U; )
        m = m.then(S[b++], S[b++]);
      return m;
    }
    U = l.length;
    let F = r;
    for (b = 0; b < U; ) {
      const S = l[b++], A = l[b++];
      try {
        F = S(F);
      } catch (C) {
        A.call(this, C);
        break;
      }
    }
    try {
      m = Ds.call(this, F);
    } catch (S) {
      return Promise.reject(S);
    }
    for (b = 0, U = y.length; b < U; )
      m = m.then(y[b++], y[b++]);
    return m;
  }
  getUri(t) {
    t = gt(this.defaults, t);
    const r = oo(t.baseURL, t.url);
    return eo(r, t.params, t.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(t) {
  bt.prototype[t] = function(r, n) {
    return this.request(gt(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(c, u, l) {
      return this.request(gt(l || {}, {
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
class In {
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
      token: new In(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function ja(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Ma(e) {
  return h.isObject(e) && e.isAxiosError === !0;
}
const Pn = {
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
Object.entries(Pn).forEach(([e, t]) => {
  Pn[t] = e;
});
function fo(e) {
  const t = new bt(e), r = Gs(bt.prototype.request, t);
  return h.extend(r, bt.prototype, t, { allOwnKeys: !0 }), h.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return fo(gt(e, o));
  }, r;
}
const de = fo(Zt);
de.Axios = bt;
de.CanceledError = Nt;
de.CancelToken = In;
de.isCancel = no;
de.VERSION = lo;
de.toFormData = xr;
de.AxiosError = x;
de.Cancel = de.CanceledError;
de.all = function(t) {
  return Promise.all(t);
};
de.spread = ja;
de.isAxiosError = Ma;
de.mergeConfig = gt;
de.AxiosHeaders = Fe;
de.formToJSON = (e) => ro(h.isHTMLForm(e) ? new FormData(e) : e);
de.getAdapter = co.getAdapter;
de.HttpStatusCode = Pn;
de.default = de;
const Ba = {
  //Authentication
  BASE_URL: "ec2-13-234-20-64.ap-south-1.compute.amazonaws.com:80"
}, We = de.create({
  baseURL: Ba.BASE_URL,
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "multipart/form-data"
  }
}), $a = () => localStorage.getItem("access_token"), Ga = () => localStorage.getItem("refresh_token");
We.interceptors.request.use(
  (e) => {
    const t = $a();
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
We.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config;
    if (e.response && e.response.status === 401 && !t._retry) {
      t._retry = !0;
      const r = Ga();
      if (r)
        try {
          const { data: n } = await de.post("https://7759-182-156-141-17.ngrok-free.app/auth/refresh-token", {
            refreshToken: r
          });
          return localStorage.setItem("accessToken", n.accessToken), t.headers.Authorization = `Bearer ${n.accessToken}`, We(t);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(e);
  }
);
function At(e) {
  var t;
  if (de.isAxiosError(e)) {
    const r = ((t = e.response) == null ? void 0 : t.data) || {
      message: "An error occurred. Try after some time."
    };
    throw new Error(r.message);
  } else
    throw new Error("Unknown error occurred");
}
class er {
  // Create a new Data
  async createData(t, r) {
    try {
      const n = await We.post(t, r);
      return console.log(n.data), n.data;
    } catch (n) {
      At(n);
    }
  }
  // Get all Data
  async getData(t) {
    try {
      return (await We.get(t)).data.data;
    } catch (r) {
      At(r);
    }
  }
  // Get an Data by ID
  async getDataById(t, r) {
    try {
      const n = await We.get(`${t}/${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      At(n);
    }
  }
  // Update a data by ID
  async updateData(t, r, n) {
    try {
      const o = await We.patch(`${t}/${r}`, n);
      return console.log(o.data), o.data;
    } catch (o) {
      At(o);
    }
  }
  // Delete an Data by ID
  async deleteData(t, r) {
    try {
      const n = await We.delete(`${t}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      At(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(t, r) {
    try {
      const n = await We.patch(`${t}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      At(n);
    }
  }
}
const Le = (e) => {
  const t = new er();
  return Dn({ mutationFn: (r) => t.createData(e, r) });
}, Va = (e) => {
  const t = new er();
  return Dn({ mutationFn: (r) => t.deleteData(e, r) });
}, ge = (e, t) => {
  const r = new er();
  return $s({ queryKey: t, queryFn: () => r.getData(e) });
}, ke = (e, t, r) => {
  const n = new er();
  return $s({ queryKey: r, queryFn: () => n.getDataById(e, t) });
}, Ie = (e, t) => {
  const r = new er();
  return Dn({ mutationFn: (n) => r.updateData(e, t, n) });
}, Ja = (e) => Le(e), Qa = (e) => ge(e, ["getAllEmployees"]), Xa = (e, t) => ke(e, t, ["getEmployee"]), Za = (e, t) => Ie(e, t), eu = (e) => ge(e, ["getAllRoles"]), tu = (e) => Le(e), ru = (e) => Va(e), nu = (e) => ge(e, ["getAllCustomers"]), su = (e) => ge(e, ["getAllCustomerCategories"]), ou = (e) => ge(e, ["getAllCustomerTypes"]), iu = (e, t) => ke(e, t, ["getCustomer"]), au = (e, t) => Ie(e, t), uu = (e) => Le(e), cu = (e) => ge(e, ["getFarmers"]), lu = (e, t) => ke(e, t, ["getFarmer"]), fu = (e, t) => Ie(e, t), du = (e) => Le(e), hu = (e) => ge(e, ["getAllVendors"]), pu = (e) => ge(e, ["getAllVendorCat"]), mu = (e) => ge(e, ["getVendor"]), yu = (e, t) => ke(e, t, ["getVendor"]), vu = (e) => Le(e), Eu = (e) => ge(e, ["getProducts"]), bu = (e, t) => ke(e, t, ["getAProduct"]), gu = (e, t) => Ie(e, t), Ru = (e) => Le(e), _u = (e, t) => ke(e, t, ["getAProductClassification"]), Ou = (e) => ge(e, ["getProductsClassification"]), Cu = (e, t) => Ie(e, t), Su = (e) => Le(e), wu = (e, t) => ke(e, t, ["getAProductCategory"]), Tu = (e) => ge(e, ["getProductCat"]), Au = (e, t) => Ie(e, t), Pu = (e) => Le(e), Fu = (e, t) => ke(e, t, ["getAProductSubcategory"]), Du = (e) => ge(e, ["getProductSubcat"]), Lu = (e, t) => Ie(e, t), ku = (e) => Le(e), xu = (e) => ge(e, ["getUOMs"]), Uu = (e, t) => ke(e, t, ["getAUOM"]), Iu = (e, t) => Ie(e, t), Nu = (e) => Le(e), ju = (e) => ge(e, ["getUOMConversionMatrixs"]), Mu = (e, t) => ke(e, t, ["getAUOMConversionMatrix"]), Bu = (e, t) => Ie(e, t), $u = (e) => Le(e), Gu = (e, t) => ke(e, t, ["getABranch"]), Vu = (e) => ge(e, ["getAllBranches"]), qu = (e, t) => Ie(e, t), Wu = (e) => Le(e), Hu = (e, t) => ke(e, t, ["getAOffice"]), zu = (e) => ge(e, ["getAllOffices"]), Yu = (e, t) => Ie(e, t);
var qa = /* @__PURE__ */ ((e) => (e[e.COLLECTION_CENTER = 0] = "COLLECTION_CENTER", e[e.DISTRIBUTION_CENTER = 1] = "DISTRIBUTION_CENTER", e[e.SEASONAL_COLLECTION_CENTER = 2] = "SEASONAL_COLLECTION_CENTER", e[e.WAREHOUSE = 3] = "WAREHOUSE", e))(qa || {}), Wa = /* @__PURE__ */ ((e) => (e[e.REGISTERED_OFFICE = 0] = "REGISTERED_OFFICE", e[e.CORPORATE_OFFICE = 1] = "CORPORATE_OFFICE", e))(Wa || {}), Ha = /* @__PURE__ */ ((e) => (e.OWNED = "Owned", e.LEASED = "Leased", e.SHARED = "Shared", e.ENCUMBERED = "Encumbered", e))(Ha || {}), za = /* @__PURE__ */ ((e) => (e.CULTIVABLE = "Cultivable", e.FALLOW = "Fallow", e.IRRIGATED = "Irrigated", e.NON_IRRIGATED = "Non-Irrigated", e))(za || {});
export {
  Ka as ADMIN_API_URL,
  qa as BranchType,
  Ha as LandHoldingStatus,
  za as LandStatus,
  Wa as OfficeType,
  $u as useCreateBranches,
  tu as useCreateCustomer,
  Ja as useCreateEmployee,
  uu as useCreateFarmer,
  Wu as useCreateOffice,
  vu as useCreateProduct,
  Su as useCreateProductCat,
  Ru as useCreateProductClassification,
  Pu as useCreateProductSubcat,
  ku as useCreateUOM,
  Nu as useCreateUOMConversionMatrix,
  du as useCreateVendor,
  ru as useDeleteCustomer,
  Gu as useGetABranch,
  Hu as useGetAOffice,
  bu as useGetAProduct,
  wu as useGetAProductCat,
  _u as useGetAProductClassification,
  Fu as useGetAProductSubcat,
  Uu as useGetAUOM,
  Mu as useGetAUOMConversionMatrixs,
  Vu as useGetAllBranches,
  su as useGetAllCustomerCategories,
  ou as useGetAllCustomerTypes,
  nu as useGetAllCustomers,
  Qa as useGetAllEmployee,
  cu as useGetAllFarmers,
  zu as useGetAllOffices,
  Ou as useGetAllProductClassification,
  Du as useGetAllProductSubCat,
  Eu as useGetAllProducts,
  Tu as useGetAllProductsCat,
  eu as useGetAllRoles,
  ju as useGetAllUOMConversionMatrixs,
  xu as useGetAllUOMs,
  pu as useGetAllVendorCat,
  mu as useGetAllVendorSubCat,
  hu as useGetAllVendors,
  iu as useGetCustomer,
  Xa as useGetEmployee,
  lu as useGetFarmer,
  yu as useGetVendor,
  qu as useUpdateBranch,
  au as useUpdateCustomer,
  Za as useUpdateEmployee,
  fu as useUpdateFarmer,
  Yu as useUpdateOffice,
  gu as useUpdateProduct,
  Au as useUpdateProductCat,
  Cu as useUpdateProductClassification,
  Lu as useUpdateProductSubcat,
  Iu as useUpdateUOM,
  Bu as useUpdateUOMConversionMatrixs
};
