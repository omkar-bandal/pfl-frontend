var us = (t) => {
  throw TypeError(t);
};
var un = (t, e, r) => e.has(t) || us("Cannot " + r);
var y = (t, e, r) => (un(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ne = (t, e, r) => e.has(t) ? us("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), B = (t, e, r, n) => (un(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), ie = (t, e, r) => (un(t, e, "access private method"), r);
const Ya = {
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
  //Temporaty Labors
  GET_ALL_TEMP_LABORS: "/tempLabour/",
  GET_A_TEMP_LABOR: "/tempLabour",
  POST_A_TEMP_LABOR: "/tempLabour/",
  UPDATE_TEMP_LABOR: "/tempLabour",
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
}, F = {
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
var Pr = class {
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
function Uo() {
}
function cs(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Bo(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function br(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Be(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ls(t) {
  return JSON.stringify(
    t,
    (e, r) => pn(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function hn(t, e) {
  if (t === e)
    return t;
  const r = fs(t) && fs(e);
  if (r || pn(t) && pn(e)) {
    const n = r ? t : Object.keys(t), o = n.length, a = r ? e : Object.keys(e), c = a.length, l = r ? [] : {};
    let R = 0;
    for (let m = 0; m < c; m++) {
      const E = r ? m : a[m];
      (!r && n.includes(E) || r) && t[E] === void 0 && e[E] === void 0 ? (l[E] = void 0, R++) : (l[E] = hn(t[E], e[E]), l[E] === t[E] && t[E] !== void 0 && R++);
    }
    return o === c && R === o ? t : l;
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
function fs(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function pn(t) {
  if (!ds(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!ds(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function ds(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function hs(t, e, r) {
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
var Rt, rt, Lt, xs, $o = (xs = class extends Pr {
  constructor() {
    super();
    ne(this, Rt);
    ne(this, rt);
    ne(this, Lt);
    B(this, Lt, (e) => {
      if (!wr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    y(this, rt) || this.setEventListener(y(this, Lt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = y(this, rt)) == null || e.call(this), B(this, rt, void 0));
  }
  setEventListener(e) {
    var r;
    B(this, Lt, e), (r = y(this, rt)) == null || r.call(this), B(this, rt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    y(this, Rt) !== e && (B(this, Rt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof y(this, Rt) == "boolean" ? y(this, Rt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, Rt = new WeakMap(), rt = new WeakMap(), Lt = new WeakMap(), xs), Go = new $o(), It, nt, kt, Ns, Mo = (Ns = class extends Pr {
  constructor() {
    super();
    ne(this, It, !0);
    ne(this, nt);
    ne(this, kt);
    B(this, kt, (e) => {
      if (!wr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    y(this, nt) || this.setEventListener(y(this, kt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = y(this, nt)) == null || e.call(this), B(this, nt, void 0));
  }
  setEventListener(e) {
    var r;
    B(this, kt, e), (r = y(this, nt)) == null || r.call(this), B(this, nt, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    y(this, It) !== e && (B(this, It, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return y(this, It);
  }
}, It = new WeakMap(), nt = new WeakMap(), kt = new WeakMap(), Ns), Vo = new Mo();
function qo(t) {
  return (t ?? "online") === "online" ? Vo.isOnline() : !0;
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
        l.forEach((R) => {
          r(R);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let R;
      e++;
      try {
        R = l();
      } finally {
        e--, e || c();
      }
      return R;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...R) => {
      a(() => {
        l(...R);
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
var Lr = Ho();
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
var Ce, H, Xt, Se, _t, xt, Ue, Zt, Nt, Ft, gt, vt, st, jt, K, Qt, En, mn, yn, Rn, _n, gn, vn, Us, Fs, Yo = (Fs = class extends Pr {
  constructor(e, r) {
    super();
    ne(this, K);
    ne(this, Ce);
    ne(this, H);
    ne(this, Xt);
    ne(this, Se);
    ne(this, _t);
    ne(this, xt);
    ne(this, Ue);
    ne(this, Zt);
    ne(this, Nt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    ne(this, Ft);
    ne(this, gt);
    ne(this, vt);
    ne(this, st);
    ne(this, jt, /* @__PURE__ */ new Set());
    this.options = r, B(this, Ce, e), B(this, Ue, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (y(this, H).addObserver(this), ps(y(this, H), this.options) ? ie(this, K, Qt).call(this) : this.updateResult(), ie(this, K, Rn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return bn(
      y(this, H),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return bn(
      y(this, H),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ie(this, K, _n).call(this), ie(this, K, gn).call(this), y(this, H).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, o = y(this, H);
    if (this.options = y(this, Ce).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Be(this.options.enabled, y(this, H)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ie(this, K, vn).call(this), y(this, H).setOptions(this.options), n._defaulted && !Or(this.options, n) && y(this, Ce).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: y(this, H),
      observer: this
    });
    const a = this.hasListeners();
    a && Es(
      y(this, H),
      o,
      this.options,
      n
    ) && ie(this, K, Qt).call(this), this.updateResult(r), a && (y(this, H) !== o || Be(this.options.enabled, y(this, H)) !== Be(n.enabled, y(this, H)) || br(this.options.staleTime, y(this, H)) !== br(n.staleTime, y(this, H))) && ie(this, K, En).call(this);
    const c = ie(this, K, mn).call(this);
    a && (y(this, H) !== o || Be(this.options.enabled, y(this, H)) !== Be(n.enabled, y(this, H)) || c !== y(this, st)) && ie(this, K, yn).call(this, c);
  }
  getOptimisticResult(e) {
    const r = y(this, Ce).getQueryCache().build(y(this, Ce), e), n = this.createResult(r, e);
    return Ko(this, n) && (B(this, Se, n), B(this, xt, this.options), B(this, _t, y(this, H).state)), n;
  }
  getCurrentResult() {
    return y(this, Se);
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
    y(this, jt).add(e);
  }
  getCurrentQuery() {
    return y(this, H);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const r = y(this, Ce).defaultQueryOptions(e), n = y(this, Ce).getQueryCache().build(y(this, Ce), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    return ie(this, K, Qt).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), y(this, Se)));
  }
  createResult(e, r) {
    var Ee;
    const n = y(this, H), o = this.options, a = y(this, Se), c = y(this, _t), l = y(this, xt), m = e !== n ? e.state : y(this, Xt), { state: E } = e;
    let _ = { ...E }, N = !1, P;
    if (r._optimisticResults) {
      const ee = this.hasListeners(), Ae = !ee && ps(e, r), Ge = ee && Es(e, n, r, o);
      (Ae || Ge) && (_ = {
        ..._,
        ...Wo(E.data, e.options)
      }), r._optimisticResults === "isRestoring" && (_.fetchStatus = "idle");
    }
    let { error: A, errorUpdatedAt: C, status: S } = _;
    if (r.select && _.data !== void 0)
      if (a && _.data === (c == null ? void 0 : c.data) && r.select === y(this, Zt))
        P = y(this, Nt);
      else
        try {
          B(this, Zt, r.select), P = r.select(_.data), P = hs(a == null ? void 0 : a.data, P, r), B(this, Nt, P), B(this, Ue, null);
        } catch (ee) {
          B(this, Ue, ee);
        }
    else
      P = _.data;
    if (r.placeholderData !== void 0 && P === void 0 && S === "pending") {
      let ee;
      if (a != null && a.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        ee = a.data;
      else if (ee = typeof r.placeholderData == "function" ? r.placeholderData(
        (Ee = y(this, Ft)) == null ? void 0 : Ee.state.data,
        y(this, Ft)
      ) : r.placeholderData, r.select && ee !== void 0)
        try {
          ee = r.select(ee), B(this, Ue, null);
        } catch (Ae) {
          B(this, Ue, Ae);
        }
      ee !== void 0 && (S = "success", P = hs(
        a == null ? void 0 : a.data,
        ee,
        r
      ), N = !0);
    }
    y(this, Ue) && (A = y(this, Ue), P = y(this, Nt), C = Date.now(), S = "error");
    const G = _.fetchStatus === "fetching", I = S === "pending", Q = S === "error", ae = I && G, j = P !== void 0;
    return {
      status: S,
      fetchStatus: _.fetchStatus,
      isPending: I,
      isSuccess: S === "success",
      isError: Q,
      isInitialLoading: ae,
      isLoading: ae,
      data: P,
      dataUpdatedAt: _.dataUpdatedAt,
      error: A,
      errorUpdatedAt: C,
      failureCount: _.fetchFailureCount,
      failureReason: _.fetchFailureReason,
      errorUpdateCount: _.errorUpdateCount,
      isFetched: _.dataUpdateCount > 0 || _.errorUpdateCount > 0,
      isFetchedAfterMount: _.dataUpdateCount > m.dataUpdateCount || _.errorUpdateCount > m.errorUpdateCount,
      isFetching: G,
      isRefetching: G && !I,
      isLoadingError: Q && !j,
      isPaused: _.fetchStatus === "paused",
      isPlaceholderData: N,
      isRefetchError: Q && j,
      isStale: In(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = y(this, Se), n = this.createResult(y(this, H), this.options);
    if (B(this, _t, y(this, H).state), B(this, xt, this.options), y(this, _t).data !== void 0 && B(this, Ft, y(this, H)), Or(n, r))
      return;
    B(this, Se, n);
    const o = {}, a = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: c } = this.options, l = typeof c == "function" ? c() : c;
      if (l === "all" || !l && !y(this, jt).size)
        return !0;
      const R = new Set(
        l ?? y(this, jt)
      );
      return this.options.throwOnError && R.add("error"), Object.keys(y(this, Se)).some((m) => {
        const E = m;
        return y(this, Se)[E] !== r[E] && R.has(E);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && a() && (o.listeners = !0), ie(this, K, Us).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ie(this, K, Rn).call(this);
  }
}, Ce = new WeakMap(), H = new WeakMap(), Xt = new WeakMap(), Se = new WeakMap(), _t = new WeakMap(), xt = new WeakMap(), Ue = new WeakMap(), Zt = new WeakMap(), Nt = new WeakMap(), Ft = new WeakMap(), gt = new WeakMap(), vt = new WeakMap(), st = new WeakMap(), jt = new WeakMap(), K = new WeakSet(), Qt = function(e) {
  ie(this, K, vn).call(this);
  let r = y(this, H).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(Uo)), r;
}, En = function() {
  ie(this, K, _n).call(this);
  const e = br(
    this.options.staleTime,
    y(this, H)
  );
  if (wr || y(this, Se).isStale || !cs(e))
    return;
  const n = Bo(y(this, Se).dataUpdatedAt, e) + 1;
  B(this, gt, setTimeout(() => {
    y(this, Se).isStale || this.updateResult();
  }, n));
}, mn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(y(this, H)) : this.options.refetchInterval) ?? !1;
}, yn = function(e) {
  ie(this, K, gn).call(this), B(this, st, e), !(wr || Be(this.options.enabled, y(this, H)) === !1 || !cs(y(this, st)) || y(this, st) === 0) && B(this, vt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Go.isFocused()) && ie(this, K, Qt).call(this);
  }, y(this, st)));
}, Rn = function() {
  ie(this, K, En).call(this), ie(this, K, yn).call(this, ie(this, K, mn).call(this));
}, _n = function() {
  y(this, gt) && (clearTimeout(y(this, gt)), B(this, gt, void 0));
}, gn = function() {
  y(this, vt) && (clearInterval(y(this, vt)), B(this, vt, void 0));
}, vn = function() {
  const e = y(this, Ce).getQueryCache().build(y(this, Ce), this.options);
  if (e === y(this, H))
    return;
  const r = y(this, H);
  B(this, H, e), B(this, Xt, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, Us = function(e) {
  Lr.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(y(this, Se));
    }), y(this, Ce).getQueryCache().notify({
      query: y(this, H),
      type: "observerResultsUpdated"
    });
  });
}, Fs);
function Qo(t, e) {
  return Be(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function ps(t, e) {
  return Qo(t, e) || t.state.data !== void 0 && bn(t, e, e.refetchOnMount);
}
function bn(t, e, r) {
  if (Be(e.enabled, t) !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && In(t, e);
  }
  return !1;
}
function Es(t, e, r, n) {
  return (t !== e || Be(n.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && In(t, r);
}
function In(t, e) {
  return Be(e.enabled, t) !== !1 && t.isStaleByTime(br(e.staleTime, t));
}
function Ko(t, e) {
  return !Or(t.getCurrentResult(), e);
}
var ot, it, De, He, We, Tr, Tn, js, Jo = (js = class extends Pr {
  constructor(e, r) {
    super();
    ne(this, We);
    ne(this, ot);
    ne(this, it);
    ne(this, De);
    ne(this, He);
    B(this, ot, e), this.setOptions(r), this.bindMethods(), ie(this, We, Tr).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const r = this.options;
    this.options = y(this, ot).defaultMutationOptions(e), Or(this.options, r) || y(this, ot).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: y(this, De),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && ls(r.mutationKey) !== ls(this.options.mutationKey) ? this.reset() : ((n = y(this, De)) == null ? void 0 : n.state.status) === "pending" && y(this, De).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = y(this, De)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    ie(this, We, Tr).call(this), ie(this, We, Tn).call(this, e);
  }
  getCurrentResult() {
    return y(this, it);
  }
  reset() {
    var e;
    (e = y(this, De)) == null || e.removeObserver(this), B(this, De, void 0), ie(this, We, Tr).call(this), ie(this, We, Tn).call(this);
  }
  mutate(e, r) {
    var n;
    return B(this, He, r), (n = y(this, De)) == null || n.removeObserver(this), B(this, De, y(this, ot).getMutationCache().build(y(this, ot), this.options)), y(this, De).addObserver(this), y(this, De).execute(e);
  }
}, ot = new WeakMap(), it = new WeakMap(), De = new WeakMap(), He = new WeakMap(), We = new WeakSet(), Tr = function() {
  var r;
  const e = ((r = y(this, De)) == null ? void 0 : r.state) ?? zo();
  B(this, it, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Tn = function(e) {
  Lr.batch(() => {
    var r, n, o, a, c, l, R, m;
    if (y(this, He) && this.hasListeners()) {
      const E = y(this, it).variables, _ = y(this, it).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (r = y(this, He)).onSuccess) == null || n.call(r, e.data, E, _), (a = (o = y(this, He)).onSettled) == null || a.call(o, e.data, null, E, _)) : (e == null ? void 0 : e.type) === "error" && ((l = (c = y(this, He)).onError) == null || l.call(c, e.error, E, _), (m = (R = y(this, He)).onSettled) == null || m.call(
        R,
        void 0,
        e.error,
        E,
        _
      ));
    }
    this.listeners.forEach((E) => {
      E(y(this, it));
    });
  });
}, js), Sn = { exports: {} }, $ = {};
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
function Xo() {
  if (ms) return $;
  ms = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function N(f) {
    return f === null || typeof f != "object" ? null : (f = _ && f[_] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, C = {};
  function S(f, v, M) {
    this.props = f, this.context = v, this.refs = C, this.updater = M || P;
  }
  S.prototype.isReactComponent = {}, S.prototype.setState = function(f, v) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, v, "setState");
  }, S.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function G() {
  }
  G.prototype = S.prototype;
  function I(f, v, M) {
    this.props = f, this.context = v, this.refs = C, this.updater = M || P;
  }
  var Q = I.prototype = new G();
  Q.constructor = I, A(Q, S.prototype), Q.isPureReactComponent = !0;
  var ae = Array.isArray, j = Object.prototype.hasOwnProperty, oe = { current: null }, Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(f, v, M) {
    var q, z = {}, se = null, te = null;
    if (v != null) for (q in v.ref !== void 0 && (te = v.ref), v.key !== void 0 && (se = "" + v.key), v) j.call(v, q) && !Ee.hasOwnProperty(q) && (z[q] = v[q]);
    var Z = arguments.length - 2;
    if (Z === 1) z.children = M;
    else if (1 < Z) {
      for (var J = Array(Z), me = 0; me < Z; me++) J[me] = arguments[me + 2];
      z.children = J;
    }
    if (f && f.defaultProps) for (q in Z = f.defaultProps, Z) z[q] === void 0 && (z[q] = Z[q]);
    return { $$typeof: t, type: f, key: se, ref: te, props: z, _owner: oe.current };
  }
  function Ae(f, v) {
    return { $$typeof: t, type: f.type, key: v, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Ge(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }
  function $t(f) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(M) {
      return v[M];
    });
  }
  var at = /\/+/g;
  function be(f, v) {
    return typeof f == "object" && f !== null && f.key != null ? $t("" + f.key) : v.toString(36);
  }
  function we(f, v, M, q, z) {
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
    if (te) return te = f, z = z(te), f = q === "" ? "." + be(te, 0) : q, ae(z) ? (M = "", f != null && (M = f.replace(at, "$&/") + "/"), we(z, v, M, "", function(me) {
      return me;
    })) : z != null && (Ge(z) && (z = Ae(z, M + (!z.key || te && te.key === z.key ? "" : ("" + z.key).replace(at, "$&/") + "/") + f)), v.push(z)), 1;
    if (te = 0, q = q === "" ? "." : q + ":", ae(f)) for (var Z = 0; Z < f.length; Z++) {
      se = f[Z];
      var J = q + be(se, Z);
      te += we(se, v, M, J, z);
    }
    else if (J = N(f), typeof J == "function") for (f = J.call(f), Z = 0; !(se = f.next()).done; ) se = se.value, J = q + be(se, Z++), te += we(se, v, M, J, z);
    else if (se === "object") throw v = String(f), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return te;
  }
  function _e(f, v, M) {
    if (f == null) return f;
    var q = [], z = 0;
    return we(f, q, "", "", function(se) {
      return v.call(M, se, z++);
    }), q;
  }
  function ke(f) {
    if (f._status === -1) {
      var v = f._result;
      v = v(), v.then(function(M) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = M);
      }, function(M) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = M);
      }), f._status === -1 && (f._status = 0, f._result = v);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var O = { current: null }, Ne = { transition: null }, ut = { ReactCurrentDispatcher: O, ReactCurrentBatchConfig: Ne, ReactCurrentOwner: oe };
  function Me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return $.Children = { map: _e, forEach: function(f, v, M) {
    _e(f, function() {
      v.apply(this, arguments);
    }, M);
  }, count: function(f) {
    var v = 0;
    return _e(f, function() {
      v++;
    }), v;
  }, toArray: function(f) {
    return _e(f, function(v) {
      return v;
    }) || [];
  }, only: function(f) {
    if (!Ge(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, $.Component = S, $.Fragment = r, $.Profiler = o, $.PureComponent = I, $.StrictMode = n, $.Suspense = R, $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ut, $.act = Me, $.cloneElement = function(f, v, M) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var q = A({}, f.props), z = f.key, se = f.ref, te = f._owner;
    if (v != null) {
      if (v.ref !== void 0 && (se = v.ref, te = oe.current), v.key !== void 0 && (z = "" + v.key), f.type && f.type.defaultProps) var Z = f.type.defaultProps;
      for (J in v) j.call(v, J) && !Ee.hasOwnProperty(J) && (q[J] = v[J] === void 0 && Z !== void 0 ? Z[J] : v[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) q.children = M;
    else if (1 < J) {
      Z = Array(J);
      for (var me = 0; me < J; me++) Z[me] = arguments[me + 2];
      q.children = Z;
    }
    return { $$typeof: t, type: f.type, key: z, ref: se, props: q, _owner: te };
  }, $.createContext = function(f) {
    return f = { $$typeof: c, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: a, _context: f }, f.Consumer = f;
  }, $.createElement = ee, $.createFactory = function(f) {
    var v = ee.bind(null, f);
    return v.type = f, v;
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(f) {
    return { $$typeof: l, render: f };
  }, $.isValidElement = Ge, $.lazy = function(f) {
    return { $$typeof: E, _payload: { _status: -1, _result: f }, _init: ke };
  }, $.memo = function(f, v) {
    return { $$typeof: m, type: f, compare: v === void 0 ? null : v };
  }, $.startTransition = function(f) {
    var v = Ne.transition;
    Ne.transition = {};
    try {
      f();
    } finally {
      Ne.transition = v;
    }
  }, $.unstable_act = Me, $.useCallback = function(f, v) {
    return O.current.useCallback(f, v);
  }, $.useContext = function(f) {
    return O.current.useContext(f);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(f) {
    return O.current.useDeferredValue(f);
  }, $.useEffect = function(f, v) {
    return O.current.useEffect(f, v);
  }, $.useId = function() {
    return O.current.useId();
  }, $.useImperativeHandle = function(f, v, M) {
    return O.current.useImperativeHandle(f, v, M);
  }, $.useInsertionEffect = function(f, v) {
    return O.current.useInsertionEffect(f, v);
  }, $.useLayoutEffect = function(f, v) {
    return O.current.useLayoutEffect(f, v);
  }, $.useMemo = function(f, v) {
    return O.current.useMemo(f, v);
  }, $.useReducer = function(f, v, M) {
    return O.current.useReducer(f, v, M);
  }, $.useRef = function(f) {
    return O.current.useRef(f);
  }, $.useState = function(f) {
    return O.current.useState(f);
  }, $.useSyncExternalStore = function(f, v, M) {
    return O.current.useSyncExternalStore(f, v, M);
  }, $.useTransition = function() {
    return O.current.useTransition();
  }, $.version = "18.3.1", $;
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
var ys;
function Zo() {
  return ys || (ys = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.3.1", n = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), m = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = Symbol.iterator, G = "@@iterator";
      function I(s) {
        if (s === null || typeof s != "object")
          return null;
        var i = S && s[S] || s[G];
        return typeof i == "function" ? i : null;
      }
      var Q = {
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
      }, oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ee = {}, ee = null;
      function Ae(s) {
        ee = s;
      }
      Ee.setExtraStackFrame = function(s) {
        ee = s;
      }, Ee.getCurrentStack = null, Ee.getStackAddendum = function() {
        var s = "";
        ee && (s += ee);
        var i = Ee.getCurrentStack;
        return i && (s += i() || ""), s;
      };
      var Ge = !1, $t = !1, at = !1, be = !1, we = !1, _e = {
        ReactCurrentDispatcher: Q,
        ReactCurrentBatchConfig: ae,
        ReactCurrentOwner: oe
      };
      _e.ReactDebugCurrentFrame = Ee, _e.ReactCurrentActQueue = j;
      function ke(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          Ne("warn", s, d);
        }
      }
      function O(s) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            d[p - 1] = arguments[p];
          Ne("error", s, d);
        }
      }
      function Ne(s, i, d) {
        {
          var p = _e.ReactDebugCurrentFrame, T = p.getStackAddendum();
          T !== "" && (i += "%s", d = d.concat([T]));
          var D = d.map(function(w) {
            return String(w);
          });
          D.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, D);
        }
      }
      var ut = {};
      function Me(s, i) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", T = p + "." + i;
          if (ut[T])
            return;
          O("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, p), ut[T] = !0;
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
          Me(s, "forceUpdate");
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
          Me(s, "replaceState");
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
          Me(s, "setState");
        }
      }, v = Object.assign, M = {};
      Object.freeze(M);
      function q(s, i, d) {
        this.props = s, this.context = i, this.refs = M, this.updater = d || f;
      }
      q.prototype.isReactComponent = {}, q.prototype.setState = function(s, i) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, i, "setState");
      }, q.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var z = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, se = function(s, i) {
          Object.defineProperty(q.prototype, s, {
            get: function() {
              ke("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
            }
          });
        };
        for (var te in z)
          z.hasOwnProperty(te) && se(te, z[te]);
      }
      function Z() {
      }
      Z.prototype = q.prototype;
      function J(s, i, d) {
        this.props = s, this.context = i, this.refs = M, this.updater = d || f;
      }
      var me = J.prototype = new Z();
      me.constructor = J, v(me, q.prototype), me.isPureReactComponent = !0;
      function Ur() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var rr = Array.isArray;
      function St(s) {
        return rr(s);
      }
      function Br(s) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function At(s) {
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
        if (At(s))
          return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(s)), Ke(s);
      }
      function nr(s, i, d) {
        var p = s.displayName;
        if (p)
          return p;
        var T = i.displayName || i.name || "";
        return T !== "" ? d + "(" + T + ")" : d;
      }
      function lt(s) {
        return s.displayName || "Context";
      }
      function Fe(s) {
        if (s == null)
          return null;
        if (typeof s.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
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
          case _:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case m:
              var i = s;
              return lt(i) + ".Consumer";
            case R:
              var d = s;
              return lt(d._context) + ".Provider";
            case E:
              return nr(s, s.render, "ForwardRef");
            case P:
              var p = s.displayName || null;
              return p !== null ? p : Fe(s.type) || "Memo";
            case A: {
              var T = s, D = T._payload, w = T._init;
              try {
                return Fe(w(D));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ft = Object.prototype.hasOwnProperty, wt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, sr, or, Ot;
      Ot = {};
      function Gt(s) {
        if (ft.call(s, "ref")) {
          var i = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function Je(s) {
        if (ft.call(s, "key")) {
          var i = Object.getOwnPropertyDescriptor(s, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function $r(s, i) {
        var d = function() {
          sr || (sr = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: d,
          configurable: !0
        });
      }
      function ir(s, i) {
        var d = function() {
          or || (or = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: d,
          configurable: !0
        });
      }
      function ar(s) {
        if (typeof s.ref == "string" && oe.current && s.__self && oe.current.stateNode !== s.__self) {
          var i = Fe(oe.current.type);
          Ot[i] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, s.ref), Ot[i] = !0);
        }
      }
      var dt = function(s, i, d, p, T, D, w) {
        var k = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: s,
          key: i,
          ref: d,
          props: w,
          // Record the component responsible for creating this element.
          _owner: D
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
          value: T
        }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
      };
      function Gr(s, i, d) {
        var p, T = {}, D = null, w = null, k = null, W = null;
        if (i != null) {
          Gt(i) && (w = i.ref, ar(i)), Je(i) && (ct(i.key), D = "" + i.key), k = i.__self === void 0 ? null : i.__self, W = i.__source === void 0 ? null : i.__source;
          for (p in i)
            ft.call(i, p) && !wt.hasOwnProperty(p) && (T[p] = i[p]);
        }
        var re = arguments.length - 2;
        if (re === 1)
          T.children = d;
        else if (re > 1) {
          for (var ue = Array(re), ce = 0; ce < re; ce++)
            ue[ce] = arguments[ce + 2];
          Object.freeze && Object.freeze(ue), T.children = ue;
        }
        if (s && s.defaultProps) {
          var he = s.defaultProps;
          for (p in he)
            T[p] === void 0 && (T[p] = he[p]);
        }
        if (D || w) {
          var ye = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          D && $r(T, ye), w && ir(T, ye);
        }
        return dt(s, D, w, k, W, oe.current, T);
      }
      function Mr(s, i) {
        var d = dt(s.type, i, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function Vr(s, i, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, T = v({}, s.props), D = s.key, w = s.ref, k = s._self, W = s._source, re = s._owner;
        if (i != null) {
          Gt(i) && (w = i.ref, re = oe.current), Je(i) && (ct(i.key), D = "" + i.key);
          var ue;
          s.type && s.type.defaultProps && (ue = s.type.defaultProps);
          for (p in i)
            ft.call(i, p) && !wt.hasOwnProperty(p) && (i[p] === void 0 && ue !== void 0 ? T[p] = ue[p] : T[p] = i[p]);
        }
        var ce = arguments.length - 2;
        if (ce === 1)
          T.children = d;
        else if (ce > 1) {
          for (var he = Array(ce), ye = 0; ye < ce; ye++)
            he[ye] = arguments[ye + 2];
          T.children = he;
        }
        return dt(s.type, D, w, k, W, re, T);
      }
      function Xe(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var ur = ".", qr = ":";
      function Hr(s) {
        var i = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(i, function(T) {
          return d[T];
        });
        return "$" + p;
      }
      var Ct = !1, cr = /\/+/g;
      function Ve(s) {
        return s.replace(cr, "$&/");
      }
      function ht(s, i) {
        return typeof s == "object" && s !== null && s.key != null ? (ct(s.key), Hr("" + s.key)) : i.toString(36);
      }
      function Ze(s, i, d, p, T) {
        var D = typeof s;
        (D === "undefined" || D === "boolean") && (s = null);
        var w = !1;
        if (s === null)
          w = !0;
        else
          switch (D) {
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
          var k = s, W = T(k), re = p === "" ? ur + ht(k, 0) : p;
          if (St(W)) {
            var ue = "";
            re != null && (ue = Ve(re) + "/"), Ze(W, i, ue, "", function(jo) {
              return jo;
            });
          } else W != null && (Xe(W) && (W.key && (!k || k.key !== W.key) && ct(W.key), W = Mr(
            W,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (W.key && (!k || k.key !== W.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ve("" + W.key) + "/"
            ) : "") + re
          )), i.push(W));
          return 1;
        }
        var ce, he, ye = 0, ve = p === "" ? ur : p + qr;
        if (St(s))
          for (var vr = 0; vr < s.length; vr++)
            ce = s[vr], he = ve + ht(ce, vr), ye += Ze(ce, i, d, he, T);
        else {
          var an = I(s);
          if (typeof an == "function") {
            var os = s;
            an === os.entries && (Ct || ke("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ct = !0);
            for (var No = an.call(os), is, Fo = 0; !(is = No.next()).done; )
              ce = is.value, he = ve + ht(ce, Fo++), ye += Ze(ce, i, d, he, T);
          } else if (D === "object") {
            var as = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (as === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : as) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ye;
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
      function lr(s, i, d) {
        pt(s, function() {
          i.apply(this, arguments);
        }, d);
      }
      function zr(s) {
        return pt(s, function(i) {
          return i;
        }) || [];
      }
      function fr(s) {
        if (!Xe(s))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
      function dr(s) {
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
          $$typeof: R,
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
                return p || (p = !0, O("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), i.Provider;
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
                return d || (d = !0, O("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), i.Consumer;
              }
            },
            displayName: {
              get: function() {
                return i.displayName;
              },
              set: function(w) {
                T || (ke("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", w), T = !0);
              }
            }
          }), i.Consumer = D;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var Et = -1, Mt = 0, Vt = 1, hr = 2;
      function Yr(s) {
        if (s._status === Et) {
          var i = s._result, d = i();
          if (d.then(function(D) {
            if (s._status === Mt || s._status === Et) {
              var w = s;
              w._status = Vt, w._result = D;
            }
          }, function(D) {
            if (s._status === Mt || s._status === Et) {
              var w = s;
              w._status = hr, w._result = D;
            }
          }), s._status === Et) {
            var p = s;
            p._status = Mt, p._result = d;
          }
        }
        if (s._status === Vt) {
          var T = s._result;
          return T === void 0 && O(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, T), "default" in T || O(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, T), T.default;
        } else
          throw s._result;
      }
      function Qr(s) {
        var i = {
          // We use these fields to store the result.
          _status: Et,
          _result: s
        }, d = {
          $$typeof: A,
          _payload: i,
          _init: Yr
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
                O("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = D, Object.defineProperty(d, "defaultProps", {
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
                O("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), T = D, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function Kr(s) {
        s != null && s.$$typeof === P ? O("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? O("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && O("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && O("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
      var pr;
      pr = Symbol.for("react.module.reference");
      function u(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === a || s === l || we || s === c || s === _ || s === N || be || s === C || Ge || $t || at || typeof s == "object" && s !== null && (s.$$typeof === A || s.$$typeof === P || s.$$typeof === R || s.$$typeof === m || s.$$typeof === E || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === pr || s.getModuleId !== void 0));
      }
      function g(s, i) {
        u(s) || O("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
        var d = {
          $$typeof: P,
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
      function b() {
        var s = Q.current;
        return s === null && O(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
      }
      function L(s) {
        var i = b();
        if (s._context !== void 0) {
          var d = s._context;
          d.Consumer === s ? O("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === s && O("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return i.useContext(s);
      }
      function Y(s) {
        var i = b();
        return i.useState(s);
      }
      function X(s, i, d) {
        var p = b();
        return p.useReducer(s, i, d);
      }
      function V(s) {
        var i = b();
        return i.useRef(s);
      }
      function U(s, i) {
        var d = b();
        return d.useEffect(s, i);
      }
      function ge(s, i) {
        var d = b();
        return d.useInsertionEffect(s, i);
      }
      function de(s, i) {
        var d = b();
        return d.useLayoutEffect(s, i);
      }
      function pe(s, i) {
        var d = b();
        return d.useCallback(s, i);
      }
      function Oe(s, i) {
        var d = b();
        return d.useMemo(s, i);
      }
      function et(s, i, d) {
        var p = b();
        return p.useImperativeHandle(s, i, d);
      }
      function qe(s, i) {
        {
          var d = b();
          return d.useDebugValue(s, i);
        }
      }
      function Te() {
        var s = b();
        return s.useTransition();
      }
      function qt(s) {
        var i = b();
        return i.useDeferredValue(s);
      }
      function Jr() {
        var s = b();
        return s.useId();
      }
      function Xr(s, i, d) {
        var p = b();
        return p.useSyncExternalStore(s, i, d);
      }
      var Ht = 0, Un, Bn, $n, Gn, Mn, Vn, qn;
      function Hn() {
      }
      Hn.__reactDisabledLog = !0;
      function yo() {
        {
          if (Ht === 0) {
            Un = console.log, Bn = console.info, $n = console.warn, Gn = console.error, Mn = console.group, Vn = console.groupCollapsed, qn = console.groupEnd;
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
                value: Un
              }),
              info: v({}, s, {
                value: Bn
              }),
              warn: v({}, s, {
                value: $n
              }),
              error: v({}, s, {
                value: Gn
              }),
              group: v({}, s, {
                value: Mn
              }),
              groupCollapsed: v({}, s, {
                value: Vn
              }),
              groupEnd: v({}, s, {
                value: qn
              })
            });
          }
          Ht < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Zr = _e.ReactCurrentDispatcher, en;
      function Er(s, i, d) {
        {
          if (en === void 0)
            try {
              throw Error();
            } catch (T) {
              var p = T.stack.trim().match(/\n( *(at )?)/);
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
      function Wn(s, i) {
        if (!s || tn)
          return "";
        {
          var d = mr.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        tn = !0;
        var T = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var D;
        D = Zr.current, Zr.current = null, yo();
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
              } catch (ve) {
                p = ve;
              }
              Reflect.construct(s, [], w);
            } else {
              try {
                w.call();
              } catch (ve) {
                p = ve;
              }
              s.call(w.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ve) {
              p = ve;
            }
            s();
          }
        } catch (ve) {
          if (ve && p && typeof ve.stack == "string") {
            for (var k = ve.stack.split(`
`), W = p.stack.split(`
`), re = k.length - 1, ue = W.length - 1; re >= 1 && ue >= 0 && k[re] !== W[ue]; )
              ue--;
            for (; re >= 1 && ue >= 0; re--, ue--)
              if (k[re] !== W[ue]) {
                if (re !== 1 || ue !== 1)
                  do
                    if (re--, ue--, ue < 0 || k[re] !== W[ue]) {
                      var ce = `
` + k[re].replace(" at new ", " at ");
                      return s.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", s.displayName)), typeof s == "function" && mr.set(s, ce), ce;
                    }
                  while (re >= 1 && ue >= 0);
                break;
              }
          }
        } finally {
          tn = !1, Zr.current = D, Ro(), Error.prepareStackTrace = T;
        }
        var he = s ? s.displayName || s.name : "", ye = he ? Er(he) : "";
        return typeof s == "function" && mr.set(s, ye), ye;
      }
      function go(s, i, d) {
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
          return Er(s);
        switch (s) {
          case _:
            return Er("Suspense");
          case N:
            return Er("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case E:
              return go(s.render);
            case P:
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
      var zn = {}, Yn = _e.ReactDebugCurrentFrame;
      function Rr(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          Yn.setExtraStackFrame(d);
        } else
          Yn.setExtraStackFrame(null);
      }
      function bo(s, i, d, p, T) {
        {
          var D = Function.call.bind(ft);
          for (var w in s)
            if (D(s, w)) {
              var k = void 0;
              try {
                if (typeof s[w] != "function") {
                  var W = Error((p || "React class") + ": " + d + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw W.name = "Invariant Violation", W;
                }
                k = s[w](i, w, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (re) {
                k = re;
              }
              k && !(k instanceof Error) && (Rr(T), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, w, typeof k), Rr(null)), k instanceof Error && !(k.message in zn) && (zn[k.message] = !0, Rr(T), O("Failed %s type: %s", d, k.message), Rr(null));
            }
        }
      }
      function Dt(s) {
        if (s) {
          var i = s._owner, d = yr(s.type, s._source, i ? i.type : null);
          Ae(d);
        } else
          Ae(null);
      }
      var rn;
      rn = !1;
      function Qn() {
        if (oe.current) {
          var s = Fe(oe.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function To(s) {
        if (s !== void 0) {
          var i = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + i + ":" + d + ".";
        }
        return "";
      }
      function So(s) {
        return s != null ? To(s.__source) : "";
      }
      var Kn = {};
      function Ao(s) {
        var i = Qn();
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
          var d = Ao(i);
          if (!Kn[d]) {
            Kn[d] = !0;
            var p = "";
            s && s._owner && s._owner !== oe.current && (p = " It was passed a child from " + Fe(s._owner.type) + "."), Dt(s), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), Dt(null);
          }
        }
      }
      function Xn(s, i) {
        if (typeof s == "object") {
          if (St(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              Xe(p) && Jn(p, i);
            }
          else if (Xe(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var T = I(s);
            if (typeof T == "function" && T !== s.entries)
              for (var D = T.call(s), w; !(w = D.next()).done; )
                Xe(w.value) && Jn(w.value, i);
          }
        }
      }
      function Zn(s) {
        {
          var i = s.type;
          if (i == null || typeof i == "string")
            return;
          var d;
          if (typeof i == "function")
            d = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === E || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === P))
            d = i.propTypes;
          else
            return;
          if (d) {
            var p = Fe(i);
            bo(d, s.props, "prop", p, s);
          } else if (i.PropTypes !== void 0 && !rn) {
            rn = !0;
            var T = Fe(i);
            O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function wo(s) {
        {
          for (var i = Object.keys(s.props), d = 0; d < i.length; d++) {
            var p = i[d];
            if (p !== "children" && p !== "key") {
              Dt(s), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Dt(null);
              break;
            }
          }
          s.ref !== null && (Dt(s), O("Invalid attribute `ref` supplied to `React.Fragment`."), Dt(null));
        }
      }
      function es(s, i, d) {
        var p = u(s);
        if (!p) {
          var T = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = So(i);
          D ? T += D : T += Qn();
          var w;
          s === null ? w = "null" : St(s) ? w = "array" : s !== void 0 && s.$$typeof === n ? (w = "<" + (Fe(s.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : w = typeof s, O("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, T);
        }
        var k = Gr.apply(this, arguments);
        if (k == null)
          return k;
        if (p)
          for (var W = 2; W < arguments.length; W++)
            Xn(arguments[W], s);
        return s === a ? wo(k) : Zn(k), k;
      }
      var ts = !1;
      function Oo(s) {
        var i = es.bind(null, s);
        return i.type = s, ts || (ts = !0, ke("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return ke("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), i;
      }
      function Co(s, i, d) {
        for (var p = Vr.apply(this, arguments), T = 2; T < arguments.length; T++)
          Xn(arguments[T], p.type);
        return Zn(p), p;
      }
      function Do(s, i) {
        var d = ae.transition;
        ae.transition = {};
        var p = ae.transition;
        ae.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          s();
        } finally {
          if (ae.transition = d, d === null && p._updatedFibers) {
            var T = p._updatedFibers.size;
            T > 10 && ke("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var rs = !1, _r = null;
      function Po(s) {
        if (_r === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), d = t && t[i];
            _r = d.call(t, "timers").setImmediate;
          } catch {
            _r = function(T) {
              rs === !1 && (rs = !0, typeof MessageChannel > "u" && O("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var D = new MessageChannel();
              D.port1.onmessage = T, D.port2.postMessage(void 0);
            };
          }
        return _r(s);
      }
      var Pt = 0, ns = !1;
      function ss(s) {
        {
          var i = Pt;
          Pt++, j.current === null && (j.current = []);
          var d = j.isBatchingLegacy, p;
          try {
            if (j.isBatchingLegacy = !0, p = s(), !d && j.didScheduleLegacyUpdate) {
              var T = j.current;
              T !== null && (j.didScheduleLegacyUpdate = !1, on(T));
            }
          } catch (he) {
            throw gr(i), he;
          } finally {
            j.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var D = p, w = !1, k = {
              then: function(he, ye) {
                w = !0, D.then(function(ve) {
                  gr(i), Pt === 0 ? nn(ve, he, ye) : he(ve);
                }, function(ve) {
                  gr(i), ye(ve);
                });
              }
            };
            return !ns && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              w || (ns = !0, O("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), k;
          } else {
            var W = p;
            if (gr(i), Pt === 0) {
              var re = j.current;
              re !== null && (on(re), j.current = null);
              var ue = {
                then: function(he, ye) {
                  j.current === null ? (j.current = [], nn(W, he, ye)) : he(W);
                }
              };
              return ue;
            } else {
              var ce = {
                then: function(he, ye) {
                  he(W);
                }
              };
              return ce;
            }
          }
        }
      }
      function gr(s) {
        s !== Pt - 1 && O("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Pt = s;
      }
      function nn(s, i, d) {
        {
          var p = j.current;
          if (p !== null)
            try {
              on(p), Po(function() {
                p.length === 0 ? (j.current = null, i(s)) : nn(s, i, d);
              });
            } catch (T) {
              d(T);
            }
          else
            i(s);
        }
      }
      var sn = !1;
      function on(s) {
        if (!sn) {
          sn = !0;
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
            sn = !1;
          }
        }
      }
      var Lo = es, Io = Co, ko = Oo, xo = {
        map: pt,
        forEach: lr,
        count: Wr,
        toArray: zr,
        only: fr
      };
      e.Children = xo, e.Component = q, e.Fragment = a, e.Profiler = l, e.PureComponent = J, e.StrictMode = c, e.Suspense = _, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _e, e.act = ss, e.cloneElement = Io, e.createContext = dr, e.createElement = Lo, e.createFactory = ko, e.createRef = Ur, e.forwardRef = Kr, e.isValidElement = Xe, e.lazy = Qr, e.memo = g, e.startTransition = Do, e.unstable_act = ss, e.useCallback = pe, e.useContext = L, e.useDebugValue = qe, e.useDeferredValue = qt, e.useEffect = U, e.useId = Jr, e.useImperativeHandle = et, e.useInsertionEffect = ge, e.useLayoutEffect = de, e.useMemo = Oe, e.useReducer = X, e.useRef = V, e.useState = Y, e.useSyncExternalStore = Xr, e.useTransition = Te, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kt, Kt.exports)), Kt.exports;
}
process.env.NODE_ENV === "production" ? Sn.exports = Xo() : Sn.exports = Zo();
var Re = Sn.exports, Wt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rs;
function ei() {
  if (Rs) return Wt;
  Rs = 1;
  var t = Re, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, R, m) {
    var E, _ = {}, N = null, P = null;
    m !== void 0 && (N = "" + m), R.key !== void 0 && (N = "" + R.key), R.ref !== void 0 && (P = R.ref);
    for (E in R) n.call(R, E) && !a.hasOwnProperty(E) && (_[E] = R[E]);
    if (l && l.defaultProps) for (E in R = l.defaultProps, R) _[E] === void 0 && (_[E] = R[E]);
    return { $$typeof: e, type: l, key: N, ref: P, props: _, _owner: o.current };
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
var _s;
function ti() {
  return _s || (_s = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Re, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), A = Symbol.iterator, C = "@@iterator";
    function S(u) {
      if (u === null || typeof u != "object")
        return null;
      var g = A && u[A] || u[C];
      return typeof g == "function" ? g : null;
    }
    var G = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(u) {
      {
        for (var g = arguments.length, b = new Array(g > 1 ? g - 1 : 0), L = 1; L < g; L++)
          b[L - 1] = arguments[L];
        Q("error", u, b);
      }
    }
    function Q(u, g, b) {
      {
        var L = G.ReactDebugCurrentFrame, Y = L.getStackAddendum();
        Y !== "" && (g += "%s", b = b.concat([Y]));
        var X = b.map(function(V) {
          return String(V);
        });
        X.unshift("Warning: " + g), Function.prototype.apply.call(console[u], console, X);
      }
    }
    var ae = !1, j = !1, oe = !1, Ee = !1, ee = !1, Ae;
    Ae = Symbol.for("react.module.reference");
    function Ge(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === a || ee || u === o || u === m || u === E || Ee || u === P || ae || j || oe || typeof u == "object" && u !== null && (u.$$typeof === N || u.$$typeof === _ || u.$$typeof === c || u.$$typeof === l || u.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === Ae || u.getModuleId !== void 0));
    }
    function $t(u, g, b) {
      var L = u.displayName;
      if (L)
        return L;
      var Y = g.displayName || g.name || "";
      return Y !== "" ? b + "(" + Y + ")" : b;
    }
    function at(u) {
      return u.displayName || "Context";
    }
    function be(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
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
            var b = u;
            return at(b._context) + ".Provider";
          case R:
            return $t(u, u.render, "ForwardRef");
          case _:
            var L = u.displayName || null;
            return L !== null ? L : be(u.type) || "Memo";
          case N: {
            var Y = u, X = Y._payload, V = Y._init;
            try {
              return be(V(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var we = Object.assign, _e = 0, ke, O, Ne, ut, Me, f, v;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function q() {
      {
        if (_e === 0) {
          ke = console.log, O = console.info, Ne = console.warn, ut = console.error, Me = console.group, f = console.groupCollapsed, v = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: M,
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
    function z() {
      {
        if (_e--, _e === 0) {
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
              value: O
            }),
            warn: we({}, u, {
              value: Ne
            }),
            error: we({}, u, {
              value: ut
            }),
            group: we({}, u, {
              value: Me
            }),
            groupCollapsed: we({}, u, {
              value: f
            }),
            groupEnd: we({}, u, {
              value: v
            })
          });
        }
        _e < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = G.ReactCurrentDispatcher, te;
    function Z(u, g, b) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (Y) {
            var L = Y.stack.trim().match(/\n( *(at )?)/);
            te = L && L[1] || "";
          }
        return `
` + te + u;
      }
    }
    var J = !1, me;
    {
      var Ur = typeof WeakMap == "function" ? WeakMap : Map;
      me = new Ur();
    }
    function rr(u, g) {
      if (!u || J)
        return "";
      {
        var b = me.get(u);
        if (b !== void 0)
          return b;
      }
      var L;
      J = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = se.current, se.current = null, q();
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
            } catch (Te) {
              L = Te;
            }
            Reflect.construct(u, [], V);
          } else {
            try {
              V.call();
            } catch (Te) {
              L = Te;
            }
            u.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            L = Te;
          }
          u();
        }
      } catch (Te) {
        if (Te && L && typeof Te.stack == "string") {
          for (var U = Te.stack.split(`
`), ge = L.stack.split(`
`), de = U.length - 1, pe = ge.length - 1; de >= 1 && pe >= 0 && U[de] !== ge[pe]; )
            pe--;
          for (; de >= 1 && pe >= 0; de--, pe--)
            if (U[de] !== ge[pe]) {
              if (de !== 1 || pe !== 1)
                do
                  if (de--, pe--, pe < 0 || U[de] !== ge[pe]) {
                    var Oe = `
` + U[de].replace(" at new ", " at ");
                    return u.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", u.displayName)), typeof u == "function" && me.set(u, Oe), Oe;
                  }
                while (de >= 1 && pe >= 0);
              break;
            }
        }
      } finally {
        J = !1, se.current = X, z(), Error.prepareStackTrace = Y;
      }
      var et = u ? u.displayName || u.name : "", qe = et ? Z(et) : "";
      return typeof u == "function" && me.set(u, qe), qe;
    }
    function St(u, g, b) {
      return rr(u, !1);
    }
    function Br(u) {
      var g = u.prototype;
      return !!(g && g.isReactComponent);
    }
    function At(u, g, b) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return rr(u, Br(u));
      if (typeof u == "string")
        return Z(u);
      switch (u) {
        case m:
          return Z("Suspense");
        case E:
          return Z("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case R:
            return St(u.render);
          case _:
            return At(u.type, g, b);
          case N: {
            var L = u, Y = L._payload, X = L._init;
            try {
              return At(X(Y), g, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Ke = Object.prototype.hasOwnProperty, ct = {}, nr = G.ReactDebugCurrentFrame;
    function lt(u) {
      if (u) {
        var g = u._owner, b = At(u.type, u._source, g ? g.type : null);
        nr.setExtraStackFrame(b);
      } else
        nr.setExtraStackFrame(null);
    }
    function Fe(u, g, b, L, Y) {
      {
        var X = Function.call.bind(Ke);
        for (var V in u)
          if (X(u, V)) {
            var U = void 0;
            try {
              if (typeof u[V] != "function") {
                var ge = Error((L || "React class") + ": " + b + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              U = u[V](g, V, L, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (de) {
              U = de;
            }
            U && !(U instanceof Error) && (lt(Y), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", b, V, typeof U), lt(null)), U instanceof Error && !(U.message in ct) && (ct[U.message] = !0, lt(Y), I("Failed %s type: %s", b, U.message), lt(null));
          }
      }
    }
    var ft = Array.isArray;
    function wt(u) {
      return ft(u);
    }
    function sr(u) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, b = g && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return b;
      }
    }
    function or(u) {
      try {
        return Ot(u), !1;
      } catch {
        return !0;
      }
    }
    function Ot(u) {
      return "" + u;
    }
    function Gt(u) {
      if (or(u))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(u)), Ot(u);
    }
    var Je = G.ReactCurrentOwner, $r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ir, ar, dt;
    dt = {};
    function Gr(u) {
      if (Ke.call(u, "ref")) {
        var g = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Mr(u) {
      if (Ke.call(u, "key")) {
        var g = Object.getOwnPropertyDescriptor(u, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Vr(u, g) {
      if (typeof u.ref == "string" && Je.current && g && Je.current.stateNode !== g) {
        var b = be(Je.current.type);
        dt[b] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', be(Je.current.type), u.ref), dt[b] = !0);
      }
    }
    function Xe(u, g) {
      {
        var b = function() {
          ir || (ir = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
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
          ar || (ar = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        b.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var qr = function(u, g, b, L, Y, X, V) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: u,
        key: g,
        ref: b,
        props: V,
        // Record the component responsible for creating this element.
        _owner: X
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
        value: L
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function Hr(u, g, b, L, Y) {
      {
        var X, V = {}, U = null, ge = null;
        b !== void 0 && (Gt(b), U = "" + b), Mr(g) && (Gt(g.key), U = "" + g.key), Gr(g) && (ge = g.ref, Vr(g, Y));
        for (X in g)
          Ke.call(g, X) && !$r.hasOwnProperty(X) && (V[X] = g[X]);
        if (u && u.defaultProps) {
          var de = u.defaultProps;
          for (X in de)
            V[X] === void 0 && (V[X] = de[X]);
        }
        if (U || ge) {
          var pe = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          U && Xe(V, pe), ge && ur(V, pe);
        }
        return qr(u, U, ge, Y, L, Je.current, V);
      }
    }
    var Ct = G.ReactCurrentOwner, cr = G.ReactDebugCurrentFrame;
    function Ve(u) {
      if (u) {
        var g = u._owner, b = At(u.type, u._source, g ? g.type : null);
        cr.setExtraStackFrame(b);
      } else
        cr.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function Ze(u) {
      return typeof u == "object" && u !== null && u.$$typeof === e;
    }
    function pt() {
      {
        if (Ct.current) {
          var u = be(Ct.current.type);
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
    var lr = {};
    function zr(u) {
      {
        var g = pt();
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
        var b = zr(g);
        if (lr[b])
          return;
        lr[b] = !0;
        var L = "";
        u && u._owner && u._owner !== Ct.current && (L = " It was passed a child from " + be(u._owner.type) + "."), Ve(u), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, L), Ve(null);
      }
    }
    function dr(u, g) {
      {
        if (typeof u != "object")
          return;
        if (wt(u))
          for (var b = 0; b < u.length; b++) {
            var L = u[b];
            Ze(L) && fr(L, g);
          }
        else if (Ze(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var Y = S(u);
          if (typeof Y == "function" && Y !== u.entries)
            for (var X = Y.call(u), V; !(V = X.next()).done; )
              Ze(V.value) && fr(V.value, g);
        }
      }
    }
    function Et(u) {
      {
        var g = u.type;
        if (g == null || typeof g == "string")
          return;
        var b;
        if (typeof g == "function")
          b = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === _))
          b = g.propTypes;
        else
          return;
        if (b) {
          var L = be(g);
          Fe(b, u.props, "prop", L, u);
        } else if (g.PropTypes !== void 0 && !ht) {
          ht = !0;
          var Y = be(g);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mt(u) {
      {
        for (var g = Object.keys(u.props), b = 0; b < g.length; b++) {
          var L = g[b];
          if (L !== "children" && L !== "key") {
            Ve(u), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Ve(null);
            break;
          }
        }
        u.ref !== null && (Ve(u), I("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var Vt = {};
    function hr(u, g, b, L, Y, X) {
      {
        var V = Ge(u);
        if (!V) {
          var U = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Wr();
          ge ? U += ge : U += pt();
          var de;
          u === null ? de = "null" : wt(u) ? de = "array" : u !== void 0 && u.$$typeof === e ? (de = "<" + (be(u.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : de = typeof u, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, U);
        }
        var pe = Hr(u, g, b, Y, X);
        if (pe == null)
          return pe;
        if (V) {
          var Oe = g.children;
          if (Oe !== void 0)
            if (L)
              if (wt(Oe)) {
                for (var et = 0; et < Oe.length; et++)
                  dr(Oe[et], u);
                Object.freeze && Object.freeze(Oe);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dr(Oe, u);
        }
        if (Ke.call(g, "key")) {
          var qe = be(u), Te = Object.keys(g).filter(function(Xr) {
            return Xr !== "key";
          }), qt = Te.length > 0 ? "{key: someKey, " + Te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vt[qe + qt]) {
            var Jr = Te.length > 0 ? "{" + Te.join(": ..., ") + ": ...}" : "{}";
            I(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qt, qe, Jr, qe), Vt[qe + qt] = !0;
          }
        }
        return u === n ? Mt(pe) : Et(pe), pe;
      }
    }
    function Yr(u, g, b) {
      return hr(u, g, b, !0);
    }
    function Qr(u, g, b) {
      return hr(u, g, b, !1);
    }
    var Kr = Qr, pr = Yr;
    zt.Fragment = n, zt.jsx = Kr, zt.jsxs = pr;
  }()), zt;
}
process.env.NODE_ENV === "production" ? ei() : ti();
var ri = Re.createContext(
  void 0
), Bs = (t) => {
  const e = Re.useContext(ri);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, $s = Re.createContext(!1), ni = () => Re.useContext($s);
$s.Provider;
function si() {
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
var oi = Re.createContext(si()), ii = () => Re.useContext(oi);
function Gs(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function ai() {
}
var ui = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, ci = (t) => {
  Re.useEffect(() => {
    t.clearReset();
  }, [t]);
}, li = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && Gs(r, [t.error, n]), fi = (t) => {
  t.suspense && (typeof t.staleTime != "number" && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, di = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, hi = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function pi(t, e, r) {
  var m, E, _, N;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Bs(), o = ni(), a = ii(), c = n.defaultQueryOptions(t);
  (E = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || E.call(
    m,
    c
  ), c._optimisticResults = o ? "isRestoring" : "optimistic", fi(c), ui(c, a), ci(a);
  const [l] = Re.useState(
    () => new e(
      n,
      c
    )
  ), R = l.getOptimisticResult(c);
  if (Re.useSyncExternalStore(
    Re.useCallback(
      (P) => {
        const A = o ? () => {
        } : l.subscribe(Lr.batchCalls(P));
        return l.updateResult(), A;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), Re.useEffect(() => {
    l.setOptions(c, { listeners: !1 });
  }, [c, l]), di(c, R))
    throw hi(c, l, a);
  if (li({
    result: R,
    errorResetBoundary: a,
    throwOnError: c.throwOnError,
    query: n.getQueryCache().get(c.queryHash)
  }))
    throw R.error;
  return (N = (_ = n.getDefaultOptions().queries) == null ? void 0 : _._experimental_afterQuery) == null || N.call(
    _,
    c,
    R
  ), c.notifyOnChangeProps ? R : l.trackResult(R);
}
function Ms(t, e) {
  return pi(t, Yo);
}
function Vs(t, e) {
  const r = Bs(), [n] = Re.useState(
    () => new Jo(
      r,
      t
    )
  );
  Re.useEffect(() => {
    n.setOptions(t);
  }, [n, t]);
  const o = Re.useSyncExternalStore(
    Re.useCallback(
      (c) => n.subscribe(Lr.batchCalls(c)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), a = Re.useCallback(
    (c, l) => {
      n.mutate(c, l).catch(ai);
    },
    [n]
  );
  if (o.error && Gs(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: a, mutateAsync: o.mutate };
}
function qs(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Ei } = Object.prototype, { getPrototypeOf: kn } = Object, Ir = /* @__PURE__ */ ((t) => (e) => {
  const r = Ei.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), xe = (t) => (t = t.toLowerCase(), (e) => Ir(e) === t), kr = (t) => (e) => typeof e === t, { isArray: Ut } = Array, Jt = kr("undefined");
function mi(t) {
  return t !== null && !Jt(t) && t.constructor !== null && !Jt(t.constructor) && Ie(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Hs = xe("ArrayBuffer");
function yi(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Hs(t.buffer), e;
}
const Ri = kr("string"), Ie = kr("function"), Ws = kr("number"), xr = (t) => t !== null && typeof t == "object", _i = (t) => t === !0 || t === !1, Sr = (t) => {
  if (Ir(t) !== "object")
    return !1;
  const e = kn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, gi = xe("Date"), vi = xe("File"), bi = xe("Blob"), Ti = xe("FileList"), Si = (t) => xr(t) && Ie(t.pipe), Ai = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Ie(t.append) && ((e = Ir(t)) === "formdata" || // detect form-data instance
  e === "object" && Ie(t.toString) && t.toString() === "[object FormData]"));
}, wi = xe("URLSearchParams"), [Oi, Ci, Di, Pi] = ["ReadableStream", "Request", "Response", "Headers"].map(xe), Li = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function er(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), Ut(t))
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
const yt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ys = (t) => !Jt(t) && t !== yt;
function An() {
  const { caseless: t } = Ys(this) && this || {}, e = {}, r = (n, o) => {
    const a = t && zs(e, o) || o;
    Sr(e[a]) && Sr(n) ? e[a] = An(e[a], n) : Sr(n) ? e[a] = An({}, n) : Ut(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && er(arguments[n], r);
  return e;
}
const Ii = (t, e, r, { allOwnKeys: n } = {}) => (er(e, (o, a) => {
  r && Ie(o) ? t[a] = qs(o, r) : t[a] = o;
}, { allOwnKeys: n }), t), ki = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), xi = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Ni = (t, e, r, n) => {
  let o, a, c;
  const l = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), a = o.length; a-- > 0; )
      c = o[a], (!n || n(c, t, e)) && !l[c] && (e[c] = t[c], l[c] = !0);
    t = r !== !1 && kn(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Fi = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, ji = (t) => {
  if (!t) return null;
  if (Ut(t)) return t;
  let e = t.length;
  if (!Ws(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Ui = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && kn(Uint8Array)), Bi = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    e.call(t, a[0], a[1]);
  }
}, $i = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Gi = xe("HTMLFormElement"), Mi = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), gs = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Vi = xe("RegExp"), Qs = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  er(r, (o, a) => {
    let c;
    (c = e(o, a, t)) !== !1 && (n[a] = c || o);
  }), Object.defineProperties(t, n);
}, qi = (t) => {
  Qs(t, (e, r) => {
    if (Ie(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (Ie(n)) {
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
  return Ut(t) ? n(t) : n(String(t).split(e)), r;
}, Wi = () => {
}, zi = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, cn = "abcdefghijklmnopqrstuvwxyz", vs = "0123456789", Ks = {
  DIGIT: vs,
  ALPHA: cn,
  ALPHA_DIGIT: cn + cn.toUpperCase() + vs
}, Yi = (t = 16, e = Ks.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Qi(t) {
  return !!(t && Ie(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Ki = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (xr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const a = Ut(n) ? [] : {};
        return er(n, (c, l) => {
          const R = r(c, o + 1);
          !Jt(R) && (a[l] = R);
        }), e[o] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, Ji = xe("AsyncFunction"), Xi = (t) => t && (xr(t) || Ie(t)) && Ie(t.then) && Ie(t.catch), Js = ((t, e) => t ? setImmediate : e ? ((r, n) => (yt.addEventListener("message", ({ source: o, data: a }) => {
  o === yt && a === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), yt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ie(yt.postMessage)
), Zi = typeof queueMicrotask < "u" ? queueMicrotask.bind(yt) : typeof process < "u" && process.nextTick || Js, h = {
  isArray: Ut,
  isArrayBuffer: Hs,
  isBuffer: mi,
  isFormData: Ai,
  isArrayBufferView: yi,
  isString: Ri,
  isNumber: Ws,
  isBoolean: _i,
  isObject: xr,
  isPlainObject: Sr,
  isReadableStream: Oi,
  isRequest: Ci,
  isResponse: Di,
  isHeaders: Pi,
  isUndefined: Jt,
  isDate: gi,
  isFile: vi,
  isBlob: bi,
  isRegExp: Vi,
  isFunction: Ie,
  isStream: Si,
  isURLSearchParams: wi,
  isTypedArray: Ui,
  isFileList: Ti,
  forEach: er,
  merge: An,
  extend: Ii,
  trim: Li,
  stripBOM: ki,
  inherits: xi,
  toFlatObject: Ni,
  kindOf: Ir,
  kindOfTest: xe,
  endsWith: Fi,
  toArray: ji,
  forEachEntry: Bi,
  matchAll: $i,
  isHTMLForm: Gi,
  hasOwnProperty: gs,
  hasOwnProp: gs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Qs,
  freezeMethods: qi,
  toObjectSet: Hi,
  toCamelCase: Mi,
  noop: Wi,
  toFiniteNumber: zi,
  findKey: zs,
  global: yt,
  isContextDefined: Ys,
  ALPHABET: Ks,
  generateString: Yi,
  isSpecCompliantForm: Qi,
  toJSONObject: Ki,
  isAsyncFn: Ji,
  isThenable: Xi,
  setImmediate: Js,
  asap: Zi
};
function x(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
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
const Xs = x.prototype, Zs = {};
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
Object.defineProperties(x, Zs);
Object.defineProperty(Xs, "isAxiosError", { value: !0 });
x.from = (t, e, r, n, o, a) => {
  const c = Object.create(Xs);
  return h.toFlatObject(t, c, function(R) {
    return R !== Error.prototype;
  }, (l) => l !== "isAxiosError"), x.call(c, t.message, e, r, n, o), c.cause = t, c.name = t.name, a && Object.assign(c, a), c;
};
const ea = null;
function wn(t) {
  return h.isPlainObject(t) || h.isArray(t);
}
function eo(t) {
  return h.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function bs(t, e, r) {
  return t ? t.concat(e).map(function(o, a) {
    return o = eo(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function ta(t) {
  return h.isArray(t) && !t.some(wn);
}
const ra = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Nr(t, e, r) {
  if (!h.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(C, S) {
    return !h.isUndefined(S[C]);
  });
  const n = r.metaTokens, o = r.visitor || E, a = r.dots, c = r.indexes, R = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(e);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function m(A) {
    if (A === null) return "";
    if (h.isDate(A))
      return A.toISOString();
    if (!R && h.isBlob(A))
      throw new x("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(A) || h.isTypedArray(A) ? R && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function E(A, C, S) {
    let G = A;
    if (A && !S && typeof A == "object") {
      if (h.endsWith(C, "{}"))
        C = n ? C : C.slice(0, -2), A = JSON.stringify(A);
      else if (h.isArray(A) && ta(A) || (h.isFileList(A) || h.endsWith(C, "[]")) && (G = h.toArray(A)))
        return C = eo(C), G.forEach(function(Q, ae) {
          !(h.isUndefined(Q) || Q === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? bs([C], ae, a) : c === null ? C : C + "[]",
            m(Q)
          );
        }), !1;
    }
    return wn(A) ? !0 : (e.append(bs(S, C, a), m(A)), !1);
  }
  const _ = [], N = Object.assign(ra, {
    defaultVisitor: E,
    convertValue: m,
    isVisitable: wn
  });
  function P(A, C) {
    if (!h.isUndefined(A)) {
      if (_.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      _.push(A), h.forEach(A, function(G, I) {
        (!(h.isUndefined(G) || G === null) && o.call(
          e,
          G,
          h.isString(I) ? I.trim() : I,
          C,
          N
        )) === !0 && P(G, C ? C.concat(I) : [I]);
      }), _.pop();
    }
  }
  if (!h.isObject(t))
    throw new TypeError("data must be an object");
  return P(t), e;
}
function Ts(t) {
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
  this._pairs = [], t && Nr(t, this, e);
}
const to = xn.prototype;
to.append = function(e, r) {
  this._pairs.push([e, r]);
};
to.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Ts);
  } : Ts;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function na(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ro(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || na, o = r && r.serialize;
  let a;
  if (o ? a = o(e, r) : a = h.isURLSearchParams(e) ? e.toString() : new xn(e, r).toString(n), a) {
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
const no = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, sa = typeof URLSearchParams < "u" ? URLSearchParams : xn, oa = typeof FormData < "u" ? FormData : null, ia = typeof Blob < "u" ? Blob : null, aa = {
  isBrowser: !0,
  classes: {
    URLSearchParams: sa,
    FormData: oa,
    Blob: ia
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Nn = typeof window < "u" && typeof document < "u", On = typeof navigator == "object" && navigator || void 0, ua = Nn && (!On || ["ReactNative", "NativeScript", "NS"].indexOf(On.product) < 0), ca = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", la = Nn && window.location.href || "http://localhost", fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Nn,
  hasStandardBrowserEnv: ua,
  hasStandardBrowserWebWorkerEnv: ca,
  navigator: On,
  origin: la
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...fa,
  ...aa
};
function da(t, e) {
  return Nr(t, new Pe.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, a) {
      return Pe.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function ha(t) {
  return h.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function pa(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function so(t) {
  function e(r, n, o, a) {
    let c = r[a++];
    if (c === "__proto__") return !0;
    const l = Number.isFinite(+c), R = a >= r.length;
    return c = !c && h.isArray(o) ? o.length : c, R ? (h.hasOwnProp(o, c) ? o[c] = [o[c], n] : o[c] = n, !l) : ((!o[c] || !h.isObject(o[c])) && (o[c] = []), e(r, n, o[c], a) && h.isArray(o[c]) && (o[c] = pa(o[c])), !l);
  }
  if (h.isFormData(t) && h.isFunction(t.entries)) {
    const r = {};
    return h.forEachEntry(t, (n, o) => {
      e(ha(n), o, r, 0);
    }), r;
  }
  return null;
}
function Ea(t, e, r) {
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
  transitional: no,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = h.isObject(e);
    if (a && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
      return o ? JSON.stringify(so(e)) : e;
    if (h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e) || h.isReadableStream(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return da(e, this.formSerializer).toString();
      if ((l = h.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const R = this.env && this.env.FormData;
        return Nr(
          l ? { "files[]": e } : e,
          R && new R(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), Ea(e)) : e;
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
          throw l.name === "SyntaxError" ? x.from(l, x.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: Pe.classes.FormData,
    Blob: Pe.classes.Blob
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
const ma = h.toObjectSet([
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
    o = c.indexOf(":"), r = c.substring(0, o).trim().toLowerCase(), n = c.substring(o + 1).trim(), !(!r || e[r] && ma[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, As = Symbol("internals");
function Yt(t) {
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
const _a = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
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
function ga(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function va(t, e) {
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
    function a(l, R, m) {
      const E = Yt(R);
      if (!E)
        throw new Error("header name must be a non-empty string");
      const _ = h.findKey(o, E);
      (!_ || o[_] === void 0 || m === !0 || m === void 0 && o[_] !== !1) && (o[_ || R] = Ar(l));
    }
    const c = (l, R) => h.forEach(l, (m, E) => a(m, E, R));
    if (h.isPlainObject(e) || e instanceof this.constructor)
      c(e, r);
    else if (h.isString(e) && (e = e.trim()) && !_a(e))
      c(ya(e), r);
    else if (h.isHeaders(e))
      for (const [l, R] of e.entries())
        a(R, l, n);
    else
      e != null && a(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = Yt(e), e) {
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
    if (e = Yt(e), e) {
      const n = h.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || ln(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function a(c) {
      if (c = Yt(c), c) {
        const l = h.findKey(n, c);
        l && (!r || ln(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return h.isArray(e) ? e.forEach(a) : a(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || ln(this, this[a], a, e, !0)) && (delete this[a], o = !0);
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
      const l = e ? ga(a) : String(a).trim();
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
    const n = (this[As] = this[As] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(c) {
      const l = Yt(c);
      n[l] || (va(o, c), n[l] = !0);
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
function fn(t, e) {
  const r = this || tr, n = e || r, o = Le.from(n.headers);
  let a = n.data;
  return h.forEach(t, function(l) {
    a = l.call(r, a, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), a;
}
function oo(t) {
  return !!(t && t.__CANCEL__);
}
function Bt(t, e, r) {
  x.call(this, t ?? "canceled", x.ERR_CANCELED, e, r), this.name = "CanceledError";
}
h.inherits(Bt, x, {
  __CANCEL__: !0
});
function io(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new x(
    "Request failed with status code " + r.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function ba(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Ta(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, a = 0, c;
  return e = e !== void 0 ? e : 1e3, function(R) {
    const m = Date.now(), E = n[a];
    c || (c = m), r[o] = R, n[o] = m;
    let _ = a, N = 0;
    for (; _ !== o; )
      N += r[_++], _ = _ % t;
    if (o = (o + 1) % t, o === a && (a = (a + 1) % t), m - c < e)
      return;
    const P = E && m - E;
    return P ? Math.round(N * 1e3 / P) : void 0;
  };
}
function Sa(t, e) {
  let r = 0, n = 1e3 / e, o, a;
  const c = (m, E = Date.now()) => {
    r = E, o = null, a && (clearTimeout(a), a = null), t.apply(null, m);
  };
  return [(...m) => {
    const E = Date.now(), _ = E - r;
    _ >= n ? c(m, E) : (o = m, a || (a = setTimeout(() => {
      a = null, c(o);
    }, n - _)));
  }, () => o && c(o)];
}
const Cr = (t, e, r = 3) => {
  let n = 0;
  const o = Ta(50, 250);
  return Sa((a) => {
    const c = a.loaded, l = a.lengthComputable ? a.total : void 0, R = c - n, m = o(R), E = c <= l;
    n = c;
    const _ = {
      loaded: c,
      total: l,
      progress: l ? c / l : void 0,
      bytes: R,
      rate: m || void 0,
      estimated: m && l && E ? (l - c) / m : void 0,
      event: a,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    t(_);
  }, r);
}, ws = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Os = (t) => (...e) => h.asap(() => t(...e)), Aa = Pe.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = Pe.navigator && /(msie|trident)/i.test(Pe.navigator.userAgent), r = document.createElement("a");
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
), wa = Pe.hasStandardBrowserEnv ? (
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
function Oa(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ca(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ao(t, e) {
  return t && !Oa(e) ? Ca(t, e) : e;
}
const Cs = (t) => t instanceof Le ? { ...t } : t;
function Tt(t, e) {
  e = e || {};
  const r = {};
  function n(m, E, _) {
    return h.isPlainObject(m) && h.isPlainObject(E) ? h.merge.call({ caseless: _ }, m, E) : h.isPlainObject(E) ? h.merge({}, E) : h.isArray(E) ? E.slice() : E;
  }
  function o(m, E, _) {
    if (h.isUndefined(E)) {
      if (!h.isUndefined(m))
        return n(void 0, m, _);
    } else return n(m, E, _);
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
  function l(m, E, _) {
    if (_ in e)
      return n(m, E);
    if (_ in t)
      return n(void 0, m);
  }
  const R = {
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
    headers: (m, E) => o(Cs(m), Cs(E), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, t, e)), function(E) {
    const _ = R[E] || o, N = _(t[E], e[E], E);
    h.isUndefined(N) && _ !== l || (r[E] = N);
  }), r;
}
const uo = (t) => {
  const e = Tt({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: c, auth: l } = e;
  e.headers = c = Le.from(c), e.url = ro(ao(e.baseURL, e.url), t.params, t.paramsSerializer), l && c.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let R;
  if (h.isFormData(r)) {
    if (Pe.hasStandardBrowserEnv || Pe.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((R = c.getContentType()) !== !1) {
      const [m, ...E] = R ? R.split(";").map((_) => _.trim()).filter(Boolean) : [];
      c.setContentType([m || "multipart/form-data", ...E].join("; "));
    }
  }
  if (Pe.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(e)), n || n !== !1 && Aa(e.url))) {
    const m = o && a && wa.read(a);
    m && c.set(o, m);
  }
  return e;
}, Da = typeof XMLHttpRequest < "u", Pa = Da && function(t) {
  return new Promise(function(r, n) {
    const o = uo(t);
    let a = o.data;
    const c = Le.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: R, onDownloadProgress: m } = o, E, _, N, P, A;
    function C() {
      P && P(), A && A(), o.cancelToken && o.cancelToken.unsubscribe(E), o.signal && o.signal.removeEventListener("abort", E);
    }
    let S = new XMLHttpRequest();
    S.open(o.method.toUpperCase(), o.url, !0), S.timeout = o.timeout;
    function G() {
      if (!S)
        return;
      const Q = Le.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), j = {
        data: !l || l === "text" || l === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: Q,
        config: t,
        request: S
      };
      io(function(Ee) {
        r(Ee), C();
      }, function(Ee) {
        n(Ee), C();
      }, j), S = null;
    }
    "onloadend" in S ? S.onloadend = G : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(G);
    }, S.onabort = function() {
      S && (n(new x("Request aborted", x.ECONNABORTED, t, S)), S = null);
    }, S.onerror = function() {
      n(new x("Network Error", x.ERR_NETWORK, t, S)), S = null;
    }, S.ontimeout = function() {
      let ae = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const j = o.transitional || no;
      o.timeoutErrorMessage && (ae = o.timeoutErrorMessage), n(new x(
        ae,
        j.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        t,
        S
      )), S = null;
    }, a === void 0 && c.setContentType(null), "setRequestHeader" in S && h.forEach(c.toJSON(), function(ae, j) {
      S.setRequestHeader(j, ae);
    }), h.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials), l && l !== "json" && (S.responseType = o.responseType), m && ([N, A] = Cr(m, !0), S.addEventListener("progress", N)), R && S.upload && ([_, P] = Cr(R), S.upload.addEventListener("progress", _), S.upload.addEventListener("loadend", P)), (o.cancelToken || o.signal) && (E = (Q) => {
      S && (n(!Q || Q.type ? new Bt(null, t, S) : Q), S.abort(), S = null);
    }, o.cancelToken && o.cancelToken.subscribe(E), o.signal && (o.signal.aborted ? E() : o.signal.addEventListener("abort", E)));
    const I = ba(o.url);
    if (I && Pe.protocols.indexOf(I) === -1) {
      n(new x("Unsupported protocol " + I + ":", x.ERR_BAD_REQUEST, t));
      return;
    }
    S.send(a || null);
  });
}, La = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const a = function(m) {
      if (!o) {
        o = !0, l();
        const E = m instanceof Error ? m : this.reason;
        n.abort(E instanceof x ? E : new Bt(E instanceof Error ? E.message : E));
      }
    };
    let c = e && setTimeout(() => {
      c = null, a(new x(`timeout ${e} of ms exceeded`, x.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (c && clearTimeout(c), c = null, t.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(a) : m.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((m) => m.addEventListener("abort", a));
    const { signal: R } = n;
    return R.unsubscribe = () => h.asap(l), R;
  }
}, Ia = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, ka = async function* (t, e) {
  for await (const r of xa(t))
    yield* Ia(r, e);
}, xa = async function* (t) {
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
  const o = ka(t, e);
  let a = 0, c, l = (R) => {
    c || (c = !0, n && n(R));
  };
  return new ReadableStream({
    async pull(R) {
      try {
        const { done: m, value: E } = await o.next();
        if (m) {
          l(), R.close();
          return;
        }
        let _ = E.byteLength;
        if (r) {
          let N = a += _;
          r(N);
        }
        R.enqueue(new Uint8Array(E));
      } catch (m) {
        throw l(m), m;
      }
    },
    cancel(R) {
      return l(R), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Fr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", co = Fr && typeof ReadableStream == "function", Na = Fr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), lo = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Fa = co && lo(() => {
  let t = !1;
  const e = new Request(Pe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Ps = 64 * 1024, Cn = co && lo(() => h.isReadableStream(new Response("").body)), Dr = {
  stream: Cn && ((t) => t.body)
};
Fr && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Dr[e] && (Dr[e] = h.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new x(`Response type '${e}' is not supported`, x.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const ja = async (t) => {
  if (t == null)
    return 0;
  if (h.isBlob(t))
    return t.size;
  if (h.isSpecCompliantForm(t))
    return (await new Request(Pe.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(t) || h.isArrayBuffer(t))
    return t.byteLength;
  if (h.isURLSearchParams(t) && (t = t + ""), h.isString(t))
    return (await Na(t)).byteLength;
}, Ua = async (t, e) => {
  const r = h.toFiniteNumber(t.getContentLength());
  return r ?? ja(e);
}, Ba = Fr && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: o,
    cancelToken: a,
    timeout: c,
    onDownloadProgress: l,
    onUploadProgress: R,
    responseType: m,
    headers: E,
    withCredentials: _ = "same-origin",
    fetchOptions: N
  } = uo(t);
  m = m ? (m + "").toLowerCase() : "text";
  let P = La([o, a && a.toAbortSignal()], c), A;
  const C = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let S;
  try {
    if (R && Fa && r !== "get" && r !== "head" && (S = await Ua(E, n)) !== 0) {
      let j = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), oe;
      if (h.isFormData(n) && (oe = j.headers.get("content-type")) && E.setContentType(oe), j.body) {
        const [Ee, ee] = ws(
          S,
          Cr(Os(R))
        );
        n = Ds(j.body, Ps, Ee, ee);
      }
    }
    h.isString(_) || (_ = _ ? "include" : "omit");
    const G = "credentials" in Request.prototype;
    A = new Request(e, {
      ...N,
      signal: P,
      method: r.toUpperCase(),
      headers: E.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: G ? _ : void 0
    });
    let I = await fetch(A);
    const Q = Cn && (m === "stream" || m === "response");
    if (Cn && (l || Q && C)) {
      const j = {};
      ["status", "statusText", "headers"].forEach((Ae) => {
        j[Ae] = I[Ae];
      });
      const oe = h.toFiniteNumber(I.headers.get("content-length")), [Ee, ee] = l && ws(
        oe,
        Cr(Os(l), !0)
      ) || [];
      I = new Response(
        Ds(I.body, Ps, Ee, () => {
          ee && ee(), C && C();
        }),
        j
      );
    }
    m = m || "text";
    let ae = await Dr[h.findKey(Dr, m) || "text"](I, t);
    return !Q && C && C(), await new Promise((j, oe) => {
      io(j, oe, {
        data: ae,
        headers: Le.from(I.headers),
        status: I.status,
        statusText: I.statusText,
        config: t,
        request: A
      });
    });
  } catch (G) {
    throw C && C(), G && G.name === "TypeError" && /fetch/i.test(G.message) ? Object.assign(
      new x("Network Error", x.ERR_NETWORK, t, A),
      {
        cause: G.cause || G
      }
    ) : x.from(G, G && G.code, t, A);
  }
}), Dn = {
  http: ea,
  xhr: Pa,
  fetch: Ba
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
const Ls = (t) => `- ${t}`, $a = (t) => h.isFunction(t) || t === null || t === !1, fo = {
  getAdapter: (t) => {
    t = h.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let c;
      if (n = r, !$a(r) && (n = Dn[(c = String(r)).toLowerCase()], n === void 0))
        throw new x(`Unknown adapter '${c}'`);
      if (n)
        break;
      o[c || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([l, R]) => `adapter ${l} ` + (R === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = e ? a.length > 1 ? `since :
` + a.map(Ls).join(`
`) : " " + Ls(a[0]) : "as no adapter specified";
      throw new x(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Dn
};
function dn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Bt(null, t);
}
function Is(t) {
  return dn(t), t.headers = Le.from(t.headers), t.data = fn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), fo.getAdapter(t.adapter || tr.adapter)(t).then(function(n) {
    return dn(t), n.data = fn.call(
      t,
      t.transformResponse,
      n
    ), n.headers = Le.from(n.headers), n;
  }, function(n) {
    return oo(n) || (dn(t), n && n.response && (n.response.data = fn.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = Le.from(n.response.headers))), Promise.reject(n);
  });
}
const ho = "1.7.7", Fn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Fn[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const ks = {};
Fn.transitional = function(e, r, n) {
  function o(a, c) {
    return "[Axios v" + ho + "] Transitional option '" + a + "'" + c + (n ? ". " + n : "");
  }
  return (a, c, l) => {
    if (e === !1)
      throw new x(
        o(c, " has been removed" + (r ? " in " + r : "")),
        x.ERR_DEPRECATED
      );
    return r && !ks[c] && (ks[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, c, l) : !0;
  };
};
function Ga(t, e, r) {
  if (typeof t != "object")
    throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], c = e[a];
    if (c) {
      const l = t[a], R = l === void 0 || c(l, a, t);
      if (R !== !0)
        throw new x("option " + a + " must be " + R, x.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new x("Unknown option " + a, x.ERR_BAD_OPTION);
  }
}
const Pn = {
  assertOptions: Ga,
  validators: Fn
}, tt = Pn.validators;
class bt {
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
    n !== void 0 && Pn.assertOptions(n, {
      silentJSONParsing: tt.transitional(tt.boolean),
      forcedJSONParsing: tt.transitional(tt.boolean),
      clarifyTimeoutError: tt.transitional(tt.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Pn.assertOptions(o, {
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
    let R = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(r) === !1 || (R = R && C.synchronous, l.unshift(C.fulfilled, C.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(C) {
      m.push(C.fulfilled, C.rejected);
    });
    let E, _ = 0, N;
    if (!R) {
      const A = [Is.bind(this), void 0];
      for (A.unshift.apply(A, l), A.push.apply(A, m), N = A.length, E = Promise.resolve(r); _ < N; )
        E = E.then(A[_++], A[_++]);
      return E;
    }
    N = l.length;
    let P = r;
    for (_ = 0; _ < N; ) {
      const A = l[_++], C = l[_++];
      try {
        P = A(P);
      } catch (S) {
        C.call(this, S);
        break;
      }
    }
    try {
      E = Is.call(this, P);
    } catch (A) {
      return Promise.reject(A);
    }
    for (_ = 0, N = m.length; _ < N; )
      E = E.then(m[_++], m[_++]);
    return E;
  }
  getUri(e) {
    e = Tt(this.defaults, e);
    const r = ao(e.baseURL, e.url);
    return ro(r, e.params, e.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  bt.prototype[e] = function(r, n) {
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
  bt.prototype[e] = r(), bt.prototype[e + "Form"] = r(!0);
});
class jn {
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
      n.reason || (n.reason = new Bt(a, c, l), r(n.reason));
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
function Ma(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Va(t) {
  return h.isObject(t) && t.isAxiosError === !0;
}
const Ln = {
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
Object.entries(Ln).forEach(([t, e]) => {
  Ln[e] = t;
});
function po(t) {
  const e = new bt(t), r = qs(bt.prototype.request, e);
  return h.extend(r, bt.prototype, e, { allOwnKeys: !0 }), h.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return po(Tt(t, o));
  }, r;
}
const fe = po(tr);
fe.Axios = bt;
fe.CanceledError = Bt;
fe.CancelToken = jn;
fe.isCancel = oo;
fe.VERSION = ho;
fe.toFormData = Nr;
fe.AxiosError = x;
fe.Cancel = fe.CanceledError;
fe.all = function(e) {
  return Promise.all(e);
};
fe.spread = Ma;
fe.isAxiosError = Va;
fe.mergeConfig = Tt;
fe.AxiosHeaders = Le;
fe.formToJSON = (t) => so(h.isHTMLForm(t) ? new FormData(t) : t);
fe.getAdapter = fo.getAdapter;
fe.HttpStatusCode = Ln;
fe.default = fe;
const Eo = {
  BASE_URL: "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com"
  // BASE_URL: "https://4ab7-182-156-141-17.ngrok-free.app",
}, je = fe.create({
  baseURL: Eo.BASE_URL,
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
          const n = await fe.post(`${Eo.BASE_URL}/auth/refresh-token`, {
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
class jr {
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
const ze = (t) => {
  const e = new jr();
  return Vs({ mutationFn: (r) => e.createData(t, r) });
}, $e = (t, e) => {
  const r = new jr();
  return Ms({ queryKey: e, queryFn: () => r.getData(t) });
}, Ye = (t, e, r) => {
  const n = new jr();
  return Ms({ queryKey: r, queryFn: () => n.getDataById(t, e), enabled: !!e });
}, Qe = (t, e) => {
  const r = new jr();
  return Vs({ mutationFn: (n) => r.updateData(t, e, n) });
}, mo = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com", Wa = () => fe.create({
  baseURL: mo,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class le {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = le.createService();
  }
  static createService() {
    return le._axiosInstance || (le._axiosInstance = Wa(), le.setAuthHeaderInterceptor(), le._axiosInstance.interceptors.response.use(le.handleSuccess, le.handleError)), le._axiosInstance;
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
    le._axiosInstance.interceptors.request.use(
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
    le._axiosInstance.interceptors.response.use(
      le.handleSuccess,
      le.handleError
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
        const a = await le.refreshAccessToken();
        return le.setAccessToken(a), r.headers.set("Authorization", `Bearer ${a}`), le._axiosInstance(r);
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
const Qa = (t) => $e(t, ["get-all-inward-registers"]), Ka = (t, e) => Ye(t, e, ["get-a-inward-register"]), Ja = (t) => ze(t), Xa = (t, e) => Qe(t, e), Za = (t) => ze(t), eu = (t, e) => Ye(t, e, ["get-a-aqr"]), tu = (t) => $e(t, ["get-all-aqr"]), ru = (t, e) => Qe(t, e), nu = (t, e) => Ye(t, e, ["get-a-dump-register"]), su = (t) => $e(t, ["get-all-dump-registers"]), ou = (t) => ze(t), iu = (t, e) => Qe(t, e), au = (t, e) => Ye(t, e, ["get-a-second-sale-register"]), uu = (t) => $e(t, ["get-all-second-sale-registers"]), cu = (t) => ze(t), lu = (t, e) => Qe(t, e), fu = (t) => $e(t, ["get-all-vehicle-dispatch-registers"]), du = (t, e) => Ye(t, e, ["get-a-vehicle-dispatch-register"]), hu = (t) => ze(t), pu = (t, e) => Qe(t, e), Eu = (t) => ze(t), mu = (t, e) => Ye(t, e, ["get-a-labor-attendance"]), yu = (t) => $e(t, ["get-all-labor-attendance"]), Ru = (t, e) => Qe(t, e), _u = (t) => ze(t), gu = (t, e) => Ye(t, e, ["get-a-labor-data"]), vu = (t) => $e(t, ["get-all-labor-data"]), bu = (t, e) => Qe(t, e), Tu = (t) => ze(t), Su = (t, e) => Ye(t, e, ["get-a-temp-labor-data"]), Au = (t) => $e(t, ["get-all-temp-labor-data"]), wu = (t, e) => Qe(t, e), Ou = (t, e) => Ye(t, e, ["get-a-eod-report"]), Cu = (t) => $e(t, ["get-all-eod-reports"]), Du = (t) => ze(t), Pu = (t, e) => Qe(t, e), Lu = (t) => $e(t, ["get-all-proforma-invoices"]);
class Iu extends le {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createInwardRegister(e) {
    const r = F.CREATE_INWARD_REGISTER;
    return this.post(r, e);
  }
  getAllInwardRegisters() {
    const e = F.GET_ALL_INWARD_REGISTERS;
    return this.get(e);
  }
  getInwardRegisterById(e) {
    const r = `${F.GET_INWARD_REGISTER_BY_ID}/${e}`;
    return this.get(r);
  }
  updateInwardRegister(e, r) {
    const n = `${F.UPDATE_INWARD_REGISTER}/${e}`;
    return this.patch(n, r);
  }
  deleteInwardRegisterById(e) {
    const r = `${F.DELETE_INWARD_REGISTER}/${e}`;
    return this.delete(r);
  }
}
class ku extends le {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createAQR(e) {
    const r = F.CREATE_AQR;
    return this.post(r, e);
  }
  getAllAQRs() {
    const e = F.GET_ALL_AQR;
    return this.get(e);
  }
  getAQRById(e) {
    const r = `${F.GET_AQR_BY_ID}/${e}`;
    return this.get(r);
  }
  updateAQR(e, r) {
    const n = `${F.UPDATE_AQR}/${e}`;
    return this.patch(n, r);
  }
  deleteAQRById(e) {
    const r = `${F.DELETE_AQR}/${e}`;
    return this.delete(r);
  }
}
class xu extends le {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDumpRegister(e) {
    const r = F.CREATE_DUMP_REGISTER;
    return this.post(r, e);
  }
  getAllDumpRegisters() {
    const e = F.GET_ALL_DUMP_REGISTERS;
    return this.get(e);
  }
  getDumpRegisterById(e) {
    const r = `${F.GET_DUMP_REGISTER_BY_ID}/${e}`;
    return this.get(r);
  }
  updateDumpRegister(e, r) {
    const n = `${F.UPDATE_DUMP_REGISTER}/${e}`;
    return this.patch(n, r);
  }
  deleteDumpRegisterById(e) {
    const r = `${F.DELETE_DUMP_REGISTER}/${e}`;
    return this.delete(r);
  }
}
class Nu extends le {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createSecondSaleRegister(e) {
    const r = F.CREATE_SECOND_SALE_REGISTER;
    return this.post(r, e);
  }
  getAllSecondSaleRegisters() {
    const e = F.GET_ALL_SECOND_SALE_REGISTERS;
    return this.get(e);
  }
  getSecondSaleRegisterById(e) {
    const r = `${F.GET_SECOND_SALE_REGISTER_BY_ID}/${e}`;
    return this.get(r);
  }
  updateSecondSaleRegister(e, r) {
    const n = `${F.UPDATE_SECOND_SALE_REGISTER}/${e}`;
    return this.patch(n, r);
  }
  deleteSecondSaleRegisterById(e) {
    const r = `${F.DELETE_SECOND_SALE_REGISTER}/${e}`;
    return this.delete(r);
  }
}
class Fu extends le {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVehicleDispatchRegister(e) {
    const r = F.CREATE_VEHICLE_DISPATCH_REGISTER;
    return this.post(r, e);
  }
  getAllVehicleDispatchRegisters() {
    const e = F.GET_ALL_VEHICLE_DISPATCH_REGISTERS;
    return this.get(e);
  }
  getVehicleDispatchRegisterById(e) {
    const r = `${F.GET_VEHICLE_DISPATCH_REGISTER_BY_ID}/${e}`;
    return this.get(r);
  }
  updateVehicleDispatchRegister(e, r) {
    const n = `${F.UPDATE_VEHICLE_DISPATCH_REGISTER}/${e}`;
    return this.patch(n, r);
  }
  deleteVehicleDispatchRegisterById(e) {
    const r = `${F.DELETE_VEHICLE_DISPATCH_REGISTER}/${e}`;
    return this.delete(r);
  }
}
class ju extends le {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createEODReport(e) {
    const r = F.CREATE_EOD_REPORT;
    return this.post(r, e);
  }
  getAllEODReports() {
    const e = F.GET_ALL_EOD_REPORT;
    return this.get(e);
  }
  getEODReportById(e) {
    const r = `${F.GET_EOD_REPORT_BY_ID}/${e}`;
    return this.get(r);
  }
  updateEODReport(e, r) {
    const n = `${F.UPDATE_EOD_REPORT}/${e}`;
    return this.patch(n, r);
  }
  deleteEODReportById(e) {
    const r = `${F.DELETE_EOD_REPORT}/${e}`;
    return this.delete(r);
  }
}
class Uu extends le {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborRegistration(e) {
    const r = F.CREATE_LABOR_REGISTRATION;
    return this.post(r, e);
  }
  getAllRegistreredLabors() {
    const e = F.GET_ALL_REGISTERED_LABORS;
    return this.get(e);
  }
  getRegistreredLaborById(e) {
    const r = `${F.GET_REGISTERED_LABOR_BY_ID}/${e}`;
    return this.get(r);
  }
  updateRegistreredLabor(e, r) {
    const n = `${F.UPDATE_REGISTERED_LABOR}/${e}`;
    return this.patch(n, r);
  }
  deleteRegistreredLaborById(e) {
    const r = `${F.DELETE_REGISTERED_LABOR}/${e}`;
    return this.delete(r);
  }
}
class Bu extends le {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborAttendance(e) {
    const r = F.CREATE_LABOR_ATTENDANCE;
    return this.post(r, e);
  }
  getAllLaborAttendance() {
    const e = F.GET_ALL_LABOR_ATTENDANCE;
    return this.get(e);
  }
  getLaborAttendanceById(e) {
    const r = `${F.GET_LABOR_ATTENDANCE_BY_ID}/${e}`;
    return this.get(r);
  }
  updateLaborAttendance(e, r) {
    const n = `${F.UPDATE_LABOR_ATTENDANCE}/${e}`;
    return this.patch(n, r);
  }
  deleteLaborAttendanceById(e) {
    const r = `${F.DELETE_LABOR_ATTENDANCE}/${e}`;
    return this.delete(r);
  }
}
export {
  ku as AQRServices,
  xu as DumpRegisterServices,
  ju as EODReportServices,
  Ya as INVENTORY_API_URL,
  Iu as InwardRegisterServices,
  Bu as LaborAttendanceServices,
  Uu as LaborRegistrationServices,
  Nu as SecondSaleRegisterServices,
  Fu as VehicleDispatchRegisterServices,
  F as inventoryApiUrl,
  Za as useCreateAQR,
  ou as useCreateDumpRegister,
  Du as useCreateEODReport,
  Ja as useCreateInwardRegister,
  Eu as useCreateLaborAttendance,
  _u as useCreateLaborData,
  cu as useCreateSecondSaleRegister,
  Tu as useCreateTempLaborData,
  hu as useCreateVehicleDispatchRegister,
  eu as useGetAAQR,
  nu as useGetADumpRegister,
  Ou as useGetAEODReport,
  Ka as useGetAInwardRegister,
  mu as useGetALaborAttendance,
  gu as useGetALaborData,
  au as useGetASecondSaleRegister,
  Su as useGetATempLaborData,
  du as useGetAVehicleDispatchRegister,
  tu as useGetAllAQR,
  su as useGetAllDumpRegisters,
  Cu as useGetAllEODReports,
  Qa as useGetAllInwardRegisters,
  yu as useGetAllLaborAttendance,
  vu as useGetAllLaborData,
  Lu as useGetAllProformaInvoices,
  uu as useGetAllSecondSaleRegisters,
  Au as useGetAllTempLaborData,
  fu as useGetAllVehicleDispatchRegisters,
  ru as useUpdateAQR,
  iu as useUpdateDumpRegister,
  Pu as useUpdateEODReport,
  Xa as useUpdateInwardRegister,
  Ru as useUpdateLaborAttendance,
  bu as useUpdateLaborData,
  lu as useUpdateSecondSaleRegister,
  wu as useUpdateTempLaborData,
  pu as useUpdateVehicleDispatchRegister
};
