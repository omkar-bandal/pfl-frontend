const Nn = {
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
}, _ = {
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
function Pe(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: tt } = Object.prototype, { getPrototypeOf: le } = Object, J = /* @__PURE__ */ ((t) => (e) => {
  const n = tt.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (t) => (t = t.toLowerCase(), (e) => J(e) === t), Q = (t) => (e) => typeof e === t, { isArray: k } = Array, $ = Q("undefined");
function nt(t) {
  return t !== null && !$(t) && t.constructor !== null && !$(t.constructor) && L(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ce = I("ArrayBuffer");
function rt(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ce(t.buffer), e;
}
const st = Q("string"), L = Q("function"), Ne = Q("number"), K = (t) => t !== null && typeof t == "object", ot = (t) => t === !0 || t === !1, V = (t) => {
  if (J(t) !== "object")
    return !1;
  const e = le(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, it = I("Date"), at = I("File"), ct = I("Blob"), ut = I("FileList"), lt = (t) => K(t) && L(t.pipe), dt = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || L(t.append) && ((e = J(t)) === "formdata" || // detect form-data instance
  e === "object" && L(t.toString) && t.toString() === "[object FormData]"));
}, ft = I("URLSearchParams"), [Et, ht, pt, Rt] = ["ReadableStream", "Request", "Response", "Headers"].map(I), _t = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function q(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), k(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], e.call(null, t[c], c, t);
  }
}
function Be(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const x = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, xe = (t) => !$(t) && t !== x;
function re() {
  const { caseless: t } = xe(this) && this || {}, e = {}, n = (r, s) => {
    const o = t && Be(e, s) || s;
    V(e[o]) && V(r) ? e[o] = re(e[o], r) : V(r) ? e[o] = re({}, r) : k(r) ? e[o] = r.slice() : e[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && q(arguments[r], n);
  return e;
}
const Tt = (t, e, n, { allOwnKeys: r } = {}) => (q(e, (s, o) => {
  n && L(s) ? t[o] = Pe(s, n) : t[o] = s;
}, { allOwnKeys: r }), t), mt = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), At = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, St = (t, e, n, r) => {
  let s, o, i;
  const c = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, t, e)) && !c[i] && (e[i] = t[i], c[i] = !0);
    t = n !== !1 && le(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, gt = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, yt = (t) => {
  if (!t) return null;
  if (k(t)) return t;
  let e = t.length;
  if (!Ne(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Dt = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && le(Uint8Array)), bt = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, Ot = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, wt = I("HTMLFormElement"), Lt = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Re = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), It = I("RegExp"), Ge = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  q(n, (s, o) => {
    let i;
    (i = e(s, o, t)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(t, r);
}, Pt = (t) => {
  Ge(t, (e, n) => {
    if (L(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (L(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ct = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return k(t) ? r(t) : r(String(t).split(e)), n;
}, Nt = () => {
}, Bt = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, Z = "abcdefghijklmnopqrstuvwxyz", _e = "0123456789", Ue = {
  DIGIT: _e,
  ALPHA: Z,
  ALPHA_DIGIT: Z + Z.toUpperCase() + _e
}, xt = (t = 16, e = Ue.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function Gt(t) {
  return !!(t && L(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Ut = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (K(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = k(r) ? [] : {};
        return q(r, (i, c) => {
          const d = n(i, s + 1);
          !$(d) && (o[c] = d);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, kt = I("AsyncFunction"), Ft = (t) => t && (K(t) || L(t)) && L(t.then) && L(t.catch), ke = ((t, e) => t ? setImmediate : e ? ((n, r) => (x.addEventListener("message", ({ source: s, data: o }) => {
  s === x && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), x.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  L(x.postMessage)
), Ht = typeof queueMicrotask < "u" ? queueMicrotask.bind(x) : typeof process < "u" && process.nextTick || ke, a = {
  isArray: k,
  isArrayBuffer: Ce,
  isBuffer: nt,
  isFormData: dt,
  isArrayBufferView: rt,
  isString: st,
  isNumber: Ne,
  isBoolean: ot,
  isObject: K,
  isPlainObject: V,
  isReadableStream: Et,
  isRequest: ht,
  isResponse: pt,
  isHeaders: Rt,
  isUndefined: $,
  isDate: it,
  isFile: at,
  isBlob: ct,
  isRegExp: It,
  isFunction: L,
  isStream: lt,
  isURLSearchParams: ft,
  isTypedArray: Dt,
  isFileList: ut,
  forEach: q,
  merge: re,
  extend: Tt,
  trim: _t,
  stripBOM: mt,
  inherits: At,
  toFlatObject: St,
  kindOf: J,
  kindOfTest: I,
  endsWith: gt,
  toArray: yt,
  forEachEntry: bt,
  matchAll: Ot,
  isHTMLForm: wt,
  hasOwnProperty: Re,
  hasOwnProp: Re,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ge,
  freezeMethods: Pt,
  toObjectSet: Ct,
  toCamelCase: Lt,
  noop: Nt,
  toFiniteNumber: Bt,
  findKey: Be,
  global: x,
  isContextDefined: xe,
  ALPHABET: Ue,
  generateString: xt,
  isSpecCompliantForm: Gt,
  toJSONObject: Ut,
  isAsyncFn: kt,
  isThenable: Ft,
  setImmediate: ke,
  asap: Ht
};
function p(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(p, Error, {
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
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Fe = p.prototype, He = {};
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
  He[t] = { value: t };
});
Object.defineProperties(p, He);
Object.defineProperty(Fe, "isAxiosError", { value: !0 });
p.from = (t, e, n, r, s, o) => {
  const i = Object.create(Fe);
  return a.toFlatObject(t, i, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), p.call(i, t.message, e, n, r, s), i.cause = t, i.name = t.name, o && Object.assign(i, o), i;
};
const $t = null;
function se(t) {
  return a.isPlainObject(t) || a.isArray(t);
}
function $e(t) {
  return a.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Te(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = $e(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function qt(t) {
  return a.isArray(t) && !t.some(se);
}
const Mt = a.toFlatObject(a, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Y(t, e, n) {
  if (!a.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(R, h) {
    return !a.isUndefined(h[R]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(e);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(E) {
    if (E === null) return "";
    if (a.isDate(E))
      return E.toISOString();
    if (!d && a.isBlob(E))
      throw new p("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(E) || a.isTypedArray(E) ? d && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function l(E, R, h) {
    let A = E;
    if (E && !h && typeof E == "object") {
      if (a.endsWith(R, "{}"))
        R = r ? R : R.slice(0, -2), E = JSON.stringify(E);
      else if (a.isArray(E) && qt(E) || (a.isFileList(E) || a.endsWith(R, "[]")) && (A = a.toArray(E)))
        return R = $e(R), A.forEach(function(D, P) {
          !(a.isUndefined(D) || D === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Te([R], P, o) : i === null ? R : R + "[]",
            u(D)
          );
        }), !1;
    }
    return se(E) ? !0 : (e.append(Te(h, R, o), u(E)), !1);
  }
  const f = [], m = Object.assign(Mt, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: se
  });
  function g(E, R) {
    if (!a.isUndefined(E)) {
      if (f.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      f.push(E), a.forEach(E, function(A, y) {
        (!(a.isUndefined(A) || A === null) && s.call(
          e,
          A,
          a.isString(y) ? y.trim() : y,
          R,
          m
        )) === !0 && g(A, R ? R.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!a.isObject(t))
    throw new TypeError("data must be an object");
  return g(t), e;
}
function me(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function de(t, e) {
  this._pairs = [], t && Y(t, this, e);
}
const qe = de.prototype;
qe.append = function(e, n) {
  this._pairs.push([e, n]);
};
qe.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, me);
  } : me;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function jt(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Me(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || jt, s = n && n.serialize;
  let o;
  if (s ? o = s(e, n) : o = a.isURLSearchParams(e) ? e.toString() : new de(e, n).toString(r), o) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class Ae {
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
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
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
    a.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const je = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vt = typeof URLSearchParams < "u" ? URLSearchParams : de, zt = typeof FormData < "u" ? FormData : null, Wt = typeof Blob < "u" ? Blob : null, vt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vt,
    FormData: zt,
    Blob: Wt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, fe = typeof window < "u" && typeof document < "u", oe = typeof navigator == "object" && navigator || void 0, Jt = fe && (!oe || ["ReactNative", "NativeScript", "NS"].indexOf(oe.product) < 0), Qt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Kt = fe && window.location.href || "http://localhost", Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: fe,
  hasStandardBrowserEnv: Jt,
  hasStandardBrowserWebWorkerEnv: Qt,
  navigator: oe,
  origin: Kt
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...Yt,
  ...vt
};
function Xt(t, e) {
  return Y(t, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Zt(t) {
  return a.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function en(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function Ve(t) {
  function e(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), d = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), e(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = en(s[i])), !c);
  }
  if (a.isFormData(t) && a.isFunction(t.entries)) {
    const n = {};
    return a.forEachEntry(t, (r, s) => {
      e(Zt(r), s, n, 0);
    }), n;
  }
  return null;
}
function tn(t, e, n) {
  if (a.isString(t))
    try {
      return (e || JSON.parse)(t), a.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(t);
}
const M = {
  transitional: je,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(e);
    if (o && a.isHTMLForm(e) && (e = new FormData(e)), a.isFormData(e))
      return s ? JSON.stringify(Ve(e)) : e;
    if (a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) || a.isReadableStream(e))
      return e;
    if (a.isArrayBufferView(e))
      return e.buffer;
    if (a.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Xt(e, this.formSerializer).toString();
      if ((c = a.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return Y(
          c ? { "files[]": e } : e,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), tn(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || M.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(e) || a.isReadableStream(e))
      return e;
    if (e && a.isString(e) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? p.from(c, p.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
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
a.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  M.headers[t] = {};
});
const nn = a.toObjectSet([
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
]), rn = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || e[n] && nn[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Se = Symbol("internals");
function H(t) {
  return t && String(t).trim().toLowerCase();
}
function z(t) {
  return t === !1 || t == null ? t : a.isArray(t) ? t.map(z) : String(t);
}
function sn(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const on = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ee(t, e, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!a.isString(e)) {
    if (a.isString(r))
      return e.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(e);
  }
}
function an(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function cn(t, e) {
  const n = a.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, e, s, o, i);
      },
      configurable: !0
    });
  });
}
class w {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(c, d, u) {
      const l = H(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = a.findKey(s, l);
      (!f || s[f] === void 0 || u === !0 || u === void 0 && s[f] !== !1) && (s[f || d] = z(c));
    }
    const i = (c, d) => a.forEach(c, (u, l) => o(u, l, d));
    if (a.isPlainObject(e) || e instanceof this.constructor)
      i(e, n);
    else if (a.isString(e) && (e = e.trim()) && !on(e))
      i(rn(e), n);
    else if (a.isHeaders(e))
      for (const [c, d] of e.entries())
        o(d, c, r);
    else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = H(e), e) {
      const r = a.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return sn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = H(e), e) {
      const r = a.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || ee(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = H(i), i) {
        const c = a.findKey(r, i);
        c && (!n || ee(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || ee(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = z(s), delete n[o];
        return;
      }
      const c = e ? an(o) : String(o).trim();
      c !== o && delete n[o], n[c] = z(s), r[c] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[Se] = this[Se] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = H(i);
      r[c] || (cn(s, i), r[c] = !0);
    }
    return a.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
w.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(w.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(w);
function te(t, e) {
  const n = this || M, r = e || n, s = w.from(r.headers);
  let o = r.data;
  return a.forEach(t, function(c) {
    o = c.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function ze(t) {
  return !!(t && t.__CANCEL__);
}
function F(t, e, n) {
  p.call(this, t ?? "canceled", p.ERR_CANCELED, e, n), this.name = "CanceledError";
}
a.inherits(F, p, {
  __CANCEL__: !0
});
function We(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new p(
    "Request failed with status code " + n.status,
    [p.ERR_BAD_REQUEST, p.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function un(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ln(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, o = 0, i;
  return e = e !== void 0 ? e : 1e3, function(d) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = d, r[s] = u;
    let f = o, m = 0;
    for (; f !== s; )
      m += n[f++], f = f % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), u - i < e)
      return;
    const g = l && u - l;
    return g ? Math.round(m * 1e3 / g) : void 0;
  };
}
function dn(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const i = (u, l = Date.now()) => {
    n = l, s = null, o && (clearTimeout(o), o = null), t.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), f = l - n;
    f >= r ? i(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - f)));
  }, () => s && i(s)];
}
const W = (t, e, n = 3) => {
  let r = 0;
  const s = ln(50, 250);
  return dn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, d = i - r, u = s(d), l = i <= c;
    r = i;
    const f = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: d,
      rate: u || void 0,
      estimated: u && c && l ? (c - i) / u : void 0,
      event: o,
      lengthComputable: c != null,
      [e ? "download" : "upload"]: !0
    };
    t(f);
  }, n);
}, ge = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, ye = (t) => (...e) => a.asap(() => t(...e)), fn = O.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = O.navigator && /(msie|trident)/i.test(O.navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return e && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const c = a.isString(i) ? s(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), En = O.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, o) {
      const i = [t + "=" + encodeURIComponent(e)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function hn(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function pn(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ve(t, e) {
  return t && !hn(e) ? pn(t, e) : e;
}
const De = (t) => t instanceof w ? { ...t } : t;
function U(t, e) {
  e = e || {};
  const n = {};
  function r(u, l, f) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: f }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, f) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, f);
    } else return r(u, l, f);
  }
  function o(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, f) {
    if (f in e)
      return r(u, l);
    if (f in t)
      return r(void 0, u);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, l) => s(De(u), De(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, t, e)), function(l) {
    const f = d[l] || s, m = f(t[l], e[l], l);
    a.isUndefined(m) && f !== c || (n[l] = m);
  }), n;
}
const Je = (t) => {
  const e = U({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = e;
  e.headers = i = w.from(i), e.url = Me(ve(e.baseURL, e.url), t.params, t.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let d;
  if (a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [u, ...l] = d ? d.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(e)), r || r !== !1 && fn(e.url))) {
    const u = s && o && En.read(o);
    u && i.set(s, u);
  }
  return e;
}, Rn = typeof XMLHttpRequest < "u", _n = Rn && function(t) {
  return new Promise(function(n, r) {
    const s = Je(t);
    let o = s.data;
    const i = w.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: u } = s, l, f, m, g, E;
    function R() {
      g && g(), E && E(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function A() {
      if (!h)
        return;
      const D = w.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), b = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: D,
        config: t,
        request: h
      };
      We(function(B) {
        n(B), R();
      }, function(B) {
        r(B), R();
      }, b), h = null;
    }
    "onloadend" in h ? h.onloadend = A : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, h.onabort = function() {
      h && (r(new p("Request aborted", p.ECONNABORTED, t, h)), h = null);
    }, h.onerror = function() {
      r(new p("Network Error", p.ERR_NETWORK, t, h)), h = null;
    }, h.ontimeout = function() {
      let P = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const b = s.transitional || je;
      s.timeoutErrorMessage && (P = s.timeoutErrorMessage), r(new p(
        P,
        b.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED,
        t,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && a.forEach(i.toJSON(), function(P, b) {
      h.setRequestHeader(b, P);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), c && c !== "json" && (h.responseType = s.responseType), u && ([m, E] = W(u, !0), h.addEventListener("progress", m)), d && h.upload && ([f, g] = W(d), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", g)), (s.cancelToken || s.signal) && (l = (D) => {
      h && (r(!D || D.type ? new F(null, t, h) : D), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const y = un(s.url);
    if (y && O.protocols.indexOf(y) === -1) {
      r(new p("Unsupported protocol " + y + ":", p.ERR_BAD_REQUEST, t));
      return;
    }
    h.send(o || null);
  });
}, Tn = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof p ? l : new F(l instanceof Error ? l.message : l));
      }
    };
    let i = e && setTimeout(() => {
      i = null, o(new p(`timeout ${e} of ms exceeded`, p.ETIMEDOUT));
    }, e);
    const c = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", o));
    const { signal: d } = r;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, mn = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, An = async function* (t, e) {
  for await (const n of Sn(t))
    yield* mn(n, e);
}, Sn = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, be = (t, e, n, r) => {
  const s = An(t, e);
  let o = 0, i, c = (d) => {
    i || (i = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          c(), d.close();
          return;
        }
        let f = l.byteLength;
        if (n) {
          let m = o += f;
          n(m);
        }
        d.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, X = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Qe = X && typeof ReadableStream == "function", gn = X && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Ke = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, yn = Qe && Ke(() => {
  let t = !1;
  const e = new Request(O.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Oe = 64 * 1024, ie = Qe && Ke(() => a.isReadableStream(new Response("").body)), v = {
  stream: ie && ((t) => t.body)
};
X && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !v[e] && (v[e] = a.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new p(`Response type '${e}' is not supported`, p.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Dn = async (t) => {
  if (t == null)
    return 0;
  if (a.isBlob(t))
    return t.size;
  if (a.isSpecCompliantForm(t))
    return (await new Request(O.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(t) || a.isArrayBuffer(t))
    return t.byteLength;
  if (a.isURLSearchParams(t) && (t = t + ""), a.isString(t))
    return (await gn(t)).byteLength;
}, bn = async (t, e) => {
  const n = a.toFiniteNumber(t.getContentLength());
  return n ?? Dn(e);
}, On = X && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: d,
    responseType: u,
    headers: l,
    withCredentials: f = "same-origin",
    fetchOptions: m
  } = Je(t);
  u = u ? (u + "").toLowerCase() : "text";
  let g = Tn([s, o && o.toAbortSignal()], i), E;
  const R = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let h;
  try {
    if (d && yn && n !== "get" && n !== "head" && (h = await bn(l, r)) !== 0) {
      let b = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), C;
      if (a.isFormData(r) && (C = b.headers.get("content-type")) && l.setContentType(C), b.body) {
        const [B, j] = ge(
          h,
          W(ye(d))
        );
        r = be(b.body, Oe, B, j);
      }
    }
    a.isString(f) || (f = f ? "include" : "omit");
    const A = "credentials" in Request.prototype;
    E = new Request(e, {
      ...m,
      signal: g,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: A ? f : void 0
    });
    let y = await fetch(E);
    const D = ie && (u === "stream" || u === "response");
    if (ie && (c || D && R)) {
      const b = {};
      ["status", "statusText", "headers"].forEach((pe) => {
        b[pe] = y[pe];
      });
      const C = a.toFiniteNumber(y.headers.get("content-length")), [B, j] = c && ge(
        C,
        W(ye(c), !0)
      ) || [];
      y = new Response(
        be(y.body, Oe, B, () => {
          j && j(), R && R();
        }),
        b
      );
    }
    u = u || "text";
    let P = await v[a.findKey(v, u) || "text"](y, t);
    return !D && R && R(), await new Promise((b, C) => {
      We(b, C, {
        data: P,
        headers: w.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: t,
        request: E
      });
    });
  } catch (A) {
    throw R && R(), A && A.name === "TypeError" && /fetch/i.test(A.message) ? Object.assign(
      new p("Network Error", p.ERR_NETWORK, t, E),
      {
        cause: A.cause || A
      }
    ) : p.from(A, A && A.code, t, E);
  }
}), ae = {
  http: $t,
  xhr: _n,
  fetch: On
};
a.forEach(ae, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const we = (t) => `- ${t}`, wn = (t) => a.isFunction(t) || t === null || t === !1, Ye = {
  getAdapter: (t) => {
    t = a.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let o = 0; o < e; o++) {
      n = t[o];
      let i;
      if (r = n, !wn(n) && (r = ae[(i = String(n)).toLowerCase()], r === void 0))
        throw new p(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? o.length > 1 ? `since :
` + o.map(we).join(`
`) : " " + we(o[0]) : "as no adapter specified";
      throw new p(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ae
};
function ne(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new F(null, t);
}
function Le(t) {
  return ne(t), t.headers = w.from(t.headers), t.data = te.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ye.getAdapter(t.adapter || M.adapter)(t).then(function(r) {
    return ne(t), r.data = te.call(
      t,
      t.transformResponse,
      r
    ), r.headers = w.from(r.headers), r;
  }, function(r) {
    return ze(r) || (ne(t), r && r.response && (r.response.data = te.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = w.from(r.response.headers))), Promise.reject(r);
  });
}
const Xe = "1.7.7", Ee = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Ee[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ie = {};
Ee.transitional = function(e, n, r) {
  function s(o, i) {
    return "[Axios v" + Xe + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (e === !1)
      throw new p(
        s(i, " has been removed" + (n ? " in " + n : "")),
        p.ERR_DEPRECATED
      );
    return n && !Ie[i] && (Ie[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, i, c) : !0;
  };
};
function Ln(t, e, n) {
  if (typeof t != "object")
    throw new p("options must be an object", p.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = e[o];
    if (i) {
      const c = t[o], d = c === void 0 || i(c, o, t);
      if (d !== !0)
        throw new p("option " + o + " must be " + d, p.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new p("Unknown option " + o, p.ERR_BAD_OPTION);
  }
}
const ce = {
  assertOptions: Ln,
  validators: Ee
}, N = ce.validators;
class G {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Ae(),
      response: new Ae()
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
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = U(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ce.assertOptions(r, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ce.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (E) => {
        delete o[E];
      }
    ), n.headers = w.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(R) {
      typeof R.runWhen == "function" && R.runWhen(n) === !1 || (d = d && R.synchronous, c.unshift(R.fulfilled, R.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(R) {
      u.push(R.fulfilled, R.rejected);
    });
    let l, f = 0, m;
    if (!d) {
      const E = [Le.bind(this), void 0];
      for (E.unshift.apply(E, c), E.push.apply(E, u), m = E.length, l = Promise.resolve(n); f < m; )
        l = l.then(E[f++], E[f++]);
      return l;
    }
    m = c.length;
    let g = n;
    for (f = 0; f < m; ) {
      const E = c[f++], R = c[f++];
      try {
        g = E(g);
      } catch (h) {
        R.call(this, h);
        break;
      }
    }
    try {
      l = Le.call(this, g);
    } catch (E) {
      return Promise.reject(E);
    }
    for (f = 0, m = u.length; f < m; )
      l = l.then(u[f++], u[f++]);
    return l;
  }
  getUri(e) {
    e = U(this.defaults, e);
    const n = ve(e.baseURL, e.url);
    return Me(n, e.params, e.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(e) {
  G.prototype[e] = function(n, r) {
    return this.request(U(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, i, c) {
      return this.request(U(c || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  G.prototype[e] = n(), G.prototype[e + "Form"] = n(!0);
});
class he {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, e(function(o, i, c) {
      r.reason || (r.reason = new F(o, i, c), n(r.reason));
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
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new he(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function In(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Pn(t) {
  return a.isObject(t) && t.isAxiosError === !0;
}
const ue = {
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
Object.entries(ue).forEach(([t, e]) => {
  ue[e] = t;
});
function Ze(t) {
  const e = new G(t), n = Pe(G.prototype.request, e);
  return a.extend(n, G.prototype, e, { allOwnKeys: !0 }), a.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ze(U(t, s));
  }, n;
}
const S = Ze(M);
S.Axios = G;
S.CanceledError = F;
S.CancelToken = he;
S.isCancel = ze;
S.VERSION = Xe;
S.toFormData = Y;
S.AxiosError = p;
S.Cancel = S.CanceledError;
S.all = function(e) {
  return Promise.all(e);
};
S.spread = In;
S.isAxiosError = Pn;
S.mergeConfig = U;
S.AxiosHeaders = w;
S.formToJSON = (t) => Ve(a.isHTMLForm(t) ? new FormData(t) : t);
S.getAdapter = Ye.getAdapter;
S.HttpStatusCode = ue;
S.default = S;
const et = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com", Cn = () => S.create({
  baseURL: et,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class T {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = T.createService();
  }
  static createService() {
    return T._axiosInstance || (T._axiosInstance = Cn(), T.setAuthHeaderInterceptor(), T._axiosInstance.interceptors.response.use(T.handleSuccess, T.handleError)), T._axiosInstance;
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
      return (await S.post(`${et}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    T._axiosInstance.interceptors.request.use(
      function(e) {
        const n = localStorage.getItem("access_token");
        return n && (e.headers.Authorization = `Bearer ${n}`), e;
      },
      function(e) {
        return Promise.reject(e);
      }
    );
  }
  static setResponseInterceptor() {
    T._axiosInstance.interceptors.response.use(
      T.handleSuccess,
      T.handleError
    );
  }
  static handleSuccess(e) {
    return e.data;
  }
  // Updated error handler to catch 401 errors and try to refresh the token
  static async handleError(e) {
    var s;
    const n = e.config;
    if (e.response && e.response.status === 401 && !n._retry) {
      n._retry = !0;
      try {
        const o = await T.refreshAccessToken();
        return T.setAccessToken(o), n.headers.set("Authorization", `Bearer ${o}`), T._axiosInstance(n);
      } catch (o) {
        console.error("Refresh token failed", o);
      }
    }
    const r = { name: "Error", message: "Something went wrong!" };
    return e.response && e.response.data && (r.message = (s = e.response.data) == null ? void 0 : s.message), Promise.reject(r);
  }
  get(e) {
    return this.service.get(e);
  }
  post(e, n) {
    return this.service.post(e, n);
  }
  postFormData(e, n) {
    return this.service.post(e, n, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  put(e, n) {
    return this.service.put(e, n);
  }
  putFormData(e, n) {
    return this.service.put(e, n, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  patch(e, n) {
    return this.service.patch(e, n);
  }
  patchFormData(e, n) {
    return this.service.patch(e, n, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  delete(e) {
    return this.service.delete(e);
  }
}
class Bn extends T {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createInwardRegister(e) {
    const n = _.CREATE_INWARD_REGISTER;
    return this.post(n, e);
  }
  getAllInwardRegisters() {
    const e = _.GET_ALL_INWARD_REGISTERS;
    return this.get(e);
  }
  getInwardRegisterById(e) {
    const n = `${_.GET_INWARD_REGISTER_BY_ID}/${e}`;
    return this.get(n);
  }
  updateInwardRegister(e, n) {
    const r = `${_.UPDATE_INWARD_REGISTER}/${e}`;
    return this.patch(r, n);
  }
  deleteInwardRegisterById(e) {
    const n = `${_.DELETE_INWARD_REGISTER}/${e}`;
    return this.delete(n);
  }
}
class xn extends T {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createAQR(e) {
    const n = _.CREATE_AQR;
    return this.post(n, e);
  }
  getAllAQRs() {
    const e = _.GET_ALL_AQR;
    return this.get(e);
  }
  getAQRById(e) {
    const n = `${_.GET_AQR_BY_ID}/${e}`;
    return this.get(n);
  }
  updateAQR(e, n) {
    const r = `${_.UPDATE_AQR}/${e}`;
    return this.patch(r, n);
  }
  deleteAQRById(e) {
    const n = `${_.DELETE_AQR}/${e}`;
    return this.delete(n);
  }
}
class Gn extends T {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDumpRegister(e) {
    const n = _.CREATE_DUMP_REGISTER;
    return this.post(n, e);
  }
  getAllDumpRegisters() {
    const e = _.GET_ALL_DUMP_REGISTERS;
    return this.get(e);
  }
  getDumpRegisterById(e) {
    const n = `${_.GET_DUMP_REGISTER_BY_ID}/${e}`;
    return this.get(n);
  }
  updateDumpRegister(e, n) {
    const r = `${_.UPDATE_DUMP_REGISTER}/${e}`;
    return this.patch(r, n);
  }
  deleteDumpRegisterById(e) {
    const n = `${_.DELETE_DUMP_REGISTER}/${e}`;
    return this.delete(n);
  }
}
class Un extends T {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createSecondSaleRegister(e) {
    const n = _.CREATE_SECOND_SALE_REGISTER;
    return this.post(n, e);
  }
  getAllSecondSaleRegisters() {
    const e = _.GET_ALL_SECOND_SALE_REGISTERS;
    return this.get(e);
  }
  getSecondSaleRegisterById(e) {
    const n = `${_.GET_SECOND_SALE_REGISTER_BY_ID}/${e}`;
    return this.get(n);
  }
  updateSecondSaleRegister(e, n) {
    const r = `${_.UPDATE_SECOND_SALE_REGISTER}/${e}`;
    return this.patch(r, n);
  }
  deleteSecondSaleRegisterById(e) {
    const n = `${_.DELETE_SECOND_SALE_REGISTER}/${e}`;
    return this.delete(n);
  }
}
class kn extends T {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVehicleDispatchRegister(e) {
    const n = _.CREATE_VEHICLE_DISPATCH_REGISTER;
    return this.post(n, e);
  }
  getAllVehicleDispatchRegisters() {
    const e = _.GET_ALL_VEHICLE_DISPATCH_REGISTERS;
    return this.get(e);
  }
  getVehicleDispatchRegisterById(e) {
    const n = `${_.GET_VEHICLE_DISPATCH_REGISTER_BY_ID}/${e}`;
    return this.get(n);
  }
  updateVehicleDispatchRegister(e, n) {
    const r = `${_.UPDATE_VEHICLE_DISPATCH_REGISTER}/${e}`;
    return this.patch(r, n);
  }
  deleteVehicleDispatchRegisterById(e) {
    const n = `${_.DELETE_VEHICLE_DISPATCH_REGISTER}/${e}`;
    return this.delete(n);
  }
}
class Fn extends T {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createEODReport(e) {
    const n = _.CREATE_EOD_REPORT;
    return this.post(n, e);
  }
  getAllEODReports() {
    const e = _.GET_ALL_EOD_REPORT;
    return this.get(e);
  }
  getEODReportById(e) {
    const n = `${_.GET_EOD_REPORT_BY_ID}/${e}`;
    return this.get(n);
  }
  updateEODReport(e, n) {
    const r = `${_.UPDATE_EOD_REPORT}/${e}`;
    return this.patch(r, n);
  }
  deleteEODReportById(e) {
    const n = `${_.DELETE_EOD_REPORT}/${e}`;
    return this.delete(n);
  }
}
class Hn extends T {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborRegistration(e) {
    const n = _.CREATE_LABOR_REGISTRATION;
    return this.post(n, e);
  }
  getAllRegistreredLabors() {
    const e = _.GET_ALL_REGISTERED_LABORS;
    return this.get(e);
  }
  getRegistreredLaborById(e) {
    const n = `${_.GET_REGISTERED_LABOR_BY_ID}/${e}`;
    return this.get(n);
  }
  updateRegistreredLabor(e, n) {
    const r = `${_.UPDATE_REGISTERED_LABOR}/${e}`;
    return this.patch(r, n);
  }
  deleteRegistreredLaborById(e) {
    const n = `${_.DELETE_REGISTERED_LABOR}/${e}`;
    return this.delete(n);
  }
}
class $n extends T {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborAttendance(e) {
    const n = _.CREATE_LABOR_ATTENDANCE;
    return this.post(n, e);
  }
  getAllLaborAttendance() {
    const e = _.GET_ALL_LABOR_ATTENDANCE;
    return this.get(e);
  }
  getLaborAttendanceById(e) {
    const n = `${_.GET_LABOR_ATTENDANCE_BY_ID}/${e}`;
    return this.get(n);
  }
  updateLaborAttendance(e, n) {
    const r = `${_.UPDATE_LABOR_ATTENDANCE}/${e}`;
    return this.patch(r, n);
  }
  deleteLaborAttendanceById(e) {
    const n = `${_.DELETE_LABOR_ATTENDANCE}/${e}`;
    return this.delete(n);
  }
}
export {
  xn as AQRServices,
  Gn as DumpRegisterServices,
  Fn as EODReportServices,
  Nn as INVENTORY_API_URL,
  Bn as InwardRegisterServices,
  $n as LaborAttendanceServices,
  Hn as LaborRegistrationServices,
  Un as SecondSaleRegisterServices,
  kn as VehicleDispatchRegisterServices,
  _ as inventoryApiUrl
};
