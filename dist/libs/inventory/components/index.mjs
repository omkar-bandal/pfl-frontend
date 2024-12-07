var kv = Object.defineProperty;
var Xd = (e) => {
  throw TypeError(e);
};
var Mv = (e, t, r) => t in e ? kv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var wi = (e, t, r) => Mv(e, typeof t != "symbol" ? t + "" : t, r), Ul = (e, t, r) => t.has(e) || Xd("Cannot " + r);
var A = (e, t, r) => (Ul(e, t, "read from private field"), r ? r.call(e) : t.get(e)), we = (e, t, r) => t.has(e) ? Xd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), he = (e, t, r, n) => (Ul(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Me = (e, t, r) => (Ul(e, t, "access private method"), r);
var js = (e, t, r, n) => ({
  set _(o) {
    he(e, t, o, r);
  },
  get _() {
    return A(e, t, n);
  }
});
import { jsx as R, jsxs as Oe, Fragment as Bl } from "react/jsx-runtime";
import * as T from "react";
import ar, { useImperativeHandle as Fv, useEffect as Dr, createElement as no, Children as ja, createContext as Lv, useRef as bn, useState as jv, useCallback as Ot, useMemo as Tc, forwardRef as um, useContext as dm, useLayoutEffect as qv, Component as Vv, isValidElement as oa, cloneElement as ia } from "react";
import * as Uv from "react-dom";
import qs from "react-dom";
const nF = () => /* @__PURE__ */ R("div", { children: "aqr-create.form" }), oF = () => /* @__PURE__ */ R("div", { children: "Inventory Dashboard" }), iF = () => /* @__PURE__ */ R("div", { children: "Dispatch-Register-Create.form" }), sF = () => /* @__PURE__ */ R("div", { children: "Dump-Register-Create.form" }), aF = () => /* @__PURE__ */ R("div", { children: "EOD-Report-Create.form" });
var Bv = function(t) {
  return zv(t) && !Wv(t);
};
function zv(e) {
  return !!e && typeof e == "object";
}
function Wv(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Kv(e);
}
var Gv = typeof Symbol == "function" && Symbol.for, Hv = Gv ? Symbol.for("react.element") : 60103;
function Kv(e) {
  return e.$$typeof === Hv;
}
function Yv(e) {
  return Array.isArray(e) ? [] : {};
}
function ya(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Hi(Yv(e), e, t) : e;
}
function Qv(e, t, r) {
  return e.concat(t).map(function(n) {
    return ya(n, r);
  });
}
function Xv(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(o) {
    n[o] = ya(e[o], r);
  }), Object.keys(t).forEach(function(o) {
    !r.isMergeableObject(t[o]) || !e[o] ? n[o] = ya(t[o], r) : n[o] = Hi(e[o], t[o], r);
  }), n;
}
function Hi(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Qv, r.isMergeableObject = r.isMergeableObject || Bv;
  var n = Array.isArray(t), o = Array.isArray(e), s = n === o;
  return s ? n ? r.arrayMerge(e, t, r) : Xv(e, t, r) : ya(t, r);
}
Hi.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, o) {
    return Hi(n, o, r);
  }, {});
};
var Cc = Hi, fm = typeof global == "object" && global && global.Object === Object && global, Jv = typeof self == "object" && self && self.Object === Object && self, Zr = fm || Jv || Function("return this")(), An = Zr.Symbol, pm = Object.prototype, Zv = pm.hasOwnProperty, e0 = pm.toString, Ti = An ? An.toStringTag : void 0;
function t0(e) {
  var t = Zv.call(e, Ti), r = e[Ti];
  try {
    e[Ti] = void 0;
    var n = !0;
  } catch {
  }
  var o = e0.call(e);
  return n && (t ? e[Ti] = r : delete e[Ti]), o;
}
var r0 = Object.prototype, n0 = r0.toString;
function o0(e) {
  return n0.call(e);
}
var i0 = "[object Null]", s0 = "[object Undefined]", Jd = An ? An.toStringTag : void 0;
function ho(e) {
  return e == null ? e === void 0 ? s0 : i0 : Jd && Jd in Object(e) ? t0(e) : o0(e);
}
function hm(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Fu = hm(Object.getPrototypeOf, Object);
function mo(e) {
  return e != null && typeof e == "object";
}
var a0 = "[object Object]", l0 = Function.prototype, c0 = Object.prototype, mm = l0.toString, u0 = c0.hasOwnProperty, d0 = mm.call(Object);
function Zd(e) {
  if (!mo(e) || ho(e) != a0)
    return !1;
  var t = Fu(e);
  if (t === null)
    return !0;
  var r = u0.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && mm.call(r) == d0;
}
function f0() {
  this.__data__ = [], this.size = 0;
}
function ym(e, t) {
  return e === t || e !== e && t !== t;
}
function qa(e, t) {
  for (var r = e.length; r--; )
    if (ym(e[r][0], t))
      return r;
  return -1;
}
var p0 = Array.prototype, h0 = p0.splice;
function m0(e) {
  var t = this.__data__, r = qa(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : h0.call(t, r, 1), --this.size, !0;
}
function y0(e) {
  var t = this.__data__, r = qa(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function g0(e) {
  return qa(this.__data__, e) > -1;
}
function b0(e, t) {
  var r = this.__data__, n = qa(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function hn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
hn.prototype.clear = f0;
hn.prototype.delete = m0;
hn.prototype.get = y0;
hn.prototype.has = g0;
hn.prototype.set = b0;
function v0() {
  this.__data__ = new hn(), this.size = 0;
}
function E0(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function S0(e) {
  return this.__data__.get(e);
}
function O0(e) {
  return this.__data__.has(e);
}
function vs(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var w0 = "[object AsyncFunction]", T0 = "[object Function]", C0 = "[object GeneratorFunction]", x0 = "[object Proxy]";
function gm(e) {
  if (!vs(e))
    return !1;
  var t = ho(e);
  return t == T0 || t == C0 || t == w0 || t == x0;
}
var zl = Zr["__core-js_shared__"], ef = function() {
  var e = /[^.]+$/.exec(zl && zl.keys && zl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function R0(e) {
  return !!ef && ef in e;
}
var P0 = Function.prototype, _0 = P0.toString;
function yo(e) {
  if (e != null) {
    try {
      return _0.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var A0 = /[\\^$.*+?()[\]{}|]/g, N0 = /^\[object .+?Constructor\]$/, $0 = Function.prototype, I0 = Object.prototype, D0 = $0.toString, k0 = I0.hasOwnProperty, M0 = RegExp(
  "^" + D0.call(k0).replace(A0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function F0(e) {
  if (!vs(e) || R0(e))
    return !1;
  var t = gm(e) ? M0 : N0;
  return t.test(yo(e));
}
function L0(e, t) {
  return e == null ? void 0 : e[t];
}
function go(e, t) {
  var r = L0(e, t);
  return F0(r) ? r : void 0;
}
var Ki = go(Zr, "Map"), Yi = go(Object, "create");
function j0() {
  this.__data__ = Yi ? Yi(null) : {}, this.size = 0;
}
function q0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var V0 = "__lodash_hash_undefined__", U0 = Object.prototype, B0 = U0.hasOwnProperty;
function z0(e) {
  var t = this.__data__;
  if (Yi) {
    var r = t[e];
    return r === V0 ? void 0 : r;
  }
  return B0.call(t, e) ? t[e] : void 0;
}
var W0 = Object.prototype, G0 = W0.hasOwnProperty;
function H0(e) {
  var t = this.__data__;
  return Yi ? t[e] !== void 0 : G0.call(t, e);
}
var K0 = "__lodash_hash_undefined__";
function Y0(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Yi && t === void 0 ? K0 : t, this;
}
function oo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
oo.prototype.clear = j0;
oo.prototype.delete = q0;
oo.prototype.get = z0;
oo.prototype.has = H0;
oo.prototype.set = Y0;
function Q0() {
  this.size = 0, this.__data__ = {
    hash: new oo(),
    map: new (Ki || hn)(),
    string: new oo()
  };
}
function X0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Va(e, t) {
  var r = e.__data__;
  return X0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function J0(e) {
  var t = Va(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Z0(e) {
  return Va(this, e).get(e);
}
function eE(e) {
  return Va(this, e).has(e);
}
function tE(e, t) {
  var r = Va(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function $n(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
$n.prototype.clear = Q0;
$n.prototype.delete = J0;
$n.prototype.get = Z0;
$n.prototype.has = eE;
$n.prototype.set = tE;
var rE = 200;
function nE(e, t) {
  var r = this.__data__;
  if (r instanceof hn) {
    var n = r.__data__;
    if (!Ki || n.length < rE - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new $n(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function ci(e) {
  var t = this.__data__ = new hn(e);
  this.size = t.size;
}
ci.prototype.clear = v0;
ci.prototype.delete = E0;
ci.prototype.get = S0;
ci.prototype.has = O0;
ci.prototype.set = nE;
function oE(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var tf = function() {
  try {
    var e = go(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function bm(e, t, r) {
  t == "__proto__" && tf ? tf(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var iE = Object.prototype, sE = iE.hasOwnProperty;
function vm(e, t, r) {
  var n = e[t];
  (!(sE.call(e, t) && ym(n, r)) || r === void 0 && !(t in e)) && bm(e, t, r);
}
function Ua(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var s = -1, a = t.length; ++s < a; ) {
    var l = t[s], c = void 0;
    c === void 0 && (c = e[l]), o ? bm(r, l, c) : vm(r, l, c);
  }
  return r;
}
function aE(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var lE = "[object Arguments]";
function rf(e) {
  return mo(e) && ho(e) == lE;
}
var Em = Object.prototype, cE = Em.hasOwnProperty, uE = Em.propertyIsEnumerable, dE = rf(/* @__PURE__ */ function() {
  return arguments;
}()) ? rf : function(e) {
  return mo(e) && cE.call(e, "callee") && !uE.call(e, "callee");
}, Es = Array.isArray;
function Ba(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function fE() {
  return !1;
}
var Sm = typeof exports == "object" && exports && !exports.nodeType && exports, nf = Sm && typeof module == "object" && module && !module.nodeType && module, pE = nf && nf.exports === Sm, of = pE ? Zr.Buffer : void 0, hE = of ? of.isBuffer : void 0, Om = hE || fE, mE = 9007199254740991, yE = /^(?:0|[1-9]\d*)$/;
function gE(e, t) {
  var r = typeof e;
  return t = t ?? mE, !!t && (r == "number" || r != "symbol" && yE.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var bE = 9007199254740991;
function wm(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bE;
}
var vE = "[object Arguments]", EE = "[object Array]", SE = "[object Boolean]", OE = "[object Date]", wE = "[object Error]", TE = "[object Function]", CE = "[object Map]", xE = "[object Number]", RE = "[object Object]", PE = "[object RegExp]", _E = "[object Set]", AE = "[object String]", NE = "[object WeakMap]", $E = "[object ArrayBuffer]", IE = "[object DataView]", DE = "[object Float32Array]", kE = "[object Float64Array]", ME = "[object Int8Array]", FE = "[object Int16Array]", LE = "[object Int32Array]", jE = "[object Uint8Array]", qE = "[object Uint8ClampedArray]", VE = "[object Uint16Array]", UE = "[object Uint32Array]", at = {};
at[DE] = at[kE] = at[ME] = at[FE] = at[LE] = at[jE] = at[qE] = at[VE] = at[UE] = !0;
at[vE] = at[EE] = at[$E] = at[SE] = at[IE] = at[OE] = at[wE] = at[TE] = at[CE] = at[xE] = at[RE] = at[PE] = at[_E] = at[AE] = at[NE] = !1;
function BE(e) {
  return mo(e) && wm(e.length) && !!at[ho(e)];
}
function Lu(e) {
  return function(t) {
    return e(t);
  };
}
var Tm = typeof exports == "object" && exports && !exports.nodeType && exports, qi = Tm && typeof module == "object" && module && !module.nodeType && module, zE = qi && qi.exports === Tm, Wl = zE && fm.process, ei = function() {
  try {
    var e = qi && qi.require && qi.require("util").types;
    return e || Wl && Wl.binding && Wl.binding("util");
  } catch {
  }
}(), sf = ei && ei.isTypedArray, WE = sf ? Lu(sf) : BE, GE = Object.prototype, HE = GE.hasOwnProperty;
function Cm(e, t) {
  var r = Es(e), n = !r && dE(e), o = !r && !n && Om(e), s = !r && !n && !o && WE(e), a = r || n || o || s, l = a ? aE(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || HE.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    gE(u, c))) && l.push(u);
  return l;
}
var KE = Object.prototype;
function ju(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || KE;
  return e === r;
}
var YE = hm(Object.keys, Object), QE = Object.prototype, XE = QE.hasOwnProperty;
function JE(e) {
  if (!ju(e))
    return YE(e);
  var t = [];
  for (var r in Object(e))
    XE.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function xm(e) {
  return e != null && wm(e.length) && !gm(e);
}
function qu(e) {
  return xm(e) ? Cm(e) : JE(e);
}
function ZE(e, t) {
  return e && Ua(t, qu(t), e);
}
function eS(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var tS = Object.prototype, rS = tS.hasOwnProperty;
function nS(e) {
  if (!vs(e))
    return eS(e);
  var t = ju(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !rS.call(e, n)) || r.push(n);
  return r;
}
function Vu(e) {
  return xm(e) ? Cm(e, !0) : nS(e);
}
function oS(e, t) {
  return e && Ua(t, Vu(t), e);
}
var Rm = typeof exports == "object" && exports && !exports.nodeType && exports, af = Rm && typeof module == "object" && module && !module.nodeType && module, iS = af && af.exports === Rm, lf = iS ? Zr.Buffer : void 0, cf = lf ? lf.allocUnsafe : void 0;
function sS(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = cf ? cf(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Pm(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function aS(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[o++] = a);
  }
  return s;
}
function _m() {
  return [];
}
var lS = Object.prototype, cS = lS.propertyIsEnumerable, uf = Object.getOwnPropertySymbols, Uu = uf ? function(e) {
  return e == null ? [] : (e = Object(e), aS(uf(e), function(t) {
    return cS.call(e, t);
  }));
} : _m;
function uS(e, t) {
  return Ua(e, Uu(e), t);
}
function Am(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var dS = Object.getOwnPropertySymbols, Nm = dS ? function(e) {
  for (var t = []; e; )
    Am(t, Uu(e)), e = Fu(e);
  return t;
} : _m;
function fS(e, t) {
  return Ua(e, Nm(e), t);
}
function $m(e, t, r) {
  var n = t(e);
  return Es(e) ? n : Am(n, r(e));
}
function pS(e) {
  return $m(e, qu, Uu);
}
function hS(e) {
  return $m(e, Vu, Nm);
}
var xc = go(Zr, "DataView"), Rc = go(Zr, "Promise"), Pc = go(Zr, "Set"), _c = go(Zr, "WeakMap"), df = "[object Map]", mS = "[object Object]", ff = "[object Promise]", pf = "[object Set]", hf = "[object WeakMap]", mf = "[object DataView]", yS = yo(xc), gS = yo(Ki), bS = yo(Rc), vS = yo(Pc), ES = yo(_c), an = ho;
(xc && an(new xc(new ArrayBuffer(1))) != mf || Ki && an(new Ki()) != df || Rc && an(Rc.resolve()) != ff || Pc && an(new Pc()) != pf || _c && an(new _c()) != hf) && (an = function(e) {
  var t = ho(e), r = t == mS ? e.constructor : void 0, n = r ? yo(r) : "";
  if (n)
    switch (n) {
      case yS:
        return mf;
      case gS:
        return df;
      case bS:
        return ff;
      case vS:
        return pf;
      case ES:
        return hf;
    }
  return t;
});
var SS = Object.prototype, OS = SS.hasOwnProperty;
function wS(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && OS.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var yf = Zr.Uint8Array;
function Bu(e) {
  var t = new e.constructor(e.byteLength);
  return new yf(t).set(new yf(e)), t;
}
function TS(e, t) {
  var r = t ? Bu(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var CS = /\w*$/;
function xS(e) {
  var t = new e.constructor(e.source, CS.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var gf = An ? An.prototype : void 0, bf = gf ? gf.valueOf : void 0;
function RS(e) {
  return bf ? Object(bf.call(e)) : {};
}
function PS(e, t) {
  var r = t ? Bu(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var _S = "[object Boolean]", AS = "[object Date]", NS = "[object Map]", $S = "[object Number]", IS = "[object RegExp]", DS = "[object Set]", kS = "[object String]", MS = "[object Symbol]", FS = "[object ArrayBuffer]", LS = "[object DataView]", jS = "[object Float32Array]", qS = "[object Float64Array]", VS = "[object Int8Array]", US = "[object Int16Array]", BS = "[object Int32Array]", zS = "[object Uint8Array]", WS = "[object Uint8ClampedArray]", GS = "[object Uint16Array]", HS = "[object Uint32Array]";
function KS(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case FS:
      return Bu(e);
    case _S:
    case AS:
      return new n(+e);
    case LS:
      return TS(e, r);
    case jS:
    case qS:
    case VS:
    case US:
    case BS:
    case zS:
    case WS:
    case GS:
    case HS:
      return PS(e, r);
    case NS:
      return new n();
    case $S:
    case kS:
      return new n(e);
    case IS:
      return xS(e);
    case DS:
      return new n();
    case MS:
      return RS(e);
  }
}
var vf = Object.create, YS = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!vs(t))
      return {};
    if (vf)
      return vf(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function QS(e) {
  return typeof e.constructor == "function" && !ju(e) ? YS(Fu(e)) : {};
}
var XS = "[object Map]";
function JS(e) {
  return mo(e) && an(e) == XS;
}
var Ef = ei && ei.isMap, ZS = Ef ? Lu(Ef) : JS, eO = "[object Set]";
function tO(e) {
  return mo(e) && an(e) == eO;
}
var Sf = ei && ei.isSet, rO = Sf ? Lu(Sf) : tO, nO = 1, oO = 2, iO = 4, Im = "[object Arguments]", sO = "[object Array]", aO = "[object Boolean]", lO = "[object Date]", cO = "[object Error]", Dm = "[object Function]", uO = "[object GeneratorFunction]", dO = "[object Map]", fO = "[object Number]", km = "[object Object]", pO = "[object RegExp]", hO = "[object Set]", mO = "[object String]", yO = "[object Symbol]", gO = "[object WeakMap]", bO = "[object ArrayBuffer]", vO = "[object DataView]", EO = "[object Float32Array]", SO = "[object Float64Array]", OO = "[object Int8Array]", wO = "[object Int16Array]", TO = "[object Int32Array]", CO = "[object Uint8Array]", xO = "[object Uint8ClampedArray]", RO = "[object Uint16Array]", PO = "[object Uint32Array]", st = {};
st[Im] = st[sO] = st[bO] = st[vO] = st[aO] = st[lO] = st[EO] = st[SO] = st[OO] = st[wO] = st[TO] = st[dO] = st[fO] = st[km] = st[pO] = st[hO] = st[mO] = st[yO] = st[CO] = st[xO] = st[RO] = st[PO] = !0;
st[cO] = st[Dm] = st[gO] = !1;
function Vi(e, t, r, n, o, s) {
  var a, l = t & nO, c = t & oO, u = t & iO;
  if (a !== void 0)
    return a;
  if (!vs(e))
    return e;
  var d = Es(e);
  if (d) {
    if (a = wS(e), !l)
      return Pm(e, a);
  } else {
    var f = an(e), p = f == Dm || f == uO;
    if (Om(e))
      return sS(e, l);
    if (f == km || f == Im || p && !o) {
      if (a = c || p ? {} : QS(e), !l)
        return c ? fS(e, oS(a, e)) : uS(e, ZE(a, e));
    } else {
      if (!st[f])
        return o ? e : {};
      a = KS(e, f, l);
    }
  }
  s || (s = new ci());
  var m = s.get(e);
  if (m)
    return m;
  s.set(e, a), rO(e) ? e.forEach(function(h) {
    a.add(Vi(h, t, r, h, e, s));
  }) : ZS(e) && e.forEach(function(h, S) {
    a.set(S, Vi(h, t, r, S, e, s));
  });
  var y = u ? c ? hS : pS : c ? Vu : qu, b = d ? void 0 : y(e);
  return oE(b || e, function(h, S) {
    b && (S = h, h = e[S]), vm(a, S, Vi(h, t, r, S, e, s));
  }), a;
}
var _O = 1, AO = 4;
function Ii(e) {
  return Vi(e, _O | AO);
}
var Of = Array.isArray, wf = Object.keys, NO = Object.prototype.hasOwnProperty, $O = typeof Element < "u";
function Ac(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var r = Of(e), n = Of(t), o, s, a;
    if (r && n) {
      if (s = e.length, s != t.length) return !1;
      for (o = s; o-- !== 0; )
        if (!Ac(e[o], t[o])) return !1;
      return !0;
    }
    if (r != n) return !1;
    var l = e instanceof Date, c = t instanceof Date;
    if (l != c) return !1;
    if (l && c) return e.getTime() == t.getTime();
    var u = e instanceof RegExp, d = t instanceof RegExp;
    if (u != d) return !1;
    if (u && d) return e.toString() == t.toString();
    var f = wf(e);
    if (s = f.length, s !== wf(t).length)
      return !1;
    for (o = s; o-- !== 0; )
      if (!NO.call(t, f[o])) return !1;
    if ($O && e instanceof Element && t instanceof Element)
      return e === t;
    for (o = s; o-- !== 0; )
      if (a = f[o], !(a === "_owner" && e.$$typeof) && !Ac(e[a], t[a]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var IO = function(t, r) {
  try {
    return Ac(t, r);
  } catch (n) {
    if (n.message && n.message.match(/stack|recursion/i) || n.number === -2146828260)
      return console.warn("Warning: react-fast-compare does not handle circular references.", n.name, n.message), !1;
    throw n;
  }
};
const On = /* @__PURE__ */ Ba(IO);
var DO = process.env.NODE_ENV === "production";
function Ht(e, t) {
  if (!DO) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var kO = 4;
function Tf(e) {
  return Vi(e, kO);
}
function Mm(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var MO = "[object Symbol]";
function zu(e) {
  return typeof e == "symbol" || mo(e) && ho(e) == MO;
}
var FO = "Expected a function";
function Wu(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(FO);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(o))
      return s.get(o);
    var a = e.apply(this, n);
    return r.cache = s.set(o, a) || s, a;
  };
  return r.cache = new (Wu.Cache || $n)(), r;
}
Wu.Cache = $n;
var LO = 500;
function jO(e) {
  var t = Wu(e, function(n) {
    return r.size === LO && r.clear(), n;
  }), r = t.cache;
  return t;
}
var qO = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, VO = /\\(\\)?/g, UO = jO(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(qO, function(r, n, o, s) {
    t.push(o ? s.replace(VO, "$1") : n || r);
  }), t;
}), BO = 1 / 0;
function zO(e) {
  if (typeof e == "string" || zu(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -BO ? "-0" : t;
}
var WO = 1 / 0, Cf = An ? An.prototype : void 0, xf = Cf ? Cf.toString : void 0;
function Fm(e) {
  if (typeof e == "string")
    return e;
  if (Es(e))
    return Mm(e, Fm) + "";
  if (zu(e))
    return xf ? xf.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -WO ? "-0" : t;
}
function GO(e) {
  return e == null ? "" : Fm(e);
}
function Lm(e) {
  return Es(e) ? Mm(e, zO) : zu(e) ? [e] : Pm(UO(GO(e)));
}
var Nc = { exports: {} }, We = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rf;
function HO() {
  if (Rf) return We;
  Rf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function g(E) {
    if (typeof E == "object" && E !== null) {
      var C = E.$$typeof;
      switch (C) {
        case t:
          switch (E = E.type, E) {
            case c:
            case u:
            case n:
            case s:
            case o:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case d:
                case y:
                case m:
                case a:
                  return E;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function O(E) {
    return g(E) === u;
  }
  return We.AsyncMode = c, We.ConcurrentMode = u, We.ContextConsumer = l, We.ContextProvider = a, We.Element = t, We.ForwardRef = d, We.Fragment = n, We.Lazy = y, We.Memo = m, We.Portal = r, We.Profiler = s, We.StrictMode = o, We.Suspense = f, We.isAsyncMode = function(E) {
    return O(E) || g(E) === c;
  }, We.isConcurrentMode = O, We.isContextConsumer = function(E) {
    return g(E) === l;
  }, We.isContextProvider = function(E) {
    return g(E) === a;
  }, We.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, We.isForwardRef = function(E) {
    return g(E) === d;
  }, We.isFragment = function(E) {
    return g(E) === n;
  }, We.isLazy = function(E) {
    return g(E) === y;
  }, We.isMemo = function(E) {
    return g(E) === m;
  }, We.isPortal = function(E) {
    return g(E) === r;
  }, We.isProfiler = function(E) {
    return g(E) === s;
  }, We.isStrictMode = function(E) {
    return g(E) === o;
  }, We.isSuspense = function(E) {
    return g(E) === f;
  }, We.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === u || E === s || E === o || E === f || E === p || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === m || E.$$typeof === a || E.$$typeof === l || E.$$typeof === d || E.$$typeof === h || E.$$typeof === S || E.$$typeof === w || E.$$typeof === b);
  }, We.typeOf = g, We;
}
var Ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pf;
function KO() {
  return Pf || (Pf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function g(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === u || N === s || N === o || N === f || N === p || typeof N == "object" && N !== null && (N.$$typeof === y || N.$$typeof === m || N.$$typeof === a || N.$$typeof === l || N.$$typeof === d || N.$$typeof === h || N.$$typeof === S || N.$$typeof === w || N.$$typeof === b);
    }
    function O(N) {
      if (typeof N == "object" && N !== null) {
        var ve = N.$$typeof;
        switch (ve) {
          case t:
            var Q = N.type;
            switch (Q) {
              case c:
              case u:
              case n:
              case s:
              case o:
              case f:
                return Q;
              default:
                var me = Q && Q.$$typeof;
                switch (me) {
                  case l:
                  case d:
                  case y:
                  case m:
                  case a:
                    return me;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var E = c, C = u, x = l, P = a, v = t, _ = d, I = n, k = y, W = m, z = r, B = s, L = o, K = f, j = !1;
    function X(N) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(N) || O(N) === c;
    }
    function q(N) {
      return O(N) === u;
    }
    function H(N) {
      return O(N) === l;
    }
    function oe(N) {
      return O(N) === a;
    }
    function te(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function Y(N) {
      return O(N) === d;
    }
    function J(N) {
      return O(N) === n;
    }
    function ae(N) {
      return O(N) === y;
    }
    function ce(N) {
      return O(N) === m;
    }
    function Z(N) {
      return O(N) === r;
    }
    function ie(N) {
      return O(N) === s;
    }
    function re(N) {
      return O(N) === o;
    }
    function fe(N) {
      return O(N) === f;
    }
    Ge.AsyncMode = E, Ge.ConcurrentMode = C, Ge.ContextConsumer = x, Ge.ContextProvider = P, Ge.Element = v, Ge.ForwardRef = _, Ge.Fragment = I, Ge.Lazy = k, Ge.Memo = W, Ge.Portal = z, Ge.Profiler = B, Ge.StrictMode = L, Ge.Suspense = K, Ge.isAsyncMode = X, Ge.isConcurrentMode = q, Ge.isContextConsumer = H, Ge.isContextProvider = oe, Ge.isElement = te, Ge.isForwardRef = Y, Ge.isFragment = J, Ge.isLazy = ae, Ge.isMemo = ce, Ge.isPortal = Z, Ge.isProfiler = ie, Ge.isStrictMode = re, Ge.isSuspense = fe, Ge.isValidElementType = g, Ge.typeOf = O;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? Nc.exports = HO() : Nc.exports = KO();
var YO = Nc.exports, Gu = YO, QO = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, XO = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, JO = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, jm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Hu = {};
Hu[Gu.ForwardRef] = JO;
Hu[Gu.Memo] = jm;
function _f(e) {
  return Gu.isMemo(e) ? jm : Hu[e.$$typeof] || QO;
}
var ZO = Object.defineProperty, ew = Object.getOwnPropertyNames, Af = Object.getOwnPropertySymbols, tw = Object.getOwnPropertyDescriptor, rw = Object.getPrototypeOf, Nf = Object.prototype;
function qm(e, t, r) {
  if (typeof t != "string") {
    if (Nf) {
      var n = rw(t);
      n && n !== Nf && qm(e, n, r);
    }
    var o = ew(t);
    Af && (o = o.concat(Af(t)));
    for (var s = _f(e), a = _f(t), l = 0; l < o.length; ++l) {
      var c = o[l];
      if (!XO[c] && !(r && r[c]) && !(a && a[c]) && !(s && s[c])) {
        var u = tw(t, c);
        try {
          ZO(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var nw = qm;
const ow = /* @__PURE__ */ Ba(nw);
function gt() {
  return gt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gt.apply(this, arguments);
}
function iw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Ku(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function $f(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
var za = /* @__PURE__ */ Lv(void 0);
za.displayName = "FormikContext";
var sw = za.Provider, aw = za.Consumer;
function Vm() {
  var e = dm(za);
  return e || (process.env.NODE_ENV !== "production" ? Ht(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : Ht()), e;
}
var If = function(t) {
  return Array.isArray(t) && t.length === 0;
}, zt = function(t) {
  return typeof t == "function";
}, ui = function(t) {
  return t !== null && typeof t == "object";
}, lw = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Gl = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Um = function(t) {
  return ja.count(t) === 0;
}, Hl = function(t) {
  return ui(t) && zt(t.then);
};
function cw(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Tt(e, t, r, n) {
  n === void 0 && (n = 0);
  for (var o = Lm(t); e && n < o.length; )
    e = e[o[n++]];
  return n !== o.length && !e || e === void 0 ? r : e;
}
function Wr(e, t, r) {
  for (var n = Tf(e), o = n, s = 0, a = Lm(t); s < a.length - 1; s++) {
    var l = a[s], c = Tt(e, a.slice(0, s + 1));
    if (c && (ui(c) || Array.isArray(c)))
      o = o[l] = Tf(c);
    else {
      var u = a[s + 1];
      o = o[l] = lw(u) && Number(u) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : o)[a[s]] === r ? e : (r === void 0 ? delete o[a[s]] : o[a[s]] = r, s === 0 && r === void 0 && delete n[a[s]], n);
}
function Bm(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var o = 0, s = Object.keys(e); o < s.length; o++) {
    var a = s[o], l = e[a];
    ui(l) ? r.get(l) || (r.set(l, !0), n[a] = Array.isArray(l) ? [] : {}, Bm(l, t, r, n[a])) : n[a] = t;
  }
  return n;
}
function uw(e, t) {
  switch (t.type) {
    case "SET_VALUES":
      return gt({}, e, {
        values: t.payload
      });
    case "SET_TOUCHED":
      return gt({}, e, {
        touched: t.payload
      });
    case "SET_ERRORS":
      return On(e.errors, t.payload) ? e : gt({}, e, {
        errors: t.payload
      });
    case "SET_STATUS":
      return gt({}, e, {
        status: t.payload
      });
    case "SET_ISSUBMITTING":
      return gt({}, e, {
        isSubmitting: t.payload
      });
    case "SET_ISVALIDATING":
      return gt({}, e, {
        isValidating: t.payload
      });
    case "SET_FIELD_VALUE":
      return gt({}, e, {
        values: Wr(e.values, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return gt({}, e, {
        touched: Wr(e.touched, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_ERROR":
      return gt({}, e, {
        errors: Wr(e.errors, t.payload.field, t.payload.value)
      });
    case "RESET_FORM":
      return gt({}, e, t.payload);
    case "SET_FORMIK_STATE":
      return t.payload(e);
    case "SUBMIT_ATTEMPT":
      return gt({}, e, {
        touched: Bm(e.values, !0),
        isSubmitting: !0,
        submitCount: e.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return gt({}, e, {
        isSubmitting: !1
      });
    case "SUBMIT_SUCCESS":
      return gt({}, e, {
        isSubmitting: !1
      });
    default:
      return e;
  }
}
var Fn = {}, Vs = {};
function dw(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, o = n === void 0 ? !0 : n, s = e.validateOnMount, a = s === void 0 ? !1 : s, l = e.isInitialValid, c = e.enableReinitialize, u = c === void 0 ? !1 : c, d = e.onSubmit, f = Ku(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), p = gt({
    validateOnChange: r,
    validateOnBlur: o,
    validateOnMount: a,
    onSubmit: d
  }, f), m = bn(p.initialValues), y = bn(p.initialErrors || Fn), b = bn(p.initialTouched || Vs), h = bn(p.initialStatus), S = bn(!1), w = bn({});
  process.env.NODE_ENV !== "production" && Dr(function() {
    typeof l > "u" || (process.env.NODE_ENV !== "production" ? Ht(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : Ht());
  }, []), Dr(function() {
    return S.current = !0, function() {
      S.current = !1;
    };
  }, []);
  var g = jv(0), O = g[1], E = bn({
    values: Ii(p.initialValues),
    errors: Ii(p.initialErrors) || Fn,
    touched: Ii(p.initialTouched) || Vs,
    status: Ii(p.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), C = E.current, x = Ot(function(D) {
    var F = E.current;
    E.current = uw(F, D), F !== E.current && O(function(ee) {
      return ee + 1;
    });
  }, []), P = Ot(function(D, F) {
    return new Promise(function(ee, de) {
      var be = p.validate(D, F);
      be == null ? ee(Fn) : Hl(be) ? be.then(function(Se) {
        ee(Se || Fn);
      }, function(Se) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", Se), de(Se);
      }) : ee(be);
    });
  }, [p.validate]), v = Ot(function(D, F) {
    var ee = p.validationSchema, de = zt(ee) ? ee(F) : ee, be = F && de.validateAt ? de.validateAt(F, D) : hw(D, de);
    return new Promise(function(Se, Te) {
      be.then(function() {
        Se(Fn);
      }, function(Ce) {
        Ce.name === "ValidationError" ? Se(pw(Ce)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", Ce), Te(Ce));
      });
    });
  }, [p.validationSchema]), _ = Ot(function(D, F) {
    return new Promise(function(ee) {
      return ee(w.current[D].validate(F));
    });
  }, []), I = Ot(function(D) {
    var F = Object.keys(w.current).filter(function(de) {
      return zt(w.current[de].validate);
    }), ee = F.length > 0 ? F.map(function(de) {
      return _(de, Tt(D, de));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(ee).then(function(de) {
      return de.reduce(function(be, Se, Te) {
        return Se === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || Se && (be = Wr(be, F[Te], Se)), be;
      }, {});
    });
  }, [_]), k = Ot(function(D) {
    return Promise.all([I(D), p.validationSchema ? v(D) : {}, p.validate ? P(D) : {}]).then(function(F) {
      var ee = F[0], de = F[1], be = F[2], Se = Cc.all([ee, de, be], {
        arrayMerge: mw
      });
      return Se;
    });
  }, [p.validate, p.validationSchema, I, P, v]), W = yr(function(D) {
    return D === void 0 && (D = C.values), x({
      type: "SET_ISVALIDATING",
      payload: !0
    }), k(D).then(function(F) {
      return S.current && (x({
        type: "SET_ISVALIDATING",
        payload: !1
      }), x({
        type: "SET_ERRORS",
        payload: F
      })), F;
    });
  });
  Dr(function() {
    a && S.current === !0 && On(m.current, p.initialValues) && W(m.current);
  }, [a, W]);
  var z = Ot(function(D) {
    var F = D && D.values ? D.values : m.current, ee = D && D.errors ? D.errors : y.current ? y.current : p.initialErrors || {}, de = D && D.touched ? D.touched : b.current ? b.current : p.initialTouched || {}, be = D && D.status ? D.status : h.current ? h.current : p.initialStatus;
    m.current = F, y.current = ee, b.current = de, h.current = be;
    var Se = function() {
      x({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!D && !!D.isSubmitting,
          errors: ee,
          touched: de,
          status: be,
          values: F,
          isValidating: !!D && !!D.isValidating,
          submitCount: D && D.submitCount && typeof D.submitCount == "number" ? D.submitCount : 0
        }
      });
    };
    if (p.onReset) {
      var Te = p.onReset(C.values, ve);
      Hl(Te) ? Te.then(Se) : Se();
    } else
      Se();
  }, [p.initialErrors, p.initialStatus, p.initialTouched, p.onReset]);
  Dr(function() {
    S.current === !0 && !On(m.current, p.initialValues) && u && (m.current = p.initialValues, z(), a && W(m.current));
  }, [u, p.initialValues, z, a, W]), Dr(function() {
    u && S.current === !0 && !On(y.current, p.initialErrors) && (y.current = p.initialErrors || Fn, x({
      type: "SET_ERRORS",
      payload: p.initialErrors || Fn
    }));
  }, [u, p.initialErrors]), Dr(function() {
    u && S.current === !0 && !On(b.current, p.initialTouched) && (b.current = p.initialTouched || Vs, x({
      type: "SET_TOUCHED",
      payload: p.initialTouched || Vs
    }));
  }, [u, p.initialTouched]), Dr(function() {
    u && S.current === !0 && !On(h.current, p.initialStatus) && (h.current = p.initialStatus, x({
      type: "SET_STATUS",
      payload: p.initialStatus
    }));
  }, [u, p.initialStatus, p.initialTouched]);
  var B = yr(function(D) {
    if (w.current[D] && zt(w.current[D].validate)) {
      var F = Tt(C.values, D), ee = w.current[D].validate(F);
      return Hl(ee) ? (x({
        type: "SET_ISVALIDATING",
        payload: !0
      }), ee.then(function(de) {
        return de;
      }).then(function(de) {
        x({
          type: "SET_FIELD_ERROR",
          payload: {
            field: D,
            value: de
          }
        }), x({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (x({
        type: "SET_FIELD_ERROR",
        payload: {
          field: D,
          value: ee
        }
      }), Promise.resolve(ee));
    } else if (p.validationSchema)
      return x({
        type: "SET_ISVALIDATING",
        payload: !0
      }), v(C.values, D).then(function(de) {
        return de;
      }).then(function(de) {
        x({
          type: "SET_FIELD_ERROR",
          payload: {
            field: D,
            value: Tt(de, D)
          }
        }), x({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), L = Ot(function(D, F) {
    var ee = F.validate;
    w.current[D] = {
      validate: ee
    };
  }, []), K = Ot(function(D) {
    delete w.current[D];
  }, []), j = yr(function(D, F) {
    x({
      type: "SET_TOUCHED",
      payload: D
    });
    var ee = F === void 0 ? o : F;
    return ee ? W(C.values) : Promise.resolve();
  }), X = Ot(function(D) {
    x({
      type: "SET_ERRORS",
      payload: D
    });
  }, []), q = yr(function(D, F) {
    var ee = zt(D) ? D(C.values) : D;
    x({
      type: "SET_VALUES",
      payload: ee
    });
    var de = F === void 0 ? r : F;
    return de ? W(ee) : Promise.resolve();
  }), H = Ot(function(D, F) {
    x({
      type: "SET_FIELD_ERROR",
      payload: {
        field: D,
        value: F
      }
    });
  }, []), oe = yr(function(D, F, ee) {
    x({
      type: "SET_FIELD_VALUE",
      payload: {
        field: D,
        value: F
      }
    });
    var de = ee === void 0 ? r : ee;
    return de ? W(Wr(C.values, D, F)) : Promise.resolve();
  }), te = Ot(function(D, F) {
    var ee = F, de = D, be;
    if (!Gl(D)) {
      D.persist && D.persist();
      var Se = D.target ? D.target : D.currentTarget, Te = Se.type, Ce = Se.name, pt = Se.id, $e = Se.value, Dt = Se.checked, hr = Se.outerHTML, kt = Se.options, pe = Se.multiple;
      ee = F || Ce || pt, !ee && process.env.NODE_ENV !== "production" && Df({
        htmlContent: hr,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), de = /number|range/.test(Te) ? (be = parseFloat($e), isNaN(be) ? "" : be) : /checkbox/.test(Te) ? gw(Tt(C.values, ee), Dt, $e) : kt && pe ? yw(kt) : $e;
    }
    ee && oe(ee, de);
  }, [oe, C.values]), Y = yr(function(D) {
    if (Gl(D))
      return function(F) {
        return te(F, D);
      };
    te(D);
  }), J = yr(function(D, F, ee) {
    F === void 0 && (F = !0), x({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: D,
        value: F
      }
    });
    var de = ee === void 0 ? o : ee;
    return de ? W(C.values) : Promise.resolve();
  }), ae = Ot(function(D, F) {
    D.persist && D.persist();
    var ee = D.target, de = ee.name, be = ee.id, Se = ee.outerHTML, Te = F || de || be;
    !Te && process.env.NODE_ENV !== "production" && Df({
      htmlContent: Se,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), J(Te, !0);
  }, [J]), ce = yr(function(D) {
    if (Gl(D))
      return function(F) {
        return ae(F, D);
      };
    ae(D);
  }), Z = Ot(function(D) {
    zt(D) ? x({
      type: "SET_FORMIK_STATE",
      payload: D
    }) : x({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return D;
      }
    });
  }, []), ie = Ot(function(D) {
    x({
      type: "SET_STATUS",
      payload: D
    });
  }, []), re = Ot(function(D) {
    x({
      type: "SET_ISSUBMITTING",
      payload: D
    });
  }, []), fe = yr(function() {
    return x({
      type: "SUBMIT_ATTEMPT"
    }), W().then(function(D) {
      var F = D instanceof Error, ee = !F && Object.keys(D).length === 0;
      if (ee) {
        var de;
        try {
          if (de = Q(), de === void 0)
            return;
        } catch (be) {
          throw be;
        }
        return Promise.resolve(de).then(function(be) {
          return S.current && x({
            type: "SUBMIT_SUCCESS"
          }), be;
        }).catch(function(be) {
          if (S.current)
            throw x({
              type: "SUBMIT_FAILURE"
            }), be;
        });
      } else if (S.current && (x({
        type: "SUBMIT_FAILURE"
      }), F))
        throw D;
    });
  }), N = yr(function(D) {
    if (D && D.preventDefault && zt(D.preventDefault) && D.preventDefault(), D && D.stopPropagation && zt(D.stopPropagation) && D.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var F = cw();
      F !== null && F instanceof HTMLButtonElement && (F.attributes && F.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? Ht(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : Ht()));
    }
    fe().catch(function(ee) {
      console.warn("Warning: An unhandled error was caught from submitForm()", ee);
    });
  }), ve = {
    resetForm: z,
    validateForm: W,
    validateField: B,
    setErrors: X,
    setFieldError: H,
    setFieldTouched: J,
    setFieldValue: oe,
    setStatus: ie,
    setSubmitting: re,
    setTouched: j,
    setValues: q,
    setFormikState: Z,
    submitForm: fe
  }, Q = yr(function() {
    return d(C.values, ve);
  }), me = yr(function(D) {
    D && D.preventDefault && zt(D.preventDefault) && D.preventDefault(), D && D.stopPropagation && zt(D.stopPropagation) && D.stopPropagation(), z();
  }), ue = Ot(function(D) {
    return {
      value: Tt(C.values, D),
      error: Tt(C.errors, D),
      touched: !!Tt(C.touched, D),
      initialValue: Tt(m.current, D),
      initialTouched: !!Tt(b.current, D),
      initialError: Tt(y.current, D)
    };
  }, [C.errors, C.touched, C.values]), dt = Ot(function(D) {
    return {
      setValue: function(ee, de) {
        return oe(D, ee, de);
      },
      setTouched: function(ee, de) {
        return J(D, ee, de);
      },
      setError: function(ee) {
        return H(D, ee);
      }
    };
  }, [oe, J, H]), Ee = Ot(function(D) {
    var F = ui(D), ee = F ? D.name : D, de = Tt(C.values, ee), be = {
      name: ee,
      value: de,
      onChange: Y,
      onBlur: ce
    };
    if (F) {
      var Se = D.type, Te = D.value, Ce = D.as, pt = D.multiple;
      Se === "checkbox" ? Te === void 0 ? be.checked = !!de : (be.checked = !!(Array.isArray(de) && ~de.indexOf(Te)), be.value = Te) : Se === "radio" ? (be.checked = de === Te, be.value = Te) : Ce === "select" && pt && (be.value = be.value || [], be.multiple = !0);
    }
    return be;
  }, [ce, Y, C.values]), qe = Tc(function() {
    return !On(m.current, C.values);
  }, [m.current, C.values]), rt = Tc(function() {
    return typeof l < "u" ? qe ? C.errors && Object.keys(C.errors).length === 0 : l !== !1 && zt(l) ? l(p) : l : C.errors && Object.keys(C.errors).length === 0;
  }, [l, qe, C.errors, p]), Ae = gt({}, C, {
    initialValues: m.current,
    initialErrors: y.current,
    initialTouched: b.current,
    initialStatus: h.current,
    handleBlur: ce,
    handleChange: Y,
    handleReset: me,
    handleSubmit: N,
    resetForm: z,
    setErrors: X,
    setFormikState: Z,
    setFieldTouched: J,
    setFieldValue: oe,
    setFieldError: H,
    setStatus: ie,
    setSubmitting: re,
    setTouched: j,
    setValues: q,
    submitForm: fe,
    validateForm: W,
    validateField: B,
    isValid: rt,
    dirty: qe,
    unregisterField: K,
    registerField: L,
    getFieldProps: Ee,
    getFieldMeta: ue,
    getFieldHelpers: dt,
    validateOnBlur: o,
    validateOnChange: r,
    validateOnMount: a
  });
  return Ae;
}
function fw(e) {
  var t = dw(e), r = e.component, n = e.children, o = e.render, s = e.innerRef;
  return Fv(s, function() {
    return t;
  }), process.env.NODE_ENV !== "production" && Dr(function() {
    e.render && (process.env.NODE_ENV !== "production" ? Ht(!1, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : Ht());
  }, []), no(sw, {
    value: t
  }, r ? no(r, t) : o ? o(t) : n ? zt(n) ? n(t) : Um(n) ? null : ja.only(n) : null);
}
function Df(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function pw(e) {
  var t = {};
  if (e.inner) {
    if (e.inner.length === 0)
      return Wr(t, e.path, e.message);
    for (var o = e.inner, r = Array.isArray(o), n = 0, o = r ? o : o[Symbol.iterator](); ; ) {
      var s;
      if (r) {
        if (n >= o.length) break;
        s = o[n++];
      } else {
        if (n = o.next(), n.done) break;
        s = n.value;
      }
      var a = s;
      Tt(t, a.path) || (t = Wr(t, a.path, a.message));
    }
  }
  return t;
}
function hw(e, t, r, n) {
  r === void 0 && (r = !1);
  var o = $c(e);
  return t[r ? "validateSync" : "validate"](o, {
    abortEarly: !1,
    context: o
  });
}
function $c(e) {
  var t = Array.isArray(e) ? [] : {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      var n = String(r);
      Array.isArray(e[n]) === !0 ? t[n] = e[n].map(function(o) {
        return Array.isArray(o) === !0 || Zd(o) ? $c(o) : o !== "" ? o : void 0;
      }) : Zd(e[n]) ? t[n] = $c(e[n]) : t[n] = e[n] !== "" ? e[n] : void 0;
    }
  return t;
}
function mw(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, a) {
    if (typeof n[a] > "u") {
      var l = r.clone !== !1, c = l && r.isMergeableObject(s);
      n[a] = c ? Cc(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[a] = Cc(e[a], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function yw(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function gw(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], o = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), o = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !o ? n.concat(r) : o ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var bw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? qv : Dr;
function yr(e) {
  var t = bn(e);
  return bw(function() {
    t.current = e;
  }), Ot(function() {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return t.current.apply(void 0, n);
  }, []);
}
function Yu(e) {
  var t = Vm(), r = t.getFieldProps, n = t.getFieldMeta, o = t.getFieldHelpers, s = t.registerField, a = t.unregisterField, l = ui(e), c = l ? e : {
    name: e
  }, u = c.name, d = c.validate;
  Dr(function() {
    return u && s(u, {
      validate: d
    }), function() {
      u && a(u);
    };
  }, [s, a, u, d]), process.env.NODE_ENV !== "production" && (t || (process.env.NODE_ENV !== "production" ? Ht(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : Ht())), u || (process.env.NODE_ENV !== "production" ? Ht(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : Ht());
  var f = Tc(function() {
    return o(u);
  }, [o, u]);
  return [r(c), n(u), f];
}
var vw = /* @__PURE__ */ um(function(e, t) {
  var r = e.action, n = Ku(e, ["action"]), o = r ?? "#", s = Vm(), a = s.handleReset, l = s.handleSubmit;
  return no("form", gt({
    onSubmit: l,
    ref: t,
    onReset: a,
    action: o
  }, n));
});
vw.displayName = "Form";
function Ew(e) {
  var t = function(o) {
    return no(aw, null, function(s) {
      return s || (process.env.NODE_ENV !== "production" ? Ht(!1, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + e.name) : Ht()), no(e, gt({}, o, {
        formik: s
      }));
    });
  }, r = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
  return t.WrappedComponent = e, t.displayName = "FormikConnect(" + r + ")", ow(
    t,
    e
    // cast type to ComponentClass (even if SFC)
  );
}
var Sw = function(t, r, n) {
  var o = io(t), s = o[r];
  return o.splice(r, 1), o.splice(n, 0, s), o;
}, Ow = function(t, r, n) {
  var o = io(t), s = o[r];
  return o[r] = o[n], o[n] = s, o;
}, Kl = function(t, r, n) {
  var o = io(t);
  return o.splice(r, 0, n), o;
}, ww = function(t, r, n) {
  var o = io(t);
  return o[r] = n, o;
}, io = function(t) {
  if (t) {
    if (Array.isArray(t))
      return [].concat(t);
    var r = Object.keys(t).map(function(n) {
      return parseInt(n);
    }).reduce(function(n, o) {
      return o > n ? o : n;
    }, 0);
    return Array.from(gt({}, t, {
      length: r + 1
    }));
  } else return [];
}, kf = function(t, r) {
  var n = typeof t == "function" ? t : r;
  return function(o) {
    if (Array.isArray(o) || ui(o)) {
      var s = io(o);
      return n(s);
    }
    return o;
  };
}, zm = /* @__PURE__ */ function(e) {
  iw(t, e);
  function t(n) {
    var o;
    return o = e.call(this, n) || this, o.updateArrayField = function(s, a, l) {
      var c = o.props, u = c.name, d = c.formik.setFormikState;
      d(function(f) {
        var p = kf(l, s), m = kf(a, s), y = Wr(f.values, u, s(Tt(f.values, u))), b = l ? p(Tt(f.errors, u)) : void 0, h = a ? m(Tt(f.touched, u)) : void 0;
        return If(b) && (b = void 0), If(h) && (h = void 0), gt({}, f, {
          values: y,
          errors: l ? Wr(f.errors, u, b) : f.errors,
          touched: a ? Wr(f.touched, u, h) : f.touched
        });
      });
    }, o.push = function(s) {
      return o.updateArrayField(function(a) {
        return [].concat(io(a), [Ii(s)]);
      }, !1, !1);
    }, o.handlePush = function(s) {
      return function() {
        return o.push(s);
      };
    }, o.swap = function(s, a) {
      return o.updateArrayField(function(l) {
        return Ow(l, s, a);
      }, !0, !0);
    }, o.handleSwap = function(s, a) {
      return function() {
        return o.swap(s, a);
      };
    }, o.move = function(s, a) {
      return o.updateArrayField(function(l) {
        return Sw(l, s, a);
      }, !0, !0);
    }, o.handleMove = function(s, a) {
      return function() {
        return o.move(s, a);
      };
    }, o.insert = function(s, a) {
      return o.updateArrayField(function(l) {
        return Kl(l, s, a);
      }, function(l) {
        return Kl(l, s, null);
      }, function(l) {
        return Kl(l, s, null);
      });
    }, o.handleInsert = function(s, a) {
      return function() {
        return o.insert(s, a);
      };
    }, o.replace = function(s, a) {
      return o.updateArrayField(function(l) {
        return ww(l, s, a);
      }, !1, !1);
    }, o.handleReplace = function(s, a) {
      return function() {
        return o.replace(s, a);
      };
    }, o.unshift = function(s) {
      var a = -1;
      return o.updateArrayField(function(l) {
        var c = l ? [s].concat(l) : [s];
        return a = c.length, c;
      }, function(l) {
        return l ? [null].concat(l) : [null];
      }, function(l) {
        return l ? [null].concat(l) : [null];
      }), a;
    }, o.handleUnshift = function(s) {
      return function() {
        return o.unshift(s);
      };
    }, o.handleRemove = function(s) {
      return function() {
        return o.remove(s);
      };
    }, o.handlePop = function() {
      return function() {
        return o.pop();
      };
    }, o.remove = o.remove.bind($f(o)), o.pop = o.pop.bind($f(o)), o;
  }
  var r = t.prototype;
  return r.componentDidUpdate = function(o) {
    this.props.validateOnChange && this.props.formik.validateOnChange && !On(Tt(o.formik.values, o.name), Tt(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
  }, r.remove = function(o) {
    var s;
    return this.updateArrayField(
      // so this gets call 3 times
      function(a) {
        var l = a ? io(a) : [];
        return s || (s = l[o]), zt(l.splice) && l.splice(o, 1), zt(l.every) && l.every(function(c) {
          return c === void 0;
        }) ? [] : l;
      },
      !0,
      !0
    ), s;
  }, r.pop = function() {
    var o;
    return this.updateArrayField(
      // so this gets call 3 times
      function(s) {
        var a = s.slice();
        return o || (o = a && a.pop && a.pop()), a;
      },
      !0,
      !0
    ), o;
  }, r.render = function() {
    var o = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    }, s = this.props, a = s.component, l = s.render, c = s.children, u = s.name, d = s.formik, f = Ku(d, ["validate", "validationSchema"]), p = gt({}, o, {
      form: f,
      name: u
    });
    return a ? no(a, p) : l ? l(p) : c ? typeof c == "function" ? c(p) : Um(c) ? null : ja.only(c) : null;
  }, t;
}(Vv);
zm.defaultProps = {
  validateOnChange: !0
};
var Tw = /* @__PURE__ */ Ew(zm);
const Cw = () => {
  const e = /* @__PURE__ */ new Date();
  return `${e.getFullYear()}-${(e.getMonth() + 1).toString().padStart(2, "0")}-${e.getDate().toString().padStart(2, "0")}`;
};
function bo(e) {
  this._maxSize = e, this.clear();
}
bo.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
bo.prototype.get = function(e) {
  return this._values[e];
};
bo.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var xw = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Wm = /^\d+$/, Rw = /^\d/, Pw = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, _w = /^\s*(['"]?)(.*?)(\1)\s*$/, Qu = 512, Mf = new bo(Qu), Ff = new bo(Qu), Lf = new bo(Qu), Xn = {
  Cache: bo,
  split: Ic,
  normalizePath: Yl,
  setter: function(e) {
    var t = Yl(e);
    return Ff.get(e) || Ff.set(e, function(n, o) {
      for (var s = 0, a = t.length, l = n; s < a - 1; ) {
        var c = t[s];
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return n;
        l = l[t[s++]];
      }
      l[t[s]] = o;
    });
  },
  getter: function(e, t) {
    var r = Yl(e);
    return Lf.get(e) || Lf.set(e, function(o) {
      for (var s = 0, a = r.length; s < a; )
        if (o != null || !t) o = o[r[s++]];
        else return;
      return o;
    });
  },
  join: function(e) {
    return e.reduce(function(t, r) {
      return t + (Xu(r) || Wm.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    Aw(Array.isArray(e) ? e : Ic(e), t, r);
  }
};
function Yl(e) {
  return Mf.get(e) || Mf.set(
    e,
    Ic(e).map(function(t) {
      return t.replace(_w, "$2");
    })
  );
}
function Ic(e) {
  return e.match(xw) || [""];
}
function Aw(e, t, r) {
  var n = e.length, o, s, a, l;
  for (s = 0; s < n; s++)
    o = e[s], o && (Iw(o) && (o = '"' + o + '"'), l = Xu(o), a = !l && /^\d+$/.test(o), t.call(r, o, l, a, s, e));
}
function Xu(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function Nw(e) {
  return e.match(Rw) && !e.match(Wm);
}
function $w(e) {
  return Pw.test(e);
}
function Iw(e) {
  return !Xu(e) && (Nw(e) || $w(e));
}
const Dw = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, Wa = (e) => e.match(Dw) || [], Ga = (e) => e[0].toUpperCase() + e.slice(1), Ju = (e, t) => Wa(e).join(t).toLowerCase(), Gm = (e) => Wa(e).reduce(
  (t, r) => `${t}${t ? r[0].toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()}`,
  ""
), kw = (e) => Ga(Gm(e)), Mw = (e) => Ju(e, "_"), Fw = (e) => Ju(e, "-"), Lw = (e) => Ga(Ju(e, " ")), jw = (e) => Wa(e).map(Ga).join(" ");
var Ql = {
  words: Wa,
  upperFirst: Ga,
  camelCase: Gm,
  pascalCase: kw,
  snakeCase: Mw,
  kebabCase: Fw,
  sentenceCase: Lw,
  titleCase: jw
}, Zu = { exports: {} };
Zu.exports = function(e) {
  return Hm(qw(e), e);
};
Zu.exports.array = Hm;
function Hm(e, t) {
  var r = e.length, n = new Array(r), o = {}, s = r, a = Vw(t), l = Uw(e);
  for (t.forEach(function(u) {
    if (!l.has(u[0]) || !l.has(u[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    o[s] || c(e[s], s, /* @__PURE__ */ new Set());
  return n;
  function c(u, d, f) {
    if (f.has(u)) {
      var p;
      try {
        p = ", node was:" + JSON.stringify(u);
      } catch {
        p = "";
      }
      throw new Error("Cyclic dependency" + p);
    }
    if (!l.has(u))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(u));
    if (!o[d]) {
      o[d] = !0;
      var m = a.get(u) || /* @__PURE__ */ new Set();
      if (m = Array.from(m), d = m.length) {
        f.add(u);
        do {
          var y = m[--d];
          c(y, l.get(y), f);
        } while (d);
        f.delete(u);
      }
      n[--r] = u;
    }
  }
}
function qw(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var o = e[r];
    t.add(o[0]), t.add(o[1]);
  }
  return Array.from(t);
}
function Vw(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var o = e[r];
    t.has(o[0]) || t.set(o[0], /* @__PURE__ */ new Set()), t.has(o[1]) || t.set(o[1], /* @__PURE__ */ new Set()), t.get(o[0]).add(o[1]);
  }
  return t;
}
function Uw(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var Bw = Zu.exports;
const zw = /* @__PURE__ */ Ba(Bw), Ww = Object.prototype.toString, Gw = Error.prototype.toString, Hw = RegExp.prototype.toString, Kw = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Yw = /^Symbol\((.*)\)(.*)$/;
function Qw(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function jf(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return Qw(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return Kw.call(e).replace(Yw, "Symbol($1)");
  const n = Ww.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Gw.call(e) + "]" : n === "RegExp" ? Hw.call(e) : null;
}
function un(e, t) {
  let r = jf(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, o) {
    let s = jf(this[n], t);
    return s !== null ? s : o;
  }, 2);
}
function Km(e) {
  return e == null ? [] : [].concat(e);
}
let Ym, Qm, Xm, Xw = /\$\{\s*(\w+)\s*\}/g;
Ym = Symbol.toStringTag;
class qf {
  constructor(t, r, n, o) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Ym] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = o, this.errors = [], this.inner = [], Km(t).forEach((s) => {
      if (Wt.isError(s)) {
        this.errors.push(...s.errors);
        const a = s.inner.length ? s.inner : [s];
        this.inner.push(...a);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Qm = Symbol.hasInstance;
Xm = Symbol.toStringTag;
class Wt extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Object.assign({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(Xw, (o, s) => un(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, o, s) {
    const a = new qf(t, r, n, o);
    if (s)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Xm] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, Wt);
  }
  static [Qm](t) {
    return qf[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let kr = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: r,
    originalValue: n
  }) => {
    const o = n != null && n !== r ? ` (cast from the value \`${un(n, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${un(r, !0)}\`` + o : `${e} must match the configured type. The validated value was: \`${un(r, !0)}\`` + o;
  }
}, Ut = {
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
}, vn = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Dc = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, kc = {
  isValue: "${path} field must be ${value}"
}, Mc = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, sa = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Jw = {
  notType: (e) => {
    const {
      path: t,
      value: r,
      spec: n
    } = e, o = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < o) return `${t} tuple value has too few items, expected a length of ${o} but got ${r.length} for value: \`${un(r, !0)}\``;
      if (r.length > o) return `${t} tuple value has too many items, expected a length of ${o} but got ${r.length} for value: \`${un(r, !0)}\``;
    }
    return Wt.formatError(kr.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: kr,
  string: Ut,
  number: vn,
  date: Dc,
  object: Mc,
  array: sa,
  boolean: kc,
  tuple: Jw
});
const Ha = (e) => e && e.__isYupSchema__;
class ga {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: o,
      otherwise: s
    } = r, a = typeof n == "function" ? n : (...l) => l.every((c) => c === n);
    return new ga(t, (l, c) => {
      var u;
      let d = a(...l) ? o : s;
      return (u = d == null ? void 0 : d(c)) != null ? u : c;
    });
  }
  constructor(t, r) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = r;
  }
  resolve(t, r) {
    let n = this.refs.map((s) => (
      // TODO: ? operator here?
      s.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)
    )), o = this.fn(n, t, r);
    if (o === void 0 || // @ts-ignore this can be base
    o === t)
      return t;
    if (!Ha(o)) throw new TypeError("conditions must return a schema object");
    return o.resolve(r);
  }
}
const Us = {
  context: "$",
  value: "."
};
class vo {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Us.context, this.isValue = this.key[0] === Us.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Us.context : this.isValue ? Us.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Xn.getter(this.path, !0), this.map = r.map;
  }
  getValue(t, r, n) {
    let o = this.isContext ? n : this.isValue ? t : r;
    return this.getter && (o = this.getter(o || {})), this.map && (o = this.map(o)), o;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, r) {
    return this.getValue(t, r == null ? void 0 : r.parent, r == null ? void 0 : r.context);
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
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
vo.prototype.__isYupRef = !0;
const Pr = (e) => e == null;
function xo(e) {
  function t({
    value: r,
    path: n = "",
    options: o,
    originalValue: s,
    schema: a
  }, l, c) {
    const {
      name: u,
      test: d,
      params: f,
      message: p,
      skipAbsent: m
    } = e;
    let {
      parent: y,
      context: b,
      abortEarly: h = a.spec.abortEarly,
      disableStackTrace: S = a.spec.disableStackTrace
    } = o;
    function w(I) {
      return vo.isRef(I) ? I.getValue(r, y, b) : I;
    }
    function g(I = {}) {
      const k = Object.assign({
        value: r,
        originalValue: s,
        label: a.spec.label,
        path: I.path || n,
        spec: a.spec,
        disableStackTrace: I.disableStackTrace || S
      }, f, I.params);
      for (const z of Object.keys(k)) k[z] = w(k[z]);
      const W = new Wt(Wt.formatError(I.message || p, k), r, k.path, I.type || u, k.disableStackTrace);
      return W.params = k, W;
    }
    const O = h ? l : c;
    let E = {
      path: n,
      parent: y,
      type: u,
      from: o.from,
      createError: g,
      resolve: w,
      options: o,
      originalValue: s,
      schema: a
    };
    const C = (I) => {
      Wt.isError(I) ? O(I) : I ? c(null) : O(g());
    }, x = (I) => {
      Wt.isError(I) ? O(I) : l(I);
    };
    if (m && Pr(r))
      return C(!0);
    let v;
    try {
      var _;
      if (v = d.call(E, r, E), typeof ((_ = v) == null ? void 0 : _.then) == "function") {
        if (o.sync)
          throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(v).then(C, x);
      }
    } catch (I) {
      x(I);
      return;
    }
    C(v);
  }
  return t.OPTIONS = e, t;
}
function Zw(e, t, r, n = r) {
  let o, s, a;
  return t ? (Xn.forEach(t, (l, c, u) => {
    let d = c ? l.slice(1, l.length - 1) : l;
    e = e.resolve({
      context: n,
      parent: o,
      value: r
    });
    let f = e.type === "tuple", p = u ? parseInt(d, 10) : 0;
    if (e.innerType || f) {
      if (f && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (r && p >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      o = r, r = r && r[p], e = f ? e.spec.types[p] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[d]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);
      o = r, r = r && r[d], e = e.fields[d];
    }
    s = d, a = c ? "[" + l + "]" : "." + l;
  }), {
    schema: e,
    parent: o,
    parentPath: s
  }) : {
    parent: o,
    parentPath: t,
    schema: e
  };
}
class ba extends Set {
  describe() {
    const t = [];
    for (const r of this.values())
      t.push(vo.isRef(r) ? r.describe() : r);
    return t;
  }
  resolveAll(t) {
    let r = [];
    for (const n of this.values())
      r.push(t(n));
    return r;
  }
  clone() {
    return new ba(this.values());
  }
  merge(t, r) {
    const n = this.clone();
    return t.forEach((o) => n.add(o)), r.forEach((o) => n.delete(o)), n;
  }
}
function Fo(e, t = /* @__PURE__ */ new Map()) {
  if (Ha(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date)
    r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp)
    r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let n = 0; n < e.length; n++) r[n] = Fo(e[n], t);
  } else if (e instanceof Map) {
    r = /* @__PURE__ */ new Map(), t.set(e, r);
    for (const [n, o] of e.entries()) r.set(n, Fo(o, t));
  } else if (e instanceof Set) {
    r = /* @__PURE__ */ new Set(), t.set(e, r);
    for (const n of e) r.add(Fo(n, t));
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [n, o] of Object.entries(e)) r[n] = Fo(o, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return r;
}
class Zt {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new ba(), this._blacklist = new ba(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(kr.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t == null ? void 0 : t.spec), this.withMutation((r) => {
      r.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Fo(Object.assign({}, this.spec, t)), r;
  }
  label(t) {
    let r = this.clone();
    return r.spec.label = t, r;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]), r;
  }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let n = t(this);
    return this._mutate = r, n;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let r = this, n = t.clone();
    const o = Object.assign({}, r.spec, n.spec);
    return n.spec = o, n.internalTests = Object.assign({}, r.internalTests, n.internalTests), n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((s) => {
      t.tests.forEach((a) => {
        s.test(a.OPTIONS);
      });
    }), n.transforms = [...r.transforms, ...n.transforms], n;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let n = r.conditions;
      r = r.clone(), r.conditions = [], r = n.reduce((o, s) => s.resolve(o, t), r), r = r.resolve(t);
    }
    return r;
  }
  resolveOptions(t) {
    var r, n, o, s;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (r = t.strict) != null ? r : this.spec.strict,
      abortEarly: (n = t.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (o = t.recursive) != null ? o : this.spec.recursive,
      disableStackTrace: (s = t.disableStackTrace) != null ? s : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, r = {}) {
    let n = this.resolve(Object.assign({
      value: t
    }, r)), o = r.assert === "ignore-optionality", s = n._cast(t, r);
    if (r.assert !== !1 && !n.isType(s)) {
      if (o && Pr(s))
        return s;
      let a = un(t), l = un(s);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
` + (l !== a ? `result of cast: ${l}` : ""));
    }
    return s;
  }
  _cast(t, r) {
    let n = t === void 0 ? t : this.transforms.reduce((o, s) => s.call(this, o, t, this), t);
    return n === void 0 && (n = this.getDefault(r)), n;
  }
  _validate(t, r = {}, n, o) {
    let {
      path: s,
      originalValue: a = t,
      strict: l = this.spec.strict
    } = r, c = t;
    l || (c = this._cast(c, Object.assign({
      assert: !1
    }, r)));
    let u = [];
    for (let d of Object.values(this.internalTests))
      d && u.push(d);
    this.runTests({
      path: s,
      value: c,
      originalValue: a,
      options: r,
      tests: u
    }, n, (d) => {
      if (d.length)
        return o(d, c);
      this.runTests({
        path: s,
        value: c,
        originalValue: a,
        options: r,
        tests: this.tests
      }, n, o);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, r, n) {
    let o = !1, {
      tests: s,
      value: a,
      originalValue: l,
      path: c,
      options: u
    } = t, d = (b) => {
      o || (o = !0, r(b, a));
    }, f = (b) => {
      o || (o = !0, n(b, a));
    }, p = s.length, m = [];
    if (!p) return f([]);
    let y = {
      value: a,
      originalValue: l,
      path: c,
      options: u,
      schema: this
    };
    for (let b = 0; b < s.length; b++) {
      const h = s[b];
      h(y, d, function(w) {
        w && (Array.isArray(w) ? m.push(...w) : m.push(w)), --p <= 0 && f(m);
      });
    }
  }
  asNestedTest({
    key: t,
    index: r,
    parent: n,
    parentPath: o,
    originalParent: s,
    options: a
  }) {
    const l = t ?? r;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const c = typeof l == "number";
    let u = n[l];
    const d = Object.assign({}, a, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: u,
      originalValue: s[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [c ? "index" : "key"]: l,
      path: c || l.includes(".") ? `${o || ""}[${c ? l : `"${l}"`}]` : (o ? `${o}.` : "") + t
    });
    return (f, p, m) => this.resolve(d)._validate(u, d, p, m);
  }
  validate(t, r) {
    var n;
    let o = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : o.spec.disableStackTrace;
    return new Promise((a, l) => o._validate(t, r, (c, u) => {
      Wt.isError(c) && (c.value = u), l(c);
    }, (c, u) => {
      c.length ? l(new Wt(c, u, void 0, void 0, s)) : a(u);
    }));
  }
  validateSync(t, r) {
    var n;
    let o = this.resolve(Object.assign({}, r, {
      value: t
    })), s, a = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : o.spec.disableStackTrace;
    return o._validate(t, Object.assign({}, r, {
      sync: !0
    }), (l, c) => {
      throw Wt.isError(l) && (l.value = c), l;
    }, (l, c) => {
      if (l.length) throw new Wt(l, t, void 0, void 0, a);
      s = c;
    }), s;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (Wt.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (Wt.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : Fo(r);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    });
  }
  nullability(t, r) {
    const n = this.clone({
      nullable: t
    });
    return n.internalTests.nullable = xo({
      message: r,
      name: "nullable",
      test(o) {
        return o === null ? this.schema.spec.nullable : !0;
      }
    }), n;
  }
  optionality(t, r) {
    const n = this.clone({
      optional: t
    });
    return n.internalTests.optionality = xo({
      message: r,
      name: "optionality",
      test(o) {
        return o === void 0 ? this.schema.spec.optional : !0;
      }
    }), n;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = kr.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = kr.notNull) {
    return this.nullability(!1, t);
  }
  required(t = kr.required) {
    return this.clone().withMutation((r) => r.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let r = this.clone();
    return r.transforms.push(t), r;
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
  test(...t) {
    let r;
    if (t.length === 1 ? typeof t[0] == "function" ? r = {
      test: t[0]
    } : r = t[0] : t.length === 2 ? r = {
      name: t[0],
      test: t[1]
    } : r = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, r.message === void 0 && (r.message = kr.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), o = xo(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((a) => !(a.OPTIONS.name === r.name && (s || a.OPTIONS.test === o.OPTIONS.test))), n.tests.push(o), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), o = Km(t).map((s) => new vo(s));
    return o.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new ga(o, r) : ga.fromOptions(o, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r.internalTests.typeError = xo({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(n) {
        return this.schema._typeCheck(n) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), r;
  }
  oneOf(t, r = kr.oneOf) {
    let n = this.clone();
    return t.forEach((o) => {
      n._whitelist.add(o), n._blacklist.delete(o);
    }), n.internalTests.whiteList = xo({
      message: r,
      name: "oneOf",
      skipAbsent: !0,
      test(o) {
        let s = this.schema._whitelist, a = s.resolveAll(this.resolve);
        return a.includes(o) ? !0 : this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: a
          }
        });
      }
    }), n;
  }
  notOneOf(t, r = kr.notOneOf) {
    let n = this.clone();
    return t.forEach((o) => {
      n._blacklist.add(o), n._whitelist.delete(o);
    }), n.internalTests.blacklist = xo({
      message: r,
      name: "notOneOf",
      test(o) {
        let s = this.schema._blacklist, a = s.resolveAll(this.resolve);
        return a.includes(o) ? this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: a
          }
        }) : !0;
      }
    }), n;
  }
  strip(t = !0) {
    let r = this.clone();
    return r.spec.strip = t, r;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), {
      label: n,
      meta: o,
      optional: s,
      nullable: a
    } = r.spec;
    return {
      meta: o,
      label: n,
      optional: s,
      nullable: a,
      default: r.getDefault(t),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.map((c) => ({
        name: c.OPTIONS.name,
        params: c.OPTIONS.params
      })).filter((c, u, d) => d.findIndex((f) => f.name === c.name) === u)
    };
  }
}
Zt.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) Zt.prototype[`${e}At`] = function(t, r, n = {}) {
  const {
    parent: o,
    parentPath: s,
    schema: a
  } = Zw(this, t, r, n.context);
  return a[e](o && o[s], Object.assign({}, n, {
    parent: o,
    path: t
  }));
};
for (const e of ["equals", "is"]) Zt.prototype[e] = Zt.prototype.oneOf;
for (const e of ["not", "nope"]) Zt.prototype[e] = Zt.prototype.notOneOf;
const eT = () => !0;
function Jm(e) {
  return new Zm(e);
}
class Zm extends Zt {
  constructor(t) {
    super(typeof t == "function" ? {
      type: "mixed",
      check: t
    } : Object.assign({
      type: "mixed",
      check: eT
    }, t));
  }
}
Jm.prototype = Zm.prototype;
function ey() {
  return new ty();
}
class ty extends Zt {
  constructor() {
    super({
      type: "boolean",
      check(t) {
        return t instanceof Boolean && (t = t.valueOf()), typeof t == "boolean";
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => {
        if (n.spec.coerce && !n.isType(t)) {
          if (/^(true|1)$/i.test(String(t))) return !0;
          if (/^(false|0)$/i.test(String(t))) return !1;
        }
        return t;
      });
    });
  }
  isTrue(t = kc.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(r) {
        return Pr(r) || r === !0;
      }
    });
  }
  isFalse(t = kc.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(r) {
        return Pr(r) || r === !1;
      }
    });
  }
  default(t) {
    return super.default(t);
  }
  defined(t) {
    return super.defined(t);
  }
  optional() {
    return super.optional();
  }
  required(t) {
    return super.required(t);
  }
  notRequired() {
    return super.notRequired();
  }
  nullable() {
    return super.nullable();
  }
  nonNullable(t) {
    return super.nonNullable(t);
  }
  strip(t) {
    return super.strip(t);
  }
}
ey.prototype = ty.prototype;
const tT = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function rT(e) {
  const t = Fc(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function Fc(e) {
  var t, r;
  const n = tT.exec(e);
  return n ? {
    year: nn(n[1]),
    month: nn(n[2], 1) - 1,
    day: nn(n[3], 1),
    hour: nn(n[4]),
    minute: nn(n[5]),
    second: nn(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      nn(n[7].substring(0, 3))
    ) : 0,
    precision: (t = (r = n[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: nn(n[10]),
    minuteOffset: nn(n[11])
  } : null;
}
function nn(e, t = 0) {
  return Number(e) || t;
}
let nT = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), oT = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), iT = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, sT = "^\\d{4}-\\d{2}-\\d{2}", aT = "\\d{2}:\\d{2}:\\d{2}", lT = "(([+-]\\d{2}(:?\\d{2})?)|Z)", cT = new RegExp(`${sT}T${aT}(\\.\\d+)?${lT}$`), uT = (e) => Pr(e) || e === e.trim(), dT = {}.toString();
function $() {
  return new ry();
}
class ry extends Zt {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => {
        if (!n.spec.coerce || n.isType(t) || Array.isArray(t)) return t;
        const o = t != null && t.toString ? t.toString() : t;
        return o === dT ? t : o;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((r) => r.test({
      message: t || kr.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t));
  }
  length(t, r = Ut.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(t);
      }
    });
  }
  min(t, r = Ut.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = Ut.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(t);
      }
    });
  }
  matches(t, r) {
    let n = !1, o, s;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: o,
      name: s
    } = r : o = r), this.test({
      name: s || "matches",
      message: o || Ut.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (a) => a === "" && n || a.search(t) !== -1
    });
  }
  email(t = Ut.email) {
    return this.matches(nT, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = Ut.url) {
    return this.matches(oT, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = Ut.uuid) {
    return this.matches(iT, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let r = "", n, o;
    return t && (typeof t == "object" ? {
      message: r = "",
      allowOffset: n = !1,
      precision: o = void 0
    } = t : r = t), this.matches(cT, {
      name: "datetime",
      message: r || Ut.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || Ut.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || n) return !0;
        const a = Fc(s);
        return a ? !!a.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || Ut.datetime_precision,
      params: {
        precision: o
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || o == null) return !0;
        const a = Fc(s);
        return a ? a.precision === o : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = Ut.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: uT
    });
  }
  lowercase(t = Ut.lowercase) {
    return this.transform((r) => Pr(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Pr(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = Ut.uppercase) {
    return this.transform((r) => Pr(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Pr(r) || r === r.toUpperCase()
    });
  }
}
$.prototype = ry.prototype;
let fT = (e) => e != +e;
function $t() {
  return new ny();
}
class ny extends Zt {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !fT(t);
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => {
        if (!n.spec.coerce) return t;
        let o = t;
        if (typeof o == "string") {
          if (o = o.replace(/\s/g, ""), o === "") return NaN;
          o = +o;
        }
        return n.isType(o) || o === null ? o : parseFloat(o);
      });
    });
  }
  min(t, r = vn.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(n) {
        return n >= this.resolve(t);
      }
    });
  }
  max(t, r = vn.max) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n <= this.resolve(t);
      }
    });
  }
  lessThan(t, r = vn.lessThan) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        less: t
      },
      skipAbsent: !0,
      test(n) {
        return n < this.resolve(t);
      }
    });
  }
  moreThan(t, r = vn.moreThan) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        more: t
      },
      skipAbsent: !0,
      test(n) {
        return n > this.resolve(t);
      }
    });
  }
  positive(t = vn.positive) {
    return this.moreThan(0, t);
  }
  negative(t = vn.negative) {
    return this.lessThan(0, t);
  }
  integer(t = vn.integer) {
    return this.test({
      name: "integer",
      message: t,
      skipAbsent: !0,
      test: (r) => Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((t) => Pr(t) ? t : t | 0);
  }
  round(t) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round", t === "trunc") return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((o) => Pr(o) ? o : Math[t](o));
  }
}
$t.prototype = ny.prototype;
let oy = /* @__PURE__ */ new Date(""), pT = (e) => Object.prototype.toString.call(e) === "[object Date]";
function cn() {
  return new Ss();
}
class Ss extends Zt {
  constructor() {
    super({
      type: "date",
      check(t) {
        return pT(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => !n.spec.coerce || n.isType(t) || t === null ? t : (t = rT(t), isNaN(t) ? Ss.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, r) {
    let n;
    if (vo.isRef(t))
      n = t;
    else {
      let o = this.cast(t);
      if (!this._typeCheck(o)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = o;
    }
    return n;
  }
  min(t, r = Dc.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(o) {
        return o >= this.resolve(n);
      }
    });
  }
  max(t, r = Dc.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(o) {
        return o <= this.resolve(n);
      }
    });
  }
}
Ss.INVALID_DATE = oy;
cn.prototype = Ss.prototype;
cn.INVALID_DATE = oy;
function hT(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), o = new Set(t.map(([a, l]) => `${a}-${l}`));
  function s(a, l) {
    let c = Xn.split(a)[0];
    n.add(c), o.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const a of Object.keys(e)) {
    let l = e[a];
    n.add(a), vo.isRef(l) && l.isSibling ? s(l.path, a) : Ha(l) && "deps" in l && l.deps.forEach((c) => s(c, a));
  }
  return zw.array(Array.from(n), r).reverse();
}
function Vf(e, t) {
  let r = 1 / 0;
  return e.some((n, o) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = o, !0;
  }), r;
}
function iy(e) {
  return (t, r) => Vf(e, t) - Vf(e, r);
}
const sy = (e, t, r) => {
  if (typeof e != "string")
    return e;
  let n = e;
  try {
    n = JSON.parse(e);
  } catch {
  }
  return r.isType(n) ? n : e;
};
function aa(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, n] of Object.entries(e.fields))
      t[r] = aa(n);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = aa(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(aa)
  }) : "optional" in e ? e.optional() : e;
}
const mT = (e, t) => {
  const r = [...Xn.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let n = r.pop(), o = Xn.getter(Xn.join(r), !0)(e);
  return !!(o && n in o);
};
let Uf = (e) => Object.prototype.toString.call(e) === "[object Object]";
function yT(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const gT = iy([]);
function Le(e) {
  return new ay(e);
}
class ay extends Zt {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return Uf(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = gT, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, r = {}) {
    var n;
    let o = super._cast(t, r);
    if (o === void 0) return this.getDefault(r);
    if (!this._typeCheck(o)) return o;
    let s = this.fields, a = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = [].concat(this._nodes, Object.keys(o).filter((f) => !this._nodes.includes(f))), c = {}, u = Object.assign({}, r, {
      parent: c,
      __validating: r.__validating || !1
    }), d = !1;
    for (const f of l) {
      let p = s[f], m = f in o;
      if (p) {
        let y, b = o[f];
        u.path = (r.path ? `${r.path}.` : "") + f, p = p.resolve({
          value: b,
          context: r.context,
          parent: c
        });
        let h = p instanceof Zt ? p.spec : void 0, S = h == null ? void 0 : h.strict;
        if (h != null && h.strip) {
          d = d || f in o;
          continue;
        }
        y = !r.__validating || !S ? (
          // TODO: use _cast, this is double resolving
          p.cast(o[f], u)
        ) : o[f], y !== void 0 && (c[f] = y);
      } else m && !a && (c[f] = o[f]);
      (m !== f in c || c[f] !== o[f]) && (d = !0);
    }
    return d ? c : o;
  }
  _validate(t, r = {}, n, o) {
    let {
      from: s = [],
      originalValue: a = t,
      recursive: l = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: a
    }, ...s], r.__validating = !0, r.originalValue = a, super._validate(t, r, n, (c, u) => {
      if (!l || !Uf(u)) {
        o(c, u);
        return;
      }
      a = a || u;
      let d = [];
      for (let f of this._nodes) {
        let p = this.fields[f];
        !p || vo.isRef(p) || d.push(p.asNestedTest({
          options: r,
          key: f,
          parent: u,
          parentPath: r.path,
          originalParent: a
        }));
      }
      this.runTests({
        tests: d,
        value: u,
        originalValue: a,
        options: r
      }, n, (f) => {
        o(f.sort(this._sortErrors).concat(c), u);
      });
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = Object.assign({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [o, s] of Object.entries(this.fields)) {
      const a = n[o];
      n[o] = a === void 0 ? s : a;
    }
    return r.withMutation((o) => (
      // XXX: excludes here is wrong
      o.setFields(n, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let r = {};
    return this._nodes.forEach((n) => {
      var o;
      const s = this.fields[n];
      let a = t;
      (o = a) != null && o.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[n]
      })), r[n] = s && "getDefault" in s ? s.getDefault(a) : void 0;
    }), r;
  }
  setFields(t, r) {
    let n = this.clone();
    return n.fields = t, n._nodes = hT(t, r), n._sortErrors = iy(Object.keys(t)), r && (n._excludedEdges = r), n;
  }
  shape(t, r = []) {
    return this.clone().withMutation((n) => {
      let o = n._excludedEdges;
      return r.length && (Array.isArray(r[0]) || (r = [r]), o = [...n._excludedEdges, ...r]), n.setFields(Object.assign(n.fields, t), o);
    });
  }
  partial() {
    const t = {};
    for (const [r, n] of Object.entries(this.fields))
      t[r] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
    return this.setFields(t);
  }
  deepPartial() {
    return aa(this);
  }
  pick(t) {
    const r = {};
    for (const n of t)
      this.fields[n] && (r[n] = this.fields[n]);
    return this.setFields(r, this._excludedEdges.filter(([n, o]) => t.includes(n) && t.includes(o)));
  }
  omit(t) {
    const r = [];
    for (const n of Object.keys(this.fields))
      t.includes(n) || r.push(n);
    return this.pick(r);
  }
  from(t, r, n) {
    let o = Xn.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let a = s;
      return mT(s, t) && (a = Object.assign({}, s), n || delete a[t], a[r] = o(s)), a;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(sy);
  }
  noUnknown(t = !0, r = Mc.noUnknown) {
    typeof t != "boolean" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(o) {
        if (o == null) return !0;
        const s = yT(this.schema, o);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Mc.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => {
      if (!r) return r;
      const n = {};
      for (const o of Object.keys(r)) n[t(o)] = r[o];
      return n;
    });
  }
  camelCase() {
    return this.transformKeys(Ql.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Ql.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Ql.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), n = super.describe(t);
    n.fields = {};
    for (const [s, a] of Object.entries(r.fields)) {
      var o;
      let l = t;
      (o = l) != null && o.value && (l = Object.assign({}, l, {
        parent: l.value,
        value: l.value[s]
      })), n.fields[s] = a.describe(l);
    }
    return n;
  }
}
Le.prototype = ay.prototype;
function di(e) {
  return new ly(e);
}
class ly extends Zt {
  constructor(t) {
    super({
      type: "array",
      spec: {
        types: t
      },
      check(r) {
        return Array.isArray(r);
      }
    }), this.innerType = void 0, this.innerType = t;
  }
  _cast(t, r) {
    const n = super._cast(t, r);
    if (!this._typeCheck(n) || !this.innerType)
      return n;
    let o = !1;
    const s = n.map((a, l) => {
      const c = this.innerType.cast(a, Object.assign({}, r, {
        path: `${r.path || ""}[${l}]`
      }));
      return c !== a && (o = !0), c;
    });
    return o ? s : n;
  }
  _validate(t, r = {}, n, o) {
    var s;
    let a = this.innerType, l = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(t, r, n, (c, u) => {
      var d;
      if (!l || !a || !this._typeCheck(u)) {
        o(c, u);
        return;
      }
      let f = new Array(u.length);
      for (let m = 0; m < u.length; m++) {
        var p;
        f[m] = a.asNestedTest({
          options: r,
          index: m,
          parent: u,
          parentPath: r.path,
          originalParent: (p = r.originalValue) != null ? p : t
        });
      }
      this.runTests({
        value: u,
        tests: f,
        originalValue: (d = r.originalValue) != null ? d : t,
        options: r
      }, n, (m) => o(m.concat(c), u));
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(sy);
  }
  concat(t) {
    let r = super.concat(t);
    return r.innerType = this.innerType, t.innerType && (r.innerType = r.innerType ? (
      // @ts-expect-error Lazy doesn't have concat and will break
      r.innerType.concat(t.innerType)
    ) : t.innerType), r;
  }
  of(t) {
    let r = this.clone();
    if (!Ha(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + un(t));
    return r.innerType = t, r.spec = Object.assign({}, r.spec, {
      types: t
    }), r;
  }
  length(t, r = sa.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(t);
      }
    });
  }
  min(t, r) {
    return r = r || sa.min, this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      // FIXME(ts): Array<typeof T>
      test(n) {
        return n.length >= this.resolve(t);
      }
    });
  }
  max(t, r) {
    return r = r || sa.max, this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(t);
      }
    });
  }
  ensure() {
    return this.default(() => []).transform((t, r) => this._typeCheck(t) ? t : r == null ? [] : [].concat(r));
  }
  compact(t) {
    let r = t ? (n, o, s) => !t(n, o, s) : (n) => !!n;
    return this.transform((n) => n != null ? n.filter(r) : n);
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), n = super.describe(t);
    if (r.innerType) {
      var o;
      let s = t;
      (o = s) != null && o.value && (s = Object.assign({}, s, {
        parent: s.value,
        value: s.value[0]
      })), n.innerType = r.innerType.describe(s);
    }
    return n;
  }
}
di.prototype = ly.prototype;
Le().shape({
  address1: $().required("Address Line 1 is required"),
  address2: $().nullable(),
  location: $().required("Location is required"),
  city: $().required("City is required"),
  state: $().required("State is required"),
  pincode: $().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
const bT = /^[6-9]\d{9}$/;
$().matches(bT, "Please enter a valid 10-digit contact number").required("Contact number is required");
const cy = {
  product: "",
  count: "",
  size: "",
  qty: 0,
  uom: "",
  weight: "",
  productContainerWeight: 0,
  netWeight: 0,
  grossWeight: 0
}, vT = {
  deliveryChallanNo: "",
  grnNo: "",
  companyName: "",
  batchNo: "",
  date: Cw(),
  source: "vendor",
  inwardBy: "",
  inwardCost: 0,
  inwardProduct: [cy],
  inwardQtyInKg: 0,
  inwardType: "",
  location: "",
  purchasedBy: "",
  purchasedQty: 0,
  remarks: "",
  selectedParty: "",
  totalWeightInKg: 0
}, Qi = {
  black: "#000",
  white: "#fff"
}, Ro = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Po = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, _o = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Ao = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, No = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Ci = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ET = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Kr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Os = "$$material";
function va() {
  return va = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, va.apply(null, arguments);
}
function uy(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ST = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, OT = /* @__PURE__ */ uy(
  function(e) {
    return ST.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wT = !1;
function TT(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function CT(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var xT = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !wT : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(CT(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = TT(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), At = "-ms-", Ea = "-moz-", Be = "-webkit-", dy = "comm", ed = "rule", td = "decl", RT = "@import", fy = "@keyframes", PT = "@layer", _T = Math.abs, Ka = String.fromCharCode, AT = Object.assign;
function NT(e, t) {
  return Rt(e, 0) ^ 45 ? (((t << 2 ^ Rt(e, 0)) << 2 ^ Rt(e, 1)) << 2 ^ Rt(e, 2)) << 2 ^ Rt(e, 3) : 0;
}
function py(e) {
  return e.trim();
}
function $T(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, r) {
  return e.replace(t, r);
}
function Lc(e, t) {
  return e.indexOf(t);
}
function Rt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xi(e, t, r) {
  return e.slice(t, r);
}
function qr(e) {
  return e.length;
}
function rd(e) {
  return e.length;
}
function Bs(e, t) {
  return t.push(e), e;
}
function IT(e, t) {
  return e.map(t).join("");
}
var Ya = 1, ti = 1, hy = 0, er = 0, wt = 0, fi = "";
function Qa(e, t, r, n, o, s, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: s, line: Ya, column: ti, length: a, return: "" };
}
function xi(e, t) {
  return AT(Qa("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function DT() {
  return wt;
}
function kT() {
  return wt = er > 0 ? Rt(fi, --er) : 0, ti--, wt === 10 && (ti = 1, Ya--), wt;
}
function lr() {
  return wt = er < hy ? Rt(fi, er++) : 0, ti++, wt === 10 && (ti = 1, Ya++), wt;
}
function Gr() {
  return Rt(fi, er);
}
function la() {
  return er;
}
function ws(e, t) {
  return Xi(fi, e, t);
}
function Ji(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function my(e) {
  return Ya = ti = 1, hy = qr(fi = e), er = 0, [];
}
function yy(e) {
  return fi = "", e;
}
function ca(e) {
  return py(ws(er - 1, jc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function MT(e) {
  for (; (wt = Gr()) && wt < 33; )
    lr();
  return Ji(e) > 2 || Ji(wt) > 3 ? "" : " ";
}
function FT(e, t) {
  for (; --t && lr() && !(wt < 48 || wt > 102 || wt > 57 && wt < 65 || wt > 70 && wt < 97); )
    ;
  return ws(e, la() + (t < 6 && Gr() == 32 && lr() == 32));
}
function jc(e) {
  for (; lr(); )
    switch (wt) {
      case e:
        return er;
      case 34:
      case 39:
        e !== 34 && e !== 39 && jc(wt);
        break;
      case 40:
        e === 41 && jc(e);
        break;
      case 92:
        lr();
        break;
    }
  return er;
}
function LT(e, t) {
  for (; lr() && e + wt !== 57; )
    if (e + wt === 84 && Gr() === 47)
      break;
  return "/*" + ws(t, er - 1) + "*" + Ka(e === 47 ? e : lr());
}
function jT(e) {
  for (; !Ji(Gr()); )
    lr();
  return ws(e, er);
}
function qT(e) {
  return yy(ua("", null, null, null, [""], e = my(e), 0, [0], e));
}
function ua(e, t, r, n, o, s, a, l, c) {
  for (var u = 0, d = 0, f = a, p = 0, m = 0, y = 0, b = 1, h = 1, S = 1, w = 0, g = "", O = o, E = s, C = n, x = g; h; )
    switch (y = w, w = lr()) {
      case 40:
        if (y != 108 && Rt(x, f - 1) == 58) {
          Lc(x += ze(ca(w), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += ca(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += MT(y);
        break;
      case 92:
        x += FT(la() - 1, 7);
        continue;
      case 47:
        switch (Gr()) {
          case 42:
          case 47:
            Bs(VT(LT(lr(), la()), t, r), c);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * b:
        l[u++] = qr(x) * S;
      case 125 * b:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            h = 0;
          case 59 + d:
            S == -1 && (x = ze(x, /\f/g, "")), m > 0 && qr(x) - f && Bs(m > 32 ? zf(x + ";", n, r, f - 1) : zf(ze(x, " ", "") + ";", n, r, f - 2), c);
            break;
          case 59:
            x += ";";
          default:
            if (Bs(C = Bf(x, t, r, u, d, o, l, g, O = [], E = [], f), s), w === 123)
              if (d === 0)
                ua(x, t, C, C, O, s, f, l, E);
              else
                switch (p === 99 && Rt(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ua(e, C, C, n && Bs(Bf(e, C, C, 0, 0, o, l, g, o, O = [], f), E), o, E, f, l, n ? O : E);
                    break;
                  default:
                    ua(x, C, C, C, [""], E, 0, l, E);
                }
        }
        u = d = m = 0, b = S = 1, g = x = "", f = a;
        break;
      case 58:
        f = 1 + qr(x), m = y;
      default:
        if (b < 1) {
          if (w == 123)
            --b;
          else if (w == 125 && b++ == 0 && kT() == 125)
            continue;
        }
        switch (x += Ka(w), w * b) {
          case 38:
            S = d > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            l[u++] = (qr(x) - 1) * S, S = 1;
            break;
          case 64:
            Gr() === 45 && (x += ca(lr())), p = Gr(), d = f = qr(g = x += jT(la())), w++;
            break;
          case 45:
            y === 45 && qr(x) == 2 && (b = 0);
        }
    }
  return s;
}
function Bf(e, t, r, n, o, s, a, l, c, u, d) {
  for (var f = o - 1, p = o === 0 ? s : [""], m = rd(p), y = 0, b = 0, h = 0; y < n; ++y)
    for (var S = 0, w = Xi(e, f + 1, f = _T(b = a[y])), g = e; S < m; ++S)
      (g = py(b > 0 ? p[S] + " " + w : ze(w, /&\f/g, p[S]))) && (c[h++] = g);
  return Qa(e, t, r, o === 0 ? ed : l, c, u, d);
}
function VT(e, t, r) {
  return Qa(e, t, r, dy, Ka(DT()), Xi(e, 2, -2), 0);
}
function zf(e, t, r, n) {
  return Qa(e, t, r, td, Xi(e, 0, n), Xi(e, n + 1, -1), n);
}
function Lo(e, t) {
  for (var r = "", n = rd(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function UT(e, t, r, n) {
  switch (e.type) {
    case PT:
      if (e.children.length) break;
    case RT:
    case td:
      return e.return = e.return || e.value;
    case dy:
      return "";
    case fy:
      return e.return = e.value + "{" + Lo(e.children, n) + "}";
    case ed:
      e.value = e.props.join(",");
  }
  return qr(r = Lo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function BT(e) {
  var t = rd(e);
  return function(r, n, o, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](r, n, o, s) || "";
    return a;
  };
}
function zT(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var WT = function(t, r, n) {
  for (var o = 0, s = 0; o = s, s = Gr(), o === 38 && s === 12 && (r[n] = 1), !Ji(s); )
    lr();
  return ws(t, er);
}, GT = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Ji(o)) {
      case 0:
        o === 38 && Gr() === 12 && (r[n] = 1), t[n] += WT(er - 1, r, n);
        break;
      case 2:
        t[n] += ca(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Gr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Ka(o);
    }
  while (o = lr());
  return t;
}, HT = function(t, r) {
  return yy(GT(my(t), r));
}, Wf = /* @__PURE__ */ new WeakMap(), KT = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Wf.get(n)) && !o) {
      Wf.set(t, !0);
      for (var s = [], a = HT(r, s), l = n.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, YT = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function gy(e, t) {
  switch (NT(e, t)) {
    case 5103:
      return Be + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Be + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Be + e + Ea + e + At + e + e;
    case 6828:
    case 4268:
      return Be + e + At + e + e;
    case 6165:
      return Be + e + At + "flex-" + e + e;
    case 5187:
      return Be + e + ze(e, /(\w+).+(:[^]+)/, Be + "box-$1$2" + At + "flex-$1$2") + e;
    case 5443:
      return Be + e + At + "flex-item-" + ze(e, /flex-|-self/, "") + e;
    case 4675:
      return Be + e + At + "flex-line-pack" + ze(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Be + e + At + ze(e, "shrink", "negative") + e;
    case 5292:
      return Be + e + At + ze(e, "basis", "preferred-size") + e;
    case 6060:
      return Be + "box-" + ze(e, "-grow", "") + Be + e + At + ze(e, "grow", "positive") + e;
    case 4554:
      return Be + ze(e, /([^-])(transform)/g, "$1" + Be + "$2") + e;
    case 6187:
      return ze(ze(ze(e, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ze(e, /(image-set\([^]*)/, Be + "$1$`$1");
    case 4968:
      return ze(ze(e, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + At + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ze(e, /(.+)-inline(.+)/, Be + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (qr(e) - 1 - t > 6) switch (Rt(e, t + 1)) {
        case 109:
          if (Rt(e, t + 4) !== 45) break;
        case 102:
          return ze(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + Ea + (Rt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Lc(e, "stretch") ? gy(ze(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Rt(e, t + 1) !== 115) break;
    case 6444:
      switch (Rt(e, qr(e) - 3 - (~Lc(e, "!important") && 10))) {
        case 107:
          return ze(e, ":", ":" + Be) + e;
        case 101:
          return ze(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (Rt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + At + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Rt(e, t + 11)) {
        case 114:
          return Be + e + At + ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Be + e + At + ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Be + e + At + ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Be + e + At + e + e;
  }
  return e;
}
var QT = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case td:
      t.return = gy(t.value, t.length);
      break;
    case fy:
      return Lo([xi(t, {
        value: ze(t.value, "@", "@" + Be)
      })], o);
    case ed:
      if (t.length) return IT(t.props, function(s) {
        switch ($T(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Lo([xi(t, {
              props: [ze(s, /:(read-\w+)/, ":" + Ea + "$1")]
            })], o);
          case "::placeholder":
            return Lo([xi(t, {
              props: [ze(s, /:(plac\w+)/, ":" + Be + "input-$1")]
            }), xi(t, {
              props: [ze(s, /:(plac\w+)/, ":" + Ea + "$1")]
            }), xi(t, {
              props: [ze(s, /:(plac\w+)/, At + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, XT = [QT], JT = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(b) {
      var h = b.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || XT, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(b) {
      for (var h = b.getAttribute("data-emotion").split(" "), S = 1; S < h.length; S++)
        s[h[S]] = !0;
      l.push(b);
    }
  );
  var c, u = [KT, YT];
  {
    var d, f = [UT, zT(function(b) {
      d.insert(b);
    })], p = BT(u.concat(o, f)), m = function(h) {
      return Lo(qT(h), p);
    };
    c = function(h, S, w, g) {
      d = w, m(h ? h + "{" + S.styles + "}" : S.styles), g && (y.inserted[S.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new xT({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return y.sheet.hydrate(l), y;
}, ZT = !0;
function eC(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var by = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ZT === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, vy = function(t, r, n) {
  by(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function tC(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var rC = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, nC = !1, oC = /[A-Z]|^ms/g, iC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ey = function(t) {
  return t.charCodeAt(1) === 45;
}, Gf = function(t) {
  return t != null && typeof t != "boolean";
}, Xl = /* @__PURE__ */ uy(function(e) {
  return Ey(e) ? e : e.replace(oC, "-$&").toLowerCase();
}), Hf = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(iC, function(n, o, s) {
          return Vr = {
            name: o,
            styles: s,
            next: Vr
          }, o;
        });
  }
  return rC[t] !== 1 && !Ey(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, sC = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Zi(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Vr = {
          name: o.name,
          styles: o.styles,
          next: Vr
        }, o.name;
      var s = r;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Vr = {
              name: a.name,
              styles: a.styles,
              next: Vr
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return aC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Vr, u = r(e);
        return Vr = c, Zi(e, t, u);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var f = t[d];
  return f !== void 0 ? f : d;
}
function aC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Zi(e, t, r[o]) + ";";
  else
    for (var s in r) {
      var a = r[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? n += s + "{" + t[l] + "}" : Gf(l) && (n += Xl(s) + ":" + Hf(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && nC)
          throw new Error(sC);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Gf(a[c]) && (n += Xl(s) + ":" + Hf(s, a[c]) + ";");
        else {
          var u = Zi(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              n += Xl(s) + ":" + u + ";";
              break;
            }
            default:
              n += s + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var Kf = /label:\s*([^\s;{]+)\s*(;|$)/g, Vr;
function nd(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Vr = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, o += Zi(r, t, s);
  else {
    var a = s;
    o += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Zi(r, t, e[l]), n) {
      var c = s;
      o += c[l];
    }
  Kf.lastIndex = 0;
  for (var u = "", d; (d = Kf.exec(o)) !== null; )
    u += "-" + d[1];
  var f = tC(o) + u;
  return {
    name: f,
    styles: o,
    next: Vr
  };
}
var lC = function(t) {
  return t();
}, Sy = T.useInsertionEffect ? T.useInsertionEffect : !1, cC = Sy || lC, Yf = Sy || T.useLayoutEffect, Oy = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ JT({
    key: "css"
  }) : null
);
Oy.Provider;
var wy = function(t) {
  return /* @__PURE__ */ um(function(r, n) {
    var o = dm(Oy);
    return t(r, o, n);
  });
}, od = /* @__PURE__ */ T.createContext({}), uC = /* @__PURE__ */ wy(function(e, t) {
  var r = e.styles, n = nd([r], void 0, T.useContext(od)), o = T.useRef();
  return Yf(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), o.current = [a, l], function() {
      a.flush();
    };
  }, [t]), Yf(function() {
    var s = o.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && vy(t, n.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function dC() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return nd(t);
}
var id = function() {
  var t = dC.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, fC = OT, pC = function(t) {
  return t !== "theme";
}, Qf = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? fC : pC;
}, Xf = function(t, r, n) {
  var o;
  if (r) {
    var s = r.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, hC = !1, mC = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return by(r, n, o), cC(function() {
    return vy(r, n, o);
  }), null;
}, yC = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, s, a;
  r !== void 0 && (s = r.label, a = r.target);
  var l = Xf(t, r, n), c = l || Qf(o), u = !c("as");
  return function() {
    var d = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      f.push(d[0][0]);
      for (var p = d.length, m = 1; m < p; m++)
        f.push(d[m], d[0][m]);
    }
    var y = wy(function(b, h, S) {
      var w = u && b.as || o, g = "", O = [], E = b;
      if (b.theme == null) {
        E = {};
        for (var C in b)
          E[C] = b[C];
        E.theme = T.useContext(od);
      }
      typeof b.className == "string" ? g = eC(h.registered, O, b.className) : b.className != null && (g = b.className + " ");
      var x = nd(f.concat(O), h.registered, E);
      g += h.key + "-" + x.name, a !== void 0 && (g += " " + a);
      var P = u && l === void 0 ? Qf(w) : c, v = {};
      for (var _ in b)
        u && _ === "as" || P(_) && (v[_] = b[_]);
      return v.className = g, S && (v.ref = S), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(mC, {
        cache: h,
        serialized: x,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ T.createElement(w, v));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = f, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && hC ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(b, h) {
      return e(b, va({}, r, h, {
        shouldForwardProp: Xf(y, h, !0)
      })).apply(void 0, f);
    }, y;
  };
}, gC = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], qc = yC.bind();
gC.forEach(function(e) {
  qc[e] = qc(e);
});
var Vc = { exports: {} }, zs = { exports: {} }, He = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jf;
function bC() {
  if (Jf) return He;
  Jf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function g(E) {
    if (typeof E == "object" && E !== null) {
      var C = E.$$typeof;
      switch (C) {
        case t:
          switch (E = E.type, E) {
            case c:
            case u:
            case n:
            case s:
            case o:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case d:
                case y:
                case m:
                case a:
                  return E;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function O(E) {
    return g(E) === u;
  }
  return He.AsyncMode = c, He.ConcurrentMode = u, He.ContextConsumer = l, He.ContextProvider = a, He.Element = t, He.ForwardRef = d, He.Fragment = n, He.Lazy = y, He.Memo = m, He.Portal = r, He.Profiler = s, He.StrictMode = o, He.Suspense = f, He.isAsyncMode = function(E) {
    return O(E) || g(E) === c;
  }, He.isConcurrentMode = O, He.isContextConsumer = function(E) {
    return g(E) === l;
  }, He.isContextProvider = function(E) {
    return g(E) === a;
  }, He.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, He.isForwardRef = function(E) {
    return g(E) === d;
  }, He.isFragment = function(E) {
    return g(E) === n;
  }, He.isLazy = function(E) {
    return g(E) === y;
  }, He.isMemo = function(E) {
    return g(E) === m;
  }, He.isPortal = function(E) {
    return g(E) === r;
  }, He.isProfiler = function(E) {
    return g(E) === s;
  }, He.isStrictMode = function(E) {
    return g(E) === o;
  }, He.isSuspense = function(E) {
    return g(E) === f;
  }, He.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === u || E === s || E === o || E === f || E === p || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === m || E.$$typeof === a || E.$$typeof === l || E.$$typeof === d || E.$$typeof === h || E.$$typeof === S || E.$$typeof === w || E.$$typeof === b);
  }, He.typeOf = g, He;
}
var Ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zf;
function vC() {
  return Zf || (Zf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function g(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === u || N === s || N === o || N === f || N === p || typeof N == "object" && N !== null && (N.$$typeof === y || N.$$typeof === m || N.$$typeof === a || N.$$typeof === l || N.$$typeof === d || N.$$typeof === h || N.$$typeof === S || N.$$typeof === w || N.$$typeof === b);
    }
    function O(N) {
      if (typeof N == "object" && N !== null) {
        var ve = N.$$typeof;
        switch (ve) {
          case t:
            var Q = N.type;
            switch (Q) {
              case c:
              case u:
              case n:
              case s:
              case o:
              case f:
                return Q;
              default:
                var me = Q && Q.$$typeof;
                switch (me) {
                  case l:
                  case d:
                  case y:
                  case m:
                  case a:
                    return me;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var E = c, C = u, x = l, P = a, v = t, _ = d, I = n, k = y, W = m, z = r, B = s, L = o, K = f, j = !1;
    function X(N) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(N) || O(N) === c;
    }
    function q(N) {
      return O(N) === u;
    }
    function H(N) {
      return O(N) === l;
    }
    function oe(N) {
      return O(N) === a;
    }
    function te(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function Y(N) {
      return O(N) === d;
    }
    function J(N) {
      return O(N) === n;
    }
    function ae(N) {
      return O(N) === y;
    }
    function ce(N) {
      return O(N) === m;
    }
    function Z(N) {
      return O(N) === r;
    }
    function ie(N) {
      return O(N) === s;
    }
    function re(N) {
      return O(N) === o;
    }
    function fe(N) {
      return O(N) === f;
    }
    Ke.AsyncMode = E, Ke.ConcurrentMode = C, Ke.ContextConsumer = x, Ke.ContextProvider = P, Ke.Element = v, Ke.ForwardRef = _, Ke.Fragment = I, Ke.Lazy = k, Ke.Memo = W, Ke.Portal = z, Ke.Profiler = B, Ke.StrictMode = L, Ke.Suspense = K, Ke.isAsyncMode = X, Ke.isConcurrentMode = q, Ke.isContextConsumer = H, Ke.isContextProvider = oe, Ke.isElement = te, Ke.isForwardRef = Y, Ke.isFragment = J, Ke.isLazy = ae, Ke.isMemo = ce, Ke.isPortal = Z, Ke.isProfiler = ie, Ke.isStrictMode = re, Ke.isSuspense = fe, Ke.isValidElementType = g, Ke.typeOf = O;
  }()), Ke;
}
var ep;
function Ty() {
  return ep || (ep = 1, process.env.NODE_ENV === "production" ? zs.exports = bC() : zs.exports = vC()), zs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Jl, tp;
function EC() {
  if (tp) return Jl;
  tp = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Jl = o() ? Object.assign : function(s, a) {
    for (var l, c = n(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var p = 0; p < u.length; p++)
          r.call(l, u[p]) && (c[u[p]] = l[u[p]]);
      }
    }
    return c;
  }, Jl;
}
var Zl, rp;
function sd() {
  if (rp) return Zl;
  rp = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zl = e, Zl;
}
var ec, np;
function Cy() {
  return np || (np = 1, ec = Function.call.bind(Object.prototype.hasOwnProperty)), ec;
}
var tc, op;
function SC() {
  if (op) return tc;
  op = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = sd(), r = {}, n = Cy();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (n(s, d)) {
          var f;
          try {
            if (typeof s[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = s[d](a, d, c, l, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var m = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (m ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, tc = o, tc;
}
var rc, ip;
function OC() {
  if (ip) return rc;
  ip = 1;
  var e = Ty(), t = EC(), r = sd(), n = Cy(), o = SC(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return rc = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(q) {
      var H = q && (u && q[u] || q[d]);
      if (typeof H == "function")
        return H;
    }
    var p = "<<anonymous>>", m = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: w(),
      arrayOf: g,
      element: O(),
      elementType: E(),
      instanceOf: C,
      node: _(),
      objectOf: P,
      oneOf: x,
      oneOfType: v,
      shape: k,
      exact: W
    };
    function y(q, H) {
      return q === H ? q !== 0 || 1 / q === 1 / H : q !== q && H !== H;
    }
    function b(q, H) {
      this.message = q, this.data = H && typeof H == "object" ? H : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function h(q) {
      if (process.env.NODE_ENV !== "production")
        var H = {}, oe = 0;
      function te(J, ae, ce, Z, ie, re, fe) {
        if (Z = Z || p, re = re || ce, fe !== r) {
          if (c) {
            var N = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw N.name = "Invariant Violation", N;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = Z + ":" + ce;
            !H[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            oe < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + re + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), H[ve] = !0, oe++);
          }
        }
        return ae[ce] == null ? J ? ae[ce] === null ? new b("The " + ie + " `" + re + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new b("The " + ie + " `" + re + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : q(ae, ce, Z, ie, re);
      }
      var Y = te.bind(null, !1);
      return Y.isRequired = te.bind(null, !0), Y;
    }
    function S(q) {
      function H(oe, te, Y, J, ae, ce) {
        var Z = oe[te], ie = L(Z);
        if (ie !== q) {
          var re = K(Z);
          return new b(
            "Invalid " + J + " `" + ae + "` of type " + ("`" + re + "` supplied to `" + Y + "`, expected ") + ("`" + q + "`."),
            { expectedType: q }
          );
        }
        return null;
      }
      return h(H);
    }
    function w() {
      return h(a);
    }
    function g(q) {
      function H(oe, te, Y, J, ae) {
        if (typeof q != "function")
          return new b("Property `" + ae + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var ce = oe[te];
        if (!Array.isArray(ce)) {
          var Z = L(ce);
          return new b("Invalid " + J + " `" + ae + "` of type " + ("`" + Z + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var ie = 0; ie < ce.length; ie++) {
          var re = q(ce, ie, Y, J, ae + "[" + ie + "]", r);
          if (re instanceof Error)
            return re;
        }
        return null;
      }
      return h(H);
    }
    function O() {
      function q(H, oe, te, Y, J) {
        var ae = H[oe];
        if (!l(ae)) {
          var ce = L(ae);
          return new b("Invalid " + Y + " `" + J + "` of type " + ("`" + ce + "` supplied to `" + te + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(q);
    }
    function E() {
      function q(H, oe, te, Y, J) {
        var ae = H[oe];
        if (!e.isValidElementType(ae)) {
          var ce = L(ae);
          return new b("Invalid " + Y + " `" + J + "` of type " + ("`" + ce + "` supplied to `" + te + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(q);
    }
    function C(q) {
      function H(oe, te, Y, J, ae) {
        if (!(oe[te] instanceof q)) {
          var ce = q.name || p, Z = X(oe[te]);
          return new b("Invalid " + J + " `" + ae + "` of type " + ("`" + Z + "` supplied to `" + Y + "`, expected ") + ("instance of `" + ce + "`."));
        }
        return null;
      }
      return h(H);
    }
    function x(q) {
      if (!Array.isArray(q))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function H(oe, te, Y, J, ae) {
        for (var ce = oe[te], Z = 0; Z < q.length; Z++)
          if (y(ce, q[Z]))
            return null;
        var ie = JSON.stringify(q, function(fe, N) {
          var ve = K(N);
          return ve === "symbol" ? String(N) : N;
        });
        return new b("Invalid " + J + " `" + ae + "` of value `" + String(ce) + "` " + ("supplied to `" + Y + "`, expected one of " + ie + "."));
      }
      return h(H);
    }
    function P(q) {
      function H(oe, te, Y, J, ae) {
        if (typeof q != "function")
          return new b("Property `" + ae + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var ce = oe[te], Z = L(ce);
        if (Z !== "object")
          return new b("Invalid " + J + " `" + ae + "` of type " + ("`" + Z + "` supplied to `" + Y + "`, expected an object."));
        for (var ie in ce)
          if (n(ce, ie)) {
            var re = q(ce, ie, Y, J, ae + "." + ie, r);
            if (re instanceof Error)
              return re;
          }
        return null;
      }
      return h(H);
    }
    function v(q) {
      if (!Array.isArray(q))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var H = 0; H < q.length; H++) {
        var oe = q[H];
        if (typeof oe != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + j(oe) + " at index " + H + "."
          ), a;
      }
      function te(Y, J, ae, ce, Z) {
        for (var ie = [], re = 0; re < q.length; re++) {
          var fe = q[re], N = fe(Y, J, ae, ce, Z, r);
          if (N == null)
            return null;
          N.data && n(N.data, "expectedType") && ie.push(N.data.expectedType);
        }
        var ve = ie.length > 0 ? ", expected one of type [" + ie.join(", ") + "]" : "";
        return new b("Invalid " + ce + " `" + Z + "` supplied to " + ("`" + ae + "`" + ve + "."));
      }
      return h(te);
    }
    function _() {
      function q(H, oe, te, Y, J) {
        return z(H[oe]) ? null : new b("Invalid " + Y + " `" + J + "` supplied to " + ("`" + te + "`, expected a ReactNode."));
      }
      return h(q);
    }
    function I(q, H, oe, te, Y) {
      return new b(
        (q || "React class") + ": " + H + " type `" + oe + "." + te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function k(q) {
      function H(oe, te, Y, J, ae) {
        var ce = oe[te], Z = L(ce);
        if (Z !== "object")
          return new b("Invalid " + J + " `" + ae + "` of type `" + Z + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var ie in q) {
          var re = q[ie];
          if (typeof re != "function")
            return I(Y, J, ae, ie, K(re));
          var fe = re(ce, ie, Y, J, ae + "." + ie, r);
          if (fe)
            return fe;
        }
        return null;
      }
      return h(H);
    }
    function W(q) {
      function H(oe, te, Y, J, ae) {
        var ce = oe[te], Z = L(ce);
        if (Z !== "object")
          return new b("Invalid " + J + " `" + ae + "` of type `" + Z + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var ie = t({}, oe[te], q);
        for (var re in ie) {
          var fe = q[re];
          if (n(q, re) && typeof fe != "function")
            return I(Y, J, ae, re, K(fe));
          if (!fe)
            return new b(
              "Invalid " + J + " `" + ae + "` key `" + re + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(oe[te], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(q), null, "  ")
            );
          var N = fe(ce, re, Y, J, ae + "." + re, r);
          if (N)
            return N;
        }
        return null;
      }
      return h(H);
    }
    function z(q) {
      switch (typeof q) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !q;
        case "object":
          if (Array.isArray(q))
            return q.every(z);
          if (q === null || l(q))
            return !0;
          var H = f(q);
          if (H) {
            var oe = H.call(q), te;
            if (H !== q.entries) {
              for (; !(te = oe.next()).done; )
                if (!z(te.value))
                  return !1;
            } else
              for (; !(te = oe.next()).done; ) {
                var Y = te.value;
                if (Y && !z(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(q, H) {
      return q === "symbol" ? !0 : H ? H["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && H instanceof Symbol : !1;
    }
    function L(q) {
      var H = typeof q;
      return Array.isArray(q) ? "array" : q instanceof RegExp ? "object" : B(H, q) ? "symbol" : H;
    }
    function K(q) {
      if (typeof q > "u" || q === null)
        return "" + q;
      var H = L(q);
      if (H === "object") {
        if (q instanceof Date)
          return "date";
        if (q instanceof RegExp)
          return "regexp";
      }
      return H;
    }
    function j(q) {
      var H = K(q);
      switch (H) {
        case "array":
        case "object":
          return "an " + H;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + H;
        default:
          return H;
      }
    }
    function X(q) {
      return !q.constructor || !q.constructor.name ? p : q.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, rc;
}
var nc, sp;
function wC() {
  if (sp) return nc;
  sp = 1;
  var e = sd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, nc = function() {
    function n(a, l, c, u, d, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, nc;
}
if (process.env.NODE_ENV !== "production") {
  var TC = Ty(), CC = !0;
  Vc.exports = OC()(TC.isElement, CC);
} else
  Vc.exports = wC()();
var xC = Vc.exports;
const i = /* @__PURE__ */ Ba(xC);
function RC(e) {
  return e == null || Object.keys(e).length === 0;
}
function xy(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ R(uC, {
    styles: typeof t == "function" ? (o) => t(RC(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && (xy.propTypes = {
  defaultTheme: i.object,
  styles: i.oneOfType([i.array, i.string, i.object, i.func])
});
/**
 * @mui/styled-engine v6.1.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ry(e, t) {
  const r = qc(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const PC = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function Ur(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Py(e) {
  if (!Ur(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Py(e[r]);
  }), t;
}
function Ct(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ur(e) && Ur(t) && Object.keys(t).forEach((o) => {
    Ur(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ur(e[o]) ? n[o] = Ct(e[o], t[o], r) : r.clone ? n[o] = Ur(t[o]) ? Py(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const _C = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function AC(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, s = _C(t), a = Object.keys(s);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function u(p, m) {
    const y = a.indexOf(m);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : m) - n / 100}${r})`;
  }
  function d(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p);
  }
  function f(p) {
    const m = a.indexOf(p);
    return m === 0 ? l(a[1]) : m === a.length - 1 ? c(a[m]) : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: r,
    ...o
  };
}
function NC(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, l;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(s)) == null ? void 0 : a[1]) || 0) - +(((l = o.match(s)) == null ? void 0 : l[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const s = t[o];
    return delete n[o], n[o] = s, n;
  }, {
    ...t
  }) : t;
}
function $C(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function IC(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Kr(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(s);
}
function DC(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function r(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, o = (s) => (r(n, s), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const kC = {
  borderRadius: 4
}, In = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.string, i.object, i.array]) : {};
function Ui(e, t) {
  return t ? Ct(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Xa = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, ap = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Xa[e]}px)`
}, MC = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Xa[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function tr(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || ap;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || ap;
    return Object.keys(t).reduce((a, l) => {
      if ($C(s.keys, l)) {
        const c = IC(n.containerQueries ? n : MC, l);
        c && (a[c] = r(t[l], l));
      } else if (Object.keys(s.values || Xa).includes(l)) {
        const c = s.up(l);
        a[c] = r(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function _y(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const s = e.up(o);
    return n[s] = {}, n;
  }, {})) || {};
}
function Ay(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function FC(e, ...t) {
  const r = _y(e), n = [r, ...t].reduce((o, s) => Ct(o, s), {});
  return Ay(Object.keys(r), n);
}
function LC(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e) ? n.forEach((o, s) => {
    s < e.length && (r[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (r[o] = !0);
  }), r;
}
function Jn({
  values: e,
  breakpoints: t,
  base: r
}) {
  const n = r || LC(e, t), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let s;
  return o.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function ne(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Kr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ja(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Sa(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Ja(e, r) || n, t && (o = t(o, n, e)), o;
}
function Et(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Ja(c, n) || {};
    return tr(a, l, (f) => {
      let p = Sa(u, o, f);
      return f === p && typeof f == "string" && (p = Sa(u, o, `${t}${f === "default" ? "" : ne(f)}`, f)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: In
  } : {}, s.filterProps = [t], s;
}
function jC(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const qC = {
  m: "margin",
  p: "padding"
}, VC = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, lp = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, UC = jC((e) => {
  if (e.length > 2)
    if (lp[e])
      e = lp[e];
    else
      return [e];
  const [t, r] = e.split(""), n = qC[t], o = VC[r] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), Za = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], el = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], BC = [...Za, ...el];
function Ts(e, t, r, n) {
  const o = Ja(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), typeof o == "string" ? `calc(${s} * ${o})` : o * s) : Array.isArray(o) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = o[a];
    return s >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function tl(e) {
  return Ts(e, "spacing", 8, "spacing");
}
function so(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function zC(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = so(t, r), n), {});
}
function WC(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = UC(r), s = zC(o, n), a = e[r];
  return tr(e, a, s);
}
function Ny(e, t) {
  const r = tl(e.theme);
  return Object.keys(e).map((n) => WC(e, t, n, r)).reduce(Ui, {});
}
function ht(e) {
  return Ny(e, Za);
}
ht.propTypes = process.env.NODE_ENV !== "production" ? Za.reduce((e, t) => (e[t] = In, e), {}) : {};
ht.filterProps = Za;
function mt(e) {
  return Ny(e, el);
}
mt.propTypes = process.env.NODE_ENV !== "production" ? el.reduce((e, t) => (e[t] = In, e), {}) : {};
mt.filterProps = el;
process.env.NODE_ENV !== "production" && BC.reduce((e, t) => (e[t] = In, e), {});
function $y(e = 8, t = tl({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function rl(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? Ui(o, t[s](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Sr(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Cr(e, t) {
  return Et({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const GC = Cr("border", Sr), HC = Cr("borderTop", Sr), KC = Cr("borderRight", Sr), YC = Cr("borderBottom", Sr), QC = Cr("borderLeft", Sr), XC = Cr("borderColor"), JC = Cr("borderTopColor"), ZC = Cr("borderRightColor"), ex = Cr("borderBottomColor"), tx = Cr("borderLeftColor"), rx = Cr("outline", Sr), nx = Cr("outlineColor"), nl = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ts(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: so(t, n)
    });
    return tr(e, e.borderRadius, r);
  }
  return null;
};
nl.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: In
} : {};
nl.filterProps = ["borderRadius"];
rl(GC, HC, KC, YC, QC, XC, JC, ZC, ex, tx, nl, rx, nx);
const ol = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ts(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: so(t, n)
    });
    return tr(e, e.gap, r);
  }
  return null;
};
ol.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: In
} : {};
ol.filterProps = ["gap"];
const il = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ts(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: so(t, n)
    });
    return tr(e, e.columnGap, r);
  }
  return null;
};
il.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: In
} : {};
il.filterProps = ["columnGap"];
const sl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ts(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: so(t, n)
    });
    return tr(e, e.rowGap, r);
  }
  return null;
};
sl.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: In
} : {};
sl.filterProps = ["rowGap"];
const ox = Et({
  prop: "gridColumn"
}), ix = Et({
  prop: "gridRow"
}), sx = Et({
  prop: "gridAutoFlow"
}), ax = Et({
  prop: "gridAutoColumns"
}), lx = Et({
  prop: "gridAutoRows"
}), cx = Et({
  prop: "gridTemplateColumns"
}), ux = Et({
  prop: "gridTemplateRows"
}), dx = Et({
  prop: "gridTemplateAreas"
}), fx = Et({
  prop: "gridArea"
});
rl(ol, il, sl, ox, ix, sx, ax, lx, cx, ux, dx, fx);
function jo(e, t) {
  return t === "grey" ? t : e;
}
const px = Et({
  prop: "color",
  themeKey: "palette",
  transform: jo
}), hx = Et({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: jo
}), mx = Et({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: jo
});
rl(px, hx, mx);
function sr(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const yx = Et({
  prop: "width",
  transform: sr
}), ad = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, s, a, l, c;
      const n = ((a = (s = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[r]) || Xa[r];
      return n ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: sr(r)
      };
    };
    return tr(e, e.maxWidth, t);
  }
  return null;
};
ad.filterProps = ["maxWidth"];
const gx = Et({
  prop: "minWidth",
  transform: sr
}), bx = Et({
  prop: "height",
  transform: sr
}), vx = Et({
  prop: "maxHeight",
  transform: sr
}), Ex = Et({
  prop: "minHeight",
  transform: sr
});
Et({
  prop: "size",
  cssProperty: "width",
  transform: sr
});
Et({
  prop: "size",
  cssProperty: "height",
  transform: sr
});
const Sx = Et({
  prop: "boxSizing"
});
rl(yx, ad, gx, bx, vx, Ex, Sx);
const Cs = {
  // borders
  border: {
    themeKey: "borders",
    transform: Sr
  },
  borderTop: {
    themeKey: "borders",
    transform: Sr
  },
  borderRight: {
    themeKey: "borders",
    transform: Sr
  },
  borderBottom: {
    themeKey: "borders",
    transform: Sr
  },
  borderLeft: {
    themeKey: "borders",
    transform: Sr
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Sr
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: nl
  },
  // palette
  color: {
    themeKey: "palette",
    transform: jo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: jo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: jo
  },
  // spacing
  p: {
    style: mt
  },
  pt: {
    style: mt
  },
  pr: {
    style: mt
  },
  pb: {
    style: mt
  },
  pl: {
    style: mt
  },
  px: {
    style: mt
  },
  py: {
    style: mt
  },
  padding: {
    style: mt
  },
  paddingTop: {
    style: mt
  },
  paddingRight: {
    style: mt
  },
  paddingBottom: {
    style: mt
  },
  paddingLeft: {
    style: mt
  },
  paddingX: {
    style: mt
  },
  paddingY: {
    style: mt
  },
  paddingInline: {
    style: mt
  },
  paddingInlineStart: {
    style: mt
  },
  paddingInlineEnd: {
    style: mt
  },
  paddingBlock: {
    style: mt
  },
  paddingBlockStart: {
    style: mt
  },
  paddingBlockEnd: {
    style: mt
  },
  m: {
    style: ht
  },
  mt: {
    style: ht
  },
  mr: {
    style: ht
  },
  mb: {
    style: ht
  },
  ml: {
    style: ht
  },
  mx: {
    style: ht
  },
  my: {
    style: ht
  },
  margin: {
    style: ht
  },
  marginTop: {
    style: ht
  },
  marginRight: {
    style: ht
  },
  marginBottom: {
    style: ht
  },
  marginLeft: {
    style: ht
  },
  marginX: {
    style: ht
  },
  marginY: {
    style: ht
  },
  marginInline: {
    style: ht
  },
  marginInlineStart: {
    style: ht
  },
  marginInlineEnd: {
    style: ht
  },
  marginBlock: {
    style: ht
  },
  marginBlockStart: {
    style: ht
  },
  marginBlockEnd: {
    style: ht
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ol
  },
  rowGap: {
    style: sl
  },
  columnGap: {
    style: il
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: sr
  },
  maxWidth: {
    style: ad
  },
  minWidth: {
    transform: sr
  },
  height: {
    transform: sr
  },
  maxHeight: {
    transform: sr
  },
  minHeight: {
    transform: sr
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Ox(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function wx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tx() {
  function e(r, n, o, s) {
    const a = {
      [r]: n,
      theme: o
    }, l = s[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const p = Ja(o, u) || {};
    return f ? f(a) : tr(a, n, (y) => {
      let b = Sa(p, d, y);
      return y === b && typeof y == "string" && (b = Sa(p, d, `${r}${y === "default" ? "" : ne(y)}`, y)), c === !1 ? b : {
        [c]: b
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const s = o.unstable_sxConfig ?? Cs;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(o);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = _y(o.breakpoints), d = Object.keys(u);
      let f = u;
      return Object.keys(c).forEach((p) => {
        const m = wx(c[p], o);
        if (m != null)
          if (typeof m == "object")
            if (s[p])
              f = Ui(f, e(p, m, o, s));
            else {
              const y = tr({
                theme: o
              }, m, (b) => ({
                [p]: b
              }));
              Ox(y, m) ? f[p] = t({
                sx: m,
                theme: o
              }) : f = Ui(f, y);
            }
          else
            f = Ui(f, e(p, m, o, s));
      }), NC(o, Ay(d, f));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const pi = Tx();
pi.filterProps = ["sx"];
function Cx(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function al(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: s = {},
    ...a
  } = e, l = AC(r), c = $y(o);
  let u = Ct({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: c,
    shape: {
      ...kC,
      ...s
    }
  }, a);
  return u = DC(u), u.applyStyles = Cx, u = t.reduce((d, f) => Ct(d, f), u), u.unstable_sxConfig = {
    ...Cs,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return pi({
      sx: f,
      theme: this
    });
  }, u;
}
function xx(e) {
  return Object.keys(e).length === 0;
}
function Rx(e = null) {
  const t = T.useContext(od);
  return !t || xx(t) ? e : t;
}
const Px = al();
function ll(e = Px) {
  return Rx(e);
}
function Iy({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = ll(r), o = typeof e == "function" ? e(t && n[t] || n) : e;
  return /* @__PURE__ */ R(xy, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (Iy.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: i.object,
  /**
   * @ignore
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool]),
  /**
   * @ignore
   */
  themeId: i.string
});
const _x = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? Cs;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function cl(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = _x(r);
  let s;
  return Array.isArray(t) ? s = [n, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Ur(l) ? {
      ...n,
      ...l
    } : n;
  } : s = {
    ...n,
    ...t
  }, {
    ...o,
    sx: s
  };
}
const cp = (e) => e, Ax = () => {
  let e = cp;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = cp;
    }
  };
}, Dy = Ax();
function ky(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ky(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ge() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ky(e)) && (n && (n += " "), n += t);
  return n;
}
function Nx(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, s = Ry("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(pi);
  return /* @__PURE__ */ T.forwardRef(function(c, u) {
    const d = ll(r), {
      className: f,
      component: p = "div",
      ...m
    } = cl(c);
    return /* @__PURE__ */ R(s, {
      as: p,
      ref: u,
      className: ge(f, o ? o(n) : n),
      theme: t && d[t] || d,
      ...m
    });
  });
}
const $x = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ke(e, t, r = "Mui") {
  const n = $x[t];
  return n ? `${r}-${n}` : `${Dy.generate(e)}-${t}`;
}
function Ne(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = ke(e, o, r);
  }), n;
}
var Uc = { exports: {} }, Ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up;
function Ix() {
  if (up) return Ye;
  up = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function b(h) {
    if (typeof h == "object" && h !== null) {
      var S = h.$$typeof;
      switch (S) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case u:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case a:
                case c:
                case p:
                case f:
                case s:
                  return h;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return Ye.ContextConsumer = a, Ye.ContextProvider = s, Ye.Element = e, Ye.ForwardRef = c, Ye.Fragment = r, Ye.Lazy = p, Ye.Memo = f, Ye.Portal = t, Ye.Profiler = o, Ye.StrictMode = n, Ye.Suspense = u, Ye.SuspenseList = d, Ye.isAsyncMode = function() {
    return !1;
  }, Ye.isConcurrentMode = function() {
    return !1;
  }, Ye.isContextConsumer = function(h) {
    return b(h) === a;
  }, Ye.isContextProvider = function(h) {
    return b(h) === s;
  }, Ye.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, Ye.isForwardRef = function(h) {
    return b(h) === c;
  }, Ye.isFragment = function(h) {
    return b(h) === r;
  }, Ye.isLazy = function(h) {
    return b(h) === p;
  }, Ye.isMemo = function(h) {
    return b(h) === f;
  }, Ye.isPortal = function(h) {
    return b(h) === t;
  }, Ye.isProfiler = function(h) {
    return b(h) === o;
  }, Ye.isStrictMode = function(h) {
    return b(h) === n;
  }, Ye.isSuspense = function(h) {
    return b(h) === u;
  }, Ye.isSuspenseList = function(h) {
    return b(h) === d;
  }, Ye.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === u || h === d || h === m || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === f || h.$$typeof === s || h.$$typeof === a || h.$$typeof === c || h.$$typeof === y || h.getModuleId !== void 0);
  }, Ye.typeOf = b, Ye;
}
var Qe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dp;
function Dx() {
  return dp || (dp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = !1, b = !1, h = !1, S = !1, w = !1, g;
    g = Symbol.for("react.module.reference");
    function O(Q) {
      return !!(typeof Q == "string" || typeof Q == "function" || Q === r || Q === o || w || Q === n || Q === u || Q === d || S || Q === m || y || b || h || typeof Q == "object" && Q !== null && (Q.$$typeof === p || Q.$$typeof === f || Q.$$typeof === s || Q.$$typeof === a || Q.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Q.$$typeof === g || Q.getModuleId !== void 0));
    }
    function E(Q) {
      if (typeof Q == "object" && Q !== null) {
        var me = Q.$$typeof;
        switch (me) {
          case e:
            var ue = Q.type;
            switch (ue) {
              case r:
              case o:
              case n:
              case u:
              case d:
                return ue;
              default:
                var dt = ue && ue.$$typeof;
                switch (dt) {
                  case l:
                  case a:
                  case c:
                  case p:
                  case f:
                  case s:
                    return dt;
                  default:
                    return me;
                }
            }
          case t:
            return me;
        }
      }
    }
    var C = a, x = s, P = e, v = c, _ = r, I = p, k = f, W = t, z = o, B = n, L = u, K = d, j = !1, X = !1;
    function q(Q) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(Q) {
      return X || (X = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(Q) {
      return E(Q) === a;
    }
    function te(Q) {
      return E(Q) === s;
    }
    function Y(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === e;
    }
    function J(Q) {
      return E(Q) === c;
    }
    function ae(Q) {
      return E(Q) === r;
    }
    function ce(Q) {
      return E(Q) === p;
    }
    function Z(Q) {
      return E(Q) === f;
    }
    function ie(Q) {
      return E(Q) === t;
    }
    function re(Q) {
      return E(Q) === o;
    }
    function fe(Q) {
      return E(Q) === n;
    }
    function N(Q) {
      return E(Q) === u;
    }
    function ve(Q) {
      return E(Q) === d;
    }
    Qe.ContextConsumer = C, Qe.ContextProvider = x, Qe.Element = P, Qe.ForwardRef = v, Qe.Fragment = _, Qe.Lazy = I, Qe.Memo = k, Qe.Portal = W, Qe.Profiler = z, Qe.StrictMode = B, Qe.Suspense = L, Qe.SuspenseList = K, Qe.isAsyncMode = q, Qe.isConcurrentMode = H, Qe.isContextConsumer = oe, Qe.isContextProvider = te, Qe.isElement = Y, Qe.isForwardRef = J, Qe.isFragment = ae, Qe.isLazy = ce, Qe.isMemo = Z, Qe.isPortal = ie, Qe.isProfiler = re, Qe.isStrictMode = fe, Qe.isSuspense = N, Qe.isSuspenseList = ve, Qe.isValidElementType = O, Qe.typeOf = E;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? Uc.exports = Ix() : Uc.exports = Dx();
var es = Uc.exports;
function My(e, t = "") {
  return e.displayName || e.name || t;
}
function fp(e, t, r) {
  const n = My(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function kx(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return My(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case es.ForwardRef:
          return fp(e, e.render, "ForwardRef");
        case es.Memo:
          return fp(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Mx = al();
function oc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Bc(e, t, r) {
  return Lx(t) ? r : t[e] || t;
}
const Ws = Symbol("mui.processed_props");
function Gs(e, t, r) {
  if (Ws in e)
    return e[Ws];
  const n = {
    ...e,
    theme: Bc(t, e.theme, r)
  };
  return e[Ws] = n, n[Ws] = n, n;
}
function Fx(e) {
  return e ? (t, r) => r[e] : null;
}
function da(e, t) {
  var n;
  const r = typeof e == "function" ? e(t) : e;
  if (Array.isArray(r))
    return r.flatMap((o) => da(o, t));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    const {
      variants: o,
      ...s
    } = r;
    let a = s, l;
    e: for (let c = 0; c < o.length; c += 1) {
      const u = o[c];
      if (typeof u.props == "function") {
        if (l ?? (l = {
          ...t,
          ...t.ownerState,
          ownerState: t.ownerState
        }), !u.props(l))
          continue;
      } else
        for (const d in u.props)
          if (t[d] !== u.props[d] && ((n = t.ownerState) == null ? void 0 : n[d]) !== u.props[d])
            continue e;
      Array.isArray(a) || (a = [a]), typeof u.style == "function" ? (l ?? (l = {
        ...t,
        ...t.ownerState,
        ownerState: t.ownerState
      }), a.push(u.style(l))) : a.push(u.style);
    }
    return a;
  }
  return r;
}
function Fy(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Mx,
    rootShouldForwardProp: n = oc,
    slotShouldForwardProp: o = oc
  } = e, s = (l) => pi(Gs(l, t, r));
  return s.__mui_systemSx = !0, (l, c = {}) => {
    PC(l, (C) => C.filter((x) => !(x != null && x.__mui_systemSx)));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = Fx(pp(d)),
      ...y
    } = c, b = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), h = p || !1;
    let S;
    process.env.NODE_ENV !== "production" && u && (S = `${u}-${pp(d || "Root")}`);
    let w = oc;
    d === "Root" || d === "root" ? w = n : d ? w = o : jx(l) && (w = void 0);
    const g = Ry(l, {
      shouldForwardProp: w,
      label: S,
      ...y
    }), O = (C) => typeof C == "function" && C.__emotion_real !== C || Ur(C) ? (x) => da(C, Gs(x, t, r)) : C, E = (C, ...x) => {
      let P = O(C);
      const v = x ? x.map(O) : [];
      u && m && v.push((k) => {
        const W = Bc(t, k.theme, r);
        if (!W.components || !W.components[u] || !W.components[u].styleOverrides)
          return null;
        const z = W.components[u].styleOverrides, B = {}, L = Gs(k, t, r);
        for (const K in z)
          B[K] = da(z[K], L);
        return m(k, B);
      }), u && !b && v.push((k) => {
        var B, L;
        const W = Bc(t, k.theme, r), z = (L = (B = W == null ? void 0 : W.components) == null ? void 0 : B[u]) == null ? void 0 : L.variants;
        return z ? da({
          variants: z
        }, Gs(k, t, r)) : null;
      }), h || v.push(s);
      const _ = v.length - x.length;
      if (Array.isArray(C) && _ > 0) {
        const k = new Array(_).fill("");
        P = [...C, ...k], P.raw = [...C.raw, ...k];
      }
      const I = g(P, ...v);
      if (process.env.NODE_ENV !== "production") {
        let k;
        u && (k = `${u}${ne(d || "")}`), k === void 0 && (k = `Styled(${kx(l)})`), I.displayName = k;
      }
      return l.muiName && (I.muiName = l.muiName), I;
    };
    return g.withConfig && (E.withConfig = g.withConfig), E;
  };
}
function Lx(e) {
  for (const t in e)
    return !1;
  return !0;
}
function jx(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function pp(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const qx = Fy();
function ts(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const s = e[o], a = t[o];
        if (!a)
          r[o] = s || {};
        else if (!s)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const l in s)
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              const c = l;
              r[o][c] = ts(s[c], a[c]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Vx(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : ts(t.components[r].defaultProps, n);
}
function Ly({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = ll(r);
  return n && (o = o[n] || o), Vx({
    theme: o,
    name: t,
    props: e
  });
}
const Yr = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function Ux(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function ld(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ux(e, t, r);
}
function Bx(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Nn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Nn(Bx(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Kr(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Kr(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const zx = (e) => {
  const t = Nn(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Di = (e, t) => {
  try {
    return zx(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function ul(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function jy(e) {
  e = Nn(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), a = (u, d = (u + r / 30) % 12) => o - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), ul({
    type: l,
    values: c
  });
}
function zc(e) {
  e = Nn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Nn(jy(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function hp(e, t) {
  const r = zc(e), n = zc(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ze(e, t) {
  return e = Nn(e), t = ld(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ul(e);
}
function Hs(e, t, r) {
  try {
    return Ze(e, t);
  } catch {
    return e;
  }
}
function cd(e, t) {
  if (e = Nn(e), t = ld(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return ul(e);
}
function nt(e, t, r) {
  try {
    return cd(e, t);
  } catch {
    return e;
  }
}
function ud(e, t) {
  if (e = Nn(e), t = ld(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return ul(e);
}
function ot(e, t, r) {
  try {
    return ud(e, t);
  } catch {
    return e;
  }
}
function Wx(e, t = 0.15) {
  return zc(e) > 0.5 ? cd(e, t) : ud(e, t);
}
function Ks(e, t, r) {
  try {
    return Wx(e, t);
  } catch {
    return e;
  }
}
function Qr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Gx(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function qy(e, t, r, n, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !Gx(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const hi = Qr(i.element, qy);
hi.isRequired = Qr(i.element.isRequired, qy);
function Hx(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Kx(e, t, r, n, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Hx(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const dd = Qr(i.elementType, Kx), Yx = "exact-prop: ​";
function Vy(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Yx]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Xr(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = o || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const rr = i.oneOfType([i.func, i.object]);
function Wc(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function fd(e, t = 166) {
  let r;
  function n(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function ic(e, t) {
  var r, n, o;
  return /* @__PURE__ */ T.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (n = (r = e.type) == null ? void 0 : r._payload) == null ? void 0 : n.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
function jt(e) {
  return e && e.ownerDocument || document;
}
function dn(e) {
  return jt(e).defaultView || window;
}
function Qx(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? {
    ...t.propTypes
  } : null;
  return (o) => (s, a, l, c, u, ...d) => {
    const f = u || a, p = r == null ? void 0 : r[f];
    if (p) {
      const m = p(s, a, l, c, u, ...d);
      if (m)
        return m;
    }
    return typeof s[a] < "u" && !s[o] ? new Error(`The prop \`${f}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Oa(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let mp = 0;
function Xx(e) {
  const [t, r] = T.useState(e), n = e || t;
  return T.useEffect(() => {
    t == null && (mp += 1, r(`mui-${mp}`));
  }, [t]), n;
}
const Jx = {
  ...T
}, yp = Jx.useId;
function dl(e) {
  if (yp !== void 0) {
    const t = yp();
    return e ?? t;
  }
  return Xx(e);
}
function Zx(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function Zn({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = T.useRef(e !== void 0), [s, a] = T.useState(t), l = o ? e : s;
  if (process.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = T.useRef(t);
    T.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = T.useCallback((u) => {
    o || a(u);
  }, []);
  return [l, c];
}
function Br(e) {
  const t = T.useRef(e);
  return Yr(() => {
    t.current = e;
  }), T.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function bt(...e) {
  return T.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Oa(r, t);
    });
  }, e);
}
const gp = {};
function Uy(e, t) {
  const r = T.useRef(gp);
  return r.current === gp && (r.current = e(t)), r;
}
const eR = [];
function tR(e) {
  T.useEffect(e, eR);
}
class pd {
  constructor() {
    wi(this, "currentId", null);
    wi(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    wi(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new pd();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function By() {
  const e = Uy(pd.create).current;
  return tR(e.disposeEffect), e;
}
function bp(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function zy(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const rR = (e) => {
  const t = T.useRef({});
  return T.useEffect(() => {
    t.current = e;
  }), t.current;
};
function nR(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Wy(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const s = nR(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Gy(e, t, ...r) {
  return e[t] === void 0 ? null : Wy(e, t, ...r);
}
function Gc() {
  return null;
}
Gy.isRequired = Wy;
Gc.isRequired = Gc;
const hd = process.env.NODE_ENV === "production" ? Gc : Gy;
function je(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const s = e[o];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, r && r[u] && (a += " " + r[u]));
    }
    n[o] = a;
  }
  return n;
}
function oR(e) {
  return typeof e == "string";
}
function Hy(e, t, r) {
  return e === void 0 || oR(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Ky(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function vp(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Yy(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const m = ge(r == null ? void 0 : r.className, s, o == null ? void 0 : o.className, n == null ? void 0 : n.className), y = {
      ...r == null ? void 0 : r.style,
      ...o == null ? void 0 : o.style,
      ...n == null ? void 0 : n.style
    }, b = {
      ...r,
      ...o,
      ...n
    };
    return m.length > 0 && (b.className = m), Object.keys(y).length > 0 && (b.style = y), {
      props: b,
      internalRef: void 0
    };
  }
  const a = Ky({
    ...o,
    ...n
  }), l = vp(n), c = vp(o), u = t(a), d = ge(u == null ? void 0 : u.className, r == null ? void 0 : r.className, s, o == null ? void 0 : o.className, n == null ? void 0 : n.className), f = {
    ...u == null ? void 0 : u.style,
    ...r == null ? void 0 : r.style,
    ...o == null ? void 0 : o.style,
    ...n == null ? void 0 : n.style
  }, p = {
    ...u,
    ...r,
    ...c,
    ...l
  };
  return d.length > 0 && (p.className = d), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: u.ref
  };
}
function Qy(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Hc(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...s
  } = e, a = o ? {} : Qy(r, n), {
    props: l,
    internalRef: c
  } = Yy({
    ...s,
    externalSlotProps: a
  }), u = bt(c, a == null ? void 0 : a.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return Hy(t, {
    ...l,
    ref: u
  }, n);
}
function mi(e) {
  return !e || !/* @__PURE__ */ T.isValidElement(e) ? null : e.props.propertyIsEnumerable("ref") ? e.props.ref : (
    // @ts-expect-error element.ref is not included in the ReactElement type
    // We cannot check for it, but isValidElement is true at this point
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    e.ref
  );
}
const iR = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (i.node, i.bool);
const Xy = () => T.useContext(iR) ?? !1, sR = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (i.node, i.object);
function aR(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? ts(o.defaultProps, n) : !o.styleOverrides && !o.variants ? ts(o, n) : n;
}
function lR({
  props: e,
  name: t
}) {
  const r = T.useContext(sR);
  return aR({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
function cR(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Ep = (e, t, r, n = []) => {
  let o = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = r : o && typeof o == "object" && (o[s] = r) : o && typeof o == "object" && (o[s] || (o[s] = n.includes(s) ? [] : {}), o = o[s]);
  });
}, uR = (e, t, r) => {
  function n(o, s = [], a = []) {
    Object.entries(o).forEach(([l, c]) => {
      (!r || r && !r([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  n(e);
}, dR = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function sc(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, s = {}, a = {};
  return uR(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(l, c))) {
        const d = `--${r ? `${r}-` : ""}${l.join("-")}`, f = dR(l, c);
        Object.assign(o, {
          [d]: f
        }), Ep(s, l, `var(${d})`, u), Ep(a, l, `var(${d}, ${f})`, u);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: s,
    varsWithDefaults: a
  };
}
function fR(e, t = {}) {
  const {
    getSelector: r = h,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: s = {},
    components: a,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: u,
    css: d,
    varsWithDefaults: f
  } = sc(c, t);
  let p = f;
  const m = {}, {
    [l]: y,
    ...b
  } = s;
  if (Object.entries(b || {}).forEach(([g, O]) => {
    const {
      vars: E,
      css: C,
      varsWithDefaults: x
    } = sc(O, t);
    p = Ct(p, x), m[g] = {
      css: C,
      vars: E
    };
  }), y) {
    const {
      css: g,
      vars: O,
      varsWithDefaults: E
    } = sc(y, t);
    p = Ct(p, E), m[l] = {
      css: g,
      vars: O
    };
  }
  function h(g, O) {
    var C, x;
    let E = o;
    if (o === "class" && (E = ".%s"), o === "data" && (E = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (E = `[${o}="%s"]`), g) {
      if (E === "media")
        return e.defaultColorScheme === g ? ":root" : {
          [`@media (prefers-color-scheme: ${((x = (C = s[g]) == null ? void 0 : C.palette) == null ? void 0 : x.mode) || g})`]: {
            ":root": O
          }
        };
      if (E)
        return e.defaultColorScheme === g ? `:root, ${E.replace("%s", String(g))}` : E.replace("%s", String(g));
    }
    return ":root";
  }
  return {
    vars: p,
    generateThemeVars: () => {
      let g = {
        ...u
      };
      return Object.entries(m).forEach(([, {
        vars: O
      }]) => {
        g = Ct(g, O);
      }), g;
    },
    generateStyleSheets: () => {
      var P, v;
      const g = [], O = e.defaultColorScheme || "light";
      function E(_, I) {
        Object.keys(I).length && g.push(typeof _ == "string" ? {
          [_]: {
            ...I
          }
        } : _);
      }
      E(r(void 0, {
        ...d
      }), d);
      const {
        [O]: C,
        ...x
      } = m;
      if (C) {
        const {
          css: _
        } = C, I = (v = (P = s[O]) == null ? void 0 : P.palette) == null ? void 0 : v.mode, k = !n && I ? {
          colorScheme: I,
          ..._
        } : {
          ..._
        };
        E(r(O, {
          ...k
        }), k);
      }
      return Object.entries(x).forEach(([_, {
        css: I
      }]) => {
        var z, B;
        const k = (B = (z = s[_]) == null ? void 0 : z.palette) == null ? void 0 : B.mode, W = !n && k ? {
          colorScheme: k,
          ...I
        } : {
          ...I
        };
        E(r(_, {
          ...W
        }), W);
      }), g;
    }
  };
}
function pR(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const hR = al(), mR = qx("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function yR(e) {
  return Ly({
    props: e,
    name: "MuiStack",
    defaultTheme: hR
  });
}
function gR(e, t) {
  const r = T.Children.toArray(e).filter(Boolean);
  return r.reduce((n, o, s) => (n.push(o), s < r.length - 1 && n.push(/* @__PURE__ */ T.cloneElement(t, {
    key: `separator-${s}`
  })), n), []);
}
const bR = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], vR = ({
  ownerState: e,
  theme: t
}) => {
  let r = {
    display: "flex",
    flexDirection: "column",
    ...tr({
      theme: t
    }, Jn({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (n) => ({
      flexDirection: n
    }))
  };
  if (e.spacing) {
    const n = tl(t), o = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = Jn({
      values: e.direction,
      base: o
    }), a = Jn({
      values: e.spacing,
      base: o
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const p = u > 0 ? s[d[u - 1]] : "column";
        s[c] = p;
      }
    }), r = Ct(r, tr({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: so(n, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${bR(u ? s[u] : e.direction)}`]: so(n, c)
      }
    }));
  }
  return r = FC(t.breakpoints, r), r;
};
function ER(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = mR,
    useThemeProps: r = yR,
    componentName: n = "MuiStack"
  } = e, o = () => je({
    root: ["root"]
  }, (c) => ke(n, c), {}), s = t(vR), a = /* @__PURE__ */ T.forwardRef(function(c, u) {
    const d = r(c), f = cl(d), {
      component: p = "div",
      direction: m = "column",
      spacing: y = 0,
      divider: b,
      children: h,
      className: S,
      useFlexGap: w = !1,
      ...g
    } = f, O = {
      direction: m,
      spacing: y,
      useFlexGap: w
    }, E = o();
    return /* @__PURE__ */ R(s, {
      as: p,
      ownerState: O,
      ref: u,
      className: ge(E.root, S),
      ...g,
      children: b ? gR(h, b) : h
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: i.node,
    direction: i.oneOfType([i.oneOf(["column-reverse", "column", "row-reverse", "row"]), i.arrayOf(i.oneOf(["column-reverse", "column", "row-reverse", "row"])), i.object]),
    divider: i.node,
    spacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
    sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
  }), a;
}
const Sp = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Qi.white,
    default: Qi.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, ac = {
  text: {
    primary: Qi.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Qi.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Op(e, t, r, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = ud(e.main, o) : t === "dark" && (e.dark = cd(e.main, s)));
}
function SR(e = "light") {
  return e === "dark" ? {
    main: _o[200],
    light: _o[50],
    dark: _o[400]
  } : {
    main: _o[700],
    light: _o[400],
    dark: _o[800]
  };
}
function OR(e = "light") {
  return e === "dark" ? {
    main: Po[200],
    light: Po[50],
    dark: Po[400]
  } : {
    main: Po[500],
    light: Po[300],
    dark: Po[700]
  };
}
function wR(e = "light") {
  return e === "dark" ? {
    main: Ro[500],
    light: Ro[300],
    dark: Ro[700]
  } : {
    main: Ro[700],
    light: Ro[400],
    dark: Ro[800]
  };
}
function TR(e = "light") {
  return e === "dark" ? {
    main: Ao[400],
    light: Ao[300],
    dark: Ao[700]
  } : {
    main: Ao[700],
    light: Ao[500],
    dark: Ao[900]
  };
}
function CR(e = "light") {
  return e === "dark" ? {
    main: No[400],
    light: No[300],
    dark: No[700]
  } : {
    main: No[800],
    light: No[500],
    dark: No[900]
  };
}
function xR(e = "light") {
  return e === "dark" ? {
    main: Ci[400],
    light: Ci[300],
    dark: Ci[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ci[500],
    dark: Ci[900]
  };
}
function md(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, s = e.primary || SR(t), a = e.secondary || OR(t), l = e.error || wR(t), c = e.info || TR(t), u = e.success || CR(t), d = e.warning || xR(t);
  function f(b) {
    const h = hp(b, ac.text.primary) >= r ? ac.text.primary : Sp.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = hp(b, h);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${h} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const p = ({
    color: b,
    name: h,
    mainShade: S = 500,
    lightShade: w = 300,
    darkShade: g = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[S] && (b.main = b[S]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : Kr(11, h ? ` (${h})` : "", S));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Kr(12, h ? ` (${h})` : "", JSON.stringify(b.main)));
    return Op(b, "light", w, n), Op(b, "dark", g, n), b.contrastText || (b.contrastText = f(b.main)), b;
  }, m = {
    dark: ac,
    light: Sp
  };
  return process.env.NODE_ENV !== "production" && (m[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ct({
    // A collection of common colors.
    common: {
      ...Qi
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: ET,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...m[t]
  }, o);
}
function RR(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, s] = n;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function PR(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function _R(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wp = {
  textTransform: "uppercase"
}, Tp = '"Roboto", "Helvetica", "Arial", sans-serif';
function AR(e, t) {
  const {
    fontFamily: r = Tp,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: d,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const p = n / 14, m = d || ((h) => `${h / c * p}rem`), y = (h, S, w, g, O) => ({
    fontFamily: r,
    fontWeight: h,
    fontSize: m(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Tp ? {
      letterSpacing: `${_R(g / S)}em`
    } : {},
    ...O,
    ...u
  }), b = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, wp),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, wp),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ct({
    htmlFontSize: c,
    pxToRem: m,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...b
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const NR = 0.2, $R = 0.14, IR = 0.12;
function lt(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${NR})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${$R})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${IR})`].join(",");
}
const DR = ["none", lt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), lt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), lt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), lt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), lt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), lt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), lt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), lt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), lt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), lt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), lt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), lt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), lt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), lt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), lt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), lt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), lt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), lt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), lt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), lt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), lt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), lt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), lt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), lt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], kR = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, MR = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Cp(e) {
  return `${Math.round(e)}ms`;
}
function FR(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function LR(e) {
  const t = {
    ...kR,
    ...e.easing
  }, r = {
    ...MR,
    ...e.duration
  };
  return {
    getAutoHeightDuration: FR,
    create: (o = ["all"], s = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", f = (p) => !Number.isNaN(parseFloat(p));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : Cp(a)} ${l} ${typeof c == "string" ? c : Cp(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const jR = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Kc(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: s = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Kr(20));
  const d = md(s), f = al(e);
  let p = Ct(f, {
    mixins: PR(f.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: DR.slice(),
    typography: AR(d, l),
    transitions: LR(a),
    zIndex: {
      ...jR
    }
  });
  if (p = Ct(p, u), p = t.reduce((m, y) => Ct(m, y), p), process.env.NODE_ENV !== "production") {
    const m = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (b, h) => {
      let S;
      for (S in b) {
        const w = b[S];
        if (m.includes(S) && Object.keys(w).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const g = ke("", S);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${S}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${g}' syntax:`, JSON.stringify({
              root: {
                [`&.${g}`]: w
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[S] = {};
        }
      }
    };
    Object.keys(p.components).forEach((b) => {
      const h = p.components[b].styleOverrides;
      h && b.startsWith("Mui") && y(h, b);
    });
  }
  return p.unstable_sxConfig = {
    ...Cs,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, p.unstable_sx = function(y) {
    return pi({
      sx: y,
      theme: this
    });
  }, p;
}
function Yc(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const qR = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Yc(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Jy(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Zy(e) {
  return e === "dark" ? qR : [];
}
function VR(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, s = md(t);
  return {
    palette: s,
    opacity: {
      ...Jy(s.mode),
      ...r
    },
    overlays: n || Zy(s.mode),
    ...o
  };
}
function UR(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const BR = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], zR = (e) => (t, r) => {
  const n = e.colorSchemeSelector;
  let o = n;
  if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), n != null && n.startsWith("data-") && !n.includes("%s") && (o = `[${n}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return BR(e.cssVarPrefix).forEach((a) => {
        s[a] = r[a], delete r[a];
      }), o === "media" ? {
        ":root": r,
        "@media (prefers-color-scheme: dark)": {
          ":root": s
        }
      } : o ? {
        [o.replace("%s", t)]: s,
        [`:root, ${o.replace("%s", t)}`]: r
      } : {
        ":root": {
          ...r,
          ...s
        }
      };
    }
    if (o && o !== "media")
      return `:root, ${o.replace("%s", String(t))}`;
  } else if (t) {
    if (o === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          ":root": r
        }
      };
    if (o)
      return o.replace("%s", String(t));
  }
  return ":root";
};
function WR(e) {
  return Ur(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function GR(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let s = 0; s < o.length; s++) {
      const [a, l] = o[s];
      !WR(l) || a.startsWith("unstable_") ? delete n[a] : Ur(l) && (n[a] = {
        ...l
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function HR(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function U(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function ki(e) {
  return !e || !e.startsWith("hsl") ? e : jy(e);
}
function on(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Di(ki(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function KR(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ir = (e) => {
  try {
    return e();
  } catch {
  }
}, YR = (e = "mui") => cR(e);
function lc(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = VR({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: s,
    ...a
  } = Kc({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: s,
    opacity: {
      ...Jy(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Zy(o)
  }, a;
}
function QR(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: a = UR,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    ...c
  } = e, u = Object.keys(r)[0], d = n || (r.light && u !== "light" ? "light" : u), f = YR(s), {
    [d]: p,
    light: m,
    dark: y,
    ...b
  } = r, h = {
    ...b
  };
  let S = p;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (S = !0), !S)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Kr(21, d));
  const w = lc(h, S, c, d);
  m && !h.light && lc(h, m, void 0, "light"), y && !h.dark && lc(h, y, void 0, "dark");
  let g = {
    defaultColorScheme: d,
    ...w,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    getCssVar: f,
    colorSchemes: h,
    font: {
      ...RR(w.typography),
      ...w.font
    },
    spacing: KR(c.spacing)
  };
  Object.keys(g.colorSchemes).forEach((P) => {
    const v = g.colorSchemes[P].palette, _ = (I) => {
      const k = I.split("-"), W = k[1], z = k[2];
      return f(I, v[W][z]);
    };
    if (v.mode === "light" && (U(v.common, "background", "#fff"), U(v.common, "onBackground", "#000")), v.mode === "dark" && (U(v.common, "background", "#000"), U(v.common, "onBackground", "#fff")), HR(v, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), v.mode === "light") {
      U(v.Alert, "errorColor", nt(v.error.light, 0.6)), U(v.Alert, "infoColor", nt(v.info.light, 0.6)), U(v.Alert, "successColor", nt(v.success.light, 0.6)), U(v.Alert, "warningColor", nt(v.warning.light, 0.6)), U(v.Alert, "errorFilledBg", _("palette-error-main")), U(v.Alert, "infoFilledBg", _("palette-info-main")), U(v.Alert, "successFilledBg", _("palette-success-main")), U(v.Alert, "warningFilledBg", _("palette-warning-main")), U(v.Alert, "errorFilledColor", Ir(() => v.getContrastText(v.error.main))), U(v.Alert, "infoFilledColor", Ir(() => v.getContrastText(v.info.main))), U(v.Alert, "successFilledColor", Ir(() => v.getContrastText(v.success.main))), U(v.Alert, "warningFilledColor", Ir(() => v.getContrastText(v.warning.main))), U(v.Alert, "errorStandardBg", ot(v.error.light, 0.9)), U(v.Alert, "infoStandardBg", ot(v.info.light, 0.9)), U(v.Alert, "successStandardBg", ot(v.success.light, 0.9)), U(v.Alert, "warningStandardBg", ot(v.warning.light, 0.9)), U(v.Alert, "errorIconColor", _("palette-error-main")), U(v.Alert, "infoIconColor", _("palette-info-main")), U(v.Alert, "successIconColor", _("palette-success-main")), U(v.Alert, "warningIconColor", _("palette-warning-main")), U(v.AppBar, "defaultBg", _("palette-grey-100")), U(v.Avatar, "defaultBg", _("palette-grey-400")), U(v.Button, "inheritContainedBg", _("palette-grey-300")), U(v.Button, "inheritContainedHoverBg", _("palette-grey-A100")), U(v.Chip, "defaultBorder", _("palette-grey-400")), U(v.Chip, "defaultAvatarColor", _("palette-grey-700")), U(v.Chip, "defaultIconColor", _("palette-grey-700")), U(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), U(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), U(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), U(v.LinearProgress, "primaryBg", ot(v.primary.main, 0.62)), U(v.LinearProgress, "secondaryBg", ot(v.secondary.main, 0.62)), U(v.LinearProgress, "errorBg", ot(v.error.main, 0.62)), U(v.LinearProgress, "infoBg", ot(v.info.main, 0.62)), U(v.LinearProgress, "successBg", ot(v.success.main, 0.62)), U(v.LinearProgress, "warningBg", ot(v.warning.main, 0.62)), U(v.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.11)`), U(v.Slider, "primaryTrack", ot(v.primary.main, 0.62)), U(v.Slider, "secondaryTrack", ot(v.secondary.main, 0.62)), U(v.Slider, "errorTrack", ot(v.error.main, 0.62)), U(v.Slider, "infoTrack", ot(v.info.main, 0.62)), U(v.Slider, "successTrack", ot(v.success.main, 0.62)), U(v.Slider, "warningTrack", ot(v.warning.main, 0.62));
      const I = Ks(v.background.default, 0.8);
      U(v.SnackbarContent, "bg", I), U(v.SnackbarContent, "color", Ir(() => v.getContrastText(I))), U(v.SpeedDialAction, "fabHoverBg", Ks(v.background.paper, 0.15)), U(v.StepConnector, "border", _("palette-grey-400")), U(v.StepContent, "border", _("palette-grey-400")), U(v.Switch, "defaultColor", _("palette-common-white")), U(v.Switch, "defaultDisabledColor", _("palette-grey-100")), U(v.Switch, "primaryDisabledColor", ot(v.primary.main, 0.62)), U(v.Switch, "secondaryDisabledColor", ot(v.secondary.main, 0.62)), U(v.Switch, "errorDisabledColor", ot(v.error.main, 0.62)), U(v.Switch, "infoDisabledColor", ot(v.info.main, 0.62)), U(v.Switch, "successDisabledColor", ot(v.success.main, 0.62)), U(v.Switch, "warningDisabledColor", ot(v.warning.main, 0.62)), U(v.TableCell, "border", ot(Hs(v.divider, 1), 0.88)), U(v.Tooltip, "bg", Hs(v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      U(v.Alert, "errorColor", ot(v.error.light, 0.6)), U(v.Alert, "infoColor", ot(v.info.light, 0.6)), U(v.Alert, "successColor", ot(v.success.light, 0.6)), U(v.Alert, "warningColor", ot(v.warning.light, 0.6)), U(v.Alert, "errorFilledBg", _("palette-error-dark")), U(v.Alert, "infoFilledBg", _("palette-info-dark")), U(v.Alert, "successFilledBg", _("palette-success-dark")), U(v.Alert, "warningFilledBg", _("palette-warning-dark")), U(v.Alert, "errorFilledColor", Ir(() => v.getContrastText(v.error.dark))), U(v.Alert, "infoFilledColor", Ir(() => v.getContrastText(v.info.dark))), U(v.Alert, "successFilledColor", Ir(() => v.getContrastText(v.success.dark))), U(v.Alert, "warningFilledColor", Ir(() => v.getContrastText(v.warning.dark))), U(v.Alert, "errorStandardBg", nt(v.error.light, 0.9)), U(v.Alert, "infoStandardBg", nt(v.info.light, 0.9)), U(v.Alert, "successStandardBg", nt(v.success.light, 0.9)), U(v.Alert, "warningStandardBg", nt(v.warning.light, 0.9)), U(v.Alert, "errorIconColor", _("palette-error-main")), U(v.Alert, "infoIconColor", _("palette-info-main")), U(v.Alert, "successIconColor", _("palette-success-main")), U(v.Alert, "warningIconColor", _("palette-warning-main")), U(v.AppBar, "defaultBg", _("palette-grey-900")), U(v.AppBar, "darkBg", _("palette-background-paper")), U(v.AppBar, "darkColor", _("palette-text-primary")), U(v.Avatar, "defaultBg", _("palette-grey-600")), U(v.Button, "inheritContainedBg", _("palette-grey-800")), U(v.Button, "inheritContainedHoverBg", _("palette-grey-700")), U(v.Chip, "defaultBorder", _("palette-grey-700")), U(v.Chip, "defaultAvatarColor", _("palette-grey-300")), U(v.Chip, "defaultIconColor", _("palette-grey-300")), U(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), U(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), U(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), U(v.LinearProgress, "primaryBg", nt(v.primary.main, 0.5)), U(v.LinearProgress, "secondaryBg", nt(v.secondary.main, 0.5)), U(v.LinearProgress, "errorBg", nt(v.error.main, 0.5)), U(v.LinearProgress, "infoBg", nt(v.info.main, 0.5)), U(v.LinearProgress, "successBg", nt(v.success.main, 0.5)), U(v.LinearProgress, "warningBg", nt(v.warning.main, 0.5)), U(v.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.13)`), U(v.Slider, "primaryTrack", nt(v.primary.main, 0.5)), U(v.Slider, "secondaryTrack", nt(v.secondary.main, 0.5)), U(v.Slider, "errorTrack", nt(v.error.main, 0.5)), U(v.Slider, "infoTrack", nt(v.info.main, 0.5)), U(v.Slider, "successTrack", nt(v.success.main, 0.5)), U(v.Slider, "warningTrack", nt(v.warning.main, 0.5));
      const I = Ks(v.background.default, 0.98);
      U(v.SnackbarContent, "bg", I), U(v.SnackbarContent, "color", Ir(() => v.getContrastText(I))), U(v.SpeedDialAction, "fabHoverBg", Ks(v.background.paper, 0.15)), U(v.StepConnector, "border", _("palette-grey-600")), U(v.StepContent, "border", _("palette-grey-600")), U(v.Switch, "defaultColor", _("palette-grey-300")), U(v.Switch, "defaultDisabledColor", _("palette-grey-600")), U(v.Switch, "primaryDisabledColor", nt(v.primary.main, 0.55)), U(v.Switch, "secondaryDisabledColor", nt(v.secondary.main, 0.55)), U(v.Switch, "errorDisabledColor", nt(v.error.main, 0.55)), U(v.Switch, "infoDisabledColor", nt(v.info.main, 0.55)), U(v.Switch, "successDisabledColor", nt(v.success.main, 0.55)), U(v.Switch, "warningDisabledColor", nt(v.warning.main, 0.55)), U(v.TableCell, "border", nt(Hs(v.divider, 1), 0.68)), U(v.Tooltip, "bg", Hs(v.grey[700], 0.92));
    }
    on(v.background, "default"), on(v.background, "paper"), on(v.common, "background"), on(v.common, "onBackground"), on(v, "divider"), Object.keys(v).forEach((I) => {
      const k = v[I];
      k && typeof k == "object" && (k.main && U(v[I], "mainChannel", Di(ki(k.main))), k.light && U(v[I], "lightChannel", Di(ki(k.light))), k.dark && U(v[I], "darkChannel", Di(ki(k.dark))), k.contrastText && U(v[I], "contrastTextChannel", Di(ki(k.contrastText))), I === "text" && (on(v[I], "primary"), on(v[I], "secondary")), I === "action" && (k.active && on(v[I], "active"), k.selected && on(v[I], "selected")));
    });
  }), g = t.reduce((P, v) => Ct(P, v), g);
  const O = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: zR(g)
  }, {
    vars: E,
    generateThemeVars: C,
    generateStyleSheets: x
  } = fR(g, O);
  return g.vars = E, Object.entries(g.colorSchemes[g.defaultColorScheme]).forEach(([P, v]) => {
    g[P] = v;
  }), g.generateThemeVars = C, g.generateStyleSheets = x, g.generateSpacing = function() {
    return $y(c.spacing, tl(this));
  }, g.getColorSchemeSelector = pR(l), g.spacing = g.generateSpacing(), g.shouldSkipGeneratingVar = a, g.unstable_sxConfig = {
    ...Cs,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, g.unstable_sx = function(v) {
    return pi({
      sx: v,
      theme: this
    });
  }, g.toRuntimeSource = GR, g;
}
function xp(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: md({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function fl(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r == null ? void 0 : r.mode,
    ...a
  } = e, l = s || "light", c = o == null ? void 0 : o[l], u = {
    ...o,
    ...r ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Kc(e, ...t);
    let d = r;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = Kc({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, xp(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, xp(f, "light", u.light)), f;
  }
  return !r && !("light" in u) && l === "light" && (u.light = !0), QR({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const pl = fl();
function xs() {
  const e = ll(pl);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[Os] || e;
}
function yd({
  props: e,
  name: t
}) {
  return Ly({
    props: e,
    name: t,
    defaultTheme: pl,
    themeId: Os
  });
}
function eg(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const qt = (e) => eg(e) && e !== "classes", se = Fy({
  themeId: Os,
  defaultTheme: pl,
  rootShouldForwardProp: qt
});
function tg(e) {
  return /* @__PURE__ */ R(Iy, {
    ...e,
    defaultTheme: pl,
    themeId: Os
  });
}
process.env.NODE_ENV !== "production" && (tg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool])
});
function XR(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ R(tg, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
function JR() {
  return cl;
}
const Rp = {
  theme: void 0
};
function Ue(e) {
  let t, r;
  return (n) => {
    let o = t;
    return (o === void 0 || n.theme !== r) && (Rp.theme = n.theme, o = e(Rp), t = o, r = n.theme), o;
  };
}
process.env.NODE_ENV !== "production" && (i.node, i.object.isRequired);
function et(e) {
  return lR(e);
}
function ZR(e) {
  return ke("MuiSvgIcon", e);
}
Ne("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const eP = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ne(t)}`, `fontSize${ne(r)}`]
  };
  return je(o, ZR, n);
}, tP = se("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ne(r.color)}`], t[`fontSize${ne(r.fontSize)}`]];
  }
})(Ue(({
  theme: e
}) => {
  var t, r, n, o, s, a, l, c, u, d, f, p, m, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (b) => !b.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((d = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, b]) => b && b.main).map(([b]) => {
        var h, S;
        return {
          props: {
            color: b
          },
          style: {
            color: (S = (h = (e.vars ?? e).palette) == null ? void 0 : h[b]) == null ? void 0 : S.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (p = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : p.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : y.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), rs = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24",
    ...m
  } = n, y = /* @__PURE__ */ T.isValidElement(o) && o.type === "svg", b = {
    ...n,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p,
    hasSvgAsChild: y
  }, h = {};
  d || (h.viewBox = p);
  const S = eP(b);
  return /* @__PURE__ */ Oe(tP, {
    as: l,
    className: ge(S.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: r,
    ...h,
    ...m,
    ...y && o.props,
    ownerState: b,
    children: [y ? o.props.children : o, f ? /* @__PURE__ */ R("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (rs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: i.oneOfType([i.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: i.oneOfType([i.oneOf(["inherit", "large", "medium", "small"]), i.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: i.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: i.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: i.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: i.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: i.string
});
rs && (rs.muiName = "SvgIcon");
function Eo(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ R(rs, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = rs.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(r));
}
function rg(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Qc(e, t) {
  return Qc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Qc(e, t);
}
function ng(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Qc(e, t);
}
const Pp = {
  disabled: !1
};
var rP = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.shape({
  enter: i.number,
  exit: i.number,
  appear: i.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && i.oneOfType([i.string, i.shape({
  enter: i.string,
  exit: i.string,
  active: i.string
}), i.shape({
  enter: i.string,
  enterDone: i.string,
  enterActive: i.string,
  exit: i.string,
  exitDone: i.string,
  exitActive: i.string
})]);
const wa = ar.createContext(null);
var nP = function(t) {
  return t.scrollTop;
}, Mi = "unmounted", jn = "exited", qn = "entering", ko = "entered", Xc = "exiting", _r = /* @__PURE__ */ function(e) {
  ng(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var a = o, l = a && !a.isMounting ? n.enter : n.appear, c;
    return s.appearStatus = null, n.in ? l ? (c = jn, s.appearStatus = qn) : c = ko : n.unmountOnExit || n.mountOnEnter ? c = Mi : c = jn, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var a = o.in;
    return a && s.status === Mi ? {
      status: jn
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== qn && a !== ko && (s = qn) : (a === qn || a === ko) && (s = Xc);
    }
    this.updateStatus(!1, s);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, s, a, l;
    return s = a = l = o, o != null && typeof o != "number" && (s = o.exit, a = o.enter, l = o.appear !== void 0 ? o.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, r.updateStatus = function(o, s) {
    if (o === void 0 && (o = !1), s !== null)
      if (this.cancelNextCallback(), s === qn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : qs.findDOMNode(this);
          a && nP(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === jn && this.setState({
      status: Mi
    });
  }, r.performEnter = function(o) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [qs.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), p = l ? f.appear : f.enter;
    if (!o && !a || Pp.disabled) {
      this.safeSetState({
        status: ko
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: qn
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(p, function() {
        s.safeSetState({
          status: ko
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : qs.findDOMNode(this);
    if (!s || Pp.disabled) {
      this.safeSetState({
        status: jn
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Xc
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: jn
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, s) {
    s = this.setNextCallback(s), this.setState(o, s);
  }, r.setNextCallback = function(o) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : qs.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === Mi)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = rg(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ar.createElement(wa.Provider, {
        value: null
      }, typeof a == "function" ? a(o, l) : ar.cloneElement(ar.Children.only(a), l))
    );
  }, t;
}(ar.Component);
_r.contextType = wa;
_r.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: i.shape({
    current: typeof Element > "u" ? i.any : function(e, t, r, n, o, s) {
      var a = e[t];
      return i.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: i.oneOfType([i.func.isRequired, i.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: i.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: i.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: i.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: i.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: i.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: i.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = rP;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      o[s - 1] = arguments[s];
    return r.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: i.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: i.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: i.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: i.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: i.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: i.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: i.func
} : {};
function $o() {
}
_r.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: $o,
  onEntering: $o,
  onEntered: $o,
  onExit: $o,
  onExiting: $o,
  onExited: $o
};
_r.UNMOUNTED = Mi;
_r.EXITED = jn;
_r.ENTERING = qn;
_r.ENTERED = ko;
_r.EXITING = Xc;
function oP(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gd(e, t) {
  var r = function(s) {
    return t && oa(s) ? t(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ja.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function iP(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in e)
    s in t ? o.length && (n[s] = o, o = []) : o.push(s);
  var a, l = {};
  for (var c in t) {
    if (n[c])
      for (a = 0; a < n[c].length; a++) {
        var u = n[c][a];
        l[n[c][a]] = r(u);
      }
    l[c] = r(c);
  }
  for (a = 0; a < o.length; a++)
    l[o[a]] = r(o[a]);
  return l;
}
function Un(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function sP(e, t) {
  return gd(e.children, function(r) {
    return ia(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Un(r, "appear", e),
      enter: Un(r, "enter", e),
      exit: Un(r, "exit", e)
    });
  });
}
function aP(e, t, r) {
  var n = gd(e.children), o = iP(t, n);
  return Object.keys(o).forEach(function(s) {
    var a = o[s];
    if (oa(a)) {
      var l = s in t, c = s in n, u = t[s], d = oa(u) && !u.props.in;
      c && (!l || d) ? o[s] = ia(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Un(a, "exit", e),
        enter: Un(a, "enter", e)
      }) : !c && l && !d ? o[s] = ia(a, {
        in: !1
      }) : c && l && oa(u) && (o[s] = ia(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Un(a, "exit", e),
        enter: Un(a, "enter", e)
      }));
    }
  }), o;
}
var lP = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, cP = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, bd = /* @__PURE__ */ function(e) {
  ng(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var a = s.handleExited.bind(oP(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? sP(o, l) : aP(o, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, s) {
    var a = gd(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = va({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, s = o.component, a = o.childFactory, l = rg(o, ["component", "childFactory"]), c = this.state.contextValue, u = lP(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ ar.createElement(wa.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ar.createElement(wa.Provider, {
      value: c
    }, /* @__PURE__ */ ar.createElement(s, l, u));
  }, t;
}(ar.Component);
bd.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: i.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: i.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: i.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: i.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: i.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: i.func
} : {};
bd.defaultProps = cP;
const vd = (e) => e.scrollTop;
function ri(e, t) {
  const {
    timeout: r,
    easing: n,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: o.transitionDelay
  };
}
function uP(e) {
  return ke("MuiPaper", e);
}
Ne("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const dP = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, s = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return je(s, uP, o);
}, fP = se("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(Ue(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), hl = /* @__PURE__ */ T.forwardRef(function(t, r) {
  var m;
  const n = et({
    props: t,
    name: "MuiPaper"
  }), o = xs(), {
    className: s,
    component: a = "div",
    elevation: l = 1,
    square: c = !1,
    variant: u = "elevation",
    ...d
  } = n, f = {
    ...n,
    component: a,
    elevation: l,
    square: c,
    variant: u
  }, p = dP(f);
  return process.env.NODE_ENV !== "production" && o.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ R(fP, {
    as: a,
    ownerState: f,
    className: ge(p.root, s),
    ref: r,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (m = o.vars.overlays) == null ? void 0 : m[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ze("#fff", Yc(l))}, ${Ze("#fff", Yc(l))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (hl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Qr(hd, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: i.bool,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: i.oneOfType([i.oneOf(["elevation", "outlined"]), i.string])
});
function Lt(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: s,
    getSlotOwnerState: a,
    internalForwardedProps: l,
    ...c
  } = t, {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...p
  } = s, m = d[e] || n, y = Qy(f[e], o), {
    props: {
      component: b,
      ...h
    },
    internalRef: S
  } = Yy({
    className: r,
    ...c,
    externalForwardedProps: e === "root" ? p : void 0,
    externalSlotProps: y
  }), w = bt(S, y == null ? void 0 : y.ref, t.ref), g = a ? a(h) : {}, O = {
    ...o,
    ...g
  }, E = e === "root" ? b || u : b, C = Hy(m, {
    ...e === "root" && !u && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...h,
    ...E && {
      as: E
    },
    ref: w
  }, O);
  return Object.keys(g).forEach((x) => {
    delete C[x];
  }), [m, C];
}
class Ta {
  constructor() {
    wi(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Ta();
  }
  static use() {
    const t = Uy(Ta.create).current, [r, n] = T.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, T.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = hP(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function pP() {
  return Ta.use();
}
function hP() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function og(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = T.useState(!1), p = ge(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), m = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + o
  }, y = ge(r.child, d && r.childLeaving, n && r.childPulsate);
  return !l && !d && f(!0), T.useEffect(() => {
    if (!l && c != null) {
      const b = setTimeout(c, u);
      return () => {
        clearTimeout(b);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ R("span", {
    className: p,
    style: m,
    children: /* @__PURE__ */ R("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (og.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object.isRequired,
  className: i.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: i.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: i.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: i.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: i.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: i.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: i.number,
  /**
   * exit delay
   */
  timeout: i.number.isRequired
});
const Er = Ne("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Jc = 550, mP = 80, yP = id`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, gP = id`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, bP = id`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, vP = se("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), EP = se(og, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Er.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${yP};
    animation-duration: ${Jc}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Er.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Er.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Er.childLeaving} {
    opacity: 0;
    animation-name: ${gP};
    animation-duration: ${Jc}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Er.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${bP};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ig = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: a,
    ...l
  } = n, [c, u] = T.useState([]), d = T.useRef(0), f = T.useRef(null);
  T.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const p = T.useRef(!1), m = By(), y = T.useRef(null), b = T.useRef(null), h = T.useCallback((O) => {
    const {
      pulsate: E,
      rippleX: C,
      rippleY: x,
      rippleSize: P,
      cb: v
    } = O;
    u((_) => [..._, /* @__PURE__ */ R(EP, {
      classes: {
        ripple: ge(s.ripple, Er.ripple),
        rippleVisible: ge(s.rippleVisible, Er.rippleVisible),
        ripplePulsate: ge(s.ripplePulsate, Er.ripplePulsate),
        child: ge(s.child, Er.child),
        childLeaving: ge(s.childLeaving, Er.childLeaving),
        childPulsate: ge(s.childPulsate, Er.childPulsate)
      },
      timeout: Jc,
      pulsate: E,
      rippleX: C,
      rippleY: x,
      rippleSize: P
    }, d.current)]), d.current += 1, f.current = v;
  }, [s]), S = T.useCallback((O = {}, E = {}, C = () => {
  }) => {
    const {
      pulsate: x = !1,
      center: P = o || E.pulsate,
      fakeElement: v = !1
      // For test purposes
    } = E;
    if ((O == null ? void 0 : O.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (O == null ? void 0 : O.type) === "touchstart" && (p.current = !0);
    const _ = v ? null : b.current, I = _ ? _.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let k, W, z;
    if (P || O === void 0 || O.clientX === 0 && O.clientY === 0 || !O.clientX && !O.touches)
      k = Math.round(I.width / 2), W = Math.round(I.height / 2);
    else {
      const {
        clientX: B,
        clientY: L
      } = O.touches && O.touches.length > 0 ? O.touches[0] : O;
      k = Math.round(B - I.left), W = Math.round(L - I.top);
    }
    if (P)
      z = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const B = Math.max(Math.abs((_ ? _.clientWidth : 0) - k), k) * 2 + 2, L = Math.max(Math.abs((_ ? _.clientHeight : 0) - W), W) * 2 + 2;
      z = Math.sqrt(B ** 2 + L ** 2);
    }
    O != null && O.touches ? y.current === null && (y.current = () => {
      h({
        pulsate: x,
        rippleX: k,
        rippleY: W,
        rippleSize: z,
        cb: C
      });
    }, m.start(mP, () => {
      y.current && (y.current(), y.current = null);
    })) : h({
      pulsate: x,
      rippleX: k,
      rippleY: W,
      rippleSize: z,
      cb: C
    });
  }, [o, h, m]), w = T.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), g = T.useCallback((O, E) => {
    if (m.clear(), (O == null ? void 0 : O.type) === "touchend" && y.current) {
      y.current(), y.current = null, m.start(0, () => {
        g(O, E);
      });
      return;
    }
    y.current = null, u((C) => C.length > 0 ? C.slice(1) : C), f.current = E;
  }, [m]);
  return T.useImperativeHandle(r, () => ({
    pulsate: w,
    start: S,
    stop: g
  }), [w, S, g]), /* @__PURE__ */ R(vP, {
    className: ge(Er.root, s.root, a),
    ref: b,
    ...l,
    children: /* @__PURE__ */ R(bd, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (ig.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string
});
function SP(e) {
  return ke("MuiButtonBase", e);
}
const OP = Ne("MuiButtonBase", ["root", "disabled", "focusVisible"]), wP = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = je({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, SP, o);
  return r && n && (a.root += ` ${n}`), a;
}, TP = se("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${OP.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ao = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: p = !1,
    focusVisibleClassName: m,
    LinkComponent: y = "a",
    onBlur: b,
    onClick: h,
    onContextMenu: S,
    onDragLeave: w,
    onFocus: g,
    onFocusVisible: O,
    onKeyDown: E,
    onKeyUp: C,
    onMouseDown: x,
    onMouseLeave: P,
    onMouseUp: v,
    onTouchEnd: _,
    onTouchMove: I,
    onTouchStart: k,
    tabIndex: W = 0,
    TouchRippleProps: z,
    touchRippleRef: B,
    type: L,
    ...K
  } = n, j = T.useRef(null), X = pP(), q = bt(X.ref, B), [H, oe] = T.useState(!1);
  u && H && oe(!1), T.useImperativeHandle(o, () => ({
    focusVisible: () => {
      oe(!0), j.current.focus();
    }
  }), []);
  const te = X.shouldMount && !d && !u;
  T.useEffect(() => {
    H && p && !d && X.pulsate();
  }, [d, p, H, X]);
  function Y(F, ee, de = f) {
    return Br((be) => (ee && ee(be), de || X[F](be), !0));
  }
  const J = Y("start", x), ae = Y("stop", S), ce = Y("stop", w), Z = Y("stop", v), ie = Y("stop", (F) => {
    H && F.preventDefault(), P && P(F);
  }), re = Y("start", k), fe = Y("stop", _), N = Y("stop", I), ve = Y("stop", (F) => {
    bp(F.target) || oe(!1), b && b(F);
  }, !1), Q = Br((F) => {
    j.current || (j.current = F.currentTarget), bp(F.target) && (oe(!0), O && O(F)), g && g(F);
  }), me = () => {
    const F = j.current;
    return c && c !== "button" && !(F.tagName === "A" && F.href);
  }, ue = Br((F) => {
    p && !F.repeat && H && F.key === " " && X.stop(F, () => {
      X.start(F);
    }), F.target === F.currentTarget && me() && F.key === " " && F.preventDefault(), E && E(F), F.target === F.currentTarget && me() && F.key === "Enter" && !u && (F.preventDefault(), h && h(F));
  }), dt = Br((F) => {
    p && F.key === " " && H && !F.defaultPrevented && X.stop(F, () => {
      X.pulsate(F);
    }), C && C(F), h && F.target === F.currentTarget && me() && F.key === " " && !F.defaultPrevented && h(F);
  });
  let Ee = c;
  Ee === "button" && (K.href || K.to) && (Ee = y);
  const qe = {};
  Ee === "button" ? (qe.type = L === void 0 ? "button" : L, qe.disabled = u) : (!K.href && !K.to && (qe.role = "button"), u && (qe["aria-disabled"] = u));
  const rt = bt(r, j), Ae = {
    ...n,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: p,
    tabIndex: W,
    focusVisible: H
  }, D = wP(Ae);
  return /* @__PURE__ */ Oe(TP, {
    as: Ee,
    className: ge(D.root, l),
    ownerState: Ae,
    onBlur: ve,
    onClick: h,
    onContextMenu: ae,
    onFocus: Q,
    onKeyDown: ue,
    onKeyUp: dt,
    onMouseDown: J,
    onMouseLeave: ie,
    onMouseUp: Z,
    onDragLeave: ce,
    onTouchEnd: fe,
    onTouchMove: N,
    onTouchStart: re,
    ref: rt,
    tabIndex: u ? -1 : W,
    type: L,
    ...qe,
    ...K,
    children: [a, te ? /* @__PURE__ */ R(ig, {
      ref: q,
      center: s,
      ...z
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (ao.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: rr,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: i.bool,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: dd,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: i.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: i.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: i.string,
  /**
   * @ignore
   */
  href: i.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: i.elementType,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onContextMenu: i.func,
  /**
   * @ignore
   */
  onDragLeave: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * @ignore
   */
  onMouseDown: i.func,
  /**
   * @ignore
   */
  onMouseLeave: i.func,
  /**
   * @ignore
   */
  onMouseUp: i.func,
  /**
   * @ignore
   */
  onTouchEnd: i.func,
  /**
   * @ignore
   */
  onTouchMove: i.func,
  /**
   * @ignore
   */
  onTouchStart: i.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @default 0
   */
  tabIndex: i.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: i.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: i.oneOfType([i.func, i.shape({
    current: i.shape({
      pulsate: i.func.isRequired,
      start: i.func.isRequired,
      stop: i.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: i.oneOfType([i.oneOf(["button", "reset", "submit"]), i.string])
});
function CP(e) {
  return typeof e.main == "string";
}
function xP(e, t = []) {
  if (!CP(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Kt(e = []) {
  return ([, t]) => t && xP(t, e);
}
function RP(e) {
  return ke("MuiIconButton", e);
}
const PP = Ne("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), _P = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: s
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${ne(n)}`, o && `edge${ne(o)}`, `size${ne(s)}`]
  };
  return je(a, RP, t);
}, AP = se(ao, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${ne(r.color)}`], r.edge && t[`edge${ne(r.edge)}`], t[`size${ne(r.size)}`]];
  }
})(Ue(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette.action.active, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Ue(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Kt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Kt()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze((e.vars || e).palette[t].main, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${PP.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), ml = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: s,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    disableRipple: d = !1,
    size: f = "medium",
    ...p
  } = n, m = {
    ...n,
    edge: o,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    disableRipple: d,
    size: f
  }, y = _P(m);
  return /* @__PURE__ */ R(AP, {
    className: ge(y.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    disableRipple: d,
    ref: r,
    ...p,
    ownerState: m,
    children: s
  });
});
process.env.NODE_ENV !== "production" && (ml.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Qr(i.node, (e) => T.Children.toArray(e.children).some((r) => /* @__PURE__ */ T.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: i.oneOfType([i.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: i.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["small", "medium", "large"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const NP = Eo(/* @__PURE__ */ R("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function $P(e) {
  return ke("MuiTypography", e);
}
Ne("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const IP = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, DP = JR(), kP = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${ne(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return je(l, $P, a);
}, MP = se("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${ne(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(Ue(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([r, n]) => r !== "inherit" && n && typeof n == "object").map(([r, n]) => ({
      props: {
        variant: r
      },
      style: n
    })), ...Object.entries(e.palette).filter(Kt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
      props: {
        color: `text${ne(r)}`
      },
      style: {
        color: (e.vars || e).palette.text[r]
      }
    })), {
      props: ({
        ownerState: r
      }) => r.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), _p = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, It = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = et({
    props: t,
    name: "MuiTypography"
  }), s = !IP[n], a = DP({
    ...o,
    ...s && {
      color: n
    }
  }), {
    align: l = "inherit",
    className: c,
    component: u,
    gutterBottom: d = !1,
    noWrap: f = !1,
    paragraph: p = !1,
    variant: m = "body1",
    variantMapping: y = _p,
    ...b
  } = a, h = {
    ...a,
    align: l,
    color: n,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: f,
    paragraph: p,
    variant: m,
    variantMapping: y
  }, S = u || (p ? "p" : y[m] || _p[m]) || "span", w = kP(h);
  return /* @__PURE__ */ R(MP, {
    as: S,
    ref: r,
    className: ge(w.root, c),
    ...b,
    ownerState: h,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...b.style
    }
  });
});
process.env.NODE_ENV !== "production" && (It.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: i.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: i.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: i.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: i.bool,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: i.oneOfType([i.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), i.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: i.object
});
function Ap(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function FP(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: r = !0,
    limit: n,
    matchFrom: o = "any",
    stringify: s,
    trim: a = !1
  } = e;
  return (l, {
    inputValue: c,
    getOptionLabel: u
  }) => {
    let d = a ? c.trim() : c;
    r && (d = d.toLowerCase()), t && (d = Ap(d));
    const f = d ? l.filter((p) => {
      let m = (s || u)(p);
      return r && (m = m.toLowerCase()), t && (m = Ap(m)), o === "start" ? m.startsWith(d) : m.includes(d);
    }) : l;
    return typeof n == "number" ? f.slice(0, n) : f;
  };
}
const LP = FP(), Np = 5, jP = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
}, qP = [];
function VP(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = jP,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: r = "Mui",
    autoComplete: n = !1,
    autoHighlight: o = !1,
    autoSelect: s = !1,
    blurOnSelect: a = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: d = e.multiple ? qP : null,
    disableClearable: f = !1,
    disableCloseOnSelect: p = !1,
    disabled: m,
    disabledItemsFocusable: y = !1,
    disableListWrap: b = !1,
    filterOptions: h = LP,
    filterSelectedOptions: S = !1,
    freeSolo: w = !1,
    getOptionDisabled: g,
    getOptionKey: O,
    getOptionLabel: E = (G) => G.label ?? G,
    groupBy: C,
    handleHomeEndKeys: x = !e.freeSolo,
    id: P,
    includeInputInList: v = !1,
    inputValue: _,
    isOptionEqualToValue: I = (G, V) => G === V,
    multiple: k = !1,
    onChange: W,
    onClose: z,
    onHighlightChange: B,
    onInputChange: L,
    onOpen: K,
    open: j,
    openOnFocus: X = !1,
    options: q,
    readOnly: H = !1,
    selectOnFocus: oe = !e.freeSolo,
    value: te
  } = e, Y = dl(P);
  let J = E;
  J = (G) => {
    const V = E(G);
    if (typeof V != "string") {
      if (process.env.NODE_ENV !== "production") {
        const le = V === void 0 ? "undefined" : `${typeof V} (${V})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${le} instead of a string for ${JSON.stringify(G)}.`);
      }
      return String(V);
    }
    return V;
  };
  const ae = T.useRef(!1), ce = T.useRef(!0), Z = T.useRef(null), ie = T.useRef(null), [re, fe] = T.useState(null), [N, ve] = T.useState(-1), Q = o ? 0 : -1, me = T.useRef(Q), [ue, dt] = Zn({
    controlled: te,
    default: d,
    name: u
  }), [Ee, qe] = Zn({
    controlled: _,
    default: "",
    name: u,
    state: "inputValue"
  }), [rt, Ae] = T.useState(!1), D = T.useCallback((G, V, le) => {
    if (!(k ? ue.length < V.length : V !== null) && !l)
      return;
    let Re;
    if (k)
      Re = "";
    else if (V == null)
      Re = "";
    else {
      const tt = J(V);
      Re = typeof tt == "string" ? tt : "";
    }
    Ee !== Re && (qe(Re), L && L(G, Re, le));
  }, [J, Ee, k, L, qe, l, ue]), [F, ee] = Zn({
    controlled: j,
    default: !1,
    name: u,
    state: "open"
  }), [de, be] = T.useState(!0), Se = !k && ue != null && Ee === J(ue), Te = F && !H, Ce = Te ? h(
    q.filter((G) => !(S && (k ? ue : [ue]).some((V) => V !== null && I(G, V)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Se && de ? "" : Ee,
      getOptionLabel: J
    }
  ) : [], pt = rR({
    filteredOptions: Ce,
    value: ue,
    inputValue: Ee
  });
  T.useEffect(() => {
    const G = ue !== pt.value;
    rt && !G || w && !G || D(null, ue, "reset");
  }, [ue, D, rt, pt.value, w]);
  const $e = F && Ce.length > 0 && !H, Dt = Br((G) => {
    G === -1 ? Z.current.focus() : re.querySelector(`[data-tag-index="${G}"]`).focus();
  });
  T.useEffect(() => {
    k && N > ue.length - 1 && (ve(-1), Dt(-1));
  }, [ue, k, N, Dt]);
  function hr(G, V) {
    if (!ie.current || G < 0 || G >= Ce.length)
      return -1;
    let le = G;
    for (; ; ) {
      const xe = ie.current.querySelector(`[data-option-index="${le}"]`), Re = y ? !1 : !xe || xe.disabled || xe.getAttribute("aria-disabled") === "true";
      if (xe && xe.hasAttribute("tabindex") && !Re)
        return le;
      if (V === "next" ? le = (le + 1) % Ce.length : le = (le - 1 + Ce.length) % Ce.length, le === G)
        return -1;
    }
  }
  const kt = Br(({
    event: G,
    index: V,
    reason: le = "auto"
  }) => {
    if (me.current = V, V === -1 ? Z.current.removeAttribute("aria-activedescendant") : Z.current.setAttribute("aria-activedescendant", `${Y}-option-${V}`), B && B(G, V === -1 ? null : Ce[V], le), !ie.current)
      return;
    const xe = ie.current.querySelector(`[role="option"].${r}-focused`);
    xe && (xe.classList.remove(`${r}-focused`), xe.classList.remove(`${r}-focusVisible`));
    let Re = ie.current;
    if (ie.current.getAttribute("role") !== "listbox" && (Re = ie.current.parentElement.querySelector('[role="listbox"]')), !Re)
      return;
    if (V === -1) {
      Re.scrollTop = 0;
      return;
    }
    const tt = ie.current.querySelector(`[data-option-index="${V}"]`);
    if (tt && (tt.classList.add(`${r}-focused`), le === "keyboard" && tt.classList.add(`${r}-focusVisible`), Re.scrollHeight > Re.clientHeight && le !== "mouse" && le !== "touch")) {
      const Je = tt, Vt = Re.clientHeight + Re.scrollTop, Co = Je.offsetTop + Je.offsetHeight;
      Co > Vt ? Re.scrollTop = Co - Re.clientHeight : Je.offsetTop - Je.offsetHeight * (C ? 1.3 : 0) < Re.scrollTop && (Re.scrollTop = Je.offsetTop - Je.offsetHeight * (C ? 1.3 : 0));
    }
  }), pe = Br(({
    event: G,
    diff: V,
    direction: le = "next",
    reason: xe = "auto"
  }) => {
    if (!Te)
      return;
    const tt = hr((() => {
      const Je = Ce.length - 1;
      if (V === "reset")
        return Q;
      if (V === "start")
        return 0;
      if (V === "end")
        return Je;
      const Vt = me.current + V;
      return Vt < 0 ? Vt === -1 && v ? -1 : b && me.current !== -1 || Math.abs(V) > 1 ? 0 : Je : Vt > Je ? Vt === Je + 1 && v ? -1 : b || Math.abs(V) > 1 ? Je : 0 : Vt;
    })(), le);
    if (kt({
      index: tt,
      reason: xe,
      event: G
    }), n && V !== "reset")
      if (tt === -1)
        Z.current.value = Ee;
      else {
        const Je = J(Ce[tt]);
        Z.current.value = Je, Je.toLowerCase().indexOf(Ee.toLowerCase()) === 0 && Ee.length > 0 && Z.current.setSelectionRange(Ee.length, Je.length);
      }
  }), De = () => {
    const G = (V, le) => {
      const xe = V ? J(V) : "", Re = le ? J(le) : "";
      return xe === Re;
    };
    if (me.current !== -1 && pt.filteredOptions && pt.filteredOptions.length !== Ce.length && pt.inputValue === Ee && (k ? ue.length === pt.value.length && pt.value.every((V, le) => J(ue[le]) === J(V)) : G(pt.value, ue))) {
      const V = pt.filteredOptions[me.current];
      if (V)
        return Ce.findIndex((le) => J(le) === J(V));
    }
    return -1;
  }, ft = T.useCallback(() => {
    if (!Te)
      return;
    const G = De();
    if (G !== -1) {
      me.current = G;
      return;
    }
    const V = k ? ue[0] : ue;
    if (Ce.length === 0 || V == null) {
      pe({
        diff: "reset"
      });
      return;
    }
    if (ie.current) {
      if (V != null) {
        const le = Ce[me.current];
        if (k && le && ue.findIndex((Re) => I(le, Re)) !== -1)
          return;
        const xe = Ce.findIndex((Re) => I(Re, V));
        xe === -1 ? pe({
          diff: "reset"
        }) : kt({
          index: xe
        });
        return;
      }
      if (me.current >= Ce.length - 1) {
        kt({
          index: Ce.length - 1
        });
        return;
      }
      kt({
        index: me.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Ce.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    k ? !1 : ue,
    S,
    pe,
    kt,
    Te,
    Ee,
    k
  ]), Nr = Br((G) => {
    Oa(ie, G), G && ft();
  });
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    (!Z.current || Z.current.nodeName !== "INPUT") && (Z.current && Z.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${Z.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), T.useEffect(() => {
    ft();
  }, [ft]);
  const mr = (G) => {
    F || (ee(!0), be(!0), K && K(G));
  }, tn = (G, V) => {
    F && (ee(!1), z && z(G, V));
  }, mn = (G, V, le, xe) => {
    if (k) {
      if (ue.length === V.length && ue.every((Re, tt) => Re === V[tt]))
        return;
    } else if (ue === V)
      return;
    W && W(G, V, le, xe), dt(V);
  }, So = T.useRef(!1), Mn = (G, V, le = "selectOption", xe = "options") => {
    let Re = le, tt = V;
    if (k) {
      if (tt = Array.isArray(ue) ? ue.slice() : [], process.env.NODE_ENV !== "production") {
        const Vt = tt.filter((Co) => I(V, Co));
        Vt.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Vt.length} matches.`].join(`
`));
      }
      const Je = tt.findIndex((Vt) => I(V, Vt));
      Je === -1 ? tt.push(V) : xe !== "freeSolo" && (tt.splice(Je, 1), Re = "removeOption");
    }
    D(G, tt, Re), mn(G, tt, Re, {
      option: V
    }), !p && (!G || !G.ctrlKey && !G.metaKey) && tn(G, Re), (a === !0 || a === "touch" && So.current || a === "mouse" && !So.current) && Z.current.blur();
  };
  function Oo(G, V) {
    if (G === -1)
      return -1;
    let le = G;
    for (; ; ) {
      if (V === "next" && le === ue.length || V === "previous" && le === -1)
        return -1;
      const xe = re.querySelector(`[data-tag-index="${le}"]`);
      if (!xe || !xe.hasAttribute("tabindex") || xe.disabled || xe.getAttribute("aria-disabled") === "true")
        le += V === "next" ? 1 : -1;
      else
        return le;
    }
  }
  const bi = (G, V) => {
    if (!k)
      return;
    Ee === "" && tn(G, "toggleInput");
    let le = N;
    N === -1 ? Ee === "" && V === "previous" && (le = ue.length - 1) : (le += V === "next" ? 1 : -1, le < 0 && (le = 0), le === ue.length && (le = -1)), le = Oo(le, V), ve(le), Dt(le);
  }, Is = (G) => {
    ae.current = !0, qe(""), L && L(G, "", "clear"), mn(G, k ? [] : null, "clear");
  }, wo = (G) => (V) => {
    if (G.onKeyDown && G.onKeyDown(V), !V.defaultMuiPrevented && (N !== -1 && !["ArrowLeft", "ArrowRight"].includes(V.key) && (ve(-1), Dt(-1)), V.which !== 229))
      switch (V.key) {
        case "Home":
          Te && x && (V.preventDefault(), pe({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: V
          }));
          break;
        case "End":
          Te && x && (V.preventDefault(), pe({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: V
          }));
          break;
        case "PageUp":
          V.preventDefault(), pe({
            diff: -Np,
            direction: "previous",
            reason: "keyboard",
            event: V
          }), mr(V);
          break;
        case "PageDown":
          V.preventDefault(), pe({
            diff: Np,
            direction: "next",
            reason: "keyboard",
            event: V
          }), mr(V);
          break;
        case "ArrowDown":
          V.preventDefault(), pe({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: V
          }), mr(V);
          break;
        case "ArrowUp":
          V.preventDefault(), pe({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: V
          }), mr(V);
          break;
        case "ArrowLeft":
          bi(V, "previous");
          break;
        case "ArrowRight":
          bi(V, "next");
          break;
        case "Enter":
          if (me.current !== -1 && Te) {
            const le = Ce[me.current], xe = g ? g(le) : !1;
            if (V.preventDefault(), xe)
              return;
            Mn(V, le, "selectOption"), n && Z.current.setSelectionRange(Z.current.value.length, Z.current.value.length);
          } else w && Ee !== "" && Se === !1 && (k && V.preventDefault(), Mn(V, Ee, "createOption", "freeSolo"));
          break;
        case "Escape":
          Te ? (V.preventDefault(), V.stopPropagation(), tn(V, "escape")) : c && (Ee !== "" || k && ue.length > 0) && (V.preventDefault(), V.stopPropagation(), Is(V));
          break;
        case "Backspace":
          if (k && !H && Ee === "" && ue.length > 0) {
            const le = N === -1 ? ue.length - 1 : N, xe = ue.slice();
            xe.splice(le, 1), mn(V, xe, "removeOption", {
              option: ue[le]
            });
          }
          break;
        case "Delete":
          if (k && !H && Ee === "" && ue.length > 0 && N !== -1) {
            const le = N, xe = ue.slice();
            xe.splice(le, 1), mn(V, xe, "removeOption", {
              option: ue[le]
            });
          }
          break;
      }
  }, Ll = (G) => {
    Ae(!0), X && !ae.current && mr(G);
  }, Ds = (G) => {
    if (t(ie)) {
      Z.current.focus();
      return;
    }
    Ae(!1), ce.current = !0, ae.current = !1, s && me.current !== -1 && Te ? Mn(G, Ce[me.current], "blur") : s && w && Ee !== "" ? Mn(G, Ee, "blur", "freeSolo") : l && D(G, ue, "blur"), tn(G, "blur");
  }, To = (G) => {
    const V = G.target.value;
    Ee !== V && (qe(V), be(!1), L && L(G, V, "input")), V === "" ? !f && !k && mn(G, null, "clear") : mr(G);
  }, vi = (G) => {
    const V = Number(G.currentTarget.getAttribute("data-option-index"));
    me.current !== V && kt({
      event: G,
      index: V,
      reason: "mouse"
    });
  }, Ei = (G) => {
    kt({
      event: G,
      index: Number(G.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), So.current = !0;
  }, jl = (G) => {
    const V = Number(G.currentTarget.getAttribute("data-option-index"));
    Mn(G, Ce[V], "selectOption"), So.current = !1;
  }, ql = (G) => (V) => {
    const le = ue.slice();
    le.splice(G, 1), mn(V, le, "removeOption", {
      option: ue[G]
    });
  }, ks = (G) => {
    F ? tn(G, "toggleInput") : mr(G);
  }, Yd = (G) => {
    G.currentTarget.contains(G.target) && G.target.getAttribute("id") !== Y && G.preventDefault();
  }, Si = (G) => {
    G.currentTarget.contains(G.target) && (Z.current.focus(), oe && ce.current && Z.current.selectionEnd - Z.current.selectionStart === 0 && Z.current.select(), ce.current = !1);
  }, _t = (G) => {
    !m && (Ee === "" || !F) && ks(G);
  };
  let St = w && Ee.length > 0;
  St = St || (k ? ue.length > 0 : ue !== null);
  let rn = Ce;
  if (C) {
    const G = /* @__PURE__ */ new Map();
    let V = !1;
    rn = Ce.reduce((le, xe, Re) => {
      const tt = C(xe);
      return le.length > 0 && le[le.length - 1].group === tt ? le[le.length - 1].options.push(xe) : (process.env.NODE_ENV !== "production" && (G.get(tt) && !V && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), V = !0), G.set(tt, !0)), le.push({
        key: Re,
        index: Re,
        group: tt,
        options: [xe]
      })), le;
    }, []);
  }
  return m && rt && Ds(), {
    getRootProps: (G = {}) => ({
      "aria-owns": $e ? `${Y}-listbox` : null,
      ...G,
      onKeyDown: wo(G),
      onMouseDown: Yd,
      onClick: Si
    }),
    getInputLabelProps: () => ({
      id: `${Y}-label`,
      htmlFor: Y
    }),
    getInputProps: () => ({
      id: Y,
      value: Ee,
      onBlur: Ds,
      onFocus: Ll,
      onChange: To,
      onMouseDown: _t,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Te ? "" : null,
      "aria-autocomplete": n ? "both" : "list",
      "aria-controls": $e ? `${Y}-listbox` : void 0,
      "aria-expanded": $e,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: Z,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: m
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Is
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: ks
    }),
    getTagProps: ({
      index: G
    }) => ({
      key: G,
      "data-tag-index": G,
      tabIndex: -1,
      ...!H && {
        onDelete: ql(G)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${Y}-listbox`,
      "aria-labelledby": `${Y}-label`,
      ref: Nr,
      onMouseDown: (G) => {
        G.preventDefault();
      }
    }),
    getOptionProps: ({
      index: G,
      option: V
    }) => {
      const le = (k ? ue : [ue]).some((Re) => Re != null && I(V, Re)), xe = g ? g(V) : !1;
      return {
        key: (O == null ? void 0 : O(V)) ?? J(V),
        tabIndex: -1,
        role: "option",
        id: `${Y}-option-${G}`,
        onMouseMove: vi,
        onClick: jl,
        onTouchStart: Ei,
        "data-option-index": G,
        "aria-disabled": xe,
        "aria-selected": le
      };
    },
    id: Y,
    inputValue: Ee,
    value: ue,
    dirty: St,
    expanded: Te && re,
    popupOpen: Te,
    focused: rt || N !== -1,
    anchorEl: re,
    setAnchorEl: fe,
    focusedTag: N,
    groupedOptions: rn
  };
}
var Yt = "top", wr = "bottom", Tr = "right", Qt = "left", Ed = "auto", Rs = [Yt, wr, Tr, Qt], ni = "start", ns = "end", UP = "clippingParents", sg = "viewport", Ri = "popper", BP = "reference", $p = /* @__PURE__ */ Rs.reduce(function(e, t) {
  return e.concat([t + "-" + ni, t + "-" + ns]);
}, []), ag = /* @__PURE__ */ [].concat(Rs, [Ed]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ni, t + "-" + ns]);
}, []), zP = "beforeRead", WP = "read", GP = "afterRead", HP = "beforeMain", KP = "main", YP = "afterMain", QP = "beforeWrite", XP = "write", JP = "afterWrite", ZP = [zP, WP, GP, HP, KP, YP, QP, XP, JP];
function Jr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function dr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function lo(e) {
  var t = dr(e).Element;
  return e instanceof t || e instanceof Element;
}
function Or(e) {
  var t = dr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Sd(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = dr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function e1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, s = t.elements[r];
    !Or(s) || !Jr(s) || (Object.assign(s.style, n), Object.keys(o).forEach(function(a) {
      var l = o[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function t1(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], s = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Or(o) || !Jr(o) || (Object.assign(o.style, l), Object.keys(s).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const r1 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: e1,
  effect: t1,
  requires: ["computeStyles"]
};
function Hr(e) {
  return e.split("-")[0];
}
var eo = Math.max, Ca = Math.min, oi = Math.round;
function Zc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function lg() {
  return !/^((?!chrome|android).)*safari/i.test(Zc());
}
function ii(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, s = 1;
  t && Or(e) && (o = e.offsetWidth > 0 && oi(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && oi(n.height) / e.offsetHeight || 1);
  var a = lo(e) ? dr(e) : window, l = a.visualViewport, c = !lg() && r, u = (n.left + (c && l ? l.offsetLeft : 0)) / o, d = (n.top + (c && l ? l.offsetTop : 0)) / s, f = n.width / o, p = n.height / s;
  return {
    width: f,
    height: p,
    top: d,
    right: u + f,
    bottom: d + p,
    left: u,
    x: u,
    y: d
  };
}
function Od(e) {
  var t = ii(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function cg(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Sd(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function fn(e) {
  return dr(e).getComputedStyle(e);
}
function n1(e) {
  return ["table", "td", "th"].indexOf(Jr(e)) >= 0;
}
function Dn(e) {
  return ((lo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function yl(e) {
  return Jr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Sd(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Dn(e)
  );
}
function Ip(e) {
  return !Or(e) || // https://github.com/popperjs/popper-core/issues/837
  fn(e).position === "fixed" ? null : e.offsetParent;
}
function o1(e) {
  var t = /firefox/i.test(Zc()), r = /Trident/i.test(Zc());
  if (r && Or(e)) {
    var n = fn(e);
    if (n.position === "fixed")
      return null;
  }
  var o = yl(e);
  for (Sd(o) && (o = o.host); Or(o) && ["html", "body"].indexOf(Jr(o)) < 0; ) {
    var s = fn(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ps(e) {
  for (var t = dr(e), r = Ip(e); r && n1(r) && fn(r).position === "static"; )
    r = Ip(r);
  return r && (Jr(r) === "html" || Jr(r) === "body" && fn(r).position === "static") ? t : r || o1(e) || t;
}
function wd(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bi(e, t, r) {
  return eo(e, Ca(t, r));
}
function i1(e, t, r) {
  var n = Bi(e, t, r);
  return n > r ? r : n;
}
function ug() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function dg(e) {
  return Object.assign({}, ug(), e);
}
function fg(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var s1 = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, dg(typeof t != "number" ? t : fg(t, Rs));
};
function a1(e) {
  var t, r = e.state, n = e.name, o = e.options, s = r.elements.arrow, a = r.modifiersData.popperOffsets, l = Hr(r.placement), c = wd(l), u = [Qt, Tr].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var f = s1(o.padding, r), p = Od(s), m = c === "y" ? Yt : Qt, y = c === "y" ? wr : Tr, b = r.rects.reference[d] + r.rects.reference[c] - a[c] - r.rects.popper[d], h = a[c] - r.rects.reference[c], S = Ps(s), w = S ? c === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, g = b / 2 - h / 2, O = f[m], E = w - p[d] - f[y], C = w / 2 - p[d] / 2 + g, x = Bi(O, C, E), P = c;
    r.modifiersData[n] = (t = {}, t[P] = x, t.centerOffset = x - C, t);
  }
}
function l1(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || cg(t.elements.popper, o) && (t.elements.arrow = o));
}
const c1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: a1,
  effect: l1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function si(e) {
  return e.split("-")[1];
}
var u1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function d1(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: oi(r * o) / o || 0,
    y: oi(n * o) / o || 0
  };
}
function Dp(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, s = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = a.x, m = p === void 0 ? 0 : p, y = a.y, b = y === void 0 ? 0 : y, h = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = h.x, b = h.y;
  var S = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), g = Qt, O = Yt, E = window;
  if (u) {
    var C = Ps(r), x = "clientHeight", P = "clientWidth";
    if (C === dr(r) && (C = Dn(r), fn(C).position !== "static" && l === "absolute" && (x = "scrollHeight", P = "scrollWidth")), C = C, o === Yt || (o === Qt || o === Tr) && s === ns) {
      O = wr;
      var v = f && C === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[x]
      );
      b -= v - n.height, b *= c ? 1 : -1;
    }
    if (o === Qt || (o === Yt || o === wr) && s === ns) {
      g = Tr;
      var _ = f && C === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[P]
      );
      m -= _ - n.width, m *= c ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: l
  }, u && u1), k = d === !0 ? d1({
    x: m,
    y: b
  }, dr(r)) : {
    x: m,
    y: b
  };
  if (m = k.x, b = k.y, c) {
    var W;
    return Object.assign({}, I, (W = {}, W[O] = w ? "0" : "", W[g] = S ? "0" : "", W.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", W));
  }
  return Object.assign({}, I, (t = {}, t[O] = w ? b + "px" : "", t[g] = S ? m + "px" : "", t.transform = "", t));
}
function f1(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, l = r.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Hr(t.placement),
    variation: si(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Dp(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Dp(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const p1 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: f1,
  data: {}
};
var Ys = {
  passive: !0
};
function h1(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, s = o === void 0 ? !0 : o, a = n.resize, l = a === void 0 ? !0 : a, c = dr(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Ys);
  }), l && c.addEventListener("resize", r.update, Ys), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Ys);
    }), l && c.removeEventListener("resize", r.update, Ys);
  };
}
const m1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: h1,
  data: {}
};
var y1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function fa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return y1[t];
  });
}
var g1 = {
  start: "end",
  end: "start"
};
function kp(e) {
  return e.replace(/start|end/g, function(t) {
    return g1[t];
  });
}
function Td(e) {
  var t = dr(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Cd(e) {
  return ii(Dn(e)).left + Td(e).scrollLeft;
}
function b1(e, t) {
  var r = dr(e), n = Dn(e), o = r.visualViewport, s = n.clientWidth, a = n.clientHeight, l = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    var u = lg();
    (u || !u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: l + Cd(e),
    y: c
  };
}
function v1(e) {
  var t, r = Dn(e), n = Td(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = eo(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = eo(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -n.scrollLeft + Cd(e), c = -n.scrollTop;
  return fn(o || r).direction === "rtl" && (l += eo(r.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function xd(e) {
  var t = fn(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function pg(e) {
  return ["html", "body", "#document"].indexOf(Jr(e)) >= 0 ? e.ownerDocument.body : Or(e) && xd(e) ? e : pg(yl(e));
}
function zi(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = pg(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = dr(n), a = o ? [s].concat(s.visualViewport || [], xd(n) ? n : []) : n, l = t.concat(a);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(zi(yl(a)))
  );
}
function eu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function E1(e, t) {
  var r = ii(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Mp(e, t, r) {
  return t === sg ? eu(b1(e, r)) : lo(t) ? E1(t, r) : eu(v1(Dn(e)));
}
function S1(e) {
  var t = zi(yl(e)), r = ["absolute", "fixed"].indexOf(fn(e).position) >= 0, n = r && Or(e) ? Ps(e) : e;
  return lo(n) ? t.filter(function(o) {
    return lo(o) && cg(o, n) && Jr(o) !== "body";
  }) : [];
}
function O1(e, t, r, n) {
  var o = t === "clippingParents" ? S1(e) : [].concat(t), s = [].concat(o, [r]), a = s[0], l = s.reduce(function(c, u) {
    var d = Mp(e, u, n);
    return c.top = eo(d.top, c.top), c.right = Ca(d.right, c.right), c.bottom = Ca(d.bottom, c.bottom), c.left = eo(d.left, c.left), c;
  }, Mp(e, a, n));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function hg(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Hr(n) : null, s = n ? si(n) : null, a = t.x + t.width / 2 - r.width / 2, l = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case Yt:
      c = {
        x: a,
        y: t.y - r.height
      };
      break;
    case wr:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Tr:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Qt:
      c = {
        x: t.x - r.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? wd(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case ni:
        c[u] = c[u] - (t[d] / 2 - r[d] / 2);
        break;
      case ns:
        c[u] = c[u] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return c;
}
function os(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, l = r.boundary, c = l === void 0 ? UP : l, u = r.rootBoundary, d = u === void 0 ? sg : u, f = r.elementContext, p = f === void 0 ? Ri : f, m = r.altBoundary, y = m === void 0 ? !1 : m, b = r.padding, h = b === void 0 ? 0 : b, S = dg(typeof h != "number" ? h : fg(h, Rs)), w = p === Ri ? BP : Ri, g = e.rects.popper, O = e.elements[y ? w : p], E = O1(lo(O) ? O : O.contextElement || Dn(e.elements.popper), c, d, a), C = ii(e.elements.reference), x = hg({
    reference: C,
    element: g,
    strategy: "absolute",
    placement: o
  }), P = eu(Object.assign({}, g, x)), v = p === Ri ? P : C, _ = {
    top: E.top - v.top + S.top,
    bottom: v.bottom - E.bottom + S.bottom,
    left: E.left - v.left + S.left,
    right: v.right - E.right + S.right
  }, I = e.modifiersData.offset;
  if (p === Ri && I) {
    var k = I[o];
    Object.keys(_).forEach(function(W) {
      var z = [Tr, wr].indexOf(W) >= 0 ? 1 : -1, B = [Yt, wr].indexOf(W) >= 0 ? "y" : "x";
      _[W] += k[B] * z;
    });
  }
  return _;
}
function w1(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, s = r.rootBoundary, a = r.padding, l = r.flipVariations, c = r.allowedAutoPlacements, u = c === void 0 ? ag : c, d = si(n), f = d ? l ? $p : $p.filter(function(y) {
    return si(y) === d;
  }) : Rs, p = f.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  p.length === 0 && (p = f);
  var m = p.reduce(function(y, b) {
    return y[b] = os(e, {
      placement: b,
      boundary: o,
      rootBoundary: s,
      padding: a
    })[Hr(b)], y;
  }, {});
  return Object.keys(m).sort(function(y, b) {
    return m[y] - m[b];
  });
}
function T1(e) {
  if (Hr(e) === Ed)
    return [];
  var t = fa(e);
  return [kp(e), t, kp(t)];
}
function C1(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, s = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !0 : a, c = r.fallbackPlacements, u = r.padding, d = r.boundary, f = r.rootBoundary, p = r.altBoundary, m = r.flipVariations, y = m === void 0 ? !0 : m, b = r.allowedAutoPlacements, h = t.options.placement, S = Hr(h), w = S === h, g = c || (w || !y ? [fa(h)] : T1(h)), O = [h].concat(g).reduce(function(Y, J) {
      return Y.concat(Hr(J) === Ed ? w1(t, {
        placement: J,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: b
      }) : J);
    }, []), E = t.rects.reference, C = t.rects.popper, x = /* @__PURE__ */ new Map(), P = !0, v = O[0], _ = 0; _ < O.length; _++) {
      var I = O[_], k = Hr(I), W = si(I) === ni, z = [Yt, wr].indexOf(k) >= 0, B = z ? "width" : "height", L = os(t, {
        placement: I,
        boundary: d,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), K = z ? W ? Tr : Qt : W ? wr : Yt;
      E[B] > C[B] && (K = fa(K));
      var j = fa(K), X = [];
      if (s && X.push(L[k] <= 0), l && X.push(L[K] <= 0, L[j] <= 0), X.every(function(Y) {
        return Y;
      })) {
        v = I, P = !1;
        break;
      }
      x.set(I, X);
    }
    if (P)
      for (var q = y ? 3 : 1, H = function(J) {
        var ae = O.find(function(ce) {
          var Z = x.get(ce);
          if (Z)
            return Z.slice(0, J).every(function(ie) {
              return ie;
            });
        });
        if (ae)
          return v = ae, "break";
      }, oe = q; oe > 0; oe--) {
        var te = H(oe);
        if (te === "break") break;
      }
    t.placement !== v && (t.modifiersData[n]._skip = !0, t.placement = v, t.reset = !0);
  }
}
const x1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: C1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Fp(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Lp(e) {
  return [Yt, Tr, wr, Qt].some(function(t) {
    return e[t] >= 0;
  });
}
function R1(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, a = os(t, {
    elementContext: "reference"
  }), l = os(t, {
    altBoundary: !0
  }), c = Fp(a, n), u = Fp(l, o, s), d = Lp(c), f = Lp(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const P1 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: R1
};
function _1(e, t, r) {
  var n = Hr(e), o = [Qt, Yt].indexOf(n) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * o, [Qt, Tr].indexOf(n) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function A1(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, s = o === void 0 ? [0, 0] : o, a = ag.reduce(function(d, f) {
    return d[f] = _1(f, t.rects, s), d;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const N1 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: A1
};
function $1(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = hg({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const I1 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: $1,
  data: {}
};
function D1(e) {
  return e === "x" ? "y" : "x";
}
function k1(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, s = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !1 : a, c = r.boundary, u = r.rootBoundary, d = r.altBoundary, f = r.padding, p = r.tether, m = p === void 0 ? !0 : p, y = r.tetherOffset, b = y === void 0 ? 0 : y, h = os(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), S = Hr(t.placement), w = si(t.placement), g = !w, O = wd(S), E = D1(O), C = t.modifiersData.popperOffsets, x = t.rects.reference, P = t.rects.popper, v = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, _ = typeof v == "number" ? {
    mainAxis: v,
    altAxis: v
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, v), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, k = {
    x: 0,
    y: 0
  };
  if (C) {
    if (s) {
      var W, z = O === "y" ? Yt : Qt, B = O === "y" ? wr : Tr, L = O === "y" ? "height" : "width", K = C[O], j = K + h[z], X = K - h[B], q = m ? -P[L] / 2 : 0, H = w === ni ? x[L] : P[L], oe = w === ni ? -P[L] : -x[L], te = t.elements.arrow, Y = m && te ? Od(te) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ug(), ae = J[z], ce = J[B], Z = Bi(0, x[L], Y[L]), ie = g ? x[L] / 2 - q - Z - ae - _.mainAxis : H - Z - ae - _.mainAxis, re = g ? -x[L] / 2 + q + Z + ce + _.mainAxis : oe + Z + ce + _.mainAxis, fe = t.elements.arrow && Ps(t.elements.arrow), N = fe ? O === "y" ? fe.clientTop || 0 : fe.clientLeft || 0 : 0, ve = (W = I == null ? void 0 : I[O]) != null ? W : 0, Q = K + ie - ve - N, me = K + re - ve, ue = Bi(m ? Ca(j, Q) : j, K, m ? eo(X, me) : X);
      C[O] = ue, k[O] = ue - K;
    }
    if (l) {
      var dt, Ee = O === "x" ? Yt : Qt, qe = O === "x" ? wr : Tr, rt = C[E], Ae = E === "y" ? "height" : "width", D = rt + h[Ee], F = rt - h[qe], ee = [Yt, Qt].indexOf(S) !== -1, de = (dt = I == null ? void 0 : I[E]) != null ? dt : 0, be = ee ? D : rt - x[Ae] - P[Ae] - de + _.altAxis, Se = ee ? rt + x[Ae] + P[Ae] - de - _.altAxis : F, Te = m && ee ? i1(be, rt, Se) : Bi(m ? be : D, rt, m ? Se : F);
      C[E] = Te, k[E] = Te - rt;
    }
    t.modifiersData[n] = k;
  }
}
const M1 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: k1,
  requiresIfExists: ["offset"]
};
function F1(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function L1(e) {
  return e === dr(e) || !Or(e) ? Td(e) : F1(e);
}
function j1(e) {
  var t = e.getBoundingClientRect(), r = oi(t.width) / e.offsetWidth || 1, n = oi(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function q1(e, t, r) {
  r === void 0 && (r = !1);
  var n = Or(t), o = Or(t) && j1(t), s = Dn(t), a = ii(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Jr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  xd(s)) && (l = L1(t)), Or(t) ? (c = ii(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = Cd(s))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function V1(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function o(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!r.has(l)) {
        var c = t.get(l);
        c && o(c);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || o(s);
  }), n;
}
function U1(e) {
  var t = V1(e);
  return ZP.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function B1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function z1(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var jp = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qp() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function W1(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, s = o === void 0 ? jp : o;
  return function(l, c, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, jp, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, m = {
      state: d,
      setOptions: function(S) {
        var w = typeof S == "function" ? S(d.options) : S;
        b(), d.options = Object.assign({}, s, d.options, w), d.scrollParents = {
          reference: lo(l) ? zi(l) : l.contextElement ? zi(l.contextElement) : [],
          popper: zi(c)
        };
        var g = U1(z1([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = g.filter(function(O) {
          return O.enabled;
        }), y(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var S = d.elements, w = S.reference, g = S.popper;
          if (qp(w, g)) {
            d.rects = {
              reference: q1(w, Ps(g), d.options.strategy === "fixed"),
              popper: Od(g)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(_) {
              return d.modifiersData[_.name] = Object.assign({}, _.data);
            });
            for (var O = 0; O < d.orderedModifiers.length; O++) {
              if (d.reset === !0) {
                d.reset = !1, O = -1;
                continue;
              }
              var E = d.orderedModifiers[O], C = E.fn, x = E.options, P = x === void 0 ? {} : x, v = E.name;
              typeof C == "function" && (d = C({
                state: d,
                options: P,
                name: v,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: B1(function() {
        return new Promise(function(h) {
          m.forceUpdate(), h(d);
        });
      }),
      destroy: function() {
        b(), p = !0;
      }
    };
    if (!qp(l, c))
      return m;
    m.setOptions(u).then(function(h) {
      !p && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function y() {
      d.orderedModifiers.forEach(function(h) {
        var S = h.name, w = h.options, g = w === void 0 ? {} : w, O = h.effect;
        if (typeof O == "function") {
          var E = O({
            state: d,
            name: S,
            instance: m,
            options: g
          }), C = function() {
          };
          f.push(E || C);
        }
      });
    }
    function b() {
      f.forEach(function(h) {
        return h();
      }), f = [];
    }
    return m;
  };
}
var G1 = [m1, I1, p1, r1, N1, x1, M1, c1, P1], H1 = /* @__PURE__ */ W1({
  defaultModifiers: G1
});
function K1(e) {
  return typeof e == "function" ? e() : e;
}
const is = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: s = !1
  } = t, [a, l] = T.useState(null), c = bt(mi(n), r);
  if (Yr(() => {
    s || l(K1(o) || document.body);
  }, [o, s]), Yr(() => {
    if (a && !s)
      return Oa(r, a), () => {
        Oa(r, null);
      };
  }, [r, a, s]), s) {
    if (/* @__PURE__ */ T.isValidElement(n)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ T.cloneElement(n, u);
    }
    return /* @__PURE__ */ R(T.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ R(T.Fragment, {
    children: a && /* @__PURE__ */ Uv.createPortal(n, a)
  });
});
process.env.NODE_ENV !== "production" && (is.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: i.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Xr, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool
});
process.env.NODE_ENV !== "production" && (is.propTypes = Vy(is.propTypes));
function Y1(e) {
  return ke("MuiPopper", e);
}
Ne("MuiPopper", ["root"]);
function Q1(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function xa(e) {
  return typeof e == "function" ? e() : e;
}
function gl(e) {
  return e.nodeType !== void 0;
}
function X1(e) {
  return !gl(e);
}
const J1 = (e) => {
  const {
    classes: t
  } = e;
  return je({
    root: ["root"]
  }, Y1, t);
}, Z1 = {}, e_ = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    direction: s,
    disablePortal: a,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: d,
    popperRef: f,
    slotProps: p = {},
    slots: m = {},
    TransitionProps: y,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...h
  } = t, S = T.useRef(null), w = bt(S, r), g = T.useRef(null), O = bt(g, f), E = T.useRef(O);
  Yr(() => {
    E.current = O;
  }, [O]), T.useImperativeHandle(f, () => g.current, []);
  const C = Q1(u, s), [x, P] = T.useState(C), [v, _] = T.useState(xa(n));
  T.useEffect(() => {
    g.current && g.current.forceUpdate();
  }), T.useEffect(() => {
    n && _(xa(n));
  }, [n]), Yr(() => {
    if (!v || !c)
      return;
    const B = (j) => {
      P(j.placement);
    };
    if (process.env.NODE_ENV !== "production" && v && gl(v) && v.nodeType === 1) {
      const j = v.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && j.top === 0 && j.left === 0 && j.right === 0 && j.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let L = [{
      name: "preventOverflow",
      options: {
        altBoundary: a
      }
    }, {
      name: "flip",
      options: {
        altBoundary: a
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: j
      }) => {
        B(j);
      }
    }];
    l != null && (L = L.concat(l)), d && d.modifiers != null && (L = L.concat(d.modifiers));
    const K = H1(v, S.current, {
      placement: C,
      ...d,
      modifiers: L
    });
    return E.current(K), () => {
      K.destroy(), E.current(null);
    };
  }, [v, a, l, c, d, C]);
  const I = {
    placement: x
  };
  y !== null && (I.TransitionProps = y);
  const k = J1(t), W = m.root ?? "div", z = Hc({
    elementType: W,
    externalSlotProps: p.root,
    externalForwardedProps: h,
    additionalProps: {
      role: "tooltip",
      ref: w
    },
    ownerState: t,
    className: k.root
  });
  return /* @__PURE__ */ R(W, {
    ...z,
    children: typeof o == "function" ? o(I) : o
  });
}), mg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: s,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: p = Z1,
    popperRef: m,
    style: y,
    transition: b = !1,
    slotProps: h = {},
    slots: S = {},
    ...w
  } = t, [g, O] = T.useState(!0), E = () => {
    O(!1);
  }, C = () => {
    O(!0);
  };
  if (!c && !d && (!b || g))
    return null;
  let x;
  if (s)
    x = s;
  else if (n) {
    const _ = xa(n);
    x = _ && gl(_) ? jt(_).body : jt(null).body;
  }
  const P = !d && c && (!b || g) ? "none" : void 0, v = b ? {
    in: d,
    onEnter: E,
    onExited: C
  } : void 0;
  return /* @__PURE__ */ R(is, {
    disablePortal: l,
    container: x,
    children: /* @__PURE__ */ R(e_, {
      anchorEl: n,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: r,
      open: b ? !g : d,
      placement: f,
      popperOptions: p,
      popperRef: m,
      slotProps: h,
      slots: S,
      ...w,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: P,
        ...y
      },
      TransitionProps: v,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (mg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Qr(i.oneOfType([Xr, i.object, i.func]), (e) => {
    if (e.open) {
      const t = xa(e.anchorEl);
      if (t && gl(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || X1(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: i.oneOfType([i.node, i.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Xr, i.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: i.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: i.arrayOf(i.shape({
    data: i.object,
    effect: i.func,
    enabled: i.bool,
    fn: i.func,
    name: i.any,
    options: i.object,
    phase: i.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: i.arrayOf(i.string),
    requiresIfExists: i.arrayOf(i.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: i.shape({
    modifiers: i.array,
    onFirstUpdate: i.func,
    placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: i.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: rr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: i.bool
});
const t_ = se(mg, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Rd = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Xy(), o = et({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: a,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: d,
    keepMounted: f,
    modifiers: p,
    open: m,
    placement: y,
    popperOptions: b,
    popperRef: h,
    transition: S,
    slots: w,
    slotProps: g,
    ...O
  } = o, E = (w == null ? void 0 : w.root) ?? (l == null ? void 0 : l.Root), C = {
    anchorEl: s,
    container: u,
    disablePortal: d,
    keepMounted: f,
    modifiers: p,
    open: m,
    placement: y,
    popperOptions: b,
    popperRef: h,
    transition: S,
    ...O
  };
  return /* @__PURE__ */ R(t_, {
    as: a,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: E
    },
    slotProps: g ?? c,
    ...C,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (Rd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: i.oneOfType([Xr, i.object, i.func]),
  /**
   * Popper render function or node.
   */
  children: i.oneOfType([i.node, i.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Xr, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: i.arrayOf(i.shape({
    data: i.object,
    effect: i.func,
    enabled: i.bool,
    fn: i.func,
    name: i.any,
    options: i.object,
    phase: i.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: i.arrayOf(i.string),
    requiresIfExists: i.arrayOf(i.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: i.shape({
    modifiers: i.array,
    onFirstUpdate: i.func,
    placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: i.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: rr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: i.bool
});
function r_(e) {
  return ke("MuiListSubheader", e);
}
Ne("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const n_ = (e) => {
  const {
    classes: t,
    color: r,
    disableGutters: n,
    inset: o,
    disableSticky: s
  } = e, a = {
    root: ["root", r !== "default" && `color${ne(r)}`, !n && "gutters", o && "inset", !s && "sticky"]
  };
  return je(a, r_, t);
}, o_ = se("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${ne(r.color)}`], !r.disableGutters && t.gutters, r.inset && t.inset, !r.disableSticky && t.sticky];
  }
})(Ue(({
  theme: e
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (e.vars || e).palette.background.paper
    }
  }]
}))), Ra = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: o,
    color: s = "default",
    component: a = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1,
    ...d
  } = n, f = {
    ...n,
    color: s,
    component: a,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }, p = n_(f);
  return /* @__PURE__ */ R(o_, {
    as: a,
    className: ge(p.root, o),
    ref: r,
    ownerState: f,
    ...d
  });
});
Ra && (Ra.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (Ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: i.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: i.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: i.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const i_ = Eo(/* @__PURE__ */ R("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function s_(e) {
  return ke("MuiChip", e);
}
const Ie = Ne("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), a_ = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: s,
    onDelete: a,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, r && "disabled", `size${ne(n)}`, `color${ne(o)}`, l && "clickable", l && `clickableColor${ne(o)}`, a && "deletable", a && `deletableColor${ne(o)}`, `${c}${ne(o)}`],
    label: ["label", `label${ne(n)}`],
    avatar: ["avatar", `avatar${ne(n)}`, `avatarColor${ne(o)}`],
    icon: ["icon", `icon${ne(n)}`, `iconColor${ne(s)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ne(n)}`, `deleteIconColor${ne(o)}`, `deleteIcon${ne(c)}Color${ne(o)}`]
  };
  return je(u, s_, t);
}, l_ = se("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      color: n,
      iconColor: o,
      clickable: s,
      onDelete: a,
      size: l,
      variant: c
    } = r;
    return [{
      [`& .${Ie.avatar}`]: t.avatar
    }, {
      [`& .${Ie.avatar}`]: t[`avatar${ne(l)}`]
    }, {
      [`& .${Ie.avatar}`]: t[`avatarColor${ne(n)}`]
    }, {
      [`& .${Ie.icon}`]: t.icon
    }, {
      [`& .${Ie.icon}`]: t[`icon${ne(l)}`]
    }, {
      [`& .${Ie.icon}`]: t[`iconColor${ne(o)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIcon${ne(l)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIconColor${ne(n)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIcon${ne(c)}Color${ne(n)}`]
    }, t.root, t[`size${ne(l)}`], t[`color${ne(n)}`], s && t.clickable, s && n !== "default" && t[`clickableColor${ne(n)})`], a && t.deletable, a && n !== "default" && t[`deletableColor${ne(n)}`], t[c], t[`${c}${ne(n)}`]];
  }
})(Ue(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${Ie.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ie.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Ie.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Ie.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Ie.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Ie.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Ie.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Ze(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Ze(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${Ie.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Ie.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Kt(["contrastText"])).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        backgroundColor: (e.vars || e).palette[r].main,
        color: (e.vars || e).palette[r].contrastText,
        [`& .${Ie.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)` : Ze(e.palette[r].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].contrastText
          }
        }
      }
    })), {
      props: (r) => r.iconColor === r.color,
      style: {
        [`& .${Ie.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (r) => r.iconColor === r.color && r.color !== "default",
      style: {
        [`& .${Ie.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Ie.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ze(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Kt(["dark"])).map(([r]) => ({
      props: {
        color: r,
        onDelete: !0
      },
      style: {
        [`&.${Ie.focusVisible}`]: {
          background: (e.vars || e).palette[r].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ze(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${Ie.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ze(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Kt(["dark"])).map(([r]) => ({
      props: {
        color: r,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Ie.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[r].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${Ie.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Ie.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Ie.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Ie.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${Ie.icon}`]: {
          marginLeft: 4
        },
        [`& .${Ie.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${Ie.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${Ie.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Kt()).map(([r]) => ({
      props: {
        variant: "outlined",
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Ze(e.palette[r].main, 0.7)}`,
        [`&.${Ie.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette[r].main, e.palette.action.hoverOpacity)
        },
        [`&.${Ie.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Ze(e.palette[r].main, e.palette.action.focusOpacity)
        },
        [`& .${Ie.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Ze(e.palette[r].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].main
          }
        }
      }
    }))]
  };
})), c_ = se("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${ne(n)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function Vp(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const yg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: s,
    clickable: a,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: f,
    label: p,
    onClick: m,
    onDelete: y,
    onKeyDown: b,
    onKeyUp: h,
    size: S = "medium",
    variant: w = "filled",
    tabIndex: g,
    skipFocusWhenDisabled: O = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...E
  } = n, C = T.useRef(null), x = bt(C, r), P = (X) => {
    X.stopPropagation(), y && y(X);
  }, v = (X) => {
    X.currentTarget === X.target && Vp(X) && X.preventDefault(), b && b(X);
  }, _ = (X) => {
    X.currentTarget === X.target && y && Vp(X) && y(X), h && h(X);
  }, I = a !== !1 && m ? !0 : a, k = I || y ? ao : c || "div", W = {
    ...n,
    component: k,
    disabled: d,
    size: S,
    color: l,
    iconColor: /* @__PURE__ */ T.isValidElement(f) && f.props.color || l,
    onDelete: !!y,
    clickable: I,
    variant: w
  }, z = a_(W), B = k === ao ? {
    component: c || "div",
    focusVisibleClassName: z.focusVisible,
    ...y && {
      disableRipple: !0
    }
  } : {};
  let L = null;
  y && (L = u && /* @__PURE__ */ T.isValidElement(u) ? /* @__PURE__ */ T.cloneElement(u, {
    className: ge(u.props.className, z.deleteIcon),
    onClick: P
  }) : /* @__PURE__ */ R(i_, {
    className: ge(z.deleteIcon),
    onClick: P
  }));
  let K = null;
  o && /* @__PURE__ */ T.isValidElement(o) && (K = /* @__PURE__ */ T.cloneElement(o, {
    className: ge(z.avatar, o.props.className)
  }));
  let j = null;
  return f && /* @__PURE__ */ T.isValidElement(f) && (j = /* @__PURE__ */ T.cloneElement(f, {
    className: ge(z.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && K && j && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ Oe(l_, {
    as: k,
    className: ge(z.root, s),
    disabled: I && d ? !0 : void 0,
    onClick: m,
    onKeyDown: v,
    onKeyUp: _,
    ref: x,
    tabIndex: O && d ? -1 : g,
    ownerState: W,
    ...B,
    ...E,
    children: [K || j, /* @__PURE__ */ R(c_, {
      className: ge(z.label),
      ownerState: W,
      children: p
    }), L]
  });
});
process.env.NODE_ENV !== "production" && (yg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: i.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Zx,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: i.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: i.oneOfType([i.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: i.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * Icon element.
   */
  icon: i.element,
  /**
   * The content of the component.
   */
  label: i.node,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @ignore
   */
  tabIndex: i.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: i.oneOfType([i.oneOf(["filled", "outlined"]), i.string])
});
function Qs(e) {
  return parseInt(e, 10) || 0;
}
const u_ = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function d_(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const gg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    onChange: n,
    maxRows: o,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = T.useRef(l != null), d = T.useRef(null), f = bt(r, d), p = T.useRef(null), m = T.useRef(null), y = T.useCallback(() => {
    const S = d.current, g = dn(S).getComputedStyle(S);
    if (g.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const O = m.current;
    O.style.width = g.width, O.value = S.value || t.placeholder || "x", O.value.slice(-1) === `
` && (O.value += " ");
    const E = g.boxSizing, C = Qs(g.paddingBottom) + Qs(g.paddingTop), x = Qs(g.borderBottomWidth) + Qs(g.borderTopWidth), P = O.scrollHeight;
    O.value = "x";
    const v = O.scrollHeight;
    let _ = P;
    s && (_ = Math.max(Number(s) * v, _)), o && (_ = Math.min(Number(o) * v, _)), _ = Math.max(_, v);
    const I = _ + (E === "border-box" ? C + x : 0), k = Math.abs(_ - P) <= 1;
    return {
      outerHeightStyle: I,
      overflowing: k
    };
  }, [o, s, t.placeholder]), b = T.useCallback(() => {
    const S = y();
    if (d_(S))
      return;
    const w = S.outerHeightStyle, g = d.current;
    p.current !== w && (p.current = w, g.style.height = `${w}px`), g.style.overflow = S.overflowing ? "hidden" : "";
  }, [y]);
  Yr(() => {
    const S = () => {
      b();
    };
    let w;
    const g = () => {
      cancelAnimationFrame(w), w = requestAnimationFrame(() => {
        S();
      });
    }, O = fd(S), E = d.current, C = dn(E);
    C.addEventListener("resize", O);
    let x;
    return typeof ResizeObserver < "u" && (x = new ResizeObserver(process.env.NODE_ENV === "test" ? g : S), x.observe(E)), () => {
      O.clear(), cancelAnimationFrame(w), C.removeEventListener("resize", O), x && x.disconnect();
    };
  }, [y, b]), Yr(() => {
    b();
  });
  const h = (S) => {
    u || b(), n && n(S);
  };
  return /* @__PURE__ */ Oe(T.Fragment, {
    children: [/* @__PURE__ */ R("textarea", {
      value: l,
      onChange: h,
      ref: f,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ R("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: m,
      tabIndex: -1,
      style: {
        ...u_.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (gg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: i.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  onChange: i.func,
  /**
   * @ignore
   */
  placeholder: i.string,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * @ignore
   */
  value: i.oneOfType([i.arrayOf(i.string), i.number, i.string])
});
function tu(e) {
  return typeof e == "string";
}
function kn({
  props: e,
  states: t,
  muiFormControl: r
}) {
  return t.reduce((n, o) => (n[o] = e[o], r && typeof e[o] > "u" && (n[o] = r[o]), n), {});
}
const bl = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (bl.displayName = "FormControlContext");
function en() {
  return T.useContext(bl);
}
function Up(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Pa(e, t = !1) {
  return e && (Up(e.value) && e.value !== "" || t && Up(e.defaultValue) && e.defaultValue !== "");
}
function f_(e) {
  return e.startAdornment;
}
function p_(e) {
  return ke("MuiInputBase", e);
}
const or = Ne("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Bp;
const vl = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.formControl && t.formControl, r.startAdornment && t.adornedStart, r.endAdornment && t.adornedEnd, r.error && t.error, r.size === "small" && t.sizeSmall, r.multiline && t.multiline, r.color && t[`color${ne(r.color)}`], r.fullWidth && t.fullWidth, r.hiddenLabel && t.hiddenLabel];
}, El = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.input, r.size === "small" && t.inputSizeSmall, r.multiline && t.inputMultiline, r.type === "search" && t.inputTypeSearch, r.startAdornment && t.inputAdornedStart, r.endAdornment && t.inputAdornedEnd, r.hiddenLabel && t.inputHiddenLabel];
}, h_ = (e) => {
  const {
    classes: t,
    color: r,
    disabled: n,
    error: o,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: p,
    startAdornment: m,
    type: y
  } = e, b = {
    root: ["root", `color${ne(r)}`, n && "disabled", o && "error", c && "fullWidth", a && "focused", l && "formControl", p && p !== "medium" && `size${ne(p)}`, d && "multiline", m && "adornedStart", s && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", n && "disabled", y === "search" && "inputTypeSearch", d && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", m && "inputAdornedStart", s && "inputAdornedEnd", f && "readOnly"]
  };
  return je(b, p_, t);
}, Sl = se("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: vl
})(Ue(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${or.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: r
    }) => t.multiline && r === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), Ol = se("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: El
})(Ue(({
  theme: e
}) => {
  const t = e.palette.mode === "light", r = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, n = {
    opacity: "0 !important"
  }, o = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${or.formControl} &`]: {
      "&::-webkit-input-placeholder": n,
      "&::-moz-placeholder": n,
      // Firefox 19+
      "&::-ms-input-placeholder": n,
      // Edge
      "&:focus::-webkit-input-placeholder": o,
      "&:focus::-moz-placeholder": o,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": o
      // Edge
    },
    [`&.${or.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), zp = XR({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), wl = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    autoComplete: s,
    autoFocus: a,
    className: l,
    color: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: f,
    disabled: p,
    disableInjectingGlobalStyles: m,
    endAdornment: y,
    error: b,
    fullWidth: h = !1,
    id: S,
    inputComponent: w = "input",
    inputProps: g = {},
    inputRef: O,
    margin: E,
    maxRows: C,
    minRows: x,
    multiline: P = !1,
    name: v,
    onBlur: _,
    onChange: I,
    onClick: k,
    onFocus: W,
    onKeyDown: z,
    onKeyUp: B,
    placeholder: L,
    readOnly: K,
    renderSuffix: j,
    rows: X,
    size: q,
    slotProps: H = {},
    slots: oe = {},
    startAdornment: te,
    type: Y = "text",
    value: J,
    ...ae
  } = n, ce = g.value != null ? g.value : J, {
    current: Z
  } = T.useRef(ce != null), ie = T.useRef(), re = T.useCallback(($e) => {
    process.env.NODE_ENV !== "production" && $e && $e.nodeName !== "INPUT" && !$e.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), fe = bt(ie, O, g.ref, re), [N, ve] = T.useState(!1), Q = en();
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (Q)
      return Q.registerEffect();
  }, [Q]);
  const me = kn({
    props: n,
    muiFormControl: Q,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  me.focused = Q ? Q.focused : N, T.useEffect(() => {
    !Q && p && N && (ve(!1), _ && _());
  }, [Q, p, N, _]);
  const ue = Q && Q.onFilled, dt = Q && Q.onEmpty, Ee = T.useCallback(($e) => {
    Pa($e) ? ue && ue() : dt && dt();
  }, [ue, dt]);
  Yr(() => {
    Z && Ee({
      value: ce
    });
  }, [ce, Ee, Z]);
  const qe = ($e) => {
    W && W($e), g.onFocus && g.onFocus($e), Q && Q.onFocus ? Q.onFocus($e) : ve(!0);
  }, rt = ($e) => {
    _ && _($e), g.onBlur && g.onBlur($e), Q && Q.onBlur ? Q.onBlur($e) : ve(!1);
  }, Ae = ($e, ...Dt) => {
    if (!Z) {
      const hr = $e.target || ie.current;
      if (hr == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Kr(1));
      Ee({
        value: hr.value
      });
    }
    g.onChange && g.onChange($e, ...Dt), I && I($e, ...Dt);
  };
  T.useEffect(() => {
    Ee(ie.current);
  }, []);
  const D = ($e) => {
    ie.current && $e.currentTarget === $e.target && ie.current.focus(), k && k($e);
  };
  let F = w, ee = g;
  P && F === "input" && (X ? (process.env.NODE_ENV !== "production" && (x || C) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), ee = {
    type: void 0,
    minRows: X,
    maxRows: X,
    ...ee
  }) : ee = {
    type: void 0,
    maxRows: C,
    minRows: x,
    ...ee
  }, F = gg);
  const de = ($e) => {
    Ee($e.animationName === "mui-auto-fill-cancel" ? ie.current : {
      value: "x"
    });
  };
  T.useEffect(() => {
    Q && Q.setAdornedStart(!!te);
  }, [Q, te]);
  const be = {
    ...n,
    color: me.color || "primary",
    disabled: me.disabled,
    endAdornment: y,
    error: me.error,
    focused: me.focused,
    formControl: Q,
    fullWidth: h,
    hiddenLabel: me.hiddenLabel,
    multiline: P,
    size: me.size,
    startAdornment: te,
    type: Y
  }, Se = h_(be), Te = oe.root || u.Root || Sl, Ce = H.root || d.root || {}, pt = oe.input || u.Input || Ol;
  return ee = {
    ...ee,
    ...H.input ?? d.input
  }, /* @__PURE__ */ Oe(T.Fragment, {
    children: [!m && typeof zp == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Bp || (Bp = /* @__PURE__ */ R(zp, {}))), /* @__PURE__ */ Oe(Te, {
      ...Ce,
      ref: r,
      onClick: D,
      ...ae,
      ...!tu(Te) && {
        ownerState: {
          ...be,
          ...Ce.ownerState
        }
      },
      className: ge(Se.root, Ce.className, l, K && "MuiInputBase-readOnly"),
      children: [te, /* @__PURE__ */ R(bl.Provider, {
        value: null,
        children: /* @__PURE__ */ R(pt, {
          "aria-invalid": me.error,
          "aria-describedby": o,
          autoComplete: s,
          autoFocus: a,
          defaultValue: f,
          disabled: me.disabled,
          id: S,
          onAnimationStart: de,
          name: v,
          placeholder: L,
          readOnly: K,
          required: me.required,
          rows: X,
          value: ce,
          onKeyDown: z,
          onKeyUp: B,
          type: Y,
          ...ee,
          ...!tu(pt) && {
            as: F,
            ownerState: {
              ...be,
              ...ee.ownerState
            }
          },
          ref: fe,
          className: ge(Se.input, ee.className, K && "MuiInputBase-readOnly"),
          onBlur: rt,
          onChange: Ae,
          onFocus: qe
        })
      }), y, j ? j({
        ...me,
        startAdornment: te
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: dd,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: rr,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * @ignore
   */
  renderSuffix: i.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
function m_(e) {
  return ke("MuiInput", e);
}
const wn = {
  ...or,
  ...Ne("MuiInput", ["root", "underline", "input"])
};
function y_(e) {
  return ke("MuiOutlinedInput", e);
}
const gr = {
  ...or,
  ...Ne("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function g_(e) {
  return ke("MuiFilledInput", e);
}
const ir = {
  ...or,
  ...Ne("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, bg = Eo(/* @__PURE__ */ R("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function b_(e) {
  return ke("MuiAutocomplete", e);
}
const _e = Ne("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var Wp, Gp;
const v_ = (e) => {
  const {
    classes: t,
    disablePortal: r,
    expanded: n,
    focused: o,
    fullWidth: s,
    hasClearIcon: a,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: u,
    size: d
  } = e, f = {
    root: ["root", n && "expanded", o && "focused", s && "fullWidth", a && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${ne(d)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", u && "popupIndicatorOpen"],
    popper: ["popper", r && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return je(f, b_, t);
}, E_ = se("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      fullWidth: n,
      hasClearIcon: o,
      hasPopupIcon: s,
      inputFocused: a,
      size: l
    } = r;
    return [{
      [`& .${_e.tag}`]: t.tag
    }, {
      [`& .${_e.tag}`]: t[`tagSize${ne(l)}`]
    }, {
      [`& .${_e.inputRoot}`]: t.inputRoot
    }, {
      [`& .${_e.input}`]: t.input
    }, {
      [`& .${_e.input}`]: a && t.inputFocused
    }, t.root, n && t.fullWidth, s && t.hasPopupIcon, o && t.hasClearIcon];
  }
})({
  [`&.${_e.focused} .${_e.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${_e.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${_e.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${_e.inputRoot}`]: {
    [`.${_e.hasPopupIcon}&, .${_e.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${_e.hasPopupIcon}.${_e.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${_e.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${wn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${wn.root}.${or.sizeSmall}`]: {
    [`& .${wn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${gr.root}`]: {
    padding: 9,
    [`.${_e.hasPopupIcon}&, .${_e.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${_e.hasPopupIcon}.${_e.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${_e.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${_e.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${gr.root}.${or.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${_e.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${ir.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${_e.hasPopupIcon}&, .${_e.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${_e.hasPopupIcon}.${_e.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${ir.input}`]: {
      padding: "7px 4px"
    },
    [`& .${_e.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${ir.root}.${or.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${ir.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${or.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${ir.root}.${or.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${_e.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${ir.root}.${or.hiddenLabel}.${or.sizeSmall}`]: {
    [`& .${_e.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${_e.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${_e.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${_e.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: !0
    },
    style: {
      [`& .${_e.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
}), S_ = se("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), O_ = se(ml, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), w_ = se(ml, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.popupIndicator,
    ...e.popupOpen && t.popupIndicatorOpen
  })
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: !0
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}), T_ = se(Rd, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${_e.option}`]: t.option
    }, t.popper, r.disablePortal && t.popperDisablePortal];
  }
})(Ue(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.modal,
  variants: [{
    props: {
      disablePortal: !0
    },
    style: {
      position: "absolute"
    }
  }]
}))), C_ = se(hl, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(Ue(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), x_ = se("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(Ue(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), R_ = se("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(Ue(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), P_ = se("div", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(Ue(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${_e.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${_e.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${_e.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ze(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${_e.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ze(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${_e.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ze(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
}))), __ = se(Ra, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(Ue(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), A_ = se("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${_e.option}`]: {
    paddingLeft: 24
  }
}), vg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: o = !1,
    autoHighlight: s = !1,
    autoSelect: a = !1,
    blurOnSelect: l = !1,
    ChipProps: c,
    className: u,
    clearIcon: d = Wp || (Wp = /* @__PURE__ */ R(NP, {
      fontSize: "small"
    })),
    clearOnBlur: f = !n.freeSolo,
    clearOnEscape: p = !1,
    clearText: m = "Clear",
    closeText: y = "Close",
    componentsProps: b,
    defaultValue: h = n.multiple ? [] : null,
    disableClearable: S = !1,
    disableCloseOnSelect: w = !1,
    disabled: g = !1,
    disabledItemsFocusable: O = !1,
    disableListWrap: E = !1,
    disablePortal: C = !1,
    filterOptions: x,
    filterSelectedOptions: P = !1,
    forcePopupIcon: v = "auto",
    freeSolo: _ = !1,
    fullWidth: I = !1,
    getLimitTagsText: k = (Ve) => `+${Ve}`,
    getOptionDisabled: W,
    getOptionKey: z,
    getOptionLabel: B,
    isOptionEqualToValue: L,
    groupBy: K,
    handleHomeEndKeys: j = !n.freeSolo,
    id: X,
    includeInputInList: q = !1,
    inputValue: H,
    limitTags: oe = -1,
    ListboxComponent: te,
    ListboxProps: Y,
    loading: J = !1,
    loadingText: ae = "Loading…",
    multiple: ce = !1,
    noOptionsText: Z = "No options",
    onChange: ie,
    onClose: re,
    onHighlightChange: fe,
    onInputChange: N,
    onOpen: ve,
    open: Q,
    openOnFocus: me = !1,
    openText: ue = "Open",
    options: dt,
    PaperComponent: Ee,
    PopperComponent: qe,
    popupIcon: rt = Gp || (Gp = /* @__PURE__ */ R(bg, {})),
    readOnly: Ae = !1,
    renderGroup: D,
    renderInput: F,
    renderOption: ee,
    renderTags: de,
    selectOnFocus: be = !n.freeSolo,
    size: Se = "medium",
    slots: Te = {},
    slotProps: Ce = {},
    value: pt,
    ...$e
  } = n, {
    getRootProps: Dt,
    getInputProps: hr,
    getInputLabelProps: kt,
    getPopupIndicatorProps: pe,
    getClearProps: De,
    getTagProps: ft,
    getListboxProps: Nr,
    getOptionProps: mr,
    value: tn,
    dirty: mn,
    expanded: So,
    id: Mn,
    popupOpen: Oo,
    focused: bi,
    focusedTag: Is,
    anchorEl: wo,
    setAnchorEl: Ll,
    inputValue: Ds,
    groupedOptions: To
  } = VP({
    ...n,
    componentName: "Autocomplete"
  }), vi = !S && !g && mn && !Ae, Ei = (!_ || v === !0) && v !== !1, {
    onMouseDown: jl
  } = hr(), {
    ref: ql,
    ...ks
  } = Nr(), Si = B || ((Ve) => Ve.label ?? Ve), _t = {
    ...n,
    disablePortal: C,
    expanded: So,
    focused: bi,
    fullWidth: I,
    getOptionLabel: Si,
    hasClearIcon: vi,
    hasPopupIcon: Ei,
    inputFocused: Is === -1,
    popupOpen: Oo,
    size: Se
  }, St = v_(_t), rn = {
    slots: {
      listbox: te,
      paper: Ee,
      popper: qe,
      ...Te
    },
    slotProps: {
      chip: c,
      listbox: Y,
      ...b,
      ...Ce
    }
  }, [G, V] = Lt("listbox", {
    elementType: "ul",
    externalForwardedProps: rn,
    ownerState: _t,
    className: St.listbox,
    additionalProps: ks,
    ref: ql
  }), [le, xe] = Lt("paper", {
    elementType: hl,
    externalForwardedProps: rn,
    ownerState: _t,
    className: St.paper
  }), [Re, tt] = Lt("popper", {
    elementType: Rd,
    externalForwardedProps: rn,
    ownerState: _t,
    className: St.popper,
    additionalProps: {
      disablePortal: C,
      style: {
        width: wo ? wo.clientWidth : null
      },
      role: "presentation",
      anchorEl: wo,
      open: Oo
    }
  });
  let Je;
  if (ce && tn.length > 0) {
    const Ve = ($r) => ({
      className: St.tag,
      disabled: g,
      ...ft($r)
    });
    de ? Je = de(tn, Ve, _t) : Je = tn.map(($r, yn) => {
      const {
        key: Oi,
        ...Dv
      } = Ve({
        index: yn
      });
      return /* @__PURE__ */ R(yg, {
        label: Si($r),
        size: Se,
        ...Dv,
        ...rn.slotProps.chip
      }, Oi);
    });
  }
  if (oe > -1 && Array.isArray(Je)) {
    const Ve = Je.length - oe;
    !bi && Ve > 0 && (Je = Je.splice(0, oe), Je.push(/* @__PURE__ */ R("span", {
      className: St.tag,
      children: k(Ve)
    }, Je.length)));
  }
  const Co = D || ((Ve) => /* @__PURE__ */ Oe("li", {
    children: [/* @__PURE__ */ R(__, {
      className: St.groupLabel,
      ownerState: _t,
      component: "div",
      children: Ve.group
    }), /* @__PURE__ */ R(A_, {
      className: St.groupUl,
      ownerState: _t,
      children: Ve.children
    })]
  }, Ve.key)), Iv = ee || ((Ve, $r) => {
    const {
      key: yn,
      ...Oi
    } = Ve;
    return /* @__PURE__ */ R("li", {
      ...Oi,
      children: Si($r)
    }, yn);
  }), Qd = (Ve, $r) => {
    const yn = mr({
      option: Ve,
      index: $r
    });
    return Iv({
      ...yn,
      className: St.option
    }, Ve, {
      selected: yn["aria-selected"],
      index: $r,
      inputValue: Ds
    }, _t);
  }, Ms = rn.slotProps.clearIndicator, Fs = rn.slotProps.popupIndicator, Vl = (Ve) => /* @__PURE__ */ R(T_, {
    as: Re,
    ...tt,
    children: /* @__PURE__ */ R(C_, {
      as: le,
      ...xe,
      children: Ve
    })
  });
  let Ls = null;
  return To.length > 0 ? Ls = Vl(/* @__PURE__ */ R(P_, {
    as: G,
    ...V,
    children: To.map((Ve, $r) => K ? Co({
      key: Ve.key,
      group: Ve.group,
      children: Ve.options.map((yn, Oi) => Qd(yn, Ve.index + Oi))
    }) : Qd(Ve, $r))
  })) : J && To.length === 0 ? Ls = Vl(/* @__PURE__ */ R(x_, {
    className: St.loading,
    ownerState: _t,
    children: ae
  })) : To.length === 0 && !_ && !J && (Ls = Vl(/* @__PURE__ */ R(R_, {
    className: St.noOptions,
    ownerState: _t,
    role: "presentation",
    onMouseDown: (Ve) => {
      Ve.preventDefault();
    },
    children: Z
  }))), /* @__PURE__ */ Oe(T.Fragment, {
    children: [/* @__PURE__ */ R(E_, {
      ref: r,
      className: ge(St.root, u),
      ownerState: _t,
      ...Dt($e),
      children: F({
        id: Mn,
        disabled: g,
        fullWidth: !0,
        size: Se === "small" ? "small" : void 0,
        InputLabelProps: kt(),
        InputProps: {
          ref: Ll,
          className: St.inputRoot,
          startAdornment: Je,
          onClick: (Ve) => {
            Ve.target === Ve.currentTarget && jl(Ve);
          },
          ...(vi || Ei) && {
            endAdornment: /* @__PURE__ */ Oe(S_, {
              className: St.endAdornment,
              ownerState: _t,
              children: [vi ? /* @__PURE__ */ R(O_, {
                ...De(),
                "aria-label": m,
                title: m,
                ownerState: _t,
                ...Ms,
                className: ge(St.clearIndicator, Ms == null ? void 0 : Ms.className),
                children: d
              }) : null, Ei ? /* @__PURE__ */ R(w_, {
                ...pe(),
                disabled: g,
                "aria-label": Oo ? y : ue,
                title: Oo ? y : ue,
                ownerState: _t,
                ...Fs,
                className: ge(St.popupIndicator, Fs == null ? void 0 : Fs.className),
                children: rt
              }) : null]
            })
          }
        },
        inputProps: {
          className: St.input,
          disabled: g,
          readOnly: Ae,
          ...hr()
        }
      })
    }), wo ? Ls : null]
  });
});
process.env.NODE_ENV !== "production" && (vg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: i.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: i.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: i.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: i.oneOfType([i.oneOf(["mouse", "touch"]), i.bool]),
  /**
   * Props applied to the [`Chip`](https://mui.com/material-ui/api/chip/) element.
   */
  ChipProps: i.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: i.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: i.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: i.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: i.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: i.string,
  /**
   * The props used for each slot inside.
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: i.shape({
    clearIndicator: i.object,
    paper: i.object,
    popper: i.object,
    popupIndicator: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: Qr(i.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: i.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: i.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: i.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: i.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: i.oneOfType([i.oneOf(["auto"]), i.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: i.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: i.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: i.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: i.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: i.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: i.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: i.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: i.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: i.bool,
  /**
   * The input value.
   */
  inputValue: i.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: i.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: hd,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: i.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: i.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */
  loading: i.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: i.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: i.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: i.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: i.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: i.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: i.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`, `"blur"`, `"selectOption"`, `"removeOption"`
   */
  onInputChange: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: i.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: i.string,
  /**
   * A list of options that will be shown in the Autocomplete.
   */
  options: i.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: i.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: i.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: i.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: i.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: i.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: i.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: i.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: i.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: i.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["small", "medium"]), i.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    chip: i.oneOfType([i.func, i.object]),
    clearIndicator: i.oneOfType([i.func, i.object]),
    listbox: i.oneOfType([i.func, i.object]),
    paper: i.oneOfType([i.func, i.object]),
    popper: i.oneOfType([i.func, i.object]),
    popupIndicator: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    listbox: i.elementType,
    paper: i.elementType,
    popper: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: Qr(i.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const N_ = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Eg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = xs(), o = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: p,
    onExit: m,
    onExited: y,
    onExiting: b,
    style: h,
    timeout: S = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = _r,
    ...g
  } = t, O = T.useRef(null), E = bt(O, mi(l), r), C = (z) => (B) => {
    if (z) {
      const L = O.current;
      B === void 0 ? z(L) : z(L, B);
    }
  }, x = C(p), P = C((z, B) => {
    vd(z);
    const L = ri({
      style: h,
      timeout: S,
      easing: c
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = n.transitions.create("opacity", L), z.style.transition = n.transitions.create("opacity", L), d && d(z, B);
  }), v = C(f), _ = C(b), I = C((z) => {
    const B = ri({
      style: h,
      timeout: S,
      easing: c
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = n.transitions.create("opacity", B), z.style.transition = n.transitions.create("opacity", B), m && m(z);
  }), k = C(y);
  return /* @__PURE__ */ R(w, {
    appear: a,
    in: u,
    nodeRef: O,
    onEnter: P,
    onEntered: v,
    onEntering: x,
    onExit: I,
    onExited: k,
    onExiting: _,
    addEndListener: (z) => {
      s && s(O.current, z);
    },
    timeout: S,
    ...g,
    children: (z, B) => /* @__PURE__ */ T.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: z === "exited" && !u ? "hidden" : void 0,
        ...N_[z],
        ...h,
        ...l.props.style
      },
      ref: E,
      ...B
    })
  });
});
process.env.NODE_ENV !== "production" && (Eg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: hi.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function $_(e) {
  return ke("MuiBackdrop", e);
}
Ne("MuiBackdrop", ["root", "invisible"]);
const I_ = (e) => {
  const {
    ownerState: t,
    ...r
  } = e;
  return r;
}, D_ = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return je({
    root: ["root", r && "invisible"]
  }, $_, t);
}, k_ = se("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Sg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: s,
    component: a = "div",
    invisible: l = !1,
    open: c,
    components: u = {},
    componentsProps: d = {},
    slotProps: f = {},
    slots: p = {},
    TransitionComponent: m,
    transitionDuration: y,
    ...b
  } = n, h = {
    ...n,
    component: a,
    invisible: l
  }, S = D_(h), w = {
    transition: m,
    root: u.Root,
    ...p
  }, g = {
    ...d,
    ...f
  }, O = {
    slots: w,
    slotProps: g
  }, [E, C] = Lt("root", {
    elementType: k_,
    externalForwardedProps: O,
    className: ge(S.root, s),
    ownerState: h
  }), [x, P] = Lt("transition", {
    elementType: Eg,
    externalForwardedProps: O,
    ownerState: h
  }), v = I_(P);
  return /* @__PURE__ */ R(x, {
    in: c,
    timeout: y,
    ...b,
    ...v,
    children: /* @__PURE__ */ R(E, {
      "aria-hidden": !0,
      ...C,
      classes: S,
      ref: r,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Sg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    root: i.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: i.bool,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: i.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
const M_ = Ne("MuiBox", ["root"]), F_ = fl(), Og = Nx({
  themeId: Os,
  defaultTheme: F_,
  defaultClassName: M_.root,
  generateClassName: Dy.generate
});
process.env.NODE_ENV !== "production" && (Og.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: i.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function L_(e) {
  return ke("MuiButton", e);
}
const Io = Ne("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), wg = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (wg.displayName = "ButtonGroupContext");
const Tg = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Tg.displayName = "ButtonGroupButtonContext");
const j_ = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${ne(t)}`, `size${ne(o)}`, `${s}Size${ne(o)}`, `color${ne(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${ne(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ne(o)}`]
  }, c = je(l, L_, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, Cg = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], q_ = se(ao, {
  shouldForwardProp: (e) => qt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ne(r.color)}`], t[`size${ne(r.size)}`], t[`${r.variant}Size${ne(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Ue(({
  theme: e
}) => {
  var n, o;
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Io.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Io.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Io.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Io.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Kt(["dark", "contrastText"])).map(([s]) => ({
      props: {
        color: s
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[s].main,
        "--variant-outlinedColor": (e.vars || e).palette[s].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / 0.5)` : Ze(e.palette[s].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[s].contrastText,
        "--variant-containedBg": (e.vars || e).palette[s].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[s].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette[s].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[s].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette[s].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        "--variant-containedColor": e.vars ? (
          // this is safe because grey does not change between default light/dark mode
          e.vars.palette.text.primary
        ) : (o = (n = e.palette).getContrastText) == null ? void 0 : o.call(n, t),
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Io.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Io.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), V_ = se("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${ne(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...Cg]
}), U_ = se("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${ne(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...Cg]
}), Mo = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = T.useContext(wg), o = T.useContext(Tg), s = ts(n, t), a = et({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: p = !1,
    disableFocusRipple: m = !1,
    endIcon: y,
    focusVisibleClassName: b,
    fullWidth: h = !1,
    size: S = "medium",
    startIcon: w,
    type: g,
    variant: O = "text",
    ...E
  } = a, C = {
    ...a,
    color: c,
    component: u,
    disabled: f,
    disableElevation: p,
    disableFocusRipple: m,
    fullWidth: h,
    size: S,
    type: g,
    variant: O
  }, x = j_(C), P = w && /* @__PURE__ */ R(V_, {
    className: x.startIcon,
    ownerState: C,
    children: w
  }), v = y && /* @__PURE__ */ R(U_, {
    className: x.endIcon,
    ownerState: C,
    children: y
  }), _ = o || "";
  return /* @__PURE__ */ Oe(q_, {
    ownerState: C,
    className: ge(n.className, x.root, d, _),
    component: u,
    disabled: f,
    focusRipple: !m,
    focusVisibleClassName: ge(x.focusVisible, b),
    ref: r,
    type: g,
    ...E,
    classes: x,
    children: [P, l, v]
  });
});
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: i.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * Element placed after the children.
   */
  endIcon: i.node,
  /**
   * @ignore
   */
  focusVisibleClassName: i.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: i.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["small", "medium", "large"]), i.string]),
  /**
   * Element placed before the children.
   */
  startIcon: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @ignore
   */
  type: i.oneOfType([i.oneOf(["button", "reset", "submit"]), i.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: i.oneOfType([i.oneOf(["contained", "outlined", "text"]), i.string])
});
function B_(e) {
  return ke("PrivateSwitchBase", e);
}
Ne("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const z_ = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: n,
    edge: o
  } = e, s = {
    root: ["root", r && "checked", n && "disabled", o && `edge${ne(o)}`],
    input: ["input"]
  };
  return je(s, B_, t);
}, W_ = se(ao)({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "start" && t.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "end" && t.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), G_ = se("input", {
  shouldForwardProp: qt
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), xg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    autoFocus: n,
    checked: o,
    checkedIcon: s,
    className: a,
    defaultChecked: l,
    disabled: c,
    disableFocusRipple: u = !1,
    edge: d = !1,
    icon: f,
    id: p,
    inputProps: m,
    inputRef: y,
    name: b,
    onBlur: h,
    onChange: S,
    onFocus: w,
    readOnly: g,
    required: O = !1,
    tabIndex: E,
    type: C,
    value: x,
    ...P
  } = t, [v, _] = Zn({
    controlled: o,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), I = en(), k = (X) => {
    w && w(X), I && I.onFocus && I.onFocus(X);
  }, W = (X) => {
    h && h(X), I && I.onBlur && I.onBlur(X);
  }, z = (X) => {
    if (X.nativeEvent.defaultPrevented)
      return;
    const q = X.target.checked;
    _(q), S && S(X, q);
  };
  let B = c;
  I && typeof B > "u" && (B = I.disabled);
  const L = C === "checkbox" || C === "radio", K = {
    ...t,
    checked: v,
    disabled: B,
    disableFocusRipple: u,
    edge: d
  }, j = z_(K);
  return /* @__PURE__ */ Oe(W_, {
    component: "span",
    className: ge(j.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: B,
    tabIndex: null,
    role: void 0,
    onFocus: k,
    onBlur: W,
    ownerState: K,
    ref: r,
    ...P,
    children: [/* @__PURE__ */ R(G_, {
      autoFocus: n,
      checked: o,
      defaultChecked: l,
      className: j.input,
      disabled: B,
      id: L ? p : void 0,
      name: b,
      onChange: z,
      readOnly: g,
      ref: y,
      required: O,
      ownerState: K,
      tabIndex: E,
      type: C,
      ...C === "checkbox" && x === void 0 ? {} : {
        value: x
      },
      ...m
    }), v ? s : f]
  });
});
process.env.NODE_ENV !== "production" && (xg.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: i.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: i.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * @ignore
   */
  defaultChecked: i.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: i.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: i.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: i.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: rr,
  /*
   * @ignore
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.object,
  /**
   * @ignore
   */
  tabIndex: i.oneOfType([i.number, i.string]),
  /**
   * The input component prop `type`.
   */
  type: i.string.isRequired,
  /**
   * The value of the component.
   */
  value: i.any
});
function H_(e) {
  const t = jt(e);
  return t.body === e ? dn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Wi(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Hp(e) {
  return parseInt(dn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function K_(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function Kp(e, t, r, n, o) {
  const s = [t, r, ...n];
  [].forEach.call(e.children, (a) => {
    const l = !s.includes(a), c = !K_(a);
    l && c && Wi(a, o);
  });
}
function cc(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function Y_(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (H_(n)) {
      const a = zy(jt(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${Hp(n) + a}px`;
      const l = jt(n).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        r.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Hp(c) + a}px`;
      });
    }
    let s;
    if (n.parentNode instanceof DocumentFragment)
      s = jt(n).body;
    else {
      const a = n.parentElement, l = dn(n);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : n;
    }
    r.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function Q_(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class X_ {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Wi(t.modalRef, !1);
    const o = Q_(r);
    Kp(r, t.mount, t.modalRef, o, !0);
    const s = cc(this.containers, (a) => a.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = cc(this.containers, (s) => s.modals.includes(t)), o = this.containers[n];
    o.restore || (o.restore = Y_(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = cc(this.containers, (a) => a.modals.includes(t)), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(n, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Wi(t.modalRef, r), Kp(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Wi(a.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const J_ = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Z_(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function eA(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function tA(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || eA(e));
}
function rA(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(J_)).forEach((n, o) => {
    const s = Z_(n);
    s === -1 || !tA(n) || (s === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: s,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function nA() {
  return !0;
}
function _a(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = rA,
    isEnabled: a = nA,
    open: l
  } = e, c = T.useRef(!1), u = T.useRef(null), d = T.useRef(null), f = T.useRef(null), p = T.useRef(null), m = T.useRef(!1), y = T.useRef(null), b = bt(mi(t), y), h = T.useRef(null);
  T.useEffect(() => {
    !l || !y.current || (m.current = !r);
  }, [r, l]), T.useEffect(() => {
    if (!l || !y.current)
      return;
    const g = jt(y.current);
    return y.current.contains(g.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), m.current && y.current.focus()), () => {
      o || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), T.useEffect(() => {
    if (!l || !y.current)
      return;
    const g = jt(y.current), O = (x) => {
      h.current = x, !(n || !a() || x.key !== "Tab") && g.activeElement === y.current && x.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, E = () => {
      var v, _;
      const x = y.current;
      if (x === null)
        return;
      if (!g.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (x.contains(g.activeElement) || n && g.activeElement !== u.current && g.activeElement !== d.current)
        return;
      if (g.activeElement !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!m.current)
        return;
      let P = [];
      if ((g.activeElement === u.current || g.activeElement === d.current) && (P = s(y.current)), P.length > 0) {
        const I = !!((v = h.current) != null && v.shiftKey && ((_ = h.current) == null ? void 0 : _.key) === "Tab"), k = P[0], W = P[P.length - 1];
        typeof k != "string" && typeof W != "string" && (I ? W.focus() : k.focus());
      } else
        x.focus();
    };
    g.addEventListener("focusin", E), g.addEventListener("keydown", O, !0);
    const C = setInterval(() => {
      g.activeElement && g.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(C), g.removeEventListener("focusin", E), g.removeEventListener("keydown", O, !0);
    };
  }, [r, n, o, a, l, s]);
  const S = (g) => {
    f.current === null && (f.current = g.relatedTarget), m.current = !0, p.current = g.target;
    const O = t.props.onFocus;
    O && O(g);
  }, w = (g) => {
    f.current === null && (f.current = g.relatedTarget), m.current = !0;
  };
  return /* @__PURE__ */ Oe(T.Fragment, {
    children: [/* @__PURE__ */ R("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: b,
      onFocus: S
    }), /* @__PURE__ */ R("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (_a.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: hi,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: i.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: i.func,
  /**
   * If `true`, focus is locked.
   */
  open: i.bool.isRequired
});
process.env.NODE_ENV !== "production" && (_a.propTypes = Vy(_a.propTypes));
function oA(e) {
  return typeof e == "function" ? e() : e;
}
function iA(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const sA = new X_();
function aA(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = sA,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: f
  } = e, p = T.useRef({}), m = T.useRef(null), y = T.useRef(null), b = bt(y, f), [h, S] = T.useState(!d), w = iA(c);
  let g = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (g = !1);
  const O = () => jt(m.current), E = () => (p.current.modalRef = y.current, p.current.mount = m.current, p.current), C = () => {
    o.mount(E(), {
      disableScrollLock: n
    }), y.current && (y.current.scrollTop = 0);
  }, x = Br(() => {
    const L = oA(t) || O().body;
    o.add(E(), L), y.current && C();
  }), P = T.useCallback(() => o.isTopModal(E()), [o]), v = Br((L) => {
    m.current = L, L && (d && P() ? C() : y.current && Wi(y.current, g));
  }), _ = T.useCallback(() => {
    o.remove(E(), g);
  }, [g, o]);
  T.useEffect(() => () => {
    _();
  }, [_]), T.useEffect(() => {
    d ? x() : (!w || !s) && _();
  }, [d, _, w, s, x]);
  const I = (L) => (K) => {
    var j;
    (j = L.onKeyDown) == null || j.call(L, K), !(K.key !== "Escape" || K.which === 229 || // Wait until IME is settled.
    !P()) && (r || (K.stopPropagation(), u && u(K, "escapeKeyDown")));
  }, k = (L) => (K) => {
    var j;
    (j = L.onClick) == null || j.call(L, K), K.target === K.currentTarget && u && u(K, "backdropClick");
  };
  return {
    getRootProps: (L = {}) => {
      const K = Ky(e);
      delete K.onTransitionEnter, delete K.onTransitionExited;
      const j = {
        ...K,
        ...L
      };
      return {
        role: "presentation",
        ...j,
        onKeyDown: I(j),
        ref: b
      };
    },
    getBackdropProps: (L = {}) => {
      const K = L;
      return {
        "aria-hidden": !0,
        ...K,
        onClick: k(K),
        open: d
      };
    },
    getTransitionProps: () => {
      const L = () => {
        S(!1), a && a();
      }, K = () => {
        S(!0), l && l(), s && _();
      };
      return {
        onEnter: Wc(L, c == null ? void 0 : c.props.onEnter),
        onExited: Wc(K, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: b,
    portalRef: v,
    isTopModal: P,
    exited: h,
    hasTransition: w
  };
}
function lA(e) {
  return ke("MuiModal", e);
}
Ne("MuiModal", ["root", "hidden", "backdrop"]);
const cA = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return je({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, lA, n);
}, uA = se("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(Ue(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), dA = se(Sg, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Rg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = dA,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: f,
    components: p = {},
    componentsProps: m = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: b = !1,
    disableEscapeKeyDown: h = !1,
    disablePortal: S = !1,
    disableRestoreFocus: w = !1,
    disableScrollLock: g = !1,
    hideBackdrop: O = !1,
    keepMounted: E = !1,
    onBackdropClick: C,
    onClose: x,
    onTransitionEnter: P,
    onTransitionExited: v,
    open: _,
    slotProps: I = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: W,
    ...z
  } = n, B = {
    ...n,
    closeAfterTransition: c,
    disableAutoFocus: y,
    disableEnforceFocus: b,
    disableEscapeKeyDown: h,
    disablePortal: S,
    disableRestoreFocus: w,
    disableScrollLock: g,
    hideBackdrop: O,
    keepMounted: E
  }, {
    getRootProps: L,
    getBackdropProps: K,
    getTransitionProps: j,
    portalRef: X,
    isTopModal: q,
    exited: H,
    hasTransition: oe
  } = aA({
    ...B,
    rootRef: r
  }), te = {
    ...B,
    exited: H
  }, Y = cA(te), J = {};
  if (u.props.tabIndex === void 0 && (J.tabIndex = "-1"), oe) {
    const {
      onEnter: N,
      onExited: ve
    } = j();
    J.onEnter = N, J.onExited = ve;
  }
  const ae = {
    ...z,
    slots: {
      root: p.Root,
      backdrop: p.Backdrop,
      ...k
    },
    slotProps: {
      ...m,
      ...I
    }
  }, [ce, Z] = Lt("root", {
    elementType: uA,
    externalForwardedProps: ae,
    getSlotProps: L,
    additionalProps: {
      ref: r,
      as: f
    },
    ownerState: te,
    className: ge(l, Y == null ? void 0 : Y.root, !te.open && te.exited && (Y == null ? void 0 : Y.hidden))
  }), [ie, re] = Lt("backdrop", {
    elementType: o,
    externalForwardedProps: ae,
    additionalProps: s,
    getSlotProps: (N) => K({
      ...N,
      onClick: (ve) => {
        C && C(ve), N != null && N.onClick && N.onClick(ve);
      }
    }),
    className: ge(s == null ? void 0 : s.className, Y == null ? void 0 : Y.backdrop),
    ownerState: te
  }), fe = bt(s == null ? void 0 : s.ref, re.ref);
  return !E && !_ && (!oe || H) ? null : /* @__PURE__ */ R(is, {
    ref: X,
    container: d,
    disablePortal: S,
    children: /* @__PURE__ */ Oe(ce, {
      ...Z,
      children: [!O && o ? /* @__PURE__ */ R(ie, {
        ...re,
        ref: fe
      }) : null, /* @__PURE__ */ R(_a, {
        disableEnforceFocus: b,
        disableAutoFocus: y,
        disableRestoreFocus: w,
        isEnabled: q,
        open: _,
        children: /* @__PURE__ */ T.cloneElement(u, J)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Rg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * A single child content element.
   */
  children: hi.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: i.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Backdrop: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Xr, i.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: i.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: i.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: i.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const Yp = Ne("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function fA(e, t, r) {
  const n = t.getBoundingClientRect(), o = r && r.getBoundingClientRect(), s = dn(t);
  let a;
  if (t.fakeTransform)
    a = t.fakeTransform;
  else {
    const u = s.getComputedStyle(t);
    a = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let l = 0, c = 0;
  if (a && a !== "none" && typeof a == "string") {
    const u = a.split("(")[1].split(")")[0].split(",");
    l = parseInt(u[4], 10), c = parseInt(u[5], 10);
  }
  return e === "left" ? o ? `translateX(${o.right + l - n.left}px)` : `translateX(${s.innerWidth + l - n.left}px)` : e === "right" ? o ? `translateX(-${n.right - o.left - l}px)` : `translateX(-${n.left + n.width - l}px)` : e === "up" ? o ? `translateY(${o.bottom + c - n.top}px)` : `translateY(${s.innerHeight + c - n.top}px)` : o ? `translateY(-${n.top - o.top + n.height - c}px)` : `translateY(-${n.top + n.height - c}px)`;
}
function Pg(e) {
  return typeof e == "function" ? e() : e;
}
function Xs(e, t, r) {
  const n = Pg(r), o = fA(e, t, n);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const _g = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = xs(), o = {
    enter: n.transitions.easing.easeOut,
    exit: n.transitions.easing.sharp
  }, s = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: l = !0,
    children: c,
    container: u,
    direction: d = "down",
    easing: f = o,
    in: p,
    onEnter: m,
    onEntered: y,
    onEntering: b,
    onExit: h,
    onExited: S,
    onExiting: w,
    style: g,
    timeout: O = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = _r,
    ...C
  } = t, x = T.useRef(null), P = bt(mi(c), x, r), v = (j) => (X) => {
    j && (X === void 0 ? j(x.current) : j(x.current, X));
  }, _ = v((j, X) => {
    Xs(d, j, u), vd(j), m && m(j, X);
  }), I = v((j, X) => {
    const q = ri({
      timeout: O,
      style: g,
      easing: f
    }, {
      mode: "enter"
    });
    j.style.webkitTransition = n.transitions.create("-webkit-transform", {
      ...q
    }), j.style.transition = n.transitions.create("transform", {
      ...q
    }), j.style.webkitTransform = "none", j.style.transform = "none", b && b(j, X);
  }), k = v(y), W = v(w), z = v((j) => {
    const X = ri({
      timeout: O,
      style: g,
      easing: f
    }, {
      mode: "exit"
    });
    j.style.webkitTransition = n.transitions.create("-webkit-transform", X), j.style.transition = n.transitions.create("transform", X), Xs(d, j, u), h && h(j);
  }), B = v((j) => {
    j.style.webkitTransition = "", j.style.transition = "", S && S(j);
  }), L = (j) => {
    a && a(x.current, j);
  }, K = T.useCallback(() => {
    x.current && Xs(d, x.current, u);
  }, [d, u]);
  return T.useEffect(() => {
    if (p || d === "down" || d === "right")
      return;
    const j = fd(() => {
      x.current && Xs(d, x.current, u);
    }), X = dn(x.current);
    return X.addEventListener("resize", j), () => {
      j.clear(), X.removeEventListener("resize", j);
    };
  }, [d, p, u]), T.useEffect(() => {
    p || K();
  }, [p, K]), /* @__PURE__ */ R(E, {
    nodeRef: x,
    onEnter: _,
    onEntered: k,
    onEntering: I,
    onExit: z,
    onExited: B,
    onExiting: W,
    addEndListener: L,
    appear: l,
    in: p,
    timeout: O,
    ...C,
    children: (j, X) => /* @__PURE__ */ T.cloneElement(c, {
      ref: P,
      style: {
        visibility: j === "exited" && !p ? "hidden" : void 0,
        ...g,
        ...c.props.style
      },
      ...X
    })
  });
});
process.env.NODE_ENV !== "production" && (_g.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: hi.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Qr(i.oneOfType([Xr, i.func]), (e) => {
    if (e.open) {
      const t = Pg(e.container);
      if (t && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: i.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
const pA = (e) => {
  const {
    classes: t,
    disableUnderline: r,
    startAdornment: n,
    endAdornment: o,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !r && "underline", n && "adornedStart", o && "adornedEnd", s === "small" && `size${ne(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = je(c, g_, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, hA = se(Sl, {
  shouldForwardProp: (e) => qt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [...vl(e, t), !r.disableUnderline && t.underline];
  }
})(Ue(({
  theme: e
}) => {
  const t = e.palette.mode === "light", r = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", n = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n
      }
    },
    [`&.${ir.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n
    },
    [`&.${ir.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s
    },
    variants: [{
      props: ({
        ownerState: a
      }) => !a.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${ir.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${ir.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : r}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${ir.disabled}, .${ir.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${ir.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Kt()).map(([a]) => {
      var l;
      return {
        props: {
          disableUnderline: !1,
          color: a
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(l = (e.vars || e).palette[a]) == null ? void 0 : l.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: a
      }) => a.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: a,
        size: l
      }) => a.multiline && l === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel && a.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), mA = se(Ol, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: El
})(Ue(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), ss = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    hiddenLabel: c,
    // declare here to prevent spreading to DOM
    inputComponent: u = "input",
    multiline: d = !1,
    slotProps: f,
    slots: p = {},
    type: m = "text",
    ...y
  } = n, b = {
    ...n,
    disableUnderline: o,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    type: m
  }, h = pA(n), S = {
    root: {
      ownerState: b
    },
    input: {
      ownerState: b
    }
  }, w = f ?? a ? Ct(S, f ?? a) : S, g = p.root ?? s.Root ?? hA, O = p.input ?? s.Input ?? mA;
  return /* @__PURE__ */ R(wl, {
    slots: {
      root: g,
      input: O
    },
    componentsProps: w,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    ref: r,
    type: m,
    ...y,
    classes: h
  });
});
process.env.NODE_ENV !== "production" && (ss.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: rr,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
ss && (ss.muiName = "Input");
function yA(e) {
  return ke("MuiFormControl", e);
}
Ne("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const gA = (e) => {
  const {
    classes: t,
    margin: r,
    fullWidth: n
  } = e, o = {
    root: ["root", r !== "none" && `margin${ne(r)}`, n && "fullWidth"]
  };
  return je(o, yA, t);
}, bA = se("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...t[`margin${ne(e.margin)}`],
    ...e.fullWidth && t.fullWidth
  })
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), Tl = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: p = !1,
    margin: m = "none",
    required: y = !1,
    size: b = "medium",
    variant: h = "outlined",
    ...S
  } = n, w = {
    ...n,
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: p,
    margin: m,
    required: y,
    size: b,
    variant: h
  }, g = gA(w), [O, E] = T.useState(() => {
    let z = !1;
    return o && T.Children.forEach(o, (B) => {
      if (!ic(B, ["Input", "Select"]))
        return;
      const L = ic(B, ["Select"]) ? B.props.input : B;
      L && f_(L.props) && (z = !0);
    }), z;
  }), [C, x] = T.useState(() => {
    let z = !1;
    return o && T.Children.forEach(o, (B) => {
      ic(B, ["Input", "Select"]) && (Pa(B.props, !0) || Pa(B.props.inputProps, !0)) && (z = !0);
    }), z;
  }), [P, v] = T.useState(!1);
  c && P && v(!1);
  const _ = d !== void 0 && !c ? d : P;
  let I;
  const k = T.useRef(!1);
  process.env.NODE_ENV !== "production" && (I = () => (k.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), k.current = !0, () => {
    k.current = !1;
  }));
  const W = T.useMemo(() => ({
    adornedStart: O,
    setAdornedStart: E,
    color: a,
    disabled: c,
    error: u,
    filled: C,
    focused: _,
    fullWidth: f,
    hiddenLabel: p,
    size: b,
    onBlur: () => {
      v(!1);
    },
    onEmpty: () => {
      x(!1);
    },
    onFilled: () => {
      x(!0);
    },
    onFocus: () => {
      v(!0);
    },
    registerEffect: I,
    required: y,
    variant: h
  }), [O, a, c, u, C, _, f, p, I, y, b, h]);
  return /* @__PURE__ */ R(bl.Provider, {
    value: W,
    children: /* @__PURE__ */ R(bA, {
      as: l,
      ownerState: w,
      className: ge(g.root, s),
      ref: r,
      ...S,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Tl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: i.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: i.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function vA(e) {
  return ke("MuiFormControlLabel", e);
}
const Fi = Ne("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), EA = (e) => {
  const {
    classes: t,
    disabled: r,
    labelPlacement: n,
    error: o,
    required: s
  } = e, a = {
    root: ["root", r && "disabled", `labelPlacement${ne(n)}`, o && "error", s && "required"],
    label: ["label", r && "disabled"],
    asterisk: ["asterisk", o && "error"]
  };
  return je(a, vA, t);
}, SA = se("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Fi.label}`]: t.label
    }, t.root, t[`labelPlacement${ne(r.labelPlacement)}`]];
  }
})(Ue(({
  theme: e
}) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${Fi.disabled}`]: {
    cursor: "default"
  },
  [`& .${Fi.label}`]: {
    [`&.${Fi.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  },
  variants: [{
    props: {
      labelPlacement: "start"
    },
    style: {
      flexDirection: "row-reverse",
      marginRight: -11
    }
  }, {
    props: {
      labelPlacement: "top"
    },
    style: {
      flexDirection: "column-reverse"
    }
  }, {
    props: {
      labelPlacement: "bottom"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      labelPlacement: t
    }) => t === "start" || t === "top" || t === "bottom",
    style: {
      marginLeft: 16
      // used for row presentation of radio/checkbox
    }
  }]
}))), OA = se("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Ue(({
  theme: e
}) => ({
  [`&.${Fi.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Ag = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: o,
    className: s,
    componentsProps: a = {},
    control: l,
    disabled: c,
    disableTypography: u,
    inputRef: d,
    label: f,
    labelPlacement: p = "end",
    name: m,
    onChange: y,
    required: b,
    slots: h = {},
    slotProps: S = {},
    value: w,
    ...g
  } = n, O = en(), E = c ?? l.props.disabled ?? (O == null ? void 0 : O.disabled), C = b ?? l.props.required, x = {
    disabled: E,
    required: C
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((B) => {
    typeof l.props[B] > "u" && typeof n[B] < "u" && (x[B] = n[B]);
  });
  const P = kn({
    props: n,
    muiFormControl: O,
    states: ["error"]
  }), v = {
    ...n,
    disabled: E,
    labelPlacement: p,
    required: C,
    error: P.error
  }, _ = EA(v), I = {
    slots: h,
    slotProps: {
      ...a,
      ...S
    }
  }, [k, W] = Lt("typography", {
    elementType: It,
    externalForwardedProps: I,
    ownerState: v
  });
  let z = f;
  return z != null && z.type !== It && !u && (z = /* @__PURE__ */ R(k, {
    component: "span",
    ...W,
    className: ge(_.label, W == null ? void 0 : W.className),
    children: z
  })), /* @__PURE__ */ Oe(SA, {
    className: ge(_.root, s),
    ownerState: v,
    ref: r,
    ...g,
    children: [/* @__PURE__ */ T.cloneElement(l, x), C ? /* @__PURE__ */ Oe("div", {
      children: [z, /* @__PURE__ */ Oe(OA, {
        ownerState: v,
        "aria-hidden": !0,
        className: _.asterisk,
        children: [" ", "*"]
      })]
    }) : z]
  });
});
process.env.NODE_ENV !== "production" && (Ag.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The props used for each slot inside.
   * @default {}
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: i.shape({
    typography: i.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: i.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: i.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: rr,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: i.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: i.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: i.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: i.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    typography: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    typography: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The value of the component.
   */
  value: i.any
});
function wA(e) {
  return ke("MuiFormGroup", e);
}
Ne("MuiFormGroup", ["root", "row", "error"]);
const TA = (e) => {
  const {
    classes: t,
    row: r,
    error: n
  } = e;
  return je({
    root: ["root", r && "row", n && "error"]
  }, wA, t);
}, CA = se("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.row && t.row];
  }
})({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  variants: [{
    props: {
      row: !0
    },
    style: {
      flexDirection: "row"
    }
  }]
}), Ng = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: o,
    row: s = !1,
    ...a
  } = n, l = en(), c = kn({
    props: n,
    muiFormControl: l,
    states: ["error"]
  }), u = {
    ...n,
    row: s,
    error: c.error
  }, d = TA(u);
  return /* @__PURE__ */ R(CA, {
    className: ge(d.root, o),
    ownerState: u,
    ref: r,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Ng.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * Display group of elements in a compact row.
   * @default false
   */
  row: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function xA(e) {
  return ke("MuiFormHelperText", e);
}
const Qp = Ne("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Xp;
const RA = (e) => {
  const {
    classes: t,
    contained: r,
    size: n,
    disabled: o,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", o && "disabled", s && "error", n && `size${ne(n)}`, r && "contained", l && "focused", a && "filled", c && "required"]
  };
  return je(u, xA, t);
}, PA = se("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size && t[`size${ne(r.size)}`], r.contained && t.contained, r.filled && t.filled];
  }
})(Ue(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Qp.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Qp.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), Pd = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: s,
    component: a = "p",
    disabled: l,
    error: c,
    filled: u,
    focused: d,
    margin: f,
    required: p,
    variant: m,
    ...y
  } = n, b = en(), h = kn({
    props: n,
    muiFormControl: b,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), S = {
    ...n,
    component: a,
    contained: h.variant === "filled" || h.variant === "outlined",
    variant: h.variant,
    size: h.size,
    disabled: h.disabled,
    error: h.error,
    filled: h.filled,
    focused: h.focused,
    required: h.required
  };
  delete S.ownerState;
  const w = RA(S);
  return /* @__PURE__ */ R(PA, {
    as: a,
    className: ge(w.root, s),
    ref: r,
    ...y,
    ownerState: S,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Xp || (Xp = /* @__PURE__ */ R("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  });
});
process.env.NODE_ENV !== "production" && (Pd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOfType([i.oneOf(["filled", "outlined", "standard"]), i.string])
});
function _A(e) {
  return ke("MuiFormLabel", e);
}
const Gi = Ne("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), AA = (e) => {
  const {
    classes: t,
    color: r,
    focused: n,
    disabled: o,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${ne(r)}`, o && "disabled", s && "error", a && "filled", n && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return je(c, _A, t);
}, NA = se("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...e.color === "secondary" && t.colorSecondary,
    ...e.filled && t.filled
  })
})(Ue(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Kt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Gi.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Gi.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Gi.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), $A = se("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Ue(({
  theme: e
}) => ({
  [`&.${Gi.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), $g = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: s,
    color: a,
    component: l = "label",
    disabled: c,
    error: u,
    filled: d,
    focused: f,
    required: p,
    ...m
  } = n, y = en(), b = kn({
    props: n,
    muiFormControl: y,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), h = {
    ...n,
    color: b.color || "primary",
    component: l,
    disabled: b.disabled,
    error: b.error,
    filled: b.filled,
    focused: b.focused,
    required: b.required
  }, S = AA(h);
  return /* @__PURE__ */ Oe(NA, {
    as: l,
    ownerState: h,
    className: ge(S.root, s),
    ref: r,
    ...m,
    children: [o, b.required && /* @__PURE__ */ Oe($A, {
      ownerState: h,
      "aria-hidden": !0,
      className: S.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && ($g.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: i.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const ru = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (ru.displayName = "GridContext");
function IA(e) {
  return ke("MuiGrid", e);
}
const DA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], kA = ["column-reverse", "column", "row-reverse", "row"], MA = ["nowrap", "wrap-reverse", "wrap"], Pi = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], as = Ne("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...DA.map((e) => `spacing-xs-${e}`),
  // direction values
  ...kA.map((e) => `direction-xs-${e}`),
  // wrap values
  ...MA.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Pi.map((e) => `grid-xs-${e}`),
  ...Pi.map((e) => `grid-sm-${e}`),
  ...Pi.map((e) => `grid-md-${e}`),
  ...Pi.map((e) => `grid-lg-${e}`),
  ...Pi.map((e) => `grid-xl-${e}`)
]);
function FA({
  theme: e,
  ownerState: t
}) {
  let r;
  return e.breakpoints.keys.reduce((n, o) => {
    let s = {};
    if (t[o] && (r = t[o]), !r)
      return n;
    if (r === !0)
      s = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (r === "auto")
      s = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const a = Jn({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), l = typeof a == "object" ? a[o] : a;
      if (l == null)
        return n;
      const c = `${Math.round(r / l * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const d = e.spacing(t.columnSpacing);
        if (d !== "0px") {
          const f = `calc(${c} + ${d})`;
          u = {
            flexBasis: f,
            maxWidth: f
          };
        }
      }
      s = {
        flexBasis: c,
        flexGrow: 0,
        maxWidth: c,
        ...u
      };
    }
    return e.breakpoints.values[o] === 0 ? Object.assign(n, s) : n[e.breakpoints.up(o)] = s, n;
  }, {});
}
function LA({
  theme: e,
  ownerState: t
}) {
  const r = Jn({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return tr({
    theme: e
  }, r, (n) => {
    const o = {
      flexDirection: n
    };
    return n.startsWith("column") && (o[`& > .${as.item}`] = {
      maxWidth: "none"
    }), o;
  });
}
function Ig({
  breakpoints: e,
  values: t
}) {
  let r = "";
  Object.keys(t).forEach((o) => {
    r === "" && t[o] !== 0 && (r = o);
  });
  const n = Object.keys(e).sort((o, s) => e[o] - e[s]);
  return n.slice(0, n.indexOf(r));
}
function jA({
  theme: e,
  ownerState: t
}) {
  const {
    container: r,
    rowSpacing: n
  } = t;
  let o = {};
  if (r && n !== 0) {
    const s = Jn({
      values: n,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = Ig({
      breakpoints: e.breakpoints.values,
      values: s
    })), o = tr({
      theme: e
    }, s, (l, c) => {
      const u = e.spacing(l);
      return u !== "0px" ? {
        marginTop: e.spacing(-l),
        [`& > .${as.item}`]: {
          paddingTop: u
        }
      } : a != null && a.includes(c) ? {} : {
        marginTop: 0,
        [`& > .${as.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return o;
}
function qA({
  theme: e,
  ownerState: t
}) {
  const {
    container: r,
    columnSpacing: n
  } = t;
  let o = {};
  if (r && n !== 0) {
    const s = Jn({
      values: n,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = Ig({
      breakpoints: e.breakpoints.values,
      values: s
    })), o = tr({
      theme: e
    }, s, (l, c) => {
      const u = e.spacing(l);
      if (u !== "0px") {
        const d = e.spacing(-l);
        return {
          width: `calc(100% + ${u})`,
          marginLeft: d,
          [`& > .${as.item}`]: {
            paddingLeft: u
          }
        };
      }
      return a != null && a.includes(c) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${as.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return o;
}
function VA(e, t, r = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [r[`spacing-xs-${String(e)}`]];
  const n = [];
  return t.forEach((o) => {
    const s = e[o];
    Number(s) > 0 && n.push(r[`spacing-${o}-${String(s)}`]);
  }), n;
}
const UA = se("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      container: n,
      direction: o,
      item: s,
      spacing: a,
      wrap: l,
      zeroMinWidth: c,
      breakpoints: u
    } = r;
    let d = [];
    n && (d = VA(a, u, t));
    const f = [];
    return u.forEach((p) => {
      const m = r[p];
      m && f.push(t[`grid-${p}-${String(m)}`]);
    }), [t.root, n && t.container, s && t.item, c && t.zeroMinWidth, ...d, o !== "row" && t[`direction-xs-${String(o)}`], l !== "wrap" && t[`wrap-xs-${String(l)}`], ...f];
  }
})(
  // FIXME(romgrk): Can't use memoTheme here
  ({
    ownerState: e
  }) => ({
    boxSizing: "border-box",
    ...e.container && {
      display: "flex",
      flexWrap: "wrap",
      width: "100%"
    },
    ...e.item && {
      margin: 0
      // For instance, it's useful when used with a `figure` element.
    },
    ...e.zeroMinWidth && {
      minWidth: 0
    },
    ...e.wrap !== "wrap" && {
      flexWrap: e.wrap
    }
  }),
  LA,
  jA,
  qA,
  FA
);
function BA(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const r = [];
  return t.forEach((n) => {
    const o = e[n];
    if (Number(o) > 0) {
      const s = `spacing-${n}-${String(o)}`;
      r.push(s);
    }
  }), r;
}
const zA = (e) => {
  const {
    classes: t,
    container: r,
    direction: n,
    item: o,
    spacing: s,
    wrap: a,
    zeroMinWidth: l,
    breakpoints: c
  } = e;
  let u = [];
  r && (u = BA(s, c));
  const d = [];
  c.forEach((p) => {
    const m = e[p];
    m && d.push(`grid-${p}-${String(m)}`);
  });
  const f = {
    root: ["root", r && "container", o && "item", l && "zeroMinWidth", ...u, n !== "row" && `direction-xs-${String(n)}`, a !== "wrap" && `wrap-xs-${String(a)}`, ...d]
  };
  return je(f, IA, t);
}, ye = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = yd({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: o
  } = xs(), s = cl(n), {
    className: a,
    columns: l,
    columnSpacing: c,
    component: u = "div",
    container: d = !1,
    direction: f = "row",
    item: p = !1,
    rowSpacing: m,
    spacing: y = 0,
    wrap: b = "wrap",
    zeroMinWidth: h = !1,
    ...S
  } = s, w = m || y, g = c || y, O = T.useContext(ru), E = d ? l || 12 : O, C = {}, x = {
    ...S
  };
  o.keys.forEach((_) => {
    S[_] != null && (C[_] = S[_], delete x[_]);
  });
  const P = {
    ...s,
    columns: E,
    container: d,
    direction: f,
    item: p,
    rowSpacing: w,
    columnSpacing: g,
    wrap: b,
    zeroMinWidth: h,
    spacing: y,
    ...C,
    breakpoints: o.keys
  }, v = zA(P);
  return /* @__PURE__ */ R(ru.Provider, {
    value: E,
    children: /* @__PURE__ */ R(UA, {
      ownerState: P,
      className: ge(v.root, a),
      as: u,
      ref: r,
      ...x
    })
  });
});
process.env.NODE_ENV !== "production" && (ye.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: i.oneOfType([i.arrayOf(i.number), i.number, i.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: i.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: i.oneOfType([i.oneOf(["column-reverse", "column", "row-reverse", "row"]), i.arrayOf(i.oneOf(["column-reverse", "column", "row-reverse", "row"])), i.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: i.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: i.oneOfType([i.oneOf(["auto"]), i.number, i.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: i.oneOfType([i.oneOf(["auto"]), i.number, i.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: i.oneOfType([i.oneOf(["auto"]), i.number, i.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: i.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: i.oneOfType([i.oneOf(["auto"]), i.number, i.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: i.oneOfType([i.oneOf(["auto"]), i.number, i.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: i.bool
});
if (process.env.NODE_ENV !== "production") {
  const e = Qx("Grid", ye);
  ye.propTypes = {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    ...ye.propTypes,
    direction: e("container"),
    lg: e("item"),
    md: e("item"),
    sm: e("item"),
    spacing: e("container"),
    wrap: e("container"),
    xs: e("item"),
    zeroMinWidth: e("item")
  };
}
function nu(e) {
  return `scale(${e}, ${e ** 2})`;
}
const WA = {
  entering: {
    opacity: 1,
    transform: nu(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, uc = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Aa = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: p,
    onExiting: m,
    style: y,
    timeout: b = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: h = _r,
    ...S
  } = t, w = By(), g = T.useRef(), O = xs(), E = T.useRef(null), C = bt(E, mi(s), r), x = (B) => (L) => {
    if (B) {
      const K = E.current;
      L === void 0 ? B(K) : B(K, L);
    }
  }, P = x(d), v = x((B, L) => {
    vd(B);
    const {
      duration: K,
      delay: j,
      easing: X
    } = ri({
      style: y,
      timeout: b,
      easing: a
    }, {
      mode: "enter"
    });
    let q;
    b === "auto" ? (q = O.transitions.getAutoHeightDuration(B.clientHeight), g.current = q) : q = K, B.style.transition = [O.transitions.create("opacity", {
      duration: q,
      delay: j
    }), O.transitions.create("transform", {
      duration: uc ? q : q * 0.666,
      delay: j,
      easing: X
    })].join(","), c && c(B, L);
  }), _ = x(u), I = x(m), k = x((B) => {
    const {
      duration: L,
      delay: K,
      easing: j
    } = ri({
      style: y,
      timeout: b,
      easing: a
    }, {
      mode: "exit"
    });
    let X;
    b === "auto" ? (X = O.transitions.getAutoHeightDuration(B.clientHeight), g.current = X) : X = L, B.style.transition = [O.transitions.create("opacity", {
      duration: X,
      delay: K
    }), O.transitions.create("transform", {
      duration: uc ? X : X * 0.666,
      delay: uc ? K : K || X * 0.333,
      easing: j
    })].join(","), B.style.opacity = 0, B.style.transform = nu(0.75), f && f(B);
  }), W = x(p);
  return /* @__PURE__ */ R(h, {
    appear: o,
    in: l,
    nodeRef: E,
    onEnter: v,
    onEntered: _,
    onEntering: P,
    onExit: k,
    onExited: W,
    onExiting: I,
    addEndListener: (B) => {
      b === "auto" && w.start(g.current || 0, B), n && n(E.current, B);
    },
    timeout: b === "auto" ? null : b,
    ...S,
    children: (B, L) => /* @__PURE__ */ T.cloneElement(s, {
      style: {
        opacity: 0,
        transform: nu(0.75),
        visibility: B === "exited" && !l ? "hidden" : void 0,
        ...WA[B],
        ...y,
        ...s.props.style
      },
      ref: C,
      ...L
    })
  });
});
process.env.NODE_ENV !== "production" && (Aa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: hi.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
Aa && (Aa.muiSupportAuto = !0);
const GA = (e) => {
  const {
    classes: t,
    disableUnderline: r
  } = e, o = je({
    root: ["root", !r && "underline"],
    input: ["input"]
  }, m_, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, HA = se(Sl, {
  shouldForwardProp: (e) => qt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [...vl(e, t), !r.disableUnderline && t.underline];
  }
})(Ue(({
  theme: e
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: n
      }) => n.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => !n.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${wn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${wn.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${r}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${wn.disabled}, .${wn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${r}`
          }
        },
        [`&.${wn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Kt()).map(([n]) => ({
      props: {
        color: n,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[n].main}`
        }
      }
    }))]
  };
})), KA = se(Ol, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: El
})({}), ls = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    inputComponent: c = "input",
    multiline: u = !1,
    slotProps: d,
    slots: f = {},
    type: p = "text",
    ...m
  } = n, y = GA(n), h = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, S = d ?? a ? Ct(d ?? a, h) : h, w = f.root ?? s.Root ?? HA, g = f.input ?? s.Input ?? KA;
  return /* @__PURE__ */ R(wl, {
    slots: {
      root: w,
      input: g
    },
    slotProps: S,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: r,
    type: p,
    ...m,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (ls.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: rr,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
ls && (ls.muiName = "Input");
function YA(e) {
  return ke("MuiInputLabel", e);
}
Ne("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const QA = (e) => {
  const {
    classes: t,
    formControl: r,
    size: n,
    shrink: o,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", r && "formControl", !s && "animated", o && "shrink", n && n !== "normal" && `size${ne(n)}`, a],
    asterisk: [l && "asterisk"]
  }, u = je(c, YA, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, XA = se($g, {
  shouldForwardProp: (e) => qt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Gi.asterisk}`]: t.asterisk
    }, t.root, r.formControl && t.formControl, r.size === "small" && t.sizeSmall, r.shrink && t.shrink, !r.disableAnimation && t.animated, r.focused && t.focused, t[r.variant]];
  }
})(Ue(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: r
    }) => t === "filled" && r.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: r,
      size: n
    }) => t === "filled" && r.shrink && n === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: r
    }) => t === "outlined" && r.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), Dg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: s,
    shrink: a,
    variant: l,
    className: c,
    ...u
  } = n, d = en();
  let f = a;
  typeof f > "u" && d && (f = d.filled || d.focused || d.adornedStart);
  const p = kn({
    props: n,
    muiFormControl: d,
    states: ["size", "variant", "required", "focused"]
  }), m = {
    ...n,
    disableAnimation: o,
    formControl: d,
    shrink: f,
    size: p.size,
    variant: p.variant,
    required: p.required,
    focused: p.focused
  }, y = QA(m);
  return /* @__PURE__ */ R(XA, {
    "data-shrink": f,
    ref: r,
    className: ge(y.root, c),
    ...u,
    ownerState: m,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (Dg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: i.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: i.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: i.oneOfType([i.oneOf(["normal", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
const Na = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (Na.displayName = "ListContext");
function JA(e) {
  return ke("MuiList", e);
}
Ne("MuiList", ["root", "padding", "dense", "subheader"]);
const ZA = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return je({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, JA, t);
}, eN = se("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disablePadding && t.padding, r.dense && t.dense, r.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), kg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u,
    ...d
  } = n, f = T.useMemo(() => ({
    dense: l
  }), [l]), p = {
    ...n,
    component: a,
    dense: l,
    disablePadding: c
  }, m = ZA(p);
  return /* @__PURE__ */ R(Na.Provider, {
    value: f,
    children: /* @__PURE__ */ Oe(eN, {
      as: a,
      className: ge(m.root, s),
      ref: r,
      ownerState: p,
      ...d,
      children: [u, o]
    })
  });
});
process.env.NODE_ENV !== "production" && (kg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: i.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: i.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const Jp = Ne("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Zp = Ne("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function dc(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function eh(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function Mg(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
}
function _i(e, t, r, n, o, s) {
  let a = !1, l = o(e, t, t ? r : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = n ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Mg(l, s) || c)
      l = o(e, l, r);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Fg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: n,
    autoFocus: o = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu",
    ...p
  } = t, m = T.useRef(null), y = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Yr(() => {
    o && m.current.focus();
  }, [o]), T.useImperativeHandle(n, () => ({
    adjustStyleForScrollbar: (g, {
      direction: O
    }) => {
      const E = !m.current.style.width;
      if (g.clientHeight < m.current.clientHeight && E) {
        const C = `${zy(jt(g))}px`;
        m.current.style[O === "rtl" ? "paddingLeft" : "paddingRight"] = C, m.current.style.width = `calc(100% + ${C})`;
      }
      return m.current;
    }
  }), []);
  const b = (g) => {
    const O = m.current, E = g.key;
    if (g.ctrlKey || g.metaKey || g.altKey) {
      d && d(g);
      return;
    }
    const x = jt(O).activeElement;
    if (E === "ArrowDown")
      g.preventDefault(), _i(O, x, u, c, dc);
    else if (E === "ArrowUp")
      g.preventDefault(), _i(O, x, u, c, eh);
    else if (E === "Home")
      g.preventDefault(), _i(O, null, u, c, dc);
    else if (E === "End")
      g.preventDefault(), _i(O, null, u, c, eh);
    else if (E.length === 1) {
      const P = y.current, v = E.toLowerCase(), _ = performance.now();
      P.keys.length > 0 && (_ - P.lastTime > 500 ? (P.keys = [], P.repeating = !0, P.previousKeyMatched = !0) : P.repeating && v !== P.keys[0] && (P.repeating = !1)), P.lastTime = _, P.keys.push(v);
      const I = x && !P.repeating && Mg(x, P);
      P.previousKeyMatched && (I || _i(O, x, !1, c, dc, P)) ? g.preventDefault() : P.previousKeyMatched = !1;
    }
    d && d(g);
  }, h = bt(m, r);
  let S = -1;
  T.Children.forEach(a, (g, O) => {
    if (!/* @__PURE__ */ T.isValidElement(g)) {
      S === O && (S += 1, S >= a.length && (S = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && es.isFragment(g) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), g.props.disabled || (f === "selectedMenu" && g.props.selected || S === -1) && (S = O), S === O && (g.props.disabled || g.props.muiSkipListHighlight || g.type.muiSkipListHighlight) && (S += 1, S >= a.length && (S = -1));
  });
  const w = T.Children.map(a, (g, O) => {
    if (O === S) {
      const E = {};
      return s && (E.autoFocus = !0), g.props.tabIndex === void 0 && f === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ T.cloneElement(g, E);
    }
    return g;
  });
  return /* @__PURE__ */ R(kg, {
    role: "menu",
    ref: h,
    className: l,
    onKeyDown: b,
    tabIndex: o ? 0 : -1,
    ...p,
    children: w
  });
});
process.env.NODE_ENV !== "production" && (Fg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: i.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function tN(e) {
  return ke("MuiPopover", e);
}
Ne("MuiPopover", ["root", "paper"]);
function th(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function rh(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function nh(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function pa(e) {
  return typeof e == "function" ? e() : e;
}
const rN = (e) => {
  const {
    classes: t
  } = e;
  return je({
    root: ["root"],
    paper: ["paper"]
  }, tN, t);
}, nN = se(Rg, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Lg = se(hl, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), jg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: s,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: u,
    className: d,
    container: f,
    elevation: p = 8,
    marginThreshold: m = 16,
    open: y,
    PaperProps: b = {},
    slots: h = {},
    slotProps: S = {},
    transformOrigin: w = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: g = Aa,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: E,
      ...C
    } = {},
    disableScrollLock: x = !1,
    ...P
  } = n, v = (S == null ? void 0 : S.paper) ?? b, _ = T.useRef(), I = {
    ...n,
    anchorOrigin: a,
    anchorReference: c,
    elevation: p,
    marginThreshold: m,
    externalPaperSlotProps: v,
    transformOrigin: w,
    TransitionComponent: g,
    transitionDuration: O,
    TransitionProps: C
  }, k = rN(I), W = T.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const re = pa(s), fe = re && re.nodeType === 1 ? re : jt(_.current).body, N = fe.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ve = fe.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ve.top === 0 && ve.left === 0 && ve.right === 0 && ve.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: N.top + th(N, a.vertical),
      left: N.left + rh(N, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), z = T.useCallback((re) => ({
    vertical: th(re, w.vertical),
    horizontal: rh(re, w.horizontal)
  }), [w.horizontal, w.vertical]), B = T.useCallback((re) => {
    const fe = {
      width: re.offsetWidth,
      height: re.offsetHeight
    }, N = z(fe);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: nh(N)
      };
    const ve = W();
    let Q = ve.top - N.vertical, me = ve.left - N.horizontal;
    const ue = Q + fe.height, dt = me + fe.width, Ee = dn(pa(s)), qe = Ee.innerHeight - m, rt = Ee.innerWidth - m;
    if (m !== null && Q < m) {
      const Ae = Q - m;
      Q -= Ae, N.vertical += Ae;
    } else if (m !== null && ue > qe) {
      const Ae = ue - qe;
      Q -= Ae, N.vertical += Ae;
    }
    if (process.env.NODE_ENV !== "production" && fe.height > qe && fe.height && qe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${fe.height - qe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), m !== null && me < m) {
      const Ae = me - m;
      me -= Ae, N.horizontal += Ae;
    } else if (dt > rt) {
      const Ae = dt - rt;
      me -= Ae, N.horizontal += Ae;
    }
    return {
      top: `${Math.round(Q)}px`,
      left: `${Math.round(me)}px`,
      transformOrigin: nh(N)
    };
  }, [s, c, W, z, m]), [L, K] = T.useState(y), j = T.useCallback(() => {
    const re = _.current;
    if (!re)
      return;
    const fe = B(re);
    fe.top !== null && re.style.setProperty("top", fe.top), fe.left !== null && (re.style.left = fe.left), re.style.transformOrigin = fe.transformOrigin, K(!0);
  }, [B]);
  T.useEffect(() => (x && window.addEventListener("scroll", j), () => window.removeEventListener("scroll", j)), [s, x, j]);
  const X = (re, fe) => {
    E && E(re, fe), j();
  }, q = () => {
    K(!1);
  };
  T.useEffect(() => {
    y && j();
  }), T.useImperativeHandle(o, () => y ? {
    updatePosition: () => {
      j();
    }
  } : null, [y, j]), T.useEffect(() => {
    if (!y)
      return;
    const re = fd(() => {
      j();
    }), fe = dn(s);
    return fe.addEventListener("resize", re), () => {
      re.clear(), fe.removeEventListener("resize", re);
    };
  }, [s, y, j]);
  let H = O;
  O === "auto" && !g.muiSupportAuto && (H = void 0);
  const oe = f || (s ? jt(pa(s)).body : void 0), te = {
    slots: h,
    slotProps: {
      ...S,
      paper: v
    }
  }, [Y, J] = Lt("paper", {
    elementType: Lg,
    externalForwardedProps: te,
    additionalProps: {
      elevation: p,
      className: ge(k.paper, v == null ? void 0 : v.className),
      style: L ? v.style : {
        ...v.style,
        opacity: 0
      }
    },
    ownerState: I
  }), [ae, {
    slotProps: ce,
    ...Z
  }] = Lt("root", {
    elementType: nN,
    externalForwardedProps: te,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: oe,
      open: y
    },
    ownerState: I,
    className: ge(k.root, d)
  }), ie = bt(_, J.ref);
  return /* @__PURE__ */ R(ae, {
    ...Z,
    ...!tu(ae) && {
      slotProps: ce,
      disableScrollLock: x
    },
    ...P,
    ref: r,
    children: /* @__PURE__ */ R(g, {
      appear: !0,
      in: y,
      onEntering: X,
      onExited: q,
      timeout: H,
      ...C,
      children: /* @__PURE__ */ R(Y, {
        ...J,
        ref: ie,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (jg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: rr,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Qr(i.oneOfType([Xr, i.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = pa(e.anchorEl);
      if (t && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: i.shape({
    left: i.number.isRequired,
    top: i.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: i.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slotProps.root.slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slotProps.root.slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Xr, i.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: hd,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: i.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: i.shape({
    component: dd
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    paper: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: i.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: i.object
});
function oN(e) {
  return ke("MuiMenu", e);
}
Ne("MuiMenu", ["root", "paper", "list"]);
const iN = {
  vertical: "top",
  horizontal: "right"
}, sN = {
  vertical: "top",
  horizontal: "left"
}, aN = (e) => {
  const {
    classes: t
  } = e;
  return je({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, oN, t);
}, lN = se(jg, {
  shouldForwardProp: (e) => qt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), cN = se(Lg, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), uN = se(Fg, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), qg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: s,
    className: a,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: u,
    open: d,
    PaperProps: f = {},
    PopoverClasses: p,
    transitionDuration: m = "auto",
    TransitionProps: {
      onEntering: y,
      ...b
    } = {},
    variant: h = "selectedMenu",
    slots: S = {},
    slotProps: w = {},
    ...g
  } = n, O = Xy(), E = {
    ...n,
    autoFocus: o,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: y,
    PaperProps: f,
    transitionDuration: m,
    TransitionProps: b,
    variant: h
  }, C = aN(E), x = o && !l && d, P = T.useRef(null), v = (L, K) => {
    P.current && P.current.adjustStyleForScrollbar(L, {
      direction: O ? "rtl" : "ltr"
    }), y && y(L, K);
  }, _ = (L) => {
    L.key === "Tab" && (L.preventDefault(), u && u(L, "tabKeyDown"));
  };
  let I = -1;
  T.Children.map(s, (L, K) => {
    /* @__PURE__ */ T.isValidElement(L) && (process.env.NODE_ENV !== "production" && es.isFragment(L) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), L.props.disabled || (h === "selectedMenu" && L.props.selected || I === -1) && (I = K));
  });
  const k = S.paper ?? cN, W = w.paper ?? f, z = Hc({
    elementType: S.root,
    externalSlotProps: w.root,
    ownerState: E,
    className: [C.root, a]
  }), B = Hc({
    elementType: k,
    externalSlotProps: W,
    ownerState: E,
    className: C.paper
  });
  return /* @__PURE__ */ R(lN, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: O ? "right" : "left"
    },
    transformOrigin: O ? iN : sN,
    slots: {
      paper: k,
      root: S.root
    },
    slotProps: {
      root: z,
      paper: B
    },
    open: d,
    ref: r,
    transitionDuration: m,
    TransitionProps: {
      onEntering: v,
      ...b
    },
    ownerState: E,
    ...g,
    classes: p,
    children: /* @__PURE__ */ R(uN, {
      onKeyDown: _,
      actions: P,
      autoFocus: o && (I === -1 || l),
      autoFocusItem: x,
      variant: h,
      ...c,
      className: ge(C.list, c.className),
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (qg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: i.oneOfType([Xr, i.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: i.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: i.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: i.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: i.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: i.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    paper: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: i.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function dN(e) {
  return ke("MuiMenuItem", e);
}
const Ai = Ne("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), fN = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, pN = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: n,
    disableGutters: o,
    selected: s,
    classes: a
  } = e, c = je({
    root: ["root", r && "dense", t && "disabled", !o && "gutters", n && "divider", s && "selected"]
  }, dN, a);
  return {
    ...a,
    ...c
  };
}, hN = se(ao, {
  shouldForwardProp: (e) => qt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: fN
})(Ue(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Ai.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ze(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Ai.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ze(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Ai.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ze(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ze(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Ai.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Ai.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Yp.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Yp.inset}`]: {
    marginLeft: 52
  },
  [`& .${Zp.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Zp.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Jp.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${Jp.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), ou = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: s = "li",
    dense: a = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: f,
    className: p,
    ...m
  } = n, y = T.useContext(Na), b = T.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: c
  }), [y.dense, a, c]), h = T.useRef(null);
  Yr(() => {
    o && (h.current ? h.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [o]);
  const S = {
    ...n,
    dense: b.dense,
    divider: l,
    disableGutters: c
  }, w = pN(n), g = bt(h, r);
  let O;
  return n.disabled || (O = f !== void 0 ? f : -1), /* @__PURE__ */ R(Na.Provider, {
    value: b,
    children: /* @__PURE__ */ R(hN, {
      ref: g,
      role: d,
      tabIndex: O,
      component: s,
      focusVisibleClassName: ge(w.focusVisible, u),
      className: ge(w.root, p),
      ...m,
      ownerState: S,
      classes: w
    })
  });
});
process.env.NODE_ENV !== "production" && (ou.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: i.bool,
  /**
   * @ignore
   */
  disabled: i.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: i.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: i.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: i.string,
  /**
   * @ignore
   */
  role: i.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @default 0
   */
  tabIndex: i.number
});
function mN(e) {
  return ke("MuiNativeSelect", e);
}
const _d = Ne("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), yN = (e) => {
  const {
    classes: t,
    variant: r,
    disabled: n,
    multiple: o,
    open: s,
    error: a
  } = e, l = {
    select: ["select", r, n && "disabled", o && "multiple", a && "error"],
    icon: ["icon", `icon${ne(r)}`, s && "iconOpen", n && "disabled"]
  };
  return je(l, mN, t);
}, Vg = se("select")(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${_d.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), gN = se(Vg, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: qt,
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.select, t[r.variant], r.error && t.error, {
      [`&.${_d.multiple}`]: t.multiple
    }];
  }
})({}), Ug = se("svg")(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${_d.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), bN = se(Ug, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.icon, r.variant && t[`icon${ne(r.variant)}`], r.open && t.iconOpen];
  }
})({}), Bg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    className: n,
    disabled: o,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard",
    ...u
  } = t, d = {
    ...t,
    disabled: o,
    variant: c,
    error: s
  }, f = yN(d);
  return /* @__PURE__ */ Oe(T.Fragment, {
    children: [/* @__PURE__ */ R(gN, {
      ownerState: d,
      className: ge(f.select, n),
      disabled: o,
      ref: l || r,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ R(bN, {
      as: a,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Bg.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: rr,
  /**
   * @ignore
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
var oh;
const vN = se("fieldset", {
  shouldForwardProp: qt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), EN = se("legend", {
  shouldForwardProp: qt
})(Ue(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function zg(e) {
  const {
    children: t,
    classes: r,
    className: n,
    label: o,
    notched: s,
    ...a
  } = e, l = o != null && o !== "", c = {
    ...e,
    notched: s,
    withLabel: l
  };
  return /* @__PURE__ */ R(vN, {
    "aria-hidden": !0,
    className: n,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ R(EN, {
      ownerState: c,
      children: l ? /* @__PURE__ */ R("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        oh || (oh = /* @__PURE__ */ R("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (zg.propTypes = {
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The label.
   */
  label: i.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool.isRequired,
  /**
   * @ignore
   */
  style: i.object
});
const SN = (e) => {
  const {
    classes: t
  } = e, n = je({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, y_, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...n
  };
}, ON = se(Sl, {
  shouldForwardProp: (e) => qt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: vl
})(Ue(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${gr.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    [`&.${gr.focused} .${gr.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Kt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        [`&.${gr.focused} .${gr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[r].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          [`&:hover .${gr.notchedOutline}`]: {
            borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
          }
        },
        [`&.${gr.error} .${gr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${gr.disabled} .${gr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => r.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: r
      }) => r.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: r
      }) => r.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: r,
        size: n
      }) => r.multiline && n === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), wN = se(zg, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(Ue(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), TN = se(Ol, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: El
})(Ue(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), cs = /* @__PURE__ */ T.forwardRef(function(t, r) {
  var n;
  const o = et({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: s = {},
    fullWidth: a = !1,
    inputComponent: l = "input",
    label: c,
    multiline: u = !1,
    notched: d,
    slots: f = {},
    type: p = "text",
    ...m
  } = o, y = SN(o), b = en(), h = kn({
    props: o,
    muiFormControl: b,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), S = {
    ...o,
    color: h.color || "primary",
    disabled: h.disabled,
    error: h.error,
    focused: h.focused,
    formControl: b,
    fullWidth: a,
    hiddenLabel: h.hiddenLabel,
    multiline: u,
    size: h.size,
    type: p
  }, w = f.root ?? s.Root ?? ON, g = f.input ?? s.Input ?? TN;
  return /* @__PURE__ */ R(wl, {
    slots: {
      root: w,
      input: g
    },
    renderSuffix: (O) => /* @__PURE__ */ R(wN, {
      ownerState: S,
      className: y.notchedOutline,
      label: c != null && c !== "" && h.required ? n || (n = /* @__PURE__ */ Oe(T.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof d < "u" ? d : !!(O.startAdornment || O.filled || O.focused)
    }),
    fullWidth: a,
    inputComponent: l,
    multiline: u,
    ref: r,
    type: p,
    ...m,
    classes: {
      ...y,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (cs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: rr,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: i.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
cs && (cs.muiName = "Input");
const CN = Eo(/* @__PURE__ */ R("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), xN = Eo(/* @__PURE__ */ R("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), RN = se("span", {
  shouldForwardProp: qt
})({
  position: "relative",
  display: "flex"
}), PN = se(CN)({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), _N = se(xN)(Ue(({
  theme: e
}) => ({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeIn,
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: !0
    },
    style: {
      transform: "scale(1)",
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeOut,
        duration: e.transitions.duration.shortest
      })
    }
  }]
})));
function Ad(e) {
  const {
    checked: t = !1,
    classes: r = {},
    fontSize: n
  } = e, o = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ Oe(RN, {
    className: r.root,
    ownerState: o,
    children: [/* @__PURE__ */ R(PN, {
      fontSize: n,
      className: r.background,
      ownerState: o
    }), /* @__PURE__ */ R(_N, {
      fontSize: n,
      className: r.dot,
      ownerState: o
    })]
  });
}
process.env.NODE_ENV !== "production" && (Ad.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: i.oneOf(["small", "medium"])
});
const Nd = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Nd.displayName = "RadioGroupContext");
function AN() {
  return T.useContext(Nd);
}
function NN(e) {
  return ke("MuiRadio", e);
}
const ih = Ne("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), $N = (e) => {
  const {
    classes: t,
    color: r,
    size: n
  } = e, o = {
    root: ["root", `color${ne(r)}`, n !== "medium" && `size${ne(n)}`]
  };
  return {
    ...t,
    ...je(o, NN, t)
  };
}, IN = se(xg, {
  shouldForwardProp: (e) => qt(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size !== "medium" && t[`size${ne(r.size)}`], t[`color${ne(r.color)}`]];
  }
})(Ue(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${ih.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: {
      color: "default",
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Kt()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Kt()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${ih.checked}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
})));
function DN(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const sh = /* @__PURE__ */ R(Ad, {
  checked: !0
}), ah = /* @__PURE__ */ R(Ad, {}), Wg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiRadio"
  }), {
    checked: o,
    checkedIcon: s = sh,
    color: a = "primary",
    icon: l = ah,
    name: c,
    onChange: u,
    size: d = "medium",
    className: f,
    disabled: p,
    disableRipple: m = !1,
    ...y
  } = n, b = en();
  let h = p;
  b && typeof h > "u" && (h = b.disabled), h ?? (h = !1);
  const S = {
    ...n,
    disabled: h,
    disableRipple: m,
    color: a,
    size: d
  }, w = $N(S), g = AN();
  let O = o;
  const E = Wc(u, g && g.onChange);
  let C = c;
  return g && (typeof O > "u" && (O = DN(g.value, n.value)), typeof C > "u" && (C = g.name)), /* @__PURE__ */ R(IN, {
    type: "radio",
    icon: /* @__PURE__ */ T.cloneElement(l, {
      fontSize: ah.props.fontSize ?? d
    }),
    checkedIcon: /* @__PURE__ */ T.cloneElement(s, {
      fontSize: sh.props.fontSize ?? d
    }),
    disabled: h,
    ownerState: S,
    classes: w,
    name: C,
    checked: O,
    onChange: E,
    ref: r,
    className: ge(w.root, f),
    ...y
  });
});
process.env.NODE_ENV !== "production" && (Wg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: i.bool,
  /**
   * The icon to display when the component is checked.
   * @default <RadioButtonIcon checked />
   */
  checkedIcon: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: i.node,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: rr,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: i.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: i.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: i.any
});
function kN(e) {
  return ke("MuiRadioGroup", e);
}
Ne("MuiRadioGroup", ["root", "row", "error"]);
const MN = (e) => {
  const {
    classes: t,
    row: r,
    error: n
  } = e;
  return je({
    root: ["root", r && "row", n && "error"]
  }, kN, t);
}, Gg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: n,
    children: o,
    className: s,
    defaultValue: a,
    name: l,
    onChange: c,
    value: u,
    ...d
  } = t, f = T.useRef(null), p = MN(t), [m, y] = Zn({
    controlled: u,
    default: a,
    name: "RadioGroup"
  });
  T.useImperativeHandle(n, () => ({
    focus: () => {
      let w = f.current.querySelector("input:not(:disabled):checked");
      w || (w = f.current.querySelector("input:not(:disabled)")), w && w.focus();
    }
  }), []);
  const b = bt(r, f), h = dl(l), S = T.useMemo(() => ({
    name: h,
    onChange(w) {
      y(w.target.value), c && c(w, w.target.value);
    },
    value: m
  }), [h, c, y, m]);
  return /* @__PURE__ */ R(Nd.Provider, {
    value: S,
    children: /* @__PURE__ */ R(Ng, {
      role: "radiogroup",
      ref: b,
      className: ge(p.root, s),
      ...d,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Gg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: i.string,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * @param {string} value The value of the selected radio button.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: i.any
});
function FN(e) {
  return ke("MuiSelect", e);
}
const Ni = Ne("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var lh;
const LN = se(Vg, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Ni.select}`]: t.select
      },
      {
        [`&.${Ni.select}`]: t[r.variant]
      },
      {
        [`&.${Ni.error}`]: t.error
      },
      {
        [`&.${Ni.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Ni.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), jN = se(Ug, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.icon, r.variant && t[`icon${ne(r.variant)}`], r.open && t.iconOpen];
  }
})({}), qN = se("input", {
  shouldForwardProp: (e) => eg(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function ch(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function VN(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const UN = (e) => {
  const {
    classes: t,
    variant: r,
    disabled: n,
    multiple: o,
    open: s,
    error: a
  } = e, l = {
    select: ["select", r, n && "disabled", o && "multiple", a && "error"],
    icon: ["icon", `icon${ne(r)}`, s && "iconOpen", n && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return je(l, FN, t);
}, Hg = /* @__PURE__ */ T.forwardRef(function(t, r) {
  var kt;
  const {
    "aria-describedby": n,
    "aria-label": o,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: f,
    displayEmpty: p,
    error: m = !1,
    IconComponent: y,
    inputRef: b,
    labelId: h,
    MenuProps: S = {},
    multiple: w,
    name: g,
    onBlur: O,
    onChange: E,
    onClose: C,
    onFocus: x,
    onOpen: P,
    open: v,
    readOnly: _,
    renderValue: I,
    SelectDisplayProps: k = {},
    tabIndex: W,
    // catching `type` from Input which makes no sense for SelectInput
    type: z,
    value: B,
    variant: L = "standard",
    ...K
  } = t, [j, X] = Zn({
    controlled: B,
    default: d,
    name: "Select"
  }), [q, H] = Zn({
    controlled: v,
    default: u,
    name: "Select"
  }), oe = T.useRef(null), te = T.useRef(null), [Y, J] = T.useState(null), {
    current: ae
  } = T.useRef(v != null), [ce, Z] = T.useState(), ie = bt(r, b), re = T.useCallback((pe) => {
    te.current = pe, pe && J(pe);
  }, []), fe = Y == null ? void 0 : Y.parentNode;
  T.useImperativeHandle(ie, () => ({
    focus: () => {
      te.current.focus();
    },
    node: oe.current,
    value: j
  }), [j]), T.useEffect(() => {
    u && q && Y && !ae && (Z(a ? null : fe.clientWidth), te.current.focus());
  }, [Y, a]), T.useEffect(() => {
    s && te.current.focus();
  }, [s]), T.useEffect(() => {
    if (!h)
      return;
    const pe = jt(te.current).getElementById(h);
    if (pe) {
      const De = () => {
        getSelection().isCollapsed && te.current.focus();
      };
      return pe.addEventListener("click", De), () => {
        pe.removeEventListener("click", De);
      };
    }
  }, [h]);
  const N = (pe, De) => {
    pe ? P && P(De) : C && C(De), ae || (Z(a ? null : fe.clientWidth), H(pe));
  }, ve = (pe) => {
    pe.button === 0 && (pe.preventDefault(), te.current.focus(), N(!0, pe));
  }, Q = (pe) => {
    N(!1, pe);
  }, me = T.Children.toArray(l), ue = (pe) => {
    const De = me.find((ft) => ft.props.value === pe.target.value);
    De !== void 0 && (X(De.props.value), E && E(pe, De));
  }, dt = (pe) => (De) => {
    let ft;
    if (De.currentTarget.hasAttribute("tabindex")) {
      if (w) {
        ft = Array.isArray(j) ? j.slice() : [];
        const Nr = j.indexOf(pe.props.value);
        Nr === -1 ? ft.push(pe.props.value) : ft.splice(Nr, 1);
      } else
        ft = pe.props.value;
      if (pe.props.onClick && pe.props.onClick(De), j !== ft && (X(ft), E)) {
        const Nr = De.nativeEvent || De, mr = new Nr.constructor(Nr.type, Nr);
        Object.defineProperty(mr, "target", {
          writable: !0,
          value: {
            value: ft,
            name: g
          }
        }), E(mr, pe);
      }
      w || N(!1, De);
    }
  }, Ee = (pe) => {
    _ || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(pe.key) && (pe.preventDefault(), N(!0, pe));
  }, qe = Y !== null && q, rt = (pe) => {
    !qe && O && (Object.defineProperty(pe, "target", {
      writable: !0,
      value: {
        value: j,
        name: g
      }
    }), O(pe));
  };
  delete K["aria-invalid"];
  let Ae, D;
  const F = [];
  let ee = !1, de = !1;
  (Pa({
    value: j
  }) || p) && (I ? Ae = I(j) : ee = !0);
  const be = me.map((pe) => {
    if (!/* @__PURE__ */ T.isValidElement(pe))
      return null;
    process.env.NODE_ENV !== "production" && es.isFragment(pe) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let De;
    if (w) {
      if (!Array.isArray(j))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Kr(2));
      De = j.some((ft) => ch(ft, pe.props.value)), De && ee && F.push(pe.props.children);
    } else
      De = ch(j, pe.props.value), De && ee && (D = pe.props.children);
    return De && (de = !0), /* @__PURE__ */ T.cloneElement(pe, {
      "aria-selected": De ? "true" : "false",
      onClick: dt(pe),
      onKeyUp: (ft) => {
        ft.key === " " && ft.preventDefault(), pe.props.onKeyUp && pe.props.onKeyUp(ft);
      },
      role: "option",
      selected: De,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": pe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (!de && !w && j !== "") {
      const pe = me.map((De) => De.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${j}\` for the select ${g ? `(name="${g}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${pe.filter((De) => De != null).map((De) => `\`${De}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [de, me, w, g, j]), ee && (w ? F.length === 0 ? Ae = null : Ae = F.reduce((pe, De, ft) => (pe.push(De), ft < F.length - 1 && pe.push(", "), pe), []) : Ae = D);
  let Se = ce;
  !a && ae && Y && (Se = fe.clientWidth);
  let Te;
  typeof W < "u" ? Te = W : Te = f ? null : 0;
  const Ce = k.id || (g ? `mui-component-select-${g}` : void 0), pt = {
    ...t,
    variant: L,
    value: j,
    open: qe,
    error: m
  }, $e = UN(pt), Dt = {
    ...S.PaperProps,
    ...(kt = S.slotProps) == null ? void 0 : kt.paper
  }, hr = dl();
  return /* @__PURE__ */ Oe(T.Fragment, {
    children: [/* @__PURE__ */ R(LN, {
      as: "div",
      ref: re,
      tabIndex: Te,
      role: "combobox",
      "aria-controls": hr,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": qe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": o,
      "aria-labelledby": [h, Ce].filter(Boolean).join(" ") || void 0,
      "aria-describedby": n,
      onKeyDown: Ee,
      onMouseDown: f || _ ? null : ve,
      onBlur: rt,
      onFocus: x,
      ...k,
      ownerState: pt,
      className: ge(k.className, $e.select, c),
      id: Ce,
      children: VN(Ae) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        lh || (lh = /* @__PURE__ */ R("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Ae
    }), /* @__PURE__ */ R(qN, {
      "aria-invalid": m,
      value: Array.isArray(j) ? j.join(",") : j,
      name: g,
      ref: oe,
      "aria-hidden": !0,
      onChange: ue,
      tabIndex: -1,
      disabled: f,
      className: $e.nativeInput,
      autoFocus: s,
      ...K,
      ownerState: pt
    }), /* @__PURE__ */ R(jN, {
      as: y,
      className: $e.icon,
      ownerState: pt
    }), /* @__PURE__ */ R(qg, {
      id: `menu-${g || ""}`,
      anchorEl: fe,
      open: qe,
      onClose: Q,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...S,
      MenuListProps: {
        "aria-labelledby": h,
        role: "listbox",
        "aria-multiselectable": w ? "true" : void 0,
        disableListWrap: !0,
        id: hr,
        ...S.MenuListProps
      },
      slotProps: {
        ...S.slotProps,
        paper: {
          ...Dt,
          style: {
            minWidth: Se,
            ...Dt != null ? Dt.style : null
          }
        }
      },
      children: be
    })]
  });
});
process.env.NODE_ENV !== "production" && (Hg.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * @ignore
   */
  "aria-label": i.string,
  /**
   * @ignore
   */
  autoFocus: i.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: rr,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * @ignore
   */
  readOnly: i.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * @ignore
   */
  tabIndex: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  type: i.any,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
const BN = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, $d = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => qt(e) && e !== "variant",
  slot: "Root"
}, zN = se(ls, $d)(""), WN = se(cs, $d)(""), GN = se(ss, $d)(""), Cl = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = yd({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = bg,
    id: f,
    input: p,
    inputProps: m,
    label: y,
    labelId: b,
    MenuProps: h,
    multiple: S = !1,
    native: w = !1,
    onClose: g,
    onOpen: O,
    open: E,
    renderValue: C,
    SelectDisplayProps: x,
    variant: P = "outlined",
    ...v
  } = n, _ = w ? Bg : Hg, I = en(), k = kn({
    props: n,
    muiFormControl: I,
    states: ["variant", "error"]
  }), W = k.variant || P, z = {
    ...n,
    variant: W,
    classes: a
  }, B = BN(z), {
    root: L,
    ...K
  } = B, j = p || {
    standard: /* @__PURE__ */ R(zN, {
      ownerState: z
    }),
    outlined: /* @__PURE__ */ R(WN, {
      label: y,
      ownerState: z
    }),
    filled: /* @__PURE__ */ R(GN, {
      ownerState: z
    })
  }[W], X = bt(r, mi(j));
  return /* @__PURE__ */ R(T.Fragment, {
    children: /* @__PURE__ */ T.cloneElement(j, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: _,
      inputProps: {
        children: s,
        error: k.error,
        IconComponent: d,
        variant: W,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: S,
        ...w ? {
          id: f
        } : {
          autoWidth: o,
          defaultOpen: c,
          displayEmpty: u,
          labelId: b,
          MenuProps: h,
          onClose: g,
          onOpen: O,
          open: E,
          renderValue: C,
          SelectDisplayProps: {
            id: f,
            ...x
          }
        },
        ...m,
        classes: m ? Ct(K, m.classes) : K,
        ...p ? p.props.inputProps : {}
      },
      ...(S && w || u) && W === "outlined" ? {
        notched: !0
      } : {},
      ref: X,
      className: ge(j.props.className, l, B.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!p && {
        variant: W
      },
      ...v
    })
  });
});
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: i.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: i.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: i.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: i.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: i.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: i.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: i.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: i.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: i.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: i.oneOfType([i.oneOf([""]), i.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
Cl.muiName = "Select";
const Kg = ER({
  createStyledComponent: se("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => yd({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Kg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: i.oneOfType([i.oneOf(["column-reverse", "column", "row-reverse", "row"]), i.arrayOf(i.oneOf(["column-reverse", "column", "row-reverse", "row"])), i.object]),
  /**
   * Add an element between each child.
   */
  divider: i.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: i.bool
});
function HN(e) {
  return ke("MuiTextField", e);
}
Ne("MuiTextField", ["root"]);
const KN = {
  standard: ls,
  filled: ss,
  outlined: cs
}, YN = (e) => {
  const {
    classes: t
  } = e;
  return je({
    root: ["root"]
  }, HN, t);
}, QN = se(Tl, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Id = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    FormHelperTextProps: p,
    fullWidth: m = !1,
    helperText: y,
    id: b,
    InputLabelProps: h,
    inputProps: S,
    InputProps: w,
    inputRef: g,
    label: O,
    maxRows: E,
    minRows: C,
    multiline: x = !1,
    name: P,
    onBlur: v,
    onChange: _,
    onFocus: I,
    placeholder: k,
    required: W = !1,
    rows: z,
    select: B = !1,
    SelectProps: L,
    slots: K = {},
    slotProps: j = {},
    type: X,
    value: q,
    variant: H = "outlined",
    ...oe
  } = n, te = {
    ...n,
    autoFocus: s,
    color: c,
    disabled: d,
    error: f,
    fullWidth: m,
    multiline: x,
    required: W,
    select: B,
    variant: H
  }, Y = YN(te);
  process.env.NODE_ENV !== "production" && B && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const J = dl(b), ae = y && J ? `${J}-helper-text` : void 0, ce = O && J ? `${J}-label` : void 0, Z = KN[H], ie = {
    slots: K,
    slotProps: {
      input: w,
      inputLabel: h,
      htmlInput: S,
      formHelperText: p,
      select: L,
      ...j
    }
  }, re = {}, fe = ie.slotProps.inputLabel;
  H === "outlined" && (fe && typeof fe.shrink < "u" && (re.notched = fe.shrink), re.label = O), B && ((!L || !L.native) && (re.id = void 0), re["aria-describedby"] = void 0);
  const [N, ve] = Lt("input", {
    elementType: Z,
    externalForwardedProps: ie,
    additionalProps: re,
    ownerState: te
  }), [Q, me] = Lt("inputLabel", {
    elementType: Dg,
    externalForwardedProps: ie,
    ownerState: te
  }), [ue, dt] = Lt("htmlInput", {
    elementType: "input",
    externalForwardedProps: ie,
    ownerState: te
  }), [Ee, qe] = Lt("formHelperText", {
    elementType: Pd,
    externalForwardedProps: ie,
    ownerState: te
  }), [rt, Ae] = Lt("select", {
    elementType: Cl,
    externalForwardedProps: ie,
    ownerState: te
  }), D = /* @__PURE__ */ R(N, {
    "aria-describedby": ae,
    autoComplete: o,
    autoFocus: s,
    defaultValue: u,
    fullWidth: m,
    multiline: x,
    name: P,
    rows: z,
    maxRows: E,
    minRows: C,
    type: X,
    value: q,
    id: J,
    inputRef: g,
    onBlur: v,
    onChange: _,
    onFocus: I,
    placeholder: k,
    inputProps: dt,
    slots: {
      input: K.htmlInput ? ue : void 0
    },
    ...ve
  });
  return /* @__PURE__ */ Oe(QN, {
    className: ge(Y.root, l),
    disabled: d,
    error: f,
    fullWidth: m,
    ref: r,
    required: W,
    color: c,
    variant: H,
    ownerState: te,
    ...oe,
    children: [O != null && O !== "" && /* @__PURE__ */ R(Q, {
      htmlFor: J,
      id: ce,
      ...me,
      children: O
    }), B ? /* @__PURE__ */ R(rt, {
      "aria-describedby": ae,
      id: J,
      labelId: ce,
      value: q,
      input: D,
      ...Ae,
      children: a
    }) : D, y && /* @__PURE__ */ R(Ee, {
      id: ae,
      ...qe,
      children: y
    })]
  });
});
process.env.NODE_ENV !== "production" && (Id.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * @ignore
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: i.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The helper text content.
   */
  helperText: i.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: i.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: i.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: i.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: rr,
  /**
   * The label content.
   */
  label: i.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: i.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: i.object,
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    formHelperText: i.oneOfType([i.func, i.object]),
    htmlInput: i.oneOfType([i.func, i.object]),
    input: i.oneOfType([i.func, i.object]),
    inputLabel: i.oneOfType([i.func, i.object]),
    select: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    formHelperText: i.elementType,
    htmlInput: i.elementType,
    input: i.elementType,
    inputLabel: i.elementType,
    select: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
se("div")(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .no-rows-primary": {
    fill: e.palette.mode === "light" ? "#AEB8C2" : "#3D4751"
  },
  "& .no-rows-secondary": {
    fill: e.palette.mode === "light" ? "#E8EAED" : "#1D2126"
  }
}));
const XN = Eo(/* @__PURE__ */ R("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add"), JN = Eo(/* @__PURE__ */ R("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), fc = ({
  isRequired: e = !1,
  label: t,
  name: r,
  options: n,
  handleChange: o,
  handleBlur: s
}) => {
  const [a, l] = Yu(r);
  return /* @__PURE__ */ Oe(ye, { container: !0, direction: "column", children: [
    /* @__PURE__ */ R(ye, { item: !0, children: /* @__PURE__ */ Oe(It, { variant: "body2", component: "label", htmlFor: r, children: [
      e && /* @__PURE__ */ R(It, { variant: "body2", component: "span", color: "error", sx: { fontWeight: 600 }, children: "*" }),
      t
    ] }) }),
    /* @__PURE__ */ R(ye, { item: !0, children: /* @__PURE__ */ R(
      vg,
      {
        id: r,
        size: "small",
        fullWidth: !0,
        options: n,
        getOptionLabel: (c) => c.label || "",
        isOptionEqualToValue: (c, u) => c.value === u.value,
        value: n.find((c) => c.value === a.value) || null,
        onChange: o,
        onBlur: s,
        renderInput: (c) => /* @__PURE__ */ R(
          Id,
          {
            ...c,
            ...a,
            name: r,
            variant: "outlined",
            error: l.touched && !!l.error,
            helperText: l.touched && l.error ? l.error : ""
          }
        ),
        renderOption: (c, u) => /* @__PURE__ */ no("li", { ...c, key: u.value }, u.label)
      }
    ) })
  ] });
}, ZN = 48, e$ = 8, t$ = {
  PaperProps: {
    style: {
      maxHeight: ZN * 4.5 + e$,
      width: 250
    }
  }
}, Ln = ({
  isRequired: e,
  label: t,
  name: r,
  value: n,
  options: o,
  handleChange: s,
  touched: a = {},
  errors: l = {},
  ...c
}) => {
  const [u, d] = Yu(r);
  return /* @__PURE__ */ Oe(ye, { container: !0, direction: "column", children: [
    /* @__PURE__ */ Oe(ye, { item: !0, xs: 12, children: [
      e && /* @__PURE__ */ Oe(It, { variant: "body1", component: "span", color: "error", sx: { fontWeight: 600 }, children: [
        "*",
        " "
      ] }),
      /* @__PURE__ */ R(It, { variant: "body2", component: "span", children: t })
    ] }),
    /* @__PURE__ */ R(ye, { item: !0, xs: 12, children: /* @__PURE__ */ Oe(Tl, { fullWidth: !0, error: d.touched && !!d.error, ...u, children: [
      /* @__PURE__ */ R(
        Cl,
        {
          id: r,
          name: r,
          size: "small",
          value: n ?? "",
          onChange: s,
          MenuProps: t$,
          ...c,
          children: o ? o.map((f, p) => /* @__PURE__ */ R(ou, { value: f.value, children: f.label }, p)) : /* @__PURE__ */ R(ou, { value: "", children: "" })
        }
      ),
      d.touched && !!d.error && /* @__PURE__ */ R(Pd, { children: d.error })
    ] }) })
  ] });
}, ct = ({ isRequired: e, label: t, name: r, type: n, value: o, handleChange: s, isReadOnly: a, touched: l = {}, errors: c = {}, ...u }) => {
  const [d, f] = Yu(r);
  return /* @__PURE__ */ Oe(ye, { container: !0, direction: "column", children: [
    /* @__PURE__ */ Oe(ye, { item: !0, xs: 12, children: [
      e && /* @__PURE__ */ Oe(It, { variant: "body1", component: "span", color: "error", sx: { fontWeight: 600 }, children: [
        "*",
        " "
      ] }),
      /* @__PURE__ */ R(It, { variant: "body2", component: "span", children: t })
    ] }),
    /* @__PURE__ */ R(ye, { item: !0, xs: 12, children: /* @__PURE__ */ R(
      Id,
      {
        ...d,
        fullWidth: !0,
        size: "small",
        type: n,
        id: r,
        name: r,
        value: o ?? "",
        onChange: s,
        InputLabelProps: { shrink: n === "date" },
        InputProps: {
          readOnly: a ?? !1
        },
        error: f.touched && !!f.error,
        helperText: f.touched && f.error ? f.error : "",
        sx: {
          "& .MuiOutlinedInput-root": {
            pointerEvents: a ? "none" : "auto"
          }
        },
        ...u
      }
    ) })
  ] });
}, r$ = ({
  isRequired: e,
  label: t,
  name: r,
  value: n,
  options: o,
  handleChange: s,
  touched: a = {},
  errors: l = {},
  ...c
}) => {
  const u = () => {
    const d = l[r];
    return typeof d == "string" ? d : void 0;
  };
  return /* @__PURE__ */ Oe(ye, { container: !0, direction: "column", children: [
    /* @__PURE__ */ Oe(ye, { item: !0, xs: 12, children: [
      e && /* @__PURE__ */ Oe(It, { variant: "body1", component: "span", color: "error", sx: { fontWeight: 600 }, children: [
        "*",
        " "
      ] }),
      /* @__PURE__ */ R(It, { variant: "body2", component: "span", children: t })
    ] }),
    /* @__PURE__ */ R(ye, { item: !0, xs: 12, children: /* @__PURE__ */ R(Tl, { component: "fieldset", children: /* @__PURE__ */ R(Gg, { row: !0, name: r, value: n, onChange: s, ...c, children: o.map((d) => /* @__PURE__ */ R(
      Ag,
      {
        control: /* @__PURE__ */ R(Wg, {}),
        label: d.label,
        value: d.value
      },
      d.label
    )) }) }) }),
    /* @__PURE__ */ R(ye, { item: !0, xs: 12, children: a[r] && u() && /* @__PURE__ */ R(It, { variant: "caption", component: "div", color: "error", children: u() }) })
  ] });
};
var iu = { exports: {} }, pc = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uh;
function n$() {
  if (uh) return pc;
  uh = 1;
  var e = ar;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, o = e.useRef, s = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return pc.useSyncExternalStoreWithSelector = function(c, u, d, f, p) {
    var m = o(null);
    if (m.current === null) {
      var y = { hasValue: !1, value: null };
      m.current = y;
    } else y = m.current;
    m = a(function() {
      function h(E) {
        if (!S) {
          if (S = !0, w = E, E = f(E), p !== void 0 && y.hasValue) {
            var C = y.value;
            if (p(C, E)) return g = C;
          }
          return g = E;
        }
        if (C = g, r(w, E)) return C;
        var x = f(E);
        return p !== void 0 && p(C, x) ? C : (w = E, g = x);
      }
      var S = !1, w, g, O = d === void 0 ? null : d;
      return [function() {
        return h(u());
      }, O === null ? void 0 : function() {
        return h(O());
      }];
    }, [u, d, f, p]);
    var b = n(c, m[0], m[1]);
    return s(function() {
      y.hasValue = !0, y.value = b;
    }, [b]), l(b), b;
  }, pc;
}
var hc = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dh;
function o$() {
  return dh || (dh = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ar;
    function t(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, o = e.useRef, s = e.useEffect, a = e.useMemo, l = e.useDebugValue;
    function c(u, d, f, p, m) {
      var y = o(null), b;
      y.current === null ? (b = {
        hasValue: !1,
        value: null
      }, y.current = b) : b = y.current;
      var h = a(function() {
        var O = !1, E, C, x = function(I) {
          if (!O) {
            O = !0, E = I;
            var k = p(I);
            if (m !== void 0 && b.hasValue) {
              var W = b.value;
              if (m(W, k))
                return C = W, W;
            }
            return C = k, k;
          }
          var z = E, B = C;
          if (r(z, I))
            return B;
          var L = p(I);
          return m !== void 0 && m(B, L) ? B : (E = I, C = L, L);
        }, P = f === void 0 ? null : f, v = function() {
          return x(d());
        }, _ = P === null ? void 0 : function() {
          return x(P());
        };
        return [v, _];
      }, [d, f, p, m]), S = h[0], w = h[1], g = n(u, S, w);
      return s(function() {
        b.hasValue = !0, b.value = g;
      }, [g]), l(g), g;
    }
    hc.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), hc;
}
process.env.NODE_ENV === "production" ? iu.exports = n$() : iu.exports = o$();
var i$ = iu.exports, zr = (
  // prettier-ignore
  // @ts-ignore
  "default" in T ? T.default : T
), fh = Symbol.for("react-redux-context"), ph = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function s$() {
  if (!zr.createContext)
    return {};
  const e = ph[fh] ?? (ph[fh] = /* @__PURE__ */ new Map());
  let t = e.get(zr.createContext);
  return t || (t = zr.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(zr.createContext, t)), t;
}
var co = /* @__PURE__ */ s$(), a$ = () => {
  throw new Error("uSES not initialized!");
};
function Dd(e = co) {
  return function() {
    const r = zr.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var Yg = /* @__PURE__ */ Dd(), Qg = a$, l$ = (e) => {
  Qg = e;
}, c$ = (e, t) => e === t;
function u$(e = co) {
  const t = e === co ? Yg : Dd(e), r = (n, o = {}) => {
    const { equalityFn: s = c$, devModeChecks: a = {} } = typeof o == "function" ? { equalityFn: o } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error("You must pass a selector to useSelector");
      if (typeof n != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof s != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: l,
      subscription: c,
      getServerState: u,
      stabilityCheck: d,
      identityFunctionCheck: f
    } = t(), p = zr.useRef(!0), m = zr.useCallback(
      {
        [n.name](b) {
          const h = n(b);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: S,
              stabilityCheck: w
            } = {
              stabilityCheck: d,
              identityFunctionCheck: f,
              ...a
            };
            if (w === "always" || w === "once" && p.current) {
              const g = n(b);
              if (!s(h, g)) {
                let O;
                try {
                  throw new Error();
                } catch (E) {
                  ({ stack: O } = E);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: b,
                    selected: h,
                    selected2: g,
                    stack: O
                  }
                );
              }
            }
            if ((S === "always" || S === "once" && p.current) && h === b) {
              let g;
              try {
                throw new Error();
              } catch (O) {
                ({ stack: g } = O);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: g }
              );
            }
            p.current && (p.current = !1);
          }
          return h;
        }
      }[n.name],
      [n, d, a.stabilityCheck]
    ), y = Qg(
      c.addNestedSub,
      l.getState,
      u || l.getState,
      m,
      s
    );
    return zr.useDebugValue(y), y;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Xg = /* @__PURE__ */ u$(), d$ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f$ = typeof navigator < "u" && navigator.product === "ReactNative";
d$ || f$ ? zr.useLayoutEffect : zr.useEffect;
function Jg(e = co) {
  const t = e === co ? Yg : (
    // @ts-ignore
    Dd(e)
  ), r = () => {
    const { store: n } = t();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var p$ = /* @__PURE__ */ Jg();
function h$(e = co) {
  const t = e === co ? p$ : Jg(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var m$ = /* @__PURE__ */ h$();
l$(i$.useSyncExternalStoreWithSelector);
const Js = Xg.withTypes();
function xt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var y$ = typeof Symbol == "function" && Symbol.observable || "@@observable", hh = y$, mc = () => Math.random().toString(36).substring(7).split("").join("."), g$ = {
  INIT: `@@redux/INIT${/* @__PURE__ */ mc()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ mc()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${mc()}`
}, to = g$;
function _s(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function b$(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (S$(e))
    return "date";
  if (E$(e))
    return "error";
  const r = v$(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function v$(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function E$(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function S$(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function En(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = b$(e)), t;
}
function Zg(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? xt(2) : `Expected the root reducer to be a function. Instead, received: '${En(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? xt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xt(1) : `Expected the enhancer to be a function. Instead, received: '${En(r)}'`);
    return r(Zg)(e, t);
  }
  let n = e, o = t, s = /* @__PURE__ */ new Map(), a = s, l = 0, c = !1;
  function u() {
    a === s && (a = /* @__PURE__ */ new Map(), s.forEach((h, S) => {
      a.set(S, h);
    }));
  }
  function d() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xt(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function f(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xt(4) : `Expected the listener to be a function. Instead, received: '${En(h)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xt(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let S = !0;
    u();
    const w = l++;
    return a.set(w, h), function() {
      if (S) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? xt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        S = !1, u(), a.delete(w), s = null;
      }
    };
  }
  function p(h) {
    if (!_s(h))
      throw new Error(process.env.NODE_ENV === "production" ? xt(7) : `Actions must be plain objects. Instead, the actual type was: '${En(h)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof h.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xt(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof h.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? xt(17) : `Action "type" property must be a string. Instead, the actual type was: '${En(h.type)}'. Value was: '${h.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xt(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = n(o, h);
    } finally {
      c = !1;
    }
    return (s = a).forEach((w) => {
      w();
    }), h;
  }
  function m(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xt(10) : `Expected the nextReducer to be a function. Instead, received: '${En(h)}`);
    n = h, p({
      type: to.REPLACE
    });
  }
  function y() {
    const h = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(S) {
        if (typeof S != "object" || S === null)
          throw new Error(process.env.NODE_ENV === "production" ? xt(11) : `Expected the observer to be an object. Instead, received: '${En(S)}'`);
        function w() {
          const O = S;
          O.next && O.next(d());
        }
        return w(), {
          unsubscribe: h(w)
        };
      },
      [hh]() {
        return this;
      }
    };
  }
  return p({
    type: to.INIT
  }), {
    dispatch: p,
    subscribe: f,
    getState: d,
    replaceReducer: m,
    [hh]: y
  };
}
function mh(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function O$(e, t, r, n) {
  const o = Object.keys(t), s = r && r.type === to.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!_s(e))
    return `The ${s} has unexpected type of "${En(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const a = Object.keys(e).filter((l) => !t.hasOwnProperty(l) && !n[l]);
  if (a.forEach((l) => {
    n[l] = !0;
  }), !(r && r.type === to.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${s}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function w$(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: to.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: to.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${to.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function eb(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    process.env.NODE_ENV !== "production" && typeof e[l] > "u" && mh(`No reducer provided for key "${l}"`), typeof e[l] == "function" && (r[l] = e[l]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let s;
  try {
    w$(r);
  } catch (a) {
    s = a;
  }
  return function(l = {}, c) {
    if (s)
      throw s;
    if (process.env.NODE_ENV !== "production") {
      const f = O$(l, r, c, o);
      f && mh(f);
    }
    let u = !1;
    const d = {};
    for (let f = 0; f < n.length; f++) {
      const p = n[f], m = r[p], y = l[p], b = m(y, c);
      if (typeof b > "u") {
        const h = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? xt(14) : `When called with an action of type ${h ? `"${String(h)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      d[p] = b, u = u || b !== y;
    }
    return u = u || n.length !== Object.keys(l).length, u ? d : l;
  };
}
function $a(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function T$(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let s = () => {
      throw new Error(process.env.NODE_ENV === "production" ? xt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...u) => s(c, ...u)
    }, l = e.map((c) => c(a));
    return s = $a(...l)(o.dispatch), {
      ...o,
      dispatch: s
    };
  };
}
function tb(e) {
  return _s(e) && "type" in e && typeof e.type == "string";
}
var rb = Symbol.for("immer-nothing"), yh = Symbol.for("immer-draftable"), fr = Symbol.for("immer-state"), C$ = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Gt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = C$[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ai = Object.getPrototypeOf;
function uo(e) {
  return !!e && !!e[fr];
}
function pn(e) {
  var t;
  return e ? nb(e) || Array.isArray(e) || !!e[yh] || !!((t = e.constructor) != null && t[yh]) || Rl(e) || Pl(e) : !1;
}
var x$ = Object.prototype.constructor.toString();
function nb(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ai(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === x$;
}
function Ia(e, t) {
  xl(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function xl(e) {
  const t = e[fr];
  return t ? t.type_ : Array.isArray(e) ? 1 : Rl(e) ? 2 : Pl(e) ? 3 : 0;
}
function su(e, t) {
  return xl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ob(e, t, r) {
  const n = xl(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function R$(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Rl(e) {
  return e instanceof Map;
}
function Pl(e) {
  return e instanceof Set;
}
function Vn(e) {
  return e.copy_ || e.base_;
}
function au(e, t) {
  if (Rl(e))
    return new Map(e);
  if (Pl(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = nb(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[fr];
    let o = Reflect.ownKeys(n);
    for (let s = 0; s < o.length; s++) {
      const a = o[s], l = n[a];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (n[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[a]
      });
    }
    return Object.create(ai(e), n);
  } else {
    const n = ai(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function kd(e, t = !1) {
  return _l(e) || uo(e) || !pn(e) || (xl(e) > 1 && (e.set = e.add = e.clear = e.delete = P$), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => kd(n, !0))), e;
}
function P$() {
  Gt(2);
}
function _l(e) {
  return Object.isFrozen(e);
}
var _$ = {};
function fo(e) {
  const t = _$[e];
  return t || Gt(0, e), t;
}
var us;
function ib() {
  return us;
}
function A$(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function gh(e, t) {
  t && (fo("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function lu(e) {
  cu(e), e.drafts_.forEach(N$), e.drafts_ = null;
}
function cu(e) {
  e === us && (us = e.parent_);
}
function bh(e) {
  return us = A$(us, e);
}
function N$(e) {
  const t = e[fr];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function vh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[fr].modified_ && (lu(t), Gt(4)), pn(e) && (e = Da(t, e), t.parent_ || ka(t, e)), t.patches_ && fo("Patches").generateReplacementPatches_(
    r[fr].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Da(t, r, []), lu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== rb ? e : void 0;
}
function Da(e, t, r) {
  if (_l(t))
    return t;
  const n = t[fr];
  if (!n)
    return Ia(
      t,
      (o, s) => Eh(e, n, t, o, s, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return ka(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let s = o, a = !1;
    n.type_ === 3 && (s = new Set(o), o.clear(), a = !0), Ia(
      s,
      (l, c) => Eh(e, n, o, l, c, r, a)
    ), ka(e, o, !1), r && e.patches_ && fo("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Eh(e, t, r, n, o, s, a) {
  if (process.env.NODE_ENV !== "production" && o === r && Gt(5), uo(o)) {
    const l = s && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !su(t.assigned_, n) ? s.concat(n) : void 0, c = Da(e, o, l);
    if (ob(r, n, c), uo(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else a && r.add(o);
  if (pn(o) && !_l(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Da(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && ka(e, o);
  }
}
function ka(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && kd(t, r);
}
function $$(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : ib(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, s = Md;
  r && (o = [n], s = ds);
  const { revoke: a, proxy: l } = Proxy.revocable(o, s);
  return n.draft_ = l, n.revoke_ = a, l;
}
var Md = {
  get(e, t) {
    if (t === fr)
      return e;
    const r = Vn(e);
    if (!su(r, t))
      return I$(e, r, t);
    const n = r[t];
    return e.finalized_ || !pn(n) ? n : n === yc(e.base_, t) ? (gc(e), e.copy_[t] = du(n, e)) : n;
  },
  has(e, t) {
    return t in Vn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Vn(e));
  },
  set(e, t, r) {
    const n = sb(Vn(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = yc(Vn(e), t), s = o == null ? void 0 : o[fr];
      if (s && s.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (R$(r, o) && (r !== void 0 || su(e.base_, t)))
        return !0;
      gc(e), uu(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return yc(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, gc(e), uu(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Vn(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Gt(11);
  },
  getPrototypeOf(e) {
    return ai(e.base_);
  },
  setPrototypeOf() {
    Gt(12);
  }
}, ds = {};
Ia(Md, (e, t) => {
  ds[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
ds.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Gt(13), ds.set.call(this, e, t, void 0);
};
ds.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Gt(14), Md.set.call(this, e[0], t, r, e[0]);
};
function yc(e, t) {
  const r = e[fr];
  return (r ? Vn(r) : e)[t];
}
function I$(e, t, r) {
  var o;
  const n = sb(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function sb(e, t) {
  if (!(t in e))
    return;
  let r = ai(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = ai(r);
  }
}
function uu(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && uu(e.parent_));
}
function gc(e) {
  e.copy_ || (e.copy_ = au(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var D$ = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const s = r;
        r = t;
        const a = this;
        return function(c = s, ...u) {
          return a.produce(c, (d) => r.call(this, d, ...u));
        };
      }
      typeof r != "function" && Gt(6), n !== void 0 && typeof n != "function" && Gt(7);
      let o;
      if (pn(t)) {
        const s = bh(this), a = du(t, void 0);
        let l = !0;
        try {
          o = r(a), l = !1;
        } finally {
          l ? lu(s) : cu(s);
        }
        return gh(s, n), vh(o, s);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === rb && (o = void 0), this.autoFreeze_ && kd(o, !0), n) {
          const s = [], a = [];
          fo("Patches").generateReplacementPatches_(t, o, s, a), n(s, a);
        }
        return o;
      } else
        Gt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (a, ...l) => this.produceWithPatches(a, (c) => t(c, ...l));
      let n, o;
      return [this.produce(t, r, (a, l) => {
        n = a, o = l;
      }), n, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    pn(e) || Gt(8), uo(e) && (e = k$(e));
    const t = bh(this), r = du(e, void 0);
    return r[fr].isManual_ = !0, cu(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[fr];
    (!r || !r.isManual_) && Gt(9);
    const { scope_: n } = r;
    return gh(n, t), vh(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = fo("Patches").applyPatches_;
    return uo(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function du(e, t) {
  const r = Rl(e) ? fo("MapSet").proxyMap_(e, t) : Pl(e) ? fo("MapSet").proxySet_(e, t) : $$(e, t);
  return (t ? t.scope_ : ib()).drafts_.push(r), r;
}
function k$(e) {
  return uo(e) || Gt(10, e), ab(e);
}
function ab(e) {
  if (!pn(e) || _l(e))
    return e;
  const t = e[fr];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = au(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = au(e, !0);
  return Ia(r, (n, o) => {
    ob(r, n, ab(o));
  }), t && (t.finalized_ = !1), r;
}
var pr = new D$(), lb = pr.produce;
pr.produceWithPatches.bind(
  pr
);
pr.setAutoFreeze.bind(pr);
pr.setUseStrictShallowCopy.bind(pr);
pr.applyPatches.bind(pr);
pr.createDraft.bind(pr);
pr.finishDraft.bind(pr);
function cb(e) {
  return ({ dispatch: r, getState: n }) => (o) => (s) => typeof s == "function" ? s(r, n, e) : o(s);
}
var M$ = cb(), F$ = cb, L$ = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? $a : $a.apply(null, arguments);
}, j$ = (e) => e && typeof e.match == "function";
function Sh(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? it(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => tb(n) && n.type === e, r;
}
function q$(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  j$(e);
}
function V$(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function U$(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = q$
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(V$(n.type)), r(n));
}
function ub(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const o = Date.now();
      try {
        return n();
      } finally {
        const s = Date.now();
        r += s - o;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var db = class Li extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Li.prototype);
  }
  static get [Symbol.species]() {
    return Li;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Li(...t[0].concat(this)) : new Li(...t.concat(this));
  }
};
function Oh(e) {
  return pn(e) ? lb(e, () => {
  }) : e;
}
function wh(e, t, r) {
  if (e.has(t)) {
    let o = e.get(t);
    return r.update && (o = r.update(o, t, e), e.set(t, o)), o;
  }
  if (!r.insert) throw new Error(process.env.NODE_ENV === "production" ? it(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function B$(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function z$(e, t, r) {
  const n = fb(e, t, r);
  return {
    detectMutations() {
      return pb(e, t, n, r);
    }
  };
}
function fb(e, t = [], r, n = "", o = /* @__PURE__ */ new Set()) {
  const s = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), s.children = {};
    for (const a in r) {
      const l = n ? n + "." + a : a;
      t.length && t.indexOf(l) !== -1 || (s.children[a] = fb(e, t, r[a], l));
    }
  }
  return s;
}
function pb(e, t = [], r, n, o = !1, s = "") {
  const a = r ? r.value : void 0, l = a === n;
  if (o && !l && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: s
    };
  if (e(a) || e(n))
    return {
      wasMutated: !1
    };
  const c = {};
  for (let d in r.children)
    c[d] = !0;
  for (let d in n)
    c[d] = !0;
  const u = t.length > 0;
  for (let d in c) {
    const f = s ? s + "." + d : d;
    if (u && t.some((y) => y instanceof RegExp ? y.test(f) : f === y))
      continue;
    const p = pb(e, t, r.children[d], n[d], l, f);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function W$(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(l, c, u, d) {
      return JSON.stringify(l, r(c, d), u);
    }, r = function(l, c) {
      let u = [], d = [];
      return c || (c = function(f, p) {
        return u[0] === p ? "[Circular ~]" : "[Circular ~." + d.slice(0, u.indexOf(p)).join(".") + "]";
      }), function(f, p) {
        if (u.length > 0) {
          var m = u.indexOf(this);
          ~m ? u.splice(m + 1) : u.push(this), ~m ? d.splice(m, 1 / 0, f) : d.push(f), ~u.indexOf(p) && (p = c.call(this, f, p));
        } else u.push(p);
        return l == null ? p : l.call(this, f, p);
      };
    }, {
      isImmutable: n = B$,
      ignoredPaths: o,
      warnAfter: s = 32
    } = e;
    const a = z$.bind(null, n, o);
    return ({
      getState: l
    }) => {
      let c = l(), u = a(c), d;
      return (f) => (p) => {
        const m = ub(s, "ImmutableStateInvariantMiddleware");
        m.measureTime(() => {
          if (c = l(), d = u.detectMutations(), u = a(c), d.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? it(19) : `A state mutation was detected between dispatches, in the path '${d.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const y = f(p);
        return m.measureTime(() => {
          if (c = l(), d = u.detectMutations(), u = a(c), d.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? it(20) : `A state mutation was detected inside a dispatch, in the path: ${d.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), m.warnIfExceeded(), y;
      };
    };
  }
}
function hb(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || _s(e);
}
function fu(e, t = "", r = hb, n, o = [], s) {
  let a;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || s != null && s.has(e)) return !1;
  const l = n != null ? n(e) : Object.entries(e), c = o.length > 0;
  for (const [u, d] of l) {
    const f = t ? t + "." + u : u;
    if (!(c && o.some((m) => m instanceof RegExp ? m.test(f) : f === m))) {
      if (!r(d))
        return {
          keyPath: f,
          value: d
        };
      if (typeof d == "object" && (a = fu(d, f, r, n, o, s), a))
        return a;
    }
  }
  return s && mb(e) && s.add(e), !1;
}
function mb(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !mb(t))
      return !1;
  return !0;
}
function G$(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = hb,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: s = [],
      warnAfter: a = 32,
      ignoreState: l = !1,
      ignoreActions: c = !1,
      disableCache: u = !1
    } = e, d = !u && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (f) => (p) => (m) => {
      if (!tb(m))
        return p(m);
      const y = p(m), b = ub(a, "SerializableStateInvariantMiddleware");
      return !c && !(n.length && n.indexOf(m.type) !== -1) && b.measureTime(() => {
        const h = fu(m, "", t, r, o, d);
        if (h) {
          const {
            keyPath: S,
            value: w
          } = h;
          console.error(`A non-serializable value was detected in an action, in the path: \`${S}\`. Value:`, w, `
Take a look at the logic that dispatched this action: `, m, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), l || (b.measureTime(() => {
        const h = f.getState(), S = fu(h, "", t, r, s, d);
        if (S) {
          const {
            keyPath: w,
            value: g
          } = S;
          console.error(`A non-serializable value was detected in the state, in the path: \`${w}\`. Value:`, g, `
Take a look at the reducer(s) handling this action type: ${m.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), b.warnIfExceeded()), y;
    };
  }
}
function Zs(e) {
  return typeof e == "boolean";
}
var H$ = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: s = !0
  } = t ?? {};
  let a = new db();
  if (r && (Zs(r) ? a.push(M$) : a.push(F$(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let l = {};
      Zs(n) || (l = n), a.unshift(W$(l));
    }
    if (o) {
      let l = {};
      Zs(o) || (l = o), a.push(G$(l));
    }
    if (s) {
      let l = {};
      Zs(s) || (l = s), a.unshift(U$(l));
    }
  }
  return a;
}, K$ = "RTK_autoBatch", yb = (e) => (t) => {
  setTimeout(t, e);
}, Y$ = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : yb(10), Q$ = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, s = !1, a = !1;
  const l = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Y$ : e.type === "callback" ? e.queueNotification : yb(e.timeout), u = () => {
    a = !1, s && (s = !1, l.forEach((d) => d()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(d) {
      const f = () => o && d(), p = n.subscribe(f);
      return l.add(d), () => {
        p(), l.delete(d);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(d) {
      var f;
      try {
        return o = !((f = d == null ? void 0 : d.meta) != null && f[K$]), s = !o, s && (a || (a = !0, c(u))), n.dispatch(d);
      } finally {
        o = !0;
      }
    }
  });
}, X$ = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new db(e);
  return n && o.push(Q$(typeof n == "object" ? n : void 0)), o;
};
function Fd(e) {
  const t = H$(), {
    reducer: r = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: s = void 0,
    enhancers: a = void 0
  } = e || {};
  let l;
  if (typeof r == "function")
    l = r;
  else if (_s(r))
    l = eb(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? it(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? it(2) : "`middleware` field must be a callback");
  let c;
  if (typeof n == "function") {
    if (c = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? it(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (process.env.NODE_ENV !== "production" && c.some((y) => typeof y != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? it(4) : "each middleware provided to configureStore must be a function");
  let u = $a;
  o && (u = L$({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const d = T$(...c), f = X$(d);
  if (process.env.NODE_ENV !== "production" && a && typeof a != "function")
    throw new Error(process.env.NODE_ENV === "production" ? it(5) : "`enhancers` field must be a callback");
  let p = typeof a == "function" ? a(f) : f();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(p))
    throw new Error(process.env.NODE_ENV === "production" ? it(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && p.some((y) => typeof y != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? it(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !p.includes(d) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const m = u(...p);
  return Zg(l, s, m);
}
function gb(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(s, a) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? it(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? it(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const l = typeof s == "string" ? s : s.type;
      if (!l)
        throw new Error(process.env.NODE_ENV === "production" ? it(28) : "`builder.addCase` cannot be called with an empty action type");
      if (l in t)
        throw new Error(process.env.NODE_ENV === "production" ? it(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${l}'`);
      return t[l] = a, o;
    },
    addMatcher(s, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? it(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: s,
        reducer: a
      }), o;
    },
    addDefaultCase(s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? it(31) : "`builder.addDefaultCase` can only be called once");
      return n = s, o;
    }
  };
  return e(o), [t, r, n];
}
function J$(e) {
  return typeof e == "function";
}
function Z$(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? it(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = gb(t), s;
  if (J$(e))
    s = () => Oh(e());
  else {
    const l = Oh(e);
    s = () => l;
  }
  function a(l = s(), c) {
    let u = [r[c.type], ...n.filter(({
      matcher: d
    }) => d(c)).map(({
      reducer: d
    }) => d)];
    return u.filter((d) => !!d).length === 0 && (u = [o]), u.reduce((d, f) => {
      if (f)
        if (uo(d)) {
          const m = f(d, c);
          return m === void 0 ? d : m;
        } else {
          if (pn(d))
            return lb(d, (p) => f(p, c));
          {
            const p = f(d, c);
            if (p === void 0) {
              if (d === null)
                return d;
              throw new Error(process.env.NODE_ENV === "production" ? it(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return d;
    }, l);
  }
  return a.getInitialState = s, a;
}
var eI = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function tI(e, t) {
  return `${e}/${t}`;
}
function rI({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[eI];
  return function(o) {
    const {
      name: s,
      reducerPath: a = s
    } = o;
    if (!s)
      throw new Error(process.env.NODE_ENV === "production" ? it(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const l = (typeof o.reducers == "function" ? o.reducers(oI()) : o.reducers) || {}, c = Object.keys(l), u = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, d = {
      addCase(g, O) {
        const E = typeof g == "string" ? g : g.type;
        if (!E)
          throw new Error(process.env.NODE_ENV === "production" ? it(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in u.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? it(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return u.sliceCaseReducersByType[E] = O, d;
      },
      addMatcher(g, O) {
        return u.sliceMatchers.push({
          matcher: g,
          reducer: O
        }), d;
      },
      exposeAction(g, O) {
        return u.actionCreators[g] = O, d;
      },
      exposeCaseReducer(g, O) {
        return u.sliceCaseReducersByName[g] = O, d;
      }
    };
    c.forEach((g) => {
      const O = l[g], E = {
        reducerName: g,
        type: tI(s, g),
        createNotation: typeof o.reducers == "function"
      };
      sI(O) ? lI(E, O, d, t) : iI(E, O, d);
    });
    function f() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? it(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [g = {}, O = [], E = void 0] = typeof o.extraReducers == "function" ? gb(o.extraReducers) : [o.extraReducers], C = {
        ...g,
        ...u.sliceCaseReducersByType
      };
      return Z$(o.initialState, (x) => {
        for (let P in C)
          x.addCase(P, C[P]);
        for (let P of u.sliceMatchers)
          x.addMatcher(P.matcher, P.reducer);
        for (let P of O)
          x.addMatcher(P.matcher, P.reducer);
        E && x.addDefaultCase(E);
      });
    }
    const p = (g) => g, m = /* @__PURE__ */ new Map();
    let y;
    function b(g, O) {
      return y || (y = f()), y(g, O);
    }
    function h() {
      return y || (y = f()), y.getInitialState();
    }
    function S(g, O = !1) {
      function E(x) {
        let P = x[g];
        if (typeof P > "u") {
          if (O)
            P = h();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? it(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return P;
      }
      function C(x = p) {
        const P = wh(m, O, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return wh(P, x, {
          insert: () => {
            const v = {};
            for (const [_, I] of Object.entries(o.selectors ?? {}))
              v[_] = nI(I, x, h, O);
            return v;
          }
        });
      }
      return {
        reducerPath: g,
        getSelectors: C,
        get selectors() {
          return C(E);
        },
        selectSlice: E
      };
    }
    const w = {
      name: s,
      reducer: b,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: h,
      ...S(a),
      injectInto(g, {
        reducerPath: O,
        ...E
      } = {}) {
        const C = O ?? a;
        return g.inject({
          reducerPath: C,
          reducer: b
        }, E), {
          ...w,
          ...S(C, !0)
        };
      }
    };
    return w;
  };
}
function nI(e, t, r, n) {
  function o(s, ...a) {
    let l = t(s);
    if (typeof l > "u") {
      if (n)
        l = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? it(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(l, ...a);
  }
  return o.unwrapped = e, o;
}
var ut = /* @__PURE__ */ rI();
function oI() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function iI({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let s, a;
  if ("reducer" in n) {
    if (r && !aI(n))
      throw new Error(process.env.NODE_ENV === "production" ? it(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    s = n.reducer, a = n.prepare;
  } else
    s = n;
  o.addCase(e, s).exposeCaseReducer(t, s).exposeAction(t, a ? Sh(e, a) : Sh(e));
}
function sI(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function aI(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function lI({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? it(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: s,
    fulfilled: a,
    pending: l,
    rejected: c,
    settled: u,
    options: d
  } = r, f = o(e, s, d);
  n.exposeAction(t, f), a && n.addCase(f.fulfilled, a), l && n.addCase(f.pending, l), c && n.addCase(f.rejected, c), u && n.addMatcher(f.settled, u), n.exposeCaseReducer(t, {
    fulfilled: a || ea,
    pending: l || ea,
    rejected: c || ea,
    settled: u || ea
  });
}
function ea() {
}
function it(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const cI = {
  AUTH: "auth",
  LAYOUT: "layout",
  PREVIEW: "preview"
}, uI = {
  isLoggedIn: !1,
  showPassword: !1,
  signinMethod: "email",
  loggedInUserInfo: null
}, dI = ut({
  name: cI.AUTH,
  initialState: uI,
  reducers: {
    setShowPassword: (e) => {
      e.showPassword = !e.showPassword;
    },
    setSigninMethod: (e, t) => {
      e.signinMethod = t.payload;
    },
    setTokens: (e, t) => {
      localStorage.setItem("access_token", t.payload.access_token), localStorage.setItem("refresh_token", t.payload.refresh_token), e.isLoggedIn = !!t.payload;
    },
    checkAuth: (e) => {
      const t = localStorage.getItem("access_token");
      e.isLoggedIn = !!t;
    },
    setLoggedInUserInfo: (e, t) => {
      localStorage.setItem("role", t.payload.role), localStorage.setItem("department", t.payload.department), e.loggedInUserInfo = t.payload;
    }
  }
}), fI = dI.reducer, pI = {
  mobileOpen: !1,
  isClosing: !1,
  pageTitle: "Dashboard"
}, hI = ut({
  name: "layout",
  initialState: pI,
  reducers: {
    setMobileOpen: (e, t) => {
      e.mobileOpen = t.payload;
    },
    setIsClosing: (e, t) => {
      e.isClosing = t.payload;
    },
    setPageTitle: (e, t) => {
      e.pageTitle = t.payload;
    }
  }
}), mI = hI.reducer, yI = {
  preview: !1
}, gI = ut({
  name: "preview",
  initialState: yI,
  reducers: {
    setPreview: (e, t) => {
      e.preview = t.payload;
    }
  }
}), bI = gI.reducer, vI = {
  isOpen: !1,
  severity: "success",
  message: ""
}, EI = ut({
  name: "notification",
  initialState: vI,
  reducers: {
    showNotification: (e, t) => {
      e.isOpen = !0, e.severity = t.payload.severity, e.message = t.payload.message;
    },
    hideNotification: (e) => {
      e.isOpen = !1;
    }
  }
}), SI = EI.reducer, OI = {
  auth: fI,
  layout: mI,
  preview: bI,
  notification: SI
}, Th = {
  companyNames: [
    { value: "Prime Fresh Limited", label: "Prime Fresh Limited" },
    { value: "Florens Fresh Supply Solutions Pvt.Ltd.", label: "Florens Fresh Supply Solutions Pvt.Ltd." },
    { value: "Florens Farming Private Limited", label: "Florens Farming Private Limited" },
    { value: "Prime Fresh Retail (I) Private Limited", label: "Prime Fresh Retail (I) Private Limited" },
    { value: "VyankteshPrime Fresh Farmers Producer Company Limited", label: "VyankteshPrime Fresh Farmers Producer Company Limited" }
  ],
  source: [
    { value: "vendor", label: "Vendor" },
    { value: "farmer", label: "Farmer" }
  ],
  paymentMode: [
    { value: "UPI", label: "UPI" },
    { value: "Cash", label: "Cash" },
    { value: "Cheque", label: "Cheque" },
    { value: "RTGS", label: "RTGS" },
    { value: "NEFT", label: "NEFT" },
    { value: "Other", label: "Other" }
  ],
  deliveryChallanType: [
    { value: "Customer", label: "Customer" },
    { value: "Stock Transfer (Internal)", label: "Stock Transfer (Internal)" },
    { value: "DC-DC Stock Transfer", label: "DC-DC Stock Transfer" },
    { value: "Other", label: "Other" }
  ]
}, wI = {
  rfpa: [],
  selectedRFPA: void 0,
  previewRFPA: void 0
}, TI = ut({
  name: "rfpaData",
  initialState: wI,
  reducers: {
    setRFPAData: (e, t) => {
      e.rfpa = t.payload;
    },
    setSelectedRFPA: (e, t) => {
      e.selectedRFPA = t.payload;
    },
    setPreviewRFPA: (e, t) => {
      e.previewRFPA = t.payload;
    }
  }
}), bb = TI.reducer, CI = {
  dealSlip: [],
  selectedDealSlip: void 0
}, xI = ut({
  name: "dealSlipData",
  initialState: CI,
  reducers: {
    setDealSlipData: (e, t) => {
      e.dealSlip = t.payload;
    },
    setSelectedDealSlip: (e, t) => {
      e.selectedDealSlip = t.payload;
    }
  }
}), vb = xI.reducer, RI = {
  grn: [],
  selectedGRN: void 0,
  previewGRN: void 0,
  subTotalAmt: 0,
  totalAmt: 0,
  totAmtWords: ""
}, PI = ut({
  name: "grnData",
  initialState: RI,
  reducers: {
    setGRNData: (e, t) => {
      e.grn = t.payload;
    },
    setSelectedGRN: (e, t) => {
      e.selectedGRN = t.payload;
    },
    setPreviewGRN: (e, t) => {
      e.previewGRN = t.payload;
    },
    setSubTotalAmt: (e, t) => {
      e.subTotalAmt = t.payload;
    },
    setTotalAmt: (e, t) => {
      e.totalAmt = t.payload;
    },
    setTotAmtWords: (e, t) => {
      e.totAmtWords = t.payload;
    }
  }
}), Eb = PI.reducer, _I = {
  mcVouchers: [],
  selectedMCVoucher: void 0,
  previewMCVoucher: void 0
}, AI = ut({
  name: "mc_voucher",
  initialState: _I,
  reducers: {
    setMCVouchers: (e, t) => {
      e.mcVouchers = t.payload;
    },
    setSelectedMCVoucher: (e, t) => {
      e.selectedMCVoucher = t.payload;
    },
    setPreviewMCVoucher: (e, t) => {
      e.previewMCVoucher = t.payload;
    }
  }
}), Sb = AI.reducer, NI = {
  lpVouchers: [],
  selectedLPVoucher: void 0,
  previewLPVoucher: void 0
}, $I = ut({
  name: "lp_voucher",
  initialState: NI,
  reducers: {
    setLPVouchers: (e, t) => {
      e.lpVouchers = t.payload;
    },
    setSelectedLPVoucher: (e, t) => {
      e.selectedLPVoucher = t.payload;
    },
    setPreviewLPVoucher: (e, t) => {
      e.previewLPVoucher = t.payload;
    }
  }
}), Ob = $I.reducer, II = {
  pmpVouchers: [],
  selectedPMPVoucher: void 0,
  previewPMPVoucher: void 0
}, DI = ut({
  name: "pmp_voucher",
  initialState: II,
  reducers: {
    setPMPVouchers: (e, t) => {
      e.pmpVouchers = t.payload;
    },
    setSelectedPMPVoucher: (e, t) => {
      e.selectedPMPVoucher = t.payload;
    },
    setPreviewPMPVoucher: (e, t) => {
      e.previewPMPVoucher = t.payload;
    }
  }
}), wb = DI.reducer, kI = {
  tpVouchers: [],
  selectedTPVoucher: void 0,
  previewTPVoucher: void 0
}, MI = ut({
  name: "tp_voucher",
  initialState: kI,
  reducers: {
    setTPVouchers: (e, t) => {
      e.tpVouchers = t.payload;
    },
    setSelectedTPVoucher: (e, t) => {
      e.selectedTPVoucher = t.payload;
    },
    setPreviewTPVoucher: (e, t) => {
      e.previewTPVoucher = t.payload;
    }
  }
}), Tb = MI.reducer, FI = {
  dcs: [],
  selectedDC: void 0,
  previewDC: void 0
}, LI = ut({
  name: "delivery_challan",
  initialState: FI,
  reducers: {
    setDCs: (e, t) => {
      e.dcs = t.payload;
    },
    setSelectedDC: (e, t) => {
      e.selectedDC = t.payload;
    },
    setPreviewDC: (e, t) => {
      e.previewDC = t.payload;
    }
  }
}), Cb = LI.reducer, jI = {
  paymentReq: [],
  selectedPaymentReq: void 0,
  previewPaymentReq: void 0
}, qI = ut({
  name: "payment_request",
  initialState: jI,
  reducers: {
    setPaymentReqs: (e, t) => {
      e.paymentReq = t.payload;
    },
    setSelectedPaymentReq: (e, t) => {
      e.selectedPaymentReq = t.payload;
    },
    setPreviewPaymentReq: (e, t) => {
      e.previewPaymentReq = t.payload;
    }
  }
}), xb = qI.reducer;
Fd({
  reducer: {
    rfpaData: bb,
    dealSlipData: vb,
    grnData: Eb,
    mc_voucher: Sb,
    lp_voucher: Ob,
    tp_voucher: Tb,
    pmp_voucher: wb,
    delivery_challan: Cb,
    payment_request: xb
  }
});
const VI = /^[6-9]\d{9}$/, Al = $().matches(VI, "Please enter a valid 10-digit contact number").required("Contact number is required"), UI = Le().shape({
  address1: $().required("Address Line 1 is required"),
  address2: $(),
  location: $().required("Location is required"),
  city: $().required("City is required"),
  state: $().required("State is required"),
  pincode: $().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
Le().shape({
  companyName: $().required("Company Name is required"),
  purchaseLocation: $().required("Purchase Location is required"),
  purchaseForWhich: $().required("Purchase For Which is required"),
  selectedParty: $().required("Please select one option"),
  rfpaProducts: di().of(
    Le().shape({
      product: $().required("Product is required"),
      grade: $().required("Grade is required"),
      quantity: $t().required("Quantity is required").positive("Quantity must be positive"),
      unitPrice: $t().required("Unit Price is required").positive("Unit Price must be positive"),
      purchaseDate: cn().required("Purchase Date is required"),
      dispatchDate: cn().required("Dispatch Date is required"),
      deliveryDate: cn().required("Delivery Date is required"),
      deliveryLocation: $().required("Delivery Location is required"),
      expectedHarvestDate: cn().nullable()
      // Optional field
    })
  ).required("RFPA Products are required"),
  paymentInfo: Le().shape({
    paymentMode: $().required("Payment Mode is required"),
    creditPeriod: $t().required("Credit Period is required").positive("Credit Period must be positive"),
    paymentDate: cn().required("Payment Date is required"),
    paymentTerms: $t().required("Payment Terms is required").positive("Payment Terms must be positive")
  }).required("Payment Information is required"),
  deliveryReceivingPerson: $().required("Delivery Receiving Person is required")
});
Le().shape({
  loadingLocation: $().required("Loading location is required."),
  lotNo: $().required("Lot number is required.")
});
Le().shape({
  companyName: $().required("Company Name is required"),
  billNo: $().required("Bill number is required"),
  serialNo: $().required("Serial number is required"),
  purchaseRequestByWhom: $().required("Requesting person name required"),
  purchaseLocation: $().required("Purchase Location is required"),
  purchaseForWhich: $().required("Purchase For Which is required"),
  source: $().required("Source required"),
  selectedParty: $().required("Please select one option"),
  products: di().of(
    Le().shape({
      product: $().required("Select at least one product"),
      count: $().required("Select at least one counnt"),
      quantity: $t().required("Quantity is required").positive("Quantity can't be negative"),
      rate: $t().required("Rate is required").positive("Rate can't be negative"),
      rtv: $().required("Select is product rtv or not")
    })
  ).required("At lease one product required"),
  deliveryReceivingPerson: $().required("Delivery receiving person name is required"),
  rmn: $().required("RM name is required")
});
Le().shape({
  companyName: $().required("Company name is required"),
  debitCreditTo: $().required("Name required for debit / credit to."),
  payReceivedFrom: $().required("Name required for pay / received from"),
  location: $().required("Location is required"),
  noOfLabours: $t().required("Number of labour is required").positive("Number of labours cannot be negative"),
  ratePerLabour: $t().required("Rate is required").positive("Rate cannot be negative"),
  loadingDate: cn().required("Loading date is required"),
  workLocation: $().required("Location of work is required"),
  contactNo: Al,
  paymentMode: $().required("Payment mode is required"),
  receiverName: $().required("Receiver name is required")
});
Le().shape({
  companyName: $().required("Company name is required"),
  debitCreditTo: $().required("Name required for debit / credit to."),
  payReceivedFrom: $().required("Name required for pay / received from"),
  location: $().required("Location is required"),
  paymentMode: $().required("Payment mode is required"),
  receiverName: $().required("Receiver name is required"),
  particulars: di(
    Le({
      description: $().required("Description is required").min(5, "Minimum 5 characters required"),
      amt: $t().required("Amount is required").positive("Amount cannot be negative")
    })
  )
});
Le().shape({
  companyName: $().required("Company name is required"),
  debitCreditTo: $().required("Name required for debit / credit to."),
  payReceivedFrom: $().required("Name required for pay / received from"),
  location: $().required("Location is required"),
  sellerName: $().required("Seller name is required"),
  address: UI,
  contactNo: Al,
  paymentMode: $().required("Payment mode is required"),
  receiverName: $().required("Receiver name is required"),
  materials: di().of(
    Le().shape({
      itemName: $().required("Item name is required"),
      uom: $().required("UOM is required"),
      itemQty: $t().required("Quantity is required").positive("Quantity cannot be negative"),
      rate: $t().required("Quantity is required").positive("Quantity cannot be negative")
    })
  )
});
Le().shape({
  companyName: $().required("Company name is required"),
  debitCreditTo: $().required("Name required for debit / credit to."),
  payReceivedFrom: $().required("Name required for pay / received from"),
  location: $().required("Location is required"),
  driverName: $().required("Driver name is required"),
  contactNo: Al,
  vehicleNo: $().required("Vehicle number is required"),
  dispatchLocation: $().required("Dispatch location is required"),
  destinationLocation: $().required("Destination location is required"),
  paymentMode: $().required("Payment mode is required"),
  receiverName: $().required("Receiver name is required")
});
Le().shape({
  companyName: $().required("Company name is required"),
  partyName: $().required("Party name is required"),
  fromLocation: $().required("Location is required"),
  toLocation: $().required("Location is required"),
  driverName: $().required("Driver name is required"),
  contactNo: Al,
  vehicleNo: $().required("Vehicle number is required"),
  receiverName: $().required("Receiver name is required"),
  rmn: $().required("RM name is required"),
  items: di().of(
    Le().shape({
      itemName: $().required("Item name is required"),
      itemQty: $t().required("Quantity is required").positive("Quantity cannot be negative"),
      rate: $t().required("Quantity is required").positive("Quantity cannot be negative")
    })
  )
});
Le().shape({
  paymentDate: cn().required("Payment Date is required"),
  partyName: $().required("Party Name is required"),
  amount: $t().required("Amount is required").positive("Amount must be positive"),
  bankAccNo: $().required("Bank Account Number is required"),
  ifscCode: $().required("IFSC Code is required"),
  paymentMode: $().required("Payment Mode is required"),
  typesOfTransaction: $().required("Types of Transaction is required"),
  otherTransaction: $().required("Other Transaction is required"),
  vehicleNo: $().required("Vehicle No is required"),
  placeOfPurchase: $().required("Place of Purchase is required"),
  contactpersonRec: $().required("Contact Person Receiving is required"),
  contactpersonSen: $().required("Contact Person Sending is required"),
  costCenter: $().required("Cost Center is required"),
  kycByEmail: $().required("KYC by Email is required"),
  remark: $().required("Remark is required")
});
Xg.withTypes();
fl({
  palette: {
    primary: {
      main: "#008A00",
      light: "#befabe"
    },
    secondary: {
      main: "#2a3eb1",
      light: "#3d5afe"
    }
  }
});
const Ch = (e) => e ? `${(e == null ? void 0 : e.address1) || ""}, ${(e == null ? void 0 : e.address2) || ""}, ${(e == null ? void 0 : e.location) || ""}, ${(e == null ? void 0 : e.city) || ""}, ${(e == null ? void 0 : e.state) || ""}, ${(e == null ? void 0 : e.pincode) || ""}` : "", BI = {
  rfpaData: bb,
  dealSlipData: vb,
  grnData: Eb,
  mc_voucher: Sb,
  lp_voucher: Ob,
  tp_voucher: Tb,
  pmp_voucher: wb,
  delivery_challan: Cb,
  payment_request: xb
}, xh = {
  //Admin
  ADMIN: "/admin",
  //Dashboard
  DASHBOARD_ADMIN: "/admin/dashboard",
  //Users
  USERS: "/admin/users",
  //Employee
  EMPLOYEE: "/admin/users/Employee",
  GET_ALL_EMPLOYEES: "/admin/users/Employee/getall",
  CREATE_EMPLOYEE: "/admin/users/Employee/create",
  VIEW_EMPLOYEE: "/admin/users/Employee/view",
  EDIT_EMPLOYEE: "/admin/users/Employee/update",
  //Customer
  CUSTOMER: "/admin/users/Customer",
  GET_ALL_CUSTOMERS: "/admin/users/Customers/getall",
  VIEW_CUSTOMER: "/admin/users/Customer/view",
  EDIT_CUSTOMER: "/admin/users/Customer/update",
  //Vendor
  VENDOR: "/admin/users/Vendor",
  GET_ALL_VENDORS: "/admin/users/Vendors/getall",
  VIEW_VENDOR: "/admin/users/Vendor/view",
  EDIT_VENDOR: "/admin/users/Vendor/update",
  GET_ALL_VENDORS_CAT: "/admin/users/vendors/Vendor_Categories/getall",
  CREATE_VENDORS_CAT: "/admin/users/vendors/category/create",
  UPDATE_VENDORS_CAT: "/admin/users/vendors/category/update",
  GET_ALL_VENDORS_SUBCAT: "/admin/users/vendors/Vendor_Subcategories/getall",
  CREATE_VENDORS_SUBCAT: "/admin/users/vendors/subcategory/create",
  UPDATE_VENDORS_SUBCAT: "/admin/users/vendors/subcategory/update",
  //Farmer
  FARMER: "/admin/users/Farmer",
  GET_ALL_FARMERS: "/admin/users/Farmers/getall",
  VIEW_FARMER: "/admin/users/Farmer/view",
  EDIT_FARMER: "/admin/users/Farmer/update",
  //Products
  PRODUCTS: "/admin/Products",
  GET_ALL_PRODUCTS: "/admin/Products/Products/getall",
  GET_A_PRODUCT: "/admin/Products/Products/view",
  GET_ALL_PRODUCT_CLASS: "/admin/Products/Products_Classification/getall",
  GET_A_PRODUCT_CLASS: "/admin/Products/Products_Classification/view",
  CREATE_PRODUCT_CLASS: "/admin/Products/Products_Classification/create",
  UPDATE_PRODUCT_CLASS: "/admin/Products/Products_Classification/update",
  GET_ALL_PRODUCT_CAT: "/admin/Products/Products_Category/getall",
  GET_A_PRODUCT_CAT: "/admin/Products/Products_Category/view",
  CREATE_PRODUCT_CAT: "/admin/Products/Products_Category/create",
  UPDATE_PRODUCT_CAT: "/admin/Products/Products_Category/update",
  GET_ALL_PRODUCT_SUBCAT: "/admin/Products/Products_Subcategory/getall",
  GET_A_PRODUCT_SUBCAT: "/admin/Products/Products_Subcategory/view",
  CREATE_PRODUCT_SUBCAT: "/admin/Products/Products_Subcategory/create",
  UPDATE_PRODUCT_SUBCAT: "/admin/Products/Products_Subcategory/update",
  //UOMs
  UOM: "/admin/UOM",
  GET_ALL_UOMs: "/admin/UOM/getall",
  CREATE_UOM: "/admin/UOM/create",
  UPDATE_UOM: "/admin/UOM/edit",
  VIEW_UOM: "/admin/UOM/view",
  GET_ALL_UOMs_CONV_MATRIX: "/admin/UOM/UOM_Conversion_Matrix/getall",
  CREATE_UOMs_CONV_MATRIX: "/admin/UOM/UOM_Conversion_Matrix/create",
  UPDATE_UOMs_CONV_MATRIX: "/admin/UOM/UOM_Conversion_Matrix/edit",
  VIEW_UOMs_CONV_MATRIX: "/admin/UOM/UOM_Conversion_Matrix/view",
  //Locations
  LOCATIONS: "/admin/locations",
  LOCATIONS_REGISTERED_OFFICE: "/admin/locations/Registered_Office/getall",
  LOCATIONS_CORPORATE_OFFICE: "/admin/locations/Corporate_Office/getall",
  CREATE_REGISTERED_OFFICE: "/admin/locations/Registered_Office/create",
  CREATE_CORPORATE_OFFICE: "/admin/locations/Corporate_Office/create",
  EDIT_REGISTERED_OFFICE: "/admin/locations/Registered_Office/edit",
  EDIT_CORPORATE_OFFICE: "/admin/locations/Corporate_Office/edit",
  VIEW_REGISTERED_OFFICE: "/admin/locations/Registered_Office/view",
  VIEW_CORPORATE_OFFICE: "/admin/locations/Corporate_Office/view",
  GET_REGISTERED_OFFICE: "/admin/locations/Registered_Office/getall",
  GET_CORPORATE_OFFICE: "/admin/locations/Corporate_Office/getall",
  CREATE_OFFICE: "/admin/locations/Office/create",
  EDIT_OFFICE: "/admin/locations/Office/edit",
  VIEW_OFFICE: "/admin/locations/Office/view",
  //Branches
  BRANCHES: "/admin/locations/branches",
  LOCATIONS_BRANCHES_CC: "/admin/locations/branches/Collection_Center/getall",
  LOCATIONS_BRANCHES_DC: "/admin/locations/branches/Distribution_Center/getall",
  LOCATIONS_BRANCHES_SEASONAL_CC: "/admin/locations/branches/Seasonal_Collection_Center/getall",
  LOCATIONS_BRANCHES_WAREHOUSES_WH: "/admin/locations/branches/Warehouses/getall",
  CREATE_BRANCHES: "/admin/locations/branches/create",
  EDIT_BRANCHES: "/admin/locations/branches/edit",
  VIEW_BRANCHES: "/admin/locations/branches/view",
  //Registeration
  CREATE_CUSTOMER: "/create/customers",
  CREATE_VENDOR: "/create/vendor",
  CREATE_FARMER: "/create/farmer",
  CREATE_PRODUCT: "/create/product"
}, zI = {
  openDrawer: !1,
  openFor: "create",
  dataId: ""
}, WI = ut({
  name: "formContainer",
  initialState: zI,
  reducers: {
    setDrawerOpen: (e, t) => {
      e.openDrawer = t.payload;
    },
    setOpenFor: (e, t) => {
      e.openFor = t.payload;
    },
    setDataId: (e, t) => {
      e.dataId = t.payload;
    }
  }
}), Rb = WI.reducer, GI = {
  customers: []
}, HI = ut({
  name: "customerData",
  initialState: GI,
  reducers: {
    setCustomerData: (e, t) => {
      e.customers = t.payload;
    }
  }
}), Pb = HI.reducer, KI = {
  allVendors: [],
  allVendorsFiltered: [],
  selectedVendor: null
}, _b = ut({
  name: "vendorData",
  initialState: KI,
  reducers: {
    setVendorData: (e, t) => {
      e.allVendors = t.payload;
    },
    setFilteredFarmerData: (e, t) => {
      e.allVendorsFiltered = t.payload;
    },
    setSelectedVendor: (e, t) => {
      e.selectedVendor = t.payload;
    }
  }
}), { setVendorData: Rh, setSelectedVendor: Ph } = _b.actions, YI = (e) => e.vendorData, Ab = _b.reducer, QI = {
  employees: []
}, XI = ut({
  name: "employeeData",
  initialState: QI,
  reducers: {
    setEmployeeData: (e, t) => {
      e.employees = t.payload;
    }
  }
}), Nb = XI.reducer, JI = {
  allFarmers: [],
  allFarmersFiltered: [],
  selectedFarmer: null
}, $b = ut({
  name: "farmerData",
  initialState: JI,
  reducers: {
    setFarmerData: (e, t) => {
      e.allFarmers = t.payload;
    },
    setFilteredFarmerData: (e, t) => {
      e.allFarmersFiltered = t.payload;
    },
    setSelectedFarmer: (e, t) => {
      e.selectedFarmer = t.payload;
    }
  }
}), { setFarmerData: lF, setFilteredFarmerData: ZI, setSelectedFarmer: _h } = $b.actions, eD = (e) => e.farmerData, Ib = $b.reducer, tD = {
  allProducts: [],
  selectedProduct: void 0,
  productCat: [],
  productSubCat: []
}, Db = ut({
  name: "productData",
  initialState: tD,
  reducers: {
    setProducts: (e, t) => {
      e.allProducts = t.payload;
    },
    setSelectedProduct: (e, t) => {
      e.selectedProduct = t.payload;
    },
    setProductCat: (e, t) => {
      e.productCat = t.payload;
    },
    setProductSubCat: (e, t) => {
      e.productSubCat = t.payload;
    }
  }
}), { setProducts: rD, setProductCat: cF, setProductSubCat: uF, setSelectedProduct: Ah } = Db.actions, nD = (e) => e.productData, kb = Db.reducer, oD = {
  allUOMs: [],
  selectedUOM: void 0,
  allUOMConvMat: [],
  selectedUOMConvMat: void 0
}, Mb = ut({
  name: "uomData",
  initialState: oD,
  reducers: {
    setUOMs: (e, t) => {
      e.allUOMs = t.payload;
    },
    setSelectedUOM: (e, t) => {
      e.selectedUOM = t.payload;
    },
    setUOMConvMat: (e, t) => {
      e.allUOMConvMat = t.payload;
    },
    setSelectedUOMConvMat: (e, t) => {
      e.selectedUOMConvMat = t.payload;
    }
  }
}), { setUOMs: iD, setSelectedUOM: dF, setUOMConvMat: fF, setSelectedUOMConvMat: pF } = Mb.actions, sD = (e) => e.uomData, Fb = Mb.reducer, ta = {
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
  GET_ALL_VENDOR_FILTERED: "/vendors/filterVendor/all",
  GET_ALL_VENDOR_CAT: "/vendor-categories/",
  CREATE_VENDOR_CAT: "/vendor-categories/",
  GET_A_VENDOR_CAT: "/vendor-categories",
  UPDATE_VENDOR_CAT: "/vendor-categories",
  GET_ALL_VENDOR_SUBCAT: "/vendor-subcategories/",
  CREATE_VENDOR_SUBCAT: "/vendor-subcategories/",
  GET_A_VENDOR_SUBCAT: "/vendor-subcategories",
  UPDATE_VENDOR_SUBCAT: "/vendor-subcategories",
  //Prooducts
  GET_ALL_PRODUCTS: "/products/",
  GET_A_PRODUCTS: "/products",
  CREATE_PRODUCTS: "/products/",
  UPDATE_PRODUCTS: "/products/",
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
  //Branches
  GET_ALL_CC: "/location_branches/COLLECTION_CENTER",
  GET_A_CC: "/location_branches/COLLECTION_CENTER",
  GET_ALL_DC: "/location_branches/DISTRIBUTION_CENTER",
  GET_A_DC: "/location_branches/DISTRIBUTION_CENTER",
  GET_ALL_SEASONAL_CC: "/location_branches/SEASONAL_COLLECTION_CENTER",
  GET_A_SEASONAL_CC: "/location_branches/SEASONAL_COLLECTION_CENTER",
  GET_ALL_WAREHOUSE: "/location_branches/WAREHOUSE",
  GET_A_WAREHOUSE: "/location_branches/WAREHOUSE",
  POST_BRANCH: "/location_branches",
  UPDATE_BRANCH: "/location_branches"
};
var As = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, li = typeof window > "u" || "Deno" in globalThis;
function vr() {
}
function aD(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pu(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Lb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function qo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nh(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: o,
    predicate: s,
    queryKey: a,
    stale: l
  } = e;
  if (a) {
    if (n) {
      if (t.queryHash !== Ld(a, t.options))
        return !1;
    } else if (!ps(t.queryKey, a))
      return !1;
  }
  if (r !== "all") {
    const c = t.isActive();
    if (r === "active" && !c || r === "inactive" && c)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || s && !s(t));
}
function $h(e, t) {
  const { exact: r, status: n, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (fs(t.options.mutationKey) !== fs(s))
        return !1;
    } else if (!ps(t.options.mutationKey, s))
      return !1;
  }
  return !(n && t.state.status !== n || o && !o(t));
}
function Ld(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || fs)(e);
}
function fs(e) {
  return JSON.stringify(
    e,
    (t, r) => yu(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function ps(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !ps(e[r], t[r])) : !1;
}
function hu(e, t) {
  if (e === t)
    return e;
  const r = Ih(e) && Ih(t);
  if (r || yu(e) && yu(t)) {
    const n = r ? e : Object.keys(e), o = n.length, s = r ? t : Object.keys(t), a = s.length, l = r ? [] : {};
    let c = 0;
    for (let u = 0; u < a; u++) {
      const d = r ? u : s[u];
      (!r && n.includes(d) || r) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0, c++) : (l[d] = hu(e[d], t[d]), l[d] === e[d] && e[d] !== void 0 && c++);
    }
    return o === a && c === o ? e : l;
  }
  return t;
}
function mu(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Ih(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function yu(e) {
  if (!Dh(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!Dh(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Dh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function lD(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function gu(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return hu(e, t);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return hu(e, t);
  }
  return t;
}
function cD(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function uD(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var bu = Symbol();
function jb(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === bu && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === bu ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var zn, Tn, Vo, tm, dD = (tm = class extends As {
  constructor() {
    super();
    we(this, zn);
    we(this, Tn);
    we(this, Vo);
    he(this, Vo, (t) => {
      if (!li && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    A(this, Tn) || this.setEventListener(A(this, Vo));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = A(this, Tn)) == null || t.call(this), he(this, Tn, void 0));
  }
  setEventListener(t) {
    var r;
    he(this, Vo, t), (r = A(this, Tn)) == null || r.call(this), he(this, Tn, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    A(this, zn) !== t && (he(this, zn, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof A(this, zn) == "boolean" ? A(this, zn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, zn = new WeakMap(), Tn = new WeakMap(), Vo = new WeakMap(), tm), jd = new dD(), Uo, Cn, Bo, rm, fD = (rm = class extends As {
  constructor() {
    super();
    we(this, Uo, !0);
    we(this, Cn);
    we(this, Bo);
    he(this, Bo, (t) => {
      if (!li && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    A(this, Cn) || this.setEventListener(A(this, Bo));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = A(this, Cn)) == null || t.call(this), he(this, Cn, void 0));
  }
  setEventListener(t) {
    var r;
    he(this, Bo, t), (r = A(this, Cn)) == null || r.call(this), he(this, Cn, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    A(this, Uo) !== t && (he(this, Uo, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return A(this, Uo);
  }
}, Uo = new WeakMap(), Cn = new WeakMap(), Bo = new WeakMap(), rm), Ma = new fD();
function pD(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function qb(e) {
  return (e ?? "online") === "online" ? Ma.isOnline() : !0;
}
var Vb = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function bc(e) {
  return e instanceof Vb;
}
function Ub(e) {
  let t = !1, r = 0, n = !1, o, s, a;
  const l = new Promise((S, w) => {
    s = S, a = w;
  }), c = (S) => {
    var w;
    n || (y(new Vb(S)), (w = e.abort) == null || w.call(e));
  }, u = () => {
    t = !0;
  }, d = () => {
    t = !1;
  }, f = () => jd.isFocused() && (e.networkMode === "always" || Ma.isOnline()) && e.canRun(), p = () => qb(e.networkMode) && e.canRun(), m = (S) => {
    var w;
    n || (n = !0, (w = e.onSuccess) == null || w.call(e, S), o == null || o(), s(S));
  }, y = (S) => {
    var w;
    n || (n = !0, (w = e.onError) == null || w.call(e, S), o == null || o(), a(S));
  }, b = () => new Promise((S) => {
    var w;
    o = (g) => {
      (n || f()) && S(g);
    }, (w = e.onPause) == null || w.call(e);
  }).then(() => {
    var S;
    o = void 0, n || (S = e.onContinue) == null || S.call(e);
  }), h = () => {
    if (n)
      return;
    let S;
    const w = r === 0 ? e.initialPromise : void 0;
    try {
      S = w ?? e.fn();
    } catch (g) {
      S = Promise.reject(g);
    }
    Promise.resolve(S).then(m).catch((g) => {
      var P;
      if (n)
        return;
      const O = e.retry ?? (li ? 0 : 3), E = e.retryDelay ?? pD, C = typeof E == "function" ? E(r, g) : E, x = O === !0 || typeof O == "number" && r < O || typeof O == "function" && O(r, g);
      if (t || !x) {
        y(g);
        return;
      }
      r++, (P = e.onFail) == null || P.call(e, r, g), lD(C).then(() => f() ? void 0 : b()).then(() => {
        t ? y(g) : h();
      });
    });
  };
  return {
    promise: l,
    cancel: c,
    continue: () => (o == null || o(), l),
    cancelRetry: u,
    continueRetry: d,
    canStart: p,
    start: () => (p() ? h() : b().then(h), l)
  };
}
function hD() {
  let e = [], t = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  }, o = (l) => setTimeout(l, 0);
  const s = (l) => {
    t ? e.push(l) : o(() => {
      r(l);
    });
  }, a = () => {
    const l = e;
    e = [], l.length && o(() => {
      n(() => {
        l.forEach((c) => {
          r(c);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let c;
      t++;
      try {
        c = l();
      } finally {
        t--, t || a();
      }
      return c;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...c) => {
      s(() => {
        l(...c);
      });
    },
    schedule: s,
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
var Pt = hD(), Wn, nm, Bb = (nm = class {
  constructor() {
    we(this, Wn);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), pu(this.gcTime) && he(this, Wn, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (li ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    A(this, Wn) && (clearTimeout(A(this, Wn)), he(this, Wn, void 0));
  }
}, Wn = new WeakMap(), nm), zo, Wo, br, Nt, ms, Gn, xr, sn, om, mD = (om = class extends Bb {
  constructor(t) {
    super();
    we(this, xr);
    we(this, zo);
    we(this, Wo);
    we(this, br);
    we(this, Nt);
    we(this, ms);
    we(this, Gn);
    he(this, Gn, !1), he(this, ms, t.defaultOptions), this.setOptions(t.options), this.observers = [], he(this, br, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, he(this, zo, yD(this.options)), this.state = t.state ?? A(this, zo), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = A(this, Nt)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...A(this, ms), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && A(this, br).remove(this);
  }
  setData(t, r) {
    const n = gu(this.state.data, t, this.options);
    return Me(this, xr, sn).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    Me(this, xr, sn).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n, o;
    const r = (n = A(this, Nt)) == null ? void 0 : n.promise;
    return (o = A(this, Nt)) == null || o.cancel(t), r ? r.then(vr).catch(vr) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(A(this, zo));
  }
  isActive() {
    return this.observers.some(
      (t) => Rr(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !Lb(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = A(this, Nt)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = this.observers.find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = A(this, Nt)) == null || r.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), A(this, br).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (A(this, Nt) && (A(this, Gn) ? A(this, Nt).cancel({ revert: !0 }) : A(this, Nt).cancelRetry()), this.scheduleGc()), A(this, br).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || Me(this, xr, sn).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var c, u, d;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (A(this, Nt))
        return A(this, Nt).continueRetry(), A(this, Nt).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const f = this.observers.find((p) => p.options.queryFn);
      f && this.setOptions(f.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), o = (f) => {
      Object.defineProperty(f, "signal", {
        enumerable: !0,
        get: () => (he(this, Gn, !0), n.signal)
      });
    }, s = () => {
      const f = jb(this.options, r), p = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(p), he(this, Gn, !1), this.options.persister ? this.options.persister(
        f,
        p,
        this
      ) : f(p);
    }, a = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: s
    };
    o(a), (c = this.options.behavior) == null || c.onFetch(
      a,
      this
    ), he(this, Wo, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = a.fetchOptions) == null ? void 0 : u.meta)) && Me(this, xr, sn).call(this, { type: "fetch", meta: (d = a.fetchOptions) == null ? void 0 : d.meta });
    const l = (f) => {
      var p, m, y, b;
      bc(f) && f.silent || Me(this, xr, sn).call(this, {
        type: "error",
        error: f
      }), bc(f) || ((m = (p = A(this, br).config).onError) == null || m.call(
        p,
        f,
        this
      ), (b = (y = A(this, br).config).onSettled) == null || b.call(
        y,
        this.state.data,
        f,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return he(this, Nt, Ub({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: a.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (f) => {
        var p, m, y, b;
        if (f === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), l(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(f);
        } catch (h) {
          l(h);
          return;
        }
        (m = (p = A(this, br).config).onSuccess) == null || m.call(p, f, this), (b = (y = A(this, br).config).onSettled) == null || b.call(
          y,
          f,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: l,
      onFail: (f, p) => {
        Me(this, xr, sn).call(this, { type: "failed", failureCount: f, error: p });
      },
      onPause: () => {
        Me(this, xr, sn).call(this, { type: "pause" });
      },
      onContinue: () => {
        Me(this, xr, sn).call(this, { type: "continue" });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode,
      canRun: () => !0
    })), A(this, Nt).start();
  }
}, zo = new WeakMap(), Wo = new WeakMap(), br = new WeakMap(), Nt = new WeakMap(), ms = new WeakMap(), Gn = new WeakMap(), xr = new WeakSet(), sn = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...n,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...n,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...n,
          ...zb(n.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return {
          ...n,
          data: t.data,
          dataUpdateCount: n.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const o = t.error;
        return bc(o) && o.revert && A(this, Wo) ? { ...A(this, Wo), fetchStatus: "idle" } : {
          ...n,
          error: o,
          errorUpdateCount: n.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: n.fetchFailureCount + 1,
          fetchFailureReason: o,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...n,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...n,
          ...t.state
        };
    }
  };
  this.state = r(this.state), Pt.batch(() => {
    this.observers.forEach((n) => {
      n.onQueryUpdate();
    }), A(this, br).notify({ query: this, type: "updated", action: t });
  });
}, om);
function zb(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: qb(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function yD(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = t !== void 0, n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var Mr, im, gD = (im = class extends As {
  constructor(t = {}) {
    super();
    we(this, Mr);
    this.config = t, he(this, Mr, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const o = r.queryKey, s = r.queryHash ?? Ld(o, r);
    let a = this.get(s);
    return a || (a = new mD({
      cache: this,
      queryKey: o,
      queryHash: s,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(o)
    }), this.add(a)), a;
  }
  add(t) {
    A(this, Mr).has(t.queryHash) || (A(this, Mr).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = A(this, Mr).get(t.queryHash);
    r && (t.destroy(), r === t && A(this, Mr).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Pt.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return A(this, Mr).get(t);
  }
  getAll() {
    return [...A(this, Mr).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => Nh(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => Nh(t, n)) : r;
  }
  notify(t) {
    Pt.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    Pt.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Pt.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, Mr = new WeakMap(), im), Fr, Mt, Hn, Lr, Sn, sm, bD = (sm = class extends Bb {
  constructor(t) {
    super();
    we(this, Lr);
    we(this, Fr);
    we(this, Mt);
    we(this, Hn);
    this.mutationId = t.mutationId, he(this, Mt, t.mutationCache), he(this, Fr, []), this.state = t.state || vD(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    A(this, Fr).includes(t) || (A(this, Fr).push(t), this.clearGcTimeout(), A(this, Mt).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    he(this, Fr, A(this, Fr).filter((r) => r !== t)), this.scheduleGc(), A(this, Mt).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    A(this, Fr).length || (this.state.status === "pending" ? this.scheduleGc() : A(this, Mt).remove(this));
  }
  continue() {
    var t;
    return ((t = A(this, Hn)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var o, s, a, l, c, u, d, f, p, m, y, b, h, S, w, g, O, E, C, x;
    he(this, Hn, Ub({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (P, v) => {
        Me(this, Lr, Sn).call(this, { type: "failed", failureCount: P, error: v });
      },
      onPause: () => {
        Me(this, Lr, Sn).call(this, { type: "pause" });
      },
      onContinue: () => {
        Me(this, Lr, Sn).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => A(this, Mt).canRun(this)
    }));
    const r = this.state.status === "pending", n = !A(this, Hn).canStart();
    try {
      if (!r) {
        Me(this, Lr, Sn).call(this, { type: "pending", variables: t, isPaused: n }), await ((s = (o = A(this, Mt).config).onMutate) == null ? void 0 : s.call(
          o,
          t,
          this
        ));
        const v = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
        v !== this.state.context && Me(this, Lr, Sn).call(this, {
          type: "pending",
          context: v,
          variables: t,
          isPaused: n
        });
      }
      const P = await A(this, Hn).start();
      return await ((u = (c = A(this, Mt).config).onSuccess) == null ? void 0 : u.call(
        c,
        P,
        t,
        this.state.context,
        this
      )), await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, P, t, this.state.context)), await ((m = (p = A(this, Mt).config).onSettled) == null ? void 0 : m.call(
        p,
        P,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((b = (y = this.options).onSettled) == null ? void 0 : b.call(y, P, null, t, this.state.context)), Me(this, Lr, Sn).call(this, { type: "success", data: P }), P;
    } catch (P) {
      try {
        throw await ((S = (h = A(this, Mt).config).onError) == null ? void 0 : S.call(
          h,
          P,
          t,
          this.state.context,
          this
        )), await ((g = (w = this.options).onError) == null ? void 0 : g.call(
          w,
          P,
          t,
          this.state.context
        )), await ((E = (O = A(this, Mt).config).onSettled) == null ? void 0 : E.call(
          O,
          void 0,
          P,
          this.state.variables,
          this.state.context,
          this
        )), await ((x = (C = this.options).onSettled) == null ? void 0 : x.call(
          C,
          void 0,
          P,
          t,
          this.state.context
        )), P;
      } finally {
        Me(this, Lr, Sn).call(this, { type: "error", error: P });
      }
    } finally {
      A(this, Mt).runNext(this);
    }
  }
}, Fr = new WeakMap(), Mt = new WeakMap(), Hn = new WeakMap(), Lr = new WeakSet(), Sn = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...n,
          isPaused: !0
        };
      case "continue":
        return {
          ...n,
          isPaused: !1
        };
      case "pending":
        return {
          ...n,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: t.isPaused,
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...n,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...n,
          data: void 0,
          error: t.error,
          failureCount: n.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), Pt.batch(() => {
    A(this, Fr).forEach((n) => {
      n.onMutationUpdate(t);
    }), A(this, Mt).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, sm);
function vD() {
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
var nr, ys, am, ED = (am = class extends As {
  constructor(t = {}) {
    super();
    we(this, nr);
    we(this, ys);
    this.config = t, he(this, nr, /* @__PURE__ */ new Map()), he(this, ys, Date.now());
  }
  build(t, r, n) {
    const o = new bD({
      mutationCache: this,
      mutationId: ++js(this, ys)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(o), o;
  }
  add(t) {
    const r = ra(t), n = A(this, nr).get(r) ?? [];
    n.push(t), A(this, nr).set(r, n), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var n;
    const r = ra(t);
    if (A(this, nr).has(r)) {
      const o = (n = A(this, nr).get(r)) == null ? void 0 : n.filter((s) => s !== t);
      o && (o.length === 0 ? A(this, nr).delete(r) : A(this, nr).set(r, o));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var n;
    const r = (n = A(this, nr).get(ra(t))) == null ? void 0 : n.find((o) => o.state.status === "pending");
    return !r || r === t;
  }
  runNext(t) {
    var n;
    const r = (n = A(this, nr).get(ra(t))) == null ? void 0 : n.find((o) => o !== t && o.state.isPaused);
    return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
  }
  clear() {
    Pt.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return [...A(this, nr).values()].flat();
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => $h(r, n)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((r) => $h(t, r));
  }
  notify(t) {
    Pt.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((r) => r.state.isPaused);
    return Pt.batch(
      () => Promise.all(
        t.map((r) => r.continue().catch(vr))
      )
    );
  }
}, nr = new WeakMap(), ys = new WeakMap(), am);
function ra(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function kh(e) {
  return {
    onFetch: (t, r) => {
      var d, f, p, m, y;
      const n = t.options, o = (p = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : p.direction, s = ((m = t.state.data) == null ? void 0 : m.pages) || [], a = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
      let l = { pages: [], pageParams: [] }, c = 0;
      const u = async () => {
        let b = !1;
        const h = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? b = !0 : t.signal.addEventListener("abort", () => {
              b = !0;
            }), t.signal)
          });
        }, S = jb(t.options, t.fetchOptions), w = async (g, O, E) => {
          if (b)
            return Promise.reject();
          if (O == null && g.pages.length)
            return Promise.resolve(g);
          const C = {
            queryKey: t.queryKey,
            pageParam: O,
            direction: E ? "backward" : "forward",
            meta: t.options.meta
          };
          h(C);
          const x = await S(
            C
          ), { maxPages: P } = t.options, v = E ? uD : cD;
          return {
            pages: v(g.pages, x, P),
            pageParams: v(g.pageParams, O, P)
          };
        };
        if (o && s.length) {
          const g = o === "backward", O = g ? SD : Mh, E = {
            pages: s,
            pageParams: a
          }, C = O(n, E);
          l = await w(E, C, g);
        } else {
          const g = e ?? s.length;
          do {
            const O = c === 0 ? a[0] ?? n.initialPageParam : Mh(n, l);
            if (c > 0 && O == null)
              break;
            l = await w(l, O), c++;
          } while (c < g);
        }
        return l;
      };
      t.options.persister ? t.fetchFn = () => {
        var b, h;
        return (h = (b = t.options).persister) == null ? void 0 : h.call(
          b,
          u,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          r
        );
      } : t.fetchFn = u;
    }
  };
}
function Mh(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  ) : void 0;
}
function SD(e, { pages: t, pageParams: r }) {
  var n;
  return t.length > 0 ? (n = e.getPreviousPageParam) == null ? void 0 : n.call(e, t[0], t, r[0], r) : void 0;
}
var yt, xn, Rn, Go, Ho, Pn, Ko, Yo, lm, OD = (lm = class {
  constructor(e = {}) {
    we(this, yt);
    we(this, xn);
    we(this, Rn);
    we(this, Go);
    we(this, Ho);
    we(this, Pn);
    we(this, Ko);
    we(this, Yo);
    he(this, yt, e.queryCache || new gD()), he(this, xn, e.mutationCache || new ED()), he(this, Rn, e.defaultOptions || {}), he(this, Go, /* @__PURE__ */ new Map()), he(this, Ho, /* @__PURE__ */ new Map()), he(this, Pn, 0);
  }
  mount() {
    js(this, Pn)._++, A(this, Pn) === 1 && (he(this, Ko, jd.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), A(this, yt).onFocus());
    })), he(this, Yo, Ma.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), A(this, yt).onOnline());
    })));
  }
  unmount() {
    var e, t;
    js(this, Pn)._--, A(this, Pn) === 0 && ((e = A(this, Ko)) == null || e.call(this), he(this, Ko, void 0), (t = A(this, Yo)) == null || t.call(this), he(this, Yo, void 0));
  }
  isFetching(e) {
    return A(this, yt).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return A(this, xn).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = A(this, yt).get(t.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0)
      return this.fetchQuery(e);
    {
      const r = this.defaultQueryOptions(e), n = A(this, yt).build(this, r);
      return e.revalidateIfStale && n.isStaleByTime(qo(r.staleTime, n)) && this.prefetchQuery(r), Promise.resolve(t);
    }
  }
  getQueriesData(e) {
    return A(this, yt).findAll(e).map(({ queryKey: t, state: r }) => {
      const n = r.data;
      return [t, n];
    });
  }
  setQueryData(e, t, r) {
    const n = this.defaultQueryOptions({ queryKey: e }), o = A(this, yt).get(
      n.queryHash
    ), s = o == null ? void 0 : o.state.data, a = aD(t, s);
    if (a !== void 0)
      return A(this, yt).build(this, n).setData(a, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return Pt.batch(
      () => A(this, yt).findAll(e).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, t, r)
      ])
    );
  }
  getQueryState(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = A(this, yt).get(t.queryHash)) == null ? void 0 : r.state;
  }
  removeQueries(e) {
    const t = A(this, yt);
    Pt.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = A(this, yt), n = {
      type: "active",
      ...e
    };
    return Pt.batch(() => (r.findAll(e).forEach((o) => {
      o.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = Pt.batch(
      () => A(this, yt).findAll(e).map((o) => o.cancel(r))
    );
    return Promise.all(n).then(vr).catch(vr);
  }
  invalidateQueries(e = {}, t = {}) {
    return Pt.batch(() => {
      if (A(this, yt).findAll(e).forEach((n) => {
        n.invalidate();
      }), e.refetchType === "none")
        return Promise.resolve();
      const r = {
        ...e,
        type: e.refetchType ?? e.type ?? "active"
      };
      return this.refetchQueries(r, t);
    });
  }
  refetchQueries(e = {}, t) {
    const r = {
      ...t,
      cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
    }, n = Pt.batch(
      () => A(this, yt).findAll(e).filter((o) => !o.isDisabled()).map((o) => {
        let s = o.fetch(void 0, r);
        return r.throwOnError || (s = s.catch(vr)), o.state.fetchStatus === "paused" ? Promise.resolve() : s;
      })
    );
    return Promise.all(n).then(vr);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const r = A(this, yt).build(this, t);
    return r.isStaleByTime(
      qo(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(vr).catch(vr);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = kh(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(vr).catch(vr);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = kh(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Ma.isOnline() ? A(this, xn).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return A(this, yt);
  }
  getMutationCache() {
    return A(this, xn);
  }
  getDefaultOptions() {
    return A(this, Rn);
  }
  setDefaultOptions(e) {
    he(this, Rn, e);
  }
  setQueryDefaults(e, t) {
    A(this, Go).set(fs(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...A(this, Go).values()];
    let r = {};
    return t.forEach((n) => {
      ps(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    A(this, Ho).set(fs(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...A(this, Ho).values()];
    let r = {};
    return t.forEach((n) => {
      ps(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...A(this, Rn).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = Ld(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === bu && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...A(this, Rn).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    A(this, yt).clear(), A(this, xn).clear();
  }
}, yt = new WeakMap(), xn = new WeakMap(), Rn = new WeakMap(), Go = new WeakMap(), Ho = new WeakMap(), Pn = new WeakMap(), Ko = new WeakMap(), Yo = new WeakMap(), lm), Bt, Fe, gs, Ft, Kn, Qo, jr, bs, Xo, Jo, Yn, Qn, _n, Zo, Xe, ji, vu, Eu, Su, Ou, wu, Tu, Cu, Wb, cm, wD = (cm = class extends As {
  constructor(t, r) {
    super();
    we(this, Xe);
    we(this, Bt);
    we(this, Fe);
    we(this, gs);
    we(this, Ft);
    we(this, Kn);
    we(this, Qo);
    we(this, jr);
    we(this, bs);
    we(this, Xo);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    we(this, Jo);
    we(this, Yn);
    we(this, Qn);
    we(this, _n);
    we(this, Zo, /* @__PURE__ */ new Set());
    this.options = r, he(this, Bt, t), he(this, jr, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (A(this, Fe).addObserver(this), Fh(A(this, Fe), this.options) ? Me(this, Xe, ji).call(this) : this.updateResult(), Me(this, Xe, Ou).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return xu(
      A(this, Fe),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return xu(
      A(this, Fe),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Me(this, Xe, wu).call(this), Me(this, Xe, Tu).call(this), A(this, Fe).removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options, o = A(this, Fe);
    if (this.options = A(this, Bt).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Rr(this.options.enabled, A(this, Fe)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    Me(this, Xe, Cu).call(this), A(this, Fe).setOptions(this.options), n._defaulted && !mu(this.options, n) && A(this, Bt).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: A(this, Fe),
      observer: this
    });
    const s = this.hasListeners();
    s && Lh(
      A(this, Fe),
      o,
      this.options,
      n
    ) && Me(this, Xe, ji).call(this), this.updateResult(r), s && (A(this, Fe) !== o || Rr(this.options.enabled, A(this, Fe)) !== Rr(n.enabled, A(this, Fe)) || qo(this.options.staleTime, A(this, Fe)) !== qo(n.staleTime, A(this, Fe))) && Me(this, Xe, vu).call(this);
    const a = Me(this, Xe, Eu).call(this);
    s && (A(this, Fe) !== o || Rr(this.options.enabled, A(this, Fe)) !== Rr(n.enabled, A(this, Fe)) || a !== A(this, _n)) && Me(this, Xe, Su).call(this, a);
  }
  getOptimisticResult(t) {
    const r = A(this, Bt).getQueryCache().build(A(this, Bt), t), n = this.createResult(r, t);
    return CD(this, n) && (he(this, Ft, n), he(this, Qo, this.options), he(this, Kn, A(this, Fe).state)), n;
  }
  getCurrentResult() {
    return A(this, Ft);
  }
  trackResult(t, r) {
    const n = {};
    return Object.keys(t).forEach((o) => {
      Object.defineProperty(n, o, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(o), r == null || r(o), t[o])
      });
    }), n;
  }
  trackProp(t) {
    A(this, Zo).add(t);
  }
  getCurrentQuery() {
    return A(this, Fe);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = A(this, Bt).defaultQueryOptions(t), n = A(this, Bt).getQueryCache().build(A(this, Bt), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return Me(this, Xe, ji).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), A(this, Ft)));
  }
  createResult(t, r) {
    var x;
    const n = A(this, Fe), o = this.options, s = A(this, Ft), a = A(this, Kn), l = A(this, Qo), u = t !== n ? t.state : A(this, gs), { state: d } = t;
    let f = { ...d }, p = !1, m;
    if (r._optimisticResults) {
      const P = this.hasListeners(), v = !P && Fh(t, r), _ = P && Lh(t, n, r, o);
      (v || _) && (f = {
        ...f,
        ...zb(d.data, t.options)
      }), r._optimisticResults === "isRestoring" && (f.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: b, status: h } = f;
    if (r.select && f.data !== void 0)
      if (s && f.data === (a == null ? void 0 : a.data) && r.select === A(this, bs))
        m = A(this, Xo);
      else
        try {
          he(this, bs, r.select), m = r.select(f.data), m = gu(s == null ? void 0 : s.data, m, r), he(this, Xo, m), he(this, jr, null);
        } catch (P) {
          he(this, jr, P);
        }
    else
      m = f.data;
    if (r.placeholderData !== void 0 && m === void 0 && h === "pending") {
      let P;
      if (s != null && s.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        P = s.data;
      else if (P = typeof r.placeholderData == "function" ? r.placeholderData(
        (x = A(this, Jo)) == null ? void 0 : x.state.data,
        A(this, Jo)
      ) : r.placeholderData, r.select && P !== void 0)
        try {
          P = r.select(P), he(this, jr, null);
        } catch (v) {
          he(this, jr, v);
        }
      P !== void 0 && (h = "success", m = gu(
        s == null ? void 0 : s.data,
        P,
        r
      ), p = !0);
    }
    A(this, jr) && (y = A(this, jr), m = A(this, Xo), b = Date.now(), h = "error");
    const S = f.fetchStatus === "fetching", w = h === "pending", g = h === "error", O = w && S, E = m !== void 0;
    return {
      status: h,
      fetchStatus: f.fetchStatus,
      isPending: w,
      isSuccess: h === "success",
      isError: g,
      isInitialLoading: O,
      isLoading: O,
      data: m,
      dataUpdatedAt: f.dataUpdatedAt,
      error: y,
      errorUpdatedAt: b,
      failureCount: f.fetchFailureCount,
      failureReason: f.fetchFailureReason,
      errorUpdateCount: f.errorUpdateCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount: f.dataUpdateCount > u.dataUpdateCount || f.errorUpdateCount > u.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !w,
      isLoadingError: g && !E,
      isPaused: f.fetchStatus === "paused",
      isPlaceholderData: p,
      isRefetchError: g && E,
      isStale: qd(t, r),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const r = A(this, Ft), n = this.createResult(A(this, Fe), this.options);
    if (he(this, Kn, A(this, Fe).state), he(this, Qo, this.options), A(this, Kn).data !== void 0 && he(this, Jo, A(this, Fe)), mu(n, r))
      return;
    he(this, Ft, n);
    const o = {}, s = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: a } = this.options, l = typeof a == "function" ? a() : a;
      if (l === "all" || !l && !A(this, Zo).size)
        return !0;
      const c = new Set(
        l ?? A(this, Zo)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(A(this, Ft)).some((u) => {
        const d = u;
        return A(this, Ft)[d] !== r[d] && c.has(d);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && s() && (o.listeners = !0), Me(this, Xe, Wb).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Me(this, Xe, Ou).call(this);
  }
}, Bt = new WeakMap(), Fe = new WeakMap(), gs = new WeakMap(), Ft = new WeakMap(), Kn = new WeakMap(), Qo = new WeakMap(), jr = new WeakMap(), bs = new WeakMap(), Xo = new WeakMap(), Jo = new WeakMap(), Yn = new WeakMap(), Qn = new WeakMap(), _n = new WeakMap(), Zo = new WeakMap(), Xe = new WeakSet(), ji = function(t) {
  Me(this, Xe, Cu).call(this);
  let r = A(this, Fe).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(vr)), r;
}, vu = function() {
  Me(this, Xe, wu).call(this);
  const t = qo(
    this.options.staleTime,
    A(this, Fe)
  );
  if (li || A(this, Ft).isStale || !pu(t))
    return;
  const n = Lb(A(this, Ft).dataUpdatedAt, t) + 1;
  he(this, Yn, setTimeout(() => {
    A(this, Ft).isStale || this.updateResult();
  }, n));
}, Eu = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(A(this, Fe)) : this.options.refetchInterval) ?? !1;
}, Su = function(t) {
  Me(this, Xe, Tu).call(this), he(this, _n, t), !(li || Rr(this.options.enabled, A(this, Fe)) === !1 || !pu(A(this, _n)) || A(this, _n) === 0) && he(this, Qn, setInterval(() => {
    (this.options.refetchIntervalInBackground || jd.isFocused()) && Me(this, Xe, ji).call(this);
  }, A(this, _n)));
}, Ou = function() {
  Me(this, Xe, vu).call(this), Me(this, Xe, Su).call(this, Me(this, Xe, Eu).call(this));
}, wu = function() {
  A(this, Yn) && (clearTimeout(A(this, Yn)), he(this, Yn, void 0));
}, Tu = function() {
  A(this, Qn) && (clearInterval(A(this, Qn)), he(this, Qn, void 0));
}, Cu = function() {
  const t = A(this, Bt).getQueryCache().build(A(this, Bt), this.options);
  if (t === A(this, Fe))
    return;
  const r = A(this, Fe);
  he(this, Fe, t), he(this, gs, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Wb = function(t) {
  Pt.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(A(this, Ft));
    }), A(this, Bt).getQueryCache().notify({
      query: A(this, Fe),
      type: "observerResultsUpdated"
    });
  });
}, cm);
function TD(e, t) {
  return Rr(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Fh(e, t) {
  return TD(e, t) || e.state.data !== void 0 && xu(e, t, t.refetchOnMount);
}
function xu(e, t, r) {
  if (Rr(t.enabled, e) !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && qd(e, t);
  }
  return !1;
}
function Lh(e, t, r, n) {
  return (e !== t || Rr(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && qd(e, r);
}
function qd(e, t) {
  return Rr(t.enabled, e) !== !1 && e.isStaleByTime(qo(t.staleTime, e));
}
function CD(e, t) {
  return !mu(e.getCurrentResult(), t);
}
var xD = T.createContext(
  void 0
), RD = (e) => {
  const t = T.useContext(xD);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Gb = T.createContext(!1), PD = () => T.useContext(Gb);
Gb.Provider;
function _D() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var AD = T.createContext(_D()), ND = () => T.useContext(AD);
function $D(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var ID = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, DD = (e) => {
  T.useEffect(() => {
    e.clearReset();
  }, [e]);
}, kD = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n
}) => e.isError && !t.isReset() && !e.isFetching && n && $D(r, [e.error, n]), MD = (e) => {
  e.suspense && (typeof e.staleTime != "number" && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, FD = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, LD = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function jD(e, t, r) {
  var u, d, f, p;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = RD(), o = PD(), s = ND(), a = n.defaultQueryOptions(e);
  (d = (u = n.getDefaultOptions().queries) == null ? void 0 : u._experimental_beforeQuery) == null || d.call(
    u,
    a
  ), a._optimisticResults = o ? "isRestoring" : "optimistic", MD(a), ID(a, s), DD(s);
  const [l] = T.useState(
    () => new t(
      n,
      a
    )
  ), c = l.getOptimisticResult(a);
  if (T.useSyncExternalStore(
    T.useCallback(
      (m) => {
        const y = o ? () => {
        } : l.subscribe(Pt.batchCalls(m));
        return l.updateResult(), y;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), T.useEffect(() => {
    l.setOptions(a, { listeners: !1 });
  }, [a, l]), FD(a, c))
    throw LD(a, l, s);
  if (kD({
    result: c,
    errorResetBoundary: s,
    throwOnError: a.throwOnError,
    query: n.getQueryCache().get(a.queryHash)
  }))
    throw c.error;
  return (p = (f = n.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || p.call(
    f,
    a,
    c
  ), a.notifyOnChangeProps ? c : l.trackResult(c);
}
function qD(e, t) {
  return jD(e, wD);
}
function Hb(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: VD } = Object.prototype, { getPrototypeOf: Vd } = Object, Nl = /* @__PURE__ */ ((e) => (t) => {
  const r = VD.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ar = (e) => (e = e.toLowerCase(), (t) => Nl(t) === e), $l = (e) => (t) => typeof t === e, { isArray: yi } = Array, hs = $l("undefined");
function UD(e) {
  return e !== null && !hs(e) && e.constructor !== null && !hs(e.constructor) && cr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Kb = Ar("ArrayBuffer");
function BD(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Kb(e.buffer), t;
}
const zD = $l("string"), cr = $l("function"), Yb = $l("number"), Il = (e) => e !== null && typeof e == "object", WD = (e) => e === !0 || e === !1, ha = (e) => {
  if (Nl(e) !== "object")
    return !1;
  const t = Vd(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, GD = Ar("Date"), HD = Ar("File"), KD = Ar("Blob"), YD = Ar("FileList"), QD = (e) => Il(e) && cr(e.pipe), XD = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || cr(e.append) && ((t = Nl(e)) === "formdata" || // detect form-data instance
  t === "object" && cr(e.toString) && e.toString() === "[object FormData]"));
}, JD = Ar("URLSearchParams"), [ZD, ek, tk, rk] = ["ReadableStream", "Request", "Response", "Headers"].map(Ar), nk = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ns(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), yi(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let l;
    for (n = 0; n < a; n++)
      l = s[n], t.call(null, e[l], l, e);
  }
}
function Qb(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const Bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xb = (e) => !hs(e) && e !== Bn;
function Ru() {
  const { caseless: e } = Xb(this) && this || {}, t = {}, r = (n, o) => {
    const s = e && Qb(t, o) || o;
    ha(t[s]) && ha(n) ? t[s] = Ru(t[s], n) : ha(n) ? t[s] = Ru({}, n) : yi(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Ns(arguments[n], r);
  return t;
}
const ok = (e, t, r, { allOwnKeys: n } = {}) => (Ns(t, (o, s) => {
  r && cr(o) ? e[s] = Hb(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), ik = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), sk = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, ak = (e, t, r, n) => {
  let o, s, a;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!n || n(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = r !== !1 && Vd(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, lk = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ck = (e) => {
  if (!e) return null;
  if (yi(e)) return e;
  let t = e.length;
  if (!Yb(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, uk = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Vd(Uint8Array)), dk = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, fk = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, pk = Ar("HTMLFormElement"), hk = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), jh = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), mk = Ar("RegExp"), Jb = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ns(r, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (n[s] = a || o);
  }), Object.defineProperties(e, n);
}, yk = (e) => {
  Jb(e, (t, r) => {
    if (cr(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (cr(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, gk = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return yi(e) ? n(e) : n(String(e).split(t)), r;
}, bk = () => {
}, vk = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, vc = "abcdefghijklmnopqrstuvwxyz", qh = "0123456789", Zb = {
  DIGIT: qh,
  ALPHA: vc,
  ALPHA_DIGIT: vc + vc.toUpperCase() + qh
}, Ek = (e = 16, t = Zb.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Sk(e) {
  return !!(e && cr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ok = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Il(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = yi(n) ? [] : {};
        return Ns(n, (a, l) => {
          const c = r(a, o + 1);
          !hs(c) && (s[l] = c);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, wk = Ar("AsyncFunction"), Tk = (e) => e && (Il(e) || cr(e)) && cr(e.then) && cr(e.catch), ev = ((e, t) => e ? setImmediate : t ? ((r, n) => (Bn.addEventListener("message", ({ source: o, data: s }) => {
  o === Bn && s === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), Bn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  cr(Bn.postMessage)
), Ck = typeof queueMicrotask < "u" ? queueMicrotask.bind(Bn) : typeof process < "u" && process.nextTick || ev, M = {
  isArray: yi,
  isArrayBuffer: Kb,
  isBuffer: UD,
  isFormData: XD,
  isArrayBufferView: BD,
  isString: zD,
  isNumber: Yb,
  isBoolean: WD,
  isObject: Il,
  isPlainObject: ha,
  isReadableStream: ZD,
  isRequest: ek,
  isResponse: tk,
  isHeaders: rk,
  isUndefined: hs,
  isDate: GD,
  isFile: HD,
  isBlob: KD,
  isRegExp: mk,
  isFunction: cr,
  isStream: QD,
  isURLSearchParams: JD,
  isTypedArray: uk,
  isFileList: YD,
  forEach: Ns,
  merge: Ru,
  extend: ok,
  trim: nk,
  stripBOM: ik,
  inherits: sk,
  toFlatObject: ak,
  kindOf: Nl,
  kindOfTest: Ar,
  endsWith: lk,
  toArray: ck,
  forEachEntry: dk,
  matchAll: fk,
  isHTMLForm: pk,
  hasOwnProperty: jh,
  hasOwnProp: jh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Jb,
  freezeMethods: yk,
  toObjectSet: gk,
  toCamelCase: hk,
  noop: bk,
  toFiniteNumber: vk,
  findKey: Qb,
  global: Bn,
  isContextDefined: Xb,
  ALPHABET: Zb,
  generateString: Ek,
  isSpecCompliantForm: Sk,
  toJSONObject: Ok,
  isAsyncFn: wk,
  isThenable: Tk,
  setImmediate: ev,
  asap: Ck
};
function Pe(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
M.inherits(Pe, Error, {
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
      config: M.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const tv = Pe.prototype, rv = {};
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
].forEach((e) => {
  rv[e] = { value: e };
});
Object.defineProperties(Pe, rv);
Object.defineProperty(tv, "isAxiosError", { value: !0 });
Pe.from = (e, t, r, n, o, s) => {
  const a = Object.create(tv);
  return M.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Pe.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, s && Object.assign(a, s), a;
};
const xk = null;
function Pu(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function nv(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Vh(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = nv(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Rk(e) {
  return M.isArray(e) && !e.some(Pu);
}
const Pk = M.toFlatObject(M, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Dl(e, t, r) {
  if (!M.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = M.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, h) {
    return !M.isUndefined(h[b]);
  });
  const n = r.metaTokens, o = r.visitor || d, s = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && M.isSpecCompliantForm(t);
  if (!M.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (M.isDate(y))
      return y.toISOString();
    if (!c && M.isBlob(y))
      throw new Pe("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(y) || M.isTypedArray(y) ? c && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function d(y, b, h) {
    let S = y;
    if (y && !h && typeof y == "object") {
      if (M.endsWith(b, "{}"))
        b = n ? b : b.slice(0, -2), y = JSON.stringify(y);
      else if (M.isArray(y) && Rk(y) || (M.isFileList(y) || M.endsWith(b, "[]")) && (S = M.toArray(y)))
        return b = nv(b), S.forEach(function(g, O) {
          !(M.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Vh([b], O, s) : a === null ? b : b + "[]",
            u(g)
          );
        }), !1;
    }
    return Pu(y) ? !0 : (t.append(Vh(h, b, s), u(y)), !1);
  }
  const f = [], p = Object.assign(Pk, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Pu
  });
  function m(y, b) {
    if (!M.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      f.push(y), M.forEach(y, function(S, w) {
        (!(M.isUndefined(S) || S === null) && o.call(
          t,
          S,
          M.isString(w) ? w.trim() : w,
          b,
          p
        )) === !0 && m(S, b ? b.concat(w) : [w]);
      }), f.pop();
    }
  }
  if (!M.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Uh(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ud(e, t) {
  this._pairs = [], e && Dl(e, this, t);
}
const ov = Ud.prototype;
ov.append = function(t, r) {
  this._pairs.push([t, r]);
};
ov.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Uh);
  } : Uh;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function _k(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function iv(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || _k, o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = M.isURLSearchParams(t) ? t.toString() : new Ud(t, r).toString(n), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Bh {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    M.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const sv = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ak = typeof URLSearchParams < "u" ? URLSearchParams : Ud, Nk = typeof FormData < "u" ? FormData : null, $k = typeof Blob < "u" ? Blob : null, Ik = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ak,
    FormData: Nk,
    Blob: $k
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Bd = typeof window < "u" && typeof document < "u", _u = typeof navigator == "object" && navigator || void 0, Dk = Bd && (!_u || ["ReactNative", "NativeScript", "NS"].indexOf(_u.product) < 0), kk = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Mk = Bd && window.location.href || "http://localhost", Fk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Bd,
  hasStandardBrowserEnv: Dk,
  hasStandardBrowserWebWorkerEnv: kk,
  navigator: _u,
  origin: Mk
}, Symbol.toStringTag, { value: "Module" })), Xt = {
  ...Fk,
  ...Ik
};
function Lk(e, t) {
  return Dl(e, new Xt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, s) {
      return Xt.isNode && M.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function jk(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function qk(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function av(e) {
  function t(r, n, o, s) {
    let a = r[s++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a), c = s >= r.length;
    return a = !a && M.isArray(o) ? o.length : a, c ? (M.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !l) : ((!o[a] || !M.isObject(o[a])) && (o[a] = []), t(r, n, o[a], s) && M.isArray(o[a]) && (o[a] = qk(o[a])), !l);
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const r = {};
    return M.forEachEntry(e, (n, o) => {
      t(jk(n), o, r, 0);
    }), r;
  }
  return null;
}
function Vk(e, t, r) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(e);
}
const $s = {
  transitional: sv,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = M.isObject(t);
    if (s && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t))
      return o ? JSON.stringify(av(t)) : t;
    if (M.isArrayBuffer(t) || M.isBuffer(t) || M.isStream(t) || M.isFile(t) || M.isBlob(t) || M.isReadableStream(t))
      return t;
    if (M.isArrayBufferView(t))
      return t.buffer;
    if (M.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Lk(t, this.formSerializer).toString();
      if ((l = M.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Dl(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), Vk(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || $s.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (M.isResponse(t) || M.isReadableStream(t))
      return t;
    if (t && M.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? Pe.from(l, Pe.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
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
    FormData: Xt.classes.FormData,
    Blob: Xt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
M.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  $s.headers[e] = {};
});
const Uk = M.toObjectSet([
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
]), Bk = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && Uk[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, zh = Symbol("internals");
function $i(e) {
  return e && String(e).trim().toLowerCase();
}
function ma(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(ma) : String(e);
}
function zk(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Wk = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ec(e, t, r, n, o) {
  if (M.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!M.isString(t)) {
    if (M.isString(n))
      return t.indexOf(n) !== -1;
    if (M.isRegExp(n))
      return n.test(t);
  }
}
function Gk(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Hk(e, t) {
  const r = M.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, a) {
        return this[n].call(this, t, o, s, a);
      },
      configurable: !0
    });
  });
}
class Jt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(l, c, u) {
      const d = $i(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = M.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = ma(l));
    }
    const a = (l, c) => M.forEach(l, (u, d) => s(u, d, c));
    if (M.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (M.isString(t) && (t = t.trim()) && !Wk(t))
      a(Bk(t), r);
    else if (M.isHeaders(t))
      for (const [l, c] of t.entries())
        s(c, l, n);
    else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = $i(t), t) {
      const n = M.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return zk(o);
        if (M.isFunction(r))
          return r.call(this, o, n);
        if (M.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = $i(t), t) {
      const n = M.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ec(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(a) {
      if (a = $i(a), a) {
        const l = M.findKey(n, a);
        l && (!r || Ec(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return M.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || Ec(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return M.forEach(this, (o, s) => {
      const a = M.findKey(n, s);
      if (a) {
        r[a] = ma(o), delete r[s];
        return;
      }
      const l = t ? Gk(s) : String(s).trim();
      l !== s && delete r[s], r[l] = ma(o), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return M.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && M.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[zh] = this[zh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const l = $i(a);
      n[l] || (Hk(o, a), n[l] = !0);
    }
    return M.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Jt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.reduceDescriptors(Jt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
M.freezeMethods(Jt);
function Sc(e, t) {
  const r = this || $s, n = t || r, o = Jt.from(n.headers);
  let s = n.data;
  return M.forEach(e, function(l) {
    s = l.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function lv(e) {
  return !!(e && e.__CANCEL__);
}
function gi(e, t, r) {
  Pe.call(this, e ?? "canceled", Pe.ERR_CANCELED, t, r), this.name = "CanceledError";
}
M.inherits(gi, Pe, {
  __CANCEL__: !0
});
function cv(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Pe(
    "Request failed with status code " + r.status,
    [Pe.ERR_BAD_REQUEST, Pe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Kk(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Yk(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = n[s];
    a || (a = u), r[o] = c, n[o] = u;
    let f = s, p = 0;
    for (; f !== o; )
      p += r[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - a < t)
      return;
    const m = d && u - d;
    return m ? Math.round(p * 1e3 / m) : void 0;
  };
}
function Qk(e, t) {
  let r = 0, n = 1e3 / t, o, s;
  const a = (u, d = Date.now()) => {
    r = d, o = null, s && (clearTimeout(s), s = null), e.apply(null, u);
  };
  return [(...u) => {
    const d = Date.now(), f = d - r;
    f >= n ? a(u, d) : (o = u, s || (s = setTimeout(() => {
      s = null, a(o);
    }, n - f)));
  }, () => o && a(o)];
}
const Fa = (e, t, r = 3) => {
  let n = 0;
  const o = Yk(50, 250);
  return Qk((s) => {
    const a = s.loaded, l = s.lengthComputable ? s.total : void 0, c = a - n, u = o(c), d = a <= l;
    n = a;
    const f = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && l && d ? (l - a) / u : void 0,
      event: s,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, r);
}, Wh = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Gh = (e) => (...t) => M.asap(() => e(...t)), Xk = Xt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = Xt.navigator && /(msie|trident)/i.test(Xt.navigator.userAgent), r = document.createElement("a");
    let n;
    function o(s) {
      let a = s;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
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
    return n = o(window.location.href), function(a) {
      const l = M.isString(a) ? o(a) : a;
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
), Jk = Xt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, s) {
      const a = [e + "=" + encodeURIComponent(t)];
      M.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), M.isString(n) && a.push("path=" + n), M.isString(o) && a.push("domain=" + o), s === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
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
function Zk(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function eM(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function uv(e, t) {
  return e && !Zk(t) ? eM(e, t) : t;
}
const Hh = (e) => e instanceof Jt ? { ...e } : e;
function po(e, t) {
  t = t || {};
  const r = {};
  function n(u, d, f) {
    return M.isPlainObject(u) && M.isPlainObject(d) ? M.merge.call({ caseless: f }, u, d) : M.isPlainObject(d) ? M.merge({}, d) : M.isArray(d) ? d.slice() : d;
  }
  function o(u, d, f) {
    if (M.isUndefined(d)) {
      if (!M.isUndefined(u))
        return n(void 0, u, f);
    } else return n(u, d, f);
  }
  function s(u, d) {
    if (!M.isUndefined(d))
      return n(void 0, d);
  }
  function a(u, d) {
    if (M.isUndefined(d)) {
      if (!M.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, d);
  }
  function l(u, d, f) {
    if (f in t)
      return n(u, d);
    if (f in e)
      return n(void 0, u);
  }
  const c = {
    url: s,
    method: s,
    data: s,
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
    validateStatus: l,
    headers: (u, d) => o(Hh(u), Hh(d), !0)
  };
  return M.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = c[d] || o, p = f(e[d], t[d], d);
    M.isUndefined(p) && f !== l || (r[d] = p);
  }), r;
}
const dv = (e) => {
  const t = po({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: l } = t;
  t.headers = a = Jt.from(a), t.url = iv(uv(t.baseURL, t.url), e.params, e.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let c;
  if (M.isFormData(r)) {
    if (Xt.hasStandardBrowserEnv || Xt.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((c = a.getContentType()) !== !1) {
      const [u, ...d] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      a.setContentType([u || "multipart/form-data", ...d].join("; "));
    }
  }
  if (Xt.hasStandardBrowserEnv && (n && M.isFunction(n) && (n = n(t)), n || n !== !1 && Xk(t.url))) {
    const u = o && s && Jk.read(s);
    u && a.set(o, u);
  }
  return t;
}, tM = typeof XMLHttpRequest < "u", rM = tM && function(e) {
  return new Promise(function(r, n) {
    const o = dv(e);
    let s = o.data;
    const a = Jt.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: u } = o, d, f, p, m, y;
    function b() {
      m && m(), y && y(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function S() {
      if (!h)
        return;
      const g = Jt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), E = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: g,
        config: e,
        request: h
      };
      cv(function(x) {
        r(x), b();
      }, function(x) {
        n(x), b();
      }, E), h = null;
    }
    "onloadend" in h ? h.onloadend = S : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, h.onabort = function() {
      h && (n(new Pe("Request aborted", Pe.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      n(new Pe("Network Error", Pe.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let O = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const E = o.transitional || sv;
      o.timeoutErrorMessage && (O = o.timeoutErrorMessage), n(new Pe(
        O,
        E.clarifyTimeoutError ? Pe.ETIMEDOUT : Pe.ECONNABORTED,
        e,
        h
      )), h = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in h && M.forEach(a.toJSON(), function(O, E) {
      h.setRequestHeader(E, O);
    }), M.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), l && l !== "json" && (h.responseType = o.responseType), u && ([p, y] = Fa(u, !0), h.addEventListener("progress", p)), c && h.upload && ([f, m] = Fa(c), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", m)), (o.cancelToken || o.signal) && (d = (g) => {
      h && (n(!g || g.type ? new gi(null, e, h) : g), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
    const w = Kk(o.url);
    if (w && Xt.protocols.indexOf(w) === -1) {
      n(new Pe("Unsupported protocol " + w + ":", Pe.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(s || null);
  });
}, nM = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(u) {
      if (!o) {
        o = !0, l();
        const d = u instanceof Error ? u : this.reason;
        n.abort(d instanceof Pe ? d : new gi(d instanceof Error ? d.message : d));
      }
    };
    let a = t && setTimeout(() => {
      a = null, s(new Pe(`timeout ${t} of ms exceeded`, Pe.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", s));
    const { signal: c } = n;
    return c.unsubscribe = () => M.asap(l), c;
  }
}, oM = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, iM = async function* (e, t) {
  for await (const r of sM(e))
    yield* oM(r, t);
}, sM = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Kh = (e, t, r, n) => {
  const o = iM(e, t);
  let s = 0, a, l = (c) => {
    a || (a = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: d } = await o.next();
        if (u) {
          l(), c.close();
          return;
        }
        let f = d.byteLength;
        if (r) {
          let p = s += f;
          r(p);
        }
        c.enqueue(new Uint8Array(d));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(c) {
      return l(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, kl = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", fv = kl && typeof ReadableStream == "function", aM = kl && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), pv = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, lM = fv && pv(() => {
  let e = !1;
  const t = new Request(Xt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Yh = 64 * 1024, Au = fv && pv(() => M.isReadableStream(new Response("").body)), La = {
  stream: Au && ((e) => e.body)
};
kl && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !La[t] && (La[t] = M.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new Pe(`Response type '${t}' is not supported`, Pe.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const cM = async (e) => {
  if (e == null)
    return 0;
  if (M.isBlob(e))
    return e.size;
  if (M.isSpecCompliantForm(e))
    return (await new Request(Xt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (M.isArrayBufferView(e) || M.isArrayBuffer(e))
    return e.byteLength;
  if (M.isURLSearchParams(e) && (e = e + ""), M.isString(e))
    return (await aM(e)).byteLength;
}, uM = async (e, t) => {
  const r = M.toFiniteNumber(e.getContentLength());
  return r ?? cM(t);
}, dM = kl && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: o,
    cancelToken: s,
    timeout: a,
    onDownloadProgress: l,
    onUploadProgress: c,
    responseType: u,
    headers: d,
    withCredentials: f = "same-origin",
    fetchOptions: p
  } = dv(e);
  u = u ? (u + "").toLowerCase() : "text";
  let m = nM([o, s && s.toAbortSignal()], a), y;
  const b = m && m.unsubscribe && (() => {
    m.unsubscribe();
  });
  let h;
  try {
    if (c && lM && r !== "get" && r !== "head" && (h = await uM(d, n)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), C;
      if (M.isFormData(n) && (C = E.headers.get("content-type")) && d.setContentType(C), E.body) {
        const [x, P] = Wh(
          h,
          Fa(Gh(c))
        );
        n = Kh(E.body, Yh, x, P);
      }
    }
    M.isString(f) || (f = f ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    y = new Request(t, {
      ...p,
      signal: m,
      method: r.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: S ? f : void 0
    });
    let w = await fetch(y);
    const g = Au && (u === "stream" || u === "response");
    if (Au && (l || g && b)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((v) => {
        E[v] = w[v];
      });
      const C = M.toFiniteNumber(w.headers.get("content-length")), [x, P] = l && Wh(
        C,
        Fa(Gh(l), !0)
      ) || [];
      w = new Response(
        Kh(w.body, Yh, x, () => {
          P && P(), b && b();
        }),
        E
      );
    }
    u = u || "text";
    let O = await La[M.findKey(La, u) || "text"](w, e);
    return !g && b && b(), await new Promise((E, C) => {
      cv(E, C, {
        data: O,
        headers: Jt.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: y
      });
    });
  } catch (S) {
    throw b && b(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new Pe("Network Error", Pe.ERR_NETWORK, e, y),
      {
        cause: S.cause || S
      }
    ) : Pe.from(S, S && S.code, e, y);
  }
}), Nu = {
  http: xk,
  xhr: rM,
  fetch: dM
};
M.forEach(Nu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qh = (e) => `- ${e}`, fM = (e) => M.isFunction(e) || e === null || e === !1, hv = {
  getAdapter: (e) => {
    e = M.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let a;
      if (n = r, !fM(r) && (n = Nu[(a = String(r)).toLowerCase()], n === void 0))
        throw new Pe(`Unknown adapter '${a}'`);
      if (n)
        break;
      o[a || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(o).map(
        ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? s.length > 1 ? `since :
` + s.map(Qh).join(`
`) : " " + Qh(s[0]) : "as no adapter specified";
      throw new Pe(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Nu
};
function Oc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new gi(null, e);
}
function Xh(e) {
  return Oc(e), e.headers = Jt.from(e.headers), e.data = Sc.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), hv.getAdapter(e.adapter || $s.adapter)(e).then(function(n) {
    return Oc(e), n.data = Sc.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Jt.from(n.headers), n;
  }, function(n) {
    return lv(n) || (Oc(e), n && n.response && (n.response.data = Sc.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Jt.from(n.response.headers))), Promise.reject(n);
  });
}
const mv = "1.7.7", zd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  zd[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jh = {};
zd.transitional = function(t, r, n) {
  function o(s, a) {
    return "[Axios v" + mv + "] Transitional option '" + s + "'" + a + (n ? ". " + n : "");
  }
  return (s, a, l) => {
    if (t === !1)
      throw new Pe(
        o(a, " has been removed" + (r ? " in " + r : "")),
        Pe.ERR_DEPRECATED
      );
    return r && !Jh[a] && (Jh[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, a, l) : !0;
  };
};
function pM(e, t, r) {
  if (typeof e != "object")
    throw new Pe("options must be an object", Pe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], a = t[s];
    if (a) {
      const l = e[s], c = l === void 0 || a(l, s, e);
      if (c !== !0)
        throw new Pe("option " + s + " must be " + c, Pe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Pe("Unknown option " + s, Pe.ERR_BAD_OPTION);
  }
}
const $u = {
  assertOptions: pM,
  validators: zd
}, gn = $u.validators;
class ro {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Bh(),
      response: new Bh()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = po(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && $u.assertOptions(n, {
      silentJSONParsing: gn.transitional(gn.boolean),
      forcedJSONParsing: gn.transitional(gn.boolean),
      clarifyTimeoutError: gn.transitional(gn.boolean)
    }, !1), o != null && (M.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : $u.assertOptions(o, {
      encode: gn.function,
      serialize: gn.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = s && M.merge(
      s.common,
      s[r.method]
    );
    s && M.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete s[y];
      }
    ), r.headers = Jt.concat(a, s);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(r) === !1 || (c = c && b.synchronous, l.unshift(b.fulfilled, b.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(b) {
      u.push(b.fulfilled, b.rejected);
    });
    let d, f = 0, p;
    if (!c) {
      const y = [Xh.bind(this), void 0];
      for (y.unshift.apply(y, l), y.push.apply(y, u), p = y.length, d = Promise.resolve(r); f < p; )
        d = d.then(y[f++], y[f++]);
      return d;
    }
    p = l.length;
    let m = r;
    for (f = 0; f < p; ) {
      const y = l[f++], b = l[f++];
      try {
        m = y(m);
      } catch (h) {
        b.call(this, h);
        break;
      }
    }
    try {
      d = Xh.call(this, m);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, p = u.length; f < p; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = po(this.defaults, t);
    const r = uv(t.baseURL, t.url);
    return iv(r, t.params, t.paramsSerializer);
  }
}
M.forEach(["delete", "get", "head", "options"], function(t) {
  ro.prototype[t] = function(r, n) {
    return this.request(po(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
M.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, a, l) {
      return this.request(po(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  ro.prototype[t] = r(), ro.prototype[t + "Form"] = r(!0);
});
class Wd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const a = new Promise((l) => {
        n.subscribe(l), s = l;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(s);
      }, a;
    }, t(function(s, a, l) {
      n.reason || (n.reason = new gi(s, a, l), r(n.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Wd(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function hM(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function mM(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const Iu = {
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
Object.entries(Iu).forEach(([e, t]) => {
  Iu[t] = e;
});
function yv(e) {
  const t = new ro(e), r = Hb(ro.prototype.request, t);
  return M.extend(r, ro.prototype, t, { allOwnKeys: !0 }), M.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return yv(po(e, o));
  }, r;
}
const vt = yv($s);
vt.Axios = ro;
vt.CanceledError = gi;
vt.CancelToken = Wd;
vt.isCancel = lv;
vt.VERSION = mv;
vt.toFormData = Dl;
vt.AxiosError = Pe;
vt.Cancel = vt.CanceledError;
vt.all = function(t) {
  return Promise.all(t);
};
vt.spread = hM;
vt.isAxiosError = mM;
vt.mergeConfig = po;
vt.AxiosHeaders = Jt;
vt.formToJSON = (e) => av(M.isHTMLForm(e) ? new FormData(e) : e);
vt.getAdapter = hv.getAdapter;
vt.HttpStatusCode = Iu;
vt.default = vt;
const gv = {
  //Authentication
  BASE_URL: "http://ec2-3-109-211-250.ap-south-1.compute.amazonaws.com:80"
  // BASE_URL: "https://60da-182-156-141-17.ngrok-free.app",
}, ln = vt.create({
  baseURL: gv.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), yM = () => localStorage.getItem("access_token"), gM = () => localStorage.getItem("refresh_token");
ln.interceptors.request.use(
  (e) => {
    const t = yM();
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
ln.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config;
    if (e.response && e.response.status === 401 && !t._retry) {
      t._retry = !0;
      const r = gM();
      if (r)
        try {
          const { data: n } = await vt.post(`${gv.BASE_URL}/auth/refresh-token`, {
            refreshToken: r
          });
          return localStorage.setItem("accessToken", n.accessToken), t.headers.Authorization = `Bearer ${n.accessToken}`, ln(t);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(e);
  }
);
function Do(e) {
  var t;
  if (vt.isAxiosError(e)) {
    const r = ((t = e.response) == null ? void 0 : t.data) || {
      message: "An error occurred. Try after some time."
    };
    throw new Error(r.message);
  } else
    throw new Error("Unknown error occurred");
}
class bM {
  // Create a new Data
  async createData(t, r) {
    try {
      const n = await ln.post(t, r);
      return console.log(n.data), n.data;
    } catch (n) {
      Do(n);
    }
  }
  // Get all Data
  async getData(t) {
    try {
      return (await ln.get(t)).data.data;
    } catch (r) {
      Do(r);
    }
  }
  // Get an Data by ID
  async getDataById(t, r) {
    try {
      const n = await ln.get(`${t}/${r}`);
      return console.log(n.data.data), n.data.data;
    } catch (n) {
      Do(n);
    }
  }
  // Update a data by ID
  async updateData(t, r, n) {
    try {
      const o = await ln.patch(`${t}/${r}`, n);
      return console.log(o.data), o.data;
    } catch (o) {
      Do(o);
    }
  }
  // Delete an Data by ID
  async deleteData(t, r) {
    try {
      const n = await ln.delete(`${t}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      Do(n);
    }
  }
  // Change employee state to active from inactive
  async changeEmplyeeState(t, r) {
    try {
      const n = await ln.patch(`${t}${r}`);
      return console.log(n.data), n.data;
    } catch (n) {
      Do(n);
    }
  }
}
const Ml = (e, t) => {
  const r = new bM();
  return qD({ queryKey: t, queryFn: () => r.getData(e) });
}, vM = (e) => Ml(e, ["getAllFilteredFarmerData"]), EM = (e) => Ml(e, ["getAllVendors"]), SM = (e) => Ml(e, ["getProducts"]), OM = (e) => Ml(e, ["getUOMs"]);
var bv = /* @__PURE__ */ ((e) => (e[e.COLLECTION_CENTER = 0] = "COLLECTION_CENTER", e[e.DISTRIBUTION_CENTER = 1] = "DISTRIBUTION_CENTER", e[e.SEASONAL_COLLECTION_CENTER = 2] = "SEASONAL_COLLECTION_CENTER", e[e.WAREHOUSE = 3] = "WAREHOUSE", e))(bv || {}), vv = /* @__PURE__ */ ((e) => (e[e.REGISTERED_OFFICE = 0] = "REGISTERED_OFFICE", e[e.CORPORATE_OFFICE = 1] = "CORPORATE_OFFICE", e))(vv || {});
const wM = {
  offices: [],
  officeType: vv.REGISTERED_OFFICE,
  selectedOffices: void 0
}, TM = ut({
  name: "officesData",
  initialState: wM,
  reducers: {
    setOfficesData: (e, t) => {
      e.offices = t.payload;
    },
    setOfficeType: (e, t) => {
      e.officeType = t.payload;
    }
  }
}), Ev = TM.reducer, CM = {
  branches: [],
  BranchType: bv.COLLECTION_CENTER,
  selectedBranches: void 0
}, xM = ut({
  name: "branchesData",
  initialState: CM,
  reducers: {
    setBranchesData: (e, t) => {
      e.branches = t.payload;
    },
    setBranchType: (e, t) => {
      e.BranchType = t.payload;
    }
  }
}), Sv = xM.reducer, RM = {
  open: !1,
  message: "",
  severity: "success"
}, PM = ut({
  name: "alertSnackbar",
  initialState: RM,
  reducers: {
    openAlertbar: (e, t) => {
      e.open = t.payload;
    },
    closeAlertbar: (e, t) => {
      e.open = t.payload;
    },
    addMessageSevirity: (e, t) => {
      e.message = t.payload.message, e.severity = t.payload.severity;
    },
    removeMessageSeverity: (e) => {
      e.message = "", e.severity = "success";
    }
  }
}), Ov = PM.reducer, _M = {
  allVendorCategories: [],
  selectedVendorCategory: null
}, AM = ut({
  name: "vendorCategoryData",
  initialState: _M,
  reducers: {
    setAllVendorCategories: (e, t) => {
      e.allVendorCategories = t.payload;
    },
    setSelectedVendorCategory: (e, t) => {
      e.selectedVendorCategory = t.payload;
    }
  }
}), wv = AM.reducer;
Fd({
  reducer: {
    formContainer: Rb,
    customerData: Pb,
    vendorData: Ab,
    vendorCategoryData: wv,
    employeeData: Nb,
    farmerData: Ib,
    productData: kb,
    uomData: Fb,
    officesData: Ev,
    branchesData: Sv,
    alertSnackbar: Ov
  }
});
const NM = {
  formContainer: Rb,
  customerData: Pb,
  vendorData: Ab,
  vendorCategoryData: wv,
  employeeData: Nb,
  farmerData: Ib,
  productData: kb,
  uomData: Fb,
  officesData: Ev,
  branchesData: Sv,
  alertSnackbar: Ov
};
Le().shape({
  firstName: $().required("First name is required").min(3, "First name should be more than 3 characters"),
  middleName: $().required("Middle name is required").min(3, "Middle name should be more than 3 characters"),
  lastName: $().required("Last name is required").min(3, "Last name should be more than 3 characters"),
  designation: $().required("Designation is required").min(5, "Incorrect Designation"),
  username: $().required("Username is required").min(5, "username should be more than 5 characters").max(12, "username should be less than 12 characters"),
  phoneNumber: $().required("Mobile number is required").length(10, "Mobile number must be 10 digits").matches(/^[0-9]+$/, "Mobile number must contain only numbers"),
  cugNo: $().required("CUG number is required").length(10, "CUG number must be 10 digits").matches(/^[0-9]+$/, "CUG number must contain only numbers"),
  email: $().required("Email is required").email("Invalid email format"),
  companyEmail: $().required("Company email is required").email("Invalid email format"),
  address: Le().shape({
    street: $().required("Street address is required"),
    city: $().required("City is required"),
    state: $().required("State is required"),
    country: $().required("Country is required"),
    postalCode: $().required("Postal Code is required")
  }),
  joiningDate: $().required("Joining date is required"),
  relocationDate: $().optional(),
  relocationPlace: $().optional(),
  recommendedBy: $().optional(),
  role: $().required("Role is required"),
  reportingAuthorityFunctional: $().optional(),
  reportingAuthorityAdministrative: $().optional()
});
Le().shape({
  name: $().required("Name is required").min(3, "Product name should be more than 3 characters"),
  image: Jm().nullable().required("Image is required").test("fileFormat", "Invalid image format (only jpg, jpeg, png allowed)", (e) => {
    if (!e) return !0;
    const t = e;
    return ["image/jpeg", "image/png", "image/jpg"].includes(t.type);
  }).test("fileSize", "Image is too large (max 1MB)", (e) => {
    if (!e) return !0;
    const t = e, r = 1 * 1024 * 1024;
    return t.size <= r;
  }),
  returnable: ey().required("Returnable is required"),
  description: $().required("Description is required"),
  product_code: $().required("Product code is required"),
  category: $().required("Category is required"),
  subcategory: $().required("Subcategory is required"),
  classification: $().required("Classification is required"),
  uom: $().required("UOM is required")
});
Le().shape({
  name: $().required("Product classification name is required.")
});
Le().shape({
  name: $().required("Product category name is required"),
  productClassification: $().required("Related product classification name is required")
});
Le().shape({
  name: $().required("Product subcategory name is required"),
  category: $().required("Related product category name is required")
});
Le().shape({
  name: $().required("Office name is required"),
  address: Le().shape({
    address1: $().required("Address 1 is required"),
    address2: $().optional(),
    location: $().required("Location is required"),
    city: $().required("City is required"),
    state: $().required("State is required"),
    pincode: $().required("Pincode is required")
  }),
  contactNumber: $().required("Contact number is required"),
  officeEmail: $().required("Office email is required").email("Invalid email format"),
  notes: $().optional()
});
Le().shape({
  organisationName: $().required("Organisation Name is required"),
  // customerTypes: customerTypesSchema,
  // customerCategory: customerCategorySchema,
  organisationType: $().required("Organisation Type is required"),
  otherType: $(),
  // customerAddress: addressSchema,
  primaryContactNo: $().required("Primary Contact No. is required").matches(/^\d{10}$/, "Contact number must be 10 digits"),
  secondaryContactNo: $().matches(/^\d{10}$/, "Contact number must be 10 digits"),
  emailPrimary: $().email("Invalid email format").required("Primary Email is required"),
  emailSecondary: $().email("Invalid email format")
  //     keyMobileNumbers: keyMobileNumbersSchema,
  //     billingDetails: billingDetailsSchema,
  //     deliveryDetails: deliveryDetailsSchema,
  //     statutoryDetails: statutoryDetailsSchema,
  //     bankDetails: bankDetailsSchema,
  //     productSpecification: Yup.array().of(productSpecificationSchema),
  //     paymentTerms: paymentTermsSchema,
  //     officeUseOnly: officeUseOnlySchema,
});
const Du = Le().shape({
  address1: $().required("Address Line 1 is required"),
  address2: $().nullable(),
  location: $().required("Location is required"),
  city: $().required("City is required"),
  state: $().required("State is required"),
  pincode: $().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
Le().shape({
  companyName: $().required("Party Name is required"),
  category: $().required("Please select category of vendor"),
  subcategory: $().required("Please select subcategory of vendor"),
  inFandVBusinessSince: $(),
  dateOfIncorporation: $(),
  officeAddress: Du,
  officeContactNo: $().matches(/^\d{10}$/, "Contact number must be 10 digits")
  // website: Yup.string().notRequired(),
  // email: Yup.string().email('Invalid email format').required('Email is required'),
  // mainProductsToBeSupplied: Yup.string().required('Main Products to be Supplied are required'),
  // dispatchCenter: Yup.string().required('Please add location of dispatch center'),
  // warehouseLocations: Yup.string().required('Please add location of warehouse location'),
  // packingCenterLocation: Yup.string().required('Please add packing of packing center'),
  // ifGstnCopy: Yup.boolean().required('Please select Yes or No'),
  // ifPanCardCopy: Yup.boolean().required('Please select Yes or No'),
  // ifMsmeCopy: Yup.boolean().required('Please select Yes or No'),
  // proposedPaymentTerms: Yup.string().required('Please select a proposed payment term'),
  // creditTerms: Yup.string().required('Please select a credit term'),
  // contactPersonFirstName: Yup.string().required('Contact Person First Name is required'),
  // contactPersonMiddleName: Yup.string(),
  // contactPersonLastName: Yup.string().required('Contact Person Last Name is required'),
  // primaryContactNumber: Yup.string().required('Primary Contact Number is required').matches(/^\d{10}$/, 'Contact number must be 10 digits'),
  // alternateContactNumber: Yup.string().matches(/^\d{10}$/, 'Contact number must be 10 digits'),
  // // PANNumber: Yup.string().required('PAN Number is required').matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN number'),
  // tradeLicenseNumber: Yup.string(),
  // proposedLicenseTerms: Yup.string(),
  // anyOtherDetailsRegardingTeamAndInfrastructure: Yup.string(),
  // submittedBy: Yup.string(),
  // registeredBy: Yup.string(),
  // registeredDate: Yup.string(),
  // // gstn: Yup.string().required('GSTN is required').matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/, 'Invalid GSTN format'),
  // description: Yup.string(),
  // vendorCode: Yup.string(),
  // vendorGrade: Yup.string().required('Vendor Grade is required').oneOf(['A', 'B', 'C'], 'Vendor Grade must be A, B, or C'),
  // forWhichProduct: Yup.string(),
  // address: addressSchema, // Referencing the address schema
});
Le().shape({
  farmerfName: $().required("First Name is required").min(3, "Minimum 3 characters required."),
  farmermName: $().notRequired(),
  farmerlName: $().required("Last Name is required").min(3, "Minimum 3 characters required."),
  residensialAddress: Du,
  farmAddress: Du,
  primaryMobileNo: $().required("Contact No is required")
});
Le().shape({
  unit: $().required("UOM name is required"),
  abbreviation: $().required("Abbreviation of UOM is required")
});
Le().shape({
  conversionFactor: $t().required("Conversion factor is required").positive("Conversion factor cannot be negative."),
  fromUOM: $().required("UOM name is required"),
  toUOM: $().required("UOM name is required")
});
fl({
  palette: {
    primary: {
      main: "#008A00",
      light: "#befabe"
    },
    secondary: {
      main: "#2a3eb1",
      light: "#3d5afe"
    }
  }
});
const $M = eb({ ...OI, ...BI, ...NM });
Fd({
  reducer: $M
});
new OD();
Le().shape({
  uid: $().email("Invalid email address").required("Email is required"),
  password: $().required("Password is required").min(8, "Password must be at least 8 characters long")
});
Le().shape({
  uid: $().matches(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number").required("Mobile number is required"),
  password: $().required("Password is required").min(8, "Password must be at least 8 characters long")
});
se("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1
});
function na(e, t, r) {
  return e.map((n) => ({
    value: String(n[t]),
    label: String(n[r])
  }));
}
ar.forwardRef(function(t, r) {
  return /* @__PURE__ */ R(_g, { direction: "up", ref: r, ...t });
});
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ku() {
  return ku = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ku.apply(this, arguments);
}
var Zh;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Zh || (Zh = {}));
function ur(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Tv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Cv(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
var em;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(em || (em = {}));
function IM(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? Cv(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : DM(r, t) : t,
    search: jM(n),
    hash: qM(o)
  };
}
function DM(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
  }), r.length > 1 ? r.join("/") : "/";
}
function wc(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function kM(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function MM(e, t) {
  let r = kM(e);
  return t ? r.map((n, o) => o === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function FM(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string" ? o = Cv(e) : (o = ku({}, e), ur(!o.pathname || !o.pathname.includes("?"), wc("?", "pathname", "search", o)), ur(!o.pathname || !o.pathname.includes("#"), wc("#", "pathname", "hash", o)), ur(!o.search || !o.search.includes("#"), wc("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "", a = s ? "/" : o.pathname, l;
  if (a == null)
    l = r;
  else {
    let f = t.length - 1;
    if (!n && a.startsWith("..")) {
      let p = a.split("/");
      for (; p[0] === ".."; )
        p.shift(), f -= 1;
      o.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = IM(o, l), u = a && a !== "/" && a.endsWith("/"), d = (s || a === ".") && r.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const LM = (e) => e.join("/").replace(/\/\/+/g, "/"), jM = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, qM = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, xv = ["post", "put", "patch", "delete"];
new Set(xv);
const VM = ["get", ...xv];
new Set(VM);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Mu() {
  return Mu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mu.apply(this, arguments);
}
const Gd = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (Gd.displayName = "DataRouter");
const UM = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (UM.displayName = "DataRouterState");
const BM = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (BM.displayName = "Await");
const Hd = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (Hd.displayName = "Navigation");
const Kd = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (Kd.displayName = "Location");
const Fl = /* @__PURE__ */ T.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Fl.displayName = "Route");
const zM = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (zM.displayName = "RouteError");
function Rv() {
  return T.useContext(Kd) != null;
}
function WM() {
  return Rv() || (process.env.NODE_ENV !== "production" ? ur(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : ur(!1)), T.useContext(Kd).location;
}
const Pv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function _v(e) {
  T.useContext(Hd).static || T.useLayoutEffect(e);
}
function GM() {
  let {
    isDataRoute: e
  } = T.useContext(Fl);
  return e ? XM() : HM();
}
function HM() {
  Rv() || (process.env.NODE_ENV !== "production" ? ur(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : ur(!1));
  let e = T.useContext(Gd), {
    basename: t,
    future: r,
    navigator: n
  } = T.useContext(Hd), {
    matches: o
  } = T.useContext(Fl), {
    pathname: s
  } = WM(), a = JSON.stringify(MM(o, r.v7_relativeSplatPath)), l = T.useRef(!1);
  return _v(() => {
    l.current = !0;
  }), T.useCallback(function(u, d) {
    if (d === void 0 && (d = {}), process.env.NODE_ENV !== "production" && Tv(l.current, Pv), !l.current) return;
    if (typeof u == "number") {
      n.go(u);
      return;
    }
    let f = FM(u, JSON.parse(a), s, d.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : LM([t, f.pathname])), (d.replace ? n.replace : n.push)(f, d.state, d);
  }, [t, n, a, s, e]);
}
var Av = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Av || {}), Nv = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Nv || {});
function $v(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function KM(e) {
  let t = T.useContext(Gd);
  return t || (process.env.NODE_ENV !== "production" ? ur(!1, $v(e)) : ur(!1)), t;
}
function YM(e) {
  let t = T.useContext(Fl);
  return t || (process.env.NODE_ENV !== "production" ? ur(!1, $v(e)) : ur(!1)), t;
}
function QM(e) {
  let t = YM(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? ur(!1, e + ' can only be used on routes that contain a unique "id"') : ur(!1)), r.route.id;
}
function XM() {
  let {
    router: e
  } = KM(Av.UseNavigateStable), t = QM(Nv.UseNavigateStable), r = T.useRef(!1);
  return _v(() => {
    r.current = !0;
  }), T.useCallback(function(o, s) {
    s === void 0 && (s = {}), process.env.NODE_ENV !== "production" && Tv(r.current, Pv), r.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Mu({
      fromRouteId: t
    }, s)));
  }, [e, t]);
}
new Promise(() => {
});
const hF = () => {
  const e = m$(), t = GM(), { data: r } = EM(ta.GET_ALL_VENDORS), { data: n } = vM(ta.GET_ALL_FARMERS_FILTERED), { data: o } = SM(ta.GET_ALL_PRODUCTS), { data: s } = OM(ta.GET_ALL_UOM), { allVendors: a, selectedVendor: l } = Js(YI), { allFarmersFiltered: c, selectedFarmer: u } = Js(eD), { allProducts: d, selectedProduct: f } = Js(nD), { allUOMs: p } = Js(sD);
  ar.useEffect(() => {
    e(Ph(null)), e(_h(null)), e(Ah(null)), e(Rh(r || [])), e(rD(o || [])), e(iD(s || []));
  }, [e, o, r, s]);
  const m = (S, w) => {
    w("source", S), e(S === "vendor" ? Rh(r || []) : ZI(n || []));
  }, y = (S, w) => {
    if (S.source === "vendor") {
      const g = a.find((O) => O.id === w);
      e(Ph(g));
    } else if (S.source === "farmer") {
      const g = c.find((O) => O.id === w);
      e(_h(g));
    }
  }, b = (S) => {
    const w = d.find((g) => g.id === S);
    e(Ah(w));
  }, h = (S, w) => {
    const g = S.inwardProduct.map((O) => ({
      ...O,
      netWeight: O.grossWeight - O.productContainerWeight / 1e3 * O.qty
    }));
    w("inwardProduct", g);
  };
  return /* @__PURE__ */ R(
    fw,
    {
      initialValues: vT,
      onSubmit: (S) => console.log(S),
      children: ({ values: S, handleChange: w, handleSubmit: g, setFieldValue: O }) => /* @__PURE__ */ R("form", { onSubmit: g, children: /* @__PURE__ */ Oe(ye, { container: !0, columnSpacing: 1, rowSpacing: 1, padding: 1, children: [
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ R(It, { variant: "h4", children: "Inward Register" }) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ Oe(Kg, { direction: "row", justifyContent: "end", alignItems: "center", children: [
          /* @__PURE__ */ R(
            Mo,
            {
              type: "submit",
              variant: "contained",
              color: "success",
              size: "large",
              sx: { width: 150 },
              children: "Create"
            }
          ),
          /* @__PURE__ */ R(
            Mo,
            {
              type: "reset",
              variant: "contained",
              color: "secondary",
              size: "large",
              sx: { width: 150, marginLeft: 2 },
              children: "Reset"
            }
          )
        ] }) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 3, children: /* @__PURE__ */ R(
          Ln,
          {
            isRequired: !1,
            label: "Referred GRN",
            name: "grnNo",
            options: [{ value: "", label: "" }],
            value: S.grnNo,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 3, children: /* @__PURE__ */ R(
          Ln,
          {
            isRequired: !1,
            label: "Referred Challan",
            name: "deliveryChallanNo",
            options: [{ value: "", label: "" }],
            value: S.deliveryChallanNo,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ R(
          Ln,
          {
            isRequired: !0,
            label: "Company Name",
            name: "companyName",
            options: Th.companyNames,
            value: S.companyName,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
          ct,
          {
            type: "text",
            isRequired: !0,
            name: "batchNo",
            label: "Batch Number",
            value: S.batchNo,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
          ct,
          {
            type: "text",
            isRequired: !0,
            name: "location",
            label: "Location",
            value: S.location,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
          ct,
          {
            type: "date",
            isRequired: !0,
            name: "date",
            label: "Date",
            value: S.date,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ R(
          r$,
          {
            isRequired: !0,
            label: "Source:",
            name: "source",
            options: Th.source,
            value: S.source,
            handleChange: (E) => {
              m(E.target.value, O);
            }
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: S.source === "vendor" ? /* @__PURE__ */ R(
          fc,
          {
            isRequired: !0,
            name: "selectedParty",
            label: "Vendor Company Name",
            options: na(a, "id", "companyName"),
            handleChange: (E, C) => {
              C ? O("selectedParty", C.value) : O("selectedParty", "");
            },
            handleBlur: y(S, S.selectedParty)
          }
        ) : /* @__PURE__ */ R(
          fc,
          {
            isRequired: !0,
            name: "selectedParty",
            label: "Farmer Name",
            options: na(c, "id", "fullName"),
            handleChange: (E, C) => {
              C ? O("selectedParty", C.value) : O("selectedParty", "");
            },
            handleBlur: y(S, S.selectedParty)
          }
        ) }),
        S.source === "vendor" ? /* @__PURE__ */ Oe(Bl, { children: [
          /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(ct, { isRequired: !1, label: "Vendor Code", name: "vendorCode", type: "text", value: `${(l == null ? void 0 : l.vendorCode) || ""}`, isReadOnly: !0 }) }),
          /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(ct, { isRequired: !1, label: "Contact Person", name: "contactPerson", type: "text", value: `${(l == null ? void 0 : l.vendorSaleInfo.contactFName) || ""} ${(l == null ? void 0 : l.vendorSaleInfo.contactMName) || ""} ${(l == null ? void 0 : l.vendorSaleInfo.contactLName) || ""}`, isReadOnly: !0 }) }),
          /* @__PURE__ */ R(ye, { item: !0, xs: 12, children: /* @__PURE__ */ R(ct, { isRequired: !1, label: "Company Address", name: "companyAddress", type: "text", value: l != null && l.officeAddress ? Ch(l == null ? void 0 : l.officeAddress) : "", isReadOnly: !0 }) }),
          /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ R(ct, { isRequired: !1, label: "Company Email", name: "email", type: "email", value: `${(l == null ? void 0 : l.email) || ""}`, isReadOnly: !0 }) }),
          /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ R(ct, { isRequired: !1, label: "Company Contact No", name: "contactNo", type: "text", value: `${(l == null ? void 0 : l.officeContactNo) || ""}`, isReadOnly: !0 }) })
        ] }) : /* @__PURE__ */ Oe(Bl, { children: [
          /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 2, children: /* @__PURE__ */ R(ct, { isRequired: !1, label: "Farmer Code", name: "farmerCode", type: "text", value: `${(u == null ? void 0 : u.farmerCode) || ""}`, isReadOnly: !0 }) }),
          /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 3, children: /* @__PURE__ */ R(ct, { isRequired: !1, label: "Farmer Email", name: "email", type: "email", value: `${(u == null ? void 0 : u.email) || ""}`, isReadOnly: !0 }) }),
          /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 3, children: /* @__PURE__ */ R(ct, { isRequired: !1, label: "Farmer Contact No", name: "contactNo", type: "text", value: `${(u == null ? void 0 : u.primaryMobileNo) || ""}`, isReadOnly: !0 }) }),
          /* @__PURE__ */ R(ye, { item: !0, xs: 12, children: /* @__PURE__ */ R(ct, { isRequired: !1, label: "Farmer Residential Address", name: "residentialAddress", type: "text", value: u != null && u.residensialAddress ? Ch(u == null ? void 0 : u.residensialAddress) : "", isReadOnly: !0 }) })
        ] }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, marginY: 2, children: /* @__PURE__ */ R(Og, { sx: { width: "100%" }, children: S.source === "vendor" ? /* @__PURE__ */ Oe(It, { variant: "body2", sx: { fontWeight: 600 }, children: [
          "If Vendor Not Found ",
          /* @__PURE__ */ R(Mo, { variant: "text", onClick: () => t(xh.CREATE_VENDOR), children: "Click Here" })
        ] }) : /* @__PURE__ */ Oe(It, { variant: "body2", sx: { fontWeight: 600 }, children: [
          "If Farmer Not Found ",
          /* @__PURE__ */ R(Mo, { variant: "text", onClick: () => t(xh.CREATE_FARMER), children: "Click Here" })
        ] }) }) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, children: /* @__PURE__ */ R(Tw, { name: "inwardProduct", children: ({ remove: E, push: C }) => /* @__PURE__ */ Oe(Bl, { children: [
          S.inwardProduct.map((x, P) => /* @__PURE__ */ Oe(
            ye,
            {
              container: !0,
              columnSpacing: 1,
              alignItems: "center",
              sx: {
                border: "1px solid #BDBDBD",
                marginY: 1,
                padding: 1,
                borderRadius: 2
              },
              children: [
                /* @__PURE__ */ Oe(ye, { item: !0, xs: 12, sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
                  /* @__PURE__ */ Oe(It, { variant: "body1", component: "div", children: [
                    "Product: ",
                    P + 1
                  ] }),
                  S.inwardProduct.length > 1 && /* @__PURE__ */ R(
                    ml,
                    {
                      color: "error",
                      onClick: () => E(P),
                      children: /* @__PURE__ */ R(JN, {})
                    }
                  )
                ] }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ R(
                  fc,
                  {
                    isRequired: !0,
                    name: `inwardProduct.${P}.product`,
                    label: "Product Name",
                    options: na(d, "id", "name"),
                    handleChange: (v, _) => {
                      _ ? O(`inwardProduct.${P}.product`, _.value) : O(`inwardProduct.${P}.product`, "");
                    },
                    handleBlur: b(S.inwardProduct[P].product)
                  }
                ) }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 3, children: /* @__PURE__ */ R(
                  ct,
                  {
                    isRequired: !1,
                    isReadOnly: !0,
                    type: "text",
                    name: "origin",
                    label: "Origin",
                    value: f == null ? void 0 : f.productOrigin
                  }
                ) }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 3, children: /* @__PURE__ */ R(
                  ct,
                  {
                    isRequired: !1,
                    isReadOnly: !0,
                    type: "text",
                    name: "brand",
                    label: "Brand",
                    value: ""
                  }
                ) }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
                  Ln,
                  {
                    isRequired: !0,
                    label: "Count",
                    name: `inwardProduct.${P}.count`,
                    options: f == null ? void 0 : f.count.map((v) => ({ value: v, label: v })),
                    value: S.inwardProduct[P].count,
                    handleChange: w
                  }
                ) }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
                  Ln,
                  {
                    isRequired: !0,
                    label: "Size",
                    name: `inwardProduct.${P}.size`,
                    options: f == null ? void 0 : f.count.map((v) => ({ value: v, label: v })),
                    value: S.inwardProduct[P].size,
                    handleChange: w
                  }
                ) }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
                  Ln,
                  {
                    isRequired: !0,
                    label: "Weight",
                    name: `inwardProduct.${P}.weight`,
                    options: f == null ? void 0 : f.count.map((v) => ({ value: v, label: v })),
                    value: S.inwardProduct[P].weight,
                    handleChange: w
                  }
                ) }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
                  Ln,
                  {
                    isRequired: !0,
                    label: "UOM",
                    name: `inwardProduct.${P}.uom`,
                    options: na(p, "id", "unit"),
                    value: S.inwardProduct[P].uom,
                    handleChange: w
                  }
                ) }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
                  ct,
                  {
                    type: "number",
                    isRequired: !0,
                    name: `inwardProduct.${P}.qty`,
                    label: "Quantity",
                    value: S.inwardProduct[P].qty,
                    handleChange: w,
                    onBlur: () => h(S, O)
                  }
                ) }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
                  ct,
                  {
                    type: "number",
                    isRequired: !0,
                    name: `inwardProduct.${P}.productContainerWeight`,
                    label: "Container Weight (in grams)",
                    value: S.inwardProduct[P].productContainerWeight,
                    handleChange: w,
                    onBlur: () => h(S, O)
                  }
                ) }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
                  ct,
                  {
                    type: "number",
                    isRequired: !0,
                    name: `inwardProduct.${P}.grossWeight`,
                    label: "Gross Weight",
                    value: S.inwardProduct[P].grossWeight,
                    handleChange: w,
                    onBlur: () => h(S, O)
                  }
                ) }),
                /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
                  ct,
                  {
                    type: "number",
                    isRequired: !1,
                    isReadOnly: !0,
                    name: `inwardProduct.${P}.netWeight`,
                    label: "Net Weight",
                    value: S.inwardProduct[P].netWeight
                  }
                ) })
              ]
            },
            P
          )),
          /* @__PURE__ */ R(
            ye,
            {
              item: !0,
              xs: 12,
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "end"
              },
              children: /* @__PURE__ */ R(
                Mo,
                {
                  variant: "text",
                  startIcon: /* @__PURE__ */ R(XN, {}),
                  onClick: () => C(cy),
                  children: "Add More"
                }
              )
            }
          )
        ] }) }) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ R(
          ct,
          {
            type: "text",
            isRequired: !0,
            name: "purchasedBy",
            label: "Purchased By",
            value: S.purchasedBy,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ R(
          ct,
          {
            type: "text",
            isRequired: !0,
            name: "inwardBy",
            label: "Inwarded By",
            value: S.inwardBy,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
          ct,
          {
            type: "number",
            isRequired: !0,
            name: "purchasedQty",
            label: "Purchased Quantity",
            value: S.purchasedQty,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
          ct,
          {
            type: "number",
            isRequired: !0,
            name: "inwardQtyInKg",
            label: "Inward Quantity (in Kg)",
            value: S.inwardQtyInKg,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ R(
          ct,
          {
            type: "number",
            isRequired: !0,
            name: "inwardCost",
            label: "Inward Cost",
            value: S.inwardCost,
            handleChange: w
          }
        ) }),
        /* @__PURE__ */ R(ye, { item: !0, xs: 12, children: /* @__PURE__ */ R(
          ct,
          {
            type: "text",
            multiline: !0,
            maxRows: 2,
            isRequired: !1,
            name: "remarks",
            label: "Remark",
            value: S.remarks,
            handleChange: w
          }
        ) })
      ] }) })
    }
  );
}, mF = () => /* @__PURE__ */ R("div", { children: "labour-register-create.form" }), yF = () => /* @__PURE__ */ R("div", { children: "stock-register-create.form" }), gF = () => /* @__PURE__ */ R("div", { children: "second-sale-register-create.form" });
export {
  nF as AQRCreateForm,
  oF as DashboardInventory,
  iF as DispatchRegisterCreateForm,
  sF as DumpRegisterCreateForm,
  aF as EODReportCreateForm,
  hF as InwardRegisterCreateForm,
  mF as LabourRegisterCreateForm,
  gF as SecondSaleRegisterCreateForm,
  yF as StockRegisterCreateForm
};
