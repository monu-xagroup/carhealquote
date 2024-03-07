(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_repair_module_ts"], {
    /***/
    21299:
    /*!***********************************************!*\
      !*** ./node_modules/dayjs/plugin/timezone.js ***!
      \***********************************************/

    /***/
    function _(module) {
      !function (t, e) {
        true ? module.exports = e() : 0;
      }(this, function () {
        "use strict";

        var t = {
          year: 0,
          month: 1,
          day: 2,
          hour: 3,
          minute: 4,
          second: 5
        },
            e = {};
        return function (n, i, o) {
          var r,
              a = function a(t, n, i) {
            void 0 === i && (i = {});

            var o = new Date(t),
                r = function (t, n) {
              void 0 === n && (n = {});
              var i = n.timeZoneName || "short",
                  o = t + "|" + i,
                  r = e[o];
              return r || (r = new Intl.DateTimeFormat("en-US", {
                hour12: !1,
                timeZone: t,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: i
              }), e[o] = r), r;
            }(n, i);

            return r.formatToParts(o);
          },
              u = function u(e, n) {
            for (var i = a(e, n), r = [], u = 0; u < i.length; u += 1) {
              var f = i[u],
                  s = f.type,
                  m = f.value,
                  c = t[s];
              c >= 0 && (r[c] = parseInt(m, 10));
            }

            var d = r[3],
                l = 24 === d ? 0 : d,
                h = r[0] + "-" + r[1] + "-" + r[2] + " " + l + ":" + r[4] + ":" + r[5] + ":000",
                v = +e;
            return (o.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
          },
              f = i.prototype;

          f.tz = function (t, e) {
            void 0 === t && (t = r);
            var n = this.utcOffset(),
                i = this.toDate(),
                a = i.toLocaleString("en-US", {
              timeZone: t
            }),
                u = Math.round((i - new Date(a)) / 1e3 / 60),
                f = o(a, {
              locale: this.$L
            }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i.getTimezoneOffset() / 15) - u, !0);

            if (e) {
              var s = f.utcOffset();
              f = f.add(n - s, "minute");
            }

            return f.$x.$timezone = t, f;
          }, f.offsetName = function (t) {
            var e = this.$x.$timezone || o.tz.guess(),
                n = a(this.valueOf(), e, {
              timeZoneName: t
            }).find(function (t) {
              return "timezonename" === t.type.toLowerCase();
            });
            return n && n.value;
          };
          var s = f.startOf;
          f.startOf = function (t, e) {
            if (!this.$x || !this.$x.$timezone) return s.call(this, t, e);
            var n = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
              locale: this.$L
            });
            return s.call(n, t, e).tz(this.$x.$timezone, !0);
          }, o.tz = function (t, e, n) {
            var i = n && e,
                a = n || e || r,
                f = u(+o(), a);
            if ("string" != typeof t) return o(t).tz(a);

            var s = function (t, e, n) {
              var i = t - 60 * e * 1e3,
                  o = u(i, n);
              if (e === o) return [i, e];
              var r = u(i -= 60 * (o - e) * 1e3, n);
              return o === r ? [i, o] : [t - 60 * Math.min(o, r) * 1e3, Math.max(o, r)];
            }(o.utc(t, i).valueOf(), f, a),
                m = s[0],
                c = s[1],
                d = o(m).utcOffset(c);

            return d.$x.$timezone = a, d;
          }, o.tz.guess = function () {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
          }, o.tz.setDefault = function (t) {
            r = t;
          };
        };
      });
      /***/
    },

    /***/
    93620:
    /*!*************************************************************!*\
      !*** ./src/app/config/route-mapper/repair-status-mapper.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RepairStatusMapper": function RepairStatusMapper() {
          return (
            /* binding */
            _RepairStatusMapper
          );
        },

        /* harmony export */
        "CaseStatusMapper": function CaseStatusMapper() {
          return (
            /* binding */
            _CaseStatusMapper
          );
        }
        /* harmony export */

      });

      var _RepairStatusMapper = {
        'draft': 'repair/booking/{{repairGUID}}',
        'vehicledetails': 'repair/booking/{{repairGUID}}',
        'uploaddocuments': 'repair/booking/{{repairGUID}}/document',
        'uploadphotos': 'repair/booking/{{repairGUID}}/photos',
        'repairestimation': 'repair/booking/{{repairGUID}}/estimate',
        'pendingapproval': 'repair/booking/{{repairGUID}}/estimate',
        'approved': 'repair/booking/{{repairGUID}}/estimate',
        'reject': 'repair/booking/{{repairGUID}}/estimate',
        'rejected': 'repair/booking/{{repairGUID}}/estimate',
        'closed': 'repair/booking/{{repairGUID}}/invoices',
        'complete': 'repair/booking/{{repairGUID}}/invoices',
        'partsorderedpartially': 'repair/booking/{{repairGUID}}/parts',
        'partsordered': 'repair/booking/{{repairGUID}}/parts',
        'repairinprogress': 'repair/booking/{{repairGUID}}/repair-stages',
        'readytoinvoice': 'repair/booking/{{repairGUID}}/invoices',
        'invoiced': 'repair/booking/{{repairGUID}}/invoices',
        'paid': 'repair/booking/{{repairGUID}}/invoices',
        'others': 'repair/booking/{{repairGUID}}'
      };
      var _CaseStatusMapper = {
        'draft': 'quote/case/{{caseGUID}}',
        'vehicledetails': 'quote/case/{{caseGUID}}/vehicle',
        'uploaddocuments': 'quote/case/{{caseGUID}}/document',
        'uploadphotos': 'quote/case/{{caseGUID}}/photos',
        'aianalysis': 'quote/case/{{caseGUID}}/ai',
        'repairestimation': 'quote/case/{{caseGUID}}/estimate',
        'approved': 'quote/case/{{caseGUID}}/estimate',
        'reject': 'quote/case/{{caseGUID}}/estimate',
        'rejected': 'quote/case/{{caseGUID}}/estimate',
        'closed': 'quote/case/{{caseGUID}}/estimate',
        'complete': 'quote/case/{{caseGUID}}/estimate',
        'others': 'quote/case/{{caseGUID}}/estimate'
      };
      /***/
    },

    /***/
    88271:
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/repair/add-customers/customer-layout/customer-layout.component.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerLayoutComponent": function CustomerLayoutComponent() {
          return (
            /* binding */
            _CustomerLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      39754);
      /* harmony import */


      var src_app_dialogs_labour_rate_labour_rate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/dialogs/labour-rate/labour-rate.component */
      35235);
      /* harmony import */


      var src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/model/chq-upload-model */
      75983);
      /* harmony import */


      var src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/model/menu */
      38588);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/case/case.service */
      38709);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/inspection-service/inspection.service */
      13975);
      /* harmony import */


      var src_app_services_message_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/message/messages.service */
      35493);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/repair-estimate/repair-estimate.service */
      87855);
      /* harmony import */


      var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/monitor-service/monitor.service */
      35196);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */
      77782);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _c0 = ["tabs"];
      var _c1 = ["tabMain"];
      var _c2 = ["userDetail"];

      function CustomerLayoutComponent_ng_container_6_div_1_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "make"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r9.caseData.vehicleMake, " ");
        }
      }

      function CustomerLayoutComponent_ng_container_6_div_1_div_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "model"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r11.caseData.vehicleModel);
        }
      }

      function CustomerLayoutComponent_ng_container_6_div_1_div_22_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "license_plate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r12.caseData.licensePlate);
        }
      }

      function CustomerLayoutComponent_ng_container_6_div_1_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CustomerLayoutComponent_ng_container_6_div_1_div_22_span_1_Template, 7, 4, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CustomerLayoutComponent_ng_container_6_div_1_div_22_span_2_Template, 7, 4, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.caseData == null ? null : ctx_r10.caseData.vehicleModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.caseData == null ? null : ctx_r10.caseData.licensePlate);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "expand-main-wrapper": a0
        };
      };

      var _c4 = function _c4(a0) {
        return {
          "width": a0
        };
      };

      function CustomerLayoutComponent_ng_container_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, CustomerLayoutComponent_ng_container_6_div_1_div_15_Template, 6, 4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, CustomerLayoutComponent_ng_container_6_div_1_div_22_Template, 3, 2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CustomerLayoutComponent_ng_container_6_div_1_Template_mat_icon_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r13.expand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](15, _c3, ctx_r7.expandUserDetail))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](17, _c4, ctx_r7.expandUserDetail ? ctx_r7.containerWidth : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r7.customerData.firstName, " ", ctx_r7.customerData.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 11, "booking_id"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r7.bookingId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.caseData == null ? null : ctx_r7.caseData.vehicleMake);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 13, "status"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r7.statusDesc, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.caseData == null ? null : ctx_r7.caseData.vehicleMake);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", !ctx_r7.expandUserDetail ? "dropdown" : "dropdown-up");
        }
      }

      function CustomerLayoutComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CustomerLayoutComponent_ng_container_6_div_1_Template, 25, 19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.showUserSection);
        }
      }

      function CustomerLayoutComponent_ng_template_7_div_1_span_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "status"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r17.status);
        }
      }

      function CustomerLayoutComponent_ng_template_7_div_1_span_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "make"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r18.caseData.vehicleMake);
        }
      }

      function CustomerLayoutComponent_ng_template_7_div_1_span_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "year"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r19.caseData.year);
        }
      }

      function CustomerLayoutComponent_ng_template_7_div_1_span_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "model"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r20.caseData.vehicleModel);
        }
      }

      function CustomerLayoutComponent_ng_template_7_div_1_span_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "license_plate"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r21.caseData.licensePlate);
        }
      }

      var _c5 = function _c5(a0) {
        return {
          "expand": a0
        };
      };

      function CustomerLayoutComponent_ng_template_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CustomerLayoutComponent_ng_template_7_div_1_Template_mat_icon_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r22.expand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CustomerLayoutComponent_ng_template_7_div_1_Template_div_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r24.openLabourRate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, CustomerLayoutComponent_ng_template_7_div_1_span_23_Template, 5, 4, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, CustomerLayoutComponent_ng_template_7_div_1_span_24_Template, 5, 4, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, CustomerLayoutComponent_ng_template_7_div_1_span_25_Template, 5, 4, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, CustomerLayoutComponent_ng_template_7_div_1_span_26_Template, 5, 4, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, CustomerLayoutComponent_ng_template_7_div_1_span_27_Template, 5, 4, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c3, ctx_r15.expandUserDetail))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](20, _c4, ctx_r15.expandUserDetail ? ctx_r15.containerWidth : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r15.customerData.firstName, " ", ctx_r15.customerData.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 14, "booking_id"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r15.bookingId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", !ctx_r15.expandUserDetail ? "dropdown" : "dropdown-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](22, _c5, ctx_r15.expandUserDetail));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 16, "labour_rate_discount"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.caseData == null ? null : ctx_r15.caseData.vehicleMake);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.caseData == null ? null : ctx_r15.caseData.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.caseData == null ? null : ctx_r15.caseData.vehicleModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.caseData == null ? null : ctx_r15.caseData.licensePlate);
        }
      }

      function CustomerLayoutComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CustomerLayoutComponent_ng_template_7_div_1_Template, 28, 24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.showUserSection);
        }
      }

      function CustomerLayoutComponent_chq_tabs_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-tabs", 3, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_chq_tabs_10_Template_chq_tabs_menuItemClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r26.navigate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", "default")("menuItems", ctx_r4.menuItems);
        }
      }

      function CustomerLayoutComponent_chq_tabs_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-tabs", 3, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_chq_tabs_11_Template_chq_tabs_menuItemClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r29.navigate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", "default")("menuItems", ctx_r5.menuRepairItems);
        }
      }

      function CustomerLayoutComponent_history_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "history", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("toggleExpand", function CustomerLayoutComponent_history_15_Template_history_toggleExpand_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r31.onHistoryExpand($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("history", ctx_r6.history)("isLoading", ctx_r6.isHistoryLoading);
        }
      }

      var _CustomerLayoutComponent = /*#__PURE__*/function () {
        /**
         * constructor
         * @param router
         */
        function _CustomerLayoutComponent(router, caseService, route, commonService, cdr, inspectionService, messageService, translateService, repairEstimateService, monitorService, dialog) {
          var _this = this;

          _classCallCheck(this, _CustomerLayoutComponent);

          this.router = router;
          this.caseService = caseService;
          this.route = route;
          this.commonService = commonService;
          this.cdr = cdr;
          this.inspectionService = inspectionService;
          this.messageService = messageService;
          this.translateService = translateService;
          this.repairEstimateService = repairEstimateService;
          this.monitorService = monitorService;
          this.dialog = dialog;
          this.activeItem = 'Booking';
          this.bookingId = '';
          this.repairGuid = '0';
          this.repairObjectId = 0;
          this.domainId = 3100;
          this.repairTypes = [];
          this.showUserSection = false;
          this.expandUserDetail = false;
          this.status = '';
          this.statusDesc = '';
          this.stepInProgress = false;
          this.vehicleId = 0;
          this.caseId = '0';
          this.estimationOperationLength = false;
          this.caseData = {
            'vehicleMake': '',
            'vehicleModel': ''
          };
          this.customerData = {
            'firstName': '',
            'lastName': '',
            'countryCode': '',
            'mobileNumber': '',
            'email': ''
          }; // sample history data

          this.history = [];
          this.workProvider = '';
          this.isCompany = false;
          this.isHistoryLoading = false;
          this.subscriptions = [];
          this.isNoShow = false;
          this.repairType = '';
          this.roleName = '';
          this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.customerMenus;
          this.repairMenuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.repairMenus;
          this.menuRepairItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.menuRepairItems;
          this.commonService.inProgressSteps.subscribe(function (length) {
            _this.stepInProgress = length > 0;
          });
        }
        /**
         * get current status
         */


        _createClass(_CustomerLayoutComponent, [{
          key: "currentStatus",
          get: function get() {
            var _a;

            if (this.status && ['draft', 'uploaddocuments', 'uploadphotos'].indexOf((_a = this.status) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === -1) {
              return true;
            }

            return false;
          }
          /**
           * map inspection from api
           */

        }, {
          key: "onHistoryExpand",
          value: function onHistoryExpand(event) {
            // Get latest History when history is expanded
            if (event) {
              this.getCaseHistory(this.repairGuid, this.domainId);
            }
          }
          /**
           * map inspection from api
           * @param inspectionData
           */

        }, {
          key: "mapInspection",
          value: function mapInspection(inspectionData, item) {
            var _a, _b, _c;

            if (inspectionData) {
              try {
                var inspection = inspectionData;

                if (this.commonService.repairInspectionTemplate) {
                  var template = this.commonService.repairInspectionTemplate;

                  if (inspection === null || inspection === void 0 ? void 0 : inspection.uploadType) {
                    if ((inspection === null || inspection === void 0 ? void 0 : inspection.uploadType.toLowerCase()) === 'spi') {
                      var minimumPhotosRequired = (_a = inspection.inspectionItems) === null || _a === void 0 ? void 0 : _a.filter(function (value) {
                        return value.isSkipEnabled !== true;
                      }).length;
                      var currentPhotos = (_b = inspection.inspectionItems) === null || _b === void 0 ? void 0 : _b.filter(function (currentStep) {
                        return currentStep.rawAzureBlobUrl;
                      });

                      if (currentPhotos.length < minimumPhotosRequired) {
                        this.commonService.showToast(0, "All ".concat(minimumPhotosRequired, " sides images are mandatory and cannot skip to next section."));
                        return;
                      }
                    } else {
                      var minimumBulkPhotosRequired = template === null || template === void 0 ? void 0 : template.minImageLimit;
                      var bulkUploadedItemsWithImages = inspection.inspectionItems.filter(function (step) {
                        return step.rawAzureBlobUrl != null && step.rawAzureBlobUrl != '';
                      });

                      if (bulkUploadedItemsWithImages.length < minimumBulkPhotosRequired) {
                        this.commonService.showToast(0, "All ".concat(minimumBulkPhotosRequired, " sides images are mandatory and cannot skip to next section."));
                        return;
                      }
                    }
                  }

                  var queryParam = location.search;
                  var url = item.url;
                  (_c = this.tabs) === null || _c === void 0 ? void 0 : _c.setActiveMenu(item);

                  if (queryParam.indexOf('mode=edit') !== -1) {
                    this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')], {
                      queryParams: {
                        mode: 'edit'
                      }
                    });
                  } else {
                    this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')]);
                  }
                }
              } catch (error) {
                console.log(error);
              }
            }
          }
          /**
           * Get Case History
           */

        }, {
          key: "getCaseHistory",
          value: function getCaseHistory(caseId, domainId) {
            var _this2 = this;

            this.history = [];
            this.isHistoryLoading = true;
            this.caseService.getCaseHistory(caseId, domainId).subscribe({
              next: function next(response) {
                _this2.history = response;
              },
              complete: function complete() {
                _this2.isHistoryLoading = false;
              }
            });
          }
          /**
           * get current inspectionitems length
           */

        }, {
          key: "getInspectionItems",
          value: function getInspectionItems(id, item) {
            var _this3 = this;

            this.commonService.showLoading();
            this.inspectionService.getInspection(id).subscribe({
              next: function next(inspectionDetailResponse) {
                if (inspectionDetailResponse) {
                  _this3.mapInspection(inspectionDetailResponse, item);
                }

                _this3.commonService.hideLoading();
              },
              complete: function complete() {
                _this3.commonService.hideLoading();
              }
            });
          }
          /**
           * on init
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var _a;

            var urlSegments = this.router.url.split('/');
            var lastSegment = urlSegments.length > 0 ? urlSegments[urlSegments.length - 1] : '';

            if (lastSegment.indexOf('?') != -1) {
              lastSegment = lastSegment.substring(0, lastSegment.indexOf('?'));
            }

            var repairSegments = ['parts', 'invoices', 'repair-stages', 'invoicesEdit'];

            if (repairSegments.includes(lastSegment)) {
              this.activeItem = 'Repair';
            }

            (_a = this.route) === null || _a === void 0 ? void 0 : _a.params.subscribe(function (value) {
              if (value && value['id']) {
                _this4.repairGuid = value['id'];

                if (_this4.repairGuid !== '0') {
                  // Get Case History when domainId is available
                  var idSub$ = _this4.commonService.domainId.pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(function (value) {
                    return value !== null;
                  })).subscribe({
                    next: function next(data) {
                      _this4.getCaseHistory(_this4.repairGuid, data);

                      _this4.domainId = data;
                    }
                  });

                  _this4.subscriptions.push(idSub$);
                }
              }
            });
            var bookingId$ = this.commonService.bookingId.subscribe({
              next: function next(bookingId) {
                _this4.bookingId = bookingId;

                _this4.cdr.detectChanges();
              }
            });
            var activeItem$ = this.commonService.activeItem.subscribe({
              next: function next(activeItem) {
                if (activeItem) {
                  _this4.activeItem = activeItem;
                }
              }
            });
            var repairDetails$ = this.commonService.repairDetails.subscribe({
              next: function next(repairDetails) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;

                _this4.showHideTopHeader();

                if (repairDetails) {
                  _this4.status = repairDetails.status;
                  _this4.statusDesc = repairDetails === null || repairDetails === void 0 ? void 0 : repairDetails.statusDescription;
                  _this4.customerData.firstName = ((_a = repairDetails.customer) === null || _a === void 0 ? void 0 : _a.firstName) || '';
                  _this4.customerData.lastName = ((_b = repairDetails.customer) === null || _b === void 0 ? void 0 : _b.lastName) || '';
                  _this4.customerData.mobileNumber = (((_c = repairDetails.customer) === null || _c === void 0 ? void 0 : _c.countryCode) || '') + ' ' + ((_d = repairDetails.customer) === null || _d === void 0 ? void 0 : _d.mobileNumber) || '';
                  _this4.customerData.email = ((_e = repairDetails.customer) === null || _e === void 0 ? void 0 : _e.email) || '';
                  _this4.workProvider = ((_f = repairDetails.customer) === null || _f === void 0 ? void 0 : _f.companyOrgType) || '';
                  _this4.isCompany = ((_g = repairDetails.customer) === null || _g === void 0 ? void 0 : _g.customerTypeName) !== 'Person' || false;
                  _this4.caseData.vehicleMake = ((_h = repairDetails.vehicle) === null || _h === void 0 ? void 0 : _h.vehicleMake) || '';
                  _this4.caseData.vehicleModel = ((_j = repairDetails.vehicle) === null || _j === void 0 ? void 0 : _j.vehicleModel) || '';
                  _this4.caseData.licensePlate = ((_k = repairDetails.vehicle) === null || _k === void 0 ? void 0 : _k.licensePlateNumber) || '';
                  _this4.caseData.year = ((_l = repairDetails.vehicle) === null || _l === void 0 ? void 0 : _l.modelYearRange) || '';
                  _this4.inspectionId = (_m = repairDetails.vehicle) === null || _m === void 0 ? void 0 : _m.inspectionId;
                  _this4.repairTypes = repairDetails.repairServiceTypes;
                  _this4.repairType = repairDetails.repairType;
                  _this4.domainId = repairDetails.domainId;

                  if (_this4.currentOrganizationId != ((_o = repairDetails.organizationDetail) === null || _o === void 0 ? void 0 : _o.organizationId)) {
                    _this4.commonService.isViewOnly = true;
                  } else {
                    _this4.commonService.isViewOnly = false;
                  }

                  var _urlSegments = _this4.router.url.split('/');

                  var currentLastSegment = _urlSegments.length > 0 ? _urlSegments[_urlSegments.length - 1] : '';

                  if (currentLastSegment.includes('photos')) {
                    if (!_this4.inspectionId) {
                      _this4.displayMissingInspectionMessage(_this4.repairGuid);

                      return;
                    }
                  }

                  var queryParam = location.search;

                  if (currentLastSegment === 'invoices' && !queryParam.includes('isBack=true')) {
                    var isGenerated = ((_p = _this4.status) === null || _p === void 0 ? void 0 : _p.toLowerCase()) === 'paid' || ((_q = _this4.status) === null || _q === void 0 ? void 0 : _q.toLowerCase()) === 'invoiced' || ((_r = _this4.status) === null || _r === void 0 ? void 0 : _r.toLowerCase()) === 'complete';
                    var type = 1;

                    if (isGenerated) {
                      if (_this4.workProvider === 'Retail' && !_this4.isCompany) {
                        type = 2;
                      }

                      _this4.router.navigate(["/repair/booking/".concat(_this4.repairGuid, "/invoicesEdit")], {
                        queryParams: {
                          formType: type
                        }
                      });

                      return;
                    }
                  }

                  _this4.vehicleId = (_s = repairDetails.vehicle) === null || _s === void 0 ? void 0 : _s.vehicleId;
                  _this4.caseId = repairDetails.quoteId;
                  _this4.domainId = repairDetails.domainId;
                  _this4.repairObjectId = repairDetails.id;

                  if (((_t = _this4.repairType) === null || _t === void 0 ? void 0 : _t.toLowerCase()) === 'assessment') {
                    _this4.repairMenuItems[1].disabled = true;
                  } else {
                    _this4.repairMenuItems[1].disabled = false;
                  }

                  _this4.isNoShow = (_u = repairDetails === null || repairDetails === void 0 ? void 0 : repairDetails.booking) === null || _u === void 0 ? void 0 : _u.isNoShow;

                  if (currentLastSegment.indexOf('?') != -1) {
                    currentLastSegment = currentLastSegment.substring(0, currentLastSegment.indexOf('?'));
                  }

                  if (((_v = _this4.roleName) === null || _v === void 0 ? void 0 : _v.toLowerCase()) === 'technician' && currentLastSegment === 'invoices') {
                    _this4.router.navigate(["/repair/booking/".concat(_this4.repairGuid, "/repair-stages")]);

                    return;
                  }

                  var _repairSegments = ['parts', 'invoices', 'repair-stages', 'invoicesEdit'];

                  if (_repairSegments.includes(currentLastSegment)) {
                    _this4.getEstimationDetail(repairDetails.estimateSource);
                  }

                  _this4.cdr.detectChanges();
                }
              }
            });
            var userPermission$ = this.commonService.userProfileData.subscribe(function (res) {
              var _a, _b, _c;

              if (res === null || res === void 0 ? void 0 : res.data) {
                var automotiveServices = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.userPermission) === null || _b === void 0 ? void 0 : _b.automotiveServices;
                var automotiveService = automotiveServices === null || automotiveServices === void 0 ? void 0 : automotiveServices.find(function (x) {
                  return x.automotiveServiceName.toLowerCase() === 'addenda repair';
                });
                _this4.roleName = automotiveService.roleName.toLowerCase();
                _this4.commonService.roleName = _this4.roleName;

                if (((_c = _this4.roleName) === null || _c === void 0 ? void 0 : _c.toLowerCase()) == 'technician') {
                  _this4.menuRepairItems = _this4.menuRepairItems.filter(function (q) {
                    return q.name != 'Invoices';
                  });
                }

                var organizationDetail = res.data.organizationDetail;

                if (organizationDetail) {
                  _this4.currentOrganizationId = organizationDetail.id;
                }
              }
            });
            this.subscriptions.push(bookingId$);
            this.subscriptions.push(activeItem$);
            this.subscriptions.push(repairDetails$);
            this.subscriptions.push(userPermission$);
          }
          /**
          * estimate
          */

        }, {
          key: "getEstimationDetail",
          value: function getEstimationDetail(source) {
            if (source === 'GTMotive') {
              this.getGTEstimationDetail();
            } else {
              this.getManualEstimationDetail();
            }
          }
          /**
           * get estimation detail
           */

        }, {
          key: "getGTEstimationDetail",
          value: function getGTEstimationDetail() {
            var _this5 = this;

            if (this.vehicleId && this.inspectionId) {
              this.monitorService.logEvent('getGTEstimationDetail', ['CustomerLayoutComponent', 'addenda-repair'], {
                repairGuid: this.repairGuid,
                caseGuid: this.caseId,
                inspectionId: this.inspectionId,
                vehicleId: this.vehicleId
              });
              this.commonService.showLoading();
              this.repairEstimateService.getEstimate(this.caseId, this.inspectionId, this.vehicleId, this.domainId).subscribe({
                next: function next(response) {
                  var _a, _b;

                  if (((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.estimateCharges) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    _this5.estimationOperationLength = true;
                  }

                  _this5.commonService.hideLoading();
                },
                error: function error() {
                  _this5.commonService.hideLoading();
                }
              });
            }
          }
          /**
           * get manual estimate
           */

        }, {
          key: "getManualEstimationDetail",
          value: function getManualEstimationDetail() {
            var _this6 = this;

            if (this.vehicleId && this.inspectionId) {
              this.monitorService.logEvent('getManualEstimationDetail', ['EstimateComponent', 'addenda-repair'], {
                repairGuid: this.repairGuid,
                inspectionId: this.inspectionId,
                vehicleId: this.vehicleId
              });
              this.commonService.showLoading();
              this.repairEstimateService.getRepairEstimate(this.repairGuid, this.inspectionId, this.vehicleId).subscribe({
                next: function next(response) {
                  var _a;

                  if ((_a = response === null || response === void 0 ? void 0 : response.estimateCharges) === null || _a === void 0 ? void 0 : _a.length) {
                    _this6.estimationOperationLength = true;
                  }

                  _this6.commonService.hideLoading();
                },
                error: function error() {
                  _this6.commonService.hideLoading();
                }
              });
            }
          }
          /**
           * navigate to selected route
           * @param item
           */

        }, {
          key: "navigate",
          value: function navigate(item) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;

            var queryParam = location.search;
            var url = item.url;
            var currentUrl = location.pathname;

            if (url.includes('/repair-stages')) {
              var statusList = ['draft', 'uploaddocuments', 'uploadphotos', 'repairestimation', 'pendingapproval', 'rejected'];

              if (statusList.includes((_a = this.status) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
                this.commonService.hideLoading();
                this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('start_job'));
                return;
              }

              if (this.isNoShow) {
                this.commonService.hideLoading();
                this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('stages_no_allowed'));
                return;
              }

              if (((_b = this.repairType) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== 'repair') {
                this.commonService.hideLoading();
                this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('stages_repair'));
                return;
              }
            }

            if (url.includes('/invoices')) {
              if (!this.estimationOperationLength) {
                this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('no_charges'));
                return;
              }

              if (((_c = this.status) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === 'rejected') {
                this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('invoice_access'));
                return;
              }
            }

            if (currentUrl.includes('/document')) {
              if (this.stepInProgress) {
                var module = currentUrl.includes('/photos') ? 'images' : 'documents';
                this.commonService.showToast(0, "Please wait until all ".concat(module, " are uploaded."));
                return;
              }
            }

            if (currentUrl.includes('/photos')) {
              if (this.stepInProgress) {
                var _module = currentUrl.includes('/photos') ? 'images' : 'documents';

                this.commonService.showToast(0, "Please wait until all ".concat(_module, " are uploaded."));
                return;
              }

              if (url.includes('/estimate')) {
                this.getInspectionItems(this.inspectionId, item);
                return;
              }
            }

            if (url.includes('invoices')) {
              var isGenerated = ((_d = this.status) === null || _d === void 0 ? void 0 : _d.toLowerCase()) === 'paid' || ((_e = this.status) === null || _e === void 0 ? void 0 : _e.toLowerCase()) === 'invoiced' || ((_f = this.status) === null || _f === void 0 ? void 0 : _f.toLowerCase()) === 'complete';
              var type = 1;

              if (isGenerated) {
                if (this.workProvider === 'Retail' && !this.isCompany) {
                  type = 2;
                }

                this.router.navigate([url.replace('{bookingId}', this.repairGuid || '').replace('invoices', 'invoicesEdit')], {
                  queryParams: {
                    formType: type
                  }
                });
                return;
              }
            }

            if (url === '/repair/booking/{bookingId}') {
              if (queryParam.indexOf('mode=edit') !== -1) {
                this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')], {
                  queryParams: {
                    mode: 'edit'
                  }
                });
              } else {
                this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')]);
              }
            } else if (currentUrl === '/repair/booking' || currentUrl === '/repair/booking/0' || currentUrl === "/repair/booking/".concat(this.repairGuid)) {
              if (url === '/repair/booking/{bookingId}') {
                return;
              }

              if (((_g = this.roleName) === null || _g === void 0 ? void 0 : _g.toLowerCase()) === 'technician' || ((_h = this.status) === null || _h === void 0 ? void 0 : _h.toLowerCase()) === 'complete') {
                this.commonService.viewActionTriggeredBooking.next(queryParam.indexOf('mode=edit') !== -1 ? url + queryParam : url);
              } else {
                this.commonService.actionTriggered.next(queryParam.indexOf('mode=edit') !== -1 ? url + queryParam : url);
              }
            } else {
              if (url.includes('/photos') || url.includes('/estimate')) {
                if (!this.inspectionId) {
                  this.displayMissingInspectionMessage(this.repairGuid);
                  return;
                }
              }

              (_j = this.tabs) === null || _j === void 0 ? void 0 : _j.setActiveMenu(item);

              if (queryParam.indexOf('mode=edit') !== -1) {
                this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')], {
                  queryParams: {
                    mode: 'edit'
                  }
                });
              } else {
                this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')]);
              }
            }
          }
          /**
           * change tab
           */

        }, {
          key: "changeTab",
          value: function changeTab(item) {
            var url = '';
            var queryParam = location.search;

            if (item.disabled) {
              return;
            }

            if (item.name == 'Booking') {
              url = '/repair/booking/' + this.repairGuid;
              this.repairMenuItems.filter(function (q) {
                return q.name == 'Repair';
              })[0].active = false;
            } else {
              if (!this.currentStatus) {
                // && !this.estimationOperationLength) {
                return;
              }

              url = '/repair/booking/' + this.repairGuid + '/parts';
              this.repairMenuItems.filter(function (q) {
                return q.name == 'Booking';
              })[0].active = false;
            }

            item.active = true;
            this.repairMenuItems = _toConsumableArray(this.repairMenuItems);

            if (queryParam.indexOf('?mode=edit') !== -1) {
              this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')], {
                queryParams: {
                  mode: 'edit'
                }
              });
            } else {
              this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')]);
            }

            this.activeItem = item.name;
          }
          /**
           * show error dialog
           */

        }, {
          key: "displayMissingInspectionMessage",
          value: function displayMissingInspectionMessage(bookingId) {
            var _this7 = this;

            this.commonService.openAlertDialog('Notification', 'Please add your vehicle in order to add car images.').afterClosed().subscribe({
              next: function next(result) {
                if (result) {
                  _this7.router.navigate(["repair/booking/".concat(bookingId)]);
                }
              },
              error: function error() {
                _this7.commonService.hideLoading();
              }
            });
          }
          /**
           * expand user -detail
          */

        }, {
          key: "expand",
          value: function expand() {
            this.containerWidth = "".concat(this.userDetail.nativeElement.offsetWidth, "px");
            this.expandUserDetail = !this.expandUserDetail;
          }
          /**
           * Show Hide User section based on active menu item
           */

        }, {
          key: "showHideTopHeader",
          value: function showHideTopHeader() {
            if (this.repairGuid && this.repairGuid != '0') {
              this.showUserSection = true;
            } else {
              this.showUserSection = false;
            }
          }
          /**
           * open labour rate popup
           */

        }, {
          key: "openLabourRate",
          value: function openLabourRate() {
            var _this8 = this;

            this.monitorService.logEvent('openLabourRate', ['CustomerLayoutComponent', 'addenda-repair']);
            var dialogRef = this.dialog.open(src_app_dialogs_labour_rate_labour_rate_component__WEBPACK_IMPORTED_MODULE_0__.ChqLabourRateComponent, {
              data: {
                'repairId': this.repairGuid,
                'from': src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_1__.Modules.repair
              },
              autoFocus: false
            });
            dialogRef.afterClosed().subscribe(function (result) {
              dialogRef = null;

              if (result) {
                _this8.commonService.labourData.next(result);

                _this8.commonService.isRefreshRepairEstimateDetails.next(true);
              }
            });
          }
          /**
           * on destroy
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.monitorService.logEvent('ngOnDestroy', ['CustomerLayoutComponent', 'addenda-repair', {
              repairId: this.repairGuid
            }]);
            if (this.subscriptions) this.subscriptions.forEach(function (subscription) {
              return subscription.unsubscribe();
            });
            this.commonService.activeItem.next(null);
            this.commonService.repairDetails.next(null);
            this.commonService.isViewOnly = false;
          }
        }]);

        return _CustomerLayoutComponent;
      }();

      _CustomerLayoutComponent.ɵfac = function CustomerLayoutComponent_Factory(t) {
        return new (t || _CustomerLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_5__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_message_messages_service__WEBPACK_IMPORTED_MODULE_6__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_7__.RepairEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_8__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog));
      };

      _CustomerLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _CustomerLayoutComponent,
        selectors: [["app-customer-layout"]],
        viewQuery: function CustomerLayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.tabMain = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.userDetail = _t.first);
          }
        },
        decls: 16,
        vars: 7,
        consts: [[1, "page-container", "mh-0", "mt-0", "fx-col"], [1, "tab-container", "fx-0"], [1, "main-tab-wrapper"], [3, "mode", "menuItems", "menuItemClick"], ["tabMain", ""], [1, "user-wrapper"], [4, "ngIf", "ngIfElse"], ["expanding", ""], [1, "tab-wrapper"], [3, "mode", "menuItems", "menuItemClick", 4, "ngIf"], [1, "tab-content", "fx-1"], ["serviceType", "repair", 3, "history", "isLoading", "toggleExpand", 4, "ngIf"], ["class", "user-detail-container fx-col", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "user-detail-container", "fx-col", 3, "ngClass", "ngStyle"], [1, "user-detail-wrapper"], ["userDetail", ""], [1, "user-detail"], [1, "heading-text"], [2, "font-weight", "500"], [1, "title"], [1, "vehicle-detail"], [1, "make-status", "fx-row"], ["class", "fx-row align-center", 4, "ngIf"], [1, "fx-row", "align-center"], [1, "heading-label"], ["class", "fx-row", 4, "ngIf"], [1, "arrow-drop"], [3, "svgIcon", "click"], [1, "fx-row"], ["style", "font-weight: 500;", 4, "ngIf"], [1, "user-detail-expand-wrapper", 3, "ngClass"], [1, "user-detail-more", "fx-col"], [1, "labour-container", 3, "click"], [1, "vehicle-detail-expand", "fx-col"], [4, "ngIf"], ["tabs", ""], ["serviceType", "repair", 3, "history", "isLoading", "toggleExpand"]],
        template: function CustomerLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "chq-tabs", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_Template_chq_tabs_menuItemClick_3_listener($event) {
              return ctx.changeTab($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, CustomerLayoutComponent_ng_container_6_Template, 2, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, CustomerLayoutComponent_ng_template_7_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CustomerLayoutComponent_chq_tabs_10_Template, 2, 2, "chq-tabs", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, CustomerLayoutComponent_chq_tabs_11_Template, 2, 2, "chq-tabs", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, CustomerLayoutComponent_history_15_Template, 1, 2, "history", 11);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", "underline")("menuItems", ctx.repairMenuItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.expandUserDetail)("ngIfElse", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeItem === "Booking");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeItem === "Repair");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.repairGuid !== "0");
          }
        },
        directives: [_widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__.ChqTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
        styles: [".page-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 76px - (calc(58px + 1.6vw)));\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\n  background-color: var(--xa-popup-light-gray);\n  padding-top: 0.5vw;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   chq-tabs[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 82px;\n  margin-right: 0;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%] {\n  background: var(--xa-bold-gray);\n  border-radius: 10px;\n  margin: 2px calc(5px + 1.5vw);\n  padding: 10px;\n  z-index: 1;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container.expand-main-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .fx-row[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .fx-row[_ngcontent-%COMP%] {\n  grid-gap: 10px;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .arrow-drop[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%] {\n  display: none;\n  overflow: hidden;\n  margin-top: 5px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%] {\n  grid-gap: 10px;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .labour-container[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--xa-blue);\n  cursor: pointer;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .labour-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .email-container[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .phone-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 8px;\n  grid-gap: 5px;\n  gap: 5px;\n  width: 198px;\n  height: 40px;\n  cursor: pointer;\n  border: 0.4px solid #1B03A3;\n  border-radius: 39px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  font-size: 12px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .email-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .phone-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 14px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .vehicle-detail-expand[_ngcontent-%COMP%] {\n  grid-gap: 8px;\n  gap: 8px;\n  font-size: 12px;\n  line-height: 20px;\n  color: var(--xa-dark-gray);\n  font-weight: 500;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .vehicle-detail-expand[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper.expand[_ngcontent-%COMP%] {\n  display: block;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-wrapper[_ngcontent-%COMP%] {\n  margin-left: calc(6px + 1.5vw);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  background: var(--xa-tab-background);\n  overflow: auto;\n}\n.heading-text[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  font-weight: 700;\n  line-height: 20px;\n  max-width: 20ch;\n  word-break: break-all;\n}\n.heading-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--xa-dark-gray);\n  font-size: 16px !important;\n}\nchq-tabs[_ngcontent-%COMP%]     button {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500;\n}\n@media screen and (min-device-width: 700px) and (max-device-width: 940px) {\n  .main-tab-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 6px;\n  }\n\n  .user-detail-container[_ngcontent-%COMP%] {\n    padding: 12px !important;\n  }\n  .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%] {\n    grid-gap: 5px;\n    gap: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlEQUFBO0FBQ0o7QUFDSTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNRO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBWjtBQUVZO0VBQ0ksaUJBQUE7QUFBaEI7QUFHWTtFQUNJLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0FBRmhCO0FBSWdCO0VBU0ksK0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUVBLFVBQUE7QUFYcEI7QUFEb0I7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFHeEI7QUFTb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBUHhCO0FBU3dCOztFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBUDVCO0FBUzRCOztFQUNJLGVBQUE7QUFOaEM7QUFTNEI7O0VBQ0ksY0FBQTtFQUFBLFNBQUE7QUFOaEM7QUFhd0I7RUFDSSwwQkFBQTtBQVg1QjtBQWN3QjtFQUNJLGtCQUFBO0FBWjVCO0FBZ0JvQjtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFkeEI7QUFnQndCO0VBQ0ksY0FBQTtFQUFBLFNBQUE7QUFkNUI7QUFnQjRCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQWRoQztBQWdCZ0M7RUFDSSx1Q0FBQTtVQUFBLCtCQUFBO0FBZHBDO0FBb0JnQzs7RUFFSSxzQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUVBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FBeEJwQztBQTBCb0M7O0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF2QnhDO0FBNkJnQztFQUNJLGFBQUE7RUFBQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQTNCcEM7QUE2Qm9DO0VBQ0ksc0JBQUE7QUEzQnhDO0FBa0N3QjtFQUNJLGNBQUE7QUFoQzVCO0FBeUNRO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXZDWjtBQTJDSTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtBQXpDUjtBQTZDQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQTFDSjtBQTZDQTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQTFDSjtBQThDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBM0NSO0FBK0NBO0VBQ0k7SUFDSSxrQkFBQTtFQTVDTjs7RUErQ0U7SUFDSSx3QkFBQTtFQTVDTjtFQStDVTtJQUNJLGFBQUE7SUFBQSxRQUFBO0VBN0NkO0FBQ0YiLCJmaWxlIjoiY3VzdG9tZXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc2cHggLSAoY2FsYyg1OHB4ICsgMS42dncpKSk7XHJcblxyXG4gICAgLnRhYi1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjV2dztcclxuXHJcbiAgICAgICAgLm1haW4tdGFiLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAvL21hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIGNocS10YWJzIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIC8vbWluLXdpZHRoOiBjYWxjKDI5NnB4ICsgMTB2dyk7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIC51c2VyLWRldGFpbC1jb250YWluZXIge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmV4cGFuZC1tYWluLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYm9sZC1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4IGNhbGMoNXB4ICsgMS41dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9taW4td2lkdGg6IGNhbGMoMjk2cHggKyAxMHZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLWRldGFpbC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudXNlci1kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52ZWhpY2xlLWRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZngtcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFycm93LWRyb3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudXNlci1kZXRhaWwtZXhwYW5kLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudXNlci1kZXRhaWwtbW9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYm91ci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVtYWlsLXBob25lLWNvbnRhaW5lci13cmFwcGVyIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVtYWlsLWNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGhvbmUtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE5OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNHB4IHNvbGlkICMxQjAzQTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM5cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZlaGljbGUtZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmVoaWNsZS1kZXRhaWwtZXhwYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5leHBhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYi13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoNnB4ICsgMS41dncpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWItY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtdGFiLWJhY2tncm91bmQpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGluZy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMGNoO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG4uaGVhZGluZy1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuY2hxLXRhYnMge1xyXG4gICAgOjpuZy1kZWVwIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5NDBweCkge1xyXG4gICAgLm1haW4tdGFiLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAudXNlci1kZXRhaWwtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC51c2VyLWRldGFpbC13cmFwcGVyIHtcclxuICAgICAgICAgICAgLnZlaGljbGUtZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgIGdhcDogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5meC1yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogOTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    11121:
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/repair/booking-journal/booking-journal/booking-journal.component.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookingJournalComponent": function BookingJournalComponent() {
          return (
            /* binding */
            _BookingJournalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      70160);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! dayjs/plugin/timezone */
      21299);
      /* harmony import */


      var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! dayjs/plugin/utc */
      4557);
      /* harmony import */


      var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! devextreme-angular/ui/scheduler */
      20330);
      /* harmony import */


      var devextreme_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! devextreme/localization */
      14329);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      75249);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      34122);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      53399);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      82426);
      /* harmony import */


      var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/config/route-mapper/repair-status-mapper */
      93620);
      /* harmony import */


      var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/calendar/calendar.service */
      56785);
      /* harmony import */


      var _booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../booking-preview/booking-preview.component */
      72994);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/booking/booking.service */
      8985);
      /* harmony import */


      var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/case/case.service */
      38709);
      /* harmony import */


      var src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */
      93077);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../helper/directive/has-permission.directive */
      22406);
      /* harmony import */


      var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../widgets/chq-button/chq-button.component */
      36978);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../widgets/chq-input/chq-input.component */
      90082);
      /* harmony import */


      var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! devextreme-angular/core */
      55643);
      /* harmony import */


      var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! devextreme-angular/ui/nested */
      83203);
      /* harmony import */


      var devextreme_angular_ui_draggable__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! devextreme-angular/ui/draggable */
      38757);

      var _c0 = ["filter"];
      var _c1 = ["draftcustomer"];

      function BookingJournalComponent_chq_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "chq-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_chq_button_2_Template_chq_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r18.newBooking();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r0.newBookingButton);
        }
      }

      function BookingJournalComponent_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "no_of_booking"), " ");
        }
      }

      function BookingJournalComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 1, "no_of_bookings"), " ");
        }
      }

      var _c2 = function _c2(a0, a1, a2, a3) {
        return {
          "disable-date": a0,
          "weekend": a1,
          "readonly": a2,
          "dinner": a3
        };
      };

      function BookingJournalComponent_dx_scheduler_29_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dataCell_r25 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction4"](2, _c2, ctx_r20.disabledDate[dataCell_r25.startDate.toDateString()], ctx_r20.weekendDate[dataCell_r25.startDate.toDateString()], ctx_r20.isReadOnlyPermission, ctx_r20.lunchTime[dataCell_r25.startDate.toString()]));

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r20.currentView === "month" ? dataCell_r25.startDate.getDate() : "", " ");
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "flex-column": a0
        };
      };

      function BookingJournalComponent_dx_scheduler_29_div_2_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "p", 50);
        }

        if (rf & 2) {
          var dateCell_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](2, _c3, ctx_r27.getDateText(dateCell_r26.date).length > 105))("innerHtml", ctx_r27.getDateText(dateCell_r26.date), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
        }
      }

      function BookingJournalComponent_dx_scheduler_29_div_2_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dateCell_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, dateCell_r26.date, "d EEE"), " ");
        }
      }

      function BookingJournalComponent_dx_scheduler_29_div_2_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dateCell_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", dateCell_r26.text, " ");
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "disable-date": a0
        };
      };

      function BookingJournalComponent_dx_scheduler_29_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, BookingJournalComponent_dx_scheduler_29_div_2_p_1_Template, 1, 4, "p", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, BookingJournalComponent_dx_scheduler_29_div_2_p_2_Template, 3, 4, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, BookingJournalComponent_dx_scheduler_29_div_2_p_3_Template, 2, 1, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dateCell_r26 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](4, _c4, ctx_r21.disabledDate[dateCell_r26.date.toDateString()]));

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.currentView !== "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.currentView !== "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.currentView === "month");
        }
      }

      function BookingJournalComponent_dx_scheduler_29_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var timeCell_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", timeCell_r33.text ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, timeCell_r33.date, "HH:mm") : "", " ");
        }
      }

      function BookingJournalComponent_dx_scheduler_29_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var model_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background", model_r34.targetedAppointmentData.Color);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", model_r34.targetedAppointmentData.Customer == null ? null : model_r34.targetedAppointmentData.Customer.FirstName, " ", model_r34.targetedAppointmentData.Customer == null ? null : model_r34.targetedAppointmentData.Customer.LastName, "");
        }
      }

      function BookingJournalComponent_dx_scheduler_29_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_dx_scheduler_29_div_5_Template_button_click_12_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37);

            var model_r35 = restoredCtx.$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r36.handleContextMenu("preview", $event, model_r35.targetedAppointmentData);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "mat-icon", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var model_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("border-left", "12px solid " + model_r35.targetedAppointmentData.Color);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", model_r35.targetedAppointmentData.Customer == null ? null : model_r35.targetedAppointmentData.Customer.FirstName, " ", model_r35.targetedAppointmentData.Customer == null ? null : model_r35.targetedAppointmentData.Customer.LastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Work Provider: ", model_r35.targetedAppointmentData.WorkProviderDto == null ? null : model_r35.targetedAppointmentData.WorkProviderDto.CompanyName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Status: ", model_r35.targetedAppointmentData.DisplayStatus, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "show");
        }
      }

      var _c5 = function _c5() {
        return ["day", "week", "month"];
      };

      function BookingJournalComponent_dx_scheduler_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "dx-scheduler", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onAppointmentFormOpening", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentFormOpening_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r38.onAppointmentFormOpening($event);
          })("onAppointmentUpdating", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentUpdating_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r40.onAppointmentUpdating($event);
          })("onAppointmentUpdated", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentUpdated_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r41.onAppointmentUpdated($event);
          })("onAppointmentClick", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r42.onAppointmentClick($event);
          })("onAppointmentDblClick", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentDblClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r43.onAppointmentDblClick($event);
          })("onOptionChanged", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onOptionChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r44.onOptionChanged($event);
          })("onCellClick", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onCellClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r45.onCellClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, BookingJournalComponent_dx_scheduler_29_div_1_Template, 2, 7, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, BookingJournalComponent_dx_scheduler_29_div_2_Template, 4, 6, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, BookingJournalComponent_dx_scheduler_29_div_3_Template, 3, 4, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, BookingJournalComponent_dx_scheduler_29_div_4_Template, 6, 4, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, BookingJournalComponent_dx_scheduler_29_div_5_Template, 14, 7, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "dxo-appointment-dragging", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "dxo-scrolling", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("width", ctx_r4.calendarWidth)("height", ctx_r4.calendarHeight)("editing", true)("dataSource", ctx_r4.calendarData)("views", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](23, _c5))("currentView", ctx_r4.currentView)("adaptivityEnabled", ctx_r4.isSmallScreen)("firstDayOfWeek", 1)("startDayHour", 0)("endDayHour", 24)("currentDate", ctx_r4.currentDate)("cellDuration", 30)("useDropDownViewSwitcher", false)("crossScrollingEnabled", true)("showCurrentTimeIndicator", true)("maxAppointmentsPerCell", ctx_r4.maxAppointmentsPerCell);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dxTemplateOf", "dataCellTemplate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dxTemplateOf", "dateCellTemplate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dxTemplateOf", "timeCellTemplate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dxTemplateOf", "appointment-template");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dxTemplateOf", "appointment-tooltip-template");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", "customer")("onAdd", ctx_r4.onAppointmentAdd);
        }
      }

      function BookingJournalComponent_hr_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 23);
        }
      }

      function BookingJournalComponent_hr_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr");
        }
      }

      function BookingJournalComponent_hr_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 23);
        }
      }

      function BookingJournalComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "chq-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_58_Template_chq_input_controlOutput_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r46.onFormUpdate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r9.filterModal[7]);
        }
      }

      function BookingJournalComponent_hr_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 23);
        }
      }

      function BookingJournalComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "chq-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_60_Template_chq_input_controlOutput_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r48.onFormUpdate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r11.filterModal[4]);
        }
      }

      function BookingJournalComponent_hr_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr");
        }
      }

      function BookingJournalComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "chq-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_62_Template_chq_input_controlOutput_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r50.onFormUpdate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r13.filterModal[5]);
        }
      }

      function BookingJournalComponent_hr_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr");
        }
      }

      function BookingJournalComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 2, "no_result_found"));

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
        }
      }

      function BookingJournalComponent_dx_draggable_85_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " License Plate: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var customer_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](customer_r52.licensePlateNumber);
        }
      }

      var _c6 = function _c6(a0, a1, a2, a3, a4) {
        return [a0, a1, a2, a3, a4];
      };

      function BookingJournalComponent_dx_draggable_85_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Amount: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "xaCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var customer_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](4, 1, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](7, _c6, customer_r52.cost, ctx_r54.i18n.currencySymbol, ctx_r54.i18n.digitsInfo, ctx_r54.i18n.locale, ctx_r54.i18n.position)), " ");
        }
      }

      function BookingJournalComponent_dx_draggable_85_a_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_dx_draggable_85_a_19_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r60);

            var customer_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r58.handleDraftAction("delete", $event, customer_r52);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-icon", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "trash");
        }
      }

      var _c7 = function _c7(a0) {
        return {
          "disabled": a0
        };
      };

      var _c8 = function _c8(a0) {
        return [a0];
      };

      function BookingJournalComponent_dx_draggable_85_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "dx-draggable", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onDragStart", function BookingJournalComponent_dx_draggable_85_Template_dx_draggable_onDragStart_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r61.onItemDragStart($event);
          })("onDragEnd", function BookingJournalComponent_dx_draggable_85_Template_dx_draggable_onDragEnd_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r62);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r63.onItemDragEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "mat-icon", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, BookingJournalComponent_dx_draggable_85_span_11_Template, 4, 1, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, BookingJournalComponent_dx_draggable_85_span_12_Template, 5, 13, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "mat-icon", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, BookingJournalComponent_dx_draggable_85_a_19_Template, 2, 1, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var customer_r52 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("clone", true)("group", "customer")("data", customer_r52);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", customer_r52.firstName, " ", customer_r52.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](10, 17, customer_r52.createdDate, "dd/MM/yyyy hh:mm:ss"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", customer_r52.statusClass === "RepairEstimation");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", customer_r52.statusClass === "RepairEstimation");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("status ", customer_r52.statusClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", customer_r52.status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](20, _c7, !ctx_r17.hasQuotePermission && customer_r52.draftCustomerType === "Quote"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](22, _c8, customer_r52.url));

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "show");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("chqPermission", "bookingJournal");
        }
      }

      var _c9 = function _c9(a0) {
        return {
          "margin-right": a0
        };
      };

      var _c10 = function _c10(a0) {
        return {
          "two-per-row": a0
        };
      };

      dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
      dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
      (0, devextreme_localization__WEBPACK_IMPORTED_MODULE_3__.locale)('en');

      var _BookingJournalComponent = /*#__PURE__*/function () {
        /**
         * Constructor
         */
        function _BookingJournalComponent(router, route, formBuilder, dialog, calendarService, commonService, datePipe, cdr, bookingService, caseService, xaCurrencyPipe, translateService) {
          _classCallCheck(this, _BookingJournalComponent);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.dialog = dialog;
          this.calendarService = calendarService;
          this.commonService = commonService;
          this.datePipe = datePipe;
          this.cdr = cdr;
          this.bookingService = bookingService;
          this.caseService = caseService;
          this.xaCurrencyPipe = xaCurrencyPipe;
          this.translateService = translateService;
          this.currentDate = new Date();
          this.startHour = 0;
          this.endHour = 24;
          this.filterButton = {
            label: 'filter',
            type: 'outline',
            icon: 'filter'
          };
          this.draftButton = {
            label: 'draft_customer',
            type: 'outline',
            icon: 'person-add'
          };
          this.newBookingButton = {
            label: 'new_booking',
            type: 'primary',
            icon: 'plus'
          };
          this.applyButton = {
            label: 'apply',
            type: 'primary'
          };
          this.resetButton = {
            label: 'reset_all',
            type: 'outline'
          };
          this.calendarData = [];
          this.draftData = [];
          this.currentView = localStorage.getItem('currentView') || 'week';
          this.calendarWidth = '100%';
          this.defaultHeight = 'calc(100vh - (5px + 0.8vw + 5px + 1.5vw + 50px))';
          this.calendarHeight = this.currentView === 'month' ? '100%' : this.defaultHeight; // calc(((((100vh - (50px + 2 * (5px + 0.8vw))) - (5px + 1.5vw)) - 1.5vw) - 90px))

          this.filterForm = this.formBuilder.group({
            TypeName: [],
            Booking: [],
            WorkProviderDto: [],
            WorkProviderName: [],
            CustomerName: [],
            OrgName: '',
            Assignees: [],
            RepairType: []
          });
          this.filterModal = [{
            placeHolder: 'booking_type',
            name: 'TypeName',
            label: 'booking_type',
            value: '',
            type: 'checkbox',
            options: []
          }, {
            placeHolder: 'select_organization',
            label: 'organization',
            name: 'OrgName',
            value: '',
            type: 'select',
            displayValue: 'label',
            fieldValue: 'value',
            options: [],
            isMultiSelect: false
          }, {
            placeHolder: 'booking',
            name: 'Booking',
            label: 'booking',
            value: '',
            type: 'checkbox',
            options: [{
              label: 'Start Date',
              value: 'bookingIn',
              checked: false
            }, {
              label: 'End Date',
              value: 'bookingOut',
              checked: false
            }]
          }, {
            placeHolder: 'work_provider',
            name: 'WorkProviderDto',
            label: 'work_provider',
            value: '',
            type: 'checkbox',
            options: []
          }, {
            placeHolder: 'driver_name',
            name: 'CustomerName',
            label: 'driver_name',
            value: '',
            type: 'select',
            displayValue: 'label',
            fieldValue: 'value',
            options: [],
            isMultiSelect: true
          }, {
            placeHolder: 'assigned_to',
            label: 'assigned_to',
            name: 'Assignees',
            value: '',
            type: 'select',
            displayValue: 'label',
            fieldValue: 'value',
            options: [],
            isMultiSelect: true
          }, {
            placeHolder: 'repair_type',
            name: 'RepairType',
            label: 'repair_type',
            value: '',
            type: 'checkbox',
            options: []
          }, {
            placeHolder: 'work_provider_name',
            name: 'WorkProviderName',
            label: 'work_provider_name',
            value: '',
            type: 'select',
            displayValue: 'label',
            fieldValue: 'value',
            options: [],
            isMultiSelect: true
          }];
          this.filterDataLoaded = false;
          this.draftDataLoaded = false;
          this.isFromCalendar = false;
          this.calendarCurrentStartDate = null;
          this.calendarCurrentEndDate = null;
          this.isSmallScreen = false;
          this.isTouchScreen = false;
          this.maxAppointmentsPerCell = 2;
          this.userIsBM = false;
          this.i18n = this.commonService.geti18nInfo();
          this.isReadOnlyPermission = true;
          this.showCalendar = true;
          this.hasQuotePermission = false;
          this.windowInnerWidth = 0;
          this.lunchTime = {};
          this.bookingIdList = [];
          this.totalEstimate = 0;
          this.totalLabour = 0;
          this.totalBooking = 0;
          this.isDoubleClick = false;
          this.previewOpen = false;
          this.noPermissionRoles = {
            bookingJournal: ['bodyshop manager', 'service advisor']
          };
          this.showProviderChild = false;
          this.disabledDate = {};
          this.weekendDate = {};
          this.onAppointmentAdd = this.onAppointmentAdd.bind(this);
          this.getScreenSize();
          this.isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
        }
        /**
         *
         * @returns
         */


        _createClass(_BookingJournalComponent, [{
          key: "isiOS",
          get: function get() {
            return false;
            return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
            || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
          }
          /**
           * detect change in windows resize
           */

        }, {
          key: "getScreenSize",
          value: function getScreenSize() {
            var _a;

            this.windowInnerWidth = window.innerWidth;

            if (window.innerWidth < 1024) {
              this.maxAppointmentsPerCell = 1;
            } else {
              this.maxAppointmentsPerCell = 2;
            }

            if (window.innerWidth < 500) {
              this.isSmallScreen = true;
              this.maxAppointmentsPerCell = 0;
            }

            (_a = this.scheduler) === null || _a === void 0 ? void 0 : _a.instance.getDataSource().reload();
          }
          /**
           * on init
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.windowInnerWidth = window.innerWidth;
            this.commonService.userProfileData.subscribe(function (res) {
              var _a, _b, _c, _d, _e, _f;

              _this9.userDetail = res === null || res === void 0 ? void 0 : res.data;
              var automotiveServices = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.userPermission) === null || _b === void 0 ? void 0 : _b.automotiveServices;
              _this9.hasQuotePermission = automotiveServices === null || automotiveServices === void 0 ? void 0 : automotiveServices.some(function (x) {
                return x.automotiveServiceName === 'Carheal Quote';
              });
              _this9.userIsBM = (_c = _this9.userDetail) === null || _c === void 0 ? void 0 : _c.roleDetail.some(function (x) {
                return x.name == 'Bodyshop Manager';
              });

              if ((_e = (_d = _this9.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail) === null || _e === void 0 ? void 0 : _e.id) {
                _this9.filterForm.get('OrgName').setValue((_f = _this9.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id);
              }

              var automotiveService = automotiveServices === null || automotiveServices === void 0 ? void 0 : automotiveServices.find(function (x) {
                return x.automotiveServiceName.toLowerCase() === 'addenda repair';
              });

              if (automotiveService && _this9.noPermissionRoles['bookingJournal'].includes(automotiveService.roleName.toLowerCase())) {
                _this9.isReadOnlyPermission = false;
              } else {
                _this9.isReadOnlyPermission = true;
              }
            });
            this.route.queryParams.subscribe(function (params) {
              if (params['bookInDate']) {
                _this9.currentDate = new Date(params['bookInDate']);
              }
            });
          }
          /**
          * function
          */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.getCalendarData(this.generateFilterQuery());
            this.cdr.detectChanges();
          }
          /**
           * Check and pull draft customer data
           */

        }, {
          key: "openDraftCustomer",
          value: function openDraftCustomer() {
            var _this10 = this;

            var _a;

            if (this.draftDataLoaded) {
              this.showDraftCustomer();
            } else {
              this.commonService.showLoading();
              (_a = this.calendarService.getDraftCustomer()) === null || _a === void 0 ? void 0 : _a.subscribe({
                next: function next(result) {
                  _this10.draftData = result.data // .filter(x => !this.bookingIdList.some(y => y === x.bookingGuid))
                  .map(function (x) {
                    var _a;

                    var statusTrimmed = (_a = x.status) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '');
                    var routeToRedirect = '/';

                    if (x.draftCustomerType === 'Repair') {
                      routeToRedirect += src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper[statusTrimmed === null || statusTrimmed === void 0 ? void 0 : statusTrimmed.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper.others;
                      routeToRedirect = routeToRedirect.replace('{{repairGUID}}', x.repairGuid);
                    } else if (x.draftCustomerType === 'Quote') {
                      routeToRedirect += src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.CaseStatusMapper[statusTrimmed === null || statusTrimmed === void 0 ? void 0 : statusTrimmed.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.CaseStatusMapper.others;
                      routeToRedirect = routeToRedirect.replace('{{caseGUID}}', x.caseGuid);
                    }

                    return Object.assign(Object.assign({}, x), {
                      url: routeToRedirect,
                      statusClass: statusTrimmed
                    });
                  }).sort(function (a, b) {
                    return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
                  });

                  _this10.commonService.hideLoading();

                  _this10.draftDataLoaded = true;

                  _this10.showDraftCustomer();
                }
              });
            }
          }
          /**
           * open draft customer panel
           */

        }, {
          key: "showDraftCustomer",
          value: function showDraftCustomer() {
            var _this11 = this;

            var open = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (open) {
              this.draftCustomer.open();
            }

            this.calendarWidth = window.innerWidth - 400 + 'px';
            this.calendarHeight = this.defaultHeight;
            this.showCalendar = false;
            setTimeout(function () {
              _this11.showCalendar = true;
              setTimeout(function () {
                _this11.scrollToCurrentTime();
              }, 0);
            }, 0);
          }
          /**
           * Check if user is bm , then call api otherwise return observable
           */

        }, {
          key: "getOrgIfBM",
          value: function getOrgIfBM() {
            if (this.userIsBM) {
              return this.caseService.getOrganizations();
            } else {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null);
            }
          }
          /**
           * pull data and open filter panel
           */

        }, {
          key: "openFilter",
          value: function openFilter() {
            var _this12 = this;

            var _a, _b, _c;

            if (this.filterDataLoaded) {
              this.filter.toggle();
            } else {
              this.commonService.showLoading();
              (0, rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([this.bookingService.getBookingRepairTypes("?orgIds=".concat((_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.organizationDetail.id)), this.getOrgIfBM(), this.caseService.getProvidersByOrgId("?orgIds=".concat((_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail.id)), this.caseService.getCaseUsers("?orgId=".concat((_c = this.userDetail) === null || _c === void 0 ? void 0 : _c.organizationDetail.id))]).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 4),
                    bookingRepairType = _ref2[0],
                    orgList = _ref2[1],
                    workProvider = _ref2[2],
                    employeeList = _ref2[3];

                return {
                  bookingRepairType: bookingRepairType,
                  orgList: orgList,
                  workProvider: workProvider,
                  employeeList: employeeList
                };
              })).subscribe(function (result) {
                var _a, _b, _c, _d, _e, _f;

                _this12.filterModal[0].options = result.bookingRepairType.data.BookingTypes.map(function (x) {
                  return {
                    label: x.name,
                    value: x.name
                  };
                });

                if (_this12.userIsBM) {
                  _this12.filterModal[1] = Object.assign(Object.assign({}, _this12.filterModal[1]), {
                    selectedOption: {
                      'label': (_a = _this12.userDetail) === null || _a === void 0 ? void 0 : _a.organizationDetail.name,
                      'value': (_b = _this12.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail.id
                    },
                    options: result.orgList.data.map(function (x) {
                      return {
                        label: x.name,
                        value: x.id
                      };
                    })
                  });
                } else {
                  _this12.filterModal[1] = Object.assign(Object.assign({}, _this12.filterModal[1]), {
                    selectedOption: {
                      'label': (_c = _this12.userDetail) === null || _c === void 0 ? void 0 : _c.organizationDetail.name,
                      'value': (_d = _this12.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.id
                    },
                    options: [{
                      'label': (_e = _this12.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.name,
                      'value': (_f = _this12.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id
                    }],
                    disabled: true
                  });
                }

                _this12.filterModal[3].options = result.workProvider.data.map(function (x) {
                  return {
                    label: x,
                    value: x
                  };
                });
                _this12.filterModal[5] = Object.assign(Object.assign({}, _this12.filterModal[5]), {
                  options: result.employeeList.data.map(function (x) {
                    return {
                      label: x.name,
                      value: x.id
                    };
                  })
                });

                if (result.bookingRepairType.data.RepairType && result.bookingRepairType.data.RepairType.length > 0) {
                  _this12.filterModal[6].options = result.bookingRepairType.data.RepairType[0].RepairTypes.map(function (x) {
                    return {
                      label: x.name,
                      value: x.id,
                      icon: _this12.getRepairTpeIcon(x.name)
                    };
                  });
                }

                _this12.filter.toggle();

                _this12.commonService.hideLoading();

                _this12.filterDataLoaded = true;
              });
            }
          }
          /**
          * getRepairTpeIcon
          */

        }, {
          key: "getRepairTpeIcon",
          value: function getRepairTpeIcon(name) {
            var iconMapper = {
              Body: 'car',
              Maintenance: 'house',
              Paint: 'paint',
              Tires: 'tire',
              Electric: 'bolt-car',
              Electrical: 'bolt-car',
              Mechanical: 'mechanical',
              Diagnosis: 'diagnosis',
              Others: 'gears'
            };
            return iconMapper[name];
          }
          /**
          * getDisplayStatus
          */

        }, {
          key: "getDisplayStatus",
          value: function getDisplayStatus(status) {
            var statusMapper = {
              draft: 'Draft',
              vehicledetails: 'Vehicle Details',
              uploaddocuments: 'Upload Documents',
              uploadphotos: 'Upload Photos',
              repairestimation: 'Repair Estimation',
              pendingapproval: 'Pending Approval',
              approved: 'Approved',
              reject: 'Reject',
              rejected: 'Rejected',
              closed: 'Closed',
              complete: 'Complete',
              partsorderedpartially: 'Parts Ordered Partially',
              partsordered: 'Parts Ordered',
              repairinprogress: 'Repair In Progress',
              readytoinvoice: 'Ready To Invoice',
              invoiceready: 'Invoice Ready',
              invoiced: 'Invoiced',
              paid: 'Paid',
              others: 'Others'
            };
            return statusMapper[status.replace(/\s/g, '').toLowerCase()] || status;
          }
          /**
          * function
          */

        }, {
          key: "refreshCalendarData",
          value: function refreshCalendarData() {
            this.calendarData = [];
            this.getCalendarData(this.generateFilterQuery());
          }
          /**
          * function
          */

        }, {
          key: "generateFilterQuery",
          value: function generateFilterQuery() {
            this.calendarCurrentStartDate = this.calendarCurrentStartDate || new Date(this.scheduler.instance.getStartViewDate().toDateString()).toISOString();
            this.calendarCurrentEndDate = this.calendarCurrentEndDate || new Date(new Date(this.scheduler.instance.getEndViewDate().toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
            var startDate = this.calendarCurrentStartDate;
            var endDate = this.calendarCurrentEndDate;

            if (this.isFromCalendar) {
              startDate = new Date(this.scheduler.instance.getStartViewDate().toDateString()).toISOString();
              endDate = new Date(new Date(this.scheduler.instance.getEndViewDate().toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
              this.calendarCurrentStartDate = startDate;
              this.calendarCurrentEndDate = endDate;
              this.isFromCalendar = false;
            }

            var filterValue = this.filterForm.value;
            var query = "?$filter=((StartDate ge ".concat(startDate, " and StartDate le ").concat(endDate, ") or (EndDate ge ").concat(startDate, " and EndDate le ").concat(endDate, ") or (StartDate le ").concat(startDate, " and EndDate ge ").concat(endDate, "))");

            if (filterValue['Booking']) {
              if (filterValue['Booking'].includes('bookingIn') && filterValue['Booking'].includes('bookingOut')) {
                query = "?$filter=((StartDate ge ".concat(startDate, " and StartDate le ").concat(endDate, ") and (EndDate ge ").concat(startDate, " and EndDate le ").concat(endDate, "))");
              } else if (filterValue['Booking'].includes('bookingIn')) {
                query = "?$filter=((StartDate ge ".concat(startDate, " and StartDate le ").concat(endDate, "))");
              } else if (filterValue['Booking'].includes('bookingOut')) {
                query = "?$filter=((EndDate ge ".concat(startDate, " and EndDate le ").concat(endDate, "))");
              }
            }

            Object.keys(filterValue).forEach(function (key) {
              switch (key) {
                case 'OrgName':
                  if (filterValue[key]) {
                    query += " and (OrgId eq ".concat(filterValue[key], ")");
                  }

                  break;

                case 'TypeName':
                  if (filterValue[key] && filterValue[key].length > 0) {
                    query += " and (".concat(filterValue[key].map(function (x) {
                      return key + ' eq \'' + x + '\'';
                    }).join(' or '), ")");
                  }

                  break;

                case 'WorkProviderDto':
                  if (filterValue[key] && filterValue[key].length > 0) {
                    query += " and (".concat(filterValue[key].map(function (x) {
                      return 'WorkProviderDto/CompanyOrgType eq \'' + x + '\'';
                    }).join(' or '), ")");
                  }

                  break;

                case 'WorkProviderName':
                  if (filterValue[key] && filterValue[key].length > 0) {
                    query += " and (".concat(filterValue[key].map(function (x) {
                      return 'WorkProviderDto/CompanyName eq \'' + x + '\'';
                    }).join(' or '), ")");
                  }

                  break;

                case 'CustomerName':
                  if (filterValue[key] && filterValue[key].length > 0) {
                    query += " and (".concat(filterValue[key].map(function (x) {
                      return 'Customer/Email eq \'' + x + '\'';
                    }).join(' or '), ")");
                  }

                  break;

                case 'Assignees':
                  if (filterValue[key] && filterValue[key].length > 0) {
                    var partialQuery = "".concat(filterValue[key].map(function (x) {
                      return 'c/AssigneeId eq ' + x;
                    }).join(' or '));
                    query += " and Assignees/any(c: (".concat(partialQuery, "))");
                  }

                  break;

                case 'RepairType':
                  if (filterValue[key] && filterValue[key].length > 0) {
                    var _partialQuery = "".concat(filterValue[key].map(function (x) {
                      return 'c/RepairServiceTypeId eq ' + x;
                    }).join(' or '));

                    query += " and RepairServiceTypes/any(c: (".concat(_partialQuery, "))");
                  }

                  break;

                default:
                  break;
              }
            });
            return query + '&$count=true';
          }
          /**
           *
           * @param arr
           * @returns
           */

        }, {
          key: "calculateSum",
          value: function calculateSum(arr, key) {
            return arr.reduce(function (total, current) {
              return total + current[key];
            }, 0);
          }
          /**
           * getCalendarData
           * @param query
           */

        }, {
          key: "getCalendarData",
          value: function getCalendarData(query) {
            var _this13 = this;

            var _a;

            this.totalEstimate = 0;
            this.totalLabour = 0;
            this.totalBooking = 0; // this.setDisabledCell();

            this.bookingIdList = [];
            this.disabledDate = {};
            this.weekendDate = {};
            this.startHour = 0;
            this.endHour = 24;
            this.commonService.showLoading();
            (0, rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([this.calendarService.getCalendarData(query), this.calendarService.getSchedule((_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.userId, this.calendarCurrentStartDate, this.calendarCurrentEndDate).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null);
            }))]).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  calendarData = _ref4[0],
                  scheduleData = _ref4[1];

              var updatedValue = [];
              calendarData.value.forEach(function (orgValue) {
                var mappedData = Object.assign(Object.assign({}, orgValue), {
                  StartDate: dayjs__WEBPACK_IMPORTED_MODULE_0__(orgValue.StartDate).toDate(),
                  EndDate: dayjs__WEBPACK_IMPORTED_MODULE_0__(orgValue.EndDate).toDate(),
                  Color: orgValue.BookingTypeColor,
                  Icon: orgValue.TypeName === 'Assessment' ? 'booking-type-assessment' : 'booking-type-repair',
                  DisplayStatus: _this13.getDisplayStatus(orgValue.StatusName)
                });

                if (!_this13.isSameDay(mappedData.StartDate, mappedData.EndDate)) {
                  mappedData.allDay = true;
                }

                updatedValue.push(mappedData);

                _this13.bookingIdList.push(mappedData.BookingGuid);

                var startDate = _this13.currentView === 'month' ? new Date(_this13.currentDate.getFullYear(), _this13.currentDate.getMonth(), 1) : new Date(_this13.calendarCurrentStartDate);
                var endDate = _this13.currentView === 'month' ? new Date(_this13.currentDate.getFullYear(), _this13.currentDate.getMonth() + 1, 0, 11, 59, 59) : new Date(_this13.calendarCurrentEndDate);

                if (_this13.checkDateRange(startDate, endDate, mappedData.StartDate)) {
                  _this13.totalEstimate += mappedData.EstimateCost || 0;
                  _this13.totalLabour += mappedData.LabourCost || 0;
                  _this13.totalBooking++;
                }
              });
              return {
                calendarData: updatedValue,
                scheduleData: scheduleData
              };
            })).subscribe(function (result) {
              _this13.calendarData = _toConsumableArray(result.calendarData);

              _this13.commonService.hideLoading();

              _this13.checkSchedule(result.scheduleData);

              _this13.scrollToCurrentTime();
            });
          }
          /**
           *
           */

        }, {
          key: "scrollToCurrentTime",
          value: function scrollToCurrentTime() {
            var currentDate = new Date();
            var scrollToHour = currentDate.getHours() > 0 ? currentDate.getHours() - 1 : currentDate.getHours();

            if (scrollToHour < this.startHour) {
              scrollToHour = this.startHour;
            }

            if (scrollToHour > this.endHour) {
              scrollToHour = this.endHour - 1;
            }

            this.scheduler.instance.scrollToTime(scrollToHour, currentDate.getMinutes());
          }
          /**
           *
           * @param data
           */

        }, {
          key: "checkSchedule",
          value: function checkSchedule(scheduleData) {
            var _this14 = this;

            var _a, _b;

            var startHour;
            var endHour;
            (_b = (_a = scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.data) === null || _a === void 0 ? void 0 : _a.calenderDays) === null || _b === void 0 ? void 0 : _b.forEach(function (element) {
              if (element.breaks && element.breaks.length > 0) {
                var startTime = dayjs__WEBPACK_IMPORTED_MODULE_0__("".concat(element.date, " ").concat(element.breaks[0].startTime, " Z"), 'YYYY-MM-DD hh:mm A Z');
                var endTime = dayjs__WEBPACK_IMPORTED_MODULE_0__("".concat(element.date, " ").concat(element.breaks[0].endTime, " Z"), 'YYYY-MM-DD hh:mm A Z');

                do {
                  var stringDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(startTime.toDate()).toDate().toString();
                  _this14.lunchTime[stringDate] = true;
                  startTime = dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(startTime.toDate()).add(30, 'm');
                } while (startTime < endTime);
              }

              var date = dayjs__WEBPACK_IMPORTED_MODULE_0__("".concat(element.date, " 00:00 AM Z"), 'YYYY-MM-DD hh:mm A Z');

              if (element.isOff) {
                _this14.disabledDate[date.toDate().toDateString()] = true;
              }

              if (element.isWeekend) {
                _this14.weekendDate[date.toDate().toDateString()] = true;
              }

              if (element.timeSlots && element.timeSlots.length > 0) {
                var _startTime = dayjs__WEBPACK_IMPORTED_MODULE_0__("".concat(element.date, " ").concat(element.timeSlots[0].startTime, " Z"), 'YYYY-MM-DD HH:mm Z');

                var _endTime = dayjs__WEBPACK_IMPORTED_MODULE_0__("".concat(element.date, " ").concat(element.timeSlots[0].endTime, " Z"), 'YYYY-MM-DD HH:mm Z');

                if (!startHour || startHour > _startTime.toDate().getHours()) {
                  startHour = _startTime.toDate().getHours();
                }

                if (!endHour || endHour < _endTime.toDate().getHours()) {
                  endHour = _endTime.toDate().getHours();

                  if (_endTime.toDate().getMinutes() > 0 && endHour < 24) {
                    endHour = endHour + 1;
                  }
                }
              }
            });
            this.startHour = startHour || 0;
            this.endHour = endHour || 24; // this.showCalendar = false;
            // setTimeout(() => {
            //   this.showCalendar = true;
            // }, 0);
          }
          /**
           *
           * @param date
           * @returns
           */

        }, {
          key: "getStringDate",
          value: function getStringDate(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_0__(date).format('YYYYMMDDHHmm');
          }
          /**
           * isSameDay
           * @param startDate
           * @param endDate
           * @returns
           */

        }, {
          key: "isSameDay",
          value: function isSameDay(startDate, endDate) {
            var formattedStartDate = this.datePipe.transform(startDate, 'yyyy-MM-dd');
            var formattedEndDate = this.datePipe.transform(endDate, 'yyyy-MM-dd');
            return formattedStartDate === formattedEndDate;
          }
          /**
           * newBooking
           */

        }, {
          key: "newBooking",
          value: function newBooking() {
            this.router.navigate(['/repair/booking/0']);
          }
          /**
           * handleContextMenu
           * @param type
           * @param e
           * @param appointment
           */

        }, {
          key: "handleContextMenu",
          value: function handleContextMenu(type, e, appointment) {
            if (type === 'preview') {
              if (!this.previewOpen) {
                this.openPreview(appointment);
              }
            } else if (type === 'delete') {
              this.scheduler.instance.deleteAppointment(this.calendarData[this.calendarData.findIndex(function (x) {
                return x.Id == appointment.Id;
              })]);
            }
          }
          /**
           * cancelEvent
           * @param e
           */

        }, {
          key: "cancelEvent",
          value: function cancelEvent(e) {
            e.cancel = true;
          }
          /**
           *
           * @param appointment
           */

        }, {
          key: "openPreview",
          value: function openPreview(appointment) {
            var _this15 = this;

            this.previewOpen = true;
            appointment.isReadOnlyPermission = this.isReadOnlyPermission;
            var dialogRef = this.dialog.open(_booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_6__.BookingPreviewComponent, {
              data: appointment,
              maxHeight: '90vh'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this15.previewOpen = false;

              if ((result === null || result === void 0 ? void 0 : result.success) && (result.type === 'delete' || result.type === 'refresh')) {
                _this15.refreshCalendarData();

                _this15.draftClose();

                _this15.draftData = [];
                _this15.draftDataLoaded = false;
              }
            });
          }
          /**
             * onAppointmentClick
             * @param e
             */

        }, {
          key: "onAppointmentClick",
          value: function onAppointmentClick(e) {
            var _this16 = this;

            setTimeout(function () {
              if (!_this16.isDoubleClick && !_this16.previewOpen) {
                _this16.openPreview(e.appointmentData);
              }
            }, 500);
            this.isDoubleClick = false;
            e.cancel = true;
          }
          /**
             * onAppointmentDblClick
             * @param e
             */

        }, {
          key: "onAppointmentDblClick",
          value: function onAppointmentDblClick(e) {
            var _a;

            this.isDoubleClick = true;
            var routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper[(_a = e.appointmentData.StatusName) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '').toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper.others;
            this.router.navigate([routeToRedirect.replace('{{repairGUID}}', e.appointmentData.ObjectGuid)]);
            e.cancel = true;
          }
          /**
           * onOptionChanged
           * @param e
           */

        }, {
          key: "onOptionChanged",
          value: function onOptionChanged(e) {
            var _this17 = this;

            if (e.name === 'currentView') {
              this.currentView = e.value;
              localStorage.setItem('currentView', this.currentView);
              this.isFromCalendar = true;
              setTimeout(function () {
                _this17.draftClose();

                _this17.draftData = [];
                _this17.draftDataLoaded = false;

                _this17.refreshCalendarData();
              }, 100);
              this.calendarHeight = this.currentView === 'month' ? '100%' : this.defaultHeight;
            } else if (e.name === 'currentDate') {
              this.currentDate = e.value;
              this.isFromCalendar = true;
              setTimeout(function () {
                _this17.draftClose();

                _this17.draftData = [];
                _this17.draftDataLoaded = false;

                _this17.refreshCalendarData();
              }, 100);
            }
          }
          /**
           * onCellClick
           * @param e
           */

        }, {
          key: "onCellClick",
          value: function onCellClick(e) {
            if (!this.previewOpen) {
              if (this.isReadOnlyPermission) {
                e.cancel = true;
                this.commonService.showInfoToast(5000, 'msg_gt_permission');
              } else {
                this.checkDateAndOpen(e);
              }
            }
          }
          /**
           *
           * @param e
           */

        }, {
          key: "checkDateAndOpen",
          value: function checkDateAndOpen(e) {
            if (this.isPastDate(e.cellData.startDate)) {
              e.cancel = true;
              this.commonService.showInfoToast(5000, 'cannot_past_date');
            } else {
              var isValidAppointment = this.isValidAppointment(e.component, e.cellData);

              if (!isValidAppointment) {
                e.cancel = true;
                this.notifyDisableDate();
              } else {
                var startDate = this.datePipe.transform(e.cellData.startDate, 'yyyy-MM-ddTHH:mm:ss');
                var endDate = this.datePipe.transform(e.cellData.endDate, 'yyyy-MM-ddTHH:mm:ss');
                this.router.navigate(['/repair/booking/0'], {
                  queryParams: {
                    startDate: startDate,
                    endDate: endDate
                  }
                });
              }
            }
          }
          /**
           *
           * @param e
           */

        }, {
          key: "onAppointmentFormOpening",
          value: function onAppointmentFormOpening(e) {
            e.cancel = true;
            var startDate = e.appointmentData.startDate;

            if (!this.isValidAppointmentDate(startDate)) {
              e.cancel = true;
              this.notifyDisableDate();
            }
          }
          /**
           *
           * @param e
           */

        }, {
          key: "onAppointmentAdding",
          value: function onAppointmentAdding(e) {
            var isValidAppointment = this.isValidAppointment(e.component, e.appointmentData);

            if (!isValidAppointment) {
              e.cancel = true;
              this.notifyDisableDate();
            }
          }
          /**
           *
           * @param e
           */

        }, {
          key: "onAppointmentUpdating",
          value: function onAppointmentUpdating(e) {
            var allowedStatus = ['draft', 'vehicledetails', 'uploaddocuments', 'uploadphotos', 'repairestimation', 'pendingapproval', 'approved', 'reject', 'rejected', 'repairinprogress'];
            var statusTrimmed = e.oldData.StatusName.toLowerCase().replace(/\s/g, '');

            if (!this.isReadOnlyPermission && allowedStatus.includes(statusTrimmed)) {
              var isValidAppointment = this.isValidAppointment(e.component, e.newData);

              if (!isValidAppointment) {
                e.cancel = true;
                this.notifyDisableDate();
              }

              if (e.newData.TypeName === 'Assessment') {
                if (e.newData.StartDate.getTime() === e.oldData.StartDate.getTime() && e.newData.EndDate.getTime() !== e.oldData.EndDate.getTime() || e.newData.StartDate.getTime() !== e.oldData.StartDate.getTime() && e.newData.EndDate.getTime() === e.oldData.EndDate.getTime()) {
                  //This means that the appointment is resized and you can cancel it.  
                  e.cancel = true;
                }
              }
            } else {
              e.cancel = true;

              if (!allowedStatus.includes(statusTrimmed)) {
                var message = this.translateService.instant('cannot_update_datetime_for_status', {
                  status: this.getDisplayStatus(statusTrimmed)
                });
                this.commonService.showInfoToast(5000, message);
              }
            }
          }
          /**
           *
           * @param e
           */

        }, {
          key: "onAppointmentUpdated",
          value: function onAppointmentUpdated(e) {
            var _this18 = this;

            if (!this.isReadOnlyPermission) {
              var startDate = new Date(e.appointmentData.StartDate.getTime());
              var endDate = new Date(e.appointmentData.EndDate.getTime());

              if (e.appointmentData.allDay && startDate.getDate() == endDate.getDate()) {
                endDate = new Date(e.appointmentData.StartDate.getTime());
                endDate.setDate(endDate.getDate() + 1);
              }

              this.patchBooking(startDate, endDate, e.appointmentData.BookingGuid).subscribe({
                next: function next() {
                  _this18.commonService.hideLoading();

                  _this18.refreshCalendarData();
                }
              });
            } else {
              e.cancel = true;
            }
          }
          /**
           *
           * @param startDate
           * @param endDate
           * @param bookingGuid
           * @returns
           */

        }, {
          key: "patchBooking",
          value: function patchBooking(startDate, endDate, bookingGuid) {
            var patchValue = [{
              op: 'replace',
              path: 'StartDate',
              value: dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(startDate).format('YYYY-MM-DDTHH:mm:ss.000') + 'Z'
            }, {
              op: 'replace',
              path: 'EndDate',
              value: dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(endDate).format('YYYY-MM-DDTHH:mm:ss.000') + 'Z'
            }, {
              op: 'replace',
              path: 'IsArrived',
              value: 'False'
            }, {
              op: 'replace',
              path: 'IsNoShow',
              value: 'False'
            }];
            this.commonService.showLoading();
            return this.calendarService.updateBooking(bookingGuid, patchValue);
          }
          /**
           *
           */

        }, {
          key: "notifyDisableDate",
          value: function notifyDisableDate() {
            this.commonService.showInfoToast(5000, 'cannot_disabled_date');
          }
          /**
           *
           * @param date
           * @returns
           */

        }, {
          key: "isHoliday",
          value: function isHoliday(date) {
            var localeDate = date.toLocaleDateString();
            var holidays = this.calendarService.getHolidays();
            return holidays.filter(function (holiday) {
              return holiday.toLocaleDateString() === localeDate;
            }).length > 0;
          }
          /**
           *
           * @param date
           * @returns
           */

        }, {
          key: "isWeekend",
          value: function isWeekend(date) {
            var day = date.getDay();
            return day === 0;
          }
          /**
           *
           * @param date
           * @returns
           */

        }, {
          key: "isDisableDate",
          value: function isDisableDate(date) {
            return this.isHoliday(date); // || this.isWeekend(date) || this.isPastDate(date);
          }
          /**
           *
           * @param date
           * @returns
           */

        }, {
          key: "isPastDate",
          value: function isPastDate(date) {
            return date < new Date();
          }
          /**
           *
           * @param date
           * @returns
           */

        }, {
          key: "isDisabledDateCell",
          value: function isDisabledDateCell(date) {
            return this.currentView === 'month' ? this.isWeekend(date) : this.isDisableDate(date);
          }
          /**
           *
           * @param date
           * @returns
           */
          // hasCoffeeCupIcon(date: Date): boolean {
          //   const hours = date.getHours();
          //   const minutes = date.getMinutes();
          //   const dinnerTime = this.lunchTime;
          //   return hours === dinnerTime.from && minutes === 0;
          // }

          /**
           *
           * @param component
           * @param appointmentData
           * @returns
           */

        }, {
          key: "isValidAppointment",
          value: function isValidAppointment(component, appointmentData) {
            var startDate = new Date(appointmentData.StartDate || appointmentData.startDate);
            var endDate = new Date(appointmentData.EndDate || appointmentData.endDate);
            return this.isValidAppointmentInterval(startDate, endDate, 30);
          }
          /**
           *
           * @param startDate
           * @param endDate
           * @param cellDuration
           * @returns
           */

        }, {
          key: "isValidAppointmentInterval",
          value: function isValidAppointmentInterval(startDate, endDate, cellDuration) {
            var edgeEndDate = new Date(endDate.getTime());

            if (!this.isValidAppointmentDate(edgeEndDate)) {
              return false;
            }

            return true;
          }
          /**
           *
           * @param date
           * @returns
           */

        }, {
          key: "isValidAppointmentDate",
          value: function isValidAppointmentDate(date) {
            // return !this.isHoliday(date) &&
            //   !(date.getHours() >= this.lunchTime.from &&
            //     date.getHours() < this.lunchTime.to) &&
            //   !this.isWeekend(date) && !this.isPastDate(date);
            // return !this.isHoliday(date) &&
            //   !this.isWeekend(date) && !this.isPastDate(date);
            return !this.isPastDate(date);
          }
          /**
           *
           * @param form
           */

        }, {
          key: "applyDisableDatesToDateEditors",
          value: function applyDisableDatesToDateEditors(form) {
            var holidays = this.calendarService.getHolidays();
            var startDateEditor = form.getEditor('startDate');
            startDateEditor.option('disabledDates', holidays);
            var endDateEditor = form.getEditor('endDate');
            endDateEditor.option('disabledDates', holidays);
          }
          /**
           *
           * @param currentDate
           * @returns
           */

        }, {
          key: "getDateText",
          value: function getDateText(currentDate) {
            var _this19 = this;

            var startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
            var endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
            var filteredData = this.calendarData.filter(function (x) {
              return _this19.checkDateRange(startDate, endDate, x.StartDate);
            }).map(function (a) {
              return a;
            });

            if (filteredData.length > 0) {
              return '<span>' + this.xaCurrencyPipe.transform(this.calculateSum(filteredData, 'EstimateCost'), this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) + '<span>E</span></span>' + '<span>' + this.xaCurrencyPipe.transform(this.calculateSum(filteredData, 'LabourCost'), this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) + '<span>L</span></span>' + '<span class="has-background">' + filteredData.length + '</span>';
            } else {
              return '<span>' + this.xaCurrencyPipe.transform(0, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) + '<span>E</span></span>' + '<span>' + this.xaCurrencyPipe.transform(0, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) + '<span>L</span></span>' + '<span class="has-background">0</span>';
            }
          }
          /**
           *
           * @param start
           * @param end
           * @param current
           * @returns
           */

        }, {
          key: "checkDateRange",
          value: function checkDateRange(start, end, current) {
            if (start <= current && current <= end) {
              return true;
            }

            return false;
          }
          /**
           *
           * @param output
           */

        }, {
          key: "onFormUpdate",
          value: function onFormUpdate(output) {
            var _this20 = this;

            if (output.name === 'TypeName' || output.name === 'Booking' || output.name === 'WorkProviderDto' || output.name === 'RepairType') {
              // eslint-disable-next-line prefer-const
              var prevValue = this.filterForm.get(output.name).value || [];

              if (output.value) {
                if (prevValue.indexOf(output.keyFieldValue) === -1) {
                  prevValue.push(output.keyFieldValue);
                }
              } else {
                var index = prevValue.indexOf(output.keyFieldValue);
                prevValue.splice(index, 1);
              }

              this.filterForm.get(output.name).setValue(prevValue);

              if (output.name === 'WorkProviderDto') {
                this.showProviderChild = prevValue.length > 1 || prevValue.length == 1 && !prevValue.includes('Retail');
              }

              if (prevValue.length > 0 && output.name === 'WorkProviderDto') {
                this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), {
                  value: '',
                  selectedOption: ''
                });
                this.filterForm.get('CustomerName').setValue('');
                this.filterModal[7] = Object.assign(Object.assign({}, this.filterModal[7]), {
                  value: '',
                  options: [],
                  selectedOption: ''
                });
                this.filterForm.get('WorkProviderName').setValue('');
                this.commonService.showLoading();
                var query = "?$filter= (OrgId eq ".concat(this.filterForm.get('OrgName').value, ")");
                query += "and (".concat(prevValue.map(function (x) {
                  return "CompanyOrgType eq '".concat(x, "'");
                }).join(' or '), ")");
                var orgQuery = "?orgId=".concat(this.filterForm.get('OrgName').value);
                prevValue.forEach(function (value) {
                  _this20.caseService.getCompanyData(value, orgQuery).subscribe({
                    next: function next(result) {
                      var concatArray = _this20.filterModal[7].options.concat(result.data.map(function (x) {
                        return {
                          label: x.companyName || x.partnershipName,
                          value: x.companyName || x.partnershipName
                        };
                      }));

                      _this20.filterModal[7] = Object.assign(Object.assign({}, _this20.filterModal[7]), {
                        options: concatArray
                      });
                    }
                  });
                });
                this.calendarService.getCustomer(query).subscribe({
                  next: function next(result) {
                    _this20.commonService.hideLoading();

                    if (result) {
                      _this20.filterModal[4] = Object.assign(Object.assign({}, _this20.filterModal[4]), {
                        options: result.value.filter(function (value, index, self) {
                          return self.findIndex(function (o) {
                            return o.ContactId === value.ContactId;
                          }) === index;
                        }).map(function (x) {
                          return {
                            label: x.FirstName + ' ' + x.LastName,
                            value: x.Email,
                            html: "<div class='workflow-customer-item'><span class='name'>".concat(x.FirstName + ' ' + x.LastName, "</span><span class='email'>").concat(x.Email, "</span></div>")
                          };
                        })
                      });
                    } else {
                      _this20.filterModal[4] = Object.assign(Object.assign({}, _this20.filterModal[4]), {
                        options: []
                      });
                    }
                  },
                  error: function error() {
                    _this20.filterModal[4] = Object.assign(Object.assign({}, _this20.filterModal[4]), {
                      options: []
                    });

                    _this20.commonService.hideLoading();
                  }
                });
              } else {
                this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), {
                  options: []
                });
              }
            } else if (output.name === 'Assignees') {
              this.filterModal[5] = Object.assign(Object.assign({}, this.filterModal[5]), {
                selectedOption: output.value
              });
              this.filterForm.get(output.name).setValue(output.value.map(function (x) {
                return x.value;
              }));
            } else if (output.name === 'CustomerName') {
              this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), {
                selectedOption: output.value
              });
              this.filterForm.get(output.name).setValue(output.value.map(function (x) {
                return x.value;
              }));
            } else if (output.name === 'WorkProviderName') {
              this.filterModal[7] = Object.assign(Object.assign({}, this.filterModal[7]), {
                selectedOption: output.value
              });
              this.filterForm.get(output.name).setValue(output.value.map(function (x) {
                return x.value;
              }));
            } else if (output.name === 'OrgName') {
              this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), {
                selectedOption: output.value
              });
              this.filterForm.get(output.name).setValue(output.value.value);
              this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), {
                options: []
              });
              this.filterModal[3] = Object.assign(Object.assign({}, this.filterModal[3]), {
                options: []
              });
              this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), {
                options: []
              });
              this.filterModal[5] = Object.assign(Object.assign({}, this.filterModal[5]), {
                options: []
              });
              this.filterModal[6] = Object.assign(Object.assign({}, this.filterModal[6]), {
                options: []
              });
              this.filterModal[7] = Object.assign(Object.assign({}, this.filterModal[7]), {
                options: []
              });
              this.filterForm.get('WorkProviderDto').setValue('');
              this.filterForm.get('WorkProviderName').setValue('');
              this.filterForm.get('CustomerName').setValue('');

              if (this.filterForm.get(output.name).value) {
                this.getWorkProviders(this.filterForm.get(output.name).value);
                this.applyButton = Object.assign(Object.assign({}, this.applyButton), {
                  type: 'primary'
                });
              } else {
                this.applyButton = Object.assign(Object.assign({}, this.applyButton), {
                  type: 'disabled'
                });
              }

              this.showProviderChild = false;
            } else {
              this.filterForm.get(output.name).setValue(output.value);
            }
          }
          /**
           *
           * @param value
           * @returns
           */

        }, {
          key: "formatLabel",
          value: function formatLabel(value) {
            if (value >= 1000) {
              return Math.round(value / 1000) + 'k';
            }

            return "".concat(value, " ");
          }
          /**
           *
           */
          // setDisabledCell(): void {
          //   const startDate = this.scheduler.instance.getStartViewDate();
          //   const endDate = this.scheduler.instance.getEndViewDate();
          //   for (const date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
          //     // if (this.isPastDate(startDate)) {
          //     //   this.disabledDate[startDate.toDateString()] = true;
          //     //   continue;
          //     // }
          //     if (this.isDisableDate(date)) {
          //       this.disabledDate[date.toDateString()] = true;
          //     } else {
          //       if (this.isWeekend(date)) {
          //         this.weekendDate[date.toDateString()] = true;
          //       }
          //     }
          //   }
          // }

          /**
           *
           */

        }, {
          key: "applyFilter",
          value: function applyFilter() {
            this.refreshCalendarData();
            this.filter.close();
          }
          /**
           *
           */

        }, {
          key: "resetFilter",
          value: function resetFilter() {
            var _a, _b, _c, _d, _e, _f;

            this.filterForm.reset();

            for (var index = 0; index < this.filterModal.length; index++) {
              if (!this.filterModal[index].disabled) {
                this.filterModal[index] = Object.assign(Object.assign({}, this.filterModal[index]), {
                  value: '',
                  selectedOption: '',
                  options: (_a = this.filterModal[index].options) === null || _a === void 0 ? void 0 : _a.map(function (x) {
                    x.checked = false;
                    return x;
                  })
                });
              }
            }

            this.showProviderChild = false;

            if ((_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.id) {
              this.filterForm.get('OrgName').setValue((_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.id);
              this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), {
                selectedOption: {
                  'label': (_e = this.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.name,
                  'value': (_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id
                }
              });

              if (this.filterForm.get('OrgName').value) {
                this.getWorkProviders(this.filterForm.get('OrgName').value);
              }
            }

            this.applyButton = Object.assign(Object.assign({}, this.applyButton), {
              type: 'primary'
            }); // this.refreshCalendarData();
            // this.filter.close();
          }
          /*Draft customer*/

          /**
           *
           * @param e
           */

        }, {
          key: "onItemDragStart",
          value: function onItemDragStart(e) {
            e.itemData = e.fromData;
          }
          /**
           *
           * @param e
           */

        }, {
          key: "onItemDragEnd",
          value: function onItemDragEnd(e) {
            if (e.toData) {
              e.cancel = true;
            }
          }
          /**
           *
           * @param e
           */

        }, {
          key: "onAppointmentAdd",
          value: function onAppointmentAdd(e) {
            if (this.isReadOnlyPermission) {
              this.commonService.showInfoToast(5000, 'msg_gt_permission');
            } else {
              this.addAppointmentFromDraft(e);
            }
          }
          /**
           *
           * @param e
           */

        }, {
          key: "addAppointmentFromDraft",
          value: function addAppointmentFromDraft(e) {
            var _this21 = this;

            if (this.isPastDate(e.itemData.StartDate)) {
              e.cancel = true;
              this.commonService.showInfoToast(5000, 'cannot_past_date');
            } else {
              var isValidAppointment = this.isValidAppointment(e.component, e.itemData);

              if (!isValidAppointment) {
                e.cancel = true;
                this.notifyDisableDate();
              } else {
                if (e.itemData.draftCustomerType === 'Quote') {
                  if (e.itemData.status == 'Repair Estimation') {
                    var startDate = this.datePipe.transform(e.itemData.StartDate, 'yyyy-MM-ddTHH:mm:ss');
                    var endDate = this.datePipe.transform(e.itemData.EndDate, 'yyyy-MM-ddTHH:mm:ss');
                    this.router.navigate(['repair/booking/0'], {
                      queryParams: {
                        'caseId': e.itemData.caseGuid,
                        'startDate': startDate,
                        'endDate': endDate
                      }
                    });
                  } else {
                    this.router.navigate(["/quote/case/".concat(e.itemData.caseGuid)]);
                  }
                } else if (e.itemData.draftCustomerType === 'Repair') {
                  this.patchBooking(e.itemData.StartDate, e.itemData.EndDate, e.itemData.bookingGuid).subscribe({
                    next: function next() {
                      _this21.commonService.hideLoading();

                      _this21.draftDataLoaded = false;

                      _this21.refreshCalendarData();

                      _this21.openDraftCustomer();
                    }
                  });
                } else {
                  this.commonService.showInfoToast(1000, 'draft_type_not_defined');
                }
              }
            }
          }
          /**
           *
           * @param type
           * @param e
           * @param customer
           */

        }, {
          key: "handleDraftAction",
          value: function handleDraftAction(type, e, customer) {
            var _this22 = this;

            if (type === 'preview') {
              if (customer.draftCustomerType == 'Repair') {
                this.router.navigate(["/repair/booking/".concat(customer.repairGuid)]);
              } else if (customer.draftCustomerType == 'Quote') {
                this.router.navigate(["/quote/case/".concat(customer.caseGuid)]);
              }
            } else if (type === 'delete') {
              this.commonService.openDeleteDialog('customer').afterClosed().subscribe(function (data) {
                if (data) {
                  _this22.commonService.showLoading();

                  _this22.calendarService.deleteDraftCustomer(customer.id).subscribe({
                    next: function next() {
                      _this22.commonService.hideLoading();

                      _this22.draftDataLoaded = false;

                      _this22.openDraftCustomer();
                    }
                  });
                }
              });
            }
          }
          /**
           *
           */

        }, {
          key: "draftClose",
          value: function draftClose() {
            this.draftCustomer.close();
            this.calendarWidth = '100%';
            this.calendarHeight = this.currentView === 'month' ? '100%' : this.defaultHeight;
          }
          /**
           * get work providers
           * @param orgId
           */

        }, {
          key: "getWorkProviders",
          value: function getWorkProviders(orgId) {
            var _this23 = this;

            this.commonService.showLoading(); // this.caseService.getProvidersByOrgId(`?orgIds=${orgId}`).subscribe({
            //   next: (result) => {
            //     this.commonService.hideLoading();
            //     this.filterModal[3].options = result.data.map((x) => { return { label: x, value: x } });
            //   },
            //   error: (err) => {
            //     this.commonService.hideLoading();
            //   }
            // });

            (0, rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([this.bookingService.getBookingRepairTypes("?orgIds=".concat(orgId)), this.caseService.getProvidersByOrgId("?orgIds=".concat(orgId)), this.caseService.getCaseUsers("?orgId=".concat(orgId))]).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 3),
                  bookingRepairType = _ref6[0],
                  workProvider = _ref6[1],
                  employeeList = _ref6[2];

              return {
                bookingRepairType: bookingRepairType,
                workProvider: workProvider,
                employeeList: employeeList
              };
            })).subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f, _g;

              if ((_a = result === null || result === void 0 ? void 0 : result.bookingRepairType) === null || _a === void 0 ? void 0 : _a.data) _this23.filterModal[0].options = (_b = result === null || result === void 0 ? void 0 : result.bookingRepairType) === null || _b === void 0 ? void 0 : _b.data.BookingTypes.map(function (x) {
                return {
                  label: x.name,
                  value: x.name
                };
              });
              if ((_c = result === null || result === void 0 ? void 0 : result.workProvider) === null || _c === void 0 ? void 0 : _c.data) _this23.filterModal[3].options = (_d = result === null || result === void 0 ? void 0 : result.workProvider) === null || _d === void 0 ? void 0 : _d.data.map(function (x) {
                return {
                  label: x,
                  value: x
                };
              });

              if ((_e = result === null || result === void 0 ? void 0 : result.employeeList) === null || _e === void 0 ? void 0 : _e.data) {
                _this23.filterModal[5] = Object.assign(Object.assign({}, _this23.filterModal[5]), {
                  options: (_g = (_f = result === null || result === void 0 ? void 0 : result.employeeList) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.map(function (x) {
                    return {
                      label: x.name,
                      value: x.id
                    };
                  })
                });
              }

              if (result.bookingRepairType.data.RepairType && result.bookingRepairType.data.RepairType.length > 0) {
                _this23.filterModal[6].options = result.bookingRepairType.data.RepairType[0].RepairTypes.map(function (x) {
                  return {
                    label: x.name,
                    value: x.id,
                    icon: _this23.getRepairTpeIcon(x.name)
                  };
                });
              }

              _this23.commonService.hideLoading();
            });
          }
        }]);

        return _BookingJournalComponent;
      }();

      _BookingJournalComponent.ɵfac = function BookingJournalComponent_Factory(t) {
        return new (t || _BookingJournalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_8__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_9__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__.XaCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService));
      };

      _BookingJournalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
        type: _BookingJournalComponent,
        selectors: [["chr-booking-journal"]],
        viewQuery: function BookingJournalComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_24__.DxSchedulerComponent, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.scheduler = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.draftCustomer = _t.first);
          }
        },
        hostBindings: function BookingJournalComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("resize", function BookingJournalComponent_resize_HostBindingHandler($event) {
              return ctx.getScreenSize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService])],
        decls: 90,
        vars: 81,
        consts: [[1, "calendar-header-container", 3, "ngClass"], [1, "filter"], [3, "buttonModel", "click", 4, "chqPermission"], [3, "buttonModel", "click"], [1, "total"], [1, "has-background"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "booking-calendar", "mh-0", 3, "ngClass"], ["startDateExpr", "StartDate", "endDateExpr", "EndDate", "dateCellTemplate", "dateCellTemplate", "timeCellTemplate", "timeCellTemplate", "dataCellTemplate", "dataCellTemplate", "appointmentTemplate", "appointment-template", "appointmentTooltipTemplate", "appointment-tooltip-template", 3, "width", "height", "editing", "dataSource", "views", "currentView", "adaptivityEnabled", "firstDayOfWeek", "startDayHour", "endDayHour", "currentDate", "cellDuration", "useDropDownViewSwitcher", "crossScrollingEnabled", "showCurrentTimeIndicator", "maxAppointmentsPerCell", "onAppointmentFormOpening", "onAppointmentUpdating", "onAppointmentUpdated", "onAppointmentClick", "onAppointmentDblClick", "onOptionChanged", "onCellClick", 4, "ngIf"], [3, "hasBackdrop"], [1, "filter-sidenav", 3, "mode", "position"], ["filter", ""], [1, "filter-container"], [1, "header"], [1, "title"], [1, "action"], [3, "click"], ["color", "white", 3, "svgIcon"], [1, "form-container", 3, "formGroup"], [1, "row"], [1, "col-12"], [3, "inputModel", "controlOutput"], [1, "no-line"], [1, "row", "custom-checkbox"], [3, "ngClass", "inputModel", "controlOutput"], ["class", "no-line", 4, "ngIf"], [1, "two-per-row", 3, "inputModel", "controlOutput"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "footer"], [1, "col-6"], [1, "draft-sidenav-container", 3, "hasBackdrop"], [1, "draft-sidenav", 3, "mode", "position"], ["draftcustomer", ""], [1, "draft-container"], ["class", "no-data-wrapper", 4, "ngIf"], ["class", "item dx-card dx-theme-text-color dx-theme-background-color", "handle", ".draggable", 3, "clone", "group", "data", "onDragStart", "onDragEnd", 4, "ngFor", "ngForOf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], ["startDateExpr", "StartDate", "endDateExpr", "EndDate", "dateCellTemplate", "dateCellTemplate", "timeCellTemplate", "timeCellTemplate", "dataCellTemplate", "dataCellTemplate", "appointmentTemplate", "appointment-template", "appointmentTooltipTemplate", "appointment-tooltip-template", 3, "width", "height", "editing", "dataSource", "views", "currentView", "adaptivityEnabled", "firstDayOfWeek", "startDayHour", "endDayHour", "currentDate", "cellDuration", "useDropDownViewSwitcher", "crossScrollingEnabled", "showCurrentTimeIndicator", "maxAppointmentsPerCell", "onAppointmentFormOpening", "onAppointmentUpdating", "onAppointmentUpdated", "onAppointmentClick", "onAppointmentDblClick", "onOptionChanged", "onCellClick"], [3, "ngClass", 4, "dxTemplate", "dxTemplateOf"], [4, "dxTemplate", "dxTemplateOf"], [3, "group", "onAdd"], ["mode", "virtual"], [3, "ngClass"], ["class", "calendar-header header-info", 3, "ngClass", "innerHtml", 4, "ngIf"], ["class", "calendar-header date-info", 4, "ngIf"], [1, "calendar-header", "header-info", 3, "ngClass", "innerHtml"], [1, "calendar-header", "date-info"], [1, "template-wrap"], [1, "template-content-wrap"], [1, "subject"], [1, "tooltip-template-wrap"], [1, "tooltip-content-wrap"], [1, "booking-detail"], [1, "assigned"], [1, "status"], [1, "context-menu"], ["color", "black", 3, "svgIcon"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""], ["handle", ".draggable", 1, "item", "dx-card", "dx-theme-text-color", "dx-theme-background-color", 3, "clone", "group", "data", "onDragStart", "onDragEnd"], [1, "draft-wrap"], ["color", "light-gray", 1, "draggable", 3, "svgIcon"], [1, "draft-content-wrap"], [1, "value"], [1, "draft-action-menu"], [3, "ngClass", "routerLink"], [3, "click", 4, "chqPermission"], ["color", "red", 3, "svgIcon"]],
        template: function BookingJournalComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, BookingJournalComponent_chq_button_2_Template, 1, 1, "chq-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "chq-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_3_listener() {
              return ctx.openDraftCustomer();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "chq-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_4_listener() {
              return ctx.openFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "E");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "xaCurrency");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "xaCurrency");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, BookingJournalComponent_ng_container_25_Template, 3, 3, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, BookingJournalComponent_ng_template_26_Template, 2, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, BookingJournalComponent_dx_scheduler_29_Template, 8, 24, "dx-scheduler", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "mat-sidenav-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "mat-sidenav", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_button_click_39_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r64);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](32);

              return _r5.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](40, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "chq-input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_44_listener($event) {
              return ctx.onFormUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "hr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "chq-input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_48_listener($event) {
              return ctx.onFormUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, BookingJournalComponent_hr_49_Template, 1, 0, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "chq-input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_52_listener($event) {
              return ctx.onFormUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, BookingJournalComponent_hr_53_Template, 1, 0, "hr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "chq-input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_56_listener($event) {
              return ctx.onFormUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, BookingJournalComponent_hr_57_Template, 1, 0, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, BookingJournalComponent_div_58_Template, 3, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, BookingJournalComponent_hr_59_Template, 1, 0, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, BookingJournalComponent_div_60_Template, 3, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, BookingJournalComponent_hr_61_Template, 1, 0, "hr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](62, BookingJournalComponent_div_62_Template, 3, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](63, BookingJournalComponent_hr_63_Template, 1, 0, "hr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "chq-input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_66_listener($event) {
              return ctx.onFormUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "chq-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_70_listener() {
              return ctx.applyFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "chq-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_72_listener() {
              return ctx.resetFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "mat-sidenav-container", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "mat-sidenav", 33, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](80, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_button_click_82_listener() {
              return ctx.draftClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](83, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](84, BookingJournalComponent_div_84_Template, 9, 6, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](85, BookingJournalComponent_dx_draggable_85_Template, 20, 24, "dx-draggable", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](89, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](63, _c9, ctx.isiOS));

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("chqPermission", "bookingJournal");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx.draftButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx.filterButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](11, 43, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](65, _c6, ctx.totalEstimate, ctx.i18n.currencySymbol, ctx.i18n.digitsInfo, ctx.i18n.locale, ctx.i18n.position)));

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 49, "total_estimated"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](19, 51, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](71, _c6, ctx.totalLabour, ctx.i18n.currencySymbol, ctx.i18n.digitsInfo, ctx.i18n.locale, ctx.i18n.position)));

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](21, 57, "total_labour"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.totalBooking);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.totalBooking === 1)("ngIfElse", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](77, _c9, ctx.isiOS));

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showCalendar);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hasBackdrop", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mode", "over")("position", "end");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](37, 59, "filters"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "cross");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.filterForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx.filterModal[1]);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](79, _c10, ctx.filterModal[0].options.length < 3 || (ctx.filterModal[0].options[2] == null ? null : ctx.filterModal[0].options[2].label.length) > 12))("inputModel", ctx.filterModal[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterModal[0].options.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx.filterModal[2]);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterModal[3].options.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx.filterModal[3]);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showProviderChild);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showProviderChild);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterForm.get("WorkProviderDto").value && ctx.filterForm.get("WorkProviderDto").value.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterForm.get("WorkProviderDto").value && ctx.filterForm.get("WorkProviderDto").value.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterModal[5].options.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterModal[5].options.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterModal[6].options.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx.filterModal[6]);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx.applyButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx.resetButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hasBackdrop", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mode", "over")("position", "end");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](80, 61, "draft_customers"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "cross");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.draftData || ctx.draftData.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.draftData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__.HasPermissionDirective, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_12__.ChqButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenav, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_13__.ChqInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, devextreme_angular__WEBPACK_IMPORTED_MODULE_24__.DxSchedulerComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_27__.DxTemplateDirective, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_28__.DxoAppointmentDraggingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_28__.DxoScrollingComponent, devextreme_angular_ui_draggable__WEBPACK_IMPORTED_MODULE_29__.DxDraggableComponent, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkWithHref],
        pipes: [src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__.XaCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe],
        styles: ["[_nghost-%COMP%]  .mat-drawer-container {\n  background-color: transparent;\n  z-index: 501 !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-drawer-backdrop {\n  position: fixed;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav {\n  position: fixed;\n  width: 300px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav.filter-sidenav {\n  background-color: #F1F2F6;\n  width: 400px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .mat-drawer-inner-container {\n  overflow-x: hidden;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .filter-container {\n  padding: calc(15px + 0.8vw);\n  padding-bottom: calc(55px + 0.8vw);\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action button {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action button .mat-icon {\n  height: 16px;\n  width: 16px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .checkbox {\n  align-items: center !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .input-label {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper {\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper label {\n  min-width: 74px;\n  max-width: 95%;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper label .span-label {\n  font-size: 12px;\n  height: 14px;\n  line-height: 14px;\n  color: var(--xa-black-medium);\n  text-transform: none;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .dropdown-item .checkbox-wrapper label {\n  width: 100%;\n  height: auto;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container hr {\n  margin: 20px 0;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container hr.no-line {\n  border: none;\n  margin: 10px 0;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container mat-slider {\n  width: 100%;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .two-per-row label {\n  min-width: 133px !important;\n  width: auto !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .footer {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 400px;\n  background-color: #F1F2F6;\n  z-index: 500;\n  height: 68px;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .footer .row {\n  width: 92%;\n}\n.calendar-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n.calendar-header-container[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n}\n.calendar-header-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-left: auto;\n  flex-wrap: wrap;\n  grid-gap: 20px;\n  gap: 20px;\n  margin-bottom: 10px;\n}\n.approved[_ngcontent-%COMP%], .Approved[_ngcontent-%COMP%] {\n  color: var(--xa-approve);\n}\n.PendingApproval[_ngcontent-%COMP%], .pendingapproval[_ngcontent-%COMP%] {\n  color: var(--xa-pending-approval);\n}\n.rejected[_ngcontent-%COMP%], .Rejected[_ngcontent-%COMP%], .reject[_ngcontent-%COMP%], .Reject[_ngcontent-%COMP%] {\n  color: var(--xa-red);\n}\n.closed[_ngcontent-%COMP%], .Closed[_ngcontent-%COMP%], .Complete[_ngcontent-%COMP%], .complete[_ngcontent-%COMP%] {\n  color: var(--xa-blue);\n}\n.draft[_ngcontent-%COMP%], .Draft[_ngcontent-%COMP%] {\n  color: var(--xa-draft);\n}\n.noshow[_ngcontent-%COMP%], .NoShow[_ngcontent-%COMP%] {\n  color: var(--xa-noshow);\n}\n.repairestimation[_ngcontent-%COMP%], .RepairEstimation[_ngcontent-%COMP%] {\n  color: var(--xa-repair-estimate);\n}\n.uploaddocuments[_ngcontent-%COMP%], .UploadDocuments[_ngcontent-%COMP%] {\n  color: var(--xa-upload-document);\n}\n.addphotos[_ngcontent-%COMP%], .AddPhotos[_ngcontent-%COMP%], .uploadPhotos[_ngcontent-%COMP%], .UploadPhotos[_ngcontent-%COMP%] {\n  color: var(--xa-upload-photo);\n}\n.vehicledetails[_ngcontent-%COMP%], .VehicleDetails[_ngcontent-%COMP%] {\n  color: var(--xa-vehicle-detail);\n}\n.total[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  grid-gap: 0.2vw;\n  gap: 0.2vw;\n  font-size: 0.8rem;\n}\n@media (max-width: 1250px) {\n  .total[_ngcontent-%COMP%] {\n    top: 90px;\n  }\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 3px 6px;\n  grid-gap: 0.4vw;\n  gap: 0.4vw;\n  border-radius: 3px;\n  justify-content: center;\n  align-items: center;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .has-background[_ngcontent-%COMP%] {\n  background-color: var(--xa-lighter-gray);\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 14px;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.has-background) {\n  background: black;\n  color: white;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.has-background[_ngcontent-%COMP%] {\n  background-color: var(--xa-lighter-gray);\n}\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n.no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: calc(50vh - 170px);\n}\n.no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 8px;\n  gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctam91cm5hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFSO0FBRVE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFBWjtBQUdRO0VBQ0ksa0JBQUE7QUFEWjtBQUlRO0VBQ0ksMkJBQUE7RUFDQSxrQ0FBQTtBQUZaO0FBS1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSFo7QUFLWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSGhCO0FBT2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFMcEI7QUFPb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUx4QjtBQWFZO0VBQ0ksOEJBQUE7QUFYaEI7QUFnQm9CO0VBQ0ksbUJBQUE7QUFkeEI7QUFpQm9CO0VBQ0ksZUFBQTtBQWZ4QjtBQWlCd0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQWY1QjtBQWlCNEI7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQWZoQztBQXNCNEI7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXBCaEM7QUEyQlk7RUFDSSxjQUFBO0FBekJoQjtBQTJCZ0I7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQXpCcEI7QUE2Qlk7RUFDSSxXQUFBO0FBM0JoQjtBQStCZ0I7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0FBN0JwQjtBQWtDUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFoQ1o7QUFrQ1k7RUFDSSxVQUFBO0FBaENoQjtBQWlEQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE5Q0o7QUFnREk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTlDUjtBQWlESTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7QUEvQ1I7QUFvRUE7O0VBRUksd0JBQUE7QUFqRUo7QUFvRUE7O0VBRUksaUNBQUE7QUFqRUo7QUFvRUE7Ozs7RUFJSSxvQkFBQTtBQWpFSjtBQW9FQTs7OztFQUlJLHFCQUFBO0FBakVKO0FBb0VBOztFQUVJLHNCQUFBO0FBakVKO0FBb0VBOztFQUVJLHVCQUFBO0FBakVKO0FBb0VBOztFQUVJLGdDQUFBO0FBakVKO0FBb0VBOztFQUVJLGdDQUFBO0FBakVKO0FBb0VBOzs7O0VBSUksNkJBQUE7QUFqRUo7QUFvRUE7O0VBRUksK0JBQUE7QUFqRUo7QUFxRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUFBLFVBQUE7RUFDQSxpQkFBQTtBQWxFSjtBQW9FSTtFQVRKO0lBVVEsU0FBQTtFQWpFTjtBQUNGO0FBbUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFBQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBakVSO0FBbUVRO0VBQ0ksd0NBQUE7QUFqRVo7QUFvRVE7RUFDSSxpQkFBQTtBQWxFWjtBQW9FWTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQWxFaEI7QUFxRVk7RUFDSSx3Q0FBQTtBQW5FaEI7QUF5RUE7RUFDSSxrQkFBQTtBQXRFSjtBQXlFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBdEVKO0FBd0VJO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUF0RVIiLCJmaWxlIjoiYm9va2luZy1qb3VybmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgei1pbmRleDogNTAxICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLm1hdC1kcmF3ZXItYmFja2Ryb3Age1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXNpZGVuYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgICAgICYuZmlsdGVyLXNpZGVuYXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY2O1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGMoMTVweCArIDAuOHZ3KTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNTVweCArIDAuOHZ3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1jb250YWluZXIge1xyXG5cclxuICAgICAgICAgICAgLmNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0LWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2JveC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwYW4tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrYm94LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5uby1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1hdC1zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50d28tcGVyLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMzNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjJGNjtcclxuICAgICAgICAgICAgei1pbmRleDogNTAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuLy8gICAgIC5jYWxlbmRhci1oZWFkZXItY29udGFpbmVyIHtcclxuLy8gICAgICAgICAuZmlsdGVyIHtcclxuLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgICAgICByaWdodDogMDtcclxuLy8gICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuLy8gICAgICAgICAgICAgei1pbmRleDogMjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi5jYWxlbmRhci1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWx0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgLy8gY2hxLWJ1dHRvbiB7XHJcbiAgICAgICAgLy8gICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgLy8gICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAvLyAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhdHVzIGNvbG9yIGZvciBkcmFmdCBjdXN0b21lclxyXG4uYXBwcm92ZWQsXHJcbi5BcHByb3ZlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtYXBwcm92ZSk7XHJcbn1cclxuXHJcbi5QZW5kaW5nQXBwcm92YWwsXHJcbi5wZW5kaW5nYXBwcm92YWwge1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXBlbmRpbmctYXBwcm92YWwpO1xyXG59XHJcblxyXG4ucmVqZWN0ZWQsXHJcbi5SZWplY3RlZCxcclxuLnJlamVjdCxcclxuLlJlamVjdCB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtcmVkKTtcclxufVxyXG5cclxuLmNsb3NlZCxcclxuLkNsb3NlZCxcclxuLkNvbXBsZXRlLFxyXG4uY29tcGxldGUge1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWJsdWUpO1xyXG59XHJcblxyXG4uZHJhZnQsXHJcbi5EcmFmdCB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtZHJhZnQpO1xyXG59XHJcblxyXG4ubm9zaG93LFxyXG4uTm9TaG93IHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1ub3Nob3cpO1xyXG59XHJcblxyXG4ucmVwYWlyZXN0aW1hdGlvbixcclxuLlJlcGFpckVzdGltYXRpb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXJlcGFpci1lc3RpbWF0ZSk7XHJcbn1cclxuXHJcbi51cGxvYWRkb2N1bWVudHMsXHJcbi5VcGxvYWREb2N1bWVudHMge1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXVwbG9hZC1kb2N1bWVudCk7XHJcbn1cclxuXHJcbi5hZGRwaG90b3MsXHJcbi5BZGRQaG90b3MsXHJcbi51cGxvYWRQaG90b3MsXHJcbi5VcGxvYWRQaG90b3Mge1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXVwbG9hZC1waG90byk7XHJcbn1cclxuXHJcbi52ZWhpY2xlZGV0YWlscyxcclxuLlZlaGljbGVEZXRhaWxzIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS12ZWhpY2xlLWRldGFpbCk7XHJcbn1cclxuXHJcblxyXG4udG90YWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMC4ydnc7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XHJcbiAgICAgICAgdG9wOiA5MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xyXG4gICAgICAgIGdhcDogMC40dnc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5oYXMtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAmOm5vdCguaGFzLWJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmhhcy1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXJnaW4tcmlnaHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubm8tZGF0YS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoNTB2aCAtIDE3MHB4KTtcclxuXHJcbiAgICAubm8tZGF0YS1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    72994:
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/repair/booking-journal/booking-preview/booking-preview.component.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookingPreviewComponent": function BookingPreviewComponent() {
          return (
            /* binding */
            _BookingPreviewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      39754);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      7048);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      84608);
      /* harmony import */


      var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/config/route-mapper/repair-status-mapper */
      93620);
      /* harmony import */


      var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/calendar/calendar.service */
      56785);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../helper/directive/has-permission.directive */
      22406);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../widgets/chq-toggle/chq-toggle.component */
      65513);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function BookingPreviewComponent_ng_container_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.joinAssignees(ctx_r0.data.Assignees));
        }
      }

      function BookingPreviewComponent_ng_template_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function BookingPreviewComponent_div_92_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var repairType_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", ctx_r10.iconMapper[repairType_r11.RepairServiceTypeName])("matTooltip", repairType_r11.RepairServiceTypeName);
        }
      }

      function BookingPreviewComponent_div_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, BookingPreviewComponent_div_92_ng_container_5_Template, 2, 2, "ng-container", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "repair_type"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.data.RepairServiceTypes);
        }
      }

      function BookingPreviewComponent_div_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "stage"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.data.Stage || "-");
        }
      }

      function BookingPreviewComponent_div_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "parts"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r5.data.RepairPartsGeneralStatus || "Not Ordered");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", ctx_r5.partsIconMapper[ctx_r5.data.RepairPartsGeneralStatus || "Not Ordered"]);
        }
      }

      function BookingPreviewComponent_a_120_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "edit_booking"));
        }
      }

      function BookingPreviewComponent_a_120_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "view_booking"));
        }
      }

      var _c0 = function _c0() {
        return {
          mode: "edit"
        };
      };

      function BookingPreviewComponent_a_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BookingPreviewComponent_a_120_label_2_Template, 3, 3, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BookingPreviewComponent_a_120_label_3_Template, 3, 3, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r6.bookingStatusUrl)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.data.isReadOnlyPermission);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.data.isReadOnlyPermission);
        }
      }

      function BookingPreviewComponent_div_121_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingPreviewComponent_div_121_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r15.deleteBooking(ctx_r15.data.BookingGuid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "cancel_booking"));
        }
      }

      function BookingPreviewComponent_div_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BookingPreviewComponent_div_121_button_2_Template, 5, 4, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chqPermission", "newBooking");
        }
      }

      function BookingPreviewComponent_div_122_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "chq-toggle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ToggleChange", function BookingPreviewComponent_div_122_Template_chq_toggle_ToggleChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r17.onToggleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "arrived"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r8.isArrived)("name", "arrived");
        }
      }

      function BookingPreviewComponent_div_123_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "chq-toggle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ToggleChange", function BookingPreviewComponent_div_123_Template_chq_toggle_ToggleChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r19.onToggleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "no_show"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r9.isNoShow)("name", "noshow");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "background-color": a0
        };
      };

      var _BookingPreviewComponent = /*#__PURE__*/function () {
        function _BookingPreviewComponent(dialog, dialogRef, data, router, calendarService, commonService) {
          var _this24 = this;

          _classCallCheck(this, _BookingPreviewComponent);

          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.data = data;
          this.router = router;
          this.calendarService = calendarService;
          this.commonService = commonService;
          this.iconMapper = {
            Body: 'car',
            Maintenance: 'house',
            Paint: 'paintbrush',
            Tyres: 'tire',
            Electric: 'bolt-car',
            Tires: 'tire',
            Electrical: 'bolt-car',
            Mechanical: 'mechanical',
            Diagnosis: 'diagnosis',
            Others: 'gears'
          };
          this.isArrived = false;
          this.isNoShow = false;
          this.isArrivedVisible = false;
          this.isNoShowVisible = false;
          this.isRepairCreatedFromCase = false;
          this.status = '';
          this.changesMade = false;
          this.partsIconMapper = {
            'Ordered': 'parts-ordered',
            'Arrived Partially': 'parts-arrived-partial',
            'Arrived': 'parts-arrived',
            'Ordered Partially': 'parts-ordered-partial',
            'Not Ordered': 'parts-not-ordered'
          }; // Close dialog ref on route changes

          router.events.pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationStart;
          }), (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(function () {
            return _this24.dialogRef.close();
          }), (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe();
        }
        /**
         * booking url
         */


        _createClass(_BookingPreviewComponent, [{
          key: "bookingStatusUrl",
          get: function get() {
            var _a;

            var _this$data = this.data,
                StatusName = _this$data.StatusName,
                ObjectGuid = _this$data.ObjectGuid;
            var routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_0__.RepairStatusMapper[(_a = StatusName === null || StatusName === void 0 ? void 0 : StatusName.replace(/\s/g, '')) === null || _a === void 0 ? void 0 : _a.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_0__.RepairStatusMapper.others;
            routeToRedirect = routeToRedirect.replace('{{repairGUID}}', ObjectGuid);
            return routeToRedirect;
          }
          /**
           * show delete
           */

        }, {
          key: "showDelete",
          get: function get() {
            var _a, _b;

            if (((_a = this.status) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'draft') {
              return true;
            } else if (this.isRepairCreatedFromCase == true && ((_b = this.status) === null || _b === void 0 ? void 0 : _b.toLowerCase()) == 'repairestimation') {
              return true;
            }

            return false;
          }
          /**
           * detects changes in input attributes
           * @param changes
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.isArrived = this.data.IsArrived;
            this.isNoShow = this.data.IsNoShow;
            this.status = this.data.StatusName;
            this.isRepairCreatedFromCase = this.data.IsRepairCreatedFromCase;
            this.calculateTimeDifference();
            this.dialogRef.beforeClosed().subscribe(function () {
              return _this25.dialogRef.close({
                'success': _this25.changesMade,
                'type': 'refresh'
              });
            });
          }
          /**
          * detects changes in input attributes
          * @param changes
          */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isArrived = this.data.IsArrived;
            this.isNoShow = this.data.IsNoShow;
            this.status = this.data.StatusName;
            this.isRepairCreatedFromCase = this.data.IsRepairCreatedFromCase;
            this.calculateTimeDifference();
          }
        }, {
          key: "calculateTimeDifference",
          value: function calculateTimeDifference() {
            var currentDate = new Date();
            var bookingInDate = this.data.StartDate;
            var canActivateDate = new Date(bookingInDate.getTime() - 30 * 60000);

            if (currentDate > canActivateDate) {
              this.isArrivedVisible = true;
            }

            if (currentDate > bookingInDate) {
              this.isNoShowVisible = true;
              this.isArrivedVisible = false;
            }
          }
        }, {
          key: "deleteBooking",
          value: function deleteBooking(id) {
            var _this26 = this;

            this.commonService.openDeleteDialog().afterClosed().subscribe(function (data) {
              if (data) {
                _this26.commonService.showLoading();

                _this26.calendarService.deleteBooking(id).subscribe({
                  next: function next() {
                    _this26.dialogRef.close({
                      'success': true,
                      'type': 'delete',
                      'id': id
                    });

                    _this26.commonService.hideLoading();
                  }
                });
              }
            });
          }
        }, {
          key: "onToggleChange",
          value: function onToggleChange(e) {
            var _this27 = this;

            if (e.checked && e.name == 'noshow') {
              this.isNoShow = true;
              this.isArrived = false;
            } else if (e.checked && e.name == 'arrived') {
              this.isNoShow = false;
              this.isArrived = true;
            } else {
              this.isNoShow = false;
              this.isArrived = false;
            }

            var patchValue = [{
              op: 'replace',
              path: 'IsArrived',
              value: this.isArrived ? 'True' : 'False'
            }, {
              op: 'replace',
              path: 'IsNoShow',
              value: this.isNoShow ? 'True' : 'False'
            }];
            this.commonService.showLoading();
            this.calendarService.updateBooking(this.data.BookingGuid, patchValue).subscribe({
              next: function next() {
                _this27.commonService.hideLoading();

                _this27.changesMade = true;
              },
              error: function error() {
                e.cancel = true;
              }
            });
          }
        }, {
          key: "joinAssignees",
          value: function joinAssignees(Assignees) {
            return Assignees === null || Assignees === void 0 ? void 0 : Assignees.map(function (x) {
              return x.AssigneeName;
            }).join(', ');
          }
        }]);

        return _BookingPreviewComponent;
      }();

      _BookingPreviewComponent.ɵfac = function BookingPreviewComponent_Factory(t) {
        return new (t || _BookingPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
      };

      _BookingPreviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _BookingPreviewComponent,
        selectors: [["booking-preview"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
        decls: 124,
        vars: 81,
        consts: [[1, "dialog-with-header", "large-width"], [1, "header", 3, "ngStyle"], [1, "title"], [1, "action"], ["color", "white", 3, "svgIcon", "mat-dialog-close"], [1, "mat-typography"], [1, "booking-preview-wrapper"], [1, "booking-preview-content"], [1, "section-header"], [1, "section-title"], ["color", "black-medium", 3, "svgIcon"], [1, "detail-row"], [1, "detail-col"], [1, "info-content", "short-text"], [1, "info-content"], [4, "ngIf", "ngIfElse"], ["emptyAssignee", ""], ["class", "detail-row", 4, "ngIf"], ["class", "detail-col", 4, "ngIf"], [1, "booking-preview-action"], [1, "section-header", "transparent"], ["class", "button button-outline", 3, "routerLink", "queryParams", 4, "chqPermission"], ["inner", "", 1, "info-content"], [4, "ngFor", "ngForOf"], [3, "svgIcon", "matTooltip"], [1, "icon-container"], ["matTooltipPosition", "above", 1, "icon-wrapper", 3, "matTooltip"], [3, "svgIcon"], [1, "button", "button-outline", 3, "routerLink", "queryParams"], ["aria-hidden", " false", "aria-label", "edit icon", 3, "svgIcon"], ["class", "action-btn", 4, "ngIf"], [1, "action-btn"], ["class", "button-outline-danger", 3, "click", 4, "chqPermission"], [1, "button-outline-danger", 3, "click"], [1, "toggle"], [1, "label-toggle"], [1, "toggle-button"], [3, "checked", "name", "ToggleChange"]],
        template: function BookingPreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-dialog-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](68, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](81, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, BookingPreviewComponent_ng_container_82_Template, 3, 1, "ng-container", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, BookingPreviewComponent_ng_template_83_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, BookingPreviewComponent_div_92_Template, 6, 4, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, BookingPreviewComponent_div_93_Template, 7, 4, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](98, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](101, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](106, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](109, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, BookingPreviewComponent_div_111_Template, 7, 5, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](117, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](120, BookingPreviewComponent_a_120_Template, 4, 6, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](121, BookingPreviewComponent_div_121_Template, 3, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](122, BookingPreviewComponent_div_122_Template, 8, 5, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](123, BookingPreviewComponent_div_123_Template, 8, 5, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](79, _c1, ctx.data.Color));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 41, "booking_details"), " - ", ctx.data.TypeName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "cross");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "person-circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 43, "customer_details"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 45, "first_name"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.Customer == null ? null : ctx.data.Customer.FirstName) || "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 47, "last_name"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.Customer == null ? null : ctx.data.Customer.LastName) || "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 49, "work_provider"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.WorkProviderDto == null ? null : ctx.data.WorkProviderDto.CompanyName) || (ctx.data.WorkProviderDto == null ? null : ctx.data.WorkProviderDto.CompanyOrgType) || "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "car");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](42, 51, "vehicle_detail"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 53, "car_make"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.Vehicle == null ? null : ctx.data.Vehicle.Make) || "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 55, "car_model"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.Vehicle == null ? null : ctx.data.Vehicle.Model) || "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 57, "license_plate"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.Vehicle == null ? null : ctx.data.Vehicle.LicensePlate) || "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](68, 59, "import_interval"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx.data.Vehicle == null ? null : ctx.data.Vehicle.VehicleId) ? (ctx.data.Vehicle == null ? null : ctx.data.Vehicle.ModelInterval) || "-" : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "magazine");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](76, 61, "booking_details"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](81, 63, "assigned_to"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.data.Assignees == null ? null : ctx.data.Assignees.length) > 0)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 65, "status"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.data.DisplayStatus || "-", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.TypeName === "Repair");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.TypeName === "Repair");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](98, 67, "booking_in"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](101, 69, ctx.data.StartDate, "EE d MMM y h:mm:ss a"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](106, 72, "booking_out"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](109, 74, ctx.data.EndDate, "EE d MMM y h:mm:ss a"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.TypeName === "Repair");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](117, 77, "actions"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chqPermission", "viewBooking");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.data.isReadOnlyPermission && ctx.showDelete);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.TypeName === "Repair" && ctx.isArrivedVisible && !ctx.data.isReadOnlyPermission);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.TypeName === "Repair" && ctx.data.StatusName === "Draft" && ctx.isNoShowVisible && !ctx.data.isReadOnlyPermission);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_3__.HasPermissionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_4__.ChqToggleComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: [".booking-preview-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 16px 25px;\n  grid-gap: 25px;\n  gap: 25px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 calc(100% - 140px);\n  flex-direction: column;\n  align-items: flex-start;\n  grid-gap: 16px;\n  gap: 16px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 5px;\n  gap: 5px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--xa-black);\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 140px;\n  flex-direction: column;\n  align-items: flex-start;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  width: 100%;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-col[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-col[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  grid-gap: 5px;\n  gap: 5px;\n}\n.toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex: 1 1 auto;\n}\n.toggle[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.button-outline[_ngcontent-%COMP%], .button-outline-danger[_ngcontent-%COMP%] {\n  width: 155px !important;\n  height: 33px !important;\n  justify-content: flex-start !important;\n  -webkit-filter: drop-shadow(0px 1px 3px rgba(96, 108, 128, 0.05));\n          filter: drop-shadow(0px 1px 3px rgba(96, 108, 128, 0.05));\n}\n.button-outline[_ngcontent-%COMP%]:hover, .button-outline-danger[_ngcontent-%COMP%]:hover {\n  -webkit-filter: drop-shadow(10px 1px 3px rgba(96, 108, 128, 0.05));\n          filter: drop-shadow(10px 1px 3px rgba(96, 108, 128, 0.05));\n}\na.button-outline[_ngcontent-%COMP%] {\n  height: 11px !important;\n  width: 128px !important;\n  text-decoration: none;\n}\n.icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.icon-wrapper[_ngcontent-%COMP%] {\n  background: var(--xa-lighter-gray);\n  padding: 6px 4px;\n  height: 25px;\n  width: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFDUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBQ1o7QUFFUTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFBWjtBQUlJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFGUjtBQUtJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFIUjtBQU9BO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSko7QUFNSTtFQUNJLGNBQUE7QUFKUjtBQU1RO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQUEsUUFBQTtBQUxaO0FBVUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBUEo7QUFTSTtFQUNJLGVBQUE7QUFQUjtBQVdBOztFQUVJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlFQUFBO1VBQUEseURBQUE7QUFSSjtBQVVJOztFQUNJLGtFQUFBO1VBQUEsMERBQUE7QUFQUjtBQVdBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBUko7QUFVQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQVBKO0FBU0E7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTkoiLCJmaWxlIjoiYm9va2luZy1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tpbmctcHJldmlldy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI1cHg7XHJcbiAgICBnYXA6IDI1cHg7XHJcblxyXG4gICAgLmJvb2tpbmctcHJldmlldy1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDEgMSBjYWxjKDEwMCUgLSAxNDBweCk7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDE2cHg7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZm8tY29udGVudCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib29raW5nLXByZXZpZXctYWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDEgMSAxNDBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGV0YWlsLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuZGV0YWlsLWNvbCB7XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLy9jb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgICAudG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9uLW91dGxpbmUsXHJcbi5idXR0b24tb3V0bGluZS1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDE1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMzcHggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDNweCByZ2JhKDk2LCAxMDgsIDEyOCwgMC4wNSkpO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMTBweCAxcHggM3B4IHJnYmEoOTYsIDEwOCwgMTI4LCAwLjA1KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmEuYnV0dG9uLW91dGxpbmUge1xyXG4gICAgaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTI4cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG4uaWNvbi13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICBwYWRkaW5nOiA2cHggNHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    94526:
    /*!*********************************************************************!*\
      !*** ./src/app/modules/repair/lounge-list/lounge-list.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoungeListComponent": function LoungeListComponent() {
          return (
            /* binding */
            _LoungeListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      70160);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/outbound/outbound.service */
      23864);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../widgets/chq-button/chq-button.component */
      36978);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../helper/pipe/xa-currency/xa-currency.pipe */
      93077);

      function LoungeListComponent_div_4_img_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function LoungeListComponent_div_4_img_5_Template_img_error_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r6.avatar = "";
          })("load", function LoungeListComponent_div_4_img_5_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r8.orgImageLoading = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.orgLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function LoungeListComponent_div_4_ng_template_6_label_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r9.orgName);
        }
      }

      function LoungeListComponent_div_4_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LoungeListComponent_div_4_ng_template_6_label_0_Template, 2, 1, "label", 25);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.orgName);
        }
      }

      function LoungeListComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LoungeListComponent_div_4_img_5_Template, 1, 1, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LoungeListComponent_div_4_ng_template_6_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "chq-custom-loader", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.orgLogoUrl)("ngIfElse", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showLoading", ctx_r0.orgImageLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 7, "outbound_dashboard"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.currentDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 9, "last_refreshed"), ": ", ctx_r0.LastRefreshed, "");
        }
      }

      function LoungeListComponent_mat_card_6_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r12.getHeaderTableDarkClass(item_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.CustomerName);
        }
      }

      function LoungeListComponent_mat_card_6_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Customer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.CompanyName);
        }
      }

      function LoungeListComponent_mat_card_6_th_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r17 = ctx.$implicit;

          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r14.getHeaderTableClass(item_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", job_r17.JobName);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", job_r17.Color);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](job_r17.JobName);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", job_r17.CompletePercentage, "%");
        }
      }

      var _c0 = function _c0(a0, a1, a2, a3, a4) {
        return [a0, a1, a2, a3, a4];
      };

      function LoungeListComponent_mat_card_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "table", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "tr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LoungeListComponent_mat_card_6_th_7_Template, 3, 2, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Make & Model:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Plate:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Amount:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "xaCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, LoungeListComponent_mat_card_6_th_21_Template, 4, 1, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "lowercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "table", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "tr", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("load", function LoungeListComponent_mat_card_6_Template_img_load_36_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var item_r10 = restoredCtx.$implicit;
            return item_r10.ImageUrlFirstLoad = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "chq-custom-loader", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, LoungeListComponent_mat_card_6_th_38_Template, 9, 6, "th", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableDarkClass(item_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableDarkClass(item_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r10.CustomerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.VehicleMake + " " + item_r10.VehicleName);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.VehicleLicensePlate);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBindV"](20, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](24, _c0, item_r10.TotalAmount, ctx_r1.i18n.currencySymbol, ctx_r1.i18n.digitsInfo, ctx_r1.i18n.locale, ctx_r1.i18n.position)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r10.CompanyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableDarkClass(item_r10, "text"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 22, item_r10.IsDeliveryTypeEnable && item_r10.DeliveryDTO ? "picked_up" : item_r10.OutboundStatus.split(" ").join(""))));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableClass(item_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableClass(item_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r10.ImageUrlFirst === null ? "assets/img/front-left.png" : item_r10.ImageUrlFirst, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showLoading", item_r10.ImageUrlFirstLoad);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r10.Jobs);
        }
      }

      function LoungeListComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "no_result_found"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
        }
      }

      var _LoungeListComponent = /*#__PURE__*/function () {
        /**
           * Creates an instance.
           * @constructor
           * @param {DatePipe} datePipe
           * @param {CommonService} CommonService
           * @param {OutboundService} OutboundService
           */
        function _LoungeListComponent(datePipe, commonService, OutboundService, document) {
          var _this28 = this;

          _classCallCheck(this, _LoungeListComponent);

          this.datePipe = datePipe;
          this.commonService = commonService;
          this.OutboundService = OutboundService;
          this.document = document;
          this.FullscreenButton = {
            label: 'view_full_screen',
            type: 'outline',
            icon: 'fullscreen'
          };
          this.jobIconDictionary = {
            'Body': 'car',
            'Paint': 'paint-nozzle',
            'Mechanical': 'mechanical',
            'Electrical': 'electric',
            'Tires': 'tire',
            'Preparation': 'car-roof',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Check In': 'checkbox-open',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Repair': 'door-panel',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Fitup': 'door-panel',
            'Polish': 'car-paint',
            'Detailing': 'car-cleaning',
            'Maintenance': 'maintenance',
            'Diagnosis': 'diagnosis',
            'Others': 'gears'
          };
          this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('MMMM DD, YYYY hh:mm a');
          this.LastRefreshed = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
          this.loungeTimeout = null;
          this.currentDateTimeout = null;
          this.subs = [];
          this.CallingAPI = false;
          this.outboundData = [];
          this.FocusedRepairIndex = 0;
          this.orgImageLoading = true;
          this.orgLogoUrl = '';
          this.orgName = '';
          this.timeInterval = null;
          this.i18n = this.commonService.geti18nInfo();
          this.commonService.userProfileData.subscribe({
            next: function next(res) {
              var _a, _b;

              if (res) {
                _this28.orgLogoUrl = (_a = res === null || res === void 0 ? void 0 : res.data.organizationDetail) === null || _a === void 0 ? void 0 : _a.logoUrl;
                _this28.orgName = (_b = res === null || res === void 0 ? void 0 : res.data.organizationDetail) === null || _b === void 0 ? void 0 : _b.name;

                if (!_this28.orgLogoUrl) {
                  _this28.orgImageLoading = false;
                }
              }
            }
          });
        }
        /**
         * ngOnInit
         */


        _createClass(_LoungeListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            this.chkScreenMode();
            this.elem = document.documentElement;
            this.getOutboundData(true);
            this.timeInterval = setInterval(function () {
              _this29.updateDate();
            }, 1000);
          }
          /**
             * getCardTableClass
             */

        }, {
          key: "getCardTableClass",
          value: function getCardTableClass(repairs) {
            if (repairs.OutboundStatus === null || repairs.OutboundStatus === 'Repair Not Started' || repairs.OutboundStatus === 'Repair In Progress') {
              return 'card-table-gray';
            } else if ((!repairs.IsDeliveryTypeEnable || repairs.IsDeliveryTypeEnable && repairs.DeliveryDTO === null) && repairs.OutboundStatus === 'Ready To PickUp') {
              return 'card-table-yellow';
            } else if (repairs.OutboundStatus === 'Picked Up' || repairs.DeliveryDTO !== null) {
              return 'card-table-green';
            } else {
              return 'card-table-gray';
            }
          }
          /**
               * getHeaderTableDarkClass
               */

        }, {
          key: "getHeaderTableDarkClass",
          value: function getHeaderTableDarkClass(repairs) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'background';

            if (type === 'background') {
              if (repairs.OutboundStatus === null || repairs.OutboundStatus === 'Repair Not Started' || repairs.OutboundStatus === 'Repair In Progress') {
                return 'header-table-gray-dark';
              } else if ((!repairs.IsDeliveryTypeEnable || repairs.IsDeliveryTypeEnable && repairs.DeliveryDTO === null) && repairs.OutboundStatus === 'Ready To PickUp') {
                return 'header-table-yellow-dark';
              } else if (repairs.OutboundStatus === 'Picked Up' || repairs.DeliveryDTO !== null) {
                return 'header-table-green-dark';
              } else {
                return 'card-table-gray-dark';
              }
            } else if (type === 'text') {
              if (repairs.OutboundStatus === null || repairs.OutboundStatus === 'Repair Not Started' || repairs.OutboundStatus === 'Repair In Progress') {
                return 'header-table-gray-dark-text';
              } else if ((!repairs.IsDeliveryTypeEnable || repairs.IsDeliveryTypeEnable && repairs.DeliveryDTO === null) && repairs.OutboundStatus === 'Ready To PickUp') {
                return 'header-table-yellow-dark-text';
              } else if (repairs.OutboundStatus === 'Picked Up' || repairs.DeliveryDTO !== null) {
                return 'header-table-green-dark-text';
              } else {
                return 'header-table-gray-dark-text';
              }
            } else return '';
          }
          /**
               * getHeaderTableClass
               */

        }, {
          key: "getHeaderTableClass",
          value: function getHeaderTableClass(repairs) {
            if (repairs.OutboundStatus === null || repairs.OutboundStatus === 'Repair Not Started' || repairs.OutboundStatus === 'Repair In Progress') {
              return 'header-table-gray';
            } else if ((!repairs.IsDeliveryTypeEnable || repairs.IsDeliveryTypeEnable && repairs.DeliveryDTO === null) && repairs.OutboundStatus === 'Ready To PickUp') {
              return 'header-table-yellow';
            } else if (repairs.OutboundStatus === 'Picked Up' || repairs.DeliveryDTO !== null) {
              return 'header-table-green';
            } else {
              return 'card-table-gray';
            }
          }
          /**
           * update Date
           */

        }, {
          key: "updateDate",
          value: function updateDate() {
            this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('MMMM DD, YYYY hh:mm a');
          }
          /**
           * getOutboundData
           */

        }, {
          key: "getOutboundData",
          value: function getOutboundData(flag) {
            var _this30 = this;

            this.CallingAPI = true;
            if (flag) this.commonService.showLoading();
            var StartDate = new Date(new Date().toDateString()).toISOString();
            var EndDate = new Date(new Date(new Date().toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
            var query = "$filter=RepairEndDate ge ".concat(StartDate, " and RepairEndDate lt ").concat(EndDate, " or PickUpDate ge ").concat(StartDate, " and PickUpDate lt ").concat(EndDate);
            this.subs.push(this.OutboundService.getDeparturesDetails(query).subscribe({
              next: function next(data) {
                _this30.CallingAPI = false;
                _this30.outboundData = [];
                data.value.forEach(function (item) {
                  var _a;

                  if (((_a = item === null || item === void 0 ? void 0 : item.Jobs) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    if (item.PickUpDate !== null) {
                      if (!(new Date(StartDate) < new Date(item.PickUpDate) && new Date(EndDate) > new Date(item.PickUpDate))) {
                        return;
                      }
                    }

                    item['ImageUrlFirstLoad'] = true;
                    item['ImageUrlLastLoad'] = true;

                    _this30.outboundData.push(item);
                  }
                });
                _this30.LastRefreshed = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');

                _this30.commonService.hideLoading();

                clearTimeout(_this30.currentDateTimeout);
                _this30.currentDateTimeout = setTimeout(function () {
                  _this30.updateCurrentDateTime();
                }, 60 * 1000);
                setTimeout(function () {
                  var nodes = document.querySelectorAll('.card');

                  if (_this30.FocusedRepairIndex == 0) {
                    document.querySelector('.lounge-content').scrollTop = 0;
                  } else {
                    nodes[_this30.FocusedRepairIndex].scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }, 500);
                clearTimeout(_this30.loungeTimeout);
                _this30.loungeTimeout = setTimeout(function () {
                  _this30.getOutboundData(false);
                }, 300000);
              },
              error: function error(_error) {
                _this30.CallingAPI = false;
                clearTimeout(_this30.loungeTimeout);
              }
            }));
          }
          /**
           * updateCurrentDateTime
           */

        }, {
          key: "updateCurrentDateTime",
          value: function updateCurrentDateTime() {
            var _this31 = this;

            this.autoScrollLastVisibleNode();
            clearTimeout(this.currentDateTimeout);
            this.currentDateTimeout = setTimeout(function () {
              _this31.updateCurrentDateTime();
            }, 60 * 1000);
          }
          /**
           * autoScrollLastVisibleNode
           */

        }, {
          key: "autoScrollLastVisibleNode",
          value: function autoScrollLastVisibleNode() {
            var container = document.querySelector('.lounge-content');
            var nodes = document.querySelectorAll('.card');

            if (container === null || container === undefined || nodes === null || nodes === undefined) {
              return;
            }

            if (this.FocusedRepairIndex == nodes.length - 1) {
              this.FocusedRepairIndex = 0;
              container.scrollTop = 0;
              return;
            }

            var visibleHeight = 0;
            var totalHeight = container.clientHeight;

            for (var i = this.FocusedRepairIndex; i < nodes.length; i++) {
              visibleHeight += nodes[i].clientHeight;

              if (visibleHeight >= totalHeight) {
                this.FocusedRepairIndex = i;
                nodes[i].scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
                break;
              }

              if (i === nodes.length - 1) {
                this.FocusedRepairIndex = 0;
                container.scrollTop = 0;
              }
            }
          }
          /**
           *
           * @param event
           */

        }, {
          key: "fullscreenmodes",
          value: function fullscreenmodes(event) {
            this.chkScreenMode();
          }
          /**
           * check screen mode
           */

        }, {
          key: "chkScreenMode",
          value: function chkScreenMode() {
            if (document.fullscreenElement || document['webkitIsFullScreen']) {
              //fullscreen
              this.isFullScreen = true;
            } else {
              //not in full screen
              this.isFullScreen = false;
            }
          }
          /**
           * open in full screen
           */

        }, {
          key: "openFullscreen",
          value: function openFullscreen() {
            if (this.elem.requestFullscreen) {
              this.elem.requestFullscreen();
            } else if (this.elem.mozRequestFullScreen) {
              /* Firefox */
              this.elem.mozRequestFullScreen();
            } else if (this.elem.webkitRequestFullscreen) {
              /* Chrome, Safari and Opera */
              this.elem.webkitRequestFullscreen();
            } else if (this.elem.msRequestFullscreen) {
              /* IE/Edge */
              this.elem.msRequestFullscreen();
            }
          }
          /**
           * OnDestroy
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.forEach(function (sub) {
              return sub.unsubscribe();
            });
            clearTimeout(this.loungeTimeout);
            clearInterval(this.timeInterval);
          }
        }]);

        return _LoungeListComponent;
      }();

      _LoungeListComponent.ɵfac = function LoungeListComponent_Factory(t) {
        return new (t || _LoungeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
      };

      _LoungeListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _LoungeListComponent,
        selectors: [["app-lounge-list"]],
        hostBindings: function LoungeListComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fullscreenchange", function LoungeListComponent_fullscreenchange_HostBindingHandler($event) {
              return ctx.fullscreenmodes($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("webkitfullscreenchange", function LoungeListComponent_webkitfullscreenchange_HostBindingHandler($event) {
              return ctx.fullscreenmodes($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("mozfullscreenchange", function LoungeListComponent_mozfullscreenchange_HostBindingHandler($event) {
              return ctx.fullscreenmodes($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("MSFullscreenChange", function LoungeListComponent_MSFullscreenChange_HostBindingHandler($event) {
              return ctx.fullscreenmodes($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("onwebkitfullscreenchange", function LoungeListComponent_onwebkitfullscreenchange_HostBindingHandler($event) {
              return ctx.fullscreenmodes($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService])],
        decls: 12,
        vars: 4,
        consts: [[1, "page-container", "lounge-list-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "lounge-list-header"], [1, "header-content", "fx-row", "justify-space-between", "align-center"], [2, "margin-left", "auto", 3, "buttonModel", "click"], ["class", "fullscreen", 4, "ngIf"], [1, "lounge-content"], ["class", "card block", 4, "ngFor", "ngForOf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], [1, "fullscreen"], [1, "lounge-header", "fx-0", "fx-col", "justify-center"], [1, "lounge-header-content", "align-center", "fx-row"], [1, "xa-logo-wrapper"], [1, "menu-image"], [3, "src", "error", "load", 4, "ngIf", "ngIfElse"], ["name", ""], [3, "showLoading"], [1, "lounge-title-wrapper"], [1, "date-container"], [1, "lounge-date-wrapper"], [1, "lounge-last-refresh"], [3, "src", "error", "load"], ["class", "org-name", 4, "ngIf"], [1, "org-name"], [1, "card", "block"], [1, "card-container"], [1, "card-header"], [1, "card-header-container", "align-center", "fx-row"], [1, "card-head-table", 3, "ngClass"], [1, "head-row", 3, "ngClass"], [1, "head-row-col-1"], ["class", "header-customerName", 3, "ngClass", 4, "ngIf"], [1, "sub-text"], [1, "header-amount", "tv-hide"], [4, "ngIf"], [1, "head-item", 2, "margin-left", "auto"], [1, "repair-state"], [1, "repair-state-btn"], [3, "ngClass"], [1, "card-content", 3, "ngClass"], [1, "job-list-container", "fx-row", "align-center"], [1, "jobs-list"], [1, "card-table"], [1, "card-row"], [1, "card-job", 3, "ngClass"], [1, "outbound-header-card", 2, "justify-content", "center"], ["alt", "", 1, "rapair-car-img", 3, "src", "load"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "header-customerName", 3, "ngClass"], [1, "header-content-data"], [1, "outbound-header-card", 3, "matTooltip"], [1, "outbound-content"], ["svgIcon", "checked", 2, "width", "15px", "height", "15px"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
        template: function LoungeListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "chq-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoungeListComponent_Template_chq_button_click_3_listener() {
              return ctx.openFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LoungeListComponent_div_4_Template, 18, 11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LoungeListComponent_mat_card_6_Template, 39, 30, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LoungeListComponent_div_7_Template, 9, 6, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.FullscreenButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isFullScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.outboundData);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.outboundData.length === 0 && !ctx.CallingAPI);
          }
        },
        directives: [_widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__.ChqButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_4__.XaCurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.LowerCasePipe],
        styles: [".lounge-list-container[_ngcontent-%COMP%] {\n  background: #F1F2F6;\n  height: calc(100vh - 110px);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  margin: 2vh 1vw;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--xa-gray);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  overflow-y: auto;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 2vh 1vw;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: none;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n  border-radius: 10px 10px 0px 0px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px 10px 0px 0px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  text-align: left;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 0.625rem;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-row-col-1[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n  align-items: center;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-row-col-1[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px;\n  font-weight: 400;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .header-content-data[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  font-size: 16px;\n  font-weight: 700;\n  display: inline-block;\n  word-break: break-all;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  margin: 0px 2px;\n  max-width: 45px;\n  max-height: 35px;\n  background: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .repair-state[_ngcontent-%COMP%]   .repair-state-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 12px;\n  font-family: \"Inter\";\n  font-style: normal;\n  pointer-events: none;\n  border-radius: 22px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .repair-state[_ngcontent-%COMP%]   .lap-btn[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n  border: 2px solid var(--xa-white);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 10px 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .card-job-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  padding: 10px 9px;\n  height: 100px;\n  width: 128px;\n  border-radius: 10px;\n  border: 2px solid var(--xa-white);\n  font-size: 12px;\n  font-weight: 400;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .card-job-content[_ngcontent-%COMP%]   .job-name[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  word-break: break-all;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  width: 124px;\n  border-radius: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 124px;\n  height: 100px;\n  border-radius: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-move-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%] {\n  border: 1px solid #03A31B;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #1B9235;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%] {\n  border: 1px solid #D2A120;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #D2A600;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%] {\n  border: 1px solid #1a2233;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 8px;\n  gap: 8px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  grid-gap: 0.4375rem;\n  gap: 0.4375rem;\n  flex-direction: column;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-date-wrapper[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-last-refresh[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%] {\n  background-color: #1B03A3;\n  color: var(--xa-white);\n  min-height: 81px;\n  position: sticky;\n  top: 0px;\n  z-index: 9;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: transparent;\n  padding: 0px 15px 0px 40px;\n  height: 100%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .lounge-title-wrapper[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  position: relative;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  max-height: 60px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 8px;\n  line-height: 14px;\n  color: var(--xa-black-dark);\n  padding: 8px 4px;\n  text-align: center;\n  border: 1px solid var(--xa-light-gray);\n  border-radius: 8px;\n  display: flex;\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: var(--xa-white);\n}\n.border-right-line[_ngcontent-%COMP%] {\n  display: block;\n  width: 1px;\n  height: 30px;\n  background: #0B0E15;\n}\n.header-customerName[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border-radius: 0.625rem;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  cursor: pointer;\n  padding: 16px;\n}\n.header-table-gray[_ngcontent-%COMP%] {\n  background-color: #E1E0E5;\n}\n.header-table-gray-dark[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n.header-table-gray-dark-text[_ngcontent-%COMP%] {\n  color: #78777D;\n}\n.header-table-green[_ngcontent-%COMP%] {\n  background-color: #85E194;\n}\n.header-table-green-dark[_ngcontent-%COMP%] {\n  background-color: #03A31B;\n}\n.header-table-green-dark[_ngcontent-%COMP%]:is(button) {\n  border: 2px solid #FFF;\n}\n.header-table-green-dark-text[_ngcontent-%COMP%] {\n  color: #03A31B;\n}\n.header-table-yellow[_ngcontent-%COMP%] {\n  background-color: #E0C173;\n}\n.header-table-yellow-dark[_ngcontent-%COMP%] {\n  background-color: #D2A120;\n}\n.header-table-yellow-dark[_ngcontent-%COMP%]:is(button) {\n  border: 2px solid #FFF;\n}\n.header-table-yellow-dark-text[_ngcontent-%COMP%] {\n  color: #D2A120;\n}\n.outbound-header-card[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 74px;\n  border-radius: 0.625rem;\n  background-color: #F1F2F6;\n  font-size: 12px;\n  font-weight: normal;\n  margin: 16px auto;\n  color: #0B0E15;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 16px 8px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  grid-gap: 4px;\n  gap: 4px;\n  align-items: center;\n  border-radius: 8px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #F9FAFB;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  font-weight: 800;\n  font-size: 16px;\n  text-align: left;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .color-block[_ngcontent-%COMP%] {\n  display: block;\n  height: 10px;\n  border-top-right-radius: 0.625rem;\n  border-top-left-radius: 0.625rem;\n}\n.outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 8px;\n  gap: 8px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin: 0;\n}\n.outbound-header-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.sub-text[_ngcontent-%COMP%] {\n  color: #E5E7EB;\n  font-size: 12px;\n  font-weight: 500;\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdW5nZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtBQUNKO0FBR1E7RUFDSSxlQUFBO0FBRFo7QUFHWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFEaEI7QUFPSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9RO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxaO0FBVWdCO0VBRUksbUJBQUE7RUFDQSxnQ0FBQTtBQVRwQjtBQVdvQjtFQUNJLDhCQUFBO0FBVHhCO0FBV3dCO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0FBVDVCO0FBVTRCO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7QUFSaEM7QUFTZ0M7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFBQSxXQUFBO0VBQ0EsbUJBQUE7QUFQbEM7QUFRa0M7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTnBDO0FBU2dDO0VBQ0ksZ0JBQUE7QUFQcEM7QUFTb0M7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFQeEM7QUFVb0M7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFSeEM7QUFZb0M7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFWeEM7QUFZd0M7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVY1QztBQWdCd0M7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsbUJBQUE7QUFmNUM7QUFrQndDO0VBQ0ksK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBaEI1QztBQXlCZ0I7RUFDSSxnQ0FBQTtBQXZCcEI7QUF5Qm9CO0VBQ0ksV0FBQTtBQXZCeEI7QUEwQndCO0VBQ0ksaUJBQUE7QUF4QjVCO0FBNEJnQztFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUExQnBDO0FBNEJvQztFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQTFCeEM7QUE0QndDO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTFCNUM7QUE0QjRDO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBQTFCaEQ7QUE4QndDO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBNUI1QztBQThCNEM7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBNUJoRDtBQXFDd0I7RUFDSSw2QkFBQTtBQW5DNUI7QUEwQ1E7RUFDSSxhQUFBO0FBeENaO0FBMENRO0VBQ0kseUJBQUE7QUF4Q1o7QUF5Q1k7RUFDSSw2QkFBQTtBQXZDaEI7QUEwQ1k7RUFDSSx5QkFBQTtBQXhDaEI7QUE0Q1E7RUFDSSx5QkFBQTtBQTFDWjtBQTJDWTtFQUNJLDZCQUFBO0FBekNoQjtBQTRDWTtFQUNJLHlCQUFBO0FBMUNoQjtBQThDUTtFQUNJLHlCQUFBO0FBNUNaO0FBNkNZO0VBQ0ksNkJBQUE7QUEzQ2hCO0FBOENZO0VBQ0kseUJBQUE7QUE1Q2hCO0FBZ0RRO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQTlDWjtBQWdEWTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBOUNoQjtBQW9EUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFBQSxjQUFBO0VBQ0Esc0JBQUE7QUFsRFo7QUFvRFk7RUFDRSxnQkFBQTtBQWxEZDtBQXFEWTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQW5EZDtBQXVEUTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFyRFo7QUF1RFk7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBckRoQjtBQXVEZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFyRHBCO0FBd0RnQjtFQUNJLHFCQUFBO0FBdERwQjtBQXdEb0I7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBdER4QjtBQXdEd0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUF0RDVCO0FBeUR3QjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBdkQ1QjtBQWtFQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBL0RGO0FBaUVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQTlERjtBQWdFQTtFQUNFLHlCQUFBO0FBN0RGO0FBK0RBO0VBQ0UseUJBQUE7QUE1REY7QUE4REE7RUFDRSxjQUFBO0FBM0RGO0FBNkRBO0VBQ0UseUJBQUE7QUExREY7QUE0REE7RUFDRSx5QkFBQTtBQXpERjtBQTBERTtFQUNFLHNCQUFBO0FBeERKO0FBMkRBO0VBQ0UsY0FBQTtBQXhERjtBQTBEQTtFQUNFLHlCQUFBO0FBdkRGO0FBeURBO0VBQ0UseUJBQUE7QUF0REY7QUF1REU7RUFDRSxzQkFBQTtBQXJESjtBQXdEQTtFQUNFLGNBQUE7QUFyREY7QUF1REE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFyREY7QUF1REU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBckRKO0FBc0RJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFwRE47QUFxRE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFuRFI7QUFzREk7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBcEROO0FBdURFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0FBckRKO0FBdURFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUFyREo7QUFzREk7RUFDRSxrQkFBQTtBQXBETjtBQXNESTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQXBETjtBQXVERTtFQUNFLFlBQUE7QUFyREo7QUF3REE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFyREYiLCJmaWxlIjoibG91bmdlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG91bmdlLWxpc3QtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYyRjY7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcblxyXG4gICAgLmxvdW5nZS1saXN0LWhlYWRlciB7XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnZoIDF2dztcclxuXHJcbiAgICAgICAgICAgIC5sYXN0LXVwZGF0ZWQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAubG91bmdlLWNvbnRlbnQge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJ2aCAxdnc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG5cclxuICAgICAgICAgICAgLmNhcmQtY29udGFpbmVye1xyXG5cclxuICAgICAgICAgICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC1oZWFkLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGVhZC1yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkLXJvdy1jb2wtMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGVhZC1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlci10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXItY29udGVudC1kYXRhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtaWNvbi1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwYWlyLXN0YXRle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBhaXItc3RhdGUtYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaW4td2lkdGg6IDE2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhcC1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvYi1saXN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9icy1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLXRhYmxlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC1qb2Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC1qb2ItY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2ItbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvYnMtbW92ZS1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1ncmVlbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwM0EzMUI7XHJcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjkyMzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLXllbGxvdyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkExMjA7XHJcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkE2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLWdyYXkge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWEyMjMzO1xyXG4gICAgICAgICAgICAuY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3NzdEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm8tZGF0YS13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuXHJcbiAgICAgICAgICAgIC5uby1kYXRhLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mdWxsc2NyZWVuIHtcclxuICAgICAgICAuZGF0ZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMC40Mzc1cmVtO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgLmxvdW5nZS1kYXRlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sb3VuZ2UtbGFzdC1yZWZyZXNoIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAubG91bmdlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjAzQTM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgxcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG5cclxuICAgICAgICAgICAgLmxvdW5nZS1oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4IDBweCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5sb3VuZ2UtdGl0bGUtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC54YS1sb2dvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbnUtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcmctbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uYm9yZGVyLXJpZ2h0LWxpbmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwQjBFMTU7XHJcbn1cclxuLmhlYWRlci1jdXN0b21lck5hbWUge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcbi5oZWFkZXItdGFibGUtZ3JheSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTBFNTtcclxufVxyXG4uaGVhZGVyLXRhYmxlLWdyYXktZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4Nzc3RDtcclxufVxyXG4uaGVhZGVyLXRhYmxlLWdyYXktZGFyay10ZXh0IHtcclxuICBjb2xvcjogIzc4Nzc3RDtcclxufVxyXG4uaGVhZGVyLXRhYmxlLWdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVFMTk0O1xyXG59XHJcbi5oZWFkZXItdGFibGUtZ3JlZW4tZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzQTMxQjtcclxuICAmOmlzKGJ1dHRvbikge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcclxuICB9XHJcbn1cclxuLmhlYWRlci10YWJsZS1ncmVlbi1kYXJrLXRleHQge1xyXG4gIGNvbG9yOiAjMDNBMzFCO1xyXG59XHJcbi5oZWFkZXItdGFibGUteWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBDMTczO1xyXG59XHJcbi5oZWFkZXItdGFibGUteWVsbG93LWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkExMjA7XHJcbiAgJjppcyhidXR0b24pIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XHJcbiAgfVxyXG59XHJcbi5oZWFkZXItdGFibGUteWVsbG93LWRhcmstdGV4dCB7XHJcbiAgY29sb3I6ICNEMkExMjA7XHJcbn1cclxuLm91dGJvdW5kLWhlYWRlci1jYXJkIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA3NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgLy9tYXJnaW4tdG9wOiAwcHg7XHJcbiAgY29sb3I6IzBCMEUxNSA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIC5vdXRib3VuZC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDhweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogNHB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjRjlGQUZCO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHJnYmEoMjYsIDM0LCA1MSwgMC43MCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbG9yLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC42MjVyZW07XHJcbiAgfVxyXG4gIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5zdWItdGV4dCB7XHJcbiAgY29sb3I6ICNFNUU3RUI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    79666:
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/repair/outbound/check-in-task/check-in-task.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckInTaskComponent": function CheckInTaskComponent() {
          return (
            /* binding */
            _CheckInTaskComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      39754);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      7048);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      84608);
      /* harmony import */


      var src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/outbound/outbound.service */
      23864);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function CheckInTaskComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "label_mandatory"));
        }
      }

      function CheckInTaskComponent_tr_29_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CheckInTaskComponent_tr_29_span_6_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CheckInTaskComponent_tr_29_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CheckInTaskComponent_tr_29_span_6_span_2_Template, 2, 0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var repair_r10 = ctx.$implicit;
          var ind_r11 = ctx.index;

          var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", repair_r10.repairServiceTypeName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ind_r11 !== task_r3.repairJobMappings.length - 1);
        }
      }

      function CheckInTaskComponent_tr_29_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, task_r3.completedDate, "dd/MM/yyyy hh:mm:ss"));
        }
      }

      function CheckInTaskComponent_tr_29_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 38);
        }
      }

      function CheckInTaskComponent_tr_29_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 39);
        }
      }

      function CheckInTaskComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CheckInTaskComponent_tr_29_span_4_Template, 2, 0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CheckInTaskComponent_tr_29_span_6_Template, 3, 2, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CheckInTaskComponent_tr_29_div_11_Template, 3, 4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CheckInTaskComponent_tr_29_span_17_Template, 1, 0, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CheckInTaskComponent_tr_29_span_18_Template, 1, 0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r3.isMandatory);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", task_r3.repairJobMappings);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r3.modifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r3.completedDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "comment")("color", "black");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r3.completedBy !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r3.completedBy === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 10, "task_done"), " ");
        }
      }

      function CheckInTaskComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "no_task_found"));
        }
      }

      var _CheckInTaskComponent = /*#__PURE__*/function () {
        /**
        * constructor
        */
        function _CheckInTaskComponent(dialog, dialogRef, data, router, OutboundService, commonService) {
          var _this32 = this;

          _classCallCheck(this, _CheckInTaskComponent);

          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.data = data;
          this.OutboundService = OutboundService;
          this.commonService = commonService;
          this.subs = [];
          this.ListOfRepairs = [];
          this.CallingAPI = false;
          this.allMandatoryTasks = 0; // Close dialog ref on route changes

          router.events.pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart;
          }), (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(function () {
            return _this32.dialogRef.close();
          }), (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe();
        }
        /**
        * ngOnInit
        */


        _createClass(_CheckInTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTaskDetails();
          }
          /**
          * getTaskDetails
          */

        }, {
          key: "getTaskDetails",
          value: function getTaskDetails() {
            var _this33 = this;

            var repairId = this.data.repair.RepairGuid;
            var jobId = this.data.job.JobGuid;
            this.CallingAPI = true;
            this.commonService.showLoading();
            this.subs.push(this.OutboundService.getTaskDetails(repairId, jobId).subscribe({
              next: function next(data) {
                _this33.ListOfRepairs = data;
                _this33.allMandatoryTasks = _this33.ListOfRepairs.filter(function (task) {
                  return task.isMandatory === true;
                }).length;
                _this33.CallingAPI = false;

                _this33.commonService.hideLoading();
              },
              error: function error(_error2) {
                _this33.CallingAPI = false;
              }
            }));
          }
          /**
             * ngOnDestroy
             */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.forEach(function (sub) {
              return sub.unsubscribe();
            });
          }
        }]);

        return _CheckInTaskComponent;
      }();

      _CheckInTaskComponent.ɵfac = function CheckInTaskComponent_Factory(t) {
        return new (t || _CheckInTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
      };

      _CheckInTaskComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CheckInTaskComponent,
        selectors: [["app-check-in-task"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__.OutboundService])],
        decls: 31,
        vars: 20,
        consts: [[1, "dialog-with-header"], [1, "header"], [1, "title"], [1, "action"], [1, "close-dailog-btn"], ["color", "white", 3, "svgIcon", "mat-dialog-close"], [1, "mat-content-dialog"], [1, "repair-card", "border-10"], [1, "repair-table-header"], ["class", "mandatory-div", 4, "ngIf"], [1, "repair-dialog-table"], [1, "task-hearder"], [1, "task-hearder-item", "task_Name_column"], [1, "task-hearder-item", "repair_type_column"], [1, "task-hearder-item", "modified_column"], [1, "task-hearder-item", "note_column"], [1, "task-hearder-item", "status_column"], ["class", "task-data-row", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mandatory-div"], [1, "mandatory-text", "text-danger"], [1, "task-data-row"], [1, "task-data-item", "task_Name_column"], [1, "task-data"], ["class", "text-danger", 4, "ngIf"], [1, "task-data-item", "repair_type_column"], ["class", "task-data", 4, "ngFor", "ngForOf"], [1, "task-data-item", "modified_column"], [1, "modified_name"], ["class", "span-date", 4, "ngIf"], [1, "task-data-item", "note_column"], [3, "svgIcon", "color"], [1, "task-data-item", "status_column"], [1, "col-2", "relate-spinner"], ["class", "checked", 4, "ngIf"], ["class", "circle", 4, "ngIf"], [1, "text-danger"], [1, "span-date"], [1, "checked"], [1, "circle"], [1, "not-found-task"]],
        template: function CheckInTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-dialog-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CheckInTaskComponent_div_10_Template, 4, 3, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CheckInTaskComponent_tr_29_Template, 21, 12, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CheckInTaskComponent_div_30_Template, 4, 3, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.job.JobName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "cross");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allMandatoryTasks > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 10, "item_name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 12, "repair_type"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 14, "modified_by"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 16, "notes"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 18, "done"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ListOfRepairs);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ListOfRepairs.length === 0 && !ctx.CallingAPI);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: [".dialog-with-header[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 1015px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #4c6bd2;\n  color: var(--xa-white);\n}\n.dialog-with-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .close-dailog-btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #0000007a;\n  width: 40px;\n  height: 40px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n  height: 30px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]   .ml-25[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 18px;\n  vertical-align: sub;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n  height: 30px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .task-hearder-item[_ngcontent-%COMP%] {\n  text-align: left;\n  color: var(--xa-dark-gray);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 35px;\n  letter-spacing: -0.25px;\n  height: 36px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .task_Name_column[_ngcontent-%COMP%] {\n  width: 314px;\n  padding-left: 25px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .repair_type_column[_ngcontent-%COMP%] {\n  width: 184px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .modified_column[_ngcontent-%COMP%] {\n  width: 136px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .note_column[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .status_column[_ngcontent-%COMP%] {\n  width: 114px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  height: 61px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 14px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%]   .task-data[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task_Name_column[_ngcontent-%COMP%] {\n  width: 314px;\n  padding-left: 25px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .repair_type_column[_ngcontent-%COMP%] {\n  width: 184px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .modified_column[_ngcontent-%COMP%] {\n  width: 136px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .note_column[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .status_column[_ngcontent-%COMP%] {\n  width: 114px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--xa-white-light);\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: var(--xa-table-light);\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .not-found-task[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n  font-weight: 500;\n  font-size: 20px;\n  color: var(--xa-gray);\n  margin-top: 20px;\n}\n.ml-25[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n.round[_ngcontent-%COMP%] {\n  position: relative;\n}\n.checked[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--xa-repair-header);\n  background-color: var(--xa-repair-header);\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  cursor: pointer;\n  margin-right: 4px;\n}\n.circle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-light-radio-gray);\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  cursor: pointer;\n  margin-right: 4px;\n}\n.checked[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n}\n.checked[_ngcontent-%COMP%]:after {\n  left: 7px;\n  top: 3px;\n  width: 4px;\n  height: 10px;\n  border: solid var(--xa-white);\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n.relate-spinner[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.mandatory-div[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.mandatory-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  padding-left: 20px;\n  line-height: 20px;\n}\n.span-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 14px;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLWluLXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FBQ1I7QUFFWTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFoQjtBQVNZO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBUGhCO0FBU2dCO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUHBCO0FBV1k7RUFDSSx5QkFBQTtBQVRoQjtBQVdnQjtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQVRwQjtBQVdvQjtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQVR4QjtBQVd3QjtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQVQ1QjtBQVl3QjtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQVY1QjtBQWF3QjtFQUNJLFlBQUE7QUFYNUI7QUFjd0I7RUFDSSxZQUFBO0FBWjVCO0FBZXdCO0VBQ0ksV0FBQTtBQWI1QjtBQWdCd0I7RUFDSSxZQUFBO0FBZDVCO0FBb0JZO0VBQ0kseUJBQUE7QUFsQmhCO0FBb0JnQjtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQWxCcEI7QUFvQm9CO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWxCeEI7QUFzQjZCO0VBQ0csWUFBQTtFQUNBLFdBQUE7QUFwQmhDO0FBeUJvQjtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQXZCeEI7QUEwQm9CO0VBQ0ksWUFBQTtBQXhCeEI7QUEyQm9CO0VBQ0ksWUFBQTtBQXpCeEI7QUE0Qm9CO0VBQ0ksV0FBQTtBQTFCeEI7QUE2Qm9CO0VBQ0ksWUFBQTtBQTNCeEI7QUErQmdCO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBN0JwQjtBQWdDZ0I7RUFDSSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUE5QnBCO0FBbUNRO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWpDWjtBQXNDQTtFQUNJLGlCQUFBO0FBbkNKO0FBc0NBO0VBQ0ksa0JBQUE7QUFuQ0o7QUF3Q0U7RUFDRSxvQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFyQ0o7QUF3Q0E7RUFDSSxvQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFyQ0o7QUF3Q0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFyQ0o7QUF3Q0E7RUFDSSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUdBLHdCQUFBO0FBckNKO0FBd0NBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFyQ0o7QUF3Q0E7RUFDSSxnQkFBQTtBQXJDSjtBQXdDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFyQ0o7QUF3Q0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXJDSiIsImZpbGUiOiJjaGVjay1pbi10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy13aXRoLWhlYWRlcntcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAxNXB4O1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzZiZDI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuXHJcbiAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgIC5jbG9zZS1kYWlsb2ctYnRue1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdhO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1jb250ZW50LWRpYWxvZ3tcclxuXHJcbiAgICAgICAgLnJlcGFpci1jYXJkIHtcclxuXHJcbiAgICAgICAgICAgIC50YXNrLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmZjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAubWwtMjUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJlcGFpci10YWJsZS1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWZmO1xyXG5cclxuICAgICAgICAgICAgICAgIC5yZXBhaXItZGlhbG9nLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGFzay1oZWFyZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhc2staGVhcmRlci1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFza19OYW1lX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGFpcl90eXBlX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGlmaWVkX2NvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub3RlX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhdHVzX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJlcGFpci1kaWFsb2ctdGFibGUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAudGFzay1kYXRhLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYxcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50YXNrLWRhdGEtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFzay1kYXRhIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRhc2tfTmFtZV9jb2x1bW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGFpcl90eXBlX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1vZGlmaWVkX2NvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5ub3RlX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGFzay1kYXRhLXJvdzpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXdoaXRlLWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnRhc2stZGF0YS1yb3c6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXRhYmxlLWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm90LWZvdW5kLXRhc2sge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZ3JheSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWwtMjV7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLnJvdW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmNoZWNrZWR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLXJlcGFpci1oZWFkZXIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVwYWlyLWhlYWRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uY2lyY2xle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWxpZ2h0LXJhZGlvLWdyYXkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmNoZWNrZWQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNoZWNrZWQ6YWZ0ZXIge1xyXG4gICAgbGVmdDogN3B4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4ucmVsYXRlLXNwaW5uZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hbmRhdG9yeS1kaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWFuZGF0b3J5LXRleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zcGFuLWRhdGV7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    10250:
    /*!************************************************************************!*\
      !*** ./src/app/modules/repair/outbound/outbound/outbound.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OutboundComponent": function OutboundComponent() {
          return (
            /* binding */
            _OutboundComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      70160);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/outbound/outbound.service */
      23864);
      /* harmony import */


      var _check_in_task_check_in_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../check-in-task/check-in-task.component */
      79666);
      /* harmony import */


      var src_app_dialogs_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/dialogs/notify-dialog/notify-dialog.component */
      15058);
      /* harmony import */


      var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/config/route-mapper/repair-status-mapper */
      93620);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/booking/booking.service */
      8985);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../widgets/chq-customloader/chq-customloader.component */
      48262);
      /* harmony import */


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! devextreme-angular */
      84097);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../widgets/chq-button/chq-button.component */
      36978);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */
      93077);

      function OutboundComponent_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_button_19_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);

            var day_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r4.changeCurrentDate(day_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", day_r3.getDay() === ctx_r0.currentWeek.getDay() ? "active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 3, day_r3, "dd EEEE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](6, 6, day_r3, "MMM"));
        }
      }

      function OutboundComponent_div_21_mat_card_20_th_27_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var assignee_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](assignee_r19.AssigneeName);
        }
      }

      function OutboundComponent_div_21_mat_card_20_th_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, OutboundComponent_div_21_mat_card_20_th_27_div_5_Template, 2, 1, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "assigned"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", repairs_r7.Assignees);
        }
      }

      function OutboundComponent_div_21_mat_card_20_th_36_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "lowercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "mat-icon", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r22 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 5, type_r22.Name === null ? "Others" : type_r22.Name)));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", ctx_r21.jobIconDictionary[type_r22.Name] ? ctx_r21.jobIconDictionary[type_r22.Name] : "gears");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", "black");
        }
      }

      function OutboundComponent_div_21_mat_card_20_th_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, OutboundComponent_div_21_mat_card_20_th_36_div_5_Template, 5, 7, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "repair_types"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", repairs_r7.RepairServiceTypes);
        }
      }

      function OutboundComponent_div_21_mat_card_20_th_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "mat-icon", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, repairs_r7.IsTowedIn ? "towed_in" : "not_towed_in"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "towing");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repairs_r7.IsTowedIn ? "black" : "dark-gray-disabled");
        }
      }

      function OutboundComponent_div_21_mat_card_20_div_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_div_40_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r25.move_scroll("left", _r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function OutboundComponent_div_21_mat_card_20_th_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_th_49_Template_div_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31);

            var job_r27 = restoredCtx.$implicit;

            var repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r29.openJobpopup(repairs_r7, job_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background-color", job_r27.Color);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](job_r27.JobName);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", job_r27.CompletePercentage, "%");
        }
      }

      function OutboundComponent_div_21_mat_card_20_div_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_div_54_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r32.move_scroll("right", _r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function OutboundComponent_div_21_mat_card_20_span_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Pick up date cannot set as past date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function OutboundComponent_div_21_mat_card_20_chq_button_64_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_chq_button_64_Template_chq_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);

            var repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r34.openEmailForNotify(repairs_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx_r17.notifyButton);
        }
      }

      var _c0 = function _c0(a0, a1, a2, a3, a4) {
        return [a0, a1, a2, a3, a4];
      };

      function OutboundComponent_div_21_mat_card_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "tr", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_Template_div_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);

            var repairs_r7 = restoredCtx.$implicit;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r37.bookingStatusUrl(repairs_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, OutboundComponent_div_21_mat_card_20_th_27_Template, 6, 4, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "xaCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, OutboundComponent_div_21_mat_card_20_th_36_Template, 6, 4, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, OutboundComponent_div_21_mat_card_20_th_37_Template, 6, 5, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, OutboundComponent_div_21_mat_card_20_div_40_Template, 3, 0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "table", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "tr", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("load", function OutboundComponent_div_21_mat_card_20_Template_img_load_47_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);

            var repairs_r7 = restoredCtx.$implicit;
            return repairs_r7.ImageUrlFirstLoad = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "chq-customloader", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, OutboundComponent_div_21_mat_card_20_th_49_Template, 7, 4, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("load", function OutboundComponent_div_21_mat_card_20_Template_img_load_52_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);

            var repairs_r7 = restoredCtx.$implicit;
            return repairs_r7.ImageUrlLastLoad = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "chq-customloader", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, OutboundComponent_div_21_mat_card_20_div_54_Template, 3, 0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "label", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](61, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "dx-date-box", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onValueChanged", function OutboundComponent_div_21_mat_card_20_Template_dx_date_box_onValueChanged_62_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);

            var repairs_r7 = restoredCtx.$implicit;
            var j_r8 = restoredCtx.index;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r41.updateInput($event, repairs_r7.RepairGuid, j_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, OutboundComponent_div_21_mat_card_20_span_63_Template, 2, 0, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, OutboundComponent_div_21_mat_card_20_chq_button_64_Template, 1, 1, "chq-button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](68, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var repairs_r7 = ctx.$implicit;

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", repairs_r7.OutboundStatus === null || repairs_r7.OutboundStatus === "Repair Not Started" || repairs_r7.OutboundStatus === "Repair In Progress" ? "card-table-gray" : repairs_r7.OutboundStatus === "Ready To PickUp" ? "card-table-yellow" : repairs_r7.OutboundStatus === "Picked Up" ? "card-table-green" : "card-table-gray");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", repairs_r7.OutboundStatus === null || repairs_r7.OutboundStatus === "Repair Not Started" || repairs_r7.OutboundStatus === "Repair In Progress" ? "header-table-gray" : repairs_r7.OutboundStatus === "Ready To PickUp" ? "header-table-yellow" : repairs_r7.OutboundStatus === "Picked Up" ? "header-table-green" : "card-table-gray");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 38, "booking_id"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](repairs_r7.RepairNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 40, "work_provider"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](repairs_r7.WorkProviderName);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 42, "driver_owner_name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](repairs_r7.CustomerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 44, "vehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", repairs_r7.VehicleMake, " ", repairs_r7.VehicleName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repairs_r7.Assignees.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](31, 46, "cost"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](35, 48, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](60, _c0, repairs_r7.TotalAmount, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repairs_r7.RepairServiceTypes.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repairs_r7.IsTowedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.checkJobWrapperScroll("left", _r13));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", repairs_r7.ImageUrlFirst === null ? "assets/img/front-left.png" : repairs_r7.ImageUrlFirst, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showLoading", repairs_r7.ImageUrlFirstLoad);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", repairs_r7.Jobs);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", repairs_r7.ImageUrlLast === null ? "assets/img/front-left.png" : repairs_r7.ImageUrlLast, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showLoading", repairs_r7.ImageUrlLastLoad);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.checkJobWrapperScroll("right", _r13));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](61, 54, ctx_r6.PickUpDateTextBox.label));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", repairs_r7.PickUpDate)("acceptCustomValue", false)("invalidDateMessage", "")("max", ctx_r6.PickUpDateTextBox.maxDate)("min", ctx_r6.PickUpDateTextBox.minDate)("validationError", false)("validationMessageMode", "none")("disabled", !ctx_r6.isTechnician ? repairs_r7.OutboundStatus !== "Ready To PickUp" : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repairs_r7 == null ? null : repairs_r7.PickupDateError);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r6.isTechnician ? !repairs_r7.IsPickedUp && repairs_r7.PickUpDate !== null && repairs_r7.OutboundStatus === "Ready To PickUp" && repairs_r7.CommunicationTypes.length > 0 : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](68, 56, "initial_booking_out_date"), ": ", ctx_r6.date_format(repairs_r7.BookingEndDate), " | ", repairs_r7.LagInDays, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](69, 58, "days"), "");
        }
      }

      function OutboundComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "directions_car");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "xaCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, OutboundComponent_div_21_mat_card_20_Template, 70, 66, "mat-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](5, 6, ctx_r1.currentWeek, "EEEE, d MMMM y"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 9, "last_refreshed"), ": ", ctx_r1.lastUpdated, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.departures.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](19, 11, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](17, _c0, ctx_r1.TotalAmount, ctx_r1.i18n.currencySymbol, ctx_r1.i18n.digitsInfo, ctx_r1.i18n.locale, ctx_r1.i18n.position)));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.departures);
        }
      }

      function OutboundComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 2, "no_result_found"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
        }
      }

      var _OutboundComponent = /*#__PURE__*/function () {
        /**
           * Creates an instance of DeparturesComponent.
           * @constructor
           * @param {Router} router
           * @param {OutboundService} OutboundService
           *  @param {MatDialog} dialog
           *  @param {DatePipe} datePipe
           * @param {CommonService} CommonService
           */
        function _OutboundComponent(OutboundService, router, dialog, datePipe, bookingService, commonService) {
          _classCallCheck(this, _OutboundComponent);

          this.OutboundService = OutboundService;
          this.router = router;
          this.dialog = dialog;
          this.datePipe = datePipe;
          this.bookingService = bookingService;
          this.commonService = commonService;
          this.jobIconDictionary = {
            'Body': 'car',
            'Paint': 'paint-nozzle',
            'Mechanical': 'mechanical',
            'Electrical': 'electric',
            'Tires': 'tire',
            'Preparation': 'car-roof',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Check In': 'checkbox-open',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Repair': 'door-panel',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Fitup': 'door-panel',
            'Polish': 'car-paint',
            'Detailing': 'car-cleaning',
            'Maintenance': 'maintenance',
            'Diagnosis': 'diagnosis',
            'Others': 'gears'
          };
          this.departures = [];
          this.subs = [];
          this.PickUpDateTextBox = {
            placeHolder: 'pickup_date',
            label: 'pick_up_date_time',
            name: '',
            type: 'datetime',
            maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().add(6, 'month').toDate(),
            minDate: new Date(),
            value: new Date()
          };
          this.notifyButton = {
            label: 'notify',
            type: 'outline',
            icon: 'send'
          };
          this.currentWeek = new Date();
          this.currentWeekNumber = 1;
          this.dates = [];
          this.IntervalGetOutBound = null;
          this.lastUpdated = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
          this.CallingAPI = false;
          this.isTechnician = false;
          this.TotalAmount = 0;
          this.i18n = this.commonService.geti18nInfo();
          this.getWeekDates(new Date(this.currentWeek));
        }
        /**
           * ngOnInit
           */


        _createClass(_OutboundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this34 = this;

            this.getDeparturesDetails();
            this.commonService.userProfileData.subscribe(function (res) {
              var _a, _b;

              if (res === null || res === void 0 ? void 0 : res.data) {
                var automotiveServices = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.userPermission) === null || _b === void 0 ? void 0 : _b.automotiveServices;
                var automotiveService = automotiveServices === null || automotiveServices === void 0 ? void 0 : automotiveServices.find(function (x) {
                  return x.automotiveServiceName.toLowerCase() === 'addenda repair';
                });

                if (automotiveService && automotiveService.roleName.toLowerCase() === 'technician') {
                  _this34.isTechnician = true;
                } else {
                  _this34.isTechnician = false;
                }
              }
            });
          }
          /**
           * getOutBoundData
           */

        }, {
          key: "getDeparturesDetails",
          value: function getDeparturesDetails() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this35 = this;

              var StartDate, EndDate, query;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.CallingAPI = true;
                    this.commonService.showLoading();
                    this.departures = [];
                    StartDate = new Date(this.currentWeek.toDateString()).toISOString();
                    EndDate = new Date(new Date(this.currentWeek.toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
                    query = "$filter=BookingEndDate ge ".concat(StartDate, " and BookingEndDate lt ").concat(EndDate, " or PickUpDate ge ").concat(StartDate, " and PickUpDate lt ").concat(EndDate);
                    this.subs.push(this.OutboundService.getDeparturesDetails(query).subscribe({
                      next: function next(data) {
                        _this35.CallingAPI = false;
                        _this35.TotalAmount = 0;
                        data.value.forEach(function (el) {
                          if (el.PickUpDate !== null) {
                            if (!(new Date(StartDate) < new Date(el.PickUpDate) && new Date(EndDate) > new Date(el.PickUpDate))) {
                              return;
                            }
                          }

                          el['ImageUrlFirstLoad'] = true;
                          el['ImageUrlLastLoad'] = true;
                          _this35.TotalAmount += el.TotalAmount;

                          _this35.departures.push(el);
                        });
                        _this35.lastUpdated = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');

                        _this35.commonService.hideLoading();

                        clearTimeout(_this35.IntervalGetOutBound);
                        _this35.IntervalGetOutBound = setTimeout(function () {
                          _this35.getDeparturesDetails();
                        }, 300000);
                      },
                      error: function error(_error3) {
                        _this35.CallingAPI = false;
                        clearTimeout(_this35.IntervalGetOutBound);
                      }
                    }));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
          /**
             * date_format
             * return date format
             * example 28 Wednesday, of June 2023
             *@param date data
          
             * @returns {string}
             */

        }, {
          key: "date_format",
          value: function date_format(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_0__(date).format('D dddd, of MMMM YYYY');
          }
          /**
          * updateInput
          * update pickup date
          */

        }, {
          key: "updateInput",
          value: function updateInput(e, repairId, repairIndex) {
            var _this36 = this;

            this.departures[repairIndex]['PickupDateError'] = false;

            if (new Date(e.value) < new Date()) {
              this.departures[repairIndex]['PickupDateError'] = true;
              return;
            }

            var pickupDate = new Date(e.value).toISOString();

            if (new Date(pickupDate) == new Date(this.departures[repairIndex].PickUpDate)) {
              return;
            }

            this.commonService.showLoading();
            this.subs.push(this.OutboundService.setPickupDate(repairId, pickupDate, false).subscribe({
              next: function next(data) {
                _this36.commonService.showInfoToast(1000, data.message);

                _this36.commonService.hideLoading();
              }
            }));
          }
          /**
           * openJobpopup
           * @param { string } jobId
           */

        }, {
          key: "openJobpopup",
          value: function openJobpopup(repair, job) {
            this.dialog.open(_check_in_task_check_in_task_component__WEBPACK_IMPORTED_MODULE_2__.CheckInTaskComponent, {
              data: {
                'repair': repair,
                'job': job
              }
            });
          }
          /**
           * GetWeekNumber()
           *
           * @param {Date} date
           */

        }, {
          key: "getWeekNumber",
          value: function getWeekNumber(date) {
            var currentDate = date;
            var startDate = new Date(currentDate.getFullYear(), 0, 1);
            var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
            var weekNumber = Math.ceil(days / 7);
            return weekNumber;
          }
          /**
            * getWeekDates
            * change months as well when month about to end
            */

        }, {
          key: "getWeekDates",
          value: function getWeekDates(date) {
            var daysInWeek = 7;
            var dates = [];
            var week = date.getDay() == 0 ? daysInWeek : date.getDay();
            var start_date = new Date(date.setDate(date.getDate() - week + 1));

            for (var i = 0; i < daysInWeek; i++) {
              var temp_date = new Date(start_date);
              var new_date = new Date(temp_date.setDate(start_date.getDate() + i));

              if (new_date.getMonth() < start_date.getMonth() && new_date.getMonth() == date.getFullYear()) {
                new_date.setMonth(start_date.getMonth());
              }

              dates.push(new_date);
            }

            this.currentWeekNumber = this.getWeekNumber(this.currentWeek);
            this.dates = dates;
            return dates;
          }
          /**
          * changeCurrentWeek
          */

        }, {
          key: "changeCurrentWeek",
          value: function changeCurrentWeek(direction) {
            if (direction === 'left') {
              var temp_date = this.dates[0];
              this.currentWeek = new Date(temp_date.setDate(temp_date.getDate() - 7));
            } else {
              var _temp_date = this.dates[6];
              this.currentWeek = new Date(_temp_date.setDate(_temp_date.getDate() + 1));
            }

            this.getWeekDates(new Date(this.currentWeek));
            this.departures = [];
            this.getDeparturesDetails();
          }
          /**
          * TodayWeek
          */

        }, {
          key: "TodayWeek",
          value: function TodayWeek() {
            this.currentWeek = new Date();
            this.getWeekDates(new Date(this.currentWeek));
            this.departures = [];
            this.getDeparturesDetails();
          }
          /**
          * changeCurrentDate
          *@param day { date }
          */

        }, {
          key: "changeCurrentDate",
          value: function changeCurrentDate(day) {
            this.currentWeek = day;
            this.departures = [];
            this.getDeparturesDetails();
          }
          /**
           * move_scroll
           */

        }, {
          key: "move_scroll",
          value: function move_scroll(direction, el) {
            if (direction === 'left') {
              el.scrollLeft = el.scrollLeft - 160;
            } else {
              el.scrollLeft = el.scrollLeft + 160;
            }
          }
          /**
           * checkJobWrapperScroll
           */

        }, {
          key: "checkJobWrapperScroll",
          value: function checkJobWrapperScroll(direction, el) {
            if (direction === 'left') {
              return !(el.scrollLeft <= 0);
            } else {
              return !(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
            }
          }
          /**
           * openEmailForNotify
           *
           */

        }, {
          key: "openEmailForNotify",
          value: function openEmailForNotify(RepairData) {
            var _this37 = this;

            this.commonService.showLoading();
            this.bookingService.getRepairDetailByGuid(RepairData.RepairGuid).subscribe({
              next: function next(result) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this37, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        if (result === null || result === void 0 ? void 0 : result.data) {
                          this.openEmailForNotifyInner(RepairData.RepairGuid, result.data.domainId, result.data.booking.communicationTypeId, result.data.communicationEvents);
                        }

                        this.commonService.hideLoading();

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, this);
                }));
              },
              error: function error(_error4) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this37, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        this.commonService.hideLoading();

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3, this);
                }));
              }
            });
          }
          /**
           * openEmailForNotify
           *
           */

        }, {
          key: "openEmailForNotifyInner",
          value: function openEmailForNotifyInner(RepairGuid, domainId, communicationList, communicatedList) {
            this.dialog.open(src_app_dialogs_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_3__.NotifyDialogComponent, {
              data: {
                repairGuid: RepairGuid,
                domainId: domainId,
                templateId: 2,
                communicationList: communicationList,
                communicatedList: communicatedList
              },
              backdropClass: 'confirmation-popup-backdrop',
              maxHeight: '693px',
              maxWidth: '629px'
            });
          }
          /**
           * booking url
           */

        }, {
          key: "bookingStatusUrl",
          value: function bookingStatusUrl(repair) {
            var RepairStatus = repair.RepairStatus,
                RepairGuid = repair.RepairGuid;
            var status = RepairStatus.split(' ').join('');
            var routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper[status === null || status === void 0 ? void 0 : status.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper.others;
            routeToRedirect = routeToRedirect.replace('{{repairGUID}}', RepairGuid);
            this.router.navigate([routeToRedirect]);
          }
          /**
             * ngOnDestroy
             */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.forEach(function (sub) {
              return sub.unsubscribe();
            });
            clearTimeout(this.IntervalGetOutBound);
          }
        }]);

        return _OutboundComponent;
      }();

      _OutboundComponent.ɵfac = function OutboundComponent_Factory(t) {
        return new (t || _OutboundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_5__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService));
      };

      _OutboundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _OutboundComponent,
        selectors: [["app-outbound"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService])],
        decls: 27,
        vars: 23,
        consts: [[1, "page-container", "outbound-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "outbound-header"], [1, "fx-row", "date-filter-wrapper", 2, "padding-bottom", "26px"], [1, "fx-row", "change-week-btn"], [1, "fx-row", "align-center", "week-days-tile"], ["type", "button", 1, "btn", "btn-left", 3, "click"], ["color", "black", "svgIcon", "arrow-left"], [1, "week-tile-content"], ["type", "button", 1, "btn", "btn-right", 3, "click"], ["color", "black", "svgIcon", "arrow-right"], ["type", "button", 1, "btn", "current-week-btn", 3, "click"], [1, "fx-row", "week-tiles"], ["type", "button", "class", "day-tile", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "outbound-container-wrapper"], ["class", "outbound-card", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], ["type", "button", 1, "day-tile", 3, "ngClass", "click"], [1, "outbound-card"], [1, "card-header", "fx-row", "justify-space-between"], [1, "fx-col", "left-content"], [1, "last-updated"], [1, "fx-row", "right-content"], [1, "fx-row", "align-center", "repair-count"], ["color", "dark-gray"], [1, "fx-row", "align-center", "total-amount"], ["svgIcon", "double-database", 2, "margin-right", "8px"], ["class", "card border-10", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", "border-10", 3, "ngClass"], [1, "header-table", "border-top-10", 2, "padding-bottom", "8px", 3, "ngClass"], [2, "text-align", "left", "padding", "10px", "display", "flex", "justify-content", "space-between"], [1, "header-type-text"], [1, "header-content", "link", 3, "click"], [1, "header-content"], [4, "ngIf"], [1, "flex", "align-center", "header-content"], [1, "outbound-card-content", "border-bottom-10"], [1, "outbound-jobs-container", "fx-row", "align-center"], ["class", "move-left-wrapper", 4, "ngIf"], [1, "outbound-jobs-wrapper"], ["job_scroll_wrapper", ""], [1, "outbound-table", "border-bottom-10"], [1, "flex", "align-center"], [1, "img-container"], ["alt", "", 1, "rapair-car-img", 3, "src", "load"], [3, "showLoading"], [4, "ngFor", "ngForOf"], ["alt", "", 3, "src", "load"], ["class", "move-right-wrapper", 4, "ngIf"], [1, "date-card", "flex", "align-end"], [1, "date-selector"], [1, "input-wrapper", "flex", "align-end"], [1, "pickup_wrapper"], [1, "input-label", "text-muted", "uppercase"], ["type", "datetime", 3, "value", "acceptCustomValue", "invalidDateMessage", "max", "min", "validationError", "validationMessageMode", "disabled", "onValueChanged"], ["class", "pickupDate-error input-label text-muted", 4, "ngIf"], ["class", "notify-btn", 3, "buttonModel", "click", 4, "ngIf"], [1, "day-counter"], [1, "text-muted"], ["class", "flex", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "flex", "align-center", 2, "flex-wrap", "wrap"], ["class", "header-repair-type", 4, "ngFor", "ngForOf"], [1, "header-repair-type"], ["matTooltipPosition", "above", 1, "outbound-icon-btn", 3, "matTooltip"], [3, "svgIcon"], [1, "is-towing"], [1, "move-left-wrapper"], ["type", "button", 1, "jobs-move-btn", 3, "click"], [1, "outbound-header-card", 3, "click"], [1, "uppercase"], [1, "move-right-wrapper"], [1, "pickupDate-error", "input-label", "text-muted"], [1, "notify-btn", 3, "buttonModel", "click"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
        template: function OutboundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_5_listener() {
              return ctx.changeCurrentWeek("left");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_13_listener() {
              return ctx.changeCurrentWeek("right");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_15_listener() {
              return ctx.TodayWeek();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, OutboundComponent_button_19_Template, 7, 9, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, OutboundComponent_div_21_Template, 21, 23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, OutboundComponent_div_22_Template, 9, 6, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate5"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 9, ctx.dates[0], "dd"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](10, 12, ctx.dates[6], "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 15, ctx.dates[0], "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](12, 18, ctx.dates[0], "YY"), " (", ctx.currentWeekNumber, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 21, "today"));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.dates);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.departures.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.departures.length === 0 && !ctx.CallingAPI);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_7__.CustomloaderComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_17__.DxDateBoxComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_8__.ChqButtonComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_9__.XaCurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.LowerCasePipe],
        styles: [".outbound-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 76px - (calc(58px + 1.6vw)));\n  overflow-y: auto;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0px;\n  padding-top: 5px;\n  z-index: 1;\n  background: var(--xa-popup-light-gray);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: space-around;\n  background: var(--xa-popup-light-gray);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  margin-left: 25%;\n  grid-gap: 25px;\n  gap: 25px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%] {\n  grid-gap: 20px;\n  gap: 20px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .week-tile-content[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .current-week-btn[_ngcontent-%COMP%] {\n  background-color: #f4f5fd;\n  border: 1px solid var(--xa-light-gray) !important;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile[_ngcontent-%COMP%] {\n  background-color: #f4f5fd;\n  border: 1px solid var(--xa-light-gray) !important;\n  display: grid;\n  height: 70px;\n  border-radius: 0px;\n  font-size: 16px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile.active[_ngcontent-%COMP%] {\n  background-color: #4c6bd2;\n  color: var(--xa-white);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile[_ngcontent-%COMP%]:first-child {\n  border-radius: 8px 0 0 8px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 8px 8px 0;\n}\n.container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n.header-type-text[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n.border-10[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.border-top-10[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.border-bottom-10[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 11px;\n  color: var(--xa-gray);\n  line-height: 21.23px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%] {\n  grid-gap: 34px;\n  gap: 34px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .repair-count[_ngcontent-%COMP%] {\n  grid-gap: 6px;\n  gap: 6px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .repair-count[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 332.15px;\n  margin: 15px;\n  background-color: #1A22330D;\n  width: calc(100% - 30px);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%] {\n  min-height: 68px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  max-width: 240px;\n  display: inline-block;\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 700;\n  word-break: break-all;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-repair-type[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-repair-type[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  width: 30px;\n  height: 30px;\n  background-color: #1f202314;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .is-towing[_ngcontent-%COMP%] {\n  margin: 18px 0px 0px 0px;\n  padding-right: 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .is-towing[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  width: 30px;\n  height: 30px;\n  background-color: #1f202314;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-gray[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-green[_ngcontent-%COMP%] {\n  background-color: #1B9235;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-yellow[_ngcontent-%COMP%] {\n  background-color: #D2A600;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  width: 100%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 100%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  position: relative;\n  overflow: hidden;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 126px;\n  width: 144px;\n  border-radius: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 126px;\n  width: 144px;\n  border-radius: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 100px;\n  border-radius: 10px;\n  border: 2px solid var(--xa-white);\n  font-size: 12px;\n  font-weight: normal;\n  padding: 13px 14px;\n  margin: 16px auto;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  cursor: pointer;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .jobs-move-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin: 0px 20px 20px 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .pickup_wrapper[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .pickup_wrapper[_ngcontent-%COMP%]   .pickupDate-error[_ngcontent-%COMP%] {\n  color: var(--xa-red);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .notify-btn[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .day-counter[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-gray[_ngcontent-%COMP%] {\n  border: 1px solid #1a2233;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-gray[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-green[_ngcontent-%COMP%] {\n  border: 1px solid #03A31B;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-green[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-yellow[_ngcontent-%COMP%] {\n  border: 1px solid #D2A120;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-yellow[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 8px;\n  gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91dGJvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaURBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtBQUFSO0FBRVE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtBQUFaO0FBRVk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFBaEI7QUFFZ0I7RUFDSSxjQUFBO0VBQUEsU0FBQTtBQUFwQjtBQUVvQjtFQUNJLDZCQUFBO0FBQXhCO0FBR29CO0VBQ0ksZUFBQTtBQUR4QjtBQUlvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRnhCO0FBTWdCO0VBQ0kseUJBQUE7RUFDQSxpREFBQTtBQUpwQjtBQVVnQjtFQUNHLHlCQUFBO0VBQ0MsaURBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVJwQjtBQVdnQjtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFUcEI7QUFZZ0I7RUFDSSwwQkFBQTtBQVZwQjtBQWFnQjtFQUNJLDBCQUFBO0FBWHBCO0FBbUJBO0VBQ0ksOEJBQUE7QUFoQko7QUFtQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFoQko7QUFtQkE7RUFDSSxtQkFBQTtBQWhCSjtBQW1CQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUFoQko7QUFrQkE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0FBZko7QUFxQkk7RUFDSSxtQkFBQTtBQWxCUjtBQW9CUTtFQUNJLFlBQUE7QUFsQlo7QUFxQmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFuQnBCO0FBc0JnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFwQnBCO0FBd0JZO0VBQ0ksY0FBQTtFQUFBLFNBQUE7QUF0QmhCO0FBdUJnQjtFQUNJLGFBQUE7RUFBQSxRQUFBO0FBckJwQjtBQXNCb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXBCeEI7QUF5Qm9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF2QnhCO0FBOEJRO0VBQ1Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQTVCaEI7QUE4QmdCO0VBQ0ksZ0JBQUE7QUE1QnBCO0FBOEJvQjtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBNUJ4QjtBQStCb0I7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUE3QnhCO0FBZ0NvQjtFQUNJLGtCQUFBO0FBOUJ4QjtBQWdDd0I7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUE5QjVCO0FBa0NvQjtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUFoQ3hCO0FBa0N3QjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQWhDNUI7QUFxQ2dCO0VBQ0kseUJBQUE7QUFuQ3BCO0FBcUNnQjtFQUNJLHlCQUFBO0FBbkNwQjtBQXFDZ0I7RUFDSSx5QkFBQTtBQW5DcEI7QUF1Q29CO0VBQ0ksOEJBQUE7QUFyQ3hCO0FBdUN3QjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQXJDNUI7QUF1QzRCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFyQ2hDO0FBeUNvQztFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXZDeEM7QUF5Q3dDO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdkM1QztBQXlDNEM7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdkNoRDtBQTJDd0M7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQTFDNUM7QUFpRHdCO0VBQ0ksNkJBQUE7QUEvQzVCO0FBb0RvQjtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7QUFsRHhCO0FBd0RnQztFQUNJLGVBQUE7QUF0RHBDO0FBeURnQztFQUNJLG9CQUFBO0FBdkRwQztBQTJENEI7RUFDSSxpQkFBQTtBQXpEaEM7QUE2RHdCO0VBQ0ksMEJBQUE7QUEzRDVCO0FBZ0U0QjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQTlEaEM7QUFzRVE7RUFDSSx5QkFBQTtBQXBFWjtBQXFFWTtFQUNJLDZCQUFBO0FBbkVoQjtBQXNFUTtFQUNJLHlCQUFBO0FBcEVaO0FBcUVZO0VBQ0ksNkJBQUE7QUFuRWhCO0FBc0VRO0VBQ0kseUJBQUE7QUFwRVo7QUFxRVk7RUFDSSw2QkFBQTtBQW5FaEI7QUF3RUk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBdEVSO0FBd0VRO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUF0RVoiLCJmaWxlIjoib3V0Ym91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm91dGJvdW5kLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc2cHggLSAoY2FsYyg1OHB4ICsgMS42dncpKSk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIC5vdXRib3VuZC1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtcG9wdXAtbGlnaHQtZ3JheSk7XHJcblxyXG4gICAgICAgIC5kYXRlLWZpbHRlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xyXG5cclxuICAgICAgICAgICAgLmNoYW5nZS13ZWVrLWJ0biB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgICAgIGdhcDogMjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAud2Vlay1kYXlzLXRpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLndlZWstdGlsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jdXJyZW50LXdlZWstYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWZkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC53ZWVrLXRpbGVzIHtcclxuXHJcbiAgICAgICAgICAgICAgICAuZGF5LXRpbGV7XHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWZkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGF5LXRpbGUuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM2YmQyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRheS10aWxlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZGF5LXRpbGU6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci10eXBlLXRleHR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItMTB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYm9yZGVyLXRvcC0xMHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4uYm9yZGVyLWJvdHRvbS0xMHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm91dGJvdW5kLWNvbnRhaW5lci13cmFwcGVye1xyXG4gICAgXHJcblxyXG4gICAgLm91dGJvdW5kLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIC5jYXJkLWhlYWRlcntcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLmxlZnQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxhc3QtdXBkYXRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMS4yM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmlnaHQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICAucmVwYWlyLWNvdW50IHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRvdGFsLWFtb3VudCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMzIuMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTIyMzMwRDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2OHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxpbms6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXJlcGFpci10eXBle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtaWNvbi1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjAyMzE0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmlzLXRvd2luZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxOHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRib3VuZC1pY29uLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyMDIzMTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXRhYmxlLWdyYXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc3N0Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXRhYmxlLWdyZWVuIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI5MjM1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci10YWJsZS15ZWxsb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkE2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm91dGJvdW5kLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm91dGJvdW5kLWpvYnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRib3VuZC1qb2JzLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRib3VuZC1oZWFkZXItY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTNweCAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvYnMtbW92ZS1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRlLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBpY2t1cF93cmFwcGVye1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0LWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waWNrdXBEYXRlLWVycm9ye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub3RpZnktYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0LW11dGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRheS1jb3VudGVyIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQtbXV0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNhcmQtdGFibGUtZ3JheSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYTIyMzM7XHJcbiAgICAgICAgICAgIC5vdXRib3VuZC1jYXJkLWNvbnRlbnR7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtdGFibGUtZ3JlZW4ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDNBMzFCO1xyXG4gICAgICAgICAgICAub3V0Ym91bmQtY2FyZC1jb250ZW50eyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLXRhYmxlLXllbGxvdyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkExMjA7ICBcclxuICAgICAgICAgICAgLm91dGJvdW5kLWNhcmQtY29udGVudHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5vLWRhdGEtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcblxyXG4gICAgICAgIC5uby1kYXRhLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    86474:
    /*!*************************************************!*\
      !*** ./src/app/modules/repair/repair.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RepairModule": function RepairModule() {
          return (
            /* binding */
            _RepairModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @azure/msal-angular */
      84689);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/helper/directive.module */
      20363);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var _widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../widgets/chq-widgets.module */
      85510);
      /* harmony import */


      var _add_customers_customer_layout_customer_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-customers/customer-layout/customer-layout.component */
      88271);
      /* harmony import */


      var _booking_journal_booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./booking-journal/booking-journal/booking-journal.component */
      11121);
      /* harmony import */


      var _estimate_approval_estimate_approval_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./estimate-approval/estimate-approval.component */
      8542);
      /* harmony import */


      var _lounge_list_lounge_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lounge-list/lounge-list.component */
      94526);
      /* harmony import */


      var _outbound_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./outbound/outbound/outbound.component */
      10250);
      /* harmony import */


      var _workflow_lounge_workflow_lounge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./workflow-lounge/workflow-lounge.component */
      31224);
      /* harmony import */


      var _workflow_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./workflow/workflow/workflow.component */
      40712);
      /* harmony import */


      var src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/guards/repair-guard/repair.guard */
      17946);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var repairRoutes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'booking-journal'
      }, {
        path: 'booking',
        canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_repair_add-customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../repair/add-customers/customers.module */
          65206)).then(function (m) {
            return m.AddRepairCustomersModule;
          });
        }
      }, {
        path: 'booking/:id',
        component: _add_customers_customer_layout_customer_layout_component__WEBPACK_IMPORTED_MODULE_3__.CustomerLayoutComponent,
        canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_repair_add-customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../repair/add-customers/customers.module */
          65206)).then(function (m) {
            return m.AddRepairCustomersModule;
          });
        }
      }, {
        path: 'customers',
        canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_modules_repair_customer_customer_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../repair/customer/customer.module */
          922)).then(function (m) {
            return m.CustomerTableModule;
          });
        }
      }, {
        path: 'booking-journal',
        component: _booking_journal_booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_4__.BookingJournalComponent,
        canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-scroll-view_js-src_app-0d14e2"), __webpack_require__.e("src_app_modules_repair_booking-journal_booking-journal_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../repair/booking-journal/booking-journal.module */
          53018)).then(function (m) {
            return m.BookingJournalModule;
          });
        }
      }, {
        path: 'workflow',
        component: _workflow_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_9__.WorkflowComponent,
        canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_badge_js-src_app_resolvers_versio-55ba53"), __webpack_require__.e("src_app_modules_repair_workflow_workflow_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../repair/workflow/workflow.module */
          95885)).then(function (m) {
            return m.WorkflowModule;
          });
        }
      }, {
        path: 'outbound',
        component: _outbound_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_7__.OutboundComponent,
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__.MsalGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_badge_js-src_app_resolvers_versio-55ba53"), __webpack_require__.e("src_app_modules_repair_outbound_outbound_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../repair/outbound/outbound.module */
          73688)).then(function (m) {
            return m.OutboundModule;
          });
        }
      }, {
        path: 'lounge',
        component: _lounge_list_lounge_list_component__WEBPACK_IMPORTED_MODULE_6__.LoungeListComponent,
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__.MsalGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_badge_js-src_app_resolvers_versio-55ba53"), __webpack_require__.e("src_app_modules_repair_lounge-list_lounge-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../repair/lounge-list/lounge-list.module */
          36071)).then(function (m) {
            return m.LoungeListModule;
          });
        }
      }, {
        path: 'workflow-lounge',
        component: _workflow_lounge_workflow_lounge_component__WEBPACK_IMPORTED_MODULE_8__.WorkflowLoungeComponent,
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__.MsalGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_badge_js-src_app_resolvers_versio-55ba53"), __webpack_require__.e("src_app_modules_repair_workflow-lounge_workflow-lounge_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../repair/workflow-lounge/workflow-lounge.module */
          76252)).then(function (m) {
            return m.WorkflowLoungeModule;
          });
        }
      }];

      var _RepairModule = /*#__PURE__*/_createClass(function _RepairModule() {
        _classCallCheck(this, _RepairModule);
      });

      _RepairModule.ɵfac = function RepairModule_Factory(t) {
        return new (t || _RepairModule)();
      };

      _RepairModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: _RepairModule
      });
      _RepairModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(repairRoutes), _widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](_RepairModule, {
          declarations: [_estimate_approval_estimate_approval_component__WEBPACK_IMPORTED_MODULE_5__.EstimateApprovalComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule]
        });
      })();
      /***/

    },

    /***/
    31224:
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/repair/workflow-lounge/workflow-lounge.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WorkflowLoungeComponent": function WorkflowLoungeComponent() {
          return (
            /* binding */
            _WorkflowLoungeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      70160);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      34122);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      53399);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      75249);
      /* harmony import */


      var src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/workflow/workflow.service */
      71923);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/case/case.service */
      38709);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../widgets/chq-dropdown/chq-dropdown.component */
      8851);
      /* harmony import */


      var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../widgets/chq-button/chq-button.component */
      36978);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _c0 = ["filter"];
      var _c1 = ["horizontalRow"];
      var _c2 = ["verticalRow"];

      function WorkflowLoungeComponent_mat_icon_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 16);
        }
      }

      function WorkflowLoungeComponent_mat_icon_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 17);
        }
      }

      function WorkflowLoungeComponent_div_8_img_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function WorkflowLoungeComponent_div_8_img_5_Template_img_error_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r9.avatar = "";
          })("load", function WorkflowLoungeComponent_div_8_img_5_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r11.orgImageLoading = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r6.orgLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        }
      }

      function WorkflowLoungeComponent_div_8_ng_template_6_label_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r12.orgName);
        }
      }

      function WorkflowLoungeComponent_div_8_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, WorkflowLoungeComponent_div_8_ng_template_6_label_0_Template, 2, 1, "label", 31);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.orgName);
        }
      }

      function WorkflowLoungeComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, WorkflowLoungeComponent_div_8_img_5_Template, 1, 1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, WorkflowLoungeComponent_div_8_ng_template_6_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "chq-custom-loader", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.orgLogoUrl)("ngIfElse", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showLoading", ctx_r2.orgImageLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 7, "workflow_dashboard"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.currentDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 9, "last_refreshed"), ": ", ctx_r2.LastRefreshedDate, "");
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "width.px": a0
        };
      };

      function WorkflowLoungeComponent_div_9_tr_4_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function WorkflowLoungeComponent_div_9_tr_4_div_12_Template_img_load_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);

            var repair_r19 = restoredCtx.$implicit;
            return repair_r19.isloaded = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var repair_r19 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", repair_r19.ImageUrl !== null && repair_r19.ImageUrl !== "" ? repair_r19.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](16, _c3, ctx_r18.horizontalRowHeight));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-size", ctx_r18.fontSizeDropdown.selectedOption.textSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 9, "due_out"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 13, repair_r19.RepairEndDate, "dd/MM/yy")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-size", ctx_r18.fontSizeDropdown.selectedOption.textSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", repair_r19.VehicleMake + " " + repair_r19.VehicleModel, " ");
        }
      }

      var _c4 = function _c4(a0, a1, a2) {
        return {
          "min-height": a0,
          "height": a1,
          "max-height": a2
        };
      };

      function WorkflowLoungeComponent_div_9_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 40, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, WorkflowLoungeComponent_div_9_tr_4_div_12_Template, 12, 18, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r14 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](10, _c4, ctx_r13.calculatedHeight, ctx_r13.calculatedHeight, ctx_r13.calculatedHeight));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", items_r14.IsJobFromMaster ? items_r14.Color : "#DCDDE2")("color", items_r14.IsJobFromMaster ? "" : "#0B0E15");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-size", ctx_r13.fontSizeDropdown.selectedOption.labelSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](items_r14.JobName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](items_r14.WaterfallRepairs.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", items_r14.WaterfallRepairs);
        }
      }

      function WorkflowLoungeComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tbody", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, WorkflowLoungeComponent_div_9_tr_4_Template, 13, 14, "tr", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("fullscreen-table", ctx_r3.isFullScreen);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.workflowData);
        }
      }

      var _c5 = function _c5(a0) {
        return {
          "repair-not-started": a0
        };
      };

      function WorkflowLoungeComponent_div_10_th_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", null, 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", items_r25.Color);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c5, items_r25.JobName.toLowerCase() === "repair not started"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](items_r25.WaterfallRepairs.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 5, items_r25.JobName));
        }
      }

      var _c6 = function _c6(a0) {
        return {
          "height.px": a0
        };
      };

      function WorkflowLoungeComponent_div_10_td_7_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function WorkflowLoungeComponent_div_10_td_7_ng_container_1_Template_img_load_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);

            var repair_r30 = restoredCtx.$implicit;
            return repair_r30.isloaded = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var repair_r30 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", repair_r30.ImageUrl !== null && repair_r30.ImageUrl !== "" ? repair_r30.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](18, _c6, ctx_r29.verticalRowWidth));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("visibility", repair_r30.RepairEndDate ? "visible" : "hidden")("font-size", ctx_r29.fontSizeDropdown.selectedOption.textSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 11, "due_out"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 15, repair_r30.RepairEndDate, "dd/MM/yy")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-size", ctx_r29.fontSizeDropdown.selectedOption.textSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", repair_r30.VehicleMake + " " + repair_r30.VehicleModel, " ");
        }
      }

      function WorkflowLoungeComponent_div_10_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WorkflowLoungeComponent_div_10_td_7_ng_container_1_Template, 12, 20, "ng-container", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", items_r27.WaterfallRepairs);
        }
      }

      function WorkflowLoungeComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, WorkflowLoungeComponent_div_10_th_4_Template, 8, 9, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tr", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, WorkflowLoungeComponent_div_10_td_7_Template, 2, 1, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("fullscreen-table", ctx_r4.isFullScreen);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.workflowData);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.workflowData);
        }
      }

      function WorkflowLoungeComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "no_result_found"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
        }
      }

      var _WorkflowLoungeComponent = /*#__PURE__*/function () {
        /**
         * constructor.
         * @constructor
         * @param {WorkflowService} workflowService
         * @param {commonService} commonService
         * @param {caseService} caseService
         * @param {formBuilder} formBuilder
         */
        function _WorkflowLoungeComponent(workflowService, router, commonService, caseService, translateService, formBuilder) {
          var _this38 = this;

          _classCallCheck(this, _WorkflowLoungeComponent);

          this.workflowService = workflowService;
          this.router = router;
          this.commonService = commonService;
          this.caseService = caseService;
          this.translateService = translateService;
          this.formBuilder = formBuilder;
          this.totalCost = 0;
          this.totalCount = 0;
          this.workflowData = [];
          this.CallingAPI = false;
          this.IntervalGetWorkflow = null;
          this.autoScrollInterval = null;
          this.timeInterval = null;
          this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
          this.userDetail = null;
          this.userIsBM = false;
          this.filterButton = {
            label: 'filter',
            type: 'outline',
            icon: 'filter'
          };
          this.filterForm = this.formBuilder.group({
            OrgName: [],
            CustomerId: [],
            CompanyId: []
          });
          this.applyButton = {
            label: 'apply',
            type: 'primary'
          };
          this.resetButton = {
            label: 'reset_all',
            type: 'outline'
          };
          this.statusMap = {
            'Approved': 'Approved',
            'PendingApproval': 'Pending Approval',
            'RepairEstimation': 'Repair Estimation',
            'UploadPhotos': 'Upload Photos',
            'UploadDocuments': 'Upload Documents',
            'Draft': 'Draft'
          };
          this.filterModal = [{
            placeHolder: 'select_organization',
            label: 'organization',
            name: 'OrgName',
            value: '',
            type: 'select',
            displayValue: 'label',
            fieldValue: 'value',
            options: [],
            isMultiSelect: false
          }, {
            placeHolder: 'select_type',
            label: 'customer_name',
            name: 'CustomerId',
            value: '',
            type: 'select',
            displayValue: 'label',
            fieldValue: 'value',
            options: [],
            isMultiSelect: true
          }];
          this.filterDataLoaded = false;
          this.repairSizeColors = {
            'sm': 'bg-light-blue',
            's': 'bg-light-blue',
            'l': 'bg-light-green text-white',
            'm': 'bg-light-pink text-white',
            'xl': 'bg-dark-red text-white'
          };
          this.settingsButtonModel = {
            label: 'filter',
            type: 'outline',
            icon: 'filter',
            width: '13px',
            height: '13px'
          };
          this.jobIconDictionary = {
            'Body': 'car',
            'Paint': 'paint-nozzle',
            'Mechanical': 'mechanical',
            'Electrical': 'electric',
            'Tires': 'tire',
            'Preparation': 'car-roof',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Check In': 'checkbox-open',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Repair': 'door-panel',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Fitup': 'door-panel',
            'Polish': 'car-paint',
            'Detailing': 'car-cleaning',
            'Maintenance': 'maintenance',
            'Diagnosis': 'diagnosis',
            'Others': 'gears'
          };
          this.fontSizeDropdown = {
            options: [{
              label: 'Small',
              labelSize: '12px',
              textSize: '10px'
            }, {
              label: 'Medium',
              labelSize: '13px',
              textSize: '11px'
            }, {
              label: 'Large',
              labelSize: '14px',
              textSize: '12px'
            }, {
              label: 'X-Large',
              labelSize: '16px',
              textSize: '14px'
            }],
            placeHolder: 'Select Font Size',
            label: '',
            name: 'fontSizeDropdown',
            displayValue: 'label',
            selectedOption: {
              label: 'Small',
              labelSize: '12px',
              textSize: '10px'
            }
          };
          this.subs = [];
          this.FullscreenButton = {
            label: 'view_full_screen',
            type: 'outline',
            icon: 'fullscreen'
          };
          this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('MMMM DD, YYYY hh:mm a');
          this.orgImageLoading = true;
          this.orgLogoUrl = '';
          this.orgName = '';
          this.FocusedRepairIndex = 0;
          this.FocusedRepairHorizontalIndex = 0;
          this.verticalView = false;
          this.horizontalRowHeight = 0;
          this.verticalRowWidth = 0;
          this.i18n = this.commonService.geti18nInfo();
          this.commonService.userProfileData.subscribe({
            next: function next(res) {
              var _a, _b;

              if (res) {
                _this38.orgLogoUrl = (_a = res === null || res === void 0 ? void 0 : res.data.organizationDetail) === null || _a === void 0 ? void 0 : _a.logoUrl;
                _this38.orgName = (_b = res === null || res === void 0 ? void 0 : res.data.organizationDetail) === null || _b === void 0 ? void 0 : _b.name;

                if (!_this38.orgLogoUrl) {
                  _this38.orgImageLoading = false;
                }
              }
            }
          });
        }
        /**
         * ngOnInit
         */


        _createClass(_WorkflowLoungeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this39 = this;

            this.timeInterval = setInterval(function () {
              _this39.updateDate();
            }, 1000);
            this.commonService.userProfileData.subscribe(function (res) {
              var _a, _b, _c;

              _this39.userDetail = res === null || res === void 0 ? void 0 : res.data;
              _this39.userIsBM = (_a = _this39.userDetail) === null || _a === void 0 ? void 0 : _a.roleDetail.some(function (x) {
                return x.name == 'Bodyshop Manager';
              });

              if ((_c = (_b = _this39.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.id) {
                _this39.filterForm.get('OrgName').setValue(_this39.userDetail.organizationDetail.id);
              }
            });
            this.chkScreenMode();
          }
          /**
           * update Date
           */

        }, {
          key: "updateDate",
          value: function updateDate() {
            this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('MMMM DD, YYYY hh:mm a');
          }
          /**
           * move_scroll
           */

        }, {
          key: "move_scroll",
          value: function move_scroll(direction, el) {
            if (direction === 'left') {
              el.scrollLeft = el.scrollLeft - 250;
            } else {
              el.scrollLeft = el.scrollLeft + 250;
            }
          }
          /**
          * checkJobWrapperScroll
          */

        }, {
          key: "checkJobWrapperScroll",
          value: function checkJobWrapperScroll(direction, el) {
            if (direction === 'left') {
              return !(el.scrollLeft <= 0);
            } else {
              return !(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
            }
          }
          /**
           * auto scroll horizontally
           */

        }, {
          key: "horizontalScroll",
          value: function horizontalScroll() {
            var _a, _b;

            var parentContainer = document.querySelector('.workflow-table-container');
            var container = document.querySelector('.scroll-items-row');
            var nodes = container.querySelectorAll('.card-container');

            if (container === null || container === undefined || nodes === null || nodes === undefined) {
              return;
            }

            var visibleWidth = 0;
            var longestNodeIndex = 0;
            var longestNodeLength = 0;
            var totalWidth = parentContainer.clientWidth;

            for (var i = 0; i < nodes.length; i++) {
              visibleWidth = 0;

              if (longestNodeLength < nodes[i].children.length) {
                longestNodeLength = nodes[i].children.length;
                longestNodeIndex = i;
              }
            }

            for (var _i = this.FocusedRepairHorizontalIndex; _i < nodes[longestNodeIndex].children.length; _i++) {
              if (_i === nodes[longestNodeIndex].children.length - 1) {
                this.FocusedRepairHorizontalIndex = 0;
                parentContainer.scrollLeft = 0;
              }

              visibleWidth += (_b = nodes[longestNodeIndex].children[_i].clientWidth + ((_a = nodes[longestNodeIndex].children[_i + 1]) === null || _a === void 0 ? void 0 : _a.clientWidth)) !== null && _b !== void 0 ? _b : 0;

              if (visibleWidth >= totalWidth) {
                this.FocusedRepairHorizontalIndex = _i;

                nodes[longestNodeIndex].children[_i].scrollIntoView({
                  behavior: 'smooth',
                  inline: 'start'
                });

                break;
              }
            }
          }
          /**
           * auto scroll vertically
           */

        }, {
          key: "verticalScroll",
          value: function verticalScroll() {
            var parentContainer = document.querySelector('.vertical-workflow-table');
            var container = document.querySelector('.vertical-card-container');
            var nodes = container.querySelectorAll('.vertical-card');

            if (container === null || container === undefined || nodes === null || nodes === undefined) {
              return;
            }

            var visibleHeight = 0;
            var longestNodeIndex = 0;
            var longestNodeLength = 0;
            var totalHeight = parentContainer.clientHeight;

            for (var i = 0; i < nodes.length; i++) {
              visibleHeight = 0;

              if (longestNodeLength < nodes[i].children.length) {
                longestNodeLength = nodes[i].children.length;
                longestNodeIndex = i;
              }
            }

            for (var _i2 = this.FocusedRepairIndex; _i2 < nodes[longestNodeIndex].children.length; _i2++) {
              if (_i2 === nodes[longestNodeIndex].children.length - 1) {
                this.FocusedRepairIndex = 0;
                parentContainer.scrollTop = 0;
              }

              visibleHeight += nodes[longestNodeIndex].children[_i2].clientHeight;

              if (visibleHeight >= totalHeight) {
                this.FocusedRepairIndex = _i2;

                nodes[longestNodeIndex].children[_i2].scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });

                break;
              }
            }
          }
          /**
           * ngAfterViewInit
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this40 = this;

            //call autoScroll every 1 mins
            this.autoScrollInterval = setInterval(function () {
              if (_this40.isFullScreen) {
                if (_this40.verticalView) {
                  _this40.verticalScroll();
                } else {
                  _this40.horizontalScroll();
                }
              }
            }, 10000);
            this.getWorkflowDetails(this.generateFilterQuery());
            this.IntervalGetWorkflow = setInterval(function () {
              _this40.getWorkflowDetails(_this40.generateFilterQuery());
            }, 300000);

            if (localStorage.getItem('workflow-fontsize')) {
              this.fontSizeDropdown.selectedOption = JSON.parse(localStorage.getItem('workflow-fontsize'));
            }
          }
          /**
           * getWorkflowData
           */

        }, {
          key: "getWorkflowDetails",
          value: function getWorkflowDetails(query) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this41 = this;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    this.commonService.showLoading();
                    this.CallingAPI = true;

                    if (query !== '?$filter=') {
                      this.subs.push(this.workflowService.getWorkflowDetailsWithQuery(query).subscribe({
                        next: function next(data) {
                          _this41.workflowData = _this41.getTotals(data.value);

                          if (_this41.workflowData) {
                            _this41.workflowData = _this41.workflowData.filter(function (x) {
                              return x.JobName !== 'REPAIR NOT STARTED';
                            });
                            _this41.calculatedHeight = "".concat(100 / _this41.workflowData.length, "%");

                            _this41.workflowData.map(function (value) {
                              return value === null || value === void 0 ? void 0 : value.WaterfallRepairs.map(function (child) {
                                return child.isLoaded = false;
                              });
                            });
                          }

                          _this41.CallingAPI = false;
                          _this41.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
                          setTimeout(function () {
                            var _a, _b;

                            _this41.horizontalRowHeight = (_b = (_a = _this41.horizontalRow) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.offsetHeight;

                            _this41.commonService.hideLoading();
                          });
                        },
                        error: function error() {
                          _this41.CallingAPI = false;
                        }
                      }));
                    } else {
                      this.subs.push(this.workflowService.getWorkflowDetails().subscribe({
                        next: function next(data) {
                          _this41.workflowData = _this41.getTotals(data.value);

                          if (_this41.workflowData) {
                            _this41.workflowData.map(function (value) {
                              return value === null || value === void 0 ? void 0 : value.WaterfallRepairs.map(function (child) {
                                return child.isLoaded = false;
                              });
                            });
                          }

                          _this41.CallingAPI = false;
                          _this41.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');

                          _this41.commonService.hideLoading();
                        },
                        error: function error() {
                          _this41.CallingAPI = false;
                        }
                      }));
                    }

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
          /**
           * calculate totalCost and totalCount of all repairs
           */

        }, {
          key: "getTotals",
          value: function getTotals(data) {
            var _this42 = this;

            this.totalCost = 0;
            this.totalCount = 0;
            data.forEach(function (item) {
              _this42.totalCount += item.WaterfallRepairs.length;
              item['ManualCost'] = 0;
              item.WaterfallRepairs.forEach(function (itm) {
                _this42.totalCost += itm.EstimateCost;
                item.ManualCost += itm.EstimateCost;
              });
            });
            return data;
          }
          /**
           * current_date_format
           * return date format
           * example 28 Wednesday, of June 2023
           *
           * @returns {string}
           */

        }, {
          key: "current_date_format",
          value: function current_date_format() {
            return dayjs__WEBPACK_IMPORTED_MODULE_0__().format('D dddd, of MMMM YYYY');
          }
          /**
           * pull data and open filter panel
           */

        }, {
          key: "openFilter",
          value: function openFilter() {
            var _this43 = this;

            if (this.filterDataLoaded) {
              this.filter.open();
            } else {
              this.commonService.showLoading();
              (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([this.getOrgIfBM(), this.workflowService.getCustomer(this.userDetail.organizationDetail.id)]).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(function (_ref7) {
                var _ref8 = _slicedToArray(_ref7, 2),
                    orgList = _ref8[0],
                    CustomerList = _ref8[1];

                return {
                  orgList: orgList,
                  CustomerList: CustomerList
                };
              })).subscribe(function (result) {
                var _a, _b, _c, _d, _e, _f;

                if (_this43.userIsBM) {
                  _this43.filterModal[0] = Object.assign(Object.assign({}, _this43.filterModal[0]), {
                    selectedOption: {
                      'label': (_a = _this43.userDetail) === null || _a === void 0 ? void 0 : _a.organizationDetail.name,
                      'value': (_b = _this43.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail.id
                    },
                    options: result.orgList.data.map(function (x) {
                      return {
                        label: x.name,
                        value: x.id
                      };
                    })
                  });
                } else {
                  _this43.filterModal[0] = Object.assign(Object.assign({}, _this43.filterModal[0]), {
                    selectedOption: {
                      'label': (_c = _this43.userDetail) === null || _c === void 0 ? void 0 : _c.organizationDetail.name,
                      'value': (_d = _this43.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.id
                    },
                    options: [{
                      'label': (_e = _this43.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.name,
                      'value': (_f = _this43.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id
                    }],
                    disabled: true
                  });
                }

                _this43.filterModal[1] = Object.assign(Object.assign({}, _this43.filterModal[1]), {
                  options: result.CustomerList.filter(function (value, index, self) {
                    return self.findIndex(function (o) {
                      return o.contactId === value.contactId;
                    }) === index;
                  }).map(function (x) {
                    var name = x.firstName + ' ' + x.lastName;
                    var label = x.isIndividual ? name : x.companyName;
                    var subLabel = x.isIndividual ? x.email : x.licenseNumber;
                    return {
                      label: x.isIndividual ? name : x.companyName,
                      subLabel: x.isIndividual ? x.email : x.licenseNumber,
                      value: x.isIndividual ? x.contactId : x.companyId,
                      html: "<div class='workflow-customer-item'><span class='name'>".concat(label, "</span><span class='email'>").concat(subLabel, "</span></div>")
                    };
                  })
                });

                _this43.filter.open();

                _this43.commonService.hideLoading();

                _this43.filterDataLoaded = true;
              });
            }
          }
          /**
           * Check if user is bm , then call api otherwise return observable
           */

        }, {
          key: "getOrgIfBM",
          value: function getOrgIfBM() {
            if (this.userIsBM) {
              return this.caseService.getOrganizations();
            } else {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null);
            }
          }
          /**
           * get customer list
           * @param orgId
           */

        }, {
          key: "getCustomer",
          value: function getCustomer(orgId) {
            var _this44 = this;

            this.commonService.showLoading();
            this.workflowService.getCustomer(orgId).subscribe({
              next: function next(data) {
                _this44.filterModal[1] = Object.assign(Object.assign({}, _this44.filterModal[1]), {
                  options: data.filter(function (value, index, self) {
                    return self.findIndex(function (o) {
                      return o.contactId === value.contactId;
                    }) === index;
                  }).map(function (x) {
                    var name = x.firstName + ' ' + x.lastName;
                    var label = x.isIndividual ? name : x.companyName;
                    var subLabel = x.isIndividual ? x.email : x.licenseNumber;
                    return {
                      label: x.isIndividual ? name : x.companyName,
                      subLabel: x.isIndividual ? x.email : x.licenseNumber,
                      value: x.isIndividual ? x.contactId : x.companyId,
                      html: "<div class='workflow-customer-item'><span class='name'>".concat(label, "</span><span class='email'>").concat(subLabel, "</span></div>")
                    };
                  })
                });
                console.log(_this44.filterModal[1]);

                _this44.commonService.hideLoading();
              },
              error: function error() {
                _this44.commonService.showLoading();
              }
            });
          }
          /**
          * function
          */

        }, {
          key: "generateFilterQuery",
          value: function generateFilterQuery() {
            var filterValue = this.filterForm.value;
            var query = '?$filter=';

            if (filterValue.OrgName && filterValue.OrgName > 0) {
              query += "OrgId eq ".concat(filterValue.OrgName);
            }

            if (filterValue.CustomerId && filterValue.CustomerId.length > 0 || filterValue.CompanyId && filterValue.CompanyId.length > 0) {
              if (query !== '?$filter=') {
                query += '&';
              } else {
                query = '?';
              }

              query += '$expand=WaterfallRepairs($filter=(';
              if (filterValue.CustomerId.length > 0) query += "".concat(filterValue.CustomerId.map(function (x) {
                return 'ContactId eq ' + x + '';
              }).join(' or '));
              if (filterValue.CustomerId.length > 0 && filterValue.CompanyId.length > 0) query += ' or ';
              if (filterValue.CompanyId.length > 0) query += "".concat(filterValue.CompanyId.map(function (x) {
                return 'CompanyId eq ' + x + '';
              }).join(' or '));
              query += '))';
            }

            return query;
          }
          /**
           *
           * @param output
           */

        }, {
          key: "onFormUpdate",
          value: function onFormUpdate(output) {
            if (output.name === 'CustomerId') {
              this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), {
                selectedOption: output.value
              });
              this.filterForm.get(output.name).setValue(output.value.filter(function (x) {
                return x.isIndividual;
              }).map(function (x) {
                return x.value;
              }));
              this.filterForm.get('CompanyId').setValue(output.value.filter(function (x) {
                return !x.isIndividual;
              }).map(function (x) {
                return x.value;
              }));
            } else if (output.name === 'OrgName') {
              this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), {
                selectedOption: output.value
              });

              if (output.value) {
                this.filterForm.get(output.name).setValue(output.value.value);
                this.getCustomer(output.value.value);
              } else {
                this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), {
                  value: '',
                  selectedOption: '',
                  options: []
                });
              }
            }
          }
          /**
           *
           */

        }, {
          key: "applyFilter",
          value: function applyFilter() {
            this.workflowData = [];
            this.getWorkflowDetails(this.generateFilterQuery());
            this.filter.close();
          }
          /**
           *
           */

        }, {
          key: "resetFilter",
          value: function resetFilter() {
            var _a, _b, _c, _d, _e, _f;

            this.filterForm.reset();

            for (var index = 0; index < this.filterModal.length; index++) {
              this.filterModal[index] = Object.assign(Object.assign({}, this.filterModal[index]), {
                value: '',
                selectedOption: '',
                options: (_a = this.filterModal[index].options) === null || _a === void 0 ? void 0 : _a.map(function (x) {
                  x.checked = false;
                  return x;
                })
              });
            }

            if ((_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.id) {
              this.filterForm.get('OrgName').setValue(this.userDetail.organizationDetail.id);
              this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), {
                selectedOption: {
                  'label': (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.name,
                  'value': (_e = this.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.id
                }
              });
              this.getCustomer((_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id);
            }
          }
          /**
           * PartTypeIcon
           *  @param type {string}
           *
           *  @returns {string}
           */

        }, {
          key: "PartTypeIcon",
          value: function PartTypeIcon(type) {
            switch (type) {
              case 'NotOrdered':
                return 'parts-not-ordered';

              case 'Ordered':
                return 'parts-ordered';

              case 'Arrived':
                return 'parts-arrived';

              case 'OrderedPartially':
                return 'parts-ordered-partial';

              case 'ArrivedPartially':
                return 'parts-arrived-partial';

              default:
                return 'parts-not-ordered';
            }
          }
          /**
           * PartTypeIcon
           *  @param type {string}
           *
           *  @returns {string}
           */

        }, {
          key: "PartTypetoolTip",
          value: function PartTypetoolTip(type) {
            var Tooltip = '';

            switch (type) {
              case 'NotOrdered':
                Tooltip = 'parts_not_ordered';
                break;

              case 'Ordered':
                Tooltip = 'part_ordered';
                break;

              case 'Arrived':
                Tooltip = 'part_arrived';
                break;

              case 'OrderedPartially':
                Tooltip = 'part_ordered_partial';
                break;

              case 'ArrivedPartially':
                Tooltip = 'part_arrived_partial';
                break;

              default:
                Tooltip = 'parts_not_ordered';
                break;
            }

            return this.translateService.instant(Tooltip);
          }
          /**
           *
           * @param event
           */

        }, {
          key: "fullscreenmodes",
          value: function fullscreenmodes(event) {
            this.chkScreenMode();
          }
          /**
          * check screen mode
          */

        }, {
          key: "chkScreenMode",
          value: function chkScreenMode() {
            if (document.fullscreenElement || document['webkitIsFullScreen']) {
              //fullscreen
              this.isFullScreen = true;
            } else {
              //not in full screen
              this.isFullScreen = false;
            }
          }
          /**
          * open in full screen
          */

        }, {
          key: "openFullscreen",
          value: function openFullscreen() {
            var elem = document.documentElement;

            if (elem.requestFullscreen) {
              elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
              /* Firefox */
              elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
              /* Chrome, Safari and Opera */
              elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
              /* IE/Edge */
              elem.msRequestFullscreen();
            }
          }
          /**
           * toggle view
           */

        }, {
          key: "changeView",
          value: function changeView() {
            var _this45 = this;

            if (!this.verticalView) {
              setTimeout(function () {
                var _a, _b;

                _this45.verticalRowWidth = ((_b = (_a = _this45.verticalRow) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.offsetWidth) * 0.6;
              });
            }

            this.verticalView = !this.verticalView;
          }
          /**
           * changeFontSize
           *
           * @param {*} event
           */

        }, {
          key: "changeFontSize",
          value: function changeFontSize(event) {
            if (event.name === 'fontSizeDropdown') {
              this.fontSizeDropdown.selectedOption = event.value;
              localStorage.setItem('workflow-fontsize', JSON.stringify(event.value));
            }
          }
          /**
           * ngOnDestroy
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.forEach(function (sub) {
              return sub.unsubscribe();
            });
            clearInterval(this.IntervalGetWorkflow);
            clearInterval(this.autoScrollInterval);
            clearInterval(this.timeInterval);
          }
        }]);

        return _WorkflowLoungeComponent;
      }();

      _WorkflowLoungeComponent.ɵfac = function WorkflowLoungeComponent_Factory(t) {
        return new (t || _WorkflowLoungeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_1__.WorkflowService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder));
      };

      _WorkflowLoungeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _WorkflowLoungeComponent,
        selectors: [["app-workflow-lounge"]],
        viewQuery: function WorkflowLoungeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.horizontalRow = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.verticalRow = _t.first);
          }
        },
        hostBindings: function WorkflowLoungeComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fullscreenchange", function WorkflowLoungeComponent_fullscreenchange_HostBindingHandler($event) {
              return ctx.fullscreenmodes($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("webkitfullscreenchange", function WorkflowLoungeComponent_webkitfullscreenchange_HostBindingHandler($event) {
              return ctx.fullscreenmodes($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("mozfullscreenchange", function WorkflowLoungeComponent_mozfullscreenchange_HostBindingHandler($event) {
              return ctx.fullscreenmodes($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("MSFullscreenChange", function WorkflowLoungeComponent_MSFullscreenChange_HostBindingHandler($event) {
              return ctx.fullscreenmodes($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("onwebkitfullscreenchange", function WorkflowLoungeComponent_onwebkitfullscreenchange_HostBindingHandler($event) {
              return ctx.fullscreenmodes($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_1__.WorkflowService])],
        decls: 16,
        vars: 8,
        consts: [[1, "page-container", "workflow-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "lounge-list-header"], [1, "header-content", "fx-row", "justify-space-between", "align-center"], [2, "margin-left", "auto", "width", "140px", 3, "dropdownModel", "selected"], [3, "buttonModel", "click"], [1, "alignment-btn", 3, "click"], ["svgIcon", "horizontal-alignment", 4, "ngIf"], ["svgIcon", "vertical-alignment", 4, "ngIf"], ["class", "fullscreen", 4, "ngIf"], ["class", "workflow-table-container", 3, "fullscreen-table", 4, "ngIf"], ["class", "vertical-workflow-table", 3, "fullscreen-table", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], ["svgIcon", "horizontal-alignment"], ["svgIcon", "vertical-alignment"], [1, "fullscreen"], [1, "lounge-header", "fx-0", "fx-col", "justify-center"], [1, "lounge-header-content", "align-center", "fx-row"], [1, "xa-logo-wrapper"], [1, "menu-image"], ["alt", "", 3, "src", "error", "load", 4, "ngIf", "ngIfElse"], ["name", ""], [3, "showLoading"], [1, "lounge-title-wrapper"], [1, "date-container"], [1, "lounge-date-wrapper"], [1, "lounge-last-refresh"], ["alt", "", 3, "src", "error", "load"], ["class", "org-name", 4, "ngIf"], [1, "org-name"], [1, "workflow-table-container"], ["aria-describedby", "horizontal", 1, "horizontal-workflow-table"], [1, "d-none"], [1, "scroll-items-row"], ["class", "job-item-row", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "job-item-row", 3, "ngStyle"], [1, "job-item-cards"], [1, "workflow-row-container"], ["horizontalRow", ""], [1, "workflow-header-card"], [1, "card-content"], [1, "uppercase"], [1, "rounded-icon"], [1, "card-container"], ["cardContainer", ""], ["class", "workflow-details-card", 4, "ngFor", "ngForOf"], [1, "workflow-details-card"], [1, "detail-card-link"], [1, "img-container"], ["alt", "", 3, "src", "ngStyle", "load"], [1, "repair-items-container"], [1, "due-date-span"], [1, "info-span"], [1, "vertical-workflow-table"], ["aria-describedby", "vertical view", 1, "vertical-table"], [4, "ngFor", "ngForOf"], [1, "vertical-card-container"], ["class", "vertical-card", 4, "ngFor", "ngForOf"], ["verticalRow", ""], [1, "header-container", 3, "ngClass"], [1, "count"], [1, "title"], [1, "vertical-card"], [1, "repair-container"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
        template: function WorkflowLoungeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "chq-dropdown", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selected", function WorkflowLoungeComponent_Template_chq_dropdown_selected_3_listener($event) {
              return ctx.changeFontSize($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "chq-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkflowLoungeComponent_Template_chq_button_click_4_listener() {
              return ctx.openFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkflowLoungeComponent_Template_div_click_5_listener() {
              return ctx.changeView();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, WorkflowLoungeComponent_mat_icon_6_Template, 1, 0, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, WorkflowLoungeComponent_mat_icon_7_Template, 1, 0, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, WorkflowLoungeComponent_div_8_Template, 18, 11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, WorkflowLoungeComponent_div_9_Template, 5, 3, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, WorkflowLoungeComponent_div_10_Template, 8, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, WorkflowLoungeComponent_div_11_Template, 9, 6, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dropdownModel", ctx.fontSizeDropdown);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttonModel", ctx.FullscreenButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.verticalView);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.verticalView);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isFullScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totalCost > 0 && ctx.totalCount > 0 && !ctx.verticalView);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totalCost > 0 && ctx.totalCount > 0 && ctx.verticalView);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.workflowData.length === 0 || ctx.totalCost === 0 && ctx.totalCount === 0) && !ctx.CallingAPI);
          }
        },
        directives: [_widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.ChqDropdownComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_5__.ChqButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.UpperCasePipe],
        styles: [".rounded-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 12px;\n  width: 30px;\n  min-width: 30px;\n  height: 30px;\n  line-height: 2px;\n  font-weight: bold;\n  position: relative;\n  background: rgba(255, 255, 255, 0.4);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  margin: 1vh 1vw;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 20px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .due-date-span[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  color: var(--xa-dark-gray, rgba(26, 34, 51, 0.7));\n  text-align: left;\n  font-size: 10px;\n  font-weight: 500;\n  word-break: break-word;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .info-span[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  color: var(--xa-dark-gray, rgba(26, 34, 51, 0.7));\n  text-align: left;\n  font-size: 10px;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px - 2vh - 40px);\n  overflow: auto;\n  margin: 0 0.5vw;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: var(--xa-popup-light-gray);\n  border-spacing: 0;\n  padding: 0;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#1A223333 40%, rgba(255, 255, 255, 0) 0%);\n  background-position: top right;\n  background-size: 2px 35px;\n  width: 195px;\n  background-repeat: repeat-y;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%]:last-child {\n  background-size: 0px;\n  padding-right: 0px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]:first-child {\n  margin-top: 0 !important;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 1vh);\n  margin: 0.5vh 0;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 0.5625rem;\n  gap: 0.5625rem;\n  height: 100%;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%] {\n  min-width: 205px;\n  max-width: 205px;\n  border-radius: 0.625rem;\n  font-size: 12px;\n  font-weight: normal;\n  position: sticky;\n  left: 0;\n  background-color: white;\n  z-index: 1;\n  box-shadow: inset 0px 0px 0px 3px rgba(26, 34, 51, 0.2);\n  box-shadow: inset 0px 0px 0px 3px var(--xa-light-gray, rgba(26, 34, 51, 0.2));\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 205px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 6px;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  align-self: center;\n  color: #FFFFFF;\n  color: var(--xa-white, #FFFFFF);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  height: 0px !important;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  background: var(--xa-white, #FFFFFF);\n  border-radius: 8px;\n  overflow: hidden;\n  min-width: 205px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 10px;\n  padding: 0;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  cursor: auto;\n  color: black;\n  text-align: center;\n  height: 100%;\n  grid-gap: 5px;\n  gap: 5px;\n  padding-right: 5px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  flex: 1;\n  justify-content: center;\n  width: 121px;\n  grid-gap: 0.25vh;\n  gap: 0.25vh;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background: rgba(26, 34, 51, 0.1);\n  background: var(--xa-lighter-gray, rgba(26, 34, 51, 0.1));\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .workflow-repair-items[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 5px;\n  gap: 5px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 1.625rem;\n  height: 1.625rem;\n  font-size: 16px;\n  line-height: 4px;\n  padding: 5px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .due-date-span-customer[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  color: var(--xa-dark-gray, rgba(26, 34, 51, 0.7));\n  float: left;\n  padding-left: 3px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .status-span[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  min-width: 16px;\n  min-height: 16px;\n  max-width: 16px;\n  max-height: 16px;\n  background: rgba(26, 34, 51, 0.05);\n  background: var(--xa-bold-gray, rgba(26, 34, 51, 0.05));\n  border-radius: 5px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: rgba(26, 34, 51, 0.7);\n  color: var(--xa-dark-gray, rgba(26, 34, 51, 0.7));\n  grid-gap: 8px;\n  gap: 8px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%] {\n  color: #FFF;\n  background: #1B03A3;\n  background: var(--xa-primary, #1B03A3);\n  margin-bottom: 0.75vw;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%] {\n  height: 5.0625rem;\n  padding: 0px 30px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  position: relative;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  max-height: 60px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 8px;\n  line-height: 14px;\n  color: #000;\n  color: var(--xa-black-dark, #000);\n  padding: 8px 4px;\n  text-align: center;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  border: 1px solid var(--xa-light-gray, rgba(26, 34, 51, 0.2));\n  border-radius: 8px;\n  display: flex;\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: #FFFFFF;\n  background-color: var(--xa-white, #FFFFFF);\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .lounge-title-wrapper[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  letter-spacing: -0.01563rem;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  grid-gap: 0.4375rem;\n  gap: 0.4375rem;\n  flex-direction: column;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-date-wrapper[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-last-refresh[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px - 2vh - 40px);\n  overflow: auto;\n  padding: 0 0.375vw;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  height: 100%;\n  width: 100%;\n  border-spacing: 0;\n  padding: 0;\n  background: #F4F5FD;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: #F4F5FD;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 0.375vw 0.75vw 0.375vw;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 10px 11px;\n  display: flex;\n  height: 96px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  grid-gap: 12px;\n  gap: 12px;\n  color: #FFFFFF;\n  color: var(--xa-white, #FFFFFF);\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container.repair-not-started[_ngcontent-%COMP%] {\n  background: rgba(26, 34, 51, 0.2);\n  background: var(--xa-light-gray, rgba(26, 34, 51, 0.2));\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 2px;\n  font-weight: bold;\n  position: relative;\n  background: #FFFFFF;\n  background: var(--xa-white, #FFFFFF);\n  color: #000;\n  color: var(--xa-black, #000);\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  background: var(--xa-white, #FFFFFF);\n  border-radius: 10px;\n  padding: 0.5vw;\n  margin-bottom: 10px;\n  scroll-margin-top: 130px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  background: rgba(26, 34, 51, 0.1);\n  background: var(--xa-lighter-gray, rgba(26, 34, 51, 0.1));\n  border-radius: 10px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n  object-fit: contain;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 0.25vw;\n  gap: 0.25vw;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  min-width: 26px;\n  min-height: 26px;\n  max-width: 26px;\n  max-height: 26px;\n  background: rgba(26, 34, 51, 0.05);\n  background: var(--xa-bold-gray, rgba(26, 34, 51, 0.05));\n  border-radius: 5px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen-table[_ngcontent-%COMP%] {\n  height: calc(100vh - 50px);\n}\n\n.svg-17px[_ngcontent-%COMP%] {\n  width: 17px;\n}\n\n.main-content[_ngcontent-%COMP%]   .addenda-container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n\nspan.text-muted[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  color: var(--xa-dark-gray, rgba(26, 34, 51, 0.7));\n}\n\n.Approved[_ngcontent-%COMP%] {\n  color: var(--xa-approve);\n}\n\n.PendingApproval[_ngcontent-%COMP%] {\n  color: var(--xa-pending-approval);\n}\n\n.RepairEstimation[_ngcontent-%COMP%] {\n  color: var(--xa-repair-estimate);\n}\n\n.UploadPhotos[_ngcontent-%COMP%] {\n  color: var(--xa-upload-photo);\n}\n\n.UploadDocuments[_ngcontent-%COMP%] {\n  color: var(--xa-upload-document);\n}\n\n.Draft[_ngcontent-%COMP%] {\n  color: var(--xa-draft);\n}\n\n.card-container-fs[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex-wrap: wrap;\n}\n\n.scroll-btn-fs[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.workflow-header-card-fs[_ngcontent-%COMP%] {\n  height: auto !important;\n  justify-content: flex-start !important;\n}\n\n.workflow-row-container-fs[_ngcontent-%COMP%] {\n  align-items: stretch !important;\n}\n\n.fullscreen-tbody[_ngcontent-%COMP%] {\n  height: calc(100vh - 140px) !important;\n}\n\n.fullscreen-tbody[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 0.5625rem;\n  gap: 0.5625rem;\n  width: calc(100vw - 120px);\n}\n\n.alignment-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  display: flex;\n  background: #FFF;\n  box-shadow: 0px 1px 3px 0px rgba(26, 34, 51, 0.2);\n  box-shadow: 0px 1px 3px 0px var(--xa-light-gray, rgba(26, 34, 51, 0.2));\n}\n\n.alignment-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LWxvdW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFLSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUZOOztBQUdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFPRTtFQUNFLDRCQUFBO0VBQUEsaURBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBTEo7O0FBUUU7RUFDRSw0QkFBQTtFQUFBLGlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBU0U7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUEo7O0FBUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBTk47O0FBbUNNO0VBQ0UsbUJBQUE7QUFqQ1I7O0FBb0NNO0VBQ0UsMkVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBbENSOztBQXFDTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFuQ1I7O0FBdUNRO0VBQ0Usd0JBQUE7QUFyQ1Y7O0FBdUNRO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQXJDVjs7QUFzQ1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFBQSxjQUFBO0VBQ0EsWUFBQTtBQXBDWjs7QUFzQ1k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSx1REFBQTtFQUFBLDZFQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBcENkOztBQXFDYztFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0FBbkNoQjs7QUFvQ2dCO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFBQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbENsQjs7QUFzQ2M7RUFDRSxZQUFBO0FBcENoQjs7QUF1Q2M7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQXJDaEI7O0FBeUNZO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBdkNkOztBQXdDYztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUF0Q2hCOztBQXlDYztFQUNFLG1CQUFBO0VBQUEsb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBdkNoQjs7QUEwQ2dCO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUNBLGtCQUFBO0FBeENsQjs7QUEwQ2tCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7QUF4Q3BCOztBQTRDZ0I7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7RUFBQSx5REFBQTtBQTFDbEI7O0FBMkNrQjtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUF6Q3BCOztBQStDZ0I7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUE3Q2xCOztBQWdEZ0I7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBOUNsQjs7QUFnRGtCO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUE5Q3BCOztBQW1EZ0I7RUFDRSw0QkFBQTtFQUFBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFqRGxCOztBQW9EZ0I7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFsRGxCOztBQTJETTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFBQSx1REFBQTtFQUNBLGtCQUFBO0FBekRWOztBQTJEVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBekRaOztBQWlFRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUEvREo7O0FBaUVJO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsaURBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQS9ETjs7QUFtRUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFBQSxzQ0FBQTtFQUNBLHFCQUFBO0FBakVKOztBQWtFSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFoRU47O0FBa0VNO0VBQ0UsOEJBQUE7QUFoRVI7O0FBa0VRO0VBQ0UscUJBQUE7QUFoRVY7O0FBa0VVO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWhFZDs7QUFrRWM7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFoRWxCOztBQW1FYztFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUFBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQUEsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQUEsMENBQUE7QUFqRWxCOztBQXNFUTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQXBFVjs7QUF1RVE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQUEsY0FBQTtFQUNBLHNCQUFBO0FBckVWOztBQXVFVTtFQUNFLGdCQUFBO0FBckVaOztBQXdFVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXRFWjs7QUE2RUU7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTNFSjs7QUE0RUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUExRU47O0FBNEVNO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBMUVSOztBQTZFTTtFQUNFLGlDQUFBO0FBM0VSOztBQWdGSTtFQUNFLGVBQUE7QUE5RU47O0FBaUZJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQS9FTjs7QUFrRkk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGNBQUE7RUFBQSwrQkFBQTtBQWhGTjs7QUFrRk07RUFDRSxpQ0FBQTtFQUFBLHVEQUFBO0FBaEZSOztBQW1GTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFBQSxvQ0FBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFqRlI7O0FBb0ZNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsRlI7O0FBc0ZJO0VBQ0ksbUJBQUE7RUFBQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFwRlI7O0FBcUZRO0VBQ0UsaUNBQUE7RUFBQSx5REFBQTtFQUNBLG1CQUFBO0FBbkZWOztBQW9GVTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbEZaOztBQXNGUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFwRlo7O0FBcUZZO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUFBLHVEQUFBO0VBQ0Esa0JBQUE7QUFuRmhCOztBQXFGZ0I7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQW5GbEI7O0FBMEZFO0VBQ0UsMEJBQUE7QUF4Rko7O0FBNEZBO0VBQ0UsV0FBQTtBQXpGRjs7QUE0RkE7RUFDRSw4QkFBQTtBQXpGRjs7QUE0RkE7RUFDRSw0QkFBQTtFQUFBLGlEQUFBO0FBekZGOztBQTRGQTtFQUNFLHdCQUFBO0FBekZGOztBQTRGQTtFQUNFLGlDQUFBO0FBekZGOztBQTRGQTtFQUNFLGdDQUFBO0FBekZGOztBQTRGQTtFQUNFLDZCQUFBO0FBekZGOztBQTRGQTtFQUNFLGdDQUFBO0FBekZGOztBQTRGQTtFQUNFLHNCQUFBO0FBekZGOztBQTZGQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTFGRjs7QUE2RkE7RUFDRSx3QkFBQTtBQTFGRjs7QUE2RkE7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0FBMUZGOztBQTZGQTtFQUNFLCtCQUFBO0FBMUZGOztBQTZGQTtFQUNFLHNDQUFBO0FBMUZGOztBQTRGRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUFBLGNBQUE7RUFDQSwwQkFBQTtBQTFGSjs7QUE4RkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQUEsdUVBQUE7QUEzRko7O0FBNEZJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUExRk4iLCJmaWxlIjoid29ya2Zsb3ctbG91bmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kZWQtaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB3aWR0aDogMzBweDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MCk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ud29ya2Zsb3ctY29udGFpbmVyIHtcclxuXHJcbiAgLmxvdW5nZS1saXN0LWhlYWRlciB7XHJcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW46IDF2aCAxdnc7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAgLmxhc3QtdXBkYXRlZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHhcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5kdWUtZGF0ZS1zcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC43KSk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG5cclxuICAuaW5mby1zcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC43KSk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC53b3JrZmxvdy10YWJsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHggLSAydmggLSA0MHB4KTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDAuNXZ3O1xyXG4gICAgLmhvcml6b250YWwtd29ya2Zsb3ctdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIC8vIHRib2R5IHtcclxuICAgICAgLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC8vICAgdHI6bGFzdC1jaGlsZCB7XHJcbiAgICAgIC8vICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgLy8gICB9XHJcblxyXG4gICAgICAvLyAgIHRyOmZpcnN0LWNoaWxkIHtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIHRyIHtcclxuICAgICAgLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAvLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAvLyAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIHRoLkdyZWVuIHtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ncmVlbi1tZWRpdW0pO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyB0aC5SZWQge1xyXG4gICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWdyZWVuLW1lZGl1bSk7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIHRkIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmlnaHQtYm9yZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzFBMjIzMzMzIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMnB4IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE5NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJpZ2h0LWJvcmRlcjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5qb2ItaXRlbS1yb3cge1xyXG4gICAgICAgIC5qb2ItaXRlbS1jYXJkczpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5qb2ItaXRlbS1jYXJkcyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMXZoKTtcclxuICAgICAgICAgIG1hcmdpbjogMC41dmggMDtcclxuICAgICAgICAgIC53b3JrZmxvdy1yb3ctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiAwLjU2MjVyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIC53b3JrZmxvdy1oZWFkZXItY2FyZCB7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDVweDtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDNweCB2YXIoLS14YS1saWdodC1ncmF5LCByZ2JhKDI2LCAzNCwgNTEsIDAuMikpO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMjA1cHg7XHJcbiAgICAgICAgICAgICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUsICNGRkZGRkYpO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAud29ya2Zsb3ctZGV0YWlscy1jYXJkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXdoaXRlLCAjRkZGRkZGKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuZGV0YWlsLWNhcmQtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgLnJlcGFpci1pdGVtcy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IDAuMjV2aDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1saWdodGVyLWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC4xKSk7XHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC53b3JrZmxvdy1yZXBhaXItaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMS42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMS42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmR1ZS1kYXRlLXNwYW4tY3VzdG9tZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5LCByZ2JhKDI2LCAzNCwgNTEsIDAuNykpO1xyXG4gICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc3RhdHVzLXNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXBhaXItaXRlbXMge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTZweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYm9sZC1ncmF5LCByZ2JhKDI2LCAzNCwgNTEsIDAuMDUpKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4gIC5uby1kYXRhLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG5cclxuICAgIC5uby1kYXRhLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5LCByZ2JhKDI2LCAzNCwgNTEsIDAuNykpO1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mdWxsc2NyZWVuIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtcHJpbWFyeSwgIzFCMDNBMyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1dnc7XHJcbiAgICAubG91bmdlLWhlYWRlciB7XHJcbiAgICAgIGhlaWdodDogNS4wNjI1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuXHJcbiAgICAgIC5sb3VuZ2UtaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgLnhhLWxvZ28td3JhcHBlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgLm1lbnUtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAub3JnLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1kYXJrLCAjMDAwKTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDRweDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5LCByZ2JhKDI2LCAzNCwgNTEsIDAuMikpO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXdoaXRlLCAjRkZGRkZGKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvdW5nZS10aXRsZS13cmFwcGVyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNTYzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRhdGUtY29udGFpbmVyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBnYXA6IDAuNDM3NXJlbTtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgLmxvdW5nZS1kYXRlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb3VuZ2UtbGFzdC1yZWZyZXNoIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnZlcnRpY2FsLXdvcmtmbG93LXRhYmxlIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4IC0gMnZoIC0gNDBweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMC4zNzV2dztcclxuICAgIHRhYmxlIHtcclxuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGNEY1RkQ7XHJcblxyXG4gICAgICB0aGVhZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjRGNUZEO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aCwgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMC4zNzV2dyAwLjc1dncgMC4zNzV2dztcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDEycHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSwgI0ZGRkZGRik7XHJcblxyXG4gICAgICAmLnJlcGFpci1ub3Qtc3RhcnRlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtbGlnaHQtZ3JheSwgcmdiYSgyNiwgMzQsIDUxLCAwLjIpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvdW50IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS13aGl0ZSwgI0ZGRkZGRik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLCAjMDAwKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZXBhaXItY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS13aGl0ZSwgI0ZGRkZGRik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjV2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHNjcm9sbC1tYXJnaW4tdG9wOiAxMzBweDtcclxuICAgICAgICAuaW1nLWNvbnRhaW5lciB7ICAgICAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtbGlnaHRlci1ncmF5LCByZ2JhKDI2LCAzNCwgNTEsIDAuMSkpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlcGFpci1pdGVtcy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDAuMjV2dztcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAucmVwYWlyLWl0ZW1zIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJvbGQtZ3JheSwgcmdiYSgyNiwgMzQsIDUxLCAwLjA1KSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZ1bGxzY3JlZW4tdGFibGUge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3ZnLTE3cHgge1xyXG4gIHdpZHRoOiAxN3B4O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IC5hZGRlbmRhLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zcGFuLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC43KSk7XHJcbn1cclxuXHJcbi5BcHByb3ZlZCB7XHJcbiAgY29sb3I6IHZhcigtLXhhLWFwcHJvdmUpO1xyXG59XHJcblxyXG4uUGVuZGluZ0FwcHJvdmFsIHtcclxuICBjb2xvcjogdmFyKC0teGEtcGVuZGluZy1hcHByb3ZhbCk7XHJcbn1cclxuXHJcbi5SZXBhaXJFc3RpbWF0aW9uIHtcclxuICBjb2xvcjogdmFyKC0teGEtcmVwYWlyLWVzdGltYXRlKTtcclxufVxyXG5cclxuLlVwbG9hZFBob3RvcyB7XHJcbiAgY29sb3I6IHZhcigtLXhhLXVwbG9hZC1waG90byk7XHJcbn1cclxuXHJcbi5VcGxvYWREb2N1bWVudHMge1xyXG4gIGNvbG9yOiB2YXIoLS14YS11cGxvYWQtZG9jdW1lbnQpO1xyXG59XHJcblxyXG4uRHJhZnQge1xyXG4gIGNvbG9yOiB2YXIoLS14YS1kcmFmdCk7XHJcbn1cclxuXHJcbi8vIEZ1bGxzY3JlZW4gQ2xhc3Nlc1xyXG4uY2FyZC1jb250YWluZXItZnMge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uc2Nyb2xsLWJ0bi1mcyB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud29ya2Zsb3ctaGVhZGVyLWNhcmQtZnMge1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud29ya2Zsb3ctcm93LWNvbnRhaW5lci1mcyB7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ1bGxzY3JlZW4tdGJvZHkge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE0MHB4KSAhaW1wb3J0YW50O1xyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC41NjI1cmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMjBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYWxpZ25tZW50LWJ0biB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHZhcigtLXhhLWxpZ2h0LWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC4yKSk7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    40712:
    /*!************************************************************************!*\
      !*** ./src/app/modules/repair/workflow/workflow/workflow.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WorkflowComponent": function WorkflowComponent() {
          return (
            /* binding */
            _WorkflowComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      70160);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      34122);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      53399);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      75249);
      /* harmony import */


      var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/config/route-mapper/repair-status-mapper */
      93620);
      /* harmony import */


      var src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/workflow/workflow.service */
      71923);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/case/case.service */
      38709);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../helper/directive/has-permission.directive */
      22406);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../widgets/chq-input/chq-input.component */
      90082);
      /* harmony import */


      var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../widgets/chq-button/chq-button.component */
      36978);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../widgets/chq-customloader/chq-customloader.component */
      48262);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */
      93077);

      var _c0 = ["filter"];

      function WorkflowComponent_chq_button_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_chq_button_24_Template_chq_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r4.openFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx_r0.filterButton);
        }
      }

      var _c1 = function _c1(a0, a1, a2, a3, a4) {
        return [a0, a1, a2, a3, a4];
      };

      function WorkflowComponent_div_25_th_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "xaCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r8 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background-color", items_r8.Color);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](items_r8.WaterfallRepairs.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](8, 5, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](11, _c1, items_r8.TotalAmount, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](items_r8.JobName);
        }
      }

      function WorkflowComponent_div_25_td_7_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_div_25_td_7_mat_card_1_Template_a_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);

            var repair_r13 = restoredCtx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

            return ctx_r15.bookingStatusUrl(repair_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("load", function WorkflowComponent_div_25_td_7_mat_card_1_Template_img_load_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);

            var repair_r13 = restoredCtx.$implicit;
            return repair_r13.isloaded = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "chq-customloader", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "mat-icon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "mat-icon", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "mat-icon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "mat-icon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "lowercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var repair_r13 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", repair_r13.ImageUrl !== null && repair_r13.ImageUrl !== "" ? repair_r13.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showLoading", !repair_r13.isloaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 19, repair_r13.Assignees.length === 0 ? "No Assignee" : repair_r13.Assignees.length > 1 ? "Multi Assignees" : "Single Assignee"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", repair_r13.Assignees.length > 1 ? "multi-users" : "single-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r13.Assignees.length === 0 ? "dark-gray-disabled" : "black");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 21, repair_r13.JobStatusColor === "Transparent" ? "job_not_started" : repair_r13.JobStatusColor === "Green" ? "job_start_today" : "job_start_in_past"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r13.JobStatusColor === "Transparent" ? "dark-gray-disabled" : repair_r13.JobStatusColor === "Green" ? "green-medium" : "dark-red2");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", ctx_r12.PartTypetoolTip(repair_r13.PartGeneralStatus));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", ctx_r12.PartTypeIcon(repair_r13.PartGeneralStatus));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 23, repair_r13.IsAttentionRequired ? "attention_required" : "attention_not_required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r13.IsAttentionRequired === null ? "dark-gray-disabled" : repair_r13.IsAttentionRequired ? "dark-red2" : "dark-gray-disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 25, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 27, repair_r13.LastestTaskUpdatedRepairType ? repair_r13.LastestTaskUpdatedRepairType : "Others")));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", ctx_r12.jobIconDictionary[repair_r13.LastestTaskUpdatedRepairType] ? ctx_r12.jobIconDictionary[repair_r13.LastestTaskUpdatedRepairType] : "gears");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", "black");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 29, repair_r13.IsTowedIn ? "towed_in" : "not_towed_in"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "towing");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r13.IsTowedIn ? "black" : "dark-gray-disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 31, "due_out"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 33, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](30, 35, repair_r13.BookingOutDate, "dd/MM/yy HH:mm")));
        }
      }

      function WorkflowComponent_div_25_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, WorkflowComponent_div_25_td_7_mat_card_1_Template, 31, 38, "mat-card", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", items_r10.WaterfallRepairs);
        }
      }

      function WorkflowComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "table", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "thead", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, WorkflowComponent_div_25_th_4_Template, 11, 17, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, WorkflowComponent_div_25_td_7_Template, 2, 1, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.workflowData);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.workflowData);
        }
      }

      function WorkflowComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 2, "no_result_found"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
        }
      }

      var _WorkflowComponent = /*#__PURE__*/function () {
        /**
         * constructor.
         * @constructor
         * @param {WorkflowService} workflowService
         * @param {commonService} commonService
         * @param {caseService} caseService
         * @param {formBuilder} formBuilder
         */
        function _WorkflowComponent(workflowService, router, commonService, caseService, translateService, formBuilder) {
          _classCallCheck(this, _WorkflowComponent);

          this.workflowService = workflowService;
          this.router = router;
          this.commonService = commonService;
          this.caseService = caseService;
          this.translateService = translateService;
          this.formBuilder = formBuilder;
          this.totalCost = 0;
          this.totalCount = 0;
          this.workflowData = [];
          this.CallingAPI = false;
          this.IntervalGetWorkflow = null;
          this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
          this.userIsBM = false;
          this.filterButton = {
            label: 'filter',
            type: 'outline',
            icon: 'filter'
          };
          this.filterForm = this.formBuilder.group({
            OrgName: [],
            CustomerId: []
          });
          this.applyButton = {
            label: 'apply',
            type: 'primary'
          };
          this.resetButton = {
            label: 'reset_all',
            type: 'outline'
          };
          this.filterModal = [{
            placeHolder: 'select_organization',
            label: 'organization',
            name: 'OrgName',
            value: '',
            type: 'select',
            displayValue: 'label',
            fieldValue: 'value',
            options: [],
            isMultiSelect: false
          }, {
            placeHolder: 'select_type',
            label: 'customer_name',
            name: 'CustomerId',
            value: '',
            type: 'select',
            displayValue: 'label',
            fieldValue: 'value',
            options: [],
            isMultiSelect: true
          }];
          this.filterDataLoaded = false;
          this.repairSizeColors = {
            'sm': 'bg-light-blue',
            's': 'bg-light-blue',
            'l': 'bg-light-green text-white',
            'm': 'bg-light-pink text-white',
            'xl': 'bg-dark-red text-white'
          };
          this.settingsButtonModel = {
            label: 'filter',
            type: 'outline',
            icon: 'filter',
            width: '13px',
            height: '13px'
          };
          this.jobIconDictionary = {
            'Body': 'car',
            'Paint': 'paint-nozzle',
            'Mechanical': 'mechanical',
            'Electrical': 'electric',
            'Tires': 'tire',
            'Preparation': 'car-roof',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Check In': 'checkbox-open',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Repair': 'door-panel',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Fitup': 'door-panel',
            'Polish': 'car-paint',
            'Detailing': 'car-cleaning',
            'Maintenance': 'maintenance',
            'Diagnosis': 'diagnosis',
            'Others': 'gears'
          };
          this.subs = [];
          this.i18n = this.commonService.geti18nInfo();
        }
        /**
         * ngOnInit
         */


        _createClass(_WorkflowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this46 = this;

            this.commonService.userProfileData.subscribe(function (res) {
              var _a, _b, _c;

              _this46.userDetail = res === null || res === void 0 ? void 0 : res.data;
              _this46.userIsBM = (_a = _this46.userDetail) === null || _a === void 0 ? void 0 : _a.roleDetail.some(function (x) {
                return x.name == 'Bodyshop Manager';
              });

              if ((_c = (_b = _this46.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.id) {
                _this46.filterForm.get('OrgName').setValue(_this46.userDetail.organizationDetail.id);
              }
            });
          }
          /**
           * ngAfterViewInit
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this47 = this;

            this.getWorkflowDetails(this.generateFilterQuery());
            this.IntervalGetWorkflow = setInterval(function () {
              _this47.getWorkflowDetails(_this47.generateFilterQuery());
            }, 300000);
          }
          /**
           * getWorkflowData
           */

        }, {
          key: "getWorkflowDetails",
          value: function getWorkflowDetails(query) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this48 = this;

              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    this.commonService.showLoading();
                    this.CallingAPI = true;

                    if (query !== '?$filter=') {
                      this.subs.push(this.workflowService.getWorkflowDetailsWithQuery(query).subscribe({
                        next: function next(data) {
                          _this48.workflowData = data.value;

                          if (_this48.workflowData) {
                            _this48.workflowData.map(function (value) {
                              return value === null || value === void 0 ? void 0 : value.WaterfallRepairs.map(function (child) {
                                return child.isLoaded = false;
                              });
                            });
                          }

                          _this48.CallingAPI = false;
                          _this48.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');

                          _this48.getTotals();

                          _this48.commonService.hideLoading();
                        },
                        error: function error() {
                          _this48.CallingAPI = false;
                        }
                      }));
                    } else {
                      this.subs.push(this.workflowService.getWorkflowDetails().subscribe({
                        next: function next(data) {
                          _this48.workflowData = data.value;

                          if (_this48.workflowData) {
                            _this48.workflowData.map(function (value) {
                              return value === null || value === void 0 ? void 0 : value.WaterfallRepairs.map(function (child) {
                                return child.isLoaded = false;
                              });
                            });
                          }

                          _this48.CallingAPI = false;
                          _this48.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');

                          _this48.getTotals();

                          _this48.commonService.hideLoading();
                        },
                        error: function error() {
                          _this48.CallingAPI = false;
                        }
                      }));
                    }

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
          /**
           * calculate totalCost and totalCount of all repairs
           */

        }, {
          key: "getTotals",
          value: function getTotals() {
            var _this49 = this;

            this.totalCost = 0;
            this.totalCount = 0;
            this.workflowData.forEach(function (item) {
              _this49.totalCount += item.WaterfallRepairs.length;
              item.WaterfallRepairs.forEach(function (itm) {
                _this49.totalCost += itm.EstimateCost;
              });
            });
          }
          /**
           * current_date_format
           * return date format
           * example 28 Wednesday, of June 2023
           *
           * @returns {string}
           */

        }, {
          key: "current_date_format",
          value: function current_date_format() {
            return dayjs__WEBPACK_IMPORTED_MODULE_0__().format('D dddd, of MMMM YYYY');
          }
          /**
           * pull data and open filter panel
           */

        }, {
          key: "openFilter",
          value: function openFilter() {
            var _this50 = this;

            if (this.filterDataLoaded) {
              this.filter.open();
            } else {
              this.commonService.showLoading();
              (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([this.getOrgIfBM(), this.workflowService.getCustomer(this.userDetail.organizationDetail.id)]).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(function (_ref9) {
                var _ref10 = _slicedToArray(_ref9, 2),
                    orgList = _ref10[0],
                    CustomerList = _ref10[1];

                return {
                  orgList: orgList,
                  CustomerList: CustomerList
                };
              })).subscribe(function (result) {
                var _a, _b, _c, _d, _e, _f;

                if (_this50.userIsBM) {
                  _this50.filterModal[0] = Object.assign(Object.assign({}, _this50.filterModal[0]), {
                    selectedOption: {
                      'label': (_a = _this50.userDetail) === null || _a === void 0 ? void 0 : _a.organizationDetail.name,
                      'value': (_b = _this50.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail.id
                    },
                    options: result.orgList.data.map(function (x) {
                      return {
                        label: x.name,
                        value: x.id
                      };
                    })
                  });
                } else {
                  _this50.filterModal[0] = Object.assign(Object.assign({}, _this50.filterModal[0]), {
                    selectedOption: {
                      'label': (_c = _this50.userDetail) === null || _c === void 0 ? void 0 : _c.organizationDetail.name,
                      'value': (_d = _this50.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.id
                    },
                    options: [{
                      'label': (_e = _this50.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.name,
                      'value': (_f = _this50.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id
                    }],
                    disabled: true
                  });
                }

                _this50.filterModal[1] = Object.assign(Object.assign({}, _this50.filterModal[1]), {
                  options: result.CustomerList.filter(function (value, index, self) {
                    return self.findIndex(function (o) {
                      return o.contactId === value.contactId;
                    }) === index;
                  }).map(function (x) {
                    var name = x.firstName + ' ' + x.lastName;
                    var label = x.isIndividual ? name : x.companyName;
                    var subLabel = x.isIndividual ? x.email : x.licenseNumber;
                    return {
                      label: x.isIndividual ? name : x.companyName,
                      subLabel: x.isIndividual ? x.email : x.licenseNumber,
                      value: x.id,
                      html: "<div class='workflow-customer-item'><span class='name'>".concat(label, "</span><span class='email'>").concat(subLabel, "</span></div>")
                    };
                  })
                });

                _this50.filter.open();

                _this50.commonService.hideLoading();

                _this50.filterDataLoaded = true;
              });
            }
          }
          /**
           * Check if user is bm , then call api otherwise return observable
           */

        }, {
          key: "getOrgIfBM",
          value: function getOrgIfBM() {
            if (this.userIsBM) {
              return this.caseService.getOrganizations();
            } else {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(null);
            }
          }
          /**
           * get customer list
           * @param orgId
           */

        }, {
          key: "getCustomer",
          value: function getCustomer(orgId) {
            var _this51 = this;

            this.commonService.showLoading();
            this.workflowService.getCustomer(orgId).subscribe({
              next: function next(data) {
                _this51.filterModal[1] = Object.assign(Object.assign({}, _this51.filterModal[1]), {
                  options: data.filter(function (value, index, self) {
                    return self.findIndex(function (o) {
                      return o.contactId === value.contactId;
                    }) === index;
                  }).map(function (x) {
                    var name = x.firstName + ' ' + x.lastName;
                    var label = x.isIndividual ? name : x.companyName;
                    var subLabel = x.isIndividual ? x.email : x.licenseNumber;
                    return {
                      label: x.isIndividual ? name : x.companyName,
                      subLabel: x.isIndividual ? x.email : x.licenseNumber,
                      value: x.id,
                      html: "<div class='workflow-customer-item'><span class='name'>".concat(label, "</span><span class='email'>").concat(subLabel, "</span></div>")
                    };
                  })
                });
                console.log(_this51.filterModal[1]);

                _this51.commonService.hideLoading();
              },
              error: function error() {
                _this51.commonService.showLoading();
              }
            });
          }
          /**
          * function
          */

        }, {
          key: "generateFilterQuery",
          value: function generateFilterQuery() {
            var filterValue = this.filterForm.value;
            var query = '?$filter=';

            if (filterValue.OrgName && filterValue.OrgName > 0) {
              query += "OrgId eq ".concat(filterValue.OrgName);
            }

            if (filterValue.CustomerId && filterValue.CustomerId.length > 0) {
              if (query !== '?$filter=') {
                query += '&';
              } else {
                query = '?';
              }

              query += '$expand=WaterfallRepairs($filter=';
              query += "(".concat(filterValue.CustomerId.map(function (x) {
                return 'CustomerId eq ' + x + '';
              }).join(' or '), "))");
            }

            return query;
          }
          /**
           *
           * @param output
           */

        }, {
          key: "onFormUpdate",
          value: function onFormUpdate(output) {
            if (output.name === 'CustomerId') {
              this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), {
                selectedOption: output.value
              });
              this.filterForm.get(output.name).setValue(output.value.map(function (x) {
                return x.value;
              }));
            } else if (output.name === 'OrgName') {
              this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), {
                selectedOption: output.value
              });
              this.filterForm.get(output.name).setValue(output.value.value);

              if (output.value) {
                this.getCustomer(output.value.value);
              } else {
                this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), {
                  value: '',
                  selectedOption: '',
                  options: []
                });
              }
            }
          }
          /**
           *
           */

        }, {
          key: "applyFilter",
          value: function applyFilter() {
            this.workflowData = [];
            this.getWorkflowDetails(this.generateFilterQuery());
            this.filter.close();
          }
          /**
           *
           */

        }, {
          key: "resetFilter",
          value: function resetFilter() {
            var _a, _b, _c, _d, _e, _f;

            this.filterForm.reset();

            for (var index = 0; index < this.filterModal.length; index++) {
              this.filterModal[index] = Object.assign(Object.assign({}, this.filterModal[index]), {
                value: '',
                selectedOption: '',
                options: (_a = this.filterModal[index].options) === null || _a === void 0 ? void 0 : _a.map(function (x) {
                  x.checked = false;
                  return x;
                })
              });
            }

            if ((_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.id) {
              this.filterForm.get('OrgName').setValue(this.userDetail.organizationDetail.id);
              this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), {
                selectedOption: {
                  'label': (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.name,
                  'value': (_e = this.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.id
                }
              });
              this.getCustomer((_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id);
            }
          }
          /**
           * PartTypeIcon
           *  @param type {string}
           *
           *  @returns {string}
           */

        }, {
          key: "PartTypeIcon",
          value: function PartTypeIcon(type) {
            switch (type) {
              case 'NotOrdered':
                return 'parts-not-ordered';

              case 'Ordered':
                return 'parts-ordered';

              case 'Arrived':
                return 'parts-arrived';

              case 'OrderedPartially':
                return 'parts-ordered-partial';

              case 'ArrivedPartially':
                return 'parts-arrived-partial';

              default:
                return 'parts-not-ordered';
            }
          }
          /**
           * PartTypeIcon
           *  @param type {string}
           *
           *  @returns {string}
           */

        }, {
          key: "PartTypetoolTip",
          value: function PartTypetoolTip(type) {
            var Tooltip = '';

            switch (type) {
              case 'NotOrdered':
                Tooltip = 'parts_not_ordered';
                break;

              case 'Ordered':
                Tooltip = 'part_ordered';
                break;

              case 'Arrived':
                Tooltip = 'part_arrived';
                break;

              case 'OrderedPartially':
                Tooltip = 'part_ordered_partial';
                break;

              case 'ArrivedPartially':
                Tooltip = 'part_arrived_partial';
                break;

              default:
                Tooltip = 'parts_not_ordered';
                break;
            }

            return this.translateService.instant(Tooltip);
          }
          /**
           * booking url
           */

        }, {
          key: "bookingStatusUrl",
          value: function bookingStatusUrl(repair) {
            var Status = repair.Status,
                RepairGuid = repair.RepairGuid;
            var routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_1__.RepairStatusMapper[Status === null || Status === void 0 ? void 0 : Status.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_1__.RepairStatusMapper.others;
            routeToRedirect = routeToRedirect.replace('{{repairGUID}}', RepairGuid);
            this.router.navigate([routeToRedirect]);
          }
          /**
           * ngOnDestroy
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.forEach(function (sub) {
              return sub.unsubscribe();
            });
            clearInterval(this.IntervalGetWorkflow);
          }
        }]);

        return _WorkflowComponent;
      }();

      _WorkflowComponent.ɵfac = function WorkflowComponent_Factory(t) {
        return new (t || _WorkflowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__.WorkflowService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder));
      };

      _WorkflowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _WorkflowComponent,
        selectors: [["app-workflow"]],
        viewQuery: function WorkflowComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__.WorkflowService])],
        decls: 54,
        vars: 34,
        consts: [[1, "page-container", "workflow-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0"], [1, "fx-row", "date-filter-container"], [1, "text-muted", 2, "display", "block"], [1, "current-data"], [1, "", 3, "innerHTML"], [1, "updated-date"], [1, "flex", "align-center", 2, "gap", "25px", "margin-left", "auto"], [1, "flex", "align-center"], ["color", "dark-gray", 2, "margin-right", "8px"], ["svgIcon", "double-database", 2, "margin-right", "8px"], [3, "buttonModel", "click", 4, "chqPermission"], ["class", "fx-1", "style", "overflow: auto;", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [3, "hasBackdrop"], [1, "filter-sidenav", 3, "mode", "position"], ["filter", ""], [1, "filter-container"], [1, "header"], [1, "title"], [1, "action"], [3, "click"], ["color", "white", 3, "svgIcon"], [1, "form-container", 3, "formGroup"], [1, "row"], [1, "col-12"], [3, "inputModel", "controlOutput"], [1, "customer-list-w", 3, "inputModel", "controlOutput"], [1, "footer"], [1, "col-6"], [3, "buttonModel", "click"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], [1, "fx-1", 2, "overflow", "auto"], [1, "workflow-table"], [1, "workflow-table-thead"], ["class", "right-border", 4, "ngFor", "ngForOf"], [1, "right-border"], [1, "workflow-header-card"], [1, ""], [1, "bg-white", "rounded-icon"], [1, "uppercase"], ["class", "workflow-details-card", 4, "ngFor", "ngForOf"], [1, "workflow-details-card"], [1, "detail-card-link", 3, "click"], [1, "img-container"], ["alt", "", 3, "src", "load"], [3, "showLoading"], [1, "workflow-repair-items", "flex", 2, "padding", "5px 0px", "gap", "5px"], ["matTooltipPosition", "above", 1, "repair-items", 2, "padding", "1px 6px", 3, "matTooltip"], [1, "svg-17px", 3, "svgIcon"], ["svgIcon", "clock2"], ["svgIcon", "flag-circle", 1, "svg-17px"], [1, "repairType-custom-class", 3, "svgIcon"], [3, "svgIcon"], [1, "due-date-span", 2, "margin-top", "6px"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
        template: function WorkflowComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "directions_car");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "xaCurrency");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, WorkflowComponent_chq_button_24_Template, 1, 1, "chq-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, WorkflowComponent_div_25_Template, 8, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, WorkflowComponent_div_26_Template, 9, 6, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-sidenav-container", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "mat-sidenav", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, " Filters ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_Template_button_click_35_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](29);

              return _r3.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "form", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "chq-input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function WorkflowComponent_Template_chq_input_controlOutput_40_listener($event) {
              return ctx.onFormUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "chq-input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function WorkflowComponent_Template_chq_input_controlOutput_43_listener($event) {
              return ctx.onFormUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "chq-button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_Template_chq_button_click_47_listener() {
              return ctx.applyFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "chq-button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_Template_chq_button_click_49_listener() {
              return ctx.resetFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 18, "current_date"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx.current_date_format(), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 20, "last_refreshed"), ": ", ctx.LastRefreshedDate, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.totalCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](23, 22, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](28, _c1, ctx.totalCost, ctx.i18n.currencySymbol, ctx.i18n.digitsInfo, ctx.i18n.locale, ctx.i18n.position)));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chqPermission", "workflow");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.totalCost > 0 && ctx.totalCount > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.workflowData.length === 0 || ctx.totalCost === 0 && ctx.totalCount === 0) && !ctx.CallingAPI);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasBackdrop", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", "over")("position", "end");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "cross");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.filterForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx.filterModal[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx.filterModal[1]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx.applyButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx.resetButton);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_5__.HasPermissionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenav, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_8__.CustomloaderComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_9__.XaCurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe],
        styles: [".mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: transparent;\n  z-index: 501 !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .mat-drawer-backdrop {\n  position: fixed;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav.filter-sidenav[_ngcontent-%COMP%] {\n  background-color: #F1F2F6;\n  width: 400px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  padding: calc(15px + 0.8vw);\n  padding-bottom: calc(55px + 0.8vw);\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 20px;\n  gap: 20px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 74px;\n  width: 74px;\n  max-width: 95%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .span-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  height: 14px;\n  line-height: 14px;\n  color: var(--xa-black-medium);\n  text-transform: none;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr.no-line[_ngcontent-%COMP%] {\n  border: none;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .two-per-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 133px !important;\n  width: auto !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 400px;\n  background-color: #F1F2F6;\n  z-index: 500;\n  height: 68px;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 92%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .customer-list-w[_ngcontent-%COMP%]     .checkbox-wrapper label {\n  display: flex;\n  align-items: center;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .workflow-customer-item .email {\n  display: block;\n  font-style: italic;\n  opacity: 0.7;\n}\n.workflow-table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: -25px;\n  background-color: var(--xa-popup-light-gray);\n  display: contents;\n}\n.workflow-table[_ngcontent-%COMP%]   .workflow-table-thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0px;\n  z-index: 9;\n  background-color: var(--xa-popup-light-gray);\n}\n.workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#1A223333 40%, rgba(255, 255, 255, 0) 0%);\n  background-position: top right;\n  background-size: 2px 35px;\n  width: 195px;\n  background-repeat: repeat-y;\n}\n.workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%]:last-child {\n  background-size: 0px;\n  padding-right: 0px;\n}\n.workflow-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  min-height: 330px;\n}\n.workflow-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.workflow-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 100px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: normal;\n  padding: 13px 14px;\n  margin: 16px auto;\n  margin-top: 0px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.workflow-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n.workflow-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0px;\n}\n.workflow-table[_ngcontent-%COMP%]   th.Green[_ngcontent-%COMP%] {\n  background-color: var(--xa-green-medium);\n}\n.workflow-table[_ngcontent-%COMP%]   th.Red[_ngcontent-%COMP%] {\n  background-color: var(--xa-green-medium);\n}\n.workflow-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.workflow-details-card[_ngcontent-%COMP%] {\n  width: 160px;\n  border-radius: 10px;\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  font-size: 10px;\n  margin: auto;\n  margin-bottom: 20px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: auto;\n  color: black;\n  text-align: center;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.workflow-details-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  max-height: 77px;\n  min-height: 77px;\n  object-fit: contain;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .workflow-repair-items[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  font-size: 12px;\n  line-height: 4px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .repairType-custom-class[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 18px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .due-date-span[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n  float: left;\n  padding-left: 3px;\n}\n.rounded-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 2px;\n  font-weight: bold;\n  margin-right: 10px;\n  position: relative;\n  left: 40%;\n}\n.workflow-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 76px - (calc(58px + 1.6vw)));\n}\n.workflow-container[_ngcontent-%COMP%]   .fx-0[_ngcontent-%COMP%]   .date-filter-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 15px 30px;\n}\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 8px;\n  gap: 8px;\n}\n.svg-17px[_ngcontent-%COMP%] {\n  width: 17px;\n}\n.main-content[_ngcontent-%COMP%]   .addenda-container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\nspan.text-muted[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.current-data[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.updated-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFHSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBRFI7QUFHUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQURaO0FBSVE7RUFDSSxrQkFBQTtBQUZaO0FBS1E7RUFDSSwyQkFBQTtFQUNBLGtDQUFBO0FBSFo7QUFNUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFKWjtBQU1ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKaEI7QUFRZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU5wQjtBQVFvQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBTnhCO0FBWVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQVZaO0FBWWdCO0VBQ0ksbUJBQUE7QUFWcEI7QUFhZ0I7RUFDSSxlQUFBO0FBWHBCO0FBYW9CO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBWHhCO0FBYXdCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFYNUI7QUFrQndCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFoQjVCO0FBc0JZO0VBQ0ksY0FBQTtBQXBCaEI7QUFzQmdCO0VBQ0ksWUFBQTtBQXBCcEI7QUF3Qlk7RUFDSSxXQUFBO0FBdEJoQjtBQTBCZ0I7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0FBeEJwQjtBQTZCUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUEzQlo7QUE2Qlk7RUFDSSxVQUFBO0FBM0JoQjtBQWdDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQTlCWjtBQW9DUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFsQ1o7QUF3Q0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0FBckNKO0FBdUNJO0VBQ0ksZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0FBckNSO0FBeUNJO0VBQ0ksMkVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBdkNSO0FBMENJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQXhDUjtBQTZDUTtFQUNJLGlCQUFBO0FBM0NaO0FBK0NJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBN0NSO0FBZ0RJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBOUNSO0FBZ0RRO0VBQ0ksWUFBQTtBQTlDWjtBQWlEUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBL0NaO0FBbURJO0VBQ0ksd0NBQUE7QUFqRFI7QUFvREk7RUFDSSx3Q0FBQTtBQWxEUjtBQXFESTtFQUNJLG1CQUFBO0FBbkRSO0FBdURBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFwREo7QUFzREk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFwRFI7QUF1REk7RUFDSSxrQkFBQTtBQXJEUjtBQXdESTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBdERSO0FBeURJO0VBQ0ksZUFBQTtBQXZEUjtBQTBESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBeERSO0FBMERRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF4RFo7QUEyRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXpEWjtBQTZESTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBM0RSO0FBK0RBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUE1REo7QUFnRUE7RUFDSSxpREFBQTtBQTdESjtBQWlFUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUEvRFo7QUFtRUk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBakVSO0FBbUVRO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUFqRVo7QUFzRUE7RUFDSSxXQUFBO0FBbkVKO0FBcUVBO0VBQ0ksOEJBQUE7QUFsRUo7QUFxRUE7RUFDSSwwQkFBQTtBQWxFSjtBQXFFQTtFQUNJLGVBQUE7QUFsRUo7QUFxRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFsRUoiLCJmaWxlIjoid29ya2Zsb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgei1pbmRleDogNTAxICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWJhY2tkcm9we1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXNpZGVuYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgICAgICYuZmlsdGVyLXNpZGVuYXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY2O1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGMoMTVweCArIDAuOHZ3KTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNTVweCArIDAuOHZ3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIC5pbnB1dC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2hlY2tib3gtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwYW4tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrYm94LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5uby1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1hdC1zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50d28tcGVyLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMzNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjJGNjtcclxuICAgICAgICAgICAgei1pbmRleDogNTAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmN1c3RvbWVyLWxpc3QtdyB7XHJcbiAgICAgICAgOjpuZy1kZWVwIC5jaGVja2JveC13cmFwcGVyIGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDo6bmctZGVlcCAud29ya2Zsb3ctY3VzdG9tZXItaXRlbSBcclxuICAgIHtcclxuICAgICAgICAuZW1haWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ud29ya2Zsb3ctdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcblxyXG4gICAgLndvcmtmbG93LXRhYmxlLXRoZWFke1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC5yaWdodC1ib3JkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMUEyMjMzMzMgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAycHggMzVweDtcclxuICAgICAgICB3aWR0aDogMTk1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1ib3JkZXI6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIC53b3JrZmxvdy1oZWFkZXItY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDExNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aC5HcmVlbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtZ3JlZW4tbWVkaXVtKTtcclxuICAgIH1cclxuXHJcbiAgICB0aC5SZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWdyZWVuLW1lZGl1bSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53b3JrZmxvdy1kZXRhaWxzLWNhcmQge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuZGV0YWlsLWNhcmQtbGluayB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNzdweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA3N3B4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmtmbG93LXJlcGFpci1pdGVtc3tcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0cHg7XHJcblxyXG4gICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVwYWlyVHlwZS1jdXN0b20tY2xhc3N7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kdWUtZGF0ZS1zcGFuIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIH1cclxufVxyXG5cclxuLnJvdW5kZWQtaWNvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDQwJTtcclxufVxyXG5cclxuXHJcbi53b3JrZmxvdy1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NnB4IC0gKGNhbGMoNThweCArIDEuNnZ3KSkpO1xyXG5cclxuICAgIC5meC0wIHtcclxuXHJcbiAgICAgICAgLmRhdGUtZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uby1kYXRhLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG5cclxuICAgICAgICAubm8tZGF0YS1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN2Zy0xN3B4e1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbn1cclxuLm1haW4tY29udGVudCAuYWRkZW5kYS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNwYW4udGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxufVxyXG5cclxuLmN1cnJlbnQtZGF0YSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi51cGRhdGVkLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    35493:
    /*!******************************************************!*\
      !*** ./src/app/services/message/messages.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessagesService": function MessagesService() {
          return (
            /* binding */
            _MessagesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _file_service_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../file-service/file.service */
      25001);

      var _MessagesService = /*#__PURE__*/function () {
        /**
         * constructor
         * @param http
         */
        function _MessagesService(http, fileService) {
          _classCallCheck(this, _MessagesService);

          this.http = http;
          this.fileService = fileService;
        }
        /**
         * send approval message
         */


        _createClass(_MessagesService, [{
          key: "sendApprovalMessage",
          value: function sendApprovalMessage(data, repairGuid) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/message/").concat(repairGuid, "/estimate-approval");
            return this.http.post(url, data);
          }
          /**
           * get message template
           */

        }, {
          key: "getMessageTemplate",
          value: function getMessageTemplate(repairId, domainId, id) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.xaAggregationApi, "/repaircommunicationtemplate/").concat(repairId, "/").concat(domainId, "/").concat(id);
            return this.http.get(url);
          }
          /**
           * set message
           */

        }, {
          key: "setMessage",
          value: function setMessage(body, repairId) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/message/").concat(repairId, "/send-message");
            return this.http.post(url, body);
          }
          /**
           * send customer message
           */

        }, {
          key: "sendFreeCommunicationMessage",
          value: function sendFreeCommunicationMessage(emailBody, reportProgress, observe) {
            var _a;

            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.messageApi, "/Message/email");
            var formData = new FormData();
            formData.append('ToEmail', (_a = emailBody.email) === null || _a === void 0 ? void 0 : _a.join(','));

            if (emailBody.cc) {
              formData.append('CCEmail', emailBody.cc);
            }

            formData.append('Content', emailBody.message);
            formData.append('Subject', emailBody.subject);
            formData.append('ObjectId', emailBody.objectId);

            if (emailBody.files && emailBody.files.length > 0) {
              emailBody.files.forEach(function (file) {
                formData.append('files', file);
              });
            }

            return this.fileService.uploadFile(url, formData, reportProgress, observe);
          }
        }]);

        return _MessagesService;
      }();

      _MessagesService.ɵfac = function MessagesService_Factory(t) {
        return new (t || _MessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_file_service_file_service__WEBPACK_IMPORTED_MODULE_1__.FileService));
      };

      _MessagesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _MessagesService,
        factory: _MessagesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    23864:
    /*!*******************************************************!*\
      !*** ./src/app/services/outbound/outbound.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OutboundService": function OutboundService() {
          return (
            /* binding */
            _OutboundService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _OutboundService = /*#__PURE__*/function () {
        /**
         * @constructor
         * @param {HttpClient} http
         */
        function _OutboundService(http) {
          _classCallCheck(this, _OutboundService);

          this.http = http;
        }
        /**
         * getDeparturesDetails
         * @param {string} query
         */


        _createClass(_OutboundService, [{
          key: "getDeparturesDetails",
          value: function getDeparturesDetails(query) {
            //return of(departuresData)
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/odata/departures?").concat(query);
            return this.http.get(url);
          }
          /**
           * setPickupDate
           * @param {string} date
           * @param {string} repairId
           */

        }, {
          key: "setPickupDate",
          value: function setPickupDate(repairId, date, isPickedup) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/departures/").concat(repairId, "/pickupdate");
            return this.http.put(url, {
              'pickUpDate': date,
              'isPickedUp': isPickedup
            });
          }
          /**
          * setPickupDate
          * @param {string} date
          * @param {string} repairId
          */

        }, {
          key: "getTaskDetails",
          value: function getTaskDetails(repairId, jobId) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/departures/tasks/").concat(repairId, "/").concat(jobId);
            return this.http.get(url);
          }
          /**
           * setRepairStatusComplete
           * @param {string} repairId
           */

        }, {
          key: "setRepairStatusComplete",
          value: function setRepairStatusComplete(repairId) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/repair/").concat(repairId, "/status");
            return this.http.put(url, {
              'status': 'Complete',
              'reason': 'repair complete'
            });
          }
        }]);

        return _OutboundService;
      }();

      _OutboundService.ɵfac = function OutboundService_Factory(t) {
        return new (t || _OutboundService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _OutboundService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _OutboundService,
        factory: _OutboundService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    71923:
    /*!*******************************************************!*\
      !*** ./src/app/services/workflow/workflow.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WorkflowService": function WorkflowService() {
          return (
            /* binding */
            _WorkflowService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _WorkflowService = /*#__PURE__*/function () {
        /**
         * @constructor
         * @param {HttpClient} http
         */
        function _WorkflowService(http) {
          _classCallCheck(this, _WorkflowService);

          this.http = http;
        }
        /**
           * getWaterfallDetails
           * @returns {Observable<any>}
           */


        _createClass(_WorkflowService, [{
          key: "getWorkflowDetails",
          value: function getWorkflowDetails() {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/odata/waterfall");
            return this.http.get(url);
          } // eslint-disable-next-line require-jsdoc

        }, {
          key: "getWorkflowDetailsWithQuery",
          value: function getWorkflowDetailsWithQuery(query) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/odata/waterfall").concat(query);
            return this.http.get(url);
          }
          /**
          * getDraftCustomer
          * @returns Observable
          */

        }, {
          key: "getCustomer",
          value: function getCustomer(id) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/waterfallcustomer?$filter=OrgId eq ").concat(id);
            return this.http.get(url);
          }
          /**
           * update attention
           * @param repairguid
           * @param obj
           * @returns
           */

        }, {
          key: "updateAttentionRequired",
          value: function updateAttentionRequired(repairguid) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/repair/").concat(repairguid);
            var obj = [{
              'path': 'isAttentionRequired',
              'op': 'replace',
              'value': 'false'
            }];
            return this.http.patch(url, obj);
          }
        }]);

        return _WorkflowService;
      }();

      _WorkflowService.ɵfac = function WorkflowService_Factory(t) {
        return new (t || _WorkflowService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _WorkflowService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _WorkflowService,
        factory: _WorkflowService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modules_repair_repair_module_ts-es5.js.map