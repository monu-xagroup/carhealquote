(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["default-src_app_shared_shared_module_ts"], {
    /***/
    4557:
    /*!******************************************!*\
      !*** ./node_modules/dayjs/plugin/utc.js ***!
      \******************************************/

    /***/
    function _(module) {
      !function (t, i) {
        true ? module.exports = i() : 0;
      }(this, function () {
        "use strict";

        var t = "minute",
            i = /[+-]\d\d(?::?\d\d)?/g,
            e = /([+-]|\d\d)/g;
        return function (s, f, n) {
          var u = f.prototype;
          n.utc = function (t) {
            var i = {
              date: t,
              utc: !0,
              args: arguments
            };
            return new f(i);
          }, u.utc = function (i) {
            var e = n(this.toDate(), {
              locale: this.$L,
              utc: !0
            });
            return i ? e.add(this.utcOffset(), t) : e;
          }, u.local = function () {
            return n(this.toDate(), {
              locale: this.$L,
              utc: !1
            });
          };
          var o = u.parse;

          u.parse = function (t) {
            t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), o.call(this, t);
          };

          var r = u.init;

          u.init = function () {
            if (this.$u) {
              var t = this.$d;
              this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds();
            } else r.call(this);
          };

          var a = u.utcOffset;

          u.utcOffset = function (s, f) {
            var n = this.$utils().u;
            if (n(s)) return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset;
            if ("string" == typeof s && (s = function (t) {
              void 0 === t && (t = "");
              var s = t.match(i);
              if (!s) return null;
              var f = ("" + s[0]).match(e) || ["-", 0, 0],
                  n = f[0],
                  u = 60 * +f[1] + +f[2];
              return 0 === u ? 0 : "+" === n ? u : -u;
            }(s), null === s)) return this;
            var u = Math.abs(s) <= 16 ? 60 * s : s,
                o = this;
            if (f) return o.$offset = u, o.$u = 0 === s, o;

            if (0 !== s) {
              var r = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
              (o = this.local().add(u + r, t)).$offset = u, o.$x.$localOffset = r;
            } else o = this.utc();

            return o;
          };

          var h = u.format;
          u.format = function (t) {
            var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return h.call(this, i);
          }, u.valueOf = function () {
            var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * t;
          }, u.isUTC = function () {
            return !!this.$u;
          }, u.toISOString = function () {
            return this.toDate().toISOString();
          }, u.toString = function () {
            return this.toDate().toUTCString();
          };
          var l = u.toDate;

          u.toDate = function (t) {
            return "s" === t && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
          };

          var c = u.diff;

          u.diff = function (t, i, e) {
            if (t && this.$u === t.$u) return c.call(this, t, i, e);
            var s = this.local(),
                f = n(t).local();
            return c.call(s, f, i, e);
          };
        };
      });
      /***/
    },

    /***/
    62119:
    /*!***********************************************************!*\
      !*** ./src/app/shared/add-photos/add-photos.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddPhotosComponent": function AddPhotosComponent() {
          return (
            /* binding */
            _AddPhotosComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/monitor-service/monitor.service */
      35196);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/case/case.service */
      38709);
      /* harmony import */


      var src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/inspection-service/inspection.service */
      13975);
      /* harmony import */


      var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/repair-estimate/repair-estimate.service */
      87855);
      /* harmony import */


      var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/calendar/calendar.service */
      56785);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../widgets/chq-step-header/chq-step-header.component */
      42736);
      /* harmony import */


      var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../widgets/chq-button/chq-button.component */
      36978);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function AddPhotosComponent_chq_step_header_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "chq-step-header", 11);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("chqModel", ctx_r0.photosHeader);
        }
      }

      function AddPhotosComponent_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "chq-button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, "smart_photo_inspection"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 6, "open_your_camera"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 8, "add_photo_msg"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r5.cameraButtonModel);
        }
      }

      function AddPhotosComponent_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "chq-button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, "bulk_upload"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 6, "upload_device"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 8, "bulk_msg"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r6.bulkUploadButtonModel);
        }
      }

      function AddPhotosComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddPhotosComponent_div_2_div_2_Template, 11, 10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AddPhotosComponent_div_2_div_3_Template, 11, 10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.showSPI);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.hideBulk);
        }
      }

      function AddPhotosComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, ctx_r2.repairUnapproved ? "start_job" : "bulk_spi_disabled"), " ");
        }
      }

      function AddPhotosComponent_chq_button_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "chq-button", 19);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r3.cancelButtonModel);
        }
      }

      function AddPhotosComponent_chq_button_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "chq-button", 24);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r4.nextButton);
        }
      }

      var photosHeader = {
        title: 'add_damage_photos',
        step: 4,
        description: 'damage_photos_msg',
        stepName: 'step_four'
      };

      var _AddPhotosComponent = /*#__PURE__*/function () {
        /**
         * constructor
         */
        function _AddPhotosComponent(monitorService, commonService, route, dialog, caseService, router, inspectionService, estimateService, calendarService) {
          _classCallCheck(this, _AddPhotosComponent);

          this.monitorService = monitorService;
          this.commonService = commonService;
          this.route = route;
          this.dialog = dialog;
          this.caseService = caseService;
          this.router = router;
          this.inspectionService = inspectionService;
          this.estimateService = estimateService;
          this.calendarService = calendarService;
          this.mode = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
          this.showEstimate = false;
          this.nextButton = {
            label: 'Next create estimate',
            type: 'primary',
            color: 'primary',
            icon: 'boardview'
          };
          this.photosHeader = photosHeader;
          this.cameraButtonModel = {
            label: 'camera_upload',
            type: 'primary',
            icon: 'camera',
            color: 'primary',
            onclick: this.allowSingleUpload.bind(this)
          };
          this.bulkUploadButtonModel = {
            label: 'btn_bulk_upload',
            type: 'primary',
            icon: 'upload',
            color: 'primary',
            onclick: this.allowMultipleUpload.bind(this)
          };
          this.cancelButtonModel = {
            label: 'Cancel Booking',
            type: 'outline-danger',
            onclick: this.cancelBooking.bind(this)
          };
        }
        /**
         * initialize single Upload
         */


        _createClass(_AddPhotosComponent, [{
          key: "allowSingleUpload",
          value: function allowSingleUpload() {
            this.mode.emit({
              'mode': 'single'
            });
          }
          /**
           * show delete
           */

        }, {
          key: "showDelete",
          get: function get() {
            var _a, _b, _c, _d, _e, _f, _g;

            if (((_a = this.repairData) === null || _a === void 0 ? void 0 : _a.repairGuid) && ((_c = (_b = this.repairData) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === 'draft') {
              return true;
            } else if (((_d = this.repairData) === null || _d === void 0 ? void 0 : _d.repairGuid) && ((_e = this.repairData) === null || _e === void 0 ? void 0 : _e.repairGuidisRepairCreatedFromCase) == true && ((_g = (_f = this.repairData) === null || _f === void 0 ? void 0 : _f.status) === null || _g === void 0 ? void 0 : _g.toLowerCase()) == 'repairestimation') {
              return true;
            }

            return false;
          }
          /**
           * detects changes in input attributes
           * @param changes
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.monitorService.logEvent('allowMultipleUpload', ['ChqAddPhotosComponent', 'addenda-quote', {
              changes: changes
            }]);

            if (changes) {
              if (changes['caseNumber'] && changes['caseNumber'].currentValue) {
                this.photosHeader = Object.assign(Object.assign({}, this.photosHeader), {
                  caseNumber: this.caseNumber
                });
              }
            }
          }
          /**
           * initialize multiple Upload
           */

        }, {
          key: "allowMultipleUpload",
          value: function allowMultipleUpload() {
            this.monitorService.logEvent('allowMultipleUpload', ['ChqAddPhotosComponent', 'addenda-quote']);
            this.mode.emit({
              'mode': 'multiple'
            });
          }
          /**
           * go to gtEstimate
           */

        }, {
          key: "redirectToGtEstimate",
          value: function redirectToGtEstimate() {
            var _this = this;

            this.commonService.showLoading();
            var _this$caseData = this.caseData,
                status = _this$caseData.status,
                caseGuid = _this$caseData.caseGuid,
                inspections = _this$caseData.inspections,
                vehicleId = _this$caseData.vehicleId,
                domainID = _this$caseData.domainID;
            var inspectionId = 0;

            if ((inspections === null || inspections === void 0 ? void 0 : inspections.length) > 0) {
              inspectionId = inspections[0].inspectionId;
            }

            if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'uploaddocuments') {
              this.monitorService.logEvent('redirectToGtEstimate', ['ChqDamageAnalysisComponent', 'addenda-quote', {
                caseId: caseGuid
              }]);
              this.caseService.updateCaseStatus(caseGuid, 'UploadPhotos').subscribe({
                next: function next(resp) {
                  _this.estimateService.createEstimate(caseGuid, inspectionId, vehicleId, domainID).subscribe({
                    next: function next(resp) {
                      var _a, _b;

                      if (resp) {
                        if ((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.url) {
                          location.href = (_b = resp === null || resp === void 0 ? void 0 : resp.data) === null || _b === void 0 ? void 0 : _b.url;
                          sessionStorage.setItem('update', '1');
                        }
                      }
                    },
                    complete: function complete() {
                      _this.commonService.hideLoading();
                    }
                  });
                },
                error: function error() {
                  _this.commonService.hideLoading();
                }
              });
            } else if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'uploadphotos') {
              this.monitorService.logEvent('redirectToGtEstimate', ['ChqDamageAnalysisComponent', 'addenda-quote', {
                caseId: caseGuid
              }]);
              this.estimateService.createEstimate(caseGuid, inspectionId, vehicleId, domainID).subscribe({
                next: function next(resp) {
                  if (resp) {
                    if (resp === null || resp === void 0 ? void 0 : resp.data) {
                      location.href = resp.data.url;
                      sessionStorage.setItem('update', '1');
                    }
                  }
                },
                complete: function complete() {
                  _this.commonService.hideLoading();
                }
              });
            } else {
              this.monitorService.logEvent('skipped_redirectToGtEstimate', ['ChqDamageAnalysisComponent', 'addenda-quote', {
                caseId: caseGuid
              }]);
              this.router.navigate(["/case/".concat(caseGuid, "/estimate")]);
            }
          }
          /**
           * oninit
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var repairData = this.repairData;
            this.nextButton.onclick = this.redirectToGtEstimate.bind(this);
          }
          /**
           * Cancel booking
           */

        }, {
          key: "cancelBooking",
          value: function cancelBooking() {
            var _this2 = this;

            this.commonService.openDeleteDialog().afterClosed().subscribe(function (data) {
              var _a, _b;

              if (data) {
                _this2.commonService.showLoading();

                _this2.calendarService.deleteBooking((_b = (_a = _this2.repairData) === null || _a === void 0 ? void 0 : _a.booking) === null || _b === void 0 ? void 0 : _b.bookingGuid).subscribe({
                  next: function next() {
                    _this2.commonService.hideLoading();

                    _this2.router.navigate(['/repair/booking-journal']);
                  }
                });
              }
            });
          }
        }]);

        return _AddPhotosComponent;
      }();

      _AddPhotosComponent.ɵfac = function AddPhotosComponent_Factory(t) {
        return new (t || _AddPhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_0__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_2__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_3__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_4__.RepairEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService));
      };

      _AddPhotosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _AddPhotosComponent,
        selectors: [["add-photos"]],
        inputs: {
          caseNumber: "caseNumber",
          caseData: "caseData",
          showEstimate: "showEstimate",
          repairUnapproved: "repairUnapproved",
          repairData: "repairData",
          photosHeader: "photosHeader",
          showSPI: "showSPI",
          hideBulk: "hideBulk"
        },
        outputs: {
          mode: "mode"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
        decls: 11,
        vars: 6,
        consts: [[1, "add-photo-container"], [3, "chqModel", 4, "ngIf"], ["class", "photo-container", 4, "ngIf"], ["class", "wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper", "wrapper-flex"], [1, "image-wrapper"], [3, "src"], [1, "footer-button-wrapper"], [3, "buttonModel", 4, "ngIf"], ["class", "margin-right", 3, "buttonModel", 4, "ngIf"], [3, "chqModel"], [1, "photo-container"], [1, "card-container"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-title"], [1, "card-action"], [1, "card-description"], [3, "buttonModel"], [1, "wrapper"], [1, "no-document-div"], ["src", "assets/icons/no-document.svg"], [1, "no-vehicle-content"], [1, "margin-right", 3, "buttonModel"]],
        template: function AddPhotosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddPhotosComponent_chq_step_header_1_Template, 1, 1, "chq-step-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddPhotosComponent_div_2_Template, 4, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AddPhotosComponent_div_3_Template, 6, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AddPhotosComponent_chq_button_9_Template, 1, 1, "chq-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AddPhotosComponent_chq_button_10_Template, 1, 1, "chq-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.photosHeader.isRepairModule !== true || ctx.photosHeader.isHeaderOnly === true);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.showSPI || !ctx.hideBulk) && !ctx.repairUnapproved && !ctx.commonService.isViewOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showSPI && ctx.hideBulk || ctx.repairUnapproved || ctx.commonService.isViewOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "assets/img/", +ctx.photosHeader.isRepairModule ? "addenda-repair.png" : "addenda-quote.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showDelete && (ctx.photosHeader == null ? null : ctx.photosHeader.isRepairModule));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showEstimate && !ctx.photosHeader.isRepairModule);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_6__.ChqStepHeaderComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
        styles: [".photo-container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 170px - (calc(1.5vw)) - (calc(5px + 1.5vw + 48px + 1.6vw)));\n  justify-content: space-evenly;\n  border: 1px solid var(--xa-form-border);\n  border-radius: 8px;\n  background: var(--xa-card-dark);\n  margin-top: calc(18px + 1.5vh);\n  margin-bottom: calc(12px + 1.5vh);\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  grid-gap: 27px;\n  gap: 27px;\n}\n\n.wrapper-flex[_ngcontent-%COMP%] {\n  flex: 1;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 1px solid var(--xa-light-gray);\n  padding: 16px;\n  width: 202px;\n  background-color: var(--xa-white);\n  border-radius: 8px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.card-action[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 21px;\n  margin: 0;\n  color: var(--xa-black-medium);\n}\n\n.card-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 18px;\n  margin-bottom: 30px;\n  color: var(--xa-dark-gray);\n}\n\n.image-car[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 654px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}\n\n.empty-wrapper[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--xa-light-gray);\n}\n\n.step-container[_ngcontent-%COMP%] {\n  padding: 15px 11px;\n  height: 25%;\n  border-bottom: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-white);\n  width: 130px;\n}\n\n.no-document-div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.no-document-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 50px;\n}\n\n.no-document-div[_ngcontent-%COMP%]   .no-vehicle-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 21px;\n  text-align: center;\n  color: var(--xa-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1waG90b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdGQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUNKOztBQUVBO0VBQ0ksT0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBR0k7RUFDSSxnQkFBQTtBQUFSOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLDJDQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRlI7O0FBSUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFGUiIsImZpbGUiOiJhZGQtcGhvdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzBweCAtIChjYWxjKDEuNXZ3KSkgLSAoY2FsYyg1cHggKyAxLjV2dyArIDQ4cHggKyAxLjZ2dykpKTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtZm9ybS1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtY2FyZC1kYXJrKTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoMThweCArIDEuNXZoKTtcclxuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMTJweCArIDEuNXZoKTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMjdweDtcclxufVxyXG5cclxuLndyYXBwZXItZmxleHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWFyZ2luLXJpZ2h0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB3aWR0aDogMjAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNhcmQtYWN0aW9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG59XHJcblxyXG4uY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxufVxyXG5cclxuLmltYWdlLWNhciB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNjU0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZW1wdHktd3JhcHBlcntcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbn1cclxuXHJcbi5zdGVwLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDExcHg7XHJcbiAgICBoZWlnaHQ6MjUlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG59XHJcblxyXG4ubm8tZG9jdW1lbnQtZGl2e1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIFxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAubm8tdmVoaWNsZS1jb250ZW50e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    88784:
    /*!***************************************************!*\
      !*** ./src/app/shared/error-page/error.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorModule": function ErrorModule() {
          return (
            /* binding */
            _ErrorModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/widgets/chq-widgets.module */
      85510);
      /* harmony import */


      var _no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./no-access-error/no-access-error.component */
      54135);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ErrorModule = /*#__PURE__*/_createClass(function _ErrorModule() {
        _classCallCheck(this, _ErrorModule);
      });

      _ErrorModule.ɵfac = function ErrorModule_Factory(t) {
        return new (t || _ErrorModule)();
      };

      _ErrorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ErrorModule
      });
      _ErrorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ErrorModule, {
          declarations: [_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_1__.NoAccessErrorComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_1__.NoAccessErrorComponent]
        });
      })();
      /***/

    },

    /***/
    54135:
    /*!********************************************************************************!*\
      !*** ./src/app/shared/error-page/no-access-error/no-access-error.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NoAccessErrorComponent": function NoAccessErrorComponent() {
          return (
            /* binding */
            _NoAccessErrorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NoAccessErrorComponent = /*#__PURE__*/_createClass(function _NoAccessErrorComponent() {
        _classCallCheck(this, _NoAccessErrorComponent);
      });

      _NoAccessErrorComponent.ɵfac = function NoAccessErrorComponent_Factory(t) {
        return new (t || _NoAccessErrorComponent)();
      };

      _NoAccessErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NoAccessErrorComponent,
        selectors: [["no-access-error"]],
        decls: 3,
        vars: 0,
        consts: [[1, "main-container"], [1, ""], ["src", "assets/img/no-access.png"]],
        template: function NoAccessErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLWFjY2Vzcy1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoibm8tYWNjZXNzLWVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    65504:
    /*!*****************************************************!*\
      !*** ./src/app/shared/history/history.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HistoryComponent": function HistoryComponent() {
          return (
            /* binding */
            _HistoryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      70160);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! dayjs/plugin/utc */
      4557);
      /* harmony import */


      var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/widgets/chq-repair-dialog/chq-repair-dialog.component */
      25015);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);

      var _c0 = ["sidenav"];
      dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);

      var _HistoryComponent = /*#__PURE__*/function () {
        /**
         * Creates an instance of HistoryComponent.
         * @constructor
         * @param {Router} router
         */
        function _HistoryComponent(router, route, commonService, dialog) {
          var _this3 = this;

          _classCallCheck(this, _HistoryComponent);

          this.router = router;
          this.route = route;
          this.commonService = commonService;
          this.dialog = dialog;
          this.dayjs = dayjs__WEBPACK_IMPORTED_MODULE_0__();
          this.toggleExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.history = [];
          this.isMenuOpen = false;
          this.isLoading = false;
          this.currencySymbol = '';
          this.viewMessage = {
            label: 'View message',
            icon: 'show',
            type: 'outline'
          };
          this.router.events.subscribe({
            next: function next(data) {
              if (_this3.router.url.indexOf('?') !== -1 && _this3.router.url.indexOf('history=open') !== -1) {
                _this3.isMenuOpen = true;

                _this3.toggleExpand.emit(_this3.isMenuOpen);
              }
            }
          });
          this.route.params.subscribe({
            next: function next(data) {
              if (_this3.router.url.indexOf('?') !== -1 && _this3.router.url.indexOf('history=open') !== -1) {
                _this3.isMenuOpen = true;

                _this3.toggleExpand.emit(_this3.isMenuOpen);
              }
            }
          });
          this.currencySymbol = this.commonService.getCurrencySymbol();
        }
        /**
         * Show/hide
         */


        _createClass(_HistoryComponent, [{
          key: "close",
          value: function close() {
            this.isMenuOpen = !this.isMenuOpen;
            this.toggleExpand.emit(this.isMenuOpen);
          }
          /**
           * convert utc to local time
           */

        }, {
          key: "convertUtcToLocalTime",
          value: function convertUtcToLocalTime(utcDate) {
            return dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(utcDate).local().format('hh:mm A');
          }
          /**
           * Returns class name according to status
           */

        }, {
          key: "getStatusClasses",
          value: function getStatusClasses(status) {
            switch (status) {
              case 'Draft':
                return 'status-draft';

              case 'Pending Approval':
                return 'status-pending';

              case 'Upload photos':
                return 'status-upload';

              case 'Repair estimate':
                return 'status-repair-estimate';

              default:
                return '';
            }
          }
          /**
           * download pdf history
           */

        }, {
          key: "downloadPdfHistory",
          value: function downloadPdfHistory(referenceId) {
            var _this4 = this;

            this.commonService.showLoading();
            this.commonService.blobObservable1("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.caseMgmtUrl, "/api/casehistory/report/").concat(referenceId)).subscribe({
              next: function next(data) {
                window.open(data.fileURL, '_blank');

                _this4.commonService.hideLoading();
              },
              error: function error() {
                _this4.commonService.hideLoading();
              }
            });
          }
          /**
           * show image dialog
           */

        }, {
          key: "showImageDialog",
          value: function showImageDialog(blobUrls, name) {
            var gallery = [];
            blobUrls.forEach(function (url) {
              var title = '';
              var imageUrl = url;

              if (name.indexOf('photo') !== -1 || name.indexOf('document') !== -1) {
                title = url.substring(0, url.indexOf('|')).trim();
                imageUrl = url.substring(url.indexOf('|') + 1);
              }

              gallery.push({
                image: imageUrl,
                thumbImage: imageUrl,
                //alt: alt,
                title: title
              });
            });
            var data = {
              'imageGallery': true,
              'gallery': gallery
            };
            this.dialog.open(src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ChqRepairDialogComponent, {
              data: data
            });
          }
          /**
           * show comment dialog
           */

        }, {
          key: "showCommentDialog",
          value: function showCommentDialog(comment, status, email) {
            var data = {
              'comment': comment,
              'status': status,
              'email': email
            };
            this.dialog.open(src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ChqRepairDialogComponent, {
              data: data
            });
          }
        }]);

        return _HistoryComponent;
      }();

      _HistoryComponent.ɵfac = function HistoryComponent_Factory(t) {
        return new (t || _HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
      };

      _HistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _HistoryComponent,
        selectors: [["history"]],
        viewQuery: function HistoryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
          }
        },
        inputs: {
          history: "history",
          isMenuOpen: "isMenuOpen",
          isLoading: "isLoading"
        },
        outputs: {
          toggleExpand: "toggleExpand"
        },
        decls: 0,
        vars: 0,
        template: function HistoryComponent_Template(rf, ctx) {},
        styles: [".history-slide-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  width: 100%;\n  overflow: scroll;\n  background: #fff;\n}\n.history-slide-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%] {\n  padding: 2.24856rem 0.01269rem 0.00144rem 0.73731rem;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-date[_ngcontent-%COMP%] {\n  display: flex;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-date[_ngcontent-%COMP%]   .date-pill[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.3875rem 0.5rem;\n  justify-content: center;\n  align-items: center;\n  grid-gap: 0.375rem;\n  gap: 0.375rem;\n  border-radius: 0.875rem;\n  border: 2px solid rgba(26, 34, 51, 0.2);\n  background: #fff;\n  color: #3b82f6;\n  font-size: 0.6rem;\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-block-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-block-container[_ngcontent-%COMP%]   .action-status-pill[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  grid-gap: 0.625rem;\n  gap: 0.625rem;\n  margin-bottom: 0.75rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-block-container[_ngcontent-%COMP%]   .action-status-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  border-radius: 0.625rem;\n  padding: 0.28rem 0.7rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 0.625rem;\n  border: none;\n  padding: 0.625rem 1.375rem;\n  margin: 10px 0;\n  margin-left: -22px;\n  width: 17.25rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  display: flex;\n  width: 4.6rem;\n  justify-content: center;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 0.125rem;\n  height: 100%;\n  background: #1b03a3;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  grid-gap: 0.4375rem;\n  gap: 0.4375rem;\n  border-radius: 0.625rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .history-info-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap-reverse;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .repair-pdf-text[_ngcontent-%COMP%]   .data-history-span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--xa-dark-gray);\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  margin-top: 0.5rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .data-history-span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .content-file[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  cursor: pointer;\n  \n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 4px 8px;\n  grid-gap: 10px;\n  gap: 10px;\n  max-width: 186px;\n  min-width: 186px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  -webkit-filter: drop-shadow(0px 1px 3px rgba(96, 108, 128, 0.05));\n          filter: drop-shadow(0px 1px 3px rgba(96, 108, 128, 0.05));\n  border-radius: 5px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .content-file[_ngcontent-%COMP%]   .folder-icon[_ngcontent-%COMP%] {\n  background: url(/assets/icons/pdf.svg) no-repeat;\n  height: 20px;\n  width: 20px;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .content-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .view-btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 5px;\n  gap: 5px;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .view-btn-container[_ngcontent-%COMP%]   .view-image[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.menu-close[_ngcontent-%COMP%] {\n  width: 0.9px !important;\n  transform: none !important;\n  visibility: visible !important;\n  display: block !important;\n}\n.menu-open[_ngcontent-%COMP%] {\n  width: 25rem !important;\n  transition: width 0.3s ease-in;\n}\n.toggle-button[_ngcontent-%COMP%] {\n  position: fixed;\n  transform: translate3d(0, 0, 0);\n  top: 38%;\n  margin-left: -44px;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.toggle-button[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 2.74794rem;\n  height: 5.33056rem;\n  -webkit-writing-mode: tb-rl;\n          writing-mode: tb-rl;\n  transform: rotate(-180deg);\n  background-color: #fff;\n  border-radius: 0.375rem;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.toggle-button[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.disable-scroll[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n .history-sidenav.mat-drawer-container {\n  background-color: transparent;\n  z-index: 503 !important;\n}\n .history-sidenav.mat-drawer-container .mat-drawer-backdrop {\n  position: fixed;\n}\n.border-repair[_ngcontent-%COMP%] {\n  background-color: rgba(27, 3, 163, 0.05);\n}\n.bg-blue[_ngcontent-%COMP%] {\n  background: rgba(26, 34, 51, 0.2) !important;\n}\n.border-quote[_ngcontent-%COMP%] {\n  background-color: rgba(211, 205, 40, 0.2);\n}\n.bg-yellow[_ngcontent-%COMP%] {\n  background: #d3cd28 !important;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background: rgba(26, 34, 51, 0.05);\n}\n.RepairEstimation[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-estimate);\n  color: var(--xa-black-medium);\n}\n.UploadDocuments[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-document);\n  color: var(--xa-white);\n}\n.AddPhotos[_ngcontent-%COMP%], .UploadPhotos[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-photo);\n  color: var(--xa-white);\n}\n.VehicleDetails[_ngcontent-%COMP%] {\n  background-color: var(--xa-vehicle-detail);\n  color: var(--xa-white);\n}\n.Approved[_ngcontent-%COMP%] {\n  background-color: var(--xa-green);\n  color: var(--xa-black);\n}\n.Rejected[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n}\n.Closed[_ngcontent-%COMP%], .Complete[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n.Draft[_ngcontent-%COMP%] {\n  background-color: var(--xa-draft);\n  color: var(--xa-white);\n}\n.PendingApproval[_ngcontent-%COMP%] {\n  background-color: var(--xa-orange);\n  color: var(--xa-black);\n}\n.ReadytoInvoice[_ngcontent-%COMP%] {\n  background-color: #93BCE1;\n  color: var(--xa-black);\n}\n.RepairInProgress[_ngcontent-%COMP%] {\n  background-color: #4301FE;\n  color: var(--xa-white);\n}\n.Hold[_ngcontent-%COMP%] {\n  background-color: #CE6DD0;\n  color: var(--xa-white);\n}\n.Invoiced[_ngcontent-%COMP%] {\n  background-color: #B463EE;\n  color: var(--xa-white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0FBRUo7QUFBRTtFQUNFLG9EQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBSTtFQUdFLGFBQUE7RUFDQSxzQkFBQTtBQUFOO0FBRU07RUFDRSxhQUFBO0FBQVI7QUFDUTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNWO0FBR007RUFDRSxhQUFBO0FBRFI7QUFJUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7QUFGVjtBQUtVO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFIWjtBQU9NO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTFI7QUFRTTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFOUjtBQVFRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU5WO0FBVU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQUEsY0FBQTtFQUNBLHVCQUFBO0FBUlI7QUFTUTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUFQVjtBQVFVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtBQU5aO0FBUVU7RUFDRSxrQkFBQTtBQU5aO0FBUVU7RUFDRSxnQkFBQTtBQU5aO0FBU1k7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQVBkO0FBVVU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQVJaO0FBV2M7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVGhCO0FBV2dCO0VBQ0UsZ0JBQUE7QUFUbEI7QUFZZ0I7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUdBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx1Q0FBQTtFQUNBLGlFQUFBO1VBQUEseURBQUE7RUFDQSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQWZsQjtBQWlCa0I7RUFDRSxnREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZnBCO0FBa0JrQjtFQUNFLGVBQUE7QUFoQnBCO0FBdUJVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUFyQlo7QUFzQlk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFwQmQ7QUE2QkE7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0VBRUEsOEJBQUE7RUFDQSx5QkFBQTtBQTNCRjtBQTZCQTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QUExQkY7QUE2QkE7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQTFCRjtBQTRCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQTFCSjtBQTJCSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUF6Qk47QUE2QkE7RUFDRSwyQkFBQTtBQTFCRjtBQTZCQTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7QUExQkY7QUE0QkU7RUFDRSxlQUFBO0FBMUJKO0FBOEJBO0VBQ0Usd0NBQUE7QUEzQkY7QUE2QkE7RUFDRSw0Q0FBQTtBQTFCRjtBQTRCQTtFQUNFLHlDQUFBO0FBekJGO0FBMkJBO0VBQ0UsOEJBQUE7QUF4QkY7QUEwQkE7RUFDRSxrQ0FBQTtBQXZCRjtBQTJCQTtFQUNFLDJDQUFBO0VBQ0EsNkJBQUE7QUF4QkY7QUEwQkE7RUFDRSwyQ0FBQTtFQUNBLHNCQUFBO0FBdkJGO0FBMEJBOztFQUVFLHdDQUFBO0VBQ0Esc0JBQUE7QUF2QkY7QUEwQkE7RUFDRSwwQ0FBQTtFQUNBLHNCQUFBO0FBdkJGO0FBMEJBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtBQXZCRjtBQTBCQTtFQUNFLCtCQUFBO0VBQ0Esc0JBQUE7QUF2QkY7QUEwQkE7O0VBRUUsZ0NBQUE7RUFDQSxzQkFBQTtBQXZCRjtBQTBCQTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7QUF2QkY7QUF5QkE7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0FBdEJGO0FBd0JBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQXJCRjtBQXVCQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUFwQkY7QUFzQkE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBbkJGO0FBcUJBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQWxCRiIsImZpbGUiOiJoaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpc3Rvcnktc2xpZGUtcGFuZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmhpc3RvcnktaXRlbXMge1xyXG4gICAgcGFkZGluZzogMi4yNDg1NnJlbSAwLjAxMjY5cmVtIDAuMDAxNDRyZW0gMC43MzczMXJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuaGlzdG9yeS1ibG9jayB7XHJcbiAgICAgIC8vIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgICAgLy8gbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAuaGlzdG9yeS1kYXRlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5kYXRlLXBpbGwge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMzg3NXJlbSAwLjVyZW07XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6IDAuMzc1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44NzVyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuMik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICMzYjgyZjY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGlzdG9yeS1ibG9jay1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy8gZ2FwOiAxcmVtO1xyXG5cclxuICAgICAgICAuYWN0aW9uLXN0YXR1cy1waWxsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogMC42MjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtOztcclxuICAgICAgICAgIC8vIHBhZGRpbmc6IDByZW0gMC42MjVyZW07XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yOHJlbSAwLjdyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5oaXN0b3J5LWRldGFpbHMtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAxLjM3NXJlbTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIycHg7XHJcbiAgICAgICAgd2lkdGg6IDE3LjI1cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwtbGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogNC42cmVtO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHdpZHRoOiAwLjEyNXJlbTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxYjAzYTM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGlzdG9yeS1kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiAwLjQzNzVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICAgICAgLmhpc3RvcnktaW5mbyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAuaGlzdG9yeS1pbmZvLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcclxuICAgICAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlcGFpci1wZGYtdGV4dCB7XHJcbiAgICAgICAgICAgIC5kYXRhLWhpc3Rvcnktc3BhbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItY29udGVudC1wZGYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAuZGF0YS1oaXN0b3J5IHtcclxuICAgICAgICAgICAgICAuZGF0YS1oaXN0b3J5LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIC5kYXRhLWhpc3Rvcnktc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgLyogQXV0byBsYXlvdXQgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTg2cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTg2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAzcHggcmdiYSg5NiwgMTA4LCAxMjgsIDAuMDUpKTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mb2xkZXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbnMvcGRmLnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnZpZXctYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICAudmlldy1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzYjgyZjY7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tZW51LWNsb3NlIHtcclxuICB3aWR0aDogMC45cHggIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnUtb3BlbiB7XHJcbiAgd2lkdGg6IDI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluO1xyXG59XHJcblxyXG4udG9nZ2xlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gIHRvcDogMzglO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gIC5idG4td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi43NDc5NHJlbTtcclxuICAgIGhlaWdodDogNS4zMzA1NnJlbTtcclxuICAgIHdyaXRpbmctbW9kZTogdGItcmw7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZGlzYWJsZS1zY3JvbGwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLmhpc3Rvcnktc2lkZW5hdi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgei1pbmRleDogNTAzICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3JkZXItcmVwYWlyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAzLCAxNjMsIDAuMDUpO1xyXG59XHJcbi5iZy1ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAzNCwgNTEsIDAuMjApICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvcmRlci1xdW90ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIwNSwgNDAsIDAuMjApO1xyXG59XHJcbi5iZy15ZWxsb3cge1xyXG4gIGJhY2tncm91bmQ6ICNkM2NkMjggIWltcG9ydGFudDtcclxufVxyXG4uYmctZ3JleSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNiwgMzQsIDUxLCAwLjA1KTtcclxufVxyXG5cclxuLy8gUGlsbCBTdGF0dXMgY29sb3JzXHJcbi5SZXBhaXJFc3RpbWF0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZXBhaXItZXN0aW1hdGUpO1xyXG4gIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG59XHJcbi5VcGxvYWREb2N1bWVudHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXVwbG9hZC1kb2N1bWVudCk7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLkFkZFBob3RvcyxcclxuLlVwbG9hZFBob3RvcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtdXBsb2FkLXBob3RvKTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uVmVoaWNsZURldGFpbHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXZlaGljbGUtZGV0YWlsKTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uQXBwcm92ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWdyZWVuKTtcclxuICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG59XHJcblxyXG4uUmVqZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlZCk7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLkNsb3NlZCxcclxuLkNvbXBsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uRHJhZnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWRyYWZ0KTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcbi5QZW5kaW5nQXBwcm92YWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLW9yYW5nZSk7XHJcbiAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxufVxyXG4uUmVhZHl0b0ludm9pY2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M0JDRTE7XHJcbiAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxufVxyXG4uUmVwYWlySW5Qcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzMDFGRTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcbi5Ib2xkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0U2REQwO1xyXG4gIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuLkludm9pY2Vke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCNDYzRUU7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    64307:
    /*!*****************************************************************!*\
      !*** ./src/app/shared/new-documents/new-documents.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewDocumentsComponent": function NewDocumentsComponent() {
          return (
            /* binding */
            _NewDocumentsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @microsoft/applicationinsights-web */
      72934);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      87554);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      34122);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      82426);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      75249);
      /* harmony import */


      var src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/modules/quote/chq-new-cases/chq-new-customer/chq-new-customer-form-data-helper */
      83853);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/case/case.service */
      38709);
      /* harmony import */


      var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/monitor-service/monitor.service */
      35196);
      /* harmony import */


      var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/booking/booking.service */
      8985);
      /* harmony import */


      var src_app_services_mediacollection_service_mediacollection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/mediacollection-service/mediacollection.service */
      74178);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../widgets/chq-images-uploader/chq-images-uploader.component */
      39912);
      /* harmony import */


      var _error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../error-page/no-access-error/no-access-error.component */
      54135);

      var _c0 = ["imageUploaders"];

      function NewDocumentsComponent_div_0_chq_images_uploader_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "chq-images-uploader", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cardSelection", function NewDocumentsComponent_div_0_chq_images_uploader_1_Template_chq_images_uploader_cardSelection_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r6.setObservable($event);
          })("stepSkipped", function NewDocumentsComponent_div_0_chq_images_uploader_1_Template_chq_images_uploader_stepSkipped_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r8.stepSkipped();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fileUploaderService", ctx_r2.currentObservable)("footerOptions", ctx_r2.footer)("imageStatusSteps", ctx_r2.imageStatusSteps)("header", ctx_r2.documentHeader);
        }
      }

      function NewDocumentsComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " No Content Available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function NewDocumentsComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "assets/img/", +ctx_r4.documentHeader.isRepairModule ? "addenda-repair.png" : "addenda-quote.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        }
      }

      function NewDocumentsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NewDocumentsComponent_div_0_chq_images_uploader_1_Template, 2, 4, "chq-images-uploader", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, NewDocumentsComponent_div_0_div_2_Template, 10, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, NewDocumentsComponent_div_0_div_3_Template, 4, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.imageStatusSteps && ctx_r0.imageStatusSteps.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.noDocumentData);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.noDocumentData);
        }
      }

      function NewDocumentsComponent_no_access_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "no-access-error");
        }
      }

      var newDocumentHeader = {
        title: 'add_documents',
        step: 3,
        description: 'add_documents_msg',
        stepName: 'step_three'
      };

      var _NewDocumentsComponent = /*#__PURE__*/function () {
        /**
         * constructor
         * @param fb ChangeDetectorRef
         */
        function _NewDocumentsComponent(cd, commonService, route, caseService, monitorService, bookingService, mediaCollectionService) {
          _classCallCheck(this, _NewDocumentsComponent);

          this.cd = cd;
          this.commonService = commonService;
          this.route = route;
          this.caseService = caseService;
          this.monitorService = monitorService;
          this.bookingService = bookingService;
          this.mediaCollectionService = mediaCollectionService;
          this.documentHeader = newDocumentHeader;
          this.imageStatusSteps = [];
          this.allowExtension = ['jpg', 'jpeg', 'png'];
          this.skipButtonModel = {
            label: 'Skip',
            type: 'primary'
          };
          this.footer = {
            text: 'Next add photos',
            icon: 'review',
            route: 'quote/case/photos',
            currentStatus: '',
            status: 'UploadDocuments',
            caseId: ''
          };
          this.documentSizeLimit = 5242880;
          this.noDocumentData = false;
          this.repairId = '';
          this.currentRepairStatus = '';
          this.showNoAccess = false;
          this.statusUpdated = false;

          if (commonService.pageName.closed) {
            commonService.pageName = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
          }

          commonService.pageName.next('document');

          if (this.commonService.accessRight.closed) {
            this.commonService.accessRight = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(true);
          }
        }
        /**
         * ngAfterViewInit hook
         * @param fb FormBuilder
         */


        _createClass(_NewDocumentsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.commonService.updatePage('/quote/case/0', 'document');
            this.cd.detectChanges();
            this.monitorService.logEvent('ngAfterViewInit', ['ChqNewDocumentsComponent', 'addenda-quote']);
          }
          /**
           * check route params
           */

        }, {
          key: "checkRouteParams",
          value: function checkRouteParams() {
            var _this5 = this;

            var _a;

            (_a = this.route.queryParams) === null || _a === void 0 ? void 0 : _a.subscribe(function (params) {
              var codeParam = params['fromPersonal'];

              if (codeParam === 'true' || codeParam === true) {
                _this5.imageStatusSteps = _this5.imageStatusSteps.filter(function (step) {
                  return step.stepName.indexOf('Vehicle Registration') != -1;
                });
              }
            });
          }
          /**
           * set current Observable
           */

        }, {
          key: "setObservable",
          value: function setObservable($event) {
            if ($event.uploadedGuid && $event.uploadedPartGuid) {
              this.currentObservable = this.updateFile.bind(this);
            } else {
              this.currentObservable = this.uploadFile.bind(this);
            }
          }
          /**
           * media template by id
           */

        }, {
          key: "getMediaTemplateByObject",
          value: function getMediaTemplateByObject() {
            var _a;

            this.mediaPartTemplates = this.commonService.getAllChild((_a = this.mediaTemplate) === null || _a === void 0 ? void 0 : _a.mediaTemplates, 'mediaPartTemplates', 'mediaTemplateGuid', {
              'parentProp': 'name',
              'childProp': 'parentName'
            });

            for (var i = 0; i < this.mediaPartTemplates.length; i++) {
              var mediaPart = this.mediaPartTemplates[i];
              var documentStep = (0, src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_0__.documentPartMapper)(mediaPart, i);
              var isAdditionalImage = documentStep.stepName.toLowerCase().indexOf('additional document') != -1;
              var isAdditionalDocumentFromReviewPageOnly = isAdditionalImage && !documentStep.url;
              this.imageStatusSteps.push(Object.assign(Object.assign({}, documentStep), {
                mandatory: mediaPart.mandatory,
                index: i,
                isAdditionalDocumentFromReviewPageOnly: isAdditionalDocumentFromReviewPageOnly,
                parentName: mediaPart.parentName,
                isFront: mediaPart.frontSide,
                updatedDate: mediaPart.mediaPartGuid != '00000000-0000-0000-0000-000000000000' ? mediaPart.updatedDate : '',
                uploadedDate: mediaPart.mediaPartGuid != '00000000-0000-0000-0000-000000000000' ? mediaPart.createdDate : '',
                domainId: this.domainId,
                objectId: this.objectId,
                sizeLimit: mediaPart.sizeLimit,
                allowExtension: mediaPart.allowExtension,
                uploadedPartGuid: mediaPart.mediaPartGuid != '00000000-0000-0000-0000-000000000000' ? mediaPart.mediaPartGuid : '',
                uploadedGuid: mediaPart.mediaGuid != '00000000-0000-0000-0000-000000000000' ? mediaPart.mediaGuid : '',
                partTemplateGuid: mediaPart.mediaPartTemplateGuid,
                templateGuid: mediaPart['mediaTemplateGuid']
              }));
              this.checkRouteParams();
            }
          }
          /**
           * update repair status
           */

        }, {
          key: "updateRepairStatus",
          value: function updateRepairStatus(repairId) {
            var _this6 = this;

            if (!this.statusUpdated) {
              this.statusUpdated = true;
              this.bookingService.updateRepairStatus('UploadDocuments', repairId, '').subscribe({
                next: function next() {
                  _this6.currentRepairStatus = 'UploadDocuments';
                  _this6.footer.currentStatus = _this6.currentRepairStatus;

                  _this6.commonService.showLoading();

                  _this6.bookingService.getRepairDetailByGuid(_this6.repairId).subscribe({
                    next: function next(result) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              if (result === null || result === void 0 ? void 0 : result.data) {
                                this.commonService.repairDetails.next(result.data);
                                this.commonService.bookingId.next(result.data.repairNumber);
                                this.commonService.hideLoading();
                              }

                            case 1:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee, this);
                      }));
                    },
                    error: function error(err) {
                      _this6.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);

                      _this6.commonService.hideLoading();
                    }
                  });
                }
              });
            }
          }
          /**
           * upload file
           */

        }, {
          key: "uploadFile",
          value: function uploadFile(currentStep) {
            var _this7 = this;

            var obj = {
              mediaCollectionId: this.mediaTemplate.collectionGuid,
              domainId: this.domainId,
              objectId: this.objectId,
              mediaTemplateId: currentStep.templateGuid,
              mediaPartTemplateId: currentStep.partTemplateGuid
            };
            this.monitorService.logEvent('uploadFile', ['ChqNewDocumentsComponent', 'addenda-quote', {
              obj: obj
            }]);
            currentStep.uploadInProgress = true;
            currentStep.isSkipped = false;
            currentStep.isUploadFailed = false;
            currentStep.isUploadSuccess = false;
            var messageForUploading = "Your photo is currently uploading won\u2019t be long and we\u2019ll \n    notify you when its uploaded, you can continue to take your photos.";
            this.commonService.showNotification(messageForUploading);
            this.mediaCollectionService.uploadDocument(currentStep.imageFile, obj).subscribe({
              next: function next(res) {
                var _a, _b, _c;

                var responseData = res === null || res === void 0 ? void 0 : res.data;
                var mediaPartTemplate = (_a = _this7.mediaPartTemplates) === null || _a === void 0 ? void 0 : _a.find(function (x) {
                  return x.mediaPartTemplateGuid == (responseData === null || responseData === void 0 ? void 0 : responseData.mediaPartTemplateId);
                });

                if (mediaPartTemplate) {
                  mediaPartTemplate.mediaGuid = responseData.mediaGuid;
                  mediaPartTemplate.mediaPartGuid = responseData.mediaPartGuid;

                  if (location.href.includes('repair') && ((_b = _this7.currentRepairStatus) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'draft') {
                    _this7.updateRepairStatus(_this7.repairId);
                  }

                  if (location.href.includes('quote') && ((_c = _this7.footer.currentStatus) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === 'vehicledetails') {
                    _this7.updateStatus();
                  }

                  _this7.imageUploaders.updateUploadStatus('success', currentStep, null, responseData);
                }
              },
              error: function error(err) {
                if (err.status != 401) {
                  try {
                    _this7.imageUploaders.updateUploadStatus('failed', currentStep, err);
                  } catch (e) {
                    _this7.imageUploaders.updateUploadStatus('failed', currentStep);
                  }
                }

                _this7.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);
              },
              complete: function complete() {
                return _this7.commonService.hideLoading();
              }
            });
          }
          /**
           * update existing document
           */

        }, {
          key: "updateFile",
          value: function updateFile(currentStep) {
            var _this8 = this;

            var obj = {
              objectId: this.objectId,
              mediaGuid: currentStep.uploadedGuid,
              mediaPartGuid: currentStep.uploadedPartGuid
            };
            this.monitorService.logEvent('updateFile', ['ChqNewDocumentsComponent', 'addenda-quote', {
              obj: obj
            }]);
            currentStep.uploadInProgress = true;
            currentStep.isSkipped = false;
            currentStep.isUploadFailed = false;
            currentStep.isUploadSuccess = false;
            this.mediaCollectionService.updateDocument(currentStep.imageFile, obj).subscribe({
              next: function next(res) {
                _this8.imageUploaders.updateUploadStatus('success', currentStep);
              },
              error: function error(err) {
                if (err.status != 401) {
                  try {
                    _this8.imageUploaders.updateUploadStatus('failed', currentStep, err);
                  } catch (e) {
                    _this8.imageUploaders.updateUploadStatus('failed', currentStep);
                  }
                }

                _this8.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);
              },
              complete: function complete() {
                return _this8.commonService.hideLoading();
              }
            });
          }
          /**
           * update status
           */

        }, {
          key: "updateStatus",
          value: function updateStatus() {
            var _this9 = this;

            if (!this.statusUpdated) {
              this.statusUpdated = true;
              this.monitorService.logEvent('updateStatus', ['ChqNewDocumentsComponent', 'addenda-quote', {
                caseId: this.footer.caseId
              }]);
              this.caseService.updateCaseStatus(this.footer.caseId, 'UploadDocuments').subscribe({
                next: function next() {
                  _this9.footer = Object.assign(Object.assign({}, _this9.footer), {
                    status: ''
                  });
                }
              });
            }
          }
          /**
           * map media template Data
           * @param mediaData
           */

        }, {
          key: "mapMediaTemplate",
          value: function mapMediaTemplate(mediaData) {
            var _this10 = this;

            if (this.mediaTemplate) {
              try {
                var _loop = function _loop() {
                  var media = _this10.mediaTemplate.mediaTemplates[i];
                  var mediaDataTemplate = mediaData.find(function (x) {
                    return x.mediaTemplateGuid == media.mediaTemplateGuid;
                  });

                  if (mediaDataTemplate) {
                    var _loop2 = function _loop2() {
                      var mediaPart = media.mediaPartTemplates[j];
                      var mediaDataPart = mediaDataTemplate.mediaParts.find(function (x) {
                        return x.mediaPartTemplateGuid == mediaPart.mediaPartTemplateGuid;
                      });
                      mediaPart.mediaGuid = mediaDataTemplate.mediaGuid;
                      mediaPart.mediaPartGuid = mediaDataPart.mediaPartGuid;
                      mediaPart.createdDate = mediaDataPart.createdDate;
                      mediaPart.updatedDate = mediaDataPart.updatedDate;
                      mediaPart.image = mediaDataPart.getURL;
                      mediaPart.isUploadSuccess = false;

                      if (mediaPart.mediaPartGuid && mediaPart.mediaPartGuid != '00000000-0000-0000-0000-000000000000') {
                        mediaPart.isUploadSuccess = true;
                      }
                    };

                    for (var j = 0; j < media.mediaPartTemplates.length; j++) {
                      _loop2();
                    }
                  }
                };

                for (var i = 0; i < this.mediaTemplate.mediaTemplates.length; i++) {
                  _loop();
                }

                this.mediaTemplate = Object.assign({}, this.mediaTemplate);
              } catch (error) {
                console.log(error);
              }
            }
          }
          /**
           * ngOnInit hook
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            var _a;

            this.commonService.showLoading();
            var id = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot.paramMap.get('id');
            this.monitorService.logEvent('ngOnInit', ['ChqNewDocumentsComponent', 'addenda-quote', {
              caseId: id
            }]);
            this.footer = Object.assign(Object.assign({}, this.footer), {
              route: "quote/case/".concat(id, "/photos"),
              caseId: id
            });
            this.commonService.accessRight.subscribe({
              next: function next(res) {
                if (!res) {
                  _this11.showNoAccess = true;
                }
              }
            });
            var promiseApi = {
              mediaTemplate: this.mediaCollectionService.getMediaTemplate()
            };
            var isRepair = false;

            if (location.href.includes('repair')) {
              promiseApi.bookingDetail = this.bookingService.getRepairDetailByGuid(id);
              isRepair = true;
            } else {
              this.commonService.userProfileData.subscribe(function (res) {
                if (res && res.data) {
                  var organizationDetail = res.data.organizationDetail;
                  _this11.currentOrgId = organizationDetail.id;
                }
              });
              promiseApi.caseDetail = this.caseService.getCaseDetail(id);
            }

            var result = (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)(promiseApi).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(error);
            }));
            result.subscribe(function (dict) {
              if (dict) {
                var mediaTemplate = dict.mediaTemplate;

                if (mediaTemplate) {
                  var mediaTemplateSelected = mediaTemplate.data;

                  if (dict.caseDetail) {
                    var _dict$caseDetail$data = dict.caseDetail.data,
                        caseNumber = _dict$caseDetail$data.caseNumber,
                        _id = _dict$caseDetail$data.id,
                        status = _dict$caseDetail$data.status,
                        inspections = _dict$caseDetail$data.inspections,
                        repairGuid = _dict$caseDetail$data.repairGuid,
                        organizationDetail = _dict$caseDetail$data.organizationDetail;

                    if (_this11.currentOrgId != (organizationDetail === null || organizationDetail === void 0 ? void 0 : organizationDetail.organizationId)) {
                      _this11.commonService.isViewOnly = true;
                    } else {
                      _this11.commonService.isViewOnly = false;
                    }

                    if (inspections.length > 0) {
                      _this11.commonService.inspectionId.next(inspections[0].inspectionId);
                    }

                    _this11.commonService.caseStatus.next(status);

                    if (status.toLowerCase() === 'vehicledetails') {//   this.updateStatus();
                    } else {
                      _this11.footer = Object.assign(Object.assign({}, _this11.footer), {
                        status: ''
                      });
                    }

                    _this11.footer.currentStatus = status;
                    _this11.documentHeader.caseNumber = caseNumber;
                    _this11.objectId = _id;

                    if (repairGuid) {
                      _this11.footer.repairId = repairGuid;
                      _this11.footer.from = 'Quote';
                    }
                  }

                  if (dict.bookingDetail) {
                    var _dict$bookingDetail$d = dict.bookingDetail.data,
                        _id2 = _dict$bookingDetail$d.id,
                        _status = _dict$bookingDetail$d.status,
                        _repairGuid = _dict$bookingDetail$d.repairGuid,
                        quoteId = _dict$bookingDetail$d.quoteId,
                        repairNumber = _dict$bookingDetail$d.repairNumber,
                        isRepairCreatedFromCase = _dict$bookingDetail$d.isRepairCreatedFromCase,
                        booking = _dict$bookingDetail$d.booking;
                    _this11.objectId = _id2;
                    _this11.repairId = _repairGuid; //adding 

                    if (quoteId) {
                      _this11.footer.caseId = quoteId;
                      _this11.footer.from = 'Repair';
                    }

                    _this11.footer.isRepairCreatedFromCase = isRepairCreatedFromCase;
                    _this11.footer.repairId = _repairGuid;
                    _this11.footer.bookingId = booking === null || booking === void 0 ? void 0 : booking.bookingGuid;
                    _this11.footer.currentStatus = _status;

                    _this11.commonService.repairStatus.next(_status); //


                    _this11.currentRepairStatus = _status; // Send booking data in observable

                    _this11.commonService.repairDetails.next(dict.bookingDetail.data);

                    _this11.commonService.bookingId.next(repairNumber);
                  }

                  if (mediaTemplateSelected.length > 0) {
                    var _mediaTemplateSelecte = mediaTemplateSelected[0],
                        _id3 = _mediaTemplateSelecte.id,
                        collectionGuid = _mediaTemplateSelecte.collectionGuid;
                    _this11.mediaTemplateId = _id3;
                    _this11.domainId = 2100;

                    if (isRepair) {
                      _this11.domainId = 3100;
                    }

                    _this11.collectionGuid = collectionGuid;
                    var detailResult = (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)({
                      mediaTemplateDetail: _this11.mediaCollectionService.getMediaTemplateById(collectionGuid),
                      mediaDetail: _this11.mediaCollectionService.getMediaDocumentData(_id3, _this11.objectId, _this11.domainId)
                    }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(error);
                    }));
                    detailResult.subscribe(function (detailDict) {
                      if (detailDict) {
                        var mediaTemplateDetail = detailDict.mediaTemplateDetail,
                            mediaDetail = detailDict.mediaDetail;
                        _this11.mediaTemplate = mediaTemplateDetail.data;
                        _this11.mediaTemplate.mediaTemplates = mediaTemplateDetail.data.mediaTemplates.sort(function (media, mediab) {
                          return media.orderNumber - mediab.orderNumber;
                        });

                        if (mediaDetail.data) {
                          _this11.mapMediaTemplate(mediaDetail.data.medias);
                        }

                        _this11.getMediaTemplateByObject();
                      }

                      _this11.commonService.hideLoading();
                    }, function (err) {
                      _this11.commonService.hideLoading();

                      _this11.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);
                    });
                  } else {
                    _this11.commonService.hideLoading();
                  }
                } else {
                  _this11.noDocumentData = true;

                  _this11.commonService.hideLoading();
                }
              } else {
                _this11.noDocumentData = true;

                _this11.commonService.hideLoading();
              }
            });
            var container = document.querySelector('.addenda-container');

            if (container) {
              container.scrollTop = 0;
            }
          }
          /**
           * handled if step is skipped
           */

        }, {
          key: "stepSkipped",
          value: function stepSkipped() {
            var _a, _b;

            if (location.href.includes('repair') && ((_a = this.currentRepairStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'draft') {
              this.updateRepairStatus(this.repairId);
            }

            if (location.href.includes('quote') && ((_b = this.footer.currentStatus) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'vehicledetails') {
              this.updateStatus();
            }
          }
          /**
           * on destroy
          */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.monitorService.logEvent('ngOnDestroy', ['ChqNewDocumentComponent', 'addenda-quote']);
            this.commonService.accessRight.unsubscribe();

            if (location.href.includes('quote')) {
              this.commonService.isViewOnly = false;
            }
          }
        }]);

        return _NewDocumentsComponent;
      }();

      _NewDocumentsComponent.ɵfac = function NewDocumentsComponent_Factory(t) {
        return new (t || _NewDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_2__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_mediacollection_service_mediacollection_service__WEBPACK_IMPORTED_MODULE_5__.MediacollectionService));
      };

      _NewDocumentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _NewDocumentsComponent,
        selectors: [["new-documents"]],
        viewQuery: function NewDocumentsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.imageUploaders = _t.first);
          }
        },
        inputs: {
          documentHeader: "documentHeader"
        },
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [3, "fileUploaderService", "footerOptions", "imageStatusSteps", "header", "cardSelection", "stepSkipped", 4, "ngIf"], ["class", "wrapper", 4, "ngIf"], ["class", "footer-full-wrapper", 4, "ngIf"], [3, "fileUploaderService", "footerOptions", "imageStatusSteps", "header", "cardSelection", "stepSkipped"], ["imageUploaders", ""], [1, "wrapper"], [1, "no-document-div"], ["src", "assets/icons/no-document.svg"], [1, "no-vehicle-content"], [1, "empty-wrapper"], [1, "step-container"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], [3, "src"]],
        template: function NewDocumentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, NewDocumentsComponent_div_0_Template, 4, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NewDocumentsComponent_no_access_error_1_Template, 1, 0, "no-access-error", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showNoAccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_6__.ChqImagesUploaderComponent, _error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_7__.NoAccessErrorComponent],
        styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n}\n\n.empty-wrapper[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--xa-light-gray);\n}\n\n.step-container[_ngcontent-%COMP%] {\n  padding: 15px 11px;\n  height: 25%;\n  border-bottom: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-white);\n  width: 130px;\n}\n\n.no-document-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.no-document-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 215px;\n}\n\n.no-document-div[_ngcontent-%COMP%]   .no-vehicle-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 21px;\n  text-align: center;\n  color: var(--xa-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1kb2N1bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQVI7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFBUiIsImZpbGUiOiJuZXctZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5lbXB0eS13cmFwcGVye1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxufVxyXG5cclxuLnN0ZXAtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTFweDtcclxuICAgIGhlaWdodDoyNSU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbn1cclxuXHJcbi5uby1kb2N1bWVudC1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTVweDtcclxuICAgIH1cclxuICAgIC5uby12ZWhpY2xlLWNvbnRlbnR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    4704:
    /*!***********************************************************!*\
      !*** ./src/app/shared/new-photos/new-photos.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewPhotosComponent": function NewPhotosComponent() {
          return (
            /* binding */
            _NewPhotosComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @microsoft/applicationinsights-web */
      72934);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      87554);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      34122);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs */
      82426);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs */
      75249);
      /* harmony import */


      var src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/model/chq-upload-model */
      75983);
      /* harmony import */


      var src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/modules/quote/chq-new-cases/chq-new-customer/chq-new-customer-form-data-helper */
      83853);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/case/case.service */
      38709);
      /* harmony import */


      var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/monitor-service/monitor.service */
      35196);
      /* harmony import */


      var src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/inspection-service/inspection.service */
      13975);
      /* harmony import */


      var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/booking/booking.service */
      8985);
      /* harmony import */


      var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/repair-estimate/repair-estimate.service */
      87855);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../helper/directive/has-permission.directive */
      22406);
      /* harmony import */


      var _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../add-photos/add-photos.component */
      62119);
      /* harmony import */


      var _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../widgets/chq-images-uploader/chq-images-uploader.component */
      39912);
      /* harmony import */


      var _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../damage-analysis/damage-analysis.component */
      9988);
      /* harmony import */


      var _error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../error-page/no-access-error/no-access-error.component */
      54135);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var _c0 = ["imageUploaders"];

      function NewPhotosComponent_div_0_ng_container_1_add_photos_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "add-photos", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("mode", function NewPhotosComponent_div_0_ng_container_1_add_photos_1_Template_add_photos_mode_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

            return ctx_r8.handleMode($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("caseData", ctx_r7.caseData)("caseNumber", ctx_r7.photosHeader.caseNumber)("showSPI", ctx_r7.checkRepairTypes)("photosHeader", ctx_r7.addPhotosHeader)("hidden", ctx_r7.hideContent)("showEstimate", ctx_r7.showEstimateButton)("repairData", ctx_r7.repairDetail);
        }
      }

      function NewPhotosComponent_div_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, NewPhotosComponent_div_0_ng_container_1_add_photos_1_Template, 1, 7, "add-photos", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showUploading === false);
        }
      }

      function NewPhotosComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "no_photos_configured"), " ");
        }
      }

      function NewPhotosComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("src", "assets/img/", +ctx_r4.photosHeader.isRepairModule ? "addenda-repair.png" : "addenda-quote.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
        }
      }

      function NewPhotosComponent_div_0_chq_images_uploader_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "chq-images-uploader", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("handleDeleteAllEvent", function NewPhotosComponent_div_0_chq_images_uploader_4_Template_chq_images_uploader_handleDeleteAllEvent_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r11.handleDeleteAll();
          })("backToUpload", function NewPhotosComponent_div_0_chq_images_uploader_4_Template_chq_images_uploader_backToUpload_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r13.setInitialMode();
          })("updateMassUpload", function NewPhotosComponent_div_0_chq_images_uploader_4_Template_chq_images_uploader_updateMassUpload_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r14.updateCurrentStatus($event);
          })("stepSkipped", function NewPhotosComponent_div_0_chq_images_uploader_4_Template_chq_images_uploader_stepSkipped_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r15.stepSkipped();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r5.showDamageAnalysis || !ctx_r5.showUploading)("currentAdditionalModeMultiple", ctx_r5.currentAdditionalModeMultiple)("fileUploaderService", ctx_r5.currentObservable)("footerOptions", ctx_r5.footer)("isMassUpload", ctx_r5.isMultipleUpload)("showReTakeDelete", true)("imageStatusSteps", ctx_r5.imageStatusSteps)("header", ctx_r5.photosHeader)("inspectionId", ctx_r5.inspectionId)("inspection", "photos");
        }
      }

      function NewPhotosComponent_div_0_damage_analysis_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "damage-analysis", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("backEvent", function NewPhotosComponent_div_0_damage_analysis_5_Template_damage_analysis_backEvent_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r16.handleBack($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isBulkUpload", ctx_r6.isMultipleUpload)("minPhotoRequired", ctx_r6.minimumPhotosRequired)("caseDetail", ctx_r6.partialCaseDetail || ctx_r6.repairDetail)("steps", ctx_r6.imageStatusSteps)("isRepairModule", ctx_r6.photosHeader.isRepairModule);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "photo-container": a0
        };
      };

      function NewPhotosComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, NewPhotosComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, NewPhotosComponent_div_0_div_2_Template, 11, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, NewPhotosComponent_div_0_div_3_Template, 4, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, NewPhotosComponent_div_0_chq_images_uploader_4_Template, 2, 10, "chq-images-uploader", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, NewPhotosComponent_div_0_damage_analysis_5_Template, 1, 5, "damage-analysis", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](6, _c1, ctx_r0.photosHeader.isRepairModule));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("chqPermission", "newBooking");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.noImagesData);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.noImagesData);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.showUploading === true || ctx_r0.isMultipleUpload || ctx_r0.imageStatusSteps && ctx_r0.imageStatusSteps.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.showDamageAnalysis);
        }
      }

      function NewPhotosComponent_no_access_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "no-access-error");
        }
      }

      var photosHeader = {
        title: 'add_damage_photos',
        step: 4,
        description: 'damage_photos_msg',
        stepName: 'step_four'
      };

      var _NewPhotosComponent = /*#__PURE__*/function () {
        /**
         * constructor
         * @param fb ChangeDetectorRef
         */
        function _NewPhotosComponent(cd, commonService, route, router, caseService, monitorService, inspectionService, bookingService, estimateService) {
          _classCallCheck(this, _NewPhotosComponent);

          this.cd = cd;
          this.commonService = commonService;
          this.route = route;
          this.router = router;
          this.caseService = caseService;
          this.monitorService = monitorService;
          this.inspectionService = inspectionService;
          this.bookingService = bookingService;
          this.estimateService = estimateService;
          this.photosHeader = photosHeader;
          this.currentUploadMode = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
          this.imageStatusSteps = [];
          this.showUploading = false;
          this.isMultipleUpload = false;
          this.triggerMassUpload = false;
          this.caseStatus = '';
          this.caseId = '0';
          this.bookingId = '';
          this.minimumPhotosRequired = 0;
          this.hideContent = true;
          this.currentAdditionalModeMultiple = false;
          this.hideUploaders = false;
          this.repairTypes = [];
          this.repairType = '';
          this.noImagesData = false;
          this.repairId = '';
          this.inspectionTemplatesJSONString = '';
          this.currentRepairStatus = '';
          this.originalSteps = [];
          this.showNoAccess = false;
          this.footer = {
            text: 'Next create estimate',
            icon: 'boardview',
            route: 'case/gt',
            status: 'UploadPhotos',
            caseId: '',
            currentStatus: '',
            showButton: true,
            showUploadOption: true
          };
          this.statusUpdated = false;

          if (commonService.pageName.closed) {
            commonService.pageName = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
          }

          commonService.pageName.next('photos');

          if (this.commonService.accessRight.closed) {
            this.commonService.accessRight = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(true);
          }
        }
        /**
         * handle back
         */


        _createClass(_NewPhotosComponent, [{
          key: "handleBack",
          value: function handleBack($event) {
            this.showDamageAnalysis = !$event.back;
          }
          /**
           * check repair types
           */

        }, {
          key: "checkRepairTypes",
          get: function get() {
            if (location.href.indexOf('repair') === -1) {
              return true;
            }

            if (this.repairType !== 'repair') {
              return true;
            }

            return this.repairTypes.filter(function (v) {
              return v.repairServiceType === 'Body' || v.repairServiceType === 'Paint';
            }).length > 0;
          }
          /**
           * go to gtEstimate
           */

        }, {
          key: "redirectToGtEstimate",
          value: function redirectToGtEstimate() {
            var _this12 = this;

            var _a, _b;

            this.commonService.showLoading();

            if (((_a = this.caseStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'uploaddocuments' || ((_b = this.caseStatus) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'uploadphotos') {
              this.estimateService.createEstimate(this.caseId, this.inspectionId, this.vehicleId, this.domainId).subscribe({
                next: function next(resp) {
                  var _a;

                  if (resp) {
                    if ((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.url) {
                      location.href = resp.data.url;
                      sessionStorage.setItem('update', '1');
                    }
                  }
                },
                complete: function complete() {
                  _this12.commonService.hideLoading();
                }
              });
            } else {
              this.router.navigate(["/quote/case/".concat(this.caseId, "/estimate")]);
            }
          }
          /**
           * update page status
           */

        }, {
          key: "updateCurrentStatus",
          value: function updateCurrentStatus($event) {
            this.monitorService.logEvent('updateCurrentStatus', ['ChqNewPhotosComponent', 'addenda-quote', {
              caseId: $event
            }]);

            if ($event.initial) {
              this.setInitialMode();
              return;
            }

            this.showUploading = true; // if ((this.footer.repairId && this.footer.from == Modules.quote)
            // || (this.footer.caseId && this.footer.from == Modules.repair)) {
            //   this.commonService.showChangeWarningMessage(this.uploadBulkUploadFile.bind(this, $event.steps),
            //     this.footer.from == Modules.quote ? 'Repair' : 'Quote');
            // } else {
            //   this.uploadBulkUploadFile($event.steps);
            // }

            this.uploadBulkUploadFile($event.steps);
          }
          /**
           * handle delete all
           */

        }, {
          key: "handleDeleteAll",
          value: function handleDeleteAll() {
            this.setInitialMode();
          }
          /**
           * ngAfterViewInit hook
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.commonService.updatePage('/quote/case/0', 'photos');
            this.cd.detectChanges();
            this.monitorService.logEvent('ngAfterViewInit', ['ChqNewPhotosComponent', 'addenda-quote']);
          }
          /**
          * upload bulk file
          * @param uploads
          */

        }, {
          key: "uploadBulkUploadFile",
          value: function uploadBulkUploadFile(uploads) {
            var _this13 = this;

            var _loop3 = function _loop3(i) {
              var img = new Image();
              img.src = uploads[i].image;

              img.onload = function () {
                var uploadObject = {
                  'height': img.height,
                  'width': img.width,
                  'inspectionId': _this13.inspectionId,
                  'templateId': _this13.inspectionTemplateId,
                  'type': _this13.vehicelType || '',
                  'isBulk': true
                };
                var step = uploads[i];
                step.uploadInProgress = true;
                step.isSkipped = false;
                step.isUploadFailed = false;
                step.isUploadSuccess = false;

                _this13.monitorService.logEvent('uploadBulkUploadFile', ['ChqNewPhotosComponent', 'addenda-quote', {
                  uploadObject: uploadObject
                }]);

                _this13.inspectionService.uploadImageBulk(uploadObject, step.imageFile).subscribe({
                  next: function next(data) {
                    var _a, _b, _c, _d;

                    step.url = (_a = data.rawImage) === null || _a === void 0 ? void 0 : _a.rawAzureBlobUrl;
                    step.inspectionItem = data;
                    step.procedureSteps = 'Bulk Upload Image';

                    _this13.imageUploaders.updateUploadStatus('success', step, null, data);

                    _this13.footer = Object.assign(Object.assign({}, _this13.footer), {
                      showUploadOption: false
                    });

                    if (location.href.includes('repair') && (((_b = _this13.currentRepairStatus) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'draft' || ((_c = _this13.currentRepairStatus) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === 'uploaddocuments')) {
                      _this13.updateRepairStatus(_this13.repairId);
                    }

                    if (location.href.includes('quote') && ((_d = _this13.footer.currentStatus) === null || _d === void 0 ? void 0 : _d.toLowerCase()) === 'uploaddocuments') {
                      _this13.updateStatus();
                    }
                  },
                  error: function error(err) {
                    if (err.status != 401) {
                      _this13.imageUploaders.imageStatusSteps = _this13.imageUploaders.imageStatusSteps.filter(function (ig) {
                        return ig.index !== step.index || ig.stepName !== step.stepName || ig.uploadInProgress !== true;
                      });

                      _this13.imageUploaders.updateUploadStatus('failed', step, err, null, true);
                    }

                    _this13.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_15__.SeverityLevel.Error);
                  }
                });
              };
            };

            for (var i = 0; i < (uploads === null || uploads === void 0 ? void 0 : uploads.length); i++) {
              _loop3(i);
            }
          }
          /**
           * update repair status
           */

        }, {
          key: "updateRepairStatus",
          value: function updateRepairStatus(repairId) {
            var _this14 = this;

            if (!this.statusUpdated) {
              this.statusUpdated = true;
              this.bookingService.updateRepairStatus('UploadPhotos', repairId, '').subscribe({
                next: function next() {
                  _this14.currentRepairStatus = 'UploadPhotos';
                  _this14.footer.currentStatus = _this14.currentRepairStatus;

                  _this14.commonService.showLoading();

                  _this14.bookingService.getRepairDetailByGuid(_this14.repairId).subscribe({
                    next: function next(result) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              if (result === null || result === void 0 ? void 0 : result.data) {
                                this.commonService.repairDetails.next(result.data);
                                this.commonService.bookingId.next(result.data.repairNumber);
                                this.commonService.hideLoading();
                              }

                            case 1:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2, this);
                      }));
                    },
                    error: function error(err) {
                      _this14.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_15__.SeverityLevel.Error);

                      _this14.commonService.hideLoading();
                    }
                  });
                }
              });
            }
          }
          /**
           * upload photos
           */

        }, {
          key: "uploadFile",
          value: function uploadFile(currentStep) {
            var _this15 = this;

            var uploadObject = {
              'height': currentStep.imageHeight,
              'width': currentStep.imageWidth,
              'inspectionId': this.inspectionId,
              'templateId': this.inspectionTemplateId,
              'inspectionitemId': currentStep.inspectionItem.id,
              'type': this.vehicelType || '',
              'isBulk': false
            };
            this.monitorService.logEvent('uploadFile', ['ChqNewPhotosComponent', 'addenda-quote', {
              uploadObject: uploadObject
            }]);
            currentStep.uploadInProgress = true;
            currentStep.isSkipped = false;
            currentStep.isUploadFailed = false;
            currentStep.isUploadSuccess = false;
            this.commonService.inProgressSteps.next(1);
            this.footer = Object.assign(Object.assign({}, this.footer), {
              showUploadOption: false
            });
            this.commonService.showNotification("Your photo \u2018".concat(currentStep.stepName, "\u2019 is currently uploading won\u2019t be long and we\u2019ll notify \n       you when its uploaded, you can continue to take your photos."));
            this.inspectionService.uploadImageBulk(uploadObject, currentStep.imageFile).subscribe({
              next: function next(data) {
                var _a, _b, _c, _d;

                var msg = "Your photo \u2018".concat(currentStep.stepName, "\u2019 is uploaded successfully.");

                _this15.commonService.showNotification(msg);

                var inspectionItem = (_a = _this15.inspectionItemTemplates) === null || _a === void 0 ? void 0 : _a.find(function (x) {
                  return x.inspectionItem.id == (data === null || data === void 0 ? void 0 : data.id);
                });
                inspectionItem.inspectionItem.rawAzureBlobUrl = (_b = data.rawImage) === null || _b === void 0 ? void 0 : _b.rawAzureBlobUrl;

                if (inspectionItem) {
                  currentStep.url = (_c = data.rawImage) === null || _c === void 0 ? void 0 : _c.rawAzureBlobUrl;

                  _this15.imageUploaders.updateUploadStatus('success', currentStep, null, data);
                }

                if (location.href.includes('repair') && (_this15.currentRepairStatus == 'Draft' || _this15.currentRepairStatus === 'UploadDocuments')) {
                  _this15.updateRepairStatus(_this15.repairId);
                }

                if (location.href.includes('quote') && ((_d = _this15.footer.currentStatus) === null || _d === void 0 ? void 0 : _d.toLowerCase()) === 'uploaddocuments') {
                  _this15.updateStatus();
                }
              },
              error: function error(err) {
                if (err.status != 401) {
                  var msg = "Your photo \u2018".concat(currentStep.stepName, "\u2019 failed to upload. Please try to upload again.");

                  _this15.commonService.showNotification(msg);

                  _this15.imageUploaders.updateUploadStatus('failed', currentStep, err);

                  _this15.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_15__.SeverityLevel.Error);
                }
              }
            });
          }
          /**
           * on destroy
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.commonService.pageName.unsubscribe();
            this.commonService.accessRight.unsubscribe();

            if (location.href.includes('quote')) {
              this.commonService.isViewOnly = false;
            }

            this.monitorService.logEvent('ngOnDestroy', ['ChqNewPhotosComponent', 'addenda-quote']);
          }
          /**
           * showRepairButton
           */

        }, {
          key: "showEstimateButton",
          get: function get() {
            var _a, _b;

            return ((_a = this.currentInspectionTemplate) === null || _a === void 0 ? void 0 : _a.minImageLimit) === 0 && ((_b = this.inspectionItemTemplates) === null || _b === void 0 ? void 0 : _b.filter(function (value) {
              return value.isSkipEnabled !== true;
            }).length) === 0;
          }
          /**
           * map inspection from api
           * @param inspectionData
           */

        }, {
          key: "mapInspection",
          value: function mapInspection(inspectionData) {
            var _this16 = this;

            var _a, _b, _c, _d, _e, _f;

            if (inspectionData) {
              try {
                this.inspection = inspectionData;
                this.uploadType = this.inspection.uploadType;
                var currentMode = 'SPI';

                if (this.uploadType) {
                  this.footer = Object.assign(Object.assign({}, this.footer), {
                    showUploadOption: false
                  });
                }

                if (this.uploadType === 'Bulk') {
                  currentMode = 'BULK';
                }

                var bulkUploadTemplateItem = (_a = this.inspectionTemplates) === null || _a === void 0 ? void 0 : _a.filter(function (step) {
                  return step.name === 'Bulk Upload Image';
                });
                var bulkUploadedItemsWithImages = (_b = this.inspection.inspectionItems) === null || _b === void 0 ? void 0 : _b.filter(function (step) {
                  return (step.name === 'Bulk Upload Image' || step.inspectionItemTemplateID === bulkUploadTemplateItem[0].id) && step.rawAzureBlobUrl;
                });

                if ((bulkUploadedItemsWithImages === null || bulkUploadedItemsWithImages === void 0 ? void 0 : bulkUploadedItemsWithImages.length) > 0 || this.uploadType === 'Bulk') {
                  var massUploadItems = [];
                  this.currentUploadMode.emit({
                    'mode': 'multiple'
                  });

                  for (var i in bulkUploadedItemsWithImages) {
                    var currentObj = Object.assign(Object.assign({}, bulkUploadTemplateItem[0]), {
                      name: bulkUploadedItemsWithImages[i].name || bulkUploadTemplateItem[0].name,
                      inspectionItem: bulkUploadedItemsWithImages[i]
                    });
                    massUploadItems.push(currentObj);
                  }

                  this.inspectionItemTemplates = massUploadItems;
                } else {
                  this.currentUploadMode.emit({
                    'mode': 'single'
                  });
                  (_c = this.inspectionTemplates) === null || _c === void 0 ? void 0 : _c.map(function (chqInspectionStep) {
                    var _a;

                    var item = (_a = _this16.inspection.inspectionItems) === null || _a === void 0 ? void 0 : _a.find(function (el) {
                      return el.inspectionItemTemplateID == chqInspectionStep.id;
                    });

                    if (item) {
                      chqInspectionStep['inspectionItem'] = item;
                    }
                  });
                  this.inspectionItemTemplates = (_d = this.inspectionTemplates) === null || _d === void 0 ? void 0 : _d.filter(function (step) {
                    return step.name != 'Bulk Upload Image';
                  });
                }

                if ((bulkUploadTemplateItem === null || bulkUploadTemplateItem === void 0 ? void 0 : bulkUploadTemplateItem.length) > 0) this.inspectionTemplateId = bulkUploadTemplateItem[0].id;
                (_e = this.inspectionItemTemplates) === null || _e === void 0 ? void 0 : _e.map(function (x) {
                  var _a, _b;

                  if ((_a = x.inspectionItem) === null || _a === void 0 ? void 0 : _a.rawAzureBlobUrl) {
                    x.isUploadSuccess = true;
                    x.image = (_b = x.inspectionItem) === null || _b === void 0 ? void 0 : _b.rawAzureBlobUrl;
                  } else {
                    if (!x.inspectionItem) {
                      x.inspectionItem = {
                        rawAzureBlobUrl: ''
                      };
                    }

                    x.inspectionItem.rawAzureBlobUrl = '';
                    x.isUploadFailed = false;
                    x.isUploadSuccess = false;
                    x.uploadInProgress = false;
                  }
                });

                if (this.uploadType) {
                  if (currentMode === 'SPI') {
                    this.isMultipleUpload = false;
                    this.showUploading = true;

                    if (this.addPhotosHeader.isRepairModule) {
                      this.photosHeader = Object.assign(Object.assign({}, this.photosHeader), {
                        title: 'back_smart_photo'
                      });
                    }

                    this.minimumPhotosRequired = (_f = this.inspectionItemTemplates) === null || _f === void 0 ? void 0 : _f.filter(function (value) {
                      return value.isSkipEnabled !== true;
                    }).length;
                    this.currentObservable = this.uploadFile.bind(this);
                  } else {
                    this.currentObservable = this.uploadBulkUploadFile.bind(this);
                    this.isMultipleUpload = true;
                    this.minimumPhotosRequired = this.currentInspectionTemplate.minImageLimit;
                    this.triggerMassUpload = true;
                    this.isBulkUploaded = true;

                    if (this.addPhotosHeader.isRepairModule) {
                      this.photosHeader = Object.assign(Object.assign({}, this.photosHeader), {
                        title: 'bulk_upload'
                      });
                    }
                  }
                }
              } catch (error) {
                console.log(error);
              }
            }
          }
          /**
           * inspection detail by id
           */

        }, {
          key: "getInspectionTemplateByObject",
          value: function getInspectionTemplateByObject() {
            var _a, _b, _c, _d, _e;

            for (var i = 0; i < ((_a = this.inspectionItemTemplates) === null || _a === void 0 ? void 0 : _a.length); i++) {
              var templatePart = this.inspectionItemTemplates[i];
              var inspectionStep = (0, src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.inspectionpartPartMapper)(templatePart, i);
              var isAdditionalImage = ((_b = inspectionStep.stepName) === null || _b === void 0 ? void 0 : _b.toLowerCase().indexOf('additional photo')) != -1;
              var isMassUpload = ((_c = inspectionStep.stepName) === null || _c === void 0 ? void 0 : _c.toLowerCase().indexOf('bulk upload image')) != -1;
              var isAdditionalDocumentFromReviewPageOnly = isAdditionalImage && !inspectionStep.url;
              this.imageStatusSteps.push(Object.assign(Object.assign({}, inspectionStep), {
                mandatory: !templatePart.isSkipEnabled,
                index: i,
                isAdditionalDocumentFromReviewPageOnly: isAdditionalDocumentFromReviewPageOnly,
                isMassUpload: isMassUpload,
                updatedDate: inspectionStep.url ? (_d = templatePart === null || templatePart === void 0 ? void 0 : templatePart.inspectionItem) === null || _d === void 0 ? void 0 : _d.updatedDate : '',
                uploadedDate: inspectionStep.url ? (_e = templatePart === null || templatePart === void 0 ? void 0 : templatePart.inspectionItem) === null || _e === void 0 ? void 0 : _e.created : '',
                domainId: this.domainId,
                objectId: this.objectId,
                uploadedPartGuid: '',
                uploadedGuid: ''
              }));
            }
          }
          /**
           * update status
           */

        }, {
          key: "updateStatus",
          value: function updateStatus() {
            var _this17 = this;

            if (!this.statusUpdated) {
              this.statusUpdated = true;
              this.monitorService.logEvent('updateStatus', ['ChqNewPhotosComponent', 'addenda-quote']);
              this.caseService.updateCaseStatus(this.caseId, 'UploadPhotos').subscribe({
                next: function next() {
                  _this17.footer = Object.assign(Object.assign({}, _this17.footer), {
                    status: ''
                  });
                  _this17.partialCaseDetail.status = 'UploadPhotos';
                }
              });
            }
          }
          /**
           * handled if step is skipped
           */

        }, {
          key: "stepSkipped",
          value: function stepSkipped() {
            var _a, _b, _c;

            if (location.href.includes('repair') && (((_a = this.currentRepairStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'draft' || ((_b = this.currentRepairStatus) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'uploaddocuments')) {
              this.updateRepairStatus(this.repairId);
            }

            if (location.href.includes('quote') && ((_c = this.footer.currentStatus) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === 'uploaddocuments') {
              this.updateStatus();
            }
          }
          /**
           * load server details
           */

        }, {
          key: "loadApiData",
          value: function loadApiData(id) {
            var _this18 = this;

            if (id && id != '0') {
              this.caseId = id;
              this.bookingId = id;
              this.commonService.showLoading();
              this.inspectionService.getInspectionTemplateList().subscribe({
                next: function next(inspectionList) {
                  var isRepair = false;
                  var inspectionTemplateId = 0;

                  if (location.href.includes('repair')) {
                    isRepair = true;
                  }

                  var repairInspectionTemplate = inspectionList === null || inspectionList === void 0 ? void 0 : inspectionList.data;

                  if ((repairInspectionTemplate === null || repairInspectionTemplate === void 0 ? void 0 : repairInspectionTemplate.length) > 0) {
                    _this18.commonService.repairInspectionTemplate = repairInspectionTemplate[0];
                    inspectionTemplateId = repairInspectionTemplate[0].id;
                  }

                  var promiseApi = {};
                  promiseApi.inspectionTemplate = _this18.inspectionService.getInspectionTemplate(inspectionTemplateId);

                  if (isRepair) {
                    promiseApi.bookingDetail = _this18.bookingService.getRepairDetailByGuid(id);
                  } else {
                    _this18.commonService.userProfileData.subscribe(function (res) {
                      if (res && res.data) {
                        var organizationDetail = res.data.organizationDetail;
                        _this18.currentOrgId = organizationDetail.id;
                      }
                    });

                    promiseApi.caseDetail = _this18.caseService.getCaseDetail(id);
                  }

                  var serverDetails = (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)(promiseApi).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(function (error) {
                    return (0, rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(error);
                  }));
                  serverDetails.subscribe({
                    next: function next(resultMap) {
                      if (resultMap.inspectionTemplate) {
                        var inspectionTemplateDetail = resultMap.inspectionTemplate.inspectionItemTemplates;
                        _this18.currentInspectionTemplate = resultMap.inspectionTemplate;

                        if (resultMap.inspectionDetail) {
                          _this18.inspectionDetail = resultMap.inspectionDetail;
                        }

                        _this18.inspectionTemplates = inspectionTemplateDetail;
                        _this18.inspectionTemplatesJSONString = JSON.stringify(_this18.inspectionTemplates);

                        if (resultMap.caseDetail) {
                          var _resultMap$caseDetail = resultMap.caseDetail.data,
                              caseNumber = _resultMap$caseDetail.caseNumber,
                              _id4 = _resultMap$caseDetail.id,
                              status = _resultMap$caseDetail.status,
                              statusId = _resultMap$caseDetail.statusId,
                              domainID = _resultMap$caseDetail.domainID,
                              inspections = _resultMap$caseDetail.inspections,
                              vehicleModel = _resultMap$caseDetail.vehicleModel,
                              vehicleId = _resultMap$caseDetail.vehicleId,
                              organizationDetail = _resultMap$caseDetail.organizationDetail;
                          _this18.caseData = resultMap.caseDetail.data;
                          _this18.partialCaseDetail = resultMap.caseDetail.data;

                          if (_this18.currentOrgId != (organizationDetail === null || organizationDetail === void 0 ? void 0 : organizationDetail.organizationId)) {
                            _this18.commonService.isViewOnly = true;
                          } else {
                            _this18.commonService.isViewOnly = false;
                          }

                          _this18.vehicelType = vehicleModel;
                          _this18.vehicleId = vehicleId;
                          _this18.domainId = domainID;

                          _this18.commonService.caseStatus.next(status);

                          _this18.caseStatus = status;

                          if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'uploaddocuments') {//this.updateStatus();
                          } else {
                            _this18.footer = Object.assign(Object.assign({}, _this18.footer), {
                              status: '',
                              caseId: _id4
                            });
                          }

                          _this18.footer.currentStatus = status;

                          if ((inspections === null || inspections === void 0 ? void 0 : inspections.length) > 0) {
                            _this18.inspectionId = inspections[0].inspectionId;

                            _this18.commonService.inspectionId.next(_this18.inspectionId);
                          }

                          _this18.photosHeader.caseNumber = caseNumber;

                          if (_this18.caseData.repairGuid) {
                            _this18.footer.repairId = _this18.caseData.repairGuid;
                            _this18.footer.from = src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_0__.Modules.quote;
                          }

                          _this18.objectId = _id4;
                        }

                        if (resultMap.bookingDetail) {
                          var _resultMap$bookingDet = resultMap.bookingDetail.data,
                              _id5 = _resultMap$bookingDet.id,
                              vehicle = _resultMap$bookingDet.vehicle,
                              repairServiceTypes = _resultMap$bookingDet.repairServiceTypes,
                              repairGuid = _resultMap$bookingDet.repairGuid,
                              domainId = _resultMap$bookingDet.domainId,
                              _status2 = _resultMap$bookingDet.status,
                              quoteId = _resultMap$bookingDet.quoteId,
                              repairType = _resultMap$bookingDet.repairType,
                              repairNumber = _resultMap$bookingDet.repairNumber,
                              booking = _resultMap$bookingDet.booking,
                              isRepairCreatedFromCase = _resultMap$bookingDet.isRepairCreatedFromCase;
                          _this18.repairDetail = resultMap.bookingDetail.data;
                          var _vehicleModel = vehicle.vehicleModel,
                              _vehicleId = vehicle.vehicleId;
                          _this18.objectId = _id5;
                          _this18.domainId = domainId;
                          _this18.repairId = repairGuid;
                          _this18.currentRepairStatus = _status2;
                          _this18.repairTypes = repairServiceTypes;
                          _this18.repairType = repairType;
                          _this18.inspectionId = vehicle.inspectionId;
                          _this18.vehicelType = _vehicleModel;
                          _this18.vehicleId = _vehicleId;
                          _this18.footer = Object.assign(Object.assign({}, _this18.footer), {
                            currentStatus: _status2,
                            isRepairModule: true,
                            caseId: quoteId,
                            from: src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_0__.Modules.repair,
                            repairTypes: repairServiceTypes,
                            isRepairCreatedFromCase: isRepairCreatedFromCase,
                            bookingId: booking === null || booking === void 0 ? void 0 : booking.bookingGuid
                          }); // Send booking data in observable

                          _this18.commonService.repairDetails.next(resultMap.bookingDetail.data);

                          _this18.commonService.bookingId.next(repairNumber);

                          _this18.commonService.repairStatus.next(_status2);
                        }

                        if (_this18.inspectionId) {
                          _this18.inspectionService.getInspection(_this18.inspectionId).subscribe({
                            next: function next(inspectionDetailResponse) {
                              if (inspectionDetailResponse) {
                                _this18.mapInspection(inspectionDetailResponse);

                                _this18.noImagesData = false;

                                _this18.getInspectionTemplateByObject();

                                setTimeout(function () {
                                  _this18.hideContent = false;

                                  if (_this18.isBulkUploaded) {
                                    _this18.showUploading = true;
                                    _this18.isMultipleUpload = true;
                                    _this18.currentAdditionalModeMultiple = true;
                                  }

                                  if (_this18.uploadType) {
                                    _this18.imageUploaders.goToReview();
                                  }
                                });
                              }
                            },
                            error: function error() {
                              _this18.noImagesData = true;
                            },
                            complete: function complete() {
                              _this18.commonService.hideLoading();
                            }
                          });
                        } else {
                          _this18.noImagesData = true;
                          _this18.hideContent = false;

                          _this18.commonService.hideLoading();
                        }
                      } else {
                        _this18.noImagesData = true;

                        _this18.commonService.hideLoading();
                      }
                    }
                  });
                },
                error: function error() {
                  _this18.noImagesData = true;

                  _this18.commonService.hideLoading();
                }
              });
            }
          }
          /**
           * oninit
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            var _a;

            var currentObjectId = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot.paramMap.get('id');
            this.addPhotosHeader = Object.assign(Object.assign({}, this.photosHeader), {
              isHeaderOnly: false
            });
            this.monitorService.logEvent('ngOnInit', ['ChqNewPhotosComponent', 'addenda-quote', {
              caseId: currentObjectId,
              repairId: currentObjectId
            }]);
            this.footer = Object.assign(Object.assign({}, this.footer), {
              caseId: this.photosHeader.isRepairModule ? '' : currentObjectId,
              repairId: this.photosHeader.isRepairModule ? currentObjectId : '',
              handleBack: this.handleBack.bind(this),
              finalRedirection: this.redirectToGtEstimate.bind(this)
            });
            this.commonService.accessRight.subscribe({
              next: function next(res) {
                if (!res) {
                  _this19.showNoAccess = true;
                }
              }
            });
            this.loadApiData(currentObjectId);
            var container = document.querySelector('.addenda-container');

            if (container) {
              container.scrollTop = 0;
            }

            this.currentObservable = this.uploadFile.bind(this);
          }
          /**
           * reload inspection and map
           */

        }, {
          key: "reloadInspection",
          value: function reloadInspection() {
            var _this20 = this;

            this.commonService.showLoading();
            this.inspectionTemplates = JSON.parse(this.inspectionTemplatesJSONString);

            if (this.inspectionId) {
              this.inspectionService.getInspection(this.inspectionId).subscribe({
                next: function next(inspectionDetailResponse) {
                  if (inspectionDetailResponse) {
                    _this20.mapInspection(inspectionDetailResponse);

                    _this20.getInspectionTemplateByObject();

                    _this20.isMultipleUpload = false;
                    _this20.isBulkUploaded = false;
                    _this20.currentAdditionalModeMultiple = false;
                    _this20.triggerMassUpload = false;
                    setTimeout(function () {
                      _this20.hideContent = false;
                      _this20.showUploading = true;
                    });
                  }
                },
                complete: function complete() {
                  _this20.commonService.hideLoading();
                }
              });
            }
          }
          /**
           * set to initial mode
           */

        }, {
          key: "setInitialMode",
          value: function setInitialMode() {
            this.showUploading = false;
            this.imageStatusSteps = [];
            this.triggerMassUpload = false;
            this.isBulkUploaded = false;
            this.imageUploaders.isReviewSection = false;
            this.isMultipleUpload = false;
            this.currentAdditionalModeMultiple = false;
          }
          /**
           *handle mode selection
           * @param $event
           */

        }, {
          key: "handleMode",
          value: function handleMode($event) {
            var _a;

            this.monitorService.logEvent('handleMode', ['ChqNewPhotosComponent', 'addenda-quote', {
              $event: $event
            }]);

            if (!this.inspectionId) {
              this.currentUploadMode.emit({
                'mode': 'error',
                'id': this.bookingId
              });
              return;
            }

            this.currentUploadMode.emit($event);

            if ($event.mode === 'single') {
              if (((_a = this.imageStatusSteps) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                this.isMultipleUpload = false;
                this.isBulkUploaded = false;
                this.currentAdditionalModeMultiple = false;
                this.triggerMassUpload = false;
                this.minimumPhotosRequired = this.inspectionItemTemplates.filter(function (value) {
                  return value.isSkipEnabled !== true;
                }).length;
                this.reloadInspection();
              } else {
                this.isMultipleUpload = false;
                this.showUploading = true;
                this.isBulkUploaded = false;
                this.currentAdditionalModeMultiple = false;
                this.minimumPhotosRequired = this.currentInspectionTemplate.minImageLimit;
                this.triggerMassUpload = false;
              }

              this.currentObservable = this.uploadFile.bind(this);
            } else {
              this.imageStatusSteps = [];
              this.currentObservable = this.uploadBulkUploadFile.bind(this);
              this.isMultipleUpload = true;
              this.triggerMassUpload = true;
              this.showUploading = true;
            }
          }
        }]);

        return _NewPhotosComponent;
      }();

      _NewPhotosComponent.ɵfac = function NewPhotosComponent_Factory(t) {
        return new (t || _NewPhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_5__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_6__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_7__.RepairEstimateService));
      };

      _NewPhotosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: _NewPhotosComponent,
        selectors: [["new-photos"]],
        viewQuery: function NewPhotosComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.imageUploaders = _t.first);
          }
        },
        inputs: {
          photosHeader: "photosHeader"
        },
        outputs: {
          currentUploadMode: "currentUploadMode"
        },
        decls: 2,
        vars: 2,
        consts: [[3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"], [4, "chqPermission"], ["class", "wrapper", 4, "ngIf"], ["class", "footer-full-wrapper", 4, "ngIf"], [3, "hidden", "currentAdditionalModeMultiple", "fileUploaderService", "footerOptions", "isMassUpload", "showReTakeDelete", "imageStatusSteps", "header", "inspectionId", "inspection", "handleDeleteAllEvent", "backToUpload", "updateMassUpload", "stepSkipped", 4, "ngIf"], [3, "isBulkUpload", "minPhotoRequired", "caseDetail", "steps", "isRepairModule", "backEvent", 4, "ngIf"], [3, "caseData", "caseNumber", "showSPI", "photosHeader", "hidden", "showEstimate", "repairData", "mode", 4, "ngIf"], [3, "caseData", "caseNumber", "showSPI", "photosHeader", "hidden", "showEstimate", "repairData", "mode"], [1, "wrapper"], [1, "no-document-div"], ["src", "assets/icons/no-document.svg"], [1, "no-vehicle-content"], [1, "empty-wrapper"], [1, "step-container"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], [3, "src"], [3, "hidden", "currentAdditionalModeMultiple", "fileUploaderService", "footerOptions", "isMassUpload", "showReTakeDelete", "imageStatusSteps", "header", "inspectionId", "inspection", "handleDeleteAllEvent", "backToUpload", "updateMassUpload", "stepSkipped"], ["imageUploaders", ""], [3, "isBulkUpload", "minPhotoRequired", "caseDetail", "steps", "isRepairModule", "backEvent"]],
        template: function NewPhotosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, NewPhotosComponent_div_0_Template, 6, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, NewPhotosComponent_no_access_error_1_Template, 1, 0, "no-access-error", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.showNoAccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_8__.HasPermissionDirective, _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_9__.AddPhotosComponent, _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_10__.ChqImagesUploaderComponent, _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_11__.DamageAnalysisComponent, _error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_12__.NoAccessErrorComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
        styles: [".photo-container[_ngcontent-%COMP%] {\n  margin-left: calc(6px + 1.5vw);\n  margin-right: calc(5px + 1.5vw);\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n}\n\n.empty-wrapper[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--xa-light-gray);\n}\n\n.step-container[_ngcontent-%COMP%] {\n  padding: 15px 11px;\n  height: 25%;\n  border-bottom: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-white);\n  width: 130px;\n}\n\n.no-document-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.no-document-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 215px;\n}\n\n.no-document-div[_ngcontent-%COMP%]   .no-vehicle-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 21px;\n  text-align: center;\n  color: var(--xa-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1waG90b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtFQUNBLCtCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSwyQ0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRFI7O0FBR0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFEUiIsImZpbGUiOiJuZXctcGhvdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvLWNvbnRhaW5lciB7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNnB4ICsgMS41dncpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDVweCArIDEuNXZ3KTtcclxufVxyXG5cclxuLndyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5lbXB0eS13cmFwcGVye1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxufVxyXG5cclxuLnN0ZXAtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTFweDtcclxuICAgIGhlaWdodDoyNSU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbn1cclxuXHJcbi5uby1kb2N1bWVudC1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTVweDtcclxuICAgIH1cclxuICAgIC5uby12ZWhpY2xlLWNvbnRlbnR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/widgets/chq-widgets.module */
      85510);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var src_app_guards_deactivate_gaurd_deactivate_gaurd_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/guards/deactivate-gaurd/deactivate-gaurd.guard */
      38080);
      /* harmony import */


      var src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/error-page/error.module */
      88784);
      /* harmony import */


      var _new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-documents/new-documents.component */
      64307);
      /* harmony import */


      var _new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./new-photos/new-photos.component */
      4704);
      /* harmony import */


      var _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-photos/add-photos.component */
      62119);
      /* harmony import */


      var _icons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../icons.module */
      25852);
      /* harmony import */


      var _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./damage-analysis/damage-analysis.component */
      9988);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _helper_directive_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../helper/directive.module */
      20363);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _history_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./history/history.component */
      65504);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316); //import { NgxPrintModule } from 'ngx-print';


      var _SharedModule = /*#__PURE__*/_createClass(function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      });

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [src_app_guards_deactivate_gaurd_deactivate_gaurd_guard__WEBPACK_IMPORTED_MODULE_1__.CanDeactivateGuard],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _icons_module__WEBPACK_IMPORTED_MODULE_6__.IconsModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _helper_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_3__.NewDocumentsComponent, _new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_4__.NewPhotosComponent, _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_5__.AddPhotosComponent, _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_7__.DamageAnalysisComponent, _history_history_component__WEBPACK_IMPORTED_MODULE_9__.HistoryComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _icons_module__WEBPACK_IMPORTED_MODULE_6__.IconsModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _helper_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule],
          exports: [_new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_3__.NewDocumentsComponent, _new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_4__.NewPhotosComponent, _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_5__.AddPhotosComponent, _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_7__.DamageAnalysisComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default-src_app_shared_shared_module_ts-es5.js.map