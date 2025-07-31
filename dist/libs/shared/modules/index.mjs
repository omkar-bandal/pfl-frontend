var xi = (r) => {
  throw TypeError(r);
};
var rs = (r, e, t) => e.has(r) || xi("Cannot " + t);
var _ = (r, e, t) => (rs(r, e, "read from private field"), t ? t.call(r) : e.get(r)), ue = (r, e, t) => e.has(r) ? xi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), j = (r, e, t, n) => (rs(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), de = (r, e, t) => (rs(r, e, "access private method"), t);
var En = class {
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
}, Ar = typeof window > "u" || "Deno" in globalThis;
function Wo() {
}
function Pi(r) {
  return typeof r == "number" && r >= 0 && r !== 1 / 0;
}
function Ko(r, e) {
  return Math.max(r + (e || 0) - Date.now(), 0);
}
function sn(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function rt(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Di(r) {
  return JSON.stringify(
    r,
    (e, t) => ds(t) ? Object.keys(t).sort().reduce((n, s) => (n[s] = t[s], n), {}) : t
  );
}
function hs(r, e) {
  if (r === e)
    return r;
  const t = Fi(r) && Fi(e);
  if (t || ds(r) && ds(e)) {
    const n = t ? r : Object.keys(r), s = n.length, i = t ? e : Object.keys(e), o = i.length, u = t ? [] : {};
    let l = 0;
    for (let h = 0; h < o; h++) {
      const d = t ? h : i[h];
      (!t && n.includes(d) || t) && r[d] === void 0 && e[d] === void 0 ? (u[d] = void 0, l++) : (u[d] = hs(r[d], e[d]), u[d] === r[d] && r[d] !== void 0 && l++);
    }
    return s === o && l === s ? r : u;
  }
  return e;
}
function yn(r, e) {
  if (!e || Object.keys(r).length !== Object.keys(e).length)
    return !1;
  for (const t in r)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Fi(r) {
  return Array.isArray(r) && r.length === Object.keys(r).length;
}
function ds(r) {
  if (!Ii(r))
    return !1;
  const e = r.constructor;
  if (e === void 0)
    return !0;
  const t = e.prototype;
  return !(!Ii(t) || !t.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(r) !== Object.prototype);
}
function Ii(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function Li(r, e, t) {
  if (typeof t.structuralSharing == "function")
    return t.structuralSharing(r, e);
  if (t.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return hs(r, e);
      } catch (n) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${t.queryHash}]: ${n}`
        ), n;
      }
    return hs(r, e);
  }
  return e;
}
var $t, Et, nr, ga, Yo = (ga = class extends En {
  constructor() {
    super();
    ue(this, $t);
    ue(this, Et);
    ue(this, nr);
    j(this, nr, (e) => {
      if (!Ar && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    _(this, Et) || this.setEventListener(_(this, nr));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = _(this, Et)) == null || e.call(this), j(this, Et, void 0));
  }
  setEventListener(e) {
    var t;
    j(this, nr, e), (t = _(this, Et)) == null || t.call(this), j(this, Et, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    _(this, $t) !== e && (j(this, $t, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    var e;
    return typeof _(this, $t) == "boolean" ? _(this, $t) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, $t = new WeakMap(), Et = new WeakMap(), nr = new WeakMap(), ga), Jo = new Yo(), sr, St, ir, ba, Qo = (ba = class extends En {
  constructor() {
    super();
    ue(this, sr, !0);
    ue(this, St);
    ue(this, ir);
    j(this, ir, (e) => {
      if (!Ar && window.addEventListener) {
        const t = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    _(this, St) || this.setEventListener(_(this, ir));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = _(this, St)) == null || e.call(this), j(this, St, void 0));
  }
  setEventListener(e) {
    var t;
    j(this, ir, e), (t = _(this, St)) == null || t.call(this), j(this, St, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    _(this, sr) !== e && (j(this, sr, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return _(this, sr);
  }
}, sr = new WeakMap(), St = new WeakMap(), ir = new WeakMap(), ba), Xo = new Qo();
function qi() {
  let r, e;
  const t = new Promise((s, i) => {
    r = s, e = i;
  });
  t.status = "pending", t.catch(() => {
  });
  function n(s) {
    Object.assign(t, s), delete t.resolve, delete t.reject;
  }
  return t.resolve = (s) => {
    n({
      status: "fulfilled",
      value: s
    }), r(s);
  }, t.reject = (s) => {
    n({
      status: "rejected",
      reason: s
    }), e(s);
  }, t;
}
function Zo(r) {
  return (r ?? "online") === "online" ? Xo.isOnline() : !0;
}
var eu = (r) => setTimeout(r, 0);
function tu() {
  let r = [], e = 0, t = (u) => {
    u();
  }, n = (u) => {
    u();
  }, s = eu;
  const i = (u) => {
    e ? r.push(u) : s(() => {
      t(u);
    });
  }, o = () => {
    const u = r;
    r = [], u.length && s(() => {
      n(() => {
        u.forEach((l) => {
          t(l);
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
      i(() => {
        u(...l);
      });
    },
    schedule: i,
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
var Sn = tu();
function ru(r, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Zo(e.networkMode) ? "fetching" : "paused",
    ...r === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function nu() {
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
var Me, H, Nr, qe, Bt, ar, Tt, wt, kr, or, ur, Mt, jt, Rt, lr, re, Tr, ps, ms, ys, gs, bs, vs, _s, Ea, va, su = (va = class extends En {
  constructor(e, t) {
    super();
    ue(this, re);
    ue(this, Me);
    ue(this, H);
    ue(this, Nr);
    ue(this, qe);
    ue(this, Bt);
    ue(this, ar);
    ue(this, Tt);
    ue(this, wt);
    ue(this, kr);
    ue(this, or);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    ue(this, ur);
    ue(this, Mt);
    ue(this, jt);
    ue(this, Rt);
    ue(this, lr, /* @__PURE__ */ new Set());
    this.options = t, j(this, Me, e), j(this, wt, null), j(this, Tt, qi()), this.options.experimental_prefetchInRender || _(this, Tt).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(t);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (_(this, H).addObserver(this), $i(_(this, H), this.options) ? de(this, re, Tr).call(this) : this.updateResult(), de(this, re, gs).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Es(
      _(this, H),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Es(
      _(this, H),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), de(this, re, bs).call(this), de(this, re, vs).call(this), _(this, H).removeObserver(this);
  }
  setOptions(e) {
    const t = this.options, n = _(this, H);
    if (this.options = _(this, Me).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof rt(this.options.enabled, _(this, H)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    de(this, re, _s).call(this), _(this, H).setOptions(this.options), t._defaulted && !yn(this.options, t) && _(this, Me).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: _(this, H),
      observer: this
    });
    const s = this.hasListeners();
    s && Bi(
      _(this, H),
      n,
      this.options,
      t
    ) && de(this, re, Tr).call(this), this.updateResult(), s && (_(this, H) !== n || rt(this.options.enabled, _(this, H)) !== rt(t.enabled, _(this, H)) || sn(this.options.staleTime, _(this, H)) !== sn(t.staleTime, _(this, H))) && de(this, re, ps).call(this);
    const i = de(this, re, ms).call(this);
    s && (_(this, H) !== n || rt(this.options.enabled, _(this, H)) !== rt(t.enabled, _(this, H)) || i !== _(this, Rt)) && de(this, re, ys).call(this, i);
  }
  getOptimisticResult(e) {
    const t = _(this, Me).getQueryCache().build(_(this, Me), e), n = this.createResult(t, e);
    return au(this, n) && (j(this, qe, n), j(this, ar, this.options), j(this, Bt, _(this, H).state)), n;
  }
  getCurrentResult() {
    return _(this, qe);
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
    _(this, lr).add(e);
  }
  getCurrentQuery() {
    return _(this, H);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const t = _(this, Me).defaultQueryOptions(e), n = _(this, Me).getQueryCache().build(_(this, Me), t);
    return n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return de(this, re, Tr).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), _(this, qe)));
  }
  createResult(e, t) {
    var Ne;
    const n = _(this, H), s = this.options, i = _(this, qe), o = _(this, Bt), u = _(this, ar), h = e !== n ? e.state : _(this, Nr), { state: d } = e;
    let m = { ...d }, O = !1, A;
    if (t._optimisticResults) {
      const ge = this.hasListeners(), te = !ge && $i(e, t), Ee = ge && Bi(e, n, t, s);
      (te || Ee) && (m = {
        ...m,
        ...ru(d.data, e.options)
      }), t._optimisticResults === "isRestoring" && (m.fetchStatus = "idle");
    }
    let { error: C, errorUpdatedAt: k, status: T } = m;
    A = m.data;
    let q = !1;
    if (t.placeholderData !== void 0 && A === void 0 && T === "pending") {
      let ge;
      i != null && i.isPlaceholderData && t.placeholderData === (u == null ? void 0 : u.placeholderData) ? (ge = i.data, q = !0) : ge = typeof t.placeholderData == "function" ? t.placeholderData(
        (Ne = _(this, ur)) == null ? void 0 : Ne.state.data,
        _(this, ur)
      ) : t.placeholderData, ge !== void 0 && (T = "success", A = Li(
        i == null ? void 0 : i.data,
        ge,
        t
      ), O = !0);
    }
    if (t.select && A !== void 0 && !q)
      if (i && A === (o == null ? void 0 : o.data) && t.select === _(this, kr))
        A = _(this, or);
      else
        try {
          j(this, kr, t.select), A = t.select(A), A = Li(i == null ? void 0 : i.data, A, t), j(this, or, A), j(this, wt, null);
        } catch (ge) {
          j(this, wt, ge);
        }
    _(this, wt) && (C = _(this, wt), A = _(this, or), k = Date.now(), T = "error");
    const P = m.fetchStatus === "fetching", K = T === "pending", ne = T === "error", $ = K && P, ee = A !== void 0, fe = {
      status: T,
      fetchStatus: m.fetchStatus,
      isPending: K,
      isSuccess: T === "success",
      isError: ne,
      isInitialLoading: $,
      isLoading: $,
      data: A,
      dataUpdatedAt: m.dataUpdatedAt,
      error: C,
      errorUpdatedAt: k,
      failureCount: m.fetchFailureCount,
      failureReason: m.fetchFailureReason,
      errorUpdateCount: m.errorUpdateCount,
      isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
      isFetchedAfterMount: m.dataUpdateCount > h.dataUpdateCount || m.errorUpdateCount > h.errorUpdateCount,
      isFetching: P,
      isRefetching: P && !K,
      isLoadingError: ne && !ee,
      isPaused: m.fetchStatus === "paused",
      isPlaceholderData: O,
      isRefetchError: ne && ee,
      isStale: Vs(e, t),
      refetch: this.refetch,
      promise: _(this, Tt)
    };
    if (this.options.experimental_prefetchInRender) {
      const ge = (pe) => {
        fe.status === "error" ? pe.reject(fe.error) : fe.data !== void 0 && pe.resolve(fe.data);
      }, te = () => {
        const pe = j(this, Tt, fe.promise = qi());
        ge(pe);
      }, Ee = _(this, Tt);
      switch (Ee.status) {
        case "pending":
          e.queryHash === n.queryHash && ge(Ee);
          break;
        case "fulfilled":
          (fe.status === "error" || fe.data !== Ee.value) && te();
          break;
        case "rejected":
          (fe.status !== "error" || fe.error !== Ee.reason) && te();
          break;
      }
    }
    return fe;
  }
  updateResult() {
    const e = _(this, qe), t = this.createResult(_(this, H), this.options);
    if (j(this, Bt, _(this, H).state), j(this, ar, this.options), _(this, Bt).data !== void 0 && j(this, ur, _(this, H)), yn(t, e))
      return;
    j(this, qe, t);
    const n = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: s } = this.options, i = typeof s == "function" ? s() : s;
      if (i === "all" || !i && !_(this, lr).size)
        return !0;
      const o = new Set(
        i ?? _(this, lr)
      );
      return this.options.throwOnError && o.add("error"), Object.keys(_(this, qe)).some((u) => {
        const l = u;
        return _(this, qe)[l] !== e[l] && o.has(l);
      });
    };
    de(this, re, Ea).call(this, { listeners: n() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && de(this, re, gs).call(this);
  }
}, Me = new WeakMap(), H = new WeakMap(), Nr = new WeakMap(), qe = new WeakMap(), Bt = new WeakMap(), ar = new WeakMap(), Tt = new WeakMap(), wt = new WeakMap(), kr = new WeakMap(), or = new WeakMap(), ur = new WeakMap(), Mt = new WeakMap(), jt = new WeakMap(), Rt = new WeakMap(), lr = new WeakMap(), re = new WeakSet(), Tr = function(e) {
  de(this, re, _s).call(this);
  let t = _(this, H).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (t = t.catch(Wo)), t;
}, ps = function() {
  de(this, re, bs).call(this);
  const e = sn(
    this.options.staleTime,
    _(this, H)
  );
  if (Ar || _(this, qe).isStale || !Pi(e))
    return;
  const n = Ko(_(this, qe).dataUpdatedAt, e) + 1;
  j(this, Mt, setTimeout(() => {
    _(this, qe).isStale || this.updateResult();
  }, n));
}, ms = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(_(this, H)) : this.options.refetchInterval) ?? !1;
}, ys = function(e) {
  de(this, re, vs).call(this), j(this, Rt, e), !(Ar || rt(this.options.enabled, _(this, H)) === !1 || !Pi(_(this, Rt)) || _(this, Rt) === 0) && j(this, jt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Jo.isFocused()) && de(this, re, Tr).call(this);
  }, _(this, Rt)));
}, gs = function() {
  de(this, re, ps).call(this), de(this, re, ys).call(this, de(this, re, ms).call(this));
}, bs = function() {
  _(this, Mt) && (clearTimeout(_(this, Mt)), j(this, Mt, void 0));
}, vs = function() {
  _(this, jt) && (clearInterval(_(this, jt)), j(this, jt, void 0));
}, _s = function() {
  const e = _(this, Me).getQueryCache().build(_(this, Me), this.options);
  if (e === _(this, H))
    return;
  const t = _(this, H);
  j(this, H, e), j(this, Nr, e.state), this.hasListeners() && (t == null || t.removeObserver(this), e.addObserver(this));
}, Ea = function(e) {
  Sn.batch(() => {
    e.listeners && this.listeners.forEach((t) => {
      t(_(this, qe));
    }), _(this, Me).getQueryCache().notify({
      query: _(this, H),
      type: "observerResultsUpdated"
    });
  });
}, va);
function iu(r, e) {
  return rt(e.enabled, r) !== !1 && r.state.data === void 0 && !(r.state.status === "error" && e.retryOnMount === !1);
}
function $i(r, e) {
  return iu(r, e) || r.state.data !== void 0 && Es(r, e, e.refetchOnMount);
}
function Es(r, e, t) {
  if (rt(e.enabled, r) !== !1) {
    const n = typeof t == "function" ? t(r) : t;
    return n === "always" || n !== !1 && Vs(r, e);
  }
  return !1;
}
function Bi(r, e, t, n) {
  return (r !== e || rt(n.enabled, r) === !1) && (!t.suspense || r.state.status !== "error") && Vs(r, t);
}
function Vs(r, e) {
  return rt(e.enabled, r) !== !1 && r.isStaleByTime(sn(e.staleTime, r));
}
function au(r, e) {
  return !yn(r.getCurrentResult(), e);
}
var Ct, At, je, ft, dt, an, Ss, _a, ou = (_a = class extends En {
  constructor(e, t) {
    super();
    ue(this, dt);
    ue(this, Ct);
    ue(this, At);
    ue(this, je);
    ue(this, ft);
    j(this, Ct, e), this.setOptions(t), this.bindMethods(), de(this, dt, an).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var n;
    const t = this.options;
    this.options = _(this, Ct).defaultMutationOptions(e), yn(this.options, t) || _(this, Ct).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: _(this, je),
      observer: this
    }), t != null && t.mutationKey && this.options.mutationKey && Di(t.mutationKey) !== Di(this.options.mutationKey) ? this.reset() : ((n = _(this, je)) == null ? void 0 : n.state.status) === "pending" && _(this, je).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = _(this, je)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    de(this, dt, an).call(this), de(this, dt, Ss).call(this, e);
  }
  getCurrentResult() {
    return _(this, At);
  }
  reset() {
    var e;
    (e = _(this, je)) == null || e.removeObserver(this), j(this, je, void 0), de(this, dt, an).call(this), de(this, dt, Ss).call(this);
  }
  mutate(e, t) {
    var n;
    return j(this, ft, t), (n = _(this, je)) == null || n.removeObserver(this), j(this, je, _(this, Ct).getMutationCache().build(_(this, Ct), this.options)), _(this, je).addObserver(this), _(this, je).execute(e);
  }
}, Ct = new WeakMap(), At = new WeakMap(), je = new WeakMap(), ft = new WeakMap(), dt = new WeakSet(), an = function() {
  var t;
  const e = ((t = _(this, je)) == null ? void 0 : t.state) ?? nu();
  j(this, At, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Ss = function(e) {
  Sn.batch(() => {
    var t, n, s, i, o, u, l, h;
    if (_(this, ft) && this.hasListeners()) {
      const d = _(this, At).variables, m = _(this, At).context;
      (e == null ? void 0 : e.type) === "success" ? ((n = (t = _(this, ft)).onSuccess) == null || n.call(t, e.data, d, m), (i = (s = _(this, ft)).onSettled) == null || i.call(s, e.data, null, d, m)) : (e == null ? void 0 : e.type) === "error" && ((u = (o = _(this, ft)).onError) == null || u.call(o, e.error, d, m), (h = (l = _(this, ft)).onSettled) == null || h.call(
        l,
        void 0,
        e.error,
        d,
        m
      ));
    }
    this.listeners.forEach((d) => {
      d(_(this, At));
    });
  });
}, _a);
function uu(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ts = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mi;
function lu() {
  if (Mi) return U;
  Mi = 1;
  var r = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.iterator;
  function O(y) {
    return y === null || typeof y != "object" ? null : (y = m && y[m] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var A = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, k = {};
  function T(y, S, V) {
    this.props = y, this.context = S, this.refs = k, this.updater = V || A;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(y, S) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, S, "setState");
  }, T.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function q() {
  }
  q.prototype = T.prototype;
  function P(y, S, V) {
    this.props = y, this.context = S, this.refs = k, this.updater = V || A;
  }
  var K = P.prototype = new q();
  K.constructor = P, C(K, T.prototype), K.isPureReactComponent = !0;
  var ne = Array.isArray, $ = Object.prototype.hasOwnProperty, ee = { current: null }, _e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fe(y, S, V) {
    var z, X = {}, he = null, le = null;
    if (S != null) for (z in S.ref !== void 0 && (le = S.ref), S.key !== void 0 && (he = "" + S.key), S) $.call(S, z) && !_e.hasOwnProperty(z) && (X[z] = S[z]);
    var oe = arguments.length - 2;
    if (oe === 1) X.children = V;
    else if (1 < oe) {
      for (var se = Array(oe), we = 0; we < oe; we++) se[we] = arguments[we + 2];
      X.children = se;
    }
    if (y && y.defaultProps) for (z in oe = y.defaultProps, oe) X[z] === void 0 && (X[z] = oe[z]);
    return { $$typeof: r, type: y, key: he, ref: le, props: X, _owner: ee.current };
  }
  function Ne(y, S) {
    return { $$typeof: r, type: y.type, key: S, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function ge(y) {
    return typeof y == "object" && y !== null && y.$$typeof === r;
  }
  function te(y) {
    var S = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(V) {
      return S[V];
    });
  }
  var Ee = /\/+/g;
  function pe(y, S) {
    return typeof y == "object" && y !== null && y.key != null ? te("" + y.key) : S.toString(36);
  }
  function Pe(y, S, V, z, X) {
    var he = typeof y;
    (he === "undefined" || he === "boolean") && (y = null);
    var le = !1;
    if (y === null) le = !0;
    else switch (he) {
      case "string":
      case "number":
        le = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case r:
          case e:
            le = !0;
        }
    }
    if (le) return le = y, X = X(le), y = z === "" ? "." + pe(le, 0) : z, ne(X) ? (V = "", y != null && (V = y.replace(Ee, "$&/") + "/"), Pe(X, S, V, "", function(we) {
      return we;
    })) : X != null && (ge(X) && (X = Ne(X, V + (!X.key || le && le.key === X.key ? "" : ("" + X.key).replace(Ee, "$&/") + "/") + y)), S.push(X)), 1;
    if (le = 0, z = z === "" ? "." : z + ":", ne(y)) for (var oe = 0; oe < y.length; oe++) {
      he = y[oe];
      var se = z + pe(he, oe);
      le += Pe(he, S, V, se, X);
    }
    else if (se = O(y), typeof se == "function") for (y = se.call(y), oe = 0; !(he = y.next()).done; ) he = he.value, se = z + pe(he, oe++), le += Pe(he, S, V, se, X);
    else if (he === "object") throw S = String(y), Error("Objects are not valid as a React child (found: " + (S === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : S) + "). If you meant to render a collection of children, use an array instead.");
    return le;
  }
  function De(y, S, V) {
    if (y == null) return y;
    var z = [], X = 0;
    return Pe(y, z, "", "", function(he) {
      return S.call(V, he, X++);
    }), z;
  }
  function Ye(y) {
    if (y._status === -1) {
      var S = y._result;
      S = S(), S.then(function(V) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = V);
      }, function(V) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = V);
      }), y._status === -1 && (y._status = 0, y._result = S);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var D = { current: null }, Ze = { transition: null }, Nt = { ReactCurrentDispatcher: D, ReactCurrentBatchConfig: Ze, ReactCurrentOwner: ee };
  function ot() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return U.Children = { map: De, forEach: function(y, S, V) {
    De(y, function() {
      S.apply(this, arguments);
    }, V);
  }, count: function(y) {
    var S = 0;
    return De(y, function() {
      S++;
    }), S;
  }, toArray: function(y) {
    return De(y, function(S) {
      return S;
    }) || [];
  }, only: function(y) {
    if (!ge(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, U.Component = T, U.Fragment = t, U.Profiler = s, U.PureComponent = P, U.StrictMode = n, U.Suspense = l, U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nt, U.act = ot, U.cloneElement = function(y, S, V) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var z = C({}, y.props), X = y.key, he = y.ref, le = y._owner;
    if (S != null) {
      if (S.ref !== void 0 && (he = S.ref, le = ee.current), S.key !== void 0 && (X = "" + S.key), y.type && y.type.defaultProps) var oe = y.type.defaultProps;
      for (se in S) $.call(S, se) && !_e.hasOwnProperty(se) && (z[se] = S[se] === void 0 && oe !== void 0 ? oe[se] : S[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) z.children = V;
    else if (1 < se) {
      oe = Array(se);
      for (var we = 0; we < se; we++) oe[we] = arguments[we + 2];
      z.children = oe;
    }
    return { $$typeof: r, type: y.type, key: X, ref: he, props: z, _owner: le };
  }, U.createContext = function(y) {
    return y = { $$typeof: o, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: i, _context: y }, y.Consumer = y;
  }, U.createElement = fe, U.createFactory = function(y) {
    var S = fe.bind(null, y);
    return S.type = y, S;
  }, U.createRef = function() {
    return { current: null };
  }, U.forwardRef = function(y) {
    return { $$typeof: u, render: y };
  }, U.isValidElement = ge, U.lazy = function(y) {
    return { $$typeof: d, _payload: { _status: -1, _result: y }, _init: Ye };
  }, U.memo = function(y, S) {
    return { $$typeof: h, type: y, compare: S === void 0 ? null : S };
  }, U.startTransition = function(y) {
    var S = Ze.transition;
    Ze.transition = {};
    try {
      y();
    } finally {
      Ze.transition = S;
    }
  }, U.unstable_act = ot, U.useCallback = function(y, S) {
    return D.current.useCallback(y, S);
  }, U.useContext = function(y) {
    return D.current.useContext(y);
  }, U.useDebugValue = function() {
  }, U.useDeferredValue = function(y) {
    return D.current.useDeferredValue(y);
  }, U.useEffect = function(y, S) {
    return D.current.useEffect(y, S);
  }, U.useId = function() {
    return D.current.useId();
  }, U.useImperativeHandle = function(y, S, V) {
    return D.current.useImperativeHandle(y, S, V);
  }, U.useInsertionEffect = function(y, S) {
    return D.current.useInsertionEffect(y, S);
  }, U.useLayoutEffect = function(y, S) {
    return D.current.useLayoutEffect(y, S);
  }, U.useMemo = function(y, S) {
    return D.current.useMemo(y, S);
  }, U.useReducer = function(y, S, V) {
    return D.current.useReducer(y, S, V);
  }, U.useRef = function(y) {
    return D.current.useRef(y);
  }, U.useState = function(y) {
    return D.current.useState(y);
  }, U.useSyncExternalStore = function(y, S, V) {
    return D.current.useSyncExternalStore(y, S, V);
  }, U.useTransition = function() {
    return D.current.useTransition();
  }, U.version = "18.3.1", U;
}
var wr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
wr.exports;
var ji;
function cu() {
  return ji || (ji = 1, function(r, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = "18.3.1", n = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), h = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), T = Symbol.iterator, q = "@@iterator";
      function P(a) {
        if (a === null || typeof a != "object")
          return null;
        var c = T && a[T] || a[q];
        return typeof c == "function" ? c : null;
      }
      var K = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ne = {
        transition: null
      }, $ = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, _e = {}, fe = null;
      function Ne(a) {
        fe = a;
      }
      _e.setExtraStackFrame = function(a) {
        fe = a;
      }, _e.getCurrentStack = null, _e.getStackAddendum = function() {
        var a = "";
        fe && (a += fe);
        var c = _e.getCurrentStack;
        return c && (a += c() || ""), a;
      };
      var ge = !1, te = !1, Ee = !1, pe = !1, Pe = !1, De = {
        ReactCurrentDispatcher: K,
        ReactCurrentBatchConfig: ne,
        ReactCurrentOwner: ee
      };
      De.ReactDebugCurrentFrame = _e, De.ReactCurrentActQueue = $;
      function Ye(a) {
        {
          for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), v = 1; v < c; v++)
            g[v - 1] = arguments[v];
          Ze("warn", a, g);
        }
      }
      function D(a) {
        {
          for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), v = 1; v < c; v++)
            g[v - 1] = arguments[v];
          Ze("error", a, g);
        }
      }
      function Ze(a, c, g) {
        {
          var v = De.ReactDebugCurrentFrame, R = v.getStackAddendum();
          R !== "" && (c += "%s", g = g.concat([R]));
          var F = g.map(function(x) {
            return String(x);
          });
          F.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, F);
        }
      }
      var Nt = {};
      function ot(a, c) {
        {
          var g = a.constructor, v = g && (g.displayName || g.name) || "ReactClass", R = v + "." + c;
          if (Nt[R])
            return;
          D("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", c, v), Nt[R] = !0;
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
          ot(a, "forceUpdate");
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
        enqueueReplaceState: function(a, c, g, v) {
          ot(a, "replaceState");
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
        enqueueSetState: function(a, c, g, v) {
          ot(a, "setState");
        }
      }, S = Object.assign, V = {};
      Object.freeze(V);
      function z(a, c, g) {
        this.props = a, this.context = c, this.refs = V, this.updater = g || y;
      }
      z.prototype.isReactComponent = {}, z.prototype.setState = function(a, c) {
        if (typeof a != "object" && typeof a != "function" && a != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, c, "setState");
      }, z.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      {
        var X = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, he = function(a, c) {
          Object.defineProperty(z.prototype, a, {
            get: function() {
              Ye("%s(...) is deprecated in plain JavaScript React classes. %s", c[0], c[1]);
            }
          });
        };
        for (var le in X)
          X.hasOwnProperty(le) && he(le, X[le]);
      }
      function oe() {
      }
      oe.prototype = z.prototype;
      function se(a, c, g) {
        this.props = a, this.context = c, this.refs = V, this.updater = g || y;
      }
      var we = se.prototype = new oe();
      we.constructor = se, S(we, z.prototype), we.isPureReactComponent = !0;
      function Dn() {
        var a = {
          current: null
        };
        return Object.seal(a), a;
      }
      var Ir = Array.isArray;
      function Wt(a) {
        return Ir(a);
      }
      function Fn(a) {
        {
          var c = typeof Symbol == "function" && Symbol.toStringTag, g = c && a[Symbol.toStringTag] || a.constructor.name || "Object";
          return g;
        }
      }
      function Kt(a) {
        try {
          return pt(a), !1;
        } catch {
          return !0;
        }
      }
      function pt(a) {
        return "" + a;
      }
      function kt(a) {
        if (Kt(a))
          return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(a)), pt(a);
      }
      function Lr(a, c, g) {
        var v = a.displayName;
        if (v)
          return v;
        var R = c.displayName || c.name || "";
        return R !== "" ? g + "(" + R + ")" : g;
      }
      function xt(a) {
        return a.displayName || "Context";
      }
      function et(a) {
        if (a == null)
          return null;
        if (typeof a.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
        switch (a) {
          case i:
            return "Fragment";
          case s:
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
            case h:
              var c = a;
              return xt(c) + ".Consumer";
            case l:
              var g = a;
              return xt(g._context) + ".Provider";
            case d:
              return Lr(a, a.render, "ForwardRef");
            case A:
              var v = a.displayName || null;
              return v !== null ? v : et(a.type) || "Memo";
            case C: {
              var R = a, F = R._payload, x = R._init;
              try {
                return et(x(F));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Pt = Object.prototype.hasOwnProperty, Yt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, qr, $r, Jt;
      Jt = {};
      function dr(a) {
        if (Pt.call(a, "ref")) {
          var c = Object.getOwnPropertyDescriptor(a, "ref").get;
          if (c && c.isReactWarning)
            return !1;
        }
        return a.ref !== void 0;
      }
      function mt(a) {
        if (Pt.call(a, "key")) {
          var c = Object.getOwnPropertyDescriptor(a, "key").get;
          if (c && c.isReactWarning)
            return !1;
        }
        return a.key !== void 0;
      }
      function In(a, c) {
        var g = function() {
          qr || (qr = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: g,
          configurable: !0
        });
      }
      function Br(a, c) {
        var g = function() {
          $r || ($r = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: g,
          configurable: !0
        });
      }
      function Mr(a) {
        if (typeof a.ref == "string" && ee.current && a.__self && ee.current.stateNode !== a.__self) {
          var c = et(ee.current.type);
          Jt[c] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', c, a.ref), Jt[c] = !0);
        }
      }
      var Dt = function(a, c, g, v, R, F, x) {
        var L = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: a,
          key: c,
          ref: g,
          props: x,
          // Record the component responsible for creating this element.
          _owner: F
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
          value: v
        }), Object.defineProperty(L, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: R
        }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
      };
      function Ln(a, c, g) {
        var v, R = {}, F = null, x = null, L = null, Y = null;
        if (c != null) {
          dr(c) && (x = c.ref, Mr(c)), mt(c) && (kt(c.key), F = "" + c.key), L = c.__self === void 0 ? null : c.__self, Y = c.__source === void 0 ? null : c.__source;
          for (v in c)
            Pt.call(c, v) && !Yt.hasOwnProperty(v) && (R[v] = c[v]);
        }
        var ce = arguments.length - 2;
        if (ce === 1)
          R.children = g;
        else if (ce > 1) {
          for (var me = Array(ce), ye = 0; ye < ce; ye++)
            me[ye] = arguments[ye + 2];
          Object.freeze && Object.freeze(me), R.children = me;
        }
        if (a && a.defaultProps) {
          var ve = a.defaultProps;
          for (v in ve)
            R[v] === void 0 && (R[v] = ve[v]);
        }
        if (F || x) {
          var Re = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          F && In(R, Re), x && Br(R, Re);
        }
        return Dt(a, F, x, L, Y, ee.current, R);
      }
      function qn(a, c) {
        var g = Dt(a.type, c, a.ref, a._self, a._source, a._owner, a.props);
        return g;
      }
      function $n(a, c, g) {
        if (a == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var v, R = S({}, a.props), F = a.key, x = a.ref, L = a._self, Y = a._source, ce = a._owner;
        if (c != null) {
          dr(c) && (x = c.ref, ce = ee.current), mt(c) && (kt(c.key), F = "" + c.key);
          var me;
          a.type && a.type.defaultProps && (me = a.type.defaultProps);
          for (v in c)
            Pt.call(c, v) && !Yt.hasOwnProperty(v) && (c[v] === void 0 && me !== void 0 ? R[v] = me[v] : R[v] = c[v]);
        }
        var ye = arguments.length - 2;
        if (ye === 1)
          R.children = g;
        else if (ye > 1) {
          for (var ve = Array(ye), Re = 0; Re < ye; Re++)
            ve[Re] = arguments[Re + 2];
          R.children = ve;
        }
        return Dt(a.type, F, x, L, Y, ce, R);
      }
      function yt(a) {
        return typeof a == "object" && a !== null && a.$$typeof === n;
      }
      var jr = ".", Bn = ":";
      function Mn(a) {
        var c = /[=:]/g, g = {
          "=": "=0",
          ":": "=2"
        }, v = a.replace(c, function(R) {
          return g[R];
        });
        return "$" + v;
      }
      var Qt = !1, Ur = /\/+/g;
      function ut(a) {
        return a.replace(Ur, "$&/");
      }
      function Ft(a, c) {
        return typeof a == "object" && a !== null && a.key != null ? (kt(a.key), Mn("" + a.key)) : c.toString(36);
      }
      function gt(a, c, g, v, R) {
        var F = typeof a;
        (F === "undefined" || F === "boolean") && (a = null);
        var x = !1;
        if (a === null)
          x = !0;
        else
          switch (F) {
            case "string":
            case "number":
              x = !0;
              break;
            case "object":
              switch (a.$$typeof) {
                case n:
                case s:
                  x = !0;
              }
          }
        if (x) {
          var L = a, Y = R(L), ce = v === "" ? jr + Ft(L, 0) : v;
          if (Wt(Y)) {
            var me = "";
            ce != null && (me = ut(ce) + "/"), gt(Y, c, me, "", function(Ho) {
              return Ho;
            });
          } else Y != null && (yt(Y) && (Y.key && (!L || L.key !== Y.key) && kt(Y.key), Y = qn(
            Y,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            g + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Y.key && (!L || L.key !== Y.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ut("" + Y.key) + "/"
            ) : "") + ce
          )), c.push(Y));
          return 1;
        }
        var ye, ve, Re = 0, Ie = v === "" ? jr : v + Bn;
        if (Wt(a))
          for (var en = 0; en < a.length; en++)
            ye = a[en], ve = Ie + Ft(ye, en), Re += gt(ye, c, g, ve, R);
        else {
          var ts = P(a);
          if (typeof ts == "function") {
            var Oi = a;
            ts === Oi.entries && (Qt || Ye("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var Go = ts.call(Oi), Ni, zo = 0; !(Ni = Go.next()).done; )
              ye = Ni.value, ve = Ie + Ft(ye, zo++), Re += gt(ye, c, g, ve, R);
          } else if (F === "object") {
            var ki = String(a);
            throw new Error("Objects are not valid as a React child (found: " + (ki === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : ki) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Re;
      }
      function It(a, c, g) {
        if (a == null)
          return a;
        var v = [], R = 0;
        return gt(a, v, "", "", function(F) {
          return c.call(g, F, R++);
        }), v;
      }
      function jn(a) {
        var c = 0;
        return It(a, function() {
          c++;
        }), c;
      }
      function Vr(a, c, g) {
        It(a, function() {
          c.apply(this, arguments);
        }, g);
      }
      function Un(a) {
        return It(a, function(c) {
          return c;
        }) || [];
      }
      function Gr(a) {
        if (!yt(a))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return a;
      }
      function zr(a) {
        var c = {
          $$typeof: h,
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
        var g = !1, v = !1, R = !1;
        {
          var F = {
            $$typeof: h,
            _context: c
          };
          Object.defineProperties(F, {
            Provider: {
              get: function() {
                return v || (v = !0, D("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), c.Provider;
              },
              set: function(x) {
                c.Provider = x;
              }
            },
            _currentValue: {
              get: function() {
                return c._currentValue;
              },
              set: function(x) {
                c._currentValue = x;
              }
            },
            _currentValue2: {
              get: function() {
                return c._currentValue2;
              },
              set: function(x) {
                c._currentValue2 = x;
              }
            },
            _threadCount: {
              get: function() {
                return c._threadCount;
              },
              set: function(x) {
                c._threadCount = x;
              }
            },
            Consumer: {
              get: function() {
                return g || (g = !0, D("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), c.Consumer;
              }
            },
            displayName: {
              get: function() {
                return c.displayName;
              },
              set: function(x) {
                R || (Ye("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", x), R = !0);
              }
            }
          }), c.Consumer = F;
        }
        return c._currentRenderer = null, c._currentRenderer2 = null, c;
      }
      var Lt = -1, pr = 0, mr = 1, Hr = 2;
      function Vn(a) {
        if (a._status === Lt) {
          var c = a._result, g = c();
          if (g.then(function(F) {
            if (a._status === pr || a._status === Lt) {
              var x = a;
              x._status = mr, x._result = F;
            }
          }, function(F) {
            if (a._status === pr || a._status === Lt) {
              var x = a;
              x._status = Hr, x._result = F;
            }
          }), a._status === Lt) {
            var v = a;
            v._status = pr, v._result = g;
          }
        }
        if (a._status === mr) {
          var R = a._result;
          return R === void 0 && D(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, R), "default" in R || D(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, R), R.default;
        } else
          throw a._result;
      }
      function Gn(a) {
        var c = {
          // We use these fields to store the result.
          _status: Lt,
          _result: a
        }, g = {
          $$typeof: C,
          _payload: c,
          _init: Vn
        };
        {
          var v, R;
          Object.defineProperties(g, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return v;
              },
              set: function(F) {
                D("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), v = F, Object.defineProperty(g, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return R;
              },
              set: function(F) {
                D("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), R = F, Object.defineProperty(g, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return g;
      }
      function zn(a) {
        a != null && a.$$typeof === A ? D("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof a != "function" ? D("forwardRef requires a render function but was given %s.", a === null ? "null" : typeof a) : a.length !== 0 && a.length !== 2 && D("forwardRef render functions accept exactly two parameters: props and ref. %s", a.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), a != null && (a.defaultProps != null || a.propTypes != null) && D("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var c = {
          $$typeof: d,
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
            set: function(v) {
              g = v, !a.name && !a.displayName && (a.displayName = v);
            }
          });
        }
        return c;
      }
      var Wr;
      Wr = Symbol.for("react.module.reference");
      function f(a) {
        return !!(typeof a == "string" || typeof a == "function" || a === i || a === u || Pe || a === o || a === m || a === O || pe || a === k || ge || te || Ee || typeof a == "object" && a !== null && (a.$$typeof === C || a.$$typeof === A || a.$$typeof === l || a.$$typeof === h || a.$$typeof === d || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        a.$$typeof === Wr || a.getModuleId !== void 0));
      }
      function E(a, c) {
        f(a) || D("memo: The first argument must be a component. Instead received: %s", a === null ? "null" : typeof a);
        var g = {
          $$typeof: A,
          type: a,
          compare: c === void 0 ? null : c
        };
        {
          var v;
          Object.defineProperty(g, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return v;
            },
            set: function(R) {
              v = R, !a.name && !a.displayName && (a.displayName = R);
            }
          });
        }
        return g;
      }
      function w() {
        var a = K.current;
        return a === null && D(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), a;
      }
      function I(a) {
        var c = w();
        if (a._context !== void 0) {
          var g = a._context;
          g.Consumer === a ? D("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : g.Provider === a && D("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return c.useContext(a);
      }
      function Z(a) {
        var c = w();
        return c.useState(a);
      }
      function ie(a, c, g) {
        var v = w();
        return v.useReducer(a, c, g);
      }
      function G(a) {
        var c = w();
        return c.useRef(a);
      }
      function M(a, c) {
        var g = w();
        return g.useEffect(a, c);
      }
      function Fe(a, c) {
        var g = w();
        return g.useInsertionEffect(a, c);
      }
      function be(a, c) {
        var g = w();
        return g.useLayoutEffect(a, c);
      }
      function Se(a, c) {
        var g = w();
        return g.useCallback(a, c);
      }
      function $e(a, c) {
        var g = w();
        return g.useMemo(a, c);
      }
      function bt(a, c, g) {
        var v = w();
        return v.useImperativeHandle(a, c, g);
      }
      function lt(a, c) {
        {
          var g = w();
          return g.useDebugValue(a, c);
        }
      }
      function Le() {
        var a = w();
        return a.useTransition();
      }
      function yr(a) {
        var c = w();
        return c.useDeferredValue(a);
      }
      function Hn() {
        var a = w();
        return a.useId();
      }
      function Wn(a, c, g) {
        var v = w();
        return v.useSyncExternalStore(a, c, g);
      }
      var gr = 0, oi, ui, li, ci, fi, hi, di;
      function pi() {
      }
      pi.__reactDisabledLog = !0;
      function Co() {
        {
          if (gr === 0) {
            oi = console.log, ui = console.info, li = console.warn, ci = console.error, fi = console.group, hi = console.groupCollapsed, di = console.groupEnd;
            var a = {
              configurable: !0,
              enumerable: !0,
              value: pi,
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
          gr++;
        }
      }
      function Ao() {
        {
          if (gr--, gr === 0) {
            var a = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: S({}, a, {
                value: oi
              }),
              info: S({}, a, {
                value: ui
              }),
              warn: S({}, a, {
                value: li
              }),
              error: S({}, a, {
                value: ci
              }),
              group: S({}, a, {
                value: fi
              }),
              groupCollapsed: S({}, a, {
                value: hi
              }),
              groupEnd: S({}, a, {
                value: di
              })
            });
          }
          gr < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Kn = De.ReactCurrentDispatcher, Yn;
      function Kr(a, c, g) {
        {
          if (Yn === void 0)
            try {
              throw Error();
            } catch (R) {
              var v = R.stack.trim().match(/\n( *(at )?)/);
              Yn = v && v[1] || "";
            }
          return `
` + Yn + a;
        }
      }
      var Jn = !1, Yr;
      {
        var Oo = typeof WeakMap == "function" ? WeakMap : Map;
        Yr = new Oo();
      }
      function mi(a, c) {
        if (!a || Jn)
          return "";
        {
          var g = Yr.get(a);
          if (g !== void 0)
            return g;
        }
        var v;
        Jn = !0;
        var R = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var F;
        F = Kn.current, Kn.current = null, Co();
        try {
          if (c) {
            var x = function() {
              throw Error();
            };
            if (Object.defineProperty(x.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(x, []);
              } catch (Ie) {
                v = Ie;
              }
              Reflect.construct(a, [], x);
            } else {
              try {
                x.call();
              } catch (Ie) {
                v = Ie;
              }
              a.call(x.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ie) {
              v = Ie;
            }
            a();
          }
        } catch (Ie) {
          if (Ie && v && typeof Ie.stack == "string") {
            for (var L = Ie.stack.split(`
`), Y = v.stack.split(`
`), ce = L.length - 1, me = Y.length - 1; ce >= 1 && me >= 0 && L[ce] !== Y[me]; )
              me--;
            for (; ce >= 1 && me >= 0; ce--, me--)
              if (L[ce] !== Y[me]) {
                if (ce !== 1 || me !== 1)
                  do
                    if (ce--, me--, me < 0 || L[ce] !== Y[me]) {
                      var ye = `
` + L[ce].replace(" at new ", " at ");
                      return a.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", a.displayName)), typeof a == "function" && Yr.set(a, ye), ye;
                    }
                  while (ce >= 1 && me >= 0);
                break;
              }
          }
        } finally {
          Jn = !1, Kn.current = F, Ao(), Error.prepareStackTrace = R;
        }
        var ve = a ? a.displayName || a.name : "", Re = ve ? Kr(ve) : "";
        return typeof a == "function" && Yr.set(a, Re), Re;
      }
      function No(a, c, g) {
        return mi(a, !1);
      }
      function ko(a) {
        var c = a.prototype;
        return !!(c && c.isReactComponent);
      }
      function Jr(a, c, g) {
        if (a == null)
          return "";
        if (typeof a == "function")
          return mi(a, ko(a));
        if (typeof a == "string")
          return Kr(a);
        switch (a) {
          case m:
            return Kr("Suspense");
          case O:
            return Kr("SuspenseList");
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case d:
              return No(a.render);
            case A:
              return Jr(a.type, c, g);
            case C: {
              var v = a, R = v._payload, F = v._init;
              try {
                return Jr(F(R), c, g);
              } catch {
              }
            }
          }
        return "";
      }
      var yi = {}, gi = De.ReactDebugCurrentFrame;
      function Qr(a) {
        if (a) {
          var c = a._owner, g = Jr(a.type, a._source, c ? c.type : null);
          gi.setExtraStackFrame(g);
        } else
          gi.setExtraStackFrame(null);
      }
      function xo(a, c, g, v, R) {
        {
          var F = Function.call.bind(Pt);
          for (var x in a)
            if (F(a, x)) {
              var L = void 0;
              try {
                if (typeof a[x] != "function") {
                  var Y = Error((v || "React class") + ": " + g + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Y.name = "Invariant Violation", Y;
                }
                L = a[x](c, x, v, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ce) {
                L = ce;
              }
              L && !(L instanceof Error) && (Qr(R), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", g, x, typeof L), Qr(null)), L instanceof Error && !(L.message in yi) && (yi[L.message] = !0, Qr(R), D("Failed %s type: %s", g, L.message), Qr(null));
            }
        }
      }
      function Xt(a) {
        if (a) {
          var c = a._owner, g = Jr(a.type, a._source, c ? c.type : null);
          Ne(g);
        } else
          Ne(null);
      }
      var Qn;
      Qn = !1;
      function bi() {
        if (ee.current) {
          var a = et(ee.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
      function Po(a) {
        if (a !== void 0) {
          var c = a.fileName.replace(/^.*[\\\/]/, ""), g = a.lineNumber;
          return `

Check your code at ` + c + ":" + g + ".";
        }
        return "";
      }
      function Do(a) {
        return a != null ? Po(a.__source) : "";
      }
      var vi = {};
      function Fo(a) {
        var c = bi();
        if (!c) {
          var g = typeof a == "string" ? a : a.displayName || a.name;
          g && (c = `

Check the top-level render call using <` + g + ">.");
        }
        return c;
      }
      function _i(a, c) {
        if (!(!a._store || a._store.validated || a.key != null)) {
          a._store.validated = !0;
          var g = Fo(c);
          if (!vi[g]) {
            vi[g] = !0;
            var v = "";
            a && a._owner && a._owner !== ee.current && (v = " It was passed a child from " + et(a._owner.type) + "."), Xt(a), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, v), Xt(null);
          }
        }
      }
      function Ei(a, c) {
        if (typeof a == "object") {
          if (Wt(a))
            for (var g = 0; g < a.length; g++) {
              var v = a[g];
              yt(v) && _i(v, c);
            }
          else if (yt(a))
            a._store && (a._store.validated = !0);
          else if (a) {
            var R = P(a);
            if (typeof R == "function" && R !== a.entries)
              for (var F = R.call(a), x; !(x = F.next()).done; )
                yt(x.value) && _i(x.value, c);
          }
        }
      }
      function Si(a) {
        {
          var c = a.type;
          if (c == null || typeof c == "string")
            return;
          var g;
          if (typeof c == "function")
            g = c.propTypes;
          else if (typeof c == "object" && (c.$$typeof === d || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          c.$$typeof === A))
            g = c.propTypes;
          else
            return;
          if (g) {
            var v = et(c);
            xo(g, a.props, "prop", v, a);
          } else if (c.PropTypes !== void 0 && !Qn) {
            Qn = !0;
            var R = et(c);
            D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
          }
          typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Io(a) {
        {
          for (var c = Object.keys(a.props), g = 0; g < c.length; g++) {
            var v = c[g];
            if (v !== "children" && v !== "key") {
              Xt(a), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Xt(null);
              break;
            }
          }
          a.ref !== null && (Xt(a), D("Invalid attribute `ref` supplied to `React.Fragment`."), Xt(null));
        }
      }
      function Ti(a, c, g) {
        var v = f(a);
        if (!v) {
          var R = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = Do(c);
          F ? R += F : R += bi();
          var x;
          a === null ? x = "null" : Wt(a) ? x = "array" : a !== void 0 && a.$$typeof === n ? (x = "<" + (et(a.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : x = typeof a, D("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, R);
        }
        var L = Ln.apply(this, arguments);
        if (L == null)
          return L;
        if (v)
          for (var Y = 2; Y < arguments.length; Y++)
            Ei(arguments[Y], a);
        return a === i ? Io(L) : Si(L), L;
      }
      var wi = !1;
      function Lo(a) {
        var c = Ti.bind(null, a);
        return c.type = a, wi || (wi = !0, Ye("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(c, "type", {
          enumerable: !1,
          get: function() {
            return Ye("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: a
            }), a;
          }
        }), c;
      }
      function qo(a, c, g) {
        for (var v = $n.apply(this, arguments), R = 2; R < arguments.length; R++)
          Ei(arguments[R], v.type);
        return Si(v), v;
      }
      function $o(a, c) {
        var g = ne.transition;
        ne.transition = {};
        var v = ne.transition;
        ne.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          a();
        } finally {
          if (ne.transition = g, g === null && v._updatedFibers) {
            var R = v._updatedFibers.size;
            R > 10 && Ye("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), v._updatedFibers.clear();
          }
        }
      }
      var Ri = !1, Xr = null;
      function Bo(a) {
        if (Xr === null)
          try {
            var c = ("require" + Math.random()).slice(0, 7), g = r && r[c];
            Xr = g.call(r, "timers").setImmediate;
          } catch {
            Xr = function(R) {
              Ri === !1 && (Ri = !0, typeof MessageChannel > "u" && D("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var F = new MessageChannel();
              F.port1.onmessage = R, F.port2.postMessage(void 0);
            };
          }
        return Xr(a);
      }
      var Zt = 0, Ci = !1;
      function Ai(a) {
        {
          var c = Zt;
          Zt++, $.current === null && ($.current = []);
          var g = $.isBatchingLegacy, v;
          try {
            if ($.isBatchingLegacy = !0, v = a(), !g && $.didScheduleLegacyUpdate) {
              var R = $.current;
              R !== null && ($.didScheduleLegacyUpdate = !1, es(R));
            }
          } catch (ve) {
            throw Zr(c), ve;
          } finally {
            $.isBatchingLegacy = g;
          }
          if (v !== null && typeof v == "object" && typeof v.then == "function") {
            var F = v, x = !1, L = {
              then: function(ve, Re) {
                x = !0, F.then(function(Ie) {
                  Zr(c), Zt === 0 ? Xn(Ie, ve, Re) : ve(Ie);
                }, function(Ie) {
                  Zr(c), Re(Ie);
                });
              }
            };
            return !Ci && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              x || (Ci = !0, D("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), L;
          } else {
            var Y = v;
            if (Zr(c), Zt === 0) {
              var ce = $.current;
              ce !== null && (es(ce), $.current = null);
              var me = {
                then: function(ve, Re) {
                  $.current === null ? ($.current = [], Xn(Y, ve, Re)) : ve(Y);
                }
              };
              return me;
            } else {
              var ye = {
                then: function(ve, Re) {
                  ve(Y);
                }
              };
              return ye;
            }
          }
        }
      }
      function Zr(a) {
        a !== Zt - 1 && D("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Zt = a;
      }
      function Xn(a, c, g) {
        {
          var v = $.current;
          if (v !== null)
            try {
              es(v), Bo(function() {
                v.length === 0 ? ($.current = null, c(a)) : Xn(a, c, g);
              });
            } catch (R) {
              g(R);
            }
          else
            c(a);
        }
      }
      var Zn = !1;
      function es(a) {
        if (!Zn) {
          Zn = !0;
          var c = 0;
          try {
            for (; c < a.length; c++) {
              var g = a[c];
              do
                g = g(!0);
              while (g !== null);
            }
            a.length = 0;
          } catch (v) {
            throw a = a.slice(c + 1), v;
          } finally {
            Zn = !1;
          }
        }
      }
      var Mo = Ti, jo = qo, Uo = Lo, Vo = {
        map: It,
        forEach: Vr,
        count: jn,
        toArray: Un,
        only: Gr
      };
      e.Children = Vo, e.Component = z, e.Fragment = i, e.Profiler = u, e.PureComponent = se, e.StrictMode = o, e.Suspense = m, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = De, e.act = Ai, e.cloneElement = jo, e.createContext = zr, e.createElement = Mo, e.createFactory = Uo, e.createRef = Dn, e.forwardRef = zn, e.isValidElement = yt, e.lazy = Gn, e.memo = E, e.startTransition = $o, e.unstable_act = Ai, e.useCallback = Se, e.useContext = I, e.useDebugValue = lt, e.useDeferredValue = yr, e.useEffect = M, e.useId = Hn, e.useImperativeHandle = bt, e.useInsertionEffect = Fe, e.useLayoutEffect = be, e.useMemo = $e, e.useReducer = ie, e.useRef = G, e.useState = Z, e.useSyncExternalStore = Wn, e.useTransition = Le, e.version = t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(wr, wr.exports)), wr.exports;
}
process.env.NODE_ENV === "production" ? Ts.exports = lu() : Ts.exports = cu();
var ke = Ts.exports, br = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ui;
function fu() {
  if (Ui) return br;
  Ui = 1;
  var r = ke, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, l, h) {
    var d, m = {}, O = null, A = null;
    h !== void 0 && (O = "" + h), l.key !== void 0 && (O = "" + l.key), l.ref !== void 0 && (A = l.ref);
    for (d in l) n.call(l, d) && !i.hasOwnProperty(d) && (m[d] = l[d]);
    if (u && u.defaultProps) for (d in l = u.defaultProps, l) m[d] === void 0 && (m[d] = l[d]);
    return { $$typeof: e, type: u, key: O, ref: A, props: m, _owner: s.current };
  }
  return br.Fragment = t, br.jsx = o, br.jsxs = o, br;
}
var vr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function hu() {
  return Vi || (Vi = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ke, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), C = Symbol.iterator, k = "@@iterator";
    function T(f) {
      if (f === null || typeof f != "object")
        return null;
      var E = C && f[C] || f[k];
      return typeof E == "function" ? E : null;
    }
    var q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(f) {
      {
        for (var E = arguments.length, w = new Array(E > 1 ? E - 1 : 0), I = 1; I < E; I++)
          w[I - 1] = arguments[I];
        K("error", f, w);
      }
    }
    function K(f, E, w) {
      {
        var I = q.ReactDebugCurrentFrame, Z = I.getStackAddendum();
        Z !== "" && (E += "%s", w = w.concat([Z]));
        var ie = w.map(function(G) {
          return String(G);
        });
        ie.unshift("Warning: " + E), Function.prototype.apply.call(console[f], console, ie);
      }
    }
    var ne = !1, $ = !1, ee = !1, _e = !1, fe = !1, Ne;
    Ne = Symbol.for("react.module.reference");
    function ge(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === i || fe || f === s || f === h || f === d || _e || f === A || ne || $ || ee || typeof f == "object" && f !== null && (f.$$typeof === O || f.$$typeof === m || f.$$typeof === o || f.$$typeof === u || f.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === Ne || f.getModuleId !== void 0));
    }
    function te(f, E, w) {
      var I = f.displayName;
      if (I)
        return I;
      var Z = E.displayName || E.name || "";
      return Z !== "" ? w + "(" + Z + ")" : w;
    }
    function Ee(f) {
      return f.displayName || "Context";
    }
    function pe(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case h:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case u:
            var E = f;
            return Ee(E) + ".Consumer";
          case o:
            var w = f;
            return Ee(w._context) + ".Provider";
          case l:
            return te(f, f.render, "ForwardRef");
          case m:
            var I = f.displayName || null;
            return I !== null ? I : pe(f.type) || "Memo";
          case O: {
            var Z = f, ie = Z._payload, G = Z._init;
            try {
              return pe(G(ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Pe = Object.assign, De = 0, Ye, D, Ze, Nt, ot, y, S;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function z() {
      {
        if (De === 0) {
          Ye = console.log, D = console.info, Ze = console.warn, Nt = console.error, ot = console.group, y = console.groupCollapsed, S = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        De++;
      }
    }
    function X() {
      {
        if (De--, De === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Pe({}, f, {
              value: Ye
            }),
            info: Pe({}, f, {
              value: D
            }),
            warn: Pe({}, f, {
              value: Ze
            }),
            error: Pe({}, f, {
              value: Nt
            }),
            group: Pe({}, f, {
              value: ot
            }),
            groupCollapsed: Pe({}, f, {
              value: y
            }),
            groupEnd: Pe({}, f, {
              value: S
            })
          });
        }
        De < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = q.ReactCurrentDispatcher, le;
    function oe(f, E, w) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (Z) {
            var I = Z.stack.trim().match(/\n( *(at )?)/);
            le = I && I[1] || "";
          }
        return `
` + le + f;
      }
    }
    var se = !1, we;
    {
      var Dn = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Dn();
    }
    function Ir(f, E) {
      if (!f || se)
        return "";
      {
        var w = we.get(f);
        if (w !== void 0)
          return w;
      }
      var I;
      se = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ie;
      ie = he.current, he.current = null, z();
      try {
        if (E) {
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
            } catch (Le) {
              I = Le;
            }
            Reflect.construct(f, [], G);
          } else {
            try {
              G.call();
            } catch (Le) {
              I = Le;
            }
            f.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Le) {
            I = Le;
          }
          f();
        }
      } catch (Le) {
        if (Le && I && typeof Le.stack == "string") {
          for (var M = Le.stack.split(`
`), Fe = I.stack.split(`
`), be = M.length - 1, Se = Fe.length - 1; be >= 1 && Se >= 0 && M[be] !== Fe[Se]; )
            Se--;
          for (; be >= 1 && Se >= 0; be--, Se--)
            if (M[be] !== Fe[Se]) {
              if (be !== 1 || Se !== 1)
                do
                  if (be--, Se--, Se < 0 || M[be] !== Fe[Se]) {
                    var $e = `
` + M[be].replace(" at new ", " at ");
                    return f.displayName && $e.includes("<anonymous>") && ($e = $e.replace("<anonymous>", f.displayName)), typeof f == "function" && we.set(f, $e), $e;
                  }
                while (be >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        se = !1, he.current = ie, X(), Error.prepareStackTrace = Z;
      }
      var bt = f ? f.displayName || f.name : "", lt = bt ? oe(bt) : "";
      return typeof f == "function" && we.set(f, lt), lt;
    }
    function Wt(f, E, w) {
      return Ir(f, !1);
    }
    function Fn(f) {
      var E = f.prototype;
      return !!(E && E.isReactComponent);
    }
    function Kt(f, E, w) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return Ir(f, Fn(f));
      if (typeof f == "string")
        return oe(f);
      switch (f) {
        case h:
          return oe("Suspense");
        case d:
          return oe("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            return Wt(f.render);
          case m:
            return Kt(f.type, E, w);
          case O: {
            var I = f, Z = I._payload, ie = I._init;
            try {
              return Kt(ie(Z), E, w);
            } catch {
            }
          }
        }
      return "";
    }
    var pt = Object.prototype.hasOwnProperty, kt = {}, Lr = q.ReactDebugCurrentFrame;
    function xt(f) {
      if (f) {
        var E = f._owner, w = Kt(f.type, f._source, E ? E.type : null);
        Lr.setExtraStackFrame(w);
      } else
        Lr.setExtraStackFrame(null);
    }
    function et(f, E, w, I, Z) {
      {
        var ie = Function.call.bind(pt);
        for (var G in f)
          if (ie(f, G)) {
            var M = void 0;
            try {
              if (typeof f[G] != "function") {
                var Fe = Error((I || "React class") + ": " + w + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fe.name = "Invariant Violation", Fe;
              }
              M = f[G](E, G, I, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              M = be;
            }
            M && !(M instanceof Error) && (xt(Z), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", w, G, typeof M), xt(null)), M instanceof Error && !(M.message in kt) && (kt[M.message] = !0, xt(Z), P("Failed %s type: %s", w, M.message), xt(null));
          }
      }
    }
    var Pt = Array.isArray;
    function Yt(f) {
      return Pt(f);
    }
    function qr(f) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, w = E && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return w;
      }
    }
    function $r(f) {
      try {
        return Jt(f), !1;
      } catch {
        return !0;
      }
    }
    function Jt(f) {
      return "" + f;
    }
    function dr(f) {
      if ($r(f))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qr(f)), Jt(f);
    }
    var mt = q.ReactCurrentOwner, In = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Br, Mr, Dt;
    Dt = {};
    function Ln(f) {
      if (pt.call(f, "ref")) {
        var E = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function qn(f) {
      if (pt.call(f, "key")) {
        var E = Object.getOwnPropertyDescriptor(f, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function $n(f, E) {
      if (typeof f.ref == "string" && mt.current && E && mt.current.stateNode !== E) {
        var w = pe(mt.current.type);
        Dt[w] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', pe(mt.current.type), f.ref), Dt[w] = !0);
      }
    }
    function yt(f, E) {
      {
        var w = function() {
          Br || (Br = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        w.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function jr(f, E) {
      {
        var w = function() {
          Mr || (Mr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        w.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Bn = function(f, E, w, I, Z, ie, G) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: f,
        key: E,
        ref: w,
        props: G,
        // Record the component responsible for creating this element.
        _owner: ie
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
        value: I
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Mn(f, E, w, I, Z) {
      {
        var ie, G = {}, M = null, Fe = null;
        w !== void 0 && (dr(w), M = "" + w), qn(E) && (dr(E.key), M = "" + E.key), Ln(E) && (Fe = E.ref, $n(E, Z));
        for (ie in E)
          pt.call(E, ie) && !In.hasOwnProperty(ie) && (G[ie] = E[ie]);
        if (f && f.defaultProps) {
          var be = f.defaultProps;
          for (ie in be)
            G[ie] === void 0 && (G[ie] = be[ie]);
        }
        if (M || Fe) {
          var Se = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          M && yt(G, Se), Fe && jr(G, Se);
        }
        return Bn(f, M, Fe, Z, I, mt.current, G);
      }
    }
    var Qt = q.ReactCurrentOwner, Ur = q.ReactDebugCurrentFrame;
    function ut(f) {
      if (f) {
        var E = f._owner, w = Kt(f.type, f._source, E ? E.type : null);
        Ur.setExtraStackFrame(w);
      } else
        Ur.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function gt(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function It() {
      {
        if (Qt.current) {
          var f = pe(Qt.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function jn(f) {
      return "";
    }
    var Vr = {};
    function Un(f) {
      {
        var E = It();
        if (!E) {
          var w = typeof f == "string" ? f : f.displayName || f.name;
          w && (E = `

Check the top-level render call using <` + w + ">.");
        }
        return E;
      }
    }
    function Gr(f, E) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var w = Un(E);
        if (Vr[w])
          return;
        Vr[w] = !0;
        var I = "";
        f && f._owner && f._owner !== Qt.current && (I = " It was passed a child from " + pe(f._owner.type) + "."), ut(f), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, I), ut(null);
      }
    }
    function zr(f, E) {
      {
        if (typeof f != "object")
          return;
        if (Yt(f))
          for (var w = 0; w < f.length; w++) {
            var I = f[w];
            gt(I) && Gr(I, E);
          }
        else if (gt(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var Z = T(f);
          if (typeof Z == "function" && Z !== f.entries)
            for (var ie = Z.call(f), G; !(G = ie.next()).done; )
              gt(G.value) && Gr(G.value, E);
        }
      }
    }
    function Lt(f) {
      {
        var E = f.type;
        if (E == null || typeof E == "string")
          return;
        var w;
        if (typeof E == "function")
          w = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === m))
          w = E.propTypes;
        else
          return;
        if (w) {
          var I = pe(E);
          et(w, f.props, "prop", I, f);
        } else if (E.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var Z = pe(E);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(f) {
      {
        for (var E = Object.keys(f.props), w = 0; w < E.length; w++) {
          var I = E[w];
          if (I !== "children" && I !== "key") {
            ut(f), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), ut(null);
            break;
          }
        }
        f.ref !== null && (ut(f), P("Invalid attribute `ref` supplied to `React.Fragment`."), ut(null));
      }
    }
    var mr = {};
    function Hr(f, E, w, I, Z, ie) {
      {
        var G = ge(f);
        if (!G) {
          var M = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fe = jn();
          Fe ? M += Fe : M += It();
          var be;
          f === null ? be = "null" : Yt(f) ? be = "array" : f !== void 0 && f.$$typeof === e ? (be = "<" + (pe(f.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : be = typeof f, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, M);
        }
        var Se = Mn(f, E, w, Z, ie);
        if (Se == null)
          return Se;
        if (G) {
          var $e = E.children;
          if ($e !== void 0)
            if (I)
              if (Yt($e)) {
                for (var bt = 0; bt < $e.length; bt++)
                  zr($e[bt], f);
                Object.freeze && Object.freeze($e);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zr($e, f);
        }
        if (pt.call(E, "key")) {
          var lt = pe(f), Le = Object.keys(E).filter(function(Wn) {
            return Wn !== "key";
          }), yr = Le.length > 0 ? "{key: someKey, " + Le.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mr[lt + yr]) {
            var Hn = Le.length > 0 ? "{" + Le.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, yr, lt, Hn, lt), mr[lt + yr] = !0;
          }
        }
        return f === n ? pr(Se) : Lt(Se), Se;
      }
    }
    function Vn(f, E, w) {
      return Hr(f, E, w, !0);
    }
    function Gn(f, E, w) {
      return Hr(f, E, w, !1);
    }
    var zn = Gn, Wr = Vn;
    vr.Fragment = n, vr.jsx = zn, vr.jsxs = Wr;
  }()), vr;
}
process.env.NODE_ENV === "production" ? fu() : hu();
var du = ke.createContext(
  void 0
), Sa = (r) => {
  const e = ke.useContext(du);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Ta = ke.createContext(!1), pu = () => ke.useContext(Ta);
Ta.Provider;
function mu() {
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
var yu = ke.createContext(mu()), gu = () => ke.useContext(yu);
function wa(r, e) {
  return typeof r == "function" ? r(...e) : !!r;
}
function ws() {
}
var bu = (r, e) => {
  (r.suspense || r.throwOnError || r.experimental_prefetchInRender) && (e.isReset() || (r.retryOnMount = !1));
}, vu = (r) => {
  ke.useEffect(() => {
    r.clearReset();
  }, [r]);
}, _u = ({
  result: r,
  errorResetBoundary: e,
  throwOnError: t,
  query: n,
  suspense: s
}) => r.isError && !e.isReset() && !r.isFetching && n && (s && r.data === void 0 || wa(t, [r.error, n])), Eu = (r) => {
  const e = r.staleTime;
  r.suspense && (r.staleTime = typeof e == "function" ? (...t) => Math.max(e(...t), 1e3) : Math.max(e ?? 1e3, 1e3), typeof r.gcTime == "number" && (r.gcTime = Math.max(r.gcTime, 1e3)));
}, Su = (r, e) => r.isLoading && r.isFetching && !e, Tu = (r, e) => (r == null ? void 0 : r.suspense) && e.isPending, Gi = (r, e, t) => e.fetchOptimistic(r).catch(() => {
  t.clearReset();
});
function wu(r, e, t) {
  var m, O, A, C, k;
  if (process.env.NODE_ENV !== "production" && (typeof r != "object" || Array.isArray(r)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Sa(), s = pu(), i = gu(), o = n.defaultQueryOptions(r);
  (O = (m = n.getDefaultOptions().queries) == null ? void 0 : m._experimental_beforeQuery) == null || O.call(
    m,
    o
  ), process.env.NODE_ENV !== "production" && (o.queryFn || console.error(
    `[${o.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), o._optimisticResults = s ? "isRestoring" : "optimistic", Eu(o), bu(o, i), vu(i);
  const u = !n.getQueryCache().get(o.queryHash), [l] = ke.useState(
    () => new e(
      n,
      o
    )
  ), h = l.getOptimisticResult(o), d = !s && r.subscribed !== !1;
  if (ke.useSyncExternalStore(
    ke.useCallback(
      (T) => {
        const q = d ? l.subscribe(Sn.batchCalls(T)) : ws;
        return l.updateResult(), q;
      },
      [l, d]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), ke.useEffect(() => {
    l.setOptions(o);
  }, [o, l]), Tu(o, h))
    throw Gi(o, l, i);
  if (_u({
    result: h,
    errorResetBoundary: i,
    throwOnError: o.throwOnError,
    query: n.getQueryCache().get(o.queryHash),
    suspense: o.suspense
  }))
    throw h.error;
  if ((C = (A = n.getDefaultOptions().queries) == null ? void 0 : A._experimental_afterQuery) == null || C.call(
    A,
    o,
    h
  ), o.experimental_prefetchInRender && !Ar && Su(h, s)) {
    const T = u ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Gi(o, l, i)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (k = n.getQueryCache().get(o.queryHash)) == null ? void 0 : k.promise
    );
    T == null || T.catch(ws).finally(() => {
      l.updateResult();
    });
  }
  return o.notifyOnChangeProps ? h : l.trackResult(h);
}
function Q(r, e) {
  return wu(r, su);
}
function Gs(r, e) {
  const t = Sa(), [n] = ke.useState(
    () => new ou(
      t,
      r
    )
  );
  ke.useEffect(() => {
    n.setOptions(r);
  }, [n, r]);
  const s = ke.useSyncExternalStore(
    ke.useCallback(
      (o) => n.subscribe(Sn.batchCalls(o)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), i = ke.useCallback(
    (o, u) => {
      n.mutate(o, u).catch(ws);
    },
    [n]
  );
  if (s.error && wa(n.options.throwOnError, [s.error]))
    throw s.error;
  return { ...s, mutate: i, mutateAsync: s.mutate };
}
const J = {
  //Notifications
  GET_ALL_NOTIFICATIONS: "/notification/getallNotification",
  GET_NOTIFICATIONS_BY_USER: "/notification/getbyuserid",
  //Approval
  UPDATE_DOCUMENT_STATUS_THREE_LEVEL_APPROVAL: (r) => `/documents/update/${r}`,
  UPDATE_DOCUMENT_STATUS_TWO_LEVEL_APPROVAL: (r) => `/documents/updatesecondlevel/${r}`,
  UPDATE_DOCUMENT_STATUS_ONE_LEVEL_APPROVAL: (r) => `/documents/updatefirstlevel/${r}`,
  //Stock
  GET_ALL_STOCK: (r) => {
    if (r) {
      let e = `/inventoryStock/?page=${r.page}&limit=${r.limit}`;
      return r.sort && r.sort.length > 0 && (e = e + `&sort=${r.sort}`), e;
    } else
      return "/inventoryStock/";
  },
  GET_STOCK_GLOBAL: (r) => {
    if (r) {
      let e = `/inventoryStock/stock/location-wise/?page=${r.page}&limit=${r.limit}`;
      return r.sort && r.sort.length > 0 && (e = e + `&sort=${r.sort}`), e;
    } else
      return "/inventoryStock/stock/location-wise/";
  },
  GET_STOCK_BY_LOCATION: (r, e, t) => {
    if (t) {
      let n = `/inventoryStock/stock/product-wise?locationName=${r}&companyName=${e}?page=${t.page}&limit=${t.limit}`;
      return t.sort && t.sort.length > 0 && (n = n + `&sort=${t.sort}`), n;
    } else
      return `/inventoryStock/stock/product-wise?locationName=${r}&companyId=${e}`;
  },
  GET_STOCK_BY_PRODUCT: (r, e, t, n) => {
    if (n) {
      let s = `/inventoryStock/stock/varient-wise?productName=${r}&locationName=${e}&companyName=${t}?page=${n.page}&limit=${n.limit}`;
      return n.sort && n.sort.length > 0 && (s = s + `&sort=${n.sort}`), s;
    } else
      return `/inventoryStock/stock/varient-wise?productName=${r}&locationName=${e}&companyName=${t}`;
  },
  GET_STOCK_BY_ID: "/inventoryStock",
  GET_EMPLOYEE_PARTIAL_DATA: "/employee/all/partial",
  GET_COMPANY_NAMES: "/company/partial/details",
  GET_ALL_COMPANIES_DATA: "/company/",
  GET_DEPARTMENT_BY_ID: "/departments",
  GET_PRODUCTS_PARTIAL: "/products/partial/data",
  GET_PRODUCTS_PARTIAL_BY_ID: "/products/partial",
  SEARCH_PRODUCT: "/products/productname/?search=",
  SEARCH_PRODUCT_ALL_DATA: "/products/serachData/product?search=",
  GET_PACKAGING_MATERIAL_PARTIAL: "/packingMaterial/all/partial",
  GET_VENDORS_PARTIAL: "/vendors/filterVendor/all",
  GET_VENDORS_PARTIAL_BY_ID: "/vendors/filterData",
  SEARCH_VENDOR: "/vendors/filterVendor/withfilter?search=",
  GET_FARMERS_PARTIAL: "/farmers/filterFarmer/all",
  GET_FARMERS_PARTIAL_BY_ID: "/farmers/filterFarmer",
  SEARCH_FARMER: "/farmers/filterFarmer/search/withfilter?search=",
  GET_CUSTOMERS_PARTIAL: "/customers/partial/all",
  GET_CUSTOMER_NAMESL: "/customers/names/all",
  GET_UOM_PARTIAL: "/uoms/getAll/partialdata",
  GET_BRANCHES_PARTIAL: "/location-branches/filterData/filter/all",
  GET_OFFICES_PARTIAL: "/location-offices/filterData/filter/all",
  GET_ALL_RFPA_NO: "/rfpa/rfpanumbers/getAllRfpaNo",
  GET_ALL_DEAL_SLIP_NO: "/dealSlip/dealslipno/getAlldealslipNo",
  GET_ALL_GRN_NO: "/grns/grnnumbers/getAllgrnNo",
  GET_ALL_DELIVERY_CHALLAN_NO: "/deliveryChallan/challanNos/getAllChallanNo",
  GET_ALL_LEVELS: "/levels/"
};
function Ra(r, e) {
  return function() {
    return r.apply(e, arguments);
  };
}
const { toString: Ru } = Object.prototype, { getPrototypeOf: zs } = Object, Tn = /* @__PURE__ */ ((r) => (e) => {
  const t = Ru.call(e);
  return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Xe = (r) => (r = r.toLowerCase(), (e) => Tn(e) === r), wn = (r) => (e) => typeof e === r, { isArray: cr } = Array, Or = wn("undefined");
function Cu(r) {
  return r !== null && !Or(r) && r.constructor !== null && !Or(r.constructor) && He(r.constructor.isBuffer) && r.constructor.isBuffer(r);
}
const Ca = Xe("ArrayBuffer");
function Au(r) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && Ca(r.buffer), e;
}
const Ou = wn("string"), He = wn("function"), Aa = wn("number"), Rn = (r) => r !== null && typeof r == "object", Nu = (r) => r === !0 || r === !1, on = (r) => {
  if (Tn(r) !== "object")
    return !1;
  const e = zs(r);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
}, ku = Xe("Date"), xu = Xe("File"), Pu = Xe("Blob"), Du = Xe("FileList"), Fu = (r) => Rn(r) && He(r.pipe), Iu = (r) => {
  let e;
  return r && (typeof FormData == "function" && r instanceof FormData || He(r.append) && ((e = Tn(r)) === "formdata" || // detect form-data instance
  e === "object" && He(r.toString) && r.toString() === "[object FormData]"));
}, Lu = Xe("URLSearchParams"), [qu, $u, Bu, Mu] = ["ReadableStream", "Request", "Response", "Headers"].map(Xe), ju = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xr(r, e, { allOwnKeys: t = !1 } = {}) {
  if (r === null || typeof r > "u")
    return;
  let n, s;
  if (typeof r != "object" && (r = [r]), cr(r))
    for (n = 0, s = r.length; n < s; n++)
      e.call(null, r[n], n, r);
  else {
    const i = t ? Object.getOwnPropertyNames(r) : Object.keys(r), o = i.length;
    let u;
    for (n = 0; n < o; n++)
      u = i[n], e.call(null, r[u], u, r);
  }
}
function Oa(r, e) {
  e = e.toLowerCase();
  const t = Object.keys(r);
  let n = t.length, s;
  for (; n-- > 0; )
    if (s = t[n], e === s.toLowerCase())
      return s;
  return null;
}
const qt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Na = (r) => !Or(r) && r !== qt;
function Rs() {
  const { caseless: r } = Na(this) && this || {}, e = {}, t = (n, s) => {
    const i = r && Oa(e, s) || s;
    on(e[i]) && on(n) ? e[i] = Rs(e[i], n) : on(n) ? e[i] = Rs({}, n) : cr(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && xr(arguments[n], t);
  return e;
}
const Uu = (r, e, t, { allOwnKeys: n } = {}) => (xr(e, (s, i) => {
  t && He(s) ? r[i] = Ra(s, t) : r[i] = s;
}, { allOwnKeys: n }), r), Vu = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), Gu = (r, e, t, n) => {
  r.prototype = Object.create(e.prototype, n), r.prototype.constructor = r, Object.defineProperty(r, "super", {
    value: e.prototype
  }), t && Object.assign(r.prototype, t);
}, zu = (r, e, t, n) => {
  let s, i, o;
  const u = {};
  if (e = e || {}, r == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(r), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, r, e)) && !u[o] && (e[o] = r[o], u[o] = !0);
    r = t !== !1 && zs(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}, Hu = (r, e, t) => {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  const n = r.indexOf(e, t);
  return n !== -1 && n === t;
}, Wu = (r) => {
  if (!r) return null;
  if (cr(r)) return r;
  let e = r.length;
  if (!Aa(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = r[e];
  return t;
}, Ku = /* @__PURE__ */ ((r) => (e) => r && e instanceof r)(typeof Uint8Array < "u" && zs(Uint8Array)), Yu = (r, e) => {
  const n = (r && r[Symbol.iterator]).call(r);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    e.call(r, i[0], i[1]);
  }
}, Ju = (r, e) => {
  let t;
  const n = [];
  for (; (t = r.exec(e)) !== null; )
    n.push(t);
  return n;
}, Qu = Xe("HTMLFormElement"), Xu = (r) => r.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, s) {
    return n.toUpperCase() + s;
  }
), zi = (({ hasOwnProperty: r }) => (e, t) => r.call(e, t))(Object.prototype), Zu = Xe("RegExp"), ka = (r, e) => {
  const t = Object.getOwnPropertyDescriptors(r), n = {};
  xr(t, (s, i) => {
    let o;
    (o = e(s, i, r)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(r, n);
}, el = (r) => {
  ka(r, (e, t) => {
    if (He(r) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = r[t];
    if (He(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, tl = (r, e) => {
  const t = {}, n = (s) => {
    s.forEach((i) => {
      t[i] = !0;
    });
  };
  return cr(r) ? n(r) : n(String(r).split(e)), t;
}, rl = () => {
}, nl = (r, e) => r != null && Number.isFinite(r = +r) ? r : e, ns = "abcdefghijklmnopqrstuvwxyz", Hi = "0123456789", xa = {
  DIGIT: Hi,
  ALPHA: ns,
  ALPHA_DIGIT: ns + ns.toUpperCase() + Hi
}, sl = (r = 16, e = xa.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = e;
  for (; r--; )
    t += e[Math.random() * n | 0];
  return t;
};
function il(r) {
  return !!(r && He(r.append) && r[Symbol.toStringTag] === "FormData" && r[Symbol.iterator]);
}
const al = (r) => {
  const e = new Array(10), t = (n, s) => {
    if (Rn(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const i = cr(n) ? [] : {};
        return xr(n, (o, u) => {
          const l = t(o, s + 1);
          !Or(l) && (i[u] = l);
        }), e[s] = void 0, i;
      }
    }
    return n;
  };
  return t(r, 0);
}, ol = Xe("AsyncFunction"), ul = (r) => r && (Rn(r) || He(r)) && He(r.then) && He(r.catch), Pa = ((r, e) => r ? setImmediate : e ? ((t, n) => (qt.addEventListener("message", ({ source: s, data: i }) => {
  s === qt && i === t && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), qt.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  He(qt.postMessage)
), ll = typeof queueMicrotask < "u" ? queueMicrotask.bind(qt) : typeof process < "u" && process.nextTick || Pa, b = {
  isArray: cr,
  isArrayBuffer: Ca,
  isBuffer: Cu,
  isFormData: Iu,
  isArrayBufferView: Au,
  isString: Ou,
  isNumber: Aa,
  isBoolean: Nu,
  isObject: Rn,
  isPlainObject: on,
  isReadableStream: qu,
  isRequest: $u,
  isResponse: Bu,
  isHeaders: Mu,
  isUndefined: Or,
  isDate: ku,
  isFile: xu,
  isBlob: Pu,
  isRegExp: Zu,
  isFunction: He,
  isStream: Fu,
  isURLSearchParams: Lu,
  isTypedArray: Ku,
  isFileList: Du,
  forEach: xr,
  merge: Rs,
  extend: Uu,
  trim: ju,
  stripBOM: Vu,
  inherits: Gu,
  toFlatObject: zu,
  kindOf: Tn,
  kindOfTest: Xe,
  endsWith: Hu,
  toArray: Wu,
  forEachEntry: Yu,
  matchAll: Ju,
  isHTMLForm: Qu,
  hasOwnProperty: zi,
  hasOwnProp: zi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ka,
  freezeMethods: el,
  toObjectSet: tl,
  toCamelCase: Xu,
  noop: rl,
  toFiniteNumber: nl,
  findKey: Oa,
  global: qt,
  isContextDefined: Na,
  ALPHABET: xa,
  generateString: sl,
  isSpecCompliantForm: il,
  toJSONObject: al,
  isAsyncFn: ol,
  isThenable: ul,
  setImmediate: Pa,
  asap: ll
};
function B(r, e, t, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
b.inherits(B, Error, {
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
const Da = B.prototype, Fa = {};
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
  Fa[r] = { value: r };
});
Object.defineProperties(B, Fa);
Object.defineProperty(Da, "isAxiosError", { value: !0 });
B.from = (r, e, t, n, s, i) => {
  const o = Object.create(Da);
  return b.toFlatObject(r, o, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError"), B.call(o, r.message, e, t, n, s), o.cause = r, o.name = r.name, i && Object.assign(o, i), o;
};
const cl = null;
function Cs(r) {
  return b.isPlainObject(r) || b.isArray(r);
}
function Ia(r) {
  return b.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function Wi(r, e, t) {
  return r ? r.concat(e).map(function(s, i) {
    return s = Ia(s), !t && i ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function fl(r) {
  return b.isArray(r) && !r.some(Cs);
}
const hl = b.toFlatObject(b, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Cn(r, e, t) {
  if (!b.isObject(r))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = b.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(k, T) {
    return !b.isUndefined(T[k]);
  });
  const n = t.metaTokens, s = t.visitor || d, i = t.dots, o = t.indexes, l = (t.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(e);
  if (!b.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(C) {
    if (C === null) return "";
    if (b.isDate(C))
      return C.toISOString();
    if (!l && b.isBlob(C))
      throw new B("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(C) || b.isTypedArray(C) ? l && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function d(C, k, T) {
    let q = C;
    if (C && !T && typeof C == "object") {
      if (b.endsWith(k, "{}"))
        k = n ? k : k.slice(0, -2), C = JSON.stringify(C);
      else if (b.isArray(C) && fl(C) || (b.isFileList(C) || b.endsWith(k, "[]")) && (q = b.toArray(C)))
        return k = Ia(k), q.forEach(function(K, ne) {
          !(b.isUndefined(K) || K === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Wi([k], ne, i) : o === null ? k : k + "[]",
            h(K)
          );
        }), !1;
    }
    return Cs(C) ? !0 : (e.append(Wi(T, k, i), h(C)), !1);
  }
  const m = [], O = Object.assign(hl, {
    defaultVisitor: d,
    convertValue: h,
    isVisitable: Cs
  });
  function A(C, k) {
    if (!b.isUndefined(C)) {
      if (m.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + k.join("."));
      m.push(C), b.forEach(C, function(q, P) {
        (!(b.isUndefined(q) || q === null) && s.call(
          e,
          q,
          b.isString(P) ? P.trim() : P,
          k,
          O
        )) === !0 && A(q, k ? k.concat(P) : [P]);
      }), m.pop();
    }
  }
  if (!b.isObject(r))
    throw new TypeError("data must be an object");
  return A(r), e;
}
function Ki(r) {
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
function Hs(r, e) {
  this._pairs = [], r && Cn(r, this, e);
}
const La = Hs.prototype;
La.append = function(e, t) {
  this._pairs.push([e, t]);
};
La.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, Ki);
  } : Ki;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function dl(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function qa(r, e, t) {
  if (!e)
    return r;
  const n = t && t.encode || dl, s = t && t.serialize;
  let i;
  if (s ? i = s(e, t) : i = b.isURLSearchParams(e) ? e.toString() : new Hs(e, t).toString(n), i) {
    const o = r.indexOf("#");
    o !== -1 && (r = r.slice(0, o)), r += (r.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return r;
}
class Yi {
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
const $a = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, pl = typeof URLSearchParams < "u" ? URLSearchParams : Hs, ml = typeof FormData < "u" ? FormData : null, yl = typeof Blob < "u" ? Blob : null, gl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: pl,
    FormData: ml,
    Blob: yl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ws = typeof window < "u" && typeof document < "u", As = typeof navigator == "object" && navigator || void 0, bl = Ws && (!As || ["ReactNative", "NativeScript", "NS"].indexOf(As.product) < 0), vl = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", _l = Ws && window.location.href || "http://localhost", El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ws,
  hasStandardBrowserEnv: bl,
  hasStandardBrowserWebWorkerEnv: vl,
  navigator: As,
  origin: _l
}, Symbol.toStringTag, { value: "Module" })), Ve = {
  ...El,
  ...gl
};
function Sl(r, e) {
  return Cn(r, new Ve.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, s, i) {
      return Ve.isNode && b.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Tl(r) {
  return b.matchAll(/\w+|\[(\w*)]/g, r).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function wl(r) {
  const e = {}, t = Object.keys(r);
  let n;
  const s = t.length;
  let i;
  for (n = 0; n < s; n++)
    i = t[n], e[i] = r[i];
  return e;
}
function Ba(r) {
  function e(t, n, s, i) {
    let o = t[i++];
    if (o === "__proto__") return !0;
    const u = Number.isFinite(+o), l = i >= t.length;
    return o = !o && b.isArray(s) ? s.length : o, l ? (b.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !u) : ((!s[o] || !b.isObject(s[o])) && (s[o] = []), e(t, n, s[o], i) && b.isArray(s[o]) && (s[o] = wl(s[o])), !u);
  }
  if (b.isFormData(r) && b.isFunction(r.entries)) {
    const t = {};
    return b.forEachEntry(r, (n, s) => {
      e(Tl(n), s, t, 0);
    }), t;
  }
  return null;
}
function Rl(r, e, t) {
  if (b.isString(r))
    try {
      return (e || JSON.parse)(r), b.trim(r);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(r);
}
const Pr = {
  transitional: $a,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", s = n.indexOf("application/json") > -1, i = b.isObject(e);
    if (i && b.isHTMLForm(e) && (e = new FormData(e)), b.isFormData(e))
      return s ? JSON.stringify(Ba(e)) : e;
    if (b.isArrayBuffer(e) || b.isBuffer(e) || b.isStream(e) || b.isFile(e) || b.isBlob(e) || b.isReadableStream(e))
      return e;
    if (b.isArrayBufferView(e))
      return e.buffer;
    if (b.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let u;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Sl(e, this.formSerializer).toString();
      if ((u = b.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Cn(
          u ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || s ? (t.setContentType("application/json", !1), Rl(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || Pr.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (b.isResponse(e) || b.isReadableStream(e))
      return e;
    if (e && b.isString(e) && (n && !this.responseType || s)) {
      const o = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? B.from(u, B.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
    FormData: Ve.classes.FormData,
    Blob: Ve.classes.Blob
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
  Pr.headers[r] = {};
});
const Cl = b.toObjectSet([
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
]), Al = (r) => {
  const e = {};
  let t, n, s;
  return r && r.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!t || e[t] && Cl[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, Ji = Symbol("internals");
function _r(r) {
  return r && String(r).trim().toLowerCase();
}
function un(r) {
  return r === !1 || r == null ? r : b.isArray(r) ? r.map(un) : String(r);
}
function Ol(r) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(r); )
    e[n[1]] = n[2];
  return e;
}
const Nl = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function ss(r, e, t, n, s) {
  if (b.isFunction(n))
    return n.call(this, e, t);
  if (s && (e = t), !!b.isString(e)) {
    if (b.isString(n))
      return e.indexOf(n) !== -1;
    if (b.isRegExp(n))
      return n.test(e);
  }
}
function kl(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function xl(r, e) {
  const t = b.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(r, n + t, {
      value: function(s, i, o) {
        return this[n].call(this, e, s, i, o);
      },
      configurable: !0
    });
  });
}
class Ge {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const s = this;
    function i(u, l, h) {
      const d = _r(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const m = b.findKey(s, d);
      (!m || s[m] === void 0 || h === !0 || h === void 0 && s[m] !== !1) && (s[m || l] = un(u));
    }
    const o = (u, l) => b.forEach(u, (h, d) => i(h, d, l));
    if (b.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (b.isString(e) && (e = e.trim()) && !Nl(e))
      o(Al(e), t);
    else if (b.isHeaders(e))
      for (const [u, l] of e.entries())
        i(l, u, n);
    else
      e != null && i(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = _r(e), e) {
      const n = b.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!t)
          return s;
        if (t === !0)
          return Ol(s);
        if (b.isFunction(t))
          return t.call(this, s, n);
        if (b.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = _r(e), e) {
      const n = b.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || ss(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = _r(o), o) {
        const u = b.findKey(n, o);
        u && (!t || ss(n, n[u], u, t)) && (delete n[u], s = !0);
      }
    }
    return b.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, s = !1;
    for (; n--; ) {
      const i = t[n];
      (!e || ss(this, this[i], i, e, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, n = {};
    return b.forEach(this, (s, i) => {
      const o = b.findKey(n, i);
      if (o) {
        t[o] = un(s), delete t[i];
        return;
      }
      const u = e ? kl(i) : String(i).trim();
      u !== i && delete t[i], t[u] = un(s), n[u] = !0;
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
    const n = (this[Ji] = this[Ji] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const u = _r(o);
      n[u] || (xl(s, o), n[u] = !0);
    }
    return b.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
Ge.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.reduceDescriptors(Ge.prototype, ({ value: r }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => r,
    set(n) {
      this[t] = n;
    }
  };
});
b.freezeMethods(Ge);
function is(r, e) {
  const t = this || Pr, n = e || t, s = Ge.from(n.headers);
  let i = n.data;
  return b.forEach(r, function(u) {
    i = u.call(t, i, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), i;
}
function Ma(r) {
  return !!(r && r.__CANCEL__);
}
function fr(r, e, t) {
  B.call(this, r ?? "canceled", B.ERR_CANCELED, e, t), this.name = "CanceledError";
}
b.inherits(fr, B, {
  __CANCEL__: !0
});
function ja(r, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? r(t) : e(new B(
    "Request failed with status code " + t.status,
    [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function Pl(r) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return e && e[1] || "";
}
function Dl(r, e) {
  r = r || 10;
  const t = new Array(r), n = new Array(r);
  let s = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const h = Date.now(), d = n[i];
    o || (o = h), t[s] = l, n[s] = h;
    let m = i, O = 0;
    for (; m !== s; )
      O += t[m++], m = m % r;
    if (s = (s + 1) % r, s === i && (i = (i + 1) % r), h - o < e)
      return;
    const A = d && h - d;
    return A ? Math.round(O * 1e3 / A) : void 0;
  };
}
function Fl(r, e) {
  let t = 0, n = 1e3 / e, s, i;
  const o = (h, d = Date.now()) => {
    t = d, s = null, i && (clearTimeout(i), i = null), r.apply(null, h);
  };
  return [(...h) => {
    const d = Date.now(), m = d - t;
    m >= n ? o(h, d) : (s = h, i || (i = setTimeout(() => {
      i = null, o(s);
    }, n - m)));
  }, () => s && o(s)];
}
const gn = (r, e, t = 3) => {
  let n = 0;
  const s = Dl(50, 250);
  return Fl((i) => {
    const o = i.loaded, u = i.lengthComputable ? i.total : void 0, l = o - n, h = s(l), d = o <= u;
    n = o;
    const m = {
      loaded: o,
      total: u,
      progress: u ? o / u : void 0,
      bytes: l,
      rate: h || void 0,
      estimated: h && u && d ? (u - o) / h : void 0,
      event: i,
      lengthComputable: u != null,
      [e ? "download" : "upload"]: !0
    };
    r(m);
  }, t);
}, Qi = (r, e) => {
  const t = r != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: r,
    loaded: n
  }), e[1]];
}, Xi = (r) => (...e) => b.asap(() => r(...e)), Il = Ve.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = Ve.navigator && /(msie|trident)/i.test(Ve.navigator.userAgent), t = document.createElement("a");
    let n;
    function s(i) {
      let o = i;
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
), Ll = Ve.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(r, e, t, n, s, i) {
      const o = [r + "=" + encodeURIComponent(e)];
      b.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), b.isString(n) && o.push("path=" + n), b.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function ql(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function $l(r, e) {
  return e ? r.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : r;
}
function Ua(r, e) {
  return r && !ql(e) ? $l(r, e) : e;
}
const Zi = (r) => r instanceof Ge ? { ...r } : r;
function Gt(r, e) {
  e = e || {};
  const t = {};
  function n(h, d, m) {
    return b.isPlainObject(h) && b.isPlainObject(d) ? b.merge.call({ caseless: m }, h, d) : b.isPlainObject(d) ? b.merge({}, d) : b.isArray(d) ? d.slice() : d;
  }
  function s(h, d, m) {
    if (b.isUndefined(d)) {
      if (!b.isUndefined(h))
        return n(void 0, h, m);
    } else return n(h, d, m);
  }
  function i(h, d) {
    if (!b.isUndefined(d))
      return n(void 0, d);
  }
  function o(h, d) {
    if (b.isUndefined(d)) {
      if (!b.isUndefined(h))
        return n(void 0, h);
    } else return n(void 0, d);
  }
  function u(h, d, m) {
    if (m in e)
      return n(h, d);
    if (m in r)
      return n(void 0, h);
  }
  const l = {
    url: i,
    method: i,
    data: i,
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
    headers: (h, d) => s(Zi(h), Zi(d), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, r, e)), function(d) {
    const m = l[d] || s, O = m(r[d], e[d], d);
    b.isUndefined(O) && m !== u || (t[d] = O);
  }), t;
}
const Va = (r) => {
  const e = Gt({}, r);
  let { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: u } = e;
  e.headers = o = Ge.from(o), e.url = qa(Ua(e.baseURL, e.url), r.params, r.paramsSerializer), u && o.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let l;
  if (b.isFormData(t)) {
    if (Ve.hasStandardBrowserEnv || Ve.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((l = o.getContentType()) !== !1) {
      const [h, ...d] = l ? l.split(";").map((m) => m.trim()).filter(Boolean) : [];
      o.setContentType([h || "multipart/form-data", ...d].join("; "));
    }
  }
  if (Ve.hasStandardBrowserEnv && (n && b.isFunction(n) && (n = n(e)), n || n !== !1 && Il(e.url))) {
    const h = s && i && Ll.read(i);
    h && o.set(s, h);
  }
  return e;
}, Bl = typeof XMLHttpRequest < "u", Ml = Bl && function(r) {
  return new Promise(function(t, n) {
    const s = Va(r);
    let i = s.data;
    const o = Ge.from(s.headers).normalize();
    let { responseType: u, onUploadProgress: l, onDownloadProgress: h } = s, d, m, O, A, C;
    function k() {
      A && A(), C && C(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let T = new XMLHttpRequest();
    T.open(s.method.toUpperCase(), s.url, !0), T.timeout = s.timeout;
    function q() {
      if (!T)
        return;
      const K = Ge.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), $ = {
        data: !u || u === "text" || u === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: K,
        config: r,
        request: T
      };
      ja(function(_e) {
        t(_e), k();
      }, function(_e) {
        n(_e), k();
      }, $), T = null;
    }
    "onloadend" in T ? T.onloadend = q : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(q);
    }, T.onabort = function() {
      T && (n(new B("Request aborted", B.ECONNABORTED, r, T)), T = null);
    }, T.onerror = function() {
      n(new B("Network Error", B.ERR_NETWORK, r, T)), T = null;
    }, T.ontimeout = function() {
      let ne = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const $ = s.transitional || $a;
      s.timeoutErrorMessage && (ne = s.timeoutErrorMessage), n(new B(
        ne,
        $.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,
        r,
        T
      )), T = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in T && b.forEach(o.toJSON(), function(ne, $) {
      T.setRequestHeader($, ne);
    }), b.isUndefined(s.withCredentials) || (T.withCredentials = !!s.withCredentials), u && u !== "json" && (T.responseType = s.responseType), h && ([O, C] = gn(h, !0), T.addEventListener("progress", O)), l && T.upload && ([m, A] = gn(l), T.upload.addEventListener("progress", m), T.upload.addEventListener("loadend", A)), (s.cancelToken || s.signal) && (d = (K) => {
      T && (n(!K || K.type ? new fr(null, r, T) : K), T.abort(), T = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const P = Pl(s.url);
    if (P && Ve.protocols.indexOf(P) === -1) {
      n(new B("Unsupported protocol " + P + ":", B.ERR_BAD_REQUEST, r));
      return;
    }
    T.send(i || null);
  });
}, jl = (r, e) => {
  const { length: t } = r = r ? r.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), s;
    const i = function(h) {
      if (!s) {
        s = !0, u();
        const d = h instanceof Error ? h : this.reason;
        n.abort(d instanceof B ? d : new fr(d instanceof Error ? d.message : d));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new B(`timeout ${e} of ms exceeded`, B.ETIMEDOUT));
    }, e);
    const u = () => {
      r && (o && clearTimeout(o), o = null, r.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(i) : h.removeEventListener("abort", i);
      }), r = null);
    };
    r.forEach((h) => h.addEventListener("abort", i));
    const { signal: l } = n;
    return l.unsubscribe = () => b.asap(u), l;
  }
}, Ul = function* (r, e) {
  let t = r.byteLength;
  if (t < e) {
    yield r;
    return;
  }
  let n = 0, s;
  for (; n < t; )
    s = n + e, yield r.slice(n, s), n = s;
}, Vl = async function* (r, e) {
  for await (const t of Gl(r))
    yield* Ul(t, e);
}, Gl = async function* (r) {
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
}, ea = (r, e, t, n) => {
  const s = Vl(r, e);
  let i = 0, o, u = (l) => {
    o || (o = !0, n && n(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: h, value: d } = await s.next();
        if (h) {
          u(), l.close();
          return;
        }
        let m = d.byteLength;
        if (t) {
          let O = i += m;
          t(O);
        }
        l.enqueue(new Uint8Array(d));
      } catch (h) {
        throw u(h), h;
      }
    },
    cancel(l) {
      return u(l), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, An = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ga = An && typeof ReadableStream == "function", zl = An && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (e) => r.encode(e))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), za = (r, ...e) => {
  try {
    return !!r(...e);
  } catch {
    return !1;
  }
}, Hl = Ga && za(() => {
  let r = !1;
  const e = new Request(Ve.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return r = !0, "half";
    }
  }).headers.has("Content-Type");
  return r && !e;
}), ta = 64 * 1024, Os = Ga && za(() => b.isReadableStream(new Response("").body)), bn = {
  stream: Os && ((r) => r.body)
};
An && ((r) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !bn[e] && (bn[e] = b.isFunction(r[e]) ? (t) => t[e]() : (t, n) => {
      throw new B(`Response type '${e}' is not supported`, B.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Wl = async (r) => {
  if (r == null)
    return 0;
  if (b.isBlob(r))
    return r.size;
  if (b.isSpecCompliantForm(r))
    return (await new Request(Ve.origin, {
      method: "POST",
      body: r
    }).arrayBuffer()).byteLength;
  if (b.isArrayBufferView(r) || b.isArrayBuffer(r))
    return r.byteLength;
  if (b.isURLSearchParams(r) && (r = r + ""), b.isString(r))
    return (await zl(r)).byteLength;
}, Kl = async (r, e) => {
  const t = b.toFiniteNumber(r.getContentLength());
  return t ?? Wl(e);
}, Yl = An && (async (r) => {
  let {
    url: e,
    method: t,
    data: n,
    signal: s,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: u,
    onUploadProgress: l,
    responseType: h,
    headers: d,
    withCredentials: m = "same-origin",
    fetchOptions: O
  } = Va(r);
  h = h ? (h + "").toLowerCase() : "text";
  let A = jl([s, i && i.toAbortSignal()], o), C;
  const k = A && A.unsubscribe && (() => {
    A.unsubscribe();
  });
  let T;
  try {
    if (l && Hl && t !== "get" && t !== "head" && (T = await Kl(d, n)) !== 0) {
      let $ = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), ee;
      if (b.isFormData(n) && (ee = $.headers.get("content-type")) && d.setContentType(ee), $.body) {
        const [_e, fe] = Qi(
          T,
          gn(Xi(l))
        );
        n = ea($.body, ta, _e, fe);
      }
    }
    b.isString(m) || (m = m ? "include" : "omit");
    const q = "credentials" in Request.prototype;
    C = new Request(e, {
      ...O,
      signal: A,
      method: t.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: q ? m : void 0
    });
    let P = await fetch(C);
    const K = Os && (h === "stream" || h === "response");
    if (Os && (u || K && k)) {
      const $ = {};
      ["status", "statusText", "headers"].forEach((Ne) => {
        $[Ne] = P[Ne];
      });
      const ee = b.toFiniteNumber(P.headers.get("content-length")), [_e, fe] = u && Qi(
        ee,
        gn(Xi(u), !0)
      ) || [];
      P = new Response(
        ea(P.body, ta, _e, () => {
          fe && fe(), k && k();
        }),
        $
      );
    }
    h = h || "text";
    let ne = await bn[b.findKey(bn, h) || "text"](P, r);
    return !K && k && k(), await new Promise(($, ee) => {
      ja($, ee, {
        data: ne,
        headers: Ge.from(P.headers),
        status: P.status,
        statusText: P.statusText,
        config: r,
        request: C
      });
    });
  } catch (q) {
    throw k && k(), q && q.name === "TypeError" && /fetch/i.test(q.message) ? Object.assign(
      new B("Network Error", B.ERR_NETWORK, r, C),
      {
        cause: q.cause || q
      }
    ) : B.from(q, q && q.code, r, C);
  }
}), Ns = {
  http: cl,
  xhr: Ml,
  fetch: Yl
};
b.forEach(Ns, (r, e) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: e });
    } catch {
    }
    Object.defineProperty(r, "adapterName", { value: e });
  }
});
const ra = (r) => `- ${r}`, Jl = (r) => b.isFunction(r) || r === null || r === !1, Ha = {
  getAdapter: (r) => {
    r = b.isArray(r) ? r : [r];
    const { length: e } = r;
    let t, n;
    const s = {};
    for (let i = 0; i < e; i++) {
      t = r[i];
      let o;
      if (n = t, !Jl(t) && (n = Ns[(o = String(t)).toLowerCase()], n === void 0))
        throw new B(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([u, l]) => `adapter ${u} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? i.length > 1 ? `since :
` + i.map(ra).join(`
`) : " " + ra(i[0]) : "as no adapter specified";
      throw new B(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ns
};
function as(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new fr(null, r);
}
function na(r) {
  return as(r), r.headers = Ge.from(r.headers), r.data = is.call(
    r,
    r.transformRequest
  ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), Ha.getAdapter(r.adapter || Pr.adapter)(r).then(function(n) {
    return as(r), n.data = is.call(
      r,
      r.transformResponse,
      n
    ), n.headers = Ge.from(n.headers), n;
  }, function(n) {
    return Ma(n) || (as(r), n && n.response && (n.response.data = is.call(
      r,
      r.transformResponse,
      n.response
    ), n.response.headers = Ge.from(n.response.headers))), Promise.reject(n);
  });
}
const Wa = "1.7.7", Ks = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, e) => {
  Ks[r] = function(n) {
    return typeof n === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
const sa = {};
Ks.transitional = function(e, t, n) {
  function s(i, o) {
    return "[Axios v" + Wa + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, u) => {
    if (e === !1)
      throw new B(
        s(o, " has been removed" + (t ? " in " + t : "")),
        B.ERR_DEPRECATED
      );
    return t && !sa[o] && (sa[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, o, u) : !0;
  };
};
function Ql(r, e, t) {
  if (typeof r != "object")
    throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(r);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = e[i];
    if (o) {
      const u = r[i], l = u === void 0 || o(u, i, r);
      if (l !== !0)
        throw new B("option " + i + " must be " + l, B.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new B("Unknown option " + i, B.ERR_BAD_OPTION);
  }
}
const ks = {
  assertOptions: Ql,
  validators: Ks
}, vt = ks.validators;
class Ut {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Yi(),
      response: new Yi()
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
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Gt(this.defaults, t);
    const { transitional: n, paramsSerializer: s, headers: i } = t;
    n !== void 0 && ks.assertOptions(n, {
      silentJSONParsing: vt.transitional(vt.boolean),
      forcedJSONParsing: vt.transitional(vt.boolean),
      clarifyTimeoutError: vt.transitional(vt.boolean)
    }, !1), s != null && (b.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : ks.assertOptions(s, {
      encode: vt.function,
      serialize: vt.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = i && b.merge(
      i.common,
      i[t.method]
    );
    i && b.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete i[C];
      }
    ), t.headers = Ge.concat(o, i);
    const u = [];
    let l = !0;
    this.interceptors.request.forEach(function(k) {
      typeof k.runWhen == "function" && k.runWhen(t) === !1 || (l = l && k.synchronous, u.unshift(k.fulfilled, k.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(k) {
      h.push(k.fulfilled, k.rejected);
    });
    let d, m = 0, O;
    if (!l) {
      const C = [na.bind(this), void 0];
      for (C.unshift.apply(C, u), C.push.apply(C, h), O = C.length, d = Promise.resolve(t); m < O; )
        d = d.then(C[m++], C[m++]);
      return d;
    }
    O = u.length;
    let A = t;
    for (m = 0; m < O; ) {
      const C = u[m++], k = u[m++];
      try {
        A = C(A);
      } catch (T) {
        k.call(this, T);
        break;
      }
    }
    try {
      d = na.call(this, A);
    } catch (C) {
      return Promise.reject(C);
    }
    for (m = 0, O = h.length; m < O; )
      d = d.then(h[m++], h[m++]);
    return d;
  }
  getUri(e) {
    e = Gt(this.defaults, e);
    const t = Ua(e.baseURL, e.url);
    return qa(t, e.params, e.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(e) {
  Ut.prototype[e] = function(t, n) {
    return this.request(Gt(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(i, o, u) {
      return this.request(Gt(u || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  Ut.prototype[e] = t(), Ut.prototype[e + "Form"] = t(!0);
});
class Ys {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((u) => {
        n.subscribe(u), i = u;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, e(function(i, o, u) {
      n.reason || (n.reason = new fr(i, o, u), t(n.reason));
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
      token: new Ys(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function Xl(r) {
  return function(t) {
    return r.apply(null, t);
  };
}
function Zl(r) {
  return b.isObject(r) && r.isAxiosError === !0;
}
const xs = {
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
Object.entries(xs).forEach(([r, e]) => {
  xs[e] = r;
});
function Ka(r) {
  const e = new Ut(r), t = Ra(Ut.prototype.request, e);
  return b.extend(t, Ut.prototype, e, { allOwnKeys: !0 }), b.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return Ka(Gt(r, s));
  }, t;
}
const Te = Ka(Pr);
Te.Axios = Ut;
Te.CanceledError = fr;
Te.CancelToken = Ys;
Te.isCancel = Ma;
Te.VERSION = Wa;
Te.toFormData = Cn;
Te.AxiosError = B;
Te.Cancel = Te.CanceledError;
Te.all = function(e) {
  return Promise.all(e);
};
Te.spread = Xl;
Te.isAxiosError = Zl;
Te.mergeConfig = Gt;
Te.AxiosHeaders = Ge;
Te.formToJSON = (r) => Ba(b.isHTMLForm(r) ? new FormData(r) : r);
Te.getAdapter = Ha.getAdapter;
Te.HttpStatusCode = xs;
Te.default = Te;
const Js = "http://ec2-13-203-204-143.ap-south-1.compute.amazonaws.com", ec = () => Te.create({
  baseURL: Js,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class Ae {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = Ae.createService();
  }
  static createService() {
    return Ae._axiosInstance || (Ae._axiosInstance = ec(), Ae.setAuthHeaderInterceptor(), Ae._axiosInstance.interceptors.response.use(Ae.handleSuccess, Ae.handleError)), Ae._axiosInstance;
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
      return (await Te.post(`${Js}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    Ae._axiosInstance.interceptors.request.use(
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
    Ae._axiosInstance.interceptors.response.use(
      Ae.handleSuccess,
      Ae.handleError
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
        const i = await Ae.refreshAccessToken();
        return Ae.setAccessToken(i), t.headers.set("Authorization", `Bearer ${i}`), Ae._axiosInstance(t);
      } catch (i) {
        console.error("Refresh token failed", i);
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
class ae extends Ae {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  //Approval
  updateDocStatusWithThreeApproval(e, t) {
    console.log("Document Id:", e);
    const n = J.UPDATE_DOCUMENT_STATUS_THREE_LEVEL_APPROVAL(e);
    return this.patch(n, t);
  }
  updateDocStatusWithTwoApproval(e, t) {
    console.log("Document Id:", e);
    const n = J.UPDATE_DOCUMENT_STATUS_TWO_LEVEL_APPROVAL(e);
    return this.patch(n, t);
  }
  updateDocStatusWithOneApproval(e, t) {
    console.log("Document Id:", e);
    const n = J.UPDATE_DOCUMENT_STATUS_ONE_LEVEL_APPROVAL(e);
    return this.patch(n, t);
  }
  //Notifications
  getAllUserNotifications() {
    const e = J.GET_NOTIFICATIONS_BY_USER;
    return this.get(e);
  }
  getEmployeePartialData() {
    const e = J.GET_EMPLOYEE_PARTIAL_DATA;
    return this.get(e);
  }
  getAllCompaniesData() {
    const e = J.GET_ALL_COMPANIES_DATA;
    return this.get(e);
  }
  getCompanyNames() {
    const e = J.GET_COMPANY_NAMES;
    return this.get(e);
  }
  getAllLevels() {
    const e = J.GET_ALL_LEVELS;
    return this.get(e);
  }
  //Product Partial Data
  getProductsPatrialData() {
    const e = J.GET_PRODUCTS_PARTIAL;
    return this.get(e);
  }
  getProductsPatrialDataById(e) {
    const t = `${J.GET_PRODUCTS_PARTIAL_BY_ID}/${e}`;
    return this.get(t);
  }
  searchProductDataByQuery(e) {
    const t = `${J.SEARCH_PRODUCT}${e}`;
    return this.get(t);
  }
  searchProductAllDataByQuery(e) {
    const t = `${J.SEARCH_PRODUCT_ALL_DATA}${e}`;
    return this.get(t);
  }
  //Packaging Material
  getPackagingMaterialPatrialData() {
    const e = J.GET_PACKAGING_MATERIAL_PARTIAL;
    return this.get(e);
  }
  //Vendor Partial Data
  getVendorsPatrialData() {
    const e = J.GET_VENDORS_PARTIAL;
    return this.get(e);
  }
  getVendorsPatrialDataById(e) {
    const t = `${J.GET_VENDORS_PARTIAL_BY_ID}/${e}`;
    return this.get(t);
  }
  searchVendorDataByQuery(e) {
    const t = `${J.SEARCH_VENDOR}${e}`;
    return this.get(t);
  }
  //Farmer Partial Data
  getFarmersPatrialData() {
    const e = J.GET_FARMERS_PARTIAL;
    return this.get(e);
  }
  getFarmersPatrialDataById(e) {
    const t = `${J.GET_FARMERS_PARTIAL_BY_ID}/${e}`;
    return this.get(t);
  }
  searchFarmerDataByQuery(e) {
    const t = `${J.SEARCH_FARMER}${e}`;
    return this.get(t);
  }
  //Customer
  getCustomerPatrialData(e) {
    const t = `${J.GET_CUSTOMERS_PARTIAL}/${e}`;
    return this.get(t);
  }
  getAllCustomerNames() {
    const e = J.GET_CUSTOMER_NAMESL;
    return this.get(e);
  }
  //Numbers
  getRFPANums() {
    const e = J.GET_ALL_RFPA_NO;
    return this.get(e);
  }
  getGRNNums() {
    const e = J.GET_ALL_GRN_NO;
    return this.get(e);
  }
  getDealSlipNums() {
    const e = J.GET_ALL_DEAL_SLIP_NO;
    return this.get(e);
  }
  getDeliveryChallanNums() {
    const e = J.GET_ALL_DELIVERY_CHALLAN_NO;
    return this.get(e);
  }
  getUOMPartialData() {
    const e = J.GET_UOM_PARTIAL;
    return this.get(e);
  }
  getBranchPartialData() {
    const e = J.GET_BRANCHES_PARTIAL;
    return this.get(e);
  }
  getOfficePartialData() {
    const e = J.GET_OFFICES_PARTIAL;
    return this.get(e);
  }
  getDepartmentById(e) {
    const t = `${J.GET_DEPARTMENT_BY_ID}/${e}`;
    return this.get(t);
  }
}
class Dr extends Ae {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getAllStock(e) {
    const t = J.GET_ALL_STOCK(e);
    return this.get(t);
  }
  getStockGlobal(e) {
    const t = J.GET_STOCK_GLOBAL(e);
    return this.get(t);
  }
  getStockLocationWise(e, t, n) {
    const s = J.GET_STOCK_BY_LOCATION(e, t, n);
    return this.get(s);
  }
  getStockProductWise(e, t, n, s) {
    const i = J.GET_STOCK_BY_PRODUCT(e, t, n, s);
    return this.get(i);
  }
  getStockDetailById(e) {
    const t = `${J.GET_STOCK_BY_ID}/${e}`;
    return this.get(t);
  }
  // searchProductDataByQuery(query: string): Promise<ApiBaseState<ProductPartialData[]>> {
  //     const url = `${sharedApiUrls.SEARCH_PRODUCT}${query}`;
  //     return this.get(url);
  // };
}
class Qs extends Ae {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getPurchaseDataByVendor(e) {
    const t = `/api/management/getGrns/management/vender/${e}`;
    return this.get(t);
  }
  getPurchaseDataByFarmer(e) {
    const t = `/api/management/getGrns/management/farmer/${e}`;
    return this.get(t);
  }
  getPurchaseDataByProduct(e) {
    const t = `/api/management/getGrns/management/product/${e}`;
    return this.get(t);
  }
}
const at = /* @__PURE__ */ Object.create(null);
at.open = "0";
at.close = "1";
at.ping = "2";
at.pong = "3";
at.message = "4";
at.upgrade = "5";
at.noop = "6";
const ln = /* @__PURE__ */ Object.create(null);
Object.keys(at).forEach((r) => {
  ln[at[r]] = r;
});
const Ps = { type: "error", data: "parser error" }, Ya = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ja = typeof ArrayBuffer == "function", Qa = (r) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer, Xs = ({ type: r, data: e }, t, n) => Ya && e instanceof Blob ? t ? n(e) : ia(e, n) : Ja && (e instanceof ArrayBuffer || Qa(e)) ? t ? n(e) : ia(new Blob([e]), n) : n(at[r] + (e || "")), ia = (r, e) => {
  const t = new FileReader();
  return t.onload = function() {
    const n = t.result.split(",")[1];
    e("b" + (n || ""));
  }, t.readAsDataURL(r);
};
function aa(r) {
  return r instanceof Uint8Array ? r : r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
}
let os;
function tc(r, e) {
  if (Ya && r.data instanceof Blob)
    return r.data.arrayBuffer().then(aa).then(e);
  if (Ja && (r.data instanceof ArrayBuffer || Qa(r.data)))
    return e(aa(r.data));
  Xs(r, !1, (t) => {
    os || (os = new TextEncoder()), e(os.encode(t));
  });
}
const oa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Rr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let r = 0; r < oa.length; r++)
  Rr[oa.charCodeAt(r)] = r;
const rc = (r) => {
  let e = r.length * 0.75, t = r.length, n, s = 0, i, o, u, l;
  r[r.length - 1] === "=" && (e--, r[r.length - 2] === "=" && e--);
  const h = new ArrayBuffer(e), d = new Uint8Array(h);
  for (n = 0; n < t; n += 4)
    i = Rr[r.charCodeAt(n)], o = Rr[r.charCodeAt(n + 1)], u = Rr[r.charCodeAt(n + 2)], l = Rr[r.charCodeAt(n + 3)], d[s++] = i << 2 | o >> 4, d[s++] = (o & 15) << 4 | u >> 2, d[s++] = (u & 3) << 6 | l & 63;
  return h;
}, nc = typeof ArrayBuffer == "function", Zs = (r, e) => {
  if (typeof r != "string")
    return {
      type: "message",
      data: Xa(r, e)
    };
  const t = r.charAt(0);
  return t === "b" ? {
    type: "message",
    data: sc(r.substring(1), e)
  } : ln[t] ? r.length > 1 ? {
    type: ln[t],
    data: r.substring(1)
  } : {
    type: ln[t]
  } : Ps;
}, sc = (r, e) => {
  if (nc) {
    const t = rc(r);
    return Xa(t, e);
  } else
    return { base64: !0, data: r };
}, Xa = (r, e) => {
  switch (e) {
    case "blob":
      return r instanceof Blob ? r : new Blob([r]);
    case "arraybuffer":
    default:
      return r instanceof ArrayBuffer ? r : r.buffer;
  }
}, Za = "", ic = (r, e) => {
  const t = r.length, n = new Array(t);
  let s = 0;
  r.forEach((i, o) => {
    Xs(i, !1, (u) => {
      n[o] = u, ++s === t && e(n.join(Za));
    });
  });
}, ac = (r, e) => {
  const t = r.split(Za), n = [];
  for (let s = 0; s < t.length; s++) {
    const i = Zs(t[s], e);
    if (n.push(i), i.type === "error")
      break;
  }
  return n;
};
function oc() {
  return new TransformStream({
    transform(r, e) {
      tc(r, (t) => {
        const n = t.length;
        let s;
        if (n < 126)
          s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, n);
        else if (n < 65536) {
          s = new Uint8Array(3);
          const i = new DataView(s.buffer);
          i.setUint8(0, 126), i.setUint16(1, n);
        } else {
          s = new Uint8Array(9);
          const i = new DataView(s.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(n));
        }
        r.data && typeof r.data != "string" && (s[0] |= 128), e.enqueue(s), e.enqueue(t);
      });
    }
  });
}
let us;
function tn(r) {
  return r.reduce((e, t) => e + t.length, 0);
}
function rn(r, e) {
  if (r[0].length === e)
    return r.shift();
  const t = new Uint8Array(e);
  let n = 0;
  for (let s = 0; s < e; s++)
    t[s] = r[0][n++], n === r[0].length && (r.shift(), n = 0);
  return r.length && n < r[0].length && (r[0] = r[0].slice(n)), t;
}
function uc(r, e) {
  us || (us = new TextDecoder());
  const t = [];
  let n = 0, s = -1, i = !1;
  return new TransformStream({
    transform(o, u) {
      for (t.push(o); ; ) {
        if (n === 0) {
          if (tn(t) < 1)
            break;
          const l = rn(t, 1);
          i = (l[0] & 128) === 128, s = l[0] & 127, s < 126 ? n = 3 : s === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (tn(t) < 2)
            break;
          const l = rn(t, 2);
          s = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (tn(t) < 8)
            break;
          const l = rn(t, 8), h = new DataView(l.buffer, l.byteOffset, l.length), d = h.getUint32(0);
          if (d > Math.pow(2, 21) - 1) {
            u.enqueue(Ps);
            break;
          }
          s = d * Math.pow(2, 32) + h.getUint32(4), n = 3;
        } else {
          if (tn(t) < s)
            break;
          const l = rn(t, s);
          u.enqueue(Zs(i ? l : us.decode(l), e)), n = 0;
        }
        if (s === 0 || s > r) {
          u.enqueue(Ps);
          break;
        }
      }
    }
  });
}
const eo = 4;
function Ce(r) {
  if (r) return lc(r);
}
function lc(r) {
  for (var e in Ce.prototype)
    r[e] = Ce.prototype[e];
  return r;
}
Ce.prototype.on = Ce.prototype.addEventListener = function(r, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(e), this;
};
Ce.prototype.once = function(r, e) {
  function t() {
    this.off(r, t), e.apply(this, arguments);
  }
  return t.fn = e, this.on(r, t), this;
};
Ce.prototype.off = Ce.prototype.removeListener = Ce.prototype.removeAllListeners = Ce.prototype.removeEventListener = function(r, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var t = this._callbacks["$" + r];
  if (!t) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + r], this;
  for (var n, s = 0; s < t.length; s++)
    if (n = t[s], n === e || n.fn === e) {
      t.splice(s, 1);
      break;
    }
  return t.length === 0 && delete this._callbacks["$" + r], this;
};
Ce.prototype.emit = function(r) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + r], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (t) {
    t = t.slice(0);
    for (var n = 0, s = t.length; n < s; ++n)
      t[n].apply(this, e);
  }
  return this;
};
Ce.prototype.emitReserved = Ce.prototype.emit;
Ce.prototype.listeners = function(r) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || [];
};
Ce.prototype.hasListeners = function(r) {
  return !!this.listeners(r).length;
};
const On = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, t) => t(e, 0), We = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), cc = "arraybuffer";
function to(r, ...e) {
  return e.reduce((t, n) => (r.hasOwnProperty(n) && (t[n] = r[n]), t), {});
}
const fc = We.setTimeout, hc = We.clearTimeout;
function Nn(r, e) {
  e.useNativeTimers ? (r.setTimeoutFn = fc.bind(We), r.clearTimeoutFn = hc.bind(We)) : (r.setTimeoutFn = We.setTimeout.bind(We), r.clearTimeoutFn = We.clearTimeout.bind(We));
}
const dc = 1.33;
function pc(r) {
  return typeof r == "string" ? mc(r) : Math.ceil((r.byteLength || r.size) * dc);
}
function mc(r) {
  let e = 0, t = 0;
  for (let n = 0, s = r.length; n < s; n++)
    e = r.charCodeAt(n), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (n++, t += 4);
  return t;
}
function ro() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function yc(r) {
  let e = "";
  for (let t in r)
    r.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(r[t]));
  return e;
}
function gc(r) {
  let e = {}, t = r.split("&");
  for (let n = 0, s = t.length; n < s; n++) {
    let i = t[n].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class bc extends Error {
  constructor(e, t, n) {
    super(e), this.description = t, this.context = n, this.type = "TransportError";
  }
}
class ei extends Ce {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Nn(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
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
  onError(e, t, n) {
    return super.emitReserved("error", new bc(e, t, n)), this;
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
    const t = Zs(e, this.socket.binaryType);
    this.onPacket(t);
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
  createUri(e, t = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(t);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const t = yc(e);
    return t.length ? "?" + t : "";
  }
}
class vc extends ei {
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
    const t = () => {
      this.readyState = "paused", e();
    };
    if (this._polling || !this.writable) {
      let n = 0;
      this._polling && (n++, this.once("pollComplete", function() {
        --n || t();
      })), this.writable || (n++, this.once("drain", function() {
        --n || t();
      }));
    } else
      t();
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
    const t = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    ac(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, ic(e, (t) => {
      this.doWrite(t, () => {
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
    const e = this.opts.secure ? "https" : "http", t = this.query || {};
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = ro()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(e, t);
  }
}
let no = !1;
try {
  no = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const _c = no;
function Ec() {
}
class Sc extends vc {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const t = location.protocol === "https:";
      let n = location.port;
      n || (n = t ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, t) {
    const n = this.request({
      method: "POST",
      data: e
    });
    n.on("success", t), n.on("error", (s, i) => {
      this.onError("xhr post error", s, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (t, n) => {
      this.onError("xhr poll error", t, n);
    }), this.pollXhr = e;
  }
}
let rr = class cn extends Ce {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, t, n) {
    super(), this.createRequest = e, Nn(this, n), this._opts = n, this._method = n.method || "GET", this._uri = t, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const t = to(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this._opts.xd;
    const n = this._xhr = this.createRequest(t);
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let s in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(s) && n.setRequestHeader(s, this._opts.extraHeaders[s]);
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
        var s;
        n.readyState === 3 && ((s = this._opts.cookieJar) === null || s === void 0 || s.parseCookies(
          // @ts-ignore
          n.getResponseHeader("set-cookie")
        )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this._data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this._onError(s);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = cn.requestsCount++, cn.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Ec, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete cn.requests[this._index], this._xhr = null;
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
rr.requestsCount = 0;
rr.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", ua);
  else if (typeof addEventListener == "function") {
    const r = "onpagehide" in We ? "pagehide" : "unload";
    addEventListener(r, ua, !1);
  }
}
function ua() {
  for (let r in rr.requests)
    rr.requests.hasOwnProperty(r) && rr.requests[r].abort();
}
const Tc = function() {
  const r = so({
    xdomain: !1
  });
  return r && r.responseType !== null;
}();
class wc extends Sc {
  constructor(e) {
    super(e);
    const t = e && e.forceBase64;
    this.supportsBinary = Tc && !t;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new rr(so, this.uri(), e);
  }
}
function so(r) {
  const e = r.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || _c))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new We[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const io = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Rc extends ei {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), t = this.opts.protocols, n = io ? {} : to(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, t, n);
    } catch (s) {
      return this.emitReserved("error", s);
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
    for (let t = 0; t < e.length; t++) {
      const n = e[t], s = t === e.length - 1;
      Xs(n, this.supportsBinary, (i) => {
        try {
          this.doWrite(n, i);
        } catch {
        }
        s && On(() => {
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
    const e = this.opts.secure ? "wss" : "ws", t = this.query || {};
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = ro()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t);
  }
}
const ls = We.WebSocket || We.MozWebSocket;
class Cc extends Rc {
  createSocket(e, t, n) {
    return io ? new ls(e, t, n) : t ? new ls(e, t) : new ls(e);
  }
  doWrite(e, t) {
    this.ws.send(t);
  }
}
class Ac extends ei {
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
        const t = uc(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(t).getReader(), s = oc();
        s.readable.pipeTo(e.writable), this._writer = s.writable.getWriter();
        const i = () => {
          n.read().then(({ done: u, value: l }) => {
            u || (this.onPacket(l), i());
          }).catch((u) => {
          });
        };
        i();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
      });
    });
  }
  write(e) {
    this.writable = !1;
    for (let t = 0; t < e.length; t++) {
      const n = e[t], s = t === e.length - 1;
      this._writer.write(n).then(() => {
        s && On(() => {
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
const Oc = {
  websocket: Cc,
  webtransport: Ac,
  polling: wc
}, Nc = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, kc = [
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
function Ds(r) {
  if (r.length > 8e3)
    throw "URI too long";
  const e = r, t = r.indexOf("["), n = r.indexOf("]");
  t != -1 && n != -1 && (r = r.substring(0, t) + r.substring(t, n).replace(/:/g, ";") + r.substring(n, r.length));
  let s = Nc.exec(r || ""), i = {}, o = 14;
  for (; o--; )
    i[kc[o]] = s[o] || "";
  return t != -1 && n != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = xc(i, i.path), i.queryKey = Pc(i, i.query), i;
}
function xc(r, e) {
  const t = /\/{2,9}/g, n = e.replace(t, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Pc(r, e) {
  const t = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, s, i) {
    s && (t[s] = i);
  }), t;
}
const Fs = typeof addEventListener == "function" && typeof removeEventListener == "function", fn = [];
Fs && addEventListener("offline", () => {
  fn.forEach((r) => r());
}, !1);
class Ot extends Ce {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, t) {
    if (super(), this.binaryType = cc, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (t = e, e = null), e) {
      const n = Ds(e);
      t.hostname = n.host, t.secure = n.protocol === "https" || n.protocol === "wss", t.port = n.port, n.query && (t.query = n.query);
    } else t.host && (t.hostname = Ds(t.host).host);
    Nn(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((n) => {
      const s = n.prototype.name;
      this.transports.push(s), this._transportsByName[s] = n;
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = gc(this.opts.query)), Fs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, fn.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const t = Object.assign({}, this.opts.query);
    t.EIO = eo, t.transport = e, this.id && (t.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: t,
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
    const e = this.opts.rememberUpgrade && Ot.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const t = this.createTransport(e);
    t.open(), this.setTransport(t);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (t) => this._onClose("transport close", t));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Ot.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
          const t = new Error("server error");
          t.code = e.data, this._onError(t);
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
    let t = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const s = this.writeBuffer[n].data;
      if (s && (t += pc(s)), n > 0 && t > this._maxPayload)
        return this.writeBuffer.slice(0, n);
      t += 2;
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
    return e && (this._pingTimeoutTime = 0, On(() => {
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
  write(e, t, n) {
    return this._sendPacket("message", e, t, n), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, t, n) {
    return this._sendPacket("message", e, t, n), this;
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
  _sendPacket(e, t, n, s) {
    if (typeof t == "function" && (s = t, t = void 0), typeof n == "function" && (s = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const i = {
      type: e,
      data: t,
      options: n
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), s && this.once("flush", s), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, t = () => {
      this.off("upgrade", t), this.off("upgradeError", t), e();
    }, n = () => {
      this.once("upgrade", t), this.once("upgradeError", t);
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
    if (Ot.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(e, t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Fs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = fn.indexOf(this._offlineEventListener);
        n !== -1 && fn.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Ot.protocol = eo;
class Dc extends Ot {
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
    let t = this.createTransport(e), n = !1;
    Ot.priorWebsocketSuccess = !1;
    const s = () => {
      n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (m) => {
        if (!n)
          if (m.type === "pong" && m.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            Ot.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (d(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const O = new Error("probe error");
            O.transport = t.name, this.emitReserved("upgradeError", O);
          }
      }));
    };
    function i() {
      n || (n = !0, d(), t.close(), t = null);
    }
    const o = (m) => {
      const O = new Error("probe error: " + m);
      O.transport = t.name, i(), this.emitReserved("upgradeError", O);
    };
    function u() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function h(m) {
      t && m.name !== t.name && i();
    }
    const d = () => {
      t.removeListener("open", s), t.removeListener("error", o), t.removeListener("close", u), this.off("close", l), this.off("upgrading", h);
    };
    t.once("open", s), t.once("error", o), t.once("close", u), this.once("close", l), this.once("upgrading", h), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      n || t.open();
    }, 200) : t.open();
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
    const t = [];
    for (let n = 0; n < e.length; n++)
      ~this.transports.indexOf(e[n]) && t.push(e[n]);
    return t;
  }
}
let Fc = class extends Dc {
  constructor(e, t = {}) {
    const n = typeof e == "object" ? e : t;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((s) => Oc[s]).filter((s) => !!s)), super(e, n);
  }
};
function Ic(r, e = "", t) {
  let n = r;
  t = t || typeof location < "u" && location, r == null && (r = t.protocol + "//" + t.host), typeof r == "string" && (r.charAt(0) === "/" && (r.charAt(1) === "/" ? r = t.protocol + r : r = t.host + r), /^(https?|wss?):\/\//.test(r) || (typeof t < "u" ? r = t.protocol + "//" + r : r = "https://" + r), n = Ds(r)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + i + ":" + n.port + e, n.href = n.protocol + "://" + i + (t && t.port === n.port ? "" : ":" + n.port), n;
}
const Lc = typeof ArrayBuffer == "function", qc = (r) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r.buffer instanceof ArrayBuffer, ao = Object.prototype.toString, $c = typeof Blob == "function" || typeof Blob < "u" && ao.call(Blob) === "[object BlobConstructor]", Bc = typeof File == "function" || typeof File < "u" && ao.call(File) === "[object FileConstructor]";
function ti(r) {
  return Lc && (r instanceof ArrayBuffer || qc(r)) || $c && r instanceof Blob || Bc && r instanceof File;
}
function hn(r, e) {
  if (!r || typeof r != "object")
    return !1;
  if (Array.isArray(r)) {
    for (let t = 0, n = r.length; t < n; t++)
      if (hn(r[t]))
        return !0;
    return !1;
  }
  if (ti(r))
    return !0;
  if (r.toJSON && typeof r.toJSON == "function" && arguments.length === 1)
    return hn(r.toJSON(), !0);
  for (const t in r)
    if (Object.prototype.hasOwnProperty.call(r, t) && hn(r[t]))
      return !0;
  return !1;
}
function Mc(r) {
  const e = [], t = r.data, n = r;
  return n.data = Is(t, e), n.attachments = e.length, { packet: n, buffers: e };
}
function Is(r, e) {
  if (!r)
    return r;
  if (ti(r)) {
    const t = { _placeholder: !0, num: e.length };
    return e.push(r), t;
  } else if (Array.isArray(r)) {
    const t = new Array(r.length);
    for (let n = 0; n < r.length; n++)
      t[n] = Is(r[n], e);
    return t;
  } else if (typeof r == "object" && !(r instanceof Date)) {
    const t = {};
    for (const n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = Is(r[n], e));
    return t;
  }
  return r;
}
function jc(r, e) {
  return r.data = Ls(r.data, e), delete r.attachments, r;
}
function Ls(r, e) {
  if (!r)
    return r;
  if (r && r._placeholder === !0) {
    if (typeof r.num == "number" && r.num >= 0 && r.num < e.length)
      return e[r.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(r))
    for (let t = 0; t < r.length; t++)
      r[t] = Ls(r[t], e);
  else if (typeof r == "object")
    for (const t in r)
      Object.prototype.hasOwnProperty.call(r, t) && (r[t] = Ls(r[t], e));
  return r;
}
const Uc = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Vc = 5;
var W;
(function(r) {
  r[r.CONNECT = 0] = "CONNECT", r[r.DISCONNECT = 1] = "DISCONNECT", r[r.EVENT = 2] = "EVENT", r[r.ACK = 3] = "ACK", r[r.CONNECT_ERROR = 4] = "CONNECT_ERROR", r[r.BINARY_EVENT = 5] = "BINARY_EVENT", r[r.BINARY_ACK = 6] = "BINARY_ACK";
})(W || (W = {}));
class Gc {
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
    return (e.type === W.EVENT || e.type === W.ACK) && hn(e) ? this.encodeAsBinary({
      type: e.type === W.EVENT ? W.BINARY_EVENT : W.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let t = "" + e.type;
    return (e.type === W.BINARY_EVENT || e.type === W.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const t = Mc(e), n = this.encodeAsString(t.packet), s = t.buffers;
    return s.unshift(n), s;
  }
}
function la(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
class ri extends Ce {
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
    let t;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      t = this.decodeString(e);
      const n = t.type === W.BINARY_EVENT;
      n || t.type === W.BINARY_ACK ? (t.type = n ? W.EVENT : W.ACK, this.reconstructor = new zc(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (ti(e) || e.base64)
      if (this.reconstructor)
        t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved("decoded", t));
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
    let t = 0;
    const n = {
      type: Number(e.charAt(0))
    };
    if (W[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === W.BINARY_EVENT || n.type === W.BINARY_ACK) {
      const i = t + 1;
      for (; e.charAt(++t) !== "-" && t != e.length; )
        ;
      const o = e.substring(i, t);
      if (o != Number(o) || e.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(o);
    }
    if (e.charAt(t + 1) === "/") {
      const i = t + 1;
      for (; ++t && !(e.charAt(t) === "," || t === e.length); )
        ;
      n.nsp = e.substring(i, t);
    } else
      n.nsp = "/";
    const s = e.charAt(t + 1);
    if (s !== "" && Number(s) == s) {
      const i = t + 1;
      for (; ++t; ) {
        const o = e.charAt(t);
        if (o == null || Number(o) != o) {
          --t;
          break;
        }
        if (t === e.length)
          break;
      }
      n.id = Number(e.substring(i, t + 1));
    }
    if (e.charAt(++t)) {
      const i = this.tryParse(e.substr(t));
      if (ri.isPayloadValid(n.type, i))
        n.data = i;
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
  static isPayloadValid(e, t) {
    switch (e) {
      case W.CONNECT:
        return la(t);
      case W.DISCONNECT:
        return t === void 0;
      case W.CONNECT_ERROR:
        return typeof t == "string" || la(t);
      case W.EVENT:
      case W.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && Uc.indexOf(t[0]) === -1);
      case W.ACK:
      case W.BINARY_ACK:
        return Array.isArray(t);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class zc {
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
      const t = jc(this.reconPack, this.buffers);
      return this.finishedReconstruction(), t;
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
const Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ri,
  Encoder: Gc,
  get PacketType() {
    return W;
  },
  protocol: Vc
}, Symbol.toStringTag, { value: "Module" }));
function Je(r, e, t) {
  return r.on(e, t), function() {
    r.off(e, t);
  };
}
const Wc = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class oo extends Ce {
  /**
   * `Socket` constructor.
   */
  constructor(e, t, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
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
      Je(e, "open", this.onopen.bind(this)),
      Je(e, "packet", this.onpacket.bind(this)),
      Je(e, "error", this.onerror.bind(this)),
      Je(e, "close", this.onclose.bind(this))
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
  emit(e, ...t) {
    var n, s, i;
    if (Wc.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const o = {
      type: W.EVENT,
      data: t
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const d = this.ids++, m = t.pop();
      this._registerAckCallback(d, m), o.id = d;
    }
    const u = (s = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || s === void 0 ? void 0 : s.writable, l = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !u || (l ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, t) {
    var n;
    const s = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[e] = t;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let u = 0; u < this.sendBuffer.length; u++)
        this.sendBuffer[u].id === e && this.sendBuffer.splice(u, 1);
      t.call(this, new Error("operation has timed out"));
    }, s), o = (...u) => {
      this.io.clearTimeoutFn(i), t.apply(this, u);
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
  emitWithAck(e, ...t) {
    return new Promise((n, s) => {
      const i = (o, u) => o ? s(o) : n(u);
      i.withError = !0, t.push(i), this.emit(e, ...t);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let t;
    typeof e[e.length - 1] == "function" && (t = e.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((s, ...i) => n !== this._queue[0] ? void 0 : (s !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), t && t(s)) : (this._queue.shift(), t && t(null, ...i)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
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
    const t = this._queue[0];
    t.pending && !e || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args));
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
      type: W.CONNECT,
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
  onclose(e, t) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t), this._clearAcks();
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
        case W.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case W.EVENT:
        case W.BINARY_EVENT:
          this.onevent(e);
          break;
        case W.ACK:
        case W.BINARY_ACK:
          this.onack(e);
          break;
        case W.DISCONNECT:
          this.ondisconnect();
          break;
        case W.CONNECT_ERROR:
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
    const t = e.data || [];
    e.id != null && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const t = this._anyListeners.slice();
      for (const n of t)
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
    const t = this;
    let n = !1;
    return function(...s) {
      n || (n = !0, t.packet({
        type: W.ACK,
        id: e,
        data: s
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
    const t = this.acks[e.id];
    typeof t == "function" && (delete this.acks[e.id], t.withError && e.data.unshift(null), t.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, t) {
    this.id = e, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
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
    return this.connected && this.packet({ type: W.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      const t = this._anyListeners;
      for (let n = 0; n < t.length; n++)
        if (e === t[n])
          return t.splice(n, 1), this;
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
      const t = this._anyOutgoingListeners;
      for (let n = 0; n < t.length; n++)
        if (e === t[n])
          return t.splice(n, 1), this;
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
      const t = this._anyOutgoingListeners.slice();
      for (const n of t)
        n.apply(this, e.data);
    }
  }
}
function hr(r) {
  r = r || {}, this.ms = r.min || 100, this.max = r.max || 1e4, this.factor = r.factor || 2, this.jitter = r.jitter > 0 && r.jitter <= 1 ? r.jitter : 0, this.attempts = 0;
}
hr.prototype.duration = function() {
  var r = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), t = Math.floor(e * this.jitter * r);
    r = Math.floor(e * 10) & 1 ? r + t : r - t;
  }
  return Math.min(r, this.max) | 0;
};
hr.prototype.reset = function() {
  this.attempts = 0;
};
hr.prototype.setMin = function(r) {
  this.ms = r;
};
hr.prototype.setMax = function(r) {
  this.max = r;
};
hr.prototype.setJitter = function(r) {
  this.jitter = r;
};
class qs extends Ce {
  constructor(e, t) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Nn(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new hr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
    const s = t.parser || Hc;
    this.encoder = new s.Encoder(), this.decoder = new s.Decoder(), this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var t;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (t = this.backoff) === null || t === void 0 || t.setMin(e), this);
  }
  randomizationFactor(e) {
    var t;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (t = this.backoff) === null || t === void 0 || t.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var t;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (t = this.backoff) === null || t === void 0 || t.setMax(e), this);
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
    this.engine = new Fc(this.uri, this.opts);
    const t = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = Je(t, "open", function() {
      n.onopen(), e && e();
    }), i = (u) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", u), e ? e(u) : this.maybeReconnectOnOpen();
    }, o = Je(t, "error", i);
    if (this._timeout !== !1) {
      const u = this._timeout, l = this.setTimeoutFn(() => {
        s(), i(new Error("timeout")), t.close();
      }, u);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
      });
    }
    return this.subs.push(s), this.subs.push(o), this;
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
      Je(e, "ping", this.onping.bind(this)),
      Je(e, "data", this.ondata.bind(this)),
      Je(e, "error", this.onerror.bind(this)),
      Je(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      Je(this.decoder, "decoded", this.ondecoded.bind(this))
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
    } catch (t) {
      this.onclose("parse error", t);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    On(() => {
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
  socket(e, t) {
    let n = this.nsps[e];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new oo(this, e, t), this.nsps[e] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const t = Object.keys(this.nsps);
    for (const n of t)
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
    const t = this.encoder.encode(e);
    for (let n = 0; n < t.length; n++)
      this.engine.write(t[n], e.options);
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
  onclose(e, t) {
    var n;
    this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const t = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((s) => {
          s ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", s)) : e.onreconnect();
        }));
      }, t);
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
const Er = {};
function dn(r, e) {
  typeof r == "object" && (e = r, r = void 0), e = e || {};
  const t = Ic(r, e.path || "/socket.io"), n = t.source, s = t.id, i = t.path, o = Er[s] && i in Er[s].nsps, u = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return u ? l = new qs(n, e) : (Er[s] || (Er[s] = new qs(n, e)), l = Er[s]), t.query && !e.query && (e.query = t.queryKey), l.socket(t.path, e);
}
Object.assign(dn, {
  Manager: qs,
  Socket: oo,
  io: dn,
  connect: dn
});
dn(Js, {
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
const ch = (r) => Gs({
  mutationKey: ["update-doc-status-with-three-approval", r],
  mutationFn: (e) => ae.getInstance().updateDocStatusWithThreeApproval(r, e)
}), fh = (r) => Gs({
  mutationKey: ["update-doc-status-with-two-approval", r],
  mutationFn: (e) => ae.getInstance().updateDocStatusWithTwoApproval(r, e)
}), hh = (r) => Gs({
  mutationKey: ["update-doc-status-with-one-approval", r],
  mutationFn: (e) => ae.getInstance().updateDocStatusWithOneApproval(r, e)
}), dh = () => Q({
  queryKey: ["user-notifications"],
  queryFn: () => ae.getInstance().getAllUserNotifications(),
  staleTime: 0,
  gcTime: 0,
  refetchOnMount: !0,
  refetchOnWindowFocus: !0,
  refetchOnReconnect: !0
}), ph = () => Q({
  queryKey: ["get-employee-partial-data"],
  queryFn: () => ae.getInstance().getEmployeePartialData()
});
function mh() {
  return Q({
    queryKey: ["get-all-companies-data"],
    queryFn: () => ae.getInstance().getAllCompaniesData()
  });
}
function yh() {
  return Q({
    queryKey: ["get-company-names"],
    queryFn: () => ae.getInstance().getCompanyNames()
  });
}
function gh() {
  return Q({
    queryKey: ["get-levels"],
    queryFn: () => ae.getInstance().getAllLevels()
  });
}
function bh(r) {
  const e = r.length > 1;
  return Q({
    queryKey: ["get-department-by-id"],
    queryFn: () => ae.getInstance().getDepartmentById(r),
    enabled: e
  });
}
function vh() {
  return Q({
    queryKey: ["get-products-partial-data"],
    queryFn: () => ae.getInstance().getProductsPatrialData()
  });
}
function _h(r) {
  const e = r.length > 1;
  return Q({
    queryKey: ["search-product", r],
    queryFn: () => ae.getInstance().getProductsPatrialDataById(r),
    enabled: e
  });
}
function Eh(r) {
  const e = r.length > 1;
  return Q({
    queryKey: ["search-product", r],
    queryFn: () => ae.getInstance().searchProductDataByQuery(r),
    enabled: e
  });
}
function Sh(r) {
  const e = r.length > 1;
  return Q({
    queryKey: ["search-product-all-data", r],
    queryFn: () => ae.getInstance().searchProductAllDataByQuery(r),
    enabled: e
  });
}
function Th() {
  return Q({
    queryKey: ["get-packaging-material-partial-data"],
    queryFn: () => ae.getInstance().getPackagingMaterialPatrialData()
  });
}
function wh() {
  return Q({
    queryKey: ["get-farmers-partial-data"],
    queryFn: () => ae.getInstance().getFarmersPatrialData()
  });
}
function Rh(r, e) {
  const t = r.length > 1 && e === "farmer";
  return Q({
    queryKey: ["search-farmer", r, e],
    queryFn: () => ae.getInstance().getFarmersPatrialDataById(r),
    enabled: t
  });
}
function Ch(r) {
  const e = r.length > 1;
  return Q({
    queryKey: ["search-farmer", r],
    queryFn: () => ae.getInstance().searchFarmerDataByQuery(r),
    enabled: e
  });
}
function Ah() {
  return Q({
    queryKey: ["get-vendors-partial-data"],
    queryFn: () => ae.getInstance().getVendorsPatrialData()
  });
}
function Oh(r, e) {
  const t = r.length > 1 && e === "vendor";
  return Q({
    queryKey: ["search-vendor", r, e],
    queryFn: () => ae.getInstance().getVendorsPatrialDataById(r),
    enabled: t
  });
}
function Nh(r) {
  const e = r.length > 1;
  return Q({
    queryKey: ["search-vendor", r],
    queryFn: () => ae.getInstance().searchVendorDataByQuery(r),
    enabled: e
  });
}
function kh(r) {
  return Q({
    queryKey: ["get-customers-partial-data", r],
    queryFn: () => ae.getInstance().getCustomerPatrialData(r),
    enabled: !!r
  });
}
function xh() {
  return Q({
    queryKey: ["get-customer-names"],
    queryFn: () => ae.getInstance().getAllCustomerNames()
  });
}
function Ph() {
  return Q({
    queryKey: ["get-uom-partial-data"],
    queryFn: () => ae.getInstance().getUOMPartialData()
  });
}
function Dh() {
  return Q({
    queryKey: ["get-branches-partial-data"],
    queryFn: () => ae.getInstance().getBranchPartialData()
  });
}
function Fh() {
  return Q({
    queryKey: ["get-offices-partial-data"],
    queryFn: () => ae.getInstance().getOfficePartialData()
  });
}
function Ih() {
  return Q({
    queryKey: ["get-rfpa-nums"],
    queryFn: () => ae.getInstance().getRFPANums()
  });
}
function Lh() {
  return Q({
    queryKey: ["get-grn-nums"],
    queryFn: () => ae.getInstance().getGRNNums()
  });
}
function qh() {
  return Q({
    queryKey: ["get-deal-slip-nums"],
    queryFn: () => ae.getInstance().getDealSlipNums()
  });
}
function $h() {
  return Q({
    queryKey: ["get-delivery-challan-nums"],
    queryFn: () => ae.getInstance().getDeliveryChallanNums()
  });
}
function Bh(r) {
  return Q({
    queryKey: ["get-all-stock", r],
    queryFn: () => Dr.getInstance().getAllStock(r)
  });
}
function Mh(r) {
  return Q({
    queryKey: ["get-stock-global", r],
    queryFn: () => Dr.getInstance().getStockGlobal(r)
  });
}
function jh(r, e, t) {
  return Q({
    queryKey: ["get-stock-location-wise", r, e, t],
    queryFn: () => Dr.getInstance().getStockLocationWise(r, e, t)
  });
}
function Uh(r, e, t, n) {
  return Q({
    queryKey: ["get-stock-product-wise", r, e, t, n],
    queryFn: () => Dr.getInstance().getStockProductWise(r, e, t, n)
  });
}
function Vh(r) {
  const e = r.length > 1;
  return Q({
    queryKey: ["get-stock-by-id", r],
    queryFn: () => Dr.getInstance().getStockDetailById(r),
    enabled: e
  });
}
const Gh = (r) => Q({
  queryKey: ["vendor-purchase-data", r],
  queryFn: () => Qs.getInstance().getPurchaseDataByVendor(r),
  enabled: !!r
}), zh = (r) => Q({
  queryKey: ["farmer-purchase-data", r],
  queryFn: () => Qs.getInstance().getPurchaseDataByFarmer(r),
  enabled: !!r
}), Hh = (r) => Q({
  queryKey: ["product-purchase-data", r],
  queryFn: () => Qs.getInstance().getPurchaseDataByProduct(r),
  enabled: !!r
}), Wh = (r) => {
  if (r === 0) return "Zero Rupees";
  const e = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ], t = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"], n = ["", "Thousand", "Lakh", "Crore"], s = (l) => {
    let h = "";
    return l >= 100 && (h += e[Math.floor(l / 100)] + " Hundred ", l %= 100), l >= 20 && (h += t[Math.floor(l / 10)] + " ", l %= 10), l > 0 && (h += e[l] + " "), h.trim();
  }, i = [];
  for (i.push(r % 1e3), r = Math.floor(r / 1e3); r > 0; )
    i.push(r % 100), r = Math.floor(r / 100);
  let o = "", u = 0;
  for (; i.length > 0; ) {
    const l = i.shift();
    if (l > 0) {
      const h = s(l);
      u > 0 ? o = `${h} ${n[u]} ${o}`.trim() : o = `${h} ${o}`.trim();
    }
    u++;
  }
  return o + " Rupees";
}, Kc = (r, e, t = "") => {
  Object.keys(e).forEach((n) => {
    const s = e[n], i = t ? `${t}[${n}]` : n;
    s !== null && (s instanceof File ? r.append(i, s) : typeof s == "object" && s !== null && !(s instanceof Date) ? Kc(r, s, i) : typeof s == "string" ? s.trim().length > 0 && r.append(i, s.trim().toLowerCase()) : s !== void 0 && r.append(i, s.toString()));
  });
};
function Kh(r, e, t) {
  return r.map((n) => ({
    value: String(n[e]),
    label: String(n[t])
  }));
}
const Yh = () => {
  const r = /* @__PURE__ */ new Date();
  return `${r.getFullYear()}-${(r.getMonth() + 1).toString().padStart(2, "0")}-${r.getDate().toString().padStart(2, "0")}`;
}, Jh = (r, e) => {
  let t;
  return (...n) => {
    clearTimeout(t), t = setTimeout(() => r(...n), e);
  };
}, Sr = (r) => r.toLowerCase().split(" ").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
function Qh(r, e) {
  if (r) {
    const t = Object.entries(r).filter(([n, s]) => s != null && s !== "").map(
      ([n, s]) => `${encodeURIComponent(n)}=${encodeURIComponent(s)}`
    ).join("&");
    return t ? `${e}?${t}` : e;
  } else
    return "";
}
const Xh = (r) => {
  const e = [];
  return r ? (r.address1 && e.push(Sr(r.address1)), r.address2 && e.push(Sr(r.address2)), r.location && e.push(Sr(r.location)), r.city && e.push(Sr(r.city)), r.state && e.push(Sr(r.state)), r.pincode && e.push(r.pincode), e.join(", ")) : "";
}, Zh = (r, e) => e !== null && r !== null ? e == null ? void 0 : e.find((t) => t.id === r) : null, ed = (r) => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(r))
    return r;
  const t = r.split("-");
  if (t.length !== 3)
    return "Invalid date format";
  const n = t[0], s = t[1], i = t[2];
  return isNaN(Number(n)) || isNaN(Number(s)) || isNaN(Number(i)) || Number(n) < 1 || Number(n) > 31 || Number(s) < 1 || Number(s) > 12 || Number(i) < 1e3 || Number(i) > 9999 ? "Invalid date format" : `${i}-${s}-${n}`;
}, td = (r, e) => e !== null && r !== null ? e == null ? void 0 : e.find((t) => t.id === r) : null;
function rd(r = 135, e, t = 20) {
  const n = e.startsWith("#") ? e.slice(1) : e;
  if (n.length > 6 && n.length < 3)
    throw new Error("Invalid hex color code. Must be 3 or 6 characters.");
  let s = n;
  n.length === 3 && (s = n.split("").map((m) => m + m).join(""));
  let i = parseInt(s.substring(0, 2), 16), o = parseInt(s.substring(2, 4), 16), u = parseInt(s.substring(4, 6), 16);
  const l = Math.round(2.55 * t);
  i = Math.min(255, i + l), o = Math.min(255, o + l), u = Math.min(255, u + l);
  const h = (m) => `0${m.toString(16)}`.slice(-2), d = `#${h(i)}${h(o)}${h(u)}`;
  return `linear-gradient(${r}deg, ${e} 40%, ${d})`;
}
const nd = (r) => {
  try {
    if (r) {
      const e = document.createElement("a");
      e.href = r, e.download = "document.pdf", document.body.appendChild(e), e.click(), document.body.removeChild(e);
    } else
      console.log("No PDF URL found in the response");
  } catch (e) {
    console.log(e);
  }
}, sd = (r) => {
  r.key === "Enter" && r.target.tagName !== "TEXTAREA" && r.preventDefault();
}, id = (r) => {
  const e = r !== null ? r.toLowerCase() : r;
  return e === "verified" ? "#6A00FF" : e === "approved" ? "#40bf40" : e === "finalizing" ? "#0063B1" : e === "reject" ? "#AF0606" : e === "complete" ? "#006600" : "#FF5700";
}, ad = (r) => {
  const e = r.startsWith("#") ? r.slice(1) : r;
  if (!/^[0-9A-Fa-f]{6}$/.test(e))
    return console.error("Invalid hex color code provided."), r;
  let t = parseInt(e.substring(0, 2), 16), n = parseInt(e.substring(2, 4), 16), s = parseInt(e.substring(4, 6), 16);
  const i = 0.85;
  t = Math.min(255, t + (255 - t) * i), n = Math.min(255, n + (255 - n) * i), s = Math.min(255, s + (255 - s) * i);
  const o = (u) => {
    const l = Math.round(u).toString(16);
    return l.length === 1 ? "0" + l : l;
  };
  return `#${o(t)}${o(n)}${o(s)}`;
}, od = {
  customerFormTabs: ["Empanelment", "Key Mobile No", "References", "Billing Details", "Delivery Details", "Statutory Details", "Bank Details", "Product Specification", "Payment Terms", "Office Use Only"],
  vendorFormTabs: ["Primary Details", "Other Details", "Sales Contact Details", "Bank Details", "References"],
  farmerFormTabs: ["Farmer Details", "Farm Details", "Crop Details", "Images"],
  accTypes: [
    { value: "savings", label: "Savings" },
    { value: "current", label: "Current" },
    { value: "cash credit", label: "Cash Credit" },
    { value: "over draft account", label: "Over Draft Account" },
    { value: "other", label: "Other" }
  ],
  inFnVBusiness: [
    { value: "less than 1 year", label: "Less than 1 year" },
    { value: "less than 3 year", label: "Less than 3 year" },
    { value: "less than 5 year", label: "Less than 5 year" },
    { value: "more than 5 year", label: "More than 5 year" },
    { value: "more than 10 year", label: "More than 10 year" },
    { value: "more than 15 year", label: "More than 15 year" }
  ],
  fileYesOrNo: [
    { value: !0, label: "Yes" },
    { value: !1, label: "No" }
  ],
  proposedPaymentTerms: [
    { value: "after unloading", label: "After Unloading" },
    { value: "after loading", label: "After Loading" },
    { value: "between 3 to 5 days", label: "Between 3 to 5 Days" },
    { value: "1 week", label: "1 Week" },
    { value: "15 days", label: "15 Days" }
  ],
  creditTerms: [
    { value: "5/10 net 30", label: "5/10 net 30" },
    { value: "3/15 net 60", label: "3/15 net 60" },
    { value: "2/20 net 90", label: "2/20 net 90" },
    { value: "EOM", label: "EOM" }
  ],
  gender: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" }
  ],
  landHoldingStatus: [
    { value: "owned", label: "Owned" },
    { value: "leased", label: "Leased" },
    { value: "shared", label: "Shared" },
    { value: "encumbered", label: "Encumbered" }
  ],
  landStatus: [
    { value: "cultivable", label: "Cultivable" },
    { value: "fallow", label: "Fallow" },
    { value: "irrigated", label: "Irrigated" },
    { value: "non-irrigated", label: "Non-Irrigated" }
  ],
  organizationType: [
    { value: "proprietor", label: "Proprietor" },
    { value: "partnership", label: "Partnership" },
    { value: "private ltd.", label: "Private Ltd." },
    { value: "llc", label: "LLC" },
    { value: "public ltd.", label: "Public Ltd." },
    { value: "other", label: "Other" }
  ],
  certificationDetails: [
    { value: "iso", label: "ISO" },
    { value: "apeda", label: "APEDA" },
    { value: "fssai", label: "FSSAI" },
    { value: "other", label: "Other" }
  ],
  corporateRegistrationDetails: [
    { value: "msme", label: "MSME" },
    { value: "other", label: "Other" }
  ],
  paymentToBeMade: [
    { value: "advance", label: "Advance" },
    { value: "against delivery", label: "Against delivery" },
    { value: "50% advance", label: "50% advance" },
    { value: "other", label: "Other" }
  ],
  paymentMode: [
    { value: "cheque", label: "Cheque" },
    { value: "demand draft", label: "Demand Draft" },
    { value: "neft", label: "NEFT" },
    { value: "rtgs", label: "RTGS" },
    { value: "other", label: "Other" }
  ],
  creditWorthinessDue: [
    { value: "6 Months", label: "6 Months" },
    { value: "12 Months", label: "12 Months" }
  ]
}, ud = {
  //Dashboard
  DASHBOARD: "/dashboard",
  ALL_NOTIFICATIONS: "/all-notifications",
  //Stock
  GET_ALL_STOCK: "/get-all/main-stock",
  GET_STOCK_BY_LOCATION: "/get-stock",
  GET_STOCK_BY_PRODUCT: "/get-stock/product",
  GET_STOCK_BY_ID: "/get/stock-details",
  //Registeration
  CREATE_CUSTOMER: "/create/customers",
  CREATE_VENDOR: "/create/vendor",
  CREATE_FARMER: "/create/farmer",
  CREATE_PRODUCT: "/create/product",
  //Delivery Challan
  CREATE_DELIVERY_CHALLAN: "/create/delivery-challan",
  UPDATE_DELIVERY_CHALLAN: "/create/delivery-challan",
  VIEW_ALL_DELIVERY_CHALLAN: "/create/delivery-challan",
  VIEW_DELIVERY_CHALLAN: "/create/delivery-challan",
  //GRN
  CREATE_GRN: "/create/goods-received-note",
  UPDATE_GRN: "/create/goods-received-note",
  VIEW_ALL_GRN: "/create/goods-received-note",
  VIEW_GRN: "/create/goods-received-note"
}, Ke = {
  address1: null,
  address2: null,
  location: null,
  city: null,
  state: null,
  pincode: null
}, Yc = {
  contactFName: null,
  contactMName: null,
  contactLName: null,
  directContactNumber: null,
  mobileNumber: null,
  email: null
}, Jc = {
  beneficiaryFName: null,
  beneficiaryMName: null,
  beneficiaryLName: null,
  bankName: null,
  branchAddress: Ke,
  typeOfAcc: null,
  ifscCode: null,
  swiftNo: null,
  invoiceCurrency: null,
  cancelledChequeCopy: null
}, ld = {
  companyName: null,
  category: null,
  subcategory: null,
  inFandVBusinessSince: null,
  dateOfIncorporation: null,
  officeAddress: Ke,
  officeContactNo: null,
  officeEmail: null,
  website: null,
  //Other Details
  mainProduct: null,
  listOfAllProducts: [],
  dispatchCenter: null,
  warehouseLocations: null,
  packingCenterLocation: null,
  ifGstnCopy: !1,
  gstn: null,
  gstnCopy: null,
  ifPanCardCopy: !1,
  panNo: null,
  panCardCopy: null,
  ifMsmeCopy: !1,
  msmeNo: null,
  msmeCopy: null,
  tradeLicenseNumber: null,
  proposedPaymentTerms: null,
  creditTerms: null,
  anyDetailsTeamAndInfra: null,
  //Vendor Sales Contact
  vendorSaleInfo: Yc,
  //Vendor Bank Details
  vendorBankDetails: Jc,
  //Vendor References
  ref1FName: null,
  ref1MName: null,
  ref1LName: null,
  ref1PrimaryCNumb: null,
  ref1AltrCNumb: null,
  ref1Address: Ke,
  ref1Email: null,
  ref2FName: null,
  ref2MName: null,
  ref2LName: null,
  ref2PrimaryCNumb: null,
  ref2AltrCNumb: null,
  ref2Address: Ke,
  ref2Email: null
}, Qc = {
  crop: null,
  variety: null,
  noOfPlants: null,
  pruningDate: null,
  expectedHarvestDate: null,
  expectedQuantityInTonnes: null
}, cd = {
  //Farmer Details
  farmerfName: null,
  farmermName: null,
  farmerlName: null,
  residensialAddress: Ke,
  primaryMobileNo: null,
  secondaryMobileNo: null,
  email: null,
  gender: null,
  dob: null,
  idProofNo: null,
  idProofCopy: null,
  howDoYouSell: null,
  //Farm Details
  landHoldingStatus: null,
  landStatus: null,
  farmAddress: Ke,
  totalLandArea: null,
  cultivationArea: null,
  sevenTwelveNo: null,
  sevenTwelveCopy: null,
  farmerPhoto: null,
  farmPhoto: null,
  crops: [Qc],
  dateOfVisit: null,
  registerBy: null,
  registerDate: null
}, Xc = {
  accDeptFName: null,
  accDeptMName: null,
  accDeptLName: null,
  accDeptMobileNo: null,
  ownerFName: null,
  ownerMName: null,
  ownerLName: null,
  ownerMobileNo: null,
  mandiLicenceNo: null,
  mandiLicenceCopy: null,
  regiNo: null,
  regiCopy: null,
  electricityBill: null,
  consumenrNo: null,
  electricityBillCopy: null,
  notElectricityBillReason: null,
  customerBlacklisted: null,
  ifBlacklistedReason: null,
  blackListedBy: null,
  visitingCard: null,
  visitinContactNo: null,
  visitingCardCopy: null,
  notVisitingCardReason: null,
  ref1FName: null,
  ref1MName: null,
  ref1LName: null,
  ref1Address: Ke,
  ref1ContactNo: null,
  ref1Email: null,
  ref2FName: null,
  ref2MName: null,
  ref2LName: null,
  ref2Address: Ke,
  ref2ContactNo: null,
  ref2Email: null
}, Zc = {
  billingName: null,
  contactPersonFName: null,
  contactPersonMName: null,
  contactPersonLName: null,
  commonlyKnownAs: null,
  billingAddress: Ke,
  billingAddressProofCopy: null,
  primaryContactNo: null,
  secondaryContactNo: null,
  emailPrimary: null,
  emailSecondary: null,
  billingFormatCopy: null
}, ef = {
  deliveryAddress: Ke,
  deliveryAddressProofCopy: null,
  deliveryTime: null,
  receivingPersonFName: null,
  receivingPersonMName: null,
  receivingPersonLName: null,
  primaryContactNo: null,
  secondaryContactNo: null,
  emailPrimary: null,
  emailSecondary: null
}, tf = {
  panNo: null,
  panCopy: null,
  aadharNo: null,
  aadharCopy: null,
  gstn: null,
  regiCertificateCopy: null,
  billBookCopy: null,
  certificationsDetails: null,
  otherCertifications: null,
  corpRegiDetails: null,
  otherCorpRegiDetails: null,
  incorpoCertificateCopy: null,
  cinNo: null
}, rf = {
  ifCancelledCheque: null,
  notCancelledChequeReason: null,
  cancelledChequeCopy: null,
  accType: null,
  otherAccType: null,
  bankStatementCopy: null,
  bankAccHolderFName: null,
  bankAccHolderMName: null,
  bankAccHolderLName: null,
  bankName: null,
  bankBranch: null,
  bankAccNo: null,
  ifscCode: null,
  bankAddress: Ke
}, nf = {
  articleName: null,
  specifications: null,
  parameters: null,
  packingMaterialSpec: null,
  rejectionCriteria: null,
  comment: null
}, sf = {
  paymentMade: null,
  otherPaymentMade: null,
  paymentMode: null,
  otherPaymentMode: null,
  marginDeposit: null,
  rtv: null,
  agreementExecuted: null,
  lc: null,
  bg: null,
  securityDepoCheqNo: null,
  securityDepoAmt: 0,
  IELinAmt: 0,
  IELRecommendedBy: null,
  IELRecommendedDate: null,
  RELinAmt: 0,
  RELRecommendedBy: null,
  RELRecommendedDate: null,
  reason: null,
  docEvidenceCopy: null
}, af = {
  proposerBDName: null,
  pflCoordinator: null,
  recommendedBy: null,
  dispatchLocationPfl: null,
  approvedBy: null,
  relationshipManager: null,
  avgBillingMonthly: 0,
  volumeMonthly: 0,
  customerVerification: null,
  verificationAgency: null,
  validityPeriod: null,
  dueDiligenceDone: null,
  creditWorthinessDue: null,
  keyAccountPersonAssigned: null,
  sinceWhen: null,
  ledgerCreatedDate: null,
  ledgerCreatedBy: null,
  ledgerVerifiedApprovedBy: null,
  additionalNotes: null
}, fd = {
  organisationName: null,
  customerTypes: null,
  customerCategory: null,
  organisationType: null,
  otherType: null,
  customerAddress: Ke,
  primaryContactNo: null,
  secondaryContactNo: null,
  emailPrimary: null,
  emailSecondary: null,
  keyMobileNumbers: Xc,
  billingDetails: Zc,
  deliveryDetails: ef,
  statutoryDetails: tf,
  bankDetails: rf,
  productSpecification: [nf],
  paymentTerms: sf,
  officeUseOnly: af
}, hd = {
  name: null,
  prefix: null,
  brand: null,
  classification: null,
  category: null,
  subcategory: null,
  description: null,
  productOrigin: [],
  variety: [],
  count: [],
  size: [],
  uom: null,
  packingType: null,
  shelfLife: null,
  storageTemp: null,
  qualityParameters: [{ name: "", type: "good" }],
  image: null
};
function zt(r) {
  this._maxSize = r, this.clear();
}
zt.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
zt.prototype.get = function(r) {
  return this._values[r];
};
zt.prototype.set = function(r, e) {
  return this._size >= this._maxSize && this.clear(), r in this._values || this._size++, this._values[r] = e;
};
var of = /[^.^\]^[]+|(?=\[\]|\.\.)/g, uo = /^\d+$/, uf = /^\d/, lf = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, cf = /^\s*(['"]?)(.*?)(\1)\s*$/, ni = 512, ca = new zt(ni), fa = new zt(ni), ha = new zt(ni), Vt = {
  Cache: zt,
  split: $s,
  normalizePath: cs,
  setter: function(r) {
    var e = cs(r);
    return fa.get(r) || fa.set(r, function(n, s) {
      for (var i = 0, o = e.length, u = n; i < o - 1; ) {
        var l = e[i];
        if (l === "__proto__" || l === "constructor" || l === "prototype")
          return n;
        u = u[e[i++]];
      }
      u[e[i]] = s;
    });
  },
  getter: function(r, e) {
    var t = cs(r);
    return ha.get(r) || ha.set(r, function(s) {
      for (var i = 0, o = t.length; i < o; )
        if (s != null || !e) s = s[t[i++]];
        else return;
      return s;
    });
  },
  join: function(r) {
    return r.reduce(function(e, t) {
      return e + (si(t) || uo.test(t) ? "[" + t + "]" : (e ? "." : "") + t);
    }, "");
  },
  forEach: function(r, e, t) {
    ff(Array.isArray(r) ? r : $s(r), e, t);
  }
};
function cs(r) {
  return ca.get(r) || ca.set(
    r,
    $s(r).map(function(e) {
      return e.replace(cf, "$2");
    })
  );
}
function $s(r) {
  return r.match(of) || [""];
}
function ff(r, e, t) {
  var n = r.length, s, i, o, u;
  for (i = 0; i < n; i++)
    s = r[i], s && (pf(s) && (s = '"' + s + '"'), u = si(s), o = !u && /^\d+$/.test(s), e.call(t, s, u, o, i, r));
}
function si(r) {
  return typeof r == "string" && r && ["'", '"'].indexOf(r.charAt(0)) !== -1;
}
function hf(r) {
  return r.match(uf) && !r.match(uo);
}
function df(r) {
  return lf.test(r);
}
function pf(r) {
  return !si(r) && (hf(r) || df(r));
}
const mf = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, kn = (r) => r.match(mf) || [], xn = (r) => r[0].toUpperCase() + r.slice(1), ii = (r, e) => kn(r).join(e).toLowerCase(), lo = (r) => kn(r).reduce(
  (e, t) => `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`,
  ""
), yf = (r) => xn(lo(r)), gf = (r) => ii(r, "_"), bf = (r) => ii(r, "-"), vf = (r) => xn(ii(r, " ")), _f = (r) => kn(r).map(xn).join(" ");
var fs = {
  words: kn,
  upperFirst: xn,
  camelCase: lo,
  pascalCase: yf,
  snakeCase: gf,
  kebabCase: bf,
  sentenceCase: vf,
  titleCase: _f
}, ai = { exports: {} };
ai.exports = function(r) {
  return co(Ef(r), r);
};
ai.exports.array = co;
function co(r, e) {
  var t = r.length, n = new Array(t), s = {}, i = t, o = Sf(e), u = Tf(r);
  for (e.forEach(function(h) {
    if (!u.has(h[0]) || !u.has(h[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); i--; )
    s[i] || l(r[i], i, /* @__PURE__ */ new Set());
  return n;
  function l(h, d, m) {
    if (m.has(h)) {
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
      var A = o.get(h) || /* @__PURE__ */ new Set();
      if (A = Array.from(A), d = A.length) {
        m.add(h);
        do {
          var C = A[--d];
          l(C, u.get(C), m);
        } while (d);
        m.delete(h);
      }
      n[--t] = h;
    }
  }
}
function Ef(r) {
  for (var e = /* @__PURE__ */ new Set(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.add(s[0]), e.add(s[1]);
  }
  return Array.from(e);
}
function Sf(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.has(s[0]) || e.set(s[0], /* @__PURE__ */ new Set()), e.has(s[1]) || e.set(s[1], /* @__PURE__ */ new Set()), e.get(s[0]).add(s[1]);
  }
  return e;
}
function Tf(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++)
    e.set(r[t], t);
  return e;
}
var wf = ai.exports;
const Rf = /* @__PURE__ */ uu(wf), Cf = Object.prototype.toString, Af = Error.prototype.toString, Of = RegExp.prototype.toString, Nf = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", kf = /^Symbol\((.*)\)(.*)$/;
function xf(r) {
  return r != +r ? "NaN" : r === 0 && 1 / r < 0 ? "-0" : "" + r;
}
function da(r, e = !1) {
  if (r == null || r === !0 || r === !1) return "" + r;
  const t = typeof r;
  if (t === "number") return xf(r);
  if (t === "string") return e ? `"${r}"` : r;
  if (t === "function") return "[Function " + (r.name || "anonymous") + "]";
  if (t === "symbol") return Nf.call(r).replace(kf, "Symbol($1)");
  const n = Cf.call(r).slice(8, -1);
  return n === "Date" ? isNaN(r.getTime()) ? "" + r : r.toISOString(r) : n === "Error" || r instanceof Error ? "[" + Af.call(r) + "]" : n === "RegExp" ? Of.call(r) : null;
}
function ht(r, e) {
  let t = da(r, e);
  return t !== null ? t : JSON.stringify(r, function(n, s) {
    let i = da(this[n], e);
    return i !== null ? i : s;
  }, 2);
}
function fo(r) {
  return r == null ? [] : [].concat(r);
}
let ho, po, mo, Pf = /\$\{\s*(\w+)\s*\}/g;
ho = Symbol.toStringTag;
class pa {
  constructor(e, t, n, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[ho] = "Error", this.name = "ValidationError", this.value = t, this.path = n, this.type = s, this.errors = [], this.inner = [], fo(e).forEach((i) => {
      if (Ue.isError(i)) {
        this.errors.push(...i.errors);
        const o = i.inner.length ? i.inner : [i];
        this.inner.push(...o);
      } else
        this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
po = Symbol.hasInstance;
mo = Symbol.toStringTag;
class Ue extends Error {
  static formatError(e, t) {
    const n = t.label || t.path || "this";
    return n !== t.path && (t = Object.assign({}, t, {
      path: n
    })), typeof e == "string" ? e.replace(Pf, (s, i) => ht(t[i])) : typeof e == "function" ? e(t) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, n, s, i) {
    const o = new pa(e, t, n, s);
    if (i)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[mo] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Ue);
  }
  static [po](e) {
    return pa[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let tt = {
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
    const s = n != null && n !== t ? ` (cast from the value \`${ht(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${r} must be a \`${e}\` type, but the final value was: \`${ht(t, !0)}\`` + s : `${r} must match the configured type. The validated value was: \`${ht(t, !0)}\`` + s;
  }
}, Be = {
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
}, _t = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Bs = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Ms = {
  isValue: "${path} field must be ${value}"
}, js = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, pn = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Df = {
  notType: (r) => {
    const {
      path: e,
      value: t,
      spec: n
    } = r, s = n.types.length;
    if (Array.isArray(t)) {
      if (t.length < s) return `${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${ht(t, !0)}\``;
      if (t.length > s) return `${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${ht(t, !0)}\``;
    }
    return Ue.formatError(tt.notType, r);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: tt,
  string: Be,
  number: _t,
  date: Bs,
  object: js,
  array: pn,
  boolean: Ms,
  tuple: Df
});
const Pn = (r) => r && r.__isYupSchema__;
class vn {
  static fromOptions(e, t) {
    if (!t.then && !t.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: s,
      otherwise: i
    } = t, o = typeof n == "function" ? n : (...u) => u.every((l) => l === n);
    return new vn(e, (u, l) => {
      var h;
      let d = o(...u) ? s : i;
      return (h = d == null ? void 0 : d(l)) != null ? h : l;
    });
  }
  constructor(e, t) {
    this.fn = void 0, this.refs = e, this.refs = e, this.fn = t;
  }
  resolve(e, t) {
    let n = this.refs.map((i) => (
      // TODO: ? operator here?
      i.getValue(t == null ? void 0 : t.value, t == null ? void 0 : t.parent, t == null ? void 0 : t.context)
    )), s = this.fn(n, e, t);
    if (s === void 0 || // @ts-ignore this can be base
    s === e)
      return e;
    if (!Pn(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(t);
  }
}
const nn = {
  context: "$",
  value: "."
};
class Ht {
  constructor(e, t = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === nn.context, this.isValue = this.key[0] === nn.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? nn.context : this.isValue ? nn.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Vt.getter(this.path, !0), this.map = t.map;
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
Ht.prototype.__isYupRef = !0;
const Qe = (r) => r == null;
function er(r) {
  function e({
    value: t,
    path: n = "",
    options: s,
    originalValue: i,
    schema: o
  }, u, l) {
    const {
      name: h,
      test: d,
      params: m,
      message: O,
      skipAbsent: A
    } = r;
    let {
      parent: C,
      context: k,
      abortEarly: T = o.spec.abortEarly,
      disableStackTrace: q = o.spec.disableStackTrace
    } = s;
    function P(te) {
      return Ht.isRef(te) ? te.getValue(t, C, k) : te;
    }
    function K(te = {}) {
      const Ee = Object.assign({
        value: t,
        originalValue: i,
        label: o.spec.label,
        path: te.path || n,
        spec: o.spec,
        disableStackTrace: te.disableStackTrace || q
      }, m, te.params);
      for (const Pe of Object.keys(Ee)) Ee[Pe] = P(Ee[Pe]);
      const pe = new Ue(Ue.formatError(te.message || O, Ee), t, Ee.path, te.type || h, Ee.disableStackTrace);
      return pe.params = Ee, pe;
    }
    const ne = T ? u : l;
    let $ = {
      path: n,
      parent: C,
      type: h,
      from: s.from,
      createError: K,
      resolve: P,
      options: s,
      originalValue: i,
      schema: o
    };
    const ee = (te) => {
      Ue.isError(te) ? ne(te) : te ? l(null) : ne(K());
    }, _e = (te) => {
      Ue.isError(te) ? ne(te) : u(te);
    };
    if (A && Qe(t))
      return ee(!0);
    let Ne;
    try {
      var ge;
      if (Ne = d.call($, t, $), typeof ((ge = Ne) == null ? void 0 : ge.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${$.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(Ne).then(ee, _e);
      }
    } catch (te) {
      _e(te);
      return;
    }
    ee(Ne);
  }
  return e.OPTIONS = r, e;
}
function Ff(r, e, t, n = t) {
  let s, i, o;
  return e ? (Vt.forEach(e, (u, l, h) => {
    let d = l ? u.slice(1, u.length - 1) : u;
    r = r.resolve({
      context: n,
      parent: s,
      value: t
    });
    let m = r.type === "tuple", O = h ? parseInt(d, 10) : 0;
    if (r.innerType || m) {
      if (m && !h) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (t && O >= t.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);
      s = t, t = t && t[O], r = m ? r.spec.types[O] : r.innerType;
    }
    if (!h) {
      if (!r.fields || !r.fields[d]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${r.type}")`);
      s = t, t = t && t[d], r = r.fields[d];
    }
    i = d, o = l ? "[" + u + "]" : "." + u;
  }), {
    schema: r,
    parent: s,
    parentPath: i
  }) : {
    parent: s,
    parentPath: e,
    schema: r
  };
}
class _n extends Set {
  describe() {
    const e = [];
    for (const t of this.values())
      e.push(Ht.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const n of this.values())
      t.push(e(n));
    return t;
  }
  clone() {
    return new _n(this.values());
  }
  merge(e, t) {
    const n = this.clone();
    return e.forEach((s) => n.add(s)), t.forEach((s) => n.delete(s)), n;
  }
}
function tr(r, e = /* @__PURE__ */ new Map()) {
  if (Pn(r) || !r || typeof r != "object") return r;
  if (e.has(r)) return e.get(r);
  let t;
  if (r instanceof Date)
    t = new Date(r.getTime()), e.set(r, t);
  else if (r instanceof RegExp)
    t = new RegExp(r), e.set(r, t);
  else if (Array.isArray(r)) {
    t = new Array(r.length), e.set(r, t);
    for (let n = 0; n < r.length; n++) t[n] = tr(r[n], e);
  } else if (r instanceof Map) {
    t = /* @__PURE__ */ new Map(), e.set(r, t);
    for (const [n, s] of r.entries()) t.set(n, tr(s, e));
  } else if (r instanceof Set) {
    t = /* @__PURE__ */ new Set(), e.set(r, t);
    for (const n of r) t.add(tr(n, e));
  } else if (r instanceof Object) {
    t = {}, e.set(r, t);
    for (const [n, s] of Object.entries(r)) t[n] = tr(s, e);
  } else
    throw Error(`Unable to clone ${r}`);
  return t;
}
class ze {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new _n(), this._blacklist = new _n(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(tt.notType);
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
    return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = tr(Object.assign({}, this.spec, e)), t;
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
    return n.spec = s, n.internalTests = Object.assign({}, t.internalTests, n.internalTests), n._whitelist = t._whitelist.merge(e._whitelist, e._blacklist), n._blacklist = t._blacklist.merge(e._blacklist, e._whitelist), n.tests = t.tests, n.exclusiveTests = t.exclusiveTests, n.withMutation((i) => {
      e.tests.forEach((o) => {
        i.test(o.OPTIONS);
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
      t = t.clone(), t.conditions = [], t = n.reduce((s, i) => i.resolve(s, e), t), t = t.resolve(e);
    }
    return t;
  }
  resolveOptions(e) {
    var t, n, s, i;
    return Object.assign({}, e, {
      from: e.from || [],
      strict: (t = e.strict) != null ? t : this.spec.strict,
      abortEarly: (n = e.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (s = e.recursive) != null ? s : this.spec.recursive,
      disableStackTrace: (i = e.disableStackTrace) != null ? i : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(e, t = {}) {
    let n = this.resolve(Object.assign({
      value: e
    }, t)), s = t.assert === "ignore-optionality", i = n._cast(e, t);
    if (t.assert !== !1 && !n.isType(i)) {
      if (s && Qe(i))
        return i;
      let o = ht(e), u = ht(i);
      throw new TypeError(`The value of ${t.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
` + (u !== o ? `result of cast: ${u}` : ""));
    }
    return i;
  }
  _cast(e, t) {
    let n = e === void 0 ? e : this.transforms.reduce((s, i) => i.call(this, s, e, this), e);
    return n === void 0 && (n = this.getDefault(t)), n;
  }
  _validate(e, t = {}, n, s) {
    let {
      path: i,
      originalValue: o = e,
      strict: u = this.spec.strict
    } = t, l = e;
    u || (l = this._cast(l, Object.assign({
      assert: !1
    }, t)));
    let h = [];
    for (let d of Object.values(this.internalTests))
      d && h.push(d);
    this.runTests({
      path: i,
      value: l,
      originalValue: o,
      options: t,
      tests: h
    }, n, (d) => {
      if (d.length)
        return s(d, l);
      this.runTests({
        path: i,
        value: l,
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
      tests: i,
      value: o,
      originalValue: u,
      path: l,
      options: h
    } = e, d = (k) => {
      s || (s = !0, t(k, o));
    }, m = (k) => {
      s || (s = !0, n(k, o));
    }, O = i.length, A = [];
    if (!O) return m([]);
    let C = {
      value: o,
      originalValue: u,
      path: l,
      options: h,
      schema: this
    };
    for (let k = 0; k < i.length; k++) {
      const T = i[k];
      T(C, d, function(P) {
        P && (Array.isArray(P) ? A.push(...P) : A.push(P)), --O <= 0 && m(A);
      });
    }
  }
  asNestedTest({
    key: e,
    index: t,
    parent: n,
    parentPath: s,
    originalParent: i,
    options: o
  }) {
    const u = e ?? t;
    if (u == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const l = typeof u == "number";
    let h = n[u];
    const d = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: h,
      originalValue: i[u],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [l ? "index" : "key"]: u,
      path: l || u.includes(".") ? `${s || ""}[${l ? u : `"${u}"`}]` : (s ? `${s}.` : "") + e
    });
    return (m, O, A) => this.resolve(d)._validate(h, d, O, A);
  }
  validate(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), i = (n = t == null ? void 0 : t.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return new Promise((o, u) => s._validate(e, t, (l, h) => {
      Ue.isError(l) && (l.value = h), u(l);
    }, (l, h) => {
      l.length ? u(new Ue(l, h, void 0, void 0, i)) : o(h);
    }));
  }
  validateSync(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), i, o = (n = t == null ? void 0 : t.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return s._validate(e, Object.assign({}, t, {
      sync: !0
    }), (u, l) => {
      throw Ue.isError(u) && (u.value = l), u;
    }, (u, l) => {
      if (u.length) throw new Ue(u, e, void 0, void 0, o);
      i = l;
    }), i;
  }
  isValid(e, t) {
    return this.validate(e, t).then(() => !0, (n) => {
      if (Ue.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (n) {
      if (Ue.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : tr(t);
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
    return n.internalTests.nullable = er({
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
    return n.internalTests.optionality = er({
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
  defined(e = tt.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = tt.notNull) {
    return this.nullability(!1, e);
  }
  required(e = tt.required) {
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
    }, t.message === void 0 && (t.message = tt.default), typeof t.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), s = er(t), i = t.exclusive || t.name && n.exclusiveTests[t.name] === !0;
    if (t.exclusive && !t.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return t.name && (n.exclusiveTests[t.name] = !!t.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === t.name && (i || o.OPTIONS.test === s.OPTIONS.test))), n.tests.push(s), n;
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
    let n = this.clone(), s = fo(e).map((i) => new Ht(i));
    return s.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(typeof t == "function" ? new vn(s, t) : vn.fromOptions(s, t)), n;
  }
  typeError(e) {
    let t = this.clone();
    return t.internalTests.typeError = er({
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
  oneOf(e, t = tt.oneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._whitelist.add(s), n._blacklist.delete(s);
    }), n.internalTests.whiteList = er({
      message: t,
      name: "oneOf",
      skipAbsent: !0,
      test(s) {
        let i = this.schema._whitelist, o = i.resolveAll(this.resolve);
        return o.includes(s) ? !0 : this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: o
          }
        });
      }
    }), n;
  }
  notOneOf(e, t = tt.notOneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._blacklist.add(s), n._whitelist.delete(s);
    }), n.internalTests.blacklist = er({
      message: t,
      name: "notOneOf",
      test(s) {
        let i = this.schema._blacklist, o = i.resolveAll(this.resolve);
        return o.includes(s) ? this.createError({
          params: {
            values: Array.from(i).join(", "),
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
      optional: i,
      nullable: o
    } = t.spec;
    return {
      meta: s,
      label: n,
      optional: i,
      nullable: o,
      default: t.getDefault(e),
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests.map((l) => ({
        name: l.OPTIONS.name,
        params: l.OPTIONS.params
      })).filter((l, h, d) => d.findIndex((m) => m.name === l.name) === h)
    };
  }
}
ze.prototype.__isYupSchema__ = !0;
for (const r of ["validate", "validateSync"]) ze.prototype[`${r}At`] = function(e, t, n = {}) {
  const {
    parent: s,
    parentPath: i,
    schema: o
  } = Ff(this, e, t, n.context);
  return o[r](s && s[i], Object.assign({}, n, {
    parent: s,
    path: e
  }));
};
for (const r of ["equals", "is"]) ze.prototype[r] = ze.prototype.oneOf;
for (const r of ["not", "nope"]) ze.prototype[r] = ze.prototype.notOneOf;
const If = () => !0;
function Oe(r) {
  return new yo(r);
}
class yo extends ze {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: If
    }, e));
  }
}
Oe.prototype = yo.prototype;
function st() {
  return new go();
}
class go extends ze {
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
  isTrue(e = Ms.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(t) {
        return Qe(t) || t === !0;
      }
    });
  }
  isFalse(e = Ms.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(t) {
        return Qe(t) || t === !1;
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
st.prototype = go.prototype;
const Lf = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function qf(r) {
  const e = Us(r);
  if (!e) return Date.parse ? Date.parse(r) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let t = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (t = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (t = 0 - t)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + t, e.second, e.millisecond);
}
function Us(r) {
  var e, t;
  const n = Lf.exec(r);
  return n ? {
    year: ct(n[1]),
    month: ct(n[2], 1) - 1,
    day: ct(n[3], 1),
    hour: ct(n[4]),
    minute: ct(n[5]),
    second: ct(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      ct(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (t = n[7]) == null ? void 0 : t.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: ct(n[10]),
    minuteOffset: ct(n[11])
  } : null;
}
function ct(r, e = 0) {
  return Number(r) || e;
}
let $f = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Bf = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Mf = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, jf = "^\\d{4}-\\d{2}-\\d{2}", Uf = "\\d{2}:\\d{2}:\\d{2}", Vf = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Gf = new RegExp(`${jf}T${Uf}(\\.\\d+)?${Vf}$`), zf = (r) => Qe(r) || r === r.trim(), Hf = {}.toString();
function p() {
  return new bo();
}
class bo extends ze {
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
        return s === Hf ? e : s;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((t) => t.test({
      message: e || tt.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((t) => t.OPTIONS.name !== "required"), e));
  }
  length(e, t = Be.length) {
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
  min(e, t = Be.min) {
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
  max(e, t = Be.max) {
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
    let n = !1, s, i;
    return t && (typeof t == "object" ? {
      excludeEmptyString: n = !1,
      message: s,
      name: i
    } = t : s = t), this.test({
      name: i || "matches",
      message: s || Be.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(e) !== -1
    });
  }
  email(e = Be.email) {
    return this.matches($f, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = Be.url) {
    return this.matches(Bf, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = Be.uuid) {
    return this.matches(Mf, {
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
    } = e : t = e), this.matches(Gf, {
      name: "datetime",
      message: t || Be.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: t || Be.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (i) => {
        if (!i || n) return !0;
        const o = Us(i);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: t || Be.datetime_precision,
      params: {
        precision: s
      },
      skipAbsent: !0,
      test: (i) => {
        if (!i || s == null) return !0;
        const o = Us(i);
        return o ? o.precision === s : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = Be.trim) {
    return this.transform((t) => t != null ? t.trim() : t).test({
      message: e,
      name: "trim",
      test: zf
    });
  }
  lowercase(e = Be.lowercase) {
    return this.transform((t) => Qe(t) ? t : t.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => Qe(t) || t === t.toLowerCase()
    });
  }
  uppercase(e = Be.uppercase) {
    return this.transform((t) => Qe(t) ? t : t.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => Qe(t) || t === t.toUpperCase()
    });
  }
}
p.prototype = bo.prototype;
let Wf = (r) => r != +r;
function nt() {
  return new vo();
}
class vo extends ze {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !Wf(e);
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
  min(e, t = _t.min) {
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
  max(e, t = _t.max) {
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
  lessThan(e, t = _t.lessThan) {
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
  moreThan(e, t = _t.moreThan) {
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
  positive(e = _t.positive) {
    return this.moreThan(0, e);
  }
  negative(e = _t.negative) {
    return this.lessThan(0, e);
  }
  integer(e = _t.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (t) => Number.isInteger(t)
    });
  }
  truncate() {
    return this.transform((e) => Qe(e) ? e : e | 0);
  }
  round(e) {
    var t;
    let n = ["ceil", "floor", "round", "trunc"];
    if (e = ((t = e) == null ? void 0 : t.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (n.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((s) => Qe(s) ? s : Math[e](s));
  }
}
nt.prototype = vo.prototype;
let _o = /* @__PURE__ */ new Date(""), Kf = (r) => Object.prototype.toString.call(r) === "[object Date]";
function Cr() {
  return new Fr();
}
class Fr extends ze {
  constructor() {
    super({
      type: "date",
      check(e) {
        return Kf(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, t, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = qf(e), isNaN(e) ? Fr.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, t) {
    let n;
    if (Ht.isRef(e))
      n = e;
    else {
      let s = this.cast(e);
      if (!this._typeCheck(s)) throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = s;
    }
    return n;
  }
  min(e, t = Bs.min) {
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
  max(e, t = Bs.max) {
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
Fr.INVALID_DATE = _o;
Cr.prototype = Fr.prototype;
Cr.INVALID_DATE = _o;
function Yf(r, e = []) {
  let t = [], n = /* @__PURE__ */ new Set(), s = new Set(e.map(([o, u]) => `${o}-${u}`));
  function i(o, u) {
    let l = Vt.split(o)[0];
    n.add(l), s.has(`${u}-${l}`) || t.push([u, l]);
  }
  for (const o of Object.keys(r)) {
    let u = r[o];
    n.add(o), Ht.isRef(u) && u.isSibling ? i(u.path, o) : Pn(u) && "deps" in u && u.deps.forEach((l) => i(l, o));
  }
  return Rf.array(Array.from(n), t).reverse();
}
function ma(r, e) {
  let t = 1 / 0;
  return r.some((n, s) => {
    var i;
    if ((i = e.path) != null && i.includes(n))
      return t = s, !0;
  }), t;
}
function Eo(r) {
  return (e, t) => ma(r, e) - ma(r, t);
}
const So = (r, e, t) => {
  if (typeof r != "string")
    return r;
  let n = r;
  try {
    n = JSON.parse(r);
  } catch {
  }
  return t.isType(n) ? n : r;
};
function mn(r) {
  if ("fields" in r) {
    const e = {};
    for (const [t, n] of Object.entries(r.fields))
      e[t] = mn(n);
    return r.setFields(e);
  }
  if (r.type === "array") {
    const e = r.optional();
    return e.innerType && (e.innerType = mn(e.innerType)), e;
  }
  return r.type === "tuple" ? r.optional().clone({
    types: r.spec.types.map(mn)
  }) : "optional" in r ? r.optional() : r;
}
const Jf = (r, e) => {
  const t = [...Vt.normalizePath(e)];
  if (t.length === 1) return t[0] in r;
  let n = t.pop(), s = Vt.getter(Vt.join(t), !0)(r);
  return !!(s && n in s);
};
let ya = (r) => Object.prototype.toString.call(r) === "[object Object]";
function Qf(r, e) {
  let t = Object.keys(r.fields);
  return Object.keys(e).filter((n) => t.indexOf(n) === -1);
}
const Xf = Eo([]);
function xe(r) {
  return new To(r);
}
class To extends ze {
  constructor(e) {
    super({
      type: "object",
      check(t) {
        return ya(t) || typeof t == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Xf, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, t = {}) {
    var n;
    let s = super._cast(e, t);
    if (s === void 0) return this.getDefault(t);
    if (!this._typeCheck(s)) return s;
    let i = this.fields, o = (n = t.stripUnknown) != null ? n : this.spec.noUnknown, u = [].concat(this._nodes, Object.keys(s).filter((m) => !this._nodes.includes(m))), l = {}, h = Object.assign({}, t, {
      parent: l,
      __validating: t.__validating || !1
    }), d = !1;
    for (const m of u) {
      let O = i[m], A = m in s;
      if (O) {
        let C, k = s[m];
        h.path = (t.path ? `${t.path}.` : "") + m, O = O.resolve({
          value: k,
          context: t.context,
          parent: l
        });
        let T = O instanceof ze ? O.spec : void 0, q = T == null ? void 0 : T.strict;
        if (T != null && T.strip) {
          d = d || m in s;
          continue;
        }
        C = !t.__validating || !q ? (
          // TODO: use _cast, this is double resolving
          O.cast(s[m], h)
        ) : s[m], C !== void 0 && (l[m] = C);
      } else A && !o && (l[m] = s[m]);
      (A !== m in l || l[m] !== s[m]) && (d = !0);
    }
    return d ? l : s;
  }
  _validate(e, t = {}, n, s) {
    let {
      from: i = [],
      originalValue: o = e,
      recursive: u = this.spec.recursive
    } = t;
    t.from = [{
      schema: this,
      value: o
    }, ...i], t.__validating = !0, t.originalValue = o, super._validate(e, t, n, (l, h) => {
      if (!u || !ya(h)) {
        s(l, h);
        return;
      }
      o = o || h;
      let d = [];
      for (let m of this._nodes) {
        let O = this.fields[m];
        !O || Ht.isRef(O) || d.push(O.asNestedTest({
          options: t,
          key: m,
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
      }, n, (m) => {
        s(m.sort(this._sortErrors).concat(l), h);
      });
    });
  }
  clone(e) {
    const t = super.clone(e);
    return t.fields = Object.assign({}, this.fields), t._nodes = this._nodes, t._excludedEdges = this._excludedEdges, t._sortErrors = this._sortErrors, t;
  }
  concat(e) {
    let t = super.concat(e), n = t.fields;
    for (let [s, i] of Object.entries(this.fields)) {
      const o = n[s];
      n[s] = o === void 0 ? i : o;
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
      const i = this.fields[n];
      let o = e;
      (s = o) != null && s.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[n]
      })), t[n] = i && "getDefault" in i ? i.getDefault(o) : void 0;
    }), t;
  }
  setFields(e, t) {
    let n = this.clone();
    return n.fields = e, n._nodes = Yf(e, t), n._sortErrors = Eo(Object.keys(e)), t && (n._excludedEdges = t), n;
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
    return mn(this);
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
    let s = Vt.getter(e, !0);
    return this.transform((i) => {
      if (!i) return i;
      let o = i;
      return Jf(i, e) && (o = Object.assign({}, i), n || delete o[e], o[t] = s(i)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(So);
  }
  noUnknown(e = !0, t = js.noUnknown) {
    typeof e != "boolean" && (t = e, e = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: t,
      test(s) {
        if (s == null) return !0;
        const i = Qf(this.schema, s);
        return !e || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = e, n;
  }
  unknown(e = !0, t = js.noUnknown) {
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
    return this.transformKeys(fs.camelCase);
  }
  snakeCase() {
    return this.transformKeys(fs.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => fs.snakeCase(e).toUpperCase());
  }
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    n.fields = {};
    for (const [i, o] of Object.entries(t.fields)) {
      var s;
      let u = e;
      (s = u) != null && s.value && (u = Object.assign({}, u, {
        parent: u.value,
        value: u.value[i]
      })), n.fields[i] = o.describe(u);
    }
    return n;
  }
}
xe.prototype = To.prototype;
function wo(r) {
  return new Ro(r);
}
class Ro extends ze {
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
    const i = n.map((o, u) => {
      const l = this.innerType.cast(o, Object.assign({}, t, {
        path: `${t.path || ""}[${u}]`
      }));
      return l !== o && (s = !0), l;
    });
    return s ? i : n;
  }
  _validate(e, t = {}, n, s) {
    var i;
    let o = this.innerType, u = (i = t.recursive) != null ? i : this.spec.recursive;
    t.originalValue != null && t.originalValue, super._validate(e, t, n, (l, h) => {
      var d;
      if (!u || !o || !this._typeCheck(h)) {
        s(l, h);
        return;
      }
      let m = new Array(h.length);
      for (let A = 0; A < h.length; A++) {
        var O;
        m[A] = o.asNestedTest({
          options: t,
          index: A,
          parent: h,
          parentPath: t.path,
          originalParent: (O = t.originalValue) != null ? O : e
        });
      }
      this.runTests({
        value: h,
        tests: m,
        originalValue: (d = t.originalValue) != null ? d : e,
        options: t
      }, n, (A) => s(A.concat(l), h));
    });
  }
  clone(e) {
    const t = super.clone(e);
    return t.innerType = this.innerType, t;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(So);
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
    if (!Pn(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + ht(e));
    return t.innerType = e, t.spec = Object.assign({}, t.spec, {
      types: e
    }), t;
  }
  length(e, t = pn.length) {
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
    return t = t || pn.min, this.test({
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
    return t = t || pn.max, this.test({
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
    let t = e ? (n, s, i) => !e(n, s, i) : (n) => !!n;
    return this.transform((n) => n != null ? n.filter(t) : n);
  }
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    if (t.innerType) {
      var s;
      let i = e;
      (s = i) != null && s.value && (i = Object.assign({}, i, {
        parent: i.value,
        value: i.value[0]
      })), n.innerType = t.innerType.describe(i);
    }
    return n;
  }
}
wo.prototype = Ro.prototype;
const N = {
  IS_STRING: /^[a-zA-Z ]+$/,
  IS_VEHICLE_NO: /^[a-zA-Z]{2}[- ]?[0-9]{1,2}[- ]?[a-zA-Z]{1,2}[- ]?[0-9]{4}$/,
  IS_NUMBER: /^\d+(\.\d+)?$/,
  CONTACT_NO: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/,
  IS_EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}, it = xe().shape({
  address1: p().required("Address Line 1 is required"),
  address2: p().nullable(),
  location: p().required("Location is required"),
  city: p().required("City is required").matches(N.IS_STRING, "City name should only contains alphabets."),
  state: p().required("State is required").matches(N.IS_STRING, "State name should only contains alphabets."),
  pincode: p().required("Pincode is required").matches(N.PINCODE, "Pincode must be exactly 6 digits")
}), dd = p().test("is-future-or-today", "Date must be today or in the future", (r) => {
  if (!r)
    return !0;
  const e = new Date(r), t = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), e >= t;
}), pd = xe().shape({
  companyName: p().required("Party Name is required"),
  category: p().required("Please select category of vendor"),
  subcategory: p().required("Please select subcategory of vendor"),
  officeAddress: it,
  officeContactNo: p().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: p().notRequired().nullable().matches(N.IS_EMAIL, "Please enter valid email."),
  mainProduct: p().notRequired().nullable().matches(N.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: p().notRequired().nullable().matches(N.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: p().notRequired().nullable().matches(N.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: p().notRequired().nullable().matches(N.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: p().notRequired().nullable(),
  creditTerms: p().notRequired().nullable(),
  ifGstnCopy: st().required(),
  gstn: p().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN number required if GSTN is available."),
    otherwise: (r) => r.notRequired().nullable()
  }),
  gstnCopy: Oe().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN copy required if GSTN is available."),
    otherwise: (r) => r.notRequired().nullable()
  }),
  ifPanCardCopy: st().required(),
  panNo: p().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN number required if PAN is available."),
    otherwise: (r) => r.notRequired().nullable()
  }),
  panCardCopy: Oe().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN card copy required if PAN is available."),
    otherwise: (r) => r.notRequired().nullable()
  }),
  ifMsmeCopy: st().required(),
  msmeNo: p().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME number required if MSME is available."),
    otherwise: (r) => r.notRequired().nullable()
  }),
  msmeCopy: Oe().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME copy required if MSME is available."),
    otherwise: (r) => r.notRequired().nullable()
  }),
  vendorSaleInfo: xe().shape({
    contactFName: p().required("Contact person first name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
    contactMName: p().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
    contactLName: p().required("Contact person last name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
    directContactNumber: p().required("Contact person phone number is required").matches(N.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: p().notRequired().nullable().matches(N.CONTACT_NO, "Please enter a valid contact number."),
    email: p().notRequired().nullable().matches(N.IS_EMAIL, "Please enter valid email.")
  }),
  vendorBankDetails: xe().shape({
    beneficiaryFName: p().required("Beneficiary person first name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: p().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: p().required("Beneficiary person last name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
    bankName: p().required("Bank name is required.").matches(N.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: it,
    typeOfAcc: p().required("Account type is required."),
    ifscCode: p().required("IFSC code of bank is required."),
    swiftNo: p().notRequired().nullable(),
    invoiceCurrency: p().notRequired().nullable(),
    cancelledChequeCopy: p().notRequired().nullable()
  }),
  ref1FName: p().required("Reference person first name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
  ref1MName: p().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
  ref1LName: p().required("Reference person first name is required.").matches(N.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: p().required("Contact number is required").matches(N.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: p().notRequired().nullable().matches(N.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: it,
  ref1Email: p().notRequired().nullable().matches(N.IS_EMAIL, "Please enter valid email."),
  ref2FName: p().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
  ref2MName: p().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
  ref2LName: p().notRequired().nullable().matches(N.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: p().notRequired().nullable().matches(N.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: p().notRequired().nullable().matches(N.CONTACT_NO, "Please enter valid contact number."),
  ref2Email: p().notRequired().nullable().matches(N.IS_EMAIL, "Please enter valid email."),
  ref2Address: xe().shape({
    city: p().notRequired().nullable().matches(N.IS_STRING, "City name should only contains alphabets."),
    state: p().notRequired().nullable().matches(N.IS_STRING, "State name should only contains alphabets."),
    pincode: p().notRequired().nullable().matches(N.PINCODE, "Pincode must be exactly 6 digits")
  }).notRequired().nullable()
}), md = xe().shape({
  farmerfName: p().required("First Name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  farmermName: p().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  farmerlName: p().required("Last Name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: it,
  primaryMobileNo: p().required("Contact number is required.").matches(N.CONTACT_NO, "Please enter valid contact number."),
  secondaryMobileNo: p().nullable().matches(N.CONTACT_NO, "Please enter valid contact number."),
  email: p().nullable().matches(N.IS_EMAIL, "Please enter valid email."),
  dob: Cr().nullable(),
  farmAddress: it,
  totalLandArea: nt().nullable().min(0, "Area cannot be negative."),
  cultivationArea: nt().nullable().positive("Area cannot be negative."),
  farmerPhoto: Oe().nullable().test(
    "fileSize",
    "File size is too large (must be less than 1MB)",
    function(r) {
      return r ? r.size <= 1024 * 1024 : !0;
    }
  ),
  farmPhoto: Oe().nullable().test(
    "fileSize",
    "File size is too large (must be less than 1MB)",
    function(r) {
      return r ? r.size <= 1024 * 1024 : !0;
    }
  ),
  crops: wo(
    xe({
      crop: p().required("Crop name is required"),
      noOfPlants: nt().nullable().min(0, "Number of plants cannot be negative"),
      pruningDate: Cr().required("Pruning date is required."),
      expectedHarvestDate: Cr().required("Expected harvest date is required."),
      expectedQuantityInTonnes: nt().required("Expected quantity in metric tones are required.").min(0, "Quantity cannot be negative")
    }).required("At least one crop is required")
  )
}), Zf = xe().shape({
  accDeptFName: p().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  accDeptMName: p().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  accDeptLName: p().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  accDeptMobileNo: p().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  ownerFName: p().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  ownerMName: p().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  ownerLName: p().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  ownerMobileNo: p().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  mandiLicenceNo: p().nullable(),
  // mandiLicenceCopy: yup.,
  regiNo: p().nullable(),
  // regiCopy: File | null,
  electricityBill: st().required("Please select yes or no."),
  consumenrNo: p().when("electricityBill", {
    is: !0,
    then: (r) => r.required("Consumer number is required if electricity bill available."),
    otherwise: (r) => r.nullable()
  }),
  electricityBillCopy: Oe().when("electricityBill", {
    is: !0,
    then: (r) => r.required("Electricity bill copy required if it is available."),
    otherwise: (r) => r.nullable()
  }),
  notElectricityBillReason: p().when("electricityBill", {
    is: !1,
    then: (r) => r.required("Please specify reason to not attach electricity bill."),
    otherwise: (r) => r.nullable()
  }),
  customerBlacklisted: st().required("Please select yes or no."),
  blackListedBy: p().when("customerBlacklisted", {
    is: !0,
    then: (r) => r.required("Please specify name who blacklisted the customer."),
    otherwise: (r) => r.nullable()
  }),
  ifBlacklistedReason: p().when("customerBlacklisted", {
    is: !0,
    then: (r) => r.required("please specify reason for blacklisting customer."),
    otherwise: (r) => r.nullable()
  }),
  visitingCard: st().required("Please select yes or no."),
  visitinContactNo: p().when("visitingCard", {
    is: !0,
    then: (r) => r.required("Consumer number is required ff visiting card available."),
    otherwise: (r) => r.nullable()
  }),
  visitingCardCopy: Oe().when("visitingCard", {
    is: !0,
    then: (r) => r.required("Visiting card copy required if it is available."),
    otherwise: (r) => r.nullable()
  }),
  notVisitingCardReason: p().when("visitingCard", {
    is: !1,
    then: (r) => r.required("Please specify reason to not attach visiting card."),
    otherwise: (r) => r.nullable()
  }),
  //References
  ref1FName: p().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  ref1MName: p().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  ref1LName: p().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  ref1Address: it,
  ref1ContactNo: p().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  ref1Email: p().required("Please enter email.").email("Please enter valid email"),
  ref2FName: p().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  ref2MName: p().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  ref2LName: p().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  ref2address: xe().nullable(),
  ref2ContactNo: p().nullable().matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  ref2Email: p().nullable().email("Please enter valid email")
}), eh = xe().shape({
  billingName: p().required("Billing name is required."),
  commonlyKnownAs: p().nullable(),
  contactPersonFName: p().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  contactPersonMName: p().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  contactPersonLName: p().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  billingAddress: it,
  primaryContactNo: p().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: p().nullable().matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: p().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: p().nullable().email("Please enter valid email"),
  billingAddressProofCopy: Oe().nullable(),
  billingFormatCopy: Oe().nullable()
}), th = xe().shape({
  deliveryAddress: it,
  deliveryAddressProofCopy: Oe().nullable(),
  deliveryTime: p().nullable(),
  receivingPersonFName: p().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  receivingPersonMName: p().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  receivingPersonLName: p().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  primaryContactNo: p().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: p().nullable().matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: p().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: p().nullable().email("Please enter valid email")
}), rh = xe().shape({
  ifCancelledCheque: st().required("Please select yes or no."),
  cancelledChequeCopy: Oe().when("ifCancelledCheque", {
    is: !0,
    then: (r) => r.required("Cancel cheque copy required if it is available."),
    otherwise: (r) => r.nullable()
  }),
  notCancelledChequeReason: p().when("ifCancelledCheque", {
    is: !1,
    then: (r) => r.required("Please specify reason to not attach cancel cheque."),
    otherwise: (r) => r.nullable()
  }),
  bankAccHolderFName: p().required("First name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderMName: p().nullable().matches(N.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderLName: p().required("Last name is required").matches(N.IS_STRING, "Name should only contains alphabets."),
  bankName: p().required("Bank name is required."),
  bankBranch: p().required("Branch name is required."),
  accType: p().required("Account type is required."),
  otherAccType: p().nullable(),
  bankAccNo: p().required("Account number is required."),
  ifscCode: p().required("IFSC code is required."),
  bankAddress: it,
  bankStatementCopy: Oe()
}), nh = xe().shape({
  panNo: p().nullable(),
  panCopy: Oe().nullable(),
  aadharNo: p().nullable(),
  addharCopy: Oe().nullable(),
  gstn: p().nullable(),
  regiCertificateCopy: Oe().nullable(),
  billBookCopy: Oe().nullable(),
  certificationsDetails: p().nullable(),
  otherCertifications: p().nullable(),
  corpRegiDetails: p().nullable(),
  otherCorpRegiDetails: p().nullable(),
  incorpoCertificateCopy: Oe().nullable(),
  cinNo: p().nullable()
}), sh = xe().shape({}), ih = xe().shape({
  paymentMade: p().required("Required. Please select an option."),
  otherPaymentMade: p().nullable(),
  paymentMode: p().required("Payment mode is required."),
  otherPaymentMode: p().nullable(),
  marginDeposit: p().nullable(),
  rtv: st().required("Please select yes or no."),
  agreementExecuted: st().required("Please select yes or no."),
  lc: p().nullable(),
  bg: p().nullable(),
  securityDepoCheqNo: p().nullable(),
  securityDepoAmt: nt().positive("Amount cannot be negative."),
  //Initial Exposure Limit (IEL)
  IELinAmt: nt().positive("Amount cannot be negative."),
  IELRecommendedBy: p().matches(N.IS_STRING, "Name should only contain alphabets."),
  IELRecommendedDate: p().nullable(),
  //Revision of Exposure Limit (REL)
  RELinAmt: nt().positive("Amount cannot be negative."),
  RELRecommendedBy: p().matches(N.IS_STRING, "Name should only contain alphabets."),
  RELRecommendedDate: p().nullable(),
  reason: p().nullable(),
  docEvidenceCopy: Oe().nullable()
}), ah = xe().shape({
  proposerBDName: p().nullable(),
  pflCoordinator: p().nullable(),
  recommendedBy: p().nullable(),
  dispatchLocationPfl: p().nullable(),
  approvedBy: p().nullable(),
  relationshipManager: p().nullable(),
  avgBillingMonthly: nt().positive("Average cannot be negative."),
  volumeMonthly: nt().positive("Volume cannot be negative."),
  customerVerification: p().nullable(),
  verificationAgency: p().nullable(),
  validityPeriod: p().nullable(),
  dueDiligenceDone: p().nullable(),
  creditWorthinessDue: p().nullable(),
  keyAccountPersonAssigned: p().nullable(),
  sinceWhen: p().nullable(),
  ledgerCreatedDate: p().nullable(),
  ledgerCreatedBy: p().nullable(),
  ledgerVerifiedApprovedBy: p().nullable(),
  additionalNotes: p().nullable()
}), yd = xe().shape({
  organisationName: p().required("Organization name is required."),
  customerTypes: p().required("Customer type is required."),
  customerCategory: p().required("Customer category is required."),
  organisationType: p().required("Organization type is required."),
  otherType: p().nullable(),
  customerAddress: it,
  primaryContactNo: p().required("Please enter contact number.").matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: p().nullable().matches(N.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: p().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: p().nullable().email("Please enter valid email"),
  keyMobileNumbers: Zf,
  billingDetails: eh,
  deliveryDetails: th,
  statutoryDetails: nh,
  bankDetails: rh,
  productSpecification: sh,
  paymentTerms: ih,
  officeUseOnly: ah
}), oh = /^[6-9]\d{9}$/, gd = p().matches(oh, "Please enter a valid 10-digit contact number");
export {
  N as REGEX,
  it as addressSchema,
  Kc as appendFormData,
  Qh as buildUrl,
  gd as contactNoSchema,
  Sr as convertInTitleCase,
  yd as customerValidationSchema,
  dd as dateSchema,
  Jh as debounce,
  nd as downloadDoc,
  md as farmerValidationSchema,
  Xh as formatAddress,
  Yh as getCurrentDate,
  id as getDocStatusColor,
  rd as getGrandientBackground,
  ad as getLightColor,
  td as getSelectedPackMatData,
  Zh as getSelectedProductData,
  sd as handleFormKeyDown,
  nf as initProductSpecification,
  Ke as initValAddress,
  Qc as initValCrop,
  fd as initValCustomer,
  cd as initValFarmer,
  hd as initValProduct,
  ld as initValVendor,
  Kh as mapToValueLabelArray,
  Wh as numToWords,
  ed as reverseDateString,
  od as sharedData,
  ud as sharedRoutes,
  mh as useGetAllCompaniesData,
  qh as useGetAllDealSlipNums,
  $h as useGetAllDeliveryChallanNums,
  Lh as useGetAllGRNNums,
  gh as useGetAllLevels,
  Ih as useGetAllRFPANums,
  Bh as useGetAllStock,
  Dh as useGetBranchesPartialData,
  yh as useGetCompanyNames,
  xh as useGetCustomerNames,
  kh as useGetCustomerPartialData,
  bh as useGetDepartmentById,
  ph as useGetEmployeePartialData,
  wh as useGetFarmersPartialData,
  Rh as useGetFarmersPartialDataById,
  Fh as useGetOfficesPartialData,
  Th as useGetPackagingMaterialPartialData,
  vh as useGetProductsPartialData,
  _h as useGetProductsPartialDataById,
  zh as useGetPurchaseDataByFarmer,
  Hh as useGetPurchaseDataByProduct,
  Gh as useGetPurchaseDataByVendor,
  Vh as useGetStockById,
  Mh as useGetStockGlobal,
  jh as useGetStockLocationWise,
  Uh as useGetStockProductWise,
  Ph as useGetUOMPartialData,
  dh as useGetUserNotifications,
  Ah as useGetVendorsPartialData,
  Oh as useGetVendorsPartialDataById,
  Ch as useSearchFarmerData,
  Sh as useSearchProductAllData,
  Eh as useSearchProductData,
  Nh as useSearchVendorData,
  hh as useUpdateDocStatusWithOneApproval,
  ch as useUpdateDocStatusWithThreeApproval,
  fh as useUpdateDocStatusWithTwoApproval,
  pd as vendorValidationSchema
};
