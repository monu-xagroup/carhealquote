"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_home_home_module_ts"],{

/***/ 48869:
/*!***************************************************************!*\
  !*** ./src/app/modules/home/dashboard/dashboard.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 21859);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dashboard/dashboard.service */ 14914);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var src_app_helper_pipe_number_suffix_number_suffix_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/helper/pipe/number-suffix/number-suffix.pipe */ 79933);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../widgets/chq-dropdown/chq-dropdown.component */ 8851);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_chart_chq_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../widgets/chq-chart/chq-chart.component */ 4501);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! devextreme-angular */ 82846);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 18237);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! devextreme-angular/core */ 46209);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);



























const _c0 = ["organizationControl"];
const _c1 = ["workProviderControl"];
const _c2 = ["bookingTypeControl"];
const _c3 = ["customerDropdownRef"];
const _c4 = ["repairTypeControl"];
const _c5 = ["mep"];
const _c6 = ["chart"];
function DashboardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", item_r18.label, "", item_r18.index < ctx_r4.selectedCustomer.length - 1 ? "," : "", " ");
  }
}
function DashboardComponent_dxi_button_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "dxi-button", 41);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("options", ctx_r5.dropdownopen);
  }
}
function DashboardComponent_dxi_button_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "dxi-button", 42);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("options", ctx_r6.dropdownclose);
  }
}
function DashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](data_r20.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](data_r20.subLabel);
  }
}
const _c7 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function DashboardComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](24, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](36, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "total");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 16, "total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](7, 18, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](58, _c7, ctx_r10.summary.total.amount, ctx_r10.i18n.currencySymbol, ctx_r10.i18n.digitsInfo, ctx_r10.i18n.locale, ctx_r10.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 24, "vehicles"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r10.summary.total.vehicles);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 26, "parts"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r10.summary.total.parts, "% | ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](18, 28, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](64, _c7, ctx_r10.summary.total.partsAmount, ctx_r10.i18n.currencySymbol, ctx_r10.i18n.digitsInfo, ctx_r10.i18n.locale, ctx_r10.i18n.position)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](21, 34, "labour"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r10.summary.total.labour, "% | ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](24, 36, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](70, _c7, ctx_r10.summary.total.labourAmount, ctx_r10.i18n.currencySymbol, ctx_r10.i18n.digitsInfo, ctx_r10.i18n.locale, ctx_r10.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](27, 42, "paint_material"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r10.summary.total.paintMaterial, "% | ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](30, 44, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](76, _c7, ctx_r10.summary.total.paintMaterialAmount, ctx_r10.i18n.currencySymbol, ctx_r10.i18n.digitsInfo, ctx_r10.i18n.locale, ctx_r10.i18n.position)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](33, 50, "average_repair_cost"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](36, 52, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](82, _c7, ctx_r10.summary.total.averageRepairCost, ctx_r10.i18n.currencySymbol, ctx_r10.i18n.digitsInfo, ctx_r10.i18n.locale, ctx_r10.i18n.position)));
  }
}
function DashboardComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 5, "bookings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r11.summary.bookings.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](9, 7, "no_show_bookings"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r11.summary.bookings.noShowBookings);
  }
}
function DashboardComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](24, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "in-progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 14, "in_progress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](7, 16, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](48, _c7, ctx_r12.summary.inProgress.amount, ctx_r12.i18n.currencySymbol, ctx_r12.i18n.digitsInfo, ctx_r12.i18n.locale, ctx_r12.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 22, "vehicles"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r12.summary.inProgress.vehicles);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 24, "parts"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r12.summary.inProgress.parts, "% | ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](18, 26, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](54, _c7, ctx_r12.summary.inProgress.partsAmount, ctx_r12.i18n.currencySymbol, ctx_r12.i18n.digitsInfo, ctx_r12.i18n.locale, ctx_r12.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](21, 32, "labour"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r12.summary.inProgress.labour, "% | ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](24, 34, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](60, _c7, ctx_r12.summary.inProgress.labourAmount, ctx_r12.i18n.currencySymbol, ctx_r12.i18n.digitsInfo, ctx_r12.i18n.locale, ctx_r12.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](27, 40, "paint_material"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r12.summary.inProgress.paintMaterial, "% | ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](30, 42, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](66, _c7, ctx_r12.summary.inProgress.paintMaterialAmount, ctx_r12.i18n.currencySymbol, ctx_r12.i18n.digitsInfo, ctx_r12.i18n.locale, ctx_r12.i18n.position)), "");
  }
}
function DashboardComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](24, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "collected");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 14, "collected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](7, 16, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](48, _c7, ctx_r13.summary.collected.amount, ctx_r13.i18n.currencySymbol, ctx_r13.i18n.digitsInfo, ctx_r13.i18n.locale, ctx_r13.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 22, "vehicles"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r13.summary.collected.vehicles);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 24, "parts"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r13.summary.collected.parts, "% | ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](18, 26, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](54, _c7, ctx_r13.summary.collected.partsAmount, ctx_r13.i18n.currencySymbol, ctx_r13.i18n.digitsInfo, ctx_r13.i18n.locale, ctx_r13.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](21, 32, "labour"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r13.summary.collected.labour, "% | ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](24, 34, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](60, _c7, ctx_r13.summary.collected.labourAmount, ctx_r13.i18n.currencySymbol, ctx_r13.i18n.digitsInfo, ctx_r13.i18n.locale, ctx_r13.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](27, 40, "paint_material"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r13.summary.collected.paintMaterial, "% | ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](30, 42, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](66, _c7, ctx_r13.summary.collected.paintMaterialAmount, ctx_r13.i18n.currencySymbol, ctx_r13.i18n.digitsInfo, ctx_r13.i18n.locale, ctx_r13.i18n.position)), "");
  }
}
function DashboardComponent_div_57_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DashboardComponent_div_57_ng_container_8_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const item_r25 = restoredCtx.$implicit;
      const i_r26 = restoredCtx.index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r27.handleRepairTypeClick(item_r25, i_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", ctx_r21.selectedRepairType.repairTypeName === item_r25.repairTypeName ? "button-secondary" : "button-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r25.repairTypeName);
  }
}
function DashboardComponent_div_57_chq_chart_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "chq-chart", 58, 59);
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("series", ctx_r22.repairDetailsChartOptions.series)("chart", ctx_r22.repairDetailsChartOptions.chart)("labels", ctx_r22.repairDetailsChartOptions.labels)("responsive", ctx_r22.repairDetailsChartOptions.responsive)("colors", ctx_r22.repairDetailsChartOptions.colors)("stroke", ctx_r22.repairDetailsChartOptions.stroke)("dataLabels", ctx_r22.repairDetailsChartOptions.dataLabels)("plotOptions", ctx_r22.repairDetailsChartOptions.plotOptions)("states", ctx_r22.repairDetailsChartOptions.states);
  }
}
function DashboardComponent_div_57_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "estimate-no-data");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 3, "no_result_dashboard"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 5, "no_repair_type_dashboard"), " ");
  }
}
function DashboardComponent_div_57_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 65)(1, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r30.selectedRepairType.repairTypeName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 3, "total_amount_estimated"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](6, 5, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](11, _c7, ctx_r30.selectedRepairType.totalAmount, ctx_r30.i18n.currencySymbol, ctx_r30.i18n.digitsInfo, ctx_r30.i18n.locale, ctx_r30.i18n.position)));
  }
}
function DashboardComponent_div_57_div_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 65)(1, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "total_amount_estimated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](6, 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](10, _c7, ctx_r32.totalRepairAmount, ctx_r32.i18n.currencySymbol, ctx_r32.i18n.digitsInfo, ctx_r32.i18n.locale, ctx_r32.i18n.position)));
  }
}
function DashboardComponent_div_57_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_div_57_div_12_div_1_Template, 7, 17, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, DashboardComponent_div_57_div_12_ng_template_2_Template, 7, 16, "ng-template", null, 64, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](3);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r24.selectedRepairType.repairTypeName)("ngIfElse", _r31);
  }
}
function DashboardComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, DashboardComponent_div_57_ng_container_8_Template, 3, 2, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, DashboardComponent_div_57_chq_chart_10_Template, 2, 9, "chq-chart", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, DashboardComponent_div_57_div_11_Template, 8, 7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, DashboardComponent_div_57_div_12_Template, 4, 2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 6, "repair_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 8, "percent_values"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r14.repairDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r14.repairDetails.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r14.repairDetails.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r14.repairDetails.length > 0);
  }
}
function DashboardComponent_div_60_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 69)(1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "chq-chart", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Value ", ctx_r33.i18n.currencySymbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("series", ctx_r33.customersChartOptions.series)("chart", ctx_r33.customersChartOptions.chart)("dataLabels", ctx_r33.customersChartOptions.dataLabels)("plotOptions", ctx_r33.customersChartOptions.plotOptions)("responsive", ctx_r33.customersChartOptions.responsive)("xaxis", ctx_r33.customersChartOptions.xaxis)("yaxis", ctx_r33.customersChartOptions.yaxis)("legend", ctx_r33.customersChartOptions.legend)("fill", ctx_r33.customersChartOptions.fill)("stroke", ctx_r33.customersChartOptions.stroke)("tooltip", ctx_r33.customersChartOptions.tooltip);
  }
}
function DashboardComponent_div_60_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "estimate-no-data");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 3, "no_result_dashboard"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 5, "no_repair_type_dashboard"), " ");
  }
}
function DashboardComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, DashboardComponent_div_60_div_4_Template, 4, 12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, DashboardComponent_div_60_div_5_Template, 8, 7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 3, "customers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (ctx_r15.customersChartOptions.series[0] == null ? null : ctx_r15.customersChartOptions.series[0].data.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (ctx_r15.customersChartOptions.series[0] == null ? null : ctx_r15.customersChartOptions.series[0].data.length) === 0);
  }
}
function DashboardComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-spinner", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("strokeWidth", 5)("diameter", 50);
  }
}
const _c8 = function (a0) {
  return {
    "disable-input": a0
  };
};
dayjs__WEBPACK_IMPORTED_MODULE_1__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
const ALLText = 'All';
const RetailText = {
  company: {
    label: 'Retail-Company',
    value: 'Retail-Company'
  },
  individual: {
    label: 'Retail-Individual',
    value: 'Retail-Individual'
  }
};
const colorsDEO = {
  'Paint': '#00C7F2',
  'Body': '#0FCA7A',
  'Mechanical': '#FBC62F',
  'Tires': '#F7A23B',
  'Electrical': '#F75D5F',
  'Others': '#181B1F',
  'Diagnosis': '#D3CD28',
  'Maintenance': '#C09B80'
};
class DashboardComponent {
  /**
   * constructor
   */
  constructor(commonService, dashboardService, monitorService, caseService, bookingService, calendarService, settingservice, numberSuffixPipe) {
    this.commonService = commonService;
    this.dashboardService = dashboardService;
    this.monitorService = monitorService;
    this.caseService = caseService;
    this.bookingService = bookingService;
    this.calendarService = calendarService;
    this.settingservice = settingservice;
    this.numberSuffixPipe = numberSuffixPipe;
    this.organizationDropdown = {
      options: [],
      placeHolder: 'select_dot',
      label: 'organization',
      name: 'organizationDropdown',
      displayValue: 'name',
      selectedOption: [],
      isMultiSelect: true
    };
    this.workProviderDropdown = {
      options: [],
      placeHolder: 'select_dot',
      label: 'work_provider',
      name: 'workProviderDropdown',
      displayValue: 'label',
      selectedOption: [],
      isMultiSelect: true
    };
    this.bookingTypeDropdown = {
      options: [],
      placeHolder: 'select_dot',
      label: 'booking_type',
      name: 'bookingTypeDropdown',
      displayValue: 'name',
      selectedOption: [],
      isMultiSelect: true
    };
    this.dropdownopen = {
      icon: 'chevrondown',
      stylingMode: 'text',
      type: 'normal',
      onClick: () => {
        this.customerDropdownRef.instance.open();
      }
    };
    this.dropdownclose = {
      icon: 'chevronup',
      stylingMode: 'text',
      type: 'normal',
      onClick: () => {
        this.customerDropdownRef.instance.close();
      }
    };
    this.repairTypeDropdown = {
      options: [],
      placeHolder: 'select_dot',
      label: 'repair_type',
      name: 'repairTypeDropdown',
      displayValue: 'name',
      selectedOption: [],
      isMultiSelect: true
    };
    this.startDateTextBox = {
      placeHolder: 'start',
      label: 'start',
      name: 'startDate',
      value: dayjs__WEBPACK_IMPORTED_MODULE_1__().startOf('month').toISOString(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_1__().subtract(6, 'month').toDate(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_1__().toDate(),
      type: 'date',
      disabled: true
    };
    this.endDateTextBox = {
      placeHolder: 'end',
      label: 'end',
      name: 'endDate',
      value: dayjs__WEBPACK_IMPORTED_MODULE_1__().toISOString(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').toDate(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_1__().toDate(),
      type: 'date',
      disabled: true
    };
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
    };
    this.repairDetails = [];
    this.customerListGraph = [];
    this.selectedRepairType = {};
    this.totalRepairAmount = 0;
    this.summary = {
      total: {
        amount: 0,
        vehicles: 0,
        parts: 0,
        partsAmount: 0,
        labour: 0,
        labourAmount: 0,
        paintMaterial: 0,
        paintMaterialAmount: 0,
        averageRepairCost: 0
      },
      bookings: {
        count: 0,
        noShowBookings: 0
      },
      inProgress: {
        amount: 0,
        vehicles: 0,
        parts: 0,
        partsAmount: 0,
        labour: 0,
        labourAmount: 0,
        paintMaterial: 0,
        paintMaterialAmount: 0
      },
      collected: {
        amount: 0,
        vehicles: 0,
        parts: 0,
        partsAmount: 0,
        labour: 0,
        labourAmount: 0,
        paintMaterial: 0,
        paintMaterialAmount: 0
      }
    };
    this.isSummaryLoading = false;
    this.isRepairDetailsLoading = false;
    this.isCustomerLoading = false;
    this.repairTypeDisabled = false;
    this.workProviderDisabled = false;
    this.customerDisabled = false;
    this.bookingTypeDisabled = false;
    this.customerList = [];
    this.masterRepairTypes = [];
    this.columnsToDisplay = ['customer', '1/15/2024', '1/16/2024', '1/18/2024', '1/19/2024', 'totals'];
    this.dataSource = [{
      'customer': 'Sharq Insurance',
      '1/15/2024': {
        count: 2,
        estimate: '12200',
        labour: '12200'
      },
      '1/16/2024': null,
      '1/18/2024': {
        count: 2,
        estimate: '2200',
        labour: '1220'
      },
      '1/19/2024': null,
      'totals': {
        count: 4,
        estimate: '14400',
        labour: '13400'
      },
      'child': [{
        'customer': 'Miguel',
        '1/15/2024': {
          estimate: '4333',
          labour: '4033'
        },
        '1/16/2024': null,
        '1/18/2024': {
          estimate: '400',
          labour: '366'
        },
        '1/19/2024': null,
        'totals': {
          estimate: '14400',
          labour: '13400'
        }
      }, {
        'customer': 'Mihai Tuluca',
        '1/15/2024': null,
        '1/16/2024': null,
        '1/17/2024': {
          estimate: '12200',
          labour: '12200'
        },
        '1/18/2024': {
          estimate: '2200',
          labour: '1220'
        },
        '1/19/2024': null,
        'totals': {
          estimate: '14400',
          labour: '13400'
        }
      }]
    }, {
      'customer': 'Axa Insurance',
      '1/15/2024': {
        count: 2,
        estimate: '13200',
        labour: '12100'
      },
      '1/16/2024': {
        count: 1,
        estimate: '1200',
        labour: '1120'
      },
      '1/18/2024': null,
      '1/19/2024': null,
      'totals': {
        count: 3,
        estimate: '14200',
        labour: '13200'
      }
    }, {
      'customer': 'Other Insurance',
      '1/15/2024': null,
      '1/16/2024': null,
      '1/18/2024': {
        count: 2,
        estimate: '12200',
        labour: '4000'
      },
      '1/19/2024': null,
      'totals': {
        count: 4,
        estimate: '13400',
        labour: '5200'
      }
    }, {
      'customer': 'Xa Insurance',
      '1/15/2024': {
        count: 2,
        estimate: '13200',
        labour: '12100'
      },
      '1/16/2024': {
        count: 1,
        estimate: '1200',
        labour: '1120'
      },
      '1/18/2024': null,
      '1/19/2024': null,
      'totals': {
        count: 3,
        estimate: '14200',
        labour: '13200'
      }
    }];
    this.i18n = this.commonService.geti18nInfo();
    this.repairDetailsChartOptions = {
      series: [],
      chart: {
        type: 'donut',
        height: 350,
        events: {
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          dataPointSelection: (event, chartContext, config) => {
            if (Object.keys(this.selectedRepairType).length > 0) {
              if (this.repairDetails[config.dataPointIndex].repairTypeName === this.selectedRepairType.repairTypeName) {
                this.selectedRepairType = {};
              } else {
                this.selectedRepairType = this.repairDetails[config.dataPointIndex];
              }
            } else {
              if (config.dataPointIndex || config.dataPointIndex === 0) {
                this.selectedRepairType = this.repairDetails[config.dataPointIndex];
              }
            }
          }
        }
      },
      labels: [],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      colors: [],
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff']
        },
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        formatter: function (val) {
          return val.toFixed(2) + '%';
        }
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: 'All',
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                formatter: () => '100%',
                color: '#000'
              },
              value: {
                formatter: val => {
                  return val + '%';
                }
              }
            }
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'darken',
            value: 0.75
          }
        }
      }
    };
    this.customersChartOptions = {
      series: [],
      chart: {
        type: 'bar',
        stacked: true,
        stackType: 'normal',
        toolbar: {
          show: false
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'top',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: true,
          rotate: 0,
          trim: true,
          showDuplicates: true,
          style: {
            fontSize: '10px'
          }
        }
      },
      yaxis: {
        labels: {
          formatter: value => {
            // return value + ''
            return numberSuffixPipe.formatInThousand(value);
          }
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      fill: {
        opacity: 1
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        colors: ['transparent'],
        width: 2
      },
      tooltip: {
        custom: ({
          series,
          seriesIndex,
          dataPointIndex,
          w
        }) => {
          let heading = '',
            customerName = '',
            value = '';
          customerName = this.customerListGraph[dataPointIndex].customerName || this.customerListGraph[dataPointIndex].companyName;
          if (seriesIndex === 0) {
            heading = 'Paint Material';
            value = this.customerListGraph[dataPointIndex].paintPercentage + '%';
          } else if (seriesIndex === 1) {
            heading = 'Parts';
            value = this.customerListGraph[dataPointIndex].partsPercentage + '%';
          } else if (seriesIndex === 2) {
            heading = 'Labour';
            value = this.customerListGraph[dataPointIndex].labourPercentage + '%';
          } else if (seriesIndex === 3) {
            heading = 'Total Average Cost';
            value = this.numberSuffixPipe.formatInThousand(this.customerListGraph[dataPointIndex].averageCost);
          } else if (seriesIndex === 4) {
            heading = 'Total';
            value = this.numberSuffixPipe.formatInThousand(this.customerListGraph[dataPointIndex].totalAmount);
          }
          return `<div class="arrow_box">
              <span class="tootip-heading">${heading}</span>
              <div class="d-flex justify-content-between">
                <span class="tootip-label">${customerName}</span>
                <span class="tootip-value">${value}</span>
              </div>
            </div>`;
        },
        onDatasetHover: {
          highlightDataSeries: false
        },
        followCursor: true
      }
    };
  }
  /**
   * selected any filter in the dropdown
   * @param $event
   */
  selectFilter(output) {
    var _this = this;
    if (output.type === 'select') {
      switch (output.name) {
        case 'organizationDropdown':
          this.organizationDropdown = {
            ...this.organizationDropdown,
            selectedOption: output.value
          };
          if (output.value.length > 0) {
            (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              _this.workProviderDropdown = {
                ..._this.workProviderDropdown,
                selectedOption: []
              };
              _this.bookingTypeDropdown = {
                ..._this.bookingTypeDropdown,
                selectedOption: []
              };
              _this.repairTypeDropdown = {
                ..._this.repairTypeDropdown,
                selectedOption: []
              };
              _this.selectedCustomer = [];
              _this.commonService.showLoading();
              (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)([_this.getBookingTypes(), _this.getProviders(), _this.getCustomers()]).subscribe(result => {
                const repairTypesAllOptions = {
                  name: ALLText,
                  id: ALLText
                };
                _this.repairTypeDropdown = {
                  ..._this.repairTypeDropdown,
                  options: _this.masterRepairTypes,
                  selectedOption: [repairTypesAllOptions]
                };
                _this.commonService.hideLoading();
                _this.workProviderDisabled = false;
                _this.customerDisabled = false;
                _this.bookingTypeDisabled = false;
                _this.repairTypeDisabled = false;
              });
            })();
          } else {
            this.workProviderDropdown = {
              ...this.workProviderDropdown,
              selectedOption: [],
              options: []
            };
            this.bookingTypeDropdown = {
              ...this.bookingTypeDropdown,
              selectedOption: [],
              options: []
            };
            this.repairTypeDropdown = {
              ...this.repairTypeDropdown,
              selectedOption: [],
              options: []
            };
            this.workProviderDisabled = true;
            this.customerDisabled = true;
            this.bookingTypeDisabled = true;
            this.repairTypeDisabled = true;
            this.selectedCustomer = [];
            this.customerList = [];
            this.updateApplyButtonState();
          }
          break;
        case 'workProviderDropdown':
          {
            // IF ALL this the current selection then mark others as unchecked
            let currentSelectionisAll = false;
            if (output.value.length > 0) {
              currentSelectionisAll = output.value[output.value.length - 1].label === ALLText;
              if (currentSelectionisAll) {
                output.value = [output.value[output.value.length - 1]];
              }
            }
            // Unselect All if other options are selected
            const allSelectedIndex = output.value.findIndex(ele => ele.label === ALLText);
            if (allSelectedIndex !== -1 && output.value.length > 1) {
              output.value.splice(allSelectedIndex, 1);
            }
            this.workProviderDropdown = {
              ...this.workProviderDropdown,
              selectedOption: output.value
            };
            this.getCustomers(true);
            break;
          }
        case 'bookingTypeDropdown':
          {
            // IF ALL this the current selection then mark others as unchecked
            let currentSelectionisAll = false;
            if (output.value.length > 0) {
              currentSelectionisAll = output.value[output.value.length - 1].name === ALLText;
              if (currentSelectionisAll) {
                output.value = [output.value[output.value.length - 1]];
              }
            }
            // Unselect All if other options are selected
            const allSelectedIndex = output.value.findIndex(ele => ele.name === ALLText);
            if (allSelectedIndex !== -1 && output.value.length > 1) {
              output.value.splice(allSelectedIndex, 1);
            }
            this.bookingTypeDropdown = {
              ...this.bookingTypeDropdown,
              selectedOption: output.value
            };
            break;
          }
        case 'repairTypeDropdown':
          {
            // IF ALL this the current selection then mark others as unchecked
            let currentSelectionisAll = false;
            if (output.value.length > 0) {
              currentSelectionisAll = output.value[output.value.length - 1].name === ALLText;
              if (currentSelectionisAll) {
                output.value = [output.value[output.value.length - 1]];
              }
            }
            // Unselect All if other options are selected
            const allSelectedIndex = output.value.findIndex(ele => ele.name === ALLText);
            if (allSelectedIndex !== -1 && output.value.length > 1) {
              output.value.splice(allSelectedIndex, 1);
            }
            this.repairTypeDropdown = {
              ...this.repairTypeDropdown,
              selectedOption: output.value
            };
            break;
          }
        default:
      }
    }
    this.updateApplyButtonState();
  }
  /**
   * selected any filter in the dropdown
   */
  updateApplyButtonState() {
    let state = 'disabled';
    if (this.organizationDropdown.selectedOption?.length > 0) {
      state = 'secondary';
    }
    this.applyButtonModel.type = state;
  }
  /**
   *
   * @param event
   */
  updateInput(event) {
    if (event.name == 'startDate') {
      this.startDateTextBox.value = event.value;
      this.endDateTextBox.minDate = dayjs__WEBPACK_IMPORTED_MODULE_1__(event.value).toDate();
    } else if (event.name == 'endDate') {
      this.endDateTextBox.value = event.value;
    }
    this.updateApplyButtonState();
  }
  /**
    Applies a filter based on the active tab selected by the user.
    If the active tab is "COMPANY", it calls the "getCompanyCustomers" function.
    If the active tab is "PERSONAL", it calls the "getCustomers" function.
    @returns {void}
  */
  applyFilter() {
    this.mep.close();
    this.selectedRepairType = {};
    this.getDashboardCustomerDetailsInformation();
    this.getDashboardRepairDetailsInformation();
    this.getDashboardSummaryInformation();
  }
  /**
    Reset a filter based on the active tab selected by the user.
    If the active tab is "COMPANY", it calls the "getCompanyCustomers" function.
    If the active tab is "PERSONAL", it calls the "getCustomers" function.
    @returns {void}
  */
  reSetFilter() {
    var _this2 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set default value ORG
      _this2.organizationDropdown = {
        ..._this2.organizationDropdown,
        selectedOption: [_this2.userDetail.organizationDetail]
      };
      // Set default value reapir type
      _this2.startDateTextBox = {
        ..._this2.startDateTextBox,
        value: dayjs__WEBPACK_IMPORTED_MODULE_1__().startOf('month').toISOString()
      };
      _this2.endDateTextBox = {
        ..._this2.endDateTextBox,
        value: dayjs__WEBPACK_IMPORTED_MODULE_1__().toISOString()
      };
      _this2.workProviderDropdown = {
        ..._this2.workProviderDropdown,
        selectedOption: []
      };
      _this2.bookingTypeDropdown = {
        ..._this2.bookingTypeDropdown,
        selectedOption: []
      };
      _this2.repairTypeDropdown = {
        ..._this2.repairTypeDropdown,
        selectedOption: []
      };
      _this2.selectedCustomer = [];
      _this2.selectedRepairType = {};
      _this2.mep.close();
      _this2.isSummaryLoading = true;
      _this2.isRepairDetailsLoading = true;
      _this2.isCustomerLoading = true;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)([_this2.getBookingTypes(), _this2.getProviders(), _this2.getCustomers()]).subscribe(result => {
        const repairTypesAllOptions = {
          name: ALLText,
          id: ALLText
        };
        _this2.repairTypeDropdown = {
          ..._this2.repairTypeDropdown,
          options: _this2.masterRepairTypes,
          selectedOption: [repairTypesAllOptions]
        };
        _this2.updateApplyButtonState();
        // Once we will get the all the filters data then only call these API becasue by default we need to show result for default filters
        _this2.getDashboardSummaryInformation();
        _this2.getDashboardRepairDetailsInformation();
        _this2.getDashboardCustomerDetailsInformation();
      });
    })();
  }
  /**
    Retrieves dashboard information.
    @returns {void}
  */
  getDashboardSummaryInformation() {
    this.isSummaryLoading = true;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.dashboardService.getDashboardSummaryInformation(this.getFilter())).then(response => {
      // Set total block data
      this.summary.total.amount = response?.data?.totalEstimateDetail?.totalAmount || 0;
      this.summary.total.vehicles = response?.data?.totalEstimateDetail?.vehicles || 0;
      this.summary.total.parts = response?.data?.totalEstimateDetail?.parts || 0;
      this.summary.total.partsAmount = response?.data?.totalEstimateDetail?.partsAmount || 0;
      this.summary.total.labour = response?.data?.totalEstimateDetail?.labour || 0;
      this.summary.total.labourAmount = response?.data?.totalEstimateDetail?.labourAmount || 0;
      this.summary.total.paintMaterial = response?.data?.totalEstimateDetail?.paintMaterial || 0;
      this.summary.total.paintMaterialAmount = response?.data?.totalEstimateDetail?.paintMaterialAmount || 0;
      this.summary.total.averageRepairCost = response?.data?.totalEstimateDetail?.averageRepairCost || 0;
      // Set bookings data
      this.summary.bookings.count = response?.data?.bookingDetail?.bookingCount || 0;
      this.summary.bookings.noShowBookings = response?.data?.bookingDetail?.noShowBookingCount || 0;
      // Set in progress data
      this.summary.inProgress.amount = response?.data?.inProgressDetail?.totalAmount || 0;
      this.summary.inProgress.vehicles = response?.data?.inProgressDetail?.vehicles || 0;
      this.summary.inProgress.parts = response?.data?.inProgressDetail?.parts || 0;
      this.summary.inProgress.labour = response?.data?.inProgressDetail?.labour || 0;
      this.summary.inProgress.paintMaterial = response?.data?.inProgressDetail?.paintMaterial || 0;
      this.summary.inProgress.partsAmount = response?.data?.inProgressDetail?.partsAmount || 0;
      this.summary.inProgress.labourAmount = response?.data?.inProgressDetail?.labourAmount || 0;
      this.summary.inProgress.paintMaterialAmount = response?.data?.inProgressDetail?.paintMaterialAmount || 0;
      //Set collected data
      this.summary.collected.amount = response?.data?.collectedDetail?.totalAmount || 0;
      this.summary.collected.vehicles = response?.data?.collectedDetail?.vehicles || 0;
      this.summary.collected.parts = response?.data?.collectedDetail?.parts || 0;
      this.summary.collected.labour = response?.data?.collectedDetail?.labour || 0;
      this.summary.collected.paintMaterial = response?.data?.collectedDetail?.paintMaterial || 0;
      this.summary.collected.partsAmount = response?.data?.collectedDetail?.partsAmount || 0;
      this.summary.collected.labourAmount = response?.data?.collectedDetail?.labourAmount || 0;
      this.summary.collected.paintMaterialAmount = response?.data?.collectedDetail?.paintMaterialAmount || 0;
      this.isSummaryLoading = false;
    }).catch(err => {
      this.isSummaryLoading = false;
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
    Retrieves dashboard information.
    @returns {void}
  */
  getDashboardRepairDetailsInformation() {
    this.isRepairDetailsLoading = true;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.dashboardService.getDashboardRepairDetailsInformation(this.getFilter())).then(response => {
      // Set Repair details Graph Information
      let data = response?.data?.repairDetails || [];
      data = data.filter(ele => ele.repairTypePercentage > 0);
      this.totalRepairAmount = data.reduce((accumulator, currentValue) => accumulator + currentValue.totalAmount, 0);
      this.repairDetails = data;
      this.repairDetailsChartOptions = {
        ...this.repairDetailsChartOptions,
        series: data.map(ele => ele.repairTypePercentage),
        labels: data.map(ele => ele.repairTypeName),
        colors: data.map(ele => colorsDEO[ele.repairTypeName] || '#000')
      };
      this.isRepairDetailsLoading = false;
    }).catch(err => {
      this.isRepairDetailsLoading = false;
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
    Retrieves dashboard information.
    @returns {void}
  */
  getDashboardCustomerDetailsInformation() {
    this.isCustomerLoading = true;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.dashboardService.getDashboardCustomerDetailsInformation(this.getFilter())).then(response => {
      // Set Repair details Graph Information
      const result = response?.data?.customerDetails || [];
      this.customerListGraph = result;
      const customerDetails = result;
      this.customersChartOptions = {
        ...this.customersChartOptions,
        series: [{
          name: 'Paint Material',
          group: 'group1',
          data: customerDetails.map(ele => ele.paintMaterial),
          color: '#FFB200'
        }, {
          name: 'Parts',
          group: 'group1',
          data: customerDetails.map(ele => ele.parts),
          color: '#34B53A'
        }, {
          name: 'Labour',
          group: 'group1',
          data: customerDetails.map(ele => ele.labour),
          color: '#4339F2'
        }, {
          name: 'Average Repair Cost',
          group: 'group2',
          data: customerDetails.map(ele => ele.averageCost),
          color: '#AAC7FA'
        }],
        xaxis: {
          ...this.customersChartOptions.xaxis,
          categories: customerDetails.map(ele => ele.companyName ? ele.companyName?.split(' ') : ele.customerName?.split(' '))
        }
      };
      if (customerDetails.length > 5) {
        this.customersChartOptions.chart.width = customerDetails.length * 80;
        this.customersChartOptions.chart.height = 350;
      } else {
        delete this.customersChartOptions.chart.width;
        this.customersChartOptions.chart.height = 350;
      }
      this.isCustomerLoading = false;
    }).catch(err => {
      this.isCustomerLoading = false;
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
    Get Repair type
    @returns {void}
  */
  getRepairTypes() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.bookingService.getRepairTypes()).then(response => {
      let repairTypes = response?.data || [];
      repairTypes.forEach((item, i) => {
        repairTypes[i] = {
          ...repairTypes[i],
          dropdownItemIcon: this.getIcon(item.name)
        };
      });
      repairTypes = repairTypes.filter((value, index, self) => {
        return self.findIndex(o => o.name === value.name) === index;
      });
      const repairTypesAllOptions = {
        name: ALLText,
        id: ALLText
      };
      repairTypes.unshift(repairTypesAllOptions);
      this.masterRepairTypes = repairTypes;
      this.repairTypeDropdown = {
        ...this.repairTypeDropdown,
        options: this.masterRepairTypes,
        selectedOption: [repairTypesAllOptions]
      };
    }).catch(err => {
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
    Get Booking Repair type
    @returns {void}
  */
  getBookingTypes() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.settingservice.getBookingTypes(`?orgIds=${this.organizationDropdown.selectedOption.map(ele => ele.id)}`)).then(response => {
      const data = response?.data || [];
      let bookingTypes = data.bookingTypes.map(x => ({
        name: x,
        category: x
      }));
      bookingTypes = data.bookingTypes.filter((value, index, self) => {
        return self.findIndex(o => o.name === value.name) === index;
      });
      const bookingTypesAllOptions = {
        name: ALLText,
        category: ALLText
      };
      bookingTypes.unshift(bookingTypesAllOptions);
      this.bookingTypeDropdown = {
        ...this.bookingTypeDropdown,
        options: bookingTypes,
        selectedOption: [bookingTypesAllOptions]
      };
    }).catch(err => {
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
    getCustomers
    @returns {void}
  */
  getCustomers(showLoading = false) {
    let query = '?$count=true&$orderBy=FirstName asc&';
    let onlyAllWorkProviderSelected = true;
    // if ALL work provider is selected then do not need to pass work provider in the API
    if (this.workProviderDropdown.selectedOption?.length > 0) {
      const allObj = this.workProviderDropdown.selectedOption.find(ele => ele.value === ALLText);
      if (allObj && this.workProviderDropdown.selectedOption.length === 1) {
        onlyAllWorkProviderSelected = true;
      } else {
        onlyAllWorkProviderSelected = false;
      }
    }
    if (this.organizationDropdown.selectedOption.length > 0 || this.workProviderDropdown.selectedOption.length > 0 && !onlyAllWorkProviderSelected) {
      query += '$filter=(';
      if (this.organizationDropdown.selectedOption.length > 0) {
        query += this.organizationDropdown.selectedOption.map(x => {
          return `OrgId eq ${x.id}`;
        }).join(' or ');
      }
      if (this.workProviderDropdown.selectedOption.length > 0 && !onlyAllWorkProviderSelected) {
        if (this.organizationDropdown.selectedOption.length > 0) query += ') and (';
        query += this.workProviderDropdown.selectedOption.map(x => {
          if (x.value === RetailText.company.value) {
            return '(CompanyOrgType eq \'Retail\' and IsIndividual eq false)';
          } else if (x.value === RetailText.individual.value) {
            return '(CompanyOrgType eq \'Retail\' and IsIndividual eq true)';
          } else {
            return `CompanyOrgType eq '${x.value}'`;
          }
        }).join(' or ');
      }
      query += ')';
    }
    if (showLoading) this.commonService.showLoading();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.calendarService.getCustomer(query)).then(response => {
      if (showLoading) this.commonService.hideLoading();
      const companyCustomer = response.value.filter(x => !x.IsIndividual && x.CompanyName && x.LicenseNumber).filter((value, index, self) => {
        return self.findIndex(o => o.CompanyName === value.CompanyName && o.LicenseNumber === value.LicenseNumber) === index;
      });
      const individualCustomer = response.value.filter(x => x.IsIndividual).filter((value, index, self) => {
        return self.findIndex(o => o.ContactId === value.ContactId) === index;
      });
      const finalList = [...companyCustomer, ...individualCustomer].sort((a, b) => Number(new Date(b.CreatedDate)) - Number(new Date(a.CreatedDate)));
      const customerListOptions = finalList.map((x, index) => {
        const name = x.FirstName + ' ' + x.LastName;
        return {
          label: x.IsIndividual ? name : x.CompanyName,
          subLabel: x.IsIndividual ? x.Email : x.LicenseNumber,
          value: x.Id,
          contactId: x.ContactId,
          index: index + 1,
          companyOrgType: x.CompanyOrgType,
          companyId: x.CompanyId,
          isIndividual: x.IsIndividual
        };
      });
      const customerAllOption = {
        label: ALLText,
        value: ALLText,
        index: 0,
        subLabel: '',
        contactId: 0,
        companyOrgType: '',
        companyId: 0,
        isIndividual: true
      };
      customerListOptions.unshift(customerAllOption);
      this.customerList = customerListOptions;
      this.selectedCustomer = [customerAllOption.value];
    }).catch(err => {
      if (showLoading) this.commonService.hideLoading();
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
    getOrganization
    @returns {void}
  */
  getOrganization() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.caseService.getOrganizations()).then(response => {
      this.organizationDropdown = {
        ...this.organizationDropdown,
        options: response?.data || []
      };
      if (this.userDetail?.organizationDetail) {
        this.organizationDropdown.selectedOption = [this.userDetail.organizationDetail];
      }
      return true;
    }).catch(err => {
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
    getProviders
    @returns {void}
  */
  getProviders() {
    let query = '?';
    if (this.organizationDropdown.selectedOption.length > 0) {
      query += this.organizationDropdown.selectedOption.map(x => {
        return `orgIds=${x.id}`;
      }).join('&');
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.caseService.getProvidersByOrgId(query)).then(response => {
      const wpData = response?.data?.map(ele => {
        return {
          label: ele,
          value: ele
        };
      }) || [];
      const retailOptionIndex = wpData.findIndex(ele => ele.label === 'Retail');
      if (retailOptionIndex !== -1) {
        wpData.splice(retailOptionIndex);
        wpData.push({
          label: RetailText.company.label,
          value: RetailText.company.value
        });
        wpData.push({
          label: RetailText.individual.label,
          value: RetailText.individual.value
        });
      }
      const AllQPOption = {
        label: ALLText,
        value: ALLText
      };
      wpData.unshift(AllQPOption);
      this.workProviderDropdown.options = wpData;
      this.workProviderDropdown = {
        ...this.workProviderDropdown,
        selectedOption: [AllQPOption]
      };
    }).catch(err => {
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
    Get filter json to be sent in API
    @returns {Filters JSON}
  */
  getFilter() {
    const filter = {};
    let isIndividual = false;
    let isCompany = false;
    const retailIndividualSelected = this.workProviderDropdown.selectedOption.findIndex(ele => ele.value === RetailText.individual.value || ele.value === ALLText);
    if (retailIndividualSelected !== -1) isIndividual = true;
    if (this.workProviderDropdown.selectedOption.findIndex(ele => ele.value !== RetailText.individual.value || ele.value === ALLText) !== -1) {
      isCompany = true;
    }
    if (this.organizationDropdown.selectedOption.length > 0) {
      filter.orgnization = this.organizationDropdown.selectedOption.map(ele => ele.id).join(',');
    }
    if (this.workProviderDropdown.selectedOption.length > 0) {
      filter.workProvider = this.workProviderDropdown.selectedOption.map(ele => {
        return ele.value === RetailText.company.value || ele.value === RetailText.individual.value ? 'Retail' : ele.value;
      }).filter((item, index, self) => self.indexOf(item) === index).join(',');
    }
    if (this.bookingTypeDropdown.selectedOption.length > 0) {
      filter.bookingType = this.bookingTypeDropdown.selectedOption.map(ele => ele.name).join(',');
    }
    if (this.repairTypeDropdown.selectedOption.length > 0) {
      filter.repairType = this.repairTypeDropdown.selectedOption.map(ele => ele.id).join(',');
    }
    if (this.selectedCustomer?.length > 0) {
      const isAllSelected = this.selectedCustomer.findIndex(ele => ele === ALLText);
      if (isAllSelected !== -1 && this.selectedCustomer?.length === 1) {
        if (isIndividual) {
          filter.Customer = ALLText;
          filter.CustomerName = ALLText;
        }
        if (isCompany) {
          filter.Company = ALLText;
          filter.CompanyName = ALLText;
        }
      } else {
        const selectCustomerObj = this.selectedCustomer.map(ele => this.customerList.find(cus => cus.value === ele));
        const selectCompanyObj = selectCustomerObj.filter(ele => ele?.isIndividual === false);
        const selectIndividualObj = selectCustomerObj.filter(ele => ele?.isIndividual === true);
        filter.Customer = selectIndividualObj.map(ele => ele.contactId || '').join(',');
        filter.CustomerName = selectIndividualObj.map(ele => ele.label || '').join(',');
        filter.Company = selectCompanyObj.map(ele => ele.companyId || '').join(',');
        filter.CompanyName = selectCompanyObj.map(ele => ele.label || '').join(',');
      }
    }
    if (this.startDateTextBox.value) {
      // filter.startDate = dayjs(this.startDateTextBox.value as Date | string).utc().format();
      filter.startDate = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.startDateTextBox.value).format('YYYY-MM-DD');
    }
    if (this.endDateTextBox.value) {
      // filter.endDate = dayjs(this.endDateTextBox.value as Date | string).utc().format();
      filter.endDate = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.endDateTextBox.value).format('YYYY-MM-DD');
    }
    // filter.isIndividual = isIndividual;
    return filter;
  }
  /**
    Returns the appropriate icon based on the given item.
    @param {string} item - The item for which to return the icon.
    @returns {string} - The icon corresponding to the given item.
  */
  getIcon(item) {
    switch (item) {
      case 'Body':
        return 'car';
      case 'Maintenance':
        return 'house';
      case 'Tires':
        return 'tire';
      case 'Paint':
        return 'paintbrush';
      case 'Others':
        return 'gears';
      case 'Electrical':
        return 'bolt-car';
      case 'Diagnosis':
        return 'diagnosis';
      case 'Mechanical':
        return 'mechanical';
      default:
        return '';
    }
  }
  /**
    @description This function is called when an observable emits an event to load organization data.
    @param {any} items - The data emitted by the observable.
    @returns {void}
  */
  // onObservableLoadOrganization(items: any): void {
  //   this.organizationDropdown.options = items;
  // }
  /**
    @description This function is called when an observable emits an event to load work provider data.
    @param {any} items - The data emitted by the observable.
    @returns {void}
  */
  // onObservableLoadWorkProvider(items: any): void {
  //   this.workProviderDropdown.options = items;
  //   this.workProviderDropdown = { ...this.workProviderDropdown, selectedOption: items }
  // }
  /**
    Hides the dropdown associated with the given name.
    @param {any} name - The name of the dropdown to hide.
  */
  hideDropdown(name) {
    this.organizationControl.closeDropdown();
    this.workProviderControl.closeDropdown();
    this.bookingTypeControl.closeDropdown();
    // this.customerControl.closeDropdown();
    this.repairTypeControl.closeDropdown();
  }
  /**
    @param {any}  - Reapir which is selected
  */
  handleRepairTypeClick(reapirType, index) {
    document.querySelectorAll(`.apexcharts-slices [seriesName="${reapirType.repairTypeName}"]`)[0]?.firstChild.dispatchEvent(new Event('click'));
    document.querySelectorAll(`.apexcharts-slices [seriesName="${reapirType.repairTypeName}"]`)[0]?.firstChild.dispatchEvent(new Event('mouseenter'));
    document.querySelectorAll(`.apexcharts-slices [seriesName="${reapirType.repairTypeName}"]`)[0]?.firstChild.dispatchEvent(new Event('mouseleave'));
    if (reapirType.repairTypeName == this.selectedRepairType.repairTypeName) {
      this.selectedRepairType = {};
    } else {
      this.selectedRepairType = reapirType;
    }
  }
  /**
    Value of customer dropdown changed
  */
  onValueChanged(event) {
    const value = event.addedItems;
    // IF ALL this the current selection then mark others as unchecked
    if (value && value.length > 0) {
      let currentSelectionisAll = false;
      currentSelectionisAll = value[value.length - 1].value === ALLText;
      if (currentSelectionisAll) {
        this.selectedCustomer = [value[value.length - 1].value];
      }
      // Unselect All if other options are selected
      const allSelectedIndex = this.selectedCustomer.findIndex(ele => ele === ALLText);
      if (allSelectedIndex !== -1 && this.selectedCustomer.length > 1) {
        const cusSele = [...this.selectedCustomer];
        cusSele.splice(allSelectedIndex, 1);
        this.selectedCustomer = cusSele;
      }
    }
    this.updateApplyButtonState();
  }
  /**
   * on init
   */
  ngOnInit() {
    var _this3 = this;
    this.monitorService.logEvent('ngOnInit', ['DashboardComponent', 'addenda-repair']);
    this.isSummaryLoading = true;
    this.isRepairDetailsLoading = true;
    this.isCustomerLoading = true;
    this.subscription = this.commonService.userProfileData.subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this3.userDetail = res?.data;
        yield _this3.getOrganization();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)([_this3.getRepairTypes(), _this3.getBookingTypes(), _this3.getProviders(), _this3.getCustomers()]).subscribe(result => {
          //update apply button state
          _this3.updateApplyButtonState();
          // Once we will get the all the filters data then only call these API becasue by default we need to show result for default filters
          _this3.getDashboardSummaryInformation();
          _this3.getDashboardRepairDetailsInformation();
          _this3.getDashboardCustomerDetailsInformation();
        });
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  /**
   *
   * @param output
   */
  rangeUpdated(output) {
    console.log(output, 'output');
  }
  /**
   *
   * @param event
   */
  tabChanged(event) {}
  /**
    @returns {void} ngOnDestroy for GenerateInvoicesComponent
  */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_5__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_6__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_8__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_9__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_helper_pipe_number_suffix_number_suffix_pipe__WEBPACK_IMPORTED_MODULE_10__.NumberSuffixPipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["dashboard"]],
    viewQuery: function DashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c6, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.organizationControl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.workProviderControl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.bookingTypeControl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.customerDropdownRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.repairTypeControl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.mep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
      }
    },
    decls: 67,
    vars: 49,
    consts: [[1, "dashboard-summary", "fx-co"], [1, "row", "filter-section", "fx-0"], ["togglePosition", "after"], ["mep", ""], [1, "row", "dashbord-filter-dropdown"], [1, "col-3"], [3, "dropdownModel", "selected", "clicked"], ["organizationControl", ""], [3, "dropdownModel", "ngClass", "selected", "clicked"], ["workProviderControl", ""], [1, "search-dropdown"], [1, "input-label"], ["valueExpr", "value", "displayExpr", "label", "height", "40px", "tagTemplate", "customTag", "itemTemplate", "item", 3, "items", "showSelectionControls", "searchEnabled", "showDataBeforeSearch", "multiline", "showClearButton", "value", "ngClass", "valueChange", "onSelectionChanged"], ["customerDropdownRef", ""], ["class", "customer-tags", 4, "dxTemplate", "dxTemplateOf"], ["class", "multiselect-dropdown", "name", "dropdown-up", "location", "after", 3, "options", 4, "ngIf"], ["name", "dropdown-down", "location", "after", 3, "options", 4, "ngIf"], [4, "dxTemplate", "dxTemplateOf"], [1, "col-3", "d-none"], ["bookingTypeControl", ""], [1, "dashbaord-reapir-type", 3, "dropdownModel", "ngClass", "selected", "clicked"], ["repairTypeControl", ""], [1, "col-3", "date-filter"], [1, "date-filter", 3, "inputModel", "controlOutput"], [1, "col-3", "action-btn", "d-flex"], [3, "buttonModel"], [1, "ml-10", 3, "buttonModel"], [1, "fx-1", "dashboard-container"], [1, "row"], [1, "card"], [4, "ngIf", "ngIfElse"], [1, "row", "mt-30"], [1, "col-5"], [1, "col-7"], [1, "card", "customer-graph-container"], [1, "footer-full-wrapper", "estimate-details-footer"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], ["loading", ""], [1, "customer-tags"], ["name", "dropdown-up", "location", "after", 1, "multiselect-dropdown", 3, "options"], ["name", "dropdown-down", "location", "after", 3, "options"], [1, "customer-list-name"], [1, "customer-list-email"], [3, "svgIcon"], [1, "card-action"], [1, "card-title"], [1, "card-description"], [1, "text-primary"], [1, "graph-title"], [1, "row", "col", "card-btn"], [4, "ngFor", "ngForOf"], [1, "mt-30"], [3, "series", "chart", "labels", "responsive", "colors", "stroke", "dataLabels", "plotOptions", "states", 4, "ngIf"], ["class", "dashboard-no-data-found", 4, "ngIf"], [4, "ngIf"], ["type", "button", 3, "ngClass", "click"], [3, "series", "chart", "labels", "responsive", "colors", "stroke", "dataLabels", "plotOptions", "states"], ["chart", ""], [1, "dashboard-no-data-found"], [1, "no-data-svg", 3, "svgIcon"], [1, "no-data-text"], ["class", "repair-details-total", 4, "ngIf", "ngIfElse"], ["totalEstimatedRepair", ""], [1, "repair-details-total"], [1, "bottom-total"], [1, "bottom-title"], ["class", "customers-graph", 4, "ngIf"], [1, "customers-graph"], [1, "currency-value"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "yaxis", "legend", "fill", "stroke", "tooltip"], [1, "inner-loading", 3, "strokeWidth", "diameter"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-accordion")(3, "mat-expansion-panel", 2, 3)(5, "mat-expansion-panel-header")(6, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "chq-dropdown", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selected", function DashboardComponent_Template_chq_dropdown_selected_11_listener($event) {
          return ctx.selectFilter($event);
        })("clicked", function DashboardComponent_Template_chq_dropdown_clicked_11_listener($event) {
          return ctx.hideDropdown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 5)(14, "chq-dropdown", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selected", function DashboardComponent_Template_chq_dropdown_selected_14_listener($event) {
          return ctx.selectFilter($event);
        })("clicked", function DashboardComponent_Template_chq_dropdown_clicked_14_listener($event) {
          return ctx.hideDropdown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 5)(17, "div", 10)(18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "dx-tag-box", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function DashboardComponent_Template_dx_tag_box_valueChange_21_listener($event) {
          return ctx.selectedCustomer = $event;
        })("onSelectionChanged", function DashboardComponent_Template_dx_tag_box_onSelectionChanged_21_listener($event) {
          return ctx.onValueChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, DashboardComponent_div_23_Template, 2, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, DashboardComponent_dxi_button_24_Template, 1, 1, "dxi-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, DashboardComponent_dxi_button_25_Template, 1, 1, "dxi-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, DashboardComponent_div_26_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "div", 18)(28, "chq-dropdown", 8, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selected", function DashboardComponent_Template_chq_dropdown_selected_28_listener($event) {
          return ctx.selectFilter($event);
        })("clicked", function DashboardComponent_Template_chq_dropdown_clicked_28_listener($event) {
          return ctx.hideDropdown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 5)(31, "chq-dropdown", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selected", function DashboardComponent_Template_chq_dropdown_selected_31_listener($event) {
          return ctx.selectFilter($event);
        })("clicked", function DashboardComponent_Template_chq_dropdown_clicked_31_listener($event) {
          return ctx.hideDropdown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 22)(34, "chq-input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("controlOutput", function DashboardComponent_Template_chq_input_controlOutput_34_listener($event) {
          return ctx.updateInput($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "div", 22)(36, "chq-input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("controlOutput", function DashboardComponent_Template_chq_input_controlOutput_36_listener($event) {
          return ctx.updateInput($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](38, "chq-button", 25)(39, "chq-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "div", 27)(41, "div", 28)(42, "div", 5)(43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](44, DashboardComponent_div_44_Template, 37, 88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "div", 5)(46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](47, DashboardComponent_div_47_Template, 12, 9, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "div", 5)(49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](50, DashboardComponent_div_50_Template, 31, 72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "div", 5)(52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](53, DashboardComponent_div_53_Template, 31, 72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "div", 31)(55, "div", 32)(56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](57, DashboardComponent_div_57_Template, 13, 10, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "div", 33)(59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](60, DashboardComponent_div_60_Template, 6, 5, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "div", 35)(62, "div", 36)(63, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](64, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](65, DashboardComponent_ng_template_65_Template, 1, 2, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](22);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 37, "filters"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dropdownModel", ctx.organizationDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dropdownModel", ctx.workProviderDropdown)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](41, _c8, ctx.workProviderDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](20, 39, "customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("items", ctx.customerList)("showSelectionControls", true)("searchEnabled", true)("showDataBeforeSearch", true)("multiline", false)("showClearButton", false)("value", ctx.selectedCustomer)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](43, _c8, ctx.customerDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dxTemplateOf", "customTag");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !_r3.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _r3.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dxTemplateOf", "item");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dropdownModel", ctx.bookingTypeDropdown)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](45, _c8, ctx.bookingTypeDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dropdownModel", ctx.repairTypeDropdown)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](47, _c8, ctx.repairTypeDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("inputModel", ctx.startDateTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("inputModel", ctx.endDateTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("buttonModel", ctx.applyButtonModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("buttonModel", ctx.resetButtonModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r16);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_11__.ChqInputComponent, _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.ChqDropdownComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_13__.ChqButtonComponent, _widgets_chq_chart_chq_chart_component__WEBPACK_IMPORTED_MODULE_14__.ChqChartComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_21__.DxTagBoxComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxiButtonComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_23__.DxTemplateDirective, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinner, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionPanelTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_15__.XaCurrencyPipe],
    styles: [".dashboard-header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-header-wrapper[_ngcontent-%COMP%]   .dashboard-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n  .dashboard-summary {\n  height: calc(100vh - 110px);\n}\n  .dashboard-summary .card-btn {\n  margin-top: 10px;\n  margin-right: 8px;\n}\n  .dashboard-summary .card-btn   button {\n  width: auto !important;\n  padding: 6px 12px;\n  height: 32px !important;\n  margin-right: 6px;\n  margin-bottom: 10px;\n}\n  .dashboard-summary .card-btn   .button-secondary {\n  color: #fff;\n}\n  .dashboard-summary .mat-content {\n  flex: initial;\n}\n  .dashboard-summary .dashbord-filter-dropdown > div {\n  margin-bottom: 15px;\n}\n  .dashboard-summary .dashbord-filter-dropdown > div .ml-10 {\n  margin-left: 10px;\n}\n  .dashboard-summary .action-btn button {\n  margin-top: 25px;\n  width: auto !important;\n}\n  .dashboard-summary .card {\n  padding: 16px;\n  background-color: var(--xa-white);\n  border-radius: 8px;\n  height: 100%;\n  min-height: 180px;\n  box-sizing: border-box;\n}\n  .dashboard-summary .card-title {\n  font-weight: 800;\n  font-size: 23px;\n  color: var(--xa-primary);\n  display: block;\n  margin: 10px 0;\n}\n@media (max-width: 1200px) {\n    .dashboard-summary .card-title {\n    font-size: 20px;\n  }\n}\n  .dashboard-summary .graph-title {\n  font-weight: 700;\n  font-size: 22px;\n  display: block;\n  margin: 0 0 10px;\n}\n  .dashboard-summary .card-action {\n  color: var(--colors-gray-70, --xa-dark-gray);\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  margin: 0;\n}\n  .dashboard-summary .card-description {\n  color: var(--colors-gray-70, --xa-dark-gray);\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  margin: 5px 0 0;\n}\n  .dashboard-summary .card-description span {\n  color: var(--xa-primary);\n}\n  .dashboard-summary .mt-30 {\n  margin-top: 30px;\n}\n  .dashboard-summary .repair-details-total {\n  margin-left: 50px;\n}\n  .dashboard-summary .repair-details-total .bottom-total {\n  color: var(--colors-gray-60, rgba(26, 34, 51, 0.6));\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n  .dashboard-summary .repair-details-total .bottom-title {\n  color: var(--primary-color, var(--xa-primary));\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n  display: block;\n}\n  .dashboard-summary .customers-graph {\n  margin-left: -10px;\n  position: relative;\n}\n  .dashboard-summary .customer-graph-container {\n  overflow-y: auto;\n  padding-left: 30px;\n}\n  .dashboard-summary .customer-graph-container .graph-title {\n  margin-bottom: 41px;\n}\n  .dashboard-summary .customer-graph-container-hori {\n  overflow: auto;\n  padding-left: 30px;\n  height: 400px;\n  min-height: 100%;\n}\n  .dashboard-summary .customer-graph-container-hori .graph-title {\n  margin-bottom: 41px;\n}\n  .dashboard-summary .inner-loading {\n  left: 50%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  height: 30px !important;\n  width: 30px !important;\n}\n  .dashboard-summary .filter-section .mat-expansion-panel-header {\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  max-height: 48px !important;\n  padding: 0 10px;\n  background: var(--colors-background, --xa-popup-light-gray) !important;\n}\n  .dashboard-summary .filter-section .mat-expansion-panel-body {\n  padding: 0 14px 16px;\n}\n  .dashboard-summary .filter-section mat-accordion {\n  width: 100%;\n  padding: 0px 14px;\n}\n  .dashboard-summary .filter-section .mat-expansion-panel {\n  box-shadow: none !important;\n  border-radius: 0 !important;\n  border-bottom: 0.4px solid var(--colors-gray-40, rgba(26, 34, 51, 0.4));\n  background: var(--colors-background, --xa-popup-light-gray) !important;\n}\n  .dashboard-summary .filter-section .mat-expansion-panel.mat-expanded {\n  border-radius: 9px;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25) !important;\n  border-bottom: 0 !important;\n}\n  .dashboard-summary .dashbaord-reapir-type li   .mat-icon {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  left: 25px;\n}\n  .dashboard-summary .dashbaord-reapir-type.disable-input {\n  pointer-events: none;\n  opacity: 0.6;\n}\n  .dashboard-summary .apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: #4c6bd2;\n  padding: 10px;\n  color: #fff;\n  overflow: visible;\n}\n  .dashboard-summary .apexcharts-tooltip.apexcharts-theme-light .arrow_box {\n  min-width: 100px;\n}\n  .dashboard-summary .apexcharts-tooltip.apexcharts-theme-light .tootip-heading {\n  font-size: 10px;\n  margin-bottom: 10px;\n  display: block;\n}\n  .dashboard-summary .apexcharts-tooltip.apexcharts-theme-light .tootip-label {\n  font-size: 10px;\n  margin-right: 8px;\n}\n  .dashboard-summary .apexcharts-tooltip.apexcharts-theme-light .tootip-value {\n  font-size: 12px;\n}\n  .dashboard-summary .apexcharts-tooltip.apexcharts-theme-light .justify-content-between {\n  justify-content: space-between;\n}\n  .dashboard-summary .currency-value {\n  text-align: center;\n  position: absolute;\n  transform: rotate(-90deg);\n  left: -30px;\n  top: calc(50% - 25px);\n  color: var(--colors-gray-70, rgba(26, 34, 51, 0.7));\n  font-size: 12px;\n}\n  .dashboard-summary .search-dropdown {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  width: 100%;\n  gap: 5px;\n}\n  .dashboard-summary .search-dropdown .input-label {\n  font-weight: 500;\n  font-size: 12px;\n  color: var(--xa-dark-gray);\n  padding: 0;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n  .dashboard-summary .search-dropdown   .dx-texteditor.dx-editor-outlined {\n  border-radius: 8px;\n  border: none;\n}\n  .dashboard-summary .search-dropdown   .dx-tag-container.dx-texteditor-input-container {\n  padding: 12px 16px;\n}\n  .dashboard-summary .search-dropdown .dx-button-has-icon .dx-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n}\n  .dashboard-summary .search-dropdown .dx-widget.dx-button:hover {\n  background: none !important;\n}\n  .dashboard-summary .customer-name {\n  justify-content: initial !important;\n  flex-direction: initial !important;\n}\n  .dashboard-summary .customer-tags {\n  font-size: 16px;\n}\n  .dashboard-summary .dx-texteditor-container {\n  max-width: 400px;\n}\n  .dashboard-summary mat-icon.calendar-icon {\n  top: 33px !important;\n}\n  .dashboard-summary .mat-expansion-indicator {\n  line-height: 0;\n}\n  .dashboard-summary .mat-expansion-indicator:after {\n  vertical-align: super;\n}\n@media (max-width: 991px) {\n    .dashboard-summary .mt-30 {\n    margin-top: 18px;\n  }\n    .dashboard-summary .col-5,   .dashboard-summary .col-7 {\n    padding: 0;\n    flex-basis: 100%;\n    max-width: 100%;\n    margin-bottom: 12px;\n  }\n    .dashboard-summary .col-3 {\n    flex-basis: 50%;\n    max-width: 50%;\n    margin-bottom: 12px;\n  }\n}\n  .dashboard-summary .dashboard-no-data-found {\n  text-align: center;\n  font-size: 14px;\n  color: var(--colors-gray-70, rgba(26, 34, 51, 0.7));\n}\n  .dashboard-summary .dashboard-no-data-found .mat-icon {\n  width: 100px;\n  height: 100px;\n}\n  .dashboard-summary .date-filter input[readonly] {\n  opacity: 1;\n}\n\n  .dx-dropdownlist-popup-wrapper   .dx-list-select-all {\n  display: none;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-list-select-all-label {\n  margin-left: 20px;\n  font-size: 12px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-indeterminate .dx-checkbox-icon::before {\n  background-color: #76d672;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-checked .dx-checkbox-icon {\n  color: #fff;\n  background-color: #76d672;\n  border: 1px solid #76d672 !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-list-item-content {\n  font-size: 12px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-icon {\n  height: 16px;\n  width: 16px;\n  border-radius: 3px;\n  position: absolute;\n  left: 15px;\n  right: 0;\n  color: #fff;\n  overflow: hidden;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-checked .dx-checkbox-icon::before {\n  font-size: 12px;\n  top: 35%;\n  font-weight: 700;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-widget {\n  font-size: 16px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-overlay-content {\n  border: 1px solid #19191b !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-placeholder::before {\n  padding: 12px 16px;\n}\n  .dx-dropdownlist-popup-wrapper .dx-popup-content {\n  max-height: 300px !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-template-wrapper {\n  display: inherit;\n}\n  .dx-dropdownlist-popup-wrapper .customer-list-name,   .dx-dropdownlist-popup-wrapper .customer-list-email {\n  color: var(--xa-black);\n  word-break: break-word;\n  white-space: normal;\n}\n  .dx-dropdownlist-popup-wrapper .customer-list-email {\n  opacity: 0.7;\n  font-style: italic;\n}\n\n  .dx-placeholder {\n  font-size: 16px;\n}\n\n  .dx-placeholder::before {\n  padding: 8px 9px;\n}\n\n  .dx-texteditor-input {\n  font-size: 16px;\n  font-family: \"Inter\" !important;\n  height: 19px;\n}\n\n.dashboard-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  overflow-x: hidden;\n  padding: 30px 0;\n}\n\n.disable-input[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUlJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFNQTtFQUNJLDJCQUFBO0FBSEo7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUdRO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURaO0FBR1E7RUFDSSxXQUFBO0FBRFo7QUFLSTtFQUNJLGFBQUE7QUFIUjtBQU1JO0VBQ0ksbUJBQUE7QUFKUjtBQUtRO0VBQ0ksaUJBQUE7QUFIWjtBQVFRO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQU5aO0FBVUk7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBUlI7QUFVSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFSUjtBQVNRO0VBTko7SUFPUSxlQUFBO0VBTlY7QUFDRjtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUFI7QUFTSTtFQUNJLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQVBSO0FBU0k7RUFDSSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFQUjtBQVFRO0VBQ0ksd0JBQUE7QUFOWjtBQVNJO0VBQ0ksZ0JBQUE7QUFQUjtBQVVJO0VBQ0ksaUJBQUE7QUFSUjtBQVNRO0VBQ0ksbURBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFQWjtBQVNRO0VBQ0ksOENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFQWjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQVJSO0FBV0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBVFI7QUFVUTtFQUNJLG1CQUFBO0FBUlo7QUFZSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVZSO0FBV1E7RUFDSSxtQkFBQTtBQVRaO0FBWUk7RUFDSSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQVZSO0FBYVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHNFQUFBO0FBWFo7QUFhUTtFQUNJLG9CQUFBO0FBWFo7QUFhUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQVhaO0FBYVE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUVBQUE7RUFDQSxzRUFBQTtBQVhaO0FBYVE7RUFDSSxrQkFBQTtFQUNBLDBEQUFBO0VBQ0EsMkJBQUE7QUFYWjtBQWdCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBZGhCO0FBaUJRO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBZlo7QUFrQkk7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWhCUjtBQStCUTtFQUNJLGdCQUFBO0FBN0JaO0FBZ0NRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQTlCWjtBQWlDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQS9CWjtBQWtDUTtFQUNJLGVBQUE7QUFoQ1o7QUFtQ1E7RUFDSSw4QkFBQTtBQWpDWjtBQW9DSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtBQWxDUjtBQXFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFuQ1I7QUFvQ1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFsQ1o7QUFvQ1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFsQ1o7QUFvQ1E7RUFDSSxrQkFBQTtBQWxDWjtBQW9DUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWxDWjtBQXFDWTtFQUNJLDJCQUFBO0FBbkNoQjtBQXVDSTtFQUNJLG1DQUFBO0VBQ0Esa0NBQUE7QUFyQ1I7QUF1Q0k7RUFDSSxlQUFBO0FBckNSO0FBd0NJO0VBQ0ksZ0JBQUE7QUF0Q1I7QUF5Q0k7RUFDSSxvQkFBQTtBQXZDUjtBQXlDSTtFQUNJLGNBQUE7QUF2Q1I7QUF3Q1E7RUFDSSxxQkFBQTtBQXRDWjtBQTJDSTtFQUNJO0lBQ0ksZ0JBQUE7RUF6Q1Y7RUEyQ007O0lBRUksVUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBekNWO0VBMkNNO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQXpDVjtBQUNGO0FBNENJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbURBQUE7QUExQ1I7QUEyQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQXpDWjtBQTZDUTtFQUNJLFVBQUE7QUEzQ1o7O0FBaURJO0VBRUksYUFBQTtBQS9DUjtBQWtESTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQWhEUjtBQW1ESTtFQUVJLHlCQUFBO0FBbERSO0FBcURJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUFuRFI7QUFzREk7RUFDSSxlQUFBO0FBcERSO0FBdURJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF0RFI7QUF5REk7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBdkRSO0FBMERJO0VBQ0ksZUFBQTtBQXhEUjtBQTJESTtFQUNJLG9DQUFBO0FBekRSO0FBNERJO0VBQ0ksa0JBQUE7QUExRFI7QUE0REk7RUFDSSw0QkFBQTtBQTFEUjtBQTRESTtFQUNJLGdCQUFBO0FBMURSO0FBNERJOztFQUVJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQTFEUjtBQTZESTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQTNEUjs7QUErREE7RUFDSSxlQUFBO0FBNURKOztBQStEQTtFQUNJLGdCQUFBO0FBNURKOztBQStEQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUE1REo7O0FBK0RBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTVESjs7QUErREE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUE1REoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYmFja2dyb3VuZC1jb2xvciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG4uZGFzaGJvYXJkLWhlYWRlci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5kYXNoYm9hcmQtdGFicyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5kYXNoYm9hcmQtc3VtbWFyeSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcbiAgICAuY2FyZC1idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgOjpuZy1kZWVwIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6bmctZGVlcCAuYnV0dG9uLXNlY29uZGFyeSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNvbnRlbnQge1xyXG4gICAgICAgIGZsZXg6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhc2hib3JkLWZpbHRlci1kcm9wZG93bj5kaXYge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgLm1sLTEwIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb24tYnRuIHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1wcmltYXJ5KTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdyYXBoLXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtYWN0aW9uIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNzAsIC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNzAsIC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tdC0zMCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVwYWlyLWRldGFpbHMtdG90YWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIC5ib3R0b20tdG90YWwge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNjAsIHJnYmEoMjYsIDM0LCA1MSwgMC42KSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm90dG9tLXRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsIHZhcigtLXhhLXByaW1hcnkpKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmN1c3RvbWVycy1ncmFwaCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuY3VzdG9tZXItZ3JhcGgtY29udGFpbmVyIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAuZ3JhcGgtdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY3VzdG9tZXItZ3JhcGgtY29udGFpbmVyLWhvcmkge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLmdyYXBoLXRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXItbG9hZGluZyB7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyLXNlY3Rpb24ge1xyXG4gICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3JzLWJhY2tncm91bmQsIC0teGEtcG9wdXAtbGlnaHQtZ3JheSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweCAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtYWNjb3JkaW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjRweCBzb2xpZCB2YXIoLS1jb2xvcnMtZ3JheS00MCwgcmdiYSgyNiwgMzQsIDUxLCAwLjQpKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3JzLWJhY2tncm91bmQsIC0teGEtcG9wdXAtbGlnaHQtZ3JheSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwubWF0LWV4cGFuZGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhc2hiYW9yZC1yZWFwaXItdHlwZSB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICA6Om5nLWRlZXAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmRpc2FibGUtaW5wdXQge1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hcGV4Y2hhcnRzLXRvb2x0aXAuYXBleGNoYXJ0cy10aGVtZS1saWdodCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNGM2YmQyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgLy8gLmFycm93X2JveDpiZWZvcmUge1xyXG4gICAgICAgIC8vICAgICB3aWR0aDogMDtcclxuICAgICAgICAvLyAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIC8vICAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLy8gICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjNGM2YmQyO1xyXG4gICAgICAgIC8vICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyAgICAgbGVmdDogLTRweDtcclxuICAgICAgICAvLyAgICAgei1pbmRleDogOTtcclxuICAgICAgICAvLyAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLmFycm93X2JveCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9vdGlwLWhlYWRpbmcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvb3RpcC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9vdGlwLXZhbHVlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdXJyZW5jeS12YWx1ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNzAsIHJnYmEoMjYsIDM0LCA1MSwgMC43KSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtZHJvcGRvd24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgIC5pbnB1dC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIC5keC10ZXh0ZWRpdG9yLmR4LWVkaXRvci1vdXRsaW5lZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Om5nLWRlZXAgLmR4LXRhZy1jb250YWluZXIuZHgtdGV4dGVkaXRvci1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5keC1idXR0b24taGFzLWljb24gLmR4LWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5keC13aWRnZXQuZHgtYnV0dG9uIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tZXItbmFtZSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jdXN0b21lci10YWdzIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmR4LXRleHRlZGl0b3ItY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uLmNhbGVuZGFyLWljb24ge1xyXG4gICAgICAgIHRvcDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgLm10LTMwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC01LFxyXG4gICAgICAgIC5jb2wtNyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC0zIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhc2hib2FyZC1uby1kYXRhLWZvdW5kIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3JheS03MCwgcmdiYSgyNiwgMzQsIDUxLCAwLjcwKSk7XHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXRlLWZpbHRlciB7XHJcbiAgICAgICAgaW5wdXRbcmVhZG9ubHldIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHgtZHJvcGRvd25saXN0LXBvcHVwLXdyYXBwZXIge1xyXG4gICAgOjpuZy1kZWVwIC5keC1saXN0LXNlbGVjdC1hbGwge1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LWxpc3Qtc2VsZWN0LWFsbC1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuZHgtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAuZHgtY2hlY2tib3gtaWNvbjo6YmVmb3JlIHtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc2ZDY3MjtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LWNoZWNrYm94LWNoZWNrZWQgLmR4LWNoZWNrYm94LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NmQ2NzI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc2ZDY3MiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuZHgtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LWNoZWNrYm94LWljb24ge1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtZ3JheSkhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC1jaGVja2JveC1jaGVja2VkIC5keC1jaGVja2JveC1pY29uOjpiZWZvcmUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuZHgtd2lkZ2V0IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC1vdmVybGF5LWNvbnRlbnQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOTE5MWIgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuZHgtcGxhY2Vob2xkZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmR4LXBvcHVwLWNvbnRlbnQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAgLmR4LXRlbXBsYXRlLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tZXItbGlzdC1uYW1lLFxyXG4gICAgLmN1c3RvbWVyLWxpc3QtZW1haWwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lci1saXN0LWVtYWlsIHtcclxuICAgICAgICBvcGFjaXR5OiAuNztcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHgtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmR4LXBsYWNlaG9sZGVyOjpiZWZvcmUge1xyXG4gICAgcGFkZGluZzogOHB4IDlweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5keC10ZXh0ZWRpdG9yLWlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcblxyXG4uZGlzYWJsZS1pbnB1dCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 45493:
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);






function HomeComponent_div_1_ng_container_7_ng_container_11_mat_header_cell_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "vehicle_make"), " ");
  }
}
function HomeComponent_div_1_ng_container_7_ng_container_11_mat_header_cell_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, column_r8), " ");
  }
}
function HomeComponent_div_1_ng_container_7_ng_container_11_mat_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_1_ng_container_7_ng_container_11_mat_header_cell_1_ng_container_1_Template, 3, 3, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_1_ng_container_7_ng_container_11_mat_header_cell_1_ng_template_2_Template, 2, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", column_r8 === "vehicle_make")("ngIfElse", _r12);
  }
}
function HomeComponent_div_1_ng_container_7_ng_container_11_mat_cell_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", element_r16[column_r8]["icon"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r16[column_r8]["text"]);
  }
}
const _c0 = function (a0, a1, a2, a3, a4) {
  return {
    "assigned": a0,
    "readyforinvoice": a1,
    "pickedup": a2,
    "likelyouttoday": a3,
    "noshow": a4
  };
};
function HomeComponent_div_1_ng_container_7_ng_container_11_mat_cell_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c0, element_r16[column_r8] === "Assigned", element_r16[column_r8] === "Ready for Invoice", element_r16[column_r8] === "Picked Up", element_r16[column_r8] === "Likely Out Today", element_r16[column_r8] === "No Show"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r16[column_r8]);
  }
}
function HomeComponent_div_1_ng_container_7_ng_container_11_mat_cell_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r16[column_r8], "dd/MM/YYYY - HH:mm:ss"));
  }
}
function HomeComponent_div_1_ng_container_7_ng_container_11_mat_cell_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r16[column_r8]);
  }
}
function HomeComponent_div_1_ng_container_7_ng_container_11_mat_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_1_ng_container_7_ng_container_11_mat_cell_2_span_2_Template, 4, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_div_1_ng_container_7_ng_container_11_mat_cell_2_span_3_Template, 2, 8, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_div_1_ng_container_7_ng_container_11_mat_cell_2_span_4_Template, 3, 4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_div_1_ng_container_7_ng_container_11_mat_cell_2_span_5_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", column_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "vehicle_make");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "date");
  }
}
function HomeComponent_div_1_ng_container_7_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_1_ng_container_7_ng_container_11_mat_header_cell_1_Template, 4, 2, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_1_ng_container_7_ng_container_11_mat_cell_2_Template, 6, 4, "mat-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", column_r8);
  }
}
function HomeComponent_div_1_ng_container_7_mat_header_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function HomeComponent_div_1_ng_container_7_mat_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
function HomeComponent_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11)(2, "div", 12)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 15)(10, "mat-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_div_1_ng_container_7_ng_container_11_Template, 3, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_div_1_ng_container_7_mat_header_row_12_Template, 1, 0, "mat-header-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_div_1_ng_container_7_mat_row_13_Template, 1, 0, "mat-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const table_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, table_r3.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, "view_all"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", table_r3.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.displayedColumnsRepair);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumnsRepair);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumnsRepair);
  }
}
function HomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_div_1_ng_container_7_Template, 14, 10, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "repair");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, "repair"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.repairTableData);
  }
}
function HomeComponent_div_2_ng_container_7_ng_container_11_mat_header_cell_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "vehicle_make"), " ");
  }
}
function HomeComponent_div_2_ng_container_7_ng_container_11_mat_header_cell_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const column_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, column_r37), " ");
  }
}
function HomeComponent_div_2_ng_container_7_ng_container_11_mat_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_2_ng_container_7_ng_container_11_mat_header_cell_1_ng_container_1_Template, 3, 3, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_2_ng_container_7_ng_container_11_mat_header_cell_1_ng_template_2_Template, 2, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const column_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", column_r37 === "vehicle_make")("ngIfElse", _r41);
  }
}
function HomeComponent_div_2_ng_container_7_ng_container_11_mat_cell_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const column_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", element_r45[column_r37]["icon"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r45[column_r37]["text"]);
  }
}
function HomeComponent_div_2_ng_container_7_ng_container_11_mat_cell_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 31);
  }
  if (rf & 2) {
    const element_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const column_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", element_r45[column_r37], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_div_2_ng_container_7_ng_container_11_mat_cell_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const column_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r45[column_r37], "dd/MM/YYYY - HH:mm:ss"));
  }
}
function HomeComponent_div_2_ng_container_7_ng_container_11_mat_cell_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const column_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r45[column_r37]);
  }
}
function HomeComponent_div_2_ng_container_7_ng_container_11_mat_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_2_ng_container_7_ng_container_11_mat_cell_2_span_2_Template, 4, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_div_2_ng_container_7_ng_container_11_mat_cell_2_img_3_Template, 1, 1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_div_2_ng_container_7_ng_container_11_mat_cell_2_span_4_Template, 3, 4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_div_2_ng_container_7_ng_container_11_mat_cell_2_span_5_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", column_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "vehicle_make");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "date");
  }
}
function HomeComponent_div_2_ng_container_7_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_2_ng_container_7_ng_container_11_mat_header_cell_1_Template, 4, 2, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_2_ng_container_7_ng_container_11_mat_cell_2_Template, 6, 4, "mat-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", column_r37);
  }
}
function HomeComponent_div_2_ng_container_7_mat_header_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function HomeComponent_div_2_ng_container_7_mat_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
function HomeComponent_div_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11)(2, "div", 12)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 15)(10, "mat-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_div_2_ng_container_7_ng_container_11_Template, 3, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_div_2_ng_container_7_mat_header_row_12_Template, 1, 0, "mat-header-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_div_2_ng_container_7_mat_row_13_Template, 1, 0, "mat-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const table_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, table_r32.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, "view_all"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", table_r32.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r31.displayedColumnsquote);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r31.displayedColumnsquote);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r31.displayedColumnsquote);
  }
}
function HomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_div_2_ng_container_7_Template, 14, 10, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, "quote"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.quoteTableData);
  }
}
class HomeComponent {
  /**
   * constructor
   * @param commonService
   */
  constructor(commonService) {
    this.commonService = commonService;
    this.displayedColumnsRepair = ['vehicle_make', 'date', 'name', 'status'];
    this.displayedColumnsquote = ['vehicle_make', 'date', 'name'];
    this.repairTableData = [{
      title: 'open_jobs',
      role: 'repair',
      data: [{
        'id': 1,
        'vehicle_make': {
          'icon': 'assets/icons/audi.svg',
          'text': 'Audi S8'
        },
        'date': new Date().toUTCString(),
        'name': 'John Doe',
        'status': 'Ready for Invoice'
      }]
    }, {
      title: 'booking_in_today',
      role: 'repair',
      data: [{
        'id': 1,
        'vehicle_make': {
          'icon': 'assets/icons/bmw.svg',
          'text': 'BMW 3 Series'
        },
        'date': new Date().toUTCString(),
        'name': 'John Doe',
        'status': 'Assigned'
      }, {
        'id': 1,
        'vehicle_make': {
          'icon': 'assets/icons/audi.svg',
          'text': 'Audi S8'
        },
        'date': new Date().toUTCString(),
        'name': 'John Doe',
        'status': 'Assigned'
      }]
    }, {
      title: 'booking_out_today',
      role: 'repair',
      data: [{
        'id': 1,
        'vehicle_make': {
          'icon': 'assets/icons/bmw.svg',
          'text': 'BMW 3 Series'
        },
        'date': new Date().toUTCString(),
        'name': 'John Doe',
        'status': 'Picked Up'
      }, {
        'id': 1,
        'vehicle_make': {
          'icon': 'assets/icons/audi.svg',
          'text': 'Audi S8'
        },
        'date': new Date().toUTCString(),
        'name': 'John Doe',
        'status': 'Likely Out Today'
      }]
    }];
    this.quoteTableData = [{
      title: 'estimation_pending_approval',
      role: 'quote',
      data: [{
        'id': 1,
        'vehicle_make': {
          'icon': 'assets/icons/bmw.svg',
          'text': 'BMW 3 Series'
        },
        'date': new Date().toUTCString(),
        'name': 'John Doe'
      }]
    }, {
      title: 'approved_estimation',
      role: 'quote',
      data: [{
        'id': 1,
        'vehicle_make': {
          'icon': 'assets/icons/bmw.svg',
          'text': 'BMW 3 Series'
        },
        'date': new Date().toUTCString(),
        'name': 'John Doe'
      }, {
        'id': 2,
        'vehicle_make': {
          'icon': 'assets/icons/audi.svg',
          'text': 'Audi S8'
        },
        'date': new Date().toUTCString(),
        'name': 'John Doe'
      }]
    }, {
      title: 'rejected_estimation',
      role: 'quote',
      data: [{
        'id': 1,
        'vehicle_make': {
          'icon': 'assets/icons/bmw.svg',
          'text': 'BMW 3 Series'
        },
        'date': new Date().toUTCString(),
        'name': 'John Doe'
      }, {
        'id': 2,
        'vehicle_make': {
          'icon': 'assets/icons/audi.svg',
          'text': 'Audi S8'
        },
        'date': new Date().toUTCString(),
        'name': 'John Doe'
      }]
    }];
    this.repairPermission = false;
    this.quotePermission = false;
    this.commonService.userPermission.subscribe(res => {
      this.repairPermission = res.repair;
      this.quotePermission = res.quote;
    });
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 7,
    vars: 2,
    consts: [[1, "home-wrapper"], ["class", "block", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda.png"], [1, "block"], [1, "heading"], ["color", "primary", "aria-hidden", "false", "aria-label", "call icon", 3, "svgIcon"], [1, "card-wrapper"], [4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header"], [1, "title"], [1, "button"], [1, "card-body"], [1, "customStyling", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], [4, "matHeaderCellDef"], [4, "matCellDef"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "ngSwitch"], ["class", "image-text", 4, "ngSwitchCase"], ["class", "status", 3, "ngClass", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "image-text"], ["alt", "Image", 3, "src"], [1, "status", 3, "ngClass"], ["alt", "Image", 3, "src", 4, "ngSwitchCase"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 8, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 8, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.repairPermission);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.quotePermission);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".home-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: calc(5px + 1vw);\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.home-wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 500px;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.home-wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  padding: 10px 0;\n  gap: 5px;\n  align-items: center;\n}\n.home-wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 35px;\n  color: #1A2233;\n}\n.home-wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--xa-white);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 24px;\n  border-radius: 10px;\n  flex: 1 1 500px;\n  width: calc(100% - 20px);\n  padding: 10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 480px;\n  background: var(--xa-white);\n  border-radius: 10px;\n  \n  flex: none;\n  order: 0;\n  align-self: stretch;\n  flex-grow: 0;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: space-between;\n  align-items: center;\n  padding: calc(5px + 0.5vw);\n  height: 35px;\n  background: var(--xa-tertiary);\n  border-radius: 10px 10px 0px 0px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n  color: #0B0E15;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%] {\n  min-height: 30px !important;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%] {\n  background: #EEEFF8;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 35px;\n  display: flex;\n  align-items: center;\n  color: var(--xa-black-medium);\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%] {\n  padding: calc(5px + 0.5vw);\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%] {\n  border: none;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 11px;\n  line-height: 35px;\n  color: var(--xa-black);\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   .image-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: calc(5px + 0.5vw);\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   .image-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0 10px;\n  border-radius: 19px;\n  text-transform: capitalize;\n  width: 90px;\n  height: 20px;\n  font-style: normal;\n  font-size: 10px;\n  line-height: 10px;\n  display: flex;\n  align-items: center;\n  color: #0B0E15;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  justify-content: center;\n  font-weight: 500;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   .status.assigned[_ngcontent-%COMP%] {\n  background: #76D672;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   .status.readyforinvoice[_ngcontent-%COMP%] {\n  background: #B3E573;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   .status.noshow[_ngcontent-%COMP%] {\n  background: #B53E3E;\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   .status.pickedup[_ngcontent-%COMP%] {\n  background: #E8DA18;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   .status.likelyouttoday[_ngcontent-%COMP%] {\n  background: #B3E573;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--xa-white);\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #F9F9F9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFDUTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQUNaO0FBQ1k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQUFoQjtBQUlRO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FBRlo7O0FBT0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUVBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTko7QUFRSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUVBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFQUjtBQVNRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFQWjtBQVVRO0VBQ0ksZ0JBQUE7QUFSWjtBQWFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFYUjtBQWFRO0VBQ0ksMkJBQUE7QUFYWjtBQWFRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsNkJBQUE7QUFaWjtBQWVRO0VBQ0ksMEJBQUE7QUFiWjtBQWVZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtBQWRoQjtBQWdCZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWRwQjtBQWdCb0I7RUFDSSxhQUFBO0FBZHhCO0FBa0JnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFoQnBCO0FBa0JvQjtFQUNJLG1CQUFBO0FBaEJ4QjtBQW1Cb0I7RUFDSSxtQkFBQTtBQWpCeEI7QUFvQm9CO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBbEJ4QjtBQXFCb0I7RUFDSSxtQkFBQTtBQW5CeEI7QUFzQm9CO0VBQ0ksbUJBQUE7QUFwQnhCO0FBMEJRO0VBQ0ksaUNBQUE7QUF4Qlo7QUEyQlE7RUFDSSx5QkFBQTtBQXpCWiIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogY2FsYyg1cHggKyAxdncpO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLmJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDEgMSA1MDBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxQTIyMzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBnYXA6IDI0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSA1MDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDQ4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAvKiBJbnNpZGUgYXV0byBsYXlvdXQgKi9cclxuXHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgb3JkZXI6IDA7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiBjYWxjKDVweCArIDAuNXZ3KTtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXRlcnRpYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzBCMEUxNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBtYXQtaGVhZGVyLXJvdyB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VFRUZGODtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQtcm93IHtcclxuICAgICAgICAgICAgcGFkZGluZzogY2FsYyg1cHggKyAwLjV2dyk7XHJcblxyXG4gICAgICAgICAgICBtYXQtY2VsbCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltYWdlLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IGNhbGMoNXB4ICsgMC41dncpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMEIwRTE1O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuYXNzaWduZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzZENjcyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5yZWFkeWZvcmludm9pY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQjNFNTczO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5ub3Nob3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQjUzRTNFO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLnBpY2tlZHVwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0U4REExODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYubGlrZWx5b3V0dG9kYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQjNFNTczO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0LXJvdzpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQtcm93Om50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 44882:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45493);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var src_app_icons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/icons.module */ 25852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 48869);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-apexcharts */ 93239);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular */ 82846);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular */ 83658);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helper/pipe.module */ 39816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);















const routes = [{
  path: '',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_1__.VersionControlResolver
  }
}];
class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_2__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxTagBoxModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DevExtremeModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_7__.PipeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_2__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxTagBoxModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DevExtremeModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_7__.PipeModule]
  });
})();

/***/ }),

/***/ 74743:
/*!******************************************************!*\
  !*** ./src/app/resolvers/versionControl.resolver.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionControlResolver": () => (/* binding */ VersionControlResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common/common.service */ 69763);



class VersionControlResolver {
  /**
   * contructor
   * @param commonService
   */
  constructor(commonService) {
    this.commonService = commonService;
  }
  /**
   * resolve the
   * @returns
   */
  resolve() {
    this.commonService.showLoading();
    return this.commonService.checkVersion().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      this.commonService.hideLoading();
      const localVersion = localStorage.getItem('appVersion');
      const appVersion = res.buildRevision;
      if (localVersion && localVersion != appVersion) {
        localStorage.setItem('appVersion', appVersion);
        setTimeout(() => {
          location.reload();
        }, 10);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version available');
      } else {
        localStorage.setItem('appVersion', appVersion);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version is not available');
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
      this.commonService.hideLoading();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('data not available at this time');
    }));
  }
  static #_ = this.ɵfac = function VersionControlResolver_Factory(t) {
    return new (t || VersionControlResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: VersionControlResolver,
    factory: VersionControlResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 14914:
/*!*********************************************************!*\
  !*** ./src/app/services/dashboard/dashboard.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class DashboardService {
  /**
   * constructor
   * @param http
   */
  constructor(http) {
    this.http = http;
  }
  /**
    Retrieves dashboard Summary information.
    @returns {Observable} An observable that emits the dashboard information.
  */
  getDashboardSummaryInformation(data) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/dashboard/1`;
    return this.http.post(url, data);
  }
  /**
    Retrieves dashboard reapir details information for.
    @returns {Observable} An observable that emits the dashboard information.
  */
  getDashboardRepairDetailsInformation(data) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/dashboard/2`;
    return this.http.post(url, data);
  }
  /**
    Retrieves dashboard Customer details information for.
    @returns {Observable} An observable that emits the dashboard information.
  */
  getDashboardCustomerDetailsInformation(data) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/dashboard/3`;
    return this.http.post(url, data);
  }
  /**
    Retrieves dashboard booking type.
    @returns {Observable} An observable that emits the dashboard information.
  */
  getBookingType(data) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/dashboard/filter/booking-type`;
    return this.http.post(url, data);
  }
  static #_ = this.ɵfac = function DashboardService_Factory(t) {
    return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DashboardService,
    factory: DashboardService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_home_module_ts.js.map