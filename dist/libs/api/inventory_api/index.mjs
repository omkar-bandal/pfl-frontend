var is = (t) => {
  throw TypeError(t);
};
var on = (t, e, r) => e.has(t) || is("Cannot " + r);
var v = (t, e, r) => (on(t, e, "read from private field"), r ? r.call(t) : e.get(t)), re = (t, e, r) => e.has(t) ? is("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), U = (t, e, r, n) => (on(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), oe = (t, e, r) => (on(t, e, "access private method"), r);
const Wa = {
  //Inward Register
  GET_ALL_INWARD_REGISTERS: "/inwardRegister",
  GET_A_INWARD_REGISTER: "/inwardRegister",
  POST_INWARD_REGISTER: "/inwardRegister",
  UPDATE_INWARD_REGISTER: "/inwardRegister",
  //Arrival Quality Report
  GET_ALL_AQR: "/aqr/",
  GET_A_AQR: "/aqr",
  POST_AQR: "/aqr/",
  UPDATE_AQR: "/aqr",
  //Dump Register
  GET_ALL_DUMP_REGISTERS: "/dumpRegister/",
  GET_A_DUMP_REGISTER: "/dumpRegister",
  POST_DUMP_REGISTER: "/dumpRegister/",
  UPDATE_DUMP_REGISTER: "/dumpRegister",
  //Labor Registration
  GET_ALL_REGISTERED_LABORS: "/labors/",
  GET_A_REGISTERED_LABOR: "/labors",
  POST_LABOR_REGISTRATION: "/labors/",
  UPDATE_REGISTERED_LABOR: "/labors",
  //Labor Attendance
  GET_ALL_LABOR_ATTENDANCE: "/laborAttendances/",
  GET_A_LABOR_ATTENDANCE: "/laborAttendances",
  POST_LABOR_ATTENDANCE: "/laborAttendances/",
  UPDATE_LABOR_ATTENDANCE: "/laborAttendances",
  //Vehicle Dispatch Register
  GET_ALL_VEHICLE_DISPATCH_REGISTERS: "/vehicleDispatches/",
  GET_A_VEHICLE_DISPATCH_REGISTER: "/vehicleDispatches",
  POST_VEHICLE_DISPATCH_REGISTER: "/vehicleDispatches/",
  UPDATE_VEHICLE_DISPATCH_REGISTER: "/vehicleDispatches",
  //Second Sale Register
  GET_ALL_SECOND_SALE_REGISTERS: "/secondSales/",
  GET_A_SECOND_SALE_REGISTER: "/secondSales",
  POST_SECOND_SALE_REGISTER: "/secondSales/",
  UPDATE_SECOND_SALE_REGISTER: "/secondSales",
  //EOD Report 
  GET_ALL_EOD_REPORT: "/eodStock/",
  GET_A_EOD_REPORT: "/eodStock",
  POST_EOD_REPORT: "/eodStock/",
  UPDATE_EOD_REPORT: "/eodStock"
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
}, wr = typeof window > "u" || "Deno" in globalThis;
function jo() {
}
function as(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Io(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Er(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ne(t, e) {
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
var mt, Je, Pt, xs, No = (xs = class extends Ar {
  constructor() {
    super();
    re(this, mt);
    re(this, Je);
    re(this, Pt);
    U(this, Pt, (e) => {
      if (!wr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Je) || this.setEventListener(v(this, Pt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, Je)) == null || e.call(this), U(this, Je, void 0));
  }
  setEventListener(e) {
    var r;
    U(this, Pt, e), (r = v(this, Je)) == null || r.call(this), U(this, Je, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    v(this, mt) !== e && (U(this, mt, e), this.onFocus());
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
}, mt = new WeakMap(), Je = new WeakMap(), Pt = new WeakMap(), xs), Uo = new No(), Dt, Qe, kt, Ls, Bo = (Ls = class extends Ar {
  constructor() {
    super();
    re(this, Dt, !0);
    re(this, Qe);
    re(this, kt);
    U(this, kt, (e) => {
      if (!wr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Qe) || this.setEventListener(v(this, kt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = v(this, Qe)) == null || e.call(this), U(this, Qe, void 0));
  }
  setEventListener(e) {
    var r;
    U(this, kt, e), (r = v(this, Qe)) == null || r.call(this), U(this, Qe, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    v(this, Dt) !== e && (U(this, Dt, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return v(this, Dt);
  }
}, Dt = new WeakMap(), Qe = new WeakMap(), kt = new WeakMap(), Ls), Mo = new Bo();
function $o(t) {
  return (t ?? "online") === "online" ? Mo.isOnline() : !0;
}
function qo() {
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
var Pr = qo();
function Vo(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: $o(e.networkMode) ? "fetching" : "paused",
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
var Te, W, Jt, _e, vt, xt, Ie, Qt, Lt, Ft, bt, gt, Xe, jt, K, zt, hn, pn, yn, mn, vn, bn, gn, Is, Fs, Go = (Fs = class extends Ar {
  constructor(e, r) {
    super();
    re(this, K);
    re(this, Te);
    re(this, W);
    re(this, Jt);
    re(this, _e);
    re(this, vt);
    re(this, xt);
    re(this, Ie);
    re(this, Qt);
    re(this, Lt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    re(this, Ft);
    re(this, bt);
    re(this, gt);
    re(this, Xe);
    re(this, jt, /* @__PURE__ */ new Set());
    this.options = r, U(this, Te, e), U(this, Ie, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, W).addObserver(this), ds(v(this, W), this.options) ? oe(this, K, zt).call(this) : this.updateResult(), oe(this, K, mn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return En(
      v(this, W),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return En(
      v(this, W),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, K, vn).call(this), oe(this, K, bn).call(this), v(this, W).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, o = v(this, W);
    if (this.options = v(this, Te).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Ne(this.options.enabled, v(this, W)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, K, gn).call(this), v(this, W).setOptions(this.options), n._defaulted && !Or(this.options, n) && v(this, Te).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, W),
      observer: this
    });
    const c = this.hasListeners();
    c && hs(
      v(this, W),
      o,
      this.options,
      n
    ) && oe(this, K, zt).call(this), this.updateResult(r), c && (v(this, W) !== o || Ne(this.options.enabled, v(this, W)) !== Ne(n.enabled, v(this, W)) || Er(this.options.staleTime, v(this, W)) !== Er(n.staleTime, v(this, W))) && oe(this, K, hn).call(this);
    const u = oe(this, K, pn).call(this);
    c && (v(this, W) !== o || Ne(this.options.enabled, v(this, W)) !== Ne(n.enabled, v(this, W)) || u !== v(this, Xe)) && oe(this, K, yn).call(this, u);
  }
  getOptimisticResult(e) {
    const r = v(this, Te).getQueryCache().build(v(this, Te), e), n = this.createResult(r, e);
    return zo(this, n) && (U(this, _e, n), U(this, xt, this.options), U(this, vt, v(this, W).state)), n;
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
    v(this, jt).add(e);
  }
  getCurrentQuery() {
    return v(this, W);
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
    return oe(this, K, zt).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), v(this, _e)));
  }
  createResult(e, r) {
    var he;
    const n = v(this, W), o = this.options, c = v(this, _e), u = v(this, vt), l = v(this, xt), m = e !== n ? e.state : v(this, Jt), { state: y } = e;
    let g = { ...y }, j = !1, D;
    if (r._optimisticResults) {
      const Z = this.hasListeners(), Se = !Z && ds(e, r), Ue = Z && hs(e, n, r, o);
      (Se || Ue) && (g = {
        ...g,
        ...Vo(y.data, e.options)
      }), r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: O, errorUpdatedAt: A, status: w } = g;
    if (r.select && g.data !== void 0)
      if (c && g.data === (u == null ? void 0 : u.data) && r.select === v(this, Qt))
        D = v(this, Lt);
      else
        try {
          U(this, Qt, r.select), D = r.select(g.data), D = fs(c == null ? void 0 : c.data, D, r), U(this, Lt, D), U(this, Ie, null);
        } catch (Z) {
          U(this, Ie, Z);
        }
    else
      D = g.data;
    if (r.placeholderData !== void 0 && D === void 0 && w === "pending") {
      let Z;
      if (c != null && c.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        Z = c.data;
      else if (Z = typeof r.placeholderData == "function" ? r.placeholderData(
        (he = v(this, Ft)) == null ? void 0 : he.state.data,
        v(this, Ft)
      ) : r.placeholderData, r.select && Z !== void 0)
        try {
          Z = r.select(Z), U(this, Ie, null);
        } catch (Se) {
          U(this, Ie, Se);
        }
      Z !== void 0 && (w = "success", D = fs(
        c == null ? void 0 : c.data,
        Z,
        r
      ), j = !0);
    }
    v(this, Ie) && (O = v(this, Ie), D = v(this, Lt), A = Date.now(), w = "error");
    const M = g.fetchStatus === "fetching", x = w === "pending", Y = w === "error", ie = x && M, I = D !== void 0;
    return {
      status: w,
      fetchStatus: g.fetchStatus,
      isPending: x,
      isSuccess: w === "success",
      isError: Y,
      isInitialLoading: ie,
      isLoading: ie,
      data: D,
      dataUpdatedAt: g.dataUpdatedAt,
      error: O,
      errorUpdatedAt: A,
      failureCount: g.fetchFailureCount,
      failureReason: g.fetchFailureReason,
      errorUpdateCount: g.errorUpdateCount,
      isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
      isFetchedAfterMount: g.dataUpdateCount > m.dataUpdateCount || g.errorUpdateCount > m.errorUpdateCount,
      isFetching: M,
      isRefetching: M && !x,
      isLoadingError: Y && !I,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: j,
      isRefetchError: Y && I,
      isStale: Dn(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = v(this, _e), n = this.createResult(v(this, W), this.options);
    if (U(this, vt, v(this, W).state), U(this, xt, this.options), v(this, vt).data !== void 0 && U(this, Ft, v(this, W)), Or(n, r))
      return;
    U(this, _e, n);
    const o = {}, c = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: u } = this.options, l = typeof u == "function" ? u() : u;
      if (l === "all" || !l && !v(this, jt).size)
        return !0;
      const b = new Set(
        l ?? v(this, jt)
      );
      return this.options.throwOnError && b.add("error"), Object.keys(v(this, _e)).some((m) => {
        const y = m;
        return v(this, _e)[y] !== r[y] && b.has(y);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && c() && (o.listeners = !0), oe(this, K, Is).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, K, mn).call(this);
  }
}, Te = new WeakMap(), W = new WeakMap(), Jt = new WeakMap(), _e = new WeakMap(), vt = new WeakMap(), xt = new WeakMap(), Ie = new WeakMap(), Qt = new WeakMap(), Lt = new WeakMap(), Ft = new WeakMap(), bt = new WeakMap(), gt = new WeakMap(), Xe = new WeakMap(), jt = new WeakMap(), K = new WeakSet(), zt = function(e) {
  oe(this, K, gn).call(this);
  let r = v(this, W).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(jo)), r;
}, hn = function() {
  oe(this, K, vn).call(this);
  const e = Er(
    this.options.staleTime,
    v(this, W)
  );
  if (wr || v(this, _e).isStale || !as(e))
    return;
  const n = Io(v(this, _e).dataUpdatedAt, e) + 1;
  U(this, bt, setTimeout(() => {
    v(this, _e).isStale || this.updateResult();
  }, n));
}, pn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, W)) : this.options.refetchInterval) ?? !1;
}, yn = function(e) {
  oe(this, K, bn).call(this), U(this, Xe, e), !(wr || Ne(this.options.enabled, v(this, W)) === !1 || !as(v(this, Xe)) || v(this, Xe) === 0) && U(this, gt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Uo.isFocused()) && oe(this, K, zt).call(this);
  }, v(this, Xe)));
}, mn = function() {
  oe(this, K, hn).call(this), oe(this, K, yn).call(this, oe(this, K, pn).call(this));
}, vn = function() {
  v(this, bt) && (clearTimeout(v(this, bt)), U(this, bt, void 0));
}, bn = function() {
  v(this, gt) && (clearInterval(v(this, gt)), U(this, gt, void 0));
}, gn = function() {
  const e = v(this, Te).getQueryCache().build(v(this, Te), this.options);
  if (e === v(this, W))
    return;
  const r = v(this, W);
  U(this, W, e), U(this, Jt, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, Is = function(e) {
  Pr.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(v(this, _e));
    }), v(this, Te).getQueryCache().notify({
      query: v(this, W),
      type: "observerResultsUpdated"
    });
  });
}, Fs);
function Ho(t, e) {
  return Ne(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function ds(t, e) {
  return Ho(t, e) || t.state.data !== void 0 && En(t, e, e.refetchOnMount);
}
function En(t, e, r) {
  if (Ne(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && Dn(t, e);
  }
  return !1;
}
function hs(t, e, r, n) {
  return (t !== e || Ne(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && Dn(t, r);
}
function Dn(t, e) {
  return Ne(e.enabled, t) !== !1 && t.isStaleByTime(Er(e.staleTime, t));
}
function zo(t, e) {
  return !Or(t.getCurrentResult(), e);
}
var Ze, et, Ce, qe, Ve, Rr, Rn, js, Yo = (js = class extends Ar {
  constructor(e, r) {
    super();
    re(this, Ve);
    re(this, Ze);
    re(this, et);
    re(this, Ce);
    re(this, qe);
    U(this, Ze, e), this.setOptions(r), this.bindMethods(), oe(this, Ve, Rr).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = v(this, Ze).defaultMutationOptions(e), Or(this.options, r) || v(this, Ze).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: v(this, Ce),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && us(r.mutationKey) !== us(this.options.mutationKey) ? this.reset() : ((n = v(this, Ce)) == null ? void 0 : n.state.status) === "pending" && v(this, Ce).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = v(this, Ce)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    oe(this, Ve, Rr).call(this), oe(this, Ve, Rn).call(this, e);
  }
  getCurrentResult() {
    return v(this, et);
  }
  reset() {
    var e;
    (e = v(this, Ce)) == null || e.removeObserver(this), U(this, Ce, void 0), oe(this, Ve, Rr).call(this), oe(this, Ve, Rn).call(this);
  }
  mutate(e, r) {
    var n;
    return U(this, qe, r), (n = v(this, Ce)) == null || n.removeObserver(this), U(this, Ce, v(this, Ze).getMutationCache().build(v(this, Ze), this.options)), v(this, Ce).addObserver(this), v(this, Ce).execute(e);
  }
}, Ze = new WeakMap(), et = new WeakMap(), Ce = new WeakMap(), qe = new WeakMap(), Ve = new WeakSet(), Rr = function() {
  var r;
  const e = ((r = v(this, Ce)) == null ? void 0 : r.state) ?? Wo();
  U(this, et, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Rn = function(e) {
  Pr.batch(() => {
    var r, n, o, c, u, l, b, m;
    if (v(this, qe) && this.hasListeners()) {
      const y = v(this, et).variables, g = v(this, et).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = v(this, qe)).onSuccess) == null || n.call(r, e.data, y, g), (c = (o = v(this, qe)).onSettled) == null || c.call(o, e.data, null, y, g)) : (e == null ? void 0 : e.type) === "error" && ((l = (u = v(this, qe)).onError) == null || l.call(u, e.error, y, g), (m = (b = v(this, qe)).onSettled) == null || m.call(
        b,
        void 0,
        e.error,
        y,
        g
      ));
    }
    this.listeners.forEach((y) => {
      y(v(this, et));
    });
  });
}, js), _n = { exports: {} }, B = {};
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
  if (ps) return B;
  ps = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), g = Symbol.iterator;
  function j(f) {
    return f === null || typeof f != "object" ? null : (f = g && f[g] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var D = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, A = {};
  function w(f, R, $) {
    this.props = f, this.context = R, this.refs = A, this.updater = $ || D;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(f, R) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, R, "setState");
  }, w.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function M() {
  }
  M.prototype = w.prototype;
  function x(f, R, $) {
    this.props = f, this.context = R, this.refs = A, this.updater = $ || D;
  }
  var Y = x.prototype = new M();
  Y.constructor = x, O(Y, w.prototype), Y.isPureReactComponent = !0;
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
    return { $$typeof: t, type: f, key: ne, ref: ee, props: H, _owner: se.current };
  }
  function Se(f, R) {
    return { $$typeof: t, type: f.type, key: R, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Ue(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }
  function Ut(f) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function($) {
      return R[$];
    });
  }
  var ot = /\/+/g;
  function Ee(f, R) {
    return typeof f == "object" && f !== null && f.key != null ? Ut("" + f.key) : R.toString(36);
  }
  function we(f, R, $, V, H) {
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
    if (ee) return ee = f, H = H(ee), f = V === "" ? "." + Ee(ee, 0) : V, ie(H) ? ($ = "", f != null && ($ = f.replace(ot, "$&/") + "/"), we(H, R, $, "", function(pe) {
      return pe;
    })) : H != null && (Ue(H) && (H = Se(H, $ + (!H.key || ee && ee.key === H.key ? "" : ("" + H.key).replace(ot, "$&/") + "/") + f)), R.push(H)), 1;
    if (ee = 0, V = V === "" ? "." : V + ":", ie(f)) for (var X = 0; X < f.length; X++) {
      ne = f[X];
      var J = V + Ee(ne, X);
      ee += we(ne, R, $, J, H);
    }
    else if (J = j(f), typeof J == "function") for (f = J.call(f), X = 0; !(ne = f.next()).done; ) ne = ne.value, J = V + Ee(ne, X++), ee += we(ne, R, $, J, H);
    else if (ne === "object") throw R = String(f), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return ee;
  }
  function ve(f, R, $) {
    if (f == null) return f;
    var V = [], H = 0;
    return we(f, V, "", "", function(ne) {
      return R.call($, ne, H++);
    }), V;
  }
  function ke(f) {
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
  var C = { current: null }, Le = { transition: null }, it = { ReactCurrentDispatcher: C, ReactCurrentBatchConfig: Le, ReactCurrentOwner: se };
  function Be() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return B.Children = { map: ve, forEach: function(f, R, $) {
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
    if (!Ue(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, B.Component = w, B.Fragment = r, B.Profiler = o, B.PureComponent = x, B.StrictMode = n, B.Suspense = b, B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = it, B.act = Be, B.cloneElement = function(f, R, $) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var V = O({}, f.props), H = f.key, ne = f.ref, ee = f._owner;
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
    return { $$typeof: t, type: f.type, key: H, ref: ne, props: V, _owner: ee };
  }, B.createContext = function(f) {
    return f = { $$typeof: u, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: c, _context: f }, f.Consumer = f;
  }, B.createElement = Z, B.createFactory = function(f) {
    var R = Z.bind(null, f);
    return R.type = f, R;
  }, B.createRef = function() {
    return { current: null };
  }, B.forwardRef = function(f) {
    return { $$typeof: l, render: f };
  }, B.isValidElement = Ue, B.lazy = function(f) {
    return { $$typeof: y, _payload: { _status: -1, _result: f }, _init: ke };
  }, B.memo = function(f, R) {
    return { $$typeof: m, type: f, compare: R === void 0 ? null : R };
  }, B.startTransition = function(f) {
    var R = Le.transition;
    Le.transition = {};
    try {
      f();
    } finally {
      Le.transition = R;
    }
  }, B.unstable_act = Be, B.useCallback = function(f, R) {
    return C.current.useCallback(f, R);
  }, B.useContext = function(f) {
    return C.current.useContext(f);
  }, B.useDebugValue = function() {
  }, B.useDeferredValue = function(f) {
    return C.current.useDeferredValue(f);
  }, B.useEffect = function(f, R) {
    return C.current.useEffect(f, R);
  }, B.useId = function() {
    return C.current.useId();
  }, B.useImperativeHandle = function(f, R, $) {
    return C.current.useImperativeHandle(f, R, $);
  }, B.useInsertionEffect = function(f, R) {
    return C.current.useInsertionEffect(f, R);
  }, B.useLayoutEffect = function(f, R) {
    return C.current.useLayoutEffect(f, R);
  }, B.useMemo = function(f, R) {
    return C.current.useMemo(f, R);
  }, B.useReducer = function(f, R, $) {
    return C.current.useReducer(f, R, $);
  }, B.useRef = function(f) {
    return C.current.useRef(f);
  }, B.useState = function(f) {
    return C.current.useState(f);
  }, B.useSyncExternalStore = function(f, R, $) {
    return C.current.useSyncExternalStore(f, R, $);
  }, B.useTransition = function() {
    return C.current.useTransition();
  }, B.version = "18.3.1", B;
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
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), w = Symbol.iterator, M = "@@iterator";
      function x(s) {
        if (s === null || typeof s != "object")
          return null;
        var i = w && s[w] || s[M];
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
      function Se(s) {
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
      var Ue = !1, Ut = !1, ot = !1, Ee = !1, we = !1, ve = {
        ReactCurrentDispatcher: Y,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: se
      };
      ve.ReactDebugCurrentFrame = he, ve.ReactCurrentActQueue = I;
      function ke(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          Le("warn", s, d);
        }
      }
      function C(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          Le("error", s, d);
        }
      }
      function Le(s, i, d) {
        {
          var p = ve.ReactDebugCurrentFrame, S = p.getStackAddendum();
          S !== "" && (i += "%s", d = d.concat([S]));
          var P = d.map(function(T) {
            return String(T);
          });
          P.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, P);
        }
      }
      var it = {};
      function Be(s, i) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", S = p + "." + i;
          if (it[S])
            return;
          C("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, p), it[S] = !0;
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
              ke("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
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
      var er = Array.isArray;
      function _t(s) {
        return er(s);
      }
      function Nr(s) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function St(s) {
        try {
          return We(s), !1;
        } catch {
          return !0;
        }
      }
      function We(s) {
        return "" + s;
      }
      function at(s) {
        if (St(s))
          return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nr(s)), We(s);
      }
      function tr(s, i, d) {
        var p = s.displayName;
        if (p)
          return p;
        var S = i.displayName || i.name || "";
        return S !== "" ? d + "(" + S + ")" : d;
      }
      function ut(s) {
        return s.displayName || "Context";
      }
      function Fe(s) {
        if (s == null)
          return null;
        if (typeof s.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
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
          case j:
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
            case D:
              var p = s.displayName || null;
              return p !== null ? p : Fe(s.type) || "Memo";
            case O: {
              var S = s, P = S._payload, T = S._init;
              try {
                return Fe(T(P));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ct = Object.prototype.hasOwnProperty, wt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, rr, nr, Ot;
      Ot = {};
      function Bt(s) {
        if (ct.call(s, "ref")) {
          var i = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function Ge(s) {
        if (ct.call(s, "key")) {
          var i = Object.getOwnPropertyDescriptor(s, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function Ur(s, i) {
        var d = function() {
          rr || (rr = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: d,
          configurable: !0
        });
      }
      function sr(s, i) {
        var d = function() {
          nr || (nr = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: d,
          configurable: !0
        });
      }
      function or(s) {
        if (typeof s.ref == "string" && se.current && s.__self && se.current.stateNode !== s.__self) {
          var i = Fe(se.current.type);
          Ot[i] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, s.ref), Ot[i] = !0);
        }
      }
      var lt = function(s, i, d, p, S, P, T) {
        var L = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: s,
          key: i,
          ref: d,
          props: T,
          // Record the component responsible for creating this element.
          _owner: P
        };
        return L._store = {}, Object.defineProperty(L._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(L, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.defineProperty(L, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: S
        }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
      };
      function Br(s, i, d) {
        var p, S = {}, P = null, T = null, L = null, G = null;
        if (i != null) {
          Bt(i) && (T = i.ref, or(i)), Ge(i) && (at(i.key), P = "" + i.key), L = i.__self === void 0 ? null : i.__self, G = i.__source === void 0 ? null : i.__source;
          for (p in i)
            ct.call(i, p) && !wt.hasOwnProperty(p) && (S[p] = i[p]);
        }
        var te = arguments.length - 2;
        if (te === 1)
          S.children = d;
        else if (te > 1) {
          for (var ae = Array(te), ue = 0; ue < te; ue++)
            ae[ue] = arguments[ue + 2];
          Object.freeze && Object.freeze(ae), S.children = ae;
        }
        if (s && s.defaultProps) {
          var le = s.defaultProps;
          for (p in le)
            S[p] === void 0 && (S[p] = le[p]);
        }
        if (P || T) {
          var ye = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          P && Ur(S, ye), T && sr(S, ye);
        }
        return lt(s, P, T, L, G, se.current, S);
      }
      function Mr(s, i) {
        var d = lt(s.type, i, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function $r(s, i, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, S = R({}, s.props), P = s.key, T = s.ref, L = s._self, G = s._source, te = s._owner;
        if (i != null) {
          Bt(i) && (T = i.ref, te = se.current), Ge(i) && (at(i.key), P = "" + i.key);
          var ae;
          s.type && s.type.defaultProps && (ae = s.type.defaultProps);
          for (p in i)
            ct.call(i, p) && !wt.hasOwnProperty(p) && (i[p] === void 0 && ae !== void 0 ? S[p] = ae[p] : S[p] = i[p]);
        }
        var ue = arguments.length - 2;
        if (ue === 1)
          S.children = d;
        else if (ue > 1) {
          for (var le = Array(ue), ye = 0; ye < ue; ye++)
            le[ye] = arguments[ye + 2];
          S.children = le;
        }
        return lt(s.type, P, T, L, G, te, S);
      }
      function He(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var ir = ".", qr = ":";
      function Vr(s) {
        var i = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(i, function(S) {
          return d[S];
        });
        return "$" + p;
      }
      var Tt = !1, ar = /\/+/g;
      function Me(s) {
        return s.replace(ar, "$&/");
      }
      function ft(s, i) {
        return typeof s == "object" && s !== null && s.key != null ? (at(s.key), Vr("" + s.key)) : i.toString(36);
      }
      function ze(s, i, d, p, S) {
        var P = typeof s;
        (P === "undefined" || P === "boolean") && (s = null);
        var T = !1;
        if (s === null)
          T = !0;
        else
          switch (P) {
            case "string":
            case "number":
              T = !0;
              break;
            case "object":
              switch (s.$$typeof) {
                case n:
                case o:
                  T = !0;
              }
          }
        if (T) {
          var L = s, G = S(L), te = p === "" ? ir + ft(L, 0) : p;
          if (_t(G)) {
            var ae = "";
            te != null && (ae = Me(te) + "/"), ze(G, i, ae, "", function(Fo) {
              return Fo;
            });
          } else G != null && (He(G) && (G.key && (!L || L.key !== G.key) && at(G.key), G = Mr(
            G,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (G.key && (!L || L.key !== G.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Me("" + G.key) + "/"
            ) : "") + te
          )), i.push(G));
          return 1;
        }
        var ue, le, ye = 0, ge = p === "" ? ir : p + qr;
        if (_t(s))
          for (var gr = 0; gr < s.length; gr++)
            ue = s[gr], le = ge + ft(ue, gr), ye += ze(ue, i, d, le, S);
        else {
          var sn = x(s);
          if (typeof sn == "function") {
            var ns = s;
            sn === ns.entries && (Tt || ke("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tt = !0);
            for (var xo = sn.call(ns), ss, Lo = 0; !(ss = xo.next()).done; )
              ue = ss.value, le = ge + ft(ue, Lo++), ye += ze(ue, i, d, le, S);
          } else if (P === "object") {
            var os = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (os === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : os) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ye;
      }
      function dt(s, i, d) {
        if (s == null)
          return s;
        var p = [], S = 0;
        return ze(s, p, "", "", function(P) {
          return i.call(d, P, S++);
        }), p;
      }
      function Wr(s) {
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
      function Gr(s) {
        return dt(s, function(i) {
          return i;
        }) || [];
      }
      function cr(s) {
        if (!He(s))
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
        var d = !1, p = !1, S = !1;
        {
          var P = {
            $$typeof: m,
            _context: i
          };
          Object.defineProperties(P, {
            Provider: {
              get: function() {
                return p || (p = !0, C("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), i.Provider;
              },
              set: function(T) {
                i.Provider = T;
              }
            },
            _currentValue: {
              get: function() {
                return i._currentValue;
              },
              set: function(T) {
                i._currentValue = T;
              }
            },
            _currentValue2: {
              get: function() {
                return i._currentValue2;
              },
              set: function(T) {
                i._currentValue2 = T;
              }
            },
            _threadCount: {
              get: function() {
                return i._threadCount;
              },
              set: function(T) {
                i._threadCount = T;
              }
            },
            Consumer: {
              get: function() {
                return d || (d = !0, C("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), i.Consumer;
              }
            },
            displayName: {
              get: function() {
                return i.displayName;
              },
              set: function(T) {
                S || (ke("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", T), S = !0);
              }
            }
          }), i.Consumer = P;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var ht = -1, Mt = 0, $t = 1, fr = 2;
      function Hr(s) {
        if (s._status === ht) {
          var i = s._result, d = i();
          if (d.then(function(P) {
            if (s._status === Mt || s._status === ht) {
              var T = s;
              T._status = $t, T._result = P;
            }
          }, function(P) {
            if (s._status === Mt || s._status === ht) {
              var T = s;
              T._status = fr, T._result = P;
            }
          }), s._status === ht) {
            var p = s;
            p._status = Mt, p._result = d;
          }
        }
        if (s._status === $t) {
          var S = s._result;
          return S === void 0 && C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, S), "default" in S || C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, S), S.default;
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
          _init: Hr
        };
        {
          var p, S;
          Object.defineProperties(d, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(P) {
                C("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = P, Object.defineProperty(d, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return S;
              },
              set: function(P) {
                C("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), S = P, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function Yr(s) {
        s != null && s.$$typeof === D ? C("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? C("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && C("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && C("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
        return !!(typeof s == "string" || typeof s == "function" || s === c || s === l || we || s === u || s === g || s === j || Ee || s === A || Ue || Ut || ot || typeof s == "object" && s !== null && (s.$$typeof === O || s.$$typeof === D || s.$$typeof === b || s.$$typeof === m || s.$$typeof === y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === dr || s.getModuleId !== void 0));
      }
      function E(s, i) {
        a(s) || C("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
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
            set: function(S) {
              p = S, !s.name && !s.displayName && (s.displayName = S);
            }
          });
        }
        return d;
      }
      function _() {
        var s = Y.current;
        return s === null && C(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
      }
      function k(s) {
        var i = _();
        if (s._context !== void 0) {
          var d = s._context;
          d.Consumer === s ? C("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === s && C("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
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
      function q(s) {
        var i = _();
        return i.useRef(s);
      }
      function N(s, i) {
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
      function Ye(s, i, d) {
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
      function qt(s) {
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
      var Vt = 0, In, Nn, Un, Bn, Mn, $n, qn;
      function Vn() {
      }
      Vn.__reactDisabledLog = !0;
      function po() {
        {
          if (Vt === 0) {
            In = console.log, Nn = console.info, Un = console.warn, Bn = console.error, Mn = console.group, $n = console.groupCollapsed, qn = console.groupEnd;
            var s = {
              configurable: !0,
              enumerable: !0,
              value: Vn,
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
      function yo() {
        {
          if (Vt--, Vt === 0) {
            var s = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: R({}, s, {
                value: In
              }),
              info: R({}, s, {
                value: Nn
              }),
              warn: R({}, s, {
                value: Un
              }),
              error: R({}, s, {
                value: Bn
              }),
              group: R({}, s, {
                value: Mn
              }),
              groupCollapsed: R({}, s, {
                value: $n
              }),
              groupEnd: R({}, s, {
                value: qn
              })
            });
          }
          Vt < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Qr = ve.ReactCurrentDispatcher, Xr;
      function hr(s, i, d) {
        {
          if (Xr === void 0)
            try {
              throw Error();
            } catch (S) {
              var p = S.stack.trim().match(/\n( *(at )?)/);
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
      function Wn(s, i) {
        if (!s || Zr)
          return "";
        {
          var d = pr.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        Zr = !0;
        var S = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var P;
        P = Qr.current, Qr.current = null, po();
        try {
          if (i) {
            var T = function() {
              throw Error();
            };
            if (Object.defineProperty(T.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(T, []);
              } catch (ge) {
                p = ge;
              }
              Reflect.construct(s, [], T);
            } else {
              try {
                T.call();
              } catch (ge) {
                p = ge;
              }
              s.call(T.prototype);
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
            for (var L = ge.stack.split(`
`), G = p.stack.split(`
`), te = L.length - 1, ae = G.length - 1; te >= 1 && ae >= 0 && L[te] !== G[ae]; )
              ae--;
            for (; te >= 1 && ae >= 0; te--, ae--)
              if (L[te] !== G[ae]) {
                if (te !== 1 || ae !== 1)
                  do
                    if (te--, ae--, ae < 0 || L[te] !== G[ae]) {
                      var ue = `
` + L[te].replace(" at new ", " at ");
                      return s.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", s.displayName)), typeof s == "function" && pr.set(s, ue), ue;
                    }
                  while (te >= 1 && ae >= 0);
                break;
              }
          }
        } finally {
          Zr = !1, Qr.current = P, yo(), Error.prepareStackTrace = S;
        }
        var le = s ? s.displayName || s.name : "", ye = le ? hr(le) : "";
        return typeof s == "function" && pr.set(s, ye), ye;
      }
      function vo(s, i, d) {
        return Wn(s, !1);
      }
      function bo(s) {
        var i = s.prototype;
        return !!(i && i.isReactComponent);
      }
      function yr(s, i, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return Wn(s, bo(s));
        if (typeof s == "string")
          return hr(s);
        switch (s) {
          case g:
            return hr("Suspense");
          case j:
            return hr("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case y:
              return vo(s.render);
            case D:
              return yr(s.type, i, d);
            case O: {
              var p = s, S = p._payload, P = p._init;
              try {
                return yr(P(S), i, d);
              } catch {
              }
            }
          }
        return "";
      }
      var Gn = {}, Hn = ve.ReactDebugCurrentFrame;
      function mr(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          Hn.setExtraStackFrame(d);
        } else
          Hn.setExtraStackFrame(null);
      }
      function go(s, i, d, p, S) {
        {
          var P = Function.call.bind(ct);
          for (var T in s)
            if (P(s, T)) {
              var L = void 0;
              try {
                if (typeof s[T] != "function") {
                  var G = Error((p || "React class") + ": " + d + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw G.name = "Invariant Violation", G;
                }
                L = s[T](i, T, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (te) {
                L = te;
              }
              L && !(L instanceof Error) && (mr(S), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, T, typeof L), mr(null)), L instanceof Error && !(L.message in Gn) && (Gn[L.message] = !0, mr(S), C("Failed %s type: %s", d, L.message), mr(null));
            }
        }
      }
      function Ct(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          Se(d);
        } else
          Se(null);
      }
      var en;
      en = !1;
      function zn() {
        if (se.current) {
          var s = Fe(se.current.type);
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
            s && s._owner && s._owner !== se.current && (p = " It was passed a child from " + Fe(s._owner.type) + "."), Ct(s), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), Ct(null);
          }
        }
      }
      function Jn(s, i) {
        if (typeof s == "object") {
          if (_t(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              He(p) && Kn(p, i);
            }
          else if (He(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var S = x(s);
            if (typeof S == "function" && S !== s.entries)
              for (var P = S.call(s), T; !(T = P.next()).done; )
                He(T.value) && Kn(T.value, i);
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
          i.$$typeof === D))
            d = i.propTypes;
          else
            return;
          if (d) {
            var p = Fe(i);
            go(d, s.props, "prop", p, s);
          } else if (i.PropTypes !== void 0 && !en) {
            en = !0;
            var S = Fe(i);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function So(s) {
        {
          for (var i = Object.keys(s.props), d = 0; d < i.length; d++) {
            var p = i[d];
            if (p !== "children" && p !== "key") {
              Ct(s), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Ct(null);
              break;
            }
          }
          s.ref !== null && (Ct(s), C("Invalid attribute `ref` supplied to `React.Fragment`."), Ct(null));
        }
      }
      function Xn(s, i, d) {
        var p = a(s);
        if (!p) {
          var S = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = Ro(i);
          P ? S += P : S += zn();
          var T;
          s === null ? T = "null" : _t(s) ? T = "array" : s !== void 0 && s.$$typeof === n ? (T = "<" + (Fe(s.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : T = typeof s, C("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, S);
        }
        var L = Br.apply(this, arguments);
        if (L == null)
          return L;
        if (p)
          for (var G = 2; G < arguments.length; G++)
            Jn(arguments[G], s);
        return s === c ? So(L) : Qn(L), L;
      }
      var Zn = !1;
      function wo(s) {
        var i = Xn.bind(null, s);
        return i.type = s, Zn || (Zn = !0, ke("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return ke("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), i;
      }
      function Oo(s, i, d) {
        for (var p = $r.apply(this, arguments), S = 2; S < arguments.length; S++)
          Jn(arguments[S], p.type);
        return Qn(p), p;
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
            var S = p._updatedFibers.size;
            S > 10 && ke("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var es = !1, vr = null;
      function Co(s) {
        if (vr === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), d = t && t[i];
            vr = d.call(t, "timers").setImmediate;
          } catch {
            vr = function(S) {
              es === !1 && (es = !0, typeof MessageChannel > "u" && C("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var P = new MessageChannel();
              P.port1.onmessage = S, P.port2.postMessage(void 0);
            };
          }
        return vr(s);
      }
      var At = 0, ts = !1;
      function rs(s) {
        {
          var i = At;
          At++, I.current === null && (I.current = []);
          var d = I.isBatchingLegacy, p;
          try {
            if (I.isBatchingLegacy = !0, p = s(), !d && I.didScheduleLegacyUpdate) {
              var S = I.current;
              S !== null && (I.didScheduleLegacyUpdate = !1, nn(S));
            }
          } catch (le) {
            throw br(i), le;
          } finally {
            I.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var P = p, T = !1, L = {
              then: function(le, ye) {
                T = !0, P.then(function(ge) {
                  br(i), At === 0 ? tn(ge, le, ye) : le(ge);
                }, function(ge) {
                  br(i), ye(ge);
                });
              }
            };
            return !ts && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              T || (ts = !0, C("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), L;
          } else {
            var G = p;
            if (br(i), At === 0) {
              var te = I.current;
              te !== null && (nn(te), I.current = null);
              var ae = {
                then: function(le, ye) {
                  I.current === null ? (I.current = [], tn(G, le, ye)) : le(G);
                }
              };
              return ae;
            } else {
              var ue = {
                then: function(le, ye) {
                  le(G);
                }
              };
              return ue;
            }
          }
        }
      }
      function br(s) {
        s !== At - 1 && C("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), At = s;
      }
      function tn(s, i, d) {
        {
          var p = I.current;
          if (p !== null)
            try {
              nn(p), Co(function() {
                p.length === 0 ? (I.current = null, i(s)) : tn(s, i, d);
              });
            } catch (S) {
              d(S);
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
      var Ao = Xn, Po = Oo, Do = wo, ko = {
        map: dt,
        forEach: ur,
        count: Wr,
        toArray: Gr,
        only: cr
      };
      e.Children = ko, e.Component = V, e.Fragment = c, e.Profiler = l, e.PureComponent = J, e.StrictMode = u, e.Suspense = g, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, e.act = rs, e.cloneElement = Po, e.createContext = lr, e.createElement = Ao, e.createFactory = Do, e.createRef = Ir, e.forwardRef = Yr, e.isValidElement = He, e.lazy = zr, e.memo = E, e.startTransition = To, e.unstable_act = rs, e.useCallback = fe, e.useContext = k, e.useDebugValue = $e, e.useDeferredValue = qt, e.useEffect = N, e.useId = Kr, e.useImperativeHandle = Ye, e.useInsertionEffect = be, e.useLayoutEffect = ce, e.useMemo = Oe, e.useReducer = Q, e.useRef = q, e.useState = z, e.useSyncExternalStore = Jr, e.useTransition = Re, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Yt, Yt.exports)), Yt.exports;
}
process.env.NODE_ENV === "production" ? _n.exports = Ko() : _n.exports = Jo();
var me = _n.exports, Wt = {};
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
  if (ms) return Wt;
  ms = 1;
  var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, b, m) {
    var y, g = {}, j = null, D = null;
    m !== void 0 && (j = "" + m), b.key !== void 0 && (j = "" + b.key), b.ref !== void 0 && (D = b.ref);
    for (y in b) n.call(b, y) && !c.hasOwnProperty(y) && (g[y] = b[y]);
    if (l && l.defaultProps) for (y in b = l.defaultProps, b) g[y] === void 0 && (g[y] = b[y]);
    return { $$typeof: e, type: l, key: j, ref: D, props: g, _owner: o.current };
  }
  return Wt.Fragment = r, Wt.jsx = u, Wt.jsxs = u, Wt;
}
var Gt = {};
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
    var t = me, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), O = Symbol.iterator, A = "@@iterator";
    function w(a) {
      if (a === null || typeof a != "object")
        return null;
      var E = O && a[O] || a[A];
      return typeof E == "function" ? E : null;
    }
    var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(a) {
      {
        for (var E = arguments.length, _ = new Array(E > 1 ? E - 1 : 0), k = 1; k < E; k++)
          _[k - 1] = arguments[k];
        Y("error", a, _);
      }
    }
    function Y(a, E, _) {
      {
        var k = M.ReactDebugCurrentFrame, z = k.getStackAddendum();
        z !== "" && (E += "%s", _ = _.concat([z]));
        var Q = _.map(function(q) {
          return String(q);
        });
        Q.unshift("Warning: " + E), Function.prototype.apply.call(console[a], console, Q);
      }
    }
    var ie = !1, I = !1, se = !1, he = !1, Z = !1, Se;
    Se = Symbol.for("react.module.reference");
    function Ue(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === c || Z || a === o || a === m || a === y || he || a === D || ie || I || se || typeof a == "object" && a !== null && (a.$$typeof === j || a.$$typeof === g || a.$$typeof === u || a.$$typeof === l || a.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Se || a.getModuleId !== void 0));
    }
    function Ut(a, E, _) {
      var k = a.displayName;
      if (k)
        return k;
      var z = E.displayName || E.name || "";
      return z !== "" ? _ + "(" + z + ")" : _;
    }
    function ot(a) {
      return a.displayName || "Context";
    }
    function Ee(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
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
            return Ut(a, a.render, "ForwardRef");
          case g:
            var k = a.displayName || null;
            return k !== null ? k : Ee(a.type) || "Memo";
          case j: {
            var z = a, Q = z._payload, q = z._init;
            try {
              return Ee(q(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var we = Object.assign, ve = 0, ke, C, Le, it, Be, f, R;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function V() {
      {
        if (ve === 0) {
          ke = console.log, C = console.info, Le = console.warn, it = console.error, Be = console.group, f = console.groupCollapsed, R = console.groupEnd;
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
            log: we({}, a, {
              value: ke
            }),
            info: we({}, a, {
              value: C
            }),
            warn: we({}, a, {
              value: Le
            }),
            error: we({}, a, {
              value: it
            }),
            group: we({}, a, {
              value: Be
            }),
            groupCollapsed: we({}, a, {
              value: f
            }),
            groupEnd: we({}, a, {
              value: R
            })
          });
        }
        ve < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = M.ReactCurrentDispatcher, ee;
    function X(a, E, _) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (z) {
            var k = z.stack.trim().match(/\n( *(at )?)/);
            ee = k && k[1] || "";
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
    function er(a, E) {
      if (!a || J)
        return "";
      {
        var _ = pe.get(a);
        if (_ !== void 0)
          return _;
      }
      var k;
      J = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = ne.current, ne.current = null, V();
      try {
        if (E) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (Re) {
              k = Re;
            }
            Reflect.construct(a, [], q);
          } else {
            try {
              q.call();
            } catch (Re) {
              k = Re;
            }
            a.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            k = Re;
          }
          a();
        }
      } catch (Re) {
        if (Re && k && typeof Re.stack == "string") {
          for (var N = Re.stack.split(`
`), be = k.stack.split(`
`), ce = N.length - 1, fe = be.length - 1; ce >= 1 && fe >= 0 && N[ce] !== be[fe]; )
            fe--;
          for (; ce >= 1 && fe >= 0; ce--, fe--)
            if (N[ce] !== be[fe]) {
              if (ce !== 1 || fe !== 1)
                do
                  if (ce--, fe--, fe < 0 || N[ce] !== be[fe]) {
                    var Oe = `
` + N[ce].replace(" at new ", " at ");
                    return a.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", a.displayName)), typeof a == "function" && pe.set(a, Oe), Oe;
                  }
                while (ce >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        J = !1, ne.current = Q, H(), Error.prepareStackTrace = z;
      }
      var Ye = a ? a.displayName || a.name : "", $e = Ye ? X(Ye) : "";
      return typeof a == "function" && pe.set(a, $e), $e;
    }
    function _t(a, E, _) {
      return er(a, !1);
    }
    function Nr(a) {
      var E = a.prototype;
      return !!(E && E.isReactComponent);
    }
    function St(a, E, _) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return er(a, Nr(a));
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
            return St(a.type, E, _);
          case j: {
            var k = a, z = k._payload, Q = k._init;
            try {
              return St(Q(z), E, _);
            } catch {
            }
          }
        }
      return "";
    }
    var We = Object.prototype.hasOwnProperty, at = {}, tr = M.ReactDebugCurrentFrame;
    function ut(a) {
      if (a) {
        var E = a._owner, _ = St(a.type, a._source, E ? E.type : null);
        tr.setExtraStackFrame(_);
      } else
        tr.setExtraStackFrame(null);
    }
    function Fe(a, E, _, k, z) {
      {
        var Q = Function.call.bind(We);
        for (var q in a)
          if (Q(a, q)) {
            var N = void 0;
            try {
              if (typeof a[q] != "function") {
                var be = Error((k || "React class") + ": " + _ + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              N = a[q](E, q, k, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              N = ce;
            }
            N && !(N instanceof Error) && (ut(z), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", _, q, typeof N), ut(null)), N instanceof Error && !(N.message in at) && (at[N.message] = !0, ut(z), x("Failed %s type: %s", _, N.message), ut(null));
          }
      }
    }
    var ct = Array.isArray;
    function wt(a) {
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
    function Bt(a) {
      if (nr(a))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(a)), Ot(a);
    }
    var Ge = M.ReactCurrentOwner, Ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sr, or, lt;
    lt = {};
    function Br(a) {
      if (We.call(a, "ref")) {
        var E = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Mr(a) {
      if (We.call(a, "key")) {
        var E = Object.getOwnPropertyDescriptor(a, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function $r(a, E) {
      if (typeof a.ref == "string" && Ge.current && E && Ge.current.stateNode !== E) {
        var _ = Ee(Ge.current.type);
        lt[_] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ee(Ge.current.type), a.ref), lt[_] = !0);
      }
    }
    function He(a, E) {
      {
        var _ = function() {
          sr || (sr = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
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
          or || (or = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var qr = function(a, E, _, k, z, Q, q) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: a,
        key: E,
        ref: _,
        props: q,
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
        value: k
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function Vr(a, E, _, k, z) {
      {
        var Q, q = {}, N = null, be = null;
        _ !== void 0 && (Bt(_), N = "" + _), Mr(E) && (Bt(E.key), N = "" + E.key), Br(E) && (be = E.ref, $r(E, z));
        for (Q in E)
          We.call(E, Q) && !Ur.hasOwnProperty(Q) && (q[Q] = E[Q]);
        if (a && a.defaultProps) {
          var ce = a.defaultProps;
          for (Q in ce)
            q[Q] === void 0 && (q[Q] = ce[Q]);
        }
        if (N || be) {
          var fe = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          N && He(q, fe), be && ir(q, fe);
        }
        return qr(a, N, be, z, k, Ge.current, q);
      }
    }
    var Tt = M.ReactCurrentOwner, ar = M.ReactDebugCurrentFrame;
    function Me(a) {
      if (a) {
        var E = a._owner, _ = St(a.type, a._source, E ? E.type : null);
        ar.setExtraStackFrame(_);
      } else
        ar.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function ze(a) {
      return typeof a == "object" && a !== null && a.$$typeof === e;
    }
    function dt() {
      {
        if (Tt.current) {
          var a = Ee(Tt.current.type);
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
    var ur = {};
    function Gr(a) {
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
        var _ = Gr(E);
        if (ur[_])
          return;
        ur[_] = !0;
        var k = "";
        a && a._owner && a._owner !== Tt.current && (k = " It was passed a child from " + Ee(a._owner.type) + "."), Me(a), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, k), Me(null);
      }
    }
    function lr(a, E) {
      {
        if (typeof a != "object")
          return;
        if (wt(a))
          for (var _ = 0; _ < a.length; _++) {
            var k = a[_];
            ze(k) && cr(k, E);
          }
        else if (ze(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var z = w(a);
          if (typeof z == "function" && z !== a.entries)
            for (var Q = z.call(a), q; !(q = Q.next()).done; )
              ze(q.value) && cr(q.value, E);
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
          var k = Ee(E);
          Fe(_, a.props, "prop", k, a);
        } else if (E.PropTypes !== void 0 && !ft) {
          ft = !0;
          var z = Ee(E);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mt(a) {
      {
        for (var E = Object.keys(a.props), _ = 0; _ < E.length; _++) {
          var k = E[_];
          if (k !== "children" && k !== "key") {
            Me(a), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Me(null);
            break;
          }
        }
        a.ref !== null && (Me(a), x("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var $t = {};
    function fr(a, E, _, k, z, Q) {
      {
        var q = Ue(a);
        if (!q) {
          var N = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = Wr();
          be ? N += be : N += dt();
          var ce;
          a === null ? ce = "null" : wt(a) ? ce = "array" : a !== void 0 && a.$$typeof === e ? (ce = "<" + (Ee(a.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof a, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, N);
        }
        var fe = Vr(a, E, _, z, Q);
        if (fe == null)
          return fe;
        if (q) {
          var Oe = E.children;
          if (Oe !== void 0)
            if (k)
              if (wt(Oe)) {
                for (var Ye = 0; Ye < Oe.length; Ye++)
                  lr(Oe[Ye], a);
                Object.freeze && Object.freeze(Oe);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lr(Oe, a);
        }
        if (We.call(E, "key")) {
          var $e = Ee(a), Re = Object.keys(E).filter(function(Jr) {
            return Jr !== "key";
          }), qt = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$t[$e + qt]) {
            var Kr = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qt, $e, Kr, $e), $t[$e + qt] = !0;
          }
        }
        return a === n ? Mt(fe) : ht(fe), fe;
      }
    }
    function Hr(a, E, _) {
      return fr(a, E, _, !0);
    }
    function zr(a, E, _) {
      return fr(a, E, _, !1);
    }
    var Yr = zr, dr = Hr;
    Gt.Fragment = n, Gt.jsx = Yr, Gt.jsxs = dr;
  }()), Gt;
}
process.env.NODE_ENV === "production" ? Qo() : Xo();
var Zo = me.createContext(
  void 0
), Ns = (t) => {
  const e = me.useContext(Zo);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Us = me.createContext(!1), ei = () => me.useContext(Us);
Us.Provider;
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
function Bs(t, e) {
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
}) => t.isError && !e.isReset() && !t.isFetching && n && Bs(r, [t.error, n]), ui = (t) => {
  t.suspense && (typeof t.staleTime != "number" && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, ci = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, li = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function fi(t, e, r) {
  var m, y, g, j;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Ns(), o = ei(), c = ni(), u = n.defaultQueryOptions(t);
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
      (D) => {
        const O = o ? () => {
        } : l.subscribe(Pr.batchCalls(D));
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
  return (j = (g = n.getDefaultOptions().queries) == null ? void 0 : g._experimental_afterQuery) == null || j.call(
    g,
    u,
    b
  ), u.notifyOnChangeProps ? b : l.trackResult(b);
}
function Ms(t, e) {
  return fi(t, Go);
}
function $s(t, e) {
  const r = Ns(), [n] = me.useState(
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
      (u) => n.subscribe(Pr.batchCalls(u)),
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
  if (o.error && Bs(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: c, mutateAsync: o.mutate };
}
function qs(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: di } = Object.prototype, { getPrototypeOf: kn } = Object, Dr = /* @__PURE__ */ ((t) => (e) => {
  const r = di.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), xe = (t) => (t = t.toLowerCase(), (e) => Dr(e) === t), kr = (t) => (e) => typeof e === t, { isArray: It } = Array, Kt = kr("undefined");
function hi(t) {
  return t !== null && !Kt(t) && t.constructor !== null && !Kt(t.constructor) && De(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Vs = xe("ArrayBuffer");
function pi(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Vs(t.buffer), e;
}
const yi = kr("string"), De = kr("function"), Ws = kr("number"), xr = (t) => t !== null && typeof t == "object", mi = (t) => t === !0 || t === !1, _r = (t) => {
  if (Dr(t) !== "object")
    return !1;
  const e = kn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, vi = xe("Date"), bi = xe("File"), gi = xe("Blob"), Ei = xe("FileList"), Ri = (t) => xr(t) && De(t.pipe), _i = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || De(t.append) && ((e = Dr(t)) === "formdata" || // detect form-data instance
  e === "object" && De(t.toString) && t.toString() === "[object FormData]"));
}, Si = xe("URLSearchParams"), [wi, Oi, Ti, Ci] = ["ReadableStream", "Request", "Response", "Headers"].map(xe), Ai = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xt(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), It(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const c = r ? Object.getOwnPropertyNames(t) : Object.keys(t), u = c.length;
    let l;
    for (n = 0; n < u; n++)
      l = c[n], e.call(null, t[l], l, t);
  }
}
function Gs(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const yt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Hs = (t) => !Kt(t) && t !== yt;
function Sn() {
  const { caseless: t } = Hs(this) && this || {}, e = {}, r = (n, o) => {
    const c = t && Gs(e, o) || o;
    _r(e[c]) && _r(n) ? e[c] = Sn(e[c], n) : _r(n) ? e[c] = Sn({}, n) : It(n) ? e[c] = n.slice() : e[c] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Xt(arguments[n], r);
  return e;
}
const Pi = (t, e, r, { allOwnKeys: n } = {}) => (Xt(e, (o, c) => {
  r && De(o) ? t[c] = qs(o, r) : t[c] = o;
}, { allOwnKeys: n }), t), Di = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), ki = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, xi = (t, e, r, n) => {
  let o, c, u;
  const l = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), c = o.length; c-- > 0; )
      u = o[c], (!n || n(u, t, e)) && !l[u] && (e[u] = t[u], l[u] = !0);
    t = r !== !1 && kn(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Li = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Fi = (t) => {
  if (!t) return null;
  if (It(t)) return t;
  let e = t.length;
  if (!Ws(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, ji = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && kn(Uint8Array)), Ii = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const c = o.value;
    e.call(t, c[0], c[1]);
  }
}, Ni = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Ui = xe("HTMLFormElement"), Bi = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), bs = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Mi = xe("RegExp"), zs = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Xt(r, (o, c) => {
    let u;
    (u = e(o, c, t)) !== !1 && (n[c] = u || o);
  }), Object.defineProperties(t, n);
}, $i = (t) => {
  zs(t, (e, r) => {
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
}, qi = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((c) => {
      r[c] = !0;
    });
  };
  return It(t) ? n(t) : n(String(t).split(e)), r;
}, Vi = () => {
}, Wi = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, an = "abcdefghijklmnopqrstuvwxyz", gs = "0123456789", Ys = {
  DIGIT: gs,
  ALPHA: an,
  ALPHA_DIGIT: an + an.toUpperCase() + gs
}, Gi = (t = 16, e = Ys.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Hi(t) {
  return !!(t && De(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const zi = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (xr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const c = It(n) ? [] : {};
        return Xt(n, (u, l) => {
          const b = r(u, o + 1);
          !Kt(b) && (c[l] = b);
        }), e[o] = void 0, c;
      }
    }
    return n;
  };
  return r(t, 0);
}, Yi = xe("AsyncFunction"), Ki = (t) => t && (xr(t) || De(t)) && De(t.then) && De(t.catch), Ks = ((t, e) => t ? setImmediate : e ? ((r, n) => (yt.addEventListener("message", ({ source: o, data: c }) => {
  o === yt && c === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), yt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  De(yt.postMessage)
), Ji = typeof queueMicrotask < "u" ? queueMicrotask.bind(yt) : typeof process < "u" && process.nextTick || Ks, h = {
  isArray: It,
  isArrayBuffer: Vs,
  isBuffer: hi,
  isFormData: _i,
  isArrayBufferView: pi,
  isString: yi,
  isNumber: Ws,
  isBoolean: mi,
  isObject: xr,
  isPlainObject: _r,
  isReadableStream: wi,
  isRequest: Oi,
  isResponse: Ti,
  isHeaders: Ci,
  isUndefined: Kt,
  isDate: vi,
  isFile: bi,
  isBlob: gi,
  isRegExp: Mi,
  isFunction: De,
  isStream: Ri,
  isURLSearchParams: Si,
  isTypedArray: ji,
  isFileList: Ei,
  forEach: Xt,
  merge: Sn,
  extend: Pi,
  trim: Ai,
  stripBOM: Di,
  inherits: ki,
  toFlatObject: xi,
  kindOf: Dr,
  kindOfTest: xe,
  endsWith: Li,
  toArray: Fi,
  forEachEntry: Ii,
  matchAll: Ni,
  isHTMLForm: Ui,
  hasOwnProperty: bs,
  hasOwnProp: bs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zs,
  freezeMethods: $i,
  toObjectSet: qi,
  toCamelCase: Bi,
  noop: Vi,
  toFiniteNumber: Wi,
  findKey: Gs,
  global: yt,
  isContextDefined: Hs,
  ALPHABET: Ys,
  generateString: Gi,
  isSpecCompliantForm: Hi,
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
function wn(t) {
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
  return h.isArray(t) && !t.some(wn);
}
const Zi = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Lr(t, e, r) {
  if (!h.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, w) {
    return !h.isUndefined(w[A]);
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
  function y(O, A, w) {
    let M = O;
    if (O && !w && typeof O == "object") {
      if (h.endsWith(A, "{}"))
        A = n ? A : A.slice(0, -2), O = JSON.stringify(O);
      else if (h.isArray(O) && Xi(O) || (h.isFileList(O) || h.endsWith(A, "[]")) && (M = h.toArray(O)))
        return A = Xs(A), M.forEach(function(Y, ie) {
          !(h.isUndefined(Y) || Y === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? Es([A], ie, c) : u === null ? A : A + "[]",
            m(Y)
          );
        }), !1;
    }
    return wn(O) ? !0 : (e.append(Es(w, A, c), m(O)), !1);
  }
  const g = [], j = Object.assign(Zi, {
    defaultVisitor: y,
    convertValue: m,
    isVisitable: wn
  });
  function D(O, A) {
    if (!h.isUndefined(O)) {
      if (g.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      g.push(O), h.forEach(O, function(M, x) {
        (!(h.isUndefined(M) || M === null) && o.call(
          e,
          M,
          h.isString(x) ? x.trim() : x,
          A,
          j
        )) === !0 && D(M, A ? A.concat(x) : [x]);
      }), g.pop();
    }
  }
  if (!h.isObject(t))
    throw new TypeError("data must be an object");
  return D(t), e;
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
function xn(t, e) {
  this._pairs = [], t && Lr(t, this, e);
}
const Zs = xn.prototype;
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
  if (o ? c = o(e, r) : c = h.isURLSearchParams(e) ? e.toString() : new xn(e, r).toString(n), c) {
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
}, ta = typeof URLSearchParams < "u" ? URLSearchParams : xn, ra = typeof FormData < "u" ? FormData : null, na = typeof Blob < "u" ? Blob : null, sa = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ta,
    FormData: ra,
    Blob: na
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ln = typeof window < "u" && typeof document < "u", On = typeof navigator == "object" && navigator || void 0, oa = Ln && (!On || ["ReactNative", "NativeScript", "NS"].indexOf(On.product) < 0), ia = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", aa = Ln && window.location.href || "http://localhost", ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ln,
  hasStandardBrowserEnv: oa,
  hasStandardBrowserWebWorkerEnv: ia,
  navigator: On,
  origin: aa
}, Symbol.toStringTag, { value: "Module" })), Ae = {
  ...ua,
  ...sa
};
function ca(t, e) {
  return Lr(t, new Ae.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, c) {
      return Ae.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
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
        return Lr(
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
}, Ss = Symbol("internals");
function Ht(t) {
  return t && String(t).trim().toLowerCase();
}
function Sr(t) {
  return t === !1 || t == null ? t : h.isArray(t) ? t.map(Sr) : String(t);
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
class Pe {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function c(l, b, m) {
      const y = Ht(b);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const g = h.findKey(o, y);
      (!g || o[g] === void 0 || m === !0 || m === void 0 && o[g] !== !1) && (o[g || b] = Sr(l));
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
    if (e = Ht(e), e) {
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
    if (e = Ht(e), e) {
      const n = h.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || un(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function c(u) {
      if (u = Ht(u), u) {
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
        r[u] = Sr(o), delete r[c];
        return;
      }
      const l = e ? va(c) : String(c).trim();
      l !== c && delete r[c], r[l] = Sr(o), n[l] = !0;
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
    function c(u) {
      const l = Ht(u);
      n[l] || (ba(o, u), n[l] = !0);
    }
    return h.isArray(e) ? e.forEach(c) : c(e), this;
  }
}
Pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(Pe.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(Pe);
function cn(t, e) {
  const r = this || Zt, n = e || r, o = Pe.from(n.headers);
  let c = n.data;
  return h.forEach(t, function(l) {
    c = l.call(r, c, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), c;
}
function no(t) {
  return !!(t && t.__CANCEL__);
}
function Nt(t, e, r) {
  F.call(this, t ?? "canceled", F.ERR_CANCELED, e, r), this.name = "CanceledError";
}
h.inherits(Nt, F, {
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
    let g = c, j = 0;
    for (; g !== o; )
      j += r[g++], g = g % t;
    if (o = (o + 1) % t, o === c && (c = (c + 1) % t), m - u < e)
      return;
    const D = y && m - y;
    return D ? Math.round(j * 1e3 / D) : void 0;
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
const Tr = (t, e, r = 3) => {
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
}, ws = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Os = (t) => (...e) => h.asap(() => t(...e)), _a = Ae.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = Ae.navigator && /(msie|trident)/i.test(Ae.navigator.userAgent), r = document.createElement("a");
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
), Sa = Ae.hasStandardBrowserEnv ? (
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
function wa(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Oa(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function oo(t, e) {
  return t && !wa(e) ? Oa(t, e) : e;
}
const Ts = (t) => t instanceof Pe ? { ...t } : t;
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
    headers: (m, y) => o(Ts(m), Ts(y), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, t, e)), function(y) {
    const g = b[y] || o, j = g(t[y], e[y], y);
    h.isUndefined(j) && g !== l || (r[y] = j);
  }), r;
}
const io = (t) => {
  const e = Rt({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: c, headers: u, auth: l } = e;
  e.headers = u = Pe.from(u), e.url = eo(oo(e.baseURL, e.url), t.params, t.paramsSerializer), l && u.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let b;
  if (h.isFormData(r)) {
    if (Ae.hasStandardBrowserEnv || Ae.hasStandardBrowserWebWorkerEnv)
      u.setContentType(void 0);
    else if ((b = u.getContentType()) !== !1) {
      const [m, ...y] = b ? b.split(";").map((g) => g.trim()).filter(Boolean) : [];
      u.setContentType([m || "multipart/form-data", ...y].join("; "));
    }
  }
  if (Ae.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(e)), n || n !== !1 && _a(e.url))) {
    const m = o && c && Sa.read(c);
    m && u.set(o, m);
  }
  return e;
}, Ta = typeof XMLHttpRequest < "u", Ca = Ta && function(t) {
  return new Promise(function(r, n) {
    const o = io(t);
    let c = o.data;
    const u = Pe.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: b, onDownloadProgress: m } = o, y, g, j, D, O;
    function A() {
      D && D(), O && O(), o.cancelToken && o.cancelToken.unsubscribe(y), o.signal && o.signal.removeEventListener("abort", y);
    }
    let w = new XMLHttpRequest();
    w.open(o.method.toUpperCase(), o.url, !0), w.timeout = o.timeout;
    function M() {
      if (!w)
        return;
      const Y = Pe.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), I = {
        data: !l || l === "text" || l === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: Y,
        config: t,
        request: w
      };
      so(function(he) {
        r(he), A();
      }, function(he) {
        n(he), A();
      }, I), w = null;
    }
    "onloadend" in w ? w.onloadend = M : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(M);
    }, w.onabort = function() {
      w && (n(new F("Request aborted", F.ECONNABORTED, t, w)), w = null);
    }, w.onerror = function() {
      n(new F("Network Error", F.ERR_NETWORK, t, w)), w = null;
    }, w.ontimeout = function() {
      let ie = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const I = o.transitional || to;
      o.timeoutErrorMessage && (ie = o.timeoutErrorMessage), n(new F(
        ie,
        I.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        t,
        w
      )), w = null;
    }, c === void 0 && u.setContentType(null), "setRequestHeader" in w && h.forEach(u.toJSON(), function(ie, I) {
      w.setRequestHeader(I, ie);
    }), h.isUndefined(o.withCredentials) || (w.withCredentials = !!o.withCredentials), l && l !== "json" && (w.responseType = o.responseType), m && ([j, O] = Tr(m, !0), w.addEventListener("progress", j)), b && w.upload && ([g, D] = Tr(b), w.upload.addEventListener("progress", g), w.upload.addEventListener("loadend", D)), (o.cancelToken || o.signal) && (y = (Y) => {
      w && (n(!Y || Y.type ? new Nt(null, t, w) : Y), w.abort(), w = null);
    }, o.cancelToken && o.cancelToken.subscribe(y), o.signal && (o.signal.aborted ? y() : o.signal.addEventListener("abort", y)));
    const x = ga(o.url);
    if (x && Ae.protocols.indexOf(x) === -1) {
      n(new F("Unsupported protocol " + x + ":", F.ERR_BAD_REQUEST, t));
      return;
    }
    w.send(c || null);
  });
}, Aa = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const c = function(m) {
      if (!o) {
        o = !0, l();
        const y = m instanceof Error ? m : this.reason;
        n.abort(y instanceof F ? y : new Nt(y instanceof Error ? y.message : y));
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
}, Pa = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, Da = async function* (t, e) {
  for await (const r of ka(t))
    yield* Pa(r, e);
}, ka = async function* (t) {
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
}, Cs = (t, e, r, n) => {
  const o = Da(t, e);
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
          let j = c += g;
          r(j);
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
}, Fr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ao = Fr && typeof ReadableStream == "function", xa = Fr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), uo = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, La = ao && uo(() => {
  let t = !1;
  const e = new Request(Ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), As = 64 * 1024, Tn = ao && uo(() => h.isReadableStream(new Response("").body)), Cr = {
  stream: Tn && ((t) => t.body)
};
Fr && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Cr[e] && (Cr[e] = h.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
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
    return (await new Request(Ae.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(t) || h.isArrayBuffer(t))
    return t.byteLength;
  if (h.isURLSearchParams(t) && (t = t + ""), h.isString(t))
    return (await xa(t)).byteLength;
}, ja = async (t, e) => {
  const r = h.toFiniteNumber(t.getContentLength());
  return r ?? Fa(e);
}, Ia = Fr && (async (t) => {
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
    fetchOptions: j
  } = io(t);
  m = m ? (m + "").toLowerCase() : "text";
  let D = Aa([o, c && c.toAbortSignal()], u), O;
  const A = D && D.unsubscribe && (() => {
    D.unsubscribe();
  });
  let w;
  try {
    if (b && La && r !== "get" && r !== "head" && (w = await ja(y, n)) !== 0) {
      let I = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), se;
      if (h.isFormData(n) && (se = I.headers.get("content-type")) && y.setContentType(se), I.body) {
        const [he, Z] = ws(
          w,
          Tr(Os(b))
        );
        n = Cs(I.body, As, he, Z);
      }
    }
    h.isString(g) || (g = g ? "include" : "omit");
    const M = "credentials" in Request.prototype;
    O = new Request(e, {
      ...j,
      signal: D,
      method: r.toUpperCase(),
      headers: y.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: M ? g : void 0
    });
    let x = await fetch(O);
    const Y = Tn && (m === "stream" || m === "response");
    if (Tn && (l || Y && A)) {
      const I = {};
      ["status", "statusText", "headers"].forEach((Se) => {
        I[Se] = x[Se];
      });
      const se = h.toFiniteNumber(x.headers.get("content-length")), [he, Z] = l && ws(
        se,
        Tr(Os(l), !0)
      ) || [];
      x = new Response(
        Cs(x.body, As, he, () => {
          Z && Z(), A && A();
        }),
        I
      );
    }
    m = m || "text";
    let ie = await Cr[h.findKey(Cr, m) || "text"](x, t);
    return !Y && A && A(), await new Promise((I, se) => {
      so(I, se, {
        data: ie,
        headers: Pe.from(x.headers),
        status: x.status,
        statusText: x.statusText,
        config: t,
        request: O
      });
    });
  } catch (M) {
    throw A && A(), M && M.name === "TypeError" && /fetch/i.test(M.message) ? Object.assign(
      new F("Network Error", F.ERR_NETWORK, t, O),
      {
        cause: M.cause || M
      }
    ) : F.from(M, M && M.code, t, O);
  }
}), Cn = {
  http: Qi,
  xhr: Ca,
  fetch: Ia
};
h.forEach(Cn, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ps = (t) => `- ${t}`, Na = (t) => h.isFunction(t) || t === null || t === !1, co = {
  getAdapter: (t) => {
    t = h.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let c = 0; c < e; c++) {
      r = t[c];
      let u;
      if (n = r, !Na(r) && (n = Cn[(u = String(r)).toLowerCase()], n === void 0))
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
` + c.map(Ps).join(`
`) : " " + Ps(c[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + u,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Cn
};
function ln(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Nt(null, t);
}
function Ds(t) {
  return ln(t), t.headers = Pe.from(t.headers), t.data = cn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), co.getAdapter(t.adapter || Zt.adapter)(t).then(function(n) {
    return ln(t), n.data = cn.call(
      t,
      t.transformResponse,
      n
    ), n.headers = Pe.from(n.headers), n;
  }, function(n) {
    return no(n) || (ln(t), n && n.response && (n.response.data = cn.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = Pe.from(n.response.headers))), Promise.reject(n);
  });
}
const lo = "1.7.7", Fn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Fn[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const ks = {};
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
    return r && !ks[u] && (ks[u] = !0, console.warn(
      o(
        u,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(c, u, l) : !0;
  };
};
function Ua(t, e, r) {
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
const An = {
  assertOptions: Ua,
  validators: Fn
}, Ke = An.validators;
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
    n !== void 0 && An.assertOptions(n, {
      silentJSONParsing: Ke.transitional(Ke.boolean),
      forcedJSONParsing: Ke.transitional(Ke.boolean),
      clarifyTimeoutError: Ke.transitional(Ke.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : An.assertOptions(o, {
      encode: Ke.function,
      serialize: Ke.function
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
    ), r.headers = Pe.concat(u, c);
    const l = [];
    let b = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(r) === !1 || (b = b && A.synchronous, l.unshift(A.fulfilled, A.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(A) {
      m.push(A.fulfilled, A.rejected);
    });
    let y, g = 0, j;
    if (!b) {
      const O = [Ds.bind(this), void 0];
      for (O.unshift.apply(O, l), O.push.apply(O, m), j = O.length, y = Promise.resolve(r); g < j; )
        y = y.then(O[g++], O[g++]);
      return y;
    }
    j = l.length;
    let D = r;
    for (g = 0; g < j; ) {
      const O = l[g++], A = l[g++];
      try {
        D = O(D);
      } catch (w) {
        A.call(this, w);
        break;
      }
    }
    try {
      y = Ds.call(this, D);
    } catch (O) {
      return Promise.reject(O);
    }
    for (g = 0, j = m.length; g < j; )
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
class jn {
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
function Ba(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Ma(t) {
  return h.isObject(t) && t.isAxiosError === !0;
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
Object.entries(Pn).forEach(([t, e]) => {
  Pn[e] = t;
});
function fo(t) {
  const e = new Et(t), r = qs(Et.prototype.request, e);
  return h.extend(r, Et.prototype, e, { allOwnKeys: !0 }), h.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return fo(Rt(t, o));
  }, r;
}
const de = fo(Zt);
de.Axios = Et;
de.CanceledError = Nt;
de.CancelToken = jn;
de.isCancel = no;
de.VERSION = lo;
de.toFormData = Lr;
de.AxiosError = F;
de.Cancel = de.CanceledError;
de.all = function(e) {
  return Promise.all(e);
};
de.spread = Ba;
de.isAxiosError = Ma;
de.mergeConfig = Rt;
de.AxiosHeaders = Pe;
de.formToJSON = (t) => ro(h.isHTMLForm(t) ? new FormData(t) : t);
de.getAdapter = co.getAdapter;
de.HttpStatusCode = Pn;
de.default = de;
const ho = {
  //Authentication
  BASE_URL: "http://ec2-35-154-22-76.ap-south-1.compute.amazonaws.com:80"
  // BASE_URL: "https://bac0-182-156-141-17.ngrok-free.app",
}, je = de.create({
  baseURL: ho.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), $a = () => localStorage.getItem("access_token"), qa = () => localStorage.getItem("refresh_token");
je.interceptors.request.use(
  (t) => {
    const e = $a();
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
      const r = qa();
      if (r)
        try {
          const n = await de.post(`${ho.BASE_URL}/auth/refresh-token`, {
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
class jr {
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
const tt = (t) => {
  const e = new jr();
  return $s({ mutationFn: (r) => e.createData(t, r) });
}, rt = (t, e) => {
  const r = new jr();
  return Ms({ queryKey: e, queryFn: () => r.getData(t) });
}, nt = (t, e, r) => {
  const n = new jr();
  return Ms({ queryKey: r, queryFn: () => n.getDataById(t, e), enabled: !!e });
}, st = (t, e) => {
  const r = new jr();
  return $s({ mutationFn: (n) => r.updateData(t, e, n) });
}, Ga = (t) => rt(t, ["get-all-inward-registers"]), Ha = (t, e) => nt(t, e, ["get-a-inward-register"]), za = (t) => tt(t), Ya = (t, e) => st(t, e), Ka = (t) => tt(t), Ja = (t, e) => nt(t, e, ["get-a-aqr"]), Qa = (t) => rt(t, ["get-all-aqr"]), Xa = (t, e) => st(t, e), Za = (t, e) => nt(t, e, ["get-a-dump-register"]), eu = (t) => rt(t, ["get-all-dump-registers"]), tu = (t) => tt(t), ru = (t, e) => st(t, e), nu = (t, e) => nt(t, e, ["get-a-second-sale-register"]), su = (t) => rt(t, ["get-all-second-sale-registers"]), ou = (t) => tt(t), iu = (t, e) => st(t, e), au = (t) => rt(t, ["get-all-vehicle-dispatch-registers"]), uu = (t, e) => nt(t, e, ["get-a-vehicle-dispatch-register"]), cu = (t) => tt(t), lu = (t, e) => st(t, e), fu = (t) => tt(t), du = (t, e) => nt(t, e, ["get-a-labor-attendance"]), hu = (t) => rt(t, ["get-all-labor-attendance"]), pu = (t, e) => st(t, e), yu = (t) => tt(t), mu = (t, e) => nt(t, e, ["get-a-labor-data"]), vu = (t) => rt(t, ["get-all-labor-data"]), bu = (t, e) => st(t, e), gu = (t, e) => nt(t, e, ["get-a-eod-report"]), Eu = (t) => rt(t, ["get-all-eod-reports"]), Ru = (t) => tt(t), _u = (t, e) => st(t, e);
export {
  Wa as INVENTORY_API_URL,
  Ka as useCreateAQR,
  tu as useCreateDumpRegister,
  Ru as useCreateEODReport,
  za as useCreateInwardRegister,
  fu as useCreateLaborAttendance,
  yu as useCreateLaborData,
  ou as useCreateSecondSaleRegister,
  cu as useCreateVehicleDispatchRegister,
  Ja as useGetAAQR,
  Za as useGetADumpRegister,
  gu as useGetAEODReport,
  Ha as useGetAInwardRegister,
  du as useGetALaborAttendance,
  mu as useGetALaborData,
  nu as useGetASecondSaleRegister,
  uu as useGetAVehicleDispatchRegister,
  Qa as useGetAllAQR,
  eu as useGetAllDumpRegisters,
  Eu as useGetAllEODReports,
  Ga as useGetAllInwardRegisters,
  hu as useGetAllLaborAttendance,
  vu as useGetAllLaborData,
  su as useGetAllSecondSaleRegisters,
  au as useGetAllVehicleDispatchRegisters,
  Xa as useUpdateAQR,
  ru as useUpdateDumpRegister,
  _u as useUpdateEODReport,
  Ya as useUpdateInwardRegister,
  pu as useUpdateLaborAttendance,
  bu as useUpdateLaborData,
  iu as useUpdateSecondSaleRegister,
  lu as useUpdateVehicleDispatchRegister
};
