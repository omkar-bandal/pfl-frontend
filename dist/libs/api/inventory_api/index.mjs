const E = {
  //Inward Register
  GET_ALL_INWARD_REGISTERS: (n) => {
    if (n) {
      let e = `/inwardRegister/?page=${n.page}&limit=${n.limit}`;
      return n.sort && n.sort.length > 0 && (e = e + `&sort=${n.sort}`), e;
    } else
      return "/inwardRegister/";
  },
  GET_INWARD_REGISTER_FOR_VIEW_BY_ID: (n) => `/inwardRegister/view/${n}`,
  GET_INWARD_REGISTER_FOR_UPDATE_BY_ID: (n) => `/inwardRegister/update/${n}`,
  UPDATE_INWARD_REGISTER: (n) => `/inwardRegister/${n}`,
  DELETE_INWARD_REGISTER: (n) => `/inwardRegister/${n}`,
  CREATE_INWARD_REGISTER: "/inwardRegister",
  //Arrival Quality Report
  GET_ALL_AQR: (n) => {
    if (n) {
      let e = `/aqr/?page=${n.page}&limit=${n.limit}`;
      return n.sort && n.sort.length > 0 && (e = e + `&sort=${n.sort}`), e;
    } else
      return "/aqr/";
  },
  GET_AQR_FOR_VIEW_BY_ID: (n) => `/aqr/view/${n}`,
  GET_AQR_FOR_UPDATE_BY_ID: (n) => `/aqr/update/${n}`,
  UPDATE_AQR: (n) => `/aqr/${n}`,
  DELETE_AQR: (n) => `/aqr/${n}`,
  CREATE_AQR: "/aqr/",
  //Dump Register
  GET_ALL_DUMP_REGISTERS: (n) => {
    if (n) {
      let e = `/dumpRegister/?page=${n.page}&limit=${n.limit}`;
      return n.sort && n.sort.length > 0 && (e = e + `&sort=${n.sort}`), e;
    } else
      return "/dumpRegister/";
  },
  GET_DUMP_REGISTER_FOR_VIEW_BY_ID: (n) => `/dumpRegister/view/${n}`,
  GET_DUMP_REGISTER_FOR_UPDATE_BY_ID: (n) => `/dumpRegister/update/${n}`,
  UPDATE_DUMP_REGISTER: (n) => `/dumpRegister/${n}`,
  DELETE_DUMP_REGISTER: (n) => `/dumpRegister/${n}`,
  CREATE_DUMP_REGISTER: "/dumpRegister/",
  //Labor Registration
  GET_ALL_REGISTERED_LABORS: (n) => {
    if (n) {
      let e = `/labors/?page=${n.page}&limit=${n.limit}`;
      return n.sort && n.sort.length > 0 && (e = e + `&sort=${n.sort}`), e;
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
  GET_ALL_VEHICLE_DISPATCH_REGISTERS: (n) => {
    if (n) {
      let e = `/vehicleDispatches/?page=${n.page}&limit=${n.limit}`;
      return n.sort && n.sort.length > 0 && (e = e + `&sort=${n.sort}`), e;
    } else
      return "/vehicleDispatches/";
  },
  GET_VEHICLE_DISPATCH_REGISTER_FOR_VIEW_BY_ID: (n) => `/vehicleDispatches/view/${n}`,
  GET_VEHICLE_DISPATCH_REGISTER_FOR_UPDATE_BY_ID: (n) => `/vehicleDispatches/${n}`,
  UPDATE_VEHICLE_DISPATCH_REGISTER: (n) => `/vehicleDispatches/${n}`,
  DELETE_VEHICLE_DISPATCH_REGISTER: (n) => `/vehicleDispatches/${n}`,
  CREATE_VEHICLE_DISPATCH_REGISTER: "/vehicleDispatches/",
  //Second Sale Register
  GET_ALL_SECOND_SALES: (n) => {
    if (n) {
      let e = `/secondSales/?page=${n.page}&limit=${n.limit}`;
      return n.sort && n.sort.length > 0 && (e = e + `&sort=${n.sort}`), e;
    } else
      return "/secondSales/";
  },
  GET_SECOND_SALE_FOR_VIEW_BY_ID: (n) => `/secondSales/${n}/view`,
  GET_SECOND_SALE_FOR_UPDATE_BY_ID: (n) => `/secondSales/${n}/update`,
  UPDATE_SECOND_SALE: (n) => `/secondSales/${n}`,
  DELETE_SECOND_SALE: (n) => `/secondSales/${n}`,
  CREATE_SECOND_SALE: "/secondSales/",
  //EOD Report
  GET_ALL_EOD_REPORT: (n) => {
    if (n) {
      let e = `/eodStock/?page=${n.page}&limit=${n.limit}`;
      return n.sort && n.sort.length > 0 && (e = e + `&sort=${n.sort}`), e;
    } else
      return "/eodStock/";
  },
  GET_EOD_REPORT_FOR_VIEW_BY_ID: (n) => `/eodStock/view/${n}`,
  GET_EOD_REPORT_FOR_UPDATE_BY_ID: (n) => `/eodStock/${n}`,
  UPDATE_EOD_REPORT: (n) => `/eodStock/${n}`,
  DELETE_EOD_REPORT: (n) => `/eodStock/${n}`,
  CREATE_EOD_REPORT: "/eodStock/",
  GET_ALL_PROF_INV: "/invoice/getAll",
  CREATE_PROF_INV: "/invoice/generate/profarma",
  GET_ALL_FINAL_INV: "/invoice/getfinal/all",
  CREATE_FINAL_INV: "/invoice/generate/final"
};
function Et(n, e) {
  return function() {
    return n.apply(e, arguments);
  };
}
const { toString: Xt } = Object.prototype, { getPrototypeOf: Ue } = Object, he = /* @__PURE__ */ ((n) => (e) => {
  const t = Xt.call(e);
  return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), k = (n) => (n = n.toLowerCase(), (e) => he(e) === n), fe = (n) => (e) => typeof e === n, { isArray: M } = Array, K = fe("undefined");
function Zt(n) {
  return n !== null && !K(n) && n.constructor !== null && !K(n.constructor) && I(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const _t = k("ArrayBuffer");
function en(n) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && _t(n.buffer), e;
}
const tn = fe("string"), I = fe("function"), mt = fe("number"), de = (n) => n !== null && typeof n == "object", nn = (n) => n === !0 || n === !1, ne = (n) => {
  if (he(n) !== "object")
    return !1;
  const e = Ue(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, sn = k("Date"), rn = k("File"), on = k("Blob"), an = k("FileList"), cn = (n) => de(n) && I(n.pipe), un = (n) => {
  let e;
  return n && (typeof FormData == "function" && n instanceof FormData || I(n.append) && ((e = he(n)) === "formdata" || // detect form-data instance
  e === "object" && I(n.toString) && n.toString() === "[object FormData]"));
}, ln = k("URLSearchParams"), [hn, fn, dn, pn] = ["ReadableStream", "Request", "Response", "Headers"].map(k), En = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Q(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let s, r;
  if (typeof n != "object" && (n = [n]), M(n))
    for (s = 0, r = n.length; s < r; s++)
      e.call(null, n[s], s, n);
  else {
    const i = t ? Object.getOwnPropertyNames(n) : Object.keys(n), o = i.length;
    let a;
    for (s = 0; s < o; s++)
      a = i[s], e.call(null, n[a], a, n);
  }
}
function gt(n, e) {
  e = e.toLowerCase();
  const t = Object.keys(n);
  let s = t.length, r;
  for (; s-- > 0; )
    if (r = t[s], e === r.toLowerCase())
      return r;
  return null;
}
const V = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, yt = (n) => !K(n) && n !== V;
function Se() {
  const { caseless: n } = yt(this) && this || {}, e = {}, t = (s, r) => {
    const i = n && gt(e, r) || r;
    ne(e[i]) && ne(s) ? e[i] = Se(e[i], s) : ne(s) ? e[i] = Se({}, s) : M(s) ? e[i] = s.slice() : e[i] = s;
  };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && Q(arguments[s], t);
  return e;
}
const _n = (n, e, t, { allOwnKeys: s } = {}) => (Q(e, (r, i) => {
  t && I(r) ? n[i] = Et(r, t) : n[i] = r;
}, { allOwnKeys: s }), n), mn = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), gn = (n, e, t, s) => {
  n.prototype = Object.create(e.prototype, s), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: e.prototype
  }), t && Object.assign(n.prototype, t);
}, yn = (n, e, t, s) => {
  let r, i, o;
  const a = {};
  if (e = e || {}, n == null) return e;
  do {
    for (r = Object.getOwnPropertyNames(n), i = r.length; i-- > 0; )
      o = r[i], (!s || s(o, n, e)) && !a[o] && (e[o] = n[o], a[o] = !0);
    n = t !== !1 && Ue(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}, Rn = (n, e, t) => {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  const s = n.indexOf(e, t);
  return s !== -1 && s === t;
}, Tn = (n) => {
  if (!n) return null;
  if (M(n)) return n;
  let e = n.length;
  if (!mt(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = n[e];
  return t;
}, An = /* @__PURE__ */ ((n) => (e) => n && e instanceof n)(typeof Uint8Array < "u" && Ue(Uint8Array)), wn = (n, e) => {
  const s = (n && n[Symbol.iterator]).call(n);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const i = r.value;
    e.call(n, i[0], i[1]);
  }
}, bn = (n, e) => {
  let t;
  const s = [];
  for (; (t = n.exec(e)) !== null; )
    s.push(t);
  return s;
}, Sn = k("HTMLFormElement"), On = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, s, r) {
    return s.toUpperCase() + r;
  }
), Ke = (({ hasOwnProperty: n }) => (e, t) => n.call(e, t))(Object.prototype), Dn = k("RegExp"), Rt = (n, e) => {
  const t = Object.getOwnPropertyDescriptors(n), s = {};
  Q(t, (r, i) => {
    let o;
    (o = e(r, i, n)) !== !1 && (s[i] = o || r);
  }), Object.defineProperties(n, s);
}, Ln = (n) => {
  Rt(n, (e, t) => {
    if (I(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const s = n[t];
    if (I(s)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Cn = (n, e) => {
  const t = {}, s = (r) => {
    r.forEach((i) => {
      t[i] = !0;
    });
  };
  return M(n) ? s(n) : s(String(n).split(e)), t;
}, In = () => {
}, Bn = (n, e) => n != null && Number.isFinite(n = +n) ? n : e, ge = "abcdefghijklmnopqrstuvwxyz", Qe = "0123456789", Tt = {
  DIGIT: Qe,
  ALPHA: ge,
  ALPHA_DIGIT: ge + ge.toUpperCase() + Qe
}, Nn = (n = 16, e = Tt.ALPHA_DIGIT) => {
  let t = "";
  const { length: s } = e;
  for (; n--; )
    t += e[Math.random() * s | 0];
  return t;
};
function kn(n) {
  return !!(n && I(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator]);
}
const xn = (n) => {
  const e = new Array(10), t = (s, r) => {
    if (de(s)) {
      if (e.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        e[r] = s;
        const i = M(s) ? [] : {};
        return Q(s, (o, a) => {
          const h = t(o, r + 1);
          !K(h) && (i[a] = h);
        }), e[r] = void 0, i;
      }
    }
    return s;
  };
  return t(n, 0);
}, vn = k("AsyncFunction"), Pn = (n) => n && (de(n) || I(n)) && I(n.then) && I(n.catch), At = ((n, e) => n ? setImmediate : e ? ((t, s) => (V.addEventListener("message", ({ source: r, data: i }) => {
  r === V && i === t && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), V.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  I(V.postMessage)
), Fn = typeof queueMicrotask < "u" ? queueMicrotask.bind(V) : typeof process < "u" && process.nextTick || At, c = {
  isArray: M,
  isArrayBuffer: _t,
  isBuffer: Zt,
  isFormData: un,
  isArrayBufferView: en,
  isString: tn,
  isNumber: mt,
  isBoolean: nn,
  isObject: de,
  isPlainObject: ne,
  isReadableStream: hn,
  isRequest: fn,
  isResponse: dn,
  isHeaders: pn,
  isUndefined: K,
  isDate: sn,
  isFile: rn,
  isBlob: on,
  isRegExp: Dn,
  isFunction: I,
  isStream: cn,
  isURLSearchParams: ln,
  isTypedArray: An,
  isFileList: an,
  forEach: Q,
  merge: Se,
  extend: _n,
  trim: En,
  stripBOM: mn,
  inherits: gn,
  toFlatObject: yn,
  kindOf: he,
  kindOfTest: k,
  endsWith: Rn,
  toArray: Tn,
  forEachEntry: wn,
  matchAll: bn,
  isHTMLForm: Sn,
  hasOwnProperty: Ke,
  hasOwnProp: Ke,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Rt,
  freezeMethods: Ln,
  toObjectSet: Cn,
  toCamelCase: On,
  noop: In,
  toFiniteNumber: Bn,
  findKey: gt,
  global: V,
  isContextDefined: yt,
  ALPHABET: Tt,
  generateString: Nn,
  isSpecCompliantForm: kn,
  toJSONObject: xn,
  isAsyncFn: vn,
  isThenable: Pn,
  setImmediate: At,
  asap: Fn
};
function _(n, e, t, s, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), s && (this.request = s), r && (this.response = r, this.status = r.status ? r.status : null);
}
c.inherits(_, Error, {
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
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const wt = _.prototype, bt = {};
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
].forEach((n) => {
  bt[n] = { value: n };
});
Object.defineProperties(_, bt);
Object.defineProperty(wt, "isAxiosError", { value: !0 });
_.from = (n, e, t, s, r, i) => {
  const o = Object.create(wt);
  return c.toFlatObject(n, o, function(h) {
    return h !== Error.prototype;
  }, (a) => a !== "isAxiosError"), _.call(o, n.message, e, t, s, r), o.cause = n, o.name = n.name, i && Object.assign(o, i), o;
};
const Un = null;
function Oe(n) {
  return c.isPlainObject(n) || c.isArray(n);
}
function St(n) {
  return c.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Xe(n, e, t) {
  return n ? n.concat(e).map(function(r, i) {
    return r = St(r), !t && i ? "[" + r + "]" : r;
  }).join(t ? "." : "") : e;
}
function $n(n) {
  return c.isArray(n) && !n.some(Oe);
}
const Vn = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function pe(n, e, t) {
  if (!c.isObject(n))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = c.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !c.isUndefined(p[m]);
  });
  const s = t.metaTokens, r = t.visitor || l, i = t.dots, o = t.indexes, h = (t.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(e);
  if (!c.isFunction(r))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (c.isDate(d))
      return d.toISOString();
    if (!h && c.isBlob(d))
      throw new _("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(d) || c.isTypedArray(d) ? h && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, m, p) {
    let T = d;
    if (d && !p && typeof d == "object") {
      if (c.endsWith(m, "{}"))
        m = s ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (c.isArray(d) && $n(d) || (c.isFileList(d) || c.endsWith(m, "[]")) && (T = c.toArray(d)))
        return m = St(m), T.forEach(function(O, v) {
          !(c.isUndefined(O) || O === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Xe([m], v, i) : o === null ? m : m + "[]",
            u(O)
          );
        }), !1;
    }
    return Oe(d) ? !0 : (e.append(Xe(p, m, i), u(d)), !1);
  }
  const f = [], y = Object.assign(Vn, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Oe
  });
  function b(d, m) {
    if (!c.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(d), c.forEach(d, function(T, S) {
        (!(c.isUndefined(T) || T === null) && r.call(
          e,
          T,
          c.isString(S) ? S.trim() : S,
          m,
          y
        )) === !0 && b(T, m ? m.concat(S) : [S]);
      }), f.pop();
    }
  }
  if (!c.isObject(n))
    throw new TypeError("data must be an object");
  return b(n), e;
}
function Ze(n) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(s) {
    return e[s];
  });
}
function $e(n, e) {
  this._pairs = [], n && pe(n, this, e);
}
const Ot = $e.prototype;
Ot.append = function(e, t) {
  this._pairs.push([e, t]);
};
Ot.toString = function(e) {
  const t = e ? function(s) {
    return e.call(this, s, Ze);
  } : Ze;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
function Gn(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Dt(n, e, t) {
  if (!e)
    return n;
  const s = t && t.encode || Gn, r = t && t.serialize;
  let i;
  if (r ? i = r(e, t) : i = c.isURLSearchParams(e) ? e.toString() : new $e(e, t).toString(s), i) {
    const o = n.indexOf("#");
    o !== -1 && (n = n.slice(0, o)), n += (n.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return n;
}
class et {
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
  use(e, t, s) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
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
    c.forEach(this.handlers, function(s) {
      s !== null && e(s);
    });
  }
}
const Lt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qn = typeof URLSearchParams < "u" ? URLSearchParams : $e, Hn = typeof FormData < "u" ? FormData : null, Mn = typeof Blob < "u" ? Blob : null, jn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qn,
    FormData: Hn,
    Blob: Mn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ve = typeof window < "u" && typeof document < "u", De = typeof navigator == "object" && navigator || void 0, Wn = Ve && (!De || ["ReactNative", "NativeScript", "NS"].indexOf(De.product) < 0), zn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yn = Ve && window.location.href || "http://localhost", Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ve,
  hasStandardBrowserEnv: Wn,
  hasStandardBrowserWebWorkerEnv: zn,
  navigator: De,
  origin: Yn
}, Symbol.toStringTag, { value: "Module" })), L = {
  ...Jn,
  ...jn
};
function Kn(n, e) {
  return pe(n, new L.classes.URLSearchParams(), Object.assign({
    visitor: function(t, s, r, i) {
      return L.isNode && c.isBuffer(t) ? (this.append(s, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Qn(n) {
  return c.matchAll(/\w+|\[(\w*)]/g, n).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Xn(n) {
  const e = {}, t = Object.keys(n);
  let s;
  const r = t.length;
  let i;
  for (s = 0; s < r; s++)
    i = t[s], e[i] = n[i];
  return e;
}
function Ct(n) {
  function e(t, s, r, i) {
    let o = t[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), h = i >= t.length;
    return o = !o && c.isArray(r) ? r.length : o, h ? (c.hasOwnProp(r, o) ? r[o] = [r[o], s] : r[o] = s, !a) : ((!r[o] || !c.isObject(r[o])) && (r[o] = []), e(t, s, r[o], i) && c.isArray(r[o]) && (r[o] = Xn(r[o])), !a);
  }
  if (c.isFormData(n) && c.isFunction(n.entries)) {
    const t = {};
    return c.forEachEntry(n, (s, r) => {
      e(Qn(s), r, t, 0);
    }), t;
  }
  return null;
}
function Zn(n, e, t) {
  if (c.isString(n))
    try {
      return (e || JSON.parse)(n), c.trim(n);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (0, JSON.stringify)(n);
}
const X = {
  transitional: Lt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const s = t.getContentType() || "", r = s.indexOf("application/json") > -1, i = c.isObject(e);
    if (i && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
      return r ? JSON.stringify(Ct(e)) : e;
    if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e) || c.isReadableStream(e))
      return e;
    if (c.isArrayBufferView(e))
      return e.buffer;
    if (c.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Kn(e, this.formSerializer).toString();
      if ((a = c.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return pe(
          a ? { "files[]": e } : e,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return i || r ? (t.setContentType("application/json", !1), Zn(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || X.transitional, s = t && t.forcedJSONParsing, r = this.responseType === "json";
    if (c.isResponse(e) || c.isReadableStream(e))
      return e;
    if (e && c.isString(e) && (s && !this.responseType || r)) {
      const o = !(t && t.silentJSONParsing) && r;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? _.from(a, _.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: L.classes.FormData,
    Blob: L.classes.Blob
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
c.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  X.headers[n] = {};
});
const es = c.toObjectSet([
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
]), ts = (n) => {
  const e = {};
  let t, s, r;
  return n && n.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), t = o.substring(0, r).trim().toLowerCase(), s = o.substring(r + 1).trim(), !(!t || e[t] && es[t]) && (t === "set-cookie" ? e[t] ? e[t].push(s) : e[t] = [s] : e[t] = e[t] ? e[t] + ", " + s : s);
  }), e;
}, tt = Symbol("internals");
function z(n) {
  return n && String(n).trim().toLowerCase();
}
function se(n) {
  return n === !1 || n == null ? n : c.isArray(n) ? n.map(se) : String(n);
}
function ns(n) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = t.exec(n); )
    e[s[1]] = s[2];
  return e;
}
const ss = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function ye(n, e, t, s, r) {
  if (c.isFunction(s))
    return s.call(this, e, t);
  if (r && (e = t), !!c.isString(e)) {
    if (c.isString(s))
      return e.indexOf(s) !== -1;
    if (c.isRegExp(s))
      return s.test(e);
  }
}
function rs(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, s) => t.toUpperCase() + s);
}
function is(n, e) {
  const t = c.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(n, s + t, {
      value: function(r, i, o) {
        return this[s].call(this, e, r, i, o);
      },
      configurable: !0
    });
  });
}
class C {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, s) {
    const r = this;
    function i(a, h, u) {
      const l = z(h);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = c.findKey(r, l);
      (!f || r[f] === void 0 || u === !0 || u === void 0 && r[f] !== !1) && (r[f || h] = se(a));
    }
    const o = (a, h) => c.forEach(a, (u, l) => i(u, l, h));
    if (c.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (c.isString(e) && (e = e.trim()) && !ss(e))
      o(ts(e), t);
    else if (c.isHeaders(e))
      for (const [a, h] of e.entries())
        i(h, a, s);
    else
      e != null && i(t, e, s);
    return this;
  }
  get(e, t) {
    if (e = z(e), e) {
      const s = c.findKey(this, e);
      if (s) {
        const r = this[s];
        if (!t)
          return r;
        if (t === !0)
          return ns(r);
        if (c.isFunction(t))
          return t.call(this, r, s);
        if (c.isRegExp(t))
          return t.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = z(e), e) {
      const s = c.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!t || ye(this, this[s], s, t)));
    }
    return !1;
  }
  delete(e, t) {
    const s = this;
    let r = !1;
    function i(o) {
      if (o = z(o), o) {
        const a = c.findKey(s, o);
        a && (!t || ye(s, s[a], a, t)) && (delete s[a], r = !0);
      }
    }
    return c.isArray(e) ? e.forEach(i) : i(e), r;
  }
  clear(e) {
    const t = Object.keys(this);
    let s = t.length, r = !1;
    for (; s--; ) {
      const i = t[s];
      (!e || ye(this, this[i], i, e, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(e) {
    const t = this, s = {};
    return c.forEach(this, (r, i) => {
      const o = c.findKey(s, i);
      if (o) {
        t[o] = se(r), delete t[i];
        return;
      }
      const a = e ? rs(i) : String(i).trim();
      a !== i && delete t[i], t[a] = se(r), s[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (s, r) => {
      s != null && s !== !1 && (t[r] = e && c.isArray(s) ? s.join(", ") : s);
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
    const s = new this(e);
    return t.forEach((r) => s.set(r)), s;
  }
  static accessor(e) {
    const s = (this[tt] = this[tt] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const a = z(o);
      s[a] || (is(r, o), s[a] = !0);
    }
    return c.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
C.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(C.prototype, ({ value: n }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => n,
    set(s) {
      this[t] = s;
    }
  };
});
c.freezeMethods(C);
function Re(n, e) {
  const t = this || X, s = e || t, r = C.from(s.headers);
  let i = s.data;
  return c.forEach(n, function(a) {
    i = a.call(t, i, r.normalize(), e ? e.status : void 0);
  }), r.normalize(), i;
}
function It(n) {
  return !!(n && n.__CANCEL__);
}
function j(n, e, t) {
  _.call(this, n ?? "canceled", _.ERR_CANCELED, e, t), this.name = "CanceledError";
}
c.inherits(j, _, {
  __CANCEL__: !0
});
function Bt(n, e, t) {
  const s = t.config.validateStatus;
  !t.status || !s || s(t.status) ? n(t) : e(new _(
    "Request failed with status code " + t.status,
    [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function os(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return e && e[1] || "";
}
function as(n, e) {
  n = n || 10;
  const t = new Array(n), s = new Array(n);
  let r = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(h) {
    const u = Date.now(), l = s[i];
    o || (o = u), t[r] = h, s[r] = u;
    let f = i, y = 0;
    for (; f !== r; )
      y += t[f++], f = f % n;
    if (r = (r + 1) % n, r === i && (i = (i + 1) % n), u - o < e)
      return;
    const b = l && u - l;
    return b ? Math.round(y * 1e3 / b) : void 0;
  };
}
function cs(n, e) {
  let t = 0, s = 1e3 / e, r, i;
  const o = (u, l = Date.now()) => {
    t = l, r = null, i && (clearTimeout(i), i = null), n.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), f = l - t;
    f >= s ? o(u, l) : (r = u, i || (i = setTimeout(() => {
      i = null, o(r);
    }, s - f)));
  }, () => r && o(r)];
}
const ue = (n, e, t = 3) => {
  let s = 0;
  const r = as(50, 250);
  return cs((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, h = o - s, u = r(h), l = o <= a;
    s = o;
    const f = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: h,
      rate: u || void 0,
      estimated: u && a && l ? (a - o) / u : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    n(f);
  }, t);
}, nt = (n, e) => {
  const t = n != null;
  return [(s) => e[0]({
    lengthComputable: t,
    total: n,
    loaded: s
  }), e[1]];
}, st = (n) => (...e) => c.asap(() => n(...e)), us = L.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = L.navigator && /(msie|trident)/i.test(L.navigator.userAgent), t = document.createElement("a");
    let s;
    function r(i) {
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
    return s = r(window.location.href), function(o) {
      const a = c.isString(o) ? r(o) : o;
      return a.protocol === s.protocol && a.host === s.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), ls = L.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, e, t, s, r, i) {
      const o = [n + "=" + encodeURIComponent(e)];
      c.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), c.isString(s) && o.push("path=" + s), c.isString(r) && o.push("domain=" + r), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(n) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5);
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
function hs(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function fs(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function Nt(n, e) {
  return n && !hs(e) ? fs(n, e) : e;
}
const rt = (n) => n instanceof C ? { ...n } : n;
function q(n, e) {
  e = e || {};
  const t = {};
  function s(u, l, f) {
    return c.isPlainObject(u) && c.isPlainObject(l) ? c.merge.call({ caseless: f }, u, l) : c.isPlainObject(l) ? c.merge({}, l) : c.isArray(l) ? l.slice() : l;
  }
  function r(u, l, f) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined(u))
        return s(void 0, u, f);
    } else return s(u, l, f);
  }
  function i(u, l) {
    if (!c.isUndefined(l))
      return s(void 0, l);
  }
  function o(u, l) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined(u))
        return s(void 0, u);
    } else return s(void 0, l);
  }
  function a(u, l, f) {
    if (f in e)
      return s(u, l);
    if (f in n)
      return s(void 0, u);
  }
  const h = {
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
    validateStatus: a,
    headers: (u, l) => r(rt(u), rt(l), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, n, e)), function(l) {
    const f = h[l] || r, y = f(n[l], e[l], l);
    c.isUndefined(y) && f !== a || (t[l] = y);
  }), t;
}
const kt = (n) => {
  const e = q({}, n);
  let { data: t, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: a } = e;
  e.headers = o = C.from(o), e.url = Dt(Nt(e.baseURL, e.url), n.params, n.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let h;
  if (c.isFormData(t)) {
    if (L.hasStandardBrowserEnv || L.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((h = o.getContentType()) !== !1) {
      const [u, ...l] = h ? h.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (L.hasStandardBrowserEnv && (s && c.isFunction(s) && (s = s(e)), s || s !== !1 && us(e.url))) {
    const u = r && i && ls.read(i);
    u && o.set(r, u);
  }
  return e;
}, ds = typeof XMLHttpRequest < "u", ps = ds && function(n) {
  return new Promise(function(t, s) {
    const r = kt(n);
    let i = r.data;
    const o = C.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: h, onDownloadProgress: u } = r, l, f, y, b, d;
    function m() {
      b && b(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let p = new XMLHttpRequest();
    p.open(r.method.toUpperCase(), r.url, !0), p.timeout = r.timeout;
    function T() {
      if (!p)
        return;
      const O = C.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), D = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: O,
        config: n,
        request: p
      };
      Bt(function($) {
        t($), m();
      }, function($) {
        s($), m();
      }, D), p = null;
    }
    "onloadend" in p ? p.onloadend = T : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, p.onabort = function() {
      p && (s(new _("Request aborted", _.ECONNABORTED, n, p)), p = null);
    }, p.onerror = function() {
      s(new _("Network Error", _.ERR_NETWORK, n, p)), p = null;
    }, p.ontimeout = function() {
      let v = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const D = r.transitional || Lt;
      r.timeoutErrorMessage && (v = r.timeoutErrorMessage), s(new _(
        v,
        D.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
        n,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && c.forEach(o.toJSON(), function(v, D) {
      p.setRequestHeader(D, v);
    }), c.isUndefined(r.withCredentials) || (p.withCredentials = !!r.withCredentials), a && a !== "json" && (p.responseType = r.responseType), u && ([y, d] = ue(u, !0), p.addEventListener("progress", y)), h && p.upload && ([f, b] = ue(h), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", b)), (r.cancelToken || r.signal) && (l = (O) => {
      p && (s(!O || O.type ? new j(null, n, p) : O), p.abort(), p = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const S = os(r.url);
    if (S && L.protocols.indexOf(S) === -1) {
      s(new _("Unsupported protocol " + S + ":", _.ERR_BAD_REQUEST, n));
      return;
    }
    p.send(i || null);
  });
}, Es = (n, e) => {
  const { length: t } = n = n ? n.filter(Boolean) : [];
  if (e || t) {
    let s = new AbortController(), r;
    const i = function(u) {
      if (!r) {
        r = !0, a();
        const l = u instanceof Error ? u : this.reason;
        s.abort(l instanceof _ ? l : new j(l instanceof Error ? l.message : l));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new _(`timeout ${e} of ms exceeded`, _.ETIMEDOUT));
    }, e);
    const a = () => {
      n && (o && clearTimeout(o), o = null, n.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), n = null);
    };
    n.forEach((u) => u.addEventListener("abort", i));
    const { signal: h } = s;
    return h.unsubscribe = () => c.asap(a), h;
  }
}, _s = function* (n, e) {
  let t = n.byteLength;
  if (t < e) {
    yield n;
    return;
  }
  let s = 0, r;
  for (; s < t; )
    r = s + e, yield n.slice(s, r), s = r;
}, ms = async function* (n, e) {
  for await (const t of gs(n))
    yield* _s(t, e);
}, gs = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const e = n.getReader();
  try {
    for (; ; ) {
      const { done: t, value: s } = await e.read();
      if (t)
        break;
      yield s;
    }
  } finally {
    await e.cancel();
  }
}, it = (n, e, t, s) => {
  const r = ms(n, e);
  let i = 0, o, a = (h) => {
    o || (o = !0, s && s(h));
  };
  return new ReadableStream({
    async pull(h) {
      try {
        const { done: u, value: l } = await r.next();
        if (u) {
          a(), h.close();
          return;
        }
        let f = l.byteLength;
        if (t) {
          let y = i += f;
          t(y);
        }
        h.enqueue(new Uint8Array(l));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(h) {
      return a(h), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ee = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", xt = Ee && typeof ReadableStream == "function", ys = Ee && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (e) => n.encode(e))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), vt = (n, ...e) => {
  try {
    return !!n(...e);
  } catch {
    return !1;
  }
}, Rs = xt && vt(() => {
  let n = !1;
  const e = new Request(L.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !e;
}), ot = 64 * 1024, Le = xt && vt(() => c.isReadableStream(new Response("").body)), le = {
  stream: Le && ((n) => n.body)
};
Ee && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !le[e] && (le[e] = c.isFunction(n[e]) ? (t) => t[e]() : (t, s) => {
      throw new _(`Response type '${e}' is not supported`, _.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const Ts = async (n) => {
  if (n == null)
    return 0;
  if (c.isBlob(n))
    return n.size;
  if (c.isSpecCompliantForm(n))
    return (await new Request(L.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (c.isArrayBufferView(n) || c.isArrayBuffer(n))
    return n.byteLength;
  if (c.isURLSearchParams(n) && (n = n + ""), c.isString(n))
    return (await ys(n)).byteLength;
}, As = async (n, e) => {
  const t = c.toFiniteNumber(n.getContentLength());
  return t ?? Ts(e);
}, ws = Ee && (async (n) => {
  let {
    url: e,
    method: t,
    data: s,
    signal: r,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: h,
    responseType: u,
    headers: l,
    withCredentials: f = "same-origin",
    fetchOptions: y
  } = kt(n);
  u = u ? (u + "").toLowerCase() : "text";
  let b = Es([r, i && i.toAbortSignal()], o), d;
  const m = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let p;
  try {
    if (h && Rs && t !== "get" && t !== "head" && (p = await As(l, s)) !== 0) {
      let D = new Request(e, {
        method: "POST",
        body: s,
        duplex: "half"
      }), P;
      if (c.isFormData(s) && (P = D.headers.get("content-type")) && l.setContentType(P), D.body) {
        const [$, Z] = nt(
          p,
          ue(st(h))
        );
        s = it(D.body, ot, $, Z);
      }
    }
    c.isString(f) || (f = f ? "include" : "omit");
    const T = "credentials" in Request.prototype;
    d = new Request(e, {
      ...y,
      signal: b,
      method: t.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: T ? f : void 0
    });
    let S = await fetch(d);
    const O = Le && (u === "stream" || u === "response");
    if (Le && (a || O && m)) {
      const D = {};
      ["status", "statusText", "headers"].forEach((Je) => {
        D[Je] = S[Je];
      });
      const P = c.toFiniteNumber(S.headers.get("content-length")), [$, Z] = a && nt(
        P,
        ue(st(a), !0)
      ) || [];
      S = new Response(
        it(S.body, ot, $, () => {
          Z && Z(), m && m();
        }),
        D
      );
    }
    u = u || "text";
    let v = await le[c.findKey(le, u) || "text"](S, n);
    return !O && m && m(), await new Promise((D, P) => {
      Bt(D, P, {
        data: v,
        headers: C.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: n,
        request: d
      });
    });
  } catch (T) {
    throw m && m(), T && T.name === "TypeError" && /fetch/i.test(T.message) ? Object.assign(
      new _("Network Error", _.ERR_NETWORK, n, d),
      {
        cause: T.cause || T
      }
    ) : _.from(T, T && T.code, n, d);
  }
}), Ce = {
  http: Un,
  xhr: ps,
  fetch: ws
};
c.forEach(Ce, (n, e) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: e });
  }
});
const at = (n) => `- ${n}`, bs = (n) => c.isFunction(n) || n === null || n === !1, Pt = {
  getAdapter: (n) => {
    n = c.isArray(n) ? n : [n];
    const { length: e } = n;
    let t, s;
    const r = {};
    for (let i = 0; i < e; i++) {
      t = n[i];
      let o;
      if (s = t, !bs(t) && (s = Ce[(o = String(t)).toLowerCase()], s === void 0))
        throw new _(`Unknown adapter '${o}'`);
      if (s)
        break;
      r[o || "#" + i] = s;
    }
    if (!s) {
      const i = Object.entries(r).map(
        ([a, h]) => `adapter ${a} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? i.length > 1 ? `since :
` + i.map(at).join(`
`) : " " + at(i[0]) : "as no adapter specified";
      throw new _(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: Ce
};
function Te(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new j(null, n);
}
function ct(n) {
  return Te(n), n.headers = C.from(n.headers), n.data = Re.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Pt.getAdapter(n.adapter || X.adapter)(n).then(function(s) {
    return Te(n), s.data = Re.call(
      n,
      n.transformResponse,
      s
    ), s.headers = C.from(s.headers), s;
  }, function(s) {
    return It(s) || (Te(n), s && s.response && (s.response.data = Re.call(
      n,
      n.transformResponse,
      s.response
    ), s.response.headers = C.from(s.response.headers))), Promise.reject(s);
  });
}
const Ft = "1.7.7", Ge = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
  Ge[n] = function(s) {
    return typeof s === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
const ut = {};
Ge.transitional = function(e, t, s) {
  function r(i, o) {
    return "[Axios v" + Ft + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new _(
        r(o, " has been removed" + (t ? " in " + t : "")),
        _.ERR_DEPRECATED
      );
    return t && !ut[o] && (ut[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
function Ss(n, e, t) {
  if (typeof n != "object")
    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let r = s.length;
  for (; r-- > 0; ) {
    const i = s[r], o = e[i];
    if (o) {
      const a = n[i], h = a === void 0 || o(a, i, n);
      if (h !== !0)
        throw new _("option " + i + " must be " + h, _.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new _("Unknown option " + i, _.ERR_BAD_OPTION);
  }
}
const Ie = {
  assertOptions: Ss,
  validators: Ge
}, F = Ie.validators;
class G {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new et(),
      response: new et()
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
    } catch (s) {
      if (s instanceof Error) {
        let r;
        Error.captureStackTrace ? Error.captureStackTrace(r = {}) : r = new Error();
        const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? i && !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + i) : s.stack = i;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = q(this.defaults, t);
    const { transitional: s, paramsSerializer: r, headers: i } = t;
    s !== void 0 && Ie.assertOptions(s, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), r != null && (c.isFunction(r) ? t.paramsSerializer = {
      serialize: r
    } : Ie.assertOptions(r, {
      encode: F.function,
      serialize: F.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = i && c.merge(
      i.common,
      i[t.method]
    );
    i && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), t.headers = C.concat(o, i);
    const a = [];
    let h = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(t) === !1 || (h = h && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let l, f = 0, y;
    if (!h) {
      const d = [ct.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, u), y = d.length, l = Promise.resolve(t); f < y; )
        l = l.then(d[f++], d[f++]);
      return l;
    }
    y = a.length;
    let b = t;
    for (f = 0; f < y; ) {
      const d = a[f++], m = a[f++];
      try {
        b = d(b);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      l = ct.call(this, b);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, y = u.length; f < y; )
      l = l.then(u[f++], u[f++]);
    return l;
  }
  getUri(e) {
    e = q(this.defaults, e);
    const t = Nt(e.baseURL, e.url);
    return Dt(t, e.params, e.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(e) {
  G.prototype[e] = function(t, s) {
    return this.request(q(s || {}, {
      method: e,
      url: t,
      data: (s || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(e) {
  function t(s) {
    return function(i, o, a) {
      return this.request(q(a || {}, {
        method: e,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  G.prototype[e] = t(), G.prototype[e + "Form"] = t(!0);
});
class qe {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let i = s._listeners.length;
      for (; i-- > 0; )
        s._listeners[i](r);
      s._listeners = null;
    }), this.promise.then = (r) => {
      let i;
      const o = new Promise((a) => {
        s.subscribe(a), i = a;
      }).then(r);
      return o.cancel = function() {
        s.unsubscribe(i);
      }, o;
    }, e(function(i, o, a) {
      s.reason || (s.reason = new j(i, o, a), t(s.reason));
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
    const e = new AbortController(), t = (s) => {
      e.abort(s);
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
      token: new qe(function(r) {
        e = r;
      }),
      cancel: e
    };
  }
}
function Os(n) {
  return function(t) {
    return n.apply(null, t);
  };
}
function Ds(n) {
  return c.isObject(n) && n.isAxiosError === !0;
}
const Be = {
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
Object.entries(Be).forEach(([n, e]) => {
  Be[e] = n;
});
function Ut(n) {
  const e = new G(n), t = Et(G.prototype.request, e);
  return c.extend(t, G.prototype, e, { allOwnKeys: !0 }), c.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(r) {
    return Ut(q(n, r));
  }, t;
}
const A = Ut(X);
A.Axios = G;
A.CanceledError = j;
A.CancelToken = qe;
A.isCancel = It;
A.VERSION = Ft;
A.toFormData = pe;
A.AxiosError = _;
A.Cancel = A.CanceledError;
A.all = function(e) {
  return Promise.all(e);
};
A.spread = Os;
A.isAxiosError = Ds;
A.mergeConfig = q;
A.AxiosHeaders = C;
A.formToJSON = (n) => Ct(c.isHTMLForm(n) ? new FormData(n) : n);
A.getAdapter = Pt.getAdapter;
A.HttpStatusCode = Be;
A.default = A;
const He = "http://ec2-13-203-204-143.ap-south-1.compute.amazonaws.com", Ls = () => A.create({
  baseURL: He,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class R {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = R.createService();
  }
  static createService() {
    return R._axiosInstance || (R._axiosInstance = Ls(), R.setAuthHeaderInterceptor(), R._axiosInstance.interceptors.response.use(R.handleSuccess, R.handleError)), R._axiosInstance;
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
      return (await A.post(`${He}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    R._axiosInstance.interceptors.request.use(
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
    R._axiosInstance.interceptors.response.use(
      R.handleSuccess,
      R.handleError
    );
  }
  static handleSuccess(e) {
    return e.data;
  }
  // Updated error handler to catch 401 errors and try to refresh the token
  static async handleError(e) {
    var r;
    const t = e.config;
    if (e.response && e.response.status === 401 && !t._retry) {
      t._retry = !0;
      try {
        const i = await R.refreshAccessToken();
        return R.setAccessToken(i), t.headers.set("Authorization", `Bearer ${i}`), R._axiosInstance(t);
      } catch (i) {
        console.error("Refresh token failed", i);
      }
    }
    const s = { name: "Error", message: "Something went wrong!" };
    return e.response && e.response.data && (s.message = (r = e.response.data) == null ? void 0 : r.message), Promise.reject(s);
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
const x = /* @__PURE__ */ Object.create(null);
x.open = "0";
x.close = "1";
x.ping = "2";
x.pong = "3";
x.message = "4";
x.upgrade = "5";
x.noop = "6";
const re = /* @__PURE__ */ Object.create(null);
Object.keys(x).forEach((n) => {
  re[x[n]] = n;
});
const Ne = { type: "error", data: "parser error" }, $t = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Vt = typeof ArrayBuffer == "function", Gt = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer, Me = ({ type: n, data: e }, t, s) => $t && e instanceof Blob ? t ? s(e) : lt(e, s) : Vt && (e instanceof ArrayBuffer || Gt(e)) ? t ? s(e) : lt(new Blob([e]), s) : s(x[n] + (e || "")), lt = (n, e) => {
  const t = new FileReader();
  return t.onload = function() {
    const s = t.result.split(",")[1];
    e("b" + (s || ""));
  }, t.readAsDataURL(n);
};
function ht(n) {
  return n instanceof Uint8Array ? n : n instanceof ArrayBuffer ? new Uint8Array(n) : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
let Ae;
function Cs(n, e) {
  if ($t && n.data instanceof Blob)
    return n.data.arrayBuffer().then(ht).then(e);
  if (Vt && (n.data instanceof ArrayBuffer || Gt(n.data)))
    return e(ht(n.data));
  Me(n, !1, (t) => {
    Ae || (Ae = new TextEncoder()), e(Ae.encode(t));
  });
}
const ft = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", J = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < ft.length; n++)
  J[ft.charCodeAt(n)] = n;
const Is = (n) => {
  let e = n.length * 0.75, t = n.length, s, r = 0, i, o, a, h;
  n[n.length - 1] === "=" && (e--, n[n.length - 2] === "=" && e--);
  const u = new ArrayBuffer(e), l = new Uint8Array(u);
  for (s = 0; s < t; s += 4)
    i = J[n.charCodeAt(s)], o = J[n.charCodeAt(s + 1)], a = J[n.charCodeAt(s + 2)], h = J[n.charCodeAt(s + 3)], l[r++] = i << 2 | o >> 4, l[r++] = (o & 15) << 4 | a >> 2, l[r++] = (a & 3) << 6 | h & 63;
  return u;
}, Bs = typeof ArrayBuffer == "function", je = (n, e) => {
  if (typeof n != "string")
    return {
      type: "message",
      data: qt(n, e)
    };
  const t = n.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Ns(n.substring(1), e)
  } : re[t] ? n.length > 1 ? {
    type: re[t],
    data: n.substring(1)
  } : {
    type: re[t]
  } : Ne;
}, Ns = (n, e) => {
  if (Bs) {
    const t = Is(n);
    return qt(t, e);
  } else
    return { base64: !0, data: n };
}, qt = (n, e) => {
  switch (e) {
    case "blob":
      return n instanceof Blob ? n : new Blob([n]);
    case "arraybuffer":
    default:
      return n instanceof ArrayBuffer ? n : n.buffer;
  }
}, Ht = "", ks = (n, e) => {
  const t = n.length, s = new Array(t);
  let r = 0;
  n.forEach((i, o) => {
    Me(i, !1, (a) => {
      s[o] = a, ++r === t && e(s.join(Ht));
    });
  });
}, xs = (n, e) => {
  const t = n.split(Ht), s = [];
  for (let r = 0; r < t.length; r++) {
    const i = je(t[r], e);
    if (s.push(i), i.type === "error")
      break;
  }
  return s;
};
function vs() {
  return new TransformStream({
    transform(n, e) {
      Cs(n, (t) => {
        const s = t.length;
        let r;
        if (s < 126)
          r = new Uint8Array(1), new DataView(r.buffer).setUint8(0, s);
        else if (s < 65536) {
          r = new Uint8Array(3);
          const i = new DataView(r.buffer);
          i.setUint8(0, 126), i.setUint16(1, s);
        } else {
          r = new Uint8Array(9);
          const i = new DataView(r.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(s));
        }
        n.data && typeof n.data != "string" && (r[0] |= 128), e.enqueue(r), e.enqueue(t);
      });
    }
  });
}
let we;
function ee(n) {
  return n.reduce((e, t) => e + t.length, 0);
}
function te(n, e) {
  if (n[0].length === e)
    return n.shift();
  const t = new Uint8Array(e);
  let s = 0;
  for (let r = 0; r < e; r++)
    t[r] = n[0][s++], s === n[0].length && (n.shift(), s = 0);
  return n.length && s < n[0].length && (n[0] = n[0].slice(s)), t;
}
function Ps(n, e) {
  we || (we = new TextDecoder());
  const t = [];
  let s = 0, r = -1, i = !1;
  return new TransformStream({
    transform(o, a) {
      for (t.push(o); ; ) {
        if (s === 0) {
          if (ee(t) < 1)
            break;
          const h = te(t, 1);
          i = (h[0] & 128) === 128, r = h[0] & 127, r < 126 ? s = 3 : r === 126 ? s = 1 : s = 2;
        } else if (s === 1) {
          if (ee(t) < 2)
            break;
          const h = te(t, 2);
          r = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0), s = 3;
        } else if (s === 2) {
          if (ee(t) < 8)
            break;
          const h = te(t, 8), u = new DataView(h.buffer, h.byteOffset, h.length), l = u.getUint32(0);
          if (l > Math.pow(2, 21) - 1) {
            a.enqueue(Ne);
            break;
          }
          r = l * Math.pow(2, 32) + u.getUint32(4), s = 3;
        } else {
          if (ee(t) < r)
            break;
          const h = te(t, r);
          a.enqueue(je(i ? h : we.decode(h), e)), s = 0;
        }
        if (r === 0 || r > n) {
          a.enqueue(Ne);
          break;
        }
      }
    }
  });
}
const Mt = 4;
function w(n) {
  if (n) return Fs(n);
}
function Fs(n) {
  for (var e in w.prototype)
    n[e] = w.prototype[e];
  return n;
}
w.prototype.on = w.prototype.addEventListener = function(n, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(e), this;
};
w.prototype.once = function(n, e) {
  function t() {
    this.off(n, t), e.apply(this, arguments);
  }
  return t.fn = e, this.on(n, t), this;
};
w.prototype.off = w.prototype.removeListener = w.prototype.removeAllListeners = w.prototype.removeEventListener = function(n, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var t = this._callbacks["$" + n];
  if (!t) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + n], this;
  for (var s, r = 0; r < t.length; r++)
    if (s = t[r], s === e || s.fn === e) {
      t.splice(r, 1);
      break;
    }
  return t.length === 0 && delete this._callbacks["$" + n], this;
};
w.prototype.emit = function(n) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + n], s = 1; s < arguments.length; s++)
    e[s - 1] = arguments[s];
  if (t) {
    t = t.slice(0);
    for (var s = 0, r = t.length; s < r; ++s)
      t[s].apply(this, e);
  }
  return this;
};
w.prototype.emitReserved = w.prototype.emit;
w.prototype.listeners = function(n) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || [];
};
w.prototype.hasListeners = function(n) {
  return !!this.listeners(n).length;
};
const _e = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, t) => t(e, 0), B = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Us = "arraybuffer";
function jt(n, ...e) {
  return e.reduce((t, s) => (n.hasOwnProperty(s) && (t[s] = n[s]), t), {});
}
const $s = B.setTimeout, Vs = B.clearTimeout;
function me(n, e) {
  e.useNativeTimers ? (n.setTimeoutFn = $s.bind(B), n.clearTimeoutFn = Vs.bind(B)) : (n.setTimeoutFn = B.setTimeout.bind(B), n.clearTimeoutFn = B.clearTimeout.bind(B));
}
const Gs = 1.33;
function qs(n) {
  return typeof n == "string" ? Hs(n) : Math.ceil((n.byteLength || n.size) * Gs);
}
function Hs(n) {
  let e = 0, t = 0;
  for (let s = 0, r = n.length; s < r; s++)
    e = n.charCodeAt(s), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (s++, t += 4);
  return t;
}
function Wt() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Ms(n) {
  let e = "";
  for (let t in n)
    n.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
  return e;
}
function js(n) {
  let e = {}, t = n.split("&");
  for (let s = 0, r = t.length; s < r; s++) {
    let i = t[s].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class Ws extends Error {
  constructor(e, t, s) {
    super(e), this.description = t, this.context = s, this.type = "TransportError";
  }
}
class We extends w {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, me(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
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
  onError(e, t, s) {
    return super.emitReserved("error", new Ws(e, t, s)), this;
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
    const t = je(e, this.socket.binaryType);
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
    const t = Ms(e);
    return t.length ? "?" + t : "";
  }
}
class zs extends We {
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
      let s = 0;
      this._polling && (s++, this.once("pollComplete", function() {
        --s || t();
      })), this.writable || (s++, this.once("drain", function() {
        --s || t();
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
    const t = (s) => {
      if (this.readyState === "opening" && s.type === "open" && this.onOpen(), s.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(s);
    };
    xs(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, ks(e, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Wt()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(e, t);
  }
}
let zt = !1;
try {
  zt = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Ys = zt;
function Js() {
}
class Ks extends zs {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const t = location.protocol === "https:";
      let s = location.port;
      s || (s = t ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || s !== e.port;
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
    const s = this.request({
      method: "POST",
      data: e
    });
    s.on("success", t), s.on("error", (r, i) => {
      this.onError("xhr post error", r, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (t, s) => {
      this.onError("xhr poll error", t, s);
    }), this.pollXhr = e;
  }
}
let H = class ie extends w {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, t, s) {
    super(), this.createRequest = e, me(this, s), this._opts = s, this._method = s.method || "GET", this._uri = t, this._data = s.data !== void 0 ? s.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const t = jt(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this._opts.xd;
    const s = this._xhr = this.createRequest(t);
    try {
      s.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          s.setDisableHeaderCheck && s.setDisableHeaderCheck(!0);
          for (let r in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(r) && s.setRequestHeader(r, this._opts.extraHeaders[r]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          s.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        s.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(s), "withCredentials" in s && (s.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (s.timeout = this._opts.requestTimeout), s.onreadystatechange = () => {
        var r;
        s.readyState === 3 && ((r = this._opts.cookieJar) === null || r === void 0 || r.parseCookies(
          // @ts-ignore
          s.getResponseHeader("set-cookie")
        )), s.readyState === 4 && (s.status === 200 || s.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof s.status == "number" ? s.status : 0);
        }, 0));
      }, s.send(this._data);
    } catch (r) {
      this.setTimeoutFn(() => {
        this._onError(r);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = ie.requestsCount++, ie.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Js, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete ie.requests[this._index], this._xhr = null;
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
H.requestsCount = 0;
H.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", dt);
  else if (typeof addEventListener == "function") {
    const n = "onpagehide" in B ? "pagehide" : "unload";
    addEventListener(n, dt, !1);
  }
}
function dt() {
  for (let n in H.requests)
    H.requests.hasOwnProperty(n) && H.requests[n].abort();
}
const Qs = function() {
  const n = Yt({
    xdomain: !1
  });
  return n && n.responseType !== null;
}();
class Xs extends Ks {
  constructor(e) {
    super(e);
    const t = e && e.forceBase64;
    this.supportsBinary = Qs && !t;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new H(Yt, this.uri(), e);
  }
}
function Yt(n) {
  const e = n.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Ys))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new B[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Jt = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Zs extends We {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), t = this.opts.protocols, s = Jt ? {} : jt(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, t, s);
    } catch (r) {
      return this.emitReserved("error", r);
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
      const s = e[t], r = t === e.length - 1;
      Me(s, this.supportsBinary, (i) => {
        try {
          this.doWrite(s, i);
        } catch {
        }
        r && _e(() => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = Wt()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t);
  }
}
const be = B.WebSocket || B.MozWebSocket;
class er extends Zs {
  createSocket(e, t, s) {
    return Jt ? new be(e, t, s) : t ? new be(e, t) : new be(e);
  }
  doWrite(e, t) {
    this.ws.send(t);
  }
}
class tr extends We {
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
        const t = Ps(Number.MAX_SAFE_INTEGER, this.socket.binaryType), s = e.readable.pipeThrough(t).getReader(), r = vs();
        r.readable.pipeTo(e.writable), this._writer = r.writable.getWriter();
        const i = () => {
          s.read().then(({ done: a, value: h }) => {
            a || (this.onPacket(h), i());
          }).catch((a) => {
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
      const s = e[t], r = t === e.length - 1;
      this._writer.write(s).then(() => {
        r && _e(() => {
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
const nr = {
  websocket: er,
  webtransport: tr,
  polling: Xs
}, sr = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, rr = [
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
function ke(n) {
  if (n.length > 8e3)
    throw "URI too long";
  const e = n, t = n.indexOf("["), s = n.indexOf("]");
  t != -1 && s != -1 && (n = n.substring(0, t) + n.substring(t, s).replace(/:/g, ";") + n.substring(s, n.length));
  let r = sr.exec(n || ""), i = {}, o = 14;
  for (; o--; )
    i[rr[o]] = r[o] || "";
  return t != -1 && s != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = ir(i, i.path), i.queryKey = or(i, i.query), i;
}
function ir(n, e) {
  const t = /\/{2,9}/g, s = e.replace(t, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && s.splice(0, 1), e.slice(-1) == "/" && s.splice(s.length - 1, 1), s;
}
function or(n, e) {
  const t = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(s, r, i) {
    r && (t[r] = i);
  }), t;
}
const xe = typeof addEventListener == "function" && typeof removeEventListener == "function", oe = [];
xe && addEventListener("offline", () => {
  oe.forEach((n) => n());
}, !1);
class U extends w {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, t) {
    if (super(), this.binaryType = Us, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (t = e, e = null), e) {
      const s = ke(e);
      t.hostname = s.host, t.secure = s.protocol === "https" || s.protocol === "wss", t.port = s.port, s.query && (t.query = s.query);
    } else t.host && (t.hostname = ke(t.host).host);
    me(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((s) => {
      const r = s.prototype.name;
      this.transports.push(r), this._transportsByName[r] = s;
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = js(this.opts.query)), xe && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, oe.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    t.EIO = Mt, t.transport = e, this.id && (t.sid = this.id);
    const s = Object.assign({}, this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](s);
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
    const e = this.opts.rememberUpgrade && U.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", U.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
    for (let s = 0; s < this.writeBuffer.length; s++) {
      const r = this.writeBuffer[s].data;
      if (r && (t += qs(r)), s > 0 && t > this._maxPayload)
        return this.writeBuffer.slice(0, s);
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
    return e && (this._pingTimeoutTime = 0, _e(() => {
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
  write(e, t, s) {
    return this._sendPacket("message", e, t, s), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, t, s) {
    return this._sendPacket("message", e, t, s), this;
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
  _sendPacket(e, t, s, r) {
    if (typeof t == "function" && (r = t, t = void 0), typeof s == "function" && (r = s, s = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    s = s || {}, s.compress = s.compress !== !1;
    const i = {
      type: e,
      data: t,
      options: s
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, t = () => {
      this.off("upgrade", t), this.off("upgradeError", t), e();
    }, s = () => {
      this.once("upgrade", t), this.once("upgradeError", t);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? s() : e();
    }) : this.upgrading ? s() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (U.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), xe && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const s = oe.indexOf(this._offlineEventListener);
        s !== -1 && oe.splice(s, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
U.protocol = Mt;
class ar extends U {
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
    let t = this.createTransport(e), s = !1;
    U.priorWebsocketSuccess = !1;
    const r = () => {
      s || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (f) => {
        if (!s)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            U.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              s || this.readyState !== "closed" && (l(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const y = new Error("probe error");
            y.transport = t.name, this.emitReserved("upgradeError", y);
          }
      }));
    };
    function i() {
      s || (s = !0, l(), t.close(), t = null);
    }
    const o = (f) => {
      const y = new Error("probe error: " + f);
      y.transport = t.name, i(), this.emitReserved("upgradeError", y);
    };
    function a() {
      o("transport closed");
    }
    function h() {
      o("socket closed");
    }
    function u(f) {
      t && f.name !== t.name && i();
    }
    const l = () => {
      t.removeListener("open", r), t.removeListener("error", o), t.removeListener("close", a), this.off("close", h), this.off("upgrading", u);
    };
    t.once("open", r), t.once("error", o), t.once("close", a), this.once("close", h), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      s || t.open();
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
    for (let s = 0; s < e.length; s++)
      ~this.transports.indexOf(e[s]) && t.push(e[s]);
    return t;
  }
}
let cr = class extends ar {
  constructor(e, t = {}) {
    const s = typeof e == "object" ? e : t;
    (!s.transports || s.transports && typeof s.transports[0] == "string") && (s.transports = (s.transports || ["polling", "websocket", "webtransport"]).map((r) => nr[r]).filter((r) => !!r)), super(e, s);
  }
};
function ur(n, e = "", t) {
  let s = n;
  t = t || typeof location < "u" && location, n == null && (n = t.protocol + "//" + t.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = t.protocol + n : n = t.host + n), /^(https?|wss?):\/\//.test(n) || (typeof t < "u" ? n = t.protocol + "//" + n : n = "https://" + n), s = ke(n)), s.port || (/^(http|ws)$/.test(s.protocol) ? s.port = "80" : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")), s.path = s.path || "/";
  const i = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
  return s.id = s.protocol + "://" + i + ":" + s.port + e, s.href = s.protocol + "://" + i + (t && t.port === s.port ? "" : ":" + s.port), s;
}
const lr = typeof ArrayBuffer == "function", hr = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer, Kt = Object.prototype.toString, fr = typeof Blob == "function" || typeof Blob < "u" && Kt.call(Blob) === "[object BlobConstructor]", dr = typeof File == "function" || typeof File < "u" && Kt.call(File) === "[object FileConstructor]";
function ze(n) {
  return lr && (n instanceof ArrayBuffer || hr(n)) || fr && n instanceof Blob || dr && n instanceof File;
}
function ae(n, e) {
  if (!n || typeof n != "object")
    return !1;
  if (Array.isArray(n)) {
    for (let t = 0, s = n.length; t < s; t++)
      if (ae(n[t]))
        return !0;
    return !1;
  }
  if (ze(n))
    return !0;
  if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1)
    return ae(n.toJSON(), !0);
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && ae(n[t]))
      return !0;
  return !1;
}
function pr(n) {
  const e = [], t = n.data, s = n;
  return s.data = ve(t, e), s.attachments = e.length, { packet: s, buffers: e };
}
function ve(n, e) {
  if (!n)
    return n;
  if (ze(n)) {
    const t = { _placeholder: !0, num: e.length };
    return e.push(n), t;
  } else if (Array.isArray(n)) {
    const t = new Array(n.length);
    for (let s = 0; s < n.length; s++)
      t[s] = ve(n[s], e);
    return t;
  } else if (typeof n == "object" && !(n instanceof Date)) {
    const t = {};
    for (const s in n)
      Object.prototype.hasOwnProperty.call(n, s) && (t[s] = ve(n[s], e));
    return t;
  }
  return n;
}
function Er(n, e) {
  return n.data = Pe(n.data, e), delete n.attachments, n;
}
function Pe(n, e) {
  if (!n)
    return n;
  if (n && n._placeholder === !0) {
    if (typeof n.num == "number" && n.num >= 0 && n.num < e.length)
      return e[n.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(n))
    for (let t = 0; t < n.length; t++)
      n[t] = Pe(n[t], e);
  else if (typeof n == "object")
    for (const t in n)
      Object.prototype.hasOwnProperty.call(n, t) && (n[t] = Pe(n[t], e));
  return n;
}
const _r = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], mr = 5;
var g;
(function(n) {
  n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK";
})(g || (g = {}));
class gr {
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
    return (e.type === g.EVENT || e.type === g.ACK) && ae(e) ? this.encodeAsBinary({
      type: e.type === g.EVENT ? g.BINARY_EVENT : g.BINARY_ACK,
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
    return (e.type === g.BINARY_EVENT || e.type === g.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const t = pr(e), s = this.encodeAsString(t.packet), r = t.buffers;
    return r.unshift(s), r;
  }
}
function pt(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
class Ye extends w {
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
      const s = t.type === g.BINARY_EVENT;
      s || t.type === g.BINARY_ACK ? (t.type = s ? g.EVENT : g.ACK, this.reconstructor = new yr(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (ze(e) || e.base64)
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
    const s = {
      type: Number(e.charAt(0))
    };
    if (g[s.type] === void 0)
      throw new Error("unknown packet type " + s.type);
    if (s.type === g.BINARY_EVENT || s.type === g.BINARY_ACK) {
      const i = t + 1;
      for (; e.charAt(++t) !== "-" && t != e.length; )
        ;
      const o = e.substring(i, t);
      if (o != Number(o) || e.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      s.attachments = Number(o);
    }
    if (e.charAt(t + 1) === "/") {
      const i = t + 1;
      for (; ++t && !(e.charAt(t) === "," || t === e.length); )
        ;
      s.nsp = e.substring(i, t);
    } else
      s.nsp = "/";
    const r = e.charAt(t + 1);
    if (r !== "" && Number(r) == r) {
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
      s.id = Number(e.substring(i, t + 1));
    }
    if (e.charAt(++t)) {
      const i = this.tryParse(e.substr(t));
      if (Ye.isPayloadValid(s.type, i))
        s.data = i;
      else
        throw new Error("invalid payload");
    }
    return s;
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
      case g.CONNECT:
        return pt(t);
      case g.DISCONNECT:
        return t === void 0;
      case g.CONNECT_ERROR:
        return typeof t == "string" || pt(t);
      case g.EVENT:
      case g.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && _r.indexOf(t[0]) === -1);
      case g.ACK:
      case g.BINARY_ACK:
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
class yr {
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
      const t = Er(this.reconPack, this.buffers);
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
const Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Ye,
  Encoder: gr,
  get PacketType() {
    return g;
  },
  protocol: mr
}, Symbol.toStringTag, { value: "Module" }));
function N(n, e, t) {
  return n.on(e, t), function() {
    n.off(e, t);
  };
}
const Tr = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Qt extends w {
  /**
   * `Socket` constructor.
   */
  constructor(e, t, s) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, s && s.auth && (this.auth = s.auth), this._opts = Object.assign({}, s), this.io._autoConnect && this.open();
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
      N(e, "open", this.onopen.bind(this)),
      N(e, "packet", this.onpacket.bind(this)),
      N(e, "error", this.onerror.bind(this)),
      N(e, "close", this.onclose.bind(this))
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
    var s, r, i;
    if (Tr.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const o = {
      type: g.EVENT,
      data: t
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const l = this.ids++, f = t.pop();
      this._registerAckCallback(l, f), o.id = l;
    }
    const a = (r = (s = this.io.engine) === null || s === void 0 ? void 0 : s.transport) === null || r === void 0 ? void 0 : r.writable, h = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (h ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, t) {
    var s;
    const r = (s = this.flags.timeout) !== null && s !== void 0 ? s : this._opts.ackTimeout;
    if (r === void 0) {
      this.acks[e] = t;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      t.call(this, new Error("operation has timed out"));
    }, r), o = (...a) => {
      this.io.clearTimeoutFn(i), t.apply(this, a);
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
    return new Promise((s, r) => {
      const i = (o, a) => o ? r(o) : s(a);
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
    const s = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((r, ...i) => s !== this._queue[0] ? void 0 : (r !== null ? s.tryCount > this._opts.retries && (this._queue.shift(), t && t(r)) : (this._queue.shift(), t && t(null, ...i)), s.pending = !1, this._drainQueue())), this._queue.push(s), this._drainQueue();
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
      type: g.CONNECT,
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
      if (!this.sendBuffer.some((s) => String(s.id) === e)) {
        const s = this.acks[e];
        delete this.acks[e], s.withError && s.call(this, new Error("socket has been disconnected"));
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
        case g.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case g.EVENT:
        case g.BINARY_EVENT:
          this.onevent(e);
          break;
        case g.ACK:
        case g.BINARY_ACK:
          this.onack(e);
          break;
        case g.DISCONNECT:
          this.ondisconnect();
          break;
        case g.CONNECT_ERROR:
          this.destroy();
          const s = new Error(e.data.message);
          s.data = e.data.data, this.emitReserved("connect_error", s);
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
      for (const s of t)
        s.apply(this, e);
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
    let s = !1;
    return function(...r) {
      s || (s = !0, t.packet({
        type: g.ACK,
        id: e,
        data: r
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
    return this.connected && this.packet({ type: g.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      for (let s = 0; s < t.length; s++)
        if (e === t[s])
          return t.splice(s, 1), this;
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
      for (let s = 0; s < t.length; s++)
        if (e === t[s])
          return t.splice(s, 1), this;
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
      for (const s of t)
        s.apply(this, e.data);
    }
  }
}
function W(n) {
  n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0;
}
W.prototype.duration = function() {
  var n = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), t = Math.floor(e * this.jitter * n);
    n = Math.floor(e * 10) & 1 ? n + t : n - t;
  }
  return Math.min(n, this.max) | 0;
};
W.prototype.reset = function() {
  this.attempts = 0;
};
W.prototype.setMin = function(n) {
  this.ms = n;
};
W.prototype.setMax = function(n) {
  this.max = n;
};
W.prototype.setJitter = function(n) {
  this.jitter = n;
};
class Fe extends w {
  constructor(e, t) {
    var s;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, me(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((s = t.randomizationFactor) !== null && s !== void 0 ? s : 0.5), this.backoff = new W({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
    const r = t.parser || Rr;
    this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open();
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
    this.engine = new cr(this.uri, this.opts);
    const t = this.engine, s = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const r = N(t, "open", function() {
      s.onopen(), e && e();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = N(t, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, h = this.setTimeoutFn(() => {
        r(), i(new Error("timeout")), t.close();
      }, a);
      this.opts.autoUnref && h.unref(), this.subs.push(() => {
        this.clearTimeoutFn(h);
      });
    }
    return this.subs.push(r), this.subs.push(o), this;
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
      N(e, "ping", this.onping.bind(this)),
      N(e, "data", this.ondata.bind(this)),
      N(e, "error", this.onerror.bind(this)),
      N(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      N(this.decoder, "decoded", this.ondecoded.bind(this))
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
    _e(() => {
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
    let s = this.nsps[e];
    return s ? this._autoConnect && !s.active && s.connect() : (s = new Qt(this, e, t), this.nsps[e] = s), s;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const t = Object.keys(this.nsps);
    for (const s of t)
      if (this.nsps[s].active)
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
    for (let s = 0; s < t.length; s++)
      this.engine.write(t[s], e.options);
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
    var s;
    this.cleanup(), (s = this.engine) === null || s === void 0 || s.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const s = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((r) => {
          r ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", r)) : e.onreconnect();
        }));
      }, t);
      this.opts.autoUnref && s.unref(), this.subs.push(() => {
        this.clearTimeoutFn(s);
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
const Y = {};
function ce(n, e) {
  typeof n == "object" && (e = n, n = void 0), e = e || {};
  const t = ur(n, e.path || "/socket.io"), s = t.source, r = t.id, i = t.path, o = Y[r] && i in Y[r].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let h;
  return a ? h = new Fe(s, e) : (Y[r] || (Y[r] = new Fe(s, e)), h = Y[r]), t.query && !e.query && (e.query = t.queryKey), h.socket(t.path, e);
}
Object.assign(ce, {
  Manager: Fe,
  Socket: Qt,
  io: ce,
  connect: ce
});
ce(He, {
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
class wr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createInwardRegister(e) {
    const t = E.CREATE_INWARD_REGISTER;
    return this.post(t, e);
  }
  getAllInwardRegisters(e) {
    const t = E.GET_ALL_INWARD_REGISTERS(e);
    return this.get(t);
  }
  getInwardRegisterForViewById(e) {
    const t = E.GET_INWARD_REGISTER_FOR_VIEW_BY_ID(e);
    return this.get(t);
  }
  getInwardRegisterForUpdateById(e) {
    const t = E.GET_INWARD_REGISTER_FOR_UPDATE_BY_ID(e);
    return this.get(t);
  }
  updateInwardRegister(e, t) {
    const s = E.UPDATE_INWARD_REGISTER(e);
    return this.patch(s, t);
  }
  deleteInwardRegisterById(e) {
    const t = E.DELETE_INWARD_REGISTER(e);
    return this.delete(t);
  }
}
class br extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createAQR(e) {
    const t = E.CREATE_AQR;
    return this.post(t, e);
  }
  getAllAQRs(e) {
    const t = E.GET_ALL_AQR(e);
    return this.get(t);
  }
  getAQRForUpdateById(e) {
    const t = E.GET_AQR_FOR_UPDATE_BY_ID(e);
    return this.get(t);
  }
  getAQRForViewById(e) {
    const t = E.GET_AQR_FOR_VIEW_BY_ID(e);
    return this.get(t);
  }
  updateAQR(e, t) {
    const s = E.UPDATE_AQR(e);
    return this.patch(s, t);
  }
  deleteAQRById(e) {
    const t = E.DELETE_AQR(e);
    return this.delete(t);
  }
}
class Sr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDumpRegister(e) {
    const t = E.CREATE_DUMP_REGISTER;
    return this.post(t, e);
  }
  getAllDumpRegisters(e) {
    const t = E.GET_ALL_DUMP_REGISTERS(e);
    return this.get(t);
  }
  getDumpRegisterForViewById(e) {
    const t = E.GET_DUMP_REGISTER_FOR_VIEW_BY_ID(e);
    return this.get(t);
  }
  getDumpRegisterForUpdateById(e) {
    const t = E.GET_DUMP_REGISTER_FOR_UPDATE_BY_ID(e);
    return this.get(t);
  }
  updateDumpRegister(e, t) {
    const s = E.UPDATE_DUMP_REGISTER(e);
    return this.patch(s, t);
  }
  deleteDumpRegisterById(e) {
    const t = E.DELETE_DUMP_REGISTER(e);
    return this.delete(t);
  }
}
class Or extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createSecondSaleRegister(e) {
    const t = E.CREATE_SECOND_SALE;
    return this.post(t, e);
  }
  getAllSecondSaleRegisters(e) {
    const t = E.GET_ALL_SECOND_SALES(e);
    return this.get(t);
  }
  getSecondSaleRegisterForViewById(e) {
    const t = E.GET_SECOND_SALE_FOR_VIEW_BY_ID(e);
    return this.get(t);
  }
  getSecondSaleRegisterForUpdateById(e) {
    const t = E.GET_SECOND_SALE_FOR_UPDATE_BY_ID(e);
    return this.get(t);
  }
  updateSecondSaleRegister(e, t) {
    const s = E.UPDATE_SECOND_SALE(e);
    return this.patch(s, t);
  }
  deleteSecondSaleRegisterById(e) {
    const t = E.DELETE_SECOND_SALE(e);
    return this.delete(t);
  }
}
class Dr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVehicleDispatchRegister(e) {
    const t = E.CREATE_VEHICLE_DISPATCH_REGISTER;
    return this.post(t, e);
  }
  getAllVehicleDispatchRegisters(e) {
    const t = E.GET_ALL_VEHICLE_DISPATCH_REGISTERS(e);
    return this.get(t);
  }
  getVehicleDispatchRegisterForViewById(e) {
    const t = E.GET_VEHICLE_DISPATCH_REGISTER_FOR_VIEW_BY_ID(e);
    return this.get(t);
  }
  getVehicleDispatchRegisterForUpdateById(e) {
    const t = E.GET_VEHICLE_DISPATCH_REGISTER_FOR_UPDATE_BY_ID(e);
    return this.get(t);
  }
  updateVehicleDispatchRegister(e, t) {
    const s = E.UPDATE_VEHICLE_DISPATCH_REGISTER(e);
    return this.patch(s, t);
  }
  deleteVehicleDispatchRegisterById(e) {
    const t = E.DELETE_VEHICLE_DISPATCH_REGISTER(e);
    return this.delete(t);
  }
}
class Lr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createEODReport(e) {
    const t = E.CREATE_EOD_REPORT;
    return this.post(t, e);
  }
  getAllEODReports(e) {
    const t = E.GET_ALL_EOD_REPORT(e);
    return this.get(t);
  }
  getEODReportForViewById(e) {
    const t = E.GET_EOD_REPORT_FOR_VIEW_BY_ID(e);
    return this.get(t);
  }
  getEODReportForUpdateById(e) {
    const t = E.GET_EOD_REPORT_FOR_UPDATE_BY_ID(e);
    return this.get(t);
  }
  updateEODReport(e, t) {
    const s = E.UPDATE_EOD_REPORT(e);
    return this.patch(s, t);
  }
  deleteEODReportById(e) {
    const t = E.DELETE_EOD_REPORT(e);
    return this.delete(t);
  }
}
class Cr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborRegistration(e) {
    const t = E.CREATE_LABOR_REGISTRATION;
    return this.post(t, e);
  }
  getAllRegistreredLabors(e) {
    const t = E.GET_ALL_REGISTERED_LABORS(e);
    return this.get(t);
  }
  getRegistreredLaborById(e) {
    const t = `${E.GET_REGISTERED_LABOR_BY_ID}/${e}`;
    return this.get(t);
  }
  updateRegistreredLabor(e, t) {
    const s = `${E.UPDATE_REGISTERED_LABOR}/${e}`;
    return this.patch(s, t);
  }
  deleteRegistreredLaborById(e) {
    const t = `${E.DELETE_REGISTERED_LABOR}/${e}`;
    return this.delete(t);
  }
}
class Ir extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborAttendance(e) {
    const t = E.CREATE_LABOR_ATTENDANCE;
    return this.post(t, e);
  }
  getAllLaborAttendance() {
    const e = E.GET_ALL_LABOR_ATTENDANCE;
    return this.get(e);
  }
  getLaborAttendanceById(e) {
    const t = `${E.GET_LABOR_ATTENDANCE_BY_ID}/${e}`;
    return this.get(t);
  }
  updateLaborAttendance(e, t) {
    const s = `${E.UPDATE_LABOR_ATTENDANCE}/${e}`;
    return this.patch(s, t);
  }
  deleteLaborAttendanceById(e) {
    const t = `${E.DELETE_LABOR_ATTENDANCE}/${e}`;
    return this.delete(t);
  }
}
class Br extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createFinalInvoice(e) {
    const t = `${E.CREATE_FINAL_INV}/${e}`;
    return this.post(t);
  }
  getAllFinalInvoices() {
    const e = E.GET_ALL_FINAL_INV;
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
export {
  br as AQRServices,
  Sr as DumpRegisterServices,
  Lr as EODReportServices,
  Br as FinalInvoiceServices,
  wr as InwardRegisterServices,
  Ir as LaborAttendanceServices,
  Cr as LaborRegistrationServices,
  Or as SecondSaleRegisterServices,
  Dr as VehicleDispatchRegisterServices,
  E as inventoryApiUrl
};
