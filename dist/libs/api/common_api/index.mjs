const xn = {
  // BASE_URL: "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com",
  BASE_URL: "https://0c72-182-156-141-17.ngrok-free.app"
}, Fn = {
  COMPANY_NAMES: "/company/partial/details"
}, g = {
  GET_COMPANY_NAMES: "/company/partial/details",
  GET_DEPARTMENT_BY_ID: "/departments",
  GET_PRODUCTS_PARTIAL: "/products/partial/data",
  GET_PRODUCTS_PARTIAL_BY_ID: "/products/partial",
  SEARCH_PRODUCT: "/products/productname/?search=",
  SEARCH_PRODUCT_ALL_DATA: "/products/serachData/product?search=",
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
  GET_ALL_RFPA_NO: "/rfpa/rfpanumbers/getAllRfpaNo",
  GET_ALL_DEAL_SLIP_NO: "/dealSlip/dealslipno/getAlldealslipNo",
  GET_ALL_GRN_NO: "/grns/grnnumbers/getAllgrnNo",
  GET_ALL_DELIVERY_CHALLAN_NO: "/deliveryChallan/challanNos/getAllChallanNo"
};
function Le(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: tt } = Object.prototype, { getPrototypeOf: le } = Object, W = /* @__PURE__ */ ((t) => (e) => {
  const n = tt.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), N = (t) => (t = t.toLowerCase(), (e) => W(e) === t), K = (t) => (e) => typeof e === t, { isArray: k } = Array, H = K("undefined");
function nt(t) {
  return t !== null && !H(t) && t.constructor !== null && !H(t.constructor) && C(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const De = N("ArrayBuffer");
function rt(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && De(t.buffer), e;
}
const st = K("string"), C = K("function"), xe = K("number"), Y = (t) => t !== null && typeof t == "object", ot = (t) => t === !0 || t === !1, z = (t) => {
  if (W(t) !== "object")
    return !1;
  const e = le(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, it = N("Date"), at = N("File"), ct = N("Blob"), ut = N("FileList"), lt = (t) => Y(t) && C(t.pipe), ft = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || C(t.append) && ((e = W(t)) === "formdata" || // detect form-data instance
  e === "object" && C(t.toString) && t.toString() === "[object FormData]"));
}, dt = N("URLSearchParams"), [ht, pt, mt, Et] = ["ReadableStream", "Request", "Response", "Headers"].map(N), yt = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Fe(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const I = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ie = (t) => !H(t) && t !== I;
function re() {
  const { caseless: t } = Ie(this) && this || {}, e = {}, n = (r, s) => {
    const o = t && Fe(e, s) || s;
    z(e[o]) && z(r) ? e[o] = re(e[o], r) : z(r) ? e[o] = re({}, r) : k(r) ? e[o] = r.slice() : e[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && q(arguments[r], n);
  return e;
}
const Rt = (t, e, n, { allOwnKeys: r } = {}) => (q(e, (s, o) => {
  n && C(s) ? t[o] = Le(s, n) : t[o] = s;
}, { allOwnKeys: r }), t), At = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), gt = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, wt = (t, e, n, r) => {
  let s, o, i;
  const c = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, t, e)) && !c[i] && (e[i] = t[i], c[i] = !0);
    t = n !== !1 && le(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, bt = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Tt = (t) => {
  if (!t) return null;
  if (k(t)) return t;
  let e = t.length;
  if (!xe(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, St = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && le(Uint8Array)), _t = (t, e) => {
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
}, Pt = N("HTMLFormElement"), Ct = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Ee = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Nt = N("RegExp"), Ue = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  q(n, (s, o) => {
    let i;
    (i = e(s, o, t)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(t, r);
}, Lt = (t) => {
  Ue(t, (e, n) => {
    if (C(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (C(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Dt = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return k(t) ? r(t) : r(String(t).split(e)), n;
}, xt = () => {
}, Ft = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, Z = "abcdefghijklmnopqrstuvwxyz", ye = "0123456789", Be = {
  DIGIT: ye,
  ALPHA: Z,
  ALPHA_DIGIT: Z + Z.toUpperCase() + ye
}, It = (t = 16, e = Be.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function Ut(t) {
  return !!(t && C(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Bt = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (Y(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = k(r) ? [] : {};
        return q(r, (i, c) => {
          const f = n(i, s + 1);
          !H(f) && (o[c] = f);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, kt = N("AsyncFunction"), Mt = (t) => t && (Y(t) || C(t)) && C(t.then) && C(t.catch), ke = ((t, e) => t ? setImmediate : e ? ((n, r) => (I.addEventListener("message", ({ source: s, data: o }) => {
  s === I && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), I.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  C(I.postMessage)
), jt = typeof queueMicrotask < "u" ? queueMicrotask.bind(I) : typeof process < "u" && process.nextTick || ke, a = {
  isArray: k,
  isArrayBuffer: De,
  isBuffer: nt,
  isFormData: ft,
  isArrayBufferView: rt,
  isString: st,
  isNumber: xe,
  isBoolean: ot,
  isObject: Y,
  isPlainObject: z,
  isReadableStream: ht,
  isRequest: pt,
  isResponse: mt,
  isHeaders: Et,
  isUndefined: H,
  isDate: it,
  isFile: at,
  isBlob: ct,
  isRegExp: Nt,
  isFunction: C,
  isStream: lt,
  isURLSearchParams: dt,
  isTypedArray: St,
  isFileList: ut,
  forEach: q,
  merge: re,
  extend: Rt,
  trim: yt,
  stripBOM: At,
  inherits: gt,
  toFlatObject: wt,
  kindOf: W,
  kindOfTest: N,
  endsWith: bt,
  toArray: Tt,
  forEachEntry: _t,
  matchAll: Ot,
  isHTMLForm: Pt,
  hasOwnProperty: Ee,
  hasOwnProp: Ee,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ue,
  freezeMethods: Lt,
  toObjectSet: Dt,
  toCamelCase: Ct,
  noop: xt,
  toFiniteNumber: Ft,
  findKey: Fe,
  global: I,
  isContextDefined: Ie,
  ALPHABET: Be,
  generateString: It,
  isSpecCompliantForm: Ut,
  toJSONObject: Bt,
  isAsyncFn: kt,
  isThenable: Mt,
  setImmediate: ke,
  asap: jt
};
function m(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(m, Error, {
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
const Me = m.prototype, je = {};
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
  je[t] = { value: t };
});
Object.defineProperties(m, je);
Object.defineProperty(Me, "isAxiosError", { value: !0 });
m.from = (t, e, n, r, s, o) => {
  const i = Object.create(Me);
  return a.toFlatObject(t, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, t.message, e, n, r, s), i.cause = t, i.name = t.name, o && Object.assign(i, o), i;
};
const Ht = null;
function se(t) {
  return a.isPlainObject(t) || a.isArray(t);
}
function He(t) {
  return a.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Re(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = He(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function qt(t) {
  return a.isArray(t) && !t.some(se);
}
const Gt = a.toFlatObject(a, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function X(t, e, n) {
  if (!a.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, p) {
    return !a.isUndefined(p[E]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(e);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (a.isDate(h))
      return h.toISOString();
    if (!f && a.isBlob(h))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? f && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function l(h, E, p) {
    let R = h;
    if (h && !p && typeof h == "object") {
      if (a.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), h = JSON.stringify(h);
      else if (a.isArray(h) && qt(h) || (a.isFileList(h) || a.endsWith(E, "[]")) && (R = a.toArray(h)))
        return E = He(E), R.forEach(function(T, L) {
          !(a.isUndefined(T) || T === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Re([E], L, o) : i === null ? E : E + "[]",
            u(T)
          );
        }), !1;
    }
    return se(h) ? !0 : (e.append(Re(p, E, o), u(h)), !1);
  }
  const d = [], y = Object.assign(Gt, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: se
  });
  function w(h, E) {
    if (!a.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      d.push(h), a.forEach(h, function(R, b) {
        (!(a.isUndefined(R) || R === null) && s.call(
          e,
          R,
          a.isString(b) ? b.trim() : b,
          E,
          y
        )) === !0 && w(R, E ? E.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!a.isObject(t))
    throw new TypeError("data must be an object");
  return w(t), e;
}
function Ae(t) {
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
function fe(t, e) {
  this._pairs = [], t && X(t, this, e);
}
const qe = fe.prototype;
qe.append = function(e, n) {
  this._pairs.push([e, n]);
};
qe.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Ae);
  } : Ae;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function $t(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ge(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || $t, s = n && n.serialize;
  let o;
  if (s ? o = s(e, n) : o = a.isURLSearchParams(e) ? e.toString() : new fe(e, n).toString(r), o) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class ge {
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
const $e = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, zt = typeof URLSearchParams < "u" ? URLSearchParams : fe, Vt = typeof FormData < "u" ? FormData : null, Jt = typeof Blob < "u" ? Blob : null, vt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zt,
    FormData: Vt,
    Blob: Jt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, de = typeof window < "u" && typeof document < "u", oe = typeof navigator == "object" && navigator || void 0, Wt = de && (!oe || ["ReactNative", "NativeScript", "NS"].indexOf(oe.product) < 0), Kt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yt = de && window.location.href || "http://localhost", Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: de,
  hasStandardBrowserEnv: Wt,
  hasStandardBrowserWebWorkerEnv: Kt,
  navigator: oe,
  origin: Yt
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...Xt,
  ...vt
};
function Qt(t, e) {
  return X(t, new O.classes.URLSearchParams(), Object.assign({
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
function ze(t) {
  function e(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), e(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = en(s[i])), !c);
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
const G = {
  transitional: $e,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(e);
    if (o && a.isHTMLForm(e) && (e = new FormData(e)), a.isFormData(e))
      return s ? JSON.stringify(ze(e)) : e;
    if (a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) || a.isReadableStream(e))
      return e;
    if (a.isArrayBufferView(e))
      return e.buffer;
    if (a.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Qt(e, this.formSerializer).toString();
      if ((c = a.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return X(
          c ? { "files[]": e } : e,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), tn(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || G.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(e) || a.isReadableStream(e))
      return e;
    if (e && a.isString(e) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
  G.headers[t] = {};
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
}, we = Symbol("internals");
function j(t) {
  return t && String(t).trim().toLowerCase();
}
function V(t) {
  return t === !1 || t == null ? t : a.isArray(t) ? t.map(V) : String(t);
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
class P {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(c, f, u) {
      const l = j(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, l);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || f] = V(c));
    }
    const i = (c, f) => a.forEach(c, (u, l) => o(u, l, f));
    if (a.isPlainObject(e) || e instanceof this.constructor)
      i(e, n);
    else if (a.isString(e) && (e = e.trim()) && !on(e))
      i(rn(e), n);
    else if (a.isHeaders(e))
      for (const [c, f] of e.entries())
        o(f, c, r);
    else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = j(e), e) {
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
    if (e = j(e), e) {
      const r = a.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || ee(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = j(i), i) {
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
        n[i] = V(s), delete n[o];
        return;
      }
      const c = e ? an(o) : String(o).trim();
      c !== o && delete n[o], n[c] = V(s), r[c] = !0;
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
    const r = (this[we] = this[we] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = j(i);
      r[c] || (cn(s, i), r[c] = !0);
    }
    return a.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
P.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(P.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(P);
function te(t, e) {
  const n = this || G, r = e || n, s = P.from(r.headers);
  let o = r.data;
  return a.forEach(t, function(c) {
    o = c.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Ve(t) {
  return !!(t && t.__CANCEL__);
}
function M(t, e, n) {
  m.call(this, t ?? "canceled", m.ERR_CANCELED, e, n), this.name = "CanceledError";
}
a.inherits(M, m, {
  __CANCEL__: !0
});
function Je(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
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
  return e = e !== void 0 ? e : 1e3, function(f) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = f, r[s] = u;
    let d = o, y = 0;
    for (; d !== s; )
      y += n[d++], d = d % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), u - i < e)
      return;
    const w = l && u - l;
    return w ? Math.round(y * 1e3 / w) : void 0;
  };
}
function fn(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const i = (u, l = Date.now()) => {
    n = l, s = null, o && (clearTimeout(o), o = null), t.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), d = l - n;
    d >= r ? i(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - d)));
  }, () => s && i(s)];
}
const J = (t, e, n = 3) => {
  let r = 0;
  const s = ln(50, 250);
  return fn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, f = i - r, u = s(f), l = i <= c;
    r = i;
    const d = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && c && l ? (c - i) / u : void 0,
      event: o,
      lengthComputable: c != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, n);
}, be = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, Te = (t) => (...e) => a.asap(() => t(...e)), dn = O.hasStandardBrowserEnv ? (
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
), hn = O.hasStandardBrowserEnv ? (
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
function pn(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function mn(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ve(t, e) {
  return t && !pn(e) ? mn(t, e) : e;
}
const Se = (t) => t instanceof P ? { ...t } : t;
function B(t, e) {
  e = e || {};
  const n = {};
  function r(u, l, d) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: d }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, d) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, d);
    } else return r(u, l, d);
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
  function c(u, l, d) {
    if (d in e)
      return r(u, l);
    if (d in t)
      return r(void 0, u);
  }
  const f = {
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
    headers: (u, l) => s(Se(u), Se(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, t, e)), function(l) {
    const d = f[l] || s, y = d(t[l], e[l], l);
    a.isUndefined(y) && d !== c || (n[l] = y);
  }), n;
}
const We = (t) => {
  const e = B({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = e;
  e.headers = i = P.from(i), e.url = Ge(ve(e.baseURL, e.url), t.params, t.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [u, ...l] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(e)), r || r !== !1 && dn(e.url))) {
    const u = s && o && hn.read(o);
    u && i.set(s, u);
  }
  return e;
}, En = typeof XMLHttpRequest < "u", yn = En && function(t) {
  return new Promise(function(n, r) {
    const s = We(t);
    let o = s.data;
    const i = P.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: u } = s, l, d, y, w, h;
    function E() {
      w && w(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function R() {
      if (!p)
        return;
      const T = P.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), _ = {
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: T,
        config: t,
        request: p
      };
      Je(function(F) {
        n(F), E();
      }, function(F) {
        r(F), E();
      }, _), p = null;
    }
    "onloadend" in p ? p.onloadend = R : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, p.onabort = function() {
      p && (r(new m("Request aborted", m.ECONNABORTED, t, p)), p = null);
    }, p.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, t, p)), p = null;
    }, p.ontimeout = function() {
      let L = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const _ = s.transitional || $e;
      s.timeoutErrorMessage && (L = s.timeoutErrorMessage), r(new m(
        L,
        _.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        t,
        p
      )), p = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in p && a.forEach(i.toJSON(), function(L, _) {
      p.setRequestHeader(_, L);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), c && c !== "json" && (p.responseType = s.responseType), u && ([y, h] = J(u, !0), p.addEventListener("progress", y)), f && p.upload && ([d, w] = J(f), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (l = (T) => {
      p && (r(!T || T.type ? new M(null, t, p) : T), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const b = un(s.url);
    if (b && O.protocols.indexOf(b) === -1) {
      r(new m("Unsupported protocol " + b + ":", m.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(o || null);
  });
}, Rn = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof m ? l : new M(l instanceof Error ? l.message : l));
      }
    };
    let i = e && setTimeout(() => {
      i = null, o(new m(`timeout ${e} of ms exceeded`, m.ETIMEDOUT));
    }, e);
    const c = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(c), f;
  }
}, An = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, gn = async function* (t, e) {
  for await (const n of wn(t))
    yield* An(n, e);
}, wn = async function* (t) {
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
}, _e = (t, e, n, r) => {
  const s = gn(t, e);
  let o = 0, i, c = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          c(), f.close();
          return;
        }
        let d = l.byteLength;
        if (n) {
          let y = o += d;
          n(y);
        }
        f.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(f) {
      return c(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Q = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ke = Q && typeof ReadableStream == "function", bn = Q && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Ye = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Tn = Ke && Ye(() => {
  let t = !1;
  const e = new Request(O.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Oe = 64 * 1024, ie = Ke && Ye(() => a.isReadableStream(new Response("").body)), v = {
  stream: ie && ((t) => t.body)
};
Q && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !v[e] && (v[e] = a.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new m(`Response type '${e}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Sn = async (t) => {
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
    return (await bn(t)).byteLength;
}, _n = async (t, e) => {
  const n = a.toFiniteNumber(t.getContentLength());
  return n ?? Sn(e);
}, On = Q && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: u,
    headers: l,
    withCredentials: d = "same-origin",
    fetchOptions: y
  } = We(t);
  u = u ? (u + "").toLowerCase() : "text";
  let w = Rn([s, o && o.toAbortSignal()], i), h;
  const E = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let p;
  try {
    if (f && Tn && n !== "get" && n !== "head" && (p = await _n(l, r)) !== 0) {
      let _ = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), D;
      if (a.isFormData(r) && (D = _.headers.get("content-type")) && l.setContentType(D), _.body) {
        const [F, $] = be(
          p,
          J(Te(f))
        );
        r = _e(_.body, Oe, F, $);
      }
    }
    a.isString(d) || (d = d ? "include" : "omit");
    const R = "credentials" in Request.prototype;
    h = new Request(e, {
      ...y,
      signal: w,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: R ? d : void 0
    });
    let b = await fetch(h);
    const T = ie && (u === "stream" || u === "response");
    if (ie && (c || T && E)) {
      const _ = {};
      ["status", "statusText", "headers"].forEach((me) => {
        _[me] = b[me];
      });
      const D = a.toFiniteNumber(b.headers.get("content-length")), [F, $] = c && be(
        D,
        J(Te(c), !0)
      ) || [];
      b = new Response(
        _e(b.body, Oe, F, () => {
          $ && $(), E && E();
        }),
        _
      );
    }
    u = u || "text";
    let L = await v[a.findKey(v, u) || "text"](b, t);
    return !T && E && E(), await new Promise((_, D) => {
      Je(_, D, {
        data: L,
        headers: P.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: t,
        request: h
      });
    });
  } catch (R) {
    throw E && E(), R && R.name === "TypeError" && /fetch/i.test(R.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, t, h),
      {
        cause: R.cause || R
      }
    ) : m.from(R, R && R.code, t, h);
  }
}), ae = {
  http: Ht,
  xhr: yn,
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
const Pe = (t) => `- ${t}`, Pn = (t) => a.isFunction(t) || t === null || t === !1, Xe = {
  getAdapter: (t) => {
    t = a.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let o = 0; o < e; o++) {
      n = t[o];
      let i;
      if (r = n, !Pn(n) && (r = ae[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? o.length > 1 ? `since :
` + o.map(Pe).join(`
`) : " " + Pe(o[0]) : "as no adapter specified";
      throw new m(
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
    throw new M(null, t);
}
function Ce(t) {
  return ne(t), t.headers = P.from(t.headers), t.data = te.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Xe.getAdapter(t.adapter || G.adapter)(t).then(function(r) {
    return ne(t), r.data = te.call(
      t,
      t.transformResponse,
      r
    ), r.headers = P.from(r.headers), r;
  }, function(r) {
    return Ve(r) || (ne(t), r && r.response && (r.response.data = te.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = P.from(r.response.headers))), Promise.reject(r);
  });
}
const Qe = "1.7.7", he = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  he[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ne = {};
he.transitional = function(e, n, r) {
  function s(o, i) {
    return "[Axios v" + Qe + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (e === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Ne[i] && (Ne[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, i, c) : !0;
  };
};
function Cn(t, e, n) {
  if (typeof t != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = e[o];
    if (i) {
      const c = t[o], f = c === void 0 || i(c, o, t);
      if (f !== !0)
        throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const ce = {
  assertOptions: Cn,
  validators: he
}, x = ce.validators;
class U {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new ge(),
      response: new ge()
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
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = B(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ce.assertOptions(r, {
      silentJSONParsing: x.transitional(x.boolean),
      forcedJSONParsing: x.transitional(x.boolean),
      clarifyTimeoutError: x.transitional(x.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ce.assertOptions(s, {
      encode: x.function,
      serialize: x.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), n.headers = P.concat(i, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (f = f && E.synchronous, c.unshift(E.fulfilled, E.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(E) {
      u.push(E.fulfilled, E.rejected);
    });
    let l, d = 0, y;
    if (!f) {
      const h = [Ce.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, u), y = h.length, l = Promise.resolve(n); d < y; )
        l = l.then(h[d++], h[d++]);
      return l;
    }
    y = c.length;
    let w = n;
    for (d = 0; d < y; ) {
      const h = c[d++], E = c[d++];
      try {
        w = h(w);
      } catch (p) {
        E.call(this, p);
        break;
      }
    }
    try {
      l = Ce.call(this, w);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, y = u.length; d < y; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(e) {
    e = B(this.defaults, e);
    const n = ve(e.baseURL, e.url);
    return Ge(n, e.params, e.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(e) {
  U.prototype[e] = function(n, r) {
    return this.request(B(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, i, c) {
      return this.request(B(c || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  U.prototype[e] = n(), U.prototype[e + "Form"] = n(!0);
});
class pe {
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
      r.reason || (r.reason = new M(o, i, c), n(r.reason));
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
      token: new pe(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function Nn(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Ln(t) {
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
  const e = new U(t), n = Le(U.prototype.request, e);
  return a.extend(n, U.prototype, e, { allOwnKeys: !0 }), a.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ze(B(t, s));
  }, n;
}
const A = Ze(G);
A.Axios = U;
A.CanceledError = M;
A.CancelToken = pe;
A.isCancel = Ve;
A.VERSION = Qe;
A.toFormData = X;
A.AxiosError = m;
A.Cancel = A.CanceledError;
A.all = function(e) {
  return Promise.all(e);
};
A.spread = Nn;
A.isAxiosError = Ln;
A.mergeConfig = B;
A.AxiosHeaders = P;
A.formToJSON = (t) => ze(a.isHTMLForm(t) ? new FormData(t) : t);
A.getAdapter = Xe.getAdapter;
A.HttpStatusCode = ue;
A.default = A;
const et = "http://ec2-35-154-225-84.ap-south-1.compute.amazonaws.com", Dn = () => A.create({
  baseURL: et,
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
    return S._axiosInstance || (S._axiosInstance = Dn(), S.setAuthHeaderInterceptor(), S._axiosInstance.interceptors.response.use(S.handleSuccess, S.handleError)), S._axiosInstance;
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
      return (await A.post(`${et}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    S._axiosInstance.interceptors.request.use(
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
    const n = e.config;
    if (e.response && e.response.status === 401 && !n._retry) {
      n._retry = !0;
      try {
        const o = await S.refreshAccessToken();
        return S.setAccessToken(o), n.headers.set("Authorization", `Bearer ${o}`), S._axiosInstance(n);
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
class In extends S {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getCompanyNames() {
    const e = g.GET_COMPANY_NAMES;
    return this.get(e);
  }
  //Product Partial Data
  getProductsPatrialData() {
    const e = g.GET_PRODUCTS_PARTIAL;
    return this.get(e);
  }
  getProductsPatrialDataById(e) {
    const n = `${g.GET_PRODUCTS_PARTIAL_BY_ID}/${e}`;
    return this.get(n);
  }
  searchProductDataByQuery(e) {
    const n = `${g.SEARCH_PRODUCT}${e}`;
    return this.get(n);
  }
  searchProductAllDataByQuery(e) {
    const n = `${g.SEARCH_PRODUCT_ALL_DATA}${e}`;
    return this.get(n);
  }
  //Vendor Partial Data
  getVendorsPatrialData() {
    const e = g.GET_VENDORS_PARTIAL;
    return this.get(e);
  }
  getVendorsPatrialDataById(e) {
    const n = `${g.GET_VENDORS_PARTIAL_BY_ID}/${e}`;
    return this.get(n);
  }
  searchVendorDataByQuery(e) {
    const n = `${g.SEARCH_VENDOR}${e}`;
    return this.get(n);
  }
  //Farmer Partial Data
  getFarmersPatrialData() {
    const e = g.GET_FARMERS_PARTIAL;
    return this.get(e);
  }
  getFarmersPatrialDataById(e) {
    const n = `${g.GET_FARMERS_PARTIAL_BY_ID}/${e}`;
    return this.get(n);
  }
  searchFarmerDataByQuery(e) {
    const n = `${g.SEARCH_FARMER}${e}`;
    return this.get(n);
  }
  //Customer
  getCustomerPatrialData(e) {
    const n = `${g.GET_CUSTOMERS_PARTIAL}/${e}`;
    return this.get(n);
  }
  getAllCustomerNames() {
    const e = g.GET_CUSTOMER_NAMESL;
    return this.get(e);
  }
  //Numbers
  getRFPANums() {
    const e = g.GET_ALL_RFPA_NO;
    return this.get(e);
  }
  getGRNNums() {
    const e = g.GET_ALL_GRN_NO;
    return this.get(e);
  }
  getDealSlipNums() {
    const e = g.GET_ALL_DEAL_SLIP_NO;
    return this.get(e);
  }
  getDeliveryChallanNums() {
    const e = g.GET_ALL_DELIVERY_CHALLAN_NO;
    return this.get(e);
  }
  getUOMPartialData() {
    const e = g.GET_UOM_PARTIAL;
    return this.get(e);
  }
  getBranchPartialData() {
    const e = g.GET_BRANCHES_PARTIAL;
    return this.get(e);
  }
  getDepartmentById(e) {
    const n = `${g.GET_DEPARTMENT_BY_ID}/${e}`;
    return this.get(n);
  }
}
export {
  S as BaseService,
  xn as COM_API_URL,
  Fn as SHARED_API_URL,
  In as SharedService,
  g as sharedApiUrlConstants
};
