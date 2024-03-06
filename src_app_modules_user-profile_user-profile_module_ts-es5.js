(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_user-profile_user-profile_module_ts"], {
    /***/98625: (
    /*!****************************************************************!*\
      !*** ./src/app/modules/user-profile/user-profile.component.ts ***!
      \****************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"UserProfileComponent": function UserProfileComponent() {
          return /* binding */_UserProfileComponent;
        }
        /* harmony export */
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! tslib */42321);
      /* harmony import */
      var src_app_dialogs_edit_mobile_dialog_edit_mobile_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! src/app/dialogs/edit-mobile-dialog/edit-mobile-dialog.component */26545);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/services/common/common.service */69763);
      /* harmony import */
      var src_app_services_core_core_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/services/core/core.service.service */85567);
      /* harmony import */
      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/services/auth/auth.service */51228);
      /* harmony import */
      var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/services/monitor-service/monitor.service */35196);
      /* harmony import */
      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/material/dialog */22213);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/material/icon */52529);
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @ngx-translate/core */70325);
      var _c0 = ["uploader"];
      function UserProfileComponent_img_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function UserProfileComponent_img_5_Template_img_error_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
            return ctx_r11.hasAvatar = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.userDetail == null ? null : ctx_r0.userDetail.userProfileImageBlobUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }
      function UserProfileComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.avatarText);
        }
      }
      function UserProfileComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserProfileComponent_div_12_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
            return ctx_r13["delete"]();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "delete");
        }
      }
      function UserProfileComponent_div_17_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 44);
        }
      }
      function UserProfileComponent_div_17_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 45);
        }
      }
      function UserProfileComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UserProfileComponent_div_17_img_3_Template, 1, 0, "img", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UserProfileComponent_div_17_img_4_Template, 1, 0, "img", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var role_r15 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", role_r15.name, " : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", role_r15.automotiveServiceName === "Carheal Quote");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", role_r15.automotiveServiceName === "Addenda Repair");
        }
      }
      function UserProfileComponent_div_19_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r18.userDetail == null ? null : ctx_r18.userDetail.countryCode, "-");
        }
      }
      function UserProfileComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UserProfileComponent_div_19_span_3_Template, 2, 1, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-icon", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "call");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.userDetail == null ? null : ctx_r6.userDetail.countryCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.userDetail == null ? null : ctx_r6.userDetail.phoneNumber == null ? null : ctx_r6.userDetail.phoneNumber.replace(ctx_r6.userDetail == null ? null : ctx_r6.userDetail.countryCode, ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "checked");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, "verified"));
        }
      }
      function UserProfileComponent_div_21_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r19.userDetail == null ? null : ctx_r19.userDetail.organizationDetail == null ? null : ctx_r19.userDetail.organizationDetail.name);
        }
      }
      function UserProfileComponent_div_21_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](", ", ctx_r20.userDetail == null ? null : ctx_r20.userDetail.organizationDetail == null ? null : ctx_r20.userDetail.organizationDetail.cityName, "");
        }
      }
      function UserProfileComponent_div_21_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](", ", ctx_r21.userDetail == null ? null : ctx_r21.userDetail.organizationDetail == null ? null : ctx_r21.userDetail.organizationDetail.countryName, "");
        }
      }
      function UserProfileComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "uppercase");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UserProfileComponent_div_21_span_6_Template, 2, 1, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, UserProfileComponent_div_21_span_7_Template, 2, 1, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UserProfileComponent_div_21_span_8_Template, 2, 1, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, "organization")));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.userDetail == null ? null : ctx_r7.userDetail.organizationDetail == null ? null : ctx_r7.userDetail.organizationDetail.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.userDetail == null ? null : ctx_r7.userDetail.organizationDetail == null ? null : ctx_r7.userDetail.organizationDetail.cityName);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.userDetail == null ? null : ctx_r7.userDetail.organizationDetail == null ? null : ctx_r7.userDetail.organizationDetail.countryName);
        }
      }
      function UserProfileComponent_div_22_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 55);
        }
        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r22.userDetail == null ? null : ctx_r22.userDetail.managerDetail == null ? null : ctx_r22.userDetail.managerDetail.userProfileImageBlobUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }
      function UserProfileComponent_div_22_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r24.userDetail == null ? null : ctx_r24.userDetail.managerDetail == null ? null : ctx_r24.userDetail.managerDetail.avatarText);
        }
      }
      function UserProfileComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UserProfileComponent_div_22_img_8_Template, 1, 1, "img", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, UserProfileComponent_div_22_ng_template_9_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, "direct_manager"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r8.userDetail == null ? null : ctx_r8.userDetail.managerDetail == null ? null : ctx_r8.userDetail.managerDetail.firstName, " ", ctx_r8.userDetail == null ? null : ctx_r8.userDetail.managerDetail == null ? null : ctx_r8.userDetail.managerDetail.lastName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.userDetail == null ? null : ctx_r8.userDetail.managerDetail == null ? null : ctx_r8.userDetail.managerDetail.userProfileImageBlobUrl)("ngIfElse", _r23);
        }
      }
      function UserProfileComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserProfileComponent_div_50_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
            return ctx_r25.openOtpPopup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "plus");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "add_mobile_number"));
        }
      }
      function UserProfileComponent_label_51_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r27.userDetail == null ? null : ctx_r27.userDetail.countryCode, "-");
        }
      }
      function UserProfileComponent_label_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserProfileComponent_label_51_span_1_Template, 2, 1, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserProfileComponent_label_51_Template_mat_icon_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
            return ctx_r28.changePhoneNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.userDetail == null ? null : ctx_r10.userDetail.countryCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.userDetail == null ? null : ctx_r10.userDetail.phoneNumber == null ? null : ctx_r10.userDetail.phoneNumber.replace(ctx_r10.userDetail == null ? null : ctx_r10.userDetail.countryCode, ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "edit");
        }
      }
      var _c1 = function _c1(a0) {
        return {
          "centered-edit": a0
        };
      };
      var _UserProfileComponent = /*#__PURE__*/function () {
        /**
         * constructor
         * @param commonService
         */
        function _UserProfileComponent(commonService, coreService, authService, monitorService, dialog) {
          var _this = this;
          _classCallCheck(this, _UserProfileComponent);
          this.commonService = commonService;
          this.coreService = coreService;
          this.authService = authService;
          this.monitorService = monitorService;
          this.dialog = dialog;
          this.resetButtonModel = {
            label: '',
            type: 'primary'
          };
          this.editMobileNumber = {
            label: '',
            type: 'outline'
          };
          this.hasAvatar = true;
          this.commonService.reloadUser.subscribe(function (reload) {
            if (reload) {
              _this.getProfile();
            }
          });
        }
        /**
         * on init
         */
        _createClass(_UserProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;
            this.monitorService.logEvent('ngOnInit', ['ChqUserProfileComponent', 'addenda-quote']);
            this.resetButtonModel = {
              label: 'Reset Password',
              type: 'primary',
              icon: 'refresh',
              onclick: this.resetPassword.bind(this)
            };
            this.editMobileNumber = {
              label: 'Edit mobile number',
              type: 'outline',
              icon: 'edit',
              onclick: this.changePhoneNumber.bind(this)
            };
            if (this.commonService.userProfileLoading) {
              this.commonService.showLoading();
              this.commonService.userProfileData.subscribe({
                next: function next(res) {
                  if (res) {
                    _this2.handleUserProfileData(res);
                    _this2.commonService.hideLoading();
                  }
                },
                error: function error() {
                  _this2.getProfile();
                }
              });
            } else {
              this.getProfile();
            }
          }
          /**
           * handle user profile data
           */
        }, {
          key: "handleUserProfileData",
          value: function handleUserProfileData(res) {
            var _a, _b, _c, _d, _e, _f, _g;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var avatarText;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (res === null || res === void 0 ? void 0 : res.data.userProfileImageBlobUrl) {
                      this.commonService.avatar.next({
                        image: res === null || res === void 0 ? void 0 : res.data.userProfileImageBlobUrl
                      });
                    }
                    this.userDetail = res.data;
                    if (!this.userDetail.phoneNumber) {
                      this.editMobileNumber.type = 'disabled-outline';
                    }
                    if ((_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.managerDetail) {
                      avatarText = "".concat((_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.managerDetail) === null || _c === void 0 ? void 0 : _c.firstName.charAt(0)).concat((_e = (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.managerDetail) === null || _e === void 0 ? void 0 : _e.lastName.charAt(0));
                      this.userDetail.managerDetail.avatarText = avatarText;
                    }
                    this.avatarText = "".concat((_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.firstName.charAt(0)).concat((_g = this.userDetail) === null || _g === void 0 ? void 0 : _g.lastName.charAt(0));
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
          /**
           * open change phonenumber dialog
           */
        }, {
          key: "changePhoneNumber",
          value: function changePhoneNumber() {
            this.monitorService.logEvent('changePhoneNumber', ['ChqUserProfileComponent', 'addenda-quote']);
            var dialogRef = this.dialog.open(src_app_dialogs_edit_mobile_dialog_edit_mobile_dialog_component__WEBPACK_IMPORTED_MODULE_0__.EditMobileDialogComponent, {
              data: this.userDetail,
              autoFocus: false
            });
            dialogRef.afterClosed().subscribe();
          }
          /**
           * get user profile info
           */
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this3 = this;
            this.commonService.showLoading();
            this.monitorService.logEvent('getProfile', ['ChqUserProfileComponent', 'addenda-quote']);
            this.coreService.getUserProfile().subscribe({
              next: function next(res) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  var _a, _b, _c, _d, _e, _f, _g, avatarText;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        if (res === null || res === void 0 ? void 0 : res.data.userProfileImageBlobUrl) {
                          this.commonService.avatar.next({
                            image: res === null || res === void 0 ? void 0 : res.data.userProfileImageBlobUrl
                          });
                        }
                        this.userDetail = res.data;
                        if (!this.userDetail.phoneNumber) {
                          this.editMobileNumber.type = 'disabled-outline';
                        }
                        if ((_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.managerDetail) {
                          avatarText = "".concat((_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.managerDetail) === null || _c === void 0 ? void 0 : _c.firstName.charAt(0)).concat((_e = (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.managerDetail) === null || _e === void 0 ? void 0 : _e.lastName.charAt(0));
                          this.userDetail.managerDetail.avatarText = avatarText;
                        }
                        this.avatarText = "".concat((_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.firstName.charAt(0)).concat((_g = this.userDetail) === null || _g === void 0 ? void 0 : _g.lastName.charAt(0));
                        this.commonService.hideLoading();
                        this.commonService.userProfileData.next(res);
                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, this);
                }));
              },
              error: function error() {
                _this3.commonService.hideLoading();
              }
            });
          }
          /**
           * open labour rate popup
           */
        }, {
          key: "openOtpPopup",
          value: function openOtpPopup() {
            this.monitorService.logEvent('openOtpPopup', ['ChqUserProfileComponent', 'addenda-quote']);
            var dialogRef = this.dialog.open(src_app_dialogs_edit_mobile_dialog_edit_mobile_dialog_component__WEBPACK_IMPORTED_MODULE_0__.EditMobileDialogComponent, {
              data: {
                'phoneNumber': '',
                'isPhoneNumberAddition': true
              },
              autoFocus: false
            });
            dialogRef.afterClosed().subscribe();
          }
          /**
           * handles reset button click
           * returns void
           */
        }, {
          key: "resetPassword",
          value: function resetPassword() {
            this.monitorService.logEvent('resetPassword', ['ChqUserProfileComponent', 'addenda-quote']);
            window.location.href = this.authService.resetPasswordRoute();
          }
          /**
           * handle file upload
           * @param event
           */
        }, {
          key: "handleUpload",
          value: function handleUpload(event) {
            var _this4 = this;
            var currentFile = event.target.files || event.srcElement.files;
            this.monitorService.logEvent('handleUpload', ['ChqUserProfileComponent', 'addenda-quote', {
              event: event
            }]);
            if (currentFile !== null && currentFile !== '' && currentFile.length > 0) {
              if (!this.checkFileSize(currentFile[0])) {
                var message = 'Image size is above the allowed 5MB limit, try again with a smaller image';
                this.commonService.showToast(0, message);
                this.uploader.nativeElement.value = null;
                return;
              }
              if (!this.isValidImageFile(currentFile[0].name)) {
                var _message = 'Uploaded file type is not supported';
                this.commonService.showToast(0, _message);
                this.uploader.nativeElement.value = null;
                return;
              }
              var reader = new FileReader();
              reader.readAsDataURL(currentFile[0]);
              reader.onload = function (_event) {
                _this4.uploadImage(reader.result, currentFile[0].name, currentFile[0]);
              };
            } else {
              this.uploader.nativeElement.value = null;
              return;
            }
          }
          /**
           * checks file size
           * @param blob
           * @returns boolean
           */
        }, {
          key: "checkFileSize",
          value: function checkFileSize(img) {
            this.monitorService.logEvent('checkFileSize', ['ChqUserProfileComponent', 'addenda-quote', {
              fileSize: img.size
            }]);
            if (img.size > this.commonService.maxileSize) {
              return false;
            }
            return true;
          }
          /**
           * checkx filename
           * @param filename
           * @returns
           */
        }, {
          key: "isValidImageFile",
          value: function isValidImageFile(filename) {
            var regex = new RegExp('^.*\\.[a-zA-Z]+$', 'gm');
            this.monitorService.logEvent('isValidImageFile', ['ChqUserProfileComponent', 'addenda-quote', {
              fileName: filename
            }]);
            if (regex.test(filename)) {
              var extension = filename.split('.').pop();
              return this.commonService.allowExtension.includes(extension === null || extension === void 0 ? void 0 : extension.toLowerCase());
            }
            return false;
          }
          /**
           * upload image to server
           * @param image
           * @param fileName
           * @param file
           */
        }, {
          key: "uploadImage",
          value: function uploadImage(image, fileName, file) {
            var _this5 = this;
            this.monitorService.logEvent('uploadImage', ['ChqNewPhotosComponent', 'addenda-quote', {
              fileName: fileName
            }]);
            this.commonService.showLoading();
            this.coreService.uploadProfileImage(file).subscribe({
              next: function next(res) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        if (res) {
                          this.userDetail.userProfileImageBlobUrl = res === null || res === void 0 ? void 0 : res.data.userImageBlobUrl;
                          this.hasAvatar = true;
                          this.commonService.avatar.next({
                            image: res === null || res === void 0 ? void 0 : res.data.userImageBlobUrl
                          });
                        }
                        this.uploader.nativeElement.value = null;
                        this.commonService.hideLoading();
                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3, this);
                }));
              },
              error: function error() {
                _this5.uploader.nativeElement.value = null;
                _this5.commonService.hideLoading();
              }
            });
          }
          /**
           * delete dialog
           */
        }, {
          key: "delete",
          value: function _delete() {
            var _this6 = this;
            this.monitorService.logEvent('delete', ['ChqNewPhotosComponent', 'addenda-quote']);
            this.commonService.openDeleteDialog().afterClosed().subscribe(function (data) {
              if (data) {
                _this6.deleteProfilePic();
              }
            });
          }
          /**
          * delete profile picutre
          */
        }, {
          key: "deleteProfilePic",
          value: function deleteProfilePic() {
            var _this7 = this;
            this.monitorService.logEvent('deleteProfilePic', ['ChqNewPhotosComponent', 'addenda-quote']);
            this.commonService.showLoading();
            this.coreService.deleteUserProfile().subscribe({
              next: function next(res) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        this.userDetail.userProfileImageBlobUrl = null;
                        this.commonService.avatar.next({
                          image: null,
                          avatar: this.avatarText
                        });
                        this.commonService.hideLoading();
                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4, this);
                }));
              },
              error: function error() {
                _this7.commonService.hideLoading();
              }
            });
          }
        }]);
        return _UserProfileComponent;
      }();
      _UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
        return new (t || _UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_core_core_service_service__WEBPACK_IMPORTED_MODULE_2__.CoreService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
      };
      _UserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _UserProfileComponent,
        selectors: [["user-profile"]],
        viewQuery: function UserProfileComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          }
          if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.uploader = _t.first);
          }
        },
        decls: 62,
        vars: 37,
        consts: [[1, "main"], [1, "user-container"], [1, "user-info"], [1, "user-profile"], [1, "user-profile-image"], [3, "src", "error", 4, "ngIf", "ngIfElse"], ["text", ""], ["hidden", "", "type", "file", "accept", "image/png, image/jpg, image/jpeg", 3, "change"], ["uploader", ""], [1, "edit-profile-picture", 3, "ngClass"], ["aria-hidden", "false", "aria-label", "edit icon", 3, "svgIcon", "click"], ["class", "delete-profile-picture", 4, "ngIf"], [1, "user-desc"], [1, "role-container", "fx-row"], ["class", "role fx-col", 4, "ngFor", "ngForOf"], [1, "user-contact"], ["class", "contact-item no-gap", 4, "ngIf"], [1, "organisation-info"], ["class", "organisation", 4, "ngIf"], ["class", "manager", 4, "ngIf"], [1, "detail-container"], [1, "div-row"], [1, "contact-item", "new-call-button", "no-gap", 3, "click"], ["aria-hidden", "false", "aria-label", "call icon", 3, "svgIcon"], [1, "detail-info"], [1, "info-item", "first"], [1, "title"], [1, "value"], [1, "info-item", "second"], [1, "info-item", "third"], ["class", "contact-item new-call-button no-gap", 3, "click", 4, "ngIf"], ["class", "value", 4, "ngIf"], [1, "info-item", "fourth"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda.png"], [3, "src", "error"], [1, "delete-profile-picture"], ["aria-hidden", "false", "aria-label", "delete icon", 3, "svgIcon", "click"], [1, "role", "fx-col"], [1, "user-post"], ["src", "assets/img/addenda-quote.png", 4, "ngIf"], ["src", "assets/img/addenda-repair.png", 4, "ngIf"], ["src", "assets/img/addenda-quote.png"], ["src", "assets/img/addenda-repair.png"], [1, "contact-item", "no-gap"], [4, "ngIf"], ["aria-hidden", "false", "aria-label", "call icon", 1, "icon-left", 3, "svgIcon"], [1, "verify"], [1, "organisation"], [1, "manager"], [1, "manager-post"], [1, "manager-profile"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], ["aria-hidden", "false", "aria-label", "call icon", 1, "plus-icon", 3, "svgIcon"], ["aria-hidden", "false", "aria-label", "call icon", 1, "edit-icon", 3, "svgIcon", "click"]],
        template: function UserProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UserProfileComponent_img_5_Template, 1, 1, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UserProfileComponent_ng_template_6_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UserProfileComponent_Template_input_change_8_listener($event) {
              return ctx.handleUpload($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserProfileComponent_Template_mat_icon_click_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
              return _r3.click();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, UserProfileComponent_div_12_Template, 2, 1, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, UserProfileComponent_div_17_Template, 5, 3, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, UserProfileComponent_div_19_Template, 9, 7, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, UserProfileComponent_div_21_Template, 9, 8, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, UserProfileComponent_div_22_Template, 11, 7, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "section", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserProfileComponent_Template_div_click_28_listener() {
              return ctx.resetPassword();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "mat-icon", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, UserProfileComponent_div_50_Template, 5, 4, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, UserProfileComponent_label_51_Template, 5, 3, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "img", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.userProfileImageBlobUrl) && ctx.hasAvatar)("ngIfElse", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](35, _c1, !(ctx.userDetail == null ? null : ctx.userDetail.userProfileImageBlobUrl)));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "edit");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userDetail == null ? null : ctx.userDetail.userProfileImageBlobUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx.userDetail == null ? null : ctx.userDetail.firstName, " ", ctx.userDetail == null ? null : ctx.userDetail.lastName, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.userDetail == null ? null : ctx.userDetail.roleDetail);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) && (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) !== "0");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userDetail == null ? null : ctx.userDetail.organizationDetail);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userDetail == null ? null : ctx.userDetail.managerDetail);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 23, "personal_details"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "refresh");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 25, "reset_password"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 27, "first_name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.firstName);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](43, 29, "last_name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 31, "mobile_number"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) || (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) === "0");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) && (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) !== "0");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 33, "email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.email);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe],
        styles: [".main[_ngcontent-%COMP%] {\n  padding: 32px 0;\n}\n\n.user-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid rgba(26, 34, 51, 0.2);\n  padding-bottom: 20px;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 32px;\n  gap: 32px;\n  align-items: center;\n  position: relative;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .edit-profile-picture.centered-edit[_ngcontent-%COMP%] {\n  left: 45px;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .edit-profile-picture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -7px;\n  left: 30px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .edit-profile-picture[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  height: 15px !important;\n  width: 15px !important;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .delete-profile-picture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -7px;\n  left: 55px;\n  background: var(--xa-red);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .delete-profile-picture[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  height: 12px !important;\n  width: 12px !important;\n  display: flex;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-profile-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 110px;\n  height: 110px;\n  background: rgba(26, 34, 51, 0.1);\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-profile-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 110px;\n  width: 110px;\n  border-radius: 50%;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 35px;\n  margin-bottom: 8px;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   .user-post[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--xa-dark-gray);\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  grid-gap: 45px;\n  gap: 45px;\n  margin-top: 18px;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   .no-gap[_ngcontent-%COMP%] {\n  grid-gap: 5px;\n  gap: 5px;\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .organisation[_ngcontent-%COMP%] {\n  text-align: end;\n  margin-bottom: 36px;\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .organisation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  grid-gap: 15px;\n  gap: 15px;\n  text-align: end;\n  justify-content: flex-end;\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-post[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-post[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background: rgba(26, 34, 51, 0.1);\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-profile[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  object-fit: cover;\n}\n\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  grid-gap: 15px;\n  gap: 15px;\n}\n\n.contact-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--xa-dark-gray);\n}\n\n.contact-item[_ngcontent-%COMP%]   .icon-left[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.contact-item[_ngcontent-%COMP%]   .verify[_ngcontent-%COMP%] {\n  color: var(--xa-blue);\n  cursor: pointer;\n}\n\n.new-call-button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 6px 12px;\n  margin-top: 4px;\n  grid-gap: 10px;\n  gap: 10px;\n  height: 30px;\n  border: 1px solid var(--xa-light-gray);\n  -webkit-filter: drop-shadow(0px 1px 3px var(--xa-box-shadow));\n          filter: drop-shadow(0px 1px 3px var(--xa-box-shadow));\n  border-radius: 8px;\n}\n\n.new-call-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-black) !important;\n}\n\n.new-call-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: var(--xa-black) !important;\n}\n\n.detail-container[_ngcontent-%COMP%] {\n  padding: 24px 0;\n  border-bottom: 1px solid rgba(26, 34, 51, 0.2);\n}\n\n.detail-container[_ngcontent-%COMP%]   .div-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n}\n\n.detail-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  grid-gap: 120px;\n  gap: 120px;\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 14px;\n  display: flex;\n  margin-top: 4px;\n  justify-content: inherit;\n  align-items: center;\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-black) !important;\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  margin-left: 26px;\n}\n\n@media (max-width: 850px) {\n  .new-call-button[_ngcontent-%COMP%] {\n    border: 1px solid var(--xa-gray);\n  }\n\n  .detail-info[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    grid-gap: 30px !important;\n    gap: 30px !important;\n  }\n  .detail-info[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n  .detail-info[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%] {\n    min-width: 200px;\n  }\n  .detail-info[_ngcontent-%COMP%]   .fourth[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n}\n\n@media (max-width: 840px) {\n  .user-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    width: 100%;\n  }\n}\n\n.role-container[_ngcontent-%COMP%] {\n  grid-gap: 20px;\n  gap: 20px;\n}\n\n.role-container[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 29px;\n}\n\n.role[_ngcontent-%COMP%]:not(:first-child) {\n  border-left: 1px solid var(--xa-light-gray);\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUNRO0VBQ0ksVUFBQTtBQUNaOztBQUVRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUFaOztBQUVZO0VBQ0ksZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQWhCOztBQUlRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUZaOztBQUlZO0VBQ0ksZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUZoQjs7QUFPWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTGhCOztBQU9nQjtFQUNJLGVBQUE7QUFMcEI7O0FBUWdCO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTnBCOztBQVlZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWaEI7O0FBYVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBWGhCOztBQWNZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQVpoQjs7QUFlWTtFQUNJLGFBQUE7RUFBQSxRQUFBO0FBYmhCOztBQW1CUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQWpCWjs7QUFtQlk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFqQmhCOztBQXNCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBcEJaOztBQXVCZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFyQnBCOztBQXdCZ0I7RUFDSSxlQUFBO0FBdEJwQjs7QUEwQlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBeEJoQjs7QUEwQmdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF4QnBCOztBQTJCZ0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF6QnBCOztBQWdDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBN0JKOztBQStCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUE3QlI7O0FBZ0NJO0VBQ0ksaUJBQUE7QUE5QlI7O0FBaUNJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBL0JSOztBQW1DQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLDZEQUFBO1VBQUEscURBQUE7RUFDQSxrQkFBQTtBQWhDSjs7QUFrQ0k7RUFDSSxnQ0FBQTtBQWhDUjs7QUFtQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FBakNSOztBQXNDQTtFQUNJLGVBQUE7RUFDQSw4Q0FBQTtBQW5DSjs7QUFxQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQW5DUjs7QUFzQ0k7RUFDSSxtQkFBQTtBQXBDUjs7QUF1Q0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQUEsVUFBQTtBQXJDUjs7QUF1Q1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFyQ1o7O0FBdUNZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBckNoQjs7QUF3Q1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUF0Q2hCOztBQXdDZ0I7RUFDSSxnQ0FBQTtBQXRDcEI7O0FBeUNnQjtFQUNJLGlCQUFBO0FBdkNwQjs7QUE4Q0E7RUFDSTtJQUNJLGdDQUFBO0VBM0NOOztFQThDRTtJQUNJLDhCQUFBO0lBQ0EseUJBQUE7SUFBQSxvQkFBQTtFQTNDTjtFQTZDTTtJQUNJLGVBQUE7RUEzQ1Y7RUE4Q007SUFDSSxnQkFBQTtFQTVDVjtFQStDTTtJQUNJLGdCQUFBO0VBN0NWO0FBQ0Y7O0FBaURBO0VBQ0k7SUFDSSxzQkFBQTtFQS9DTjtFQWlETTtJQUNJLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VBL0NWO0FBQ0Y7O0FBbURBO0VBQ0ksY0FBQTtFQUFBLFNBQUE7QUFqREo7O0FBbURRO0VBQ0ksZ0JBQUE7QUFqRFo7O0FBc0RBO0VBQ0ksMkNBQUE7RUFDQSxrQkFBQTtBQW5ESiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgcGFkZGluZzogMzJweCAwO1xufVxuXG4udXNlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuMik7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICAudXNlci1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAzMnB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmVkaXQtcHJvZmlsZS1waWN0dXJlLmNlbnRlcmVkLWVkaXQge1xuICAgICAgICAgICAgbGVmdDogNDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lZGl0LXByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IC03cHg7XG4gICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYmxhY2spO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLXhhLXdoaXRlKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGVsZXRlLXByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IC03cHg7XG4gICAgICAgICAgICBsZWZ0OiA1NXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtcmVkKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS14YS13aGl0ZSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1wcm9maWxlIHtcbiAgICAgICAgICAgIC51c2VyLXByb2ZpbGUtaW1hZ2Uge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDM0LCA1MSwgMC4xKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItZGVzYyB7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVzZXItcG9zdCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLWNvbnRhY3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBnYXA6IDQ1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vLWdhcCB7XG4gICAgICAgICAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAub3JnYW5pc2F0aW9uLWluZm8ge1xuICAgICAgICAub3JnYW5pc2F0aW9uIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG5cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAubWFuYWdlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogMTVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgIC5tYW5hZ2VyLXBvc3Qge1xuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFuYWdlci1wcm9maWxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDM0LCA1MSwgMC4xKTtcblxuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvbnRhY3QtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcblxuICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XG4gICAgfVxuXG4gICAgLmljb24tbGVmdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cblxuICAgIC52ZXJpZnkge1xuICAgICAgICBjb2xvcjogdmFyKC0teGEtYmx1ZSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5uZXctY2FsbC1idXR0b24ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDNweCB2YXIoLS14YS1ib3gtc2hhZG93KSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgbWF0LWljb24ge1xuICAgICAgICBmaWxsOiB2YXIoLS14YS1ibGFjaykgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjaykgIWltcG9ydGFudDtcbiAgICB9XG5cbn1cblxuLmRldGFpbC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNiwgMzQsIDUxLCAwLjIpO1xuXG4gICAgLmRpdi1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuXG4gICAgaDUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIC5kZXRhaWwtaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGdhcDogMTIwcHg7XG5cbiAgICAgICAgLmluZm8taXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0teGEtYmxhY2spICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmVkaXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgLm5ldy1jYWxsLWJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWdyYXkpO1xuICAgIH1cblxuICAgIC5kZXRhaWwtaW5mbyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZ2FwOiAzMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLnNlY29uZCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGhpcmQge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweFxuICAgICAgICB9XG5cbiAgICAgICAgLmZvdXJ0aCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcbiAgICAudXNlci1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5vcmdhbmlzYXRpb24taW5mbyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucm9sZS1jb250YWluZXIge1xuICAgIGdhcDogMjBweDtcbiAgICAucm9sZSB7ICAgICAgICBcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI5cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yb2xlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn0iXX0= */"]
      });

      /***/
    }),
    /***/85745: (
    /*!*************************************************************!*\
      !*** ./src/app/modules/user-profile/user-profile.module.ts ***!
      \*************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"UserProfileModule": function UserProfileModule() {
          return /* binding */_UserProfileModule;
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var _user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./user-profile.component */98625);
      /* harmony import */
      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/material/icon */52529);
      /* harmony import */
      var src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/icons.module */25852);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/widgets/chq-widgets.module */85510);
      /* harmony import */
      var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/resolvers/versionControl.resolver */74743);
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ngx-translate/core */70325);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/core */2316);
      var routes = [{
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent,
        resolve: {
          version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__.VersionControlResolver
        }
      }];
      var _UserProfileModule = /*#__PURE__*/_createClass(function _UserProfileModule() {
        _classCallCheck(this, _UserProfileModule);
      });
      _UserProfileModule.ɵfac = function UserProfileModule_Factory(t) {
        return new (t || _UserProfileModule)();
      };
      _UserProfileModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _UserProfileModule
      });
      _UserProfileModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_UserProfileModule, {
          declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule]
        });
      })();

      /***/
    }),
    /***/74743: (
    /*!******************************************************!*\
      !*** ./src/app/resolvers/versionControl.resolver.ts ***!
      \******************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"VersionControlResolver": function VersionControlResolver() {
          return /* binding */_VersionControlResolver;
        }
        /* harmony export */
      });
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! rxjs */53399);
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */75249);
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs */82426);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/core */2316);
      /* harmony import */
      var _services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../services/common/common.service */69763);
      var _VersionControlResolver = /*#__PURE__*/function () {
        /**
         * contructor
         * @param commonService
         */
        function _VersionControlResolver(commonService) {
          _classCallCheck(this, _VersionControlResolver);
          this.commonService = commonService;
        }
        /**
         * resolve the
         * @returns
         */
        _createClass(_VersionControlResolver, [{
          key: "resolve",
          value: function resolve() {
            var _this8 = this;
            this.commonService.showLoading();
            return this.commonService.checkVersion().pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (res) {
              _this8.commonService.hideLoading();
              var localVersion = localStorage.getItem('appVersion');
              var appVersion = res.buildRevision;
              if (localVersion && localVersion != appVersion) {
                localStorage.setItem('appVersion', appVersion);
                setTimeout(function () {
                  location.reload();
                }, 10);
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version available');
              } else {
                localStorage.setItem('appVersion', appVersion);
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version is not available');
              }
            }), (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(function () {
              _this8.commonService.hideLoading();
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('data not available at this time');
            }));
          }
        }]);
        return _VersionControlResolver;
      }();
      _VersionControlResolver.ɵfac = function VersionControlResolver_Factory(t) {
        return new (t || _VersionControlResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
      };
      _VersionControlResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _VersionControlResolver,
        factory: _VersionControlResolver.ɵfac,
        providedIn: 'root'
      });

      /***/
    })
  }]);
})();
//# sourceMappingURL=src_app_modules_user-profile_user-profile_module_ts-es5.js.map