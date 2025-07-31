const bs = {
  // BASE_URL: "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com",
  BASE_URL: "https://0c72-182-156-141-17.ngrok-free.app"
}, _ = {
  //Notifications
  GET_ALL_NOTIFICATIONS: "/notification/getallNotification",
  GET_NOTIFICATIONS_BY_USER: "/notification/getbyuserid",
  //Approval
  UPDATE_DOCUMENT_STATUS_THREE_LEVEL_APPROVAL: (n) => `/documents/update/${n}`,
  UPDATE_DOCUMENT_STATUS_TWO_LEVEL_APPROVAL: (n) => `/documents/updatesecondlevel/${n}`,
  UPDATE_DOCUMENT_STATUS_ONE_LEVEL_APPROVAL: (n) => `/documents/updatefirstlevel/${n}`,
  //Stock
  GET_ALL_STOCK: (n) => {
    if (n) {
      let e = `/inventoryStock/?page=${n.page}&limit=${n.limit}`;
      return n.sort && n.sort.length > 0 && (e = e + `&sort=${n.sort}`), e;
    } else
      return "/inventoryStock/";
  },
  GET_STOCK_GLOBAL: (n) => {
    if (n) {
      let e = `/inventoryStock/stock/location-wise/?page=${n.page}&limit=${n.limit}`;
      return n.sort && n.sort.length > 0 && (e = e + `&sort=${n.sort}`), e;
    } else
      return "/inventoryStock/stock/location-wise/";
  },
  GET_STOCK_BY_LOCATION: (n, e, t) => {
    if (t) {
      let r = `/inventoryStock/stock/product-wise?locationName=${n}&companyName=${e}?page=${t.page}&limit=${t.limit}`;
      return t.sort && t.sort.length > 0 && (r = r + `&sort=${t.sort}`), r;
    } else
      return `/inventoryStock/stock/product-wise?locationName=${n}&companyId=${e}`;
  },
  GET_STOCK_BY_PRODUCT: (n, e, t, r) => {
    if (r) {
      let s = `/inventoryStock/stock/varient-wise?productName=${n}&locationName=${e}&companyName=${t}?page=${r.page}&limit=${r.limit}`;
      return r.sort && r.sort.length > 0 && (s = s + `&sort=${r.sort}`), s;
    } else
      return `/inventoryStock/stock/varient-wise?productName=${n}&locationName=${e}&companyName=${t}`;
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
function mt(n, e) {
  return function() {
    return n.apply(e, arguments);
  };
}
const { toString: Qt } = Object.prototype, { getPrototypeOf: Fe } = Object, he = /* @__PURE__ */ ((n) => (e) => {
  const t = Qt.call(e);
  return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), v = (n) => (n = n.toLowerCase(), (e) => he(e) === n), fe = (n) => (e) => typeof e === n, { isArray: G } = Array, Y = fe("undefined");
function Zt(n) {
  return n !== null && !Y(n) && n.constructor !== null && !Y(n.constructor) && k(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const yt = v("ArrayBuffer");
function en(n) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && yt(n.buffer), e;
}
const tn = fe("string"), k = fe("function"), gt = fe("number"), de = (n) => n !== null && typeof n == "object", nn = (n) => n === !0 || n === !1, ne = (n) => {
  if (he(n) !== "object")
    return !1;
  const e = Fe(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, rn = v("Date"), sn = v("File"), on = v("Blob"), an = v("FileList"), cn = (n) => de(n) && k(n.pipe), un = (n) => {
  let e;
  return n && (typeof FormData == "function" && n instanceof FormData || k(n.append) && ((e = he(n)) === "formdata" || // detect form-data instance
  e === "object" && k(n.toString) && n.toString() === "[object FormData]"));
}, ln = v("URLSearchParams"), [hn, fn, dn, pn] = ["ReadableStream", "Request", "Response", "Headers"].map(v), mn = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function X(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let r, s;
  if (typeof n != "object" && (n = [n]), G(n))
    for (r = 0, s = n.length; r < s; r++)
      e.call(null, n[r], r, n);
  else {
    const i = t ? Object.getOwnPropertyNames(n) : Object.keys(n), o = i.length;
    let a;
    for (r = 0; r < o; r++)
      a = i[r], e.call(null, n[a], a, n);
  }
}
function _t(n, e) {
  e = e.toLowerCase();
  const t = Object.keys(n);
  let r = t.length, s;
  for (; r-- > 0; )
    if (s = t[r], e === s.toLowerCase())
      return s;
  return null;
}
const q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Et = (n) => !Y(n) && n !== q;
function Se() {
  const { caseless: n } = Et(this) && this || {}, e = {}, t = (r, s) => {
    const i = n && _t(e, s) || s;
    ne(e[i]) && ne(r) ? e[i] = Se(e[i], r) : ne(r) ? e[i] = Se({}, r) : G(r) ? e[i] = r.slice() : e[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && X(arguments[r], t);
  return e;
}
const yn = (n, e, t, { allOwnKeys: r } = {}) => (X(e, (s, i) => {
  t && k(s) ? n[i] = mt(s, t) : n[i] = s;
}, { allOwnKeys: r }), n), gn = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), _n = (n, e, t, r) => {
  n.prototype = Object.create(e.prototype, r), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: e.prototype
  }), t && Object.assign(n.prototype, t);
}, En = (n, e, t, r) => {
  let s, i, o;
  const a = {};
  if (e = e || {}, n == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(n), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, n, e)) && !a[o] && (e[o] = n[o], a[o] = !0);
    n = t !== !1 && Fe(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}, An = (n, e, t) => {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  const r = n.indexOf(e, t);
  return r !== -1 && r === t;
}, wn = (n) => {
  if (!n) return null;
  if (G(n)) return n;
  let e = n.length;
  if (!gt(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = n[e];
  return t;
}, bn = /* @__PURE__ */ ((n) => (e) => n && e instanceof n)(typeof Uint8Array < "u" && Fe(Uint8Array)), Tn = (n, e) => {
  const r = (n && n[Symbol.iterator]).call(n);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    e.call(n, i[0], i[1]);
  }
}, Rn = (n, e) => {
  let t;
  const r = [];
  for (; (t = n.exec(e)) !== null; )
    r.push(t);
  return r;
}, Sn = v("HTMLFormElement"), On = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, s) {
    return r.toUpperCase() + s;
  }
), Ye = (({ hasOwnProperty: n }) => (e, t) => n.call(e, t))(Object.prototype), Cn = v("RegExp"), At = (n, e) => {
  const t = Object.getOwnPropertyDescriptors(n), r = {};
  X(t, (s, i) => {
    let o;
    (o = e(s, i, n)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(n, r);
}, Ln = (n) => {
  At(n, (e, t) => {
    if (k(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = n[t];
    if (k(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Nn = (n, e) => {
  const t = {}, r = (s) => {
    s.forEach((i) => {
      t[i] = !0;
    });
  };
  return G(n) ? r(n) : r(String(n).split(e)), t;
}, kn = () => {
}, Pn = (n, e) => n != null && Number.isFinite(n = +n) ? n : e, _e = "abcdefghijklmnopqrstuvwxyz", Xe = "0123456789", wt = {
  DIGIT: Xe,
  ALPHA: _e,
  ALPHA_DIGIT: _e + _e.toUpperCase() + Xe
}, xn = (n = 16, e = wt.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = e;
  for (; n--; )
    t += e[Math.random() * r | 0];
  return t;
};
function vn(n) {
  return !!(n && k(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator]);
}
const Bn = (n) => {
  const e = new Array(10), t = (r, s) => {
    if (de(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const i = G(r) ? [] : {};
        return X(r, (o, a) => {
          const h = t(o, s + 1);
          !Y(h) && (i[a] = h);
        }), e[s] = void 0, i;
      }
    }
    return r;
  };
  return t(n, 0);
}, Dn = v("AsyncFunction"), In = (n) => n && (de(n) || k(n)) && k(n.then) && k(n.catch), bt = ((n, e) => n ? setImmediate : e ? ((t, r) => (q.addEventListener("message", ({ source: s, data: i }) => {
  s === q && i === t && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), q.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  k(q.postMessage)
), Un = typeof queueMicrotask < "u" ? queueMicrotask.bind(q) : typeof process < "u" && process.nextTick || bt, c = {
  isArray: G,
  isArrayBuffer: yt,
  isBuffer: Zt,
  isFormData: un,
  isArrayBufferView: en,
  isString: tn,
  isNumber: gt,
  isBoolean: nn,
  isObject: de,
  isPlainObject: ne,
  isReadableStream: hn,
  isRequest: fn,
  isResponse: dn,
  isHeaders: pn,
  isUndefined: Y,
  isDate: rn,
  isFile: sn,
  isBlob: on,
  isRegExp: Cn,
  isFunction: k,
  isStream: cn,
  isURLSearchParams: ln,
  isTypedArray: bn,
  isFileList: an,
  forEach: X,
  merge: Se,
  extend: yn,
  trim: mn,
  stripBOM: gn,
  inherits: _n,
  toFlatObject: En,
  kindOf: he,
  kindOfTest: v,
  endsWith: An,
  toArray: wn,
  forEachEntry: Tn,
  matchAll: Rn,
  isHTMLForm: Sn,
  hasOwnProperty: Ye,
  hasOwnProp: Ye,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: At,
  freezeMethods: Ln,
  toObjectSet: Nn,
  toCamelCase: On,
  noop: kn,
  toFiniteNumber: Pn,
  findKey: _t,
  global: q,
  isContextDefined: Et,
  ALPHABET: wt,
  generateString: xn,
  isSpecCompliantForm: vn,
  toJSONObject: Bn,
  isAsyncFn: Dn,
  isThenable: In,
  setImmediate: bt,
  asap: Un
};
function m(n, e, t, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
c.inherits(m, Error, {
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
const Tt = m.prototype, Rt = {};
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
  Rt[n] = { value: n };
});
Object.defineProperties(m, Rt);
Object.defineProperty(Tt, "isAxiosError", { value: !0 });
m.from = (n, e, t, r, s, i) => {
  const o = Object.create(Tt);
  return c.toFlatObject(n, o, function(h) {
    return h !== Error.prototype;
  }, (a) => a !== "isAxiosError"), m.call(o, n.message, e, t, r, s), o.cause = n, o.name = n.name, i && Object.assign(o, i), o;
};
const Fn = null;
function Oe(n) {
  return c.isPlainObject(n) || c.isArray(n);
}
function St(n) {
  return c.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Qe(n, e, t) {
  return n ? n.concat(e).map(function(s, i) {
    return s = St(s), !t && i ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function Mn(n) {
  return c.isArray(n) && !n.some(Oe);
}
const qn = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function pe(n, e, t) {
  if (!c.isObject(n))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = c.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, p) {
    return !c.isUndefined(p[y]);
  });
  const r = t.metaTokens, s = t.visitor || l, i = t.dots, o = t.indexes, h = (t.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(e);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (c.isDate(d))
      return d.toISOString();
    if (!h && c.isBlob(d))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(d) || c.isTypedArray(d) ? h && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, y, p) {
    let A = d;
    if (d && !p && typeof d == "object") {
      if (c.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), d = JSON.stringify(d);
      else if (c.isArray(d) && Mn(d) || (c.isFileList(d) || c.endsWith(y, "[]")) && (A = c.toArray(d)))
        return y = St(y), A.forEach(function(O, D) {
          !(c.isUndefined(O) || O === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Qe([y], D, i) : o === null ? y : y + "[]",
            u(O)
          );
        }), !1;
    }
    return Oe(d) ? !0 : (e.append(Qe(p, y, i), u(d)), !1);
  }
  const f = [], E = Object.assign(qn, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Oe
  });
  function T(d, y) {
    if (!c.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(d), c.forEach(d, function(A, R) {
        (!(c.isUndefined(A) || A === null) && s.call(
          e,
          A,
          c.isString(R) ? R.trim() : R,
          y,
          E
        )) === !0 && T(A, y ? y.concat(R) : [R]);
      }), f.pop();
    }
  }
  if (!c.isObject(n))
    throw new TypeError("data must be an object");
  return T(n), e;
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
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function Me(n, e) {
  this._pairs = [], n && pe(n, this, e);
}
const Ot = Me.prototype;
Ot.append = function(e, t) {
  this._pairs.push([e, t]);
};
Ot.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, Ze);
  } : Ze;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function $n(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ct(n, e, t) {
  if (!e)
    return n;
  const r = t && t.encode || $n, s = t && t.serialize;
  let i;
  if (s ? i = s(e, t) : i = c.isURLSearchParams(e) ? e.toString() : new Me(e, t).toString(r), i) {
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
  use(e, t, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
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
    c.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Lt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vn = typeof URLSearchParams < "u" ? URLSearchParams : Me, Hn = typeof FormData < "u" ? FormData : null, Gn = typeof Blob < "u" ? Blob : null, jn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vn,
    FormData: Hn,
    Blob: Gn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qe = typeof window < "u" && typeof document < "u", Ce = typeof navigator == "object" && navigator || void 0, zn = qe && (!Ce || ["ReactNative", "NativeScript", "NS"].indexOf(Ce.product) < 0), Kn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Wn = qe && window.location.href || "http://localhost", Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qe,
  hasStandardBrowserEnv: zn,
  hasStandardBrowserWebWorkerEnv: Kn,
  navigator: Ce,
  origin: Wn
}, Symbol.toStringTag, { value: "Module" })), L = {
  ...Jn,
  ...jn
};
function Yn(n, e) {
  return pe(n, new L.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, s, i) {
      return L.isNode && c.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Xn(n) {
  return c.matchAll(/\w+|\[(\w*)]/g, n).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Qn(n) {
  const e = {}, t = Object.keys(n);
  let r;
  const s = t.length;
  let i;
  for (r = 0; r < s; r++)
    i = t[r], e[i] = n[i];
  return e;
}
function Nt(n) {
  function e(t, r, s, i) {
    let o = t[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), h = i >= t.length;
    return o = !o && c.isArray(s) ? s.length : o, h ? (c.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !a) : ((!s[o] || !c.isObject(s[o])) && (s[o] = []), e(t, r, s[o], i) && c.isArray(s[o]) && (s[o] = Qn(s[o])), !a);
  }
  if (c.isFormData(n) && c.isFunction(n.entries)) {
    const t = {};
    return c.forEachEntry(n, (r, s) => {
      e(Xn(r), s, t, 0);
    }), t;
  }
  return null;
}
function Zn(n, e, t) {
  if (c.isString(n))
    try {
      return (e || JSON.parse)(n), c.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(n);
}
const Q = {
  transitional: Lt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const r = t.getContentType() || "", s = r.indexOf("application/json") > -1, i = c.isObject(e);
    if (i && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
      return s ? JSON.stringify(Nt(e)) : e;
    if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e) || c.isReadableStream(e))
      return e;
    if (c.isArrayBufferView(e))
      return e.buffer;
    if (c.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Yn(e, this.formSerializer).toString();
      if ((a = c.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return pe(
          a ? { "files[]": e } : e,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return i || s ? (t.setContentType("application/json", !1), Zn(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || Q.transitional, r = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(e) || c.isReadableStream(e))
      return e;
    if (e && c.isString(e) && (r && !this.responseType || s)) {
      const o = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? m.from(a, m.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
  Q.headers[n] = {};
});
const er = c.toObjectSet([
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
]), tr = (n) => {
  const e = {};
  let t, r, s;
  return n && n.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!t || e[t] && er[t]) && (t === "set-cookie" ? e[t] ? e[t].push(r) : e[t] = [r] : e[t] = e[t] ? e[t] + ", " + r : r);
  }), e;
}, tt = Symbol("internals");
function K(n) {
  return n && String(n).trim().toLowerCase();
}
function re(n) {
  return n === !1 || n == null ? n : c.isArray(n) ? n.map(re) : String(n);
}
function nr(n) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(n); )
    e[r[1]] = r[2];
  return e;
}
const rr = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Ee(n, e, t, r, s) {
  if (c.isFunction(r))
    return r.call(this, e, t);
  if (s && (e = t), !!c.isString(e)) {
    if (c.isString(r))
      return e.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(e);
  }
}
function sr(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r);
}
function ir(n, e) {
  const t = c.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + t, {
      value: function(s, i, o) {
        return this[r].call(this, e, s, i, o);
      },
      configurable: !0
    });
  });
}
class N {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    const s = this;
    function i(a, h, u) {
      const l = K(h);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = c.findKey(s, l);
      (!f || s[f] === void 0 || u === !0 || u === void 0 && s[f] !== !1) && (s[f || h] = re(a));
    }
    const o = (a, h) => c.forEach(a, (u, l) => i(u, l, h));
    if (c.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (c.isString(e) && (e = e.trim()) && !rr(e))
      o(tr(e), t);
    else if (c.isHeaders(e))
      for (const [a, h] of e.entries())
        i(h, a, r);
    else
      e != null && i(t, e, r);
    return this;
  }
  get(e, t) {
    if (e = K(e), e) {
      const r = c.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!t)
          return s;
        if (t === !0)
          return nr(s);
        if (c.isFunction(t))
          return t.call(this, s, r);
        if (c.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = K(e), e) {
      const r = c.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || Ee(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = K(o), o) {
        const a = c.findKey(r, o);
        a && (!t || Ee(r, r[a], a, t)) && (delete r[a], s = !0);
      }
    }
    return c.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let r = t.length, s = !1;
    for (; r--; ) {
      const i = t[r];
      (!e || Ee(this, this[i], i, e, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, r = {};
    return c.forEach(this, (s, i) => {
      const o = c.findKey(r, i);
      if (o) {
        t[o] = re(s), delete t[i];
        return;
      }
      const a = e ? sr(i) : String(i).trim();
      a !== i && delete t[i], t[a] = re(s), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, s) => {
      r != null && r !== !1 && (t[s] = e && c.isArray(r) ? r.join(", ") : r);
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
    const r = new this(e);
    return t.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[tt] = this[tt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = K(o);
      r[a] || (ir(s, o), r[a] = !0);
    }
    return c.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
N.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(N.prototype, ({ value: n }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => n,
    set(r) {
      this[t] = r;
    }
  };
});
c.freezeMethods(N);
function Ae(n, e) {
  const t = this || Q, r = e || t, s = N.from(r.headers);
  let i = r.data;
  return c.forEach(n, function(a) {
    i = a.call(t, i, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), i;
}
function kt(n) {
  return !!(n && n.__CANCEL__);
}
function j(n, e, t) {
  m.call(this, n ?? "canceled", m.ERR_CANCELED, e, t), this.name = "CanceledError";
}
c.inherits(j, m, {
  __CANCEL__: !0
});
function Pt(n, e, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? n(t) : e(new m(
    "Request failed with status code " + t.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function or(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return e && e[1] || "";
}
function ar(n, e) {
  n = n || 10;
  const t = new Array(n), r = new Array(n);
  let s = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(h) {
    const u = Date.now(), l = r[i];
    o || (o = u), t[s] = h, r[s] = u;
    let f = i, E = 0;
    for (; f !== s; )
      E += t[f++], f = f % n;
    if (s = (s + 1) % n, s === i && (i = (i + 1) % n), u - o < e)
      return;
    const T = l && u - l;
    return T ? Math.round(E * 1e3 / T) : void 0;
  };
}
function cr(n, e) {
  let t = 0, r = 1e3 / e, s, i;
  const o = (u, l = Date.now()) => {
    t = l, s = null, i && (clearTimeout(i), i = null), n.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), f = l - t;
    f >= r ? o(u, l) : (s = u, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - f)));
  }, () => s && o(s)];
}
const ue = (n, e, t = 3) => {
  let r = 0;
  const s = ar(50, 250);
  return cr((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, h = o - r, u = s(h), l = o <= a;
    r = o;
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
  return [(r) => e[0]({
    lengthComputable: t,
    total: n,
    loaded: r
  }), e[1]];
}, rt = (n) => (...e) => c.asap(() => n(...e)), ur = L.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = L.navigator && /(msie|trident)/i.test(L.navigator.userAgent), t = document.createElement("a");
    let r;
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
    return r = s(window.location.href), function(o) {
      const a = c.isString(o) ? s(o) : o;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), lr = L.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, e, t, r, s, i) {
      const o = [n + "=" + encodeURIComponent(e)];
      c.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), c.isString(r) && o.push("path=" + r), c.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function hr(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function fr(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function xt(n, e) {
  return n && !hr(e) ? fr(n, e) : e;
}
const st = (n) => n instanceof N ? { ...n } : n;
function V(n, e) {
  e = e || {};
  const t = {};
  function r(u, l, f) {
    return c.isPlainObject(u) && c.isPlainObject(l) ? c.merge.call({ caseless: f }, u, l) : c.isPlainObject(l) ? c.merge({}, l) : c.isArray(l) ? l.slice() : l;
  }
  function s(u, l, f) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined(u))
        return r(void 0, u, f);
    } else return r(u, l, f);
  }
  function i(u, l) {
    if (!c.isUndefined(l))
      return r(void 0, l);
  }
  function o(u, l) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function a(u, l, f) {
    if (f in e)
      return r(u, l);
    if (f in n)
      return r(void 0, u);
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
    headers: (u, l) => s(st(u), st(l), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, n, e)), function(l) {
    const f = h[l] || s, E = f(n[l], e[l], l);
    c.isUndefined(E) && f !== a || (t[l] = E);
  }), t;
}
const vt = (n) => {
  const e = V({}, n);
  let { data: t, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: a } = e;
  e.headers = o = N.from(o), e.url = Ct(xt(e.baseURL, e.url), n.params, n.paramsSerializer), a && o.set(
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
  if (L.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(e)), r || r !== !1 && ur(e.url))) {
    const u = s && i && lr.read(i);
    u && o.set(s, u);
  }
  return e;
}, dr = typeof XMLHttpRequest < "u", pr = dr && function(n) {
  return new Promise(function(t, r) {
    const s = vt(n);
    let i = s.data;
    const o = N.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: h, onDownloadProgress: u } = s, l, f, E, T, d;
    function y() {
      T && T(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function A() {
      if (!p)
        return;
      const O = N.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), C = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: O,
        config: n,
        request: p
      };
      Pt(function(M) {
        t(M), y();
      }, function(M) {
        r(M), y();
      }, C), p = null;
    }
    "onloadend" in p ? p.onloadend = A : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, p.onabort = function() {
      p && (r(new m("Request aborted", m.ECONNABORTED, n, p)), p = null);
    }, p.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, n, p)), p = null;
    }, p.ontimeout = function() {
      let D = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const C = s.transitional || Lt;
      s.timeoutErrorMessage && (D = s.timeoutErrorMessage), r(new m(
        D,
        C.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        n,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && c.forEach(o.toJSON(), function(D, C) {
      p.setRequestHeader(C, D);
    }), c.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), a && a !== "json" && (p.responseType = s.responseType), u && ([E, d] = ue(u, !0), p.addEventListener("progress", E)), h && p.upload && ([f, T] = ue(h), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", T)), (s.cancelToken || s.signal) && (l = (O) => {
      p && (r(!O || O.type ? new j(null, n, p) : O), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const R = or(s.url);
    if (R && L.protocols.indexOf(R) === -1) {
      r(new m("Unsupported protocol " + R + ":", m.ERR_BAD_REQUEST, n));
      return;
    }
    p.send(i || null);
  });
}, mr = (n, e) => {
  const { length: t } = n = n ? n.filter(Boolean) : [];
  if (e || t) {
    let r = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, a();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof m ? l : new j(l instanceof Error ? l.message : l));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new m(`timeout ${e} of ms exceeded`, m.ETIMEDOUT));
    }, e);
    const a = () => {
      n && (o && clearTimeout(o), o = null, n.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), n = null);
    };
    n.forEach((u) => u.addEventListener("abort", i));
    const { signal: h } = r;
    return h.unsubscribe = () => c.asap(a), h;
  }
}, yr = function* (n, e) {
  let t = n.byteLength;
  if (t < e) {
    yield n;
    return;
  }
  let r = 0, s;
  for (; r < t; )
    s = r + e, yield n.slice(r, s), r = s;
}, gr = async function* (n, e) {
  for await (const t of _r(n))
    yield* yr(t, e);
}, _r = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const e = n.getReader();
  try {
    for (; ; ) {
      const { done: t, value: r } = await e.read();
      if (t)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, it = (n, e, t, r) => {
  const s = gr(n, e);
  let i = 0, o, a = (h) => {
    o || (o = !0, r && r(h));
  };
  return new ReadableStream({
    async pull(h) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          a(), h.close();
          return;
        }
        let f = l.byteLength;
        if (t) {
          let E = i += f;
          t(E);
        }
        h.enqueue(new Uint8Array(l));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(h) {
      return a(h), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, me = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Bt = me && typeof ReadableStream == "function", Er = me && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (e) => n.encode(e))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), Dt = (n, ...e) => {
  try {
    return !!n(...e);
  } catch {
    return !1;
  }
}, Ar = Bt && Dt(() => {
  let n = !1;
  const e = new Request(L.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !e;
}), ot = 64 * 1024, Le = Bt && Dt(() => c.isReadableStream(new Response("").body)), le = {
  stream: Le && ((n) => n.body)
};
me && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !le[e] && (le[e] = c.isFunction(n[e]) ? (t) => t[e]() : (t, r) => {
      throw new m(`Response type '${e}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const wr = async (n) => {
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
    return (await Er(n)).byteLength;
}, br = async (n, e) => {
  const t = c.toFiniteNumber(n.getContentLength());
  return t ?? wr(e);
}, Tr = me && (async (n) => {
  let {
    url: e,
    method: t,
    data: r,
    signal: s,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: h,
    responseType: u,
    headers: l,
    withCredentials: f = "same-origin",
    fetchOptions: E
  } = vt(n);
  u = u ? (u + "").toLowerCase() : "text";
  let T = mr([s, i && i.toAbortSignal()], o), d;
  const y = T && T.unsubscribe && (() => {
    T.unsubscribe();
  });
  let p;
  try {
    if (h && Ar && t !== "get" && t !== "head" && (p = await br(l, r)) !== 0) {
      let C = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), I;
      if (c.isFormData(r) && (I = C.headers.get("content-type")) && l.setContentType(I), C.body) {
        const [M, Z] = nt(
          p,
          ue(rt(h))
        );
        r = it(C.body, ot, M, Z);
      }
    }
    c.isString(f) || (f = f ? "include" : "omit");
    const A = "credentials" in Request.prototype;
    d = new Request(e, {
      ...E,
      signal: T,
      method: t.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: A ? f : void 0
    });
    let R = await fetch(d);
    const O = Le && (u === "stream" || u === "response");
    if (Le && (a || O && y)) {
      const C = {};
      ["status", "statusText", "headers"].forEach((Je) => {
        C[Je] = R[Je];
      });
      const I = c.toFiniteNumber(R.headers.get("content-length")), [M, Z] = a && nt(
        I,
        ue(rt(a), !0)
      ) || [];
      R = new Response(
        it(R.body, ot, M, () => {
          Z && Z(), y && y();
        }),
        C
      );
    }
    u = u || "text";
    let D = await le[c.findKey(le, u) || "text"](R, n);
    return !O && y && y(), await new Promise((C, I) => {
      Pt(C, I, {
        data: D,
        headers: N.from(R.headers),
        status: R.status,
        statusText: R.statusText,
        config: n,
        request: d
      });
    });
  } catch (A) {
    throw y && y(), A && A.name === "TypeError" && /fetch/i.test(A.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, n, d),
      {
        cause: A.cause || A
      }
    ) : m.from(A, A && A.code, n, d);
  }
}), Ne = {
  http: Fn,
  xhr: pr,
  fetch: Tr
};
c.forEach(Ne, (n, e) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: e });
  }
});
const at = (n) => `- ${n}`, Rr = (n) => c.isFunction(n) || n === null || n === !1, It = {
  getAdapter: (n) => {
    n = c.isArray(n) ? n : [n];
    const { length: e } = n;
    let t, r;
    const s = {};
    for (let i = 0; i < e; i++) {
      t = n[i];
      let o;
      if (r = t, !Rr(t) && (r = Ne[(o = String(t)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${o}'`);
      if (r)
        break;
      s[o || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(s).map(
        ([a, h]) => `adapter ${a} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? i.length > 1 ? `since :
` + i.map(at).join(`
`) : " " + at(i[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ne
};
function we(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new j(null, n);
}
function ct(n) {
  return we(n), n.headers = N.from(n.headers), n.data = Ae.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), It.getAdapter(n.adapter || Q.adapter)(n).then(function(r) {
    return we(n), r.data = Ae.call(
      n,
      n.transformResponse,
      r
    ), r.headers = N.from(r.headers), r;
  }, function(r) {
    return kt(r) || (we(n), r && r.response && (r.response.data = Ae.call(
      n,
      n.transformResponse,
      r.response
    ), r.response.headers = N.from(r.response.headers))), Promise.reject(r);
  });
}
const Ut = "1.7.7", $e = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
  $e[n] = function(r) {
    return typeof r === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
const ut = {};
$e.transitional = function(e, t, r) {
  function s(i, o) {
    return "[Axios v" + Ut + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new m(
        s(o, " has been removed" + (t ? " in " + t : "")),
        m.ERR_DEPRECATED
      );
    return t && !ut[o] && (ut[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
function Sr(n, e, t) {
  if (typeof n != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = e[i];
    if (o) {
      const a = n[i], h = a === void 0 || o(a, i, n);
      if (h !== !0)
        throw new m("option " + i + " must be " + h, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new m("Unknown option " + i, m.ERR_BAD_OPTION);
  }
}
const ke = {
  assertOptions: Sr,
  validators: $e
}, U = ke.validators;
class $ {
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
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = V(this.defaults, t);
    const { transitional: r, paramsSerializer: s, headers: i } = t;
    r !== void 0 && ke.assertOptions(r, {
      silentJSONParsing: U.transitional(U.boolean),
      forcedJSONParsing: U.transitional(U.boolean),
      clarifyTimeoutError: U.transitional(U.boolean)
    }, !1), s != null && (c.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : ke.assertOptions(s, {
      encode: U.function,
      serialize: U.function
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
    ), t.headers = N.concat(o, i);
    const a = [];
    let h = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(t) === !1 || (h = h && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, f = 0, E;
    if (!h) {
      const d = [ct.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, u), E = d.length, l = Promise.resolve(t); f < E; )
        l = l.then(d[f++], d[f++]);
      return l;
    }
    E = a.length;
    let T = t;
    for (f = 0; f < E; ) {
      const d = a[f++], y = a[f++];
      try {
        T = d(T);
      } catch (p) {
        y.call(this, p);
        break;
      }
    }
    try {
      l = ct.call(this, T);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, E = u.length; f < E; )
      l = l.then(u[f++], u[f++]);
    return l;
  }
  getUri(e) {
    e = V(this.defaults, e);
    const t = xt(e.baseURL, e.url);
    return Ct(t, e.params, e.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(e) {
  $.prototype[e] = function(t, r) {
    return this.request(V(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(i, o, a) {
      return this.request(V(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  $.prototype[e] = t(), $.prototype[e + "Form"] = t(!0);
});
class Ve {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, e(function(i, o, a) {
      r.reason || (r.reason = new j(i, o, a), t(r.reason));
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
    const e = new AbortController(), t = (r) => {
      e.abort(r);
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
      token: new Ve(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function Or(n) {
  return function(t) {
    return n.apply(null, t);
  };
}
function Cr(n) {
  return c.isObject(n) && n.isAxiosError === !0;
}
const Pe = {
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
Object.entries(Pe).forEach(([n, e]) => {
  Pe[e] = n;
});
function Ft(n) {
  const e = new $(n), t = mt($.prototype.request, e);
  return c.extend(t, $.prototype, e, { allOwnKeys: !0 }), c.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return Ft(V(n, s));
  }, t;
}
const w = Ft(Q);
w.Axios = $;
w.CanceledError = j;
w.CancelToken = Ve;
w.isCancel = kt;
w.VERSION = Ut;
w.toFormData = pe;
w.AxiosError = m;
w.Cancel = w.CanceledError;
w.all = function(e) {
  return Promise.all(e);
};
w.spread = Or;
w.isAxiosError = Cr;
w.mergeConfig = V;
w.AxiosHeaders = N;
w.formToJSON = (n) => Nt(c.isHTMLForm(n) ? new FormData(n) : n);
w.getAdapter = It.getAdapter;
w.HttpStatusCode = Pe;
w.default = w;
const He = "http://ec2-13-203-204-143.ap-south-1.compute.amazonaws.com", Lr = () => w.create({
  baseURL: He,
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
    return S._axiosInstance || (S._axiosInstance = Lr(), S.setAuthHeaderInterceptor(), S._axiosInstance.interceptors.response.use(S.handleSuccess, S.handleError)), S._axiosInstance;
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
      return (await w.post(`${He}/auth/refresh-token`, {
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
    const r = { name: "Error", message: "Something went wrong!" };
    return e.response && e.response.data && (r.message = (s = e.response.data) == null ? void 0 : s.message), Promise.reject(r);
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
class Ts extends S {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  //Approval
  updateDocStatusWithThreeApproval(e, t) {
    console.log("Document Id:", e);
    const r = _.UPDATE_DOCUMENT_STATUS_THREE_LEVEL_APPROVAL(e);
    return this.patch(r, t);
  }
  updateDocStatusWithTwoApproval(e, t) {
    console.log("Document Id:", e);
    const r = _.UPDATE_DOCUMENT_STATUS_TWO_LEVEL_APPROVAL(e);
    return this.patch(r, t);
  }
  updateDocStatusWithOneApproval(e, t) {
    console.log("Document Id:", e);
    const r = _.UPDATE_DOCUMENT_STATUS_ONE_LEVEL_APPROVAL(e);
    return this.patch(r, t);
  }
  //Notifications
  getAllUserNotifications() {
    const e = _.GET_NOTIFICATIONS_BY_USER;
    return this.get(e);
  }
  getEmployeePartialData() {
    const e = _.GET_EMPLOYEE_PARTIAL_DATA;
    return this.get(e);
  }
  getAllCompaniesData() {
    const e = _.GET_ALL_COMPANIES_DATA;
    return this.get(e);
  }
  getCompanyNames() {
    const e = _.GET_COMPANY_NAMES;
    return this.get(e);
  }
  getAllLevels() {
    const e = _.GET_ALL_LEVELS;
    return this.get(e);
  }
  //Product Partial Data
  getProductsPatrialData() {
    const e = _.GET_PRODUCTS_PARTIAL;
    return this.get(e);
  }
  getProductsPatrialDataById(e) {
    const t = `${_.GET_PRODUCTS_PARTIAL_BY_ID}/${e}`;
    return this.get(t);
  }
  searchProductDataByQuery(e) {
    const t = `${_.SEARCH_PRODUCT}${e}`;
    return this.get(t);
  }
  searchProductAllDataByQuery(e) {
    const t = `${_.SEARCH_PRODUCT_ALL_DATA}${e}`;
    return this.get(t);
  }
  //Packaging Material
  getPackagingMaterialPatrialData() {
    const e = _.GET_PACKAGING_MATERIAL_PARTIAL;
    return this.get(e);
  }
  //Vendor Partial Data
  getVendorsPatrialData() {
    const e = _.GET_VENDORS_PARTIAL;
    return this.get(e);
  }
  getVendorsPatrialDataById(e) {
    const t = `${_.GET_VENDORS_PARTIAL_BY_ID}/${e}`;
    return this.get(t);
  }
  searchVendorDataByQuery(e) {
    const t = `${_.SEARCH_VENDOR}${e}`;
    return this.get(t);
  }
  //Farmer Partial Data
  getFarmersPatrialData() {
    const e = _.GET_FARMERS_PARTIAL;
    return this.get(e);
  }
  getFarmersPatrialDataById(e) {
    const t = `${_.GET_FARMERS_PARTIAL_BY_ID}/${e}`;
    return this.get(t);
  }
  searchFarmerDataByQuery(e) {
    const t = `${_.SEARCH_FARMER}${e}`;
    return this.get(t);
  }
  //Customer
  getCustomerPatrialData(e) {
    const t = `${_.GET_CUSTOMERS_PARTIAL}/${e}`;
    return this.get(t);
  }
  getAllCustomerNames() {
    const e = _.GET_CUSTOMER_NAMESL;
    return this.get(e);
  }
  //Numbers
  getRFPANums() {
    const e = _.GET_ALL_RFPA_NO;
    return this.get(e);
  }
  getGRNNums() {
    const e = _.GET_ALL_GRN_NO;
    return this.get(e);
  }
  getDealSlipNums() {
    const e = _.GET_ALL_DEAL_SLIP_NO;
    return this.get(e);
  }
  getDeliveryChallanNums() {
    const e = _.GET_ALL_DELIVERY_CHALLAN_NO;
    return this.get(e);
  }
  getUOMPartialData() {
    const e = _.GET_UOM_PARTIAL;
    return this.get(e);
  }
  getBranchPartialData() {
    const e = _.GET_BRANCHES_PARTIAL;
    return this.get(e);
  }
  getOfficePartialData() {
    const e = _.GET_OFFICES_PARTIAL;
    return this.get(e);
  }
  getDepartmentById(e) {
    const t = `${_.GET_DEPARTMENT_BY_ID}/${e}`;
    return this.get(t);
  }
}
class Rs extends S {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getAllStock(e) {
    const t = _.GET_ALL_STOCK(e);
    return this.get(t);
  }
  getStockGlobal(e) {
    const t = _.GET_STOCK_GLOBAL(e);
    return this.get(t);
  }
  getStockLocationWise(e, t, r) {
    const s = _.GET_STOCK_BY_LOCATION(e, t, r);
    return this.get(s);
  }
  getStockProductWise(e, t, r, s) {
    const i = _.GET_STOCK_BY_PRODUCT(e, t, r, s);
    return this.get(i);
  }
  getStockDetailById(e) {
    const t = `${_.GET_STOCK_BY_ID}/${e}`;
    return this.get(t);
  }
  // searchProductDataByQuery(query: string): Promise<ApiBaseState<ProductPartialData[]>> {
  //     const url = `${sharedApiUrls.SEARCH_PRODUCT}${query}`;
  //     return this.get(url);
  // };
}
class Ss extends S {
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
const B = /* @__PURE__ */ Object.create(null);
B.open = "0";
B.close = "1";
B.ping = "2";
B.pong = "3";
B.message = "4";
B.upgrade = "5";
B.noop = "6";
const se = /* @__PURE__ */ Object.create(null);
Object.keys(B).forEach((n) => {
  se[B[n]] = n;
});
const xe = { type: "error", data: "parser error" }, Mt = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", qt = typeof ArrayBuffer == "function", $t = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer, Ge = ({ type: n, data: e }, t, r) => Mt && e instanceof Blob ? t ? r(e) : lt(e, r) : qt && (e instanceof ArrayBuffer || $t(e)) ? t ? r(e) : lt(new Blob([e]), r) : r(B[n] + (e || "")), lt = (n, e) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    e("b" + (r || ""));
  }, t.readAsDataURL(n);
};
function ht(n) {
  return n instanceof Uint8Array ? n : n instanceof ArrayBuffer ? new Uint8Array(n) : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
let be;
function Nr(n, e) {
  if (Mt && n.data instanceof Blob)
    return n.data.arrayBuffer().then(ht).then(e);
  if (qt && (n.data instanceof ArrayBuffer || $t(n.data)))
    return e(ht(n.data));
  Ge(n, !1, (t) => {
    be || (be = new TextEncoder()), e(be.encode(t));
  });
}
const ft = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", J = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < ft.length; n++)
  J[ft.charCodeAt(n)] = n;
const kr = (n) => {
  let e = n.length * 0.75, t = n.length, r, s = 0, i, o, a, h;
  n[n.length - 1] === "=" && (e--, n[n.length - 2] === "=" && e--);
  const u = new ArrayBuffer(e), l = new Uint8Array(u);
  for (r = 0; r < t; r += 4)
    i = J[n.charCodeAt(r)], o = J[n.charCodeAt(r + 1)], a = J[n.charCodeAt(r + 2)], h = J[n.charCodeAt(r + 3)], l[s++] = i << 2 | o >> 4, l[s++] = (o & 15) << 4 | a >> 2, l[s++] = (a & 3) << 6 | h & 63;
  return u;
}, Pr = typeof ArrayBuffer == "function", je = (n, e) => {
  if (typeof n != "string")
    return {
      type: "message",
      data: Vt(n, e)
    };
  const t = n.charAt(0);
  return t === "b" ? {
    type: "message",
    data: xr(n.substring(1), e)
  } : se[t] ? n.length > 1 ? {
    type: se[t],
    data: n.substring(1)
  } : {
    type: se[t]
  } : xe;
}, xr = (n, e) => {
  if (Pr) {
    const t = kr(n);
    return Vt(t, e);
  } else
    return { base64: !0, data: n };
}, Vt = (n, e) => {
  switch (e) {
    case "blob":
      return n instanceof Blob ? n : new Blob([n]);
    case "arraybuffer":
    default:
      return n instanceof ArrayBuffer ? n : n.buffer;
  }
}, Ht = "", vr = (n, e) => {
  const t = n.length, r = new Array(t);
  let s = 0;
  n.forEach((i, o) => {
    Ge(i, !1, (a) => {
      r[o] = a, ++s === t && e(r.join(Ht));
    });
  });
}, Br = (n, e) => {
  const t = n.split(Ht), r = [];
  for (let s = 0; s < t.length; s++) {
    const i = je(t[s], e);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Dr() {
  return new TransformStream({
    transform(n, e) {
      Nr(n, (t) => {
        const r = t.length;
        let s;
        if (r < 126)
          s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, r);
        else if (r < 65536) {
          s = new Uint8Array(3);
          const i = new DataView(s.buffer);
          i.setUint8(0, 126), i.setUint16(1, r);
        } else {
          s = new Uint8Array(9);
          const i = new DataView(s.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(r));
        }
        n.data && typeof n.data != "string" && (s[0] |= 128), e.enqueue(s), e.enqueue(t);
      });
    }
  });
}
let Te;
function ee(n) {
  return n.reduce((e, t) => e + t.length, 0);
}
function te(n, e) {
  if (n[0].length === e)
    return n.shift();
  const t = new Uint8Array(e);
  let r = 0;
  for (let s = 0; s < e; s++)
    t[s] = n[0][r++], r === n[0].length && (n.shift(), r = 0);
  return n.length && r < n[0].length && (n[0] = n[0].slice(r)), t;
}
function Ir(n, e) {
  Te || (Te = new TextDecoder());
  const t = [];
  let r = 0, s = -1, i = !1;
  return new TransformStream({
    transform(o, a) {
      for (t.push(o); ; ) {
        if (r === 0) {
          if (ee(t) < 1)
            break;
          const h = te(t, 1);
          i = (h[0] & 128) === 128, s = h[0] & 127, s < 126 ? r = 3 : s === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (ee(t) < 2)
            break;
          const h = te(t, 2);
          s = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (ee(t) < 8)
            break;
          const h = te(t, 8), u = new DataView(h.buffer, h.byteOffset, h.length), l = u.getUint32(0);
          if (l > Math.pow(2, 21) - 1) {
            a.enqueue(xe);
            break;
          }
          s = l * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (ee(t) < s)
            break;
          const h = te(t, s);
          a.enqueue(je(i ? h : Te.decode(h), e)), r = 0;
        }
        if (s === 0 || s > n) {
          a.enqueue(xe);
          break;
        }
      }
    }
  });
}
const Gt = 4;
function b(n) {
  if (n) return Ur(n);
}
function Ur(n) {
  for (var e in b.prototype)
    n[e] = b.prototype[e];
  return n;
}
b.prototype.on = b.prototype.addEventListener = function(n, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(e), this;
};
b.prototype.once = function(n, e) {
  function t() {
    this.off(n, t), e.apply(this, arguments);
  }
  return t.fn = e, this.on(n, t), this;
};
b.prototype.off = b.prototype.removeListener = b.prototype.removeAllListeners = b.prototype.removeEventListener = function(n, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var t = this._callbacks["$" + n];
  if (!t) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + n], this;
  for (var r, s = 0; s < t.length; s++)
    if (r = t[s], r === e || r.fn === e) {
      t.splice(s, 1);
      break;
    }
  return t.length === 0 && delete this._callbacks["$" + n], this;
};
b.prototype.emit = function(n) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + n], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  if (t) {
    t = t.slice(0);
    for (var r = 0, s = t.length; r < s; ++r)
      t[r].apply(this, e);
  }
  return this;
};
b.prototype.emitReserved = b.prototype.emit;
b.prototype.listeners = function(n) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || [];
};
b.prototype.hasListeners = function(n) {
  return !!this.listeners(n).length;
};
const ye = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, t) => t(e, 0), P = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Fr = "arraybuffer";
function jt(n, ...e) {
  return e.reduce((t, r) => (n.hasOwnProperty(r) && (t[r] = n[r]), t), {});
}
const Mr = P.setTimeout, qr = P.clearTimeout;
function ge(n, e) {
  e.useNativeTimers ? (n.setTimeoutFn = Mr.bind(P), n.clearTimeoutFn = qr.bind(P)) : (n.setTimeoutFn = P.setTimeout.bind(P), n.clearTimeoutFn = P.clearTimeout.bind(P));
}
const $r = 1.33;
function Vr(n) {
  return typeof n == "string" ? Hr(n) : Math.ceil((n.byteLength || n.size) * $r);
}
function Hr(n) {
  let e = 0, t = 0;
  for (let r = 0, s = n.length; r < s; r++)
    e = n.charCodeAt(r), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function zt() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Gr(n) {
  let e = "";
  for (let t in n)
    n.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
  return e;
}
function jr(n) {
  let e = {}, t = n.split("&");
  for (let r = 0, s = t.length; r < s; r++) {
    let i = t[r].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class zr extends Error {
  constructor(e, t, r) {
    super(e), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class ze extends b {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, ge(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
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
  onError(e, t, r) {
    return super.emitReserved("error", new zr(e, t, r)), this;
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
    const t = Gr(e);
    return t.length ? "?" + t : "";
  }
}
class Kr extends ze {
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
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || t();
      })), this.writable || (r++, this.once("drain", function() {
        --r || t();
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
    const t = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    Br(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, vr(e, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = zt()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(e, t);
  }
}
let Kt = !1;
try {
  Kt = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Wr = Kt;
function Jr() {
}
class Yr extends Kr {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const t = location.protocol === "https:";
      let r = location.port;
      r || (r = t ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || r !== e.port;
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
    const r = this.request({
      method: "POST",
      data: e
    });
    r.on("success", t), r.on("error", (s, i) => {
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
    e.on("data", this.onData.bind(this)), e.on("error", (t, r) => {
      this.onError("xhr poll error", t, r);
    }), this.pollXhr = e;
  }
}
let H = class ie extends b {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, t, r) {
    super(), this.createRequest = e, ge(this, r), this._opts = r, this._method = r.method || "GET", this._uri = t, this._data = r.data !== void 0 ? r.data : null, this._create();
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
    const r = this._xhr = this.createRequest(t);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let s in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(s) && r.setRequestHeader(s, this._opts.extraHeaders[s]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
        var s;
        r.readyState === 3 && ((s = this._opts.cookieJar) === null || s === void 0 || s.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this._onError(s);
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
      if (this._xhr.onreadystatechange = Jr, e)
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
    const n = "onpagehide" in P ? "pagehide" : "unload";
    addEventListener(n, dt, !1);
  }
}
function dt() {
  for (let n in H.requests)
    H.requests.hasOwnProperty(n) && H.requests[n].abort();
}
const Xr = function() {
  const n = Wt({
    xdomain: !1
  });
  return n && n.responseType !== null;
}();
class Qr extends Yr {
  constructor(e) {
    super(e);
    const t = e && e.forceBase64;
    this.supportsBinary = Xr && !t;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new H(Wt, this.uri(), e);
  }
}
function Wt(n) {
  const e = n.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Wr))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new P[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Jt = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Zr extends ze {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), t = this.opts.protocols, r = Jt ? {} : jt(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, t, r);
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
      const r = e[t], s = t === e.length - 1;
      Ge(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        s && ye(() => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = zt()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t);
  }
}
const Re = P.WebSocket || P.MozWebSocket;
class es extends Zr {
  createSocket(e, t, r) {
    return Jt ? new Re(e, t, r) : t ? new Re(e, t) : new Re(e);
  }
  doWrite(e, t) {
    this.ws.send(t);
  }
}
class ts extends ze {
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
        const t = Ir(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = e.readable.pipeThrough(t).getReader(), s = Dr();
        s.readable.pipeTo(e.writable), this._writer = s.writable.getWriter();
        const i = () => {
          r.read().then(({ done: a, value: h }) => {
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
      const r = e[t], s = t === e.length - 1;
      this._writer.write(r).then(() => {
        s && ye(() => {
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
const ns = {
  websocket: es,
  webtransport: ts,
  polling: Qr
}, rs = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ss = [
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
function ve(n) {
  if (n.length > 8e3)
    throw "URI too long";
  const e = n, t = n.indexOf("["), r = n.indexOf("]");
  t != -1 && r != -1 && (n = n.substring(0, t) + n.substring(t, r).replace(/:/g, ";") + n.substring(r, n.length));
  let s = rs.exec(n || ""), i = {}, o = 14;
  for (; o--; )
    i[ss[o]] = s[o] || "";
  return t != -1 && r != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = is(i, i.path), i.queryKey = os(i, i.query), i;
}
function is(n, e) {
  const t = /\/{2,9}/g, r = e.replace(t, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function os(n, e) {
  const t = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, s, i) {
    s && (t[s] = i);
  }), t;
}
const Be = typeof addEventListener == "function" && typeof removeEventListener == "function", oe = [];
Be && addEventListener("offline", () => {
  oe.forEach((n) => n());
}, !1);
class F extends b {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, t) {
    if (super(), this.binaryType = Fr, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (t = e, e = null), e) {
      const r = ve(e);
      t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query);
    } else t.host && (t.hostname = ve(t.host).host);
    ge(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((r) => {
      const s = r.prototype.name;
      this.transports.push(s), this._transportsByName[s] = r;
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = jr(this.opts.query)), Be && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
    t.EIO = Gt, t.transport = e, this.id && (t.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](r);
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
    const e = this.opts.rememberUpgrade && F.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", F.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const s = this.writeBuffer[r].data;
      if (s && (t += Vr(s)), r > 0 && t > this._maxPayload)
        return this.writeBuffer.slice(0, r);
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
    return e && (this._pingTimeoutTime = 0, ye(() => {
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
  write(e, t, r) {
    return this._sendPacket("message", e, t, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, t, r) {
    return this._sendPacket("message", e, t, r), this;
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
  _sendPacket(e, t, r, s) {
    if (typeof t == "function" && (s = t, t = void 0), typeof r == "function" && (s = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const i = {
      type: e,
      data: t,
      options: r
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
    }, r = () => {
      this.once("upgrade", t), this.once("upgradeError", t);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : e();
    }) : this.upgrading ? r() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (F.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Be && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = oe.indexOf(this._offlineEventListener);
        r !== -1 && oe.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
F.protocol = Gt;
class as extends F {
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
    let t = this.createTransport(e), r = !1;
    F.priorWebsocketSuccess = !1;
    const s = () => {
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (f) => {
        if (!r)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            F.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (l(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const E = new Error("probe error");
            E.transport = t.name, this.emitReserved("upgradeError", E);
          }
      }));
    };
    function i() {
      r || (r = !0, l(), t.close(), t = null);
    }
    const o = (f) => {
      const E = new Error("probe error: " + f);
      E.transport = t.name, i(), this.emitReserved("upgradeError", E);
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
      t.removeListener("open", s), t.removeListener("error", o), t.removeListener("close", a), this.off("close", h), this.off("upgrading", u);
    };
    t.once("open", s), t.once("error", o), t.once("close", a), this.once("close", h), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      r || t.open();
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
    for (let r = 0; r < e.length; r++)
      ~this.transports.indexOf(e[r]) && t.push(e[r]);
    return t;
  }
}
let cs = class extends as {
  constructor(e, t = {}) {
    const r = typeof e == "object" ? e : t;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((s) => ns[s]).filter((s) => !!s)), super(e, r);
  }
};
function us(n, e = "", t) {
  let r = n;
  t = t || typeof location < "u" && location, n == null && (n = t.protocol + "//" + t.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = t.protocol + n : n = t.host + n), /^(https?|wss?):\/\//.test(n) || (typeof t < "u" ? n = t.protocol + "//" + n : n = "https://" + n), r = ve(n)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + e, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const ls = typeof ArrayBuffer == "function", hs = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer, Yt = Object.prototype.toString, fs = typeof Blob == "function" || typeof Blob < "u" && Yt.call(Blob) === "[object BlobConstructor]", ds = typeof File == "function" || typeof File < "u" && Yt.call(File) === "[object FileConstructor]";
function Ke(n) {
  return ls && (n instanceof ArrayBuffer || hs(n)) || fs && n instanceof Blob || ds && n instanceof File;
}
function ae(n, e) {
  if (!n || typeof n != "object")
    return !1;
  if (Array.isArray(n)) {
    for (let t = 0, r = n.length; t < r; t++)
      if (ae(n[t]))
        return !0;
    return !1;
  }
  if (Ke(n))
    return !0;
  if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1)
    return ae(n.toJSON(), !0);
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && ae(n[t]))
      return !0;
  return !1;
}
function ps(n) {
  const e = [], t = n.data, r = n;
  return r.data = De(t, e), r.attachments = e.length, { packet: r, buffers: e };
}
function De(n, e) {
  if (!n)
    return n;
  if (Ke(n)) {
    const t = { _placeholder: !0, num: e.length };
    return e.push(n), t;
  } else if (Array.isArray(n)) {
    const t = new Array(n.length);
    for (let r = 0; r < n.length; r++)
      t[r] = De(n[r], e);
    return t;
  } else if (typeof n == "object" && !(n instanceof Date)) {
    const t = {};
    for (const r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = De(n[r], e));
    return t;
  }
  return n;
}
function ms(n, e) {
  return n.data = Ie(n.data, e), delete n.attachments, n;
}
function Ie(n, e) {
  if (!n)
    return n;
  if (n && n._placeholder === !0) {
    if (typeof n.num == "number" && n.num >= 0 && n.num < e.length)
      return e[n.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(n))
    for (let t = 0; t < n.length; t++)
      n[t] = Ie(n[t], e);
  else if (typeof n == "object")
    for (const t in n)
      Object.prototype.hasOwnProperty.call(n, t) && (n[t] = Ie(n[t], e));
  return n;
}
const ys = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], gs = 5;
var g;
(function(n) {
  n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK";
})(g || (g = {}));
class _s {
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
    const t = ps(e), r = this.encodeAsString(t.packet), s = t.buffers;
    return s.unshift(r), s;
  }
}
function pt(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
class We extends b {
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
      const r = t.type === g.BINARY_EVENT;
      r || t.type === g.BINARY_ACK ? (t.type = r ? g.EVENT : g.ACK, this.reconstructor = new Es(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (Ke(e) || e.base64)
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
    const r = {
      type: Number(e.charAt(0))
    };
    if (g[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === g.BINARY_EVENT || r.type === g.BINARY_ACK) {
      const i = t + 1;
      for (; e.charAt(++t) !== "-" && t != e.length; )
        ;
      const o = e.substring(i, t);
      if (o != Number(o) || e.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(o);
    }
    if (e.charAt(t + 1) === "/") {
      const i = t + 1;
      for (; ++t && !(e.charAt(t) === "," || t === e.length); )
        ;
      r.nsp = e.substring(i, t);
    } else
      r.nsp = "/";
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
      r.id = Number(e.substring(i, t + 1));
    }
    if (e.charAt(++t)) {
      const i = this.tryParse(e.substr(t));
      if (We.isPayloadValid(r.type, i))
        r.data = i;
      else
        throw new Error("invalid payload");
    }
    return r;
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
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && ys.indexOf(t[0]) === -1);
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
class Es {
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
      const t = ms(this.reconPack, this.buffers);
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
const As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: We,
  Encoder: _s,
  get PacketType() {
    return g;
  },
  protocol: gs
}, Symbol.toStringTag, { value: "Module" }));
function x(n, e, t) {
  return n.on(e, t), function() {
    n.off(e, t);
  };
}
const ws = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Xt extends b {
  /**
   * `Socket` constructor.
   */
  constructor(e, t, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
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
      x(e, "open", this.onopen.bind(this)),
      x(e, "packet", this.onpacket.bind(this)),
      x(e, "error", this.onerror.bind(this)),
      x(e, "close", this.onclose.bind(this))
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
    var r, s, i;
    if (ws.hasOwnProperty(e))
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
    const a = (s = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || s === void 0 ? void 0 : s.writable, h = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (h ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, t) {
    var r;
    const s = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[e] = t;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      t.call(this, new Error("operation has timed out"));
    }, s), o = (...a) => {
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
    return new Promise((r, s) => {
      const i = (o, a) => o ? s(o) : r(a);
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
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((s, ...i) => r !== this._queue[0] ? void 0 : (s !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), t && t(s)) : (this._queue.shift(), t && t(null, ...i)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
      if (!this.sendBuffer.some((r) => String(r.id) === e)) {
        const r = this.acks[e];
        delete this.acks[e], r.withError && r.call(this, new Error("socket has been disconnected"));
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
          const r = new Error(e.data.message);
          r.data = e.data.data, this.emitReserved("connect_error", r);
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
      for (const r of t)
        r.apply(this, e);
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
    let r = !1;
    return function(...s) {
      r || (r = !0, t.packet({
        type: g.ACK,
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
      for (let r = 0; r < t.length; r++)
        if (e === t[r])
          return t.splice(r, 1), this;
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
      for (let r = 0; r < t.length; r++)
        if (e === t[r])
          return t.splice(r, 1), this;
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
      for (const r of t)
        r.apply(this, e.data);
    }
  }
}
function z(n) {
  n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0;
}
z.prototype.duration = function() {
  var n = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), t = Math.floor(e * this.jitter * n);
    n = Math.floor(e * 10) & 1 ? n + t : n - t;
  }
  return Math.min(n, this.max) | 0;
};
z.prototype.reset = function() {
  this.attempts = 0;
};
z.prototype.setMin = function(n) {
  this.ms = n;
};
z.prototype.setMax = function(n) {
  this.max = n;
};
z.prototype.setJitter = function(n) {
  this.jitter = n;
};
class Ue extends b {
  constructor(e, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, ge(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new z({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
    const s = t.parser || As;
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
    this.engine = new cs(this.uri, this.opts);
    const t = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = x(t, "open", function() {
      r.onopen(), e && e();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = x(t, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, h = this.setTimeoutFn(() => {
        s(), i(new Error("timeout")), t.close();
      }, a);
      this.opts.autoUnref && h.unref(), this.subs.push(() => {
        this.clearTimeoutFn(h);
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
      x(e, "ping", this.onping.bind(this)),
      x(e, "data", this.ondata.bind(this)),
      x(e, "error", this.onerror.bind(this)),
      x(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      x(this.decoder, "decoded", this.ondecoded.bind(this))
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
    ye(() => {
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
    let r = this.nsps[e];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Xt(this, e, t), this.nsps[e] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const t = Object.keys(this.nsps);
    for (const r of t)
      if (this.nsps[r].active)
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
    for (let r = 0; r < t.length; r++)
      this.engine.write(t[r], e.options);
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
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const r = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((s) => {
          s ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", s)) : e.onreconnect();
        }));
      }, t);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
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
const W = {};
function ce(n, e) {
  typeof n == "object" && (e = n, n = void 0), e = e || {};
  const t = us(n, e.path || "/socket.io"), r = t.source, s = t.id, i = t.path, o = W[s] && i in W[s].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let h;
  return a ? h = new Ue(r, e) : (W[s] || (W[s] = new Ue(r, e)), h = W[s]), t.query && !e.query && (e.query = t.queryKey), h.socket(t.path, e);
}
Object.assign(ce, {
  Manager: Ue,
  Socket: Xt,
  io: ce,
  connect: ce
});
const Cs = ce(He, {
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
export {
  S as BaseService,
  bs as COM_API_URL,
  Ss as DashboardManagementService,
  Ts as SharedService,
  Rs as StockService,
  _ as sharedApiUrls,
  Cs as socket
};
