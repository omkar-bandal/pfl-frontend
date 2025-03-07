var Fb = Object.defineProperty;
var Cd = (e) => {
  throw TypeError(e);
};
var Lb = (e, t, r) => t in e ? Fb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var li = (e, t, r) => Lb(e, typeof t != "symbol" ? t + "" : t, r), ml = (e, t, r) => t.has(e) || Cd("Cannot " + r);
var N = (e, t, r) => (ml(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ye = (e, t, r) => t.has(e) ? Cd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ie = (e, t, r, n) => (ml(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Oe = (e, t, r) => (ml(e, t, "access private method"), r);
var Ts = (e, t, r, n) => ({
  set _(o) {
    ie(e, t, o, r);
  },
  get _() {
    return N(e, t, n);
  }
});
import { jsx as p, jsxs as le, Fragment as Th } from "react/jsx-runtime";
import * as C from "react";
import ht, { useImperativeHandle as qb, useEffect as vr, createElement as Gn, Children as Sa, createContext as jb, useContext as Ch, useRef as Zr, useState as Bb, useCallback as ut, useMemo as Nn, forwardRef as Oh, useLayoutEffect as Vb, Component as zb, isValidElement as xi, cloneElement as qs } from "react";
import * as Ub from "react-dom";
import Cs from "react-dom";
var Gb = function(t) {
  return Wb(t) && !Hb(t);
};
function Wb(e) {
  return !!e && typeof e == "object";
}
function Hb(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Qb(e);
}
var Kb = typeof Symbol == "function" && Symbol.for, Yb = Kb ? Symbol.for("react.element") : 60103;
function Qb(e) {
  return e.$$typeof === Yb;
}
function Xb(e) {
  return Array.isArray(e) ? [] : {};
}
function Js(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ki(Xb(e), e, t) : e;
}
function Jb(e, t, r) {
  return e.concat(t).map(function(n) {
    return Js(n, r);
  });
}
function Zb(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(o) {
    n[o] = Js(e[o], r);
  }), Object.keys(t).forEach(function(o) {
    !r.isMergeableObject(t[o]) || !e[o] ? n[o] = Js(t[o], r) : n[o] = ki(e[o], t[o], r);
  }), n;
}
function ki(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Jb, r.isMergeableObject = r.isMergeableObject || Gb;
  var n = Array.isArray(t), o = Array.isArray(e), s = n === o;
  return s ? n ? r.arrayMerge(e, t, r) : Zb(e, t, r) : Js(t, r);
}
ki.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, o) {
    return ki(n, o, r);
  }, {});
};
var Kl = ki, xh = typeof global == "object" && global && global.Object === Object && global, ev = typeof self == "object" && self && self.Object === Object && self, $r = xh || ev || Function("return this")(), pn = $r.Symbol, wh = Object.prototype, tv = wh.hasOwnProperty, rv = wh.toString, ci = pn ? pn.toStringTag : void 0;
function nv(e) {
  var t = tv.call(e, ci), r = e[ci];
  try {
    e[ci] = void 0;
    var n = !0;
  } catch {
  }
  var o = rv.call(e);
  return n && (t ? e[ci] = r : delete e[ci]), o;
}
var ov = Object.prototype, iv = ov.toString;
function sv(e) {
  return iv.call(e);
}
var av = "[object Null]", lv = "[object Undefined]", Od = pn ? pn.toStringTag : void 0;
function Zn(e) {
  return e == null ? e === void 0 ? lv : av : Od && Od in Object(e) ? nv(e) : sv(e);
}
function Rh(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var lu = Rh(Object.getPrototypeOf, Object);
function eo(e) {
  return e != null && typeof e == "object";
}
var cv = "[object Object]", uv = Function.prototype, dv = Object.prototype, _h = uv.toString, fv = dv.hasOwnProperty, pv = _h.call(Object);
function xd(e) {
  if (!eo(e) || Zn(e) != cv)
    return !1;
  var t = lu(e);
  if (t === null)
    return !0;
  var r = fv.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && _h.call(r) == pv;
}
function hv() {
  this.__data__ = [], this.size = 0;
}
function Nh(e, t) {
  return e === t || e !== e && t !== t;
}
function Ta(e, t) {
  for (var r = e.length; r--; )
    if (Nh(e[r][0], t))
      return r;
  return -1;
}
var mv = Array.prototype, yv = mv.splice;
function gv(e) {
  var t = this.__data__, r = Ta(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : yv.call(t, r, 1), --this.size, !0;
}
function bv(e) {
  var t = this.__data__, r = Ta(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function vv(e) {
  return Ta(this.__data__, e) > -1;
}
function Ev(e, t) {
  var r = this.__data__, n = Ta(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Hr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Hr.prototype.clear = hv;
Hr.prototype.delete = gv;
Hr.prototype.get = bv;
Hr.prototype.has = vv;
Hr.prototype.set = Ev;
function Sv() {
  this.__data__ = new Hr(), this.size = 0;
}
function Tv(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Cv(e) {
  return this.__data__.get(e);
}
function Ov(e) {
  return this.__data__.has(e);
}
function os(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var xv = "[object AsyncFunction]", wv = "[object Function]", Rv = "[object GeneratorFunction]", _v = "[object Proxy]";
function Ah(e) {
  if (!os(e))
    return !1;
  var t = Zn(e);
  return t == wv || t == Rv || t == xv || t == _v;
}
var yl = $r["__core-js_shared__"], wd = function() {
  var e = /[^.]+$/.exec(yl && yl.keys && yl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nv(e) {
  return !!wd && wd in e;
}
var Av = Function.prototype, Pv = Av.toString;
function to(e) {
  if (e != null) {
    try {
      return Pv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Iv = /[\\^$.*+?()[\]{}|]/g, Dv = /^\[object .+?Constructor\]$/, $v = Function.prototype, kv = Object.prototype, Mv = $v.toString, Fv = kv.hasOwnProperty, Lv = RegExp(
  "^" + Mv.call(Fv).replace(Iv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qv(e) {
  if (!os(e) || Nv(e))
    return !1;
  var t = Ah(e) ? Lv : Dv;
  return t.test(to(e));
}
function jv(e, t) {
  return e == null ? void 0 : e[t];
}
function ro(e, t) {
  var r = jv(e, t);
  return qv(r) ? r : void 0;
}
var Mi = ro($r, "Map"), Fi = ro(Object, "create");
function Bv() {
  this.__data__ = Fi ? Fi(null) : {}, this.size = 0;
}
function Vv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zv = "__lodash_hash_undefined__", Uv = Object.prototype, Gv = Uv.hasOwnProperty;
function Wv(e) {
  var t = this.__data__;
  if (Fi) {
    var r = t[e];
    return r === zv ? void 0 : r;
  }
  return Gv.call(t, e) ? t[e] : void 0;
}
var Hv = Object.prototype, Kv = Hv.hasOwnProperty;
function Yv(e) {
  var t = this.__data__;
  return Fi ? t[e] !== void 0 : Kv.call(t, e);
}
var Qv = "__lodash_hash_undefined__";
function Xv(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Fi && t === void 0 ? Qv : t, this;
}
function Wn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Wn.prototype.clear = Bv;
Wn.prototype.delete = Vv;
Wn.prototype.get = Wv;
Wn.prototype.has = Yv;
Wn.prototype.set = Xv;
function Jv() {
  this.size = 0, this.__data__ = {
    hash: new Wn(),
    map: new (Mi || Hr)(),
    string: new Wn()
  };
}
function Zv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ca(e, t) {
  var r = e.__data__;
  return Zv(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function eE(e) {
  var t = Ca(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function tE(e) {
  return Ca(this, e).get(e);
}
function rE(e) {
  return Ca(this, e).has(e);
}
function nE(e, t) {
  var r = Ca(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function vn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
vn.prototype.clear = Jv;
vn.prototype.delete = eE;
vn.prototype.get = tE;
vn.prototype.has = rE;
vn.prototype.set = nE;
var oE = 200;
function iE(e, t) {
  var r = this.__data__;
  if (r instanceof Hr) {
    var n = r.__data__;
    if (!Mi || n.length < oE - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new vn(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Ho(e) {
  var t = this.__data__ = new Hr(e);
  this.size = t.size;
}
Ho.prototype.clear = Sv;
Ho.prototype.delete = Tv;
Ho.prototype.get = Cv;
Ho.prototype.has = Ov;
Ho.prototype.set = iE;
function sE(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Rd = function() {
  try {
    var e = ro(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Ph(e, t, r) {
  t == "__proto__" && Rd ? Rd(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var aE = Object.prototype, lE = aE.hasOwnProperty;
function Ih(e, t, r) {
  var n = e[t];
  (!(lE.call(e, t) && Nh(n, r)) || r === void 0 && !(t in e)) && Ph(e, t, r);
}
function Oa(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var s = -1, a = t.length; ++s < a; ) {
    var l = t[s], c = void 0;
    c === void 0 && (c = e[l]), o ? Ph(r, l, c) : Ih(r, l, c);
  }
  return r;
}
function cE(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var uE = "[object Arguments]";
function _d(e) {
  return eo(e) && Zn(e) == uE;
}
var Dh = Object.prototype, dE = Dh.hasOwnProperty, fE = Dh.propertyIsEnumerable, pE = _d(/* @__PURE__ */ function() {
  return arguments;
}()) ? _d : function(e) {
  return eo(e) && dE.call(e, "callee") && !fE.call(e, "callee");
}, is = Array.isArray;
function xa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function hE() {
  return !1;
}
var $h = typeof exports == "object" && exports && !exports.nodeType && exports, Nd = $h && typeof module == "object" && module && !module.nodeType && module, mE = Nd && Nd.exports === $h, Ad = mE ? $r.Buffer : void 0, yE = Ad ? Ad.isBuffer : void 0, kh = yE || hE, gE = 9007199254740991, bE = /^(?:0|[1-9]\d*)$/;
function vE(e, t) {
  var r = typeof e;
  return t = t ?? gE, !!t && (r == "number" || r != "symbol" && bE.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var EE = 9007199254740991;
function Mh(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= EE;
}
var SE = "[object Arguments]", TE = "[object Array]", CE = "[object Boolean]", OE = "[object Date]", xE = "[object Error]", wE = "[object Function]", RE = "[object Map]", _E = "[object Number]", NE = "[object Object]", AE = "[object RegExp]", PE = "[object Set]", IE = "[object String]", DE = "[object WeakMap]", $E = "[object ArrayBuffer]", kE = "[object DataView]", ME = "[object Float32Array]", FE = "[object Float64Array]", LE = "[object Int8Array]", qE = "[object Int16Array]", jE = "[object Int32Array]", BE = "[object Uint8Array]", VE = "[object Uint8ClampedArray]", zE = "[object Uint16Array]", UE = "[object Uint32Array]", et = {};
et[ME] = et[FE] = et[LE] = et[qE] = et[jE] = et[BE] = et[VE] = et[zE] = et[UE] = !0;
et[SE] = et[TE] = et[$E] = et[CE] = et[kE] = et[OE] = et[xE] = et[wE] = et[RE] = et[_E] = et[NE] = et[AE] = et[PE] = et[IE] = et[DE] = !1;
function GE(e) {
  return eo(e) && Mh(e.length) && !!et[Zn(e)];
}
function cu(e) {
  return function(t) {
    return e(t);
  };
}
var Fh = typeof exports == "object" && exports && !exports.nodeType && exports, wi = Fh && typeof module == "object" && module && !module.nodeType && module, WE = wi && wi.exports === Fh, gl = WE && xh.process, qo = function() {
  try {
    var e = wi && wi.require && wi.require("util").types;
    return e || gl && gl.binding && gl.binding("util");
  } catch {
  }
}(), Pd = qo && qo.isTypedArray, HE = Pd ? cu(Pd) : GE, KE = Object.prototype, YE = KE.hasOwnProperty;
function Lh(e, t) {
  var r = is(e), n = !r && pE(e), o = !r && !n && kh(e), s = !r && !n && !o && HE(e), a = r || n || o || s, l = a ? cE(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || YE.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    vE(u, c))) && l.push(u);
  return l;
}
var QE = Object.prototype;
function uu(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || QE;
  return e === r;
}
var XE = Rh(Object.keys, Object), JE = Object.prototype, ZE = JE.hasOwnProperty;
function e0(e) {
  if (!uu(e))
    return XE(e);
  var t = [];
  for (var r in Object(e))
    ZE.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function qh(e) {
  return e != null && Mh(e.length) && !Ah(e);
}
function du(e) {
  return qh(e) ? Lh(e) : e0(e);
}
function t0(e, t) {
  return e && Oa(t, du(t), e);
}
function r0(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var n0 = Object.prototype, o0 = n0.hasOwnProperty;
function i0(e) {
  if (!os(e))
    return r0(e);
  var t = uu(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !o0.call(e, n)) || r.push(n);
  return r;
}
function fu(e) {
  return qh(e) ? Lh(e, !0) : i0(e);
}
function s0(e, t) {
  return e && Oa(t, fu(t), e);
}
var jh = typeof exports == "object" && exports && !exports.nodeType && exports, Id = jh && typeof module == "object" && module && !module.nodeType && module, a0 = Id && Id.exports === jh, Dd = a0 ? $r.Buffer : void 0, $d = Dd ? Dd.allocUnsafe : void 0;
function l0(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = $d ? $d(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Bh(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function c0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[o++] = a);
  }
  return s;
}
function Vh() {
  return [];
}
var u0 = Object.prototype, d0 = u0.propertyIsEnumerable, kd = Object.getOwnPropertySymbols, pu = kd ? function(e) {
  return e == null ? [] : (e = Object(e), c0(kd(e), function(t) {
    return d0.call(e, t);
  }));
} : Vh;
function f0(e, t) {
  return Oa(e, pu(e), t);
}
function zh(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var p0 = Object.getOwnPropertySymbols, Uh = p0 ? function(e) {
  for (var t = []; e; )
    zh(t, pu(e)), e = lu(e);
  return t;
} : Vh;
function h0(e, t) {
  return Oa(e, Uh(e), t);
}
function Gh(e, t, r) {
  var n = t(e);
  return is(e) ? n : zh(n, r(e));
}
function m0(e) {
  return Gh(e, du, pu);
}
function y0(e) {
  return Gh(e, fu, Uh);
}
var Yl = ro($r, "DataView"), Ql = ro($r, "Promise"), Xl = ro($r, "Set"), Jl = ro($r, "WeakMap"), Md = "[object Map]", g0 = "[object Object]", Fd = "[object Promise]", Ld = "[object Set]", qd = "[object WeakMap]", jd = "[object DataView]", b0 = to(Yl), v0 = to(Mi), E0 = to(Ql), S0 = to(Xl), T0 = to(Jl), Lr = Zn;
(Yl && Lr(new Yl(new ArrayBuffer(1))) != jd || Mi && Lr(new Mi()) != Md || Ql && Lr(Ql.resolve()) != Fd || Xl && Lr(new Xl()) != Ld || Jl && Lr(new Jl()) != qd) && (Lr = function(e) {
  var t = Zn(e), r = t == g0 ? e.constructor : void 0, n = r ? to(r) : "";
  if (n)
    switch (n) {
      case b0:
        return jd;
      case v0:
        return Md;
      case E0:
        return Fd;
      case S0:
        return Ld;
      case T0:
        return qd;
    }
  return t;
});
var C0 = Object.prototype, O0 = C0.hasOwnProperty;
function x0(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && O0.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Bd = $r.Uint8Array;
function hu(e) {
  var t = new e.constructor(e.byteLength);
  return new Bd(t).set(new Bd(e)), t;
}
function w0(e, t) {
  var r = t ? hu(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var R0 = /\w*$/;
function _0(e) {
  var t = new e.constructor(e.source, R0.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Vd = pn ? pn.prototype : void 0, zd = Vd ? Vd.valueOf : void 0;
function N0(e) {
  return zd ? Object(zd.call(e)) : {};
}
function A0(e, t) {
  var r = t ? hu(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var P0 = "[object Boolean]", I0 = "[object Date]", D0 = "[object Map]", $0 = "[object Number]", k0 = "[object RegExp]", M0 = "[object Set]", F0 = "[object String]", L0 = "[object Symbol]", q0 = "[object ArrayBuffer]", j0 = "[object DataView]", B0 = "[object Float32Array]", V0 = "[object Float64Array]", z0 = "[object Int8Array]", U0 = "[object Int16Array]", G0 = "[object Int32Array]", W0 = "[object Uint8Array]", H0 = "[object Uint8ClampedArray]", K0 = "[object Uint16Array]", Y0 = "[object Uint32Array]";
function Q0(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case q0:
      return hu(e);
    case P0:
    case I0:
      return new n(+e);
    case j0:
      return w0(e, r);
    case B0:
    case V0:
    case z0:
    case U0:
    case G0:
    case W0:
    case H0:
    case K0:
    case Y0:
      return A0(e, r);
    case D0:
      return new n();
    case $0:
    case F0:
      return new n(e);
    case k0:
      return _0(e);
    case M0:
      return new n();
    case L0:
      return N0(e);
  }
}
var Ud = Object.create, X0 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!os(t))
      return {};
    if (Ud)
      return Ud(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function J0(e) {
  return typeof e.constructor == "function" && !uu(e) ? X0(lu(e)) : {};
}
var Z0 = "[object Map]";
function eS(e) {
  return eo(e) && Lr(e) == Z0;
}
var Gd = qo && qo.isMap, tS = Gd ? cu(Gd) : eS, rS = "[object Set]";
function nS(e) {
  return eo(e) && Lr(e) == rS;
}
var Wd = qo && qo.isSet, oS = Wd ? cu(Wd) : nS, iS = 1, sS = 2, aS = 4, Wh = "[object Arguments]", lS = "[object Array]", cS = "[object Boolean]", uS = "[object Date]", dS = "[object Error]", Hh = "[object Function]", fS = "[object GeneratorFunction]", pS = "[object Map]", hS = "[object Number]", Kh = "[object Object]", mS = "[object RegExp]", yS = "[object Set]", gS = "[object String]", bS = "[object Symbol]", vS = "[object WeakMap]", ES = "[object ArrayBuffer]", SS = "[object DataView]", TS = "[object Float32Array]", CS = "[object Float64Array]", OS = "[object Int8Array]", xS = "[object Int16Array]", wS = "[object Int32Array]", RS = "[object Uint8Array]", _S = "[object Uint8ClampedArray]", NS = "[object Uint16Array]", AS = "[object Uint32Array]", Xe = {};
Xe[Wh] = Xe[lS] = Xe[ES] = Xe[SS] = Xe[cS] = Xe[uS] = Xe[TS] = Xe[CS] = Xe[OS] = Xe[xS] = Xe[wS] = Xe[pS] = Xe[hS] = Xe[Kh] = Xe[mS] = Xe[yS] = Xe[gS] = Xe[bS] = Xe[RS] = Xe[_S] = Xe[NS] = Xe[AS] = !0;
Xe[dS] = Xe[Hh] = Xe[vS] = !1;
function Ri(e, t, r, n, o, s) {
  var a, l = t & iS, c = t & sS, u = t & aS;
  if (a !== void 0)
    return a;
  if (!os(e))
    return e;
  var d = is(e);
  if (d) {
    if (a = x0(e), !l)
      return Bh(e, a);
  } else {
    var f = Lr(e), h = f == Hh || f == fS;
    if (kh(e))
      return l0(e, l);
    if (f == Kh || f == Wh || h && !o) {
      if (a = c || h ? {} : J0(e), !l)
        return c ? h0(e, s0(a, e)) : f0(e, t0(a, e));
    } else {
      if (!Xe[f])
        return o ? e : {};
      a = Q0(e, f, l);
    }
  }
  s || (s = new Ho());
  var b = s.get(e);
  if (b)
    return b;
  s.set(e, a), oS(e) ? e.forEach(function(m) {
    a.add(Ri(m, t, r, m, e, s));
  }) : tS(e) && e.forEach(function(m, T) {
    a.set(T, Ri(m, t, r, T, e, s));
  });
  var y = u ? c ? y0 : m0 : c ? fu : du, g = d ? void 0 : y(e);
  return sE(g || e, function(m, T) {
    g && (T = m, m = e[T]), Ih(a, T, Ri(m, t, r, T, e, s));
  }), a;
}
var PS = 1, IS = 4;
function bi(e) {
  return Ri(e, PS | IS);
}
var Hd = Array.isArray, Kd = Object.keys, DS = Object.prototype.hasOwnProperty, $S = typeof Element < "u";
function Zl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var r = Hd(e), n = Hd(t), o, s, a;
    if (r && n) {
      if (s = e.length, s != t.length) return !1;
      for (o = s; o-- !== 0; )
        if (!Zl(e[o], t[o])) return !1;
      return !0;
    }
    if (r != n) return !1;
    var l = e instanceof Date, c = t instanceof Date;
    if (l != c) return !1;
    if (l && c) return e.getTime() == t.getTime();
    var u = e instanceof RegExp, d = t instanceof RegExp;
    if (u != d) return !1;
    if (u && d) return e.toString() == t.toString();
    var f = Kd(e);
    if (s = f.length, s !== Kd(t).length)
      return !1;
    for (o = s; o-- !== 0; )
      if (!DS.call(t, f[o])) return !1;
    if ($S && e instanceof Element && t instanceof Element)
      return e === t;
    for (o = s; o-- !== 0; )
      if (a = f[o], !(a === "_owner" && e.$$typeof) && !Zl(e[a], t[a]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var kS = function(t, r) {
  try {
    return Zl(t, r);
  } catch (n) {
    if (n.message && n.message.match(/stack|recursion/i) || n.number === -2146828260)
      return console.warn("Warning: react-fast-compare does not handle circular references.", n.name, n.message), !1;
    throw n;
  }
};
const nn = /* @__PURE__ */ xa(kS);
var MS = process.env.NODE_ENV === "production";
function Lt(e, t) {
  if (!MS) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var FS = 4;
function Yd(e) {
  return Ri(e, FS);
}
function Yh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var LS = "[object Symbol]";
function mu(e) {
  return typeof e == "symbol" || eo(e) && Zn(e) == LS;
}
var qS = "Expected a function";
function yu(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(qS);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(o))
      return s.get(o);
    var a = e.apply(this, n);
    return r.cache = s.set(o, a) || s, a;
  };
  return r.cache = new (yu.Cache || vn)(), r;
}
yu.Cache = vn;
var jS = 500;
function BS(e) {
  var t = yu(e, function(n) {
    return r.size === jS && r.clear(), n;
  }), r = t.cache;
  return t;
}
var VS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zS = /\\(\\)?/g, US = BS(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(VS, function(r, n, o, s) {
    t.push(o ? s.replace(zS, "$1") : n || r);
  }), t;
}), GS = 1 / 0;
function WS(e) {
  if (typeof e == "string" || mu(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -GS ? "-0" : t;
}
var HS = 1 / 0, Qd = pn ? pn.prototype : void 0, Xd = Qd ? Qd.toString : void 0;
function Qh(e) {
  if (typeof e == "string")
    return e;
  if (is(e))
    return Yh(e, Qh) + "";
  if (mu(e))
    return Xd ? Xd.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -HS ? "-0" : t;
}
function KS(e) {
  return e == null ? "" : Qh(e);
}
function Xh(e) {
  return is(e) ? Yh(e, WS) : mu(e) ? [e] : Bh(US(KS(e)));
}
var ec = { exports: {} }, Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jd;
function YS() {
  if (Jd) return Me;
  Jd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function v(S) {
    if (typeof S == "object" && S !== null) {
      var R = S.$$typeof;
      switch (R) {
        case t:
          switch (S = S.type, S) {
            case c:
            case u:
            case n:
            case s:
            case o:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case l:
                case d:
                case y:
                case b:
                case a:
                  return S;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function O(S) {
    return v(S) === u;
  }
  return Me.AsyncMode = c, Me.ConcurrentMode = u, Me.ContextConsumer = l, Me.ContextProvider = a, Me.Element = t, Me.ForwardRef = d, Me.Fragment = n, Me.Lazy = y, Me.Memo = b, Me.Portal = r, Me.Profiler = s, Me.StrictMode = o, Me.Suspense = f, Me.isAsyncMode = function(S) {
    return O(S) || v(S) === c;
  }, Me.isConcurrentMode = O, Me.isContextConsumer = function(S) {
    return v(S) === l;
  }, Me.isContextProvider = function(S) {
    return v(S) === a;
  }, Me.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Me.isForwardRef = function(S) {
    return v(S) === d;
  }, Me.isFragment = function(S) {
    return v(S) === n;
  }, Me.isLazy = function(S) {
    return v(S) === y;
  }, Me.isMemo = function(S) {
    return v(S) === b;
  }, Me.isPortal = function(S) {
    return v(S) === r;
  }, Me.isProfiler = function(S) {
    return v(S) === s;
  }, Me.isStrictMode = function(S) {
    return v(S) === o;
  }, Me.isSuspense = function(S) {
    return v(S) === f;
  }, Me.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === u || S === s || S === o || S === f || S === h || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === b || S.$$typeof === a || S.$$typeof === l || S.$$typeof === d || S.$$typeof === m || S.$$typeof === T || S.$$typeof === x || S.$$typeof === g);
  }, Me.typeOf = v, Me;
}
var Fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd;
function QS() {
  return Zd || (Zd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function v(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === u || D === s || D === o || D === f || D === h || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === b || D.$$typeof === a || D.$$typeof === l || D.$$typeof === d || D.$$typeof === m || D.$$typeof === T || D.$$typeof === x || D.$$typeof === g);
    }
    function O(D) {
      if (typeof D == "object" && D !== null) {
        var ve = D.$$typeof;
        switch (ve) {
          case t:
            var K = D.type;
            switch (K) {
              case c:
              case u:
              case n:
              case s:
              case o:
              case f:
                return K;
              default:
                var Te = K && K.$$typeof;
                switch (Te) {
                  case l:
                  case d:
                  case y:
                  case b:
                  case a:
                    return Te;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var S = c, R = u, w = l, A = a, E = t, P = d, k = n, q = y, G = b, z = r, V = s, U = o, Q = f, B = !1;
    function X(D) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(D) || O(D) === c;
    }
    function F(D) {
      return O(D) === u;
    }
    function W(D) {
      return O(D) === l;
    }
    function se(D) {
      return O(D) === a;
    }
    function re(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function J(D) {
      return O(D) === d;
    }
    function ae(D) {
      return O(D) === n;
    }
    function Y(D) {
      return O(D) === y;
    }
    function oe(D) {
      return O(D) === b;
    }
    function ce(D) {
      return O(D) === r;
    }
    function ue(D) {
      return O(D) === s;
    }
    function te(D) {
      return O(D) === o;
    }
    function fe(D) {
      return O(D) === f;
    }
    Fe.AsyncMode = S, Fe.ConcurrentMode = R, Fe.ContextConsumer = w, Fe.ContextProvider = A, Fe.Element = E, Fe.ForwardRef = P, Fe.Fragment = k, Fe.Lazy = q, Fe.Memo = G, Fe.Portal = z, Fe.Profiler = V, Fe.StrictMode = U, Fe.Suspense = Q, Fe.isAsyncMode = X, Fe.isConcurrentMode = F, Fe.isContextConsumer = W, Fe.isContextProvider = se, Fe.isElement = re, Fe.isForwardRef = J, Fe.isFragment = ae, Fe.isLazy = Y, Fe.isMemo = oe, Fe.isPortal = ce, Fe.isProfiler = ue, Fe.isStrictMode = te, Fe.isSuspense = fe, Fe.isValidElementType = v, Fe.typeOf = O;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? ec.exports = YS() : ec.exports = QS();
var XS = ec.exports, gu = XS, JS = {
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
}, ZS = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, eT = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Jh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, bu = {};
bu[gu.ForwardRef] = eT;
bu[gu.Memo] = Jh;
function ef(e) {
  return gu.isMemo(e) ? Jh : bu[e.$$typeof] || JS;
}
var tT = Object.defineProperty, rT = Object.getOwnPropertyNames, tf = Object.getOwnPropertySymbols, nT = Object.getOwnPropertyDescriptor, oT = Object.getPrototypeOf, rf = Object.prototype;
function Zh(e, t, r) {
  if (typeof t != "string") {
    if (rf) {
      var n = oT(t);
      n && n !== rf && Zh(e, n, r);
    }
    var o = rT(t);
    tf && (o = o.concat(tf(t)));
    for (var s = ef(e), a = ef(t), l = 0; l < o.length; ++l) {
      var c = o[l];
      if (!ZS[c] && !(r && r[c]) && !(a && a[c]) && !(s && s[c])) {
        var u = nT(t, c);
        try {
          tT(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var iT = Zh;
const sT = /* @__PURE__ */ xa(iT);
function ct() {
  return ct = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ct.apply(this, arguments);
}
function aT(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function vu(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function nf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
var wa = /* @__PURE__ */ jb(void 0);
wa.displayName = "FormikContext";
var lT = wa.Provider, cT = wa.Consumer;
function sr() {
  var e = Ch(wa);
  return e || (process.env.NODE_ENV !== "production" ? Lt(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : Lt()), e;
}
var of = function(t) {
  return Array.isArray(t) && t.length === 0;
}, $t = function(t) {
  return typeof t == "function";
}, Ko = function(t) {
  return t !== null && typeof t == "object";
}, uT = function(t) {
  return String(Math.floor(Number(t))) === t;
}, bl = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, em = function(t) {
  return Sa.count(t) === 0;
}, vl = function(t) {
  return Ko(t) && $t(t.then);
};
function dT(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bt(e, t, r, n) {
  n === void 0 && (n = 0);
  for (var o = Xh(t); e && n < o.length; )
    e = e[o[n++]];
  return n !== o.length && !e || e === void 0 ? r : e;
}
function Pr(e, t, r) {
  for (var n = Yd(e), o = n, s = 0, a = Xh(t); s < a.length - 1; s++) {
    var l = a[s], c = bt(e, a.slice(0, s + 1));
    if (c && (Ko(c) || Array.isArray(c)))
      o = o[l] = Yd(c);
    else {
      var u = a[s + 1];
      o = o[l] = uT(u) && Number(u) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : o)[a[s]] === r ? e : (r === void 0 ? delete o[a[s]] : o[a[s]] = r, s === 0 && r === void 0 && delete n[a[s]], n);
}
function tm(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var o = 0, s = Object.keys(e); o < s.length; o++) {
    var a = s[o], l = e[a];
    Ko(l) ? r.get(l) || (r.set(l, !0), n[a] = Array.isArray(l) ? [] : {}, tm(l, t, r, n[a])) : n[a] = t;
  }
  return n;
}
function fT(e, t) {
  switch (t.type) {
    case "SET_VALUES":
      return ct({}, e, {
        values: t.payload
      });
    case "SET_TOUCHED":
      return ct({}, e, {
        touched: t.payload
      });
    case "SET_ERRORS":
      return nn(e.errors, t.payload) ? e : ct({}, e, {
        errors: t.payload
      });
    case "SET_STATUS":
      return ct({}, e, {
        status: t.payload
      });
    case "SET_ISSUBMITTING":
      return ct({}, e, {
        isSubmitting: t.payload
      });
    case "SET_ISVALIDATING":
      return ct({}, e, {
        isValidating: t.payload
      });
    case "SET_FIELD_VALUE":
      return ct({}, e, {
        values: Pr(e.values, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return ct({}, e, {
        touched: Pr(e.touched, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_ERROR":
      return ct({}, e, {
        errors: Pr(e.errors, t.payload.field, t.payload.value)
      });
    case "RESET_FORM":
      return ct({}, e, t.payload);
    case "SET_FORMIK_STATE":
      return t.payload(e);
    case "SUBMIT_ATTEMPT":
      return ct({}, e, {
        touched: tm(e.values, !0),
        isSubmitting: !0,
        submitCount: e.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return ct({}, e, {
        isSubmitting: !1
      });
    case "SUBMIT_SUCCESS":
      return ct({}, e, {
        isSubmitting: !1
      });
    default:
      return e;
  }
}
var Cn = {}, Os = {};
function pT(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, o = n === void 0 ? !0 : n, s = e.validateOnMount, a = s === void 0 ? !1 : s, l = e.isInitialValid, c = e.enableReinitialize, u = c === void 0 ? !1 : c, d = e.onSubmit, f = vu(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), h = ct({
    validateOnChange: r,
    validateOnBlur: o,
    validateOnMount: a,
    onSubmit: d
  }, f), b = Zr(h.initialValues), y = Zr(h.initialErrors || Cn), g = Zr(h.initialTouched || Os), m = Zr(h.initialStatus), T = Zr(!1), x = Zr({});
  process.env.NODE_ENV !== "production" && vr(function() {
    typeof l > "u" || (process.env.NODE_ENV !== "production" ? Lt(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : Lt());
  }, []), vr(function() {
    return T.current = !0, function() {
      T.current = !1;
    };
  }, []);
  var v = Bb(0), O = v[1], S = Zr({
    values: bi(h.initialValues),
    errors: bi(h.initialErrors) || Cn,
    touched: bi(h.initialTouched) || Os,
    status: bi(h.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), R = S.current, w = ut(function($) {
    var j = S.current;
    S.current = fT(j, $), j !== S.current && O(function(ne) {
      return ne + 1;
    });
  }, []), A = ut(function($, j) {
    return new Promise(function(ne, pe) {
      var ge = h.validate($, j);
      ge == null ? ne(Cn) : vl(ge) ? ge.then(function(we) {
        ne(we || Cn);
      }, function(we) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", we), pe(we);
      }) : ne(ge);
    });
  }, [h.validate]), E = ut(function($, j) {
    var ne = h.validationSchema, pe = $t(ne) ? ne(j) : ne, ge = j && pe.validateAt ? pe.validateAt(j, $) : mT($, pe);
    return new Promise(function(we, Ze) {
      ge.then(function() {
        we(Cn);
      }, function(St) {
        St.name === "ValidationError" ? we(hT(St)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", St), Ze(St));
      });
    });
  }, [h.validationSchema]), P = ut(function($, j) {
    return new Promise(function(ne) {
      return ne(x.current[$].validate(j));
    });
  }, []), k = ut(function($) {
    var j = Object.keys(x.current).filter(function(pe) {
      return $t(x.current[pe].validate);
    }), ne = j.length > 0 ? j.map(function(pe) {
      return P(pe, bt($, pe));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(ne).then(function(pe) {
      return pe.reduce(function(ge, we, Ze) {
        return we === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || we && (ge = Pr(ge, j[Ze], we)), ge;
      }, {});
    });
  }, [P]), q = ut(function($) {
    return Promise.all([k($), h.validationSchema ? E($) : {}, h.validate ? A($) : {}]).then(function(j) {
      var ne = j[0], pe = j[1], ge = j[2], we = Kl.all([ne, pe, ge], {
        arrayMerge: yT
      });
      return we;
    });
  }, [h.validate, h.validationSchema, k, A, E]), G = Zt(function($) {
    return $ === void 0 && ($ = R.values), w({
      type: "SET_ISVALIDATING",
      payload: !0
    }), q($).then(function(j) {
      return T.current && (w({
        type: "SET_ISVALIDATING",
        payload: !1
      }), w({
        type: "SET_ERRORS",
        payload: j
      })), j;
    });
  });
  vr(function() {
    a && T.current === !0 && nn(b.current, h.initialValues) && G(b.current);
  }, [a, G]);
  var z = ut(function($) {
    var j = $ && $.values ? $.values : b.current, ne = $ && $.errors ? $.errors : y.current ? y.current : h.initialErrors || {}, pe = $ && $.touched ? $.touched : g.current ? g.current : h.initialTouched || {}, ge = $ && $.status ? $.status : m.current ? m.current : h.initialStatus;
    b.current = j, y.current = ne, g.current = pe, m.current = ge;
    var we = function() {
      w({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!$ && !!$.isSubmitting,
          errors: ne,
          touched: pe,
          status: ge,
          values: j,
          isValidating: !!$ && !!$.isValidating,
          submitCount: $ && $.submitCount && typeof $.submitCount == "number" ? $.submitCount : 0
        }
      });
    };
    if (h.onReset) {
      var Ze = h.onReset(R.values, ve);
      vl(Ze) ? Ze.then(we) : we();
    } else
      we();
  }, [h.initialErrors, h.initialStatus, h.initialTouched, h.onReset]);
  vr(function() {
    T.current === !0 && !nn(b.current, h.initialValues) && u && (b.current = h.initialValues, z(), a && G(b.current));
  }, [u, h.initialValues, z, a, G]), vr(function() {
    u && T.current === !0 && !nn(y.current, h.initialErrors) && (y.current = h.initialErrors || Cn, w({
      type: "SET_ERRORS",
      payload: h.initialErrors || Cn
    }));
  }, [u, h.initialErrors]), vr(function() {
    u && T.current === !0 && !nn(g.current, h.initialTouched) && (g.current = h.initialTouched || Os, w({
      type: "SET_TOUCHED",
      payload: h.initialTouched || Os
    }));
  }, [u, h.initialTouched]), vr(function() {
    u && T.current === !0 && !nn(m.current, h.initialStatus) && (m.current = h.initialStatus, w({
      type: "SET_STATUS",
      payload: h.initialStatus
    }));
  }, [u, h.initialStatus, h.initialTouched]);
  var V = Zt(function($) {
    if (x.current[$] && $t(x.current[$].validate)) {
      var j = bt(R.values, $), ne = x.current[$].validate(j);
      return vl(ne) ? (w({
        type: "SET_ISVALIDATING",
        payload: !0
      }), ne.then(function(pe) {
        return pe;
      }).then(function(pe) {
        w({
          type: "SET_FIELD_ERROR",
          payload: {
            field: $,
            value: pe
          }
        }), w({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (w({
        type: "SET_FIELD_ERROR",
        payload: {
          field: $,
          value: ne
        }
      }), Promise.resolve(ne));
    } else if (h.validationSchema)
      return w({
        type: "SET_ISVALIDATING",
        payload: !0
      }), E(R.values, $).then(function(pe) {
        return pe;
      }).then(function(pe) {
        w({
          type: "SET_FIELD_ERROR",
          payload: {
            field: $,
            value: bt(pe, $)
          }
        }), w({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), U = ut(function($, j) {
    var ne = j.validate;
    x.current[$] = {
      validate: ne
    };
  }, []), Q = ut(function($) {
    delete x.current[$];
  }, []), B = Zt(function($, j) {
    w({
      type: "SET_TOUCHED",
      payload: $
    });
    var ne = j === void 0 ? o : j;
    return ne ? G(R.values) : Promise.resolve();
  }), X = ut(function($) {
    w({
      type: "SET_ERRORS",
      payload: $
    });
  }, []), F = Zt(function($, j) {
    var ne = $t($) ? $(R.values) : $;
    w({
      type: "SET_VALUES",
      payload: ne
    });
    var pe = j === void 0 ? r : j;
    return pe ? G(ne) : Promise.resolve();
  }), W = ut(function($, j) {
    w({
      type: "SET_FIELD_ERROR",
      payload: {
        field: $,
        value: j
      }
    });
  }, []), se = Zt(function($, j, ne) {
    w({
      type: "SET_FIELD_VALUE",
      payload: {
        field: $,
        value: j
      }
    });
    var pe = ne === void 0 ? r : ne;
    return pe ? G(Pr(R.values, $, j)) : Promise.resolve();
  }), re = ut(function($, j) {
    var ne = j, pe = $, ge;
    if (!bl($)) {
      $.persist && $.persist();
      var we = $.target ? $.target : $.currentTarget, Ze = we.type, St = we.name, ur = we.id, De = we.value, Qr = we.checked, Tn = we.outerHTML, ai = we.options, me = we.multiple;
      ne = j || St || ur, !ne && process.env.NODE_ENV !== "production" && sf({
        htmlContent: Tn,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), pe = /number|range/.test(Ze) ? (ge = parseFloat(De), isNaN(ge) ? "" : ge) : /checkbox/.test(Ze) ? bT(bt(R.values, ne), Qr, De) : ai && me ? gT(ai) : De;
    }
    ne && se(ne, pe);
  }, [se, R.values]), J = Zt(function($) {
    if (bl($))
      return function(j) {
        return re(j, $);
      };
    re($);
  }), ae = Zt(function($, j, ne) {
    j === void 0 && (j = !0), w({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: $,
        value: j
      }
    });
    var pe = ne === void 0 ? o : ne;
    return pe ? G(R.values) : Promise.resolve();
  }), Y = ut(function($, j) {
    $.persist && $.persist();
    var ne = $.target, pe = ne.name, ge = ne.id, we = ne.outerHTML, Ze = j || pe || ge;
    !Ze && process.env.NODE_ENV !== "production" && sf({
      htmlContent: we,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), ae(Ze, !0);
  }, [ae]), oe = Zt(function($) {
    if (bl($))
      return function(j) {
        return Y(j, $);
      };
    Y($);
  }), ce = ut(function($) {
    $t($) ? w({
      type: "SET_FORMIK_STATE",
      payload: $
    }) : w({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return $;
      }
    });
  }, []), ue = ut(function($) {
    w({
      type: "SET_STATUS",
      payload: $
    });
  }, []), te = ut(function($) {
    w({
      type: "SET_ISSUBMITTING",
      payload: $
    });
  }, []), fe = Zt(function() {
    return w({
      type: "SUBMIT_ATTEMPT"
    }), G().then(function($) {
      var j = $ instanceof Error, ne = !j && Object.keys($).length === 0;
      if (ne) {
        var pe;
        try {
          if (pe = K(), pe === void 0)
            return;
        } catch (ge) {
          throw ge;
        }
        return Promise.resolve(pe).then(function(ge) {
          return T.current && w({
            type: "SUBMIT_SUCCESS"
          }), ge;
        }).catch(function(ge) {
          if (T.current)
            throw w({
              type: "SUBMIT_FAILURE"
            }), ge;
        });
      } else if (T.current && (w({
        type: "SUBMIT_FAILURE"
      }), j))
        throw $;
    });
  }), D = Zt(function($) {
    if ($ && $.preventDefault && $t($.preventDefault) && $.preventDefault(), $ && $.stopPropagation && $t($.stopPropagation) && $.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var j = dT();
      j !== null && j instanceof HTMLButtonElement && (j.attributes && j.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? Lt(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : Lt()));
    }
    fe().catch(function(ne) {
      console.warn("Warning: An unhandled error was caught from submitForm()", ne);
    });
  }), ve = {
    resetForm: z,
    validateForm: G,
    validateField: V,
    setErrors: X,
    setFieldError: W,
    setFieldTouched: ae,
    setFieldValue: se,
    setStatus: ue,
    setSubmitting: te,
    setTouched: B,
    setValues: F,
    setFormikState: ce,
    submitForm: fe
  }, K = Zt(function() {
    return d(R.values, ve);
  }), Te = Zt(function($) {
    $ && $.preventDefault && $t($.preventDefault) && $.preventDefault(), $ && $.stopPropagation && $t($.stopPropagation) && $.stopPropagation(), z();
  }), mt = ut(function($) {
    return {
      value: bt(R.values, $),
      error: bt(R.errors, $),
      touched: !!bt(R.touched, $),
      initialValue: bt(b.current, $),
      initialTouched: !!bt(g.current, $),
      initialError: bt(y.current, $)
    };
  }, [R.errors, R.touched, R.values]), Et = ut(function($) {
    return {
      setValue: function(ne, pe) {
        return se($, ne, pe);
      },
      setTouched: function(ne, pe) {
        return ae($, ne, pe);
      },
      setError: function(ne) {
        return W($, ne);
      }
    };
  }, [se, ae, W]), yt = ut(function($) {
    var j = Ko($), ne = j ? $.name : $, pe = bt(R.values, ne), ge = {
      name: ne,
      value: pe,
      onChange: J,
      onBlur: oe
    };
    if (j) {
      var we = $.type, Ze = $.value, St = $.as, ur = $.multiple;
      we === "checkbox" ? Ze === void 0 ? ge.checked = !!pe : (ge.checked = !!(Array.isArray(pe) && ~pe.indexOf(Ze)), ge.value = Ze) : we === "radio" ? (ge.checked = pe === Ze, ge.value = Ze) : St === "select" && ur && (ge.value = ge.value || [], ge.multiple = !0);
    }
    return ge;
  }, [oe, J, R.values]), rt = Nn(function() {
    return !nn(b.current, R.values);
  }, [b.current, R.values]), Jt = Nn(function() {
    return typeof l < "u" ? rt ? R.errors && Object.keys(R.errors).length === 0 : l !== !1 && $t(l) ? l(h) : l : R.errors && Object.keys(R.errors).length === 0;
  }, [l, rt, R.errors, h]), We = ct({}, R, {
    initialValues: b.current,
    initialErrors: y.current,
    initialTouched: g.current,
    initialStatus: m.current,
    handleBlur: oe,
    handleChange: J,
    handleReset: Te,
    handleSubmit: D,
    resetForm: z,
    setErrors: X,
    setFormikState: ce,
    setFieldTouched: ae,
    setFieldValue: se,
    setFieldError: W,
    setStatus: ue,
    setSubmitting: te,
    setTouched: B,
    setValues: F,
    submitForm: fe,
    validateForm: G,
    validateField: V,
    isValid: Jt,
    dirty: rt,
    unregisterField: Q,
    registerField: U,
    getFieldProps: yt,
    getFieldMeta: mt,
    getFieldHelpers: Et,
    validateOnBlur: o,
    validateOnChange: r,
    validateOnMount: a
  });
  return We;
}
function Ra(e) {
  var t = pT(e), r = e.component, n = e.children, o = e.render, s = e.innerRef;
  return qb(s, function() {
    return t;
  }), process.env.NODE_ENV !== "production" && vr(function() {
    e.render && (process.env.NODE_ENV !== "production" ? Lt(!1, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : Lt());
  }, []), Gn(lT, {
    value: t
  }, r ? Gn(r, t) : o ? o(t) : n ? $t(n) ? n(t) : em(n) ? null : Sa.only(n) : null);
}
function sf(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function hT(e) {
  var t = {};
  if (e.inner) {
    if (e.inner.length === 0)
      return Pr(t, e.path, e.message);
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
      bt(t, a.path) || (t = Pr(t, a.path, a.message));
    }
  }
  return t;
}
function mT(e, t, r, n) {
  r === void 0 && (r = !1);
  var o = tc(e);
  return t[r ? "validateSync" : "validate"](o, {
    abortEarly: !1,
    context: o
  });
}
function tc(e) {
  var t = Array.isArray(e) ? [] : {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      var n = String(r);
      Array.isArray(e[n]) === !0 ? t[n] = e[n].map(function(o) {
        return Array.isArray(o) === !0 || xd(o) ? tc(o) : o !== "" ? o : void 0;
      }) : xd(e[n]) ? t[n] = tc(e[n]) : t[n] = e[n] !== "" ? e[n] : void 0;
    }
  return t;
}
function yT(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, a) {
    if (typeof n[a] > "u") {
      var l = r.clone !== !1, c = l && r.isMergeableObject(s);
      n[a] = c ? Kl(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[a] = Kl(e[a], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function gT(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function bT(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], o = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), o = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !o ? n.concat(r) : o ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var vT = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Vb : vr;
function Zt(e) {
  var t = Zr(e);
  return vT(function() {
    t.current = e;
  }), ut(function() {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return t.current.apply(void 0, n);
  }, []);
}
function ss(e) {
  var t = sr(), r = t.getFieldProps, n = t.getFieldMeta, o = t.getFieldHelpers, s = t.registerField, a = t.unregisterField, l = Ko(e), c = l ? e : {
    name: e
  }, u = c.name, d = c.validate;
  vr(function() {
    return u && s(u, {
      validate: d
    }), function() {
      u && a(u);
    };
  }, [s, a, u, d]), process.env.NODE_ENV !== "production" && (t || (process.env.NODE_ENV !== "production" ? Lt(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : Lt())), u || (process.env.NODE_ENV !== "production" ? Lt(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : Lt());
  var f = Nn(function() {
    return o(u);
  }, [o, u]);
  return [r(c), n(u), f];
}
var ET = /* @__PURE__ */ Oh(function(e, t) {
  var r = e.action, n = vu(e, ["action"]), o = r ?? "#", s = sr(), a = s.handleReset, l = s.handleSubmit;
  return Gn("form", ct({
    onSubmit: l,
    ref: t,
    onReset: a,
    action: o
  }, n));
});
ET.displayName = "Form";
function ST(e) {
  var t = function(o) {
    return Gn(cT, null, function(s) {
      return s || (process.env.NODE_ENV !== "production" ? Lt(!1, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + e.name) : Lt()), Gn(e, ct({}, o, {
        formik: s
      }));
    });
  }, r = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
  return t.WrappedComponent = e, t.displayName = "FormikConnect(" + r + ")", sT(
    t,
    e
    // cast type to ComponentClass (even if SFC)
  );
}
var TT = function(t, r, n) {
  var o = Hn(t), s = o[r];
  return o.splice(r, 1), o.splice(n, 0, s), o;
}, CT = function(t, r, n) {
  var o = Hn(t), s = o[r];
  return o[r] = o[n], o[n] = s, o;
}, El = function(t, r, n) {
  var o = Hn(t);
  return o.splice(r, 0, n), o;
}, OT = function(t, r, n) {
  var o = Hn(t);
  return o[r] = n, o;
}, Hn = function(t) {
  if (t) {
    if (Array.isArray(t))
      return [].concat(t);
    var r = Object.keys(t).map(function(n) {
      return parseInt(n);
    }).reduce(function(n, o) {
      return o > n ? o : n;
    }, 0);
    return Array.from(ct({}, t, {
      length: r + 1
    }));
  } else return [];
}, af = function(t, r) {
  var n = typeof t == "function" ? t : r;
  return function(o) {
    if (Array.isArray(o) || Ko(o)) {
      var s = Hn(o);
      return n(s);
    }
    return o;
  };
}, rm = /* @__PURE__ */ function(e) {
  aT(t, e);
  function t(n) {
    var o;
    return o = e.call(this, n) || this, o.updateArrayField = function(s, a, l) {
      var c = o.props, u = c.name, d = c.formik.setFormikState;
      d(function(f) {
        var h = af(l, s), b = af(a, s), y = Pr(f.values, u, s(bt(f.values, u))), g = l ? h(bt(f.errors, u)) : void 0, m = a ? b(bt(f.touched, u)) : void 0;
        return of(g) && (g = void 0), of(m) && (m = void 0), ct({}, f, {
          values: y,
          errors: l ? Pr(f.errors, u, g) : f.errors,
          touched: a ? Pr(f.touched, u, m) : f.touched
        });
      });
    }, o.push = function(s) {
      return o.updateArrayField(function(a) {
        return [].concat(Hn(a), [bi(s)]);
      }, !1, !1);
    }, o.handlePush = function(s) {
      return function() {
        return o.push(s);
      };
    }, o.swap = function(s, a) {
      return o.updateArrayField(function(l) {
        return CT(l, s, a);
      }, !0, !0);
    }, o.handleSwap = function(s, a) {
      return function() {
        return o.swap(s, a);
      };
    }, o.move = function(s, a) {
      return o.updateArrayField(function(l) {
        return TT(l, s, a);
      }, !0, !0);
    }, o.handleMove = function(s, a) {
      return function() {
        return o.move(s, a);
      };
    }, o.insert = function(s, a) {
      return o.updateArrayField(function(l) {
        return El(l, s, a);
      }, function(l) {
        return El(l, s, null);
      }, function(l) {
        return El(l, s, null);
      });
    }, o.handleInsert = function(s, a) {
      return function() {
        return o.insert(s, a);
      };
    }, o.replace = function(s, a) {
      return o.updateArrayField(function(l) {
        return OT(l, s, a);
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
    }, o.remove = o.remove.bind(nf(o)), o.pop = o.pop.bind(nf(o)), o;
  }
  var r = t.prototype;
  return r.componentDidUpdate = function(o) {
    this.props.validateOnChange && this.props.formik.validateOnChange && !nn(bt(o.formik.values, o.name), bt(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
  }, r.remove = function(o) {
    var s;
    return this.updateArrayField(
      // so this gets call 3 times
      function(a) {
        var l = a ? Hn(a) : [];
        return s || (s = l[o]), $t(l.splice) && l.splice(o, 1), $t(l.every) && l.every(function(c) {
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
    }, s = this.props, a = s.component, l = s.render, c = s.children, u = s.name, d = s.formik, f = vu(d, ["validate", "validationSchema"]), h = ct({}, o, {
      form: f,
      name: u
    });
    return a ? Gn(a, h) : l ? l(h) : c ? typeof c == "function" ? c(h) : em(c) ? null : Sa.only(c) : null;
  }, t;
}(zb);
rm.defaultProps = {
  validateOnChange: !0
};
var Eu = /* @__PURE__ */ ST(rm);
const Li = {
  black: "#000",
  white: "#fff"
}, xn = {
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
}, ao = {
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
}, lo = {
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
}, co = {
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
}, uo = {
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
}, ui = {
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
}, xT = {
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
function Dr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const as = "$$material";
function Zs() {
  return Zs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zs.apply(null, arguments);
}
function nm(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var wT = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, RT = /* @__PURE__ */ nm(
  function(e) {
    return wT.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _T = !1;
function NT(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function AT(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var PT = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !_T : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(AT(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = NT(o);
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
}(), xt = "-ms-", ea = "-moz-", $e = "-webkit-", om = "comm", Su = "rule", Tu = "decl", IT = "@import", im = "@keyframes", DT = "@layer", $T = Math.abs, _a = String.fromCharCode, kT = Object.assign;
function MT(e, t) {
  return Ot(e, 0) ^ 45 ? (((t << 2 ^ Ot(e, 0)) << 2 ^ Ot(e, 1)) << 2 ^ Ot(e, 2)) << 2 ^ Ot(e, 3) : 0;
}
function sm(e) {
  return e.trim();
}
function FT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ke(e, t, r) {
  return e.replace(t, r);
}
function rc(e, t) {
  return e.indexOf(t);
}
function Ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function qi(e, t, r) {
  return e.slice(t, r);
}
function xr(e) {
  return e.length;
}
function Cu(e) {
  return e.length;
}
function xs(e, t) {
  return t.push(e), e;
}
function LT(e, t) {
  return e.map(t).join("");
}
var Na = 1, jo = 1, am = 0, Bt = 0, pt = 0, Yo = "";
function Aa(e, t, r, n, o, s, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: s, line: Na, column: jo, length: a, return: "" };
}
function di(e, t) {
  return kT(Aa("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function qT() {
  return pt;
}
function jT() {
  return pt = Bt > 0 ? Ot(Yo, --Bt) : 0, jo--, pt === 10 && (jo = 1, Na--), pt;
}
function Wt() {
  return pt = Bt < am ? Ot(Yo, Bt++) : 0, jo++, pt === 10 && (jo = 1, Na++), pt;
}
function Ir() {
  return Ot(Yo, Bt);
}
function js() {
  return Bt;
}
function ls(e, t) {
  return qi(Yo, e, t);
}
function ji(e) {
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
function lm(e) {
  return Na = jo = 1, am = xr(Yo = e), Bt = 0, [];
}
function cm(e) {
  return Yo = "", e;
}
function Bs(e) {
  return sm(ls(Bt - 1, nc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function BT(e) {
  for (; (pt = Ir()) && pt < 33; )
    Wt();
  return ji(e) > 2 || ji(pt) > 3 ? "" : " ";
}
function VT(e, t) {
  for (; --t && Wt() && !(pt < 48 || pt > 102 || pt > 57 && pt < 65 || pt > 70 && pt < 97); )
    ;
  return ls(e, js() + (t < 6 && Ir() == 32 && Wt() == 32));
}
function nc(e) {
  for (; Wt(); )
    switch (pt) {
      case e:
        return Bt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && nc(pt);
        break;
      case 40:
        e === 41 && nc(e);
        break;
      case 92:
        Wt();
        break;
    }
  return Bt;
}
function zT(e, t) {
  for (; Wt() && e + pt !== 57; )
    if (e + pt === 84 && Ir() === 47)
      break;
  return "/*" + ls(t, Bt - 1) + "*" + _a(e === 47 ? e : Wt());
}
function UT(e) {
  for (; !ji(Ir()); )
    Wt();
  return ls(e, Bt);
}
function GT(e) {
  return cm(Vs("", null, null, null, [""], e = lm(e), 0, [0], e));
}
function Vs(e, t, r, n, o, s, a, l, c) {
  for (var u = 0, d = 0, f = a, h = 0, b = 0, y = 0, g = 1, m = 1, T = 1, x = 0, v = "", O = o, S = s, R = n, w = v; m; )
    switch (y = x, x = Wt()) {
      case 40:
        if (y != 108 && Ot(w, f - 1) == 58) {
          rc(w += ke(Bs(x), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Bs(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += BT(y);
        break;
      case 92:
        w += VT(js() - 1, 7);
        continue;
      case 47:
        switch (Ir()) {
          case 42:
          case 47:
            xs(WT(zT(Wt(), js()), t, r), c);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * g:
        l[u++] = xr(w) * T;
      case 125 * g:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            m = 0;
          case 59 + d:
            T == -1 && (w = ke(w, /\f/g, "")), b > 0 && xr(w) - f && xs(b > 32 ? cf(w + ";", n, r, f - 1) : cf(ke(w, " ", "") + ";", n, r, f - 2), c);
            break;
          case 59:
            w += ";";
          default:
            if (xs(R = lf(w, t, r, u, d, o, l, v, O = [], S = [], f), s), x === 123)
              if (d === 0)
                Vs(w, t, R, R, O, s, f, l, S);
              else
                switch (h === 99 && Ot(w, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vs(e, R, R, n && xs(lf(e, R, R, 0, 0, o, l, v, o, O = [], f), S), o, S, f, l, n ? O : S);
                    break;
                  default:
                    Vs(w, R, R, R, [""], S, 0, l, S);
                }
        }
        u = d = b = 0, g = T = 1, v = w = "", f = a;
        break;
      case 58:
        f = 1 + xr(w), b = y;
      default:
        if (g < 1) {
          if (x == 123)
            --g;
          else if (x == 125 && g++ == 0 && jT() == 125)
            continue;
        }
        switch (w += _a(x), x * g) {
          case 38:
            T = d > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            l[u++] = (xr(w) - 1) * T, T = 1;
            break;
          case 64:
            Ir() === 45 && (w += Bs(Wt())), h = Ir(), d = f = xr(v = w += UT(js())), x++;
            break;
          case 45:
            y === 45 && xr(w) == 2 && (g = 0);
        }
    }
  return s;
}
function lf(e, t, r, n, o, s, a, l, c, u, d) {
  for (var f = o - 1, h = o === 0 ? s : [""], b = Cu(h), y = 0, g = 0, m = 0; y < n; ++y)
    for (var T = 0, x = qi(e, f + 1, f = $T(g = a[y])), v = e; T < b; ++T)
      (v = sm(g > 0 ? h[T] + " " + x : ke(x, /&\f/g, h[T]))) && (c[m++] = v);
  return Aa(e, t, r, o === 0 ? Su : l, c, u, d);
}
function WT(e, t, r) {
  return Aa(e, t, r, om, _a(qT()), qi(e, 2, -2), 0);
}
function cf(e, t, r, n) {
  return Aa(e, t, r, Tu, qi(e, 0, n), qi(e, n + 1, -1), n);
}
function Eo(e, t) {
  for (var r = "", n = Cu(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function HT(e, t, r, n) {
  switch (e.type) {
    case DT:
      if (e.children.length) break;
    case IT:
    case Tu:
      return e.return = e.return || e.value;
    case om:
      return "";
    case im:
      return e.return = e.value + "{" + Eo(e.children, n) + "}";
    case Su:
      e.value = e.props.join(",");
  }
  return xr(r = Eo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function KT(e) {
  var t = Cu(e);
  return function(r, n, o, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](r, n, o, s) || "";
    return a;
  };
}
function YT(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var QT = function(t, r, n) {
  for (var o = 0, s = 0; o = s, s = Ir(), o === 38 && s === 12 && (r[n] = 1), !ji(s); )
    Wt();
  return ls(t, Bt);
}, XT = function(t, r) {
  var n = -1, o = 44;
  do
    switch (ji(o)) {
      case 0:
        o === 38 && Ir() === 12 && (r[n] = 1), t[n] += QT(Bt - 1, r, n);
        break;
      case 2:
        t[n] += Bs(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ir() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += _a(o);
    }
  while (o = Wt());
  return t;
}, JT = function(t, r) {
  return cm(XT(lm(t), r));
}, uf = /* @__PURE__ */ new WeakMap(), ZT = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !uf.get(n)) && !o) {
      uf.set(t, !0);
      for (var s = [], a = JT(r, s), l = n.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, eC = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function um(e, t) {
  switch (MT(e, t)) {
    case 5103:
      return $e + "print-" + e + e;
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
      return $e + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $e + e + ea + e + xt + e + e;
    case 6828:
    case 4268:
      return $e + e + xt + e + e;
    case 6165:
      return $e + e + xt + "flex-" + e + e;
    case 5187:
      return $e + e + ke(e, /(\w+).+(:[^]+)/, $e + "box-$1$2" + xt + "flex-$1$2") + e;
    case 5443:
      return $e + e + xt + "flex-item-" + ke(e, /flex-|-self/, "") + e;
    case 4675:
      return $e + e + xt + "flex-line-pack" + ke(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return $e + e + xt + ke(e, "shrink", "negative") + e;
    case 5292:
      return $e + e + xt + ke(e, "basis", "preferred-size") + e;
    case 6060:
      return $e + "box-" + ke(e, "-grow", "") + $e + e + xt + ke(e, "grow", "positive") + e;
    case 4554:
      return $e + ke(e, /([^-])(transform)/g, "$1" + $e + "$2") + e;
    case 6187:
      return ke(ke(ke(e, /(zoom-|grab)/, $e + "$1"), /(image-set)/, $e + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ke(e, /(image-set\([^]*)/, $e + "$1$`$1");
    case 4968:
      return ke(ke(e, /(.+:)(flex-)?(.*)/, $e + "box-pack:$3" + xt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $e + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ke(e, /(.+)-inline(.+)/, $e + "$1$2") + e;
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
      if (xr(e) - 1 - t > 6) switch (Ot(e, t + 1)) {
        case 109:
          if (Ot(e, t + 4) !== 45) break;
        case 102:
          return ke(e, /(.+:)(.+)-([^]+)/, "$1" + $e + "$2-$3$1" + ea + (Ot(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~rc(e, "stretch") ? um(ke(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ot(e, t + 1) !== 115) break;
    case 6444:
      switch (Ot(e, xr(e) - 3 - (~rc(e, "!important") && 10))) {
        case 107:
          return ke(e, ":", ":" + $e) + e;
        case 101:
          return ke(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + $e + (Ot(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $e + "$2$3$1" + xt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ot(e, t + 11)) {
        case 114:
          return $e + e + xt + ke(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return $e + e + xt + ke(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return $e + e + xt + ke(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return $e + e + xt + e + e;
  }
  return e;
}
var tC = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Tu:
      t.return = um(t.value, t.length);
      break;
    case im:
      return Eo([di(t, {
        value: ke(t.value, "@", "@" + $e)
      })], o);
    case Su:
      if (t.length) return LT(t.props, function(s) {
        switch (FT(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Eo([di(t, {
              props: [ke(s, /:(read-\w+)/, ":" + ea + "$1")]
            })], o);
          case "::placeholder":
            return Eo([di(t, {
              props: [ke(s, /:(plac\w+)/, ":" + $e + "input-$1")]
            }), di(t, {
              props: [ke(s, /:(plac\w+)/, ":" + ea + "$1")]
            }), di(t, {
              props: [ke(s, /:(plac\w+)/, xt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, rC = [tC], nC = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var m = g.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || rC, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var m = g.getAttribute("data-emotion").split(" "), T = 1; T < m.length; T++)
        s[m[T]] = !0;
      l.push(g);
    }
  );
  var c, u = [ZT, eC];
  {
    var d, f = [HT, YT(function(g) {
      d.insert(g);
    })], h = KT(u.concat(o, f)), b = function(m) {
      return Eo(GT(m), h);
    };
    c = function(m, T, x, v) {
      d = x, b(m ? m + "{" + T.styles + "}" : T.styles), v && (y.inserted[T.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new PT({
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
}, oC = !0;
function iC(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var dm = function(t, r, n) {
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
  oC === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, fm = function(t, r, n) {
  dm(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function sC(e) {
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
var aC = {
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
}, lC = !1, cC = /[A-Z]|^ms/g, uC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pm = function(t) {
  return t.charCodeAt(1) === 45;
}, df = function(t) {
  return t != null && typeof t != "boolean";
}, Sl = /* @__PURE__ */ nm(function(e) {
  return pm(e) ? e : e.replace(cC, "-$&").toLowerCase();
}), ff = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(uC, function(n, o, s) {
          return wr = {
            name: o,
            styles: s,
            next: wr
          }, o;
        });
  }
  return aC[t] !== 1 && !pm(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, dC = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Bi(e, t, r) {
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
        return wr = {
          name: o.name,
          styles: o.styles,
          next: wr
        }, o.name;
      var s = r;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            wr = {
              name: a.name,
              styles: a.styles,
              next: wr
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return fC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = wr, u = r(e);
        return wr = c, Bi(e, t, u);
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
function fC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Bi(e, t, r[o]) + ";";
  else
    for (var s in r) {
      var a = r[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? n += s + "{" + t[l] + "}" : df(l) && (n += Sl(s) + ":" + ff(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && lC)
          throw new Error(dC);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            df(a[c]) && (n += Sl(s) + ":" + ff(s, a[c]) + ";");
        else {
          var u = Bi(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              n += Sl(s) + ":" + u + ";";
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
var pf = /label:\s*([^\s;{]+)\s*(;|$)/g, wr;
function Ou(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  wr = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, o += Bi(r, t, s);
  else {
    var a = s;
    o += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Bi(r, t, e[l]), n) {
      var c = s;
      o += c[l];
    }
  pf.lastIndex = 0;
  for (var u = "", d; (d = pf.exec(o)) !== null; )
    u += "-" + d[1];
  var f = sC(o) + u;
  return {
    name: f,
    styles: o,
    next: wr
  };
}
var pC = function(t) {
  return t();
}, hm = C.useInsertionEffect ? C.useInsertionEffect : !1, hC = hm || pC, hf = hm || C.useLayoutEffect, mm = /* @__PURE__ */ C.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ nC({
    key: "css"
  }) : null
);
mm.Provider;
var ym = function(t) {
  return /* @__PURE__ */ Oh(function(r, n) {
    var o = Ch(mm);
    return t(r, o, n);
  });
}, xu = /* @__PURE__ */ C.createContext({}), mC = /* @__PURE__ */ ym(function(e, t) {
  var r = e.styles, n = Ou([r], void 0, C.useContext(xu)), o = C.useRef();
  return hf(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), o.current = [a, l], function() {
      a.flush();
    };
  }, [t]), hf(function() {
    var s = o.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && fm(t, n.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function wu() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Ou(t);
}
var cs = function() {
  var t = wu.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, yC = RT, gC = function(t) {
  return t !== "theme";
}, mf = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? yC : gC;
}, yf = function(t, r, n) {
  var o;
  if (r) {
    var s = r.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, bC = !1, vC = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return dm(r, n, o), hC(function() {
    return fm(r, n, o);
  }), null;
}, EC = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, s, a;
  r !== void 0 && (s = r.label, a = r.target);
  var l = yf(t, r, n), c = l || mf(o), u = !c("as");
  return function() {
    var d = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      f.push(d[0][0]);
      for (var h = d.length, b = 1; b < h; b++)
        f.push(d[b], d[0][b]);
    }
    var y = ym(function(g, m, T) {
      var x = u && g.as || o, v = "", O = [], S = g;
      if (g.theme == null) {
        S = {};
        for (var R in g)
          S[R] = g[R];
        S.theme = C.useContext(xu);
      }
      typeof g.className == "string" ? v = iC(m.registered, O, g.className) : g.className != null && (v = g.className + " ");
      var w = Ou(f.concat(O), m.registered, S);
      v += m.key + "-" + w.name, a !== void 0 && (v += " " + a);
      var A = u && l === void 0 ? mf(x) : c, E = {};
      for (var P in g)
        u && P === "as" || A(P) && (E[P] = g[P]);
      return E.className = v, T && (E.ref = T), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(vC, {
        cache: m,
        serialized: w,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ C.createElement(x, E));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = f, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && bC ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(g, m) {
      return e(g, Zs({}, r, m, {
        shouldForwardProp: yf(y, m, !0)
      })).apply(void 0, f);
    }, y;
  };
}, SC = [
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
], oc = EC.bind();
SC.forEach(function(e) {
  oc[e] = oc(e);
});
var ic = { exports: {} }, ws = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf;
function TC() {
  if (gf) return Le;
  gf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function v(S) {
    if (typeof S == "object" && S !== null) {
      var R = S.$$typeof;
      switch (R) {
        case t:
          switch (S = S.type, S) {
            case c:
            case u:
            case n:
            case s:
            case o:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case l:
                case d:
                case y:
                case b:
                case a:
                  return S;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function O(S) {
    return v(S) === u;
  }
  return Le.AsyncMode = c, Le.ConcurrentMode = u, Le.ContextConsumer = l, Le.ContextProvider = a, Le.Element = t, Le.ForwardRef = d, Le.Fragment = n, Le.Lazy = y, Le.Memo = b, Le.Portal = r, Le.Profiler = s, Le.StrictMode = o, Le.Suspense = f, Le.isAsyncMode = function(S) {
    return O(S) || v(S) === c;
  }, Le.isConcurrentMode = O, Le.isContextConsumer = function(S) {
    return v(S) === l;
  }, Le.isContextProvider = function(S) {
    return v(S) === a;
  }, Le.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Le.isForwardRef = function(S) {
    return v(S) === d;
  }, Le.isFragment = function(S) {
    return v(S) === n;
  }, Le.isLazy = function(S) {
    return v(S) === y;
  }, Le.isMemo = function(S) {
    return v(S) === b;
  }, Le.isPortal = function(S) {
    return v(S) === r;
  }, Le.isProfiler = function(S) {
    return v(S) === s;
  }, Le.isStrictMode = function(S) {
    return v(S) === o;
  }, Le.isSuspense = function(S) {
    return v(S) === f;
  }, Le.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === u || S === s || S === o || S === f || S === h || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === b || S.$$typeof === a || S.$$typeof === l || S.$$typeof === d || S.$$typeof === m || S.$$typeof === T || S.$$typeof === x || S.$$typeof === g);
  }, Le.typeOf = v, Le;
}
var qe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bf;
function CC() {
  return bf || (bf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function v(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === u || D === s || D === o || D === f || D === h || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === b || D.$$typeof === a || D.$$typeof === l || D.$$typeof === d || D.$$typeof === m || D.$$typeof === T || D.$$typeof === x || D.$$typeof === g);
    }
    function O(D) {
      if (typeof D == "object" && D !== null) {
        var ve = D.$$typeof;
        switch (ve) {
          case t:
            var K = D.type;
            switch (K) {
              case c:
              case u:
              case n:
              case s:
              case o:
              case f:
                return K;
              default:
                var Te = K && K.$$typeof;
                switch (Te) {
                  case l:
                  case d:
                  case y:
                  case b:
                  case a:
                    return Te;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var S = c, R = u, w = l, A = a, E = t, P = d, k = n, q = y, G = b, z = r, V = s, U = o, Q = f, B = !1;
    function X(D) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(D) || O(D) === c;
    }
    function F(D) {
      return O(D) === u;
    }
    function W(D) {
      return O(D) === l;
    }
    function se(D) {
      return O(D) === a;
    }
    function re(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function J(D) {
      return O(D) === d;
    }
    function ae(D) {
      return O(D) === n;
    }
    function Y(D) {
      return O(D) === y;
    }
    function oe(D) {
      return O(D) === b;
    }
    function ce(D) {
      return O(D) === r;
    }
    function ue(D) {
      return O(D) === s;
    }
    function te(D) {
      return O(D) === o;
    }
    function fe(D) {
      return O(D) === f;
    }
    qe.AsyncMode = S, qe.ConcurrentMode = R, qe.ContextConsumer = w, qe.ContextProvider = A, qe.Element = E, qe.ForwardRef = P, qe.Fragment = k, qe.Lazy = q, qe.Memo = G, qe.Portal = z, qe.Profiler = V, qe.StrictMode = U, qe.Suspense = Q, qe.isAsyncMode = X, qe.isConcurrentMode = F, qe.isContextConsumer = W, qe.isContextProvider = se, qe.isElement = re, qe.isForwardRef = J, qe.isFragment = ae, qe.isLazy = Y, qe.isMemo = oe, qe.isPortal = ce, qe.isProfiler = ue, qe.isStrictMode = te, qe.isSuspense = fe, qe.isValidElementType = v, qe.typeOf = O;
  }()), qe;
}
var vf;
function gm() {
  return vf || (vf = 1, process.env.NODE_ENV === "production" ? ws.exports = TC() : ws.exports = CC()), ws.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tl, Ef;
function OC() {
  if (Ef) return Tl;
  Ef = 1;
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
  return Tl = o() ? Object.assign : function(s, a) {
    for (var l, c = n(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var h = 0; h < u.length; h++)
          r.call(l, u[h]) && (c[u[h]] = l[u[h]]);
      }
    }
    return c;
  }, Tl;
}
var Cl, Sf;
function Ru() {
  if (Sf) return Cl;
  Sf = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Cl = e, Cl;
}
var Ol, Tf;
function bm() {
  return Tf || (Tf = 1, Ol = Function.call.bind(Object.prototype.hasOwnProperty)), Ol;
}
var xl, Cf;
function xC() {
  if (Cf) return xl;
  Cf = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ru(), r = {}, n = bm();
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
              var h = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            f = s[d](a, d, c, l, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, xl = o, xl;
}
var wl, Of;
function wC() {
  if (Of) return wl;
  Of = 1;
  var e = gm(), t = OC(), r = Ru(), n = bm(), o = xC(), s = function() {
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
  return wl = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(F) {
      var W = F && (u && F[u] || F[d]);
      if (typeof W == "function")
        return W;
    }
    var h = "<<anonymous>>", b = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: x(),
      arrayOf: v,
      element: O(),
      elementType: S(),
      instanceOf: R,
      node: P(),
      objectOf: A,
      oneOf: w,
      oneOfType: E,
      shape: q,
      exact: G
    };
    function y(F, W) {
      return F === W ? F !== 0 || 1 / F === 1 / W : F !== F && W !== W;
    }
    function g(F, W) {
      this.message = F, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function m(F) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, se = 0;
      function re(ae, Y, oe, ce, ue, te, fe) {
        if (ce = ce || h, te = te || oe, fe !== r) {
          if (c) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = ce + ":" + oe;
            !W[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            se < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + te + "` prop on `" + ce + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[ve] = !0, se++);
          }
        }
        return Y[oe] == null ? ae ? Y[oe] === null ? new g("The " + ue + " `" + te + "` is marked as required " + ("in `" + ce + "`, but its value is `null`.")) : new g("The " + ue + " `" + te + "` is marked as required in " + ("`" + ce + "`, but its value is `undefined`.")) : null : F(Y, oe, ce, ue, te);
      }
      var J = re.bind(null, !1);
      return J.isRequired = re.bind(null, !0), J;
    }
    function T(F) {
      function W(se, re, J, ae, Y, oe) {
        var ce = se[re], ue = U(ce);
        if (ue !== F) {
          var te = Q(ce);
          return new g(
            "Invalid " + ae + " `" + Y + "` of type " + ("`" + te + "` supplied to `" + J + "`, expected ") + ("`" + F + "`."),
            { expectedType: F }
          );
        }
        return null;
      }
      return m(W);
    }
    function x() {
      return m(a);
    }
    function v(F) {
      function W(se, re, J, ae, Y) {
        if (typeof F != "function")
          return new g("Property `" + Y + "` of component `" + J + "` has invalid PropType notation inside arrayOf.");
        var oe = se[re];
        if (!Array.isArray(oe)) {
          var ce = U(oe);
          return new g("Invalid " + ae + " `" + Y + "` of type " + ("`" + ce + "` supplied to `" + J + "`, expected an array."));
        }
        for (var ue = 0; ue < oe.length; ue++) {
          var te = F(oe, ue, J, ae, Y + "[" + ue + "]", r);
          if (te instanceof Error)
            return te;
        }
        return null;
      }
      return m(W);
    }
    function O() {
      function F(W, se, re, J, ae) {
        var Y = W[se];
        if (!l(Y)) {
          var oe = U(Y);
          return new g("Invalid " + J + " `" + ae + "` of type " + ("`" + oe + "` supplied to `" + re + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(F);
    }
    function S() {
      function F(W, se, re, J, ae) {
        var Y = W[se];
        if (!e.isValidElementType(Y)) {
          var oe = U(Y);
          return new g("Invalid " + J + " `" + ae + "` of type " + ("`" + oe + "` supplied to `" + re + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(F);
    }
    function R(F) {
      function W(se, re, J, ae, Y) {
        if (!(se[re] instanceof F)) {
          var oe = F.name || h, ce = X(se[re]);
          return new g("Invalid " + ae + " `" + Y + "` of type " + ("`" + ce + "` supplied to `" + J + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return m(W);
    }
    function w(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function W(se, re, J, ae, Y) {
        for (var oe = se[re], ce = 0; ce < F.length; ce++)
          if (y(oe, F[ce]))
            return null;
        var ue = JSON.stringify(F, function(fe, D) {
          var ve = Q(D);
          return ve === "symbol" ? String(D) : D;
        });
        return new g("Invalid " + ae + " `" + Y + "` of value `" + String(oe) + "` " + ("supplied to `" + J + "`, expected one of " + ue + "."));
      }
      return m(W);
    }
    function A(F) {
      function W(se, re, J, ae, Y) {
        if (typeof F != "function")
          return new g("Property `" + Y + "` of component `" + J + "` has invalid PropType notation inside objectOf.");
        var oe = se[re], ce = U(oe);
        if (ce !== "object")
          return new g("Invalid " + ae + " `" + Y + "` of type " + ("`" + ce + "` supplied to `" + J + "`, expected an object."));
        for (var ue in oe)
          if (n(oe, ue)) {
            var te = F(oe, ue, J, ae, Y + "." + ue, r);
            if (te instanceof Error)
              return te;
          }
        return null;
      }
      return m(W);
    }
    function E(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var W = 0; W < F.length; W++) {
        var se = F[W];
        if (typeof se != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(se) + " at index " + W + "."
          ), a;
      }
      function re(J, ae, Y, oe, ce) {
        for (var ue = [], te = 0; te < F.length; te++) {
          var fe = F[te], D = fe(J, ae, Y, oe, ce, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && ue.push(D.data.expectedType);
        }
        var ve = ue.length > 0 ? ", expected one of type [" + ue.join(", ") + "]" : "";
        return new g("Invalid " + oe + " `" + ce + "` supplied to " + ("`" + Y + "`" + ve + "."));
      }
      return m(re);
    }
    function P() {
      function F(W, se, re, J, ae) {
        return z(W[se]) ? null : new g("Invalid " + J + " `" + ae + "` supplied to " + ("`" + re + "`, expected a ReactNode."));
      }
      return m(F);
    }
    function k(F, W, se, re, J) {
      return new g(
        (F || "React class") + ": " + W + " type `" + se + "." + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + J + "`."
      );
    }
    function q(F) {
      function W(se, re, J, ae, Y) {
        var oe = se[re], ce = U(oe);
        if (ce !== "object")
          return new g("Invalid " + ae + " `" + Y + "` of type `" + ce + "` " + ("supplied to `" + J + "`, expected `object`."));
        for (var ue in F) {
          var te = F[ue];
          if (typeof te != "function")
            return k(J, ae, Y, ue, Q(te));
          var fe = te(oe, ue, J, ae, Y + "." + ue, r);
          if (fe)
            return fe;
        }
        return null;
      }
      return m(W);
    }
    function G(F) {
      function W(se, re, J, ae, Y) {
        var oe = se[re], ce = U(oe);
        if (ce !== "object")
          return new g("Invalid " + ae + " `" + Y + "` of type `" + ce + "` " + ("supplied to `" + J + "`, expected `object`."));
        var ue = t({}, se[re], F);
        for (var te in ue) {
          var fe = F[te];
          if (n(F, te) && typeof fe != "function")
            return k(J, ae, Y, te, Q(fe));
          if (!fe)
            return new g(
              "Invalid " + ae + " `" + Y + "` key `" + te + "` supplied to `" + J + "`.\nBad object: " + JSON.stringify(se[re], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(F), null, "  ")
            );
          var D = fe(oe, te, J, ae, Y + "." + te, r);
          if (D)
            return D;
        }
        return null;
      }
      return m(W);
    }
    function z(F) {
      switch (typeof F) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !F;
        case "object":
          if (Array.isArray(F))
            return F.every(z);
          if (F === null || l(F))
            return !0;
          var W = f(F);
          if (W) {
            var se = W.call(F), re;
            if (W !== F.entries) {
              for (; !(re = se.next()).done; )
                if (!z(re.value))
                  return !1;
            } else
              for (; !(re = se.next()).done; ) {
                var J = re.value;
                if (J && !z(J[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(F, W) {
      return F === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function U(F) {
      var W = typeof F;
      return Array.isArray(F) ? "array" : F instanceof RegExp ? "object" : V(W, F) ? "symbol" : W;
    }
    function Q(F) {
      if (typeof F > "u" || F === null)
        return "" + F;
      var W = U(F);
      if (W === "object") {
        if (F instanceof Date)
          return "date";
        if (F instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function B(F) {
      var W = Q(F);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function X(F) {
      return !F.constructor || !F.constructor.name ? h : F.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, wl;
}
var Rl, xf;
function RC() {
  if (xf) return Rl;
  xf = 1;
  var e = Ru();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Rl = function() {
    function n(a, l, c, u, d, f) {
      if (f !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, Rl;
}
if (process.env.NODE_ENV !== "production") {
  var _C = gm(), NC = !0;
  ic.exports = wC()(_C.isElement, NC);
} else
  ic.exports = RC()();
var AC = ic.exports;
const i = /* @__PURE__ */ xa(AC);
function PC(e) {
  return e == null || Object.keys(e).length === 0;
}
function vm(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ p(mC, {
    styles: typeof t == "function" ? (o) => t(PC(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && (vm.propTypes = {
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
function Em(e, t) {
  const r = oc(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const IC = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function Rr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Sm(e) {
  if (!Rr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Sm(e[r]);
  }), t;
}
function vt(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Rr(e) && Rr(t) && Object.keys(t).forEach((o) => {
    Rr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Rr(e[o]) ? n[o] = vt(e[o], t[o], r) : r.clone ? n[o] = Rr(t[o]) ? Sm(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const DC = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function $C(e) {
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
  } = e, s = DC(t), a = Object.keys(s);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function u(h, b) {
    const y = a.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : b) - n / 100}${r})`;
  }
  function d(h) {
    return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : l(h);
  }
  function f(h) {
    const b = a.indexOf(h);
    return b === 0 ? l(a[1]) : b === a.length - 1 ? c(a[b]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
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
function kC(e, t) {
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
function MC(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function FC(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Dr(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(s);
}
function LC(e) {
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
const qC = {
  borderRadius: 4
}, En = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.string, i.object, i.array]) : {};
function _i(e, t) {
  return t ? vt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Pa = {
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
}, wf = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Pa[e]}px)`
}, jC = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Pa[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Vt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || wf;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || wf;
    return Object.keys(t).reduce((a, l) => {
      if (MC(s.keys, l)) {
        const c = FC(n.containerQueries ? n : jC, l);
        c && (a[c] = r(t[l], l));
      } else if (Object.keys(s.values || Pa).includes(l)) {
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
function Tm(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const s = e.up(o);
    return n[s] = {}, n;
  }, {})) || {};
}
function Cm(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function BC(e, ...t) {
  const r = Tm(e), n = [r, ...t].reduce((o, s) => vt(o, s), {});
  return Cm(Object.keys(r), n);
}
function VC(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e) ? n.forEach((o, s) => {
    s < e.length && (r[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (r[o] = !0);
  }), r;
}
function Bn({
  values: e,
  breakpoints: t,
  base: r
}) {
  const n = r || VC(e, t), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let s;
  return o.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function Z(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Dr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ia(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ta(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Ia(e, r) || n, t && (o = t(o, n, e)), o;
}
function ft(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Ia(c, n) || {};
    return Vt(a, l, (f) => {
      let h = ta(u, o, f);
      return f === h && typeof f == "string" && (h = ta(u, o, `${t}${f === "default" ? "" : Z(f)}`, f)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: En
  } : {}, s.filterProps = [t], s;
}
function zC(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const UC = {
  m: "margin",
  p: "padding"
}, GC = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Rf = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, WC = zC((e) => {
  if (e.length > 2)
    if (Rf[e])
      e = Rf[e];
    else
      return [e];
  const [t, r] = e.split(""), n = UC[t], o = GC[r] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), Da = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], $a = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], HC = [...Da, ...$a];
function us(e, t, r, n) {
  const o = Ia(e, t, !0) ?? r;
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
function ka(e) {
  return us(e, "spacing", 8, "spacing");
}
function Kn(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function KC(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Kn(t, r), n), {});
}
function YC(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = WC(r), s = KC(o, n), a = e[r];
  return Vt(e, a, s);
}
function Om(e, t) {
  const r = ka(e.theme);
  return Object.keys(e).map((n) => YC(e, t, n, r)).reduce(_i, {});
}
function st(e) {
  return Om(e, Da);
}
st.propTypes = process.env.NODE_ENV !== "production" ? Da.reduce((e, t) => (e[t] = En, e), {}) : {};
st.filterProps = Da;
function at(e) {
  return Om(e, $a);
}
at.propTypes = process.env.NODE_ENV !== "production" ? $a.reduce((e, t) => (e[t] = En, e), {}) : {};
at.filterProps = $a;
process.env.NODE_ENV !== "production" && HC.reduce((e, t) => (e[t] = En, e), {});
function xm(e = 8, t = ka({
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
function Ma(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? _i(o, t[s](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function nr(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ar(e, t) {
  return ft({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const QC = ar("border", nr), XC = ar("borderTop", nr), JC = ar("borderRight", nr), ZC = ar("borderBottom", nr), eO = ar("borderLeft", nr), tO = ar("borderColor"), rO = ar("borderTopColor"), nO = ar("borderRightColor"), oO = ar("borderBottomColor"), iO = ar("borderLeftColor"), sO = ar("outline", nr), aO = ar("outlineColor"), Fa = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = us(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Kn(t, n)
    });
    return Vt(e, e.borderRadius, r);
  }
  return null;
};
Fa.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: En
} : {};
Fa.filterProps = ["borderRadius"];
Ma(QC, XC, JC, ZC, eO, tO, rO, nO, oO, iO, Fa, sO, aO);
const La = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = us(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Kn(t, n)
    });
    return Vt(e, e.gap, r);
  }
  return null;
};
La.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: En
} : {};
La.filterProps = ["gap"];
const qa = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = us(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Kn(t, n)
    });
    return Vt(e, e.columnGap, r);
  }
  return null;
};
qa.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: En
} : {};
qa.filterProps = ["columnGap"];
const ja = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = us(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Kn(t, n)
    });
    return Vt(e, e.rowGap, r);
  }
  return null;
};
ja.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: En
} : {};
ja.filterProps = ["rowGap"];
const lO = ft({
  prop: "gridColumn"
}), cO = ft({
  prop: "gridRow"
}), uO = ft({
  prop: "gridAutoFlow"
}), dO = ft({
  prop: "gridAutoColumns"
}), fO = ft({
  prop: "gridAutoRows"
}), pO = ft({
  prop: "gridTemplateColumns"
}), hO = ft({
  prop: "gridTemplateRows"
}), mO = ft({
  prop: "gridTemplateAreas"
}), yO = ft({
  prop: "gridArea"
});
Ma(La, qa, ja, lO, cO, uO, dO, fO, pO, hO, mO, yO);
function So(e, t) {
  return t === "grey" ? t : e;
}
const gO = ft({
  prop: "color",
  themeKey: "palette",
  transform: So
}), bO = ft({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: So
}), vO = ft({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: So
});
Ma(gO, bO, vO);
function Gt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const EO = ft({
  prop: "width",
  transform: Gt
}), _u = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, s, a, l, c;
      const n = ((a = (s = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[r]) || Pa[r];
      return n ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Gt(r)
      };
    };
    return Vt(e, e.maxWidth, t);
  }
  return null;
};
_u.filterProps = ["maxWidth"];
const SO = ft({
  prop: "minWidth",
  transform: Gt
}), TO = ft({
  prop: "height",
  transform: Gt
}), CO = ft({
  prop: "maxHeight",
  transform: Gt
}), OO = ft({
  prop: "minHeight",
  transform: Gt
});
ft({
  prop: "size",
  cssProperty: "width",
  transform: Gt
});
ft({
  prop: "size",
  cssProperty: "height",
  transform: Gt
});
const xO = ft({
  prop: "boxSizing"
});
Ma(EO, _u, SO, TO, CO, OO, xO);
const ds = {
  // borders
  border: {
    themeKey: "borders",
    transform: nr
  },
  borderTop: {
    themeKey: "borders",
    transform: nr
  },
  borderRight: {
    themeKey: "borders",
    transform: nr
  },
  borderBottom: {
    themeKey: "borders",
    transform: nr
  },
  borderLeft: {
    themeKey: "borders",
    transform: nr
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
    transform: nr
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Fa
  },
  // palette
  color: {
    themeKey: "palette",
    transform: So
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: So
  },
  backgroundColor: {
    themeKey: "palette",
    transform: So
  },
  // spacing
  p: {
    style: at
  },
  pt: {
    style: at
  },
  pr: {
    style: at
  },
  pb: {
    style: at
  },
  pl: {
    style: at
  },
  px: {
    style: at
  },
  py: {
    style: at
  },
  padding: {
    style: at
  },
  paddingTop: {
    style: at
  },
  paddingRight: {
    style: at
  },
  paddingBottom: {
    style: at
  },
  paddingLeft: {
    style: at
  },
  paddingX: {
    style: at
  },
  paddingY: {
    style: at
  },
  paddingInline: {
    style: at
  },
  paddingInlineStart: {
    style: at
  },
  paddingInlineEnd: {
    style: at
  },
  paddingBlock: {
    style: at
  },
  paddingBlockStart: {
    style: at
  },
  paddingBlockEnd: {
    style: at
  },
  m: {
    style: st
  },
  mt: {
    style: st
  },
  mr: {
    style: st
  },
  mb: {
    style: st
  },
  ml: {
    style: st
  },
  mx: {
    style: st
  },
  my: {
    style: st
  },
  margin: {
    style: st
  },
  marginTop: {
    style: st
  },
  marginRight: {
    style: st
  },
  marginBottom: {
    style: st
  },
  marginLeft: {
    style: st
  },
  marginX: {
    style: st
  },
  marginY: {
    style: st
  },
  marginInline: {
    style: st
  },
  marginInlineStart: {
    style: st
  },
  marginInlineEnd: {
    style: st
  },
  marginBlock: {
    style: st
  },
  marginBlockStart: {
    style: st
  },
  marginBlockEnd: {
    style: st
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
    style: La
  },
  rowGap: {
    style: ja
  },
  columnGap: {
    style: qa
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
    transform: Gt
  },
  maxWidth: {
    style: _u
  },
  minWidth: {
    transform: Gt
  },
  height: {
    transform: Gt
  },
  maxHeight: {
    transform: Gt
  },
  minHeight: {
    transform: Gt
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
function wO(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function RO(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _O() {
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
    const h = Ia(o, u) || {};
    return f ? f(a) : Vt(a, n, (y) => {
      let g = ta(h, d, y);
      return y === g && typeof y == "string" && (g = ta(h, d, `${r}${y === "default" ? "" : Z(y)}`, y)), c === !1 ? g : {
        [c]: g
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
    const s = o.unstable_sxConfig ?? ds;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(o);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = Tm(o.breakpoints), d = Object.keys(u);
      let f = u;
      return Object.keys(c).forEach((h) => {
        const b = RO(c[h], o);
        if (b != null)
          if (typeof b == "object")
            if (s[h])
              f = _i(f, e(h, b, o, s));
            else {
              const y = Vt({
                theme: o
              }, b, (g) => ({
                [h]: g
              }));
              wO(y, b) ? f[h] = t({
                sx: b,
                theme: o
              }) : f = _i(f, y);
            }
          else
            f = _i(f, e(h, b, o, s));
      }), kC(o, Cm(d, f));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const Qo = _O();
Qo.filterProps = ["sx"];
function NO(e, t) {
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
function fs(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: s = {},
    ...a
  } = e, l = $C(r), c = xm(o);
  let u = vt({
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
      ...qC,
      ...s
    }
  }, a);
  return u = LC(u), u.applyStyles = NO, u = t.reduce((d, f) => vt(d, f), u), u.unstable_sxConfig = {
    ...ds,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return Qo({
      sx: f,
      theme: this
    });
  }, u;
}
function AO(e) {
  return Object.keys(e).length === 0;
}
function PO(e = null) {
  const t = C.useContext(xu);
  return !t || AO(t) ? e : t;
}
const IO = fs();
function ps(e = IO) {
  return PO(e);
}
function wm({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = ps(r), o = typeof e == "function" ? e(t && n[t] || n) : e;
  return /* @__PURE__ */ p(vm, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (wm.propTypes = {
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
const DO = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? ds;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function hs(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = DO(r);
  let s;
  return Array.isArray(t) ? s = [n, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Rr(l) ? {
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
const _f = (e) => e, $O = () => {
  let e = _f;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = _f;
    }
  };
}, Rm = $O();
function _m(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = _m(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function de() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = _m(e)) && (n && (n += " "), n += t);
  return n;
}
function kO(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, s = Em("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Qo);
  return /* @__PURE__ */ C.forwardRef(function(c, u) {
    const d = ps(r), {
      className: f,
      component: h = "div",
      ...b
    } = hs(c);
    return /* @__PURE__ */ p(s, {
      as: h,
      ref: u,
      className: de(f, o ? o(n) : n),
      theme: t && d[t] || d,
      ...b
    });
  });
}
const MO = {
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
function Se(e, t, r = "Mui") {
  const n = MO[t];
  return n ? `${r}-${n}` : `${Rm.generate(e)}-${t}`;
}
function Ce(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Se(e, o, r);
  }), n;
}
var sc = { exports: {} }, je = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nf;
function FO() {
  if (Nf) return je;
  Nf = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var T = m.$$typeof;
      switch (T) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case a:
                case c:
                case h:
                case f:
                case s:
                  return m;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return je.ContextConsumer = a, je.ContextProvider = s, je.Element = e, je.ForwardRef = c, je.Fragment = r, je.Lazy = h, je.Memo = f, je.Portal = t, je.Profiler = o, je.StrictMode = n, je.Suspense = u, je.SuspenseList = d, je.isAsyncMode = function() {
    return !1;
  }, je.isConcurrentMode = function() {
    return !1;
  }, je.isContextConsumer = function(m) {
    return g(m) === a;
  }, je.isContextProvider = function(m) {
    return g(m) === s;
  }, je.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, je.isForwardRef = function(m) {
    return g(m) === c;
  }, je.isFragment = function(m) {
    return g(m) === r;
  }, je.isLazy = function(m) {
    return g(m) === h;
  }, je.isMemo = function(m) {
    return g(m) === f;
  }, je.isPortal = function(m) {
    return g(m) === t;
  }, je.isProfiler = function(m) {
    return g(m) === o;
  }, je.isStrictMode = function(m) {
    return g(m) === n;
  }, je.isSuspense = function(m) {
    return g(m) === u;
  }, je.isSuspenseList = function(m) {
    return g(m) === d;
  }, je.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === d || m === b || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === f || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || m.$$typeof === y || m.getModuleId !== void 0);
  }, je.typeOf = g, je;
}
var Be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Af;
function LO() {
  return Af || (Af = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = !1, g = !1, m = !1, T = !1, x = !1, v;
    v = Symbol.for("react.module.reference");
    function O(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === r || K === o || x || K === n || K === u || K === d || T || K === b || y || g || m || typeof K == "object" && K !== null && (K.$$typeof === h || K.$$typeof === f || K.$$typeof === s || K.$$typeof === a || K.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      K.$$typeof === v || K.getModuleId !== void 0));
    }
    function S(K) {
      if (typeof K == "object" && K !== null) {
        var Te = K.$$typeof;
        switch (Te) {
          case e:
            var mt = K.type;
            switch (mt) {
              case r:
              case o:
              case n:
              case u:
              case d:
                return mt;
              default:
                var Et = mt && mt.$$typeof;
                switch (Et) {
                  case l:
                  case a:
                  case c:
                  case h:
                  case f:
                  case s:
                    return Et;
                  default:
                    return Te;
                }
            }
          case t:
            return Te;
        }
      }
    }
    var R = a, w = s, A = e, E = c, P = r, k = h, q = f, G = t, z = o, V = n, U = u, Q = d, B = !1, X = !1;
    function F(K) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(K) {
      return X || (X = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(K) {
      return S(K) === a;
    }
    function re(K) {
      return S(K) === s;
    }
    function J(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function ae(K) {
      return S(K) === c;
    }
    function Y(K) {
      return S(K) === r;
    }
    function oe(K) {
      return S(K) === h;
    }
    function ce(K) {
      return S(K) === f;
    }
    function ue(K) {
      return S(K) === t;
    }
    function te(K) {
      return S(K) === o;
    }
    function fe(K) {
      return S(K) === n;
    }
    function D(K) {
      return S(K) === u;
    }
    function ve(K) {
      return S(K) === d;
    }
    Be.ContextConsumer = R, Be.ContextProvider = w, Be.Element = A, Be.ForwardRef = E, Be.Fragment = P, Be.Lazy = k, Be.Memo = q, Be.Portal = G, Be.Profiler = z, Be.StrictMode = V, Be.Suspense = U, Be.SuspenseList = Q, Be.isAsyncMode = F, Be.isConcurrentMode = W, Be.isContextConsumer = se, Be.isContextProvider = re, Be.isElement = J, Be.isForwardRef = ae, Be.isFragment = Y, Be.isLazy = oe, Be.isMemo = ce, Be.isPortal = ue, Be.isProfiler = te, Be.isStrictMode = fe, Be.isSuspense = D, Be.isSuspenseList = ve, Be.isValidElementType = O, Be.typeOf = S;
  }()), Be;
}
process.env.NODE_ENV === "production" ? sc.exports = FO() : sc.exports = LO();
var Bo = sc.exports;
function Nm(e, t = "") {
  return e.displayName || e.name || t;
}
function Pf(e, t, r) {
  const n = Nm(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function qO(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Nm(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Bo.ForwardRef:
          return Pf(e, e.render, "ForwardRef");
        case Bo.Memo:
          return Pf(e, e.type, "memo");
        default:
          return;
      }
  }
}
const jO = fs();
function _l(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ac(e, t, r) {
  return VO(t) ? r : t[e] || t;
}
const Rs = Symbol("mui.processed_props");
function _s(e, t, r) {
  if (Rs in e)
    return e[Rs];
  const n = {
    ...e,
    theme: ac(t, e.theme, r)
  };
  return e[Rs] = n, n[Rs] = n, n;
}
function BO(e) {
  return e ? (t, r) => r[e] : null;
}
function zs(e, t) {
  var n;
  const r = typeof e == "function" ? e(t) : e;
  if (Array.isArray(r))
    return r.flatMap((o) => zs(o, t));
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
function Am(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = jO,
    rootShouldForwardProp: n = _l,
    slotShouldForwardProp: o = _l
  } = e, s = (l) => Qo(_s(l, t, r));
  return s.__mui_systemSx = !0, (l, c = {}) => {
    IC(l, (R) => R.filter((w) => !(w != null && w.__mui_systemSx)));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = BO(If(d)),
      ...y
    } = c, g = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), m = h || !1;
    let T;
    process.env.NODE_ENV !== "production" && u && (T = `${u}-${If(d || "Root")}`);
    let x = _l;
    d === "Root" || d === "root" ? x = n : d ? x = o : zO(l) && (x = void 0);
    const v = Em(l, {
      shouldForwardProp: x,
      label: T,
      ...y
    }), O = (R) => typeof R == "function" && R.__emotion_real !== R || Rr(R) ? (w) => zs(R, _s(w, t, r)) : R, S = (R, ...w) => {
      let A = O(R);
      const E = w ? w.map(O) : [];
      u && b && E.push((q) => {
        const G = ac(t, q.theme, r);
        if (!G.components || !G.components[u] || !G.components[u].styleOverrides)
          return null;
        const z = G.components[u].styleOverrides, V = {}, U = _s(q, t, r);
        for (const Q in z)
          V[Q] = zs(z[Q], U);
        return b(q, V);
      }), u && !g && E.push((q) => {
        var V, U;
        const G = ac(t, q.theme, r), z = (U = (V = G == null ? void 0 : G.components) == null ? void 0 : V[u]) == null ? void 0 : U.variants;
        return z ? zs({
          variants: z
        }, _s(q, t, r)) : null;
      }), m || E.push(s);
      const P = E.length - w.length;
      if (Array.isArray(R) && P > 0) {
        const q = new Array(P).fill("");
        A = [...R, ...q], A.raw = [...R.raw, ...q];
      }
      const k = v(A, ...E);
      if (process.env.NODE_ENV !== "production") {
        let q;
        u && (q = `${u}${Z(d || "")}`), q === void 0 && (q = `Styled(${qO(l)})`), k.displayName = q;
      }
      return l.muiName && (k.muiName = l.muiName), k;
    };
    return v.withConfig && (S.withConfig = v.withConfig), S;
  };
}
function VO(e) {
  for (const t in e)
    return !1;
  return !0;
}
function zO(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function If(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Pm = Am();
function Vi(e, t) {
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
              r[o][c] = Vi(s[c], a[c]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function UO(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Vi(t.components[r].defaultProps, n);
}
function Nu({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = ps(r);
  return n && (o = o[n] || o), UO({
    theme: o,
    name: t,
    props: e
  });
}
const hn = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
function GO(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Au(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), GO(e, t, r);
}
function WO(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function mn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return mn(WO(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Dr(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Dr(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const HO = (e) => {
  const t = mn(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, vi = (e, t) => {
  try {
    return HO(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Ba(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Im(e) {
  e = mn(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), a = (u, d = (u + r / 30) % 12) => o - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Ba({
    type: l,
    values: c
  });
}
function lc(e) {
  e = mn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? mn(Im(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Df(e, t) {
  const r = lc(e), n = lc(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Je(e, t) {
  return e = mn(e), t = Au(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ba(e);
}
function Ns(e, t, r) {
  try {
    return Je(e, t);
  } catch {
    return e;
  }
}
function Pu(e, t) {
  if (e = mn(e), t = Au(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Ba(e);
}
function He(e, t, r) {
  try {
    return Pu(e, t);
  } catch {
    return e;
  }
}
function Iu(e, t) {
  if (e = mn(e), t = Au(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Ba(e);
}
function Ke(e, t, r) {
  try {
    return Iu(e, t);
  } catch {
    return e;
  }
}
function KO(e, t = 0.15) {
  return lc(e) > 0.5 ? Pu(e, t) : Iu(e, t);
}
function As(e, t, r) {
  try {
    return KO(e, t);
  } catch {
    return e;
  }
}
function Kr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function YO(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Dm(e, t, r, n, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !YO(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Xo = Kr(i.element, Dm);
Xo.isRequired = Kr(i.element.isRequired, Dm);
function QO(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function XO(e, t, r, n, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !QO(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Va = Kr(i.elementType, XO), JO = "exact-prop: ​";
function $m(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [JO]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Vo(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = o || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const lr = i.oneOfType([i.func, i.object]);
function cc(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function Du(e, t = 166) {
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
function Us(e, t) {
  var r, n, o;
  return /* @__PURE__ */ C.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (n = (r = e.type) == null ? void 0 : r._payload) == null ? void 0 : n.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
function Ht(e) {
  return e && e.ownerDocument || document;
}
function Ur(e) {
  return Ht(e).defaultView || window;
}
function ZO(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? {
    ...t.propTypes
  } : null;
  return (o) => (s, a, l, c, u, ...d) => {
    const f = u || a, h = r == null ? void 0 : r[f];
    if (h) {
      const b = h(s, a, l, c, u, ...d);
      if (b)
        return b;
    }
    return typeof s[a] < "u" && !s[o] ? new Error(`The prop \`${f}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function uc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let $f = 0;
function ex(e) {
  const [t, r] = C.useState(e), n = e || t;
  return C.useEffect(() => {
    t == null && ($f += 1, r(`mui-${$f}`));
  }, [t]), n;
}
const tx = {
  ...C
}, kf = tx.useId;
function $u(e) {
  if (kf !== void 0) {
    const t = kf();
    return e ?? t;
  }
  return ex(e);
}
function rx(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function zi({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = C.useRef(e !== void 0), [s, a] = C.useState(t), l = o ? e : s;
  if (process.env.NODE_ENV !== "production") {
    C.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = C.useRef(t);
    C.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = C.useCallback((u) => {
    o || a(u);
  }, []);
  return [l, c];
}
function yo(e) {
  const t = C.useRef(e);
  return hn(() => {
    t.current = e;
  }), C.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function dt(...e) {
  return C.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      uc(r, t);
    });
  }, e);
}
const Mf = {};
function km(e, t) {
  const r = C.useRef(Mf);
  return r.current === Mf && (r.current = e(t)), r;
}
const nx = [];
function ox(e) {
  C.useEffect(e, nx);
}
class ku {
  constructor() {
    li(this, "currentId", null);
    li(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    li(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ku();
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
function Mu() {
  const e = km(ku.create).current;
  return ox(e.disposeEffect), e;
}
function Ff(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Mm(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function ix(e) {
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
function Fm(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const s = ix(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Lm(e, t, ...r) {
  return e[t] === void 0 ? null : Fm(e, t, ...r);
}
function dc() {
  return null;
}
Lm.isRequired = Fm;
dc.isRequired = dc;
const qm = process.env.NODE_ENV === "production" ? dc : Lm;
function xe(e, t, r = void 0) {
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
function sx(e) {
  return typeof e == "string";
}
function jm(e, t, r) {
  return e === void 0 || sx(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Bm(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Lf(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Vm(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const b = de(r == null ? void 0 : r.className, s, o == null ? void 0 : o.className, n == null ? void 0 : n.className), y = {
      ...r == null ? void 0 : r.style,
      ...o == null ? void 0 : o.style,
      ...n == null ? void 0 : n.style
    }, g = {
      ...r,
      ...o,
      ...n
    };
    return b.length > 0 && (g.className = b), Object.keys(y).length > 0 && (g.style = y), {
      props: g,
      internalRef: void 0
    };
  }
  const a = Bm({
    ...o,
    ...n
  }), l = Lf(n), c = Lf(o), u = t(a), d = de(u == null ? void 0 : u.className, r == null ? void 0 : r.className, s, o == null ? void 0 : o.className, n == null ? void 0 : n.className), f = {
    ...u == null ? void 0 : u.style,
    ...r == null ? void 0 : r.style,
    ...o == null ? void 0 : o.style,
    ...n == null ? void 0 : n.style
  }, h = {
    ...u,
    ...r,
    ...c,
    ...l
  };
  return d.length > 0 && (h.className = d), Object.keys(f).length > 0 && (h.style = f), {
    props: h,
    internalRef: u.ref
  };
}
function zm(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function qf(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...s
  } = e, a = o ? {} : zm(r, n), {
    props: l,
    internalRef: c
  } = Vm({
    ...s,
    externalSlotProps: a
  }), u = dt(c, a == null ? void 0 : a.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return jm(t, {
    ...l,
    ref: u
  }, n);
}
function Jo(e) {
  return !e || !/* @__PURE__ */ C.isValidElement(e) ? null : e.props.propertyIsEnumerable("ref") ? e.props.ref : (
    // @ts-expect-error element.ref is not included in the ReactElement type
    // We cannot check for it, but isValidElement is true at this point
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    e.ref
  );
}
const ax = /* @__PURE__ */ C.createContext();
process.env.NODE_ENV !== "production" && (i.node, i.bool);
const lx = () => C.useContext(ax) ?? !1, cx = /* @__PURE__ */ C.createContext(void 0);
process.env.NODE_ENV !== "production" && (i.node, i.object);
function ux(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Vi(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Vi(o, n) : n;
}
function dx({
  props: e,
  name: t
}) {
  const r = C.useContext(cx);
  return ux({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
function fx(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const jf = (e, t, r, n = []) => {
  let o = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = r : o && typeof o == "object" && (o[s] = r) : o && typeof o == "object" && (o[s] || (o[s] = n.includes(s) ? [] : {}), o = o[s]);
  });
}, px = (e, t, r) => {
  function n(o, s = [], a = []) {
    Object.entries(o).forEach(([l, c]) => {
      (!r || r && !r([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  n(e);
}, hx = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Nl(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, s = {}, a = {};
  return px(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(l, c))) {
        const d = `--${r ? `${r}-` : ""}${l.join("-")}`, f = hx(l, c);
        Object.assign(o, {
          [d]: f
        }), jf(s, l, `var(${d})`, u), jf(a, l, `var(${d}, ${f})`, u);
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
function mx(e, t = {}) {
  const {
    getSelector: r = m,
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
  } = Nl(c, t);
  let h = f;
  const b = {}, {
    [l]: y,
    ...g
  } = s;
  if (Object.entries(g || {}).forEach(([v, O]) => {
    const {
      vars: S,
      css: R,
      varsWithDefaults: w
    } = Nl(O, t);
    h = vt(h, w), b[v] = {
      css: R,
      vars: S
    };
  }), y) {
    const {
      css: v,
      vars: O,
      varsWithDefaults: S
    } = Nl(y, t);
    h = vt(h, S), b[l] = {
      css: v,
      vars: O
    };
  }
  function m(v, O) {
    var R, w;
    let S = o;
    if (o === "class" && (S = ".%s"), o === "data" && (S = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (S = `[${o}="%s"]`), v) {
      if (S === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((w = (R = s[v]) == null ? void 0 : R.palette) == null ? void 0 : w.mode) || v})`]: {
            ":root": O
          }
        };
      if (S)
        return e.defaultColorScheme === v ? `:root, ${S.replace("%s", String(v))}` : S.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let v = {
        ...u
      };
      return Object.entries(b).forEach(([, {
        vars: O
      }]) => {
        v = vt(v, O);
      }), v;
    },
    generateStyleSheets: () => {
      var A, E;
      const v = [], O = e.defaultColorScheme || "light";
      function S(P, k) {
        Object.keys(k).length && v.push(typeof P == "string" ? {
          [P]: {
            ...k
          }
        } : P);
      }
      S(r(void 0, {
        ...d
      }), d);
      const {
        [O]: R,
        ...w
      } = b;
      if (R) {
        const {
          css: P
        } = R, k = (E = (A = s[O]) == null ? void 0 : A.palette) == null ? void 0 : E.mode, q = !n && k ? {
          colorScheme: k,
          ...P
        } : {
          ...P
        };
        S(r(O, {
          ...q
        }), q);
      }
      return Object.entries(w).forEach(([P, {
        css: k
      }]) => {
        var z, V;
        const q = (V = (z = s[P]) == null ? void 0 : z.palette) == null ? void 0 : V.mode, G = !n && q ? {
          colorScheme: q,
          ...k
        } : {
          ...k
        };
        S(r(P, {
          ...G
        }), G);
      }), v;
    }
  };
}
function yx(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const gx = (e, t) => e.filter((r) => t.includes(r)), Zo = (e, t, r) => {
  const n = e.keys[0];
  Array.isArray(t) ? t.forEach((o, s) => {
    r((a, l) => {
      s <= e.keys.length - 1 && (s === 0 ? Object.assign(a, l) : a[e.up(e.keys[s])] = l);
    }, o);
  }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : gx(e.keys, Object.keys(t))).forEach((s) => {
    if (e.keys.includes(s)) {
      const a = t[s];
      a !== void 0 && r((l, c) => {
        n === s ? Object.assign(l, c) : l[e.up(s)] = c;
      }, a);
    }
  }) : (typeof t == "number" || typeof t == "string") && r((o, s) => {
    Object.assign(o, s);
  }, t);
};
function Gr(e) {
  return e ? `Level${e}` : "";
}
function Fu(e) {
  return e.unstable_level > 0 && e.container;
}
function bx(e) {
  return function(r) {
    return `var(--Grid-${r}Spacing${Gr(e.unstable_level)})`;
  };
}
function za(e) {
  return function(r) {
    return e.unstable_level === 0 ? `var(--Grid-${r}Spacing)` : `var(--Grid-${r}Spacing${Gr(e.unstable_level - 1)})`;
  };
}
function To(e) {
  return e.unstable_level === 0 ? "var(--Grid-columns)" : `var(--Grid-columns${Gr(e.unstable_level - 1)})`;
}
const vx = ({
  theme: e,
  ownerState: t
}) => {
  const r = za(t), n = {};
  return Zo(e.breakpoints, t.size, (o, s) => {
    let a = {};
    s === "grow" && (a = {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%"
    }), s === "auto" && (a = {
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: "none",
      width: "auto"
    }), typeof s == "number" && (a = {
      flexGrow: 0,
      flexBasis: "auto",
      width: `calc(100% * ${s} / ${To(t)} - (${To(t)} - ${s}) * (${r("column")} / ${To(t)}))`
    }), o(n, a);
  }), n;
}, Ex = ({
  theme: e,
  ownerState: t
}) => {
  const r = za(t), n = {};
  return Zo(e.breakpoints, t.offset, (o, s) => {
    let a = {};
    s === "auto" && (a = {
      marginLeft: "auto"
    }), typeof s == "number" && (a = {
      marginLeft: s === 0 ? "0px" : `calc(100% * ${s} / ${To(t)} + ${r("column")} * ${s} / ${To(t)})`
    }), o(n, a);
  }), n;
}, Sx = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const r = Fu(t) ? {
    [`--Grid-columns${Gr(t.unstable_level)}`]: To(t)
  } : {
    "--Grid-columns": 12
  };
  return Zo(e.breakpoints, t.columns, (n, o) => {
    n(r, {
      [`--Grid-columns${Gr(t.unstable_level)}`]: o
    });
  }), r;
}, Tx = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const r = za(t), n = Fu(t) ? {
    // Set the default spacing as its parent spacing.
    // It will be overridden if spacing props are provided
    [`--Grid-rowSpacing${Gr(t.unstable_level)}`]: r("row")
  } : {};
  return Zo(e.breakpoints, t.rowSpacing, (o, s) => {
    var a;
    o(n, {
      [`--Grid-rowSpacing${Gr(t.unstable_level)}`]: typeof s == "string" ? s : (a = e.spacing) == null ? void 0 : a.call(e, s)
    });
  }), n;
}, Cx = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const r = za(t), n = Fu(t) ? {
    // Set the default spacing as its parent spacing.
    // It will be overridden if spacing props are provided
    [`--Grid-columnSpacing${Gr(t.unstable_level)}`]: r("column")
  } : {};
  return Zo(e.breakpoints, t.columnSpacing, (o, s) => {
    var a;
    o(n, {
      [`--Grid-columnSpacing${Gr(t.unstable_level)}`]: typeof s == "string" ? s : (a = e.spacing) == null ? void 0 : a.call(e, s)
    });
  }), n;
}, Ox = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const r = {};
  return Zo(e.breakpoints, t.direction, (n, o) => {
    n(r, {
      flexDirection: o
    });
  }), r;
}, xx = ({
  ownerState: e
}) => {
  const t = bx(e);
  return {
    minWidth: 0,
    boxSizing: "border-box",
    ...e.container && {
      display: "flex",
      flexWrap: "wrap",
      ...e.wrap && e.wrap !== "wrap" && {
        flexWrap: e.wrap
      },
      gap: `${t("row")} ${t("column")}`
    }
  };
}, wx = (e) => {
  const t = [];
  return Object.entries(e).forEach(([r, n]) => {
    n !== !1 && n !== void 0 && t.push(`grid-${r}-${String(n)}`);
  }), t;
}, Rx = (e, t = "xs") => {
  function r(n) {
    return n === void 0 ? !1 : typeof n == "string" && !Number.isNaN(Number(n)) || typeof n == "number" && n > 0;
  }
  if (r(e))
    return [`spacing-${t}-${String(e)}`];
  if (typeof e == "object" && !Array.isArray(e)) {
    const n = [];
    return Object.entries(e).forEach(([o, s]) => {
      r(s) && n.push(`spacing-${o}-${String(s)}`);
    }), n;
  }
  return [];
}, _x = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, r]) => `direction-${t}-${r}`) : [`direction-xs-${String(e)}`], Nx = fs(), Ax = Pm("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function Px(e) {
  return Nu({
    props: e,
    name: "MuiGrid",
    defaultTheme: Nx
  });
}
function Ix(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Ax,
    useThemeProps: r = Px,
    componentName: n = "MuiGrid"
  } = e, o = (c, u) => {
    const {
      container: d,
      direction: f,
      spacing: h,
      wrap: b,
      size: y
    } = c, g = {
      root: ["root", d && "container", b !== "wrap" && `wrap-xs-${String(b)}`, ..._x(f), ...wx(y), ...d ? Rx(h, u.breakpoints.keys[0]) : []]
    };
    return xe(g, (m) => Se(n, m), {});
  };
  function s(c, u, d = () => !0) {
    const f = {};
    return c === null || (Array.isArray(c) ? c.forEach((h, b) => {
      h !== null && d(h) && u.keys[b] && (f[u.keys[b]] = h);
    }) : typeof c == "object" ? Object.keys(c).forEach((h) => {
      const b = c[h];
      b != null && d(b) && (f[h] = b);
    }) : f[u.keys[0]] = c), f;
  }
  const a = t(Sx, Cx, Tx, vx, Ox, xx, Ex), l = /* @__PURE__ */ C.forwardRef(function(u, d) {
    const f = ps(), h = r(u), b = hs(h), {
      className: y,
      children: g,
      columns: m = 12,
      container: T = !1,
      component: x = "div",
      direction: v = "row",
      wrap: O = "wrap",
      size: S = {},
      offset: R = {},
      spacing: w = 0,
      rowSpacing: A = w,
      columnSpacing: E = w,
      unstable_level: P = 0,
      ...k
    } = b, q = s(S, f.breakpoints, (F) => F !== !1), G = s(R, f.breakpoints), z = u.columns ?? (P ? void 0 : m), V = u.spacing ?? (P ? void 0 : w), U = u.rowSpacing ?? u.spacing ?? (P ? void 0 : A), Q = u.columnSpacing ?? u.spacing ?? (P ? void 0 : E), B = {
      ...b,
      level: P,
      columns: z,
      container: T,
      direction: v,
      wrap: O,
      spacing: V,
      rowSpacing: U,
      columnSpacing: Q,
      size: q,
      offset: G
    }, X = o(B, f);
    return /* @__PURE__ */ p(a, {
      ref: d,
      as: x,
      ownerState: B,
      className: de(X.root, y),
      ...k,
      children: C.Children.map(g, (F) => {
        var W;
        return /* @__PURE__ */ C.isValidElement(F) && Us(F, ["Grid"]) ? /* @__PURE__ */ C.cloneElement(F, {
          unstable_level: ((W = F.props) == null ? void 0 : W.unstable_level) ?? P + 1
        }) : F;
      })
    });
  });
  return process.env.NODE_ENV !== "production" && (l.propTypes = {
    children: i.node,
    className: i.string,
    columns: i.oneOfType([i.arrayOf(i.number), i.number, i.object]),
    columnSpacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
    component: i.elementType,
    container: i.bool,
    direction: i.oneOfType([i.oneOf(["column-reverse", "column", "row-reverse", "row"]), i.arrayOf(i.oneOf(["column-reverse", "column", "row-reverse", "row"])), i.object]),
    offset: i.oneOfType([i.string, i.number, i.arrayOf(i.oneOfType([i.string, i.number])), i.object]),
    rowSpacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
    size: i.oneOfType([i.string, i.bool, i.number, i.arrayOf(i.oneOfType([i.string, i.bool, i.number])), i.object]),
    spacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
    sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
    wrap: i.oneOf(["nowrap", "wrap-reverse", "wrap"])
  }), l.muiName = "Grid", l;
}
const Dx = fs(), $x = Pm("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function kx(e) {
  return Nu({
    props: e,
    name: "MuiStack",
    defaultTheme: Dx
  });
}
function Mx(e, t) {
  const r = C.Children.toArray(e).filter(Boolean);
  return r.reduce((n, o, s) => (n.push(o), s < r.length - 1 && n.push(/* @__PURE__ */ C.cloneElement(t, {
    key: `separator-${s}`
  })), n), []);
}
const Fx = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Lx = ({
  ownerState: e,
  theme: t
}) => {
  let r = {
    display: "flex",
    flexDirection: "column",
    ...Vt({
      theme: t
    }, Bn({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (n) => ({
      flexDirection: n
    }))
  };
  if (e.spacing) {
    const n = ka(t), o = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = Bn({
      values: e.direction,
      base: o
    }), a = Bn({
      values: e.spacing,
      base: o
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const h = u > 0 ? s[d[u - 1]] : "column";
        s[c] = h;
      }
    }), r = vt(r, Vt({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: Kn(n, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Fx(u ? s[u] : e.direction)}`]: Kn(n, c)
      }
    }));
  }
  return r = BC(t.breakpoints, r), r;
};
function qx(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = $x,
    useThemeProps: r = kx,
    componentName: n = "MuiStack"
  } = e, o = () => xe({
    root: ["root"]
  }, (c) => Se(n, c), {}), s = t(Lx), a = /* @__PURE__ */ C.forwardRef(function(c, u) {
    const d = r(c), f = hs(d), {
      component: h = "div",
      direction: b = "column",
      spacing: y = 0,
      divider: g,
      children: m,
      className: T,
      useFlexGap: x = !1,
      ...v
    } = f, O = {
      direction: b,
      spacing: y,
      useFlexGap: x
    }, S = o();
    return /* @__PURE__ */ p(s, {
      as: h,
      ownerState: O,
      ref: u,
      className: de(S.root, T),
      ...v,
      children: g ? Mx(m, g) : m
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
const Bf = {
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
    paper: Li.white,
    default: Li.white
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
}, Al = {
  text: {
    primary: Li.white,
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
    active: Li.white,
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
function Vf(e, t, r, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Iu(e.main, o) : t === "dark" && (e.dark = Pu(e.main, s)));
}
function jx(e = "light") {
  return e === "dark" ? {
    main: lo[200],
    light: lo[50],
    dark: lo[400]
  } : {
    main: lo[700],
    light: lo[400],
    dark: lo[800]
  };
}
function Bx(e = "light") {
  return e === "dark" ? {
    main: ao[200],
    light: ao[50],
    dark: ao[400]
  } : {
    main: ao[500],
    light: ao[300],
    dark: ao[700]
  };
}
function Vx(e = "light") {
  return e === "dark" ? {
    main: xn[500],
    light: xn[300],
    dark: xn[700]
  } : {
    main: xn[700],
    light: xn[400],
    dark: xn[800]
  };
}
function zx(e = "light") {
  return e === "dark" ? {
    main: co[400],
    light: co[300],
    dark: co[700]
  } : {
    main: co[700],
    light: co[500],
    dark: co[900]
  };
}
function Ux(e = "light") {
  return e === "dark" ? {
    main: uo[400],
    light: uo[300],
    dark: uo[700]
  } : {
    main: uo[800],
    light: uo[500],
    dark: uo[900]
  };
}
function Gx(e = "light") {
  return e === "dark" ? {
    main: ui[400],
    light: ui[300],
    dark: ui[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ui[500],
    dark: ui[900]
  };
}
function Lu(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, s = e.primary || jx(t), a = e.secondary || Bx(t), l = e.error || Vx(t), c = e.info || zx(t), u = e.success || Ux(t), d = e.warning || Gx(t);
  function f(g) {
    const m = Df(g, Al.text.primary) >= r ? Al.text.primary : Bf.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Df(g, m);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${m} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const h = ({
    color: g,
    name: m,
    mainShade: T = 500,
    lightShade: x = 300,
    darkShade: v = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[T] && (g.main = g[T]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Dr(11, m ? ` (${m})` : "", T));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Dr(12, m ? ` (${m})` : "", JSON.stringify(g.main)));
    return Vf(g, "light", x, n), Vf(g, "dark", v, n), g.contrastText || (g.contrastText = f(g.main)), g;
  }, b = {
    dark: Al,
    light: Bf
  };
  return process.env.NODE_ENV !== "production" && (b[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), vt({
    // A collection of common colors.
    common: {
      ...Li
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: xT,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b[t]
  }, o);
}
function Wx(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, s] = n;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function Hx(e, t) {
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
function Kx(e) {
  return Math.round(e * 1e5) / 1e5;
}
const zf = {
  textTransform: "uppercase"
}, Uf = '"Roboto", "Helvetica", "Arial", sans-serif';
function Yx(e, t) {
  const {
    fontFamily: r = Uf,
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
  const h = n / 14, b = d || ((m) => `${m / c * h}rem`), y = (m, T, x, v, O) => ({
    fontFamily: r,
    fontWeight: m,
    fontSize: b(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: x,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Uf ? {
      letterSpacing: `${Kx(v / T)}em`
    } : {},
    ...O,
    ...u
  }), g = {
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
    button: y(a, 14, 1.75, 0.4, zf),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, zf),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return vt({
    htmlFontSize: c,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...g
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const Qx = 0.2, Xx = 0.14, Jx = 0.12;
function nt(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Qx})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Xx})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Jx})`].join(",");
}
const Zx = ["none", nt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), nt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), nt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), nt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), nt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), nt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), nt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), nt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), nt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), nt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), nt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), nt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), nt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), nt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), nt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), nt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), nt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), nt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), nt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), nt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), nt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), nt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), nt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), nt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ew = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Um = {
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
function Gf(e) {
  return `${Math.round(e)}ms`;
}
function tw(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function rw(e) {
  const t = {
    ...ew,
    ...e.easing
  }, r = {
    ...Um,
    ...e.duration
  };
  return {
    getAutoHeightDuration: tw,
    create: (o = ["all"], s = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", f = (h) => !Number.isNaN(parseFloat(h));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : Gf(a)} ${l} ${typeof c == "string" ? c : Gf(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const nw = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function fc(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Dr(20));
  const d = Lu(s), f = fs(e);
  let h = vt(f, {
    mixins: Hx(f.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Zx.slice(),
    typography: Yx(d, l),
    transitions: rw(a),
    zIndex: {
      ...nw
    }
  });
  if (h = vt(h, u), h = t.reduce((b, y) => vt(b, y), h), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (g, m) => {
      let T;
      for (T in g) {
        const x = g[T];
        if (b.includes(T) && Object.keys(x).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Se("", T);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: x
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[T] = {};
        }
      }
    };
    Object.keys(h.components).forEach((g) => {
      const m = h.components[g].styleOverrides;
      m && g.startsWith("Mui") && y(m, g);
    });
  }
  return h.unstable_sxConfig = {
    ...ds,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(y) {
    return Qo({
      sx: y,
      theme: this
    });
  }, h;
}
function pc(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ow = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = pc(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Gm(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Wm(e) {
  return e === "dark" ? ow : [];
}
function iw(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, s = Lu(t);
  return {
    palette: s,
    opacity: {
      ...Gm(s.mode),
      ...r
    },
    overlays: n || Wm(s.mode),
    ...o
  };
}
function sw(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const aw = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], lw = (e) => (t, r) => {
  const n = e.colorSchemeSelector;
  let o = n;
  if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), n != null && n.startsWith("data-") && !n.includes("%s") && (o = `[${n}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return aw(e.cssVarPrefix).forEach((a) => {
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
function cw(e) {
  return Rr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function uw(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let s = 0; s < o.length; s++) {
      const [a, l] = o[s];
      !cw(l) || a.startsWith("unstable_") ? delete n[a] : Rr(l) && (n[a] = {
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
function dw(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function L(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ei(e) {
  return !e || !e.startsWith("hsl") ? e : Im(e);
}
function kr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = vi(Ei(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function fw(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const gr = (e) => {
  try {
    return e();
  } catch {
  }
}, pw = (e = "mui") => fx(e);
function Pl(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = iw({
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
  } = fc({
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
      ...Gm(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Wm(o)
  }, a;
}
function hw(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: a = sw,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    ...c
  } = e, u = Object.keys(r)[0], d = n || (r.light && u !== "light" ? "light" : u), f = pw(s), {
    [d]: h,
    light: b,
    dark: y,
    ...g
  } = r, m = {
    ...g
  };
  let T = h;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Dr(21, d));
  const x = Pl(m, T, c, d);
  b && !m.light && Pl(m, b, void 0, "light"), y && !m.dark && Pl(m, y, void 0, "dark");
  let v = {
    defaultColorScheme: d,
    ...x,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    getCssVar: f,
    colorSchemes: m,
    font: {
      ...Wx(x.typography),
      ...x.font
    },
    spacing: fw(c.spacing)
  };
  Object.keys(v.colorSchemes).forEach((A) => {
    const E = v.colorSchemes[A].palette, P = (k) => {
      const q = k.split("-"), G = q[1], z = q[2];
      return f(k, E[G][z]);
    };
    if (E.mode === "light" && (L(E.common, "background", "#fff"), L(E.common, "onBackground", "#000")), E.mode === "dark" && (L(E.common, "background", "#000"), L(E.common, "onBackground", "#fff")), dw(E, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), E.mode === "light") {
      L(E.Alert, "errorColor", He(E.error.light, 0.6)), L(E.Alert, "infoColor", He(E.info.light, 0.6)), L(E.Alert, "successColor", He(E.success.light, 0.6)), L(E.Alert, "warningColor", He(E.warning.light, 0.6)), L(E.Alert, "errorFilledBg", P("palette-error-main")), L(E.Alert, "infoFilledBg", P("palette-info-main")), L(E.Alert, "successFilledBg", P("palette-success-main")), L(E.Alert, "warningFilledBg", P("palette-warning-main")), L(E.Alert, "errorFilledColor", gr(() => E.getContrastText(E.error.main))), L(E.Alert, "infoFilledColor", gr(() => E.getContrastText(E.info.main))), L(E.Alert, "successFilledColor", gr(() => E.getContrastText(E.success.main))), L(E.Alert, "warningFilledColor", gr(() => E.getContrastText(E.warning.main))), L(E.Alert, "errorStandardBg", Ke(E.error.light, 0.9)), L(E.Alert, "infoStandardBg", Ke(E.info.light, 0.9)), L(E.Alert, "successStandardBg", Ke(E.success.light, 0.9)), L(E.Alert, "warningStandardBg", Ke(E.warning.light, 0.9)), L(E.Alert, "errorIconColor", P("palette-error-main")), L(E.Alert, "infoIconColor", P("palette-info-main")), L(E.Alert, "successIconColor", P("palette-success-main")), L(E.Alert, "warningIconColor", P("palette-warning-main")), L(E.AppBar, "defaultBg", P("palette-grey-100")), L(E.Avatar, "defaultBg", P("palette-grey-400")), L(E.Button, "inheritContainedBg", P("palette-grey-300")), L(E.Button, "inheritContainedHoverBg", P("palette-grey-A100")), L(E.Chip, "defaultBorder", P("palette-grey-400")), L(E.Chip, "defaultAvatarColor", P("palette-grey-700")), L(E.Chip, "defaultIconColor", P("palette-grey-700")), L(E.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), L(E.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), L(E.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), L(E.LinearProgress, "primaryBg", Ke(E.primary.main, 0.62)), L(E.LinearProgress, "secondaryBg", Ke(E.secondary.main, 0.62)), L(E.LinearProgress, "errorBg", Ke(E.error.main, 0.62)), L(E.LinearProgress, "infoBg", Ke(E.info.main, 0.62)), L(E.LinearProgress, "successBg", Ke(E.success.main, 0.62)), L(E.LinearProgress, "warningBg", Ke(E.warning.main, 0.62)), L(E.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), L(E.Slider, "primaryTrack", Ke(E.primary.main, 0.62)), L(E.Slider, "secondaryTrack", Ke(E.secondary.main, 0.62)), L(E.Slider, "errorTrack", Ke(E.error.main, 0.62)), L(E.Slider, "infoTrack", Ke(E.info.main, 0.62)), L(E.Slider, "successTrack", Ke(E.success.main, 0.62)), L(E.Slider, "warningTrack", Ke(E.warning.main, 0.62));
      const k = As(E.background.default, 0.8);
      L(E.SnackbarContent, "bg", k), L(E.SnackbarContent, "color", gr(() => E.getContrastText(k))), L(E.SpeedDialAction, "fabHoverBg", As(E.background.paper, 0.15)), L(E.StepConnector, "border", P("palette-grey-400")), L(E.StepContent, "border", P("palette-grey-400")), L(E.Switch, "defaultColor", P("palette-common-white")), L(E.Switch, "defaultDisabledColor", P("palette-grey-100")), L(E.Switch, "primaryDisabledColor", Ke(E.primary.main, 0.62)), L(E.Switch, "secondaryDisabledColor", Ke(E.secondary.main, 0.62)), L(E.Switch, "errorDisabledColor", Ke(E.error.main, 0.62)), L(E.Switch, "infoDisabledColor", Ke(E.info.main, 0.62)), L(E.Switch, "successDisabledColor", Ke(E.success.main, 0.62)), L(E.Switch, "warningDisabledColor", Ke(E.warning.main, 0.62)), L(E.TableCell, "border", Ke(Ns(E.divider, 1), 0.88)), L(E.Tooltip, "bg", Ns(E.grey[700], 0.92));
    }
    if (E.mode === "dark") {
      L(E.Alert, "errorColor", Ke(E.error.light, 0.6)), L(E.Alert, "infoColor", Ke(E.info.light, 0.6)), L(E.Alert, "successColor", Ke(E.success.light, 0.6)), L(E.Alert, "warningColor", Ke(E.warning.light, 0.6)), L(E.Alert, "errorFilledBg", P("palette-error-dark")), L(E.Alert, "infoFilledBg", P("palette-info-dark")), L(E.Alert, "successFilledBg", P("palette-success-dark")), L(E.Alert, "warningFilledBg", P("palette-warning-dark")), L(E.Alert, "errorFilledColor", gr(() => E.getContrastText(E.error.dark))), L(E.Alert, "infoFilledColor", gr(() => E.getContrastText(E.info.dark))), L(E.Alert, "successFilledColor", gr(() => E.getContrastText(E.success.dark))), L(E.Alert, "warningFilledColor", gr(() => E.getContrastText(E.warning.dark))), L(E.Alert, "errorStandardBg", He(E.error.light, 0.9)), L(E.Alert, "infoStandardBg", He(E.info.light, 0.9)), L(E.Alert, "successStandardBg", He(E.success.light, 0.9)), L(E.Alert, "warningStandardBg", He(E.warning.light, 0.9)), L(E.Alert, "errorIconColor", P("palette-error-main")), L(E.Alert, "infoIconColor", P("palette-info-main")), L(E.Alert, "successIconColor", P("palette-success-main")), L(E.Alert, "warningIconColor", P("palette-warning-main")), L(E.AppBar, "defaultBg", P("palette-grey-900")), L(E.AppBar, "darkBg", P("palette-background-paper")), L(E.AppBar, "darkColor", P("palette-text-primary")), L(E.Avatar, "defaultBg", P("palette-grey-600")), L(E.Button, "inheritContainedBg", P("palette-grey-800")), L(E.Button, "inheritContainedHoverBg", P("palette-grey-700")), L(E.Chip, "defaultBorder", P("palette-grey-700")), L(E.Chip, "defaultAvatarColor", P("palette-grey-300")), L(E.Chip, "defaultIconColor", P("palette-grey-300")), L(E.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), L(E.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), L(E.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), L(E.LinearProgress, "primaryBg", He(E.primary.main, 0.5)), L(E.LinearProgress, "secondaryBg", He(E.secondary.main, 0.5)), L(E.LinearProgress, "errorBg", He(E.error.main, 0.5)), L(E.LinearProgress, "infoBg", He(E.info.main, 0.5)), L(E.LinearProgress, "successBg", He(E.success.main, 0.5)), L(E.LinearProgress, "warningBg", He(E.warning.main, 0.5)), L(E.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), L(E.Slider, "primaryTrack", He(E.primary.main, 0.5)), L(E.Slider, "secondaryTrack", He(E.secondary.main, 0.5)), L(E.Slider, "errorTrack", He(E.error.main, 0.5)), L(E.Slider, "infoTrack", He(E.info.main, 0.5)), L(E.Slider, "successTrack", He(E.success.main, 0.5)), L(E.Slider, "warningTrack", He(E.warning.main, 0.5));
      const k = As(E.background.default, 0.98);
      L(E.SnackbarContent, "bg", k), L(E.SnackbarContent, "color", gr(() => E.getContrastText(k))), L(E.SpeedDialAction, "fabHoverBg", As(E.background.paper, 0.15)), L(E.StepConnector, "border", P("palette-grey-600")), L(E.StepContent, "border", P("palette-grey-600")), L(E.Switch, "defaultColor", P("palette-grey-300")), L(E.Switch, "defaultDisabledColor", P("palette-grey-600")), L(E.Switch, "primaryDisabledColor", He(E.primary.main, 0.55)), L(E.Switch, "secondaryDisabledColor", He(E.secondary.main, 0.55)), L(E.Switch, "errorDisabledColor", He(E.error.main, 0.55)), L(E.Switch, "infoDisabledColor", He(E.info.main, 0.55)), L(E.Switch, "successDisabledColor", He(E.success.main, 0.55)), L(E.Switch, "warningDisabledColor", He(E.warning.main, 0.55)), L(E.TableCell, "border", He(Ns(E.divider, 1), 0.68)), L(E.Tooltip, "bg", Ns(E.grey[700], 0.92));
    }
    kr(E.background, "default"), kr(E.background, "paper"), kr(E.common, "background"), kr(E.common, "onBackground"), kr(E, "divider"), Object.keys(E).forEach((k) => {
      const q = E[k];
      q && typeof q == "object" && (q.main && L(E[k], "mainChannel", vi(Ei(q.main))), q.light && L(E[k], "lightChannel", vi(Ei(q.light))), q.dark && L(E[k], "darkChannel", vi(Ei(q.dark))), q.contrastText && L(E[k], "contrastTextChannel", vi(Ei(q.contrastText))), k === "text" && (kr(E[k], "primary"), kr(E[k], "secondary")), k === "action" && (q.active && kr(E[k], "active"), q.selected && kr(E[k], "selected")));
    });
  }), v = t.reduce((A, E) => vt(A, E), v);
  const O = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: lw(v)
  }, {
    vars: S,
    generateThemeVars: R,
    generateStyleSheets: w
  } = mx(v, O);
  return v.vars = S, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([A, E]) => {
    v[A] = E;
  }), v.generateThemeVars = R, v.generateStyleSheets = w, v.generateSpacing = function() {
    return xm(c.spacing, ka(this));
  }, v.getColorSchemeSelector = yx(l), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = a, v.unstable_sxConfig = {
    ...ds,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, v.unstable_sx = function(E) {
    return Qo({
      sx: E,
      theme: this
    });
  }, v.toRuntimeSource = uw, v;
}
function Wf(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Lu({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ms(e = {}, ...t) {
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
      return fc(e, ...t);
    let d = r;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = fc({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, Wf(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, Wf(f, "light", u.light)), f;
  }
  return !r && !("light" in u) && l === "light" && (u.light = !0), hw({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Ua = ms();
function ei() {
  const e = ps(Ua);
  return process.env.NODE_ENV !== "production" && C.useDebugValue(e), e[as] || e;
}
function Ga({
  props: e,
  name: t
}) {
  return Nu({
    props: e,
    name: t,
    defaultTheme: Ua,
    themeId: as
  });
}
function Hm(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const At = (e) => Hm(e) && e !== "classes", ee = Am({
  themeId: as,
  defaultTheme: Ua,
  rootShouldForwardProp: At
});
function Km(e) {
  return /* @__PURE__ */ p(wm, {
    ...e,
    defaultTheme: Ua,
    themeId: as
  });
}
process.env.NODE_ENV !== "production" && (Km.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool])
});
function mw(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ p(Km, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
function yw() {
  return hs;
}
const Hf = {
  theme: void 0
};
function _e(e) {
  let t, r;
  return (n) => {
    let o = t;
    return (o === void 0 || n.theme !== r) && (Hf.theme = n.theme, o = e(Hf), t = o, r = n.theme), o;
  };
}
process.env.NODE_ENV !== "production" && (i.node, i.object.isRequired);
function Pe(e) {
  return dx(e);
}
function gw(e) {
  return Se("MuiSvgIcon", e);
}
Ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const bw = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Z(t)}`, `fontSize${Z(r)}`]
  };
  return xe(o, gw, n);
}, vw = ee("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Z(r.color)}`], t[`fontSize${Z(r.fontSize)}`]];
  }
})(_e(({
  theme: e
}) => {
  var t, r, n, o, s, a, l, c, u, d, f, h, b, y;
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
        props: (g) => !g.hasSvgAsChild,
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
      ...Object.entries((e.vars ?? e).palette).filter(([, g]) => g && g.main).map(([g]) => {
        var m, T;
        return {
          props: {
            color: g
          },
          style: {
            color: (T = (m = (e.vars ?? e).palette) == null ? void 0 : m[g]) == null ? void 0 : T.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (h = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (b = (e.vars ?? e).palette) == null ? void 0 : b.action) == null ? void 0 : y.disabled
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
})), Ui = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    viewBox: h = "0 0 24 24",
    ...b
  } = n, y = /* @__PURE__ */ C.isValidElement(o) && o.type === "svg", g = {
    ...n,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: y
  }, m = {};
  d || (m.viewBox = h);
  const T = bw(g);
  return /* @__PURE__ */ le(vw, {
    as: l,
    className: de(T.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: r,
    ...m,
    ...b,
    ...y && o.props,
    ownerState: g,
    children: [y ? o.props.children : o, f ? /* @__PURE__ */ p("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Ui.propTypes = {
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
Ui && (Ui.muiName = "SvgIcon");
function Yr(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ p(Ui, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Ui.muiName, /* @__PURE__ */ C.memo(/* @__PURE__ */ C.forwardRef(r));
}
function Ym(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function hc(e, t) {
  return hc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, hc(e, t);
}
function Qm(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, hc(e, t);
}
const Kf = {
  disabled: !1
};
var Ew = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.shape({
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
const ra = ht.createContext(null);
var Sw = function(t) {
  return t.scrollTop;
}, Si = "unmounted", wn = "exited", Rn = "entering", mo = "entered", mc = "exiting", cr = /* @__PURE__ */ function(e) {
  Qm(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var a = o, l = a && !a.isMounting ? n.enter : n.appear, c;
    return s.appearStatus = null, n.in ? l ? (c = wn, s.appearStatus = Rn) : c = mo : n.unmountOnExit || n.mountOnEnter ? c = Si : c = wn, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var a = o.in;
    return a && s.status === Si ? {
      status: wn
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Rn && a !== mo && (s = Rn) : (a === Rn || a === mo) && (s = mc);
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
      if (this.cancelNextCallback(), s === Rn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Cs.findDOMNode(this);
          a && Sw(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === wn && this.setState({
      status: Si
    });
  }, r.performEnter = function(o) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [Cs.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), h = l ? f.appear : f.enter;
    if (!o && !a || Kf.disabled) {
      this.safeSetState({
        status: mo
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Rn
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(h, function() {
        s.safeSetState({
          status: mo
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Cs.findDOMNode(this);
    if (!s || Kf.disabled) {
      this.safeSetState({
        status: wn
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: mc
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: wn
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : Cs.findDOMNode(this), l = o == null && !this.props.addEndListener;
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
    if (o === Si)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = Ym(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ht.createElement(ra.Provider, {
        value: null
      }, typeof a == "function" ? a(o, l) : ht.cloneElement(ht.Children.only(a), l))
    );
  }, t;
}(ht.Component);
cr.contextType = ra;
cr.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var r = Ew;
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
function fo() {
}
cr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: fo,
  onEntering: fo,
  onEntered: fo,
  onExit: fo,
  onExiting: fo,
  onExited: fo
};
cr.UNMOUNTED = Si;
cr.EXITED = wn;
cr.ENTERING = Rn;
cr.ENTERED = mo;
cr.EXITING = mc;
function Tw(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qu(e, t) {
  var r = function(s) {
    return t && xi(s) ? t(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Sa.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Cw(e, t) {
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
function An(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Ow(e, t) {
  return qu(e.children, function(r) {
    return qs(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: An(r, "appear", e),
      enter: An(r, "enter", e),
      exit: An(r, "exit", e)
    });
  });
}
function xw(e, t, r) {
  var n = qu(e.children), o = Cw(t, n);
  return Object.keys(o).forEach(function(s) {
    var a = o[s];
    if (xi(a)) {
      var l = s in t, c = s in n, u = t[s], d = xi(u) && !u.props.in;
      c && (!l || d) ? o[s] = qs(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: An(a, "exit", e),
        enter: An(a, "enter", e)
      }) : !c && l && !d ? o[s] = qs(a, {
        in: !1
      }) : c && l && xi(u) && (o[s] = qs(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: An(a, "exit", e),
        enter: An(a, "enter", e)
      }));
    }
  }), o;
}
var ww = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Rw = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ju = /* @__PURE__ */ function(e) {
  Qm(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var a = s.handleExited.bind(Tw(s));
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
      children: c ? Ow(o, l) : xw(o, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, s) {
    var a = qu(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = Zs({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, s = o.component, a = o.childFactory, l = Ym(o, ["component", "childFactory"]), c = this.state.contextValue, u = ww(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ ht.createElement(ra.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ht.createElement(ra.Provider, {
      value: c
    }, /* @__PURE__ */ ht.createElement(s, l, u));
  }, t;
}(ht.Component);
ju.propTypes = process.env.NODE_ENV !== "production" ? {
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
ju.defaultProps = Rw;
const Bu = (e) => e.scrollTop;
function yn(e, t) {
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
function _w(e) {
  return Se("MuiCollapse", e);
}
Ce("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const Nw = (e) => {
  const {
    orientation: t,
    classes: r
  } = e, n = {
    root: ["root", `${t}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${t}`],
    wrapperInner: ["wrapperInner", `${t}`]
  };
  return xe(n, _w, r);
}, Aw = ee("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.orientation], r.state === "entered" && t.entered, r.state === "exited" && !r.in && r.collapsedSize === "0px" && t.hidden];
  }
})(_e(({
  theme: e
}) => ({
  height: 0,
  overflow: "hidden",
  transition: e.transitions.create("height"),
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      height: "auto",
      width: 0,
      transition: e.transitions.create("width")
    }
  }, {
    props: {
      state: "entered"
    },
    style: {
      height: "auto",
      overflow: "visible"
    }
  }, {
    props: {
      state: "entered",
      orientation: "horizontal"
    },
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.state === "exited" && !t.in && t.collapsedSize === "0px",
    style: {
      visibility: "hidden"
    }
  }]
}))), Pw = ee("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (e, t) => t.wrapper
})({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), Iw = ee("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (e, t) => t.wrapperInner
})({
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), na = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiCollapse"
  }), {
    addEndListener: o,
    children: s,
    className: a,
    collapsedSize: l = "0px",
    component: c,
    easing: u,
    in: d,
    onEnter: f,
    onEntered: h,
    onEntering: b,
    onExit: y,
    onExited: g,
    onExiting: m,
    orientation: T = "vertical",
    style: x,
    timeout: v = Um.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O = cr,
    ...S
  } = n, R = {
    ...n,
    orientation: T,
    collapsedSize: l
  }, w = Nw(R), A = ei(), E = Mu(), P = C.useRef(null), k = C.useRef(), q = typeof l == "number" ? `${l}px` : l, G = T === "horizontal", z = G ? "width" : "height", V = C.useRef(null), U = dt(r, V), Q = (Y) => (oe) => {
    if (Y) {
      const ce = V.current;
      oe === void 0 ? Y(ce) : Y(ce, oe);
    }
  }, B = () => P.current ? P.current[G ? "clientWidth" : "clientHeight"] : 0, X = Q((Y, oe) => {
    P.current && G && (P.current.style.position = "absolute"), Y.style[z] = q, f && f(Y, oe);
  }), F = Q((Y, oe) => {
    const ce = B();
    P.current && G && (P.current.style.position = "");
    const {
      duration: ue,
      easing: te
    } = yn({
      style: x,
      timeout: v,
      easing: u
    }, {
      mode: "enter"
    });
    if (v === "auto") {
      const fe = A.transitions.getAutoHeightDuration(ce);
      Y.style.transitionDuration = `${fe}ms`, k.current = fe;
    } else
      Y.style.transitionDuration = typeof ue == "string" ? ue : `${ue}ms`;
    Y.style[z] = `${ce}px`, Y.style.transitionTimingFunction = te, b && b(Y, oe);
  }), W = Q((Y, oe) => {
    Y.style[z] = "auto", h && h(Y, oe);
  }), se = Q((Y) => {
    Y.style[z] = `${B()}px`, y && y(Y);
  }), re = Q(g), J = Q((Y) => {
    const oe = B(), {
      duration: ce,
      easing: ue
    } = yn({
      style: x,
      timeout: v,
      easing: u
    }, {
      mode: "exit"
    });
    if (v === "auto") {
      const te = A.transitions.getAutoHeightDuration(oe);
      Y.style.transitionDuration = `${te}ms`, k.current = te;
    } else
      Y.style.transitionDuration = typeof ce == "string" ? ce : `${ce}ms`;
    Y.style[z] = q, Y.style.transitionTimingFunction = ue, m && m(Y);
  });
  return /* @__PURE__ */ p(O, {
    in: d,
    onEnter: X,
    onEntered: W,
    onEntering: F,
    onExit: se,
    onExited: re,
    onExiting: J,
    addEndListener: (Y) => {
      v === "auto" && E.start(k.current || 0, Y), o && o(V.current, Y);
    },
    nodeRef: V,
    timeout: v === "auto" ? null : v,
    ...S,
    children: (Y, oe) => /* @__PURE__ */ p(Aw, {
      as: c,
      className: de(w.root, a, {
        entered: w.entered,
        exited: !d && q === "0px" && w.hidden
      }[Y]),
      style: {
        [G ? "minWidth" : "minHeight"]: q,
        ...x
      },
      ref: U,
      ...oe,
      // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
      // that might have been forwarded from the Transition component.
      ownerState: {
        ...R,
        state: Y
      },
      children: /* @__PURE__ */ p(Pw, {
        ownerState: {
          ...R,
          state: Y
        },
        className: w.wrapper,
        ref: P,
        children: /* @__PURE__ */ p(Iw, {
          ownerState: {
            ...R,
            state: Y
          },
          className: w.wrapperInner,
          children: s
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (na.propTypes = {
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
   * The content node to be collapsed.
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
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: i.oneOfType([i.number, i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Va,
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
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: i.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
na && (na.muiSupportAuto = !0);
function Dw(e) {
  return Se("MuiPaper", e);
}
Ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const $w = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, s = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return xe(s, Dw, o);
}, kw = ee("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(_e(({
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
}))), Vu = /* @__PURE__ */ C.forwardRef(function(t, r) {
  var b;
  const n = Pe({
    props: t,
    name: "MuiPaper"
  }), o = ei(), {
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
  }, h = $w(f);
  return process.env.NODE_ENV !== "production" && o.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ p(kw, {
    as: a,
    ownerState: f,
    className: de(h.root, s),
    ref: r,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (b = o.vars.overlays) == null ? void 0 : b[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Je("#fff", pc(l))}, ${Je("#fff", pc(l))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Vu.propTypes = {
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
  elevation: Kr(qm, (e) => {
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
const zu = /* @__PURE__ */ C.createContext({});
process.env.NODE_ENV !== "production" && (zu.displayName = "AccordionContext");
function Mt(e, t) {
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
    ...h
  } = s, b = d[e] || n, y = zm(f[e], o), {
    props: {
      component: g,
      ...m
    },
    internalRef: T
  } = Vm({
    className: r,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: y
  }), x = dt(T, y == null ? void 0 : y.ref, t.ref), v = a ? a(m) : {}, O = {
    ...o,
    ...v
  }, S = e === "root" ? g || u : g, R = jm(b, {
    ...e === "root" && !u && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...m,
    ...S && {
      as: S
    },
    ref: x
  }, O);
  return Object.keys(v).forEach((w) => {
    delete R[w];
  }), [b, R];
}
function Mw(e) {
  return Se("MuiAccordion", e);
}
const Ps = Ce("MuiAccordion", ["root", "heading", "rounded", "expanded", "disabled", "gutters", "region"]), Fw = (e) => {
  const {
    classes: t,
    square: r,
    expanded: n,
    disabled: o,
    disableGutters: s
  } = e;
  return xe({
    root: ["root", !r && "rounded", n && "expanded", o && "disabled", !s && "gutters"],
    heading: ["heading"],
    region: ["region"]
  }, Mw, t);
}, Lw = ee(Vu, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Ps.region}`]: t.region
    }, t.root, !r.square && t.rounded, !r.disableGutters && t.gutters];
  }
})(_e(({
  theme: e
}) => {
  const t = {
    duration: e.transitions.duration.shortest
  };
  return {
    position: "relative",
    transition: e.transitions.create(["margin"], t),
    overflowAnchor: "none",
    // Keep the same scrolling position
    "&::before": {
      position: "absolute",
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (e.vars || e).palette.divider,
      transition: e.transitions.create(["opacity", "background-color"], t)
    },
    "&:first-of-type": {
      "&::before": {
        display: "none"
      }
    },
    [`&.${Ps.expanded}`]: {
      "&::before": {
        opacity: 0
      },
      "&:first-of-type": {
        marginTop: 0
      },
      "&:last-of-type": {
        marginBottom: 0
      },
      "& + &": {
        "&::before": {
          display: "none"
        }
      }
    },
    [`&.${Ps.disabled}`]: {
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    }
  };
}), _e(({
  theme: e
}) => ({
  variants: [{
    props: (t) => !t.square,
    style: {
      borderRadius: 0,
      "&:first-of-type": {
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius
      },
      "&:last-of-type": {
        borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
        borderBottomRightRadius: (e.vars || e).shape.borderRadius,
        // Fix a rendering issue on Edge
        "@supports (-ms-ime-align: auto)": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    }
  }, {
    props: (t) => !t.disableGutters,
    style: {
      [`&.${Ps.expanded}`]: {
        margin: "16px 0"
      }
    }
  }]
}))), qw = ee("h3", {
  name: "MuiAccordion",
  slot: "Heading",
  overridesResolver: (e, t) => t.heading
})({
  all: "unset"
}), Xm = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiAccordion"
  }), {
    children: o,
    className: s,
    defaultExpanded: a = !1,
    disabled: l = !1,
    disableGutters: c = !1,
    expanded: u,
    onChange: d,
    square: f = !1,
    slots: h = {},
    slotProps: b = {},
    TransitionComponent: y,
    TransitionProps: g,
    ...m
  } = n, [T, x] = zi({
    controlled: u,
    default: a,
    name: "Accordion",
    state: "expanded"
  }), v = C.useCallback((U) => {
    x(!T), d && d(U, !T);
  }, [T, d, x]), [O, ...S] = C.Children.toArray(o), R = C.useMemo(() => ({
    expanded: T,
    disabled: l,
    disableGutters: c,
    toggle: v
  }), [T, l, c, v]), w = {
    ...n,
    square: f,
    disabled: l,
    disableGutters: c,
    expanded: T
  }, A = Fw(w), E = {
    transition: y,
    ...h
  }, P = {
    transition: g,
    ...b
  }, k = {
    slots: E,
    slotProps: P
  }, [q, G] = Mt("heading", {
    elementType: qw,
    externalForwardedProps: k,
    className: A.heading,
    ownerState: w
  }), [z, V] = Mt("transition", {
    elementType: na,
    externalForwardedProps: k,
    ownerState: w
  });
  return /* @__PURE__ */ le(Lw, {
    className: de(A.root, s),
    ref: r,
    ownerState: w,
    square: f,
    ...m,
    children: [/* @__PURE__ */ p(q, {
      ...G,
      children: /* @__PURE__ */ p(zu.Provider, {
        value: R,
        children: O
      })
    }), /* @__PURE__ */ p(z, {
      in: T,
      timeout: "auto",
      ...V,
      children: /* @__PURE__ */ p("div", {
        "aria-labelledby": O.props.id,
        id: O.props["aria-controls"],
        role: "region",
        className: A.region,
        children: S
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Xm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: Kr(i.node.isRequired, (e) => {
    const t = C.Children.toArray(e.children)[0];
    return Bo.isFragment(t) ? new Error("MUI: The Accordion doesn't accept a Fragment as a child. Consider providing an array instead.") : /* @__PURE__ */ C.isValidElement(t) ? null : new Error("MUI: Expected the first child of Accordion to be a valid element.");
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, expands the accordion by default.
   * @default false
   */
  defaultExpanded: i.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, it removes the margin between two expanded accordion items and the increase of height.
   * @default false
   */
  disableGutters: i.bool,
  /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded: i.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange: i.func,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    heading: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    heading: i.elementType,
    transition: i.elementType
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: i.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: i.object
});
function jw(e) {
  return Se("MuiAccordionDetails", e);
}
Ce("MuiAccordionDetails", ["root"]);
const Bw = (e) => {
  const {
    classes: t
  } = e;
  return xe({
    root: ["root"]
  }, jw, t);
}, Vw = ee("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(_e(({
  theme: e
}) => ({
  padding: e.spacing(1, 2, 2)
}))), Jm = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiAccordionDetails"
  }), {
    className: o,
    ...s
  } = n, a = n, l = Bw(a);
  return /* @__PURE__ */ p(Vw, {
    className: de(l.root, o),
    ref: r,
    ownerState: a,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (Jm.propTypes = {
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
class oa {
  constructor() {
    li(this, "mountEffect", () => {
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
    return new oa();
  }
  static use() {
    const t = km(oa.create).current, [r, n] = C.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, C.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Uw(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function zw() {
  return oa.use();
}
function Uw() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Zm(e) {
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
  } = e, [d, f] = C.useState(!1), h = de(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), b = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + o
  }, y = de(r.child, d && r.childLeaving, n && r.childPulsate);
  return !l && !d && f(!0), C.useEffect(() => {
    if (!l && c != null) {
      const g = setTimeout(c, u);
      return () => {
        clearTimeout(g);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ p("span", {
    className: h,
    style: b,
    children: /* @__PURE__ */ p("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (Zm.propTypes = {
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
const rr = Ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), yc = 550, Gw = 80, Ww = cs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Hw = cs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Kw = cs`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Yw = ee("span", {
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
}), Qw = ee(Zm, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${rr.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ww};
    animation-duration: ${yc}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${rr.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${rr.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${rr.childLeaving} {
    opacity: 0;
    animation-name: ${Hw};
    animation-duration: ${yc}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${rr.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Kw};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ey = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: a,
    ...l
  } = n, [c, u] = C.useState([]), d = C.useRef(0), f = C.useRef(null);
  C.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const h = C.useRef(!1), b = Mu(), y = C.useRef(null), g = C.useRef(null), m = C.useCallback((O) => {
    const {
      pulsate: S,
      rippleX: R,
      rippleY: w,
      rippleSize: A,
      cb: E
    } = O;
    u((P) => [...P, /* @__PURE__ */ p(Qw, {
      classes: {
        ripple: de(s.ripple, rr.ripple),
        rippleVisible: de(s.rippleVisible, rr.rippleVisible),
        ripplePulsate: de(s.ripplePulsate, rr.ripplePulsate),
        child: de(s.child, rr.child),
        childLeaving: de(s.childLeaving, rr.childLeaving),
        childPulsate: de(s.childPulsate, rr.childPulsate)
      },
      timeout: yc,
      pulsate: S,
      rippleX: R,
      rippleY: w,
      rippleSize: A
    }, d.current)]), d.current += 1, f.current = E;
  }, [s]), T = C.useCallback((O = {}, S = {}, R = () => {
  }) => {
    const {
      pulsate: w = !1,
      center: A = o || S.pulsate,
      fakeElement: E = !1
      // For test purposes
    } = S;
    if ((O == null ? void 0 : O.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (O == null ? void 0 : O.type) === "touchstart" && (h.current = !0);
    const P = E ? null : g.current, k = P ? P.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let q, G, z;
    if (A || O === void 0 || O.clientX === 0 && O.clientY === 0 || !O.clientX && !O.touches)
      q = Math.round(k.width / 2), G = Math.round(k.height / 2);
    else {
      const {
        clientX: V,
        clientY: U
      } = O.touches && O.touches.length > 0 ? O.touches[0] : O;
      q = Math.round(V - k.left), G = Math.round(U - k.top);
    }
    if (A)
      z = Math.sqrt((2 * k.width ** 2 + k.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const V = Math.max(Math.abs((P ? P.clientWidth : 0) - q), q) * 2 + 2, U = Math.max(Math.abs((P ? P.clientHeight : 0) - G), G) * 2 + 2;
      z = Math.sqrt(V ** 2 + U ** 2);
    }
    O != null && O.touches ? y.current === null && (y.current = () => {
      m({
        pulsate: w,
        rippleX: q,
        rippleY: G,
        rippleSize: z,
        cb: R
      });
    }, b.start(Gw, () => {
      y.current && (y.current(), y.current = null);
    })) : m({
      pulsate: w,
      rippleX: q,
      rippleY: G,
      rippleSize: z,
      cb: R
    });
  }, [o, m, b]), x = C.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), v = C.useCallback((O, S) => {
    if (b.clear(), (O == null ? void 0 : O.type) === "touchend" && y.current) {
      y.current(), y.current = null, b.start(0, () => {
        v(O, S);
      });
      return;
    }
    y.current = null, u((R) => R.length > 0 ? R.slice(1) : R), f.current = S;
  }, [b]);
  return C.useImperativeHandle(r, () => ({
    pulsate: x,
    start: T,
    stop: v
  }), [x, T, v]), /* @__PURE__ */ p(Yw, {
    className: de(rr.root, s.root, a),
    ref: g,
    ...l,
    children: /* @__PURE__ */ p(ju, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (ey.propTypes = {
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
function Xw(e) {
  return Se("MuiButtonBase", e);
}
const Jw = Ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), Zw = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = xe({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Xw, o);
  return r && n && (a.root += ` ${n}`), a;
}, eR = ee("button", {
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
  [`&.${Jw.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), gn = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    focusRipple: h = !1,
    focusVisibleClassName: b,
    LinkComponent: y = "a",
    onBlur: g,
    onClick: m,
    onContextMenu: T,
    onDragLeave: x,
    onFocus: v,
    onFocusVisible: O,
    onKeyDown: S,
    onKeyUp: R,
    onMouseDown: w,
    onMouseLeave: A,
    onMouseUp: E,
    onTouchEnd: P,
    onTouchMove: k,
    onTouchStart: q,
    tabIndex: G = 0,
    TouchRippleProps: z,
    touchRippleRef: V,
    type: U,
    ...Q
  } = n, B = C.useRef(null), X = zw(), F = dt(X.ref, V), [W, se] = C.useState(!1);
  u && W && se(!1), C.useImperativeHandle(o, () => ({
    focusVisible: () => {
      se(!0), B.current.focus();
    }
  }), []);
  const re = X.shouldMount && !d && !u;
  C.useEffect(() => {
    W && h && !d && X.pulsate();
  }, [d, h, W, X]);
  function J(j, ne, pe = f) {
    return yo((ge) => (ne && ne(ge), pe || X[j](ge), !0));
  }
  const ae = J("start", w), Y = J("stop", T), oe = J("stop", x), ce = J("stop", E), ue = J("stop", (j) => {
    W && j.preventDefault(), A && A(j);
  }), te = J("start", q), fe = J("stop", P), D = J("stop", k), ve = J("stop", (j) => {
    Ff(j.target) || se(!1), g && g(j);
  }, !1), K = yo((j) => {
    B.current || (B.current = j.currentTarget), Ff(j.target) && (se(!0), O && O(j)), v && v(j);
  }), Te = () => {
    const j = B.current;
    return c && c !== "button" && !(j.tagName === "A" && j.href);
  }, mt = yo((j) => {
    h && !j.repeat && W && j.key === " " && X.stop(j, () => {
      X.start(j);
    }), j.target === j.currentTarget && Te() && j.key === " " && j.preventDefault(), S && S(j), j.target === j.currentTarget && Te() && j.key === "Enter" && !u && (j.preventDefault(), m && m(j));
  }), Et = yo((j) => {
    h && j.key === " " && W && !j.defaultPrevented && X.stop(j, () => {
      X.pulsate(j);
    }), R && R(j), m && j.target === j.currentTarget && Te() && j.key === " " && !j.defaultPrevented && m(j);
  });
  let yt = c;
  yt === "button" && (Q.href || Q.to) && (yt = y);
  const rt = {};
  yt === "button" ? (rt.type = U === void 0 ? "button" : U, rt.disabled = u) : (!Q.href && !Q.to && (rt.role = "button"), u && (rt["aria-disabled"] = u));
  const Jt = dt(r, B), We = {
    ...n,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: h,
    tabIndex: G,
    focusVisible: W
  }, $ = Zw(We);
  return /* @__PURE__ */ le(eR, {
    as: yt,
    className: de($.root, l),
    ownerState: We,
    onBlur: ve,
    onClick: m,
    onContextMenu: Y,
    onFocus: K,
    onKeyDown: mt,
    onKeyUp: Et,
    onMouseDown: ae,
    onMouseLeave: ue,
    onMouseUp: ce,
    onDragLeave: oe,
    onTouchEnd: fe,
    onTouchMove: D,
    onTouchStart: te,
    ref: Jt,
    tabIndex: u ? -1 : G,
    type: U,
    ...rt,
    ...Q,
    children: [a, re ? /* @__PURE__ */ p(ey, {
      ref: F,
      center: s,
      ...z
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (gn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: lr,
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
  component: Va,
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
function tR(e) {
  return Se("MuiAccordionSummary", e);
}
const jr = Ce("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]), rR = (e) => {
  const {
    classes: t,
    expanded: r,
    disabled: n,
    disableGutters: o
  } = e;
  return xe({
    root: ["root", r && "expanded", n && "disabled", !o && "gutters"],
    focusVisible: ["focusVisible"],
    content: ["content", r && "expanded", !o && "contentGutters"],
    expandIconWrapper: ["expandIconWrapper", r && "expanded"]
  }, tR, t);
}, nR = ee(gn, {
  name: "MuiAccordionSummary",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(_e(({
  theme: e
}) => {
  const t = {
    duration: e.transitions.duration.shortest
  };
  return {
    display: "flex",
    minHeight: 48,
    padding: e.spacing(0, 2),
    transition: e.transitions.create(["min-height", "background-color"], t),
    [`&.${jr.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${jr.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`&:hover:not(.${jr.disabled})`]: {
      cursor: "pointer"
    },
    variants: [{
      props: (r) => !r.disableGutters,
      style: {
        [`&.${jr.expanded}`]: {
          minHeight: 64
        }
      }
    }]
  };
})), oR = ee("div", {
  name: "MuiAccordionSummary",
  slot: "Content",
  overridesResolver: (e, t) => t.content
})(_e(({
  theme: e
}) => ({
  display: "flex",
  flexGrow: 1,
  margin: "12px 0",
  variants: [{
    props: (t) => !t.disableGutters,
    style: {
      transition: e.transitions.create(["margin"], {
        duration: e.transitions.duration.shortest
      }),
      [`&.${jr.expanded}`]: {
        margin: "20px 0"
      }
    }
  }]
}))), iR = ee("div", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
  overridesResolver: (e, t) => t.expandIconWrapper
})(_e(({
  theme: e
}) => ({
  display: "flex",
  color: (e.vars || e).palette.action.active,
  transform: "rotate(0deg)",
  transition: e.transitions.create("transform", {
    duration: e.transitions.duration.shortest
  }),
  [`&.${jr.expanded}`]: {
    transform: "rotate(180deg)"
  }
}))), ty = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiAccordionSummary"
  }), {
    children: o,
    className: s,
    expandIcon: a,
    focusVisibleClassName: l,
    onClick: c,
    ...u
  } = n, {
    disabled: d = !1,
    disableGutters: f,
    expanded: h,
    toggle: b
  } = C.useContext(zu), y = (T) => {
    b && b(T), c && c(T);
  }, g = {
    ...n,
    expanded: h,
    disabled: d,
    disableGutters: f
  }, m = rR(g);
  return /* @__PURE__ */ le(nR, {
    focusRipple: !1,
    disableRipple: !0,
    disabled: d,
    component: "div",
    "aria-expanded": h,
    className: de(m.root, s),
    focusVisibleClassName: de(m.focusVisible, l),
    onClick: y,
    ref: r,
    ownerState: g,
    ...u,
    children: [/* @__PURE__ */ p(oR, {
      className: m.content,
      ownerState: g,
      children: o
    }), a && /* @__PURE__ */ p(iR, {
      className: m.expandIconWrapper,
      ownerState: g,
      children: a
    })]
  });
});
process.env.NODE_ENV !== "production" && (ty.propTypes = {
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
   * The icon to display as the expand indicator.
   */
  expandIcon: i.node,
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
  onClick: i.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function sR(e) {
  return typeof e.main == "string";
}
function aR(e, t = []) {
  if (!sR(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Nt(e = []) {
  return ([, t]) => t && aR(t, e);
}
function lR(e) {
  return Se("MuiIconButton", e);
}
const cR = Ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), uR = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: s
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${Z(n)}`, o && `edge${Z(o)}`, `size${Z(s)}`]
  };
  return xe(a, lR, t);
}, dR = ee(gn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${Z(r.color)}`], r.edge && t[`edge${Z(r.edge)}`], t[`size${Z(r.size)}`]];
  }
})(_e(({
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), _e(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je((e.vars || e).palette[t].main, e.palette.action.hoverOpacity),
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
  [`&.${cR.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), bn = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    ...h
  } = n, b = {
    ...n,
    edge: o,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    disableRipple: d,
    size: f
  }, y = uR(b);
  return /* @__PURE__ */ p(dR, {
    className: de(y.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    disableRipple: d,
    ref: r,
    ...h,
    ownerState: b,
    children: s
  });
});
process.env.NODE_ENV !== "production" && (bn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Kr(i.node, (e) => C.Children.toArray(e.children).some((r) => /* @__PURE__ */ C.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
function fR(e) {
  return Se("MuiTypography", e);
}
const Yf = Ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), pR = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, hR = yw(), mR = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${Z(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return xe(l, fR, a);
}, yR = ee("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${Z(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(_e(({
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
    })), ...Object.entries(e.palette).filter(Nt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
      props: {
        color: `text${Z(r)}`
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
})), Qf = {
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
}, Ge = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = Pe({
    props: t,
    name: "MuiTypography"
  }), s = !pR[n], a = hR({
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
    paragraph: h = !1,
    variant: b = "body1",
    variantMapping: y = Qf,
    ...g
  } = a, m = {
    ...a,
    align: l,
    color: n,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: f,
    paragraph: h,
    variant: b,
    variantMapping: y
  }, T = u || (h ? "p" : y[b] || Qf[b]) || "span", x = mR(m);
  return /* @__PURE__ */ p(yR, {
    as: T,
    ref: r,
    className: de(x.root, c),
    ...g,
    ownerState: m,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...g.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ge.propTypes = {
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
function gR(e) {
  return typeof e == "function" ? e() : e;
}
const ia = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: s = !1
  } = t, [a, l] = C.useState(null), c = dt(Jo(n), r);
  if (hn(() => {
    s || l(gR(o) || document.body);
  }, [o, s]), hn(() => {
    if (a && !s)
      return uc(r, a), () => {
        uc(r, null);
      };
  }, [r, a, s]), s) {
    if (/* @__PURE__ */ C.isValidElement(n)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ C.cloneElement(n, u);
    }
    return /* @__PURE__ */ p(C.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ p(C.Fragment, {
    children: a && /* @__PURE__ */ Ub.createPortal(n, a)
  });
});
process.env.NODE_ENV !== "production" && (ia.propTypes = {
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
  container: i.oneOfType([Vo, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool
});
process.env.NODE_ENV !== "production" && (ia.propTypes = $m(ia.propTypes));
const bR = Yr(/* @__PURE__ */ p("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function vR(e) {
  return Se("MuiChip", e);
}
const Re = Ce("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), ER = (e) => {
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
    root: ["root", c, r && "disabled", `size${Z(n)}`, `color${Z(o)}`, l && "clickable", l && `clickableColor${Z(o)}`, a && "deletable", a && `deletableColor${Z(o)}`, `${c}${Z(o)}`],
    label: ["label", `label${Z(n)}`],
    avatar: ["avatar", `avatar${Z(n)}`, `avatarColor${Z(o)}`],
    icon: ["icon", `icon${Z(n)}`, `iconColor${Z(s)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${Z(n)}`, `deleteIconColor${Z(o)}`, `deleteIcon${Z(c)}Color${Z(o)}`]
  };
  return xe(u, vR, t);
}, SR = ee("div", {
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
      [`& .${Re.avatar}`]: t.avatar
    }, {
      [`& .${Re.avatar}`]: t[`avatar${Z(l)}`]
    }, {
      [`& .${Re.avatar}`]: t[`avatarColor${Z(n)}`]
    }, {
      [`& .${Re.icon}`]: t.icon
    }, {
      [`& .${Re.icon}`]: t[`icon${Z(l)}`]
    }, {
      [`& .${Re.icon}`]: t[`iconColor${Z(o)}`]
    }, {
      [`& .${Re.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Re.deleteIcon}`]: t[`deleteIcon${Z(l)}`]
    }, {
      [`& .${Re.deleteIcon}`]: t[`deleteIconColor${Z(n)}`]
    }, {
      [`& .${Re.deleteIcon}`]: t[`deleteIcon${Z(c)}Color${Z(n)}`]
    }, t.root, t[`size${Z(l)}`], t[`color${Z(n)}`], s && t.clickable, s && n !== "default" && t[`clickableColor${Z(n)})`], a && t.deletable, a && n !== "default" && t[`deletableColor${Z(n)}`], t[c], t[`${c}${Z(n)}`]];
  }
})(_e(({
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
    [`&.${Re.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Re.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Re.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Re.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Re.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Re.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Re.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Je(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Je(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${Re.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Re.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Nt(["contrastText"])).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        backgroundColor: (e.vars || e).palette[r].main,
        color: (e.vars || e).palette[r].contrastText,
        [`& .${Re.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)` : Je(e.palette[r].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].contrastText
          }
        }
      }
    })), {
      props: (r) => r.iconColor === r.color,
      style: {
        [`& .${Re.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (r) => r.iconColor === r.color && r.color !== "default",
      style: {
        [`& .${Re.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Re.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Je(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Nt(["dark"])).map(([r]) => ({
      props: {
        color: r,
        onDelete: !0
      },
      style: {
        [`&.${Re.focusVisible}`]: {
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Je(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${Re.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Je(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Nt(["dark"])).map(([r]) => ({
      props: {
        color: r,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Re.focusVisible}`]: {
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
        [`&.${Re.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Re.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Re.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Re.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${Re.icon}`]: {
          marginLeft: 4
        },
        [`& .${Re.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${Re.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${Re.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Nt()).map(([r]) => ({
      props: {
        variant: "outlined",
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Je(e.palette[r].main, 0.7)}`,
        [`&.${Re.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette[r].main, e.palette.action.hoverOpacity)
        },
        [`&.${Re.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Je(e.palette[r].main, e.palette.action.focusOpacity)
        },
        [`& .${Re.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Je(e.palette[r].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].main
          }
        }
      }
    }))]
  };
})), TR = ee("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${Z(n)}`]];
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
function Xf(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const ry = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    label: h,
    onClick: b,
    onDelete: y,
    onKeyDown: g,
    onKeyUp: m,
    size: T = "medium",
    variant: x = "filled",
    tabIndex: v,
    skipFocusWhenDisabled: O = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...S
  } = n, R = C.useRef(null), w = dt(R, r), A = (X) => {
    X.stopPropagation(), y && y(X);
  }, E = (X) => {
    X.currentTarget === X.target && Xf(X) && X.preventDefault(), g && g(X);
  }, P = (X) => {
    X.currentTarget === X.target && y && Xf(X) && y(X), m && m(X);
  }, k = a !== !1 && b ? !0 : a, q = k || y ? gn : c || "div", G = {
    ...n,
    component: q,
    disabled: d,
    size: T,
    color: l,
    iconColor: /* @__PURE__ */ C.isValidElement(f) && f.props.color || l,
    onDelete: !!y,
    clickable: k,
    variant: x
  }, z = ER(G), V = q === gn ? {
    component: c || "div",
    focusVisibleClassName: z.focusVisible,
    ...y && {
      disableRipple: !0
    }
  } : {};
  let U = null;
  y && (U = u && /* @__PURE__ */ C.isValidElement(u) ? /* @__PURE__ */ C.cloneElement(u, {
    className: de(u.props.className, z.deleteIcon),
    onClick: A
  }) : /* @__PURE__ */ p(bR, {
    className: de(z.deleteIcon),
    onClick: A
  }));
  let Q = null;
  o && /* @__PURE__ */ C.isValidElement(o) && (Q = /* @__PURE__ */ C.cloneElement(o, {
    className: de(z.avatar, o.props.className)
  }));
  let B = null;
  return f && /* @__PURE__ */ C.isValidElement(f) && (B = /* @__PURE__ */ C.cloneElement(f, {
    className: de(z.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && Q && B && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ le(SR, {
    as: q,
    className: de(z.root, s),
    disabled: k && d ? !0 : void 0,
    onClick: b,
    onKeyDown: E,
    onKeyUp: P,
    ref: w,
    tabIndex: O && d ? -1 : v,
    ownerState: G,
    ...V,
    ...S,
    children: [Q || B, /* @__PURE__ */ p(TR, {
      className: de(z.label),
      ownerState: G,
      children: h
    }), U]
  });
});
process.env.NODE_ENV !== "production" && (ry.propTypes = {
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
  children: rx,
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
function Is(e) {
  return parseInt(e, 10) || 0;
}
const CR = {
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
function OR(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const ny = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const {
    onChange: n,
    maxRows: o,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = C.useRef(l != null), d = C.useRef(null), f = dt(r, d), h = C.useRef(null), b = C.useRef(null), y = C.useCallback(() => {
    const T = d.current, v = Ur(T).getComputedStyle(T);
    if (v.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const O = b.current;
    O.style.width = v.width, O.value = T.value || t.placeholder || "x", O.value.slice(-1) === `
` && (O.value += " ");
    const S = v.boxSizing, R = Is(v.paddingBottom) + Is(v.paddingTop), w = Is(v.borderBottomWidth) + Is(v.borderTopWidth), A = O.scrollHeight;
    O.value = "x";
    const E = O.scrollHeight;
    let P = A;
    s && (P = Math.max(Number(s) * E, P)), o && (P = Math.min(Number(o) * E, P)), P = Math.max(P, E);
    const k = P + (S === "border-box" ? R + w : 0), q = Math.abs(P - A) <= 1;
    return {
      outerHeightStyle: k,
      overflowing: q
    };
  }, [o, s, t.placeholder]), g = C.useCallback(() => {
    const T = y();
    if (OR(T))
      return;
    const x = T.outerHeightStyle, v = d.current;
    h.current !== x && (h.current = x, v.style.height = `${x}px`), v.style.overflow = T.overflowing ? "hidden" : "";
  }, [y]);
  hn(() => {
    const T = () => {
      g();
    };
    let x;
    const v = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => {
        T();
      });
    }, O = Du(T), S = d.current, R = Ur(S);
    R.addEventListener("resize", O);
    let w;
    return typeof ResizeObserver < "u" && (w = new ResizeObserver(process.env.NODE_ENV === "test" ? v : T), w.observe(S)), () => {
      O.clear(), cancelAnimationFrame(x), R.removeEventListener("resize", O), w && w.disconnect();
    };
  }, [y, g]), hn(() => {
    g();
  });
  const m = (T) => {
    u || g(), n && n(T);
  };
  return /* @__PURE__ */ le(C.Fragment, {
    children: [/* @__PURE__ */ p("textarea", {
      value: l,
      onChange: m,
      ref: f,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ p("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: b,
      tabIndex: -1,
      style: {
        ...CR.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (ny.propTypes = {
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
function gc(e) {
  return typeof e == "string";
}
function Sn({
  props: e,
  states: t,
  muiFormControl: r
}) {
  return t.reduce((n, o) => (n[o] = e[o], r && typeof e[o] > "u" && (n[o] = r[o]), n), {});
}
const ys = /* @__PURE__ */ C.createContext(void 0);
process.env.NODE_ENV !== "production" && (ys.displayName = "FormControlContext");
function mr() {
  return C.useContext(ys);
}
function Jf(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function sa(e, t = !1) {
  return e && (Jf(e.value) && e.value !== "" || t && Jf(e.defaultValue) && e.defaultValue !== "");
}
function xR(e) {
  return e.startAdornment;
}
function wR(e) {
  return Se("MuiInputBase", e);
}
const zo = Ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Zf;
const Wa = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.formControl && t.formControl, r.startAdornment && t.adornedStart, r.endAdornment && t.adornedEnd, r.error && t.error, r.size === "small" && t.sizeSmall, r.multiline && t.multiline, r.color && t[`color${Z(r.color)}`], r.fullWidth && t.fullWidth, r.hiddenLabel && t.hiddenLabel];
}, Ha = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.input, r.size === "small" && t.inputSizeSmall, r.multiline && t.inputMultiline, r.type === "search" && t.inputTypeSearch, r.startAdornment && t.inputAdornedStart, r.endAdornment && t.inputAdornedEnd, r.hiddenLabel && t.inputHiddenLabel];
}, RR = (e) => {
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
    size: h,
    startAdornment: b,
    type: y
  } = e, g = {
    root: ["root", `color${Z(r)}`, n && "disabled", o && "error", c && "fullWidth", a && "focused", l && "formControl", h && h !== "medium" && `size${Z(h)}`, d && "multiline", b && "adornedStart", s && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", n && "disabled", y === "search" && "inputTypeSearch", d && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", b && "inputAdornedStart", s && "inputAdornedEnd", f && "readOnly"]
  };
  return xe(g, wR, t);
}, Ka = ee("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Wa
})(_e(({
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
  [`&.${zo.disabled}`]: {
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
}))), Ya = ee("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Ha
})(_e(({
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
    [`label[data-shrink=false] + .${zo.formControl} &`]: {
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
    [`&.${zo.disabled}`]: {
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
})), ep = mw({
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
}), Qa = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    disabled: h,
    disableInjectingGlobalStyles: b,
    endAdornment: y,
    error: g,
    fullWidth: m = !1,
    id: T,
    inputComponent: x = "input",
    inputProps: v = {},
    inputRef: O,
    margin: S,
    maxRows: R,
    minRows: w,
    multiline: A = !1,
    name: E,
    onBlur: P,
    onChange: k,
    onClick: q,
    onFocus: G,
    onKeyDown: z,
    onKeyUp: V,
    placeholder: U,
    readOnly: Q,
    renderSuffix: B,
    rows: X,
    size: F,
    slotProps: W = {},
    slots: se = {},
    startAdornment: re,
    type: J = "text",
    value: ae,
    ...Y
  } = n, oe = v.value != null ? v.value : ae, {
    current: ce
  } = C.useRef(oe != null), ue = C.useRef(), te = C.useCallback((De) => {
    process.env.NODE_ENV !== "production" && De && De.nodeName !== "INPUT" && !De.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), fe = dt(ue, O, v.ref, te), [D, ve] = C.useState(!1), K = mr();
  process.env.NODE_ENV !== "production" && C.useEffect(() => {
    if (K)
      return K.registerEffect();
  }, [K]);
  const Te = Sn({
    props: n,
    muiFormControl: K,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  Te.focused = K ? K.focused : D, C.useEffect(() => {
    !K && h && D && (ve(!1), P && P());
  }, [K, h, D, P]);
  const mt = K && K.onFilled, Et = K && K.onEmpty, yt = C.useCallback((De) => {
    sa(De) ? mt && mt() : Et && Et();
  }, [mt, Et]);
  hn(() => {
    ce && yt({
      value: oe
    });
  }, [oe, yt, ce]);
  const rt = (De) => {
    G && G(De), v.onFocus && v.onFocus(De), K && K.onFocus ? K.onFocus(De) : ve(!0);
  }, Jt = (De) => {
    P && P(De), v.onBlur && v.onBlur(De), K && K.onBlur ? K.onBlur(De) : ve(!1);
  }, We = (De, ...Qr) => {
    if (!ce) {
      const Tn = De.target || ue.current;
      if (Tn == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Dr(1));
      yt({
        value: Tn.value
      });
    }
    v.onChange && v.onChange(De, ...Qr), k && k(De, ...Qr);
  };
  C.useEffect(() => {
    yt(ue.current);
  }, []);
  const $ = (De) => {
    ue.current && De.currentTarget === De.target && ue.current.focus(), q && q(De);
  };
  let j = x, ne = v;
  A && j === "input" && (X ? (process.env.NODE_ENV !== "production" && (w || R) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), ne = {
    type: void 0,
    minRows: X,
    maxRows: X,
    ...ne
  }) : ne = {
    type: void 0,
    maxRows: R,
    minRows: w,
    ...ne
  }, j = ny);
  const pe = (De) => {
    yt(De.animationName === "mui-auto-fill-cancel" ? ue.current : {
      value: "x"
    });
  };
  C.useEffect(() => {
    K && K.setAdornedStart(!!re);
  }, [K, re]);
  const ge = {
    ...n,
    color: Te.color || "primary",
    disabled: Te.disabled,
    endAdornment: y,
    error: Te.error,
    focused: Te.focused,
    formControl: K,
    fullWidth: m,
    hiddenLabel: Te.hiddenLabel,
    multiline: A,
    size: Te.size,
    startAdornment: re,
    type: J
  }, we = RR(ge), Ze = se.root || u.Root || Ka, St = W.root || d.root || {}, ur = se.input || u.Input || Ya;
  return ne = {
    ...ne,
    ...W.input ?? d.input
  }, /* @__PURE__ */ le(C.Fragment, {
    children: [!b && typeof ep == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Zf || (Zf = /* @__PURE__ */ p(ep, {}))), /* @__PURE__ */ le(Ze, {
      ...St,
      ref: r,
      onClick: $,
      ...Y,
      ...!gc(Ze) && {
        ownerState: {
          ...ge,
          ...St.ownerState
        }
      },
      className: de(we.root, St.className, l, Q && "MuiInputBase-readOnly"),
      children: [re, /* @__PURE__ */ p(ys.Provider, {
        value: null,
        children: /* @__PURE__ */ p(ur, {
          "aria-invalid": Te.error,
          "aria-describedby": o,
          autoComplete: s,
          autoFocus: a,
          defaultValue: f,
          disabled: Te.disabled,
          id: T,
          onAnimationStart: pe,
          name: E,
          placeholder: U,
          readOnly: Q,
          required: Te.required,
          rows: X,
          value: oe,
          onKeyDown: z,
          onKeyUp: V,
          type: J,
          ...ne,
          ...!gc(ur) && {
            as: j,
            ownerState: {
              ...ge,
              ...ne.ownerState
            }
          },
          ref: fe,
          className: de(we.input, ne.className, Q && "MuiInputBase-readOnly"),
          onBlur: Jt,
          onChange: We,
          onFocus: rt
        })
      }), y, B ? B({
        ...Te,
        startAdornment: re
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Qa.propTypes = {
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
  inputComponent: Va,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: lr,
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
function _R(e) {
  return Se("MuiInput", e);
}
const fi = {
  ...zo,
  ...Ce("MuiInput", ["root", "underline", "input"])
};
function NR(e) {
  return Se("MuiOutlinedInput", e);
}
const br = {
  ...zo,
  ...Ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function AR(e) {
  return Se("MuiFilledInput", e);
}
const On = {
  ...zo,
  ...Ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, PR = Yr(/* @__PURE__ */ p("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), IR = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, oy = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = ei(), o = {
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
    onEntering: h,
    onExit: b,
    onExited: y,
    onExiting: g,
    style: m,
    timeout: T = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = cr,
    ...v
  } = t, O = C.useRef(null), S = dt(O, Jo(l), r), R = (z) => (V) => {
    if (z) {
      const U = O.current;
      V === void 0 ? z(U) : z(U, V);
    }
  }, w = R(h), A = R((z, V) => {
    Bu(z);
    const U = yn({
      style: m,
      timeout: T,
      easing: c
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = n.transitions.create("opacity", U), z.style.transition = n.transitions.create("opacity", U), d && d(z, V);
  }), E = R(f), P = R(g), k = R((z) => {
    const V = yn({
      style: m,
      timeout: T,
      easing: c
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = n.transitions.create("opacity", V), z.style.transition = n.transitions.create("opacity", V), b && b(z);
  }), q = R(y);
  return /* @__PURE__ */ p(x, {
    appear: a,
    in: u,
    nodeRef: O,
    onEnter: A,
    onEntered: E,
    onEntering: w,
    onExit: k,
    onExited: q,
    onExiting: P,
    addEndListener: (z) => {
      s && s(O.current, z);
    },
    timeout: T,
    ...v,
    children: (z, V) => /* @__PURE__ */ C.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: z === "exited" && !u ? "hidden" : void 0,
        ...IR[z],
        ...m,
        ...l.props.style
      },
      ref: S,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (oy.propTypes = {
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
  children: Xo.isRequired,
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
function DR(e) {
  return Se("MuiBackdrop", e);
}
Ce("MuiBackdrop", ["root", "invisible"]);
const $R = (e) => {
  const {
    ownerState: t,
    ...r
  } = e;
  return r;
}, kR = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return xe({
    root: ["root", r && "invisible"]
  }, DR, t);
}, MR = ee("div", {
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
}), iy = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    slots: h = {},
    TransitionComponent: b,
    transitionDuration: y,
    ...g
  } = n, m = {
    ...n,
    component: a,
    invisible: l
  }, T = kR(m), x = {
    transition: b,
    root: u.Root,
    ...h
  }, v = {
    ...d,
    ...f
  }, O = {
    slots: x,
    slotProps: v
  }, [S, R] = Mt("root", {
    elementType: MR,
    externalForwardedProps: O,
    className: de(T.root, s),
    ownerState: m
  }), [w, A] = Mt("transition", {
    elementType: oy,
    externalForwardedProps: O,
    ownerState: m
  }), E = $R(A);
  return /* @__PURE__ */ p(w, {
    in: c,
    timeout: y,
    ...g,
    ...E,
    children: /* @__PURE__ */ p(S, {
      "aria-hidden": !0,
      ...R,
      classes: T,
      ref: r,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (iy.propTypes = {
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
const FR = Ce("MuiBox", ["root"]), LR = ms(), gs = kO({
  themeId: as,
  defaultTheme: LR,
  defaultClassName: FR.root,
  generateClassName: Rm.generate
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
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
function qR(e) {
  return Se("MuiButton", e);
}
const po = Ce("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), sy = /* @__PURE__ */ C.createContext({});
process.env.NODE_ENV !== "production" && (sy.displayName = "ButtonGroupContext");
const ay = /* @__PURE__ */ C.createContext(void 0);
process.env.NODE_ENV !== "production" && (ay.displayName = "ButtonGroupButtonContext");
const jR = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${Z(t)}`, `size${Z(o)}`, `${s}Size${Z(o)}`, `color${Z(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Z(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${Z(o)}`]
  }, c = xe(l, qR, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, ly = [{
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
}], BR = ee(gn, {
  shouldForwardProp: (e) => At(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${Z(r.color)}`], t[`size${Z(r.size)}`], t[`${r.variant}Size${Z(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(_e(({
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
    [`&.${po.disabled}`]: {
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
        [`&.${po.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${po.disabled}`]: {
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
        [`&.${po.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Nt(["dark", "contrastText"])).map(([s]) => ({
      props: {
        color: s
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[s].main,
        "--variant-outlinedColor": (e.vars || e).palette[s].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / 0.5)` : Je(e.palette[s].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[s].contrastText,
        "--variant-containedBg": (e.vars || e).palette[s].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[s].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette[s].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[s].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette[s].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${po.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${po.disabled}`]: {
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
})), VR = ee("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${Z(r.size)}`]];
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
  }, ...ly]
}), zR = ee("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${Z(r.size)}`]];
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
  }, ...ly]
}), ti = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = C.useContext(sy), o = C.useContext(ay), s = Vi(n, t), a = Pe({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: h = !1,
    disableFocusRipple: b = !1,
    endIcon: y,
    focusVisibleClassName: g,
    fullWidth: m = !1,
    size: T = "medium",
    startIcon: x,
    type: v,
    variant: O = "text",
    ...S
  } = a, R = {
    ...a,
    color: c,
    component: u,
    disabled: f,
    disableElevation: h,
    disableFocusRipple: b,
    fullWidth: m,
    size: T,
    type: v,
    variant: O
  }, w = jR(R), A = x && /* @__PURE__ */ p(VR, {
    className: w.startIcon,
    ownerState: R,
    children: x
  }), E = y && /* @__PURE__ */ p(zR, {
    className: w.endIcon,
    ownerState: R,
    children: y
  }), P = o || "";
  return /* @__PURE__ */ le(BR, {
    ownerState: R,
    className: de(n.className, w.root, d, P),
    component: u,
    disabled: f,
    focusRipple: !b,
    focusVisibleClassName: de(w.focusVisible, g),
    ref: r,
    type: v,
    ...S,
    classes: w,
    children: [A, l, E]
  });
});
process.env.NODE_ENV !== "production" && (ti.propTypes = {
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
function UR(e) {
  return Se("PrivateSwitchBase", e);
}
Ce("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const GR = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: n,
    edge: o
  } = e, s = {
    root: ["root", r && "checked", n && "disabled", o && `edge${Z(o)}`],
    input: ["input"]
  };
  return xe(s, UR, t);
}, WR = ee(gn)({
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
}), HR = ee("input", {
  shouldForwardProp: At
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
}), cy = /* @__PURE__ */ C.forwardRef(function(t, r) {
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
    id: h,
    inputProps: b,
    inputRef: y,
    name: g,
    onBlur: m,
    onChange: T,
    onFocus: x,
    readOnly: v,
    required: O = !1,
    tabIndex: S,
    type: R,
    value: w,
    ...A
  } = t, [E, P] = zi({
    controlled: o,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), k = mr(), q = (X) => {
    x && x(X), k && k.onFocus && k.onFocus(X);
  }, G = (X) => {
    m && m(X), k && k.onBlur && k.onBlur(X);
  }, z = (X) => {
    if (X.nativeEvent.defaultPrevented)
      return;
    const F = X.target.checked;
    P(F), T && T(X, F);
  };
  let V = c;
  k && typeof V > "u" && (V = k.disabled);
  const U = R === "checkbox" || R === "radio", Q = {
    ...t,
    checked: E,
    disabled: V,
    disableFocusRipple: u,
    edge: d
  }, B = GR(Q);
  return /* @__PURE__ */ le(WR, {
    component: "span",
    className: de(B.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: V,
    tabIndex: null,
    role: void 0,
    onFocus: q,
    onBlur: G,
    ownerState: Q,
    ref: r,
    ...A,
    children: [/* @__PURE__ */ p(HR, {
      autoFocus: n,
      checked: o,
      defaultChecked: l,
      className: B.input,
      disabled: V,
      id: U ? h : void 0,
      name: g,
      onChange: z,
      readOnly: v,
      ref: y,
      required: O,
      ownerState: Q,
      tabIndex: S,
      type: R,
      ...R === "checkbox" && w === void 0 ? {} : {
        value: w
      },
      ...b
    }), E ? s : f]
  });
});
process.env.NODE_ENV !== "production" && (cy.propTypes = {
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
  inputRef: lr,
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
function KR(e) {
  return Se("MuiCircularProgress", e);
}
Ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Xr = 44, bc = cs`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, vc = cs`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`, YR = typeof bc != "string" ? wu`
        animation: ${bc} 1.4s linear infinite;
      ` : null, QR = typeof vc != "string" ? wu`
        animation: ${vc} 1.4s ease-in-out infinite;
      ` : null, XR = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, s = {
    root: ["root", r, `color${Z(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${Z(r)}`, o && "circleDisableShrink"]
  };
  return xe(s, KR, t);
}, JR = ee("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${Z(r.color)}`]];
  }
})(_e(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: YR || {
      animation: `${bc} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), ZR = ee("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), e1 = ee("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${Z(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(_e(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: QR || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${vc} 1.4s ease-in-out infinite`
    }
  }]
}))), uy = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: s = "primary",
    disableShrink: a = !1,
    size: l = 40,
    style: c,
    thickness: u = 3.6,
    value: d = 0,
    variant: f = "indeterminate",
    ...h
  } = n, b = {
    ...n,
    color: s,
    disableShrink: a,
    size: l,
    thickness: u,
    value: d,
    variant: f
  }, y = XR(b), g = {}, m = {}, T = {};
  if (f === "determinate") {
    const x = 2 * Math.PI * ((Xr - u) / 2);
    g.strokeDasharray = x.toFixed(3), T["aria-valuenow"] = Math.round(d), g.strokeDashoffset = `${((100 - d) / 100 * x).toFixed(3)}px`, m.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ p(JR, {
    className: de(y.root, o),
    style: {
      width: l,
      height: l,
      ...m,
      ...c
    },
    ownerState: b,
    ref: r,
    role: "progressbar",
    ...T,
    ...h,
    children: /* @__PURE__ */ p(ZR, {
      className: y.svg,
      ownerState: b,
      viewBox: `${Xr / 2} ${Xr / 2} ${Xr} ${Xr}`,
      children: /* @__PURE__ */ p(e1, {
        className: y.circle,
        style: g,
        ownerState: b,
        cx: Xr,
        cy: Xr,
        r: (Xr - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (uy.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
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
  color: i.oneOfType([i.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Kr(i.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: i.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: i.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: i.oneOf(["determinate", "indeterminate"])
});
function t1(e) {
  const t = Ht(e);
  return t.body === e ? Ur(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ni(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function tp(e) {
  return parseInt(Ur(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function r1(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function rp(e, t, r, n, o) {
  const s = [t, r, ...n];
  [].forEach.call(e.children, (a) => {
    const l = !s.includes(a), c = !r1(a);
    l && c && Ni(a, o);
  });
}
function Il(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function n1(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (t1(n)) {
      const a = Mm(Ht(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${tp(n) + a}px`;
      const l = Ht(n).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        r.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${tp(c) + a}px`;
      });
    }
    let s;
    if (n.parentNode instanceof DocumentFragment)
      s = Ht(n).body;
    else {
      const a = n.parentElement, l = Ur(n);
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
function o1(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class i1 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Ni(t.modalRef, !1);
    const o = o1(r);
    rp(r, t.mount, t.modalRef, o, !0);
    const s = Il(this.containers, (a) => a.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = Il(this.containers, (s) => s.modals.includes(t)), o = this.containers[n];
    o.restore || (o.restore = n1(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = Il(this.containers, (a) => a.modals.includes(t)), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(n, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Ni(t.modalRef, r), rp(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Ni(a.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const s1 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function a1(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function l1(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function c1(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || l1(e));
}
function u1(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(s1)).forEach((n, o) => {
    const s = a1(n);
    s === -1 || !c1(n) || (s === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: s,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function d1() {
  return !0;
}
function aa(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = u1,
    isEnabled: a = d1,
    open: l
  } = e, c = C.useRef(!1), u = C.useRef(null), d = C.useRef(null), f = C.useRef(null), h = C.useRef(null), b = C.useRef(!1), y = C.useRef(null), g = dt(Jo(t), y), m = C.useRef(null);
  C.useEffect(() => {
    !l || !y.current || (b.current = !r);
  }, [r, l]), C.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = Ht(y.current);
    return y.current.contains(v.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), b.current && y.current.focus()), () => {
      o || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), C.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = Ht(y.current), O = (w) => {
      m.current = w, !(n || !a() || w.key !== "Tab") && v.activeElement === y.current && w.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, S = () => {
      var E, P;
      const w = y.current;
      if (w === null)
        return;
      if (!v.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (w.contains(v.activeElement) || n && v.activeElement !== u.current && v.activeElement !== d.current)
        return;
      if (v.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!b.current)
        return;
      let A = [];
      if ((v.activeElement === u.current || v.activeElement === d.current) && (A = s(y.current)), A.length > 0) {
        const k = !!((E = m.current) != null && E.shiftKey && ((P = m.current) == null ? void 0 : P.key) === "Tab"), q = A[0], G = A[A.length - 1];
        typeof q != "string" && typeof G != "string" && (k ? G.focus() : q.focus());
      } else
        w.focus();
    };
    v.addEventListener("focusin", S), v.addEventListener("keydown", O, !0);
    const R = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && S();
    }, 50);
    return () => {
      clearInterval(R), v.removeEventListener("focusin", S), v.removeEventListener("keydown", O, !0);
    };
  }, [r, n, o, a, l, s]);
  const T = (v) => {
    f.current === null && (f.current = v.relatedTarget), b.current = !0, h.current = v.target;
    const O = t.props.onFocus;
    O && O(v);
  }, x = (v) => {
    f.current === null && (f.current = v.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ le(C.Fragment, {
    children: [/* @__PURE__ */ p("div", {
      tabIndex: l ? 0 : -1,
      onFocus: x,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ C.cloneElement(t, {
      ref: g,
      onFocus: T
    }), /* @__PURE__ */ p("div", {
      tabIndex: l ? 0 : -1,
      onFocus: x,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (aa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Xo,
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
process.env.NODE_ENV !== "production" && (aa.propTypes = $m(aa.propTypes));
function f1(e) {
  return typeof e == "function" ? e() : e;
}
function p1(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const h1 = new i1();
function m1(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = h1,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: f
  } = e, h = C.useRef({}), b = C.useRef(null), y = C.useRef(null), g = dt(y, f), [m, T] = C.useState(!d), x = p1(c);
  let v = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (v = !1);
  const O = () => Ht(b.current), S = () => (h.current.modalRef = y.current, h.current.mount = b.current, h.current), R = () => {
    o.mount(S(), {
      disableScrollLock: n
    }), y.current && (y.current.scrollTop = 0);
  }, w = yo(() => {
    const U = f1(t) || O().body;
    o.add(S(), U), y.current && R();
  }), A = C.useCallback(() => o.isTopModal(S()), [o]), E = yo((U) => {
    b.current = U, U && (d && A() ? R() : y.current && Ni(y.current, v));
  }), P = C.useCallback(() => {
    o.remove(S(), v);
  }, [v, o]);
  C.useEffect(() => () => {
    P();
  }, [P]), C.useEffect(() => {
    d ? w() : (!x || !s) && P();
  }, [d, P, x, s, w]);
  const k = (U) => (Q) => {
    var B;
    (B = U.onKeyDown) == null || B.call(U, Q), !(Q.key !== "Escape" || Q.which === 229 || // Wait until IME is settled.
    !A()) && (r || (Q.stopPropagation(), u && u(Q, "escapeKeyDown")));
  }, q = (U) => (Q) => {
    var B;
    (B = U.onClick) == null || B.call(U, Q), Q.target === Q.currentTarget && u && u(Q, "backdropClick");
  };
  return {
    getRootProps: (U = {}) => {
      const Q = Bm(e);
      delete Q.onTransitionEnter, delete Q.onTransitionExited;
      const B = {
        ...Q,
        ...U
      };
      return {
        role: "presentation",
        ...B,
        onKeyDown: k(B),
        ref: g
      };
    },
    getBackdropProps: (U = {}) => {
      const Q = U;
      return {
        "aria-hidden": !0,
        ...Q,
        onClick: q(Q),
        open: d
      };
    },
    getTransitionProps: () => {
      const U = () => {
        T(!1), a && a();
      }, Q = () => {
        T(!0), l && l(), s && P();
      };
      return {
        onEnter: cc(U, c == null ? void 0 : c.props.onEnter),
        onExited: cc(Q, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: g,
    portalRef: E,
    isTopModal: A,
    exited: m,
    hasTransition: x
  };
}
function y1(e) {
  return Se("MuiModal", e);
}
Ce("MuiModal", ["root", "hidden", "backdrop"]);
const g1 = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return xe({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, y1, n);
}, b1 = ee("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(_e(({
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
}))), v1 = ee(iy, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), dy = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = v1,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: f,
    components: h = {},
    componentsProps: b = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: g = !1,
    disableEscapeKeyDown: m = !1,
    disablePortal: T = !1,
    disableRestoreFocus: x = !1,
    disableScrollLock: v = !1,
    hideBackdrop: O = !1,
    keepMounted: S = !1,
    onBackdropClick: R,
    onClose: w,
    onTransitionEnter: A,
    onTransitionExited: E,
    open: P,
    slotProps: k = {},
    slots: q = {},
    // eslint-disable-next-line react/prop-types
    theme: G,
    ...z
  } = n, V = {
    ...n,
    closeAfterTransition: c,
    disableAutoFocus: y,
    disableEnforceFocus: g,
    disableEscapeKeyDown: m,
    disablePortal: T,
    disableRestoreFocus: x,
    disableScrollLock: v,
    hideBackdrop: O,
    keepMounted: S
  }, {
    getRootProps: U,
    getBackdropProps: Q,
    getTransitionProps: B,
    portalRef: X,
    isTopModal: F,
    exited: W,
    hasTransition: se
  } = m1({
    ...V,
    rootRef: r
  }), re = {
    ...V,
    exited: W
  }, J = g1(re), ae = {};
  if (u.props.tabIndex === void 0 && (ae.tabIndex = "-1"), se) {
    const {
      onEnter: D,
      onExited: ve
    } = B();
    ae.onEnter = D, ae.onExited = ve;
  }
  const Y = {
    ...z,
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...q
    },
    slotProps: {
      ...b,
      ...k
    }
  }, [oe, ce] = Mt("root", {
    elementType: b1,
    externalForwardedProps: Y,
    getSlotProps: U,
    additionalProps: {
      ref: r,
      as: f
    },
    ownerState: re,
    className: de(l, J == null ? void 0 : J.root, !re.open && re.exited && (J == null ? void 0 : J.hidden))
  }), [ue, te] = Mt("backdrop", {
    elementType: o,
    externalForwardedProps: Y,
    additionalProps: s,
    getSlotProps: (D) => Q({
      ...D,
      onClick: (ve) => {
        R && R(ve), D != null && D.onClick && D.onClick(ve);
      }
    }),
    className: de(s == null ? void 0 : s.className, J == null ? void 0 : J.backdrop),
    ownerState: re
  }), fe = dt(s == null ? void 0 : s.ref, te.ref);
  return !S && !P && (!se || W) ? null : /* @__PURE__ */ p(ia, {
    ref: X,
    container: d,
    disablePortal: T,
    children: /* @__PURE__ */ le(oe, {
      ...ce,
      children: [!O && o ? /* @__PURE__ */ p(ue, {
        ...te,
        ref: fe
      }) : null, /* @__PURE__ */ p(aa, {
        disableEnforceFocus: g,
        disableAutoFocus: y,
        disableRestoreFocus: x,
        isEnabled: F,
        open: P,
        children: /* @__PURE__ */ C.cloneElement(u, ae)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (dy.propTypes = {
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
  children: Xo.isRequired,
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
  container: i.oneOfType([Vo, i.func]),
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
const np = Ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function E1(e, t, r) {
  const n = t.getBoundingClientRect(), o = r && r.getBoundingClientRect(), s = Ur(t);
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
function fy(e) {
  return typeof e == "function" ? e() : e;
}
function Ds(e, t, r) {
  const n = fy(r), o = E1(e, t, n);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const py = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = ei(), o = {
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
    in: h,
    onEnter: b,
    onEntered: y,
    onEntering: g,
    onExit: m,
    onExited: T,
    onExiting: x,
    style: v,
    timeout: O = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = cr,
    ...R
  } = t, w = C.useRef(null), A = dt(Jo(c), w, r), E = (B) => (X) => {
    B && (X === void 0 ? B(w.current) : B(w.current, X));
  }, P = E((B, X) => {
    Ds(d, B, u), Bu(B), b && b(B, X);
  }), k = E((B, X) => {
    const F = yn({
      timeout: O,
      style: v,
      easing: f
    }, {
      mode: "enter"
    });
    B.style.webkitTransition = n.transitions.create("-webkit-transform", {
      ...F
    }), B.style.transition = n.transitions.create("transform", {
      ...F
    }), B.style.webkitTransform = "none", B.style.transform = "none", g && g(B, X);
  }), q = E(y), G = E(x), z = E((B) => {
    const X = yn({
      timeout: O,
      style: v,
      easing: f
    }, {
      mode: "exit"
    });
    B.style.webkitTransition = n.transitions.create("-webkit-transform", X), B.style.transition = n.transitions.create("transform", X), Ds(d, B, u), m && m(B);
  }), V = E((B) => {
    B.style.webkitTransition = "", B.style.transition = "", T && T(B);
  }), U = (B) => {
    a && a(w.current, B);
  }, Q = C.useCallback(() => {
    w.current && Ds(d, w.current, u);
  }, [d, u]);
  return C.useEffect(() => {
    if (h || d === "down" || d === "right")
      return;
    const B = Du(() => {
      w.current && Ds(d, w.current, u);
    }), X = Ur(w.current);
    return X.addEventListener("resize", B), () => {
      B.clear(), X.removeEventListener("resize", B);
    };
  }, [d, h, u]), C.useEffect(() => {
    h || Q();
  }, [h, Q]), /* @__PURE__ */ p(S, {
    nodeRef: w,
    onEnter: P,
    onEntered: q,
    onEntering: k,
    onExit: z,
    onExited: V,
    onExiting: G,
    addEndListener: U,
    appear: l,
    in: h,
    timeout: O,
    ...R,
    children: (B, X) => /* @__PURE__ */ C.cloneElement(c, {
      ref: A,
      style: {
        visibility: B === "exited" && !h ? "hidden" : void 0,
        ...v,
        ...c.props.style
      },
      ...X
    })
  });
});
process.env.NODE_ENV !== "production" && (py.propTypes = {
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
  children: Xo.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Kr(i.oneOfType([Vo, i.func]), (e) => {
    if (e.open) {
      const t = fy(e.container);
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
const S1 = (e) => {
  const {
    classes: t,
    disableUnderline: r,
    startAdornment: n,
    endAdornment: o,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !r && "underline", n && "adornedStart", o && "adornedEnd", s === "small" && `size${Z(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = xe(c, AR, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, T1 = ee(Ka, {
  shouldForwardProp: (e) => At(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [...Wa(e, t), !r.disableUnderline && t.underline];
  }
})(_e(({
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
    [`&.${On.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n
    },
    [`&.${On.disabled}`]: {
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
        [`&.${On.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${On.error}`]: {
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
        [`&:hover:not(.${On.disabled}, .${On.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${On.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Nt()).map(([a]) => {
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
})), C1 = ee(Ya, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Ha
})(_e(({
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
}))), Gi = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    slots: h = {},
    type: b = "text",
    ...y
  } = n, g = {
    ...n,
    disableUnderline: o,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    type: b
  }, m = S1(n), T = {
    root: {
      ownerState: g
    },
    input: {
      ownerState: g
    }
  }, x = f ?? a ? vt(T, f ?? a) : T, v = h.root ?? s.Root ?? T1, O = h.input ?? s.Input ?? C1;
  return /* @__PURE__ */ p(Qa, {
    slots: {
      root: v,
      input: O
    },
    componentsProps: x,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    ref: r,
    type: b,
    ...y,
    classes: m
  });
});
process.env.NODE_ENV !== "production" && (Gi.propTypes = {
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
  inputRef: lr,
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
Gi && (Gi.muiName = "Input");
function O1(e) {
  return Se("MuiFormControl", e);
}
Ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const x1 = (e) => {
  const {
    classes: t,
    margin: r,
    fullWidth: n
  } = e, o = {
    root: ["root", r !== "none" && `margin${Z(r)}`, n && "fullWidth"]
  };
  return xe(o, O1, t);
}, w1 = ee("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...t[`margin${Z(e.margin)}`],
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
}), Xa = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    hiddenLabel: h = !1,
    margin: b = "none",
    required: y = !1,
    size: g = "medium",
    variant: m = "outlined",
    ...T
  } = n, x = {
    ...n,
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: h,
    margin: b,
    required: y,
    size: g,
    variant: m
  }, v = x1(x), [O, S] = C.useState(() => {
    let z = !1;
    return o && C.Children.forEach(o, (V) => {
      if (!Us(V, ["Input", "Select"]))
        return;
      const U = Us(V, ["Select"]) ? V.props.input : V;
      U && xR(U.props) && (z = !0);
    }), z;
  }), [R, w] = C.useState(() => {
    let z = !1;
    return o && C.Children.forEach(o, (V) => {
      Us(V, ["Input", "Select"]) && (sa(V.props, !0) || sa(V.props.inputProps, !0)) && (z = !0);
    }), z;
  }), [A, E] = C.useState(!1);
  c && A && E(!1);
  const P = d !== void 0 && !c ? d : A;
  let k;
  const q = C.useRef(!1);
  process.env.NODE_ENV !== "production" && (k = () => (q.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), q.current = !0, () => {
    q.current = !1;
  }));
  const G = C.useMemo(() => ({
    adornedStart: O,
    setAdornedStart: S,
    color: a,
    disabled: c,
    error: u,
    filled: R,
    focused: P,
    fullWidth: f,
    hiddenLabel: h,
    size: g,
    onBlur: () => {
      E(!1);
    },
    onEmpty: () => {
      w(!1);
    },
    onFilled: () => {
      w(!0);
    },
    onFocus: () => {
      E(!0);
    },
    registerEffect: k,
    required: y,
    variant: m
  }), [O, a, c, u, R, P, f, h, k, y, g, m]);
  return /* @__PURE__ */ p(ys.Provider, {
    value: G,
    children: /* @__PURE__ */ p(w1, {
      as: l,
      ownerState: x,
      className: de(v.root, s),
      ref: r,
      ...T,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Xa.propTypes = {
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
function R1(e) {
  return Se("MuiFormControlLabel", e);
}
const Ti = Ce("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), _1 = (e) => {
  const {
    classes: t,
    disabled: r,
    labelPlacement: n,
    error: o,
    required: s
  } = e, a = {
    root: ["root", r && "disabled", `labelPlacement${Z(n)}`, o && "error", s && "required"],
    label: ["label", r && "disabled"],
    asterisk: ["asterisk", o && "error"]
  };
  return xe(a, R1, t);
}, N1 = ee("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Ti.label}`]: t.label
    }, t.root, t[`labelPlacement${Z(r.labelPlacement)}`]];
  }
})(_e(({
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
  [`&.${Ti.disabled}`]: {
    cursor: "default"
  },
  [`& .${Ti.label}`]: {
    [`&.${Ti.disabled}`]: {
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
}))), A1 = ee("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(_e(({
  theme: e
}) => ({
  [`&.${Ti.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), hy = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    labelPlacement: h = "end",
    name: b,
    onChange: y,
    required: g,
    slots: m = {},
    slotProps: T = {},
    value: x,
    ...v
  } = n, O = mr(), S = c ?? l.props.disabled ?? (O == null ? void 0 : O.disabled), R = g ?? l.props.required, w = {
    disabled: S,
    required: R
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((V) => {
    typeof l.props[V] > "u" && typeof n[V] < "u" && (w[V] = n[V]);
  });
  const A = Sn({
    props: n,
    muiFormControl: O,
    states: ["error"]
  }), E = {
    ...n,
    disabled: S,
    labelPlacement: h,
    required: R,
    error: A.error
  }, P = _1(E), k = {
    slots: m,
    slotProps: {
      ...a,
      ...T
    }
  }, [q, G] = Mt("typography", {
    elementType: Ge,
    externalForwardedProps: k,
    ownerState: E
  });
  let z = f;
  return z != null && z.type !== Ge && !u && (z = /* @__PURE__ */ p(q, {
    component: "span",
    ...G,
    className: de(P.label, G == null ? void 0 : G.className),
    children: z
  })), /* @__PURE__ */ le(N1, {
    className: de(P.root, s),
    ownerState: E,
    ref: r,
    ...v,
    children: [/* @__PURE__ */ C.cloneElement(l, w), R ? /* @__PURE__ */ le("div", {
      children: [z, /* @__PURE__ */ le(A1, {
        ownerState: E,
        "aria-hidden": !0,
        className: P.asterisk,
        children: [" ", "*"]
      })]
    }) : z]
  });
});
process.env.NODE_ENV !== "production" && (hy.propTypes = {
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
  inputRef: lr,
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
function P1(e) {
  return Se("MuiFormGroup", e);
}
Ce("MuiFormGroup", ["root", "row", "error"]);
const I1 = (e) => {
  const {
    classes: t,
    row: r,
    error: n
  } = e;
  return xe({
    root: ["root", r && "row", n && "error"]
  }, P1, t);
}, D1 = ee("div", {
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
}), my = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: o,
    row: s = !1,
    ...a
  } = n, l = mr(), c = Sn({
    props: n,
    muiFormControl: l,
    states: ["error"]
  }), u = {
    ...n,
    row: s,
    error: c.error
  }, d = I1(u);
  return /* @__PURE__ */ p(D1, {
    className: de(d.root, o),
    ownerState: u,
    ref: r,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (my.propTypes = {
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
function $1(e) {
  return Se("MuiFormHelperText", e);
}
const op = Ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var ip;
const k1 = (e) => {
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
    root: ["root", o && "disabled", s && "error", n && `size${Z(n)}`, r && "contained", l && "focused", a && "filled", c && "required"]
  };
  return xe(u, $1, t);
}, M1 = ee("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size && t[`size${Z(r.size)}`], r.contained && t.contained, r.filled && t.filled];
  }
})(_e(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${op.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${op.error}`]: {
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
}))), Uu = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    required: h,
    variant: b,
    ...y
  } = n, g = mr(), m = Sn({
    props: n,
    muiFormControl: g,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), T = {
    ...n,
    component: a,
    contained: m.variant === "filled" || m.variant === "outlined",
    variant: m.variant,
    size: m.size,
    disabled: m.disabled,
    error: m.error,
    filled: m.filled,
    focused: m.focused,
    required: m.required
  };
  delete T.ownerState;
  const x = k1(T);
  return /* @__PURE__ */ p(M1, {
    as: a,
    className: de(x.root, s),
    ref: r,
    ...y,
    ownerState: T,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      ip || (ip = /* @__PURE__ */ p("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  });
});
process.env.NODE_ENV !== "production" && (Uu.propTypes = {
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
function F1(e) {
  return Se("MuiFormLabel", e);
}
const Ai = Ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), L1 = (e) => {
  const {
    classes: t,
    color: r,
    focused: n,
    disabled: o,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${Z(r)}`, o && "disabled", s && "error", a && "filled", n && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return xe(c, F1, t);
}, q1 = ee("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...e.color === "secondary" && t.colorSecondary,
    ...e.filled && t.filled
  })
})(_e(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ai.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Ai.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Ai.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), j1 = ee("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(_e(({
  theme: e
}) => ({
  [`&.${Ai.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), yy = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    required: h,
    ...b
  } = n, y = mr(), g = Sn({
    props: n,
    muiFormControl: y,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), m = {
    ...n,
    color: g.color || "primary",
    component: l,
    disabled: g.disabled,
    error: g.error,
    filled: g.filled,
    focused: g.focused,
    required: g.required
  }, T = L1(m);
  return /* @__PURE__ */ le(q1, {
    as: l,
    ownerState: m,
    className: de(T.root, s),
    ref: r,
    ...b,
    children: [o, g.required && /* @__PURE__ */ le(j1, {
      ownerState: m,
      "aria-hidden": !0,
      className: T.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (yy.propTypes = {
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
const Ec = /* @__PURE__ */ C.createContext();
process.env.NODE_ENV !== "production" && (Ec.displayName = "GridContext");
function B1(e) {
  return Se("MuiGrid", e);
}
const V1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], z1 = ["column-reverse", "column", "row-reverse", "row"], U1 = ["nowrap", "wrap-reverse", "wrap"], pi = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], Wi = Ce("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...V1.map((e) => `spacing-xs-${e}`),
  // direction values
  ...z1.map((e) => `direction-xs-${e}`),
  // wrap values
  ...U1.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...pi.map((e) => `grid-xs-${e}`),
  ...pi.map((e) => `grid-sm-${e}`),
  ...pi.map((e) => `grid-md-${e}`),
  ...pi.map((e) => `grid-lg-${e}`),
  ...pi.map((e) => `grid-xl-${e}`)
]);
function G1({
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
      const a = Bn({
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
function W1({
  theme: e,
  ownerState: t
}) {
  const r = Bn({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return Vt({
    theme: e
  }, r, (n) => {
    const o = {
      flexDirection: n
    };
    return n.startsWith("column") && (o[`& > .${Wi.item}`] = {
      maxWidth: "none"
    }), o;
  });
}
function gy({
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
function H1({
  theme: e,
  ownerState: t
}) {
  const {
    container: r,
    rowSpacing: n
  } = t;
  let o = {};
  if (r && n !== 0) {
    const s = Bn({
      values: n,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = gy({
      breakpoints: e.breakpoints.values,
      values: s
    })), o = Vt({
      theme: e
    }, s, (l, c) => {
      const u = e.spacing(l);
      return u !== "0px" ? {
        marginTop: e.spacing(-l),
        [`& > .${Wi.item}`]: {
          paddingTop: u
        }
      } : a != null && a.includes(c) ? {} : {
        marginTop: 0,
        [`& > .${Wi.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return o;
}
function K1({
  theme: e,
  ownerState: t
}) {
  const {
    container: r,
    columnSpacing: n
  } = t;
  let o = {};
  if (r && n !== 0) {
    const s = Bn({
      values: n,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = gy({
      breakpoints: e.breakpoints.values,
      values: s
    })), o = Vt({
      theme: e
    }, s, (l, c) => {
      const u = e.spacing(l);
      if (u !== "0px") {
        const d = e.spacing(-l);
        return {
          width: `calc(100% + ${u})`,
          marginLeft: d,
          [`& > .${Wi.item}`]: {
            paddingLeft: u
          }
        };
      }
      return a != null && a.includes(c) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${Wi.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return o;
}
function Y1(e, t, r = {}) {
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
const Q1 = ee("div", {
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
    n && (d = Y1(a, u, t));
    const f = [];
    return u.forEach((h) => {
      const b = r[h];
      b && f.push(t[`grid-${h}-${String(b)}`]);
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
  W1,
  H1,
  K1,
  G1
);
function X1(e, t) {
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
const J1 = (e) => {
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
  r && (u = X1(s, c));
  const d = [];
  c.forEach((h) => {
    const b = e[h];
    b && d.push(`grid-${h}-${String(b)}`);
  });
  const f = {
    root: ["root", r && "container", o && "item", l && "zeroMinWidth", ...u, n !== "row" && `direction-xs-${String(n)}`, a !== "wrap" && `wrap-xs-${String(a)}`, ...d]
  };
  return xe(f, B1, t);
}, Qe = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Ga({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: o
  } = ei(), s = hs(n), {
    className: a,
    columns: l,
    columnSpacing: c,
    component: u = "div",
    container: d = !1,
    direction: f = "row",
    item: h = !1,
    rowSpacing: b,
    spacing: y = 0,
    wrap: g = "wrap",
    zeroMinWidth: m = !1,
    ...T
  } = s, x = b || y, v = c || y, O = C.useContext(Ec), S = d ? l || 12 : O, R = {}, w = {
    ...T
  };
  o.keys.forEach((P) => {
    T[P] != null && (R[P] = T[P], delete w[P]);
  });
  const A = {
    ...s,
    columns: S,
    container: d,
    direction: f,
    item: h,
    rowSpacing: x,
    columnSpacing: v,
    wrap: g,
    zeroMinWidth: m,
    spacing: y,
    ...R,
    breakpoints: o.keys
  }, E = J1(A);
  return /* @__PURE__ */ p(Ec.Provider, {
    value: S,
    children: /* @__PURE__ */ p(Q1, {
      ownerState: A,
      className: de(E.root, a),
      as: u,
      ref: r,
      ...w
    })
  });
});
process.env.NODE_ENV !== "production" && (Qe.propTypes = {
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
  const e = ZO("Grid", Qe);
  Qe.propTypes = {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    ...Qe.propTypes,
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
const I = Ix({
  createStyledComponent: ee("div", {
    name: "MuiGrid2",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  componentName: "MuiGrid2",
  useThemeProps: (e) => Ga({
    props: e,
    name: "MuiGrid2"
  })
});
process.env.NODE_ENV !== "production" && (I.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
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
   * Defines the offset value for the type `item` components.
   */
  offset: i.oneOfType([i.string, i.number, i.arrayOf(i.oneOfType([i.string, i.number])), i.object]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
  /**
   * Defines the size of the the type `item` components.
   */
  size: i.oneOfType([i.string, i.bool, i.number, i.arrayOf(i.oneOfType([i.string, i.bool, i.number])), i.object]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
  /**
   * @ignore
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @internal
   * The level of the grid starts from `0`
   * and increases when the grid nests inside another grid regardless of container or item.
   *
   * ```js
   * <Grid> // level 0
   *   <Grid> // level 1
   *     <Grid> // level 2
   *   <Grid> // level 1
   * ```
   *
   * Only consecutive grid is considered nesting.
   * A grid container will start at `0` if there are non-Grid element above it.
   *
   * ```js
   * <Grid> // level 0
   *   <div>
   *     <Grid> // level 0
   *       <Grid> // level 1
   * ```
   */
  unstable_level: i.number,
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: i.oneOf(["nowrap", "wrap-reverse", "wrap"])
});
function Sc(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Z1 = {
  entering: {
    opacity: 1,
    transform: Sc(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Dl = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), la = /* @__PURE__ */ C.forwardRef(function(t, r) {
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
    onExited: h,
    onExiting: b,
    style: y,
    timeout: g = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = cr,
    ...T
  } = t, x = Mu(), v = C.useRef(), O = ei(), S = C.useRef(null), R = dt(S, Jo(s), r), w = (V) => (U) => {
    if (V) {
      const Q = S.current;
      U === void 0 ? V(Q) : V(Q, U);
    }
  }, A = w(d), E = w((V, U) => {
    Bu(V);
    const {
      duration: Q,
      delay: B,
      easing: X
    } = yn({
      style: y,
      timeout: g,
      easing: a
    }, {
      mode: "enter"
    });
    let F;
    g === "auto" ? (F = O.transitions.getAutoHeightDuration(V.clientHeight), v.current = F) : F = Q, V.style.transition = [O.transitions.create("opacity", {
      duration: F,
      delay: B
    }), O.transitions.create("transform", {
      duration: Dl ? F : F * 0.666,
      delay: B,
      easing: X
    })].join(","), c && c(V, U);
  }), P = w(u), k = w(b), q = w((V) => {
    const {
      duration: U,
      delay: Q,
      easing: B
    } = yn({
      style: y,
      timeout: g,
      easing: a
    }, {
      mode: "exit"
    });
    let X;
    g === "auto" ? (X = O.transitions.getAutoHeightDuration(V.clientHeight), v.current = X) : X = U, V.style.transition = [O.transitions.create("opacity", {
      duration: X,
      delay: Q
    }), O.transitions.create("transform", {
      duration: Dl ? X : X * 0.666,
      delay: Dl ? Q : Q || X * 0.333,
      easing: B
    })].join(","), V.style.opacity = 0, V.style.transform = Sc(0.75), f && f(V);
  }), G = w(h);
  return /* @__PURE__ */ p(m, {
    appear: o,
    in: l,
    nodeRef: S,
    onEnter: E,
    onEntered: P,
    onEntering: A,
    onExit: q,
    onExited: G,
    onExiting: k,
    addEndListener: (V) => {
      g === "auto" && x.start(v.current || 0, V), n && n(S.current, V);
    },
    timeout: g === "auto" ? null : g,
    ...T,
    children: (V, U) => /* @__PURE__ */ C.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Sc(0.75),
        visibility: V === "exited" && !l ? "hidden" : void 0,
        ...Z1[V],
        ...y,
        ...s.props.style
      },
      ref: R,
      ...U
    })
  });
});
process.env.NODE_ENV !== "production" && (la.propTypes = {
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
  children: Xo.isRequired,
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
la && (la.muiSupportAuto = !0);
const e_ = (e) => {
  const {
    classes: t,
    disableUnderline: r
  } = e, o = xe({
    root: ["root", !r && "underline"],
    input: ["input"]
  }, _R, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, t_ = ee(Ka, {
  shouldForwardProp: (e) => At(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [...Wa(e, t), !r.disableUnderline && t.underline];
  }
})(_e(({
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
        [`&.${fi.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${fi.error}`]: {
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
        [`&:hover:not(.${fi.disabled}, .${fi.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${r}`
          }
        },
        [`&.${fi.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Nt()).map(([n]) => ({
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
})), r_ = ee(Ya, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Ha
})({}), Hi = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    type: h = "text",
    ...b
  } = n, y = e_(n), m = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, T = d ?? a ? vt(d ?? a, m) : m, x = f.root ?? s.Root ?? t_, v = f.input ?? s.Input ?? r_;
  return /* @__PURE__ */ p(Qa, {
    slots: {
      root: x,
      input: v
    },
    slotProps: T,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: r,
    type: h,
    ...b,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (Hi.propTypes = {
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
  inputRef: lr,
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
Hi && (Hi.muiName = "Input");
function n_(e) {
  return Se("MuiInputAdornment", e);
}
const sp = Ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var ap;
const o_ = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, t[`position${Z(r.position)}`], r.disablePointerEvents === !0 && t.disablePointerEvents, t[r.variant]];
}, i_ = (e) => {
  const {
    classes: t,
    disablePointerEvents: r,
    hiddenLabel: n,
    position: o,
    size: s,
    variant: a
  } = e, l = {
    root: ["root", r && "disablePointerEvents", o && `position${Z(o)}`, a, n && "hiddenLabel", s && `size${Z(s)}`]
  };
  return xe(l, n_, t);
}, s_ = ee("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: o_
})(_e(({
  theme: e
}) => ({
  display: "flex",
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active,
  variants: [{
    props: {
      variant: "filled"
    },
    style: {
      [`&.${sp.positionStart}&:not(.${sp.hiddenLabel})`]: {
        marginTop: 16
      }
    }
  }, {
    props: {
      position: "start"
    },
    style: {
      marginRight: 8
    }
  }, {
    props: {
      position: "end"
    },
    style: {
      marginLeft: 8
    }
  }, {
    props: {
      disablePointerEvents: !0
    },
    style: {
      pointerEvents: "none"
    }
  }]
}))), Ki = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: s,
    component: a = "div",
    disablePointerEvents: l = !1,
    disableTypography: c = !1,
    position: u,
    variant: d,
    ...f
  } = n, h = mr() || {};
  let b = d;
  d && h.variant && process.env.NODE_ENV !== "production" && d === h.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), h && !b && (b = h.variant);
  const y = {
    ...n,
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: l,
    position: u,
    variant: b
  }, g = i_(y);
  return /* @__PURE__ */ p(ys.Provider, {
    value: null,
    children: /* @__PURE__ */ p(s_, {
      as: a,
      ownerState: y,
      className: de(g.root, s),
      ref: r,
      ...f,
      children: typeof o == "string" && !c ? /* @__PURE__ */ p(Ge, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ le(C.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          ap || (ap = /* @__PURE__ */ p("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Ki.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
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
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: i.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: i.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: i.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function a_(e) {
  return Se("MuiInputLabel", e);
}
Ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const l_ = (e) => {
  const {
    classes: t,
    formControl: r,
    size: n,
    shrink: o,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", r && "formControl", !s && "animated", o && "shrink", n && n !== "normal" && `size${Z(n)}`, a],
    asterisk: [l && "asterisk"]
  }, u = xe(c, a_, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, c_ = ee(yy, {
  shouldForwardProp: (e) => At(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Ai.asterisk}`]: t.asterisk
    }, t.root, r.formControl && t.formControl, r.size === "small" && t.sizeSmall, r.shrink && t.shrink, !r.disableAnimation && t.animated, r.focused && t.focused, t[r.variant]];
  }
})(_e(({
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
}))), by = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: s,
    shrink: a,
    variant: l,
    className: c,
    ...u
  } = n, d = mr();
  let f = a;
  typeof f > "u" && d && (f = d.filled || d.focused || d.adornedStart);
  const h = Sn({
    props: n,
    muiFormControl: d,
    states: ["size", "variant", "required", "focused"]
  }), b = {
    ...n,
    disableAnimation: o,
    formControl: d,
    shrink: f,
    size: h.size,
    variant: h.variant,
    required: h.required,
    focused: h.focused
  }, y = l_(b);
  return /* @__PURE__ */ p(c_, {
    "data-shrink": f,
    ref: r,
    className: de(y.root, c),
    ...u,
    ownerState: b,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (by.propTypes = {
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
const Uo = /* @__PURE__ */ C.createContext({});
process.env.NODE_ENV !== "production" && (Uo.displayName = "ListContext");
function u_(e) {
  return Se("MuiList", e);
}
Ce("MuiList", ["root", "padding", "dense", "subheader"]);
const d_ = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return xe({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, u_, t);
}, f_ = ee("ul", {
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
}), vy = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
  } = n, f = C.useMemo(() => ({
    dense: l
  }), [l]), h = {
    ...n,
    component: a,
    dense: l,
    disablePadding: c
  }, b = d_(h);
  return /* @__PURE__ */ p(Uo.Provider, {
    value: f,
    children: /* @__PURE__ */ le(f_, {
      as: a,
      className: de(b.root, s),
      ref: r,
      ownerState: h,
      ...d,
      children: [u, o]
    })
  });
});
process.env.NODE_ENV !== "production" && (vy.propTypes = {
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
function p_(e) {
  return Se("MuiListItemIcon", e);
}
const lp = Ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), h_ = (e) => {
  const {
    alignItems: t,
    classes: r
  } = e;
  return xe({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, p_, r);
}, m_ = ee("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(_e(({
  theme: e
}) => ({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex",
  variants: [{
    props: {
      alignItems: "flex-start"
    },
    style: {
      marginTop: 8
    }
  }]
}))), Ey = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: o,
    ...s
  } = n, a = C.useContext(Uo), l = {
    ...n,
    alignItems: a.alignItems
  }, c = h_(l);
  return /* @__PURE__ */ p(m_, {
    className: de(c.root, o),
    ownerState: l,
    ref: r,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (Ey.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function y_(e) {
  return Se("MuiListItemText", e);
}
const go = Ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), g_ = (e) => {
  const {
    classes: t,
    inset: r,
    primary: n,
    secondary: o,
    dense: s
  } = e;
  return xe({
    root: ["root", r && "inset", s && "dense", n && o && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, y_, t);
}, b_ = ee("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${go.primary}`]: t.primary
    }, {
      [`& .${go.secondary}`]: t.secondary
    }, t.root, r.inset && t.inset, r.primary && r.secondary && t.multiline, r.dense && t.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${Yf.root}:where(& .${go.primary})`]: {
    display: "block"
  },
  [`.${Yf.root}:where(& .${go.secondary})`]: {
    display: "block"
  },
  variants: [{
    props: ({
      ownerState: e
    }) => e.primary && e.secondary,
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, {
    props: ({
      ownerState: e
    }) => e.inset,
    style: {
      paddingLeft: 56
    }
  }]
}), Sy = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiListItemText"
  }), {
    children: o,
    className: s,
    disableTypography: a = !1,
    inset: l = !1,
    primary: c,
    primaryTypographyProps: u,
    secondary: d,
    secondaryTypographyProps: f,
    ...h
  } = n, {
    dense: b
  } = C.useContext(Uo);
  let y = c ?? o, g = d;
  const m = {
    ...n,
    disableTypography: a,
    inset: l,
    primary: !!y,
    secondary: !!g,
    dense: b
  }, T = g_(m);
  return y != null && y.type !== Ge && !a && (y = /* @__PURE__ */ p(Ge, {
    variant: b ? "body2" : "body1",
    className: T.primary,
    component: u != null && u.variant ? void 0 : "span",
    ...u,
    children: y
  })), g != null && g.type !== Ge && !a && (g = /* @__PURE__ */ p(Ge, {
    variant: "body2",
    className: T.secondary,
    color: "textSecondary",
    ...f,
    children: g
  })), /* @__PURE__ */ le(b_, {
    className: de(T.root, s),
    ownerState: m,
    ref: r,
    ...h,
    children: [y, g]
  });
});
process.env.NODE_ENV !== "production" && (Sy.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
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
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: i.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: i.bool,
  /**
   * The main content element.
   */
  primary: i.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: i.object,
  /**
   * The secondary content element.
   */
  secondary: i.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function $l(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function cp(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function Ty(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
}
function hi(e, t, r, n, o, s) {
  let a = !1, l = o(e, t, t ? r : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = n ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Ty(l, s) || c)
      l = o(e, l, r);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Cy = /* @__PURE__ */ C.forwardRef(function(t, r) {
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
    ...h
  } = t, b = C.useRef(null), y = C.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  hn(() => {
    o && b.current.focus();
  }, [o]), C.useImperativeHandle(n, () => ({
    adjustStyleForScrollbar: (v, {
      direction: O
    }) => {
      const S = !b.current.style.width;
      if (v.clientHeight < b.current.clientHeight && S) {
        const R = `${Mm(Ht(v))}px`;
        b.current.style[O === "rtl" ? "paddingLeft" : "paddingRight"] = R, b.current.style.width = `calc(100% + ${R})`;
      }
      return b.current;
    }
  }), []);
  const g = (v) => {
    const O = b.current, S = v.key;
    if (v.ctrlKey || v.metaKey || v.altKey) {
      d && d(v);
      return;
    }
    const w = Ht(O).activeElement;
    if (S === "ArrowDown")
      v.preventDefault(), hi(O, w, u, c, $l);
    else if (S === "ArrowUp")
      v.preventDefault(), hi(O, w, u, c, cp);
    else if (S === "Home")
      v.preventDefault(), hi(O, null, u, c, $l);
    else if (S === "End")
      v.preventDefault(), hi(O, null, u, c, cp);
    else if (S.length === 1) {
      const A = y.current, E = S.toLowerCase(), P = performance.now();
      A.keys.length > 0 && (P - A.lastTime > 500 ? (A.keys = [], A.repeating = !0, A.previousKeyMatched = !0) : A.repeating && E !== A.keys[0] && (A.repeating = !1)), A.lastTime = P, A.keys.push(E);
      const k = w && !A.repeating && Ty(w, A);
      A.previousKeyMatched && (k || hi(O, w, !1, c, $l, A)) ? v.preventDefault() : A.previousKeyMatched = !1;
    }
    d && d(v);
  }, m = dt(b, r);
  let T = -1;
  C.Children.forEach(a, (v, O) => {
    if (!/* @__PURE__ */ C.isValidElement(v)) {
      T === O && (T += 1, T >= a.length && (T = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Bo.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (f === "selectedMenu" && v.props.selected || T === -1) && (T = O), T === O && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (T += 1, T >= a.length && (T = -1));
  });
  const x = C.Children.map(a, (v, O) => {
    if (O === T) {
      const S = {};
      return s && (S.autoFocus = !0), v.props.tabIndex === void 0 && f === "selectedMenu" && (S.tabIndex = 0), /* @__PURE__ */ C.cloneElement(v, S);
    }
    return v;
  });
  return /* @__PURE__ */ p(vy, {
    role: "menu",
    ref: m,
    className: l,
    onKeyDown: g,
    tabIndex: o ? 0 : -1,
    ...h,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (Cy.propTypes = {
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
function v_(e) {
  return Se("MuiPopover", e);
}
Ce("MuiPopover", ["root", "paper"]);
function up(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function dp(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function fp(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Gs(e) {
  return typeof e == "function" ? e() : e;
}
const E_ = (e) => {
  const {
    classes: t
  } = e;
  return xe({
    root: ["root"],
    paper: ["paper"]
  }, v_, t);
}, S_ = ee(dy, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Oy = ee(Vu, {
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
}), xy = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    elevation: h = 8,
    marginThreshold: b = 16,
    open: y,
    PaperProps: g = {},
    slots: m = {},
    slotProps: T = {},
    transformOrigin: x = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: v = la,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: S,
      ...R
    } = {},
    disableScrollLock: w = !1,
    ...A
  } = n, E = (T == null ? void 0 : T.paper) ?? g, P = C.useRef(), k = {
    ...n,
    anchorOrigin: a,
    anchorReference: c,
    elevation: h,
    marginThreshold: b,
    externalPaperSlotProps: E,
    transformOrigin: x,
    TransitionComponent: v,
    transitionDuration: O,
    TransitionProps: R
  }, q = E_(k), G = C.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const te = Gs(s), fe = te && te.nodeType === 1 ? te : Ht(P.current).body, D = fe.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ve = fe.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ve.top === 0 && ve.left === 0 && ve.right === 0 && ve.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: D.top + up(D, a.vertical),
      left: D.left + dp(D, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), z = C.useCallback((te) => ({
    vertical: up(te, x.vertical),
    horizontal: dp(te, x.horizontal)
  }), [x.horizontal, x.vertical]), V = C.useCallback((te) => {
    const fe = {
      width: te.offsetWidth,
      height: te.offsetHeight
    }, D = z(fe);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: fp(D)
      };
    const ve = G();
    let K = ve.top - D.vertical, Te = ve.left - D.horizontal;
    const mt = K + fe.height, Et = Te + fe.width, yt = Ur(Gs(s)), rt = yt.innerHeight - b, Jt = yt.innerWidth - b;
    if (b !== null && K < b) {
      const We = K - b;
      K -= We, D.vertical += We;
    } else if (b !== null && mt > rt) {
      const We = mt - rt;
      K -= We, D.vertical += We;
    }
    if (process.env.NODE_ENV !== "production" && fe.height > rt && fe.height && rt && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${fe.height - rt}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), b !== null && Te < b) {
      const We = Te - b;
      Te -= We, D.horizontal += We;
    } else if (Et > Jt) {
      const We = Et - Jt;
      Te -= We, D.horizontal += We;
    }
    return {
      top: `${Math.round(K)}px`,
      left: `${Math.round(Te)}px`,
      transformOrigin: fp(D)
    };
  }, [s, c, G, z, b]), [U, Q] = C.useState(y), B = C.useCallback(() => {
    const te = P.current;
    if (!te)
      return;
    const fe = V(te);
    fe.top !== null && te.style.setProperty("top", fe.top), fe.left !== null && (te.style.left = fe.left), te.style.transformOrigin = fe.transformOrigin, Q(!0);
  }, [V]);
  C.useEffect(() => (w && window.addEventListener("scroll", B), () => window.removeEventListener("scroll", B)), [s, w, B]);
  const X = (te, fe) => {
    S && S(te, fe), B();
  }, F = () => {
    Q(!1);
  };
  C.useEffect(() => {
    y && B();
  }), C.useImperativeHandle(o, () => y ? {
    updatePosition: () => {
      B();
    }
  } : null, [y, B]), C.useEffect(() => {
    if (!y)
      return;
    const te = Du(() => {
      B();
    }), fe = Ur(s);
    return fe.addEventListener("resize", te), () => {
      te.clear(), fe.removeEventListener("resize", te);
    };
  }, [s, y, B]);
  let W = O;
  O === "auto" && !v.muiSupportAuto && (W = void 0);
  const se = f || (s ? Ht(Gs(s)).body : void 0), re = {
    slots: m,
    slotProps: {
      ...T,
      paper: E
    }
  }, [J, ae] = Mt("paper", {
    elementType: Oy,
    externalForwardedProps: re,
    additionalProps: {
      elevation: h,
      className: de(q.paper, E == null ? void 0 : E.className),
      style: U ? E.style : {
        ...E.style,
        opacity: 0
      }
    },
    ownerState: k
  }), [Y, {
    slotProps: oe,
    ...ce
  }] = Mt("root", {
    elementType: S_,
    externalForwardedProps: re,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: se,
      open: y
    },
    ownerState: k,
    className: de(q.root, d)
  }), ue = dt(P, ae.ref);
  return /* @__PURE__ */ p(Y, {
    ...ce,
    ...!gc(Y) && {
      slotProps: oe,
      disableScrollLock: w
    },
    ...A,
    ref: r,
    children: /* @__PURE__ */ p(v, {
      appear: !0,
      in: y,
      onEntering: X,
      onExited: F,
      timeout: W,
      ...R,
      children: /* @__PURE__ */ p(J, {
        ...ae,
        ref: ue,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (xy.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: lr,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Kr(i.oneOfType([Vo, i.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Gs(e.anchorEl);
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
  container: i.oneOfType([Vo, i.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: qm,
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
    component: Va
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
function T_(e) {
  return Se("MuiMenu", e);
}
Ce("MuiMenu", ["root", "paper", "list"]);
const C_ = {
  vertical: "top",
  horizontal: "right"
}, O_ = {
  vertical: "top",
  horizontal: "left"
}, x_ = (e) => {
  const {
    classes: t
  } = e;
  return xe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, T_, t);
}, w_ = ee(xy, {
  shouldForwardProp: (e) => At(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), R_ = ee(Oy, {
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
}), __ = ee(Cy, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Gu = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    PopoverClasses: h,
    transitionDuration: b = "auto",
    TransitionProps: {
      onEntering: y,
      ...g
    } = {},
    variant: m = "selectedMenu",
    slots: T = {},
    slotProps: x = {},
    ...v
  } = n, O = lx(), S = {
    ...n,
    autoFocus: o,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: y,
    PaperProps: f,
    transitionDuration: b,
    TransitionProps: g,
    variant: m
  }, R = x_(S), w = o && !l && d, A = C.useRef(null), E = (U, Q) => {
    A.current && A.current.adjustStyleForScrollbar(U, {
      direction: O ? "rtl" : "ltr"
    }), y && y(U, Q);
  }, P = (U) => {
    U.key === "Tab" && (U.preventDefault(), u && u(U, "tabKeyDown"));
  };
  let k = -1;
  C.Children.map(s, (U, Q) => {
    /* @__PURE__ */ C.isValidElement(U) && (process.env.NODE_ENV !== "production" && Bo.isFragment(U) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), U.props.disabled || (m === "selectedMenu" && U.props.selected || k === -1) && (k = Q));
  });
  const q = T.paper ?? R_, G = x.paper ?? f, z = qf({
    elementType: T.root,
    externalSlotProps: x.root,
    ownerState: S,
    className: [R.root, a]
  }), V = qf({
    elementType: q,
    externalSlotProps: G,
    ownerState: S,
    className: R.paper
  });
  return /* @__PURE__ */ p(w_, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: O ? "right" : "left"
    },
    transformOrigin: O ? C_ : O_,
    slots: {
      paper: q,
      root: T.root
    },
    slotProps: {
      root: z,
      paper: V
    },
    open: d,
    ref: r,
    transitionDuration: b,
    TransitionProps: {
      onEntering: E,
      ...g
    },
    ownerState: S,
    ...v,
    classes: h,
    children: /* @__PURE__ */ p(__, {
      onKeyDown: P,
      actions: A,
      autoFocus: o && (k === -1 || l),
      autoFocusItem: w,
      variant: m,
      ...c,
      className: de(R.list, c.className),
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (Gu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: i.oneOfType([Vo, i.func]),
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
function N_(e) {
  return Se("MuiMenuItem", e);
}
const mi = Ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), A_ = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, P_ = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: n,
    disableGutters: o,
    selected: s,
    classes: a
  } = e, c = xe({
    root: ["root", r && "dense", t && "disabled", !o && "gutters", n && "divider", s && "selected"]
  }, N_, a);
  return {
    ...a,
    ...c
  };
}, I_ = ee(gn, {
  shouldForwardProp: (e) => At(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: A_
})(_e(({
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
  [`&.${mi.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Je(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${mi.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Je(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${mi.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Je(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Je(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${mi.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${mi.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${np.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${np.inset}`]: {
    marginLeft: 52
  },
  [`& .${go.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${go.inset}`]: {
    paddingLeft: 36
  },
  [`& .${lp.root}`]: {
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
      [`& .${lp.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), ca = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    className: h,
    ...b
  } = n, y = C.useContext(Uo), g = C.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: c
  }), [y.dense, a, c]), m = C.useRef(null);
  hn(() => {
    o && (m.current ? m.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [o]);
  const T = {
    ...n,
    dense: g.dense,
    divider: l,
    disableGutters: c
  }, x = P_(n), v = dt(m, r);
  let O;
  return n.disabled || (O = f !== void 0 ? f : -1), /* @__PURE__ */ p(Uo.Provider, {
    value: g,
    children: /* @__PURE__ */ p(I_, {
      ref: v,
      role: d,
      tabIndex: O,
      component: s,
      focusVisibleClassName: de(x.focusVisible, u),
      className: de(x.root, h),
      ...b,
      ownerState: T,
      classes: x
    })
  });
});
process.env.NODE_ENV !== "production" && (ca.propTypes = {
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
function D_(e) {
  return Se("MuiNativeSelect", e);
}
const Wu = Ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), $_ = (e) => {
  const {
    classes: t,
    variant: r,
    disabled: n,
    multiple: o,
    open: s,
    error: a
  } = e, l = {
    select: ["select", r, n && "disabled", o && "multiple", a && "error"],
    icon: ["icon", `icon${Z(r)}`, s && "iconOpen", n && "disabled"]
  };
  return xe(l, D_, t);
}, wy = ee("select")(({
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
  [`&.${Wu.disabled}`]: {
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
})), k_ = ee(wy, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: At,
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.select, t[r.variant], r.error && t.error, {
      [`&.${Wu.multiple}`]: t.multiple
    }];
  }
})({}), Ry = ee("svg")(({
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
  [`&.${Wu.disabled}`]: {
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
})), M_ = ee(Ry, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.icon, r.variant && t[`icon${Z(r.variant)}`], r.open && t.iconOpen];
  }
})({}), _y = /* @__PURE__ */ C.forwardRef(function(t, r) {
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
  }, f = $_(d);
  return /* @__PURE__ */ le(C.Fragment, {
    children: [/* @__PURE__ */ p(k_, {
      ownerState: d,
      className: de(f.select, n),
      disabled: o,
      ref: l || r,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ p(M_, {
      as: a,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (_y.propTypes = {
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
  inputRef: lr,
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
var pp;
const F_ = ee("fieldset", {
  shouldForwardProp: At
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
}), L_ = ee("legend", {
  shouldForwardProp: At
})(_e(({
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
function Ny(e) {
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
  return /* @__PURE__ */ p(F_, {
    "aria-hidden": !0,
    className: n,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ p(L_, {
      ownerState: c,
      children: l ? /* @__PURE__ */ p("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        pp || (pp = /* @__PURE__ */ p("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (Ny.propTypes = {
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
const q_ = (e) => {
  const {
    classes: t
  } = e, n = xe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, NR, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...n
  };
}, j_ = ee(Ka, {
  shouldForwardProp: (e) => At(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Wa
})(_e(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${br.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    [`&.${br.focused} .${br.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Nt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        [`&.${br.focused} .${br.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[r].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          [`&:hover .${br.notchedOutline}`]: {
            borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
          }
        },
        [`&.${br.error} .${br.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${br.disabled} .${br.notchedOutline}`]: {
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
})), B_ = ee(Ny, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(_e(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), V_ = ee(Ya, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Ha
})(_e(({
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
}))), Yi = /* @__PURE__ */ C.forwardRef(function(t, r) {
  var n;
  const o = Pe({
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
    type: h = "text",
    ...b
  } = o, y = q_(o), g = mr(), m = Sn({
    props: o,
    muiFormControl: g,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), T = {
    ...o,
    color: m.color || "primary",
    disabled: m.disabled,
    error: m.error,
    focused: m.focused,
    formControl: g,
    fullWidth: a,
    hiddenLabel: m.hiddenLabel,
    multiline: u,
    size: m.size,
    type: h
  }, x = f.root ?? s.Root ?? j_, v = f.input ?? s.Input ?? V_;
  return /* @__PURE__ */ p(Qa, {
    slots: {
      root: x,
      input: v
    },
    renderSuffix: (O) => /* @__PURE__ */ p(B_, {
      ownerState: T,
      className: y.notchedOutline,
      label: c != null && c !== "" && m.required ? n || (n = /* @__PURE__ */ le(C.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof d < "u" ? d : !!(O.startAdornment || O.filled || O.focused)
    }),
    fullWidth: a,
    inputComponent: l,
    multiline: u,
    ref: r,
    type: h,
    ...b,
    classes: {
      ...y,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (Yi.propTypes = {
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
  inputRef: lr,
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
Yi && (Yi.muiName = "Input");
const z_ = Yr(/* @__PURE__ */ p("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), U_ = Yr(/* @__PURE__ */ p("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), G_ = ee("span", {
  shouldForwardProp: At
})({
  position: "relative",
  display: "flex"
}), W_ = ee(z_)({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), H_ = ee(U_)(_e(({
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
function Hu(e) {
  const {
    checked: t = !1,
    classes: r = {},
    fontSize: n
  } = e, o = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ le(G_, {
    className: r.root,
    ownerState: o,
    children: [/* @__PURE__ */ p(W_, {
      fontSize: n,
      className: r.background,
      ownerState: o
    }), /* @__PURE__ */ p(H_, {
      fontSize: n,
      className: r.dot,
      ownerState: o
    })]
  });
}
process.env.NODE_ENV !== "production" && (Hu.propTypes = {
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
const Ku = /* @__PURE__ */ C.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ku.displayName = "RadioGroupContext");
function K_() {
  return C.useContext(Ku);
}
function Y_(e) {
  return Se("MuiRadio", e);
}
const hp = Ce("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), Q_ = (e) => {
  const {
    classes: t,
    color: r,
    size: n
  } = e, o = {
    root: ["root", `color${Z(r)}`, n !== "medium" && `size${Z(n)}`]
  };
  return {
    ...t,
    ...xe(o, Y_, t)
  };
}, X_ = ee(cy, {
  shouldForwardProp: (e) => At(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size !== "medium" && t[`size${Z(r.size)}`], t[`color${Z(r.color)}`]];
  }
})(_e(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${hp.disabled}`]: {
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${hp.checked}`]: {
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
function J_(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const mp = /* @__PURE__ */ p(Hu, {
  checked: !0
}), yp = /* @__PURE__ */ p(Hu, {}), Ay = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
    props: t,
    name: "MuiRadio"
  }), {
    checked: o,
    checkedIcon: s = mp,
    color: a = "primary",
    icon: l = yp,
    name: c,
    onChange: u,
    size: d = "medium",
    className: f,
    disabled: h,
    disableRipple: b = !1,
    ...y
  } = n, g = mr();
  let m = h;
  g && typeof m > "u" && (m = g.disabled), m ?? (m = !1);
  const T = {
    ...n,
    disabled: m,
    disableRipple: b,
    color: a,
    size: d
  }, x = Q_(T), v = K_();
  let O = o;
  const S = cc(u, v && v.onChange);
  let R = c;
  return v && (typeof O > "u" && (O = J_(v.value, n.value)), typeof R > "u" && (R = v.name)), /* @__PURE__ */ p(X_, {
    type: "radio",
    icon: /* @__PURE__ */ C.cloneElement(l, {
      fontSize: yp.props.fontSize ?? d
    }),
    checkedIcon: /* @__PURE__ */ C.cloneElement(s, {
      fontSize: mp.props.fontSize ?? d
    }),
    disabled: m,
    ownerState: T,
    classes: x,
    name: R,
    checked: O,
    onChange: S,
    ref: r,
    className: de(x.root, f),
    ...y
  });
});
process.env.NODE_ENV !== "production" && (Ay.propTypes = {
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
  inputRef: lr,
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
function Z_(e) {
  return Se("MuiRadioGroup", e);
}
Ce("MuiRadioGroup", ["root", "row", "error"]);
const eN = (e) => {
  const {
    classes: t,
    row: r,
    error: n
  } = e;
  return xe({
    root: ["root", r && "row", n && "error"]
  }, Z_, t);
}, Py = /* @__PURE__ */ C.forwardRef(function(t, r) {
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
  } = t, f = C.useRef(null), h = eN(t), [b, y] = zi({
    controlled: u,
    default: a,
    name: "RadioGroup"
  });
  C.useImperativeHandle(n, () => ({
    focus: () => {
      let x = f.current.querySelector("input:not(:disabled):checked");
      x || (x = f.current.querySelector("input:not(:disabled)")), x && x.focus();
    }
  }), []);
  const g = dt(r, f), m = $u(l), T = C.useMemo(() => ({
    name: m,
    onChange(x) {
      y(x.target.value), c && c(x, x.target.value);
    },
    value: b
  }), [m, c, y, b]);
  return /* @__PURE__ */ p(Ku.Provider, {
    value: T,
    children: /* @__PURE__ */ p(my, {
      role: "radiogroup",
      ref: g,
      className: de(h.root, s),
      ...d,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Py.propTypes = {
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
function tN(e) {
  return Se("MuiSelect", e);
}
const yi = Ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var gp;
const rN = ee(wy, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${yi.select}`]: t.select
      },
      {
        [`&.${yi.select}`]: t[r.variant]
      },
      {
        [`&.${yi.error}`]: t.error
      },
      {
        [`&.${yi.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${yi.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), nN = ee(Ry, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.icon, r.variant && t[`icon${Z(r.variant)}`], r.open && t.iconOpen];
  }
})({}), oN = ee("input", {
  shouldForwardProp: (e) => Hm(e) && e !== "classes",
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
function bp(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function iN(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const sN = (e) => {
  const {
    classes: t,
    variant: r,
    disabled: n,
    multiple: o,
    open: s,
    error: a
  } = e, l = {
    select: ["select", r, n && "disabled", o && "multiple", a && "error"],
    icon: ["icon", `icon${Z(r)}`, s && "iconOpen", n && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return xe(l, tN, t);
}, Iy = /* @__PURE__ */ C.forwardRef(function(t, r) {
  var ai;
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
    displayEmpty: h,
    error: b = !1,
    IconComponent: y,
    inputRef: g,
    labelId: m,
    MenuProps: T = {},
    multiple: x,
    name: v,
    onBlur: O,
    onChange: S,
    onClose: R,
    onFocus: w,
    onOpen: A,
    open: E,
    readOnly: P,
    renderValue: k,
    SelectDisplayProps: q = {},
    tabIndex: G,
    // catching `type` from Input which makes no sense for SelectInput
    type: z,
    value: V,
    variant: U = "standard",
    ...Q
  } = t, [B, X] = zi({
    controlled: V,
    default: d,
    name: "Select"
  }), [F, W] = zi({
    controlled: E,
    default: u,
    name: "Select"
  }), se = C.useRef(null), re = C.useRef(null), [J, ae] = C.useState(null), {
    current: Y
  } = C.useRef(E != null), [oe, ce] = C.useState(), ue = dt(r, g), te = C.useCallback((me) => {
    re.current = me, me && ae(me);
  }, []), fe = J == null ? void 0 : J.parentNode;
  C.useImperativeHandle(ue, () => ({
    focus: () => {
      re.current.focus();
    },
    node: se.current,
    value: B
  }), [B]), C.useEffect(() => {
    u && F && J && !Y && (ce(a ? null : fe.clientWidth), re.current.focus());
  }, [J, a]), C.useEffect(() => {
    s && re.current.focus();
  }, [s]), C.useEffect(() => {
    if (!m)
      return;
    const me = Ht(re.current).getElementById(m);
    if (me) {
      const Ie = () => {
        getSelection().isCollapsed && re.current.focus();
      };
      return me.addEventListener("click", Ie), () => {
        me.removeEventListener("click", Ie);
      };
    }
  }, [m]);
  const D = (me, Ie) => {
    me ? A && A(Ie) : R && R(Ie), Y || (ce(a ? null : fe.clientWidth), W(me));
  }, ve = (me) => {
    me.button === 0 && (me.preventDefault(), re.current.focus(), D(!0, me));
  }, K = (me) => {
    D(!1, me);
  }, Te = C.Children.toArray(l), mt = (me) => {
    const Ie = Te.find((Tt) => Tt.props.value === me.target.value);
    Ie !== void 0 && (X(Ie.props.value), S && S(me, Ie));
  }, Et = (me) => (Ie) => {
    let Tt;
    if (Ie.currentTarget.hasAttribute("tabindex")) {
      if (x) {
        Tt = Array.isArray(B) ? B.slice() : [];
        const so = B.indexOf(me.props.value);
        so === -1 ? Tt.push(me.props.value) : Tt.splice(so, 1);
      } else
        Tt = me.props.value;
      if (me.props.onClick && me.props.onClick(Ie), B !== Tt && (X(Tt), S)) {
        const so = Ie.nativeEvent || Ie, Td = new so.constructor(so.type, so);
        Object.defineProperty(Td, "target", {
          writable: !0,
          value: {
            value: Tt,
            name: v
          }
        }), S(Td, me);
      }
      x || D(!1, Ie);
    }
  }, yt = (me) => {
    P || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(me.key) && (me.preventDefault(), D(!0, me));
  }, rt = J !== null && F, Jt = (me) => {
    !rt && O && (Object.defineProperty(me, "target", {
      writable: !0,
      value: {
        value: B,
        name: v
      }
    }), O(me));
  };
  delete Q["aria-invalid"];
  let We, $;
  const j = [];
  let ne = !1, pe = !1;
  (sa({
    value: B
  }) || h) && (k ? We = k(B) : ne = !0);
  const ge = Te.map((me) => {
    if (!/* @__PURE__ */ C.isValidElement(me))
      return null;
    process.env.NODE_ENV !== "production" && Bo.isFragment(me) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Ie;
    if (x) {
      if (!Array.isArray(B))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Dr(2));
      Ie = B.some((Tt) => bp(Tt, me.props.value)), Ie && ne && j.push(me.props.children);
    } else
      Ie = bp(B, me.props.value), Ie && ne && ($ = me.props.children);
    return Ie && (pe = !0), /* @__PURE__ */ C.cloneElement(me, {
      "aria-selected": Ie ? "true" : "false",
      onClick: Et(me),
      onKeyUp: (Tt) => {
        Tt.key === " " && Tt.preventDefault(), me.props.onKeyUp && me.props.onKeyUp(Tt);
      },
      role: "option",
      selected: Ie,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": me.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && C.useEffect(() => {
    if (!pe && !x && B !== "") {
      const me = Te.map((Ie) => Ie.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${B}\` for the select ${v ? `(name="${v}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${me.filter((Ie) => Ie != null).map((Ie) => `\`${Ie}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [pe, Te, x, v, B]), ne && (x ? j.length === 0 ? We = null : We = j.reduce((me, Ie, Tt) => (me.push(Ie), Tt < j.length - 1 && me.push(", "), me), []) : We = $);
  let we = oe;
  !a && Y && J && (we = fe.clientWidth);
  let Ze;
  typeof G < "u" ? Ze = G : Ze = f ? null : 0;
  const St = q.id || (v ? `mui-component-select-${v}` : void 0), ur = {
    ...t,
    variant: U,
    value: B,
    open: rt,
    error: b
  }, De = sN(ur), Qr = {
    ...T.PaperProps,
    ...(ai = T.slotProps) == null ? void 0 : ai.paper
  }, Tn = $u();
  return /* @__PURE__ */ le(C.Fragment, {
    children: [/* @__PURE__ */ p(rN, {
      as: "div",
      ref: te,
      tabIndex: Ze,
      role: "combobox",
      "aria-controls": Tn,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": rt ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": o,
      "aria-labelledby": [m, St].filter(Boolean).join(" ") || void 0,
      "aria-describedby": n,
      onKeyDown: yt,
      onMouseDown: f || P ? null : ve,
      onBlur: Jt,
      onFocus: w,
      ...q,
      ownerState: ur,
      className: de(q.className, De.select, c),
      id: St,
      children: iN(We) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        gp || (gp = /* @__PURE__ */ p("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : We
    }), /* @__PURE__ */ p(oN, {
      "aria-invalid": b,
      value: Array.isArray(B) ? B.join(",") : B,
      name: v,
      ref: se,
      "aria-hidden": !0,
      onChange: mt,
      tabIndex: -1,
      disabled: f,
      className: De.nativeInput,
      autoFocus: s,
      ...Q,
      ownerState: ur
    }), /* @__PURE__ */ p(nN, {
      as: y,
      className: De.icon,
      ownerState: ur
    }), /* @__PURE__ */ p(Gu, {
      id: `menu-${v || ""}`,
      anchorEl: fe,
      open: rt,
      onClose: K,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...T,
      MenuListProps: {
        "aria-labelledby": m,
        role: "listbox",
        "aria-multiselectable": x ? "true" : void 0,
        disableListWrap: !0,
        id: Tn,
        ...T.MenuListProps
      },
      slotProps: {
        ...T.slotProps,
        paper: {
          ...Qr,
          style: {
            minWidth: we,
            ...Qr != null ? Qr.style : null
          }
        }
      },
      children: ge
    })]
  });
});
process.env.NODE_ENV !== "production" && (Iy.propTypes = {
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
  inputRef: lr,
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
const aN = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Yu = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => At(e) && e !== "variant",
  slot: "Root"
}, lN = ee(Hi, Yu)(""), cN = ee(Yi, Yu)(""), uN = ee(Gi, Yu)(""), Ja = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Ga({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = PR,
    id: f,
    input: h,
    inputProps: b,
    label: y,
    labelId: g,
    MenuProps: m,
    multiple: T = !1,
    native: x = !1,
    onClose: v,
    onOpen: O,
    open: S,
    renderValue: R,
    SelectDisplayProps: w,
    variant: A = "outlined",
    ...E
  } = n, P = x ? _y : Iy, k = mr(), q = Sn({
    props: n,
    muiFormControl: k,
    states: ["variant", "error"]
  }), G = q.variant || A, z = {
    ...n,
    variant: G,
    classes: a
  }, V = aN(z), {
    root: U,
    ...Q
  } = V, B = h || {
    standard: /* @__PURE__ */ p(lN, {
      ownerState: z
    }),
    outlined: /* @__PURE__ */ p(cN, {
      label: y,
      ownerState: z
    }),
    filled: /* @__PURE__ */ p(uN, {
      ownerState: z
    })
  }[G], X = dt(r, Jo(B));
  return /* @__PURE__ */ p(C.Fragment, {
    children: /* @__PURE__ */ C.cloneElement(B, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: P,
      inputProps: {
        children: s,
        error: q.error,
        IconComponent: d,
        variant: G,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: T,
        ...x ? {
          id: f
        } : {
          autoWidth: o,
          defaultOpen: c,
          displayEmpty: u,
          labelId: g,
          MenuProps: m,
          onClose: v,
          onOpen: O,
          open: S,
          renderValue: R,
          SelectDisplayProps: {
            id: f,
            ...w
          }
        },
        ...b,
        classes: b ? vt(Q, b.classes) : Q,
        ...h ? h.props.inputProps : {}
      },
      ...(T && x || u) && G === "outlined" ? {
        notched: !0
      } : {},
      ref: X,
      className: de(B.props.className, l, V.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!h && {
        variant: G
      },
      ...E
    })
  });
});
process.env.NODE_ENV !== "production" && (Ja.propTypes = {
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
Ja.muiName = "Select";
const Dy = qx({
  createStyledComponent: ee("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => Ga({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Dy.propTypes = {
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
function dN(e) {
  return Se("MuiTextField", e);
}
Ce("MuiTextField", ["root"]);
const fN = {
  standard: Hi,
  filled: Gi,
  outlined: Yi
}, pN = (e) => {
  const {
    classes: t
  } = e;
  return xe({
    root: ["root"]
  }, dN, t);
}, hN = ee(Xa, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Qu = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = Pe({
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
    FormHelperTextProps: h,
    fullWidth: b = !1,
    helperText: y,
    id: g,
    InputLabelProps: m,
    inputProps: T,
    InputProps: x,
    inputRef: v,
    label: O,
    maxRows: S,
    minRows: R,
    multiline: w = !1,
    name: A,
    onBlur: E,
    onChange: P,
    onFocus: k,
    placeholder: q,
    required: G = !1,
    rows: z,
    select: V = !1,
    SelectProps: U,
    slots: Q = {},
    slotProps: B = {},
    type: X,
    value: F,
    variant: W = "outlined",
    ...se
  } = n, re = {
    ...n,
    autoFocus: s,
    color: c,
    disabled: d,
    error: f,
    fullWidth: b,
    multiline: w,
    required: G,
    select: V,
    variant: W
  }, J = pN(re);
  process.env.NODE_ENV !== "production" && V && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const ae = $u(g), Y = y && ae ? `${ae}-helper-text` : void 0, oe = O && ae ? `${ae}-label` : void 0, ce = fN[W], ue = {
    slots: Q,
    slotProps: {
      input: x,
      inputLabel: m,
      htmlInput: T,
      formHelperText: h,
      select: U,
      ...B
    }
  }, te = {}, fe = ue.slotProps.inputLabel;
  W === "outlined" && (fe && typeof fe.shrink < "u" && (te.notched = fe.shrink), te.label = O), V && ((!U || !U.native) && (te.id = void 0), te["aria-describedby"] = void 0);
  const [D, ve] = Mt("input", {
    elementType: ce,
    externalForwardedProps: ue,
    additionalProps: te,
    ownerState: re
  }), [K, Te] = Mt("inputLabel", {
    elementType: by,
    externalForwardedProps: ue,
    ownerState: re
  }), [mt, Et] = Mt("htmlInput", {
    elementType: "input",
    externalForwardedProps: ue,
    ownerState: re
  }), [yt, rt] = Mt("formHelperText", {
    elementType: Uu,
    externalForwardedProps: ue,
    ownerState: re
  }), [Jt, We] = Mt("select", {
    elementType: Ja,
    externalForwardedProps: ue,
    ownerState: re
  }), $ = /* @__PURE__ */ p(D, {
    "aria-describedby": Y,
    autoComplete: o,
    autoFocus: s,
    defaultValue: u,
    fullWidth: b,
    multiline: w,
    name: A,
    rows: z,
    maxRows: S,
    minRows: R,
    type: X,
    value: F,
    id: ae,
    inputRef: v,
    onBlur: E,
    onChange: P,
    onFocus: k,
    placeholder: q,
    inputProps: Et,
    slots: {
      input: Q.htmlInput ? mt : void 0
    },
    ...ve
  });
  return /* @__PURE__ */ le(hN, {
    className: de(J.root, l),
    disabled: d,
    error: f,
    fullWidth: b,
    ref: r,
    required: G,
    color: c,
    variant: W,
    ownerState: re,
    ...se,
    children: [O != null && O !== "" && /* @__PURE__ */ p(K, {
      htmlFor: ae,
      id: oe,
      ...Te,
      children: O
    }), V ? /* @__PURE__ */ p(Jt, {
      "aria-describedby": Y,
      id: ae,
      labelId: oe,
      value: F,
      input: $,
      ...We,
      children: a
    }) : $, y && /* @__PURE__ */ p(yt, {
      id: Y,
      ...rt,
      children: y
    })]
  });
});
process.env.NODE_ENV !== "production" && (Qu.propTypes = {
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
  inputRef: lr,
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
ee("div")(({ theme: e }) => ({
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
const Xu = Yr(/* @__PURE__ */ p("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add"), mN = Yr(/* @__PURE__ */ p("path", {
  d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
}), "ArrowForwardIosSharp"), yN = Yr(/* @__PURE__ */ p("path", {
  d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"
}), "AttachFile"), Za = Yr(/* @__PURE__ */ p("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), gN = Yr(/* @__PURE__ */ p("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3M8 13h2.55v3h2.9v-3H16l-4-4z"
}), "CloudUploadOutlined");
ht.forwardRef(
  ({ buttonLabel: e, menuItems: t }, r) => {
    const [n, o] = ht.useState(null), s = !!n, a = (c) => {
      o(c.currentTarget);
    }, l = () => {
      o(null);
    };
    return /* @__PURE__ */ le("div", { children: [
      /* @__PURE__ */ p(
        ti,
        {
          id: "basic-button",
          ref: r,
          "aria-controls": s ? "basic-menu" : void 0,
          "aria-haspopup": "true",
          "aria-expanded": s ? "true" : void 0,
          onClick: a,
          children: e
        }
      ),
      /* @__PURE__ */ p(
        Gu,
        {
          id: "basic-menu",
          anchorEl: n,
          open: s,
          onClose: l,
          MenuListProps: {
            "aria-labelledby": "basic-button"
          },
          children: t.map((c, u) => /* @__PURE__ */ le(ca, { onClick: () => {
            c.onClick(), l();
          }, children: [
            /* @__PURE__ */ p(Ey, { children: c.logo }),
            /* @__PURE__ */ p(Sy, { children: c.label })
          ] }, u))
        }
      )
    ] });
  }
);
const ri = ({ isRequired: e = !1, isReadOnly: t = !1, isError: r = !1, label: n, name: o }) => /* @__PURE__ */ le(
  Ge,
  {
    variant: "body2",
    component: "label",
    htmlFor: o,
    color: t ? "#9e9e9e" : r ? xn[900] : "black",
    children: [
      e && /* @__PURE__ */ p(
        Ge,
        {
          component: "span",
          variant: "body2",
          color: "error",
          sx: { fontWeight: 600 },
          children: "* "
        }
      ),
      n
    ]
  }
), bN = 48, vN = 8, EN = {
  PaperProps: {
    style: {
      maxHeight: bN * 4.5 + vN
    }
  }
}, or = ({
  isRequired: e,
  label: t,
  name: r,
  value: n,
  options: o = [],
  noOptionsMessage: s = "No options available",
  handleChange: a,
  ...l
}) => {
  const [c, u] = ss(r);
  return /* @__PURE__ */ le(Qe, { container: !0, direction: "column", children: [
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, children: /* @__PURE__ */ p(
      ri,
      {
        isRequired: e,
        isError: u.touched && !!u.error,
        name: r,
        label: t
      }
    ) }),
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, children: /* @__PURE__ */ le(Xa, { fullWidth: !0, error: u.touched && !!u.error, children: [
      /* @__PURE__ */ p(
        Ja,
        {
          ...c,
          id: r,
          size: "small",
          value: n || "",
          onChange: a,
          MenuProps: EN,
          ...l,
          children: o.length > 0 ? o.map((d, f) => /* @__PURE__ */ p(ca, { value: d.value, children: d.label }, f)) : /* @__PURE__ */ p(ca, { value: "", disabled: !0, children: s })
        }
      ),
      u.touched && u.error && /* @__PURE__ */ p(Uu, { children: u.error })
    ] }) })
  ] });
}, Tc = ({ isRequired: e, name: t, label: r }) => {
  const { setFieldValue: n, values: o } = sr(), [s, a] = ht.useState(null), [l, c] = ss(t);
  ht.useEffect(() => {
    o[t] && typeof o[t] == "string" && a(o[t]);
  }, [o, t]);
  const u = (f) => {
    var b;
    const h = (b = f.target.files) == null ? void 0 : b[0];
    if (h) {
      n(t, h);
      const y = new FileReader();
      y.onloadend = () => {
        a(y.result);
      }, y.readAsDataURL(h);
    }
  }, d = () => {
    n(t, null), a(null);
  };
  return /* @__PURE__ */ le(Qe, { container: !0, direction: "column", children: [
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, children: /* @__PURE__ */ p(
      ri,
      {
        isRequired: e,
        isError: c.touched && !!c.error,
        name: t,
        label: r
      }
    ) }),
    /* @__PURE__ */ le(Qe, { item: !0, xs: 12, sx: { display: "flex", alignItems: "start", justifyContent: "center", border: "1px solid #BDBDBD", borderRadius: 2, padding: 1 }, children: [
      /* @__PURE__ */ p(
        gs,
        {
          sx: {
            borderRadius: "8px",
            width: "200px",
            height: "200px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: s ? /* @__PURE__ */ p(
            "img",
            {
              src: s,
              alt: "Image preview",
              style: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }
            }
          ) : /* @__PURE__ */ le(Dy, { direction: "column", children: [
            /* @__PURE__ */ le(bn, { component: "label", children: [
              /* @__PURE__ */ p(gN, { sx: { fontSize: 50 } }),
              /* @__PURE__ */ p("input", { hidden: !0, accept: "image/*", type: "file", onChange: u })
            ] }),
            /* @__PURE__ */ p(Ge, { variant: "body2", component: "div", children: "Upload Image" })
          ] })
        }
      ),
      s && /* @__PURE__ */ p(
        bn,
        {
          sx: { backgroundColor: "none" },
          onClick: d,
          children: /* @__PURE__ */ p(Za, { color: "error" })
        }
      )
    ] }),
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, children: c.touched && !!c.error && /* @__PURE__ */ p(Ge, { variant: "caption", component: "div", color: "error", children: c.error }) })
  ] });
}, Pi = ({ isRequired: e, label: t, name: r }) => {
  var h;
  const [n, o, s] = ss(r), { setValue: a } = s, l = ht.useRef(null), [c, u] = ht.useState(((h = n.value) == null ? void 0 : h.name) || ""), d = ee("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1
  }), f = (b) => {
    var g, m;
    const y = (g = b.target.files) == null ? void 0 : g[0];
    if (y) {
      const T = ["pdf", "jpg", "jpeg", "png", "txt", "xlsx"], x = (m = y.name.split(".").pop()) == null ? void 0 : m.toLowerCase();
      x && T.includes(x) ? (a(y), u(y.name)) : alert("Invalid file type! Please select a valid file.");
    }
  };
  return /* @__PURE__ */ le(Qe, { container: !0, direction: "column", children: [
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, children: /* @__PURE__ */ p(
      ri,
      {
        isRequired: e,
        isError: o.touched && !!o.error,
        name: r,
        label: t
      }
    ) }),
    /* @__PURE__ */ le(Qe, { item: !0, xs: 12, children: [
      /* @__PURE__ */ le(
        gs,
        {
          width: "100%",
          display: "flex",
          alignItems: "center",
          sx: { border: "1px solid #BDBDBD", borderRadius: 1, padding: "2px" },
          children: [
            /* @__PURE__ */ p(
              bn,
              {
                size: "small",
                onClick: () => {
                  var b;
                  return (b = l.current) == null ? void 0 : b.click();
                },
                children: /* @__PURE__ */ p(yN, {})
              }
            ),
            /* @__PURE__ */ p(Ge, { variant: "body2", sx: { flex: 1, marginLeft: 1 }, children: c || "No file selected" }),
            /* @__PURE__ */ p(
              d,
              {
                ref: l,
                type: "file",
                accept: ".pdf, .jpeg, .jpg, .png, .txt, .xlsx",
                onChange: f
              }
            )
          ]
        }
      ),
      o.touched && !!o.error && /* @__PURE__ */ p(Ge, { variant: "caption", color: "error", children: o.error })
    ] })
  ] });
}, H = ({ isRequired: e, label: t, name: r, type: n, value: o, handleChange: s, isReadOnly: a, ...l }) => {
  const [c, u] = ss(r);
  return /* @__PURE__ */ le(Qe, { container: !0, direction: "column", children: [
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, children: /* @__PURE__ */ p(
      ri,
      {
        isRequired: e,
        isReadOnly: a,
        isError: u.touched && !!u.error,
        name: r,
        label: t
      }
    ) }),
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, children: /* @__PURE__ */ p(
      Qu,
      {
        ...c,
        fullWidth: !0,
        size: "small",
        autoComplete: "off",
        autoCorrect: "off",
        type: n,
        id: r,
        name: r,
        value: o ?? "",
        onChange: s,
        disabled: a,
        InputLabelProps: { shrink: n === "date" },
        InputProps: {
          readOnly: a ?? !1
        },
        error: u.touched && !!u.error,
        helperText: u.touched && u.error ? u.error : "",
        sx: {
          "& .MuiOutlinedInput-root": {
            pointerEvents: a ? "none" : "auto"
          }
        },
        ...l
      }
    ) })
  ] });
}, Ii = ({
  isRequired: e,
  label: t,
  name: r,
  value: n,
  options: o,
  alignment: s,
  handleChange: a,
  ...l
}) => {
  const [c, u] = ss(r);
  return /* @__PURE__ */ le(Qe, { container: !0, direction: s === "vertical" ? "column" : "row", sx: { flex: 1, alignItems: s === "vertical" ? "flex-start" : "center", justifyContent: "center" }, children: [
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, md: s === "vertical" ? 12 : 2, children: /* @__PURE__ */ p(
      ri,
      {
        isRequired: e,
        isError: u.touched && !!u.error,
        name: r,
        label: t
      }
    ) }),
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, md: s === "vertical" ? 12 : 10, children: /* @__PURE__ */ p(Xa, { component: "fieldset", children: /* @__PURE__ */ p(Py, { row: !0, name: r, value: n, onChange: a, ...l, sx: {
      "& .MuiSvgIcon-root": {
        fontSize: 15
      }
    }, children: o.map((d) => /* @__PURE__ */ Gn(
      hy,
      {
        ...c,
        key: d.label,
        control: /* @__PURE__ */ p(Ay, {}),
        label: d.label,
        value: d.value,
        sx: { fontSize: 10 }
      }
    )) }) }) }),
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, children: u.touched && !!u.error && /* @__PURE__ */ p(Ge, { variant: "caption", component: "div", color: "error", children: u.error }) })
  ] });
}, Ws = ({ isRequired: e, name: t, label: r, values: n, setFieldValue: o }) => {
  const [s, a] = ht.useState(""), l = Array.isArray(n) ? n : [];
  return /* @__PURE__ */ p(Eu, { name: t, children: ({ push: c, remove: u }) => /* @__PURE__ */ le(Qe, { container: !0, direction: "column", children: [
    /* @__PURE__ */ p(Qe, { item: !0, xs: 12, children: /* @__PURE__ */ p(
      ri,
      {
        isRequired: e,
        isError: !1,
        label: r,
        name: t
      }
    ) }),
    /* @__PURE__ */ le(Qe, { item: !0, container: !0, sx: { border: "1px solid #ccc", borderRadius: 1 }, children: [
      /* @__PURE__ */ p(Qe, { item: !0, xs: 11, md: 3, sx: { borderRight: "1px solid #ccc", borderBottom: "1px solid #ccc" }, children: /* @__PURE__ */ p(
        Qu,
        {
          name: "inputValue",
          size: "small",
          value: s,
          onChange: (d) => a(d.target.value),
          sx: {
            "& .MuiOutlinedInput-root": {
              border: "none",
              "& fieldset": {
                border: "none"
              },
              "&:before, &:after": {
                border: "none"
              }
            }
          },
          onKeyDown: (d) => {
            if (d.key === "Enter" && s.trim() && (d.preventDefault(), !l.includes(s.trim()))) {
              const f = [...l, s.trim()];
              o(t, f), a("");
            }
          }
        }
      ) }),
      /* @__PURE__ */ p(Qe, { item: !0, xs: 1, md: 1, children: /* @__PURE__ */ p(
        bn,
        {
          color: "primary",
          onClick: () => {
            if (s.trim() && !l.includes(s.trim())) {
              const d = [...l, s.trim()];
              o(t, d), a("");
            }
          },
          children: /* @__PURE__ */ p(Xu, {})
        }
      ) }),
      /* @__PURE__ */ p(Qe, { item: !0, xs: 12, md: 8, sx: { display: "flex", alignItems: "center", flexWrap: "wrap" }, children: l.map((d, f) => /* @__PURE__ */ p(
        ry,
        {
          label: d,
          sx: { margin: "1px" },
          onDelete: () => {
            const h = l.filter((b, y) => y !== f);
            o(t, h);
          },
          deleteIcon: /* @__PURE__ */ p(Za, {})
        },
        f
      )) })
    ] })
  ] }) });
}, SN = ee((e) => /* @__PURE__ */ p(Xm, { disableGutters: !0, elevation: 0, square: !0, ...e }))(({ theme: e }) => ({
  borderBottom: `1px solid ${e.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&::before": {
    display: "none"
  }
})), TN = ee((e) => /* @__PURE__ */ p(
  ty,
  {
    expandIcon: /* @__PURE__ */ p(mN, { sx: { fontSize: "0.9rem" } }),
    ...e
  }
))(({ theme: e }) => ({
  flexDirection: "row-reverse",
  [`& .${jr.expandIconWrapper}.${jr.expanded}`]: {
    transform: "rotate(90deg)"
  },
  [`& .${jr.content}`]: {
    marginLeft: e.spacing(1)
  },
  ...e.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)"
  })
})), CN = ee(Jm)(({ theme: e }) => ({
  padding: e.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)"
})), Pn = (e) => {
  const { panel: t, children: r, openOnError: n } = e, { errors: o } = sr(), [s, a] = C.useState(!1);
  return C.useEffect(() => {
    n && o && Object.keys(o).length > 0 && a(t);
  }, [o, t, n]), /* @__PURE__ */ p(gs, { flex: 1, children: /* @__PURE__ */ le(SN, { expanded: s === t, onChange: ((c) => (u, d) => {
    a(d ? c : !1);
  })(t), children: [
    /* @__PURE__ */ p(TN, { "aria-controls": t, id: t, children: /* @__PURE__ */ p(Ge, { variant: "body1", sx: { fontWeight: 700 }, children: t }) }),
    /* @__PURE__ */ p(CN, { children: r })
  ] }) });
};
var Cc = { exports: {} }, kl = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function ON() {
  if (vp) return kl;
  vp = 1;
  var e = ht;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, o = e.useRef, s = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return kl.useSyncExternalStoreWithSelector = function(c, u, d, f, h) {
    var b = o(null);
    if (b.current === null) {
      var y = { hasValue: !1, value: null };
      b.current = y;
    } else y = b.current;
    b = a(function() {
      function m(S) {
        if (!T) {
          if (T = !0, x = S, S = f(S), h !== void 0 && y.hasValue) {
            var R = y.value;
            if (h(R, S)) return v = R;
          }
          return v = S;
        }
        if (R = v, r(x, S)) return R;
        var w = f(S);
        return h !== void 0 && h(R, w) ? R : (x = S, v = w);
      }
      var T = !1, x, v, O = d === void 0 ? null : d;
      return [function() {
        return m(u());
      }, O === null ? void 0 : function() {
        return m(O());
      }];
    }, [u, d, f, h]);
    var g = n(c, b[0], b[1]);
    return s(function() {
      y.hasValue = !0, y.value = g;
    }, [g]), l(g), g;
  }, kl;
}
var Ml = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ep;
function xN() {
  return Ep || (Ep = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ht;
    function t(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, o = e.useRef, s = e.useEffect, a = e.useMemo, l = e.useDebugValue;
    function c(u, d, f, h, b) {
      var y = o(null), g;
      y.current === null ? (g = {
        hasValue: !1,
        value: null
      }, y.current = g) : g = y.current;
      var m = a(function() {
        var O = !1, S, R, w = function(k) {
          if (!O) {
            O = !0, S = k;
            var q = h(k);
            if (b !== void 0 && g.hasValue) {
              var G = g.value;
              if (b(G, q))
                return R = G, G;
            }
            return R = q, q;
          }
          var z = S, V = R;
          if (r(z, k))
            return V;
          var U = h(k);
          return b !== void 0 && b(V, U) ? V : (S = k, R = U, U);
        }, A = f === void 0 ? null : f, E = function() {
          return w(d());
        }, P = A === null ? void 0 : function() {
          return w(A());
        };
        return [E, P];
      }, [d, f, h, b]), T = m[0], x = m[1], v = n(u, T, x);
      return s(function() {
        g.hasValue = !0, g.value = v;
      }, [v]), l(v), v;
    }
    Ml.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ml;
}
process.env.NODE_ENV === "production" ? Cc.exports = ON() : Cc.exports = xN();
var wN = Cc.exports, Ar = (
  // prettier-ignore
  // @ts-ignore
  "default" in C ? C.default : C
), Sp = Symbol.for("react-redux-context"), Tp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function RN() {
  if (!Ar.createContext)
    return {};
  const e = Tp[Sp] ?? (Tp[Sp] = /* @__PURE__ */ new Map());
  let t = e.get(Ar.createContext);
  return t || (t = Ar.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(Ar.createContext, t)), t;
}
var Oc = /* @__PURE__ */ RN(), _N = () => {
  throw new Error("uSES not initialized!");
};
function $y(e = Oc) {
  return function() {
    const r = Ar.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var NN = /* @__PURE__ */ $y(), ky = _N, AN = (e) => {
  ky = e;
}, PN = (e, t) => e === t;
function IN(e = Oc) {
  const t = e === Oc ? NN : $y(e), r = (n, o = {}) => {
    const { equalityFn: s = PN, devModeChecks: a = {} } = typeof o == "function" ? { equalityFn: o } : o;
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
    } = t(), h = Ar.useRef(!0), b = Ar.useCallback(
      {
        [n.name](g) {
          const m = n(g);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: T,
              stabilityCheck: x
            } = {
              stabilityCheck: d,
              identityFunctionCheck: f,
              ...a
            };
            if (x === "always" || x === "once" && h.current) {
              const v = n(g);
              if (!s(m, v)) {
                let O;
                try {
                  throw new Error();
                } catch (S) {
                  ({ stack: O } = S);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: g,
                    selected: m,
                    selected2: v,
                    stack: O
                  }
                );
              }
            }
            if ((T === "always" || T === "once" && h.current) && m === g) {
              let v;
              try {
                throw new Error();
              } catch (O) {
                ({ stack: v } = O);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: v }
              );
            }
            h.current && (h.current = !1);
          }
          return m;
        }
      }[n.name],
      [n, d, a.stabilityCheck]
    ), y = ky(
      c.addNestedSub,
      l.getState,
      u || l.getState,
      b,
      s
    );
    return Ar.useDebugValue(y), y;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var My = /* @__PURE__ */ IN(), DN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $N = typeof navigator < "u" && navigator.product === "ReactNative";
DN || $N ? Ar.useLayoutEffect : Ar.useEffect;
AN(wN.useSyncExternalStoreWithSelector);
My.withTypes();
function Ct(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var kN = typeof Symbol == "function" && Symbol.observable || "@@observable", Cp = kN, Fl = () => Math.random().toString(36).substring(7).split("").join("."), MN = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Fl()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Fl()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Fl()}`
}, Vn = MN;
function bs(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function FN(e) {
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
  if (jN(e))
    return "date";
  if (qN(e))
    return "error";
  const r = LN(e);
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
function LN(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function qN(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function jN(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function en(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = FN(e)), t;
}
function Fy(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ct(2) : `Expected the root reducer to be a function. Instead, received: '${en(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ct(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(1) : `Expected the enhancer to be a function. Instead, received: '${en(r)}'`);
    return r(Fy)(e, t);
  }
  let n = e, o = t, s = /* @__PURE__ */ new Map(), a = s, l = 0, c = !1;
  function u() {
    a === s && (a = /* @__PURE__ */ new Map(), s.forEach((m, T) => {
      a.set(T, m);
    }));
  }
  function d() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Ct(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function f(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(4) : `Expected the listener to be a function. Instead, received: '${en(m)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Ct(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let T = !0;
    u();
    const x = l++;
    return a.set(x, m), function() {
      if (T) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Ct(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        T = !1, u(), a.delete(x), s = null;
      }
    };
  }
  function h(m) {
    if (!bs(m))
      throw new Error(process.env.NODE_ENV === "production" ? Ct(7) : `Actions must be plain objects. Instead, the actual type was: '${en(m)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof m.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof m.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(17) : `Action "type" property must be a string. Instead, the actual type was: '${en(m.type)}'. Value was: '${m.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Ct(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = n(o, m);
    } finally {
      c = !1;
    }
    return (s = a).forEach((x) => {
      x();
    }), m;
  }
  function b(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(10) : `Expected the nextReducer to be a function. Instead, received: '${en(m)}`);
    n = m, h({
      type: Vn.REPLACE
    });
  }
  function y() {
    const m = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(T) {
        if (typeof T != "object" || T === null)
          throw new Error(process.env.NODE_ENV === "production" ? Ct(11) : `Expected the observer to be an object. Instead, received: '${en(T)}'`);
        function x() {
          const O = T;
          O.next && O.next(d());
        }
        return x(), {
          unsubscribe: m(x)
        };
      },
      [Cp]() {
        return this;
      }
    };
  }
  return h({
    type: Vn.INIT
  }), {
    dispatch: h,
    subscribe: f,
    getState: d,
    replaceReducer: b,
    [Cp]: y
  };
}
function Op(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function BN(e, t, r, n) {
  const o = Object.keys(t), s = r && r.type === Vn.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!bs(e))
    return `The ${s} has unexpected type of "${en(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const a = Object.keys(e).filter((l) => !t.hasOwnProperty(l) && !n[l]);
  if (a.forEach((l) => {
    n[l] = !0;
  }), !(r && r.type === Vn.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${s}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function VN(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Vn.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Vn.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Vn.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Ly(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    process.env.NODE_ENV !== "production" && typeof e[l] > "u" && Op(`No reducer provided for key "${l}"`), typeof e[l] == "function" && (r[l] = e[l]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let s;
  try {
    VN(r);
  } catch (a) {
    s = a;
  }
  return function(l = {}, c) {
    if (s)
      throw s;
    if (process.env.NODE_ENV !== "production") {
      const f = BN(l, r, c, o);
      f && Op(f);
    }
    let u = !1;
    const d = {};
    for (let f = 0; f < n.length; f++) {
      const h = n[f], b = r[h], y = l[h], g = b(y, c);
      if (typeof g > "u") {
        const m = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? Ct(14) : `When called with an action of type ${m ? `"${String(m)}"` : "(unknown type)"}, the slice reducer for key "${h}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      d[h] = g, u = u || g !== y;
    }
    return u = u || n.length !== Object.keys(l).length, u ? d : l;
  };
}
function ua(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function zN(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let s = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Ct(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...u) => s(c, ...u)
    }, l = e.map((c) => c(a));
    return s = ua(...l)(o.dispatch), {
      ...o,
      dispatch: s
    };
  };
}
function qy(e) {
  return bs(e) && "type" in e && typeof e.type == "string";
}
var jy = Symbol.for("immer-nothing"), xp = Symbol.for("immer-draftable"), Qt = Symbol.for("immer-state"), UN = process.env.NODE_ENV !== "production" ? [
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
function Ft(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = UN[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Go = Object.getPrototypeOf;
function Yn(e) {
  return !!e && !!e[Qt];
}
function Wr(e) {
  var t;
  return e ? By(e) || Array.isArray(e) || !!e[xp] || !!((t = e.constructor) != null && t[xp]) || tl(e) || rl(e) : !1;
}
var GN = Object.prototype.constructor.toString();
function By(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Go(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === GN;
}
function da(e, t) {
  el(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function el(e) {
  const t = e[Qt];
  return t ? t.type_ : Array.isArray(e) ? 1 : tl(e) ? 2 : rl(e) ? 3 : 0;
}
function xc(e, t) {
  return el(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Vy(e, t, r) {
  const n = el(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function WN(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function tl(e) {
  return e instanceof Map;
}
function rl(e) {
  return e instanceof Set;
}
function _n(e) {
  return e.copy_ || e.base_;
}
function wc(e, t) {
  if (tl(e))
    return new Map(e);
  if (rl(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = By(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Qt];
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
    return Object.create(Go(e), n);
  } else {
    const n = Go(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function Ju(e, t = !1) {
  return nl(e) || Yn(e) || !Wr(e) || (el(e) > 1 && (e.set = e.add = e.clear = e.delete = HN), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => Ju(n, !0))), e;
}
function HN() {
  Ft(2);
}
function nl(e) {
  return Object.isFrozen(e);
}
var KN = {};
function Qn(e) {
  const t = KN[e];
  return t || Ft(0, e), t;
}
var Qi;
function zy() {
  return Qi;
}
function YN(e, t) {
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
function wp(e, t) {
  t && (Qn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Rc(e) {
  _c(e), e.drafts_.forEach(QN), e.drafts_ = null;
}
function _c(e) {
  e === Qi && (Qi = e.parent_);
}
function Rp(e) {
  return Qi = YN(Qi, e);
}
function QN(e) {
  const t = e[Qt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function _p(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Qt].modified_ && (Rc(t), Ft(4)), Wr(e) && (e = fa(t, e), t.parent_ || pa(t, e)), t.patches_ && Qn("Patches").generateReplacementPatches_(
    r[Qt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = fa(t, r, []), Rc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== jy ? e : void 0;
}
function fa(e, t, r) {
  if (nl(t))
    return t;
  const n = t[Qt];
  if (!n)
    return da(
      t,
      (o, s) => Np(e, n, t, o, s, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return pa(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let s = o, a = !1;
    n.type_ === 3 && (s = new Set(o), o.clear(), a = !0), da(
      s,
      (l, c) => Np(e, n, o, l, c, r, a)
    ), pa(e, o, !1), r && e.patches_ && Qn("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Np(e, t, r, n, o, s, a) {
  if (process.env.NODE_ENV !== "production" && o === r && Ft(5), Yn(o)) {
    const l = s && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !xc(t.assigned_, n) ? s.concat(n) : void 0, c = fa(e, o, l);
    if (Vy(r, n, c), Yn(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else a && r.add(o);
  if (Wr(o) && !nl(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    fa(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && pa(e, o);
  }
}
function pa(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ju(t, r);
}
function XN(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : zy(),
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
  let o = n, s = Zu;
  r && (o = [n], s = Xi);
  const { revoke: a, proxy: l } = Proxy.revocable(o, s);
  return n.draft_ = l, n.revoke_ = a, l;
}
var Zu = {
  get(e, t) {
    if (t === Qt)
      return e;
    const r = _n(e);
    if (!xc(r, t))
      return JN(e, r, t);
    const n = r[t];
    return e.finalized_ || !Wr(n) ? n : n === Ll(e.base_, t) ? (ql(e), e.copy_[t] = Ac(n, e)) : n;
  },
  has(e, t) {
    return t in _n(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(_n(e));
  },
  set(e, t, r) {
    const n = Uy(_n(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = Ll(_n(e), t), s = o == null ? void 0 : o[Qt];
      if (s && s.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (WN(r, o) && (r !== void 0 || xc(e.base_, t)))
        return !0;
      ql(e), Nc(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ll(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ql(e), Nc(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = _n(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Ft(11);
  },
  getPrototypeOf(e) {
    return Go(e.base_);
  },
  setPrototypeOf() {
    Ft(12);
  }
}, Xi = {};
da(Zu, (e, t) => {
  Xi[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Xi.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Ft(13), Xi.set.call(this, e, t, void 0);
};
Xi.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Ft(14), Zu.set.call(this, e[0], t, r, e[0]);
};
function Ll(e, t) {
  const r = e[Qt];
  return (r ? _n(r) : e)[t];
}
function JN(e, t, r) {
  var o;
  const n = Uy(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Uy(e, t) {
  if (!(t in e))
    return;
  let r = Go(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Go(r);
  }
}
function Nc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Nc(e.parent_));
}
function ql(e) {
  e.copy_ || (e.copy_ = wc(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ZN = class {
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
      typeof r != "function" && Ft(6), n !== void 0 && typeof n != "function" && Ft(7);
      let o;
      if (Wr(t)) {
        const s = Rp(this), a = Ac(t, void 0);
        let l = !0;
        try {
          o = r(a), l = !1;
        } finally {
          l ? Rc(s) : _c(s);
        }
        return wp(s, n), _p(o, s);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === jy && (o = void 0), this.autoFreeze_ && Ju(o, !0), n) {
          const s = [], a = [];
          Qn("Patches").generateReplacementPatches_(t, o, s, a), n(s, a);
        }
        return o;
      } else
        Ft(1, t);
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
    Wr(e) || Ft(8), Yn(e) && (e = eA(e));
    const t = Rp(this), r = Ac(e, void 0);
    return r[Qt].isManual_ = !0, _c(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Qt];
    (!r || !r.isManual_) && Ft(9);
    const { scope_: n } = r;
    return wp(n, t), _p(void 0, n);
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
    const n = Qn("Patches").applyPatches_;
    return Yn(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function Ac(e, t) {
  const r = tl(e) ? Qn("MapSet").proxyMap_(e, t) : rl(e) ? Qn("MapSet").proxySet_(e, t) : XN(e, t);
  return (t ? t.scope_ : zy()).drafts_.push(r), r;
}
function eA(e) {
  return Yn(e) || Ft(10, e), Gy(e);
}
function Gy(e) {
  if (!Wr(e) || nl(e))
    return e;
  const t = e[Qt];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = wc(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = wc(e, !0);
  return da(r, (n, o) => {
    Vy(r, n, Gy(o));
  }), t && (t.finalized_ = !1), r;
}
var Xt = new ZN(), Wy = Xt.produce;
Xt.produceWithPatches.bind(
  Xt
);
Xt.setAutoFreeze.bind(Xt);
Xt.setUseStrictShallowCopy.bind(Xt);
Xt.applyPatches.bind(Xt);
Xt.createDraft.bind(Xt);
Xt.finishDraft.bind(Xt);
function Hy(e) {
  return ({ dispatch: r, getState: n }) => (o) => (s) => typeof s == "function" ? s(r, n, e) : o(s);
}
var tA = Hy(), rA = Hy, nA = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ua : ua.apply(null, arguments);
}, oA = (e) => e && typeof e.match == "function";
function Ap(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? Ye(0) : "prepareAction did not return an object");
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => qy(n) && n.type === e, r;
}
function iA(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  oA(e);
}
function sA(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function aA(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = iA
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(sA(n.type)), r(n));
}
function Ky(e, t) {
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
var Yy = class Ci extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ci.prototype);
  }
  static get [Symbol.species]() {
    return Ci;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ci(...t[0].concat(this)) : new Ci(...t.concat(this));
  }
};
function Pp(e) {
  return Wr(e) ? Wy(e, () => {
  }) : e;
}
function Ip(e, t, r) {
  if (e.has(t)) {
    let o = e.get(t);
    return r.update && (o = r.update(o, t, e), e.set(t, o)), o;
  }
  if (!r.insert) throw new Error(process.env.NODE_ENV === "production" ? Ye(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function lA(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function cA(e, t, r) {
  const n = Qy(e, t, r);
  return {
    detectMutations() {
      return Xy(e, t, n, r);
    }
  };
}
function Qy(e, t = [], r, n = "", o = /* @__PURE__ */ new Set()) {
  const s = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), s.children = {};
    for (const a in r) {
      const l = n ? n + "." + a : a;
      t.length && t.indexOf(l) !== -1 || (s.children[a] = Qy(e, t, r[a], l));
    }
  }
  return s;
}
function Xy(e, t = [], r, n, o = !1, s = "") {
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
    const h = Xy(e, t, r.children[d], n[d], l, f);
    if (h.wasMutated)
      return h;
  }
  return {
    wasMutated: !1
  };
}
function uA(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(l, c, u, d) {
      return JSON.stringify(l, r(c, d), u);
    }, r = function(l, c) {
      let u = [], d = [];
      return c || (c = function(f, h) {
        return u[0] === h ? "[Circular ~]" : "[Circular ~." + d.slice(0, u.indexOf(h)).join(".") + "]";
      }), function(f, h) {
        if (u.length > 0) {
          var b = u.indexOf(this);
          ~b ? u.splice(b + 1) : u.push(this), ~b ? d.splice(b, 1 / 0, f) : d.push(f), ~u.indexOf(h) && (h = c.call(this, f, h));
        } else u.push(h);
        return l == null ? h : l.call(this, f, h);
      };
    }, {
      isImmutable: n = lA,
      ignoredPaths: o,
      warnAfter: s = 32
    } = e;
    const a = cA.bind(null, n, o);
    return ({
      getState: l
    }) => {
      let c = l(), u = a(c), d;
      return (f) => (h) => {
        const b = Ky(s, "ImmutableStateInvariantMiddleware");
        b.measureTime(() => {
          if (c = l(), d = u.detectMutations(), u = a(c), d.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Ye(19) : `A state mutation was detected between dispatches, in the path '${d.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const y = f(h);
        return b.measureTime(() => {
          if (c = l(), d = u.detectMutations(), u = a(c), d.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Ye(20) : `A state mutation was detected inside a dispatch, in the path: ${d.path || ""}. Take a look at the reducer(s) handling the action ${t(h)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), b.warnIfExceeded(), y;
      };
    };
  }
}
function Jy(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || bs(e);
}
function Pc(e, t = "", r = Jy, n, o = [], s) {
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
    if (!(c && o.some((b) => b instanceof RegExp ? b.test(f) : f === b))) {
      if (!r(d))
        return {
          keyPath: f,
          value: d
        };
      if (typeof d == "object" && (a = Pc(d, f, r, n, o, s), a))
        return a;
    }
  }
  return s && Zy(e) && s.add(e), !1;
}
function Zy(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Zy(t))
      return !1;
  return !0;
}
function dA(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = Jy,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: s = [],
      warnAfter: a = 32,
      ignoreState: l = !1,
      ignoreActions: c = !1,
      disableCache: u = !1
    } = e, d = !u && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (f) => (h) => (b) => {
      if (!qy(b))
        return h(b);
      const y = h(b), g = Ky(a, "SerializableStateInvariantMiddleware");
      return !c && !(n.length && n.indexOf(b.type) !== -1) && g.measureTime(() => {
        const m = Pc(b, "", t, r, o, d);
        if (m) {
          const {
            keyPath: T,
            value: x
          } = m;
          console.error(`A non-serializable value was detected in an action, in the path: \`${T}\`. Value:`, x, `
Take a look at the logic that dispatched this action: `, b, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), l || (g.measureTime(() => {
        const m = f.getState(), T = Pc(m, "", t, r, s, d);
        if (T) {
          const {
            keyPath: x,
            value: v
          } = T;
          console.error(`A non-serializable value was detected in the state, in the path: \`${x}\`. Value:`, v, `
Take a look at the reducer(s) handling this action type: ${b.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), g.warnIfExceeded()), y;
    };
  }
}
function $s(e) {
  return typeof e == "boolean";
}
var fA = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: s = !0
  } = t ?? {};
  let a = new Yy();
  if (r && ($s(r) ? a.push(tA) : a.push(rA(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let l = {};
      $s(n) || (l = n), a.unshift(uA(l));
    }
    if (o) {
      let l = {};
      $s(o) || (l = o), a.push(dA(l));
    }
    if (s) {
      let l = {};
      $s(s) || (l = s), a.unshift(aA(l));
    }
  }
  return a;
}, pA = "RTK_autoBatch", eg = (e) => (t) => {
  setTimeout(t, e);
}, hA = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : eg(10), mA = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, s = !1, a = !1;
  const l = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? hA : e.type === "callback" ? e.queueNotification : eg(e.timeout), u = () => {
    a = !1, s && (s = !1, l.forEach((d) => d()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(d) {
      const f = () => o && d(), h = n.subscribe(f);
      return l.add(d), () => {
        h(), l.delete(d);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(d) {
      var f;
      try {
        return o = !((f = d == null ? void 0 : d.meta) != null && f[pA]), s = !o, s && (a || (a = !0, c(u))), n.dispatch(d);
      } finally {
        o = !0;
      }
    }
  });
}, yA = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new Yy(e);
  return n && o.push(mA(typeof n == "object" ? n : void 0)), o;
};
function ed(e) {
  const t = fA(), {
    reducer: r = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: s = void 0,
    enhancers: a = void 0
  } = e || {};
  let l;
  if (typeof r == "function")
    l = r;
  else if (bs(r))
    l = Ly(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? Ye(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ye(2) : "`middleware` field must be a callback");
  let c;
  if (typeof n == "function") {
    if (c = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? Ye(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (process.env.NODE_ENV !== "production" && c.some((y) => typeof y != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Ye(4) : "each middleware provided to configureStore must be a function");
  let u = ua;
  o && (u = nA({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const d = zN(...c), f = yA(d);
  if (process.env.NODE_ENV !== "production" && a && typeof a != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ye(5) : "`enhancers` field must be a callback");
  let h = typeof a == "function" ? a(f) : f();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? Ye(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && h.some((y) => typeof y != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Ye(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !h.includes(d) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const b = u(...h);
  return Fy(l, s, b);
}
function tg(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(s, a) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? Ye(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? Ye(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const l = typeof s == "string" ? s : s.type;
      if (!l)
        throw new Error(process.env.NODE_ENV === "production" ? Ye(28) : "`builder.addCase` cannot be called with an empty action type");
      if (l in t)
        throw new Error(process.env.NODE_ENV === "production" ? Ye(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${l}'`);
      return t[l] = a, o;
    },
    addMatcher(s, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? Ye(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: s,
        reducer: a
      }), o;
    },
    addDefaultCase(s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? Ye(31) : "`builder.addDefaultCase` can only be called once");
      return n = s, o;
    }
  };
  return e(o), [t, r, n];
}
function gA(e) {
  return typeof e == "function";
}
function bA(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? Ye(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = tg(t), s;
  if (gA(e))
    s = () => Pp(e());
  else {
    const l = Pp(e);
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
        if (Yn(d)) {
          const b = f(d, c);
          return b === void 0 ? d : b;
        } else {
          if (Wr(d))
            return Wy(d, (h) => f(h, c));
          {
            const h = f(d, c);
            if (h === void 0) {
              if (d === null)
                return d;
              throw new Error(process.env.NODE_ENV === "production" ? Ye(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return h;
          }
        }
      return d;
    }, l);
  }
  return a.getInitialState = s, a;
}
var vA = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function EA(e, t) {
  return `${e}/${t}`;
}
function SA({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[vA];
  return function(o) {
    const {
      name: s,
      reducerPath: a = s
    } = o;
    if (!s)
      throw new Error(process.env.NODE_ENV === "production" ? Ye(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const l = (typeof o.reducers == "function" ? o.reducers(CA()) : o.reducers) || {}, c = Object.keys(l), u = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, d = {
      addCase(v, O) {
        const S = typeof v == "string" ? v : v.type;
        if (!S)
          throw new Error(process.env.NODE_ENV === "production" ? Ye(12) : "`context.addCase` cannot be called with an empty action type");
        if (S in u.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? Ye(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + S);
        return u.sliceCaseReducersByType[S] = O, d;
      },
      addMatcher(v, O) {
        return u.sliceMatchers.push({
          matcher: v,
          reducer: O
        }), d;
      },
      exposeAction(v, O) {
        return u.actionCreators[v] = O, d;
      },
      exposeCaseReducer(v, O) {
        return u.sliceCaseReducersByName[v] = O, d;
      }
    };
    c.forEach((v) => {
      const O = l[v], S = {
        reducerName: v,
        type: EA(s, v),
        createNotation: typeof o.reducers == "function"
      };
      xA(O) ? RA(S, O, d, t) : OA(S, O, d);
    });
    function f() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? Ye(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [v = {}, O = [], S = void 0] = typeof o.extraReducers == "function" ? tg(o.extraReducers) : [o.extraReducers], R = {
        ...v,
        ...u.sliceCaseReducersByType
      };
      return bA(o.initialState, (w) => {
        for (let A in R)
          w.addCase(A, R[A]);
        for (let A of u.sliceMatchers)
          w.addMatcher(A.matcher, A.reducer);
        for (let A of O)
          w.addMatcher(A.matcher, A.reducer);
        S && w.addDefaultCase(S);
      });
    }
    const h = (v) => v, b = /* @__PURE__ */ new Map();
    let y;
    function g(v, O) {
      return y || (y = f()), y(v, O);
    }
    function m() {
      return y || (y = f()), y.getInitialState();
    }
    function T(v, O = !1) {
      function S(w) {
        let A = w[v];
        if (typeof A > "u") {
          if (O)
            A = m();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? Ye(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return A;
      }
      function R(w = h) {
        const A = Ip(b, O, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Ip(A, w, {
          insert: () => {
            const E = {};
            for (const [P, k] of Object.entries(o.selectors ?? {}))
              E[P] = TA(k, w, m, O);
            return E;
          }
        });
      }
      return {
        reducerPath: v,
        getSelectors: R,
        get selectors() {
          return R(S);
        },
        selectSlice: S
      };
    }
    const x = {
      name: s,
      reducer: g,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: m,
      ...T(a),
      injectInto(v, {
        reducerPath: O,
        ...S
      } = {}) {
        const R = O ?? a;
        return v.inject({
          reducerPath: R,
          reducer: g
        }, S), {
          ...x,
          ...T(R, !0)
        };
      }
    };
    return x;
  };
}
function TA(e, t, r, n) {
  function o(s, ...a) {
    let l = t(s);
    if (typeof l > "u") {
      if (n)
        l = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? Ye(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(l, ...a);
  }
  return o.unwrapped = e, o;
}
var it = /* @__PURE__ */ SA();
function CA() {
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
function OA({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let s, a;
  if ("reducer" in n) {
    if (r && !wA(n))
      throw new Error(process.env.NODE_ENV === "production" ? Ye(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    s = n.reducer, a = n.prepare;
  } else
    s = n;
  o.addCase(e, s).exposeCaseReducer(t, s).exposeAction(t, a ? Ap(e, a) : Ap(e));
}
function xA(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function wA(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function RA({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? Ye(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: s,
    fulfilled: a,
    pending: l,
    rejected: c,
    settled: u,
    options: d
  } = r, f = o(e, s, d);
  n.exposeAction(t, f), a && n.addCase(f.fulfilled, a), l && n.addCase(f.pending, l), c && n.addCase(f.rejected, c), u && n.addMatcher(f.settled, u), n.exposeCaseReducer(t, {
    fulfilled: a || ks,
    pending: l || ks,
    rejected: c || ks,
    settled: u || ks
  });
}
function ks() {
}
function Ye(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const _A = {
  AUTH: "auth",
  LAYOUT: "layout",
  PREVIEW: "preview"
}, NA = {
  isLoggedIn: !1,
  showPassword: !1,
  signinMethod: "email",
  deptId: "",
  loggedInUserInfo: null
}, AA = it({
  name: _A.AUTH,
  initialState: NA,
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
    setDeptId: (e, t) => {
      e.deptId = t.payload;
    },
    checkAuth: (e) => {
      const t = localStorage.getItem("access_token");
      e.isLoggedIn = !!t;
    },
    setLoggedInUserInfo: (e, t) => {
      e.loggedInUserInfo = t.payload;
    }
  }
}), PA = AA.reducer, IA = {
  mobileOpen: !1,
  isClosing: !1,
  pageTitle: "Dashboard"
}, DA = it({
  name: "layout",
  initialState: IA,
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
}), $A = DA.reducer, kA = {
  preview: !1
}, MA = it({
  name: "preview",
  initialState: kA,
  reducers: {
    setPreview: (e, t) => {
      e.preview = t.payload;
    }
  }
}), FA = MA.reducer, LA = {
  auth: PA,
  layout: $A,
  preview: FA
}, qA = {
  rfpa: [],
  selectedRFPA: void 0,
  previewRFPA: void 0
}, jA = it({
  name: "rfpaData",
  initialState: qA,
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
}), rg = jA.reducer, BA = {
  dealSlip: [],
  selectedDealSlip: void 0
}, VA = it({
  name: "dealSlipData",
  initialState: BA,
  reducers: {
    setDealSlipData: (e, t) => {
      e.dealSlip = t.payload;
    },
    setSelectedDealSlip: (e, t) => {
      e.selectedDealSlip = t.payload;
    }
  }
}), ng = VA.reducer, zA = {
  grn: [],
  selectedGRN: void 0,
  previewGRN: void 0,
  subTotalAmt: 0,
  totalAmt: 0,
  totAmtWords: ""
}, UA = it({
  name: "grnData",
  initialState: zA,
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
}), og = UA.reducer, GA = {
  mcVouchers: [],
  selectedMCVoucher: void 0,
  previewMCVoucher: void 0
}, WA = it({
  name: "mc_voucher",
  initialState: GA,
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
}), ig = WA.reducer, HA = {
  lpVouchers: [],
  selectedLPVoucher: void 0,
  previewLPVoucher: void 0
}, KA = it({
  name: "lp_voucher",
  initialState: HA,
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
}), sg = KA.reducer, YA = {
  pmpVouchers: [],
  selectedPMPVoucher: void 0,
  previewPMPVoucher: void 0
}, QA = it({
  name: "pmp_voucher",
  initialState: YA,
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
}), ag = QA.reducer, XA = {
  tpVouchers: [],
  selectedTPVoucher: void 0,
  previewTPVoucher: void 0
}, JA = it({
  name: "tp_voucher",
  initialState: XA,
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
}), lg = JA.reducer, ZA = {
  dcs: [],
  selectedDC: void 0,
  previewDC: void 0
}, eP = it({
  name: "delivery_challan",
  initialState: ZA,
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
}), cg = eP.reducer, tP = {
  paymentReq: [],
  selectedPaymentReq: void 0,
  previewPaymentReq: void 0
}, rP = it({
  name: "payment_request",
  initialState: tP,
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
}), ug = rP.reducer;
ed({
  reducer: {
    rfpaData: rg,
    dealSlipData: ng,
    grnData: og,
    mc_voucher: ig,
    lp_voucher: sg,
    tp_voucher: lg,
    pmp_voucher: ag,
    delivery_challan: cg,
    payment_request: ug
  }
});
function no(e) {
  this._maxSize = e, this.clear();
}
no.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
no.prototype.get = function(e) {
  return this._values[e];
};
no.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var nP = /[^.^\]^[]+|(?=\[\]|\.\.)/g, dg = /^\d+$/, oP = /^\d/, iP = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, sP = /^\s*(['"]?)(.*?)(\1)\s*$/, td = 512, Dp = new no(td), $p = new no(td), kp = new no(td), zn = {
  Cache: no,
  split: Ic,
  normalizePath: jl,
  setter: function(e) {
    var t = jl(e);
    return $p.get(e) || $p.set(e, function(n, o) {
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
    var r = jl(e);
    return kp.get(e) || kp.set(e, function(o) {
      for (var s = 0, a = r.length; s < a; )
        if (o != null || !t) o = o[r[s++]];
        else return;
      return o;
    });
  },
  join: function(e) {
    return e.reduce(function(t, r) {
      return t + (rd(r) || dg.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    aP(Array.isArray(e) ? e : Ic(e), t, r);
  }
};
function jl(e) {
  return Dp.get(e) || Dp.set(
    e,
    Ic(e).map(function(t) {
      return t.replace(sP, "$2");
    })
  );
}
function Ic(e) {
  return e.match(nP) || [""];
}
function aP(e, t, r) {
  var n = e.length, o, s, a, l;
  for (s = 0; s < n; s++)
    o = e[s], o && (uP(o) && (o = '"' + o + '"'), l = rd(o), a = !l && /^\d+$/.test(o), t.call(r, o, l, a, s, e));
}
function rd(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function lP(e) {
  return e.match(oP) && !e.match(dg);
}
function cP(e) {
  return iP.test(e);
}
function uP(e) {
  return !rd(e) && (lP(e) || cP(e));
}
const dP = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, ol = (e) => e.match(dP) || [], il = (e) => e[0].toUpperCase() + e.slice(1), nd = (e, t) => ol(e).join(t).toLowerCase(), fg = (e) => ol(e).reduce(
  (t, r) => `${t}${t ? r[0].toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()}`,
  ""
), fP = (e) => il(fg(e)), pP = (e) => nd(e, "_"), hP = (e) => nd(e, "-"), mP = (e) => il(nd(e, " ")), yP = (e) => ol(e).map(il).join(" ");
var Bl = {
  words: ol,
  upperFirst: il,
  camelCase: fg,
  pascalCase: fP,
  snakeCase: pP,
  kebabCase: hP,
  sentenceCase: mP,
  titleCase: yP
}, od = { exports: {} };
od.exports = function(e) {
  return pg(gP(e), e);
};
od.exports.array = pg;
function pg(e, t) {
  var r = e.length, n = new Array(r), o = {}, s = r, a = bP(t), l = vP(e);
  for (t.forEach(function(u) {
    if (!l.has(u[0]) || !l.has(u[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    o[s] || c(e[s], s, /* @__PURE__ */ new Set());
  return n;
  function c(u, d, f) {
    if (f.has(u)) {
      var h;
      try {
        h = ", node was:" + JSON.stringify(u);
      } catch {
        h = "";
      }
      throw new Error("Cyclic dependency" + h);
    }
    if (!l.has(u))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(u));
    if (!o[d]) {
      o[d] = !0;
      var b = a.get(u) || /* @__PURE__ */ new Set();
      if (b = Array.from(b), d = b.length) {
        f.add(u);
        do {
          var y = b[--d];
          c(y, l.get(y), f);
        } while (d);
        f.delete(u);
      }
      n[--r] = u;
    }
  }
}
function gP(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var o = e[r];
    t.add(o[0]), t.add(o[1]);
  }
  return Array.from(t);
}
function bP(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var o = e[r];
    t.has(o[0]) || t.set(o[0], /* @__PURE__ */ new Set()), t.has(o[1]) || t.set(o[1], /* @__PURE__ */ new Set()), t.get(o[0]).add(o[1]);
  }
  return t;
}
function vP(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var EP = od.exports;
const SP = /* @__PURE__ */ xa(EP), TP = Object.prototype.toString, CP = Error.prototype.toString, OP = RegExp.prototype.toString, xP = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", wP = /^Symbol\((.*)\)(.*)$/;
function RP(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Mp(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return RP(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return xP.call(e).replace(wP, "Symbol($1)");
  const n = TP.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + CP.call(e) + "]" : n === "RegExp" ? OP.call(e) : null;
}
function Br(e, t) {
  let r = Mp(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, o) {
    let s = Mp(this[n], t);
    return s !== null ? s : o;
  }, 2);
}
function hg(e) {
  return e == null ? [] : [].concat(e);
}
let mg, yg, gg, _P = /\$\{\s*(\w+)\s*\}/g;
mg = Symbol.toStringTag;
class Fp {
  constructor(t, r, n, o) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[mg] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = o, this.errors = [], this.inner = [], hg(t).forEach((s) => {
      if (kt.isError(s)) {
        this.errors.push(...s.errors);
        const a = s.inner.length ? s.inner : [s];
        this.inner.push(...a);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
yg = Symbol.hasInstance;
gg = Symbol.toStringTag;
class kt extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Object.assign({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(_P, (o, s) => Br(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, o, s) {
    const a = new Fp(t, r, n, o);
    if (s)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[gg] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, kt);
  }
  static [yg](t) {
    return Fp[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let Er = {
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
    const o = n != null && n !== r ? ` (cast from the value \`${Br(n, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Br(r, !0)}\`` + o : `${e} must match the configured type. The validated value was: \`${Br(r, !0)}\`` + o;
  }
}, Pt = {
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
}, tn = {
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
}, $c = {
  isValue: "${path} field must be ${value}"
}, kc = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Hs = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, NP = {
  notType: (e) => {
    const {
      path: t,
      value: r,
      spec: n
    } = e, o = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < o) return `${t} tuple value has too few items, expected a length of ${o} but got ${r.length} for value: \`${Br(r, !0)}\``;
      if (r.length > o) return `${t} tuple value has too many items, expected a length of ${o} but got ${r.length} for value: \`${Br(r, !0)}\``;
    }
    return kt.formatError(Er.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Er,
  string: Pt,
  number: tn,
  date: Dc,
  object: kc,
  array: Hs,
  boolean: $c,
  tuple: NP
});
const sl = (e) => e && e.__isYupSchema__;
class ha {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: o,
      otherwise: s
    } = r, a = typeof n == "function" ? n : (...l) => l.every((c) => c === n);
    return new ha(t, (l, c) => {
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
    if (!sl(o)) throw new TypeError("conditions must return a schema object");
    return o.resolve(r);
  }
}
const Ms = {
  context: "$",
  value: "."
};
class oo {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Ms.context, this.isValue = this.key[0] === Ms.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Ms.context : this.isValue ? Ms.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && zn.getter(this.path, !0), this.map = r.map;
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
oo.prototype.__isYupRef = !0;
const pr = (e) => e == null;
function ho(e) {
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
      message: h,
      skipAbsent: b
    } = e;
    let {
      parent: y,
      context: g,
      abortEarly: m = a.spec.abortEarly,
      disableStackTrace: T = a.spec.disableStackTrace
    } = o;
    function x(k) {
      return oo.isRef(k) ? k.getValue(r, y, g) : k;
    }
    function v(k = {}) {
      const q = Object.assign({
        value: r,
        originalValue: s,
        label: a.spec.label,
        path: k.path || n,
        spec: a.spec,
        disableStackTrace: k.disableStackTrace || T
      }, f, k.params);
      for (const z of Object.keys(q)) q[z] = x(q[z]);
      const G = new kt(kt.formatError(k.message || h, q), r, q.path, k.type || u, q.disableStackTrace);
      return G.params = q, G;
    }
    const O = m ? l : c;
    let S = {
      path: n,
      parent: y,
      type: u,
      from: o.from,
      createError: v,
      resolve: x,
      options: o,
      originalValue: s,
      schema: a
    };
    const R = (k) => {
      kt.isError(k) ? O(k) : k ? c(null) : O(v());
    }, w = (k) => {
      kt.isError(k) ? O(k) : l(k);
    };
    if (b && pr(r))
      return R(!0);
    let E;
    try {
      var P;
      if (E = d.call(S, r, S), typeof ((P = E) == null ? void 0 : P.then) == "function") {
        if (o.sync)
          throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(E).then(R, w);
      }
    } catch (k) {
      w(k);
      return;
    }
    R(E);
  }
  return t.OPTIONS = e, t;
}
function AP(e, t, r, n = r) {
  let o, s, a;
  return t ? (zn.forEach(t, (l, c, u) => {
    let d = c ? l.slice(1, l.length - 1) : l;
    e = e.resolve({
      context: n,
      parent: o,
      value: r
    });
    let f = e.type === "tuple", h = u ? parseInt(d, 10) : 0;
    if (e.innerType || f) {
      if (f && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (r && h >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      o = r, r = r && r[h], e = f ? e.spec.types[h] : e.innerType;
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
class ma extends Set {
  describe() {
    const t = [];
    for (const r of this.values())
      t.push(oo.isRef(r) ? r.describe() : r);
    return t;
  }
  resolveAll(t) {
    let r = [];
    for (const n of this.values())
      r.push(t(n));
    return r;
  }
  clone() {
    return new ma(this.values());
  }
  merge(t, r) {
    const n = this.clone();
    return t.forEach((o) => n.add(o)), r.forEach((o) => n.delete(o)), n;
  }
}
function bo(e, t = /* @__PURE__ */ new Map()) {
  if (sl(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date)
    r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp)
    r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let n = 0; n < e.length; n++) r[n] = bo(e[n], t);
  } else if (e instanceof Map) {
    r = /* @__PURE__ */ new Map(), t.set(e, r);
    for (const [n, o] of e.entries()) r.set(n, bo(o, t));
  } else if (e instanceof Set) {
    r = /* @__PURE__ */ new Set(), t.set(e, r);
    for (const n of e) r.add(bo(n, t));
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [n, o] of Object.entries(e)) r[n] = bo(o, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return r;
}
class zt {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new ma(), this._blacklist = new ma(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(Er.notType);
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
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = bo(Object.assign({}, this.spec, t)), r;
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
      if (o && pr(s))
        return s;
      let a = Br(t), l = Br(s);
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
    } = t, d = (g) => {
      o || (o = !0, r(g, a));
    }, f = (g) => {
      o || (o = !0, n(g, a));
    }, h = s.length, b = [];
    if (!h) return f([]);
    let y = {
      value: a,
      originalValue: l,
      path: c,
      options: u,
      schema: this
    };
    for (let g = 0; g < s.length; g++) {
      const m = s[g];
      m(y, d, function(x) {
        x && (Array.isArray(x) ? b.push(...x) : b.push(x)), --h <= 0 && f(b);
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
    return (f, h, b) => this.resolve(d)._validate(u, d, h, b);
  }
  validate(t, r) {
    var n;
    let o = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r == null ? void 0 : r.disableStackTrace) != null ? n : o.spec.disableStackTrace;
    return new Promise((a, l) => o._validate(t, r, (c, u) => {
      kt.isError(c) && (c.value = u), l(c);
    }, (c, u) => {
      c.length ? l(new kt(c, u, void 0, void 0, s)) : a(u);
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
      throw kt.isError(l) && (l.value = c), l;
    }, (l, c) => {
      if (l.length) throw new kt(l, t, void 0, void 0, a);
      s = c;
    }), s;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (kt.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (kt.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : bo(r);
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
    return n.internalTests.nullable = ho({
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
    return n.internalTests.optionality = ho({
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
  defined(t = Er.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = Er.notNull) {
    return this.nullability(!1, t);
  }
  required(t = Er.required) {
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
    }, r.message === void 0 && (r.message = Er.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), o = ho(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((a) => !(a.OPTIONS.name === r.name && (s || a.OPTIONS.test === o.OPTIONS.test))), n.tests.push(o), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), o = hg(t).map((s) => new oo(s));
    return o.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new ha(o, r) : ha.fromOptions(o, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r.internalTests.typeError = ho({
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
  oneOf(t, r = Er.oneOf) {
    let n = this.clone();
    return t.forEach((o) => {
      n._whitelist.add(o), n._blacklist.delete(o);
    }), n.internalTests.whiteList = ho({
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
  notOneOf(t, r = Er.notOneOf) {
    let n = this.clone();
    return t.forEach((o) => {
      n._blacklist.add(o), n._whitelist.delete(o);
    }), n.internalTests.blacklist = ho({
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
zt.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) zt.prototype[`${e}At`] = function(t, r, n = {}) {
  const {
    parent: o,
    parentPath: s,
    schema: a
  } = AP(this, t, r, n.context);
  return a[e](o && o[s], Object.assign({}, n, {
    parent: o,
    path: t
  }));
};
for (const e of ["equals", "is"]) zt.prototype[e] = zt.prototype.oneOf;
for (const e of ["not", "nope"]) zt.prototype[e] = zt.prototype.notOneOf;
const PP = () => !0;
function Co(e) {
  return new bg(e);
}
class bg extends zt {
  constructor(t) {
    super(typeof t == "function" ? {
      type: "mixed",
      check: t
    } : Object.assign({
      type: "mixed",
      check: PP
    }, t));
  }
}
Co.prototype = bg.prototype;
function Oo() {
  return new vg();
}
class vg extends zt {
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
  isTrue(t = $c.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(r) {
        return pr(r) || r === !0;
      }
    });
  }
  isFalse(t = $c.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(r) {
        return pr(r) || r === !1;
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
Oo.prototype = vg.prototype;
const IP = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function DP(e) {
  const t = Mc(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function Mc(e) {
  var t, r;
  const n = IP.exec(e);
  return n ? {
    year: Mr(n[1]),
    month: Mr(n[2], 1) - 1,
    day: Mr(n[3], 1),
    hour: Mr(n[4]),
    minute: Mr(n[5]),
    second: Mr(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Mr(n[7].substring(0, 3))
    ) : 0,
    precision: (t = (r = n[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: Mr(n[10]),
    minuteOffset: Mr(n[11])
  } : null;
}
function Mr(e, t = 0) {
  return Number(e) || t;
}
let $P = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), kP = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), MP = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, FP = "^\\d{4}-\\d{2}-\\d{2}", LP = "\\d{2}:\\d{2}:\\d{2}", qP = "(([+-]\\d{2}(:?\\d{2})?)|Z)", jP = new RegExp(`${FP}T${LP}(\\.\\d+)?${qP}$`), BP = (e) => pr(e) || e === e.trim(), VP = {}.toString();
function _() {
  return new Eg();
}
class Eg extends zt {
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
        return o === VP ? t : o;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((r) => r.test({
      message: t || Er.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t));
  }
  length(t, r = Pt.length) {
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
  min(t, r = Pt.min) {
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
  max(t, r = Pt.max) {
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
      message: o || Pt.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (a) => a === "" && n || a.search(t) !== -1
    });
  }
  email(t = Pt.email) {
    return this.matches($P, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = Pt.url) {
    return this.matches(kP, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = Pt.uuid) {
    return this.matches(MP, {
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
    } = t : r = t), this.matches(jP, {
      name: "datetime",
      message: r || Pt.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || Pt.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || n) return !0;
        const a = Mc(s);
        return a ? !!a.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || Pt.datetime_precision,
      params: {
        precision: o
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || o == null) return !0;
        const a = Mc(s);
        return a ? a.precision === o : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = Pt.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: BP
    });
  }
  lowercase(t = Pt.lowercase) {
    return this.transform((r) => pr(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => pr(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = Pt.uppercase) {
    return this.transform((r) => pr(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => pr(r) || r === r.toUpperCase()
    });
  }
}
_.prototype = Eg.prototype;
let zP = (e) => e != +e;
function Ue() {
  return new Sg();
}
class Sg extends zt {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !zP(t);
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
  min(t, r = tn.min) {
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
  max(t, r = tn.max) {
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
  lessThan(t, r = tn.lessThan) {
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
  moreThan(t, r = tn.moreThan) {
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
  positive(t = tn.positive) {
    return this.moreThan(0, t);
  }
  negative(t = tn.negative) {
    return this.lessThan(0, t);
  }
  integer(t = tn.integer) {
    return this.test({
      name: "integer",
      message: t,
      skipAbsent: !0,
      test: (r) => Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((t) => pr(t) ? t : t | 0);
  }
  round(t) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round", t === "trunc") return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((o) => pr(o) ? o : Math[t](o));
  }
}
Ue.prototype = Sg.prototype;
let Tg = /* @__PURE__ */ new Date(""), UP = (e) => Object.prototype.toString.call(e) === "[object Date]";
function Vr() {
  return new vs();
}
class vs extends zt {
  constructor() {
    super({
      type: "date",
      check(t) {
        return UP(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => !n.spec.coerce || n.isType(t) || t === null ? t : (t = DP(t), isNaN(t) ? vs.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, r) {
    let n;
    if (oo.isRef(t))
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
vs.INVALID_DATE = Tg;
Vr.prototype = vs.prototype;
Vr.INVALID_DATE = Tg;
function GP(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), o = new Set(t.map(([a, l]) => `${a}-${l}`));
  function s(a, l) {
    let c = zn.split(a)[0];
    n.add(c), o.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const a of Object.keys(e)) {
    let l = e[a];
    n.add(a), oo.isRef(l) && l.isSibling ? s(l.path, a) : sl(l) && "deps" in l && l.deps.forEach((c) => s(c, a));
  }
  return SP.array(Array.from(n), r).reverse();
}
function Lp(e, t) {
  let r = 1 / 0;
  return e.some((n, o) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = o, !0;
  }), r;
}
function Cg(e) {
  return (t, r) => Lp(e, t) - Lp(e, r);
}
const Og = (e, t, r) => {
  if (typeof e != "string")
    return e;
  let n = e;
  try {
    n = JSON.parse(e);
  } catch {
  }
  return r.isType(n) ? n : e;
};
function Ks(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, n] of Object.entries(e.fields))
      t[r] = Ks(n);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = Ks(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(Ks)
  }) : "optional" in e ? e.optional() : e;
}
const WP = (e, t) => {
  const r = [...zn.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let n = r.pop(), o = zn.getter(zn.join(r), !0)(e);
  return !!(o && n in o);
};
let qp = (e) => Object.prototype.toString.call(e) === "[object Object]";
function HP(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const KP = Cg([]);
function Ae(e) {
  return new xg(e);
}
class xg extends zt {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return qp(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = KP, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
      let h = s[f], b = f in o;
      if (h) {
        let y, g = o[f];
        u.path = (r.path ? `${r.path}.` : "") + f, h = h.resolve({
          value: g,
          context: r.context,
          parent: c
        });
        let m = h instanceof zt ? h.spec : void 0, T = m == null ? void 0 : m.strict;
        if (m != null && m.strip) {
          d = d || f in o;
          continue;
        }
        y = !r.__validating || !T ? (
          // TODO: use _cast, this is double resolving
          h.cast(o[f], u)
        ) : o[f], y !== void 0 && (c[f] = y);
      } else b && !a && (c[f] = o[f]);
      (b !== f in c || c[f] !== o[f]) && (d = !0);
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
      if (!l || !qp(u)) {
        o(c, u);
        return;
      }
      a = a || u;
      let d = [];
      for (let f of this._nodes) {
        let h = this.fields[f];
        !h || oo.isRef(h) || d.push(h.asNestedTest({
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
    return n.fields = t, n._nodes = GP(t, r), n._sortErrors = Cg(Object.keys(t)), r && (n._excludedEdges = r), n;
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
    return Ks(this);
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
    let o = zn.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let a = s;
      return WP(s, t) && (a = Object.assign({}, s), n || delete a[t], a[r] = o(s)), a;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Og);
  }
  noUnknown(t = !0, r = kc.noUnknown) {
    typeof t != "boolean" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(o) {
        if (o == null) return !0;
        const s = HP(this.schema, o);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = kc.noUnknown) {
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
    return this.transformKeys(Bl.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Bl.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Bl.snakeCase(t).toUpperCase());
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
Ae.prototype = xg.prototype;
function io(e) {
  return new wg(e);
}
class wg extends zt {
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
      for (let b = 0; b < u.length; b++) {
        var h;
        f[b] = a.asNestedTest({
          options: r,
          index: b,
          parent: u,
          parentPath: r.path,
          originalParent: (h = r.originalValue) != null ? h : t
        });
      }
      this.runTests({
        value: u,
        tests: f,
        originalValue: (d = r.originalValue) != null ? d : t,
        options: r
      }, n, (b) => o(b.concat(c), u));
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Og);
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
    if (!sl(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + Br(t));
    return r.innerType = t, r.spec = Object.assign({}, r.spec, {
      types: t
    }), r;
  }
  length(t, r = Hs.length) {
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
    return r = r || Hs.min, this.test({
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
    return r = r || Hs.max, this.test({
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
io.prototype = wg.prototype;
const YP = /^[6-9]\d{9}$/;
_().matches(YP, "Please enter a valid 10-digit contact number").required("Contact number is required");
Ae().shape({
  address1: _().required("Address Line 1 is required"),
  address2: _(),
  location: _().required("Location is required"),
  city: _().required("City is required"),
  state: _().required("State is required"),
  pincode: _().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
var ni = class {
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
}, Wo = typeof window > "u" || "Deno" in globalThis;
function tr() {
}
function QP(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fc(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Rg(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function xo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jp(e, t) {
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
      if (t.queryHash !== id(a, t.options))
        return !1;
    } else if (!Ji(t.queryKey, a))
      return !1;
  }
  if (r !== "all") {
    const c = t.isActive();
    if (r === "active" && !c || r === "inactive" && c)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || s && !s(t));
}
function Bp(e, t) {
  const { exact: r, status: n, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (Xn(t.options.mutationKey) !== Xn(s))
        return !1;
    } else if (!Ji(t.options.mutationKey, s))
      return !1;
  }
  return !(n && t.state.status !== n || o && !o(t));
}
function id(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Xn)(e);
}
function Xn(e) {
  return JSON.stringify(
    e,
    (t, r) => qc(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r
  );
}
function Ji(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !Ji(e[r], t[r])) : !1;
}
function Lc(e, t) {
  if (e === t)
    return e;
  const r = Vp(e) && Vp(t);
  if (r || qc(e) && qc(t)) {
    const n = r ? e : Object.keys(e), o = n.length, s = r ? t : Object.keys(t), a = s.length, l = r ? [] : {};
    let c = 0;
    for (let u = 0; u < a; u++) {
      const d = r ? u : s[u];
      (!r && n.includes(d) || r) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0, c++) : (l[d] = Lc(e[d], t[d]), l[d] === e[d] && e[d] !== void 0 && c++);
    }
    return o === a && c === o ? e : l;
  }
  return t;
}
function ya(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Vp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function qc(e) {
  if (!zp(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!zp(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function zp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function XP(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function jc(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Lc(e, t);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        );
      }
    return Lc(e, t);
  }
  return t;
}
function JP(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function ZP(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Bc = Symbol();
function _g(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === Bc && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Bc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var $n, on, wo, fh, eI = (fh = class extends ni {
  constructor() {
    super();
    ye(this, $n);
    ye(this, on);
    ye(this, wo);
    ie(this, wo, (t) => {
      if (!Wo && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    N(this, on) || this.setEventListener(N(this, wo));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = N(this, on)) == null || t.call(this), ie(this, on, void 0));
  }
  setEventListener(t) {
    var r;
    ie(this, wo, t), (r = N(this, on)) == null || r.call(this), ie(this, on, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    N(this, $n) !== t && (ie(this, $n, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof N(this, $n) == "boolean" ? N(this, $n) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, $n = new WeakMap(), on = new WeakMap(), wo = new WeakMap(), fh), sd = new eI(), Ro, sn, _o, ph, tI = (ph = class extends ni {
  constructor() {
    super();
    ye(this, Ro, !0);
    ye(this, sn);
    ye(this, _o);
    ie(this, _o, (t) => {
      if (!Wo && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    N(this, sn) || this.setEventListener(N(this, _o));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = N(this, sn)) == null || t.call(this), ie(this, sn, void 0));
  }
  setEventListener(t) {
    var r;
    ie(this, _o, t), (r = N(this, sn)) == null || r.call(this), ie(this, sn, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    N(this, Ro) !== t && (ie(this, Ro, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return N(this, Ro);
  }
}, Ro = new WeakMap(), sn = new WeakMap(), _o = new WeakMap(), ph), ga = new tI();
function rI(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ng(e) {
  return (e ?? "online") === "online" ? ga.isOnline() : !0;
}
var Ag = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Vl(e) {
  return e instanceof Ag;
}
function Pg(e) {
  let t = !1, r = 0, n = !1, o, s, a;
  const l = new Promise((T, x) => {
    s = T, a = x;
  }), c = (T) => {
    var x;
    n || (y(new Ag(T)), (x = e.abort) == null || x.call(e));
  }, u = () => {
    t = !0;
  }, d = () => {
    t = !1;
  }, f = () => sd.isFocused() && (e.networkMode === "always" || ga.isOnline()) && e.canRun(), h = () => Ng(e.networkMode) && e.canRun(), b = (T) => {
    var x;
    n || (n = !0, (x = e.onSuccess) == null || x.call(e, T), o == null || o(), s(T));
  }, y = (T) => {
    var x;
    n || (n = !0, (x = e.onError) == null || x.call(e, T), o == null || o(), a(T));
  }, g = () => new Promise((T) => {
    var x;
    o = (v) => {
      (n || f()) && T(v);
    }, (x = e.onPause) == null || x.call(e);
  }).then(() => {
    var T;
    o = void 0, n || (T = e.onContinue) == null || T.call(e);
  }), m = () => {
    if (n)
      return;
    let T;
    const x = r === 0 ? e.initialPromise : void 0;
    try {
      T = x ?? e.fn();
    } catch (v) {
      T = Promise.reject(v);
    }
    Promise.resolve(T).then(b).catch((v) => {
      var A;
      if (n)
        return;
      const O = e.retry ?? (Wo ? 0 : 3), S = e.retryDelay ?? rI, R = typeof S == "function" ? S(r, v) : S, w = O === !0 || typeof O == "number" && r < O || typeof O == "function" && O(r, v);
      if (t || !w) {
        y(v);
        return;
      }
      r++, (A = e.onFail) == null || A.call(e, r, v), XP(R).then(() => f() ? void 0 : g()).then(() => {
        t ? y(v) : m();
      });
    });
  };
  return {
    promise: l,
    cancel: c,
    continue: () => (o == null || o(), l),
    cancelRetry: u,
    continueRetry: d,
    canStart: h,
    start: () => (h() ? m() : g().then(m), l)
  };
}
function nI() {
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
var gt = nI(), kn, hh, Ig = (hh = class {
  constructor() {
    ye(this, kn);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Fc(this.gcTime) && ie(this, kn, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Wo ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    N(this, kn) && (clearTimeout(N(this, kn)), ie(this, kn, void 0));
  }
}, kn = new WeakMap(), hh), No, Ao, er, wt, es, Mn, dr, Fr, mh, oI = (mh = class extends Ig {
  constructor(t) {
    super();
    ye(this, dr);
    ye(this, No);
    ye(this, Ao);
    ye(this, er);
    ye(this, wt);
    ye(this, es);
    ye(this, Mn);
    ie(this, Mn, !1), ie(this, es, t.defaultOptions), this.setOptions(t.options), this.observers = [], ie(this, er, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, ie(this, No, iI(this.options)), this.state = t.state ?? N(this, No), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = N(this, wt)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...N(this, es), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && N(this, er).remove(this);
  }
  setData(t, r) {
    const n = jc(this.state.data, t, this.options);
    return Oe(this, dr, Fr).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    Oe(this, dr, Fr).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n, o;
    const r = (n = N(this, wt)) == null ? void 0 : n.promise;
    return (o = N(this, wt)) == null || o.cancel(t), r ? r.then(tr).catch(tr) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(N(this, No));
  }
  isActive() {
    return this.observers.some(
      (t) => fr(t.options.enabled, this) !== !1
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
    return this.state.isInvalidated || this.state.data === void 0 || !Rg(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = N(this, wt)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = this.observers.find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = N(this, wt)) == null || r.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), N(this, er).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (N(this, wt) && (N(this, Mn) ? N(this, wt).cancel({ revert: !0 }) : N(this, wt).cancelRetry()), this.scheduleGc()), N(this, er).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || Oe(this, dr, Fr).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var c, u, d;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (N(this, wt))
        return N(this, wt).continueRetry(), N(this, wt).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const f = this.observers.find((h) => h.options.queryFn);
      f && this.setOptions(f.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), o = (f) => {
      Object.defineProperty(f, "signal", {
        enumerable: !0,
        get: () => (ie(this, Mn, !0), n.signal)
      });
    }, s = () => {
      const f = _g(this.options, r), h = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(h), ie(this, Mn, !1), this.options.persister ? this.options.persister(
        f,
        h,
        this
      ) : f(h);
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
    ), ie(this, Ao, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = a.fetchOptions) == null ? void 0 : u.meta)) && Oe(this, dr, Fr).call(this, { type: "fetch", meta: (d = a.fetchOptions) == null ? void 0 : d.meta });
    const l = (f) => {
      var h, b, y, g;
      Vl(f) && f.silent || Oe(this, dr, Fr).call(this, {
        type: "error",
        error: f
      }), Vl(f) || ((b = (h = N(this, er).config).onError) == null || b.call(
        h,
        f,
        this
      ), (g = (y = N(this, er).config).onSettled) == null || g.call(
        y,
        this.state.data,
        f,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return ie(this, wt, Pg({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: a.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (f) => {
        var h, b, y, g;
        if (f === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), l(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(f);
        } catch (m) {
          l(m);
          return;
        }
        (b = (h = N(this, er).config).onSuccess) == null || b.call(h, f, this), (g = (y = N(this, er).config).onSettled) == null || g.call(
          y,
          f,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: l,
      onFail: (f, h) => {
        Oe(this, dr, Fr).call(this, { type: "failed", failureCount: f, error: h });
      },
      onPause: () => {
        Oe(this, dr, Fr).call(this, { type: "pause" });
      },
      onContinue: () => {
        Oe(this, dr, Fr).call(this, { type: "continue" });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode,
      canRun: () => !0
    })), N(this, wt).start();
  }
}, No = new WeakMap(), Ao = new WeakMap(), er = new WeakMap(), wt = new WeakMap(), es = new WeakMap(), Mn = new WeakMap(), dr = new WeakSet(), Fr = function(t) {
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
          ...Dg(n.data, this.options),
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
        return Vl(o) && o.revert && N(this, Ao) ? { ...N(this, Ao), fetchStatus: "idle" } : {
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
  this.state = r(this.state), gt.batch(() => {
    this.observers.forEach((n) => {
      n.onQueryUpdate();
    }), N(this, er).notify({ query: this, type: "updated", action: t });
  });
}, mh);
function Dg(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ng(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function iI(e) {
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
var Sr, yh, sI = (yh = class extends ni {
  constructor(t = {}) {
    super();
    ye(this, Sr);
    this.config = t, ie(this, Sr, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const o = r.queryKey, s = r.queryHash ?? id(o, r);
    let a = this.get(s);
    return a || (a = new oI({
      cache: this,
      queryKey: o,
      queryHash: s,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(o)
    }), this.add(a)), a;
  }
  add(t) {
    N(this, Sr).has(t.queryHash) || (N(this, Sr).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = N(this, Sr).get(t.queryHash);
    r && (t.destroy(), r === t && N(this, Sr).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    gt.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return N(this, Sr).get(t);
  }
  getAll() {
    return [...N(this, Sr).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => jp(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => jp(t, n)) : r;
  }
  notify(t) {
    gt.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    gt.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    gt.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, Sr = new WeakMap(), yh), Tr, Rt, Fn, Cr, rn, gh, aI = (gh = class extends Ig {
  constructor(t) {
    super();
    ye(this, Cr);
    ye(this, Tr);
    ye(this, Rt);
    ye(this, Fn);
    this.mutationId = t.mutationId, ie(this, Rt, t.mutationCache), ie(this, Tr, []), this.state = t.state || $g(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    N(this, Tr).includes(t) || (N(this, Tr).push(t), this.clearGcTimeout(), N(this, Rt).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    ie(this, Tr, N(this, Tr).filter((r) => r !== t)), this.scheduleGc(), N(this, Rt).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    N(this, Tr).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, Rt).remove(this));
  }
  continue() {
    var t;
    return ((t = N(this, Fn)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var o, s, a, l, c, u, d, f, h, b, y, g, m, T, x, v, O, S, R, w;
    ie(this, Fn, Pg({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (A, E) => {
        Oe(this, Cr, rn).call(this, { type: "failed", failureCount: A, error: E });
      },
      onPause: () => {
        Oe(this, Cr, rn).call(this, { type: "pause" });
      },
      onContinue: () => {
        Oe(this, Cr, rn).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => N(this, Rt).canRun(this)
    }));
    const r = this.state.status === "pending", n = !N(this, Fn).canStart();
    try {
      if (!r) {
        Oe(this, Cr, rn).call(this, { type: "pending", variables: t, isPaused: n }), await ((s = (o = N(this, Rt).config).onMutate) == null ? void 0 : s.call(
          o,
          t,
          this
        ));
        const E = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
        E !== this.state.context && Oe(this, Cr, rn).call(this, {
          type: "pending",
          context: E,
          variables: t,
          isPaused: n
        });
      }
      const A = await N(this, Fn).start();
      return await ((u = (c = N(this, Rt).config).onSuccess) == null ? void 0 : u.call(
        c,
        A,
        t,
        this.state.context,
        this
      )), await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, A, t, this.state.context)), await ((b = (h = N(this, Rt).config).onSettled) == null ? void 0 : b.call(
        h,
        A,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((g = (y = this.options).onSettled) == null ? void 0 : g.call(y, A, null, t, this.state.context)), Oe(this, Cr, rn).call(this, { type: "success", data: A }), A;
    } catch (A) {
      try {
        throw await ((T = (m = N(this, Rt).config).onError) == null ? void 0 : T.call(
          m,
          A,
          t,
          this.state.context,
          this
        )), await ((v = (x = this.options).onError) == null ? void 0 : v.call(
          x,
          A,
          t,
          this.state.context
        )), await ((S = (O = N(this, Rt).config).onSettled) == null ? void 0 : S.call(
          O,
          void 0,
          A,
          this.state.variables,
          this.state.context,
          this
        )), await ((w = (R = this.options).onSettled) == null ? void 0 : w.call(
          R,
          void 0,
          A,
          t,
          this.state.context
        )), A;
      } finally {
        Oe(this, Cr, rn).call(this, { type: "error", error: A });
      }
    } finally {
      N(this, Rt).runNext(this);
    }
  }
}, Tr = new WeakMap(), Rt = new WeakMap(), Fn = new WeakMap(), Cr = new WeakSet(), rn = function(t) {
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
  this.state = r(this.state), gt.batch(() => {
    N(this, Tr).forEach((n) => {
      n.onMutationUpdate(t);
    }), N(this, Rt).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, gh);
function $g() {
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
var Ut, ts, bh, lI = (bh = class extends ni {
  constructor(t = {}) {
    super();
    ye(this, Ut);
    ye(this, ts);
    this.config = t, ie(this, Ut, /* @__PURE__ */ new Map()), ie(this, ts, Date.now());
  }
  build(t, r, n) {
    const o = new aI({
      mutationCache: this,
      mutationId: ++Ts(this, ts)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(o), o;
  }
  add(t) {
    const r = Fs(t), n = N(this, Ut).get(r) ?? [];
    n.push(t), N(this, Ut).set(r, n), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var n;
    const r = Fs(t);
    if (N(this, Ut).has(r)) {
      const o = (n = N(this, Ut).get(r)) == null ? void 0 : n.filter((s) => s !== t);
      o && (o.length === 0 ? N(this, Ut).delete(r) : N(this, Ut).set(r, o));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var n;
    const r = (n = N(this, Ut).get(Fs(t))) == null ? void 0 : n.find((o) => o.state.status === "pending");
    return !r || r === t;
  }
  runNext(t) {
    var n;
    const r = (n = N(this, Ut).get(Fs(t))) == null ? void 0 : n.find((o) => o !== t && o.state.isPaused);
    return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
  }
  clear() {
    gt.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return [...N(this, Ut).values()].flat();
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => Bp(r, n)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((r) => Bp(t, r));
  }
  notify(t) {
    gt.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((r) => r.state.isPaused);
    return gt.batch(
      () => Promise.all(
        t.map((r) => r.continue().catch(tr))
      )
    );
  }
}, Ut = new WeakMap(), ts = new WeakMap(), bh);
function Fs(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function Up(e) {
  return {
    onFetch: (t, r) => {
      var d, f, h, b, y;
      const n = t.options, o = (h = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : h.direction, s = ((b = t.state.data) == null ? void 0 : b.pages) || [], a = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
      let l = { pages: [], pageParams: [] }, c = 0;
      const u = async () => {
        let g = !1;
        const m = (v) => {
          Object.defineProperty(v, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
              g = !0;
            }), t.signal)
          });
        }, T = _g(t.options, t.fetchOptions), x = async (v, O, S) => {
          if (g)
            return Promise.reject();
          if (O == null && v.pages.length)
            return Promise.resolve(v);
          const R = {
            queryKey: t.queryKey,
            pageParam: O,
            direction: S ? "backward" : "forward",
            meta: t.options.meta
          };
          m(R);
          const w = await T(
            R
          ), { maxPages: A } = t.options, E = S ? ZP : JP;
          return {
            pages: E(v.pages, w, A),
            pageParams: E(v.pageParams, O, A)
          };
        };
        if (o && s.length) {
          const v = o === "backward", O = v ? cI : Gp, S = {
            pages: s,
            pageParams: a
          }, R = O(n, S);
          l = await x(S, R, v);
        } else {
          const v = e ?? s.length;
          do {
            const O = c === 0 ? a[0] ?? n.initialPageParam : Gp(n, l);
            if (c > 0 && O == null)
              break;
            l = await x(l, O), c++;
          } while (c < v);
        }
        return l;
      };
      t.options.persister ? t.fetchFn = () => {
        var g, m;
        return (m = (g = t.options).persister) == null ? void 0 : m.call(
          g,
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
function Gp(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  ) : void 0;
}
function cI(e, { pages: t, pageParams: r }) {
  var n;
  return t.length > 0 ? (n = e.getPreviousPageParam) == null ? void 0 : n.call(e, t[0], t, r[0], r) : void 0;
}
var lt, an, ln, Po, Io, cn, Do, $o, vh, uI = (vh = class {
  constructor(e = {}) {
    ye(this, lt);
    ye(this, an);
    ye(this, ln);
    ye(this, Po);
    ye(this, Io);
    ye(this, cn);
    ye(this, Do);
    ye(this, $o);
    ie(this, lt, e.queryCache || new sI()), ie(this, an, e.mutationCache || new lI()), ie(this, ln, e.defaultOptions || {}), ie(this, Po, /* @__PURE__ */ new Map()), ie(this, Io, /* @__PURE__ */ new Map()), ie(this, cn, 0);
  }
  mount() {
    Ts(this, cn)._++, N(this, cn) === 1 && (ie(this, Do, sd.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), N(this, lt).onFocus());
    })), ie(this, $o, ga.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), N(this, lt).onOnline());
    })));
  }
  unmount() {
    var e, t;
    Ts(this, cn)._--, N(this, cn) === 0 && ((e = N(this, Do)) == null || e.call(this), ie(this, Do, void 0), (t = N(this, $o)) == null || t.call(this), ie(this, $o, void 0));
  }
  isFetching(e) {
    return N(this, lt).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return N(this, an).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = N(this, lt).get(t.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0)
      return this.fetchQuery(e);
    {
      const r = this.defaultQueryOptions(e), n = N(this, lt).build(this, r);
      return e.revalidateIfStale && n.isStaleByTime(xo(r.staleTime, n)) && this.prefetchQuery(r), Promise.resolve(t);
    }
  }
  getQueriesData(e) {
    return N(this, lt).findAll(e).map(({ queryKey: t, state: r }) => {
      const n = r.data;
      return [t, n];
    });
  }
  setQueryData(e, t, r) {
    const n = this.defaultQueryOptions({ queryKey: e }), o = N(this, lt).get(
      n.queryHash
    ), s = o == null ? void 0 : o.state.data, a = QP(t, s);
    if (a !== void 0)
      return N(this, lt).build(this, n).setData(a, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return gt.batch(
      () => N(this, lt).findAll(e).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, t, r)
      ])
    );
  }
  getQueryState(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = N(this, lt).get(t.queryHash)) == null ? void 0 : r.state;
  }
  removeQueries(e) {
    const t = N(this, lt);
    gt.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = N(this, lt), n = {
      type: "active",
      ...e
    };
    return gt.batch(() => (r.findAll(e).forEach((o) => {
      o.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = gt.batch(
      () => N(this, lt).findAll(e).map((o) => o.cancel(r))
    );
    return Promise.all(n).then(tr).catch(tr);
  }
  invalidateQueries(e = {}, t = {}) {
    return gt.batch(() => {
      if (N(this, lt).findAll(e).forEach((n) => {
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
    }, n = gt.batch(
      () => N(this, lt).findAll(e).filter((o) => !o.isDisabled()).map((o) => {
        let s = o.fetch(void 0, r);
        return r.throwOnError || (s = s.catch(tr)), o.state.fetchStatus === "paused" ? Promise.resolve() : s;
      })
    );
    return Promise.all(n).then(tr);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const r = N(this, lt).build(this, t);
    return r.isStaleByTime(
      xo(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(tr).catch(tr);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Up(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(tr).catch(tr);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Up(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return ga.isOnline() ? N(this, an).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return N(this, lt);
  }
  getMutationCache() {
    return N(this, an);
  }
  getDefaultOptions() {
    return N(this, ln);
  }
  setDefaultOptions(e) {
    ie(this, ln, e);
  }
  setQueryDefaults(e, t) {
    N(this, Po).set(Xn(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...N(this, Po).values()];
    let r = {};
    return t.forEach((n) => {
      Ji(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    N(this, Io).set(Xn(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...N(this, Io).values()];
    let r = {};
    return t.forEach((n) => {
      Ji(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...N(this, ln).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = id(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === Bc && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...N(this, ln).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    N(this, lt).clear(), N(this, an).clear();
  }
}, lt = new WeakMap(), an = new WeakMap(), ln = new WeakMap(), Po = new WeakMap(), Io = new WeakMap(), cn = new WeakMap(), Do = new WeakMap(), $o = new WeakMap(), vh), It, Ne, rs, _t, Ln, ko, Or, ns, Mo, Fo, qn, jn, un, Lo, Ve, Oi, Vc, zc, Uc, Gc, Wc, Hc, Kc, kg, Eh, dI = (Eh = class extends ni {
  constructor(t, r) {
    super();
    ye(this, Ve);
    ye(this, It);
    ye(this, Ne);
    ye(this, rs);
    ye(this, _t);
    ye(this, Ln);
    ye(this, ko);
    ye(this, Or);
    ye(this, ns);
    ye(this, Mo);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    ye(this, Fo);
    ye(this, qn);
    ye(this, jn);
    ye(this, un);
    ye(this, Lo, /* @__PURE__ */ new Set());
    this.options = r, ie(this, It, t), ie(this, Or, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (N(this, Ne).addObserver(this), Wp(N(this, Ne), this.options) ? Oe(this, Ve, Oi).call(this) : this.updateResult(), Oe(this, Ve, Gc).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Yc(
      N(this, Ne),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Yc(
      N(this, Ne),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Oe(this, Ve, Wc).call(this), Oe(this, Ve, Hc).call(this), N(this, Ne).removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options, o = N(this, Ne);
    if (this.options = N(this, It).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof fr(this.options.enabled, N(this, Ne)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    Oe(this, Ve, Kc).call(this), N(this, Ne).setOptions(this.options), n._defaulted && !ya(this.options, n) && N(this, It).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: N(this, Ne),
      observer: this
    });
    const s = this.hasListeners();
    s && Hp(
      N(this, Ne),
      o,
      this.options,
      n
    ) && Oe(this, Ve, Oi).call(this), this.updateResult(r), s && (N(this, Ne) !== o || fr(this.options.enabled, N(this, Ne)) !== fr(n.enabled, N(this, Ne)) || xo(this.options.staleTime, N(this, Ne)) !== xo(n.staleTime, N(this, Ne))) && Oe(this, Ve, Vc).call(this);
    const a = Oe(this, Ve, zc).call(this);
    s && (N(this, Ne) !== o || fr(this.options.enabled, N(this, Ne)) !== fr(n.enabled, N(this, Ne)) || a !== N(this, un)) && Oe(this, Ve, Uc).call(this, a);
  }
  getOptimisticResult(t) {
    const r = N(this, It).getQueryCache().build(N(this, It), t), n = this.createResult(r, t);
    return pI(this, n) && (ie(this, _t, n), ie(this, ko, this.options), ie(this, Ln, N(this, Ne).state)), n;
  }
  getCurrentResult() {
    return N(this, _t);
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
    N(this, Lo).add(t);
  }
  getCurrentQuery() {
    return N(this, Ne);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = N(this, It).defaultQueryOptions(t), n = N(this, It).getQueryCache().build(N(this, It), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return Oe(this, Ve, Oi).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), N(this, _t)));
  }
  createResult(t, r) {
    var w;
    const n = N(this, Ne), o = this.options, s = N(this, _t), a = N(this, Ln), l = N(this, ko), u = t !== n ? t.state : N(this, rs), { state: d } = t;
    let f = { ...d }, h = !1, b;
    if (r._optimisticResults) {
      const A = this.hasListeners(), E = !A && Wp(t, r), P = A && Hp(t, n, r, o);
      (E || P) && (f = {
        ...f,
        ...Dg(d.data, t.options)
      }), r._optimisticResults === "isRestoring" && (f.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: g, status: m } = f;
    if (r.select && f.data !== void 0)
      if (s && f.data === (a == null ? void 0 : a.data) && r.select === N(this, ns))
        b = N(this, Mo);
      else
        try {
          ie(this, ns, r.select), b = r.select(f.data), b = jc(s == null ? void 0 : s.data, b, r), ie(this, Mo, b), ie(this, Or, null);
        } catch (A) {
          ie(this, Or, A);
        }
    else
      b = f.data;
    if (r.placeholderData !== void 0 && b === void 0 && m === "pending") {
      let A;
      if (s != null && s.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData))
        A = s.data;
      else if (A = typeof r.placeholderData == "function" ? r.placeholderData(
        (w = N(this, Fo)) == null ? void 0 : w.state.data,
        N(this, Fo)
      ) : r.placeholderData, r.select && A !== void 0)
        try {
          A = r.select(A), ie(this, Or, null);
        } catch (E) {
          ie(this, Or, E);
        }
      A !== void 0 && (m = "success", b = jc(
        s == null ? void 0 : s.data,
        A,
        r
      ), h = !0);
    }
    N(this, Or) && (y = N(this, Or), b = N(this, Mo), g = Date.now(), m = "error");
    const T = f.fetchStatus === "fetching", x = m === "pending", v = m === "error", O = x && T, S = b !== void 0;
    return {
      status: m,
      fetchStatus: f.fetchStatus,
      isPending: x,
      isSuccess: m === "success",
      isError: v,
      isInitialLoading: O,
      isLoading: O,
      data: b,
      dataUpdatedAt: f.dataUpdatedAt,
      error: y,
      errorUpdatedAt: g,
      failureCount: f.fetchFailureCount,
      failureReason: f.fetchFailureReason,
      errorUpdateCount: f.errorUpdateCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount: f.dataUpdateCount > u.dataUpdateCount || f.errorUpdateCount > u.errorUpdateCount,
      isFetching: T,
      isRefetching: T && !x,
      isLoadingError: v && !S,
      isPaused: f.fetchStatus === "paused",
      isPlaceholderData: h,
      isRefetchError: v && S,
      isStale: ad(t, r),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const r = N(this, _t), n = this.createResult(N(this, Ne), this.options);
    if (ie(this, Ln, N(this, Ne).state), ie(this, ko, this.options), N(this, Ln).data !== void 0 && ie(this, Fo, N(this, Ne)), ya(n, r))
      return;
    ie(this, _t, n);
    const o = {}, s = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: a } = this.options, l = typeof a == "function" ? a() : a;
      if (l === "all" || !l && !N(this, Lo).size)
        return !0;
      const c = new Set(
        l ?? N(this, Lo)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(N(this, _t)).some((u) => {
        const d = u;
        return N(this, _t)[d] !== r[d] && c.has(d);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && s() && (o.listeners = !0), Oe(this, Ve, kg).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Oe(this, Ve, Gc).call(this);
  }
}, It = new WeakMap(), Ne = new WeakMap(), rs = new WeakMap(), _t = new WeakMap(), Ln = new WeakMap(), ko = new WeakMap(), Or = new WeakMap(), ns = new WeakMap(), Mo = new WeakMap(), Fo = new WeakMap(), qn = new WeakMap(), jn = new WeakMap(), un = new WeakMap(), Lo = new WeakMap(), Ve = new WeakSet(), Oi = function(t) {
  Oe(this, Ve, Kc).call(this);
  let r = N(this, Ne).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(tr)), r;
}, Vc = function() {
  Oe(this, Ve, Wc).call(this);
  const t = xo(
    this.options.staleTime,
    N(this, Ne)
  );
  if (Wo || N(this, _t).isStale || !Fc(t))
    return;
  const n = Rg(N(this, _t).dataUpdatedAt, t) + 1;
  ie(this, qn, setTimeout(() => {
    N(this, _t).isStale || this.updateResult();
  }, n));
}, zc = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(N(this, Ne)) : this.options.refetchInterval) ?? !1;
}, Uc = function(t) {
  Oe(this, Ve, Hc).call(this), ie(this, un, t), !(Wo || fr(this.options.enabled, N(this, Ne)) === !1 || !Fc(N(this, un)) || N(this, un) === 0) && ie(this, jn, setInterval(() => {
    (this.options.refetchIntervalInBackground || sd.isFocused()) && Oe(this, Ve, Oi).call(this);
  }, N(this, un)));
}, Gc = function() {
  Oe(this, Ve, Vc).call(this), Oe(this, Ve, Uc).call(this, Oe(this, Ve, zc).call(this));
}, Wc = function() {
  N(this, qn) && (clearTimeout(N(this, qn)), ie(this, qn, void 0));
}, Hc = function() {
  N(this, jn) && (clearInterval(N(this, jn)), ie(this, jn, void 0));
}, Kc = function() {
  const t = N(this, It).getQueryCache().build(N(this, It), this.options);
  if (t === N(this, Ne))
    return;
  const r = N(this, Ne);
  ie(this, Ne, t), ie(this, rs, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, kg = function(t) {
  gt.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(N(this, _t));
    }), N(this, It).getQueryCache().notify({
      query: N(this, Ne),
      type: "observerResultsUpdated"
    });
  });
}, Eh);
function fI(e, t) {
  return fr(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Wp(e, t) {
  return fI(e, t) || e.state.data !== void 0 && Yc(e, t, t.refetchOnMount);
}
function Yc(e, t, r) {
  if (fr(t.enabled, e) !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && ad(e, t);
  }
  return !1;
}
function Hp(e, t, r, n) {
  return (e !== t || fr(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && ad(e, r);
}
function ad(e, t) {
  return fr(t.enabled, e) !== !1 && e.isStaleByTime(xo(t.staleTime, e));
}
function pI(e, t) {
  return !ya(e.getCurrentResult(), t);
}
var dn, fn, Dt, qr, zr, Ys, Qc, Sh, hI = (Sh = class extends ni {
  constructor(t, r) {
    super();
    ye(this, zr);
    ye(this, dn);
    ye(this, fn);
    ye(this, Dt);
    ye(this, qr);
    ie(this, dn, t), this.setOptions(r), this.bindMethods(), Oe(this, zr, Ys).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var n;
    const r = this.options;
    this.options = N(this, dn).defaultMutationOptions(t), ya(this.options, r) || N(this, dn).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: N(this, Dt),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && Xn(r.mutationKey) !== Xn(this.options.mutationKey) ? this.reset() : ((n = N(this, Dt)) == null ? void 0 : n.state.status) === "pending" && N(this, Dt).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = N(this, Dt)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    Oe(this, zr, Ys).call(this), Oe(this, zr, Qc).call(this, t);
  }
  getCurrentResult() {
    return N(this, fn);
  }
  reset() {
    var t;
    (t = N(this, Dt)) == null || t.removeObserver(this), ie(this, Dt, void 0), Oe(this, zr, Ys).call(this), Oe(this, zr, Qc).call(this);
  }
  mutate(t, r) {
    var n;
    return ie(this, qr, r), (n = N(this, Dt)) == null || n.removeObserver(this), ie(this, Dt, N(this, dn).getMutationCache().build(N(this, dn), this.options)), N(this, Dt).addObserver(this), N(this, Dt).execute(t);
  }
}, dn = new WeakMap(), fn = new WeakMap(), Dt = new WeakMap(), qr = new WeakMap(), zr = new WeakSet(), Ys = function() {
  var r;
  const t = ((r = N(this, Dt)) == null ? void 0 : r.state) ?? $g();
  ie(this, fn, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Qc = function(t) {
  gt.batch(() => {
    var r, n, o, s, a, l, c, u;
    if (N(this, qr) && this.hasListeners()) {
      const d = N(this, fn).variables, f = N(this, fn).context;
      (t == null ? void 0 : t.type) === "success" ? ((n = (r = N(this, qr)).onSuccess) == null || n.call(r, t.data, d, f), (s = (o = N(this, qr)).onSettled) == null || s.call(o, t.data, null, d, f)) : (t == null ? void 0 : t.type) === "error" && ((l = (a = N(this, qr)).onError) == null || l.call(a, t.error, d, f), (u = (c = N(this, qr)).onSettled) == null || u.call(
        c,
        void 0,
        t.error,
        d,
        f
      ));
    }
    this.listeners.forEach((d) => {
      d(N(this, fn));
    });
  });
}, Sh), mI = C.createContext(
  void 0
), Mg = (e) => {
  const t = C.useContext(mI);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Fg = C.createContext(!1), yI = () => C.useContext(Fg);
Fg.Provider;
function gI() {
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
var bI = C.createContext(gI()), vI = () => C.useContext(bI);
function Lg(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function EI() {
}
var SI = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, TI = (e) => {
  C.useEffect(() => {
    e.clearReset();
  }, [e]);
}, CI = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n
}) => e.isError && !t.isReset() && !e.isFetching && n && Lg(r, [e.error, n]), OI = (e) => {
  e.suspense && (typeof e.staleTime != "number" && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, xI = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, wI = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function RI(e, t, r) {
  var u, d, f, h;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Mg(), o = yI(), s = vI(), a = n.defaultQueryOptions(e);
  (d = (u = n.getDefaultOptions().queries) == null ? void 0 : u._experimental_beforeQuery) == null || d.call(
    u,
    a
  ), a._optimisticResults = o ? "isRestoring" : "optimistic", OI(a), SI(a, s), TI(s);
  const [l] = C.useState(
    () => new t(
      n,
      a
    )
  ), c = l.getOptimisticResult(a);
  if (C.useSyncExternalStore(
    C.useCallback(
      (b) => {
        const y = o ? () => {
        } : l.subscribe(gt.batchCalls(b));
        return l.updateResult(), y;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), C.useEffect(() => {
    l.setOptions(a, { listeners: !1 });
  }, [a, l]), xI(a, c))
    throw wI(a, l, s);
  if (CI({
    result: c,
    errorResetBoundary: s,
    throwOnError: a.throwOnError,
    query: n.getQueryCache().get(a.queryHash)
  }))
    throw c.error;
  return (h = (f = n.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || h.call(
    f,
    a,
    c
  ), a.notifyOnChangeProps ? c : l.trackResult(c);
}
function oi(e, t) {
  return RI(e, dI);
}
function ld(e, t) {
  const r = Mg(), [n] = C.useState(
    () => new hI(
      r,
      e
    )
  );
  C.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const o = C.useSyncExternalStore(
    C.useCallback(
      (a) => n.subscribe(gt.batchCalls(a)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), s = C.useCallback(
    (a, l) => {
      n.mutate(a, l).catch(EI);
    },
    [n]
  );
  if (o.error && Lg(n.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: s, mutateAsync: o.mutate };
}
function qg(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: _I } = Object.prototype, { getPrototypeOf: cd } = Object, al = /* @__PURE__ */ ((e) => (t) => {
  const r = _I.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), yr = (e) => (e = e.toLowerCase(), (t) => al(t) === e), ll = (e) => (t) => typeof t === e, { isArray: ii } = Array, Zi = ll("undefined");
function NI(e) {
  return e !== null && !Zi(e) && e.constructor !== null && !Zi(e.constructor) && Kt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const jg = yr("ArrayBuffer");
function AI(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && jg(e.buffer), t;
}
const PI = ll("string"), Kt = ll("function"), Bg = ll("number"), cl = (e) => e !== null && typeof e == "object", II = (e) => e === !0 || e === !1, Qs = (e) => {
  if (al(e) !== "object")
    return !1;
  const t = cd(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, DI = yr("Date"), $I = yr("File"), kI = yr("Blob"), MI = yr("FileList"), FI = (e) => cl(e) && Kt(e.pipe), LI = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Kt(e.append) && ((t = al(e)) === "formdata" || // detect form-data instance
  t === "object" && Kt(e.toString) && e.toString() === "[object FormData]"));
}, qI = yr("URLSearchParams"), [jI, BI, VI, zI] = ["ReadableStream", "Request", "Response", "Headers"].map(yr), UI = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Es(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), ii(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let l;
    for (n = 0; n < a; n++)
      l = s[n], t.call(null, e[l], l, e);
  }
}
function Vg(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const In = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zg = (e) => !Zi(e) && e !== In;
function Xc() {
  const { caseless: e } = zg(this) && this || {}, t = {}, r = (n, o) => {
    const s = e && Vg(t, o) || o;
    Qs(t[s]) && Qs(n) ? t[s] = Xc(t[s], n) : Qs(n) ? t[s] = Xc({}, n) : ii(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Es(arguments[n], r);
  return t;
}
const GI = (e, t, r, { allOwnKeys: n } = {}) => (Es(t, (o, s) => {
  r && Kt(o) ? e[s] = qg(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), WI = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), HI = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, KI = (e, t, r, n) => {
  let o, s, a;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!n || n(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = r !== !1 && cd(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, YI = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, QI = (e) => {
  if (!e) return null;
  if (ii(e)) return e;
  let t = e.length;
  if (!Bg(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, XI = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && cd(Uint8Array)), JI = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, ZI = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, eD = yr("HTMLFormElement"), tD = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Kp = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), rD = yr("RegExp"), Ug = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Es(r, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (n[s] = a || o);
  }), Object.defineProperties(e, n);
}, nD = (e) => {
  Ug(e, (t, r) => {
    if (Kt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Kt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, oD = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return ii(e) ? n(e) : n(String(e).split(t)), r;
}, iD = () => {
}, sD = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, zl = "abcdefghijklmnopqrstuvwxyz", Yp = "0123456789", Gg = {
  DIGIT: Yp,
  ALPHA: zl,
  ALPHA_DIGIT: zl + zl.toUpperCase() + Yp
}, aD = (e = 16, t = Gg.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function lD(e) {
  return !!(e && Kt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const cD = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (cl(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = ii(n) ? [] : {};
        return Es(n, (a, l) => {
          const c = r(a, o + 1);
          !Zi(c) && (s[l] = c);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, uD = yr("AsyncFunction"), dD = (e) => e && (cl(e) || Kt(e)) && Kt(e.then) && Kt(e.catch), Wg = ((e, t) => e ? setImmediate : t ? ((r, n) => (In.addEventListener("message", ({ source: o, data: s }) => {
  o === In && s === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), In.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Kt(In.postMessage)
), fD = typeof queueMicrotask < "u" ? queueMicrotask.bind(In) : typeof process < "u" && process.nextTick || Wg, M = {
  isArray: ii,
  isArrayBuffer: jg,
  isBuffer: NI,
  isFormData: LI,
  isArrayBufferView: AI,
  isString: PI,
  isNumber: Bg,
  isBoolean: II,
  isObject: cl,
  isPlainObject: Qs,
  isReadableStream: jI,
  isRequest: BI,
  isResponse: VI,
  isHeaders: zI,
  isUndefined: Zi,
  isDate: DI,
  isFile: $I,
  isBlob: kI,
  isRegExp: rD,
  isFunction: Kt,
  isStream: FI,
  isURLSearchParams: qI,
  isTypedArray: XI,
  isFileList: MI,
  forEach: Es,
  merge: Xc,
  extend: GI,
  trim: UI,
  stripBOM: WI,
  inherits: HI,
  toFlatObject: KI,
  kindOf: al,
  kindOfTest: yr,
  endsWith: YI,
  toArray: QI,
  forEachEntry: JI,
  matchAll: ZI,
  isHTMLForm: eD,
  hasOwnProperty: Kp,
  hasOwnProp: Kp,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ug,
  freezeMethods: nD,
  toObjectSet: oD,
  toCamelCase: tD,
  noop: iD,
  toFiniteNumber: sD,
  findKey: Vg,
  global: In,
  isContextDefined: zg,
  ALPHABET: Gg,
  generateString: aD,
  isSpecCompliantForm: lD,
  toJSONObject: cD,
  isAsyncFn: uD,
  isThenable: dD,
  setImmediate: Wg,
  asap: fD
};
function Ee(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
M.inherits(Ee, Error, {
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
const Hg = Ee.prototype, Kg = {};
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
  Kg[e] = { value: e };
});
Object.defineProperties(Ee, Kg);
Object.defineProperty(Hg, "isAxiosError", { value: !0 });
Ee.from = (e, t, r, n, o, s) => {
  const a = Object.create(Hg);
  return M.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Ee.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, s && Object.assign(a, s), a;
};
const pD = null;
function Jc(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function Yg(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qp(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Yg(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function hD(e) {
  return M.isArray(e) && !e.some(Jc);
}
const mD = M.toFlatObject(M, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ul(e, t, r) {
  if (!M.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = M.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, m) {
    return !M.isUndefined(m[g]);
  });
  const n = r.metaTokens, o = r.visitor || d, s = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && M.isSpecCompliantForm(t);
  if (!M.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (M.isDate(y))
      return y.toISOString();
    if (!c && M.isBlob(y))
      throw new Ee("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(y) || M.isTypedArray(y) ? c && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function d(y, g, m) {
    let T = y;
    if (y && !m && typeof y == "object") {
      if (M.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), y = JSON.stringify(y);
      else if (M.isArray(y) && hD(y) || (M.isFileList(y) || M.endsWith(g, "[]")) && (T = M.toArray(y)))
        return g = Yg(g), T.forEach(function(v, O) {
          !(M.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Qp([g], O, s) : a === null ? g : g + "[]",
            u(v)
          );
        }), !1;
    }
    return Jc(y) ? !0 : (t.append(Qp(m, g, s), u(y)), !1);
  }
  const f = [], h = Object.assign(mD, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Jc
  });
  function b(y, g) {
    if (!M.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(y), M.forEach(y, function(T, x) {
        (!(M.isUndefined(T) || T === null) && o.call(
          t,
          T,
          M.isString(x) ? x.trim() : x,
          g,
          h
        )) === !0 && b(T, g ? g.concat(x) : [x]);
      }), f.pop();
    }
  }
  if (!M.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Xp(e) {
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
function ud(e, t) {
  this._pairs = [], e && ul(e, this, t);
}
const Qg = ud.prototype;
Qg.append = function(t, r) {
  this._pairs.push([t, r]);
};
Qg.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Xp);
  } : Xp;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function yD(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xg(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || yD, o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = M.isURLSearchParams(t) ? t.toString() : new ud(t, r).toString(n), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Jp {
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
const Jg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gD = typeof URLSearchParams < "u" ? URLSearchParams : ud, bD = typeof FormData < "u" ? FormData : null, vD = typeof Blob < "u" ? Blob : null, ED = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gD,
    FormData: bD,
    Blob: vD
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, dd = typeof window < "u" && typeof document < "u", Zc = typeof navigator == "object" && navigator || void 0, SD = dd && (!Zc || ["ReactNative", "NativeScript", "NS"].indexOf(Zc.product) < 0), TD = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", CD = dd && window.location.href || "http://localhost", OD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: dd,
  hasStandardBrowserEnv: SD,
  hasStandardBrowserWebWorkerEnv: TD,
  navigator: Zc,
  origin: CD
}, Symbol.toStringTag, { value: "Module" })), qt = {
  ...OD,
  ...ED
};
function xD(e, t) {
  return ul(e, new qt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, s) {
      return qt.isNode && M.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function wD(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function RD(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Zg(e) {
  function t(r, n, o, s) {
    let a = r[s++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a), c = s >= r.length;
    return a = !a && M.isArray(o) ? o.length : a, c ? (M.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !l) : ((!o[a] || !M.isObject(o[a])) && (o[a] = []), t(r, n, o[a], s) && M.isArray(o[a]) && (o[a] = RD(o[a])), !l);
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const r = {};
    return M.forEachEntry(e, (n, o) => {
      t(wD(n), o, r, 0);
    }), r;
  }
  return null;
}
function _D(e, t, r) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(e);
}
const Ss = {
  transitional: Jg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = M.isObject(t);
    if (s && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t))
      return o ? JSON.stringify(Zg(t)) : t;
    if (M.isArrayBuffer(t) || M.isBuffer(t) || M.isStream(t) || M.isFile(t) || M.isBlob(t) || M.isReadableStream(t))
      return t;
    if (M.isArrayBufferView(t))
      return t.buffer;
    if (M.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return xD(t, this.formSerializer).toString();
      if ((l = M.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ul(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), _D(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Ss.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (M.isResponse(t) || M.isReadableStream(t))
      return t;
    if (t && M.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? Ee.from(l, Ee.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: qt.classes.FormData,
    Blob: qt.classes.Blob
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
  Ss.headers[e] = {};
});
const ND = M.toObjectSet([
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
]), AD = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && ND[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Zp = Symbol("internals");
function gi(e) {
  return e && String(e).trim().toLowerCase();
}
function Xs(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(Xs) : String(e);
}
function PD(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const ID = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ul(e, t, r, n, o) {
  if (M.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!M.isString(t)) {
    if (M.isString(n))
      return t.indexOf(n) !== -1;
    if (M.isRegExp(n))
      return n.test(t);
  }
}
function DD(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function $D(e, t) {
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
class jt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(l, c, u) {
      const d = gi(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = M.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = Xs(l));
    }
    const a = (l, c) => M.forEach(l, (u, d) => s(u, d, c));
    if (M.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (M.isString(t) && (t = t.trim()) && !ID(t))
      a(AD(t), r);
    else if (M.isHeaders(t))
      for (const [l, c] of t.entries())
        s(c, l, n);
    else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = gi(t), t) {
      const n = M.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return PD(o);
        if (M.isFunction(r))
          return r.call(this, o, n);
        if (M.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = gi(t), t) {
      const n = M.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ul(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(a) {
      if (a = gi(a), a) {
        const l = M.findKey(n, a);
        l && (!r || Ul(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return M.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || Ul(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return M.forEach(this, (o, s) => {
      const a = M.findKey(n, s);
      if (a) {
        r[a] = Xs(o), delete r[s];
        return;
      }
      const l = t ? DD(s) : String(s).trim();
      l !== s && delete r[s], r[l] = Xs(o), n[l] = !0;
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
    const n = (this[Zp] = this[Zp] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const l = gi(a);
      n[l] || ($D(o, a), n[l] = !0);
    }
    return M.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
jt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.reduceDescriptors(jt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
M.freezeMethods(jt);
function Gl(e, t) {
  const r = this || Ss, n = t || r, o = jt.from(n.headers);
  let s = n.data;
  return M.forEach(e, function(l) {
    s = l.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function eb(e) {
  return !!(e && e.__CANCEL__);
}
function si(e, t, r) {
  Ee.call(this, e ?? "canceled", Ee.ERR_CANCELED, t, r), this.name = "CanceledError";
}
M.inherits(si, Ee, {
  __CANCEL__: !0
});
function tb(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Ee(
    "Request failed with status code " + r.status,
    [Ee.ERR_BAD_REQUEST, Ee.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function kD(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function MD(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = n[s];
    a || (a = u), r[o] = c, n[o] = u;
    let f = s, h = 0;
    for (; f !== o; )
      h += r[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - a < t)
      return;
    const b = d && u - d;
    return b ? Math.round(h * 1e3 / b) : void 0;
  };
}
function FD(e, t) {
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
const ba = (e, t, r = 3) => {
  let n = 0;
  const o = MD(50, 250);
  return FD((s) => {
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
}, eh = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, th = (e) => (...t) => M.asap(() => e(...t)), LD = qt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = qt.navigator && /(msie|trident)/i.test(qt.navigator.userAgent), r = document.createElement("a");
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
), qD = qt.hasStandardBrowserEnv ? (
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
function jD(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function BD(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function rb(e, t) {
  return e && !jD(t) ? BD(e, t) : t;
}
const rh = (e) => e instanceof jt ? { ...e } : e;
function Jn(e, t) {
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
    headers: (u, d) => o(rh(u), rh(d), !0)
  };
  return M.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = c[d] || o, h = f(e[d], t[d], d);
    M.isUndefined(h) && f !== l || (r[d] = h);
  }), r;
}
const nb = (e) => {
  const t = Jn({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: l } = t;
  t.headers = a = jt.from(a), t.url = Xg(rb(t.baseURL, t.url), e.params, e.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let c;
  if (M.isFormData(r)) {
    if (qt.hasStandardBrowserEnv || qt.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((c = a.getContentType()) !== !1) {
      const [u, ...d] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      a.setContentType([u || "multipart/form-data", ...d].join("; "));
    }
  }
  if (qt.hasStandardBrowserEnv && (n && M.isFunction(n) && (n = n(t)), n || n !== !1 && LD(t.url))) {
    const u = o && s && qD.read(s);
    u && a.set(o, u);
  }
  return t;
}, VD = typeof XMLHttpRequest < "u", zD = VD && function(e) {
  return new Promise(function(r, n) {
    const o = nb(e);
    let s = o.data;
    const a = jt.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: u } = o, d, f, h, b, y;
    function g() {
      b && b(), y && y(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function T() {
      if (!m)
        return;
      const v = jt.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), S = {
        data: !l || l === "text" || l === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: v,
        config: e,
        request: m
      };
      tb(function(w) {
        r(w), g();
      }, function(w) {
        n(w), g();
      }, S), m = null;
    }
    "onloadend" in m ? m.onloadend = T : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, m.onabort = function() {
      m && (n(new Ee("Request aborted", Ee.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      n(new Ee("Network Error", Ee.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let O = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const S = o.transitional || Jg;
      o.timeoutErrorMessage && (O = o.timeoutErrorMessage), n(new Ee(
        O,
        S.clarifyTimeoutError ? Ee.ETIMEDOUT : Ee.ECONNABORTED,
        e,
        m
      )), m = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in m && M.forEach(a.toJSON(), function(O, S) {
      m.setRequestHeader(S, O);
    }), M.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), l && l !== "json" && (m.responseType = o.responseType), u && ([h, y] = ba(u, !0), m.addEventListener("progress", h)), c && m.upload && ([f, b] = ba(c), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", b)), (o.cancelToken || o.signal) && (d = (v) => {
      m && (n(!v || v.type ? new si(null, e, m) : v), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
    const x = kD(o.url);
    if (x && qt.protocols.indexOf(x) === -1) {
      n(new Ee("Unsupported protocol " + x + ":", Ee.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(s || null);
  });
}, UD = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(u) {
      if (!o) {
        o = !0, l();
        const d = u instanceof Error ? u : this.reason;
        n.abort(d instanceof Ee ? d : new si(d instanceof Error ? d.message : d));
      }
    };
    let a = t && setTimeout(() => {
      a = null, s(new Ee(`timeout ${t} of ms exceeded`, Ee.ETIMEDOUT));
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
}, GD = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, WD = async function* (e, t) {
  for await (const r of HD(e))
    yield* GD(r, t);
}, HD = async function* (e) {
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
}, nh = (e, t, r, n) => {
  const o = WD(e, t);
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
          let h = s += f;
          r(h);
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
}, dl = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ob = dl && typeof ReadableStream == "function", KD = dl && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ib = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, YD = ob && ib(() => {
  let e = !1;
  const t = new Request(qt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), oh = 64 * 1024, eu = ob && ib(() => M.isReadableStream(new Response("").body)), va = {
  stream: eu && ((e) => e.body)
};
dl && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !va[t] && (va[t] = M.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new Ee(`Response type '${t}' is not supported`, Ee.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const QD = async (e) => {
  if (e == null)
    return 0;
  if (M.isBlob(e))
    return e.size;
  if (M.isSpecCompliantForm(e))
    return (await new Request(qt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (M.isArrayBufferView(e) || M.isArrayBuffer(e))
    return e.byteLength;
  if (M.isURLSearchParams(e) && (e = e + ""), M.isString(e))
    return (await KD(e)).byteLength;
}, XD = async (e, t) => {
  const r = M.toFiniteNumber(e.getContentLength());
  return r ?? QD(t);
}, JD = dl && (async (e) => {
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
    fetchOptions: h
  } = nb(e);
  u = u ? (u + "").toLowerCase() : "text";
  let b = UD([o, s && s.toAbortSignal()], a), y;
  const g = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let m;
  try {
    if (c && YD && r !== "get" && r !== "head" && (m = await XD(d, n)) !== 0) {
      let S = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), R;
      if (M.isFormData(n) && (R = S.headers.get("content-type")) && d.setContentType(R), S.body) {
        const [w, A] = eh(
          m,
          ba(th(c))
        );
        n = nh(S.body, oh, w, A);
      }
    }
    M.isString(f) || (f = f ? "include" : "omit");
    const T = "credentials" in Request.prototype;
    y = new Request(t, {
      ...h,
      signal: b,
      method: r.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: T ? f : void 0
    });
    let x = await fetch(y);
    const v = eu && (u === "stream" || u === "response");
    if (eu && (l || v && g)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((E) => {
        S[E] = x[E];
      });
      const R = M.toFiniteNumber(x.headers.get("content-length")), [w, A] = l && eh(
        R,
        ba(th(l), !0)
      ) || [];
      x = new Response(
        nh(x.body, oh, w, () => {
          A && A(), g && g();
        }),
        S
      );
    }
    u = u || "text";
    let O = await va[M.findKey(va, u) || "text"](x, e);
    return !v && g && g(), await new Promise((S, R) => {
      tb(S, R, {
        data: O,
        headers: jt.from(x.headers),
        status: x.status,
        statusText: x.statusText,
        config: e,
        request: y
      });
    });
  } catch (T) {
    throw g && g(), T && T.name === "TypeError" && /fetch/i.test(T.message) ? Object.assign(
      new Ee("Network Error", Ee.ERR_NETWORK, e, y),
      {
        cause: T.cause || T
      }
    ) : Ee.from(T, T && T.code, e, y);
  }
}), tu = {
  http: pD,
  xhr: zD,
  fetch: JD
};
M.forEach(tu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ih = (e) => `- ${e}`, ZD = (e) => M.isFunction(e) || e === null || e === !1, sb = {
  getAdapter: (e) => {
    e = M.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let a;
      if (n = r, !ZD(r) && (n = tu[(a = String(r)).toLowerCase()], n === void 0))
        throw new Ee(`Unknown adapter '${a}'`);
      if (n)
        break;
      o[a || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(o).map(
        ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? s.length > 1 ? `since :
` + s.map(ih).join(`
`) : " " + ih(s[0]) : "as no adapter specified";
      throw new Ee(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: tu
};
function Wl(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new si(null, e);
}
function sh(e) {
  return Wl(e), e.headers = jt.from(e.headers), e.data = Gl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), sb.getAdapter(e.adapter || Ss.adapter)(e).then(function(n) {
    return Wl(e), n.data = Gl.call(
      e,
      e.transformResponse,
      n
    ), n.headers = jt.from(n.headers), n;
  }, function(n) {
    return eb(n) || (Wl(e), n && n.response && (n.response.data = Gl.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = jt.from(n.response.headers))), Promise.reject(n);
  });
}
const ab = "1.7.7", fd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  fd[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ah = {};
fd.transitional = function(t, r, n) {
  function o(s, a) {
    return "[Axios v" + ab + "] Transitional option '" + s + "'" + a + (n ? ". " + n : "");
  }
  return (s, a, l) => {
    if (t === !1)
      throw new Ee(
        o(a, " has been removed" + (r ? " in " + r : "")),
        Ee.ERR_DEPRECATED
      );
    return r && !ah[a] && (ah[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, a, l) : !0;
  };
};
function e$(e, t, r) {
  if (typeof e != "object")
    throw new Ee("options must be an object", Ee.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], a = t[s];
    if (a) {
      const l = e[s], c = l === void 0 || a(l, s, e);
      if (c !== !0)
        throw new Ee("option " + s + " must be " + c, Ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ee("Unknown option " + s, Ee.ERR_BAD_OPTION);
  }
}
const ru = {
  assertOptions: e$,
  validators: fd
}, Jr = ru.validators;
class Un {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Jp(),
      response: new Jp()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Jn(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && ru.assertOptions(n, {
      silentJSONParsing: Jr.transitional(Jr.boolean),
      forcedJSONParsing: Jr.transitional(Jr.boolean),
      clarifyTimeoutError: Jr.transitional(Jr.boolean)
    }, !1), o != null && (M.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : ru.assertOptions(o, {
      encode: Jr.function,
      serialize: Jr.function
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
    ), r.headers = jt.concat(a, s);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(r) === !1 || (c = c && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let d, f = 0, h;
    if (!c) {
      const y = [sh.bind(this), void 0];
      for (y.unshift.apply(y, l), y.push.apply(y, u), h = y.length, d = Promise.resolve(r); f < h; )
        d = d.then(y[f++], y[f++]);
      return d;
    }
    h = l.length;
    let b = r;
    for (f = 0; f < h; ) {
      const y = l[f++], g = l[f++];
      try {
        b = y(b);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      d = sh.call(this, b);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, h = u.length; f < h; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = Jn(this.defaults, t);
    const r = rb(t.baseURL, t.url);
    return Xg(r, t.params, t.paramsSerializer);
  }
}
M.forEach(["delete", "get", "head", "options"], function(t) {
  Un.prototype[t] = function(r, n) {
    return this.request(Jn(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
M.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, a, l) {
      return this.request(Jn(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  Un.prototype[t] = r(), Un.prototype[t + "Form"] = r(!0);
});
class pd {
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
      n.reason || (n.reason = new si(s, a, l), r(n.reason));
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
      token: new pd(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function t$(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function r$(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const nu = {
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
Object.entries(nu).forEach(([e, t]) => {
  nu[t] = e;
});
function lb(e) {
  const t = new Un(e), r = qg(Un.prototype.request, t);
  return M.extend(r, Un.prototype, t, { allOwnKeys: !0 }), M.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return lb(Jn(e, o));
  }, r;
}
const ot = lb(Ss);
ot.Axios = Un;
ot.CanceledError = si;
ot.CancelToken = pd;
ot.isCancel = eb;
ot.VERSION = ab;
ot.toFormData = ul;
ot.AxiosError = Ee;
ot.Cancel = ot.CanceledError;
ot.all = function(t) {
  return Promise.all(t);
};
ot.spread = t$;
ot.isAxiosError = r$;
ot.mergeConfig = Jn;
ot.AxiosHeaders = jt;
ot.formToJSON = (e) => Zg(M.isHTMLForm(e) ? new FormData(e) : e);
ot.getAdapter = sb.getAdapter;
ot.HttpStatusCode = nu;
ot.default = ot;
const cb = {
  BASE_URL: "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com"
  // BASE_URL: "https://9345-182-156-141-17.ngrok-free.app",
}, ou = ot.create({
  baseURL: cb.BASE_URL,
  withCredentials: !0,
  headers: {
    // 'ngrok-skip-browser-warning': 'true',
    "Content-Type": "multipart/form-data"
  }
}), n$ = () => localStorage.getItem("access_token"), o$ = () => localStorage.getItem("refresh_token");
ou.interceptors.request.use(
  (e) => {
    const t = n$();
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
ou.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config;
    if (e.response && e.response.status === 401 && !t._retry) {
      t._retry = !0;
      const r = o$();
      if (r)
        try {
          const n = await ot.post(`${cb.BASE_URL}/auth/refresh-token`, {
            refreshToken: r
          });
          return localStorage.setItem("access_token", n.data.access_token), t.headers.Authorization = `Bearer ${n.data.access_token}`, ou(t);
        } catch (n) {
          return Promise.reject(n);
        }
    }
    return Promise.reject(e);
  }
);
const ub = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com", i$ = () => ot.create({
  baseURL: ub,
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
    // 'ngrok-skip-browser-warning': 'true',
  }
});
class tt {
  // private static _accessToken: string;
  // private static _refreshToken: string;
  constructor() {
    this.service = tt.createService();
  }
  static createService() {
    return tt._axiosInstance || (tt._axiosInstance = i$(), tt.setAuthHeaderInterceptor(), tt._axiosInstance.interceptors.response.use(tt.handleSuccess, tt.handleError)), tt._axiosInstance;
  }
  // static setAuthToken(accessToken: string, refreshToken: string) {
  //   this._accessToken = accessToken;
  //   this._refreshToken = refreshToken;
  //   console.log("Access: ", this._accessToken);
  //   console.log("Refresh: ", this._refreshToken);
  // }
  static setAccessToken(t) {
    localStorage.setItem("access_token", t);
  }
  static setRefreshToken(t) {
    localStorage.setItem("refresh_token", t);
  }
  // Method to call your refresh endpoint. Adjust URL and payload as needed.
  static async refreshAccessToken() {
    try {
      const t = localStorage.getItem("refresh_token");
      return (await ot.post(`${ub}/auth/refresh-token`, {
        refreshToken: t
      })).data.access_token;
    } catch (t) {
      return Promise.reject(`Unable to refresh access token.+${t}`);
    }
  }
  static setAuthHeaderInterceptor() {
    tt._axiosInstance.interceptors.request.use(
      function(t) {
        const r = localStorage.getItem("access_token");
        return r && (t.headers.Authorization = `Bearer ${r}`), t;
      },
      function(t) {
        return Promise.reject(t);
      }
    );
  }
  static setResponseInterceptor() {
    tt._axiosInstance.interceptors.response.use(
      tt.handleSuccess,
      tt.handleError
    );
  }
  static handleSuccess(t) {
    return t.data;
  }
  // Updated error handler to catch 401 errors and try to refresh the token
  static async handleError(t) {
    var o;
    const r = t.config;
    if (t.response && t.response.status === 401 && !r._retry) {
      r._retry = !0;
      try {
        const s = await tt.refreshAccessToken();
        return tt.setAccessToken(s), r.headers.set("Authorization", `Bearer ${s}`), tt._axiosInstance(r);
      } catch (s) {
        console.error("Refresh token failed", s);
      }
    }
    const n = { name: "Error", message: "Something went wrong!" };
    return t.response && t.response.data && (n.message = (o = t.response.data) == null ? void 0 : o.message), Promise.reject(n);
  }
  get(t) {
    return this.service.get(t);
  }
  post(t, r) {
    return this.service.post(t, r);
  }
  postFormData(t, r) {
    return this.service.post(t, r, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  put(t, r) {
    return this.service.put(t, r);
  }
  putFormData(t, r) {
    return this.service.put(t, r, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  patch(t, r) {
    return this.service.patch(t, r);
  }
  patchFormData(t, r) {
    return this.service.patch(t, r, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  delete(t) {
    return this.service.delete(t);
  }
}
const fl = (e, t, r = "") => {
  Object.keys(t).forEach((n) => {
    const o = t[n], s = r ? `${r}[${n}]` : n;
    o !== null && (o instanceof File ? e.append(s, o) : typeof o == "object" && o !== null && !(o instanceof Date) ? fl(e, o, s) : typeof o == "string" ? o.trim().length > 0 && e.append(s, o.trim().toLowerCase()) : o !== void 0 && e.append(s, o.toString()));
  });
};
function vo(e, t, r) {
  return e.map((n) => ({
    value: String(n[t]),
    label: String(n[r])
  }));
}
const _r = {
  accTypes: [
    { value: "savings", label: "Savings" },
    { value: "current", label: "Current" },
    { value: "cash credit", label: "Cash Credit" },
    { value: "over draft account", label: "Over Draft Account" },
    { value: "other", label: "Other" }
  ],
  inFnVBusiness: [
    { value: "Less than 1 year", label: "Less than 1 year" },
    { value: "Less than 3 year", label: "Less than 3 year" },
    { value: "Less than 5 year", label: "Less than 5 year" },
    { value: "More than 5 year", label: "More than 5 year" },
    { value: "More than 10 year", label: "More than 10 year" },
    { value: "More than 15 year", label: "More than 15 year" }
  ],
  fileYesOrNo: [
    { value: !0, label: "Yes" },
    { value: !1, label: "No" }
  ],
  proposedPaymentTerms: [
    { value: "After Unloading", label: "After Unloading" },
    { value: "After Loading", label: "After Loading" },
    { value: "Between 3 to 5 Days", label: "Between 3 to 5 Days" },
    { value: "1 Week", label: "1 Week" },
    { value: "15 Days", label: "15 Days" }
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
  ]
}, ir = {
  address1: null,
  address2: null,
  location: null,
  city: null,
  state: null,
  pincode: null
}, s$ = {
  contactFName: null,
  contactMName: null,
  contactLName: null,
  directContactNumber: null,
  mobileNumber: null,
  email: null
}, a$ = {
  beneficiaryFName: null,
  beneficiaryMName: null,
  beneficiaryLName: null,
  bankName: null,
  branchAddress: ir,
  typeOfAcc: null,
  ifscCode: null,
  swiftNo: null,
  invoiceCurrency: null,
  cancelledChequeCopy: null
}, l$ = {
  companyName: null,
  category: null,
  subcategory: null,
  inFandVBusinessSince: null,
  dateOfIncorporation: null,
  officeAddress: ir,
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
  vendorSaleInfo: s$,
  //Vendor Bank Details
  vendorBankDetails: a$,
  //Vendor References
  ref1FName: null,
  ref1MName: null,
  ref1LName: null,
  ref1PrimaryCNumb: null,
  ref1AltrCNumb: null,
  ref1Address: ir,
  ref1Email: null,
  ref2FName: null,
  ref2MName: null,
  ref2LName: null,
  ref2PrimaryCNumb: null,
  ref2AltrCNumb: null,
  ref2Address: ir,
  ref2Email: null
}, db = {
  crop: null,
  variety: null,
  noOfPlants: null,
  pruningDate: null,
  expectedHarvestDate: null,
  expectedQuantityInTonnes: null
}, c$ = {
  //Farmer Details
  farmerfName: null,
  farmermName: null,
  farmerlName: null,
  residensialAddress: ir,
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
  farmAddress: ir,
  totalLandArea: null,
  cultivationArea: null,
  sevenTwelveNo: null,
  sevenTwelveCopy: null,
  farmerPhoto: null,
  farmPhoto: null,
  crops: [db],
  dateOfVisit: null,
  registerBy: null,
  registerDate: null
}, u$ = {
  id: "",
  name: ""
}, d$ = {
  id: "",
  name: ""
}, f$ = {
  accDeptFName: "",
  accDeptMName: "",
  accDeptLName: "",
  accDeptMobileNo: "",
  ownerFName: "",
  ownerMName: "",
  ownerLName: "",
  ownerMobileNo: "",
  mandiLicenceNo: "",
  mandiLicenceCopy: null,
  regiNo: "",
  regiCopy: null,
  electricityBill: "",
  consumenrNo: "",
  electricityBillCopy: null,
  notElectricityBillReason: "",
  customerBlacklisted: "",
  ifBlacklistedReason: "",
  blackListedBy: "",
  visitingCard: "",
  visitinContactNo: "",
  visitingCardCopy: null,
  notVisitingCardReason: "",
  ref1FName: "",
  ref1MName: "",
  ref1LName: "",
  ref1Address: ir,
  ref1ContactNo: "",
  ref1Email: "",
  ref2FName: "",
  ref2MName: "",
  ref2LName: "",
  ref2Address: ir,
  ref2ContactNo: "",
  ref2Email: ""
}, p$ = {
  billingName: "",
  contactPersonFName: "",
  contactPersonMName: "",
  contactPersonLName: "",
  commonlyKnownAs: "",
  billingAddress: ir,
  billingAddressProofCopy: null,
  primaryContactNo: "",
  secondaryContactNo: "",
  emailPrimary: "",
  emailSecondary: "",
  billingFormatCopy: null
}, h$ = {
  deliveryAddress: ir,
  deliveryAddressProofCopy: "",
  deliveryTime: null,
  receivingPersonFName: "",
  receivingPersonMName: "",
  receivingPersonLName: "",
  primaryContactNo: "",
  secondaryContactNo: "",
  emailPrimary: "",
  emailSecondary: ""
}, m$ = {
  panNo: "",
  panCopy: null,
  aadharNo: "",
  addharCopy: null,
  gstn: "",
  regiCertificateCopy: null,
  billBookCopy: null,
  certificationsDetails: "",
  otherCertifications: "",
  corpRegiDetails: "",
  otherCorpRegiDetails: "",
  incorpoCertificateCopy: null,
  cinNo: ""
}, y$ = {
  ifCancelledCheque: "",
  notCancelledChequeReason: "",
  cancelledChequeCopy: null,
  accType: "",
  otherAccType: "",
  bankStatementCopy: null,
  bankAccHolderFName: "",
  bankAccHolderMName: "",
  bankAccHolderLName: "",
  bankName: "",
  bankBranch: "",
  bankAccNo: "",
  ifscCode: "",
  bankAddress: ir
}, g$ = [
  {
    articleName: "",
    specifications: "",
    parameters: "",
    packingMaterialSpec: "",
    rejectionCriteria: "",
    comment: ""
  }
], b$ = {
  paymentMade: "",
  otherPaymentMade: "",
  paymentMode: "",
  otherPaymentMode: "",
  marginDeposit: "",
  rtv: "",
  agreementExecuted: "",
  lc: "",
  bg: "",
  securityDepoCheqNo: "",
  securityDepoAmt: 0,
  IELinAmt: 0,
  IELRecommendedBy: "",
  IELRecommendedDate: null,
  RELinAmt: 0,
  RELRecommendedBy: "",
  RELRecommendedDate: null,
  reason: "",
  docEvidenceCopy: null
}, v$ = {
  proposerBDName: "",
  pflCoordinator: "",
  recommendedBy: "",
  dispatchLocationPfl: "",
  approvedBy: "",
  relationshipManager: "",
  avgBillingMonthly: 0,
  volumeMonthly: 0,
  customerVerification: "",
  verificationAgency: "",
  validityPeriod: "",
  dueDiligenceDone: "",
  creditWorthinessDue: "",
  keyAccountPersonAssigned: "",
  sinceWhen: "",
  ledgerCreatedDate: null,
  ledgerCreatedBy: "",
  ledgerVerifiedApprovedBy: "",
  additionalNotes: "",
  customerCode: "",
  createdBy: "",
  createdDate: null
}, E$ = {
  organisationName: "",
  customerTypes: u$,
  customerCategory: d$,
  organisationType: "",
  otherType: "",
  customerAddress: ir,
  primaryContactNo: "",
  secondaryContactNo: "",
  emailPrimary: "",
  emailSecondary: "",
  keyMobileNumbers: f$,
  billingDetails: p$,
  deliveryDetails: h$,
  statutoryDetails: m$,
  bankDetails: y$,
  productSpecification: g$,
  paymentTerms: b$,
  officeUseOnly: v$
}, S$ = {
  name: "",
  productOrigin: "",
  brand: "",
  classification: "",
  category: "",
  subcategory: "",
  description: "",
  variety: [],
  count: [],
  size: [],
  uom: "",
  packingType: "",
  shelfLife: 0,
  storageTemp: 0,
  qualityParameters: [{ name: "", type: "good" }],
  image: null
}, he = {
  IS_STRING: /^[a-zA-Z ]+$/,
  IS_VEHICLE_NO: /^[a-zA-Z]{2}[- ]?[0-9]{1,2}[- ]?[a-zA-Z]{1,2}[- ]?[0-9]{4}$/,
  IS_NUMBER: /^\d+(\.\d+)?$/,
  CONTACT_NO: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/
}, hr = Ae().shape({
  address1: _().required("Address Line 1 is required"),
  address2: _().nullable(),
  location: _().required("Location is required"),
  city: _().required("City is required").matches(he.IS_STRING, "City name should only contains alphabets."),
  state: _().required("State is required").matches(he.IS_STRING, "State name should only contains alphabets."),
  pincode: _().required("Pincode is required").matches(he.PINCODE, "Pincode must be exactly 6 digits")
}), Dn = _().test("is-future-or-today", "Date must be today or in the future", (e) => {
  if (!e)
    return !0;
  const t = new Date(e), r = /* @__PURE__ */ new Date();
  return t.setHours(0, 0, 0, 0), r.setHours(0, 0, 0, 0), t >= r;
}), T$ = Ae().shape({
  companyName: _().required("Party Name is required"),
  category: _().required("Please select category of vendor"),
  subcategory: _().required("Please select subcategory of vendor"),
  officeAddress: hr,
  officeContactNo: _().required("Please enter contact number.").matches(he.CONTACT_NO, "Contact number must be 10 digits"),
  officeEmail: _().nullable().email("Please enter valid email"),
  mainProduct: _().nullable().matches(he.IS_STRING, "Product name should only include alphabets."),
  dispatchCenter: _().nullable().matches(he.IS_STRING, "Please add valid location of dispatch center"),
  warehouseLocations: _().nullable().matches(he.IS_STRING, "Please add valid location of warehouse location"),
  packingCenterLocation: _().nullable().matches(he.IS_STRING, "Please add valid location packing center"),
  proposedPaymentTerms: _().nullable(),
  creditTerms: _().nullable(),
  ifGstnCopy: Oo().required(),
  gstn: _().when("ifGstnCopy", {
    is: !0,
    then: (e) => e.required("GSTN number required if GSTN is available."),
    otherwise: (e) => e.nullable()
  }),
  gstnCopy: Co().when("ifGstnCopy", {
    is: !0,
    then: (e) => e.required("GSTN copy required if GSTN is available."),
    otherwise: (e) => e.nullable()
  }),
  ifPanCardCopy: Oo().required(),
  panNo: _().when("ifPanCardCopy", {
    is: !0,
    then: (e) => e.required("PAN number required if PAN is available."),
    otherwise: (e) => e.nullable()
  }),
  panCardCopy: Co().when("ifPanCardCopy", {
    is: !0,
    then: (e) => e.required("PAN card copy required if PAN is available."),
    otherwise: (e) => e.nullable()
  }),
  ifMsmeCopy: Oo().required(),
  msmeNo: _().when("ifMsmeCopy", {
    is: !0,
    then: (e) => e.required("MSME number required if MSME is available."),
    otherwise: (e) => e.nullable()
  }),
  msmeCopy: Co().when("ifMsmeCopy", {
    is: !0,
    then: (e) => e.required("MSME copy required if MSME is available."),
    otherwise: (e) => e.nullable()
  }),
  vendorSaleInfo: Ae().shape({
    contactFName: _().required("Contact person first name is required.").matches(he.IS_STRING, "Name should include only alphabets."),
    contactMName: _().nullable().matches(he.IS_STRING, "Name should include only alphabets."),
    contactLName: _().required("Contact person last name is required.").matches(he.IS_STRING, "Name should include only alphabets."),
    directContactNumber: _().required("Contact person phone number is required").matches(he.CONTACT_NO, "Please enter a valid contact number."),
    mobileNumber: _().nullable().matches(he.CONTACT_NO, "Please enter a valid contact number."),
    email: _().nullable().email("Please enter valid email")
  }),
  vendorBankDetails: Ae().shape({
    beneficiaryFName: _().required("Beneficiary person first name is required.").matches(he.IS_STRING, "Name should include only alphabets."),
    beneficiaryMName: _().nullable().matches(he.IS_STRING, "Name should include only alphabets."),
    beneficiaryLName: _().required("Beneficiary person last name is required.").matches(he.IS_STRING, "Name should include only alphabets."),
    bankName: _().required("Bank name is required.").matches(he.IS_STRING, "Bank name should include only alphabets."),
    branchAddress: hr,
    typeOfAcc: _().required("Account type is required."),
    ifscCode: _().required("IFSC code of bank is required."),
    swiftNo: _().nullable(),
    invoiceCurrency: _().nullable(),
    cancelledChequeCopy: _().nullable()
  }),
  ref1FName: _().required("Reference person first name is required.").matches(he.IS_STRING, "Name should include only alphabets."),
  ref1MName: _().nullable().matches(he.IS_STRING, "Name should include only alphabets."),
  ref1LName: _().required("Reference person first name is required.").matches(he.IS_STRING, "Name should include only alphabets."),
  ref1PrimaryCNumb: _().required("Contact number is required").matches(he.CONTACT_NO, "Please enter valid contact number."),
  ref1AltrCNumb: _().nullable().matches(he.CONTACT_NO, "Please enter valid contact number."),
  ref1Address: hr,
  ref1Email: _().nullable().email("Please enter valid email."),
  ref2FName: _().nullable().matches(he.IS_STRING, "Name should include only alphabets."),
  ref2MName: _().nullable().matches(he.IS_STRING, "Name should include only alphabets."),
  ref2LName: _().nullable().matches(he.IS_STRING, "Name should include only alphabets."),
  ref2PrimaryCNumb: _().nullable().matches(he.CONTACT_NO, "Please enter valid contact number."),
  ref2AltrCNumb: _().nullable().matches(he.CONTACT_NO, "Please enter valid contact number."),
  // ref2Address: initValAddress,
  ref2Email: _().nullable().email("Please enter valid email.")
}), C$ = /^[6-9]\d{9}$/, O$ = _().matches(C$, "Please enter a valid 10-digit contact number"), x$ = Ae().shape({
  farmerfName: _().required("First Name is required").matches(he.IS_STRING, "Name should only contains alphabets."),
  farmermName: _().nullable().matches(he.IS_STRING, "Name should only contains alphabets."),
  farmerlName: _().required("Last Name is required").matches(he.IS_STRING, "Name should only contains alphabets."),
  residensialAddress: hr,
  primaryMobileNo: O$,
  secondaryMobileNo: _().nullable().matches(he.CONTACT_NO, "Please enter valid contact number."),
  email: _().email("Please enter valid emial"),
  dob: Vr().required("Date of Birth is required"),
  farmAddress: hr,
  totalLandArea: Ue().nullable().positive("Area cannot be negative."),
  cultivationArea: Ue().nullable().positive("Area cannot be negative."),
  crops: io(
    Ae({
      crop: _().required("Crop name is required"),
      noOfPlants: Ue().nullable().positive("Number of plants cannot be negative"),
      pruningDate: Vr().required("Pruning date is required."),
      expectedHarvestDate: Vr().required("Expected harvest date is required."),
      expectedQuantityInTonnes: Ue().required("Expected quantity in metric tones are required.").positive("Quantity cannot be negative")
    }).required("At least one crop is required")
  )
});
Ae().shape({
  companyName: _().required("Company Name is required"),
  // purchaseLocation: yup.string().required('Purchase Location is required'),
  // purchaseForSalesLocation: yup.string().required('Purchase for sales location is required'),
  selectedParty: _().required("Please select one option"),
  rfpaProducts: io().of(
    Ae().shape({
      product: _().required("Product is required"),
      grade: _().required("Grade is required"),
      quantity: Ue().required("Quantity is required").positive("Quantity must be positive"),
      unitPrice: Ue().required("Unit Price is required").positive("Unit Price must be positive"),
      purchaseDate: Dn.required("Purchase Date is required"),
      dispatchDate: Dn.required("Dispatch Date is required"),
      deliveryDate: Dn.required("Delivery Date is required"),
      deliveryLocation: _().required("Delivery Location is required"),
      expectedHarvestDate: Vr().nullable()
    })
  ).required("RFPA Products are required"),
  paymentInfo: Ae().shape({
    paymentMode: _().required("Payment Mode is required"),
    advancePaidAmt: Ue().nullable().positive("Amount must be positive"),
    creditPeriod: Ue().min(0, "Credit Period must be positive").required("Credit Period is required"),
    paymentDate: Dn.required("Payment Date is required"),
    paymentTerms: Ue().required("Payment Terms is required").positive("Payment Terms must be positive")
  }).required("Payment Information is required"),
  deliveryReceivingPerson: _().matches(he.IS_STRING, "Please enter a valid name").required("Delivery Receiving Person is required")
});
Ae().shape({
  loadingLocation: _().required("Loading location is required."),
  lotNo: _().required("Lot number is required.")
});
Ae().shape({
  // locationType: "cc" | "dc",
  // grnType: "transfer" | "purchase",
  // purchaseType: "fixed price sales" | "consignment sales/bikri" | "mgp sales";
  purchaseType: _().required("Type of purchase is required"),
  companyName: _().required("Company Name is required"),
  purchaseInstructionsBy: _().required("Requesting person name required").matches(he.IS_STRING, "Name should only contain alphabets."),
  // purchaseLocation: yup.string().required('Purchase Location is required'),
  // purchaseForSalesLocation: yup.string().required('Purchase For Which is required'),
  source: _().required("Source is required"),
  selectedParty: _().required("Please select one option"),
  grnProducts: io().of(
    Ae().shape({
      productName: _().required("Select at least one product"),
      quantity: Ue().required("Quantity is required").positive("Quantity can't be negative"),
      unitPrice: Ue().required("Unit price is required").positive("Price can't be negative"),
      grossWeight: Ue().required("Gross weight is required").positive("Weight can't be negative"),
      packingMaterialWeight: Ue().required("Packing material weight is required").positive("Weight can't be negative"),
      purchaseDate: Dn.required("Purchase Date is required"),
      dispatchDate: Dn.required("Dispatch Date is required"),
      deliveryDate: Dn.required("Delivery Date is required"),
      deliveryLocation: _().required("Delivery Location is required"),
      expectedHarvestDate: Vr().nullable(),
      rtv: Oo().required("Select is product rtv or not")
    })
  ).required("At lease one product required"),
  freight: Ue().nullable().positive("Amount can't be negative"),
  otherCharges: Ue().nullable().positive("Amount can't be negative"),
  purchasedBy: _().nullable().matches(he.IS_STRING, "Name should only contain alphabets."),
  receivedThrough: _().nullable().matches(he.IS_STRING, "Name should only contain alphabets."),
  securityPerson: _().nullable().matches(he.IS_STRING, "Name should only contain alphabets."),
  vehicleNo: _().nullable().matches(he.IS_VEHICLE_NO, "Please enter valid vehicle number."),
  cratesIn: Ue().nullable().positive("Count of crates can't be negative"),
  deliveryReceivingPerson: _().required("Delivery receiving person name is required").matches(he.IS_STRING, "Name should only contain alphabets."),
  rmn: _().required("RM name is required").matches(he.IS_STRING, "Name should only contain alphabets.")
});
Ae().shape({
  companyName: _().required("Company name is required"),
  debitCreditTo: _().required("Name required for debit / credit to."),
  payReceivedFrom: _().required("Name required for pay / received from"),
  location: _().required("Location is required"),
  noOfLabours: Ue().required("Number of labour is required").positive("Number of labours cannot be negative"),
  ratePerLabour: Ue().required("Rate is required").positive("Rate cannot be negative"),
  loadingDate: Vr().required("Loading date is required"),
  contactNo: _().required("Contact number is required.").matches(he.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: _().nullable().matches(he.IS_NUMBER, "Please enter valid contact number."),
  paymentMode: _().required("Payment mode is required"),
  receiverName: _().required("Receiver name is required").matches(he.IS_STRING, "Name should only contains alphabets.")
});
Ae().shape({
  companyName: _().required("Company name is required"),
  debitCreditTo: _().required("Name required for debit / credit to."),
  payReceivedFrom: _().required("Name required for pay / received from"),
  location: _().required("Location is required"),
  paymentMode: _().required("Payment mode is required"),
  receiverName: _().required("Receiver name is required").matches(he.IS_STRING, "Name should only contains alphabets."),
  particulars: io(
    Ae({
      description: _().required("Description is required").min(5, "Minimum 5 characters required"),
      amt: Ue().required("Amount is required").positive("Amount cannot be negative")
    })
  )
});
Ae().shape({
  companyName: _().required("Company name is required"),
  debitCreditTo: _().required("Name required for debit / credit to."),
  payReceivedFrom: _().required("Name required for pay / received from"),
  location: _().required("Location is required"),
  sellerName: _().required("Seller name is required").matches(he.IS_STRING, "Name should only contains alphabets."),
  address: hr,
  contactNo: _().required("Contact number is required.").matches(he.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: _().nullable().matches(he.CONTACT_NO, "Please enter valid contact number."),
  paymentMode: _().required("Payment mode is required"),
  receiverName: _().required("Receiver name is required").matches(he.IS_STRING, "Name should only contains alphabets."),
  materials: io().of(
    Ae().shape({
      itemName: _().required("Item name is required"),
      itemUom: _().required("UOM is required"),
      itemQty: Ue().required("Quantity is required").positive("Quantity cannot be negative"),
      rate: Ue().required("Quantity is required").positive("Quantity cannot be negative")
    })
  )
});
Ae().shape({
  companyName: _().required("Company name is required"),
  debitCreditTo: _().required("Name required for debit / credit to."),
  payReceivedFrom: _().required("Name required for pay / received from"),
  location: _().required("Location is required"),
  driverName: _().required("Driver name is required").matches(he.IS_STRING, "Name should only contain alphabets"),
  contactNo: _().required("Contact number is required").matches(he.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: _().nullable().matches(he.CONTACT_NO, "Please enter valid contact number."),
  vehicleNo: _().required("Vehicle number is required"),
  dispatchLocation: _().required("Dispatch location is required"),
  destinationLocation: _().required("Destination location is required"),
  paymentMode: _().required("Payment mode is required"),
  receiverName: _().required("Receiver name is required").matches(he.IS_STRING, "Name should only contain alphabets")
});
Ae().shape({
  deliveryCType: _().required("Challan type is required"),
  companyName: _().required("Company name is required"),
  partyName: _().required("Party name is required"),
  fromLocation: _().required("Location is required"),
  toLocation: _().notRequired(),
  driverName: _().required("Driver name is required").matches(he.IS_STRING, "Name should only contain alphabets."),
  contactNo: _().required("Driver contact number is required.").matches(he.CONTACT_NO, "Please enter valid contact number."),
  altContactNo: _().nullable().matches(he.CONTACT_NO, "Please enter valid contact number."),
  vehicleNo: _().required("Vehicle number is required").matches(he.IS_VEHICLE_NO, "Please enter valid vehicle number."),
  receiverName: _().required("Receiver name is required").matches(he.IS_STRING, "Name should only contain alphabets."),
  rmn: _().required("RM name is required").matches(he.IS_STRING, "Name should only contain alphabets."),
  items: io().of(
    Ae().shape({
      productName: _().required("Product name is required"),
      uom: _().required("UOM is required"),
      quantity: Ue().required("Quantity is required").positive("Quantity cannot be negative"),
      unitPrice: Ue().required("Unit price is required").positive("Price cannot be negative"),
      grossWeight: Ue().required("Gross weight is required").positive("Weight cannot be negative"),
      packingMaterialWeight: Ue().required("Packing material weight is required").positive("Weight cannot be negative")
    })
  ),
  anyAttachment: Co().nullable().test("fileFormat", "Invalid image format (only jpg, jpeg, png allowed)", (e) => {
    if (!e) return !0;
    const t = e;
    return ["image/jpeg", "image/png", "image/jpg"].includes(t.type);
  }).test("fileSize", "Image is too large (max 1MB)", (e) => {
    if (!e) return !0;
    const t = e, r = 1 * 1024 * 1024;
    return t.size <= r;
  })
});
Ae().shape({
  paymentDate: Vr().required("Payment Date is required"),
  partyName: _().required("Party Name is required"),
  amount: Ue().required("Amount is required").positive("Amount must be positive"),
  bankAccNo: _().required("Bank Account Number is required"),
  ifscCode: _().required("IFSC Code is required"),
  paymentMode: _().required("Payment Mode is required"),
  typesOfTransaction: _().required("Types of Transaction is required"),
  otherTransaction: _().required("Other Transaction is required"),
  vehicleNo: _().required("Vehicle No is required"),
  placeOfPurchase: _().required("Place of Purchase is required"),
  contactpersonRec: _().required("Contact Person Receiving is required"),
  contactpersonSen: _().required("Contact Person Sending is required"),
  costCenter: _().required("Cost Center is required"),
  kycByEmail: _().required("KYC by Email is required"),
  remark: _().required("Remark is required")
});
My.withTypes();
ms({
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
const w$ = {
  rfpaData: rg,
  dealSlipData: ng,
  grnData: og,
  mc_voucher: ig,
  lp_voucher: sg,
  tp_voucher: lg,
  pmp_voucher: ag,
  delivery_challan: cg,
  payment_request: ug
}, hd = {
  //Admin
  ADMIN: "/admin",
  //Dashboard
  DASHBOARD_ADMIN: "/admin/dashboard",
  //Users
  USERS: "/admin/users",
  //Employee
  EMPLOYEE: "/admin/users/employee",
  GET_ALL_EMPLOYEES: "/admin/users/employee/getall",
  CREATE_EMPLOYEE: "/admin/users/employee/create",
  VIEW_EMPLOYEE: "/admin/users/employee/view",
  EDIT_EMPLOYEE: "/admin/users/employee/update",
  //Customer
  CUSTOMER: "/admin/users/customer",
  GET_ALL_CUSTOMERS: "/admin/users/customers/getall",
  VIEW_CUSTOMER: "/admin/users/customer/view",
  EDIT_CUSTOMER: "/admin/users/customer/update",
  //Vendor
  VENDOR: "/admin/users/vendor",
  GET_ALL_VENDORS: "/admin/users/vendors/getall",
  VIEW_VENDOR: "/admin/users/vendor/view",
  EDIT_VENDOR: "/admin/users/vendor/update",
  GET_ALL_VENDORS_CAT: "/admin/users/vendors/vendor-categories/getall",
  CREATE_VENDORS_CAT: "/admin/users/vendors/category/create",
  UPDATE_VENDORS_CAT: "/admin/users/vendors/category/update",
  GET_ALL_VENDORS_SUBCAT: "/admin/users/vendors/vendor-subcategories/getall",
  CREATE_VENDORS_SUBCAT: "/admin/users/vendors/subcategory/create",
  UPDATE_VENDORS_SUBCAT: "/admin/users/vendors/subcategory/update",
  //Farmer
  FARMER: "/admin/users/farmer",
  GET_ALL_FARMERS: "/admin/users/farmers/getall",
  VIEW_FARMER: "/admin/users/farmer/view",
  EDIT_FARMER: "/admin/users/farmer/update",
  //Products
  PRODUCTS: "/admin/products",
  GET_ALL_PRODUCTS: "/admin/products/products/getall",
  GET_A_PRODUCT: "/admin/products/products/view",
  UPDATE_PRODUCT: "/admin/products/product/update",
  GET_ALL_PRODUCT_CLASS: "/admin/products/products-classification/getall",
  GET_A_PRODUCT_CLASS: "/admin/products/products-classification/view",
  CREATE_PRODUCT_CLASS: "/admin/products/products-classification/create",
  UPDATE_PRODUCT_CLASS: "/admin/products/products-classification/update",
  GET_ALL_PRODUCT_CAT: "/admin/products/products-category/getall",
  GET_A_PRODUCT_CAT: "/admin/products/products-category/view",
  CREATE_PRODUCT_CAT: "/admin/products/products-category/create",
  UPDATE_PRODUCT_CAT: "/admin/products/products-category/update",
  GET_ALL_PRODUCT_SUBCAT: "/admin/products/products_subcategory/getall",
  GET_A_PRODUCT_SUBCAT: "/admin/products/products_subcategory/view",
  CREATE_PRODUCT_SUBCAT: "/admin/products/products_subcategory/create",
  UPDATE_PRODUCT_SUBCAT: "/admin/products/products_subcategory/update",
  //UOMs
  UOM: "/admin/uom",
  GET_ALL_UOMs: "/admin/uom/getall",
  CREATE_UOM: "/admin/uom/create",
  UPDATE_UOM: "/admin/uom/edit",
  VIEW_UOM: "/admin/uom/view",
  GET_ALL_UOMs_CONV_MATRIX: "/admin/uom/uom-conversion-matrix/getall",
  CREATE_UOMs_CONV_MATRIX: "/admin/uom/uom-conversion-matrix/create",
  UPDATE_UOMs_CONV_MATRIX: "/admin/uom/uom-conversion-matrix/edit",
  VIEW_UOMs_CONV_MATRIX: "/admin/uom/uom-conversion-matrix/view",
  //Locations
  LOCATIONS: "/admin/locations",
  LOCATIONS_REGISTERED_OFFICE: "/admin/locations/registered-office/getall",
  LOCATIONS_CORPORATE_OFFICE: "/admin/locations/corporate-office/getall",
  CREATE_REGISTERED_OFFICE: "/admin/locations/registered-office/create",
  CREATE_CORPORATE_OFFICE: "/admin/locations/corporate-office/create",
  EDIT_REGISTERED_OFFICE: "/admin/locations/registered-office/edit",
  EDIT_CORPORATE_OFFICE: "/admin/locations/corporate-office/edit",
  VIEW_REGISTERED_OFFICE: "/admin/locations/registered-office/view",
  VIEW_CORPORATE_OFFICE: "/admin/locations/corporate-office/view",
  GET_REGISTERED_OFFICE: "/admin/locations/registered-office/getall",
  GET_CORPORATE_OFFICE: "/admin/locations/corporate-office/getall",
  GET_ALL_OFFICES: "/admin/locations/office/getall",
  CREATE_OFFICE: "/admin/locations/office/create",
  EDIT_OFFICE: "/admin/locations/office/edit",
  VIEW_OFFICE: "/admin/locations/office/view",
  //Branches
  BRANCHES: "/admin/locations/branches",
  GET_ALL_CC: "/admin/locations/branches/collection-center/getall",
  GET_ALL_DC: "/admin/locations/branches/distribution-center/getall",
  GET_ALL_SEASONAL_CC: "/admin/locations/branches/seasonal-collection-center/getall",
  GET_ALL_WAREHOUSES_WH: "/admin/locations/branches/warehouses/getall",
  GET_ALL_BRANCHES: "/admin/locations/branches/getall",
  CREATE_BRANCHES: "/admin/locations/branches/create",
  EDIT_BRANCHES: "/admin/locations/branches/edit",
  VIEW_BRANCHES: "/admin/locations/branches/view",
  //Registeration
  CREATE_CUSTOMER: "/create/customers",
  CREATE_VENDOR: "/create/vendor",
  CREATE_FARMER: "/create/farmer",
  CREATE_PRODUCT: "/create/product"
}, R$ = {
  openDrawer: !1,
  openFor: "create",
  dataId: ""
}, _$ = it({
  name: "formContainer",
  initialState: R$,
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
}), fb = _$.reducer, N$ = {
  customers: []
}, A$ = it({
  name: "customerData",
  initialState: N$,
  reducers: {
    setCustomerData: (e, t) => {
      e.customers = t.payload;
    }
  }
}), pb = A$.reducer, P$ = {
  allVendors: [],
  allVendorssPartialData: [],
  selectedVendorPartialData: null
}, I$ = it({
  name: "vendorData",
  initialState: P$,
  reducers: {
    setVendorData: (e, t) => {
      e.allVendors = t.payload;
    },
    setAllVendorsPartialData: (e, t) => {
      e.allVendorssPartialData = t.payload;
    },
    setSelectedVendorPartialData: (e, t) => {
      e.selectedVendorPartialData = t.payload;
    }
  }
}), hb = I$.reducer, D$ = {
  employees: []
}, $$ = it({
  name: "employeeData",
  initialState: D$,
  reducers: {
    setEmployeeData: (e, t) => {
      e.employees = t.payload;
    }
  }
}), mb = $$.reducer, k$ = {
  allFarmers: [],
  allFarmersPartialData: [],
  selectedFarmerPartialData: null
}, M$ = it({
  name: "farmerData",
  initialState: k$,
  reducers: {
    setFarmerData: (e, t) => {
      e.allFarmers = t.payload;
    },
    setAllFarmersPartialData: (e, t) => {
      e.allFarmersPartialData = t.payload;
    },
    setSelectedFarmerPartialData: (e, t) => {
      e.selectedFarmerPartialData = t.payload;
    }
  }
}), yb = M$.reducer, F$ = {
  allProducts: [],
  selectedProduct: void 0,
  productCat: [],
  productSubCat: [],
  productPartialData: []
}, L$ = it({
  name: "productData",
  initialState: F$,
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
    },
    addProductPartialData: (e, t) => {
      console.log("payload", t.payload), t.payload !== null && e.productPartialData.push(t.payload), console.log("state:", e.productPartialData);
    },
    removeProductPartialData: (e, t) => {
      e.productPartialData.splice(t.payload, 1);
    }
  }
}), gb = L$.reducer, q$ = {
  allUOMs: [],
  selectedUOM: void 0,
  allUOMConvMat: [],
  selectedUOMConvMat: void 0
}, j$ = it({
  name: "uomData",
  initialState: q$,
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
}), bb = j$.reducer, be = {
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
var vb = /* @__PURE__ */ ((e) => (e[e["collection-center"] = 0] = "collection-center", e[e["distribution-center"] = 1] = "distribution-center", e[e["seasonal-collection-center"] = 2] = "seasonal-collection-center", e[e.warehouse = 3] = "warehouse", e))(vb || {}), Eb = /* @__PURE__ */ ((e) => (e[e["registered-office"] = 0] = "registered-office", e[e["corporate-office"] = 1] = "corporate-office", e))(Eb || {});
class B$ extends tt {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProduct(t) {
    const r = be.CREATE_PRODUCTS;
    return this.postFormData(r, t);
  }
  getAllProducts() {
    const t = be.GET_ALL_PRODUCTS;
    return this.get(t);
  }
  getProductsPatrialData() {
    const t = be.GET_PRODUCTS_PARTIAL;
    return this.get(t);
  }
  getProductById(t) {
    const r = `${be.GET_A_PRODUCTS}/${t}`;
    return this.get(r);
  }
  updateProduct(t, r) {
    const n = `${be.UPDATE_PRODUCTS}/${t}`;
    return this.patchFormData(n, r);
  }
  deleteProductById(t) {
    const r = `${be.DELETE_PRODUCT}/${t}`;
    return this.delete(r);
  }
}
class V$ extends tt {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductClassification(t) {
    const r = be.CREATE_PRODUCT_CLASSIFICATION;
    return this.post(r, t);
  }
  getAllProductClassifications() {
    const t = be.GET_ALL_PRODUCT_CLASSIFICATION;
    return this.get(t);
  }
  getProductClassificationById(t) {
    const r = `${be.GET_A_PRODUCT_CLASSIFICATION}/${t}`;
    return this.get(r);
  }
  updateProductClassification(t, r) {
    const n = `${be.UPDATE_PRODUCT_CLASSIFICATION}/${t}`;
    return this.patch(n, r);
  }
  deleteProductClassificationById(t) {
    const r = `${be.DELETE_PRODUCT_CLASSIFICATION}/${t}`;
    return this.delete(r);
  }
}
class z$ extends tt {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductCategory(t) {
    const r = be.CREATE_PRODUCT_CATEGORY;
    return this.post(r, t);
  }
  getAllProductCategories() {
    const t = be.GET_ALL_PRODUCT_CATEGORY;
    return this.get(t);
  }
  getProductCategoryById(t) {
    const r = `${be.GET_A_PRODUCT_CATEGORY}/${t}`;
    return this.get(r);
  }
  updateProductCategory(t, r) {
    const n = `${be.UPDATE_PRODUCT_CATEGORY}/${t}`;
    return this.patch(n, r);
  }
  deleteProductCategoryById(t) {
    const r = `${be.DELETE_PRODUCT_CATEGORY}/${t}`;
    return this.delete(r);
  }
}
class U$ extends tt {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createProductSubcategory(t) {
    const r = be.CREATE_PRODUCT_SUBCATEGORY;
    return this.post(r, t);
  }
  getAllProductSubcategories() {
    const t = be.GET_ALL_PRODUCT_SUBCATEGORY;
    return this.get(t);
  }
  getProductSubcategoryById(t) {
    const r = `${be.GET_A_PRODUCT_SUBCATEGORY}/${t}`;
    return this.get(r);
  }
  updateProductSubcategory(t, r) {
    const n = `${be.UPDATE_PRODUCT_SUBCATEGORY}/${t}`;
    return this.patch(n, r);
  }
  deleteProductSubcategoryById(t) {
    const r = `${be.DELETE_PRODUCT_SUBCATEGORY}/${t}`;
    return this.delete(r);
  }
}
class G$ extends tt {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createUOM(t) {
    const r = be.CREATE_UOM;
    return this.post(r, t);
  }
  getAllUOMs() {
    const t = be.GET_ALL_UOM;
    return this.get(t);
  }
  getUOMById(t) {
    const r = `${be.GET_A_UOM}/${t}`;
    return this.get(r);
  }
  updateUOM(t, r) {
    const n = `${be.UPDATE_UOM}/${t}`;
    return this.patch(n, r);
  }
  deleteUOMById(t) {
    const r = `${be.DELETE_UOM}/${t}`;
    return this.delete(r);
  }
}
class W$ extends tt {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendor(t) {
    const r = be.CREATE_VENDOR;
    return this.postFormData(r, t);
  }
  getAllVendors() {
    const t = be.GET_ALL_VENDORS;
    return this.get(t);
  }
  getVendorById(t) {
    const r = `${be.GET_A_VENDOR}/${t}`;
    return this.get(r);
  }
  updateVendor(t, r) {
    const n = `${be.UPDATE_VENDOR}/${t}`;
    return this.patchFormData(n, r);
  }
  deleteVendorById(t) {
    const r = `${be.DELETE_VENDOR}/${t}`;
    return this.delete(r);
  }
}
class H$ extends tt {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendorCategory(t) {
    const r = be.CREATE_VENDOR_CAT;
    return this.post(r, t);
  }
  getAllVendorCategories() {
    const t = be.GET_ALL_VENDOR_CAT;
    return this.get(t);
  }
  getVendorCategoryById(t) {
    const r = `${be.GET_A_VENDOR_CAT}/${t}`;
    return this.get(r);
  }
  updateVendorCategory(t, r) {
    const n = `${be.UPDATE_VENDOR_CAT}/${t}`;
    return this.patch(n, r);
  }
  deleteProdctCategoryById(t) {
    const r = `${be.DELETE_VENDOR_CAT}/${t}`;
    return this.delete(r);
  }
}
class K$ extends tt {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createVendorSubcategory(t) {
    const r = be.CREATE_VENDOR_SUBCAT;
    return this.post(r, t);
  }
  getAllVendorSubcategories() {
    const t = be.GET_ALL_VENDOR_SUBCAT;
    return this.get(t);
  }
  getVendorSubcategoryById(t) {
    const r = `${be.GET_A_VENDOR_SUBCAT}/${t}`;
    return this.get(r);
  }
  getVendorSubcategoryByQuery(t) {
    const r = `${be.GET_VENDOR_SUBCAT_BY_QUERY}?search=${t}`;
    return this.get(r);
  }
  updateVendorSubcategory(t, r) {
    const n = `${be.UPDATE_VENDOR_SUBCAT}/${t}`;
    return this.patch(n, r);
  }
  deleteProdctSubcategoryById(t) {
    const r = `${be.DELETE_VENDOR_SUBCAT}/${t}`;
    return this.delete(r);
  }
}
class Y$ extends tt {
  static getInstance() {
    return this._instance || (this._instance = new this());
  }
  createFarmer(t) {
    const r = be.CREATE_FARMER;
    return this.postFormData(r, t);
  }
  getAllFarmers() {
    const t = be.GET_ALL_FARMERS;
    return this.get(t);
  }
  getFarmerById(t) {
    const r = `${be.GET_A_FARMER}/${t}`;
    return this.get(r);
  }
  updateFarmer(t, r) {
    const n = `${be.UPDATE_FARMER}/${t}`;
    return this.patchFormData(n, r);
  }
  deleteFarmerById(t) {
    const r = `${be.DELETE_FARMER}/${t}`;
    return this.delete(r);
  }
}
const Q$ = {
  offices: [],
  officeType: Eb["registered-office"],
  selectedOffices: void 0
}, X$ = it({
  name: "officesData",
  initialState: Q$,
  reducers: {
    setOfficesData: (e, t) => {
      e.offices = t.payload;
    },
    setOfficeType: (e, t) => {
      e.officeType = t.payload;
    }
  }
}), Sb = X$.reducer, J$ = {
  branches: [],
  BranchType: vb["collection-center"],
  selectedBranches: void 0
}, Z$ = it({
  name: "branchesData",
  initialState: J$,
  reducers: {
    setBranchesData: (e, t) => {
      e.branches = t.payload;
    },
    setBranchType: (e, t) => {
      e.BranchType = t.payload;
    }
  }
}), Tb = Z$.reducer, ek = {
  open: !1,
  message: "",
  severity: "success"
}, tk = it({
  name: "alertSnackbar",
  initialState: ek,
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
}), Cb = tk.reducer, rk = {
  allVendorCategories: [],
  selectedVendorCategory: null
}, nk = it({
  name: "vendorCategoryData",
  initialState: rk,
  reducers: {
    setAllVendorCategories: (e, t) => {
      e.allVendorCategories = t.payload;
    },
    setSelectedVendorCategory: (e, t) => {
      e.selectedVendorCategory = t.payload;
    }
  }
}), Ob = nk.reducer;
ed({
  reducer: {
    formContainer: fb,
    customerData: pb,
    vendorData: hb,
    vendorCategoryData: Ob,
    employeeData: mb,
    farmerData: yb,
    productData: gb,
    uomData: bb,
    officesData: Sb,
    branchesData: Tb,
    alertSnackbar: Cb
  }
});
const ok = {
  formContainer: fb,
  customerData: pb,
  vendorData: hb,
  vendorCategoryData: Ob,
  employeeData: mb,
  farmerData: yb,
  productData: gb,
  uomData: bb,
  officesData: Sb,
  branchesData: Tb,
  alertSnackbar: Cb
};
Ae().shape({
  firstName: _().required("First name is required").min(3, "First name should be more than 3 characters"),
  middleName: _().required("Middle name is required").min(3, "Middle name should be more than 3 characters"),
  lastName: _().required("Last name is required").min(3, "Last name should be more than 3 characters"),
  designation: _().required("Designation is required").min(5, "Incorrect Designation"),
  username: _().required("Username is required").min(5, "username should be more than 5 characters").max(12, "username should be less than 12 characters"),
  phoneNumber: _().required("Mobile number is required").length(10, "Mobile number must be 10 digits").matches(/^[0-9]+$/, "Mobile number must contain only numbers"),
  cugNo: _().required("CUG number is required").length(10, "CUG number must be 10 digits").matches(/^[0-9]+$/, "CUG number must contain only numbers"),
  email: _().required("Email is required").email("Invalid email format"),
  companyEmail: _().required("Company email is required").email("Invalid email format"),
  address: hr,
  joiningDate: _().required("Joining date is required"),
  relocationDate: _().optional(),
  relocationPlace: _().optional(),
  recommendedBy: _().optional(),
  role: _().required("Role is required"),
  reportingAuthorityFunctional: _().optional(),
  reportingAuthorityAdministrative: _().optional()
});
Ae().shape({
  name: _().required("Name is required").min(3, "Product name should be more than 3 characters"),
  image: Co().nullable().required("Image is required").test("fileFormat", "Invalid image format (only jpg, jpeg, png allowed)", (e) => {
    if (!e) return !0;
    const t = e;
    return ["image/jpeg", "image/png", "image/jpg"].includes(t.type);
  }).test("fileSize", "Image is too large (max 1MB)", (e) => {
    if (!e) return !0;
    const t = e, r = 1 * 1024 * 1024;
    return t.size <= r;
  }),
  returnable: Oo().required("Returnable is required"),
  description: _().required("Description is required"),
  product_code: _().required("Product code is required"),
  category: _().required("Category is required"),
  subcategory: _().required("Subcategory is required"),
  classification: _().required("Classification is required"),
  uom: _().required("UOM is required")
});
Ae().shape({
  name: _().required("Product classification name is required.")
});
Ae().shape({
  name: _().required("Product category name is required"),
  productClassification: _().required("Related product classification name is required")
});
Ae().shape({
  name: _().required("Product subcategory name is required"),
  category: _().required("Related product category name is required")
});
Ae().shape({
  name: _().required("Office name is required"),
  address: hr,
  contactNumber: _().required("Contact number is required"),
  officeEmail: _().required("Office email is required").email("Invalid email format"),
  notes: _().optional()
});
Ae().shape({
  organisationName: _().required("Organisation Name is required"),
  // customerTypes: customerTypesSchema,
  // customerCategory: customerCategorySchema,
  organisationType: _().required("Organisation Type is required"),
  otherType: _(),
  // customerAddress: addressSchema,
  primaryContactNo: _().required("Primary Contact No. is required").matches(/^\d{10}$/, "Contact number must be 10 digits"),
  secondaryContactNo: _().matches(/^\d{10}$/, "Contact number must be 10 digits"),
  emailPrimary: _().email("Invalid email format").required("Primary Email is required"),
  emailSecondary: _().email("Invalid email format")
  //     keyMobileNumbers: keyMobileNumbersSchema,
  //     billingDetails: billingDetailsSchema,
  //     deliveryDetails: deliveryDetailsSchema,
  //     statutoryDetails: statutoryDetailsSchema,
  //     bankDetails: bankDetailsSchema,
  //     productSpecification: Yup.array().of(productSpecificationSchema),
  //     paymentTerms: paymentTermsSchema,
  //     officeUseOnly: officeUseOnlySchema,
});
Ae().shape({
  companyName: _().required("Party Name is required"),
  category: _().required("Please select category of vendor"),
  subcategory: _().required("Please select subcategory of vendor"),
  inFandVBusinessSince: _(),
  dateOfIncorporation: _(),
  officeAddress: hr,
  officeContactNo: _().matches(/^\d{10}$/, "Contact number must be 10 digits")
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
Ae().shape({
  farmerfName: _().required("First Name is required").min(3, "Minimum 3 characters required."),
  farmermName: _().notRequired(),
  farmerlName: _().required("Last Name is required").min(3, "Minimum 3 characters required."),
  residensialAddress: hr,
  farmAddress: hr,
  primaryMobileNo: _().required("Contact No is required")
});
Ae().shape({
  unit: _().required("UOM name is required"),
  abbreviation: _().required("Abbreviation of UOM is required")
});
Ae().shape({
  conversionFactor: Ue().required("Conversion factor is required").positive("Conversion factor cannot be negative."),
  fromUOM: _().required("UOM name is required"),
  toUOM: _().required("UOM name is required")
});
Ae().shape({
  address1: _().required("Address Line 1 is required"),
  address2: _().nullable(),
  location: _().required("Location is required"),
  city: _().required("City is required"),
  state: _().required("State is required"),
  pincode: _().required("Pincode is required").matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
});
ms({
  palette: {
    // primary: {
    //   main: '#008A00',
    //   light: '#befabe',
    // },
    // secondary: {
    //   main: '#2a3eb1',
    //   light: '#3d5afe',
    // },
    primary: {
      main: "#009933",
      light: "#e6ffee",
      dark: "#00cc44",
      contrastText: "#fff"
    },
    secondary: {
      main: "#000",
      light: "#616161"
    }
  }
});
function ik() {
  return ld({
    mutationKey: ["create-product"],
    mutationFn: (e) => B$.getInstance().createProduct(e)
  });
}
function sk() {
  return oi({
    queryKey: ["get-all-product-classifications"],
    queryFn: () => V$.getInstance().getAllProductClassifications()
  });
}
function ak() {
  return oi({
    queryKey: ["get-all-product-categories"],
    queryFn: () => z$.getInstance().getAllProductCategories()
  });
}
function lk() {
  return oi({
    queryKey: ["get-all-product-subcategories"],
    queryFn: () => U$.getInstance().getAllProductSubcategories()
  });
}
function ck() {
  return oi({
    queryKey: ["get-all-uoms"],
    queryFn: () => G$.getInstance().getAllUOMs()
  });
}
function uk() {
  return ld({
    mutationKey: ["create-vendor"],
    mutationFn: (e) => W$.getInstance().createVendor(e)
  });
}
function dk() {
  return oi({
    queryKey: ["get-all-vendor-categories"],
    queryFn: () => H$.getInstance().getAllVendorCategories()
  });
}
function fk(e) {
  return oi({
    queryKey: ["get-vendor-subcategories-by-query"],
    queryFn: () => K$.getInstance().getVendorSubcategoryByQuery(e),
    enabled: !!e
  });
}
function pk() {
  return ld({
    mutationKey: ["create-farmer"],
    mutationFn: (e) => Y$.getInstance().createFarmer(e)
  });
}
const hk = Ly({ ...LA, ...w$, ...ok });
ed({
  reducer: hk
});
new uI();
ms({
  palette: {
    primary: {
      main: "#00cc66",
      light: "#e6fff2",
      dark: "#00994d",
      contrastText: "#fff"
    },
    secondary: {
      main: "#404040",
      light: "#808080",
      dark: "#000000",
      contrastText: "#fff"
    },
    info: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff"
    },
    warning: {
      main: "#ff9100",
      light: "#ffbd66",
      dark: "#e68200",
      contrastText: "#fff"
    }
  }
});
ee("input")({
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
function iu() {
  return iu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, iu.apply(this, arguments);
}
var lh;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(lh || (lh = {}));
function Yt(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function xb(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function wb(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
var ch;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(ch || (ch = {}));
function mk(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? wb(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : yk(r, t) : t,
    search: Sk(n),
    hash: Tk(o)
  };
}
function yk(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
  }), r.length > 1 ? r.join("/") : "/";
}
function Hl(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function gk(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function bk(e, t) {
  let r = gk(e);
  return t ? r.map((n, o) => o === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function vk(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string" ? o = wb(e) : (o = iu({}, e), Yt(!o.pathname || !o.pathname.includes("?"), Hl("?", "pathname", "search", o)), Yt(!o.pathname || !o.pathname.includes("#"), Hl("#", "pathname", "hash", o)), Yt(!o.search || !o.search.includes("#"), Hl("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "", a = s ? "/" : o.pathname, l;
  if (a == null)
    l = r;
  else {
    let f = t.length - 1;
    if (!n && a.startsWith("..")) {
      let h = a.split("/");
      for (; h[0] === ".."; )
        h.shift(), f -= 1;
      o.pathname = h.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = mk(o, l), u = a && a !== "/" && a.endsWith("/"), d = (s || a === ".") && r.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const Ek = (e) => e.join("/").replace(/\/\/+/g, "/"), Sk = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Tk = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Rb = ["post", "put", "patch", "delete"];
new Set(Rb);
const Ck = ["get", ...Rb];
new Set(Ck);
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
function su() {
  return su = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, su.apply(this, arguments);
}
const md = /* @__PURE__ */ C.createContext(null);
process.env.NODE_ENV !== "production" && (md.displayName = "DataRouter");
const Ok = /* @__PURE__ */ C.createContext(null);
process.env.NODE_ENV !== "production" && (Ok.displayName = "DataRouterState");
const xk = /* @__PURE__ */ C.createContext(null);
process.env.NODE_ENV !== "production" && (xk.displayName = "Await");
const yd = /* @__PURE__ */ C.createContext(null);
process.env.NODE_ENV !== "production" && (yd.displayName = "Navigation");
const gd = /* @__PURE__ */ C.createContext(null);
process.env.NODE_ENV !== "production" && (gd.displayName = "Location");
const pl = /* @__PURE__ */ C.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (pl.displayName = "Route");
const wk = /* @__PURE__ */ C.createContext(null);
process.env.NODE_ENV !== "production" && (wk.displayName = "RouteError");
function _b() {
  return C.useContext(gd) != null;
}
function Rk() {
  return _b() || (process.env.NODE_ENV !== "production" ? Yt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Yt(!1)), C.useContext(gd).location;
}
const Nb = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ab(e) {
  C.useContext(yd).static || C.useLayoutEffect(e);
}
function bd() {
  let {
    isDataRoute: e
  } = C.useContext(pl);
  return e ? Ik() : _k();
}
function _k() {
  _b() || (process.env.NODE_ENV !== "production" ? Yt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : Yt(!1));
  let e = C.useContext(md), {
    basename: t,
    future: r,
    navigator: n
  } = C.useContext(yd), {
    matches: o
  } = C.useContext(pl), {
    pathname: s
  } = Rk(), a = JSON.stringify(bk(o, r.v7_relativeSplatPath)), l = C.useRef(!1);
  return Ab(() => {
    l.current = !0;
  }), C.useCallback(function(u, d) {
    if (d === void 0 && (d = {}), process.env.NODE_ENV !== "production" && xb(l.current, Nb), !l.current) return;
    if (typeof u == "number") {
      n.go(u);
      return;
    }
    let f = vk(u, JSON.parse(a), s, d.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Ek([t, f.pathname])), (d.replace ? n.replace : n.push)(f, d.state, d);
  }, [t, n, a, s, e]);
}
var Pb = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Pb || {}), Ib = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Ib || {});
function Db(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Nk(e) {
  let t = C.useContext(md);
  return t || (process.env.NODE_ENV !== "production" ? Yt(!1, Db(e)) : Yt(!1)), t;
}
function Ak(e) {
  let t = C.useContext(pl);
  return t || (process.env.NODE_ENV !== "production" ? Yt(!1, Db(e)) : Yt(!1)), t;
}
function Pk(e) {
  let t = Ak(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? Yt(!1, e + ' can only be used on routes that contain a unique "id"') : Yt(!1)), r.route.id;
}
function Ik() {
  let {
    router: e
  } = Nk(Pb.UseNavigateStable), t = Pk(Ib.UseNavigateStable), r = C.useRef(!1);
  return Ab(() => {
    r.current = !0;
  }), C.useCallback(function(o, s) {
    s === void 0 && (s = {}), process.env.NODE_ENV !== "production" && xb(r.current, Nb), r.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, su({
      fromRouteId: t
    }, s)));
  }, [e, t]);
}
new Promise(() => {
});
const hl = ({ pagetitle: e }) => /* @__PURE__ */ p(Ge, { component: "div", variant: "h5", sx: { fontWeight: 700, color: "#595959" }, children: e });
ht.forwardRef(function(t, r) {
  return /* @__PURE__ */ p(py, { direction: "up", ref: r, ...t });
});
const vd = (e) => typeof e == "number" && !isNaN(e), Di = (e) => typeof e == "string", $b = (e) => typeof e == "function", Dk = (e) => xi(e) || Di(e) || $b(e) || vd(e), Nr = /* @__PURE__ */ new Map();
let au = [];
const uh = /* @__PURE__ */ new Set(), kb = () => Nr.size > 0;
function $k(e, t) {
  var r;
  if (t) return !((r = Nr.get(t)) == null || !r.isToastActive(e));
  let n = !1;
  return Nr.forEach((o) => {
    o.isToastActive(e) && (n = !0);
  }), n;
}
function kk(e, t) {
  Dk(e) && (kb() || au.push({ content: e, options: t }), Nr.forEach((r) => {
    r.buildToast(e, t);
  }));
}
function dh(e, t) {
  Nr.forEach((r) => {
    t != null && t != null && t.containerId ? (t == null ? void 0 : t.containerId) === r.id && r.toggle(e, t == null ? void 0 : t.id) : r.toggle(e, t == null ? void 0 : t.id);
  });
}
let Mk = 1;
const Mb = () => "" + Mk++;
function Fk(e) {
  return e && (Di(e.toastId) || vd(e.toastId)) ? e.toastId : Mb();
}
function $i(e, t) {
  return kk(e, t), t.toastId;
}
function Ea(e, t) {
  return { ...t, type: t && t.type || e, toastId: Fk(t) };
}
function Ls(e) {
  return (t, r) => $i(t, Ea(e, r));
}
function ze(e, t) {
  return $i(e, Ea("default", t));
}
ze.loading = (e, t) => $i(e, Ea("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t })), ze.promise = function(e, t, r) {
  let n, { pending: o, error: s, success: a } = t;
  o && (n = Di(o) ? ze.loading(o, r) : ze.loading(o.render, { ...r, ...o }));
  const l = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, c = (d, f, h) => {
    if (f == null) return void ze.dismiss(n);
    const b = { type: d, ...l, ...r, data: h }, y = Di(f) ? { render: f } : f;
    return n ? ze.update(n, { ...b, ...y }) : ze(y.render, { ...b, ...y }), h;
  }, u = $b(e) ? e() : e;
  return u.then((d) => c("success", a, d)).catch((d) => c("error", s, d)), u;
}, ze.success = Ls("success"), ze.info = Ls("info"), ze.error = Ls("error"), ze.warning = Ls("warning"), ze.warn = ze.warning, ze.dark = (e, t) => $i(e, Ea("default", { theme: "dark", ...t })), ze.dismiss = function(e) {
  (function(t) {
    var r;
    if (kb()) {
      if (t == null || Di(r = t) || vd(r)) Nr.forEach((n) => {
        n.removeToast(t);
      });
      else if (t && ("containerId" in t || "id" in t)) {
        const n = Nr.get(t.containerId);
        n ? n.removeToast(t.id) : Nr.forEach((o) => {
          o.removeToast(t.id);
        });
      }
    } else au = au.filter((n) => t != null && n.options.toastId !== t);
  })(e);
}, ze.clearWaitingQueue = function(e) {
  e === void 0 && (e = {}), Nr.forEach((t) => {
    !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue();
  });
}, ze.isActive = $k, ze.update = function(e, t) {
  t === void 0 && (t = {});
  const r = ((n, o) => {
    var s;
    let { containerId: a } = o;
    return (s = Nr.get(a || 1)) == null ? void 0 : s.toasts.get(n);
  })(e, t);
  if (r) {
    const { props: n, content: o } = r, s = { delay: 100, ...n, ...t, toastId: t.toastId || e, updateId: Mb() };
    s.toastId !== e && (s.staleId = e);
    const a = s.render || o;
    delete s.render, $i(a, s);
  }
}, ze.done = (e) => {
  ze.update(e, { progress: 1 });
}, ze.onChange = function(e) {
  return uh.add(e), () => {
    uh.delete(e);
  };
}, ze.play = (e) => dh(!0, e), ze.pause = (e) => dh(!1, e);
const Ed = ({ label: e, isSubmitting: t, isError: r }) => /* @__PURE__ */ p(
  ti,
  {
    type: "submit",
    variant: "contained",
    color: "success",
    size: "large",
    disabled: t && !r,
    sx: {
      width: 150,
      textTransform: "none",
      margin: 2,
      "&:disabled": {
        backgroundColor: "#A5D6A7"
      }
    },
    children: t && !r ? /* @__PURE__ */ p(uy, { color: "inherit", size: 25 }) : e
  }
), Sd = ({ label: e, handleReset: t }) => /* @__PURE__ */ p(
  ti,
  {
    type: "reset",
    variant: "contained",
    color: "secondary",
    size: "large",
    sx: {
      width: 150,
      textTransform: "none",
      margin: 2
    },
    onClick: t,
    children: e
  }
);
ee(ti)(({ theme: e }) => ({
  textTransform: "none",
  fontWeight: 600,
  backgroundColor: e.palette.primary.main,
  boxShadow: "none",
  "&:hover": {
    backgroundColor: e.palette.primary.dark,
    borderColor: "#00cc66",
    boxShadow: "none",
    color: "#ffffff"
  }
}));
class Xk extends ht.Component {
  constructor(t) {
    super(t), this.resetErrorBoundary = () => {
      this.setState({ hasError: !1 });
    }, this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentDidCatch(t, r) {
    console.error("ErrorBoundary caught an error:", t, r);
  }
  render() {
    if (this.state.hasError) {
      const { FallbackCompnent: t } = this.props;
      return /* @__PURE__ */ p(t, { resetErrorBoundary: this.resetErrorBoundary });
    }
    return this.props.children;
  }
}
const Lk = () => {
  const { values: e, handleChange: t } = sr(), { data: r } = dk(), n = r != null && r.data ? vo(r.data, "id", "name") : [], { data: o } = fk(e.category || ""), s = o != null && o.data ? vo(o.data, "id", "name") : [];
  return /* @__PURE__ */ le(I, { container: !0, spacing: 1, padding: 1, children: [
    /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "companyName",
        label: "Vendor Company Name",
        value: e.companyName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      or,
      {
        isRequired: !0,
        label: "Vendor Category",
        name: "category",
        options: n,
        value: e.category,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      or,
      {
        isRequired: !0,
        label: "Vendor Subcategory",
        name: "subcategory",
        options: s,
        value: e.subcategory,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      or,
      {
        isRequired: !1,
        label: "In F&V Business Since",
        name: "inFandVBusinessSince",
        options: _r.inFnVBusiness,
        value: e.inFandVBusinessSince,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "date",
        isRequired: !1,
        name: "dateOfIncorporation",
        label: "Date Of Incorporation",
        value: e.dateOfIncorporation,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12 }, marginY: 1, children: /* @__PURE__ */ p(
      Ge,
      {
        variant: "body2",
        component: "div",
        sx: { width: "100%", borderBottom: "1px solid #BDBDBD", fontWeight: 600 },
        children: "Vendor Office Address"
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "officeAddress.address1",
        label: "Address Line 1",
        value: e.officeAddress.address1,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "officeAddress.address2",
        label: "Address Line 2",
        value: e.officeAddress.address2,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "officeAddress.location",
        label: "Location",
        value: e.officeAddress.location,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "officeAddress.city",
        label: "City",
        value: e.officeAddress.city,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "officeAddress.state",
        label: "State",
        value: e.officeAddress.state,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "officeAddress.pincode",
        label: "Pincode",
        value: e.officeAddress.pincode,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "officeContactNo",
        label: "Office Contact Number",
        value: e.officeContactNo,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "email",
        isRequired: !1,
        name: "officeEmail",
        label: "Office Email",
        value: e.officeEmail,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "website",
        label: "Office Website",
        value: e.website,
        handleChange: t
      }
    ) })
  ] });
}, qk = () => {
  const { values: e, handleChange: t, setFieldValue: r } = sr();
  return /* @__PURE__ */ le(I, { container: !0, spacing: 1, children: [
    /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(
      Ws,
      {
        isRequired: !1,
        name: "listOfAllProducts",
        label: "List Of All Products",
        values: e.listOfAllProducts,
        setFieldValue: r
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "mainProduct",
        label: "Main Products To Be Supplied",
        value: e.mainProduct,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "dispatchCenter",
        label: "Dispatch Center",
        value: e.dispatchCenter,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "warehouseLocations",
        label: "Warehouse Locations",
        value: e.warehouseLocations,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "packingCenterLocation",
        label: "Packing Center Location",
        value: e.packingCenterLocation,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 2 }, children: /* @__PURE__ */ p(
      Ii,
      {
        isRequired: !1,
        alignment: "vertical",
        name: "ifGstnCopy",
        label: "GSTN available?",
        value: e.ifGstnCopy,
        options: _r.fileYesOrNo,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 5 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "gstn",
        label: "GSTN (if available)",
        value: e.gstn,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 5 }, children: /* @__PURE__ */ p(
      Pi,
      {
        isRequired: !1,
        name: "gstnCopy",
        label: "GST Regn. Cert. Copy (if available)"
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 2 }, children: /* @__PURE__ */ p(
      Ii,
      {
        isRequired: !1,
        alignment: "vertical",
        name: "ifPanCardCopy",
        label: "PAN card available?",
        value: e.ifPanCardCopy,
        options: _r.fileYesOrNo,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 5 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "panNo",
        label: "PAN Number (if available)",
        value: e.panNo,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 5 }, children: /* @__PURE__ */ p(
      Pi,
      {
        isRequired: !1,
        name: "panCardCopy",
        label: "PAN Card Copy (if available)"
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 2 }, children: /* @__PURE__ */ p(
      Ii,
      {
        isRequired: !1,
        alignment: "vertical",
        name: "ifMsmeCopy",
        label: "MSME Cert. available?",
        value: e.ifMsmeCopy,
        options: _r.fileYesOrNo,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 5 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "msmeNo",
        label: "MSME Number (if available)",
        value: e.msmeNo,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 5 }, children: /* @__PURE__ */ p(
      Pi,
      {
        isRequired: !1,
        name: "msmeCopy",
        label: "UDYAM (MSME) Card Copy (if available)"
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "tradeLicenseNumber",
        label: "Trade License Number",
        value: e.tradeLicenseNumber,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      or,
      {
        isRequired: !1,
        name: "proposedPaymentTerms",
        label: "Proposed Payment Terms",
        options: _r.proposedPaymentTerms,
        value: e.proposedPaymentTerms,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      or,
      {
        isRequired: !1,
        name: "creditTerms",
        label: "Credit Terms",
        options: _r.creditTerms,
        value: e.creditTerms,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        multiline: !0,
        maxRows: 4,
        name: "anyDetailsTeamAndInfra",
        label: "Any Other Details Regarding Team And Infrastructure",
        value: e.anyDetailsTeamAndInfra,
        handleChange: t
      }
    ) })
  ] });
}, jk = () => {
  const { values: e, handleChange: t } = sr();
  return /* @__PURE__ */ le(I, { container: !0, spacing: 2, padding: 1, children: [
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "vendorSaleInfo.contactFName",
        label: "First Name",
        value: e.vendorSaleInfo.contactFName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "vendorSaleInfo.contactMName",
        label: "Middle Name",
        value: e.vendorSaleInfo.contactMName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "vendorSaleInfo.contactLName",
        label: "Last Name",
        value: e.vendorSaleInfo.contactLName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "vendorSaleInfo.directContactNumber",
        label: "Contact Number",
        value: e.vendorSaleInfo.directContactNumber,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "vendorSaleInfo.mobileNumber",
        label: "Contact Number (Alternate)",
        value: e.vendorSaleInfo.mobileNumber,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "vendorSaleInfo.email",
        label: "Email",
        value: e.vendorSaleInfo.email,
        handleChange: t
      }
    ) })
  ] });
}, Bk = () => {
  const { values: e, handleChange: t } = sr();
  return /* @__PURE__ */ le(I, { container: !0, spacing: 1, padding: 1, children: [
    /* @__PURE__ */ p(I, { size: { xs: 12 }, marginY: 1, children: /* @__PURE__ */ p(Ge, { variant: "caption", component: "div", sx: { width: "100%", borderBottom: "1px solid #BDBDBD", fontWeight: 600 }, children: "Beneficiary Name" }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "vendorBankDetails.beneficiaryFName",
        label: "First Name",
        value: e.vendorBankDetails.beneficiaryFName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "vendorBankDetails.beneficiaryMName",
        label: "Middle Name",
        value: e.vendorBankDetails.beneficiaryMName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "vendorBankDetails.beneficiaryLName",
        label: "Last Name",
        value: e.vendorBankDetails.beneficiaryLName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "vendorBankDetails.bankName",
        label: "Bank Name",
        value: e.vendorBankDetails.bankName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      or,
      {
        isRequired: !0,
        label: "Type of Account",
        name: "vendorBankDetails.typeOfAcc",
        options: _r.accTypes,
        value: e.vendorBankDetails.typeOfAcc,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "vendorBankDetails.ifscCode",
        label: "IFSC Code",
        value: e.vendorBankDetails.ifscCode,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "vendorBankDetails.swiftNo",
        label: "Swift Number (if applicable)",
        value: e.vendorBankDetails.swiftNo,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12 }, marginY: 1, children: /* @__PURE__ */ p(Ge, { variant: "caption", component: "div", sx: { width: "100%", borderBottom: "1px solid #BDBDBD", fontWeight: 600 }, children: "Bank Address" }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(
      H,
      {
        isRequired: !0,
        name: "vendorBankDetails.branchAddress.address1",
        label: "Address Line 1",
        value: e.vendorBankDetails.branchAddress.address1,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(
      H,
      {
        isRequired: !1,
        name: "vendorBankDetails.branchAddress.address2",
        label: "Address Line 2",
        value: e.vendorBankDetails.branchAddress.address2,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        isRequired: !0,
        name: "vendorBankDetails.branchAddress.location",
        label: "Location",
        value: e.vendorBankDetails.branchAddress.location,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        isRequired: !0,
        name: "vendorBankDetails.branchAddress.city",
        label: "City",
        value: e.vendorBankDetails.branchAddress.city,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        isRequired: !0,
        name: "vendorBankDetails.branchAddress.state",
        label: "State",
        value: e.vendorBankDetails.branchAddress.state,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        isRequired: !0,
        name: "vendorBankDetails.branchAddress.pincode",
        label: "Pincode",
        value: e.vendorBankDetails.branchAddress.pincode,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        isRequired: !1,
        name: "vendorBankDetails.invoiceCurrency",
        label: "Invoice Currency",
        value: e.vendorBankDetails.invoiceCurrency,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 8 }, children: /* @__PURE__ */ p(
      Pi,
      {
        isRequired: !1,
        name: "vendorBankDetails.cancelledChequeCopy",
        label: "Copy of Cancelled Cheque"
      }
    ) })
  ] });
}, Vk = () => {
  const { values: e, handleChange: t } = sr();
  return /* @__PURE__ */ le(I, { container: !0, spacing: 1, padding: 1, children: [
    /* @__PURE__ */ p(I, { size: { xs: 12 }, marginY: 1, children: /* @__PURE__ */ p(Ge, { variant: "caption", component: "div", sx: { width: "100%", borderBottom: "1px solid #BDBDBD", fontWeight: 600 }, children: "Vendor Reference 1" }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !0, name: "ref1FName", label: "First Name", value: e.ref1FName, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref1MName", label: "Middle Name", value: e.ref1MName, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !0, name: "ref1LName", label: "Last Name", value: e.ref1LName, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !0, name: "ref1PrimaryCNumb", label: "Primary Contact Number", value: e.ref1PrimaryCNumb, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref1AltrCNumb", label: "Alternate Contact Number", value: e.ref1AltrCNumb, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref1Email", label: "Email", value: e.ref1Email, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(H, { isRequired: !0, name: "ref1Address.address1", label: "Address Line 1", value: e.ref1Address.address1, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref1Address.address2", label: "Address Line 2", value: e.ref1Address.address2, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(H, { isRequired: !0, name: "ref1Address.location", label: "Location", value: e.ref1Address.location, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(H, { isRequired: !0, name: "ref1Address.city", label: "City", value: e.ref1Address.city, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(H, { isRequired: !0, name: "ref1Address.state", label: "State", value: e.ref1Address.state, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(H, { isRequired: !0, name: "ref1Address.pincode", label: "Pincode", value: e.ref1Address.pincode, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12 }, marginY: 1, children: /* @__PURE__ */ p(Ge, { variant: "caption", component: "div", sx: { width: "100%", borderBottom: "1px solid #BDBDBD", fontWeight: 600 }, children: "Vendor Reference 2" }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2FName", label: "First Name", value: e.ref2FName, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2MName", label: "Middle Name", value: e.ref2MName, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2LName", label: "Last Name", value: e.ref2LName, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2PrimaryCNumb", label: "Primary Contact Number", value: e.ref2PrimaryCNumb, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2AltrCNumb", label: "Alternate Contact Number", value: e.ref2AltrCNumb, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2Email", label: "Email", value: e.ref2Email, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2Address.address1", label: "Address Line 1", value: e.ref2Address.address1, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2Address.address2", label: "Address Line 2", value: e.ref2Address.address2, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2Address.location", label: "Location", value: e.ref2Address.location, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2Address.city", label: "City", value: e.ref2Address.city, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2Address.state", label: "State", value: e.ref2Address.state, handleChange: t }) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(H, { isRequired: !1, name: "ref2Address.pincode", label: "Pincode", value: e.ref2Address.pincode, handleChange: t }) })
  ] });
}, Jk = () => {
  const e = bd(), { mutateAsync: t, error: r, data: n } = uk(), o = async (s) => {
    const a = new FormData();
    fl(a, s), t(a).then(() => {
      ze.success(n ? n.message : "Vendor created successfully."), setTimeout(() => {
        e(hd.GET_ALL_VENDORS);
      }, 2e3);
    }).catch(() => {
      ze.error(r ? r.message : "Error while registering vendor.");
    });
  };
  return /* @__PURE__ */ p(
    Ra,
    {
      enableReinitialize: !0,
      initialValues: l$,
      validationSchema: T$,
      validateOnBlur: !0,
      validateOnChange: !0,
      onSubmit: (s) => {
        console.log(s), o(s);
      },
      children: ({ handleReset: s, handleSubmit: a, values: l, handleChange: c, isSubmitting: u }) => /* @__PURE__ */ p("form", { onSubmit: a, encType: "multipart/form-data", children: /* @__PURE__ */ le(I, { container: !0, columnSpacing: 1, rowSpacing: 1, padding: 1, children: [
        /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(hl, { pagetitle: "Vendor Registration" }) }),
        /* @__PURE__ */ le(I, { size: { xs: 12 }, children: [
          /* @__PURE__ */ p(Lk, {}),
          /* @__PURE__ */ p(Pn, { panel: "Other Details", openOnError: !0, children: /* @__PURE__ */ p(qk, {}) }),
          /* @__PURE__ */ p(Pn, { panel: "Sales Contact Details", openOnError: !0, children: /* @__PURE__ */ p(jk, {}) }),
          /* @__PURE__ */ p(Pn, { panel: "Bank Details", openOnError: !0, children: /* @__PURE__ */ p(Bk, {}) }),
          /* @__PURE__ */ p(Pn, { panel: "References", openOnError: !0, children: /* @__PURE__ */ p(Vk, {}) })
        ] }),
        /* @__PURE__ */ le(I, { size: { xs: 12 }, sx: { display: "flex", justifyContent: "space-around", alignItems: "center" }, children: [
          /* @__PURE__ */ p(Ed, { isSubmitting: u, isError: r, label: "Create" }),
          /* @__PURE__ */ p(Sd, { label: "Reset", handleReset: s })
        ] })
      ] }) })
    }
  );
}, zk = () => {
  const { values: e, handleChange: t } = sr();
  return /* @__PURE__ */ le(I, { container: !0, spacing: 1, padding: 1, children: [
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "farmerfName",
        label: "First Name",
        value: e.farmerfName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "farmermName",
        label: "Middle Name",
        value: e.farmermName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "farmerlName",
        label: "Last Name",
        value: e.farmerlName,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12 }, marginY: 1, children: /* @__PURE__ */ p(
      Ge,
      {
        variant: "caption",
        component: "div",
        sx: { width: "100%", borderBottom: "1px solid #BDBDBD", fontWeight: 600 },
        children: "Farmer Residential Address"
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "residensialAddress.address1",
        label: "Address Line 1",
        value: e.residensialAddress.address1,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "residensialAddress.address2",
        label: "Address Line 2",
        value: e.residensialAddress.address2,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "residensialAddress.location",
        label: "Location",
        value: e.residensialAddress.location,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "residensialAddress.city",
        label: "City",
        value: e.residensialAddress.city,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "residensialAddress.state",
        label: "State",
        value: e.residensialAddress.state,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "residensialAddress.pincode",
        label: "Pincode",
        value: e.residensialAddress.pincode,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "primaryMobileNo",
        label: "Primary Contact Number",
        value: e.primaryMobileNo,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "secondaryMobileNo",
        label: "Alternate Contact Number",
        value: e.secondaryMobileNo,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "email",
        isRequired: !1,
        name: "email",
        label: "Email",
        value: e.email,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      Ii,
      {
        isRequired: !1,
        alignment: "vertical",
        name: "gender",
        label: "Gender",
        value: e.gender,
        options: _r.gender,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4.5 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "idProofNo",
        label: "Aadhar/ PAN/ License Number",
        value: e.idProofNo,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 4.5 }, children: /* @__PURE__ */ p(
      Pi,
      {
        isRequired: !1,
        name: "idProofCopy",
        label: "Attach a ID proof copy"
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "howDoYouSell",
        label: "How do you sell your product?",
        value: e.howDoYouSell,
        handleChange: t
      }
    ) })
  ] });
}, Uk = () => {
  const { values: e, handleChange: t } = sr();
  return /* @__PURE__ */ le(I, { container: !0, spacing: 1, padding: 1, children: [
    /* @__PURE__ */ p(I, { size: { xs: 12 }, marginY: 1, children: /* @__PURE__ */ p(
      Ge,
      {
        variant: "caption",
        component: "div",
        sx: { width: "100%", borderBottom: "1px solid #BDBDBD", fontWeight: 600 },
        children: "Farm Address"
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "farmAddress.address1",
        label: "Address Line 1",
        value: e.farmAddress.address1,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !1,
        name: "farmAddress.address2",
        label: "Address Line 2",
        value: e.farmAddress.address2,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "farmAddress.location",
        label: "Location",
        value: e.farmAddress.location,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "farmAddress.city",
        label: "City",
        value: e.farmAddress.city,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "farmAddress.state",
        label: "State",
        value: e.farmAddress.state,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "text",
        isRequired: !0,
        name: "farmAddress.pincode",
        label: "Pincode",
        value: e.farmAddress.pincode,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      or,
      {
        isRequired: !1,
        name: "landHoldingStatus",
        label: "Land Holding Status",
        value: e.landHoldingStatus,
        options: _r.landHoldingStatus,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      or,
      {
        isRequired: !1,
        name: "landStatus",
        label: "Land Status",
        value: e.landStatus,
        options: _r.landStatus,
        handleChange: t
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "number",
        isRequired: !1,
        name: "totalLandArea",
        label: "Total Land Area (in Acres)",
        value: e.totalLandArea,
        handleChange: t,
        slotProps: {
          input: {
            endAdornment: /* @__PURE__ */ p(Ki, { position: "end", children: "Acres" })
          }
        }
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
      H,
      {
        type: "number",
        isRequired: !1,
        name: "cultivationArea",
        label: "Cultivation Area (in Acres)",
        value: e.cultivationArea,
        handleChange: t,
        slotProps: {
          input: {
            endAdornment: /* @__PURE__ */ p(Ki, { position: "end", children: "Acres" })
          }
        }
      }
    ) })
  ] });
}, Gk = () => /* @__PURE__ */ le(I, { container: !0, spacing: 1, padding: 1, children: [
  /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(Tc, { isRequired: !1, name: "farmerPhoto", label: "Farmer Photo" }) }),
  /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(Tc, { isRequired: !1, name: "farmPhoto", label: "Farm Photo" }) })
] }), Wk = () => {
  const { values: e, handleChange: t } = sr();
  return /* @__PURE__ */ le(I, { container: !0, spacing: 1, children: [
    /* @__PURE__ */ p(I, { size: { xs: 12 }, marginY: 1, children: /* @__PURE__ */ p(
      Ge,
      {
        variant: "caption",
        component: "div",
        sx: { width: "100%", borderBottom: "1px solid #BDBDBD", fontWeight: 600 },
        children: "Crop Details"
      }
    ) }),
    /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(Eu, { name: "crops", children: ({ remove: r, push: n }) => /* @__PURE__ */ le(Th, { children: [
      e.crops.map((o, s) => /* @__PURE__ */ le(I, { container: !0, spacing: 1, marginY: 1, padding: 1, sx: { border: "1px solid #bdbdbd", borderRadius: 2 }, children: [
        /* @__PURE__ */ le(I, { size: { xs: 12 }, sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ le(Ge, { variant: "caption", component: "div", children: [
            "Product: ",
            s + 1
          ] }),
          e.crops.length > 1 && /* @__PURE__ */ p(bn, { color: "error", size: "small", onClick: () => r(s), children: /* @__PURE__ */ p(Za, { fontSize: "small" }) })
        ] }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "text",
            isRequired: !0,
            name: `crops.${s}.crop`,
            label: "Crop Name",
            value: e.crops[s].crop,
            handleChange: t
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "text",
            isRequired: !1,
            name: `crops.${s}.variety`,
            label: "Variety",
            value: e.crops[s].variety,
            handleChange: t
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "number",
            isRequired: !1,
            name: `crops.${s}.noOfPlants`,
            label: "Number of plants ",
            value: e.crops[s].noOfPlants,
            handleChange: t
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "date",
            isRequired: !0,
            name: `crops.${s}.pruningDate`,
            label: "Pruning Date",
            value: e.crops[s].pruningDate,
            handleChange: t
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "date",
            isRequired: !0,
            name: `crops.${s}.expectedHarvestDate`,
            label: "Expected Harvest Date",
            value: e.crops[s].expectedHarvestDate,
            handleChange: t
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "number",
            isRequired: !0,
            name: `crops.${s}.expectedQuantityInTonnes`,
            label: "Expected Quantity (in mt)",
            value: e.crops[s].expectedQuantityInTonnes,
            handleChange: t
          }
        ) })
      ] }, s)),
      /* @__PURE__ */ p(I, { size: { xs: 12 }, sx: { display: "flex", alignItems: "center", justifyContent: "end" }, children: /* @__PURE__ */ p(
        ti,
        {
          variant: "text",
          size: "small",
          startIcon: /* @__PURE__ */ p(Xu, {}),
          sx: { fontWeight: 700 },
          onClick: () => n(db),
          children: "Add More"
        }
      ) })
    ] }) }) })
  ] });
}, Zk = () => {
  const e = bd(), { mutateAsync: t, error: r, data: n } = pk(), o = async (s) => {
    const a = new FormData();
    fl(a, s), t(a).then(() => {
      ze.success(n ? n.message : "Farmer created successfully."), setTimeout(() => {
        e(hd.GET_ALL_VENDORS);
      }, 2e3);
    }).catch(() => {
      ze.error(r ? r.message : "Error while registering farmer.");
    });
  };
  return /* @__PURE__ */ p(
    Ra,
    {
      enableReinitialize: !0,
      initialValues: c$,
      validationSchema: x$,
      validateOnBlur: !0,
      validateOnChange: !0,
      onSubmit: (s) => {
        console.log(s), o(s);
      },
      children: ({ handleReset: s, handleSubmit: a, isSubmitting: l }) => /* @__PURE__ */ p("form", { onSubmit: a, encType: "multipart/form-data", children: /* @__PURE__ */ le(I, { container: !0, columnSpacing: 1, rowSpacing: 1, padding: 1, children: [
        /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(hl, { pagetitle: "Farmer Registration" }) }),
        /* @__PURE__ */ le(I, { size: { xs: 12 }, children: [
          /* @__PURE__ */ p(zk, {}),
          /* @__PURE__ */ p(Pn, { panel: "Farm Details", openOnError: !0, children: /* @__PURE__ */ p(Uk, {}) }),
          /* @__PURE__ */ p(Pn, { panel: "Crop Details", openOnError: !0, children: /* @__PURE__ */ p(Wk, {}) }),
          /* @__PURE__ */ p(Pn, { panel: "Farmer and Farm Images", openOnError: !1, children: /* @__PURE__ */ p(Gk, {}) })
        ] }),
        /* @__PURE__ */ le(I, { size: { xs: 12 }, sx: { display: "flex", justifyContent: "space-around", alignItems: "center" }, children: [
          /* @__PURE__ */ p(Ed, { isSubmitting: l, isError: r, label: "Create" }),
          /* @__PURE__ */ p(Sd, { label: "Reset", handleReset: s })
        ] })
      ] }) })
    }
  );
}, eM = () => /* @__PURE__ */ p(
  Ra,
  {
    enableReinitialize: !0,
    initialValues: E$,
    validateOnBlur: !0,
    validateOnChange: !0,
    onSubmit: (e) => {
      console.log(e);
    },
    children: ({ handleReset: e, handleSubmit: t, values: r, handleChange: n, isSubmitting: o }) => /* @__PURE__ */ p("form", { onSubmit: t, encType: "multipart/form-data", children: /* @__PURE__ */ p(I, { container: !0, columnSpacing: 1, rowSpacing: 1, padding: 1, children: /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(hl, { pagetitle: "Customer Registration" }) }) }) })
  }
), tM = () => {
  const e = bd(), { data: t } = sk(), r = Nn(() => t !== null && (t != null && t.data) ? vo(t.data, "id", "name") : [], [t]), { data: n } = ak(), o = Nn(() => n !== null && (n != null && n.data) ? vo(n.data, "id", "name") : [], [n]), { data: s } = lk(), a = Nn(() => s !== null && (s != null && s.data) ? vo(s.data, "id", "name") : [], [s]), { data: l } = ck(), c = Nn(() => l !== null && (l != null && l.data) ? vo(l.data, "id", "unit") : [], [l]), u = ["good", "bad"].map((g) => ({ value: g, label: g })), d = ut((g, m) => {
    var x;
    const T = (x = s == null ? void 0 : s.data) == null ? void 0 : x.find((v) => v.id === g.subcategory);
    m("category", T == null ? void 0 : T.category.id), m("classification", T == null ? void 0 : T.classification.id);
  }, [s == null ? void 0 : s.data]), { mutateAsync: f, error: h, data: b } = ik(), y = (g) => {
    const m = new FormData();
    fl(m, g), f(m).then(() => {
      ze.success(b ? b.message : "Product data created successfully."), setTimeout(() => {
        e(hd.GET_ALL_PRODUCTS);
      }, 2e3);
    }).catch(() => {
      console.log(h), ze.error(h ? h.message : "Error while creating product data.");
    });
  };
  return /* @__PURE__ */ p(
    Ra,
    {
      enableReinitialize: !0,
      initialValues: S$,
      validateOnBlur: !0,
      validateOnChange: !0,
      onSubmit: (g) => {
        console.log(g), y(g);
      },
      children: ({ values: g, handleChange: m, handleReset: T, handleSubmit: x, setFieldValue: v, isSubmitting: O }) => /* @__PURE__ */ p("form", { onSubmit: x, encType: "multipart/form-data", children: /* @__PURE__ */ le(I, { container: !0, spacing: 1, padding: 1, children: [
        /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(hl, { pagetitle: "Create Product" }) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "text",
            isRequired: !0,
            name: "name",
            label: "Product Name",
            value: g.name,
            handleChange: m
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "text",
            isRequired: !1,
            name: "productOrigin",
            label: "Origin of Product",
            value: g.productOrigin,
            handleChange: m
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "text",
            isRequired: !1,
            name: "brand",
            label: "Brand Name of Product",
            value: g.brand,
            handleChange: m
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
          or,
          {
            isRequired: !0,
            label: "UOM",
            name: "uom",
            options: c,
            value: g.uom,
            handleChange: m
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "text",
            isRequired: !1,
            name: "packingType",
            label: "Packing Type",
            value: g.packingType,
            handleChange: m
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 6, md: 3 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "number",
            isRequired: !1,
            name: "shelfLife",
            label: "Shelf Life",
            value: g.shelfLife,
            handleChange: m,
            slotProps: {
              input: {
                endAdornment: /* @__PURE__ */ p(Ki, { position: "end", children: "Days" })
              }
            }
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 6, md: 3 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "number",
            isRequired: !1,
            name: "storageTemp",
            label: "Storage Temparature",
            value: g.storageTemp,
            handleChange: m,
            slotProps: {
              input: {
                endAdornment: /* @__PURE__ */ p(Ki, { position: "end", children: "℃" })
              }
            }
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          or,
          {
            isRequired: !0,
            label: "Subcategory",
            name: "subcategory",
            options: a,
            value: g.subcategory,
            handleChange: m,
            onBlur: () => d(g, v)
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          or,
          {
            isRequired: !0,
            label: "Category",
            name: "category",
            options: o,
            value: g.category,
            handleChange: m
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ p(
          or,
          {
            isRequired: !0,
            label: "Classification",
            name: "classification",
            options: r,
            value: g.classification,
            handleChange: m
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(
          Ws,
          {
            isRequired: !1,
            name: "count",
            label: "Counts of product",
            values: g.count,
            setFieldValue: v
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(
          Ws,
          {
            isRequired: !1,
            name: "size",
            label: "Sizes of product",
            values: g.size,
            setFieldValue: v
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(
          Ws,
          {
            isRequired: !1,
            name: "variety",
            label: "Varieties of product",
            values: g.variety,
            setFieldValue: v
          }
        ) }),
        /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(
          H,
          {
            type: "text",
            multiline: !0,
            maxRows: 4,
            isRequired: !1,
            name: "description",
            label: "Description",
            value: g.description,
            handleChange: m
          }
        ) }),
        /* @__PURE__ */ le(I, { size: { xs: 12 }, marginY: 1, children: [
          /* @__PURE__ */ p(gs, { sx: { width: "100%", borderBottom: "1px solid #BDBDBD" }, children: /* @__PURE__ */ p(Ge, { variant: "body2", sx: { fontWeight: 600 }, children: "Quality Check Parameters" }) }),
          /* @__PURE__ */ p(Ge, { variant: "caption", color: "error", children: "These quality check parameters will be use for arrival quality report (AQR)" })
        ] }),
        /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(Eu, { name: "qualityParameters", children: ({ push: S, remove: R }) => /* @__PURE__ */ p(Th, { children: g.qualityParameters.map((w, A) => /* @__PURE__ */ le(I, { container: !0, spacing: 1, children: [
          /* @__PURE__ */ p(I, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(
            Ii,
            {
              isRequired: !0,
              name: `qualityParameters.${A}.type`,
              label: "Parameter Type",
              value: g.qualityParameters[A].type,
              options: u,
              handleChange: m
            }
          ) }),
          /* @__PURE__ */ p(I, { size: { xs: 12, md: 8 }, children: /* @__PURE__ */ p(
            H,
            {
              isRequired: !0,
              name: `qualityParameters.${A}.name`,
              label: "Parameter Name",
              value: g.qualityParameters[A].name,
              handleChange: m
            }
          ) }),
          /* @__PURE__ */ le(I, { size: { xs: 12, md: 1 }, children: [
            /* @__PURE__ */ p(bn, { color: "success", size: "small", sx: { marginTop: 3 }, onClick: () => S({ name: "", type: "" }), children: /* @__PURE__ */ p(Xu, {}) }),
            g.qualityParameters.length > 1 && /* @__PURE__ */ p(bn, { color: "error", size: "small", sx: { marginTop: 3 }, onClick: () => R(A), children: /* @__PURE__ */ p(Za, {}) })
          ] })
        ] })) }) }) }),
        /* @__PURE__ */ p(I, { size: { xs: 12 }, children: /* @__PURE__ */ p(Tc, { isRequired: !1, name: "image", label: "Product Image" }) }),
        /* @__PURE__ */ le(I, { size: { xs: 12 }, marginY: 2, sx: { display: "flex", justifyContent: "space-around", alignItems: "center" }, children: [
          /* @__PURE__ */ p(Ed, { isSubmitting: O, isError: h, label: "Create" }),
          /* @__PURE__ */ p(Sd, { label: "Reset", handleReset: T })
        ] })
      ] }) })
    }
  );
};
export {
  eM as CustomerRegistrationForm,
  Zk as FarmerRegistrationForm,
  tM as ProductCreateForm,
  Jk as VendorRegistrationForm
};
