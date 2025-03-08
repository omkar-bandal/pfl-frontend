const $r = {
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
  GET_CUSTOMER_NAMES: "/customers/names/all",
  GET_CUSTOMER_PARTIAL_DATA: "/customers/partial/all",
  GET_ALL_CUSTOMER_TYPE: "/customerType/",
  GET_ALL_CUSTOMER_CATEGORY: "/customerCategory/ ",
  //Farmers
  GET_ALL_FARMERS: "/farmers/",
  POST_FARMER: "/farmers/",
  UPDATE_FARMER: "/farmers",
  GET_A_FARMER: "/farmers",
  GET_ALL_FARMERS_FILTERED: "/farmers/filterFarmer/all",
  //Vendors
  GET_ALL_VENDORS: "/vendors/",
  GET_A_VENDOR: "/vendors",
  POST_VENDOR: "/vendors/",
  UPDATE_VENDOR: "/vendors",
  GET_ALL_VENDORS_FILTERED: "/vendors/filterVendor/all",
  GET_ALL_VENDOR_CAT: "/vendor-categories/",
  CREATE_VENDOR_CAT: "/vendor-categories/",
  GET_A_VENDOR_CAT: "/vendor-categories",
  UPDATE_VENDOR_CAT: "/vendor-categories",
  GET_ALL_VENDOR_SUBCAT: "/vendor-subcategories/",
  CREATE_VENDOR_SUBCAT: "/vendor-subcategories/",
  GET_A_VENDOR_SUBCAT: "/vendor-subcategories",
  UPDATE_VENDOR_SUBCAT: "/vendor-subcategories",
  GET_VENDOR_SUBCAT_BY_QUERY: "/vendor-subcategories/getSubcategories",
  GET_VENDOR_BY_QUERY: "/vendors/bysearch/getvendors",
  //Prooducts
  GET_ALL_PRODUCTS: "/products/",
  GET_A_PRODUCTS: "/products",
  CREATE_PRODUCTS: "/products/",
  UPDATE_PRODUCTS: "/products",
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
  GET_A_UOM: "/uoms",
  UPDATE_UOM: "/uoms",
  GET_ALL_UOM_CONVERSION: "/uom-conversion-matrix/",
  GET_A_UOM_CONVERSION: "/uom-conversion-matrix",
  CREATE_UOM_CONVERSION: "/uom-conversion-matrix/",
  UPDATE_UOM_CONVERSION: "/uom-conversion-matrix",
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
  GET_ALL_OFFICES: "/location-offices/",
  GET_A_OFFICE: "/location-offices/",
  CREATE_OFFICE: "/location-offices",
  UPDATE_OFFICE: "/location-offices",
  //Branches
  GET_ALL_BRANCHES: "/location-branches/",
  GET_A_BRANCH: "/location-branches/",
  CREATE_BRANCH: "/location-branches",
  UPDATE_BRANCH: "/location-branches",
  GET_ALL_BRANCHES_FILTERED: "/location-branches/filterData/filter/all"
}, u = {
  //roles
  GET_ALL_ROLES: "/roles/",
  //Department
  GET_ALL_DEPARTMENT: "/departments/",
  GET_DEPARTMENT_BY_ID: "/departments",
  CREATE_DEPARTMENT: "/departments/",
  UPDATE_DEPARTMENT: "/departments",
  DELETE_DEPARTMENT: "/departments",
  //Level
  GET_ALL_LEVEL: "/levels/",
  GET_LEVEL_BY_ID: "/levels",
  CREATE_LEVEL: "/levels/",
  UPDATE_LEVEL: "/levels",
  DELETE_LEVEL: "/levels",
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
  CREATE_CUSTOMER: "/customers/",
  DELETE_CUSTOMER: "/customers/",
  UPDATE_CUSTOMER: "/customers",
  GET_A_CUSTOMER: "/customers",
  GET_CUSTOMER_NAMES: "/customers/names/all",
  GET_CUSTOMER_PARTIAL_DATA: "/customers/partial/all",
  GET_ALL_CUSTOMER_TYPE: "/customerType/",
  GET_ALL_CUSTOMER_CATEGORY: "/customerCategory/ ",
  //Farmers
  GET_ALL_FARMERS: "/farmers/",
  GET_A_FARMER: "/farmers",
  POST_FARMER: "/farmers/",
  CREATE_FARMER: "/farmers/",
  UPDATE_FARMER: "/farmers",
  DELETE_FARMER: "/farmers",
  GET_ALL_FARMERS_FILTERED: "/farmers/filterFarmer/all",
  //Vendors
  GET_ALL_VENDORS: "/vendors/",
  GET_A_VENDOR: "/vendors",
  POST_VENDOR: "/vendors/",
  CREATE_VENDOR: "/vendors/",
  UPDATE_VENDOR: "/vendors",
  DELETE_VENDOR: "/vendors",
  GET_ALL_VENDORS_FILTERED: "/vendors/filterVendor/all",
  GET_ALL_VENDOR_CAT: "/vendor-categories/",
  CREATE_VENDOR_CAT: "/vendor-categories/",
  GET_A_VENDOR_CAT: "/vendor-categories",
  UPDATE_VENDOR_CAT: "/vendor-categories",
  DELETE_VENDOR_CAT: "/vendor-categories",
  GET_ALL_VENDOR_SUBCAT: "/vendor-subcategories/",
  CREATE_VENDOR_SUBCAT: "/vendor-subcategories/",
  GET_A_VENDOR_SUBCAT: "/vendor-subcategories",
  UPDATE_VENDOR_SUBCAT: "/vendor-subcategories",
  DELETE_VENDOR_SUBCAT: "/vendor-subcategories",
  GET_VENDOR_SUBCAT_BY_QUERY: "/vendor-subcategories/getSubcategories",
  GET_VENDOR_BY_QUERY: "/vendors/bysearch/getvendors",
  //Prooducts
  GET_ALL_PRODUCTS: "/products/",
  GET_A_PRODUCTS: "/products",
  CREATE_PRODUCTS: "/products/",
  UPDATE_PRODUCTS: "/products",
  DELETE_PRODUCT: "/products",
  GET_PRODUCTS_PARTIAL: "/products/partial/data",
  GET_ALL_PRODUCT_CATEGORY: "/productCategory/",
  GET_A_PRODUCT_CATEGORY: "/productCategory",
  CREATE_PRODUCT_CATEGORY: "/productCategory",
  UPDATE_PRODUCT_CATEGORY: "/productCategory",
  DELETE_PRODUCT_CATEGORY: "/productCategory",
  GET_ALL_PRODUCT_SUBCATEGORY: "/productSubcategory",
  GET_A_PRODUCT_SUBCATEGORY: "/productSubcategory",
  CREATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  UPDATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  DELETE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  GET_ALL_PRODUCT_CLASSIFICATION: "/productClassification",
  GET_A_PRODUCT_CLASSIFICATION: "/productClassification",
  CREATE_PRODUCT_CLASSIFICATION: "/productClassification",
  UPDATE_PRODUCT_CLASSIFICATION: "/productClassification",
  DELETE_PRODUCT_CLASSIFICATION: "/productClassification",
  GET_ALL_UOM: "/uoms/",
  CREATE_UOM: "/uoms/",
  GET_A_UOM: "/uoms",
  UPDATE_UOM: "/uoms",
  DELETE_UOM: "/uoms",
  GET_ALL_UOM_CONVERSION: "/uom-conversion-matrix/",
  GET_A_UOM_CONVERSION: "/uom-conversion-matrix",
  CREATE_UOM_CONVERSION: "/uom-conversion-matrix/",
  UPDATE_UOM_CONVERSION: "/uom-conversion-matrix",
  DELETE_UOM_CONVERSION: "/uom-conversion-matrix",
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
  //Offices
  GET_ALL_OFFICES: "/location-offices",
  GET_A_OFFICE: "/location-offices",
  CREATE_OFFICE: "/location-offices",
  UPDATE_OFFICE: "/location-offices",
  DELETE_OFFICE: "/location-offices",
  //Branches
  GET_ALL_BRANCHES: "/location-branches",
  GET_A_BRANCH: "/location-branches",
  CREATE_BRANCH: "/location-branches",
  UPDATE_BRANCH: "/location-branches",
  DELETE_BRANCH: "/location-branches",
  GET_ALL_BRANCHES_FILTERED: "/location-branches/filterData/filter/all"
};
var nt = /* @__PURE__ */ ((t) => (t[t["collection-center"] = 0] = "collection-center", t[t["distribution-center"] = 1] = "distribution-center", t[t["seasonal-collection-center"] = 2] = "seasonal-collection-center", t[t.warehouse = 3] = "warehouse", t))(nt || {}), st = /* @__PURE__ */ ((t) => (t[t["registered-office"] = 0] = "registered-office", t[t["corporate-office"] = 1] = "corporate-office", t))(st || {}), ot = /* @__PURE__ */ ((t) => (t.OWNED = "Owned", t.LEASED = "Leased", t.SHARED = "Shared", t.ENCUMBERED = "Encumbered", t))(ot || {}), it = /* @__PURE__ */ ((t) => (t.CULTIVABLE = "Cultivable", t.FALLOW = "Fallow", t.IRRIGATED = "Irrigated", t.NON_IRRIGATED = "Non-Irrigated", t))(it || {});
function Ie(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: at } = Object.prototype, { getPrototypeOf: Ee } = Object, J = /* @__PURE__ */ ((t) => (e) => {
  const r = at.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (t) => (t = t.toLowerCase(), (e) => J(e) === t), W = (t) => (e) => typeof e === t, { isArray: M } = Array, V = W("undefined");
function ct(t) {
  return t !== null && !V(t) && t.constructor !== null && !V(t.constructor) && P(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const we = U("ArrayBuffer");
function ut(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && we(t.buffer), e;
}
const lt = W("string"), P = W("function"), Fe = W("number"), K = (t) => t !== null && typeof t == "object", Et = (t) => t === !0 || t === !1, H = (t) => {
  if (J(t) !== "object")
    return !1;
  const e = Ee(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, dt = U("Date"), ft = U("File"), _t = U("Blob"), ht = U("FileList"), Tt = (t) => K(t) && P(t.pipe), pt = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || P(t.append) && ((e = J(t)) === "formdata" || // detect form-data instance
  e === "object" && P(t.toString) && t.toString() === "[object FormData]"));
}, Rt = U("URLSearchParams"), [At, mt, Ot, Ct] = ["ReadableStream", "Request", "Response", "Headers"].map(U), St = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function v(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, s;
  if (typeof t != "object" && (t = [t]), M(t))
    for (n = 0, s = t.length; n < s; n++)
      e.call(null, t[n], n, t);
  else {
    const o = r ? Object.getOwnPropertyNames(t) : Object.keys(t), i = o.length;
    let c;
    for (n = 0; n < i; n++)
      c = o[n], e.call(null, t[c], c, t);
  }
}
function Ne(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], e === s.toLowerCase())
      return s;
  return null;
}
const N = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ge = (t) => !V(t) && t !== N;
function ne() {
  const { caseless: t } = Ge(this) && this || {}, e = {}, r = (n, s) => {
    const o = t && Ne(e, s) || s;
    H(e[o]) && H(n) ? e[o] = ne(e[o], n) : H(n) ? e[o] = ne({}, n) : M(n) ? e[o] = n.slice() : e[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && v(arguments[n], r);
  return e;
}
const gt = (t, e, r, { allOwnKeys: n } = {}) => (v(e, (s, o) => {
  r && P(s) ? t[o] = Ie(s, r) : t[o] = s;
}, { allOwnKeys: n }), t), yt = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Dt = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Lt = (t, e, r, n) => {
  let s, o, i;
  const c = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      i = s[o], (!n || n(i, t, e)) && !c[i] && (e[i] = t[i], c[i] = !0);
    t = r !== !1 && Ee(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Pt = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Ut = (t) => {
  if (!t) return null;
  if (M(t)) return t;
  let e = t.length;
  if (!Fe(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, bt = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ee(Uint8Array)), It = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, wt = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Ft = U("HTMLFormElement"), Nt = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), pe = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Gt = U("RegExp"), Be = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  v(r, (s, o) => {
    let i;
    (i = e(s, o, t)) !== !1 && (n[o] = i || s);
  }), Object.defineProperties(t, n);
}, Bt = (t) => {
  Be(t, (e, r) => {
    if (P(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (P(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Mt = (t, e) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return M(t) ? n(t) : n(String(t).split(e)), r;
}, xt = () => {
}, $t = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, Z = "abcdefghijklmnopqrstuvwxyz", Re = "0123456789", Me = {
  DIGIT: Re,
  ALPHA: Z,
  ALPHA_DIGIT: Z + Z.toUpperCase() + Re
}, Vt = (t = 16, e = Me.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function vt(t) {
  return !!(t && P(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const kt = (t) => {
  const e = new Array(10), r = (n, s) => {
    if (K(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const o = M(n) ? [] : {};
        return v(n, (i, c) => {
          const d = r(i, s + 1);
          !V(d) && (o[c] = d);
        }), e[s] = void 0, o;
      }
    }
    return n;
  };
  return r(t, 0);
}, jt = U("AsyncFunction"), Ht = (t) => t && (K(t) || P(t)) && P(t.then) && P(t.catch), xe = ((t, e) => t ? setImmediate : e ? ((r, n) => (N.addEventListener("message", ({ source: s, data: o }) => {
  s === N && o === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), N.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  P(N.postMessage)
), Yt = typeof queueMicrotask < "u" ? queueMicrotask.bind(N) : typeof process < "u" && process.nextTick || xe, a = {
  isArray: M,
  isArrayBuffer: we,
  isBuffer: ct,
  isFormData: pt,
  isArrayBufferView: ut,
  isString: lt,
  isNumber: Fe,
  isBoolean: Et,
  isObject: K,
  isPlainObject: H,
  isReadableStream: At,
  isRequest: mt,
  isResponse: Ot,
  isHeaders: Ct,
  isUndefined: V,
  isDate: dt,
  isFile: ft,
  isBlob: _t,
  isRegExp: Gt,
  isFunction: P,
  isStream: Tt,
  isURLSearchParams: Rt,
  isTypedArray: bt,
  isFileList: ht,
  forEach: v,
  merge: ne,
  extend: gt,
  trim: St,
  stripBOM: yt,
  inherits: Dt,
  toFlatObject: Lt,
  kindOf: J,
  kindOfTest: U,
  endsWith: Pt,
  toArray: Ut,
  forEachEntry: It,
  matchAll: wt,
  isHTMLForm: Ft,
  hasOwnProperty: pe,
  hasOwnProp: pe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Be,
  freezeMethods: Bt,
  toObjectSet: Mt,
  toCamelCase: Nt,
  noop: xt,
  toFiniteNumber: $t,
  findKey: Ne,
  global: N,
  isContextDefined: Ge,
  ALPHABET: Me,
  generateString: Vt,
  isSpecCompliantForm: vt,
  toJSONObject: kt,
  isAsyncFn: jt,
  isThenable: Ht,
  setImmediate: xe,
  asap: Yt
};
function T(t, e, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(T, Error, {
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
const $e = T.prototype, Ve = {};
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
  Ve[t] = { value: t };
});
Object.defineProperties(T, Ve);
Object.defineProperty($e, "isAxiosError", { value: !0 });
T.from = (t, e, r, n, s, o) => {
  const i = Object.create($e);
  return a.toFlatObject(t, i, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), T.call(i, t.message, e, r, n, s), i.cause = t, i.name = t.name, o && Object.assign(i, o), i;
};
const qt = null;
function se(t) {
  return a.isPlainObject(t) || a.isArray(t);
}
function ve(t) {
  return a.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Ae(t, e, r) {
  return t ? t.concat(e).map(function(s, o) {
    return s = ve(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : e;
}
function zt(t) {
  return a.isArray(t) && !t.some(se);
}
const Jt = a.toFlatObject(a, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Q(t, e, r) {
  if (!a.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, h) {
    return !a.isUndefined(h[p]);
  });
  const n = r.metaTokens, s = r.visitor || E, o = r.dots, i = r.indexes, d = (r.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(e);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(_) {
    if (_ === null) return "";
    if (a.isDate(_))
      return _.toISOString();
    if (!d && a.isBlob(_))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(_) || a.isTypedArray(_) ? d && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _;
  }
  function E(_, p, h) {
    let O = _;
    if (_ && !h && typeof _ == "object") {
      if (a.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), _ = JSON.stringify(_);
      else if (a.isArray(_) && zt(_) || (a.isFileList(_) || a.endsWith(p, "[]")) && (O = a.toArray(_)))
        return p = ve(p), O.forEach(function(g, b) {
          !(a.isUndefined(g) || g === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ae([p], b, o) : i === null ? p : p + "[]",
            l(g)
          );
        }), !1;
    }
    return se(_) ? !0 : (e.append(Ae(h, p, o), l(_)), !1);
  }
  const f = [], m = Object.assign(Jt, {
    defaultVisitor: E,
    convertValue: l,
    isVisitable: se
  });
  function C(_, p) {
    if (!a.isUndefined(_)) {
      if (f.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(_), a.forEach(_, function(O, S) {
        (!(a.isUndefined(O) || O === null) && s.call(
          e,
          O,
          a.isString(S) ? S.trim() : S,
          p,
          m
        )) === !0 && C(O, p ? p.concat(S) : [S]);
      }), f.pop();
    }
  }
  if (!a.isObject(t))
    throw new TypeError("data must be an object");
  return C(t), e;
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
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function de(t, e) {
  this._pairs = [], t && Q(t, this, e);
}
const ke = de.prototype;
ke.append = function(e, r) {
  this._pairs.push([e, r]);
};
ke.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, me);
  } : me;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function Wt(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function je(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Wt, s = r && r.serialize;
  let o;
  if (s ? o = s(e, r) : o = a.isURLSearchParams(e) ? e.toString() : new de(e, r).toString(n), o) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class Oe {
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
    a.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const He = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Kt = typeof URLSearchParams < "u" ? URLSearchParams : de, Qt = typeof FormData < "u" ? FormData : null, Xt = typeof Blob < "u" ? Blob : null, Zt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Kt,
    FormData: Qt,
    Blob: Xt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, fe = typeof window < "u" && typeof document < "u", oe = typeof navigator == "object" && navigator || void 0, er = fe && (!oe || ["ReactNative", "NativeScript", "NS"].indexOf(oe.product) < 0), tr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", rr = fe && window.location.href || "http://localhost", nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: fe,
  hasStandardBrowserEnv: er,
  hasStandardBrowserWebWorkerEnv: tr,
  navigator: oe,
  origin: rr
}, Symbol.toStringTag, { value: "Module" })), D = {
  ...nr,
  ...Zt
};
function sr(t, e) {
  return Q(t, new D.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return D.isNode && a.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function or(t) {
  return a.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ir(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], e[o] = t[o];
  return e;
}
function Ye(t) {
  function e(r, n, s, o) {
    let i = r[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), d = o >= r.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), e(r, n, s[i], o) && a.isArray(s[i]) && (s[i] = ir(s[i])), !c);
  }
  if (a.isFormData(t) && a.isFunction(t.entries)) {
    const r = {};
    return a.forEachEntry(t, (n, s) => {
      e(or(n), s, r, 0);
    }), r;
  }
  return null;
}
function ar(t, e, r) {
  if (a.isString(t))
    try {
      return (e || JSON.parse)(t), a.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(t);
}
const k = {
  transitional: He,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = a.isObject(e);
    if (o && a.isHTMLForm(e) && (e = new FormData(e)), a.isFormData(e))
      return s ? JSON.stringify(Ye(e)) : e;
    if (a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) || a.isReadableStream(e))
      return e;
    if (a.isArrayBufferView(e))
      return e.buffer;
    if (a.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let c;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return sr(e, this.formSerializer).toString();
      if ((c = a.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return Q(
          c ? { "files[]": e } : e,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (r.setContentType("application/json", !1), ar(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || k.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(e) || a.isReadableStream(e))
      return e;
    if (e && a.isString(e) && (n && !this.responseType || s)) {
      const i = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? T.from(c, T.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
a.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  k.headers[t] = {};
});
const cr = a.toObjectSet([
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
]), ur = (t) => {
  const e = {};
  let r, n, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim(), !(!r || e[r] && cr[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Ce = Symbol("internals");
function $(t) {
  return t && String(t).trim().toLowerCase();
}
function Y(t) {
  return t === !1 || t == null ? t : a.isArray(t) ? t.map(Y) : String(t);
}
function lr(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Er = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ee(t, e, r, n, s) {
  if (a.isFunction(n))
    return n.call(this, e, r);
  if (s && (e = r), !!a.isString(e)) {
    if (a.isString(n))
      return e.indexOf(n) !== -1;
    if (a.isRegExp(n))
      return n.test(e);
  }
}
function dr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function fr(t, e) {
  const r = a.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(s, o, i) {
        return this[n].call(this, e, s, o, i);
      },
      configurable: !0
    });
  });
}
class L {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const s = this;
    function o(c, d, l) {
      const E = $(d);
      if (!E)
        throw new Error("header name must be a non-empty string");
      const f = a.findKey(s, E);
      (!f || s[f] === void 0 || l === !0 || l === void 0 && s[f] !== !1) && (s[f || d] = Y(c));
    }
    const i = (c, d) => a.forEach(c, (l, E) => o(l, E, d));
    if (a.isPlainObject(e) || e instanceof this.constructor)
      i(e, r);
    else if (a.isString(e) && (e = e.trim()) && !Er(e))
      i(ur(e), r);
    else if (a.isHeaders(e))
      for (const [c, d] of e.entries())
        o(d, c, n);
    else
      e != null && o(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = $(e), e) {
      const n = a.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return lr(s);
        if (a.isFunction(r))
          return r.call(this, s, n);
        if (a.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = $(e), e) {
      const n = a.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || ee(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let s = !1;
    function o(i) {
      if (i = $(i), i) {
        const c = a.findKey(n, i);
        c && (!r || ee(n, n[c], c, r)) && (delete n[c], s = !0);
      }
    }
    return a.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!e || ee(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const r = this, n = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(n, o);
      if (i) {
        r[i] = Y(s), delete r[o];
        return;
      }
      const c = e ? dr(o) : String(o).trim();
      c !== o && delete r[o], r[c] = Y(s), n[c] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = e && a.isArray(n) ? n.join(", ") : n);
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
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(e) {
    const n = (this[Ce] = this[Ce] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = $(i);
      n[c] || (fr(s, i), n[c] = !0);
    }
    return a.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(L.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
a.freezeMethods(L);
function te(t, e) {
  const r = this || k, n = e || r, s = L.from(n.headers);
  let o = n.data;
  return a.forEach(t, function(c) {
    o = c.call(r, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function qe(t) {
  return !!(t && t.__CANCEL__);
}
function x(t, e, r) {
  T.call(this, t ?? "canceled", T.ERR_CANCELED, e, r), this.name = "CanceledError";
}
a.inherits(x, T, {
  __CANCEL__: !0
});
function ze(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new T(
    "Request failed with status code " + r.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function _r(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function hr(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let s = 0, o = 0, i;
  return e = e !== void 0 ? e : 1e3, function(d) {
    const l = Date.now(), E = n[o];
    i || (i = l), r[s] = d, n[s] = l;
    let f = o, m = 0;
    for (; f !== s; )
      m += r[f++], f = f % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), l - i < e)
      return;
    const C = E && l - E;
    return C ? Math.round(m * 1e3 / C) : void 0;
  };
}
function Tr(t, e) {
  let r = 0, n = 1e3 / e, s, o;
  const i = (l, E = Date.now()) => {
    r = E, s = null, o && (clearTimeout(o), o = null), t.apply(null, l);
  };
  return [(...l) => {
    const E = Date.now(), f = E - r;
    f >= n ? i(l, E) : (s = l, o || (o = setTimeout(() => {
      o = null, i(s);
    }, n - f)));
  }, () => s && i(s)];
}
const q = (t, e, r = 3) => {
  let n = 0;
  const s = hr(50, 250);
  return Tr((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, d = i - n, l = s(d), E = i <= c;
    n = i;
    const f = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: d,
      rate: l || void 0,
      estimated: l && c && E ? (c - i) / l : void 0,
      event: o,
      lengthComputable: c != null,
      [e ? "download" : "upload"]: !0
    };
    t(f);
  }, r);
}, Se = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, ge = (t) => (...e) => a.asap(() => t(...e)), pr = D.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = D.navigator && /(msie|trident)/i.test(D.navigator.userAgent), r = document.createElement("a");
    let n;
    function s(o) {
      let i = o;
      return e && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
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
    return n = s(window.location.href), function(i) {
      const c = a.isString(i) ? s(i) : i;
      return c.protocol === n.protocol && c.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Rr = D.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, s, o) {
      const i = [t + "=" + encodeURIComponent(e)];
      a.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), a.isString(n) && i.push("path=" + n), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function Ar(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function mr(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Je(t, e) {
  return t && !Ar(e) ? mr(t, e) : e;
}
const ye = (t) => t instanceof L ? { ...t } : t;
function B(t, e) {
  e = e || {};
  const r = {};
  function n(l, E, f) {
    return a.isPlainObject(l) && a.isPlainObject(E) ? a.merge.call({ caseless: f }, l, E) : a.isPlainObject(E) ? a.merge({}, E) : a.isArray(E) ? E.slice() : E;
  }
  function s(l, E, f) {
    if (a.isUndefined(E)) {
      if (!a.isUndefined(l))
        return n(void 0, l, f);
    } else return n(l, E, f);
  }
  function o(l, E) {
    if (!a.isUndefined(E))
      return n(void 0, E);
  }
  function i(l, E) {
    if (a.isUndefined(E)) {
      if (!a.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, E);
  }
  function c(l, E, f) {
    if (f in e)
      return n(l, E);
    if (f in t)
      return n(void 0, l);
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
    headers: (l, E) => s(ye(l), ye(E), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, t, e)), function(E) {
    const f = d[E] || s, m = f(t[E], e[E], E);
    a.isUndefined(m) && f !== c || (r[E] = m);
  }), r;
}
const We = (t) => {
  const e = B({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = e;
  e.headers = i = L.from(i), e.url = je(Je(e.baseURL, e.url), t.params, t.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let d;
  if (a.isFormData(r)) {
    if (D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [l, ...E] = d ? d.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...E].join("; "));
    }
  }
  if (D.hasStandardBrowserEnv && (n && a.isFunction(n) && (n = n(e)), n || n !== !1 && pr(e.url))) {
    const l = s && o && Rr.read(o);
    l && i.set(s, l);
  }
  return e;
}, Or = typeof XMLHttpRequest < "u", Cr = Or && function(t) {
  return new Promise(function(r, n) {
    const s = We(t);
    let o = s.data;
    const i = L.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: l } = s, E, f, m, C, _;
    function p() {
      C && C(), _ && _(), s.cancelToken && s.cancelToken.unsubscribe(E), s.signal && s.signal.removeEventListener("abort", E);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function O() {
      if (!h)
        return;
      const g = L.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), y = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: g,
        config: t,
        request: h
      };
      ze(function(F) {
        r(F), p();
      }, function(F) {
        n(F), p();
      }, y), h = null;
    }
    "onloadend" in h ? h.onloadend = O : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(O);
    }, h.onabort = function() {
      h && (n(new T("Request aborted", T.ECONNABORTED, t, h)), h = null);
    }, h.onerror = function() {
      n(new T("Network Error", T.ERR_NETWORK, t, h)), h = null;
    }, h.ontimeout = function() {
      let b = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const y = s.transitional || He;
      s.timeoutErrorMessage && (b = s.timeoutErrorMessage), n(new T(
        b,
        y.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        t,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && a.forEach(i.toJSON(), function(b, y) {
      h.setRequestHeader(y, b);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), c && c !== "json" && (h.responseType = s.responseType), l && ([m, _] = q(l, !0), h.addEventListener("progress", m)), d && h.upload && ([f, C] = q(d), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", C)), (s.cancelToken || s.signal) && (E = (g) => {
      h && (n(!g || g.type ? new x(null, t, h) : g), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(E), s.signal && (s.signal.aborted ? E() : s.signal.addEventListener("abort", E)));
    const S = _r(s.url);
    if (S && D.protocols.indexOf(S) === -1) {
      n(new T("Unsupported protocol " + S + ":", T.ERR_BAD_REQUEST, t));
      return;
    }
    h.send(o || null);
  });
}, Sr = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), s;
    const o = function(l) {
      if (!s) {
        s = !0, c();
        const E = l instanceof Error ? l : this.reason;
        n.abort(E instanceof T ? E : new x(E instanceof Error ? E.message : E));
      }
    };
    let i = e && setTimeout(() => {
      i = null, o(new T(`timeout ${e} of ms exceeded`, T.ETIMEDOUT));
    }, e);
    const c = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((l) => l.addEventListener("abort", o));
    const { signal: d } = n;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, gr = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + e, yield t.slice(n, s), n = s;
}, yr = async function* (t, e) {
  for await (const r of Dr(t))
    yield* gr(r, e);
}, Dr = async function* (t) {
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
}, De = (t, e, r, n) => {
  const s = yr(t, e);
  let o = 0, i, c = (d) => {
    i || (i = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: l, value: E } = await s.next();
        if (l) {
          c(), d.close();
          return;
        }
        let f = E.byteLength;
        if (r) {
          let m = o += f;
          r(m);
        }
        d.enqueue(new Uint8Array(E));
      } catch (l) {
        throw c(l), l;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, X = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ke = X && typeof ReadableStream == "function", Lr = X && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Qe = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Pr = Ke && Qe(() => {
  let t = !1;
  const e = new Request(D.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Le = 64 * 1024, ie = Ke && Qe(() => a.isReadableStream(new Response("").body)), z = {
  stream: ie && ((t) => t.body)
};
X && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !z[e] && (z[e] = a.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new T(`Response type '${e}' is not supported`, T.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Ur = async (t) => {
  if (t == null)
    return 0;
  if (a.isBlob(t))
    return t.size;
  if (a.isSpecCompliantForm(t))
    return (await new Request(D.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(t) || a.isArrayBuffer(t))
    return t.byteLength;
  if (a.isURLSearchParams(t) && (t = t + ""), a.isString(t))
    return (await Lr(t)).byteLength;
}, br = async (t, e) => {
  const r = a.toFiniteNumber(t.getContentLength());
  return r ?? Ur(e);
}, Ir = X && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: d,
    responseType: l,
    headers: E,
    withCredentials: f = "same-origin",
    fetchOptions: m
  } = We(t);
  l = l ? (l + "").toLowerCase() : "text";
  let C = Sr([s, o && o.toAbortSignal()], i), _;
  const p = C && C.unsubscribe && (() => {
    C.unsubscribe();
  });
  let h;
  try {
    if (d && Pr && r !== "get" && r !== "head" && (h = await br(E, n)) !== 0) {
      let y = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), I;
      if (a.isFormData(n) && (I = y.headers.get("content-type")) && E.setContentType(I), y.body) {
        const [F, j] = Se(
          h,
          q(ge(d))
        );
        n = De(y.body, Le, F, j);
      }
    }
    a.isString(f) || (f = f ? "include" : "omit");
    const O = "credentials" in Request.prototype;
    _ = new Request(e, {
      ...m,
      signal: C,
      method: r.toUpperCase(),
      headers: E.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: O ? f : void 0
    });
    let S = await fetch(_);
    const g = ie && (l === "stream" || l === "response");
    if (ie && (c || g && p)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((Te) => {
        y[Te] = S[Te];
      });
      const I = a.toFiniteNumber(S.headers.get("content-length")), [F, j] = c && Se(
        I,
        q(ge(c), !0)
      ) || [];
      S = new Response(
        De(S.body, Le, F, () => {
          j && j(), p && p();
        }),
        y
      );
    }
    l = l || "text";
    let b = await z[a.findKey(z, l) || "text"](S, t);
    return !g && p && p(), await new Promise((y, I) => {
      ze(y, I, {
        data: b,
        headers: L.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: t,
        request: _
      });
    });
  } catch (O) {
    throw p && p(), O && O.name === "TypeError" && /fetch/i.test(O.message) ? Object.assign(
      new T("Network Error", T.ERR_NETWORK, t, _),
      {
        cause: O.cause || O
      }
    ) : T.from(O, O && O.code, t, _);
  }
}), ae = {
  http: qt,
  xhr: Cr,
  fetch: Ir
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
const Pe = (t) => `- ${t}`, wr = (t) => a.isFunction(t) || t === null || t === !1, Xe = {
  getAdapter: (t) => {
    t = a.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const s = {};
    for (let o = 0; o < e; o++) {
      r = t[o];
      let i;
      if (n = r, !wr(r) && (n = ae[(i = String(r)).toLowerCase()], n === void 0))
        throw new T(`Unknown adapter '${i}'`);
      if (n)
        break;
      s[i || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(s).map(
        ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? o.length > 1 ? `since :
` + o.map(Pe).join(`
`) : " " + Pe(o[0]) : "as no adapter specified";
      throw new T(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ae
};
function re(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new x(null, t);
}
function Ue(t) {
  return re(t), t.headers = L.from(t.headers), t.data = te.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Xe.getAdapter(t.adapter || k.adapter)(t).then(function(n) {
    return re(t), n.data = te.call(
      t,
      t.transformResponse,
      n
    ), n.headers = L.from(n.headers), n;
  }, function(n) {
    return qe(n) || (re(t), n && n.response && (n.response.data = te.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = L.from(n.response.headers))), Promise.reject(n);
  });
}
const Ze = "1.7.7", _e = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  _e[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const be = {};
_e.transitional = function(e, r, n) {
  function s(o, i) {
    return "[Axios v" + Ze + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, c) => {
    if (e === !1)
      throw new T(
        s(i, " has been removed" + (r ? " in " + r : "")),
        T.ERR_DEPRECATED
      );
    return r && !be[i] && (be[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(o, i, c) : !0;
  };
};
function Fr(t, e, r) {
  if (typeof t != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], i = e[o];
    if (i) {
      const c = t[o], d = c === void 0 || i(c, o, t);
      if (d !== !0)
        throw new T("option " + o + " must be " + d, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new T("Unknown option " + o, T.ERR_BAD_OPTION);
  }
}
const ce = {
  assertOptions: Fr,
  validators: _e
}, w = ce.validators;
class G {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Oe(),
      response: new Oe()
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
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = B(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && ce.assertOptions(n, {
      silentJSONParsing: w.transitional(w.boolean),
      forcedJSONParsing: w.transitional(w.boolean),
      clarifyTimeoutError: w.transitional(w.boolean)
    }, !1), s != null && (a.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ce.assertOptions(s, {
      encode: w.function,
      serialize: w.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[r.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (_) => {
        delete o[_];
      }
    ), r.headers = L.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(r) === !1 || (d = d && p.synchronous, c.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let E, f = 0, m;
    if (!d) {
      const _ = [Ue.bind(this), void 0];
      for (_.unshift.apply(_, c), _.push.apply(_, l), m = _.length, E = Promise.resolve(r); f < m; )
        E = E.then(_[f++], _[f++]);
      return E;
    }
    m = c.length;
    let C = r;
    for (f = 0; f < m; ) {
      const _ = c[f++], p = c[f++];
      try {
        C = _(C);
      } catch (h) {
        p.call(this, h);
        break;
      }
    }
    try {
      E = Ue.call(this, C);
    } catch (_) {
      return Promise.reject(_);
    }
    for (f = 0, m = l.length; f < m; )
      E = E.then(l[f++], l[f++]);
    return E;
  }
  getUri(e) {
    e = B(this.defaults, e);
    const r = Je(e.baseURL, e.url);
    return je(r, e.params, e.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(e) {
  G.prototype[e] = function(r, n) {
    return this.request(B(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(o, i, c) {
      return this.request(B(c || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  G.prototype[e] = r(), G.prototype[e + "Form"] = r(!0);
});
class he {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        n.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, e(function(o, i, c) {
      n.reason || (n.reason = new x(o, i, c), r(n.reason));
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
      token: new he(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function Nr(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Gr(t) {
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
function et(t) {
  const e = new G(t), r = Ie(G.prototype.request, e);
  return a.extend(r, G.prototype, e, { allOwnKeys: !0 }), a.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(s) {
    return et(B(t, s));
  }, r;
}
const A = et(k);
A.Axios = G;
A.CanceledError = x;
A.CancelToken = he;
A.isCancel = qe;
A.VERSION = Ze;
A.toFormData = Q;
A.AxiosError = T;
A.Cancel = A.CanceledError;
A.all = function(e) {
  return Promise.all(e);
};
A.spread = Nr;
A.isAxiosError = Gr;
A.mergeConfig = B;
A.AxiosHeaders = L;
A.formToJSON = (t) => Ye(a.isHTMLForm(t) ? new FormData(t) : t);
A.getAdapter = Xe.getAdapter;
A.HttpStatusCode = ue;
A.default = A;
const tt = {
  BASE_URL: "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com"
  // BASE_URL: "https://4ab7-182-156-141-17.ngrok-free.app",
}, le = A.create({
  baseURL: tt.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), Br = () => localStorage.getItem("access_token"), Mr = () => localStorage.getItem("refresh_token");
le.interceptors.request.use(
  (t) => {
    const e = Br();
    return e && (t.headers.Authorization = `Bearer ${e}`), t;
  },
  (t) => Promise.reject(t)
);
le.interceptors.response.use(
  (t) => t,
  async (t) => {
    const e = t.config;
    if (t.response && t.response.status === 401 && !e._retry) {
      e._retry = !0;
      const r = Mr();
      if (r)
        try {
          const n = await A.post(`${tt.BASE_URL}/auth/refresh-token`, {
            refreshToken: r
          });
          return localStorage.setItem("access_token", n.data.access_token), e.headers.Authorization = `Bearer ${n.data.access_token}`, le(e);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(t);
  }
);
const rt = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com", xr = () => A.create({
  baseURL: rt,
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
    return R._axiosInstance || (R._axiosInstance = xr(), R.setAuthHeaderInterceptor(), R._axiosInstance.interceptors.response.use(R.handleSuccess, R.handleError)), R._axiosInstance;
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
      return (await A.post(`${rt}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    R._axiosInstance.interceptors.request.use(
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
    const r = e.config;
    if (e.response && e.response.status === 401 && !r._retry) {
      r._retry = !0;
      try {
        const o = await R.refreshAccessToken();
        return R.setAccessToken(o), r.headers.set("Authorization", `Bearer ${o}`), R._axiosInstance(r);
      } catch (o) {
        console.error("Refresh token failed", o);
      }
    }
    const n = { name: "Error", message: "Something went wrong!" };
    return e.response && e.response.data && (n.message = (s = e.response.data) == null ? void 0 : s.message), Promise.reject(n);
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
class Vr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProduct(e) {
    const r = u.CREATE_PRODUCTS;
    return this.postFormData(r, e);
  }
  getAllProducts() {
    const e = u.GET_ALL_PRODUCTS;
    return this.get(e);
  }
  getProductsPatrialData() {
    const e = u.GET_PRODUCTS_PARTIAL;
    return this.get(e);
  }
  getProductById(e) {
    const r = `${u.GET_A_PRODUCTS}/${e}`;
    return this.get(r);
  }
  updateProduct(e, r) {
    const n = `${u.UPDATE_PRODUCTS}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteProductById(e) {
    const r = `${u.DELETE_PRODUCT}/${e}`;
    return this.delete(r);
  }
}
class vr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductClassification(e) {
    const r = u.CREATE_PRODUCT_CLASSIFICATION;
    return this.post(r, e);
  }
  getAllProductClassifications() {
    const e = u.GET_ALL_PRODUCT_CLASSIFICATION;
    return this.get(e);
  }
  getProductClassificationById(e) {
    const r = `${u.GET_A_PRODUCT_CLASSIFICATION}/${e}`;
    return this.get(r);
  }
  updateProductClassification(e, r) {
    const n = `${u.UPDATE_PRODUCT_CLASSIFICATION}/${e}`;
    return this.patch(n, r);
  }
  deleteProductClassificationById(e) {
    const r = `${u.DELETE_PRODUCT_CLASSIFICATION}/${e}`;
    return this.delete(r);
  }
}
class kr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductCategory(e) {
    const r = u.CREATE_PRODUCT_CATEGORY;
    return this.post(r, e);
  }
  getAllProductCategories() {
    const e = u.GET_ALL_PRODUCT_CATEGORY;
    return this.get(e);
  }
  getProductCategoryById(e) {
    const r = `${u.GET_A_PRODUCT_CATEGORY}/${e}`;
    return this.get(r);
  }
  updateProductCategory(e, r) {
    const n = `${u.UPDATE_PRODUCT_CATEGORY}/${e}`;
    return this.patch(n, r);
  }
  deleteProductCategoryById(e) {
    const r = `${u.DELETE_PRODUCT_CATEGORY}/${e}`;
    return this.delete(r);
  }
}
class jr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductSubcategory(e) {
    const r = u.CREATE_PRODUCT_SUBCATEGORY;
    return this.post(r, e);
  }
  getAllProductSubcategories() {
    const e = u.GET_ALL_PRODUCT_SUBCATEGORY;
    return this.get(e);
  }
  getProductSubcategoryById(e) {
    const r = `${u.GET_A_PRODUCT_SUBCATEGORY}/${e}`;
    return this.get(r);
  }
  updateProductSubcategory(e, r) {
    const n = `${u.UPDATE_PRODUCT_SUBCATEGORY}/${e}`;
    return this.patch(n, r);
  }
  deleteProductSubcategoryById(e) {
    const r = `${u.DELETE_PRODUCT_SUBCATEGORY}/${e}`;
    return this.delete(r);
  }
}
class Hr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createUOM(e) {
    const r = u.CREATE_UOM;
    return this.post(r, e);
  }
  getAllUOMs() {
    const e = u.GET_ALL_UOM;
    return this.get(e);
  }
  getUOMById(e) {
    const r = `${u.GET_A_UOM}/${e}`;
    return this.get(r);
  }
  updateUOM(e, r) {
    const n = `${u.UPDATE_UOM}/${e}`;
    return this.patch(n, r);
  }
  deleteUOMById(e) {
    const r = `${u.DELETE_UOM}/${e}`;
    return this.delete(r);
  }
}
class Yr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createUOMConversionMatrix(e) {
    const r = u.CREATE_UOM_CONVERSION;
    return this.post(r, e);
  }
  getAllUOMConversionMatrix() {
    const e = u.GET_ALL_UOM_CONVERSION;
    return this.get(e);
  }
  getUOMConversionMatrixById(e) {
    const r = `${u.GET_A_UOM_CONVERSION}/${e}`;
    return this.get(r);
  }
  updateUOMConversionMatrix(e, r) {
    const n = `${u.UPDATE_UOM_CONVERSION}/${e}`;
    return this.patch(n, r);
  }
  deleteUOMConversionMatrixById(e) {
    const r = `${u.DELETE_UOM_CONVERSION}/${e}`;
    return this.delete(r);
  }
}
class qr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createBranch(e, r) {
    const n = `${u.CREATE_BRANCH}/${r}`;
    return this.post(n, e);
  }
  getAllBranches(e) {
    const r = `${u.GET_ALL_BRANCHES}/?search=${e}`;
    return this.get(r);
  }
  getBranchById(e) {
    const r = `${u.GET_A_BRANCH}/${e}`;
    return this.get(r);
  }
  updateBranch(e, r, n) {
    const s = `${u.UPDATE_BRANCH}/${r}/${e}`;
    return this.patch(s, n);
  }
  deleteBranchById(e, r) {
    const n = `${u.DELETE_BRANCH}/${r}/${e}`;
    return this.delete(n);
  }
}
class zr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createOffice(e, r) {
    const n = `${u.CREATE_OFFICE}/${r}`;
    return this.post(n, e);
  }
  getAllOffice(e) {
    const r = `${u.GET_ALL_OFFICES}/${e}`;
    return this.get(r);
  }
  getOfficeById(e, r) {
    const n = `${u.GET_A_OFFICE}/${r}/${e}`;
    return this.get(n);
  }
  updateOffice(e, r, n) {
    const s = `${u.UPDATE_OFFICE}/${r}/${e}`;
    return this.patch(s, n);
  }
  deleteOfficeById(e, r) {
    const n = `${u.DELETE_OFFICE}/${r}/${e}`;
    return this.delete(n);
  }
}
class Jr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendor(e) {
    const r = u.CREATE_VENDOR;
    return this.postFormData(r, e);
  }
  getAllVendors() {
    const e = u.GET_ALL_VENDORS;
    return this.get(e);
  }
  getVendorById(e) {
    const r = `${u.GET_A_VENDOR}/${e}`;
    return this.get(r);
  }
  updateVendor(e, r) {
    const n = `${u.UPDATE_VENDOR}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteVendorById(e) {
    const r = `${u.DELETE_VENDOR}/${e}`;
    return this.delete(r);
  }
}
class Wr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendorCategory(e) {
    const r = u.CREATE_VENDOR_CAT;
    return this.post(r, e);
  }
  getAllVendorCategories() {
    const e = u.GET_ALL_VENDOR_CAT;
    return this.get(e);
  }
  getVendorCategoryById(e) {
    const r = `${u.GET_A_VENDOR_CAT}/${e}`;
    return this.get(r);
  }
  updateVendorCategory(e, r) {
    const n = `${u.UPDATE_VENDOR_CAT}/${e}`;
    return this.patch(n, r);
  }
  deleteProdctCategoryById(e) {
    const r = `${u.DELETE_VENDOR_CAT}/${e}`;
    return this.delete(r);
  }
}
class Kr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendorSubcategory(e) {
    const r = u.CREATE_VENDOR_SUBCAT;
    return this.post(r, e);
  }
  getAllVendorSubcategories() {
    const e = u.GET_ALL_VENDOR_SUBCAT;
    return this.get(e);
  }
  getVendorSubcategoryById(e) {
    const r = `${u.GET_A_VENDOR_SUBCAT}/${e}`;
    return this.get(r);
  }
  getVendorSubcategoryByQuery(e) {
    const r = `${u.GET_VENDOR_SUBCAT_BY_QUERY}?search=${e}`;
    return this.get(r);
  }
  updateVendorSubcategory(e, r) {
    const n = `${u.UPDATE_VENDOR_SUBCAT}/${e}`;
    return this.patch(n, r);
  }
  deleteProdctSubcategoryById(e) {
    const r = `${u.DELETE_VENDOR_SUBCAT}/${e}`;
    return this.delete(r);
  }
}
class Qr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createCustomer(e) {
    const r = u.CREATE_CUSTOMER;
    return this.postFormData(r, e);
  }
  getAllCustomers() {
    const e = u.GET_ALL_CUSTOMERS;
    return this.get(e);
  }
  getCustomerById(e) {
    const r = `${u.GET_A_CUSTOMER}/${e}`;
    return this.get(r);
  }
  updateCustomer(e, r) {
    const n = `${u.UPDATE_CUSTOMER}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteCustomerById(e) {
    const r = `${u.DELETE_CUSTOMER}/${e}`;
    return this.delete(r);
  }
}
class Xr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createFarmer(e) {
    const r = u.CREATE_FARMER;
    return this.postFormData(r, e);
  }
  getAllFarmers() {
    const e = u.GET_ALL_FARMERS;
    return this.get(e);
  }
  getFarmerById(e) {
    const r = `${u.GET_A_FARMER}/${e}`;
    return this.get(r);
  }
  updateFarmer(e, r) {
    const n = `${u.UPDATE_FARMER}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteFarmerById(e) {
    const r = `${u.DELETE_FARMER}/${e}`;
    return this.delete(r);
  }
}
class Zr extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createEmployee(e) {
    const r = u.CREATE_EMPLOYEE;
    return this.post(r, e);
  }
  getAllEmployees() {
    const e = u.GET_ALL_EMPLOYEES;
    return this.get(e);
  }
  getEmployeeById(e) {
    const r = `${u.GET_AN_EMPLOYEE}/${e}`;
    return this.get(r);
  }
  updateEmployee(e, r) {
    const n = `${u.UPDATE_AN_EMPLOYEE}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteEmployeeById(e) {
    const r = `${u.DELETE_EMPLOYEE}/${e}`;
    return this.delete(r);
  }
}
class en extends R {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDepartment(e) {
    const r = u.CREATE_DEPARTMENT;
    return this.postFormData(r, e);
  }
  getAllDepartments() {
    const e = u.GET_ALL_DEPARTMENT;
    return this.get(e);
  }
  getDepartmentById(e) {
    const r = `${u.GET_DEPARTMENT_BY_ID}/${e}`;
    return this.get(r);
  }
  updateDepartment(e, r) {
    const n = `${u.UPDATE_DEPARTMENT}/${e}`;
    return this.patchFormData(n, r);
  }
  deleteDepartmentById(e) {
    const r = `${u.DELETE_DEPARTMENT}/${e}`;
    return this.delete(r);
  }
}
class tn extends R {
  static getInstance() {
    return this._instance || this._instance == new this();
  }
  getAllLevels() {
    const e = u.GET_ALL_LEVEL;
    return this.get(e);
  }
  getLevelById(e) {
    const r = `${u.GET_LEVEL_BY_ID}/${e}`;
    return this.get(r);
  }
  createLevel(e) {
    const r = u.CREATE_LEVEL;
    return this.post(r, e);
  }
  updateLevels(e, r) {
    const n = `${u.UPDATE_LEVEL}/${e}`;
    return this.patch(n, r);
  }
  deleteLevel(e) {
    const r = `${u.DELETE_LEVEL}/${e}`;
    return this.delete(r);
  }
}
export {
  $r as ADMIN_API_URL,
  qr as BranchService,
  nt as BranchType,
  Qr as CustomersService,
  en as DepartmentService,
  Zr as EmployeesService,
  Xr as FarmersService,
  ot as LandHoldingStatus,
  it as LandStatus,
  tn as LevelsService,
  zr as OfficeService,
  st as OfficeType,
  kr as ProductCategoryService,
  vr as ProductClassificationService,
  jr as ProductSubcategoryService,
  Vr as ProductsService,
  Yr as UOMConversionMatrixService,
  Hr as UOMService,
  Wr as VendorCategoryService,
  Kr as VendorSubcategoryService,
  Jr as VendorsService,
  u as adminApiUrlConstants
};
