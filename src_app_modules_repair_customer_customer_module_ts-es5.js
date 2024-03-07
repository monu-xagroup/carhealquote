(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_customer_customer_module_ts"], {
    /***/
    47941:
    /*!***********************************************************!*\
      !*** ./src/app/config/display/customer-details-config.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReapirTableConfig": function ReapirTableConfig() {
          return (
            /* binding */
            _ReapirTableConfig
          );
        },

        /* harmony export */
        "CasesTableConfig": function CasesTableConfig() {
          return (
            /* binding */
            _CasesTableConfig
          );
        }
        /* harmony export */

      });

      var _ReapirTableConfig = {
        columns: [{
          id: 'Id',
          sortable: true,
          header: {
            text: 'booking_id',
            tooltip: ''
          },
          selector: {
            field: 'RepairNumber'
          },
          widget: {
            type: 'text'
          },
          cellStyle: 'text-decoration: underline; color: var(--xa-primary);'
        }, {
          id: 'CreatedDate',
          sortable: true,
          header: {
            text: 'creation_date',
            tooltip: ''
          },
          selector: {
            field: 'CreatedDate'
          },
          widget: {
            type: 'dateTime'
          }
        }, {
          id: 'VehicleMake',
          sortable: true,
          header: {
            text: 'vehicle_make',
            tooltip: ''
          },
          selector: {
            field: 'VehicleMake'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'VehicleModel',
          sortable: true,
          header: {
            text: 'vehicle_model',
            tooltip: ''
          },
          selector: {
            field: 'VehicleModel'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'LicensePlateNumber',
          sortable: true,
          header: {
            text: 'license_plate',
            tooltip: ''
          },
          selector: {
            field: 'LicensePlateNumber'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'BookingType',
          sortable: true,
          header: {
            text: 'booking_type',
            tooltip: ''
          },
          selector: {
            field: 'BookingType'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'RepairType',
          sortable: true,
          header: {
            text: 'repair_type',
            tooltip: ''
          },
          selector: {
            field: 'RepairType'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'TotalInvoiceAmount',
          sortable: true,
          header: {
            text: 'total_amount_invoiced',
            tooltip: ''
          },
          selector: {
            field: 'FormattedTotalAmount'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'PaidAmount',
          sortable: true,
          header: {
            text: 'paid_amount',
            tooltip: ''
          },
          selector: {
            field: 'FormattedPaidAmount'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'AmountDue',
          sortable: true,
          header: {
            text: 'due_amount',
            tooltip: ''
          },
          selector: {
            field: 'FormattedDueAmount'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'Status',
          sortable: true,
          header: {
            text: 'status',
            tooltip: ''
          },
          selector: {
            field: 'Status'
          },
          widget: {
            type: 'text'
          }
        }]
      };
      var _CasesTableConfig = {
        columns: [{
          id: 'Id',
          sortable: true,
          header: {
            text: 'estimate_id',
            tooltip: ''
          },
          selector: {
            field: 'EstimateNumber'
          },
          widget: {
            type: 'text'
          },
          cellStyle: 'text-decoration: underline; color: var(--xa-primary);'
        }, {
          id: 'CreatedDate',
          sortable: true,
          header: {
            text: 'creation_date',
            tooltip: ''
          },
          selector: {
            field: 'CreatedDate'
          },
          widget: {
            type: 'dateTime'
          }
        }, {
          id: 'VehicleMake',
          sortable: true,
          header: {
            text: 'vehicle_make',
            tooltip: ''
          },
          selector: {
            field: 'VehicleMake'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'VehicleModel',
          sortable: true,
          header: {
            text: 'vehicle_model',
            tooltip: ''
          },
          selector: {
            field: 'VehicleModel'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'LicensePlateNumber',
          sortable: true,
          header: {
            text: 'license_plate',
            tooltip: ''
          },
          selector: {
            field: 'LicensePlateNumber'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'TotalEstimateAmount ',
          sortable: true,
          header: {
            text: 'total_estimate_amount',
            tooltip: ''
          },
          selector: {
            field: 'FormattedTotalEstimateAmount'
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'EstimationStatus',
          sortable: true,
          header: {
            text: 'estimation_status',
            tooltip: ''
          },
          selector: {
            field: 'EstimationStatus'
          },
          widget: {
            type: 'text'
          }
        }]
      };
      /***/
    },

    /***/
    18869:
    /*!*********************************************************!*\
      !*** ./src/app/config/display/customer-table-config.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerTableConfig": function CustomerTableConfig() {
          return (
            /* binding */
            _CustomerTableConfig
          );
        },

        /* harmony export */
        "CustomerCompanyTableConfig": function CustomerCompanyTableConfig() {
          return (
            /* binding */
            _CustomerCompanyTableConfig
          );
        }
        /* harmony export */

      });

      var _CustomerTableConfig = {
        columns: [{
          id: 'ContactId',
          sortable: true,
          header: {
            text: 'id',
            tooltip: ''
          },
          selector: {
            field: 'ContactId'
          },
          widget: {
            type: 'text'
          },
          cellStyle: 'text-decoration: underline; color: var(--xa-primary);'
        }, {
          id: 'CreatedDate',
          sortable: true,
          header: {
            text: 'creation_date',
            tooltip: ''
          },
          selector: {
            field: 'CreatedDate'
          },
          widget: {
            type: 'dateTime'
          }
        }, {
          id: 'FirstName',
          sortable: true,
          selector: {
            field: 'FirstName'
          },
          header: {
            text: 'first_name',
            tooltip: ''
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'LastName',
          sortable: true,
          selector: {
            field: 'LastName'
          },
          header: {
            text: 'last_name',
            tooltip: ''
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'MobileNumber',
          sortable: true,
          selector: {
            field: 'MobileNumber'
          },
          header: {
            text: 'mobile_number',
            tooltip: ''
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'Email',
          sortable: true,
          selector: {
            field: 'Email'
          },
          header: {
            text: 'email_address',
            tooltip: ''
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'Amount',
          sortable: true,
          selector: {
            field: 'FormattedTotalAmount'
          },
          cellStyle: 'justify-content:center;',
          header: {
            text: 'total_amount_invoiced',
            tooltip: ''
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'AmountReceived',
          sortable: true,
          cellStyle: 'justify-content:center;',
          selector: {
            field: 'FormattedPaidAmount'
          },
          header: {
            text: 'paid_amount',
            tooltip: ''
          },
          widget: {
            type: 'text'
          }
        }, {
          id: 'AmountDue',
          sortable: true,
          cellStyle: 'justify-content:center;',
          selector: {
            field: 'FormattedDueAmount'
          },
          header: {
            text: 'due_amount',
            tooltip: ''
          },
          widget: {
            type: 'html'
          }
        }]
      };
      var _CustomerCompanyTableConfig = {
        columns: [{
          id: 'ContactId',
          sortable: true,
          header: {
            text: 'id',
            tooltip: ''
          },
          selector: {
            field: 'ContactId'
          },
          widget: {
            type: 'text'
          },
          cellStyle: 'text-decoration: underline; color: var(--xa-primary);'
        }, {
          id: 'CreatedDate',
          sortable: true,
          header: {
            text: 'creation_date',
            tooltip: ''
          },
          selector: {
            field: 'CreatedDate'
          },
          widget: {
            type: 'dateTime'
          }
        }, {
          id: 'CompanyName',
          sortable: true,
          selector: {
            field: 'FormattedCompanyName'
          },
          header: {
            text: 'company_name',
            tooltip: ''
          },
          widget: {
            type: 'html'
          }
        }, {
          id: 'Amount',
          sortable: true,
          selector: {
            field: 'FormattedTotalAmount'
          },
          header: {
            text: 'total_amount_invoiced',
            tooltip: ''
          },
          widget: {
            type: 'text'
          },
          cellStyle: 'justify-content:center;'
        }, {
          id: 'AmountReceived',
          sortable: true,
          selector: {
            field: 'FormattedPaidAmount'
          },
          header: {
            text: 'paid_amount',
            tooltip: ''
          },
          widget: {
            type: 'text'
          },
          cellStyle: 'justify-content:center;'
        }, {
          id: 'AmountDue',
          sortable: true,
          selector: {
            field: 'FormattedDueAmount'
          },
          header: {
            text: 'due_amount',
            tooltip: ''
          },
          widget: {
            type: 'html'
          },
          cellStyle: 'justify-content:center;'
        }]
      };
      /***/
    },

    /***/
    89179:
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/repair/customer/customer-details/customer-details.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerDetailsComponent": function CustomerDetailsComponent() {
          return (
            /* binding */
            _CustomerDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      74672);
      /* harmony import */


      var src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../widgets/chq-paginator/chq-paginator.component */
      7772);
      /* harmony import */


      var src_app_config_display_customer_details_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/config/display/customer-details-config */
      47941);
      /* harmony import */


      var src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/model/menu */
      38588);
      /* harmony import */


      var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @microsoft/applicationinsights-web */
      72934);
      /* harmony import */


      var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/config/route-mapper/repair-status-mapper */
      93620);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/monitor-service/monitor.service */
      35196);
      /* harmony import */


      var src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/customer/customer.service */
      72541);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */
      93077);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */
      77782);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../widgets/chq-mat-table/chq-mat-table.component */
      63298);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function CustomerDetailsComponent_chq_tabs_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-tabs", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("menuItemClick", function CustomerDetailsComponent_chq_tabs_9_Template_chq_tabs_menuItemClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r4.navigate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", "button")("menuItems", ctx_r0.customerDetailsMenus);
        }
      }

      var _c0 = function _c0(a0, a1, a2, a3, a4) {
        return [a0, a1, a2, a3, a4];
      };

      function CustomerDetailsComponent_div_10_mat_accordion_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-expansion-panel", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("opened", function CustomerDetailsComponent_div_10_mat_accordion_1_Template_mat_expansion_panel_opened_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r8.panelOpenState = true;
          })("closed", function CustomerDetailsComponent_div_10_mat_accordion_1_Template_mat_expansion_panel_closed_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r10.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "xaCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "xaCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "xaCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.userDetails == null ? null : ctx_r6.userDetails.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 17, "contact_id"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 19, "creation_date"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](17, 21, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.createdDate, "dd/MM/YYYY hh:mm:ss"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 24, "total_invoiced"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](23, 26, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](54, _c0, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.amount, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 32, "paid_amount"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](29, 34, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](60, _c0, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.amountReceived, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 40, "due_amount"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](35, 42, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](66, _c0, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.amountDue, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](39, 48, "contact_name"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](44, 50, "contact_phone"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactPhoneNumber, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 52, "contact_email"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactEmail, "");
        }
      }

      function CustomerDetailsComponent_div_10_mat_accordion_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-expansion-panel", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("opened", function CustomerDetailsComponent_div_10_mat_accordion_2_Template_mat_expansion_panel_opened_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r11.panelOpenState = true;
          })("closed", function CustomerDetailsComponent_div_10_mat_accordion_2_Template_mat_expansion_panel_closed_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r13.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r7.userDetails == null ? null : ctx_r7.userDetails.firstName, " ", ctx_r7.userDetails == null ? null : ctx_r7.userDetails.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 8, "contact_id"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.userDetails == null ? null : ctx_r7.userDetails.contactId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 10, "email"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.userDetails.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 12, "phone_number"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.userDetails.mobileNumber, "");
        }
      }

      function CustomerDetailsComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CustomerDetailsComponent_div_10_mat_accordion_1_Template, 51, 72, "mat-accordion", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CustomerDetailsComponent_div_10_mat_accordion_2_Template, 22, 14, "mat-accordion", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.userType === "company");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.userType === "individual");
        }
      }

      function CustomerDetailsComponent_section_12_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "chq-paginator", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("paginationChange", function CustomerDetailsComponent_section_12_div_4_Template_chq_paginator_paginationChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r16.handlePaginationChangeReapir($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pagination", ctx_r14.paginationRepair);
        }
      }

      function CustomerDetailsComponent_section_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "chq-mat-table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CustomerDetailsComponent_section_12_div_4_Template, 3, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx_r2.tableConfigRepair)("tableData", ctx_r2.tableDataRepair)("cellClicked", ctx_r2.handleCellClickRepair)("sortChanged", ctx_r2.handleSortChangeRepair)("pageChanged", ctx_r2.pageChangedRepair)("i18n", ctx_r2.i18n);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.tableDataRepair == null ? null : ctx_r2.tableDataRepair.length) > 0 && ctx_r2.paginationRepair.count > ctx_r2.paginationRepair.pageSize);
        }
      }

      function CustomerDetailsComponent_section_13_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "chq-paginator", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("paginationChange", function CustomerDetailsComponent_section_13_div_4_Template_chq_paginator_paginationChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r20.handlePaginationChangeCase($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pagination", ctx_r18.paginationCase);
        }
      }

      function CustomerDetailsComponent_section_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "chq-mat-table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CustomerDetailsComponent_section_13_div_4_Template, 3, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx_r3.tableConfigCase)("tableData", ctx_r3.tableDataCase)("cellClicked", ctx_r3.handleCellClickCase)("sortChanged", ctx_r3.handleSortChangeCase)("pageChanged", ctx_r3.pageChangedCase)("i18n", ctx_r3.i18n);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r3.tableDataCase == null ? null : ctx_r3.tableDataCase.length) > 0 && ctx_r3.paginationCase.count > ctx_r3.paginationCase.pageSize);
        }
      }

      var PATHS = {
        repair: 'repair-order',
        cases: 'estimates'
      };
      var caseStatusMapper = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_3__.CaseStatusMapper;
      var repairStatusMapper = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_3__.RepairStatusMapper;

      var _CustomerDetailsComponent = /*#__PURE__*/function () {
        /**
          Constructor for the CustomerService class.
          @constructor
          @param {CustomerService} customerService - The CustomerService instance to be used in the constructor.
          @param {CommonService} commonService - The CommonService instance to be used in the constructor.
          @param {Router} router - The Router instance.
        */
        function _CustomerDetailsComponent(monitorService, customerService, route, commonService, router, xaCurrencyPipe) {
          var _this = this;

          _classCallCheck(this, _CustomerDetailsComponent);

          this.monitorService = monitorService;
          this.customerService = customerService;
          this.route = route;
          this.commonService = commonService;
          this.router = router;
          this.xaCurrencyPipe = xaCurrencyPipe;
          this.panelOpenState = false;
          this.pageChangedRepair = false;
          this.paginationRepair = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.defaultPagination;
          this.totalCountRepair = 0;
          this.configDataRepair = src_app_config_display_customer_details_config__WEBPACK_IMPORTED_MODULE_1__.ReapirTableConfig;
          this.pageChangedCase = false;
          this.paginationCase = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.defaultPagination;
          this.totalCountCase = 0;
          this.configDataCase = src_app_config_display_customer_details_config__WEBPACK_IMPORTED_MODULE_1__.CasesTableConfig;
          this.userDetails = {};
          this.customerId = '';
          this.uniqueId = '';
          this.userType = '';
          this.haveQuotePermissions = false;
          this.userDetailsLoading = false; // Tabs Menu

          this.customerDetailsMenus = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.customerDetailsMenus;
          this.activeTab = '';
          this.tabOptions = PATHS;
          /**
            @description Handles a cell click event for a repair table.
            @param {TableRowData} row - The row data for the clicked cell.
            @param {Partial} column - The column data for the clicked cell.
            @returns {void}
          */

          this.handleCellClickRepair = function (row, column) {
            var _a, _b;

            if (column.id === 'Id') {
              var id = (_b = (_a = row.find(function (ele) {
                return ele.id === column.id;
              })) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.value;

              if (id) {
                var clickedRawData = _this.tableDataRepair.find(function (ele) {
                  return ele.RepairNumber === id;
                });

                if (clickedRawData) {
                  var routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_3__.RepairStatusMapper[clickedRawData.Status.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_3__.RepairStatusMapper.others;

                  _this.router.navigate([routeToRedirect.replace('{{repairGUID}}', clickedRawData.RepairGuid)]);
                }
              }
            }
          };
          /**
            @description Handles a cell click event for a case.
            @param {TableRowData} row - The row data for the clicked cell.
            @param {Partial} column - The column data for the clicked cell.
            @returns {void}
          */


          this.handleCellClickCase = function (row, column) {
            var _a, _b;

            if (column.id === 'Id') {
              var id = (_b = (_a = row.find(function (ele) {
                return ele.id === column.id;
              })) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.value;

              if (id) {
                var clickedRawData = _this.tableDataCase.find(function (ele) {
                  return ele.EstimateNumber === id;
                });

                if (clickedRawData) {
                  var routeToRedirect = caseStatusMapper[clickedRawData.EstimationStatus.toLowerCase()] || caseStatusMapper.others;

                  _this.router.navigate([routeToRedirect.replace('{{caseGUID}}', clickedRawData.CaseGuid)]);
                }
              }
            }
          };
          /**
            A function that handles a change in the sorting of data for a repair table.
            @param {Sort} sort - The new sorting criteria.
            @returns {void}
          */


          this.handleSortChangeRepair = function (sort) {
            if (sort) {
              _this.paginationRepair = Object.assign(Object.assign({}, _this.paginationRepair), {
                orderBy: sort.active,
                sortDirection: sort.direction
              });

              _this.getRepairOrders();
            }
          };
          /**
            @description Handles a change in the sorting of data for a case table.
            @param {Sort} sort - The new sorting criteria.
            @returns {void}
          */


          this.handleSortChangeCase = function (sort) {
            if (sort) {
              _this.paginationCase = Object.assign(Object.assign({}, _this.paginationCase), {
                orderBy: sort.active,
                sortDirection: sort.direction
              });

              _this.getCases();
            }
          };

          this.i18n = this.commonService.geti18nInfo();
        }
        /**
          Lifecycle hook that is called after the component is initialized.
          @returns {Promise} A promise that resolves when the initialization is complete.
        */


        _createClass(_CustomerDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.monitorService.logEvent('ngOnInit', ['CustomerDetailsComponent', 'addenda-repair']);
                    this.commonService.userProfileData.subscribe(function (res) {
                      var _a, _b;

                      var automotiveServices = ((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.userPermission) === null || _b === void 0 ? void 0 : _b.automotiveServices) || [];
                      _this2.haveQuotePermissions = automotiveServices.find(function (ele) {
                        return ele.automotiveServiceName === 'Carheal Quote';
                      });
                    });
                    this.route.params.subscribe(function (params) {
                      _this2.customerId = params['contactId'];
                      _this2.uniqueId = params['id'];
                      _this2.userType = params['userType'];
                      _this2.activeTab = params['orderType'];
                      _this2.tableConfigRepair = _this2.configDataRepair;
                      _this2.tableConfigCase = _this2.configDataCase;
                      _this2.paginationRepair = Object.assign(Object.assign({}, _this2.paginationRepair), {
                        count: _this2.totalCountRepair,
                        currentPage: _CustomerDetailsComponent.currentPageRepair,
                        orderBy: 'CreatedDate',
                        sortDirection: 'desc'
                      });
                      _this2.paginationCase = Object.assign(Object.assign({}, _this2.paginationCase), {
                        count: _this2.totalCountCase,
                        currentPage: _CustomerDetailsComponent.currentPageCase,
                        orderBy: 'CreatedDate',
                        sortDirection: 'desc'
                      });
                      if (_this2.activeTab === PATHS.repair) _this2.getRepairOrders();else _this2.getCases();

                      _this2.getUserDetails();
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
          /**
            Get Customer details
            @returns {Promise} A promise that resolves when the repair orders are retrieved and the table data is updated.
          */

        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this3 = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.userType === 'company')) {
                      _context2.next = 5;
                      break;
                    }

                    this.userDetailsLoading = true;
                    return _context2.abrupt("return", (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(this.customerService.getCompanyDetails(this.customerId)).then(function (response) {
                      if (response === null || response === void 0 ? void 0 : response.data) {
                        _this3.userDetails = response.data;
                        if (!_this3.userDetails.amount) _this3.userDetails.amount = 0;
                        if (!_this3.userDetails.amountReceived) _this3.userDetails.amountReceived = 0;
                        if (!_this3.userDetails.amountDue) _this3.userDetails.amountDue = 0;
                        _this3.userDetailsLoading = false;
                      }
                    })["catch"](function (err) {
                      _this3.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);
                    }));

                  case 5:
                    this.userDetailsLoading = true;
                    return _context2.abrupt("return", (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(this.customerService.getCustomerDetails(this.uniqueId)).then(function (response) {
                      if (response === null || response === void 0 ? void 0 : response.data) {
                        _this3.userDetails = response.data;
                        _this3.userDetailsLoading = false;
                      }
                    })["catch"](function (err) {
                      _this3.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);
                    }));

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
          /**
            Retrieves repair orders from the customer service and updates the table data for the repair orders.
            @returns {Promise} A promise that resolves when the repair orders are retrieved and the table data is updated.
          */

        }, {
          key: "getRepairOrders",
          value: function getRepairOrders() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this4 = this;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    this.commonService.showLoading();
                    return _context3.abrupt("return", (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(this.customerService.getReapirOrders(this.customerId, this.userType, this.paginationRepair)).then(function (response) {
                      var result = response.value;
                      result.map(function (ele) {
                        ele.AmountDue = ele.TotalInvoiceAmount - ele.PaidAmount;
                        ele.FormattedTotalAmount = ele.TotalInvoiceAmount ? _this4.xaCurrencyPipe.transform(ele.TotalInvoiceAmount, _this4.i18n.currencySymbol, _this4.i18n.digitsInfo, _this4.i18n.locale, _this4.i18n.position) : '-';
                        ele.FormattedPaidAmount = ele.PaidAmount ? _this4.xaCurrencyPipe.transform(ele.PaidAmount, _this4.i18n.currencySymbol, _this4.i18n.digitsInfo, _this4.i18n.locale, _this4.i18n.position) : '-';
                        ele.FormattedDueAmount = ele.TotalInvoiceAmount ? _this4.xaCurrencyPipe.transform(ele.AmountDue, _this4.i18n.currencySymbol, _this4.i18n.digitsInfo, _this4.i18n.locale, _this4.i18n.position) : '-';
                      });
                      _this4.tableDataRepair = result;
                      _this4.paginationRepair = Object.assign(Object.assign({}, _this4.paginationRepair), {
                        count: response['@odata.count'] || 0
                      });

                      _this4.commonService.hideLoading();
                    })["catch"](function (err) {
                      _this4.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);

                      _this4.commonService.hideLoading();
                    }));

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
          /**
            Retrieves cases from the customer service and updates the table data with the response.
            @returns {Promise} A promise that resolves when the cases are retrieved and the table data is updated.
          */

        }, {
          key: "getCases",
          value: function getCases() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this5 = this;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    this.commonService.showLoading();
                    return _context4.abrupt("return", (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(this.customerService.getCases(this.customerId, this.userType, this.paginationCase)).then(function (response) {
                      var result = response.value;
                      result.map(function (ele) {
                        ele.FormattedTotalEstimateAmount = ele.TotalEstimateAmount ? _this5.xaCurrencyPipe.transform(ele.TotalEstimateAmount, _this5.i18n.currencySymbol, _this5.i18n.digitsInfo, _this5.i18n.locale, _this5.i18n.position) : '-';
                      });
                      _this5.tableDataCase = result;
                      _this5.paginationCase = Object.assign(Object.assign({}, _this5.paginationCase), {
                        count: response['@odata.count'] || 0
                      });

                      _this5.commonService.hideLoading();
                    })["catch"](function (err) {
                      _this5.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);

                      _this5.commonService.hideLoading();
                    }));

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
          /**
           * handlePaginationChange
           * @param event
           */

        }, {
          key: "handlePaginationChangeReapir",
          value: function handlePaginationChangeReapir(event) {
            var pagination = {
              pageSize: event.pageSize,
              offset: event.offset,
              currentPage: event.currentPage
            };
            this.paginationRepair.currentPage = event.currentPage;
            this.paginationRepair = Object.assign(Object.assign({}, this.paginationRepair), pagination);
            this.pageChangedRepair = true;
            this.getRepairOrders();
          }
          /**
           * handlePaginationChange
           * @param event
           */

        }, {
          key: "handlePaginationChangeCase",
          value: function handlePaginationChangeCase(event) {
            var pagination = {
              pageSize: event.pageSize,
              offset: event.offset,
              currentPage: event.currentPage
            };
            this.paginationCase.currentPage = event.currentPage;
            this.paginationCase = Object.assign(Object.assign({}, this.paginationCase), pagination);
            this.pageChangedCase = true;
            this.getCases();
          }
          /**
            Navigates to the specified menu item's URL using the Angular Router.
            @param {menuItem} item - The menu item to navigate to.
            @returns {void}
          */

        }, {
          key: "navigate",
          value: function navigate(item) {
            var url = item.url;

            if (this.userType && this.customerId) {
              this.router.navigate([url.replace('{userType}', this.userType).replace('{customerId}', this.customerId).replace('{id}', this.uniqueId)]);
            }
          }
          /**
            Navigates to the customer listing based on usertype using the Angular Router.
            @returns {void}
          */

        }, {
          key: "handleBackClick",
          value: function handleBackClick() {
            this.router.navigate(['/repair/customers/{userType}'.replace('{userType}', this.userType)]);
          }
        }]);

        return _CustomerDetailsComponent;
      }();

      _CustomerDetailsComponent.currentPageRepair = 1;
      _CustomerDetailsComponent.currentPageCase = 1;

      _CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) {
        return new (t || _CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.XaCurrencyPipe));
      };

      _CustomerDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _CustomerDetailsComponent,
        selectors: [["customer-details"]],
        decls: 19,
        vars: 11,
        consts: [[1, "main-customer-details", "fx-col"], [1, "header", "d-flex", "align-center", "position-relative", "fx-0"], [1, ""], [1, "back-section", "d-flex", "align-center", 3, "click"], [1, "cross", 3, "svgIcon"], [3, "mode", "menuItems", "menuItemClick", 4, "ngIf"], ["class", "user-details", 4, "ngIf"], [1, "table-section", "fx-1"], [4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [3, "mode", "menuItems", "menuItemClick"], [1, "user-details"], [3, "opened", "closed"], [1, "sub-heading"], [1, "expanded-sub-heading"], [1, "table-container"], [1, "table-wrapper"], [3, "config", "tableData", "cellClicked", "sortChanged", "pageChanged", "i18n"], ["class", "pagination-wrapper", 4, "ngIf"], [1, "pagination-wrapper"], [3, "pagination", "paginationChange"], ["paginator", ""]],
        template: function CustomerDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CustomerDetailsComponent_Template_div_click_3_listener() {
              return ctx.handleBackClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, CustomerDetailsComponent_chq_tabs_9_Template, 1, 2, "chq-tabs", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CustomerDetailsComponent_div_10_Template, 3, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, CustomerDetailsComponent_section_12_Template, 5, 7, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, CustomerDetailsComponent_section_13_Template, 5, 7, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "left-arrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 7, "back"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 9, ctx.userType), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.haveQuotePermissions);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userDetails && !ctx.userDetailsLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.tabOptions.repair);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.tabOptions.cases);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_8__.ChqTabsComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelTitle, _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_9__.ChqMatTableComponent, src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.ChqPaginatorComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.XaCurrencyPipe],
        styles: [".main-customer-details[_ngcontent-%COMP%] {\n  height: calc(100vh - (5px + 1.5vw) - (5px + 1.5vw + 58px + 1.6vw) - 76px);\n}\n.main-customer-details[_ngcontent-%COMP%]   .table-section[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.main-customer-details[_ngcontent-%COMP%]   .border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--xa-gray);\n}\n.main-customer-details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  min-height: 64px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .pagination-wrapper[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .back-section[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n  text-transform: capitalize;\n  cursor: pointer;\n}\n.main-customer-details[_ngcontent-%COMP%]   .back-section[_ngcontent-%COMP%]     mat-icon {\n  margin-left: 5px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  width: 32%;\n  position: absolute;\n  right: 0;\n  top: 9px;\n  z-index: 1;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 9px;\n  color: var(--xa-black-medium);\n  margin-bottom: 0px;\n  margin-top: 5px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n  opacity: 0.6;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .expanded-sub-heading[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 10px;\n  color: var(--xa-black-medium);\n  margin-bottom: 0px;\n  margin-top: 8px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .expanded-sub-heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n  opacity: 0.6;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  border-radius: 11px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 0 20px 16px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]     .mat-expansion-indicator::after {\n  color: var(--xa-black);\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  background: var(--xa-bold-gray);\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .mat-expanded[_ngcontent-%COMP%] {\n  background: var(--xa-white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5RUFBQTtBQUNKO0FBQUk7RUFDSSxnQkFBQTtBQUVSO0FBQUk7RUFDSSx1Q0FBQTtBQUVSO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFFSTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0FBQ1o7QUFHSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQURSO0FBRVE7RUFDSSxnQkFBQTtBQUFaO0FBRVE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFaO0FBQ1k7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFDaEI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQVo7QUFDWTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQUNoQjtBQUdRO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQURaO0FBR1E7RUFDSSxpQkFBQTtBQURaO0FBR1E7RUFDSSxtQkFBQTtBQURaO0FBR1E7RUFDSSxvQkFBQTtBQURaO0FBR1E7RUFDSSxzQkFBQTtBQURaO0FBR1E7RUFDSSwrQkFBQTtBQURaO0FBR1E7RUFDSSwyQkFBQTtBQURaIiwiZmlsZSI6ImN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jdXN0b21lci1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICg1cHggKyAxLjV2dykgLSAoNXB4ICsgMS41dncgKyA1OHB4ICsgMS42dncpIC0gNzZweCk7XHJcbiAgICAudGFibGUtc2VjdGlvbiB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIH1cclxuICAgIC5ib3JkZXItYm90dG9tIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0teGEtZ3JheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYmFjay1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICA6Om5nLWRlZXAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlci1kZXRhaWxzIHtcclxuICAgICAgICB3aWR0aDogMzIlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDlweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Yi1oZWFkaW5nIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZXhwYW5kZWQtc3ViLWhlYWRpbmcge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0LXBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ib2xkLWdyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWV4cGFuZGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtd2hpdGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    85537:
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/repair/customer/customer-list/customer-table.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerTableComponent": function CustomerTableComponent() {
          return (
            /* binding */
            _CustomerTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      74672);
      /* harmony import */


      var src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../widgets/chq-paginator/chq-paginator.component */
      7772);
      /* harmony import */


      var src_app_config_display_customer_table_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/config/display/customer-table-config */
      18869);
      /* harmony import */


      var src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/model/menu */
      38588);
      /* harmony import */


      var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @microsoft/applicationinsights-web */
      72934);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/monitor-service/monitor.service */
      35196);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/customer/customer.service */
      72541);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/case/case.service */
      38709);
      /* harmony import */


      var src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */
      93077);
      /* harmony import */


      var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/calendar/calendar.service */
      56785);
      /* harmony import */


      var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */
      77782);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../widgets/chq-dropdown/chq-dropdown.component */
      8851);
      /* harmony import */


      var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../widgets/chq-button/chq-button.component */
      36978);
      /* harmony import */


      var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../widgets/chq-input/chq-input.component */
      90082);
      /* harmony import */


      var _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../widgets/chq-mat-table/chq-mat-table.component */
      63298);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var _c0 = ["companyName"];
      var _c1 = ["workProvider"];

      function CustomerTableComponent_div_3_chq_dropdown_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "chq-dropdown", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function CustomerTableComponent_div_3_chq_dropdown_3_Template_chq_dropdown_selected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r9.selectFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dropdownModel", ctx_r7.dropdownModelCompany);
        }
      }

      function CustomerTableComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "chq-dropdown", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function CustomerTableComponent_div_3_Template_chq_dropdown_selected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r11.selectFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CustomerTableComponent_div_3_chq_dropdown_3_Template, 2, 1, "chq-dropdown", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "chq-button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "chq-button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dropdownModel", ctx_r0.dropdownModelFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.input.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r0.applyButtonModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r0.resetButtonModel);
        }
      }

      function CustomerTableComponent_div_4_chq_input_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "chq-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function CustomerTableComponent_div_4_chq_input_3_Template_chq_input_controlOutput_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r15.updateInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r14.nameTextBox);
        }
      }

      function CustomerTableComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "chq-dropdown", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function CustomerTableComponent_div_4_Template_chq_dropdown_selected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r17.selectFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CustomerTableComponent_div_4_chq_input_3_Template, 1, 1, "chq-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "chq-button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "chq-button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dropdownModel", ctx_r1.dropdownModelFilterPerson);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.input.personName);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r1.applyButtonModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r1.resetButtonModel);
        }
      }

      var _c2 = function _c2(a0, a1, a2, a3, a4) {
        return [a0, a1, a2, a3, a4];
      };

      function CustomerTableComponent_div_6_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "xaCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx_r19.dueAmountPersonClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](10, _c2, ctx_r19.totalDueAmountPerson, ctx_r19.i18n.currencySymbol, ctx_r19.i18n.digitsInfo, ctx_r19.i18n.locale, ctx_r19.i18n.position)));
        }
      }

      function CustomerTableComponent_div_6_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r20.totalDueAmountPerson);
        }
      }

      function CustomerTableComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, CustomerTableComponent_div_6_span_4_Template, 3, 16, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, CustomerTableComponent_div_6_span_5_Template, 2, 1, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, "total_due_amount"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.totalDueAmountPerson !== "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.totalDueAmountPerson === "-");
        }
      }

      function CustomerTableComponent_div_7_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "xaCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx_r21.dueAmountCompanyClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](10, _c2, ctx_r21.totalDueAmountCompany, ctx_r21.i18n.currencySymbol, ctx_r21.i18n.digitsInfo, ctx_r21.i18n.locale, ctx_r21.i18n.position)));
        }
      }

      function CustomerTableComponent_div_7_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r22.totalDueAmountCompany);
        }
      }

      function CustomerTableComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, CustomerTableComponent_div_7_span_4_Template, 3, 16, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, CustomerTableComponent_div_7_span_5_Template, 2, 1, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, "total_due_amount"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.totalDueAmountCompany !== "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.totalDueAmountCompany === "-");
        }
      }

      function CustomerTableComponent_div_9_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "chq-paginator", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("paginationChange", function CustomerTableComponent_div_9_div_3_Template_chq_paginator_paginationChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r25.handlePaginationChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pagination", ctx_r23.pagination);
        }
      }

      function CustomerTableComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "chq-mat-table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CustomerTableComponent_div_9_div_3_Template, 3, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx_r4.tableConfig)("tableData", ctx_r4.tableData)("sortChanged", ctx_r4.handleSortChange)("pageChanged", ctx_r4.pageChanged)("cellClicked", ctx_r4.handleCellClick)("i18n", ctx_r4.i18n);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r4.tableData == null ? null : ctx_r4.tableData.length) > 0 && ctx_r4.pagination.count > ctx_r4.pagination.pageSize);
        }
      }

      function CustomerTableComponent_div_10_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "chq-paginator", 31, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("paginationChange", function CustomerTableComponent_div_10_div_3_Template_chq_paginator_paginationChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

            return ctx_r29.handlePaginationChangeCompany($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pagination", ctx_r27.paginationCompany);
        }
      }

      function CustomerTableComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "chq-mat-table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CustomerTableComponent_div_10_div_3_Template, 3, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx_r5.tableConfigCompany)("tableData", ctx_r5.tableDataCompany)("sortChanged", ctx_r5.handleSortChangeCompany)("pageChanged", ctx_r5.pageChangedCompany)("cellClicked", ctx_r5.handleCellClickCompany)("i18n", ctx_r5.i18n);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r5.tableDataCompany == null ? null : ctx_r5.tableDataCompany.length) > 0 && ctx_r5.paginationCompany.count > ctx_r5.pagination.pageSize);
        }
      }

      var ACTIVE_PATHS = {
        COMPANY: 'company',
        PERSONAL: 'individual'
      };

      var _CustomerTableComponent = /*#__PURE__*/function () {
        /**
         * constructor
         * @param monitorService
         * @param commonService
         * @param tableDataSer
         */
        function _CustomerTableComponent(monitorService, commonService, tableDataSer, router, route, caseService, xaCurrencyPipe, calendarService) {
          var _this6 = this;

          _classCallCheck(this, _CustomerTableComponent);

          this.monitorService = monitorService;
          this.commonService = commonService;
          this.tableDataSer = tableDataSer;
          this.router = router;
          this.route = route;
          this.caseService = caseService;
          this.xaCurrencyPipe = xaCurrencyPipe;
          this.calendarService = calendarService; // Personal Customer list variables

          this.pageChanged = false;
          this.pagination = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.defaultPagination;
          this.configData = src_app_config_display_customer_table_config__WEBPACK_IMPORTED_MODULE_1__.CustomerTableConfig;
          this.textToSearch = '';
          this.input = {
            personName: false,
            companyName: false
          }; // Tabs Menu

          this.customerListMenus = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.customerListMenus;
          this.activeTab = '';
          this.activeTabOptions = ACTIVE_PATHS; // Company Customer list variables

          this.pageChangedCompany = false;
          this.paginationCompany = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.defaultPagination;
          this.configDataCompany = src_app_config_display_customer_table_config__WEBPACK_IMPORTED_MODULE_1__.CustomerCompanyTableConfig;
          this.workProviderFromBooking = [];
          this.selectedCompanyForFilter = []; // Extra Variables

          this.dueAmountPersonClass = '';
          this.dueAmountCompanyClass = '';
          this.totalDueAmountCompany = 0;
          this.totalDueAmountPerson = 0;
          this.showTotalDueAmountCompany = false;
          this.showTotalDueAmountPerson = false;
          this.applyButtonModel = {
            label: 'apply',
            type: 'disabled',
            icon: '',
            onclick: this.applyFilter.bind(this)
          };
          this.resetButtonModel = {
            label: 'reset_all',
            type: 'outline',
            icon: '',
            onclick: this.reSetFilter.bind(this)
          }; // Company Filter

          this.dropdownModelFilter = {
            options: [],
            placeHolder: 'select_type',
            label: 'select_type',
            name: 'filterDropdown',
            displayValue: 'label',
            selectedOption: {
              label: ''
            }
          };
          this.dropdownModelCompany = {
            options: [],
            placeHolder: 'company_name',
            label: 'company_name',
            name: 'companyDropdown',
            displayValue: 'companyName',
            keyFieldName: 'CompanyId',
            selectedOption: [],
            isMultiSelect: true
          }; //PERSONAL Filters

          this.dropdownModelFilterPerson = {
            options: [{
              label: 'Retail - Individual'
            }],
            placeHolder: 'select_type',
            label: 'select_type',
            name: 'filterDropdownPerson',
            displayValue: 'label',
            selectedOption: {
              label: ''
            }
          };
          this.nameTextBox = {
            placeHolder: 'customer_name',
            label: 'customer_name',
            name: 'name',
            type: 'text',
            value: '',
            required: false
          };
          /**
            Handles a change in the sorting of the customer data.
            @param {Sort} sort - The new sorting criteria.
            @returns {void}
          */

          this.handleSortChange = function (sort) {
            if (sort) {
              _this6.pagination = Object.assign(Object.assign({}, _this6.pagination), {
                orderBy: sort.active,
                sortDirection: sort.direction
              });

              _this6.getCustomers();
            }
          };
          /**
            Handles a change in the sorting of company customers.
            @param {Sort} sort - The new sorting criteria.
            @returns {void}
          */


          this.handleSortChangeCompany = function (sort) {
            if (sort) {
              _this6.paginationCompany = Object.assign(Object.assign({}, _this6.paginationCompany), {
                orderBy: sort.active,
                sortDirection: sort.direction
              });

              _this6.getCompanyCustomers();
            }
          };
          /**
            Handles a cell click event.
            @param {TableRowData} row - The row data.
            @param {Partial} column - The column data.
            @returns {void}
          */


          this.handleCellClick = function (row, column) {
            var _a, _b;

            if (column.id === 'ContactId') {
              var customerId = (_b = (_a = row.find(function (ele) {
                return ele.id === column.id;
              })) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.value;

              if (customerId) {
                var customerDetails = _this6.tableData.find(function (ele) {
                  return ele.ContactId === customerId;
                });

                if (customerDetails) _this6.commonService.customerDetails.next(customerDetails);
                if (customerId) _this6.router.navigate(["/repair/customers/individual/".concat(customerId, "/").concat(customerDetails.Id, "/repair-order")]);
              }
            }
          };
          /**
            Handles a cell click event for a company column.
            @param {TableRowData} row - The row data for the clicked cell.
            @param {Partial} column - The column data for the clicked cell.
            @returns {void}
          */


          this.handleCellClickCompany = function (row, column) {
            var _a, _b;

            if (column.id === 'ContactId') {
              var companyId = (_b = (_a = row.find(function (ele) {
                return ele.id === column.id;
              })) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.value;

              if (companyId) {
                var customerDetails = _this6.tableDataCompany.find(function (ele) {
                  return ele.ContactId === companyId;
                });

                if (customerDetails) _this6.commonService.customerDetails.next(customerDetails);
                if (companyId) _this6.router.navigate(["/repair/customers/company/".concat(companyId, "/").concat(customerDetails.Id, "/repair-order")]);
              }
            }
          };

          this.i18n = this.commonService.geti18nInfo();
        }
        /**
         * on init
         */


        _createClass(_CustomerTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.monitorService.logEvent('ngOnInit', ['CustomerTableComponent', 'addenda-repair']);
            this.tableConfig = this.configData;
            this.tableConfigCompany = this.configDataCompany;
            this.route.params.subscribe(function (params) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                var paginationInfo, responseB;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      this.activeTab = params['userType'];

                      if (!(this.activeTab === ACTIVE_PATHS.PERSONAL)) {
                        _context5.next = 8;
                        break;
                      }

                      this.pagination = Object.assign(Object.assign({}, this.pagination), {
                        count: 0,
                        currentPage: _CustomerTableComponent.currentPage,
                        orderBy: 'CreatedDate',
                        sortDirection: 'desc'
                      });
                      paginationInfo = {
                        currentPage: _CustomerTableComponent.currentPage,
                        offset: this.pagination.pageSize * (_CustomerTableComponent.currentPage - 1),
                        pageSize: this.pagination.pageSize
                      };
                      this.handlePaginationChange(paginationInfo);
                      this.getTotalDueAmountPerson();
                      _context5.next = 17;
                      break;

                    case 8:
                      this.paginationCompany = Object.assign(Object.assign({}, this.paginationCompany), {
                        count: 0,
                        currentPage: _CustomerTableComponent.currentPageCompnay,
                        orderBy: 'CreatedDate',
                        sortDirection: 'desc'
                      });
                      this.commonService.showLoading();
                      _context5.next = 12;
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.tableDataSer.getCompanyWorkProviders('$apply=groupby((CompanyOrgType))'));

                    case 12:
                      responseB = _context5.sent;

                      if (responseB && responseB.length > 0) {
                        this.workProviderFromBooking = responseB.map(function (ele) {
                          return ele.CompanyOrgType;
                        });
                      }

                      this.getCompanyCustomers();
                      this.getTotalDueAmountCompany();

                      if (!this.dropdownModelFilter.observable) {
                        this.dropdownModelFilter = Object.assign(Object.assign({}, this.dropdownModelFilter), {
                          observable: this.caseService.getProviders(),
                          onObservableLoad: this.onObservableLoadWorkProviderData.bind(this)
                        });
                        this.workProvider.dropdownModel.observable = this.caseService.getProviders();
                        this.workProvider.getObservable();
                      }

                    case 17:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, this);
              }));
            });
            this.subscription = this.commonService.userProfileData.subscribe(function (res) {
              _this7.userDetail = res === null || res === void 0 ? void 0 : res.data;
            });
          }
          /**
            @returns {void} ngOnDestroy for GenerateInvoicesComponent
          */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          /**
            Retrieves a list of customers for a company.
            @returns {Promise} A promise that resolves with the list of customers.
          */

        }, {
          key: "getCompanyCustomers",
          value: function getCompanyCustomers() {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this8 = this;

              var queryParams;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    this.commonService.showLoading();
                    queryParams = '';

                    if (((_a = this.selectedCompanyForFilter) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                      queryParams = "$filter=(".concat(this.selectedCompanyForFilter.map(function (x) {
                        return "ContactId eq ".concat(x.CompanyId);
                      }).join(' or '), ")");
                    }

                    return _context6.abrupt("return", (0, rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.tableDataSer.getCompanyCustomers(this.paginationCompany, queryParams)).then(function (response) {
                      var result = response.value;
                      result.map(function (ele) {
                        var dueAmountClass = '';
                        ele.AmountDue = ele.Amount - ele.AmountReceived;

                        if (ele.Amount && ele.AmountDue !== undefined) {
                          var dueAmountPrecent = ele.AmountDue * 100 / ele.Amount;
                          if (dueAmountPrecent >= 30) dueAmountClass = 'color-xa-dark-red';
                          if (dueAmountPrecent <= 10 && dueAmountPrecent > 0) dueAmountClass = 'col-xa-orange2';
                          if (dueAmountPrecent == 0) dueAmountClass = 'color-xa-repair-header';
                        }

                        ele.FormattedTotalAmount = ele.Amount ? _this8.xaCurrencyPipe.transform(ele.Amount, _this8.i18n.currencySymbol, _this8.i18n.digitsInfo, _this8.i18n.locale, _this8.i18n.position) : '-';
                        ele.FormattedPaidAmount = ele.AmountReceived ? _this8.xaCurrencyPipe.transform(ele.AmountReceived, _this8.i18n.currencySymbol, _this8.i18n.digitsInfo, _this8.i18n.locale, _this8.i18n.position) : '-';
                        ele.FormattedDueAmount = ele.Amount ? '<span class="' + dueAmountClass + '">' + _this8.xaCurrencyPipe.transform(ele.AmountDue, _this8.i18n.currencySymbol, _this8.i18n.digitsInfo, _this8.i18n.locale, _this8.i18n.position) : '-' + '</span>';
                        ele.FormattedCompanyName = ele.CompanyName ? "<span class=\"company-name\">".concat(ele.CompanyName).concat(ele.LicenseNumber ? '-<i>' + ele.LicenseNumber + '</i>' : '', "</span>") : '';
                      });
                      _this8.tableDataCompany = result;
                      _this8.paginationCompany = Object.assign(Object.assign({}, _this8.paginationCompany), {
                        count: response['@odata.count'] || 0
                      });

                      _this8.commonService.hideLoading();
                    })["catch"](function (err) {
                      _this8.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);

                      _this8.commonService.hideLoading();
                    }));

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
          /**
            Retrieves customer data from a table data service and sets it to the table data property.
            If an error occurs, the apply button type is set to primary and the loading spinner is hidden.
            @returns {Promise} A promise that resolves to the customer data or rejects with an error.
          */

        }, {
          key: "getCustomers",
          value: function getCustomers() {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this9 = this;

              var selectedFilter, queryParams, empName;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    selectedFilter = (_a = this.dropdownModelFilterPerson.selectedOption) === null || _a === void 0 ? void 0 : _a.label;
                    queryParams = '';
                    _context7.t0 = selectedFilter === null || selectedFilter === void 0 ? void 0 : selectedFilter.toLowerCase();
                    _context7.next = _context7.t0 === 'retail - individual' ? 5 : 7;
                    break;

                  case 5:
                    if (this.textToSearch != '') {
                      // To Fix typescript error convert the value to string by appending ''
                      empName = this.textToSearch + '';
                      queryParams = "$filter=(contains(tolower(FirstName),'".concat(empName.toLowerCase(), "')) or (contains(tolower(LastName),'").concat(empName.toLowerCase(), "'))");
                    }

                    return _context7.abrupt("break", 8);

                  case 7:
                    return _context7.abrupt("break", 8);

                  case 8:
                    this.commonService.showLoading();
                    return _context7.abrupt("return", (0, rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.tableDataSer.getCustomers(this.pagination, queryParams)).then(function (response) {
                      var result = response.value;
                      result.map(function (ele) {
                        var dueAmountClass = '';
                        ele.AmountDue = ele.Amount - ele.AmountReceived;

                        if (ele.Amount && ele.AmountDue !== undefined) {
                          var dueAmountPrecent = ele.AmountDue * 100 / ele.Amount;
                          if (dueAmountPrecent >= 30) dueAmountClass = 'color-xa-dark-red';
                          if (dueAmountPrecent <= 10 && dueAmountPrecent > 0) dueAmountClass = 'col-xa-orange2';
                          if (dueAmountPrecent == 0) dueAmountClass = 'color-xa-repair-header';
                        }

                        ele.FormattedTotalAmount = ele.Amount ? _this9.xaCurrencyPipe.transform(ele.Amount, _this9.i18n.currencySymbol, _this9.i18n.digitsInfo, _this9.i18n.locale, _this9.i18n.position) : '-';
                        ele.FormattedPaidAmount = ele.AmountReceived ? _this9.xaCurrencyPipe.transform(ele.AmountReceived, _this9.i18n.currencySymbol, _this9.i18n.digitsInfo, _this9.i18n.locale, _this9.i18n.position) : '-';
                        ele.FormattedDueAmount = ele.Amount && ele.AmountDue !== undefined ? '<span class="' + dueAmountClass + '">' + _this9.xaCurrencyPipe.transform(ele.AmountDue, _this9.i18n.currencySymbol, _this9.i18n.digitsInfo, _this9.i18n.locale, _this9.i18n.position) + '</span>' : '-';
                      });
                      _this9.tableData = result;
                      _this9.pagination = Object.assign(Object.assign({}, _this9.pagination), {
                        count: response['@odata.count'] || 0
                      });

                      _this9.commonService.hideLoading();
                    })["catch"](function (err) {
                      _this9.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);

                      _this9.commonService.hideLoading();
                    }));

                  case 10:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
          /**
            @returns {Promise} A promise that resolves to the customer data or rejects with an error.
          */

        }, {
          key: "getTotalDueAmountCompany",
          value: function getTotalDueAmountCompany() {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this10 = this;

              var query;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    this.showTotalDueAmountCompany = false;
                    query = '$apply=';

                    if (((_a = this.selectedCompanyForFilter) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                      query += "filter(".concat(this.selectedCompanyForFilter.map(function (x) {
                        return "ContactId eq ".concat(x.CompanyId);
                      }).join(' or '), ")/");
                    }

                    query += 'aggregate(Amount with sum as TotalAmount, AmountReceived with sum as TotalAmountReceived)';
                    return _context8.abrupt("return", (0, rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.tableDataSer.getTotalDueAmountCompany(query)).then(function (response) {
                      if (response && response[0]) {
                        _this10.showTotalDueAmountCompany = true;
                        _this10.dueAmountCompanyClass = '';
                        _this10.totalDueAmountCompany = response[0].TotalAmount ? response[0].TotalAmount - response[0].TotalAmountReceived : '-';

                        if (response[0].TotalAmount) {
                          var dueAmountPrecent = _this10.totalDueAmountCompany * 100 / response[0].TotalAmount;
                          if (dueAmountPrecent >= 30) _this10.dueAmountCompanyClass = 'color-xa-dark-red';
                          if (dueAmountPrecent <= 10 && dueAmountPrecent > 0) _this10.dueAmountCompanyClass = 'col-xa-orange2';
                          if (dueAmountPrecent == 0) _this10.dueAmountCompanyClass = 'color-xa-repair-header';
                        }
                      }
                    })["catch"](function (err) {
                      _this10.showTotalDueAmountCompany = true;

                      _this10.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);
                    }));

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }
          /**
            @returns {Promise} A promise that resolves to the customer data or rejects with an error.
          */

        }, {
          key: "getTotalDueAmountPerson",
          value: function getTotalDueAmountPerson() {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this11 = this;

              var query, selectedFilter, empName;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    this.showTotalDueAmountPerson = false;
                    query = '$apply=';
                    selectedFilter = (_a = this.dropdownModelFilterPerson.selectedOption) === null || _a === void 0 ? void 0 : _a.label;
                    _context9.t0 = selectedFilter === null || selectedFilter === void 0 ? void 0 : selectedFilter.toLowerCase();
                    _context9.next = _context9.t0 === 'retail - individual' ? 6 : 8;
                    break;

                  case 6:
                    if (this.textToSearch != '') {
                      // To Fix typescript error convert the value to string by appending ''
                      empName = this.textToSearch + '';
                      query += "filter(contains(tolower(FirstName),'".concat(empName.toLowerCase(), "') or contains(tolower(LastName),'").concat(empName.toLowerCase(), "'))/");
                    }

                    return _context9.abrupt("break", 9);

                  case 8:
                    return _context9.abrupt("break", 9);

                  case 9:
                    query += 'aggregate(Amount with sum as TotalAmount, AmountReceived with sum as TotalAmountReceived)';
                    return _context9.abrupt("return", (0, rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.tableDataSer.getTotalDueAmountPerson(query)).then(function (response) {
                      if (response && response[0]) {
                        _this11.showTotalDueAmountPerson = true;
                        _this11.dueAmountPersonClass = '';
                        _this11.totalDueAmountPerson = response[0].TotalAmount ? response[0].TotalAmount - response[0].TotalAmountReceived : '-';

                        if (response[0].TotalAmount) {
                          var dueAmountPrecent = _this11.totalDueAmountPerson * 100 / response[0].TotalAmount;
                          if (dueAmountPrecent >= 30) _this11.dueAmountPersonClass = 'color-xa-dark-red';
                          if (dueAmountPrecent <= 10 && dueAmountPrecent > 0) _this11.dueAmountPersonClass = 'col-xa-orange2';
                          if (dueAmountPrecent == 0) _this11.dueAmountPersonClass = 'color-xa-repair-header';
                        }
                      }
                    })["catch"](function (err) {
                      _this11.showTotalDueAmountPerson = true;

                      _this11.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);
                    }));

                  case 11:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
          /**
           * page change
           * @param event
           */

        }, {
          key: "handlePaginationChange",
          value: function handlePaginationChange(event) {
            var pagination = {
              pageSize: event.pageSize,
              offset: event.offset,
              currentPage: event.currentPage
            };
            this.pagination.currentPage = event.currentPage;
            this.pagination = Object.assign(Object.assign({}, this.pagination), pagination);
            this.pageChanged = true;
            this.getCustomers();
          }
          /**
           * page change
           * @param event
           */

        }, {
          key: "handlePaginationChangeCompany",
          value: function handlePaginationChangeCompany(event) {
            var pagination = {
              pageSize: event.pageSize,
              offset: event.offset,
              currentPage: event.currentPage
            };
            this.paginationCompany.currentPage = event.currentPage;
            this.paginationCompany = Object.assign(Object.assign({}, this.paginationCompany), pagination);
            this.pageChangedCompany = true;
            this.getCompanyCustomers();
          }
          /**
           * selected any filter in the dropdown
           * @param $event
           */

        }, {
          key: "selectFilter",
          value: function selectFilter($event) {
            var _this12 = this;

            var _a, _b, _c;

            this.monitorService.logEvent('selectFilter', ['CustomerTableComponent', 'addenda-repair', {
              $event: $event
            }]);

            if (($event === null || $event === void 0 ? void 0 : $event.name) == 'filterDropdown') {
              var query = "?$filter=( OrgId eq ".concat((_b = (_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.organizationDetail) === null || _b === void 0 ? void 0 : _b.id, " and CompanyOrgType eq '").concat($event.value.label, "' and IsIndividual eq false)");
              this.dropdownModelFilter.selectedOption = $event.value;
              this.hideShowDropdown('companyName');
              this.dropdownModelCompany = Object.assign(Object.assign({}, this.dropdownModelCompany), {
                selectedOption: [],
                options: [],
                displayValue: 'label',
                observable: this.calendarService.getCustomer(query),
                onObservableLoad: this.onObservableLoadCompanyData.bind(this)
              });
              setTimeout(function () {
                var _a;

                (_a = _this12.companyName) === null || _a === void 0 ? void 0 : _a.getObservable();
              }, 100);
              this.updateApplyButtonState();
            } else if ($event.name == 'filterDropdownPerson') {
              this.dropdownModelFilterPerson.selectedOption = $event.value;

              switch ((_c = $event.value[this.dropdownModelFilterPerson.displayValue]) === null || _c === void 0 ? void 0 : _c.toLowerCase()) {
                case 'retail - individual':
                  this.hideShowDropdown('personName');
                  this.nameTextBox.value = '';
                  break;

                default:
                  this.hideShowDropdown('');
                  break;
              }
            } else if (($event === null || $event === void 0 ? void 0 : $event.name) == 'companyDropdown') {
              this.dropdownModelCompany.selectedOption = $event.value;
              this.updateApplyButtonState();
            }
          }
          /**
           *
           * @param event
           */

        }, {
          key: "updateInput",
          value: function updateInput(event) {
            if (event.name == 'name') {
              this.nameTextBox.value = event.value;
              this.updateApplyButtonState();
            }
          }
          /**
           *
           * @param event
           */

        }, {
          key: "updateApplyButtonState",
          value: function updateApplyButtonState() {
            var _a;

            var state = 'disabled';

            if (this.activeTab === this.activeTabOptions.PERSONAL) {
              if (this.nameTextBox.value && this.nameTextBox.value.toString().length >= 3) {
                state = 'secondary';
              }
            } else if (this.activeTab === this.activeTabOptions.COMPANY) {
              if (((_a = this.dropdownModelCompany.selectedOption) === null || _a === void 0 ? void 0 : _a.length) > 0 && this.input.companyName) {
                state = 'secondary';
              }
            }

            this.applyButtonModel.type = state;
          }
          /**
           * hide show dropdown
          */

        }, {
          key: "hideShowDropdown",
          value: function hideShowDropdown(key) {
            var _this13 = this;

            this.input[key] = true;
            Object.keys(this.input).forEach(function (value) {
              if (value != key) {
                _this13.input[value] = false;
              }
            });
          }
          /**
            Navigates to the specified menu item's URL using the Angular Router.
            @param {menuItem} item - The menu item to navigate to.
            @returns {void}
          */

        }, {
          key: "navigate",
          value: function navigate(item) {
            var _a, _b, _c, _d;

            var url = item.url;
            this.router.navigate([url]);

            if ((_a = this.dropdownModelFilter) === null || _a === void 0 ? void 0 : _a.selectedOption) {
              this.input.companyName = false;
              this.dropdownModelFilter = Object.assign(Object.assign({}, this.dropdownModelFilter), {
                selectedOption: {}
              });
            }

            if ((_b = this.dropdownModelCompany) === null || _b === void 0 ? void 0 : _b.selectedOption) {
              this.dropdownModelCompany = Object.assign(Object.assign({}, this.dropdownModelCompany), {
                selectedOption: []
              });
            }

            if ((_c = this.dropdownModelFilterPerson) === null || _c === void 0 ? void 0 : _c.selectedOption) {
              this.input.personName = false;
              this.dropdownModelFilterPerson = Object.assign(Object.assign({}, this.dropdownModelFilterPerson), {
                selectedOption: {}
              });
            }

            if ((_d = this.nameTextBox) === null || _d === void 0 ? void 0 : _d.value) {
              this.nameTextBox = Object.assign(Object.assign({}, this.nameTextBox), {
                value: ''
              });
            }
          }
          /**
            Applies a filter based on the active tab selected by the user.
            If the active tab is "COMPANY", it calls the "getCompanyCustomers" function.
            If the active tab is "PERSONAL", it calls the "getCustomers" function.
            @returns {void}
          */

        }, {
          key: "applyFilter",
          value: function applyFilter() {
            if (this.activeTab === this.activeTabOptions.COMPANY) {
              this.paginationCompany = Object.assign(Object.assign({}, this.paginationCompany), {
                currentPage: 1
              });
              this.selectedCompanyForFilter = _toConsumableArray(this.dropdownModelCompany.selectedOption);
              this.getCompanyCustomers();
              this.getTotalDueAmountCompany();
            } else if (this.activeTab === this.activeTabOptions.PERSONAL) {
              this.pagination = Object.assign(Object.assign({}, this.pagination), {
                currentPage: 1
              });
              this.textToSearch = this.nameTextBox.value + '';
              this.getCustomers();
              this.getTotalDueAmountPerson();
            }
          }
          /**
            Reset a filter based on the active tab selected by the user.
            If the active tab is "COMPANY", it calls the "getCompanyCustomers" function.
            If the active tab is "PERSONAL", it calls the "getCustomers" function.
            @returns {void}
          */

        }, {
          key: "reSetFilter",
          value: function reSetFilter() {
            if (this.activeTab === this.activeTabOptions.COMPANY) {
              this.dropdownModelCompany = Object.assign(Object.assign({}, this.dropdownModelCompany), {
                selectedOption: []
              });
              this.dropdownModelFilter = Object.assign(Object.assign({}, this.dropdownModelFilter), {
                selectedOption: {}
              });
              this.paginationCompany = Object.assign(Object.assign({}, this.paginationCompany), {
                currentPage: 1
              });
              this.input.companyName = false;
              this.selectedCompanyForFilter = [];
              this.updateApplyButtonState();
              this.getCompanyCustomers();
              this.getTotalDueAmountCompany();
            } else if (this.activeTab === this.activeTabOptions.PERSONAL) {
              this.nameTextBox = Object.assign(Object.assign({}, this.nameTextBox), {
                value: ''
              });
              this.pagination = Object.assign(Object.assign({}, this.pagination), {
                currentPage: 1
              });
              this.dropdownModelFilterPerson = Object.assign(Object.assign({}, this.dropdownModelFilterPerson), {
                selectedOption: {}
              });
              this.input.personName = false;
              this.textToSearch = '';
              this.getCustomers();
              this.getTotalDueAmountPerson();
            }

            this.updateApplyButtonState();
          }
          /**
            @param {any} items - The compnay items to update the form model with.
            @returns {void}
          */

        }, {
          key: "onObservableLoadCompanyData",
          value: function onObservableLoadCompanyData(items) {
            if (items && items.length > 0) {
              items.forEach(function (item, i) {
                items[i] = Object.assign(Object.assign({}, items[i]), {
                  label: "".concat(item.CompanyName).concat(item.LicenseNumber ? '-' + item.LicenseNumber : ''),
                  html: "<span class=\"company-name-dropdown\">".concat(item.CompanyName).concat(item.LicenseNumber ? '-<i>' + item.LicenseNumber + '</i>' : '', "</span>")
                });
              });
              this.dropdownModelCompany = Object.assign(Object.assign({}, this.dropdownModelCompany), {
                options: items,
                selectedOption: items
              });
              this.updateApplyButtonState();
            }
          }
          /**
            @param {any} items - The compnay items to update the form model with.
            @returns {void}
          */

        }, {
          key: "onObservableLoadWorkProviderData",
          value: function onObservableLoadWorkProviderData(items) {
            var _this14 = this;

            if (items && items.length > 0) {
              var filteredItems = items.filter(function (item, i) {
                return _this14.workProviderFromBooking.indexOf(item.label) !== -1 ? true : false;
              });
              this.workProvider.dropdownOptions = filteredItems;
            }
          }
        }]);

        return _CustomerTableComponent;
      }();

      _CustomerTableComponent.currentPage = 1;
      _CustomerTableComponent.currentPageCompnay = 1;

      _CustomerTableComponent.ɵfac = function CustomerTableComponent_Factory(t) {
        return new (t || _CustomerTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_6__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.XaCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_8__.CalendarService));
      };

      _CustomerTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
        type: _CustomerTableComponent,
        selectors: [["add-customer-table"]],
        viewQuery: function CustomerTableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.companyName = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.workProvider = _t.first);
          }
        },
        decls: 15,
        vars: 8,
        consts: [[1, "main-customer-list", "customer-list", "fx-col"], [1, "header-container", "fx-0"], [3, "mode", "menuItems", "menuItemClick"], ["class", "filter", 4, "ngIf"], [1, "pending-amount", "fx-0"], ["class", "total-due-amount", 4, "ngIf"], [1, "table-section", "fx-1"], ["class", "table-container", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "filter"], [1, "company-filter-dropdown", 3, "dropdownModel", "selected"], ["workProvider", ""], ["class", "bodyShop-filter-dropdown", 3, "dropdownModel", "selected", 4, "ngIf"], [3, "buttonModel"], [1, "bodyShop-filter-dropdown", 3, "dropdownModel", "selected"], ["companyName", ""], [1, "person-filter-dropdown", 3, "dropdownModel", "selected"], ["filterPerson", ""], [3, "inputModel", "controlOutput", 4, "ngIf"], [3, "inputModel", "controlOutput"], [1, "total-due-amount"], [3, "class", 4, "ngIf"], [4, "ngIf"], [1, "table-container"], [1, "table-wrapper"], [3, "config", "tableData", "sortChanged", "pageChanged", "cellClicked", "i18n"], ["class", "pagination-wrapper", 4, "ngIf"], [1, "pagination-wrapper"], [3, "pagination", "paginationChange"], ["paginator", ""], ["paginatorCompany", ""]],
        template: function CustomerTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "chq-tabs", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("menuItemClick", function CustomerTableComponent_Template_chq_tabs_menuItemClick_2_listener($event) {
              return ctx.navigate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CustomerTableComponent_div_3_Template, 6, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, CustomerTableComponent_div_4_Template, 6, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, CustomerTableComponent_div_6_Template, 6, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, CustomerTableComponent_div_7_Template, 6, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, CustomerTableComponent_div_9_Template, 4, 7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, CustomerTableComponent_div_10_Template, 4, 7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mode", "button")("menuItems", ctx.customerListMenus);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.COMPANY);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.PERSONAL);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.PERSONAL && (ctx.tableData == null ? null : ctx.tableData.length) > 0 && ctx.showTotalDueAmountPerson);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.COMPANY && (ctx.tableDataCompany == null ? null : ctx.tableDataCompany.length) > 0 && ctx.showTotalDueAmountCompany);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.PERSONAL);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.COMPANY);
          }
        },
        directives: [_widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__.ChqTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.ChqDropdownComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_11__.ChqButtonComponent, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_12__.ChqInputComponent, _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_13__.ChqMatTableComponent, src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.ChqPaginatorComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.XaCurrencyPipe],
        styles: [".main-customer-list {\n  height: calc(100vh - (5px + 1.5vw) - (5px + 1.5vw + 58px + 1.6vw) - 76px);\n}\n.main-customer-list .header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 20px;\n}\n.main-customer-list .header-container .header-content {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n}\n.main-customer-list .header-container .filter {\n  display: flex;\n  align-items: flex-end;\n}\n.main-customer-list .header-container .filter chq-dropdown,\n.main-customer-list .header-container .filter chq-input {\n  position: relative;\n  width: 150px;\n  margin-left: 16px;\n  margin-top: 4px;\n}\n.main-customer-list .header-container .filter chq-button {\n  margin-left: 16px;\n}\n.main-customer-list .header-container .filter chq-dropdown.user-dropdown {\n  width: 200px;\n}\n.main-customer-list .header-container .filter chq-dropdown.person-filter-dropdown, .main-customer-list .header-container .filter chq-dropdown.retail-company-filter-dropdown, .main-customer-list .header-container .filter chq-dropdown.bodyShop-filter-dropdown, .main-customer-list .header-container .filter chq-dropdown.dealerShip-filter-dropdown {\n  width: 200px;\n}\n.main-customer-list .header-container .filter chq-dropdown.company-filter-dropdown {\n  width: 170px;\n}\n.main-customer-list .delete-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 30px;\n  margin-bottom: 25px;\n}\n.main-customer-list .delete-container chq-button {\n  width: 180px;\n  height: 30px;\n}\n.main-customer-list .table-section {\n  overflow-y: auto;\n}\n.main-customer-list .cdk-column-status mat-icon {\n  height: 17px;\n  width: 17px;\n}\n.main-customer-list .total-due-amount {\n  padding-bottom: 18px;\n  display: flex;\n  justify-content: end;\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--xa-dark-gray);\n}\n.main-customer-list .pagination-wrapper {\n  margin-top: 15px;\n}\n.main-customer-list .company-name i, .main-customer-list .company-name-dropdown i {\n  font-weight: 600;\n}\n.mat-sort-header-arrow {\n  margin: -2px !important;\n}\n.customer-list .input-wrapper {\n  position: inherit !important;\n  top: 0 !important;\n}\n@media (orientation: portrait) {\n  mat-cell {\n    word-break: break-word;\n  }\n\n  .mat-sort-header-arrow {\n    margin: 0 !important;\n  }\n}\n::-webkit-scrollbar:horizontal {\n  height: 5px;\n}\n.table-wrapper {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUVBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVaO0FBQ1E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFDWjtBQUdZOztFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURoQjtBQVlZO0VBQ0ksaUJBQUE7QUFWaEI7QUFhWTtFQUNJLFlBQUE7QUFYaEI7QUFjWTtFQUNJLFlBQUE7QUFaaEI7QUFlWTtFQUNJLFlBQUE7QUFiaEI7QUFrQkk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBaEJSO0FBa0JRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFoQlo7QUFvQkk7RUFDSSxnQkFBQTtBQWxCUjtBQXNCUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBcEJaO0FBd0JJO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQXRCUjtBQXlCSTtFQUNJLGdCQUFBO0FBdkJSO0FBMEJRO0VBQ0ksZ0JBQUE7QUF4Qlo7QUE2QkE7RUFDSSx1QkFBQTtBQTFCSjtBQThCSTtFQUNJLDRCQUFBO0VBQ0EsaUJBQUE7QUEzQlI7QUErQkE7RUFDSTtJQUNJLHNCQUFBO0VBNUJOOztFQStCRTtJQUNJLG9CQUFBO0VBNUJOO0FBQ0Y7QUErQkE7RUFDSSxXQUFBO0FBN0JKO0FBZ0NBO0VBQ0ksMENBQUE7QUE3QkoiLCJmaWxlIjoiY3VzdG9tZXItdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jdXN0b21lci1saXN0IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICg1cHggKyAxLjV2dykgLSAoNXB4ICsgMS41dncgKyA1OHB4ICsgMS42dncpIC0gNzZweCk7XHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpbHRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgIGNocS1kcm9wZG93bixcclxuICAgICAgICAgICAgY2hxLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAuZGF0ZS1maWx0ZXIge1xyXG4gICAgICAgICAgICAvLyAgICAgdG9wOiAtN3B4O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjaHEtZHJvcGRvd257XHJcbiAgICAgICAgICAgIC8vICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgY2hxLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hxLWRyb3Bkb3duLnVzZXItZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjaHEtZHJvcGRvd24ucGVyc29uLWZpbHRlci1kcm9wZG93biwgIGNocS1kcm9wZG93bi5yZXRhaWwtY29tcGFueS1maWx0ZXItZHJvcGRvd24sIGNocS1kcm9wZG93bi5ib2R5U2hvcC1maWx0ZXItZHJvcGRvd24sICBjaHEtZHJvcGRvd24uZGVhbGVyU2hpcC1maWx0ZXItZHJvcGRvd257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNocS1kcm9wZG93bi5jb21wYW55LWZpbHRlci1kcm9wZG93biB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRlbGV0ZS1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblxyXG4gICAgICAgIGNocS1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLXNlY3Rpb24ge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNkay1jb2x1bW4tc3RhdHVzIHtcclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE3cHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvdGFsLWR1ZS1hbW91bnQge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbXBhbnktbmFtZSwgLmNvbXBhbnktbmFtZS1kcm9wZG93bntcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xyXG4gICAgbWFyZ2luOiAtMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b21lci1saXN0IHtcclxuICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgbWF0LWNlbGwge1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuLnRhYmxlLXdyYXBwZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59Il19 */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    922:
    /*!************************************************************!*\
      !*** ./src/app/modules/repair/customer/customer.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerTableModule": function CustomerTableModule() {
          return (
            /* binding */
            _CustomerTableModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/resolvers/versionControl.resolver */
      74743);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/icons.module */
      25852);
      /* harmony import */


      var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/widgets/chq-widgets.module */
      85510);
      /* harmony import */


      var _customer_list_customer_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customer-list/customer-table.component */
      85537);
      /* harmony import */


      var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./customer-details/customer-details.component */
      89179);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var route = [{
        path: ':userType',
        component: _customer_list_customer_table_component__WEBPACK_IMPORTED_MODULE_3__.CustomerTableComponent,
        resolve: {
          version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver
        }
      }, {
        path: ':userType/:contactId/:id/:orderType',
        component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__.CustomerDetailsComponent,
        resolve: {
          version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver
        }
      }];

      var _CustomerTableModule = /*#__PURE__*/_createClass(function _CustomerTableModule() {
        _classCallCheck(this, _CustomerTableModule);
      });

      _CustomerTableModule.ɵfac = function CustomerTableModule_Factory(t) {
        return new (t || _CustomerTableModule)();
      };

      _CustomerTableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _CustomerTableModule
      });
      _CustomerTableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(route), _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_CustomerTableModule, {
          declarations: [_customer_list_customer_table_component__WEBPACK_IMPORTED_MODULE_3__.CustomerTableComponent, _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__.CustomerDetailsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    74743:
    /*!******************************************************!*\
      !*** ./src/app/resolvers/versionControl.resolver.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VersionControlResolver": function VersionControlResolver() {
          return (
            /* binding */
            _VersionControlResolver
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      53399);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      75249);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      82426);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/common/common.service */
      69763);

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
            var _this15 = this;

            this.commonService.showLoading();
            return this.commonService.checkVersion().pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (res) {
              _this15.commonService.hideLoading();

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
              _this15.commonService.hideLoading();

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
    },

    /***/
    72541:
    /*!*******************************************************!*\
      !*** ./src/app/services/customer/customer.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerService": function CustomerService() {
          return (
            /* binding */
            _CustomerService
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

      var _CustomerService = /*#__PURE__*/function () {
        /**
         * constructor
         * @param http
         */
        function _CustomerService(http) {
          _classCallCheck(this, _CustomerService);

          this.http = http;
        }
        /**
         *
         * @param getCustomers
         * @returns observable
         * fake data have to remove once api is implemented
         */


        _createClass(_CustomerService, [{
          key: "getCustomers",
          value: function getCustomers(pagination) {
            var queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var skip = (pagination.currentPage - 1) * pagination.pageSize;
            queryParams = !queryParams ? "$top=".concat(pagination.pageSize, "&$skip=").concat(skip) : "$top=".concat(pagination.pageSize, "&$skip=").concat(skip, "&").concat(queryParams);
            var orderBy = "&$orderby=".concat(pagination.orderBy, " ").concat(pagination.sortDirection);
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/odata/customerinvoice?").concat(queryParams).concat(orderBy, "&count=true");
            return this.http.get(url);
          }
          /**
           *
           * @param   getCompanyCustomers
           * @returns observable
           * fake data have to remove once api is implemented
           */

        }, {
          key: "getCompanyCustomers",
          value: function getCompanyCustomers(pagination) {
            var queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var skip = (pagination.currentPage - 1) * pagination.pageSize;
            queryParams = !queryParams ? "$top=".concat(pagination.pageSize, "&$skip=").concat(skip) : "$top=".concat(pagination.pageSize, "&$skip=").concat(skip, "&").concat(queryParams);
            var orderBy = "&$orderby=".concat(pagination.orderBy, " ").concat(pagination.sortDirection);
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/odata/companyinvoice?").concat(queryParams).concat(orderBy, "&count=true");
            return this.http.get(url);
          }
          /**
           *
           * @param   getCompanyCustomers
           * @returns observable
           * fake data have to remove once api is implemented
           */

        }, {
          key: "getCompanyWorkProviders",
          value: function getCompanyWorkProviders() {
            var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/odata/companyinvoice?").concat(queryParams);
            return this.http.get(url);
          }
          /**
            Retrieves repair orders from a mock data source.
            @param {ApiPagination} pagination - The pagination object containing the page number and page size.
            @param {string} [queryParams] - Optional query parameters to filter the results.
            @returns {Observable} - An observable that emits the retrieved repair orders.
          */

        }, {
          key: "getReapirOrders",
          value: function getReapirOrders(customerId, userType, pagination) {
            var skip = (pagination.currentPage - 1) * pagination.pageSize;
            var queryParams = "$top=".concat(pagination.pageSize, "&$skip=").concat(skip);
            var orderBy = "&$orderby=".concat(pagination.orderBy, " ").concat(pagination.sortDirection);
            var filter = '';

            if (userType === 'company') {
              filter = "&$filter=(companyId eq ".concat(customerId, ")&companyIndividualType=1");
            } else {
              filter = "&$filter=(contactId eq ".concat(customerId, ")&companyIndividualType=2");
            } // const filter = ''


            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/odata/repairorder?").concat(queryParams).concat(orderBy).concat(filter, "&count=true");
            return this.http.get(url);
          }
          /**
            Retrieves a list of cases based on the provided pagination and query parameters.
            @param {ApiPagination} pagination - An object containing information about the pagination to be applied to the results.
            @param {string} [queryParams] - An optional string containing any additional query parameters to be included in the request.
            @returns {Observable} - An Observable that emits the retrieved list of cases.
          */

        }, {
          key: "getCases",
          value: function getCases(customerId, userType, pagination) {
            var skip = (pagination.currentPage - 1) * pagination.pageSize;
            var queryParams = "$top=".concat(pagination.pageSize, "&$skip=").concat(skip);
            var orderBy = "&$orderby=".concat(pagination.orderBy, " ").concat(pagination.sortDirection);
            var filter = '';

            if (userType === 'company') {
              filter = "&$filter=(companyId eq ".concat(customerId, ")&companyIndividualType=1");
            } else {
              filter = "&$filter=(contactId eq ".concat(customerId, ")&companyIndividualType=2");
            }

            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/odata/repairestimation?").concat(queryParams).concat(orderBy).concat(filter, "&count=true");
            return this.http.get(url);
          }
          /**
            Retrieves total due amount compnay, provided query parameters.
            @param {string} [queryParams] - An optional string containing any additional query parameters to be included in the request.
            @returns {Observable} - An Observable that emits the retrieved list of cases.
          */

        }, {
          key: "getTotalDueAmountCompany",
          value: function getTotalDueAmountCompany() {
            var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/odata/companyinvoice?").concat(queryParams));
          }
          /**
            Retrieves total due amount compnay, provided query parameters.
            @param {string} [queryParams] - An optional string containing any additional query parameters to be included in the request.
            @returns {Observable} - An Observable that emits the retrieved list of cases.
          */

        }, {
          key: "getTotalDueAmountPerson",
          value: function getTotalDueAmountPerson() {
            var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/odata/customerinvoice?").concat(queryParams));
          }
          /**
            Retrieves company details
            @returns {Observable} - An Observable that emits the retrieved list of cases.
          */

        }, {
          key: "getCompanyDetails",
          value: function getCompanyDetails(companyId) {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/companyinvoice/").concat(companyId));
          }
          /**
            Retrieves Customer details
            @returns {Observable} - An Observable that emits the retrieved list of cases.
          */

        }, {
          key: "getCustomerDetails",
          value: function getCustomerDetails(customerId) {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/customerinvoice/").concat(customerId));
          }
        }]);

        return _CustomerService;
      }();

      _CustomerService.ɵfac = function CustomerService_Factory(t) {
        return new (t || _CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _CustomerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CustomerService,
        factory: _CustomerService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modules_repair_customer_customer_module_ts-es5.js.map