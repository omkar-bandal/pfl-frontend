const Hs = {
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
function Pt(r, e) {
  return function() {
    return r.apply(e, arguments);
  };
}
const { toString: Er } = Object.prototype, { getPrototypeOf: Ke } = Object, Se = /* @__PURE__ */ ((r) => (e) => {
  const t = Er.call(e);
  return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (r) => (r = r.toLowerCase(), (e) => Se(e) === r), we = (r) => (e) => typeof e === r, { isArray: re } = Array, le = we("undefined");
function _r(r) {
  return r !== null && !le(r) && r.constructor !== null && !le(r.constructor) && $(r.constructor.isBuffer) && r.constructor.isBuffer(r);
}
const Nt = U("ArrayBuffer");
function br(r) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && Nt(r.buffer), e;
}
const gr = we("string"), $ = we("function"), Dt = we("number"), xe = (r) => r !== null && typeof r == "object", Tr = (r) => r === !0 || r === !1, pe = (r) => {
  if (Se(r) !== "object")
    return !1;
  const e = Ke(r);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
}, Ar = U("Date"), Rr = U("File"), Sr = U("Blob"), wr = U("FileList"), xr = (r) => xe(r) && $(r.pipe), Or = (r) => {
  let e;
  return r && (typeof FormData == "function" && r instanceof FormData || $(r.append) && ((e = Se(r)) === "formdata" || // detect form-data instance
  e === "object" && $(r.toString) && r.toString() === "[object FormData]"));
}, Cr = U("URLSearchParams"), [Pr, Nr, Dr, Lr] = ["ReadableStream", "Request", "Response", "Headers"].map(U), Fr = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ce(r, e, { allOwnKeys: t = !1 } = {}) {
  if (r === null || typeof r > "u")
    return;
  let n, s;
  if (typeof r != "object" && (r = [r]), re(r))
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
const Y = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ft = (r) => !le(r) && r !== Y;
function Ue() {
  const { caseless: r } = Ft(this) && this || {}, e = {}, t = (n, s) => {
    const i = r && Lt(e, s) || s;
    pe(e[i]) && pe(n) ? e[i] = Ue(e[i], n) : pe(n) ? e[i] = Ue({}, n) : re(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && ce(arguments[n], t);
  return e;
}
const vr = (r, e, t, { allOwnKeys: n } = {}) => (ce(e, (s, i) => {
  t && $(s) ? r[i] = Pt(s, t) : r[i] = s;
}, { allOwnKeys: n }), r), $r = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), Ir = (r, e, t, n) => {
  r.prototype = Object.create(e.prototype, n), r.prototype.constructor = r, Object.defineProperty(r, "super", {
    value: e.prototype
  }), t && Object.assign(r.prototype, t);
}, kr = (r, e, t, n) => {
  let s, i, a;
  const o = {};
  if (e = e || {}, r == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(r), i = s.length; i-- > 0; )
      a = s[i], (!n || n(a, r, e)) && !o[a] && (e[a] = r[a], o[a] = !0);
    r = t !== !1 && Ke(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}, Ur = (r, e, t) => {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  const n = r.indexOf(e, t);
  return n !== -1 && n === t;
}, Vr = (r) => {
  if (!r) return null;
  if (re(r)) return r;
  let e = r.length;
  if (!Dt(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = r[e];
  return t;
}, qr = /* @__PURE__ */ ((r) => (e) => r && e instanceof r)(typeof Uint8Array < "u" && Ke(Uint8Array)), Mr = (r, e) => {
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
}, jr = U("HTMLFormElement"), Hr = (r) => r.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, s) {
    return n.toUpperCase() + s;
  }
), ut = (({ hasOwnProperty: r }) => (e, t) => r.call(e, t))(Object.prototype), Br = U("RegExp"), vt = (r, e) => {
  const t = Object.getOwnPropertyDescriptors(r), n = {};
  ce(t, (s, i) => {
    let a;
    (a = e(s, i, r)) !== !1 && (n[i] = a || s);
  }), Object.defineProperties(r, n);
}, zr = (r) => {
  vt(r, (e, t) => {
    if ($(r) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = r[t];
    if ($(n)) {
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
  return re(r) ? n(r) : n(String(r).split(e)), t;
}, Jr = () => {
}, Zr = (r, e) => r != null && Number.isFinite(r = +r) ? r : e, Le = "abcdefghijklmnopqrstuvwxyz", lt = "0123456789", $t = {
  DIGIT: lt,
  ALPHA: Le,
  ALPHA_DIGIT: Le + Le.toUpperCase() + lt
}, Kr = (r = 16, e = $t.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = e;
  for (; r--; )
    t += e[Math.random() * n | 0];
  return t;
};
function Qr(r) {
  return !!(r && $(r.append) && r[Symbol.toStringTag] === "FormData" && r[Symbol.iterator]);
}
const Wr = (r) => {
  const e = new Array(10), t = (n, s) => {
    if (xe(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const i = re(n) ? [] : {};
        return ce(n, (a, o) => {
          const c = t(a, s + 1);
          !le(c) && (i[o] = c);
        }), e[s] = void 0, i;
      }
    }
    return n;
  };
  return t(r, 0);
}, Xr = U("AsyncFunction"), en = (r) => r && (xe(r) || $(r)) && $(r.then) && $(r.catch), It = ((r, e) => r ? setImmediate : e ? ((t, n) => (Y.addEventListener("message", ({ source: s, data: i }) => {
  s === Y && i === t && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), Y.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  $(Y.postMessage)
), tn = typeof queueMicrotask < "u" ? queueMicrotask.bind(Y) : typeof process < "u" && process.nextTick || It, l = {
  isArray: re,
  isArrayBuffer: Nt,
  isBuffer: _r,
  isFormData: Or,
  isArrayBufferView: br,
  isString: gr,
  isNumber: Dt,
  isBoolean: Tr,
  isObject: xe,
  isPlainObject: pe,
  isReadableStream: Pr,
  isRequest: Nr,
  isResponse: Dr,
  isHeaders: Lr,
  isUndefined: le,
  isDate: Ar,
  isFile: Rr,
  isBlob: Sr,
  isRegExp: Br,
  isFunction: $,
  isStream: xr,
  isURLSearchParams: Cr,
  isTypedArray: qr,
  isFileList: wr,
  forEach: ce,
  merge: Ue,
  extend: vr,
  trim: Fr,
  stripBOM: $r,
  inherits: Ir,
  toFlatObject: kr,
  kindOf: Se,
  kindOfTest: U,
  endsWith: Ur,
  toArray: Vr,
  forEachEntry: Mr,
  matchAll: Gr,
  isHTMLForm: jr,
  hasOwnProperty: ut,
  hasOwnProp: ut,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: vt,
  freezeMethods: zr,
  toObjectSet: Yr,
  toCamelCase: Hr,
  noop: Jr,
  toFiniteNumber: Zr,
  findKey: Lt,
  global: Y,
  isContextDefined: Ft,
  ALPHABET: $t,
  generateString: Kr,
  isSpecCompliantForm: Qr,
  toJSONObject: Wr,
  isAsyncFn: Xr,
  isThenable: en,
  setImmediate: It,
  asap: tn
};
function g(r, e, t, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
l.inherits(g, Error, {
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
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const kt = g.prototype, Ut = {};
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
  Ut[r] = { value: r };
});
Object.defineProperties(g, Ut);
Object.defineProperty(kt, "isAxiosError", { value: !0 });
g.from = (r, e, t, n, s, i) => {
  const a = Object.create(kt);
  return l.toFlatObject(r, a, function(c) {
    return c !== Error.prototype;
  }, (o) => o !== "isAxiosError"), g.call(a, r.message, e, t, n, s), a.cause = r, a.name = r.name, i && Object.assign(a, i), a;
};
const rn = null;
function Ve(r) {
  return l.isPlainObject(r) || l.isArray(r);
}
function Vt(r) {
  return l.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function ct(r, e, t) {
  return r ? r.concat(e).map(function(s, i) {
    return s = Vt(s), !t && i ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function nn(r) {
  return l.isArray(r) && !r.some(Ve);
}
const sn = l.toFlatObject(l, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Oe(r, e, t) {
  if (!l.isObject(r))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = l.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, p) {
    return !l.isUndefined(p[y]);
  });
  const n = t.metaTokens, s = t.visitor || f, i = t.dots, a = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(e);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (l.isDate(h))
      return h.toISOString();
    if (!c && l.isBlob(h))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(h) || l.isTypedArray(h) ? c && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function f(h, y, p) {
    let R = h;
    if (h && !p && typeof h == "object") {
      if (l.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), h = JSON.stringify(h);
      else if (l.isArray(h) && nn(h) || (l.isFileList(h) || l.endsWith(y, "[]")) && (R = l.toArray(h)))
        return y = Vt(y), R.forEach(function(w, v) {
          !(l.isUndefined(w) || w === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ct([y], v, i) : a === null ? y : y + "[]",
            u(w)
          );
        }), !1;
    }
    return Ve(h) ? !0 : (e.append(ct(p, y, i), u(h)), !1);
  }
  const d = [], E = Object.assign(sn, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Ve
  });
  function b(h, y) {
    if (!l.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(h), l.forEach(h, function(R, A) {
        (!(l.isUndefined(R) || R === null) && s.call(
          e,
          R,
          l.isString(A) ? A.trim() : A,
          y,
          E
        )) === !0 && b(R, y ? y.concat(A) : [A]);
      }), d.pop();
    }
  }
  if (!l.isObject(r))
    throw new TypeError("data must be an object");
  return b(r), e;
}
function ft(r) {
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
function Qe(r, e) {
  this._pairs = [], r && Oe(r, this, e);
}
const qt = Qe.prototype;
qt.append = function(e, t) {
  this._pairs.push([e, t]);
};
qt.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, ft);
  } : ft;
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
  if (s ? i = s(e, t) : i = l.isURLSearchParams(e) ? e.toString() : new Qe(e, t).toString(n), i) {
    const a = r.indexOf("#");
    a !== -1 && (r = r.slice(0, a)), r += (r.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return r;
}
class dt {
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
    l.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Gt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, on = typeof URLSearchParams < "u" ? URLSearchParams : Qe, un = typeof FormData < "u" ? FormData : null, ln = typeof Blob < "u" ? Blob : null, cn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: on,
    FormData: un,
    Blob: ln
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, We = typeof window < "u" && typeof document < "u", qe = typeof navigator == "object" && navigator || void 0, fn = We && (!qe || ["ReactNative", "NativeScript", "NS"].indexOf(qe.product) < 0), dn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", hn = We && window.location.href || "http://localhost", pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: We,
  hasStandardBrowserEnv: fn,
  hasStandardBrowserWebWorkerEnv: dn,
  navigator: qe,
  origin: hn
}, Symbol.toStringTag, { value: "Module" })), D = {
  ...pn,
  ...cn
};
function mn(r, e) {
  return Oe(r, new D.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, s, i) {
      return D.isNode && l.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function yn(r) {
  return l.matchAll(/\w+|\[(\w*)]/g, r).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function En(r) {
  const e = {}, t = Object.keys(r);
  let n;
  const s = t.length;
  let i;
  for (n = 0; n < s; n++)
    i = t[n], e[i] = r[i];
  return e;
}
function jt(r) {
  function e(t, n, s, i) {
    let a = t[i++];
    if (a === "__proto__") return !0;
    const o = Number.isFinite(+a), c = i >= t.length;
    return a = !a && l.isArray(s) ? s.length : a, c ? (l.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n, !o) : ((!s[a] || !l.isObject(s[a])) && (s[a] = []), e(t, n, s[a], i) && l.isArray(s[a]) && (s[a] = En(s[a])), !o);
  }
  if (l.isFormData(r) && l.isFunction(r.entries)) {
    const t = {};
    return l.forEachEntry(r, (n, s) => {
      e(yn(n), s, t, 0);
    }), t;
  }
  return null;
}
function _n(r, e, t) {
  if (l.isString(r))
    try {
      return (e || JSON.parse)(r), l.trim(r);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(r);
}
const fe = {
  transitional: Gt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", s = n.indexOf("application/json") > -1, i = l.isObject(e);
    if (i && l.isHTMLForm(e) && (e = new FormData(e)), l.isFormData(e))
      return s ? JSON.stringify(jt(e)) : e;
    if (l.isArrayBuffer(e) || l.isBuffer(e) || l.isStream(e) || l.isFile(e) || l.isBlob(e) || l.isReadableStream(e))
      return e;
    if (l.isArrayBufferView(e))
      return e.buffer;
    if (l.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let o;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return mn(e, this.formSerializer).toString();
      if ((o = l.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Oe(
          o ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || s ? (t.setContentType("application/json", !1), _n(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || fe.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (l.isResponse(e) || l.isReadableStream(e))
      return e;
    if (e && l.isString(e) && (n && !this.responseType || s)) {
      const a = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (o) {
        if (a)
          throw o.name === "SyntaxError" ? g.from(o, g.ERR_BAD_RESPONSE, this, null, this.response) : o;
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
    FormData: D.classes.FormData,
    Blob: D.classes.Blob
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
l.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  fe.headers[r] = {};
});
const bn = l.toObjectSet([
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
    s = a.indexOf(":"), t = a.substring(0, s).trim().toLowerCase(), n = a.substring(s + 1).trim(), !(!t || e[t] && bn[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, ht = Symbol("internals");
function ie(r) {
  return r && String(r).trim().toLowerCase();
}
function me(r) {
  return r === !1 || r == null ? r : l.isArray(r) ? r.map(me) : String(r);
}
function Tn(r) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(r); )
    e[n[1]] = n[2];
  return e;
}
const An = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function Fe(r, e, t, n, s) {
  if (l.isFunction(n))
    return n.call(this, e, t);
  if (s && (e = t), !!l.isString(e)) {
    if (l.isString(n))
      return e.indexOf(n) !== -1;
    if (l.isRegExp(n))
      return n.test(e);
  }
}
function Rn(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Sn(r, e) {
  const t = l.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(r, n + t, {
      value: function(s, i, a) {
        return this[n].call(this, e, s, i, a);
      },
      configurable: !0
    });
  });
}
class L {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const s = this;
    function i(o, c, u) {
      const f = ie(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = l.findKey(s, f);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || c] = me(o));
    }
    const a = (o, c) => l.forEach(o, (u, f) => i(u, f, c));
    if (l.isPlainObject(e) || e instanceof this.constructor)
      a(e, t);
    else if (l.isString(e) && (e = e.trim()) && !An(e))
      a(gn(e), t);
    else if (l.isHeaders(e))
      for (const [o, c] of e.entries())
        i(c, o, n);
    else
      e != null && i(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = ie(e), e) {
      const n = l.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!t)
          return s;
        if (t === !0)
          return Tn(s);
        if (l.isFunction(t))
          return t.call(this, s, n);
        if (l.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = ie(e), e) {
      const n = l.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || Fe(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let s = !1;
    function i(a) {
      if (a = ie(a), a) {
        const o = l.findKey(n, a);
        o && (!t || Fe(n, n[o], o, t)) && (delete n[o], s = !0);
      }
    }
    return l.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, s = !1;
    for (; n--; ) {
      const i = t[n];
      (!e || Fe(this, this[i], i, e, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, n = {};
    return l.forEach(this, (s, i) => {
      const a = l.findKey(n, i);
      if (a) {
        t[a] = me(s), delete t[i];
        return;
      }
      const o = e ? Rn(i) : String(i).trim();
      o !== i && delete t[i], t[o] = me(s), n[o] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (n, s) => {
      n != null && n !== !1 && (t[s] = e && l.isArray(n) ? n.join(", ") : n);
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
      const o = ie(a);
      n[o] || (Sn(s, a), n[o] = !0);
    }
    return l.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(L.prototype, ({ value: r }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => r,
    set(n) {
      this[t] = n;
    }
  };
});
l.freezeMethods(L);
function ve(r, e) {
  const t = this || fe, n = e || t, s = L.from(n.headers);
  let i = n.data;
  return l.forEach(r, function(o) {
    i = o.call(t, i, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), i;
}
function Ht(r) {
  return !!(r && r.__CANCEL__);
}
function ne(r, e, t) {
  g.call(this, r ?? "canceled", g.ERR_CANCELED, e, t), this.name = "CanceledError";
}
l.inherits(ne, g, {
  __CANCEL__: !0
});
function Bt(r, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? r(t) : e(new g(
    "Request failed with status code " + t.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function wn(r) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return e && e[1] || "";
}
function xn(r, e) {
  r = r || 10;
  const t = new Array(r), n = new Array(r);
  let s = 0, i = 0, a;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const u = Date.now(), f = n[i];
    a || (a = u), t[s] = c, n[s] = u;
    let d = i, E = 0;
    for (; d !== s; )
      E += t[d++], d = d % r;
    if (s = (s + 1) % r, s === i && (i = (i + 1) % r), u - a < e)
      return;
    const b = f && u - f;
    return b ? Math.round(E * 1e3 / b) : void 0;
  };
}
function On(r, e) {
  let t = 0, n = 1e3 / e, s, i;
  const a = (u, f = Date.now()) => {
    t = f, s = null, i && (clearTimeout(i), i = null), r.apply(null, u);
  };
  return [(...u) => {
    const f = Date.now(), d = f - t;
    d >= n ? a(u, f) : (s = u, i || (i = setTimeout(() => {
      i = null, a(s);
    }, n - d)));
  }, () => s && a(s)];
}
const ge = (r, e, t = 3) => {
  let n = 0;
  const s = xn(50, 250);
  return On((i) => {
    const a = i.loaded, o = i.lengthComputable ? i.total : void 0, c = a - n, u = s(c), f = a <= o;
    n = a;
    const d = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && o && f ? (o - a) / u : void 0,
      event: i,
      lengthComputable: o != null,
      [e ? "download" : "upload"]: !0
    };
    r(d);
  }, t);
}, pt = (r, e) => {
  const t = r != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: r,
    loaded: n
  }), e[1]];
}, mt = (r) => (...e) => l.asap(() => r(...e)), Cn = D.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = D.navigator && /(msie|trident)/i.test(D.navigator.userAgent), t = document.createElement("a");
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
      const o = l.isString(a) ? s(a) : a;
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
), Pn = D.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(r, e, t, n, s, i) {
      const a = [r + "=" + encodeURIComponent(e)];
      l.isNumber(t) && a.push("expires=" + new Date(t).toGMTString()), l.isString(n) && a.push("path=" + n), l.isString(s) && a.push("domain=" + s), i === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function Nn(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function Dn(r, e) {
  return e ? r.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : r;
}
function zt(r, e) {
  return r && !Nn(e) ? Dn(r, e) : e;
}
const yt = (r) => r instanceof L ? { ...r } : r;
function Q(r, e) {
  e = e || {};
  const t = {};
  function n(u, f, d) {
    return l.isPlainObject(u) && l.isPlainObject(f) ? l.merge.call({ caseless: d }, u, f) : l.isPlainObject(f) ? l.merge({}, f) : l.isArray(f) ? f.slice() : f;
  }
  function s(u, f, d) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(u))
        return n(void 0, u, d);
    } else return n(u, f, d);
  }
  function i(u, f) {
    if (!l.isUndefined(f))
      return n(void 0, f);
  }
  function a(u, f) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, f);
  }
  function o(u, f, d) {
    if (d in e)
      return n(u, f);
    if (d in r)
      return n(void 0, u);
  }
  const c = {
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
  return l.forEach(Object.keys(Object.assign({}, r, e)), function(f) {
    const d = c[f] || s, E = d(r[f], e[f], f);
    l.isUndefined(E) && d !== o || (t[f] = E);
  }), t;
}
const Yt = (r) => {
  const e = Q({}, r);
  let { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: i, headers: a, auth: o } = e;
  e.headers = a = L.from(a), e.url = Mt(zt(e.baseURL, e.url), r.params, r.paramsSerializer), o && a.set(
    "Authorization",
    "Basic " + btoa((o.username || "") + ":" + (o.password ? unescape(encodeURIComponent(o.password)) : ""))
  );
  let c;
  if (l.isFormData(t)) {
    if (D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((c = a.getContentType()) !== !1) {
      const [u, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      a.setContentType([u || "multipart/form-data", ...f].join("; "));
    }
  }
  if (D.hasStandardBrowserEnv && (n && l.isFunction(n) && (n = n(e)), n || n !== !1 && Cn(e.url))) {
    const u = s && i && Pn.read(i);
    u && a.set(s, u);
  }
  return e;
}, Ln = typeof XMLHttpRequest < "u", Fn = Ln && function(r) {
  return new Promise(function(t, n) {
    const s = Yt(r);
    let i = s.data;
    const a = L.from(s.headers).normalize();
    let { responseType: o, onUploadProgress: c, onDownloadProgress: u } = s, f, d, E, b, h;
    function y() {
      b && b(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function R() {
      if (!p)
        return;
      const w = L.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), C = {
        data: !o || o === "text" || o === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: w,
        config: r,
        request: p
      };
      Bt(function(V) {
        t(V), y();
      }, function(V) {
        n(V), y();
      }, C), p = null;
    }
    "onloadend" in p ? p.onloadend = R : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, p.onabort = function() {
      p && (n(new g("Request aborted", g.ECONNABORTED, r, p)), p = null);
    }, p.onerror = function() {
      n(new g("Network Error", g.ERR_NETWORK, r, p)), p = null;
    }, p.ontimeout = function() {
      let v = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const C = s.transitional || Gt;
      s.timeoutErrorMessage && (v = s.timeoutErrorMessage), n(new g(
        v,
        C.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        r,
        p
      )), p = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in p && l.forEach(a.toJSON(), function(v, C) {
      p.setRequestHeader(C, v);
    }), l.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), o && o !== "json" && (p.responseType = s.responseType), u && ([E, h] = ge(u, !0), p.addEventListener("progress", E)), c && p.upload && ([d, b] = ge(c), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", b)), (s.cancelToken || s.signal) && (f = (w) => {
      p && (n(!w || w.type ? new ne(null, r, p) : w), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const A = wn(s.url);
    if (A && D.protocols.indexOf(A) === -1) {
      n(new g("Unsupported protocol " + A + ":", g.ERR_BAD_REQUEST, r));
      return;
    }
    p.send(i || null);
  });
}, vn = (r, e) => {
  const { length: t } = r = r ? r.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, o();
        const f = u instanceof Error ? u : this.reason;
        n.abort(f instanceof g ? f : new ne(f instanceof Error ? f.message : f));
      }
    };
    let a = e && setTimeout(() => {
      a = null, i(new g(`timeout ${e} of ms exceeded`, g.ETIMEDOUT));
    }, e);
    const o = () => {
      r && (a && clearTimeout(a), a = null, r.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), r = null);
    };
    r.forEach((u) => u.addEventListener("abort", i));
    const { signal: c } = n;
    return c.unsubscribe = () => l.asap(o), c;
  }
}, $n = function* (r, e) {
  let t = r.byteLength;
  if (t < e) {
    yield r;
    return;
  }
  let n = 0, s;
  for (; n < t; )
    s = n + e, yield r.slice(n, s), n = s;
}, In = async function* (r, e) {
  for await (const t of kn(r))
    yield* $n(t, e);
}, kn = async function* (r) {
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
}, Et = (r, e, t, n) => {
  const s = In(r, e);
  let i = 0, a, o = (c) => {
    a || (a = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: f } = await s.next();
        if (u) {
          o(), c.close();
          return;
        }
        let d = f.byteLength;
        if (t) {
          let E = i += d;
          t(E);
        }
        c.enqueue(new Uint8Array(f));
      } catch (u) {
        throw o(u), u;
      }
    },
    cancel(c) {
      return o(c), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ce = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Jt = Ce && typeof ReadableStream == "function", Un = Ce && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (e) => r.encode(e))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), Zt = (r, ...e) => {
  try {
    return !!r(...e);
  } catch {
    return !1;
  }
}, Vn = Jt && Zt(() => {
  let r = !1;
  const e = new Request(D.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return r = !0, "half";
    }
  }).headers.has("Content-Type");
  return r && !e;
}), _t = 64 * 1024, Me = Jt && Zt(() => l.isReadableStream(new Response("").body)), Te = {
  stream: Me && ((r) => r.body)
};
Ce && ((r) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Te[e] && (Te[e] = l.isFunction(r[e]) ? (t) => t[e]() : (t, n) => {
      throw new g(`Response type '${e}' is not supported`, g.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const qn = async (r) => {
  if (r == null)
    return 0;
  if (l.isBlob(r))
    return r.size;
  if (l.isSpecCompliantForm(r))
    return (await new Request(D.origin, {
      method: "POST",
      body: r
    }).arrayBuffer()).byteLength;
  if (l.isArrayBufferView(r) || l.isArrayBuffer(r))
    return r.byteLength;
  if (l.isURLSearchParams(r) && (r = r + ""), l.isString(r))
    return (await Un(r)).byteLength;
}, Mn = async (r, e) => {
  const t = l.toFiniteNumber(r.getContentLength());
  return t ?? qn(e);
}, Gn = Ce && (async (r) => {
  let {
    url: e,
    method: t,
    data: n,
    signal: s,
    cancelToken: i,
    timeout: a,
    onDownloadProgress: o,
    onUploadProgress: c,
    responseType: u,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: E
  } = Yt(r);
  u = u ? (u + "").toLowerCase() : "text";
  let b = vn([s, i && i.toAbortSignal()], a), h;
  const y = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let p;
  try {
    if (c && Vn && t !== "get" && t !== "head" && (p = await Mn(f, n)) !== 0) {
      let C = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), I;
      if (l.isFormData(n) && (I = C.headers.get("content-type")) && f.setContentType(I), C.body) {
        const [V, se] = pt(
          p,
          ge(mt(c))
        );
        n = Et(C.body, _t, V, se);
      }
    }
    l.isString(d) || (d = d ? "include" : "omit");
    const R = "credentials" in Request.prototype;
    h = new Request(e, {
      ...E,
      signal: b,
      method: t.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: R ? d : void 0
    });
    let A = await fetch(h);
    const w = Me && (u === "stream" || u === "response");
    if (Me && (o || w && y)) {
      const C = {};
      ["status", "statusText", "headers"].forEach((B) => {
        C[B] = A[B];
      });
      const I = l.toFiniteNumber(A.headers.get("content-length")), [V, se] = o && pt(
        I,
        ge(mt(o), !0)
      ) || [];
      A = new Response(
        Et(A.body, _t, V, () => {
          se && se(), y && y();
        }),
        C
      );
    }
    u = u || "text";
    let v = await Te[l.findKey(Te, u) || "text"](A, r);
    return !w && y && y(), await new Promise((C, I) => {
      Bt(C, I, {
        data: v,
        headers: L.from(A.headers),
        status: A.status,
        statusText: A.statusText,
        config: r,
        request: h
      });
    });
  } catch (R) {
    throw y && y(), R && R.name === "TypeError" && /fetch/i.test(R.message) ? Object.assign(
      new g("Network Error", g.ERR_NETWORK, r, h),
      {
        cause: R.cause || R
      }
    ) : g.from(R, R && R.code, r, h);
  }
}), Ge = {
  http: rn,
  xhr: Fn,
  fetch: Gn
};
l.forEach(Ge, (r, e) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: e });
    } catch {
    }
    Object.defineProperty(r, "adapterName", { value: e });
  }
});
const bt = (r) => `- ${r}`, jn = (r) => l.isFunction(r) || r === null || r === !1, Kt = {
  getAdapter: (r) => {
    r = l.isArray(r) ? r : [r];
    const { length: e } = r;
    let t, n;
    const s = {};
    for (let i = 0; i < e; i++) {
      t = r[i];
      let a;
      if (n = t, !jn(t) && (n = Ge[(a = String(t)).toLowerCase()], n === void 0))
        throw new g(`Unknown adapter '${a}'`);
      if (n)
        break;
      s[a || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([o, c]) => `adapter ${o} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = e ? i.length > 1 ? `since :
` + i.map(bt).join(`
`) : " " + bt(i[0]) : "as no adapter specified";
      throw new g(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ge
};
function $e(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new ne(null, r);
}
function gt(r) {
  return $e(r), r.headers = L.from(r.headers), r.data = ve.call(
    r,
    r.transformRequest
  ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), Kt.getAdapter(r.adapter || fe.adapter)(r).then(function(n) {
    return $e(r), n.data = ve.call(
      r,
      r.transformResponse,
      n
    ), n.headers = L.from(n.headers), n;
  }, function(n) {
    return Ht(n) || ($e(r), n && n.response && (n.response.data = ve.call(
      r,
      r.transformResponse,
      n.response
    ), n.response.headers = L.from(n.response.headers))), Promise.reject(n);
  });
}
const Qt = "1.7.7", Xe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, e) => {
  Xe[r] = function(n) {
    return typeof n === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
const Tt = {};
Xe.transitional = function(e, t, n) {
  function s(i, a) {
    return "[Axios v" + Qt + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, o) => {
    if (e === !1)
      throw new g(
        s(a, " has been removed" + (t ? " in " + t : "")),
        g.ERR_DEPRECATED
      );
    return t && !Tt[a] && (Tt[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, a, o) : !0;
  };
};
function Hn(r, e, t) {
  if (typeof r != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(r);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], a = e[i];
    if (a) {
      const o = r[i], c = o === void 0 || a(o, i, r);
      if (c !== !0)
        throw new g("option " + i + " must be " + c, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new g("Unknown option " + i, g.ERR_BAD_OPTION);
  }
}
const je = {
  assertOptions: Hn,
  validators: Xe
}, j = je.validators;
class J {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new dt(),
      response: new dt()
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Q(this.defaults, t);
    const { transitional: n, paramsSerializer: s, headers: i } = t;
    n !== void 0 && je.assertOptions(n, {
      silentJSONParsing: j.transitional(j.boolean),
      forcedJSONParsing: j.transitional(j.boolean),
      clarifyTimeoutError: j.transitional(j.boolean)
    }, !1), s != null && (l.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : je.assertOptions(s, {
      encode: j.function,
      serialize: j.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let a = i && l.merge(
      i.common,
      i[t.method]
    );
    i && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), t.headers = L.concat(a, i);
    const o = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(t) === !1 || (c = c && y.synchronous, o.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let f, d = 0, E;
    if (!c) {
      const h = [gt.bind(this), void 0];
      for (h.unshift.apply(h, o), h.push.apply(h, u), E = h.length, f = Promise.resolve(t); d < E; )
        f = f.then(h[d++], h[d++]);
      return f;
    }
    E = o.length;
    let b = t;
    for (d = 0; d < E; ) {
      const h = o[d++], y = o[d++];
      try {
        b = h(b);
      } catch (p) {
        y.call(this, p);
        break;
      }
    }
    try {
      f = gt.call(this, b);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, E = u.length; d < E; )
      f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(e) {
    e = Q(this.defaults, e);
    const t = zt(e.baseURL, e.url);
    return Mt(t, e.params, e.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(e) {
  J.prototype[e] = function(t, n) {
    return this.request(Q(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(i, a, o) {
      return this.request(Q(o || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  J.prototype[e] = t(), J.prototype[e + "Form"] = t(!0);
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
      n.reason || (n.reason = new ne(i, a, o), t(n.reason));
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
function Bn(r) {
  return function(t) {
    return r.apply(null, t);
  };
}
function zn(r) {
  return l.isObject(r) && r.isAxiosError === !0;
}
const He = {
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
Object.entries(He).forEach(([r, e]) => {
  He[e] = r;
});
function Wt(r) {
  const e = new J(r), t = Pt(J.prototype.request, e);
  return l.extend(t, J.prototype, e, { allOwnKeys: !0 }), l.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return Wt(Q(r, s));
  }, t;
}
const x = Wt(fe);
x.Axios = J;
x.CanceledError = ne;
x.CancelToken = et;
x.isCancel = Ht;
x.VERSION = Qt;
x.toFormData = Oe;
x.AxiosError = g;
x.Cancel = x.CanceledError;
x.all = function(e) {
  return Promise.all(e);
};
x.spread = Bn;
x.isAxiosError = zn;
x.mergeConfig = Q;
x.AxiosHeaders = L;
x.formToJSON = (r) => jt(l.isHTMLForm(r) ? new FormData(r) : r);
x.getAdapter = Kt.getAdapter;
x.HttpStatusCode = He;
x.default = x;
const Xt = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com", Yn = () => x.create({
  baseURL: Xt,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class S {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = S.createService();
  }
  static createService() {
    return S._axiosInstance || (S._axiosInstance = Yn(), S.setAuthHeaderInterceptor(), S._axiosInstance.interceptors.response.use(S.handleSuccess, S.handleError)), S._axiosInstance;
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
      return (await x.post(`${Xt}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    S._axiosInstance.interceptors.request.use(
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
    S._axiosInstance.interceptors.response.use(
      S.handleSuccess,
      S.handleError
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
        const i = await S.refreshAccessToken();
        return S.setAccessToken(i), t.headers.set("Authorization", `Bearer ${i}`), S._axiosInstance(t);
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
function W(r) {
  this._maxSize = r, this.clear();
}
W.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
W.prototype.get = function(r) {
  return this._values[r];
};
W.prototype.set = function(r, e) {
  return this._size >= this._maxSize && this.clear(), r in this._values || this._size++, this._values[r] = e;
};
var Kn = /[^.^\]^[]+|(?=\[\]|\.\.)/g, er = /^\d+$/, Qn = /^\d/, Wn = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, Xn = /^\s*(['"]?)(.*?)(\1)\s*$/, tt = 512, At = new W(tt), Rt = new W(tt), St = new W(tt), Z = {
  Cache: W,
  split: Be,
  normalizePath: Ie,
  setter: function(r) {
    var e = Ie(r);
    return Rt.get(r) || Rt.set(r, function(n, s) {
      for (var i = 0, a = e.length, o = n; i < a - 1; ) {
        var c = e[i];
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return n;
        o = o[e[i++]];
      }
      o[e[i]] = s;
    });
  },
  getter: function(r, e) {
    var t = Ie(r);
    return St.get(r) || St.set(r, function(s) {
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
    es(Array.isArray(r) ? r : Be(r), e, t);
  }
};
function Ie(r) {
  return At.get(r) || At.set(
    r,
    Be(r).map(function(e) {
      return e.replace(Xn, "$2");
    })
  );
}
function Be(r) {
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
  return r.match(Qn) && !r.match(er);
}
function rs(r) {
  return Wn.test(r);
}
function ns(r) {
  return !rt(r) && (ts(r) || rs(r));
}
const ss = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, Pe = (r) => r.match(ss) || [], Ne = (r) => r[0].toUpperCase() + r.slice(1), nt = (r, e) => Pe(r).join(e).toLowerCase(), tr = (r) => Pe(r).reduce(
  (e, t) => `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`,
  ""
), is = (r) => Ne(tr(r)), as = (r) => nt(r, "_"), os = (r) => nt(r, "-"), us = (r) => Ne(nt(r, " ")), ls = (r) => Pe(r).map(Ne).join(" ");
var ke = {
  words: Pe,
  upperFirst: Ne,
  camelCase: tr,
  pascalCase: is,
  snakeCase: as,
  kebabCase: os,
  sentenceCase: us,
  titleCase: ls
}, st = { exports: {} };
st.exports = function(r) {
  return rr(cs(r), r);
};
st.exports.array = rr;
function rr(r, e) {
  var t = r.length, n = new Array(t), s = {}, i = t, a = fs(e), o = ds(r);
  for (e.forEach(function(u) {
    if (!o.has(u[0]) || !o.has(u[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); i--; )
    s[i] || c(r[i], i, /* @__PURE__ */ new Set());
  return n;
  function c(u, f, d) {
    if (d.has(u)) {
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
      var b = a.get(u) || /* @__PURE__ */ new Set();
      if (b = Array.from(b), f = b.length) {
        d.add(u);
        do {
          var h = b[--f];
          c(h, o.get(h), d);
        } while (f);
        d.delete(u);
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
function fs(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++) {
    var s = r[t];
    e.has(s[0]) || e.set(s[0], /* @__PURE__ */ new Set()), e.has(s[1]) || e.set(s[1], /* @__PURE__ */ new Set()), e.get(s[0]).add(s[1]);
  }
  return e;
}
function ds(r) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, n = r.length; t < n; t++)
    e.set(r[t], t);
  return e;
}
var hs = st.exports;
const ps = /* @__PURE__ */ Jn(hs), ms = Object.prototype.toString, ys = Error.prototype.toString, Es = RegExp.prototype.toString, _s = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", bs = /^Symbol\((.*)\)(.*)$/;
function gs(r) {
  return r != +r ? "NaN" : r === 0 && 1 / r < 0 ? "-0" : "" + r;
}
function wt(r, e = !1) {
  if (r == null || r === !0 || r === !1) return "" + r;
  const t = typeof r;
  if (t === "number") return gs(r);
  if (t === "string") return e ? `"${r}"` : r;
  if (t === "function") return "[Function " + (r.name || "anonymous") + "]";
  if (t === "symbol") return _s.call(r).replace(bs, "Symbol($1)");
  const n = ms.call(r).slice(8, -1);
  return n === "Date" ? isNaN(r.getTime()) ? "" + r : r.toISOString(r) : n === "Error" || r instanceof Error ? "[" + ys.call(r) + "]" : n === "RegExp" ? Es.call(r) : null;
}
function G(r, e) {
  let t = wt(r, e);
  return t !== null ? t : JSON.stringify(r, function(n, s) {
    let i = wt(this[n], e);
    return i !== null ? i : s;
  }, 2);
}
function nr(r) {
  return r == null ? [] : [].concat(r);
}
let sr, ir, ar, Ts = /\$\{\s*(\w+)\s*\}/g;
sr = Symbol.toStringTag;
class xt {
  constructor(e, t, n, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[sr] = "Error", this.name = "ValidationError", this.value = t, this.path = n, this.type = s, this.errors = [], this.inner = [], nr(e).forEach((i) => {
      if (N.isError(i)) {
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
class N extends Error {
  static formatError(e, t) {
    const n = t.label || t.path || "this";
    return n !== t.path && (t = Object.assign({}, t, {
      path: n
    })), typeof e == "string" ? e.replace(Ts, (s, i) => G(t[i])) : typeof e == "function" ? e(t) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, n, s, i) {
    const a = new xt(e, t, n, s);
    if (i)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[ar] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, N);
  }
  static [ir](e) {
    return xt[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let q = {
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
    const s = n != null && n !== t ? ` (cast from the value \`${G(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${r} must be a \`${e}\` type, but the final value was: \`${G(t, !0)}\`` + s : `${r} must match the configured type. The validated value was: \`${G(t, !0)}\`` + s;
  }
}, P = {
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
}, H = {
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
}, ye = {
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
      if (t.length < s) return `${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${G(t, !0)}\``;
      if (t.length > s) return `${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${G(t, !0)}\``;
    }
    return N.formatError(q.notType, r);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: q,
  string: P,
  number: H,
  date: ze,
  object: Je,
  array: ye,
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
    } = t, a = typeof n == "function" ? n : (...o) => o.every((c) => c === n);
    return new Ae(e, (o, c) => {
      var u;
      let f = a(...o) ? s : i;
      return (u = f == null ? void 0 : f(c)) != null ? u : c;
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
const he = {
  context: "$",
  value: "."
};
class X {
  constructor(e, t = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === he.context, this.isValue = this.key[0] === he.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? he.context : this.isValue ? he.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Z.getter(this.path, !0), this.map = t.map;
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
X.prototype.__isYupRef = !0;
const k = (r) => r == null;
function ee(r) {
  function e({
    value: t,
    path: n = "",
    options: s,
    originalValue: i,
    schema: a
  }, o, c) {
    const {
      name: u,
      test: f,
      params: d,
      message: E,
      skipAbsent: b
    } = r;
    let {
      parent: h,
      context: y,
      abortEarly: p = a.spec.abortEarly,
      disableStackTrace: R = a.spec.disableStackTrace
    } = s;
    function A(O) {
      return X.isRef(O) ? O.getValue(t, h, y) : O;
    }
    function w(O = {}) {
      const z = Object.assign({
        value: t,
        originalValue: i,
        label: a.spec.label,
        path: O.path || n,
        spec: a.spec,
        disableStackTrace: O.disableStackTrace || R
      }, d, O.params);
      for (const ot of Object.keys(z)) z[ot] = A(z[ot]);
      const at = new N(N.formatError(O.message || E, z), t, z.path, O.type || u, z.disableStackTrace);
      return at.params = z, at;
    }
    const v = p ? o : c;
    let C = {
      path: n,
      parent: h,
      type: u,
      from: s.from,
      createError: w,
      resolve: A,
      options: s,
      originalValue: i,
      schema: a
    };
    const I = (O) => {
      N.isError(O) ? v(O) : O ? c(null) : v(w());
    }, V = (O) => {
      N.isError(O) ? v(O) : o(O);
    };
    if (b && k(t))
      return I(!0);
    let B;
    try {
      var it;
      if (B = f.call(C, t, C), typeof ((it = B) == null ? void 0 : it.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${C.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(B).then(I, V);
      }
    } catch (O) {
      V(O);
      return;
    }
    I(B);
  }
  return e.OPTIONS = r, e;
}
function Rs(r, e, t, n = t) {
  let s, i, a;
  return e ? (Z.forEach(e, (o, c, u) => {
    let f = c ? o.slice(1, o.length - 1) : o;
    r = r.resolve({
      context: n,
      parent: s,
      value: t
    });
    let d = r.type === "tuple", E = u ? parseInt(f, 10) : 0;
    if (r.innerType || d) {
      if (d && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (t && E >= t.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${e}. because there is no value at that index. `);
      s = t, t = t && t[E], r = d ? r.spec.types[E] : r.innerType;
    }
    if (!u) {
      if (!r.fields || !r.fields[f]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${a} which is a type: "${r.type}")`);
      s = t, t = t && t[f], r = r.fields[f];
    }
    i = f, a = c ? "[" + o + "]" : "." + o;
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
class Re extends Set {
  describe() {
    const e = [];
    for (const t of this.values())
      e.push(X.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const n of this.values())
      t.push(e(n));
    return t;
  }
  clone() {
    return new Re(this.values());
  }
  merge(e, t) {
    const n = this.clone();
    return e.forEach((s) => n.add(s)), t.forEach((s) => n.delete(s)), n;
  }
}
function te(r, e = /* @__PURE__ */ new Map()) {
  if (De(r) || !r || typeof r != "object") return r;
  if (e.has(r)) return e.get(r);
  let t;
  if (r instanceof Date)
    t = new Date(r.getTime()), e.set(r, t);
  else if (r instanceof RegExp)
    t = new RegExp(r), e.set(r, t);
  else if (Array.isArray(r)) {
    t = new Array(r.length), e.set(r, t);
    for (let n = 0; n < r.length; n++) t[n] = te(r[n], e);
  } else if (r instanceof Map) {
    t = /* @__PURE__ */ new Map(), e.set(r, t);
    for (const [n, s] of r.entries()) t.set(n, te(s, e));
  } else if (r instanceof Set) {
    t = /* @__PURE__ */ new Set(), e.set(r, t);
    for (const n of r) t.add(te(n, e));
  } else if (r instanceof Object) {
    t = {}, e.set(r, t);
    for (const [n, s] of Object.entries(r)) t[n] = te(s, e);
  } else
    throw Error(`Unable to clone ${r}`);
  return t;
}
class F {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Re(), this._blacklist = new Re(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(q.notType);
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
    return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = te(Object.assign({}, this.spec, e)), t;
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
      if (s && k(i))
        return i;
      let a = G(e), o = G(i);
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
    } = t, c = e;
    o || (c = this._cast(c, Object.assign({
      assert: !1
    }, t)));
    let u = [];
    for (let f of Object.values(this.internalTests))
      f && u.push(f);
    this.runTests({
      path: i,
      value: c,
      originalValue: a,
      options: t,
      tests: u
    }, n, (f) => {
      if (f.length)
        return s(f, c);
      this.runTests({
        path: i,
        value: c,
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
      path: c,
      options: u
    } = e, f = (y) => {
      s || (s = !0, t(y, a));
    }, d = (y) => {
      s || (s = !0, n(y, a));
    }, E = i.length, b = [];
    if (!E) return d([]);
    let h = {
      value: a,
      originalValue: o,
      path: c,
      options: u,
      schema: this
    };
    for (let y = 0; y < i.length; y++) {
      const p = i[y];
      p(h, f, function(A) {
        A && (Array.isArray(A) ? b.push(...A) : b.push(A)), --E <= 0 && d(b);
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
    const c = typeof o == "number";
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
      [c ? "index" : "key"]: o,
      path: c || o.includes(".") ? `${s || ""}[${c ? o : `"${o}"`}]` : (s ? `${s}.` : "") + e
    });
    return (d, E, b) => this.resolve(f)._validate(u, f, E, b);
  }
  validate(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), i = (n = t == null ? void 0 : t.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return new Promise((a, o) => s._validate(e, t, (c, u) => {
      N.isError(c) && (c.value = u), o(c);
    }, (c, u) => {
      c.length ? o(new N(c, u, void 0, void 0, i)) : a(u);
    }));
  }
  validateSync(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), i, a = (n = t == null ? void 0 : t.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return s._validate(e, Object.assign({}, t, {
      sync: !0
    }), (o, c) => {
      throw N.isError(o) && (o.value = c), o;
    }, (o, c) => {
      if (o.length) throw new N(o, e, void 0, void 0, a);
      i = c;
    }), i;
  }
  isValid(e, t) {
    return this.validate(e, t).then(() => !0, (n) => {
      if (N.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (n) {
      if (N.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : te(t);
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
    return n.internalTests.nullable = ee({
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
    return n.internalTests.optionality = ee({
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
  defined(e = q.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = q.notNull) {
    return this.nullability(!1, e);
  }
  required(e = q.required) {
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
    }, t.message === void 0 && (t.message = q.default), typeof t.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), s = ee(t), i = t.exclusive || t.name && n.exclusiveTests[t.name] === !0;
    if (t.exclusive && !t.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return t.name && (n.exclusiveTests[t.name] = !!t.exclusive), n.tests = n.tests.filter((a) => !(a.OPTIONS.name === t.name && (i || a.OPTIONS.test === s.OPTIONS.test))), n.tests.push(s), n;
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
    let n = this.clone(), s = nr(e).map((i) => new X(i));
    return s.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(typeof t == "function" ? new Ae(s, t) : Ae.fromOptions(s, t)), n;
  }
  typeError(e) {
    let t = this.clone();
    return t.internalTests.typeError = ee({
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
  oneOf(e, t = q.oneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._whitelist.add(s), n._blacklist.delete(s);
    }), n.internalTests.whiteList = ee({
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
  notOneOf(e, t = q.notOneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._blacklist.add(s), n._whitelist.delete(s);
    }), n.internalTests.blacklist = ee({
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
      tests: t.tests.map((c) => ({
        name: c.OPTIONS.name,
        params: c.OPTIONS.params
      })).filter((c, u, f) => f.findIndex((d) => d.name === c.name) === u)
    };
  }
}
F.prototype.__isYupSchema__ = !0;
for (const r of ["validate", "validateSync"]) F.prototype[`${r}At`] = function(e, t, n = {}) {
  const {
    parent: s,
    parentPath: i,
    schema: a
  } = Rs(this, e, t, n.context);
  return a[r](s && s[i], Object.assign({}, n, {
    parent: s,
    path: e
  }));
};
for (const r of ["equals", "is"]) F.prototype[r] = F.prototype.oneOf;
for (const r of ["not", "nope"]) F.prototype[r] = F.prototype.notOneOf;
const Ss = () => !0;
function Ee(r) {
  return new or(r);
}
class or extends F {
  constructor(e) {
    super(typeof e == "function" ? {
      type: "mixed",
      check: e
    } : Object.assign({
      type: "mixed",
      check: Ss
    }, e));
  }
}
Ee.prototype = or.prototype;
function _e() {
  return new ur();
}
class ur extends F {
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
        return k(t) || t === !0;
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
        return k(t) || t === !1;
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
_e.prototype = ur.prototype;
const ws = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function xs(r) {
  const e = Ze(r);
  if (!e) return Date.parse ? Date.parse(r) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let t = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (t = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (t = 0 - t)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + t, e.second, e.millisecond);
}
function Ze(r) {
  var e, t;
  const n = ws.exec(r);
  return n ? {
    year: M(n[1]),
    month: M(n[2], 1) - 1,
    day: M(n[3], 1),
    hour: M(n[4]),
    minute: M(n[5]),
    second: M(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      M(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (t = n[7]) == null ? void 0 : t.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: M(n[10]),
    minuteOffset: M(n[11])
  } : null;
}
function M(r, e = 0) {
  return Number(r) || e;
}
let Os = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Cs = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Ps = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Ns = "^\\d{4}-\\d{2}-\\d{2}", Ds = "\\d{2}:\\d{2}:\\d{2}", Ls = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Fs = new RegExp(`${Ns}T${Ds}(\\.\\d+)?${Ls}$`), vs = (r) => k(r) || r === r.trim(), $s = {}.toString();
function m() {
  return new lr();
}
class lr extends F {
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
        return s === $s ? e : s;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((t) => t.test({
      message: e || q.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((t) => t.OPTIONS.name !== "required"), e));
  }
  length(e, t = P.length) {
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
  min(e, t = P.min) {
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
  max(e, t = P.max) {
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
      message: s || P.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (a) => a === "" && n || a.search(e) !== -1
    });
  }
  email(e = P.email) {
    return this.matches(Os, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = P.url) {
    return this.matches(Cs, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = P.uuid) {
    return this.matches(Ps, {
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
    } = e : t = e), this.matches(Fs, {
      name: "datetime",
      message: t || P.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: t || P.datetime_offset,
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
      message: t || P.datetime_precision,
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
  trim(e = P.trim) {
    return this.transform((t) => t != null ? t.trim() : t).test({
      message: e,
      name: "trim",
      test: vs
    });
  }
  lowercase(e = P.lowercase) {
    return this.transform((t) => k(t) ? t : t.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => k(t) || t === t.toLowerCase()
    });
  }
  uppercase(e = P.uppercase) {
    return this.transform((t) => k(t) ? t : t.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => k(t) || t === t.toUpperCase()
    });
  }
}
m.prototype = lr.prototype;
let Is = (r) => r != +r;
function ae() {
  return new cr();
}
class cr extends F {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !Is(e);
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
  min(e, t = H.min) {
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
  max(e, t = H.max) {
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
  lessThan(e, t = H.lessThan) {
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
  moreThan(e, t = H.moreThan) {
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
  positive(e = H.positive) {
    return this.moreThan(0, e);
  }
  negative(e = H.negative) {
    return this.lessThan(0, e);
  }
  integer(e = H.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (t) => Number.isInteger(t)
    });
  }
  truncate() {
    return this.transform((e) => k(e) ? e : e | 0);
  }
  round(e) {
    var t;
    let n = ["ceil", "floor", "round", "trunc"];
    if (e = ((t = e) == null ? void 0 : t.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (n.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((s) => k(s) ? s : Math[e](s));
  }
}
ae.prototype = cr.prototype;
let fr = /* @__PURE__ */ new Date(""), ks = (r) => Object.prototype.toString.call(r) === "[object Date]";
function oe() {
  return new de();
}
class de extends F {
  constructor() {
    super({
      type: "date",
      check(e) {
        return ks(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, t, n) => !n.spec.coerce || n.isType(e) || e === null ? e : (e = xs(e), isNaN(e) ? de.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, t) {
    let n;
    if (X.isRef(e))
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
de.INVALID_DATE = fr;
oe.prototype = de.prototype;
oe.INVALID_DATE = fr;
function Us(r, e = []) {
  let t = [], n = /* @__PURE__ */ new Set(), s = new Set(e.map(([a, o]) => `${a}-${o}`));
  function i(a, o) {
    let c = Z.split(a)[0];
    n.add(c), s.has(`${o}-${c}`) || t.push([o, c]);
  }
  for (const a of Object.keys(r)) {
    let o = r[a];
    n.add(a), X.isRef(o) && o.isSibling ? i(o.path, a) : De(o) && "deps" in o && o.deps.forEach((c) => i(c, a));
  }
  return ps.array(Array.from(n), t).reverse();
}
function Ot(r, e) {
  let t = 1 / 0;
  return r.some((n, s) => {
    var i;
    if ((i = e.path) != null && i.includes(n))
      return t = s, !0;
  }), t;
}
function dr(r) {
  return (e, t) => Ot(r, e) - Ot(r, t);
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
function be(r) {
  if ("fields" in r) {
    const e = {};
    for (const [t, n] of Object.entries(r.fields))
      e[t] = be(n);
    return r.setFields(e);
  }
  if (r.type === "array") {
    const e = r.optional();
    return e.innerType && (e.innerType = be(e.innerType)), e;
  }
  return r.type === "tuple" ? r.optional().clone({
    types: r.spec.types.map(be)
  }) : "optional" in r ? r.optional() : r;
}
const Vs = (r, e) => {
  const t = [...Z.normalizePath(e)];
  if (t.length === 1) return t[0] in r;
  let n = t.pop(), s = Z.getter(Z.join(t), !0)(r);
  return !!(s && n in s);
};
let Ct = (r) => Object.prototype.toString.call(r) === "[object Object]";
function qs(r, e) {
  let t = Object.keys(r.fields);
  return Object.keys(e).filter((n) => t.indexOf(n) === -1);
}
const Ms = dr([]);
function K(r) {
  return new pr(r);
}
class pr extends F {
  constructor(e) {
    super({
      type: "object",
      check(t) {
        return Ct(t) || typeof t == "function";
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
    let i = this.fields, a = (n = t.stripUnknown) != null ? n : this.spec.noUnknown, o = [].concat(this._nodes, Object.keys(s).filter((d) => !this._nodes.includes(d))), c = {}, u = Object.assign({}, t, {
      parent: c,
      __validating: t.__validating || !1
    }), f = !1;
    for (const d of o) {
      let E = i[d], b = d in s;
      if (E) {
        let h, y = s[d];
        u.path = (t.path ? `${t.path}.` : "") + d, E = E.resolve({
          value: y,
          context: t.context,
          parent: c
        });
        let p = E instanceof F ? E.spec : void 0, R = p == null ? void 0 : p.strict;
        if (p != null && p.strip) {
          f = f || d in s;
          continue;
        }
        h = !t.__validating || !R ? (
          // TODO: use _cast, this is double resolving
          E.cast(s[d], u)
        ) : s[d], h !== void 0 && (c[d] = h);
      } else b && !a && (c[d] = s[d]);
      (b !== d in c || c[d] !== s[d]) && (f = !0);
    }
    return f ? c : s;
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
    }, ...i], t.__validating = !0, t.originalValue = a, super._validate(e, t, n, (c, u) => {
      if (!o || !Ct(u)) {
        s(c, u);
        return;
      }
      a = a || u;
      let f = [];
      for (let d of this._nodes) {
        let E = this.fields[d];
        !E || X.isRef(E) || f.push(E.asNestedTest({
          options: t,
          key: d,
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
      }, n, (d) => {
        s(d.sort(this._sortErrors).concat(c), u);
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
    return n.fields = e, n._nodes = Us(e, t), n._sortErrors = dr(Object.keys(e)), t && (n._excludedEdges = t), n;
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
    return be(this);
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
    let s = Z.getter(e, !0);
    return this.transform((i) => {
      if (!i) return i;
      let a = i;
      return Vs(i, e) && (a = Object.assign({}, i), n || delete a[e], a[t] = s(i)), a;
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
        const i = qs(this.schema, s);
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
    return this.transformKeys(ke.camelCase);
  }
  snakeCase() {
    return this.transformKeys(ke.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => ke.snakeCase(e).toUpperCase());
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
K.prototype = pr.prototype;
function mr(r) {
  return new yr(r);
}
class yr extends F {
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
      const c = this.innerType.cast(a, Object.assign({}, t, {
        path: `${t.path || ""}[${o}]`
      }));
      return c !== a && (s = !0), c;
    });
    return s ? i : n;
  }
  _validate(e, t = {}, n, s) {
    var i;
    let a = this.innerType, o = (i = t.recursive) != null ? i : this.spec.recursive;
    t.originalValue != null && t.originalValue, super._validate(e, t, n, (c, u) => {
      var f;
      if (!o || !a || !this._typeCheck(u)) {
        s(c, u);
        return;
      }
      let d = new Array(u.length);
      for (let b = 0; b < u.length; b++) {
        var E;
        d[b] = a.asNestedTest({
          options: t,
          index: b,
          parent: u,
          parentPath: t.path,
          originalParent: (E = t.originalValue) != null ? E : e
        });
      }
      this.runTests({
        value: u,
        tests: d,
        originalValue: (f = t.originalValue) != null ? f : e,
        options: t
      }, n, (b) => s(b.concat(c), u));
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
    if (!De(e)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + G(e));
    return t.innerType = e, t.spec = Object.assign({}, t.spec, {
      types: e
    }), t;
  }
  length(e, t = ye.length) {
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
    return t = t || ye.min, this.test({
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
    return t = t || ye.max, this.test({
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
const T = {
  IS_STRING: /^[a-zA-Z ]+$/,
  IS_VEHICLE_NO: /^[a-zA-Z]{2}[- ]?[0-9]{1,2}[- ]?[a-zA-Z]{1,2}[- ]?[0-9]{4}$/,
  IS_NUMBER: /^\d+(\.\d+)?$/,
  CONTACT_NO: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/
}, ue = K().shape({
  address1: m().required("Address Line 1 is required"),
  address2: m().nullable(),
  location: m().required("Location is required"),
  city: m().required("City is required").matches(T.IS_STRING, "City name should only contains alphabets."),
  state: m().required("State is required").matches(T.IS_STRING, "State name should only contains alphabets."),
  pincode: m().required("Pincode is required").matches(T.PINCODE, "Pincode must be exactly 6 digits")
});
m().test("is-future-or-today", "Date must be today or in the future", (r) => {
  if (!r)
    return !0;
  const e = new Date(r), t = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), e >= t;
});
K().shape({
  companyName: m().required("Party Name is required"),
  category: m().required("Please select category of vendor"),
  subcategory: m().required("Please select subcategory of vendor"),
  officeAddress: ue,
  officeContactNo: m().required("Please enter contact number.").matches(T.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: m().nullable().email("Please enter valid email"),
  mainProduct: m().nullable().matches(T.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: m().nullable().matches(T.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: m().nullable().matches(T.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: m().nullable().matches(T.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: m().nullable(),
  creditTerms: m().nullable(),
  ifGstnCopy: _e().required(),
  gstn: m().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN number required if GSTN is available."),
    otherwise: (r) => r.nullable()
  }),
  gstnCopy: Ee().when("ifGstnCopy", {
    is: !0,
    then: (r) => r.required("GSTN copy required if GSTN is available."),
    otherwise: (r) => r.nullable()
  }),
  ifPanCardCopy: _e().required(),
  panNo: m().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN number required if PAN is available."),
    otherwise: (r) => r.nullable()
  }),
  panCardCopy: Ee().when("ifPanCardCopy", {
    is: !0,
    then: (r) => r.required("PAN card copy required if PAN is available."),
    otherwise: (r) => r.nullable()
  }),
  ifMsmeCopy: _e().required(),
  msmeNo: m().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME number required if MSME is available."),
    otherwise: (r) => r.nullable()
  }),
  msmeCopy: Ee().when("ifMsmeCopy", {
    is: !0,
    then: (r) => r.required("MSME copy required if MSME is available."),
    otherwise: (r) => r.nullable()
  }),
  vendorSaleInfo: K().shape({
    contactFName: m().required("Contact person first name is required.").matches(T.IS_STRING, "Name should include only alphabets."),
    contactMName: m().nullable().matches(T.IS_STRING, "Name should include only alphabets."),
    contactLName: m().required("Contact person last name is required.").matches(T.IS_STRING, "Name should include only alphabets."),
    directContactNumber: m().required("Contact person phone number is required").matches(T.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: m().nullable().matches(T.CONTACT_NO, "Please enter a valid contact number."),
    email: m().nullable().email("Please enter valid email")
  }),
  vendorBankDetails: K().shape({
    beneficiaryFName: m().required("Beneficiary person first name is required.").matches(T.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: m().nullable().matches(T.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: m().required("Beneficiary person last name is required.").matches(T.IS_STRING, "Name should include only alphabets."),
    bankName: m().required("Bank name is required.").matches(T.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: ue,
    typeOfAcc: m().required("Account type is required."),
    ifscCode: m().required("IFSC code of bank is required."),
    swiftNo: m().nullable(),
    invoiceCurrency: m().nullable(),
    cancelledChequeCopy: m().nullable()
  }),
  ref1FName: m().required("Reference person first name is required.").matches(T.IS_STRING, "Name should include only alphabets."),
  ref1MName: m().nullable().matches(T.IS_STRING, "Name should include only alphabets."),
  ref1LName: m().required("Reference person first name is required.").matches(T.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: m().required("Contact number is required").matches(T.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: m().nullable().matches(T.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: ue,
  ref1Email: m().nullable().email("Please enter valid email."),
  ref2FName: m().nullable().matches(T.IS_STRING, "Name should include only alphabets."),
  ref2MName: m().nullable().matches(T.IS_STRING, "Name should include only alphabets."),
  ref2LName: m().nullable().matches(T.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: m().nullable().matches(T.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: m().nullable().matches(T.CONTACT_NO, "Please enter valid contact number."),
  // ref2Address: initValAddress,
  ref2Email: m().nullable().email("Please enter valid email.")
});
const Gs = /^[6-9]\d{9}$/, js = m().matches(Gs, "Please enter a valid 10-digit contact number");
K().shape({
  farmerfName: m().required("First Name is required").matches(T.IS_STRING, "Name should only contains alphabets."),
  farmermName: m().nullable().matches(T.IS_STRING, "Name should only contains alphabets."),
  farmerlName: m().required("Last Name is required").matches(T.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: ue,
  primaryMobileNo: js,
  secondaryMobileNo: m().nullable().matches(T.CONTACT_NO, "Please enter valid contact number."),
  email: m().email("Please enter valid emial"),
  dob: oe().required("Date of Birth is required"),
  farmAddress: ue,
  totalLandArea: ae().nullable().positive("Area cannot be negative."),
  cultivationArea: ae().nullable().positive("Area cannot be negative."),
  crops: mr(
    K({
      crop: m().required("Crop name is required"),
      noOfPlants: ae().nullable().positive("Number of plants cannot be negative"),
      pruningDate: oe().required("Pruning date is required."),
      expectedHarvestDate: oe().required("Expected harvest date is required."),
      expectedQuantityInTonnes: ae().required("Expected quantity in metric tones are required.").positive("Quantity cannot be negative")
    }).required("At least one crop is required")
  )
});
class Bs extends S {
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
class zs extends S {
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
class Ys extends S {
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
class Js extends S {
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
class Zs extends S {
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
class Ks extends S {
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
class Qs extends S {
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
class Ws extends S {
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
class Xs extends S {
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
class ei extends S {
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
  Ys as DealSlipServices,
  Xs as DeliveryChallanServices,
  Js as GRNServices,
  Ks as LaborPaymentVoucherServices,
  Zs as MultiCashVoucherServices,
  Hs as PURCHASE_API_URL,
  Ws as PackingMeterialPaymentVoucherServices,
  ei as PaymentRequestServices,
  Bs as PurchaseDashboardServices,
  zs as RFPAServices,
  Qs as TransportPaymentVoucherServices,
  _ as purchaseApiUrl
};
