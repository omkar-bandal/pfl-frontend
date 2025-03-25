const Qs = {
  //Purchase
  //RFPA
  GET_ALL_RFPA: "/rfpa/",
  GET_A_RFPA: "/rfpa",
  POST_RFPA: "/rfpa/",
  UPDATE_RFPA: "/rfpa",
  APPROVE_RFPA: "/rfpa/approve/",
  GET_ALL_RFPA_NO: "/rfpa/rfpanumbers/getAllRfpaNo",
  //Deal Slip
  GET_ALL_DEAL_SLIP: "/dealSlip/",
  GET_A_DEAL_SLIP: "/dealSlip",
  POST_DEAL_SLIP: "/dealSlip/",
  UPDATE_DEAL_SLIP: "/dealSlip",
  APPROVE_DEAL_SLIP: "/dealSlip/approve/",
  GET_ALL_DEAL_SLIP_NO: "/dealSlip/dealslipno/getAlldealslipNo",
  //GRN
  GET_ALL_GRN: "/grns/",
  GET_A_GRN: "/grns",
  POST_GRN: "/grns/",
  UPDATE_GRN: "/grns",
  APPROVE_GRN: "/grns/approve/",
  GET_ALL_GRN_NO: "/grns/grnnumbers/getAllgrnNo",
  //Payment Request
  GET_ALL_PAYMENT_REQ: "/paymentRequest/",
  GET_A_PAYMENT_REQ: " /paymentRequest/",
  POST_PAYMENT_REQ: "/paymentRequest",
  UPDATE_PAYMENT_REQ: "/paymentRequest",
  //Vouchers
  //Multiple Cash voucher
  POST_MC_VOUCHER: "/multiCashVoucher/",
  GET_ALL_MC_VOUCHER: "/multiCashVoucher/",
  GET_A_MC_VOUCHER: "/multiCashVoucher",
  UPDATE_MC_VOUCHER: "/multiCashVoucher",
  //PackingMaterialPaymentVoucher
  POST_PMP_VOUCHER: "/pmpvoucher/",
  GET_ALL__PMP_VOUCHER: "/pmpvoucher/",
  GET_A_PMP_VOUCHER: "/pmpvoucher",
  UPDATE_PMP_VOUCHER: "/pmpvoucher",
  //labour Payment Voucher
  POST_LP_VOUCHER: "/lpvoucher/",
  GET_ALL_LP_VOUCHER: "/lpvoucher/",
  GET_A_LP_VOUCHER: "/lpvoucher",
  UPDATE_LP_VOUCHER: "/lpvoucher",
  //Transport Payment Voucher
  POST_TP_VOUCHER: "/tpvoucher/",
  GET_ALL_TP_VOUCHER: "/tpvoucher/",
  GET_A_TP_VOUCHER: "/tpvoucher",
  UPDATE_TP_VOUCHER: "/tpvoucher",
  //Delivery Challan
  POST_DELIVERY_CHALLAN: "/deliveryChallan/",
  GET_ALL_DELIVERY_CHALLAN: "/deliveryChallan/",
  GET_A_DELIVERY_CHALLAN: "/deliveryChallan",
  UPDATE_DELIVERY_CHALLAN: "/deliveryChallan",
  GET_ALL_DELIVERY_CHALLAN_NO: "/deliveryChallan/challanNos/getAllChallanNo"
}, _ = {
  //RFPA
  GET_ALL_RFPA: "/rfpa/",
  GET_RFPA_BY_ID: "/rfpa",
  CREATE_RFPA: "/rfpa/",
  UPDATE_RFPA: "/rfpa",
  DELETE_RFPA: "/rfpa",
  APPROVE_RFPA: "/rfpa/approve/",
  GET_ALL_RFPA_NO: "/rfpa/rfpanumbers/getAllRfpaNo",
  //Deal Slip
  GET_ALL_DEAL_SLIP: "/dealSlip/",
  GET_DEAL_SLIP_BY_ID: "/dealSlip",
  CREATE_DEAL_SLIP: "/dealSlip/",
  UPDATE_DEAL_SLIP: "/dealSlip",
  DELETE_DEAL_SLIP: "/dealSlip",
  APPROVE_DEAL_SLIP: "/dealSlip/approve/",
  GET_ALL_DEAL_SLIP_NO: "/dealSlip/dealslipno/getAlldealslipNo",
  //GRN
  GET_ALL_GRN: "/grns/",
  GET_GRN_BY_ID: "/grns",
  CREATE_GRN: "/grns/",
  UPDATE_GRN: "/grns",
  DELETE_GRN: "/grns",
  APPROVE_GRN: "/grns/approve/",
  GET_ALL_GRN_NO: "/grns/grnnumbers/getAllgrnNo",
  //Payment Request
  GET_ALL_PAYMENT_REQ: "/paymentRequest/",
  GET_PAYMENT_REQ_BY_ID: " /paymentRequest/",
  CREATE_PAYMENT_REQ: "/paymentRequest",
  UPDATE_PAYMENT_REQ: "/paymentRequest",
  DELETE_PAYMENT_REQ: "/paymentRequest",
  //Vouchers
  //Multiple Cash voucher
  GET_ALL_MC_VOUCHER: "/multiCashVoucher/",
  GET_MC_VOUCHER_BY_ID: "/multiCashVoucher",
  CREATE_MC_VOUCHER: "/multiCashVoucher/",
  UPDATE_MC_VOUCHER: "/multiCashVoucher",
  DELETE_MC_VOUCHER: "/multiCashVoucher",
  //PackingMaterialPaymentVoucher
  GET_ALL_PMP_VOUCHER: "/pmpvoucher/",
  GET_PMP_VOUCHER_BY_ID: "/pmpvoucher",
  CREATE_PMP_VOUCHER: "/pmpvoucher/",
  UPDATE_PMP_VOUCHER: "/pmpvoucher",
  DELETE_PMP_VOUCHER: "/pmpvoucher",
  //labour Payment Voucher
  GET_ALL_LP_VOUCHER: "/lpvoucher/",
  GET_LP_VOUCHER_BY_ID: "/lpvoucher",
  CREATE_LP_VOUCHER: "/lpvoucher/",
  UPDATE_LP_VOUCHER: "/lpvoucher",
  DELETE_LP_VOUCHER: "/lpvoucher",
  //Transport Payment Voucher
  GET_ALL_TP_VOUCHER: "/tpvoucher/",
  GET_TP_VOUCHER_BY_ID: "/tpvoucher",
  CREATE_TP_VOUCHER: "/tpvoucher/",
  UPDATE_TP_VOUCHER: "/tpvoucher",
  DELETE_TP_VOUCHER: "/tpvoucher",
  //Delivery Challan
  GET_ALL_DELIVERY_CHALLAN: "/deliveryChallan/",
  GET_DELIVERY_CHALLAN_BY_ID: "/deliveryChallan",
  CREATE_DELIVERY_CHALLAN: "/deliveryChallan/",
  UPDATE_DELIVERY_CHALLAN: "/deliveryChallan",
  DELETE_DELIVERY_CHALLAN: "/deliveryChallan",
  GET_ALL_DELIVERY_CHALLAN_NO: "/deliveryChallan/challanNos/getAllChallanNo",
  CREATE_PROFORMA_INVOICE: "/invoice/generate/profarma"
};
function Ot(r, e) {
  return function() {
    return r.apply(e, arguments);
  };
}
const { toString: br } = Object.prototype, { getPrototypeOf: Ke } = Object, Re = /* @__PURE__ */ ((r) => (e) => {
  const t = br.call(e);
  return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), V = (r) => (r = r.toLowerCase(), (e) => Re(e) === r), Ce = (r) => (e) => typeof e === r, { isArray: ae } = Array, de = Ce("undefined");
function Er(r) {
  return r !== null && !de(r) && r.constructor !== null && !de(r.constructor) && q(r.constructor.isBuffer) && r.constructor.isBuffer(r);
}
const xt = V("ArrayBuffer");
function _r(r) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && xt(r.buffer), e;
}
const gr = Ce("string"), q = Ce("function"), Dt = Ce("number"), Ne = (r) => r !== null && typeof r == "object", Tr = (r) => r === !0 || r === !1, ye = (r) => {
  if (Re(r) !== "object")
    return !1;
  const e = Ke(r);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
}, Ar = V("Date"), Sr = V("File"), Rr = V("Blob"), Cr = V("FileList"), Nr = (r) => Ne(r) && q(r.pipe), wr = (r) => {
  let e;
  return r && (typeof FormData == "function" && r instanceof FormData || q(r.append) && ((e = Re(r)) === "formdata" || // detect form-data instance
  e === "object" && q(r.toString) && r.toString() === "[object FormData]"));
}, Pr = V("URLSearchParams"), [Or, xr, Dr, Lr] = ["ReadableStream", "Request", "Response", "Headers"].map(V), vr = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fe(r, e, { allOwnKeys: t = !1 } = {}) {
  if (r === null || typeof r > "u")
    return;
  let n, s;
  if (typeof r != "object" && (r = [r]), ae(r))
    for (n = 0, s = r.length; n < s; n++)
      e.call(null, r[n], n, r);
  else {
    const i = t ? Object.getOwnPropertyNames(r) : Object.keys(r), a = i.length;
    let o;
    for (n = 0; n < a; n++)
      o = i[n], e.call(null, r[o], o, r);
  }
}
function Lt(r, e) {
  e = e.toLowerCase();
  const t = Object.keys(r);
  let n = t.length, s;
  for (; n-- > 0; )
    if (s = t[n], e === s.toLowerCase())
      return s;
  return null;
}
const Q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, vt = (r) => !de(r) && r !== Q;
function ke() {
  const { caseless: r } = vt(this) && this || {}, e = {}, t = (n, s) => {
    const i = r && Lt(e, s) || s;
    ye(e[i]) && ye(n) ? e[i] = ke(e[i], n) : ye(n) ? e[i] = ke({}, n) : ae(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && fe(arguments[n], t);
  return e;
}
const Fr = (r, e, t, { allOwnKeys: n } = {}) => (fe(e, (s, i) => {
  t && q(s) ? r[i] = Ot(s, t) : r[i] = s;
}, { allOwnKeys: n }), r), Ir = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), $r = (r, e, t, n) => {
  r.prototype = Object.create(e.prototype, n), r.prototype.constructor = r, Object.defineProperty(r, "super", {
    value: e.prototype
  }), t && Object.assign(r.prototype, t);
}, qr = (r, e, t, n) => {
  let s, i, a;
  const o = {};
  if (e = e || {}, r == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(r), i = s.length; i-- > 0; )
      a = s[i], (!n || n(a, r, e)) && !o[a] && (e[a] = r[a], o[a] = !0);
    r = t !== !1 && Ke(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}, kr = (r, e, t) => {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  const n = r.indexOf(e, t);
  return n !== -1 && n === t;
}, Ur = (r) => {
  if (!r) return null;
  if (ae(r)) return r;
  let e = r.length;
  if (!Dt(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = r[e];
  return t;
}, Vr = /* @__PURE__ */ ((r) => (e) => r && e instanceof r)(typeof Uint8Array < "u" && Ke(Uint8Array)), Mr = (r, e) => {
  const n = (r && r[Symbol.iterator]).call(r);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    e.call(r, i[0], i[1]);
  }
}, Gr = (r, e) => {
  let t;
  const n = [];
  for (; (t = r.exec(e)) !== null; )
    n.push(t);
  return n;
}, Br = V("HTMLFormElement"), jr = (r) => r.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, s) {
    return n.toUpperCase() + s;
  }
), lt = (({ hasOwnProperty: r }) => (e, t) => r.call(e, t))(Object.prototype), Hr = V("RegExp"), Ft = (r, e) => {
  const t = Object.getOwnPropertyDescriptors(r), n = {};
  fe(t, (s, i) => {
    let a;
    (a = e(s, i, r)) !== !1 && (n[i] = a || s);
  }), Object.defineProperties(r, n);
}, zr = (r) => {
  Ft(r, (e, t) => {
    if (q(r) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = r[t];
    if (q(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Yr = (r, e) => {
  const t = {}, n = (s) => {
    s.forEach((i) => {
      t[i] = !0;
    });
  };
  return ae(r) ? n(r) : n(String(r).split(e)), t;
}, Jr = () => {
}, Zr = (r, e) => r != null && Number.isFinite(r = +r) ? r : e, Le = "abcdefghijklmnopqrstuvwxyz", ut = "0123456789", It = {
  DIGIT: ut,
  ALPHA: Le,
  ALPHA_DIGIT: Le + Le.toUpperCase() + ut
}, Kr = (r = 16, e = It.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = e;
  for (; r--; )
    t += e[Math.random() * n | 0];
  return t;
};
function Wr(r) {
  return !!(r && q(r.append) && r[Symbol.toStringTag] === "FormData" && r[Symbol.iterator]);
}
const Qr = (r) => {
  const e = new Array(10), t = (n, s) => {
    if (Ne(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const i = ae(n) ? [] : {};
        return fe(n, (a, o) => {
          const d = t(a, s + 1);
          !de(d) && (i[o] = d);
        }), e[s] = void 0, i;
      }
    }
    return n;
  };
  return t(r, 0);
}, Xr = V("AsyncFunction"), en = (r) => r && (Ne(r) || q(r)) && q(r.then) && q(r.catch), $t = ((r, e) => r ? setImmediate : e ? ((t, n) => (Q.addEventListener("message", ({ source: s, data: i }) => {
  s === Q && i === t && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), Q.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  q(Q.postMessage)
), tn = typeof queueMicrotask < "u" ? queueMicrotask.bind(Q) : typeof process < "u" && process.nextTick || $t, c = {
  isArray: ae,
  isArrayBuffer: xt,
  isBuffer: Er,
  isFormData: wr,
  isArrayBufferView: _r,
  isString: gr,
  isNumber: Dt,
  isBoolean: Tr,
  isObject: Ne,
  isPlainObject: ye,
  isReadableStream: Or,
  isRequest: xr,
  isResponse: Dr,
  isHeaders: Lr,
  isUndefined: de,
  isDate: Ar,
  isFile: Sr,
  isBlob: Rr,
  isRegExp: Hr,
  isFunction: q,
  isStream: Nr,
  isURLSearchParams: Pr,
  isTypedArray: Vr,
  isFileList: Cr,
  forEach: fe,
  merge: ke,
  extend: Fr,
  trim: vr,
  stripBOM: Ir,
  inherits: $r,
  toFlatObject: qr,
  kindOf: Re,
  kindOfTest: V,
  endsWith: kr,
  toArray: Ur,
  forEachEntry: Mr,
  matchAll: Gr,
  isHTMLForm: Br,
  hasOwnProperty: lt,
  hasOwnProp: lt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ft,
  freezeMethods: zr,
  toObjectSet: Yr,
  toCamelCase: jr,
  noop: Jr,
  toFiniteNumber: Zr,
  findKey: Lt,
  global: Q,
  isContextDefined: vt,
  ALPHABET: It,
  generateString: Kr,
  isSpecCompliantForm: Wr,
  toJSONObject: Qr,
  isAsyncFn: Xr,
  isThenable: en,
  setImmediate: $t,
  asap: tn
};
function T(r, e, t, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
c.inherits(T, Error, {
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
const qt = T.prototype, kt = {};
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
  kt[r] = { value: r };
});
Object.defineProperties(T, kt);
Object.defineProperty(qt, "isAxiosError", { value: !0 });
T.from = (r, e, t, n, s, i) => {
  const a = Object.create(qt);
  return c.toFlatObject(r, a, function(d) {
    return d !== Error.prototype;
  }, (o) => o !== "isAxiosError"), T.call(a, r.message, e, t, n, s), a.cause = r, a.name = r.name, i && Object.assign(a, i), a;
};
const rn = null;
function Ue(r) {
  return c.isPlainObject(r) || c.isArray(r);
}
function Ut(r) {
  return c.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function ct(r, e, t) {
  return r ? r.concat(e).map(function(s, i) {
    return s = Ut(s), !t && i ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function nn(r) {
  return c.isArray(r) && !r.some(Ue);
}
const sn = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function we(r, e, t) {
  if (!c.isObject(r))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = c.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, y) {
    return !c.isUndefined(y[b]);
  });
  const n = t.metaTokens, s = t.visitor || f, i = t.dots, a = t.indexes, d = (t.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(e);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (c.isDate(p))
      return p.toISOString();
    if (!d && c.isBlob(p))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(p) || c.isTypedArray(p) ? d && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, b, y) {
    let S = p;
    if (p && !y && typeof p == "object") {
      if (c.endsWith(b, "{}"))
        b = n ? b : b.slice(0, -2), p = JSON.stringify(p);
      else if (c.isArray(p) && nn(p) || (c.isFileList(p) || c.endsWith(b, "[]")) && (S = c.toArray(p)))
        return b = Ut(b), S.forEach(function(C, $) {
          !(c.isUndefined(C) || C === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ct([b], $, i) : a === null ? b : b + "[]",
            u(C)
          );
        }), !1;
    }
    return Ue(p) ? !0 : (e.append(ct(y, b, i), u(p)), !1);
  }
  const h = [], E = Object.assign(sn, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Ue
  });
  function g(p, b) {
    if (!c.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      h.push(p), c.forEach(p, function(S, A) {
        (!(c.isUndefined(S) || S === null) && s.call(
          e,
          S,
          c.isString(A) ? A.trim() : A,
          b,
          E
        )) === !0 && g(S, b ? b.concat(A) : [A]);
      }), h.pop();
    }
  }
  if (!c.isObject(r))
    throw new TypeError("data must be an object");
  return g(r), e;
}
function dt(r) {
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
function We(r, e) {
  this._pairs = [], r && we(r, this, e);
}
const Vt = We.prototype;
Vt.append = function(e, t) {
  this._pairs.push([e, t]);
};
Vt.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, dt);
  } : dt;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function an(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Mt(r, e, t) {
  if (!e)
    return r;
  const n = t && t.encode || an, s = t && t.serialize;
  let i;
  if (s ? i = s(e, t) : i = c.isURLSearchParams(e) ? e.toString() : new We(e, t).toString(n), i) {
    const a = r.indexOf("#");
    a !== -1 && (r = r.slice(0, a)), r += (r.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return r;
}
class ft {
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
    c.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Gt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, on = typeof URLSearchParams < "u" ? URLSearchParams : We, ln = typeof FormData < "u" ? FormData : null, un = typeof Blob < "u" ? Blob : null, cn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: on,
    FormData: ln,
    Blob: un
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Qe = typeof window < "u" && typeof document < "u", Ve = typeof navigator == "object" && navigator || void 0, dn = Qe && (!Ve || ["ReactNative", "NativeScript", "NS"].indexOf(Ve.product) < 0), fn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", hn = Qe && window.location.href || "http://localhost", pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Qe,
  hasStandardBrowserEnv: dn,
  hasStandardBrowserWebWorkerEnv: fn,
  navigator: Ve,
  origin: hn
}, Symbol.toStringTag, { value: "Module" })), v = {
  ...pn,
  ...cn
};
function mn(r, e) {
  return we(r, new v.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, s, i) {
      return v.isNode && c.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function yn(r) {
  return c.matchAll(/\w+|\[(\w*)]/g, r).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function bn(r) {
  const e = {}, t = Object.keys(r);
  let n;
  const s = t.length;
  let i;
  for (n = 0; n < s; n++)
    i = t[n], e[i] = r[i];
  return e;
}
function Bt(r) {
  function e(t, n, s, i) {
    let a = t[i++];
    if (a === "__proto__") return !0;
    const o = Number.isFinite(+a), d = i >= t.length;
    return a = !a && c.isArray(s) ? s.length : a, d ? (c.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n, !o) : ((!s[a] || !c.isObject(s[a])) && (s[a] = []), e(t, n, s[a], i) && c.isArray(s[a]) && (s[a] = bn(s[a])), !o);
  }
  if (c.isFormData(r) && c.isFunction(r.entries)) {
    const t = {};
    return c.forEachEntry(r, (n, s) => {
      e(yn(n), s, t, 0);
    }), t;
  }
  return null;
}
function En(r, e, t) {
  if (c.isString(r))
    try {
      return (e || JSON.parse)(r), c.trim(r);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(r);
}
const he = {
  transitional: Gt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", s = n.indexOf("application/json") > -1, i = c.isObject(e);
    if (i && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
      return s ? JSON.stringify(Bt(e)) : e;
    if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e) || c.isReadableStream(e))
      return e;
    if (c.isArrayBufferView(e))
      return e.buffer;
    if (c.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let o;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return mn(e, this.formSerializer).toString();
      if ((o = c.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return we(
          o ? { "files[]": e } : e,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || s ? (t.setContentType("application/json", !1), En(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || he.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(e) || c.isReadableStream(e))
      return e;
    if (e && c.isString(e) && (n && !this.responseType || s)) {
      const a = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (o) {
        if (a)
          throw o.name === "SyntaxError" ? T.from(o, T.ERR_BAD_RESPONSE, this, null, this.response) : o;
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
    FormData: v.classes.FormData,
    Blob: v.classes.Blob
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
c.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  he.headers[r] = {};
});
const _n = c.toObjectSet([
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
]), gn = (r) => {
  const e = {};
  let t, n, s;
  return r && r.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), t = a.substring(0, s).trim().toLowerCase(), n = a.substring(s + 1).trim(), !(!t || e[t] && _n[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, ht = Symbol("internals");
function ue(r) {
  return r && String(r).trim().toLowerCase();
}
function be(r) {
  return r === !1 || r == null ? r : c.isArray(r) ? r.map(be) : String(r);
}
function Tn(r) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(r); )
    e[n[1]] = n[2];
  return e;
}
const An = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function ve(r, e, t, n, s) {
  if (c.isFunction(n))
    return n.call(this, e, t);
  if (s && (e = t), !!c.isString(e)) {
    if (c.isString(n))
      return e.indexOf(n) !== -1;
    if (c.isRegExp(n))
      return n.test(e);
  }
}
function Sn(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Rn(r, e) {
  const t = c.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(r, n + t, {
      value: function(s, i, a) {
        return this[n].call(this, e, s, i, a);
      },
      configurable: !0
    });
  });
}
class F {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const s = this;
    function i(o, d, u) {
      const f = ue(d);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const h = c.findKey(s, f);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || d] = be(o));
    }
    const a = (o, d) => c.forEach(o, (u, f) => i(u, f, d));
    if (c.isPlainObject(e) || e instanceof this.constructor)
      a(e, t);
    else if (c.isString(e) && (e = e.trim()) && !An(e))
      a(gn(e), t);
    else if (c.isHeaders(e))
      for (const [o, d] of e.entries())
        i(d, o, n);
    else
      e != null && i(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = ue(e), e) {
      const n = c.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!t)
          return s;
        if (t === !0)
          return Tn(s);
        if (c.isFunction(t))
          return t.call(this, s, n);
        if (c.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = ue(e), e) {
      const n = c.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || ve(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let s = !1;
    function i(a) {
      if (a = ue(a), a) {
        const o = c.findKey(n, a);
        o && (!t || ve(n, n[o], o, t)) && (delete n[o], s = !0);
      }
    }
    return c.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, s = !1;
    for (; n--; ) {
      const i = t[n];
      (!e || ve(this, this[i], i, e, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, n = {};
    return c.forEach(this, (s, i) => {
      const a = c.findKey(n, i);
      if (a) {
        t[a] = be(s), delete t[i];
        return;
      }
      const o = e ? Sn(i) : String(i).trim();
      o !== i && delete t[i], t[o] = be(s), n[o] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (n, s) => {
      n != null && n !== !1 && (t[s] = e && c.isArray(n) ? n.join(", ") : n);
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
    const n = (this[ht] = this[ht] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(a) {
      const o = ue(a);
      n[o] || (Rn(s, a), n[o] = !0);
    }
    return c.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
F.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(F.prototype, ({ value: r }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => r,
    set(n) {
      this[t] = n;
    }
  };
});
c.freezeMethods(F);
function Fe(r, e) {
  const t = this || he, n = e || t, s = F.from(n.headers);
  let i = n.data;
  return c.forEach(r, function(o) {
    i = o.call(t, i, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), i;
}
function jt(r) {
  return !!(r && r.__CANCEL__);
}
function oe(r, e, t) {
  T.call(this, r ?? "canceled", T.ERR_CANCELED, e, t), this.name = "CanceledError";
}
c.inherits(oe, T, {
  __CANCEL__: !0
});
function Ht(r, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? r(t) : e(new T(
    "Request failed with status code " + t.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function Cn(r) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return e && e[1] || "";
}
function Nn(r, e) {
  r = r || 10;
  const t = new Array(r), n = new Array(r);
  let s = 0, i = 0, a;
  return e = e !== void 0 ? e : 1e3, function(d) {
    const u = Date.now(), f = n[i];
    a || (a = u), t[s] = d, n[s] = u;
    let h = i, E = 0;
    for (; h !== s; )
      E += t[h++], h = h % r;
    if (s = (s + 1) % r, s === i && (i = (i + 1) % r), u - a < e)
      return;
    const g = f && u - f;
    return g ? Math.round(E * 1e3 / g) : void 0;
  };
}
function wn(r, e) {
  let t = 0, n = 1e3 / e, s, i;
  const a = (u, f = Date.now()) => {
    t = f, s = null, i && (clearTimeout(i), i = null), r.apply(null, u);
  };
  return [(...u) => {
    const f = Date.now(), h = f - t;
    h >= n ? a(u, f) : (s = u, i || (i = setTimeout(() => {
      i = null, a(s);
    }, n - h)));
  }, () => s && a(s)];
}
const ge = (r, e, t = 3) => {
  let n = 0;
  const s = Nn(50, 250);
  return wn((i) => {
    const a = i.loaded, o = i.lengthComputable ? i.total : void 0, d = a - n, u = s(d), f = a <= o;
    n = a;
    const h = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: d,
      rate: u || void 0,
      estimated: u && o && f ? (o - a) / u : void 0,
      event: i,
      lengthComputable: o != null,
      [e ? "download" : "upload"]: !0
    };
    r(h);
  }, t);
}, pt = (r, e) => {
  const t = r != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: r,
    loaded: n
  }), e[1]];
}, mt = (r) => (...e) => c.asap(() => r(...e)), Pn = v.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = v.navigator && /(msie|trident)/i.test(v.navigator.userAgent), t = document.createElement("a");
    let n;
    function s(i) {
      let a = i;
      return e && (t.setAttribute("href", a), a = t.href), t.setAttribute("href", a), {
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
    return n = s(window.location.href), function(a) {
      const o = c.isString(a) ? s(a) : a;
      return o.protocol === n.protocol && o.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), On = v.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(r, e, t, n, s, i) {
      const a = [r + "=" + encodeURIComponent(e)];
      c.isNumber(t) && a.push("expires=" + new Date(t).toGMTString()), c.isString(n) && a.push("path=" + n), c.isString(s) && a.push("domain=" + s), i === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function xn(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function Dn(r, e) {
  return e ? r.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : r;
}
function zt(r, e) {
  return r && !xn(e) ? Dn(r, e) : e;
}
const yt = (r) => r instanceof F ? { ...r } : r;
function te(r, e) {
  e = e || {};
  const t = {};
  function n(u, f, h) {
    return c.isPlainObject(u) && c.isPlainObject(f) ? c.merge.call({ caseless: h }, u, f) : c.isPlainObject(f) ? c.merge({}, f) : c.isArray(f) ? f.slice() : f;
  }
  function s(u, f, h) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(u))
        return n(void 0, u, h);
    } else return n(u, f, h);
  }
  function i(u, f) {
    if (!c.isUndefined(f))
      return n(void 0, f);
  }
  function a(u, f) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, f);
  }
  function o(u, f, h) {
    if (h in e)
      return n(u, f);
    if (h in r)
      return n(void 0, u);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: o,
    headers: (u, f) => s(yt(u), yt(f), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, r, e)), function(f) {
    const h = d[f] || s, E = h(r[f], e[f], f);
    c.isUndefined(E) && h !== o || (t[f] = E);
  }), t;
}
const Yt = (r) => {
  const e = te({}, r);
  let { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: i, headers: a, auth: o } = e;
  e.headers = a = F.from(a), e.url = Mt(zt(e.baseURL, e.url), r.params, r.paramsSerializer), o && a.set(
    "Authorization",
    "Basic " + btoa((o.username || "") + ":" + (o.password ? unescape(encodeURIComponent(o.password)) : ""))
  );
  let d;
  if (c.isFormData(t)) {
    if (v.hasStandardBrowserEnv || v.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((d = a.getContentType()) !== !1) {
      const [u, ...f] = d ? d.split(";").map((h) => h.trim()).filter(Boolean) : [];
      a.setContentType([u || "multipart/form-data", ...f].join("; "));
    }
  }
  if (v.hasStandardBrowserEnv && (n && c.isFunction(n) && (n = n(e)), n || n !== !1 && Pn(e.url))) {
    const u = s && i && On.read(i);
    u && a.set(s, u);
  }
  return e;
}, Ln = typeof XMLHttpRequest < "u", vn = Ln && function(r) {
  return new Promise(function(t, n) {
    const s = Yt(r);
    let i = s.data;
    const a = F.from(s.headers).normalize();
    let { responseType: o, onUploadProgress: d, onDownloadProgress: u } = s, f, h, E, g, p;
    function b() {
      g && g(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let y = new XMLHttpRequest();
    y.open(s.method.toUpperCase(), s.url, !0), y.timeout = s.timeout;
    function S() {
      if (!y)
        return;
      const C = F.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), P = {
        data: !o || o === "text" || o === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: C,
        config: r,
        request: y
      };
      Ht(function(M) {
        t(M), b();
      }, function(M) {
        n(M), b();
      }, P), y = null;
    }
    "onloadend" in y ? y.onloadend = S : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, y.onabort = function() {
      y && (n(new T("Request aborted", T.ECONNABORTED, r, y)), y = null);
    }, y.onerror = function() {
      n(new T("Network Error", T.ERR_NETWORK, r, y)), y = null;
    }, y.ontimeout = function() {
      let $ = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || Gt;
      s.timeoutErrorMessage && ($ = s.timeoutErrorMessage), n(new T(
        $,
        P.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        r,
        y
      )), y = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in y && c.forEach(a.toJSON(), function($, P) {
      y.setRequestHeader(P, $);
    }), c.isUndefined(s.withCredentials) || (y.withCredentials = !!s.withCredentials), o && o !== "json" && (y.responseType = s.responseType), u && ([E, p] = ge(u, !0), y.addEventListener("progress", E)), d && y.upload && ([h, g] = ge(d), y.upload.addEventListener("progress", h), y.upload.addEventListener("loadend", g)), (s.cancelToken || s.signal) && (f = (C) => {
      y && (n(!C || C.type ? new oe(null, r, y) : C), y.abort(), y = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const A = Cn(s.url);
    if (A && v.protocols.indexOf(A) === -1) {
      n(new T("Unsupported protocol " + A + ":", T.ERR_BAD_REQUEST, r));
      return;
    }
    y.send(i || null);
  });
}, Fn = (r, e) => {
  const { length: t } = r = r ? r.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, o();
        const f = u instanceof Error ? u : this.reason;
        n.abort(f instanceof T ? f : new oe(f instanceof Error ? f.message : f));
      }
    };
    let a = e && setTimeout(() => {
      a = null, i(new T(`timeout ${e} of ms exceeded`, T.ETIMEDOUT));
    }, e);
    const o = () => {
      r && (a && clearTimeout(a), a = null, r.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), r = null);
    };
    r.forEach((u) => u.addEventListener("abort", i));
    const { signal: d } = n;
    return d.unsubscribe = () => c.asap(o), d;
  }
}, In = function* (r, e) {
  let t = r.byteLength;
  if (t < e) {
    yield r;
    return;
  }
  let n = 0, s;
  for (; n < t; )
    s = n + e, yield r.slice(n, s), n = s;
}, $n = async function* (r, e) {
  for await (const t of qn(r))
    yield* In(t, e);
}, qn = async function* (r) {
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
}, bt = (r, e, t, n) => {
  const s = $n(r, e);
  let i = 0, a, o = (d) => {
    a || (a = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: u, value: f } = await s.next();
        if (u) {
          o(), d.close();
          return;
        }
        let h = f.byteLength;
        if (t) {
          let E = i += h;
          t(E);
        }
        d.enqueue(new Uint8Array(f));
      } catch (u) {
        throw o(u), u;
      }
    },
    cancel(d) {
      return o(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Pe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Jt = Pe && typeof ReadableStream == "function", kn = Pe && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (e) => r.encode(e))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), Zt = (r, ...e) => {
  try {
    return !!r(...e);
  } catch {
    return !1;
  }
}, Un = Jt && Zt(() => {
  let r = !1;
  const e = new Request(v.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return r = !0, "half";
    }
  }).headers.has("Content-Type");
  return r && !e;
}), Et = 64 * 1024, Me = Jt && Zt(() => c.isReadableStream(new Response("").body)), Te = {
  stream: Me && ((r) => r.body)
};
Pe && ((r) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Te[e] && (Te[e] = c.isFunction(r[e]) ? (t) => t[e]() : (t, n) => {
      throw new T(`Response type '${e}' is not supported`, T.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Vn = async (r) => {
  if (r == null)
    return 0;
  if (c.isBlob(r))
    return r.size;
  if (c.isSpecCompliantForm(r))
    return (await new Request(v.origin, {
      method: "POST",
      body: r
    }).arrayBuffer()).byteLength;
  if (c.isArrayBufferView(r) || c.isArrayBuffer(r))
    return r.byteLength;
  if (c.isURLSearchParams(r) && (r = r + ""), c.isString(r))
    return (await kn(r)).byteLength;
}, Mn = async (r, e) => {
  const t = c.toFiniteNumber(r.getContentLength());
  return t ?? Vn(e);
}, Gn = Pe && (async (r) => {
  let {
    url: e,
    method: t,
    data: n,
    signal: s,
    cancelToken: i,
    timeout: a,
    onDownloadProgress: o,
    onUploadProgress: d,
    responseType: u,
    headers: f,
    withCredentials: h = "same-origin",
    fetchOptions: E
  } = Yt(r);
  u = u ? (u + "").toLowerCase() : "text";
  let g = Fn([s, i && i.toAbortSignal()], a), p;
  const b = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let y;
  try {
    if (d && Un && t !== "get" && t !== "head" && (y = await Mn(f, n)) !== 0) {
      let P = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), k;
      if (c.isFormData(n) && (k = P.headers.get("content-type")) && f.setContentType(k), P.body) {
        const [M, le] = pt(
          y,
          ge(mt(d))
        );
        n = bt(P.body, Et, M, le);
      }
    }
    c.isString(h) || (h = h ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    p = new Request(e, {
      ...E,
      signal: g,
      method: t.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: S ? h : void 0
    });
    let A = await fetch(p);
    const C = Me && (u === "stream" || u === "response");
    if (Me && (o || C && b)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((K) => {
        P[K] = A[K];
      });
      const k = c.toFiniteNumber(A.headers.get("content-length")), [M, le] = o && pt(
        k,
        ge(mt(o), !0)
      ) || [];
      A = new Response(
        bt(A.body, Et, M, () => {
          le && le(), b && b();
        }),
        P
      );
    }
    u = u || "text";
    let $ = await Te[c.findKey(Te, u) || "text"](A, r);
    return !C && b && b(), await new Promise((P, k) => {
      Ht(P, k, {
        data: $,
        headers: F.from(A.headers),
        status: A.status,
        statusText: A.statusText,
        config: r,
        request: p
      });
    });
  } catch (S) {
    throw b && b(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new T("Network Error", T.ERR_NETWORK, r, p),
      {
        cause: S.cause || S
      }
    ) : T.from(S, S && S.code, r, p);
  }
}), Ge = {
  http: rn,
  xhr: vn,
  fetch: Gn
};
c.forEach(Ge, (r, e) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: e });
    } catch {
    }
    Object.defineProperty(r, "adapterName", { value: e });
  }
});
const _t = (r) => `- ${r}`, Bn = (r) => c.isFunction(r) || r === null || r === !1, Kt = {
  getAdapter: (r) => {
    r = c.isArray(r) ? r : [r];
    const { length: e } = r;
    let t, n;
    const s = {};
    for (let i = 0; i < e; i++) {
      t = r[i];
      let a;
      if (n = t, !Bn(t) && (n = Ge[(a = String(t)).toLowerCase()], n === void 0))
        throw new T(`Unknown adapter '${a}'`);
      if (n)
        break;
      s[a || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([o, d]) => `adapter ${o} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = e ? i.length > 1 ? `since :
` + i.map(_t).join(`
`) : " " + _t(i[0]) : "as no adapter specified";
      throw new T(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ge
};
function Ie(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new oe(null, r);
}
function gt(r) {
  return Ie(r), r.headers = F.from(r.headers), r.data = Fe.call(
    r,
    r.transformRequest
  ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), Kt.getAdapter(r.adapter || he.adapter)(r).then(function(n) {
    return Ie(r), n.data = Fe.call(
      r,
      r.transformResponse,
      n
    ), n.headers = F.from(n.headers), n;
  }, function(n) {
    return jt(n) || (Ie(r), n && n.response && (n.response.data = Fe.call(
      r,
      r.transformResponse,
      n.response
    ), n.response.headers = F.from(n.response.headers))), Promise.reject(n);
  });
}
const Wt = "1.7.7", Xe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, e) => {
  Xe[r] = function(n) {
    return typeof n === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
const Tt = {};
Xe.transitional = function(e, t, n) {
  function s(i, a) {
    return "[Axios v" + Wt + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, o) => {
    if (e === !1)
      throw new T(
        s(a, " has been removed" + (t ? " in " + t : "")),
        T.ERR_DEPRECATED
      );
    return t && !Tt[a] && (Tt[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, a, o) : !0;
  };
};
function jn(r, e, t) {
  if (typeof r != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(r);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], a = e[i];
    if (a) {
      const o = r[i], d = o === void 0 || a(o, i, r);
      if (d !== !0)
        throw new T("option " + i + " must be " + d, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new T("Unknown option " + i, T.ERR_BAD_OPTION);
  }
}
const Be = {
  assertOptions: jn,
  validators: Xe
}, J = Be.validators;
class X {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new ft(),
      response: new ft()
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = te(this.defaults, t);
    const { transitional: n, paramsSerializer: s, headers: i } = t;
    n !== void 0 && Be.assertOptions(n, {
      silentJSONParsing: J.transitional(J.boolean),
      forcedJSONParsing: J.transitional(J.boolean),
      clarifyTimeoutError: J.transitional(J.boolean)
    }, !1), s != null && (c.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : Be.assertOptions(s, {
      encode: J.function,
      serialize: J.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let a = i && c.merge(
      i.common,
      i[t.method]
    );
    i && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), t.headers = F.concat(a, i);
    const o = [];
    let d = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(t) === !1 || (d = d && b.synchronous, o.unshift(b.fulfilled, b.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(b) {
      u.push(b.fulfilled, b.rejected);
    });
    let f, h = 0, E;
    if (!d) {
      const p = [gt.bind(this), void 0];
      for (p.unshift.apply(p, o), p.push.apply(p, u), E = p.length, f = Promise.resolve(t); h < E; )
        f = f.then(p[h++], p[h++]);
      return f;
    }
    E = o.length;
    let g = t;
    for (h = 0; h < E; ) {
      const p = o[h++], b = o[h++];
      try {
        g = p(g);
      } catch (y) {
        b.call(this, y);
        break;
      }
    }
    try {
      f = gt.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, E = u.length; h < E; )
      f = f.then(u[h++], u[h++]);
    return f;
  }
  getUri(e) {
    e = te(this.defaults, e);
    const t = zt(e.baseURL, e.url);
    return Mt(t, e.params, e.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(e) {
  X.prototype[e] = function(t, n) {
    return this.request(te(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(i, a, o) {
      return this.request(te(o || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  X.prototype[e] = t(), X.prototype[e + "Form"] = t(!0);
});
class et {
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
      const a = new Promise((o) => {
        n.subscribe(o), i = o;
      }).then(s);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, e(function(i, a, o) {
      n.reason || (n.reason = new oe(i, a, o), t(n.reason));
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
      token: new et(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function Hn(r) {
  return function(t) {
    return r.apply(null, t);
  };
}
function zn(r) {
  return c.isObject(r) && r.isAxiosError === !0;
}
const je = {
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
Object.entries(je).forEach(([r, e]) => {
  je[e] = r;
});
function Qt(r) {
  const e = new X(r), t = Ot(X.prototype.request, e);
  return c.extend(t, X.prototype, e, { allOwnKeys: !0 }), c.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return Qt(te(r, s));
  }, t;
}
const N = Qt(he);
N.Axios = X;
N.CanceledError = oe;
N.CancelToken = et;
N.isCancel = jt;
N.VERSION = Wt;
N.toFormData = we;
N.AxiosError = T;
N.Cancel = N.CanceledError;
N.all = function(e) {
  return Promise.all(e);
};
N.spread = Hn;
N.isAxiosError = zn;
N.mergeConfig = te;
N.AxiosHeaders = F;
N.formToJSON = (r) => Bt(c.isHTMLForm(r) ? new FormData(r) : r);
N.getAdapter = Kt.getAdapter;
N.HttpStatusCode = je;
N.default = N;
const Xt = "http://ec2-35-154-225-84.ap-south-1.compute.amazonaws.com", Yn = () => N.create({
  baseURL: Xt,
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
    return R._axiosInstance || (R._axiosInstance = Yn(), R.setAuthHeaderInterceptor(), R._axiosInstance.interceptors.response.use(R.handleSuccess, R.handleError)), R._axiosInstance;
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
      return (await N.post(`${Xt}/auth/refresh-token`, {
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
    var s;
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
function Jn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Zn(r, e) {
  if (r) {
    const t = Object.entries(r).filter(([n, s]) => s != null && s !== "").map(
      ([n, s]) => `${encodeURIComponent(n)}=${encodeURIComponent(s)}`
    ).join("&");
    return t ? `${e}?${t}` : e;
  } else
    return "";
}
function re(r) {
  this._maxSize = r, this.clear();
}
re.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
re.prototype.get = function(r) {
  return this._values[r];
};
re.prototype.set = function(r, e) {
  return this._size >= this._maxSize && this.clear(), r in this._values || this._size++, this._values[r] = e;
};
var Kn = /[^.^\]^[]+|(?=\[\]|\.\.)/g, er = /^\d+$/, Wn = /^\d/, Qn = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, Xn = /^\s*(['"]?)(.*?)(\1)\s*$/, tt = 512, At = new re(tt), St = new re(tt), Rt = new re(tt), ee = {
  Cache: re,
  split: He,
  normalizePath: $e,
  setter: function(r) {
    var e = $e(r);
    return St.get(r) || St.set(r, function(n, s) {
      for (var i = 0, a = e.length, o = n; i < a - 1; ) {
        var d = e[i];
        if (d === "__proto__" || d === "constructor" || d === "prototype")
          return n;
        o = o[e[i++]];
      }
      o[e[i]] = s;
    });
  },
  getter: function(r, e) {
    var t = $e(r);
    return Rt.get(r) || Rt.set(r, function(s) {
      for (var i = 0, a = t.length; i < a; )
        if (s != null || !e) s = s[t[i++]];
        else return;
      return s;
    });
  },
  join: function(r) {
    return r.reduce(function(e, t) {
      return e + (rt(t) || er.test(t) ? "[" + t + "]" : (e ? "." : "") + t);
    }, "");
  },
  forEach: function(r, e, t) {
    es(Array.isArray(r) ? r : He(r), e, t);
  }
};
function $e(r) {
  return At.get(r) || At.set(
    r,
    He(r).map(function(e) {
      return e.replace(Xn, "$2");
    })
  );
}
function He(r) {
  return r.match(Kn) || [""];
}
function es(r, e, t) {
  var n = r.length, s, i, a, o;
  for (i = 0; i < n; i++)
    s = r[i], s && (ns(s) && (s = '"' + s + '"'), o = rt(s), a = !o && /^\d+$/.test(s), e.call(t, s, o, a, i, r));
}
function rt(r) {
  return typeof r == "string" && r && ["'", '"'].indexOf(r.charAt(0)) !== -1;
}
function ts(r) {
  return r.match(Wn) && !r.match(er);
}
function rs(r) {
  return Qn.test(r);
}
function ns(r) {
  return !rt(r) && (ts(r) || rs(r));
}
const ss = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, Oe = (r) => r.match(ss) || [], xe = (r) => r[0].toUpperCase() + r.slice(1), nt = (r, e) => Oe(r).join(e).toLowerCase(), tr = (r) => Oe(r).reduce(
  (e, t) => `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`,
  ""
), is = (r) => xe(tr(r)), as = (r) => nt(r, "_"), os = (r) => nt(r, "-"), ls = (r) => xe(nt(r, " ")), us = (r) => Oe(r).map(xe).join(" ");
var qe = {
  words: Oe,
  upperFirst: xe,
  camelCase: tr,
  pascalCase: is,
  snakeCase: as,
  kebabCase: os,
  sentenceCase: ls,
  titleCase: us
}, st = { exports: {} };
st.exports = function(r) {
  return rr(cs(r), r);
};
st.exports.array = rr;
function rr(r, e) {
  var t = r.length, n = new Array(t), s = {}, i = t, a = ds(e), o = fs(r);
  for (e.forEach(function(u) {
    if (!o.has(u[0]) || !o.has(u[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); i--; )
    s[i] || d(r[i], i, /* @__PURE__ */ new Set());
  return n;
  function d(u, f, h) {
    if (h.has(u)) {
      var E;
      try {
        E = ", node was:" + JSON.stringify(u);
      } catch {
        E = "";
      }
      throw new Error("Cyclic dependency" + E);
    }
    if (!o.has(u))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(u));
    if (!s[f]) {
      s[f] = !0;
      var g = a.get(u) || /* @__PURE__ */ new Set();
      if (g = Array.from(g), f = g.length) {
        h.add(u);
        do {
          var p = g[--f];
          d(p, o.get(p), h);
        } while (f);
        h.delete(u);
      }
      n[--t] = u;
    }
  }
}
function cs(r) {
  for (var e = /* @__PURE__ */ new Set(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.add(s[0]), e.add(s[1]);
  }
  return Array.from(e);
}
function ds(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.has(s[0]) || e.set(s[0], /* @__PURE__ */ new Set()), e.has(s[1]) || e.set(s[1], /* @__PURE__ */ new Set()), e.get(s[0]).add(s[1]);
  }
  return e;
}
function fs(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++)
    e.set(r[t], t);
  return e;
}
var hs = st.exports;
const ps = /* @__PURE__ */ Jn(hs), ms = Object.prototype.toString, ys = Error.prototype.toString, bs = RegExp.prototype.toString, Es = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", _s = /^Symbol\((.*)\)(.*)$/;
function gs(r) {
  return r != +r ? "NaN" : r === 0 && 1 / r < 0 ? "-0" : "" + r;
}
function Ct(r, e = !1) {
  if (r == null || r === !0 || r === !1) return "" + r;
  const t = typeof r;
  if (t === "number") return gs(r);
  if (t === "string") return e ? `"${r}"` : r;
  if (t === "function") return "[Function " + (r.name || "anonymous") + "]";
  if (t === "symbol") return Es.call(r).replace(_s, "Symbol($1)");
  const n = ms.call(r).slice(8, -1);
  return n === "Date" ? isNaN(r.getTime()) ? "" + r : r.toISOString(r) : n === "Error" || r instanceof Error ? "[" + ys.call(r) + "]" : n === "RegExp" ? bs.call(r) : null;
}
function Y(r, e) {
  let t = Ct(r, e);
  return t !== null ? t : JSON.stringify(r, function(n, s) {
    let i = Ct(this[n], e);
    return i !== null ? i : s;
  }, 2);
}
function nr(r) {
  return r == null ? [] : [].concat(r);
}
let sr, ir, ar, Ts = /\$\{\s*(\w+)\s*\}/g;
sr = Symbol.toStringTag;
class Nt {
  constructor(e, t, n, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[sr] = "Error", this.name = "ValidationError", this.value = t, this.path = n, this.type = s, this.errors = [], this.inner = [], nr(e).forEach((i) => {
      if (L.isError(i)) {
        this.errors.push(...i.errors);
        const a = i.inner.length ? i.inner : [i];
        this.inner.push(...a);
      } else
        this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
ir = Symbol.hasInstance;
ar = Symbol.toStringTag;
class L extends Error {
  static formatError(e, t) {
    const n = t.label || t.path || "this";
    return n !== t.path && (t = Object.assign({}, t, {
      path: n
    })), typeof e == "string" ? e.replace(Ts, (s, i) => Y(t[i])) : typeof e == "function" ? e(t) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, n, s, i) {
    const a = new Nt(e, t, n, s);
    if (i)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[ar] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, L);
  }
  static [ir](e) {
    return Nt[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let G = {
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
    const s = n != null && n !== t ? ` (cast from the value \`${Y(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${r} must be a \`${e}\` type, but the final value was: \`${Y(t, !0)}\`` + s : `${r} must match the configured type. The validated value was: \`${Y(t, !0)}\`` + s;
  }
}, D = {
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
}, Z = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, ze = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Ye = {
  isValue: "${path} field must be ${value}"
}, Je = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Ee = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, As = {
  notType: (r) => {
    const {
      path: e,
      value: t,
      spec: n
    } = r, s = n.types.length;
    if (Array.isArray(t)) {
      if (t.length < s) return `${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${Y(t, !0)}\``;
      if (t.length > s) return `${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${Y(t, !0)}\``;
    }
    return L.formatError(G.notType, r);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: G,
  string: D,
  number: Z,
  date: ze,
  object: Je,
  array: Ee,
  boolean: Ye,
  tuple: As
});
const De = (r) => r && r.__isYupSchema__;
class Ae {
  static fromOptions(e, t) {
    if (!t.then && !t.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: s,
      otherwise: i
    } = t, a = typeof n == "function" ? n : (...o) => o.every((d) => d === n);
    return new Ae(e, (o, d) => {
      var u;
      let f = a(...o) ? s : i;
      return (u = f == null ? void 0 : f(d)) != null ? u : d;
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
    if (!De(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(t);
  }
}
const me = {
  context: "$",
  value: "."
};
class ne {
  constructor(e, t = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === me.context, this.isValue = this.key[0] === me.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? me.context : this.isValue ? me.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && ee.getter(this.path, !0), this.map = t.map;
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
ne.prototype.__isYupRef = !0;
const U = (r) => r == null;
function se(r) {
  function e({
    value: t,
    path: n = "",
    options: s,
    originalValue: i,
    schema: a
  }, o, d) {
    const {
      name: u,
      test: f,
      params: h,
      message: E,
      skipAbsent: g
    } = r;
    let {
      parent: p,
      context: b,
      abortEarly: y = a.spec.abortEarly,
      disableStackTrace: S = a.spec.disableStackTrace
    } = s;
    function A(w) {
      return ne.isRef(w) ? w.getValue(t, p, b) : w;
    }
    function C(w = {}) {
      const W = Object.assign({
        value: t,
        originalValue: i,
        label: a.spec.label,
        path: w.path || n,
        spec: a.spec,
        disableStackTrace: w.disableStackTrace || S
      }, h, w.params);
      for (const ot of Object.keys(W)) W[ot] = A(W[ot]);
      const at = new L(L.formatError(w.message || E, W), t, W.path, w.type || u, W.disableStackTrace);
      return at.params = W, at;
    }
    const $ = y ? o : d;
    let P = {
      path: n,
      parent: p,
      type: u,
      from: s.from,
      createError: C,
      resolve: A,
      options: s,
      originalValue: i,
      schema: a
    };
    const k = (w) => {
      L.isError(w) ? $(w) : w ? d(null) : $(C());
    }, M = (w) => {
      L.isError(w) ? $(w) : o(w);
    };
    if (g && U(t))
      return k(!0);
    let K;
    try {
      var it;
      if (K = f.call(P, t, P), typeof ((it = K) == null ? void 0 : it.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${P.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(K).then(k, M);
      }
    } catch (w) {
      M(w);
      return;
    }
    k(K);
  }
  return e.OPTIONS = r, e;
}
function Ss(r, e, t, n = t) {
  let s, i, a;
  return e ? (ee.forEach(e, (o, d, u) => {
    let f = d ? o.slice(1, o.length - 1) : o;
    r = r.resolve({
      context: n,
      parent: s,
      value: t
    });
    let h = r.type === "tuple", E = u ? parseInt(f, 10) : 0;
    if (r.innerType || h) {
      if (h && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (t && E >= t.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${e}. because there is no value at that index. `);
      s = t, t = t && t[E], r = h ? r.spec.types[E] : r.innerType;
    }
    if (!u) {
      if (!r.fields || !r.fields[f]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${a} which is a type: "${r.type}")`);
      s = t, t = t && t[f], r = r.fields[f];
    }
    i = f, a = d ? "[" + o + "]" : "." + o;
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
class Se extends Set {
  describe() {
    const e = [];
    for (const t of this.values())
      e.push(ne.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const n of this.values())
      t.push(e(n));
    return t;
  }
  clone() {
    return new Se(this.values());
  }
  merge(e, t) {
    const n = this.clone();
    return e.forEach((s) => n.add(s)), t.forEach((s) => n.delete(s)), n;
  }
}
function ie(r, e = /* @__PURE__ */ new Map()) {
  if (De(r) || !r || typeof r != "object") return r;
  if (e.has(r)) return e.get(r);
  let t;
  if (r instanceof Date)
    t = new Date(r.getTime()), e.set(r, t);
  else if (r instanceof RegExp)
    t = new RegExp(r), e.set(r, t);
  else if (Array.isArray(r)) {
    t = new Array(r.length), e.set(r, t);
    for (let n = 0; n < r.length; n++) t[n] = ie(r[n], e);
  } else if (r instanceof Map) {
    t = /* @__PURE__ */ new Map(), e.set(r, t);
    for (const [n, s] of r.entries()) t.set(n, ie(s, e));
  } else if (r instanceof Set) {
    t = /* @__PURE__ */ new Set(), e.set(r, t);
    for (const n of r) t.add(ie(n, e));
  } else if (r instanceof Object) {
    t = {}, e.set(r, t);
    for (const [n, s] of Object.entries(r)) t[n] = ie(s, e);
  } else
    throw Error(`Unable to clone ${r}`);
  return t;
}
class I {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Se(), this._blacklist = new Se(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(G.notType);
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
    return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = ie(Object.assign({}, this.spec, e)), t;
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
      e.tests.forEach((a) => {
        i.test(a.OPTIONS);
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
      if (s && U(i))
        return i;
      let a = Y(e), o = Y(i);
      throw new TypeError(`The value of ${t.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
` + (o !== a ? `result of cast: ${o}` : ""));
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
      originalValue: a = e,
      strict: o = this.spec.strict
    } = t, d = e;
    o || (d = this._cast(d, Object.assign({
      assert: !1
    }, t)));
    let u = [];
    for (let f of Object.values(this.internalTests))
      f && u.push(f);
    this.runTests({
      path: i,
      value: d,
      originalValue: a,
      options: t,
      tests: u
    }, n, (f) => {
      if (f.length)
        return s(f, d);
      this.runTests({
        path: i,
        value: d,
        originalValue: a,
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
      value: a,
      originalValue: o,
      path: d,
      options: u
    } = e, f = (b) => {
      s || (s = !0, t(b, a));
    }, h = (b) => {
      s || (s = !0, n(b, a));
    }, E = i.length, g = [];
    if (!E) return h([]);
    let p = {
      value: a,
      originalValue: o,
      path: d,
      options: u,
      schema: this
    };
    for (let b = 0; b < i.length; b++) {
      const y = i[b];
      y(p, f, function(A) {
        A && (Array.isArray(A) ? g.push(...A) : g.push(A)), --E <= 0 && h(g);
      });
    }
  }
  asNestedTest({
    key: e,
    index: t,
    parent: n,
    parentPath: s,
    originalParent: i,
    options: a
  }) {
    const o = e ?? t;
    if (o == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const d = typeof o == "number";
    let u = n[o];
    const f = Object.assign({}, a, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: u,
      originalValue: i[o],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [d ? "index" : "key"]: o,
      path: d || o.includes(".") ? `${s || ""}[${d ? o : `"${o}"`}]` : (s ? `${s}.` : "") + e
    });
    return (h, E, g) => this.resolve(f)._validate(u, f, E, g);
  }
  validate(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), i = (n = t == null ? void 0 : t.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return new Promise((a, o) => s._validate(e, t, (d, u) => {
      L.isError(d) && (d.value = u), o(d);
    }, (d, u) => {
      d.length ? o(new L(d, u, void 0, void 0, i)) : a(u);
    }));
  }
  validateSync(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), i, a = (n = t == null ? void 0 : t.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return s._validate(e, Object.assign({}, t, {
      sync: !0
    }), (o, d) => {
      throw L.isError(o) && (o.value = d), o;
    }, (o, d) => {
      if (o.length) throw new L(o, e, void 0, void 0, a);
      i = d;
    }), i;
  }
  isValid(e, t) {
    return this.validate(e, t).then(() => !0, (n) => {
      if (L.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (n) {
      if (L.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : ie(t);
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
    return n.internalTests.nullable = se({
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
    return n.internalTests.optionality = se({
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
  defined(e = G.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = G.notNull) {
    return this.nullability(!1, e);
  }
  required(e = G.required) {
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
    }, t.message === void 0 && (t.message = G.default), typeof t.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), s = se(t), i = t.exclusive || t.name && n.exclusiveTests[t.name] === !0;
    if (t.exclusive && !t.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return t.name && (n.exclusiveTests[t.name] = !!t.exclusive), n.tests = n.tests.filter((a) => !(a.OPTIONS.name === t.name && (i || a.OPTIONS.test === s.OPTIONS.test))), n.tests.push(s), n;
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
    let n = this.clone(), s = nr(e).map((i) => new ne(i));
    return s.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(typeof t == "function" ? new Ae(s, t) : Ae.fromOptions(s, t)), n;
  }
  typeError(e) {
    let t = this.clone();
    return t.internalTests.typeError = se({
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
  oneOf(e, t = G.oneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._whitelist.add(s), n._blacklist.delete(s);
    }), n.internalTests.whiteList = se({
      message: t,
      name: "oneOf",
      skipAbsent: !0,
      test(s) {
        let i = this.schema._whitelist, a = i.resolveAll(this.resolve);
        return a.includes(s) ? !0 : this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: a
          }
        });
      }
    }), n;
  }
  notOneOf(e, t = G.notOneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._blacklist.add(s), n._whitelist.delete(s);
    }), n.internalTests.blacklist = se({
      message: t,
      name: "notOneOf",
      test(s) {
        let i = this.schema._blacklist, a = i.resolveAll(this.resolve);
        return a.includes(s) ? this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: a
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
      nullable: a
    } = t.spec;
    return {
      meta: s,
      label: n,
      optional: i,
      nullable: a,
      default: t.getDefault(e),
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests.map((d) => ({
        name: d.OPTIONS.name,
        params: d.OPTIONS.params
      })).filter((d, u, f) => f.findIndex((h) => h.name === d.name) === u)
    };
  }
}
I.prototype.__isYupSchema__ = !0;
for (const r of ["validate", "validateSync"]) I.prototype[`${r}At`] = function(e, t, n = {}) {
  const {
    parent: s,
    parentPath: i,
    schema: a
  } = Ss(this, e, t, n.context);
  return a[r](s && s[i], Object.assign({}, n, {
    parent: s,
    path: e
  }));
};
for (const r of ["equals", "is"]) I.prototype[r] = I.prototype.oneOf;
for (const r of ["not", "nope"]) I.prototype[r] = I.prototype.notOneOf;
const Rs = () => !0;
function O(r) {
  return new or(r);
}
class or extends I {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: Rs
    }, e));
  }
}
O.prototype = or.prototype;
function j() {
  return new lr();
}
class lr extends I {
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
  isTrue(e = Ye.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(t) {
        return U(t) || t === !0;
      }
    });
  }
  isFalse(e = Ye.isValue) {
    return this.test({
      message: e,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(t) {
        return U(t) || t === !1;
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
j.prototype = lr.prototype;
const Cs = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Ns(r) {
  const e = Ze(r);
  if (!e) return Date.parse ? Date.parse(r) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let t = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (t = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (t = 0 - t)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + t, e.second, e.millisecond);
}
function Ze(r) {
  var e, t;
  const n = Cs.exec(r);
  return n ? {
    year: z(n[1]),
    month: z(n[2], 1) - 1,
    day: z(n[3], 1),
    hour: z(n[4]),
    minute: z(n[5]),
    second: z(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      z(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (t = n[7]) == null ? void 0 : t.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: z(n[10]),
    minuteOffset: z(n[11])
  } : null;
}
function z(r, e = 0) {
  return Number(r) || e;
}
let ws = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Ps = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Os = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, xs = "^\\d{4}-\\d{2}-\\d{2}", Ds = "\\d{2}:\\d{2}:\\d{2}", Ls = "(([+-]\\d{2}(:?\\d{2})?)|Z)", vs = new RegExp(`${xs}T${Ds}(\\.\\d+)?${Ls}$`), Fs = (r) => U(r) || r === r.trim(), Is = {}.toString();
function l() {
  return new ur();
}
class ur extends I {
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
        return s === Is ? e : s;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((t) => t.test({
      message: e || G.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((t) => t.OPTIONS.name !== "required"), e));
  }
  length(e, t = D.length) {
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
  min(e, t = D.min) {
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
  max(e, t = D.max) {
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
      message: s || D.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (a) => a === "" && n || a.search(e) !== -1
    });
  }
  email(e = D.email) {
    return this.matches(ws, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = D.url) {
    return this.matches(Ps, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = D.uuid) {
    return this.matches(Os, {
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
    } = e : t = e), this.matches(vs, {
      name: "datetime",
      message: t || D.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: t || D.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (i) => {
        if (!i || n) return !0;
        const a = Ze(i);
        return a ? !!a.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: t || D.datetime_precision,
      params: {
        precision: s
      },
      skipAbsent: !0,
      test: (i) => {
        if (!i || s == null) return !0;
        const a = Ze(i);
        return a ? a.precision === s : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = D.trim) {
    return this.transform((t) => t != null ? t.trim() : t).test({
      message: e,
      name: "trim",
      test: Fs
    });
  }
  lowercase(e = D.lowercase) {
    return this.transform((t) => U(t) ? t : t.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => U(t) || t === t.toLowerCase()
    });
  }
  uppercase(e = D.uppercase) {
    return this.transform((t) => U(t) ? t : t.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => U(t) || t === t.toUpperCase()
    });
  }
}
l.prototype = ur.prototype;
let $s = (r) => r != +r;
function B() {
  return new cr();
}
class cr extends I {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !$s(e);
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
  min(e, t = Z.min) {
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
  max(e, t = Z.max) {
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
  lessThan(e, t = Z.lessThan) {
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
  moreThan(e, t = Z.moreThan) {
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
  positive(e = Z.positive) {
    return this.moreThan(0, e);
  }
  negative(e = Z.negative) {
    return this.lessThan(0, e);
  }
  integer(e = Z.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (t) => Number.isInteger(t)
    });
  }
  truncate() {
    return this.transform((e) => U(e) ? e : e | 0);
  }
  round(e) {
    var t;
    let n = ["ceil", "floor", "round", "trunc"];
    if (e = ((t = e) == null ? void 0 : t.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (n.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((s) => U(s) ? s : Math[e](s));
  }
}
B.prototype = cr.prototype;
let dr = /* @__PURE__ */ new Date(""), qs = (r) => Object.prototype.toString.call(r) === "[object Date]";
function ce() {
  return new pe();
}
class pe extends I {
  constructor() {
    super({
      type: "date",
      check(e) {
        return qs(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, t, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = Ns(e), isNaN(e) ? pe.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, t) {
    let n;
    if (ne.isRef(e))
      n = e;
    else {
      let s = this.cast(e);
      if (!this._typeCheck(s)) throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = s;
    }
    return n;
  }
  min(e, t = ze.min) {
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
  max(e, t = ze.max) {
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
pe.INVALID_DATE = dr;
ce.prototype = pe.prototype;
ce.INVALID_DATE = dr;
function ks(r, e = []) {
  let t = [], n = /* @__PURE__ */ new Set(), s = new Set(e.map(([a, o]) => `${a}-${o}`));
  function i(a, o) {
    let d = ee.split(a)[0];
    n.add(d), s.has(`${o}-${d}`) || t.push([o, d]);
  }
  for (const a of Object.keys(r)) {
    let o = r[a];
    n.add(a), ne.isRef(o) && o.isSibling ? i(o.path, a) : De(o) && "deps" in o && o.deps.forEach((d) => i(d, a));
  }
  return ps.array(Array.from(n), t).reverse();
}
function wt(r, e) {
  let t = 1 / 0;
  return r.some((n, s) => {
    var i;
    if ((i = e.path) != null && i.includes(n))
      return t = s, !0;
  }), t;
}
function fr(r) {
  return (e, t) => wt(r, e) - wt(r, t);
}
const hr = (r, e, t) => {
  if (typeof r != "string")
    return r;
  let n = r;
  try {
    n = JSON.parse(r);
  } catch {
  }
  return t.isType(n) ? n : r;
};
function _e(r) {
  if ("fields" in r) {
    const e = {};
    for (const [t, n] of Object.entries(r.fields))
      e[t] = _e(n);
    return r.setFields(e);
  }
  if (r.type === "array") {
    const e = r.optional();
    return e.innerType && (e.innerType = _e(e.innerType)), e;
  }
  return r.type === "tuple" ? r.optional().clone({
    types: r.spec.types.map(_e)
  }) : "optional" in r ? r.optional() : r;
}
const Us = (r, e) => {
  const t = [...ee.normalizePath(e)];
  if (t.length === 1) return t[0] in r;
  let n = t.pop(), s = ee.getter(ee.join(t), !0)(r);
  return !!(s && n in s);
};
let Pt = (r) => Object.prototype.toString.call(r) === "[object Object]";
function Vs(r, e) {
  let t = Object.keys(r.fields);
  return Object.keys(e).filter((n) => t.indexOf(n) === -1);
}
const Ms = fr([]);
function x(r) {
  return new pr(r);
}
class pr extends I {
  constructor(e) {
    super({
      type: "object",
      check(t) {
        return Pt(t) || typeof t == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Ms, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, t = {}) {
    var n;
    let s = super._cast(e, t);
    if (s === void 0) return this.getDefault(t);
    if (!this._typeCheck(s)) return s;
    let i = this.fields, a = (n = t.stripUnknown) != null ? n : this.spec.noUnknown, o = [].concat(this._nodes, Object.keys(s).filter((h) => !this._nodes.includes(h))), d = {}, u = Object.assign({}, t, {
      parent: d,
      __validating: t.__validating || !1
    }), f = !1;
    for (const h of o) {
      let E = i[h], g = h in s;
      if (E) {
        let p, b = s[h];
        u.path = (t.path ? `${t.path}.` : "") + h, E = E.resolve({
          value: b,
          context: t.context,
          parent: d
        });
        let y = E instanceof I ? E.spec : void 0, S = y == null ? void 0 : y.strict;
        if (y != null && y.strip) {
          f = f || h in s;
          continue;
        }
        p = !t.__validating || !S ? (
          // TODO: use _cast, this is double resolving
          E.cast(s[h], u)
        ) : s[h], p !== void 0 && (d[h] = p);
      } else g && !a && (d[h] = s[h]);
      (g !== h in d || d[h] !== s[h]) && (f = !0);
    }
    return f ? d : s;
  }
  _validate(e, t = {}, n, s) {
    let {
      from: i = [],
      originalValue: a = e,
      recursive: o = this.spec.recursive
    } = t;
    t.from = [{
      schema: this,
      value: a
    }, ...i], t.__validating = !0, t.originalValue = a, super._validate(e, t, n, (d, u) => {
      if (!o || !Pt(u)) {
        s(d, u);
        return;
      }
      a = a || u;
      let f = [];
      for (let h of this._nodes) {
        let E = this.fields[h];
        !E || ne.isRef(E) || f.push(E.asNestedTest({
          options: t,
          key: h,
          parent: u,
          parentPath: t.path,
          originalParent: a
        }));
      }
      this.runTests({
        tests: f,
        value: u,
        originalValue: a,
        options: t
      }, n, (h) => {
        s(h.sort(this._sortErrors).concat(d), u);
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
      const a = n[s];
      n[s] = a === void 0 ? i : a;
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
      let a = e;
      (s = a) != null && s.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[n]
      })), t[n] = i && "getDefault" in i ? i.getDefault(a) : void 0;
    }), t;
  }
  setFields(e, t) {
    let n = this.clone();
    return n.fields = e, n._nodes = ks(e, t), n._sortErrors = fr(Object.keys(e)), t && (n._excludedEdges = t), n;
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
    return _e(this);
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
    let s = ee.getter(e, !0);
    return this.transform((i) => {
      if (!i) return i;
      let a = i;
      return Us(i, e) && (a = Object.assign({}, i), n || delete a[e], a[t] = s(i)), a;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(hr);
  }
  noUnknown(e = !0, t = Je.noUnknown) {
    typeof e != "boolean" && (t = e, e = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: t,
      test(s) {
        if (s == null) return !0;
        const i = Vs(this.schema, s);
        return !e || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = e, n;
  }
  unknown(e = !0, t = Je.noUnknown) {
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
    return this.transformKeys(qe.camelCase);
  }
  snakeCase() {
    return this.transformKeys(qe.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => qe.snakeCase(e).toUpperCase());
  }
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    n.fields = {};
    for (const [i, a] of Object.entries(t.fields)) {
      var s;
      let o = e;
      (s = o) != null && s.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[i]
      })), n.fields[i] = a.describe(o);
    }
    return n;
  }
}
x.prototype = pr.prototype;
function mr(r) {
  return new yr(r);
}
class yr extends I {
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
    const i = n.map((a, o) => {
      const d = this.innerType.cast(a, Object.assign({}, t, {
        path: `${t.path || ""}[${o}]`
      }));
      return d !== a && (s = !0), d;
    });
    return s ? i : n;
  }
  _validate(e, t = {}, n, s) {
    var i;
    let a = this.innerType, o = (i = t.recursive) != null ? i : this.spec.recursive;
    t.originalValue != null && t.originalValue, super._validate(e, t, n, (d, u) => {
      var f;
      if (!o || !a || !this._typeCheck(u)) {
        s(d, u);
        return;
      }
      let h = new Array(u.length);
      for (let g = 0; g < u.length; g++) {
        var E;
        h[g] = a.asNestedTest({
          options: t,
          index: g,
          parent: u,
          parentPath: t.path,
          originalParent: (E = t.originalValue) != null ? E : e
        });
      }
      this.runTests({
        value: u,
        tests: h,
        originalValue: (f = t.originalValue) != null ? f : e,
        options: t
      }, n, (g) => s(g.concat(d), u));
    });
  }
  clone(e) {
    const t = super.clone(e);
    return t.innerType = this.innerType, t;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(hr);
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
    if (!De(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + Y(e));
    return t.innerType = e, t.spec = Object.assign({}, t.spec, {
      types: e
    }), t;
  }
  length(e, t = Ee.length) {
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
    return t = t || Ee.min, this.test({
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
    return t = t || Ee.max, this.test({
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
mr.prototype = yr.prototype;
const m = {
  IS_STRING: /^[a-zA-Z ]+$/,
  IS_VEHICLE_NO: /^[a-zA-Z]{2}[- ]?[0-9]{1,2}[- ]?[a-zA-Z]{1,2}[- ]?[0-9]{4}$/,
  IS_NUMBER: /^\d+(\.\d+)?$/,
  CONTACT_NO: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/
}, H = x().shape({
  address1: l().required("Address Line 1 is required"),
  address2: l().nullable(),
  location: l().required("Location is required"),
  city: l().required("City is required").matches(m.IS_STRING, "City name should only contains alphabets."),
  state: l().required("State is required").matches(m.IS_STRING, "State name should only contains alphabets."),
  pincode: l().required("Pincode is required").matches(m.PINCODE, "Pincode must be exactly 6 digits")
});
l().test("is-future-or-today", "Date must be today or in the future", (r) => {
  if (!r)
    return !0;
  const e = new Date(r), t = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), e >= t;
});
x().shape({
  companyName: l().required("Party Name is required"),
  category: l().required("Please select category of vendor"),
  subcategory: l().required("Please select subcategory of vendor"),
  officeAddress: H,
  officeContactNo: l().required("Please enter contact number.").matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: l().nullable().email("Please enter valid email"),
  mainProduct: l().nullable().matches(m.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: l().nullable().matches(m.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: l().nullable().matches(m.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: l().nullable().matches(m.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: l().nullable(),
  creditTerms: l().nullable(),
  ifGstnCopy: j().required(),
  gstn: l().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN number required if GSTN is available."),
    otherwise: (r) => r.nullable()
  }),
  gstnCopy: O().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN copy required if GSTN is available."),
    otherwise: (r) => r.nullable()
  }),
  ifPanCardCopy: j().required(),
  panNo: l().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN number required if PAN is available."),
    otherwise: (r) => r.nullable()
  }),
  panCardCopy: O().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN card copy required if PAN is available."),
    otherwise: (r) => r.nullable()
  }),
  ifMsmeCopy: j().required(),
  msmeNo: l().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME number required if MSME is available."),
    otherwise: (r) => r.nullable()
  }),
  msmeCopy: O().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME copy required if MSME is available."),
    otherwise: (r) => r.nullable()
  }),
  vendorSaleInfo: x().shape({
    contactFName: l().required("Contact person first name is required.").matches(m.IS_STRING, "Name should include only alphabets."),
    contactMName: l().nullable().matches(m.IS_STRING, "Name should include only alphabets."),
    contactLName: l().required("Contact person last name is required.").matches(m.IS_STRING, "Name should include only alphabets."),
    directContactNumber: l().required("Contact person phone number is required").matches(m.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: l().nullable().matches(m.CONTACT_NO, "Please enter a valid contact number."),
    email: l().nullable().email("Please enter valid email")
  }),
  vendorBankDetails: x().shape({
    beneficiaryFName: l().required("Beneficiary person first name is required.").matches(m.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: l().nullable().matches(m.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: l().required("Beneficiary person last name is required.").matches(m.IS_STRING, "Name should include only alphabets."),
    bankName: l().required("Bank name is required.").matches(m.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: H,
    typeOfAcc: l().required("Account type is required."),
    ifscCode: l().required("IFSC code of bank is required."),
    swiftNo: l().nullable(),
    invoiceCurrency: l().nullable(),
    cancelledChequeCopy: l().nullable()
  }),
  ref1FName: l().required("Reference person first name is required.").matches(m.IS_STRING, "Name should include only alphabets."),
  ref1MName: l().nullable().matches(m.IS_STRING, "Name should include only alphabets."),
  ref1LName: l().required("Reference person first name is required.").matches(m.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: l().required("Contact number is required").matches(m.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: l().nullable().matches(m.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: H,
  ref1Email: l().nullable().email("Please enter valid email."),
  ref2FName: l().nullable().matches(m.IS_STRING, "Name should include only alphabets."),
  ref2MName: l().nullable().matches(m.IS_STRING, "Name should include only alphabets."),
  ref2LName: l().nullable().matches(m.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: l().nullable().matches(m.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: l().nullable().matches(m.CONTACT_NO, "Please enter valid contact number."),
  // ref2Address: initValAddress,
  ref2Email: l().nullable().email("Please enter valid email.")
});
const Gs = /^[6-9]\d{9}$/, Bs = l().matches(Gs, "Please enter a valid 10-digit contact number");
x().shape({
  farmerfName: l().required("First Name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  farmermName: l().nullable().matches(m.IS_STRING, "Name should only contains alphabets."),
  farmerlName: l().required("Last Name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: H,
  primaryMobileNo: Bs,
  secondaryMobileNo: l().nullable().matches(m.CONTACT_NO, "Please enter valid contact number."),
  email: l().email("Please enter valid emial"),
  dob: ce().required("Date of Birth is required"),
  farmAddress: H,
  totalLandArea: B().nullable().positive("Area cannot be negative."),
  cultivationArea: B().nullable().positive("Area cannot be negative."),
  crops: mr(
    x({
      crop: l().required("Crop name is required"),
      noOfPlants: B().nullable().positive("Number of plants cannot be negative"),
      pruningDate: ce().required("Pruning date is required."),
      expectedHarvestDate: ce().required("Expected harvest date is required."),
      expectedQuantityInTonnes: B().required("Expected quantity in metric tones are required.").positive("Quantity cannot be negative")
    }).required("At least one crop is required")
  )
});
const js = x().shape({
  accDeptFName: l().required("First name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  accDeptMName: l().nullable().matches(m.IS_STRING, "Name should only contains alphabets."),
  accDeptLName: l().required("Last name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  accDeptMobileNo: l().required("Please enter contact number.").matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  ownerFName: l().required("First name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  ownerMName: l().nullable().matches(m.IS_STRING, "Name should only contains alphabets."),
  ownerLName: l().required("Last name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  ownerMobileNo: l().required("Please enter contact number.").matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  mandiLicenceNo: l().nullable(),
  // mandiLicenceCopy: yup.,
  regiNo: l().nullable(),
  // regiCopy: File | null,
  electricityBill: j().required("Please select yes or no."),
  consumenrNo: l().when("electricityBill", {
    is: !0,
    then: (r) => r.required("Consumer number is required if electricity bill available."),
    otherwise: (r) => r.nullable()
  }),
  electricityBillCopy: O().when("electricityBill", {
    is: !0,
    then: (r) => r.required("Electricity bill copy required if it is available."),
    otherwise: (r) => r.nullable()
  }),
  notElectricityBillReason: l().when("electricityBill", {
    is: !1,
    then: (r) => r.required("Please specify reason to not attach electricity bill."),
    otherwise: (r) => r.nullable()
  }),
  customerBlacklisted: j().required("Please select yes or no."),
  blackListedBy: l().when("customerBlacklisted", {
    is: !0,
    then: (r) => r.required("Please specify name who blacklisted the customer."),
    otherwise: (r) => r.nullable()
  }),
  ifBlacklistedReason: l().when("customerBlacklisted", {
    is: !0,
    then: (r) => r.required("please specify reason for blacklisting customer."),
    otherwise: (r) => r.nullable()
  }),
  visitingCard: j().required("Please select yes or no."),
  visitinContactNo: l().when("visitingCard", {
    is: !0,
    then: (r) => r.required("Consumer number is required ff visiting card available."),
    otherwise: (r) => r.nullable()
  }),
  visitingCardCopy: O().when("visitingCard", {
    is: !0,
    then: (r) => r.required("Visiting card copy required if it is available."),
    otherwise: (r) => r.nullable()
  }),
  notVisitingCardReason: l().when("visitingCard", {
    is: !1,
    then: (r) => r.required("Please specify reason to not attach visiting card."),
    otherwise: (r) => r.nullable()
  }),
  //References
  ref1FName: l().required("First name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  ref1MName: l().nullable().matches(m.IS_STRING, "Name should only contains alphabets."),
  ref1LName: l().required("Last name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  ref1Address: H,
  ref1ContactNo: l().required("Please enter contact number.").matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  ref1Email: l().required("Please enter email.").email("Please enter valid email"),
  ref2FName: l().nullable().matches(m.IS_STRING, "Name should only contains alphabets."),
  ref2MName: l().nullable().matches(m.IS_STRING, "Name should only contains alphabets."),
  ref2LName: l().nullable().matches(m.IS_STRING, "Name should only contains alphabets."),
  ref2address: x().nullable(),
  ref2ContactNo: l().nullable().matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  ref2Email: l().nullable().email("Please enter valid email")
}), Hs = x().shape({
  billingName: l().required("Billing name is required."),
  commonlyKnownAs: l().nullable(),
  contactPersonFName: l().required("First name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  contactPersonMName: l().nullable().matches(m.IS_STRING, "Name should only contains alphabets."),
  contactPersonLName: l().required("Last name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  billingAddress: H,
  primaryContactNo: l().required("Please enter contact number.").matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: l().nullable().matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: l().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: l().nullable().email("Please enter valid email"),
  billingAddressProofCopy: O().nullable(),
  billingFormatCopy: O().nullable()
}), zs = x().shape({
  deliveryAddress: H,
  deliveryAddressProofCopy: O().nullable(),
  deliveryTime: l().nullable(),
  receivingPersonFName: l().required("First name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  receivingPersonMName: l().nullable().matches(m.IS_STRING, "Name should only contains alphabets."),
  receivingPersonLName: l().required("Last name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  primaryContactNo: l().required("Please enter contact number.").matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: l().nullable().matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: l().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: l().nullable().email("Please enter valid email")
}), Ys = x().shape({
  ifCancelledCheque: j().required("Please select yes or no."),
  cancelledChequeCopy: O().when("ifCancelledCheque", {
    is: !0,
    then: (r) => r.required("Cancel cheque copy required if it is available."),
    otherwise: (r) => r.nullable()
  }),
  notCancelledChequeReason: l().when("ifCancelledCheque", {
    is: !1,
    then: (r) => r.required("Please specify reason to not attach cancel cheque."),
    otherwise: (r) => r.nullable()
  }),
  bankAccHolderFName: l().required("First name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderMName: l().nullable().matches(m.IS_STRING, "Name should only contains alphabets."),
  bankAccHolderLName: l().required("Last name is required").matches(m.IS_STRING, "Name should only contains alphabets."),
  bankName: l().required("Bank name is required."),
  bankBranch: l().required("Branch name is required."),
  accType: l().required("Account type is required."),
  otherAccType: l().nullable(),
  bankAccNo: l().required("Account number is required."),
  ifscCode: l().required("IFSC code is required."),
  bankAddress: H,
  bankStatementCopy: O()
}), Js = x().shape({
  panNo: l().nullable(),
  panCopy: O().nullable(),
  aadharNo: l().nullable(),
  addharCopy: O().nullable(),
  gstn: l().nullable(),
  regiCertificateCopy: O().nullable(),
  billBookCopy: O().nullable(),
  certificationsDetails: l().nullable(),
  otherCertifications: l().nullable(),
  corpRegiDetails: l().nullable(),
  otherCorpRegiDetails: l().nullable(),
  incorpoCertificateCopy: O().nullable(),
  cinNo: l().nullable()
}), Zs = x().shape({}), Ks = x().shape({
  paymentMade: l().required("Required. Please select an option."),
  otherPaymentMade: l().nullable(),
  paymentMode: l().required("Payment mode is required."),
  otherPaymentMode: l().nullable(),
  marginDeposit: l().nullable(),
  rtv: j().required("Please select yes or no."),
  agreementExecuted: j().required("Please select yes or no."),
  lc: l().nullable(),
  bg: l().nullable(),
  securityDepoCheqNo: l().nullable(),
  securityDepoAmt: B().positive("Amount cannot be negative."),
  //Initial Exposure Limit (IEL)
  IELinAmt: B().positive("Amount cannot be negative."),
  IELRecommendedBy: l().matches(m.IS_STRING, "Name should only contain alphabets."),
  IELRecommendedDate: l().nullable(),
  //Revision of Exposure Limit (REL)
  RELinAmt: B().positive("Amount cannot be negative."),
  RELRecommendedBy: l().matches(m.IS_STRING, "Name should only contain alphabets."),
  RELRecommendedDate: l().nullable(),
  reason: l().nullable(),
  docEvidenceCopy: O().nullable()
}), Ws = x().shape({
  proposerBDName: l().nullable(),
  pflCoordinator: l().nullable(),
  recommendedBy: l().nullable(),
  dispatchLocationPfl: l().nullable(),
  approvedBy: l().nullable(),
  relationshipManager: l().nullable(),
  avgBillingMonthly: B().positive("Average cannot be negative."),
  volumeMonthly: B().positive("Volume cannot be negative."),
  customerVerification: l().nullable(),
  verificationAgency: l().nullable(),
  validityPeriod: l().nullable(),
  dueDiligenceDone: l().nullable(),
  creditWorthinessDue: l().nullable(),
  keyAccountPersonAssigned: l().nullable(),
  sinceWhen: l().nullable(),
  ledgerCreatedDate: l().nullable(),
  ledgerCreatedBy: l().nullable(),
  ledgerVerifiedApprovedBy: l().nullable(),
  additionalNotes: l().nullable()
});
x().shape({
  organisationName: l().required("Organization name is required."),
  customerTypes: l().required("Customer type is required."),
  customerCategory: l().required("Customer category is required."),
  organisationType: l().required("Organization type is required."),
  otherType: l().nullable(),
  customerAddress: H,
  primaryContactNo: l().required("Please enter contact number.").matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  secondaryContactNo: l().nullable().matches(m.CONTACT_NO, "Contact number must be 10 digits"),
  emailPrimary: l().required("Please enter email.").email("Please enter valid email"),
  emailSecondary: l().nullable().email("Please enter valid email"),
  keyMobileNumbers: js,
  billingDetails: Hs,
  deliveryDetails: zs,
  statutoryDetails: Js,
  bankDetails: Ys,
  productSpecification: Zs,
  paymentTerms: Ks,
  officeUseOnly: Ws
});
class Xs extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getProcurementFilteredData(e, t) {
    const n = `/grns/calculation/tilldate?filterType=${e}&filterValue=${t}`;
    return this.get(n);
  }
  getProcurementAllData() {
    return this.get("/grns/calculation/tilldate");
  }
  getProcurementDataByDates(e, t, n) {
    if (["today", "financialYear", "tillDate"].includes(e)) {
      const s = `/grns/calculations/dates?filterType=${e}`;
      return this.get(s);
    } else if (e === "dateRange") {
      const s = `/grns/calculations/dates?filterType=dateRange&startDate=${t}&endDate=${n}`;
      return this.get(s);
    } else
      throw new Error(`Invalid filterType: ${e}`);
  }
  getSaleAllData() {
    return this.get("/deliveryChallan/calculations/dates?filterType=tilldate");
  }
  getSaleDataByDates(e, t, n) {
    if (["today", "financialYear", "tillDate"].includes(e)) {
      const s = `/deliveryChallan/calculations/dates?filterType=${e}`;
      return this.get(s);
    } else if (e === "dateRange") {
      const s = `/deliveryChallan/calculations/dates?filterType=dateRange&startDate=${t}&endDate=${n}`;
      return this.get(s);
    } else
      throw new Error(`Invalid filterType: ${e}`);
  }
  getDashboardData(e) {
    const t = Zn(e, "/api/management/getGrns/management");
    return console.log("dashboard data url: ", t), this.get(t);
  }
}
class ei extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createRFPA(e) {
    const t = _.CREATE_RFPA;
    return this.post(t, e);
  }
  getAllRFPAs() {
    const e = _.GET_ALL_RFPA;
    return this.get(e);
  }
  getRFPAById(e) {
    const t = `${_.GET_RFPA_BY_ID}/${e}`;
    return this.get(t);
  }
  updateRFPA(e, t) {
    const n = `${_.UPDATE_RFPA}/${e}`;
    return this.patch(n, t);
  }
  deleteRFPAById(e) {
    const t = `${_.DELETE_RFPA}/${e}`;
    return this.delete(t);
  }
}
class ti extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDealSlip(e) {
    const t = _.CREATE_DEAL_SLIP;
    return this.post(t, e);
  }
  getAllDealSlips() {
    const e = _.GET_ALL_DEAL_SLIP;
    return this.get(e);
  }
  getDealSlipById(e) {
    const t = `${_.GET_DEAL_SLIP_BY_ID}/${e}`;
    return this.get(t);
  }
  updateDealSlip(e, t) {
    const n = `${_.UPDATE_DEAL_SLIP}/${e}`;
    return this.patch(n, t);
  }
  deleteDealSlipById(e) {
    const t = `${_.DELETE_DEAL_SLIP}/${e}`;
    return this.delete(t);
  }
}
class ri extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createGRN(e) {
    const t = _.CREATE_GRN;
    return this.postFormData(t, e);
  }
  getAllGRNs() {
    const e = _.GET_ALL_GRN;
    return this.get(e);
  }
  getGRNById(e) {
    const t = `${_.GET_GRN_BY_ID}/${e}`;
    return this.get(t);
  }
  updateGRN(e, t) {
    const n = `${_.UPDATE_GRN}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteGRNById(e) {
    const t = `${_.DELETE_GRN}/${e}`;
    return this.delete(t);
  }
}
class ni extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createMultiCashVoucher(e) {
    const t = _.CREATE_MC_VOUCHER;
    return this.postFormData(t, e);
  }
  getAllMultiCashVouchers() {
    const e = _.GET_ALL_MC_VOUCHER;
    return this.get(e);
  }
  getMultiCashVoucherById(e) {
    const t = `${_.GET_MC_VOUCHER_BY_ID}/${e}`;
    return this.get(t);
  }
  updateMultiCashVoucher(e, t) {
    const n = `${_.UPDATE_MC_VOUCHER}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteMultiCashVoucherById(e) {
    const t = `${_.DELETE_MC_VOUCHER}/${e}`;
    return this.delete(t);
  }
}
class si extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createLaborPaymentVoucher(e) {
    const t = _.CREATE_LP_VOUCHER;
    return this.postFormData(t, e);
  }
  getAllLaborPaymentVouchers() {
    const e = _.GET_ALL_LP_VOUCHER;
    return this.get(e);
  }
  GetLaborPaymentVoucherById(e) {
    const t = `${_.GET_LP_VOUCHER_BY_ID}/${e}`;
    return this.get(t);
  }
  updateLaborPaymentVoucher(e, t) {
    const n = `${_.UPDATE_LP_VOUCHER}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteLaborPaymentVoucherById(e) {
    const t = `${_.DELETE_LP_VOUCHER}/${e}`;
    return this.delete(t);
  }
}
class ii extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createTransportPaymentVoucher(e) {
    const t = _.CREATE_TP_VOUCHER;
    return this.postFormData(t, e);
  }
  getAllTransportPaymentVouchers() {
    const e = _.GET_ALL_TP_VOUCHER;
    return this.get(e);
  }
  GetTransportPaymentVoucherById(e) {
    const t = `${_.GET_TP_VOUCHER_BY_ID}/${e}`;
    return this.get(t);
  }
  updateTransportPaymentVoucher(e, t) {
    const n = `${_.UPDATE_TP_VOUCHER}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteTransportPaymentVoucherById(e) {
    const t = `${_.DELETE_TP_VOUCHER}/${e}`;
    return this.delete(t);
  }
}
class ai extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createPackingMeterialPaymentVoucher(e) {
    const t = _.CREATE_PMP_VOUCHER;
    return this.postFormData(t, e);
  }
  getAllPackingMeterialPaymentVouchers() {
    const e = _.GET_ALL_PMP_VOUCHER;
    return this.get(e);
  }
  GetPackingMeterialPaymentVoucherById(e) {
    const t = `${_.GET_PMP_VOUCHER_BY_ID}/${e}`;
    return this.get(t);
  }
  updatePackingMeterialPaymentVoucher(e, t) {
    const n = `${_.UPDATE_PMP_VOUCHER}/${e}`;
    return this.patchFormData(n, t);
  }
  deletePackingMeterialPaymentVoucherById(e) {
    const t = `${_.DELETE_PMP_VOUCHER}/${e}`;
    return this.delete(t);
  }
}
class oi extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDeliveryChallan(e) {
    const t = _.CREATE_DELIVERY_CHALLAN;
    return this.postFormData(t, e);
  }
  getAllDeliveryChallans() {
    const e = _.GET_ALL_DELIVERY_CHALLAN;
    return this.get(e);
  }
  getDeliveryChallanById(e) {
    const t = `${_.GET_DELIVERY_CHALLAN_BY_ID}/${e}`;
    return this.get(t);
  }
  updateDeliveryChallan(e, t) {
    const n = `${_.UPDATE_DELIVERY_CHALLAN}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteDeliveryChallanById(e) {
    const t = `${_.DELETE_DELIVERY_CHALLAN}/${e}`;
    return this.delete(t);
  }
  createProformaInvoice(e) {
    const t = `${_.CREATE_PROFORMA_INVOICE}/${e}`;
    return this.post(t);
  }
}
class li extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createPaymentRequest(e, t) {
    const n = `${_.CREATE_PAYMENT_REQ}/${e}`;
    return this.post(n, t);
  }
  getAllPaymentRequests() {
    const e = _.GET_ALL_PAYMENT_REQ;
    return this.get(e);
  }
  getPaymentRequestById(e) {
    const t = `${_.GET_PAYMENT_REQ_BY_ID}/${e}`;
    return this.get(t);
  }
  updatePaymentRequest(e, t) {
    const n = `${_.UPDATE_PAYMENT_REQ}/${e}`;
    return this.patchFormData(n, t);
  }
  deletePaymentRequestById(e) {
    const t = `${_.DELETE_PAYMENT_REQ}/${e}`;
    return this.delete(t);
  }
}
export {
  ti as DealSlipServices,
  oi as DeliveryChallanServices,
  ri as GRNServices,
  si as LaborPaymentVoucherServices,
  ni as MultiCashVoucherServices,
  Qs as PURCHASE_API_URL,
  ai as PackingMeterialPaymentVoucherServices,
  li as PaymentRequestServices,
  Xs as PurchaseDashboardServices,
  ei as RFPAServices,
  ii as TransportPaymentVoucherServices,
  _ as purchaseApiUrl
};
