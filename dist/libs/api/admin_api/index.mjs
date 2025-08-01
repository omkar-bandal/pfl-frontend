const u = {
  //Admin Dashboard
  COUNT_EMPLOYEE: "/admin/dashboard/employee/total-count",
  COUNT_FARMER: "/admin/dashboard/farmer/total-count",
  COUNT_VENDOR: "/admin/dashboard/vender/total-count",
  COUNT_CUSTOMER: "/admin/dashboard/customer/total-count",
  COUNT_PRODUCTS: "/admin/dashboard/product/total-count",
  COUNT_BRANCHES: "/admin/dashboard/branch/total-count",
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
  //Document Details
  GET_ALL_DOCUMENT_DETAILS: "/document-details/",
  CREATE_DOCUMENT_DETAILS: "/document-details/",
  //Employee
  GET_ALL_EMPLOYEES: (r) => {
    if (r) {
      let e = `/employee/?page=${r.page}&limit=${r.limit}`;
      return r.sort && r.sort.length > 0 && (e = e + `&sort=${r.sort}`), e;
    } else
      return "/employee/";
  },
  CREATE_EMPLOYEE: "/employee/",
  GET_AN_EMPLOYEE: "/employee",
  GET_AN_EMPLOYEE_FOR_VIEW: (r) => `/employee/${r}/view`,
  GET_AN_EMPLOYEE_FOR_UPDATE: (r) => `/employee/${r}/update`,
  UPDATE_AN_EMPLOYEE: (r) => `/employee/${r}`,
  DELETE_EMPLOYEE: (r) => `/employee/${r}`,
  UPDATE_EMPLOYEE_STATUS: (r, e) => r && e ? `/employee/status/${r}?status=${e}` : "",
  //Approval Flow
  GET_ALL_APPROVAL_FLOWS: (r, e) => {
    if (e) {
      let t = `/approval-flow/?page=${e.page}&limit=${e.limit}`;
      return r && (t = t + `&type=${r}`), e.sort && e.sort.length > 0 && (t = t + `&sort=${e.sort}`), t;
    } else
      return "/approval-flow/";
  },
  CREATE_APPROVAL_FLOW: "/approval-flow/",
  GET_APPROVAL_FLOW_BY_ID: (r) => `/approval-flow/${r}`,
  UPDATE_APPROVAL_FLOW: (r) => `/approval-flow/${r}`,
  DELETE_APPROVAL_FLOW: (r) => `/approval-flow/${r}`,
  REPLACE_EMPLOYEE: "/approval-flow/replace/user",
  //Customers
  GET_ALL_CUSTOMERS: (r) => {
    if (r) {
      const { limit: e, page: t, sort: n } = r;
      let s = `/customers/?page=${t}&limit=${e}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/customers/";
  },
  POST_CUSTOMER: "/customers/",
  CREATE_CUSTOMER: "/customers/",
  DELETE_CUSTOMER: "/customers/",
  UPDATE_CUSTOMER: "/customers",
  GET_A_CUSTOMER: "/customers",
  GET_CUSTOMER_NAMES: "/customers/names/all",
  GET_CUSTOMER_PARTIAL_DATA: "/customers/partial/all",
  GET_ALL_CUSTOMER_TYPE: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/customerType/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/customerType/";
  },
  CREATE_CUSTOMER_TYPE: "/customerType/",
  UPDATE_CUSTOMER_TYPE: "/customerType",
  GET_A_CUSTOMER_TYPE: "/customerType",
  DELETE_CUSTOMER_TYPE: "/customerType",
  GET_ALL_CUSTOMER_CATEGORY: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/customerCategory/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/customerCategory/";
  },
  CREATE_CUSTOMER_CATEGORY: "/customerCategory/",
  UPDATE_CUSTOMER_CATEGORY: "/customerCategory",
  GET_A_CUSTOMER_CATEGORY: "/customerCategory",
  DELETE_CUSTOMER_CATEGORY: "/customerCategory",
  //Farmers
  GET_ALL_FARMERS: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/farmers/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/farmers/";
  },
  GET_A_FARMER: "/farmers",
  POST_FARMER: "/farmers/",
  CREATE_FARMER: "/farmers/",
  UPDATE_FARMER: "/farmers",
  DELETE_FARMER: "/farmers",
  GET_ALL_FARMERS_FILTERED: "/farmers/filterFarmer/all",
  //Vendors
  GET_ALL_VENDORS: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/vendors/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/vendors/";
  },
  GET_A_VENDOR: "/vendors",
  POST_VENDOR: "/vendors/",
  CREATE_VENDOR: "/vendors/",
  UPDATE_VENDOR: "/vendors",
  DELETE_VENDOR: "/vendors",
  GET_ALL_VENDORS_FILTERED: "/vendors/filterVendor/all",
  GET_ALL_VENDOR_CAT: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/vendor-categories/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/vendor-categories/";
  },
  CREATE_VENDOR_CAT: "/vendor-categories/",
  GET_A_VENDOR_CAT: "/vendor-categories",
  UPDATE_VENDOR_CAT: "/vendor-categories",
  DELETE_VENDOR_CAT: "/vendor-categories",
  GET_ALL_VENDOR_SUBCAT: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/vendor-subcategories/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/vendor-subcategories/";
  },
  CREATE_VENDOR_SUBCAT: "/vendor-subcategories/",
  GET_A_VENDOR_SUBCAT: "/vendor-subcategories",
  UPDATE_VENDOR_SUBCAT: "/vendor-subcategories",
  DELETE_VENDOR_SUBCAT: "/vendor-subcategories",
  GET_VENDOR_SUBCAT_BY_QUERY: "/vendor-subcategories/getSubcategories",
  GET_VENDOR_BY_QUERY: "/vendors/bysearch/getvendors",
  //Prooducts
  GET_ALL_PRODUCTS: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/products/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/products/";
  },
  GET_A_PRODUCTS: "/products",
  CREATE_PRODUCTS: "/products/",
  UPDATE_PRODUCTS: "/products",
  DELETE_PRODUCT: "/products",
  GET_PRODUCTS_PARTIAL: "/products/partial/data",
  GET_ALL_PRODUCT_CATEGORY: (r) => {
    if (r) {
      const { limit: e, page: t, sort: n } = r;
      let s = `/productCategory/?page=${t}&limit=${e}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/productCategory/";
  },
  GET_A_PRODUCT_CATEGORY: "/productCategory",
  CREATE_PRODUCT_CATEGORY: "/productCategory",
  UPDATE_PRODUCT_CATEGORY: "/productCategory",
  DELETE_PRODUCT_CATEGORY: "/productCategory",
  GET_ALL_PRODUCT_SUBCATEGORY: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/productSubcategory/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/productSubcategory/";
  },
  GET_A_PRODUCT_SUBCATEGORY: "/productSubcategory",
  CREATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  UPDATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  DELETE_PRODUCT_SUBCATEGORY: "/productSubcategory",
  GET_ALL_PRODUCT_CLASSIFICATION: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/productClassification/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/productClassification/";
  },
  GET_A_PRODUCT_CLASSIFICATION: "/productClassification",
  CREATE_PRODUCT_CLASSIFICATION: "/productClassification",
  UPDATE_PRODUCT_CLASSIFICATION: "/productClassification",
  DELETE_PRODUCT_CLASSIFICATION: "/productClassification",
  GET_ALL_UOM: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/uoms/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/uoms/";
  },
  CREATE_UOM: "/uoms/",
  GET_A_UOM: "/uoms",
  UPDATE_UOM: "/uoms",
  DELETE_UOM: "/uoms",
  GET_ALL_UOM_CONVERSION: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/uom-conversion-matrix/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/uom-conversion-matrix/";
  },
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
  GET_ALL_OFFICES: (r, e) => {
    if (e) {
      const { page: t, limit: n, sort: s } = e;
      let i = `/location-offices/${r}/?page=${t}&limit=${n}`;
      return s && s.length > 0 && (i = i + `&sort=${s}`), i;
    } else
      return `/location-offices/${r}/`;
  },
  GET_A_OFFICE: "/location-offices",
  CREATE_OFFICE: "/location-offices",
  UPDATE_OFFICE: "/location-offices",
  DELETE_OFFICE: "/location-offices",
  //Branches
  GET_ALL_BRANCHES: (r, e) => {
    if (e) {
      const { page: t, limit: n, sort: s } = e;
      let i = `/location-branches/getall/${r}/?page=${t}&limit=${n}`;
      return s && s.length > 0 && (i = i + `&sort=${s}`), i;
    } else
      return `/location-branches/getall/${r}/`;
  },
  GET_A_BRANCH: "/location-branches",
  CREATE_BRANCH: "/location-branches",
  UPDATE_BRANCH: "/location-branches",
  DELETE_BRANCH: "/location-branches",
  //Packaging Material
  GET_ALL_PACKAGING_MATERIAL: (r) => {
    if (r) {
      const { page: e, limit: t, sort: n } = r;
      let s = `/packingMaterial/?page=${e}&limit=${t}`;
      return n && n.length > 0 && (s = s + `&sort=${n}`), s;
    } else
      return "/packingMaterial/";
  },
  GET_A_PACKAGING_MATERIAL: "/packingMaterial",
  CREATE_PACKAGING_MATERIAL: "/packingMaterial/",
  UPDATE_PACKAGING_MATERIAL: "/packingMaterial",
  DELETE_PACKAGING_MATERIAL: "/packingMaterial"
};
var Qt = /* @__PURE__ */ ((r) => (r[r["collection-center"] = 0] = "collection-center", r[r["distribution-center"] = 1] = "distribution-center", r[r["seasonal-collection-center"] = 2] = "seasonal-collection-center", r[r.warehouse = 3] = "warehouse", r))(Qt || {}), Zt = /* @__PURE__ */ ((r) => (r[r["registered-office"] = 0] = "registered-office", r[r["corporate-office"] = 1] = "corporate-office", r))(Zt || {}), er = /* @__PURE__ */ ((r) => (r.OWNED = "Owned", r.LEASED = "Leased", r.SHARED = "Shared", r.ENCUMBERED = "Encumbered", r))(er || {}), tr = /* @__PURE__ */ ((r) => (r.CULTIVABLE = "Cultivable", r.FALLOW = "Fallow", r.IRRIGATED = "Irrigated", r.NON_IRRIGATED = "Non-Irrigated", r))(tr || {});
function Et(r, e) {
  return function() {
    return r.apply(e, arguments);
  };
}
const { toString: rr } = Object.prototype, { getPrototypeOf: Fe } = Object, he = /* @__PURE__ */ ((r) => (e) => {
  const t = rr.call(e);
  return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), v = (r) => (r = r.toLowerCase(), (e) => he(e) === r), fe = (r) => (e) => typeof e === r, { isArray: Y } = Array, J = fe("undefined");
function nr(r) {
  return r !== null && !J(r) && r.constructor !== null && !J(r.constructor) && P(r.constructor.isBuffer) && r.constructor.isBuffer(r);
}
const _t = v("ArrayBuffer");
function sr(r) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && _t(r.buffer), e;
}
const ir = fe("string"), P = fe("function"), mt = fe("number"), de = (r) => r !== null && typeof r == "object", or = (r) => r === !0 || r === !1, re = (r) => {
  if (he(r) !== "object")
    return !1;
  const e = Fe(r);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
}, ar = v("Date"), cr = v("File"), ur = v("Blob"), lr = v("FileList"), hr = (r) => de(r) && P(r.pipe), fr = (r) => {
  let e;
  return r && (typeof FormData == "function" && r instanceof FormData || P(r.append) && ((e = he(r)) === "formdata" || // detect form-data instance
  e === "object" && P(r.toString) && r.toString() === "[object FormData]"));
}, dr = v("URLSearchParams"), [pr, Er, _r, mr] = ["ReadableStream", "Request", "Response", "Headers"].map(v), gr = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function X(r, e, { allOwnKeys: t = !1 } = {}) {
  if (r === null || typeof r > "u")
    return;
  let n, s;
  if (typeof r != "object" && (r = [r]), Y(r))
    for (n = 0, s = r.length; n < s; n++)
      e.call(null, r[n], n, r);
  else {
    const i = t ? Object.getOwnPropertyNames(r) : Object.keys(r), o = i.length;
    let a;
    for (n = 0; n < o; n++)
      a = i[n], e.call(null, r[a], a, r);
  }
}
function gt(r, e) {
  e = e.toLowerCase();
  const t = Object.keys(r);
  let n = t.length, s;
  for (; n-- > 0; )
    if (s = t[n], e === s.toLowerCase())
      return s;
  return null;
}
const M = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Tt = (r) => !J(r) && r !== M;
function be() {
  const { caseless: r } = Tt(this) && this || {}, e = {}, t = (n, s) => {
    const i = r && gt(e, s) || s;
    re(e[i]) && re(n) ? e[i] = be(e[i], n) : re(n) ? e[i] = be({}, n) : Y(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && X(arguments[n], t);
  return e;
}
const Tr = (r, e, t, { allOwnKeys: n } = {}) => (X(e, (s, i) => {
  t && P(s) ? r[i] = Et(s, t) : r[i] = s;
}, { allOwnKeys: n }), r), yr = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), Ar = (r, e, t, n) => {
  r.prototype = Object.create(e.prototype, n), r.prototype.constructor = r, Object.defineProperty(r, "super", {
    value: e.prototype
  }), t && Object.assign(r.prototype, t);
}, Rr = (r, e, t, n) => {
  let s, i, o;
  const a = {};
  if (e = e || {}, r == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(r), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, r, e)) && !a[o] && (e[o] = r[o], a[o] = !0);
    r = t !== !1 && Fe(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}, Or = (r, e, t) => {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  const n = r.indexOf(e, t);
  return n !== -1 && n === t;
}, Cr = (r) => {
  if (!r) return null;
  if (Y(r)) return r;
  let e = r.length;
  if (!mt(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = r[e];
  return t;
}, br = /* @__PURE__ */ ((r) => (e) => r && e instanceof r)(typeof Uint8Array < "u" && Fe(Uint8Array)), wr = (r, e) => {
  const n = (r && r[Symbol.iterator]).call(r);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    e.call(r, i[0], i[1]);
  }
}, Sr = (r, e) => {
  let t;
  const n = [];
  for (; (t = r.exec(e)) !== null; )
    n.push(t);
  return n;
}, Lr = v("HTMLFormElement"), Dr = (r) => r.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, s) {
    return n.toUpperCase() + s;
  }
), Je = (({ hasOwnProperty: r }) => (e, t) => r.call(e, t))(Object.prototype), Pr = v("RegExp"), yt = (r, e) => {
  const t = Object.getOwnPropertyDescriptors(r), n = {};
  X(t, (s, i) => {
    let o;
    (o = e(s, i, r)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(r, n);
}, Nr = (r) => {
  yt(r, (e, t) => {
    if (P(r) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = r[t];
    if (P(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Ur = (r, e) => {
  const t = {}, n = (s) => {
    s.forEach((i) => {
      t[i] = !0;
    });
  };
  return Y(r) ? n(r) : n(String(r).split(e)), t;
}, vr = () => {
}, Ir = (r, e) => r != null && Number.isFinite(r = +r) ? r : e, ge = "abcdefghijklmnopqrstuvwxyz", Xe = "0123456789", At = {
  DIGIT: Xe,
  ALPHA: ge,
  ALPHA_DIGIT: ge + ge.toUpperCase() + Xe
}, Br = (r = 16, e = At.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = e;
  for (; r--; )
    t += e[Math.random() * n | 0];
  return t;
};
function kr(r) {
  return !!(r && P(r.append) && r[Symbol.toStringTag] === "FormData" && r[Symbol.iterator]);
}
const xr = (r) => {
  const e = new Array(10), t = (n, s) => {
    if (de(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const i = Y(n) ? [] : {};
        return X(n, (o, a) => {
          const f = t(o, s + 1);
          !J(f) && (i[a] = f);
        }), e[s] = void 0, i;
      }
    }
    return n;
  };
  return t(r, 0);
}, Fr = v("AsyncFunction"), $r = (r) => r && (de(r) || P(r)) && P(r.then) && P(r.catch), Rt = ((r, e) => r ? setImmediate : e ? ((t, n) => (M.addEventListener("message", ({ source: s, data: i }) => {
  s === M && i === t && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), M.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  P(M.postMessage)
), Mr = typeof queueMicrotask < "u" ? queueMicrotask.bind(M) : typeof process < "u" && process.nextTick || Rt, c = {
  isArray: Y,
  isArrayBuffer: _t,
  isBuffer: nr,
  isFormData: fr,
  isArrayBufferView: sr,
  isString: ir,
  isNumber: mt,
  isBoolean: or,
  isObject: de,
  isPlainObject: re,
  isReadableStream: pr,
  isRequest: Er,
  isResponse: _r,
  isHeaders: mr,
  isUndefined: J,
  isDate: ar,
  isFile: cr,
  isBlob: ur,
  isRegExp: Pr,
  isFunction: P,
  isStream: hr,
  isURLSearchParams: dr,
  isTypedArray: br,
  isFileList: lr,
  forEach: X,
  merge: be,
  extend: Tr,
  trim: gr,
  stripBOM: yr,
  inherits: Ar,
  toFlatObject: Rr,
  kindOf: he,
  kindOfTest: v,
  endsWith: Or,
  toArray: Cr,
  forEachEntry: wr,
  matchAll: Sr,
  isHTMLForm: Lr,
  hasOwnProperty: Je,
  hasOwnProp: Je,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: yt,
  freezeMethods: Nr,
  toObjectSet: Ur,
  toCamelCase: Dr,
  noop: vr,
  toFiniteNumber: Ir,
  findKey: gt,
  global: M,
  isContextDefined: Tt,
  ALPHABET: At,
  generateString: Br,
  isSpecCompliantForm: kr,
  toJSONObject: xr,
  isAsyncFn: Fr,
  isThenable: $r,
  setImmediate: Rt,
  asap: Mr
};
function _(r, e, t, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
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
const Ot = _.prototype, Ct = {};
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
  Ct[r] = { value: r };
});
Object.defineProperties(_, Ct);
Object.defineProperty(Ot, "isAxiosError", { value: !0 });
_.from = (r, e, t, n, s, i) => {
  const o = Object.create(Ot);
  return c.toFlatObject(r, o, function(f) {
    return f !== Error.prototype;
  }, (a) => a !== "isAxiosError"), _.call(o, r.message, e, t, n, s), o.cause = r, o.name = r.name, i && Object.assign(o, i), o;
};
const Gr = null;
function we(r) {
  return c.isPlainObject(r) || c.isArray(r);
}
function bt(r) {
  return c.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function Qe(r, e, t) {
  return r ? r.concat(e).map(function(s, i) {
    return s = bt(s), !t && i ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function Vr(r) {
  return c.isArray(r) && !r.some(we);
}
const qr = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function pe(r, e, t) {
  if (!c.isObject(r))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = c.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, E) {
    return !c.isUndefined(E[m]);
  });
  const n = t.metaTokens, s = t.visitor || h, i = t.dots, o = t.indexes, f = (t.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(e);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null) return "";
    if (c.isDate(p))
      return p.toISOString();
    if (!f && c.isBlob(p))
      throw new _("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(p) || c.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function h(p, m, E) {
    let A = p;
    if (p && !E && typeof p == "object") {
      if (c.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (c.isArray(p) && Vr(p) || (c.isFileList(p) || c.endsWith(m, "[]")) && (A = c.toArray(p)))
        return m = bt(m), A.forEach(function(w, B) {
          !(c.isUndefined(w) || w === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Qe([m], B, i) : o === null ? m : m + "[]",
            l(w)
          );
        }), !1;
    }
    return we(p) ? !0 : (e.append(Qe(E, m, i), l(p)), !1);
  }
  const d = [], y = Object.assign(qr, {
    defaultVisitor: h,
    convertValue: l,
    isVisitable: we
  });
  function C(p, m) {
    if (!c.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(p), c.forEach(p, function(A, b) {
        (!(c.isUndefined(A) || A === null) && s.call(
          e,
          A,
          c.isString(b) ? b.trim() : b,
          m,
          y
        )) === !0 && C(A, m ? m.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!c.isObject(r))
    throw new TypeError("data must be an object");
  return C(r), e;
}
function Ze(r) {
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
function $e(r, e) {
  this._pairs = [], r && pe(r, this, e);
}
const wt = $e.prototype;
wt.append = function(e, t) {
  this._pairs.push([e, t]);
};
wt.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, Ze);
  } : Ze;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function Yr(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function St(r, e, t) {
  if (!e)
    return r;
  const n = t && t.encode || Yr, s = t && t.serialize;
  let i;
  if (s ? i = s(e, t) : i = c.isURLSearchParams(e) ? e.toString() : new $e(e, t).toString(n), i) {
    const o = r.indexOf("#");
    o !== -1 && (r = r.slice(0, o)), r += (r.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return r;
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
const Lt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Hr = typeof URLSearchParams < "u" ? URLSearchParams : $e, jr = typeof FormData < "u" ? FormData : null, Wr = typeof Blob < "u" ? Blob : null, zr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Hr,
    FormData: jr,
    Blob: Wr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Me = typeof window < "u" && typeof document < "u", Se = typeof navigator == "object" && navigator || void 0, Kr = Me && (!Se || ["ReactNative", "NativeScript", "NS"].indexOf(Se.product) < 0), Jr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Xr = Me && window.location.href || "http://localhost", Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Me,
  hasStandardBrowserEnv: Kr,
  hasStandardBrowserWebWorkerEnv: Jr,
  navigator: Se,
  origin: Xr
}, Symbol.toStringTag, { value: "Module" })), L = {
  ...Qr,
  ...zr
};
function Zr(r, e) {
  return pe(r, new L.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, s, i) {
      return L.isNode && c.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function en(r) {
  return c.matchAll(/\w+|\[(\w*)]/g, r).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function tn(r) {
  const e = {}, t = Object.keys(r);
  let n;
  const s = t.length;
  let i;
  for (n = 0; n < s; n++)
    i = t[n], e[i] = r[i];
  return e;
}
function Dt(r) {
  function e(t, n, s, i) {
    let o = t[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), f = i >= t.length;
    return o = !o && c.isArray(s) ? s.length : o, f ? (c.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !a) : ((!s[o] || !c.isObject(s[o])) && (s[o] = []), e(t, n, s[o], i) && c.isArray(s[o]) && (s[o] = tn(s[o])), !a);
  }
  if (c.isFormData(r) && c.isFunction(r.entries)) {
    const t = {};
    return c.forEachEntry(r, (n, s) => {
      e(en(n), s, t, 0);
    }), t;
  }
  return null;
}
function rn(r, e, t) {
  if (c.isString(r))
    try {
      return (e || JSON.parse)(r), c.trim(r);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(r);
}
const Q = {
  transitional: Lt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", s = n.indexOf("application/json") > -1, i = c.isObject(e);
    if (i && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
      return s ? JSON.stringify(Dt(e)) : e;
    if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e) || c.isReadableStream(e))
      return e;
    if (c.isArrayBufferView(e))
      return e.buffer;
    if (c.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Zr(e, this.formSerializer).toString();
      if ((a = c.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return pe(
          a ? { "files[]": e } : e,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || s ? (t.setContentType("application/json", !1), rn(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || Q.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(e) || c.isReadableStream(e))
      return e;
    if (e && c.isString(e) && (n && !this.responseType || s)) {
      const o = !(t && t.silentJSONParsing) && s;
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
c.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  Q.headers[r] = {};
});
const nn = c.toObjectSet([
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
]), sn = (r) => {
  const e = {};
  let t, n, s;
  return r && r.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!t || e[t] && nn[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, tt = Symbol("internals");
function W(r) {
  return r && String(r).trim().toLowerCase();
}
function ne(r) {
  return r === !1 || r == null ? r : c.isArray(r) ? r.map(ne) : String(r);
}
function on(r) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(r); )
    e[n[1]] = n[2];
  return e;
}
const an = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function Te(r, e, t, n, s) {
  if (c.isFunction(n))
    return n.call(this, e, t);
  if (s && (e = t), !!c.isString(e)) {
    if (c.isString(n))
      return e.indexOf(n) !== -1;
    if (c.isRegExp(n))
      return n.test(e);
  }
}
function cn(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function un(r, e) {
  const t = c.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(r, n + t, {
      value: function(s, i, o) {
        return this[n].call(this, e, s, i, o);
      },
      configurable: !0
    });
  });
}
class D {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const s = this;
    function i(a, f, l) {
      const h = W(f);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const d = c.findKey(s, h);
      (!d || s[d] === void 0 || l === !0 || l === void 0 && s[d] !== !1) && (s[d || f] = ne(a));
    }
    const o = (a, f) => c.forEach(a, (l, h) => i(l, h, f));
    if (c.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (c.isString(e) && (e = e.trim()) && !an(e))
      o(sn(e), t);
    else if (c.isHeaders(e))
      for (const [a, f] of e.entries())
        i(f, a, n);
    else
      e != null && i(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = W(e), e) {
      const n = c.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!t)
          return s;
        if (t === !0)
          return on(s);
        if (c.isFunction(t))
          return t.call(this, s, n);
        if (c.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = W(e), e) {
      const n = c.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || Te(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = W(o), o) {
        const a = c.findKey(n, o);
        a && (!t || Te(n, n[a], a, t)) && (delete n[a], s = !0);
      }
    }
    return c.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, s = !1;
    for (; n--; ) {
      const i = t[n];
      (!e || Te(this, this[i], i, e, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, n = {};
    return c.forEach(this, (s, i) => {
      const o = c.findKey(n, i);
      if (o) {
        t[o] = ne(s), delete t[i];
        return;
      }
      const a = e ? cn(i) : String(i).trim();
      a !== i && delete t[i], t[a] = ne(s), n[a] = !0;
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
    const n = (this[tt] = this[tt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = W(o);
      n[a] || (un(s, o), n[a] = !0);
    }
    return c.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
D.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(D.prototype, ({ value: r }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => r,
    set(n) {
      this[t] = n;
    }
  };
});
c.freezeMethods(D);
function ye(r, e) {
  const t = this || Q, n = e || t, s = D.from(n.headers);
  let i = n.data;
  return c.forEach(r, function(a) {
    i = a.call(t, i, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), i;
}
function Pt(r) {
  return !!(r && r.__CANCEL__);
}
function H(r, e, t) {
  _.call(this, r ?? "canceled", _.ERR_CANCELED, e, t), this.name = "CanceledError";
}
c.inherits(H, _, {
  __CANCEL__: !0
});
function Nt(r, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? r(t) : e(new _(
    "Request failed with status code " + t.status,
    [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function ln(r) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return e && e[1] || "";
}
function hn(r, e) {
  r = r || 10;
  const t = new Array(r), n = new Array(r);
  let s = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(f) {
    const l = Date.now(), h = n[i];
    o || (o = l), t[s] = f, n[s] = l;
    let d = i, y = 0;
    for (; d !== s; )
      y += t[d++], d = d % r;
    if (s = (s + 1) % r, s === i && (i = (i + 1) % r), l - o < e)
      return;
    const C = h && l - h;
    return C ? Math.round(y * 1e3 / C) : void 0;
  };
}
function fn(r, e) {
  let t = 0, n = 1e3 / e, s, i;
  const o = (l, h = Date.now()) => {
    t = h, s = null, i && (clearTimeout(i), i = null), r.apply(null, l);
  };
  return [(...l) => {
    const h = Date.now(), d = h - t;
    d >= n ? o(l, h) : (s = l, i || (i = setTimeout(() => {
      i = null, o(s);
    }, n - d)));
  }, () => s && o(s)];
}
const ue = (r, e, t = 3) => {
  let n = 0;
  const s = hn(50, 250);
  return fn((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, f = o - n, l = s(f), h = o <= a;
    n = o;
    const d = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: f,
      rate: l || void 0,
      estimated: l && a && h ? (a - o) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    r(d);
  }, t);
}, rt = (r, e) => {
  const t = r != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: r,
    loaded: n
  }), e[1]];
}, nt = (r) => (...e) => c.asap(() => r(...e)), dn = L.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = L.navigator && /(msie|trident)/i.test(L.navigator.userAgent), t = document.createElement("a");
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
      const a = c.isString(o) ? s(o) : o;
      return a.protocol === n.protocol && a.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), pn = L.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(r, e, t, n, s, i) {
      const o = [r + "=" + encodeURIComponent(e)];
      c.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), c.isString(n) && o.push("path=" + n), c.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function En(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function _n(r, e) {
  return e ? r.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : r;
}
function Ut(r, e) {
  return r && !En(e) ? _n(r, e) : e;
}
const st = (r) => r instanceof D ? { ...r } : r;
function V(r, e) {
  e = e || {};
  const t = {};
  function n(l, h, d) {
    return c.isPlainObject(l) && c.isPlainObject(h) ? c.merge.call({ caseless: d }, l, h) : c.isPlainObject(h) ? c.merge({}, h) : c.isArray(h) ? h.slice() : h;
  }
  function s(l, h, d) {
    if (c.isUndefined(h)) {
      if (!c.isUndefined(l))
        return n(void 0, l, d);
    } else return n(l, h, d);
  }
  function i(l, h) {
    if (!c.isUndefined(h))
      return n(void 0, h);
  }
  function o(l, h) {
    if (c.isUndefined(h)) {
      if (!c.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, h);
  }
  function a(l, h, d) {
    if (d in e)
      return n(l, h);
    if (d in r)
      return n(void 0, l);
  }
  const f = {
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
    headers: (l, h) => s(st(l), st(h), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, r, e)), function(h) {
    const d = f[h] || s, y = d(r[h], e[h], h);
    c.isUndefined(y) && d !== a || (t[h] = y);
  }), t;
}
const vt = (r) => {
  const e = V({}, r);
  let { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: a } = e;
  e.headers = o = D.from(o), e.url = St(Ut(e.baseURL, e.url), r.params, r.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let f;
  if (c.isFormData(t)) {
    if (L.hasStandardBrowserEnv || L.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((f = o.getContentType()) !== !1) {
      const [l, ...h] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([l || "multipart/form-data", ...h].join("; "));
    }
  }
  if (L.hasStandardBrowserEnv && (n && c.isFunction(n) && (n = n(e)), n || n !== !1 && dn(e.url))) {
    const l = s && i && pn.read(i);
    l && o.set(s, l);
  }
  return e;
}, mn = typeof XMLHttpRequest < "u", gn = mn && function(r) {
  return new Promise(function(t, n) {
    const s = vt(r);
    let i = s.data;
    const o = D.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: f, onDownloadProgress: l } = s, h, d, y, C, p;
    function m() {
      C && C(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(h), s.signal && s.signal.removeEventListener("abort", h);
    }
    let E = new XMLHttpRequest();
    E.open(s.method.toUpperCase(), s.url, !0), E.timeout = s.timeout;
    function A() {
      if (!E)
        return;
      const w = D.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), S = {
        data: !a || a === "text" || a === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: w,
        config: r,
        request: E
      };
      Nt(function($) {
        t($), m();
      }, function($) {
        n($), m();
      }, S), E = null;
    }
    "onloadend" in E ? E.onloadend = A : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, E.onabort = function() {
      E && (n(new _("Request aborted", _.ECONNABORTED, r, E)), E = null);
    }, E.onerror = function() {
      n(new _("Network Error", _.ERR_NETWORK, r, E)), E = null;
    }, E.ontimeout = function() {
      let B = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const S = s.transitional || Lt;
      s.timeoutErrorMessage && (B = s.timeoutErrorMessage), n(new _(
        B,
        S.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
        r,
        E
      )), E = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in E && c.forEach(o.toJSON(), function(B, S) {
      E.setRequestHeader(S, B);
    }), c.isUndefined(s.withCredentials) || (E.withCredentials = !!s.withCredentials), a && a !== "json" && (E.responseType = s.responseType), l && ([y, p] = ue(l, !0), E.addEventListener("progress", y)), f && E.upload && ([d, C] = ue(f), E.upload.addEventListener("progress", d), E.upload.addEventListener("loadend", C)), (s.cancelToken || s.signal) && (h = (w) => {
      E && (n(!w || w.type ? new H(null, r, E) : w), E.abort(), E = null);
    }, s.cancelToken && s.cancelToken.subscribe(h), s.signal && (s.signal.aborted ? h() : s.signal.addEventListener("abort", h)));
    const b = ln(s.url);
    if (b && L.protocols.indexOf(b) === -1) {
      n(new _("Unsupported protocol " + b + ":", _.ERR_BAD_REQUEST, r));
      return;
    }
    E.send(i || null);
  });
}, Tn = (r, e) => {
  const { length: t } = r = r ? r.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), s;
    const i = function(l) {
      if (!s) {
        s = !0, a();
        const h = l instanceof Error ? l : this.reason;
        n.abort(h instanceof _ ? h : new H(h instanceof Error ? h.message : h));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new _(`timeout ${e} of ms exceeded`, _.ETIMEDOUT));
    }, e);
    const a = () => {
      r && (o && clearTimeout(o), o = null, r.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), r = null);
    };
    r.forEach((l) => l.addEventListener("abort", i));
    const { signal: f } = n;
    return f.unsubscribe = () => c.asap(a), f;
  }
}, yn = function* (r, e) {
  let t = r.byteLength;
  if (t < e) {
    yield r;
    return;
  }
  let n = 0, s;
  for (; n < t; )
    s = n + e, yield r.slice(n, s), n = s;
}, An = async function* (r, e) {
  for await (const t of Rn(r))
    yield* yn(t, e);
}, Rn = async function* (r) {
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
}, it = (r, e, t, n) => {
  const s = An(r, e);
  let i = 0, o, a = (f) => {
    o || (o = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: l, value: h } = await s.next();
        if (l) {
          a(), f.close();
          return;
        }
        let d = h.byteLength;
        if (t) {
          let y = i += d;
          t(y);
        }
        f.enqueue(new Uint8Array(h));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(f) {
      return a(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ee = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", It = Ee && typeof ReadableStream == "function", On = Ee && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (e) => r.encode(e))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), Bt = (r, ...e) => {
  try {
    return !!r(...e);
  } catch {
    return !1;
  }
}, Cn = It && Bt(() => {
  let r = !1;
  const e = new Request(L.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return r = !0, "half";
    }
  }).headers.has("Content-Type");
  return r && !e;
}), ot = 64 * 1024, Le = It && Bt(() => c.isReadableStream(new Response("").body)), le = {
  stream: Le && ((r) => r.body)
};
Ee && ((r) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !le[e] && (le[e] = c.isFunction(r[e]) ? (t) => t[e]() : (t, n) => {
      throw new _(`Response type '${e}' is not supported`, _.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const bn = async (r) => {
  if (r == null)
    return 0;
  if (c.isBlob(r))
    return r.size;
  if (c.isSpecCompliantForm(r))
    return (await new Request(L.origin, {
      method: "POST",
      body: r
    }).arrayBuffer()).byteLength;
  if (c.isArrayBufferView(r) || c.isArrayBuffer(r))
    return r.byteLength;
  if (c.isURLSearchParams(r) && (r = r + ""), c.isString(r))
    return (await On(r)).byteLength;
}, wn = async (r, e) => {
  const t = c.toFiniteNumber(r.getContentLength());
  return t ?? bn(e);
}, Sn = Ee && (async (r) => {
  let {
    url: e,
    method: t,
    data: n,
    signal: s,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: f,
    responseType: l,
    headers: h,
    withCredentials: d = "same-origin",
    fetchOptions: y
  } = vt(r);
  l = l ? (l + "").toLowerCase() : "text";
  let C = Tn([s, i && i.toAbortSignal()], o), p;
  const m = C && C.unsubscribe && (() => {
    C.unsubscribe();
  });
  let E;
  try {
    if (f && Cn && t !== "get" && t !== "head" && (E = await wn(h, n)) !== 0) {
      let S = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), k;
      if (c.isFormData(n) && (k = S.headers.get("content-type")) && h.setContentType(k), S.body) {
        const [$, Z] = rt(
          E,
          ue(nt(f))
        );
        n = it(S.body, ot, $, Z);
      }
    }
    c.isString(d) || (d = d ? "include" : "omit");
    const A = "credentials" in Request.prototype;
    p = new Request(e, {
      ...y,
      signal: C,
      method: t.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: A ? d : void 0
    });
    let b = await fetch(p);
    const w = Le && (l === "stream" || l === "response");
    if (Le && (a || w && m)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((Ke) => {
        S[Ke] = b[Ke];
      });
      const k = c.toFiniteNumber(b.headers.get("content-length")), [$, Z] = a && rt(
        k,
        ue(nt(a), !0)
      ) || [];
      b = new Response(
        it(b.body, ot, $, () => {
          Z && Z(), m && m();
        }),
        S
      );
    }
    l = l || "text";
    let B = await le[c.findKey(le, l) || "text"](b, r);
    return !w && m && m(), await new Promise((S, k) => {
      Nt(S, k, {
        data: B,
        headers: D.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: r,
        request: p
      });
    });
  } catch (A) {
    throw m && m(), A && A.name === "TypeError" && /fetch/i.test(A.message) ? Object.assign(
      new _("Network Error", _.ERR_NETWORK, r, p),
      {
        cause: A.cause || A
      }
    ) : _.from(A, A && A.code, r, p);
  }
}), De = {
  http: Gr,
  xhr: gn,
  fetch: Sn
};
c.forEach(De, (r, e) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: e });
    } catch {
    }
    Object.defineProperty(r, "adapterName", { value: e });
  }
});
const at = (r) => `- ${r}`, Ln = (r) => c.isFunction(r) || r === null || r === !1, kt = {
  getAdapter: (r) => {
    r = c.isArray(r) ? r : [r];
    const { length: e } = r;
    let t, n;
    const s = {};
    for (let i = 0; i < e; i++) {
      t = r[i];
      let o;
      if (n = t, !Ln(t) && (n = De[(o = String(t)).toLowerCase()], n === void 0))
        throw new _(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([a, f]) => `adapter ${a} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? i.length > 1 ? `since :
` + i.map(at).join(`
`) : " " + at(i[0]) : "as no adapter specified";
      throw new _(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: De
};
function Ae(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new H(null, r);
}
function ct(r) {
  return Ae(r), r.headers = D.from(r.headers), r.data = ye.call(
    r,
    r.transformRequest
  ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), kt.getAdapter(r.adapter || Q.adapter)(r).then(function(n) {
    return Ae(r), n.data = ye.call(
      r,
      r.transformResponse,
      n
    ), n.headers = D.from(n.headers), n;
  }, function(n) {
    return Pt(n) || (Ae(r), n && n.response && (n.response.data = ye.call(
      r,
      r.transformResponse,
      n.response
    ), n.response.headers = D.from(n.response.headers))), Promise.reject(n);
  });
}
const xt = "1.7.7", Ge = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, e) => {
  Ge[r] = function(n) {
    return typeof n === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
const ut = {};
Ge.transitional = function(e, t, n) {
  function s(i, o) {
    return "[Axios v" + xt + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new _(
        s(o, " has been removed" + (t ? " in " + t : "")),
        _.ERR_DEPRECATED
      );
    return t && !ut[o] && (ut[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
function Dn(r, e, t) {
  if (typeof r != "object")
    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(r);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = e[i];
    if (o) {
      const a = r[i], f = a === void 0 || o(a, i, r);
      if (f !== !0)
        throw new _("option " + i + " must be " + f, _.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new _("Unknown option " + i, _.ERR_BAD_OPTION);
  }
}
const Pe = {
  assertOptions: Dn,
  validators: Ge
}, x = Pe.validators;
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = V(this.defaults, t);
    const { transitional: n, paramsSerializer: s, headers: i } = t;
    n !== void 0 && Pe.assertOptions(n, {
      silentJSONParsing: x.transitional(x.boolean),
      forcedJSONParsing: x.transitional(x.boolean),
      clarifyTimeoutError: x.transitional(x.boolean)
    }, !1), s != null && (c.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : Pe.assertOptions(s, {
      encode: x.function,
      serialize: x.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = i && c.merge(
      i.common,
      i[t.method]
    );
    i && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), t.headers = D.concat(o, i);
    const a = [];
    let f = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(t) === !1 || (f = f && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let h, d = 0, y;
    if (!f) {
      const p = [ct.bind(this), void 0];
      for (p.unshift.apply(p, a), p.push.apply(p, l), y = p.length, h = Promise.resolve(t); d < y; )
        h = h.then(p[d++], p[d++]);
      return h;
    }
    y = a.length;
    let C = t;
    for (d = 0; d < y; ) {
      const p = a[d++], m = a[d++];
      try {
        C = p(C);
      } catch (E) {
        m.call(this, E);
        break;
      }
    }
    try {
      h = ct.call(this, C);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, y = l.length; d < y; )
      h = h.then(l[d++], l[d++]);
    return h;
  }
  getUri(e) {
    e = V(this.defaults, e);
    const t = Ut(e.baseURL, e.url);
    return St(t, e.params, e.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(e) {
  G.prototype[e] = function(t, n) {
    return this.request(V(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(i, o, a) {
      return this.request(V(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  G.prototype[e] = t(), G.prototype[e + "Form"] = t(!0);
});
class Ve {
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
      const o = new Promise((a) => {
        n.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, e(function(i, o, a) {
      n.reason || (n.reason = new H(i, o, a), t(n.reason));
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
      token: new Ve(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function Pn(r) {
  return function(t) {
    return r.apply(null, t);
  };
}
function Nn(r) {
  return c.isObject(r) && r.isAxiosError === !0;
}
const Ne = {
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
Object.entries(Ne).forEach(([r, e]) => {
  Ne[e] = r;
});
function Ft(r) {
  const e = new G(r), t = Et(G.prototype.request, e);
  return c.extend(t, G.prototype, e, { allOwnKeys: !0 }), c.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return Ft(V(r, s));
  }, t;
}
const R = Ft(Q);
R.Axios = G;
R.CanceledError = H;
R.CancelToken = Ve;
R.isCancel = Pt;
R.VERSION = xt;
R.toFormData = pe;
R.AxiosError = _;
R.Cancel = R.CanceledError;
R.all = function(e) {
  return Promise.all(e);
};
R.spread = Pn;
R.isAxiosError = Nn;
R.mergeConfig = V;
R.AxiosHeaders = D;
R.formToJSON = (r) => Dt(c.isHTMLForm(r) ? new FormData(r) : r);
R.getAdapter = kt.getAdapter;
R.HttpStatusCode = Ne;
R.default = R;
const qe = "http://ec2-3-111-34-32.ap-south-1.compute.amazonaws.com", Un = () => R.create({
  baseURL: qe,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class g {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = g.createService();
  }
  static createService() {
    return g._axiosInstance || (g._axiosInstance = Un(), g.setAuthHeaderInterceptor(), g._axiosInstance.interceptors.response.use(g.handleSuccess, g.handleError)), g._axiosInstance;
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
      return (await R.post(`${qe}/auth/refresh-token`, {
        refreshToken: e
      })).data.access_token;
    } catch (e) {
      return Promise.reject(`Unable to refresh access token.+${e}`);
    }
  }
  static setAuthHeaderInterceptor() {
    g._axiosInstance.interceptors.request.use(
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
    g._axiosInstance.interceptors.response.use(
      g.handleSuccess,
      g.handleError
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
        const i = await g.refreshAccessToken();
        return g.setAccessToken(i), t.headers.set("Authorization", `Bearer ${i}`), g._axiosInstance(t);
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
const I = /* @__PURE__ */ Object.create(null);
I.open = "0";
I.close = "1";
I.ping = "2";
I.pong = "3";
I.message = "4";
I.upgrade = "5";
I.noop = "6";
const se = /* @__PURE__ */ Object.create(null);
Object.keys(I).forEach((r) => {
  se[I[r]] = r;
});
const Ue = { type: "error", data: "parser error" }, $t = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Mt = typeof ArrayBuffer == "function", Gt = (r) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer, Ye = ({ type: r, data: e }, t, n) => $t && e instanceof Blob ? t ? n(e) : lt(e, n) : Mt && (e instanceof ArrayBuffer || Gt(e)) ? t ? n(e) : lt(new Blob([e]), n) : n(I[r] + (e || "")), lt = (r, e) => {
  const t = new FileReader();
  return t.onload = function() {
    const n = t.result.split(",")[1];
    e("b" + (n || ""));
  }, t.readAsDataURL(r);
};
function ht(r) {
  return r instanceof Uint8Array ? r : r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
}
let Re;
function vn(r, e) {
  if ($t && r.data instanceof Blob)
    return r.data.arrayBuffer().then(ht).then(e);
  if (Mt && (r.data instanceof ArrayBuffer || Gt(r.data)))
    return e(ht(r.data));
  Ye(r, !1, (t) => {
    Re || (Re = new TextEncoder()), e(Re.encode(t));
  });
}
const ft = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", K = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let r = 0; r < ft.length; r++)
  K[ft.charCodeAt(r)] = r;
const In = (r) => {
  let e = r.length * 0.75, t = r.length, n, s = 0, i, o, a, f;
  r[r.length - 1] === "=" && (e--, r[r.length - 2] === "=" && e--);
  const l = new ArrayBuffer(e), h = new Uint8Array(l);
  for (n = 0; n < t; n += 4)
    i = K[r.charCodeAt(n)], o = K[r.charCodeAt(n + 1)], a = K[r.charCodeAt(n + 2)], f = K[r.charCodeAt(n + 3)], h[s++] = i << 2 | o >> 4, h[s++] = (o & 15) << 4 | a >> 2, h[s++] = (a & 3) << 6 | f & 63;
  return l;
}, Bn = typeof ArrayBuffer == "function", He = (r, e) => {
  if (typeof r != "string")
    return {
      type: "message",
      data: Vt(r, e)
    };
  const t = r.charAt(0);
  return t === "b" ? {
    type: "message",
    data: kn(r.substring(1), e)
  } : se[t] ? r.length > 1 ? {
    type: se[t],
    data: r.substring(1)
  } : {
    type: se[t]
  } : Ue;
}, kn = (r, e) => {
  if (Bn) {
    const t = In(r);
    return Vt(t, e);
  } else
    return { base64: !0, data: r };
}, Vt = (r, e) => {
  switch (e) {
    case "blob":
      return r instanceof Blob ? r : new Blob([r]);
    case "arraybuffer":
    default:
      return r instanceof ArrayBuffer ? r : r.buffer;
  }
}, qt = "", xn = (r, e) => {
  const t = r.length, n = new Array(t);
  let s = 0;
  r.forEach((i, o) => {
    Ye(i, !1, (a) => {
      n[o] = a, ++s === t && e(n.join(qt));
    });
  });
}, Fn = (r, e) => {
  const t = r.split(qt), n = [];
  for (let s = 0; s < t.length; s++) {
    const i = He(t[s], e);
    if (n.push(i), i.type === "error")
      break;
  }
  return n;
};
function $n() {
  return new TransformStream({
    transform(r, e) {
      vn(r, (t) => {
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
let Oe;
function ee(r) {
  return r.reduce((e, t) => e + t.length, 0);
}
function te(r, e) {
  if (r[0].length === e)
    return r.shift();
  const t = new Uint8Array(e);
  let n = 0;
  for (let s = 0; s < e; s++)
    t[s] = r[0][n++], n === r[0].length && (r.shift(), n = 0);
  return r.length && n < r[0].length && (r[0] = r[0].slice(n)), t;
}
function Mn(r, e) {
  Oe || (Oe = new TextDecoder());
  const t = [];
  let n = 0, s = -1, i = !1;
  return new TransformStream({
    transform(o, a) {
      for (t.push(o); ; ) {
        if (n === 0) {
          if (ee(t) < 1)
            break;
          const f = te(t, 1);
          i = (f[0] & 128) === 128, s = f[0] & 127, s < 126 ? n = 3 : s === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (ee(t) < 2)
            break;
          const f = te(t, 2);
          s = new DataView(f.buffer, f.byteOffset, f.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (ee(t) < 8)
            break;
          const f = te(t, 8), l = new DataView(f.buffer, f.byteOffset, f.length), h = l.getUint32(0);
          if (h > Math.pow(2, 21) - 1) {
            a.enqueue(Ue);
            break;
          }
          s = h * Math.pow(2, 32) + l.getUint32(4), n = 3;
        } else {
          if (ee(t) < s)
            break;
          const f = te(t, s);
          a.enqueue(He(i ? f : Oe.decode(f), e)), n = 0;
        }
        if (s === 0 || s > r) {
          a.enqueue(Ue);
          break;
        }
      }
    }
  });
}
const Yt = 4;
function O(r) {
  if (r) return Gn(r);
}
function Gn(r) {
  for (var e in O.prototype)
    r[e] = O.prototype[e];
  return r;
}
O.prototype.on = O.prototype.addEventListener = function(r, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(e), this;
};
O.prototype.once = function(r, e) {
  function t() {
    this.off(r, t), e.apply(this, arguments);
  }
  return t.fn = e, this.on(r, t), this;
};
O.prototype.off = O.prototype.removeListener = O.prototype.removeAllListeners = O.prototype.removeEventListener = function(r, e) {
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
O.prototype.emit = function(r) {
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
O.prototype.emitReserved = O.prototype.emit;
O.prototype.listeners = function(r) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || [];
};
O.prototype.hasListeners = function(r) {
  return !!this.listeners(r).length;
};
const _e = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, t) => t(e, 0), N = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Vn = "arraybuffer";
function Ht(r, ...e) {
  return e.reduce((t, n) => (r.hasOwnProperty(n) && (t[n] = r[n]), t), {});
}
const qn = N.setTimeout, Yn = N.clearTimeout;
function me(r, e) {
  e.useNativeTimers ? (r.setTimeoutFn = qn.bind(N), r.clearTimeoutFn = Yn.bind(N)) : (r.setTimeoutFn = N.setTimeout.bind(N), r.clearTimeoutFn = N.clearTimeout.bind(N));
}
const Hn = 1.33;
function jn(r) {
  return typeof r == "string" ? Wn(r) : Math.ceil((r.byteLength || r.size) * Hn);
}
function Wn(r) {
  let e = 0, t = 0;
  for (let n = 0, s = r.length; n < s; n++)
    e = r.charCodeAt(n), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (n++, t += 4);
  return t;
}
function jt() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function zn(r) {
  let e = "";
  for (let t in r)
    r.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(r[t]));
  return e;
}
function Kn(r) {
  let e = {}, t = r.split("&");
  for (let n = 0, s = t.length; n < s; n++) {
    let i = t[n].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class Jn extends Error {
  constructor(e, t, n) {
    super(e), this.description = t, this.context = n, this.type = "TransportError";
  }
}
class je extends O {
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
  onError(e, t, n) {
    return super.emitReserved("error", new Jn(e, t, n)), this;
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
    const t = He(e, this.socket.binaryType);
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
    const t = zn(e);
    return t.length ? "?" + t : "";
  }
}
class Xn extends je {
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
    Fn(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, xn(e, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = jt()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(e, t);
  }
}
let Wt = !1;
try {
  Wt = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Qn = Wt;
function Zn() {
}
class es extends Xn {
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
let q = class ie extends O {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, t, n) {
    super(), this.createRequest = e, me(this, n), this._opts = n, this._method = n.method || "GET", this._uri = t, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const t = Ht(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
      if (this._xhr.onreadystatechange = Zn, e)
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
q.requestsCount = 0;
q.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", dt);
  else if (typeof addEventListener == "function") {
    const r = "onpagehide" in N ? "pagehide" : "unload";
    addEventListener(r, dt, !1);
  }
}
function dt() {
  for (let r in q.requests)
    q.requests.hasOwnProperty(r) && q.requests[r].abort();
}
const ts = function() {
  const r = zt({
    xdomain: !1
  });
  return r && r.responseType !== null;
}();
class rs extends es {
  constructor(e) {
    super(e);
    const t = e && e.forceBase64;
    this.supportsBinary = ts && !t;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new q(zt, this.uri(), e);
  }
}
function zt(r) {
  const e = r.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Qn))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new N[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Kt = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class ns extends je {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), t = this.opts.protocols, n = Kt ? {} : Ht(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Ye(n, this.supportsBinary, (i) => {
        try {
          this.doWrite(n, i);
        } catch {
        }
        s && _e(() => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = jt()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t);
  }
}
const Ce = N.WebSocket || N.MozWebSocket;
class ss extends ns {
  createSocket(e, t, n) {
    return Kt ? new Ce(e, t, n) : t ? new Ce(e, t) : new Ce(e);
  }
  doWrite(e, t) {
    this.ws.send(t);
  }
}
class is extends je {
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
        const t = Mn(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(t).getReader(), s = $n();
        s.readable.pipeTo(e.writable), this._writer = s.writable.getWriter();
        const i = () => {
          n.read().then(({ done: a, value: f }) => {
            a || (this.onPacket(f), i());
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
      const n = e[t], s = t === e.length - 1;
      this._writer.write(n).then(() => {
        s && _e(() => {
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
const os = {
  websocket: ss,
  webtransport: is,
  polling: rs
}, as = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, cs = [
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
function ve(r) {
  if (r.length > 8e3)
    throw "URI too long";
  const e = r, t = r.indexOf("["), n = r.indexOf("]");
  t != -1 && n != -1 && (r = r.substring(0, t) + r.substring(t, n).replace(/:/g, ";") + r.substring(n, r.length));
  let s = as.exec(r || ""), i = {}, o = 14;
  for (; o--; )
    i[cs[o]] = s[o] || "";
  return t != -1 && n != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = us(i, i.path), i.queryKey = ls(i, i.query), i;
}
function us(r, e) {
  const t = /\/{2,9}/g, n = e.replace(t, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function ls(r, e) {
  const t = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, s, i) {
    s && (t[s] = i);
  }), t;
}
const Ie = typeof addEventListener == "function" && typeof removeEventListener == "function", oe = [];
Ie && addEventListener("offline", () => {
  oe.forEach((r) => r());
}, !1);
class F extends O {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, t) {
    if (super(), this.binaryType = Vn, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (t = e, e = null), e) {
      const n = ve(e);
      t.hostname = n.host, t.secure = n.protocol === "https" || n.protocol === "wss", t.port = n.port, n.query && (t.query = n.query);
    } else t.host && (t.hostname = ve(t.host).host);
    me(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((n) => {
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Kn(this.opts.query)), Ie && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
    t.EIO = Yt, t.transport = e, this.id && (t.sid = this.id);
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
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const s = this.writeBuffer[n].data;
      if (s && (t += jn(s)), n > 0 && t > this._maxPayload)
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Ie && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = oe.indexOf(this._offlineEventListener);
        n !== -1 && oe.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
F.protocol = Yt;
class hs extends F {
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
    F.priorWebsocketSuccess = !1;
    const s = () => {
      n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (d) => {
        if (!n)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            F.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (h(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const y = new Error("probe error");
            y.transport = t.name, this.emitReserved("upgradeError", y);
          }
      }));
    };
    function i() {
      n || (n = !0, h(), t.close(), t = null);
    }
    const o = (d) => {
      const y = new Error("probe error: " + d);
      y.transport = t.name, i(), this.emitReserved("upgradeError", y);
    };
    function a() {
      o("transport closed");
    }
    function f() {
      o("socket closed");
    }
    function l(d) {
      t && d.name !== t.name && i();
    }
    const h = () => {
      t.removeListener("open", s), t.removeListener("error", o), t.removeListener("close", a), this.off("close", f), this.off("upgrading", l);
    };
    t.once("open", s), t.once("error", o), t.once("close", a), this.once("close", f), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
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
let fs = class extends hs {
  constructor(e, t = {}) {
    const n = typeof e == "object" ? e : t;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((s) => os[s]).filter((s) => !!s)), super(e, n);
  }
};
function ds(r, e = "", t) {
  let n = r;
  t = t || typeof location < "u" && location, r == null && (r = t.protocol + "//" + t.host), typeof r == "string" && (r.charAt(0) === "/" && (r.charAt(1) === "/" ? r = t.protocol + r : r = t.host + r), /^(https?|wss?):\/\//.test(r) || (typeof t < "u" ? r = t.protocol + "//" + r : r = "https://" + r), n = ve(r)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + i + ":" + n.port + e, n.href = n.protocol + "://" + i + (t && t.port === n.port ? "" : ":" + n.port), n;
}
const ps = typeof ArrayBuffer == "function", Es = (r) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r.buffer instanceof ArrayBuffer, Jt = Object.prototype.toString, _s = typeof Blob == "function" || typeof Blob < "u" && Jt.call(Blob) === "[object BlobConstructor]", ms = typeof File == "function" || typeof File < "u" && Jt.call(File) === "[object FileConstructor]";
function We(r) {
  return ps && (r instanceof ArrayBuffer || Es(r)) || _s && r instanceof Blob || ms && r instanceof File;
}
function ae(r, e) {
  if (!r || typeof r != "object")
    return !1;
  if (Array.isArray(r)) {
    for (let t = 0, n = r.length; t < n; t++)
      if (ae(r[t]))
        return !0;
    return !1;
  }
  if (We(r))
    return !0;
  if (r.toJSON && typeof r.toJSON == "function" && arguments.length === 1)
    return ae(r.toJSON(), !0);
  for (const t in r)
    if (Object.prototype.hasOwnProperty.call(r, t) && ae(r[t]))
      return !0;
  return !1;
}
function gs(r) {
  const e = [], t = r.data, n = r;
  return n.data = Be(t, e), n.attachments = e.length, { packet: n, buffers: e };
}
function Be(r, e) {
  if (!r)
    return r;
  if (We(r)) {
    const t = { _placeholder: !0, num: e.length };
    return e.push(r), t;
  } else if (Array.isArray(r)) {
    const t = new Array(r.length);
    for (let n = 0; n < r.length; n++)
      t[n] = Be(r[n], e);
    return t;
  } else if (typeof r == "object" && !(r instanceof Date)) {
    const t = {};
    for (const n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = Be(r[n], e));
    return t;
  }
  return r;
}
function Ts(r, e) {
  return r.data = ke(r.data, e), delete r.attachments, r;
}
function ke(r, e) {
  if (!r)
    return r;
  if (r && r._placeholder === !0) {
    if (typeof r.num == "number" && r.num >= 0 && r.num < e.length)
      return e[r.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(r))
    for (let t = 0; t < r.length; t++)
      r[t] = ke(r[t], e);
  else if (typeof r == "object")
    for (const t in r)
      Object.prototype.hasOwnProperty.call(r, t) && (r[t] = ke(r[t], e));
  return r;
}
const ys = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], As = 5;
var T;
(function(r) {
  r[r.CONNECT = 0] = "CONNECT", r[r.DISCONNECT = 1] = "DISCONNECT", r[r.EVENT = 2] = "EVENT", r[r.ACK = 3] = "ACK", r[r.CONNECT_ERROR = 4] = "CONNECT_ERROR", r[r.BINARY_EVENT = 5] = "BINARY_EVENT", r[r.BINARY_ACK = 6] = "BINARY_ACK";
})(T || (T = {}));
class Rs {
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
    return (e.type === T.EVENT || e.type === T.ACK) && ae(e) ? this.encodeAsBinary({
      type: e.type === T.EVENT ? T.BINARY_EVENT : T.BINARY_ACK,
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
    return (e.type === T.BINARY_EVENT || e.type === T.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const t = gs(e), n = this.encodeAsString(t.packet), s = t.buffers;
    return s.unshift(n), s;
  }
}
function pt(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
class ze extends O {
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
      const n = t.type === T.BINARY_EVENT;
      n || t.type === T.BINARY_ACK ? (t.type = n ? T.EVENT : T.ACK, this.reconstructor = new Os(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (We(e) || e.base64)
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
    if (T[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === T.BINARY_EVENT || n.type === T.BINARY_ACK) {
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
      if (ze.isPayloadValid(n.type, i))
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
      case T.CONNECT:
        return pt(t);
      case T.DISCONNECT:
        return t === void 0;
      case T.CONNECT_ERROR:
        return typeof t == "string" || pt(t);
      case T.EVENT:
      case T.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && ys.indexOf(t[0]) === -1);
      case T.ACK:
      case T.BINARY_ACK:
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
class Os {
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
      const t = Ts(this.reconPack, this.buffers);
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
const Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ze,
  Encoder: Rs,
  get PacketType() {
    return T;
  },
  protocol: As
}, Symbol.toStringTag, { value: "Module" }));
function U(r, e, t) {
  return r.on(e, t), function() {
    r.off(e, t);
  };
}
const bs = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Xt extends O {
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
      U(e, "open", this.onopen.bind(this)),
      U(e, "packet", this.onpacket.bind(this)),
      U(e, "error", this.onerror.bind(this)),
      U(e, "close", this.onclose.bind(this))
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
    if (bs.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const o = {
      type: T.EVENT,
      data: t
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const h = this.ids++, d = t.pop();
      this._registerAckCallback(h, d), o.id = h;
    }
    const a = (s = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || s === void 0 ? void 0 : s.writable, f = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (f ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
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
    return new Promise((n, s) => {
      const i = (o, a) => o ? s(o) : n(a);
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
      type: T.CONNECT,
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
        case T.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case T.EVENT:
        case T.BINARY_EVENT:
          this.onevent(e);
          break;
        case T.ACK:
        case T.BINARY_ACK:
          this.onack(e);
          break;
        case T.DISCONNECT:
          this.ondisconnect();
          break;
        case T.CONNECT_ERROR:
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
        type: T.ACK,
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
    return this.connected && this.packet({ type: T.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function j(r) {
  r = r || {}, this.ms = r.min || 100, this.max = r.max || 1e4, this.factor = r.factor || 2, this.jitter = r.jitter > 0 && r.jitter <= 1 ? r.jitter : 0, this.attempts = 0;
}
j.prototype.duration = function() {
  var r = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), t = Math.floor(e * this.jitter * r);
    r = Math.floor(e * 10) & 1 ? r + t : r - t;
  }
  return Math.min(r, this.max) | 0;
};
j.prototype.reset = function() {
  this.attempts = 0;
};
j.prototype.setMin = function(r) {
  this.ms = r;
};
j.prototype.setMax = function(r) {
  this.max = r;
};
j.prototype.setJitter = function(r) {
  this.jitter = r;
};
class xe extends O {
  constructor(e, t) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, me(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new j({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
    const s = t.parser || Cs;
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
    this.engine = new fs(this.uri, this.opts);
    const t = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = U(t, "open", function() {
      n.onopen(), e && e();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = U(t, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, f = this.setTimeoutFn(() => {
        s(), i(new Error("timeout")), t.close();
      }, a);
      this.opts.autoUnref && f.unref(), this.subs.push(() => {
        this.clearTimeoutFn(f);
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
      U(e, "ping", this.onping.bind(this)),
      U(e, "data", this.ondata.bind(this)),
      U(e, "error", this.onerror.bind(this)),
      U(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      U(this.decoder, "decoded", this.ondecoded.bind(this))
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
    let n = this.nsps[e];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Xt(this, e, t), this.nsps[e] = n), n;
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
const z = {};
function ce(r, e) {
  typeof r == "object" && (e = r, r = void 0), e = e || {};
  const t = ds(r, e.path || "/socket.io"), n = t.source, s = t.id, i = t.path, o = z[s] && i in z[s].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let f;
  return a ? f = new xe(n, e) : (z[s] || (z[s] = new xe(n, e)), f = z[s]), t.query && !e.query && (e.query = t.queryKey), f.socket(t.path, e);
}
Object.assign(ce, {
  Manager: xe,
  Socket: Xt,
  io: ce,
  connect: ce
});
ce(qe, {
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
class Ss extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProduct(e) {
    const t = u.CREATE_PRODUCTS;
    return this.postFormData(t, e);
  }
  getAllProducts(e) {
    const t = u.GET_ALL_PRODUCTS(e);
    return this.get(t);
  }
  getProductsPatrialData() {
    const e = u.GET_PRODUCTS_PARTIAL;
    return this.get(e);
  }
  getProductById(e) {
    const t = `${u.GET_A_PRODUCTS}/${e}`;
    return this.get(t);
  }
  updateProduct(e, t) {
    const n = `${u.UPDATE_PRODUCTS}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteProductById(e) {
    const t = `${u.DELETE_PRODUCT}/${e}`;
    return this.delete(t);
  }
}
class Ls extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductClassification(e) {
    const t = u.CREATE_PRODUCT_CLASSIFICATION;
    return this.post(t, e);
  }
  getAllProductClassifications(e) {
    const t = u.GET_ALL_PRODUCT_CLASSIFICATION(e);
    return this.get(t);
  }
  getProductClassificationById(e) {
    const t = `${u.GET_A_PRODUCT_CLASSIFICATION}/${e}`;
    return this.get(t);
  }
  updateProductClassification(e, t) {
    const n = `${u.UPDATE_PRODUCT_CLASSIFICATION}/${e}`;
    return this.patch(n, t);
  }
  deleteProductClassificationById(e) {
    const t = `${u.DELETE_PRODUCT_CLASSIFICATION}/${e}`;
    return this.delete(t);
  }
}
class Ds extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductCategory(e) {
    const t = u.CREATE_PRODUCT_CATEGORY;
    return this.post(t, e);
  }
  getAllProductCategories(e) {
    const t = u.GET_ALL_PRODUCT_CATEGORY(e);
    return this.get(t);
  }
  getProductCategoryById(e) {
    const t = `${u.GET_A_PRODUCT_CATEGORY}/${e}`;
    return this.get(t);
  }
  updateProductCategory(e, t) {
    const n = `${u.UPDATE_PRODUCT_CATEGORY}/${e}`;
    return this.patch(n, t);
  }
  deleteProductCategoryById(e) {
    const t = `${u.DELETE_PRODUCT_CATEGORY}/${e}`;
    return this.delete(t);
  }
}
class Ps extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductSubcategory(e) {
    const t = u.CREATE_PRODUCT_SUBCATEGORY;
    return this.post(t, e);
  }
  getAllProductSubcategories(e) {
    const t = u.GET_ALL_PRODUCT_SUBCATEGORY(e);
    return this.get(t);
  }
  getProductSubcategoryById(e) {
    const t = `${u.GET_A_PRODUCT_SUBCATEGORY}/${e}`;
    return this.get(t);
  }
  updateProductSubcategory(e, t) {
    const n = `${u.UPDATE_PRODUCT_SUBCATEGORY}/${e}`;
    return this.patch(n, t);
  }
  deleteProductSubcategoryById(e) {
    const t = `${u.DELETE_PRODUCT_SUBCATEGORY}/${e}`;
    return this.delete(t);
  }
}
class Ns extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createUOM(e) {
    const t = u.CREATE_UOM;
    return this.post(t, e);
  }
  getAllUOMs(e) {
    const t = u.GET_ALL_UOM(e);
    return this.get(t);
  }
  getUOMById(e) {
    const t = `${u.GET_A_UOM}/${e}`;
    return this.get(t);
  }
  updateUOM(e, t) {
    const n = `${u.UPDATE_UOM}/${e}`;
    return this.patch(n, t);
  }
  deleteUOMById(e) {
    const t = `${u.DELETE_UOM}/${e}`;
    return this.delete(t);
  }
}
class Us extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createUOMConversionMatrix(e) {
    const t = u.CREATE_UOM_CONVERSION;
    return this.post(t, e);
  }
  getAllUOMConversionMatrix(e) {
    const t = u.GET_ALL_UOM_CONVERSION(e);
    return this.get(t);
  }
  getUOMConversionMatrixById(e) {
    const t = `${u.GET_A_UOM_CONVERSION}/${e}`;
    return this.get(t);
  }
  updateUOMConversionMatrix(e, t) {
    const n = `${u.UPDATE_UOM_CONVERSION}/${e}`;
    return this.patch(n, t);
  }
  deleteUOMConversionMatrixById(e) {
    const t = `${u.DELETE_UOM_CONVERSION}/${e}`;
    return this.delete(t);
  }
}
class vs extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createBranch(e, t) {
    const n = `${u.CREATE_BRANCH}/${t}`;
    return this.post(n, e);
  }
  getAllBranches(e, t) {
    const n = u.GET_ALL_BRANCHES(e, t);
    return console.log(n), this.get(n);
  }
  getBranchById(e) {
    const t = `${u.GET_A_BRANCH}/${e}`;
    return this.get(t);
  }
  updateBranch(e, t, n) {
    const s = `${u.UPDATE_BRANCH}/${t}/${e}`;
    return this.patch(s, n);
  }
  deleteBranchById(e, t) {
    const n = `${u.DELETE_BRANCH}/${t}/${e}`;
    return this.delete(n);
  }
}
class Is extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createOffice(e, t) {
    const n = `${u.CREATE_OFFICE}/${t}`;
    return this.post(n, e);
  }
  getAllOffice(e, t) {
    const n = u.GET_ALL_OFFICES(e, t);
    return this.get(n);
  }
  getOfficeById(e, t) {
    const n = `${u.GET_A_OFFICE}/${t}/${e}`;
    return this.get(n);
  }
  updateOffice(e, t, n) {
    const s = `${u.UPDATE_OFFICE}/${t}/${e}`;
    return this.patch(s, n);
  }
  deleteOfficeById(e, t) {
    const n = `${u.DELETE_OFFICE}/${t}/${e}`;
    return this.delete(n);
  }
}
class Bs extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendor(e) {
    const t = u.CREATE_VENDOR;
    return this.postFormData(t, e);
  }
  getAllVendors(e) {
    const t = u.GET_ALL_VENDORS(e);
    return this.get(t);
  }
  getVendorById(e) {
    const t = `${u.GET_A_VENDOR}/${e}`;
    return this.get(t);
  }
  updateVendor(e, t) {
    const n = `${u.UPDATE_VENDOR}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteVendorById(e) {
    const t = `${u.DELETE_VENDOR}/${e}`;
    return this.delete(t);
  }
}
class ks extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendorCategory(e) {
    const t = u.CREATE_VENDOR_CAT;
    return this.post(t, e);
  }
  getAllVendorCategories(e) {
    const t = u.GET_ALL_VENDOR_CAT(e);
    return this.get(t);
  }
  getVendorCategoryById(e) {
    const t = `${u.GET_A_VENDOR_CAT}/${e}`;
    return this.get(t);
  }
  updateVendorCategory(e, t) {
    const n = `${u.UPDATE_VENDOR_CAT}/${e}`;
    return this.patch(n, t);
  }
  deleteVendorCategoryById(e) {
    const t = `${u.DELETE_VENDOR_CAT}/${e}`;
    return this.delete(t);
  }
}
class xs extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendorSubcategory(e) {
    const t = u.CREATE_VENDOR_SUBCAT;
    return this.post(t, e);
  }
  getAllVendorSubcategories(e) {
    const t = u.GET_ALL_VENDOR_SUBCAT(e);
    return this.get(t);
  }
  getVendorSubcategoryById(e) {
    const t = `${u.GET_A_VENDOR_SUBCAT}/${e}`;
    return this.get(t);
  }
  getVendorSubcategoryByQuery(e) {
    const t = `${u.GET_VENDOR_SUBCAT_BY_QUERY}?search=${e}`;
    return this.get(t);
  }
  updateVendorSubcategory(e, t) {
    const n = `${u.UPDATE_VENDOR_SUBCAT}/${e}`;
    return this.patch(n, t);
  }
  deleteProdctSubcategoryById(e) {
    const t = `${u.DELETE_VENDOR_SUBCAT}/${e}`;
    return this.delete(t);
  }
}
class Fs extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createCustomer(e) {
    const t = u.CREATE_CUSTOMER;
    return this.postFormData(t, e);
  }
  getAllCustomers(e) {
    const t = u.GET_ALL_CUSTOMERS(e);
    return this.get(t);
  }
  getCustomerById(e) {
    const t = `${u.GET_A_CUSTOMER}/${e}`;
    return this.get(t);
  }
  updateCustomer(e, t) {
    const n = `${u.UPDATE_CUSTOMER}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteCustomerById(e) {
    const t = `${u.DELETE_CUSTOMER}/${e}`;
    return this.delete(t);
  }
}
class $s extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createCustomerCategory(e) {
    const t = u.CREATE_CUSTOMER_CATEGORY;
    return this.post(t, e);
  }
  getAllCustomerCategories(e) {
    const t = u.GET_ALL_CUSTOMER_CATEGORY(e);
    return this.get(t);
  }
  getCustomerCategoryById(e) {
    const t = `${u.GET_A_CUSTOMER_CATEGORY}/${e}`;
    return this.get(t);
  }
  updateCustomerCategory(e, t) {
    const n = `${u.UPDATE_CUSTOMER_CATEGORY}/${e}`;
    return this.patch(n, t);
  }
  deleteCustomerCategoryById(e) {
    const t = `${u.DELETE_CUSTOMER_CATEGORY}/${e}`;
    return this.delete(t);
  }
}
class Ms extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createCustomerType(e) {
    const t = u.CREATE_CUSTOMER_TYPE;
    return this.post(t, e);
  }
  getAllCustomerCategories(e) {
    const t = u.GET_ALL_CUSTOMER_TYPE(e);
    return this.get(t);
  }
  getCustomerTypeById(e) {
    const t = `${u.GET_A_CUSTOMER_TYPE}/${e}`;
    return this.get(t);
  }
  updateCustomerType(e, t) {
    const n = `${u.UPDATE_CUSTOMER_TYPE}/${e}`;
    return this.patch(n, t);
  }
  deleteCustomerTypeById(e) {
    const t = `${u.DELETE_CUSTOMER_TYPE}/${e}`;
    return this.delete(t);
  }
}
class Gs extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createFarmer(e) {
    const t = u.CREATE_FARMER;
    return this.postFormData(t, e);
  }
  getAllFarmers(e) {
    const t = u.GET_ALL_FARMERS(e);
    return this.get(t);
  }
  getFarmerById(e) {
    const t = `${u.GET_A_FARMER}/${e}`;
    return this.get(t);
  }
  updateFarmer(e, t) {
    const n = `${u.UPDATE_FARMER}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteFarmerById(e) {
    const t = `${u.DELETE_FARMER}/${e}`;
    return this.delete(t);
  }
}
class Vs extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createEmployee(e) {
    const t = u.CREATE_EMPLOYEE;
    return this.post(t, e);
  }
  getAllEmployees(e) {
    const t = u.GET_ALL_EMPLOYEES(e);
    return this.get(t);
  }
  // getEmployeeById(id: string): Promise<ApiBaseState<IEmployee>> {
  //   const url = `${adminApiUrlConstants.GET_AN_EMPLOYEE}/${id}`;
  //   return this.get(url);
  // }
  getEmployeeForView(e) {
    const t = u.GET_AN_EMPLOYEE_FOR_VIEW(e);
    return this.get(t);
  }
  getEmployeeForUpdate(e) {
    const t = u.GET_AN_EMPLOYEE_FOR_UPDATE(e);
    return this.get(t);
  }
  updateEmployee(e, t) {
    const n = u.UPDATE_AN_EMPLOYEE(e);
    return this.patch(n, t);
  }
  updateEmployeeStatus(e, t) {
    const n = u.UPDATE_EMPLOYEE_STATUS(e, t);
    return this.patch(n, { status: t });
  }
  deleteEmployee(e) {
    const t = u.DELETE_EMPLOYEE(e);
    return this.delete(t);
  }
}
class qs extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createDepartment(e) {
    const t = u.CREATE_DEPARTMENT;
    return this.postFormData(t, e);
  }
  getAllDepartments() {
    const e = u.GET_ALL_DEPARTMENT;
    return this.get(e);
  }
  getDepartmentById(e) {
    const t = `${u.GET_DEPARTMENT_BY_ID}/${e}`;
    return this.get(t);
  }
  updateDepartment(e, t) {
    const n = `${u.UPDATE_DEPARTMENT}/${e}`;
    return this.patchFormData(n, t);
  }
  deleteDepartmentById(e) {
    const t = `${u.DELETE_DEPARTMENT}/${e}`;
    return this.delete(t);
  }
}
class Ys extends g {
  static getInstance() {
    return this._instance || this._instance == new this();
  }
  getAllLevels() {
    const e = u.GET_ALL_LEVEL;
    return console.log("Level Url:", e), this.get(e);
  }
  getAllDocumentDetails() {
    const e = u.GET_ALL_DOCUMENT_DETAILS;
    return this.get(e);
  }
  getLevelById(e) {
    const t = `${u.GET_LEVEL_BY_ID}/${e}`;
    return this.get(t);
  }
  createLevel(e) {
    const t = u.CREATE_LEVEL;
    return this.post(t, e);
  }
  createDocumentDetail(e) {
    const t = u.CREATE_DOCUMENT_DETAILS;
    return this.post(t, e);
  }
  updateLevels(e, t) {
    const n = `${u.UPDATE_LEVEL}/${e}`;
    return this.patch(n, t);
  }
  deleteLevel(e) {
    const t = `${u.DELETE_LEVEL}/${e}`;
    return this.delete(t);
  }
}
class Hs extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getDocumentAccessConfig() {
    const e = u.GET_ALL_DOCUMENT_DETAILS;
    return this.get(e);
  }
}
class js extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createPackagingMaterial(e) {
    const t = u.CREATE_PACKAGING_MATERIAL;
    return this.post(t, e);
  }
  getAllPackagingMaterials(e) {
    const t = u.GET_ALL_PACKAGING_MATERIAL(e);
    return console.log(t), this.get(t);
  }
  getPackagingMaterialById(e) {
    const t = `${u.GET_A_PACKAGING_MATERIAL}/${e}`;
    return this.get(t);
  }
  updatePackagingMaterial(e, t) {
    const n = `${u.UPDATE_PACKAGING_MATERIAL}/${e}`;
    return this.patch(n, t);
  }
  deletePackagingMaterialById(e) {
    const t = `${u.DELETE_PACKAGING_MATERIAL}/${e}`;
    return this.delete(t);
  }
}
class Ws extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createApprovalFlow(e) {
    const t = u.CREATE_APPROVAL_FLOW;
    return this.post(t, e);
  }
  getAllApprovalFlows(e, t) {
    const n = u.GET_ALL_APPROVAL_FLOWS(e, t);
    return this.get(n);
  }
  getApprovalFlowById(e) {
    const t = u.GET_APPROVAL_FLOW_BY_ID(e);
    return this.get(t);
  }
  updateApprovalFlow(e, t) {
    const n = u.UPDATE_APPROVAL_FLOW(e);
    return this.patch(n, t);
  }
  deleteApprovalFlow(e) {
    const t = u.DELETE_APPROVAL_FLOW(e);
    return this.delete(t);
  }
  replaceEmployee(e) {
    const t = u.REPLACE_EMPLOYEE;
    return this.post(t, e);
  }
}
class zs extends g {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  getCountOfEmployees() {
    const e = u.COUNT_EMPLOYEE;
    return this.get(e);
  }
  getCountOfFarmers() {
    const e = u.COUNT_FARMER;
    return this.get(e);
  }
  getCountOfVendors() {
    const e = u.COUNT_VENDOR;
    return this.get(e);
  }
  getCountOfCustomers() {
    const e = u.COUNT_CUSTOMER;
    return this.get(e);
  }
  getCountOfProducts() {
    const e = u.COUNT_PRODUCTS;
    return this.get(e);
  }
  getCountOfBranches() {
    const e = u.COUNT_BRANCHES;
    return this.get(e);
  }
}
export {
  zs as AdminDashboardService,
  Ws as ApprovalFlowService,
  vs as BranchService,
  Qt as BranchType,
  $s as CustomerCategoryService,
  Ms as CustomerTypeService,
  Fs as CustomersService,
  qs as DepartmentService,
  Hs as DocumentAccessConfigService,
  Vs as EmployeesService,
  Gs as FarmersService,
  er as LandHoldingStatus,
  tr as LandStatus,
  Ys as LevelsService,
  Is as OfficeService,
  Zt as OfficeType,
  js as PackagingMaterialService,
  Ds as ProductCategoryService,
  Ls as ProductClassificationService,
  Ps as ProductSubcategoryService,
  Ss as ProductsService,
  Us as UOMConversionMatrixService,
  Ns as UOMService,
  ks as VendorCategoryService,
  xs as VendorSubcategoryService,
  Bs as VendorsService,
  u as adminApiUrlConstants
};
